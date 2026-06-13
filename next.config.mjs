/**
 * Next.js configuration for GPT CLEAN UP.
 */
const nextConfig = {
  experimental: {
    inlineCss: true,
    cpus: 4,
  },
  images: {
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256],
  },
  async headers() {
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
    ];
  },
  async redirects() {
    return [
      {
        source: '/api/auth/error',
        destination: '/auth-error',
        permanent: false,
      },
      // Ezoic ads.txt manager (shared account ID 19390). Serves Ezoic's
      // authorized-sellers list, including the existing AdSense line.
      // The former static public/ads.txt was removed so this redirect wins.
      // https://docs.ezoic.com/docs/ezoicads/adstxt/
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/gptcleanuptools.com',
        // Ezoic's docs specify a 301; Next emits 308 for `permanent: true`, so
        // pin the exact status code instead.
        statusCode: 301,
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
        source: '/blog/sample-old-wordpress-url/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
