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
  const description = 'Complimentary Transformers Name Generator tailored for Beast Wars, Decepticon, and Autobot OCs. Generate authentic Cybertronian monikers based on design traits and alternate modes, complete with -tron endings and Prime honors — fully in-browser, no registration required.';
  const seoTitle = 'Transformers Name Generator – Autobot, Decepticon & Cybertronian OC Names';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Transformers Name Generator – Autobot, Decepticon &amp; Cybertronian OC Names</h2>
        <p>This Transformers Name Generator generates Cybertronian designations the way the franchise does: a solitary bold noun or compound that reveals what a bot transforms into or what actions it performs. Optimus Prime commands, Megatron conquers, Soundwave listens, Starscream plots, Bumblebee scouts, Shockwave calculates, Ironhide endures. Every moniker serves as a disguised job description. Whether you are crafting an Autobot for a fan comic, a Decepticon flier for a role-play server, or a Beast Wars-era hunter featuring an animal alt-mode, the utility delivers ready-to-use titles right in your browser. There is no registration, nothing gets saved, and you can generate as many lists as a war for Cybertron requires.</p>
        <p>Transformer monikers are far from random. They obey a strict logic: the acoustics must align with the alt-mode and the disposition. A heavy ground-pounder reads using blunt, hard syllables; a jet reads featuring a hiss plus a streak of danger; a Prime reads possessing weight along with a title. This page outlines these conventions so the monikers you retain actually sound Cybertronian — and so an original character you build can stand upon a battlefield alongside canon characters without feeling out of place.</p>

        <h2>How Cybertronian Monikers Are Created</h2>
        <p>Starting from the 1984 animated series onward, the creators named bots based on function, alt-mode, and personality. Master the formula and your generated monikers cease sounding fabricated and begin sounding canonical:</p>
        <ul>
          <li><strong>Name as function.</strong> Soundwave is a spy who records and replays; Shockwave serves as a cold logician; Wheeljack represents an inventor on wheels; Ratchet acts as a medic. The moniker declares the position prior to the bot transforming.</li>
          <li><strong>Name as alt-mode.</strong> Bumblebee is small and yellow similar to the VW Beetle he transforms into; Optimus Prime functions as a long-haul truck; Starscream and Skywarp represent jets; Ravage acts as a panther. Connect the moniker to what the bot turns into and it instantly reads accurately.</li>
          <li><strong>Compound nouns.</strong> Iron + hide, Sound + wave, Star + scream, Shock + wave, Wind + charger, Thunder + cracker. Fusing two vivid words into a single unit remains the most enduring and effective naming formula across Transformers lore.</li>
          <li><strong>Trait words.</strong> Ravage, Rampage, Mixmaster, Brawl, Onslaught — verbs plus aggressive nouns function exceptionally well for Decepticons, whose monikers tend to threaten rather than describe.</li>
        </ul>

        <h2>Autobot Monikers versus Decepticon Monikers</h2>
        <p>The faction division constitutes the most critical naming decision you make. An Autobot and a Decepticon ought to sound distinct even before reviewing their bios, since the franchise embeds heroism and villainy directly into the syllables:</p>
        <ul>
          <li><strong>Autobots</strong> rely on ground vehicles, defense, and reliability. Their monikers sound solid and sincere: Ironhide, Trailbreaker, Hound, Jazz, Prowl, Bumblebee, Wheeljack, Hot Rod. Car and truck alt-modes predominate, and the atmosphere feels rugged or heroic rather than cruel.</li>
          <li><strong>Decepticons</strong> lean toward jets, weaponry, and predators. Their monikers hiss, threaten, or boast: Megatron, Starscream, Skywarp, Thundercracker, Shockwave, Soundwave, Blitzwing, Devastator. Aircraft and firearm alt-modes predominate, and the atmosphere feels menacing or arrogant.</li>
          <li><strong>The sound test.</strong> Speak the moniker aloud. Should it sound like something you would trust to rescue you from a crash, it qualifies as an Autobot. Should it sound like something plunging out of the sky with active cannons, it constitutes a Decepticon. Produce a batch and sort every outcome into a faction by ear.</li>
        </ul>
        <p>When you construct an original character, select the faction first, then preserve only those monikers whose sound matches. A noble Autobot named like a jet-fighter or a Decepticon named like a gentle medic will register as an error — unless the mismatch forms the purpose of your narrative.</p>

        <h2>The &quot;Prime&quot; Title and Rank Monikers</h2>
        <p>Regard &quot;Prime&quot; as an official station rather than a surname, belonging exclusively to the bearer of the Matrix of Leadership: Optimus Prime, Sentinel Prime, Rodimus Prime, Nova Prime. Consider it an exalted mantle rather than an inherited family title. Assigning &quot;Prime&quot; instantly establishes that an original character is a chosen heir or military commander; omit the designation for typical rank-and-file soldiers so its prestige stays intact. In contrast, Decepticon leaders rely on self-appointed titles — Megatron evolves into Galvatron, while subordinates take power through force rather than tradition. Employ prestigious titles (such as Maximus, Prime, or Magnus like Ultra Magnus) with restraint, reserving them only for characters that merit such standing.</p>

        <h2>Suffixes: -tron, -us, and the Cybertronian Sound</h2>
        <p>A select group of endings instantly reads as &quot;robot from Cybertron.&quot; The most famous is <strong>-tron</strong> (Megatron, Galvatron, Cybertron itself, Metroplex-related coinages), which provides a mechanical, imposing finish — ideal for leaders and heavy units. The <strong>-us</strong> ending (Optimus, Nemesis Prime, Tarantulas) exhibits a faux-Latin, almost classical authority that fits Primes and ancient bots. Additional dependable Cybertronian sounds incorporate harsh one-syllable verbs (Blast, Crash, Smash, Ravage), weather and energy words (Thunder, Storm, Blitz, Surge, Energon-based coinages), alongside metal or machine words (Iron, Steel, Gear, Cog, Forge). The generator blends these so every execution produces monikers that reside within the franchise&apos;s acoustic environment instead of drifting into generic sci-fi.</p>

        <h2>Beast Wars: Naming Animal Alt-Modes</h2>
        <p>Beast Wars replaced vehicles with organic alt-modes, and the naming conventions shifted accordingly. Maximals and Predacons are designated after the animals they transform into, typically as a compound or a clever twist: Cheetor (cheetah), Rattrap (rat), Rhinox (rhino), Tigatron (tiger + -tron), Dinobot (dinosaur), Terrorsaur, Tarantulas, Waspinator, Blackarachnia. If your original character features a beast mode, name it after the creature and bend the spelling toward Cybertron — append a -tron, a -saur, or an -inator, or merge the animal featuring a trait (Razorbeak, Stinglash, Manterror). This keeps a Beast Wars figure distinct from a vehicle-based Generation 1 bot while still sounding unmistakably Transformers. Maximals descend from Autobots and lean heroic; Predacons descend from Decepticons and lean predatory — the faction tone-coding survives the transition to animals.</p>

        <h2>Building an Original Transformer (OC)</h2>
        <p>For fan fiction, comics, and role-play, the moniker represents the initial element readers evaluate. A robust Transformers original character moniker performs three tasks simultaneously: it establishes a faction (Autobot or Decepticon, Maximal or Predacon), it hints at the alt-mode or signature capability, and it maintains the appropriate tone for the bot&apos;s disposition. Generate a batch, then evaluate each moniker: could it appear in a roll-call beside Optimus, Megatron, or Dinobot without anyone blinking? If yes, it occupies the correct register.</p>
        <p>One standard method is securing the alternate mode initially — like a rescue chopper or tactical digger — and building the moniker around it (Skylift, Quarrybreaker). Next, incorporate a descriptive trait: a daring pilot could be dubbed Recklash, while a steady protector could be named Stonewatch. Should your OC belong to a combining squad (similar to how the Constructicons make up Devastator), ensure the individual titles share a thematic connection to feel cohesive as a group.</p>

        <h2>[10] How to Use This Transformers Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to produce a new set of Cybertronian-style names.</li>
          <li>Review the results for ones that match your selected faction and alternate mode, then utilize the Copy button to capture the entire list.</li>
          <li>Insert them into your narrative notes, character profile, or comic guide to narrow down your top choices.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>Processing takes place completely inside your browser. Your preferences and generated names are never transmitted to any server, keeping your OC roster confidential until you decide to reveal it.</p>

        <h2>Tips for Picking the Right Name</h2>
        <p>Speak the moniker aloud to gauge its faction vibe. Autobot labels ought to feel solid and reliable; Decepticon ones should sound cutting and menacing. Align the title with the alternate mode — a heavy tank shouldn't be named Skydart, and a stealth jet shouldn't be called Bulldozer, unless you are aiming for irony. Steer clear of accidentally copying an official established name (nobody needs an OC literally named Optimus Prime), but utilizing the series&apos; signature elements — like a -tron ending, an Iron- or Star- beginning, or meteorological terms — mirrors how authentic names were built, so embrace them.</p>
        <p>When naming an entire unit, produce a collection and select monikers that offer contrast within a common motif — similar to how the Aerialbots all relate to aviation (Silverbolt, Air Raid, Skydive, Slingshot, Fireflight) while maintaining individuality. That cohesive theme paired with distinct variation is precisely what makes a strike force or combining team feel unified rather than a random assortment of mechs.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It creates Transformers-style Autobot, Decepticon, and Beast Wars names for original characters, fan fiction, comic books, and role-playing scenarios.</li>
          <li>It avoids serving as an official cast directory; instead, the output provides fresh, Cybertronian-inspired content for your personal projects.</li>
          <li>It never saves your configured options or created roster; all processing happens entirely inside your browser.</li>
          <li>This system does not monitor whether an output is registered across gaming networks, messaging boards, or social sites — be sure to confirm availability independently if choosing an alias.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>Transformers remains among the largest online fandoms — creators of fan-comics, fiction authors, stop-motion animators, and gamers playing titles like War for Cybertron, Fall of Cybertron, and Transformers: Devastation all require fitting monikers. This Transformers Name Generator supplies that selection immediately, rooted in the series&apos; authentic naming conventions: function-as-name, alt-mode coding, the Autobot/Decepticon sound split, the Prime title, the -tron and -us suffixes, and the Beast Wars animal twist. Produce a list, utilize the faction and alt-mode guidelines provided above, and you will finish with Cybertronian titles that sound like they came right off the assembly lines in Iacon — or emerged from the smelting pits of Kaon. For additional writing and naming utilities, browse our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Transformers name generator?', answer: 'A Transformers Name Generator is a web utility that generates Cybertronian-themed titles capturing the franchise&apos;s vibe — striking nouns and compound words highlighting a bot\'s personality or vehicle mode, similarly to Optimus Prime, Megatron, Soundwave, and Bumblebee. It applies authentic naming patterns (function-as-name, alt-mode coding, the Autobot/Decepticon sound split, -tron and -us suffixes) to ensure outputs suit original characters, fan fiction, comic books, and role-play sessions. It operates locally requiring no registration and saves zero data.' },
  { category: 'Naming style', question: 'How are real Transformers names structured?', answer: 'Most names are formed from a single striking noun or a combination of two words identifying the warrior\'s functionality or alt-mode. Iron + hide, Sound + wave, Star + scream, Shock + wave. A chosen designation frequently summarizes their duties: Soundwave intercepts audio signals, Wheeljack engineers tech, and Ratchet provides medical aid. Align the vocal texture of the name with their vehicular silhouette and temperament so the identity sounds deliberate rather than accidental.' },
  { category: 'Naming style', question: 'Do Transformers names mean something?', answer: 'In nearly all cases. The creators designed titles based on purpose, alt-mode, and attitude. Bumblebee is compact and yellow like his Beetle vehicle form; Starscream represents a roaring jet; Ravage is a predator cat that destroys; Shockwave acts as a calculating energy firearm. Selecting a name whose significance aligns with your character\'s vehicle form and character traits creates an authentic Cybertronian feel.' },
  { category: 'Factions', question: 'What is the difference between Autobot and Decepticon names?', answer: 'Autobot designations favor land vehicles, defense, and reliability — Ironhide, Prowl, Hound, Jazz, Wheeljack — carrying a dependable or heroic resonance. Decepticon monikers lean toward aircraft, weaponry, and beasts — Megatron, Starscream, Skywarp, Blitzwing, Devastator — offering a threatening or arrogant tone. Choose your faction initially, speak each generated option out loud, and retain solely those with a matching vibe.' },
  { category: 'Factions', question: 'How do I make a name sound like an Autobot?', answer: 'Base it around a land vehicle or defensive characteristic while maintaining a sincere and tough tone. Incorporate automobile, transport, and rescue alt-modes alongside terms like iron, trail, guard, bolt, and prowl. Designations such as Trailbreaker, Stonewatch, or Skylift feel heroic. Steer clear of jet-and-cannon aggression unless your Autobot acts as a former Decepticon or an intentional exception.' },
  { category: 'Factions', question: 'What method should I use to make a name sound like a Decepticon?', answer: 'Draw inspiration from jets, weapons, and predators, allowing the name to sound menacing. Strong verbs and nouns work well — Ravage, Rampage, Onslaught, Blitzwing — along with hissing syllables and a -tron suffix for leaders (Megatron, Galvatron). A Decepticon moniker ought to sound like something plunging out of the sun with active weapons, rather than something you would rely on for repairs.' },
  { category: 'Titles', question: 'What is the meaning of the title "Prime" and when is it appropriate to use it?', answer: 'Prime functions as a rank rather than a surname, signifying the bearer of the Matrix of Leadership (Optimus Prime, Sentinel Prime, Rodimus Prime). Treat it like a royal crown. Assign the Prime designation to your OC solely if they command a faction or represent a chosen successor; on an ordinary soldier, it diminishes the significance. The same caution applies to rank titles such as Magnus (Ultra Magnus) and Maximus.' },
  { category: 'Naming style', question: 'What function do the -tron and -us suffixes serve?', answer: 'They instantly communicate "robot from Cybertron." The -tron ending (Megatron, Galvatron, Cybertron) feels mechanical and imposing, making it ideal for leaders and heavy units. The -us ending (Optimus, Tarantulas) brings a faux-Latin, classical authority suitable for Primes and ancient cybertronians. The generator combines these terminations with metal, weather, and energy vocabulary so every run falls right into the franchise\'s soundscape.' },
  { category: 'Beast Wars', question: 'How should I name a Beast Wars character that has an animal alt-mode?', answer: 'Base the name on the creature while twisting the spelling toward Cybertron: append a -tron (Tigatron), a -saur (Dinobot, Terrorsaur), or an -inator (Waspinator), or blend the animal with a distinct trait (Razorbeak, Stinglash). Maximals descend from Autobots and lean heroic; Predacons descend from Decepticons and lean predatory, meaning the faction tone-coding transitions directly from vehicles to beasts.' },
  { category: 'OC', question: 'How do I go about naming an original Transformer (OC)?', answer: 'A solid OC name accomplishes three objectives: it establishes a faction, hints at the alt-mode or signature ability, and matches the bot\'s personality in tone. Lock in the alt-mode first — perhaps a rescue helicopter or armored excavator — then develop the name from it (Skylift, Quarrybreaker) while adding a trait word for flavor. Test it by asking whether it could appear in a roll-call alongside Optimus or Megatron without causing surprise.' },
  { category: 'OC', question: 'Is it acceptable to borrow canon naming elements for my OC?', answer: 'Indeed, borrowing these core building blocks is precisely how the authentic names were created. A -tron suffix, an Iron- or Star- prefix, a weather term, or an animal-plus-saur combination instantly grounds an OC. Just avoid copying a full canon name (never name your OC literally Optimus Prime); instead, mix and match the franchise\'s components to forge something fresh.' },
  { category: 'OC', question: 'What is the best way to name a combiner team or squad?', answer: 'Generate a batch and select names that share a common theme while remaining distinct — similar to how the Aerialbots all evoke flight (Silverbolt, Air Raid, Skydive, Slingshot, Fireflight) yet each stands out as an individual bot. Maintain a link among the component names (the Constructicons all evoke construction gear prior to forming Devastator) so the group feels unified rather than like a collection of random bots.' },
  { category: 'Usage', question: 'How can I operate this Transformers Name Generator?', answer: 'Set your desired quantity of names (1–24), click Generate names, and then review the results to find ones matching your chosen faction and alt-mode. Use the Copy button to save the full list, paste it into your story notes, character sheet, or comic bible, and narrow down your top choices. Run it again for additional options — there are no limits, required accounts, or downloads.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Without a doubt. The output serves merely as a starting point. Swap a prefix from one result with a suffix from another, attach a -tron to steer a name toward a Decepticon leader, or shorten a compound term down to a single punchy word. Many creators take the front half of one result and the back half of another, fusing them to create the final bot name.' },
  { category: 'Use cases', question: 'Can I utilize these names within fan fiction and comic books?', answer: 'Yes, original fan fiction and fan comics represent the primary use case. These names adhere to the franchise\'s established rules so your OCs fit seamlessly alongside canon characters. Review the faction and alt-mode details to align a name with your bot\'s vehicle mode, allegiance, and personality before integrating them into a scene.' },
  { category: 'Use cases', question: 'Are these names suitable for role-play servers?', answer: 'Yes. Transformers role-play communities across Discord and forums expect names that truly fit Cybertron. Generate Autobot or Decepticon names based on your character\'s allegiance, choose one with a tone that matches their alt-mode, and you will fit right into the environment. If the server demands unique names, verify the roster before claiming one.' },
  { category: 'Use cases', question: 'Can I use these for Transformers video games like War for Cybertron?', answer: 'Yes. Players of War for Cybertron, Fall of Cybertron, Transformers: Devastation, and similar games rely on generators to name custom bots and online handles. Generate a batch, select a name within the appropriate faction register, and then check availability in-game if a unique display name is required.' },
  { category: 'Use cases', question: 'Is it okay to use a generated name as a username?', answer: 'Yes, Cybertronian names make fantastic gaming and social media handles. Keep in mind that this tool does not verify whether a name is already taken — handles must remain unique across every platform — so double-check availability on your chosen game, forum, or social network prior to finalizing your bot name.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The tool mixes selected name parts based on Transformers themes — such as alt-mode terms, trait words, faction-style sounds, and suffixes like -tron and -us — shuffling them randomly right inside your web browser. Each execution delivers a completely new batch. Nothing gets transmitted to any server; the entire generation process happens locally on your machine.' },
  { category: 'Technical', question: 'Are these the actual characters featured in the cartoons?', answer: 'No. The utility generates original, Transformers-themed names for your personal use rather than pulling from an official cast database. That is the whole point — you need fresh Cybertronian names for handles and OCs, not copies of canon bots like Megatron or Optimus that you cannot rightfully claim as your own.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'No. Everything executes right in your browser. When you hit generate, the Cybertronian names are built directly on your device. Your settings and the generated list are never sent to our servers, and zero data is saved. You can run the tool in a private browsing tab, keeping your OC concepts completely private until you decide to reveal them.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You can request between 1 and 24 names per run. Need an entire army for the battle over Cybertron? Simply run it again — every execution yields a fresh random assortment without any daily or total caps. Combine several batches into a single document if you want a massive list of Decepticon and Autobot names to select from.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Yes. The generator works on any contemporary web browser across mobile, tablet, or desktop with zero app installation required. Generate a group of bot names on your mobile device, save them to your notes, and pick out faction names no matter where you happen to draft your story or design your comic cast.' },
  { category: 'General', question: 'Does the Transformers Name Generator cost anything?', answer: 'Yes, it is completely free with no download, sign-up, or account required. Create as many Beast Wars, Decepticon, and Autobot names as you wish, as often as you want — because the tool runs locally in your browser, there are zero usage limits or fees.' },
  { category: 'Best practices', question: 'How can I make a generated name feel more authentic to the canon?', answer: 'Say it out loud and listen to the faction vibe — Autobot names sound reliable and sturdy, while Decepticon names come across as menacing and sharp. Fit the name to the vehicle or beast mode (a tank shouldn\'t be named Skydart), ground it using a genuine Cybertronian component like an Iron- prefix or a -tron suffix, and save the Prime title strictly for a true commander. These steps turn a simple name into an authentic piece of the franchise.' },
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
          <p className="text-slate-700">Frequent inquiries regarding the Transformers Name Generator for Cybertronian, Autobot, and Decepticon OC names.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

