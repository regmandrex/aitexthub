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

const toolSlug = 'wrestling-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Wrestling Name Generator',
    description: 'Generate cool wrestling and professional wrestler names for characters and roleplay.',
    seoTitle: 'Wrestling Name Generator - Cool Wrestler Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Wrestling Name Generator?</h2>
        <p>A wrestling name generator (or cool wrestling names generator) creates wrestler-style ring names for characters and roleplay. You get bold, memorable names at the click of a button. This free tool runs in your browser. For other character names try our <Link href="/drag-queen-name-generator">drag queen name generator</Link>, <Link href="/stripper-name-generator">stripper name generator</Link> (stage names), or <Link href="/anime-names-generator">anime names generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a wrestling name generator?', answer: 'A wrestling name generator is an online tool that creates wrestler-style ring names for characters and roleplay. You get cool, memorable names in the style of professional wrestling.' },
  { category: 'Usage', question: 'How do I use the wrestling name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'What is a cool wrestling names generator?', answer: 'It is the same as a wrestling name generator: it produces cool, wrestler-style names for characters and roleplay.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use it for roleplay?', answer: 'Yes. The generator is for characters, roleplay, and creative projects.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have drag queen, stripper/stage name, anime names, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use it for a ring name?', answer: 'Yes, for inspiration. Pick one you like and make it yours.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why "professional wrestler name generator"?', answer: 'That phrase matches how people search for wrestler-style names. This page serves that intent.' },
  { category: 'Use cases', question: 'Can I use the names for tabletop RPGs?', answer: 'Yes.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use drag queen or stripper name generator for other stage-name styles. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated wrestling-style first and second elements at random.' },
  { category: 'General', question: 'Are these real wrestler names?', answer: 'They are algorithm-generated. Some may resemble existing names; use for inspiration only.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for creative writing or character creation.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run the generator multiple times for variety.' },
];

export default async function WrestlingNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="wrestling" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the wrestling name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
