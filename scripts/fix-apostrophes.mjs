import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

const CONTENT_DIR = resolve('lib/tools/content');
const files = readdirSync(CONTENT_DIR).filter(f => f.endsWith('.tsx'));
let fixedCount = 0;

for (const file of files) {
  const filePath = join(CONTENT_DIR, file);
  let src = readFileSync(filePath, 'utf8');

  const faqsStart = src.indexOf('const faqs: FaqItem[] = [');
  if (faqsStart === -1) continue;

  const before = src.slice(0, faqsStart);
  let faqsBlock = src.slice(faqsStart);

  // Parse char by char: when inside a single-quoted string value (after ': '),
  // escape any unescaped apostrophes.
  let result = '';
  let i = 0;
  while (i < faqsBlock.length) {
    // Look for the pattern: colon, optional space, single-quote — start of a string value
    if (faqsBlock[i] === "'" ) {
      // We're entering a single-quoted string — collect until closing unescaped quote
      result += "'";
      i++;
      let inner = '';
      while (i < faqsBlock.length) {
        const ch = faqsBlock[i];
        if (ch === '\\') {
          inner += ch + (faqsBlock[i+1] || '');
          i += 2;
        } else if (ch === "'") {
          break;
        } else {
          inner += ch;
          i++;
        }
      }
      result += inner + "'";
      i++; // skip closing quote
    } else {
      result += faqsBlock[i];
      i++;
    }
  }

  // That approach won't fix anything since we already hit the bad apostrophes.
  // Instead: use a simpler approach — replace all straight apostrophes inside
  // the answer/question values with escaped versions by replacing possessives
  // and contractions specifically.
  // Actually simplest fix: replace every ' that appears between two word chars with \'
  const fixedBlock = faqsBlock.replace(/(\w)'(\w)/g, "$1\\'$2");

  if (fixedBlock !== faqsBlock) {
    writeFileSync(filePath, before + fixedBlock, 'utf8');
    fixedCount++;
    console.log('Fixed:', file);
  }
}
console.log('Done. Fixed', fixedCount, 'files.');
