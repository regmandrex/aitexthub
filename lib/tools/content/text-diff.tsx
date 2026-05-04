import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Text Diff: Free Online Side-by-Side Text Comparison and Difference Finder</h2>
        <p>
          Comparing two versions of text "” a configuration file before and after editing, two similar
          documents that need to be reconciled, code with and without a proposed change, translated content
          against an original "” is a fundamental task in software development, technical writing, and content
          management. Our free online text diff tool shows you exactly what changed between two text blocks
          using a clear, color-coded diff view with line-by-line and character-level comparison, highlighting
          additions in green and deletions in red.
        </p>
        <p>
          All comparison runs in your browser "” no text content is sent to any server. Paste two versions
          of any text, click compare, and instantly see every addition, deletion, and modification clearly
          highlighted. Choose between side-by-side view (two panels showing both versions simultaneously)
          and unified view (single panel with changes interleaved, like git diff output). Supports any text
          content: code, configuration files, prose documents, log files, JSON, YAML, CSV data, and more.
        </p>

        <h2>What Is a Text Diff?</h2>
        <p>
          A "diff" (short for difference) is a representation of what changed between two versions of a
          text file or string. The concept comes from the Unix <code>diff</code> command, first released
          in 1974, which compares two files and outputs the changes needed to transform one into the other.
          This output format became the foundation of version control systems and collaborative editing tools.
        </p>
        <p>
          The core algorithm underlying most diff tools "” including our web-based tool "” is the Longest
          Common Subsequence (LCS) algorithm, which finds the maximum number of lines (or characters) that
          appear in the same relative order in both texts. Lines not in the LCS are classified as either
          additions (in the new version but not the old) or deletions (in the old version but not the new).
        </p>
        <p>
          Modern diff implementations use variations and optimizations of the LCS algorithm to handle large
          files efficiently: Eugene Myers' O(ND) diff algorithm, the Patience diff algorithm (used in git),
          and the Histogram diff algorithm (also used in git for certain file types). Each produces slightly
          different diffs for the same input, with tradeoffs between performance and readability of the
          generated diff.
        </p>

        <h2>Understanding Diff Output Formats</h2>

        <h3>Side-by-Side Diff</h3>
        <p>
          The side-by-side view shows the old text on the left and the new text on the right, with
          corresponding lines aligned horizontally. Modified lines appear on both sides with character-level
          changes highlighted within each line. Additions appear only on the right side; deletions appear
          only on the left side. This view is best for understanding the context of each change and how
          corresponding sections relate to each other.
        </p>

        <h3>Unified Diff</h3>
        <p>
          The unified diff format (used by git diff) shows changes in a single column with context lines
          to help orient readers. Lines starting with <code>+</code> were added; lines starting with
          <code>-</code> were removed; lines starting with a space are context (unchanged). Context lines
          provide surrounding unchanged content so readers understand where in the file each change occurs.
        </p>
        <p>
          A typical unified diff chunk looks like:
        </p>
        <pre>{`@@ -10,7 +10,8 @@
 function calculateTotal(items) {
-  let total = 0;
+  let total = 0.00;
   for (const item of items) {
-    total += item.price;
+    total += item.price * item.quantity;
   }
+  return parseFloat(total.toFixed(2));
 }`}</pre>
        <p>
          The <code>@@</code> hunk header <code>-10,7 +10,8</code> means: starting at line 10 in the
          original file (7 lines shown), starting at line 10 in the new file (8 lines shown).
        </p>

        <h3>Inline Diff (Character-Level)</h3>
        <p>
          Character-level diffing highlights changes within individual lines rather than just showing
          entire lines as added or removed. This is invaluable when lines differ by only a single
          character "” a typo, a number change, a renamed variable "” where showing the entire line
          as changed would obscure the small but critical difference.
        </p>
        <p>
          Our tool performs character-level diffing within changed lines by default, similar to how
          GitHub highlights intra-line differences in pull request reviews.
        </p>

        <h2>Myers Diff Algorithm: The Foundation of git diff</h2>
        <p>
          Eugene Myers published the O(ND) difference algorithm in 1986. It finds the shortest edit
          script "” the minimum number of insertions and deletions needed to transform one string into
          another. This minimum edit script corresponds to the LCS approach: the more common content
          two texts share, the shorter the edit script.
        </p>
        <p>
          Git uses the Myers algorithm by default (<code>git diff --diff-algorithm=myers</code>).
          Other algorithms git supports:
        </p>
        <ul>
          <li>
            <strong>Patience</strong>: identifies unique lines that appear exactly once in both files
            and uses them as "anchors" for the diff. Produces more human-readable diffs for code that
            has been reorganized. Use with <code>git diff --patience</code>.
          </li>
          <li>
            <strong>Histogram</strong>: an extension of Patience that handles low-occurrence lines
            more efficiently. Generally recommended over Patience for code. Use with
            <code>git diff --histogram</code>.
          </li>
          <li>
            <strong>Minimal</strong>: produces the absolute minimum edit distance, often at the cost
            of readability. Use with <code>git diff --minimal</code>.
          </li>
        </ul>
        <p>
          Our tool uses the Myers algorithm for line-level diff and a specialized character-level
          algorithm for intra-line highlighting.
        </p>

        <h2>The Longest Common Subsequence Problem</h2>
        <p>
          The LCS problem asks: given two sequences, what is the longest subsequence of elements that
          appears in both sequences in the same relative order, not necessarily contiguously? For text
          diffing, the sequences are lines (for line-level diff) or characters (for character-level diff).
        </p>
        <p>
          Dynamic programming solves LCS in O(mn) time and space, where m and n are the lengths of
          the two sequences. For long files, this can be slow "” a naive implementation comparing two
          files with 10,000 lines each requires 100 million operations. Optimized algorithms like Myers'
          work in O(ND) time, where N = m + n and D = edit distance, which is much faster when files
          are similar (small D).
        </p>
        <p>
          For our web-based tool, files up to several thousand lines are compared nearly instantly.
          Very large files (100,000+ lines) may take a few seconds due to browser JavaScript constraints.
        </p>

        <h2>Diff in Version Control: Git and Beyond</h2>
        <p>
          The diff concept is inseparable from modern version control systems. Git stores snapshots of
          repository state, not diffs, but displays changes as diffs for human consumption:
        </p>
        <ul>
          <li>
            <code>git diff</code>: changes in working directory vs staging area
          </li>
          <li>
            <code>git diff --staged</code>: staged changes vs last commit
          </li>
          <li>
            <code>git diff HEAD~1</code>: changes introduced by the last commit
          </li>
          <li>
            <code>git diff branch1..branch2</code>: differences between two branches
          </li>
          <li>
            <code>git log -p</code>: commit history with patch diffs
          </li>
        </ul>
        <p>
          Code review platforms (GitHub, GitLab, Bitbucket) display pull request changes as diffs.
          The ability to review diffs effectively is one of the most valuable skills in collaborative
          software development.
        </p>

        <h2>Practical Applications of Text Diffing</h2>

        <h3>Code Review Without Git</h3>
        <p>
          When you need to compare code changes outside a git workflow "” comparing two files in different
          repositories, comparing a file across different environments, reviewing changes made by a
          collaborator without git access "” our online diff tool provides the same visualization as a
          git diff without requiring any version control setup.
        </p>

        <h3>Configuration File Comparison</h3>
        <p>
          Infrastructure teams regularly compare configuration files across environments: production
          vs staging, current vs desired state, deployed version vs repository version. Configuration
          diffs often reveal subtle differences (different port numbers, missing environment variables,
          extra debugging flags) that cause "works in staging but not in production" bugs. Our tool
          handles YAML, TOML, INI, JSON, and any text-based configuration format.
        </p>

        <h3>Document Version Comparison</h3>
        <p>
          Technical writers, legal teams, and content creators frequently need to compare document versions:
          previous draft vs revised draft, contract version A vs contract version B, translated content
          vs original. Our tool highlights every word and character change, making revision review
          systematic rather than requiring careful manual reading.
        </p>

        <h3>Log File Analysis</h3>
        <p>
          Comparing log files from two time periods or two server instances helps identify what changed
          when a behavior changed. Comparing a known-good log against a suspicious log highlights anomalous
          entries. Our tool handles multi-thousand-line log files with clear visualization of added and
          removed log entries.
        </p>

        <h3>Database Schema Comparison</h3>
        <p>
          Comparing SQL DDL from two database instances (production vs staging, before vs after migration)
          reveals schema drift "” tables that exist in one environment but not another, column type
          differences, missing indexes. Paste two <code>SHOW CREATE TABLE</code> outputs or schema dumps
          to see exactly what changed.
        </p>

        <h3>API Response Comparison</h3>
        <p>
          When debugging API behavior changes, comparing two API responses (formatted JSON) shows exactly
          which fields changed, which were added, and which were removed. This is far faster than reading
          two JSON blobs side by side manually. Format the JSON first with our JSON formatter, then
          compare with our diff tool for clean, readable results.
        </p>

        <h3>Translation and Localization Review</h3>
        <p>
          Comparing translation files (JSON, YAML, PO format, Android strings.xml) against the source
          language file or a previous translation version shows missing translations, outdated strings,
          and unexpected additions.
        </p>

        <h2>Diff Algorithms for Code: Special Considerations</h2>

        <h3>Whitespace Handling</h3>
        <p>
          Code diffs often produce noise from whitespace changes: converting tabs to spaces, reformatting,
          adding trailing newlines. Our tool offers whitespace normalization options:
        </p>
        <ul>
          <li><strong>Ignore all whitespace</strong>: treats whitespace-only differences as no change</li>
          <li><strong>Ignore leading whitespace</strong>: useful for indentation changes (re-indented code blocks)</li>
          <li><strong>Ignore trailing whitespace</strong>: ignores trailing space/tab differences</li>
          <li><strong>Ignore empty lines</strong>: treats added or removed blank lines as no change</li>
        </ul>

        <h3>Case Sensitivity</h3>
        <p>
          Case-insensitive comparison is useful for comparing natural language text or case-insensitive
          systems (Windows file paths, SQL keywords). Case-sensitive comparison (the default) is necessary
          for code, configuration, and most technical content where case is significant.
        </p>

        <h3>Line Ending Normalization</h3>
        <p>
          Files edited on different operating systems may have different line endings: <code>\n</code>
          (Unix/Linux/macOS), <code>\r\n</code> (Windows CRLF), or <code>\r</code> (old macOS Classic).
          When comparing files that originated on different platforms, line ending differences can make
          every line appear changed. Our tool normalizes line endings before comparison by default.
        </p>

        <h2>Semantic Diff vs Syntactic Diff</h2>
        <p>
          Standard text diff is syntactic "” it compares text character-by-character and line-by-line
          without understanding the meaning of the content. Semantic diff understands the structure of
          the content type and compares meaning:
        </p>
        <ul>
          <li>
            <strong>JSON semantic diff</strong>: recognizes that object key order doesn't matter and
            array element order does matter. Two JSON objects with the same key-value pairs in different
            orders are semantically identical.
          </li>
          <li>
            <strong>XML/HTML semantic diff</strong>: understands attribute order is irrelevant, namespace
            prefixes are interchangeable with consistent declarations, and equivalent empty element forms
            (<code>&lt;br/&gt;</code> vs <code>&lt;br&gt;&lt;/br&gt;</code>) are the same.
          </li>
          <li>
            <strong>AST diff (code diff)</strong>: compares Abstract Syntax Trees of parsed code, finding
            semantic refactors (variable renaming) vs behavioral changes (logic modification).
          </li>
        </ul>
        <p>
          Our tool performs syntactic text diff. For JSON semantic diff, format both JSONs with sorted
          keys (using our JSON formatter) before comparing "” this normalizes key order differences.
        </p>

        <h2>Diff Output in Code Review Workflows</h2>

        <h3>Pull Request Reviews</h3>
        <p>
          GitHub, GitLab, and Bitbucket all display pull request changes as diffs with the same green/red
          color coding used in our tool. Understanding how to read diffs efficiently makes code review faster:
          start with the most complex changed functions, look for logical errors in the delta rather than
          re-reading unchanged code, and use the character-level highlighting to catch subtle bugs like
          off-by-one errors or swapped variable names.
        </p>

        <h3>Patch Files</h3>
        <p>
          The unified diff format is also used in "patch files" "” text files containing diffs that can
          be applied to transform one file version to another using the <code>patch</code> command.
          Our tool can generate patch-format output that you can save and apply with
          <code>patch -p0 &lt; changes.patch</code>.
        </p>

        <h2>Measuring Diff Complexity: Edit Distance Metrics</h2>
        <p>
          The edit distance between two texts can be measured in several ways:
        </p>
        <ul>
          <li>
            <strong>Levenshtein distance</strong>: minimum insertions, deletions, and substitutions to
            transform one string into another. Character-level for strings, line-level for files.
          </li>
          <li>
            <strong>Hamming distance</strong>: number of positions where two equal-length strings differ.
            Only applies to strings of the same length.
          </li>
          <li>
            <strong>Jaro-Winkler distance</strong>: similarity score 0-1 for strings, optimized for
            short strings like names. Not used for file diff but useful for fuzzy matching.
          </li>
          <li>
            <strong>Diff hunk count</strong>: number of separate changed regions. A large number of
            small hunks suggests scattered whitespace changes; a small number of large hunks suggests
            focused feature changes.
          </li>
        </ul>
        <p>
          Our tool displays statistics: lines added, lines removed, characters changed, percentage
          similarity "” giving you a quantitative sense of how different the two texts are.
        </p>

        <h2>Privacy and Performance</h2>
        <p>
          All text comparison runs entirely in your browser using JavaScript. No text content from
          either input is transmitted to our servers. The diff algorithm runs locally, making it safe
          for comparing confidential documents, proprietary source code, personal communications, or
          any sensitive content. There are no file size limits imposed by server resources "” practical
          limits are set only by your browser's available memory (our tool handles files up to several
          megabytes without issues).
        </p>
        <p>
          The diff computation uses optimized JavaScript implementations of the Myers and LCS algorithms
          that process most inputs in milliseconds. For very large files (tens of thousands of lines),
          computation may take a few seconds "” a progress indicator shows real-time status.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a text diff tool?',
    answer:
      'A text diff tool compares two versions of text and highlights the differences "” additions (green), deletions (red), and modifications "” using a diff algorithm. It shows exactly what changed between the two versions, making changes immediately visible rather than requiring manual comparison.',
  },
  {
    category: 'General',
    question: 'What types of text can I compare?',
    answer:
      'Any text content: source code (any language), configuration files (YAML, JSON, TOML, INI), documentation, natural language text, log files, SQL schemas, CSV data, HTML, XML, or any plain text format. The tool compares characters and lines without knowledge of the content type.',
  },
  {
    category: 'General',
    question: 'Is my text safe to paste into this diff tool?',
    answer:
      'Yes "” all comparison runs entirely in your browser. No text from either input panel is transmitted to our servers. Safe for confidential documents, proprietary source code, customer data, or any sensitive content.',
  },
  {
    category: 'Algorithms',
    question: 'What algorithm does this diff tool use?',
    answer:
      'Line-level diff uses the Myers O(ND) diff algorithm "” the same algorithm used by git diff by default. Character-level diff within changed lines uses a specialized LCS (Longest Common Subsequence) algorithm. Together they provide both coarse-grained (line) and fine-grained (character) difference visualization.',
  },
  {
    category: 'Algorithms',
    question: 'What is the Myers diff algorithm?',
    answer:
      'Eugene Myers&#39; O(ND) diff algorithm (1986) finds the shortest edit script "” minimum insertions and deletions "” to transform one text into another. It runs in time proportional to the edit distance (D) times the total content size (N), making it very fast when files are similar. Git uses this algorithm by default.',
  },
  {
    category: 'Algorithms',
    question: 'What is the difference between Myers, Patience, and Histogram diff?',
    answer:
      'Myers produces shortest edit scripts but can create confusing diffs for reorganized code. Patience diff identifies unique anchor lines and groups changes around them "” better for reorganized code. Histogram (git&#39;s recommended algorithm) extends Patience with better low-frequency line handling. Our tool uses Myers; git supports all three via --diff-algorithm flag.',
  },
  {
    category: 'Output',
    question: 'What is the difference between side-by-side and unified diff view?',
    answer:
      'Side-by-side shows old text on the left and new text on the right with corresponding lines aligned. Best for understanding context and relationships. Unified view shows changes in a single column with + (added) and - (removed) prefixes and context lines, like git diff output. Best for reviewing sequential changes.',
  },
  {
    category: 'Output',
    question: 'What does character-level highlighting show?',
    answer:
      'Character-level highlighting shows the specific characters that changed within a modified line, not just that the line changed. If only one word changed on a line, only that word is highlighted "” making subtle differences like typos, renamed variables, or changed numbers immediately visible.',
  },
  {
    category: 'Options',
    question: 'What does "ignore whitespace" do in a diff?',
    answer:
      'Ignore whitespace treats whitespace-only differences (spaces, tabs, indentation) as equivalent. Lines that differ only in whitespace are treated as unchanged. Useful when comparing code that was reformatted (different indentation, tab-to-space conversion) where you only care about logical content changes.',
  },
  {
    category: 'Options',
    question: 'What does "ignore case" do in a diff?',
    answer:
      'Case-insensitive comparison treats uppercase and lowercase letters as equivalent. "Hello" and "hello" are treated as the same. Useful for comparing documentation, natural language content, or case-insensitive identifiers. Not recommended for code comparisons where case is significant.',
  },
  {
    category: 'Options',
    question: 'What does "normalize line endings" do?',
    answer:
      'Normalizes line endings converts \\r\\n (Windows CRLF) and \\r (old macOS) to \\n (Unix) before comparison. Without this, files from different operating systems appear completely changed even when content is identical. Enabled by default to prevent false positives from cross-platform editing.',
  },
  {
    category: 'Use Cases',
    question: 'How do I compare two JSON files for differences?',
    answer:
      'Format both JSON files with consistent indentation and sorted keys first (use our JSON formatter with "sort keys" option), then paste into the diff tool. Sorted keys normalize key order so semantically identical objects aren&#39;t flagged as different due to key ordering.',
  },
  {
    category: 'Use Cases',
    question: 'How do I compare Kubernetes YAML manifests?',
    answer:
      'Format both manifests with our YAML formatter to normalize indentation and key ordering, then paste into the diff tool. This removes formatting noise and shows only meaningful configuration differences "” which is useful for comparing production vs staging manifests or before/after changes.',
  },
  {
    category: 'Use Cases',
    question: 'Can I use this to review code changes without git?',
    answer:
      'Yes "” paste the old version in the left panel and the new version in the right panel. You get the same green/red diff visualization as GitHub pull requests. Useful when comparing code from different sources (two repos, two servers, two deployments) that aren&#39;t in the same git history.',
  },
  {
    category: 'Git',
    question: 'How does git diff work?',
    answer:
      'git diff uses the Myers algorithm by default to compute the minimum edit script between two versions of a file stored in git&#39;s object database. It displays results in unified diff format: context lines (space prefix), additions (+ prefix), and deletions (- prefix). The @@ hunk headers show line numbers in both versions.',
  },
  {
    category: 'Git',
    question: 'How do I read the @@ line numbers in a unified diff?',
    answer:
      '@@ -10,7 +10,8 @@ means: the shown context starts at line 10 in the old file (showing 7 lines) and line 10 in the new file (showing 8 lines). The extra line in the new file indicates one net addition. Negative numbers reference the old file; positive numbers reference the new file.',
  },
  {
    category: 'Statistics',
    question: 'How is "similarity percentage" calculated?',
    answer:
      'Similarity is typically calculated as: (2 Ã— number of matching characters) / (total characters in both texts). A 100% similarity means identical texts. 0% means completely different. Our tool shows lines added, lines removed, and character-level change statistics alongside this overall similarity measure.',
  },
  {
    category: 'Performance',
    question: 'How large of a file can I compare?',
    answer:
      'No server-imposed size limits "” limits are set by your browser&#39;s available memory. Files up to several megabytes (tens of thousands of lines) are compared in seconds. Very large files (100,000+ lines) may take 10-30 seconds. For files over several MB, consider using command-line diff tools for performance.',
  },
  {
    category: 'Technical',
    question: 'What is the Longest Common Subsequence (LCS) and how does it relate to diff?',
    answer:
      'The LCS is the longest sequence of lines (or characters) that appear in the same relative order in both texts. Lines in the LCS are unchanged; lines not in the LCS are insertions or deletions. The diff is essentially the complement of the LCS "” showing everything that is NOT common between the two texts.',
  },
  {
    category: 'Technical',
    question: 'What is edit distance?',
    answer:
      'Edit distance (Levenshtein distance) is the minimum number of operations (insertions, deletions, sometimes substitutions) needed to transform one text into another. Diff tools find an edit script close to this minimum. A diff with fewer total added+removed lines is "closer" to the minimum edit distance.',
  },
  {
    category: 'Export',
    question: 'Can I export the diff result?',
    answer:
      'Yes "” our tool supports exporting as: unified diff format (text file applicable with the patch command), HTML with color-coded highlighting (for documentation or email), and plain text summary (lines added/removed statistics). Copy the unified diff output to use with standard patch utilities.',
  },
  {
    category: 'Semantic',
    question: 'Does the diff tool understand the meaning of the content?',
    answer:
      'No "” text diff is syntactic, comparing characters and lines without understanding content meaning. JSON object key order affects the diff even when semantically equivalent. For semantic comparison, preprocess: sort JSON keys, normalize YAML, format SQL consistently, then compare the normalized versions.',
  },
  {
    category: 'General',
    question: 'What is a text diff tool?',
    answer:
      'A text diff tool compares two pieces of text and highlights the differences between them "” showing which words, lines, or characters were added, removed, or changed. This free online text diff tool performs word-level comparison and color-codes additions in green and removals in red. It is used for comparing document versions, reviewing code changes, checking edited content, and auditing before/after revisions.',
  },
];

export const textDiffContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
