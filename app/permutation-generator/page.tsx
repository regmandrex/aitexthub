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
import { siteUrl } from '@/lib/seo/url';
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
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Permutation Generator: Every Potential Sequence</h2>
        <p>This complimentary utility builds every possible permutation (arrangement) of an element set. In permutations, sequence is vital—meaning ABC and BAC are distinct. Full permutations utilize every element once; partial permutations use a smaller subset.</p>

        <h2>What Are Permutations?</h2>
        <p>A permutation is an arrangement of items in a precise sequence. The quantity of permutations for n items equals n! (n factorial). For k items chosen from n, the total is P(n,k) = n! / (n-k)!. शशि</p>

        <h2>How It Works</h2>
        <p>Type your items and select full or partial permutations (plus how many per permutation if partial). The utility outputs every ordering. Calculation happens directly in your browser.</p>

        <h2>Use Cases</h2>
        <p>Apply it for password brainstorming, anagram-style sequences, scheduling, teaching combinatorics, or any scenario where sequence is important.</p>

        <h2>Limitations</h2>
        <p>Massive sets generate numerous permutations (for instance, 10 items = 3,628,800 full permutations). Stick to reasonable set dimensions to prevent execution timeouts.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Permutation Generator";
  const description = "Produce all possible permutations where order matters. Create ordered arrangements of items.";
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

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
  };
  const __rating = { offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a permutation generator?', answer: 'A Permutation Generator outlines every potential sequence of a collection of items. Sequence matters—meaning ABC and BAC count as separate permutations. This utility can produce full permutations (every item used once) or partial permutations (a subset inside each arrangement).' },
    { category: 'Usage', question: 'How can someone operate the Permutation Generator?', answer: 'Input your elements (such as characters, numerals, or words) separated by a new line or comma. Pick full permutations for all sequences, or partial permutations and define how many items per result. Select generate to retrieve the list. Execution runs inside your browser.' },
    { category: 'Technical', question: 'Why does the utility slow down or freeze with massive sets?', answer: 'The quantity of permutations expands factorially (for example, 10 items = 3,628,800 full permutations). Extremely large sets can require significant time or breach browser thresholds. Use smaller sets or partial permutations with restricted limits for the best performance.' },
    { category: 'General', question: 'How do permutations and combinations differ from each other?', answer: 'In permutations, sequence is important (ABC ? BAC). In combinations, sequence is irrelevant—only which elements are chosen matters. This utility produces permutations. For combinations (where sequence does not matter), use a combination generator instead.' },
    { category: 'Use cases', question: 'What tasks can I tackle using permutations?', answer: 'Typical applications encompass testing password or PIN sequences, anagram-style permutations, planning sequences, instructing combinatorics, and any scenario where item order is significant.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<PermutationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent questions and answers regarding the Permutation Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

