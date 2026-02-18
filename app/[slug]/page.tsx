import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type PageProps = {
  params: { slug: string };
};

// Generate static params for all tools at build time
export function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
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
