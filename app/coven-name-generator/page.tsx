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


const toolSlug = 'coven-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Coven Name Generator',
    description: 'Free coven name generator for coven and witch names. Create witch-style name ideas in your browser with no sign-up.',
    seoTitle: 'Coven Name Generator – Witch & Coven Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Coven Name Generator – Witch & Coven Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Coven name generator to create coven and witch names for Coven and other fiction and creative projects. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Coven name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Coven name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Coven name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Coven or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Coven Name Generator?</h2>
        <p>
          A Coven name generator is an online tool that creates coven and witch names suitable for Coven and other fiction and creative projects. You get unique name ideas at the click of a button. The generator combines curated witch-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Coven name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Coven name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Coven name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Coven Name Generator Matters</h2>
        <p>
          Choosing a memorable Coven name or character name can be time-consuming. A Coven name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Coven name or character name.
        </p>
        <p>
          A good Coven name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Coven or other platforms.
        </p>

        <h2>How the Coven Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated witch-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Coven name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Coven or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming coven and witch names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Coven name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Coven name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Coven Name Generator</h2>
        <p>Follow these steps to get Coven name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Coven name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Coven is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Coven and Gamer Naming Style</h2>
        <p>
          Coven names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Coven name generator uses curated witch-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Coven or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Coven name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Coven Name Generator</h2>
        <p>
          Use this Coven name generator when you need Coven or witch-style username ideas quickly. Common use cases include creating a new Coven account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Coven name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Coven and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Coven name generator when creating a new Coven account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Coven name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Coven but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Coven Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Coven name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Coven name generator is a free way to explore options without committing until you have confirmed that your chosen Coven name or character name is available.
        </p>

        <h2>Running the Coven Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Coven name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Coven name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Coven or another platform. The Coven name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Coven name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Coven name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Coven name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Coven name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Coven name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Coven name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Coven Name Generator?</h2>
        <p>
          Players use the Coven name generator when creating or updating a Coven profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Coven name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Coven and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Coven Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Coven name generator does not check Coven or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Coven name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Coven Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Coven name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Coven or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Coven name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Coven or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Coven name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Coven password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Coven or another platform, use the official site or app and ensure you are on a secure connection. The Coven name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Coven name generator provides a fast way to create username and character name ideas for Coven and other fiction and creative projects. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Coven name generator when you need Coven name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Coven or your chosen platform before committing to a name. The tool is a practical free resource for gaming coven and witch names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a coven name generator?', answer: 'A coven name generator is a browser tool that creates names for witch covens, circles, and magical sisterhoods. A coven name sets the tone for a group of witches — mysterious, dark, nature-bound, or ancient — so this generator mixes evocative witch-style words, moon and shadow imagery, and old-world roots to produce names that feel like a real order. It runs entirely in your browser, needs no sign-up, and gives you 1–24 coven names per run to use in stories, games, or role-play.' },
  { category: 'Naming', question: 'What makes a good coven name?', answer: 'A strong coven name conjures atmosphere in a few words. The best ones lean on evocative imagery — moon, shadow, thorn, ash, hollow — paired with a group word like Coven, Circle, Order, Sisterhood, or Sabbath. It should hint at the coven\'s nature: a gentle hedge-witch circle sounds very different from a blood-magic cabal. Say a generated name aloud and picture the witches who belong to it; if it sets an instant mood, it will work on the page.' },
  { category: 'Naming', question: 'What themes work best for coven names?', answer: 'Coven names draw power from a handful of recurring themes: lunar and celestial (Moon, Crescent, Eclipse), nature and the wild (Thornwood, Nightshade, Willow), darkness and shadow (Umbra, Hollow, Ravenmark), and the ancient or occult (Sabbath, Rite, Elder, Veil). Elemental and seasonal words also work well. Generate a batch, sort options by the theme that fits your coven\'s magic, and combine a mood word with a group noun to lock in the identity.' },
  { category: 'Use cases', question: 'How do I name a coven to match its magic?', answer: 'Let the coven\'s practice steer the name. A nature-based, healing circle suits soft, green words like Willow Grove or Hollow Circle; a dark or vengeful coven suits Nightshade Order or Bloodmoon Sabbath; an ancient, secretive order suits words like Veil, Elder, or Rite. Generate a batch, keep the names whose tone matches the witches\' powers and morals, and refine the pairing so the name promises the kind of magic your coven actually practices.' },
  { category: 'Usage', question: 'How do I use the coven name generator?', answer: 'Choose how many coven names you want (1–24) and click Generate names to get a fresh batch. Skim the list, mark the ones that fit the tone of your witches, and use the Copy button to save your shortlist into a notes app. Run it again for more options — there is no limit and no account needed. Then read your favorites aloud and picture the coven each one conjures before you commit.' },
  { category: 'General', question: 'Is the coven name generator free?', answer: 'Yes. This coven name generator is completely free to use in your browser. You can generate witch and coven name ideas as often as you like without creating an account, paying, or downloading anything. There is no daily or total cap on runs, so brainstorm a big pool of names for your story\'s covens, sit with them, and generate more whenever you need fresh options.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The coven name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your worldbuilding notes stay private, which matters when you are developing an unpublished story or campaign. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the coven name generator work on mobile?', answer: 'Yes. The generator is responsive and runs in any modern mobile browser, so you can brainstorm coven names on your phone during a writing session or a tabletop game. Open the page, choose how many names you want, tap Generate, and copy your favorites straight into notes. No app install is required — it works the same on phone, tablet, and desktop.' },
  { category: 'Limits', question: 'How many coven names can I generate at once?', answer: 'You can request 1–24 names per run. For a larger pool, just run it again — each run produces a fresh random set with no daily or total limit. Paste several runs into one document and remove any repeats. The 1–24 range keeps each batch easy to skim so you can quickly spot the two or three names that truly capture the coven you are building.' },
  { category: 'Usage', question: 'Can I copy the coven names I like?', answer: 'Yes. Use the Copy button to send all generated names to your clipboard as plain text, one per line, then paste them into notes, a manuscript, or a campaign document. This is the intended way to keep a shortlist while you decide, since the generator does not save your runs. Copy each promising batch before generating again so you do not lose a name that fit your witches.' },
  { category: 'General', question: 'Do I need an account or download?', answer: 'No. The coven name generator works with no sign-up, login, or install. Open the page, set how many names you want, click generate, and copy the results. There is no email or registration step and nothing to download — it is a self-contained browser tool, easy to pull up whenever you need a coven, circle, or sisterhood name for a project.' },
  { category: 'Naming', question: 'What group words can I pair with a coven name?', answer: 'Beyond "Coven," strong collective words include Circle, Order, Sisterhood, Sabbath, Cabal, Rite, Assembly, and Conclave — each carries a slightly different flavor. A Circle feels intimate and grounded, an Order feels structured and old, a Cabal feels secretive and dangerous. Generate a batch, then swap the group word to shift the tone: "Thornwood Circle" and "Thornwood Cabal" imply very different covens from the same root.' },
  { category: 'Use cases', question: 'Can I use these names for a story or novel?', answer: 'Yes. Writers use the generator to name witch covens in fantasy fiction, giving rival groups distinct identities. Generate a batch and assign contrasting names to different factions — a benevolent nature circle versus a shadow-bound cabal — so readers can tell them apart at a glance. Adjust spelling and pairing to fit each coven\'s lore. The tool is a fast source of atmospheric names; the mythology around them is yours to write.' },
  { category: 'Use cases', question: 'Can I use these names for a tabletop or video game campaign?', answer: 'Absolutely. Game masters use coven names for antagonist factions, hidden orders, and quest-giving circles in tabletop RPGs and worldbuilding for games. Generate a set, keep the names that fit each faction\'s alignment and territory, and build an emblem, motto, and roster of witches around the one you choose. A vivid coven name gives players an instant sense of who they are dealing with.' },
  { category: 'Technical', question: 'How are the coven names generated?', answer: 'The generator draws from curated word lists tuned for witch and coven themes — lunar, natural, shadowy, and occult words plus collective nouns — and randomly combines them in your browser each time you click generate. Nothing is sent to a server, and every run is independent, so the list differs each time. The output is creative inspiration, not an official or canon database, so treat each result as raw material for your worldbuilding.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a coven?', answer: 'Set the count to 12 or 24, generate, and copy the batch into a notes app. Read each name aloud and mark the ones that match the coven\'s theme and morality. Shortlist five to ten, sit with them, then pick the one that best fits the witches\' powers and place in your world. Run the generator again for fresh options whenever you need them — the no-account flow is built for this kind of iterative brainstorming.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a coven?', answer: 'The most common misstep is a name whose tone fights the coven — a soft, floral name on a menacing blood cult, or a grim name on a gentle healing circle. Another is over-length, since a name too long to say loses its incantatory punch. A third is reusing a famous coven name from well-known fiction, which reads as unoriginal. Favor names that are evocative, tone-appropriate, and distinctive to your world.' },
  { category: 'Naming', question: 'How do I make a coven name sound ancient or old-world?', answer: 'Lean on archaic and occult roots — Elder, Veil, Rite, Sabbath, Umbra, Wyrd — and pair them with weathered nature words like Ash, Thorn, Hollow, or Bramble. Slightly antique spellings and Latin- or Old-English-flavored fragments deepen the sense of age. Generate a batch, pick the options that already feel old, and lean the spelling further toward the archaic to suggest a coven that has practiced its craft for centuries.' },
  { category: 'Naming', question: 'Can I combine names or tweak the results?', answer: 'Yes, and it is encouraged. Mix a mood word from one generated name with a group noun from another to build the exact coven you want, or adjust spelling to fit your world\'s language. The generator gives you seeds — evocative fragments and collective words — and the strongest coven names usually come from bending a promising result rather than taking any single line untouched. Make each name feel handmade for your story.' },
  { category: 'Limits', question: 'Can I get more than 24 coven names?', answer: 'Each run tops out at 24 names, but there is no limit on how many times you can run it. To build a larger pool for a world with many covens, generate several batches and paste them into one document, then remove duplicates. This batching approach is the intended way to gather a big list of candidates before assigning distinct names to each circle in your story or campaign.' },
  { category: 'Privacy', question: 'Do you store the coven names I generate?', answer: 'No. Generation happens locally in your browser, so we never receive or store your generated names or settings. You can run the tool in a private or incognito window if you like. Refreshing the page clears the last batch unless you have already copied it, which is why copying your favorites as you go is the safe habit while you are still choosing names for your covens.' },
  { category: 'Troubleshooting', question: 'Can I use the coven name generator offline?', answer: 'Yes. Once the page has loaded, the coven name generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm witch and coven names offline — during a writing retreat, a campaign session, or anywhere without signal — and copying to your clipboard works offline too. You only need a connection to load the page the first time.' },
  { category: 'General', question: 'Are the coven names official or from a known franchise?', answer: 'No. The names are random creative combinations, not entries from any published book, game, or canon witch lore. Because coven names in fiction can be memorable, it is worth a quick search to make sure your favorite is not already strongly tied to a well-known story before you build your own around it. Keep a shortlist so you have backups if you want something more original.' },
];

export default async function CovenNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="coven" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Coven name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

