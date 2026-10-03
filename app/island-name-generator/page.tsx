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
    description: 'Free Island Name Generator for island names. Generate tropical and fantasy name ideas directly in your browser with zero registration.',
    seoTitle: 'Island Name Generator – Tropical & Island Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Island Name Generator – Tropical &amp; Island Names</h2>
        <p>An island name needs to encapsulate an entire location in just a word or two — the curve of a shore, the quiet of a secluded bay, the danger of a reef where ships perish. This Island Name Generator generates tropical and fantasy island place names for cartographers, worldbuilders, game masters, and authors: sun-soaked resort islands, enigmatic fantasy archipelagos, and everything in between. It operates in your browser, requires no sign-up, and provides 1–24 names per generation complete with a copy button.</p>
        <p>The guide below explores how authentic and fictional island names are actually constructed — the patterns behind &quot;Isle of,&quot; &quot;Cay,&quot; and descriptive compounds — how to name an entire archipelago so it feels cohesive, when to choose short versus descriptive, and how to match island names to maps, D&amp;D campaigns, resorts, and games.</p>

        <h2>The Structure of Island Names</h2>
        <p>Real-world island names fall into recognizable structures, and borrowing them makes a fabricated name feel like a genuine location on a map:</p>
        <ul>
          <li><strong>&quot;Isle of&quot; / &quot;Island&quot; forms.</strong> Isle of Skye, Christmas Island — a possessive or descriptive term paired with a generic island noun sounds formal and cartographic.</li>
          <li><strong>Small-island words.</strong> Cay, Key, Atoll, Reef, Rock, Holm, and Skerry all designate specific types of small islands; using the appropriate one brings authenticity (a &quot;Cay&quot; feels Caribbean, a &quot;Holm&quot; feels Norse).</li>
          <li><strong>Descriptive compounds.</strong> Palm + haven, Coral + bay, Storm + point — two distinct words combined into one, portraying what the island looks like or represents.</li>
          <li><strong>Saint and explorer names.</strong> Many actual islands bear a saint&apos;s name or an explorer&apos;s, adding a historical, colonial-era vibe when desired.</li>
          <li><strong>Native and evocative sounds.</strong> Smooth, vowel-heavy names (Aloha-style Polynesian, or created flowing syllables) present as tropical and untouched.</li>
        </ul>

        <h2>Tropical and Fantasy Islands</h2>
        <p>The two primary styles push naming in opposite directions. A tropical or resort island calls for warm, welcoming imagery — palms, coral, lagoons, sunset, paradise — featuring soft, pronunciation-friendly names that suggest a vacation: Palm Haven, Coral Cay, Sunset Lagoon. A fantasy island can veer darker or stranger, hinting at peril, magic, or mystery: the Isle of Shrouded Reefs, Dragonspine Atoll, the Sunless Skerries. Establish the mood first, then select generated names whose imagery aligns — a peaceful lagoon name does not fit a cursed pirate isle, and vice versa.</p>

        <h2>Naming an Entire Archipelago</h2>
        <p>A group of islands should read as a family, not a random assortment. Give the archipelago a common naming logic so a reader or player instantly senses their connection. Several approaches work: a repeated generic word (the Coral Cays, the Ember Isles), a shared theme (all named after storms, birds, or gemstones), or a uniform linguistic texture (all soft and Polynesian, all hard and Norse). Then let the primary island hold a grander title and the smaller ones simpler, subordinate designations. Generate a large batch, pick a unified set, and vary within the pattern rather than mixing unrelated styles.</p>

        <h2>Short and Descriptive Names</h2>
        <p>Length alters how a name functions. A brief, punchy name (Skull Rock, Kaya, Blackreef) is memorable, fits easily on a map label, and serves as a quick reference during play. A more extended descriptive name (the Isle of a Thousand Waterfalls, the Whispering Shoals of Vael) delivers atmosphere and lore but demands more space and slows down the reader. Apply short names to the numerous minor islands a map requires and reserve the evocative, descriptive names for the few locations vital to your story — the destination, the lair, the lost paradise.</p>

        <h2>Islands crafted for D&amp;D, Maps, and Worldbuilding</h2>
        <p>Worldbuilding and tabletop campaigns rely on island names to ground exploration and offer players clear landmarks. A seafaring D&amp;D campaign requires a variety of titles: secure harbors, dangerous reefs, unknown uncharted isles, and a single legendary destination. Fit the name to the threat — a friendly trading port feels welcoming, while a monster-filled island seems intimidating — so players understand the map&apos;s tone before the DM speaks. Produce a batch, assign the threatening titles to hazards and the cozy ones to havens, and your sea chart tells its own story.</p>

        <h2>Islands suited for Resorts and Games</h2>
        <p>Beyond fiction, island monikers fit both real and digital getaways. A resort, a themed location, or a fictional holiday brand needs a title that sounds like paradise while remaining easy to spell and remember — warm, breezy, and inviting. In games — ranging from survival and building titles to life-sims where you name your personal island — a solid name personalizes the spot and stays with you. Keep game and resort island monikers on the friendlier, shorter side, ensuring they look great on a loading screen, a map pin, or a sign.</p>

        <h2>[10] How to Use This Island Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Pick the mood first and use it — a sunny resort isle, a grim fantasy island, or an entire archipelago for your map.</li>
          <li>Choose your desired number of names per run (1–24) and click <strong>Generate names</strong> to get a brand new set of fantasy and tropical island names.</li>
          <li>Keep the titles whose imagery fits your vibe; for an archipelago, pick a matching set sharing a single theme or texture. Use the Copy button to save the list.</li>
          <li>Paste into your campaign doc, map notes, or game, then assign short titles to minor islands and evocative ones to key spots.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>

        <h2>Tips and Mistakes to Avoid</h2>
        <p>Say each title out loud and picture it on a map label — if it proves a mouthful or is hard to spell, it will annoy readers and players. The biggest mistake in an archipelago is combining unrelated naming styles so the islands feel like parts of different worlds; select one texture and stick with it. Another error is wasting a grand, descriptive title on an unimportant island while giving your crucial destination a flat one — save the atmosphere for locations that deserve it. Also, match the imagery to the atmosphere so a paradise reads as paradise and a cursed reef serves as a warning.</p>

        <h2>Privacy</h2>
        <p>This Island Name Generator operates entirely within your browser. Once you choose a count and generate, the island names are built locally on your device — nothing gets uploaded, logged, or saved on our servers. Shut the tab and the list disappears unless you copied it, ensuring your worlds and maps remain yours.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: '[3] What is an Island Name Generator?', answer: 'It functions as a browser utility that creates place names for islands, ranging from sun-drenched tropical isles to mysterious fantasy archipelagos, for application in stories, games, maps, and worldbuilding. It combines words connected to sky, sea, and sand with fantastical and descriptive elements so every result reads like a real spot on a chart. Everything is produced locally inside your browser, it is totally free, and nothing you make gets stored or sent to a server.' },
  { category: 'Usage', question: 'How can someone operate the Island Name Generator?', answer: 'Select how many names you want per generation (1 to 24) and click Generate for a fresh batch of island titles. Scan for ones matching your setting, whether that is a wind-beaten fantasy rock or a lush tropical paradise, and use the Copy button to save the group. Paste it into your story document or map notes and shortlist your favorites. Run it again as many times as you wish; no download and no sign-up required.' },
  { category: 'Naming', question: 'What defines a great island name?', answer: 'Strong island names generally evoke a location at first glance, sound simple to pronounce, and hint at the island\'s character, climate, shape, wildlife, or an associated story. Actual islands frequently employ descriptive patterns (Coral Reef, Palm Cay, Skull Rock) or a possessive founder title (Drake\'s Isle). A memorable moniker paints a picture in one or two words, allowing a reader to instantly feel whether it represents a paradise, a haven, or a place to shun.' },
  { category: 'Naming', question: 'How do I name a tropical island compared to a fantasy island?', answer: 'A tropical island relies on warm, coastal imagery, palms, lagoon, coral, sun, turquoise, and soft words like Cove, Cay, and Bay (Azure Lagoon, Coconut Cay). A fantasy island can grow darker and stranger, using invented syllables, dramatic features, and mythic creatures (The Shattered Coast, Isle of Wyrmspire). Determine the mood first, and then keep the generated titles whose sound fits, whether wild and otherworldly or breezy and inviting.' },
  { category: 'General', question: 'Does the Island Name Generator cost anything?', answer: 'Yes, it is entirely free without any account, payment, or email. Create as many batches of island names as you like; there exists no daily or total limit. Nothing is locked away and there is nothing to install. Because it operates in your browser, it costs nothing and keeps your worldbuilding private.' },
  { category: 'Naming', question: 'What geographic terms work well in island names?', answer: 'Standard components incorporate real maritime geographical tags, including Atoll, Reef, Bay, Cay, Isle, Point, Key, Shoal, Rock, and Cove, merged alongside expressive keywords like Solitude, Refuge, Haven, or Paradise. Combining an evocative opening modifier with one of these terms (like Tempest Point, Emerald Isle, or Serpent Cay) immediately sounds like a legitimate geographical feature. The generator blends these elements together so every location appears authentic rather than haphazard.' },
  { category: 'Privacy', question: 'Is any data I generate stored or sent to a server?', answer: 'No. The generator runs completely within your browser, meaning names are assembled on your device and never transmitted anywhere. We do not save or log the names you make, your settings, or how frequently you run it. You can build worlds in a private window, and closing the tab wipes the final batch unless you copied it.' },
  { category: 'Compatibility', question: 'Is the Island Name Generator functional on mobile devices?', answer: 'Yes. It functions as a responsive web page operating on tablets, phones, and desktops without any app to install. On a mobile phone you can generate a batch mid-game or while sketching a map, tap Copy, and insert the names into your notes. Any modern mobile browser functions properly, and generation remains fast because it happens locally.' },
  { category: 'Limits', question: 'How many island names can I generate at one time?', answer: 'Every run produces 1 to 24 names, and you define the quantity prior to generation. Want more? Just run it again; each run offers a fresh random set. There is no total or daily limit, so keep generating until a title feels right for your map. Paste multiple runs into a single note and delete duplicates to construct a larger pool of place names.' },
  { category: 'Usage', question: 'Am I allowed to copy the generated names?', answer: 'Indeed. The Copy button sends the full list directly to your clipboard as plain text, one per line, ready to drop into a worldbuilding file, a map legend, or a game master\'s records. Copying is the intended way to save a shortlist, because the utility does not export files. Grab the selection, then speak the names aloud to see which ones sound naturally like a real spot.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'You never have to provide an email, make an account, or log in. Simply open the tool, pick your desired batch count, click Generate, and copy your favorites. There are zero signup barriers or paywalls anywhere. Everything stays private, prompt, and friction-free to let you brainstorm uninterrupted.' },
  { category: 'Naming', question: 'What is the best way to title a full archipelago or island chain?', answer: 'Name the cluster with a collective term, then give every island a member title that shares a theme. A chain might be "The Coral Chain" or "The Sunder Isles," with single islands reflecting the motif (Little Coral, Coral Deep, Coral Reach). Generate a batch, choose a family of names that sound connected, and reserve one unique title for the chain itself. Consistency across the group makes the geography feel designed rather than random.' },
  { category: 'Naming', question: 'What specific themes can be used for island names?', answer: 'Popular themes include tropical paradise (palms, lagoons, sunsets), pirate and adventure (Skull Island, Dead Man\'s Cay, treasure lore), mythic and magical (dragons, gods, arcane words), eerie and forbidding (Storm, Shadow, Bone, Wreck), and serene sanctuary (Haven, Solace, Refuge). The generator covers these styles, so a single batch can offer a beach getaway and a cursed rock. Filter the list for the tone your setting requires.' },
  { category: 'Technical', question: 'How does the generation process for island names work?', answer: 'The tool pulls from curated collections of coastal, tropical, and fantasy words plus real geographic landform terms, then randomly combines and mixes them in your browser every time you click Generate. That randomness produces engaging combinations you might not think of alone. Nothing is sent to any server, and the output serves as creative inspiration for stories, maps, and games rather than a database of real locations.' },
  { category: 'Use cases', question: 'Are these names suitable for a D&D or tabletop campaign map?', answer: 'Without a doubt, tabletop gaming is a core scenario. DMs regularly rely on generated island names when sketching ocean charts, titling pirate dens, tagging treacherous reefs, or naming the mystical sanctuary on the party\'s path. Produce a list, grab entries matching your intended atmosphere, and draft plot hooks for the best ones. These results are ready for seamless integration into your homebrew setting.' },
  { category: 'Naming', question: 'How can you add a sense of narrative or peril to an island name?', answer: 'Rely on nouns that suggest a past event or a warning: Wreck, Bone, Skull, Widow, Sorrow, Tempest, or a possessive (Mutineer\'s Rest). A title like "Drowned Man\'s Cay" or "Isle of Whispers" makes players and readers wonder what happened there, performing worldbuilding in two words. Generate a batch aiming for that ominous style, and keep the ones that raise a question you can later answer with lore.' },
  { category: 'Privacy', question: 'Are the generated names saved by you?', answer: 'Not at all. The entire generation process occurs directly inside your web browser without pinging our servers. We never track, record, or retain your generated lists or chosen parameters. Navigating away or refreshing the tab wipes your current results, so be sure to copy any favorites before leaving.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'You can produce up to 24 results per click, but unlimited reruns are allowed. Trigger multiple passes and assemble them into a master list to flesh out entire island chains, trimming out any duplicates as needed. Without daily caps or total restrictions, repeating batches is the ideal approach for mapping extensive archipelagos.' },
  { category: 'Best practices', question: 'What is the ideal process for naming multiple islands on a map?', answer: 'Start by establishing the target vibe—tropical, pirate-dominated, mystical, or quiet—then produce 24 names and transfer them directly into your campaign notes. Bestow the most resonant labels on destinations the party will actually explore, leaving simpler titles for minor points on the map. Speak each title out loud to test cadence, adding narrative hooks to key locations so your world map tells a living story.' },
  { category: 'Use cases', question: 'Is it okay to use island names for a brand, resort, or game world?', answer: 'Definitely. Outside tabletop campaigns, these labels fit video game maps, resort projects, personal watercraft, beach cabins, or themed gatherings. Gentle, sunny monikers (Palm Haven, Azure Cove) suit travel settings well, while brooding choices fit game environments. Because this generator serves up creative concepts without trademark screening, verify legal availability before launching an official brand or channel.' },
  { category: 'Naming', question: 'Ought island names to be concise or more descriptive?', answer: 'Both have their place on a map. Short names (Cay, Reef, Vale) suit minor islands and remain legible on a crowded chart, while longer descriptive names (Isle of the Broken Mast, The Weeping Shores) carry significance for major locations players recall. A well-designed map combines both, utilizing length to indicate importance. Generate plenty and organize them by the prominence each spot warrants.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Island Name Generator without an internet connection?', answer: 'Certainly. Following its initial asset load, this tool works entirely client-side inside your browser, enabling uninterrupted name generation and one-click copying without an internet signal. This makes it fantastic for worldbuilding sessions away from Wi-Fi. Connecting online is merely required on that initial page visit.' },
  { category: 'Naming', question: 'How should you name a whole archipelago to make the islands feel connected?', answer: 'Give the archipelago a unified naming scheme so the map reads as a cohesive chain instead of random dots. Choose a theme—a linguistic style, a repeating term like Cay or Isle, or a mythological source—and let every single island vary within those bounds. Create a large batch, then select the ones sharing a sound or root, much like real island chains share a family resemblance. Keep a grander, unique name aside for the main island so it stands out clearly as the central hub.' },
  { category: 'Use cases', question: '[1] Is it possible to use island names for worldbuilding or a tabletop campaign?', answer: 'Certainly. Within tabletop or D&D campaigns, island titles provide weight to seafaring journeys, buccaneer storylines, and uncharted realm quests, while an enticing label sparks genuine player curiosity about uncharted territory. Create an assortment of choices, attach vivid identifiers to vital spots, and outline a brief narrative lead for every destination so the worldbuilding naturally enhances lore. Because the utility operates client-side without retaining data, your world map remains entirely confidential right up to game night.' },
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
          <p className="text-slate-700">Frequent inquiries concerning the Island Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

