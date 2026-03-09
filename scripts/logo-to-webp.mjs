/**
 * One-off: convert public/brand logo PNG to WebP for LCP optimization.
 * Run: node scripts/logo-to-webp.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const pngPath = join(root, 'public', 'brand', 'gpt-clean-up-tools.png');
const webpPath = join(root, 'public', 'brand', 'gpt-clean-up-tools.webp');

const input = readFileSync(pngPath);
const output = await sharp(input)
  .webp({ quality: 85, effort: 4 })
  .toBuffer();

writeFileSync(webpPath, output);
console.log('Created', webpPath, `(${output.length} bytes)`);
