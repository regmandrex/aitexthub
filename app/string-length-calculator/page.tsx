import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { StringLengthCalculatorTool } from '@/components/tools/StringLengthCalculatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 604800;
const toolSlug = 'string-length-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta(toolSlug);
}

const faqs: FaqItem[] = [
  {
    category: 'Basics',
    question: 'What does a string length calculator measure?',
    answer: `A string length calculator measures multiple text statistics simultaneously. Our tool calculates: characters with spaces (the total character count including every space, tab, and newline), characters without spaces (total characters minus all whitespace), bytes in UTF-8 encoding (the actual storage size — ASCII characters take 1 byte, but many Unicode characters take 2-4 bytes), words (text units separated by whitespace), lines (text separated by newlines), sentences (text units ending with ., !, or ?), paragraphs (blocks separated by blank lines), and the top 10 most frequent characters in the text. All statistics update in real time as you type or paste. This is useful for tracking Twitter/X character limits, verifying database field constraints, SEO metadata length optimization, API request body size estimation, academic paper word limits, social media bio limits, and programming exercises involving string manipulation.`,
  },
  {
    category: 'Basics',
    question: 'Why is character count different from byte count?',
    answer: `Character count and byte count differ because not all characters require the same number of bytes in storage. ASCII characters (standard English letters, digits, and basic punctuation) take exactly 1 byte in UTF-8 encoding, so for plain English text, character count equals byte count. However, many characters require more bytes: accented characters like é, ñ, ü require 2 bytes in UTF-8. Most non-Latin scripts (Chinese, Japanese, Korean, Arabic, Hebrew, Devanagari) require 3 bytes per character. Emoji (🎉, 😀, ❤️) typically require 4 bytes per character. Some complex emoji (family emoji, skin tone variants, flag emoji) can require 8 bytes or more. For example, "Hello" is 5 characters and 5 bytes. "Héllo" is 5 characters but 6 bytes. "你好" is 2 characters but 6 bytes. "🎉🎉" is 2 characters but 8 bytes. This matters for: database VARCHAR/CHAR fields (often byte-limited), HTTP request body size limits, API payload constraints, file size estimation, and any storage system that measures capacity in bytes rather than characters.`,
  },
  {
    category: 'Usage',
    question: 'How do I count characters for Twitter/X posts and social media limits?',
    answer: `Twitter/X has a 280-character limit (500 for Twitter Blue subscribers). Our character counter shows characters with spaces in real time — this is the count Twitter uses. Note that Twitter has special rules: URLs are always counted as 23 characters regardless of actual length (Twitter shortens all URLs). Line breaks count as one character each. Emoji count as 2 characters on Twitter even though they are 1 Unicode character (Twitter counts by UTF-16 code units, not Unicode code points). For practical Twitter use: paste your draft tweet in our tool, check the "Characters (with spaces)" count, then subtract 23 for each URL you plan to include. Instagram captions are limited to 2,200 characters. Facebook posts technically have no character limit but show "See more" after about 400 characters. LinkedIn posts are limited to 3,000 characters. Instagram bios are 150 characters. Twitter bios are 160 characters. YouTube video descriptions are 5,000 characters. Our tool's real-time counter makes it easy to stay within any platform's limits while drafting content.`,
  },
  {
    category: 'Usage',
    question: 'How do I count words in my essay or document?',
    answer: `To count words in a document: paste your text into our tool and check the "Words" statistic. Words are counted by splitting on whitespace — any sequence of non-whitespace characters counts as one word. This means hyphenated words like "well-known" count as one word, contractions like "don't" count as one word, and numbers like "2024" count as one word. The word count updates in real time as you type. Common word limit requirements: academic essays (500, 1000, or 2000 word limits), cover letters (typically 250-400 words), college application essays (CommonApp: 650 words maximum), LinkedIn summaries (2,000 characters, roughly 300-350 words), research abstracts (typically 150-300 words), and academic paper sections. Our word counter uses the same method as most word processors — it may differ slightly from Microsoft Word's count in edge cases involving special characters or unusual whitespace, but for standard text it produces identical results. For precise academic submission word counts, always verify with your institution's required tool.`,
  },
  {
    category: 'Limits',
    question: 'What are the character limits for common databases like MySQL, PostgreSQL, and SQLite?',
    answer: `Database character limits affect how much text you can store in each field. MySQL: VARCHAR(n) stores up to n characters (not bytes in modern MySQL with utf8mb4 charset — but there is a 65,535 byte row limit), TEXT stores up to 65,535 bytes (about 16,383 characters for 4-byte UTF-8 like emoji), MEDIUMTEXT stores up to 16MB, LONGTEXT stores up to 4GB. In MySQL with utf8mb4 (the correct charset for full Unicode support including emoji), VARCHAR(255) stores 255 characters but uses up to 255 × 4 = 1,020 bytes. PostgreSQL: VARCHAR(n) stores up to n characters, TEXT stores unlimited text (limited by available storage). SQLite: TEXT fields have a practical limit of 1 billion bytes. Microsoft SQL Server: VARCHAR(n) up to 8,000 bytes (or MAX for 2GB), NVARCHAR(n) up to 4,000 characters (or MAX for 2GB). Oracle: VARCHAR2(n) up to 32,767 bytes. Our byte counter helps you verify that your text fits within byte-limited database fields — critical for VARCHAR fields in MySQL where the byte count matters more than the character count.`,
  },
  {
    category: 'Limits',
    question: 'What is the character limit for SEO title tags and meta descriptions?',
    answer: `SEO character limits for metadata: Title tag: Google displays approximately 50-60 characters (about 600 pixels wide). Titles longer than this are truncated in search results with "...". The title tag has no technical character limit, but content beyond 60 characters is typically not shown. Keep titles between 50-60 characters for full display. Meta description: Google displays approximately 150-160 characters on desktop and about 120 characters on mobile. Longer descriptions are truncated. No technical limit, but target 150-155 characters. Open Graph title (og:title): 35-60 characters recommended for social sharing previews. Open Graph description (og:description): 55-200 characters, with most platforms showing around 200 characters. Twitter Card description: 200 characters maximum. URL length: Google can crawl URLs up to 2,048 characters, but shorter URLs are better for UX and shareability. Our character counter is specifically useful for SEO workflow: paste your title or description draft, check the character count in real time, and adjust until you are within the optimal range. Many SEO professionals use character counters as a routine part of metadata writing.`,
  },
  {
    category: 'Technical',
    question: 'What is the difference between characters, code points, and code units?',
    answer: `These terms have specific technical meanings in Unicode text processing. A character is what a person perceives as a single text unit — the letter 'A', the emoji '🎉', or the Chinese character '中'. A code point is a number in the Unicode standard assigned to a character — 'A' is U+0041, '🎉' is U+1F389, '中' is U+4E2D. There are over 140,000 assigned code points. A code unit is the basic storage unit of a specific encoding. UTF-8 uses 1-byte code units; most characters are 1-4 code units each. UTF-16 (used internally by JavaScript, Windows) uses 2-byte code units; most characters are 1 code unit, but supplementary characters (emoji, many rare characters above U+FFFF) require 2 code units (a surrogate pair). In JavaScript, string.length counts UTF-16 code units, not code points — so emoji count as length 2. Our tool shows both characters with spaces (which counts what users perceive as characters, using Array.from() to count code points) and bytes (UTF-8 encoding size using TextEncoder). For most practical purposes, code point count = perceived character count for all text not involving exotic Unicode sequences.`,
  },
  {
    category: 'Technical',
    question: 'How does line count and paragraph count work?',
    answer: `Line count is the number of newline characters in the text, plus 1. A text with no newlines has 1 line. Each newline character (\\n) starts a new line, so 3 newlines create 4 lines. Our tool counts lines by splitting on \\n and counting the resulting array length (with special handling for empty input). Paragraph count counts text blocks separated by blank lines (consecutive newlines with nothing between them). A blank line is one or more newlines where the content between them is only whitespace. For example: "Paragraph 1\\n\\nParagraph 2\\n\\nParagraph 3" has 3 paragraphs. Our tool splits on double-newlines (\\n\\s*\\n) and counts the resulting non-empty blocks. Sentence count estimates sentences by splitting on sentence-ending punctuation (., !, ?) followed by whitespace, then counting non-empty segments. This is a heuristic — it may count abbreviations like "Dr. Smith" as two sentences. These statistics are useful for readability analysis, academic submission compliance, and content structure assessment.`,
  },
  {
    category: 'Technical',
    question: 'How does the character frequency analysis work?',
    answer: `The character frequency section shows the 10 most common characters in your text, helping you understand the distribution of characters. The tool counts how many times each unique character appears in the text, sorts by frequency (most common first), and displays the top 10 with their counts. Space characters appear as a middle dot (·) and newlines appear as a return symbol (↵) so they are visible in the frequency display. For English text, the most common characters are typically: space (separates words), 'e' (the most common English letter), 't', 'a', 'o', 'i', 'n'. This analysis is useful for: frequency analysis in cryptography (breaking Caesar ciphers, studying substitution patterns), text compression analysis (characters that appear frequently benefit most from Huffman coding), content style analysis (high space-to-character ratios indicate verbose writing), programming exercises about character counting and sorting, and understanding the character distribution of a corpus for natural language processing tasks.`,
  },
  {
    category: 'Use Cases',
    question: 'How do copywriters and content creators use character counters?',
    answer: `Copywriters and content creators use character counters throughout their workflow. For social media: drafting tweets within the 280-character limit, crafting Instagram captions with enough characters for keywords without exceeding 2,200, ensuring LinkedIn posts end before 3,000 characters (after which they get a "see more" collapse). For SEO: writing title tags between 50-60 characters, writing meta descriptions between 150-155 characters, ensuring URL slugs are concise. For advertising: Google Ads headlines are limited to 30 characters (3 per ad), descriptions to 90 characters (2 per ad). Facebook ads have character limits per placement (25 characters for headline, 90 for description). For email marketing: subject lines are best under 60 characters for mobile display, preview text under 90 characters. For UI microcopy: button labels ideally under 20 characters, notification messages under 50 characters, tooltip text under 100 characters. Our real-time character counter makes all of these checks effortless — paste your draft and see immediately if it fits the target limit.`,
  },
  {
    category: 'Use Cases',
    question: 'How do developers use character and byte counts in programming?',
    answer: `Developers use character and byte counts for several critical tasks. Database field sizing: checking if text fits in a VARCHAR(255) or TEXT field before insertion, especially for multi-byte Unicode text where byte count exceeds character count. Input validation: implementing client-side character limits that match server-side validation, ensuring input length constraints are applied consistently. API request body sizing: HTTP APIs often have payload size limits (some endpoints accept up to 1MB, others much less). Knowing the byte size of a JSON payload helps predict whether it will be accepted. Cryptographic limits: some encryption algorithms have message length limits. Hashing functions have no length limit but very long inputs affect performance. Memory estimation: strings in different languages take different amounts of memory — a Python str of 1,000 characters uses about 50KB with utf-8 encoding internally, while a Java String uses 2KB with UTF-16. Search engine limits: many full-text search engines have document or field size limits. Our tool provides both character count (for logical text limits) and byte count (for storage and transmission limits) simultaneously.`,
  },
  {
    category: 'Practical',
    question: 'What is the character limit for Google Ads headlines and descriptions?',
    answer: `Google Ads has strict character limits for each ad component. Responsive Search Ads (RSA): headlines are 30 characters maximum (you can write up to 15 headlines), descriptions are 90 characters maximum (up to 4 descriptions). Google then tests combinations automatically. Display Path: each of the two optional path fields is 15 characters. Callout extensions: 25 characters each. Sitelink extensions: headline 25 characters, description lines 35 characters each. Responsive Display Ads: short headline 30 characters, long headline 90 characters, description 90 characters, business name 25 characters. Performance Max assets: headline 30 characters, long headline 90 characters, description 90 characters. For paid search practitioners: writing concise, impactful copy within these limits is a core skill. Our character counter helps you draft and refine ad copy efficiently, especially when working on multiple variants. The real-time counter shows you immediately if a draft headline at 32 characters needs to be tightened to 30. Many PPC (pay-per-click) practitioners keep a character counter open as a permanent reference tool when writing ad copy.`,
  },
  {
    category: 'Practical',
    question: 'What is the maximum length for an email subject line?',
    answer: `Email subject line length has practical limits beyond the technical maximum. The technical limit: most email servers enforce a 998-character limit per RFC 2822. The practical limit: most email clients show 60-70 characters in an inbox preview on desktop. On mobile, only 30-40 characters are visible before truncation. Best practices: keep subject lines under 60 characters for full desktop display, under 40 characters for optimal mobile display. The most impactful words should be in the first 30-40 characters in case of truncation. Data from email marketing platforms shows that subject lines between 6-10 words (roughly 35-55 characters) tend to have the highest open rates. Very short subject lines (1-4 words) and very long ones (over 80 characters) typically perform worse. For A/B testing: test short subject lines (under 40 characters) against longer ones (50-70 characters) for your specific audience, as optimal length varies by industry and audience expectations. Our character counter makes it easy to check your subject line length while drafting and quickly trim or expand to your target range.`,
  },
  {
    category: 'Academic',
    question: 'How do I count words accurately for an academic essay with a word limit?',
    answer: `For academic essays with word limits, precise word counting matters. Our word counter splits text on whitespace and counts all non-whitespace sequences — this matches how most academic word processing tools count. Important academic word counting conventions that vary by institution: whether the bibliography/references count toward the limit (typically no), whether headers, titles, and footnotes count (typically no or reduced weight), whether in-text citations count (typically yes, as they are part of running text). For formal academic submissions, always use the word counter in the document format your institution requires (Microsoft Word, Google Docs) since they may have slightly different counting algorithms for edge cases. Our online counter is reliable for quick checks and planning but verify with the required tool for final submission. For common word limit requirements: undergraduate essays typically 1,500-3,000 words, literature reviews 2,000-5,000 words, dissertations 15,000-80,000 words, academic conference abstracts 200-300 words, journal abstracts 150-250 words.`,
  },
  {
    category: 'Tools',
    question: 'What other text analysis and manipulation tools are on this site?',
    answer: `We offer a comprehensive text analysis and manipulation toolkit alongside the character counter. Word Frequency Counter: analyze which words appear most often in your text — useful for spotting overused words in writing, keyword density analysis for SEO, and text corpus analysis. Text Reverser: reverse characters, words, or lines of text. Sort Lines: sort text lines alphabetically, by length, numerically, or randomly. ROT13 Encoder: apply ROT13/ROT47 encoding for light text obfuscation. Unicode Text Converter: transform text into stylized Unicode variants (bold, italic, script, Fraktur). Text Diff: compare two versions of text and highlight what changed. Case Converter: convert between uppercase, lowercase, title case, camel case, and snake case. Slug Generator: convert text to URL-friendly slugs. SHA256 Generator: hash text using SHA-1, SHA-256, and SHA-512. All tools run entirely in your browser with no server upload — your text never leaves your device.`,
  },
  {
    category: 'Advanced',
    question: 'What is the Flesch-Kincaid readability score and how is word count related to it?',
    answer: `The Flesch-Kincaid readability formula measures how easy a text is to read, using word count and syllable count. The Flesch Reading Ease score: 206.835 - 1.015 × (words/sentences) - 84.6 × (syllables/words). Scores range from 0 (extremely difficult) to 100 (very easy). Target scores: 90-100 (5th grade level, very easy — tabloid newspapers), 60-70 (8th-9th grade level — standard — Reader's Digest), 30-50 (college level — Atlantic Monthly), 0-30 (professional/technical). Average sentence length (words per sentence) directly impacts this score — shorter sentences improve readability. Our character counter's sentence count and word count, combined, give you average sentence length (words ÷ sentences). The Flesch-Kincaid Grade Level formula: 0.39 × (words/sentences) + 11.8 × (syllables/words) - 15.59. Grade 8 corresponds to an 8th-grade reading level. For content marketing and general web content, target Grade 6-8. For technical documentation, Grade 10-12 is typical. Our tool provides the basic statistics (word count, sentence count) needed as inputs for readability calculations.`,
  },
  {
    category: 'Advanced',
    question: 'How can I use character frequency analysis for cryptography?',
    answer: `Character frequency analysis is a classical cryptanalytic technique that exploits the non-uniform distribution of letters in natural language. In English, the most frequent letters are (in order): E, T, A, O, I, N, S, H, R, D. If you have a long ciphertext from a simple substitution cipher (where each letter is replaced by a fixed substitute), the most frequent character in the ciphertext is likely the substitute for E. The second most frequent is likely T's substitute, and so on. By matching ciphertext frequencies to known plaintext frequencies, you can reconstruct the substitution key without needing to try all possibilities. Our character frequency display shows the top 10 characters — for ciphertext analysis, this immediately reveals which characters appear most often, providing starting points for frequency analysis. This technique breaks Caesar ciphers (just shift the alphabet to align the most frequent ciphertext character with E), Vigenère ciphers (through coincidence analysis and frequency analysis of each key-position group), and other classical ciphers. Modern ciphers (AES, etc.) are specifically designed to produce uniform frequency distributions, making this attack inapplicable.`,
  },
  {
    category: 'Use Cases',
    question: 'What is the character limit for Twitter (X) and how do I count characters correctly?',
    answer: `Twitter (now X) has a 280-character limit per tweet for most users. However, character counting on Twitter is more complex than simply counting Unicode code points. URLs are always counted as 23 characters regardless of their actual length — Twitter wraps all URLs with its t.co shortener. Emojis count as 2 characters on Twitter even though they are single Unicode code points, because Twitter counts in units of UTF-16 code units and most emojis require surrogate pairs (two UTF-16 code units). Line breaks count as 1 character. Mentions (@username) and hashtags (#topic) count normally — each character in the handle or tag counts. Media attachments (images, GIFs, videos) attached to a tweet do not consume characters from the 280 limit. Our string length calculator counts Unicode characters (code points), which closely matches Twitter's counting for most text. For tweets with URLs, subtract 23 for each URL and add 23 back in regardless of URL length. For tweets with emojis, our tool counts them as 1 but Twitter counts them as 2 — mentally double the emoji count when near the limit. For standard text-only tweets, our character count is accurate.`,
  },
  {
    category: 'Use Cases',
    question: 'How do I check if my text fits within SMS character limits?',
    answer: `SMS character limits depend on the encoding used. Standard SMS (GSM-7 encoding): supports 128 characters from the GSM 7-bit alphabet (Latin letters, digits, common punctuation, and some special characters like @, £, $, ¥, è, é, ù, ì, ò, Ç, Ø, ø, Å, å). A single SMS is 160 GSM-7 characters. Concatenated SMS (longer messages): if your message exceeds 160 characters, it is split into segments of 153 characters each (7 characters reserved for concatenation headers), with each segment billed separately. Unicode SMS: if your message contains any character outside the GSM-7 alphabet (emoji, accented characters not in GSM-7, Chinese/Japanese/Arabic/etc.), the entire message switches to UCS-2 encoding. A single UCS-2 SMS is 70 characters. Concatenated UCS-2: segments of 67 characters each. Practical limits: keep marketing SMS messages under 160 characters (all ASCII/GSM-7) to ensure single-segment delivery and lower cost. Check with our calculator: if your character count (without spaces if needed) is under 160 and you use only standard ASCII, it fits in one SMS segment. If you include any emoji or non-Latin characters, stay under 70 characters for a single segment.`,
  },
  {
    category: 'Technical',
    question: 'What is the difference between character count and word count for SEO?',
    answer: `Character count and word count measure different aspects of text that matter for different SEO purposes. Character count matters for: meta titles (50-60 characters to avoid SERP truncation), meta descriptions (150-160 characters), URL slugs (keep under 75 characters), alt text (generally under 125 characters for screen reader compatibility), Twitter card titles (70 characters), Open Graph titles (95 characters), Google Ads headlines (30 characters each), and Google Ads descriptions (90 characters each). Word count matters for: content depth signals — longer articles tend to rank better for informational queries because they cover the topic more comprehensively. Studies from Backlinko and SEMrush consistently show that top-ranking pages for competitive keywords average 1,447 to 2,500+ words. Blog posts targeting informational keywords should aim for 1,500–3,000 words minimum. Pillar pages and comprehensive guides should reach 3,000–10,000 words. Product pages need only 300–500 words of unique description. Local business pages benefit from 500–1,000 words with location-specific content. Use our calculator's word count for content planning and character count for on-page metadata optimization.`,
  },
  {
    category: 'Technical',
    question: 'How does Unicode affect string length and byte count calculations?',
    answer: `Unicode is a universal character encoding standard that assigns code points to over 140,000 characters from all writing systems. The relationship between Unicode characters, bytes, and string length depends on the encoding used. UTF-8 (the web standard): ASCII characters (U+0000 to U+007F, basic Latin) encode as 1 byte each. Latin-extended, Greek, Cyrillic, Arabic, Hebrew (U+0080 to U+07FF) encode as 2 bytes each. Most other BMP characters including CJK (U+0800 to U+FFFF) encode as 3 bytes each. Supplementary characters including most emoji (U+10000 and above) encode as 4 bytes each. UTF-16 (used internally by JavaScript): BMP characters (U+0000 to U+FFFF) encode as 2 bytes. Supplementary characters encode as 4 bytes (surrogate pair). JavaScript's string.length property counts UTF-16 code units, not Unicode code points — a single emoji like 😀 (U+1F600) has .length === 2 in JavaScript. Our string length calculator reports the true character count (Unicode code points), not the JavaScript .length value. Practical consequence: a 100-character string containing emojis may be 200+ bytes in UTF-8 storage — the byte count our tool provides reflects actual storage requirements for UTF-8 encoded databases and files.`,
  },
  {
    category: 'Use Cases',
    question: 'What is the maximum character length for database fields and how do I check compliance?',
    answer: `Database field length constraints vary by database system and column definition. MySQL/MariaDB VARCHAR: supports up to 65,535 bytes per row (shared across all VARCHAR columns). A VARCHAR(255) stores up to 255 characters — but for UTF-8mb4 (which supports all Unicode including emoji), each character can use up to 4 bytes, so VARCHAR(255) in UTF-8mb4 uses up to 1,020 bytes of your row budget. PostgreSQL VARCHAR: up to 10,485,760 characters (1GB). TEXT type: unlimited in PostgreSQL, 65,535 bytes in MySQL. SQLite TEXT: practically unlimited (2GB). Common field length conventions: username: 3-50 characters, email: up to 254 characters (RFC 5321 limit), first/last name: 1-100 characters, phone: 7-20 characters (including country code and formatting), password hash (bcrypt): always 60 characters, slug/URL: 1-255 characters, description: 500-1,000 characters, bio: 160-500 characters. To check compliance: paste your value into our string length calculator, note the character count and byte count, then compare against your schema. For UTF-8 databases, use our byte count (UTF-8) to check storage impact, not just character count. The byte count is what actually consumes database row storage budget.`,
  },
  {
    category: 'Use Cases',
    question: 'How do content management systems (CMS) use character and word count limits?',
    answer: `Content management systems implement character and word count limits at multiple layers, and understanding these limits prevents truncation and formatting issues. WordPress: post title recommended under 60 characters for SEO (though no hard limit), excerpt defaults to 55 words (configurable via excerpt_length filter), meta description field accepts up to 320 characters (though 150-160 is the practical display limit in Google search results). Shopify: product title recommended under 70 characters, product description has no hard limit but 300+ words is recommended for SEO, meta title 70 characters max, meta description 320 characters max. Contentful and headless CMS: field length is set by content model designers — common constraints are Short Text (256 chars), Long Text (unlimited), Symbol (256 chars). Ghost CMS: title recommended under 65 characters, meta description under 155 characters. HubSpot: blog post title under 60 characters for SERP display, meta description 155-160 characters. Use our calculator when writing CMS content: check your post title character count before publishing, verify meta descriptions stay between 150-160 characters, and use word count to ensure body content meets your minimum content depth target. Copy-paste draft content into our tool for a quick compliance check.`,
  },
];

