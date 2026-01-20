import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { PermutationGeneratorTool } from '@/components/tools/PermutationGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'permutation-generator';

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Permutation Generator - Complete Guide to All Possible Permutations</h2>
      
      <h2>Introduction</h2>
      <p>
        A permutation generator is a powerful mathematical tool that creates every possible arrangement of items where order matters. Unlike combinations, where {'{A, B, C}'} and {'{C, B, A}'} are considered identical, permutations treat these as distinct arrangements. This makes permutation generators essential for password creation, sequence generation, arrangement problems, and any scenario where the sequence of items is significant. This comprehensive guide explains how permutations work, when to use them, and how to leverage a permutation generator for maximum effectiveness.
      </p>
      <p>
        The value of a permutation generator becomes clear when you need to explore every possible way to arrange items in sequence. Whether you're generating secure passwords, creating test sequences, solving arrangement problems, or exploring ordered possibilities, a permutation generator automates the systematic enumeration of all arrangements. This saves hours of manual work and ensures no arrangement is overlooked in your analysis or generation process.
      </p>
      <p>
        Modern permutation generators run entirely in your browser, ensuring privacy and speed. They handle complex factorial calculations instantly, generate formatted output ready for use, and provide customization options for different workflows. Whether you're a developer creating test sequences, a security professional generating password variations, or a researcher exploring arrangement possibilities, a permutation generator is an essential tool in your toolkit.
      </p>

      <h2>What Are Permutations?</h2>
      <p>
        Permutations represent arrangements of items where order matters significantly. Mathematically, a permutation is an ordered arrangement of distinct elements from a set. The key distinction from combinations is that {'{A, B, C}'} and {'{C, B, A}'} are considered different permutations because the sequence differs, even though they contain the same items.
      </p>
      <p>
        This differs fundamentally from combinations, where order is irrelevant. For example, if you're arranging 3 items from {'{Red, Green, Blue}'}, the permutations are: Red-Green-Blue, Red-Blue-Green, Green-Red-Blue, Green-Blue-Red, Blue-Red-Green, and Blue-Green-Red. Notice that all six arrangements are listed because each represents a different sequence. In combinations, these would collapse to a single selection, but in permutations, order creates distinct arrangements.
      </p>
      <p>
        Real-world examples of permutations are everywhere. Password generation is a classic case: the sequence of characters matters completely—"ABC123" and "321CBA" are different passwords. Race finishing orders depend on sequence: first, second, third place arrangements matter. Scheduling problems use permutations to explore task sequences. Lock combinations (despite the name) are actually permutations when order matters. Arrangement problems in mathematics and computer science rely on permutations extensively.
      </p>
      <p>
        Understanding when to use permutations versus combinations is crucial. Use permutations when you need to know "which items in what order"—sequence matters. Use combinations when you only care about "which items" without sequence concern. A permutation generator helps you explore all possible arrangements efficiently, while a combination generator handles unordered selections. Many problems require understanding this distinction to choose the right tool and generate correct results.
      </p>

      <h2>How the Permutation Generator Works</h2>
      <p>
        The permutation generator uses a recursive algorithm to systematically explore all possible arrangements. The process begins when you input your items, one per line, and optionally specify the permutation size. The algorithm then recursively builds permutations by selecting items and arranging them in every possible sequence, ensuring completeness and avoiding duplicates.
      </p>
      <p>
        Here's how to use the tool interface: First, enter your items in the input box, with each item on a separate line. Items can be words, numbers, characters, or any text. Next, optionally specify the permutation size—how many items should appear in each permutation. If you leave size empty, the tool generates full permutations using all items. The tool calculates and displays the total number of permutations that will be generated, helping you understand scope before generation.
      </p>
      <p>
        Input requirements are straightforward: enter at least one item, ensure each item is on its own line, and optionally specify a permutation size between 1 and 10. The tool automatically trims whitespace and filters out empty lines. For full permutations, you can enter up to 10 items (producing up to 3,628,800 permutations). For partial permutations, you can enter more items but size is limited to 10 to maintain performance.
      </p>
      <p>
        Size options include full permutations (all items) and partial permutations (specified size). Full permutations use every item exactly once, producing n! arrangements for n items. Partial permutations select r items from n items and arrange them, producing P(n, r) = n! / (n-r)! arrangements. The tool displays which mode you're using and calculates the exact permutation count automatically.
      </p>
      <p>
        Output formatting options provide extensive customization. You can add a prefix before each permutation, such as "Sequence: " or "Arrangement ". Suffixes work similarly, allowing you to append text like " (valid)" or formatting markers. Delimiters control how items within each permutation are separated—default is comma-space, but you can use any separator including newlines, tabs, or custom text. The join sets option determines how different permutations are separated in output, with newline as default for easy reading.
      </p>
      <p>
        Special characters enhance formatting flexibility. Enter \\x in any field to insert a newline character, \\t for a tab, or \\n for a newline (alternative syntax). This allows you to create multi-line permutations, structured output, or formatted sequences. For example, using \\x as a delimiter creates permutations where items appear on separate lines, perfect for sequence generation or structured data creation.
      </p>
      <p>
        Performance considerations are critical for permutations due to factorial growth. The number of permutations grows factorially: 3 items = 6 permutations, 5 items = 120 permutations, 7 items = 5,040 permutations, 10 items = 3,628,800 permutations. This exponential growth means full permutations are limited to 10 items to prevent browser lockups. Partial permutations allow larger item sets with smaller arrangement sizes, providing more flexibility while maintaining performance.
      </p>

      <h2>Mathematical Foundation</h2>
      <p>
        The permutation formula is P(n, r) = n! / (n-r)!, where n is the total number of items and r is the size of each permutation. The exclamation mark represents factorial, meaning n! = n × (n-1) × (n-2) × ... × 2 × 1. This formula calculates how many ways you can arrange r items from n items where order matters.
      </p>
      <p>
        Full permutations use the formula P(n, n) = n!, which simplifies since (n-n)! = 0! = 1. This means arranging all n items produces n! permutations. For example, P(5, 5) = 5! = 120 permutations. Full permutations represent every possible way to arrange all items in sequence, making them useful for complete arrangement exploration.
      </p>
      <p>
        Partial permutations explanation: When r is less than n, you're selecting and arranging a subset. For example, P(10, 3) = 10! / 7! = 10 × 9 × 8 = 720 permutations. This represents all ways to choose 3 items from 10 and arrange them in sequence. Partial permutations are valuable when you need arrangements of subsets rather than complete sets.
      </p>
      <p>
        Examples with calculations illustrate the growth pattern. P(3, 3) = 6 permutations, P(4, 4) = 24 permutations, P(5, 5) = 120 permutations, P(6, 6) = 720 permutations, P(7, 7) = 5,040 permutations, P(8, 8) = 40,320 permutations, P(9, 9) = 362,880 permutations, and P(10, 10) = 3,628,800 permutations. As you can see, factorial growth is extremely rapid, explaining why full permutations are limited to 10 items.
      </p>
      <p>
        Growth rate follows factorial pattern, which grows faster than exponential functions. This means adding one item multiplies the permutation count significantly. For example, going from 9 to 10 items increases permutations from 362,880 to 3,628,800—a tenfold increase. This explosive growth requires careful management, which is why the tool limits full permutations to 10 items and provides partial permutation options for larger sets.
      </p>
      <table>
        <thead>
          <tr>
            <th>Items (n)</th>
            <th>Size (r)</th>
            <th>Permutations</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>6</td>
            <td>Small arrangement</td>
          </tr>
          <tr>
            <td>5</td>
            <td>5</td>
            <td>120</td>
            <td>Password characters</td>
          </tr>
          <tr>
            <td>7</td>
            <td>7</td>
            <td>5,040</td>
            <td>Sequence generation</td>
          </tr>
          <tr>
            <td>10</td>
            <td>10</td>
            <td>3,628,800</td>
            <td>Maximum full permutation</td>
          </tr>
          <tr>
            <td>15</td>
            <td>5</td>
            <td>360,360</td>
            <td>Partial permutation</td>
          </tr>
          <tr>
            <td>20</td>
            <td>5</td>
            <td>1,860,480</td>
            <td>Large set, small size</td>
          </tr>
        </tbody>
      </table>

      <h2>Use Cases and Applications</h2>
      <p>
        Password generation is a primary application for permutation generators. Creating secure passwords requires exploring character arrangements where sequence matters completely. A permutation generator helps create password variations, test password strength, and understand password space size. While actual password generation often uses random selection rather than exhaustive enumeration, permutation generators help analyze password policies and understand arrangement possibilities. Security professionals use permutation analysis to assess password complexity and entropy.
      </p>
      <p>
        Cryptography applications include key generation and encryption analysis. Permutation generators help explore key arrangement possibilities, understand key space sizes, and analyze encryption strength. While actual cryptographic keys use random generation, permutation analysis helps security researchers understand theoretical limits and arrangement spaces. Key management systems use permutation concepts to organize and manage key arrangements systematically.
      </p>
      <p>
        Gaming applications leverage permutations for strategy planning and move sequences. Turn-based games require analyzing possible move sequences, where order matters significantly. Permutation generators help game designers understand possible game states, analyze strategy trees, and explore sequence possibilities. Puzzle games use permutations to generate challenge variations, ensuring diverse gameplay experiences through systematic arrangement exploration.
      </p>
      <p>
        Software testing uses permutation generators for test case generation. Testing sequence-dependent functionality requires exploring all possible input arrangements. API testing needs to test parameter order variations. User interface testing explores interaction sequence possibilities. The systematic nature of permutation generation ensures comprehensive test coverage, identifying edge cases and sequence-dependent bugs that might be missed with random testing.
      </p>
      <p>
        Data analysis applications include sequence analysis and pattern recognition. Analysts explore data arrangement possibilities to identify patterns, test sequence hypotheses, and understand temporal relationships. Time series analysis uses permutation concepts to explore arrangement possibilities. Statistical analysis employs permutation tests to understand data distributions and significance. The systematic enumeration of arrangements provides comprehensive analysis coverage.
      </p>
      <p>
        Educational contexts use permutations for problem solving and learning exercises. Mathematics teachers generate permutation problems to help students understand arrangement principles. Computer science courses use permutation generators to demonstrate algorithm efficiency, recursive thinking, and combinatorial concepts. Statistics courses explore arrangement possibilities to teach probability and counting principles. The tool serves as both a learning aid and a practical demonstration of mathematical concepts.
      </p>
      <p>
        Research applications span experimental design and sequence exploration. Scientists designing experiments need to explore factor arrangement possibilities. Researchers studying sequences use permutation analysis to understand arrangement spaces. Clinical trials explore treatment sequence possibilities. Survey research uses permutation concepts to randomize question orders. The systematic nature of permutation generation ensures comprehensive exploration of arrangement possibilities.
      </p>
      <p>
        Business applications include scheduling and arrangement optimization. Scheduling problems require exploring task sequence possibilities to find optimal arrangements. Resource allocation uses permutation concepts to explore assignment possibilities. Process optimization explores step sequence variations. The systematic enumeration of arrangements helps identify optimal sequences and understand arrangement space comprehensively.
      </p>
      <p>
        Art and design applications use permutations for pattern generation. Designers explore element arrangement possibilities to create pattern variations. Artists use permutation concepts to generate artistic variations systematically. The tool helps create diverse design options by exploring all possible element arrangements, ensuring comprehensive design space exploration and creative possibility discovery.
      </p>

      <h2>Full vs Partial Permutations</h2>
      <p>
        Full permutations use every item exactly once, producing n! arrangements for n items. This is ideal when you need to explore all possible ways to arrange a complete set. Full permutations are perfect for small sets (up to 10 items) where you want comprehensive arrangement coverage. Examples include arranging all letters in a word, ordering all tasks in a process, or sequencing all elements in a set.
      </p>
      <p>
        Partial permutations select and arrange subsets, producing P(n, r) = n! / (n-r)! arrangements. This is ideal when you need arrangements of subsets rather than complete sets. Partial permutations allow larger item sets with manageable arrangement counts. Examples include selecting 5 characters from 26 for password generation, choosing 3 tasks from 10 for sequencing, or arranging 4 items from 20 for testing.
      </p>
      <p>
        Size selection guidelines depend on your needs. Use full permutations when you need complete arrangement coverage and item count is 10 or fewer. Use partial permutations when item count exceeds 10 or when you only need subset arrangements. Consider permutation count: full permutations of 10 items produce 3,628,800 arrangements, while partial permutations of 5 items from 20 produce 1,860,480 arrangements. Choose based on your arrangement needs and performance constraints.
      </p>
      <p>
        Examples for each type illustrate use cases. Full permutation example: arranging all 5 letters {'{A, B, C, D, E}'} produces 120 arrangements, exploring every possible letter sequence. Partial permutation example: arranging 3 items from {'{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}'} produces 720 arrangements, exploring subset sequences. Each type serves different purposes: full permutations for complete coverage, partial permutations for subset exploration with larger sets.
      </p>

      <h2>Advanced Features</h2>
      <p>
        Prefix and suffix options add context to each generated permutation. Prefixes appear before every permutation, useful for labeling, numbering, or adding metadata. For example, prefixing with "Sequence " creates "Sequence A, B, C" style output. Suffixes work similarly, appending text after each permutation. This is valuable for adding status indicators, notes, or formatting markers. Combined with delimiters, you can create highly customized output formats suitable for direct use in code, documents, or databases.
      </p>
      <p>
        Custom delimiters control item separation within permutations. The default comma-space separator works well for most text applications, but you can use any character or string. Semicolons create CSV-friendly output, pipes create command-line friendly formats, and newlines create structured lists. Special characters like \\x insert actual newlines, enabling multi-line permutation formats perfect for sequence generation or structured data creation.
      </p>
      <p>
        Join sets configuration determines how different permutations are separated in output. The default newline creates a clean list format, one permutation per line. Using custom join text like "---" creates clearly separated sections. For CSV export, using comma as join creates a single-line format, though newline is typically preferred. The join sets option works with copy and download functions, ensuring your preferred format is maintained throughout the workflow.
      </p>
      <p>
        Download functionality saves all permutations to a text file instantly. This is essential for large result sets that would be cumbersome to copy manually. The download creates a plain text file with your specified formatting, ready for import into spreadsheets, databases, or other tools. File naming is automatic (permutations.txt), but you can rename after download. The file uses standard line endings compatible with all operating systems.
      </p>
      <p>
        Copy options include individual permutation copying and bulk copy all functionality. Individual copy buttons next to each permutation allow quick extraction of specific results. The copy all button respects your join sets configuration, creating a single clipboard entry with all permutations properly formatted. This is perfect for pasting into documents, code editors, or communication tools. The clipboard format matches your display format exactly.
      </p>
      <p>
        Special character support extends beyond \\x for newlines. The tool recognizes \\t for tabs, \\n as alternative newline syntax, and processes these in all text fields including prefixes, suffixes, delimiters, and join sets. This enables complex formatting scenarios like creating structured data, code templates, or formatted reports directly from the generator output. The special character processing happens automatically, requiring no additional configuration.
      </p>

      <h2>Best Practices</h2>
      <p>
        Choosing between permutations and combinations depends on whether order matters in your use case. Use permutations when order is significant—passwords, sequences, arrangements, race results. Use combinations when order doesn't matter—team selection, product bundling, sampling. The permutation generator handles sequence problems, while combination generators handle selection problems. Understanding this distinction ensures you use the right tool and generate correct results.
      </p>
      <p>
        Size selection tips help manage permutation counts effectively. For full permutations, limit to 10 items to maintain performance. For partial permutations, consider both item count and size: larger item sets with smaller sizes produce manageable counts. Use the displayed permutation count to assess output scope before generation. If counts exceed 100,000, prefer download over display to maintain browser performance. Consider whether you need all permutations or can use strategic sampling.
      </p>
      <p>
        Performance optimization includes using download for large result sets, generating in batches for very large permutation counts, and testing formatting with small sets first. The tool's algorithms are efficient, but rendering thousands of permutations takes time. Download immediately after generation for large sets rather than scrolling through displayed results. Close other browser tabs to free memory if needed. Consider partial permutations for larger item sets to manage permutation counts.
      </p>
      <p>
        Output formatting best practices depend on your use case. For password generation, use no delimiters or custom formats. For sequence generation, use newline delimiters with structured prefixes. For CSV import, use comma delimiters and newline join sets. For human reading, use comma-space delimiters with clear prefixes. Test your formatting with small sets first, then apply to larger generations. The preview count helps you understand output scope before committing to generation.
      </p>
      <p>
        Common mistakes to avoid include confusing permutations with combinations, generating unnecessarily large sets, and forgetting to configure delimiters and join sets. Always verify the permutation count before generating large sets. Another mistake is using full permutations when partial permutations would suffice, wasting computation and creating unnecessarily large result sets. Set your preferences before generation to save time and ensure correct formatting.
      </p>

      <h2>Security and Permutations</h2>
      <p>
        Password generation considerations require understanding permutation spaces and entropy. Permutation generators help analyze password strength by exploring arrangement possibilities, but actual password generation should use cryptographically secure random selection rather than exhaustive enumeration. The permutation count represents password space size, helping assess security. Longer passwords and larger character sets create larger permutation spaces, increasing security. Use permutation analysis to understand password policies, not to generate actual passwords from enumerated lists.
      </p>
      <p>
        Entropy and security relate directly to permutation counts. Password entropy measures randomness and unpredictability, which correlates with permutation space size. A password with n characters from a set of m characters has m^n possible permutations (with repetition) or P(m, n) permutations (without repetition). Larger permutation spaces provide more security. Permutation generators help calculate these spaces, but remember that security depends on random selection, not enumeration. Use permutation analysis for policy design, not password generation.
      </p>
      <p>
        Best practices for secure permutations include using large character sets, avoiding dictionary words, and ensuring random selection rather than systematic enumeration. Permutation generators are tools for analysis and understanding, not for actual secure password creation. For production password generation, use cryptographically secure random number generators. Permutation analysis helps design password policies and understand security implications, but actual passwords should be randomly generated, not systematically enumerated.
      </p>
      <p>
        Limitations for security-critical applications are important to understand. Permutation generators enumerate possibilities systematically, which is useful for analysis but not for secure random generation. Actual security applications require unpredictable randomness, not systematic enumeration. Use permutation generators for understanding password spaces, testing policies, and educational purposes. For production security, use specialized cryptographic tools designed for secure random generation.
      </p>

      <h2>Limitations and Considerations</h2>
      <p>
        Maximum size limits exist to maintain browser performance. Full permutations are limited to 10 items (producing up to 3,628,800 permutations) to prevent browser lockups. Partial permutations allow larger item sets but limit size to 10 items per permutation. Very large item sets with moderate permutation sizes can still produce millions of permutations, so use judgment when generating. The limits balance functionality with performance, covering most practical use cases while maintaining browser responsiveness.
      </p>
      <p>
        Browser performance varies with permutation count. Modern browsers handle thousands of permutations smoothly, but tens of thousands may cause noticeable slowdowns during generation and display. The tool uses efficient algorithms, but rendering thousands of DOM elements takes time. If you experience slowdowns, use the download function immediately after generation rather than scrolling through results. Consider generating in smaller batches or using partial permutations for larger item sets if performance becomes an issue.
      </p>
      <p>
        Alternative methods may be needed for extremely large permutation sets. For millions of permutations, consider server-side generation or specialized combinatorial libraries. The browser-based tool excels at practical, human-scale problems but has limits for research-scale computations. When permutation counts exceed 100,000, evaluate whether you need all permutations or can use sampling or other approximation techniques. Server-side tools handle research-scale permutation generation more effectively.
      </p>
      <p>
        Privacy considerations are straightforward: the tool runs entirely in your browser. No data is sent to servers, no inputs are stored, and no tracking occurs. Your items and generated permutations remain on your device throughout the process. This ensures complete privacy, making the tool suitable for sensitive data, proprietary information, or confidential use cases. The download and copy functions use standard browser APIs with no external communication.
      </p>

      <h2>Comparison with Combination Generator</h2>
      <p>
        Key differences between permutation and combination generators center on order significance. Permutations consider order (AB ≠ BA), while combinations ignore order (AB = BA). This fundamental difference determines which tool to use for specific problems. Selection problems need combinations, arrangement problems need permutations. Many problems require both: first combinations to select items, then permutations to arrange selected items.
      </p>
      <p>
        When to use each tool depends on your problem structure. Use permutation generators for sequence problems: passwords, race orders, task sequences, arrangements. Use combination generators for selection problems: team formation, product bundling, sampling, item selection. Understanding this distinction ensures you choose the right tool and generate correct results. Some problems clearly fit one category, while others may benefit from sequential use of both tools.
      </p>
      <p>
        Complementary use cases show how both tools work together. A workflow might use combinations to select items, then permutations to arrange selected items. For example, first use combinations to select 5 players from 20, then use permutations to arrange those 5 players in batting order. This sequential approach leverages both tools effectively, using each for its strength: combinations for selection, permutations for arrangement.
      </p>

      <h2>Conclusion</h2>
      <p>
        A permutation generator is an essential tool for anyone working with arrangement problems where order matters. From developers creating test sequences to security professionals analyzing password spaces, the tool provides systematic enumeration of all possible arrangements. With customizable output, privacy-focused operation, and efficient algorithms, it handles practical permutation problems effectively while maintaining browser performance.
      </p>
      <p>
        Understanding when to use permutations versus combinations, how to configure output formatting, and how to manage large result sets enables you to leverage the tool's full potential. Whether you're exploring password possibilities, generating test sequences, or solving arrangement problems, the permutation generator provides a reliable, fast, and private solution. Start with small sets to familiarize yourself with the interface, then scale up to larger problems as needed, always mindful of factorial growth and performance considerations.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a permutation generator?',
    answer:
      'A permutation generator is a tool that creates all possible ways to arrange items from a set where order matters. For example, arranging 3 items from {' + '{A, B, C}' + '} produces 6 permutations: ABC, ACB, BAC, BCA, CAB, CBA. Unlike combinations, permutations treat ABC and CBA as different because sequence matters. Permutation generators automate the systematic enumeration of all arrangements, making them essential for password analysis, sequence generation, arrangement problems, and any scenario where item order is significant.',
  },
  {
    category: 'General',
    question: 'What is the difference between permutations and combinations?',
    answer:
      'Permutations consider order (AB ≠ BA), while combinations ignore order (AB = BA). Use permutations when sequence matters—creating passwords, race orders, or arrangements. Use combinations when you only care about selection—choosing team members or product bundles. A permutation generator handles arrangement problems, while a combination generator handles selection problems. Many problems require understanding this distinction to choose the right tool and generate correct results for your specific problem type.',
  },
  {
    category: 'General',
    question: 'How does the permutation generator work?',
    answer:
      'The permutation generator uses a recursive algorithm to systematically explore every possible arrangement. You input items (one per line) and optionally specify permutation size. The algorithm recursively builds permutations by selecting and arranging items in every possible sequence. It calculates total permutations using P(n, r) = n! / (n-r)! and displays this before generation. The process runs entirely in your browser for privacy and speed, generating formatted output ready for use. Full permutations use all items, partial permutations use specified subsets.',
  },
  {
    category: 'Technical',
    question: 'What is the mathematical formula for permutations?',
    answer:
      'The permutation formula is P(n, r) = n! / (n-r)!, where n is total items and r is permutation size. The exclamation mark represents factorial. For example, P(5, 3) = 5! / 2! = 120 / 2 = 60 permutations. Full permutations use P(n, n) = n!, which simplifies since (n-n)! = 1. For example, P(5, 5) = 5! = 120 permutations. The tool calculates this automatically and displays the result, helping you understand output scope before generation. Understanding the formula helps you estimate permutation counts for planning purposes.',
  },
  {
    category: 'General',
    question: 'What is a full permutation?',
    answer:
      'A full permutation uses every item exactly once, producing n! arrangements for n items. This explores all possible ways to arrange a complete set. Full permutations are ideal for small sets (up to 10 items) where you want comprehensive arrangement coverage. Examples include arranging all letters in a word, ordering all tasks in a process, or sequencing all elements in a set. The tool limits full permutations to 10 items to maintain browser performance, as 10 items produce 3,628,800 permutations.',
  },
  {
    category: 'General',
    question: 'What is a partial permutation?',
    answer:
      'A partial permutation selects and arranges a subset of items, producing P(n, r) = n! / (n-r)! arrangements where r is less than n. This allows larger item sets with manageable arrangement counts. For example, arranging 5 items from 20 produces P(20, 5) = 1,860,480 permutations. Partial permutations are ideal when you need arrangements of subsets rather than complete sets, or when item count exceeds 10. The tool limits permutation size to 10 items per permutation to maintain performance.',
  },
  {
    category: 'Input',
    question: 'When should I use full vs partial permutations?',
    answer:
      'Use full permutations when you need complete arrangement coverage and item count is 10 or fewer. This explores every possible way to arrange all items. Use partial permutations when item count exceeds 10 or when you only need subset arrangements. Consider permutation count: full permutations of 10 items produce 3,628,800 arrangements, while partial permutations of 5 items from 20 produce 1,860,480 arrangements. Choose based on your arrangement needs, performance constraints, and whether you need complete or subset coverage.',
  },
  {
    category: 'Input',
    question: 'How many permutations can I generate?',
    answer:
      'The number of permutations depends on your input size and permutation length. Small sets produce manageable counts: 3 items gives 6 permutations, 5 items gives 120 permutations. Larger sets grow factorially: 7 items = 5,040, 8 items = 40,320, 9 items = 362,880, 10 items = 3,628,800 permutations. Partial permutations allow larger item sets: 15 items of size 5 produces 360,360 permutations. The tool displays the exact count before generation. Very large sets (100,000+ permutations) may slow browser performance, so use download for large result sets.',
  },
  {
    category: 'Input',
    question: 'What is the maximum number of items for full permutations?',
    answer:
      'The maximum number of items for full permutations is 10. This limit prevents browser lockups, as 10 items produce 3,628,800 permutations. Full permutations use the formula n!, which grows factorially. Going from 9 to 10 items increases permutations from 362,880 to 3,628,800—a tenfold increase. The 10-item limit balances functionality with performance, covering most practical full permutation use cases while maintaining browser responsiveness. For larger sets, use partial permutations to explore subset arrangements.',
  },
  {
    category: 'Input',
    question: 'What is the maximum size for partial permutations?',
    answer:
      'The maximum size for partial permutations is 10 items per permutation. This means you can generate permutations of size 10 from larger item sets. For example, you can generate permutations of size 10 from 20, 50, or 100 items. The size limit helps maintain browser performance while allowing exploration of larger item sets. Very large item sets with size 10 can still produce millions of permutations, so use judgment and the displayed permutation count to assess output scope before generation.',
  },
  {
    category: 'Output',
    question: 'How are permutations formatted in the output?',
    answer:
      'Permutations are formatted based on your delimiter settings. The default uses comma-space separation, creating output like "A, B, C". You can customize delimiters to use semicolons, pipes, newlines, or any text. Prefix and suffix options add text before and after each permutation. The join sets option controls how different permutations are separated—default is newline for easy reading. Special characters like \\x insert actual newlines, enabling multi-line formats. This flexibility lets you create output ready for code, CSV, documents, or databases.',
  },
  {
    category: 'Output',
    question: 'Can I add a prefix or suffix to each permutation?',
    answer:
      'Yes, the tool supports both prefix and suffix options. Prefixes appear before every permutation, useful for labeling like "Sequence " or "Arrangement ". Suffixes append text after each permutation, perfect for status indicators or formatting markers. Both support special characters: use \\x for newlines, \\t for tabs. This enables complex formatting like numbered lists, structured data, or code templates. Combined with custom delimiters, you can create highly customized output formats suitable for direct use in your workflow without manual editing.',
  },
  {
    category: 'Output',
    question: 'What are delimiters and how do I use them?',
    answer:
      'Delimiters control how items within each permutation are separated. The default comma-space creates readable output like "A, B, C". You can change this to semicolons for CSV compatibility, pipes for command-line tools, or newlines for structured lists. Special characters enhance formatting: \\x inserts actual newlines, \\t inserts tabs. For example, using \\x as delimiter creates permutations where items appear on separate lines, perfect for sequence generation. Delimiters work with prefixes and suffixes to create comprehensive formatting control.',
  },
  {
    category: 'Output',
    question: 'How do I use special characters like \\x?',
    answer:
      'Enter \\x in any text field (prefix, suffix, delimiter, or join sets) to insert a newline character. The tool automatically converts \\x to actual line breaks in the output. You can also use \\t for tabs or \\n as alternative newline syntax. This enables multi-line permutations, structured formatting, and code generation. For example, prefixing with "Sequence:\\x" and using \\x as delimiter creates permutations with items on separate lines. Special character processing happens automatically, requiring no additional configuration.',
  },
  {
    category: 'Output',
    question: 'Can I download the results?',
    answer:
      'Yes, the tool includes a download function that saves all permutations to a text file instantly. Click the "Download" button after generation to save permutations.txt with your specified formatting. The file uses standard line endings compatible with all operating systems. Download is essential for large result sets that would be cumbersome to copy manually. The downloaded file maintains your delimiter, prefix, suffix, and join sets settings, ready for import into spreadsheets, databases, or other tools.',
  },
  {
    category: 'Output',
    question: 'What file format is used for downloads?',
    answer:
      'Downloads create plain text files (.txt) with standard line endings. The format matches your display settings exactly: delimiters, prefixes, suffixes, and join sets are all preserved. This creates files ready for CSV import (if you use comma delimiters), code use (if you use newline formatting), or document inclusion (if you use readable separators). The file is UTF-8 encoded, ensuring compatibility with all text editors and systems. You can rename the file after download if needed.',
  },
  {
    category: 'Output',
    question: 'How do I copy all permutations at once?',
    answer:
      'Click the "Copy All" button to copy every permutation to your clipboard in one operation. The copied text respects your join sets configuration, creating a single clipboard entry with all permutations properly formatted. This is perfect for pasting into documents, code editors, or communication tools. Individual permutation copy buttons are also available next to each result for quick extraction of specific permutations. The clipboard format matches your display format exactly, ensuring consistency across copy operations.',
  },
  {
    category: 'Input',
    question: 'What happens if I enter duplicate items?',
    answer:
      'Duplicate items are handled automatically—they\'re treated as distinct items in the input. However, duplicate items create identical permutations, which may not add value. For example, {' + '{A, A, B}' + '} creates permutations AAB, ABA, BAA, but AAB and ABA are identical if the A\'s are indistinguishable. The tool processes duplicates correctly but they may create redundant permutations. For clean results, remove duplicates before generation. The tool doesn\'t automatically deduplicate input, giving you control over whether duplicates should be included.',
  },
  {
    category: 'Input',
    question: 'Can I generate permutations with repetition?',
    answer:
      'This tool generates permutations without repetition, meaning each item appears at most once per permutation. If you need permutations with repetition (where items can appear multiple times), you\'ll need a specialized tool. Permutations with repetition use a different formula: n^r and produce different result sets. For example, permutations of {' + '{A, B}' + '} of size 2 without repetition gives AB, BA, but with repetition gives AA, AB, BA, BB. Most practical applications use permutations without repetition, which this tool handles.',
  },
  {
    category: 'Technical',
    question: 'How do I calculate the total number of permutations?',
    answer:
      'Use the formula P(n, r) = n! / (n-r)!, where n is total items and r is permutation size. Calculate factorials: n! = n × (n-1) × ... × 2 × 1. For full permutations, P(n, n) = n!. For example, P(10, 3) = 10! / 7! = 3,628,800 / 5,040 = 720. The tool calculates this automatically and displays it before generation. Online permutation calculators can verify results, but the tool\'s built-in calculation is accurate and instant. Understanding the formula helps you estimate permutation counts for planning.',
  },
  {
    category: 'Usage',
    question: 'What are some real-world use cases?',
    answer:
      'Common use cases include password generation analysis (exploring character arrangement possibilities), sequence generation (creating ordered sequences for testing), arrangement problems (solving mathematical and computational challenges), software testing (generating test case sequences), scheduling optimization (exploring task sequence possibilities), game strategy (analyzing move sequences), and research applications (exploring arrangement spaces). Each use case benefits from systematic enumeration of all possible arrangements, which a permutation generator provides efficiently.',
  },
  {
    category: 'Usage',
    question: 'Can I use this for password generation?',
    answer:
      'Permutation generators help analyze password spaces and understand arrangement possibilities, but actual password generation should use cryptographically secure random selection rather than exhaustive enumeration. Use permutation analysis to understand password strength, calculate password space sizes, and design password policies. For actual password creation, use specialized password generators with secure random number generation. Permutation generators are tools for analysis and understanding, not for production password generation from enumerated lists.',
  },
  {
    category: 'Security',
    question: 'Is this suitable for secure password creation?',
    answer:
      'No, permutation generators are not suitable for actual secure password creation. They enumerate possibilities systematically, which is useful for analysis but creates predictable, enumerable password lists. Actual security requires unpredictable randomness from cryptographically secure random number generators. Use permutation generators for understanding password spaces, testing policies, and educational purposes. For production password generation, use specialized cryptographic tools designed for secure random generation. Permutation analysis helps design policies, but actual passwords must be randomly generated.',
  },
  {
    category: 'General',
    question: 'How do permutations differ from combinations?',
    answer:
      'Permutations consider order (AB ≠ BA), while combinations ignore order (AB = BA). This fundamental difference determines which tool to use. Arrangement problems need permutations: passwords, race orders, task sequences. Selection problems need combinations: team formation, product bundling, sampling. Many problems use both: first combinations to select items, then permutations to arrange selected items. Understanding this distinction ensures you use the right tool and generate correct results for your specific problem type.',
  },
  {
    category: 'Input',
    question: 'Can I generate permutations for more than 10 items?',
    answer:
      'Yes, but with limitations. For full permutations, the maximum is 10 items (producing 3,628,800 permutations). For partial permutations, you can enter more than 10 items, but permutation size is limited to 10 items per permutation. For example, you can generate permutations of size 5 from 20, 50, or 100 items. Very large item sets with moderate permutation sizes can still produce millions of permutations, so use judgment and the displayed permutation count to assess output scope before generation.',
  },
  {
    category: 'Technical',
    question: 'What should I do if the browser becomes slow?',
    answer:
      'If browser performance degrades with large permutation sets, use the download function immediately after generation rather than scrolling through displayed results. Rendering thousands of DOM elements causes slowdowns, but generation and download remain fast. For extremely large sets, consider generating in smaller batches or using partial permutations for larger item sets. Closing other browser tabs frees memory. If slowdowns persist, the result set may be too large for practical browser-based processing—consider server-side alternatives for research-scale computations.',
  },
  {
    category: 'Privacy',
    question: 'Are my inputs stored or sent to a server?',
    answer:
      'No, the tool runs entirely in your browser using client-side JavaScript. No data is sent to servers, no inputs are stored, and no tracking occurs. Your items and generated permutations remain on your device throughout the process. This ensures complete privacy, making the tool suitable for sensitive data, proprietary information, or confidential use cases. Download and copy functions use standard browser APIs with no external communication. You can verify this by using the tool offline after initial page load.',
  },
  {
    category: 'Technical',
    question: 'How accurate are the generated permutations?',
    answer:
      'The generated permutations are mathematically accurate and complete. The recursive algorithm systematically explores every possible arrangement without missing or duplicating permutations. The tool uses precise integer arithmetic for permutation counting and generation. Results match mathematical formulas exactly. You can verify accuracy by checking permutation counts against the formula P(n, r) = n! / (n-r)! or using online permutation calculators. The algorithm is deterministic and produces consistent, correct results for any valid input.',
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
    question: 'Is there a limit on the number of permutations?',
    answer:
      'There\'s no hard limit on total permutations generated, but practical constraints emerge from browser performance and factorial growth. The tool can generate millions of permutations, but displaying them all may slow the browser. Very large sets (100,000+ permutations) work best with immediate download rather than display. Full permutations are limited to 10 items, and partial permutation size is limited to 10 items per permutation. For research-scale computations requiring billions of permutations, consider specialized server-side tools.',
  },
  {
    category: 'Output',
    question: 'How do I format permutations for CSV export?',
    answer:
      'To format permutations for CSV export, use comma as the delimiter and newline as the join sets option. This creates standard CSV format with one permutation per line. You can add prefixes or suffixes for column headers or metadata. For example, prefixing with "Permutation," creates a header-like format. The downloaded file can be imported directly into Excel, Google Sheets, or database systems. Ensure your items don\'t contain commas, or use semicolon delimiters for CSV compatibility. Test with small sets first to verify formatting.',
  },
  {
    category: 'Input',
    question: 'Can I generate permutations with different sizes at once?',
    answer:
      'No, the tool generates permutations of a single specified size per operation. To get permutations of different sizes, generate multiple times with different size values. For example, to get all permutations of sizes 2, 3, and 4 from the same item set, generate three separate times. You can then combine results manually or use the download function for each size and merge files. This approach gives you control over which sizes to generate and helps manage result set sizes for large item collections.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between P(n,r) and P(n,n)?',
    answer:
      'P(n, r) represents partial permutations: selecting and arranging r items from n items, producing n! / (n-r)! arrangements. P(n, n) represents full permutations: arranging all n items, producing n! arrangements (since (n-n)! = 1). Partial permutations explore subset arrangements, while full permutations explore complete set arrangements. For example, P(10, 3) = 720 partial permutations, while P(10, 10) = 3,628,800 full permutations. Choose based on whether you need subset or complete arrangements.',
  },
  {
    category: 'Technical',
    question: 'How do I handle very large permutation sets?',
    answer:
      'For very large permutation sets, use the download function immediately after generation rather than displaying all results. Rendering thousands of permutations can slow the browser, but generation and download remain fast. Consider generating in smaller batches if permutation counts exceed 100,000. Use partial permutations for larger item sets to manage permutation counts. Use the displayed permutation count to assess output scope before generation. If slowdowns persist, the result set may be too large for practical browser-based processing—consider server-side alternatives for research-scale computations.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool?.title ?? 'Permutation Generator';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Generate all possible permutations where order matters.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}


export default async function PermutationGeneratorPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const toolKey = toolSlug;
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<PermutationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Permutation Generator FAQ</h2>
          <p className="text-slate-700">
            Answers about permutations, input formats, output options, and practical use cases.
          </p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
