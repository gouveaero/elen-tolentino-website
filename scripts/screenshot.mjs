#!/usr/bin/env node
// Usage: node scripts/screenshot.mjs <url> <slug>
// Saves fullpage screenshots at 1440px and 390px to docs/design-references/<slug>/
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const [url, slug] = process.argv.slice(2);
if (!url || !slug) {
  console.error('Usage: node scripts/screenshot.mjs <url> <slug>');
  process.exit(1);
}

const outDir = path.join(ROOT, 'docs', 'design-references', slug);
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  const outPath = path.join(outDir, `${vp.name}.png`);
  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`Saved ${outPath}`);
  await page.close();
}

await browser.close();
