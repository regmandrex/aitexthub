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


const toolSlug = '40k-planet-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: '40K Planet Name Generator',
    description: 'No-cost 40K Planet Name Generator for world and planet designations. Generate Warhammer 40K-inspired name concepts right in your browser without registering.',
    seoTitle: '40K Planet Name Generator – Warhammer Planet & World Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>40K Planet Name Generator – Warhammer World &amp; Planet Names</h2>
        <p>Within Warhammer 40,000, a world is never merely a stone floating in the void — it serves as a gear within an interstellar religious empire, and its title bears the burden of ten millennia of dark lore. This generator crafts planet designations in the genuine tone of the 41st Millennium: gothic, Latin-inspired, and soaked in terror, following the style of Cadia, Armageddon, Macragge, Vigilus, and Krieg. Whether you are designing a sector for a Crusade campaign, penning fan fiction, or naming the death world your army originated from, the tool supplies you with labels that sound as though they were printed into an Administratum record ages ago.</p>
        <p>The 40K naming aesthetic avoids standard science fiction tropes. It is purposefully archaic and pious, drawing inspiration from Latin, feudal Europe, and the oppressive administration of the Imperium of Man. Monikers suggest devotion, combat, rot, and endless labor. This section details the rules that cause an Imperial world designation to seem authentic — the Latinate roots, the foreboding endings, the numerical identifiers — and ways to pair a title with a world&apos;s classification so your Cadia-analogue feels like a bastion and your shrine world resembles a holy site.</p>

        <h2>How to Craft Names That Fit a 40K Planet</h2>
        <p>The Imperium represents a gothic nightmare, and its world designations show this through several steady patterns. Master these and even a random pick will sound authentic:</p>
        <ul>
          <li><strong>Pseudo-Latin and Latinate roots.</strong> Sanctus (holy), Mortis (death), Ferrus (iron), Bellum (war), Ignis (fire), Tempestus (storm), Vigil (watch), Rex (king). Canonical Warhammer locations like Mortis and Sanctus Reach build their identities on this identical vocabulary.</li>
          <li><strong>Consonant-heavy, harsh sounds.</strong> Krieg, Cadia, Vraks, Vostroya, Tallarn. Guttural, blunt titles feel ancient and war-ravaged.</li>
          <li><strong>Ominous or grand suffixes.</strong> Endings including -us, -a, -ia, -is, -or, along with -ax impart an imperial Latin rhythm — Macragge, Armageddon, Vigilus.</li>
          <li><strong>Rank and numeral designations.</strong> Cadia III, Vostroya IX, Sanctus Prime, Baal Secundus. Incorporating markers such as Prime, Secundus, and Majoris alongside Roman numerals mimics the way the Administratum catalogs millions of planetary territories.</li>
        </ul>

        <h2>Categorizing Names By Planet Type</h2>
        <p>The Imperium categorizes planets by their purpose, and this grouping ought to influence the vibe of the name. A smart choice hints at the nature of the planet for your audience before you even detail it:</p>
        <ul>
          <li><strong>Hive world.</strong> Industrial, overcrowded mega-cities towering into the atmosphere (Necromunda, Armageddon). Titles feel massive, grimy, and heavy.</li>
          <li><strong>Forge world.</strong> Territory of the Adeptus Mechanicus, veiled in machinery and smog (Mars, Metalica, Graia). Rely on machine and iron roots — Ferrus, Mechanicus, -tek.</li>
          <li><strong>Death world.</strong> Toxic climates, predators, or lethal jungles (Catachan, Fenris). Primal, hostile names work well — Mortis, Bellum, and a sharp single syllable.</li>
          <li><strong>Shrine world.</strong> Relics and sacred pilgrimage locations (Ophelia VII, Sanctus Reach). Latinate, holy titles — Sanctus, Ecclesia, Benedictus.</li>
          <li><strong>Agri-world.</strong> Massive farming planets sustaining the Imperium. Names may be simpler, more traditional, almost pastoral, prior to the grimdark shift.</li>
          <li><strong>Fortress world.</strong> Outposts designed to guard a border, much like Cadia. Titles sound military and unyielding — Vigilus, Bastion, Vraks.</li>
          <li><strong>Feral world.</strong> Primitive societies supplying fierce fighters (Fenris once again, or Nocturne). Appellations feel tribal, severe, and ancient.</li>
        </ul>

        <h2>Foundation Derived from Gothic and Latin</h2>
        <p>If you wish to craft or polish a moniker instead of taking a random one directly, maintain a small palette of heavy roots. Dark, military, and sacred terms all fit naturally within the Imperium&apos;s atmosphere of grim belief and endless conflict. Sanctus and Ecclesia grant a shrine world its sacredness; Mortis, Bellum, and Ferrum lend a war world its scars; Tempestus and Ignis point to a harsh environment. A dual-word title like Mortis Ferrum immediately reads as an iron-grey sphere that has bled for ages — the roots accomplish your world-building prior to writing a single sentence of lore.</p>

        <h2>Incorporating Numbers and Identifiers</h2>
        <p>Appending a designation ranks among the quickest methods to push a simple title firmly into 40K territory. A globe called merely &quot;Vostroya&quot; works fine, but &quot;Vostroya IX&quot; suggests it is the ninth cataloged body within its system, one entry among the Imperium&apos;s endless registry. Employ <strong>Prime</strong>, <strong>Secundus</strong>, or <strong>Tertius</strong> for a world&apos;s standing in a system, and Roman numerals (Cadia III, Baal Secundus) when a planet orbits alongside sister bodies. Attach these to spheres located inside a named system or bearing strategic importance; keep standalone titles bare so they may stand alone.</p>

        <h2>Naming an Entire Sector or System</h2>
        <p>For homebrew campaigns you frequently require not a single world but a group of them, and consistency is what causes a sector to feel like a genuine region of the galaxy rather than random debris. Choose a convention and stick with it: numbered spheres surrounding a central title (Cadia I through Cadia VII), a common Latin root family, or a shared suffix style. Produce a batch, pick your primary world, then run again for its neighbors and keep the ones matching in tone. A unified structure allows a reader to perceive the boundaries of your subsector even prior to mapping it.</p>

        <h2>Methods for Naming a World in Your Tale or Campaign</h2>
        <p>Begin with the world&apos;s function, not the title. Determine if it acts as a fortress, a shrine, a hive, or a death world, because the category establishes the mood. Next, generate a batch and organize the outcomes by feel — the darkest, harshest titles belong to death and fortress worlds; the most sacred Latin ones belong to shrine worlds; the iron-heavy ones belong to forge worlds. Include a designation if the planet rests within a wider system. A moniker selected this way arrives pre-loaded with implied history, precisely what a grimdark setting desires.</p>

        <h2>How to Use This 40K Planet Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many world titles you desire per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to acquire a fresh batch of grimdark, Imperial-style planet titles.</li>
          <li>Scan for titles whose tone fits your world&apos;s classification — military, sacred, industrial, or hostile.</li>
          <li>Utilize the Copy button to save your shortlist, then append designations like Prime or a numeral to refine.</li>
          <li>Run it again as frequently as you wish — there is no profile, no download, and no restriction on uses.</li>
        </ol>
        <p>Generation happens completely inside your browser. Your preferences and the titles you generate are never transmitted to a server, ensuring your unrevealed spheres and campaign plans remain confidential until you decide to share them.</p>

        <h2>Common Mistakes to Avoid</h2>
        <p>The primary mistake is a title sounding overly soft or contemporary for the environment — a bright, clean, cheerful moniker shatters the grimdark atmosphere instantly. Prevent overusing a single suffix, or every globe inside your sector blurs into &quot;-us, -us, -us.&quot; Watch out for accidentally duplicating a famous canon world like Cadia, Terra, or Macragge unless you intend the reference. And keep pronunciations simple at the table; a title nobody can speak aloud will never endure in a campaign.</p>

        <h2>Application in Tabletop, Homebrew, and Fan Fiction</h2>
        <p>These are original, 40K-inspired combinations, not titles taken from any official Games Workshop source, rendering them ideal for personal campaigns, homebrew regiments, and non-commercial fan fiction. A Crusade fought over a designated world — the siege of a fortress planet, a pilgrimage to reclaim a lost shrine world — acquires genuine importance when the planet possesses an evocative Imperial title. Produce a batch, assign designations to your created worlds, and construct each planet&apos;s history around the atmosphere its title suggests. The titles are yours to modify; view them as raw materials, not strict canon, and adjust spelling and designations freely.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a 40K planet name generator?', answer: 'It is a browser utility that conceives grimdark, Imperial-sounding world titles matching the style of Warhammer 40,000 — the gothic, Latinate planet titles of the 41st Millennium, such as Cadia, Armageddon, Vigilus, or Sanctus Prime. It relies on High Gothic flavor, Latin roots, and ominous suffixes to make globes feel part of the Imperium. Everything executes locally in your browser, nothing gets uploaded or stored, and it remains free with no registration. You acquire 1 to 24 world titles per run.' },
  { category: 'Naming', question: 'What causes a title to sound like a Warhammer 40K planet?', answer: 'The 40K style is gothic and Latinate: severe consonants, Latin or pseudo-Latin roots (Sanctus, Mortis, Ferrus, Tempestus), and grand or ominous suffixes like -us, -a, -ia, -is, or Prime. Roman numerals and designations (Prime, Secundus, Tertius) mirror the Imperium\'s bureaucracy. Monikers often convey a sense of dread, faith, or war. The generator merges these elements so outcomes resemble authentic Imperial worlds rather than generic sci-fi planets.' },
  { category: 'Naming', question: 'What suffixes and designations suit 40K worlds?', answer: 'Classic endings involve -us, -a, -ia, -is, -or, and -ax, alongside grand designations such as Prime, Secundus, Majoris, and Tertius that imply a world\'s standing within an Imperial system. Roman numerals (Cadia III) and the term Prime attached to a title (Sanctus Prime) represent hallmarks of the setting. If a generated moniker feels overly basic, adding a designation or a harsher suffix pushes it directly into 40K territory.' },
  { category: 'Naming', question: 'What Latin and gothic roots function for these titles?', answer: 'Pseudo-Latin roots bear immense flavor: Sanctus (holy), Mortis (death), Ferrus (iron), Bellum (war), Tempestus (storm), Ignis (fire), Vigil (watch), Rex (king). Dark, religious, and military words all match the Imperium\'s atmosphere of grim faith and endless conflict. The generator utilizes this vocabulary so a title like Mortis Ferrum reads as a war-scarred iron world, giving even a random outcome an implied history.' },
  { category: 'Use cases', question: 'What is the best way to name a planet for a story or 40K campaign?', answer: 'Think about the planet\'s function initially — a death world, a hive world, an agri-world, a shrine world, a fortress world — because the classification implies the atmosphere. Death and fortress worlds call for aggressive, severe names; shrine worlds require sacred, Latin-inspired ones. Create a set, select a title whose phonetics fit the celestial body\'s nature, and append a classification if it belongs to a bigger system. A suitable name hints at the globe prior to any description.' },
  { category: 'Naming', question: 'In what ways do distinct planet categories influence the naming convention?', answer: 'The 40K universe categorizes planets by their purpose, and the title can reflect that. Crowded and industrial tones define hive worlds; mechanical and iron-dense roots (like Mechanicus, Ferrus) suit forge worlds; holy terms (Ecclesia, Sanctus) fit shrine worlds; dangerous words (Bellum, Mortis) represent death worlds. Produce a collection and organize titles by their mood, then allocate the most menacing to death worlds and the most sacred to shrine worlds so every title matches its globe.' },
  { category: 'Naming', question: 'Is it better to include Prime or Roman numerals in the title?', answer: 'These elements provide authentic Imperial atmosphere. Adding a suffix like Secundus, Prime, or a numeral (Vostroya IX) makes a globe sound like a record within the Imperium\'s massive catalog of star systems and worlds. Apply them whenever a planet belongs to a designated system or holds tactical importance; omit them for an independent name that stands alone. The tool can provide both options, so choose what suits your universe.' },
  { category: 'Use cases', question: 'Are these suitable for narrative play or tabletop wargaming?', answer: 'Indeed. A campaign fought over a named globe — a crusade to recover a lost shrine world, a siege of a fortress planet — carries more significance when the target has a suggestive Imperial designation. Generate a selection, name your disputed globe alongside adjacent bodies, and maintain uniform naming conventions throughout a star system. Since the results sound genuinely 40K, your game objectives and conflicts feel connected to the broader grimdark universe.' },
  { category: 'Usage', question: 'How can someone operate the 40K Planet Name Generator?', answer: 'Select your preferred quantity per generation (1 up to 24) and press Generate. Review the list for titles whose mood matches your globe — hostile, industrial, holy, or martial — and utilize the Copy option to store your favorites. Transfer the output into your documents and attach suffixes such as a numeral or Prime for refinement. Execute the tool as frequently as desired; there is no login, no software installation, and unlimited usage.' },
  { category: 'General', question: 'Does the 40K Planet Name Generator cost anything?', answer: 'Definitely. The tool is entirely free to access via your web browser without requiring a payment, registration, or software download. You may produce Imperial planet titles as often as you wish — there is no restriction or daily limit on generations. It operates directly on your hardware, allowing you to name an entire sector of worlds for your narrative or campaign completely free of friction or expense.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'Negative. The utility functions directly inside your browser. Upon specifying a quantity and pressing generate, the results are formulated locally upon your machine — data is never logged, sent, or retained on external servers. Your world-building concepts and campaign details remain confidential. Shut the browser tab and the catalog disappears unless saved, ensuring your hidden planets remain on your device.' },
  { category: 'Compatibility', question: 'Is the 40K Planet Name Generator functional on mobile devices?', answer: 'Certainly. The tool functions across any contemporary browser and operates smoothly on tablet, desktop, and mobile devices without requiring any application downloads. You can brainstorm planet titles on your mobile device at the gaming session or during writing sessions, copy a preferred option, and insert it directly into your story document, army roster, or notes. The design adapts dynamically, meaning naming a collection of Imperial worlds functions identically on mobile screens as on computers.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You are able to ask for 1 up to 24 names per generation. Should you require a bigger pool — an entire subsector or sector of planets — simply run it again; every execution generates a brand new random collection. There is no total or daily restriction. Combine several outputs into a single document and filter out any repeats. The limit of 24 per generation ensures each list remains easy to read while providing you with numerous Imperial world names to review and allocate.' },
  { category: 'Usage', question: 'Am I able to copy names straight from the generator?', answer: 'Indeed. The Copy button puts the entire created batch onto your clipboard as unformatted text, featuring one name per line, prepared for pasting into any world-building wiki, campaign document, or notes application. This serves as the intended method for storing a shortlist: generate, copy, then assign names to planets and include designations. Storing them inside a file allows you to chart out an entire sector of named worlds as your universe grows.' },
  { category: 'General', question: 'Must I create a profile to access the 40K Planet Name Generator?', answer: 'Negative. This utility functions without any login or registration. Visit the page, choose your desired quantity of names, hit generate, and copy the output — no password, email, or account creation required. It is designed for rapid, hassle-free brainstorming, allowing you to drop in, obtain a collection of grimdark world names, and return straight to your story or campaign without registering anything.' },
  { category: 'Technical', question: 'In what way are the planet names created?', answer: 'The generator utilizes handpicked lists of gothic word-components, Latinate roots, ominous suffixes, and Imperial designations, mixing them directly within your browser so each execution varies. Nothing gets transmitted to any server. The result serves as original creative inspiration matching the 40K aesthetic — rather than terms sourced from any official Games Workshop material — so view it merely as raw material. These lists are calibrated to create dark, grand, and believably Imperial planetary names.' },
  { category: 'Naming', question: 'How can I designate an entire star system or sector?', answer: 'Choose a specific naming convention and utilize it across the collection so the sector feels unified — for instance, linked Latin roots, a common designation format, or numbered planets surrounding a central title (Cadia I through Cadia VII). Produce a batch, select a primary world, then generate again for its neighboring planets, maintaining a consistent tone. A cohesive naming structure ensures your sector appears as a single region within the Imperium rather than random worlds.' },
  { category: 'Best practices', question: 'What errors ought I to steer clear of regarding 40K planet names?', answer: 'Steer clear of terms that feel overly modern or soft for the grimdark aesthetic. Avoid excessive repetition of the same suffix so individual worlds do not blend together. Avoid accidentally duplicating a well-known canon world (Terra, Cadia, Macragge) unless your goal is a direct reference. Furthermore, ensure the pronunciations remain manageable during gameplay. Retain options that are Latinate, gothic, easily distinguishable from one another, and filled with the ominous atmosphere of the Imperium.' },
  { category: 'Naming', question: 'Am I able to invent world names for alternative grimdark science fiction universes?', answer: 'Affirmative. The gothic, Latinate, and ominous tone fits any space-opera or dark far-future universe, beyond just 40K alone. Produce a set and apply the outcomes to your personal original grimdark setting, modifying roots or suffixes to match your lore. Because these titles possess an inherent atmosphere of grandeur and dread, they provide immediate mood to any bleak interstellar empire you are designing.' },
  { category: 'Use cases', question: 'Is it okay to utilize these names within fan fiction or homebrew lore?', answer: 'Yes. For homebrew regiments, personal campaigns, and non-commercial fan fiction, these original-style planetary titles provide fresh worlds that feel genuinely Imperial without copying canonical planets. Generate a batch, assign titles to your created worlds, and construct their lore around the mood each name suggests. These names belong to you for adaptation; they act as inspiration rather than strict canon, meaning you can freely adjust spellings and designations.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Each generation yields up to 24 titles. To build a larger collection, simply run the tool multiple times, compile every batch into a single document, and filter out duplicates. There are no daily limits or restrictions on usage, making batching the ideal approach when naming an entire sector, subsector, or crusade\'s worth of planets. Save the most compelling and appropriate Imperial designations to a shortlist as you proceed.' },
  { category: 'General', question: 'Are these authentic Warhammer 40K planet designations?', answer: 'No. The software generates original, 40K-inspired blends using Latin and gothic components rather than pulling from official Games Workshop sources or databases. These serve as creative fodder for your personal campaigns, tales, and homebrew lore. A few might accidentally resemble canon worlds, so if you wish to prevent overlap, check a favorite against known 40K planets before claiming it for your own.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the 40K Planet Name Generator without an internet connection?', answer: 'Yes. Once the site finishes loading, the application operates entirely within your browser and requires zero internet connection to generate names. You can brainstorm Imperial world titles right at the gaming table or anywhere offline, and copying plus pasting functions without network access too. You only need connectivity to open the page initially; after that, every batch of grimdark planetary names is created directly on your device.' },
];

export default async function Planet40kNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="fortyk-planet" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the 40K Planet Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

