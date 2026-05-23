import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { SpaceRemoverTool } from '@/components/tools/SpaceRemoverTool';
import { SpaceRemoverWriteUp } from '@/components/tools/SpaceRemoverWriteUp';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { spaceRemoverFaqs } from '@/lib/tools/spaceRemoverFaqs';

export const revalidate = 2592000;

const toolSlug = 'space-remover';

export async function generateMetadata(): Promise<Metadata> {
  const tool = getToolBySlug(toolSlug);
  if (!tool) return {};

  return buildToolMeta({
    title: tool.title,
    description: tool.shortDescription,
    seoTitle: tool.seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function SpaceRemoverPage() {
  const tool = getToolBySlug(toolSlug);
  if (!tool) return notFound();

  const title = tool.title;
  const description = tool.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell
        tool={{ ...tool, title, shortDescription: description }}
        ui={<SpaceRemoverTool />}
        related={<RelatedTools currentSlug={tool.slug} />}
      >
        <SpaceRemoverWriteUp />

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            Frequently Asked Questions – Space Remover Online
          </h2>
          <p className="text-slate-700">
            Common questions about the space remover tool, removing extra spaces,
            normalizing whitespace, and cleaning text online.
          </p>
        </div>

        <FAQSection
          items={spaceRemoverFaqs}
          title="Space Remover FAQ"
          intro="Find answers about using a space remover online tool to remove extra spaces, trim whitespace, and normalize text for documents, code, and SEO."
          showCategories={true}
        />
        <FaqJsonLd faqs={spaceRemoverFaqs} />
      </ToolPageShell>
    </>
  );
}

