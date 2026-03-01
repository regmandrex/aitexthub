#!/usr/bin/env node
/**
 * Audit tool pages: min 3k words total (write-up + FAQs), min 23 FAQs, substantive FAQ answers (not one-liners).
 * Emphasis on write-up section driving word count. FAQs must answer properly, not >50 words required.
 * Usage: node scripts/audit-tool-pages.mjs
 * Exit code 0 = all pass; 1 = one or more fail.
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
  'playboi-carti-translator',
  'word-descrambler',
  'gibberish-translator',
  'two-name-ambigram-generator',
  'ambigram-tattoo-generator',
  'medieval-translator',
  'shakespearean-translator',
  'middle-english-translator',
  'old-english-translator',
  'navajo-translator',
  // Name generators (3k + 23 substantive FAQs)
  'muslim-name-generator',
  'transformers-name-generator',
  'naruto-name-generator',
  'fallout-name-generator',
  'elden-ring-name-generator',
  'island-name-generator',
  'ancient-greek-name-generator',
  'anime-names-generator',
  'tribe-name-generator',
  'runescape-name-generator',
  'steam-name-generator',
  'god-goddess-name-generator',
  'drag-queen-name-generator',
  'wrestling-name-generator',
  'royal-surname-generator',
  'silly-name-generator',
  'bracket-name-generator',
  'mlp-name-generator',
  'stripper-name-generator',
  'shopify-store-name-generator',
  'korean-name-generator-male',
  'gorilla-tag-name-generator',
  'hollow-knight-name-generator',
  'coven-name-generator',
  'bg3-name-generator',
  'secret-organization-name-generator',
  'genderbend-name-generator',
  'motorcycle-club-name-generator',
  'beyblade-name-generator',
  'homestuck-troll-name-generator',
  'symbiote-name-generator',
  'speedster-name-generator',
  'boxer-name-generator',
  'hillbilly-name-generator',
  'crew-name-generator',
  'tadc-name-generator',
  'httyd-name-generator',
  'drag-king-name-generator',
  'yautja-name-generator',
  'badass-username-generator',
  'army-name-generator',
  'nun-name-generator',
  'clash-royale-name-generator',
  'task-force-name-generator',
  'kik-name-generator',
  'tumblr-blog-name-generator',
  'amusement-park-name-generator',
  'fakemon-name-generator',
  '40k-planet-name-generator',
  'magical-girl-name-generator',
];

const MIN_TOTAL_WORDS = 3000;
const MIN_FAQS = 23;
const MIN_AVG_WORDS_PER_FAQ = 20; // substantive answers (not one-line); no upper limit

function countFaqs(content) {
  const match = content.match(/const pageFaqs: FaqItem\[\] = \[([\s\S]*?)\];/);
  if (!match) return 0;
  const inner = match[1];
  return (inner.match(/\{\s*category:/g) || []).length;
}

function extractFaqAnswerText(content) {
  const match = content.match(/const pageFaqs: FaqItem\[\] = \[([\s\S]*?)\];/);
  if (!match) return [];
  const inner = match[1];
  const answers = [];
  const answerRe = /answer:\s*['"`]([\s\S]*?)['"`]\s*[,}]/g;
  let m;
  while ((m = answerRe.exec(inner)) !== null) {
    const raw = m[1].replace(/\\'/g, "'").replace(/\\"/g, '"');
    answers.push(raw);
  }
  return answers;
}

function countWords(str) {
  if (!str || !str.trim()) return 0;
  return str.replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
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
  return countWords(stripped);
}

function countWordsInFaqs(content) {
  const answers = extractFaqAnswerText(content);
  return answers.reduce((sum, a) => sum + countWords(a), 0);
}

function audit() {
  console.log('Audit: min 3k total words (write-up + FAQs), min 23 FAQs, substantive FAQ answers (avg >= 20 words)\n');
  const rows = [];
  for (const slug of TOOL_SLUGS) {
    const filePath = path.join(root, 'app', slug, 'page.tsx');
    if (!fs.existsSync(filePath)) {
      rows.push({ tool: slug, faqs: '-', total: null, write: null, faqWords: null, status: 'N/A (no page)' });
      continue;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const faqCount = countFaqs(content);
    const writeWords = countWordsInWriteUp(content);
    const faqWords = countWordsInFaqs(content);
    const totalWords = writeWords + faqWords;
    const avgFaqWords = faqCount > 0 ? Math.round(faqWords / faqCount) : 0;
    const totalOk = totalWords >= MIN_TOTAL_WORDS;
    const faqCountOk = faqCount >= MIN_FAQS;
    const faqLongFormOk = avgFaqWords >= MIN_AVG_WORDS_PER_FAQ;
    const status = totalOk && faqCountOk && faqLongFormOk ? 'OK' : (totalOk ? '' : 'words') + (faqCountOk ? '' : 'faq#') + (faqLongFormOk ? '' : 'short');
    rows.push({
      tool: slug,
      faqs: faqCount,
      total: totalWords,
      write: writeWords,
      faqWords,
      avgFaqWords,
      totalOk,
      faqCountOk,
      faqLongFormOk,
      status: status || 'OK',
    });
  }

  const col1 = Math.max(32, ...rows.map((r) => r.tool.length));
  const header = `${'Tool'.padEnd(col1)}  FAQs   Total   Write   FAQ w   AvgFAQ`;
  console.log(header);
  console.log('-'.repeat(header.length));
  for (const r of rows) {
    const faqStr = r.faqs === '-' ? '  -' : String(r.faqs).padStart(4);
    const totalStr = r.total == null ? '   -' : String(r.total).padStart(5);
    const writeStr = r.write == null ? '   -' : String(r.write).padStart(5);
    const faqWStr = r.faqWords == null ? '   -' : String(r.faqWords).padStart(5);
    const avgStr = r.avgFaqWords == null ? '  -' : String(r.avgFaqWords).padStart(5);
    const statusStr = r.status !== 'OK' ? `  [${r.status}]` : '';
    console.log(`${r.tool.padEnd(col1)}  ${faqStr}  ${totalStr}  ${writeStr}  ${faqWStr}  ${avgStr}${statusStr}`);
  }
  console.log('');
  const allTotalOk = rows.every((r) => r.totalOk !== false);
  const allFaqCountOk = rows.every((r) => r.faqCountOk !== false);
  const allFaqLongOk = rows.every((r) => r.faqLongFormOk !== false);
  console.log(`Total words (write-up + FAQs) >= ${MIN_TOTAL_WORDS}: ${allTotalOk ? 'Yes' : 'No – some under.'}`);
  console.log(`FAQs count >= ${MIN_FAQS}: ${allFaqCountOk ? 'Yes' : 'No – some under.'}`);
  console.log(`FAQ answers substantive (avg >= ${MIN_AVG_WORDS_PER_FAQ} words, not one-liners): ${allFaqLongOk ? 'Yes' : 'No – some too short.'}`);
  const ok = allTotalOk && allFaqCountOk && allFaqLongOk;
  process.exit(ok ? 0 : 1);
}

audit();
