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
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'combination-generator';

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>All Possible Combinations Generator - Complete Guide</h2>
      
      <h2>Introduction</h2>
      <p>
        An all possible combinations generator is a powerful mathematical tool that creates every unique selection of items from a set where order does not matter. Whether you're exploring lottery number possibilities, generating test data for software development, or solving combinatorial problems, a combination generator provides a systematic way to enumerate all possible groupings. This comprehensive guide explains how combinations work, when to use them, and how to leverage an all possible combinations generator for maximum effectiveness.
      </p>
      <p>
        The value of a combination generator becomes clear when you need to explore every possible way to select items from a collection. Unlike permutations, where order matters, combinations focus purely on selection. This makes them ideal for scenarios like team formation, product bundling, or experimental design where you care about which items are chosen, not their sequence. An all possible combinations generator automates the tedious process of manually listing every combination, saving hours of work and reducing human error.
      </p>
      <p>
        Modern combination generators run entirely in your browser, ensuring privacy and speed. They handle complex calculations instantly, generate formatted output ready for use, and provide customization options for different workflows. Whether you're a developer generating test cases, a researcher designing experiments, or a business analyst exploring product combinations, an all possible combinations generator is an essential tool in your toolkit.
      </p>

      <h2>What Are Combinations?</h2>
      <p>
        Combinations represent selections of items from a set where the order of selection does not matter. Mathematically, a combination is a subset of distinct elements chosen from a larger collection. The key distinction is that {'{A, B, C}'} and {'{C, B, A}'} are considered the same combination because they contain identical items, just arranged differently.
      </p>
      <p>
        This differs fundamentally from permutations, where order is significant. For example, if you're selecting 2 items from {'{Apple, Banana, Cherry}'}, the combinations are: {'{Apple, Banana}'}, {'{Apple, Cherry}'}, and {'{Banana, Cherry}'}. Notice that {'{Banana, Apple}'} is not listed separately because it's the same combination as {'{Apple, Banana}'}. In permutations, these would be distinct arrangements, but in combinations, they're identical selections.
      </p>
      <p>
        Real-world examples of combinations are everywhere. Lottery number selection is a classic case: choosing 6 numbers from 49 doesn't care about the order you pick them. Team formation is another example: selecting 5 players from 20 for a basketball team focuses on who's chosen, not the selection sequence. Product bundling in e-commerce uses combinations to determine which items can be sold together. Password generation can use combinations when creating character sets, though permutations are more common for actual passwords.
      </p>
      <p>
        Understanding when to use combinations versus permutations is crucial. Use combinations when you need to know "which items" without caring about "in what order." Use permutations when the sequence matters, such as password creation, race finishing orders, or arrangement problems. A combination generator helps you explore all possible selections efficiently, while a permutation generator handles ordered arrangements.
      </p>

      <h2>How the Combination Generator Works</h2>
      <p>
        The combination generator uses a backtracking algorithm to systematically explore all possible selections. The process begins when you input your items, one per line, and specify the combination size. The algorithm then recursively builds combinations by selecting items in a specific order to avoid duplicates and ensure completeness.
      </p>
      <p>
        Here's how to use the tool interface: First, enter your items in the input box, with each item on a separate line. Items can be words, numbers, phrases, or any text. Next, specify the combination size—how many items should appear in each combination. The tool calculates and displays the total number of combinations that will be generated, helping you understand the scope before generation.
      </p>
      <p>
        Input requirements are straightforward: enter at least one item, ensure each item is on its own line, and specify a combination size between 1 and 20. The tool automatically trims whitespace and filters out empty lines, so you can paste lists directly without extensive cleanup. The maximum combination size of 20 helps maintain browser performance while covering most practical use cases.
      </p>
      <p>
        Output options provide extensive customization. You can add a prefix before each combination, such as "Set: " or "Option ". Suffixes work similarly, allowing you to append text like " (selected)" or " ✓". Delimiters control how items within each combination are separated—default is comma-space, but you can use any separator including newlines, tabs, or custom text. The join sets option determines how different combinations are separated in the output, with newline as the default for easy reading.
      </p>
      <p>
        Special characters enhance formatting flexibility. Enter \\x in any field to insert a newline character, \\t for a tab, or \\n for a newline (alternative syntax). This allows you to create multi-line combinations, structured output, or formatted lists. For example, using \\x as a delimiter creates combinations where items appear on separate lines, perfect for code generation or structured data.
      </p>
      <p>
        Performance considerations are important for large sets. The number of combinations grows exponentially with set size and combination length. For example, 10 items taken 3 at a time produces 120 combinations, manageable for any browser. However, 20 items taken 10 at a time produces 184,756 combinations, which may slow down generation and display. The tool limits combination size to 20 to prevent browser lockups while still handling most real-world scenarios effectively.
      </p>

      <h2>Mathematical Foundation</h2>
      <p>
        The combination formula is C(n, r) = n! / (r! × (n-r)!), where n is the total number of items and r is the size of each combination. The exclamation mark represents factorial, meaning n! = n × (n-1) × (n-2) × ... × 2 × 1. This formula calculates how many ways you can choose r items from n items without regard to order.
      </p>
      <p>
        To calculate total combinations manually, start with the factorial of n, then divide by the product of r factorial and (n-r) factorial. For example, C(5, 3) = 5! / (3! × 2!) = 120 / (6 × 2) = 120 / 12 = 10 combinations. The tool performs this calculation automatically and displays the result before generation, helping you understand the output scope.
      </p>
      <p>
        Examples with different values illustrate the growth pattern. C(4, 2) = 6 combinations, C(6, 3) = 20 combinations, C(8, 4) = 70 combinations, and C(10, 5) = 252 combinations. As you can see, the number increases rapidly with larger sets and combination sizes. C(15, 7) = 6,435 combinations, while C(20, 10) = 184,756 combinations, demonstrating why the tool limits maximum size to maintain performance.
      </p>
      <p>
        The growth rate follows a binomial coefficient pattern, which peaks when r is approximately n/2. This means selecting half the items produces the most combinations. For example, with 10 items, C(10, 5) = 252 is larger than C(10, 3) = 120 or C(10, 7) = 120. This symmetric property explains why large sets are limited—the number of combinations can become astronomically large, overwhelming both computation and display capabilities.
      </p>
      <table>
        <thead>
          <tr>
            <th>Items (n)</th>
            <th>Size (r)</th>
            <th>Combinations</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>2</td>
            <td>10</td>
            <td>Small team selection</td>
          </tr>
          <tr>
            <td>10</td>
            <td>3</td>
            <td>120</td>
            <td>Product bundling</td>
          </tr>
          <tr>
            <td>15</td>
            <td>5</td>
            <td>3,003</td>
            <td>Committee formation</td>
          </tr>
          <tr>
            <td>20</td>
            <td>5</td>
            <td>15,504</td>
            <td>Large selection sets</td>
          </tr>
          <tr>
            <td>20</td>
            <td>10</td>
            <td>184,756</td>
            <td>Maximum practical limit</td>
          </tr>
        </tbody>
      </table>

      <h2>Use Cases and Applications</h2>
      <p>
        Software development teams use combination generators extensively for test data generation. When testing feature flag combinations, you need to verify every possible configuration. A combination generator creates all possible flag states, ensuring comprehensive test coverage. Similarly, API testing requires exploring all parameter combinations to identify edge cases and interaction bugs. The tool generates these systematically, saving days of manual test case creation.
      </p>
      <p>
        Data scientists leverage combinations for sampling strategies and A/B testing scenarios. When designing experiments, you need to explore all possible treatment combinations to ensure balanced designs. A combination generator helps create factorial designs where multiple factors are tested simultaneously. Sampling applications use combinations to select representative subsets from larger populations, ensuring statistical validity while managing computational costs.
      </p>
      <p>
        Gaming applications find combinations invaluable for team formation and strategy planning. Multiplayer games often require balanced team selection from available players. A combination generator explores all possible team compositions, helping game designers understand balance implications. Strategy games use combinations to analyze possible move sequences, though permutations are needed when order matters. Tournament brackets can be generated using combinations to ensure fair matchups.
      </p>
      <p>
        Business applications include product bundling and pricing combinations. E-commerce platforms need to determine which products can be sold together as bundles. A combination generator explores all possible product pairings or groupings, helping identify profitable combinations. Pricing strategies use combinations to test different discount structures across product sets. Marketing campaigns explore audience segment combinations to optimize targeting strategies.
      </p>
      <p>
        Educational contexts use combinations for problem sets and learning exercises. Mathematics teachers generate combination problems to help students understand combinatorial principles. Computer science courses use combination generators to demonstrate algorithm efficiency and recursive thinking. Statistics courses explore sampling combinations to teach probability concepts. The tool serves as both a learning aid and a practical demonstration of mathematical concepts.
      </p>
      <p>
        Research applications span experimental design and survey combinations. Scientists designing experiments need to explore all possible factor combinations to ensure comprehensive coverage. Survey designers use combinations to create question sets that cover all relevant topic areas. Clinical trials explore treatment combinations to identify optimal intervention strategies. The systematic nature of combination generation ensures no important combination is overlooked.
      </p>
      <p>
        Security applications include password generation and key combinations, though permutations are more common for actual passwords. However, combination generators help create character set combinations for password policies. Key management systems explore possible key combinations for access control. Security testing uses combinations to systematically test permission and role combinations, ensuring proper access controls.
      </p>

      <h2>Advanced Features and Customization</h2>
      <p>
        Prefix and suffix options add context to each generated combination. Prefixes appear before every combination, useful for labeling, numbering, or adding metadata. For example, prefixing with "Option " creates "Option A, B, C" style output. Suffixes work similarly, appending text after each combination. This is valuable for adding status indicators, notes, or formatting markers. Combined with delimiters, you can create highly customized output formats suitable for direct use in code, documents, or databases.
      </p>
      <p>
        Custom delimiters control item separation within combinations. The default comma-space separator works well for most text applications, but you can use any character or string. Semicolons create CSV-friendly output, pipes create command-line friendly formats, and newlines create structured lists. Special characters like \\x insert actual newlines, enabling multi-line combination formats perfect for code generation or structured data creation.
      </p>
      <p>
        Join sets configuration determines how different combinations are separated in the output. The default newline creates a clean list format, one combination per line. Using custom join text like "---" creates clearly separated sections. For CSV export, using comma as join creates a single-line format, though newline is typically preferred. The join sets option works with the copy and download functions, ensuring your preferred format is maintained throughout the workflow.
      </p>
      <p>
        Download functionality saves all combinations to a text file instantly. This is essential for large result sets that would be cumbersome to copy manually. The download creates a plain text file with your specified formatting, ready for import into spreadsheets, databases, or other tools. File naming is automatic (combinations.txt), but you can rename after download. The file uses standard line endings compatible with all operating systems.
      </p>
      <p>
        Copy options include individual combination copying and bulk copy all functionality. Individual copy buttons next to each combination allow quick extraction of specific results. The copy all button respects your join sets configuration, creating a single clipboard entry with all combinations properly formatted. This is perfect for pasting into documents, code editors, or communication tools. The clipboard format matches your display format exactly.
      </p>
      <p>
        Special character support extends beyond \\x for newlines. The tool recognizes \\t for tabs, \\n as alternative newline syntax, and processes these in all text fields including prefixes, suffixes, delimiters, and join sets. This enables complex formatting scenarios like creating structured data, code templates, or formatted reports directly from the generator output. The special character processing happens automatically, requiring no additional configuration.
      </p>

      <h2>Best Practices and Tips</h2>
      <p>
        Choosing between combinations and permutations depends on whether order matters in your use case. Use combinations when you care about which items are selected but not their sequence—team formation, product selection, or sampling scenarios. Use permutations when order is significant—passwords, race results, or arrangement problems. The combination generator is perfect for selection problems, while permutation generators handle sequence problems.
      </p>
      <p>
        Handling large datasets requires understanding combination growth rates. Before generating, check the displayed combination count. If it exceeds 10,000, consider whether you need all combinations or can sample strategically. For extremely large sets, use the download function immediately rather than displaying all results, as this prevents browser slowdown. The tool's 20-item size limit helps, but even within that limit, some combinations can be numerous.
      </p>
      <p>
        Performance optimization tips include generating in batches for very large result sets. If you need combinations from 20 items of size 10, consider generating subsets first to verify output format and usefulness. Use the prefix/suffix options to add metadata that helps you identify and filter results later. The download function is faster than copying for large sets, so prefer downloading when working with thousands of combinations.
      </p>
      <p>
        Output formatting best practices depend on your use case. For code generation, use newline delimiters and structured prefixes. For CSV import, use comma delimiters and newline join sets. For human reading, use comma-space delimiters with clear prefixes. Test your formatting with small sets first, then apply to larger generations. The preview count helps you understand output scope before committing to generation.
      </p>
      <p>
        Common mistakes to avoid include confusing combinations with permutations, entering duplicate items unnecessarily (the tool handles them, but they don't add value), and generating unnecessarily large sets. Always verify the combination count before generating large sets. Another mistake is forgetting to configure delimiters and join sets, resulting in output that requires manual reformatting. Set your preferences before generation to save time.
      </p>

      <h2>Limitations and Considerations</h2>
      <p>
        Maximum size limits exist to maintain browser performance and usability. The combination size is capped at 20 items per combination, which covers most practical scenarios while preventing browser lockups. The total number of items has no hard limit, but practical constraints emerge from combination count growth. Very large item sets with moderate combination sizes can still produce millions of combinations, so use judgment when generating.
      </p>
      <p>
        Browser performance varies with result set size. Modern browsers handle thousands of combinations smoothly, but tens of thousands may cause noticeable slowdowns during generation and display. The tool uses efficient algorithms, but rendering thousands of DOM elements takes time. If you experience slowdowns, use the download function immediately after generation rather than scrolling through results. Consider generating in smaller batches if performance becomes an issue.
      </p>
      <p>
        Alternative methods may be needed for extremely large combination sets. For millions of combinations, consider server-side generation or specialized combinatorial libraries. The browser-based tool excels at practical, human-scale problems but has limits for research-scale computations. When combination counts exceed 100,000, evaluate whether you need all combinations or can use sampling or other approximation techniques.
      </p>
      <p>
        Privacy and data handling are straightforward: the tool runs entirely in your browser. No data is sent to servers, no inputs are stored, and no tracking occurs. Your combinations are generated locally using JavaScript, ensuring complete privacy. This makes the tool suitable for sensitive data, proprietary information, or confidential use cases. The download and copy functions use standard browser APIs with no external communication.
      </p>

      <h2>Comparison with Similar Tools</h2>
      <p>
        Combination generators differ from permutation generators in a fundamental way: combinations ignore order while permutations consider it. This makes them complementary tools for different problem types. Use a combination generator when selecting items, and a permutation generator when arranging them. Many problems require both: first generate combinations to select items, then use permutations to arrange selected items.
      </p>
      <p>
        When to use each tool type depends on your problem structure. Selection problems (teams, samples, bundles) need combinations. Arrangement problems (passwords, sequences, orders) need permutations. Some problems need both: select items with combinations, then arrange with permutations. Understanding this distinction helps you choose the right tool and avoid generating unnecessary or incorrect results.
      </p>
      <p>
        Complementary tools include calculators for combination counts, permutation generators for ordered arrangements, and specialized tools for combinations with repetition (which this tool doesn't handle). The combination generator works well alongside these tools, each serving specific aspects of combinatorial problem solving. For comprehensive combinatorial work, you may use multiple tools in sequence to solve complex problems.
      </p>

      <h2>Conclusion</h2>
      <p>
        An all possible combinations generator is an essential tool for anyone working with combinatorial problems, from software developers generating test data to researchers designing experiments. The tool's ability to systematically enumerate all possible selections saves time, reduces errors, and ensures comprehensive coverage of solution spaces. With customizable output, privacy-focused operation, and efficient algorithms, it handles practical combination problems effectively.
      </p>
      <p>
        Understanding when to use combinations versus permutations, how to configure output formatting, and how to manage large result sets enables you to leverage the tool's full potential. Whether you're exploring product bundles, generating test cases, or solving mathematical problems, the combination generator provides a reliable, fast, and private solution. Start with small sets to familiarize yourself with the interface, then scale up to larger problems as needed.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a combination generator?',
    answer:
      'A combination generator is a tool that creates all possible ways to select items from a set where order does not matter. For example, selecting 2 items from {A, B, C} produces combinations: AB, AC, BC. Unlike permutations, combinations treat AB and BA as identical. Combination generators automate the tedious process of manually listing every possible selection, making them essential for test data generation, experimental design, and combinatorial problem solving.',
  },
  {
    category: 'General',
    question: 'What is the difference between combinations and permutations?',
    answer:
      'Combinations ignore order (AB = BA), while permutations consider order (AB ≠ BA). Use combinations when you want to select items without caring about their arrangement—like choosing team members or product bundles. Use permutations when order matters—like creating passwords or race results. A combination generator handles selection problems, while a permutation generator handles arrangement problems. Many real-world problems require understanding this distinction to choose the right tool.',
  },
  {
    category: 'General',
    question: 'How does the "all possible combinations generator" work?',
    answer:
      'The all possible combinations generator uses a backtracking algorithm to systematically explore every possible selection. You input items (one per line) and specify the combination size. The algorithm recursively builds combinations by selecting items in order to avoid duplicates. It calculates the total number of combinations using the formula C(n, r) = n! / (r! × (n-r)!) and displays this before generation. The process runs entirely in your browser for privacy and speed, generating formatted output ready for use.',
  },
  {
    category: 'Technical',
    question: 'What is the mathematical formula for combinations?',
    answer:
      'The combination formula is C(n, r) = n! / (r! × (n-r)!), where n is total items and r is combination size. The exclamation mark represents factorial. For example, C(5, 3) = 5! / (3! × 2!) = 120 / 12 = 10 combinations. This formula counts ways to choose r items from n items without regard to order. The tool calculates this automatically and displays the result, helping you understand output scope before generation. Understanding the formula helps you estimate combination counts for planning purposes.',
  },
  {
    category: 'Input',
    question: 'How many combinations can I generate?',
    answer:
      'The number of combinations depends on your input size and combination length. Small sets produce manageable counts: 5 items of size 2 gives 10 combinations, 10 items of size 3 gives 120 combinations. Larger sets grow quickly: 20 items of size 5 produces 15,504 combinations, while 20 items of size 10 produces 184,756 combinations. The tool displays the exact count before generation. There\'s no hard limit on total combinations, but very large sets (100,000+) may slow browser performance. Use the download function for large result sets.',
  },
  {
    category: 'Input',
    question: 'What is the maximum number of items I can enter?',
    answer:
      'There\'s no strict maximum on the number of items you can enter, but practical limits emerge from combination count growth. You can enter hundreds of items, but large sets with moderate combination sizes produce millions of combinations. The tool limits combination size to 20 items per combination to maintain performance. For example, 50 items of size 20 would produce over 47 trillion combinations, which is impractical. Use judgment: if the displayed combination count exceeds 100,000, consider whether you need all combinations or can use sampling.',
  },
  {
    category: 'Input',
    question: 'What is the maximum combination size?',
    answer:
      'The maximum combination size is 20 items per combination. This limit helps maintain browser performance and prevents interface slowdowns with extremely large result sets. Most practical use cases fall well within this limit. For example, team selection rarely exceeds 10-15 members, product bundles typically include 3-5 items, and test data generation usually works with smaller sets. If you need larger combination sizes, consider server-side solutions or specialized combinatorial libraries designed for research-scale computations.',
  },
  {
    category: 'Output',
    question: 'How are combinations formatted in the output?',
    answer:
      'Combinations are formatted based on your delimiter settings. The default uses comma-space separation, creating output like "A, B, C". You can customize delimiters to use semicolons, pipes, newlines, or any text. Prefix and suffix options add text before and after each combination. The join sets option controls how different combinations are separated—default is newline for easy reading. Special characters like \\x insert actual newlines, enabling multi-line formats. This flexibility lets you create output ready for code, CSV, documents, or databases.',
  },
  {
    category: 'Output',
    question: 'Can I add a prefix or suffix to each combination?',
    answer:
      'Yes, the tool supports both prefix and suffix options. Prefixes appear before every combination, useful for labeling like "Option " or "Set: ". Suffixes append text after each combination, perfect for status indicators or formatting markers. Both support special characters: use \\x for newlines, \\t for tabs. This enables complex formatting like numbered lists, structured data, or code templates. Combined with custom delimiters, you can create highly customized output formats suitable for direct use in your workflow without manual editing.',
  },
  {
    category: 'Output',
    question: 'What are delimiters and how do I use them?',
    answer:
      'Delimiters control how items within each combination are separated. The default comma-space creates readable output like "A, B, C". You can change this to semicolons for CSV compatibility, pipes for command-line tools, or newlines for structured lists. Special characters enhance formatting: \\x inserts actual newlines, \\t inserts tabs. For example, using \\x as delimiter creates combinations where items appear on separate lines, perfect for code generation. Delimiters work with prefixes and suffixes to create comprehensive formatting control.',
  },
  {
    category: 'Output',
    question: 'How do I use special characters like \\x for newlines?',
    answer:
      'Enter \\x in any text field (prefix, suffix, delimiter, or join sets) to insert a newline character. The tool automatically converts \\x to actual line breaks in the output. You can also use \\t for tabs or \\n as alternative newline syntax. This enables multi-line combinations, structured formatting, and code generation. For example, prefixing with "Set:\\x" and using \\x as delimiter creates combinations with items on separate lines. Special character processing happens automatically, requiring no additional configuration.',
  },
  {
    category: 'Output',
    question: 'Can I download the results?',
    answer:
      'Yes, the tool includes a download function that saves all combinations to a text file instantly. Click the "Download" button after generation to save combinations.txt with your specified formatting. The file uses standard line endings compatible with all operating systems. Download is essential for large result sets that would be cumbersome to copy manually. The downloaded file maintains your delimiter, prefix, suffix, and join sets settings, ready for import into spreadsheets, databases, or other tools.',
  },
  {
    category: 'Output',
    question: 'What file format is used for downloads?',
    answer:
      'Downloads create plain text files (.txt) with standard line endings. The format matches your display settings exactly: delimiters, prefixes, suffixes, and join sets are all preserved. This creates files ready for CSV import (if you use comma delimiters), code use (if you use newline formatting), or document inclusion (if you use readable separators). The file is UTF-8 encoded, ensuring compatibility with all text editors and systems. You can rename the file after download if needed.',
  },
  {
    category: 'Output',
    question: 'How do I copy all combinations at once?',
    answer:
      'Click the "Copy All" button to copy every combination to your clipboard in one operation. The copied text respects your join sets configuration, creating a single clipboard entry with all combinations properly formatted. This is perfect for pasting into documents, code editors, or communication tools. Individual combination copy buttons are also available next to each result for quick extraction of specific combinations. The clipboard format matches your display format exactly, ensuring consistency across copy operations.',
  },
  {
    category: 'Input',
    question: 'What happens if I enter duplicate items?',
    answer:
      'Duplicate items are handled automatically—they\'re treated as distinct items in the input. However, duplicate items don\'t add mathematical value to combinations since {A, A, B} and {A, B, A} would be identical selections. The tool processes duplicates correctly but they may create redundant combinations. For clean results, remove duplicates before generation. The tool doesn\'t automatically deduplicate input, giving you control over whether duplicates should be included in your combination set.',
  },
  {
    category: 'Input',
    question: 'Can I generate combinations with repetition?',
    answer:
      'This tool generates combinations without repetition, meaning each item appears at most once per combination. If you need combinations with repetition (where items can appear multiple times), you\'ll need a specialized tool. Combinations with repetition use a different formula: C(n+r-1, r) and produce different result sets. For example, combinations of {A, B} of size 2 without repetition gives {A, B}, but with repetition gives {A, A}, {A, B}, {B, B}. Most practical applications use combinations without repetition, which this tool handles.',
  },
  {
    category: 'Technical',
    question: 'How do I calculate the total number of combinations?',
    answer:
      'Use the formula C(n, r) = n! / (r! × (n-r)!), where n is total items and r is combination size. Calculate factorials: n! = n × (n-1) × ... × 2 × 1. For example, C(10, 3) = 10! / (3! × 7!) = 3,628,800 / (6 × 5,040) = 120. The tool calculates this automatically and displays it before generation. Online combination calculators can verify results, but the tool\'s built-in calculation is accurate and instant. Understanding the formula helps you estimate combination counts for planning.',
  },
  {
    category: 'Usage',
    question: 'What are some real-world use cases for combinations?',
    answer:
      'Common use cases include software test data generation (exploring feature flag combinations), product bundling (determining which items sell well together), team formation (selecting players or members), experimental design (exploring factor combinations), lottery analysis (understanding number selection possibilities), sampling strategies (selecting representative subsets), and combinatorial problem solving (mathematical and computational challenges). Each use case benefits from systematic enumeration of all possible selections, which a combination generator provides efficiently.',
  },
  {
    category: 'Usage',
    question: 'Can I use this for lottery number combinations?',
    answer:
      'Yes, combination generators are perfect for lottery analysis. They help you understand all possible number selections for a given lottery format. For example, a 6/49 lottery means choosing 6 numbers from 49, which produces C(49, 6) = 13,983,816 combinations. The tool can generate these systematically, though such large sets may require downloading rather than displaying. Lottery combination analysis helps understand odds, identify patterns, and explore selection strategies, though it doesn\'t improve winning chances.',
  },
  {
    category: 'Usage',
    question: 'Is this tool suitable for password generation?',
    answer:
      'Combination generators are less suitable for password generation than permutation generators, since passwords require ordered character sequences. However, they can help create character set combinations for password policies or explore possible character selections. For actual password generation, use a permutation generator where order matters. Combination generators work better for selecting which character sets to include in passwords rather than generating the passwords themselves. Security applications typically need permutations for actual password creation.',
  },
  {
    category: 'General',
    question: 'How do combinations differ from permutations?',
    answer:
      'Combinations ignore order (AB = BA), while permutations consider order (AB ≠ BA). This fundamental difference determines which tool to use. Selection problems need combinations: choosing team members, product bundles, or samples. Arrangement problems need permutations: creating passwords, race orders, or sequences. Many problems use both: first combinations to select items, then permutations to arrange selected items. Understanding this distinction ensures you use the right tool and generate correct results for your specific problem type.',
  },
  {
    category: 'Input',
    question: 'Can I generate combinations for more than 20 items?',
    answer:
      'You can enter more than 20 items, but the combination size is limited to 20 items per combination. This means you can generate combinations from large sets (50, 100, or more items), but each combination will contain at most 20 items. For example, you can generate combinations of size 5 from 50 items, producing C(50, 5) = 2,118,760 combinations. The 20-item limit per combination maintains browser performance while covering most practical use cases. Very large item sets may still produce millions of combinations even with size limits.',
  },
  {
    category: 'Technical',
    question: 'What should I do if the browser becomes slow?',
    answer:
      'If browser performance degrades with large result sets, use the download function immediately after generation rather than scrolling through displayed results. Rendering thousands of DOM elements causes slowdowns, but generation and download remain fast. For extremely large sets, consider generating in smaller batches or using the combination count to verify you actually need all combinations. Closing other browser tabs frees memory. If slowdowns persist, the result set may be too large for practical browser-based processing—consider server-side alternatives for research-scale computations.',
  },
  {
    category: 'Privacy',
    question: 'Are my inputs stored or sent to a server?',
    answer:
      'No, the tool runs entirely in your browser using client-side JavaScript. No data is sent to servers, no inputs are stored, and no tracking occurs. Your items and generated combinations remain on your device throughout the process. This ensures complete privacy, making the tool suitable for sensitive data, proprietary information, or confidential use cases. Download and copy functions use standard browser APIs with no external communication. You can verify this by using the tool offline after initial page load.',
  },
  {
    category: 'Technical',
    question: 'How accurate are the generated combinations?',
    answer:
      'The generated combinations are mathematically accurate and complete. The backtracking algorithm systematically explores every possible selection without missing or duplicating combinations. The tool uses precise integer arithmetic for combination counting and generation. Results match mathematical formulas exactly. You can verify accuracy by checking combination counts against the formula C(n, r) = n! / (r! × (n-r)!) or using online combination calculators. The algorithm is deterministic and produces consistent, correct results for any valid input.',
  },
  {
    category: 'Technical',
    question: 'Can I use this tool offline?',
    answer:
      'Yes, once the page loads, the tool works completely offline. All processing happens in your browser using client-side JavaScript, requiring no server communication. This makes it perfect for offline work, air-gapped environments, or situations with unreliable internet. Simply load the page once while online, then you can use it offline indefinitely. The tool\'s algorithms, interface, and functionality are all contained in the initial page load, enabling full offline operation.',
  },
  {
    category: 'Technical',
    question: 'What browsers are supported?',
    answer:
      'The tool works in all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. It uses standard JavaScript features available in browsers from the last 5 years. Mobile browsers are also supported, though very large result sets may perform better on desktop. The tool doesn\'t require any plugins, extensions, or special configurations. If you experience issues, ensure JavaScript is enabled and your browser is updated to a recent version. The interface is responsive and works on various screen sizes.',
  },
  {
    category: 'Technical',
    question: 'Is there a limit on the number of combinations generated?',
    answer:
      'There\'s no hard limit on the total number of combinations generated, but practical constraints emerge from browser performance and combination count growth. The tool can generate millions of combinations, but displaying them all may slow the browser. Very large sets (100,000+ combinations) work best with immediate download rather than display. The combination size limit of 20 items per combination helps manage result set sizes. For research-scale computations requiring billions of combinations, consider specialized server-side tools.',
  },
  {
    category: 'Output',
    question: 'How do I format combinations for CSV export?',
    answer:
      'To format combinations for CSV export, use comma as the delimiter and newline as the join sets option. This creates standard CSV format with one combination per line. You can add prefixes or suffixes for column headers or metadata. For example, prefixing with "Combination," creates a header-like format. The downloaded file can be imported directly into Excel, Google Sheets, or database systems. Ensure your items don\'t contain commas, or use semicolon delimiters for CSV compatibility. Test with small sets first to verify formatting.',
  },
  {
    category: 'Input',
    question: 'Can I generate combinations with different sizes at once?',
    answer:
      'No, the tool generates combinations of a single specified size per operation. To get combinations of different sizes, generate multiple times with different size values. For example, to get all combinations of sizes 2, 3, and 4 from the same item set, generate three separate times. You can then combine results manually or use the download function for each size and merge files. This approach gives you control over which sizes to generate and helps manage result set sizes for large item collections.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug === '' ? 'home' : toolSlug;
  
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool?.title ?? 'Combination Generator';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Generate all possible combinations from a set of items.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}


export default async function CombinationGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<CombinationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Combination Generator FAQ</h2>
          <p className="text-slate-700">
            Answers about combinations, input formats, output options, and practical use cases.
          </p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
