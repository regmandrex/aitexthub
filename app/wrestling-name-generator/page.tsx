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

const toolSlug = 'wrestling-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Wrestling Name Generator',
    description: 'Generate cool wrestling and professional wrestler names for characters and roleplay.',
    seoTitle: 'Wrestling Name Generator - Cool Wrestler Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Wrestling Name Generator - Cool Wrestler and Ring Names</h2>
        <h2>Introduction</h2>
        <p>This guide explains how to use a wrestling name generator (or cool wrestling names generator) to create wrestler-style ring names for characters and roleplay. The tool runs in your browser and produces bold, memorable names at the click of a button. It is designed for writers, roleplayers, and anyone who needs wrestler-style names quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.</p>
        <p>People search for wrestling name generator or professional wrestler name generator; this page serves those intents with one free generator. For other character or stage names try our <Link href="/drag-queen-name-generator">drag queen name generator</Link>, <Link href="/stripper-name-generator">stripper name generator</Link>, or <Link href="/anime-names-generator">anime names generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>What Is a Wrestling Name Generator?</h2>
        <p>A wrestling name generator creates wrestler-style ring names for characters and roleplay. You get cool, memorable names at the click of a button. The generator combines curated wrestling-style elements at random so each run produces new combinations. The output is for creative use only. This free tool runs in your browser with no sign-up.</p>
        <p>The output is plain text, one name per line. You can copy the list and paste it into a notes app, then pick the name that fits your character or persona.</p>
        <h2>Why This Wrestling Name Generator Matters</h2>
        <p>Choosing a memorable ring name can be tricky. A wrestling name generator speeds up brainstorming. You get options in seconds. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>
        <h2>How to Use This Wrestling Name Generator</h2>
        <p>Follow these steps: set how many names you want per run (1–24); click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; paste into your notes and pick one; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Wrestling Name Generator</h2>
        <p>Use this generator when you need wrestler-style or ring names quickly. Key use cases: roleplay character names; tabletop RPG wrestler or fighter characters; creative writing; fun names for events or games. The output is for inspiration only.</p>
        <h2>Use Cases in Detail</h2>
        <p>Roleplayers and writers use the wrestling name generator for character names in wrestling-themed or action settings. Tabletop GMs use it for NPCs or player characters. Run the generator multiple times to build a shortlist. For other stage-name styles try our drag queen or stripper name generator; see our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Wrestling and Ring Naming Style</h2>
        <p>Professional wrestling often uses bold, memorable ring names. This generator uses curated wrestling-style first and second elements and combines them at random so you get new combinations that fit that style. The output is for creative use only.</p>
        <h2>How the Wrestling Name Generator Works (Step by Step)</h2>
        <p>When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated elements in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into a notes app. To get more ideas, run the generator again.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This wrestling name generator runs entirely in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many name ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>
        <h2>No Download or Account Required</h2>
        <p>This wrestling name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Wrestling Name Generator?</h2>
        <p>Roleplayers use it for wrestler or fighter character names. Writers use it for fiction or creative projects. Tabletop GMs use it for NPCs. The same tool works for fun at events or games. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the Wrestling Name Generator</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your character. For other stage-name styles try our drag queen or stripper name generator; see our homepage for the full list.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated wrestling-style first and second elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for wrestler-style names and our drag queen or stripper name generator for other stage-name styles. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app and pick the name that fits. Run the generator again for more options. No account or download is required.</p>
        <h2>Quick Reference: Wrestling Name Generator at a Glance</h2>
        <p>The wrestling name generator produces 1–24 names per run, with no daily limit. Names are wrestler-style and suitable for roleplay, characters, and creative projects. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access.</p>
        <h2>Summary</h2>
        <p>Use this wrestling name generator to create cool wrestler and ring names for characters and roleplay. Set the number of names (1–24) and run as often as you like. Copy results into your notes. The tool runs locally in your browser with no sign-up. For other naming tools—drag queen, stripper, anime names, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a wrestling name generator?', answer: 'A wrestling name generator is an online tool that creates wrestler-style ring names for characters and roleplay. You get cool, memorable names in the style of professional wrestling at the click of a button. This free tool runs in your browser with no sign-up. The output is for inspiration only.' },
  { category: 'Usage', question: 'How do I use the wrestling name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your notes and pick the name that fits your character. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is a cool wrestling names generator?', answer: 'It is the same as a wrestling name generator: a tool that produces cool, wrestler-style ring names for characters and roleplay. People search for "cool wrestling names generator" or "wrestling name generator"; this page serves both intents with one generator.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This wrestling name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for roleplay?', answer: 'Yes. The wrestling name generator is designed for characters, roleplay, and creative projects. Run the generator multiple times to get a shortlist and pick the name that fits your wrestler or fighter character. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This wrestling name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The wrestling name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this wrestling name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have drag queen, stripper/stage name, anime names, and many others for character and creative names. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this wrestling name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This wrestling name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for a ring name?', answer: 'Yes. The wrestling name generator is designed for ring name inspiration. Run the generator multiple times to get options and pick the name that fits your character or persona. The output is for creative use only.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The wrestling name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this wrestling name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why "professional wrestler name generator"?', answer: 'That phrase matches how people search for wrestler-style ring names. This page serves that intent with one generator that produces cool wrestling names for characters and roleplay.' },
  { category: 'Use cases', question: 'Can I use the names for tabletop RPGs?', answer: 'Yes. GMs and players use the wrestling name generator for wrestler or fighter character names in tabletop RPGs. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this wrestling name generator for wrestler-style names and our drag queen or stripper name generator for other stage-name styles. When you assemble lists from multiple tools keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This wrestling name generator uses curated wrestling-style first and second elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Are these real wrestler names?', answer: 'The names are algorithm-generated from curated elements. Some combinations may resemble existing names; many are new. Use the output for inspiration only. The tool does not copy from any real wrestler.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this wrestling name generator for creative writing or character creation activities. Students might generate a list of ring names for characters in a story or roleplay. Emphasize that the tool is for inspiration and creative use only.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this wrestling name generator as a source of inspiration for character or ring names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this wrestling name generator multiple times to get variety; each run produces new random combinations. If you need a different character style try our drag queen name generator or anime names generator. See our homepage for the full list of naming tools.' },
  { category: 'Use cases', question: 'Can I use it for a character in a story?', answer: 'Yes. The wrestling name generator is designed for character names in fiction, roleplay, and creative projects. Run the generator multiple times to get a shortlist and pick the name that fits your wrestler or fighter character. The tool is free and runs in your browser with no sign-up.' },
];

export default async function WrestlingNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="wrestling" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the wrestling name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
