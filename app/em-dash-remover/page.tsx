import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { EmDashRemoverTool } from '@/components/tools/EmDashRemoverTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 604800;

const toolSlug = 'em-dash-remover';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Em Dash Remover / Replacer";
  const description = "Remove or replace em dashes (—) and en dashes (–) with your preferred spacing.";
  const seoTitle = "Em Dash Remover - Replace or remove em dashes — and –";
  
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
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Formatting' },
  { key: 'faq5', category: 'Usage' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Limits' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Limits' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Workflow' },
  { key: 'faq13', category: 'General' },
  { key: 'faq14', category: 'Professional' },
  { key: 'faq15', category: 'Academic' },
  { key: 'faq16', category: 'SEO' },
  { key: 'faq17', category: 'Accessibility' },
  { key: 'faq18', category: 'Privacy' },
  { key: 'faq19', category: 'Compatibility' },
  { key: 'faq20', category: 'Technical' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Responsible Use' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Em Dash Remover Online: Replace or Remove Em Dashes and En Dashes</h2>
        <p>When you copy text from Microsoft Word, PDFs, or websites into plain text fields, URLs, code, or content management systems, em dashes (—) and en dashes (–) often cause problems. They can break links, fail validation, or display incorrectly in systems that expect standard hyphens or ASCII characters. An em dash remover lets you find every em dash and en dash in your text and replace them with a hyphen, comma, space, or remove them entirely—so your content is consistent and compatible everywhere you paste it.</p>
        <p>This free em dash remover online tool runs in your browser: paste your text, choose your replacement character (or choose to remove em dashes with no replacement), and get clean output in seconds. Your text is not sent to our servers, so it stays private. In this guide we explain what em dashes and en dashes are, why you need to remove or replace em dashes for SEO and technical compatibility, how to use the em dash remover step by step, and best practices for plain text, URLs, and code.</p>

        <h2>What Is an Em Dash and Why Use an Em Dash Remover?</h2>
        <p>An em dash (—) is a long horizontal dash, roughly the width of the letter “m” in the current font. Writers use it for pauses, asides, or emphasis—for example: “The result—which surprised everyone—was clear.” In printed and web typography, the em dash looks correct and reads well. But in plain text, URLs, filenames, CSV data, and code, the em dash character can cause encoding issues, break parsing, or be rejected by systems that only accept standard ASCII. An em dash remover finds all em dashes (and often en dashes) and replaces them with a character you choose, so your text works everywhere.</p>
        <p>An en dash (–) is slightly shorter than an em dash and is often used for ranges (e.g., 2020–2024) or compound modifiers. It can cause the same compatibility issues. A good em dash remover or em dash replacer tool handles both—replace em dash and en dash in one pass so you do not have to run two separate steps.</p>

        <h2>Why Replace or Remove Em Dashes?</h2>
        <p>Copy-pasting from Word or Google Docs into a CMS, email, or database often introduces em dashes. If your system expects only hyphens or ASCII punctuation, those characters can break links, distort meta descriptions, or cause validation errors. In URLs and filenames, em dashes are not standard and can lead to broken links or encoding problems. In code and config files, a single em dash in a string can cause parsing or display issues. Replacing em dashes with hyphens or commas keeps your text portable and predictable across platforms.</p>
        <p>From an SEO perspective, clean meta descriptions and title tags without special Unicode characters can display more reliably in search results and avoid encoding issues in crawlers. Using an em dash remover before pasting into meta fields or schema is a simple way to keep snippets and structured data consistent.</p>

        <h2>How the Em Dash Remover Tool Works</h2>
        <p>Using this em dash remover online is straightforward. Paste your text into the input area. Choose what to do with em dashes (and usually en dashes): replace with hyphen (-), replace with comma (,), replace with space, or remove with no replacement. Some tools let you choose separately for em dash vs en dash; others replace both with the same character. Click the button to process; the result appears in the output area. Copy the cleaned text for use in your document, URL, or code. All processing happens in your browser—nothing is sent to our servers, so your content stays private.</p>
        <p>The tool does not rewrite or paraphrase. It only finds and replaces the dash characters. Your words and sentence structure stay the same; only the problematic punctuation is normalized. Always review the output to ensure the replacement fits your context (e.g., a hyphen may read differently than a comma in some sentences).</p>

        <h2>When to Use an Em Dash Remover: Use Cases</h2>
        <p><strong>Content management and publishing:</strong> Before pasting articles or product descriptions into WordPress, Shopify, or another CMS, run the text through an em dash remover so titles, meta descriptions, and body copy use only standard characters. That reduces encoding and display issues and keeps SEO meta fields clean.</p>
        <p><strong>URLs and slugs:</strong> If you copy a headline or phrase into a URL slug and it contains an em dash, the link may break or encode oddly. Replace em dashes with hyphens before generating slugs so URLs are consistent and shareable.</p>
        <p><strong>CSV and data import:</strong> Fields that contain em or en dashes can sometimes cause import errors or display incorrectly in spreadsheets and databases. Use the em dash remover to normalize those fields before import.</p>
        <p><strong>Code and configuration:</strong> Strings in code or config files that contain em or en dashes can cause parsing or display bugs. Replace them with standard hyphens or remove them so the code runs and displays correctly.</p>
        <p><strong>Email and plain text:</strong> Some email clients or plain-text systems do not render em dashes well. Replacing them with hyphens or commas keeps the message readable and professional.</p>
        <p><strong>Accessibility and screen readers:</strong> In some contexts, standard hyphens are announced more predictably than em dashes. Replacing em dashes can improve consistency for assistive technology.</p>

        <h2>Replace Em Dash with Hyphen or Comma: Which to Choose?</h2>
        <p>For most technical and SEO use cases, replacing em dash with hyphen (-) is the safest choice. Hyphens are ASCII, work in URLs and filenames, and are widely supported. For prose where you want to keep a pause or list-like break, replacing em dash with comma (,) often preserves the rhythm. Replacing with a space can work when the dash was used as a separator; removing with no replacement is useful when the dash was decorative or you want no character in its place. Choose based on where the text will go: URLs and code favor hyphens; readable copy may favor commas or hyphens depending on style.</p>

        <h2>Step-by-Step: How to Remove Em Dashes From Text</h2>
        <p><strong>Step 1:</strong> Copy the text that contains em dashes or en dashes (e.g., from Word, PDF, or a web page). <strong>Step 2:</strong> Open the em dash remover online tool and paste the text into the input box. <strong>Step 3:</strong> Choose your replacement: hyphen, comma, space, or remove. If the tool has separate options for em and en dashes, set both. <strong>Step 4:</strong> Run the tool. The output area shows your text with em dashes and en dashes replaced or removed. <strong>Step 5:</strong> Copy the result and paste it into your CMS, URL field, code, or document. Your text is now free of em dashes and compatible with plain-text and technical systems.</p>

        <h2>Em Dash Remover vs Find and Replace</h2>
        <p>You could use a generic find-and-replace tool to replace the em dash character (—) with a hyphen. An em dash remover is built for this single job: it typically finds both em and en dashes, handles different Unicode representations if needed, and gives you one-click options (hyphen, comma, space, remove) without your having to copy the exact dash character into a find field. For quick, repeatable cleanup, the dedicated em dash remover is faster and less error-prone.</p>

        <h2>Best Practices and Privacy</h2>
        <p>Always review the output after replacing em dashes. In some sentences, a comma reads better than a hyphen (or vice versa); adjust manually if needed. For meta descriptions and title tags, prefer hyphens for consistency with URLs and SEO. This em dash remover runs locally in your browser and does not store or upload your text—safe for confidential drafts, client copy, and proprietary content.</p>

        <h2>Conclusion</h2>
        <p>Em dashes and en dashes from Word, PDFs, and the web can break URLs, meta fields, code, and data imports. Use this free em dash remover online to replace or remove em dashes in one click, with options for hyphen, comma, space, or removal. For more text cleanup—extra spaces, line breaks, or HTML—combine it with our remove whitespace and remove line breaks tools for a full workflow.</p>
      </div>
    </section>
  );
}

