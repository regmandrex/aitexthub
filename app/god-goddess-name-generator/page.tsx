import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { GodGoddessNameGeneratorTool } from '@/components/tools/GodGoddessNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'god-goddess-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'God & Goddess Name Generator',
    description: 'Generate god and goddess names with meanings. Choose culture (Greek, Norse, Egyptian, Roman) and get deity names for fiction, games, and storytelling.',
    seoTitle: 'God & Goddess Name Generator - Deity Names With Meaning',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>God & Goddess Name Generator - Deity Names With Meaning</h2>
        <h2>Introduction</h2>
        <p>This guide explains how to use a god and goddess name generator to create deity-style names for fiction, games, and storytelling. The tool runs in your browser and lets you choose culture (Greek, Norse, Egyptian, Roman, or any) and type (gods only, goddesses only, or both). You get 1–24 names per run with optional meanings. The generator does not store data and runs entirely in your browser. No sign-up is required.</p>
        <p>People search for god goddess name generator or deity names with meaning; this page serves those intents with one free generator. For other character names try our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link> or <Link href="/royal-surname-generator">royal surname generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>What Is a God and Goddess Name Generator?</h2>
        <p>A god and goddess name generator creates deity-style names inspired by mythologies (Greek, Norse, Egyptian, Roman). You choose culture and whether you want gods, goddesses, or both, and get names with optional meanings at the click of a button. The tool uses curated name elements and meanings so each run produces new combinations. The output is for creative use only. This free tool runs in your browser with no sign-up.</p>
        <p>The output can include the name, culture, type (god or goddess), and an optional meaning. You can copy the list and paste it into a notes app, then pick the names that fit your story or game.</p>
        <h2>Why This God and Goddess Name Generator Matters</h2>
        <p>Choosing believable deity names for fiction or games can be time-consuming. A god goddess name generator speeds up brainstorming. You get options in seconds and can filter by culture and type. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>
        <h2>How to Use This God and Goddess Name Generator</h2>
        <p>Follow these steps: choose a culture (Greek, Norse, Egyptian, Roman, or Any); choose type (Gods only, Goddesses only, or Gods and goddesses); set how many names you want (1–24); optionally check &quot;Include meaning&quot;; click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; paste into your notes and pick one; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a God and Goddess Name Generator</h2>
        <p>Use this generator when you need deity name ideas quickly. Key use cases: fantasy and myth-inspired fiction; tabletop RPGs and games; storytelling and worldbuilding; creative writing. The output is for inspiration only; names are inspired by mythology but are for creative use.</p>
        <h2>Use Cases in Detail</h2>
        <p>Writers use the god goddess name generator for mythological or fantasy characters. Game masters use it for deity NPCs or pantheons. Run the generator multiple times to build a shortlist. You can mix cultures by choosing &quot;Any culture&quot; or run once per culture. For other naming styles try our ancient Greek or royal surname generator; see our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Deity Naming Style and Cultures</h2>
        <p>The generator offers Greek, Norse, Egyptian, and Roman deity names. Each culture uses curated name elements inspired by those mythologies. You can request gods only, goddesses only, or both. Optional meanings (e.g. &quot;sky or thunder&quot;, &quot;love and beauty&quot;) help you match names to character roles. The output is for creative use only.</p>
        <h2>How the God and Goddess Name Generator Works (Step by Step)</h2>
        <p>When you open the page, you choose culture, type, number of names (1–24), and whether to include meanings. Clicking &quot;Generate names&quot; triggers the tool to randomly pick from curated name and meaning lists in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into your document. To get more ideas, run the generator again.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This god and goddess name generator runs entirely in your browser. Names and meanings are created locally; your choices and generated list are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all generated names (and meanings, if enabled) to your clipboard. Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many deity names, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if needed. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>
        <h2>No Download or Account Required</h2>
        <p>This god and goddess name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set your options, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a God and Goddess Name Generator?</h2>
        <p>Writers use it for fantasy and myth-inspired fiction. Tabletop GMs use it for deity NPCs and pantheons. The same tool works for storytelling and worldbuilding. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the God and Goddess Name Generator</h2>
        <p>Run the generator several times and paste all results into one document. Use &quot;Any culture&quot; for variety or pick one culture per run to build a pantheon. Turn &quot;Include meaning&quot; on to match names to character roles. For other naming tools try our ancient Greek or royal surname generator; see our homepage for the full list.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated name and meaning elements inspired by Greek, Norse, Egyptian, and Roman mythologies. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only; it is not a scholarly or exhaustive source.</p>
        <h2>Combining With Other Generators</h2>
        <p>Use this generator for deity names and our ancient Greek name generator for human-style Greek names or our royal surname generator for noble surnames. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, choose culture and type, set the number of names (e.g. 12 or 24), optionally enable meanings, click generate, then copy the list. Paste into your notes and pick the names that fit your characters. Run the generator again for more options. No account or download is required.</p>
        <h2>Quick Reference: God and Goddess Name Generator at a Glance</h2>
        <p>The god and goddess name generator produces 1–24 names per run, with no daily limit. You can choose Greek, Norse, Egyptian, Roman, or any culture, and gods only, goddesses only, or both. Optional meanings help you match names to roles. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access.</p>
        <h2>Choosing Culture and Type</h2>
        <p>Use Greek, Norse, Egyptian, or Roman for a single-mythology feel, or &quot;Any culture&quot; for a mixed pantheon. Use &quot;Gods only&quot; or &quot;Goddesses only&quot; when you need one type, or &quot;Gods and goddesses&quot; for both. The &quot;Include meaning&quot; option adds short meanings (e.g. sky, war, love) so you can pick names that fit character roles.</p>
        <h2>Batch Generation and Building a Shortlist</h2>
        <p>Run the god goddess name generator multiple times with 12 or 24 names per run. Copy each batch into a single document and skim for names that fit your story or game. The generator has no daily limit. For other naming styles try our ancient Greek or royal surname generator; see our homepage for more tools.</p>
        <h2>Formatting and Pasting Generated Names</h2>
        <p>The god and goddess name generator outputs one name per line (with optional culture, type, and meaning). When you paste into a notes app or document, the formatting is preserved. If you see extra spaces or line breaks after pasting from the web, run the text through a space remover or strip-HTML tool. Our site has both; see the homepage for links.</p>
        <h2>Tips for Deity Names in Fiction and Games</h2>
        <p>Use meanings to align names with character roles (e.g. a god of war, a goddess of harvest). Run the generator once per culture to build a pantheon, or use &quot;Any culture&quot; for variety. The free god and goddess name generator requires no account and does not store or send your data. Names are created in your browser only. For other naming tools see our homepage.</p>
        <h2>Why Use a God and Goddess Name Generator?</h2>
        <p>Coming up with deity names for multiple characters or a full pantheon can be time-consuming. This god goddess name generator produces deity-style names with optional meanings in seconds. Run it as often as you like and copy the results into your notes. The tool is free and runs in your browser with no sign-up. For other naming tools see our <Link href="/">homepage</Link> for the full list.</p>
        <p>You get up to 24 names per run with no daily limit. Names are created locally and are not sent to our servers. Use the Copy button to copy all names at once. No download or account is required.</p>
        <h2>Summary</h2>
        <p>Use this god and goddess name generator to create deity names for fiction, games, and storytelling. Choose culture (Greek, Norse, Egyptian, Roman, or any) and type (gods, goddesses, or both), set the number of names (1–24), and optionally include meanings. Copy results into your notes. The tool runs locally in your browser with no sign-up. For other naming tools—ancient Greek, royal surname, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool.</p>
        <p>The free god and goddess name generator requires no account and does not store or send your data. Names are created in your browser only. Run it in batches to build a pantheon or shortlist. No download is required and the tool works on all devices. Bookmark the page for quick access when you need deity names with meaning.</p>
        <p>Each run produces up to 24 names with no daily limit. Pair with our ancient Greek or royal surname generator for other naming styles. There is no account, no download, and no daily cap. Use the Copy button to grab all names at once. Names are created in your browser and are not sent to our servers. Run the god and goddess name generator as often as you like to build a pantheon. For other naming tools see our homepage for the full list. No sign-up or download is required. The tool is free and there is no daily cap. Bookmark the page when you need deity names for fiction, games, or storytelling.</p>
        <p>Greek, Norse, Egyptian, and Roman options let you match names to your world. Enable &quot;Include meaning&quot; to see short meanings (e.g. sky, war, love) and pick names that fit character roles. The generator is free and runs entirely in your browser with no account.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a god and goddess name generator?', answer: 'A god and goddess name generator is an online tool that creates deity-style names inspired by mythologies (Greek, Norse, Egyptian, Roman). You choose culture and type (gods, goddesses, or both) and get names with optional meanings at the click of a button. This free tool runs in your browser with no sign-up. The output is for creative use only.' },
  { category: 'Usage', question: 'How do I use the god and goddess name generator?', answer: 'Choose a culture (Greek, Norse, Egyptian, Roman, or Any), choose type (Gods only, Goddesses only, or Gods and goddesses), set how many names you want (1–24), optionally check "Include meaning," then click "Generate names." Use the Copy button to copy all names to your clipboard. Paste into your notes and pick the names that fit. No sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This god and goddess name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for fiction?', answer: 'Yes. The god and goddess name generator is designed for fiction, games, and storytelling. Run the generator multiple times to get a shortlist of deity names for your characters or pantheon. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This god and goddess name generator runs in your browser. When you set your options and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The god and goddess name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose culture and type, set the number of names, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this god and goddess name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'What cultures are supported?', answer: 'The generator supports Greek, Norse, Egyptian, and Roman deity names. You can choose one culture or "Any culture" for a mix. Names and optional meanings are inspired by those mythologies. The output is for creative use only.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes. Writers use the god and goddess name generator for fantasy and myth-inspired fiction. Run the generator multiple times to build a pantheon or shortlist. Keep a naming document so you do not reuse the same name for two characters. The tool is for inspiration only.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have ancient Greek, royal surname, Muslim, anime names, and many others for character and creative names. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this god and goddess name generator to copy all generated names (and meanings, if enabled) to your clipboard. Paste into a notes app or document. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This god and goddess name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs use the god goddess name generator for deity NPCs and pantheons. Choose a culture or "Any" and run the generator several times to build a roster. You can enable "Include meaning" to match names to domains (e.g. war, harvest).' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The god and goddess name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this god and goddess name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Can I get goddess names only?', answer: 'Yes. Use the Type dropdown and select "Goddesses only" to get only goddess-style names. You can also choose "Gods only" or "Gods and goddesses." The generator supports Greek, Norse, Egyptian, and Roman for each type.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes. You can use names from this god and goddess name generator in tabletop games, video games, and other creative projects. Choose a culture or "Any" and run the generator multiple times to build a pantheon. Optional meanings help match names to roles.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this god and goddess name generator for deity names and our ancient Greek name generator for human-style Greek names or our royal surname generator for noble surnames. When you assemble lists from multiple tools keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This god and goddess name generator uses curated name and meaning elements inspired by Greek, Norse, Egyptian, and Roman mythologies. When you click generate, the tool randomly picks from these lists in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Are these real mythological names?', answer: 'Names and meanings are inspired by real mythologies but are combined or used for variety. The generator is for creative inspiration only; it is not a scholarly or exhaustive source. Use for fiction and games; verify with references if you need strict accuracy.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this god and goddess name generator for creative writing or mythology-related activities. Students might generate a list of deity names for a story or project. Emphasize that the tool is for inspiration and that names are inspired by mythology, not exhaustive.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this god and goddess name generator as a source of inspiration for deity or character names. The generated names are algorithm-produced; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific culture?', answer: 'Choose Greek, Norse, Egyptian, or Roman from the Culture dropdown to get only names from that mythology. Use "Any culture" for a mix. Run the generator multiple times to get more options. For other naming styles see our ancient Greek or royal surname generator on our homepage.' },
  { category: 'Privacy', question: 'Can I use it in private or incognito mode?', answer: 'Yes. The god and goddess name generator runs in your browser and works in private or incognito windows. Names are created locally and are not sent to our servers. No account or login is required.' },
];

export default async function GodGoddessNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<GodGoddessNameGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the god and goddess name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
