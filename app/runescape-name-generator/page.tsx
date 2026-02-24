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

const toolSlug = 'runescape-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'RuneScape Name Generator',
    description: 'Generate RuneScape and OSRS-style usernames and character names.',
    seoTitle: 'RuneScape Name Generator - OSRS Usernames',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a RuneScape Name Generator?</h2>
        <p>A RuneScape name generator (or OSRS name generator) creates usernames and character names for RuneScape and Old School RuneScape. Use it for one-word or multi-word name ideas. This free tool runs in your browser. For other gaming names try our <Link href="/steam-name-generator">Steam name generator</Link> or <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a RuneScape name generator?', answer: 'A RuneScape name generator is an online tool that creates usernames and character names for RuneScape and OSRS. You get game-style name ideas.' },
  { category: 'Usage', question: 'How do I use the RuneScape name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'What is an OSRS name generator?', answer: 'It is the same as a RuneScape name generator: it produces names for RuneScape and Old School RuneScape.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use the names for RuneScape?', answer: 'Yes. Check RuneScape/OSRS for availability; usernames must be unique.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have Steam, Elden Ring, Fallout, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I get one-word names?', answer: 'The generator can produce one-word or multi-word names. Run it and pick what fits.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why "OSRS" in the title?', answer: 'Many players search for OSRS username ideas. This page serves both RuneScape and OSRS intents.' },
  { category: 'Use cases', question: 'Can I use it for other games?', answer: 'Yes. The names work as ideas for any gaming platform; check each platform\'s availability.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Try Steam or Elden Ring for other gaming styles. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated RuneScape/OSRS-style elements at random.' },
  { category: 'General', question: 'Are the names unique?', answer: 'They are randomly combined. Check the game to see if a name is available.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for creative or tech-related activities.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run the generator multiple times for variety.' },
];

export default async function RunescapeNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="runescape" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the RuneScape name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
