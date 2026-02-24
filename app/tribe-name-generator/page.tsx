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

const toolSlug = 'tribe-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Tribe Name Generator',
    description: 'Generate tribe and team names for Survivor-style games, events, and worldbuilding.',
    seoTitle: 'Tribe Name Generator - Survivor & Team Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          A tribe name generator (or survivor tribe name generator) is a free online tool that creates team and tribe names for Survivor-style games, events, and worldbuilding. Get 1–24 bold, animal- or nature-themed names per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is a Tribe Name Generator?</h2>
        <p>A tribe name generator—sometimes searched as &quot;survivor tribe name generator&quot;—creates team and tribe names for Survivor-style games, events, and worldbuilding. You get bold, animal- or nature-themed names (e.g. Thunder Tribe, Flame Alliance) at the click of a button. This free tool runs in your browser with no sign-up.</p>
        <h2>How to Use This Tribe Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your event doc, game, or notes.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Tribe Name Generator</h2>
        <p>Use this generator when you need tribe or team names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Survivor-style parties, events, and team games</li>
          <li>Tabletop RPGs and worldbuilding (clans, tribes, factions)</li>
          <li>School or camp team naming</li>
          <li>Creative writing and YouTube or social content</li>
        </ul>
        <h2>Tribe Naming Style</h2>
        <p>Tribe and team names often use animal or nature themes—thunder, flame, wolf, storm. This generator uses curated word elements and combines them at random so you get new combinations that fit that style. The output is for creative use only.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This tribe name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Tribe Name Generator for Worldbuilding</h2>
        <p>Writers and GMs building worlds with tribes or clans often need many faction names. Run the generator multiple times to build a roster. Keep a naming document to avoid reusing names. When pasting into a manuscript or spreadsheet, use a space remover or strip-HTML tool if you copied from the web.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The tribe name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences.</p>
        <h2>Survivor Tribe Name Generator: Search Intent</h2>
        <p>People search for &quot;tribe name generator&quot; or &quot;survivor tribe name generator&quot;; both refer to the same type of tool. This page serves those intents with one generator.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for tribe or team names and other naming tools on our site for tournaments, locations, or creatures. When assembling lists from multiple tools, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of tribe or team names can be time-consuming. A tribe name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your event or world.</p>
        <h2>Tips for Strong Tribe and Team Names</h2>
        <p>Effective tribe names are easy to say, memorable, and fit the tone of your event or world. Short, punchy names (e.g. Thunder Tribe, Flame Alliance) often work well for Survivor-style games. For tabletop or worldbuilding, you can run the generator multiple times and mix styles—some tribes might sound more animal-focused, others more nature- or element-themed. Keep a list of names you have already used so you do not repeat. If you need a specific theme (e.g. all water-related), run the generator until you get options that fit and then refine as needed.</p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the tribe name generator works</h3>
        <p>The tool uses curated animal- and nature-style word elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only.</p>
        <h2>Summary</h2>
        <p>Use this tribe name generator to create team and tribe names for Survivor-style games, events, and worldbuilding. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For more naming and text tools, see our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a tribe name generator?', answer: 'A tribe name generator is an online tool that creates team and tribe names for Survivor-style games, events, and worldbuilding. You get bold, animal- or nature-themed names (e.g. Thunder Tribe, Flame Alliance) at the click of a button. People sometimes search for "survivor tribe name generator"; this page serves that intent too. This free tool runs in your browser with no sign-up.' },
  { category: 'Usage', question: 'How do I use the tribe name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your event doc, game, or notes. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is a survivor tribe name generator?', answer: 'It is the same as a tribe name generator: a tool that creates names for tribes or teams, often used in Survivor-style games and events. People search for "survivor tribe name generator" or "tribe name generator"; this page serves both intents with one generator.' },
  { category: 'General', question: 'Is the tribe name generator free?', answer: 'Yes. This tribe name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for Survivor games?', answer: 'Yes. Many people use this tribe name generator to name tribes for Survivor parties or events. Run the generator multiple times to get options and pick the names that fit your teams.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This tribe name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The tribe name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this tribe name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for bracket, island, species, god and goddess, ancient Greek, Naruto, Fallout, Elden Ring, Transformers, anime, and others. See our homepage for the full list.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this tribe name generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through a space remover or strip-HTML tool so the list stays tidy.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This tribe name generator works without sign-up or login. The tool runs entirely in your browser.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs use this tribe name generator for clan or tribe names in fantasy or survival settings. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The tribe name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this tribe name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document.' },
  { category: 'General', question: 'Why "survivor tribe name generator"?', answer: 'That phrase matches how people search for tribe or team names for Survivor-style events. "Tribe name generator" and "survivor tribe name generator" refer to the same type of tool; this page serves both intents.' },
  { category: 'Use cases', question: 'Can I use the names for events?', answer: 'Yes, for parties, events, and team naming. You can use names from this tribe name generator for Survivor-style events, school or camp teams, or creative projects. Run the generator multiple times to get options and pick the names that fit.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this tribe name generator for tribe or team names and other naming tools on our site for tournaments, locations, or creatures. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This tribe name generator uses curated animal- and nature-style word elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Is it good for worldbuilding?', answer: 'Yes. Writers and game designers use this tribe name generator for tribes and clans in their worlds. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two factions.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this tribe name generator for team activities or creative writing. Students might generate a list of names for Survivor-style events or for tribes in a story. Emphasize that the tool is for inspiration.' },
  { category: 'General', question: 'How do I cite the tribe name generator?', answer: 'For academic or formal use you can cite this tribe name generator as a source of inspiration for team or tribe names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific theme?', answer: 'Run this tribe name generator multiple times to get variety; each run produces new random combinations. If you need names from another category, see our homepage for the full list of naming tools.' },
  { category: 'Use cases', question: 'Can I use the tribe name generator for YouTube or social media?', answer: 'Yes, for creative content. You can use names from this tribe name generator for video titles, event lists, or project names on YouTube or social media.' },
  { category: 'General', question: 'Tribe name generator vs team name generator?', answer: 'A tribe name generator and a team name generator often serve the same need: names for groups or teams. This tribe name generator produces bold, animal- or nature-themed names (e.g. Thunder Tribe, Flame Alliance) that work for Survivor-style tribes, tabletop clans, or event teams. People also search for "survivor tribe name generator"; this page serves that intent.' },
];

export default async function TribeNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="tribe" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the tribe name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
