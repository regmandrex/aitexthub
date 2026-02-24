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

const toolSlug = 'bracket-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Bracket Name Generator',
    description: 'Generate bracket and tournament team names for events and competitions.',
    seoTitle: 'Bracket Name Generator - Tournament Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Bracket Name Generator?</h2>
        <p>A bracket name generator creates team names for tournaments, brackets, and events. Use it for sports, esports, or office competitions. This free tool runs in your browser. For team names in a different style try our <Link href="/tribe-name-generator">tribe name generator</Link> or <Link href="/island-name-generator">island name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a bracket name generator?', answer: 'A bracket name generator is an online tool that creates team names for tournaments, brackets, and competitions. You get names like "Thunder Squad" or "Elite Force."' },
  { category: 'Usage', question: 'How do I use the bracket name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use it for tournaments?', answer: 'Yes. The generator is for tournament and event team naming.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have tribe, island, species, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use it for esports?', answer: 'Yes.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why "bracket" names?', answer: 'Brackets often need team names for each slot. The generator provides ideas for those teams.' },
  { category: 'Use cases', question: 'Can I use it for office events?', answer: 'Yes. Great for office competitions and team naming.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use tribe name generator for Survivor-style or island for themed events. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated team-style first and second elements at random.' },
  { category: 'General', question: 'Is it good for sports?', answer: 'Yes. Use for fantasy leagues, tournaments, or team naming.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for class competitions or team activities.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific theme?', answer: 'Run the generator multiple times for variety.' },
];

export default async function BracketNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="bracket" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the bracket name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
