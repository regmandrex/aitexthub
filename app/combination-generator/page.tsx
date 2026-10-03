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
import { siteUrl } from '@/lib/seo/url';
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
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Combination Generator: Every Potential Combination Generator</h2>
        <p>A combination generator is a free online tool that lists every possible combination from a set of items—letters, numbers, words, or any list you provide. In combinations, order does not matter: {`{A, B}`} and {`{B, A}`} count as the same combination. That makes a combination generator ideal for lottery-style picks, sampling, team formation, password ideas, teaching combinatorics, and any task where you need "choose k from n" without caring about the order of selection.</p>
        <p>This Combination Generator operates inside your browser: you type your entries (single entries per line or comma-separated), select how many elements per combination (such as all pairs, triples, or full combinations), and receive the entire list. No registration or installation is needed, and your information remains on your device. Below we clarify what combinations are, how the Combination Generator functions step by step, when to apply it, and how to prevent slowdowns with large sets so you maximize the utility.</p>

        <h2>What Are Combinations? Combinations vs Permutations</h2>
        <p>A combination is a selection of items from a set where order is irrelevant. If you choose two items from A, B, and C, the only combinations are {`{A,B}`}, {`{A,C}`}, and {`{B,C}`}. The pair A,B and B,A are the same combination. That is the key difference from permutations: in a permutation generator, order matters, so AB and BA are two different permutations. Use a combination generator when you only care which items are chosen together; use a permutation generator when the sequence matters (e.g., passcodes or rankings).</p>
        <p>The quantity of ways to select k elements from n unique elements is expressed by the binomial coefficient C(n,k) = n! / (k!(n-k)!). For instance, C(5,2) = 10, meaning 5 items taken 2 at a time produce 10 combinations. The Combination Generator calculates this tally and outputs each combination so you can copy, download, or apply them within Excel, educational materials, or your personal projects.</p>

        <h2>[4] The Mechanics Of The Combination Generator</h2>
        <p>Using the Combination Generator proves simple. Paste or type your elements into the text box—one element per line or separated by commas. The system parses them into a collection (duplicates are typically discarded). Next select if you desire full combinations (every element in the set within one combination) or partial combinations of a specific length (such as 2 for all pairs, 3 for all triples). Click the button to create; the output enumerates every potential combination in a uniform sequence (typically lexicographical). Copy the list or utilize a download choice if the utility provides one. All computation happens within your browser, meaning nothing transmits to a server and your lists remain confidential.</p>
        <p>If you require combinations with repetition (the identical element can show up more than once inside a combination, like dice rolls), that applies a distinct formula—n+k-1 choose k—and select tools present it as a separate mode. Verify the Combination Generator settings for "with repetition" or "multiset" if that is what you need.</p>

        <h2>When to Utilize a Combination Generator</h2>
        <p><strong>Lottery-style and random picks:</strong> Produce all combinations of numbers (such as 1–49 choose 6) and afterwards select one at random, or apply the list to verify coverage. A Combination Generator supplies the complete set; you determine how to sample from it.</p>
        <p><strong>Sampling and statistics:</strong> When you need all possible samples of size k from a population of n (without replacement), combinations fulfill your exact needs. Educators and learners apply a Combination Generator to list samples for exercises or simulations.</p>
        <p><strong>Team formation and groups:</strong> List individuals or items and produce all combinations of 2, 3, or more for team pairs, project groups, or round-robin style groupings where order within the group holds no importance.</p>
        <p><strong>Password and passphrase ideas:</strong> Input a collection of terms or characters and create combinations of a chosen size. Apply the list as inspiration for passphrases (combine with alternate security habits and avoid predictable patterns).</p>
        <p><strong>Content and brainstorming:</strong> Utilize words or phrases as elements and generate combinations to obtain idea pairs or triples regarding headlines, product names, or tag combinations.</p>
        <p><strong>Teaching combinatorics:</strong> The Combination Generator demonstrates C(n,k) tangibly: learners can observe the tally and the full list for modest n and k, then contrast against the formula.</p>

        <h2>Combination Length alongside Full versus Partial Combinations</h2>
        <p>A full combination employs every element in the set once; for n items there exists only a single full combination (the entire set). Partial combinations represent subsets of a chosen length k: for example, "combinations of 2" supplies all pairs, "combinations of 3" supplies all triples. The Combination Generator generally lets you select k or "all" for the complete set. Select a sensible k: C(n,k) expands rapidly (for instance, 20 items choose 10 equals 184,756 combinations). For extremely large n or k, the list can be massive and might demand time or encounter browser limits—apply smaller sets or smaller k if you require rapid outcomes.</p>

        <h2>How Many Combinations Will I Receive?</h2>
        <p>The quantity of combinations equals C(n,k) = n! / (k!(n-k)!). The utility generally displays this tally prior to or following listing. Instances: 5 choose 2 = 10, 10 choose 3 = 120, 15 choose 5 = 3,003. Should the tally reach the millions, contemplate diminishing n or k or executing processing in segments. Grasping C(n,k) assists you in planning set sizes and preventing timeouts.</p>

        <h2>In What Sequence Are Combinations Displayed?</h2>
        <p>Most combination generators list combinations in lexicographic or a fixed order (e.g., 1,2 then 1,3 then 2,3). The order of listing does not change the mathematical combination; it only affects how you read the output. Within each combination, order typically does not matter—{`{A,B}`} and {`{B,A}`} are the same—so the tool may output each set in a canonical order for consistency.</p>

        <h2>Input Format: Commas vs Newlines</h2>
        <p>You can list items one per line or divide them using commas. The Combination Generator reads the text into a unique set of elements. Duplicate values are typically dropped. Next, you pick your combination length and execute. The same guidelines apply to words, numbers, or mixed data: each unique element appears at most once per group unless repetition is allowed.</p>

        <h2>Exporting and Saving Combinations</h2>
        <p>Highlight the entire result and paste it into a text file, Google Sheets, or Excel. Depending on the interface, each combination may show as a single column or row. Certain utilities provide a download button like TXT or CSV. For massive outputs, consider copying in sections. The Combination Generator operates locally and at no cost, allowing you to utilize the data for instruction, analysis, or any subsequent task right on the screen.</p>

        <h2>Why Does Performance Drop with Large Inputs in the Combination Generator?</h2>
        <p>The quantity of groups scales rapidly based on n and k. For instance, choosing 12 items out of 25 yields over 5 million possibilities. Rendering and calculating such an extensive list demands browser memory and time. Keep set sizes manageable (such as below 20 elements for large k) or use smaller k values like pairs or triples to ensure the Combination Generator stays fast. If you only require a subset rather than the complete collection, try a random combination picker instead.</p>

        <h2>Combinations Versus Permutations: Selecting the Right Tool</h2>
        <p>Opt for the Combination Generator when sequence is irrelevant (where AB equals BA). Choose a permutation generator when arrangement matters (making AB and BA distinct). Combinations suit lottery picks, team selections, or "choose k from n" scenarios. Conversely, use permutations for rankings, passcodes, or ordered arrangements. Many platforms provide both options so you can select the ideal fit.</p>

        <h2>Privacy and Security</h2>
        <p>This Combination Generator operates directly within your web browser. Your inputted elements and generated results remain entirely on your device rather than uploading to external servers. Therefore, you can safely process sensitive information, student rosters, or private lists without privacy worries.</p>

        <h2>Conclusion</h2>
        <p>Whether you require all possible groups for educational combinatorics, password brainstorming, team building, sampling, or lottery selections, a Combination Generator saves effort and guarantees every size-specific outcome is captured. Utilize this complimentary Combination Generator to input elements, select partial or full groupings, and easily copy or export the final list. When sequence matters, opt for a permutation generator instead; for order-independent "choose k from n" tasks, the Combination Generator is ideal.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Combination Generator";
  const description = "Produce all possible combinations from a set of items. Order does not matter in combinations.";
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
    { category: 'General', question: 'What does the Combination Generator accomplish?', answer: 'The Combination Generator displays all potential element groupings from a user-supplied set. Order is disregarded in combinations, meaning AB and BA represent the identical group. You can produce complete sets or partial groupings of a specific length like pairs and triples. Input words, digits, or letters; the utility calculates C(n,k) and presents every variation so you can export or copy the results for brainstorming, instruction, sampling, or lottery numbers.' },
    { category: 'General', question: 'Does the Combination Generator cost anything?', answer: 'Indeed. This Combination Generator is completely free to use. Simply input your elements, select your grouping length and type, and view the complete set. Computation happens inside your browser with no installation or registration needed. Your information remains secure on your machine and is never transmitted to our servers.' },
    { category: 'Technical', question: 'What is the difference between combinations and permutations?', answer: 'In combinations, arrangement does not matter, meaning AB equals BA. With permutations, sequence is crucial, making AB and BA distinct. Utilize the Combination Generator whenever you focus purely on which elements are grouped together, such as teams or lottery picks. Turn to a permutation generator when order counts, like in passcodes or rankings. Many websites host both choices so you can find the correct fit for your task.' },
    { category: 'Technical', question: 'How many total combinations exist?', answer: 'For n elements sampled k at a time, the formula is C(n,k) = n! / (k!(n-k)!). For example, taking 5 items 2 at a time produces 10 groups, while choosing 3 out of 10 yields 120. The Combination Generator displays this exact quantity alongside every generated variation. Knowing the mathematical formula helps you anticipate set limits and avoid browser performance issues from massive outputs.' },
    { category: 'Usage', question: 'How can someone operate the Combination Generator?', answer: 'Input your data elements—whether words, digits, or letters—divided by commas or newlines. Select complete groupings containing every item or partial sets of a set length like 2 for pairs and 3 for triples. Run the utility to generate every prospective combination in the output area. Export the data or copy the text using available features. All calculations execute locally in your browser.' },
    { category: 'Usage', question: 'Is it possible to generate numeric combinations?', answer: 'Yes. Input digits as your elements, separated by commas or line breaks. The Combination Generator will generate every grouping of your chosen size. This works well for math exercises, sampling tasks, or lottery-style selections. You obtain the complete set of results, allowing you to select random entries or utilize the list as required.' },
    { category: 'Formatting', question: 'In what sequence do combinations appear?', answer: 'Most instances of Combination Generator present combinations in a standard or lexicographical arrangement, such as 1,2 then 1,3 followed by 2,3. The internal sequence of individual sets does not alter the combination, as only the included items matter. The software maintains a reliable output order so you can depend on the results when pasting into Excel.' },
    { category: 'Use cases', question: 'What are the typical applications for combinations?', answer: 'Combinations serve password concepts where sequence is ignored, feature selection, team building, lottery picks, sampling, and any scenario requiring "choose k from n" without regard for order. Instructors employ a Combination Generator for teaching combinatorics, while data analysts rely on it for subset enumeration.' },
    { category: 'Limits', question: 'Why does performance drop with large inputs in the Combination Generator?', answer: 'The quantity of combinations increases rapidly (for instance, choosing 10 out of 20 results in roughly 184,756). Extremely large values for n or k can generate millions of results, potentially causing delays or browser memory issues. Keep your set sizes sensible.' },
    { category: 'Technical', question: 'Does this utility permit duplicated entries?', answer: 'Standard combinations utilize each element at most once per grouping. Should you require groupings with repetition (such as multisets or dice throws), a different mathematical formula (n+k-1 choose k) applies, which some utilities provide via a distinct setting. Look through the Combination Generator settings for options like "with repetition" or "multiset" if that fits your needs.' },
    { category: 'General', question: 'Am I able to create word combinations?', answer: 'Yes. Type your words as distinct elements (separated by commas or placed one per line). The Combination Generator will display every possible grouping of the specified length. This proves helpful for tag arrangements, content brainstorming, phrase ideas, or password inspiration. Every word counts as a single element and is used at most once per combination unless repetition is turned on.' },
    { category: 'Workflow', question: 'Is it possible to export combinations into Excel?', answer: 'Yes. Simply copy the results generated by the Combination Generator and paste them directly into Google Sheets or Excel. Depending on the format, each combination can appear in its own row or column. For extremely lengthy lists, you might need to copy them in smaller segments. Because the output is plain text, pasting into a text file or CSV works as well.' },
    { category: 'Privacy', question: 'Does my data get transmitted to an external server?', answer: 'No. The Combination Generator operates entirely within your web browser. Neither your inputted elements nor the resulting lists are uploaded or retained on our servers. You can safely utilize it for sensitive information, student records, or private lists without worrying about privacy.' },
    { category: 'Use cases', question: 'How can I apply combinations toward creating passwords?', answer: 'Input a collection of characters or words as items, select the desired quantity per group, and run the generator. Use the resulting list as inspiration for secure passphrases. For genuine security, integrate additional practices (such as unique characters, length, and randomness) while avoiding predictable habits. The Combination Generator supplies the complete set; how you choose and apply those combinations is entirely up to you.' },
    { category: 'Technical', question: 'What defines a complete combination?', answer: 'A full combination utilizes every single item in the set precisely once. For n items, there exists only one complete combination (the entire set). Partial combinations represent subsets of a specific size (such as all triples when k=3, or all pairs when k=2). The Combination Generator typically allows you to pick either partial or full modes and define k.' },
    { category: 'General', question: 'Do I need to install any software?', answer: 'No. The Combination Generator runs right inside your internet browser. No software installation or user account is necessary. Input your items, select partial or full combinations alongside the size, execute the tool, and copy or download the final list. It functions seamlessly on both mobile devices and desktop computers.' },
    { category: 'Limits', question: 'Is there an upper limit on the number of items allowed?', answer: 'Massive sets (such as 30 or more items) generate colossal combination totals, which can slow performance or trigger browser limits. For small lists or educational settings, the tool handles typical workloads efficiently. Lower your set size or pick a smaller k if you require quick results. Grasping C(n,k) helps you plan effectively so the Combination Generator remains fast.' },
    { category: 'Formatting', question: 'What is the proper way to input items?', answer: 'Provide one item per line or separate your entries using commas. The Combination Generator processes these into a collection, automatically stripping out duplicates. Next, select your combination size (either full or k) and execute. You can utilize numbers, words, letters, or mixed data—each individual item is applied at most once per combination unless repetition is enabled.' },
    { category: 'Use cases', question: 'Can I utilize this for random selections or lottery numbers?', answer: 'You can produce all combinations using the Combination Generator and then select one manually, or alternatively employ a dedicated random selector tool. The Combination Generator provides the full output list; how you subsequently utilize it (through filtering or random picking) rests with you. For lottery-style digits, input your number range as the items and generate combinations matching the required draw size.' },
    { category: 'Technical', question: 'What does C(n,k) stand for?', answer: 'C(n,k) represents the binomial coefficient, indicating the total ways to select k items out of n while ignoring order. The formula is C(n,k) = n! / (k!(n-k)!). The Combination Generator calculates this total and enumerates every combination. This represents standard combinatorics notation and matches the output provided by the utility.' },
    { category: 'Workflow', question: 'Are combinations available as a downloadable file?', answer: 'Certain Combination Generator features provide a direct download option (such as TXT or CSV). If unavailable, simply copy the output and paste it into a local document. For exceptionally long lists, processing in chunks may prove necessary. Since the list consists of plain text, you can save it anywhere for use in teaching materials, scripts, or Excel.' },
    { category: 'General', question: 'Does this function identically to a permutation generator?', answer: 'No. Combination Generator: sequence is irrelevant, meaning AB equals BA. Permutation generator: sequence matters, therefore AB and BA differ. Employ the Combination Generator when you only focus on selected items (such as teams, lottery numbers). Employ the permutation generator when order is critical (such as passcodes, rankings).' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<CombinationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent questions and answers regarding the Combination Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

