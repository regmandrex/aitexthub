import { siteUrl } from './site';
import { blogPosts } from '../blog-posts';

type BlogPostingInput = {
  headline: string;
  description: string;
  urlPath: string;
};

function resolveDate(urlPath: string): string | undefined {
  const slug = urlPath.replace(/^\/blog\//, '');
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post?.date) return undefined;

  const monthMap: Record<string, string> = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
  };
  const parts = post.date.split(' ');
  if (parts.length === 2 && monthMap[parts[0]]) {
    return `${parts[1]}-${monthMap[parts[0]]}-01`;
  }
  return undefined;
}

export function blogPostingSchema({ headline, description, urlPath }: BlogPostingInput) {
  const url = `${siteUrl}${urlPath}`;
  const datePublished = resolveDate(urlPath);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    ...(datePublished && { datePublished, dateModified: datePublished }),
    author: {
      '@type': 'Organization',
      name: 'GPT CLEAN UP',
      url: siteUrl,
    },
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
