/**
 * Next.js configuration for GPT CLEAN UP.
 * Includes placeholder redirects for migrating legacy WordPress URLs.
 */
const nextConfig = {
  async redirects() {
    return [
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
