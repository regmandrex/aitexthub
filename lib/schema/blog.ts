import { siteUrl } from './site';

type BlogPostingInput = {
  headline: string;
  description: string;
  urlPath: string;
};

export function blogPostingSchema({ headline, description, urlPath }: BlogPostingInput) {
  const url = `${siteUrl}${urlPath}`;

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
    publisher: {
      '@type': 'Organization',
      name: 'GPT CLEAN UP',
      url: siteUrl,
    },
  };
}
