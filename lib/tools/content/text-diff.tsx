import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Text Diff: Free Online Side-by-Side Text Comparison and Difference Finder</h2>
        <p>Evaluating changes between text sources "" checking configuration revisions before and after updates, inspecting divergent drafts that require consolidation, auditing code adjustments against existing branches, or verifying localized copy alongside source text "" forms an indispensable workflow across engineering, technical documentation, and web authoring. Our free web-based text diff utility clarifies precisely where text segments differ via an intuitive visual comparison that operates at line and character resolution, marking fresh insertions in green while showing removed lines in red.</p>
        <p>All processing operates completely client-side in your web browser "" your text is never uploaded to any remote system. Drop two blocks of text into the interface, execute the comparison, and instantly inspect added phrases, dropped words, and changed lines clearly highlighted. Toggle smoothly between a split-screen layout (viewing two text panels parallel to each other) or a unified representation (displaying an integrated chronological view, similar to a standard git diff command). It handles all types of source material: programming code, system files, long-form articles, debug logs, JSON payloads, YAML configurations, CSV data, and beyond.</p>

        <h2>What Is a Text Diff?</h2>
        <p>Known colloquially as a "diff" (short for difference), this format captures the exact textual divergence separating two versions of a document or string. This methodology originates from the classic Unix <code>diff</code> utility created in 1974, which evaluates two distinct files to compute the exact adjustments necessary to convert the initial text into the subsequent revision. The resulting delta layout came to serve as the structural backbone supporting contemporary version management utilities and coordinated authoring systems.</p>
        <p>Most comparison engines, including our web-based tool, rely fundamentally on the Longest Common Subsequence (LCS) algorithm to discover the greatest chain of lines (or characters) maintaining identical relative order across both documents. Any line omitted from this LCS gets flagged as an insertion (found in the newer text rather than the original) or a removal (present in the previous text but absent afterwards).</p>
        <p>Modern diff implementations leverage specialized optimizations and variants of the LCS algorithm for streamlined processing of extensive files: Eugene Myers' O(ND) diff algorithm, git's Patience diff algorithm, along with the Histogram diff algorithm (utilized within git on particular file formats). Each approach outputs slightly distinct results from identical inputs, balancing raw speed against how intuitively human readers can digest the output.</p>

        <h2>Understanding Diff Output Formats</h2>

        <h3>Side-by-Side Diff</h3>
        <p>A side-by-side view positions the original copy along the left and updated content along the right, keeping equivalent lines aligned horizontally. Any edited lines show up across both columns featuring character-level changes highlighted right within the text. Insertions appear solely on the right pane, while deletions remain exclusive to the left side. Selecting this perspective offers the clearest appreciation of overall context and the direct relationships connecting both fragments.</p>

        <h3>Unified Diff</h3>
        <p>Presenting changes in a single column alongside surrounding rows, the unified diff format (used by git diff) keeps readers situated. Rows starting with <code>+</code> represent inserted text; rows starting with <code>-</code> denote removed content; and rows beginning with a blank space supply context (unchanged). These context rows preserve surrounding baseline material, letting viewers pinpoint the exact position where each change occurs in the file.</p>
        <p>A typical unified diff chunk looks like:</p>
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
        <p>The <code>@@</code> hunk header <code>-10,7 +10,8</code> means: starting at line 10 in the original file (7 lines shown), starting at line 10 in the new file (8 lines shown).</p>

        <h3>Inline Diff (Character-Level)</h3>
        <p>Character-level diffing highlights changes within individual lines rather than just showing entire lines as added or removed. This is invaluable when lines differ by only a single character "" a typo, a number change, a renamed variable "" where showing the entire line as changed would obscure the small but critical difference.</p>
        <p>Our tool performs character-level diffing within changed lines by default, similar to how GitHub highlights intra-line differences in pull request reviews.</p>

        <h2>Myers Diff Algorithm: The Foundation of git diff</h2>
        <p>First outlined by Eugene Myers in 1986, the O(ND) difference algorithm identifies the shortest edit script: the minimal collection of additions and deletions required to convert an original text into a target string. Achieving this shortest edit script mirrors the LCS methodology, because as two documents exhibit greater overlap, their necessary edit script contracts.</p>
        <p>Git uses the Myers algorithm by default (<code>git diff --diff-algorithm=myers</code>). Other algorithms git supports:</p>
        <ul>
          <li><strong>Patience</strong>: isolates unique lines present exactly once throughout both documents, establishing them as anchor points to structure comparisons. Generates cleaner, more legible diffs when reviewing restructured source code. Invoke it by running <code>git diff --patience</code>.</li>
          <li><strong>Histogram</strong>: an extension of Patience that handles low-occurrence lines more efficiently. Generally recommended over Patience for code. Use with <code>git diff --histogram</code>.</li>
          <li><strong>Minimal</strong>: produces the absolute minimum edit distance, often at the cost of readability. Use with <code>git diff --minimal</code>.</li>
        </ul>
        <p>Our utility relies on the Myers algorithm for line-level diff alongside a custom character-level technique for intra-line highlighting.</p>

        <h2>Understanding the Longest Common Subsequence Problem</h2>
        <p>At its heart, the LCS problem considers: given two sequences, what constitutes the largest subsequence of items sharing the identical relative order in both inputs, without having to sit contiguously? Across text diffing routines, such sequences consist of lines (for line-level diff) or individual characters (for character-level diff).</p>
        <p>Through dynamic programming, LCS resolves in O(mn) time and space complexity, with m and n representing each sequence's length. With massive files, execution bogs down: a basic implementation examining two files of 10,000 lines apiece demands 100 million operations. In contrast, streamlined solutions like Myers' operate in O(ND) time, where N = m + n and D = edit distance, proving vastly quicker whenever documents remain broadly similar (small D).</p>
        <p>Running inside our web-based tool, documents spanning several thousand lines resolve almost instantaneously. Immense inputs (100,000+ lines) might require a couple of seconds because of constraints inherent to client-side browser JavaScript execution.</p>

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
          <li><code>git diff HEAD~1</code>: modifications made in the most recent commit</li>
          <li><code>git diff branch1..branch2</code>: disparities present across two distinct branches</li>
          <li><code>git log -p</code>: revision log including patch comparisons</li>
        </ul>
        <p>Pull request modifications are shown as diffs on platforms like GitHub, GitLab, and Bitbucket. Mastering diff review is a key competency for team-based software engineering.</p>

        <h2>Real-World Uses for Text Diffing</h2>

        <h3>Code Review Without Using Git</h3>
        <p>When comparing code modifications outside a standard git workflow -- such as checking files across distinct repositories, evaluating a file between different environments, or reviewing peer updates without git access -- our online diff utility delivers identical visualization to a git diff minus any version control configuration.</p>

        <h3>Configuration File Comparison</h3>
        <p>Infrastructure teams frequently evaluate configuration files between environments like production and staging, current versus desired states, or deployed code against repository versions. Configuration diffs often expose minor discrepancies such as differing port numbers, absent environment variables, or leftover debugging flags that trigger environment-specific bugs. Our utility processes YAML, TOML, INI, JSON, and all text-based configuration structures.</p>

        <h3>Document Version Comparison</h3>
        <p>Technical writers, legal departments, and authors often must evaluate document revisions: past drafts versus updated drafts, contract versions, or translations against originals. Our utility emphasizes every word and character alteration, turning revision checks into a systematic process instead of relying on tedious manual reading.</p>

        <h3>Log File Analysis</h3>
        <p>Analyzing log files from distinct periods or server instances assists in pinpointing what shifted when behavior altered. Contrasting a verified normal log with a questionable one reveals irregular entries. Our utility processes massive multi-line log files while clearly visualizing inserted and deleted log rows.</p>

        <h3>Database Schema Comparison</h3>
        <p>Evaluating SQL DDL between two database instances, such as production versus staging or pre- and post-migration, uncovers schema drift, including tables present in only one environment, column type discrepancies, and absent indexes. Insert two <code>SHOW CREATE TABLE</code> outputs or schema exports to view precise modifications.</p>

        <h3>API Response Comparison</h3>
        <p>During API debugging, evaluating two formatted JSON API responses reveals precisely which fields were altered, introduced, or removed. This approach beats inspecting two JSON blobs manually side by side. Structure the JSON initially using our JSON formatter, then evaluate it via our diff utility for clean and legible outcomes.</p>

        <h3>Translation and Localization Verification</h3>
        <p>Contrasting translation files in JSON, YAML, PO format, or Android strings.xml against source language files or prior translation versions exposes missing translations, obsolete strings, and unpredicted additions.</p>

        <h2>Special Considerations for Code Diff Algorithms</h2>

        <h3>Whitespace Handling</h3>
        <p>Code diffs frequently generate clutter from whitespace adjustments, including tab-to-space conversions, restyling, and extra trailing newlines. Our utility provides whitespace normalization settings:</p>
        <ul>
          <li><strong>Ignore all whitespace</strong>: regards differences consisting solely of whitespace as no change</li>
          <li><strong>Ignore leading whitespace</strong>: helpful for indentation adjustments (re-indented code blocks)</li>
          <li><strong>Ignore trailing whitespace</strong>: disregards trailing space and tab variations</li>
          <li><strong>Ignore empty lines</strong>: considers added or removed blank lines as no modification</li>
        </ul>

        <h3>Case Sensitivity</h3>
        <p>Opting for case-insensitive comparison proves advantageous when processing prose or navigating case-insensitive environments (such as Windows file paths or SQL keywords). Conversely, case-sensitive comparison (the default setting) remains mandatory for source code, configuration files, and technical syntax where capitalization carries functional meaning.</p>

        <h3>Line Ending Normalization</h3>
        <p>
          Files edited on different operating systems may have different line endings: <code>\n</code>
          (Unix/Linux/macOS), <code>\r\n</code> (Windows CRLF), or <code>\r</code> (old macOS Classic).
          When comparing files that originated on different platforms, line ending differences can make
          every line appear changed. Our tool normalizes line endings before comparison by default.
        </p>

        <h2>Semantic Diff vs Syntactic Diff</h2>
        <p>Standard text diff is syntactic "” it compares text character-by-character and line-by-line without understanding the meaning of the content. Semantic diff understands the structure of the content type and compares meaning:</p>
        <ul>
          <li><strong>JSON semantic diff</strong>: acknowledges that key sequencing inside an object carries no weight, while array sequence remains critical. Accordingly, two separate JSON entities containing matching key-value pairs arranged in differing sequence are semantically identical.</li>
          <li><strong>XML/HTML semantic diff</strong>: understands attribute order is irrelevant, namespace prefixes are interchangeable with consistent declarations, and equivalent empty element forms (<code>&lt;br/&gt;</code> vs <code>&lt;br&gt;&lt;/br&gt;</code>) are the same.</li>
          <li><strong>AST diff (code diff)</strong>: compares Abstract Syntax Trees of parsed code, finding semantic refactors (variable renaming) vs behavioral changes (logic modification).</li>
        </ul>
        <p>Because our utility handles a syntactic text diff, evaluating a JSON semantic diff requires reordering keys systematically (via our JSON formatter) on both payloads prior to comparison; doing so eliminates false discrepancies stemming purely from key ordering.</p>

        <h2>Diff Output in Code Review Workflows</h2>

        <h3>Pull Request Reviews</h3>
        <p>Code review platforms like GitHub, GitLab, and Bitbucket summarize merge requests using visual diffs marked with identical green/red highlights to our tool. Reviewing patches efficiently accelerates team workflows: focus first on altered complex logic, inspect the change delta for conceptual defects instead of scanning untouched regions, and rely on character-level highlighting to catch subtle bugs like off-by-one errors or swapped variable names.</p>

        <h3>Patch Files</h3>
        <p>Software engineers frequently rely on the unified diff format when generating patch files: plain text records detailing changes that can alter one version of a file into another using the <code>patch</code> command. Our application can construct patch-compliant outputs that you can easily download and apply via <code>patch -p0 &lt; changes.patch</code>.</p>

        <h2>Measuring Diff Complexity: Edit Distance Metrics</h2>
        <p>The edit distance between two texts can be measured in several ways:</p>
        <ul>
          <li><strong>Levenshtein distance</strong>: quantifies the fewest edits, removals, or replacements required when converting a string to a new one. Applied per character across text, and per line across documents.</li>
          <li><strong>Hamming distance</strong>: tracks how many index positions mismatch across two strings of identical length. The calculation is restricted strictly to text strings sharing the same character length.</li>
          <li><strong>Jaro-Winkler distance</strong>: calculates a normalized similarity metric between 0 and 1, fine-tuned specifically for brief inputs such as proper names. Unused for standard file diff, it excels at fuzzy matching tasks.</li>
          <li><strong>Diff hunk count</strong>: represents the overall volume of distinct modified sections throughout a comparison. An extensive spread of compact hunks often indicates minor formatting updates, whereas few broad hunks indicate substantive, targeted updates.</li>
        </ul>
        <p>Our tool displays statistics: lines added, lines removed, characters changed, percentage similarity "” giving you a quantitative sense of how different the two texts are.</p>

        <h2>Privacy and Performance</h2>
        <p>Every step of the text evaluation occurs locally inside your browser through client-side JavaScript. None of your submitted content is ever transferred over the network to our servers. Because algorithms execute strictly on your device, this approach guarantees privacy when inspecting confidential documents, proprietary source code, personal communications, or any sensitive content. We enforce zero server-side size barriers; the only ceiling depends on your browser's available memory (our tool handles files up to several megabytes without issues).</p>
        <p>Our diff calculation harnesses finely optimized JavaScript routines based on the Myers and LCS algorithms, finishing typical operations within fractions of a second. Processing massive files (spanning tens of thousands of lines) can demand a few moments, during which an on-screen status indicator tracks live progress.</p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a text diff tool?',
    answer:
      'A text diff utility analyzes two text blocks and flags the changes--additions in green, deletions in red, and edits--via a diff algorithm. It displays precise alterations between both inputs, providing instant visibility instead of manual checking.',
  },
  {
    category: 'General',
    question: 'What kind of content am I able to evaluate?',
    answer:
      'Any plain text: programming code (any language), settings files (YAML, JSON, TOML, INI), manuals, prose, logs, SQL schemas, CSV files, HTML, XML, or generic text formats. The system evaluates symbols and rows without interpreting the subject matter.',
  },
  {
    category: 'General',
    question: 'Is my text secure to enter into this diff tool?',
    answer:
      'Yes--every comparison occurs directly inside your browser. None of the text from either box gets sent to our servers. Secure for private files, proprietary source code, client info, or any confidential data.',
  },
  {
    category: 'Algorithms',
    question: 'Which algorithm does this diff tool utilize?',
    answer:
      'Line-level diff applies the Myers O(ND) diff algorithm, the identical method utilized by git diff by default. Character-level diff inside altered lines employs a custom LCS (Longest Common Subsequence) algorithm. Combined, they deliver both broad (line) and detailed (character) difference displays.',
  },
  {
    category: 'Algorithms',
    question: 'How does the Myers diff algorithm work?',
    answer:
      'Eugene Myers&#39; O(ND) diff algorithm (1986) discovers the shortest edit script--minimum additions and removals--to convert one text into another. It executes in time relative to the edit distance (D) multiplied by total content size (N), ensuring rapid performance when files match closely. Git uses this method by default.',
  },
  {
    category: 'Algorithms',
    question: 'How do Histogram diff, Patience, and Myers diff contrast with each other?',
    answer:
      'Myers generates shortest edit scripts but may produce unclear diffs for rearranged code. Patience diff detects unique anchor lines and clusters edits around them--ideal for restructured code. Histogram (git&#39;s suggested algorithm) builds on Patience with improved low-frequency line management. Our utility employs Myers; git permits all three through --diff-algorithm flag.',
  },
  {
    category: 'Output',
    question: 'What distinguishes a unified diff view from a side-by-side layout?',
    answer:
      'Side-by-side displays prior text on the left and new text on the right with matching rows aligned. Ideal for grasping context and links. Unified view presents edits in one column using + (added) and - (deleted) symbols and context lines, similar to git diff output. Ideal for inspecting sequential revisions.',
  },
  {
    category: 'Output',
    question: 'What does character-level highlighting display?',
    answer:
      'Character-level highlighting indicates the exact characters altered inside an edited line, rather than solely marking the line as changed. When a single word shifts on a line, only that specific word gets highlighted--making minor adjustments like typos, updated variables, or altered numbers instantly clear.',
  },
  {
    category: 'Options',
    question: 'What does "ignore whitespace" do within a diff?',
    answer:
      'Ignore whitespace considers spacing-only variances (spaces, tabs, indentation) as identical. Rows differing solely in spacing are deemed unaltered. Helpful when reviewing code that underwent reformatting (varying indentation, tab-to-space shifts) where your focus is purely on logical content alterations.',
  },
  {
    category: 'Options',
    question: 'What does "ignore case" do within a diff?',
    answer:
      'Case-insensitive evaluation treats capital and lowercase characters as equivalent. "Hello" and "hello" count as the exact same. Useful for analyzing documentation, prose, or case-insensitive variables. Not advised for code evaluations where casing matters.',
  },
  {
    category: 'Options',
    question: 'What is the function of "normalize line endings"?',
    answer:
      'Normalizes line endings converts \\r\\n (Windows CRLF) and \\r (old macOS) to \\n (Unix) before comparison. Without this, files from different operating systems appear completely changed even when content is identical. Enabled by default to prevent false positives from cross-platform editing.',
  },
  {
    category: 'Use Cases',
    question: 'How can I evaluate two JSON files for discrepancies?',
    answer:
      'Format both JSON files using uniform indentation and sorted keys beforehand (utilize our JSON formatter equipped with the "sort keys" setting), and then insert into the diff utility. Sorted keys standardize key sequence so logically equivalent objects do not get flagged as varied purely because of key arrangement.',
  },
  {
    category: 'Use Cases',
    question: 'How can I evaluate Kubernetes YAML manifests?',
    answer:
      'Format both manifests utilizing our YAML formatter to standardize spacing and key sequence, then insert into the diff tool. This eliminates formatting clutter and highlights purely substantive configuration changes--great for contrasting production versus staging manifests or pre/post updates.',
  },
  {
    category: 'Use Cases',
    question: 'Is it possible to check code updates without using git?',
    answer:
      'Sure &#8212; put the original text on the left side and the updated text on the right side. You will receive the exact same red and green visual diff as GitHub pull requests. This is handy when checking code coming from separate places (two different repositories, servers, or releases) lacking a shared git history.',
  },
  {
    category: 'Git',
    question: 'How does git diff operate?',
    answer:
      'The git diff command relies on the Myers algorithm by default to calculate the smallest edit script between two file versions kept inside the git object database. Results are presented in a unified diff format featuring context lines (preceded by a space), insertions (preceded by +), and deletions (preceded by -). Header lines starting with @@ indicate line numbers for both versions.',
  },
  {
    category: 'Git',
    question: 'What is the method for reading @@ line numbers inside a unified diff?',
    answer:
      '@@ -10,7 +10,8 @@ means: the shown context starts at line 10 in the old file (showing 7 lines) and line 10 in the new file (showing 8 lines). The extra line in the new file indicates one net addition. Negative numbers reference the old file; positive numbers reference the new file.',
  },
  {
    category: 'Statistics',
    question: 'How is the similarity percentage computed?',
    answer:
      'Similarity is generally figured out via this formula: (2 &#215; matching character count) / (combined characters across both texts). Getting 100% similarity implies identical content, whereas 0% signifies total dissimilarity. This utility presents character-level change metrics alongside removed and added lines next to the overall similarity score.',
  },
  {
    category: 'Performance',
    question: 'What is the maximum file size I am allowed to compare?',
    answer:
      'There are no restrictions imposed by the server &#8212; limits depend entirely on your browser memory capacity. Files reaching several megabytes (covering tens of thousands of lines) get processed within seconds. Extremely large documents (exceeding 100,000 lines) might require 10 to 30 seconds. For files surpassing multiple megabytes, command-line diff utilities are recommended to ensure better speed.',
  },
  {
    category: 'Technical',
    question: 'What is the Longest Common Subsequence (LCS) and how does it connect to diff?',
    answer:
      'The LCS represents the longest sequence of characters or lines appearing in identical relative order across both texts. Items within the LCS remain unaltered, while those outside represent insertions or deletions. Essentially, a diff functions as the opposite of the LCS &#8212; highlighting everything that fails to match between the two texts.',
  },
  {
    category: 'Technical',
    question: 'What does edit distance mean?',
    answer:
      'Edit distance, also known as Levenshtein distance, defines the minimum count of actions (such as insertions, deletions, and occasionally substitutions) required to convert one text into another. Diff utilities locate an edit script close to this minimum threshold. A diff showing fewer total changes (added plus removed lines) stays closer to the minimum edit distance.',
  },
  {
    category: 'Export',
    question: 'Is there a way to export the diff output?',
    answer:
      'Yes &#8212; our application lets you export data as a unified diff text file compatible with the patch command, an HTML version featuring colored highlights suitable for emails or documentation, and a basic text summary detailing addition and deletion statistics. Simply copy the unified diff results to work with standard patch tools.',
  },
  {
    category: 'Semantic',
    question: 'Does this diff application comprehend the semantic meaning of the text?',
    answer:
      'No &#8212; text diffing remains purely syntactic, analyzing lines and characters without grasping underlying content. For instance, the key order in a JSON object changes the diff outcome even if the semantics remain identical. To achieve semantic comparison, apply preprocessing first by sorting JSON properties, standardizing YAML, or formatting SQL uniformly before running the comparison.',
  },
  {
    category: 'General',
    question: 'What is a text diff tool?',
    answer:
      'A text diff utility evaluates two text blocks and emphasizes their discrepancies &#8212; pointing out which characters, lines, or words were altered, deleted, or inserted. This complimentary web-based text diff program executes word-level analysis while coloring deletions in red and additions in green. It proves valuable for verifying edited material, reviewing source code modifications, comparing document editions, and performing audits on revisions.',
  },
];

export const textDiffContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
