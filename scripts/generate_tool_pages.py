#!/usr/bin/env python3
"""
Generate tool pages and registry entries for multiple AI model families (Gemini, LLaMA, Grok, etc.)
by cloning **Claude** tool pages and replacing model name/slug (Claude-style: concise write-up, 23 FAQs, no faqKeys).

Usage (from project root):
  python scripts/generate_tool_pages.py

Creates:
  - app/{model}-{tool}/page.tsx for each model and each of the 30 tool types
  - lib/seo/generated-registry-entries.ts (snippet to merge into registry.ts)
"""

import os
import re
from pathlib import Path

# Project root (parent of script dir)
ROOT = Path(__file__).resolve().parent.parent
APP_DIR = ROOT / "app"
REGISTRY_PATH = ROOT / "lib" / "seo" / "registry.ts"
OUT_REGISTRY_SNIPPET = ROOT / "lib" / "seo" / "generated-registry-entries.ts"

# Source template: clone from Claude tool pages (same style as Claude: 23 FAQs, concise write-up, tool name in H2s)
SOURCE_SLUG_PREFIX = "claude"

# Model families: (display name for titles/FAQs, slug prefix, PascalCase for component names)
MODELS = [
    ("Gemini", "gemini", "Gemini"),
    ("LLaMA (Meta AI)", "llama", "Llama"),
    ("Grok", "grok", "Grok"),
    ("Perplexity", "perplexity", "Perplexity"),
    ("DeepSeek", "deepseek", "DeepSeek"),
    ("Mistral", "mistral", "Mistral"),
    ("AI", "ai", "AI"),
]

# 30 tool types (slug suffix after claude-)
TOOL_SUFFIXES = [
    "detector",
    "turnitin-checker",
    "gptzero-checker",
    "originality-checker",
    "copyleaks-checker",
    "humanizer",
    "paraphraser",
    "sentence-rewriter",
    "paragraph-rewriter",
    "essay-rewriter",
    "grammar-checker",
    "readability-checker",
    "tone-analyzer",
    "style-analyzer",
    "passive-voice-fixer",
    "essay-checker",
    "thesis-checker",
    "research-paper-checker",
    "assignment-checker",
    "academic-humanizer",
    "blog-post-validator",
    "product-description-improver",
    "meta-description-generator",
    "title-tag-generator",
    "alt-text-generator",
    "email-humanizer",
    "cover-letter-humanizer",
    "resume-humanizer",
    "linkedin-rewriter",
    "press-release-polisher",
]


def slug_to_pascal(slug: str) -> str:
    """e.g. turnitin-checker -> TurnitinChecker"""
    return "".join(w.capitalize() for w in slug.split("-"))


def parse_registry_entries(prefix: str) -> list[dict]:
    """Parse lib/seo/registry.ts for {prefix}-* entries (e.g. claude-* or chatgpt-*)."""
    text = REGISTRY_PATH.read_text(encoding="utf-8")
    entries = []
    # Find each slug line for prefix-* and parse the block that follows
    slug_pattern = re.compile(
        r"\n  \{\s*\n\s*slug:\s*'" + re.escape(prefix) + r"-([^']+)'[^\n]*\n(.*?)(?=\n  \}|\n  \{)",
        re.DOTALL,
    )
    for m in slug_pattern.finditer(text):
        tool_suffix = m.group(1).strip()
        if tool_suffix not in TOOL_SUFFIXES:
            continue
        block = m.group(2)
        title_m = re.search(r"title:\s*'([^']*(?:\\'[^']*)*)'", block)
        desc_m = re.search(r"description:\s*'([^']*(?:\\'[^']*)*)'", block)
        seo_m = re.search(r"seoTitle:\s*'([^']*(?:\\'[^']*)*)'", block)
        cat_m = re.search(r"category:\s*'([^']+)'", block)
        if not all([title_m, desc_m, cat_m]):
            continue
        entries.append({
            "tool_suffix": tool_suffix,
            "title": title_m.group(1).replace("\\'", "'"),
            "description": desc_m.group(1).replace("\\'", "'"),
            "seo_title": (seo_m.group(1).replace("\\'", "'") if seo_m else ""),
            "category": cat_m.group(1),
        })
    return entries


def parse_chatgpt_registry_entries() -> list[dict]:
    """Convenience: parse chatgpt-* entries (used for registry template if claude missing)."""
    return parse_registry_entries("chatgpt")


