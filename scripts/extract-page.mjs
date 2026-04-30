#!/usr/bin/env node
// Usage: node scripts/extract-page.mjs <url> <out.json>
// Extracts: fonts, colors, DOM tree (5 levels), images, bg images, SVGs, text content, global libs
import { chromium } from 'playwright';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const [url, outFile] = process.argv.slice(2);
if (!url || !outFile) {
  console.error('Usage: node scripts/extract-page.mjs <url> <out.json>');
  process.exit(1);
}

await mkdir(path.dirname(path.resolve(outFile)), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(3000);

const data = await page.evaluate(() => {
  const CSS_PROPS = [
    'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
    'textTransform','textDecoration','backgroundColor','background',
    'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
    'margin','marginTop','marginRight','marginBottom','marginLeft',
    'width','height','maxWidth','minWidth','maxHeight','minHeight',
    'display','flexDirection','justifyContent','alignItems','gap',
    'gridTemplateColumns','gridTemplateRows',
    'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
    'boxShadow','overflow','overflowX','overflowY',
    'position','top','right','bottom','left','zIndex',
    'opacity','transform','transition','cursor',
    'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
    'whiteSpace','textOverflow','WebkitLineClamp',
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
    if (depth > 5) return null;
    const children = [...el.children];
    const tag = el.tagName.toLowerCase();
    const classes = (el.className?.toString() || '').split(' ').filter(Boolean).slice(0, 8).join(' ');
    const id = el.id || null;
    const text = el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
      ? el.textContent.trim().slice(0, 300) : null;
    const imgData = tag === 'img' ? { src: el.src, alt: el.alt, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight } : null;
    const href = (tag === 'a') ? el.href : null;
    return {
      tag, classes, id, text, href, imgData,
      styles: depth <= 2 ? extractStyles(el) : undefined,
      childCount: children.length,
      children: children.slice(0, 30).map(c => walkDOM(c, depth + 1)).filter(Boolean),
    };
  }

  const fontLinks = [...document.querySelectorAll('link[href*="fonts.google"], link[href*="fonts.gstatic"]')].map(l => l.href);
  const metaFonts = [...new Set(
    [...document.querySelectorAll('body, h1, h2, h3, h4, p, span, a, button')].slice(0, 100).map(el => window.getComputedStyle(el).fontFamily)
  )];

  const colorSamples = [...document.querySelectorAll('body, h1, h2, h3, h4, p, a, button, section, header, footer, [class*="btn"], [class*="cta"]')].slice(0, 100).map(el => {
    const cs = window.getComputedStyle(el);
    return { tag: el.tagName, class: el.className?.toString().slice(0,40), color: cs.color, bg: cs.backgroundColor, border: cs.borderColor };
  });

  const images = [...document.querySelectorAll('img')].map(img => ({
    src: img.src || img.currentSrc,
    alt: img.alt,
    width: img.naturalWidth,
    height: img.naturalHeight,
    loading: img.loading,
    parentClasses: img.parentElement?.className?.toString().slice(0,80),
    position: window.getComputedStyle(img).position,
    zIndex: window.getComputedStyle(img).zIndex,
  }));

  const bgImages = [...document.querySelectorAll('*')].filter(el => {
    const bg = window.getComputedStyle(el).backgroundImage;
    return bg && bg !== 'none';
  }).slice(0, 100).map(el => ({
    url: window.getComputedStyle(el).backgroundImage,
    element: el.tagName + (el.id ? '#'+el.id : '') + '.' + (el.className?.toString().split(' ')[0] || ''),
    backgroundSize: window.getComputedStyle(el).backgroundSize,
    backgroundPosition: window.getComputedStyle(el).backgroundPosition,
  }));

  const svgs = [...document.querySelectorAll('svg')].slice(0, 50).map(svg => ({
    outerHTML: svg.outerHTML.slice(0, 2000),
    parentClasses: svg.parentElement?.className?.toString().slice(0,60),
    width: svg.getAttribute('width'),
    height: svg.getAttribute('height'),
    viewBox: svg.getAttribute('viewBox'),
  }));

  const videos = [...document.querySelectorAll('video')].map(v => ({
    src: v.src || v.querySelector?.('source')?.src,
    poster: v.poster,
    autoplay: v.autoplay,
    loop: v.loop,
    muted: v.muted,
    controls: v.controls,
  }));

  const favicons = [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({ href: l.href, rel: l.rel, sizes: l.sizes?.toString() }));
  const ogMeta = [...document.querySelectorAll('meta[property^="og:"], meta[name="description"], meta[name="keywords"]')].map(m => ({ name: m.name || m.getAttribute('property'), content: m.content }));

  const scripts = [...document.querySelectorAll('script[src]')].map(s => s.src).filter(s => s.includes('gtm') || s.includes('pixel') || s.includes('hotjar') || s.includes('ga') || s.includes('analytics') || s.includes('rdstation') || s.includes('lenis') || s.includes('gsap') || s.includes('locomotive'));

  const globalLibs = {
    hasLenis: !!document.querySelector('.lenis') || !!window.lenis,
    hasGSAP: typeof window.gsap !== 'undefined',
    hasLocomotive: !!document.querySelector('[data-scroll-container]'),
    hasjQuery: typeof window.jQuery !== 'undefined',
    hasSwiper: typeof window.Swiper !== 'undefined',
    hasElementor: !!document.querySelector('.elementor'),
  };

  const headings = [...document.querySelectorAll('h1, h2, h3')].slice(0, 30).map(h => ({
    tag: h.tagName,
    text: h.textContent.trim().slice(0, 200),
    styles: extractStyles(h),
  }));

  const navLinks = [...document.querySelectorAll('nav a, header a, .menu a, [class*="nav"] a, [class*="menu"] a')].slice(0, 40).map(a => ({
    text: a.textContent.trim(),
    href: a.href,
  }));

  return {
    title: document.title,
    url: window.location.href,
    fontLinks,
    metaFonts,
    colorSamples: colorSamples.slice(0, 60),
    images,
    bgImages,
    svgs: svgs.slice(0, 20),
    videos,
    favicons,
    ogMeta,
    scripts,
    globalLibs,
    headings,
    navLinks,
    dom: walkDOM(document.body, 0),
  };
});

await writeFile(path.resolve(outFile), JSON.stringify(data, null, 2), 'utf8');
console.log(`Extracted to ${outFile}`);

await browser.close();
