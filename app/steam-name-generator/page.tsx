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

const toolSlug = 'steam-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Steam Name Generator',
    description: 'Generate Steam usernames and gamer tags for your gaming profile.',
    seoTitle: 'Steam Name Generator - Gaming Usernames',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Steam Name Generator - Gaming Usernames and Gamer Tags</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Steam name generator to create usernames and gamer tags for Steam and other gaming platforms. The tool runs in your browser and produces cool, unique name ideas at the click of a button. It is designed for players who need username ideas quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.
        </p>
        <p>
          People often search for Steam username ideas or gamer tag generators; this page serves those intents with one free generator. Whether you are setting up a new Steam profile, an esports handle, or a stream name, the tool gives you a pool of ideas. You must check Steam or your platform for availability—names must be unique on each service. For other gaming styles we have a RuneScape name generator and Elden Ring name generator on our site. For cleaning pasted text use our strip HTML and space remover tools; see our <Link href="/">homepage</Link> for the full list.
        </p>
        <h2>What Is a Steam Name Generator?</h2>
        <p>
          A Steam name generator is an online tool that creates usernames and gamer tags for Steam and other gaming platforms. You get cool, unique name ideas at the click of a button. The generator combines curated gamer-style elements at random so each run produces new combinations. The output is for inspiration only; always check your platform for availability. This free tool runs in your browser with no sign-up.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the list and paste it into a notes app, then check Steam or your platform for availability and pick one. Many users run the generator multiple times to get a shortlist before deciding.
        </p>
        <h2>Why This Steam Name Generator Matters</h2>
        <p>
          Choosing a memorable Steam or gamer username can be tricky. A Steam name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on Steam or your platform. The tool is free and does not require an account.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer.
        </p>
        <h2>How to Use This Steam Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check Steam or your platform for availability and pick one.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server. When pasting lists from the web, use a space remover or strip-HTML tool so formatting stays clean.</p>
        <h2>When to Use a Steam Name Generator</h2>
        <p>Use this generator when you need Steam or gamer-style username ideas quickly. Key use cases: new Steam or gaming profile names; esports or stream handles; username ideas for other platforms. Names must be unique on each platform; always check availability.</p>
        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Steam name generator when creating a new Steam account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform.
        </p>
        <p>
          For other gaming styles we have a RuneScape name generator, Elden Ring name generator, and Fallout name generator. For creature or character names try our species name generator and god and goddess name generator. See our <Link href="/">homepage</Link> for the full list.
        </p>
        <h2>Steam and Gamer Naming Style</h2>
        <p>Steam and gamer usernames often use bold, memorable word combinations. This generator uses curated gamer-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; check Steam or your platform for availability.</p>
        <h2>Tips for Choosing a Steam Username</h2>
        <p>Pick a name that is easy to remember and type. Run the generator multiple times to get a shortlist, then check Steam or your platform for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.</p>
        <p>For other gaming styles try our RuneScape name generator or Elden Ring name generator. For character or creature names see our species name generator and god and goddess name generator on our homepage.</p>
        <h2>How the Steam Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated gamer-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. We do not check Steam or any platform for availability—you must do that yourself.
        </p>
        <h2>Privacy and Local Processing</h2>
        <p>
          This Steam name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required.
        </p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. Check Steam or your platform for availability before committing to a name. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Formatting and Pasting Names</h2>
        <p>After you copy names from the Steam name generator, paste them into your notes app or document. The names are plain text, one per line. If you paste from the web and see extra spaces or line breaks, run the pasted text through a space remover or strip-HTML tool so the list stays tidy. Then check each name you like for availability on Steam or your platform.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many username ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. Check availability on your platform for each name you like. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required. Paste multiple runs into one document and remove duplicates to build a long shortlist before checking availability on your platform.</p>
        <h2>No Download or Account Required</h2>
        <p>This Steam name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Steam Name Generator?</h2>
        <p>Players use the Steam name generator when creating or updating a Steam profile, or when they want a new gamer tag for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the Steam Name Generator</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist 5–10 options so you have backups if your first choice is taken. The generator does not check Steam or any platform; you must do that yourself. For other gaming styles try our RuneScape or Elden Ring name generator; see our homepage for the full list.</p>
        <p>When you have a shortlist, check availability one by one on Steam or your platform. Usernames are often taken on popular services, so having several options saves time. The tool is free and runs in your browser with no sign-up; use it whenever you need new username ideas.</p>
        <h2>Typical Workflow for the Steam Name Generator</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check Steam or your platform for availability for each name you like. If your first choice is taken, try the next. Run the generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas.</p>
        <h2>Quick Reference: Steam Name Generator at a Glance</h2>
        <p>The Steam name generator produces 1–24 names per run, with no daily limit. Names are gamer-style usernames suitable for Steam and other platforms. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names, then check your platform for availability. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access when you need new username ideas. Names are created locally and are not sent to our servers; the tool is free and works on desktop and mobile. Always verify availability on Steam or your platform before committing to a name.</p>
        <h2>Why &quot;Steam&quot; Specifically?</h2>
        <p>Steam is a major gaming platform; people often search for Steam username ideas. The generator serves that intent and works for other platforms too.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for Steam-style usernames and our RuneScape name generator for MMO-style, or our Naruto, Fallout, or ancient Greek name generator for character names. When assembling lists from multiple tools, keep a single document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated gamer-style first and second elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for inspiration only; we do not check Steam or any platform for availability.</p>
        <h2>Summary</h2>
        <p>Use this Steam name generator to create username and gamer tag ideas for Steam and other platforms. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.</p>
        <p>For other naming tools—RuneScape, Elden Ring, Naruto, Fallout, and more—see our <Link href="/">homepage</Link> for the full list. For cleaning pasted text use a space remover or strip-HTML tool. The Steam name generator is free and runs in your browser with no sign-up. Bookmark the page for quick access.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Steam name generator?', answer: 'A Steam name generator is an online tool that creates usernames and gamer tags for Steam and other gaming platforms. You get cool, unique name ideas for your profile at the click of a button. This free tool runs in your browser with no sign-up. Always check Steam or your platform for availability before committing to a name.' },
  { category: 'Usage', question: 'How do I use the Steam name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into a notes app and check Steam or your platform for availability. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This Steam name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use the names for Steam?', answer: 'Yes. The Steam name generator produces username ideas that you can use on Steam. Names must be unique on the platform, so always check Steam\'s availability before committing. Run the generator multiple times to build a shortlist, then check which names are available.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Steam name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Steam name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or check availability on Steam\'s app.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Steam name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for RuneScape, Elden Ring, Naruto, Fallout, anime, ancient Greek, tribe, island, species, god and goddess, and others. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this Steam name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. Check Steam or your platform for availability before choosing a name. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Steam name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use the names for other platforms?', answer: 'Yes. The names work as ideas for any gaming or social platform—Discord, Xbox, PlayStation, or others. Check each platform\'s availability; names must be unique on each service. The generator does not check availability for you.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The Steam name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Steam name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why "Steam" specifically?', answer: 'Steam is a major gaming platform; people often search for Steam username ideas. The generator serves that intent and works for other platforms too. Use the names as inspiration for Steam, Discord, or any gaming or social profile.' },
  { category: 'Use cases', question: 'Can I use it for esports?', answer: 'Yes. Use the Steam name generator as inspiration for in-game names or stream handles. Run it multiple times to get a shortlist, then check availability on your platform. The tool is free and runs in your browser with no sign-up.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this Steam name generator for gamer-style usernames and our RuneScape or Elden Ring name generator for different gaming styles. For character names try our Naruto, Fallout, or ancient Greek name generator. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This Steam name generator uses curated gamer-style first and second elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only; we do not check Steam or any platform for availability.' },
  { category: 'General', question: 'Are the names unique?', answer: 'The names are randomly combined from our word list, so each run can produce new combinations. We do not check Steam or any platform for availability. You must check yourself whether a name is available before using it on your profile.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this Steam name generator for creative or tech-related activities—for example when students are learning about usernames, profiles, or digital identity. Emphasize that the tool is for inspiration and that names must be checked for availability on any platform.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this Steam name generator as a source of inspiration for usernames. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this Steam name generator multiple times to get variety; each run produces new random combinations. If you need a different gaming style try our RuneScape name generator or Elden Ring name generator. For character or creature names see our homepage for the full list of naming tools.' },
  { category: 'General', question: 'Do the names work for streaming?', answer: 'Yes. The Steam name generator produces username ideas that can work for streaming platforms, in-game names, or social handles. Use the names as inspiration and check your platform for availability. Run the generator multiple times to build a shortlist of options.' },
  { category: 'Use cases', question: 'Can I use it for a new Steam account?', answer: 'Yes. When creating a new Steam account you need a unique username. Run this Steam name generator to get ideas, copy the list, then check Steam for availability. Pick a name that is available and that you like. The tool runs in your browser with no sign-up.' },
];

export default async function SteamNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="steam" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Steam name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
