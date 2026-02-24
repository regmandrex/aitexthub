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

const toolSlug = 'shopify-store-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Shopify Store Name Generator',
    description: 'Generate business and store name ideas for Shopify and e-commerce.',
    seoTitle: 'Shopify Store Name Generator - Business Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Shopify Store Name Generator?</h2>
        <p>A Shopify business name generator (or shopify store name generator) creates store and business name ideas for Shopify and e-commerce. Use it when you need a memorable name for your store. This free tool runs in your browser. For other naming try our <Link href="/bracket-name-generator">bracket name generator</Link> (teams/events) or <Link href="/tribe-name-generator">tribe name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Shopify store name generator?', answer: 'A Shopify store name generator is an online tool that creates business and store name ideas for Shopify and e-commerce. You get memorable name options for your store.' },
  { category: 'Usage', question: 'How do I use the Shopify store name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'What is a Shopify business name generator?', answer: 'It is the same as a Shopify store name generator: it produces business/store name ideas for Shopify.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use the names for my Shopify store?', answer: 'Yes. Check Shopify and trademark databases to ensure the name is available.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have bracket, tribe, island, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use the names for other platforms?', answer: 'Yes. The names work as ideas for any e-commerce or business; check availability per platform.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why "Shopify" specifically?', answer: 'Many people search for Shopify store name ideas. The generator serves that intent and works for any e-commerce name need.' },
  { category: 'Use cases', question: 'Can I use it for a brand name?', answer: 'Yes. Use as inspiration; then verify domain and trademark availability.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Try bracket or tribe for team/event names. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated business/store-style first and second elements at random.' },
  { category: 'General', question: 'Are the names trademark-free?', answer: 'They are algorithm-generated. You must check trademark and domain availability yourself.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for business or marketing exercises.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific niche?', answer: 'Run the generator multiple times for variety, or combine with your niche keyword manually.' },
];

export default async function ShopifyStoreNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="shopify" resultLabel="Generated store names" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Shopify store name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
