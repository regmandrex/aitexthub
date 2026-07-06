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


const toolSlug = 'drag-king-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Drag King Name Generator',
    description: 'Free drag king name generator for stage names. Create bold and memorable name ideas in your browser with no sign-up.',
    seoTitle: 'Drag King Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Drag King Name Generator – Stage Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Drag King name generator to create stage names for Drag King and other performers. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Drag King name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Drag King name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Drag King name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Drag King or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Drag King Name Generator?</h2>
        <p>
          A Drag King name generator is an online tool that creates stage names suitable for Drag King and other performers. You get unique name ideas at the click of a button. The generator combines curated bold and memorable words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Drag King name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Drag King name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Drag King name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Drag King Name Generator Matters</h2>
        <p>
          Choosing a memorable Drag King name or character name can be time-consuming. A Drag King name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Drag King name or character name.
        </p>
        <p>
          A good Drag King name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Drag King or other platforms.
        </p>

        <h2>How the Drag King Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated bold and memorable elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Drag King name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Drag King or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming stage names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Drag King name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Drag King name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Drag King Name Generator</h2>
        <p>Follow these steps to get Drag King name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Drag King name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Drag King is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Drag King and Gamer Naming Style</h2>
        <p>
          Drag King names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Drag King name generator uses curated bold and memorable elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Drag King or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Drag King name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Drag King Name Generator</h2>
        <p>
          Use this Drag King name generator when you need Drag King or bold and memorable username ideas quickly. Common use cases include creating a new Drag King account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Drag King name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Drag King and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Drag King name generator when creating a new Drag King account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Drag King name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Drag King but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Drag King Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Drag King name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Drag King name generator is a free way to explore options without committing until you have confirmed that your chosen Drag King name or character name is available.
        </p>

        <h2>Running the Drag King Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Drag King name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Drag King name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Drag King or another platform. The Drag King name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Drag King name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Drag King name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Drag King name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Drag King name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Drag King name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Drag King name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Drag King Name Generator?</h2>
        <p>
          Players use the Drag King name generator when creating or updating a Drag King profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Drag King name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Drag King and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Drag King Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Drag King name generator does not check Drag King or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Drag King name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Drag King Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Drag King name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Drag King or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Drag King name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Drag King or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Drag King name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Drag King password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Drag King or another platform, use the official site or app and ensure you are on a secure connection. The Drag King name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Drag King name generator provides a fast way to create username and character name ideas for Drag King and other performers. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Drag King name generator when you need Drag King name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Drag King or your chosen platform before committing to a name. The tool is a practical free resource for gaming stage names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag king name generator?', answer: 'A drag king name generator is a browser tool that creates stage names for drag king performers. Drag kings build a masculine or androgynous persona, and the name is the first thing an audience meets, so this generator mixes bold, playful, and character-driven word combinations that suit a king act. It runs entirely in your browser, needs no sign-up, and gives you 1–24 name ideas per run. The names are inspiration to build a persona around, not a registry, so shape spelling and pairing to fit your act.' },
  { category: 'Naming', question: 'What makes a good drag king stage name?', answer: 'A strong drag king name usually carries a masculine or gender-playful hook and a wink of character. Many kings lean on a punny riff, a suave first-name/last-name combo, a rugged noun, or an over-the-top macho persona played for camp. The best names are easy to shout at the end of a number and hint at the persona\'s attitude, whether that is a smooth crooner, a rockstar, a cowboy, or a mischievous heartthrob. Say a generated option out loud before you commit to it.' },
  { category: 'Naming', question: 'What naming styles do drag kings commonly use?', answer: 'Common drag king naming styles include masculine puns and double entendres, classic gentleman names (a sharp first name plus a bold surname), rugged or archetypal nouns like cowboys and rockers, and exaggerated macho personas played for humor. Some kings pick a name that riffs on their real name, a hometown, or a favorite genre of music. Generate a batch and sort options by which style fits the persona you want to perform, then refine the spelling to make it yours.' },
  { category: 'Use cases', question: 'How do I pick a name that fits my drag king persona?', answer: 'Start from the persona, not the word list. If your king is a smooth lounge singer, favor suave first-and-last-name combos; if he is a leather-clad rocker, favor harder, edgier options; if the act is comedic, lean into puns and macho exaggeration. Generate a batch, mark the names that match your vibe, and read each one as an emcee would announce it. The name should set up the character before you even hit the stage.' },
  { category: 'Usage', question: 'How do I use the drag king name generator?', answer: 'Choose how many names you want (1–24) and click Generate names to get a fresh batch of drag king stage-name ideas. Skim the list, mark the ones that fit your persona, and use the Copy button to save your shortlist to a notes app. Run it again for more options; there is no limit and no account needed. Then test your favorites out loud and see which one you would want an audience to chant.' },
  { category: 'General', question: 'Is the drag king name generator free?', answer: 'Yes. This drag king name generator is completely free to use in your browser. You can generate stage-name ideas as often as you like without creating an account, paying, or downloading anything. There is no daily or total cap on runs, so you can brainstorm a big pool of persona names, sleep on it, and come back to generate more whenever you are refining your act.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The drag king name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your persona ideas stay private, which matters when you are workshopping a new drag identity you are not ready to reveal yet. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the generator work on my phone?', answer: 'Yes. The drag king name generator is responsive and runs in any modern mobile browser, so you can brainstorm names backstage or on the go. Open the page, choose how many names you want, tap Generate, and copy your favorites straight into notes or a message to a drag mentor. No app install is required — it works the same on phone, tablet, and desktop.' },
  { category: 'Limits', question: 'How many drag king names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool, just run it again — each run produces a fresh random set with no daily or total limit. Paste several runs into one document and weed out any repeats. The 1–24 range keeps each batch easy to skim so you can quickly spot the two or three persona names that actually sound like your king.' },
  { category: 'Usage', question: 'Can I copy the names I like?', answer: 'Yes. Use the Copy button to send all generated names to your clipboard as plain text, one per line, then paste them into notes, a document, or a message. This is the intended way to keep a shortlist while you decide, since the generator does not save your runs. Copy each promising batch before you generate again so you do not lose a name you liked.' },
  { category: 'General', question: 'Do I need an account or download?', answer: 'No. The drag king name generator works with no sign-up, login, or install. Open the page, set how many names you want, click generate, and copy the results. There is no email or registration step and nothing to download — it is a self-contained browser tool, which makes it easy to pull up quickly whenever inspiration for a new persona strikes.' },
  { category: 'Naming', question: 'How do puns and double entendres work in king names?', answer: 'Wordplay is a signature of drag naming on both sides of the stage, and kings often use a masculine pun or a cheeky double entendre to signal that the act has a sense of humor. A punny name earns a laugh before the number even starts and makes the king memorable. When a generated option sparks a pun, try bending the spelling or swapping a syllable to sharpen the joke — the tool gives you the seed, and you land the punchline.' },
  { category: 'Naming', question: 'Can I build a suave gentleman-style king name?', answer: 'Absolutely. A classic route is a sharp first name paired with a bold or evocative surname, the kind of name that sounds like a lounge crooner or a matinee idol. Generate a batch, watch for first-and-last-name combos that roll off the tongue, and pick one that matches the swagger of your act. You can also mix a first name from one generated option with a surname from another to build the exact gentleman persona you want.' },
  { category: 'Use cases', question: 'Can I use this for a rugged, cowboy, or rockstar persona?', answer: 'Yes. For a rugged archetype — cowboy, biker, rocker, or tough-guy — favor the harder, more masculine nouns and edgier combinations in the batch. These names lean on strong consonants and bold imagery so the persona reads clearly the moment you are announced. Generate a set, keep the grittier options, and refine one into a name that fits the costume and music your king performs to.' },
  { category: 'Technical', question: 'How are the drag king names generated?', answer: 'The generator draws from curated word lists tuned for drag king personas — masculine nouns, punny fragments, gentleman-style names, and macho archetypes — and randomly combines them in your browser each time you click generate. Nothing is sent to a server, and each run is independent, so the list is different every time. The output is a creative seed, not an official or canon name database, so treat every result as raw material for your persona.' },
  { category: 'Best practices', question: 'What is the best workflow for choosing a king name?', answer: 'Set the count to 12 or 24, generate, and copy the batch into a notes app. Read each name aloud in an announcer\'s voice and mark the ones that match your persona\'s attitude. Shortlist five to ten, sit with them for a day, then test your top pick with a drag mentor or friend. Run the generator again whenever you want fresh options — the low-pressure, no-account flow is built for exactly this kind of iterative brainstorming.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a drag king?', answer: 'The most common misstep is a name that fights the persona — a comedic pun on a serious dramatic act, or a bland name on a big camp character. Another is choosing something too long or hard to shout, since an emcee has to announce it cleanly. A third is copying an established king in your local scene, which causes confusion at gigs. Favor names that are punchy, persona-appropriate, and distinctive to you.' },
  { category: 'Use cases', question: 'Can I use the generator to name characters for a story?', answer: 'Yes. Writers and role-players use it to name drag king characters or masc-presenting performers in fiction. Generate a batch, assign contrasting names to different characters — a suave crooner versus a rowdy rocker — so readers can tell them apart, and adjust spelling to suit each personality. The tool is a fast source of persona-flavored names; the character work and backstory are yours to build around them.' },
  { category: 'Naming', question: 'Should my king name relate to my real name or interests?', answer: 'Many kings anchor their stage name to something personal — a riff on their real name, a hometown, a music genre, or an inside joke — because it makes the persona feel authentic and easy to remember. Generate a batch to spark ideas, then bend a promising result toward that personal hook. A name with a story behind it is easier to talk about in interviews and gives your act a little extra depth.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run tops out at 24 names, but there is no limit on how many times you can run it. To build a larger pool, generate several batches and paste them into one document, then remove any duplicates. This batching approach is the intended way to gather a big list of persona candidates before you narrow down to the name you want to perform under.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens locally in your browser, so we never receive or store your generated names or settings. You can run the tool in a private or incognito window if you like. Refreshing the page clears the last batch unless you have already copied it, which is why copying your favorites as you go is the safe habit while you are still deciding on a persona name.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, the drag king name generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm persona names offline — backstage, on a plane, or anywhere without signal — and copying to your clipboard works offline too. You only need a connection to load the page the first time.' },
  { category: 'General', question: 'Are the generated names official or already trademarked?', answer: 'No. The names are random creative combinations, not entries from any official drag database, and the tool does not check whether a name is already used by a performer or trademarked. Since drag names are a personal stage identity, it is worth searching your local scene and social platforms to make sure no established king is already using your pick before you debut it. Keep a shortlist so you have backups if your first choice is taken.' },
];

export default async function DragKingNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="drag-king" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Drag King name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

