import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Text Cleanup Tools',
    short_name: 'AI Cleanup Tools',
    description:
      'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf8f2',
    theme_color: '#0f766e',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
