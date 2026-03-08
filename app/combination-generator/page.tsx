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
import { cleanUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
export const revalidate = 86400;

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
        <p>A combination generator is a free online tool that lists every possible combination from a set of items—letters, numbers, words, or any list you provide. In combinations, order does not matter: {`{A, B}`} and {`{B, A}`} count as the same combination. That makes a combination generator ideal for lottery-style picks, sampling, team formation, password ideas, teaching combinatorics, and any task where you need "choose k from n" without caring about the order of selection.</p>
        <p>This combination generator runs in your browser: you enter your items (one per line or comma-separated), choose how many items per combination (e.g., all pairs, triples, or full combinations), and get the complete list. No sign-up or install is required, and your data stays on your device. Below we explain what combinations are, how the combination generator works step by step, when to use it, and how to avoid slowdowns with large sets so you get the most from the tool.</p>

        <h2>What Are Combinations? Combinations vs Permutations</h2>
        <p>A combination is a selection of items from a set where order is irrelevant. If you choose two items from A, B, and C, the only combinations are {`{A,B}`}, {`{A,C}`}, and {`{B,C}`}. The pair A,B and B,A are the same combination. That is the key difference from permutations: in a permutation generator, order matters, so AB and BA are two different permutations. Use a combination generator when you only care which items are chosen together; use a permutation generator when the sequence matters (e.g., passcodes or rankings).</p>
        <p>The number of ways to choose k items from n distinct items is given by the binomial coefficient C(n,k) = n! / (k!(n-k)!). For example, C(5,2) = 10, so 5 items taken 2 at a time yield 10 combinations. The combination generator computes this count and lists each combination so you can copy, download, or use them in Excel, teaching materials, or your own projects.</p>

        <h2>How the Combination Generator Works</h2>
        <p>Using the combination generator is straightforward. Paste or type your items into the input area—one item per line or separated by commas. The tool parses them into a set (duplicates are often removed). Then choose whether you want full combinations (every item in the set in one combination) or partial combinations of a specific size (e.g., 2 for all pairs, 3 for all triples). Click the button to generate; the output lists every possible combination in a consistent order (usually lexicographic). Copy the list or use a download option if the tool offers one. All processing runs in your browser, so nothing is sent to a server and your lists stay private.</p>
        <p>If you need combinations with repetition (the same item can appear more than once in a combination, e.g., dice rolls), that uses a different formula—n+k-1 choose k—and some tools offer it as a separate mode. Check the combination generator options for "with repetition" or "multiset" if that is what you need.</p>

        <h2>When to Use a Combination Generator</h2>
        <p><strong>Lottery-style and random picks:</strong> Generate all combinations of numbers (e.g., 1–49 choose 6) and then pick one at random, or use the list to verify coverage. A combination generator gives you the full set; you decide how to sample from it.</p>
        <p><strong>Sampling and statistics:</strong> When you need all possible samples of size k from a population of n (without replacement), combinations are exactly what you need. Teachers and students use a combination generator to list samples for exercises or simulations.</p>
        <p><strong>Team formation and groups:</strong> List people or items and generate all combinations of 2, 3, or more for team pairs, project groups, or round-robin style groupings where order within the group does not matter.</p>
        <p><strong>Password and passphrase ideas:</strong> Enter a set of words or characters and generate combinations of a chosen size. Use the list as inspiration for passphrases (combine with other security practices and avoid predictable patterns).</p>
        <p><strong>Content and brainstorming:</strong> Use words or phrases as items and generate combinations to get idea pairs or triples for headlines, product names, or tag combinations.</p>
        <p><strong>Teaching combinatorics:</strong> The combination generator illustrates C(n,k) concretely: students can see the count and the full list for small n and k, then compare with the formula.</p>

        <h2>Combination Size and Full vs Partial Combinations</h2>
        <p>A full combination uses every item in the set once; for n items there is only one full combination (the whole set). Partial combinations are subsets of a chosen size k: for example, "combinations of 2" gives all pairs, "combinations of 3" gives all triples. The combination generator usually lets you pick k or "all" for the full set. Choose a reasonable k: C(n,k) grows quickly (e.g., 20 items choose 10 is 184,756 combinations). For very large n or k, the list can be huge and may take time or hit browser limits—use smaller sets or smaller k if you need fast results.</p>

        <h2>How Many Combinations Will I Get?</h2>
        <p>The number of combinations is C(n,k) = n! / (k!(n-k)!). The tool typically shows this count before or after listing. Examples: 5 choose 2 = 10, 10 choose 3 = 120, 15 choose 5 = 3,003. If the count is in the millions, consider reducing n or k or processing in chunks. Understanding C(n,k) helps you plan set sizes and avoid timeouts.</p>

        <h2>In What Order Are Combinations Listed?</h2>
        <p>Most combination generators list combinations in lexicographic or a fixed order (e.g., 1,2 then 1,3 then 2,3). The order of listing does not change the mathematical combination; it only affects how you read the output. Within each combination, order typically does not matter—{`{A,B}`} and {`{B,A}`} are the same—so the tool may output each set in a canonical order for consistency.</p>

        <h2>Entering Items: Lines vs Commas</h2>
        <p>You can enter one item per line or separate items with commas. The combination generator parses the input into a set of distinct items. Duplicates are usually removed. Then you choose the combination size and run. For numbers, words, or mixed content, the same rules apply: each distinct item is used at most once per combination unless you enable combinations with repetition.</p>

        <h2>Copying and Downloading Combinations</h2>
        <p>Copy the full output and paste into Excel, Google Sheets, or a text file. Each combination can appear as one row or one column depending on the tool format. Some tools offer a download (e.g., CSV or TXT). For very long lists, copy in chunks if needed. The combination generator is free and runs locally, so you can use the list for analysis, teaching, or any downstream task without leaving the page.</p>

        <h2>Why Does the Combination Generator Slow Down for Large Sets?</h2>
        <p>The number of combinations grows quickly with n and k. For example, 25 items choose 12 gives over 5 million combinations. Generating and rendering a very long list can take time and memory in the browser. Use reasonable set sizes (e.g., under 20 items for large k) or smaller k (e.g., pairs or triples) to keep the combination generator responsive. If you only need a random sample of combinations rather than the full list, consider a random combination picker instead.</p>

        <h2>Combinations vs Permutations: Which Tool to Use</h2>
        <p>Use the combination generator when order does not matter (AB = BA). Use a permutation generator when order matters (AB and BA are different). For lottery numbers, teams, or "choose k from n" problems, combinations are correct. For passcodes, rankings, or arrangements where sequence matters, use permutations. Many sites offer both tools so you can pick the right one for your problem.</p>

        <h2>Privacy and Security</h2>
        <p>This combination generator runs in your browser. Your items and the generated list are not uploaded or stored on our servers. You can safely use it for private lists, student data, or sensitive items without privacy concerns.</p>

        <h2>Conclusion</h2>
        <p>Whether you need all possible combinations for lottery picks, sampling, team formation, password ideas, or teaching combinatorics, a combination generator saves time and ensures you get every combination of a chosen size. Use this free combination generator to enter your items, choose full or partial combinations, and copy or download the full list. For problems where order matters, use a permutation generator instead; for "choose k from n" without order, the combination generator is the right tool.</p>
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

  const url = cleanUrl(toolSlug);
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
  };

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What does the combination generator do?', answer: 'The combination generator lists all possible combinations of items from a set you provide. In combinations, order does not matter—so AB and BA are the same combination. You can generate full combinations (the whole set) or partial combinations of a chosen size (e.g., all pairs or triples). Enter letters, numbers, or words; the tool computes C(n,k) and outputs every combination so you can copy or download the list for lottery picks, sampling, teaching, or brainstorming.' },
    { category: 'General', question: 'Is the combination generator free?', answer: 'Yes. This combination generator is free to use. You enter your items, choose full or partial combinations and the combination size, and get the full list. Processing runs in your browser and no sign-up or install is required. Your data stays on your device and is not sent to our servers.' },
    { category: 'Technical', question: 'What is the difference between combinations and permutations?', answer: 'In combinations, order does not matter (AB = BA). In permutations, order matters (AB and BA are different). Use the combination generator when you only care which items are chosen together (e.g., lottery numbers, teams). Use the permutation generator when sequence matters (e.g., passcodes, rankings). Many sites offer both tools so you can pick the right one for your problem.' },
    { category: 'Technical', question: 'How many combinations are there?', answer: 'For n items chosen k at a time, the number of combinations is C(n,k) = n! / (k!(n-k)!). For example, 5 items taken 2 at a time give 10 combinations; 10 choose 3 gives 120. The combination generator shows this count and lists every combination. The formula helps you plan set sizes so you do not hit browser or performance limits with huge lists.' },
    { category: 'Usage', question: 'How do I use the combination generator?', answer: 'Enter your items (e.g., letters, numbers, or words) separated by line or comma. Choose full combinations (all items in each) or partial combinations of a specific size (e.g., 2 for pairs, 3 for triples). Run the tool and the output lists every possible combination. Copy the list or use a download option if available. All processing runs in your browser.' },
    { category: 'Usage', question: 'Can I generate combinations of numbers?', answer: 'Yes. Enter numbers as your items (one per line or comma-separated). The combination generator will list every combination of the chosen size. This is useful for lottery-style picks, sampling exercises, or math and combinatorics problems. You get the full set of combinations; you can then pick one at random or use the list as needed.' },
    { category: 'Formatting', question: 'In what order are combinations listed?', answer: 'Most combination generators list combinations in lexicographic or a fixed order (e.g., 1,2 then 1,3 then 2,3). Order within each set does not change the combination—only which items are included matters. The tool outputs in a consistent order so you can copy to Excel or use the list predictably.' },
    { category: 'Use cases', question: 'What are combinations used for?', answer: 'Combinations are used for sampling, lottery picks, team formation, feature selection, password ideas (when order does not matter), and any case where you need choose k from n “choose k from n” without caring about order. Teachers use a combination generator for combinatorics; analysts use it for subset enumeration.' },
    { category: 'Limits', question: 'Why does the combination generator slow down for large sets?', answer: 'The number of combinations grows quickly (e.g., 20 items choose 10 ≈ 184,756). Very large n or k can produce millions of combinations and may take time or hit browser limits. Use reasonable set sizes.' },
    { category: 'Technical', question: 'Does the tool allow repeated items?', answer: 'Standard combinations use each item at most once per combination. If you need combinations with repetition (e.g., dice rolls or multisets), that uses a different formula (n+k-1 choose k) and some tools offer it as a separate mode. Check the combination generator options for "with repetition" or "multiset" if that is what you need.' },
    { category: 'General', question: 'Can I generate combinations of words?', answer: 'Yes. Enter words as your items (one per line or comma-separated). The combination generator will list every combination of the chosen size. Useful for brainstorming, content ideas, tag combinations, or passphrase inspiration. Each word is treated as one item and used at most once per combination unless you enable repetition.' },
    { category: 'Workflow', question: 'Can I copy combinations to Excel?', answer: 'Yes. Copy the output from the combination generator and paste into Excel or Google Sheets. Each combination can be one row or one column depending on how the tool formats the output. For very long lists, you may need to copy in chunks. The list is plain text so you can also paste into a CSV or text file.' },
    { category: 'Privacy', question: 'Is my input sent to a server?', answer: 'No. The combination generator runs in your browser. Your items and the generated list are not uploaded or stored on our servers. You can safely use it for private lists, student data, or sensitive items without privacy concerns.' },
    { category: 'Use cases', question: 'How do I use combinations for passwords?', answer: 'Enter a set of words or characters as items, choose how many per combination, and generate. Use the list as inspiration for passphrases or password ideas. For real security, combine with other methods (length, randomness, unique characters) and avoid predictable patterns. The combination generator gives you the full set; how you select and use combinations is up to you.' },
    { category: 'Technical', question: 'What is a full combination?', answer: 'A full combination uses every item in the set once. For n items there is only one full combination (the whole set). “Partial” combinations are subsets of a chosen size (e.g., all pairs when k=2, all triples when k=3). The combination generator usually lets you choose full or partial and set k.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The combination generator runs in your browser. No download or account is required. Enter your items, choose full or partial combinations and size, run the tool, and copy or download the list. It works on desktop and mobile.' },
    { category: 'Limits', question: 'Is there a maximum number of items?', answer: 'Very large sets (e.g., 30+ items) can produce huge combination counts and may be slow or hit browser limits. For teaching or small lists, the tool handles typical use. Reduce set size or choose smaller k if you need fast results. Understanding C(n,k) helps you plan so the combination generator stays responsive.' },
    { category: 'Formatting', question: 'How do I enter items?', answer: 'Enter one item per line or separate items with commas. The combination generator parses them into a set; duplicates may be removed. Then choose combination size (full or k) and run. You can use letters, numbers, words, or mixed content—each distinct item is used at most once per combination unless you enable repetition.' },
    { category: 'Use cases', question: 'Can I use it for lottery or random picks?', answer: 'You can generate all combinations with the combination generator and then pick one at random yourself, or use a dedicated random picker. The combination generator gives the full list; how you use it (e.g., random choice, filtering) is up to you. For lottery-style numbers, enter the number range as items and generate combinations of the draw size.' },
    { category: 'Technical', question: 'What is C(n,k)?', answer: 'C(n,k) is the binomial coefficient: the number of ways to choose k items from n without regard to order. Formula: C(n,k) = n! / (k!(n-k)!). The combination generator computes this count and lists each combination. It is the standard notation in combinatorics and matches what the tool outputs.' },
    { category: 'Workflow', question: 'Can I get combinations as a download?', answer: 'Some combination generator tools offer a download (e.g., CSV or TXT). If not, copy the output and paste into a file. For very long lists, copying in chunks may be needed. The list is plain text so you can save it anywhere and use it in Excel, scripts, or teaching materials.' },
    { category: 'General', question: 'Is this the same as permutation generator?', answer: 'No. Combination generator: order does not matter, so AB = BA. Permutation generator: order matters, so AB and BA are different. Use the combination generator when you only care which items are chosen (e.g., teams, lottery numbers). Use the permutation generator when sequence matters (e.g., passcodes, rankings).' },
  ];

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
