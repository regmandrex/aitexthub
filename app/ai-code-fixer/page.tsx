import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { AICodeFixerTool } from '@/components/tools/AICodeFixerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'ai-code-fixer';

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
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>AI Code Fixer: Fix Common Issues in AI-Generated Code</h2>

        <h3>Introduction</h3>
        <p>AI-generated code often has small but annoying issues: wrong indentation, mixed quotes, missing semicolons, or typos. Fixing these by hand is tedious. The AI Code Fixer helps you clean up that code quickly.</p>
        <p>Paste your code, click fix, and get corrected output. The tool runs in your browser so your code is not sent to any server.</p>
        <p>It supports common languages and focuses on formatting and obvious syntax fixes rather than deep refactoring.</p>

        <h2>What Is the AI Code Fixer?</h2>
        <p>The AI Code Fixer is a free online tool that analyzes pasted code and applies fixes for common formatting and syntax issues.</p>
        <p>It does not execute your code or change your logic—only indentation, quotes, brackets, and similar surface-level problems.</p>

        <h2>Why You Need It</h2>
        <p>AI code generators sometimes output inconsistent style or minor errors. Fixing these manually takes time.</p>

        <h3>Common issues</h3>
        <p>Typical problems include:</p>
        <ul>
          <li>Inconsistent indentation (tabs vs spaces, wrong width)</li>
          <li>Mixed single and double quotes</li>
          <li>Unclosed or mismatched brackets</li>
          <li>Missing or extra semicolons</li>
        </ul>

        <h3>Productivity</h3>
        <p>Using a fixer saves time so you can focus on logic and design instead of cleaning up formatting.</p>
        <p>It also helps keep code consistent when copying from different sources.</p>

        <h3>Quality</h3>
        <p>Consistent formatting improves readability and makes code easier to review and maintain.</p>

        <h2>Features</h2>
        <p>The tool can fix a range of common code issues.</p>

        <h3>Indentation</h3>
        <p>It normalizes indentation (e.g., 2 or 4 spaces) and fixes mixed tabs and spaces.</p>
        <p>This makes code easier to read and avoids editor-dependent display issues.</p>

        <h3>Quotes</h3>
        <p>It can normalize string quotes to a single style (single or double) where the language allows.</p>
        <p>Consistent quoting improves style and reduces mistakes.</p>

        <h3>Syntax</h3>
        <p>It can fix obvious syntax issues like missing semicolons in languages that use them, and similar small errors.</p>
        <p>It does not replace a full linter or compiler—use it for quick cleanup.</p>

        <h3>Brackets</h3>
        <p>It can fix mismatched or unclosed brackets, braces, and parentheses where possible.</p>

        <h3>Semicolons</h3>
        <p>It can add or normalize semicolons in languages that expect them (e.g., JavaScript, C-style languages).</p>

        <h3>Typos</h3>
        <p>It can correct common typos in keywords and identifiers when the intent is clear.</p>
        <p>Always review changes; automatic fixes are not guaranteed to be correct in every case.</p>

        <h2>How It Works</h2>
        <p>Paste your code into the input area, choose options if needed, and click the fix button. The tool analyzes the code and applies the selected fixes, then shows the result so you can copy it back.</p>

        <h3>Step 1</h3>
        <p>Paste or type your code into the input box.</p>

        <h3>Step 2</h3>
        <p>Select which fixes to apply (e.g., indentation, quotes).</p>

        <h3>Step 3</h3>
        <p>Click the fix button to process the code.</p>

        <h3>Step 4</h3>
        <p>Review the output and copy it into your project. Run your tests to confirm everything still works.</p>

        <h2>Best Practices</h2>
        <p>Use the fixer as part of a normal workflow: paste, fix, then review and test.</p>

        <h3>Be selective</h3>
        <p>Turn on only the fixes you need (e.g., indentation only) if you want to avoid broader changes.</p>

        <h3>Review</h3>
        <p>Always skim the result. Automated fixes can occasionally change behavior in edge cases.</p>

        <h3>Testing</h3>
        <p>After applying fixes, run your tests or build to ensure nothing broke.</p>

        <h2>Use Cases</h2>
        <p>The tool is useful in several situations.</p>

        <h3>AI-generated code</h3>
        <p>Clean up code from ChatGPT, Copilot, or other AI tools that has formatting or small syntax issues.</p>

        <h3>Quick fixes</h3>
        <p>Fix indentation, quotes, or brackets in snippets before committing or sharing.</p>

        <h3>Learning</h3>
        <p>See how consistent formatting and small syntax fixes improve code quality.</p>

        <h2>Security</h2>
        <p>Processing runs in your browser. Your code is not uploaded to our servers.</p>
        <p>Do not paste secrets, keys, or passwords. Prefer sanitized or sample code when trying the tool.</p>

        <h2>Limitations</h2>
        <p>The tool is not a full IDE or linter. Limitations include:</p>
        <ul>
          <li>Best results with common languages and straightforward code</li>
          <li>No guarantee that every fix is correct in all contexts</li>
          <li>Complex refactoring or logic changes are out of scope</li>
        </ul>

        <h2>Comparison</h2>
        <p>The AI Code Fixer complements linters and formatters.</p>

        <h3>Vs linters</h3>
        <p>Linters report issues and enforce rules; the fixer applies concrete formatting and small syntax fixes. Use both for best results.</p>

        <h3>Vs formatters</h3>
        <p>Dedicated formatters (e.g., Prettier) are great for full-project style. This tool is for quick, one-off cleanup of pasted code.</p>

        <h2>Conclusion</h2>
        <p>The AI Code Fixer helps you quickly fix common formatting and syntax issues in pasted or AI-generated code. Use it to save time and keep code tidy, and always review and test the output.</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "AI Code Fixer";
  const description = "Fix common code issues, syntax errors, indentation problems, and formatting inconsistencies in AI-generated code.";
  const seoTitle = "AI Code Fixer - Fix Common Issues in AI-Generated Code";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function AICodeFixerPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<AICodeFixerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions and answers about the AI Code Fixer.
          </p>
        </div>

        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed
          return (
            <>
              <FAQSection items={pageFaqs} />
              <FaqJsonLd faqs={pageFaqs} />
            </>
          );
        })()}
      </ToolPageShell>
    </>
  );
}
