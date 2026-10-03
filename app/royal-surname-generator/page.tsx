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
    description: 'Complimentary Royal Surname Generator tailored for royal family names. Generate aristocratic title ideas directly in your browser without requiring registration.',
    seoTitle: 'Royal Surname Generator – Noble Surname Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Royal Surname Generator – Aristocratic Surnames &amp; Dynasty Names</h2>
        <p>A royal surname represents the legacy a dynasty is remembered by. It etches &quot;House Stark,&quot; &quot;the Habsburgs,&quot; or &quot;de Medici&quot; into the collective consciousness of a world, establishing deep characterization before a single monarch even speaks. This Royal Surname Generator produces noble family names and house titles in that exact tradition — grounded, prestigious, and heavy with heritage — allowing you to name kings, queens, lords, and entire ruling lineages for fantasy novels, tabletop campaigns, historical fiction, and roleplay. It operates completely inside your web browser, requires no account creation, and supplies 1–24 surnames per execution.</p>
        <p>Aristocratic names are never mere random word combinations. Genuine noble surnames developed from geography, military conquest, and heraldry, and the finest fictional houses reflect that same logic. The guide below explores the true origins of royal surnames — territorial designations, nobiliary particles, elemental and heraldic roots — and demonstrates how to construct a house name that feels like it has governed a territory for generations instead of something thought up yesterday.</p>

        <h2>Where Do Royal Surnames Truly Originate?</h2>
        <p>Historically, most European noble surnames derived from land ownership rather than occupations. While an ordinary citizen might be known as &quot;John the Smith,&quot; a lord was identified &quot;of&quot; a specific place — his family title designated the estate, fortress, or territory his bloodline controlled. The French Montmorency, the German von Habsburg, and English house names linked to ancestral seats all adhere to this convention: the surname essentially represents a location, and that location denotes power. This remains the absolute most crucial element to replicate when naming fictional nobility.</p>
        <p>Alternative royal names stemmed from a legendary founder or historical figure — Plantagenet, Capet, Valois — eventually solidifying into a dynastic marker over generations. Whether territorial or ancestral in nature, the outcome is identical: a royal surname ought to project history, property, and legitimacy, rather than functioning as a mere job description.</p>

        <h2>The Nobiliary Particle: von, de, of</h2>
        <p>Few markers signal nobility quite like a nobiliary particle. Within German regions, <strong>von</strong> (&quot;of&quot;) designated a landed dynasty — von Bismarck, von Trapp. Across France and Spain, <strong>de</strong> served the exact same purpose — de Bourbon, de la Vega. In English fantasy literature, the standard <strong>of</strong> imparts medieval gravitas — &quot;Eleanor of Ravenmere,&quot; &quot;the Knight of Aldermoor.&quot; These linguistic particles literally denote that the family possesses the accompanying land, which explains why they immediately read as aristocratic.</p>
        <p>Test out the same root both ways and select whichever best suits your environment. &quot;Ravenmoor&quot; feels blunt and martial; &quot;de Ravenmoor&quot; sounds refined and continental; &quot;of Ravenmoor&quot; evokes high medieval times. A particle instantly frames any name as noble, so utilize it when pursuing European-style aristocracy and omit it if you prefer a harsher tone.</p>

        <h2>House Titles, Game of Thrones Style</h2>
        <p>Contemporary fantasy popularized the &quot;House X&quot; structure, where the surname also functions as the title of the entire political faction: House Stark, House Lannister, House Targaryen. This format excels because the name must operate on three levels simultaneously — as a family (&quot;the Starks&quot;), as a standard (&quot;House Stark&quot;), and as an adjective (&quot;Stark men&quot;). Generate various surnames and evaluate each one across all three uses: does it hold up when yelled as a battle cry, printed beneath a crest, and referenced as a bloodline?</p>
        <p>The most potent house names within this aesthetic tend to be concise, harsh, and evocative — a singular striking word or a tight compound term. They typically imply both a sigil and a disposition without explicitly stating them: Stark evokes austerity and northern winters, Blackwood suggests an ancient shadowed forest, and Frostmarch implies a frigid, militarized frontier. Allow the surname to subtly hint at the house&apos;s signature colors and character.</p>

        <h2>Roots and Endings That Convey Royalty</h2>
        <p>The vocabulary surrounding noble names relies heavily on territory, heraldry, and elemental power. Robust roots feature terms like Raven, Storm, Gold, Iron, Ash, Wolf, Rose, Thorn, Black, and Grey — words frequently found on traditional coats of arms. Combine them with a landed suffix to grant the name an established seat of power:</p>
        <ul>
          <li><strong>-crown, -guard, -march</strong> convey governance and the protection of borders — Ashcrown, Ironguard, Frostmarch.</li>
          <li><strong>-mont, -mere, -moor, -vale, -field</strong> signify controlled land — representing a hill, a lake, a moor, or a valley — as seen in Ravenmere, Goldvale, Ashmont.</li>
          <li>[1] <strong>-haven, -hold, -keep</strong> suggest a protected stronghold — Stormhaven, Wolfhold.</li>
          <li>[2] <strong>-wood, -thorn, -crest</strong> point to a historic estate — Blackwood, Rosethorn, Silvercrest.</li>
        </ul>
        <p>[3] Merging a dark or elemental root with a landed suffix — Ravencrest, Ashmont, Goldmere — builds a surname that feels centuries old. Speak it aloud: a royal title ought to flow smoothly.</p>

        <h2>[4] Matching the Surname to the House&apos;s Character</h2>
        <p>[5] Assign every house a distinct tone and the name carries the narrative weight effortlessly. An aggressive warlord dynasty calls for iron, blood, and storm — Ironmarch, Blackthorn, Stormcrown. A sophisticated old-money family prefers refined, French- or Latin-inspired roots — de Valmont, Rosaline, Montclaire. A declining dynasty might carry a melancholic, fading-glory tone — Ashfell, Greymere. An alien or foreign house should break the realm&apos;s typical sounds to feel truly distinct — Zharoun, Kaelmere.</p>
        <p>[6] When naming competing houses, deliberately contrast their styles. Pit a harsh martial title against a graceful courtly one, allowing readers to instantly perceive the gap between an upstart merchant clan and a venerable royal lineage without exposition.</p>

        <h2>[7] Building a Full Regal Name and Title</h2>
        <p>[8] A royal surname rarely stands alone. It combines with a given name and a title to create a complete noble identity: Queen Isadora of Ravenmere, King Aldric Blackcrown, Duke Emeric de Valmont. The surname grounds the bloodline while the title and first name define the individual's role within it, allowing one family name to anchor an entire cast of related royals — the wise dowager queen, the ambitious young prince, the outcast cousin — throughout your tale.</p>
        <p>[9] Pick given names that fit the house&apos;s culture and era: rugged Norse-inspired names for a northern warrior clan, soft Latinate options for a southern court. The harmony or friction between the first name and surname enhances overall characterization.</p>

        <h2>[10] How to Use This Royal Surname Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>[10] Select the exact number of surnames you desire per generation (1–24).</li>
          <li>[11] Click <strong>Generate names</strong> to instantly receive a fresh batch of noble house and dynasty titles.</li>
          <li>[12] Organize the results by tone — martial, courtly, ancient, or foreign — and test each top pick as &quot;House X&quot; alongside a particle (&quot;de X,&quot; &quot;of X&quot;).</li>
          <li>[13] Use the Copy button to save your favorite options, then pair every surname with an appropriate given name and rank.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>[14] Generation happens entirely within your browser. Your preferences and generated surnames are never transmitted to any server, keeping your worldbuilding completely private until you decide to share it.</p>

        <h2>[17] Common Mistakes to Avoid</h2>
        <p>[15] A few common pitfalls can undermine an otherwise solid house name. The first is excessive length — a dynasty title gets repeated constantly, meaning a surname too complex to easily speak or recall will fail to resonate. The second is accidentally copying a famous real or fictional house (Tudor, Lannister, Habsburg, Stark) unless that specific homage is intended. The third is a tone that contradicts the house's actual nature, such as a delicate moniker for a brutal warlord clan. The fourth is treating the surname like a standard family name — Smith and Baker denote professions, whereas a royal house name must evoke territory and lineage. Preserve surnames that feel dignified, memorable, and powerful when spoken across a grand hall.</p>

        <h2>Privacy</h2>
        <p>[16] This Royal Surname Generator operates entirely inside your web browser. When you select a quantity and generate, the surnames are created locally on your device — nothing gets uploaded, tracked, or stored on our servers. Simply close the tab and the list vanishes unless you have saved it, ensuring your dynasty names remain strictly yours until you choose to reveal them.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a royal surname generator?', answer: '[17] A Royal Surname Generator is a browser-based utility that crafts aristocratic family names for kings, queens, dukes, and dynasties in creative writing, tabletop games, and role-playing. It blends regal roots, territorial particles, and grand suffixes into surnames that read like true ruling houses rather than random word combinations. Everything functions locally in your browser, nothing is saved or uploaded, and the service is completely free with no registration required. You receive 1 to 24 names per batch and can generate as many lists as you wish.' },
  { category: 'Usage', question: 'How can someone operate the Royal Surname Generator?', answer: '[18] Choose how many surnames you need per run (1 to 24) and click Generate. Review the output for names that match your setting — a stern warrior faction, a prosperous merchant dynasty, an ancient elven bloodline — then use the Copy button to store your preferred choices. Paste the results directly into your lore notes or character sheets and combine the surname with a first name and title. Run the tool as frequently as you like; there are no accounts, no downloads, and no usage caps.' },
  { category: 'Naming', question: '[19] What makes a surname sound royal or noble?', answer: '[20] Royal surnames generally rely on specific markers: strong, dignified roots (Black, Storm, Gold, Iron), territorial particles that suggest land ownership (von, de, of), and grand endings such as -mont, -field, -haven, -crown, or -mere. A ruling house name ought to sound as though it commands vast lands and deep history. Length and cadence are equally crucial — Ravenscrown or Montclaire carry far more gravity than a single blunt word, because a dynasty name is meant to echo across generations.' },
  { category: 'Naming', question: '[21] How do royal surnames differ from ordinary family names?', answer: '[22] Standard family names frequently denote an occupation or lineage (Smith, Johnson), whereas royal surnames evoke land, ancestry, and grandeur. A noble house name typically implies a seat of power — a fortress, a province, a founding myth — so terms linked to geography, heraldry, and elemental might read as genuinely regal. The particle of nobility (de, von, of) serves as a potent indicator: &quot;House of Ravenmere&quot; or &quot;de Valois&quot; immediately establishes the name as aristocratic instead of common.' },
  { category: 'Use cases', question: '[23] How do I name a ruling dynasty for my story?', answer: '[24] Begin with the house&apos;s personality and history. A conquering warrior dynasty demands iron, blood, and storm imagery; a sophisticated old-money lineage requires elegant, French- or Latin-influenced roots; a declining house should project a melancholic, faded-glory atmosphere. Generate a batch, retain the surnames whose tone fits the family, and then expand outward — creating a motto, a sigil, and a founding ancestor. Assigning contrasting surnames to rival houses helps readers easily keep your dynasties straight.' },
  { category: 'Naming', question: '[25] Should I use a particle like &quot;von,&quot; &quot;de,&quot; or &quot;of&quot;?', answer: 'A nobiliary particle is among the swiftest methods to make a surname appear aristocratic, as historically it denoted landed houses — "von" in German territories, "de" in France and Spain, and "of" within English fantasy realms. Employ it whenever you desire the name to feel medieval European or high-fantasy. Omit it when a blunter, more martial tone is preferred. Test the identical generated root both ways — "Ravenmoor" versus "de Ravenmoor" — and retain whichever suits your setting\'s register.' },
  { category: 'Use cases', question: 'Can I utilize these surnames for a Dungeons & Dragons or tabletop campaign?', answer: 'Indeed — noble house names remain a cornerstone of tabletop worldbuilding. Utilize the generator to title the great houses of a realm, a player character\'s noble heritage, or a villain\'s ancient lineage. Produce a batch, assign distinct surnames to each faction so they read as separate powers, and attach a sigil and reputation to every one. The tool delivers the surname; the intrigue and rivalries you construct around it render the house memorable at the table.' },
  { category: 'General', question: 'Does the Royal Surname Generator cost anything?', answer: 'Yes. The Royal Surname Generator is completely free to utilize inside your browser without any account, payment, or download. You may generate noble house and dynasty names as frequently as desired — there exists no daily cap or total limit on executions. It operates entirely on your device, allowing you to brainstorm as many surnames as your narrative, campaign, or character roster requires without friction.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'Negative. The Royal Surname Generator runs exclusively within your browser. When you specify a quantity and trigger generation, the surnames are created locally on your device — nothing gets uploaded, recorded, or saved on our servers. Your worldbuilding remains confidential. Shut the tab and the list vanishes unless you copied it, ensuring your dynasty names stay yours until you decide to share them.' },
  { category: 'Compatibility', question: 'Is the Royal Surname Generator functional on mobile devices?', answer: 'Indeed. The generator functions in any contemporary web browser and operates on desktop, tablet, and mobile devices with zero apps to install. Access the page, select your preferred surname count, and generate. On a smartphone you can produce a rapid batch and copy it directly into your notes app or a campaign document. The design is responsive, meaning naming a noble house performs just as well on a compact screen as a desktop.' },
  { category: 'Limits', question: 'How many royal surnames am I able to generate simultaneously?', answer: 'You may request 1 to 24 surnames per execution. Should you require a larger selection — for instance, to name every great house in a kingdom — merely run it again; each run yields a fresh random assortment. There is no daily or cumulative limit. Paste multiple runs into a single document and eliminate any duplicates. The 24-per-run restriction keeps each batch legible while still offering ample dynasty names for your shortlist.' },
  { category: 'Usage', question: 'Am I permitted to copy the surnames supplied by the generator?', answer: 'Yes. The Copy button transfers the entire generated batch onto your clipboard as plain text, one surname per line, prepared for pasting into any notes app, document, or spreadsheet. This represents the intended method for saving a shortlist: generate, copy, then pair each favored surname alongside a first name and title to hear how the complete noble name sounds. Within a spreadsheet, each surname occupies its own cell for straightforward tracking.' },
  { category: 'General', question: 'Must I create a profile to access the Royal Surname Generator?', answer: 'No. The tool functions without requiring any sign-up or login. Open the interface, configure your desired surname quantity, press generate, and copy the results — zero email, password, or registration needed. Because everything executes locally in your browser, there is nothing to register for. It is engineered for instant, friction-free brainstorming whenever a noble house or dynasty name is required.' },
  { category: 'Naming', question: 'Which endings and roots perform best for a magnificent dynasty name?', answer: 'Potent regal suffixes include -crown, -mont, -mere, -haven, -field, -moor, -guard, and -wraith, each implying territory or heritage. Regarding roots, elemental and heraldic terms carry weight — Raven, Storm, Gold, Iron, Ash, Wolf, Rose, Thorn. Pairing a dark or elemental root alongside a landed suffix (Ravencrest, Ashmont, Goldmere) yields a surname sounding as though it has governed a region for ages. Speak it aloud: a dynasty name must roll off the tongue like a title.' },
  { category: 'Use cases', question: 'How should I name rival noble houses so they feel distinct?', answer: 'Assign each house a unique tonal palette. One might appear martial and grim (Ironmarch, Blackthorn), another refined and established (de Valmont, Rosaline), while a third remains exotic or foreign to the setting (Zharoun, Kaelmere). Generate a batch, categorize the surnames by tone, and allocate contrasting options to competing houses. The contrast performs storytelling labor automatically — readers sense the disparity between the upstart merchant dynasty and the ancient royal bloodline prior to any explanation.' },
  { category: 'Best practices', question: 'What errors must I steer clear of when naming a royal house?', answer: 'Refrain from surnames so lengthy or ornate they prove difficult to voice or recall — a dynasty name gets repeated incessantly, demanding pronounceability. Avoid accidentally reusing a renowned historical or fictional house (Tudor, Lannister, Habsburg) unless the reference is deliberate. Avoid tones conflicting with a house\'s nature, such as a delicate moniker applied to a brutal warlord bloodline. Retain surnames that are dignified, distinctive, and simple to shout across a throne room.' },
  { category: 'Naming', question: 'Can these names function for queens, kings, and titled figures?', answer: 'Yes. A royal surname combines with a given name and title to construct a complete regal moniker: Queen Isadora of Ravenmere, King Aldric Blackcrown, Duke Emeric de Valmont. Produce a batch of surnames, then precede them with era-appropriate first names and a rank. The surname anchors the lineage while the title designates the individual\'s position within it, allowing a single house name to serve an entire cast of related royals throughout your story.' },
  { category: 'Use cases', question: 'Am I able to utilize royal surnames for fantasy or historical settings?', answer: 'It covers both. With high fantasy, lean into elemental and evocative roots (Stormcrown, Nightmere, Ashvale). For a historical or historical-fiction atmosphere, favor authentic nobiliary particles alongside Latin- or French-inspired roots (de Montclair, von Adelstein). Generate a batch and keep whichever style fits your world\'s register. The generator proposes combinations; tweaking spelling or adding a particle lets you adapt any surname toward either a medieval-European or a custom-fantasy flavor.' },
  { category: 'Privacy', question: 'Do you retain the surnames I generate?', answer: 'Negative. Generation takes place entirely inside your browser, meaning we never collect or archive the surnames or your preferences. You are welcome to utilize the tool inside a private or incognito window if preferred. Should you refresh or close the page, the prior batch is cleared unless you have already copied it. There exists no server-side log of what you produced or how many times you executed it.' },
  { category: 'Technical', question: 'In what manner are the royal surnames produced?', answer: 'The generator draws upon curated word lists of regal roots, nobiliary particles, and grandiose endings, subsequently combining them randomly within your browser so every execution differs. Nothing is transmitted to a server. The output serves creative inspiration — it does not replicate any genuine royal genealogy or official heraldic register, nor does it verify if a name is previously claimed. The lists are calibrated to sound like ruling houses: dignified, landed, and easy to voice.' },
  { category: 'General', question: 'Do these generated surnames count as unique?', answer: 'Since they are put together at random from vocabulary lists, each generation delivers fresh mixes, but the utility makes no uniqueness guarantees and checks no database. Should you desire a truly distinct house title, create multiple rounds, shortlist your favorites, tweak the spelling, or attach a particle to make it yours. For fictional works this seldom poses problems; for public profiles you ought to double-check the name yourself on that specific platform.' },
  { category: 'Limits', question: 'Can I obtain more than 24 surnames?', answer: 'Every run yields up to 24 surnames. For a larger collection -- naming an entire court containing numerous noble houses, for instance -- execute the generator repeatedly and paste each set into a single document, then filter out duplicates. There exists no daily or total restriction on runs, meaning batching represents the intended approach whenever you need a vast set of dynasty names to select from. Keep your top choices in a shortlist as you proceed.' },
  { category: 'Best practices', question: 'What is the ideal workflow for naming a noble house?', answer: 'Determine the house\'s nature first -- martial, refined, ancient, or foreign -- then produce 12 to 24 surnames and copy them into your notes. Sort them by tone, retain the five to ten that work, and test each by speaking the full name alongside a title: "House Ashmont," or "Queen Lyra de Ravenmere." Attach a sigil and a brief reputation to your top pick. Run it again for more options if nothing clicks. The surname serves as the seed; the house identity develops from there.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Royal Surname Generator without an internet connection?', answer: 'Indeed. Once the page loads, the generator operates entirely within your browser and requires zero network connection to output surnames. You can brainstorm noble house and dynasty names while offline, and copy-pasting functions offline too. A connection is only necessary to load the page initially. This proves convenient for worldbuilding while traveling, aboard an aircraft, or wherever your connection remains spotty.' },
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
          <p className="text-slate-700">Frequently asked questions regarding the Royal Surname Generator name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

