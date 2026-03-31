import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all tools at build time
// Exclude tools that have their own dedicated page routes
export async function generateStaticParams() {
  const toolsWithDedicatedPages = new Set([
  'korean-nickname-generator',
  'fancy-english-translator',
  'simlish-translator',
  'species-name-generator',
  'god-goddess-name-generator',
  'muslim-name-generator',
  'transformers-name-generator',
  'naruto-name-generator',
  'island-name-generator',
  'fallout-name-generator',
  'ancient-greek-name-generator',
  'drag-queen-name-generator',
  'tribe-name-generator',
  'anime-names-generator',
  'wrestling-name-generator',
  'royal-surname-generator',
  'silly-name-generator',
  'bracket-name-generator',
  'steam-name-generator',
  'elden-ring-name-generator',
  'mlp-name-generator',
  'stripper-name-generator',
  'runescape-name-generator',
  'shopify-store-name-generator',
  'korean-name-generator-male',
  'ganglish-translator',
  'cartinese-translator',
  'playboi-carti-translator',
  'word-descrambler',
  'gibberish-translator',
  'two-name-ambigram-generator',
  'ambigram-tattoo-generator',
  'medieval-translator',
  'shakespearean-translator',
  'middle-english-translator',
  'old-english-translator',
  'navajo-translator',
  'chatgpt-text-cleaner',
  'ai-text-cleaner',
]);
  return getAllTools()
    .filter((tool) => !toolsWithDedicatedPages.has(tool.slug))
    .map((tool) => ({ slug: tool.slug }));
}

// Enable dynamic route handling for tools not in static params
export const dynamicParams = true;

// Cache at edge for 24h to reduce Fast Origin Transfer
export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return buildToolMeta({
    title: tool.title,
    description: tool.shortDescription,
    seoTitle: tool.seoTitle,
    urlPath: `/${tool.slug}`,
  });
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return notFound();

  return <ToolPageRenderer slug={slug} />;
}

