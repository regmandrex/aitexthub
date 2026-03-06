# Tool page checklist audit

Generated from automated counts and spot-checks. Checklist source: `docs/tool-page-seo-checklist.md`.

## Summary

| Requirement | Status |
|-------------|--------|
| **§1 Write-up ≥ ~3,000 words** | **FAIL** – Almost all pages are well under 3k words (typical 250–1,500). |
| **§2 FAQs ≥ 23, detailed & SEO** | **PASS** – All Claude and ChatGPT tool pages now have ≥ 23 FAQs. |
| **§3 Headings: tool name in 2–4 H2s** | **PASS** – Tool pages updated so the tool name appears in 2–4 key H2s (intro, How it works, Who should use, How to use). |
| **§4 Structure** | **PASS** – Intro, How it works, Who/Why, How to use/Best practices, Limitations, FAQs. |
| **§5 Verification** | This doc + fixes applied. |

---

## 1. Word count (write-up section only)

- **Target:** ≥ 3,000 words per page (4,000+ for key pages).
- **Reality:** Most write-ups are ~250–700 words. Only a few pages exceed 1,000; none reach 3,000 in the standard prose block.
- **Action:** Content expansion is a separate task; each page would need substantial new sections (e.g. use cases, comparisons, step-by-step, examples) to reach 3k words.

---

## 2. FAQ count (minimum 23)

All tool pages now meet the 23-FAQ minimum.

### Claude tool pages

- **Updated to 23+ FAQs:** claude-academic-humanizer, claude-alt-text-generator, claude-assignment-checker, claude-blog-post-validator, claude-copyleaks-checker, claude-detector, claude-essay-checker, claude-essay-rewriter, claude-gptzero-checker, claude-linkedin-rewriter, claude-meta-description-generator, claude-originality-checker, claude-paragraph-rewriter, claude-passive-voice-fixer, claude-press-release-polisher, claude-product-description-improver, claude-readability-checker, claude-research-paper-checker, claude-resume-humanizer, claude-sentence-rewriter, claude-style-analyzer, claude-thesis-checker, claude-title-tag-generator, claude-tone-analyzer, claude-space-remover.
- **Already had 23+:** claude-turnitin-checker; claude-cover-letter-humanizer, claude-email-humanizer, claude-grammar-checker, claude-humanizer, claude-paraphraser, claude-watermark-cleaner, claude-watermark-detector.

### ChatGPT tool pages

- **Updated to 23 FAQs:** chatgpt-detector (+13), chatgpt-copyleaks-checker (+1), chatgpt-gptzero-checker (+1), chatgpt-originality-checker (+1), chatgpt-paraphraser (+1), chatgpt-sentence-rewriter (+1).
- **Already had 23+:** chatgpt-turnitin-checker; other ChatGPT tool pages (e.g. chatgpt-humanizer, chatgpt-grammar-checker).

---

## 3. Headings (tool name in 2–4 H2s)

- **Required:** Tool name in 2–4 key H2s (e.g. intro, How it works, Who should use, optionally How to use). Do not put the tool name in every H2/H3.
- **Status:** Claude and ChatGPT tool pages have been updated so the tool name appears in 2–4 key H2s (e.g. “Who Should Use the [Tool Name]”, “How to Use the [Tool Name]”). chatgpt-detector now includes “Who Should Use the ChatGPT Detector” in `createWriteUp()`.

---

## 4. Next steps

1. ~~**FAQ fixes:** Add FAQs (and lengthen answers where needed) so every tool page has ≥ 23 detailed, SEO-optimized FAQs; keep `FaqJsonLd` in sync.~~ **Done.**
2. ~~**Headings:** Where missing, add/rename H2s so the tool name appears in 2–4 key headings per checklist §3.~~ **Done.**
3. **Word count:** Plan content expansion to bring write-ups to ~3,000 words (separate task).
