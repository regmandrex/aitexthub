import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { TextReverserTool } from '@/components/tools/TextReverserTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 604800;
const toolSlug = 'text-reverser';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta(toolSlug);
}

const faqs: FaqItem[] = [
  {
    category: 'Basics',
    question: 'What does a text reverser do?',
    answer: `A text reverser flips text in one of three ways: reversing individual characters (turning "Hello" into "olleH"), reversing the order of words while keeping each word intact (turning "Hello World" into "World Hello"), or reversing the order of lines while keeping each line intact (turning a multi-line text so the last line appears first). Our free online text reverser provides all three modes with real-time output — as you type or paste text, the reversed version updates instantly in the right panel. The tool handles Unicode text correctly (including emoji, accented characters, and non-Latin scripts) because it uses JavaScript's Array.from() method, which splits text by Unicode characters rather than raw bytes, ensuring multi-byte characters are treated as single units rather than being split into corrupted fragments.`,
  },
  {
    category: 'Usage',
    question: 'How do I reverse text online?',
    answer: `To reverse text using our tool: (1) Select the reversal mode — "Reverse Characters" reverses every character in the entire text, "Reverse Words" reverses word order while keeping each word's letters in order, or "Reverse Lines" reverses line order while keeping each line intact. (2) Type or paste your text into the left input panel. (3) The reversed output appears instantly in the right panel — no button click required. (4) Copy the result using the Copy Output button. The tool works on text of any length. For character reversal, Unicode characters (including emoji like 🎉, accented letters like é, and Chinese/Japanese/Korean characters) are handled correctly. For word reversal, whitespace between words is treated as the separator. For line reversal, each newline creates a new line unit. All processing happens in your browser — no text is uploaded to any server.`,
  },
  {
    category: 'Usage',
    question: 'What is the difference between reversing characters, words, and lines?',
    answer: `The three reversal modes produce very different outputs from the same input. Character reversal (the most common request): every single character in the entire text is reversed. "Hello World" becomes "dlroW olleH" — the sentence reads completely backward including space position. This reverses letters within words AND reverses word order simultaneously. Word reversal: each word keeps its letter order, but the sequence of words is reversed. "Hello World" becomes "World Hello" — each word is spelled correctly but the sentence reads in reverse order. This is useful for reordering sentences or lists without scrambling individual words. Line reversal: each complete line remains intact (letters and words in their original order), but the order of lines is flipped. The last line moves to the top, the first line to the bottom. This is useful for reversing chronological logs, rearranging lists, or flipping multiline content that needs the order inverted without scrambling the content of each line.`,
  },
  {
    category: 'Use Cases',
    question: 'Why would someone want to reverse text?',
    answer: `Text reversal has many practical and creative applications. Mirror text for graphic design: reversed text creates a mirror-image effect commonly used in logos, watermarks, and artistic typography. Puzzle and game creation: reversed text is a simple obfuscation for fun puzzles, word games, and brain teasers. Code and algorithm practice: implementing a text reversal function is one of the most common programming exercises for demonstrating string manipulation, recursion, and algorithmic thinking. Palindrome checking: reversing a word and comparing it to the original tests if a word is a palindrome ("racecar" reversed is still "racecar"). Reversing sorted lists: if you have a list sorted in ascending order, reversing the lines gives descending order. Log analysis: reversing chronological log files so the most recent entries appear first. Reading text backward for fun or artistic effect. Decoding some encoding schemes where text is written right-to-left. Generating mirrored text for aesthetic content on social media.`,
  },
  {
    category: 'Use Cases',
    question: 'How can I use line reversal for log files and lists?',
    answer: `Line reversal is particularly useful for working with chronological data. Server logs, application logs, and system logs typically append new entries at the end, so the oldest entries are at the top and the most recent at the bottom. When troubleshooting an issue, you usually want to see the most recent log entries first. Reversing the lines puts the newest entries at the top, making it immediately visible without scrolling to the bottom. For command-line users, the tac command (the reverse of cat) on Linux performs this function: tac logfile.txt. On macOS: tail -r logfile.txt. With our online tool, paste the log content, select "Reverse Lines," and copy the reversed output. For sorted lists (alphabetical from A to Z), line reversal gives you the Z to A order without re-sorting. For ordered task lists or priority lists where you want to invert the priority order, line reversal is faster than manually reordering each item.`,
  },
  {
    category: 'Technical',
    question: 'How does the text reverser handle Unicode and emoji correctly?',
    answer: `Handling Unicode reversal correctly is trickier than it appears. JavaScript strings internally represent text as UTF-16 code units. Most common characters fit in one UTF-16 code unit, but emoji and some characters (like many Chinese characters, ancient scripts, and mathematical symbols in the Unicode Supplementary Multilingual Plane) require two code units called a "surrogate pair." If you split a string by code units and reverse, surrogate pairs get split and the reversed text contains corrupted characters. Our tool uses Array.from(text) to split the string, which correctly handles surrogate pairs — each emoji or multi-code-unit character is treated as a single element. Similarly, some characters have combining marks (like accented characters composed of a base letter + combining diacritic). Proper Unicode reversal should keep base characters with their combining marks. Our tool handles the common case correctly for emoji and supplementary characters, ensuring that 🎉, 中, and similar characters reverse correctly rather than producing the replacement character (□) or garbled output.`,
  },
  {
    category: 'Technical',
    question: 'What is a palindrome and how does text reversal help detect palindromes?',
    answer: `A palindrome is a word, phrase, or number that reads the same forward and backward, ignoring spaces, punctuation, and capitalization in the case of phrases. Simple word palindromes: racecar, kayak, level, radar, civic, noon, madam. Famous phrase palindromes: "A man, a plan, a canal: Panama", "Was it a car or a cat I saw?", "Never odd or even", "Able was I ere I saw Elba." To check if a word is a palindrome using our tool: type the word, select "Reverse Characters," and compare the reversed output to the original. If they match (case-insensitively), it is a palindrome. For phrase palindromes, the check requires removing spaces and punctuation first. Palindromes have fascinated mathematicians, linguists, and word puzzle enthusiasts for centuries. The word "palindrome" comes from the Greek palindromos, meaning "running back again." In programming, detecting palindromes is a classic interview question because it requires understanding string reversal, comparison, and character normalization.`,
  },
  {
    category: 'Technical',
    question: 'How do I reverse a string in JavaScript, Python, and other languages?',
    answer: `String reversal is a fundamental programming exercise in every language. JavaScript: [...str].reverse().join('') — spreading to array, reversing, joining. Using Array.from() is more Unicode-safe: Array.from(str).reverse().join(''). Python: str[::-1] — Python's slice notation with step -1 is the idiomatic approach. str is a string; slicing with -1 step reverses it. For proper Unicode handling with combining characters: ''.join(reversed(str)). Java: new StringBuilder(str).reverse().toString(). C#: new string(str.Reverse().ToArray()). Ruby: str.reverse. PHP: strrev($str). Go: func reverseString(s string) string { runes := []rune(s); for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 { runes[i], runes[j] = runes[j], runes[i] }; return string(runes) } — Go's rune type handles Unicode correctly. The Go approach (explicit swap loop) demonstrates the general algorithm: reverse is O(n) time, O(n) space if a new string is created, O(1) space if done in-place (possible in mutable byte arrays but not in immutable strings).`,
  },
  {
    category: 'Creative',
    question: 'How can I use text reversal for creative writing and art?',
    answer: `Text reversal has a long history in creative applications. Mirror writing (reversed text) has been used by artists to create visual intrigue — Leonardo da Vinci famously wrote his notebooks in mirror script (reversed Italian). Modern creatives use reversed text in graphic design for symmetrical compositions, logo concepts, and typography that reads differently from different perspectives. In music, retrograde (playing a melody backward) is a classical composition technique. Textual retrograde appears in experimental poetry — the poem reads differently forward and backward, creating two overlapping meanings. For digital art and social media aesthetics, mixing normal and reversed text creates visual interest. In game design and escape rooms, reversed text provides a simple but satisfying puzzle mechanic. Word reversal (reversing word order rather than letters) changes the rhetorical emphasis of a sentence — "You are who I love" vs "I love who you are" have different emotional weights even with the same words.`,
  },
  {
    category: 'Fun',
    question: 'What are some famous words and phrases that read the same backward?',
    answer: `Palindromes — words and phrases that read the same backward — are a rich area of wordplay. Single-word palindromes: racecar, kayak, level, radar, civic, noon, refer, rotator, tenet, repaper, reviver. Names that are palindromes: Hannah, Bob, Eve, Elle, Anna, Ada. Number palindromes: 121, 1331, 12321. Famous phrase palindromes (ignoring spaces and punctuation): "A man, a plan, a canal: Panama," "Was it a car or a cat I saw?" "Madam, I'm Adam," "Never odd or even," "Step on no pets," "Do geese see God?" "No lemon, no melon," "Murder for a jar of red rum," "Able was I ere I saw Elba" (attributed to Napoleon). The longest known meaningful palindrome is a composition by Dmitri Borgmann. Palindromes appear in many languages. Japanese and some other languages have their own palindrome traditions. Our text reverser is a quick tool to test whether any word or phrase is a palindrome — paste it, reverse the characters, and compare.`,
  },
  {
    category: 'Programming',
    question: 'Is reversing a string a common programming interview question?',
    answer: `Yes — string reversal is one of the most frequently asked beginner programming interview questions. It appears at companies of all sizes for entry-level roles and is often used to assess basic programming competency and knowledge of the language's standard library. Common interview problem variants: reverse a string in-place (without creating a new string — requires a mutable character array, not possible with immutable strings), reverse only the words in a sentence (our "Reverse Words" mode), reverse only the vowels of a string, check if a string is a palindrome (involves reversal), reverse each word individually while keeping word order (turn "Hello World" into "olleH dlroW"), and reverse a linked list (a different but related concept). The fundamental reversal (all characters backward) tests whether a candidate knows the language's idioms (Python's [::-1], JavaScript's .reverse(), etc.) and can implement the algorithm from scratch if needed. The word-reversal and more complex variants test algorithm design — typically split, process, rejoin approaches. Understanding when to use built-in methods vs. implementing from scratch is part of what interviewers evaluate.`,
  },
  {
    category: 'Practical',
    question: 'How do I reverse only the words in a sentence while keeping each word intact?',
    answer: `Word reversal keeps each word's letters in order but flips the sequence of words. Our "Reverse Words" mode does this automatically — paste your sentence and select that mode. Manually: split on whitespace (getting an array of words), reverse the array, and join back with spaces. In Python: ' '.join('Hello World'.split()[::-1]). In JavaScript: 'Hello World'.split(' ').reverse().join(' '). Edge cases to consider: multiple spaces between words — splitting on a single space preserves empty strings in the array, representing the extra spaces. Using split(/\s+/) (split on one or more whitespace characters) normalizes spacing but loses information about multiple spaces. Leading and trailing whitespace may create empty elements at the beginning or end of the split array. For precise whitespace preservation, use a more careful split approach. Our tool uses a regex split that handles multiple spaces gracefully. Real-world use: reordering sentence fragments in writing exercises, reversing ordered lists, creating "backward" sentences for language learning games, and algorithmic string manipulation practice.`,
  },
  {
    category: 'Practical',
    question: 'How do I reverse lines in a text file on Windows, Mac, and Linux?',
    answer: `For reversing line order in text files: Linux: tac filename.txt > reversed.txt — tac is cat spelled backward and is literally designed for this purpose, available on all standard Linux distributions. macOS: tail -r filename.txt > reversed.txt — macOS's tail command supports -r for reverse. Alternatively: awk '{lines[NR]=$0} END{for(i=NR;i>=1;i--) print lines[i]}' filename.txt. Windows PowerShell: Get-Content filename.txt | Sort-Object -Descending { $_ } — note this sorts alphabetically, not by original order. For true reversal: $content = Get-Content filename.txt; [Array]::Reverse($content); $content | Set-Content reversed.txt. Windows Command Prompt: no built-in command; use PowerShell or install a Unix-like tool (Git Bash, WSL). Python (cross-platform): lines = open('input.txt').readlines(); open('output.txt','w').writelines(reversed(lines)). For our browser tool: paste the text, select "Reverse Lines," copy the output, and save to file — no command line needed.`,
  },
  {
    category: 'Fun',
    question: 'What does "Hello World" look like reversed?',
    answer: `"Hello World" reversed in different modes: Character reversal: "dlroW olleH" — every character flipped, spaces included. The letter d, then l, then r, then o, then W, then space, then o, l, l, e, H. Word reversal: "World Hello" — the two words swap positions but each is spelled correctly. Line reversal (single line): produces no change — a single line reversed is itself (there is nothing to swap order with). Some other fun reversals: "racecar" reversed = "racecar" (palindrome). "stressed" reversed = "desserts" (a notable reversal pair). "live" reversed = "evil". "dog" reversed = "god". "pots" reversed = "stop". "star" reversed = "rats". "repaid" reversed = "diaper". "drawer" reversed = "reward". These coincidental reversal pairs (called "semordnilap" — "palindromes" spelled backward) are a form of wordplay appreciated by language enthusiasts. Our text reverser can help you discover new semordnilap pairs by reversing word lists.`,
  },
  {
    category: 'Arabic',
    question: 'How does text reversal work with right-to-left languages like Arabic and Hebrew?',
    answer: `Right-to-left (RTL) languages like Arabic and Hebrew add complexity to text reversal. These languages are stored in Unicode in logical order (the order characters are written/typed) but displayed with RTL directionality. The Unicode Bidirectional Algorithm handles the display, determining which direction to render each run of text. When you reverse Arabic or Hebrew text using a character-level reversal tool, you reverse the logical order of characters, which may produce text that looks correct in terms of directionality but changes the meaning (like reversing a word's letters in English). For Arabic: the script uses connected letterforms where the visual shape of each letter depends on its position (initial, medial, final, isolated). Reversing Arabic text character by character may produce logically reversed text that renders differently due to these contextual forms. Our tool performs mathematical character reversal (Array.from() and reverse()) without special handling for RTL directionality or contextual letter shaping. For complex RTL text manipulation, dedicated Unicode-aware tools or libraries are more appropriate.`,
  },
  {
    category: 'SEO',
    question: 'Is reversed text readable by search engines?',
    answer: `Search engines generally handle reversed text differently from normal text. Google's crawlers can technically read reversed text — it is standard Unicode — but do not interpret reversed text as equivalent to its unreversed form. Reversed text like "olleH dlroW" is not semantically related to "Hello World" from a search engine's perspective. This means: using reversed text in page content does not help with SEO for those terms, search engines will not rank a page for reversed text keywords the same as forward text keywords, and using reversed text as a cloaking technique (showing different content to search engines vs. users) violates Google's guidelines. From an SEO perspective, reversed text is best used for decorative purposes, creative design, or puzzle mechanics — not as a technique to manipulate rankings. If you need text to be both decorative (reversed) and SEO-friendly (readable), use CSS transform: scaleX(-1) to visually mirror the text while keeping the source text readable by both users (via the visual mirror) and search engines (which read the source code).`,
  },
  {
    category: 'Tools',
    question: 'What other text transformation tools are available on this site?',
    answer: `We offer a comprehensive set of text manipulation tools alongside the text reverser. ROT13 Encoder: apply the classic ROT13 and ROT47 letter-substitution ciphers for light obfuscation. Unicode Text Converter: transform text into stylized Unicode variants — bold, italic, script, Fraktur, double-struck, small caps. String Length Calculator: analyze text for character count, word count, byte size, sentence count, paragraph count, and character frequency. Sort Lines: sort text lines alphabetically (ascending or descending), by length, or randomly. Word Frequency Counter: count how often each word appears in a text, ranked by frequency. Case Converter: switch text between uppercase, lowercase, title case, camel case, snake case, and kebab case. Text Diff: compare two texts and highlight additions and removals. Slug Generator: convert text to URL-friendly slugs. All tools are browser-based, free, and require no account or installation.`,
  },
  {
    category: 'Practical',
    question: 'Can I reverse text to create mirror writing like Leonardo da Vinci?',
    answer: `Yes — character-level text reversal creates mirror writing, the writing style Leonardo da Vinci used for his notebooks. Leonardo wrote from right to left, and each individual letter was also mirrored, so the text could only be read by holding the page to a mirror. To recreate this effect digitally: type your text in normal left-to-right format, use our "Reverse Characters" mode to get the character-reversed version. For a complete mirror effect, you would also need to mirror each individual character's shape — our tool reverses character order but the characters themselves remain in their standard orientation. For true Leonardo-style mirror writing where individual letters are also flipped, you would need to: use CSS transform: scaleX(-1) on the text element, display the character-reversed text with that CSS applied, or use a Unicode font that includes pre-mirrored letter shapes. Some Unicode blocks contain mirrored variants of Latin letters, but coverage is not complete. For artistic graphic design applications, a vector graphics program (Illustrator, Inkscape) with flip-horizontal transformation on individual letterforms achieves the most authentic mirror writing effect.`,
  },
  {
    category: 'Use Cases',
    question: 'How do I reverse lines in a text file to put the last line first?',
    answer: `Reversing line order — putting the last line first — is useful for log files (most recent entries first), chronological data, or reversing a numbered list. Our "Reverse Lines" mode does this instantly: paste your multi-line text, select Reverse Lines, and the output has lines in the opposite order. For large files or automation, command-line tools are more efficient. On Linux/macOS: tac filename.txt outputs lines in reverse order (tac is cat spelled backward). On macOS alternatively: tail -r filename.txt. On Windows PowerShell: (Get-Content file.txt) [::−1] | Set-Content reversed.txt. In Python: lines = open('file.txt').readlines(); open('reversed.txt', 'w').writelines(reversed(lines)). Common use cases: log analysis (most recent first without rerunning the service), LIFO data processing (last in, first out), reversing numbered lists (100 down to 1), undoing a sort operation. The reverse-lines operation is also a common coding interview problem — implement a solution that handles empty lines, trailing newlines, and files with no newline on the last line.`,
  },
  {
    category: 'Use Cases',
    question: 'What are practical uses for reversing word order in a sentence?',
    answer: `Word reversal — reversing the order of words while keeping each word's characters intact — has practical applications beyond novelty. Writing and editing: pasting a sentence with reversed word order forces your brain to reread familiar content with fresh eyes, helping you spot structural issues without pattern-matching to what you intended. Content creation: generating creative wordplay, reversing song lyrics for creative exercises, or producing reversed word order for stylistic effect in poetry. Data processing: word reversal is a classic coding interview problem (reverse words in a sentence) and appears frequently in algorithm practice. A correct solution must handle leading/trailing whitespace and multiple consecutive spaces. Palindrome detection: check if a phrase reads the same at the word level forward and backward — "First ladies rule the State and state the rule ladies first" is a word-level palindrome. Game and puzzle creation: reversed word order creates puzzles where readers must un-reverse to find the original message. Social media: mildly cryptic posts where readers enjoy working out the intended order.`,
  },
  {
    category: 'Technical',
    question: 'How does text reversal interact with Unicode emoji and combining characters?',
    answer: `Unicode text reversal is deceptively complex because not all visible characters are single code points. Simple reversal using JavaScript's .split('').reverse().join('') fails for several Unicode categories. Supplementary characters (emoji, rare CJK): characters above U+FFFF are stored as surrogate pairs in JavaScript (two UTF-16 code units). Naive reversal breaks the pair. Fix: use Array.from(str).reverse().join('') — Array.from() splits on code points, not UTF-16 code units. Emoji with skin tone modifiers: the thumbs-up with medium-dark skin (👍🏾) is two code points — base emoji (U+1F44D) plus a skin tone modifier (U+1F3FE). Reversing at code-point level would put the modifier first, breaking the sequence. Zero-width joiners (ZWJ): complex family emoji like 👨‍👩‍👧 combine multiple emoji via U+200D. Code-point reversal separates the ZWJ sequences. Combining diacritics: letters with accents can be stored as base letter + combining diacritic mark (two code points). Reversing code points separates them. Our reverser handles standard ASCII and most emoji correctly. For complex grapheme cluster sequences, the results may vary.`,
  },
  {
    category: 'Use Cases',
    question: 'Can reversing text help with proofreading and finding spelling errors?',
    answer: `Yes — reversing text for proofreading is a genuine technique used by professional editors and copywriters. The problem with standard proofreading is that your brain autocorrects familiar text. When you read a passage you wrote, your visual system pattern-matches to the intended words rather than what is actually on the page — a well-documented phenomenon where readers skip over typos because their brain fills in the correct version. Techniques using text reversal: (1) Read line by line from bottom to top (line reversal): use our Reverse Lines mode so the last line appears first. Reading paragraphs in reverse order breaks narrative flow, forcing you to evaluate each sentence independently. (2) Word-by-word backward scan: reverse word order and read each word as a standalone unit, which makes it impossible to skim. Spelling errors that your brain bypassed when reading forward become obvious when words appear in a random-seeming order. (3) Character reversal for very short strings: reverse a word's characters and look at the result — a misspelled word often looks obviously wrong in its reversed form. Professional tip: reverse-line proofreading is most effective for catching: repeated words ("the the"), transposed words, incorrect sentence-ending punctuation, and missing words at line endings.`,
  },
];

