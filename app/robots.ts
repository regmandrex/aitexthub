import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/account', '/auth-error', '/login', '/signup'],
    },
    sitemap: 'https://gptcleanuptools.com/sitemap.xml',
  };
}
