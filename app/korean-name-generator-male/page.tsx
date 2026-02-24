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

const toolSlug = 'korean-name-generator-male';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Korean Name Generator (Male)',
    description: 'Generate Korean male names for characters, stories, and creative projects.',
    seoTitle: 'Korean Name Generator Male - Korean Male Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Korean Name Generator (Male)?</h2>
        <p>A korean name generator male creates Korean male names for characters, stories, and creative projects. You get family name + given name in Korean order (e.g., Kim Min-ho). This free tool runs in your browser. For nicknames try our <Link href="/korean-nickname-generator">Korean nickname generator</Link>. For other naming see <Link href="/muslim-name-generator">Muslim name generator</Link>, <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, and our <Link href="/">homepage</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Korean name generator male?', answer: 'A Korean name generator male is an online tool that creates Korean male names for characters, stories, and creative projects. You get names in Korean order (family + given name).' },
  { category: 'Usage', question: 'How do I use the Korean name generator male?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use it for fiction?', answer: 'Yes. The generator is for characters and creative projects.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'How is this different from the Korean nickname generator?', answer: 'The Korean nickname generator focuses on nicknames (e.g., cute, cool). This tool generates full male names (family + given) in Korean style.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes, for fiction and creative projects. Verify with sources if you need cultural accuracy.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have Muslim, ancient Greek, anime names, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why male only?', answer: 'People often search specifically for "Korean name generator male." This page serves that intent. For nicknames (any gender) see our Korean nickname generator.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes, for creative projects.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use Muslim or ancient Greek for other culture names. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated Korean family names and given names (male) at random in Korean order.' },
  { category: 'General', question: 'Are these real Korean names?', answer: 'They use common Korean family and given name elements. Use for creative work; verify with references for accuracy.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for creative writing or culture-related activities.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need female names?', answer: 'This generator is male-focused. For nicknames (any gender) try our Korean nickname generator.' },
];

export default async function KoreanNameGeneratorMalePage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="korean-male" resultLabel="Generated Korean male names" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Korean name generator (male).</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
