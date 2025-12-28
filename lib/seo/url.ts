const siteUrl = 'https://gptcleanuptools.com';

export function cleanUrl(slug: string): string {
  const trimmed = slug.replace(/^\/+|\/+$/g, '');
  if (!trimmed) return `${siteUrl}/`;
  return `${siteUrl}/${trimmed}/`;
}

