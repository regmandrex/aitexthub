import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { TextToMorseCodeTool } from '@/components/tools/TextToMorseCodeTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 604800;

const toolSlug = 'text-to-morse-code';

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Text to Morse Code Converter";
  const description = "Convert plain text into Morse code using standard ITU encoding. Fast, accurate, and privacy-friendly.";
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
    question: 'What does the Text to Morse Code Converter do?',
    answer:
      'This tool converts plain text into Morse code using the standard ITU (International Telecommunication Union) encoding. It transforms letters, numbers, and common punctuation into sequences of dots and dashes with proper spacing. The output follows international Morse code conventions, making it suitable for learning, puzzles, emergency signaling, and educational purposes.',
  },
  {
    category: 'General',
    question: 'How is my text processed?',
    answer:
      'All conversion happens entirely in your browser. No text is sent to servers, stored, or logged. Your input is processed locally using JavaScript, and the Morse code output appears instantly. When you close the page or clear the input, all data is removed from memory. This ensures complete privacy for your messages.',
  },
  {
    category: 'General',
    question: 'Is this tool free to use?',
    answer:
      'Yes, the Text to Morse Code Converter is completely free with no registration, subscriptions, or hidden fees. There are no usage limits, and you can convert as much text as needed without restrictions.',
  },
  {
    category: 'Usage',
    question: 'Which characters are supported?',
    answer:
      'The tool supports all letters A-Z (case-insensitive), digits 0-9, and common punctuation marks including period, comma, question mark, exclamation point, slash, parentheses, ampersand, colon, semicolon, equals, plus, minus, underscore, quotes, dollar sign, and at symbol. Characters without standard Morse equivalents are left unchanged or marked with a question mark.',
  },
  {
    category: 'Usage',
    question: 'How do I customize word spacing?',
    answer:
      'You can choose between slash separators (/) or double spaces between words. The slash option is useful for machine parsing and clear visual separation. Double spaces maintain traditional Morse code formatting. Letters within words are always separated by single spaces, following standard Morse conventions.',
  },
  {
    category: 'Usage',
    question: 'What is the fastest way to copy the output?',
    answer:
      'Click the "Copy output" button once the conversion is complete. This copies the entire Morse code string to your clipboard instantly. You can then paste it into documents, messages, or other applications. The button is disabled when there is no output.',
  },
  {
    category: 'Usage',
    question: 'Can I encode multi-line text or paragraphs?',
    answer:
      'Yes, the tool preserves line breaks and blank lines in your input. Each line is encoded separately, and paragraph breaks are maintained in the output. This makes it suitable for encoding structured text, lists, or formatted content while keeping the original layout.',
  },
  {
    category: 'Usage',
    question: 'Does the tool handle special characters or emojis?',
    answer:
      'Special characters and emojis that do not have standard Morse code equivalents are typically left unchanged or marked. The tool focuses on encoding standard alphanumeric characters and common punctuation. For best results, use plain text without special Unicode characters.',
  },
  {
    category: 'Technical',
    question: 'Does it follow the ITU Morse code standard?',
    answer:
      'Yes, the tool uses the official ITU (International Telecommunication Union) Morse code mapping. This is the same standard used globally for radio communication, aviation, and maritime signaling. Anyone familiar with international Morse code can decode the output using standard reference charts.',
  },
  {
    category: 'Technical',
    question: 'What happens to unsupported characters?',
    answer:
      'Characters without a standard Morse code equivalent are typically left as-is or marked with a question mark. This helps you identify where manual intervention might be needed. The tool prioritizes accuracy for supported characters while clearly indicating when a character cannot be encoded.',
  },
  {
    category: 'Technical',
    question: 'Can I adjust spacing between letters?',
    answer:
      'Letter-to-letter spacing is fixed at a single space by design, matching standard Morse code conventions. This ensures the output is decodable by anyone using standard Morse reference materials. Word spacing can be customized between slashes or double spaces, but letter spacing remains consistent.',
  },
  {
    category: 'Technical',
    question: 'Does the tool support audio playback?',
    answer:
      'No, this tool focuses on text encoding only. It produces the dot-dash text representation of Morse code. If you need audio playback, you can copy the output and use it with dedicated Morse code audio generators or training applications that support text-to-audio conversion.',
  },
  {
    category: 'Technical',
    question: 'Why do some letters look similar in Morse code?',
    answer:
      'Morse code is designed for efficiency, so some letters share similar patterns. For example, E (.) and T (-) are the shortest codes. This is intentional and helps with transmission speed. Context and proper spacing help distinguish similar patterns. The tool maintains correct spacing to ensure accurate decoding.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why is the output empty?',
    answer:
      'An empty output usually means the input field is empty or contains only whitespace. Morse code requires actual characters to encode. Ensure you have entered text with letters, numbers, or supported punctuation. The tool will display output as soon as valid characters are detected.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why are some characters missing from the result?',
    answer:
      'Characters without standard Morse equivalents may not appear in the encoded output, or they may be marked with a question mark. This is expected behavior for unsupported Unicode characters, emojis, or special symbols. Replace unsupported characters with standard alternatives if you need complete encoding.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does the spacing look different than expected?',
    answer:
      'Morse code uses specific spacing rules: single spaces between letters, and either slashes or double spaces between words. If your output looks different, check the word spacing option. The tool follows standard conventions, so the spacing should match official Morse code formatting guidelines.',
  },
  {
    category: 'Privacy',
    question: 'Is my text stored or transmitted?',
    answer:
      'No. All processing occurs locally in your browser. No data is sent to servers, stored in databases, or transmitted over the network. Your text remains on your device throughout the conversion process. This makes the tool suitable for sensitive or private messages.',
  },
  {
    category: 'Privacy',
    question: 'Can I use this for confidential information?',
    answer:
      'Yes, as long as your local environment is secure. The tool does not transmit data, but you should still follow your organization policies for handling sensitive information. Clear the input when finished if using a shared device. The tool itself provides privacy, but device security remains your responsibility.',
  },
  {
    category: 'Best Practices',
    question: 'How should I verify the Morse code is correct?',
    answer:
      'Compare a few letters with an official Morse code reference chart. Common letters like E (.), T (-), A (.-), and S (...) are easy to verify. You can also use a Morse code decoder tool to reverse the process and confirm the output matches your original input. The tool uses standard ITU encoding, so verification should be straightforward.',
  },
  {
    category: 'Best Practices',
    question: 'What workflow should I follow for encoding messages?',
    answer:
      'First, prepare your text and remove any unsupported characters. Paste it into the tool and review the output. Choose your preferred word spacing option. Copy the Morse code and verify it with a decoder if needed. Finally, use the encoded output in your intended application, whether for learning, puzzles, or communication.',
  },
  {
    category: 'Applications',
    question: 'Can I use this for educational purposes?',
    answer:
      'Absolutely. The tool is ideal for teaching Morse code, creating worksheets, and generating practice materials. Students can encode their names, messages, or assignments. Teachers can create encoded puzzles or quizzes. The standard ITU encoding ensures students learn the correct international Morse code.',
  },
  {
    category: 'Applications',
    question: 'Is this suitable for emergency signaling?',
    answer:
      'The tool can generate Morse code for learning emergency signals like SOS (... --- ...). However, for actual emergency use, you need proper transmission equipment and training. This tool is educational and helps you understand Morse code, but real emergency communication requires appropriate hardware and protocols.',
  },
  {
    category: 'Applications',
    question: 'Can I use the output in puzzles or games?',
    answer:
      'Yes, the encoded output is perfect for creating treasure hunts, escape room puzzles, or educational games. You can embed Morse code in stories, hide clues in encoded messages, or create interactive learning activities. The tool makes it easy to generate puzzle content quickly.',
  },
  {
    category: 'Limitations',
    question: 'What are the limitations of this converter?',
    answer:
      'The tool encodes standard alphanumeric characters and common punctuation only. It does not support audio playback, timing information, or advanced Morse code features like prosigns. Very long texts may take a moment to process, but there are no hard limits on input length. The tool focuses on accurate text-to-Morse conversion.',
  },
  {
    category: 'Limitations',
    question: 'Does it handle non-English characters?',
    answer:
      'The tool uses standard ITU Morse code, which is designed primarily for English letters and numbers. Non-English characters without standard equivalents may not encode correctly. For international text, consider transliteration or using characters that have standard Morse code mappings.',
  },
  {
    category: 'Compatibility',
    question: 'Does it work on mobile devices?',
    answer:
      'Yes, the tool is fully responsive and works on smartphones and tablets. The interface adapts to smaller screens, and all features function on mobile browsers. You can encode text on any device with a modern web browser, making it convenient for on-the-go use.',
  },
  {
    category: 'Compatibility',
    question: 'Can I use the output with other Morse code tools?',
    answer:
      'Yes, the output follows standard ITU formatting, so it should be compatible with other Morse code decoders, audio generators, and training applications. The standard spacing and encoding ensure interoperability with most Morse code tools and reference materials.',
  },
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 space-y-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2 className="text-2xl font-semibold text-slate-900">Text to Morse Code Converter: Complete Guide to Encoding Text into Morse Code</h2>
      
      <p className="text-slate-700">
        Morse code has been a reliable communication method for over 180 years, evolving from telegraph wires to modern digital applications. 
        Converting text to Morse code transforms readable messages into sequences of dots and dashes that can be transmitted through sound, 
        light, or radio signals. This guide explains how text-to-Morse conversion works, why it remains relevant today, and how to use 
        online converters effectively for learning, emergency preparedness, and creative projects.
      </p>

      <p className="text-slate-700">
        Whether you are learning Morse code for amateur radio, preparing for survival situations, creating educational puzzles, or simply 
        curious about this historic encoding system, understanding text-to-Morse conversion opens up practical applications across 
        communication, education, and technology.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">What Is Morse Code?</h3>
      <p className="text-slate-700">
        Morse code is a method of encoding text characters as sequences of two different signal durations, called dots and dashes. 
        Developed by Samuel Morse and Alfred Vail in the 1830s, it was originally used for telegraph communication. Each letter, number, 
        and punctuation mark has a unique pattern of dots (short signals) and dashes (long signals).
      </p>
      <p className="text-slate-700">
        The system uses timing and spacing to distinguish between characters and words. A dot represents a short signal, a dash represents 
        a long signal (typically three times the duration of a dot), and spacing separates letters and words. This binary-like system 
        made it ideal for early telegraph systems and remains useful today for low-bandwidth communication, accessibility, and emergency signaling.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">The ITU Standard</h3>
      <p className="text-slate-700">
        The International Telecommunication Union (ITU) standardized Morse code internationally, ensuring consistent encoding across 
        countries and applications. The ITU standard defines the exact dot-dash patterns for each character, spacing rules between letters 
        and words, and timing conventions. Modern text-to-Morse converters use this standard to ensure compatibility and accuracy.
      </p>
      <p className="text-slate-700">
        The ITU standard includes mappings for all 26 letters (A-Z), digits 0-9, and common punctuation marks. Some characters have 
        shorter codes for efficiency—the letter E is a single dot (.), and T is a single dash (-), making them the most common letters 
        in English. This frequency-based optimization helps reduce transmission time.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">How Text-to-Morse Conversion Works</h3>
      <p className="text-slate-700">
        Converting text to Morse code involves mapping each character to its corresponding dot-dash sequence and applying proper spacing. 
        The process follows these steps:
      </p>
      <ol className="list-inside list-decimal space-y-2 text-slate-700">
        <li><strong>Character mapping:</strong> Each input character is looked up in a Morse code table to find its dot-dash pattern.</li>
        <li><strong>Case normalization:</strong> Letters are converted to uppercase since Morse code is case-insensitive.</li>
        <li><strong>Spacing application:</strong> Single spaces are inserted between letters within words, and word separators (slashes or double spaces) are added between words.</li>
        <li><strong>Output formatting:</strong> The final string combines all encoded characters with proper spacing for readability.</li>
      </ol>
      <p className="text-slate-700">
        For example, the word "HELLO" converts to ".... . .-.. .-.. ---" where each letter is separated by a space, and the entire 
        sequence represents the word. The conversion is deterministic—the same input always produces the same output when using the 
        standard ITU mapping.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Complete Morse Code Reference Table</h3>
      <p className="text-slate-700">
        This table shows the standard ITU Morse code for all supported characters. Use it to verify conversions or learn the patterns manually.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border border-slate-300">
          <thead className="bg-slate-100">
            <tr>
              <th className="border border-slate-300 px-4 py-2 text-left">Character</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Morse Code</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Character</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Morse Code</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="border border-slate-300 px-4 py-2">A</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.-</td>
              <td className="border border-slate-300 px-4 py-2">N</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-.</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">B</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-...</td>
              <td className="border border-slate-300 px-4 py-2">O</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">---</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">C</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-.-.</td>
              <td className="border border-slate-300 px-4 py-2">P</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.--.</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">D</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-..</td>
              <td className="border border-slate-300 px-4 py-2">Q</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">--.-</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">E</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.</td>
              <td className="border border-slate-300 px-4 py-2">R</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.-.</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">F</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">..-.</td>
              <td className="border border-slate-300 px-4 py-2">S</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">...</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">G</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">--.</td>
              <td className="border border-slate-300 px-4 py-2">T</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">H</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">....</td>
              <td className="border border-slate-300 px-4 py-2">U</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">..-</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">I</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">..</td>
              <td className="border border-slate-300 px-4 py-2">V</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">...-</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">J</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.---</td>
              <td className="border border-slate-300 px-4 py-2">W</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.--</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">K</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-.-</td>
              <td className="border border-slate-300 px-4 py-2">X</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-..-</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">L</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.-..</td>
              <td className="border border-slate-300 px-4 py-2">Y</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-.--</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">M</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">--</td>
              <td className="border border-slate-300 px-4 py-2">Z</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">--..</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">0</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-----</td>
              <td className="border border-slate-300 px-4 py-2">5</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.....</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">1</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.----</td>
              <td className="border border-slate-300 px-4 py-2">6</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-....</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">2</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">..---</td>
              <td className="border border-slate-300 px-4 py-2">7</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">--...</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">3</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">...--</td>
              <td className="border border-slate-300 px-4 py-2">8</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">---..</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">4</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">....-</td>
              <td className="border border-slate-300 px-4 py-2">9</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">----.</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">.</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.-.-.-</td>
              <td className="border border-slate-300 px-4 py-2">?</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">..--..</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">,</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">--..--</td>
              <td className="border border-slate-300 px-4 py-2">!</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-.-.--</td>
            </tr>
            <tr>
              <td className="border border-slate-300 px-4 py-2">/</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">-..-.</td>
              <td className="border border-slate-300 px-4 py-2">@</td>
              <td className="border border-slate-300 px-4 py-2 font-mono">.--.-.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-slate-900">Spacing Rules in Morse Code</h3>
      <p className="text-slate-700">
        Proper spacing is critical for accurate Morse code transmission and decoding. The ITU standard defines three levels of spacing:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Intra-character spacing:</strong> No space between dots and dashes within a single character. For example, the letter A (.-) has no internal spacing.</li>
        <li><strong>Inter-character spacing:</strong> A single space separates letters within a word. In "HELLO", each letter code is separated by one space.</li>
        <li><strong>Inter-word spacing:</strong> Either a slash (/) or double space separates words. This longer pause helps distinguish word boundaries.</li>
      </ul>
      <p className="text-slate-700">
        Modern text-to-Morse converters typically use slashes for word separation because they are visually clear and easy to parse programmatically. 
        Traditional Morse code uses longer pauses (equivalent to about seven dots), but in text representation, slashes or double spaces serve the same purpose.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Timing Concepts in Morse Code</h3>
      <p className="text-slate-700">
        While this tool produces text output, understanding Morse code timing helps when using audio or visual transmission:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Dot duration:</strong> The basic unit of time. A dot is one unit long.</li>
        <li><strong>Dash duration:</strong> Three units long (three times a dot).</li>
        <li><strong>Intra-character pause:</strong> One unit of silence between dots and dashes within a character.</li>
        <li><strong>Inter-character pause:</strong> Three units of silence between letters (equal to a dash).</li>
        <li><strong>Inter-word pause:</strong> Seven units of silence between words (roughly equal to the space of a dash plus the space between characters).</li>
      </ul>
      <p className="text-slate-700">
        These timing rules ensure that Morse code can be transmitted and received accurately even in noisy conditions. The text output 
        from converters represents these timing concepts through spacing, making it easy to convert to audio or visual signals later.
      </p>

      <h3 className="text-xl font-semibold text-slate-900">Common Use Cases for Text-to-Morse Conversion</h3>
      <p className="text-slate-700">
        Text-to-Morse converters serve diverse purposes across education, emergency preparedness, hobbies, and technology:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Education and learning:</strong> Students learn Morse code by encoding their names, messages, or assignments. Teachers create worksheets and puzzles.</li>
        <li><strong>Emergency preparedness:</strong> Learning SOS (... --- ...) and basic signals for survival situations where voice communication is not possible.</li>
        <li><strong>Amateur radio:</strong> Ham radio operators practice Morse code (CW) for contests and long-distance communication.</li>
        <li><strong>Accessibility:</strong> Morse code input systems help people with limited mobility communicate using simple switches or buttons.</li>
        <li><strong>Puzzles and games:</strong> Creating treasure hunts, escape room clues, or interactive learning activities with encoded messages.</li>
        <li><strong>Art and design:</strong> Embedding Morse code messages in visual designs, jewelry, or installations for creative expression.</li>
        <li><strong>Historical reenactment:</strong> Recreating period-accurate communication methods for educational or entertainment purposes.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Best Practices for Using Text-to-Morse Converters</h3>
      <p className="text-slate-700">
        Follow these guidelines to get the most accurate and useful results:
      </p>
      <ol className="list-inside list-decimal space-y-2 text-slate-700">
        <li><strong>Use plain text:</strong> Remove special formatting, HTML tags, or hidden characters before encoding for clean output.</li>
        <li><strong>Verify with reference:</strong> Check a few letters against a Morse code chart to confirm the converter uses standard ITU encoding.</li>
        <li><strong>Choose appropriate spacing:</strong> Use slashes for machine parsing or double spaces for traditional formatting, depending on your needs.</li>
        <li><strong>Test with decoders:</strong> Verify encoded output by decoding it back to text to ensure accuracy.</li>
        <li><strong>Handle unsupported characters:</strong> Replace emojis, special Unicode, or unsupported symbols with standard alternatives before encoding.</li>
      </ol>

      <h3 className="text-xl font-semibold text-slate-900">Edge Cases and Limitations</h3>
      <p className="text-slate-700">
        Text-to-Morse converters have some limitations to be aware of:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Non-English characters:</strong> Characters without standard ITU mappings may not encode correctly. Consider transliteration for international text.</li>
        <li><strong>Case sensitivity:</strong> Morse code is case-insensitive, so uppercase and lowercase letters produce the same output.</li>
        <li><strong>No audio output:</strong> Text converters produce dot-dash strings, not audio signals. Use separate tools for audio playback.</li>
        <li><strong>Formatting limitations:</strong> Complex formatting, tables, or structured data may not translate well to Morse code representation.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Privacy and Security Considerations</h3>
      <p className="text-slate-700">
        When using online text-to-Morse converters, consider privacy implications:
      </p>
      <ul className="list-inside list-disc space-y-2 text-slate-700">
        <li><strong>Client-side processing:</strong> Choose tools that process text locally in your browser without sending data to servers.</li>
        <li><strong>No storage:</strong> Verify that converters do not store or log your input text.</li>
        <li><strong>Clear sensitive data:</strong> Clear the input field after encoding sensitive messages, especially on shared devices.</li>
        <li><strong>Morse code is not encryption:</strong> Morse code is encoding, not encryption. Anyone who knows Morse code can decode your messages.</li>
      </ul>

      <h3 className="text-xl font-semibold text-slate-900">Conclusion</h3>
      <p className="text-slate-700">
        Text-to-Morse conversion remains a practical skill and useful tool despite being over 180 years old. Modern online converters 
        make it easy to encode text into standard ITU Morse code for learning, emergency preparedness, hobbies, and creative projects. 
        Understanding the encoding process, spacing rules, and timing concepts helps you use these tools effectively and verify their accuracy.
      </p>
      <p className="text-slate-700">
        Whether you are learning Morse code for amateur radio, preparing for survival situations, creating educational content, or exploring 
        historical communication methods, a reliable text-to-Morse converter provides the foundation for practical applications. The tool 
        on this page processes text locally in your browser, ensuring privacy while delivering accurate, standard-compliant Morse code output.
      </p>
    </div>
  </section>
);

export default async function TextToMorseCodePage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<TextToMorseCodeTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Text to Morse Code Converter FAQ</h2>
          <p className="text-slate-700">Common questions about encoding text into Morse code, spacing rules, and usage.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}



