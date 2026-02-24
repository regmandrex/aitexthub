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

const toolSlug = 'royal-surname-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Royal Surname Generator',
    description: 'Generate royal last names and noble surnames for fiction and creative writing.',
    seoTitle: 'Royal Surname Generator - Royal Last Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Royal Surname Generator?</h2>
        <p>A royal surname generator (or royal last name generator) creates noble and royal-style last names for fiction and creative writing. Use it for characters, worldbuilding, and games. This free tool runs in your browser. For first names try our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link> or <Link href="/god-goddess-name-generator">god and goddess name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a royal surname generator?', answer: 'A royal surname generator is an online tool that creates royal and noble-style last names for fiction and creative writing. You get names like "von Habsburg" or "House of Windsor."' },
  { category: 'Usage', question: 'How do I use the royal surname generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'What is a royal last name generator?', answer: 'It is the same as a royal surname generator: it produces royal- and noble-style last names.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use it for fiction?', answer: 'Yes. The generator is for fiction, worldbuilding, and creative projects.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'Are these real royal names?', answer: 'They are inspired by historical noble and royal naming. Use for creative work; verify with sources for accuracy.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes, for fiction and creative projects.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have ancient Greek, god and goddess, anime names, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs use it for noble characters.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why "royal surnames" vs "royal last names"?', answer: 'Both phrases refer to the same thing. This page serves both search intents.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes, for creative projects.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use ancient Greek or god and goddess for first names. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated noble/royal-style prefixes and family names at random.' },
  { category: 'General', question: 'Is it good for historical fiction?', answer: 'Yes, as a starting point. Verify with references for strict accuracy.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for creative writing or history-related activities.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run the generator multiple times for variety.' },
];

export default async function RoyalSurnameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="royal" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the royal surname generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