def generate_registry_entries(source_entries: list[dict], source_display: str = "Claude") -> str:
    """Generate TypeScript registry entries for all models x tools from source (e.g. Claude) entries."""
    lines = []
    for model_display, model_slug, _ in MODELS:
        for e in source_entries:
            if e["tool_suffix"] not in TOOL_SUFFIXES:
                continue
            slug = f"{model_slug}-{e['tool_suffix']}"
            title = e["title"].replace(source_display, model_display)
            desc = e["description"].replace(source_display, model_display)
            seo = (e["seo_title"] or "").replace(source_display, model_display)
            def esc(s: str) -> str:
                return s.replace("'", "\\'")
            lines.append("  {")
            lines.append(f"    slug: '{slug}',")
            lines.append(f"    title: '{esc(title)}',")
            lines.append(f"    description: '{esc(desc)}',")
            if seo:
                lines.append(f"    seoTitle: '{esc(seo)}',")
            lines.append(f"    category: '{e['category']}',")
            lines.append("  },")
    return "\n".join(lines)


def transform_page_content(content: str, model_display: str, model_slug: str, model_pascal: str, tool_suffix: str, source_prefix: str) -> str:
    """Replace source model (Claude or ChatGPT) with target model in page.tsx content."""
    tool_slug_full = f"{model_slug}-{tool_suffix}"
    tool_pascal = slug_to_pascal(tool_suffix)
    source_pascal = source_prefix.capitalize() if source_prefix == "claude" else "ChatGPT"

    # Slug constant (claude- or chatgpt-)
    content = re.sub(
        rf"const toolSlug = '{source_prefix}-[^']+';",
        f"const toolSlug = '{tool_slug_full}';",
        content,
    )

    # Replace source model name with target in user-facing text (Claude or ChatGPT)
    for source_name in ["Claude", "ChatGPT"]:
        if source_name not in content and source_name != source_pascal:
            continue
        content = content.replace(f"{source_name} Detector", f"{model_display} Detector")
        content = content.replace(f"{source_name} Turnitin", f"{model_display} Turnitin")
        content = content.replace(f"{source_name} GPTZero", f"{model_display} GPTZero")
        content = content.replace(f"{source_name} Originality", f"{model_display} Originality")
        content = content.replace(f"{source_name} Copyleaks", f"{model_display} Copyleaks")
        content = content.replace(f"{source_name} Humanizer", f"{model_display} Humanizer")
        content = content.replace(f"{source_name} Paraphraser", f"{model_display} Paraphraser")
        content = content.replace(f"{source_name} Sentence Rewriter", f"{model_display} Sentence Rewriter")
        content = content.replace(f"{source_name} Paragraph Rewriter", f"{model_display} Paragraph Rewriter")
        content = content.replace(f"{source_name} Essay Rewriter", f"{model_display} Essay Rewriter")
        content = content.replace(f"{source_name} Grammar Checker", f"{model_display} Grammar Checker")
        content = content.replace(f"{source_name} Readability Checker", f"{model_display} Readability Checker")
        content = content.replace(f"{source_name} Tone Analyzer", f"{model_display} Tone Analyzer")
        content = content.replace(f"{source_name} Style Analyzer", f"{model_display} Style Analyzer")
        content = content.replace(f"{source_name} Passive Voice Fixer", f"{model_display} Passive Voice Fixer")
        content = content.replace(f"{source_name} Essay Checker", f"{model_display} Essay Checker")
        content = content.replace(f"{source_name} Thesis Checker", f"{model_display} Thesis Checker")
        content = content.replace(f"{source_name} Research Paper Checker", f"{model_display} Research Paper Checker")
        content = content.replace(f"{source_name} Assignment Checker", f"{model_display} Assignment Checker")
        content = content.replace(f"{source_name} Academic Humanizer", f"{model_display} Academic Humanizer")
        content = content.replace(f"{source_name} Blog Post Validator", f"{model_display} Blog Post Validator")
        content = content.replace(f"{source_name} Product Description Improver", f"{model_display} Product Description Improver")
        content = content.replace(f"{source_name} Meta Description Generator", f"{model_display} Meta Description Generator")
        content = content.replace(f"{source_name} Title Tag Generator", f"{model_display} Title Tag Generator")
        content = content.replace(f"{source_name} Alt Text Generator", f"{model_display} Alt Text Generator")
        content = content.replace(f"{source_name} Email Humanizer", f"{model_display} Email Humanizer")
        content = content.replace(f"{source_name} Cover Letter Humanizer", f"{model_display} Cover Letter Humanizer")
        content = content.replace(f"{source_name} Resume Humanizer", f"{model_display} Resume Humanizer")
        content = content.replace(f"{source_name} LinkedIn Rewriter", f"{model_display} LinkedIn Rewriter")
        content = content.replace(f"{source_name} Press Release Polisher", f"{model_display} Press Release Polisher")
        content = content.replace(f"the {source_name} ", f"the {model_display} ")
        content = content.replace(f"The {source_name} ", f"The {model_display} ")
        content = content.replace(f"a {source_name} ", f"a {model_display} ")
        content = content.replace(f"A {source_name} ", f"A {model_display} ")
        content = content.replace(f"{source_name} ", f"{model_display} ")
        content = content.replace(f"{source_name}.", f"{model_display}.")
        content = content.replace(f"{source_name},", f"{model_display},")
        content = content.replace(f"{source_name}'", f"{model_display}'")
        content = content.replace(f"{source_name}\"", f'{model_display}"')
        content = content.replace(f"{source_name}-generated", f"{model_display}-generated")
        content = content.replace(f"{source_name}-Generated", f"{model_display}-Generated")
        content = content.replace(f"{source_name} output", f"{model_display} output")
        content = content.replace(f"{source_name} content", f"{model_display} content")
        content = content.replace(f"{source_name} text", f"{model_display} text")
        content = content.replace(f"{source_name} essays", f"{model_display} essays")
        content = content.replace(f"{source_name} descriptions", f"{model_display} descriptions")
        content = content.replace(f"{source_name} detection", f"{model_display} detection")
        content = content.replace(f"{source_name} FAQ", f"{model_display} FAQ")
        content = content.replace(f"about the {source_name} ", f"about the {model_display} ")
        content = content.replace(f"about {source_name} ", f"about {model_display} ")

    # Slug in strings: source_prefix- -> model_slug-
    content = re.sub(rf"'{source_prefix}-([^']+)'", lambda m: f"'{model_slug}-{m.group(1)}'", content)
    content = re.sub(rf'"{source_prefix}-([^"]+)"', lambda m: f'"{model_slug}-{m.group(1)}"', content)
    content = content.replace(f"/{source_prefix}-", f"/{model_slug}-")

    # Page component name: ClaudeDetectorPage -> GeminiDetectorPage etc.
    old_page_name = source_pascal + tool_pascal + "Page"
    new_page_name = model_pascal + tool_pascal + "Page"
    content = content.replace(old_page_name, new_page_name)

    return content


