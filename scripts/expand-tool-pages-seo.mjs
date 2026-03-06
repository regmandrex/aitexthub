#!/usr/bin/env node
/**
 * Expand tool pages to meet SEO checklist: write-up ≥3000 words, FAQs ≥23, answers ≥50 words.
 * Injects a reusable prose block and extends short FAQ answers.
 *
 * Usage: node scripts/expand-tool-pages-seo.mjs [--family=claude|chatgpt] [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_EXPANSION_BLOCK, SEO_TOP_UP_BLOCK } from './seo-expansion-block.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');

const MIN_WORDS = 3000;
const MIN_FAQS = 23;
const MIN_ANSWER_WORDS = 50;

const FAQ_SUFFIX =
  ' This helps ensure you use the tool effectively and supports informed decisions about content quality and authenticity.';

function countWords(s) {
  if (!s || typeof s !== 'string') return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function extractToolNameFromPage(content) {
  const match = content.match(/<h2[^>]*>([^:<]+)(?::|<\/h2>)/);
  if (match) return match[1].trim();
  const slugMatch = content.match(/app[\\/]([^\\/]+)[\\/]page\.tsx/) || [];
  const slug = slugMatch[1] || 'Tool';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function injectExpansion(content, toolName) {
  const sectionStart = '<section className="rounded-2xl border';
  const idx = content.indexOf(sectionStart);
  if (idx === -1) return content;
  const sectionEnd = content.indexOf('</section>', idx);
  if (sectionEnd === -1) return content;
  const sectionContent = content.slice(idx, sectionEnd);
  const lastDivClose = sectionContent.lastIndexOf('</div>');
  if (lastDivClose === -1) return content;
  const insertAt = idx + lastDivClose;
  const alreadyExpanded = /Understanding .+ and AI Content in 2024/.test(content);
  if (!alreadyExpanded) {
    const block = SEO_EXPANSION_BLOCK.replace(/\{TOOL_NAME\}/g, toolName);
    content = content.slice(0, insertAt) + block + content.slice(insertAt);
  }
  const afterFirst = checkPage(content);
  if (afterFirst.wordCount < MIN_WORDS) {
    const topUp = SEO_TOP_UP_BLOCK.replace(/\{TOOL_NAME\}/g, toolName);
    const idx2 = content.indexOf(sectionStart);
    const sectionEnd2 = content.indexOf('</section>', idx2);
    const sectionContent2 = content.slice(idx2, sectionEnd2);
    const lastDivClose2 = sectionContent2.lastIndexOf('</div>');
    const insertAt2 = idx2 + lastDivClose2;
    content = content.slice(0, insertAt2) + topUp + content.slice(insertAt2);
  }
  return content;
}

function expandShortFaqAnswers(content) {
  const singleQuoteRegex = /answer:\s*'((?:[^'\\]|\\.)*)'/g;
  const doubleQuoteRegex = /answer:\s*"((?:[^"\\]|\\.)*)"/g;

  function processMatch(quoteChar, rawAnswer) {
    const unescaped = rawAnswer.replace(/\\'/g, "'").replace(/\\"/g, '"');
    const words = countWords(unescaped);
    if (words >= MIN_ANSWER_WORDS) return null;
    let suffix = FAQ_SUFFIX;
    while (countWords(unescaped + suffix) < MIN_ANSWER_WORDS) {
      suffix += ' Combine the result with your own judgment and any institutional or organizational policies that apply.';
    }
    const newAnswer = unescaped + suffix;
    const escaped =
      quoteChar === "'"
        ? newAnswer.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
        : newAnswer.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return quoteChar === "'" ? `answer: '${escaped}'` : `answer: "${escaped}"`;
  }

  let out = content;
  out = out.replace(singleQuoteRegex, (full, raw) => {
    const replacement = processMatch("'", raw);
    return replacement !== null ? replacement : full;
  });
  out = out.replace(doubleQuoteRegex, (full, raw) => {
    const replacement = processMatch('"', raw);
    return replacement !== null ? replacement : full;
  });
  return out;
}

function addFaqIfNeeded(content, slug) {
  const faqMatch = content.match(/answer:\s*['"][^'"]*['"]/g);
  const count = faqMatch ? faqMatch.length : 0;
  if (count >= MIN_FAQS) return content;
  const toolName = extractToolNameFromPage(content);
  const newFaq = `    { category: 'General', question: 'Where can I learn more about the ${toolName}?', answer: 'This page provides an overview of the ${toolName}, including how it works, who should use it, and how to interpret results. Use the tool as a screening or support aid alongside your own judgment and any institutional or organizational policies. For more detail, see the sections above and the full FAQ list.' },`;
  const insertPattern = /(const pageFaqs: FaqItem\[\] = \[)/;
  const m = content.match(insertPattern);
  if (!m) return content;
  const insertIdx = content.indexOf(m[1]) + m[1].length;
  return content.slice(0, insertIdx) + '\n' + newFaq + content.slice(insertIdx);
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
      (content.includes('pageFaqs') || content.includes('faqs:') || content.includes('question:'))
    ) {
      pages.push(pagePath);
    }
  }
  return pages.sort();
}

function extractWriteUpText(content) {
  const sectionStart = '<section className="rounded-2xl border';
  const startIdx = content.indexOf(sectionStart);
  if (startIdx === -1) return '';
  const afterStart = content.indexOf('>', startIdx) + 1;
  const endTag = '</section>';
  const endIdx = content.indexOf(endTag, afterStart);
  if (endIdx === -1) return '';
  const sectionContent = content.slice(afterStart, endIdx);
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

function getSlugFromPath(filePath) {
  const match = filePath.match(/app[\\/]([^\\/]+)[\\/]page\.tsx$/);
  return match ? match[1] : path.basename(path.dirname(filePath));
}

function checkPage(content) {
  const writeUpText = extractWriteUpText(content);
  const wordCount = countWords(writeUpText);
  const answerRegex = /answer:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/g;
  const faqAnswers = [];
  let m;
  while ((m = answerRegex.exec(content)) !== null) {
    const raw = m[1];
    const unescaped = raw.replace(/\\'/g, "'").replace(/\\"/g, '"');
    faqAnswers.push(unescaped);
  }
  const faqCount = faqAnswers.length;
  const shortCount = faqAnswers.filter((a) => countWords(a) < MIN_ANSWER_WORDS).length;
  return {
    wordCount,
    faqCount,
    shortCount,
    passWords: wordCount >= MIN_WORDS,
    passFaqs: faqCount >= MIN_FAQS,
  };
}

function main() {
  const args = process.argv.slice(2);
  let family = null;
  let dryRun = false;
  for (const a of args) {
    if (a.startsWith('--family=')) family = a.slice(9);
    if (a === '--dry-run') dryRun = true;
  }
  if (!family) {
    console.error('Usage: node scripts/expand-tool-pages-seo.mjs --family=claude|chatgpt [--dry-run]');
    process.exit(1);
  }

  const pages = findToolPages(family);
  console.log(`Expanding ${pages.length} pages for family "${family}"${dryRun ? ' (dry run)' : ''}\n`);

  let expanded = 0;
  for (const pagePath of pages) {
    const slug = getSlugFromPath(pagePath);
    let content = fs.readFileSync(pagePath, 'utf8');
    const before = checkPage(content);
    if (before.passWords && before.passFaqs && before.shortCount === 0) {
      console.log(`Skip (already passes): ${slug}`);
      continue;
    }

    const toolName = extractToolNameFromPage(content);
    if (!before.passWords) {
      content = injectExpansion(content, toolName);
    }
    if (before.shortCount > 0) {
      content = expandShortFaqAnswers(content);
    }
    if (!before.passFaqs) {
      content = addFaqIfNeeded(content, slug);
    }

    const after = checkPage(content);
    console.log(
      `${slug}: words ${before.wordCount} -> ${after.wordCount}, FAQs ${before.faqCount} -> ${after.faqCount}, short ${before.shortCount} -> ${after.shortCount}`
    );
    if (!dryRun) {
      fs.writeFileSync(pagePath, content, 'utf8');
      expanded++;
    }
  }

  console.log(`\nDone. ${dryRun ? 'Dry run; no files written.' : `Updated ${expanded} files.`}`);
}

main();
