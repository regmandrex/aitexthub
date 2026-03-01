import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTParaphraserTool } from '@/components/tools/ChatGPTParaphraserTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
export const revalidate = 86400;

const toolSlug = 'chatgpt-paraphraser';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq2', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq3', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq4', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq5', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq6', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq7', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq8', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq9', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq10', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq11', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq12', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq13', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq14', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq15', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq16', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq17', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq18', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq19', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq20', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq21', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq22', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq23', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq24', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq25', category: 'ChatGPT Paraphraser FAQs' },
];
function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>ChatGPT Paraphraser: Free Online Text Rewriting Tool</h2>
        <p>Paraphrasing means rewording text so the meaning stays the same but the wording changes. It helps you avoid repetition, match a different tone, or express ideas in your own words while keeping the original message.</p>
        <p>This tool uses AI to suggest paraphrased versions of your text. It is not a plagiarism tool—paraphrasing changes wording; plagiarism is about attribution and copying. Always cite sources when you use someone else&apos;s ideas.</p>

        <h2>Understanding Paraphrasing</h2>
        <p>Good paraphrasing keeps the main ideas and key facts but uses different sentence structure and vocabulary.</p>

        <h3>Why paraphrase</h3>
        <p>Paraphrasing helps you clarify complex sources, vary your writing style, and integrate research without over-quoting. It is a standard skill in academic and professional writing.</p>

        <h3>Elements</h3>
        <p>Effective paraphrasing changes word choice and sentence structure while preserving meaning. It should sound like your voice, not a copy of the source.</p>

        <h3>Paraphrasing vs plagiarism</h3>
        <p>Paraphrasing alone does not make use of a source acceptable. You must still cite the original. Plagiarism is using someone else&apos;s work or ideas without credit.</p>

        <h2>How It Works</h2>
        <p>The tool analyzes your text and produces alternative phrasings using synonym substitution, sentence restructuring, and reordering while aiming to keep coherence.</p>

        <h3>Semantic understanding</h3>
        <p>It tries to keep the same meaning when changing words and structure.</p>

        <h3>Synonyms and restructuring</h3>
        <p>It uses synonyms and rewrites sentences so the result reads naturally. You should always review and edit the output.</p>

        <h2>Using the Tool</h2>
        <p>Paste your text, run the paraphraser, and review the result. Use it as a starting point; then edit for accuracy, tone, and citation.</p>

        <h3>Input</h3>
        <p>Use clear, complete sentences for best results. Very short or fragmentary text may not paraphrase well.</p>

        <h3>Review</h3>
        <p>Always check that the paraphrased version is accurate and appropriate for your purpose. Fix any errors or awkward phrasing.</p>

        <h3>Citation</h3>
        <p>If you paraphrase from a source, you must cite it. Paraphrasing does not remove the need for citation.</p>

        <h2>Applications</h2>
        <p>Use paraphrasing in academic writing, professional content, and learning—always with proper attribution.</p>

        <h3>Academic</h3>
        <p>Paraphrase sources to integrate research into your arguments. Cite every source you paraphrase.</p>

        <h3>Professional and content</h3>
        <p>Rephrase for clarity, tone, or audience. Do not use others&apos; ideas without permission or credit where required.</p>

        <h3>AI-generated content</h3>
        <p>If you paraphrase AI output, follow your institution&apos;s or employer&apos;s rules on AI use and disclosure. Improve and verify the content; do not present it as someone else&apos;s human work without permission.</p>

        <h2>Best Practices</h2>
        <p>Understand the source, preserve meaning, match your audience, and cite. Use the tool to draft; then edit and cite properly.</p>

        <h2>Limitations</h2>
        <p>Output may sometimes change nuance or introduce errors. Technical or specialized text may need manual editing. Review everything before you use it.</p>
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
    seoTitle: 'ChatGPT Paraphraser - Free Online Text Rewriting Tool',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTParaphraserPage() {
  
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
    { category: 'General', question: 'What is the ChatGPT Paraphraser?', answer: 'The ChatGPT Paraphraser is a free online tool that rewrites text to say the same thing in different words. It helps you rephrase for clarity, avoid repetition, or adapt tone. It runs in your browser and does not send your text to our servers.' },
    { category: 'General', question: 'Is the Paraphraser free?', answer: 'Yes. This tool is free. Paste your text, run the paraphraser, and copy the result. No account required.' },
    { category: 'Usage', question: 'How do I use the ChatGPT Paraphraser?', answer: 'Paste your text into the input area and run the tool. Review the paraphrased output and edit as needed. You can run it multiple times for different phrasings.' },
    { category: 'Technical', question: 'Does it preserve meaning?', answer: 'The tool aims to preserve meaning while changing wording. Always review the output to ensure accuracy and that your intent is preserved.' },
    { category: 'Privacy', question: 'Is my text sent to a server or stored?', answer: 'No. The tool runs in your browser. Your text is not uploaded or stored.' },
    { category: 'Use cases', question: 'Who should use a paraphraser?', answer: 'Writers, students, and professionals who want to rephrase for clarity, avoid plagiarism concerns with wording, or adapt content can use it. It is a writing aid, not a replacement for your own editing or citation.' },
    { category: 'Limits', question: 'Can I paraphrase long documents?', answer: 'Typical paragraph and article lengths work. Very long texts may need to be processed in sections. Check the tool for limits.' },
    { category: 'General', question: 'What is the difference from a sentence rewriter?', answer: 'A paraphraser often works on whole paragraphs or blocks. A sentence rewriter may focus on sentence-level changes. Both rephrase while aiming to preserve meaning.' },
    { category: 'SEO', question: 'Is the paraphraser useful for SEO?', answer: 'It can help vary phrasing and avoid duplicate-sounding content. Use it as part of an editorial process; ensure quality and relevance for your audience.' },
    { category: 'Technical', question: 'What languages does it support?', answer: 'The tool is optimized for English. Other languages may work but quality can vary.' },
    { category: 'Usage', question: 'Should I edit the output?', answer: 'Yes. Always review and edit the result. The tool supports your workflow; it does not replace judgment or accuracy checks.' },
    { category: 'Privacy', question: 'Do you keep a copy of my text?', answer: 'No. Processing is local in your browser. We do not store or log your content.' },
    { category: 'General', question: 'Can I use it for academic writing?', answer: 'You can use it to rephrase for clarity. Ensure your use complies with your institution\'s policy on AI and writing tools. You are responsible for proper citation and originality.' },
    { category: 'Use cases', question: 'Can educators use this tool?', answer: 'Educators can use it to demonstrate rephrasing or to prepare materials. For student work, follow your institution\'s policies.' },
    { category: 'Technical', question: 'Does it work on mobile?', answer: 'Yes. The tool runs in the browser and works on phones and tablets.' },
    { category: 'Limits', question: 'Is there a word limit?', answer: 'Typical limits are in the thousands of words. Check the tool interface.' },
    { category: 'General', question: 'Do I need an account?', answer: 'No. You can use the ChatGPT Paraphraser without signing up.' },
    { category: 'Usage', question: 'How often can I use it?', answer: 'The tool is free to use as often as you need.' },
    { category: 'Technical', question: 'Will it fix grammar?', answer: 'Rephrasing may improve some grammar. It is not a dedicated grammar checker. Use a grammar tool if you need full correction.' },
    { category: 'Use cases', question: 'Is it suitable for professional content?', answer: 'Yes, as a writing aid. Always review output for tone, accuracy, and compliance with your organization\'s standards.' },
    { category: 'General', question: 'What is paraphrasing?', answer: 'Paraphrasing means rewriting text in your own words while keeping the original meaning. It is used for clarity, style, and to avoid copying wording.' },
    { category: 'Technical', question: 'Does it preserve citations or quotes?', answer: 'The tool may rephrase quoted or cited text if it is in the input. Always verify citations and quotes after paraphrasing.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTParaphraserTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the ChatGPT Paraphraser.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
