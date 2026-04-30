#!/usr/bin/env node
// Usage: node scripts/extract-section.mjs <url> <css-selector> <out.json>
// Extracts detailed computed styles for a specific section/component
import { chromium } from 'playwright';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const [url, selector, outFile] = process.argv.slice(2);
if (!url || !selector || !outFile) {
  console.error('Usage: node scripts/extract-section.mjs <url> <css-selector> <out.json>');
  process.exit(1);
}

await mkdir(path.dirname(path.resolve(outFile)), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);

const data = await page.evaluate((sel) => {
  const CSS_PROPS = [
    'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
    'textTransform','textDecoration','backgroundColor','background',
    'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
    'margin','marginTop','marginRight','marginBottom','marginLeft',
    'width','height','maxWidth','minWidth','maxHeight','minHeight',
    'display','flexDirection','justifyContent','alignItems','gap','flexWrap',
    'gridTemplateColumns','gridTemplateRows','gridGap',
    'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
    'boxShadow','overflow','overflowX','overflowY',
    'position','top','right','bottom','left','zIndex',
    'opacity','transform','transition','animation','cursor',
    'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
    'whiteSpace','textOverflow','WebkitLineClamp',
    'backgroundImage','backgroundSize','backgroundPosition','backgroundRepeat',
  ];

  function extractStyles(el) {
    const cs = window.getComputedStyle(el);
    const out = {};
    for (const p of CSS_PROPS) {
      const v = cs[p];
      if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') {
        out[p] = v;
      }
    }
    return out;
  }

  function walkDOM(el, depth) {
    if (depth > 6) return null;
    const children = [...el.children];
    const tag = el.tagName.toLowerCase();
    const cs = extractStyles(el);
    const rect = el.getBoundingClientRect();
    return {
      tag,
      classes: (el.className?.toString() || '').split(' ').filter(Boolean).join(' '),
      id: el.id || null,
      text: el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 500) : null,
      href: tag === 'a' ? el.href : null,
      src: tag === 'img' ? { src: el.src, alt: el.alt, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight } : null,
      rect: { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) },
      styles: cs,
      childCount: children.length,
      children: children.slice(0, 40).map(c => walkDOM(c, depth + 1)).filter(Boolean),
    };
  }

  const el = document.querySelector(sel);
  if (!el) return { error: `Element not found: ${sel}` };

  return {
    selector: sel,
    found: true,
    scrollY: window.scrollY,
    tree: walkDOM(el, 0),
  };
}, selector);

await writeFile(path.resolve(outFile), JSON.stringify(data, null, 2), 'utf8');
console.log(`Extracted section "${selector}" to ${outFile}`);

await browser.close();
