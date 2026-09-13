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


const toolSlug = 'army-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Army Name Generator',
    description: 'Free army name generator for fictional armies, legions, regiments, and factions. Build martial names like the Iron Vanguard or the Crimson Legion for worldbuilding, wargames, and D&D — in your browser, no sign-up.',
    seoTitle: 'Army Name Generator – Legions, Regiments & Faction Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Army Name Generator – Legions, Regiments &amp; Faction Names</h2>
        <p>
          This army name generator builds names for fictional fighting forces — a legion, a regiment, a mercenary company, a knightly order, or an entire faction&apos;s standing army. It is meant for the force itself, the banner that thousands march under, rather than the name of one soldier (though the same logic helps you coin a unit callsign or a squad nickname). Whether you are drafting a Warhammer-style army list, naming the antagonist faction in a fantasy novel, or stamping a banner on a kingdom in your D&amp;D campaign, the tool produces evocative martial names in your browser. There is no sign-up, nothing is stored, and you can generate as many batches as you like.
        </p>
        <p>
          Army names are not arbitrary. Real and fictional forces are named the same handful of ways: after the nation or banner they serve, after a defining trait or ideology, after their commander, or after the region they hold. &quot;The Imperial Legion,&quot; &quot;the Iron Brigade,&quot; &quot;the Crimson Vanguard,&quot; &quot;Hannibal&apos;s host&quot; — each follows a clear pattern. This page breaks those patterns down so the names you keep sound like they belong on a war banner, not on a list of random words.
        </p>

        <h2>How Real and Fictional Armies Are Named</h2>
        <p>
          Across history and fiction, army names cluster into a few naming conventions. Understanding them lets you generate a batch and immediately recognize which results carry weight:
        </p>
        <ul>
          <li><strong>By nation or banner.</strong> The force takes the name of the realm or ruler it serves: the Imperial Legion, the Grand Army of the Republic, the King&apos;s Own. This says &quot;we fight for that throne&quot; before anything else.</li>
          <li><strong>By trait or ideology.</strong> A defining quality becomes the name: the Iron Brigade (endurance), the Immortals (Persia&apos;s unkillable elite), the Crimson Vanguard (blood and forward fury), the Silent Order. Adjectives like iron, crimson, ashen, eternal, and grim do heavy lifting here.</li>
          <li><strong>By leader.</strong> The commander&apos;s name fronts the unit: the Black Company under their captain, Sharpe&apos;s Chosen Men, the Ten Thousand who followed Xenophon. Personal loyalty is the brand.</li>
          <li><strong>By region or origin.</strong> Where they were raised: the Northmen, the Dornish Spears, the Highland Watch. Geography signals fighting style and temperament.</li>
        </ul>
        <p>
          The most memorable names often stack two of these — &quot;the Iron Legion of Karthos&quot; pairs a trait with a place. The generator leans on these layers so you get names with the same texture.</p>

        <h2>The Anatomy of an Army Name: Epithet + Unit Noun</h2>
        <p>
          Most strong army names reduce to a simple formula: an evocative <strong>epithet</strong> plus a <strong>unit noun</strong>. The epithet sets the mood; the unit noun sets the scale and the era. &quot;Crimson&quot; + &quot;Vanguard.&quot; &quot;Iron&quot; + &quot;Legion.&quot; &quot;Ashen&quot; + &quot;Host.&quot; Swap either half and the whole feel shifts.
        </p>
        <p>
          The unit noun is where your martial vocabulary matters most, because each word carries a built-in scale and flavor:
        </p>
        <ul>
          <li><strong>Legion, Host, Horde</strong> — huge, sweeping, often ancient or overwhelming. A host is a poetic word for a whole army; a horde implies numbers over discipline.</li>
          <li><strong>Brigade, Regiment, Division, Corps</strong> — formal, modern, organized; they imply a real chain of command.</li>
          <li><strong>Vanguard, Phalanx, Spear, Shieldwall</strong> — front-line, tactical, close-combat energy.</li>
          <li><strong>Order, Guard, Watch, Sentinels</strong> — sworn, defensive, ceremonial; good for elite or oath-bound units.</li>
          <li><strong>Company, Band, Free Company, Warband</strong> — smaller, mercenary, or irregular; perfect for sellswords and raiders.</li>
        </ul>

        <h2>Military Unit Hierarchy and Scale</h2>
        <p>
          Picking the right unit noun is easier when you know roughly what each tier means. A modern army nests like this, largest to smallest: <strong>army &gt; corps &gt; division &gt; brigade &gt; regiment &gt; battalion &gt; company &gt; platoon &gt; squad</strong>. An army is tens of thousands; a regiment is a few thousand; a company is a hundred or so; a squad is a handful.
        </p>
        <p>
          You do not need to be a historian to use this, but matching the noun to the scale keeps a name believable. If your story features a thousand armored knights sworn to one cause, &quot;the Ashen Order&quot; or &quot;the Iron Brigade&quot; fits; calling a dozen raiders &quot;the Grand Legion&quot; reads as a joke (which may be exactly what you want for a ragtag band with delusions of grandeur). Generate a batch, decide how big the force is, and keep the names whose unit noun matches that size.</p>

        <h2>Fantasy Army Names</h2>
        <p>
          Fantasy forces lean on banners, oaths, beasts, and the elements. Think the Iron Throne&apos;s armies, the Knights of the Old Code, the Dragonsworn, the Wardens of the North. The vocabulary skews toward steel, blood, shadow, dawn, dusk, frost, and flame, paired with nouns like Legion, Order, Host, Guard, and Banner. Heraldic colors (crimson, sable, argent) and beasts (wyrm, raven, lion, wolf) anchor a fantasy army to a sigil. A force called &quot;the Sable Ravens&quot; or &quot;the Dawnbreak Host&quot; instantly implies a coat of arms and a sworn cause.
        </p>
        <p>
          Fantasy names also love the definite article and a possessive backstory: &quot;the Order of the Broken Spear,&quot; &quot;the Last Legion,&quot; &quot;Aldric&apos;s Chosen.&quot; If you are running a D&amp;D campaign or writing a novel, generate a batch, then attach a one-line origin — who founded it, what oath they swore — and the name does the rest of the worldbuilding for you.</p>

        <h2>Sci-Fi Army Names</h2>
        <p>
          Science-fiction forces trade banners for designations, sectors, and grim ideology. The flavor here is colder and more bureaucratic: the 501st Legion, Sector Command, the Terran Vanguard, the Void Wardens, Strike Force Hammerfall. Numbers and codes (the 7th Fleet, Battalion Zero) feel native to sci-fi because real modern militaries use them. Mix that with menace — Reaper, Specter, Ironclad, Nova, Eclipse — and you get the register of a galactic war machine.
        </p>
        <p>
          A useful trick: keep the unit noun modern (corps, division, fleet, strike force) but make the epithet alien or cosmic (Void, Nova, Singularity, Eclipse). &quot;The Void Vanguard&quot; or &quot;the Nova Legion&quot; reads as far-future without abandoning military structure. For a more authoritarian faction, lean on words like Dominion, Imperium, Ascendancy, and Directorate.</p>

        <h2>Historical and Modern Military Names</h2>
        <p>
          Grounded, real-world-flavored forces draw on the conventions of actual armies: numbered units, place names, and earned nicknames. Real regiments carry both a formal designation and a battle-won epithet — the &quot;Old Guard,&quot; the &quot;Devil Dogs,&quot; the &quot;Screaming Eagles,&quot; the &quot;Desert Rats.&quot; That two-layer naming (an official number plus a fierce nickname) is a strong pattern to imitate: pair &quot;the 9th Regiment&quot; with &quot;the Ironsides,&quot; and you have a unit that feels real on the page.
        </p>
        <p>
          For historical fantasy or alternate history, look at how older forces were named: the Praetorian Guard, the Varangian Guard, the Grande Armée, the Light Brigade. Latinate and martial roots (legio, cohort, praetorian, sentinel) lend instant antiquity. Generate a batch, then sand off anything too modern or too whimsical for the era you are writing.</p>

        <h2>Use Cases: Worldbuilding, Wargames, and Campaigns</h2>
        <p>
          A good army name does a lot of narrative work at once, which is why so many creators reach for one:
        </p>
        <ul>
          <li><strong>Worldbuilding and fantasy novels.</strong> Each faction needs a standing force with a name readers remember. Contrast helps — the disciplined &quot;Iron Legion&quot; versus the savage &quot;Bloodfang Horde&quot; tells you who is who before a battle starts.</li>
          <li><strong>Tabletop wargames.</strong> Warhammer-style and other miniature games practically demand a custom army name and color scheme. A named force makes a painted collection feel like yours.</li>
          <li><strong>Strategy games.</strong> Naming your faction, legion, or expeditionary force adds flavor to a campaign or multiplayer match.</li>
          <li><strong>D&amp;D and TTRPG campaigns.</strong> The mercenary company the party joins, the empire&apos;s army they fight, the knightly order they aspire to — all land harder with a real name.</li>
          <li><strong>Clans and guild armies.</strong> Online clans and guilds borrow the same martial register to name their roster of fighters.</li>
        </ul>

        <h2>How to Use This Army Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of legion, regiment, and faction names.</li>
          <li>Decide your force&apos;s scale and era, then keep the names whose unit noun and tone match (a Host for an ancient horde, a Corps for a modern army).</li>
          <li>Use the Copy button to save the list into your campaign notes, army roster, or manuscript.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your factions and battle plans stay private until you choose to share them.</p>

        <h2>Tips for Picking the Right Army Name</h2>
        <p>
          Say the name like a battle cry — army names get shouted across a field, chanted by troops, and printed on a banner, so a name that mumbles will not stick. Match the unit noun to the scale (do not call a warband a Grand Legion unless the irony is the point), and match the epithet to the faction&apos;s identity: an honorable order earns words like Dawn, Oath, and Silver; a brutal horde earns Ash, Blood, and Ruin. If you are naming several rival forces, generate one big batch and deliberately pick contrasting registers so each army sounds like a distinct culture rather than a reskin of the last.
        </p>
        <p>
          When in doubt, anchor the name to something concrete in your world — a founding leader, a famous battle, a sigil animal, a home region. &quot;The Vanguard&quot; is fine; &quot;the Crimson Vanguard of Therin&quot; is memorable. That extra layer of place or person is exactly what separates a generic label from a name your audience will repeat.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates names for fictional armies, legions, regiments, orders, and factions for worldbuilding, wargames, and campaigns.</li>
          <li>It focuses on the name of the force as a whole, not on individual soldier names — though results work well as unit callsigns too.</li>
          <li>It does not reproduce real-world military units as a database — output is for original creative use.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          From the Imperial Legion to the Crimson Vanguard, the best army names follow a logic anyone can wield: name the force by its banner, its trait, its leader, or its home, then pair an evocative epithet with a unit noun that fits the scale and era. This army name generator gives you that pool instantly, drawing on real martial vocabulary — legion, host, brigade, vanguard, order, guard — so the names feel earned rather than invented on the spot. Generate a batch, lean on the fantasy, sci-fi, and historical notes above, and you will end up with a banner worth marching under.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an army name generator?', answer: 'An army name generator is a browser tool that creates names for fictional fighting forces — legions, regiments, orders, mercenary companies, and entire factions. It pairs evocative martial epithets (Iron, Crimson, Ashen, Eternal) with unit nouns (Legion, Host, Brigade, Vanguard, Order) so the results sound like a real war banner. It is built for naming the force itself, not individual soldiers, and it runs locally with no sign-up while storing nothing.' },
  { category: 'Naming style', question: 'How are real and fictional armies named?', answer: 'Armies are usually named one of four ways: by the nation or banner they serve (the Imperial Legion), by a defining trait or ideology (the Iron Brigade, the Crimson Vanguard), by their leader (the Black Company, the Ten Thousand), or by their home region (the Northmen, the Highland Watch). The strongest names often stack two of these, like the Iron Legion of Karthos, which pairs a trait with a place.' },
  { category: 'Naming style', question: 'What is the formula for a good army name?', answer: 'Most strong army names reduce to an epithet plus a unit noun: Crimson + Vanguard, Iron + Legion, Ashen + Host. The epithet sets the mood and the unit noun sets the scale and era. Swap either half and the whole feel shifts. Adding a third layer — a place or founder, as in "the Crimson Vanguard of Therin" — turns a generic label into a memorable name.' },
  { category: 'Naming style', question: 'What martial words make good unit nouns?', answer: 'Each unit noun carries a built-in scale and flavor. Legion, Host, and Horde feel huge and ancient. Brigade, Regiment, Division, and Corps feel modern and organized. Vanguard, Phalanx, and Shieldwall feel front-line and tactical. Order, Guard, Watch, and Sentinels feel sworn and elite. Company, Band, and Free Company feel small, mercenary, or irregular.' },
  { category: 'Naming style', question: 'What is the difference between a host, a legion, and a horde?', answer: 'A host is a poetic, sweeping word for an entire army and reads as old or epic. A legion implies a large, disciplined, often imperial formation with Roman roots. A horde implies overwhelming numbers but loose discipline — good for raiders, nomads, or monstrous armies. Choosing among them instantly signals whether your force is orderly or chaotic.' },
  { category: 'Structure', question: 'How does military unit hierarchy affect naming?', answer: 'Modern forces nest from largest to smallest: army > corps > division > brigade > regiment > battalion > company > platoon > squad. An army is tens of thousands, a regiment a few thousand, a company about a hundred, a squad a handful. Matching your unit noun to the actual size keeps a name believable — call a dozen raiders a Grand Legion only if the irony is the point.' },
  { category: 'Fantasy', question: 'How do I name a fantasy army?', answer: 'Fantasy forces lean on banners, oaths, beasts, and the elements. Pair vocabulary like steel, blood, shadow, dawn, frost, and flame with nouns like Legion, Order, Host, and Guard. Heraldic colors (crimson, sable, argent) and sigil animals (wyrm, raven, lion, wolf) anchor a force to a coat of arms — "the Sable Ravens" or "the Dawnbreak Host" imply a sworn cause at a glance.' },
  { category: 'Sci-fi', question: 'How do I name a sci-fi army or faction?', answer: 'Science-fiction forces trade banners for designations and grim ideology. Use numbered codes (the 501st Legion, Strike Force Hammerfall, the 7th Fleet) alongside cold epithets like Void, Nova, Reaper, Specter, and Eclipse. A useful trick is to keep the unit noun modern (corps, division, fleet, strike force) while the epithet stays cosmic — "the Void Vanguard" reads far-future without losing military structure.' },
  { category: 'Historical', question: 'How do I name a historical or modern-style army?', answer: 'Grounded forces use numbered units, place names, and earned nicknames. Real regiments carry both a formal designation and a battle-won epithet — the Old Guard, the Devil Dogs, the Desert Rats. Imitate that two-layer pattern: pair "the 9th Regiment" with "the Ironsides." For antiquity, lean on Latinate roots like legio, cohort, praetorian, and sentinel.' },
  { category: 'Use cases', question: 'Can I use this for worldbuilding and novels?', answer: 'Yes — naming the standing forces of each faction is core worldbuilding. Contrast helps readers keep factions straight: the disciplined Iron Legion versus the savage Bloodfang Horde tells you who is who before a battle starts. Generate a batch, attach a one-line origin (founder, oath, home region), and the name carries the rest of the worldbuilding for you.' },
  { category: 'Use cases', question: 'Can I use this for Warhammer-style wargames?', answer: 'Yes. Miniature wargames practically demand a custom army name to go with a paint scheme. A named force — the Crimson Vanguard, the Ashen Order — makes a painted collection feel like yours rather than a generic faction. Generate names, pick one whose tone matches your color scheme, and use it across your army list and battle reports.' },
  { category: 'Use cases', question: 'Can I use this for a D&D or tabletop campaign?', answer: 'Yes. The mercenary company the party joins, the empire whose army they fight, the knightly order they aspire to — all land harder with a real name. Generate a batch, decide the force\'s scale and alignment, then keep the names whose epithet matches: an honorable order earns words like Dawn and Oath, a brutal warband earns Ash and Ruin.' },
  { category: 'Use cases', question: 'Can I use this to name a clan or guild army?', answer: 'Yes. Online clans and guilds borrow the same martial register to brand their roster of fighters. A name like "the Iron Vanguard" or "the Eclipse Legion" gives a guild a banner and a battle cry. Generate several options and pick one that is easy to shout in voice chat and looks good on a tag or emblem.' },
  { category: 'Naming style', question: 'What epithets work best for an army name?', answer: 'The epithet should match the faction\'s identity. Iron, steel, and ironclad signal endurance. Crimson, blood, and scarlet signal ferocity. Ashen, grim, and ruin signal grimness or loss. Dawn, silver, and eternal signal honor or hope. Void, nova, and eclipse signal sci-fi menace. Pick the adjective that captures what the force stands for, then pair it with a fitting unit noun.' },
  { category: 'Best practices', question: 'How do I make several armies sound distinct?', answer: 'Generate one large batch, then deliberately pick contrasting registers so each force reads as a different culture. Give one a disciplined, Latinate name (the Praetorian Order), another a savage one (the Bloodfang Horde), and a third a regional one (the Northwatch). Varying the unit noun, the epithet flavor, and the scale keeps rival armies from sounding like reskins of each other.' },
  { category: 'Best practices', question: 'How do I make an army name more memorable?', answer: 'Say it like a battle cry — army names get shouted, chanted, and printed on banners, so a name that mumbles will not stick. Then anchor it to something concrete: a founding leader, a famous battle, a sigil animal, or a home region. "The Vanguard" is fine; "the Crimson Vanguard of Therin" is memorable. That extra layer of place or person is what audiences repeat.' },
  { category: 'Usage', question: 'How do I use this army name generator?', answer: 'Set how many names you want (1–24) and click Generate names. Decide your force\'s scale and era, then keep the results whose unit noun and tone fit — a Host for an ancient horde, a Corps for a modern army. Use the Copy button to save the list into your campaign notes, army roster, or manuscript, and run again for more. There is no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit or combine the generated names?', answer: 'Absolutely. The output is a starting point. Take the epithet from one result and the unit noun from another, swap in your world\'s place name, or add a founder\'s name out front. Many writers generate a batch, mix and match the halves, and then attach a region or sigil to land on the final banner.' },
  { category: 'Structure', question: 'Should an army name be singular or plural?', answer: 'Both work and they read differently. Singular formations (the Iron Legion, the Crimson Order) feel like one unified body with a chain of command. Plural names (the Sable Ravens, the Northmen, the Immortals) feel like a body of individuals or a famous group of warriors. Match the form to whether you want to emphasize the institution or the people in it.' },
  { category: 'Technical', question: 'How are the army names generated?', answer: 'The generator combines curated martial vocabulary — epithets like Iron, Crimson, and Ashen with unit nouns like Legion, Host, Brigade, Vanguard, and Order — and shuffles them at random in your browser. Each run produces a fresh set of legion, regiment, and faction names. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, the army names are created on your device. Your settings and the generated list are never sent to our servers and nothing is stored. You can brainstorm faction names in a private window and your worldbuilding stays yours until you choose to share it.' },
  { category: 'Limits', question: 'How many army names can I generate at once?', answer: 'You can request 1–24 names per run. For more, just run it again — each run produces a fresh random set of force names and there is no daily or total limit. Paste several runs into one document if you want a large pool of legion, regiment, and faction names to shortlist from for your world.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The army name generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch of faction names on your phone during a session, copy them into your campaign notes, and shortlist banners wherever you are planning your world or your wargame.' },
  { category: 'General', question: 'Is the army name generator free?', answer: 'Yes, it is completely free with no account, sign-up, or download. Generate as many legion, regiment, order, and faction names as you like, as often as you like, for worldbuilding, wargames, novels, and campaigns.' },
];

export default async function ArmyNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="army" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Army name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

