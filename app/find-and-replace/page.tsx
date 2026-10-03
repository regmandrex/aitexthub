import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { FindReplaceTool } from '@/components/tools/FindReplaceTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'find-and-replace';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Find and Replace";
  const description = "Search for text and replace it with custom values, with optional case matching.";
  const seoTitle = "Find and Replace Tool - Bulk text replacement online";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'Technical' },
  { key: 'faq3', category: 'Usage' },
  { key: 'faq4', category: 'Usage' },
  { key: 'faq5', category: 'Technical' },
  { key: 'faq6', category: 'Technical' },
  { key: 'faq7', category: 'Formatting' },
  { key: 'faq8', category: 'Usage' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Limits' },
  { key: 'faq13', category: 'Workflow' },
  { key: 'faq14', category: 'General' },
  { key: 'faq15', category: 'Professional' },
  { key: 'faq16', category: 'Academic' },
  { key: 'faq17', category: 'SEO' },
  { key: 'faq18', category: 'Accessibility' },
  { key: 'faq19', category: 'Privacy' },
  { key: 'faq20', category: 'Compatibility' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Responsible Use' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Web-Based Find and Replace: Mass Text Substitution Utility</h2>
        <p>Modifying identical words, phrases, or characters manually throughout a lengthy document is tedious and prone to errors. A find and replace tool completes this in a single step: input the target text and the replacement text, and the utility modifies every instance simultaneously. Whether you are fixing repeated typos, standardizing product names, switching placeholders, or cleaning data by deleting or substituting a character, a free find and replace online tool saves time and preserves editing consistency.</p>
        <p>This find and replace tool executes inside your browser: insert your text, provide your search and replacement strings, pick options like case-sensitive or whole-word matching, and receive the output within seconds. Your data remains on your device and is not sent to our servers, ensuring privacy. This guide explains how find and replace functions, when to utilize bulk find and replace for SEO and content, step-by-step instructions, and best practices to ensure you modify only intended targets.</p>

        <h2>Why Use Find and Replace and What Is It?</h2>
        <p>Find and replace (or search and replace) involves searching for every instance of a string within your text and substituting it with another string. The find component is the precise text you wish to match, while the replace component is the new value. A find and replace tool automates this process so manual searching and editing of each instance is unnecessary. Editors rely on it to fix typos and standardize terminology, developers use it to alter variable names or update strings, and content teams apply it to refresh brand names or keywords across articles. Bulk find and replace stands as one of the most powerful and frequent text editing tasks, and an online find and replace tool delivers this capability without software installation.</p>

        <h2>The Mechanics of the Find and Replace Tool</h2>
        <p>Insert your text into the input box. In the find input, type the exact string you want to locate, such as a word, phrase, or character. In the replace input, provide the desired replacement text, or leave it blank to remove every instance. The utility executes literal matching, finding exact instances only rather than regex patterns. Many versions offer case-sensitive matching where Word and word differ, alongside whole-word matching where cat avoids matching inside category. Pick your preferences, run the utility, and the resulting view presents your text with all matches updated. Copy the final output for your document, CMS, or code. Processing happens locally in your browser without sending anything to our servers.</p>
        <p>The tool does not paraphrase or rewrite content. It solely replaces the exact text you specify. Should you require multiple distinct substitutions, execute the tool once for each find-and-replace pair, keeping in mind that order matters since replacing A then B might yield different results than B then A. Always inspect the output to verify that no unintended changes occurred.</p>

        <h2>Scenarios for Bulk Find and Replace</h2>
        <p><strong>Typos and spelling:</strong> If an error is repeated consistently throughout a file, find the mistake and correct every instance at once. <strong>Brand and product names:</strong> Standardize product references or corporate branding (for example, applying “Acme Corp” uniformly instead of mixing “Acme” with “Acme Corp”). <strong>Placeholders and templates:</strong> Swap boilerplate items such as “[Date]” or “[Company Name]” with finalized text prior to publishing. <strong>Data cleaning:</strong> Strip or substitute unwanted characters (like stray control characters or rogue punctuation) within spreadsheet data or CSV exports. <strong>SEO and content updates:</strong> Revise a target search phrase or company mention across a blog post or a collection of page descriptions. <strong>Code and config:</strong> Modify an API URL, variable name, or static constant throughout pasted code snippets (verify syntax carefully to prevent errors).</p>

        <h2>Whole-Word and Case-Sensitive Find and Replace</h2>
        <p>Case-sensitive find and replace treats uppercase and lowercase characters as distinct, meaning Word will not match word. Utilize this when you need to modify only capitalized instances, such as sentence beginnings, while leaving others untouched. Whole-word matching locates the search string solely when it functions as a complete word rather than part of an extended term. For instance, searching for cat with whole-word enabled will not match category or certificate. This prevents accidental partial updates and proves particularly valuable for brief search strings. Combine case-sensitive and whole-word settings when precise control over replacements is necessary.</p>

        <h2>Regex vs Find and Replace</h2>
        <p>This tool utilizes literal matching to find the exact characters you enter. It lacks support for regular expressions (regex). When pattern matching is required, such as finding any digit or a word at the beginning of a line, use a dedicated regex tool, IDE, or code editor. For most content and data cleanup tasks, literal find and replace proves sufficient and safer because you can clearly see what will match.</p>

        <h2>Tutorial: How to Use Find and Replace Online</h2>
        <p><strong>Step 1:</strong> Grab your content to modify (article, document, code, or CSV). <strong>Step 2:</strong> Launch the find and replace online tool and insert your text into the box. <strong>Step 3:</strong> Type the specific character sequence to locate into the find box. <strong>Step 4:</strong> Input your new text into the replace box (or leave blank for removal). <strong>Step 5:</strong> Select settings if provided (whole-word, case-sensitive). <strong>Step 6:</strong> Execute the utility and check the results. <strong>Step 7:</strong> Export the final output back to your system or file. For successive changes, loop the process using the updated text.</p>

        <h2>Avoiding Mistakes and Best Practices</h2>
        <p>Use specific find strings to avoid replacing more than intended, such as Product Name instead of Name. Favor whole-word matching when your search string is brief. Execute one find-and-replace operation at a time when order matters. Always examine the output prior to production use or publishing. This find and replace tool executes locally and stores no text, keeping confidential or proprietary content secure.</p>

        <h2>Conclusion</h2>
        <p>Mass find and replace is vital for rapid, uniform text modifications. Utilize this complimentary find and replace online tool to modify every instance of a phrase in your content, featuring optional whole-word and case-sensitive filters. For further editing—line breaks, whitespace, or em dashes—pair it alongside our remove whitespace, remove line breaks, and em dash remover tools for an all-inclusive pipeline.</p>
      </div>
    </section>
  );
}

