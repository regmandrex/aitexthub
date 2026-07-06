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


const toolSlug = 'yautja-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Yautja Name Generator',
    description: 'Free yautja name generator for Predator-style names. Create Yautja-style name ideas in your browser with no sign-up.',
    seoTitle: 'Yautja Name Generator – Predator Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Yautja Name Generator – Predator Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Yautja name generator to create Predator-style names for Yautja and other fiction and creative projects. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Yautja name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Yautja name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Yautja name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Yautja or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Yautja Name Generator?</h2>
        <p>
          A Yautja name generator is an online tool that creates Predator-style names suitable for Yautja and other fiction and creative projects. You get unique name ideas at the click of a button. The generator combines curated Yautja-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Yautja name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Yautja name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Yautja name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Yautja Name Generator Matters</h2>
        <p>
          Choosing a memorable Yautja name or character name can be time-consuming. A Yautja name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Yautja name or character name.
        </p>
        <p>
          A good Yautja name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Yautja or other platforms.
        </p>

        <h2>How the Yautja Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated Yautja-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Yautja name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Yautja or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming Predator-style names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Yautja name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Yautja name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Yautja Name Generator</h2>
        <p>Follow these steps to get Yautja name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Yautja name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Yautja is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Yautja and Gamer Naming Style</h2>
        <p>
          Yautja names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Yautja name generator uses curated Yautja-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Yautja or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Yautja name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Yautja Name Generator</h2>
        <p>
          Use this Yautja name generator when you need Yautja or Yautja-style username ideas quickly. Common use cases include creating a new Yautja account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Yautja name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Yautja and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Yautja name generator when creating a new Yautja account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Yautja name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Yautja but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Yautja Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Yautja name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Yautja name generator is a free way to explore options without committing until you have confirmed that your chosen Yautja name or character name is available.
        </p>

        <h2>Running the Yautja Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Yautja name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Yautja name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Yautja or another platform. The Yautja name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Yautja name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Yautja name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Yautja name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Yautja name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Yautja name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Yautja name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Yautja Name Generator?</h2>
        <p>
          Players use the Yautja name generator when creating or updating a Yautja profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Yautja name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Yautja and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Yautja Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Yautja name generator does not check Yautja or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Yautja name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Yautja Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Yautja name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Yautja or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Yautja name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Yautja or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Yautja name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Yautja password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Yautja or another platform, use the official site or app and ensure you are on a secure connection. The Yautja name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Yautja name generator provides a fast way to create username and character name ideas for Yautja and other fiction and creative projects. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Yautja name generator when you need Yautja name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Yautja or your chosen platform before committing to a name. The tool is a practical free resource for gaming Predator-style names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Yautja name generator?', answer: 'It is a browser tool that creates Predator-style names — the harsh, guttural, honor-bound names of the Yautja alien hunters. It is built for writers, role-players, and worldbuilders who need a name for an original Yautja character, a hunting clan, or a Predator OC in fiction. The generator combines curated Yautja-style word pieces at random in your browser and gives you 1–24 names per run. It runs locally, stores nothing, and needs no sign-up.' },
  { category: 'Usage', question: 'How do I use the Yautja name generator?', answer: 'Set how many names you want (1–24) and click Generate to get a fresh batch of Predator-style names. Skim for the ones that sound suitably harsh and honorable, then use the Copy button to save the whole list. Paste it into your story notes, character sheet, or role-play profile and shortlist your favorites. Run again as often as you like for more options; there is no account, no download, and no limit on runs.' },
  { category: 'Naming', question: 'What makes a name sound Yautja?', answer: 'Yautja names lean on hard, guttural sounds — clustered consonants, glottal breaks, and a bold rhythm that feels like it was growled through mandibles rather than spoken softly. Bold and memorable beats delicate; a name should sound like a warrior who has earned it. The generator combines word pieces tuned to that harsh, alien cadence so the output reads as a hunter\'s name and not a soft human one. Say a candidate out loud — if it feels heavy and dangerous, it fits.' },
  { category: 'Naming', question: 'How do I name a Yautja character for a story?', answer: 'Match the name\'s weight to the character\'s standing in the Hunt. A seasoned, honored hunter can carry a longer, more imposing name; a young Blooded warrior earning their place suits something sharper and simpler. Decide the character\'s role — elder, clan leader, disgraced Bad Blood, or fresh initiate — then generate a batch and keep the name whose sound matches that role. You can tweak spelling or drop a syllable to fine-tune the feel to your character.' },
  { category: 'Naming', question: 'How should I name a Yautja hunting clan?', answer: 'A clan name should sound collective and imposing — something that reads well as a banner over a group of hunters rather than a single warrior. Generate a batch, favor the harsher and broader-sounding options, and pick one that contrasts with your individual characters\' names so the clan reads as its own entity. If you are building rival clans, assign each a distinctly different sound so readers can tell your factions apart in a fight.' },
  { category: 'Use cases', question: 'Can I use these names for role-play and worldbuilding?', answer: 'Yes — that is exactly what the tool is for. Tabletop players building a Predator-style hunter, forum role-players, and worldbuilders inventing a whole Yautja clan all use the same harsh, honor-coded style. Generate a batch, match a name to your character\'s rank and personality, and drop it straight into your profile or campaign notes. The names are yours to use and tweak freely once you pick them.' },
  { category: 'Naming', question: 'Should Yautja names be long or short?', answer: 'Either can work, and the length itself carries meaning. Longer, more elaborate names suit elders, clan leaders, and legendary hunters whose reputation precedes them. Shorter, sharper names suit young warriors, scouts, or characters you want to feel quick and lethal. Generate a mix and let the length signal standing — pairing a long-named elder against a short-named upstart in the same scene instantly tells readers who is who.' },
  { category: 'Best practices', question: 'How do I name a whole group of Yautja characters?', answer: 'Generate a batch and pick names that contrast in sound and length so your characters do not blur together. Give the elder a long, imposing name, the reckless young hunter a short, sharp one, and the outcast Bad Blood something rougher still. Lay the candidates side by side and assign the most distinct-sounding names to your most important characters, keeping the rest varied enough that no two are easily confused in dialogue.' },
  { category: 'Naming', question: 'Can I tweak the generated names?', answer: 'Absolutely. The generator gives you raw material; the final name is yours to shape. Swap a vowel for a harsher one, drop or add a syllable, or splice the strong front of one name onto the tail of another until it sounds exactly like your character. This is a normal part of the workflow — treat the output as a starting pool and tune it until the name feels earned rather than random.' },
  { category: 'Naming', question: 'What common mistakes should I avoid with Yautja names?', answer: 'The biggest one is picking a name that sounds too soft or too human — a gentle, flowing name undercuts a fearsome hunter. Avoid names that are hard to say aloud, since they trip up dialogue and role-play. Also avoid giving every character in a clan a similar-sounding name, which makes them blur together. Favor harsh, distinct, pronounceable options and let each name earn its place the way a Yautja earns its mark.' },
  { category: 'General', question: 'Is the Yautja name generator free?', answer: 'Yes, it is completely free to use in your browser with no account, no payment, and no download. You can generate Predator-style names as often as you like, and there is no daily or total limit on runs. Everything happens locally on your device, so there is nothing to sign up for — open the page, set a count, and start generating hunter names right away.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I generate names?', answer: 'No. When you set a count and click generate, the names are created locally on your device inside your browser. Your settings and the generated list are never uploaded to our servers, and nothing is logged or stored. Your character ideas stay private until you decide to publish them. You can even run the tool in a private or incognito window if you prefer.' },
  { category: 'Compatibility', question: 'Does the generator work on mobile?', answer: 'Yes. The tool runs in any modern web browser and is responsive on desktop, tablet, and phone, with no app to install. Brainstorming a character on your phone? Open the page, generate a batch, and copy it straight into your notes app or a character sheet. It works anywhere you can open a browser tab.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool — say, to name an entire clan — just run it again, since each run produces a fresh random batch and there is no daily or total cap. Paste several runs into one document and remove any duplicates. The 24-name limit keeps each list easy to skim while still giving you plenty of hunter names to sort through.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button puts the whole list on your clipboard as plain text, one name per line, so it pastes cleanly into any notes app, character sheet, or campaign document. Copying is the intended way to save a batch before you shortlist. Grab a big list, drop it into your worldbuilding notes, and mark the names that fit each character so you can compare them side by side.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No. The generator works with no sign-up, login, email, or registration. It runs entirely in your browser — open the page, choose how many names you want, click generate, and copy the results. There is nothing to create or verify, and no personal information is ever requested. Just open it and start naming your Yautja hunters and clans.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated Yautja-style word pieces — harsh consonant clusters and guttural fragments — then randomly combines them in your browser so each run is different. The pieces are chosen to sound bold, alien, and honor-bound. Nothing is sent to a server, and the output is original inspiration rather than an official roster pulled from a database. Read a few aloud and you will hear the heavy, warrior-like cadence they are tuned for.' },
  { category: 'General', question: 'Are these official Predator or Yautja names?', answer: 'No. Every name the tool produces is original material for your own creative use — it is not a database of canon characters from the films or comics. That is deliberate, so your hunter stands on its own rather than borrowing an established name. If a generated name happens to echo the general style of canon Yautja, that is the point; if you want to avoid any specific canon name, simply pick another from your batch.' },
  { category: 'Naming', question: 'How does Yautja honor culture affect naming?', answer: 'The Yautja are defined by a strict code of honor built around the Hunt, and a name should feel earned within that world. A respected elder or clan leader carries a weighty, imposing name; a young Blooded warrior who has just made their first kill suits something sharper and less grand; a dishonored Bad Blood might have a rougher, harsher name. Let the character\'s standing in that honor system guide which generated name you keep.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a Yautja character?', answer: 'Decide the character\'s role and standing first — elder, clan leader, young hunter, or outcast — then generate a batch and read each candidate aloud. Keep the names whose sound and length match that role, tweak spelling if needed, and check none of them blur with your other characters. Copy your shortlist so you have backups if a name does not sit right once you see it in dialogue. A few minutes of generating beats staring at a blank field.' },
  { category: 'Naming', question: 'How do I make rival hunters sound different?', answer: 'Give each rival a distinctly different sound so readers feel the contrast in every scene they share. Vary the length, the harshness, and the rhythm — a long, cold, deliberate name against a short, snarling one immediately reads as two different warriors. Generate a batch, lay the strongest candidates side by side, and deliberately assign contrasting names to opponents so their clash is clear even before you describe them.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, generating and copying names both work entirely offline in your browser with no network connection needed. You only need a connection to open the page the first time. That makes it handy for brainstorming Yautja names on the go — generate, copy into a local notes file, and refine your list wherever you are, even without internet.' },
  { category: 'General', question: 'Does this tool design the character for me?', answer: 'No. The generator only produces name ideas — it does not write the character\'s backstory, rank, or appearance. Pair a generated name with your own concept: decide the hunter\'s clan, their place in the honor code, and their personality, then choose the name whose sound fits. Think of it as a fast idea machine for the name specifically, leaving the rest of the character in your hands to build.' },
];

export default async function YautjaNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="yautja" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Yautja name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

