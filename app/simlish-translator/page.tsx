import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { SimlishTranslatorTool } from '@/components/tools/SimlishTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'simlish-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Simlish Translator';
  const description = 'Translate English or any text into Simlish, the fictional language from The Sims games.';
  const seoTitle = 'Simlish Translator - English to Simlish Converter';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Simlish Translator: English to Simlish Converter</h2>
        <p>A Simlish translator is an online tool that converts English or other text into Simlish—the fictional language used in The Sims series. Simlish is not a full language with fixed grammar and vocabulary; it is a "simulated" language made of sounds and phrases that suggest speech without real meaning. Fans use Simlish translators to create fun captions, role-play, or content inspired by The Sims. You type your text, run the tool, and get a Simlish-style version that echoes the mood or length of your input.</p>
        <p>This free Simlish translator runs in your browser. You enter your text, click translate, and copy the result. Because Simlish does not have an official written standard, different tools may produce different outputs—often playful, phonetic-style text that evokes the sound of Simlish. In this guide we explain what Simlish is, how to use a Simlish translator, when to use it for fun and content creation, and what to expect from English to Simlish conversion.</p>

        <h2>What Is Simlish?</h2>
        <p>Simlish is the fictional language spoken by characters in The Sims games. It was designed to sound like speech without being any real language, so players worldwide hear the same gibberish and project their own meaning. Simlish uses recurring sounds and phrases (e.g., "Sul sul" for hello, "Dag dag" for goodbye in some versions) but has no complete dictionary or grammar. A Simlish translator therefore cannot "translate" in the strict sense; it typically maps your words to Simlish-sounding phrases or generates text that mimics the style of Simlish.</p>

        <h2>How to Use a Simlish Translator</h2>
        <p>Open the Simlish translator, type or paste your English (or other) text into the input box, and click Translate or Convert. The tool returns a Simlish-style version. Copy the result for use in social posts, fan content, or messages. Because there is no official written Simlish standard, results are interpretive and may vary by tool.</p>

        <h2>When to Use Simlish Translation</h2>
        <p>Simlish translators are used for fun—social media captions, The Sims fan content, role-play, or jokes. They are not for real communication. Use them when you want to add a Sims-themed twist to text or create content that references the game. Results are best treated as entertainment rather than accurate translation.</p>

        <h2>Limitations</h2>
        <p>Simlish has no official written form or complete vocabulary, so "translation" is approximate and creative. Different tools may give different results. The output is for fun and fandom, not for meaningful translation. Use it in that spirit.</p>

        <h2>Privacy</h2>
        <p>Many Simlish translators run in the browser and do not send your text to a server. Check the tool description. This tool is designed to process text locally when possible.</p>

        <h2>Conclusion</h2>
        <p>Use a Simlish translator to turn English or other text into Simlish-style phrases for fun and fan content. This free Simlish translator lets you convert text and copy the result for captions, messages, or creative projects. Enjoy it as a playful reference to The Sims, not as a real language converter.</p>
      </div>
    </section>
  );
}

export default async function SimlishTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a Simlish translator?', answer: 'A Simlish translator is a tool that converts English or other text into Simlish—the fictional language from The Sims games. It produces Simlish-style phrases or text for fun and fan content. Simlish has no official written standard, so output is interpretive.' },
    { category: 'General', question: 'Is the Simlish translator free?', answer: 'Yes. This Simlish translator is free to use. You enter text, run the tool, and copy the result. Many tools run in the browser and do not require sign-up.' },
    { category: 'Usage', question: 'How do I use the Simlish translator?', answer: 'Type or paste your English (or other) text into the input box and click Translate or Convert. Copy the Simlish-style result. Use it for captions, fan content, or messages. Results vary by tool because Simlish has no official written form.' },
    { category: 'Technical', question: 'What is Simlish?', answer: 'Simlish is the made-up language spoken by characters in The Sims. It sounds like speech but is not a real language. Some phrases (e.g., greetings) are recognizable to fans, but there is no full dictionary or grammar.' },
    { category: 'Technical', question: 'Is Simlish a real language?', answer: 'No. Simlish is a constructed language for The Sims. It has recurring sounds and phrases but no complete vocabulary or grammar. A Simlish translator creates text that evokes Simlish style rather than translating meaning.' },
    { category: 'Use cases', question: 'When would I use a Simlish translator?', answer: 'Use it for fun—social media captions, The Sims fan content, role-play, or jokes. It is not for real communication. Treat the output as entertainment and fandom.' },
    { category: 'Use cases', question: 'Can I translate from Simlish to English?', answer: 'Simlish has no fixed meaning, so "Simlish to English" is not true translation. Some tools may try to match Simlish phrases to approximate English for fun; results are not reliable for real meaning.' },
    { category: 'General', question: 'Why do different Simlish translators give different results?', answer: 'There is no official written Simlish standard. Each tool interprets how to represent Simlish in text differently. Results are creative and vary by tool.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'Many Simlish translators run in the browser and process text locally. Check the tool. This tool is designed to process locally when possible.' },
    { category: 'General', question: 'Who created Simlish?', answer: 'Simlish was created for The Sims by Maxis/EA. It is designed to sound like speech without being any real language, so it works for a global audience.' },
    { category: 'Use cases', question: 'Can I use Simlish text in my game or mod?', answer: 'You can use Simlish-style text in fan content. For official games or mods, respect EA/Maxis trademarks and guidelines. This translator is for fun and non-commercial use.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Some tools limit input length. For Simlish-style output, short phrases and sentences work best and are most recognizable to fans.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. Browser-based Simlish translators work on phones and tablets. Enter text and copy the result as on desktop.' },
    { category: 'General', question: 'What does "Sul sul" mean?', answer: '"Sul sul" is a well-known Simlish greeting from The Sims. Fans use it as "hello." The Simlish translator may use such phrases or similar-sounding text.' },
    { category: 'Formatting', question: 'Can I get Simlish in different styles?', answer: 'It depends on the tool. Some offer one style; others may offer variations. Simlish has no formal writing system, so styles are creative interpretations.' },
    { category: 'Use cases', question: 'Is a Simlish translator good for learning?', answer: 'Simlish is not a real language, so there is nothing to "learn" in a linguistic sense. The tool is for fun and fandom, not language learning.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. Online Simlish translators run in your browser. No download or install required.' },
    { category: 'Workflow', question: 'Can I copy Simlish to social media?', answer: 'Yes. Copy the output and paste into Twitter, Instagram, Discord, etc. It will display as text. Use it for captions or Sims-themed posts.' },
    { category: 'Technical', question: 'Why is the output not the same as in the game?', answer: 'In-game Simlish is spoken, not written. There is no official written form. The translator generates text that suggests Simlish style; it will not match spoken Simlish word-for-word.' },
    { category: 'General', question: 'Can I translate long paragraphs to Simlish?', answer: 'You can enter long text, but Simlish-style output is most fun and recognizable in short phrases. Long paragraphs may become repetitive or lose the Simlish feel.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the tool runs locally, your text is not stored on our servers. Check the tool description and privacy policy for details.' },
    { category: 'Use cases', question: 'Can I use Simlish for a username?', answer: 'You can use Simlish-style text for usernames where the platform allows it. Keep it readable and within platform rules. Some sites restrict certain characters.' },
    { category: 'General', question: 'Is Simlish the same in all Sims games?', answer: 'Simlish has evolved across games and expansions, with new phrases and sounds. The translator produces a general Simlish style rather than game-specific dialogue.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<SimlishTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions and answers about the Simlish Translator and English to Simlish conversion.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
