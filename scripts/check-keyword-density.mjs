#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', 'app');

function extractWriteUp(filePath) {
  const c = fs.readFileSync(filePath, 'utf8');
  const start = c.indexOf('function createWriteUp()');
  if (start === -1) return '';
  const from = c.indexOf('<section', start);
  let depth = 0, end = -1;
  for (let i = from; i < c.length; i++) {
    if (c.slice(i, i + 8) === '<section') depth++;
    else if (c.slice(i, i + 10) === '</section>') { depth--; if (depth === 0) { end = i + 10; break; } }
  }
  return end === -1 ? '' : c.slice(from, end);
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function countWords(s) {
  return s ? s.split(' ').filter(Boolean).length : 0;
}

function countPhrase(text, phrase) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped, 'gi');
  return (text.match(re) || []).length;
}

const pages = [
  { slug: 'ganglish-translator', primary: 'Ganglish translator', secondary: 'Ganglish' },
  { slug: 'simlish-translator', primary: 'Simlish translator', secondary: 'Simlish' },
  { slug: 'gibberish-translator', primary: 'Gibberish translator', secondary: 'Gibberish' },
  { slug: 'fancy-english-translator', primary: 'fancy English translator', secondary: 'fancy text' },
];

console.log('Keyword density (write-up only):\n');
pages.forEach((p) => {
  const filePath = path.join(root, p.slug, 'page.tsx');
  const html = extractWriteUp(filePath);
  const text = stripHtml(html);
  const words = countWords(text);
  const n1 = countPhrase(text, p.primary);
  const n2 = countPhrase(text, p.secondary);
  const d1 = ((n1 / words) * 100).toFixed(2);
  const d2 = ((n2 / words) * 100).toFixed(2);
  console.log(`${p.slug}:`);
  console.log(`  words: ${words} | "${p.primary}": ${n1} (${d1}%) | "${p.secondary}": ${n2} (${d2}%)`);
  console.log('');
});
