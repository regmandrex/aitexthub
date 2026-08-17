#!/usr/bin/env node
/**
 * Verifies each category content file meets the site SEO minimums:
 * 5,000 words of prose and 23 FAQs.
 *
 * Counts visible text only: JSX tags, imports, and attribute values are
 * stripped so the number reflects what a reader (and a crawler) actually sees.
 *
 * Usage: node scripts/check-category-wordcount.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'lib', 'seo', 'category-content');

const MIN_WORDS = 5000;
const MIN_FAQS = 23;

function countWords(source) {
  let text = source;

  // Drop imports, type declarations and the trailing export block.
  text = text.replace(/^import[\s\S]*?;$/gm, '');

  // JSX expression containers that are pure syntax noise, e.g. {' '}
  text = text.replace(/\{'\s*'\}/g, ' ');

  // <Link href="...">Label</Link> -> keep the label, drop the attributes.
  text = text.replace(/<([A-Za-z][\w.]*)((?:\s+[\w:-]+=(?:"[^"]*"|\{[^}]*\}))*)\s*\/?>/g, ' ');
  text = text.replace(/<\/[A-Za-z][\w.]*>/g, ' ');
  text = text.replace(/<>|<\/>/g, ' ');

  // Remaining JSX braces and JS string quoting around FAQ text.
  text = text.replace(/[{}]/g, ' ');

  // HTML entities used in the prose.
  text = text.replace(/&[a-z]+;/g, 'x');

  const words = text
    .split(/\s+/)
    .map((w) => w.replace(/^[^\w']+|[^\w']+$/g, ''))
    .filter((w) => /[A-Za-z0-9]/.test(w));

  return words.length;
}

function countFaqs(source) {
  const match = source.match(/const faqs: FaqItem\[\] = \[([\s\S]*?)\n\];/);
  if (!match) return 0;
  return (match[1].match(/^\s{2}\{$/gm) || []).length;
}

const files = fs
  .readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith('.tsx'))
  .sort();

if (files.length === 0) {
  console.log('No category content files found.');
  process.exit(0);
}

let failed = false;
const rows = [];

for (const file of files) {
  const source = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
  const words = countWords(source);
  const faqCount = countFaqs(source);
  const wordsOk = words >= MIN_WORDS;
  const faqsOk = faqCount >= MIN_FAQS;
  if (!wordsOk || !faqsOk) failed = true;

  rows.push({
    file: file.replace(/\.tsx$/, ''),
    words,
    faqs: faqCount,
    status: wordsOk && faqsOk ? 'PASS' : 'FAIL',
  });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(`${pad('CATEGORY', 30)}${pad('WORDS', 9)}${pad('FAQS', 7)}STATUS`);
console.log('-'.repeat(55));
for (const r of rows) {
  const wordCell = `${r.words}${r.words >= MIN_WORDS ? '' : ` (<${MIN_WORDS})`}`;
  const faqCell = `${r.faqs}${r.faqs >= MIN_FAQS ? '' : ` (<${MIN_FAQS})`}`;
  console.log(`${pad(r.file, 30)}${pad(wordCell, 9)}${pad(faqCell, 7)}${r.status}`);
}

if (failed) {
  console.error(`\nSome category pages are below the minimum (${MIN_WORDS} words, ${MIN_FAQS} FAQs).`);
  process.exit(1);
}
console.log('\nAll category pages meet the minimums.');
