import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { CombinationGeneratorTool } from '@/components/tools/CombinationGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'combination-generator';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'General' },
  { key: 'faq4', category: 'Technical' },
  { key: 'faq5', category: 'Input' },
  { key: 'faq6', category: 'Input' },
  { key: 'faq7', category: 'Input' },
  { key: 'faq8', category: 'Output' },
  { key: 'faq9', category: 'Output' },
  { key: 'faq10', category: 'Output' },
  { key: 'faq11', category: 'Output' },
  { key: 'faq12', category: 'Output' },
  { key: 'faq13', category: 'Output' },
  { key: 'faq14', category: 'Output' },
  { key: 'faq15', category: 'Input' },
  { key: 'faq16', category: 'Input' },
  { key: 'faq17', category: 'Technical' },
  { key: 'faq18', category: 'Usage' },
  { key: 'faq19', category: 'Usage' },
  { key: 'faq20', category: 'Usage' },
  { key: 'faq21', category: 'General' },
  { key: 'faq22', category: 'Input' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Privacy' },
  { key: 'faq25', category: 'Technical' },
  { key: 'faq26', category: 'Technical' },
  { key: 'faq27', category: 'Technical' },
  { key: 'faq28', category: 'Technical' },
  { key: 'faq29', category: 'Output' },
  { key: 'faq30', category: 'Input' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Combination Generator: All Possible Combinations Tool</h2>
        <p>This free tool generates all possible combinations from a set of items. In combinations, order does not matter—so {`{A, B}`} and {`{B, A}`} are the same combination.</p>

        <h2>What Are Combinations?</h2>
        <p>A combination is a selection of items from a set where order is irrelevant. The number of ways to choose k items from n is given by the binomial coefficient C(n,k) = n! / (k!(n-k)!).</p>

        <h2>How It Works</h2>
        <p>Enter your items (e.g., letters, numbers, or words) and choose how many items per combination. The tool lists every possible combination. Processing runs in your browser.</p>

        <h2>Use Cases</h2>
        <p>Use it for lottery-style picks, sampling, password ideas, teaching combinatorics, or any task where you need all unordered subsets of a given size.</p>

        <h2>Limitations</h2>
        <p>Large sets produce many combinations. Use reasonable set sizes and subset sizes to avoid timeouts or huge output.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Combination Generator";
  const description = "Generate all possible combinations from a set of items. Order does not matter in combinations.";
  const seoTitle = "Combination Generator - All Possible Combinations Tool";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}


export default async function CombinationGeneratorPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<CombinationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the Combination Generator.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
