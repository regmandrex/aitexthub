/**
 * Single source of truth for blog posts. Used by blog index and sitemap.
 */
export const blogPosts: Array<{
  slug: string;
  title: string;
  description: string;
  date: string;
}> = [
  { slug: 'best-chatgpt-cleanup-tools', title: 'Best ChatGPT Cleanup Tools for Cleaner, Faster Publishing', description: 'Compare real ChatGPT cleanup tools, what they must clean under the hood, and how to choose the right stack for SEO and performance.', date: 'Mar 2026' },
  { slug: 'how-to-clean-chatgpt-text-on-android', title: 'How to Clean ChatGPT Text on Android', description: 'A mobile-first workflow to clean ChatGPT text on Android using AI space removal, invisible character detection, and safe copy-paste.', date: 'Mar 2026' },
  { slug: 'chatgpt-watermark-remover-mobile', title: 'ChatGPT Watermark Remover on Mobile: What Actually Matters', description: 'What people really mean by ChatGPT watermarks, what you can clean on mobile, and how to stay safe and policy-aligned.', date: 'Mar 2026' },
  { slug: 'chatgpt-text-cleaner-iphone', title: 'ChatGPT Text Cleaner for iPhone (Ready-to-Publish Workflow)', description: 'Step-by-step workflow to clean ChatGPT text on iPhone, remove invisible noise, and paste into Notes, Mail, or CMS without layout bugs.', date: 'Mar 2026' },
  { slug: 'how-to-quickly-fix-unwanted-spaces-in-word-documents', title: 'How to Quickly Fix Unwanted Spaces in Word Documents', description: 'Learn simple methods to remove extra spaces, fix paragraph gaps, and clean up Word documents using built-in tools and shortcuts.', date: 'Feb 2026' },
  { slug: 'the-best-ways-to-remove-blank-spaces-in-excel', title: 'The Best Ways to Remove Blank Spaces in Excel', description: 'Master Excel data cleaning with TRIM, SUBSTITUTE, and filtering techniques to eliminate unwanted spaces and improve accuracy.', date: 'Feb 2026' },
  { slug: 'what-is-a-space-remover-tool', title: 'What is a Space Remover Tool?', description: "Discover how space remover tools work, why they're essential for writers and developers, and how they improve text quality instantly.", date: 'Feb 2026' },
  { slug: 'how-to-remove-extra-spaces-from-text-online', title: 'How to Remove Extra Spaces from Text Online', description: 'Step-by-step guide to cleaning text online using space remover tools. Perfect for documents, coding, and content creation.', date: 'Feb 2026' },
  { slug: 'top-benefits-of-using-a-space-remover-tool', title: 'Top Benefits of Using a Space Remover Tool', description: "Learn how space remover tools save time, prevent errors, and improve document quality for professionals and students.", date: 'Feb 2026' },
  { slug: 'step-by-step-guide-to-remove-spaces-from-your-text', title: 'Step-by-Step Guide to Remove Spaces from Your Text', description: 'Easy-to-follow instructions for cleaning text using online tools. Includes tips for large documents and code files.', date: 'Feb 2026' },
  { slug: 'ai-text-remover-faster-and-smarter-way-to-clean-your-text', title: 'AI Text Remover: Faster and Smarter Way to Clean Your Text', description: "Explore how AI-powered text cleaning works and why it's faster than manual editing for large documents and code.", date: 'Feb 2026' },
  { slug: 'common-problems-with-extra-spaces-in-documents-and-how-to-fix-them', title: 'Common Problems with Extra Spaces in Documents (and How to Fix Them)', description: 'Real-world examples of spacing issues and practical solutions for writers, students, and professionals.', date: 'Feb 2026' },
  { slug: 'how-to-delete-white-space-frequently-asked-questions', title: 'How to Delete White Space: Frequently Asked Questions', description: 'Answers to common questions about removing white space, cleaning text, and using online space remover tools.', date: 'Feb 2026' },
  { slug: 'removing-spaces-vs-manual-editing-which-is-better', title: 'Removing Spaces vs. Manual Editing: Which is Better?', description: 'Compare automated space removal tools with manual editing to find the most efficient approach for your workflow.', date: 'Feb 2026' },
  { slug: 'how-to-effectively-remove-spaces-from-text-expert-tips', title: 'How to Effectively Remove Spaces from Text: Expert Tips', description: 'Professional advice from content creators and developers on optimizing your text cleaning workflow.', date: 'Feb 2026' },
  { slug: 'how-to-make-chatgpt-text-look-human-cleaning-and-rewriting-tips', title: 'How to Make ChatGPT Text Look Human (Cleaning vs Rewriting)', description: 'What actually works: clean invisible Unicode first, then apply light rewriting for flow without harming SEO or meaning.', date: 'Jan 2026' },
  { slug: 'clean-ai-text-before-publishing', title: 'Clean AI Text Before Publishing (Pre-Publish Checklist)', description: 'A complete pre-publish checklist for SEO, performance, and trust when publishing AI-assisted content across platforms.', date: 'Jan 2026' },
  { slug: 'why-ai-watermarks-matter-and-how-to-clean-chatgpt-text-safely', title: 'Why AI Watermarks Matter (and How to Clean Safely)', description: 'What "AI watermarks" really mean, which risks are real, and how to clean ChatGPT text safely without rewriting or hurting SEO.', date: 'Jan 2026' },
  { slug: 'how-to-clean-chatgpt-text-for-emails-and-newsletters', title: 'How to Clean ChatGPT Text for Emails and Newsletters', description: 'A safe email workflow to remove invisible Unicode, stabilize formatting across clients, and protect deliverability and trust.', date: 'Jan 2026' },
  { slug: 'developers-guide-clean-chatgpt-text-before-using-in-code-or-docs', title: "Developer's Guide: Clean ChatGPT Text for Code and Docs", description: 'Prevent invisible Unicode from breaking Markdown, configs, linters, and CI with a safe developer workflow.', date: 'Jan 2026' },
  { slug: 'remove-hidden-ai-watermarks-guide', title: 'Remove Hidden AI Watermarks (Practical Guide)', description: 'What to remove vs ignore, how to clean real hidden Unicode artifacts safely, and how to publish without rewriting.', date: 'Jan 2026' },
  { slug: 'future-of-ai-text-cleaning', title: 'Future of AI Text Cleaning', description: "What's next for SEO-safe AI publishing: Unicode normalization, performance-aware cleaning, and content QA pipelines.", date: 'Jan 2026' },
  { slug: 'gpt-cleanup-vs-manual-editing', title: 'GPT Cleanup vs Manual Editing', description: 'What each does well, what each misses, and the best order for SEO, Core Web Vitals, and scalable publishing in 2026.', date: 'Jan 2026' },
  { slug: 'common-mistakes-when-cleaning-chatgpt-text-and-fixes', title: 'Common Mistakes When Cleaning ChatGPT Text (And Fixes)', description: 'The most common cleanup mistakes and the SEO-safe, performance-focused fixes that prevent broken layouts and regressions.', date: 'Jan 2026' },
  { slug: 'detecting-and-removing-hidden-ai-watermarks-in-text', title: 'Detecting and Removing Hidden AI Watermarks in Text', description: "What's real vs misinformation, how to detect invisible Unicode artifacts, and how to clean safely without rewriting.", date: 'Jan 2026' },
  { slug: 'best-tools-to-clean-chatgpt-text-before-publishing', title: 'Best Tools to Clean ChatGPT Text Before Publishing', description: 'What to look for in real AI text cleaners, how common tool categories compare, and how to choose for SEO and performance.', date: 'Jan 2026' },
  { slug: 'ultimate-workflow-detect-clean-and-format-chatgpt-text', title: 'Ultimate Workflow: Detect, Clean, and Format ChatGPT Text', description: 'A 5-stage workflow to detect hidden issues, clean text correctly, format natively, and publish stable, SEO-safe AI content.', date: 'Jan 2026' },
  { slug: 'ai-content-cleaning-vs-traditional-text-sanitization-for-seo', title: 'AI Content Cleaning vs Traditional Text Sanitization for SEO', description: 'Why sanitization alone is not enough for AI content, and what to clean in 2026 for performance, UX, and rankings.', date: 'Jan 2026' },
  { slug: 'advanced-dom-optimization-for-ai-generated-content', title: 'Advanced DOM Optimization for AI-Generated Content', description: 'Reduce DOM bloat from AI text, improve speed, stabilize layouts, and protect Core Web Vitals at scale.', date: 'Jan 2026' },
  { slug: 'optimizing-ai-generated-text-for-web-performance', title: 'Optimizing AI-Generated Text for Web Performance', description: 'How AI text affects speed, stability, and SEO, plus a repeatable workflow to optimize LCP/CLS/INP at scale.', date: 'Jan 2026' },
  { slug: 'the-science-of-invisible-spaces-in-ai-text', title: 'The Science of Invisible Spaces in AI Text', description: 'Why invisible Unicode spaces exist, how they break websites, and how to remove them safely for SEO and performance.', date: 'Jan 2026' },
  { slug: 'invisible-markup-impacts-core-web-vitals', title: 'How Invisible Markup Impacts Core Web Vitals', description: 'Why hidden Unicode and dirty text can hurt LCP/CLS/INP, and how to detect and fix invisible markup permanently.', date: 'Jan 2026' },
  { slug: 'chatgpt-text-to-wordpress-cleanest-copy-paste-workflow', title: 'ChatGPT Text to WordPress: Clean Copy-Paste Workflow', description: 'The safest workflow to paste ChatGPT text into WordPress without broken blocks, spacing issues, or SEO/performance hits.', date: 'Jan 2026' },
  { slug: 'fix-chatgpt-formatting', title: 'Fix ChatGPT Formatting: Headings, Lists, Spacing & Layout', description: 'Why formatting breaks after copy-paste and how to fix headings, lists, spacing, and layout issues reliably.', date: 'Jan 2026' },
  { slug: 'how-to-remove-chatgpt-watermarks-and-hidden-characters', title: 'How to Remove ChatGPT Watermarks and Hidden Characters', description: 'A technical guide to detect hidden Unicode, remove artifacts, and publish clean, reliable ChatGPT text.', date: 'Jan 2026' },
  { slug: 'comprehensive-guide-to-cleaning-ai-text-before-publishing', title: 'Comprehensive Guide to Cleaning AI Text Before Publishing', description: 'A complete workflow to sanitize AI text, fix structure, and publish clean, SEO-safe content in 2026.', date: 'Jan 2026' },
  { slug: 'how-to-clean-chatgpt-text', title: 'How to Clean ChatGPT Text (Publishing, SEO & Performance)', description: 'Step-by-step cleanup for invisible characters, whitespace, structure, and SEO-safe publishing.', date: 'Jan 2026' },
  { slug: 'why-chatgpt-text-looks-messy-and-how-to-fix-it', title: 'Why ChatGPT Text Looks Messy (and How to Fix It Permanently)', description: 'Why spacing, lists, and headings break after copy-paste, and the clean workflow that fixes it for good.', date: 'Jan 2026' },
  { slug: 'chatgpt-formatting-fixer-for-word-and-docs', title: 'ChatGPT Formatting Fixer for Word and Docs', description: 'Why ChatGPT formatting breaks in documents and the clean workflow to keep spacing, headings, bullets, and PDF export stable.', date: 'Jan 2026' },
];

/** Slugs for sitemap (blog/ + slug). */
export function getBlogSitemapSlugs(): string[] {
  return ['blog', ...blogPosts.map((p) => `blog/${p.slug}`)];
}

const MONTH_NAMES: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

/** Convert "Feb 2026" / "Jan 2026" to RFC 822 pubDate for RSS. */
export function blogDateToRfc822(dateStr: string): string {
  const [monthName, yearStr] = dateStr.trim().split(/\s+/);
  const year = parseInt(yearStr || '2026', 10);
  const month = MONTH_NAMES[monthName?.slice(0, 3) ?? ''] ?? 0;
  const d = new Date(Date.UTC(year, month, 1, 0, 0, 0));
  return d.toUTCString();
}
