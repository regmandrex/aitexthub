import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Container from '../../components/Container';
import { buildMeta } from '@/lib/seo-meta';

export const metadata: Metadata = buildMeta({
  title: 'GPTCLEANUP AI Blog - Fix Messy AI Text & Formatting',
  description: 'Guides on cleaning up AI output, fixing formatting issues, and preparing ChatGPT or Gemini text for documents.',
  urlPath: '/blog',
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Container className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h1 className="text-3xl font-semibold text-slate-900">GPTCLEANUP AI Blog</h1>
            <Link
              href="/rss.xml"
              className="text-sm font-medium text-slate-600 hover:text-brand-600"
            >
              RSS feed
            </Link>
          </div>
          <p className="text-slate-700">
            Practical guides for tidying up AI text, removing messy spacing, and keeping formatting clean across tools.
          </p>
        </div>
        {children}
      </Container>
    </section>
  );
}
