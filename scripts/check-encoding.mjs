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

// Lines that legitimately document mojibake (so we don't flag our own docs).
const ALLOW_LINE = /shows as|garbled characters|mojibake|example of corrupt/i;
// Files where '?' / invisible chars are real content.
const ALLOW_FILE = /invisible|zero-width|unicode-text|csv-to-json|check-encoding/;

function listFiles(args) {
  if (args.length) return args.filter((f) => EXTS.test(f));
  const out = execSync('git ls-files', { encoding: 'utf8' });
  return out.split('\n').filter((f) => f && EXTS.test(f));
}

const files = listFiles(process.argv.slice(2));
const problems = [];

for (const file of files) {
  try {
    if (!statSync(file).isFile()) continue;
  } catch {
    continue; // deleted/renamed in staging
  }
  const text = readFileSync(file, 'utf8');
  const allowFile = ALLOW_FILE.test(file);
  text.split('\n').forEach((line, i) => {
    const hit = MOJIBAKE.test(line) || QMARK.test(line);
    if (!hit) return;
    if (ALLOW_LINE.test(line)) return;
    if (allowFile && !MOJIBAKE.test(line)) return; // allow ? in those tools, still flag true mojibake
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
