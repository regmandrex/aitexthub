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
        <h2>Island Name Generator – Tropical &amp; Island Names</h2>
        <p>
          An island name has to carry a whole place in a word or two — the sweep of a beach, the hush of a hidden cove, the menace of a reef no ship returns from. This island name generator builds tropical and fantasy island place names for mapmakers, worldbuilders, game masters, and writers: sun-drenched resort isles, mysterious fantasy archipelagos, and everything between. It runs in your browser, needs no sign-up, and gives you 1–24 names per run with a copy button.
        </p>
        <p>
          The guide below covers how real and fictional island names are actually built — the patterns behind &quot;Isle of,&quot; &quot;Cay,&quot; and descriptive compounds — how to name a whole archipelago so it hangs together, when to go short versus descriptive, and how to fit island names to maps, D&amp;D campaigns, resorts, and games.
        </p>

        <h2>How Island Names Are Built</h2>
        <p>
          Real-world island names cluster into recognizable structures, and borrowing them makes an invented name feel like a place on a chart:
        </p>
        <ul>
          <li><strong>&quot;Isle of&quot; / &quot;Island&quot; forms.</strong> Isle of Skye, Christmas Island — a possessive or descriptive word attached to a generic island word reads as formal and cartographic.</li>
          <li><strong>Small-island words.</strong> Cay, Key, Atoll, Reef, Rock, Holm, and Skerry all name specific kinds of small islands; using the right one adds authenticity (a &quot;Cay&quot; feels Caribbean, a &quot;Holm&quot; feels Norse).</li>
          <li><strong>Descriptive compounds.</strong> Palm + haven, Coral + bay, Storm + point — two concrete words fused into one, describing what the island looks like or does.</li>
          <li><strong>Saint and explorer names.</strong> Many real islands carry a saint&apos;s name or a discoverer&apos;s, lending a historical, colonial-era flavor when you want it.</li>
          <li><strong>Native and evocative sounds.</strong> Soft, vowel-rich names (Aloha-style Polynesian, or invented flowing syllables) read as tropical and untouched.</li>
        </ul>

        <h2>Tropical vs. Fantasy Islands</h2>
        <p>
          The two big flavors pull naming in different directions. A tropical or resort island wants warm, inviting imagery — palms, coral, lagoons, sunset, paradise — with soft, easy-to-say names that promise a holiday: Palm Haven, Coral Cay, Sunset Lagoon. A fantasy island can go darker or stranger, promising danger, magic, or mystery: the Isle of Shrouded Reefs, Dragonspine Atoll, the Sunless Skerries. Decide the mood first, then keep the generated names whose imagery matches — a serene lagoon name is wrong for a cursed pirate isle, and vice versa.
        </p>

        <h2>Naming a Whole Archipelago</h2>
        <p>
          A cluster of islands should read as a family, not a random pile. Give the archipelago a shared naming logic so a reader or player immediately senses they belong together. There are a few ways to do it: a repeated generic word (the Coral Cays, the Ember Isles), a shared theme (all named for storms, all for birds, all for gemstones), or a common linguistic texture (all soft and Polynesian, all hard and Norse). Then let the main island carry a grander name and the smaller ones simpler, subordinate ones. Generate a large batch, pick a cohesive set, and vary within the pattern rather than across unrelated styles.
        </p>

        <h2>Short vs. Descriptive Names</h2>
        <p>
          Length changes how a name works. A short, punchy name (Skull Rock, Kaya, Blackreef) is memorable, fits neatly on a map label, and works as a quick reference in play. A longer descriptive name (the Isle of a Thousand Waterfalls, the Whispering Shoals of Vael) carries atmosphere and legend but takes more room and slows a reader down. Use short names for the many minor islands a map needs and save the evocative, descriptive names for the handful of places that matter to your story — the destination, the lair, the lost paradise.
        </p>

        <h2>Islands for D&amp;D, Maps, and Worldbuilding</h2>
        <p>
          For tabletop campaigns and worldbuilding, island names anchor exploration and give players landmarks to steer by. A seafaring D&amp;D adventure needs a spread of names: safe harbors, hostile reefs, mysterious uncharted isles, and one legendary destination. Match the name to the danger — a friendly trading port sounds welcoming, a monster-haunted island sounds forbidding — so players read the map&apos;s tone before the DM says a word. Generate a batch, assign the ominous names to hazards and the warm ones to havens, and your sea chart tells its own story.
        </p>

        <h2>Islands for Resorts and Games</h2>
        <p>
          Beyond fiction, island names suit real and virtual getaways. A resort, a themed venue, or a fictional holiday brand wants a name that sounds like paradise and is easy to remember and spell — warm, breezy, and inviting. In games — from survival and building titles to life-sims where you name your own island — a good name personalizes the place and sticks with you. Keep resort and game island names on the shorter, friendlier end, and check that they read well on a sign, a loading screen, or a map pin.
        </p>

        <h2>How to Use This Island Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide the mood and use first — sunny resort isle, ominous fantasy island, or a whole archipelago for a map.</li>
          <li>Set how many names you want per run (1–24) and click <strong>Generate names</strong> for a fresh batch of tropical and fantasy island names.</li>
          <li>Keep the names whose imagery matches your mood; for an archipelago, choose a cohesive set that shares a theme or texture. Use the Copy button to save the list.</li>
          <li>Paste into your map notes, campaign doc, or game and assign short names to minor islands and evocative ones to key locations.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Tips and Common Mistakes</h2>
        <p>
          Say each name aloud and picture it on a map label — if it is a mouthful or hard to spell, it will frustrate players and readers. The most common mistake in an archipelago is mixing unrelated naming styles so the islands feel like they belong to different worlds; pick one texture and stay in it. Another is spending a grand, descriptive name on a throwaway island and leaving your important destination with a flat one — reserve the atmosphere for the places that earn it. And match the imagery to the mood, so a paradise reads as paradise and a cursed reef reads as a warning.
        </p>

        <h2>Privacy</h2>
        <p>
          This island name generator runs entirely in your browser. When you set a count and generate, the island names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your maps and worlds stay yours.
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

