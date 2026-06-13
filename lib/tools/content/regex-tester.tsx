import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Regex Tester: Free Online Regular Expression Debugger, Validator, and Reference</h2>
        <p>
          Regular expressions are simultaneously the most powerful string-manipulation tool in a developer's
          toolkit and the most likely to cause silent bugs, catastrophic performance failures, and
          "it works on my machine" mysteries. A regex that looks correct in your head can match far
          too much, far too little, or take exponential time on certain inputs "” none of which becomes
          obvious until you run it against real data.
        </p>
        <p>
          Our free online regex tester gives you a live, interactive environment to write, test, and
          debug regular expressions with real-time match highlighting, capture group visualization, flag
          toggles, a named group inspector, match count display, and detailed per-match metadata including
          start/end indices. Every keystroke updates the results instantly. No need to modify source code
          and rerun a test suite just to see if your pattern works "” paste your test string, type your
          regex, and see exactly what it matches in milliseconds.
        </p>
        <p>
          Whether you are parsing log files, validating form inputs, extracting data from API responses,
          writing a search-and-replace, building a tokenizer, or studying regex syntax for the first time,
          this tool makes the invisible visible.
        </p>

        <h2>What Are Regular Expressions? A Complete Foundation</h2>
        <p>
          A regular expression (commonly abbreviated regex or regexp) is a sequence of characters that
          defines a pattern used for searching, matching, extracting, and transforming text. The theoretical
          foundations trace to the 1950s work of mathematician Stephen Kleene, who developed the concept
          of regular languages and regular sets. Ken Thompson implemented the first practical regex engine
          in the QED editor and later in Unix tools like grep (Global Regular Expression Print), bringing
          regex into everyday software development.
        </p>
        <p>
          Today, regular expressions are built into every major programming language and are used in:
        </p>
        <ul>
          <li>Form validation (email, phone, postal code, credit card numbers)</li>
          <li>Log parsing and structured data extraction from unstructured text</li>
          <li>Search-and-replace operations in text editors and IDEs</li>
          <li>Lexical analysis and tokenization in compilers and interpreters</li>
          <li>URL routing and pattern matching in web frameworks</li>
          <li>Data cleaning and transformation pipelines</li>
          <li>Network security tools "” intrusion detection patterns, WAF rules</li>
          <li>Text mining and natural language preprocessing</li>
          <li>Code analysis and linting rules</li>
          <li>Database text search (REGEXP_LIKE in MySQL, ~ operator in PostgreSQL)</li>
        </ul>
        <p>
          The same core syntax "” with minor variations "” works across Python, JavaScript, Java, Go, Ruby,
          Perl, PHP, C++, Rust, .NET, Bash, and countless other environments. Learning regex is one of the
          highest-return technical investments a developer can make because it applies everywhere.
        </p>

        <h2>Regex Engines: How Pattern Matching Actually Works</h2>
        <p>
          Understanding the engine behind regex matching is essential for writing patterns that are both
          correct and performant. There are two main engine types:
        </p>

        <h3>NFA: Nondeterministic Finite Automaton</h3>
        <p>
          Most modern regex engines "” including those in Python, Java, JavaScript, Perl, PHP, .NET, and Ruby
          "” use NFA-based engines. NFA engines use backtracking: when the engine encounters a choice (like
          whether to match 'a' once or twice for <code>a*</code>), it tries one path. If that path fails,
          it backtracks and tries the other path. NFA engines support powerful features like backreferences,
          lookaheads, lookbehinds, and possessive quantifiers.
        </p>
        <p>
          The power of backtracking comes with a cost: in the worst case, NFA engines can exhibit
          exponential time complexity on patterns with ambiguous quantifiers. This is the source of
          ReDoS (Regular Expression Denial of Service) vulnerabilities.
        </p>

        <h3>DFA: Deterministic Finite Automaton</h3>
        <p>
          DFA engines compile the pattern into a state machine that processes each character exactly once,
          guaranteeing linear time matching regardless of pattern complexity. The tradeoff: DFA engines
          cannot support backreferences or most lookaround assertions because these features require
          memory of what was matched, which DFAs do not have.
        </p>
        <p>
          Google's RE2 engine is the most prominent DFA-based implementation. It is used in Go's
          <code>regexp</code> package, Google's internal infrastructure, and is available as a library
          for Python, Java, and other languages. RE2 is safe to use with user-supplied patterns because
          it guarantees linear time.
        </p>
        <p>
          POSIX-compliant tools like <code>grep</code> (without PCRE flags) and <code>awk</code> use
          DFA-based matching as well.
        </p>

        <h2>Regex Metacharacters: The Building Blocks</h2>
        <p>
          Twelve characters have special meaning in most regex flavors and must be escaped with a backslash
          to match literally: <code>. ^ $ * + ? &#123; &#125; [ ] \ | ( )</code>
        </p>

        <h3>The Dot: Any Character</h3>
        <p>
          A dot (<code>.</code>) matches any single character except a newline by default. This is one of
          the most commonly misused regex constructs "” using <code>.*</code> to match "anything" in the
          middle of a pattern often matches far more than intended due to greedy expansion. To match
          newlines as well, enable the dotAll (<code>s</code>) flag or use <code>[\s\S]</code> as a
          cross-engine alternative.
        </p>
        <p>
          When you actually want to match a literal dot (e.g., in a filename pattern or version number),
          you must escape it: <code>\.</code> matches a literal dot while <code>.</code> matches any
          character. The pattern <code>version 1.0</code> would match "version 100" (since <code>.</code>
          matches '0') while <code>version 1\.0</code> matches only "version 1.0".
        </p>

        <h3>Anchors: Position Matching</h3>
        <p>
          Anchors match positions in the string, not characters. They are zero-width "” consuming no
          characters from the input:
        </p>
        <ul>
          <li>
            <code>^</code> matches the start of the string (or start of each line with the
            <code>m</code> multiline flag)
          </li>
          <li>
            <code>$</code> matches the end of the string (or end of each line with <code>m</code>)
          </li>
          <li>
            <code>\b</code> matches a word boundary "” the position between a word character
            (<code>\w</code>) and a non-word character (<code>\W</code>) or string boundary
          </li>
          <li>
            <code>\B</code> matches a non-word-boundary position
          </li>
          <li>
            <code>\A</code> matches only at the start of the string (Python, .NET; not available in JavaScript)
          </li>
          <li>
            <code>\Z</code> matches at the end of the string or before a final newline (Python, .NET)
          </li>
        </ul>
        <p>
          Without anchors, a pattern can match anywhere in the string. The pattern <code>cat</code>
          matches "concatenate", "catalog", "education". The pattern <code>^cat$</code> matches only
          the exact string "cat".
        </p>
        <p>
          Word boundaries are particularly useful for whole-word matching. <code>\bcat\b</code> matches
          "cat" in "the cat sat" but not in "concatenate" or "category". This avoids false positives
          that are common when searching for short words that appear as substrings of longer words.
        </p>

        <h2>Character Classes: Matching Sets of Characters</h2>

        <h3>Shorthand Character Classes</h3>
        <p>
          These widely supported shorthands cover the most common character sets:
        </p>
        <ul>
          <li><code>\d</code> "” digit, equivalent to <code>[0-9]</code></li>
          <li><code>\D</code> "” non-digit, equivalent to <code>[^0-9]</code></li>
          <li><code>\w</code> "” word character: <code>[a-zA-Z0-9_]</code></li>
          <li><code>\W</code> "” non-word character: <code>[^a-zA-Z0-9_]</code></li>
          <li><code>\s</code> "” whitespace: space, tab, newline, carriage return, form feed, vertical tab</li>
          <li><code>\S</code> "” non-whitespace</li>
          <li><code>\h</code> "” horizontal whitespace (PCRE, not JavaScript)</li>
          <li><code>\v</code> "” vertical whitespace (PCRE) or vertical tab character (JavaScript)</li>
        </ul>
        <p>
          Note: with the Unicode (<code>u</code>) flag in JavaScript, <code>\d</code> still only matches
          ASCII digits 0-9, not Unicode digit characters from other scripts. For full Unicode digit matching,
          use <code>\p&#123;Decimal_Number&#125;</code> with the <code>u</code> flag and Unicode property escapes.
        </p>

        <h3>Custom Character Classes</h3>
        <p>
          Square brackets define a custom set: <code>[aeiou]</code> matches any vowel. <code>[a-z]</code>
          matches any lowercase ASCII letter. <code>[a-zA-Z0-9]</code> matches any alphanumeric character.
          <code>[^aeiou]</code> (negated with <code>^</code> at start) matches any non-vowel.
        </p>
        <p>
          Inside a character class, most metacharacters lose their special meaning. <code>[.]</code> matches
          a literal dot, not any character. Exceptions that retain special meaning inside brackets:
          <code>]</code> (closes the class), <code>\</code> (escape), <code>^</code> at the start (negation),
          and <code>-</code> between characters (range). To include a literal <code>-</code> in a class,
          put it first, last, or escape it: <code>[-aeiou]</code> or <code>[aeiou-]</code>.
        </p>

        <h3>Unicode Property Escapes (ES2018+)</h3>
        <p>
          With the <code>u</code> flag in JavaScript or <code>re.UNICODE</code> in Python, Unicode property
          escapes let you match characters by their Unicode properties:
        </p>
        <ul>
          <li><code>\p&#123;Letter&#125;</code> "” any Unicode letter in any script</li>
          <li><code>\p&#123;Decimal_Number&#125;</code> "” any Unicode decimal digit</li>
          <li><code>\p&#123;Script=Greek&#125;</code> "” Greek script characters</li>
          <li><code>\p&#123;Emoji&#125;</code> "” emoji characters</li>
        </ul>
        <p>
          These are invaluable for internationalized applications that need to validate or parse text in
          non-Latin scripts.
        </p>

        <h2>Quantifiers: Controlling Repetition in Depth</h2>

        <h3>Basic Quantifiers</h3>
        <ul>
          <li><code>*</code> "” zero or more occurrences</li>
          <li><code>+</code> "” one or more occurrences</li>
          <li><code>?</code> "” zero or one occurrence (also makes quantifiers lazy when appended)</li>
          <li><code>&#123;n&#125;</code> "” exactly n occurrences</li>
          <li><code>&#123;n,&#125;</code> "” n or more occurrences</li>
          <li><code>&#123;n,m&#125;</code> "” between n and m occurrences (inclusive)</li>
        </ul>

        <h3>Greedy Quantifiers: The Default</h3>
        <p>
          By default, all quantifiers are greedy "” they match as many characters as possible while still
          allowing the overall pattern to succeed. Consider the pattern <code>&lt;.+&gt;</code> applied to
          <code>&lt;b&gt;bold text&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt;</code>. A greedy
          <code>.+</code> expands to match everything from the first <code>&lt;</code> to the last
          <code>&gt;</code>, capturing the entire string. The engine has to backtrack from the end of the
          string until it finds a position where <code>&gt;</code> matches.
        </p>

        <h3>Lazy (Non-Greedy) Quantifiers</h3>
        <p>
          Adding <code>?</code> after any quantifier makes it lazy "” it matches as few characters as possible:
          <code>*?</code>, <code>+?</code>, <code>??</code>, <code>&#123;n,m&#125;?</code>. The pattern
          <code>&lt;.+?&gt;</code> matches <code>&lt;b&gt;</code> then stops, rather than continuing
          to the end of the string. Lazy quantifiers are useful when you need to match the shortest possible
          sequence between delimiters.
        </p>
        <p>
          However, lazy quantifiers are not inherently faster than greedy ones "” in many cases they are
          slower because the engine has to try many small expansions before finding one that lets the
          overall pattern match. For optimal performance, be specific: <code>&lt;[^&gt;]+&gt;</code>
          (match anything that is not a closing angle bracket) is both more correct and more efficient
          than <code>&lt;.+?&gt;</code>.
        </p>

        <h3>Possessive Quantifiers and Atomic Groups</h3>
        <p>
          Possessive quantifiers (<code>*+</code>, <code>++</code>, <code>?+</code> "” supported in PCRE,
          Java, but not JavaScript) never backtrack "” once they consume characters, those characters are
          committed. Atomic groups <code>(?&gt;...)</code> (PCRE, Java) achieve the same effect. These
          constructs eliminate catastrophic backtracking at the cost of sometimes not finding matches that
          would require backtracking. They are advanced optimizations for high-performance pattern matching.
        </p>

        <h2>Groups: Capturing, Non-Capturing, and Named</h2>

        <h3>Capturing Groups</h3>
        <p>
          Parentheses create capturing groups that extract matched substrings. Groups are numbered 1, 2, 3
          from left to right by their opening parenthesis. In JavaScript:
        </p>
        <p>
          <code>const match = '2024-03-15'.match(/(\d&#123;4&#125;)-(\d&#123;2&#125;)-(\d&#123;2&#125;)/);</code>
        </p>
        <p>
          <code>{"// match[1] = '2024', match[2] = '03', match[3] = '15'"}</code>
        </p>
        <p>
          Capturing groups also create backreference targets: <code>\1</code> later in the pattern matches
          the same text that group 1 captured. This enables patterns like
          <code>\b(\w+)\s+\1\b</code> to detect doubled words ("the the", "is is").
        </p>

        <h3>Non-Capturing Groups</h3>
        <p>
          <code>(?:...)</code> groups elements for quantification or alternation without capturing. This
          matters when you want to apply a quantifier to a multi-character sequence without extracting it:
          <code>(?:https?://)?www\.</code> makes the protocol optional without creating a capture group
          for it. Non-capturing groups are also marginally more efficient than capturing ones for large
          patterns with many groups.
        </p>

        <h3>Named Capturing Groups</h3>
        <p>
          Named groups significantly improve readability of complex patterns:
        </p>
        <ul>
          <li>JavaScript (ES2018+): <code>(?&lt;year&gt;\d&#123;4&#125;)</code>, accessed as <code>match.groups.year</code></li>
          <li>Python: <code>(?P&lt;year&gt;\d&#123;4&#125;)</code>, accessed as <code>match.group('year')</code></li>
          <li>PCRE/.NET/Java: <code>(?&lt;year&gt;\d&#123;4&#125;)</code></li>
        </ul>
        <p>
          Named backreferences: <code>\k&lt;year&gt;</code> (JavaScript, PCRE, .NET) or
          <code>(?P=year)</code> (Python). Named groups make patterns self-documenting and resilient to
          reordering "” accessing <code>match.groups.year</code> works correctly even if you add more
          groups before the year group, unlike numbered backreferences which would break.
        </p>

        <h2>Lookaround Assertions: Context Without Consumption</h2>
        <p>
          Lookaround assertions are zero-width assertions that match based on surrounding context without
          consuming characters. They are one of the most powerful and frequently misunderstood regex features.
        </p>

        <h3>Lookaheads</h3>
        <p>
          <strong>Positive lookahead</strong> <code>(?=pattern)</code>: asserts the engine is at a position
          where <code>pattern</code> follows. <code>\d+(?= USD)</code> matches numbers only when followed
          by " USD". The " USD" part is not included in the match "” the lookahead is zero-width.
        </p>
        <p>
          <strong>Negative lookahead</strong> <code>(?!pattern)</code>: asserts <code>pattern</code> does
          NOT follow. <code>\bcat(?!nap\b)</code> matches "cat" but not "catnap".
        </p>

        <h3>Lookbehinds</h3>
        <p>
          <strong>Positive lookbehind</strong> <code>(?&lt;=pattern)</code>: asserts <code>pattern</code>
          precedes the current position. <code>(?&lt;=\$)\d+(?:\.\d&#123;2&#125;)?</code> matches dollar amounts
          after a $ sign without including the $ in the match.
        </p>
        <p>
          <strong>Negative lookbehind</strong> <code>(?&lt;!pattern)</code>: asserts <code>pattern</code>
          does NOT precede. <code>(?&lt;!\d)\d&#123;3&#125;(?!\d)</code> matches exactly 3 consecutive digits
          not surrounded by other digits.
        </p>
        <p>
          JavaScript added lookbehind support in ES2018. Before that, JavaScript only supported lookaheads.
          Python, PCRE, .NET, and Java have supported both for much longer. RE2 (Go) does not support
          lookbehind.
        </p>
        <p>
          PCRE2 and .NET support variable-length lookbehinds. Python's re module requires fixed-width
          lookbehinds (though the newer <code>regex</code> module lifts this restriction). JavaScript
          ES2018 supports variable-length lookbehinds.
        </p>

        <h2>Regex Flags and Modifiers</h2>

        <h3>Case Insensitive (i)</h3>
        <p>
          Makes the pattern match regardless of letter case. <code>/hello/i</code> matches "Hello",
          "HELLO", "hElLo". With the <code>u</code> flag for Unicode, case folding follows the Unicode
          standard including characters like ß (matches SS in German).
        </p>

        <h3>Global (g)</h3>
        <p>
          Finds all matches in the string rather than stopping at the first. Required for
          <code>String.prototype.matchAll()</code> and for replacing all occurrences in
          <code>String.prototype.replace()</code>. Note: the <code>g</code> flag causes the RegExp
          object to maintain state (the <code>lastIndex</code> property), which can cause surprising
          behavior when reusing the same regex object "” prefer <code>matchAll()</code> which resets state.
        </p>

        <h3>Multiline (m)</h3>
        <p>
          Makes <code>^</code> and <code>$</code> match at line boundaries (start/end of each line)
          rather than only at the start and end of the entire string. Essential for processing
          multi-line text where you need to anchor patterns to individual lines.
        </p>

        <h3>DotAll (s)</h3>
        <p>
          Makes <code>.</code> match newline characters as well. Added in JavaScript ES2018. Without
          this flag (the default), <code>.</code> does not match <code>\n</code> or <code>\r</code>.
          Use <code>[\s\S]</code> as a cross-engine alternative.
        </p>

        <h3>Unicode (u)</h3>
        <p>
          Enables full Unicode mode in JavaScript. Without <code>u</code>, the regex engine treats
          strings as sequences of UTF-16 code units; with <code>u</code>, it treats them as sequences
          of Unicode code points (correctly handling surrogate pairs for characters outside the BMP).
          The <code>u</code> flag also enables Unicode property escapes <code>\p&#123;...&#125;</code>.
          Always use <code>u</code> when working with non-ASCII text.
        </p>

        <h3>Sticky (y)</h3>
        <p>
          Makes the pattern match only at the current <code>lastIndex</code> position, not anywhere in
          the string. Used for streaming tokenizers that process input position by position. Less common
          than other flags but powerful for parsing.
        </p>

        <h2>Essential Regex Patterns for Common Tasks</h2>

        <h3>Email Address Validation</h3>
        <p>
          The practical, widely-used pattern (not full RFC 5321 compliance "” that requires a 6KB regex):
        </p>
        <p>
          <code>/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`&#123;|&#125;~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]&#123;0,61&#125;[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]&#123;0,61&#125;[a-zA-Z0-9])?)*$/</code>
        </p>
        <p>
          Important: regex can only validate format. Whether the email address actually exists and accepts
          mail requires sending a confirmation email. Many technically valid email addresses fail in
          practice (e.g., those with quoted local parts containing spaces).
        </p>

        <h3>HTTP/HTTPS URL</h3>
        <p>
          <code>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]&#123;1,256&#125;\.[a-zA-Z0-9()]&#123;1,6&#125;\b([-a-zA-Z0-9()@:%_+.~#?&amp;/=]*)$/i</code>
        </p>
        <p>
          For JavaScript, prefer the URL constructor for parsing and validation "” it handles edge cases
          regex cannot, like internationalized domain names (IDN) and complex query strings.
        </p>

        <h3>Password Complexity</h3>
        <p>
          Minimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, one special character:
        </p>
        <p>
          <code>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&amp;])[A-Za-z\d@$!%*?&amp;]&#123;8,&#125;$/</code>
        </p>

        <h3>IPv4 Address</h3>
        <p>
          <code>/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.&#123;3&#125;)(25[0-5]|2[0-4]\d|[01]?\d\d?)$/</code>
        </p>
        <p>
          The alternation handles all valid ranges: 0-9, 10-99, 100-199, 200-249, 250-255.
        </p>

        <h3>IPv6 Address (simplified)</h3>
        <p>
          Full IPv6 validation with all abbreviation forms (consecutive zeros as ::, etc.) requires a
          complex pattern. For input validation purposes:
        </p>
        <p>
          <code>/^([0-9a-fA-F]&#123;1,4&#125;:)&#123;7&#125;[0-9a-fA-F]&#123;1,4&#125;$/</code> (full form only).
          For all forms including ::, use a dedicated IP validation library.
        </p>

        <h3>ISO 8601 Date</h3>
        <p>
          <code>/^\d&#123;4&#125;-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/</code> "” validates YYYY-MM-DD format
          with month range 01-12 and day range 01-31. Note this does not validate that the day is valid
          for the specific month (February 30 would pass). Combine with date parsing for full validation.
        </p>

        <h3>US Phone Number</h3>
        <p>
          <code>/^[+]?1?\s*\(?(\d&#123;3&#125;)\)?[\s.-]?(\d&#123;3&#125;)[\s.-]?(\d&#123;4&#125;)$/</code>
          "” accepts (555) 123-4567, 555-123-4567, +1 555 123 4567, and other common formats.
        </p>

        <h3>HTML Tag Extraction</h3>
        <p>
          <code>/&lt;([a-zA-Z][a-zA-Z0-9-]*)(?:\s[^&gt;]*)?&gt;(.*?)&lt;\/\1&gt;/gs</code> "” captures
          tag name and inner content for simple HTML. For production HTML parsing, use a dedicated HTML
          parser "” regex cannot correctly handle malformed HTML, self-closing tags, or nested identical
          tags.
        </p>

        <h3>Hex Color Code</h3>
        <p>
          <code>/^#([0-9a-fA-F]&#123;3&#125;|[0-9a-fA-F]&#123;4&#125;|[0-9a-fA-F]&#123;6&#125;|[0-9a-fA-F]&#123;8&#125;)$/</code>
          "” matches 3, 4, 6, or 8-digit hex color codes (including alpha variants).
        </p>

        <h3>Credit Card Number (format only)</h3>
        <p>
          <code>/^(?:4[0-9]&#123;12&#125;(?:[0-9]&#123;3&#125;)?|5[1-5][0-9]&#123;14&#125;|3[47][0-9]&#123;13&#125;|3(?:0[0-5]|[68][0-9])[0-9]&#123;11&#125;|6(?:011|5[0-9][0-9])[0-9]&#123;12&#125;)$/</code>
          "” covers Visa (4xxx), Mastercard (51-55xxx), Amex (34/37xxx), Diners (300-305/36/38xxx),
          Discover (6011/65xxx). Always use Luhn algorithm validation in addition to format matching.
        </p>

        <h2>ReDoS: Regular Expression Denial of Service</h2>
        <p>
          ReDoS is a class of denial-of-service attack that exploits catastrophic backtracking in NFA-based
          regex engines. By crafting an input that forces the engine into exponential backtracking, an
          attacker can make a server spend minutes or hours on a single regex evaluation.
        </p>
        <p>
          Classic vulnerable patterns: <code>(a+)+</code>, <code>(a*)*</code>,
          <code>([a-zA-Z]+)*</code>, <code>(a|aa)+</code>. Applied to a string of many 'a' characters
          followed by a character that does not match, these cause 2^n combinations to be tried.
        </p>
        <p>
          Real-world ReDoS vulnerabilities have affected widely-used npm packages (moment.js, email-validator,
          ua-parser-js), server frameworks, and WAF rules. OWASP includes ReDoS in its list of security
          concerns for web applications.
        </p>
        <p>
          Defenses: (1) use specific, unambiguous patterns that avoid nested quantifiers; (2) use
          RE2-based engines for user-supplied patterns; (3) set regex timeouts in your framework; (4) use
          our tester's catastrophic backtracking detector before deploying patterns to production.
        </p>

        <h2>Regex in Major Languages: Key Differences</h2>

        <h3>JavaScript</h3>
        <p>
          Regex literals: <code>/pattern/flags</code>. Constructor: <code>new RegExp(pattern, flags)</code>.
          ES2018 added: lookbehind assertions, named capturing groups, Unicode property escapes, <code>s</code>
          (dotAll) flag. The <code>g</code> flag makes RegExp objects stateful (tracks <code>lastIndex</code>).
          Use <code>String.prototype.matchAll()</code> for safe iteration over all matches. No native
          possessive quantifiers or atomic groups.
        </p>

        <h3>Python</h3>
        <p>
          Import the <code>re</code> standard library module. Use raw strings (<code>r"\d+"</code>) to
          avoid double-escaping backslashes. Key distinction: <code>re.match()</code> anchors to the
          start of the string; <code>re.search()</code> finds the first match anywhere. Both return
          <code>None</code> on failure (always check before accessing match object). Use <code>re.compile()</code>
          for patterns used multiple times "” it caches the compiled pattern. The third-party
          <code>regex</code> module adds possessive quantifiers, atomic groups, overlapping matches,
          and variable-width lookbehinds.
        </p>

        <h3>Java</h3>
        <p>
          <code>java.util.regex.Pattern</code> and <code>Matcher</code>. Patterns must be compiled:
          <code>Pattern.compile(pattern, flags)</code>. Java regex supports possessive quantifiers
          (<code>*+</code>, <code>++</code>) and atomic groups natively, making it safer against ReDoS
          than many engines. The <code>Matcher.group(name)</code> method accesses named groups.
        </p>

        <h3>Go</h3>
        <p>
          Go's <code>regexp</code> package uses RE2 semantics "” guaranteed linear time, no backreferences,
          no lookaheads or lookbehinds. This is a deliberate safety-first choice. The
          <code>regexp/syntax</code> package exposes the parser for building regex-based tools. For PCRE
          features in Go, use the <code>github.com/dlclark/regexp2</code> package (at the cost of the
          linear-time guarantee).
        </p>

        <h3>PCRE / PHP</h3>
        <p>
          PCRE (Perl-Compatible Regular Expressions) is the gold standard for feature richness. PHP's
          <code>preg_</code> functions use PCRE. Features unique to PCRE: recursive patterns (<code>(?R)</code>),
          conditional patterns, callouts, Unicode grapheme clusters, and PCRE2's extended Unicode support.
          PCRE is the engine used in Nginx, Apache, and many security tools.
        </p>

        <h2>Debugging Strategies with Our Regex Tester</h2>

        <h3>Build Incrementally</h3>
        <p>
          Start with a simple literal pattern and add complexity one piece at a time. Test each addition
          against both matching and non-matching examples before proceeding. This "build-and-verify" approach
          catches mistakes immediately at the point of introduction.
        </p>

        <h3>Use Named Groups for Readability</h3>
        <p>
          Complex patterns with many capture groups become hard to understand. Named groups like
          <code>(?&lt;year&gt;\d&#123;4&#125;)</code> make patterns self-documenting and make our tester's
          group visualization much more useful "” you see "year: 2024" instead of "group 1: 2024".
        </p>

        <h3>Test Edge Cases Explicitly</h3>
        <p>
          Always test: empty string, single character, maximum length input, input with only special
          characters, Unicode characters, strings that almost-but-not-quite match, and inputs at the
          exact boundaries of quantifier ranges. These edge cases reveal subtle pattern bugs that
          happy-path testing misses.
        </p>

        <h3>Use Comments for Complex Patterns</h3>
        <p>
          Many regex flavors support verbose/extended mode (<code>x</code> flag in Python, PCRE) that
          ignores whitespace and allows <code>#</code> comments. Breaking a complex pattern across
          multiple lines with inline comments makes it maintainable. Our tester shows the full pattern
          while allowing you to paste commented versions for development.
        </p>

        <h2>Performance and Privacy</h2>
        <p>
          All regex matching in our tester runs in your browser using a Web Worker so the UI never
          freezes. The worker has a configurable timeout to catch patterns that could run indefinitely
          on long inputs. No text, patterns, or results are sent to our servers "” your code and data
          stay private. The tool works offline once the page is loaded and is safe to use with sensitive
          log data, PII, or proprietary code.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a regex tester and why do I need one?',
    answer:
      'A regex tester is an interactive tool that shows you what your regular expression matches in real time "” highlighting matches, displaying capture groups, and counting results. Without one, you must modify code and rerun tests to see if a pattern works. A tester gives instant feedback, dramatically speeding up regex development and debugging.',
  },
  {
    category: 'General',
    question: 'What regex flavor does this tester use?',
    answer:
      'Our tester uses the JavaScript RegExp engine, which includes all ES2018+ features: named capturing groups, lookbehind assertions, Unicode property escapes, and the s (dotAll) flag. Results directly represent what you will get in JavaScript code and are broadly applicable to other PCRE-based languages.',
  },
  {
    category: 'General',
    question: 'Is my text safe to paste into this regex tester?',
    answer:
      'Yes. All regex matching runs locally in your browser "” no text, patterns, or results are sent to any server. The tool is safe to use with log files, PII, proprietary code, or any sensitive content.',
  },
  {
    category: 'Syntax',
    question: 'What does the dot (.) match and when should I escape it?',
    answer:
      'A dot matches any single character except newline by default. Enable the s (dotAll) flag to match newlines too. To match a literal dot (e.g., in a filename or version number), escape it: \\. "” otherwise .json matches "ajson" and version.1 matches "version 1" (treating . as any character).',
  },
  {
    category: 'Syntax',
    question: 'What is the difference between * and + quantifiers?',
    answer:
      '* means "zero or more" "” the element is optional. + means "one or more" "” at least one occurrence is required. Use + when the element must be present at least once. \\d+ requires at least one digit; \\d* matches even an empty string.',
  },
  {
    category: 'Syntax',
    question: 'What is the difference between greedy and lazy quantifiers?',
    answer:
      'Greedy quantifiers (default) match as many characters as possible. Lazy quantifiers (add ? after: *?, +?, ??) match as few as possible. Example: <.+> applied to "<b>text</b>" matches the entire string; <.+?> matches only "<b>". Lazy is not always faster "” use specific character classes like [^>]+ for best performance.',
  },
  {
    category: 'Syntax',
    question: 'How do I match special characters like ( ) . * + ? literally?',
    answer:
      'Escape them with a backslash: \\( matches a literal parenthesis, \\. matches a literal dot, \\* matches a literal asterisk. The full list of metacharacters to escape: . ^ $ * + ? { } [ ] \\ | ( ). Inside character classes [brackets], most metacharacters lose their special meaning.',
  },
  {
    category: 'Syntax',
    question: 'How do I match the start and end of a line vs the whole string?',
    answer:
      'Without the m (multiline) flag, ^ matches only the very start of the string and $ matches only the very end. With the m flag, ^ and $ match at the start and end of each line (after each \\n). Use \\A and \\Z in Python/.NET for string-only anchors regardless of multiline mode.',
  },
  {
    category: 'Flags',
    question: 'What does the global (g) flag do and when is it required?',
    answer:
      'The g flag makes the regex find all matches in the string rather than stopping at the first. It is required for String.replace() to replace all occurrences (without g, only the first match is replaced) and for String.matchAll() to work.',
  },
  {
    category: 'Flags',
    question: 'When should I use the m (multiline) flag?',
    answer:
      'Use m when you need ^ and $ to match line boundaries in multi-line text. For example, to find lines starting with "Error" in a log file: /^Error.*/gm. Without m, ^ only matches the very beginning of the entire string.',
  },
  {
    category: 'Flags',
    question: 'What does the s (dotAll) flag do?',
    answer:
      'The s flag makes the dot (.) match newline characters (\\n, \\r). Without it, . skips newlines. This is useful for matching content that spans multiple lines, like HTML blocks or multi-line strings. Alternative: use [\\s\\S] for cross-engine compatibility.',
  },
  {
    category: 'Groups',
    question: 'What is a capturing group and how do I access the captured text?',
    answer:
      'Parentheses create capturing groups. In JavaScript: const m = "2024-03-15".match(/(\\d{4})-(\\d{2})-(\\d{2})/); gives m[1]="2024", m[2]="03", m[3]="15". Named groups: /(?<year>\\d{4})-/ gives m.groups.year="2024". Our tester displays all captured groups for each match.',
  },
  {
    category: 'Groups',
    question: 'What is a non-capturing group (?:...) and why use it?',
    answer:
      'Non-capturing groups (?:...) group elements for quantifiers or alternation without creating a capture reference. Use them when you need grouping but don&#39;t need to extract the matched text. They are more efficient than capturing groups and don&#39;t pollute your match result with unwanted groups.',
  },
  {
    category: 'Groups',
    question: 'How do backreferences work in regex?',
    answer:
      'Backreferences (\\1, \\2, or \\k<name> for named groups) match the same text that a capturing group matched earlier in the pattern. \\b(\\w+)\\s+\\1\\b matches doubled words ("the the"). In replacement strings, $1 and $2 reference captured groups.',
  },
  {
    category: 'Lookaround',
    question: 'What is a lookahead and how is it different from a regular match?',
    answer:
      'A lookahead (?=pattern) asserts the pattern follows at the current position without consuming those characters. \\d+(?= USD) matches numbers only before " USD" "” the " USD" is not part of the match result. This is called zero-width matching and lets you match based on context without including context in the result.',
  },
  {
    category: 'Lookaround',
    question: 'What is a lookbehind assertion?',
    answer:
      'A positive lookbehind (?<=pattern) asserts the pattern precedes the current position. (?<=\\$)\\d+ matches digits preceded by a dollar sign without capturing the $. JavaScript added lookbehind support in ES2018. Note: Go&#39;s RE2 engine and POSIX tools do not support lookbehinds.',
  },
  {
    category: 'Performance',
    question: 'What is catastrophic backtracking?',
    answer:
      'Catastrophic backtracking occurs when a pattern like (a+)+ or (a|aa)+ is applied to a string that almost matches. The engine tries exponentially many combinations of how to split the input between quantifier levels, taking seconds or hours instead of milliseconds. Avoid nested quantifiers and use specific character classes.',
  },
  {
    category: 'Performance',
    question: 'What is ReDoS and how can regex cause denial of service?',
    answer:
      'ReDoS (Regular Expression DoS) exploits catastrophic backtracking. An attacker submits carefully crafted input to a form or API that uses a vulnerable regex, causing the server&#39;s regex engine to spend exponential time. Real-world ReDoS attacks have taken down services. Mitigate with RE2 engines for user-supplied patterns, regex timeouts, and pattern review.',
  },
  {
    category: 'Languages',
    question: 'How does Python regex differ from JavaScript regex?',
    answer:
      'Key differences: Python has re.match() (anchored at start) vs re.search() (anywhere); JavaScript has no direct equivalent. Python uses r"raw strings" to avoid double-escaping. Python named groups use (?P<name>...) while JavaScript uses (?<name>...). Python&#39;s re.compile() caches patterns; JavaScript should use regex literals for the same effect.',
  },
  {
    category: 'Languages',
    question: 'Why does Go\'s regex not support lookaheads or backreferences?',
    answer:
      'Go uses the RE2 engine which guarantees linear-time matching by restricting features that require backtracking. RE2 does not support lookaheads, lookbehinds, or backreferences. This is a deliberate safety tradeoff "” RE2 cannot have catastrophic backtracking. Use github.com/dlclark/regexp2 for PCRE features in Go.',
  },
  {
    category: 'Common Patterns',
    question: 'What regex validates an email address?',
    answer:
      'A practical email validation regex: /^[a-zA-Z0-9.!#$%&&#39;*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ "” This catches common formatting errors but cannot verify deliverability. Always use email confirmation for final validation.',
  },
  {
    category: 'Common Patterns',
    question: 'What regex validates a US phone number?',
    answer:
      '/^[+]?1?\\s*\\(?([2-9]\\d{2})\\)?[\\s.-]?([2-9]\\d{2})[\\s.-]?(\\d{4})$/ "” accepts (555) 123-4567, 555-123-4567, +1 555 123 4567, and similar formats. The [2-9] constraint excludes area codes and exchanges starting with 0 or 1 (invalid in NANP).',
  },
  {
    category: 'Common Patterns',
    question: 'How do I write a regex to match an entire line?',
    answer:
      'With the m (multiline) flag: /^.*your pattern.*$/m matches lines containing your pattern. Without m, ^ and $ refer to the entire string. Use /^.*your pattern.*$/gm to find all matching lines in multi-line text.',
  },
  {
    category: 'Debugging',
    question: 'Why does my regex match too much?',
    answer:
      'Most likely cause: greedy quantifiers expanding beyond the intended boundary. Solutions: (1) switch to lazy quantifiers (*? instead of *); (2) use a negated character class ([^>]* instead of .*); (3) add anchors (^ and $) if you need a full-string match; (4) add boundary assertions (\\b for word boundaries).',
  },
  {
    category: 'Debugging',
    question: 'Why does my regex match nothing even though it looks correct?',
    answer:
      'Common causes: (1) unescaped special characters (\\. needed for literal dot); (2) case mismatch without i flag; (3) missing m flag for multi-line ^ and $ anchors; (4) invisible characters or different newline styles (\\r\\n vs \\n) in the test string; (5) wrong quantifier "” missing + or * making a character required exactly once.',
  },
];

export const regexTesterContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