def main():
    os.chdir(ROOT)

    # 1. Parse registry for Claude tool entries (clone style from 30 Claude tools)
    source_entries = parse_registry_entries(SOURCE_SLUG_PREFIX)
    if len(source_entries) < 30:
        print("Warning: found", len(source_entries), f"{SOURCE_SLUG_PREFIX} tool entries. Using all available.")
    source_display = "Claude" if SOURCE_SLUG_PREFIX == "claude" else "ChatGPT"
    found_suffixes = {e["tool_suffix"] for e in source_entries}
    for s in TOOL_SUFFIXES:
        if s not in found_suffixes:
            source_entries.append({
                "tool_suffix": s,
                "title": source_display + " " + " ".join(w.capitalize() for w in s.split("-")),
                "description": f"{source_display} tool for {s.replace('-', ' ')}.",
                "seo_title": "",
                "category": "ai-cleanup",
            })

    # 2. Generate registry snippet
    snippet = "// Generated by scripts/generate_tool_pages.py – merge into toolPages array in registry.ts\n\n" + generate_registry_entries(source_entries, source_display)
    OUT_REGISTRY_SNIPPET.parent.mkdir(parents=True, exist_ok=True)
    OUT_REGISTRY_SNIPPET.write_text(snippet, encoding="utf-8")
    print("Wrote", OUT_REGISTRY_SNIPPET)

    # 3. Generate app pages (clone from Claude page.tsx)
    created = 0
    for model_display, model_slug, model_pascal in MODELS:
        for e in source_entries:
            tool_suffix = e["tool_suffix"]
            src_slug = f"{SOURCE_SLUG_PREFIX}-{tool_suffix}"
            dst_slug = f"{model_slug}-{tool_suffix}"
            src_dir = APP_DIR / src_slug
            dst_dir = APP_DIR / dst_slug
            src_page = src_dir / "page.tsx"
            if not src_page.is_file():
                print("Skip (no source):", src_page)
                continue
            content = src_page.read_text(encoding="utf-8")
            new_content = transform_page_content(content, model_display, model_slug, model_pascal, tool_suffix, SOURCE_SLUG_PREFIX)
            dst_dir.mkdir(parents=True, exist_ok=True)
            (dst_dir / "page.tsx").write_text(new_content, encoding="utf-8")
            created += 1
            print("Created", dst_slug)

    print("Done. Created", created, "pages. Merge", OUT_REGISTRY_SNIPPET.name, "into lib/seo/registry.ts.")


if __name__ == "__main__":
    main()
