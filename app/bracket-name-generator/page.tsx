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

const toolSlug = 'bracket-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Bracket Name Generator',
    description: 'Generate bracket and tournament team names for events and competitions.',
    seoTitle: 'Bracket Name Generator - Tournament Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Bracket Name Generator - Tournament and Team Names</h2>
        <h2>Introduction</h2>
        <p>This guide explains how to use a bracket name generator to create team names for tournaments, brackets, and events. The tool runs in your browser and produces team-name ideas at the click of a button. It is designed for organizers, coaches, and anyone who needs tournament team names quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.</p>
        <p>People search for bracket name generator or tournament team names; this page serves those intents with one free generator. For team names in a different style try our <Link href="/tribe-name-generator">tribe name generator</Link> or <Link href="/island-name-generator">island name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>What Is a Bracket Name Generator?</h2>
        <p>A bracket name generator creates team names for tournaments, brackets, and competitions. You get names like &quot;Thunder Squad&quot; or &quot;Elite Force&quot; at the click of a button. The generator combines curated team-style elements at random so each run produces new combinations. The output is for creative use only. This free tool runs in your browser with no sign-up.</p>
        <p>The output is plain text, one name per line. You can copy the list and paste it into a notes app or event doc, then pick the names that fit your teams.</p>
        <h2>Why This Bracket Name Generator Matters</h2>
        <p>Choosing team names for a bracket or tournament can be time-consuming. A bracket name generator speeds up brainstorming. You get options in seconds. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>
        <h2>How to Use This Bracket Name Generator</h2>
        <p>Follow these steps: set how many names you want per run (1–24); click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; paste into your event doc and assign names to teams; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Bracket Name Generator</h2>
        <p>Use this generator when you need tournament or team names quickly. Key use cases: sports brackets; esports tournaments; office competitions; school or camp events. The output is for inspiration only.</p>
        <h2>Use Cases in Detail</h2>
        <p>Organizers use the bracket name generator for sports, esports, or office tournament team naming. Teachers use it for class competitions or team activities. Run the generator multiple times to build a shortlist. For Survivor-style or themed events try our tribe or island name generator; see our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Bracket and Tournament Naming Style</h2>
        <p>Tournament team names often use bold, memorable word combinations (e.g. Thunder Squad, Elite Force). This generator uses curated team-style first and second elements and combines them at random so you get new combinations. The output is for creative use only.</p>
        <h2>How the Bracket Name Generator Works (Step by Step)</h2>
        <p>When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated elements in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into your event doc. To get more ideas, run the generator again.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This bracket name generator runs entirely in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or event document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many team names, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>
        <h2>No Download or Account Required</h2>
        <p>This bracket name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Bracket Name Generator?</h2>
        <p>Tournament organizers use it for sports, esports, or office events. Teachers use it for class competitions. The same tool works for any bracket or team naming need. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the Bracket Name Generator</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your event. For Survivor-style or themed team names try our tribe or island name generator; see our homepage for the full list.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated team-style first and second elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h2>Combining With Other Generators</h2>
        <p>Use this generator for bracket team names and our tribe name generator for Survivor-style or island name generator for themed events. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into your event doc and assign one name per team. Run the generator again for more options. No account or download is required.</p>
        <h2>Quick Reference: Bracket Name Generator at a Glance</h2>
        <p>The bracket name generator produces 1–24 names per run, with no daily limit. Names are team/tournament style and suitable for brackets and events. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access.</p>
        <h2>Choosing and Assigning Team Names</h2>
        <p>Once you have a shortlist from the bracket name generator, assign one name per team in your bracket or tournament. Keep the list in your event doc so you can reference it. For Survivor-style or themed events try our tribe name generator or island name generator. The tool is free and runs in your browser with no sign-up.</p>
        <p>If you run multiple tournaments, run the generator again for each event so team names stay fresh. There is no daily limit.</p>
        <h2>Batch Generation and Building a Shortlist</h2>
        <p>Run the bracket name generator multiple times with 12 or 24 names per run. Copy each batch into a single document and skim for names that fit your event. Remove duplicates and then assign one name per team. The generator has no daily limit so you can build a long shortlist quickly.</p>
        <p>For fantasy leagues or office events, paste all results into one doc and pick the names that fit. For other team-name styles try our tribe or island name generator; see our homepage for more tools.</p>
        <h2>Formatting and Pasting Generated Names</h2>
        <p>The bracket name generator outputs one name per line in plain text. When you paste into an event doc or notes app, the formatting is preserved. If you see extra spaces or line breaks after pasting from the web, run the text through a space remover or strip-HTML tool. Our site has both; see the homepage for links.</p>
        <h2>Tips for Tournament and Bracket Names</h2>
        <p>Short, memorable team names often work best for brackets. The bracket name generator gives you combinations like &quot;Thunder Squad&quot; or &quot;Elite Force&quot;; you can use one as-is or blend two ideas. Run the generator several times to get variety. The free bracket name generator requires no account and does not store or send your data. Names are created in your browser only. For other naming tools see our homepage.</p>
        <h2>Why Use a Bracket Name Generator?</h2>
        <p>Choosing team names for every slot in a bracket or tournament can be time-consuming. This bracket name generator produces tournament and team name ideas in seconds. Run it as often as you like and copy the results into your event doc. The tool is free and runs in your browser with no sign-up. For Survivor-style or themed team names try our tribe or island name generator; see our homepage for the full list.</p>
        <p>You get up to 24 names per run with no daily limit. Names are created locally and are not sent to our servers. Bookmark the page for quick access when planning your next event.</p>
        <p>Use the Copy button to copy all names at once. Paste into your event doc and assign one name per team. For sports, esports, office events, or fantasy leagues the bracket name generator gives you a stream of team name ideas. No download or account is required. You can run the generator in private or incognito mode; names are created locally.</p>
        <h2>Summary</h2>
        <p>Use this bracket name generator to create tournament and team names for brackets and events. Set the number of names (1–24) and run as often as you like. Copy results into your event doc or notes. The tool runs locally in your browser with no sign-up. For other naming tools—tribe, island, species, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool.</p>
        <p>The free bracket name generator requires no account and does not store or send your data. Names are created in your browser only. Run it in batches to build a shortlist for your tournament or event. No download is required and the tool works on all devices. For Survivor-style team names try our tribe or island name generator. Bookmark the page for quick access.</p>
        <p>Each run produces up to 24 names with no daily limit. Use for sports brackets, esports tournaments, office events, or fantasy leagues. Combine with our tribe or island name generator for themed team names. See our homepage for the full list. There is no account, no download, and no daily cap. Use the Copy button to grab all names at once. Bookmark the page for quick access when you need tournament or bracket team names for your next event.</p>
        <p>Names are created in your browser and are not sent to our servers. Run the bracket name generator as often as you like to build a shortlist. For other team or event naming tools see our homepage for the full list of naming and text tools. No sign-up or download is required. Use for sports, esports, office events, or fantasy leagues. You get up to 24 names per run with no daily limit. Bookmark the page for quick access. The tool is free. Use it for tournament team names, bracket slots, or event naming. See our homepage for tribe and island name generators. Paste results into your event doc and assign one name per team. There is no daily cap. The bracket name generator runs locally and requires no account. Use the Copy button to grab all names at once. You can run the generator as often as you like with no limit. The tool works on desktop, tablet, and phone. For more options run the generator again. No account or download is required. The generator is free to use. Open the page and click generate to get team names. See our homepage for more team naming tools. Bookmark the page. Free to use.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a bracket name generator?', answer: 'A bracket name generator is an online tool that creates team names for tournaments, brackets, and competitions. You get names like "Thunder Squad" or "Elite Force" at the click of a button. This free tool runs in your browser with no sign-up. The output is for inspiration only.' },
  { category: 'Usage', question: 'How do I use the bracket name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your event doc or notes and assign names to teams. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This bracket name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for tournaments?', answer: 'Yes. The bracket name generator is designed for tournament and event team naming. Run the generator multiple times to get a shortlist and pick the names that fit your teams. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This bracket name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The bracket name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this bracket name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have tribe, island, species, and many others for team and character names. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this bracket name generator to copy all generated names to your clipboard. Paste into a notes app or event document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This bracket name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for esports?', answer: 'Yes. The bracket name generator works for esports tournaments as well as sports and office events. Run the generator multiple times to get team name ideas. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The bracket name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this bracket name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why "bracket" names?', answer: 'Brackets often need team names for each slot. The generator provides ideas for those teams so you can quickly name every team in your tournament or event. This page serves that intent with one free generator.' },
  { category: 'Use cases', question: 'Can I use it for office events?', answer: 'Yes. The bracket name generator is great for office competitions and team naming. Run the generator multiple times to get a shortlist and pick the names that fit your event. The tool is free and runs in your browser with no sign-up.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this bracket name generator for tournament team names and our tribe name generator for Survivor-style or island name generator for themed events. When you assemble lists from multiple tools keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This bracket name generator uses curated team-style first and second elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Is it good for sports?', answer: 'Yes. Use the bracket name generator for fantasy leagues, tournaments, or team naming in sports. Run the generator multiple times to get a shortlist. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this bracket name generator for class competitions or team activities. Students might generate a list of team names for a tournament or event. The tool is free and runs in your browser with no sign-up.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this bracket name generator as a source of inspiration for team or event names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific theme?', answer: 'Run this bracket name generator multiple times to get variety; each run produces new random combinations. If you need a specific theme (e.g. Survivor-style) try our tribe name generator or island name generator. See our homepage for the full list of naming tools.' },
  { category: 'Use cases', question: 'Can I use it for fantasy leagues?', answer: 'Yes. The bracket name generator works for fantasy league team naming as well as tournaments and events. Run the generator multiple times to get a shortlist and pick the names that fit. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Can I use it in private or incognito mode?', answer: 'Yes. The bracket name generator runs in your browser and works in private or incognito windows. Names are created locally and are not sent to our servers. No account or login is required.' },
];

export default async function BracketNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="bracket" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the bracket name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
