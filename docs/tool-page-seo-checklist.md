# Tool page SEO checklist

Use this checklist for **ChatGPT** and **Claude** tool pages (and other tool pages that follow the same SEO article pattern).

---

## 1. Write-up (article) length and SEO

- **Minimum: ~3,000 words** for the main write-up section (the `<section className="rounded-2xl border ...">` prose block).
- **SEO keyword optimized:** Use target keywords naturally (e.g. tool name, "free online", use-case phrases). Include definition paragraphs, step lists, bullets, comparison tables, H2/H3, EEAT-style clarity. Avoid stuffing; keep prose natural and helpful.
- **Target / ultimate:** 4,000+ words for key pages (see `docs/tool-count-from-semrush-images.md`).
- Count only the visible article content (intro, How it works, Who/Why use, How to use, Best practices, Limitations, H2/H3). Do not include the FAQ block, tool UI, or nav in the word count.

---

## 2. Minimum FAQs: 23, SEO-optimized and detailed

- **Minimum: 23 FAQs** per tool page. Every tool page must have at least 23 `FaqItem` entries passed to `FAQSection` and `FaqJsonLd`.
- **SEO keyword optimized:** Questions and answers should include relevant keywords (tool name, "free", use cases, "how to", "what is", etc.) naturally. Questions should match common search intents.
- **Detailed answers:** FAQ answers should be substantive—aim for roughly 50–150+ words per answer where appropriate (150–300 for key pages). Avoid one-line answers; explain clearly for both users and search engines.
- FAQs must be tool-specific (or tool-family specific). Cover: What is it? Is it free? How do I use it? Privacy? Who should use it? Accuracy/limits? Technical (mobile, languages, word limit)? Use cases (academic, SEO, etc.)? Difference from related tools? Account? How often?
- Ensure `FaqJsonLd` receives the same `faqs` array as `FAQSection` so schema matches visible content.

---

## 3. Headings and the tool name (SEO-friendly, no stuffing)

- **Include the tool name in key headings** so search engines and users clearly see what the page is about. Use it in 2–4 H2s in a natural, helpful way—for example:
  - **Intro H2:** e.g. `Claude Humanizer: Make AI Text Sound Human` or `ChatGPT Grammar Checker: Fix Grammar in AI-Generated Text`.
  - **How it works:** e.g. `How the Claude Humanizer Works` or `How the ChatGPT Paraphraser Works`.
  - **Who should use:** e.g. `Who Should Use a Claude Humanizer` or `Who Should Use a ChatGPT Grammar Checker`.
  - **How to use (optional):** e.g. `How to Use the Claude Humanizer` or keep a generic `How to Use the Tool` / `Best Practices` for variety.
- **Do not put the tool name in every H2/H3.** Use generic, helpful headings for the rest (e.g. `What Gets Improved`, `Best Practices`, `Limitations`, `Paraphraser vs. Humanizer`). That keeps content natural and avoids keyword stuffing.
- **Google-friendly:** This follows normal SEO practice—primary keyword in the title, first paragraph, and a few key headings—without repetitive or manipulative use that could violate Google’s helpful content and E-E-A-T guidelines.

---

## 4. Structure (unchanged)

- Intro paragraph(s): what the tool is, who it’s for, that it runs in-browser / no server storage.
- **How it works** (H2) with optional H3s.
- **Who should use / Why use** (H2).
- **How to use / Best practices** (H2).
- **Limitations** (H2).
- **Frequently Asked Questions** (H2) with `FAQSection` + `FaqJsonLd`.

---

## 5. Verification

- **Word count:** Extract the write-up section text (strip JSX/tags) and count words; ensure ≥ 3,000 (or 4,000+ for ultimate). Verify keyword usage is natural and present.
- **FAQ count:** Ensure `pageFaqs` or `faqs` has `length >= 23` for every tool page.
- **FAQ quality:** Spot-check that answers are detailed and SEO keyword optimized, not one-line replies.
- **Headings:** Confirm the tool name appears in 2–4 key H2s (e.g. intro, How it works, Who should use) and not in every heading.

---

## References

- `docs/tool-writeup-faq-audit.md` — which pages have write-ups and FAQs.
- `docs/tool-count-from-semrush-images.md` — “ultimate” format (4000+ words, 23 FAQs with 150–300 word answers).
