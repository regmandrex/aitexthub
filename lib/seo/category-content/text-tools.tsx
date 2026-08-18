import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>Text tools</strong> handle the small, constant jobs that come up whenever you move writing
        between applications. This category collects utilities for changing case, removing duplicate
        lines, stripping HTML, counting words, fixing whitespace, finding and replacing, and detecting the
        invisible characters that cause text to behave strangely for no visible reason.
      </p>
      <p>
        These are the tools you reach for when something is wrong and you cannot see why. Text that will
        not match in a search. A word count that disagrees between two programs. Spacing that changes when
        the page renders. A spreadsheet import that fails on a file that looks perfectly fine. In most
        cases the cause is a character that occupies space in the data and nothing on screen.
      </p>
      <p>
        The tools divide roughly into three jobs. Some inspect, reporting what is present without changing
        anything, which is where you should usually start. Some clean, removing characters or formatting
        that should not be there. Some transform, changing case, extracting values, or substituting text.
        Reaching for a cleaning tool before you have inspected is the most common way to apply the wrong
        fix and still not understand the original problem.
      </p>
      <p>
        Every tool here runs entirely in your browser. Nothing you paste is uploaded, logged, or stored,
        which matters because these utilities routinely handle unpublished drafts, client material, and
        internal documents.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Invisible Characters: The Cause of Most Mysterious Text Problems</h2>
      <p>
        The <Link href="/invisible-character-detector">invisible character detector</Link>,{' '}
        <Link href="/invisible-character-remover">invisible character remover</Link>,{' '}
        <Link href="/zero-width-space-remover">zero-width space remover</Link>, and{' '}
        <Link href="/character-remover">character remover</Link> address a category of problem that is
        genuinely invisible and therefore extremely frustrating to diagnose.
      </p>
      <p>
        Unicode contains many characters that occupy no visual space or are indistinguishable from
        ordinary ones. They arrive through copy-paste from web pages, PDFs, word processors, and AI
        output, and once present they travel silently through every subsequent operation.
      </p>
      <p>
        <strong>Zero-width characters</strong> render as absolutely nothing. The zero-width space
        (U+200B), zero-width non-joiner (U+200C), zero-width joiner (U+200D), and word joiner (U+2060)
        have no width and no mark, yet they count as characters, break word boundaries, and prevent string
        matches. A zero-width space inside a word means a search for that word fails while the text looks
        identical on screen.
      </p>
      <p>
        <strong>Non-breaking spaces</strong> (U+00A0) look exactly like ordinary spaces but prevent line
        wrapping and do not match a regular space in comparisons. This is why a paragraph occasionally
        refuses to wrap correctly, and why find-and-replace skips instances that are visibly right there.
      </p>
      <p>
        <strong>Byte order marks</strong> (U+FEFF) sometimes appear at the very start of copied text and
        cause parse errors in JSON, CSV, and configuration files. The error points at position zero while
        the file looks flawless in an editor, which makes it a memorably annoying bug.
      </p>
      <p>
        <strong>Directional marks</strong> (U+200E, U+200F) control bidirectional text ordering and can
        make characters appear in an unexpected order when they turn up unintentionally.
      </p>
      <p>
        The <Link href="/invisible-text-copy-paste">invisible text copy-paste tool</Link> works in the
        other direction, generating invisible characters deliberately, which people use for blank messages
        and usernames on platforms that require non-empty input.
      </p>
      <p>
        There is also a security dimension worth knowing about. Because certain Unicode characters are
        visually identical to Latin letters while being entirely different code points, they can be used
        to construct strings that look legitimate and are not. A Cyrillic letter that renders identically
        to a Latin one makes a convincing lookalike domain or filename. Invisible characters can likewise
        be used to slip content past naive keyword filters. Detecting what is actually present, rather
        than trusting what renders, is the defence in both cases.
      </p>

      <h2>Case Conversion</h2>
      <p>
        The <Link href="/case-converter">case converter</Link> switches text between uppercase, lowercase,
        title case, sentence case, and other variants. Straightforward in principle, with two
        complications worth knowing.
      </p>
      <p>
        <strong>Title case is not a single standard.</strong> Different style guides disagree about which
        words to capitalize. AP style capitalizes words of four letters or more; Chicago capitalizes
        principal words and lowercases articles, prepositions, and coordinating conjunctions regardless of
        length. Both capitalize the first and last word whatever they are. This is why automated title
        case sometimes produces results that look wrong: it is following a different convention from the
        one you have in mind.
      </p>
      <p>
        <strong>Case conversion is language-dependent.</strong> Turkish has both dotted and dotless i, and
        naive uppercasing of Turkish text produces the wrong letter, which is a well-known source of bugs
        in software that assumes English casing rules apply universally. German sharp s traditionally
        uppercases to a two-letter sequence. Greek final sigma changes form depending on position.
      </p>

      <h2>Whitespace and Line Handling</h2>
      <p>
        The <Link href="/remove-whitespace">whitespace remover</Link>,{' '}
        <Link href="/space-remover">space remover</Link>,{' '}
        <Link href="/paragraph-space-remover">paragraph space remover</Link>,{' '}
        <Link href="/remove-line-breaks">line break remover</Link>, and{' '}
        <Link href="/remove-spaces-excel">Excel space remover</Link> normalize spacing.
      </p>
      <p>
        Whitespace problems are common because different systems represent line endings differently.
        Windows uses carriage return plus line feed; Unix, Linux, and modern macOS use line feed alone.
        Text moved between them can show as one long line, display stray characters, or produce doubled
        spacing. This is also why a file edited on two operating systems can appear entirely rewritten in
        a version control diff when nothing meaningful changed.
      </p>
      <p>
        Trailing whitespace deserves specific mention because it is invisible and consequential. In code
        it produces noisy diffs where lines appear changed although nothing meaningful differs, which
        makes review harder and pollutes blame history. In data files it causes lookups to fail, since a
        trailing space makes an otherwise matching value distinct.
      </p>
      <p>
        The <Link href="/remove-spaces-excel">Excel space remover</Link> addresses a specific recurring
        problem. Spreadsheet data frequently carries leading or trailing spaces from imports and manual
        entry, which break VLOOKUP and other exact-match functions in ways that are hard to spot because
        the cells look correct.
      </p>

      <h2>Duplicates, Sorting, and Extraction</h2>
      <p>
        The <Link href="/remove-duplicate-lines">duplicate line remover</Link> deduplicates lists, which
        sounds simple until you consider what counts as a duplicate. Lines differing only in case, or in
        leading or trailing whitespace, or in whether they contain a non-breaking space rather than a
        regular one, are visually identical and textually distinct. This is why deduplication sometimes
        leaves entries that clearly look the same, and why cleaning whitespace before deduplicating gives
        better results.
      </p>
      <p>
        The <Link href="/extract-numbers-from-text">number extractor</Link> pulls numeric values out of
        surrounding text, useful for processing reports, logs, and pasted content where the figures matter
        and the prose does not.
      </p>
      <p>
        The <Link href="/word-descrambler">word descrambler</Link> finds words that can be formed from a
        set of letters, which serves word games and puzzles.
      </p>

      <h2>Finding, Replacing, and Counting</h2>
      <p>
        The <Link href="/find-and-replace">find and replace tool</Link> performs bulk substitution across
        text, with the advantage over an editor&apos;s built-in version of operating on pasted content
        without touching a file.
      </p>
      <p>
        The reason find and replace appears to fail is nearly always an invisible character. If you are
        searching for a phrase that is visibly present and getting no match, run the{' '}
        <Link href="/invisible-character-detector">invisible character detector</Link> first. A
        non-breaking space where you typed a regular space, or a zero-width character between two letters,
        makes the strings genuinely different.
      </p>
      <p>
        The <Link href="/word-counter">word counter</Link> counts words, characters, sentences, and
        paragraphs. Counts vary between applications more than people expect, because different programs
        make different decisions about hyphenated words, numbers, contractions, and whether headers,
        footnotes, and captions are included. Invisible characters widen the gap further by breaking word
        boundaries. Where a limit is enforced, check what the enforcing system counts rather than
        assuming.
      </p>

      <h2>Formatting and Markup Removal</h2>
      <p>
        The <Link href="/strip-html">HTML stripper</Link> removes tags and returns plain text, useful for
        extracting content from scraped pages, email source, or CMS exports.
      </p>
      <p>
        The <Link href="/remove-text-formatting">formatting remover</Link>,{' '}
        <Link href="/format-remover">format remover</Link>, and{' '}
        <Link href="/clean-paste">clean paste tool</Link> strip rich text formatting so pasted content
        adopts the destination&apos;s styling rather than importing its source styling. This is the
        problem behind text that pastes into a document carrying the wrong font, size, and color, and it
        is the single most common formatting complaint in word processing.
      </p>
      <p>
        The <Link href="/em-dash-remover">em dash remover</Link> converts em dashes to hyphens or other
        punctuation. Em dashes are typographically correct in published prose and actively harmful in
        code, CSV, and any ASCII-expecting system. They have also become the most recognizable stylistic
        marker of AI-generated text, since models use them at well above natural human frequency. The{' '}
        <Link href="/em-dash-copy-paste">em dash copy-paste tool</Link> serves the opposite need, when you
        want a proper em dash and your keyboard has no direct key for it.
      </p>

      <h2>AI Text Cleanup</h2>
      <p>
        The <Link href="/chatgpt-text-cleaner">ChatGPT text cleaner</Link>,{' '}
        <Link href="/text-cleaner">text cleaner</Link>, and{' '}
        <Link href="/chatgpt-line-spacing">ChatGPT line spacing tool</Link> combine several operations for
        the specific case of preparing AI output for publication.
      </p>
      <p>
        AI output is rarely plain text. It typically carries smart quotes, em dashes, non-breaking spaces,
        occasional zero-width characters, and sometimes literal Markdown syntax that the destination
        editor will not interpret. Running one combined cleanup is faster than applying five separate
        tools.
      </p>
      <p>
        For model-specific cleaners and a fuller treatment of AI text artifacts, see the{' '}
        <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link> category.
      </p>

      <h2>Understanding Character Encoding</h2>
      <p>
        Most text problems trace back to encoding, and a working understanding of it turns a class of
        baffling bugs into obvious ones.
      </p>
      <p>
        <strong>Characters versus bytes.</strong> A character is what a reader sees. A byte is what the
        computer stores. In ASCII these mapped one to one, which is why the distinction went unnoticed for
        decades. Unicode assigns a number, called a code point, to every character across every writing
        system, and an encoding determines how those numbers become bytes.
      </p>
      <p>
        <strong>UTF-8 is the encoding to use.</strong> It represents ASCII characters in a single byte,
        keeping English text compact and backward compatible, while using two to four bytes for everything
        else. It is now the overwhelming majority of web content. Problems arise almost entirely when
        something assumes a different encoding.
      </p>
      <p>
        <strong>Mojibake is what encoding mismatch looks like.</strong> When UTF-8 bytes are interpreted
        as Latin-1 or Windows-1252, each byte of a multi-byte character is rendered separately, producing
        the characteristic garbled sequences where a single curly apostrophe becomes several strange
        symbols. The data is usually intact; only the interpretation is wrong, which means it is often
        recoverable if you identify the mismatch.
      </p>
      <p>
        <strong>Replacement characters mean information was lost.</strong> A black diamond with a question
        mark, or a plain question mark where a letter should be, indicates the system could not represent
        the character at all and substituted a placeholder. Unlike mojibake, this is usually
        unrecoverable, because the original value is gone rather than misread.
      </p>
      <p>
        <strong>Normalization forms matter for comparison.</strong> Unicode often allows the same visible
        character to be encoded more than one way. An accented e can be a single precomposed code point or
        a plain e followed by a combining accent. Both look identical and neither is wrong, but they are
        different byte sequences, so comparisons fail and uniqueness constraints treat them as distinct.
        Normalizing to NFC before storing or comparing eliminates the problem.
      </p>

      <h2>How Text Length Is Measured</h2>
      <p>
        String length is far less obvious than it appears, and the disagreement between systems causes
        real bugs.
      </p>
      <p>
        <strong>Three different counts exist</strong> for the same text. Bytes, which is what storage and
        transmission care about. Code points, which is roughly what Unicode considers a character.
        Grapheme clusters, which is what a reader perceives as a single character.
      </p>
      <p>
        A plain letter is one of each. An emoji may be one grapheme cluster, two UTF-16 code units in
        JavaScript, and four bytes in UTF-8. Emoji built from zero-width joiner sequences, such as family
        or profession emoji, can span a dozen code points while a reader sees one symbol. Flag emoji are
        pairs of regional indicator symbols.
      </p>
      <p>
        This explains several persistent problems. A database column declared to hold 255 characters does
        not reliably hold 255 arbitrary Unicode characters, because the limit may be in bytes. Browser
        validation using a string length property can disagree with server-side validation counting bytes,
        letting input pass one and fail the other. And truncating text at a fixed length can split a
        grapheme cluster, producing a broken character or an emoji that renders as unrelated components.
      </p>
      <p>
        The practical rule: when a limit matters, find out what unit is being counted rather than assuming
        it matches what you see.
      </p>

      <h2>A Diagnostic Guide</h2>
      <p>
        Matching symptoms to causes, since the same few problems account for most text trouble.
      </p>
      <p>
        <strong>Search finds nothing although the text is visibly there.</strong> An invisible character
        inside the string, or a non-breaking space where you typed a regular one.
      </p>
      <p>
        <strong>Text pastes with the wrong font and color.</strong> Rich text formatting travelled with
        it. Use a clean paste tool or paste as plain text.
      </p>
      <p>
        <strong>A line refuses to wrap and breaks the layout.</strong> A non-breaking space is preventing
        the wrap. It is invisible and identical to a normal space.
      </p>
      <p>
        <strong>Character count exceeds a limit although visible text is shorter.</strong> Invisible
        characters counting toward the total, which matters for meta descriptions and social posts.
      </p>
      <p>
        <strong>A CSV or JSON file fails to parse at position zero.</strong> A byte order mark at the
        start.
      </p>
      <p>
        <strong>VLOOKUP fails on values that match.</strong> Leading or trailing whitespace in one of
        them.
      </p>
      <p>
        <strong>Deduplication leaves obvious duplicates.</strong> Differences in case, whitespace, or
        space type. Normalize before deduplicating.
      </p>
      <p>
        <strong>A file shows as entirely changed in a diff.</strong> Line ending conversion between
        Windows and Unix conventions.
      </p>
      <p>
        <strong>Accented text will not match despite looking identical.</strong> Unicode normalization: the
        same character encoded two different ways. Normalize both sides to NFC before comparing them, and
        the mismatch disappears. This affects non-English text and copied web content most often.
      </p>

      <h2>Where Text Problems Come From</h2>
      <p>
        Knowing the usual sources helps you anticipate what cleaning a given piece of text will need.
      </p>
      <p>
        <strong>PDFs are the worst offender.</strong> A PDF stores glyph positions rather than flowing
        text, so copying reconstructs a plausible reading order that is frequently wrong. Multi-column
        layouts interleave. Ligatures such as fi and fl may copy as single characters that break search.
        Hyphenation inserted for line breaks becomes literal hyphens mid-word. Headers and footers
        interrupt the body. Text copied from a PDF almost always needs work.
      </p>
      <p>
        <strong>Word processors carry formatting and autocorrect artifacts.</strong> Autocorrect converts
        straight quotes to curly ones, hyphens to dashes, and applies capitalization rules, all of which
        are correct in the document and often wrong in the destination. Tracked changes and comments can
        surface unexpectedly when content is copied.
      </p>
      <p>
        <strong>Web pages carry markup and styling.</strong> Copying from a browser brings HTML structure,
        inline styles, and often non-breaking spaces used for layout. Content management systems then
        re-encode this, sometimes double-encoding entities so an ampersand appears as its escaped form
        rather than the symbol.
      </p>
      <p>
        <strong>Spreadsheets coerce values aggressively.</strong> Excel converts anything resembling a date
        into one, strips leading zeros from identifiers and postcodes, and truncates long numbers into
        scientific notation. These changes happen on open, before you have done anything, which is why
        importing through the data import path rather than double-clicking a CSV matters.
      </p>
      <p>
        <strong>AI output carries its own signature.</strong> Smart quotes, em dashes at high density,
        occasional zero-width characters, and literal Markdown that the destination will not render.
      </p>
      <p>
        <strong>Messaging and email clients reformat silently.</strong> Line breaks are inserted at fixed
        widths, URLs are linkified, and quoting adds prefix characters that survive copying.
      </p>

      <h2>Working With Large Volumes</h2>
      <p>
        These tools handle individual passages well. When you are processing a lot of text, a few
        practices make the work reliable rather than repetitive.
      </p>
      <p>
        <strong>Fix problems at the source when you can.</strong> If every export from a system carries
        the same artifact, changing the export settings once is better than cleaning every file. Many
        systems offer a plain text or UTF-8 export option that eliminates the problem entirely.
      </p>
      <p>
        <strong>Establish the pattern on a sample first.</strong> Run the detector on a representative
        piece, work out exactly which operations are needed and in what order, then apply that sequence.
        Discovering on file forty that an earlier step was wrong is expensive.
      </p>
      <p>
        <strong>Keep the original.</strong> Cleanup is lossy by design, and you occasionally discover that
        something you removed mattered. Working on a copy costs nothing and preserves the ability to start
        again.
      </p>
      <p>
        <strong>Verify in the destination, not the tool.</strong> Text that looks correct after cleaning
        can still behave unexpectedly in the target application. The destination is the only ground truth,
        and checking one item there before processing hundreds saves rework.
      </p>
      <p>
        <strong>Normalize before comparing anything.</strong> Whether you are deduplicating, matching
        records, or diffing versions, running normalization first makes the comparison meaningful. Most
        apparent tool failures in comparison tasks are normalization that did not happen.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For AI-specific cleanup across models, see the{' '}
        <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>. For Base64, URL encoding, and
        binary conversion, see the <Link href="/ai-tools/encoding-tools">encoding tools</Link>. For
        grammar, readability, and tone, see the{' '}
        <Link href="/ai-tools/writing-tools">writing tools</Link>. For regex testing, diffing, and
        formatters, see the <Link href="/ai-tools/developer-tools">developer tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What are text tools used for?',
    answer:
      'The routine jobs that come up when moving writing between applications: changing case, removing duplicate lines, stripping HTML, counting words, normalizing whitespace, finding and replacing, and detecting invisible characters. They are the tools you reach for when text behaves strangely and nothing on screen explains why.',
  },
  {
    category: 'General',
    question: 'Are these text tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits. They run in your browser, so you can process as much text as your device handles.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my text uploaded when I use these tools?',
    answer:
      'No. Every tool in this category processes text entirely in your browser using client-side JavaScript. Nothing is uploaded, logged, or stored. You can verify this by opening your browser developer tools, selecting the Network tab, and confirming no request fires when you use a tool.',
  },
  {
    category: 'Privacy and Security',
    question: 'Can I safely process confidential documents?',
    answer:
      'Yes. Because processing is client-side, confidential material never leaves your machine. This matters here because these utilities routinely handle unpublished drafts, client material under NDA, and internal documents that should not be transmitted to a third party.',
  },
  {
    category: 'Technical',
    question: 'What is a zero-width space?',
    answer:
      'A Unicode character (U+200B) with no visual width and no mark, making it completely invisible. It still counts as a character, breaks word boundaries, disrupts search and replace, and inflates character counts. A zero-width space inside a word means searching for that word fails while the text looks identical.',
  },
  {
    category: 'Technical',
    question: 'What is a non-breaking space and why does it cause problems?',
    answer:
      'A character (U+00A0) that looks identical to an ordinary space but prevents line wrapping at that point and does not match a regular space in comparisons. Because it is visually indistinguishable, it survives proofreading indefinitely, and it explains both text that refuses to wrap and searches that skip visible matches.',
  },
  {
    category: 'Technical',
    question: 'Why does my JSON or CSV fail to parse at position zero?',
    answer:
      'Almost certainly a byte order mark (U+FEFF) at the very start of the file. It is invisible, so the file looks perfect in an editor, but many parsers do not expect it and fail immediately. Removing invisible characters from the start of the file resolves it.',
  },
  {
    category: 'Technical',
    question: 'Why does the same file show as completely changed in a diff?',
    answer:
      'Line ending conversion. Windows uses carriage return plus line feed while Unix, Linux, and modern macOS use line feed alone. Editing a file on two operating systems rewrites every line ending, so a diff reports every line as changed even though nothing meaningful differs.',
  },
  {
    category: 'Technical',
    question: 'Why is case conversion language-dependent?',
    answer:
      'Because casing rules differ between languages. Turkish has dotted and dotless i, so naive uppercasing produces the wrong letter, a well-known bug in software assuming English rules. German sharp s traditionally uppercases to two letters, and Greek final sigma changes form depending on position.',
  },
  {
    category: 'Technical',
    question: 'Why does automated title case look wrong sometimes?',
    answer:
      'Because title case is not a single standard. AP style capitalizes words of four letters or more, while Chicago capitalizes principal words and lowercases articles, prepositions, and coordinating conjunctions regardless of length. Both capitalize the first and last word. A tool following one convention will look wrong to someone expecting the other.',
  },
  {
    category: 'Usage',
    question: 'Why does find and replace skip matches that are clearly there?',
    answer:
      'Nearly always an invisible character inside the string. A non-breaking space where you typed a regular space, or a zero-width character between two letters, makes the strings genuinely different even though they look identical. Run the invisible character detector before assuming the tool is broken.',
  },
  {
    category: 'Usage',
    question: 'Why do my word counts differ between applications?',
    answer:
      'Different programs make different decisions about hyphenated words, numbers, contractions, and whether headers, footnotes, and captions count. Invisible characters widen the gap by breaking word boundaries. Where a limit is enforced, check what the enforcing system counts rather than trusting another application total.',
  },
  {
    category: 'Usage',
    question: 'Why does deduplication leave entries that look identical?',
    answer:
      'Because they differ in ways you cannot see: case, leading or trailing whitespace, or a non-breaking space instead of a regular one. Visually identical is not textually identical. Normalizing whitespace and case before deduplicating produces much better results.',
  },
  {
    category: 'Usage',
    question: 'Why does VLOOKUP fail on values that clearly match?',
    answer:
      'Leading or trailing whitespace in one of the values, usually introduced by an import or manual entry. Exact-match functions treat a trailing space as a real difference, and the cells look correct because the space is invisible. Trimming whitespace across the column resolves it.',
  },
  {
    category: 'Usage',
    question: 'Why does text paste with the wrong font and color?',
    answer:
      'Because rich text formatting travelled with the content, so it imported its source styling instead of adopting the destination styling. Use a clean paste tool to strip the formatting first, or paste as plain text using your application unformatted-paste shortcut.',
  },
  {
    category: 'Usage',
    question: 'Should I remove em dashes from my text?',
    answer:
      'It depends on the destination. In published prose they are typographically correct and should stay. In code, CSV, JSON, or any ASCII-expecting system they cause real failures. They are also the most recognizable marker of AI-generated writing, since models use them well above natural human frequency.',
  },
  {
    category: 'Usage',
    question: 'Why does trailing whitespace matter?',
    answer:
      'In code it produces noisy diffs where lines appear changed although nothing meaningful differs, which makes review harder and pollutes blame history. In data files it causes exact-match lookups to fail, since a trailing space makes an otherwise matching value distinct. It is invisible in both cases.',
  },
  {
    category: 'Detection and Limits',
    question: 'How do invisible characters get into my text?',
    answer:
      'Copy-paste, almost always. Web pages, PDFs, word processors, and AI output all embed them, and copying carries the underlying character data along with what you can see. Once present they travel silently through every subsequent edit, paste, and save.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can I see invisible characters in a normal text editor?',
    answer:
      'Not by default. Some code editors can show them with a whitespace-rendering or non-printable-character setting enabled, but ordinary word processors and text fields give no indication. This is exactly why a detector is useful: it reports what is present rather than relying on you spotting it.',
  },
  {
    category: 'Detection and Limits',
    question: 'Does removing invisible characters change my writing?',
    answer:
      'No. These tools remove characters that should not be there and normalize malformed spacing. Your words, wording, and meaning stay exactly as written. This is different from a rewriter or humanizer, which changes the text itself.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my text look wrong after uploading to a CMS or LMS?',
    answer:
      'Many content systems run older text pipelines that handle extended Unicode poorly, so smart quotes and em dashes appear as question marks or black diamonds. Normalizing punctuation to plain ASCII and removing invisible characters before uploading avoids it.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my character count exceed a limit when the text looks shorter?',
    answer:
      'Invisible characters counting toward the total. This bites most on fields with hard caps such as meta descriptions, social media posts, and form inputs, where a paste from a formatted source can add characters you have no way to see.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What is the difference between CRLF and LF line endings?',
    answer:
      'CRLF is carriage return plus line feed, used by Windows. LF is line feed alone, used by Unix, Linux, and modern macOS. Text moved between conventions can appear as one long line, show stray characters, or produce doubled spacing, depending on what reads it.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between these and the AI cleanup tools?',
    answer:
      'These are general-purpose utilities that work on any text from any source. The AI cleanup tools target the specific artifact patterns different language models produce, with dedicated cleaners for ChatGPT, Gemini, Claude and others. There is overlap, and for AI output the dedicated category is more thorough.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Which tool should I use first when text is behaving strangely?',
    answer:
      'The invisible character detector. It inspects without changing anything, so it tells you what is actually present before you apply any transformation. Knowing the cause prevents you running cleanup steps that were never needed and missing the one that was.',
  },
  {
    category: 'Privacy and Security',
    question: 'Can invisible or lookalike characters be used maliciously?',
    answer:
      'Yes. Some Unicode characters render identically to Latin letters while being different code points, so a Cyrillic letter can make a convincing lookalike domain or filename. Invisible characters can also slip content past naive keyword filters. Detecting what is actually present, rather than trusting what renders, is the defence in both cases.',
  },
  {
    category: 'Technical',
    question: 'What is UTF-8 and why does it matter?',
    answer:
      'UTF-8 is the encoding that maps Unicode code points to bytes, using a single byte for ASCII characters and two to four for everything else. It keeps English text compact while representing every writing system, and it is now the overwhelming majority of web content. Nearly all encoding problems arise when something assumes a different encoding.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does truncating text sometimes break an emoji?',
    answer:
      'Because a fixed-length cut can split a grapheme cluster. An emoji built from multiple code points joined together will render as unrelated components, or as a broken character, if the truncation lands mid-sequence. Truncating on grapheme boundaries rather than raw length avoids it.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do HTML entities sometimes appear as literal text on my page?',
    answer:
      'Double encoding. The content was escaped once, then escaped again by a content management system, so the ampersand in the escape sequence was itself escaped. The result displays the entity code rather than the character it represents. Decoding once resolves it.',
  },
  {
    category: 'Technical',
    question: 'What is mojibake and can I recover from it?',
    answer:
      'Mojibake is what encoding mismatch looks like: UTF-8 bytes interpreted as Latin-1 or Windows-1252, so each byte of a multi-byte character renders separately and a curly apostrophe becomes several strange symbols. The data is usually intact and only the interpretation is wrong, which means it is often recoverable once you identify the mismatch.',
  },
  {
    category: 'Technical',
    question: 'What does a black diamond question mark character mean?',
    answer:
      'It is a replacement character, indicating the system could not represent the original at all and substituted a placeholder. Unlike mojibake, this is usually unrecoverable, because the original value was discarded rather than misread. It typically means text passed through a system with a narrower character set.',
  },
  {
    category: 'Technical',
    question: 'Why do two identical-looking strings not match?',
    answer:
      'Often Unicode normalization. The same visible character can be encoded more than one way: an accented e can be a single precomposed code point or a plain e plus a combining accent. Both look identical and neither is wrong, but the byte sequences differ, so comparisons fail. Normalizing to NFC before comparing fixes it.',
  },
  {
    category: 'Technical',
    question: 'Why does one emoji count as several characters?',
    answer:
      'Because bytes, code points, and grapheme clusters are three different counts. An emoji may be one grapheme cluster that a reader sees as one symbol, two UTF-16 code units in JavaScript, and four bytes in UTF-8. Emoji built from zero-width joiner sequences, such as family emoji, can span a dozen code points.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why is text copied from a PDF such a mess?',
    answer:
      'A PDF stores glyph positions rather than flowing text, so copying reconstructs a reading order that is frequently wrong. Multi-column layouts interleave, ligatures like fi may copy as single characters that break search, hyphenation inserted for line breaks becomes literal hyphens mid-word, and headers interrupt the body.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does Excel change my data when I open a CSV?',
    answer:
      'It coerces values aggressively on open, before you have done anything. Anything resembling a date becomes one, leading zeros are stripped from identifiers and postcodes, and long numbers become scientific notation. Importing through the Data tab rather than double-clicking the file lets you set column types first.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I handle cleaning a large batch of files?',
    answer:
      'Fix the problem at the source if the same artifact appears in every export, since changing export settings once beats cleaning every file. Otherwise establish the operation sequence on a representative sample first, keep the originals, and verify one result in the real destination before processing the rest.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What order should I apply text cleanup operations?',
    answer:
      'Detect first so you know what is there. Then remove invisible characters, since that resolves most problems. Then normalize whitespace. Then handle punctuation only if the destination requires ASCII. Then strip formatting or markup if needed. Finally verify by pasting into the real destination rather than assuming.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I prepare a list for reliable deduplication?',
    answer:
      'Normalize before comparing. Remove invisible characters, trim leading and trailing whitespace, collapse internal runs of spaces, and decide whether case should matter. Only then deduplicate. Skipping normalization is why lists that look clean still contain apparent duplicates afterwards.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I clean spreadsheet data before analysis?',
    answer:
      'Trim leading and trailing whitespace across every text column first, since that alone fixes most failed lookups. Remove invisible characters, which imports frequently introduce. Then normalize case if you are matching on text values. Doing this before building formulas avoids debugging results that are wrong for invisible reasons.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
