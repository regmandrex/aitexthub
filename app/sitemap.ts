import { MetadataRoute } from 'next';
import { cleanUrl } from '../lib/seo/url';
import { toolPages, categoryPages } from '../lib/seo/registry';

const blogSlugs = [
  'blog',
  'blog/advanced-dom-optimization-for-ai-generated-content',
  'blog/ai-content-cleaning-vs-traditional-text-sanitization-for-seo',
  'blog/best-tools-to-clean-chatgpt-text-before-publishing',
  'blog/clean-ai-text-before-publishing',
  'blog/chatgpt-text-to-wordpress-cleanest-copy-paste-workflow',
  'blog/common-mistakes-when-cleaning-chatgpt-text-and-fixes',
  'blog/comprehensive-guide-to-cleaning-ai-text-before-publishing',
  'blog/developers-guide-clean-chatgpt-text-before-using-in-code-or-docs',
  'blog/detecting-and-removing-hidden-ai-watermarks-in-text',
  'blog/fix-chatgpt-formatting',
  'blog/future-of-ai-text-cleaning',
  'blog/gpt-cleanup-vs-manual-editing',
  'blog/how-to-clean-chatgpt-text-for-emails-and-newsletters',
  'blog/how-to-make-chatgpt-text-look-human-cleaning-and-rewriting-tips',
  'blog/how-to-clean-chatgpt-text',
  'blog/how-to-remove-chatgpt-watermarks-and-hidden-characters',
  'blog/invisible-markup-impacts-core-web-vitals',
  'blog/optimizing-ai-generated-text-for-web-performance',
  'blog/remove-hidden-ai-watermarks-guide',
  'blog/the-science-of-invisible-spaces-in-ai-text',
  'blog/ultimate-workflow-detect-clean-and-format-chatgpt-text',
  'blog/why-chatgpt-text-looks-messy-and-how-to-fix-it',
  'blog/why-ai-watermarks-matter-and-how-to-clean-chatgpt-text-safely',
  'blog/chatgpt-formatting-fixer-for-word-and-docs',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  toolPages.forEach((page) => {
    urls.push({
      url: cleanUrl(page.slug),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  categoryPages
    .filter((p) => !p.noindex)
    .forEach((page) => {
      urls.push({
        url: cleanUrl(page.slug),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.4,
      });
    });

  blogSlugs.forEach((slug) => {
    urls.push({
      url: cleanUrl(slug),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    });
  });

  return urls;
}
