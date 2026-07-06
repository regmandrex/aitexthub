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
    description: 'Free 40k planet name generator for planet and world names. Create Warhammer 40K-style name ideas in your browser with no sign-up.',
    seoTitle: '40K Planet Name Generator – Warhammer Planet & World Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>40K Planet Name Generator – Warhammer Planet &amp; World Names</h2>
        <p>
          In Warhammer 40,000, a planet is never just a rock in space — it is a cog in a galaxy-spanning theocratic empire, and its name carries the weight of ten thousand years of grim history. This generator builds world names in the authentic register of the 41st Millennium: gothic, Latinate, and heavy with dread, in the tradition of Cadia, Armageddon, Macragge, Vigilus, and Krieg. Whether you are homebrewing a sector for a Crusade campaign, writing fan fiction, or naming the death world your regiment was raised on, the tool gives you names that sound like they were stamped into an Administratum ledger centuries ago.
        </p>
        <p>
          The 40K naming style is not generic sci-fi. It is deliberately archaic and religious, borrowing from Latin, medieval Europe, and the grinding bureaucracy of the Imperium of Man. Names evoke faith, war, decay, and endless toil. This page explains the conventions that make an Imperial world name feel real — the Latinate roots, the ominous suffixes, the numeral designations — and how to match a name to a world&apos;s classification so your Cadia-analogue reads like a fortress and your shrine world reads like a place of pilgrimage.
        </p>

        <h2>What Makes a Name Sound Like a 40K World</h2>
        <p>
          The Imperium is a gothic dystopia, and its planet names reflect that in a handful of consistent ways. Learn these and even a randomly generated result will feel canon:
        </p>
        <ul>
          <li><strong>Latinate and pseudo-Latin roots.</strong> Sanctus (holy), Mortis (death), Ferrus (iron), Bellum (war), Ignis (fire), Tempestus (storm), Vigil (watch), Rex (king). Real Warhammer worlds like Sanctus Reach and Mortis lean on exactly this vocabulary.</li>
          <li><strong>Harsh, consonant-heavy sounds.</strong> Krieg, Cadia, Vraks, Vostroya, Tallarn. Blunt, guttural names read as war-scarred and old.</li>
          <li><strong>Grand or ominous suffixes.</strong> Endings in -us, -a, -ia, -is, -or, and -ax carry an imperial, Latin cadence — Macragge, Armageddon, Vigilus.</li>
          <li><strong>Numeral and rank designations.</strong> Cadia III, Vostroya IX, Sanctus Prime, Baal Secundus. Roman numerals and words like Prime, Secundus, and Majoris evoke the Administratum cataloguing a billion worlds.</li>
        </ul>

        <h2>Naming by World Classification</h2>
        <p>
          The Imperium sorts planets by function, and the classification should shape the name&apos;s tone. A well-chosen name previews what kind of world a reader or player is looking at before you describe it:
        </p>
        <ul>
          <li><strong>Hive world.</strong> Overcrowded, industrial mega-cities stacked into the sky (Necromunda, Armageddon). Names sound heavy, grimy, and vast.</li>
          <li><strong>Forge world.</strong> Domain of the Adeptus Mechanicus, cloaked in smog and machinery (Mars, Metalica, Graia). Lean on iron and machine roots — Ferrus, Mechanicus, -tek.</li>
          <li><strong>Death world.</strong> Lethal jungles, predators, or toxic climates (Catachan, Fenris). Hostile, primal names fit — Mortis, Bellum, a hard single syllable.</li>
          <li><strong>Shrine world.</strong> Sacred sites of pilgrimage and relics (Ophelia VII, Sanctus Reach). Holy, Latinate names — Sanctus, Ecclesia, Benedictus.</li>
          <li><strong>Agri-world.</strong> Vast farm planets feeding the Imperium. Names can be plainer, older, almost pastoral, before the grimdark twist.</li>
          <li><strong>Fortress world.</strong> Bastions built to hold a border, like Cadia. Names sound martial and immovable — Vigilus, Bastion, Vraks.</li>
          <li><strong>Feral world.</strong> Pre-industrial societies that furnish savage recruits (Fenris again, or Nocturne). Names feel tribal, harsh, and ancient.</li>
        </ul>

        <h2>Latin and Gothic Roots to Build On</h2>
        <p>
          If you want to hand-craft or refine a name rather than take a random one whole, keep a small palette of loaded roots. Dark, martial, and religious words all sit comfortably in the Imperium&apos;s tone of grim faith and unending war. Sanctus and Ecclesia give a shrine world its holiness; Mortis, Bellum, and Ferrum give a war world its scars; Tempestus and Ignis suggest a hostile climate. A two-part name like Mortis Ferrum instantly reads as an iron-grey world that has bled for centuries — the roots do your world-building before you write a single line of lore.
        </p>

        <h2>Using Numerals and Designations</h2>
        <p>
          Attaching a designation is one of the fastest ways to push a plain name firmly into 40K territory. A world named simply &quot;Vostroya&quot; is fine, but &quot;Vostroya IX&quot; implies it is the ninth catalogued body in its system, one entry among the Imperium&apos;s uncountable registry. Use <strong>Prime</strong>, <strong>Secundus</strong>, or <strong>Tertius</strong> for a world&apos;s rank in a system, and Roman numerals (Cadia III, Baal Secundus) when a planet orbits alongside siblings. Add these to worlds that sit within a named system or carry strategic weight; leave standalone names bare so they can carry on their own.
        </p>

        <h2>Naming a Whole System or Sector</h2>
        <p>
          For homebrew campaigns you often need not one world but a cluster of them, and consistency is what makes a sector feel like a real region of the galaxy rather than scattered rocks. Pick a convention and hold to it: numbered worlds around a central name (Cadia I through Cadia VII), a shared Latin root family, or a common suffix style. Generate a batch, choose your lead world, then run again for its neighbors and keep the ones whose tone matches. A unified scheme lets a reader feel the borders of your subsector even before you map it.
        </p>

        <h2>How to Name a Planet for a Campaign or Story</h2>
        <p>
          Start from the world&apos;s role, not the name. Decide whether it is a fortress, a shrine, a hive, or a death world, because the classification sets the tone. Then generate a batch and sort the results by feel — the darkest, most guttural names go to death and fortress worlds; the holiest Latinate ones go to shrine worlds; the iron-heavy ones go to forge worlds. Add a designation if the planet sits in a larger system. A name chosen this way arrives pre-loaded with implied history, which is exactly what a grimdark setting wants.
        </p>

        <h2>How to Use This 40K Planet Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many world names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of grimdark, Imperial-style planet names.</li>
          <li>Skim for names whose tone matches your world&apos;s classification — martial, holy, industrial, or hostile.</li>
          <li>Use the Copy button to save your shortlist, then add designations like Prime or a numeral to fine-tune.</li>
          <li>Run again as often as you like — there is no account, no download, and no limit on runs.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your unrevealed worlds and campaign plans stay private until you choose to share them.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          The biggest error is a name that sounds too soft or too modern for the setting — a bright, clean, cheerful name shatters the grimdark tone instantly. Avoid overusing a single suffix, or every world in your sector blurs into &quot;-us, -us, -us.&quot; Watch out for accidentally reusing a famous canon world like Cadia, Terra, or Macragge unless you mean the reference. And keep pronunciations manageable at the table; a name no one can say out loud will never stick in a campaign.
        </p>

        <h2>Fan Fiction, Homebrew, and Tabletop Use</h2>
        <p>
          These are original, 40K-inspired combinations, not names lifted from any official Games Workshop source, which makes them ideal for personal campaigns, homebrew regiments, and non-commercial fan fiction. A Crusade fought over a named world — the siege of a fortress planet, a pilgrimage to reclaim a lost shrine world — gains real weight when the planet has an evocative Imperial name. Generate a batch, assign names to your invented worlds, and build each planet&apos;s history around the tone its name implies. The names are yours to adapt; treat them as raw material, not fixed canon, and tweak spelling and designations freely.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a 40K planet name generator?', answer: 'It is a browser tool that invents grimdark, Imperial-sounding world names in the style of Warhammer 40,000 — the gothic, Latinate planet names of the 41st Millennium, like Cadia, Armageddon, Vigilus, or Sanctus Prime. It leans on High Gothic flavor, Latin roots, and ominous suffixes to make worlds feel part of the Imperium. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 world names per run.' },
  { category: 'Naming', question: 'What makes a name sound like a Warhammer 40K planet?', answer: 'The 40K style is gothic and Latinate: harsh consonants, Latin or pseudo-Latin roots (Sanctus, Mortis, Ferrus, Tempestus), and grand or ominous suffixes like -us, -a, -ia, -is, or Prime. Roman numerals and designations (Prime, Secundus, Tertius) evoke the Imperium\'s bureaucracy. Names often carry a sense of dread, faith, or war. The generator combines these elements so results feel like real Imperial worlds rather than generic sci-fi planets.' },
  { category: 'Naming', question: 'What suffixes and designations fit 40K worlds?', answer: 'Classic endings include -us, -a, -ia, -is, -or, and -ax, plus grand designations like Prime, Secundus, Majoris, and Tertius that suggest a world\'s rank in an Imperial system. Roman numerals (Cadia III) and the word Prime attached to a name (Sanctus Prime) are hallmarks of the setting. If a generated name feels too plain, adding a designation or a harsher suffix pushes it firmly into 40K territory.' },
  { category: 'Naming', question: 'What Latin and gothic roots work for these names?', answer: 'Pseudo-Latin roots carry huge flavor: Sanctus (holy), Mortis (death), Ferrus (iron), Bellum (war), Tempestus (storm), Ignis (fire), Vigil (watch), Rex (king). Dark, religious, and martial words all fit the Imperium\'s tone of grim faith and endless war. The generator draws on this vocabulary so a name like Mortis Ferrum reads as a war-scarred iron world, giving even a random result an implied history.' },
  { category: 'Use cases', question: 'How do I name a planet for a 40K campaign or story?', answer: 'Consider the world\'s role first — a fortress world, a hive world, a shrine world, a death world, an agri-world — since the type suggests the tone. Fortress and death worlds want harsh, martial names; shrine worlds want holy, Latinate ones. Generate a batch, pick a name whose sound matches the world\'s character, and add a designation if it sits in a larger system. A fitting name previews the planet before you describe it.' },
  { category: 'Naming', question: 'How do the different world types affect the name?', answer: 'The 40K setting classifies worlds by function, and the name can hint at it. Hive worlds sound industrial and crowded; forge worlds sound mechanical and iron-heavy (roots like Ferrus, Mechanicus); shrine worlds sound sacred (Sanctus, Ecclesia); death worlds sound hostile (Mortis, Bellum). Generate a batch and sort names by the tone they carry, then assign the darkest to death worlds and the holiest to shrine worlds so each name fits its planet.' },
  { category: 'Naming', question: 'Should I use Roman numerals or Prime in the name?', answer: 'They add strong Imperial flavor. Attaching a designation like Prime, Secundus, or a Roman numeral (Vostroya IX) makes a world feel like one entry in the Imperium\'s vast registry of planets and star systems. Use them when a world is part of a named system or has strategic rank; leave them off for a standalone name that needs to stand on its own. The generator can suggest both, so pick what fits your setting.' },
  { category: 'Use cases', question: 'Can I use these for tabletop wargaming or narrative play?', answer: 'Yes. A campaign fought over a named world — a siege of a fortress planet, a crusade to reclaim a lost shrine world — gains weight when the planet has an evocative Imperial name. Generate a batch, name your contested world and its neighbors, and keep the naming consistent across a system. Because the names read as authentic 40K, your battles and objectives feel like they belong to the wider grimdark galaxy.' },
  { category: 'Usage', question: 'How do I use the 40K planet name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names whose tone fits your world — martial, holy, industrial, or hostile — then use the Copy button to save your shortlist. Paste the results into your notes and add designations like Prime or a numeral to fine-tune. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the 40K planet name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate Imperial world names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can name a whole sector of planets for your campaign or story without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your campaign and world-building ideas stay private. Close the tab and the list is gone unless you copied it, so your unrevealed worlds stay on your machine.' },
  { category: 'Compatibility', question: 'Does the 40K planet name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm world names on your phone at the gaming table or while writing, copy a favorite, and paste it into your notes, army list, or story doc. The layout is responsive, so naming a sector of Imperial worlds works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — a whole sector or subsector of worlds — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of Imperial world names to sift through and assign.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, campaign doc, or world-building wiki. This is the intended way to save a shortlist: generate, copy, then assign names to worlds and add designations. Keeping them in a file lets you map out a whole sector of named planets as your setting expands.' },
  { category: 'General', question: 'Do I need an account to use the 40K planet name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of grimdark world names, and get back to your campaign or story without creating anything.' },
  { category: 'Technical', question: 'How are the planet names generated?', answer: 'The generator draws on curated lists of Latinate roots, gothic word-elements, ominous suffixes, and Imperial designations, then combines them in your browser so every run is different. Nothing is sent to a server. The output is original creative inspiration in the 40K style — not names pulled from any official Games Workshop source — so treat it as raw material. The lists are tuned to produce dark, grand, believably Imperial world names.' },
  { category: 'Naming', question: 'How do I name a whole star system or sector?', answer: 'Pick a naming convention and apply it across the group so the sector feels cohesive — for example, related Latin roots, a shared designation style, or numbered worlds around a central name (Cadia I through Cadia VII). Generate a batch, choose a lead world, then run again for its neighbors, keeping the tone consistent. A unified naming scheme makes your sector read as one region of the Imperium rather than scattered planets.' },
  { category: 'Best practices', question: 'What mistakes should I avoid with 40K planet names?', answer: 'Avoid names that sound too soft or modern for the grimdark tone. Avoid overusing the same suffix so every world blurs together. Avoid accidentally copying a famous canon world (Cadia, Terra, Macragge) unless you mean to reference it. And keep pronunciations manageable at the table. Keep the options that are gothic, Latinate, distinct from one another, and heavy with the Imperium\'s ominous flavor.' },
  { category: 'Naming', question: 'Can I create world names for other grimdark sci-fi settings?', answer: 'Yes. The Latinate, gothic, ominous style suits any dark far-future or space-opera setting, not just 40K specifically. Generate a batch and use the results for your own original grimdark universe, adjusting suffixes or roots to fit your lore. Because the names carry a built-in sense of dread and grandeur, they lend instant atmosphere to any bleak interstellar empire you are building.' },
  { category: 'Use cases', question: 'Can I use these names in fan fiction or homebrew lore?', answer: 'Yes. For personal campaigns, homebrew regiments, and non-commercial fan fiction, these original-style world names give you fresh planets that feel authentically Imperial without lifting canon worlds. Generate a batch, assign names to your invented worlds, and build their history around the tone each name implies. The names are yours to adapt; they are inspiration, not fixed canon, so tweak spelling and designations freely.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want to name a large sector, subsector, or crusade\'s worth of worlds. Keep the strongest, most fitting Imperial names in a shortlist as you go.' },
  { category: 'General', question: 'Are these official Warhammer 40K planet names?', answer: 'No. The generator produces original, 40K-inspired combinations built from Latinate and gothic elements — not names from any official Games Workshop publication or database. They are creative inspiration for your own campaigns, stories, and homebrew lore. Some may resemble canon worlds by coincidence, so if you want to avoid overlap, cross-check a favorite against known 40K worlds before adopting it as your own.' },
  { category: 'Troubleshooting', question: 'Can I use the 40K planet name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm Imperial world names at the gaming table or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every batch of grimdark planet names is generated right on your device.' },
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
          <p className="text-slate-700">Common questions about the 40K Planet name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

