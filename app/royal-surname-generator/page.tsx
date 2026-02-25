import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'royal-surname-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Royal Surname Generator',
    description: 'Generate royal last names and noble surnames for fiction and creative writing.',
    seoTitle: 'Royal Surname Generator - Royal Last Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Royal Surname Generator - Royal Last Names and Noble Surnames</h2>
        <h2>Introduction</h2>
        <p>This guide explains how to use a royal surname generator (or royal last name generator) to create royal and noble-style last names for fiction and creative writing. The tool runs in your browser and produces names at the click of a button. It is designed for writers, GMs, and anyone who needs noble surname ideas quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.</p>
        <p>People search for royal surname generator or royal last names; this page serves those intents with one free generator. For first names try our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link> or <Link href="/god-goddess-name-generator">god and goddess name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>What Is a Royal Surname Generator?</h2>
        <p>A royal surname generator creates royal and noble-style last names for fiction and creative writing. You get names inspired by historical noble and royal naming at the click of a button. The generator combines curated elements at random so each run produces new combinations. The output is for creative use only; verify with sources for strict accuracy. This free tool runs in your browser with no sign-up.</p>
        <p>The output is plain text, one name per line. You can copy the list and paste it into a notes app, then pick the name that fits your character or world.</p>
        <h2>Why This Royal Surname Generator Matters</h2>
        <p>Choosing noble or royal-style surnames for fiction can be time-consuming. A royal surname generator speeds up brainstorming. You get options in seconds. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>
        <h2>How to Use This Royal Surname Generator</h2>
        <p>Follow these steps: set how many names you want per run (1–24); click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; paste into your manuscript or notes and pick one; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Royal Surname Generator</h2>
        <p>Use this generator when you need royal or noble-style last names quickly. Key use cases: historical fiction; fantasy or royal worldbuilding; tabletop RPG noble characters; creative writing. The output is for inspiration; verify with references for strict historical accuracy.</p>
        <h2>Use Cases in Detail</h2>
        <p>Writers use the royal surname generator for noble and royal characters in historical or fantasy fiction. Tabletop GMs use it for noble houses or NPCs. Run the generator multiple times to build a shortlist. For first names pair with our ancient Greek or god and goddess name generator; see our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Royal and Noble Naming Style</h2>
        <p>Royal and noble surnames often use prefixes or family-name patterns (e.g. von X, House of Y). This generator uses curated noble/royal-style elements and combines them at random so you get new combinations that fit that style. The output is for creative use only.</p>
        <h2>How the Royal Surname Generator Works (Step by Step)</h2>
        <p>When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated elements in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into your document. To get more ideas, run the generator again.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This royal surname generator runs entirely in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many surname ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>
        <h2>No Download or Account Required</h2>
        <p>This royal surname generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Royal Surname Generator?</h2>
        <p>Writers use it for historical or fantasy fiction with noble characters. Tabletop GMs use it for noble houses and NPCs. The same tool works for worldbuilding and creative projects. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the Royal Surname Generator</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your world or character. For first names use our ancient Greek or god and goddess name generator; see our homepage for the full list.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated noble/royal-style elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only; verify with sources for strict historical accuracy.</p>
        <h2>Combining With Other Generators</h2>
        <p>Use this generator for royal surnames and our ancient Greek or god and goddess name generator for first names. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into your manuscript or notes and pick the names that fit. Run the generator again for more options. No account or download is required.</p>
        <h2>Quick Reference: Royal Surname Generator at a Glance</h2>
        <p>The royal surname generator produces 1–24 names per run, with no daily limit. Names are royal/noble-style and suitable for fiction, worldbuilding, and tabletop games. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access.</p>
        <h2>Summary</h2>
        <p>Use this royal surname generator to create royal last names and noble surnames for fiction and creative writing. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For other naming tools—ancient Greek, god and goddess, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a royal surname generator?', answer: 'A royal surname generator is an online tool that creates royal and noble-style last names for fiction and creative writing. You get names inspired by historical noble and royal naming at the click of a button. This free tool runs in your browser with no sign-up. Use for creative work; verify with sources for strict accuracy.' },
  { category: 'Usage', question: 'How do I use the royal surname generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your manuscript or notes and pick the names that fit your characters. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is a royal last name generator?', answer: 'It is the same as a royal surname generator: a tool that produces royal- and noble-style last names for fiction and creative writing. People search for "royal last name generator" or "royal surname generator"; this page serves both intents with one generator.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This royal surname generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for fiction?', answer: 'Yes. The royal surname generator is designed for fiction, worldbuilding, and creative projects. Run the generator multiple times to get a shortlist of noble or royal-style last names for your characters. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This royal surname generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The royal surname generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this royal surname generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'Are these real royal names?', answer: 'They are inspired by historical noble and royal naming patterns. The combinations are produced by an algorithm from curated elements. Use for creative work; verify with authoritative sources for strict historical accuracy.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes. Writers use the royal surname generator for fiction and creative projects. Run the generator multiple times to build a roster of noble or royal surnames for your characters. Keep a naming document so you do not reuse the same name for two characters.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have ancient Greek, god and goddess, anime names, and many others for character and creative names. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this royal surname generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This royal surname generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs use the royal surname generator for noble characters, houses, or NPCs. Run the generator several times to build a roster. Keep a document of names you have already used so noble houses stay consistent.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The royal surname generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this royal surname generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why "royal surnames" vs "royal last names"?', answer: 'Both phrases refer to the same thing: noble or royal-style family names. This page serves both search intents with one generator that produces royal and noble-style last names for fiction and creative writing.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes. You can use names from this royal surname generator in tabletop games, video games, and other creative or personal projects. The names fit noble or royal character and worldbuilding. Run the generator multiple times to build a roster.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this royal surname generator for noble last names and our ancient Greek or god and goddess name generator for first names. When you assemble lists from multiple tools keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This royal surname generator uses curated noble/royal-style prefixes and family name elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Is it good for historical fiction?', answer: 'Yes, as a starting point. Writers use this royal surname generator for historical fiction and noble characters. For strict historical accuracy verify with authoritative sources. Run the generator multiple times to build a roster and keep a naming document.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this royal surname generator for creative writing or history-related activities. Students might generate a list of noble surnames for characters in a historical or fantasy story. Emphasize that the tool is for inspiration and that for strict accuracy they should verify with references.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this royal surname generator as a source of inspiration for character or place names. The generated names are algorithm-produced; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this royal surname generator multiple times to get variety; each run produces new random combinations. If you need first names use our ancient Greek or god and goddess name generator. See our homepage for the full list of naming tools.' },
];

export default async function RoyalSurnameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="royal" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the royal surname generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