export default async function EmDashRemoverPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What does the em dash remover do?', answer: 'The em dash remover finds every em dash (—) and en dash (–) in your text and replaces them with a character you choose—such as a hyphen, comma, or space—or removes them entirely. It helps normalize text copied from Word, PDFs, or the web so it works in plain text, URLs, code, and content management systems without encoding or display issues.' },
    { category: 'General', question: 'Is the em dash remover free?', answer: 'Yes. This em dash remover online tool is free to use. You can paste your text, choose a replacement (hyphen, comma, space, or remove), run the tool, and copy the result without creating an account. All processing runs in your browser.' },
    { category: 'Technical', question: 'What is an em dash?', answer: 'An em dash (—) is a long horizontal dash, roughly the width of the letter “m,” used in writing for pauses, asides, or emphasis. It can cause compatibility issues in plain text, URLs, filenames, CSV data, and code, which is why many writers and editors use an em dash remover to replace it with a standard hyphen or comma.' },
    { category: 'Technical', question: 'What is the difference between em dash and en dash?', answer: 'An em dash (—) is longer and is often used for breaks or asides in a sentence. An en dash (–) is shorter and is commonly used for ranges (e.g., 2020–2024) or compound modifiers. A good em dash remover or em dash replacer tool can find and replace both in one pass so your text is fully normalized.' },
    { category: 'Usage', question: 'How do I remove em dashes from text?', answer: 'Paste your text into the em dash remover, choose whether to replace em dashes with a hyphen, comma, space, or remove them with no replacement, then run the tool. Copy the cleaned result for use in your document, URL, CMS, or code. The process takes seconds and runs entirely in your browser.' },
    { category: 'Usage', question: 'Can I replace em dashes with hyphens?', answer: 'Yes. Most em dash remover tools let you replace em dashes and often en dashes with a hyphen, comma, space, or no character. Replacing em dash with hyphen is the most common choice for URLs, filenames, and technical content because hyphens are standard ASCII and work everywhere.' },
    { category: 'Formatting', question: 'Why do em dashes cause problems in plain text?', answer: 'Em dashes are Unicode characters that can break URLs, filenames, CSV parsing, and code in systems that expect only ASCII or standard punctuation. Some email clients and plain-text systems do not display them correctly. Using an em dash remover to replace them with hyphens or commas keeps your text compatible across platforms and avoids validation or encoding errors.' },
    { category: 'Formatting', question: 'Will the tool change my words or meaning?', answer: 'No. The em dash remover only finds and replaces the dash characters (— and –). It does not rewrite, paraphrase, or alter your words or sentence structure. Your meaning and wording stay the same; only the problematic punctuation is normalized for plain-text and technical use.' },
    { category: 'SEO', question: 'Should I replace em dashes in meta descriptions?', answer: 'For meta descriptions and title tags, replacing em dashes with hyphens is often safer. Plain ASCII avoids encoding issues in search snippets and helps crawlers and displays behave consistently. In body content, em dashes are fine for readability; for SEO meta fields, an em dash remover keeps everything clean and compatible.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'No. The em dash remover processes text locally in your browser. Your content is not uploaded to our servers or stored. You can safely use it for confidential drafts, client copy, and proprietary content without privacy concerns.' },
    { category: 'Workflow', question: 'Can I use the em dash remover for CSV or data?', answer: 'Yes. If your CSV or database fields contain em or en dashes and you need consistent delimiters or plain characters for import or display, paste the content into the tool, replace dashes with hyphens or commas, and paste the result back. This avoids import errors and keeps data consistent.' },
    { category: 'Technical', question: 'Does the tool handle en dashes too?', answer: 'Many em dash remover tools also find and replace en dashes (–) in the same pass. Check the tool options to replace or remove both em and en dashes at once, so you do not need to run two separate steps for full punctuation normalization.' },
    { category: 'Use cases', question: 'When should I remove em dashes?', answer: 'Remove or replace em dashes when pasting into plain-text fields, URLs, slugs, code, CSV, or any system that does not support or display them correctly. For print or web body copy where typography is preserved, keeping em dashes is often fine; for technical and SEO fields, use an em dash remover for consistency.' },
    { category: 'General', question: 'What can I replace em dashes with?', answer: 'Common replacements are hyphen (-), comma (,), or space. Some tools also let you choose “remove” so the dash is deleted with no replacement. For URLs and code, hyphen is usually best; for readable prose, comma or hyphen can both work depending on your style guide.' },
    { category: 'Compatibility', question: 'Does the em dash remover work on mobile?', answer: 'Yes. The em dash remover runs in your browser, so it works on phones and tablets. You can paste text, choose your replacement option, run the tool, and copy the result without installing an app.' },
    { category: 'Limits', question: 'Is there a text length limit?', answer: 'For typical documents and articles there is no strict limit. Very long texts (e.g., full books) may take a few seconds to process. If you hit performance limits, process the text in chunks and combine the results.' },
    { category: 'Formatting', question: 'Will it affect other punctuation?', answer: 'No. The tool targets only em dashes and optionally en dashes. Other punctuation such as periods, commas, and standard hyphens is left unchanged. You would need a separate find-and-replace if you want to change other characters.' },
    { category: 'Workflow', question: 'Can I use it for WordPress or CMS content?', answer: 'Yes. Paste content from Word or PDF into the em dash remover, replace with hyphen or comma, then paste into your WordPress or other CMS. This helps avoid encoding or display issues in titles, meta descriptions, and body fields, and keeps slugs and URLs clean.' },
    { category: 'Technical', question: 'Why does copy-paste add em dashes?', answer: 'Microsoft Word and many design tools automatically convert double hyphens (--) to em dashes. When you copy that text, the em dash character comes with it. Using an em dash remover to replace it normalizes the text for plain-text use, URLs, and code.' },
    { category: 'Use cases', question: 'Is the em dash remover useful for code?', answer: 'Yes. If a string, comment, or config value contains em or en dashes and causes parsing or display issues, paste it into the tool, replace with hyphen or remove, and use the cleaned version in your code. This avoids encoding bugs and keeps strings portable.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The em dash remover runs entirely in your browser. Open the page, paste your text, choose options, and run. No download, plugin, or account is required.' },
    { category: 'Accessibility', question: 'Does replacing em dashes help screen readers?', answer: 'Screen readers typically handle em dashes, but replacing them with hyphens can make punctuation more consistent for some users and systems. If your audience or platform benefits from plain ASCII punctuation, using an em dash remover is a simple way to improve consistency.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<EmDashRemoverTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the Em Dash Remover.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

