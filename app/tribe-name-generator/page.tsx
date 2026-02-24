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

const toolSlug = 'tribe-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Tribe Name Generator',
    description: 'Generate tribe and team names for Survivor-style games, events, and worldbuilding.',
    seoTitle: 'Tribe Name Generator - Survivor & Team Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Tribe Name Generator?</h2>
        <p>A tribe name generator (or survivor tribe name generator) creates team and tribe names for Survivor-style games, events, and worldbuilding. You get bold, animal- or nature-themed names at the click of a button. This free tool runs in your browser. For other naming tools try our <Link href="/bracket-name-generator">bracket name generator</Link>, <Link href="/island-name-generator">island name generator</Link>, or <Link href="/species-name-generator">species name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a tribe name generator?', answer: 'A tribe name generator is an online tool that creates team and tribe names for Survivor-style games, events, and worldbuilding. You get names like "Thunder Tribe" or "Flame Alliance."' },
  { category: 'Usage', question: 'How do I use the tribe name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'What is a survivor tribe name generator?', answer: 'It is the same as a tribe name generator: it creates names for tribes or teams, often used in Survivor-style games and events.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use it for Survivor games?', answer: 'Yes. Many people use it to name tribes for Survivor parties or events.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have bracket, island, species, god and goddess, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs use it for clan or tribe names.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why "survivor tribe name generator"?', answer: 'That phrase matches how people search for tribe/team names for Survivor-style events. This page serves that intent.' },
  { category: 'Use cases', question: 'Can I use the names for events?', answer: 'Yes, for parties, events, and team naming.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use bracket name generator for tournaments and island name generator for locations. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated animal- and nature-style word elements at random.' },
  { category: 'General', question: 'Is it good for worldbuilding?', answer: 'Yes. Writers and game designers use it for tribes and clans.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for team activities or creative writing.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific theme?', answer: 'Run the generator multiple times for variety.' },
];

export default async function TribeNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="tribe" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the tribe name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
