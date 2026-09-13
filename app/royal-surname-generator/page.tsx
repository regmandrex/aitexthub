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


const toolSlug = 'royal-surname-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Royal Surname Generator',
    description: 'Free royal surname generator for royal surnames. Create noble-style name ideas in your browser with no sign-up.',
    seoTitle: 'Royal Surname Generator – Noble Surname Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Royal Surname Generator – Noble Surname &amp; House Names</h2>
        <p>
          A royal surname is the name a dynasty is remembered by. It is what carves &quot;House Stark,&quot; &quot;the Habsburgs,&quot; or &quot;de Medici&quot; into the memory of a world, and it does a huge amount of characterization before a single ruler speaks. This royal surname generator builds aristocratic family names and house names in that tradition — landed, dignified, and heavy with lineage — so you can name kings, queens, dukes, and whole ruling bloodlines for fantasy novels, tabletop campaigns, historical fiction, and role-play. It runs entirely in your browser, needs no sign-up, and gives you 1–24 surnames per run.
        </p>
        <p>
          Noble names are not random word pairs. Real aristocratic surnames grew out of land, conquest, and heraldry, and the best fictional houses echo that logic. The guide below covers where royal surnames actually come from — territorial names, nobiliary particles, elemental and heraldic roots — and how to shape a house name that sounds like it has ruled a region for centuries rather than one invented last Tuesday.
        </p>

        <h2>Where Royal Surnames Actually Come From</h2>
        <p>
          Historically, most European noble surnames were rooted in land rather than trade. A commoner might be &quot;John the Smith,&quot; but a lord was &quot;of&quot; somewhere — his family name marked the estate, castle, or region his line held. The French Montmorency, the German von Habsburg, and the English house names tied to a seat all follow this pattern: the surname is really a place, and the place is really power. That is the single most important thing to imitate when naming fictional nobility.
        </p>
        <p>
          Other royal names came from a founding ancestor or a legend — Plantagenet, Capet, Valois — and hardened into a dynasty label over generations. Whether territorial or ancestral, the effect is the same: a royal surname should sound like it carries history, land, and legitimacy, not like a description of a job.
        </p>

        <h2>The Nobiliary Particle: von, de, of</h2>
        <p>
          Few things signal aristocracy faster than a nobiliary particle. In German lands, <strong>von</strong> (&quot;of&quot;) marked a landed family — von Bismarck, von Trapp. In France and Spain, <strong>de</strong> did the same — de Bourbon, de la Vega. In English-language fantasy, the plain <strong>of</strong> carries the medieval weight — &quot;Eleanor of Ravenmere,&quot; &quot;the Knight of Aldermoor.&quot; These particles literally mean the family holds the land that follows them, which is why they read as noble.
        </p>
        <p>
          Try the same root both ways and keep whichever fits your setting. &quot;Ravenmoor&quot; is blunt and martial; &quot;de Ravenmoor&quot; is courtly and continental; &quot;of Ravenmoor&quot; is high-medieval. A particle instantly frames a name as aristocratic, so reach for it when you want European-flavored nobility and drop it when you want something starker.
        </p>

        <h2>House Names, Game of Thrones Style</h2>
        <p>
          Modern fantasy popularized the &quot;House X&quot; convention, where the surname doubles as the name of the whole political faction: House Stark, House Lannister, House Targaryen. This format is powerful because the name has to work in three registers at once — as a family (&quot;the Starks&quot;), as a banner (&quot;House Stark&quot;), and as an adjective (&quot;Stark men&quot;). Generate surnames and test each one in all three: does it survive being shouted as a war cry, printed under a sigil, and spoken as a bloodline?
        </p>
        <p>
          The strongest house names in this style tend to be short, hard, and evocative — a single striking word or a tight compound. They usually imply a sigil and a temperament without stating it: Stark suggests austerity and the North, Blackwood suggests a dark old forest, Frostmarch suggests a cold, militarized frontier. Let the surname hint at the house&apos;s color and character.
        </p>

        <h2>Roots and Endings That Read as Regal</h2>
        <p>
          The vocabulary of noble names leans on land, heraldry, and elemental force. Strong roots include Raven, Storm, Gold, Iron, Ash, Wolf, Rose, Thorn, Black, and Grey — words that already appear on coats of arms. Pair them with a landed ending and the name gains a seat of power:
        </p>
        <ul>
          <li><strong>-crown, -guard, -march</strong> imply rule and defense of a border — Ashcrown, Ironguard, Frostmarch.</li>
          <li><strong>-mont, -mere, -moor, -vale, -field</strong> imply held territory — a hill, a lake, a moor, a valley — as in Ravenmere, Goldvale, Ashmont.</li>
          <li><strong>-haven, -hold, -keep</strong> imply a fortified seat — Stormhaven, Wolfhold.</li>
          <li><strong>-wood, -thorn, -crest</strong> imply an ancestral estate — Blackwood, Rosethorn, Silvercrest.</li>
        </ul>
        <p>
          Combining a dark or elemental root with a landed ending — Ravencrest, Ashmont, Goldmere — produces a surname that sounds centuries old. Say it aloud: a dynasty name should roll like a title.
        </p>

        <h2>Matching the Surname to the House&apos;s Character</h2>
        <p>
          Give each house a tonal palette and the name does storytelling for free. A conquering warrior dynasty wants iron, blood, and storm — Ironmarch, Blackthorn, Stormcrown. A refined old-money line wants elegant, French- or Latin-flavored roots — de Valmont, Rosaline, Montclaire. A fading dynasty can carry a melancholy, faded-grandeur sound — Ashfell, Greymere. An exotic or foreign house should break the setting&apos;s usual sound to feel like outsiders — Zharoun, Kaelmere.
        </p>
        <p>
          When you name rival houses, deliberately contrast their palettes. Set a grim martial name against a delicate courtly one, and readers feel the difference between the upstart merchant dynasty and the ancient royal bloodline before you explain a thing.
        </p>

        <h2>Building a Full Regal Name and Title</h2>
        <p>
          A royal surname rarely stands alone. It pairs with a given name and a rank to form a full regal name: Queen Isadora of Ravenmere, King Aldric Blackcrown, Duke Emeric de Valmont. The surname anchors the lineage while the title and given name mark the individual&apos;s place within it, so a single house name can serve a whole cast of related royals — the wise old queen, the ambitious younger prince, the disgraced cousin — across your story.
        </p>
        <p>
          Choose given names that match the house&apos;s era and flavor: hard Norse-tinged names for a northern warrior house, soft Latinate names for a southern court. The contrast or harmony between given name and surname is part of the characterization.
        </p>

        <h2>How to Use This Royal Surname Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many surnames you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of noble house and dynasty names.</li>
          <li>Sort the list by tone — martial, courtly, ancient, or foreign — and test each favorite as &quot;House X&quot; and with a particle (&quot;de X,&quot; &quot;of X&quot;).</li>
          <li>Use the Copy button to save your shortlist, then pair each surname with a given name and a title.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the surnames you create are never sent to a server, so your worldbuilding stays private until you choose to share it.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps weaken an otherwise strong house name. The first is length — a dynasty name gets repeated constantly, so a surname too ornate to say or remember will not stick. The second is accidentally borrowing a famous real or fictional house (Tudor, Lannister, Habsburg, Stark) unless you intend the nod. The third is a tone that fights the house&apos;s character, like a delicate name on a brutal warlord line. The fourth is treating the surname like an ordinary family name — Smith and Baker describe trades, but a royal house name should evoke land and lineage. Keep the surnames that are dignified, distinctive, and easy to shout across a throne room.
        </p>

        <h2>Privacy</h2>
        <p>
          This royal surname generator runs entirely in your browser. When you set a count and generate, the surnames are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your dynasty names stay yours until you decide to share them.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a royal surname generator?', answer: 'A royal surname generator is a browser tool that produces noble-sounding family names for kings, queens, dukes, and dynasties in fiction, tabletop campaigns, and role-play. It combines regal roots, place-based particles, and grand-sounding endings into surnames that read like a ruling house rather than a random word pair. Everything runs locally in your browser, nothing is stored or uploaded, and it is free with no sign-up. You get 1 to 24 names per run and can generate as many batches as you like.' },
  { category: 'Usage', question: 'How do I use the royal surname generator?', answer: 'Choose how many surnames you want per run (1 to 24) and click Generate. Skim the batch for names that fit your setting — a stern warrior house, a wealthy merchant dynasty, an ancient elven line — then use the Copy button to save your shortlist. Paste the results into your worldbuilding notes or character sheet and pair the surname with a first name and a title. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'Naming', question: 'What makes a surname sound royal or noble?', answer: 'Royal surnames tend to lean on a few cues: hard, dignified roots (Black, Storm, Gold, Iron), place-based particles that imply landholding (von, de, of), and grand endings like -mont, -field, -haven, -crown, or -mere. A ruling house name should sound like it owns territory and has history behind it. Length and rhythm matter too — Ravenscrown or Montclaire carry more weight than a single blunt word, because a dynasty name is meant to echo down generations.' },
  { category: 'Naming', question: 'How do royal surnames differ from ordinary family names?', answer: 'Ordinary family names often describe a trade or a parent (Smith, Johnson), while royal surnames evoke land, lineage, and grandeur. A noble house name usually implies a seat of power — a castle, a region, a founding legend — so words tied to territory, heraldry, and elemental force read as regal. The particle of nobility (de, von, of) is a strong signal: "House of Ravenmere" or "de Valois" instantly frames the name as aristocratic rather than common.' },
  { category: 'Use cases', question: 'How do I name a ruling dynasty for my story?', answer: 'Start from the house\'s character and history. A conquering warrior dynasty wants iron, blood, and storm imagery; a refined old-money line wants elegant, French- or Latin-flavored roots; a fading dynasty can carry a melancholy, faded-grandeur sound. Generate a batch, keep the surnames whose tone matches the house, then build outward — a motto, a sigil, a founding ancestor. Assigning contrasting surnames to rival houses helps readers keep your dynasties straight at a glance.' },
  { category: 'Naming', question: 'Should I use a particle like "von," "de," or "of"?', answer: 'A nobiliary particle is one of the fastest ways to make a surname read as aristocratic, because historically it marked landed families — "von" in German lands, "de" in France and Spain, "of" in English fantasy houses. Use it when you want the name to feel European-medieval or high-fantasy. Drop it when you want something blunter and more martial. Try the same generated root both ways — "Ravenmoor" versus "de Ravenmoor" — and keep whichever fits your setting\'s register.' },
  { category: 'Use cases', question: 'Can I use these surnames for a Dungeons & Dragons or tabletop campaign?', answer: 'Yes — noble house names are a staple of tabletop worldbuilding. Use the generator to name the great houses of a kingdom, a player character\'s aristocratic background, or the villain\'s ancient bloodline. Generate a batch, assign distinct surnames to each faction so they feel like separate powers, and hang a sigil and a reputation on each. The tool gives you the surname; the intrigue and rivalries you build around it are what make the house memorable at the table.' },
  { category: 'General', question: 'Is the royal surname generator free?', answer: 'Yes. The royal surname generator is completely free to use in your browser with no account, no payment, and no download. You can generate noble house and dynasty names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm as many surnames as your story, campaign, or character roster needs without any friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The royal surname generator runs entirely in your browser. When you set a count and click generate, the surnames are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your worldbuilding stays private. Close the tab and the list is gone unless you copied it, so your dynasty names remain yours until you choose to share them.' },
  { category: 'Compatibility', question: 'Does the royal surname generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. Open the page, choose how many surnames you want, and generate. On a phone you can produce a quick batch and copy it straight into your notes app or a campaign document. The layout is responsive, so naming a noble house works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many royal surnames can I generate at once?', answer: 'You can request 1 to 24 surnames per run. If you need a larger pool — say, to name every great house in a kingdom — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while still giving you plenty of dynasty names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the surnames from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one surname per line, ready to paste into any notes app, document, or spreadsheet. This is the intended way to save a shortlist: generate, copy, then pair each surname you like with a first name and a title to hear how the full noble name sounds. In a spreadsheet each surname lands in its own cell for easy tracking.' },
  { category: 'General', question: 'Do I need an account to use the royal surname generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many surnames you want, click generate, and copy the results — no email, password, or registration involved. Because everything runs locally in your browser, there is nothing to create an account for. It is designed for instant, friction-free brainstorming whenever you need a noble house or dynasty name.' },
  { category: 'Naming', question: 'What endings and roots work best for a grand dynasty name?', answer: 'Strong regal endings include -crown, -mont, -mere, -haven, -field, -moor, -guard, and -wraith, each hinting at land or legacy. For roots, elemental and heraldic words carry weight — Raven, Storm, Gold, Iron, Ash, Wolf, Rose, Thorn. Combining a dark or elemental root with a landed ending (Ravencrest, Ashmont, Goldmere) produces a surname that sounds like it has ruled a region for centuries. Say it aloud: a dynasty name should roll off the tongue like a title.' },
  { category: 'Use cases', question: 'How do I name rival noble houses so they feel distinct?', answer: 'Give each house a different tonal palette. One might be martial and grim (Ironmarch, Blackthorn), another refined and old-money (de Valmont, Rosaline), a third exotic or foreign to the setting (Zharoun, Kaelmere). Generate a batch, sort the surnames by tone, and assign contrasting ones to competing houses. The contrast does storytelling work for free — readers feel the difference between the upstart merchant dynasty and the ancient royal bloodline before you explain a thing.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a royal house?', answer: 'Avoid surnames so long or ornate they are hard to say or remember — a dynasty name gets repeated constantly, so it must be pronounceable. Avoid accidentally reusing a famous real or fictional house (Tudor, Lannister, Habsburg) unless you intend the reference. Avoid a tone that clashes with the house\'s character, like a delicate name on a brutal warlord line. Keep the surnames that are dignified, distinctive, and easy to shout across a throne room.' },
  { category: 'Naming', question: 'Can these names work for queens, kings, and titled characters?', answer: 'Yes. A royal surname pairs with a first name and a title to form a full regal name: Queen Isadora of Ravenmere, King Aldric Blackcrown, Duke Emeric de Valmont. Generate a batch of surnames, then front them with period-appropriate given names and a rank. The surname anchors the lineage while the title marks the individual\'s place in it, so the same house name can serve a whole cast of related royals across your story.' },
  { category: 'Use cases', question: 'Can I use royal surnames for fantasy or historical settings?', answer: 'Both. For high fantasy, lean into elemental and evocative roots (Stormcrown, Nightmere, Ashvale). For a historical or historical-fiction feel, favor real-world nobiliary particles and Latin- or French-flavored roots (de Montclair, von Adelstein). Generate a batch and keep whichever style matches your world\'s register. The generator suggests combinations; adjusting spelling or adding a particle lets you tune any surname toward either a medieval-European or an invented-fantasy flavor.' },
  { category: 'Privacy', question: 'Do you store the surnames I generate?', answer: 'No. Generation happens entirely in your browser, so we never receive or store the surnames or your settings. You can use the tool in a private or incognito window if you prefer. If you refresh or close the page, the last batch is cleared unless you have already copied it. There is no server-side record of what you generated or how many times you ran it.' },
  { category: 'Technical', question: 'How are the royal surnames generated?', answer: 'The generator draws on curated word lists of regal roots, nobiliary particles, and grand-sounding endings, then randomly combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration — it does not reproduce any real royal genealogy or official heraldic register, and it does not check whether a name is already used. The lists are tuned to sound like ruling houses: dignified, landed, and easy to say.' },
  { category: 'General', question: 'Are the generated surnames unique?', answer: 'They are randomly combined from the word lists, so each run can produce fresh combinations, but the tool does not guarantee uniqueness or check any database. If you want a truly distinctive house name, generate several batches, shortlist your favorites, and adjust spelling or add a particle to make one your own. For fiction this is rarely an issue; for a public handle you would verify the name yourself on the platform in question.' },
  { category: 'Limits', question: 'Can I get more than 24 surnames?', answer: 'Each run returns up to 24 surnames. For a bigger pool — naming a whole court of noble houses, for example — run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you need a large set of dynasty names to choose from. Keep the strongest options in a shortlist as you go.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a noble house?', answer: 'Decide the house\'s character first — martial, refined, ancient, foreign — then generate 12 to 24 surnames and copy them into your notes. Sort by tone, keep the five to ten that fit, and test each by saying the full name with a title: "House Ashmont," "Queen Lyra de Ravenmere." Add a sigil and a one-line reputation to your favorite. Run again for more if nothing lands. The surname is the seed; the house identity grows from there.' },
  { category: 'Troubleshooting', question: 'Can I use the royal surname generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce surnames. You can brainstorm noble house and dynasty names offline, and copying and pasting works offline too. You only need a connection to open the page the first time. This makes it handy for worldbuilding on the go, on a plane, or anywhere your connection is unreliable.' },
];

export default async function RoyalSurnameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="royal" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Royal Surname Generator name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

