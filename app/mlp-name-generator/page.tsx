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

const toolSlug = 'mlp-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'MLP Name Generator',
    description: 'Generate My Little Pony-style names for characters and creative projects.',
    seoTitle: 'MLP Name Generator - My Little Pony Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is an MLP Name Generator?</h2>
        <p>An MLP name gen (or MLP name generator) creates My Little Pony–style names for characters and creative projects. Use it for fan works, roleplay, or fun. This free tool runs in your browser. For other fandom names try our <Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/anime-names-generator">anime names generator</Link>, or <Link href="/transformers-name-generator">Transformers name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an MLP name generator?', answer: 'An MLP name generator is an online tool that creates My Little Pony–style names for characters and creative projects. You get cute, pony-style names.' },
  { category: 'Usage', question: 'How do I use the MLP name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'What is "mlp name gen"?', answer: 'It is a short way to say "MLP name generator"—the same tool for My Little Pony–style names.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use it for fan fiction?', answer: 'Yes. The generator is for fan works and creative projects.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have Naruto, anime, Transformers, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use it for roleplay?', answer: 'Yes.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why MLP style?', answer: 'My Little Pony has a distinct naming style (e.g., Twilight Sparkle). The generator mimics that for fan creations.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes, for creative projects.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use anime or Naruto for other character styles. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated MLP-style first and second elements at random.' },
  { category: 'General', question: 'Are these official MLP names?', answer: 'They are inspired by the series. Use for creative work only.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for creative writing.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run the generator multiple times for variety.' },
];

export default async function MLPNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="mlp" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the MLP name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
