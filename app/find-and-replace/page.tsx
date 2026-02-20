import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { FindReplaceTool } from '@/components/tools/FindReplaceTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'find-and-replace';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Find and Replace";
  const description = "Search for text and replace it with custom values, with optional case matching.";
  const seoTitle = "Find and Replace Tool - Bulk text replacement online";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'Technical' },
  { key: 'faq3', category: 'Usage' },
  { key: 'faq4', category: 'Usage' },
  { key: 'faq5', category: 'Technical' },
  { key: 'faq6', category: 'Technical' },
  { key: 'faq7', category: 'Formatting' },
  { key: 'faq8', category: 'Usage' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Limits' },
  { key: 'faq13', category: 'Workflow' },
  { key: 'faq14', category: 'General' },
  { key: 'faq15', category: 'Professional' },
  { key: 'faq16', category: 'Academic' },
  { key: 'faq17', category: 'SEO' },
  { key: 'faq18', category: 'Accessibility' },
  { key: 'faq19', category: 'Privacy' },
  { key: 'faq20', category: 'Compatibility' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Responsible Use' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Find and Replace: Bulk Text Replacement Tool</h2>
        <p>This free tool finds every occurrence of a search string in your text and replaces it with another string. You can do one replacement or many. Useful for cleaning data, normalizing text, or batch edits.</p>

        <h2>What It Does</h2>
        <p>Enter the text to search for and the replacement text. The tool performs literal matching: it finds exact occurrences (optionally case-sensitive or whole-word) and replaces them. It does not use regex or rewrite meaning.</p>

        <h2>Why It Matters</h2>
        <p>Bulk find-and-replace saves time when you need to change a word, phrase, or character throughout a document. Editors, developers, and analysts use it to normalize content or fix repeated typos.</p>

        <h2>How It Works</h2>
        <p>Paste your text, enter find and replace strings, choose options (e.g., case-sensitive, whole word), and run. Processing is in your browser; your text is not sent to our servers.</p>

        <h2>What It Does Not Do</h2>
        <p>It is not a grammar or style checker. It only replaces the exact text you specify. Order of operations matters if you run multiple replacements—run one at a time or in a clear sequence.</p>

        <h2>Privacy</h2>
        <p>Your text is processed locally and is not stored or uploaded.</p>

        <h2>Summary</h2>
        <p>Use Find and Replace to change every occurrence of a string in your text. Review the result to ensure all replacements are correct.</p>
      </div>
    </section>
  );
}

export default async function FindAndReplacePage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<FindReplaceTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the Find and Replace tool.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
