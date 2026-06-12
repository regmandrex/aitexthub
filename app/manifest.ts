import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GPT Clean Up Tools',
    short_name: 'GPTCleanup',
    description:
      'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