const writeUp = (
  <section className="prose prose-slate max-w-none">
    <h2>What Is a String Length Calculator?</h2>
    <p>
      A string length calculator analyzes text and reports multiple metrics simultaneously: character count with and without spaces, byte count in UTF-8 encoding, word count, line count, sentence count, paragraph count, and character frequency distribution. Our free online tool provides all of these statistics in real time — as you type or paste text, every metric updates instantly with no button click required.
    </p>
    <p>
      These statistics serve different purposes for different users. Writers use character counts for social media limits and SEO metadata. Developers use byte counts for database field validation and API payload sizing. Students use word counts for academic assignment compliance. Marketers use character counts for ad copy. Copywriters use word counts to assess content density. The tool provides all metrics at once so you can check whichever matters for your current task.
    </p>

    <h2>Characters vs Bytes: Understanding the Difference</h2>
    <p>
      The distinction between character count and byte count is critical for technical work. In ASCII-only text (standard English with no accented characters, emoji, or non-Latin scripts), every character takes exactly 1 byte in UTF-8 encoding — character count equals byte count. But Unicode text tells a different story.
    </p>
    <p>
      Accented characters (é, ñ, ü) require 2 bytes in UTF-8. East Asian characters (Chinese, Japanese, Korean) require 3 bytes. Emoji require 4 bytes per character — and some complex emoji like family group emoji or flag emoji can require 8 or more bytes total. A short message in Chinese or with many emoji may have a character count of 50 but a byte count of 150. Database VARCHAR fields measured in bytes rather than characters can unexpectedly reject short-looking text that contains multi-byte characters. Our tool shows both counts simultaneously so you always know both the human-perceived length and the storage cost.
    </p>

    <h2>Character Limits for Social Media Platforms</h2>
    <p>
      Every social media platform enforces character limits, and our real-time counter helps you stay within them while drafting. Twitter/X limits posts to 280 characters (500 for Premium subscribers). Instagram captions allow up to 2,200 characters but only show the first 125-150 before "more." LinkedIn posts allow up to 3,000 characters. Facebook posts have no hard limit but perform better under 40-80 characters for engagement. TikTok captions are limited to 2,200 characters. Pinterest descriptions allow 500 characters. YouTube descriptions allow 5,000 characters.
    </p>
    <p>
      For profile bios: Instagram allows 150 characters, Twitter 160 characters, LinkedIn summary 2,000 characters, TikTok bio 80 characters. Our counter lets you draft bios and captions while watching the character count in real time, eliminating the frustration of hitting a platform's limit mid-post.
    </p>

    <h2>SEO and Metadata Character Limits</h2>
    <p>
      Search engine optimization depends critically on metadata length. Google truncates title tags at approximately 600 pixels width — roughly 50-60 characters for most fonts. Titles beyond this appear in search results with an ellipsis, potentially cutting off important keywords. Meta descriptions are truncated at approximately 150-160 characters on desktop. These limits are not hard limits (the HTML allows any length) but practical limits for what appears in search results.
    </p>
    <p>
      SEO professionals routinely use character counters as part of their metadata workflow. Our tool makes this immediate: paste your title draft and see if it is under 60 characters. Too long? Trim until the count is right. Meta description too short at 80 characters? Expand it to 150 for fuller coverage. The real-time feedback eliminates the need to manually count or repeatedly guess.
    </p>

    <h2>Database Field Constraints and Byte Counting</h2>
    <p>
      Database VARCHAR fields impose storage constraints that can be measured in characters or bytes depending on the database system and encoding. MySQL with the utf8mb4 character set (necessary for full Unicode including emoji) stores each character in 1-4 bytes, and the entire row has a 65,535-byte limit. A VARCHAR(255) field can store 255 characters that are all ASCII, but if those characters include emoji (4 bytes each), only about 63 emoji-heavy characters fit before hitting the byte limit.
    </p>
    <p>
      PostgreSQL measures VARCHAR(n) in characters (code points), making it more predictable for Unicode text. SQLite text fields have a 1 billion byte practical limit. Microsoft SQL Server distinguishes between VARCHAR (1 byte per character, limited Unicode) and NVARCHAR (2 bytes per character, full Unicode). Understanding which database you are using and whether it measures in bytes or characters determines whether you should check our character count or byte count when validating input.
    </p>

    <h2>Word Count for Academic and Professional Writing</h2>
    <p>
      Word count requirements are standard in academic and professional writing. Our word counter provides the same count as most word processors — words are sequences of non-whitespace characters separated by whitespace. Hyphenated words count as one word, contractions count as one word, numbers count as one word. Most academic institutions use Microsoft Word's word counter for official compliance checking; our tool matches its output for standard prose.
    </p>
    <p>
      Common word requirements: college application essays (CommonApp caps at 650 words), graduate school personal statements (typically 500-1,000 words), cover letters (250-400 words optimal), research abstracts (150-300 words), academic papers by section (introduction typically 300-500 words, methods 500-1,000 words). Word count is also a useful writing quality metric — for a given topic, extremely low word counts suggest insufficient coverage, extremely high counts suggest poor editing.
    </p>

    <h2>Character Frequency Analysis</h2>
    <p>
      The character frequency distribution reveals patterns in text that serve multiple purposes. In cryptography, classical ciphers (Caesar, Vigenère, simple substitution) can be attacked by analyzing letter frequencies in ciphertext and comparing them to known natural language frequencies (E is most common in English at 13%, T at 9%, A at 8%). Our top-10 character display immediately shows which characters dominate the text.
    </p>
    <p>
      For writing analysis, high space frequency relative to other characters indicates verbosity (many short words) or sparse text. For code analysis, frequency of brackets, semicolons, and operators characterizes the programming style. For content optimization, frequency of target keywords in a document (accessible through the Word Frequency Counter tool on this site) is useful for SEO content analysis.
    </p>

    <h2>Line and Paragraph Counting</h2>
    <p>
      Line count and paragraph count provide structural information about text. Line count is simply the number of newlines plus one — one line for an empty or single-line input, increasing by one for each newline. Paragraph count identifies distinct text blocks separated by blank lines (double newlines), ignoring empty blocks. These statistics help assess content structure and are useful for: verifying that a multi-section document has the expected number of sections, checking that a poetry collection has the expected number of stanzas, analyzing writing style (average paragraph length = words ÷ paragraphs), and validating that imported text has preserved paragraph structure from the source.
    </p>

    <h2>Google Ads and PPC Character Limits</h2>
    <p>
      Pay-per-click advertising has strict character limits that directly determine what appears in an ad. Responsive Search Ads require headlines of exactly 30 characters or fewer — no exceptions. Descriptions must be 90 characters or fewer. Display URL paths are 15 characters each. Sitelink headlines 25 characters, descriptions 35 characters each. Callouts are 25 characters.
    </p>
    <p>
      PPC copywriters often work with our character counter open as a permanent tool while drafting ad copy. The strict limits mean every character matters — losing one character from a headline requires rethinking the entire phrase. Real-time character counting prevents the frustration of writing a 32-character headline only to discover it exceeds the 30-character limit when you try to save it in Google Ads. The immediate feedback lets you write and tighten simultaneously rather than in alternating phases.
    </p>

    <h2>Practical Applications for Developers</h2>
    <p>
      Software developers use string length data for input validation, API design, and data modeling. Client-side validation should match server-side constraints — if a database field is VARCHAR(255), the UI form's maxlength attribute should be 255 (or fewer for byte-limited fields). API payload sizing matters for services with request body limits. Hash input length affects performance but not security (hash functions accept inputs of any length). Encryption algorithms have specific plaintext length requirements or add padding. Regular expression patterns that match text of specific lengths use quantifiers based on character or byte counts.
    </p>
    <p>
      Our byte counter is particularly valuable for verifying that text payloads fit within HTTP Content-Length limits, SMTP message size restrictions, SMS character limits (SMS segments are 160 characters for ASCII or 70 characters for Unicode, with concatenation for longer messages), and various third-party API limits that are measured in bytes rather than characters.
    </p>

    <h2>String Length in JavaScript, Python, and Other Programming Languages</h2>
    <p>
      Every programming language provides string length measurement, but the semantics differ in ways that matter when working with Unicode text. Understanding these differences is essential for building applications that handle international text correctly.
    </p>
    <p>
      <strong>JavaScript string length</strong>: JavaScript's <code>String.prototype.length</code> property returns the number of UTF-16 code units, not Unicode code points. For most characters (Basic Multilingual Plane, U+0000 to U+FFFF), one character = one code unit = one length unit. But supplementary characters — emoji (😀, 🎉, ❤️), many rare CJK characters, and other characters above U+FFFF — require a surrogate pair: two UTF-16 code units. This means <code>"😀".length</code> returns 2, not 1. To get the true Unicode code point count: <code>Array.from("😀").length</code> returns 1 (correct). The spread operator also works: <code>[..."hello😀"].length</code> returns 6 (5 + 1). For byte counting in JavaScript: <code>new TextEncoder().encode(str).length</code> returns the UTF-8 byte count. Our tool uses these correct methods — it reports code point count (not <code>.length</code>) and uses TextEncoder for byte counting.
    </p>
    <p>
      <strong>Python string length</strong>: Python 3 strings are sequences of Unicode code points. <code>len("hello")</code> returns 5, <code>len("😀")</code> returns 1 (correct, one code point). Python 3 handles Unicode naturally, so <code>len()</code> gives the human-expected character count. For byte counting in Python: <code>len("text".encode('utf-8'))</code> returns the UTF-8 byte count. For <code>len("😀".encode('utf-8'))</code> you get 4 (emoji are 4 bytes in UTF-8). Python 2 (legacy) had str objects that were byte strings, so <code>len()</code> on a Python 2 str gave byte count, not character count — the source of many Unicode bugs in older Python code.
    </p>
    <p>
      <strong>Java string length</strong>: Java's <code>String.length()</code> returns the number of char values (UTF-16 code units), similar to JavaScript. <code>"😀".length()</code> returns 2 (surrogate pair). The true code point count: <code>"😀".codePointCount(0, "😀".length())</code> returns 1. Java's <code>String.getBytes("UTF-8").length</code> returns UTF-8 byte count. When Java APIs impose length constraints, they typically check <code>String.length()</code> (UTF-16 units), not code point count — important for applications where emoji or supplementary characters could unexpectedly exceed limits.
    </p>
    <p>
      <strong>Go string length</strong>: Go strings are byte slices, and <code>len(str)</code> returns the byte count (UTF-8 encoded). For the rune (Unicode code point) count: <code>utf8.RuneCountInString(str)</code> returns code points. Go's design — treating strings as bytes by default — makes it efficient for byte-level processing but requires deliberate use of <code>utf8</code> package functions for correct Unicode character counting.
    </p>
    <p>
      <strong>SQL string length</strong>: SQL databases have different length functions. MySQL <code>LENGTH(str)</code> returns byte count; <code>CHAR_LENGTH(str)</code> returns character count. PostgreSQL <code>length(str)</code> returns character count; <code>octet_length(str)</code> returns byte count. SQL Server <code>LEN(str)</code> returns character count (excluding trailing spaces); <code>DATALENGTH(str)</code> returns byte count. Using the wrong function for length validation is a common source of bugs — using <code>LENGTH()</code> when you need character count can incorrectly reject short multi-byte strings, and using <code>CHAR_LENGTH()</code> when the database enforces byte limits can accept strings that exceed byte storage.
    </p>

    <h2>Email and Messaging Platform Character Limits: Complete Reference</h2>
    <p>
      Email and messaging platforms each enforce their own character limits at multiple levels — subject lines, body content, previews, and names all have different constraints. This section provides a comprehensive reference for major platforms.
    </p>
    <p>
      <strong>Email subject lines</strong>: Gmail shows approximately 70 characters in the inbox subject column on desktop, 40 characters on mobile. Apple Mail shows 55-60 characters on desktop, 30-35 on mobile. Outlook shows 60-65 characters on desktop. For maximum visibility across all clients, keep subject lines under 40 characters. For desktop-focused audiences, under 60 characters is sufficient. Email marketing best practice: the most important keywords should be in the first 30-40 characters. Subject lines under 60 characters have higher open rates on average according to email marketing platform studies.
    </p>
    <p>
      <strong>Email preview text</strong>: preview text (also called preheader text) appears after the subject line in email clients, previewing the body content. Gmail shows approximately 100 characters of preview text. Apple Mail shows about 140 characters. Outlook varies by version. Best practice: include 85-100 characters of meaningful preview text that complements the subject line, adds context, and entices opening. Without explicit preview text, email clients pull the first text from the email body — which might be "View in browser" or similar boilerplate.
    </p>
    <p>
      <strong>WhatsApp character limits</strong>: WhatsApp messages have a 65,536-character limit per message (65K characters, practically unlimited for normal use). Status updates are limited to 700 characters. Business API messages: template messages have character limits defined per field — header text 60 characters, body 1,024 characters, footer 60 characters, button text 20 characters. For WhatsApp groups, the character limit per message is the same 65,536 characters.
    </p>
    <p>
      <strong>Slack character limits</strong>: Slack messages are limited to 40,000 characters per message (practically unlimited for normal chat). Channel descriptions are 250 characters. Display names are 80 characters. Custom status is 100 characters. Message thread subject when creating from a message is 75 characters. Slack App notifications from bots: text is unlimited but attachments have a 3,000-character fallback text limit.
    </p>
    <p>
      <strong>Discord character limits</strong>: Discord messages are limited to 2,000 characters (4,000 for Nitro subscribers). Server names are 100 characters. Channel names are 100 characters (but Discord normalizes them to lowercase with hyphens). Channel topics are 1,024 characters. About Me in profiles is 190 characters. Bot messages have the same 2,000-character limit per message, but embeds can have descriptions up to 4,096 characters.
    </p>
    <p>
      <strong>Telegram character limits</strong>: Telegram messages support up to 4,096 characters (Markdown/HTML formatted) or 8,196 characters (plain text in some versions). Bot API messages: up to 4,096 characters with formatting. Channel descriptions: 255 characters. Group descriptions: 255 characters. Usernames: 5-32 characters, must be alphanumeric with underscores. Bio: 70 characters.
    </p>

    <h2>Content Length Best Practices for SEO and Digital Marketing</h2>
    <p>
      Content length is one of the factors that correlates with search engine rankings for competitive keywords. While there is no universal "perfect length," research from leading SEO companies provides clear guidance for different content types.
    </p>
    <p>
      <strong>Blog posts and articles</strong>: analysis of top-ranking pages by Backlinko found that the average Google first-page result is 1,447 words. Pages ranking for high-competition informational queries tend to be longer. Content targeting "what is X" or "how to X" queries performs best in the 1,500-2,500 word range. Comprehensive guides and pillar content targeting broad topics performs best at 3,000-10,000 words. Short blog posts (under 300 words) rarely rank for competitive terms because they signal insufficient coverage.
    </p>
    <p>
      <strong>Product pages</strong>: e-commerce product pages need unique, keyword-rich descriptions. Studies suggest 300-500 words of unique product description improves ranking versus thin (under 100-word) descriptions. Focus on benefits, specifications, use cases, and differentiators. Avoid copying manufacturer descriptions verbatim — unique content outperforms duplicated content. For high-traffic product pages, 500-1,000 words of content around the product (including Q&amp;A sections, reviews, related content) strengthens topical relevance.
    </p>
    <p>
      <strong>Landing pages</strong>: landing pages for paid advertising should be concise and conversion-focused. 500-1,000 words is typical for a well-optimized PPC landing page — enough to address objections and communicate value, not so much as to distract from the call to action. Long-form landing pages (2,000-5,000 words) work better for high-ticket products where buyers need extensive information before converting.
    </p>
    <p>
      <strong>Homepage content</strong>: homepage word count should be 300-600 words of focused content — clear value proposition, primary keywords, and navigation to deeper content. Overly long homepages with 2,000+ words dilute focus and damage conversion rates. SEO value from the homepage comes more from internal linking structure and domain authority than from content length.
    </p>
    <p>
      <strong>Using our word counter for content planning</strong>: paste your article draft into our tool and check the word count against your target range. If targeting a 1,500-word article and you are at 900 words, you need another 600 words — potentially 2-3 more H2 sections covering related aspects of the topic. If your draft is 2,800 words for a topic that ranks with 1,200-word articles, consider whether the extra content adds value or whether editing would improve the piece. Word count is a planning metric, not a quality guarantee — focused, useful content outperforms padded word counts.
    </p>

    <h2>String Length Validation in Web Forms and APIs</h2>
    <p>
      Form validation is one of the most common developer use cases for string length measurement. Implementing consistent, user-friendly length validation requires understanding both the technical constraints and the UX best practices.
    </p>
    <p>
      <strong>HTML maxlength attribute</strong>: the HTML <code>maxlength</code> attribute on input and textarea elements prevents users from entering more characters than specified. <code>&lt;input type="text" maxlength="50"&gt;</code> allows up to 50 characters. Note: maxlength counts Unicode characters (code points), not bytes — matching Python and modern JavaScript behavior. The browser enforces this client-side, but server-side validation must also check length since forms can be submitted without JavaScript or with manipulated requests.
    </p>
    <p>
      <strong>Server-side validation</strong>: server-side length validation should match client-side constraints. Discrepancies between the two lead to confusing user experiences where content accepted by the form is rejected by the server. For internationalized forms, consider whether your server-side limit is in characters or bytes — a <code>maxlength=255</code> on the HTML form and a VARCHAR(255) MySQL field in utf8mb4 may reject entries that the HTML form accepts, because MySQL's byte limit is lower than the character limit for multi-byte text.
    </p>
    <p>
      <strong>Character counters in form UIs</strong>: many forms (Twitter, Instagram, LinkedIn bio editor, Google Ads interface) display a real-time character counter showing remaining characters. Implementing this in a web form: use JavaScript to update a counter element as the user types. The counter should count accurately — using <code>Array.from(input.value).length</code> (code point count) rather than <code>input.value.length</code> (UTF-16 units) for correct Unicode handling. Show the counter proactively, not just when nearing the limit — users benefit from knowing available space throughout the composition process.
    </p>
    <p>
      <strong>API request body size limits</strong>: REST APIs commonly impose maximum request body sizes. Express.js default limit is 100KB; this can be configured with body-parser options. AWS API Gateway has a 10MB request body limit. GraphQL APIs often set lower limits (1MB-5MB) to prevent abuse. Knowing the byte size of your JSON payload helps you decide whether to compress it, paginate data, or use chunked transfer for large requests. Our UTF-8 byte counter provides the actual payload size before transmission.
    </p>
    <p>
      <strong>GraphQL string scalars and length validation</strong>: GraphQL's String scalar type does not enforce length limits by default. Custom scalars or validation directives must be implemented to enforce length constraints. The graphql-scalars library provides validators like MaxLength and MinLength for string fields. When implementing GraphQL schema validation, use our calculator to determine appropriate limits for different field types in your schema.
    </p>

    <h2>Using String Length Analysis for Writing Quality Assessment</h2>
    <p>
      Beyond counting characters and words, string metrics provide insight into writing style and quality. Professional editors and content strategists use these metrics to assess readability, structure, and engagement potential.
    </p>
    <p>
      <strong>Average sentence length</strong>: divide word count by sentence count for average sentence length. Research on readability consistently shows that shorter sentences improve comprehension. Technical writing guidelines recommend an average of 15-20 words per sentence. Marketing copy often targets 10-15 words per sentence for maximum impact. Academic writing typically runs 20-30 words per sentence. Extremely long sentences (40+ words) require readers to hold complex clause structures in working memory, reducing comprehension. If your average sentence length is high, look for sentences you can split with a period or that contain unnecessary subordinate clauses.
    </p>
    <p>
      <strong>Average paragraph length</strong>: divide word count by paragraph count for average paragraph length. Online content performs better with shorter paragraphs (3-5 sentences, 50-100 words) that create visual whitespace and allow readers to scan. Print journalism typically uses 2-4 sentences per paragraph. Academic papers use 5-8 sentences per paragraph. Very long paragraphs (15+ sentences) are rare in effective online writing and typically indicate that multiple ideas that deserve separation are being combined.
    </p>
    <p>
      <strong>Text density analysis</strong>: the ratio of characters-without-spaces to characters-with-spaces indicates text density — the proportion of content to whitespace. Dense text (ratio near 0.85) uses long words with few spaces. Sparse text (ratio near 0.70) uses many short words. English averages around 0.80-0.82 for typical prose. Highly technical content with long domain-specific terms has higher density. Simple, accessible writing has lower density. Neither extreme is inherently better, but the metric helps identify unusual patterns that may affect readability.
    </p>
    <p>
      <strong>Keyword density measurement</strong>: while over-reliance on keyword density is outdated SEO advice (Google's algorithms are far more sophisticated), checking that your target keyword appears a reasonable number of times in your content remains relevant. If a 1,500-word article mentions its target keyword only once, it may not signal strong topical relevance. If it repeats the exact keyword phrase 30 times, it looks spammy. A natural density of 1-2% (15-30 occurrences of the keyword phrase per 1,500 words) is generally considered healthy. Use the word count from our tool and the Word Frequency Counter tool on this site to check keyword occurrence rates.
    </p>

    <h2>Historical and Cultural Context of Character Limits</h2>
    <p>
      Character limits in digital communication have shaped how people write and think about text in profound ways. Understanding this history provides context for why limits exist and why they matter.
    </p>
    <p>
      <strong>SMS and the 160-character origin</strong>: the 160-character SMS limit was not arbitrary — it was derived from research by Friedhelm Hillebrand and Bernard Ghillebaert at Deutsche Telekom in the 1980s. Hillebrand analyzed postcards and telexes and found that most messages were under 160 characters. The GSM consortium adopted this research when designing the SMS standard, using the Signaling System 7 (SS7) spare capacity in mobile network control channels to carry 160 7-bit characters (1,120 bits) without dedicated data channels. This technical origin story explains why SMS segments are exactly 160 characters for ASCII — it was the maximum that fit within the existing control channel capacity.
    </p>
    <p>
      <strong>Twitter's 140-character origin</strong>: Twitter's original 140-character limit was chosen for SMS compatibility — SMS was 160 characters, and Twitter wanted tweets to be transmittable via SMS with a 20-character username prefix ("[username]: " taking up 20 chars), leaving 140 for content. When Twitter doubled the limit to 280 characters in 2017, studies showed this modestly reduced the number of users hitting the limit (from 9% to 1% of tweets) without significantly changing average tweet length, as most users self-limited to shorter messages from habit.
    </p>
    <p>
      <strong>The effect of character limits on communication</strong>: Twitter's 140/280-character limit created an entire genre of compressed communication. Users developed conventions like abbreviations ("bc" for "because," "imo" for "in my opinion"), eliminated articles and prepositions, and linked to longer content for detail. The constraint forced clarity — you cannot be vague in 280 characters, you must choose your words precisely. Writing teachers sometimes assign Twitter-format summaries of long texts as an exercise in concise communication.
    </p>
    <p>
      <strong>URL length history</strong>: HTTP/1.1 specifies no maximum URL length, but in practice browsers, servers, and proxies impose limits. Internet Explorer had a 2,048-character URL limit (often cited as the practical maximum). Modern browsers support longer URLs. Apache and nginx default to 8,192 characters. The practical recommendation is to keep URLs under 2,000 characters for maximum compatibility. Long URLs (often from analytics tracking parameters) can cause issues with email clients that wrap URLs at 76 characters (MIME line length) and social media platforms that shorten URLs automatically.
    </p>
    <p>
      <strong>Character encoding history and its effect on text length</strong>: before Unicode standardization, different encoding standards handled different languages — ASCII for English, ISO-8859-1 for Western European languages, Shift-JIS for Japanese, GB2312 for Chinese, KOI8-R for Russian. A page written in Japanese might take 2 bytes per character in Shift-JIS. The globalization of software (and the internet) required a unified encoding — Unicode, and its UTF-8 encoding format, solved the problem by allowing any language's characters while maintaining ASCII backward compatibility. The variable-byte-length nature of UTF-8 is why character count and byte count diverge — a direct consequence of making Unicode backward-compatible with 7-bit ASCII.
    </p>

    <h2>Quick Reference: Character Limits Across Major Platforms</h2>
    <p>
      This reference table summarizes the character and word limits for major platforms and use cases — bookmark this for quick lookups when drafting content:
    </p>
    <p>
      <strong>Social media posts</strong>: Twitter/X post: 280 characters. Twitter/X Premium: 500 characters. Instagram caption: 2,200 characters. Facebook post: no hard limit (500 characters shown before "More"). LinkedIn post: 3,000 characters. TikTok caption: 2,200 characters. Pinterest pin description: 500 characters. YouTube video description: 5,000 characters. Reddit post title: 300 characters. Reddit post body: 40,000 characters.
    </p>
    <p>
      <strong>Social media profiles</strong>: Instagram bio: 150 characters. Twitter/X bio: 160 characters. LinkedIn headline: 220 characters. LinkedIn summary: 2,000 characters. Facebook "about" section: 255 characters. TikTok bio: 80 characters. Discord display name: 32 characters. Slack display name: 80 characters.
    </p>
    <p>
      <strong>SEO metadata</strong>: Title tag (optimal): 50-60 characters. Meta description (optimal): 150-155 characters. H1 tag: no limit, but keep it descriptive and concise (40-70 characters typical). URL slug: under 75 characters. Alt text: under 125 characters (screen reader recommendation).
    </p>
    <p>
      <strong>Google Ads</strong>: RSA headline: 30 characters each (up to 15 per ad). RSA description: 90 characters each (up to 4 per ad). Display path: 15 characters each (2 paths). Callout extension: 25 characters. Sitelink headline: 25 characters. Sitelink description: 35 characters each.
    </p>
    <p>
      <strong>Database fields (common conventions)</strong>: username: VARCHAR(50). email: VARCHAR(254). first name: VARCHAR(50). last name: VARCHAR(100). phone: VARCHAR(20). URL: VARCHAR(2048). description: VARCHAR(500) or TEXT. bio: VARCHAR(500). password hash (bcrypt): CHAR(60). UUID: CHAR(36).
    </p>
    <p>
      <strong>Email</strong>: subject line (optimal display): under 60 characters. Preview text: 85-100 characters. From name: under 20 characters for most mobile email clients. RFC 5321 email address maximum: 254 characters total (64 local-part + @ + 253 domain).
    </p>

    <h2>Why an Online String Length Calculator Is the Right Tool for Most Scenarios</h2>
    <p>
      For most text length measurement needs — checking a tweet draft, verifying a meta description, confirming an email subject line, or estimating a database field's storage — an online string length calculator is faster and more convenient than any alternative. It requires no installation, works identically on any device with a browser, and provides results instantly as you type.
    </p>
    <p>
      Compared to manually counting characters (error-prone and tedious beyond 20-30 characters), using word processor character counts (requires opening a separate application), or writing custom code (<code>str.length</code> in JavaScript, <code>len()</code> in Python — single-purpose and not universally available), our web tool provides all statistics simultaneously in a single interface accessible from anywhere.
    </p>
    <p>
      The real-time update behavior is particularly valuable for iterative writing tasks. When adjusting a Google Ads headline from 32 characters to the 30-character maximum, you see the character count update with every keystroke, letting you immediately see whether your edit achieves the target without repeatedly triggering a count action. This tight feedback loop between writing and measurement accelerates the editing process significantly compared to any tool that requires you to trigger a separate counting action.
    </p>
    <p>
      For developers, the combined character and byte count view is uniquely useful — no other simple tool provides both simultaneously with correct Unicode handling. Our byte count uses the same <code>TextEncoder</code> API that browsers use for network transmission, ensuring it accurately reflects real-world storage and transmission costs. The character count uses code point counting (not JavaScript's <code>.length</code>) to give the true perceived character count. Both are correct for their respective purposes, and seeing them side by side immediately surfaces when multi-byte characters cause byte count to significantly exceed character count — a critical signal for database field sizing with international text.
    </p>
    <p>
      Whether you are a content marketer optimizing social media copy, a developer validating form inputs, a student checking word limits, or a digital advertiser writing to character constraints — our string length calculator provides the metrics you need, accurately, instantly, and with complete privacy (all processing happens in your browser, your text is never transmitted or stored anywhere).
    </p>
    <p>
      The tool is particularly effective as a companion tool during the writing process rather than as a final check after writing. Starting your draft with the target character or word count in view means every sentence you write is already informed by the constraint. For Twitter posts, this means natural compression from the start — you think in 280-character segments rather than writing a paragraph and then cutting. For SEO metadata, it means titles that fit within 60 characters emerge naturally from the drafting process rather than requiring awkward post-hoc trimming. For academic essays, seeing the word count climb toward a 1,000-word target in real time keeps you on track and signals when you have reached sufficient coverage of a section's topic. Open our tool alongside your writing environment and let the live metrics guide your drafting rather than constrain your editing. The sentence count, line count, and paragraph count statistics further help assess structure and readability rhythm — giving you a complete, data-informed view of your text from multiple angles simultaneously. Bookmark this free string length calculator for daily use in any workflow involving character limits, word targets, or byte-size constraints — it is the fastest and most comprehensive text measurement tool available in any browser, with no login, no upload, and no data leaving your device.
    </p>
  </section>
);

export default async function StringLengthCalculatorPage() {
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
      <ToolPageShell tool={toolData} ui={<StringLengthCalculatorTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}

