#!/usr/bin/env node
// Usage: node scripts/download-assets.mjs <extraction-json> [--dry-run]
// Downloads all images/videos/fonts from extracted page data to public/assets/
import { readFile, writeFile, mkdir } from 'fs/promises';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const [jsonFile, flag] = process.argv.slice(2);
const DRY_RUN = flag === '--dry-run';

if (!jsonFile) {
  console.error('Usage: node scripts/download-assets.mjs <extraction-json> [--dry-run]');
  process.exit(1);
}

const data = JSON.parse(await readFile(jsonFile, 'utf8'));

function urlToLocalPath(rawUrl) {
  try {
    const u = new URL(rawUrl);
    const parts = u.pathname.split('/').filter(Boolean);
    return path.join(ROOT, 'public', 'assets', ...parts);
  } catch {
    return null;
  }
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    mkdir(path.dirname(dest), { recursive: true }).then(() => {
      const proto = url.startsWith('https') ? https : http;
      proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode} for ${url}`)); return; }
        const stream = createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', resolve);
        stream.on('error', reject);
      }).on('error', reject);
    });
  });
}

async function downloadBatch(items, concurrency = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const settled = await Promise.allSettled(batch.map(async ({ url, dest }) => {
      if (DRY_RUN) { console.log(`[dry] ${url} -> ${dest}`); return; }
      await download(url, dest);
      console.log(`✓ ${dest.replace(ROOT, '')}`);
    }));
    results.push(...settled);
  }
  return results;
}

const assets = [];

// Images
for (const img of data.images || []) {
  if (img.src && img.src.startsWith('http') && img.src.includes('elentolentino.com.br')) {
    const dest = urlToLocalPath(img.src);
    if (dest) assets.push({ url: img.src, dest });
  }
}

// Background images
for (const bg of data.bgImages || []) {
  const match = bg.url?.match(/url\(["']?([^"')]+)["']?\)/);
  if (match && match[1].startsWith('http') && match[1].includes('elentolentino.com.br')) {
    const dest = urlToLocalPath(match[1]);
    if (dest) assets.push({ url: match[1], dest });
  }
}

// Deduplicate by dest
const seen = new Set();
const unique = assets.filter(a => {
  if (seen.has(a.dest)) return false;
  seen.add(a.dest);
  return true;
});

console.log(`Found ${unique.length} assets to download (${DRY_RUN ? 'dry-run' : 'downloading'})`);
const results = await downloadBatch(unique);
const failed = results.filter(r => r.status === 'rejected');
if (failed.length > 0) {
  console.error(`\n${failed.length} failed:`);
  failed.forEach(f => console.error(' ', f.reason?.message));
}
console.log(`\nDone: ${unique.length - failed.length} downloaded, ${failed.length} failed`);
