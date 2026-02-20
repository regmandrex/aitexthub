import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTHumanizerTool } from '@/components/tools/ChatGPTHumanizerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-humanizer';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq2', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq3', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq4', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq5', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq6', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq7', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq8', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq9', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq10', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq11', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq12', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq13', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq14', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq15', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq16', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq17', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq18', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq19', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq20', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq21', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq22', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq23', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq24', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq25', category: 'ChatGPT Humanizer FAQs' },
];
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>ChatGPT Humanizer: Make AI Text Sound Human</h2>
        <p>This free tool helps rewrite AI-generated text so it reads more naturally. It adjusts vocabulary, sentence structure, and tone to reduce robotic patterns that detectors often flag.</p>
        <p>Paste your text, run the humanizer, then review and edit the output. Use it to polish drafts while staying within your institution&apos;s or employer&apos;s AI policies.</p>

        <h2>How It Works</h2>
        <p>The tool rephrases sentences, varies word choice, and adds natural variation in length and complexity. It aims to keep your meaning while making the text sound more human-written.</p>

        <h2>Using the Tool</h2>
        <p>Paste your content and run the humanizer. Always review the result and make any edits needed for accuracy and style. For best results, combine with your own revisions.</p>

        <h2>Limitations</h2>
        <p>No tool can guarantee that text will pass every AI detector. Use this as a writing aid; final responsibility for originality and disclosure lies with you.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};

  const title = toolData.title;
  const description = toolData.shortDescription;

  return buildToolMeta({
    title,
    description,
    seoTitle: 'ChatGPT Humanizer - Make AI Text Sound Human Free',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTHumanizerPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
  };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTHumanizerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the ChatGPT Humanizer.
          </p>
        </div>
        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed
          return (
            <>
              <FAQSection items={pageFaqs} />
              <FaqJsonLd faqs={pageFaqs} />
            </>
          );
        })()}
      </ToolPageShell>
    </>
  );
}
