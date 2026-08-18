import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { NavajoToEnglishTranslatorTool } from '@/components/tools/NavajoToEnglishTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'navajo-to-english-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Navajo to English Translator';
  const description =
    'Navajo to English translator. Convert Navajo (Diné bizaad) text into English for reading, study, and respectful use.';
  const seoTitle = 'Navajo to English Translator - Translate Diné Bizaad to English';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Navajo to English Translator: Translate Diné Bizaad Online</h2>
        <p>
          A <strong>Navajo to English translator</strong> converts text written in Navajo (Diné bizaad)
          into English so you can read and understand it. This is the reverse direction of our{' '}
          <a href="/navajo-translator">English to Navajo translator</a>, and it answers a different need:
          you already have Navajo text in front of you and you want to know what it says. That happens
          with recordings and transcripts, archival documents, signage, song lyrics, social media posts,
          family papers, and coursework in a Navajo language class.
        </p>
        <p>
          Paste the Navajo text into the box, click translate, and read the English result. The tool is
          free, requires no account, and works on desktop and mobile.
        </p>
        <p>
          Treat the output as a reading aid. Navajo is a grammatically complex language and automatic
          translation into English loses nuance in predictable ways, which the sections below describe
          honestly so you know how much weight to put on any given result.
        </p>

        <h2>What Is Navajo (Diné bizaad)?</h2>
        <p>
          Navajo, or Diné bizaad, is the language of the Diné people and the most widely spoken
          Indigenous language in the United States north of Mexico. It belongs to the Athabaskan family,
          which also includes languages spoken in Alaska and western Canada, and it is spoken primarily
          across the Navajo Nation in Arizona, New Mexico, and Utah.
        </p>
        <p>
          It is a living language with active revitalization work behind it: immersion schools,
          university programs, published dictionaries, broadcast media, and community teaching. When you
          translate Navajo into English you are reading the work of a living language community, and that
          framing matters for how the output should be used.
        </p>

        <h2>Why Navajo to English Translation Is Difficult</h2>
        <p>
          Understanding why automatic translation struggles here helps you judge the output rather than
          trusting it blindly. The difficulty is structural, not a matter of insufficient data alone.
        </p>
        <p>
          <strong>Navajo is verb-centred.</strong> A great deal of meaning that English distributes
          across several words is carried inside a single Navajo verb. A verb can encode who acts, who or
          what is affected, the shape or physical class of the object involved, direction, repetition,
          and whether the action is beginning, ongoing, or completed. One Navajo word can require a full
          English clause to render, and the mapping is rarely one to one.
        </p>
        <p>
          <strong>Classificatory verb stems carry information English has no slot for.</strong> Navajo
          selects a different verb stem depending on whether the thing being handled is round and solid,
          long and rigid, flexible, granular, contained in something, or animate. English uses the same
          verb for all of these. Translating into English therefore discards a distinction the original
          made explicitly, and translating back cannot recover it.
        </p>
        <p>
          <strong>Tone is phonemic.</strong> High and low tone distinguish words that are otherwise
          identical, and tone is written with diacritics. Text that has lost its diacritics, which
          happens constantly in casual typing, on older systems, and in transcription, is genuinely
          ambiguous. The translator has to guess, and it will sometimes guess wrong.
        </p>
        <p>
          <strong>Aspect is grammatically obligatory.</strong> Navajo verbs mark aspect in ways English
          handles loosely with auxiliaries and adverbs. Rendering it in natural English usually means
          choosing one reading and dropping the others.
        </p>

        <h2>How to Use the Navajo to English Translator</h2>
        <p>
          Paste or type your Navajo text into the input box and click Translate to English. The result
          appears in the output box ready to copy.
        </p>
        <p>
          <strong>Keep the diacritics.</strong> This is the single most important thing you can do for
          accuracy. Navajo uses acute accents for high tone, ogoneks for nasalized vowels, and doubled
          vowels for length. Stripping them creates ambiguity that no translator can resolve reliably. If
          you are copying from a source that displays them, make sure they survive the paste.
        </p>
        <p>
          <strong>Work in shorter passages.</strong> Sentence-level or short-paragraph chunks produce
          better results than long blocks, and they make it easier to spot where a translation has gone
          astray.
        </p>
        <p>
          <strong>Check the text before translating.</strong> If the Navajo came from OCR, an automatic
          transcript, or a scan of a handwritten document, verify it first. Errors in the input compound
          in the output, and a mistranscribed character in a tonal language can change the word entirely.
        </p>

        <h2>When to Use a Navajo to English Translator</h2>
        <p>
          <strong>Language study.</strong> If you are learning Diné bizaad, translating passages into
          English and checking your own understanding against the result is a useful practice exercise,
          particularly when you also have an instructor or a dictionary to consult.
        </p>
        <p>
          <strong>Reading archival and family documents.</strong> Letters, notes, recordings, and papers
          in Navajo often sit unread in family collections. A translator gives you a first pass at what a
          document is about, which is enough to decide whether it warrants professional attention.
        </p>
        <p>
          <strong>Understanding media and signage.</strong> Navajo appears in broadcasting, public
          signage, museum exhibits, and increasingly online. A quick reading helps you follow content
          that would otherwise be closed to you.
        </p>
        <p>
          <strong>Research triage.</strong> Researchers working with Navajo-language material can use
          translation to identify which documents in a large collection are relevant before committing to
          professional translation of the ones that matter.
        </p>

        <h2>Accuracy and Limitations</h2>
        <p>
          Automatic Navajo to English translation is genuinely limited, and being specific about how is
          more useful than a general disclaimer.
        </p>
        <p>
          <strong>Training data is scarce.</strong> Navajo has far less digitized parallel text than
          major world languages. Machine translation quality tracks data volume closely, so Navajo output
          is weaker than what you would expect from Spanish or French.
        </p>
        <p>
          <strong>Grammatical nuance is lost by design.</strong> As described above, information carried
          in verb morphology often has nowhere to go in an English sentence. The English will read
          fluently while quietly omitting distinctions the Navajo made.
        </p>
        <p>
          <strong>Fluent output can be wrong.</strong> This is the most important caution. The
          translation will read as confident, natural English whether or not it accurately reflects the
          source. Fluency is not evidence of accuracy, and there is no visible signal separating a good
          translation from a plausible guess.
        </p>
        <p>
          <strong>Ceremonial, traditional, and specialized language will not translate well.</strong>{' '}
          Ceremonial and traditional material carries meaning bound to context and community knowledge.
          Some of it is not appropriate for general circulation at all. Do not run material of that kind
          through an automatic tool and treat the result as a rendering of what it means.
        </p>
        <p>
          For anything consequential, legal, medical, official, published, or historically significant,
          use a certified human translator. The Navajo Nation and accredited language programs are the
          authority here.
        </p>

        <h2>Reading Translations Critically</h2>
        <p>A few habits make the output substantially more useful.</p>
        <p>
          <strong>Translate in both directions.</strong> Run the English result back through the{' '}
          <a href="/navajo-translator">English to Navajo translator</a> and compare it to your original.
          Large divergence signals that something was lost or misread. Close agreement is weak evidence
          of accuracy but better than nothing.
        </p>
        <p>
          <strong>Look up key words yourself.</strong> Published Navajo dictionaries are excellent.
          Checking the two or three words the meaning turns on is often enough to confirm or overturn a
          reading.
        </p>
        <p>
          <strong>Test with material you already understand.</strong> Running a passage whose meaning you
          know reveals how the tool handles that kind of text and calibrates your trust in it.
        </p>
        <p>
          <strong>Watch for hedged or bracketed output.</strong> Where the tool notes uncertainty, take
          the note seriously. Those are the places most likely to be wrong.
        </p>

        <h2>Working With Text From Recordings and Scans</h2>
        <p>
          Much Navajo text arrives through transcription or OCR, and both introduce errors that damage
          translation before it starts.
        </p>
        <p>
          <strong>OCR frequently mishandles diacritics.</strong> Optical character recognition trained
          mainly on English routinely drops acute accents and ogoneks or misreads them as noise. Since
          those marks are phonemic in Navajo, the resulting text is materially different from what was
          written. Proofread OCR output against the image before translating.
        </p>
        <p>
          <strong>Automatic speech transcription is unreliable for Navajo.</strong> Speech recognition
          depends on training data in the target language, which is limited. Transcripts produced by
          general-purpose tools should be verified by someone who reads the language.
        </p>
        <p>
          <strong>Clean the text first.</strong> Scanned and copied text often carries invisible
          characters, irregular spacing, and line breaks mid-sentence that confuse translation. Our{' '}
          <a href="/ai-tools/ai-cleanup-tools">text cleanup tools</a> remove those artifacts without
          touching the words.
        </p>

        <h2>Respectful Use of Diné Bizaad</h2>
        <p>
          Translating a language is not a neutral technical act, particularly for Indigenous languages
          with a history of suppression. Navajo speakers were punished for using their language in
          boarding schools within living memory, and revitalization today is deliberate community work.
        </p>
        <p>
          A few principles follow. Material shared within a community is not automatically yours to
          translate and circulate more widely. Ceremonial and traditional knowledge in particular carries
          protocols about who may access it. If you are publishing anything involving Navajo text,
          involve Navajo speakers rather than relying on automatic output. And credit the language
          community whose work makes any of this possible.
        </p>
        <p>
          Using a translator to read something addressed to you, to study the language, or to understand
          public material is ordinary and fine. Extracting and republishing community material because a
          tool made it legible is a different act.
        </p>

        <h2>Privacy</h2>
        <p>
          Text you enter is processed to produce the translation and is not retained after your session,
          sold, or used for training. If you are working with family documents, unpublished research, or
          culturally sensitive material, that matters. For purely local text processing with no
          transmission at all, the client-side tools in our{' '}
          <a href="/ai-tools/text-tools">text tools</a> category run entirely in your browser.
        </p>

        <h2>Related Translation and Text Tools</h2>
        <p>
          The companion tool in the other direction is our{' '}
          <a href="/navajo-translator">English to Navajo translator</a>. Both sit in the{' '}
          <a href="/ai-tools/translator-tools">translator tools</a> category, which also covers
          historical English registers including <a href="/old-english-translator">Old English</a>,{' '}
          <a href="/middle-english-translator">Middle English</a>, and{' '}
          <a href="/shakespearean-translator">Shakespearean</a> style. Those are stylistic converters
          rather than translators between natural languages, a distinction worth keeping clear.
        </p>
        <p>
          For preparing text before translation, the{' '}
          <a href="/ai-tools/ai-cleanup-tools">AI cleanup tools</a> remove invisible characters and
          normalize spacing, and the <a href="/ai-tools/text-tools">text tools</a> handle case
          conversion, duplicate removal, and formatting. Browse the full{' '}
          <a href="/ai-tools">tool directory</a> for everything else.
        </p>

        <h2>Summary</h2>
        <p>
          This Navajo to English translator converts Diné bizaad text into English for reading and study.
          It is free, needs no account, and runs in your browser. Keep diacritics intact, work in short
          passages, verify OCR and transcripts before translating, and read the output critically,
          remembering that fluent English is not evidence of an accurate translation. For official,
          legal, published, or culturally significant material, use a certified human translator and
          consult resources from the Navajo Nation.
        </p>
      </div>
    </section>
  );
}

