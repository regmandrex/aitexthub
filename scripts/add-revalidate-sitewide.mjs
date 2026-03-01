#!/usr/bin/env node
/**
 * Add revalidate = 86400 to all app page.tsx files that don't have it.
 * Run from project root: node scripts/add-revalidate-sitewide.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const appDir = path.join(root, 'app');

const REVALIDATE_LINE = "export const revalidate = 86400;\n";

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, files);
    else if (e.name === 'page.tsx') files.push(full);
  }
  return files;
}

const pages = walk(appDir);
let added = 0;
let skipped = 0;

for (const file of pages) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('revalidate') || content.includes("export const dynamic")) {
    skipped++;
    continue;
  }
  // Insert before first top-level export (after imports)
  const insertMatch = content.match(/\n(export default |export async function generateMetadata|export function generateMetadata|export default async function|const toolSlug|const faqKeys|const pageFaqs|const faqs)/m);
  let newContent;
  if (insertMatch) {
    const idx = content.indexOf(insertMatch[1]);
    newContent = content.slice(0, idx) + REVALIDATE_LINE + "\n" + content.slice(idx);
  } else {
    const lastImport = content.lastIndexOf("from '");
    const afterImports = lastImport > 0 ? content.indexOf("\n\n", lastImport) + 2 : 0;
    if (afterImports > 1) {
      newContent = content.slice(0, afterImports) + REVALIDATE_LINE + "\n" + content.slice(afterImports);
    } else {
      newContent = REVALIDATE_LINE + "\n" + content;
    }
  }
  fs.writeFileSync(file, newContent, 'utf8');
  added++;
  console.log('Added revalidate:', path.relative(root, file));
}

console.log('\nDone. Added to', added, 'pages, skipped', skipped, '(already had revalidate or dynamic).');
