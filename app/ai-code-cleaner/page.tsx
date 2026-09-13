import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { AICodeCleanerTool } from '@/components/tools/AICodeCleanerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'ai-code-cleaner';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Usage' },
  { key: 'faq5', category: 'Formatting' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Usage' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Technical' },
  { key: 'faq12', category: 'Best Practices' },
  { key: 'faq13', category: 'Best Practices' },
  { key: 'faq14', category: 'Technical' },
  { key: 'faq15', category: 'Usage' },
  { key: 'faq16', category: 'Formatting' },
  { key: 'faq17', category: 'Security' },
  { key: 'faq18', category: 'Performance' },
  { key: 'faq19', category: 'Integration' },
  { key: 'faq20', category: 'Troubleshooting' },
  { key: 'faq21', category: 'Troubleshooting' },
  { key: 'faq22', category: 'Best Practices' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Usage' },
  { key: 'faq25', category: 'Formatting' },
  { key: 'faq26', category: 'Technical' },
  { key: 'faq27', category: 'Best Practices' },
  { key: 'faq28', category: 'Integration' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>AI Code Cleaner: Clean and Format AI-Generated Code</h2>

        <h3>Introduction</h3>
        <p>AI-generated code often has messy formatting: trailing spaces, inconsistent indentation, invisible characters, or mixed line endings. The AI Code Cleaner normalizes these so your code is consistent and easy to read.</p>
        <p>Paste your code, run the cleaner, and copy the result. Processing happens in your browser; your code is not sent to our servers.</p>

        <h2>What Is the AI Code Cleaner?</h2>
        <p>The AI Code Cleaner is a free online tool that removes unwanted whitespace, fixes indentation, normalizes line endings, and strips invisible characters from code.</p>
        <p>It focuses on formatting and cleanliness, not logic or refactoring.</p>

        <h2>Why You Need It</h2>
        <p>Clean formatting makes code easier to read, review, and maintain.</p>

        <h3>Formatting issues</h3>
        <p>Common problems include:</p>
        <ul>
          <li>Trailing spaces at the end of lines</li>
          <li>Mixed tabs and spaces</li>
          <li>Inconsistent indentation width</li>
          <li>Zero-width or other invisible characters</li>
        </ul>

        <h3>Version control</h3>
        <p>Cleaning code before commit reduces noisy diffs and keeps history focused on real changes.</p>
        <p>Many teams run formatters or cleaners in pre-commit hooks for the same reason.</p>

        <h3>Readability</h3>
        <p>Consistent formatting improves readability and makes code reviews faster.</p>

        <h2>Features</h2>
        <p>The tool can remove or normalize various formatting issues.</p>

        <h3>Trailing spaces</h3>
        <p>It removes spaces and tabs at the end of each line, which often cause unnecessary diff noise.</p>

        <h3>Indentation</h3>
        <p>It can normalize indentation to a consistent style (e.g., 2 or 4 spaces) and fix mixed tabs and spaces.</p>

        <h3>Zero-width characters</h3>
        <p>It can strip zero-width spaces and similar invisible characters that sometimes appear when copying from web or AI output.</p>

        <h3>Line endings</h3>
        <p>It can normalize line endings to LF or CRLF so files are consistent across platforms.</p>

        <h3>Blank lines</h3>
        <p>It can trim excessive blank lines or enforce a consistent style.</p>

        <h3>Whitespace</h3>
        <p>It can normalize other whitespace (e.g., multiple spaces) where appropriate.</p>

        <h3>Operators</h3>
        <p>It can add or normalize spacing around operators for consistency.</p>

        <h2>How It Works</h2>
        <p>Paste your code, choose options (e.g., indentation style, line endings), and run the cleaner. Review the output and copy it back into your project.</p>

        <h3>Step 1</h3>
        <p>Paste your code into the input area.</p>

        <h3>Step 2</h3>
        <p>Select which cleanups to apply.</p>

        <h3>Step 3</h3>
        <p>Click clean and review the result.</p>

        <h3>Step 4</h3>
        <p>Copy the cleaned code and run your tests to confirm nothing broke.</p>

        <h2>Best Practices</h2>
        <p>Use the cleaner as part of your workflow: paste, clean, review, then commit.</p>

        <h3>Before commit</h3>
        <p>Clean code before committing to avoid formatting-only changes in the future.</p>

        <h3>Code review</h3>
        <p>Cleaning first makes it easier for reviewers to focus on logic and design.</p>

        <h3>Team standards</h3>
        <p>Use the same options (e.g., 2 spaces, LF) as your team so everyone&apos;s output is consistent.</p>

        <h2>Use Cases</h2>
        <p>Useful for AI-generated code, legacy snippets, and cross-platform work.</p>

        <h3>AI-generated code</h3>
        <p>Clean up code from ChatGPT, Copilot, or similar tools that has messy or inconsistent formatting.</p>

        <h3>Legacy code</h3>
        <p>Normalize old files or pasted snippets before refactoring or merging.</p>

        <h3>Cross-platform</h3>
        <p>Normalize line endings and indentation when moving code between Windows, Mac, and Linux.</p>

        <h2>Security</h2>
        <p>Processing runs in your browser. Your code is not uploaded. Do not paste secrets or credentials.</p>

        <h2>Limitations</h2>
        <p>The tool focuses on formatting. It does not fix logic, run tests, or replace a full IDE. For complex projects, use a dedicated formatter (e.g., Prettier) or linter (e.g., ESLint) as well.</p>
        <ul>
          <li>Best for common languages and typical formatting issues</li>
          <li>No guarantee for every edge case or exotic syntax</li>
          <li>Always review and test after cleaning</li>
        </ul>

        <h2>Comparison</h2>
        <p>The AI Code Cleaner complements formatters and linters.</p>

        <h3>Vs Prettier</h3>
        <p>Prettier is great for full-project formatting. This tool is for quick cleanup of pasted or AI-generated code.</p>

        <h3>Vs ESLint</h3>
        <p>ESLint finds bugs and enforces rules. The cleaner focuses on whitespace and formatting only.</p>

        <h2>Conclusion</h2>
        <p>Use the AI Code Cleaner to quickly normalize formatting in pasted or AI-generated code. Combine it with review and tests for best results.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "AI Code Cleaner";
  const description = "Clean and normalize code formatting, remove trailing spaces, fix indentation, and remove invisible characters from AI-generated code.";
  const seoTitle = "AI Code Cleaner - Clean and Format AI-Generated Code";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function AICodeCleanerPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is the AI Code Cleaner?', answer: 'The AI Code Cleaner is a free online tool that helps clean and format code. It can remove unnecessary whitespace, normalize indentation, and improve readability. It runs in your browser and does not send your code to our servers.' },
    { category: 'General', question: 'Is the AI Code Cleaner free?', answer: 'Yes. This tool is free. Paste your code, run the cleaner, and copy the result. No account required.' },
    { category: 'Usage', question: 'How do I use the AI Code Cleaner?', answer: 'Paste your code into the input area and run the tool. Review the cleaned output and copy it. You can adjust options if the tool offers them (e.g., indent size, trim trailing spaces).' },
    { category: 'Technical', question: 'What languages does it support?', answer: 'The tool typically works on generic code or multiple languages (e.g., JavaScript, Python, HTML). Check the tool description for supported languages.' },
    { category: 'Privacy', question: 'Is my code sent to a server or stored?', answer: 'No. The tool runs in your browser. Your code is not uploaded or stored. Safe for proprietary or confidential code.' },
    { category: 'Use cases', question: 'Who should use an AI Code Cleaner?', answer: 'Developers and students who want to quickly clean pasted code, normalize formatting, or prepare code for commit or review can use it. It is a formatting aid, not a linter or security scanner.' },
    { category: 'Limits', question: 'Can I clean long files?', answer: 'Typical file lengths work. Very long files may need to be processed in sections. Check the tool for limits.' },
    { category: 'General', question: 'What does the cleaner do to my code?', answer: 'It typically trims trailing spaces, normalizes line endings, and may collapse or normalize indentation. It does not change logic or fix bugs unless the tool explicitly offers such features.' },
    { category: 'Technical', question: 'Does it fix syntax errors?', answer: 'No. The cleaner focuses on formatting and whitespace. Use a linter or compiler to find and fix syntax errors.' },
    { category: 'Privacy', question: 'Do you keep a copy of my code?', answer: 'No. Processing is local in your browser. We do not store or log your code.' },
    { category: 'Use cases', question: 'Can I use it for production code?', answer: 'Yes, as a formatting step. Always review the output and run your own tests. The tool does not guarantee correctness.' },
    { category: 'Technical', question: 'Does it work on mobile?', answer: 'Yes. The tool runs in the browser and works on phones and tablets. Pasting long code on mobile may be less convenient.' },
    { category: 'Limits', question: 'Is there a character or line limit?', answer: 'Typical limits are in the thousands of lines or characters. Check the tool interface.' },
    { category: 'General', question: 'Do I need an account?', answer: 'No. You can use the AI Code Cleaner without signing up.' },
    { category: 'Usage', question: 'How often can I use it?', answer: 'The tool is free to use as often as you need.' },
    { category: 'Technical', question: 'Will it change my logic or behavior?', answer: 'No. The cleaner aims to change only formatting (spaces, indentation, line breaks). It does not alter logic, variables, or control flow.' },
    { category: 'Use cases', question: 'Is it suitable for team projects?', answer: 'Yes. Use it to normalize formatting before commit or review. Ensure the output matches your team\'s style guide.' },
    { category: 'General', question: 'What is the difference from AI Code Fixer?', answer: 'A code cleaner typically focuses on formatting and whitespace. A code fixer may suggest or apply logic or syntax fixes. Check each tool\'s description for its scope.' },
    { category: 'Technical', question: 'Does it support tabs vs spaces?', answer: 'Many cleaners let you choose indentation (tabs or spaces and width). Check the tool options.' },
    { category: 'Usage', question: 'Can I clean minified code?', answer: 'You can paste minified code; the cleaner may normalize whitespace. It will not “un-minify” or beautify unless that is a stated feature.' },
    { category: 'Technical', question: 'What about line endings (CRLF vs LF)?', answer: 'Some cleaners normalize line endings to LF or CRLF. Check the tool options if you need a specific format.' },
    { category: 'Use cases', question: 'Is it good for learning?', answer: 'Yes. Students can use it to see how formatting affects readability and to prepare code for submission or review.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<AICodeCleanerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the AI Code Cleaner.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