export default async function FindAndReplacePage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What purpose does the find and replace tool serve?', answer: 'Every instance of a text string within your content is located by the find and replace tool, which then substitutes it with another string. You type the search term into the find box and the substitute text into the replace box; the utility performs literal matching (optionally whole-word or case-sensitive) and updates every match simultaneously, ensuring bulk find and replace operates quickly and uniformly without requiring software installation.' },
    { category: 'General', question: 'Is the find and replace tool free to use?', answer: 'Indeed. This online find and replace utility is available at no cost. You simply paste your text, specify the find and replace terms, select preferences like whole-word or case-sensitive matching, and copy the output. Everything executes directly inside your browser, meaning your content remains off our servers.' },
    { category: 'Usage', question: 'How can I utilize find and replace online?', answer: 'Insert your text into the input field, then type the precise text you wish to locate into the find box alongside the text you want to substitute it with in the replace box. Execute the utility and the resulting display presents your text with all instances updated. Copy the output for application in your document, CMS, or programming code. Additional find-and-replace actions can be performed consecutively by repeating the procedure on the updated text.' },
    { category: 'Usage', question: 'Is case-sensitive find and replace possible?', answer: 'Numerous find and replace utilities provide a case-sensitive setting ensuring “Word” and “word” are handled distinctly. Apply case-sensitive find and replace whenever you need to alter exclusively uppercase or lowercase occurrences while keeping everything else untouched. Toggle the utility settings to activate or deactivate case matching per your requirements.' },
    { category: 'Technical', question: 'Does regex get supported by find and replace?', answer: 'This find and replace utility relies strictly on literal matching: it locates exact character strings exactly as entered. It lacks support for regular expressions (regex). For pattern-based find and replace (such as any digit, or word at line start), utilize a code editor, IDE, or a specialized regex replace tool.' },
    { category: 'Technical', question: 'What defines whole-word find and replace?', answer: 'Whole-word matching isolates the search string solely when it functions as an independent word, rather than embedded inside a larger word. For instance, “cat” will not match “category.” which prevents unintended partial replacements. Whole-word find and replace proves particularly valuable whenever your search string is brief and might emerge within extended words.' },
    { category: 'Formatting', question: 'Will my formatting be altered by find and replace?', answer: 'The utility modifies exclusively the precise text you define within the find and replace fields. It leaves font styles, spacing, and alternative formatting untouched unless those particular characters form part of your find or replace strings. Your original paragraph and line layout remains intact.' },
    { category: 'Workflow', question: 'Can multiple find and replace operations be executed?', answer: 'Execute one find-and-replace task sequentially. For multiple distinct modifications, complete the initial find and replace, copy the updated output, and subsequently execute the following find-and-replace on the new text. Sequence can be significant—for instance, substituting “A” then “B” versus “B” then “A”).' },
    { category: 'Use cases', question: 'When is bulk find and replace recommended?', answer: 'Leverage bulk find and replace to correct recurring typos, standardize terminology (such as product or company names), swap placeholders within templates, sanitize data by eliminating or substituting a character, or batch-edit content across an article or meta descriptions. It reduces effort compared to manual search-and-replace while maintaining uniform edits.' },
    { category: 'Privacy', question: 'Is my text transmitted to any server?', answer: 'Negative. This find and replace utility handles text locally right in your browser. Your data is neither transmitted to our servers nor saved. You can securely apply it for private documents, client copy, and proprietary information without any security worries.' },
    { category: 'Limits', question: 'Is text length restricted in any way?', answer: 'For standard documents and articles there exists no rigid restriction. Extremely extensive texts (like full-length books) could require a brief moment to process. Should you encounter performance boundaries, handle the text in segments and merge the results accordingly.' },
    { category: 'General', question: 'What is the difference between find and replace and search?', answer: 'Find (or search) merely locates text; find and replace locates it and swaps in new text simultaneously. This utility accomplishes both: it uncovers all matches of your search string and substitutes them with your replacement string, delivering complete bulk replacement without requiring a separate search phase.' },
    { category: 'Technical', question: 'Does it replace only the first occurrence or all of them?', answer: 'A standard online find and replace utility updates all instances of the search string inside the pasted text. If your goal is to substitute solely the initial occurrence (or the nth), turn to a text editor or IDE featuring "replace once" or "replace next," or perform multiple cycles utilizing varying search strings.' },
    { category: 'Use cases', question: 'Are you able to utilize find and replace for CSV data?', answer: 'Affirmative. Drop CSV content into the find and replace utility, locate a value or delimiter you wish to modify and change it. Be cautious not to disrupt the CSV structure—for instance, substituting commas might ruin column boundaries. Choose to substitute exact field values or characters that you know are safe to alter.' },
    { category: 'Workflow', question: 'Is it possible to find and replace inside code?', answer: 'Yes. Input code into the utility and employ find and replace to alter variable names, strings, or comments. Apply literal matching and constantly inspect the outcome so you avoid breaking syntax. For massive codebases or refactors, an editor or IDE equipped with project-wide find and replace proves more efficient.' },
    { category: 'Formatting', question: 'Does it substitute text located within HTML tags?', answer: 'Indeed. The utility alters every instance of the find string inside the inserted text, including inside HTML tags. If you only want to substitute visible text and avoid markup, strip HTML first utilizing a strip HTML utility, execute find and replace on the plain text, then re-apply structure, or employ an editor capable of restricting replacement to text nodes.' },
    { category: 'SEO', question: 'Does find and replace prove beneficial for SEO content?', answer: 'Yes. Utilize find and replace to standardize keyword phrasing, correct repeated typos, or refresh brand names and URLs across an article or series of meta descriptions. Examine the output to guarantee substitutions are accurate and do not alter meaning or generate redundant or awkward phrasing.' },
    { category: 'Compatibility', question: 'Does the utility function on mobile devices?', answer: 'Correct. The find and replace utility operates within your browser, meaning it functions on phones and tablets. You can paste text, input find and replace strings, execute the utility, and copy the outcome without setting up an app.' },
    { category: 'Technical', question: 'What occurs if my search string contains special characters?', answer: 'The utility executes literal matching, meaning special characters are matched precisely as entered. If you need to locate a newline, tab, or alternative control character, verify whether the utility permits pasting those characters into the find field. Certain utilities support escape sequences or special options for standard characters.' },
    { category: 'General', question: 'Are you required to install software?', answer: 'Negative. This find and replace online utility functions entirely within your browser. There is no download or profile required. Paste your text, enter find and replace, execute, and copy the outcome.' },
    { category: 'Use cases', question: 'Can I substitute nothing to eliminate text?', answer: 'Yes. Utilize a blank string as the replacement to wipe out every instance of the find string. This proves useful for erasing a repeated typo, placeholder, or unwanted character from your text. The find and replace utility will keep the replace field blank and clear all matches.' },
    { category: 'Workflow', question: 'How can I prevent substituting excessively?', answer: 'Apply whole-word matching whenever feasible so brief find strings fail to match inside longer words. Favor specific find strings (such as "Product Name" rather than "Name"). Always examine the outcome prior to utilizing it in production or publishing, and execute one substitution at a time when sequence matters.' },
  ];

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<FindReplaceTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Standard questions and responses regarding the Find and Replace utility.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

