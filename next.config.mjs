/**
 * Next.js configuration for GPT CLEAN UP.
 * Includes placeholder redirects for migrating legacy WordPress URLs.
 */
const nextConfig = {
  experimental: {
    inlineCss: true,
    cpus: 1,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // all-tools -> ai-tools (301 for SEO when URL was renamed)
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
      // Add more legacy WordPress URLs here as needed
    ];
  },
};

export default nextConfig;
