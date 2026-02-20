import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { EmDashRemoverTool } from '@/components/tools/EmDashRemoverTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'em-dash-remover';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Em Dash Remover / Replacer";
  const description = "Remove or replace em dashes (—) and en dashes (–) with your preferred spacing.";
  const seoTitle = "Em Dash Remover - Replace or remove em dashes — and –";
  
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
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Formatting' },
  { key: 'faq5', category: 'Usage' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Limits' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Limits' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Workflow' },
  { key: 'faq13', category: 'General' },
  { key: 'faq14', category: 'Professional' },
  { key: 'faq15', category: 'Academic' },
  { key: 'faq16', category: 'SEO' },
  { key: 'faq17', category: 'Accessibility' },
  { key: 'faq18', category: 'Privacy' },
  { key: 'faq19', category: 'Compatibility' },
  { key: 'faq20', category: 'Technical' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Responsible Use' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Em Dash Remover: Replace or Remove Em Dashes</h2>
        <p>This free tool finds em dashes (—) in your text and replaces them with a character you choose—often a hyphen, comma, or space—or removes them. Useful when pasting from Word, PDFs, or web content into plain text or code.</p>

        <h2>What Is an Em Dash?</h2>
        <p>An em dash (—) is a long dash used for pauses, asides, or emphasis. It can cause issues in plain text, URLs, or code, so replacing it with a hyphen or comma is common.</p>

        <h2>Why It Matters</h2>
        <p>Em dashes from copy-paste can break parsing, search, or formatting. Replacing them keeps text consistent and compatible with plain-text systems.</p>

        <h2>How It Works</h2>
        <p>Paste your text, choose a replacement (hyphen, comma, space, or remove), and run. Processing is in your browser; your text is not sent to our servers.</p>

        <h2>What It Does Not Do</h2>
        <p>It does not rewrite or paraphrase. It only finds and replaces em dashes (and optionally similar characters). Review the result to ensure it matches your needs.</p>

        <h2>Privacy</h2>
        <p>Your text is processed locally and is not stored or uploaded.</p>

        <h2>Summary</h2>
        <p>Use the Em Dash Remover to normalize or remove em dashes in pasted text. Choose your replacement and review the output before using it.</p>
      </div>
    </section>
  );
}

export default async function EmDashRemoverPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<EmDashRemoverTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the Em Dash Remover.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
