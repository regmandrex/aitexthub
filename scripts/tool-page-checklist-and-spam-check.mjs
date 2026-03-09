#!/usr/bin/env node
/**
 * Tool page checklist + spam check for translator/generator pages.
 * Verifies:
 *   - No spammy cross-tool mentions in write-up (space remover, strip HTML, long tool lists, etc.)
 *   - Min 3k total words (write-up + FAQs), min 23 FAQs, substantive FAQ answers
 *   - Tool name in 2–4 H2s (optional report)
 * Usage: node scripts/tool-page-checklist-and-spam-check.mjs [slug1 slug2 ...]
 *        If no slugs given, checks TRANSLATOR_AND_GENERATOR_SLUGS.
 *        Use --all to discover and check every app/<slug>/page.tsx that has createWriteUp().
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const appDir = path.join(root, 'app');

const TRANSLATOR_AND_GENERATOR_SLUGS = [
  'ganglish-translator',
  'simlish-translator',
  'gibberish-translator',
  'fancy-english-translator',
  'cartinese-translator',
  'playboi-carti-translator',
  'word-descrambler',
  'two-name-ambigram-generator',
  'ambigram-tattoo-generator',
  'species-name-generator',
];

// Default cross-tool names to flag when slug is not in OTHER_TOOL_NAMES_BY_SLUG (current tool name is excluded)
const DEFAULT_OTHER_TOOL_NAMES = [
  'Simlish translator', 'Ganglish translator', 'Cartinese translator', 'gibberish translator', 'fancy English translator',
  'word descrambler', 'species name generator', 'ambigram', 'two-name ambigram', 'ambigram tattoo',
  'Shakespearean translator', 'middle English translator', 'old English translator', 'Navajo translator',
  'Muslim name generator', 'god and goddess name generator', 'transformers name generator',
];

// Phrases that should never appear in write-up (cross-tool / boilerplate spam)
const GLOBAL_SPAM_PATTERNS = [
  /space remover/gi,
  /strip HTML/gi,
  /visit the site\.?/gi,
  /full list of tools/gi,
  /The site lists (all )?tools/gi,
];

// Other tool names that would be spam if they appear in a translator/generator write-up (we check per slug)
const OTHER_TOOL_NAMES_BY_SLUG = {
  'ganglish-translator': ['Simlish translator', 'Cartinese translator', 'gibberish translator', 'fancy English translator', 'word descrambler', 'species name generator', 'ambigram'],
  'simlish-translator': ['Ganglish translator', 'Cartinese translator', 'gibberish translator', 'fancy English translator', 'word descrambler', 'species name generator', 'ambigram'],
  'gibberish-translator': ['Simlish translator', 'Ganglish translator', 'Cartinese translator', 'fancy English translator', 'word descrambler', 'species name generator', 'ambigram'],
  'fancy-english-translator': ['Simlish translator', 'Ganglish translator', 'Cartinese translator', 'gibberish translator', 'word descrambler', 'species name generator', 'ambigram'],
  'cartinese-translator': ['Simlish translator', 'Ganglish translator', 'gibberish translator', 'fancy English translator', 'word descrambler', 'species name generator', 'ambigram'],
  'playboi-carti-translator': ['Simlish translator', 'Ganglish translator', 'Cartinese translator', 'gibberish translator', 'fancy English translator', 'word descrambler', 'species name generator', 'ambigram'],
  'word-descrambler': [],
  'two-name-ambigram-generator': ['Simlish translator', 'Ganglish translator', 'Cartinese translator', 'gibberish translator', 'fancy English translator', 'word descrambler', 'species name generator'],
  'ambigram-tattoo-generator': ['Simlish translator', 'Ganglish translator', 'Cartinese translator', 'gibberish translator', 'fancy English translator', 'word descrambler', 'species name generator'],
  'species-name-generator': ['Simlish translator', 'Ganglish translator', 'Cartinese translator', 'gibberish translator', 'fancy English translator', 'word descrambler', 'ambigram'],
  'god-goddess-name-generator': [],
  'medieval-translator': [],
  'middle-english-translator': [],
  'old-english-translator': [],
  'shakespearean-translator': [],
  'navajo-translator': [],
};

function getOtherToolNamesForSlug(slug) {
  const explicit = OTHER_TOOL_NAMES_BY_SLUG[slug];
  if (explicit) return explicit;
  const slugAsName = slug.replace(/-/g, ' ');
  return DEFAULT_OTHER_TOOL_NAMES.filter((name) => name.toLowerCase().replace(/\s+/g, '-') !== slug);
}

const SPAMMY_PATTERNS = GLOBAL_SPAM_PATTERNS;

const MIN_TOTAL_WORDS = 3000;
const MIN_FAQS = 23;
const MIN_AVG_WORDS_PER_FAQ = 20;

function extractWriteUpSection(content) {
  const start = content.indexOf('function createWriteUp()');
  if (start === -1) return '';
  const from = content.indexOf('<section', start);
  if (from === -1) return '';
  let depth = 0;
  let end = -1;
  for (let i = from; i < content.length; i++) {
    if (content.slice(i, i + 8) === '<section') depth++;
    else if (content.slice(i, i + 10) === '</section>') {
      depth--;
      if (depth === 0) {
        end = i + 10;
        break;
      }
    }
  }
  return end === -1 ? '' : content.slice(from, end);
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function countWords(str) {
  return !str || !str.trim() ? 0 : str.trim().split(/\s+/).filter(Boolean).length;
}

function countFaqs(content) {
  const match = content.match(/const pageFaqs: FaqItem\[\] = \[([\s\S]*?)\];/);
  if (!match) return 0;
  return (match[1].match(/\{\s*category:/g) || []).length;
}

function extractFaqAnswers(content) {
  const match = content.match(/const pageFaqs: FaqItem\[\] = \[([\s\S]*?)\];/);
  if (!match) return [];
  const inner = match[1];
  const answers = [];
  const re = /answer:\s*['"`]([\s\S]*?)['"`]\s*[,}]/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    answers.push(m[1].replace(/\\'/g, "'").replace(/\\"/g, '"'));
  }
  return answers;
}

function getH2Texts(content) {
  const section = extractWriteUpSection(content);
  const h2Re = /<h2[^>]*>([^<]+)<\/h2>/gi;
  const titles = [];
  let m;
  while ((m = h2Re.exec(section)) !== null) titles.push(m[1].trim());
  return titles;
}

function checkSpammyWriteUp(content, slug) {
  const section = extractWriteUpSection(content);
  const text = stripHtml(section);
  const found = [];

  for (const re of SPAMMY_PATTERNS) {
    const matches = text.match(re);
    if (matches) {
      const unique = [...new Set(matches.map((m) => m.trim()))];
      found.push({ type: 'global', pattern: re.toString(), samples: unique });
    }
  }

  const otherNames = getOtherToolNamesForSlug(slug);
  if (otherNames && otherNames.length) {
    for (const name of otherNames) {
      const re = new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      if (re.test(text)) found.push({ type: 'cross-tool', pattern: name, samples: [name] });
    }
  }

  return found;
}

function run(slugs) {
  const slugList = slugs.length ? slugs : TRANSLATOR_AND_GENERATOR_SLUGS;
  console.log('Tool page checklist + spam check');
  console.log('Slugs:', slugList.join(', '));
  console.log('');

  let allPass = true;
  const results = [];

  for (const slug of slugList) {
    const filePath = path.join(appDir, slug, 'page.tsx');
    if (!fs.existsSync(filePath)) {
      results.push({ slug, status: 'MISSING', detail: 'No page.tsx' });
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const writeUpSection = extractWriteUpSection(content);
    const writeUpWords = countWords(stripHtml(writeUpSection));
    const faqCount = countFaqs(content);
    const faqAnswers = extractFaqAnswers(content);
    const faqWords = faqAnswers.reduce((sum, a) => sum + countWords(a), 0);
    const totalWords = writeUpWords + faqWords;
    const avgFaqWords = faqCount > 0 ? Math.round(faqWords / faqCount) : 0;

    const spamInWriteUp = checkSpammyWriteUp(content, slug);
    const hasSpam = spamInWriteUp.length > 0;
    const totalOk = totalWords >= MIN_TOTAL_WORDS;
    const faqCountOk = faqCount >= MIN_FAQS;
    const faqQualityOk = avgFaqWords >= MIN_AVG_WORDS_PER_FAQ;

    const h2s = getH2Texts(content);
    const toolName = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const h2sWithToolName = h2s.filter((h) => h.toLowerCase().includes(toolName.toLowerCase()) || h.toLowerCase().includes(slug.replace(/-/g, ' ')));

    const issues = [];
    if (hasSpam) issues.push(`SPAM: ${spamInWriteUp.map((s) => s.samples.join(', ')).join('; ')}`);
    if (!totalOk) issues.push(`words=${totalWords} (min ${MIN_TOTAL_WORDS})`);
    if (!faqCountOk) issues.push(`faqs=${faqCount} (min ${MIN_FAQS})`);
    if (!faqQualityOk) issues.push(`avgFaqWords=${avgFaqWords} (min ${MIN_AVG_WORDS_PER_FAQ})`);
    if (issues.length) allPass = false;

    results.push({
      slug,
      totalWords,
      writeUpWords,
      faqCount,
      avgFaqWords,
      h2sWithToolName: h2sWithToolName.length,
      hasSpam,
      spamSamples: hasSpam ? spamInWriteUp : [],
      issues,
      pass: issues.length === 0,
    });
  }

  // Report
  console.log('--- Checklist + spam results ---\n');
  for (const r of results) {
    if (r.status === 'MISSING') {
      console.log(r.slug + ': ' + r.detail);
      continue;
    }
    const passStr = r.pass ? 'PASS' : 'FAIL';
    const spamStr = r.hasSpam ? ' [SPAM in write-up]' : '';
    console.log(`${r.slug}: ${passStr}${spamStr}`);
    console.log(`  total=${r.totalWords} writeUp=${r.writeUpWords} faqs=${r.faqCount} avgFaqWords=${r.avgFaqWords} toolInH2s=${r.h2sWithToolName}`);
    if (r.issues.length) console.log(`  issues: ${r.issues.join(' | ')}`);
    if (r.hasSpam && r.spamSamples.length) {
      r.spamSamples.forEach((s) => console.log(`  spam: ${s.samples.slice(0, 3).join(', ')}`));
    }
    console.log('');
  }

  console.log('--- Summary ---');
  const passed = results.filter((r) => r.pass && !r.hasSpam).length;
  const withSpam = results.filter((r) => r.hasSpam).length;
  const failedCheck = results.filter((r) => r.issues && r.issues.length && !r.status).length;
  console.log(`Pass (no spam + checklist): ${passed}/${results.length}`);
  console.log(`With spammy write-up: ${withSpam}`);
  console.log(`Checklist failures: ${failedCheck}`);
  process.exit(allPass && withSpam === 0 ? 0 : 1);
}

const slugs = process.argv.slice(2).filter(Boolean);
const useAll = slugs.length === 1 && slugs[0] === '--all';
let runSlugs = slugs;
if (useAll) {
  runSlugs = [];
  const dirs = fs.readdirSync(appDir, { withFileTypes: true }).filter((d) => d.isDirectory() && !d.name.startsWith('(') && !d.name.startsWith('['));
  for (const d of dirs) {
    const pagePath = path.join(appDir, d.name, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf8');
      if (content.includes('function createWriteUp()')) runSlugs.push(d.name);
    }
  }
  runSlugs.sort();
}
run(runSlugs);
