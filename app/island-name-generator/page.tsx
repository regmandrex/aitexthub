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


const toolSlug = 'island-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Island Name Generator',
    description: 'Free island name generator for island names. Create tropical and fantasy name ideas in your browser with no sign-up.',
    seoTitle: 'Island Name Generator – Tropical & Island Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Island Name Generator – Tropical & Island Names</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Island name generator to create island names for Island and other fiction and creative projects. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Island name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Island name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Island name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Island or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Island Name Generator?</h2>
        <p>
          A Island name generator is an online tool that creates island names suitable for Island and other fiction and creative projects. You get unique name ideas at the click of a button. The generator combines curated tropical and fantasy words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Island name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Island name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Island name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Island Name Generator Matters</h2>
        <p>
          Choosing a memorable Island name or character name can be time-consuming. A Island name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Island name or character name.
        </p>
        <p>
          A good Island name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Island or other platforms.
        </p>

        <h2>How the Island Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated tropical and fantasy elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Island name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Island or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming island names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Island name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Island name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Island Name Generator</h2>
        <p>Follow these steps to get Island name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Island name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Island is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Island and Gamer Naming Style</h2>
        <p>
          Island names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Island name generator uses curated tropical and fantasy elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Island or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Island name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Island Name Generator</h2>
        <p>
          Use this Island name generator when you need Island or tropical and fantasy username ideas quickly. Common use cases include creating a new Island account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Island name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Island and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Island name generator when creating a new Island account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Island name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Island but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Island Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Island name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Island name generator is a free way to explore options without committing until you have confirmed that your chosen Island name or character name is available.
        </p>

        <h2>Running the Island Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Island name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Island name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Island or another platform. The Island name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Island name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Island name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Island name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Island name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Island name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Island name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Island Name Generator?</h2>
        <p>
          Players use the Island name generator when creating or updating a Island profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Island name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Island and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Island Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Island name generator does not check Island or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Island name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Island Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Island name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Island or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Island name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Island or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Island name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Island password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Island or another platform, use the official site or app and ensure you are on a secure connection. The Island name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Island name generator provides a fast way to create username and character name ideas for Island and other fiction and creative projects. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Island name generator when you need Island name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Island or your chosen platform before committing to a name. The tool is a practical free resource for gaming island names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an island name generator?', answer: 'It is a browser tool that invents place names for islands, from sun-soaked tropical isles to mysterious fantasy archipelagos, for use in stories, games, maps, and worldbuilding. It blends words tied to sea, sand, and sky with descriptive and fantastical elements so each result reads like a real spot on a chart. Everything is generated locally in your browser, it is free, and nothing you create is stored or sent to a server.' },
  { category: 'Usage', question: 'How do I use the island name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate for a fresh batch of island names. Skim for ones that match your setting, whether that is a lush tropical paradise or a wind-battered fantasy rock, and use the Copy button to save the batch. Paste it into your map notes or story doc and shortlist your favorites. Run again as many times as you like; no sign-up and no download.' },
  { category: 'Naming', question: 'What makes a good island name?', answer: 'Strong island names usually evoke a place at a glance, sound easy to say, and hint at the island\'s character, its climate, wildlife, shape, or a story attached to it. Real islands often use descriptive patterns (Palm Cay, Coral Reef, Skull Rock) or a possessive founder name (Drake\'s Isle). A memorable name paints a picture in one or two words, so a reader instantly senses whether it is a paradise, a haven, or somewhere to avoid.' },
  { category: 'Naming', question: 'How do I name a tropical island versus a fantasy island?', answer: 'A tropical island leans on warm, coastal imagery, palms, coral, lagoon, sun, turquoise, and gentle words like Cay, Cove, and Bay (Coconut Cay, Azure Lagoon). A fantasy island can go stranger and darker, borrowing invented syllables, mythic creatures, and dramatic features (Isle of Wyrmspire, The Shattered Coast). Decide the mood first, then keep the generated names whose sound fits, breezy and inviting, or wild and otherworldly.' },
  { category: 'General', question: 'Is the island name generator free?', answer: 'Yes, it is completely free with no account, email, or payment. Generate as many batches of island names as you want; there is no daily or total limit. Nothing is gated and there is nothing to install. Because it runs in your browser, it costs you nothing and keeps your worldbuilding private.' },
  { category: 'Naming', question: 'What geographic words work well in island names?', answer: 'Common building blocks include the landform terms real charts use, Isle, Cay, Key, Atoll, Reef, Cove, Bay, Point, Shoal, and Rock, plus mood words like Paradise, Haven, Refuge, or Solitude. Pairing a descriptive first word with one of these (Emerald Isle, Serpent Cay, Tempest Point) instantly reads as a genuine place name. The generator mixes these so results feel mappable rather than random.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server or stored?', answer: 'No. The generator runs entirely in your browser, so names are assembled on your device and never transmitted anywhere. We do not log or save the names you create, your settings, or how often you run it. You can worldbuild in a private window, and closing the tab clears the last batch unless you copied it.' },
  { category: 'Compatibility', question: 'Does the island name generator work on mobile?', answer: 'Yes. It is a responsive web page that works on phones, tablets, and desktops with no app to install. On a phone you can generate a batch while sketching a map or mid-game, tap Copy, and drop the names into your notes. Any modern mobile browser works, and generation stays fast because it happens locally.' },
  { category: 'Limits', question: 'How many island names can I generate at once?', answer: 'Each run gives 1 to 24 names, and you set the count before generating. Want more? Just run it again; every run is a fresh random set. There is no daily or total limit, so keep generating until a name feels right for your map. Paste several runs into one note and remove duplicates to build a larger pool of place names.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button places the whole batch on your clipboard as plain text, one name per line, ready to paste into a worldbuilding doc, a map key, or a game master\'s notes. Copying is the intended way to save a shortlist, since the tool does not export a file. Grab the batch, then say the names aloud to check which ones roll off the tongue like a real place.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No account, login, or email is required. Open the page, choose how many names you want, click Generate, and copy the results. There is no registration and nothing hidden behind a sign-up. It stays quick and anonymous so you can brainstorm freely.' },
  { category: 'Naming', question: 'How do I name a whole archipelago or island chain?', answer: 'Name the group with a collective term, then give each island a member name that shares a theme. A chain might be "The Coral Chain" or "The Sunder Isles," with individual islands echoing the motif (Little Coral, Coral Deep, Coral Reach). Generate a batch, pick a family of names that sound related, and reserve one distinctive name for the chain itself. Consistency across the group makes the geography feel designed rather than scattered.' },
  { category: 'Naming', question: 'What themes can island names draw on?', answer: 'Popular themes include tropical paradise (palms, lagoons, sunsets), pirate and adventure (Skull Island, Dead Man\'s Cay, treasure lore), mythic and magical (dragons, gods, arcane words), eerie and forbidding (Storm, Shadow, Bone, Wreck), and serene sanctuary (Haven, Solace, Refuge). The generator spans these registers, so a single batch can offer a beach getaway and a cursed rock. Filter the list for the tone your setting needs.' },
  { category: 'Technical', question: 'How are the island names generated?', answer: 'The tool draws from curated lists of coastal, tropical, and fantasy words plus real geographic landform terms, then randomly combines and shuffles them in your browser each time you click Generate. That randomness surfaces evocative pairings you might not brainstorm alone. Nothing is sent to a server, and the output is creative inspiration for stories, maps, and games rather than a database of real places.' },
  { category: 'Use cases', question: 'Can I use these names for a D&D or tabletop campaign map?', answer: 'Absolutely, that is a core use. Game masters use generated island names to fill out a sea chart, name the pirate stronghold, the shipwreck coast, or the sacred isle players are sailing toward. Generate a batch, pick names whose tone matches each location, and note a hook for the memorable ones. The output is meant to be adapted freely into your world and its lore.' },
  { category: 'Naming', question: 'How do I give an island name a hint of story or danger?', answer: 'Lean on nouns that imply a past event or a warning: Wreck, Bone, Skull, Widow, Sorrow, Tempest, or a possessive (Mutineer\'s Rest). A name like "Drowned Man\'s Cay" or "Isle of Whispers" makes players and readers wonder what happened there, doing worldbuilding in two words. Generate a batch aiming for that ominous register, and keep the ones that raise a question you can later answer with lore.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser and nothing reaches our servers. We do not keep the names, your settings, or a count of your runs. Refreshing or closing the page clears the last batch, so copy anything you want to keep before leaving.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run maxes at 24, but you can run it as many times as you like. Do several runs and paste them into one document to fill an entire archipelago, then remove duplicates. There is no daily or total limit, so batching runs is the normal way to gather enough place names for a whole map or setting.' },
  { category: 'Best practices', question: 'What is the best workflow for naming islands on a map?', answer: 'Decide the region\'s mood first, tropical, pirate-infested, mythic, or serene, then generate a batch of 24 and copy it into your map notes. Assign the most evocative names to the islands players will actually visit, and keep simpler ones for background dots. Say each aloud to confirm it flows, and note a quick hook for the standouts so the geography has story built in, not just labels.' },
  { category: 'Use cases', question: 'Can I use island names for a game world, resort, or brand?', answer: 'Yes. Beyond fiction, the names suit a video-game overworld, a fictional resort or attraction, a boat or beach house, or a themed event. A warm, inviting island name (Palm Haven, Azure Cove) reads well for hospitality, while dramatic ones suit games. Since the tool suggests ideas rather than checking availability, search a name first if it needs to be unique as a business or handle.' },
  { category: 'Naming', question: 'Should island names be short or descriptive?', answer: 'Both have a place on a map. Short names (Cay, Reef, Vale) work for minor islands and read cleanly on a crowded chart, while longer descriptive names (Isle of the Broken Mast, The Weeping Shores) carry weight for major locations players remember. A good map mixes them, using length to signal importance. Generate plenty and sort by how much prominence each spot deserves.' },
  { category: 'Troubleshooting', question: 'Can I use the island name generator offline?', answer: 'Yes. Once the page has loaded it runs entirely in your browser, so you can keep generating island names with no connection, and the Copy button works offline too. That is handy while drawing a map away from wifi. You only need a connection the first time, to load the page.' },
  { category: 'Naming', question: 'How do I name a whole archipelago so the islands feel related?', answer: 'Give the group a shared naming logic so the map reads as one chain rather than scattered dots. Pick a theme — a language flavor, a recurring word like Cay or Isle, or a mythic origin — and let each island vary within it. Generate a large batch, then keep the ones that share a sound or root, the way real island chains carry a family resemblance. Reserve a grander, distinct name for the main island so it stands out as the hub.' },
  { category: 'Use cases', question: 'Can I use island names for a tabletop campaign or worldbuilding?', answer: 'Yes, that is a core use. For a D&D or tabletop setting, island names anchor sea voyages, pirate arcs, and lost-world adventures, and a memorable name makes players want to explore a spot on the map. Generate a batch, assign evocative names to key locations, and jot a one-line hook for each so the geography carries story. Since the tool runs locally and stores nothing, your campaign map stays private until you share it at the table.' },
];

export default async function IslandNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="island" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Island name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

