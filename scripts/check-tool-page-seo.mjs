#!/usr/bin/env node
/**
 * Tool page SEO checklist checker (ESM).
 * Verifies per docs/tool-page-seo-checklist.md:
 * - §1 Write-up ≥ 3,000 words (prose block only)
 * - §2 FAQs ≥ 23, with detailed answers (target 50–150+ words each)
 *
 * Usage: node scripts/check-tool-page-seo.mjs [--slug=xxx] [--family=chatgpt|claude]
 * Default: check all app subdirs with page.tsx that look like tool pages.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');

const MIN_WORDS = 3000;
const MIN_FAQS = 23;
const MIN_ANSWER_WORDS = 50; // target; flag answers shorter than this

function extractWriteUpText(content) {
  const sectionStart = '<section className="rounded-2xl border';
  const startIdx = content.indexOf(sectionStart);
  if (startIdx === -1) return '';
  const afterStart = content.indexOf('>', startIdx) + 1;
  const endTag = '</section>';
  const endIdx = content.indexOf(endTag, afterStart);
  if (endIdx === -1) return '';
  const sectionContent = content.slice(afterStart, endIdx);
  // Strip JSX: replace {"..."} and {'...'} with inner text, then remove remaining tags
  let text = sectionContent
    .replace(/\{\s*"((?:[^"\\]|\\.)*)"\s*\}/g, '$1')
    .replace(/\{\s*'((?:[^'\\]|\\.)*)'\s*\}/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  return text;
}

function countWords(s) {
  if (!s || typeof s !== 'string') return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function extractFaqs(content) {
  const faqs = [];
  // Match answer: '...' or answer: "..." (handle escaped quotes inside)
  const answerRegex = /answer:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/g;
  let m;
  while ((m = answerRegex.exec(content)) !== null) {
    const raw = m[1];
    const unescaped = raw.replace(/\\'/g, "'").replace(/\\"/g, '"');
    faqs.push(unescaped);
  }
  return faqs;
}

function getSlugFromPath(filePath) {
  const match = filePath.match(/app[\\/]([^\\/]+)[\\/]page\.tsx$/);
  return match ? match[1] : path.basename(path.dirname(filePath));
}

function checkPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const slug = getSlugFromPath(filePath);

  const writeUpText = extractWriteUpText(content);
  const wordCount = countWords(writeUpText);

  const faqAnswers = extractFaqs(content);
  const faqCount = faqAnswers.length;
  const answerWordCounts = faqAnswers.map(countWords);
  const shortCount = answerWordCounts.filter((w) => w < MIN_ANSWER_WORDS).length;
  const avgAnswerWords =
    answerWordCounts.length > 0
      ? Math.round(
          answerWordCounts.reduce((a, b) => a + b, 0) / answerWordCounts.length
        )
      : 0;

  return {
    slug,
    wordCount,
    faqCount,
    shortFaqCount: shortCount,
    avgAnswerWords,
    passWordCount: wordCount >= MIN_WORDS,
    passFaqCount: faqCount >= MIN_FAQS,
  };
}

function findToolPages(includeFamily) {
  const dirs = fs.readdirSync(APP, { withFileTypes: true });
  const pages = [];
  for (const d of dirs) {
    if (!d.isDirectory()) continue;
    const pagePath = path.join(APP, d.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    if (includeFamily && !d.name.startsWith(includeFamily + '-')) continue;
    const content = fs.readFileSync(pagePath, 'utf8');
    if (
      (content.includes('createWriteUp') || content.includes('writeUp')) &&
      (content.includes('pageFaqs') || content.includes('faqs:') || content.includes("question:"))
    ) {
      pages.push(pagePath);
    }
  }
  return pages.sort();
}

function main() {
  const args = process.argv.slice(2);
  let slugFilter = null;
  let familyFilter = null;
  for (const a of args) {
    if (a.startsWith('--slug=')) slugFilter = a.slice(7);
    if (a.startsWith('--family=')) familyFilter = a.slice(9);
  }

  const pages = findToolPages(familyFilter);
  const results = [];

  for (const pagePath of pages) {
    const slug = getSlugFromPath(pagePath);
    if (slugFilter && slug !== slugFilter) continue;
    try {
      results.push(checkPage(pagePath));
    } catch (err) {
      console.error('Error checking', pagePath, err.message);
    }
  }

  // Report
  console.log('\nTool page SEO checklist (docs/tool-page-seo-checklist.md)\n');
  console.log(`Criteria: Write-up ≥ ${MIN_WORDS} words | FAQs ≥ ${MIN_FAQS} | Answers target ≥ ${MIN_ANSWER_WORDS} words\n`);
  console.log(
    'Slug'.padEnd(45) +
      'Words'.padStart(8) +
      'FAQs'.padStart(6) +
      'Short'.padStart(7) +
      'AvgAns'.padStart(8) +
      '  Pass'
  );
  console.log('-'.repeat(85));

  let passWord = 0;
  let passFaq = 0;
  let passBoth = 0;

  for (const r of results) {
    const pass =
      (r.passWordCount ? '✓' : '✗') + (r.passFaqCount ? '✓' : '✗');
    if (r.passWordCount) passWord++;
    if (r.passFaqCount) passFaq++;
    if (r.passWordCount && r.passFaqCount) passBoth++;
    console.log(
      r.slug.padEnd(45) +
        String(r.wordCount).padStart(8) +
        String(r.faqCount).padStart(6) +
        String(r.shortFaqCount).padStart(7) +
        String(r.avgAnswerWords).padStart(8) +
        '  ' +
        pass
    );
  }

  console.log('-'.repeat(85));
  console.log(
    `\nSummary: ${results.length} pages | ` +
      `Words ≥${MIN_WORDS}: ${passWord} | ` +
      `FAQs ≥${MIN_FAQS}: ${passFaq} | ` +
      `Both: ${passBoth}`
  );
  console.log(
    `Short = answers with < ${MIN_ANSWER_WORDS} words (target 50–150+ for SEO).\n`
  );
}

main();
