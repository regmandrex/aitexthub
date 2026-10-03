import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p><strong>Text tools</strong> manage the quick, recurring tasks that arise whenever you transfer copy between programs. This group gathers utilities for altering cases, deleting duplicate rows, stripping HTML, tallying words, correcting spacing, finding and replacing, and spotting hidden symbols that cause text to behave erratically for no apparent reason.</p>
      <p>These are the utilities you utilize whenever an issue arises and the cause eludes you. Text failing to rank properly in search results. A word count discrepancy across different applications. Spacing shifts upon page rendering. A spreadsheet import error on a file that appears entirely correct. Frequently, the culprit is a hidden character existing within the data yet remaining invisible visually.</p>
      <p>The utilities break down roughly into three functions. Some inspect, reporting existing elements without altering anything, which serves as the ideal starting point. Some clean, erasing unwanted symbols or formatting. Some transform, altering cases, pulling values, or substituting text. Applying a cleanup utility prior to inspection is the most frequent way to execute the incorrect repair while failing to grasp the original issue.</p>
      <p>Every utility here executes entirely within your browser. Nothing you paste gets uploaded, saved, or tracked, which is crucial since these tools frequently process unreleased drafts, client work, and internal files.</p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Invisible Characters: The Root of Most Cryptic Text Issues</h2>
      <p>The <Link href="/invisible-character-detector">invisible character detector</Link>,{' '} <Link href="/invisible-character-remover">invisible character remover</Link>,{' '} <Link href="/zero-width-space-remover">zero-width space remover</Link>, and{' '} <Link href="/character-remover">character remover</Link> tackle an issue category that is completely imperceptible and consequently extremely hard to diagnose.</p>
      <p>Unicode features numerous symbols taking up zero visual space or remaining indistinguishable from standard ones. They enter via copy-pasting from web pages, PDFs, text editors, and AI outputs, and once present, they propagate silently across every subsequent action.</p>
      <p><strong>Zero-width characters</strong> render as absolute nothingness. The zero-width space (U+200B), zero-width non-joiner (U+200C), zero-width joiner (U+200D), and word joiner (U+2060) have zero width and zero mark, yet they count as symbols, disrupt word boundaries, and block string matches. A zero-width space inside a term means a search for that term fails while the copy appears identical visually.</p>
      <p><strong>Non-breaking spaces</strong> (U+00A0) resemble standard spaces identically yet prevent line wraps and fail to match regular spaces during comparisons. This explains why paragraphs occasionally refuse to wrap properly, and why find-and-replace misses instances sitting right there visually.</p>
      <p><strong>Byte order marks</strong> (U+FEFF) occasionally surface right at the beginning of copied text and trigger parsing failures in JSON, CSV, and config files. The error points to position zero while the file looks pristine in an editor, rendering it a uniquely frustrating bug.</p>
      <p><strong>Directional marks</strong> (U+200E, U+200F) regulate bidirectional text sequence and can cause symbols to display in unexpected orders when appearing accidentally.</p>
      <p>The <Link href="/invisible-text-copy-paste">invisible text copy-paste tool</Link> operates conversely, generating invisible characters intentionally, which users employ for blank messages and usernames on services demanding non-empty inputs.</p>
      <p>There is also a security aspect worth understanding. Because certain Unicode characters look just like Latin letters while being distinct code points, they can build strings that appear valid but are not. A Cyrillic letter rendering identically to a Latin one creates a convincing counterfeit domain or filename. Similarly, invisible characters can bypass simple keyword filters. Finding what is truly there rather than trusting what appears visually is the protection in both cases.</p>

      <h2>Case Conversion</h2>
      <p>The <Link href="/case-converter">case converter</Link> switches copy between uppercase, lowercase, title case, sentence case, and additional formats. Simple in theory, featuring two complexities worth understanding.</p>
      <p><strong>Title case is not a single standard.</strong> Different style guides disagree on which words to capitalize. AP style capitalizes words with four or more letters; Chicago capitalizes main words and lowercases articles, prepositions, and coordinating conjunctions regardless of length. Both capitalize the first and last word no matter what they are. This is why automated title case occasionally yields outcomes that seem incorrect: it follows a different rule set than the one you expect.</p>
      <p><strong>Case conversion is language-dependent.</strong> Turkish includes both dotted and dotless i, and naive capitalization of Turkish text yields the incorrect letter, a well-known bug source in software assuming universal English casing rules. German sharp s traditionally capitalizes into a two-character string. Greek final sigma shifts form according to position.</p>

      <h2>Whitespace and Line Management</h2>
      <p>The <Link href="/remove-whitespace">whitespace remover</Link>,{' '} <Link href="/space-remover">space remover</Link>,{' '} <Link href="/paragraph-space-remover">paragraph space remover</Link>,{' '} <Link href="/remove-line-breaks">line break remover</Link>, and{' '} <Link href="/remove-spaces-excel">Excel space remover</Link> standardize spacing.</p>
      <p>Whitespace issues prevail because disparate systems handle line endings differently. Windows employs carriage return plus line feed; Unix, Linux, and current macOS utilize line feed alone. Text transferred between them might appear as a single long line, show stray symbols, or create doubled spacing. This also explains why files edited across two operating systems can look completely rewritten within version control diffs despite zero meaningful alterations.</p>
      <p>Trailing whitespace merits explicit note due to its hidden yet impactful nature. In code, it generates noisy diffs where lines appear altered despite identical contents, complicating reviews and polluting blame histories. In data files, it causes lookups to fail, as a trailing space renders an otherwise matching value unique.</p>
      <p>The <Link href="/remove-spaces-excel">Excel space remover</Link> resolves a specific recurring hurdle. Spreadsheet data frequently retains leading or trailing spaces from imports and manual entries, breaking VLOOKUP alongside other exact-match formulas in hard-to-spot ways because cells appear correct.</p>

      <h2>Sorting, Extraction, and Duplicates</h2>
      <p>The <Link href="/remove-duplicate-lines">duplicate line remover</Link> filters out identical list entries, which seems straightforward until you define what constitutes a duplicate. Lines that vary only in capitalization, leading or trailing spaces, or by containing a non-breaking space instead of a standard one, appear identical yet remain textually separate. This explains why deduplication occasionally retains items that clearly look identical, and why removing whitespace beforehand yields superior results.</p>
      <p>The <Link href="/extract-numbers-from-text">number extractor</Link> pulls digits out of surrounding text, proving useful for handling reports, logs, and pasted content where numbers matter and words do not.</p>
      <p>The <Link href="/word-descrambler">word descrambler</Link> uncovers possible words built from a provided set of letters, supporting word games and puzzles.</p>

      <h2>Searching, Substituting, and Tallying</h2>
      <p>The <Link href="/find-and-replace">find and replace tool</Link> executes bulk text swaps, offering the benefit over standard editor functions by altering pasted content directly without modifying a file.</p>
      <p>The reason find and replace seems to fail is almost always an invisible character. If you search for a visible phrase and find no matches, run the{' '} <Link href="/invisible-character-detector">invisible character detector</Link> first. A non-breaking space where a normal space belongs, or a zero-width character nestled between letters, makes the strings entirely different.</p>
      <p>The <Link href="/word-counter">word counter</Link> measures words, characters, sentences, and paragraphs. Counts diverge across programs more than expected because different software handles hyphenated words, numbers, contractions, and whether titles, footnotes, or captions count differently. Invisible characters expand this gap further by disrupting word boundaries. When limits apply, verify what the checking system actually counts instead of assuming.</p>

      <h2>Styling and Tag Elimination</h2>
      <p>The <Link href="/strip-html">HTML stripper</Link> strips tags to leave plain text, ideal for pulling content from scraped web pages, email source code, or CMS outputs.</p>
      <p>The <Link href="/remove-text-formatting">formatting remover</Link>,{' '} <Link href="/format-remover">format remover</Link>, and{' '} <Link href="/clean-paste">clean paste tool</Link> remove rich text styling so pasted data takes on the destination styling rather than retaining its origin styling. This causes text pasted into a file to carry the incorrect font, size, and color, representing the most frequent formatting complaint in word processing.</p>
      <p>The <Link href="/em-dash-remover">em dash remover</Link> changes em dashes into hyphens or other marks. Em dashes are correct in published prose but harmful within code, CSV files, and ASCII systems. They also serve as the most identifiable sign of AI-generated content, since models deploy them far above typical human frequencies. The{' '} <Link href="/em-dash-copy-paste">em dash copy-paste tool</Link> addresses the opposite need, letting you insert a proper em dash when your keyboard lacks a dedicated key.</p>

      <h2>AI Text Cleanup</h2>
      <p>The <Link href="/chatgpt-text-cleaner">ChatGPT text cleaner</Link>,{' '} <Link href="/text-cleaner">text cleaner</Link>, and{' '} <Link href="/chatgpt-line-spacing">ChatGPT line spacing tool</Link> merge multiple steps specifically for formatting AI text prior to publishing.</p>
      <p>AI output is rarely plain text. It usually contains smart quotes, em dashes, non-breaking spaces, occasional zero-width marks, and sometimes raw Markdown syntax that destination editors cannot parse. Running a single combined cleanup works quicker than using five separate utilities.</p>
      <p>For model-specific cleaners and broader coverage of AI text elements, check out the{' '} <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link> category.</p>

      <h2>Understanding Character Encoding</h2>
      <p>Most text errors originate from encoding, and grasping how it works turns a set of confusing bugs into obvious ones.</p>
      <p><strong>Characters versus bytes.</strong> A character represents what users see. A byte denotes what computers store. ASCII once mapped these one-to-one, keeping the difference hidden for years. Unicode grants a distinct number, termed a code point, to every character in every writing system, while encoding dictates how those numbers convert into bytes.</p>
      <p><strong>UTF-8 is the encoding to use.</strong> It stores ASCII characters in single bytes to keep English text light and backward compatible, while using two to four bytes for everything else. It now powers the vast majority of web data. Issues arise mainly when systems assume alternative encodings.</p>
      <p><strong>Mojibake represents the visible outcome of an encoding conflict.</strong> Whenever Latin-1 or Windows-1252 attempts to decode UTF-8 byte sequences, the individual parts of multi-byte glyphs are rendered in isolation, turning content into gibberish where a standard typographical apostrophe shifts into odd sequences of symbols. The source information typically remains safe; the rendering phase simply erred, allowing for clean restoration if identified early.</p>
      <p><strong>Replacement characters mean information was lost.</strong> A black diamond featuring a question mark, or a standard question mark where letters belong, shows that the system failed to render the character and inserted a placeholder instead. Unlike mojibake, this is generally permanent because the initial value vanished rather than being misread.</p>
      <p><strong>Normalization forms matter for comparison.</strong> Unicode often permits identical visual characters to be encoded in multiple ways. An accented e can exist as one precomposed code point or a basic e followed by a combining accent. Both look identical and neither is incorrect, yet their byte sequences differ, causing comparisons to fail and uniqueness checks to treat them as separate. Normalizing to NFC before saving or comparing solves this issue.</p>

      <h2>How Text Length Is Determined</h2>
      <p>String length is much less straightforward than it appears, and system discrepancies create genuine bugs.</p>
      <p><strong>Three distinct counts exist</strong> for identical text. Bytes, which storage and transmission rely on. Code points, which roughly equate to what Unicode views as a character. Grapheme clusters, which represent what a person sees as a single character.</p>
      <p>A standard letter counts as one for each. An emoji might equal one grapheme cluster, two UTF-16 code units in JavaScript, and four bytes in UTF-8. Emoji created using zero-width joiner sequences, like family or professional icons, span dozens of code points while appearing as a single symbol to readers. Flag emoji consist of regional indicator symbol pairs.</p>
      <p>This explains various ongoing challenges. A database column set to hold 255 characters might not reliably store 255 random Unicode characters because limits can be measured in bytes. Browser validation relying on string length properties can conflict with server-side checks counting bytes, letting input pass one test while failing the other. Furthermore, cutting text at fixed lengths can divide grapheme clusters, resulting in broken characters or emojis rendering as separate parts.</p>
      <p>The useful principle: when a restriction matters, discover what unit is counted instead of presuming it matches what you observe.</p>

      <h2>A Diagnostic Guide</h2>
      <p>Connecting symptoms to root causes, as the identical few issues cause most text errors.</p>
      <p><strong>Search returns nothing even though the text is clearly visible.</strong> An invisible character is hidden inside the string, or a non-breaking space sits where you typed a standard one.</p>
      <p><strong>The copied snippet lands carrying an unexpected typeface and hue.</strong> Accompanying rich text style properties were carried along during the action. Run it through a cleaning utility or insert it directly as unformatted plain text.</p>
      <p><strong>A line refuses to wrap and distorts the layout.</strong> A non-breaking space blocks the wrap. It remains invisible and looks identical to a regular space.</p>
      <p><strong>Character count exceeds the maximum even though the visible text is shorter.</strong> Invisible characters add to the total sum, which matters for meta descriptions and social media posts.</p>
      <p><strong>A CSV or JSON file fails during parsing at the initial position.</strong> A byte order mark sits at the beginning.</p>
      <p><strong>VLOOKUP fails on values that match.</strong> Leading or trailing whitespace exists in one of them.</p>
      <p><strong>Deduplication retains obvious duplicates.</strong> Variations in case, whitespace, or space type occur. Normalize prior to deduplicating.</p>
      <p><strong>A file appears completely modified within a diff tool.</strong> Line ending conventions differ between Windows and Unix systems.</p>
      <p><strong>Accented text fails to match despite appearing identical.</strong> Unicode normalization: the same character encoded in two separate ways. Normalize both sides to NFC prior to comparing, and the discrepancy vanishes. This impacts non-English text and copied web data most frequently.</p>

      <h2>Where Text Problems Come From</h2>
      <p>Knowing typical origins helps you predict what cleaning a specific piece of text will require.</p>
      <p><strong>PDFs present the biggest issue.</strong> A PDF retains glyph placements instead of flowing text, meaning copying recreates a plausible reading order that is often incorrect. Multi-column layouts intermix. Ligatures like fi and fl may copy as single characters that break search. Hyphens added for line breaks turn into literal hyphens mid-word. Headers and footers disrupt the main body. Text copied from a PDF almost always requires fixes.</p>
      <p><strong>Word processors retain formatting and autocorrect residue.</strong> Autocorrect transforms straight quotes into curly ones, hyphens into dashes, and applies capitalization rules, all appropriate in the document yet often wrong in the target location. Tracked changes and comments can emerge unexpectedly when content is copied.</p>
      <p><strong>Web pages incorporate markup and styling.</strong> Copying from a browser brings HTML structure, inline styles, and frequently non-breaking spaces used for layout. Content management systems re-encode this, sometimes double-encoding entities so an ampersand shows as its escaped version instead of the actual symbol.</p>
      <p><strong>Spreadsheets process values aggressively.</strong> Excel turns anything looking like a date into one, removes leading zeros from identifiers and postal codes, and shortens long numbers into scientific notation. These shifts happen immediately upon opening, prior to any manual actions, which explains why importing via data import pathways rather than double-clicking a CSV matters.</p>
      <p><strong>AI output bears its own unique traits.</strong> Smart quotes, frequent em dashes, occasional zero-width characters, and literal Markdown that the target destination will not render.</p>
      <p><strong>Messaging and email platforms reformat automatically.</strong> Line breaks appear at fixed widths, URLs become clickable links, and quoting introduces prefix characters that persist through copying.</p>

      <h2>Processing Large Amounts of Data</h2>
      <p>These utilities manage single sections effectively. When handling massive amounts of content, certain habits ensure the process stays dependable instead of repetitive.</p>
      <p><strong>Address issues at the origin whenever possible.</strong> Should every system export contain an identical blemish, adjusting the export configuration once beats sanitizing every single document. Numerous platforms provide a raw text or UTF-8 export choice that removes the issue completely.</p>
      <p><strong>Test the workflow on a specimen initially.</strong> Process a typical sample through the detector, determine precisely what actions are required and their sequence, then execute that routine. Realizing at document forty that a prior phase was incorrect proves costly.</p>
      <p><strong>Retain the source.</strong> Sanitization is inherently destructive, and users sometimes realize that a deleted element was actually important. Editing a duplicate is free and maintains the option to restart.</p>
      <p><strong>Check the target environment, not just the utility.</strong> Text appearing properly post-cleanup might still react strangely within the destination software. The final platform remains the sole definitive test, and validating a single record there prior to batch processing prevents duplicated effort.</p>
      <p><strong>Normalize before comparing anything.</strong> Whether you are diffing versions, matching records, or deduplicating, performing normalization first ensures the comparison is meaningful. Most perceived tool failures during comparison tasks stem from omitted normalization.</p>

      <h2>Related Tool Categories</h2>
      <p>To handle AI-focused sanitation between models, check out the{' '} <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>. For binary data, URL encoding, and Base64, visit the <Link href="/ai-tools/encoding-tools">encoding tools</Link>. For style, clarity, and grammar, explore the{' '} <Link href="/ai-tools/writing-tools">writing tools</Link>. For formatters, diffing, and regular expression testing, browse the <Link href="/ai-tools/developer-tools">developer tools</Link>. The complete{' '} <Link href="/ai-tools">tool directory</Link> features search functionality.</p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What purpose do text tools serve?',
    answer:
      'Those routine tasks that arise when transferring text between applications: modifying case, eliminating duplicate lines, stripping HTML, tallying words, standardizing whitespace, executing find and replace, and spotting hidden characters. These are the utilities you turn to when text behaves oddly and nothing on display explains the cause.',
  },
  {
    category: 'General',
    question: 'Do these text utilities cost money?',
    answer:
      'Yes. Every single utility in this category is free, requiring no account and carrying zero usage limits. They execute directly inside your web browser, allowing you to process as much text as your hardware can manage.',
  },
  {
    category: 'Privacy and Security',
    question: 'Does my content get uploaded during tool usage?',
    answer:
      'No. Every single utility in this category processes text entirely inside your browser via client-side JavaScript. Nothing ever gets logged, stored, or uploaded. You can verify this behavior by opening your browser developer tools, checking the Network tab, and confirming that no request transmits when utilizing a tool.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is it secure to handle sensitive files?',
    answer:
      'Yes. Because all processing happens client-side, sensitive material never departs your device. This is crucial here since these utilities frequently handle internal documents, client materials under NDA, and unpublished drafts that ought not be transmitted to any third party.',
  },
  {
    category: 'Technical',
    question: 'What defines a zero-width space?',
    answer:
      'A Unicode character (U+200B) possessing no visual mark and zero width, rendering it completely invisible. It still counts as a distinct character, fractures word boundaries, interferes with search and replace, and inflates character tallies. A zero-width space hidden inside a word causes searches for that word to fail while the text appears completely normal.',
  },
  {
    category: 'Technical',
    question: 'What is a non-breaking space and why does it create issues?',
    answer:
      'A character (U+00A0) that looks identical to a standard space yet prevents line breaking at that specific location and fails to match an ordinary space during comparisons. Because it remains visually indistinguishable, it persists through proofreading indefinitely, explaining both text refusing to wrap and searches bypassing visible matches.',
  },
  {
    category: 'Technical',
    question: 'Why does my CSV or JSON fail parsing at the zeroth position?',
    answer:
      'Almost certainly a byte order mark (U+FEFF) sitting right at the beginning of the file. It remains invisible, making the document look flawless in any editor, yet numerous parsers fail to anticipate it and break instantly. Eliminating hidden characters from the file\'s start fixes the issue.',
  },
  {
    category: 'Technical',
    question: 'Why does an identical file appear entirely modified within a diff?',
    answer:
      'Line ending conversion. Windows utilizes a carriage return followed by a line feed, whereas Unix, Linux, and modern macOS rely solely on a line feed. Modifying a document across two operating systems rewrites every line termination, causing a diff utility to flag every single line as altered even though no actual content differs.',
  },
  {
    category: 'Technical',
    question: 'Why does changing text case depend on the language?',
    answer:
      'Because capitalization rules vary across languages. Turkish features both dotted and dotless i characters, meaning naive uppercasing yields the incorrect letter, a well-known flaw in software presuming English standards. The German sharp s traditionally capitalizes into two letters, and the Greek final sigma alters its shape depending on its location.',
  },
  {
    category: 'Technical',
    question: 'Why does automated title case occasionally appear incorrect?',
    answer:
      'Because title case lacks a universal standard. AP style capitalizes words of four or more letters, whereas Chicago capitalizes principal words while lowercasing articles, prepositions, and coordinating conjunctions regardless of length. Both capitalize the initial and final word. A utility adhering to one standard will appear incorrect to anyone anticipating the other.',
  },
  {
    category: 'Usage',
    question: 'Why does find and replace miss matches that are visibly present?',
    answer:
      'Almost invariably due to a hidden character embedded within the string. A non-breaking space placed where you entered a standard space, or a zero-width character situated between two letters, renders the strings genuinely distinct despite looking identical. Execute the invisible character detector prior to assuming the utility is malfunctioning.',
  },
  {
    category: 'Usage',
    question: 'Why do word counts vary between different software applications?',
    answer:
      'Different applications make varying choices regarding hyphenated terms, numbers, contractions, and whether captions, footnotes, and headers are tallied. Hidden characters widen this discrepancy by fracturing word boundaries. Whenever a limit is enforced, verify what the enforcing system measures rather than relying blindly on another application\'s total.',
  },
  {
    category: 'Usage',
    question: 'Why do entries appear identical yet remain after deduplication?',
    answer:
      'Due to hidden differences like capitalization, extra spaces at either end, or non-breaking spaces replacing regular ones. Looking identical does not mean they match textually. Standardizing both case and spacing prior to deduplication yields significantly superior outcomes.',
  },
  {
    category: 'Usage',
    question: 'Why does VLOOKUP fail on values that clearly match?',
    answer:
      'Extra spaces at the beginning or end of a value, typically caused by manual typing or data imports. Exact-match formulas view trailing spaces as actual discrepancies, while the cells appear fine because those spaces cannot be seen. Clearing whitespace throughout the column fixes this issue.',
  },
  {
    category: 'Usage',
    question: 'Why does pasted text retain incorrect fonts and colors?',
    answer:
      'Rich text formatting accompanied the copied content, carrying its origin styling instead of inheriting the target format. Run a clean paste utility to eliminate the formatting beforehand, or insert as plain text via your software\'s unformatted-paste command.',
  },
  {
    category: 'Usage',
    question: 'Is it advisable to delete em dashes from my writing?',
    answer:
      'It relies entirely on where it is going. In published literature they are stylistically proper and ought to remain. Within programming code, CSV, JSON, or any ASCII-dependent environment they trigger actual errors. Furthermore, they serve as the clearest indicator of AI-generated content, since models deploy them far more often than humans naturally do.',
  },
  {
    category: 'Usage',
    question: 'Why is trailing whitespace important?',
    answer:
      'In programming it creates cluttered diffs where lines look modified despite no actual changes occurring, complicating code reviews and messing up blame histories. In datasets it breaks exact-match queries, since a final space turns an otherwise matching string into a unique value. The space remains hidden in both scenarios.',
  },
  {
    category: 'Detection and Limits',
    question: 'How do hidden characters find their way into my writing?',
    answer:
      'Through copying and pasting, nearly every time. Web content, PDFs, document editors, and AI responses all contain them, and copying transfers the underlying character data alongside the visible text. Once introduced, they persist unnoticed through every subsequent modification, paste, and save operation.',
  },
  {
    category: 'Detection and Limits',
    question: 'Am I able to view hidden characters using a standard text editor?',
    answer:
      'Not out of the box. Certain code editors can display them when whitespace-rendering or non-printable-character modes are turned on, but standard word processors and input fields offer no visual cues. This explains why a detector proves so valuable: it detects what is actually there instead of depending on your ability to spot it.',
  },
  {
    category: 'Detection and Limits',
    question: 'Does deleting hidden characters alter my written content?',
    answer:
      'No. These utilities eliminate characters that should not exist and clean up irregular spacing. Your terminology, phrasing, and message remain completely untouched. This differs from a rewriter or humanizer, which actively modifies the text itself.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my text display incorrectly after posting to a content management system or learning management system?',
    answer:
      'Numerous publishing platforms utilize older text engines that manage extended Unicode poorly, causing smart quotes and em dashes to render as question marks or diamond symbols with question marks. Standardizing punctuation to basic ASCII and stripping out hidden characters prior to upload prevents this.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why is my character count over the limit when the text appears brief?',
    answer:
      'Hidden characters add to the overall count. This frequently catches people out on strict input fields like meta descriptions, social media updates, and form submissions, where pasting from a styled document introduces characters you cannot see.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What is the difference between CRLF and LF line endings?',
    answer:
      'CRLF stands for carriage return plus line feed, utilized by Windows. LF represents line feed by itself, employed by Unix, Linux, and current macOS versions. Content transferred across different standards may display as a single continuous line, exhibit random symbols, or create double spacing, contingent upon the reading system.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between these and the AI cleanup tools?',
    answer:
      'These are universal utilities designed for any content from any origin. The AI cleanup tools focus on particular artifact patterns generated by various language models, featuring specialized sanitizers for ChatGPT, Gemini, Claude and others. While some overlap exists, the dedicated category provides a more comprehensive solution for AI text.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Which utility ought to be applied first when text acts unexpectedly?',
    answer:
      'The hidden character scanner. It examines without altering anything, showing you precisely what exists before running any transformation. Knowing the root cause keeps you from performing unnecessary cleanup actions while missing the crucial one.',
  },
  {
    category: 'Privacy and Security',
    question: 'Are deceptive or identical-looking symbols able to be exploited maliciously?',
    answer:
      'Yes. Certain Unicode symbols look identical to Latin characters while having distinct code points, allowing a Cyrillic letter to create a convincing replica domain or filename. Hidden characters can also bypass simple keyword filters. Finding what is truly there, rather than trusting visual output, serves as protection in both situations.',
  },
  {
    category: 'Technical',
    question: 'What is UTF-8 and for what reason is it significant?',
    answer:
      'UTF-8 is the encoding system mapping Unicode code points to bytes, utilizing one byte for ASCII symbols and two through four for everything else. It keeps English copy concise while supporting all writing systems, and it now powers the vast majority of web data. Almost all encoding issues stem from assuming an incorrect encoding.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'For what cause does shortening text occasionally fracture an emoji?',
    answer:
      'Because a strict length cut can divide a grapheme cluster. An emoji composed of multiple connected code points will display as separate elements or a corrupted symbol if the cut lands mid-sequence. Cutting at grapheme boundaries instead of raw length prevents this.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do HTML entities at times show up as literal text across my website?',
    answer:
      'Double encoding. The content was escaped once and subsequently escaped again by a content management platform, meaning the ampersand in the escape sequence was itself converted. The outcome shows the entity code rather than the intended character. Decoding once fixes the problem.',
  },
  {
    category: 'Technical',
    question: 'What constitutes mojibake and is it possible to restore it?',
    answer:
      'Mojibake is the result of an encoding conflict: UTF-8 bytes read as Latin-1 or Windows-1252, causing every byte of a multi-byte symbol to display independently so a curly apostrophe turns into strange symbols. The information is normally preserved and only the interpretation fails, meaning recovery is often possible once you spot the mismatch.',
  },
  {
    category: 'Technical',
    question: 'What is the implication of a black diamond question mark symbol?',
    answer:
      'It is a substitution symbol, showing the platform failed to display the original entirely and inserted a placeholder. Unlike mojibake, this is generally permanent, because the initial value was lost instead of misread. It typically indicates text traveled through a system with a more restrictive character set.',
  },
  {
    category: 'Technical',
    question: 'Why do two visually identical strings fail to match?',
    answer:
      'Usually Unicode normalization. The exact same visual character can be encoded in multiple ways: an accented e can be a single precomposed code point or a standard e combined with an accent. Both appear identical and neither is incorrect, yet the byte patterns vary, causing comparisons to fail. Normalizing to NFC prior to comparison resolves it.',
  },
  {
    category: 'Technical',
    question: 'For what reason does a single emoji measure as multiple characters?',
    answer:
      'Because bytes, code points, and grapheme clusters represent three distinct measurements. An emoji might be a single grapheme cluster viewed as one symbol by a user, two UTF-16 code units inside JavaScript, and four bytes via UTF-8. Emojis built from zero-width joiner sequences, like family icons, can span numerous code points.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does content copied out of a PDF turn into such a disaster?',
    answer:
      'A PDF preserves glyph locations rather than flowing text, meaning copying recreates a reading sequence that is frequently incorrect. Multi-column documents get mixed up, ligatures such as fi can copy as single characters disrupting search, hyphenation added for line wraps turns into literal hyphens mid-word, and headers break the main text.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does Excel alter my information upon opening a CSV file?',
    answer:
      'It alters values forcefully upon opening, prior to any user action. Anything resembling a date gets converted, leading zeros are removed from IDs and postcodes, and lengthy numbers convert to scientific notation. Importing via the Data tab instead of double-clicking allows you to define column types beforehand.',
  },
  {
    category: 'Advanced Workflow',
    question: 'In what way ought I to manage sanitizing a massive collection of documents?',
    answer:
      'Address the issue at the origin if the exact same flaw occurs in every export, since adjusting export parameters once beats cleaning every document. Otherwise, test your operational sequence on a typical sample first, preserve the source files, and check one output in the final environment prior to processing the remainder.',
  },
  {
    category: 'Advanced Workflow',
    question: 'In what sequence must I execute text cleaning procedures?',
    answer:
      'Scan first to understand what exists. Next, eliminate invisible characters, as this solves most problems. Afterward, normalize spacing. Then handle punctuation only if the target demands ASCII. Next, remove formatting or markup if necessary. Finally, verify by pasting directly into the actual environment instead of assuming.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What steps ensure a list is properly set up for dependable deduplication?',
    answer:
      'Normalize first before you compare. Clear hidden characters, trim leading and trailing spaces, condense any runs of internal spacing, and decide if case sensitivity matters. Only then should you run deduplication. Ignoring normalization is precisely why lists appearing spotless still show clear duplicates afterward.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How ought one to scrub spreadsheet info prior to conducting an analysis?',
    answer:
      'Wipe out leading and trailing whitespace across all text columns initially, because doing just that fixes most failed lookups. Eradicate hidden characters, which imports frequently bring in. Next, standardize case if your matching relies on text values. Executing this ahead of building formulas prevents you from debugging results that are wrong for invisible reasons.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
