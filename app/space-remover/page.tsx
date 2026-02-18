import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { SpaceRemoverTool } from '@/components/tools/SpaceRemoverTool';
import type { FaqItem } from '@/components/faqData';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'space-remover';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'General' },
  { key: 'faq4', category: 'General' },
  { key: 'faq5', category: 'General' },
  { key: 'faq6', category: 'General' },
  { key: 'faq7', category: 'General' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'General' },
  { key: 'faq10', category: 'General' },
  { key: 'faq11', category: 'General' },
  { key: 'faq12', category: 'General' },
  { key: 'faq13', category: 'General' },
  { key: 'faq14', category: 'General' },
  { key: 'faq15', category: 'General' },
  { key: 'faq16', category: 'General' },
  { key: 'faq17', category: 'General' },
  { key: 'faq18', category: 'General' },
  { key: 'faq19', category: 'General' },
  { key: 'faq20', category: 'General' },
  { key: 'faq21', category: 'General' },
];

// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function - content should be added back with hardcoded English strings if needed

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

  const url = `${siteUrl}/${toolSlug}/`;

  // Note: FAQs need to be hardcoded from en.json if needed
  const pageFaqs: FaqItem[] = [];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...tool, title, shortDescription: description }} ui={<SpaceRemoverTool />} related={<RelatedTools currentSlug={tool.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions about space removal, formatting, and text cleanup.
          </p>
        </div>

        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
