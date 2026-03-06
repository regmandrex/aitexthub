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
entries = "\n".join(entries_lines)

# We added one gemini-detector block; replace it + fancy-english-translator start with full entries + fancy start
old = """  {
    slug: 'gemini-detector',
    title: 'Gemini Detector',
    description: 'Detect AI-generated content and check if text was created by Gemini or other AI models.',
    seoTitle: 'Gemini Detector - Detect AI-Generated Content',
    category: 'ai-cleanup',
  },
  {
    slug: 'fancy-english-translator',"""

new = entries + "\n  {\n    slug: 'fancy-english-translator',"

if old not in r:
    print("Block not found in registry")
    exit(1)
r = r.replace(old, new, 1)
REGISTRY.write_text(r, encoding="utf-8")
print("Merged 210 entries into registry.ts")
