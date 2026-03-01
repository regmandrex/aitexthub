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
export const revalidate = 86400;

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

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is the ChatGPT Originality Checker?', answer: 'The ChatGPT Originality Checker is a free online tool that helps you estimate how original your text may appear to AI and plagiarism detectors. It analyzes patterns often associated with AI-generated or highly similar content. It does not replace official plagiarism or AI checks required by your institution.' },
    { category: 'General', question: 'Is the Originality Checker free?', answer: 'Yes. This tool is free. Paste your text, run the check, and review the result. Processing runs in your browser; your text is not sent to our servers.' },
    { category: 'Accuracy', question: 'How accurate is the originality checker?', answer: 'The tool gives an indicative score based on common signals. It is not a substitute for Turnitin, Copyleaks, or other official systems. Use it for pre-screening and revision only.' },
    { category: 'Privacy', question: 'Is my text sent to external services or stored?', answer: 'No. The tool runs in your browser. Your text is not sent to third-party detectors or our servers, and it is not stored.' },
    { category: 'Usage', question: 'How do I use the ChatGPT Originality Checker?', answer: 'Paste your content into the input area and run the analysis. Review the score and suggestions. Edit your text as needed. For official decisions, use the tools required by your school or employer.' },
    { category: 'Technical', question: 'What does the tool analyze?', answer: 'The tool looks at factors such as predictability, repetition, and structure that are often associated with AI or low-originality text. It does not access external databases or compare to the whole web.' },
    { category: 'Use cases', question: 'Who should use an originality checker?', answer: 'Students, writers, and professionals who want a quick pre-check before submitting to formal systems can use it. It helps you spot potential issues and revise; it does not replace institutional tools.' },
    { category: 'Limits', question: 'Does it replace Turnitin or Copyleaks?', answer: 'No. For final originality or plagiarism decisions, use the tools and policies required by your organization. This checker is for pre-screening only.' },
    { category: 'General', question: 'Can I check long documents?', answer: 'Typical article and essay lengths are supported. Very long texts may need to be split. Check the tool for current limits.' },
    { category: 'SEO', question: 'Is the originality checker useful for publishers?', answer: 'Publishers can use it to get a rough sense of how original or AI-like content might appear. It does not replace editorial or contractual requirements.' },
    { category: 'Technical', question: 'Why do different tools give different scores?', answer: 'Each system uses different models and data. This tool gives an approximate indication; it will not match Turnitin, Copyleaks, or others exactly.' },
    { category: 'Usage', question: 'Should I revise based on the result?', answer: 'You can use the feedback to improve clarity and variety. Always ensure your work meets your course or employer requirements and disclosure policies.' },
    { category: 'Privacy', question: 'Do you keep a copy of my text?', answer: 'No. Processing is local in your browser. We do not store or log your content.' },
    { category: 'General', question: 'What is the difference from a plagiarism checker?', answer: 'An originality checker often focuses on AI-likeness and internal patterns. A plagiarism checker compares against other sources. This tool is oriented toward AI/originality signals; it does not perform full plagiarism comparison.' },
    { category: 'Use cases', question: 'Can educators use this tool?', answer: 'Educators can use it to understand how such tools work or to pre-check sample text. For student work, follow your institution\'s approved tools and policies.' },
    { category: 'Accuracy', question: 'Will this match my Turnitin or Copyleaks score?', answer: 'No. Different systems use different methods. This tool gives an approximate indication only.' },
    { category: 'Technical', question: 'Does it work on mobile?', answer: 'Yes. The tool runs in the browser and works on phones and tablets.' },
    { category: 'Limits', question: 'Is there a word limit?', answer: 'Typical limits are in the thousands of words. Check the tool interface for the current limit.' },
    { category: 'General', question: 'Do I need an account?', answer: 'No. You can use the ChatGPT Originality Checker without signing up.' },
    { category: 'Usage', question: 'How often can I use it?', answer: 'The tool is free to use as often as you need. There is no per-day limit on our side.' },
    { category: 'Technical', question: 'What languages does it support?', answer: 'The tool is optimized for English. Other languages may work but accuracy can vary.' },
    { category: 'Use cases', question: 'Is it suitable for academic submissions?', answer: 'Use it only as a pre-screen. Final compliance must be with your institution\'s required tools and academic integrity policy.' },
  ];

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
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
