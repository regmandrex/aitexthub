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
        <h2>RuneScape Name Generator - OSRS Username Ideas and Character Names</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a RuneScape name generator (or OSRS name generator) to get username and character name ideas for RuneScape and Old School RuneScape. The tool runs in your browser and produces fantasy and medieval-style name combinations at the click of a button. It is designed for players who want quick inspiration before checking availability in-game. The generator does not store data and does not check names against the game; it only produces ideas. You get 1–24 names per run and can run it as often as you like with no sign-up.
        </p>
        <p>
          RuneScape and OSRS usernames must be unique on the platform. A name generator cannot reserve or guarantee a name; it gives you options to try. Many players use an OSRS name generator or RuneScape name generator to brainstorm, then check each name in the game client or website. This page serves that workflow with a single, free tool that runs locally and keeps your choices private.
        </p>
        <h2>What Is a RuneScape Name Generator?</h2>
        <p>
          A RuneScape name generator is an online tool that creates usernames and character names inspired by RuneScape and Old School RuneScape. People often search for &quot;OSRS name generator&quot; or &quot;RuneScape name generator&quot;; both refer to the same type of tool. You get one-word or multi-word name ideas that fit the game&apos;s fantasy and medieval style. The generator combines curated word elements at random so each run produces new combinations. It does not copy official character names or check availability; it is for inspiration only.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the list and paste it into a document, then check each name in RuneScape or OSRS. Because usernames are unique per platform, you may need to try several options before finding one that is available. Running the generator multiple times gives you a larger pool of ideas.
        </p>
        <h2>Why This RuneScape Name Generator Matters</h2>
        <p>
          Choosing a username can be time-consuming. You want something memorable, fitting the game world, and available. A RuneScape name generator speeds up the brainstorming step. Instead of staring at a blank field, you get a list of options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability in the game. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. If you are testing names for a new account or a name change, nothing is logged or stored. That is useful for players who prefer not to link their browsing to an account or who use the tool from a shared device.
        </p>
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
        <h2>How the RuneScape Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated RuneScape- and OSRS-style word elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of name ideas, one per line. You can copy the full list with one click and paste it into a document or notes app. To get more ideas, run the generator again; each run produces a new random set.
        </p>
        <p>
          The generator does not connect to RuneScape or OSRS. It cannot check whether a name is available or reserved. After you generate names, you must check each one in the game client or on the official website. Many players keep a shortlist of preferred names and try them in order until one is available.
        </p>
        <h2>RuneScape and OSRS Username Conventions</h2>
        <p>
          RuneScape and Old School RuneScape allow usernames that fit certain length and character rules. Names must be unique and are subject to the game&apos;s terms of service. Offensive, misleading, or impersonating names can be changed or banned. This generator produces ideas that fit a fantasy or medieval vibe; you are responsible for ensuring the final name meets the game&apos;s rules. Always confirm the current character limit and naming policy on the official RuneScape or OSRS site.
        </p>
        <p>
          Some players prefer one-word names; others like two or more words. The generator can produce both, depending on the curated elements. If the game has a maximum length, trim or shorten a generated name as needed. The tool is flexible; you can use the output as a starting point and adjust spelling or length to fit your preference and the game&apos;s limits.
        </p>
        <h2>Choosing and Checking OSRS Usernames</h2>
        <p>
          Good usernames are memorable, easy to type, and available. Run this RuneScape name generator several times and note the names you like. Then check each one in the game. If your first choice is taken, try a slight variation (e.g. add a number or change a letter) or pick another from your list. Keeping a shortlist of five to ten options helps when availability is limited.
        </p>
        <p>
          Name changes in RuneScape and OSRS are often limited (e.g. one free change, then a cooldown or fee). So picking a name you will be happy with long term is worth the extra time. Use the generator to explore ideas, then verify availability and rules before committing.
        </p>
        <h2>Privacy and Local Processing</h2>
        <p>
          This RuneScape name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. You can use the tool in a private or incognito window if you prefer. This keeps your username brainstorming private and avoids any link between your ideas and your identity.
        </p>
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
        <h2>Best Practices for RuneScape and OSRS Name Ideas</h2>
        <p>
          Run the generator in batches when you need many ideas. Paste each run into a single document and remove duplicates. Check the game&apos;s current character limit and naming policy so you do not fall in love with a name that is too long or not allowed. If you are naming multiple characters (e.g. for a group or alt accounts), keep a naming document and mark which names you have already used so you stay consistent.
        </p>
        <p>
          Do not assume a generated name is available. Always verify in the game. The generator cannot reserve names or check the database. Treat the output as a pool of ideas; availability is your responsibility.
        </p>
        <h2>Formatting and Copying Names</h2>
        <p>
          The generator outputs one name per line in plain text. Use the Copy button to copy the full list to your clipboard, then paste into a notes app, document, or spreadsheet. If you paste from the web and notice extra spaces or line breaks, run the pasted text through a space remover or strip-HTML tool so the list stays clean. When you have a shortlist, you can type or paste each name into the game&apos;s name check or sign-up flow to see if it is available.
        </p>
        <h2>OSRS Name Generator vs RuneScape Name Generator</h2>
        <p>
          People search for both &quot;OSRS name generator&quot; and &quot;RuneScape name generator.&quot; Old School RuneScape (OSRS) is a version of RuneScape with a dedicated player base. Username rules and availability are separate per game, but the naming style is similar—fantasy and medieval. This page serves both search intents with one tool. Whether you play RuneScape or OSRS, you get the same type of name ideas. Always check availability in the specific game you play.
        </p>
        <h2>When to Use a RuneScape or OSRS Name Generator</h2>
        <p>
          Use this generator when you are creating a new account, planning a name change, or brainstorming for an alt or group. It is also useful for content creators who want consistent naming for characters in guides or videos. The tool is not for checking availability; it is for generating ideas quickly. Combine it with the game&apos;s official name check or sign-up flow for best results.
        </p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>
          The RuneScape name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, set the number of names, and generate. On a phone you can generate a short list and copy it into notes or email, then check availability when you are at a computer or in the game. Each run is independent; we do not save your history or preferences. The tool is responsive so buttons and controls work on small screens.
        </p>
        <h2>Combining With Other Name Generators</h2>
        <p>
          If your project needs names for more than one game or style, you can use this generator for RuneScape/OSRS and other naming tools on our site for different platforms (e.g. Steam, Elden Ring, Fallout). Keep a single naming document and paste results from each tool into separate sections. When you paste from the web, use a space remover or strip-HTML step so formatting stays consistent. See our homepage for the full list of naming and text tools.
        </p>
        <h2>Tool Methodology and Limitations</h2>
        <p>
          The tool uses curated RuneScape/OSRS-style word elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for inspiration only; we do not check availability in-game. Generated names are for inspiration only; always check RuneScape or OSRS for username availability. The generator is not affiliated with RuneScape or Jagex.
        </p>
        <h2>Collision and Uniqueness</h2>
        <p>
          Because the generator combines a finite set of elements at random, two runs can occasionally produce the same name. That does not affect your use: you are checking availability in the game anyway. If you build a long list across many runs, you may want to sort and remove duplicates so your shortlist is easier to manage. Uniqueness in the game is enforced by RuneScape and OSRS, not by this tool.
        </p>
        <h2>No Download or Account Required</h2>
        <p>
          This RuneScape name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and does not show ads or paywalls. You can bookmark the page and return whenever you need new username ideas. For more naming and text tools, see our homepage.
        </p>
        <h2>Practical Examples: From Generator to In-Game Name</h2>
        <p>
          A typical workflow is: open the generator, request 12 or 24 names, copy the list, and paste it into a document. Scan the list and circle or highlight the names you like. Then open RuneScape or OSRS and try each name in the sign-up or name-change flow. The first available name on your list is the one you can use. If none are available, run the generator again for a fresh set of ideas.
        </p>
        <p>
          Some players prefer to generate several batches and build a long list of fifty or a hundred names before checking. Others prefer to generate a short list, check immediately, and then generate again if needed. Both approaches work. The generator has no limit on how often you run it, so you can adapt the workflow to your preference.
        </p>
        <p>
          If you are creating multiple accounts (e.g. for different game modes or group play), keep a single naming document. List each account and the name you chose so you do not reuse a name or forget which name belongs to which character. The generator can supply ideas for all of them; you then check availability and assign names from your shortlist.
        </p>
        <h2>RuneScape Name Generator Quick Reference</h2>
        <p>
          To get the most from this tool: run it several times and paste results into one document; mark which names you have already tried or used; check the game&apos;s current character limit and naming policy; and always verify availability in RuneScape or OSRS before committing. The generator does not store data and does not check the game. It only produces ideas. Your privacy is preserved because generation happens in your browser.
        </p>
        <h2>One-Word vs Multi-Word OSRS Usernames</h2>
        <p>
          The generator can produce both one-word and multi-word name ideas. RuneScape and OSRS allow various formats, but each game has its own rules (e.g. spaces, length, special characters). One-word names are often easier to type and remember; multi-word names can be more distinctive. Run the generator and pick the style that fits your preference. If a generated name is too long for the game, shorten it or use one word from a two-word suggestion. The tool is flexible; use the output as inspiration and adapt as needed.
        </p>
        <p>
          Some players like names that reference the game world (e.g. fantasy or medieval terms). Others prefer neutral or humorous names. The generator leans toward fantasy and medieval style to match the setting. You can always tweak a suggestion or combine elements from different runs to get a name that feels right for you.
        </p>
        <h2>Teachers and Educational Use</h2>
        <p>
          Teachers can use this RuneScape name generator in lessons on digital identity, gaming, or creative writing. Students might generate a list of username ideas and discuss what makes a name memorable or appropriate. Emphasize that usernames should be checked for availability and that the tool is for inspiration only. The generator runs in the browser with no sign-up, so it is suitable for classroom use. For more naming tools (e.g. for other cultures or genres), see our homepage.
        </p>
        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run. There is no daily or total limit. If you need more than 24, run the generator again and paste the new list into your document. For very large lists (e.g. fifty or a hundred ideas), run the generator in batches and then sort or deduplicate in your document. The tool is designed for quick, repeated use so you can build a long shortlist without leaving the page. Each run is independent and random, so you may occasionally see the same name twice across runs; remove duplicates in your document if needed.
        </p>
        <p>
          The generator does not require an account or login. It runs entirely in your browser and does not track how many times you generate or which names you copy. You can use it as often as you like for personal or educational use.
        </p>
        <h2>Summary</h2>
        <p>
          Use this RuneScape name generator to create username and character name ideas for RuneScape and OSRS. Set the number of names (1–24) and run as often as you like. Copy results and check the game for availability. The tool runs locally in your browser with no sign-up. Keep a naming document and verify each name in the game before committing. The generator is free and does not store or share your data. Run it in batches when you need a long shortlist. For more naming and text tools, see our <Link href="/">homepage</Link>.
        </p>
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
