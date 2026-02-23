#!/usr/bin/env node
/**
 * Audit tool pages: min 4k words write-up + min 22 FAQs.
 * Usage: node scripts/audit-tool-pages.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const TOOL_SLUGS = [
  'fancy-english-translator',
  'simlish-translator',
  'species-name-generator',
  'ganglish-translator',
  'cartinese-translator',
  'word-descrambler',
  'gibberish-translator',
  'two-name-ambigram-generator',
  'ambigram-tattoo-generator',
  'medieval-translator',
  'shakespearean-translator',
  'middle-english-translator',
  'old-english-translator',
  'navajo-translator',
];

const MIN_WORDS = 4000;
const MIN_FAQS = 22;

function countFaqs(content) {
  const match = content.match(/const pageFaqs: FaqItem\[\] = \[([\s\S]*?)\];/);
  if (!match) return 0;
  const inner = match[1];
  return (inner.match(/\{\s*category:/g) || []).length;
}

function extractWriteUpContent(content) {
  const start = content.indexOf('function createWriteUp()');
  if (start === -1) return '';
  const from = content.indexOf('<section', start);
  if (from === -1) return '';
  let depth = 0;
  let end = -1;
  for (let i = from; i < content.length; i++) {
    if (content.slice(i, i + 8) === '<section') {
      depth++;
    } else if (content.slice(i, i + 10) === '</section>') {
      depth--;
      if (depth === 0) {
        end = i + 10;
        break;
      }
    }
  }
  if (end === -1) return '';
  return content.slice(from, end);
}

function countWordsInWriteUp(content) {
  const section = extractWriteUpContent(content);
  const stripped = section
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return stripped ? stripped.split(' ').filter(Boolean).length : 0;
}

function audit() {
  console.log('Audit: min 4k words write-up + min 22 FAQs\n');
  const rows = [];
  for (const slug of TOOL_SLUGS) {
    const filePath = path.join(root, 'app', slug, 'page.tsx');
    if (!fs.existsSync(filePath)) {
      rows.push({ tool: slug, faqs: '-', write: 'N/A (no page)' });
      continue;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const faqs = countFaqs(content);
    const words = countWordsInWriteUp(content);
    const writeStatus = words >= MIN_WORDS ? 'Long' : 'Short';
    rows.push({
      tool: slug,
      faqs,
      words,
      write: writeStatus,
      faqOk: faqs >= MIN_FAQS,
      writeOk: words >= MIN_WORDS,
    });
  }

  const col1 = Math.max(28, ...rows.map((r) => r.tool.length));
  const header = `${'Tool'.padEnd(col1)}  FAQs    Write`;
  console.log(header);
  console.log('-'.repeat(header.length));
  for (const r of rows) {
    const faqStr = r.faqs === '-' ? r.faqs : String(r.faqs).padStart(3);
    const writeStr = r.write === 'N/A (no page)' ? r.write : (r.write + (r.words != null ? ` (~${r.words})` : ''));
    console.log(`${r.tool.padEnd(col1)}  ${faqStr}    ${writeStr}`);
  }
  console.log('');
  const allFaqOk = rows.every((r) => r.faqOk !== false);
  const allWriteOk = rows.every((r) => r.writeOk !== false);
  console.log(`FAQs (min ${MIN_FAQS}): ${allFaqOk ? 'Yes – all meet.' : 'No – some under.'}`);
  console.log(`Write-up (min ${MIN_WORDS} words): ${allWriteOk ? 'Yes – all Long.' : 'Only partly – some Short.'}`);
  process.exit(allFaqOk && allWriteOk ? 0 : 1);
}

audit();
