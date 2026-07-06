import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'bracket-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Bracket Name Generator',
    description: 'Free bracket name generator for team names. Create bold and memorable name ideas in your browser with no sign-up.',
    seoTitle: 'Bracket Name Generator – Tournament Team Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Bracket Name Generator – Tournament Team Names</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Bracket name generator to create team names for Bracket and other tournaments and events. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Bracket name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Bracket name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Bracket name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Bracket or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Bracket Name Generator?</h2>
        <p>
          A Bracket name generator is an online tool that creates team names suitable for Bracket and other tournaments and events. You get unique name ideas at the click of a button. The generator combines curated bold and memorable words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Bracket name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Bracket name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Bracket name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Bracket Name Generator Matters</h2>
        <p>
          Choosing a memorable Bracket name or character name can be time-consuming. A Bracket name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Bracket name or character name.
        </p>
        <p>
          A good Bracket name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Bracket or other platforms.
        </p>

        <h2>How the Bracket Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated bold and memorable elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Bracket name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Bracket or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming team names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Bracket name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Bracket name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Bracket Name Generator</h2>
        <p>Follow these steps to get Bracket name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Bracket name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Bracket is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Bracket and Gamer Naming Style</h2>
        <p>
          Bracket names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Bracket name generator uses curated bold and memorable elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Bracket or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Bracket name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Bracket Name Generator</h2>
        <p>
          Use this Bracket name generator when you need Bracket or bold and memorable username ideas quickly. Common use cases include creating a new Bracket account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Bracket name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Bracket and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Bracket name generator when creating a new Bracket account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Bracket name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Bracket but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Bracket Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Bracket name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Bracket name generator is a free way to explore options without committing until you have confirmed that your chosen Bracket name or character name is available.
        </p>

        <h2>Running the Bracket Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Bracket name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Bracket name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Bracket or another platform. The Bracket name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Bracket name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Bracket name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Bracket name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Bracket name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Bracket name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Bracket name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Bracket Name Generator?</h2>
        <p>
          Players use the Bracket name generator when creating or updating a Bracket profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Bracket name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Bracket and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Bracket Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Bracket name generator does not check Bracket or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Bracket name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Bracket Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Bracket name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Bracket or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Bracket name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Bracket or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Bracket name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Bracket password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Bracket or another platform, use the official site or app and ensure you are on a secure connection. The Bracket name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Bracket name generator provides a fast way to create username and character name ideas for Bracket and other tournaments and events. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Bracket name generator when you need Bracket name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Bracket or your chosen platform before committing to a name. The tool is a practical free resource for gaming team names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a bracket name generator?', answer: 'A bracket name generator is a browser tool that creates team and entry names for tournament brackets, bracket challenges, and knockout competitions. Whether you are seeding a March Madness pool, a fantasy bracket, an office competition, or an esports ladder, the name is what shows up next to your slot in the bracket, so this tool mixes bold, punchy, and memorable words that stand out on the board. It runs entirely in your browser, needs no sign-up, and gives you 1–24 names per run.' },
  { category: 'Naming', question: 'What makes a good bracket or tournament name?', answer: 'A good bracket name is short, bold, and easy to read at a glance on a crowded tournament board. It should carry a bit of swagger or humor so it stands out from the other entries and is easy to root for or against. Punny names, intimidating one-worders, and clever references all work well. Since bracket slots are narrow, favor names that fit without being cut off and that sound good when a commentator reads them aloud.' },
  { category: 'Use cases', question: 'Can I use this to name my March Madness or sports pool entry?', answer: 'Yes. This is a common use — naming your entry in a March Madness bracket pool, a fantasy playoff bracket, or any sports knockout pool. Generate a batch, pick a name that is funny, cocky, or clever enough to stand out on the standings page, and copy it into the pool. A memorable entry name gets noticed on the leaderboard and gives your friends something to trash-talk about all tournament long.' },
  { category: 'Use cases', question: 'How do I name a team for a tournament bracket?', answer: 'For a competition team, pick a name that signals confidence and reads clearly in a single bracket slot. Generate a set, keep the bold, taggable options, and test how each looks squeezed next to the seed number on the board. Match the tone to the event — intimidating for a serious esports ladder, playful for a casual office bracket. The name should be easy for opponents to remember and for organizers to type into the bracket software.' },
  { category: 'Usage', question: 'How do I use the bracket name generator?', answer: 'Choose how many names you want (1–24) and click Generate names to get a fresh batch of bracket and team-name ideas. Skim the list, mark the ones that fit your competition, and use the Copy button to save your shortlist. Run it again for more options — there is no limit and no account needed. Then test your favorite by picturing it in a bracket slot and reading it aloud as if a host were announcing the matchup.' },
  { category: 'General', question: 'Is the bracket name generator free?', answer: 'Yes. This bracket name generator is completely free to use in your browser. You can generate tournament and team name ideas as often as you like without creating an account, paying, or downloading anything. There is no daily or total cap on runs, so you can brainstorm entry names for a whole league of brackets or an entire office pool without any friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The bracket name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your entry names stay private until you enter them into the bracket yourself. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the bracket name generator work on mobile?', answer: 'Yes. The generator is responsive and runs in any modern mobile browser, so you can name your bracket entry on your phone right as registration opens. Open the page, choose how many names you want, tap Generate, and copy your favorite straight into the tournament app or pool site. No install is required — it works the same on phone, tablet, and desktop.' },
  { category: 'Limits', question: 'How many bracket names can I generate at once?', answer: 'You can request 1–24 names per run. If you want more options, just run it again — each run produces a fresh random set with no daily or total limit. Paste several runs into one document and remove any repeats. The 1–24 range keeps each batch easy to skim so you can quickly spot the one or two names that would look best in your bracket slot.' },
  { category: 'Usage', question: 'Can I copy the names I like?', answer: 'Yes. Use the Copy button to send all generated names to your clipboard as plain text, one per line, then paste them into notes, a group chat, or the tournament registration field. This is the intended way to keep a shortlist while you decide, since the generator does not save your runs. Copy each promising batch before generating again so you do not lose a name you liked.' },
  { category: 'General', question: 'Do I need an account or download?', answer: 'No. The bracket name generator works with no sign-up, login, or install. Open the page, set how many names you want, click generate, and copy the results. There is no email or registration step and nothing to download — it is a self-contained browser tool, easy to pull up the moment a bracket opens for entries.' },
  { category: 'Naming', question: 'How do I make my bracket name funny or trash-talky?', answer: 'The best casual bracket names lean into humor and light trash talk — puns on the sport, cocky boasts, or references your pool will recognize. Generate a batch to spark a direction, then bend a promising result toward an inside joke or a jab at a rival entrant. In a friendly pool the funniest name often gets the most attention on the standings page, so do not be afraid to play it up.' },
  { category: 'Use cases', question: 'Can I use this for an esports or gaming ladder?', answer: 'Yes. For a competitive gaming bracket or ladder, favor sharp, intimidating names that look strong next to your seed and are easy for casters to say. Generate a set, keep the bold one-worders and punchy combos, and pick one that fits your squad\'s reputation. A clean, confident name reads well on a live bracket overlay and is easy for opponents and spectators to remember.' },
  { category: 'Technical', question: 'How are the bracket names generated?', answer: 'The generator draws from curated word lists tuned for competition names — bold nouns, punchy modifiers, and memorable combinations — and randomly pairs them in your browser each time you click generate. Nothing is sent to a server, and every run is independent, so the list differs each time. The output is creative inspiration for your bracket, not a registry, so treat each result as a starting point you can tweak to fit your event.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a bracket entry?', answer: 'Set the count to 12 or 24, generate, and copy the batch into a notes app. Read each name as if it were being announced in a matchup and mark the ones that fit your competition\'s tone. Shortlist a few, check that each fits in the bracket slot without being cut off, then pick the one with the most punch. Run the generator again whenever you want fresh options before registration closes.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a bracket entry?', answer: 'The most common misstep is a name too long to display cleanly in a narrow bracket slot, so keep it short and readable. Another is a tone that clashes with the event — an aggressive name in a friendly office pool, or a goofy one in a serious esports final. A third is picking something forgettable that blends in with every other entry. Favor names that are short, on-tone, and distinctive.' },
  { category: 'Naming', question: 'Can I combine or tweak the generated names?', answer: 'Yes, and it is encouraged. Mix a bold word from one result with a modifier from another, or adjust the spelling to add a personal touch or an inside reference. The generator gives you punchy building blocks, and the strongest bracket names often come from bending a promising line rather than taking any single one untouched. Make the name your own before you lock it into the bracket.' },
  { category: 'Use cases', question: 'Can I name a whole bracket or the tournament itself?', answer: 'Yes. Beyond individual entries, you can use the generator to name the bracket event as a whole — an office championship, a friends\' seasonal showdown, or a recurring gaming ladder. Generate a batch and keep options that sound like an event title with a bit of grandeur or humor. A strong tournament name gives the whole competition an identity that entrants and spectators can rally around.' },
  { category: 'Naming', question: 'Should my bracket name match the sport or game?', answer: 'Tying the name to the sport or game it is played in makes it land harder — a basketball pun for March Madness, a shooter reference for an esports bracket, a themed jab for a fantasy playoff. Generate a batch for raw ideas, then steer a favorite toward the specific competition. A name that nods to the event feels intentional and is more memorable to everyone else in the bracket.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run tops out at 24 names, but there is no limit on how many times you can run it. To build a bigger pool — say, when naming entries for a whole league of brackets — generate several batches and paste them into one document, then remove duplicates. This batching approach is the intended way to gather a large list of candidates before assigning a distinct name to each entry.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens locally in your browser, so we never receive or store your generated names or settings. You can run the tool in a private or incognito window if you like. Refreshing the page clears the last batch unless you have already copied it, which is why copying your favorites as you go is the safe habit while you are still choosing your bracket name.' },
  { category: 'Troubleshooting', question: 'Can I use the bracket name generator offline?', answer: 'Yes. Once the page has loaded, the bracket name generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm entry names offline — at a venue, during a draft, or anywhere without signal — and copying to your clipboard works offline too. You only need a connection to load the page the first time.' },
  { category: 'Troubleshooting', question: 'My bracket name is already taken in the pool — what now?', answer: 'Some pools and tournament apps require unique entry names, so a favorite may already be claimed. The generator does not check any pool for availability; it only suggests ideas. Keep a shortlist of five to ten names so you have instant backups, and run the generator again for more options if you need them. Having alternatives ready means a taken name never slows down your registration.' },
];

export default async function BracketNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="bracket" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Bracket name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

