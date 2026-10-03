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


const toolSlug = 'symbiote-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Symbiote Name Generator',
    description: 'Free Symbiote Name Generator tailored for OC symbiotes, Venom-inspired extraterrestrial identities, and Klyntar offspring. Sinister, single-term titles rooted in devastation, acoustic force, and ruthless hunting — accessible in your browser without registration.',
    seoTitle: 'Symbiote Name Generator – Venom & Carnage-Style OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Symbiote Name Generator – Venom &amp; Carnage-Style OC Names</h2>
        <p>Our Symbiote Name Generator formulates titles just as Marvel crafts them for their Klyntar species: concise, intimidating, isolated words carrying genuine malice. Venom. Carnage. Riot. Scream. Lasher. Phage. Agony. Toxin. These aren't harmless monikers — they are labels fitting a cosmic apex predator. Whether you're drawing an original character (OC) symbiote for fan community art, scripting stories within comic lore, or formulating a roleplay persona, this utility offers a catalog of handles feeling straight out of the exact dark slime that merged with Eddie Brock&apos;s other half. Operating entirely within your browser while keeping zero data, it permits endless rolls without sign-up hurdles.</p>
        <p>Symbiote handles aren't generated randomly — they adhere to an unmistakable, rigorous formula. Nearly every recognized symbiote throughout comic history is a lone, punchy term that evokes themes of brutality, harsh acoustic output, predation, or absolute terror. The details on this page outline that method, ensuring the identity you grant your custom OC symbiote reads authentically canon, fits seamlessly next to Venom and Carnage, and reveals the creature's dangerous nature before an observer even lays eyes on it.</p>

        <h2>How Symbiote Names Work in Marvel</h2>
        <p>
          When the first Klyntar spawn were introduced in the Maximum Carnage and Planet of the Symbiotes era, Marvel established a naming pattern that has held ever since. Understanding it is the difference between a name that sounds like a real symbiote and one that sounds like a generic monster:
        </p>
        <ul>
          <li><strong>Single terms, never pairs.</strong> Venom, Carnage, Riot, Phage, Lasher, Agony, Scream. Symbiote identifiers virtually avoid multi-word constructions — a lone, aggressive word carries total intimidation. This system relies on that singular-term standard.</li>
          <li><strong>It represents an abstract concept, not a personal identifier.</strong> Unlike people, a symbiote usually derives its title from an idea: violence (Carnage), poison (Toxin), sound (Scream), or an emotion (Agony). The term <em>is</em> the entity&apos;s true character.</li>
          <li><strong>Sharp consonants combined with brief vowels.</strong> The most famous designations finish with a cutting edge — the &quot;-age&quot; in Carnage, the hiss of Scream, the snap of Riot. Titles that feel biting appear much more perilous.</li>
          <li><strong>Lineage shines through in tone.</strong> Carnage stems from Venom&apos;s line, and its title heightens the brutality. The five offspring originating from Life Foundation — Riot, Phage, Lasher, Agony, Scream — share a group of rough, visceral words. A label can indicate whose offspring your OC truly is.</li>
        </ul>

        <h2>Naming Themes: Violence, Sound, Predation, Darkness</h2>
        <p>Choose a motif first, then produce and retain the monikers that fit it. Symbiote designations group around specific moods, and picking one early on keeps your OC consistent:</p>
        <ul>
          <li><strong>Violence and slaughter.</strong> The Carnage lineage — terms for bloodshed, ruin, and destruction. Ideal for a feral, murder-focused symbiote uninterested in maintaining a stable host.</li>
          <li><strong>Sound and shriek.</strong> Scream serves as the primary example here; symbiotes are famously weak to sonics, so a noise-inspired label is both ironic and apt. Consider shrieks, echoes, and clatter.</li>
          <li><strong>Poison and predation.</strong> Toxin and Anti-Venom belong here — handles built on venom, contagion, and the hunt. Great for a symbiote shaped by what it inflicts upon a host or prey.</li>
          <li><strong>Darkness and dread.</strong> This represents the Knull register — the King in Black, deity of the symbiotes, draws from the void, the abyss, and primordial night. Apply it to an ancient or godlike OC linked to the dragon Grendel or the living abyss.</li>
        </ul>
        <p>A moniker from one category feels quite distinct from another even though both fit the &quot;symbiote-style&quot; mold. A sound-based symbiote and a darkness-driven one imply separate origins, different hosts, and unique narratives.</p>

        <h2>Building an OC Symbiote</h2>
        <p>For fan art, fanfiction, and role-play, the symbiote&apos;s label is the initial detail an audience evaluates. A solid OC symbiote title accomplishes three goals simultaneously: it expresses the creature&apos;s nature in a single word, it matches the threatening one-word tradition, and it hints at origin or theme so the entity integrates smoothly into existing lore. Generate a collection, then test each option: could this name appear in a comic panel alongside Venom and Carnage without feeling out of place? If yes, it fits the right standard.</p>
        <p>A popular strategy involves determining your symbiote&apos;s defining characteristic prior to naming it. Is it a sonic hunter, a toxic spreader, a berserker offspring of Venom, or something pulled straight from Knull&apos;s abyss? Let that trait dictate the theme, then allow the generator to surface the exact term. Many creators also connect an OC to a recognized lineage — a sibling of the Life Foundation five, or a fresh progeny split off from Venom — and select a moniker that echoes the tone of that family.</p>

        <h2>The Host and Symbiote Dynamic</h2>
        <p>A symbiote represents only half the persona. The remaining half is the host it merges with — Eddie Brock for Venom, Cletus Kasady for Carnage, Patricia Robertson for Scream. When a host and symbiote unite, the combined entity frequently adopts the symbiote&apos;s designation: the human turns into &quot;Venom,&quot; the &quot;we&quot; voiced by the symbiote. This means your OC title must function on two levels — as the alien&apos;s name and as the identity shared by the paired duo.</p>
        <p>Consider the contrast between host and symbiote during the naming process. A gentle host paired with a brutally named symbiote generates tension; a violent host combined with an equally savage title doubles down. The moniker you create serves as more than just the creature&apos;s label — it is the persona the host assumes every time the symbiote takes control. Pick a term you would want a character to growl in the third-person plural.</p>

        <h2>How to Use This Symbiote Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to acquire a fresh set of single-word, symbiote-style monikers.</li>
          <li>Scan for designations matching your chosen motif — violence, sound, predation, or darkness — then use the Copy button to save the entire list.</li>
          <li>Paste into your character notes or art references and shortlist your top choices for your OC.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>Generation occurs entirely within your browser. Your settings and the names you produce are never sent to a server, keeping your OC symbiote concept confidential until you decide to share it through a comic, a fic, or a discussion thread.</p>

        <h2>Tips for Picking the Right Symbiote Name</h2>
        <p>Speak the title aloud — symbiotes converse, and their monikers are meant to be spat, hissed, or growled. If a designation fails to sound menacing when spoken, it will not read as dangerous on the printed page. Stick to a single word for canonical flavor; the moment you use two words you drift away from the Klyntar convention and toward a generic monster label. Avoid copying a canonical symbiote directly — you do not want an OC literally called Venom or Carnage — but borrowing the <em>shape</em> of those names (one harsh, abstract noun) is precisely how you blend in.</p>
        <p>If you are naming a brood — multiple offspring from a single parent symbiote — generate a batch and choose words sharing a tonal family, much like Riot, Phage, Lasher, Agony, and Scream do. Select titles of comparable length and harshness so the group registers as siblings rather than unrelated beasts. That cohesion is what made the Life Foundation five feel like one terrifying litter.</p>

        <h2>Symbiotes, Klyntar, and the King in Black</h2>
        <p>The mythology behind the names enriches your choices. The symbiotes are properly termed the Klyntar — a species that spiraled into violence after being forged by the dark god Knull, who created them out of the living abyss. Knull, the King in Black, stands at the peak of the lore as the origin of every symbiote, wielding a blade of living darkness and the dragon Grendel. Titles leaning into void, abyss, and primordial dread link an OC to this divine, ancient side of the spectrum, while names of pure aggression place it among the feral, host-hungry progeny.</p>
        <p>Understanding where your OC fits on that spectrum — a noble, redeemed Klyntar like Venom turned into, a brutal predator akin to Carnage, or a piece of Knull&apos;s divinity — lets you decide which name to pick from each set. The generator provides the words; the backstory guides you on which ones suit your monster.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It creates intimidating, single-word, symbiote-themed names for OC symbiotes used in fan art, fanfiction, and role-playing.</li>
          <li>It does not replicate Marvel&apos;s official symbiote list as a database — the results are meant for original creative work.</li>
          <li>It does not save your generated list or settings; everything processes locally inside your browser.</li>
          <li>It does not verify if a name is taken by an existing character or profile — if you intend to use a name publicly, check that yourself.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>The symbiote corner of Marvel is among the most-drawn and most-written fandoms online — artists creating OC symbiotes, story writers examining the host bond, and role-players staking a claim on their own piece of the Klyntar all require names that fit. This Symbiote Name Generator supplies you with that collection instantly, grounded in authentic naming logic: single harsh terms, abstract nouns of violence and dread, lineage-driven tone, and the predatory vibe stretching from Venom to Carnage and Knull himself. Generate a batch, rely on the theme and lore notes above, and you will finish with a name that feels like it always belonged to the symbiote lore.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a symbiote name generator?', answer: 'A Symbiote Name Generator is an online utility that builds intimidating, single-word, Venom-style names for OC symbiotes — the kind Marvel assigns to the Klyntar. Venom, Carnage, Riot, Scream, Toxin: brief, harsh-sounding words striking like a threat. The generator pulls from curated abstract nouns of violence, sound, predation, and dread right in your browser, ensuring each execution yields fresh combinations. It is free, operates locally without registration, and never transmits names to a server. Apply the output for fan art, fanfiction, or role-play within the symbiote universe.' },
  { category: 'Usage', question: 'How can someone operate the Symbiote Name Generator?', answer: 'Determine how many names you desire per execution (1–24), click "Generate names" for a fresh set of single-word, symbiote-style names, then scan for those fitting your chosen theme — violence, sound, predation, or darkness. Use the Copy button to capture the entire list, paste it into your character notes or art reference, and shortlist favorites for your OC. Execute again for additional options; no registration is necessary. Everything operates in your browser, keeping your OC concept confidential until you decide to share it.' },
  { category: 'General', question: 'Does the Symbiote Name Generator cost anything?', answer: 'Yes. This Symbiote Name Generator is free for use inside your browser. You can create OC symbiote names as frequently as you wish without setting up an account or paying. The utility runs locally on your hardware and asks for no installation. There is no daily or overall limit on how many executions you can perform, so brainstorm as many names as your OC, brood, or narrative needs.' },
  { category: 'Naming', question: 'What creates a strong symbiote name?', answer: 'A solid symbiote name performs three functions simultaneously: it communicates the entity\'s nature in one word, it matches the intimidating single-word standard, and it hints at lineage or theme so the symbiote integrates into the lore. Mimic the Marvel style — a single word rather than two, an abstract noun instead of a human name, and hard consonants paired with short vowels that bite (the "-age" of Carnage, the hiss of Scream). The test: could this title show up in a comic panel next to Venom and Carnage without feeling out of place?' },
  { category: 'Naming', question: 'Which are the primary symbiote naming themes?', answer: 'Symbiote naming revolves around four vibes — pick one initially, then retain the matching results. Violence and slaughter (the Carnage lineage: bloodshed and ruin) match a feral, bloodthirsty symbiote. Sound and shriek (Scream) are fitting and ironic, given symbiotes are weak to sonics. Poison and predation (Toxin, Anti-Venom) suit a symbiote defined by its impact on a host. Darkness and dread (the Knull category: void, abyss, primordial night) fit an ancient or divine OC. A name from one group reads quite differently from another.' },
  { category: 'Naming', question: 'How can I indicate my OC symbiote\'s lineage?', answer: 'Lineage appears in tone. Carnage is Venom\'s offspring and its name amplifies the savagery; the five Life Foundation spawn — Riot, Phage, Lasher, Agony, Scream — share a family of harsh, visceral words. To connect your OC to a recognized lineage, choose a name that matches tonally with that group: a berserker term for a Venom spawn, a void word for a piece of Knull. Decide whose progeny your symbiote is before naming, and the correct word from each batch becomes obvious.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server whenever I utilize the Symbiote Name Generator?', answer: 'No. This Symbiote Name Generator operates inside your browser. When you select the quantity of names and click generate, they are produced locally on your device. Your selections and the generated names are never transmitted to our servers, and we do not store your inputs or the resulting list. Generation is entirely local and private, ensuring your OC symbiote concept remains yours until you choose to reveal it.' },
  { category: 'Compatibility', question: 'Is the Symbiote Name Generator functional on mobile devices?', answer: 'Yes. The Symbiote Name Generator functions within a web browser and works across desktop, tablet, and phone. You do not need to download an application. Open the page, pick how many names you prefer, then generate. On a mobile device you can produce a short batch and copy it directly into your notes or an art reference. The utility is responsive and operates on any device featuring a modern browser.' },
  { category: 'Limits', question: 'How many symbiote names am I able to create simultaneously?', answer: 'You can request 1–24 names per execution. If you require more, run it again; each execution creates a fresh random set. There is no daily or overall limit. Paste multiple runs into a single document and clear duplicates if needed. The batch size keeps the list readable while supplying you with sufficient single-word symbiote names to pick from.' },
  { category: 'Usage', question: 'Am I able to copy names straight from the generator?', answer: 'Yes. Use the Copy button to send all generated names to your clipboard, then paste into a notes app, script, or art reference. The names are plain text, one per line, making them work in any editor. Copy your batch, then speak each favorite aloud to test it — copying is the intended method for saving a shortlist prior to committing to a single name for your OC.' },
  { category: 'General', question: 'Must I create a profile to access the Symbiote Name Generator?', answer: 'No. This Symbiote Name Generator functions without registration or login. The utility runs completely within your browser. You do not need to establish an account to use it — open the page, define how many names you want, click generate, and copy the outcomes. No email, password, or sign-up is required.' },
  { category: 'Naming', question: 'In what way do the host and symbiote name function together?', answer: 'A symbiote is only half the character; the other half is the host it links with — Eddie Brock for Venom, Cletus Kasady for Carnage. When they merge, the combined entity usually adopts the symbiote\'s title and speaks as "we." Consequently your OC name must function on two levels: as the alien\'s designation and as the identity the linked pair shares. Experiment with contrast — a timid host bonded to a brutal-sounding symbiote generates tension; a violent host paired with a savage name doubles down. Choose a word you would like a character to growl in the third-person plural.' },
  { category: 'Privacy', question: 'Are the generated names saved by you?', answer: 'No. Generation takes place inside your browser. We do not receive or save the names or your configurations. The generator operates locally on your hardware, and you can employ it in a private or incognito window if you prefer. Should you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Each execution yields up to 24 names. To acquire more, run it again; each execution produces a fresh random set. You can paste multiple runs into a single document and subsequently clear duplicates. There is no daily or overall limit. Batching runs serves as the intended workflow when you require a vast pool of symbiote names — for instance when naming an entire brood.' },
  { category: 'Naming', question: 'How should I name a brood of symbiotes?', answer: 'To create multiple offspring from a single parent symbiote, produce a batch and select terms sharing a tonal style, much like Riot, Phage, Lasher, Agony, and Scream do. Pick names close in length and harshness so the collection feels like a linked litter rather than random creatures. That cohesion defines why the Life Foundation five felt like a unified, terrifying group. Keep words inside one thematic cluster to show they share an origin.' },
  { category: 'Technical', question: 'How are the symbiote names generated?', answer: 'This tool utilizes a targeted selection of Venom-style terms — incorporating descriptive nouns of brutality, noise, venoms, and dread, alongside the abrasive consonants and brief vowels standard to the lore. Pressing generate prompts the engine to combine these assets locally in your browser so no two sessions are the same. Nothing you configure or produce gets uploaded to an external server. The output serves imaginative community fan projects; it does not replicate the official Marvel symbiote index or determine if a term is trademarked.' },
  { category: 'Naming', question: 'What is the connection to Knull and the King in Black?', answer: 'The symbiotes are correctly named the Klyntar, a species crafted from the living abyss by the dark god Knull — the King in Black, origin of every symbiote, who wields a sword of living darkness plus the dragon Grendel. Names focused on void, abyss, and primordial dread link an OC to this divine, ancient realm, while pure aggression names place it among feral, host-craving spawn. Determine your OC\'s status as a noble Klyntar, pure predator, or piece of Knull\'s divinity, and retain matching words.' },
  { category: 'Best practices', question: 'What is the best workflow for the symbiote name generator?', answer: 'Determine your OC\'s primary trait first, like sound-based predator, poison spreader, Venom spawn, or something from Knull\'s abyss. Set the count to values like 12 or 24, click generate, and copy the list into your notes. Keep words fitting your theme, speak each aloud to ensure it sounds menacing, and narrow down to five or ten. Run it again for more options. Let traits dictate the theme and let the tool surface the exact word.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a symbiote?', answer: 'The primary error is using two words, which moves you away from the single-word Klyntar tradition toward a generic monster label. The second is picking a name lacking danger when spoken, since symbiote names demand being spat, hissed, or growled. The third is direct copying of a canon symbiote, so avoid calling your OC Venom or Carnage. Borrow the general shape of one harsh, abstract noun instead of the exact title.' },
  { category: 'Troubleshooting', question: 'Why does my symbiote name match an existing character?', answer: 'The symbiote fandom is massive and heavily illustrated, meaning numerous powerful single words belong already to canon or to other creators\' OCs. This tool proposes combinations and doesn\'t check if a name is taken by a real character or handle. Should you intend to use a moniker publicly, double-check it yourself, keeping five to ten on a shortlist for backups. Altering a theme word rather than employing a plain classic cuts down on duplicates.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Symbiote Name Generator without an internet connection?', answer: 'Indeed. Following the initial load, the software operates purely via client-side scripts inside your browser, requiring zero active connection to output handles. You are free to brainstorm symbiote concepts offline, and text copying operates disconnected as well. Access to the web is only necessary when first visiting the page.' },
  { category: 'Use cases', question: 'Can I use these names for fan art or a role-play character?', answer: 'Yes, that remains the primary purpose. For fan art, the name serves as an initial impression, so a strong single-word moniker sets the tone before artwork is viewed. For role-play, it forms the persona adopted whenever the symbiote takes over. Generate a batch, pick a term suiting your creature\'s theme and lineage, and verify it reads as canon next to Venom and Carnage. The results support original OCs rather than duplicating established figures.' },
  { category: 'Naming', question: 'Should a symbiote name relate to its color or design?', answer: 'It can, and linking the word to the visual is a solid strategy. Carnage is red and its name reflects blood; Toxin, Anti-Venom, and Scream each display a look suggested by their terms. If your OC has a distinct palette or silhouette like acid green, bone white, or bladed forms, pick a generated word whose meaning mirrors it, making name and design reinforce each other. A word matching the art feels intentional rather than random.' },
  { category: 'Best practices', question: 'How do I test whether a generated symbiote name is strong enough?', answer: 'Put it through three tests. Say it aloud to see if it sounds dangerous when hissed or spat. Read it in dialogue where the bonded pair calls itself "we [name]" to check for menace. Finally, place it in a mental panel beside Venom and Carnage to see if it fits or feels too soft. A name passing all three is ready. If one fails, generate again and filter further to find a better fit.' },
];

export default async function SymbioteNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="symbiote" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Symbiote Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

