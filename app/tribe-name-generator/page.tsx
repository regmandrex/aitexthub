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
        <h2>Tribe Name Generator - Survivor Tribe Names and Team Names</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a tribe name generator (or survivor tribe name generator) to get team and tribe names for Survivor-style games, events, and worldbuilding. The tool runs in your browser and produces bold, animal- or nature-themed names at the click of a button. It is designed for party hosts, GMs, and writers who need many tribe or team names quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.
        </p>
        <p>
          People often search for &quot;tribe name generator&quot; or &quot;survivor tribe name generator&quot;; both refer to the same type of tool. This page serves those intents with one free generator. Whether you are naming tribes for a Survivor party, building factions for a tabletop campaign, or writing a world with clans, the tool gives you a pool of ideas to choose from or adapt.
        </p>
        <h2>What Is a Tribe Name Generator?</h2>
        <p>
          A tribe name generator is an online tool that creates team and tribe names for Survivor-style games, events, and worldbuilding. You get bold, animal- or nature-themed names (e.g. Thunder Tribe, Flame Alliance) at the click of a button. The generator combines curated word elements at random so each run produces new combinations. It is for creative use only. This free tool runs in your browser with no sign-up.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the list and paste it into a document, then pick the names that fit your event or world. Many users run the generator multiple times to build a roster and keep a naming document so they do not reuse the same name for two tribes or teams.
        </p>
        <h2>Why This Tribe Name Generator Matters</h2>
        <p>
          Choosing tribe or team names can be time-consuming. You want something memorable, easy to say, and fitting the tone. A tribe name generator speeds up the brainstorming step. Instead of staring at a blank list, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then assign them to teams. The tool is free and does not require an account.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. Event organizers and writers can use it for unpublished projects without any data leaving their device.
        </p>
        <h2>How to Use This Tribe Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your event doc, game, or notes.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server. Each run gives you a new random list of tribe and team names.</p>
        <h2>When to Use a Tribe Name Generator</h2>
        <p>Use this generator when you need tribe or team names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Survivor-style parties, events, and team games</li>
          <li>Tabletop RPGs and worldbuilding (clans, tribes, factions)</li>
          <li>School or camp team naming</li>
          <li>Creative writing and YouTube or social content</li>
        </ul>
        <h2>Use Cases in Detail: Events, Games, and Worldbuilding</h2>
        <p>
          For Survivor-style parties and events, hosts often need two or more tribe names that sound distinct and memorable. Run the tribe name generator a few times and pick one name per team. Short, punchy names work well when players chant or vote. For tabletop RPGs, GMs building worlds with multiple clans or factions can run the generator in batches and paste results into a campaign doc. Keep a master list so NPCs and locations stay consistent. School and camp coordinators use the tool to name teams for field days or competitions; the same names can be reused for themes (e.g. animal tribes, element tribes) by running the generator until the right style appears.
        </p>
        <p>
          Writers and content creators use the tribe name generator for fictional tribes in novels, web series, or worldbuilding bibles. The output is inspiration only; you can tweak spelling or combine elements to fit your setting. Combining this tool with other naming tools on our site (e.g. for locations or character names) lets you keep one naming document and clean pasted text so formatting stays consistent across the project.
        </p>
        <h2>Tribe Naming Style</h2>
        <p>Tribe and team names often use animal or nature themes—thunder, flame, wolf, storm. This generator uses curated word elements and combines them at random so you get new combinations that fit that style. The output is for creative use only.</p>
        <h2>How the Tribe Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated animal- and nature-style word elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of name ideas, one per line. You can copy the full list with one click and paste it into a document or notes app. To get more ideas, run the generator again; each run produces a new random set.
        </p>
        <p>
          The generator does not check against existing team or tribe names. It only produces new combinations from its word list. Use the output as inspiration and adapt spelling or style to fit your event or world.
        </p>
        <h2>Survivor Tribe Name Generator: Search Intent</h2>
        <p>
          People search for &quot;tribe name generator&quot; or &quot;survivor tribe name generator&quot;; both refer to the same type of tool. This page serves those intents with one generator that produces team and tribe names for Survivor-style games, events, and worldbuilding. No account or download is required; the generator is free and runs in your browser.
        </p>
        <h2>Privacy and Local Processing</h2>
        <p>
          This tribe name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. You can use the tool in a private or incognito window if you prefer.
        </p>
        <h2>Tribe Name Generator for Worldbuilding</h2>
        <p>Writers and GMs building worlds with tribes or clans often need many faction names. Run the generator multiple times to build a roster. Keep a naming document to avoid reusing names. When pasting into a manuscript or spreadsheet, use a space remover or strip-HTML tool if you copied from the web.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The tribe name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for tribe or team names and other naming tools on our site for tournaments, locations, or creatures. When assembling lists from multiple tools, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of tribe or team names can be time-consuming. A tribe name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your event or world.</p>
        <h2>Tips for Strong Tribe and Team Names</h2>
        <p>Effective tribe names are easy to say, memorable, and fit the tone of your event or world. Short, punchy names (e.g. Thunder Tribe, Flame Alliance) often work well for Survivor-style games. For tabletop or worldbuilding, you can run the generator multiple times and mix styles—some tribes might sound more animal-focused, others more nature- or element-themed. Keep a list of names you have already used so you do not repeat. If you need a specific theme (e.g. all water-related), run the generator until you get options that fit and then refine as needed.</p>
        <h2>Best Practices and Naming Documents</h2>
        <p>
          Run the generator in batches when you need many names. Paste each run into a single document and remove duplicates. If you are naming multiple tribes for one event or world, keep a naming document and mark which names you have already used so you stay consistent. When you paste from the web, use a space remover or strip-HTML step so formatting stays clean.
        </p>
        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run. There is no daily or total limit. If you need more than 24, run the generator again and paste the new list into your document. For very large rosters (e.g. many factions for a campaign), run the generator in batches and then sort or deduplicate. The tool is designed for quick, repeated use.
        </p>
        <h2>No Download or Account Required</h2>
        <p>
          This tribe name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and does not show ads or paywalls. You can bookmark the page and return whenever you need new tribe or team name ideas.
        </p>
        <p>
          There is no app to install and no login. Each visit is independent; we do not save your history or preferences. The generator works on desktop, tablet, and phone in any modern browser. If you need names on the go, open the page on your phone, generate a short list, and copy it into notes or email.
        </p>
        <h2>Choosing and Refining Tribe and Team Names</h2>
        <p>
          Effective tribe names are easy to say aloud and easy to remember. For Survivor-style games, short names (one or two words) often work best. Run the generator until you see options that fit the mood—some sound more fierce, others more nature-focused. If you need a specific theme (e.g. all water or all fire), run multiple batches and filter manually. For worldbuilding, you can adapt the generated names: change a word, combine two results, or use one as a base and tweak the spelling to fit your conlang or setting.
        </p>
        <p>
          When you have a long list from multiple runs, paste everything into one document and remove duplicates. Sort alphabetically or by theme if that helps. Mark which names you have already used for events or characters so you do not repeat. If you paste from the web into a manuscript or spreadsheet, run the text through a space remover or strip-HTML tool so formatting stays clean.
        </p>
        <h2>Quick Reference: Tribe Name Generator at a Glance</h2>
        <p>
          The tribe name generator produces 1–24 names per run, with no daily limit. Names are animal- or nature-themed and suitable for Survivor-style games, tabletop factions, and worldbuilding. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names, then paste into your event doc or naming list. For more naming tools (locations, characters, other cultures), see our homepage.
        </p>
        <p>
          You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page and return whenever you need new tribe or team name ideas for events, games, or worldbuilding.
        </p>
        <h2>Running the Generator in Batches</h2>
        <p>
          When you need many tribe or team names—for example a dozen factions for a campaign or several options for a big event—run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document (e.g. Word or Google Docs) so you have one master list. Then remove duplicates and trim any names that do not fit your theme. There is no daily or total limit; the tool is designed for repeated use. Keeping a naming document helps you track which names you have already used for teams or characters so you stay consistent across sessions or events.
        </p>
        <p>
          For very large rosters, run the generator in batches of 24 and paste each batch below the previous one. Sort the full list alphabetically or by theme if that helps. If you notice extra spaces or line breaks after pasting from the web, run the pasted text through a space remover or strip-HTML tool so the list stays tidy. The generator does not remember past runs; each run is independent and happens entirely in your browser.
        </p>
        <h2>Who Uses a Tribe Name Generator?</h2>
        <p>
          Party hosts and event organizers use the tribe name generator to name teams for Survivor-style games, field days, and competitions. Tabletop GMs use it to name clans, tribes, and factions in fantasy or survival settings. Writers and worldbuilders use it to create faction names for novels, web series, or campaign bibles. School and camp coordinators use it to name groups for activities. The same tool serves all these use cases: set how many names you want, generate, copy, and paste into your doc. No account or download is required.
        </p>
        <p>
          The generator is not affiliated with any TV show or franchise. It only produces random combinations from its word list. Use the output as inspiration and adapt names to fit your event or world. For other naming needs—character names, location names, or different cultures—see our homepage for the full list of naming tools.
        </p>
        <h2>Getting the Most Out of the Tribe Name Generator</h2>
        <p>
          To get a strong set of tribe or team names, run the generator several times and paste all results into one document. Skim for names that fit your event or world and remove the rest. Shortlist 5–10 options per team or faction so you can choose the best fit. For Survivor-style games, pick names that are easy to chant and distinct from each other. For tabletop or worldbuilding, you can mix styles—some tribes might sound more animal-focused, others more element-themed—by running the generator until you have enough variety.
        </p>
        <p>
          The generator does not check against existing team or tribe names in the real world or in media. It only produces new combinations from its word list. If a result resembles an existing name, you can tweak the spelling or combine it with another result. Use the output as inspiration; the goal is to speed up brainstorming, not to replace your own creativity.
        </p>
        <h2>Formatting and Pasting Names</h2>
        <p>
          After you copy names from the tribe name generator, paste them into your event doc, campaign file, or notes. The names are plain text, one per line. If you paste into a spreadsheet, each name can go in its own cell. If you notice extra spaces, line breaks, or stray characters after pasting—for example if you combined text from a webpage—run the pasted text through a space remover or strip-HTML tool so the list stays tidy and consistent.
        </p>
        <h2>Typical Workflow for the Tribe Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into your event doc or naming file. If you need more names, run the generator again and append the new list to the same document. Remove duplicates and trim any names that do not fit. For events with multiple teams, pick one name per team from your shortlist. For worldbuilding, assign names to factions and keep a master list so you do not reuse a name for two different groups.
        </p>
        <p>
          The whole process takes a few minutes. No account or download is required. The generator runs in your browser and does not store your choices or the generated names. For other naming needs—character names, location names, or different cultures—see our homepage for the full list of tools. Each run produces a new random set of tribe and team names.
        </p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the tribe name generator works</h3>
        <p>The tool uses curated animal- and nature-style word elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. The tool is not affiliated with any TV show or franchise. Use the output for events, games, and creative projects; adapt names as needed for your setting.</p>
        <h2>Summary</h2>
        <p>Use this tribe name generator to create team and tribe names for Survivor-style games, events, and worldbuilding. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. Keep a naming document to avoid reusing names. You can run it on any device in a modern browser. No download or account is required.</p>
        <p>Run the generator in batches when you need many names; paste each run into one document and remove duplicates. Names are created locally and are not sent to our servers. The tool is free, browser-only, and works on desktop and mobile. No sign-up or download is required. For more naming tools (locations, characters, other cultures), see our <Link href="/">homepage</Link>.</p>
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
