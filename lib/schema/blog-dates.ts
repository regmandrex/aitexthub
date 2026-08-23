/**
 * First-publication dates for blog posts, keyed by slug.
 *
 * Sourced from each post's first commit in git history (`git log
 * --diff-filter=A`), so every value reflects when the post actually went
 * live rather than an arbitrary "freshness" stamp.
 *
 * Deliberately no dateModified: 67 of 68 posts share a single 2026-06-12
 * timestamp from a site-wide encoding fix, which was not a content
 * revision. Claiming it as one would misrepresent freshness to search
 * engines. When a post genuinely gets rewritten, add its slug to
 * BLOG_UPDATED below.
 */

export const BLOG_PUBLISHED: Record<string, string> = {
  '5-best-ai-watermark-removers': '2026-03-23',
  'advanced-dom-optimization-for-ai-generated-content': '2026-01-15',
  'ai-content-cleaning-vs-traditional-text-sanitization-for-seo': '2026-01-15',
  'ai-content-detection-complete-guide': '2026-03-23',
  'ai-text-remover-faster-and-smarter-way-to-clean-your-text': '2026-02-19',
  'ai-text-watermarks-explained': '2026-03-23',
  'ai-watermarks-and-academic-integrity': '2026-03-23',
  'are-ai-watermarks-ethical': '2026-03-23',
  'best-chatgpt-cleanup-tools': '2026-03-18',
  'best-tools-to-clean-chatgpt-text-before-publishing': '2026-01-15',
  'can-recruiters-tell-if-you-used-chatgpt': '2026-03-23',
  'chatgpt-formatting-fixer-for-word-and-docs': '2025-12-28',
  'chatgpt-text-cleaner-iphone': '2026-03-18',
  'chatgpt-text-to-wordpress-cleanest-copy-paste-workflow': '2026-01-15',
  'chatgpt-watermark-remover-mobile': '2026-03-18',
  'chatgpt-watermark-remover-what-it-is': '2026-03-23',
  'clean-ai-text-before-publishing': '2026-01-15',
  'clean-my-computer-with-chatgpt': '2026-08-09',
  'common-mistakes-when-cleaning-chatgpt-text-and-fixes': '2026-01-15',
  'common-problems-with-extra-spaces-in-documents-and-how-to-fix-them': '2026-02-19',
  'comprehensive-guide-to-cleaning-ai-text-before-publishing': '2026-01-15',
  'detecting-and-removing-hidden-ai-watermarks-in-text': '2026-01-15',
  'developers-guide-clean-chatgpt-text-before-using-in-code-or-docs': '2026-01-15',
  'does-chatgpt-leave-a-digital-footprint': '2026-03-23',
  'does-chatgpt-watermark-text': '2026-03-23',
  'fix-chatgpt-formatting': '2026-01-15',
  'free-chatgpt-watermark-remover-tools-compared': '2026-03-23',
  'future-of-ai-text-cleaning': '2026-01-15',
  'gpt-cleanup-vs-manual-editing': '2026-01-15',
  'how-ai-detection-tools-work-and-why-they-get-it-wrong': '2026-03-23',
  'how-does-an-ai-detector-work': '2026-03-23',
  'how-to-check-if-text-has-chatgpt-watermark': '2026-03-23',
  'how-to-clean-chatgpt-text': '2026-01-15',
  'how-to-clean-chatgpt-text-for-emails-and-newsletters': '2026-01-15',
  'how-to-clean-chatgpt-text-on-android': '2026-03-18',
  'how-to-delete-white-space-frequently-asked-questions': '2026-02-19',
  'how-to-effectively-remove-spaces-from-text-expert-tips': '2026-02-19',
  'how-to-humanize-ai-text': '2026-03-23',
  'how-to-make-chatgpt-text-look-human-cleaning-and-rewriting-tips': '2026-01-15',
  'how-to-quickly-fix-unwanted-spaces-in-word-documents': '2026-02-19',
  'how-to-remove-chatgpt-watermarks-and-hidden-characters': '2026-01-15',
  'how-to-remove-chatgpt-watermarks-from-word-and-pages': '2026-03-23',
  'how-to-remove-chatgpt-watermarks-from-word-with-screenshots': '2026-03-23',
  'how-to-remove-extra-spaces-from-text-online': '2026-02-19',
  'how-to-see-chatgpt-watermarks': '2026-03-23',
  'how-to-use-ai-for-resume-without-getting-flagged': '2026-03-23',
  'how-to-use-chatgpt-for-essays-without-getting-caught': '2026-03-23',
  'invisible-characters-in-chatgpt-text': '2026-03-23',
  'invisible-markup-impacts-core-web-vitals': '2026-01-15',
  'invisible-watermarks-in-chatgpt-text': '2026-03-23',
  'is-ai-content-bad-for-seo': '2026-03-23',
  'optimizing-ai-generated-text-for-web-performance': '2026-01-15',
  'remove-hidden-ai-watermarks-guide': '2026-01-15',
  'removing-spaces-vs-manual-editing-which-is-better': '2026-02-19',
  'step-by-step-guide-to-remove-spaces-from-your-text': '2026-02-19',
  'the-best-ways-to-remove-blank-spaces-in-excel': '2026-02-19',
  'the-hidden-risks-of-copying-chatgpt-text': '2026-03-23',
  'the-science-of-invisible-spaces-in-ai-text': '2026-01-15',
  'top-benefits-of-using-a-space-remover-tool': '2026-02-19',
  'truth-about-chatgpt-watermarks-myths-vs-reality': '2026-03-23',
  'ultimate-workflow-detect-clean-and-format-chatgpt-text': '2026-01-15',
  'what-are-gpt-watermarks': '2026-03-23',
  'what-is-a-space-remover-tool': '2026-02-19',
  'where-to-check-ai-writing': '2026-03-23',
  'why-ai-watermarks-matter-and-how-to-clean-chatgpt-text-safely': '2026-01-15',
  'why-chatgpt-text-looks-messy-and-how-to-fix-it': '2025-12-28',
  'why-is-ai-detector-saying-my-writing-is-ai': '2026-03-23',
  'why-your-text-is-flagged-as-ai': '2026-03-23',
};

/**
 * Substantive content revisions only. Keep this empty unless a post's
 * body was actually rewritten — see the note above.
 */
export const BLOG_UPDATED: Record<string, string> = {};

export function publishedFor(slug: string): string | undefined {
  return BLOG_PUBLISHED[slug];
}

export function updatedFor(slug: string): string | undefined {
  return BLOG_UPDATED[slug];
}
