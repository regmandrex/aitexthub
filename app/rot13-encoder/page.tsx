import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { Rot13EncoderTool } from '@/components/tools/Rot13EncoderTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 604800;
const toolSlug = 'rot13-encoder';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta(toolSlug);
}

const faqs: FaqItem[] = [
  {
    category: 'Basics',
    question: 'What is ROT13 and how does it work?',
    answer: `ROT13 (Rotate by 13) is a simple letter substitution cipher that replaces each letter with the letter 13 positions ahead of it in the alphabet. Since the English alphabet has 26 letters, shifting by 13 positions is self-inverse — applying ROT13 twice returns the original text. A becomes N, B becomes O, C becomes P, and so on through Z becoming M. Lowercase letters are handled separately (a→n, b→o, etc.), and non-letter characters (numbers, punctuation, spaces) are left unchanged. ROT13 is used for light text obfuscation — hiding spoilers, puzzle answers, and mildly inappropriate content in online communities — rather than security, since anyone who knows the encoding can instantly decode it. Our tool applies ROT13 (and the related ROT47 variant) to any text you enter, with output updating in real time.`,
  },
  {
    category: 'Basics',
    question: 'Is ROT13 a form of encryption?',
    answer: `No, ROT13 is not encryption in any meaningful security sense. True encryption requires a key that determines the transformation and makes the ciphertext unreadable without the key. ROT13 has no key — the transformation is always the same (shift by 13), and anyone who recognizes ROT13 output can decode it instantly. ROT13 is classified as a "cipher" (specifically a Caesar cipher with a shift of 13) but functions as obfuscation — making text temporarily unreadable to casual readers without seriously preventing decoding. The original Caesar cipher (used by Julius Caesar for military communications) used a shift of 3 rather than 13. ROT13's special property is that encoding and decoding are the same operation: apply ROT13 to encoded text and you get the original back. This means a ROT13 encoder and decoder are the same program — the "encoder" button works for both directions. For actual encryption, use proper cryptographic algorithms like AES-256. ROT13 is appropriate only for situations where simple obfuscation (not security) is the goal.`,
  },
  {
    category: 'Basics',
    question: 'What is ROT47 and how is it different from ROT13?',
    answer: `ROT47 extends the ROT13 concept to all printable ASCII characters rather than just letters. While ROT13 shifts only the 26 letters (A-Z and a-z) by 13 positions, ROT47 shifts all 94 printable ASCII characters (codes 33–126, which includes letters, digits, and punctuation) by 47 positions. Since 94 ÷ 2 = 47, this is also self-inverse — applying ROT47 twice returns the original text. For example, '!' (ASCII 33) becomes 'P' (ASCII 80), digits are transformed (0 becomes _), and letters are shifted differently than in ROT13. ROT47 is useful when you want to obfuscate text that contains digits and special characters as well as letters — a ROT13-encoded message still shows its digits and punctuation in plain form. The trade-off: ROT47 output looks more scrambled and less recognizable than ROT13, since even digits and symbols are changed. Our tool offers both ROT13 and ROT47 modes with real-time conversion and a "Swap" button to use the output as new input for decoding.`,
  },
  {
    category: 'Usage',
    question: 'How do I encode and decode text with ROT13?',
    answer: `Using our ROT13 encoder is straightforward: select the ROT13 tab, type or paste your text in the input area, and the encoded (or decoded) output appears instantly in the right panel. Since ROT13 is self-inverse, the same operation works for both encoding and decoding — if you want to decode a ROT13-encoded message, simply paste the encoded text in the input and read the output. The "Swap" button copies the current output back to the input, letting you chain operations — useful if you want to encode something twice, or if you have already encoded text in the output and want to continue with it. Copy the output using the Copy button. The tool handles text of any length and updates in real time as you type. For ROT47, click the ROT47 tab and the same workflow applies, but digits and punctuation are also transformed. You can switch between tabs without losing your input text.`,
  },
  {
    category: 'Usage',
    question: 'How do I use ROT13 to hide spoilers on Reddit and other forums?',
    answer: `ROT13 has a long history on Reddit, Usenet, and online forums as a spoiler encoding convention. When you want to share information that others might not want to see unexpectedly (movie plot points, book endings, puzzle solutions, game secrets), you encode it in ROT13. Readers who want to see the spoiler decode it; those who do not want to see it scroll past. The convention works because ROT13 is widely known in internet culture — anyone curious enough to decode a spoiler knows how. On Reddit, the native spoiler tag (>!text!<) is now preferred, but ROT13 is still used in many communities, particularly on older-style forums, Usenet groups, and communities with a culture of ROT13 spoilers. To use: type your spoiler text in our tool, copy the ROT13 output, and post it. Add a note saying "ROT13:" before the encoded text so readers know what encoding to apply. To decode a ROT13 spoiler you encounter: paste it into our tool and read the output.`,
  },
  {
    category: 'History',
    question: 'Where did ROT13 originate and why was it used?',
    answer: `ROT13 originated in the early 1980s on Usenet — the distributed discussion network that predated the modern web and was an early internet cultural hub. Usenet groups hosted discussions on every topic, and participants needed a way to hide content that could be offensive to some readers, spoil stories or puzzles for others, or simply needed to be opt-in rather than opt-out. ROT13 was the solution: encode the content, label it as ROT13, and let readers choose to decode it. The choice of 13 (rather than, say, 1 or 5) was deliberate: a shift of 13 in a 26-letter alphabet is self-inverse, meaning the same program encodes and decodes. This was practically convenient for Usenet participants — you only needed one tool, one transformation. ROT13 spread throughout early internet culture and became a shared convention that internet-literate people recognized. It continues today as a cultural artifact and light obfuscation tool, even though modern platforms offer native spoiler tags. The tradition of ROT13 in internet culture is an interesting example of how technical communities develop informal standards.`,
  },
  {
    category: 'Technical',
    question: 'What is the ROT13 algorithm in code?',
    answer: `ROT13 is one of the simplest encryption algorithms to implement. In JavaScript: function rot13(str) { return str.replace(/[a-zA-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13))); }. In Python: import codecs; codecs.encode('Hello World', 'rot_13') or using str.maketrans: text.translate(str.maketrans('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz','NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm')). In the Unix shell: echo "Hello" | tr 'A-Za-z' 'N-ZA-Mn-za-m'. The algorithm: for each letter, check if it is in the first half (A-M or a-m) and add 13, or in the second half (N-Z or n-z) and subtract 13. Non-letters are unchanged. The self-inverse property (applying the function twice returns the original) emerges naturally: shift forward 13, shift forward 13 again = shift forward 26 = full cycle back to start. ROT13 is often one of the first cipher implementations in programming courses because it is short, clear, and demonstrates important concepts like ASCII arithmetic and character classification.`,
  },
  {
    category: 'Technical',
    question: 'What is the ROT47 algorithm and how does it differ from ROT13 in code?',
    answer: `ROT47 operates on the 94 printable ASCII characters (codes 33–126) with a shift of 47. In JavaScript: function rot47(str) { return str.replace(/[!-~]/g, c => String.fromCharCode(33 + (c.charCodeAt(0) - 33 + 47) % 94)); }. The regex [!-~] matches all printable ASCII characters from ! (code 33) to ~ (code 126). The formula: subtract 33 (the offset to the start of the printable range), add 47, take modulo 94 (the size of the range), add 33 back. In Python: text.translate(str.maketrans(''.join(chr(i) for i in range(33, 127)), ''.join(chr(33 + (i - 33 + 47) % 94) for i in range(33, 127)))). Unlike ROT13, ROT47 has no Python built-in codec equivalent — you need the manual implementation. The self-inverse property works because 94 ÷ 2 = 47 exactly, just as 26 ÷ 2 = 13 for ROT13. Note that space (ASCII 32) is NOT in the ROT47 range and is left unchanged, as are control characters. Only the 94 printable non-space characters are rotated.`,
  },
  {
    category: 'Use Cases',
    question: 'What are practical uses for ROT13 today?',
    answer: `Modern uses for ROT13 include: (1) Spoiler hiding — the traditional use, still common on forums, Discord servers, and fan communities discussing movies, TV shows, books, and games. (2) Puzzle answers — hiding solutions to riddles or crossword clues in shared documents so the answer is visible but requires conscious effort to read. (3) Mild content warnings — briefly obscuring text that might be sensitive but does not require real security. (4) Programming exercises — ROT13 is a classic beginner coding exercise for learning character manipulation and string processing. (5) CTF challenges — Capture the Flag competitions frequently include ROT13-encoded messages as beginner-level challenges. (6) Easter eggs — some software includes ROT13-encoded messages as playful hidden content. (7) Demonstrating cipher principles — ROT13 illustrates substitution ciphers and their weaknesses in security education. (8) Fun with text — generating interesting-looking scrambled text for artistic or aesthetic purposes. (9) Quick obfuscation in development — temporarily hiding API keys or sensitive strings in code comments during development (though proper secrets management should be used in production).`,
  },
  {
    category: 'Use Cases',
    question: 'Is ROT13 used in cybersecurity CTF challenges?',
    answer: `Yes, ROT13 is a very common encoding in beginner-level CTF (Capture the Flag) challenges. CTF competitions present participants with encoded or encrypted data and ask them to recover the original plaintext (the "flag"). ROT13 appears as: a direct encoding where the flag is ROT13 encoded and must be decoded, a first step in a multi-stage challenge (decode ROT13 to get another encoded string, then decode that), a hint or clue encoded in ROT13 rather than the flag itself, and an obfuscation layer in challenge source code. Recognizing ROT13 output is a skill: the encoding maintains the letter frequency of English but shifts all letters, and experienced CTF players can often spot it visually (common words like "gur" for "the", "n" for "a", "vf" for "is"). For CTF participants: when you see text that looks like garbled English with preserved word structure, try ROT13 first — it is one of the most commonly used encodings in beginner challenges. Our tool handles ROT13 and ROT47 decoding instantly. CyberChef (the Swiss Army knife for CTF encoding tasks) also has ROT13 in its extensive recipe library.`,
  },
  {
    category: 'Educational',
    question: 'How does ROT13 compare to the Caesar cipher?',
    answer: `The Caesar cipher is a general class of letter-shift ciphers where the key is the number of positions to shift. Julius Caesar reportedly used a shift of 3: A becomes D, B becomes E, etc. ROT13 is a specific case of the Caesar cipher with a shift of exactly 13. The unique property of ROT13 among all Caesar cipher variants is its self-inverse nature — encode and decode use the same operation. For all other Caesar cipher shifts, encoding and decoding require different shifts (to encode with shift 3, add 3; to decode, subtract 3). With shift 13 in a 26-letter alphabet, adding 13 and subtracting 13 are the same operation modulo 26, because 26 - 13 = 13. Caesar cipher security is famously weak — there are only 25 possible shifts (excluding shift 0, which is no change). Frequency analysis (analyzing how often each letter appears in a language) can break any Caesar cipher even without knowing the key, because letter frequency distributions shift together. English 'e' appears most frequently; in a Caesar-encoded English text, the most frequent letter is the encoding of 'e', revealing the shift. Modern cryptography has long since moved beyond substitution ciphers.`,
  },
  {
    category: 'Educational',
    question: 'What is frequency analysis and why does it defeat ROT13?',
    answer: `Frequency analysis is a cryptanalytic technique that exploits the fact that different letters appear with different frequencies in natural language. In English text: E is the most common letter (~13% of letters), followed by T (~9%), A (~8%), O (~7.5%), I (~7%), N (~7%). In a ROT13-encoded English text, these letters are shifted: E→R, T→G, A→N, O→B, I→V, N→A. So in the encoded text, R, G, N, B, V, A will be the most frequent letters — revealing the frequency pattern and thus the shift. An analyst seeing that R is the most common letter in the encoded text immediately knows the shift is 13 (since E→R is a shift of 13). Even without knowing about ROT13 specifically, frequency analysis of any Caesar cipher with sufficient text reveals the shift in seconds. ROT13's weakness is inherent to all simple substitution ciphers: the statistical structure of the language is preserved in the ciphertext. Modern ciphers (AES, ChaCha20) transform data so that the ciphertext has uniform statistical distribution, revealing nothing about the plaintext structure.`,
  },
  {
    category: 'Community',
    question: 'How do online communities use ROT13 as a social convention?',
    answer: `In online communities, ROT13 serves as a social signal as much as a technical encoding. When someone posts ROT13-encoded content, they are saying: "This information is here if you want it, but it requires a small deliberate action to read — please make that choice consciously." The convention respects readers who actively want to avoid spoilers, puzzle solutions, or other content they have not yet experienced, while still allowing the information to exist in the thread. The community understanding of ROT13 is part of its value — it is a shared protocol. In communities where ROT13 is the convention, seeing "ROT13:" or a scrambled paragraph immediately signals what it is and why it is encoded. Discord servers for book clubs, TV show fandoms, and puzzle communities often maintain ROT13 conventions for spoilers even when the platform offers native spoiler markup (||text||), because ROT13 is portable across platforms — it works in plain text contexts, emails, and any medium that supports text. The cultural longevity of ROT13 since the 1980s internet is remarkable and reflects the internet's tendency to maintain technical traditions that become community identity.`,
  },
  {
    category: 'Comparison',
    question: 'How does ROT13 compare to Base64 encoding as an obfuscation method?',
    answer: `ROT13 and Base64 both provide text obfuscation — making content not immediately readable — but they differ in character. ROT13 is immediately recognizable as letter substitution: the output still looks like alphabetic text, with spaces and punctuation in their original positions. Anyone familiar with ROT13 recognizes it on sight. Base64 is less immediately recognizable to most people: the output is a string of mixed alphanumeric and +/ characters, and without the "base64" label, some people might not immediately know what encoding was applied. However, Base64 is very widely known among developers and can be decoded by anyone who runs it through a decoder. Both encodings provide zero security — they are not encryption and can be decoded without any key by anyone who identifies the encoding. ROT13 is faster to apply mentally for letters (experienced users can read simple ROT13 mentally). Base64 is more compact for the information it represents. For actual security, neither should be used — proper encryption with a strong key is required. Choose ROT13 for cultural community purposes (spoiler hiding) and Base64 for technical data transport purposes (embedding binary in text formats).`,
  },
  {
    category: 'Technical',
    question: 'Why does applying ROT13 twice always return the original text?',
    answer: `The self-inverse property of ROT13 follows from the algebra of modular arithmetic. The English alphabet has 26 letters, indexed 0–25 (A=0, B=1...Z=25). ROT13 adds 13 to each letter's index, modulo 26: new_index = (old_index + 13) mod 26. Applying ROT13 twice: ((old_index + 13) + 13) mod 26 = (old_index + 26) mod 26 = old_index mod 26 = old_index. Adding 26 modulo 26 returns to the original value, since 26 ≡ 0 (mod 26). This works specifically because 13 + 13 = 26, which is the modulus. The only other shift value with this property (in a 26-character alphabet) would be 0 (no shift) and 13 — those are the only values x where x + x ≡ 0 (mod 26). This is the same reason ROT47 is self-inverse: 47 + 47 = 94, and the ROT47 alphabet has exactly 94 characters. This mathematical property was recognized when ROT13 was adopted as the Usenet spoiler convention — the same program or command could encode and decode, which was practically convenient for users.`,
  },
  {
    category: 'Practical',
    question: 'Can I use ROT13 to hide email addresses from spam bots?',
    answer: `ROT13 encoding of email addresses was once used as a basic anti-spam measure — encoding an email like user@example.com as hfre@rknzcyr.pbz so automated scrapers (which looked for @-containing strings) would not harvest it. However, this technique has significant limitations: modern spam bots specifically decode ROT13 (it is well-known and trivial to implement), JavaScript-based decoding is needed to display the address to users (adding complexity), and the approach requires users to know about ROT13 and manually decode — or you display the encoded address which defeats the purpose without client-side decoding. Better modern approaches for email obfuscation: CSS direction tricks (displaying the email visually but scrambling it in the source), using a contact form instead of displaying an email address, splitting the address in HTML comments (user<!-- -->@<!-- -->example.com), or using Cloudflare's email obfuscation feature. For genuine anti-scraping protection, CAPTCHA-protected contact forms are the most effective solution. ROT13 email obfuscation is a historical curiosity — it was marginally effective in the early 2000s but provides essentially no protection today.`,
  },
  {
    category: 'Fun',
    question: 'What does "Hello World" look like in ROT13 and ROT47?',
    answer: `"Hello World" encoded in ROT13 becomes "Uryyb Jbeyq" — H→U, e→r, l→y, l→y, o→b, space stays, W→J, o→b, r→e, l→y, d→q. The space is preserved, uppercase/lowercase mapping is maintained separately (uppercase stays uppercase, lowercase stays lowercase). In ROT47: "Hello World" becomes "%6==@ (@C=5" — the letters shift differently since ROT47 uses a different mapping that includes all printable ASCII. The space (ASCII 32) is actually outside the ROT47 range (33–126), so it is preserved unchanged. Notice that ROT47 output is less recognizable as English-derived text since digits and punctuation are also transformed. Some fun facts: "Uryyb Jbeyq" (ROT13 of "Hello World") is famous enough that it appears in discussions of ROT13 frequently. The sentence "Gur dhvpx oebja sbk whzcf bire gur ynml qbt" is "The quick brown fox jumps over the lazy dog" — the famous pangram that contains every letter of the alphabet — encoded in ROT13. And its ROT13 output "The quick brown fox jumps over the lazy dog" encodes back to "Gur dhvpx oebja sbk whzcf bire gur ynml qbt", demonstrating the self-inverse property.`,
  },
  {
    category: 'Practical',
    question: 'How do I apply ROT13 in Excel or Google Sheets?',
    answer: `ROT13 is not a built-in Excel or Google Sheets function, but it can be implemented with formulas. A compact ROT13 formula for a cell containing text in A1 (works in both Excel and Google Sheets): =TEXTJOIN("",1,IFERROR(MID("NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm",FIND(MID(A1,ROW(INDIRECT("1:"&LEN(A1))),1),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"),1),MID(A1,ROW(INDIRECT("1:"&LEN(A1))),1))). This formula: splits each character of A1, looks it up in the alphabet string, returns the corresponding ROT13 character (or the original if not a letter), and joins everything back together. In Google Sheets, you can also use a custom function (Apps Script): function rot13(text) { return text.replace(/[a-zA-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13))); }. For simpler use: our online tool is faster than implementing a spreadsheet formula for one-off conversions.`,
  },
  {
    category: 'Practical',
    question: 'How do I apply ROT13 on the command line in Linux and macOS?',
    answer: `ROT13 is built into most Unix/Linux systems through the tr command: echo "Hello World" | tr 'A-Za-z' 'N-ZA-Mn-za-m'. This translates each letter to its ROT13 equivalent using tr's character range syntax. For a file: tr 'A-Za-z' 'N-ZA-Mn-za-m' < input.txt > output.txt. For ROT47: tr '!-~' 'P-~!-O' < input.txt — this shifts all printable ASCII characters by 47. Python one-liner for ROT13: python3 -c "import codecs, sys; print(codecs.encode(sys.stdin.read().rstrip(), 'rot_13'))". Python has ROT13 as a built-in codec, making it trivially easy. In Bash: you can define a function: rot13() { echo "$@" | tr 'A-Za-z' 'N-ZA-Mn-za-m'; }. On macOS, the same tr command works since macOS includes the BSD version of tr which supports character ranges. For Windows Command Prompt and PowerShell, tr is not available, but you can use Python: python -c "import codecs; print(codecs.encode('Hello World', 'rot_13'))". Our browser tool is easier for one-off conversions; the command-line approaches are better for scripting and automation.`,
  },
  {
    category: 'Technical',
    question: 'How does ROT13 relate to other Caesar ciphers and substitution ciphers?',
    answer: `ROT13 is a specific instance of the Caesar cipher — the oldest known substitution cipher, used by Julius Caesar with a rotation of 3 (ROT3). A Caesar cipher shifts every letter by a fixed number of positions in the alphabet. ROT1 shifts by 1 (A→B, B→C...), ROT3 is the classical Caesar cipher, ROT13 shifts by 13. What makes ROT13 special among all Caesar ciphers: because the English alphabet has 26 letters and 13 is exactly half, ROT13 is its own inverse — the same operation encodes and decodes. No other rotation shares this self-inverse property (except ROT0, which changes nothing). Brute-forcing Caesar ciphers is trivial — there are only 25 non-trivial rotations to try. Frequency analysis makes it even faster for longer text: map the most common ciphertext letter to E (the most frequent English letter) and verify the implied shift. A general substitution cipher — where each letter is replaced by an arbitrary other letter, not necessarily a rotation — has 26! ≈ 4×10²⁶ possible keys. But frequency analysis still breaks it given sufficient ciphertext. ROT13 is used precisely because it offers no real security — it is intentional, light obfuscation for content warnings (spoilers, adult content), not encryption.`,
  },
  {
    category: 'Use Cases',
    question: 'How is ROT13 used in software development and programming communities?',
    answer: `ROT13 appears in software development contexts beyond the original Usenet spoiler use case. Source code Easter eggs: developers embed ROT13-encoded messages in code comments and documentation as hidden jokes or references for readers who recognize the pattern. Coding challenges: ROT13 is a standard beginner exercise on platforms like LeetCode, HackerRank, Exercism, and Codewars, teaching string manipulation, modular arithmetic, and character code operations. Interview practice: implementing ROT13 without using a lookup table — using modular arithmetic on char codes — is a common screening question. The formula: ((charCode - base + 13) % 26) + base, where base is 65 for uppercase and 97 for lowercase. Documentation: answer hiding in tutorials and educational materials — ROT13-encode the solution to an exercise so readers can choose to decode it. Light obfuscation: some developers ROT13-encode strings in source code (API keys visible in repos, test credentials) as a reminder that they should not be there — not a security measure but a visual flag. Regex practice: the tr command's ROT13 syntax (tr 'A-Za-z' 'N-ZA-Mn-za-m') is a model example of character range translation used in shell scripting tutorials.`,
  },
  {
    category: 'Technical',
    question: 'What is the ROT13 equivalent for numbers and special characters — ROT5, ROT18, ROT47?',
    answer: `Standard ROT13 rotates only the 26 Latin alphabet letters (A-Z, a-z). Numbers, spaces, punctuation, and all other characters pass through unchanged. ROT5: rotates only digits by 5 positions — 0→5, 1→6, 2→7, 3→8, 4→9, 5→0, 6→1, 7→2, 8→3, 9→4. Like ROT13, it is self-inverse because 10 ÷ 2 = 5. ROT18 (also called ROT13/ROT5): applies ROT13 to letters and ROT5 to digits simultaneously, leaving punctuation and spaces unchanged. Self-inverse. ROT47: shifts all 94 printable ASCII characters (from ! at code 33 to ~ at code 126) by 47 positions. Formula: ((charCode - 33 + 47) % 94) + 33. Unlike ROT13 and ROT5, ROT47 encodes letters, digits, punctuation, and symbols. Self-inverse because 47 × 2 = 94 (the size of the printable ASCII range). ROT47 in tr: tr '!-~' 'P-~!-O'. Our ROT13 tool encodes letters only (standard ROT13). For ROT47, use the command-line tr syntax or a dedicated ROT47 tool. ROT47 is more thorough obfuscation since it scrambles all printable characters including URLs, email addresses, and code syntax — useful when you want to obscure content that mixes letters, numbers, and punctuation.`,
  },
  {
    category: 'Technical',
    question: 'Is ROT13 ever used for real security, or is it always just obfuscation?',
    answer: `ROT13 provides zero security for any real threat model and must never be used as an actual security measure. The reasons are definitive: (1) It is universally documented and known — any attacker recognizes it on sight. (2) It has only 25 non-trivial possible rotations — exhaustive brute force takes microseconds. (3) Frequency analysis breaks it with a few dozen characters of ciphertext. (4) There is no key — the same operation always produces the same output for the same input. Any attacker, including one who has only seen ROT13 mentioned online once, can decode it immediately. Where ROT13 is appropriately used: spoiler warnings in forums (content is not secret — you are protecting readers from accidental exposure); content maturity warnings; hiding exercise answers in educational documents; Usenet and Reddit spoiler tags. The Usenet tradition was always transparent about this: ROT13 was described as protection "for those who want to, not from those who don't." For real security: use AES-256 for symmetric encryption, RSA/ECC for public-key operations, bcrypt/Argon2/scrypt for password hashing, and TLS 1.3 for data in transit. ROT13 is a cultural artifact and a teaching tool — treat it as such.`,
  },
];