const writeUp = (
  <section className="prose prose-slate max-w-none">
    <h2>What Is a Text Reverser?</h2>
    <p>
      A text reverser is a tool that flips text in one of three ways: reversing individual characters (backward spelling), reversing word order while keeping each word intact, or reversing line order while keeping each line intact. Our free online text reverser provides all three modes with real-time output — type or paste text and the reversed version updates instantly.
    </p>
    <p>
      Text reversal has applications in creative writing, programming practice, palindrome detection, puzzle creation, log file analysis, and list reordering. Our tool handles Unicode text correctly, including emoji, accented characters, and non-Latin scripts — using Array.from() to split by Unicode characters rather than raw bytes, ensuring multi-byte characters like 🎉 and 中 are treated as single units.
    </p>

    <h2>Three Reversal Modes Explained</h2>
    <p>
      Character reversal flips every single character in the entire text. "Hello World" becomes "dlroW olleH" — letters and word order both reversed simultaneously. This is the most common form of text reversal, used for backward spelling, palindrome checking, mirror writing effects, and simple obfuscation puzzles.
    </p>
    <p>
      Word reversal keeps each word's letters in their original order but flips the sequence of words. "Hello World" becomes "World Hello." This is useful for sentence reordering, reversing ordered lists, and word-order grammar exercises in language learning. The whitespace structure between words is preserved.
    </p>
    <p>
      Line reversal keeps each complete line intact but flips the order of lines. The last line becomes the first, the first becomes the last. This is particularly useful for log file analysis (putting the most recent entries first), reversing chronological data, and inverting the order of multi-line lists.
    </p>

    <h2>Palindromes and Text Reversal</h2>
    <p>
      A palindrome reads the same forward and backward. Detecting palindromes is one of the most direct applications of text reversal. Simple palindromes: racecar, kayak, level, radar, civic, noon. The approach: reverse the text and compare to the original. If they match (case-insensitively, ignoring spaces and punctuation for phrase palindromes), it is a palindrome.
    </p>
    <p>
      Palindrome detection is also a classic programming interview question. The naive implementation involves string reversal and comparison. More efficient implementations use a two-pointer approach — one pointer starting from each end, moving inward, comparing characters until the pointers meet or a mismatch is found. Both approaches are O(n) time. Understanding the reversal approach first makes the optimized approach easier to grasp.
    </p>
    <p>
      Beyond single words, phrase palindromes require normalization first (removing spaces and punctuation, converting to lowercase). Famous examples: "A man, a plan, a canal: Panama" — normalize to "amanaplanacanalpanama," reverse to "amanaplanacanalpanama" — same. These palindromes are linguistic curiosities that have delighted language enthusiasts for centuries.
    </p>

    <h2>Text Reversal in Programming</h2>
    <p>
      String reversal is among the most fundamental programming exercises, appearing in coding interviews, computer science curricula, and algorithm textbooks. Every major programming language has an idiomatic approach: Python's slice notation str[::-1], JavaScript's array spread-reverse-join pattern, Java's StringBuilder.reverse(), Ruby's string.reverse. Implementing string reversal from scratch demonstrates understanding of loops, character arrays, index manipulation, and complexity analysis.
    </p>
    <p>
      More advanced reversal problems require creative thinking: reverse only the vowels of a string, reverse words individually while keeping word order, reverse a linked list (conceptually similar but structurally different), or reverse a string in-place without allocating new memory (requiring a mutable character array). These variations appear in technical interviews at all levels and test both algorithmic reasoning and language knowledge.
    </p>

    <h2>Unicode Handling in Text Reversal</h2>
    <p>
      Text reversal with Unicode characters requires care. JavaScript strings are sequences of UTF-16 code units. Most characters occupy one code unit, but emoji, many mathematical symbols, and characters from certain Unicode planes occupy two code units (a surrogate pair). Naively splitting a string by code unit and reversing will corrupt surrogate pairs.
    </p>
    <p>
      The correct approach: use Array.from() or the string spread operator ([...str]) to split by Unicode code points rather than code units. This treats each emoji and supplementary character as a single element during reversal. Our tool uses this approach, ensuring that 🎉 reversed produces 🎉 (unchanged), not two corrupted surrogate characters. This is a subtle but important implementation detail that separates correct Unicode-aware text processing from naive byte-level operations.
    </p>

    <h2>Creative Applications of Text Reversal</h2>
    <p>
      Mirror writing — text that reads correctly when reflected in a mirror — has a rich creative history. Leonardo da Vinci wrote his notebooks in mirror script (right-to-left, with individual letters also mirrored). Text reversal recreates part of this effect digitally. Graphic designers use reversed text for logo concepts, watermarks, and typographic compositions where symmetry and visual surprise are the goals.
    </p>
    <p>
      In music, retrograde (playing a melody backward) is a classical composition technique used by Bach, Mozart, and modern composers. The textual equivalent appears in experimental poetry and literature — the content reads differently forward and backward, creating layered meaning. In games and escape rooms, reversed text is a satisfying puzzle mechanic that players recognize and appreciate without it being frustratingly obscure.
    </p>

    <h2>Log File Analysis with Line Reversal</h2>
    <p>
      System administrators and developers frequently need to view log files in reverse chronological order. Most logging systems append new entries to the end of files, making recent events appear at the bottom of long log files. Scrolling to the bottom for every log review is tedious. Line reversal puts the most recent events at the top, where they are immediately visible.
    </p>
    <p>
      The Unix tac command (cat reversed) was created specifically for this purpose. On macOS, tail -r serves the same function. For web-based log viewing or when working with pasted log excerpts, our online line reverser provides the same functionality without command-line access. Paste the log text, select "Reverse Lines," and copy the reversed output for analysis.
    </p>

    <h2>Word Order and Sentence Reordering</h2>
    <p>
      Reversing word order while keeping individual words intact creates interesting effects. "I love you" becomes "you love I" — grammatically different but with the same semantic elements. This operation is useful in language learning exercises (practicing different word orders across languages), rhetorical analysis (studying how word order affects emphasis and meaning), and creative writing exercises (discovering unexpected phrasing by reversing the order of a sentence).
    </p>
    <p>
      For algorithmic use, word reversal is a building block for more complex string operations. A common interview question: reverse the words in a sentence while keeping character order within each word. The algorithm: trim whitespace, split on whitespace (handling multiple spaces), reverse the word array, join with single spaces. This requires careful handling of leading/trailing whitespace and multiple consecutive spaces.
    </p>

    <h2>Semordnilap: Reverse Word Pairs</h2>
    <p>
      A semordnilap (the word "palindromes" spelled backward) is a word that spells a different valid word when reversed — not the same word (like a palindrome) but a different one. Famous examples: "stressed" reverses to "desserts," "dog" reverses to "god," "star" reverses to "rats," "live" reverses to "evil," "pots" reverses to "stop," "drawer" reverses to "reward," "repaid" reverses to "diaper," "deliver" reverses to "reviled." These coincidental reverse pairs delight word puzzle enthusiasts and linguists. Using our text reverser to explore word lists can help you discover new semordnilap pairs — try reversing common words and see what you get.
    </p>

    <h2>Right-to-Left Language Considerations</h2>
    <p>
      Arabic, Hebrew, Persian, Urdu, and other right-to-left languages store text in logical order (the order characters are typed) while the Unicode Bidirectional Algorithm determines visual rendering direction. Reversing RTL text with a character-level tool reverses the logical character order, which changes how the text is interpreted and rendered. For Arabic specifically, individual letters have different visual forms based on their position in a word (connected letterforms), so character-level reversal may produce text with incorrect letter forms.
    </p>
    <p>
      Our tool performs straightforward Unicode character reversal without special handling for RTL directionality or contextual shaping. For casual use with RTL text, this may produce unexpected results. For serious RTL text manipulation, use Unicode-aware libraries that understand the Bidirectional Algorithm and contextual letter shaping (like ICU — International Components for Unicode).
    </p>

    <h2>Practical Command-Line Alternatives</h2>
    <p>
      For users who prefer command-line tools or need to automate text reversal: Python's str[::-1] reverses any string in one expression. The Unix rev command reverses each line character by character. The tac command reverses line order. sed -n '1!G;h;$p' provides line reversal in sed (though tac is simpler). For Windows PowerShell: -join ([char[]]"Hello" | Select-Object -Last ([char[]]"Hello").Length) reverses a string. These command-line approaches enable scripting and automation that browser-based tools cannot provide.
    </p>
    <p>
      Our browser tool is optimized for interactive, one-off use — paste text, get reversed output, copy. Command-line tools are better for automation, scripting large files, and integration into data pipelines. Both serve legitimate use cases; the right choice depends on your workflow and technical context.
    </p>

    <h2>Text Reversal in Data Processing and Analytics</h2>
    <p>
      Text reversal finds unexpected applications in data processing, analytics, and database operations where string manipulation is a core tool. Understanding when reversal is the right approach versus alternatives helps developers and analysts choose efficiently.
    </p>
    <p>
      Suffix searching in databases: some databases lack native suffix search (finding strings that end with a given pattern). A common workaround stores the reversed version of the string in a separate indexed column, then searches for the reverse of the suffix using a prefix search (which databases support efficiently via B-tree indexes). For example, to find all email addresses ending in "@gmail.com", store reversed emails in an index column and search for "moc.liamg@" as a prefix. Text reversal is the preprocessing step that enables this optimization.
    </p>
    <p>
      Trie data structures and reversed keys: a trie (prefix tree) is efficient for prefix lookups. To enable suffix lookups, insert reversed strings. This technique is used in autocomplete systems that need to complete from the end of a word (common in domain name systems and certain search applications). Reversing the keys before insertion into the trie is the preprocessing step.
    </p>
    <p>
      Log file processing: application logs typically append new entries at the bottom of the file. When diagnosing a recent issue, you want the most recent log entries first. Line reversal (showing the last line first) is the equivalent of tail -r on Unix — getting recent entries without reading through thousands of older lines. For very large log files, reading from the end with a seek operation is more efficient, but for moderate-sized logs, our line reversal mode provides a quick browser-based solution.
    </p>
    <p>
      CSV data reversal: when a CSV dataset is in chronological order (oldest first) and you need to process it newest-first, line reversal preserves the header row if you move it separately. The typical workflow: separate the header row, reverse the remaining data rows, prepend the header. Our line reversal reverses all lines including the header — for data files, manually move the header back to position 1 after reversing.
    </p>

    <h2>Word and Character Reversal in Different Writing Systems</h2>
    <p>
      Text reversal tools were designed primarily for left-to-right Latin text, but the world's writing systems include bidirectional, right-to-left, and vertical scripts. Understanding how text reversal interacts with these scripts helps you apply the tool correctly across different language contexts.
    </p>
    <p>
      Right-to-left scripts (Arabic, Hebrew, Persian, Urdu): Unicode's bidirectional algorithm handles the visual display of mixed left-to-right and right-to-left text. The underlying code points are stored in logical order (the order the text would be read), while the visual presentation may appear right-to-left. Character reversal of Arabic or Hebrew text reverses the code point order, which can disrupt the visual rendering — the reversed text may appear visually as forward text depending on how the renderer interprets the Unicode bidi properties. For right-to-left text, reversal is semantically different from reversal of Latin text.
    </p>
    <p>
      CJK (Chinese, Japanese, Korean): these scripts are inherently ambiguous in direction — CJK can be written left-to-right (modern horizontal) or top-to-bottom (traditional vertical). Horizontal CJK character reversal works as expected for individual characters (each character is standalone), but word-level reversal is less meaningful since CJK does not use spaces to delimit words. Japanese mixes hiragana, katakana, kanji, and Latin characters — reversal of mixed text produces character-level reversal that may scramble the mixing.
    </p>
    <p>
      Vertical text: some CJK text is written top-to-bottom in vertical columns. Browser CSS can render vertical text with writing-mode: vertical-rl. In terms of code points, vertical text is stored identically to horizontal text — reversal of vertical text code points reverses reading order within the column.
    </p>
    <p>
      Practical guidance: for English and other Latin-script text, our tool works perfectly for all three reversal modes. For right-to-left scripts, character reversal may produce unexpected visual results. For CJK, character reversal produces a visually reversed sequence of individual characters. For all scripts, line reversal (reversing line order) is script-agnostic and works consistently regardless of the writing system.
    </p>

    <h2>Text Reversal Puzzles, Games, and Creative Writing</h2>
    <p>
      Text reversal has a rich tradition in wordplay, puzzles, and creative writing. Understanding the landscape of text-reversal-based games and puzzles helps you use our tool creatively.
    </p>
    <p>
      Semordnilap puzzles: a semordnilap (a coined reverse of "palindromes") is a word that spells a different valid word when reversed. Collecting and constructing semordnilap word pairs is a traditional wordplay hobby. Notable pairs: "stressed" ↔ "desserts", "dog" ↔ "god", "live" ↔ "evil", "star" ↔ "rats", "time" ↔ "emit", "doom" ↔ "mood", "repaid" ↔ "diaper", "reward" ↔ "drawer", "parts" ↔ "strap", "snap" ↔ "pans". Our character reversal mode lets you quickly check any word for semordnilap status.
    </p>
    <p>
      Palindrome construction: writers deliberately construct palindromic sentences for literary effect. Famous examples: "A man, a plan, a canal — Panama", "Was it a car or a cat I saw?", "Never odd or even", "Madam, I'm Adam." Our reverser can verify a palindrome candidate by reversing it and checking if it matches the original (ignoring spaces and punctuation). Paste the cleaned text (remove spaces and punctuation), reverse, and compare — if identical, it is a palindrome.
    </p>
    <p>
      Escape room puzzle design: text reversal is a staple of escape room puzzle design. Reversed text is one of the simplest transformations that looks mysterious to uninitiated solvers. Common escape room approaches: a clue written backward on a prop (players must hold it to a mirror or type it reversed to decode), reversed Morse code (the dots and dashes are presented in reverse sequence), reversed word order in a cipher instruction set. Our tool is useful for escape room designers creating reversed clues — type the plain clue, reverse it, use the reversed version in the room.
    </p>
    <p>
      Reverse poetry: a subgenre of poetry called "reverse poetry" (also called "paraprosdokian poetry") creates works where reversing the line order dramatically changes the meaning or sentiment. The poem reads pessimistically forward and optimistically in reverse (or vice versa). Creating reverse poetry: write two poems with complementary sentiments, interleave them line by line, and verify that reversing the line order with our tool produces the intended alternate reading. This technique has been used in viral social media posts and performance poetry.
    </p>
    <p>
      Back-masked audio references in text: backmasking is the audio technique of recording messages that are only intelligible when played backward. Some artists have referenced backmasking in text — writing lyrics that have meaning both forward and in reversed word order. Analyzing these text patterns uses the same word-reversal operation our tool provides.
    </p>

    <h2>Text Reversal in String Manipulation Coding Interviews</h2>
    <p>
      "Reverse a string" is one of the most common coding interview questions, appearing in technical screenings at companies ranging from startups to FAANG. Understanding the problem deeply — including edge cases and efficient implementations — is valuable for interview preparation.
    </p>
    <p>
      The naive approach: <code>str.split('').reverse().join('')</code> in JavaScript. Simple but fails for strings containing emoji or other characters above Unicode U+FFFF (surrogate pairs in JavaScript's UTF-16 encoding). The correct approach: <code>Array.from(str).reverse().join('')</code> — Array.from() splits on Unicode code points rather than UTF-16 code units.
    </p>
    <p>
      In-place reversal without extra array: for languages with mutable strings (C, C++, Java char arrays), use two-pointer approach: left pointer starts at 0, right pointer at length-1, swap characters and move pointers inward until they meet. Time complexity O(n), space complexity O(1). Cleaner than creating a new string and demonstrates memory awareness.
    </p>
    <p>
      "Reverse words in a string" variant: this is the harder interview question. Given "  hello world  ", return "world hello" — reverse word order, remove leading/trailing spaces, reduce multiple spaces between words to single spaces. The steps: trim, split on whitespace (handling multiple consecutive spaces), filter empty strings, reverse the array, join with single spaces. Edge cases: all spaces, single word, trailing spaces — each must be handled correctly for full marks.
    </p>
    <p>
      "Valid palindrome" interview question: given a string, determine if it is a palindrome considering only alphanumeric characters and ignoring case. Approach: use two pointers, skip non-alphanumeric characters, compare characters case-insensitively. Reverse-and-compare approach: clean the string, reverse, compare — simpler to code but uses O(n) extra space. Both are acceptable solutions; the two-pointer approach demonstrates space optimization.
    </p>
    <p>
      Our text reverser is useful during interview prep: generate reversed test cases instantly to verify your implementation, test edge cases (empty string, single character, palindromes, strings with spaces), and compare your implementation's output against the tool's output for validation. Having a reference implementation helps you spot differences quickly during practice sessions.
    </p>

    <h2>Reverse Engineering Text Transformations with Reversal</h2>
    <p>
      Text reversal is sometimes used as one step in reverse-engineering unknown text transformations — working backward from an encoded output to deduce the encoding algorithm. Understanding how reversal fits into this analysis process is useful for developers, security researchers, and puzzle solvers.
    </p>
    <p>
      When you encounter obfuscated text of unknown encoding, a systematic process helps identify the encoding: first, check if it is a simple Caesar cipher by applying ROT13 or trying other rotations. Second, check if the text is base64 by looking for the characteristic character set and padding. Third, try reversing the entire string — if the reversed text is readable or more recognizable, reversal was part of the encoding. Fourth, try reversing words without reversing characters (word-order reversal). Fifth, try reversing lines if the text is multi-line.
    </p>
    <p>
      Multi-layer encoding schemes often include reversal as one layer: base64 encode, then reverse the base64 string, then apply ROT13 — producing output that looks like three separate encodings applied. Decoding requires: apply ROT13 (reverse ROT13 = same operation), then reverse the string, then base64 decode. Our text reverser is the tool for the reversal step in this decode chain.
    </p>
    <p>
      CTF challenge analysis: Capture the Flag cybersecurity competitions frequently use multi-layer encoding where reversal is one layer. A typical CTF string manipulation challenge presents a ciphertext and challenges participants to identify and reverse the encoding layers. Tools used: our text reverser for the reversal layers, a base64 decoder, a hex decoder, and a ROT13 tool — often applied in sequence until the flag emerges.
    </p>

    <h2>Text Reversal for Accessibility and Learning Differences</h2>
    <p>
      Text reversal tools have some specialized applications in accessibility contexts and learning difference support that are less obvious than the standard use cases.
    </p>
    <p>
      Dyslexia awareness demonstrations: some dyslexia simulation tools work by reversing or scrambling text to give neurotypical readers an experience that approximates text perception difficulties. While actual dyslexia is more complex than simple letter reversal (it involves challenges with phonological processing, not primarily visual reversal), the reversal simulation creates empathy and awareness in non-dyslexic audiences. Our tool can generate reversed text for these demonstration purposes.
    </p>
    <p>
      Mirror writing therapy: occupational therapists working with patients recovering from stroke or brain injury sometimes use mirror writing exercises (writing text backward) as part of hand-eye coordination and fine motor rehabilitation. Text reversal tools help therapists generate target texts for patients to copy in mirror writing format.
    </p>
    <p>
      Reading fluency and decoding exercises: educational technologists have used text reversal as a phonological awareness exercise — ask early readers to reverse a simple word by saying each letter backward, building phoneme awareness. "Dog" reversed is "god" — the exercise requires the child to identify each phoneme and mentally rearrange them, which strengthens the phonological awareness that underlies reading fluency.
    </p>
    <p>
      Vision rehabilitation: for patients with certain visual field defects (hemianopia — loss of vision in half the visual field), text reversal and repositioning exercises are used to train the patient to use their remaining visual field more effectively. The therapy often involves reading text arranged in unusual orientations and orders to build visual scanning strategies.
    </p>

    <h2>Creative Writing Applications for Text Reversal</h2>
    <p>
      Writers across genres have found text reversal to be a useful creative tool — both for generating novel ideas and for producing specific stylistic effects that would be impossible through conventional writing.
    </p>
    <p>
      Character name generation: reversing common words or names produces distinctive character names with an uncanny familiarity. Writers have named characters using reversed words: Nevaeh (Heaven reversed — a popular name for fictional characters), Evol (Love reversed — used in dystopian fiction), Natas (Satan reversed — horror genre), Alucard (Dracula reversed — notably used in Hellsing anime). Our character reversal mode instantly generates these reversed versions for any word you consider.
    </p>
    <p>
      Science fiction and fantasy world-building: reversed names work particularly well for alien languages, fantasy realms, and science fiction settings where the name needs to sound vaguely familiar yet distinctly different. A planet called "Htrae" (Earth reversed), a city called "Nodol" (London reversed), or a character named "Senoj" (Jones reversed) creates a sense of a mirror universe or parallel dimension without being overtly obvious.
    </p>
    <p>
      Reversed dialogue in dream sequences: literary works set in dream states or surreal environments sometimes feature reversed dialogue to signal the non-ordinary nature of the scene. The reader encounters the reversed text as dialogue, understands it is intentionally encoded, and decodes it — the decode act itself becomes part of the reading experience, mimicking the disorientation of dreams.
    </p>
    <p>
      Reverse chronology storytelling: some narratives are told in reverse chronological order (the film Memento, the novel Time's Arrow). Text reversal of scene descriptions, applying line reversal to chapter summaries, or reversing key phrases can be a drafting technique for authors planning reverse-chronology narratives — experiencing the text in reverse order reveals whether the story makes sense backward as well as forward.
    </p>

    <h2>Comparing Text Reversal Tools: Browser-Based vs Desktop vs CLI</h2>
    <p>
      Text reversal is a simple enough operation that many tools provide it, each with different strengths depending on your context and workflow.
    </p>
    <p>
      Browser-based tools (like ours): zero installation, accessible from any device, handle Unicode correctly in modern implementations, provide immediate visual output, and include multiple reversal modes in one interface. Best for: one-off reversals, checking palindromes, quick copy-paste workflows, users on shared or locked-down computers. Limitation: requires a browser and internet access (though the JavaScript can run offline once the page is cached).
    </p>
    <p>
      Command-line tools: the Unix rev command reverses character order per line, tac reverses line order, and Python's str[::-1] reverses any string in an expression. These integrate into shell scripts and data pipelines, handle arbitrarily large files, and can be chained with other tools (rev file.txt | grep pattern). Best for: automation, large file processing, developer workflows, integration into scripts and pipelines. Limitation: requires a terminal and knowledge of the tool syntax.
    </p>
    <p>
      Text editors with built-in reversal: some text editors (Vim, Emacs, Sublime Text with plugins, VS Code with extensions) support text reversal via commands or macros. In Vim: select text in visual mode, then use <code>!rev</code> to pipe through the rev command. In VS Code: the "Reverse" extension adds a command palette entry. Best for: developers who live in their editor and want reversal without leaving their workflow.
    </p>
    <p>
      Desktop applications: some word processors and text editing applications include text transformation features that may include reversal. Microsoft Word does not have built-in text reversal, but macros (VBA) can implement it. LibreOffice Writer macros can reverse selected text. These are rarely the most efficient approach for simple text reversal.
    </p>
    <p>
      For most users, our browser-based tool provides the optimal combination of accessibility, features, and Unicode correctness with no setup required. For power users with automation needs, the command-line tools — particularly the shell alias approach — provide the fastest workflow once configured.
    </p>

    <h2>Implementing All Three Reversal Modes in Code</h2>
    <p>
      Understanding how each of the three reversal modes works at the code level helps developers implement the same functionality in their own applications and solidifies understanding of the underlying string operations.
    </p>
    <p>
      Character reversal: the most common interpretation of "reverse a string." In JavaScript: <code>Array.from(str).reverse().join('')</code> — using Array.from() ensures correct handling of emoji and other supplementary Unicode characters stored as surrogate pairs. In Python: <code>str[::-1]</code> — Python's slice notation with a step of -1 reverses any sequence. In Java: <code>new StringBuilder(str).reverse().toString()</code> — StringBuilder's built-in reverse handles supplementary characters correctly. In C#: <code>new string(str.Reverse().ToArray())</code> — LINQ's Reverse() on a string's character array.
    </p>
    <p>
      Word reversal: reverse the order of words while preserving individual word characters. In JavaScript: <code>str.trim().split(/\s+/).reverse().join(' ')</code> — trim removes leading/trailing whitespace, split on one or more whitespace characters handles multiple consecutive spaces, join with a single space normalizes spacing. In Python: <code>' '.join(str.split()[::-1])</code> — str.split() with no arguments handles multiple spaces automatically. Edge case: preserve original spacing — use <code>str.split(' ').reverse().join(' ')</code> if you want to maintain exact spacing, though this leaves artifacts if there were multiple consecutive spaces.
    </p>
    <p>
      Line reversal: reverse the order of lines while preserving each line's content. In JavaScript: <code>str.split('\n').reverse().join('\n')</code> — split on newline, reverse array, join with newline. Handle both CRLF and LF line endings: <code>str.split(/\r?\n/).reverse().join('\n')</code>. In Python: <code>'\n'.join(str.splitlines()[::-1])</code> — splitlines() handles all line ending variants (LF, CRLF, CR). In Bash: <code>tac filename.txt</code> or <code>tail -r filename.txt</code> on macOS. Preserve trailing newline if present: check if the original string ends with '\n' and add it back after reversal.
    </p>
    <p>
      Combining modes: word-within-line reversal (reverse words on each line but preserve line order): <code>str.split('\n').map(line =&gt; line.trim().split(/\s+/).reverse().join(' ')).join('\n')</code>. Character reversal within each word (keep word positions, reverse characters of each word): <code>str.split(/\s+/).map(word =&gt; Array.from(word).reverse().join('')).join(' ')</code>. These combinations are useful for more complex text transformation tasks and encode patterns.
    </p>

    <h2>Text Reversal in Machine Learning and NLP Preprocessing</h2>
    <p>
      Text reversal appears in some natural language processing (NLP) and machine learning contexts as a data augmentation, preprocessing, or analysis technique. While not as common as standard NLP operations, it has specific valid applications.
    </p>
    <p>
      Data augmentation for sequence models: in training recurrent neural networks (RNNs) and LSTM models for text classification, some researchers reverse the input sequence as a data augmentation technique — training on both forward and reversed versions of the same text increases the effective dataset size and can improve model robustness. This bidirectional training was partly superseded by bidirectional LSTM architectures (BiLSTM) and transformer models (which process text bidirectionally by design), but reversal augmentation remains valid for small datasets.
    </p>
    <p>
      Reversed language modeling: the GPT family of language models predicts the next token given all previous tokens (left-to-right language modeling). Some researchers train reversed language models — predicting the next token in the reversed text sequence. The resulting model can generate text right-to-left, which is useful for constrained generation tasks where the ending of the generated text is more constrained than the beginning (e.g., generating text that must end with a specific word).
    </p>
    <p>
      Palindrome detection as a baseline NLP task: palindrome detection — determining whether a string reads the same forward and backward — is a string processing task used as a baseline in NLP benchmarks and as an example in computational linguistics. The algorithm requires understanding of characters, code points, and preprocessing (normalizing case, removing spaces and punctuation). Our tool generates reversed versions of text, making it useful for building test datasets for palindrome detection algorithms.
    </p>
    <p>
      Text fingerprinting with reversal: some document similarity systems use reversed text features as part of their fingerprinting scheme. Taking N-grams (sequences of N characters) from both the forward and reversed text and hashing them provides a richer document fingerprint that catches both forward and backward substring matches — useful for detecting plagiarism in documents where copied text might be rearranged.
    </p>

    <h2>Historical Examples of Reversed Text in Literature and Art</h2>
    <p>
      Reversed text has a history stretching back centuries in art, literature, and code. Understanding these historical uses provides context for modern text reversal tools.
    </p>
    <p>
      Leonardo da Vinci's mirror writing: the most famous practitioner of consistent mirror writing in history. All of Leonardo's personal notebooks (approximately 13,000 pages) were written right-to-left with each letter mirrored — requiring a mirror to read conveniently. Theories about why: Leonardo was left-handed (and mirror writing is more natural for left-handed writers using ink, reducing smearing), he wanted to make casual reading of his notebooks difficult, or it was simply a habit he developed early and maintained consistently. Our character reversal gives the right-to-left ordering of Leonardo's writing (though not the individual letter mirroring).
    </p>
    <p>
      Lewis Carroll's "Through the Looking-Glass": the sequel to "Alice's Adventures in Wonderland" is structured around mirror reversal — the Looking-Glass world operates by reversed rules. Carroll embedded mirror-writing themes throughout: the poem "Jabberwocky" appears reversed in the text (requiring a mirror to read), characters move by walking backward, and time runs in reverse. Carroll used actual mirror writing as a literary device, not just as a theme.
    </p>
    <p>
      Retrograde music composition: in music, a retrograde is a melody or theme played backward. Baroque composers frequently used retrograde in canons — Bach's "Crab Canon" from the Musical Offering plays identically forward and backward (a musical palindrome). The concept of retrograde in music directly parallels text reversal: the same note sequence in reverse order. Text reversal tools like ours are occasionally used by musicologists notating retrograde patterns in text-based music notation systems.
    </p>
    <p>
      Anagram tradition: while not exactly reversal, the practice of rearranging letters has deep historical roots — court anagrammatists in Renaissance Europe were employed to find meaningful anagrams in names. Reversal is the most constrained form of anagram (only one specific rearrangement). Historical anagram puzzles frequently used reversal as one step. Our character reversal generates the "reversal anagram" of any word instantly.
    </p>
  </section>
);

export default async function TextReverserPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolData.title,
    description: toolData.shortDescription,
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    permissions: 'browser',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={webPageSchema({ name: toolData.title, description: toolData.shortDescription, url })} />
      <ToolPageShell tool={toolData} ui={<TextReverserTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}

