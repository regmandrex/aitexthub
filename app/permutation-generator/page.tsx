import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { PermutationGeneratorTool } from '@/components/tools/PermutationGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'permutation-generator';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'General' },
  { key: 'faq4', category: 'Technical' },
  { key: 'faq5', category: 'General' },
  { key: 'faq6', category: 'General' },
  { key: 'faq7', category: 'Input' },
  { key: 'faq8', category: 'Input' },
  { key: 'faq9', category: 'Input' },
  { key: 'faq10', category: 'Input' },
  { key: 'faq11', category: 'Output' },
  { key: 'faq12', category: 'Output' },
  { key: 'faq13', category: 'Output' },
  { key: 'faq14', category: 'Output' },
  { key: 'faq15', category: 'Output' },
  { key: 'faq16', category: 'Output' },
  { key: 'faq17', category: 'Input' },
  { key: 'faq18', category: 'Input' },
  { key: 'faq19', category: 'Technical' },
  { key: 'faq20', category: 'Usage' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Security' },
  { key: 'faq23', category: 'General' },
  { key: 'faq24', category: 'Input' },
  { key: 'faq25', category: 'Technical' },
  { key: 'faq26', category: 'Privacy' },
  { key: 'faq27', category: 'Technical' },
  { key: 'faq28', category: 'Technical' },
  { key: 'faq29', category: 'Technical' },
  { key: 'faq30', category: 'Technical' },
  { key: 'faq31', category: 'Output' },
  { key: 'faq32', category: 'Input' },
  { key: 'faq33', category: 'Technical' },
  { key: 'faq34', category: 'Technical' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Permutation Generator: All Possible Orderings</h2>
        <p>This free tool generates all possible permutations (orderings) of a set of items. In permutations, order matters—so ABC and BAC are different. Full permutations use every item once; partial permutations use a subset.</p>

        <h2>What Are Permutations?</h2>
        <p>A permutation is an arrangement of items in a specific order. The number of permutations of n items is n! (n factorial). For k items chosen from n, the count is P(n,k) = n! / (n-k)!.</p>

        <h2>How It Works</h2>
        <p>Enter your items and choose full or partial permutations (and how many per permutation if partial). The tool lists every ordering. Processing runs in your browser.</p>

        <h2>Use Cases</h2>
        <p>Use it for password ideas, anagram-style orderings, scheduling, teaching combinatorics, or any task where order matters.</p>

        <h2>Limitations</h2>
        <p>Large sets produce many permutations (e.g., 10 items = 3,628,800 full permutations). Use reasonable set sizes to avoid timeouts.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Permutation Generator";
  const description = "Generate all possible permutations where order matters. Create ordered arrangements of items.";
  const seoTitle = "Permutation Generator - All Possible Permutations Tool";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}


export default async function PermutationGeneratorPage() {
  
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

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<PermutationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the Permutation Generator.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
