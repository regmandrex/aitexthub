import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { GibberishTranslatorTool } from '@/components/tools/GibberishTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'gibberish-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Gibberish Translator';
  const description = 'Translate text into Gibberish or decode Gibberish back to readable English.';
  const seoTitle = 'Gibberish Translator - Encode and Decode Gibberish';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Gibberish Translator: Encode and Decode Gibberish</h2>
        <p>A Gibberish translator is an online tool that encodes English (or other text) into Gibberish—a playful "language" where syllables or sounds are inserted so words sound like nonsense but can be decoded back. Kids and groups often use Gibberish as a secret code or game. You type your message, encode it to Gibberish, and share it; someone else can decode it back to readable text with the same tool or rules. Some tools also decode Gibberish back to English.</p>
        <p>This free Gibberish translator runs in your browser. You enter text, choose encode or decode, and get the result. No sign-up is required. Gibberish rules vary (e.g., "idig" or "ithag" inserted after each syllable), so different tools may use different schemes. In this guide we explain what Gibberish is, how to use a Gibberish translator, when to use it for fun and games, and how encoding and decoding work.</p>

        <h2>What Is Gibberish?</h2>
        <p>Gibberish (in this context) is a simple code where you insert a fixed syllable (e.g., "idig," "ithag," or "ub") after each vowel or syllable of a word. "Hello" might become "Hidigellidigo" or similar—sounding like nonsense but decodable if you know the rule. It is used for play, secret messages, and language games. A Gibberish translator automates the encoding and decoding so you do not have to do it by hand.</p>

        <h2>How to Use a Gibberish Translator</h2>
        <p>Open the Gibberish translator. To encode: type your English text and click Encode or Translate. Copy the Gibberish result and share it. To decode: paste Gibberish text and click Decode. Copy the recovered English. Make sure both sides use the same Gibberish scheme (same tool or same rules) or decoding may fail.</p>

        <h2>When to Use Gibberish</h2>
        <p>Use a Gibberish translator for fun—secret messages between friends, games, or teaching simple encoding. It is not secure for real secrets; it is easy to crack once someone knows the pattern. Great for kids, parties, and light-hearted communication.</p>

        <h2>Encoding vs Decoding</h2>
        <p>Encoding turns readable text into Gibberish by inserting the code syllable. Decoding reverses the process and strips those syllables to recover the original text. Both sides must use the same rules (e.g., "idig" after each vowel). If your tool offers multiple Gibberish types, use the same one for encode and decode.</p>

        <h2>Limitations</h2>
        <p>Gibberish is not encryption—it is a simple pattern. Anyone who learns the rule can decode it. Different tools may use different Gibberish schemes, so text encoded with one tool might not decode correctly with another. Use it for play, not for sensitive information.</p>

        <h2>Privacy</h2>
        <p>Many Gibberish translators run in the browser and do not send your text to a server. Check the tool. This tool is designed to process locally when possible.</p>

        <h2>Conclusion</h2>
        <p>Use a Gibberish translator to encode messages into Gibberish or decode Gibberish back to English. This free Gibberish translator lets you encode and decode for fun, games, and secret messages. Use the same scheme for both encoding and decoding so messages come out right.</p>
      </div>
    </section>
  );
}

export default async function GibberishTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a Gibberish translator?', answer: 'A Gibberish translator encodes readable text into Gibberish (a playful code with inserted syllables) or decodes Gibberish back to English. You use it for fun, secret messages, and games.' },
    { category: 'General', question: 'Is the Gibberish translator free?', answer: 'Yes. This Gibberish translator is free to use. You can encode and decode text in the browser. Many tools do not require sign-up and process text locally.' },
    { category: 'Usage', question: 'How do I use the Gibberish translator?', answer: 'To encode: enter your English text and click Encode or Translate. Copy the Gibberish. To decode: paste Gibberish text and click Decode. Copy the English result. Use the same tool or scheme for both so decoding works.' },
    { category: 'Technical', question: 'What is Gibberish?', answer: 'Gibberish here means a simple code where a fixed syllable (e.g., "idig") is inserted after each vowel or syllable. Words sound like nonsense but can be decoded with the same rule.' },
    { category: 'Technical', question: 'How does Gibberish encoding work?', answer: 'Encoding inserts a code syllable (e.g., "idig") after each vowel or syllable. "Hi" might become "Hidigi." Decoding removes those syllables to get back "Hi." The exact rule depends on the tool.' },
    { category: 'Use cases', question: 'When would I use a Gibberish translator?', answer: 'Use it for fun—secret messages, games, teaching simple codes, or jokes. It is not for secure communication. Great for kids and light-hearted use.' },
    { category: 'Use cases', question: 'Can I decode Gibberish from someone else?', answer: 'Only if you use the same Gibberish scheme (same tool or same rules). Different tools use different syllables and rules, so text from one may not decode in another.' },
    { category: 'General', question: 'Is Gibberish a real language?', answer: 'No. Gibberish is a simple encoding game with a repeatable pattern. It is not a language with grammar or vocabulary. It is a code that can be encoded and decoded.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'Many Gibberish translators run in the browser and process text locally. Check the tool. This tool is designed to process locally when possible.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Some tools limit input length. For games and short messages, this is usually enough. Very long text may need to be split.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. Browser-based Gibberish translators work on phones and tablets. Encode or decode on the go.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. Online Gibberish translators run in your browser. No download or install required.' },
    { category: 'Technical', question: 'Why can\'t I decode this Gibberish?', answer: 'The text may have been encoded with a different Gibberish scheme (different syllable or rule). Use the same tool the sender used, or ask which scheme they used.' },
    { category: 'Formatting', question: 'What Gibberish schemes are there?', answer: 'Common schemes use "idig," "ithag," "ub," or similar after vowels or syllables. Each tool may support one or more. Check the tool description.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the tool runs locally, your text is not stored on our servers. Check the tool and privacy policy.' },
    { category: 'Use cases', question: 'Is Gibberish good for kids?', answer: 'Yes. Gibberish is a simple, fun code that kids can use for secret messages and games. The translator makes encoding and decoding easy.' },
    { category: 'General', question: 'Can I use Gibberish for passwords?', answer: 'No. Gibberish is a trivial code, not encryption. Do not use it for passwords or sensitive data. Use proper encryption for secrets.' },
    { category: 'Workflow', question: 'Can I copy Gibberish to messages?', answer: 'Yes. Copy the encoded Gibberish and paste into WhatsApp, SMS, or social media. The recipient can paste it into the same tool and decode.' },
    { category: 'Technical', question: 'Is Gibberish the same as Pig Latin?', answer: 'No. Pig Latin moves the first consonant cluster to the end and adds "ay." Gibberish inserts a syllable after each vowel or syllable. They are different games.' },
    { category: 'Use cases', question: 'Who uses a Gibberish translator?', answer: 'Kids, teachers, friends sharing secret messages, and anyone playing language or code games. It is for fun and informal use.' },
    { category: 'General', question: 'What is decode Gibberish?', answer: 'Decode Gibberish means turning Gibberish text back into readable English (or the original language) by reversing the encoding rule—removing the inserted syllables.' },
    { category: 'Limits', question: 'Does it support other languages?', answer: 'Most Gibberish tools are designed for English (letter-by-letter or syllable-based). Other languages may work if the tool supports them or if you type in Roman script.' },
    { category: 'General', question: 'Is Gibberish secure?', answer: 'No. Gibberish is a simple pattern, not encryption. Anyone who learns the rule can decode it. Use it for play, not for real secrets.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<GibberishTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions and answers about the Gibberish Translator and encode/decode Gibberish.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
