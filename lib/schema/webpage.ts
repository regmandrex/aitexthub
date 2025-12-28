export function webPageSchema({ name, url, description }: { name: string; url: string; description?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    url,
    ...(description ? { description } : {}),
  };
}

