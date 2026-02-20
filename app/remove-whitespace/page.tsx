import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { RemoveWhitespaceTool } from '@/components/tools/RemoveWhitespaceTool';
import type { FaqItem } from '@/components/faqData';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'remove-whitespace';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Usage' },
  { key: 'faq5', category: 'Formatting' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Usage' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Workflow' },
  { key: 'faq12', category: 'Usage' },
  { key: 'faq13', category: 'Limits' },
  { key: 'faq14', category: 'Technical' },
  { key: 'faq15', category: 'SEO' },
  { key: 'faq16', category: 'Privacy' },
  { key: 'faq17', category: 'Compatibility' },
  { key: 'faq18', category: 'Limits' },
  { key: 'faq19', category: 'Workflow' },
  { key: 'faq20', category: 'Technical' },
  { key: 'faq21', category: 'General' },
  { key: 'faq22', category: 'Workflow' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Formatting' },
  { key: 'faq25', category: 'Usage' },
  { key: 'faq26', category: 'Technical' },
  { key: 'faq27', category: 'Workflow' },
  { key: 'faq28', category: 'General' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Remove Whitespace: Clean Extra Spaces From Text</h2>
        <p>This free tool removes or normalizes extra whitespace in text: multiple spaces, tabs, and sometimes line breaks. Useful for data cleanup, code, or pasted content.</p>

        <h3>What It Does</h3>
        <p>Paste text with extra spaces; the tool collapses or trims them so you get consistent spacing. It can remove leading and trailing spaces, collapse runs of spaces to one, or strip all spaces.</p>

        <h3>Why Use It</h3>
        <p>Extra whitespace can break parsing, comparison, or display. Developers, data analysts, and content creators use it to clean pasted data, code, or text from PDFs and forms.</p>

        <h3>How It Works</h3>
        <p>Paste your text, choose options (e.g., trim only, collapse spaces), and run. Processing is done in your browser; your text is not sent to our servers.</p>

        <h3>Comparison</h3>
        <p>Unlike a full space remover (which may remove all spaces), this tool focuses on normalizing or trimming. Trim removes only start/end spaces; collapse reduces multiple spaces to one.</p>

        <h3>Privacy and Limitations</h3>
        <p>Your text is processed locally. For very long or highly structured text, review the result to ensure the output matches what you need.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Remove Whitespace";
  const description = "Remove all whitespace characters including spaces, tabs, and line breaks from text.";
  const seoTitle = "Remove Whitespace Online - Remove All Spaces, Tabs & Line Breaks";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function RemoveWhitespacePage() {
  
  const tool = getToolBySlug(toolSlug);
  if (!tool) return notFound();

  const title = tool.title;
  const description = tool.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...tool, title, shortDescription: description }} ui={<RemoveWhitespaceTool />} related={<RelatedTools currentSlug={tool.slug} />}>
        {createWriteUp()}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the Remove Whitespace tool.
          </p>
        </div>

        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
