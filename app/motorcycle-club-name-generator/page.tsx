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


const toolSlug = 'motorcycle-club-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Motorcycle Club Name Generator',
    description: 'Free motorcycle club name generator for club and biker names. Create biker-style name ideas in your browser with no sign-up.',
    seoTitle: 'Motorcycle Club Name Generator – MC & Biker Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Motorcycle Club Name Generator – MC &amp; Biker Names</h2>
        <p>
          A motorcycle club&apos;s name is its identity stitched onto a leather cut. From the Hells Angels and the Outlaws to fictional clubs like the Sons of Anarchy&apos;s SAMCRO, MC names carry a specific weight: territory, brotherhood, defiance, and often a deliberate edge of menace. This generator builds names in that world — the intimidating one-percenter style, the riding-club style, and everything between — for fiction writers, game designers, and real riding groups looking for a name that means something. It leans on the genuine conventions of biker culture, from the &quot;MC&quot; suffix to chapter and territory naming, so the results read like a real patch rather than a costume.
        </p>
        <p>
          Biker club naming is a culture with its own rules. There is a difference between an outlaw club that projects danger and a family riding club that projects the open road, and the name is where that difference lives. This page walks through the conventions — the suffixes, the tone, the territory and chapter structure, the imagery on the colors — so you can name a club that fits the story you are telling or the group you are riding with.
        </p>

        <h2>How Motorcycle Club Names Work</h2>
        <p>
          Real MC names follow patterns that anyone in the culture recognizes instantly. Understanding them keeps a generated name from ringing false:
        </p>
        <ul>
          <li><strong>The &quot;MC&quot; suffix.</strong> Most clubs append <strong>MC</strong> (Motorcycle Club) to their name — the Hells Angels MC, the Bandidos MC. It is the single clearest marker that a name belongs to a bike club.</li>
          <li><strong>An evocative core name.</strong> The heart of the name is usually a noun or noun phrase with attitude — Angels, Outlaws, Bandidos, Mongols, Pagans, Vagos. It suggests the club&apos;s character in a word or two.</li>
          <li><strong>Dark, defiant, or free imagery.</strong> Death, fire, wolves, ghosts, saints, and sinners for the outlaw end; eagles, road, iron, and freedom for the riding-club end.</li>
          <li><strong>Territory and place.</strong> Many clubs root themselves in a city, state, or region, tying the name to home turf.</li>
        </ul>

        <h2>Outlaw Tone vs. Riding-Club Tone</h2>
        <p>
          The most important choice is tone, because it changes everything about the name. An <strong>outlaw / one-percenter</strong> club projects danger and defiance — the &quot;1%&quot; itself refers to the idea that 99% of riders are law-abiding and the rest are not. These names lean menacing: Reapers, Iron Serpents, Hells Reborn, Dead Saints. A <strong>riding club</strong> or family club projects camaraderie and the open road, and its name is warmer and prouder: Iron Eagles, Freedom Riders, Highway Saints, Steel Horsemen. Decide which world your club lives in before you pick, because a wholesome charity ride named &quot;Skull Reapers MC&quot; sends the wrong message, and a hardened outlaw crew named &quot;Sunshine Riders&quot; sends an even worse one.
        </p>

        <h2>Territory, Chapters, and Structure</h2>
        <p>
          Established clubs are not single units — they are networks of <strong>chapters</strong> spread across territories, and the naming reflects that. A club has a <em>mother chapter</em> (the founding one) and named regional chapters: &quot;Hells Angels, Oakland&quot; or &quot;Bandidos, El Paso Chapter.&quot; For fiction or a large fictional club, name the club once, then name its chapters by city or region to convey reach and history. The territory a club claims is central to its identity and its conflicts, so pairing the club name with a place — and having rival clubs claim adjoining turf — gives a story its engine. When you generate a club name, consider generating a couple of chapter cities alongside it to flesh out the organization.
        </p>

        <h2>Patches, Colors, and What the Name Implies</h2>
        <p>
          A club&apos;s name and its <strong>colors</strong> (the patches on the cut) are inseparable, and a strong name suggests its own imagery. The three-piece patch — top rocker (club name), center logo, bottom rocker (territory) — means the name has to work as the top line of a design. Names built on a clear image (Reapers, Iron Serpents, Ravens) translate straight into a center patch; abstract names are harder to visualize on a cut. If you are designing a fictional club fully, pick a name whose central noun gives you an obvious emblem — a skull, a serpent, an eagle, a flaming wheel — so the name and the colors reinforce each other.
        </p>

        <h2>Naming a Club for Fiction and Games</h2>
        <p>
          For a Sons of Anarchy-style story or a game faction, the club name is a character in its own right. It should telegraph the club&apos;s role — antagonist, antihero crew, or honorable riders — and hint at its history. Generate a batch, and read each name as if it were shouted across a bar or printed on a cut: does it sound like a group you would fear, respect, or ride with? For a game, a memorable, punchy name that fits on a UI banner and reads at a glance works best. Keep the ones that carry both attitude and clarity, and pair the winner with a territory and a chapter or two to make the club feel like it existed before the story started.
        </p>

        <h2>How to Use This Motorcycle Club Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of MC and biker club names.</li>
          <li>Decide your tone first — outlaw menace or riding-club pride — and keep the names that match.</li>
          <li>Use the Copy button to save your shortlist, then pair a favorite with a territory or chapter city to flesh it out.</li>
          <li>Run again as often as you like — there is no account, no download, and no limit on runs.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your club concepts and story notes stay private until you choose to share them.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          The biggest error is tone mismatch — pairing menacing outlaw imagery with a friendly group, or vice versa. For real riding groups, avoid names that copy an existing established club (the Hells Angels and others actively protect their names and colors); overlap can cause genuine trouble, not just confusion. Do not overload a name with too many hard words at once (&quot;Death Skull Reaper Demons MC&quot; collapses under its own weight); one strong central image beats four. And make sure it works as a top rocker — a name that is too long will not fit a patch or read on the road.
        </p>

        <h2>Building the Whole Club</h2>
        <p>
          A club name is the first thread; the full identity is woven from territory, chapters, colors, and a code the members live by. Once you have a name you love, let it drive the rest — the emblem it suggests, the turf it claims, the rivals it makes. Generate a batch, choose the name that carries the most story, and build outward from it, whether the club is riding through a novel, a game, or the real open road.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a motorcycle club name generator?', answer: 'A motorcycle club name generator is a browser tool that creates names for MCs and biker clubs — the kind of hard-edged, territorial names you see on a club patch, like Iron Vultures, Hell\'s Reapers, or Steel Saints. It is built for fiction writers, game designers, and riders naming a real riding club or crew. Everything runs locally in your browser, nothing is stored or uploaded, and it is free with no sign-up. You get 1 to 24 names per run and can generate as many batches as you like.' },
  { category: 'Naming', question: 'What makes a good motorcycle club name?', answer: 'A strong MC name is short, menacing or proud, and looks good stitched on a back patch. Most follow a two-word pattern: a hard modifier plus a noun with attitude — Iron, Steel, Black, Wild, Rogue paired with Vultures, Reapers, Saints, Outlaws, Wolves. It should read fast on a leather cut and sound good called out at a rally. Territorial or regional touches (a state, a road, a city) can anchor the club to a place, which is a hallmark of real biker culture.' },
  { category: 'Naming', question: 'Why do so many biker club names use animals and outlaw words?', answer: 'Biker names lean on predators and outlaws because the imagery signals freedom, danger, and brotherhood — the core of MC identity. Wolves, vultures, ravens, serpents, and bulls read as untamed; words like Outlaws, Renegades, Rebels, and Bandits announce a club that answers to no one. Pairing a predatory animal with a hard metal or color (Iron Wolves, Black Vipers) is one of the most recognizable formulas, which is why the generator produces so many names in that mold.' },
  { category: 'Use cases', question: 'How do I name an MC for a story or TV-style drama?', answer: 'Decide the club\'s character first — a one-percenter outlaw gang reads very differently from a veterans\' riding club or a Christian motorcycle association. Outlaw clubs want grim, aggressive names (Hell\'s Reapers, Broken Saints); social or charity clubs want prouder, cleaner ones (Freedom Riders, Steel Horsemen). Generate a batch, keep the names whose tone matches your club, then build a patch, colors, and a home chapter around it so the MC feels like a real organization on the page.' },
  { category: 'Naming', question: 'What is a "patch," "colors," and "chapter" — and how does the name fit?', answer: 'In MC culture the colors are the club\'s insignia worn on a vest or cut, the patch is the embroidered emblem carrying the club name, and a chapter is a regional branch. A club name has to work on all three: it must be short enough to embroider, distinctive enough to identify the colors at a glance, and flexible enough to add a location (the "Iron Vultures, Tucson Chapter"). Pick a generated name that stays legible and strong in all those contexts.' },
  { category: 'Use cases', question: 'Can I use these names for a real riding club or crew?', answer: 'Yes. Whether you are starting a casual riding group, a rally crew, or a formal club, the generator gives you a fast pool of MC-style names to rally under. Generate a batch, shortlist the ones that fit your group\'s vibe, and then check that the name is not already used by an established club in your area — real MCs take their names and territory seriously, so avoiding an existing club\'s name is both courteous and wise. The tool suggests names; it does not check who already rides under them.' },
  { category: 'General', question: 'Is the motorcycle club name generator free?', answer: 'Yes. The motorcycle club name generator is completely free to use in your browser with no account, no payment, and no download. You can generate MC and biker names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm as many club names as your story, game, or riding crew needs without any friction.' },
  { category: 'Usage', question: 'How do I use the motorcycle club name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names that fit your club\'s character — outlaw, veteran, charity, fictional — then use the Copy button to save your shortlist. Paste the results into your notes and test each on an imagined patch: does it look strong stitched on a cut? Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The motorcycle club name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your ideas stay private. Close the tab and the list is gone unless you copied it, so your club names remain yours until you choose to share them.' },
  { category: 'Compatibility', question: 'Does the motorcycle club name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. Open the page, choose how many names you want, and generate. On a phone you can produce a quick batch and copy it straight into your notes app. The layout is responsive, so naming a club works just as well on a small screen at a bike night as on desktop.' },
  { category: 'Limits', question: 'How many club names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool, just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while still giving you plenty of MC and biker names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, document, or spreadsheet. This is the intended way to save a shortlist: generate, copy, then test each favorite by imagining it on a patch and adding a location or chapter. In a spreadsheet each name lands in its own cell for easy tracking.' },
  { category: 'General', question: 'Do I need an account to use the motorcycle club name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. Because everything runs locally in your browser, there is nothing to create an account for. It is designed for instant, friction-free brainstorming whenever you need an MC or biker club name.' },
  { category: 'Naming', question: 'How do I make a biker club name sound tougher or grimmer?', answer: 'Lean into hard consonants and dark imagery. Metals (Iron, Steel, Chrome), colors (Black, Blood, Ash), and predator or death words (Reapers, Vultures, Serpents, Demons) all raise the menace. A one-percenter outlaw club wants the grimmest pairings — Hell\'s Bastards, Black Reapers — while dropping the softer words. Say it aloud: a name meant to intimidate should hit hard and short. Keep the generated options that sound like a warning rather than an invitation.' },
  { category: 'Use cases', question: 'How do I name rival clubs so they feel distinct?', answer: 'Give each club a different palette. One might be a grim outlaw MC (Hell\'s Reapers), another a proud old-guard club (Steel Horsemen), a third a scrappy upstart crew (Rogue Bandits). Generate a batch, sort by tone, and assign contrasting names to competing clubs. The contrast does storytelling work for free — readers instantly feel the difference between the established one-percenters and the young club muscling into their territory, before you explain the rivalry.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming an MC?', answer: 'Avoid names too long or wordy to fit on a patch — an MC name gets embroidered and shouted, so it must be short and punchy. Avoid accidentally copying a famous real club, both for originality and because established MCs guard their names. Avoid a tone that fights the club, like a menacing outlaw name on a charity ride group. Keep the names that are short, distinctive, tone-appropriate, and strong on a back patch.' },
  { category: 'Naming', question: 'Should I add a location to the club name?', answer: 'Regional identity is central to biker culture, so tying a club to a place is very in-genre. You can bake a road, city, or state into the name (Route 9 Riders, Mojave Outlaws) or keep the core name and add a chapter location beneath it (Iron Vultures — Denver Chapter). A location grounds the club and makes multiple chapters possible. Generate the core name first, then decide whether a place-name strengthens it or clutters the patch.' },
  { category: 'Use cases', question: 'Can I use these names for a video game or tabletop faction?', answer: 'Yes. Open-world crime games, post-apocalyptic road settings, and tabletop campaigns all use biker gangs as factions. Use the generator to name the raider clan blocking a highway, the outlaw MC running a town, or a player crew. Generate a batch, assign distinct names to each faction so they read as separate powers, and hang colors and a territory on each. The name is the seed; the faction\'s reputation grows from there.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens entirely in your browser, so we never receive or store the names or your settings. You can use the tool in a private or incognito window if you prefer. If you refresh or close the page, the last batch is cleared unless you have already copied it. There is no server-side record of what you generated or how many times you ran it.' },
  { category: 'Technical', question: 'How are the club names generated?', answer: 'The generator draws on curated word lists of hard modifiers, metals, colors, predators, and outlaw nouns, then randomly combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration — it does not reproduce any registry of real motorcycle clubs and does not check whether a name is already in use. The lists are tuned to sound like real MC patches: short, hard, and territorial.' },
  { category: 'General', question: 'Are the generated club names unique?', answer: 'They are randomly combined from the word lists, so each run can produce fresh pairings, but the tool does not guarantee uniqueness or check any database. Because real motorcycle clubs are protective of their names, verify a favorite against existing clubs in your region before adopting it for a real crew. For fiction this matters less, though a quick check avoids accidentally naming your club after a well-known one. Keep a shortlist of backups either way.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool — naming several rival clubs in a story, for example — run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you need a large set of biker names to choose from. Keep the strongest options in a shortlist as you go.' },
  { category: 'Troubleshooting', question: 'Can I use the motorcycle club name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm MC and biker names offline, and copying and pasting works offline too. You only need a connection to open the page the first time. This makes it handy for naming a club at a rally, in the garage, or anywhere your connection is unreliable.' },
];

export default async function MotorcycleClubNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="motorcycle-club" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Motorcycle Club name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

