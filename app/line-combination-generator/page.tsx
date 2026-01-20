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
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'line-combination-generator';

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Line Combination Generator - Complete Guide</h2>
      
      <h2>Introduction</h2>
      <p>
        A line combination generator is a specialized tool that creates all possible combinations of text lines while preserving line structure and formatting. Unlike regular combination generators that output comma-separated values, a line combination generator maintains the multi-line nature of your input, making it perfect for combining paragraphs, code snippets, email templates, or any text where line breaks matter. This tool is essential for content creators, developers, and marketers who need to explore all possible ways to combine lines of text systematically.
      </p>
      <p>
        The line combination generator solves a specific problem: when you need to combine lines of text in every possible way while keeping the original line structure intact. This is crucial for scenarios like A/B testing email content, generating documentation variations, creating code template combinations, or exploring dialogue combinations in scripts. The tool automatically handles line break preservation, delimiter configuration, and output formatting, saving hours of manual work.
      </p>
      <p>
        Whether you're a content marketer creating email campaign variations, a developer generating code template combinations, or a writer exploring narrative possibilities, the line combination generator provides a systematic approach to text combination. The tool runs entirely in your browser for privacy and speed, generates formatted output ready for immediate use, and offers extensive customization options for different workflows.
      </p>

      <h2>What Are Line Combinations?</h2>
      <p>
        Line combinations are selections of lines from your input text where order doesn't matter, but line structure is preserved. Each combination maintains the original line breaks and formatting, creating multi-line text blocks rather than single-line comma-separated values. This distinction makes line combinations ideal for text-based content where structure matters.
      </p>
      <p>
        The key difference from regular combinations is line preservation. A regular combination generator might output "Paragraph 1, Paragraph 2, Paragraph 3" as a single line. A line combination generator outputs the same content with line breaks intact, creating properly formatted multi-line text. This matters for code generation, email templates, documentation, and any application where line structure affects readability or functionality.
      </p>
      <p>
        Line breaks matter in many contexts. Code snippets require proper line structure to function correctly. Email templates need line breaks for formatting and readability. Documentation benefits from structured line combinations that maintain readability. Lists and structured data rely on line breaks for proper interpretation. The line combination generator ensures these structural elements are preserved throughout the combination process.
      </p>
      <p>
        Examples of line combinations include combining paragraphs for content variations, merging code blocks for template generation, creating email template combinations for A/B testing, generating documentation variations with different section combinations, and exploring dialogue combinations in scripts. Each example benefits from maintaining line structure rather than flattening to single-line format.
      </p>

      <h2>How the Line Combination Generator Works</h2>
      <p>
        The line combination generator processes your input line by line, treating each line as a distinct item for combination purposes. You enter lines of text in the input box, with each line on a separate row. The tool automatically trims whitespace and filters empty lines, then uses these lines as the basis for combination generation.
      </p>
      <p>
        Input formatting requirements are simple: enter one line of text per row in the input box. Each line can be a sentence, paragraph, code statement, or any text block. Lines can have different lengths—the tool handles variable-length lines seamlessly. Empty lines are automatically filtered out, so you can paste formatted text directly without extensive cleanup.
      </p>
      <p>
        Line breaks are preserved in the output through the delimiter configuration. By default, lines within each combination are separated by newlines, maintaining the multi-line structure. You can customize this delimiter to use tabs, custom text, or special characters. The join sets option controls how different combinations are separated, with a default of double newline with separator for clear distinction.
      </p>
      <p>
        Output formatting options provide extensive control. Prefix and suffix options add text before and after each combination, useful for labeling or adding metadata. Delimiters control line separation within combinations—use newlines for standard formatting, or custom text for specific needs. The join sets option determines combination separation, with options ranging from simple newlines to custom separators like "---" for clear section breaks.
      </p>
      <p>
        Prefix and suffix functionality works identically to the regular combination generator but applies to multi-line combinations. You can prefix each combination with labels like "Template " or "Version ", and suffix with status indicators or formatting markers. Special characters like \\x insert actual newlines, enabling complex multi-line prefixes and suffixes for structured output.
      </p>
      <p>
        Delimiter options between lines control how lines are separated within each combination. The default newline creates standard multi-line text, but you can use tabs for tab-separated formats, custom text for specific separators, or special characters for advanced formatting. This flexibility lets you create output formats suitable for code generation, structured data, or human-readable text.
      </p>
      <p>
        Join sets configuration determines how different combinations are separated in the output. The default uses double newline with separator text (---) for clear visual distinction between combinations. You can customize this to use single newlines, custom separators, or special formatting. The join sets option works with download and copy functions, ensuring your preferred format is maintained throughout the workflow.
      </p>

      <h2>Use Cases and Applications</h2>
      <p>
        Content creation benefits significantly from line combination generators. Writers can combine paragraphs in different ways to explore narrative variations, test different content structures, or create multiple versions of articles. The tool systematically generates all possible paragraph combinations, helping writers discover new content arrangements and test different flow patterns. This is particularly valuable for A/B testing content variations or exploring alternative narrative structures.
      </p>
      <p>
        Email marketing teams use line combination generators to create email template combinations for A/B testing. By combining different subject lines, body paragraphs, and call-to-action sections, marketers can systematically explore all possible email variations. This helps identify high-performing combinations, test messaging strategies, and optimize campaign performance. The line-preserving format ensures emails maintain proper formatting and readability.
      </p>
      <p>
        Code generation applications leverage line combinations to create template variations. Developers can combine code snippets, function definitions, or configuration blocks to generate multiple code templates. This is valuable for creating boilerplate code, exploring implementation variations, or generating test code with different component combinations. The preserved line structure ensures generated code maintains proper formatting and syntax.
      </p>
      <p>
        Documentation creation uses line combinations to explore different section arrangements. Technical writers can combine introduction paragraphs, feature descriptions, and usage examples to create documentation variations. This helps identify optimal information organization, test different explanation sequences, and create multiple documentation versions for different audiences. The structured output maintains readability and proper formatting.
      </p>
      <p>
        Translation workflows benefit from line combination generators when combining translated segments. Translators can combine different translation variations of sentences or paragraphs to explore linguistic options. This helps identify optimal phrasing, test different translation approaches, and create multiple translation versions. The line-preserving format maintains translation structure and context.
      </p>
      <p>
        Copywriting applications use line combinations for A/B testing content variations. Copywriters can combine headlines, body copy, and call-to-action text to systematically explore messaging combinations. This helps identify high-converting copy, test different persuasion strategies, and optimize marketing content. The tool's systematic approach ensures no combination is overlooked in the testing process.
      </p>
      <p>
        Data processing uses line combinations to merge structured data lines. Analysts can combine different data rows, log entries, or record lines to explore data relationships. This helps identify patterns, test data combinations, and generate analysis variations. The line-preserving format maintains data structure and enables proper parsing of combined results.
      </p>
      <p>
        Script writing benefits from line combination generators when exploring dialogue combinations. Screenwriters can combine different dialogue lines, scene descriptions, or narrative blocks to explore story variations. This helps test different narrative flows, explore alternative story structures, and create multiple script versions. The preserved line structure maintains script formatting and readability.
      </p>

      <h2>Advanced Features</h2>
      <p>
        Multiple input handling processes each line independently, allowing you to combine lines from different sources or contexts. The tool treats each input line as a distinct item, regardless of length or content. This enables combining paragraphs of different lengths, code blocks of varying complexity, or text segments from different sources. The flexible input handling accommodates diverse text combination scenarios.
      </p>
      <p>
        Line count display shows the number of lines in your input, helping you understand combination scope before generation. The tool calculates and displays total lines, combination size, and expected combination count. This information helps you plan generation, estimate output size, and make informed decisions about whether to proceed with large combination sets. The count updates automatically as you modify input.
      </p>
      <p>
        Prefix and suffix per combination add context to each generated combination. Prefixes appear before every combination, useful for labeling like "Template " or "Version ". Suffixes append text after each combination, perfect for status indicators or formatting markers. Both support special characters for advanced formatting. This enables creating numbered lists, structured data, or formatted reports directly from generator output.
      </p>
      <p>
        Custom delimiters provide fine-grained control over line separation within combinations. You can use newlines for standard formatting, tabs for tab-separated formats, custom text for specific separators, or special characters for advanced formatting. The delimiter choice affects output structure, readability, and compatibility with different systems. Experiment with different delimiters to find formats that work best for your use case.
      </p>
      <p>
        Join sets with separators control how different combinations are separated in output. The default uses double newline with separator text for clear visual distinction. You can customize this to use single newlines, custom separators, or special formatting. The join sets option works with download and copy functions, ensuring consistent formatting throughout your workflow. This flexibility enables creating output suitable for various applications.
      </p>
      <p>
        Download options save all combinations to a text file instantly, essential for large result sets. The download creates a plain text file with your specified formatting, ready for import into other tools. File naming is automatic but can be renamed after download. The file uses standard line endings compatible with all operating systems. Download is faster than copying for large sets and preserves formatting exactly.
      </p>
      <p>
        Special character support extends formatting capabilities beyond standard text. Enter \\x in any field to insert newlines, \\t for tabs, or \\n as alternative newline syntax. This enables complex formatting scenarios like structured data, code templates, or formatted reports. Special character processing happens automatically, requiring no additional configuration. This feature unlocks advanced formatting possibilities for specialized use cases.
      </p>

      <h2>Formatting and Output Options</h2>
      <p>
        Line break handling preserves the multi-line nature of your input throughout the combination process. The tool maintains line structure by default, using newlines as delimiters between lines within combinations. This ensures output maintains readability and proper formatting. You can customize line break handling through delimiter configuration, but the default preserves standard text formatting.
      </p>
      <p>
        Delimiter configuration controls how lines are separated within each combination. The default newline creates standard multi-line text, but you can use tabs, custom text, or special characters. Tab delimiters create tab-separated formats suitable for spreadsheet import. Custom text delimiters enable specific formatting requirements. Special characters like \\x provide advanced formatting options. Choose delimiters based on your output requirements and target system compatibility.
      </p>
      <p>
        Join sets options determine how different combinations are separated in output. The default uses double newline with separator for clear visual distinction. You can customize this to use single newlines for compact output, custom separators for specific formatting, or special characters for advanced layouts. The join sets choice affects output readability and file size. Consider your use case when selecting join sets format.
      </p>
      <p>
        Download formats preserve your formatting settings exactly. The downloaded file uses your specified delimiters, prefixes, suffixes, and join sets configuration. This creates files ready for direct use in code editors, document processors, or data analysis tools. File encoding is UTF-8, ensuring compatibility with all text processing systems. The format matches your display settings, providing consistency across download and display operations.
      </p>
      <p>
        Copy functionality includes both individual and bulk operations. Individual combination copy buttons allow quick extraction of specific results. The copy all button respects your join sets configuration, creating a single clipboard entry with all combinations properly formatted. Clipboard format matches display format exactly, ensuring consistency. This is perfect for pasting into documents, code editors, or communication tools without reformatting.
      </p>
      <p>
        Best practices for formatting depend on your use case. For code generation, use newline delimiters with structured prefixes. For CSV import, consider tab delimiters or custom formats. For human reading, use readable delimiters with clear join sets. Test formatting with small sets first, then apply to larger generations. The preview count helps you understand output scope before committing to generation. Consider output destination when configuring formatting options.
      </p>

      <h2>Comparison with Regular Combination Generator</h2>
      <p>
        Line combination generators differ from regular combination generators in output format and use case focus. Regular combination generators output comma-separated values suitable for item selection problems. Line combination generators preserve line structure, making them ideal for text combination scenarios where formatting matters. Understanding this distinction helps you choose the right tool for your specific needs.
      </p>
      <p>
        When to use line combinations versus regular combinations depends on your problem structure. Use line combinations when you need to combine text blocks, paragraphs, code snippets, or any content where line breaks matter. Use regular combinations when you're selecting items that don't require line structure preservation. Many problems clearly fit one category, but some may benefit from either tool depending on output requirements.
      </p>
      <p>
        Key differences include output format (multi-line vs single-line), delimiter handling (line breaks vs commas), and use case focus (text combination vs item selection). Line combination generators excel at content creation, template generation, and text variation scenarios. Regular combination generators excel at item selection, test data generation, and combinatorial problem solving. Both tools are valuable, serving complementary purposes in different workflows.
      </p>
      <p>
        Use case scenarios for each tool help clarify when to use which. Line combinations work best for email templates, code generation, documentation variations, and content creation. Regular combinations work best for team selection, product bundling, test data generation, and mathematical problems. Some workflows may use both tools sequentially: first regular combinations to select items, then line combinations to format selected items as text.
      </p>

      <h2>Best Practices</h2>
      <p>
        Input formatting tips ensure optimal results. Enter one line per row, keep lines focused and complete, and remove unnecessary empty lines before generation. Consistent line formatting improves output quality. Consider line length when planning combinations—very long lines may create unwieldy output. Test with small sets first to verify formatting before generating large combination sets.
      </p>
      <p>
        Output organization benefits from thoughtful prefix and suffix usage. Use prefixes to label combinations for easy identification. Use suffixes to add metadata or status indicators. Structured prefixes like "Template 1:", "Template 2:" create organized output. Consider your output destination when configuring prefixes and suffixes—code generation may need different formatting than document creation.
      </p>
      <p>
        Performance considerations include understanding combination count growth. Large line sets with moderate combination sizes can produce thousands of combinations. Use the displayed combination count to assess output scope. For very large sets, prefer download over display to maintain browser performance. Consider generating in batches if combination counts exceed 10,000. The tool handles large sets efficiently, but display rendering may slow with thousands of results.
      </p>
      <p>
        Common use patterns include template generation (combining code or content templates), A/B testing (creating content variations), documentation creation (exploring section arrangements), and content variation (testing different text combinations). Each pattern benefits from specific formatting configurations. Template generation may need structured prefixes, A/B testing may need clear separators, and documentation may need readable formatting. Adapt formatting to your specific use pattern.
      </p>

      <h2>Limitations and Tips</h2>
      <p>
        Size limitations are similar to regular combination generators: combination size is limited to 20 lines per combination, and very large line sets may produce millions of combinations. The tool handles large sets efficiently, but display may slow with thousands of results. Use download function for large sets to maintain performance. Consider whether you need all combinations or can use strategic sampling for extremely large sets.
      </p>
      <p>
        Performance tips include using download for large result sets, generating in batches for very large line collections, and testing formatting with small sets first. The tool's algorithms are efficient, but rendering thousands of multi-line combinations takes time. Download immediately after generation for large sets rather than scrolling through displayed results. Close other browser tabs to free memory if needed.
      </p>
      <p>
        Alternative methods may be needed for extremely large combination sets or specialized formatting requirements. Server-side generation handles research-scale computations. Specialized text processing tools may offer advanced formatting options. The browser-based tool excels at practical, human-scale text combination problems. Evaluate your specific requirements to determine if the tool meets your needs or if alternatives are necessary.
      </p>

      <h2>Conclusion</h2>
      <p>
        The line combination generator is an essential tool for anyone working with text combination scenarios where line structure matters. From content creators exploring narrative variations to developers generating code templates, the tool provides systematic enumeration of all possible line combinations. With preserved formatting, extensive customization options, and privacy-focused operation, it handles practical text combination problems effectively.
      </p>
      <p>
        Understanding when to use line combinations versus regular combinations, how to configure output formatting, and how to manage large result sets enables you to leverage the tool's full potential. Whether you're creating email variations, generating code templates, or exploring content possibilities, the line combination generator provides a reliable, fast, and private solution. Start with small line sets to familiarize yourself with the interface, then scale up to larger problems as needed.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a line combination generator?',
    answer:
      'A line combination generator creates all possible ways to select lines of text from your input where order doesn\'t matter, while preserving line structure and formatting. Unlike regular combination generators that output comma-separated values, line combination generators maintain multi-line text structure. This makes them perfect for combining paragraphs, code snippets, email templates, or any text where line breaks matter. The tool systematically generates every possible line combination, saving hours of manual work.',
  },
  {
    category: 'General',
    question: 'How does it differ from a regular combination generator?',
    answer:
      'The key difference is output format and line preservation. Regular combination generators output comma-separated values like "A, B, C" on a single line. Line combination generators preserve line breaks, creating multi-line text blocks. This matters for code generation, email templates, documentation, and any application where line structure affects functionality or readability. Use line combinations when formatting matters, regular combinations when you need simple item selection.',
  },
  {
    category: 'Usage',
    question: 'When should I use line combinations?',
    answer:
      'Use line combinations when you need to combine text blocks where line structure matters. Common scenarios include email template generation for A/B testing, code snippet combination for template creation, documentation variation exploration, content creation with paragraph combinations, and script writing with dialogue combinations. If your output needs to maintain formatting, readability, or structural integrity, line combinations are the right choice.',
  },
  {
    category: 'Input',
    question: 'How do I format my input for line combinations?',
    answer:
      'Enter one line of text per row in the input box. Each line can be a sentence, paragraph, code statement, or any text block. Lines can have different lengths—the tool handles variable-length lines seamlessly. Empty lines are automatically filtered out, so you can paste formatted text directly. The tool trims whitespace automatically, but keep lines focused and complete for best results. Test with small sets first to verify formatting.',
  },
  {
    category: 'Output',
    question: 'Are line breaks preserved in the output?',
    answer:
      'Yes, line breaks are preserved by default. The tool maintains the multi-line nature of your input throughout the combination process. Lines within each combination are separated by newlines (or your specified delimiter), creating properly formatted multi-line text blocks. This ensures output maintains readability, proper formatting, and structural integrity. You can customize line break handling through delimiter configuration if needed.',
  },
  {
    category: 'Input',
    question: 'Can I combine lines from multiple sources?',
    answer:
      'Yes, the tool processes each line independently regardless of source. You can combine lines from different documents, paste text from multiple sources, or mix lines of different types. The tool treats each input line as a distinct item for combination purposes. This enables combining paragraphs of different lengths, code blocks from various sources, or text segments from different contexts. Input source doesn\'t affect combination generation.',
  },
  {
    category: 'Input',
    question: 'What is the maximum number of lines I can combine?',
    answer:
      'There\'s no strict maximum on total lines, but practical limits emerge from combination count growth. You can enter hundreds of lines, but large sets with moderate combination sizes produce millions of combinations. The tool limits combination size to 20 lines per combination to maintain performance. For example, 50 lines of size 10 produces over 10 billion combinations. Use judgment: if the displayed combination count exceeds 100,000, consider whether you need all combinations or can use sampling.',
  },
  {
    category: 'Output',
    question: 'How do I add a prefix or suffix to each combination?',
    answer:
      'Use the prefix and suffix input fields to add text before and after each combination. Prefixes appear before every combination, useful for labeling like "Template " or "Version ". Suffixes append text after each combination, perfect for status indicators or formatting markers. Both support special characters: use \\x for newlines, \\t for tabs. This enables creating numbered lists, structured data, or formatted reports directly from generator output without manual editing.',
  },
  {
    category: 'Output',
    question: 'What are delimiters and how do they work?',
    answer:
      'Delimiters control how lines are separated within each combination. The default newline creates standard multi-line text, but you can use tabs for tab-separated formats, custom text for specific separators, or special characters for advanced formatting. For example, using \\x as delimiter inserts actual newlines, creating properly formatted multi-line combinations. Delimiters work with prefixes and suffixes to create comprehensive formatting control. Choose delimiters based on your output requirements.',
  },
  {
    category: 'Output',
    question: 'How do I separate different line combinations?',
    answer:
      'Use the join sets option to control how different combinations are separated. The default uses double newline with separator text (---) for clear visual distinction. You can customize this to use single newlines for compact output, custom separators for specific formatting, or special characters for advanced layouts. The join sets choice affects output readability and file size. Consider your use case when selecting join sets format—code generation may need different separators than document creation.',
  },
  {
    category: 'Output',
    question: 'Can I download the results?',
    answer:
      'Yes, the tool includes a download function that saves all combinations to a text file instantly. Click the "Download" button after generation to save line-combinations.txt with your specified formatting. The file uses standard line endings compatible with all operating systems. Download is essential for large result sets that would be cumbersome to copy manually. The downloaded file maintains your delimiter, prefix, suffix, and join sets settings, ready for import into other tools.',
  },
  {
    category: 'Output',
    question: 'What file format is used for downloads?',
    answer:
      'Downloads create plain text files (.txt) with standard line endings. The format matches your display settings exactly: delimiters, prefixes, suffixes, and join sets are all preserved. This creates files ready for code editors (if you use newline formatting), document processors (if you use readable separators), or data analysis tools (if you use structured formats). The file is UTF-8 encoded, ensuring compatibility with all text processing systems.',
  },
  {
    category: 'Output',
    question: 'How do I use special characters like \\x?',
    answer:
      'Enter \\x in any text field (prefix, suffix, delimiter, or join sets) to insert a newline character. The tool automatically converts \\x to actual line breaks in the output. You can also use \\t for tabs or \\n as alternative newline syntax. This enables multi-line combinations, structured formatting, and code generation. For example, prefixing with "Template:\\x" and using \\x as delimiter creates combinations with items on separate lines. Special character processing happens automatically.',
  },
  {
    category: 'Input',
    question: 'Can I combine lines with different lengths?',
    answer:
      'Yes, the tool handles variable-length lines seamlessly. You can combine short sentences with long paragraphs, single-line code statements with multi-line blocks, or any mix of line lengths. The tool treats each line as a distinct item regardless of length, enabling flexible text combination scenarios. Variable-length lines don\'t affect combination generation or output formatting. This flexibility accommodates diverse text combination needs.',
  },
  {
    category: 'Input',
    question: 'What happens to empty lines?',
    answer:
      'Empty lines are automatically filtered out during processing. The tool trims whitespace and removes completely empty lines before generating combinations. This allows you to paste formatted text directly without extensive cleanup. If you need empty lines in your output, include them as actual content (with spaces or special characters) rather than truly empty lines. The automatic filtering ensures clean input processing while maintaining flexibility.',
  },
  {
    category: 'Usage',
    question: 'Can I use this for code combinations?',
    answer:
      'Yes, line combination generators are excellent for code generation. They preserve line structure essential for code functionality, enabling you to combine code snippets, function definitions, or configuration blocks systematically. This is valuable for creating boilerplate code, exploring implementation variations, or generating test code with different component combinations. The preserved line structure ensures generated code maintains proper formatting and syntax. Use newline delimiters and structured prefixes for best code generation results.',
  },
  {
    category: 'Usage',
    question: 'Is this suitable for email template generation?',
    answer:
      'Absolutely. Line combination generators are perfect for email template creation and A/B testing. You can combine different subject lines, body paragraphs, and call-to-action sections to systematically explore all possible email variations. This helps identify high-performing combinations, test messaging strategies, and optimize campaign performance. The line-preserving format ensures emails maintain proper formatting and readability. Use clear join sets separators to distinguish between different email template combinations.',
  },
  {
    category: 'Output',
    question: 'How do I format combinations for CSV?',
    answer:
      'For CSV export, consider your line structure carefully. Standard CSV expects single-line records, so multi-line combinations may need special handling. You can use tab delimiters within combinations and newline join sets to create CSV-compatible formats. Alternatively, use custom delimiters that work with your CSV import requirements. Test with small sets first to verify CSV compatibility. Some CSV importers handle multi-line fields, while others require single-line records—adjust formatting accordingly.',
  },
  {
    category: 'Input',
    question: 'Can I combine lines with HTML formatting?',
    answer:
      'Yes, you can combine lines containing HTML markup. The tool treats HTML as text, preserving tags and structure within each line. This enables combining HTML paragraphs, div blocks, or other HTML elements systematically. However, ensure HTML structure remains valid after combination—the tool doesn\'t validate or fix HTML. For complex HTML combination scenarios, test with small sets first to verify output validity. HTML formatting within lines is preserved exactly as entered.',
  },
  {
    category: 'General',
    question: 'What is the difference between line combinations and permutations?',
    answer:
      'Line combinations ignore order (selecting lines A, B, C is the same as C, B, A), while line permutations consider order (A, B, C differs from C, B, A). Use line combinations when you care about which lines are selected but not their sequence. Use line permutations when line order matters, such as creating sequences or arrangements. Most text combination scenarios use combinations, but some applications like script sequencing may need permutations.',
  },
  {
    category: 'Privacy',
    question: 'Are my inputs stored on a server?',
    answer:
      'No, the tool runs entirely in your browser using client-side JavaScript. No data is sent to servers, no inputs are stored, and no tracking occurs. Your lines and generated combinations remain on your device throughout the process. This ensures complete privacy, making the tool suitable for sensitive content, proprietary text, or confidential use cases. Download and copy functions use standard browser APIs with no external communication.',
  },
  {
    category: 'Technical',
    question: 'Can I use this tool offline?',
    answer:
      'Yes, once the page loads, the tool works completely offline. All processing happens in your browser using client-side JavaScript, requiring no server communication. This makes it perfect for offline work, air-gapped environments, or situations with unreliable internet. Simply load the page once while online, then you can use it offline indefinitely. The tool\'s algorithms, interface, and functionality are all contained in the initial page load.',
  },
  {
    category: 'Technical',
    question: 'What browsers support this tool?',
    answer:
      'The tool works in all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. It uses standard JavaScript features available in browsers from the last 5 years. Mobile browsers are also supported, though very large result sets may perform better on desktop. The tool doesn\'t require any plugins, extensions, or special configurations. If you experience issues, ensure JavaScript is enabled and your browser is updated to a recent version.',
  },
  {
    category: 'Technical',
    question: 'How do I handle very large line sets?',
    answer:
      'For very large line sets, use the download function immediately after generation rather than displaying all results. Rendering thousands of multi-line combinations can slow the browser, but generation and download remain fast. Consider generating in smaller batches if combination counts exceed 10,000. Use the displayed combination count to assess output scope before generation. If slowdowns persist, the result set may be too large for practical browser-based processing—consider server-side alternatives for research-scale computations.',
  },
  {
    category: 'Output',
    question: 'Can I combine lines with different separators?',
    answer:
      'Yes, you can customize separators through delimiter and join sets configuration. Delimiters control separation within combinations, while join sets control separation between combinations. You can use newlines, tabs, custom text, or special characters for either. This flexibility enables creating output formats suitable for various applications. For example, use tab delimiters within combinations and newline join sets for spreadsheet import, or use newline delimiters and custom join sets for document formatting.',
  },
  {
    category: 'Output',
    question: 'How do I copy all line combinations?',
    answer:
      'Click the "Copy All" button to copy every combination to your clipboard in one operation. The copied text respects your join sets configuration, creating a single clipboard entry with all combinations properly formatted. This is perfect for pasting into documents, code editors, or communication tools. Individual combination copy buttons are also available next to each result for quick extraction of specific combinations. The clipboard format matches your display format exactly.',
  },
  {
    category: 'Output',
    question: 'What is the join sets option?',
    answer:
      'The join sets option controls how different combinations are separated in the output. The default uses double newline with separator text (---) for clear visual distinction between combinations. You can customize this to use single newlines for compact output, custom separators for specific formatting, or special characters for advanced layouts. The join sets choice affects output readability, file size, and compatibility with different systems. Choose based on your output destination and use case.',
  },
  {
    category: 'Input',
    question: 'Can I generate combinations with different sizes?',
    answer:
      'No, the tool generates combinations of a single specified size per operation. To get combinations of different sizes, generate multiple times with different size values. For example, to get all combinations of sizes 2, 3, and 4 from the same line set, generate three separate times. You can then combine results manually or use the download function for each size and merge files. This approach gives you control over which sizes to generate and helps manage result set sizes.',
  },
  {
    category: 'Output',
    question: 'How do I format output for different use cases?',
    answer:
      'Formatting depends on your use case. For code generation, use newline delimiters with structured prefixes. For email templates, use readable delimiters with clear join sets. For documentation, use standard formatting with descriptive prefixes. For CSV import, consider tab delimiters or custom formats. For human reading, use readable separators. Test formatting with small sets first, then apply to larger generations. The preview count helps you understand output scope before committing to generation.',
  },
  {
    category: 'Technical',
    question: 'Is there a limit on the number of combinations?',
    answer:
      'There\'s no hard limit on total combinations generated, but practical constraints emerge from browser performance and combination count growth. The tool can generate millions of combinations, but displaying them all may slow the browser. Very large sets (100,000+ combinations) work best with immediate download rather than display. The combination size limit of 20 lines per combination helps manage result set sizes. For research-scale computations requiring billions of combinations, consider specialized server-side tools.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug === '' ? 'home' : toolSlug;
  
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool?.title ?? 'Line Combination Generator';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Generate all possible combinations of lines from your text.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}


export default async function LineCombinationGeneratorPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const toolKey = toolSlug === '' ? 'home' : toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : toolData.shortDescription;

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

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<LineCombinationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Line Combination Generator FAQ</h2>
          <p className="text-slate-700">
            Answers about line combinations, input formats, and practical use cases.
          </p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
