import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { LineCombinationGeneratorTool } from '@/components/tools/LineCombinationGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
export const revalidate = 86400;

const toolSlug = 'line-combination-generator';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Usage' },
  { key: 'faq4', category: 'Input' },
  { key: 'faq5', category: 'Output' },
  { key: 'faq6', category: 'Input' },
  { key: 'faq7', category: 'Input' },
  { key: 'faq8', category: 'Output' },
  { key: 'faq9', category: 'Output' },
  { key: 'faq10', category: 'Output' },
  { key: 'faq11', category: 'Output' },
  { key: 'faq12', category: 'Output' },
  { key: 'faq13', category: 'Output' },
  { key: 'faq14', category: 'Input' },
  { key: 'faq15', category: 'Input' },
  { key: 'faq16', category: 'Usage' },
  { key: 'faq17', category: 'Usage' },
  { key: 'faq18', category: 'Output' },
  { key: 'faq19', category: 'Input' },
  { key: 'faq20', category: 'General' },
  { key: 'faq21', category: 'Privacy' },
  { key: 'faq22', category: 'Technical' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Technical' },
  { key: 'faq25', category: 'Output' },
  { key: 'faq26', category: 'Output' },
  { key: 'faq27', category: 'Output' },
  { key: 'faq28', category: 'Input' },
  { key: 'faq29', category: 'Output' },
  { key: 'faq30', category: 'Technical' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Line Combination Generator: Combine Lines From Text</h2>
        <p>A line combination generator is a free online tool that takes a list of lines (one item per line) and produces all possible combinations of a chosen size—for example, every pair of lines, every set of three lines, or any subset size you specify. In standard combinations, order does not matter: the same set of lines in any order counts as one combination. That makes a line combination generator ideal for content mixes, headline testing, A/B copy variants, tag or category pairs, recipe or ingredient combinations, and teaching combinatorics with real text.</p>
        <p>This line combination generator runs in your browser: you paste or enter your lines, choose how many lines per combination (e.g., 2 for pairs, 3 for triples), and get the full list. No sign-up or install is required, and your text stays on your device. Below we explain what line combinations are, how to use the tool step by step, when to use it for content and testing, and how to avoid slowdowns with large lists so you get the most from the tool.</p>

        <h2>What Are Line Combinations?</h2>
        <p>A line combination is a subset of lines from your list. For example, if your lines are A, B, and C, the combinations of size 2 are {`{A,B}`}, {`{A,C}`}, and {`{B,C}`}. The order of lines within a combination typically does not matter—{`{A,B}`} and {`{B,A}`} are the same combination. The line combination generator lists each combination once in a consistent order (e.g., lexicographic) so you can copy the output to Excel, use it for testing, or explore content mixes. The number of combinations is C(n,k) = n! / (k!(n-k)!): for n lines and combination size k, you get that many distinct subsets.</p>

        <h2>How the Line Combination Generator Works</h2>
        <p>Paste or enter your lines into the input area—one item per line. Each line can be a word, phrase, sentence, headline, or any text. The tool parses them into a list (some tools remove duplicate lines; check the options if duplicates matter). Choose the combination size: 2 for all pairs, 3 for all triples, or another number. Run the tool; the output lists every combination. Copy the result or use a download option if available. Processing runs in your browser, so nothing is sent to a server and your lines stay private. For very long lists, the number of combinations grows quickly (e.g., 15 lines choose 5 is 3,003), so use reasonable list sizes to keep the tool responsive.</p>

        <h2>When to Use a Line Combination Generator</h2>
        <p><strong>Content and headline testing:</strong> Put each headline or copy variant on its own line. Generate combinations of 2 or more to get pairs or sets for A/B testing or content mixes. Copy the output into your testing tool or spreadsheet.</p>
        <p><strong>Tag and category combinations:</strong> List tags or categories (one per line) and generate all pairs or triples. Useful for SEO, taxonomy, or exploring which tags to combine on a page.</p>
        <p><strong>Recipe and ingredient combinations:</strong> Put each ingredient or step on a line. Generate combinations of a chosen size to get ingredient sets or step combinations for meal planning or variant ideas.</p>
        <p><strong>Test data and sampling:</strong> Use lines as test inputs or options. The line combination generator gives you every subset of a given size for systematic testing or sampling exercises.</p>
        <p><strong>Teaching combinatorics:</strong> Students can see C(n,k) in action with real text. Enter a short list of lines, choose k, and the tool lists every combination—useful for understanding combinations vs permutations and the binomial coefficient.</p>

        <h2>Line Combinations vs Permutations of Lines</h2>
        <p>In line combinations, order does not matter: line A then B is the same as B then A. In permutations of lines, order matters (A then B is different from B then A). Use the line combination generator when you only care which lines are chosen together (e.g., which headlines to test together, which tags to combine). Use a permutation generator when the sequence of lines matters (e.g., order of steps or sentences). Many sites offer both tools.</p>

        <h2>How Many Combinations Will I Get?</h2>
        <p>For n lines and combination size k, you get C(n,k) = n! / (k!(n-k)!) combinations. The tool usually shows the count and lists them all. Examples: 10 lines choose 2 = 45 pairs; 15 lines choose 5 = 3,003. If the count is large, consider a smaller list or smaller k to avoid slow output or browser limits.</p>

        <h2>Input Format: One Item Per Line</h2>
        <p>Typically each line in the input is one item. Paste from a spreadsheet (one column or one row per line) or type lines directly. Some tools also allow comma-separated items. Check the input instructions. Duplicate lines may be removed by the tool; if duplicates matter for your use case, check the tool behavior or use a list with unique lines.</p>

        <h2>Output Format and Copying to Excel</h2>
        <p>Output is usually one combination per line or block, with lines in each combination separated by a space, comma, or newline. Copy the output and paste into Excel, Google Sheets, or a text file. Each combination can be one row or one column depending on how the tool formats the result. For very long lists, copy in chunks if needed.</p>

        <h2>Why Does It Slow Down for Many Lines?</h2>
        <p>The number of combinations grows quickly with the number of lines and the combination size. For example, 20 lines choose 10 gives over 184,000 combinations. Generating and rendering a very long list can take time and memory. Use a reasonable number of lines or smaller combination size (e.g., pairs or triples) to keep the line combination generator responsive.</p>

        <h2>Privacy and Security</h2>
        <p>This line combination generator runs in your browser. Your lines and the generated list are not uploaded or stored on our servers. You can safely use it for confidential copy, client headlines, or any private list without privacy concerns.</p>

        <h2>Conclusion</h2>
        <p>Whether you need all pairs of lines for headline testing, tag combinations for SEO, ingredient sets for meal planning, or teaching combinatorics with text, a line combination generator saves time and lists every combination of a chosen size. Use this free line combination generator to paste your lines, choose the combination size, and copy or download the result. For problems where the order of lines matters, use a permutation generator; for choose k lines from n without order, the line combination generator is the right tool.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Line Combination Generator";
  const description = "Generate all possible combinations of lines from your text. Preserves line breaks in output.";
  const seoTitle = "Line Combination Generator - Text Line Combinations Tool";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}


export default async function LineCombinationGeneratorPage() {
  
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

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What does the line combination generator do?', answer: 'The line combination generator takes a list of lines (or items) and produces all possible combinations of a chosen size. Order does not matter—each combination is a set of lines. Useful for content mixes, sampling, or brainstorming from line-based lists.' },
    { category: 'General', question: 'Is the line combination generator free?', answer: 'Yes. This line combination generator is free to use. Paste or enter your lines, choose how many lines per combination, and get the full list. Processing runs in your browser and no sign-up or install is required. Your lines and the generated list are not uploaded or stored on our servers.' },
    { category: 'Technical', question: 'What is a line combination?', answer: 'A line combination is a subset of lines from your list. For example, with lines A, B, C, the combinations of size 2 are {A,B}, {A,C}, {B,C}. Order of lines within a combination typically does not matter—{A,B} and {B,A} are the same. The line combination generator lists each combination once in a consistent order (e.g., lexicographic). The count is C(n,k) = n! / (k!(n-k)!).' },
    { category: 'Usage', question: 'How do I use the line combination generator?', answer: 'Enter or paste your lines into the input area—one item per line. Choose the combination size (e.g., 2 for pairs, 3 for triples). Run the tool and the output lists every combination. Copy the result or use a download option if available. All processing runs in your browser. For very long lists, use a reasonable number of lines or smaller combination size to keep the tool responsive.' },
    { category: 'Usage', question: 'Can I paste from a spreadsheet?', answer: 'Yes. If each row is a line, paste the column or rows into the line combination generator. Each line becomes one item. Generate combinations and paste the result back into a sheet if needed. You can also paste from a text file or type lines directly. The tool parses one item per line by default; check the input instructions if you use comma separation.' },
    { category: 'Formatting', question: 'How are lines separated in the input?', answer: 'Typically one item per line: each new line is a new item. Paste from a spreadsheet (one column or row per line) or type lines directly. Some tools also allow comma-separated items. Check the input instructions. Duplicate lines may be removed by the tool; if duplicates matter, check the tool behavior.' },
    { category: 'Use cases', question: 'What are line combinations used for?', answer: 'Use them for content mixes (e.g., combining headlines with body options), sampling from lists, generating tag or category combinations, headline testing, recipe or ingredient sets, brainstorming, or any task where you need choose k lines from n “choose k lines from n” without order mattering.' },
    { category: 'Technical', question: 'What is the difference from a regular combination generator?', answer: 'A line combination generator works on lines (text rows) as items—each line is one element. A general combination generator often accepts comma- or line-separated items. Functionally they are the same: both list combinations of a chosen size where order does not matter. Use the line combination generator when your data is naturally line-based (headlines, tags, sentences); use a general combination generator for mixed or comma-separated lists.' },
    { category: 'Limits', question: 'Why does it slow down for many lines?', answer: 'The number of combinations grows quickly (e.g., 15 lines choose 5 ≈ 3,003). Very large line counts can produce huge lists. Use a reasonable number of lines or smaller combination size if you hit limits.' },
    { category: 'Privacy', question: 'Is my list sent to a server?', answer: 'No. The line combination generator runs in your browser. Your lines and the generated list are not uploaded or stored on our servers. You can safely use it for confidential copy, client headlines, or any private list without privacy concerns.' },
    { category: 'General', question: 'Can I generate combinations of sentences?', answer: 'Yes. Treat each sentence as a line. Paste them in, choose combination size, and the line combination generator lists every combination. Useful for A/B copy, content variants, or exploring which sentences to combine. Copy the output for use in your editor or testing tool.' },
    { category: 'Workflow', question: 'Can I use it for headline testing?', answer: 'Yes. Put each headline (or variant) on its own line. Generate combinations of 2 or more to get pairs or sets for testing. Copy the output for use in your testing tool or spreadsheet. The line combination generator gives you every subset of a chosen size so you can systematically test headline combinations or content mixes.' },
    { category: 'Technical', question: 'Does order of lines in a combination matter?', answer: 'In standard combinations, order does not matter—{A,B} and {B,A} are the same. The line combination generator may output each combination in a fixed order (e.g., lexicographic) for consistency. Only which lines are chosen together matters; the sequence within a combination does not. For problems where order matters, use a permutation generator instead.' },
    { category: 'Use cases', question: 'How do I get all pairs of lines?', answer: 'Enter your lines, set combination size to 2, and run. The tool lists every pair. Useful for comparing or mixing two options from a list.' },
    { category: 'Formatting', question: 'How is the output formatted?', answer: 'Output is typically one combination per line or block, with lines in each combination separated by a space, comma, or newline. Copy the output and paste into Excel, Google Sheets, or a text file. Each combination can be one row or one column depending on the tool format. Check the tool display to copy in the format you need; for very long lists, copy in chunks if needed.' },
    { category: 'Limits', question: 'Is there a maximum number of lines?', answer: 'Very long lists (e.g., hundreds of lines) can produce very many combinations and may be slow or hit browser limits. Use smaller lists or smaller combination sizes (e.g., pairs or triples) for best performance. Understanding C(n,k) helps you plan: for n lines and size k, you get n! / (k!(n-k)!) combinations.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The line combination generator runs in your browser. No download or account is required. Paste your lines, choose combination size, run the tool, and copy or download the result. It works on desktop and mobile.' },
    { category: 'Technical', question: 'What if I have duplicate lines?', answer: 'Some line combination generator tools remove duplicates so each line is unique; others keep duplicates. If duplicates matter for your use case, check the tool behavior or use a list with unique lines. The count C(n,k) assumes n distinct items; duplicate lines may reduce the effective set size if the tool deduplicates.' },
    { category: 'Use cases', question: 'Can I use it for recipe or ingredient combinations?', answer: 'Yes. Put each ingredient or step on a line. Generate combinations of a chosen size to get ingredient sets or step combinations. Useful for meal planning, variant ideas, or exploring which ingredients or steps to combine. The line combination generator lists every subset of that size so you can copy the result into a recipe or plan.' },
    { category: 'Workflow', question: 'Can I export the combinations?', answer: 'Copy the output from the line combination generator and paste into a file, Excel, or CSV. Some tools offer a download button. For very long lists, copy in sections if needed. The list is plain text so you can use it in spreadsheets, scripts, or content workflows. Your data stays on your device and is not sent to our servers.' },
    { category: 'General', question: 'Is this the same as permutation of lines?', answer: 'No. Line combinations: order of lines does not matter (A then B is the same as B then A). Permutations of lines: order matters (line A then B is different from B then A). Use the line combination generator when you only care which lines are chosen together (e.g., headline sets, tag combinations). Use a permutation generator when the sequence of lines matters (e.g., order of steps or sentences).' },
    { category: 'Technical', question: 'How many combinations will I get?', answer: 'For n lines and combination size k, you get C(n,k) = n! / (k!(n-k)!) combinations. The line combination generator usually shows the count and lists them all. Examples: 10 lines choose 2 = 45 pairs; 15 lines choose 5 = 3,003. If the count is large, use a smaller list or smaller k to avoid slow output or browser limits.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<LineCombinationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the Line Combination Generator.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
