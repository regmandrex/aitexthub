import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Sort Lines Tool: Complete Guide to Text Sorting, Deduplication, and Line Ordering</h2>
      <p>
        Sorting lines of text is one of the oldest and most fundamental operations in computing. The Unix <code>sort</code> command, introduced in 1971 with the first edition of Unix, remains one of the most frequently invoked shell utilities more than fifty years later. A line sort tool takes any block of text — a list of names, file paths, IP addresses, domain names, log entries, code identifiers, or any line-delimited data — and reorders those lines according to a specified criterion: alphabetical, reverse alphabetical, by numeric value, by length, randomly, or deduplicated.
      </p>
      <p>
        Despite its apparent simplicity, sorting has nuances that matter enormously in practice. Does "Apple" sort before "banana" (case-sensitive ASCII order) or after "Banana" (case-insensitive natural order)? Does "10" sort after "9" (numerically) or before "2" (lexicographically)? Does the sort handle blank lines, leading/trailing whitespace, Unicode characters, and locale-specific collation? Understanding these nuances separates a tool that produces the result you expect from one that silently gives you something subtly wrong.
      </p>

      <h2>Sorting Algorithms: The Engine Behind the Tool</h2>
      <p>
        While you don't need to understand sorting algorithms to use a sort lines tool, knowing the basics helps you appreciate why sorting is fast even for large inputs and what performance characteristics to expect.
      </p>

      <h3>Comparison-Based Sorting Lower Bound</h3>
      <p>
        Any algorithm that sorts by comparing pairs of elements cannot do better than O(n log n) comparisons in the worst case, where n is the number of items. This is a mathematical lower bound proven by information theory: sorting n items requires distinguishing between n! possible orderings, which requires at least log₂(n!) ≈ n log n bits of information, one bit per comparison.
      </p>
      <p>
        The practical consequence: sorting 1,000 lines takes roughly 10,000 comparisons; sorting 1,000,000 lines takes roughly 20,000,000 comparisons — not 1,000× more work but only 2,000× more. Sorting scales well with input size.
      </p>

      <h3>Merge Sort and Timsort</h3>
      <p>
        Most modern programming language standard libraries use Timsort, a hybrid of merge sort and insertion sort developed by Tim Peters for Python in 2002. Timsort is O(n log n) in the worst case and O(n) on already-sorted or nearly-sorted data. It is stable (preserves the relative order of equal elements), adaptive (exploits existing order in the data), and performs exceptionally well on real-world data which often contains partially sorted runs.
      </p>
      <p>
        JavaScript's Array.prototype.sort() is required to be stable as of ECMAScript 2019 and typically implements Timsort or a similar stable algorithm. Java's Arrays.sort() for objects uses merge sort. Python's list.sort() and sorted() are pure Timsort.
      </p>

      <h3>Radix Sort for Special Cases</h3>
      <p>
        For sorting integers or fixed-length strings, radix sort achieves O(n) time — faster than the comparison lower bound — by exploiting the structure of the keys. It processes digits (or character positions) from least significant to most significant, using counting sort at each digit position. Radix sort is used in database engines and file systems where ultra-fast integer key sorting is critical, but it requires knowing the key type and length in advance.
      </p>

      <h2>Sorting Modes Explained</h2>

      <h3>Alphabetical Ascending (A→Z)</h3>
      <p>
        Alphabetical ascending sort orders lines by their characters from left to right, applying lexicographic (dictionary) ordering. In standard ASCII ordering: digits (0–9) come before uppercase letters (A–Z) which come before lowercase letters (a–z). So "10" sorts before "Apple" which sorts before "banana" in ASCII order.
      </p>
      <p>
        Case-insensitive alphabetical sorting treats 'A' and 'a' as equivalent, typically by normalizing to a canonical case before comparison. This produces the natural dictionary ordering most humans expect: "apple", "Banana", "cherry" rather than "Banana", "apple", "cherry".
      </p>

      <h3>Alphabetical Descending (Z→A)</h3>
      <p>
        Simply the reverse of ascending alphabetical sort. Useful for quickly seeing the last items in an ordered list, checking the end of a filename or IP address list, or when your downstream process expects Z-to-A order.
      </p>

      <h3>Numeric Sort</h3>
      <p>
        Numeric sorting compares lines as numbers rather than strings. Without numeric sort: "1", "10", "2", "20" sorts as "1", "10", "2", "20" (lexicographic). With numeric sort: "1", "2", "10", "20". This is critical for sorting version numbers, file sizes, quantities, prices, line numbers, port numbers, and any other numeric data embedded in text.
      </p>
      <p>
        Numeric sort typically extracts the leading numeric portion of each line for comparison. Lines that don't start with a number are treated as having value 0 or sorted separately. GNU sort's <code>-n</code> flag provides this behavior. More sophisticated numeric extraction can sort on a specific column or field within each line.
      </p>

      <h3>Sort by Line Length</h3>
      <p>
        Sorting lines by character count (ascending or descending) is useful for:
      </p>
      <ul>
        <li>Finding the longest/shortest entries in a list (column widths, domain names, function names)</li>
        <li>Sorting CSS properties where shorter lines might indicate simpler rules</li>
        <li>Ordering SQL fields by name length for alignment</li>
        <li>Finding outlier records (unusually long lines may indicate data quality issues)</li>
        <li>Prioritizing items by "simplicity" (shortest = simplest in many contexts)</li>
      </ul>

      <h3>Random Shuffle</h3>
      <p>
        Random shuffling (Fisher-Yates shuffle algorithm) randomizes the order of lines with uniform probability. Every permutation is equally likely. This is used for:
      </p>
      <ul>
        <li>Randomizing the order of test cases to detect order-dependent test failures</li>
        <li>Shuffling flashcard lists or vocabulary lists for study</li>
        <li>Creating random subsamples of data for analysis</li>
        <li>Randomizing the order of items in presentations or quizzes</li>
        <li>Generating random lottery/raffle selections from a list of participants</li>
      </ul>
      <p>
        Note that browser-based shuffles use <code>Math.random()</code>, which is a pseudo-random number generator (PRNG) — suitable for non-security purposes. For cryptographically random shuffles (card games, lottery systems), use a CSPRNG like the Web Crypto API's <code>crypto.getRandomValues()</code>.
      </p>

      <h3>Reverse Sort</h3>
      <p>
        Reverse sort reverses the current order, whatever that order is. This can mean reverse alphabetical, reverse numeric, or simply flipping an already-sorted list. It is distinct from "sort descending" when applied to an unsorted list — reverse sort on an unsorted list just gives you the original list in reverse, not a descending-sorted list.
      </p>

      <h2>Deduplication: Removing Duplicate Lines</h2>
      <p>
        Deduplication removes duplicate lines, keeping only one copy of each unique line. This operation is often combined with sorting because:
      </p>
      <ol>
        <li>Sorting brings identical lines together, making deduplication faster and simpler (compare adjacent pairs rather than maintaining a hash set)</li>
        <li>The Unix pipeline <code>sort | uniq</code> has been the canonical deduplication approach for 50 years, processing files of any size with constant memory</li>
        <li>Users often want a sorted, deduplicated list — the two operations naturally compose</li>
      </ol>

      <h3>Case-Sensitive vs. Case-Insensitive Deduplication</h3>
      <p>
        Case-sensitive deduplication treats "Apple" and "apple" as different lines and keeps both. Case-insensitive deduplication treats them as duplicates and keeps only one (typically the first encountered). Which mode is correct depends on your data: for code identifiers, case-sensitive is usually correct; for proper nouns, domain names, and general text, case-insensitive is usually preferable.
      </p>

      <h3>Whitespace-Normalized Deduplication</h3>
      <p>
        Some deduplication tools normalize whitespace before comparison, treating "  hello world  " as a duplicate of "hello world". This prevents false non-duplicates caused by inconsistent spacing, which is particularly useful when processing data extracted from HTML, PDFs, or spreadsheets where invisible whitespace differences are common.
      </p>

      <h3>Counting Duplicates</h3>
      <p>
        Rather than removing duplicates, you might want to count them — equivalent to the <code>sort | uniq -c</code> Unix pipeline. This produces output like "5 apple", "3 banana", "1 cherry", showing frequency alongside the unique value. This is essentially word frequency counting applied to complete lines rather than words.
      </p>

      <h2>Practical Applications of Line Sorting</h2>

      <h3>Sorting and Deduplicating Email Lists</h3>
      <p>
        Email marketing and outreach lists frequently accumulate duplicates through multiple import sources, form submissions, and data merges. Running an email list through a case-insensitive sort and deduplication removes duplicates and produces a clean, alphabetically ordered list. Always deduplicate before sending campaigns to avoid embarrassing repeat contacts.
      </p>

      <h3>Sorting Import Statements</h3>
      <p>
        Many coding style guides require sorted import statements. Python's isort, JavaScript's eslint-plugin-import, and Go's goimports all sort imports alphabetically by default. When these auto-formatters aren't available or aren't configured, pasting your imports into a sort tool and replacing them is a quick manual alternative.
      </p>
      <p>
        Sorted imports provide several benefits: easier visual scanning for a specific import, easier diffing (import additions are obviously new lines, not lost in a reordered block), and reduced merge conflicts (two developers adding different imports to the same file are less likely to conflict if both append to an alphabetical list).
      </p>

      <h3>Alphabetizing CSS Properties</h3>
      <p>
        Alphabetically sorted CSS properties within a rule set make it easier to find specific properties and prevent duplicate declarations. The stylelint <code>order/properties-alphabetical-order</code> rule enforces this. Pasting a rule's properties into a sort tool and replacing them is a quick way to alphabetize existing CSS without running a linter.
      </p>

      <h3>Sorting File Lists and Paths</h3>
      <p>
        File paths produced by tools like <code>find</code>, <code>ls -la</code>, or file system explorers can be sorted to find files alphabetically, by directory depth (sort by path length), or to identify duplicates (same filename appearing in multiple directories). Numeric sort on file paths that include version numbers sorts them correctly.
      </p>

      <h3>Processing Log Files</h3>
      <p>
        Sorting log lines by timestamp (if timestamps are at the start of each line in a sortable format like ISO 8601) reorders events chronologically when logs from multiple sources are merged. Sorting by IP address, user agent, or error message groups related events together for easier analysis. Deduplication removes repeated identical log entries caused by retry storms or logging configuration issues.
      </p>

      <h3>Sorting DNS Records and Domain Lists</h3>
      <p>
        DNS zone files list records in declaration order, which is often creation order and not alphabetical. Sorting zone file lines alphabetically groups records by subdomain, making it easy to see all records for a given subdomain, spot missing records, or compare zones from two environments.
      </p>
      <p>
        Domain allowlists and blocklists (for firewall rules, content filters, or ad blockers) are typically sorted alphabetically for human readability and binary search performance. Sorting your custom additions before merging them into an existing list keeps the list orderly.
      </p>

      <h3>Sorting Kubernetes Manifests</h3>
      <p>
        Kubernetes YAML files often contain labels, annotations, environment variables, and volume mounts in arbitrary order. Sorting environment variable names and label keys alphabetically makes manifests easier to read, diff, and maintain. It also makes it easier to spot duplicate keys (which YAML technically allows but most parsers handle inconsistently).
      </p>

      <h3>Preparing Word Lists for Testing</h3>
      <p>
        Security testing tools, dictionary attack tools, autocomplete systems, and spell checkers all use sorted word lists. Sorting and deduplicating a word list before use ensures no duplicate entries waste processing time and enables binary search for O(log n) lookup.
      </p>

      <h3>Alphabetizing Reference Lists and Bibliographies</h3>
      <p>
        Academic papers, technical documents, and reports typically require alphabetically sorted reference lists. Pasting bibliography entries into a sort tool and sorting alphabetically is faster than manual reordering, especially for large reference sections.
      </p>

      <h2>Advanced Sort Techniques</h2>

      <h3>Natural Sort Order</h3>
      <p>
        Natural sort order (also called human sort order) is a sorting algorithm that handles embedded numbers in strings intelligently. Standard lexicographic sort orders "file10.txt" before "file2.txt" (because "1" &lt; "2"). Natural sort recognizes the embedded numbers and sorts numerically within string context: "file1.txt", "file2.txt", ..., "file10.txt", "file20.txt".
      </p>
      <p>
        Natural sort is important for file names (img1.jpg, img2.jpg, ..., img10.jpg), version numbers (v1.2.3, v1.10.0, v2.0.0), chapter names (Chapter 1, Chapter 2, ..., Chapter 10), and any list mixing alphabetic and numeric content.
      </p>

      <h3>Locale-Aware Collation</h3>
      <p>
        Different languages have different rules for character ordering. In Swedish, "ä" comes after "z". In Spanish (traditional collation), "ch" and "ll" were treated as single letters with their own positions in the alphabet. German sorting can place "ü" with "u" or after "z" depending on the collation rule chosen.
      </p>
      <p>
        For international data, locale-aware collation using the Unicode Collation Algorithm (UCA) produces sorting results that match the expectations of speakers of each language. The JavaScript <code>Intl.Collator</code> API provides locale-aware string comparison: <code>new Intl.Collator('sv').compare(a, b)</code> for Swedish sort order.
      </p>

      <h3>Multi-Key Sort</h3>
      <p>
        Multi-key sort orders by a primary key, then by a secondary key when the primary keys are equal, then by a tertiary key, and so on. GNU sort's <code>-k</code> flag supports this: <code>sort -k2,2 -k1,1</code> sorts by the second field, then by the first field within ties. This is fundamental to database-style sorting of structured text.
      </p>

      <h3>Stable vs. Unstable Sort</h3>
      <p>
        A stable sort preserves the original relative order of equal elements. If line A and line B are equal (for the sort criterion) and A appeared before B in the input, a stable sort guarantees A still appears before B in the output. An unstable sort makes no such guarantee.
      </p>
      <p>
        Stability matters when chaining multiple sorts: sort by secondary key first, then by primary key using a stable sort. The result is sorted by primary key, with ties broken by the original secondary key order. This is the "sort-stable multi-key" technique.
      </p>

      <h3>External Sort for Large Files</h3>
      <p>
        When a file is too large to fit in memory for sorting (terabytes of log data, for example), external sorting techniques split the file into memory-sized chunks, sort each chunk, write sorted chunks to temporary files, then merge all sorted chunks using a merge algorithm. GNU sort automatically performs external sorting when the input exceeds available memory, using disk as temporary storage.
      </p>

      <h2>The Unix Sort Command: Reference</h2>
      <p>
        The GNU <code>sort</code> command is the gold standard for command-line line sorting. Key options:
      </p>
      <ul>
        <li><code>sort file.txt</code> — alphabetical ascending sort</li>
        <li><code>sort -r file.txt</code> — reverse (descending) alphabetical</li>
        <li><code>sort -n file.txt</code> — numeric sort</li>
        <li><code>sort -rn file.txt</code> — numeric descending</li>
        <li><code>sort -u file.txt</code> — sort and deduplicate (unique)</li>
        <li><code>sort -f file.txt</code> — case-insensitive (fold case)</li>
        <li><code>sort -h file.txt</code> — human-readable numeric sort (1K, 2M, 3G)</li>
        <li><code>sort -R file.txt</code> — random shuffle</li>
        <li><code>sort -k2,2 file.txt</code> — sort by second field</li>
        <li><code>sort -t',' -k3,3n file.txt</code> — sort CSV by 3rd column numerically</li>
        <li><code>sort -V file.txt</code> — version sort (natural sort for version strings)</li>
        <li><code>sort --parallel=4 file.txt</code> — use 4 threads for parallel sort</li>
      </ul>
      <p>
        The <code>uniq</code> command, typically used after sort, provides additional deduplication options:
      </p>
      <ul>
        <li><code>sort file.txt | uniq</code> — deduplicate sorted output</li>
        <li><code>sort file.txt | uniq -c</code> — count occurrences of each unique line</li>
        <li><code>sort file.txt | uniq -d</code> — show only duplicate lines</li>
        <li><code>sort file.txt | uniq -u</code> — show only unique (non-duplicate) lines</li>
      </ul>

      <h2>Sorting in Programming Languages</h2>

      <h3>JavaScript</h3>
      <pre><code>{`// Sort strings alphabetically
const lines = text.split('\\n');
lines.sort(); // lexicographic
lines.sort((a, b) => a.localeCompare(b)); // locale-aware
lines.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // case-insensitive

// Numeric sort
lines.sort((a, b) => parseFloat(a) - parseFloat(b));

// Sort by line length
lines.sort((a, b) => a.length - b.length);

// Deduplicate after sort
const unique = [...new Set(lines)];
// or after sorting: lines.filter((v, i) => v !== lines[i-1]);`}</code></pre>

      <h3>Python</h3>
      <pre><code>{`lines = text.splitlines()

# Alphabetical
lines.sort()

# Case-insensitive
lines.sort(key=str.lower)

# Numeric (lines that contain numbers)
lines.sort(key=lambda x: float(x.strip()) if x.strip().replace('.','').isdigit() else 0)

# By length
lines.sort(key=len)

# Deduplicate (preserving order)
seen = set()
unique = [x for x in lines if not (x in seen or seen.add(x))]

# Sort + deduplicate
unique_sorted = sorted(set(lines))`}</code></pre>

      <h3>Shell (Bash)</h3>
      <pre><code>{`# Sort file
sort file.txt

# Sort and save result
sort file.txt > sorted.txt

# In-place sort (GNU sort)
sort -o file.txt file.txt

# Sort + deduplicate
sort -u file.txt

# Sort lines in a variable
echo "$lines" | sort`}</code></pre>

      <h2>Common Pitfalls and Edge Cases</h2>

      <h3>Blank Lines</h3>
      <p>
        Blank lines in your input can cause unexpected behavior. Blank lines sort before all non-blank lines in ASCII order (the empty string is lexicographically smallest). After deduplication, multiple blank lines collapse to one. If blank lines are not meaningful in your data, strip them before sorting: <code>grep -v '^$' file.txt | sort</code>.
      </p>

      <h3>Trailing Whitespace</h3>
      <p>
        Lines with trailing spaces or tabs sort differently from lines without. "apple " (with trailing space) is different from "apple" in a case-sensitive, whitespace-sensitive sort. If your data might have inconsistent trailing whitespace, trim lines before sorting. This is especially common with data copied from spreadsheets or HTML tables.
      </p>

      <h3>Line Ending Inconsistency</h3>
      <p>
        Text files can use Unix line endings (LF: \n), Windows line endings (CRLF: \r\n), or old Mac line endings (CR: \r). Mixing line endings produces garbled sort results because the carriage return character (\r, ASCII 13) sorts between uppercase and lowercase letters. Always normalize line endings before sorting multi-source data.
      </p>

      <h3>Unicode Sort Order</h3>
      <p>
        Without locale-aware collation, Unicode characters sort by their Unicode code point values. Accented characters (é, ñ, ü) have code points above 127 and sort after all ASCII characters. This means "école" sorts after "zoo" in simple byte-order sort. For proper multilingual sort order, use locale-aware collation (<code>Intl.Collator</code> in JS, <code>locale.strcoll</code> in Python, <code>sort -l</code> on Linux with a locale set).
      </p>

      <h3>Version Number Sorting</h3>
      <p>
        Version numbers like "1.10.0", "1.9.0", "2.0.0" require special handling. Simple lexicographic sort gives "1.10.0", "1.9.0", "2.0.0" — correct here only by luck. But "1.10.0" would sort before "1.9.0" which is wrong. GNU sort's <code>-V</code> flag handles version sort correctly. In JavaScript, you can split on "." and compare components numerically.
      </p>

      <h2>When Sorting Doesn't Help</h2>
      <p>
        Not all line ordering problems benefit from sort. When the order of lines encodes dependency relationships (Makefile rules, SQL migration files, configuration blocks with precedence), sorting destroys that semantic structure. When lines form a narrative sequence (log entries in chronological order, numbered steps in a procedure), sorting disrupts the intended reading order. Always consider whether the lines are independently ordered or structurally interdependent before applying sort.
      </p>

      <h2>Performance at Scale</h2>
      <p>
        For files up to several megabytes, any in-browser sort tool handles the operation instantly. For very large files — millions of lines, gigabytes of data — browser-based tools have memory limitations. The practical upper limit for comfortable browser processing is roughly 50–100 MB of text. Beyond that, use GNU sort (which handles arbitrarily large files via external sort) or a scripting language that streams the file rather than loading it all into memory.
      </p>
      <p>
        GNU sort is particularly impressive at scale. With parallel sort enabled (<code>--parallel=N</code>), it can sort gigabytes of data in seconds on modern hardware. It uses merge sort with automatic external sorting and can handle input files larger than available RAM by using disk for temporary storage.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a line sort tool and what does it do?',
    answer: 'A line sort tool takes a block of text and reorders its lines according to a specified criterion: alphabetical ascending or descending, numeric order, by line length, randomly, or deduplicated. It is used for cleaning lists, sorting imports, organizing data, removing duplicates, and preparing text for downstream processing.',
  },
  {
    category: 'General',
    question: 'What is the difference between alphabetical and numeric sort?',
    answer: 'Alphabetical sort compares lines as strings character by character. Numeric sort compares lines as numbers. The difference matters when numbers are embedded in text: "10" sorts before "2" alphabetically (because "1" < "2") but after "2" numerically. Always use numeric sort for lines containing quantities, prices, version numbers, or other numeric data.',
  },
  {
    category: 'General',
    question: 'What is deduplication and when should I use it?',
    answer: 'Deduplication removes duplicate lines, keeping only one copy of each unique line. Use it when you\'ve merged multiple lists (email lists, domain lists, file lists) and want to remove repeated entries, when copy-pasting from multiple sources created duplicates, or when your downstream tool requires unique entries only.',
  },
  {
    category: 'Usage',
    question: 'How do I sort import statements in code?',
    answer: 'Paste your import block into a sort lines tool and select alphabetical ascending sort. This produces imports in A-to-Z order by module name. Many style guides and linters (Python\'s isort, Go\'s goimports, JavaScript\'s eslint-plugin-import) require sorted imports for consistency and easier diffing.',
  },
  {
    category: 'Usage',
    question: 'How do I remove duplicate emails from a list?',
    answer: 'Paste your email list (one email per line) into a sort lines tool, enable case-insensitive mode, and select sort with deduplication. Case-insensitive matching ensures "User@Example.com" and "user@example.com" are recognized as duplicates. The result is a clean, sorted, deduplicated email list.',
  },
  {
    category: 'Usage',
    question: 'How do I sort a list of IP addresses correctly?',
    answer: 'IP addresses like 192.168.1.1 don\'t sort correctly with alphabetical sort (192.168.1.10 would sort before 192.168.1.9). For correct IP sort, you need either a specialized IP sort tool or split the address into octets and sort numerically. Some tools support this as a "version sort" or natural sort mode.',
  },
  {
    category: 'Algorithms',
    question: 'What sorting algorithm does this tool use?',
    answer: 'Browser-based sort tools typically use JavaScript\'s Array.prototype.sort(), which uses Timsort (a hybrid merge sort/insertion sort) in most modern engines. Timsort is stable, O(n log n) worst case, and O(n) on nearly-sorted data. It preserves the relative order of equal elements, which matters when chaining multiple sort operations.',
  },
  {
    category: 'Algorithms',
    question: 'What is Timsort and why does it matter?',
    answer: 'Timsort is a hybrid sorting algorithm combining merge sort and insertion sort, developed by Tim Peters for Python in 2002. It is now used in Python, Java, and JavaScript. It is stable (preserves order of equal elements), adaptive (faster on partially sorted data — O(n) on already sorted input), and performs well on real-world data that often contains sorted runs.',
  },
  {
    category: 'Algorithms',
    question: 'What is natural sort order?',
    answer: 'Natural sort order handles embedded numbers in strings intelligently, sorting "file2.txt" before "file10.txt" (because 2 < 10) rather than the lexicographic order "file10.txt" before "file2.txt" (because "1" < "2"). It is important for file names, version numbers, and any list mixing text with numbers.',
  },
  {
    category: 'Algorithms',
    question: 'What is a stable sort and why does it matter?',
    answer: 'A stable sort preserves the original relative order of equal elements. If line A and line B are equal for the sort criterion and A came before B in the input, a stable sort guarantees A still comes before B in the output. Stability matters when chaining sorts: sort by secondary key first, then stable-sort by primary key. The result is sorted by primary key with ties in original secondary key order.',
  },
  {
    category: 'Deduplication',
    question: 'What is the difference between case-sensitive and case-insensitive deduplication?',
    answer: 'Case-sensitive deduplication treats "Apple" and "apple" as different lines and keeps both. Case-insensitive deduplication treats them as duplicates and keeps only one. Use case-sensitive mode for code identifiers and data where capitalization is meaningful; use case-insensitive mode for names, domains, and general text.',
  },
  {
    category: 'Deduplication',
    question: 'How do I count how many times each line appears instead of removing duplicates?',
    answer: 'Most line sort tools focus on deduplication rather than counting. To count occurrences, use the Unix command: `sort file.txt | uniq -c | sort -rn`. This sorts lines, counts each unique line\'s occurrences, then sorts by count descending. In Python: `from collections import Counter; Counter(text.splitlines())`.',
  },
  {
    category: 'Deduplication',
    question: 'How do I find lines that appear in one list but not another?',
    answer: 'Use the Unix comm command: `comm -23 <(sort list1.txt) <(sort list2.txt)` shows lines unique to list1. `comm -13` shows lines unique to list2. `comm -12` shows lines in both. This is the command-line equivalent of set difference and intersection operations on sorted lists.',
  },
  {
    category: 'Technical',
    question: 'How does the tool handle blank lines?',
    answer: 'Blank lines sort before all non-blank lines in ASCII/lexicographic order (the empty string is lexicographically smallest). After deduplication, multiple blank lines collapse to one blank line. If blank lines are not meaningful in your data, remove them before sorting using a "remove blank lines" preprocessing step.',
  },
  {
    category: 'Technical',
    question: 'Does the tool handle Unicode characters correctly?',
    answer: 'Without locale-aware collation, Unicode characters sort by Unicode code point values, placing accented characters (é, ñ, ü) after all ASCII characters. For correct multilingual alphabetical order (where "école" should sort near "ecole" rather than after "zoo"), locale-aware collation using the Unicode Collation Algorithm is required.',
  },
  {
    category: 'Technical',
    question: 'How do I sort lines in JavaScript?',
    answer: 'Split text into lines, sort the array, then rejoin: `text.split("\\n").sort().join("\\n")` for basic alphabetical. For case-insensitive: `.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))`. For numeric: `.sort((a, b) => parseFloat(a) - parseFloat(b))`. For length: `.sort((a, b) => a.length - b.length)`. Use `[...new Set(arr)]` to deduplicate.',
  },
  {
    category: 'Technical',
    question: 'How do I sort lines in Python?',
    answer: '`lines = text.splitlines(); lines.sort()` for basic alphabetical. `lines.sort(key=str.lower)` for case-insensitive. `lines.sort(key=len)` for by length. `sorted(set(lines))` for sorted and deduplicated. `lines.sort(key=lambda x: float(x))` for numeric (assumes each line is a number).',
  },
  {
    category: 'Technical',
    question: 'What are the key options of the Unix sort command?',
    answer: '`sort -r` (reverse), `sort -n` (numeric), `sort -u` (unique/deduplicate), `sort -f` (case-insensitive fold), `sort -h` (human-readable: 1K, 2M), `sort -R` (random), `sort -V` (version sort), `sort -k2,2` (sort by field 2), `sort -t\',\' -k3,3n` (sort CSV by column 3 numerically), `sort --parallel=4` (4-thread parallel sort).',
  },
  {
    category: 'Performance',
    question: 'How large a file can a browser-based sort tool handle?',
    answer: 'Browser-based sort tools comfortably handle files up to roughly 50–100 MB. Larger files may cause browser memory issues. For very large files (gigabytes of log data, millions of lines), use the GNU sort command, which handles arbitrarily large files via external sorting (using disk as temporary storage) and supports parallel sorting for speed.',
  },
  {
    category: 'Applications',
    question: 'How do I sort version numbers correctly?',
    answer: 'Version numbers like "1.9.0" and "1.10.0" don\'t sort correctly with alphabetical sort (1.10.0 sorts before 1.9.0 because "1" < "9"). Use GNU sort\'s `-V` flag for correct version sort, or in code split on "." and compare components numerically: `a.split(".").map(Number)` compared element by element.',
  },
  {
    category: 'Applications',
    question: 'Can I sort CSS properties alphabetically with this tool?',
    answer: 'Yes — paste the properties from a CSS rule (without the selectors and braces), sort alphabetically, then paste back. This manually achieves what stylelint\'s `order/properties-alphabetical-order` rule enforces automatically. Alphabetical CSS properties make it easier to find specific properties and prevent duplicate declarations.',
  },
  {
    category: 'Applications',
    question: 'How do I use sort to find common lines between two lists?',
    answer: 'Unix comm command on two sorted files: `comm -12 <(sort list1.txt) <(sort list2.txt)` shows lines in both lists (set intersection). For a browser-based approach, sort both lists, then compare them visually or programmatically. In Python: `set(list1_lines) & set(list2_lines)` gives the intersection.',
  },
  {
    category: 'Applications',
    question: 'Should I sort lines in Kubernetes YAML files?',
    answer: 'Sorting metadata labels, annotations, and environment variable names within Kubernetes YAML makes manifests more readable, easier to diff, and helps spot duplicate keys. However, do NOT sort lines in Kubernetes YAML globally — YAML structure is indentation-sensitive and order matters for sequences. Only sort within specific sections (like the `env:` list) using a YAML-aware tool.',
  },
  {
    category: 'Edge Cases',
    question: 'What happens if lines have mixed line endings (CRLF vs LF)?',
    answer: 'Mixed line endings cause unexpected sort results because the carriage return character (\\r) sorts between uppercase Z and lowercase a in ASCII, making Windows-style CRLF lines sort differently than Unix LF lines. Always normalize line endings before sorting. Most text editors can convert between line ending styles (CRLF↔LF).',
  },
];

export const sortLinesContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
