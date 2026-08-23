import { siteUrl } from './site';
import { publishedFor, updatedFor } from './blog-dates';

type BlogPostingInput = {
  headline: string;
  description: string;
  urlPath: string;
  /**
   * ISO date (YYYY-MM-DD) the post was first published.
   * Recommended by Google's Article structured data guidelines.
   */
  datePublished?: string;
  /**
   * ISO date (YYYY-MM-DD) of the last substantive content revision.
   * Only set this for real content updates — a site-wide refactor or
   * encoding fix is not a content change, and claiming it as one
   * misrepresents freshness.
   */
  dateModified?: string;
};

const publisher = {
  '@type': 'Organization',
  name: 'GPT CLEAN UP',
  url: siteUrl,
} as const;

export function blogPostingSchema({
  headline,
  description,
  urlPath,
  datePublished,
  dateModified,
}: BlogPostingInput) {
  const url = `${siteUrl}${urlPath}`;

  // Fall back to the slug's recorded publication date so existing posts
  // pick these up without every call site having to pass them.
  const slug = urlPath.replace(/^\/blog\//, '').replace(/\/$/, '');
  const published = datePublished ?? publishedFor(slug);
  const modified = dateModified ?? updatedFor(slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    // The site publishes under its own name rather than a personal byline,
    // so the organisation is the author as well as the publisher.
    author: publisher,
    publisher,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
  };
}
