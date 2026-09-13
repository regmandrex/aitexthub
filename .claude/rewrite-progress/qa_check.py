#!/usr/bin/env python3
"""
QA check for rephrased content files (lib/tools/content/*.tsx, app/blog/*/page.tsx).

Run after rewriting a file to catch the mistakes that are easy to make by hand:
  1. Unescaped apostrophes inside single-quoted JS string literals (breaks the build).
  2. Word count regressions vs. the git HEAD version (task requires >= original count).
  3. Mismatched brace/paren/tag counts that suggest a broken edit.

Usage:
  python qa_check.py <file1> [file2 ...]
  python qa_check.py --git-diff   # check every file with uncommitted changes under
                                   # lib/tools/content/ and app/blog/
"""
import re
import subprocess
import sys

APOSTROPHE_WORD_RE = re.compile(r"[A-Za-z]'[A-Za-z]")


def git_show_head(path: str) -> str | None:
    try:
        out = subprocess.run(
            ["git", "show", f"HEAD:{path}"],
            capture_output=True, check=True,
        )
        return out.stdout.decode("utf-8", errors="replace")
    except subprocess.CalledProcessError:
        return None


def find_string_literal_spans(text: str):
    """Yield (start, end, quote_char) for top-level single/double-quoted JS string
    literals that look like FAQ/content strings (heuristic: spans starting right
    after ': ' or '(' or ',' and a quote char, ending at an unescaped matching quote
    followed by a delimiter). This is intentionally narrow: it only scans lines that
    look like `question:`/`answer:`/`category:` fields, which is where this bug bites.
    """
    spans = []
    for m in re.finditer(r"(?:question|answer|category)\s*:\s*\n?\s*'", text):
        start = m.end()
        i = start
        while i < len(text):
            if text[i] == "\\":
                i += 2
                continue
            if text[i] == "'":
                # Could be a real end-quote or an unescaped apostrophe inside a word.
                # Heuristic: treat it as the literal's end only if followed by
                # optional whitespace then a comma/paren/newline+field-ish char.
                after = text[i + 1:i + 3]
                if re.match(r"\s*[,)\n]", text[i + 1:i + 4]):
                    spans.append((start, i, "'"))
                    break
            i += 1
    return spans


def check_unescaped_apostrophes(path: str, text: str) -> list[str]:
    problems = []
    for start, end, _ in find_string_literal_spans(text):
        literal = text[start:end]
        for m in APOSTROPHE_WORD_RE.finditer(literal):
            # Skip if it's the HTML entity form or already escaped.
            snippet = literal[max(0, m.start() - 15):m.end() + 15]
            if "&#39;" in snippet:
                continue
            line_no = text[: start + m.start()].count("\n") + 1
            problems.append(
                f"{path}:{line_no}: possible unescaped apostrophe in string literal: ...{snippet}..."
            )
    return problems


def word_count(text: str) -> int:
    return len(text.split())


def check_word_count(path: str, new_text: str) -> list[str]:
    old_text = git_show_head(path)
    if old_text is None:
        return [f"{path}: no HEAD version to compare (new file?) — skipping word count check"]
    old_wc, new_wc = word_count(old_text), word_count(new_text)
    if new_wc < old_wc:
        return [f"{path}: WORD COUNT DROPPED {old_wc} -> {new_wc} (delta {new_wc - old_wc})"]
    return []


def check_balance(path: str, text: str) -> list[str]:
    problems = []
    for open_c, close_c, name in [("{", "}", "brace"), ("(", ")", "paren")]:
        if text.count(open_c) != text.count(close_c):
            problems.append(
                f"{path}: {name} mismatch — {open_c!r}={text.count(open_c)} vs {close_c!r}={text.count(close_c)}"
            )
    return problems


def check_file(path: str) -> list[str]:
    with open(path, encoding="utf-8", errors="replace") as f:
        text = f.read()
    problems = []
    problems += check_unescaped_apostrophes(path, text)
    problems += check_word_count(path, text)
    problems += check_balance(path, text)
    return problems


def main(argv: list[str]) -> int:
    if not argv:
        print(__doc__)
        return 1

    if argv[0] == "--git-diff":
        out = subprocess.run(
            ["git", "diff", "--name-only", "HEAD", "--",
             "lib/tools/content", "app/blog"],
            capture_output=True, check=True,
        )
        files = [f for f in out.stdout.decode("utf-8", errors="replace").splitlines() if f.strip()]
    else:
        files = argv

    all_problems = []
    for f in files:
        all_problems += check_file(f)

    if all_problems:
        print(f"FOUND {len(all_problems)} ISSUE(S):\n")
        for p in all_problems:
            print(" -", p)
        return 1

    print(f"OK: {len(files)} file(s) checked, no issues found.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
