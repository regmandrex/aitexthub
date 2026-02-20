import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTSentenceRewriterTool } from '@/components/tools/ChatGPTSentenceRewriterTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-sentence-rewriter';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq2', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq3', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq4', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq5', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq6', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq7', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq8', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq9', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq10', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq11', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq12', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq13', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq14', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq15', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq16', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq17', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq18', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq19', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq20', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq21', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq22', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq23', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq24', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq25', category: 'ChatGPT Sentence Rewriter FAQs' },
];
function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>ChatGPT Sentence Rewriter: Free Online Sentence Transformer</h2>
        <p>Sentence rewriting changes the structure and wording of a sentence while keeping its meaning. It helps you add variety, adjust tone, or express the same idea in a different way.</p>
        <p>This tool uses AI to suggest rewritten versions of your sentences. You can rewrite one sentence or several. Always review the output and cite sources when you use ideas from others.</p>

        <h2>Why Use a Sentence Rewriter</h2>
        <p>Rewriting gives you targeted control over clarity, style, and variety. It is useful for essays, emails, and any text where you want to improve flow without changing the message.</p>

        <h2>How It Works</h2>
        <p>The tool analyzes your sentence and suggests alternatives using structural changes, synonyms, and reordering while preserving meaning. You can iterate until the result fits your needs.</p>

        <h2>Using the Tool</h2>
        <p>Paste or type your text, run the rewriter, and review the result. Use clear input and keep context in mind. Edit the output as needed for accuracy and tone.</p>

        <h2>Use Cases</h2>
        <p>Use it for clarity, sentence variety, tone adjustment, and to rephrase AI-generated or ESL text. It complements a paraphraser (which works on longer passages), a grammar checker (which fixes errors), and a humanizer (which changes style).</p>

        <h2>Best Practices</h2>
        <p>Preserve the original intent and meaning. Keep tone and style consistent with the rest of your document. Use your judgment and edit the result before publishing.</p>

        <h2>Professional Use</h2>
        <p>Sentence rewriting is useful in business, marketing, technical writing, and academic writing. Use it to refine drafts and improve readability.</p>

        <h2>Limitations</h2>
        <p>Always verify the output for accuracy and fit. Complex or technical sentences may need manual editing. The tool is an aid, not a replacement for your own review.</p>
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
    seoTitle: 'ChatGPT Sentence Rewriter - Free Online Sentence Transformer',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTSentenceRewriterPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTSentenceRewriterTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the ChatGPT Sentence Rewriter.
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
