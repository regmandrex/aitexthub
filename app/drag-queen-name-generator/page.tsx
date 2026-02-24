import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'drag-queen-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Drag Queen Name Generator',
    description: 'Generate drag queen and performer stage names for creative and entertainment use.',
    seoTitle: 'Drag Queen Name Generator - Stage Names Free',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Drag Queen Name Generator?</h2>
        <p>A drag queen name generator creates stage names for performers and creative personas. Use it for entertainment, character creation, or fun. This free tool runs in your browser. For other naming tools try our <Link href="/stripper-name-generator">stripper name generator</Link> (stage names), <Link href="/anime-names-generator">anime names generator</Link>, or <Link href="/silly-name-generator">silly name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag queen name generator?', answer: 'A drag queen name generator is an online tool that creates stage names for performers and creative personas. You get glamorous or punny-style names for entertainment and character use.' },
  { category: 'Usage', question: 'How do I use the drag queen name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use it for a stage name?', answer: 'Yes. The generator is for inspiration. Pick one you like and make it yours.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'Are these real drag queen names?', answer: 'They are algorithm-generated. Some may resemble existing names; use for inspiration only.' },
  { category: 'Use cases', question: 'Can I use the names for a character?', answer: 'Yes, for creative projects and fiction.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have stripper/stage name generator, silly name generator, anime names, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use it for roleplay?', answer: 'Yes.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why stage names?', answer: 'Drag and performance often use memorable stage names. The generator offers ideas in that style.' },
  { category: 'Use cases', question: 'Can I use the names for social media?', answer: 'Yes, for creative personas. Ensure the name is not already in use if it matters.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Try our silly name generator for fun names or anime names for character style. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated first and second word elements at random for stage-name style.' },
  { category: 'General', question: 'Is the drag queen name generator respectful?', answer: 'The tool is designed for creative and entertainment use. Use names in a respectful context.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for creative writing or performance-related activities.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run the generator multiple times for variety.' },
];

export default async function DragQueenNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="drag-queen" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the drag queen name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
