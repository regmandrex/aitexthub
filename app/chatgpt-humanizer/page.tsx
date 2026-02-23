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

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is the ChatGPT Humanizer?', answer: 'The ChatGPT Humanizer is a free online tool that rewrites AI-generated text so it reads more naturally. It adjusts vocabulary, sentence structure, and tone to reduce robotic patterns that detectors often flag. It does not guarantee that text will pass every AI detector.' },
    { category: 'General', question: 'Is the ChatGPT Humanizer free?', answer: 'Yes. This tool is free. Paste your text, run the humanizer, and copy the result. Processing runs in your browser; your text is not sent to our servers.' },
    { category: 'Usage', question: 'How do I use the ChatGPT Humanizer?', answer: 'Paste your AI-generated or other text into the input area and run the humanizer. Review the output and edit as needed. For best results, combine with your own revisions and follow your institution\'s or employer\'s AI policies.' },
    { category: 'Accuracy', question: 'Will humanized text pass AI detectors?', answer: 'No tool can guarantee that. Detectors evolve and vary. Use the humanizer to improve readability and reduce obvious AI patterns; final responsibility for originality and disclosure lies with you.' },
    { category: 'Privacy', question: 'Is my text sent to a server or stored?', answer: 'No. The tool runs in your browser. Your text is not uploaded or stored. Safe for confidential drafts.' },
    { category: 'Technical', question: 'How does the humanizer work?', answer: 'The tool rephrases sentences, varies word choice, and adds natural variation in length and complexity. It aims to keep your meaning while making the text sound more human-written.' },
    { category: 'Use cases', question: 'Who should use a ChatGPT Humanizer?', answer: 'Writers, students, and professionals who want to polish AI-assisted text for readability or to reduce AI-like patterns can use it. It is a writing aid, not a way to evade detection or policy.' },
    { category: 'Limits', question: 'Does it replace my own editing?', answer: 'No. Always review and edit the output. The humanizer supports your workflow; it does not replace judgment, accuracy checks, or compliance with academic or employer policies.' },
    { category: 'General', question: 'Can I humanize long documents?', answer: 'Typical article lengths work. Very long texts may need to be processed in sections. Check the tool for limits.' },
    { category: 'SEO', question: 'Is the humanizer useful for content marketing?', answer: 'It can help make AI-assisted copy read more naturally. Use it as part of an editorial process; ensure content meets your quality and disclosure standards.' },
    { category: 'Technical', question: 'What languages does it support?', answer: 'The tool is optimized for English. Other languages may work but quality can vary.' },
    { category: 'Usage', question: 'Should I run text through multiple times?', answer: 'You can try multiple passes and choose the best result. Avoid over-editing to the point where meaning or clarity suffers.' },
    { category: 'Privacy', question: 'Do you keep a copy of my text?', answer: 'No. Processing is local in your browser. We do not store or log your content.' },
    { category: 'General', question: 'What is the difference from a paraphraser?', answer: 'A humanizer focuses on making text sound more human and less AI-like. A paraphraser rewrites for different wording while preserving meaning. Goals overlap but a humanizer is tuned for detector-related patterns.' },
    { category: 'Use cases', question: 'Can educators use this tool?', answer: 'Educators can use it to demonstrate how such tools work. For student work, follow your institution\'s policies on AI use and disclosure.' },
    { category: 'Accuracy', question: 'Is humanizing the same as bypassing detectors?', answer: 'No. Humanizing improves readability and variation; it does not guarantee any detector result. Use the tool ethically and in line with your organization\'s policies.' },
    { category: 'Technical', question: 'Does it work on mobile?', answer: 'Yes. The tool runs in the browser and works on phones and tablets.' },
    { category: 'Limits', question: 'Is there a word limit?', answer: 'Typical limits are in the thousands of words. Check the tool interface for the current limit.' },
    { category: 'General', question: 'Do I need an account?', answer: 'No. You can use the ChatGPT Humanizer without signing up.' },
    { category: 'Usage', question: 'How often can I use it?', answer: 'The tool is free to use as often as you need.' },
    { category: 'Technical', question: 'Does it change facts or citations?', answer: 'The tool aims to preserve meaning while changing style. Always verify facts and citations after humanizing; do not rely on it for accuracy.' },
    { category: 'Use cases', question: 'Is it suitable for academic writing?', answer: 'Use only in line with your institution\'s policy on AI tools. You are responsible for originality and proper disclosure.' },
  ];

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
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} name={`${title} – FAQs`} />
      </ToolPageShell>
    </>
  );
}
