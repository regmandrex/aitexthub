# Tool pages – write-up & FAQ audit

Summary of which tool pages have a **visible write-up section** and **non-empty FAQs**.

---

## Tools WITH write-up AND FAQs (complete)

| Tool | Write-up | FAQs |
|------|----------|------|
| **space-remover** | ✅ SpaceRemoverWriteUp component | ✅ spaceRemoverFaqs |
| **strip-html** | ✅ Inline writeUp JSX | ✅ faqs array |
| **chatgpt-line-spacing** | ✅ content={writeUp} | ✅ faqs |
| **chatgpt-readability-checker** | ✅ {writeUp} rendered | ✅ faqs |
| **ai-watermark-remover** | (no write-up block) | ✅ faqs |
| **chatgpt-watermark-remover** | (no write-up block) | ✅ pageFaqs from faqs |
| **gemini-watermark-cleaner** | (no write-up block) | ✅ faqs |
| **claude-watermark-cleaner** | (no write-up block) | ✅ faqs |
| **grok-watermark-cleaner** | (no write-up block) | ✅ pageFaqs |
| **deepseek-watermark-cleaner** | (no write-up block) | ✅ pageFaqs |
| **llama-watermark-cleaner** | (no write-up block) | ✅ faqs |
| **perplexity-watermark-cleaner** | (no write-up block) | ✅ faqs |
| **mistral-watermark-cleaner** | (no write-up block) | ✅ pageFaqs |
| **korean-nickname-generator** | (no write-up block) | ✅ faqItems |

Plus many others that use `items={faqs}` with a populated `faqs` array (e.g. text-to-morse-code, zero-width-space-remover, url-encode, word-counter has write-up in code but not rendered—see below).

---

## Tools MISSING write-up (no visible write-up section)

These either have no write-up at all, or have `createWriteUp()` / write-up content in code but **do not render it** in the page:

- **remove-line-breaks** – createWriteUp() exists (i18n keys only), not rendered
- **remove-whitespace** – createWriteUp() exists (i18n keys only), not rendered
- **word-counter** – createWriteUp() has full English content, **not rendered**
- **case-converter** – createWriteUp(t) has full English content, **not rendered**
- **chatgpt-turnitin-checker** – createWriteUp() (i18n keys), not rendered
- **chatgpt-sentence-rewriter** – createWriteUp() (i18n keys), not rendered
- **chatgpt-paraphraser** – createWriteUp() (i18n keys), not rendered
- **find-and-replace** – no write-up
- **em-dash-remover** – no write-up
- **combination-generator** – no write-up
- **line-combination-generator** – no write-up
- **permutation-generator** – no write-up
- **ai-code-cleaner** – no write-up
- **ai-code-fixer** – no write-up
- **chatgpt-detector** – no write-up
- **chatgpt-gptzero-checker** – no write-up
- **chatgpt-copyleaks-checker** – no write-up
- **chatgpt-originality-checker** – no write-up
- **chatgpt-humanizer** – no write-up

(Many other tool pages also have no write-up block; the list above focuses on high-traffic or text-tool slugs and those with createWriteUp but no render.)

---

## Tools with EMPTY FAQs (FAQ section present but no items)

These render `<FAQSection items={pageFaqs} />` or similar with **empty array** (`pageFaqs: FaqItem[] = []` or `pageFaqs = []`), so the FAQ heading appears but no Q&A:

- **remove-line-breaks**
- **remove-whitespace**
- **word-counter**
- **case-converter**
- **chatgpt-turnitin-checker**
- **chatgpt-sentence-rewriter**
- **chatgpt-paraphraser**
- **chatgpt-originality-checker**
- **chatgpt-humanizer**
- **chatgpt-gptzero-checker**
- **chatgpt-copyleaks-checker**
- **chatgpt-detector**
- **find-and-replace**
- **em-dash-remover**
- **combination-generator**
- **line-combination-generator**
- **permutation-generator**
- **ai-code-cleaner**
- **ai-code-fixer**

---

## Quick wins

1. **word-counter** and **case-converter** – Write-up content already exists in `createWriteUp()` but is never rendered. **Fix:** In the page component, render `{createWriteUp()}` (or `createWriteUp(t)` for case-converter if you use a translator) inside `ToolPageShell` so the write-up section appears.
2. **remove-line-breaks** and **remove-whitespace** – Have FAQ heading + createWriteUp (i18n placeholders). Either wire i18n or add hardcoded English write-up and FAQs.
3. **Other tools with empty FAQs** – Add a small set of 5–10 FAQ items per tool (question + answer) and pass them to `FAQSection` / `FaqJsonLd` so the section is useful for users and SEO.

---

## Next steps

- For **write-up**: Either render existing `createWriteUp()` where it exists (word-counter, case-converter) or add new write-up content (e.g. remove-line-breaks, remove-whitespace, find-and-replace).
- For **FAQs**: Populate `pageFaqs` (or `faqs`) with real `FaqItem[]` entries for every tool that currently uses an empty array; optionally add FaqJsonLd where missing.