const writeUp = (
  <section className="prose prose-slate max-w-none">
    <h2>What Is ROT13?</h2>
    <p>
      ROT13 (Rotate by 13) is a simple letter substitution cipher that replaces each letter with the letter 13 positions ahead of it in the alphabet. Because the alphabet has 26 letters and 13 is exactly half of 26, ROT13 has a unique property: it is its own inverse. Apply ROT13 to text and you get encoded output. Apply ROT13 again to the encoded output and you get the original text back. Encoder and decoder are identical operations.
    </p>
    <p>
      Our free online ROT13 encoder handles both ROT13 and the extended ROT47 (which covers all printable ASCII characters, not just letters). Type or paste any text and the encoded version appears instantly. The Swap button lets you use the output as new input for chaining or decoding. ROT13 is not security — it is a light obfuscation convention widely used in internet communities for hiding spoilers, puzzle solutions, and opt-in content.
    </p>

    <h2>ROT13 History: From Usenet to Modern Communities</h2>
    <p>
      ROT13 emerged in the early 1980s on Usenet — the distributed discussion network that was the internet's primary social platform before the web. Usenet groups covered every topic from technical discussions to entertainment, and participants needed a simple way to mark content that some readers would want to avoid: plot spoilers, puzzle solutions, crude jokes, or information that could ruin surprises. ROT13 became the standard convention.
    </p>
    <p>
      The choice of 13 as the shift value was no accident. A shift of 13 in a 26-character alphabet makes encoding and decoding the same operation — you only needed one implementation, one command, one mental algorithm. On text-based Usenet systems, this was practically convenient. The convention spread, became cultural, and persists today on Reddit, Discord, and forums that carry the internet cultural traditions of the Usenet era.
    </p>

    <h2>ROT13 vs ROT47: When to Use Each</h2>
    <p>
      ROT13 transforms only letters (A–Z and a–z), leaving digits, spaces, and punctuation unchanged. This means a ROT13-encoded message like "Gur sbyybj-hc vf ng 9:30 PM, ebbz 101" still reveals that it contains a time (9:30 PM) and a room number (101) to a reader who does not decode it. Only the letters are hidden. ROT47 extends the transformation to all 94 printable ASCII characters (!, ", #... through ~), including digits and punctuation. The same message in ROT47 would hide the time and room number too.
    </p>
    <p>
      For pure text spoilers where only the words matter, ROT13 is sufficient and more recognizable. For content where numeric or symbolic information should also be obfuscated, ROT47 is more thorough. Note that space (ASCII 32) is outside ROT47's range and is preserved unchanged — word boundaries remain visible in ROT47 output even when the letters and digits are scrambled.
    </p>

    <h2>The Mathematics of Self-Inverse Ciphers</h2>
    <p>
      The self-inverse property of ROT13 comes from modular arithmetic. The English alphabet has 26 letters, indexed 0–25. ROT13 adds 13 to each index modulo 26. Applying ROT13 twice adds 13 twice: (index + 13 + 13) mod 26 = (index + 26) mod 26 = index mod 26 = index. The number 26 mod 26 = 0, so adding 26 is the same as adding nothing — the original index is recovered.
    </p>
    <p>
      ROT47 works by the same logic with a 94-character range and shift of 47. Since 47 × 2 = 94 and 94 mod 94 = 0, applying ROT47 twice returns to the original. The only general shift values with this property are 0 (trivial — no change) and half the range size. ROT13 (half of 26) and ROT47 (half of 94) are special because of this arithmetic. A Caesar cipher with any other shift requires different operations for encoding and decoding.
    </p>

    <h2>ROT13 in Cybersecurity and CTF Challenges</h2>
    <p>
      ROT13 is a classic beginner challenge type in CTF (Capture the Flag) competitions. Participants receive encoded text and must identify and reverse the encoding to find the flag. ROT13 recognition comes with experience — the letter frequency and word structure of English are preserved (only shifted), so experienced players often recognize ROT13 output on sight. Common tells: the word "gur" (= "the"), single-letter words "n" (= "a") or "V" (= "I").
    </p>
    <p>
      For CTF beginners: when you see scrambled text that looks like it might be English with all letters systematically replaced, try ROT13 first before more complex analysis. After ROT13, try base64 decoding, then hex decoding, then more exotic encodings. ROT13 appears in beginner CTF categories like "cryptography easy" and "miscellaneous" — it is a gateway challenge to more complex substitution and transposition ciphers.
    </p>

    <h2>Implementing ROT13 in Code</h2>
    <p>
      ROT13 is a standard programming exercise that appears in coding courses and interview preparation. The algorithm: for each character, check if it is a letter. If it is in the first half (A–M or a–m), add 13 to shift it forward. If in the second half (N–Z or n–z), subtract 13 (equivalently, add 13 and take mod 26). Non-letters pass through unchanged.
    </p>
    <p>
      Python treats ROT13 as a first-class codec: codecs.encode(text, 'rot_13') uses the built-in implementation. Unix/Linux systems include ROT13 via tr: echo text | tr 'A-Za-z' 'N-ZA-Mn-za-m'. JavaScript, Java, and C all implement it straightforwardly with character arithmetic. Implementing ROT13 from scratch teaches character encoding, modular arithmetic, ASCII values, and string manipulation — exactly the concepts a beginner programmer needs to internalize.
    </p>

    <h2>Spoiler Culture and Community Norms</h2>
    <p>
      The social convention around ROT13 is as interesting as the technical mechanism. When a community adopts ROT13 for spoilers, it creates a shared protocol that requires a small amount of effort to breach — just enough to make the choice conscious. It is not security theater; everyone knows ROT13 is trivial to decode. The social meaning is: "I am flagging this as content you should only view intentionally."
    </p>
    <p>
      Modern platforms have partly replaced ROT13 with native spoiler markup (Reddit&apos;s &gt;!text!&lt;, Discord&apos;s ||text||, and similar). But ROT13 persists in cross-platform contexts, in communities with strong Usenet cultural heritage, and in situations where the ROT13 encoding itself is part of the content's charm. It also remains the only spoiler convention that works in pure plain-text email, SMS, and any medium where markdown is not rendered.
    </p>

    <h2>ROT13 and Text Security: Clear Limitations</h2>
    <p>
      No discussion of ROT13 is complete without being explicit about what it cannot do. ROT13 provides zero security against anyone who wants to read the content. It is not encryption, does not require a key, and is reversible by anyone with basic knowledge of the encoding. It does not protect sensitive data, does not hide information from determined readers, and should never be used where actual data protection is needed.
    </p>
    <p>
      For actual data security: use AES-256 for symmetric encryption, RSA or ECDSA for asymmetric encryption, bcrypt or Argon2 for password hashing, and TLS for data in transit. ROT13 is appropriate precisely for use cases where the goal is light, opt-in obfuscation rather than security — hiding content that readers might prefer to avoid accidentally, not hiding content from adversaries who want to access it. Understanding this distinction is fundamental security literacy.
    </p>

    <h2>Fun with ROT13: Notable Examples</h2>
    <p>
      Several ROT13 facts that delight programmers and internet culture enthusiasts: The sentence "Gur dhvpx oebja sbk whzcf bire gur ynml qbt" encodes "The quick brown fox jumps over the lazy dog" — the famous English pangram. "Uryyb Jbeyq" decodes to "Hello World." Some words are their own ROT13 — called "ROT13 fixed points" — though for complete words this is rare. True ROT13 word pairs (where ROT13 produces another valid English word) include: "abjurer" ↔ "nowhere", "chevy" ↔ "puryl", "terra" ↔ "green." The unix fortune command had ROT13 as a built-in option for filtering potentially offensive fortunes — demonstrating the cultural depth of ROT13 in Unix tradition.
    </p>

    <h2>ROT13 in Online Communities and Forum Culture</h2>
    <p>
      ROT13 became embedded in internet culture specifically through Usenet newsgroups in the 1980s and 1990s, and its legacy continues in modern online communities. The original purpose was entirely practical: Usenet had no spoiler-tag feature, no content warnings, and no way to hide text from readers who had not asked to see it. ROT13 provided a convention — a social contract — where posting ROT13-encoded content signaled to readers that they needed to actively choose to decode it, preventing accidental spoiler exposure.
    </p>
    <p>
      Reddit adopted ROT13 spoiler tags in its early years before adding native spoiler-tag markup. Users in movie subreddits would encode plot details in ROT13 and note "ROT13 below" for those who wanted to discuss specifics. Communities like /r/books and /r/games developed strong ROT13 spoiler etiquette. Even today, ROT13 is used in comment threads where native spoiler markup is unavailable or unreliable.
    </p>
    <p>
      Programming forums and communities use ROT13 for challenge answers. When a community posts a weekly coding challenge, some participants post ROT13-encoded solutions so others can check their answer without having the solution spoiled. The Stack Overflow community has discussed ROT13 extensively — it appears in answers about character encoding, Caesar ciphers, and obfuscation as a clear, well-understood example.
    </p>
    <p>
      4chan and imageboards have a long history of ROT13 for hiding offensive or shocking content behind a decode step. The extra friction — needing to copy text and run it through a decoder — ensures only actively interested readers see the content, creating a form of opt-in that the platforms otherwise do not support.
    </p>

    <h2>Implementing ROT13 in Popular Programming Languages</h2>
    <p>
      ROT13 is a standard implementation exercise that appears in beginner and intermediate programming curricula. Each language has idiomatic approaches, and comparing them illustrates the language's string-handling philosophy.
    </p>
    <p>
      Python: the simplest implementation uses the built-in codecs module — <code>import codecs; encoded = codecs.encode('Hello World', 'rot_13')</code>. Python is the only mainstream language with ROT13 as a built-in codec. Manual implementation using str.translate: <code>table = str.maketrans('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'); text.translate(table)</code>. This approach is efficient for bulk text processing.
    </p>
    <p>
      JavaScript: no built-in ROT13 support, but the implementation is concise — <code>const rot13 = str =&gt; str.replace(/[a-zA-Z]/g, c =&gt; String.fromCharCode((c &lt;= 'Z' ? 90 : 122) &gt;= (c = c.charCodeAt(0) + 13) ? c : c - 26))</code>. A cleaner version using modular arithmetic: <code>const rot13 = str =&gt; str.split('').map(c =&gt; &#123; const code = c.charCodeAt(0); if (code &gt;= 65 &amp;&amp; code &lt;= 90) return String.fromCharCode(((code - 65 + 13) % 26) + 65); if (code &gt;= 97 &amp;&amp; code &lt;= 122) return String.fromCharCode(((code - 97 + 13) % 26) + 97); return c; &#125;).join('')</code>.
    </p>
    <p>
      Java: <code>public static String rot13(String text) &#123; StringBuilder sb = new StringBuilder(); for (char c : text.toCharArray()) &#123; if (c &gt;= 'a' &amp;&amp; c &lt;= 'z') sb.append((char)('a' + (c - 'a' + 13) % 26)); else if (c &gt;= 'A' &amp;&amp; c &lt;= 'Z') sb.append((char)('A' + (c - 'A' + 13) % 26)); else sb.append(c); &#125; return sb.toString(); &#125;</code>. The modular arithmetic approach <code>(c - base + 13) % 26 + base</code> is the elegant mathematical core of all ROT13 implementations.
    </p>
    <p>
      C: <code>void rot13(char *s) &#123; for (; *s; s++) if (isalpha(*s)) *s = (*s &amp; 0x20) + (((*s &amp; 0x1f) + 12) % 26) + 1 + (*s &amp; ~0x3f);</code> — a compact bit-manipulation version that handles both cases simultaneously. The standard implementation uses ctype.h's isalpha() and toupper()/tolower() for clarity.
    </p>

    <h2>ROT13 Versus Other Text Obfuscation Techniques</h2>
    <p>
      ROT13 is one of many text obfuscation techniques used on the internet. Comparing it to alternatives clarifies when ROT13 is the right tool and when other approaches serve better.
    </p>
    <p>
      Base64 encoding: encodes binary-safe data as printable ASCII characters. Unlike ROT13, base64 is not immediately recognizable as obfuscated text — a base64 string looks like random characters to most readers. Base64 is used for data transport (email attachments, data URLs) not obfuscation. Decoding base64 requires knowledge that it is base64, while ROT13 is self-identifying to programmers. Neither provides real security.
    </p>
    <p>
      HTML entities: encoding text as HTML entities (&amp;lt; for &lt;, &#65; for "A") obfuscates the source code of a web page while browsers render it normally. Used by email harvesting countermeasures — encoding email addresses as HTML entities in HTML source to defeat simple regex scrapers. Less effective against modern scrapers that parse the DOM.
    </p>
    <p>
      Zero-width characters: inserting invisible Unicode characters (U+200B zero-width space, U+200C zero-width non-joiner) into text creates copies that look identical visually but differ at the character level. Used for digital watermarking — each copy of a document has a unique pattern of zero-width characters identifying the recipient. Completely invisible to readers, unlike ROT13 which is visibly scrambled.
    </p>
    <p>
      Homoglyph substitution: replacing Latin characters with visually identical characters from other Unicode blocks (Cyrillic 'а' replacing Latin 'a', for example). Used for domain squatting (punycode attacks) and bypassing content filters. Visually identical to readers but detectable by character-level analysis.
    </p>
    <p>
      ROT13's unique position: it is the only text transformation that is simultaneously obvious to technical readers (clearly encoded), reversible with a single shared tool, tradition-sanctioned by internet culture, and carries no negative connotations. It is the socially acceptable face of text obfuscation — used by convention, not deception.
    </p>

    <h2>Using ROT13 for Educational Cryptography Demonstrations</h2>
    <p>
      ROT13 is an ideal teaching tool for introducing cryptography concepts to beginners because its simplicity makes abstract concepts tangible. Starting with ROT13 and building toward modern cryptography creates a natural learning progression.
    </p>
    <p>
      Concept 1 — Encryption and decryption: ROT13 demonstrates that encryption is a reversible transformation and decryption is the reverse process. Students immediately understand that the ciphertext "Uryyb" is not the original data, and that the key (13) plus the algorithm (Caesar shift) together produce the decryption.
    </p>
    <p>
      Concept 2 — Key space and brute force: a Caesar cipher has 26 possible keys (ROT0 through ROT25). Brute force means trying all 26. Students can manually brute-force a short ROT13 ciphertext by trying each shift. This demonstrates why key space matters — modern AES has 2¹²⁸ possible keys, making brute force computationally impossible.
    </p>
    <p>
      Concept 3 — Frequency analysis: take a paragraph-length ROT13 text, count the frequency of each character, and compare against known English letter frequencies (E, T, A, O, I, N, S, H, R, D). The most frequent ciphertext letter should map to E, revealing the rotation. This demonstrates that linguistic patterns survive simple substitution — a key weakness that modern ciphers address through diffusion and confusion.
    </p>
    <p>
      Concept 4 — Symmetric vs asymmetric: ROT13 is symmetric — the same key (13) encodes and decodes. This contrasts with RSA's asymmetric approach where a public key encrypts and only the paired private key decrypts. Students who understand ROT13 can grasp why symmetric key exchange requires a secure channel, motivating the invention of public-key cryptography.
    </p>
    <p>
      Our ROT13 tool is suitable for classroom demonstrations: students paste text, see the output, recognize the scrambled pattern, and paste the output back to verify the self-inverse property. This hands-on experience makes cryptographic fundamentals memorable and intuitive.
    </p>

    <h2>ROT13 Encoding in File Formats and Data Systems</h2>
    <p>
      Beyond text and online communication, ROT13 has appeared in specific technical contexts as a light obfuscation layer within file formats and data systems.
    </p>
    <p>
      Configuration files: some legacy software stored sensitive-looking configuration values (passwords that were not actually secret, API keys for internal services) in ROT13 to prevent casual reading. The Microsoft .ini format has no encryption support — ROT13 was occasionally used to obscure passwords from over-the-shoulder viewers in a pre-security-conscious era. This practice is obsolete and insecure by modern standards.
    </p>
    <p>
      Software licensing: some legacy license key verification systems used ROT13 as part of a multi-step obfuscation to make reverse engineering slightly harder. Combined with base64 and custom character substitutions, ROT13 was one layer in a weak multi-layer obfuscation scheme. Again, this provided no real security against determined reverse engineers.
    </p>
    <p>
      Test data and fixtures: developers sometimes ROT13-encode personal or sensitive-looking data in test fixtures and seed files to prevent dummy data from looking like real data in version-controlled repositories. A seed file might contain ROT13-encoded fake email addresses ("grfg@rknzcyr.pbz" for "test@example.com") to make it clear the values are obfuscated and should not be used as real emails.
    </p>
    <p>
      Database stored procedures: a few legacy database systems have ROT13 implemented as a stored function for use in generating obfuscated output in reports — obscuring sensitive column values in read-only reports accessible to staff who should not see raw sensitive data but need to see that data exists. Our encoder and decoder handles any text you need to work with in these contexts.
    </p>

    <h2>ROT13 Frequency Analysis: Why It Fails Against Cryptanalysis</h2>
    <p>
      One of the most valuable educational aspects of ROT13 is demonstrating why simple substitution ciphers fail against frequency analysis — the most powerful classical cryptanalytic technique. Understanding this failure mode explains why modern ciphers are designed the way they are.
    </p>
    <p>
      In any sufficiently long English text, letters do not appear with equal frequency. The distribution is well-characterized: E appears approximately 12.7% of the time, T at 9.1%, A at 8.2%, O at 7.5%, I at 7.0%, N at 6.7%, S at 6.3%, H at 6.1%, R at 6.0%, D at 4.3%. The ten least common letters — Q, Z, J, X, K, V, W, Y, B, F — account for a combined 8.5% of letters.
    </p>
    <p>
      When you apply ROT13 to English text, the letter frequency distribution shifts by 13 positions but is otherwise preserved. E (the most common letter) becomes R. T becomes G. A becomes N. O becomes B. An attacker who intercepts ROT13 ciphertext and counts character frequencies will find that R appears most often, G second most often, N third most often, B fourth most often. Mapping these to E, T, A, O (the known English distribution) reveals the rotation is 13, breaking the cipher in seconds without any brute force.
    </p>
    <p>
      For longer texts (200+ characters), frequency analysis is essentially deterministic — the distribution matches the expected English frequencies closely enough to identify the rotation uniquely. For very short texts (under 20 characters), brute force is still trivial (25 rotations to try). ROT13 is breakable by either method in under a minute with no computing power.
    </p>
    <p>
      What modern ciphers do differently: AES uses multiple rounds of substitution, permutation, and mixing operations specifically designed to destroy statistical patterns in the plaintext. After AES encryption, ciphertext characters appear with equal frequency regardless of the plaintext's language or patterns — a property called "confusion and diffusion" (Claude Shannon's terms). ROT13 has confusion (substitution) but zero diffusion — patterns in the plaintext are fully preserved in the ciphertext.
    </p>

    <h2>ROT13 and Content Moderation: Practical Social Media Uses</h2>
    <p>
      Content moderation on social platforms and community forums has adopted ROT13 and similar techniques to allow communities to discuss sensitive, controversial, or disturbing content while respecting members who wish to avoid exposure. Understanding these use cases helps community managers and content creators use our tool effectively.
    </p>
    <p>
      Spoiler management in entertainment communities: r/gameofthrones during its original run, film subreddits during opening weekends, and book club forums regularly used ROT13 for plot discussions. The convention: post your discussion point, then encode the specific spoiler detail in ROT13. Readers who want to engage with the spoiler copy-decode it; others skip the ROT13 block. This allowed vibrant discussion threads without forcing all readers to encounter unwanted spoilers.
    </p>
    <p>
      Trigger warning content: communities discussing trauma, mental health, abuse, or disturbing historical events sometimes use ROT13 to hide the most graphic descriptions while allowing the discussion to proceed. The ROT13 encoding acts as an explicit trigger warning — readers must actively choose to decode, signaling awareness of the content type.
    </p>
    <p>
      Puzzle and alternate reality game (ARG) communities: ARG designers frequently embed ROT13 clues in forums, websites, and social media posts as puzzle elements. The ROT13 text is left visible, and players who recognize the pattern decode it as part of the game. Reddit's /r/SolveCult, /r/oddities, and various ARG subreddits frequently discuss ROT13 as a puzzle layer. Our encoder/decoder is the standard tool for checking potential ROT13 clues in these communities.
    </p>
    <p>
      Discord and Slack communities: many Discord servers use ROT13 bots (simple bots that respond to !rot13 text commands) to enable community members to encode and decode text within chat. Slack does not have a built-in ROT13 command, so Slack community managers point members to web tools like ours for occasional spoiler encoding. The friction of using an external tool versus a bot command slightly reduces ROT13 usage in Slack communities versus Discord.
    </p>

    <h2>Optimizing Your ROT13 Workflow for Repeated Use</h2>
    <p>
      For users who encode and decode ROT13 frequently — community moderators, ARG players, developers testing obfuscation code — an optimized workflow saves significant time compared to repeated copy-paste to a web tool.
    </p>
    <p>
      Browser bookmark with auto-focus: bookmark our ROT13 tool and add it to your browser's bookmark bar for one-click access. The text input auto-focuses on page load, so you can immediately start typing or paste with Ctrl+V after clicking the bookmark. Total time from intent to result: 2-3 seconds.
    </p>
    <p>
      Custom keyboard shortcuts: on macOS, you can create a system-wide text substitution that encodes ROT13 on a trigger. In System Settings → Keyboard → Text Replacements, add "rot13:" as a trigger and the ROT13 encoding of a common phrase as a replacement. For JavaScript developers, a bookmarklet provides ROT13 inline: create a bookmark with URL <code>javascript:void(prompt('ROT13:',prompt('Enter text:').replace(/[a-zA-Z]/g,c=&gt;String.fromCharCode((c&lt;='Z'?90:122)&gt;=(c=c.charCodeAt(0)+13)?c:c-26))))</code>.
    </p>
    <p>
      Terminal alias for power users: add to your .bashrc or .zshrc: <code>alias rot13="tr 'A-Za-z' 'N-ZA-Mn-za-m'"</code>. Then use: <code>echo "Hello World" | rot13</code> → "Uryyb Jbeyq". Or read from clipboard on macOS: <code>pbpaste | rot13 | pbcopy</code> (read clipboard, ROT13, write clipboard). This workflow enables ROT13 without opening a browser tab, ideal for terminal-centric developers.
    </p>
    <p>
      VS Code extension: the "ROT13" extension for VS Code adds a command palette entry (Ctrl+Shift+P → "Encode/Decode ROT13") that encodes or decodes selected text in-place. Ideal for developers who frequently work with ROT13 in test fixtures or code comments.
    </p>
    <p>
      Integration into writing workflows: authors and content creators who use ROT13 for workshop spoiler management can add a ROT13 keyboard shortcut to their writing tool. In Scrivener, custom macros can be created. In Ulysses or iA Writer, the terminal alias approach (clipboard-based) is most practical. In Google Docs, a Google Apps Script can be added to the document with a menu item for ROT13 encoding of selected text.
    </p>

    <h2>The Cultural Legacy of ROT13 in Hacker and Open Source Communities</h2>
    <p>
      ROT13 occupies a unique cultural position in the hacker and open-source community — a term of art recognized by virtually every programmer, an inside joke that doubles as a practical tool, and a touchstone for discussions about the difference between security and obfuscation. Its cultural significance extends well beyond its technical simplicity.
    </p>
    <p>
      The Jargon File (also known as "The Hacker's Dictionary"), compiled by Eric S. Raymond and a community of contributors, documented ROT13 extensively as part of hacker culture. The Jargon File defined ROT13 as "a simple caesar-cipher encryption that replaces each English letter with the one 13 places forward or back along the alphabet" and noted its primary use for "mildly offensive humor which some readers might want to avoid." The fact that ROT13 earned an entry in the definitive hacker cultural lexicon demonstrates its importance in the community's shared vocabulary.
    </p>
    <p>
      The GNU coreutils include rot13 as a command in some distributions, and the Python standard library's codecs module has rot_13 as a built-in codec alongside actual encoding standards like UTF-8 and base64. The inclusion of ROT13 in these foundational tools reflects its cultural significance — it was implemented not because it provides practical utility that could not be achieved otherwise, but because the community expected it to be there.
    </p>
    <p>
      Open-source software humor: ROT13 appears throughout open-source project humor. Readme files encode puns in ROT13. Code comments include ROT13 easter eggs. Variable names are sometimes ROT13 references to inside jokes. The Emacs text editor's Doctor mode (a Rogerian psychotherapy simulation) uses ROT13 internally for some response generation — an Easter egg baked into one of computing's most storied applications.
    </p>
    <p>
      Security culture: in the information security community, ROT13 is shorthand for "trivially weak security theater." Saying "this system uses ROT13-level security" is a damning indictment of an organization's security posture. The metaphor is universally understood: ROT13 as the benchmark of minimum possible security effort. This shared reference point allows security professionals to communicate clearly about security failures without technical jargon.
    </p>

    <h2>ROT13 Decoder and Encoder: Tips for Accurate Results</h2>
    <p>
      Our ROT13 tool handles the encoding and decoding automatically, but understanding the nuances of the encoding ensures you get accurate results for edge cases and unusual inputs.
    </p>
    <p>
      Character handling: our tool applies ROT13 to English alphabet characters (A-Z, a-z) only. All other characters — numbers, spaces, punctuation, emoji, accented characters, CJK characters — pass through unchanged. This is the standard ROT13 behavior as defined by convention. If you want to encode numbers, switch to ROT47 (available via the command line: tr '!-~' 'P-~!-O').
    </p>
    <p>
      Newline and whitespace preservation: line breaks, tabs, and multiple spaces in your input are preserved exactly in the output. This is important for encoding multi-paragraph text — each paragraph's structure is maintained. If you are encoding a poem or a numbered list, the line structure survives intact.
    </p>
    <p>
      Large text encoding: there is no practical size limit on text you can encode or decode with our tool. The encoding operates character by character in linear time, so very long texts (thousands of words) encode in milliseconds. For extremely large inputs (hundreds of thousands of characters), the paste and render steps may take a second, but the encoding itself is instant.
    </p>
    <p>
      Verification: because ROT13 is self-inverse, the simplest way to verify correct encoding is to encode the output again — if you get back the original text, the encoding was correct. Paste your ROT13 output back into the input field, encode again, and compare with your original text. Any discrepancy indicates a problem with the input (perhaps a copy-paste that truncated text, or a character encoding issue in the pasted text).
    </p>

    <h2>ROT13 vs Base64 vs URL Encoding: Choosing the Right Text Transformation</h2>
    <p>
      ROT13, base64, and URL encoding (percent-encoding) are all text transformations used to represent text in a different form. Each serves a different purpose, and choosing incorrectly creates compatibility problems or unnecessary complexity.
    </p>
    <p>
      ROT13: applies to human-readable text only. Output remains human-readable (mostly — it looks like scrambled English). Best for: spoiler hiding in text forums, educational cryptography demonstrations, cultural/community conventions. Use when: your audience is human, the content is English-language text, the goal is light optional obfuscation not security. Not for: binary data, machine-to-machine data transfer, security-sensitive content.
    </p>
    <p>
      Base64: encodes any binary data (including text encoded as bytes) to a safe ASCII character set. Output is not human-readable. Best for: embedding binary data in JSON, XML, or HTML; email attachments (MIME); data URLs (data:image/png;base64,...); encoding arbitrary bytes for safe transport over text-only protocols. Use when: data includes binary content (images, files), the output will be processed by a machine, or you need guaranteed safe transmission across text systems. Not for: human-readable spoilers — base64 output is obviously machine-encoded and provides no opt-in convention.
    </p>
    <p>
      URL encoding (percent-encoding): encodes special characters in URLs so they can be safely included in HTTP requests. Spaces become %20, ampersands become %26, equals signs become %3D. Best for: encoding query string parameters, encoding file names in URLs, form submission data. Use when: you are constructing URLs or HTTP requests and need to include arbitrary text in a URL component. Not for: general text obfuscation or binary data transport.
    </p>
    <p>
      Summary decision guide: for human text that needs opt-in viewing in an online community — ROT13. For binary or arbitrary data that needs to travel through text-only systems — base64. For text that needs to be safely embedded in a URL — URL encoding. Our tool handles ROT13; use our base64 encoder for base64 needs and our URL encoder for percent-encoding.
    </p>

    <h2>Quick Reference: ROT13 Alphabet Substitution Table</h2>
    <p>
      The complete ROT13 substitution mapping for quick reference. Each letter maps to the letter 13 positions ahead in the alphabet. Because of the self-inverse property, the mapping is bidirectional — the same table encodes and decodes:
    </p>
    <p>
      Uppercase: A↔N, B↔O, C↔P, D↔Q, E↔R, F↔S, G↔T, H↔U, I↔V, J↔W, K↔X, L↔Y, M↔Z. Lowercase: a↔n, b↔o, c↔p, d↔q, e↔r, f↔s, g↔t, h↔u, i↔v, j↔w, k↔x, l↔y, m↔z.
    </p>
    <p>
      Reading the table: to encode "Hello", find H→U, e→r, l→y, l→y, o→b → "Uryyb". To decode "Uryyb", apply the same table: U→H, r→e, y→l, y→l, b→o → "Hello". The identical forward and reverse operation is what makes ROT13 its own inverse. All numbers, spaces, punctuation, and characters outside A-Z and a-z remain unchanged through ROT13 encoding. Our online tool applies this mapping instantly to any length of text you paste into the input field.
    </p>
  </section>
);

export default async function Rot13EncoderPage() {
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
      <ToolPageShell tool={toolData} ui={<Rot13EncoderTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}

