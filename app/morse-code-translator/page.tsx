import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { MorseCodeTranslatorTool } from '@/components/tools/MorseCodeTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { MORSE_TABLE } from '@/lib/morse';

export const revalidate = 86400;

const toolSlug = 'morse-code-translator';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Morse Code Translator";
  const description = "Translate text to Morse code or decode Morse back to text.";
  const seoTitle = "Morse Code Translator - Encode and decode Morse";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is Morse code?',
    answer:
      'Morse code is a system that represents letters, numbers, and punctuation using short and long signals. In text form, those signals are written as dots and dashes. Each character has a unique pattern, which makes Morse usable across sound, light, and written formats.',
  },
  {
    category: 'General',
    question: 'Does this tool support both encoding and decoding?',
    answer:
      'Yes. You can switch between Text to Morse and Morse to Text. The output updates as you type, and validation helps you keep spacing and symbols consistent.',
  },
  {
    category: 'Encoding',
    question: 'How are letters separated in Morse?',
    answer:
      'Letters are separated by a single space in the output. For example, SOS is written as "... --- ...". This tool follows that convention so decoding remains reliable.',
  },
  {
    category: 'Encoding',
    question: 'How are words separated in Morse?',
    answer:
      'Words are separated by a slash or by two or more spaces. The encoder can add a slash automatically if you enable the option. The decoder accepts slashes, extra spaces, or line breaks as word boundaries.',
  },
  {
    category: 'Encoding',
    question: 'What happens to unsupported characters?',
    answer:
      'Unsupported characters are replaced with a question mark placeholder in the output. This makes it clear where the translation could not map a symbol. You can remove or edit those characters for cleaner output.',
  },
  {
    category: 'Decoding',
    question: 'What symbols are allowed when decoding?',
    answer:
      'Only dots, dashes, spaces, slashes, and line breaks are allowed. Any other character triggers a validation error. This keeps decoding predictable and reduces ambiguous results.',
  },
  {
    category: 'Decoding',
    question: 'Why do I see question marks after decoding?',
    answer:
      'Question marks appear when a Morse sequence does not match a known symbol. This often happens if spacing is inconsistent or if unsupported symbols are included. Normalize spacing and try again.',
  },
  {
    category: 'Decoding',
    question: 'Does decoding preserve letter case?',
    answer:
      'No. Morse code does not encode capitalization, so decoded text is returned in uppercase. You can adjust casing afterward with a case converter if needed.',
  },
  {
    category: 'Usage',
    question: 'Can I translate numbers?',
    answer:
      'Yes. Digits 0 through 9 are included in the map. They are encoded and decoded according to standard Morse conventions. You can mix numbers and letters in the same input.',
  },
  {
    category: 'Usage',
    question: 'Does the tool support punctuation?',
    answer:
      'Yes. Common punctuation such as period, comma, question mark, and exclamation point are included. The reference table lists all supported punctuation symbols.',
  },
  {
    category: 'Usage',
    question: 'Can I decode Morse with line breaks?',
    answer:
      'Yes. Line breaks are treated as word separators. This is helpful when Morse appears across multiple lines or in formatted text.',
  },
  {
    category: 'Usage',
    question: 'Does the tool generate audio or timing signals?',
    answer:
      'No. The tool outputs text-based Morse only. It does not generate audio tones or timing gaps. If you need audio output, use a dedicated Morse audio tool.',
  },
  {
    category: 'Spacing',
    question: 'Why is spacing so important in Morse?',
    answer:
      'Spacing separates letters and words. Without consistent spacing, multiple interpretations are possible. This tool enforces clear spacing rules so that encoding and decoding stay reliable.',
  },
  {
    category: 'Spacing',
    question: 'Can I use multiple spaces between letters?',
    answer:
      'No. Multiple spaces are treated as word separators. Letters should be separated by single spaces to avoid decoding errors. Use a slash or extra spaces only between words.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does the output look empty?',
    answer:
      'An empty output usually means the input is empty or invalid. When decoding, invalid symbols cause validation to fail. When encoding, unsupported characters may be replaced with placeholders, but the output should still appear if there are supported characters.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does decoding feel ambiguous?',
    answer:
      'Morse relies on spacing to separate letters. If spacing is inconsistent, the decoder has to guess boundaries, which can produce unexpected results. Normalize spacing or add slashes to clarify word breaks.',
  },
  {
    category: 'Learning',
    question: 'Is this tool good for learning Morse code?',
    answer:
      'Yes. The translator provides immediate feedback and a reference table, which makes practice easier. You can encode short phrases and decode them back to verify your understanding.',
  },
  {
    category: 'Learning',
    question: 'Does the tool include prosigns?',
    answer:
      'The tool focuses on letters, numbers, and common punctuation. Some prosigns are not included. If you need custom symbols, you can extend the map in code.',
  },
  {
    category: 'Privacy',
    question: 'Does the tool store my text?',
    answer:
      'No. Translation happens in the browser and is not sent to a server. There is no storage of input or output. You can clear the input at any time.',
  },
  {
    category: 'Privacy',
    question: 'Can I use this for sensitive messages?',
    answer:
      'Yes, as long as your local device is secure and your organization allows it. The tool does not transmit your text, but your clipboard and device security still matter.',
  },
  {
    category: 'Compatibility',
    question: 'Does it work on mobile browsers?',
    answer:
      'Yes. The interface is responsive and works well on mobile devices. Large inputs may be slower on older phones, but typical messages translate quickly.',
  },
  {
    category: 'Compatibility',
    question: 'Can I copy the output into other tools?',
    answer:
      'Yes. The output is plain text using dots, dashes, spaces, and slashes. This makes it easy to paste into documents, puzzles, or other Morse utilities.',
  },
  {
    category: 'Best practices',
    question: 'What is the best format for sharing Morse?',
    answer:
      'Use single spaces between letters and a slash or double space between words. This is the clearest format for humans and machines. Avoid irregular spacing to reduce ambiguity.',
  },
  {
    category: 'Best practices',
    question: 'Should I keep punctuation when encoding?',
    answer:
      'Keep punctuation only if it is supported by the map. If your message is simple, removing punctuation can make Morse output cleaner. If punctuation matters, check the reference table first.',
  },
  {
    category: 'Accuracy',
    question: 'How can I verify a translation?',
    answer:
      'Use the reference table to spot-check a few characters. For example, A should be ".-" and N should be "-.". For decoding, verify that the spacing between letters and words is consistent.',
  },
  {
    category: 'Accuracy',
    question: 'Does the tool follow standard Morse conventions?',
    answer:
      'Yes. The map uses standard Morse code for letters, numbers, and common punctuation. Word separation follows common text-based conventions using slashes or extra spaces.',
  },
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Morse Code Translator - Text to Morse and Morse to Text</h2>
      <h2>Introduction</h2>
      <p>
        This guide explains how Morse code works, how to encode and decode it reliably, and how to use spacing conventions to avoid ambiguity.
        The Morse Code Translator on gptcleanuptools.com supports text to Morse and Morse to text translation. It handles letters, numbers, and
        common punctuation while keeping the output easy to copy and reuse. The tool runs in your browser and does not store your input.
      </p>

      <h2>What Is Morse Code?</h2>
      <p>
        Morse code represents letters and numbers with patterns of short and long signals. In text form, those signals are written as dots and
        dashes. Each character has a unique pattern, such as A being ".-" and N being "-.". Morse was designed for telegraphy but remains a
        useful encoding method in education, puzzles, and signaling contexts.
      </p>
      <p>
        The key to Morse is timing and spacing. In audio, the length of a dot is the unit and a dash is three units. In text, timing is replaced
        by spaces and separators. A single space separates letters. A slash or extra spaces separate words. If spacing is inconsistent, decoding
        becomes ambiguous. That is why the translator enforces clear spacing rules.
      </p>
      <p>
        Morse code does not encode capitalization. It also does not inherently include spaces, which is why text-based conventions are essential.
        When you use a translator, you are relying on consistent separators to represent gaps in time. This tool follows common conventions to
        keep translations reliable for both humans and machines.
      </p>
      <p>
        Another important point is that Morse is sequential. There is no fixed character length, so the speed of transmission depends on the
        timing rules and the spacing between symbols. In text form, this means you should keep the output readable and consistent. Long blocks of
        Morse are easier to understand when you preserve word separators and avoid extra whitespace.
      </p>
      <p>
        If you are new to Morse, start with familiar letters like E, T, A, and N. These have short patterns and help you build recognition
        quickly. Once you are comfortable, add more letters, digits, and punctuation. The translator is useful at every stage because it gives
        immediate feedback without requiring memorization.
      </p>

      <h2>Why This Tool Matters</h2>
      <p>
        A reliable Morse code translator saves time and reduces ambiguity. When you need to convert text to Morse or Morse to text, consistent
        spacing is critical. This tool applies clear spacing rules for letters and words so the output stays readable and decodable. That makes
        it useful for learning, puzzles, documentation, and quick verification.
      </p>
      <p>
        Many online examples of Morse use inconsistent separators. A dedicated text to Morse tool removes that inconsistency and makes results
        predictable. The translator also validates decoding input, which prevents subtle errors when a dash character or symbol is not valid
        Morse. This protects the accuracy of your message.
      </p>
      <p>
        Consistent translation is also helpful in collaboration. If you send Morse to someone else or include it in a worksheet, you want the
        spacing to match common conventions. This tool ensures that each output follows the same rules every time.
      </p>

      <h2>How the Translator Works (Step by Step)</h2>
      <p>
        When encoding, the tool maps each supported character to its dot and dash pattern. Letters are separated by a single space, and words
        are separated by a slash or multiple spaces depending on your option. Unsupported characters are replaced with a question mark
        placeholder so you can find and fix them.
      </p>
      <p>
        When decoding, the tool checks that the input includes only dots, dashes, spaces, slashes, and line breaks. It then splits words by
        slashes or multiple spaces and splits letters by single spaces. Each sequence is mapped back to a character. Unknown sequences are
        replaced with question marks to avoid misleading output.
      </p>
      <p>
        This workflow is deterministic. The same input always produces the same output. It does not connect to external services, and it does
        not generate or alter content beyond the Morse mapping rules.
      </p>

      <h2>Encoding Rules and Spacing</h2>
      <p>
        When encoding text to Morse, each supported character is replaced by its dot and dash pattern. Letters are separated by a single space.
        Words are separated by a slash or multiple spaces. The translator lets you choose whether to include the slash automatically, which is a
        common convention in written Morse.
      </p>
      <p>
        Unsupported characters are replaced with a question mark placeholder. This is intentional, as it alerts you to symbols that are not in
        the map. If you need a clean Morse output, remove or replace unsupported characters. For example, emojis or uncommon punctuation should
        be removed or replaced before encoding.
      </p>
      <p>
        If you plan to decode the output later, keep the spacing consistent. A message with clear separators is much easier to decode accurately.
        This is especially important for long phrases where a missing space can shift the interpretation of the entire message.
      </p>

      <h2>Decoding Rules and Ambiguity</h2>
      <p>
        Decoding requires clear separators. The tool splits words by slashes, double spaces, or line breaks. It splits letters by single spaces.
        If the input uses irregular spacing, the decoder may return question marks or unexpected letters. Normalizing the spacing is the best way
        to fix decoding issues.
      </p>
      <p>
        Ambiguity is the biggest challenge in Morse decoding. A sequence of dots and dashes can represent different letters depending on where
        the boundaries are. For example, "...." can be H, but it could also be two Es or an E followed by a letter if spacing is missing. The
        tool assumes standard spacing so it can decode reliably, but it cannot guess missing separators.
      </p>
      <p>
        Another limitation is capitalization. Since Morse does not represent case, decoded output is returned in uppercase. You can apply your
        preferred casing afterward. If you want sentence case or title case, you can use the Case Converter tool on the output.
      </p>

      <h2>Morse Alphabet Reference Table</h2>
      <p>
        This table lists the supported Morse symbols. It includes A-Z, 0-9, and common punctuation such as period, comma, question mark, and
        exclamation. Use it to verify output or to learn the patterns for frequent letters.
      </p>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Morse</th>
          </tr>
        </thead>
        <tbody>
          &#123;MORSE_TABLE.map((row) => (
            <tr key={row.symbol}>
              <td>&#123;row.symbol&#125;</td>
              <td>&#123;row.code&#125;</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        If you see a symbol in your input that is not listed here, it will be replaced with a question mark during encoding. This keeps the
        output honest and prevents silent mistakes.
      </p>

      <h2>Examples and Practical Tips</h2>
      <p>
        Example 1: SOS becomes "... --- ...". Each letter is separated by a single space. Example 2: "MEET ME" becomes "-- . . - / -- ."
        when using a slash to separate words. These examples show how spacing controls the structure of the message.
      </p>
      <p>
        Example 3: "CALL 911" becomes "-.-. .- .-.. .-.. / ----. .---- .----". Notice how digits have longer patterns. Numbers are supported
        by default, so you can encode phone numbers, codes, and short numeric messages.
      </p>
      <p>
        If you want to build your own encoder, the mapping logic is straightforward. Split text into words, map each character to Morse, and join
        letters with single spaces. Then join words with a slash or double space. This keeps the output consistent and easy to decode later.
      </p>
      <pre>
        <code>{`const encode = (text, map) =>
  text.trim().split(/\\s+/).map(word =>
    word.split('').map(ch => map[ch.toUpperCase()] || '?').join(' ')
  ).join(' / ');`}</code>
      </pre>
      <p>
        If you receive Morse text from another source, normalize it before decoding. Replace multiple spaces with a slash or consistent double
        spaces, and ensure that only dots, dashes, and separators remain. This reduces ambiguity and improves decoding accuracy.
      </p>

      <h2>Common Mistakes and Fixes</h2>
      <p>
        The most common mistake is inconsistent spacing. If letters are separated by multiple spaces, the decoder will treat them as word
        boundaries. If words are separated by single spaces, the decoder will merge words into one. The fix is simple: use single spaces between
        letters and a slash or double space between words.
      </p>
      <p>
        Another mistake is using a long dash character instead of the standard hyphen minus. Some fonts and editors replace hyphens with en or
        em dashes, which are not valid Morse symbols. The decoder rejects those characters. If decoding fails, replace long dashes with a
        standard hyphen.
      </p>
      <p>
        Unsupported symbols are also a frequent issue. Emojis, extended punctuation, and accents are not included in the standard map. When
        encoding, replace those characters with supported alternatives or remove them. This keeps the output clean and reduces the need for
        manual corrections later.
      </p>
      <p>
        Another source of confusion is the slash separator. Some references use a slash for word breaks, while others rely on extra spaces. This
        tool supports both, but it expects consistent usage within a message. Pick one method and stick to it, especially when you plan to share
        the output with others.
      </p>

      <h2>Troubleshooting Checklist</h2>
      <ul>
        <li>Confirm you are using only dots, dashes, spaces, slashes, or line breaks.</li>
        <li>Use single spaces between letters and slashes or double spaces between words.</li>
        <li>Replace long dash characters with a standard hyphen.</li>
        <li>Remove unsupported symbols or replace them with supported characters.</li>
      </ul>
      <p>
        If decoding still looks wrong, copy the input into a plain text editor and reapply consistent spacing. Small formatting changes can
        dramatically improve accuracy. The decoder is strict by design so you can trust the output when the input is clean.
      </p>

      <h2>Timing Notes and Prosigns</h2>
      <p>
        In audio Morse, dots and dashes have timing rules that control spacing between signals, letters, and words. A dash is three times the
        length of a dot. Letters are separated by a gap of three dot units, and words by a gap of seven dot units. Text-based Morse does not
        include timing, but the spacing conventions mirror those timing gaps.
      </p>
      <p>
        Prosigns are special sequences that represent procedural signals like "end of message" or "understood." They are often written without
        letter spacing to indicate a single combined meaning. This tool focuses on letters, digits, and punctuation, so prosigns are not
        explicitly included. If you need prosigns, you can extend the map in code and treat them as custom tokens.
      </p>
      <p>
        Understanding timing rules is useful even when you use text-based Morse. It explains why single spaces represent letters and why longer
        gaps represent words. If you plan to transmit Morse by sound or light, use a dedicated timing tool, but keep spacing consistent in text
        to preserve the same structure.
      </p>

      <h2>Formatting for Sharing and Archiving</h2>
      <p>
        When sharing Morse in documents or emails, clarity is more important than speed. Use a consistent separator, avoid extra whitespace,
        and keep line lengths reasonable so the output does not wrap in confusing ways. A slash is a clear visual word break in most fonts,
        which is why it is often used for written Morse.
      </p>
      <p>
        If you archive Morse messages, store both the Morse output and the decoded plain text. This makes it easier to verify accuracy later
        and prevents misinterpretation if formatting changes in the future. A short note about the separator style can also help others decode
        the message correctly.
      </p>
      <p>
        Rich text editors can introduce unwanted changes, such as replacing hyphens with long dashes or collapsing multiple spaces. If you are
        pasting Morse into a document, consider using a plain text editor or a monospaced font to preserve spacing. Consistent formatting keeps
        the message readable for both humans and automated decoders.
      </p>

      <h2>Common Use Cases</h2>
      <p>
        Morse code is still used in education and hobbyist communities. Students use it to learn about encoding and signal timing. Puzzle
        creators use it for hidden messages. Radio and signaling enthusiasts use it for light or sound communication. A text-based translator
        makes it easy to practice without memorizing the entire map.
      </p>
      <p>
        The translator is also useful for quick decoding when Morse appears in documentation or trivia. Instead of decoding by hand, you can
        paste the sequence and get a readable output in seconds. For educators, it provides a fast way to generate practice materials.
      </p>
      <p>
        In professional contexts, Morse may appear in accessibility demos or emergency signaling training. The translator can help create
        consistent examples and verify that encoded phrases are correct before sharing them.
      </p>

      <h2>Professional and Hobbyist Use Cases</h2>
      <h3>Education and training</h3>
      <p>
        Teachers and trainers use a Morse code translator to create exercises quickly and to verify student work. By keeping spacing consistent,
        the tool ensures that learners focus on the code itself rather than on formatting quirks. It also makes it easy to generate answer keys.
      </p>
      <h3>Radio and signaling hobbyists</h3>
      <p>
        Morse is still used in amateur radio and signal practice. Translating text to Morse helps hobbyists build practice messages and decode
        sample transmissions. While this tool does not generate audio, the text output can be used alongside timing tools for practice sessions.
      </p>
      <h3>Puzzles and creative projects</h3>
      <p>
        Puzzle creators use Morse for hidden messages, scavenger hunts, and themed content. A reliable text to Morse converter makes it easy to
        embed messages without introducing spacing errors. The decoder is also useful for checking solutions during playtesting.
      </p>

      <h2>Teaching and Practice Workflows</h2>
      <p>
        For classrooms or self-study, start with a small set of letters and build up. Encode short words like "HI" or "SOS" and decode them back
        to verify accuracy. The reference table helps learners recognize common patterns and reinforces the dot-dash mapping.
      </p>
      <p>
        Another effective exercise is dictation. Write a short Morse sequence, decode it with the tool, and compare the result with your
        expectation. This highlights where spacing or symbol errors occur. Over time, learners develop intuition for common patterns and build
        confidence in both encoding and decoding.
      </p>
      <p>
        If you are creating printed materials, choose a consistent word separator. Many worksheets use a slash because it is visually distinct.
        Use the same separator in the tool so students see the same convention in both directions.
      </p>

      <h2>Why Use an Online Translator Instead of Manual Encoding</h2>
      <p>
        Manual encoding is slow and error-prone, especially for longer phrases. It is easy to forget a dash or to misplace a space between
        letters. An online Morse code translator applies the same rules consistently every time, which reduces mistakes and saves time when you
        are working with multiple messages.
      </p>
      <p>
        Manual decoding is also challenging because spacing decisions can change the meaning. The translator enforces clear boundaries so you
        can focus on the message rather than on format. This is useful for students, hobbyists, and anyone who needs quick verification.
      </p>
      <p>
        The tool is also convenient for switching directions. You can encode a phrase, then switch to decode mode to verify the result. That
        round-trip check is a simple way to confirm correctness without additional tools.
      </p>

      <h2>International Variants and Symbols</h2>
      <p>
        Morse code has international variants for accented letters and language-specific characters. This tool focuses on the most common
        Latin alphabet characters, digits, and punctuation used in English-language contexts. If you need extended characters, you can translate
        them manually or extend the map in your own code.
      </p>
      <p>
        Punctuation coverage is intentionally limited to symbols that are commonly used in everyday messages. Rare symbols and decorative
        characters are not included because they are uncommon in standard Morse training. If your message depends on a specific symbol, verify
        that it appears in the reference table before encoding.
      </p>
      <p>
        When working across languages, consider translating the text to a supported character set first. This ensures that encoding is
        consistent and that recipients can decode the output without ambiguity. A clean, predictable character set leads to more reliable Morse
        output and fewer placeholders.
      </p>

      <h2>Accessibility and Communication Notes</h2>
      <p>
        Morse is often used in accessibility and emergency communication demos. Clear spacing and predictable formatting help readers interpret
        the output correctly. When sharing Morse in written form, use a consistent separator and avoid unusual characters that could confuse
        readers or screen readers.
      </p>
      <p>
        If you are using Morse for visual signaling, remember that timing and spacing are part of the message. This tool does not generate
        timing, but it does provide a clean text representation you can use as a source. Pair it with a timing tool or a practice app if you
        need audio or light-based output.
      </p>
      <p>
        For printed materials, choose fonts where dots and dashes are clearly distinct and avoid stylized punctuation. Simple formatting makes
        the code easier to scan and reduces the chance of misreading a dash as a minus sign or vice versa. Consistent spacing supports both
        human readers and automated decoders.
      </p>

      <h2>What This Tool Does NOT Do</h2>
      <ul>
        <li>It does not generate audio tones or timing signals.</li>
        <li>It does not decode from audio or light input.</li>
        <li>It does not support every international prosign by default.</li>
        <li>It does not connect to external services or AI providers.</li>
      </ul>
      <p>
        This is a text-based Morse code translator. It focuses on clear encoding and decoding with standard symbols. If you need audio playback
        or signal timing, use a dedicated Morse audio tool and keep the text spacing conventions consistent with the output here.
      </p>

      <h2>Limits and Performance Notes</h2>
      <p>
        The translator is designed for typical messages and educational use. Very long inputs can still be processed, but large blocks of Morse
        text are harder to review visually and more prone to spacing errors. If you are working with long passages, consider splitting them into
        smaller sections and decoding them in batches.
      </p>
      <p>
        The tool runs entirely in the browser, so performance depends on your device. On older phones or low-memory machines, large inputs may
        feel slower. Keeping inputs concise and using clear separators will improve both speed and accuracy.
      </p>

      <h2>Privacy and Security Notes</h2>
      <p>
        Translation runs entirely in your browser. The tool does not send text to a server and does not store input or output. This makes it
        suitable for personal messages and internal workflows where privacy matters.
      </p>
      <p>
        If your content is sensitive, remember that your clipboard and device security still matter. Clear the input when you are done and avoid
        sharing output unless it is intended to be public. The tool keeps processing local so you remain in control of your data.
      </p>

      <h2>Final Summary and When to Use This Tool</h2>
      <p>
        The Morse Code Translator provides a fast way to convert text to Morse code and decode Morse back to text. It supports letters, numbers,
        and common punctuation with consistent spacing rules. Because it runs locally in the browser, it is quick and private.
      </p>
      <p>
        Use this tool when you need a reliable text to Morse converter, a Morse to text decoder, or a clean reference table for learning and
        teaching. It is especially useful for short messages, puzzles, and classroom exercises where clarity matters.
      </p>
      <p>
        For longer passages, break text into sentences, keep spacing consistent, and scan the decoded output for errors before you share it. The
        translator favors readable output over clever shortcuts, which makes it dependable for study notes, practice drills, and field use.
      </p>
      <p>
        Because the reference table is included on the same page, you can verify individual symbols while you translate. This makes the tool
        useful not only for conversion but also for quick study and spot checks when you are learning Morse code patterns.
      </p>
    </div>
  </section>
);

export default async function MorseCodeTranslatorPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
  };
  const __rating = { offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell
        tool=&#123;&#123; ...toolData, title, shortDescription: description &#125;&#125;
        ui=&#123;<MorseCodeTranslatorTool />&#125;
        related=&#123;<RelatedTools currentSlug={toolData.slug} />&#125;
      >
        &#123;writeUp&#125;
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Morse Code Translator FAQ</h2>
          <p className="text-slate-700">
            Answers about Morse formatting, spacing rules, supported characters, and decoding accuracy.
          </p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
