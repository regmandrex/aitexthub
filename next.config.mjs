/**
 * Next.js configuration for AI Text Cleanup Tools.
 */
const nextConfig = {
  experimental: {
    inlineCss: true,
    cpus: 4,
  },
  images: {
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          // Keep API responses uncached in development, but let Next manage
          // its own dev assets so client and server bundles stay in sync.
          source: '/api/:path*',
          headers: [
            { key: 'Cache-Control', value: 'no-store' },
          ],
        },
      ];
    }

    return [
      {
        // Cache static assets (JS/CSS chunks) for 1 year — they have hashed filenames
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache public assets (images, fonts) for 30 days
        source: '/brand/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        // API routes must never be edge-cached
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
      {
        // Cache HTML pages at the edge for 30 days (excludes /api and /_next)
        source: '/((?!api|_next).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=2592000, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/api/auth/error',
        destination: '/auth-error',
        permanent: false,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      // Legacy model watermark remover slugs -> watermark cleaner slugs
      ...[
        'claude',
        'mistral',
        'deepseek',
        'grok',
        'gemini',
        'perplexity',
        'llama',
      ].map((model) => ({
        source: `/${model}-watermark-remover`,
        destination: `/${model}-watermark-cleaner`,
        permanent: true,
      })),
      // Strip legacy locale prefixes (site is English-only at root paths)
      {
        source: '/:locale(es|fr|ko|zh-cn|en)/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:locale(es|fr|ko|zh-cn|en)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/all-tools',
        destination: '/ai-tools',
        permanent: true,
      },
      {
        source: '/blog/gpt-cleanup-vs-manual-editing',
        destination: '/blog/ai-text-cleanup-vs-manual-editing',
        permanent: true,
      },
      {
        source: '/blog/sample-old-wordpress-url/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
