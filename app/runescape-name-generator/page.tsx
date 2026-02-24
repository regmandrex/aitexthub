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

const toolSlug = 'runescape-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'RuneScape Name Generator',
    description: 'Generate RuneScape and OSRS-style usernames and character names.',
    seoTitle: 'RuneScape Name Generator - OSRS Usernames',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          A RuneScape name generator (or OSRS name generator) is a free online tool that creates usernames and character names for RuneScape and Old School RuneScape. Get 1–24 game-style name ideas per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is a RuneScape Name Generator?</h2>
        <p>A RuneScape name generator—sometimes searched as &quot;OSRS name generator&quot;—creates usernames and character names for RuneScape and Old School RuneScape. Use it for one-word or multi-word name ideas. This free tool runs in your browser with no sign-up.</p>
        <h2>How to Use This RuneScape Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then check the game for availability and pick one.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a RuneScape Name Generator</h2>
        <p>Use this generator when you need RuneScape- or OSRS-style username ideas quickly. Key use cases: new RuneScape or OSRS character or account names; username ideas for other MMOs or gaming platforms; creative writing or roleplay with a game vibe. Usernames must be unique on each platform; always check availability.</p>
        <h2>RuneScape and OSRS Naming Style</h2>
        <p>RuneScape and OSRS usernames often use fantasy or medieval-style words. This generator uses curated elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; check the game for availability.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This RuneScape name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. Check RuneScape or OSRS for availability before committing to a name. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>OSRS Name Generator: Search Intent</h2>
        <p>People search for &quot;RuneScape name generator&quot; or &quot;OSRS name generator&quot;; both refer to the same type of tool. This page serves those intents with one generator.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for RuneScape-style names and other naming tools on our site for different platforms or character styles. When assembling lists from multiple tools, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Tips for Choosing a RuneScape or OSRS Username</h2>
        <p>Good usernames are memorable, fit the game world, and are available. Run this generator several times and note names you like, then check each one in the game client or website. Avoid names that are too long, hard to spell, or easily confused with others. Many players prefer fantasy or medieval-style words that match the setting. If your first choice is taken, try a slight variation or use the generator again for fresh ideas. Keeping a shortlist of backups helps when your preferred name is already in use.</p>
        <h2>Character Limits and In-Game Rules</h2>
        <p>RuneScape and Old School RuneScape enforce character limits and rules for usernames. Names must be unique and are subject to the game&apos;s terms of service and naming policy. Offensive, misleading, or impersonating names can be changed or banned. Use this generator for inspiration only; always confirm the exact character limit and rules on the official RuneScape or OSRS site before committing. Name changes may be possible in-game but are often limited, so picking a name you will be happy with long term is worth the extra check.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated RuneScape/OSRS-style word elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for inspiration only; we do not check availability in-game. Generated names are for inspiration only; always check RuneScape or OSRS for username availability.</p>
        <h2>Summary</h2>
        <p>Use this RuneScape name generator to create username and character name ideas for RuneScape and OSRS. Set the number of names (1–24) and run as often as you like. Copy results and check the game for availability. The tool runs locally in your browser with no sign-up. For more naming and text tools, see our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a RuneScape name generator?', answer: 'A RuneScape name generator is an online tool that creates usernames and character names for RuneScape and Old School RuneScape. You get game-style name ideas—one-word or multi-word. People sometimes search for "OSRS name generator"; this page serves that intent too. This free tool runs in your browser with no sign-up.' },
  { category: 'Usage', question: 'How do I use the RuneScape name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Check RuneScape or OSRS for availability and pick one. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is an OSRS name generator?', answer: 'It is the same as a RuneScape name generator: a tool that produces usernames and character names for RuneScape and Old School RuneScape. People search for "OSRS name generator" or "RuneScape name generator"; this page serves both intents with one generator.' },
  { category: 'General', question: 'Is the RuneScape name generator free?', answer: 'Yes. This RuneScape name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use the names for RuneScape?', answer: 'Yes. Use this RuneScape name generator for ideas; then check RuneScape or OSRS for availability—usernames must be unique on the platform. Run the generator multiple times to get options and check each one.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This RuneScape name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The RuneScape name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or check availability in the game. Each run is independent; we do not save your history or preferences.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this RuneScape name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for Steam, Elden Ring, Fallout, Naruto, Transformers, god and goddess, ancient Greek, species, tribe, island, and others. See our homepage for the full list.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this RuneScape name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are in a simple text format, one per line. You can then check each name for availability in RuneScape or OSRS. If you notice extra spaces or line breaks after pasting, run the pasted text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This RuneScape name generator works without sign-up or login. The tool runs entirely in your browser.' },
  { category: 'Use cases', question: 'Can I get one-word names?', answer: 'The generator can produce one-word or multi-word names depending on the curated elements. Run it and pick what fits. Check RuneScape or OSRS for character limits and availability.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The RuneScape name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this RuneScape name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches.' },
  { category: 'General', question: 'Why "OSRS" in the title?', answer: 'Many players search for OSRS username ideas. "RuneScape name generator" and "OSRS name generator" refer to the same type of tool; this page serves both intents.' },
  { category: 'Use cases', question: 'Can I use it for other games?', answer: 'Yes. The names work as ideas for any gaming platform. Check each platform for availability and character limits.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this RuneScape name generator for RuneScape/OSRS-style names and other naming tools on our site for different platforms or styles. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This RuneScape name generator uses curated RuneScape/OSRS-style word elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only; we do not check in-game availability.' },
  { category: 'General', question: 'Are the names unique?', answer: 'The names are randomly combined from curated elements. We do not check RuneScape or OSRS for availability. Always verify on the game before committing to a username.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this RuneScape name generator for creative or tech-related activities. Students might generate username ideas for a discussion on online identity or gaming. Emphasize that the tool is for inspiration and that usernames must be checked for availability on each platform.' },
  { category: 'General', question: 'How do I cite the RuneScape name generator?', answer: 'For academic or formal use you can cite this RuneScape name generator as a source of inspiration for username ideas. The generated names are algorithm-produced; you can use them freely while checking platform availability. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this RuneScape name generator multiple times to get variety; each run produces new random combinations. If you need names for another platform or genre, see our homepage for the full list of gaming and character name generators.' },
  { category: 'Use cases', question: 'Can I use the RuneScape name generator for OSRS?', answer: 'Yes. This RuneScape name generator serves both RuneScape and Old School RuneScape (OSRS). Use the names as ideas and then check OSRS for availability—usernames must be unique. Run the generator multiple times to get options.' },
  { category: 'General', question: 'RuneScape name generator vs Steam name generator?', answer: 'A RuneScape name generator produces names suited to RuneScape and OSRS (fantasy/medieval MMO style). A Steam name generator produces usernames and gamer tags for Steam and other platforms. Both are free and run in your browser. Use the RuneScape generator for RuneScape/OSRS and similar MMOs; use the Steam generator for Steam and broader gaming handles.' },
];

export default async function RunescapeNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="runescape" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the RuneScape name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
