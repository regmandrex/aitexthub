import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { MorseCodeGeneratorTool } from '@/components/tools/MorseCodeGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 86400;

const toolSlug = 'morse-code-generator';

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Morse Code Generator";
  const description = "Convert text into clean Morse code with slashes or spaces, ready for learning, practice, or signaling.";
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
    question: 'What does the Morse Code Generator do?',
    answer:
      'This browser-based utility instantly converts any input into dots, dashes, and the spacing conventions that define Morse code so you can paste the output into documents, puzzles, or private messages.',
  },
  {
    category: 'General',
    question: 'How is my text handled?',
    answer:
      'Processing happens entirely in your browser—no servers, no logging, and no network requests—so your sentence stays private and disappears as soon as you navigate away.',
  },
  {
    category: 'General',
    question: 'Is the tool free to use?',
    answer: 'Yes. The Morse Code Generator is available at no cost, with no sign-ups, pop-ups, or wait lists blocking access.',
  },
  {
    category: 'General',
    question: 'Can I keep using it offline?',
    answer:
      'Because everything runs client-side, you can reload the page from cache or keep the tab open while you work offline; just avoid refreshing if you lose your network.',
  },
  {
    category: 'Usage',
    question: 'Which characters are supported?',
    answer:
      'Letters A–Z, numerals 0–9, and common punctuation marks follow the ITU standard mapping, so this Morse code generator handles everyday sentences and most editorial copy.',
  },
  {
    category: 'Usage',
    question: 'How do I customize the spacing between words?',
    answer:
      'Toggle between slash separators and double spaces in the spacing panel—slashes are great for machine parsing, while double spaces keep the output readable for humans.',
  },
  {
    category: 'Usage',
    question: 'What is the fastest way to copy output?',
    answer:
      'Hit the Copy Morse button once the conversion is ready; the clipboard helper grabs the entire output so you can paste it into Slack, documents, or graphic design tools instantly.',
  },
  {
    category: 'Usage',
    question: 'Can I encode paragraphs or bullet lists?',
    answer:
      'Yes. Paste multi-line text, and the tool preserves blank lines (unless you remove them) while encoding each paragraph with consistent separators.',
  },
  {
    category: 'Usage',
    question: 'Does the generator accept newline-delimited puzzles?',
    answer:
      'It does—line breaks in your input stay where they are, so you can craft treasure maps, scavenger clues, or interactive worksheets with structured Morse code blocks.',
  },
  {
    category: 'Usage',
    question: 'Is this tool suitable for secret messaging or brainstorming?',
    answer:
      'Absolutely. Marketing teams, educators, and writers use the generator to sprinkle encoded hints into newsletters, create mystery stories, and rehearse cryptic messaging.',
  },
  {
    category: 'Technical',
    question: 'Does it follow the standard ITU Morse alphabet?',
    answer:
      'Yes. The mapping matches the global ITU standard, so anyone familiar with international Morse code can decode your output with the same confidence.',
  },
  {
    category: 'Technical',
    question: 'What happens when I type unsupported characters like emojis?',
    answer:
      'Characters that lack a standard Morse equivalent are left untouched so you know exactly where manual intervention might be needed, keeping the encoder predictable.',
  },
  {
    category: 'Technical',
    question: 'Can I adjust the spacing between letters?',
    answer:
      'Letter-to-letter spacing is always a single space by design, matching Morse conventions, while word spacing switches between slashes or double spaces depending on your selection.',
  },
  {
    category: 'Technical',
    question: 'Does the tool emit timing or audio?',
    answer:
      'Not yet—the focus is text encoding. You can copy the Morse text and feed it into any audio or blinking tool that understands dots, dashes, and pauses.',
  },
  {
    category: 'Technical',
    question: 'Why does “E” look similar to “T” in the output?',
    answer:
      'Some letters share similar patterns because Morse is a compact code; rely on the generator’s spacing and your knowledge of context to interpret them correctly.',
  },
  {
    category: 'Technical',
    question: 'Can I automate this in scripts?',
    answer:
      'The UI exposes a reliable copy workflow, and you can call `navigator.clipboard` from your own scripts after clicking Copy Morse to pipe the result into publications or tooling.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does the output stay blank?',
    answer:
      'Ensure the input field contains visible characters—spaces alone don’t produce Morse, and the tool clears the output when you hit Clear or enter nothing.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why aren’t the slashes replacing spaces?',
    answer:
      'The slash toggle applies only when you select that separator; double-check that the spacing panel shows “Use slash” before encoding.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why is one character missing from the result?',
    answer:
      'Unsupported glyphs stay in the text without encoding, so delete or replace them with a supported character if you need every symbol translated.',
  },
  {
    category: 'Accessibility',
    question: 'Is the Morse output readable by assistive tech?',
    answer:
      'Because the output remains plain text, screen readers can navigate it, and the generator’s high-contrast layout meets typical accessibility goals.',
  },
  {
    category: 'Accessibility',
    question: 'Can I use this for classroom activities?',
    answer:
      'Yes. Teachers rely on the straight-forward interface to build worksheets, decode practice, and printable puzzles without dragging in hardware.',
  },
  {
    category: 'Creativity',
    question: 'How can marketers use encoded copy on campaigns?',
    answer:
      'Add secret Morse snippets to emails, landing pages, or social graphics to spark curiosity and boost dwell time, which can improve SEO and conversions.',
  },
  {
    category: 'Creativity',
    question: 'Can writers build interactive stories around Morse?',
    answer:
      'Definitely—you can embed the generated code in articles or blog posts, then invite readers to decode clues for gamified storytelling.',
  },
  {
    category: 'SEO',
    question: 'Does this interactive tool help with SEO?',
    answer:
      'Yes. Tools that keep visitors on the page longer, such as a free Morse code generator, signal engagement to search engines and improve indoor ranking opportunities.',
  },
  {
    category: 'SEO',
    question: 'How should I link to this tool from my content?',
    answer:
      'Use descriptive anchor text like “Morse code generator” or “encode text to Morse” and mention the privacy-first, fast experience to reinforce relevance.',
  },
  {
    category: 'Marketing',
    question: 'Can I share generated Morse on social media?',
    answer:
      'Yes. Copy the output, paste it into posts or stories, and add context so your audience knows it’s a fun cipher they can decode.',
  },
  {
    category: 'Best Practices',
    question: 'What workflow should I follow before publishing?',
    answer:
      'Draft your message, encode it here, verify with a second decode tool or reference chart, and then paste the result where you need it for consistent branding.',
  },
  {
    category: 'Best Practices',
    question: 'How do I verify the Morse before sharing?',
    answer:
      'Cross-check a few letters with an official Morse chart or our Morse Code Translator to ensure the encoder matched the ITU standard before embedding it anywhere.',
  },
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 space-y-6">
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-slate-900">Morse Code Generator: A Complete Guide to Understanding, Using, and Creating Morse Code</h2>
      <p className="text-slate-700">
        Ever wondered what those rapid clicks, flashes, or beeps you’ve seen in old war movies actually mean? That’s Morse code, a method of
        communication developed in the 1800s that still finds practical use today. Digital generators like this one translate text into Morse
        instantly, making it easy to explore survival applications, cryptography, amateur radio, and creative DIY projects.
      </p>
      <p className="text-slate-700">
        Whether you’re preparing for emergencies, crafting secret puzzles, or just curious about this rhythmic language, this guide explains how
        Morse code works, why it matters, how to use generators, and even how to build one of your own.
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">What Is Morse Code?</h3>
      <p className="text-slate-700">
        Morse code is one of the earliest digital communication systems. Created by Samuel Morse and Alfred Vail in the 1830s, it transmits text
        through short dots and longer dashes. Each letter, number, and symbol has a unique pattern.
      </p>
      <ul className="list-inside list-disc space-y-1 text-slate-700">
        <li>A = .-</li>
        <li>B = -...</li>
        <li>C = -.-.</li>
        <li>SOS = ... --- ...</li>
      </ul>
      <p className="text-slate-700">
        Signals were originally sent via telegraph cables, radios, and signal lamps. Today, Morse code remains relevant in emergencies, aviation,
        military training, and hobbyist communities because it’s universal, language-agnostic, and resilient.
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Why Learn Morse Code Today?</h3>
      <p className="text-slate-700">
        Learning Morse code isn’t just nostalgia—it boosts your communication toolkit across survival, hobbies, and accessibility.
      </p>
      <ol className="list-inside list-decimal space-y-1 text-slate-700">
        <li>
          <strong>Emergency preparedness:</strong> SOS (... --- ...) can be tapped, flashed, or blinked when voice isn’t an option.
        </li>
        <li>
          <strong>Outdoor skills:</strong> Scouts, survivalists, and campers pair Morse with navigation and signaling techniques in remote places.
        </li>
        <li>
          <strong>Hobbies and history:</strong> Ham radio operators, cryptography fans, and history buffs practice Morse for contests and storytelling.
        </li>
        <li>
          <strong>Secret messaging:</strong> Kids, friends, and creative teams use it to send encoded notes and dive into introductory encryption.
        </li>
        <li>
          <strong>Accessibility:</strong> Morse appears in AAC systems and even Google’s custom keyboards for users with limited speech.
        </li>
      </ol>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">What Is a Morse Code Generator?</h3>
      <p className="text-slate-700">
        A generator converts plain text into Morse and back again. It acts like a translator, changing letters and sentences into rhythmic dots/dashes
        and vice versa.
      </p>
      <p className="text-slate-700">
        Generators come as web tools, mobile apps, desktop apps, or hardware signalers. Some add audio beeps, flashes, or vibrations for a richer
        learning experience.
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">How Morse Code Generators Work</h3>
      <ol className="list-inside list-decimal space-y-1 text-slate-700">
        <li>Input interface: you type “Good Morning.”</li>
        <li>Character mapping: each letter maps to dots and dashes.</li>
        <li>Formatting: letters get spaces, words get slashes or double spaces.</li>
        <li>Output: the Morse string appears, ready to copy.</li>
        <li>Bonus features: audio, flash, and tactile playback unlock different senses.</li>
      </ol>
      <p className="text-slate-700">
        Some advanced generators accept Morse taps to ramp up the training aspect or let you practice rhythm before tapping into audio transmission.
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Types of Morse Code Generators</h3>
      <p className="text-slate-700">
        From text-to-Morse to vibration-powered devices, each type targets a different use case.
      </p>
      <ul className="list-inside list-disc space-y-1 text-slate-700">
        <li><strong>Text to Morse:</strong> instant translation with customizable spacing.</li>
        <li><strong>Morse to Text:</strong> decode incoming strings for validation or puzzles.</li>
        <li><strong>Audio generators:</strong> short beeps for dots, long beeps for dashes for auditory practice.</li>
        <li><strong>Light-based tools:</strong> flash lamps mimic historical signaling for nighttime drills.</li>
        <li><strong>Vibration generators:</strong> tactile pulses for accessibility or stealthy messaging.</li>
        <li><strong>Hardware builders:</strong> DIY Arduino/Raspberry Pi kits bring Morse into physical projects.</li>
      </ul>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Best Free Online Morse Code Generators</h3>
      <p className="text-slate-700">
        Several free generators stand out for quality, features, and reliability.
      </p>
      <ul className="list-inside list-disc space-y-1 text-slate-700">
        <li>
          <strong>MorseCode.World:</strong> text ↔ Morse, audio playback, flashing light simulation, no login required.
        </li>
        <li>
          <strong>Dcode.fr:</strong> reverse translation plus a suite of cipher tools for cryptography fans.
        </li>
        <li>
          <strong>Online Tone Generator (Morse tool):</strong> real-time beeps with adjustable frequency and speed.
        </li>
        <li>
          <strong>Unitarium’s Morse Resource:</strong> instant translation paired with international Morse reference material.
        </li>
        <li>
          <strong>DevToolsDaily’s Morse Code Translator:</strong> bi-directional conversion with beginner-friendly UI and theme switch.
        </li>
      </ul>
      <p className="text-slate-700">
        Mobile favorites include Morse Mania, Morse Code Agent, and Google’s Gboard Morse keyboard—each offering unique features like gamification,
        flashlight signals, vibration, or accessibility-first input.
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">How to Use a Morse Code Generator Step-by-Step</h3>
      <ol className="list-inside list-decimal space-y-1 text-slate-700">
        <li><strong>Choose your tool:</strong> audio, mobile, or web-based—for example, MorseCode.World.</li>
        <li><strong>Enter text:</strong> type “Hello World” and see “.... . .-.. .-.. --- / .-- --- .-. .-.. -..”.</li>
        <li><strong>Play it back:</strong> listen to the rhythm or watch flashes if supported.</li>
        <li><strong>Copy/share:</strong> hit the copy button or export the audio.</li>
        <li><strong>Decode it:</strong> reverse the process to confirm accuracy.</li>
      </ol>
      <p className="text-slate-700">Tips: start with short words, recognize E and T, and practice sending secret messages to friends.</p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Creating Your Own Morse Code Generator</h3>
      <p className="text-slate-700">
        Building a small Python generator teaches you how these tools work and gives you a custom encoder for projects.
      </p>
      <pre className="rounded bg-slate-900 p-4 text-xs text-slate-100">
{`MORSE_CODE_DICT = &#123;
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', '0': '-----', ' ': '/'
}

def text_to_morse(text):
    text = text.upper()
    morse_output = ''
    for letter in text:
        morse_output += MORSE_CODE_DICT.get(letter, '') + ' '
    return morse_output

message = input("Enter your message: ")
morse_code = text_to_morse(message)
print("Morse Code:", morse_code)
`}
      </pre>
      <p className="text-slate-700">
        Add audio with <code className="font-mono text-xs">winsound.Beep</code> or <code className="font-mono text-xs">pygame</code> to play dots and
        dashes, or wrap the logic in a GUI. Ideas like Tkinter, Morse-to-text, exports, and international support are easy extensions.
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Top Applications of Morse Code Generators</h3>
      <ul className="list-inside list-disc space-y-1 text-slate-700">
        <li><strong>Education:</strong> STEM classes, coding camps, and history projects use generators to teach binary thinking.</li>
        <li><strong>Military simulations:</strong> signal corps and tactical drills recreate real-world scenarios.</li>
        <li><strong>Ham radio:</strong> operators practice CW contests and long-distance runs with Morse helpers.</li>
        <li><strong>Accessibility:</strong> AAC tools use Morse input for people with motor impairments.</li>
        <li><strong>Escape rooms:</strong> puzzles layer Morse hints for immersive storytelling.</li>
        <li><strong>Art and music:</strong> designers embed Morse messages into installations or compositions.</li>
      </ul>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Morse Code in Modern Technology</h3>
      <ul className="list-inside list-disc space-y-1 text-slate-700">
        <li>
          <strong>Accessibility/input:</strong> Google’s Gboard Morse keyboard gives users with limited motion a fast two-button interface.
        </li>
        <li>
          <strong>Smart devices:</strong> Morse sequences can trigger home automation tasks via Raspberry Pi or Arduino projects.
        </li>
        <li>
          <strong>Wearables:</strong> watches use vibration patterns to silently send Morse alerts (dot-dot-dash = phone call, for example).
        </li>
        <li>
          <strong>Security:</strong> embedded Morse is a common puzzle in CTF competitions and steganography experiments.
        </li>
        <li>
          <strong>Online communities:</strong> niche forums, IRC threads, and chat apps celebrate Morse as a shared secret language.
        </li>
      </ul>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Learning Morse Code vs Using a Generator</h3>
      <div className="space-y-2 text-slate-700">
        <p>
          Generators give instant translations (great for casual use) but learning builds independence. Generators save time, while memory
          training prepares you for low-tech environments.
        </p>
        <ul className="list-inside list-disc space-y-1 text-slate-700">
          <li>Generators: instant, tech-dependent, good for beginners.</li>
          <li>Learning: offline-ready, boosts cognition, feels rewarding.</li>
        </ul>
        <p>
          The best strategy is a hybrid: start with generators, then practice letters daily (“Everyday, Ten Letters”) until you can tap basic
          messages like SOS without looking.
        </p>
      </div>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Fun Activities and Challenges With Morse Code</h3>
      <ul className="list-inside list-disc space-y-1 text-slate-700">
        <li>
          <strong>Scavenger hunt:</strong> each clue appears in Morse, guiding players to the next spot (add flashlights or audio for bonus points).
        </li>
        <li>
          <strong>Secret message challenge:</strong> friends encode phrases and decode them by ear or sight.
        </li>
        <li>
          <strong>DIY Morse bracelet:</strong> color-coded beads represent dots and dashes, wearable learning for camps or craft nights.
        </li>
        <li>
          <strong>Flashlight drill:</strong> practice visual signaling outdoors—who decodes fastest wins.
        </li>
        <li>
          <strong>Escape room element:</strong> include printed guides or devices so players solve Morse riddles to advance.
        </li>
      </ul>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Safety and Privacy Considerations</h3>
      <ol className="list-inside list-decimal space-y-1 text-slate-700">
        <li>Don’t send sensitive data—Morse is not encryption.</li>
        <li>Use trusted tools (open-source/offline) to avoid logging private input.</li>
        <li>Respect emergency signals; avoid fake SOS in public spaces.</li>
        <li>Honor accessibility users who rely on Morse for serious communication.</li>
      </ol>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">Conclusion</h3>
      <p className="text-slate-700">
        Morse code may be old, but it’s evolving. Generators like this one let anyone translate words into Morse, learn the rhythm, and apply it to
        survival, accessibility, art, and IoT. Type your name, hear it beep, flash it in light, or wear it on your wrist—Morse is still a powerful
        form of connection.
      </p>
    </div>
  </section>
);

export default async function MorseCodeGeneratorPage() {
  
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
    offers: &#123; '@type': 'Offer', price: '0', priceCurrency: 'USD' &#125;,
    aggregateRating: &#123; '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' &#125;,
  };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={schemaData} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<MorseCodeGeneratorTool />&#125; related=&#123;<RelatedTools currentSlug={toolSlug} />&#125;>
        &#123;writeUp&#125;
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Morse Code Generator FAQ</h2>
          <p className="text-slate-700">Guidance on encoding conventions, spacing, privacy, and sharing.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}

