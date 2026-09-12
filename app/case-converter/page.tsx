import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { CaseConverterTool } from '@/components/tools/CaseConverterTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'case-converter';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Formatting' },
  { key: 'faq4', category: 'Formatting' },
  { key: 'faq5', category: 'Technical' },
  { key: 'faq6', category: 'Technical' },
  { key: 'faq7', category: 'Formatting' },
  { key: 'faq8', category: 'Workflow' },
  { key: 'faq9', category: 'Limits' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Compatibility' },
  { key: 'faq13', category: 'Limits' },
  { key: 'faq14', category: 'Workflow' },
  { key: 'faq15', category: 'Usage' },
  { key: 'faq16', category: 'General' },
  { key: 'faq17', category: 'Best Practices' },
  { key: 'faq18', category: 'SEO' },
  { key: 'faq19', category: 'SEO' },
  { key: 'faq20', category: 'Privacy' },
  { key: 'faq21', category: 'Technical' },
  { key: 'faq22', category: 'Responsible Use' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>{"Convert Text to Uppercase, Lowercase, Title Case & More - Online Case Converter Tool"}</h2>
        <p>{"This guide explains how the Case Converter tool works, why consistent capitalization matters, and when an online case converter is the right choice for cleanup. It is written for people who need reliable text case conversion without rewriting content. The tool on AI Text Cleanup Tools processes only the text you provide and returns predictable results, making it useful for editing, analysis, and everyday formatting tasks."}</p>

        <h2>{"Introduction"}</h2>
        <p>{"Case formatting problems are common. A report might arrive in all caps, a list might mix upper and lower case, or a batch of headings might be inconsistent after copy and paste. Inconsistent capitalization makes text harder to read and harder to reuse. It also creates friction in workflows that depend on clean, uniform formatting, such as publishing, documentation, and data review."}</p>
        <p>{"The Case Converter tool is designed to solve that simple but persistent problem. It converts text to uppercase, lowercase, title case, sentence case, or toggle case in a deterministic way. It does not rewrite or paraphrase, and it does not connect to AI services. If you are looking for a free case converter to clean up text quickly, this tool provides a direct solution with no extra steps."}</p>
        <p>{"Capitalization also carries subtle signals about tone and structure. Headings in title case can look formal, while sentence case feels conversational and is often used in modern interfaces. When content moves between systems, those choices can get lost. A consistent case conversion step helps restore the intended tone without rewriting anything. That is especially useful when multiple teams edit the same material or when content is repurposed from one format to another."}</p>
        <p>{"Common real-world use cases include normalizing headings for a website, converting a block of all-caps notes into readable paragraphs, or preparing labels for a spreadsheet. You might also use the tool to standardize case in email subject lines, survey responses, or metadata fields. In each case, the goal is to keep the same words while improving how they are presented."}</p>

        <h2>{"What Is Case Converter?"}</h2>
        <p>{"Case Converter is a text utility that changes the capitalization of letters while leaving the words themselves intact. It takes input text, applies a selected casing rule, and outputs the result. Because the tool performs deterministic processing, the same input always produces the same output, which is useful for repeatable workflows and documentation standards."}</p>
        <p>{"The tool does not interpret meaning or apply editorial judgment. It does not know which words are proper nouns or which acronyms should remain uppercase. Instead, it uses consistent rules for each mode. Uppercase and lowercase change all letters, title case capitalizes the first letter of each word, sentence case capitalizes the first letter of each sentence, and toggle case flips each letter to the opposite case. This is text case conversion, not rewriting."}</p>
        <p>{"If you need a simple, reliable way to convert text case online, this tool is built for that purpose. It focuses on clarity and speed, and it keeps your original wording intact. That makes it useful in professional, academic, and personal workflows where formatting is the only issue and the content itself should remain unchanged."}</p>

        <h3>{"Case modes in practice"}</h3>
        <p>{"Each case mode serves a different formatting purpose. Uppercase is useful for short labels, alerts, or code-like tags where uniform emphasis matters. Lowercase is a practical choice for normalizing lists and categories when you need consistent matching or filtering. Title case is a visual style for headings that makes each word stand out, while sentence case keeps paragraph text readable by following standard sentence capitalization. Toggle case is less common in publishing, but it is helpful when you want to reverse accidental caps lock mistakes or quickly highlight inconsistent casing. These modes are deterministic and apply to every letter in the same way, which is why the output is predictable and easy to review."}</p>
        <p>{"Sentence case deserves special mention because it depends on boundaries. The tool looks for punctuation such as periods, question marks, and exclamation points, as well as line breaks, and then capitalizes the first letter that follows. This means a paragraph with missing punctuation may be treated as a single sentence. If you are converting notes or drafts that do not use clear punctuation, you may want to review the output and add sentence boundaries before relying on the conversion. The behavior is consistent, but the input determines how much capitalization is applied."}</p>

        <h2>{"Why This Tool Matters"}</h2>
        <p>{"Consistent case improves readability. Readers process headings and paragraphs faster when capitalization follows a predictable pattern. Inconsistent case can make text feel unpolished, even when the content is strong. This is especially true for public-facing content such as documentation, product pages, and instructions where the visual presentation supports credibility."}</p>
        <p>{"The tool also saves time. Manually changing case across a long document is tedious and error prone. A free case converter can apply the same formatting rule to an entire block of text in seconds. That speed matters when you are preparing drafts, cleaning up notes, or aligning text with a style guide. It also reduces the risk of missing a line or leaving inconsistent capitalization behind."}</p>
        <p>{"Case conversion is also a common step in data preparation. When lists or labels are pulled from multiple sources, they often arrive in mixed case. A deterministic conversion step makes those labels consistent, which improves sorting, filtering, and presentation in spreadsheets or reports. The tool keeps the words unchanged while making the format uniform."}</p>
        <p>{"Consistent capitalization also helps teams collaborate. When multiple people contribute to the same document, headings can drift in style across revisions. Applying a single case rule reduces formatting churn and makes version review easier. It also helps when text is copied into systems that have strict formatting rules, such as knowledge bases or ticketing tools. A predictable case conversion step turns a manual cleanup task into a repeatable workflow that anyone on the team can follow."}</p>

        <h2>{"How the Tool Works (Step-by-Step)"}</h2>
        <h3>{"1) Input"}</h3>
        <p>{"Paste your text into the input field. The tool accepts any plain text and preserves spacing and line breaks as provided. This means you can work with single lines, multi-paragraph documents, or line-separated lists without losing structure. The content stays exactly as you paste it, which is important for accurate comparison."}</p>
        <h3>{"2) Choose a case mode"}</h3>
        <p>{"Select the conversion mode that matches your goal. Uppercase and lowercase are straightforward and apply to all letters. Title case capitalizes the first letter of each word. Sentence case capitalizes the first letter of each sentence, using punctuation and line breaks as boundaries. Toggle case flips every letter to the opposite case, which can be useful for diagnosing inconsistent capitalization."}</p>
        <h3>{"3) Processing"}</h3>
        <p>{"When you click Convert, the tool applies the selected rule to the input text. The processing is deterministic and happens locally in the browser. The tool does not call external services or AI models, and it does not analyze meaning. It simply transforms letter casing based on character-level rules. This ensures predictable results and keeps the content private."}</p>
        <p>{"Characters that are not letters are left untouched. Numbers, punctuation, and symbols remain in their original positions, which is important for dates, codes, or structured lists. The tool does not collapse spacing or remove line breaks, so the overall layout is preserved. That means you can focus on capitalization without worrying that the conversion will alter the structure of your text."}</p>
        <h3>{"4) Output"}</h3>
        <p>{"The converted text appears in the output panel. You can copy it and use it in your document, spreadsheet, or publishing workflow. Because the tool preserves line breaks and spacing, the output is ready to paste without additional cleanup in most cases. If you need different formatting, you can run another pass with a different mode or combine it with other text utilities."}</p>
        <p>{"The conversion does not change order, punctuation, or spacing, which makes it easy to compare input and output. If you are applying case conversion to structured lists or headings, you can review each line to confirm the result. This is especially important for content that includes acronyms, product names, or abbreviations. Because the tool is deterministic, you can rerun the same input later and get the same output, which supports consistent formatting across releases or document updates."}</p>

        <h2>{"Common Problems This Tool Solves"}</h2>
        <p>{"Case conversion is a small change that solves several common problems. These examples show how an online case converter can improve clarity and consistency across different types of text."}</p>
        <ul>
          <li>{"All-caps documents that are hard to read can be converted to sentence case for better readability without changing any wording."}</li>
          <li>{"Mixed-case headings can be standardized to title case so a document or website feels cohesive."}</li>
          <li>{"Lists of labels pulled from different sources can be normalized to lowercase for easier matching or deduplication."}</li>
          <li>{"Email subject lines and notifications can be formatted to a consistent style across a campaign."}</li>
          <li>{"Survey responses or user-entered data can be normalized for presentation without altering the content."}</li>
        </ul>
        <p>{"The tool focuses on formatting only. It does not change spelling, grammar, or meaning. That makes it a safe way to improve presentation while keeping the original message intact."}</p>
        <p>{"Another common problem is inconsistent case in file names, tag lists, or inventory labels. When those labels appear in mixed formats, it becomes harder to search or sort them consistently. Converting to a uniform case reduces duplicates caused by capitalization differences and makes it easier to compare entries at a glance. For content teams, consistent case also helps maintain a professional tone when copying text between draft documents, CMS fields, and presentation slides."}</p>

        <h2>{"Supported Text Sources"}</h2>
        <p>{"The Case Converter works with any text you can copy and paste. That includes content from documents, web pages, and apps that export plain text. The source does not matter as long as the input is text."}</p>
        <p>{"Spreadsheet exports and CSV files are also common sources. Labels and categories often arrive in inconsistent case because they were entered by different people or generated by different systems. Converting those lists to a single case style makes them easier to filter and reduces accidental duplicates caused by capitalization differences. You can paste a column of values, convert it, and paste it back without changing the order of the entries."}</p>
        <p>{"Forms, survey platforms, and CRM exports often produce text that mixes case across responses. A short conversion step can make those responses easier to scan and compare without changing the underlying answers. This is especially helpful when you need to prepare a report or summary from open-ended responses and want consistent formatting before analysis."}</p>
        <h3>{"Websites and web apps"}</h3>
        <p>{"Headings, page titles, or UI labels copied from websites often need consistent capitalization. The tool can convert those strings without changing the wording, which is useful for documentation or product review workflows."}</p>
        <h3>{"PDF exports"}</h3>
        <p>{"Some PDFs convert headings and body text into inconsistent case when copied. Converting the pasted text to sentence case or title case can restore readability quickly without manual editing."}</p>
        <h3>{"Word documents"}</h3>
        <p>{"When text is shared across Word documents or collaborative editors, capitalization can drift. A quick pass through a free case converter helps align headings and lists before final review."}</p>
        <h3>{"AI-generated text"}</h3>
        <p>{"AI-generated drafts sometimes include inconsistent capitalization, especially in headings or lists. This tool does not interact with AI services, but it can clean the text you paste from those drafts so the formatting is consistent."}</p>
        <h3>{"Emails and chat transcripts"}</h3>
        <p>{"Email subject lines, notes, and chat messages are often formatted quickly and inconsistently. Converting those messages to a consistent case makes them easier to archive or reuse in reports."}</p>
        <h3>{"Code snippets and documentation"}</h3>
        <p>{"While you should avoid changing code identifiers, documentation text around code can benefit from consistent capitalization. Use the tool on the narrative text, not on code itself, to improve readability without breaking anything."}</p>

        <h2>{"What This Tool Does NOT Do"}</h2>
        <p>{"It is important to set clear expectations. The Case Converter is a formatting utility, and it is intentionally limited to avoid changing meaning or content."}</p>
        <ul>
          <li>{"It does not rewrite sentences or improve writing quality."}</li>
          <li>{"It does not apply style guide rules for small words or acronyms."}</li>
          <li>{"It does not translate languages or change words."}</li>
          <li>{"It does not connect to AI models or external services."}</li>
          <li>{"It does not guarantee any SEO or ranking outcome."}</li>
        </ul>
        <p>{"If you need editorial changes, such as rewriting for clarity or adjusting tone, you should handle that separately. This tool is meant for deterministic case conversion only."}</p>

        <h2>{"Privacy and Security"}</h2>
        <p>{"The Case Converter processes text in the browser. It does not upload your input to external servers or connect to AI models. The conversion happens locally during your session, and the output appears immediately. This design keeps the tool lightweight and minimizes data exposure."}</p>
        <p>{"Even with local processing, follow your organization policies for sensitive data. If the text is confidential, you should ensure that any online workflow aligns with your security standards. The tool does not store input or output, so it is suited for everyday formatting tasks where privacy matters but full offline processing is not required."}</p>

        <h2>{"Professional Use Cases"}</h2>
        <p>{"Case conversion appears in many professional workflows. The tool supports these tasks by applying consistent formatting without altering content."}</p>
        <h3>{"Writers and editors"}</h3>
        <p>{"Editors often need to align headings and subheadings to a specific style. A case converter makes that step fast and repeatable, especially when working with large drafts or imported content."}</p>
        <h3>{"Developers and technical teams"}</h3>
        <p>{"Technical documentation often uses standard capitalization for headings and labels. Converting text case helps maintain consistency in docs, release notes, and internal references."}</p>
        <h3>{"Marketing and communications"}</h3>
        <p>{"Marketing teams need consistent formatting across campaign copy, subject lines, and landing pages. Case conversion provides a quick way to align text with brand guidelines."}</p>
        <h3>{"Product and UX teams"}</h3>
        <p>{"Product teams often maintain UI strings, onboarding steps, and in-app help text. Keeping those strings in a consistent case style makes interfaces feel more polished and predictable. A case converter can normalize drafts before they are pushed into localization or design systems, which saves time in later review cycles."}</p>
        <h3>{"Operations and support"}</h3>
        <p>{"Support teams frequently reuse snippets, templates, and ticket summaries. Converting case helps standardize those materials so they look professional and are easy to scan."}</p>
        <h3>{"Legal and compliance teams"}</h3>
        <p>{"Legal and compliance teams often review policy text, clauses, and headings for consistency. Case conversion helps standardize headings and section titles without changing the legal language itself. It is also useful when preparing excerpts for review boards or audit trails, where consistent formatting improves readability and reduces the chance of misinterpretation."}</p>
        <h3>{"Data and research teams"}</h3>
        <p>{"When labels or categories appear in mixed case, analysis can be slowed by inconsistent formatting. Converting case makes data sets easier to filter, compare, and present."}</p>
        <p>{"Across these roles, the common requirement is clarity and consistency. A simple case conversion step lets teams align formatting before content moves into a shared system, such as a CMS, a ticketing platform, or a reporting dashboard. That reduces small errors that can compound over time, such as duplicate labels created by case differences. The tool does not replace editorial review, but it provides a reliable baseline that teams can build on."}</p>

        <h2>{"Educational Use Cases"}</h2>
        <p>{"Students and educators often work with text copied from multiple sources. Consistent capitalization improves readability in essays, reports, and presentations. A free case converter can standardize headings and lists quickly without changing the wording."}</p>
        <p>{"In teaching contexts, the tool can help demonstrate the difference between title case and sentence case or show how formatting affects readability. Because the tool does not rewrite content, it is safe for academic use where preserving original meaning is important."}</p>

        <h2>{"Publishing and SEO Use Cases"}</h2>
        <p>{"Publishing workflows often require consistent case for headings, metadata, and summaries. This tool supports those workflows by applying a single case style across all content blocks. It does not generate or optimize text, but it makes the presentation consistent."}</p>
        <p>{"For SEO tasks, the tool is useful for standardizing title capitalization or normalizing text before a review. Search engines generally normalize text for indexing, but users still notice how headings and titles look. Applying consistent case can improve perceived quality and click behavior without changing the underlying content."}</p>
        <p>{"This is also useful for internal QA. When a team prepares a batch of titles for upload, consistent case prevents the need for manual edits inside the CMS. It is easier to review formatting in a single list before publishing than to fix individual pages later. The tool does not create new keywords or rewrite titles, so it stays within editorial guidelines while making presentation consistent across a site or knowledge base."}</p>

        <h2>{"Accessibility and Usability Benefits"}</h2>
        <p>{"Consistent capitalization can improve readability, especially for longer documents. Readers process predictable patterns more easily than inconsistent ones. By standardizing case, you reduce visual noise and make the content easier to scan."}</p>
        <p>{"The tool also supports accessibility reviews by providing a plain text view that is easier to evaluate for clarity. It does not replace accessibility audits, but it helps teams assess whether headings and labels are readable without relying on styling or layout cues."}</p>
        <p>{"Consistent case can also reduce cognitive load for readers who skim. When capitalization follows a predictable pattern, it is easier to distinguish headings from body text and to identify key terms. For screen readers, consistent formatting helps content authors maintain a clear hierarchy in plain text drafts before they are styled in a final layout. The tool does not add structure, but it supports clearer presentation when structure already exists."}</p>

        <h2>{"Why Use an Online Tool Instead of Manual Editing"}</h2>
        <p>{"Manual case changes are slow and error prone, especially across long documents. A case converter applies the same rules consistently and eliminates the risk of missing lines or leaving inconsistent capitalization behind. This is valuable for teams that need repeatable results."}</p>
        <p>{"An online tool also keeps the workflow simple. You can paste, convert, and copy without opening a heavy editor or changing document settings. That speed matters when you are processing multiple text blocks or making quick revisions."}</p>
        <p>{"Online conversion also reduces differences between tools. If your team uses multiple editors, each may handle case changes slightly differently or apply hidden formatting. A dedicated case converter gives everyone the same output from the same input, which makes review and collaboration easier. It is a small step that helps eliminate inconsistencies caused by tool-specific shortcuts."}</p>

        <h2>{"Edge Cases and Known Limitations"}</h2>
        <p>{"Case conversion is deterministic, but there are edge cases you should be aware of. Understanding these limitations helps you use the tool effectively."}</p>
        <ul>
          <li>{"Acronyms can lose their uppercase styling in title or sentence case."}</li>
          <li>{"Proper nouns may be lowercased when you apply a full lowercase conversion."}</li>
          <li>{"Hyphenated words may become capitalized on both sides in title case."}</li>
          <li>{"Locale-specific casing rules may not be applied for all languages."}</li>
          <li>{"Code identifiers can lose their original casing patterns."}</li>
        </ul>
        <p>{"These are normal limitations for a general case conversion tool. The best practice is to review the output and restore special casing where necessary."}</p>
        <p>{"Mixed scripts can also produce unexpected results. If a line combines Latin characters with symbols or other scripts, the conversion may affect only part of the text, which can look uneven. This is not a bug but a natural outcome of how case conversion works across different character sets. For multilingual content, test a small sample first and be prepared to make manual adjustments for words that need special handling."}</p>
        <p>{"Another limitation is that title case does not follow style guide exceptions. Many editorial styles keep short words such as prepositions or articles in lower case unless they start a title. This tool capitalizes every word, which can create headings that look slightly different from formal style guides. If that nuance matters, treat the conversion as a first pass and then edit the titles that need exception handling."}</p>

        <h2>{"Best Practices When Using Case Converter"}</h2>
        <p>{"A few simple habits can improve results and reduce the need for cleanup after conversion. These practices are especially helpful for long documents or high-visibility content."}</p>
        <ul>
          <li>{"Choose a case style that matches your editorial or brand guidelines before converting."}</li>
          <li>{"Convert the text in one pass and then review proper nouns and acronyms."}</li>
          <li>{"Use line breaks to keep headings or lists separated for easier review."}</li>
          <li>{"Save the original text if you might need to restore special casing later."}</li>
          <li>{"Combine case conversion with targeted find and replace for recurring exceptions."}</li>
        </ul>
        <p>{"These steps keep the process efficient while ensuring that the final output matches your style requirements."}</p>
        <p>{"It also helps to review the output in the final environment where it will be used. Headings that look fine in a plain text view may need adjustments once they are placed into a CMS or document template. If your workflow includes automated imports, consider running a short QA pass on a small subset before converting the full data set. This keeps the conversion step safe and aligned with your publishing standards."}</p>

        <h2>{"Frequently Misunderstood Concepts"}</h2>
        <h3>{"Title case is not a full style guide"}</h3>
        <p>{"Title case in this tool is a simple rule that capitalizes each word. It does not follow complex editorial guidelines that keep certain words in lower case. If your organization follows a specific style guide, you may need a manual review step."}</p>
        <h3>{"Sentence case is not the same as grammar correction"}</h3>
        <p>{"Sentence case only changes capitalization after sentence boundaries. It does not fix punctuation or improve readability. If the input has missing punctuation, the sentence boundaries may not be detected correctly."}</p>
        <h3>{"Toggle case is a diagnostic tool"}</h3>
        <p>{"Toggle case is not a common publishing style. It is best used for diagnosing inconsistent capitalization or flipping text that was typed with caps lock on. Treat it as a utility mode, not a final formatting choice."}</p>
        <h3>{"Abbreviations require manual review"}</h3>
        <p>{"The tool does not know which words are acronyms or product names. That means abbreviations can be converted into regular title case or lowercase forms. This is not an error; it is a limitation of deterministic text processing. If you rely on exact casing for acronyms or brand terms, plan a manual review or a targeted find and replace step after conversion."}</p>
        <h3>{"Case conversion does not imply rewriting"}</h3>
        <p>{"This tool does not paraphrase or change meaning. It only changes letter case. Any editorial changes must be done separately after the formatting step."}</p>

        <h2>{"Responsible Use Disclaimer"}</h2>
        <p>{"The Case Converter is a deterministic text formatting utility. It does not generate content, rewrite text, or change meaning. It does not connect to AI models or external services, and it does not claim any affiliation with AI providers. Use the tool to format your own text and follow any policies or style guidelines that apply to your work."}</p>
        <p>{"If you are working with sensitive or licensed content, ensure you have the right to process it. The tool is designed for cleanup and readability, not for altering authorship or bypassing any detection systems."}</p>

        <h2>{"Final Summary and When to Use This Tool"}</h2>
        <p>{"The Case Converter on AI Text Cleanup Tools is a practical way to standardize capitalization without changing the words themselves. It supports uppercase, lowercase, title case, sentence case, and toggle case, and it works entirely on the text you provide. Because it is deterministic and local to your browser, the results are consistent and the process is private."}</p>
        <p>{"The tool is also easy to integrate into checklists and review flows. You can convert a draft, review the result for proper nouns and acronyms, and then publish with confidence that the formatting is consistent. This makes it a reliable final step in workflows that value clarity and repeatability. It is a fast, low-risk formatting step."}</p>
        <p>{"Use this tool when your content is correct but the formatting is inconsistent. It is ideal for headings, lists, notes, and metadata that need a uniform style. It is not meant for rewriting or grammar fixes, so treat it as a clean formatting step in your workflow. When the goal is clarity and consistency, a free case converter is the most direct solution."}</p>
    </div>
  </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};

  return buildToolMeta({
    title: toolData.title,
    description: toolData.shortDescription,
    seoTitle: toolData.seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function CaseConverterPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is the Case Converter tool?', answer: 'The Case Converter changes text capitalization without changing the words. You can convert to uppercase, lowercase, title case, sentence case, or toggle case. It runs in your browser and does not send your text to any server.' },
    { category: 'Formatting', question: 'What is title case vs sentence case?', answer: 'Title case capitalizes the first letter of each word (e.g., "How To Use This Tool"). Sentence case capitalizes the first letter of each sentence only (e.g., "How to use this tool."). The tool applies the rule you select to the whole block.' },
    { category: 'Usage', question: 'How do I use the case converter?', answer: 'Paste your text into the input field, choose a conversion mode (uppercase, lowercase, title case, sentence case, or toggle case), and click Convert. Copy the result from the output area. The tool preserves line breaks and spacing.' },
    { category: 'Technical', question: 'Does it work with non-English text?', answer: 'Yes. The tool works on any letters (Latin and other scripts that have upper/lower variants). Characters that do not have case (e.g., numbers, symbols) are left unchanged.' },
    { category: 'Privacy', question: 'Is my text stored?', answer: 'No. Conversion happens in your browser. Your text is not sent to our servers or stored. For sensitive content, you can use the tool without creating an account.' },
  ];

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<CaseConverterTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(() => '')}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Case Converter - Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Detailed answers about case conversion, formatting limits, and how to get consistent results without changing content.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

