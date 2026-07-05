import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { TransformersNameGeneratorTool } from '@/components/tools/TransformersNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'transformers-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Transformers Name Generator';
  const description = 'Free Transformers name generator for Autobot, Decepticon, and Beast Wars OCs. Build Cybertronian names tied to an alt-mode or trait, with Prime titles and -tron suffixes — in your browser, no sign-up.';
  const seoTitle = 'Transformers Name Generator – Autobot, Decepticon & Cybertronian OC Names';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Transformers Name Generator – Autobot, Decepticon &amp; Cybertronian OC Names</h2>
        <p>
          This Transformers name generator builds Cybertronian names the way the franchise does: a single bold noun or compound that telegraphs what a bot turns into or what it does. Optimus Prime leads, Megatron conquers, Soundwave listens, Starscream schemes, Bumblebee scouts, Shockwave calculates, Ironhide endures. Every name is a job description in disguise. Whether you are designing an Autobot for a fan comic, a Decepticon flier for a role-play server, or a Beast Wars-era predator with an animal alt-mode, the tool produces ready-to-use names in your browser. There is no sign-up, nothing is stored, and you can spin up as many batches as a war for Cybertron demands.
        </p>
        <p>
          Transformer names are not random. They follow a tight logic: the sound should match the alt-mode and the temperament. A heavy ground-pounder reads with hard, blunt syllables; a jet reads with a hiss and a streak of menace; a Prime reads with weight and a title. This page explains those conventions so the names you keep actually sound Cybertronian — and so an OC you create can stand on a battlefield beside canon characters without sounding out of place.
        </p>

        <h2>How Cybertronian Names Are Built</h2>
        <p>
          From the 1984 cartoon onward, the writers named bots after function, alt-mode, and attitude. Learn the pattern and your generated names stop sounding made-up and start sounding canon:
        </p>
        <ul>
          <li><strong>Name as function.</strong> Soundwave is a spy who records and replays; Shockwave is a cold logician; Wheeljack is an inventor on wheels; Ratchet is a medic. The name announces the role before the bot transforms.</li>
          <li><strong>Name as alt-mode.</strong> Bumblebee is small and yellow like the VW Beetle he becomes; Optimus Prime is a long-haul truck; Starscream and Skywarp are jets; Ravage is a panther. Tie the name to what the bot turns into and it instantly reads right.</li>
          <li><strong>Compound nouns.</strong> Iron + hide, Sound + wave, Star + scream, Shock + wave, Wind + charger, Thunder + cracker. Two strong words slammed together is the single most reliable Transformers naming move.</li>
          <li><strong>Trait words.</strong> Ravage, Rampage, Mixmaster, Brawl, Onslaught — verbs and aggressive nouns work especially well for Decepticons, whose names tend to threaten rather than describe.</li>
        </ul>

        <h2>Autobot Names vs Decepticon Names</h2>
        <p>
          The faction split is the most important naming decision you make. An Autobot and a Decepticon should sound different even before you read their bios, because the franchise codes heroism and villainy into the syllables:
        </p>
        <ul>
          <li><strong>Autobots</strong> lean on ground vehicles, protection, and dependability. Their names sound sturdy and earnest: Ironhide, Trailbreaker, Hound, Jazz, Prowl, Bumblebee, Wheeljack, Hot Rod. Car and truck alt-modes dominate, and the tone is rugged or heroic rather than cruel.</li>
          <li><strong>Decepticons</strong> lean on jets, weapons, and predators. Their names hiss, threaten, or boast: Megatron, Starscream, Skywarp, Thundercracker, Shockwave, Soundwave, Blitzwing, Devastator. Aircraft and gun alt-modes dominate, and the tone is menacing or arrogant.</li>
          <li><strong>The sound test.</strong> Say the name aloud. If it sounds like something you would trust to pull you out of a wreck, it is an Autobot. If it sounds like something diving out of the sun with cannons live, it is a Decepticon. Generate a batch and sort each result into a faction by ear.</li>
        </ul>
        <p>
          When you build an original character, pick the faction first, then keep only the names whose sound fits. A noble Autobot named like a jet-fighter or a Decepticon named like a kindly medic will read as a mistake — unless the mismatch is the point of your story.
        </p>

        <h2>The &quot;Prime&quot; Title and Rank Names</h2>
        <p>
          &quot;Prime&quot; is not a surname — it is a rank, carried by the bearer of the Matrix of Leadership: Optimus Prime, Sentinel Prime, Rodimus Prime, Nova Prime. Treat it like a crown, not a family name. If your OC is a faction leader or a chosen successor, appending &quot;Prime&quot; signals that weight instantly; if they are a rank-and-file soldier, leave it off so the title keeps its meaning. The Decepticon mirror is the self-anointed title — Megatron eventually becomes Galvatron, and lieutenants jockey for command rather than inherit it. Use rank words (Magnus, as in Ultra Magnus; Maximus; Prime) sparingly and only when the character has earned the gravity they carry.
        </p>

        <h2>Suffixes: -tron, -us, and the Cybertronian Sound</h2>
        <p>
          A handful of endings instantly read as &quot;robot from Cybertron.&quot; The most famous is <strong>-tron</strong> (Megatron, Galvatron, Cybertron itself, Metroplex-adjacent coinages), which lends a mechanical, imposing finish — strong for leaders and heavy units. The <strong>-us</strong> ending (Optimus, Nemesis Prime, Tarantulas) carries a faux-Latin, almost classical authority that suits Primes and ancient bots. Other reliable Cybertronian sounds include hard one-syllable verbs (Blast, Crash, Smash, Ravage), weather and energy words (Thunder, Storm, Blitz, Surge, Energon-rooted coinages), and metal or machine words (Iron, Steel, Gear, Cog, Forge). The generator mixes these so each run yields names that sit in the franchise&apos;s sound-world rather than drifting into generic sci-fi.
        </p>

        <h2>Beast Wars: Naming Animal Alt-Modes</h2>
        <p>
          Beast Wars swapped vehicles for organic alt-modes, and the naming shifted with it. Maximals and Predacons are named for the animals they become, usually as a compound or a punning twist: Cheetor (cheetah), Rattrap (rat), Rhinox (rhino), Tigatron (tiger + -tron), Dinobot (dinosaur), Terrorsaur, Tarantulas, Waspinator, Blackarachnia. If your OC has a beast mode, name it for the creature and bend the spelling toward Cybertron — add a -tron, a -saur, or an -inator, or fuse the animal with a trait (Razorbeak, Stinglash, Manterror). This keeps a Beast Wars character distinct from a vehicle-based Generation 1 bot while still sounding unmistakably Transformers. Maximals descend from Autobots and lean heroic; Predacons descend from Decepticons and lean predatory — the faction tone-coding survives the jump to animals.
        </p>

        <h2>Building an Original Transformer (OC)</h2>
        <p>
          For fan fiction, comics, and role-play, the name is the first thing readers judge. A strong Transformers OC name does three jobs at once: it declares a faction (Autobot or Decepticon, Maximal or Predacon), it hints at the alt-mode or signature ability, and it carries the right tone for the bot&apos;s personality. Generate a batch, then ask of each name: could it appear in a roll-call beside Optimus, Megatron, or Dinobot without anyone blinking? If yes, it is in the right register.
        </p>
        <p>
          A common approach is to lock the alt-mode first — say, a search-and-rescue helicopter or an armored excavator — and let the name grow from it (Skylift, Quarrybreaker). Then layer in a trait word for color: a reckless flier might become Recklash, a stoic guardian might become Stonewatch. If your OC is meant to join a combiner team (like the Constructicons forming Devastator), keep the component names thematically linked so they read as a set.
        </p>

        <h2>How to Use This Transformers Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of Cybertronian-style names.</li>
          <li>Skim for names that fit your chosen faction and alt-mode, then use the Copy button to save the whole list.</li>
          <li>Paste into your story notes, character sheet, or comic bible and shortlist your favorites.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your OC roster stays private until you choose to share it.
        </p>

        <h2>Tips for Picking the Right Name</h2>
        <p>
          Say the name out loud and listen for the faction. Autobot names should land sturdy and trustworthy; Decepticon names should land sharp and threatening. Match the name to the alt-mode — a tank should not be called Skydart, and a jet should not be called Bulldozer, unless you want the irony. Avoid accidentally reusing a canon full name (you do not want an OC literally called Optimus Prime), but borrowing the franchise&apos;s building blocks — a -tron suffix, an Iron- or Star- prefix, a weather word — is exactly how the real names were made, so lean into them.
        </p>
        <p>
          If you are naming a whole squad, generate a batch and pick names that contrast within a shared theme — the way the Aerialbots all evoke flight (Silverbolt, Air Raid, Skydive, Slingshot, Fireflight) while each one is distinct. That shared-theme-with-variation is exactly what makes a combiner team or a strike force feel like a unit rather than a pile of unrelated bots.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Transformers-style Autobot, Decepticon, and Beast Wars names for OCs, fan fiction, comics, and role-play.</li>
          <li>It does not reproduce the official cast as a lookup database — output is original, Cybertronian-flavored material for your own use.</li>
          <li>It does not store your generated roster or settings; everything runs locally in your browser.</li>
          <li>It does not check whether a name is taken on any game, forum, or social platform — verify that yourself if you plan to use a name as a handle.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Transformers is one of the most-named fandoms online — fan-comic artists, fic writers, stop-motion builders, and players of titles like War for Cybertron, Fall of Cybertron, and Transformers: Devastation all need names that fit. This Transformers name generator gives you that pool instantly, grounded in the franchise&apos;s real naming logic: function-as-name, alt-mode coding, the Autobot/Decepticon sound split, the Prime title, the -tron and -us suffixes, and the Beast Wars animal twist. Generate a batch, lean on the faction and alt-mode notes above, and you will end up with Cybertronian names that feel like they rolled off the assembly lines of Iacon — or out of the smelting pits of Kaon. For more naming and text tools, see our <Link href="/">homepage</Link>.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Transformers name generator?', answer: 'A Transformers name generator is a browser tool that creates Cybertronian-style names in the spirit of the franchise — bold nouns and compounds that reflect a bot\'s alt-mode or trait, the way Optimus Prime, Megatron, Soundwave, and Bumblebee do. It follows the real naming logic (function-as-name, alt-mode coding, the Autobot/Decepticon sound split, -tron and -us suffixes) so the results fit OCs, fan fiction, comics, and role-play. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'How are real Transformers names structured?', answer: 'Most are a single strong noun or a compound of two words that announce what the bot does or what it turns into. Iron + hide, Sound + wave, Star + scream, Shock + wave. The name doubles as a job title: Soundwave records and replays, Wheeljack invents, Ratchet repairs. Tie the sound to the alt-mode and the temperament and you have a name that reads canon rather than random.' },
  { category: 'Naming style', question: 'Do Transformers names mean something?', answer: 'Almost always. The writers named bots after function, alt-mode, and attitude. Bumblebee is small and yellow like his Beetle alt-mode; Starscream is a screaming jet; Ravage is a panther that ravages; Shockwave is a cold, calculating energy weapon. Picking a name whose meaning matches your OC\'s vehicle mode and personality is what makes it feel Cybertronian.' },
  { category: 'Factions', question: 'What is the difference between Autobot and Decepticon names?', answer: 'Autobot names lean on ground vehicles, protection, and dependability — Ironhide, Prowl, Hound, Jazz, Wheeljack — and sound sturdy or heroic. Decepticon names lean on jets, weapons, and predators — Megatron, Starscream, Skywarp, Blitzwing, Devastator — and sound menacing or boastful. Pick the faction first, say each generated name aloud, and keep only the ones whose tone matches.' },
  { category: 'Factions', question: 'How do I make a name sound like an Autobot?', answer: 'Anchor it to a ground vehicle or a protective trait and keep the tone earnest and rugged. Use car, truck, and rescue alt-modes and words like iron, trail, guard, bolt, and prowl. Names like Trailbreaker, Stonewatch, or Skylift read heroic. Avoid jet-and-cannon menace unless your Autobot is a former Decepticon or a deliberate outlier.' },
  { category: 'Factions', question: 'How do I make a name sound like a Decepticon?', answer: 'Reach for jets, weapons, and predators, and let the name threaten. Aggressive verbs and nouns work well — Ravage, Rampage, Onslaught, Blitzwing — as do hiss-heavy syllables and a -tron suffix for leaders (Megatron, Galvatron). A Decepticon name should sound like something diving out of the sun with weapons live, not something you would trust to fix you.' },
  { category: 'Titles', question: 'What does the "Prime" title mean and when should I use it?', answer: 'Prime is a rank, not a surname — it marks the bearer of the Matrix of Leadership (Optimus Prime, Sentinel Prime, Rodimus Prime). Treat it like a crown. Give your OC the Prime title only if they lead a faction or are a chosen successor; on a rank-and-file soldier it dilutes the meaning. The same restraint applies to rank words like Magnus (Ultra Magnus) and Maximus.' },
  { category: 'Naming style', question: 'What do the -tron and -us suffixes do?', answer: 'They instantly signal "robot from Cybertron." The -tron ending (Megatron, Galvatron, Cybertron) is mechanical and imposing, great for leaders and heavy units. The -us ending (Optimus, Tarantulas) carries a faux-Latin, classical authority that suits Primes and ancient bots. The generator mixes these endings with metal, weather, and energy words so each run lands inside the franchise\'s sound-world.' },
  { category: 'Beast Wars', question: 'How do I name a Beast Wars character with an animal alt-mode?', answer: 'Name it for the creature and bend the spelling toward Cybertron: add a -tron (Tigatron), a -saur (Dinobot, Terrorsaur), or an -inator (Waspinator), or fuse the animal with a trait (Razorbeak, Stinglash). Maximals descend from Autobots and lean heroic; Predacons descend from Decepticons and lean predatory, so the faction tone-coding carries over from vehicles to animals.' },
  { category: 'OC', question: 'How do I name an original Transformer (OC)?', answer: 'A strong OC name does three things: declares a faction, hints at the alt-mode or signature ability, and matches the bot\'s personality in tone. Lock the alt-mode first — a rescue helicopter, an armored excavator — then grow the name from it (Skylift, Quarrybreaker) and add a trait word for color. Test it by asking whether it could appear in a roll-call beside Optimus or Megatron without anyone blinking.' },
  { category: 'OC', question: 'Can I borrow canon naming elements for my OC?', answer: 'Yes — borrowing the building blocks is exactly how the real names were made. A -tron suffix, an Iron- or Star- prefix, a weather word, or an animal-plus-saur fusion all ground an OC instantly. Just avoid reusing a complete canon name (do not call your OC literally Optimus Prime); combine the franchise\'s parts into something new instead.' },
  { category: 'OC', question: 'How do I name a combiner team or squad?', answer: 'Generate a batch and pick names that share a theme but stay distinct — the way the Aerialbots all evoke flight (Silverbolt, Air Raid, Skydive, Slingshot, Fireflight) yet each reads as its own bot. Keep the component names linked (the Constructicons all sound like construction equipment before they form Devastator) so the team feels like a unit rather than unrelated bots.' },
  { category: 'Usage', question: 'How do I use this Transformers name generator?', answer: 'Set how many names you want (1–24), click Generate names, then skim for names that fit your chosen faction and alt-mode. Use the Copy button to save the whole list, paste it into your story notes, character sheet, or comic bible, and shortlist your favorites. Run again for more — there is no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Absolutely. The output is a starting point. Swap a prefix from one result onto a suffix from another, add a -tron to push a name toward a Decepticon leader, or trim a compound down to a single punchy word. Many builders take the front half of one result and the back half of another and fuse them into the final bot name.' },
  { category: 'Use cases', question: 'Can I use these names for fan fiction and comics?', answer: 'Yes — original fan fiction and fan comics are the primary use. The names follow the franchise\'s conventions so your OCs stand believably beside canon characters. Use the faction and alt-mode notes to match a name to your bot\'s vehicle mode, allegiance, and personality before you write them into a scene.' },
  { category: 'Use cases', question: 'Can I use these names for role-play servers?', answer: 'Yes. Transformers role-play communities on Discord and forums expect names that fit Cybertron. Generate Autobot or Decepticon names depending on your character\'s allegiance, pick one whose tone matches their alt-mode, and you will slot into the setting. If the server requires unique names, check the roster before claiming one.' },
  { category: 'Use cases', question: 'Can I use these for Transformers games like War for Cybertron?', answer: 'Yes. Players of War for Cybertron, Fall of Cybertron, Transformers: Devastation, and similar titles use generators to name custom bots and online handles. Generate a batch, pick a name in the right faction register, then confirm availability in the game if it requires a unique display name.' },
  { category: 'Use cases', question: 'Can I use a generated name as a username?', answer: 'Yes, Cybertronian names make strong gaming and social handles. Note that this tool does not check whether a name is taken — handles must be unique on each platform — so verify availability on the specific game, forum, or social network before you commit to a bot name.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated name elements built around Transformers conventions — alt-mode words, trait words, faction-flavored sounds, and -tron and -us suffixes — and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local to your device.' },
  { category: 'Technical', question: 'Are these the real characters from the cartoons?', answer: 'No. The generator creates original, Transformers-style names for your own use rather than reproducing the official cast as a lookup database. That is the point — you want fresh Cybertronian names for OCs and handles, not duplicates of canon bots like Optimus or Megatron that you cannot claim as your own.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, the Cybertronian names are created on your device. Your settings and the generated roster are never sent to our servers and nothing is stored. You can use the tool in a private window and your OC ideas stay yours until you choose to share them.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. Need a full army for the war over Cybertron? Just run it again — each run produces a fresh random set and there is no daily or total limit. Paste several runs into one document if you want a large pool of Autobot and Decepticon names to shortlist from.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch of bot names on your phone, copy it into your notes, and shortlist faction names wherever you are writing your fic or building your comic roster.' },
  { category: 'General', question: 'Is the Transformers name generator free?', answer: 'Yes, it is completely free with no account, sign-up, or download. Generate as many Autobot, Decepticon, and Beast Wars names as you like, as often as you like — the tool runs locally in your browser, so there are no usage fees or limits.' },
  { category: 'Best practices', question: 'How do I make a generated name sound more canon?', answer: 'Say it out loud and listen for the faction — Autobot names land sturdy and trustworthy, Decepticon names land sharp and menacing. Match the name to the alt-mode (a tank should not be called Skydart), anchor it with a real Cybertronian element like a -tron suffix or an Iron- prefix, and reserve the Prime title for a genuine leader. Those moves push a plain name firmly into the franchise.' },
];

export default async function TransformersNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<TransformersNameGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Transformers name generator for Autobot, Decepticon, and Cybertronian OC names.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

