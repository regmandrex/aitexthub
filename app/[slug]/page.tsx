import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

// The registry is the source of truth. Unknown one-segment URLs should 404
// immediately instead of being rendered on demand by ISR for bots and typos.
export const dynamicParams = false;

// Cache at edge for 30 days — content changes only on deploy, not daily
export const revalidate = 2592000;

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
