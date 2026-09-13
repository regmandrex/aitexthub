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
        <h2>Find and Replace Online: Bulk Text Replacement Tool</h2>
        <p>Changing the same word, phrase, or character everywhere in a long document by hand is slow and error-prone. A find and replace tool does it in one step: you enter the text to find and the text to replace it with, and the tool updates every occurrence at once. Whether you need to fix a repeated typo, normalize a product name, swap placeholders, or clean data by removing or replacing a character, a free find and replace online tool saves time and keeps edits consistent.</p>
        <p>This find and replace tool runs in your browser: paste your text, enter your find and replace strings, choose options like case-sensitive or whole-word matching, and get the result in seconds. Your content is not sent to our servers, so it stays private. In this guide we cover how find and replace works, when to use bulk find and replace for SEO and content, step-by-step usage, and best practices so you replace only what you intend.</p>

        <h2>What Is Find and Replace and Why Use It?</h2>
        <p>Find and replace (or search and replace) means searching for every occurrence of a string in your text and substituting another string in its place. The “find” is the exact text you want to match; the “replace” is what you want it to become. A find and replace tool automates this so you do not have to hunt and edit each instance manually. Editors use it to fix typos and normalize terms; developers use it to rename variables or update strings; content teams use it to update brand names or keywords across articles. Bulk find and replace is one of the most powerful and common text-editing operations, and an online find and replace tool makes it available without installing software.</p>

        <h2>How the Find and Replace Tool Works</h2>
        <p>Paste your text into the input area. In the find field, enter the exact string you want to find—a word, phrase, or character. In the replace field, enter what you want to replace it with (or leave replace empty to delete every occurrence). The tool performs literal matching: it finds exact occurrences only, not regex patterns. Many tools offer case-sensitive matching (so “Word” and “word” are different) and whole-word matching (so “cat” does not match inside “category”). Choose your options, run the tool, and the output shows your text with all matches replaced. Copy the result for use in your document, CMS, or code. Processing runs in your browser; nothing is sent to our servers.</p>
        <p>The tool does not rewrite or paraphrase. It only replaces the exact text you specify. If you need multiple different replacements, run the tool once for each find-and-replace pair (order can matter: replace “A” then “B” may give a different result than “B” then “A”). Always review the output to ensure no unintended replacements occurred.</p>

        <h2>When to Use Bulk Find and Replace</h2>
        <p><strong>Typos and spelling:</strong> If you misspelled a word the same way throughout a document, find the typo and replace with the correct spelling in one go. <strong>Brand and product names:</strong> Normalize how a product or company name appears (e.g., “Acme Corp” everywhere instead of mixed “Acme” and “Acme Corp”). <strong>Placeholders and templates:</strong> Replace placeholders like “[Company Name]” or “[Date]” with real values before publishing. <strong>Data cleaning:</strong> Remove or replace a character (e.g., stray punctuation or control characters) from CSV or pasted data. <strong>SEO and content updates:</strong> Update a keyword phrase or brand mention across an article or batch of meta descriptions. <strong>Code and config:</strong> Change a variable name, URL, or string constant across pasted code (review carefully so you do not break syntax).</p>

        <h2>Case-Sensitive and Whole-Word Find and Replace</h2>
        <p>Case-sensitive find and replace treats uppercase and lowercase as different: “Word” will not match “word.” Use it when you want to change only a capitalized occurrence (e.g., at the start of a sentence) and leave others unchanged. Whole-word matching finds the search string only when it appears as a complete word, not as part of a longer word. For example, finding “cat” with whole-word on will not match “category” or “certificate.” That avoids accidental partial replacements and is especially useful for short find strings. Combine case-sensitive and whole-word when you need precise control over what gets replaced.</p>

        <h2>Find and Replace vs Regex</h2>
        <p>This tool uses literal matching: it finds the exact characters you type. It does not support regular expressions (regex). If you need to find patterns—e.g., “any digit” or “word at the start of a line”—use a code editor, IDE, or dedicated regex replace tool. For most content and data cleanup, literal find and replace is sufficient and safer because you see exactly what will match.</p>

        <h2>Step-by-Step: How to Use Find and Replace Online</h2>
        <p><strong>Step 1:</strong> Copy the text you want to edit (document, article, CSV, or code). <strong>Step 2:</strong> Open the find and replace online tool and paste the text into the input area. <strong>Step 3:</strong> Enter the exact string you want to find in the find field. <strong>Step 4:</strong> Enter the replacement text in the replace field (or leave empty to delete). <strong>Step 5:</strong> Choose options if available (case-sensitive, whole-word). <strong>Step 6:</strong> Run the tool and review the output. <strong>Step 7:</strong> Copy the result and paste it back into your document or system. For multiple replacements, repeat with the new text.</p>

        <h2>Best Practices and Avoiding Mistakes</h2>
        <p>Use specific find strings so you do not replace more than intended (e.g., “Product Name” instead of “Name”). Prefer whole-word matching when the find string is short. Run one find-and-replace at a time when order matters. Always review the output before using it in production or publishing. This find and replace tool runs locally and does not store your text—safe for confidential or proprietary content.</p>

        <h2>Conclusion</h2>
        <p>Bulk find and replace is essential for fast, consistent text edits. Use this free find and replace online tool to change every occurrence of a string in your text, with optional case-sensitive and whole-word matching. For more cleanup—whitespace, line breaks, or em dashes—combine it with our remove whitespace, remove line breaks, and em dash remover tools for a complete workflow.</p>
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
    { category: 'General', question: 'What does the find and replace tool do?', answer: 'The find and replace tool searches for every occurrence of a text string in your content and replaces it with another string. You enter the search term in the find field and the replacement text in the replace field; the tool does literal matching (optionally case-sensitive or whole-word) and updates all matches at once, so bulk find and replace is fast and consistent without installing any software.' },
    { category: 'General', question: 'Is the find and replace tool free?', answer: 'Yes. This find and replace online tool is free to use. You can paste your text, enter find and replace strings, choose options such as case-sensitive or whole-word matching, and copy the result. All processing runs in your browser and your content is not sent to our servers.' },
    { category: 'Usage', question: 'How do I use find and replace online?', answer: 'Paste your text into the input area, then enter the exact text you want to find in the “find” field and the text you want to replace it with in the “replace” field. Run the tool and the output shows your text with all occurrences replaced. Copy the result for use in your document, CMS, or code. You can run multiple find-and-replace operations by repeating the process on the new text.' },
    { category: 'Usage', question: 'Can I do case-sensitive find and replace?', answer: 'Many find and replace tools offer a case-sensitive option so “Word” and “word” are treated differently. Use case-sensitive find and replace when you want to change only capitalized or lowercase instances and leave the rest unchanged. Check the tool options to enable or disable case matching as needed.' },
    { category: 'Technical', question: 'Does find and replace support regex?', answer: 'This find and replace tool uses literal matching only: it finds exact character strings as you type them. It does not use regular expressions (regex). For pattern-based find and replace (e.g., any digit, or word at line start), use a code editor, IDE, or a dedicated regex replace tool.' },
    { category: 'Technical', question: 'What is whole-word find and replace?', answer: 'Whole-word matching finds the search string only when it appears as a complete word, not inside another word. For example, “cat” would not match “category.” which avoids accidental partial replacements. Whole-word find and replace is especially useful when your find string is short and could appear inside longer words.' },
    { category: 'Formatting', question: 'Will find and replace change my formatting?', answer: 'The tool only replaces the exact text you specify in the find and replace fields. It does not change font, spacing, or other formatting unless those characters are part of your find or replace strings. Your paragraph and line structure are preserved.' },
    { category: 'Workflow', question: 'Can I run multiple find and replace operations?', answer: 'Run one find-and-replace at a time. For several different changes, run the first find and replace, copy the result, then run the next find-and-replace on the new text. Order can matter—for example, replacing “A” then “B” vs “B” then “A”).' },
    { category: 'Use cases', question: 'When should I use bulk find and replace?', answer: 'Use bulk find and replace to fix repeated typos, normalize terms (e.g., product or company names), change placeholders in templates, clean data by removing or replacing a character, or batch-edit content across an article or meta descriptions. It saves time over manual search-and-replace and keeps edits consistent.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'No. This find and replace tool processes text locally in your browser. Your content is not uploaded to our servers or stored. You can safely use it for confidential documents, client copy, and proprietary data without privacy concerns.' },
    { category: 'Limits', question: 'Is there a limit on text length?', answer: 'For typical documents and articles there is no strict limit. Very long texts (e.g., entire books) may take a few seconds to process. If you hit performance limits, process the text in chunks and combine the results as needed.' },
    { category: 'General', question: 'What is the difference between find and replace and search?', answer: 'Find (or search) only locates text; find and replace finds it and substitutes new text in one step. This tool does both: it finds all matches of your find string and replaces them with your replacement string, so you get the full bulk replacement without a separate search step.' },
    { category: 'Technical', question: 'Does it replace only the first occurrence or all?', answer: 'A typical online find and replace tool replaces all occurrences of the find string in the pasted text. If you need to replace only the first occurrence (or the nth), use a text editor or IDE that offers "replace once" or "replace next," or run multiple passes with different find strings.' },
    { category: 'Use cases', question: 'Can I use find and replace for CSV data?', answer: 'Yes. Paste CSV content into the find and replace tool, then find a value or delimiter you want to change and replace it. Be careful not to break the CSV structure—for example, replacing commas might break column boundaries. Prefer replacing specific field values or characters that you know are safe to change.' },
    { category: 'Workflow', question: 'Can I find and replace in code?', answer: 'Yes. Paste code into the tool and use find and replace to change variable names, strings, or comments. Use literal matching and always review the result so you do not break syntax. For large codebases or refactors, an editor or IDE with project-wide find and replace is often more efficient.' },
    { category: 'Formatting', question: 'Will it replace text inside HTML tags?', answer: 'Yes. The tool replaces every occurrence of the find string in the pasted text, including inside HTML tags. If you only want to replace in visible text and not in markup, strip HTML first with a strip HTML tool, run find and replace on the plain text, then re-apply structure, or use an editor that can limit replace to text nodes.' },
    { category: 'SEO', question: 'Is find and replace useful for SEO content?', answer: 'Yes. Use find and replace to normalize keyword phrasing, fix repeated typos, or update brand names and URLs across an article or batch of meta descriptions. Review the output to ensure replacements are correct and do not change meaning or create duplicate or awkward phrasing.' },
    { category: 'Compatibility', question: 'Does the tool work on mobile?', answer: 'Yes. The find and replace tool runs in your browser, so it works on phones and tablets. You can paste text, enter find and replace strings, run the tool, and copy the result without installing an app.' },
    { category: 'Technical', question: 'What if my search string has special characters?', answer: 'The tool does literal matching, so special characters are matched exactly as typed. If you need to find a newline, tab, or other control character, check whether the tool allows pasting those characters into the find field. Some tools support escape sequences or special options for common characters.' },
    { category: 'General', question: 'Do I need to install software?', answer: 'No. This find and replace online tool runs entirely in your browser. There is no download or account required. Paste your text, enter find and replace, run, and copy the result.' },
    { category: 'Use cases', question: 'Can I replace nothing (delete text)?', answer: 'Yes. Use an empty string as the replacement to delete every occurrence of the find string. This is useful for removing a repeated typo, placeholder, or unwanted character from your text. The find and replace tool will leave the replace field empty and remove all matches.' },
    { category: 'Workflow', question: 'How do I avoid replacing too much?', answer: 'Use whole-word matching when possible so short find strings do not match inside longer words. Prefer specific find strings (e.g., “Product Name” instead of “Name”). Always review the result before using it in production or publishing, and run one replacement at a time when order matters.' },
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
          <p className="text-slate-700">
            Common questions and answers about the Find and Replace tool.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

