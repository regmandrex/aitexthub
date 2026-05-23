/**
 * Fixes files where single-quoted FAQ strings are broken by apostrophes.
 * For lines that still use single-quoted strings in faqs array,
 * converts them to double-quoted strings with escaped double-quotes.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

const CONTENT_DIR = resolve('lib/tools/content');

const files = readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.tsx'))
  .map(f => resolve(CONTENT_DIR, f));

let fixedCount = 0;

for (const filePath of files) {
  let src = readFileSync(filePath, 'utf8');
  if (!src.includes("const faqs: FaqItem[]")) continue;

  // Find lines in the faqs section that still use single quotes (not backticks)
  // These are the broken ones. We'll process line by line within the faqs block.
  const faqsStart = src.indexOf("const faqs: FaqItem[]");
  const exportIdx = src.indexOf("\nexport const ", faqsStart);
  if (faqsStart === -1 || exportIdx === -1) continue;

  const before = src.slice(0, faqsStart);
  let faqsSection = src.slice(faqsStart, exportIdx);
  const after = src.slice(exportIdx);

  // Process line by line
  const lines = faqsSection.split('\n');
  let changed = false;

  const fixedLines = lines.map(line => {
    // Only process lines that look like FAQ entries with single-quoted fields
    // Pattern: starts with spaces, then { category: '...', ...
    if (!line.trim().startsWith('{ category:')) return line;

    // Check if there are unquoted backtick versions - skip those (already fixed)
    if (line.includes('{ category: `')) return line;

    // This line has { category: '...' } style - may have broken apostrophes
    // Strategy: extract the three values using a more robust approach
    // Find positions of category, question, answer field values

    // Replace apostrophes in answer/question text with escaped versions
    // We'll convert the whole object to use backtick strings

    // Simple approach: replace ' }, with ` }, at the end,
    // and fix the field delimiters

    // Use a character-by-character parser to find the three field values
    try {
      // Find 'category: ' then read until ', question:'
      // Find 'question: ' then read until ', answer:'
      // Find 'answer: ' then read until end

      const catMatch = line.match(/\{ category: '(.*?)(?<!\\)', question:/);
      if (!catMatch) return line; // can't parse, leave alone

      // Find question start after category
      const qStart = line.indexOf("question: '") + "question: '".length;
      // Find answer start
      const aStart = line.indexOf("answer: '") + "answer: '".length;

      const cat = catMatch[1];

      // Extract question: between question: ' and ', answer:
      const qEnd = line.indexOf("', answer:", qStart);
      if (qEnd === -1) return line;
      const question = line.slice(qStart, qEnd);

      // Extract answer: from aStart to end '  } or ' },
      const aEnd = line.lastIndexOf("' }");
      if (aEnd === -1 || aEnd < aStart) return line;
      const answer = line.slice(aStart, aEnd);

      const indent = line.match(/^(\s*)/)?.[1] || '  ';
      changed = true;
      return `${indent}{ category: \`${cat}\`, question: \`${question}\`, answer: \`${answer.replace(/\\'/g, "'")}\` },`;
    } catch (e) {
      return line;
    }
  });

  if (changed) {
    writeFileSync(filePath, before + fixedLines.join('\n') + after, 'utf8');
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
