import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTOriginalityCheckerTool } from '@/components/tools/ChatGPTOriginalityCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-originality-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT Originality Checker FAQs' },
];

// Helper function to create writeUp content using translations
function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>ChatGPT Originality Checker: Pre-Screen AI Content</h2>
        <p>This free tool helps you estimate how original your text may appear to AI and plagiarism detectors. It analyzes patterns often associated with AI-generated or highly similar content.</p>
        <p>Paste your text and run the check to see a score and suggestions. Use the result to revise before submitting to formal systems. It does not replace official plagiarism or AI checks required by your institution or employer.</p>

        <h2>Detection</h2>
        <p>The checker looks at factors such as predictability, repetition, and structure. No single tool can definitively label text as AI or human; use this as a pre-screen only.</p>

        <h2>Using the Tool</h2>
        <p>Paste your content and run the analysis. Review the feedback and edit as needed. For official decisions, use the tools and policies required by your school or workplace.</p>

        <h2>Limitations</h2>
        <p>Results are indicative, not conclusive. Different detectors use different methods; always follow your organization&apos;s required tools and disclosure rules.</p>
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
    seoTitle: 'ChatGPT Originality Checker - Pre-Screen AI Content Free',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTOriginalityCheckerPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTOriginalityCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the ChatGPT Originality checker.
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
