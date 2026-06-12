import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { TextToHexTool } from '@/components/tools/TextToHexTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';


const toolSlug = 'text-to-hex';

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Text to HEX Converter";
  const description = "Convert text characters into hexadecimal representation. Supports UTF-8 encoding with uppercase/lowercase and spacing options.";
  const seoTitle = undefined;
  
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
    question: 'What does the Text to HEX Converter do?',
    answer:
      'This tool converts text characters into their hexadecimal (hex) representation. Each character is converted to its corresponding hex value based on character encoding (typically UTF-8). The output shows the hex codes for each character, making it useful for debugging, encoding analysis, data transmission, and understanding how text is represented at the byte level.',
  },
  {
    category: 'General',
    question: 'How is my text processed?',
    answer:
      'All conversion happens entirely in your browser. No text is sent to servers, stored, or logged. Each character is converted to its hexadecimal representation using JavaScript character encoding functions. The output appears instantly, and when you close the page or clear the input, all data is removed from memory.',
  },
  {
    category: 'General',
    question: 'Is this tool free to use?',
    answer:
      'Yes, the Text to HEX Converter is completely free with no registration, subscriptions, or usage limits. You can convert as much text as needed without restrictions.',
  },
  {
    category: 'Usage',
    question: 'What character encoding does it use?',
    answer:
      'The tool uses UTF-8 encoding, which is the standard encoding for modern text. UTF-8 can represent any Unicode character, including ASCII characters (which use single bytes) and international characters (which may use multiple bytes). Each character is converted to its UTF-8 byte representation in hexadecimal.',
  },
  {
    category: 'Usage',
    question: 'How do I choose uppercase or lowercase hex?',
    answer:
      'You can toggle between uppercase and lowercase hex output using the "Uppercase hex" checkbox. Uppercase (A-F) is common in some contexts, while lowercase (a-f) is preferred in others. Both represent the same values—the choice is purely stylistic and depends on your preference or requirements.',
  },
  {
    category: 'Usage',
    question: 'What does "Space-separated output" do?',
    answer:
      'When enabled, each hex byte is separated by a space, making the output easier to read and parse. For example, "Hello" becomes "48 65 6C 6C 6F" instead of "48656C6C6F". When disabled, hex values are concatenated without spaces, creating a continuous string. Choose based on whether you need readability or compactness.',
  },
  {
    category: 'Usage',
    question: 'Can I convert special characters or emojis?',
    answer:
      'Yes, UTF-8 encoding supports all Unicode characters including special characters, emojis, and international text. These characters may use multiple bytes, so they will appear as multiple hex values in the output. For example, an emoji might be represented as several hex bytes in sequence.',
  },
  {
    category: 'Usage',
    question: 'How are multi-byte characters handled?',
    answer:
      'Characters that require multiple bytes in UTF-8 (such as emojis or non-ASCII characters) are converted byte-by-byte. Each byte is represented as a two-digit hex value. The output shows all bytes in sequence, so a single character might produce multiple hex values. This is correct behavior for UTF-8 encoding.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between ASCII and UTF-8?',
    answer:
      'ASCII is a 7-bit encoding that represents 128 characters (letters, numbers, basic punctuation). UTF-8 is a variable-length encoding that extends ASCII and can represent any Unicode character. ASCII characters (0-127) use one byte in UTF-8, while other characters may use 2-4 bytes. The tool uses UTF-8 to handle all modern text, including international characters.',
  },
  {
    category: 'Technical',
    question: 'How does character-to-hex conversion work?',
    answer:
      'Each character has a Unicode code point (a numeric value). The tool converts this code point to its UTF-8 byte representation, then converts each byte to hexadecimal. For ASCII characters, this is straightforward (one byte, two hex digits). For multi-byte characters, each byte is converted separately, producing multiple hex values per character.',
  },
  {
    category: 'Technical',
    question: 'Why do some characters produce multiple hex bytes?',
    answer:
      'UTF-8 uses variable-length encoding. ASCII characters (like A-Z, 0-9) use one byte. International characters, emojis, and symbols may use 2-4 bytes depending on their Unicode code point. Each byte is converted to hex separately, so a single character can produce 2, 4, 6, or 8 hex digits (1-4 bytes).',
  },
  {
    category: 'Technical',
    question: 'What is the relationship between hex and bytes?',
    answer:
      'Hexadecimal is a base-16 number system that represents bytes (8-bit values) as two hex digits. Each byte can have values from 0-255, which in hex is 00-FF. Two hex digits represent one byte. For example, the letter "A" (ASCII 65) is represented as the byte 0x41 in hex, which is "41" in the output.',
  },
  {
    category: 'Technical',
    question: 'Can I convert the hex back to text?',
    answer:
      'Yes, hex-to-text conversion is possible if you have the hex values. You would need to group the hex digits into bytes (two digits each), convert each byte to its decimal value, then decode the UTF-8 byte sequence back to characters. Some tools can perform this reverse conversion automatically.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does the output look longer than expected?',
    answer:
      'The hex representation is longer than the original text because each character is converted to one or more bytes, and each byte is represented as two hex digits. For example, "Hello" (5 characters) becomes "48 65 6C 6C 6F" (15 characters with spaces, or 10 without). Multi-byte characters produce even longer hex strings.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why are some characters producing unexpected hex values?',
    answer:
      'Different characters have different Unicode code points, which translate to different hex values. Special characters, accented letters, or emojis will produce different hex sequences than basic ASCII letters. This is normal and reflects how UTF-8 encodes various character types. Verify the character encoding if you need specific byte patterns.',
  },
  {
    category: 'Troubleshooting',
    question: 'How do I verify the conversion is correct?',
    answer:
      'You can verify by converting a known character and checking its hex value against a reference. For example, "A" should convert to "41" (uppercase) or "41" (lowercase) in hex. You can also use a hex-to-text converter to reverse the process and confirm the output matches your original input.',
  },
  {
    category: 'Privacy',
    question: 'Is my text stored or transmitted?',
    answer:
      'No. All processing occurs locally in your browser. No data is sent to servers, stored in databases, or transmitted over the network. Your text remains on your device throughout the conversion process. This makes the tool suitable for sensitive or confidential information.',
  },
  {
    category: 'Privacy',
    question: 'Can I use this for confidential data?',
    answer:
      'Yes, as long as your local environment is secure. The tool does not transmit data, but you should still follow your organization policies for handling sensitive information. Clear the input when finished if using a shared device. The tool itself provides privacy, but device security remains your responsibility.',
  },
  {
    category: 'Best Practices',
    question: 'How should I format text for conversion?',
    answer:
      'Use plain text without special formatting or hidden characters for best results. The tool handles any text, but clean input produces cleaner output. Remove HTML tags, markup, or formatting codes before conversion if you want to convert only the visible text content.',
  },
  {
    category: 'Best Practices',
    question: 'When should I use space-separated vs continuous hex?',
    answer:
      'Use space-separated hex when you need readability, debugging, or manual parsing. Use continuous hex when you need compact output, are copying to systems that expect no spaces, or are working with hex strings in code. The choice depends on your specific use case and downstream processing requirements.',
  },
  {
    category: 'Applications',
    question: 'Can I use this for debugging text encoding issues?',
    answer:
      'Yes, text-to-hex conversion is useful for debugging encoding problems. You can see exactly how characters are represented at the byte level, identify encoding mismatches, or verify that special characters are encoded correctly. This helps diagnose issues with character display, data transmission, or encoding compatibility.',
  },
  {
    category: 'Applications',
    question: 'Is this suitable for data transmission or APIs?',
    answer:
      'Hex representation is sometimes used in data transmission, APIs, or protocols that require text to be represented as hexadecimal strings. However, most modern systems use base64 or other encodings for this purpose. Check your specific requirements—hex conversion may be needed for certain protocols or legacy systems.',
  },
  {
    category: 'Applications',
    question: 'Can I use this for learning about character encoding?',
    answer:
      'Absolutely. Converting text to hex helps you understand how characters are represented at the byte level, how UTF-8 encoding works, and how different character types use different numbers of bytes. This is educational for learning about encoding, Unicode, and low-level text representation.',
  },
  {
    category: 'Limitations',
    question: 'What are the limitations of this tool?',
    answer:
      'The tool focuses on UTF-8 text-to-hex conversion. It does not perform reverse conversion (hex to text), handle other encodings like UTF-16 or Latin-1, or provide byte-level analysis beyond hex representation. Very long texts may take a moment to process, but there are no hard limits on input length.',
  },
  {
    category: 'Limitations',
    question: 'Does it support other number bases or encodings?',
    answer:
      'No, this tool specifically converts text to hexadecimal using UTF-8 encoding. It does not support binary, octal, decimal, or other number bases. It also does not support alternative encodings like UTF-16, Latin-1, or Windows-1252. For those needs, use specialized conversion tools.',
  },
  {
    category: 'Compatibility',
    question: 'Does it work on mobile devices?',
    answer:
      'Yes, the tool is fully responsive and works on smartphones and tablets. The interface adapts to smaller screens, and all features function on mobile browsers. You can convert text to hex on any device with a modern web browser.',
  },
  {
    category: 'Compatibility',
    question: 'Can I use the output with programming languages or tools?',
    answer:
      'Yes, hex strings are commonly used in programming. Most languages can parse hex strings, whether space-separated or continuous. The output format (uppercase/lowercase, spacing) can be adjusted to match your programming language conventions or tool requirements.',
  },
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 space-y-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2 className="text-2xl font-semibold text-slate-900">Text to HEX Converter: Complete Guide to Hexadecimal Text Encoding</h2>
      
      <p className="text-slate-700">
        Converting text to hexadecimal (hex) representation reveals how characters are encoded at the byte level. This conversion is 
        essential for debugging encoding issues, understanding data representation, working with low-level protocols, and learning how 
        computers store and transmit text. This guide explains how text-to-hex conversion works, the relationship between characters and 
        bytes, and how to use online converters effectively for various technical and educational purposes.
      </p>

      <p className="text-slate-700">
        Hexadecimal is a base-16 number system that represents bytes (8-bit values) as two-digit codes using 0-9 and A-F. Each character 
        in text is encoded as one or more bytes, and each byte is represented as two hex digits. Understanding this relationship helps 
        you work with encoding, debugging, data analysis, and low-level text processing.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">What Is Hexadecimal?</h3>
      <p className="text-slate-700">
        Hexadecimal (often shortened to "hex") is a base-16 number system that uses 16 symbols: 0-9 for values zero through nine, and 
        A-F (or a-f) for values ten through fifteen. Each hex digit represents four bits, and two hex digits represent one byte (8 bits). 
        This makes hex a convenient way to represent binary data in human-readable form.
      </p>
      <p className="text-slate-700">
        For example, the decimal number 65 (which represents the letter "A" in ASCII) is 41 in hexadecimal. The hex value "41" means 
        4×16 + 1 = 65 in decimal. This compact representation makes it easier to work with byte-level data than binary (base-2) or 
        decimal (base-10) systems.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Character Encoding: ASCII vs UTF-8</h3>
      <p className="text-slate-700">
        Understanding character encoding is crucial for text-to-hex conversion. The two most common encodings are ASCII and UTF-8:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>ASCII (American Standard Code for Information Interchange):</strong> A 7-bit encoding that represents 128 characters using single bytes. It covers English letters, numbers, and basic punctuation. ASCII characters have values 0-127, which in hex are 00-7F.</li>
        <li><strong>UTF-8 (Unicode Transformation Format 8-bit):</strong> A variable-length encoding that extends ASCII and can represent any Unicode character. ASCII characters (0-127) use one byte, while other characters use 2-4 bytes depending on their Unicode code point.</li>
      </ul>
      <p className="text-slate-700">
        Modern text-to-hex converters typically use UTF-8 because it supports all modern text, including international characters, emojis, 
        and special symbols. This means ASCII characters produce single-byte hex values, while other characters may produce multi-byte sequences.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">How Text-to-Hex Conversion Works</h3>
      <p className="text-slate-700">
        The conversion process involves several steps:
      </p>
      <ol className="list-inside list-decimal space-y-2 text-slate-700">
        <li><strong>Character identification:</strong> Each character in the input text is processed individually.</li>
        <li><strong>Code point lookup:</strong> The character's Unicode code point (numeric value) is determined.</li>
        <li><strong>UTF-8 encoding:</strong> The code point is encoded into UTF-8 bytes according to UTF-8 rules.</li>
        <li><strong>Byte-to-hex conversion:</strong> Each byte is converted to its hexadecimal representation (two hex digits per byte).</li>
        <li><strong>Output formatting:</strong> Hex values are formatted with optional spacing and case (uppercase/lowercase).</li>
      </ol>
      <p className="text-slate-700">
        For example, the letter "H" has Unicode code point 72 (decimal) or 48 (hex). In UTF-8, this is encoded as a single byte: 0x48. 
        The letter "é" has code point 233 (decimal) or E9 (hex), which in UTF-8 is encoded as two bytes: 0xC3 0xA9, producing "C3 A9" in hex output.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Byte-Level Examples</h3>
      <p className="text-slate-700">
        Understanding byte-level representation helps interpret hex output:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border border-slate-300">
          <thead className="bg-slate-100">
            <tr>
              <th className="border border-slate-300 px-4 py-2 text-left">Character</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Unicode Code Point</th>
              <th className="border border-slate-300 px-4 py-2 text-left">UTF-8 Bytes</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Hex Output</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="border border-slate-300 px-4 py-2 font-mono">A</td>
              <td className="border border-slate-300 px-4 py-2">65 (0x41)</td>
              <td className="border border-slate-300 px-4 py-2">1 byte: 0x41</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">41</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2 font-mono">é</td>
              <td className="border border-slate-300 px-4 py-2">233 (0xE9)</td>
              <td className="border border-slate-300 px-4 py-2">2 bytes: 0xC3 0xA9</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">C3 A9</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2 font-mono">??</td>
              <td className="border border-slate-300 px-4 py-2">128640 (0x1F680)</td>
              <td className="border border-slate-300 px-4 py-2">4 bytes: 0xF0 0x9F 0x98 0x80</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">F0 9F 98 80</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2 font-mono">Hello</td>
              <td className="border border-slate-300 px-4 py-2">Multiple</td>
              <td className="border border-slate-300 px-4 py-2">5 bytes</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">48 65 6C 6C 6F</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-700">
        This table shows how different character types produce different hex representations. ASCII characters use one byte, accented 
        characters use two bytes, and emojis use four bytes in UTF-8 encoding.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">UTF-8 Encoding Rules</h3>
      <p className="text-slate-700">
        UTF-8 uses variable-length encoding with specific rules:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>1-byte characters (ASCII):</strong> Code points 0-127 use a single byte. The byte value equals the code point. Hex range: 00-7F.</li>
        <li><strong>2-byte characters:</strong> Code points 128-2047 use two bytes. The first byte starts with 110, and the second starts with 10.</li>
        <li><strong>3-byte characters:</strong> Code points 2048-65535 use three bytes. The first byte starts with 1110, and subsequent bytes start with 10.</li>
        <li><strong>4-byte characters:</strong> Code points 65536-1114111 use four bytes. The first byte starts with 11110, and subsequent bytes start with 10.</li>
      </ul>
      <p className="text-slate-700">
        These rules ensure that UTF-8 is backward-compatible with ASCII (ASCII text is valid UTF-8) while supporting the full Unicode 
        character set. The encoding is self-synchronizing, meaning byte boundaries are unambiguous.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Output Formatting Options</h3>
      <p className="text-slate-700">
        Text-to-hex converters typically offer formatting options:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Uppercase vs lowercase:</strong> Hex digits can be uppercase (A-F) or lowercase (a-f). Both represent the same values. Uppercase is common in some contexts, while lowercase is preferred in others. The choice is stylistic.</li>
        <li><strong>Space-separated vs continuous:</strong> Hex bytes can be separated by spaces for readability (e.g., "48 65 6C 6C 6F") or concatenated without spaces (e.g., "48656C6C6F"). Spaced output is easier to read and parse, while continuous output is more compact.</li>
      </ul>
      <p className="text-slate-700">
        Choose formatting based on your use case. Spaced, uppercase hex is common for debugging and documentation. Continuous, lowercase 
        hex is common in programming and data transmission. Some systems have specific requirements, so check your downstream processing needs.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Common Use Cases</h3>
      <p className="text-slate-700">
        Text-to-hex conversion serves many practical purposes:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Debugging encoding issues:</strong> Seeing byte-level representation helps diagnose character display problems, encoding mismatches, or data corruption issues.</li>
        <li><strong>Data analysis:</strong> Analyzing how text is represented at the byte level for security research, forensics, or data processing.</li>
        <li><strong>Protocol work:</strong> Converting text to hex for use in protocols, APIs, or systems that require hexadecimal representation.</li>
        <li><strong>Educational purposes:</strong> Learning about character encoding, Unicode, UTF-8, and how computers represent text internally.</li>
        <li><strong>Data transmission:</strong> Preparing text data for transmission in formats that require hex encoding (though base64 is more common for this).</li>
        <li><strong>Low-level programming:</strong> Working with byte-level data, binary protocols, or embedded systems that use hex representation.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Edge Cases and Special Characters</h3>
      <p className="text-slate-700">
        Some characters require special consideration:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Control characters:</strong> Non-printable characters (like newline, tab, null) have hex representations. For example, newline (LF) is 0A in hex, and tab is 09.</li>
        <li><strong>International characters:</strong> Accented letters, Chinese characters, Arabic script, etc., use multiple bytes in UTF-8, producing longer hex sequences.</li>
        <li><strong>Emojis and symbols:</strong> These often use 3-4 bytes in UTF-8, producing 6-8 hex digits per character.</li>
        <li><strong>Surrogate pairs:</strong> Some Unicode characters (rarely used) require special handling, but modern UTF-8 handles them correctly.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Best Practices</h3>
      <p className="text-slate-700">
        Follow these guidelines for accurate and useful conversions:
      </p>
      <ol className="list-inside list-decimal space-y-2 text-slate-700">
        <li><strong>Use clean text:</strong> Remove formatting, HTML tags, or hidden characters if you want to convert only visible text content.</li>
        <li><strong>Choose appropriate formatting:</strong> Select uppercase/lowercase and spacing options that match your downstream processing requirements.</li>
        <li><strong>Verify with known values:</strong> Test with simple ASCII characters first (like "A" = 41 hex) to confirm the converter works correctly.</li>
        <li><strong>Understand multi-byte characters:</strong> Be aware that non-ASCII characters produce multiple hex bytes, which is correct UTF-8 behavior.</li>
        <li><strong>Consider reverse conversion:</strong> If you need to convert hex back to text, ensure you have the hex values in the correct format and use a hex-to-text converter.</li>
      </ol>

      <h3 className="text-xl font-semibold text-slate-900">Limitations and Considerations</h3>
      <p className="text-slate-700">
        Text-to-hex conversion has some limitations:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Encoding specificity:</strong> The tool uses UTF-8 encoding. If you need other encodings (UTF-16, Latin-1, etc.), use specialized tools.</li>
        <li><strong>No reverse conversion:</strong> This tool converts text to hex only. For hex-to-text conversion, use a dedicated reverse converter.</li>
        <li><strong>Output length:</strong> Hex representation is longer than original text (at least 2x for ASCII, more for multi-byte characters).</li>
        <li><strong>Context loss:</strong> Hex output shows byte values but loses original formatting, structure, or visual appearance.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Privacy and Security</h3>
      <p className="text-slate-700">
        When converting sensitive text to hex, consider privacy implications:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Client-side processing:</strong> Choose tools that process text locally in your browser without sending data to servers.</li>
        <li><strong>No storage:</strong> Verify that tools do not store or log your input text or hex output.</li>
        <li><strong>Clear sensitive data:</strong> Clear the input field after conversion when working with confidential information, especially on shared devices.</li>
        <li><strong>Hex is not encryption:</strong> Hexadecimal is encoding, not encryption. Anyone can convert hex back to text if they know the encoding.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Conclusion</h3>
      <p className="text-slate-700">
        Text-to-hex conversion is a fundamental technique for understanding how text is represented at the byte level. It reveals the 
        underlying encoding (UTF-8), shows how different character types use different numbers of bytes, and helps with debugging, 
        analysis, and low-level text processing. Understanding the relationship between characters, Unicode code points, UTF-8 bytes, 
        and hexadecimal representation provides valuable insight into how computers handle text.
      </p>
      <p className="text-slate-700">
        Whether you are debugging encoding issues, learning about character representation, working with protocols, or analyzing data, 
        a reliable text-to-hex converter provides the foundation for byte-level text understanding. The tool on this page processes text 
        locally in your browser using UTF-8 encoding, ensuring privacy while delivering accurate hexadecimal representation with 
        flexible formatting options.
      </p>
    </div>
  </section>
);

export default async function TextToHexPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}`;
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' },
  };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={schemaData} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<TextToHexTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Text to HEX Converter FAQ</h2>
          <p className="text-slate-700">Common questions about converting text to hexadecimal, encoding, and usage.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}



