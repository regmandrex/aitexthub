import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type PageProps = {
  params: { slug: string };
};

// Generate static params for all tools at build time
// Exclude tools that have their own dedicated page routes
export function generateStaticParams() {
  const toolsWithDedicatedPages = new Set([
  'korean-nickname-generator',
  'fancy-english-translator',
  'simlish-translator',
  'species-name-generator',
  'ganglish-translator',
  'cartinese-translator',
  'word-descrambler',
  'gibberish-translator',
  'two-name-ambigram-generator',
  'ambigram-tattoo-generator',
  'medieval-translator',
  'shakespearean-translator',
  'middle-english-translator',
  'old-english-translator',
  'navajo-translator',
]);
  return getAllTools()
    .filter((tool) => !toolsWithDedicatedPages.has(tool.slug))
    .map((tool) => ({ slug: tool.slug }));
}

// Enable dynamic route handling for tools not in static params
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return buildToolMeta({
    title: tool.title,
    description: tool.shortDescription,
    seoTitle: tool.seoTitle,
    urlPath: `/${tool.slug}`,
  });
}

export default async function ToolPage({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return notFound();

  return <ToolPageRenderer slug={params.slug} />;
}
