import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ExtractNumbersFromTextTool } from '@/components/tools/ExtractNumbersFromTextTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 86400;

const toolSlug = 'extract-numbers-from-text';

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Extract Numbers From Text";
  const description = "Extract all numbers from text, including integers and decimals. Options for ordering, uniqueness, and delimiters.";
  const seoTitle = undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What does the Extract Numbers From Text tool do?',
    answer:
      'This tool scans your input text and extracts all numeric values, including integers and decimal numbers. It identifies numbers regardless of surrounding text, punctuation, or formatting. The extracted numbers can be displayed in their original order, sorted numerically, or filtered to show only unique values. You can also choose how the numbers are separated in the output: commas, spaces, or newlines.',
  },
  {
    category: 'General',
    question: 'How is my text processed?',
    answer:
      'All extraction happens entirely in your browser using pattern matching. No text is sent to servers, stored, or logged. The tool uses regular expressions to identify numeric patterns in your input and extracts them locally. When you close the page or clear the input, all data is removed from memory.',
  },
  {
    category: 'General',
    question: 'Is this tool free to use?',
    answer:
      'Yes, the Extract Numbers From Text tool is completely free with no registration, subscriptions, or usage limits. You can extract numbers from as much text as needed without restrictions.',
  },
  {
    category: 'Usage',
    question: 'What types of numbers are extracted?',
    answer:
      'The tool extracts integers (whole numbers like 42, -15, 1000) and decimal numbers (like 3.14, -0.5, 99.99). It recognizes both positive and negative numbers. Numbers can appear anywhere in the text, whether standalone, within sentences, or mixed with other characters.',
  },
  {
    category: 'Usage',
    question: 'How does the "Keep original order" option work?',
    answer:
      'When enabled, extracted numbers appear in the same sequence they were found in your input text. When disabled, numbers are sorted from smallest to largest (ascending order). This option is useful when you need to preserve the context or sequence of numbers as they appeared in the original text.',
  },
  {
    category: 'Usage',
    question: 'What does "Unique numbers only" do?',
    answer:
      'When enabled, the tool removes duplicate numbers and shows each number only once in the output. This is useful when you want to see all distinct values without repetition. When disabled, all numbers are shown, including duplicates, which helps preserve the full count of occurrences.',
  },
  {
    category: 'Usage',
    question: 'How do I choose the delimiter?',
    answer:
      'You can select how extracted numbers are separated: comma (numbers separated by commas and spaces), space (single space between numbers), or newline (each number on its own line). Choose the format that works best for your intended use, whether copying to spreadsheets, lists, or other applications.',
  },
  {
    category: 'Usage',
    question: 'Can I extract numbers from formatted text or tables?',
    answer:
      'Yes, the tool works with any text format including formatted documents, tables copied as text, or structured data. As long as numbers are present in the text, they will be extracted. However, complex formatting or hidden characters may affect results, so plain text usually works best.',
  },
  {
    category: 'Technical',
    question: 'How does the extraction algorithm work?',
    answer:
      'The tool uses regular expression pattern matching to identify numeric sequences. It looks for patterns that match integers (with optional negative signs) and decimal numbers (with decimal points). The pattern recognizes numbers even when they are adjacent to letters, punctuation, or other characters. This approach is fast and works well for most common number formats.',
  },
  {
    category: 'Technical',
    question: 'Does it handle scientific notation or other number formats?',
    answer:
      'The basic extraction focuses on standard integers and decimals. Scientific notation (like 1.5e10) and other specialized formats may not be fully recognized depending on the pattern. For best results, use standard decimal notation. If you need specialized formats, consider preprocessing your text or using more advanced extraction tools.',
  },
  {
    category: 'Technical',
    question: 'What happens with currency symbols or units?',
    answer:
      'Currency symbols and units are ignored during extraction. For example, "$15.99" extracts as "15.99", and "100kg" extracts as "100". The tool focuses on the numeric value itself, not the formatting or units. This makes it easy to extract pure numbers regardless of how they are presented in the text.',
  },
  {
    category: 'Technical',
    question: 'How are negative numbers handled?',
    answer:
      'Negative numbers are recognized by the minus sign (-) immediately preceding the number. For example, "-42" and "-3.14" are extracted as negative values. The tool preserves the sign in the output, so negative numbers remain negative in the extracted list.',
  },
  {
    category: 'Technical',
    question: 'Does it extract numbers from URLs or email addresses?',
    answer:
      'Yes, numbers within URLs, email addresses, or other identifiers are extracted. For example, "example.com/page123" would extract "123". If you want to exclude certain patterns, you may need to preprocess your text or manually filter the results after extraction.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why are some numbers missing from the output?',
    answer:
      'Numbers may be missed if they are in non-standard formats, contain special characters, or are part of complex expressions. Very large numbers or numbers with unusual formatting might not match the standard pattern. Try checking the input text for formatting issues or hidden characters that might interfere with extraction.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does the output include unexpected values?',
    answer:
      'The extraction pattern may pick up sequences that look like numbers but are part of other text. For example, version numbers, codes, or identifiers might be extracted. Review the output and manually filter if needed. The tool prioritizes finding all numeric patterns, which may include some false positives in complex text.',
  },
  {
    category: 'Troubleshooting',
    question: 'How do I extract only whole numbers (no decimals)?',
    answer:
      'The tool extracts both integers and decimals together. If you need only whole numbers, you can manually filter the output or use the sorted option to group similar values. For more precise control, consider preprocessing your text to remove decimal points before extraction.',
  },
  {
    category: 'Privacy',
    question: 'Is my text stored or transmitted?',
    answer:
      'No. All processing occurs locally in your browser. No data is sent to servers, stored in databases, or transmitted over the network. Your text remains on your device throughout the extraction process. This makes the tool suitable for sensitive or confidential documents.',
  },
  {
    category: 'Privacy',
    question: 'Can I use this for confidential financial data?',
    answer:
      'Yes, as long as your local environment is secure. The tool does not transmit data, but you should still follow your organization policies for handling sensitive information. Clear the input when finished if using a shared device. The tool itself provides privacy, but device security remains your responsibility.',
  },
  {
    category: 'Best Practices',
    question: 'How should I prepare text for best results?',
    answer:
      'Use clean, plain text without complex formatting or hidden characters. Remove HTML tags, special formatting, or markup before extraction. If numbers are in tables, copy them as plain text. Consistent formatting helps ensure accurate extraction of all numeric values.',
  },
  {
    category: 'Best Practices',
    question: 'What workflow should I follow for extracting numbers?',
    answer:
      'First, paste or type your text into the input field. Review the extracted numbers in the output. Adjust options like ordering, uniqueness, and delimiter based on your needs. Copy the output and verify it contains all expected numbers. Use the output in your intended application, whether spreadsheets, analysis tools, or reports.',
  },
  {
    category: 'Applications',
    question: 'Can I use this for data analysis?',
    answer:
      'Yes, the tool is useful for extracting numeric data from reports, logs, or documents for further analysis. You can export the extracted numbers to spreadsheets or analysis tools. The delimiter options make it easy to format numbers for different applications. However, for complex data analysis, dedicated data extraction tools may be more appropriate.',
  },
  {
    category: 'Applications',
    question: 'Is this suitable for extracting prices or financial data?',
    answer:
      'Yes, the tool can extract prices, amounts, and other financial numbers from text. However, it does not preserve currency symbols or context, so you may need to cross-reference with the original text if currency information is important. For structured financial data, consider using specialized financial parsing tools.',
  },
  {
    category: 'Applications',
    question: 'Can I use this to extract phone numbers or IDs?',
    answer:
      'The tool extracts numeric sequences, which may include phone numbers, IDs, or codes if they are formatted as numbers. However, it does not validate or format these as phone numbers or IDs—it simply extracts the numeric values. For phone number extraction with formatting, use specialized phone number parsing tools.',
  },
  {
    category: 'Limitations',
    question: 'What are the limitations of this tool?',
    answer:
      'The tool focuses on standard integer and decimal number formats. It may not handle scientific notation, fractions, or complex mathematical expressions perfectly. It does not preserve context, units, or formatting. Very large numbers are supported, but extremely long inputs may take longer to process.',
  },
  {
    category: 'Limitations',
    question: 'Does it handle numbers in different languages or formats?',
    answer:
      'The tool recognizes standard Arabic numerals (0-9) and decimal points. It may not handle numbers written in words, Roman numerals, or non-Western number systems. For international number formats, ensure your text uses standard numeric notation for best results.',
  },
  {
    category: 'Compatibility',
    question: 'Does it work on mobile devices?',
    answer:
      'Yes, the tool is fully responsive and works on smartphones and tablets. The interface adapts to smaller screens, and all features function on mobile browsers. You can extract numbers from text on any device with a modern web browser.',
  },
  {
    category: 'Compatibility',
    question: 'Can I use the output with spreadsheet applications?',
    answer:
      'Yes, the comma-delimited output is ideal for pasting into spreadsheet applications like Excel or Google Sheets. Each number will typically appear in a separate cell. The newline option is useful for single-column lists, while space-separated output works for simple text lists.',
  },
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 space-y-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2 className="text-2xl font-semibold text-slate-900">Extract Numbers From Text: Complete Guide to Number Extraction</h2>
      
      <p className="text-slate-700">
        Extracting numbers from text is a common task in data processing, analysis, and content management. Whether you need to pull 
        prices from product descriptions, extract measurements from technical documents, or isolate numeric data from mixed content, 
        automated number extraction saves time and reduces errors compared to manual copying. This guide explains how number extraction 
        works, the techniques used, and how to use online tools effectively for various use cases.
      </p>

      <p className="text-slate-700">
        Modern text processing relies on pattern matching algorithms to identify numeric sequences within larger text blocks. These 
        algorithms can distinguish numbers from letters, handle various number formats, and extract values while preserving or 
        transforming their order and uniqueness. Understanding these processes helps you use extraction tools more effectively and 
        interpret their results accurately.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">What Is Number Extraction?</h3>
      <p className="text-slate-700">
        Number extraction is the process of identifying and isolating numeric values from text that contains a mix of letters, numbers, 
        punctuation, and other characters. The extracted numbers can be integers (whole numbers like 42, -15, 1000) or decimal numbers 
        (like 3.14, -0.5, 99.99). The goal is to separate numeric data from surrounding text so it can be analyzed, processed, or 
        used in calculations.
      </p>
      <p className="text-slate-700">
        This process is different from parsing structured data formats like CSV or JSON, where numbers are already separated. Number 
        extraction works with unstructured or semi-structured text where numbers are embedded within sentences, paragraphs, or mixed 
        content. It is particularly useful for processing documents, logs, reports, or user-generated content where numeric data is 
        scattered throughout text.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">How Number Extraction Works</h3>
      <p className="text-slate-700">
        Number extraction typically uses regular expressions (regex) or pattern matching algorithms to identify numeric sequences. 
        The process involves several steps:
      </p>
      <ol className="list-inside list-decimal space-y-2 text-slate-700">
        <li><strong>Pattern recognition:</strong> The algorithm scans the text for sequences that match numeric patterns, such as digits, decimal points, and optional negative signs.</li>
        <li><strong>Boundary detection:</strong> It identifies where numbers start and end, distinguishing them from surrounding text, punctuation, or other characters.</li>
        <li><strong>Value extraction:</strong> Each identified numeric sequence is extracted as a separate value, preserving its original format (integer or decimal).</li>
        <li><strong>Post-processing:</strong> Extracted numbers can be sorted, deduplicated, or formatted according to user preferences.</li>
      </ol>
      <p className="text-slate-700">
        Regular expressions are particularly effective for this task because they can define precise patterns. For example, a pattern 
        might look for sequences of digits, optional decimal points, and optional negative signs, while excluding sequences that are 
        part of words or other non-numeric contexts.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Understanding Regular Expression Patterns</h3>
      <p className="text-slate-700">
        While you do not need to write regex patterns to use extraction tools, understanding the concept helps you interpret results 
        and troubleshoot issues. A typical pattern for extracting numbers might look like this:
      </p>
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4">
        <code className="text-sm">/-?\d+\.?\d*/g</code>
      </pre>
      <p className="text-slate-700">
        This pattern breaks down as follows:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>-?</strong> Optional negative sign (minus sign that may or may not be present)</li>
        <li><strong>\d+</strong> One or more digits (the main number part)</li>
        <li><strong>\.?</strong> Optional decimal point</li>
        <li><strong>\d*</strong> Zero or more digits after the decimal point</li>
        <li><strong>g</strong> Global flag (find all matches, not just the first)</li>
      </ul>
      <p className="text-slate-700">
        This pattern successfully matches integers (42, -15), decimals (3.14, -0.5), and numbers in various contexts. More complex 
        patterns can handle scientific notation, thousands separators, or other specialized formats, but basic patterns cover most 
        common use cases.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Number Formats and Edge Cases</h3>
      <p className="text-slate-700">
        Number extraction tools handle various formats, but some edge cases require special consideration:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Negative numbers:</strong> Recognized by a minus sign immediately before the number. Examples: -42, -3.14</li>
        <li><strong>Decimal numbers:</strong> Require a decimal point followed by at least one digit. Examples: 3.14, 0.5, 99.99</li>
        <li><strong>Leading zeros:</strong> Preserved in extraction (e.g., 007 extracts as 7, but 0.07 extracts as 0.07)</li>
        <li><strong>Currency symbols:</strong> Typically ignored, so "$15.99" extracts as 15.99</li>
        <li><strong>Units and labels:</strong> Ignored, so "100kg" extracts as 100</li>
        <li><strong>Phone numbers and IDs:</strong> Extracted as numeric sequences, but not validated or formatted</li>
      </ul>
      <p className="text-slate-700">
        Scientific notation (like 1.5e10) and fractions (like 1/2) may not be fully recognized by basic extraction patterns. 
        For these formats, specialized tools or preprocessing may be necessary.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Extraction Options and Their Effects</h3>
      <p className="text-slate-700">
        Most number extraction tools offer options to control how results are presented:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Keep original order:</strong> Preserves the sequence in which numbers appeared in the input text. Useful when order matters for context or analysis.</li>
        <li><strong>Sort numerically:</strong> Arranges numbers from smallest to largest. Helpful for finding minimum/maximum values or organizing data.</li>
        <li><strong>Unique only:</strong> Removes duplicates, showing each number only once. Useful for identifying distinct values or creating value lists.</li>
        <li><strong>Delimiters:</strong> Choose how numbers are separated: commas (for CSV), spaces (for simple lists), or newlines (for column data).</li>
      </ul>
      <p className="text-slate-700">
        These options help you format extracted numbers for different use cases. For example, comma-separated output works well for 
        spreadsheets, while newline-separated output is ideal for single-column lists or further processing.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Common Use Cases</h3>
      <p className="text-slate-700">
        Number extraction serves many practical purposes across different fields:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Data analysis:</strong> Extracting numeric data from reports, logs, or documents for statistical analysis or visualization.</li>
        <li><strong>Financial processing:</strong> Pulling prices, amounts, or transaction values from invoices, receipts, or financial statements.</li>
        <li><strong>Content management:</strong> Isolating measurements, quantities, or specifications from product descriptions or technical documentation.</li>
        <li><strong>Research and reporting:</strong> Extracting statistics, percentages, or numeric findings from research papers or articles.</li>
        <li><strong>Data cleaning:</strong> Separating numeric data from mixed-format content before importing into databases or analysis tools.</li>
        <li><strong>Quality control:</strong> Verifying that expected numbers are present in documents or identifying missing numeric values.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Best Practices for Number Extraction</h3>
      <p className="text-slate-700">
        Follow these guidelines to get accurate and useful results:
      </p>
      <ol className="list-inside list-decimal space-y-2 text-slate-700">
        <li><strong>Use clean text:</strong> Remove HTML tags, special formatting, or hidden characters before extraction for best results.</li>
        <li><strong>Verify results:</strong> Spot-check extracted numbers against the original text to ensure accuracy, especially for important data.</li>
        <li><strong>Choose appropriate options:</strong> Select ordering, uniqueness, and delimiter settings that match your intended use case.</li>
        <li><strong>Handle edge cases:</strong> Be aware of limitations with scientific notation, fractions, or non-standard formats.</li>
        <li><strong>Preserve context when needed:</strong> If number context matters, keep a copy of the original text alongside extracted values.</li>
      </ol>

      <h3 className="text-xl font-semibold text-slate-900">Limitations and Considerations</h3>
      <p className="text-slate-700">
        Number extraction tools have some limitations to be aware of:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Format limitations:</strong> Basic tools focus on standard integers and decimals. Scientific notation, fractions, or complex expressions may not be fully supported.</li>
        <li><strong>Context loss:</strong> Extracted numbers lose their surrounding context, units, or labels. You may need to cross-reference with original text.</li>
        <li><strong>False positives:</strong> Pattern matching may extract sequences that look like numbers but are part of codes, identifiers, or other text.</li>
        <li><strong>No validation:</strong> Tools extract numeric patterns but do not validate whether numbers are valid, reasonable, or in expected ranges.</li>
        <li><strong>Language limitations:</strong> Tools typically recognize Arabic numerals (0-9) and may not handle numbers written in words or other number systems.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Privacy and Security</h3>
      <p className="text-slate-700">
        When extracting numbers from sensitive or confidential text, consider privacy implications:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Client-side processing:</strong> Choose tools that process text locally in your browser without sending data to servers.</li>
        <li><strong>No storage:</strong> Verify that tools do not store or log your input text or extracted numbers.</li>
        <li><strong>Clear sensitive data:</strong> Clear the input field after extraction when working with confidential information, especially on shared devices.</li>
        <li><strong>Follow policies:</strong> Adhere to your organization policies for handling sensitive data, even when using privacy-focused tools.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Conclusion</h3>
      <p className="text-slate-700">
        Number extraction is a valuable technique for processing unstructured text and isolating numeric data. Modern tools use pattern 
        matching algorithms to quickly identify and extract numbers from mixed content, saving time compared to manual methods. 
        Understanding how extraction works, what formats are supported, and how to use extraction options helps you get accurate, 
        useful results for your specific needs.
      </p>
      <p className="text-slate-700">
        Whether you are analyzing data, processing financial documents, extracting measurements, or cleaning content, a reliable 
        number extraction tool provides the foundation for efficient numeric data processing. The tool on this page processes text 
        locally in your browser, ensuring privacy while delivering fast, accurate number extraction with flexible formatting options.
      </p>
    </div>
  </section>
);

export default async function ExtractNumbersFromTextPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}`;
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
  };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={schemaData} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ExtractNumbersFromTextTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Extract Numbers From Text FAQ</h2>
          <p className="text-slate-700">Common questions about extracting numbers from text, options, and usage.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}


