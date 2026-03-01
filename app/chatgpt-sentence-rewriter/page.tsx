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
export const revalidate = 86400;

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

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is the ChatGPT Sentence Rewriter?', answer: 'The ChatGPT Sentence Rewriter is a free online tool that rewrites sentences to vary structure and wording while keeping meaning. It helps you rephrase for clarity, style, or to avoid repetition. It runs in your browser and does not send your text to our servers.' },
    { category: 'General', question: 'Is the Sentence Rewriter free?', answer: 'Yes. This tool is free. Paste your text, run the rewriter, and copy the result. No account required.' },
    { category: 'Usage', question: 'How do I use the ChatGPT Sentence Rewriter?', answer: 'Paste your sentences or paragraph into the input area and run the tool. Review the rewritten output and edit as needed. You can run it multiple times for different phrasings.' },
    { category: 'Technical', question: 'Does it change the meaning of my text?', answer: 'The tool aims to preserve meaning while changing wording and structure. Always review the output to ensure accuracy and that your intent is preserved.' },
    { category: 'Privacy', question: 'Is my text sent to a server or stored?', answer: 'No. The tool runs in your browser. Your text is not uploaded or stored.' },
    { category: 'Use cases', question: 'Who should use a sentence rewriter?', answer: 'Writers, students, and professionals who want to rephrase sentences for clarity, avoid repetition, or adapt tone can use it. It is a writing aid, not a replacement for your own editing.' },
    { category: 'Limits', question: 'Can I rewrite long documents?', answer: 'Typical paragraph and article lengths work. Very long texts may need to be processed in sections. Check the tool for limits.' },
    { category: 'General', question: 'What is the difference from a paraphraser?', answer: 'A sentence rewriter often focuses on sentence-level changes. A paraphraser may work on whole paragraphs. Both aim to rephrase while preserving meaning; the scope may differ.' },
    { category: 'SEO', question: 'Is the sentence rewriter useful for SEO?', answer: 'It can help vary phrasing and avoid duplicate-sounding content. Use it as part of an editorial process; ensure quality and relevance for your audience.' },
    { category: 'Technical', question: 'What languages does it support?', answer: 'The tool is optimized for English. Other languages may work but quality can vary.' },
    { category: 'Usage', question: 'Should I edit the output?', answer: 'Yes. Always review and edit the result. The tool supports your workflow; it does not replace judgment or accuracy checks.' },
    { category: 'Privacy', question: 'Do you keep a copy of my text?', answer: 'No. Processing is local in your browser. We do not store or log your content.' },
    { category: 'General', question: 'Can I use it for academic writing?', answer: 'You can use it to rephrase for clarity. Ensure your use complies with your institution\'s policy on AI and writing tools, and that you retain responsibility for content.' },
    { category: 'Use cases', question: 'Can educators use this tool?', answer: 'Educators can use it to demonstrate rephrasing or to prepare materials. For student work, follow your institution\'s policies.' },
    { category: 'Technical', question: 'Does it work on mobile?', answer: 'Yes. The tool runs in the browser and works on phones and tablets.' },
    { category: 'Limits', question: 'Is there a word limit?', answer: 'Typical limits are in the thousands of words. Check the tool interface.' },
    { category: 'General', question: 'Do I need an account?', answer: 'No. You can use the ChatGPT Sentence Rewriter without signing up.' },
    { category: 'Usage', question: 'How often can I use it?', answer: 'The tool is free to use as often as you need.' },
    { category: 'Technical', question: 'Will it fix grammar?', answer: 'Rephrasing may improve some grammar by changing structure. It is not a dedicated grammar checker. Use a grammar tool if you need full correction.' },
    { category: 'Use cases', question: 'Is it suitable for professional content?', answer: 'Yes, as a writing aid. Always review output for tone, accuracy, and compliance with your organization\'s standards.' },
    { category: 'General', question: 'What is sentence rewriting?', answer: 'Sentence rewriting means rephrasing one or more sentences to say the same thing in different words or structure. It helps with clarity, style, and avoiding repetition.' },
    { category: 'Technical', question: 'Does it preserve citations or quotes?', answer: 'The tool may rephrase quoted or cited text if it is in the input. Always verify citations and quotes after rewriting.' },
  ];

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
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
