import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { buildMeta } from '@/lib/seo-meta';

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: 'AI Humanizer Pro — Bypass Every AI Detector',
    description: 'Rewrite ChatGPT, Claude, and Gemini output with LLM-powered humanization that passes 99% of AI detectors — Turnitin, GPTZero, Originality.ai, Copyleaks, Winston AI, and Sapling. Three rewrite intensities, instant results.',
    urlPath: '/ai-humanizer-pro',
  });
}

export default function AIHumanizerProLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
