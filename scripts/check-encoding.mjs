#!/usr/bin/env node
/**
 * Encoding guard — detects the corruption patterns that commit b128b00
 * introduced (a bulk "BOM removal" that re-saved files through Windows-1252,
 * destroying Hangul, em-dashes and accented characters).
 *
 * Two corruption classes are flagged:
 *   1. Mojibake — UTF-8 bytes decoded as CP1252, e.g. "Ã©" (é), "Â°" (°),
 *      "â€™" ('), "BÃ©zier", "ì„±" (성).
 *   2. Lost characters — runs of "????" where non-ASCII text was replaced by
 *      literal question marks.
 *
 * Usage:
 *   node scripts/check-encoding.mjs            # scan whole repo (CI)
 *   node scripts/check-encoding.mjs <files...> # scan specific files (pre-commit)
 */
import { readFileSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';

const EXTS = /\.(ts|tsx|js|jsx|mjs|json|css|md|mdx|html|txt|xml)$/;

// Mojibake signatures: CP1252-decoded UTF-8 lead bytes followed by a continuation.
const MOJIBAKE = /[ÃÂ][\x80-\xBF]|â€[\x90-\x9F™œ“”˜]|â€|ðŸ|�/;
// Four or more consecutive question marks = destroyed non-ASCII text.
const QMARK = /\?\?\?\?/;

// Generic double-encoded-UTF-8 detector. The CP1252 signature above only covers
// Latin/accented corruption (the first incident). Hangul/CJK/Cyrillic/Arabic
// double-encoding produces runs of high chars (U+0080–U+00FF + cp1252 specials)
// that, when re-encoded latin-1 and decoded as UTF-8, yield real script chars —
// e.g. "ëë§ìž‡ê¸°" -> "끝말잇기". This catches all language families generically.
const HI_RUN = /[-ÿ‘-‟†-‰€™ŒœŽžˆ‹›]{2,}/g;
const CP1252_BYTE = {
  '€':0x80,'‚':0x82,'ƒ':0x83,'„':0x84,'…':0x85,'†':0x86,'‡':0x87,'ˆ':0x88,
  '‰':0x89,'Š':0x8A,'‹':0x8B,'Œ':0x8C,'Ž':0x8E,'‘':0x91,'’':0x92,'“':0x93,
  '”':0x94,'•':0x95,'–':0x96,'—':0x97,'˜':0x98,'™':0x99,'š':0x9A,'›':0x9B,
  'œ':0x9C,'ž':0x9E,'Ÿ':0x9F,
};
function isRealScript(cp) {
  return (
    (cp >= 0xAC00 && cp <= 0xD7A3) || (cp >= 0x1100 && cp <= 0x11FF) || (cp >= 0x3130 && cp <= 0x318F) || // Hangul
    (cp >= 0x4E00 && cp <= 0x9FFF) || (cp >= 0x3400 && cp <= 0x4DBF) ||                                   // CJK
    (cp >= 0x3040 && cp <= 0x30FF) ||                                                                     // Kana
    (cp >= 0x0400 && cp <= 0x04FF) ||                                                                     // Cyrillic
    (cp >= 0x0600 && cp <= 0x06FF)                                                                        // Arabic
  );
}
/** Returns true if a line contains a run that decodes to real CJK/Hangul/etc. */
function hasDoubleEncoded(line) {
  const runs = line.match(HI_RUN);
  if (!runs) return false;
  for (const run of runs) {
    const bytes = [];
    let ok = true;
    for (const ch of run) {
      const c = ch.codePointAt(0);
      if (c <= 0xff) bytes.push(c);
      else if (CP1252_BYTE[ch] !== undefined) bytes.push(CP1252_BYTE[ch]);
      else { ok = false; break; }
    }
    if (!ok) continue;
    let dec;
    try { dec = Buffer.from(bytes).toString('utf-8'); } catch { continue; }
    if (dec.includes('�')) continue;
    if (Buffer.byteLength(dec, 'utf-8') !== bytes.length) continue; // must round-trip
    for (const ch of dec) if (isRealScript(ch.codePointAt(0))) return true;
  }
  return false;
}

// Lines that legitimately document mojibake (so we don't flag our own docs).
const ALLOW_LINE = /shows as|garbled characters|mojibake|example of corrupt/i;
// Files where '?' / invisible chars are real content.
const ALLOW_FILE = /invisible|zero-width|unicode-text|csv-to-json/;

function listFiles(args) {
  if (args.length) return args.filter((f) => EXTS.test(f));
  const out = execSync('git ls-files', { encoding: 'utf8' });
  return out.split('\n').filter((f) => f && EXTS.test(f));
}

const files = listFiles(process.argv.slice(2));
const problems = [];

for (const file of files) {
  // Skip this script itself — it contains example mojibake strings in its docs.
  if (file.endsWith('check-encoding.mjs')) continue;
  try {
    if (!statSync(file).isFile()) continue;
  } catch {
    continue; // deleted/renamed in staging
  }
  const text = readFileSync(file, 'utf8');
  const allowFile = ALLOW_FILE.test(file);
  text.split('\n').forEach((line, i) => {
    const hit = MOJIBAKE.test(line) || QMARK.test(line) || hasDoubleEncoded(line);
    if (!hit) return;
    if (ALLOW_LINE.test(line)) return;
    if (allowFile && !MOJIBAKE.test(line) && !hasDoubleEncoded(line)) return; // allow ? in those tools, still flag true mojibake
    problems.push({ file, line: i + 1, text: line.trim().slice(0, 100) });
  });
}

if (problems.length) {
  console.error('\n✖ Encoding check failed — possible text corruption detected:\n');
  for (const p of problems) {
    console.error(`  ${p.file}:${p.line}`);
    console.error(`    ${p.text}`);
  }
  console.error(
    `\n${problems.length} suspect line(s). This usually means a file was saved in a` +
      ' non-UTF-8 encoding (e.g. Windows-1252) — the same bug that corrupted Hangul' +
      ' and accented text before. Re-save the file as UTF-8 and try again.\n' +
      'If a hit is intentional documentation, add it to ALLOW_LINE/ALLOW_FILE in' +
      ' scripts/check-encoding.mjs.\n',
  );
  process.exit(1);
}

console.log(`✓ Encoding check passed (${files.length} files scanned).`);
