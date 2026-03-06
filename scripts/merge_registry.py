"""Merge generated-registry-entries.ts into lib/seo/registry.ts"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "lib" / "seo" / "registry.ts"
GENERATED = ROOT / "lib" / "seo" / "generated-registry-entries.ts"

r = REGISTRY.read_text(encoding="utf-8")
g = GENERATED.read_text(encoding="utf-8")
# Skip comment lines
lines = g.strip().split("\n")
entries_lines = [l for l in lines if not l.startswith("//")]
entries = "\n".join(entries_lines).strip()

# Find start of gemini-detector block (opening "  {" before slug: 'gemini-detector')
idx_detector = r.find("slug: 'gemini-detector'")
if idx_detector == -1:
    print("slug: 'gemini-detector' not found in registry")
    exit(1)
# Walk back to start of this entry's object
entry_start = r.rfind("\n  {", 0, idx_detector)
if entry_start == -1:
    entry_start = r.find("  {", 0, idx_detector)
if entry_start == -1:
    print("Start of gemini-detector block not found")
    exit(1)
entry_start = entry_start + 1 if r[entry_start] == "\n" else entry_start

# Find start of fancy-english-translator block
idx_fancy = r.find("slug: 'fancy-english-translator'")
if idx_fancy == -1:
    print("slug: 'fancy-english-translator' not found in registry")
    exit(1)
fancy_block_start = r.rfind("\n  {", 0, idx_fancy)
if fancy_block_start == -1:
    fancy_block_start = r.find("  {", 0, idx_fancy)
if fancy_block_start == -1:
    print("Start of fancy-english-translator block not found")
    exit(1)
fancy_block_start = fancy_block_start + 1 if r[fancy_block_start] == "\n" else fancy_block_start

# Replace [entry_start, fancy_block_start) with generated entries
before = r[:entry_start]
after = r[fancy_block_start:]
if not entries.endswith("\n"):
    entries = entries + "\n"
new_registry = before + entries + after
REGISTRY.write_text(new_registry, encoding="utf-8")
print("Merged generated entries into registry.ts")