export default async function NavajoToEnglishTranslatorPage() {
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const pageFaqs: FaqItem[] = [
    {
      category: 'General',
      question: 'What is a Navajo to English translator?',
      answer:
        'It is an online tool that converts text written in Navajo (Diné bizaad) into English so you can read and understand it. This is the reverse direction of an English to Navajo translator: you already have Navajo text and want to know what it says. Use it for study, reading archival documents, and understanding Navajo media.',
    },
    {
      category: 'General',
      question: 'Is this Navajo to English translator free?',
      answer:
        'Yes. It is free to use with no account, no signup, and no usage limits. Paste your Navajo text, click translate, and copy the English result.',
    },
    {
      category: 'General',
      question: 'How is this different from the English to Navajo translator?',
      answer:
        'Direction. The English to Navajo translator takes English input and produces Navajo. This tool does the reverse, taking Navajo input and producing English. They serve different needs: one helps you write or learn Navajo, the other helps you read it.',
    },
    {
      category: 'Usage',
      question: 'How do I use the Navajo to English translator?',
      answer:
        'Paste or type your Navajo text into the input box and click Translate to English. The result appears ready to copy. For best results keep the diacritics intact, work in shorter passages, and verify the input text if it came from OCR or an automatic transcript.',
    },
    {
      category: 'Usage',
      question: 'Why do diacritics matter so much?',
      answer:
        'Because tone is phonemic in Navajo. Acute accents mark high tone, ogoneks mark nasalized vowels, and doubled vowels mark length, and these distinguish words that are otherwise identical. Text stripped of diacritics is genuinely ambiguous, so the translator has to guess and will sometimes guess wrong.',
    },
    {
      category: 'Usage',
      question: 'Should I translate long documents at once?',
      answer:
        'Better to work in sentence-level or short-paragraph chunks. Shorter passages produce more reliable results and make it much easier to spot where a translation has gone astray. Long blocks hide errors in fluent-sounding output.',
    },
    {
      category: 'Technical',
      question: 'What is Navajo (Diné bizaad)?',
      answer:
        'Navajo is the language of the Diné people and the most widely spoken Indigenous language in the United States north of Mexico. It belongs to the Athabaskan family and is spoken primarily across the Navajo Nation in Arizona, New Mexico, and Utah. It is a living language with active revitalization work behind it.',
    },
    {
      category: 'Technical',
      question: 'Why is Navajo hard to translate into English?',
      answer:
        'Navajo is verb-centred, so meaning English spreads across several words is packed inside a single verb encoding actor, object, direction, repetition, and aspect. Classificatory verb stems also mark whether an object is round, long, flexible, granular, or animate, a distinction English has no slot for and simply loses.',
    },
    {
      category: 'Technical',
      question: 'What are classificatory verb stems?',
      answer:
        'Navajo selects a different verb stem depending on the physical nature of the object involved: round and solid, long and rigid, flexible, granular, contained, or animate. English uses one verb for all of these, so translating into English discards a distinction the Navajo made explicitly, and translating back cannot recover it.',
    },
    {
      category: 'Technical',
      question: 'How does aspect affect translation?',
      answer:
        'Navajo verbs obligatorily mark aspect, distinguishing whether an action is beginning, ongoing, repeated, or completed. English handles this loosely with auxiliaries and adverbs, so rendering Navajo aspect in natural English usually means choosing one reading and quietly dropping the alternatives.',
    },
    {
      category: 'Detection and Limits',
      question: 'How accurate is automatic Navajo to English translation?',
      answer:
        'Limited, for two reasons. Navajo has far less digitized parallel text than major world languages, and machine translation quality tracks data volume closely. Separately, grammatical information carried in verb morphology often has nowhere to go in an English sentence, so it is lost by design rather than by error.',
    },
    {
      category: 'Detection and Limits',
      question: 'Can I trust a translation that reads fluently?',
      answer:
        'No, and this is the most important caution on this page. The output will read as confident natural English whether or not it accurately reflects the source. Fluency is not evidence of accuracy, and there is no visible signal separating a good translation from a plausible guess.',
    },
    {
      category: 'Detection and Limits',
      question: 'Should I translate ceremonial or traditional material?',
      answer:
        'No. Ceremonial and traditional material carries meaning bound to context and community knowledge, and some of it is not appropriate for general circulation at all. Do not run material of that kind through an automatic tool and treat the result as a rendering of what it means.',
    },
    {
      category: 'Detection and Limits',
      question: 'When do I need a certified human translator?',
      answer:
        'For anything consequential: legal, medical, official, published, or historically significant material. Automatic translation is a reading aid for study and triage. The Navajo Nation and accredited language programs are the authority for certified translation.',
    },
    {
      category: 'Usage',
      question: 'How can I check whether a translation is right?',
      answer:
        'Run the English result back through the English to Navajo translator and compare with your original, since large divergence signals something was lost. Look up the two or three words the meaning turns on in a published Navajo dictionary. And test the tool on material you already understand to calibrate your trust in it.',
    },
    {
      category: 'Compatibility and Formats',
      question: 'Why does OCR text translate badly?',
      answer:
        'Optical character recognition trained mainly on English routinely drops acute accents and ogoneks or misreads them as noise. Since those marks are phonemic in Navajo, the resulting text is materially different from what was written. Proofread OCR output against the original image before translating.',
    },
    {
      category: 'Compatibility and Formats',
      question: 'Can I translate automatic speech transcripts?',
      answer:
        'Cautiously. Speech recognition depends on training data in the target language, which is limited for Navajo, so transcripts from general-purpose tools contain errors. Have someone who reads the language verify the transcript before you rely on a translation of it.',
    },
    {
      category: 'Compatibility and Formats',
      question: 'Should I clean text before translating?',
      answer:
        'Yes, if it came from a scan, a webpage, or a PDF. Copied text often carries invisible characters, irregular spacing, and line breaks mid-sentence that confuse translation. Cleanup tools remove those artifacts without changing the words themselves.',
    },
    {
      category: 'Compatibility and Formats',
      question: 'Does the translator work on mobile?',
      answer:
        'Yes. It runs in your browser on phones and tablets with no install or signup. You can paste Navajo text, translate it, and copy the English result into any app.',
    },
    {
      category: 'Use cases',
      question: 'Can I use this to study Navajo?',
      answer:
        'Yes, and it works well as a practice exercise: translate a passage yourself, then compare against the tool and investigate the differences. Pair it with a published dictionary and an instructor. It supports study rather than replacing instruction from the language community.',
    },
    {
      category: 'Use cases',
      question: 'Can I use it on family documents and letters?',
      answer:
        'Yes, and this is one of the most valuable uses. Letters, notes, and papers in Navajo often sit unread in family collections, and a translation gives you a first pass at what a document is about. That is usually enough to decide whether it warrants professional attention.',
    },
    {
      category: 'Use cases',
      question: 'Is it useful for research?',
      answer:
        'For triage, yes. Researchers working with Navajo-language collections can use translation to identify which documents are relevant before committing to professional translation of the ones that matter. Do not cite automatic translations as authoritative renderings in published work.',
    },
    {
      category: 'Privacy and Security',
      question: 'Is my text stored?',
      answer:
        'Text you enter is processed to produce the translation and is not retained after your session, sold, or used for training. If you are working with family documents or unpublished research, the client-side tools in our text tools category run entirely in your browser with no transmission at all.',
    },
    {
      category: 'Advanced Workflow',
      question: 'What is respectful use of a Navajo translator?',
      answer:
        'Reading something addressed to you, studying the language, or understanding public material is ordinary and fine. Extracting and republishing community material because a tool made it legible is a different act. If you are publishing anything involving Navajo text, involve Navajo speakers rather than relying on automatic output.',
    },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell
        tool={{ ...toolData, title, shortDescription: description }}
        ui={<NavajoToEnglishTranslatorTool />}
        related={<RelatedTools currentSlug={toolData.slug} />}
      >
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Common questions about translating Navajo (Diné bizaad) into English.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
