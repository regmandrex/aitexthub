import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/account',
          '/auth-error',
          '/login',
          '/signup',
          '/*?*',
        ],
      },
      {
        userAgent: [
          'Amazonbot',
          'anthropic-ai',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
          'ClaudeBot',
          'Claude-SearchBot',
          'cohere-ai',
          'Diffbot',
          'FacebookBot',
          'Google-Extended',
          'GPTBot',
          'ImagesiftBot',
          'Meta-ExternalAgent',
          'Omgilibot',
          'PerplexityBot',
          'YouBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://aitextcleanuptools.com/sitemap.xml',
  };
}
