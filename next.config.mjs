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
