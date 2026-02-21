import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { GanglishTranslatorTool } from '@/components/tools/GanglishTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'ganglish-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Ganglish Translator';
  const description = 'Translate text into Ganglish—a blend of English and Punjabi often used in social and informal contexts.';
  const seoTitle = 'Ganglish Translator - English to Ganglish Converter';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Ganglish Translator: English to Ganglish Converter</h2>
        <p>A Ganglish translator is an online tool that converts English text into Ganglish—a mix of English and Punjabi (and sometimes other South Asian languages) commonly used in informal speech, social media, and messaging. Ganglish blends words and phrases from both languages, often written in Roman script, and is popular among diaspora and bilingual communities. You type English (or mixed input), run the translator, and get a Ganglish-style version that reflects this hybrid style.</p>
        <p>This free Ganglish translator runs in your browser. You enter your text, click translate, and copy the result. Use it for fun, social content, or to approximate Ganglish phrasing. Because Ganglish is informal and varies by region and speaker, translation is interpretive rather than literal. In this guide we explain what Ganglish is, how to use a Ganglish translator, when to use it, and what to expect from English to Ganglish conversion.</p>

        <h2>What Is Ganglish?</h2>
        <p>Ganglish is a blend of "English" and "Gurmukhi/Punjabi" (or more broadly, South Asian languages), often written in Roman script. It mixes English words with Punjabi (or Hindi/Urdu) words and expressions, and is used in casual conversation, social media, and messaging. There is no formal standard; usage varies by community and context. A Ganglish translator tries to produce text that reflects this mix—adding or substituting words and phrases that evoke Ganglish style.</p>

        <h2>How to Use a Ganglish Translator</h2>
        <p>Open the Ganglish translator, type or paste your English text into the input box, and click Translate or Convert. The tool returns a Ganglish-style version. Copy the result for use in messages, captions, or social posts. Results may vary by tool and are best treated as informal and fun rather than exact translation.</p>

        <h2>When to Use Ganglish Translation</h2>
        <p>Use a Ganglish translator for informal content, social media, memes, or to approximate how something might be said in a Ganglish style. It is not for formal or official translation. Respect cultural context and use the output in a way that is appropriate and respectful.</p>

        <h2>Limitations</h2>
        <p>Ganglish has no fixed grammar or vocabulary; it varies by region and speaker. Translation is approximate and creative. Different tools may give different results. Use the output for fun and informal purposes, not for legal, medical, or formal communication.</p>

        <h2>Privacy</h2>
        <p>Many Ganglish translators run in the browser and do not send your text to a server. Check the tool. This tool is designed to process locally when possible.</p>

        <h2>Conclusion</h2>
        <p>Use a Ganglish translator to convert English into Ganglish-style text for informal and social use. This free Ganglish translator lets you enter text and copy the result for messages and content. Enjoy it as a fun, informal converter and use output with respect for the languages and communities involved.</p>
      </div>
    </section>
  );
}

export default async function GanglishTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a Ganglish translator?', answer: 'A Ganglish translator converts English (or mixed) text into Ganglish—a blend of English and Punjabi (and sometimes other South Asian languages) often written in Roman script. It is used for informal and social content.' },
    { category: 'General', question: 'Is the Ganglish translator free?', answer: 'Yes. This Ganglish translator is free to use. You enter text, run the tool, and copy the result. Many tools run in the browser and do not require sign-up.' },
    { category: 'Usage', question: 'How do I use the Ganglish translator?', answer: 'Type or paste your English text into the input box and click Translate or Convert. Copy the Ganglish-style result. Use it for informal messages, social media, or fun. Results are interpretive, not literal translation.' },
    { category: 'Technical', question: 'What is Ganglish?', answer: 'Ganglish is a mix of English and Punjabi (and related languages), often in Roman script. It is used in casual speech, social media, and messaging. There is no formal standard; it varies by region and speaker.' },
    { category: 'Use cases', question: 'When would I use a Ganglish translator?', answer: 'Use it for informal content, social posts, memes, or to approximate Ganglish phrasing. It is not for formal or official translation. Use output respectfully and in appropriate contexts.' },
    { category: 'General', question: 'Is Ganglish a real language?', answer: 'Ganglish is not a separate language but a style of mixing English and Punjabi (and sometimes Hindi/Urdu). It is a colloquial, informal way of speaking and writing.' },
    { category: 'Technical', question: 'Why do different Ganglish translators give different results?', answer: 'Ganglish has no fixed vocabulary or grammar. Each tool interprets how to blend or substitute words differently. Results are creative and vary.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'Many Ganglish translators run in the browser and process text locally. Check the tool. This tool is designed to process locally when possible.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Some tools limit input length. For informal use, short to medium text is typical and works well.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. Browser-based Ganglish translators work on phones and tablets.' },
    { category: 'General', question: 'Can I translate from Ganglish to English?', answer: 'Some tools may offer Ganglish-to-English or mixed input. Because Ganglish is informal and variable, "translation" is approximate. Use for fun and context, not formal meaning.' },
    { category: 'Use cases', question: 'Can I use Ganglish for social media?', answer: 'Yes. Ganglish is commonly used on social media and messaging. Copy the translator output for captions or posts. Use in a respectful and appropriate way.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. Online Ganglish translators run in your browser. No download or install required.' },
    { category: 'Formatting', question: 'What script does Ganglish use?', answer: 'Ganglish is often written in Roman (Latin) script, mixing English and Punjabi words. Some output may include transliterated Punjabi. The translator typically produces Roman-script text.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the tool runs locally, your text is not stored on our servers. Check the tool and privacy policy.' },
    { category: 'Use cases', question: 'Is Ganglish the same as Hinglish?', answer: 'Ganglish often refers to English–Punjabi mix; Hinglish refers to English–Hindi mix. Both are informal blends. The translator may focus on Punjabi-influenced Ganglish.' },
    { category: 'General', question: 'Who uses Ganglish?', answer: 'Ganglish is used by Punjabi-speaking and diaspora communities in informal settings—conversation, social media, and messaging. It is not used for formal writing or official communication.' },
    { category: 'Workflow', question: 'Can I copy Ganglish to WhatsApp or Instagram?', answer: 'Yes. Copy the output and paste into WhatsApp, Instagram, or other apps. It will display as text. Use appropriately and respectfully.' },
    { category: 'Technical', question: 'Is the translation accurate?', answer: 'Ganglish has no fixed standard, so "accuracy" is relative. The translator produces text that evokes Ganglish style. Use for fun and informal purposes, not for precise translation.' },
    { category: 'General', question: 'Can I use Ganglish for subtitles?', answer: 'You could use translator output as a starting point for informal subtitles, but review and adjust for context and audience. Formal subtitles should use proper translation services.' },
    { category: 'Use cases', question: 'Is a Ganglish translator good for learning?', answer: 'It can expose you to vocabulary and phrasing, but it is not a substitute for learning Punjabi or English properly. Use as a fun tool alongside formal learning.' },
    { category: 'Limits', question: 'Does it support long paragraphs?', answer: 'You can enter long text; some tools limit length. For best results, shorter sentences and phrases often work better for informal style.' },
    { category: 'General', question: 'What is English to Ganglish?', answer: 'English to Ganglish means converting standard English text into a form that mixes or reflects Ganglish—blending English with Punjabi-influenced words and expressions in Roman script.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<GanglishTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions and answers about the Ganglish Translator and English to Ganglish conversion.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
