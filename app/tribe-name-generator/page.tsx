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


const toolSlug = 'tribe-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Tribe Name Generator',
    description: 'Free tribe name generator for tribe and clan names. Create tribe-style name ideas in your browser with no sign-up.',
    seoTitle: 'Tribe Name Generator – Tribe & Clan Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Tribe Name Generator – Tribe &amp; Clan Names</h2>
        <p>
          A tribe name is the banner a whole people rally under. It has to sound older than any one member, carry a hint of the land they come from, and stay easy to shout across a battlefield or a campfire. This tribe name generator builds tribe and clan names in that spirit — drawing on nature, ancestor, totem, and territory motifs — so you land on something that reads like a genuine people rather than a random pair of words. It runs entirely in your browser, needs no sign-up, and gives you 1–24 names per run with a one-click copy button.
        </p>
        <p>
          Whether you are naming a tribe in a survival game like ARK, founding a clan for tribal role-play, inventing a people for a fantasy world, or building a Discord guild, the guide below explains the real patterns behind tribal names — how actual tribes are named, how fantasy and historical naming differ, and how clan structure shapes what a name should say. Learn the conventions, and the name you pick will feel earned.
        </p>

        <h2>How Real Tribes Are Named</h2>
        <p>
          Across cultures, tribal names are rarely arbitrary. They cluster into a handful of recognizable sources, and understanding them is the fastest way to make an invented name feel authentic:
        </p>
        <ul>
          <li><strong>Nature and landscape.</strong> Many peoples take their name from the terrain they live in or the animals around them — the river folk, the people of the tall grass, the mountain dwellers. Wolf, raven, bear, ash, stone, and river recur worldwide because a tribe&apos;s environment defines it.</li>
          <li><strong>Ancestor or founder.</strong> A tribe is often &quot;the children of&quot; or &quot;the house of&quot; a founding figure. This gives a lineage feel — the sons of a legendary chief, the blood of an old hero.</li>
          <li><strong>Totem animal or spirit.</strong> A sacred animal or guardian spirit becomes the group&apos;s emblem and its name at once: the Eagle clan, the Serpent people, those who follow the Great Elk.</li>
          <li><strong>Territory or direction.</strong> Names anchored to a place or a compass point — the northern people, those of the high hollow, the coast dwellers — read as claims on the land.</li>
          <li><strong>The endonym twist.</strong> Many real tribal names simply mean &quot;the people&quot; or &quot;the true humans&quot; in their own language. A tribe often names itself from the inside, not the way outsiders label it.</li>
        </ul>

        <h2>Naming Themes: Nature, Blood, Totem, and Land</h2>
        <p>
          When you review a generated batch, sort the names by their underlying theme. A nature theme (Ashfen, Stormridge, Frostwood) feels primal and grounded. A blood or ancestor theme (Kinborn, the Halvar line) feels dynastic. A totem theme (Ravenkind, the Elk-Sworn) feels spiritual. A territory theme (Highhollow, Coastwatch) feels defensive and rooted. Picking one dominant theme and letting the name lean into it is what keeps a tribe coherent instead of scattered.
        </p>
        <p>
          The sound of the name should match its theme. Hard consonants and short vowels — Grak, Thorn, Bask — suit a warlike raiding tribe. Flowing, open sounds — Aelora, Suminae, Willowmere — suit a peaceful, nomadic, or spiritual people. Read each candidate aloud and keep the ones whose rhythm matches the personality you have in mind.
        </p>

        <h2>Fantasy Tribes vs. Historical Tribes</h2>
        <p>
          The two big use cases pull the naming in different directions. A historical or grounded tribe wants names that could plausibly be a real people: earthy, descriptive, tied to terrain and kinship, without obvious magic. Think of names that could sit beside real-world peoples on a map without looking invented.
        </p>
        <p>
          A fantasy tribe can reach further — invoking elements, celestial bodies, or the supernatural. Frostmane, the Emberborn, the Moon-Sworn, and Duskfang all read as fantasy because they promise something beyond the ordinary. If your world has magic, tie the name to it: a tribe that reveres the moon, walks with spirits, or was born of fire tells the reader its whole cosmology in one word. Decide which register you want before you generate, then keep only the names that stay inside it.
        </p>

        <h2>Clan Structure and What the Name Should Signal</h2>
        <p>
          Tribes and clans are not the same size, and the name can hint at the scale. A tribe is usually a larger people made of several clans or families; a clan is a tighter kin-group inside it. If you are naming the whole tribe, favor a broad, land- or ancestor-based name that many families could belong to. If you are naming a single clan within it, a narrower totem or trait name works — the Ironhand clan, the Ash-Wolves — because it distinguishes them from their cousins.
        </p>
        <p>
          A well-built name also implies a structure. &quot;The Stonewatch&quot; suggests guardians and a stronghold; &quot;the Free Reavers&quot; suggests raiders with loose leadership; &quot;the Elk-Sworn&quot; suggests an oath-bound order with a shaman or spirit-guide. Let the name you pick imply the ranks, roles, and customs of the people who carry it.
        </p>

        <h2>Naming Your Tribe in Survival Games (ARK and Beyond)</h2>
        <p>
          In tribe-based survival games like ARK, the name is your group&apos;s public identity in the server&apos;s tribe log, on structures, and in every raid report. It should read as a threat or a reputation at a glance. A PvP raiding tribe wants something intimidating and blunt — Bloodfang, the Wasteland Reavers — that looks strong when it shows up in an enemy&apos;s notifications. A builder, breeder, or PvE tribe can lean on dynasty or nature themes that signal permanence rather than aggression.
        </p>
        <p>
          Generate a batch, keep the names that would look strong in a tribe log, and check whether your specific game or server blocks duplicate tribe names before you commit. Many do, so a shortlist of backups saves you from scrambling at the creation screen.
        </p>

        <h2>Naming Tribes for Worldbuilding and Fiction</h2>
        <p>
          In a story or a tabletop campaign, a tribe&apos;s name does a lot of characterization for free. Tie it to the environment and culture: a desert people, a forest-dwelling clan, and a mountain warrior tribe should all sound different because their worlds are different. When you have rival tribes, deliberately give them contrasting names and sounds — a harsh, consonant-heavy warrior tribe against a flowing, mystic one — so readers or players can feel the tension between factions at a glance and never confuse them.
        </p>
        <p>
          For a large world, give related tribes a shared naming logic — a recurring root, a common suffix, a regional flavor — so they read as branches of one culture, while enemies from a different region sound audibly foreign. That contrast is how invented peoples come alive on the page.
        </p>

        <h2>How to Use This Tribe Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide your tribe&apos;s theme and tone first — fierce raiders, forest nomads, mountain guardians, or spirit-worshippers.</li>
          <li>Set how many names you want per run (1–24) and click <strong>Generate names</strong> for a fresh batch of tribe and clan names.</li>
          <li>Skim for the ones that stay on your chosen theme and read as a strong banner, then use the Copy button to save the whole list.</li>
          <li>Paste into your notes, worldbuilding doc, or your game&apos;s tribe-creation screen and shortlist five to ten favorites.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Tips and Common Mistakes</h2>
        <p>
          Keep a tribe name easy to say and spell, because it gets shouted in voice chat and typed at a creation screen. Match the tone to the group — a menacing name on a casual friend tribe only lands if the joke is intentional. Avoid copying a famous tribe or clan from a well-known game or franchise; it reads as unoriginal and may be blocked as a duplicate. The most common mistake is mixing themes at random so the name says nothing coherent — pick one dominant motif and let the whole name serve it.
        </p>

        <h2>Privacy</h2>
        <p>
          This tribe name generator runs entirely in your browser. When you set a count and generate, the tribe and clan names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your tribe ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Tribe name generator?', answer: 'It is a browser tool that creates bold, memorable tribe and clan names for survival games, fantasy worldbuilding, and fiction. Players naming their tribe in games like ARK, groups founding a clan, and writers inventing tribes for a story all use it. The generator combines curated tribe-style word pieces — primal, nature, and warlike elements — at random in your browser and gives you 1–24 names per run. It runs locally with no sign-up, so you can brainstorm a big pool fast.' },
  { category: 'Usage', question: 'How do I use the Tribe name generator?', answer: 'Set how many names you want (1–24) and click Generate to get a fresh batch of tribe and clan names. Skim for the ones that fit the vibe you want — fierce, nature-bound, mystic — then use the Copy button to save the whole list. Paste it into a notes app, your game\'s tribe-creation screen, or your worldbuilding doc and shortlist your favorites. Run again as often as you like for more options; no account or download is required.' },
  { category: 'Naming', question: 'What makes a strong tribe name?', answer: 'A strong tribe name is bold, easy to say, and signals the group\'s identity at a glance — its territory, its element, or its attitude. It should sound like a banner people rally under, not a random pair of words. Nature imagery (wolf, ash, storm, stone), a shared totem or color, and a hard, confident rhythm all help. When you review a batch, keep the names that are punchy, distinct, and instantly evoke the kind of tribe you are building.' },
  { category: 'Use cases', question: 'How do I name my tribe in a survival game like ARK?', answer: 'In tribe-based survival games, the name is your group\'s identity to allies and enemies alike, so pick something intimidating or memorable that fits your playstyle. A PvP raiding tribe wants a name that reads as a threat; a builder or breeding tribe can lean on nature or dynasty themes. Generate a batch, keep the ones that would look strong in a server\'s tribe log, and check whether your game or server blocks duplicate tribe names before you lock one in.' },
  { category: 'Naming', question: 'How do I name a tribe for a fantasy story or worldbuilding?', answer: 'Tie the name to the tribe\'s environment and culture so it does a lot of characterization for free. A desert people, a forest-dwelling clan, and a mountain warrior tribe should all sound different — draw on their terrain, totem animal, or belief system. Generate a batch, then assign contrasting names to rival tribes so readers can tell your groups apart. Hard consonants suit a feared warrior tribe; softer, flowing sounds suit a spiritual or nomadic one.' },
  { category: 'Naming', question: 'What themes work best for tribe names?', answer: 'The most reliable themes are nature and the primal: predators (wolf, raven, serpent), elements (fire, storm, frost, ash), landforms (stone, ridge, hollow), and celestial or mystic ideas (moon, ember, spirit). These read as timeless and tribal rather than modern. Pick a theme that matches your group\'s environment or ethos first, then generate a batch and keep the names that stay inside that theme so the identity feels coherent rather than scattered.' },
  { category: 'Use cases', question: 'How do I name a competitive clan or team?', answer: 'For a competitive clan, favor sharp, confident names that look strong on a leaderboard or roster and shorten cleanly into a tag. Generate a batch, keep the punchy options, and test whether each abbreviates into a clean two-to-four-letter tag your members can wear. Match the tone to how you actually play — an elite, menacing name suits a serious team, while a lighter one fits a casual group as long as the tone is intentional.' },
  { category: 'Best practices', question: 'How do I build an identity around my tribe name?', answer: 'A name is the start; a tribe people want to belong to has a whole identity. Once you pick a name, build the rest: a symbol or totem, a color or banner, a motto, and roles or ranks. A name like "Ashfang" suggests dark colors and a predatory crest; "Stonewatch" suggests a fortress and guardian ranks. Let the generated name point the way, and your tribe gains a culture members can rally behind rather than just a label.' },
  { category: 'Naming', question: 'How do I make rival tribes sound different?', answer: 'Give each tribe a distinct theme and rhythm so they never blur together. Pair a harsh, consonant-heavy warrior tribe against a flowing, mystic one, or a fire-themed clan against a frost-themed one. Generate a batch, lay the strongest candidates side by side, and deliberately assign contrasting names to opposing groups. That contrast lets your audience — readers or fellow players — feel the tension between the factions at a glance.' },
  { category: 'Naming', question: 'What common mistakes should I avoid with tribe names?', answer: 'Avoid names that are hard to say or spell, since a tribe name gets shouted in voice chat and typed in game. Avoid a tone that fights the group — a menacing name on a casual friend tribe only works if the joke is intentional. Avoid copying a famous tribe or clan, which reads as unoriginal and may be blocked as a duplicate. Favor the punchy, on-theme, distinctive options and drop anything generic.' },
  { category: 'General', question: 'Is the Tribe name generator free?', answer: 'Yes, it is completely free to use in your browser with no account, no payment, and no download. You can generate tribe and clan names as often as you like, and there is no daily or total limit on runs. Everything happens locally on your device, so there is nothing to sign up for — open the page, set a count, and start brainstorming names right away.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I generate names?', answer: 'No. When you set a count and click generate, the names are created locally on your device inside your browser. Your settings and the generated list are never uploaded to our servers, and nothing is logged or stored. Your tribe ideas stay private until you decide to use one. You can even run the tool in a private or incognito window if you prefer.' },
  { category: 'Compatibility', question: 'Does the generator work on mobile?', answer: 'Yes. The tool runs in any modern web browser and is responsive on desktop, tablet, and phone, with no app to install. If you play on console or mobile, you can generate a batch on your phone and copy it straight into notes or into your game\'s tribe-creation screen. It works anywhere you can open a browser tab.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool, just run it again — each run produces a fresh random batch, and there is no daily or total cap. Paste several runs into one document and remove any duplicates. The 24-name limit keeps each list easy to skim while still giving you plenty of tribe and clan options to shortlist.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button puts the whole list on your clipboard as plain text, one name per line, so it pastes cleanly into any notes app, document, or game field. Copying is the intended way to save a batch before you shortlist. Grab a big list, drop it into your notes, and mark the names that fit your tribe\'s theme so you can compare them side by side.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No. The generator works with no sign-up, login, email, or registration. It runs entirely in your browser — open the page, choose how many names you want, click generate, and copy the results. There is nothing to create or verify here. Naming your actual tribe in a game is a separate step inside that game, not on this tool.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated primal, nature, and warlike word pieces, then randomly combines them in your browser so each run is different. The pieces are chosen to sound bold, timeless, and tribal. Nothing is sent to a server, and the output is inspiration only — it is not an official list and does not check any game for availability. Read a few aloud and you will hear the confident, rally-worthy cadence they are tuned for.' },
  { category: 'General', question: 'Are the generated tribe names unique?', answer: 'The names are randomly combined from curated word pieces, so each run produces new combinations, but the tool does not check any game or server for what is already in use. Popular tribe names are often taken, so verify yourself before committing. Keeping a shortlist of five to ten names gives you backups if your first choice is gone — which matters in games that block duplicate tribe names outright.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a tribe?', answer: 'Decide your tribe\'s theme and tone first — fierce raiders, forest nomads, mountain guardians — then generate a batch of 12 to 24 names and copy it into notes. Keep the ones that stay on theme and read as a strong banner, test any that need to shorten into a tag, and check availability if your game blocks duplicates. Shortlist five to ten so an early collision does not send you back to the start.' },
  { category: 'Use cases', question: 'Can I use these names for a group of friends or a Discord clan?', answer: 'Yes. For a friend group, guild, or Discord clan, a tribe name gives everyone something to rally under. Favor a name that fits your group\'s inside vibe — proud, playful, or menacing — and keep it easy to say and shorten. Generate a batch, pick the one that makes the group nod, and build a small identity around it with a color, an emoji, or a tag so it sticks.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, generating and copying names both work entirely offline in your browser with no network connection needed. You only need a connection to open the page the first time. That makes it easy to brainstorm tribe names on the go — generate, copy into a local notes file, and refine your list wherever you are, even without internet.' },
  { category: 'Naming', question: 'Should a tribe name be short?', answer: 'Shorter names are easier to say, remember, and shout, and they shorten more cleanly into a tag for a clan or team. That said, a slightly longer name can carry more atmosphere for a fictional tribe, like a phrase that reads as an ancient title. Balance the two: generate a mix, favor punchy names for competitive use, and save the longer, more evocative options for storytelling where flavor matters more than speed.' },
  { category: 'General', question: 'Does this tool design my tribe for me?', answer: 'No. The generator only produces name ideas — it does not build your tribe\'s symbol, ranks, or backstory. Pair a generated name with your own concept: decide your tribe\'s environment, ethos, and identity, then choose the name whose sound fits. Think of it as a fast idea machine for the name specifically, leaving the culture and worldbuilding around it in your hands to develop.' },
];

export default async function TribeNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="tribe" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Tribe name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

