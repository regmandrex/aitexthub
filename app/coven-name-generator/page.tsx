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


const toolSlug = 'coven-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Coven Name Generator',
    description: 'Free Coven Name Generator for coven and witch names. Generate witch-style name suggestions directly in your browser without registering.',
    seoTitle: 'Coven Name Generator – Witch & Coven Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Coven Name Generator – Witch &amp; Coven Name Ideas</h2>
        <p>A coven name operates like a miniature spell. Before any single witch gets introduced, the title of her circle — such as the Nightshade Coven, the Order of the Waning Moon, or the Ashen Sisterhood — establishes the atmosphere: old, gloomy, earthy, or playful. This Coven Name Generator generates those monikers by combining lunar, mystical, natural, and dark elements alongside collective nouns, enabling authors, gamers, and creators to establish a witch circle that reads as an authentic fellowship rather than a random combination of terms. It operates entirely within your browser, demands no registration, and delivers 1–24 designations per generation with a handy copy feature.</p>
        <p>The guide underneath explores the elements that make a coven name successful: the repeating themes witches&apos; names utilize, the distinction between dark and whimsical covens, the Wiccan and pagan influences underlying the authentic tradition, popular fandom tropes found in series like American Horror Story: Coven and Charmed, and methods for titling a circle for fiction, role-play, and gaming.</p>
        <p>Individuals search for Coven name ideas and character name generators when establishing a fresh profile, an esports tag, or a streaming title. This Coven Name Generator fulfills that purpose through a single complimentary, browser-driven utility. Whether you require one exceptional character title or a brief selection of possibilities, the generator supplies a collection of concepts. Monikers must be distinct across every platform, meaning that confirming availability on Coven or your selected service remains a vital measure following the generation process.</p>

        <h2>What Makes a Coven Name Work</h2>
        <p>A coven designation needs to evoke a specific vibe within just a few terms. The most powerful choices combine an atmospheric mood word — moon, shadow, thorn, ash, hollow, raven — with a collective noun that defines the assembly: Coven, Circle, Order, Sisterhood, Sabbath, Cabal, or Rite. &quot;The Nightshade Circle&quot; and &quot;the Order of the Ashen Veil&quot; both succeed because the mood term handles the imagery while the group noun provides the framework.</p>
        <p>Voice a created moniker out loud and visualize the witches associated with it. If it evokes an immediate atmosphere — dread, intrigue, quiet strength, or mischief — it will succeed in your writing. A title that conveys nothing about the coven&apos;s essence represents a missed chance, given that the name frequently serves as the initial characterization your audience encounters.</p>

        <h2>The Core Concepts Behind Coven Titles</h2>
        <p>Coven designations derive strength from several recurring motifs. Selecting one primary motif ensures the title feels unified rather than disjointed:</p>
        <ul>
          <li><strong>Lunar and celestial.</strong> Moon, Crescent, Eclipse, Waning, Starless — the moon remains the traditional witchcraft icon, linked to phases, tides, and ancient ceremonies.</li>
          <li><strong>Nature and the wild.</strong> Thornwood, Nightshade, Willow, Bramble, Hemlock — flora (specifically toxic or hedge-witch plants) and untamed settings anchor a coven in the physical world.</li>
          <li><strong>Darkness and shadow.</strong> Umbra, Hollow, Ravenmark, Duskfall, Ebon — suited for groups that lean menacing or secretive.</li>
          <li><strong>The ancient and occult.</strong> Sabbath, Rite, Elder, Veil, Sigil, Grimoire — terms suggesting forgotten lore and clandestine practices.</li>
          <li><strong>Elemental and seasonal.</strong> Ember, Frost, Tempest, Samhain, Solstice — associating the group with a specific season or element provides an immediate aesthetic.</li>
        </ul>

        <h2>Mysterious Covens against Lighthearted Covens</h2>
        <p>Not every coven is evil. The generator provides titles across a wide range, and picking the correct side is essential. A dark coven — a blood-magic cabal, a cursed order — requires harsh, shadowy words: the Ravenmark Cabal, the Order of the Withered Hand. A whimsical or cozy coven — a hedge-witch circle, a kitchen-magic sisterhood — calls for gentler, greener imagery: the Willowbrook Circle, the Honeythorn Coven.</p>
        <p>Match the designation to the atmosphere of your narrative or game. A peaceful gathering of town witches feels wrong under a terrifying title, and a dangerous cabal loses its impact beneath a cozy one. Filter a generated set by vibe and retain the titles whose weight fits the group you actually imagine.</p>

        <h2>Pagan and Wiccan Aesthetic</h2>
        <p>Authentic contemporary witchcraft — Wicca and broader neo-paganism — supplies coven naming with a grounded vocabulary you can borrow for realism. Actual covens frequently name themselves after a sabbat (the eight seasonal festivals like Samhain, Beltane, and Yule), a deity, a local geographic feature or grove, or a specific tradition (Gardnerian, Alexandrian, hereditary). Terms such as &quot;circle,&quot; &quot;grove,&quot; and &quot;hearth&quot; appear often because they describe how practitioners genuinely gather. Drawing on this tradition — a moon phase, a sacred plant, a seasonal ritual — makes a fictional coven appear thoroughly researched instead of made up instantly.</p>

        <h2>Pop Culture Gatherings: American Horror Story Coven, Charmed, and Others</h2>
        <p>Mainstream witch fiction establishes expectations worth understanding. American Horror Story: Coven focuses on a hidden academy and mentions the Supreme, Salem descendants, and secret lineages, favoring a gothic Southern-American style. Charmed constructed its universe around the &quot;Power of Three&quot; and the Halliwell bloodline, relying on family and destiny rather than a formal coven title. The Craft, Sabrina, and The Witcher each possess distinct characteristics. If you are writing within or near a fandom, reflecting its naming style — an academy, a bloodline, a trio of sisters — helps your coven fit reader expectations, while a unique title keeps it original.</p>

        <h2>Creating a Coven Title for Fiction, RPGs, and Tabletop Games</h2>
        <p>In fiction, a coven title accomplishes significant worldbuilding effortlessly — it communicates the group&apos;s age, philosophy, and reputation to the reader prior to any scene. For tabletop and video-game campaigns, a coven functions as a memorable faction or adversary, so provide a title that players will recall and fear or pursue. Within role-play communities and Discord servers, a shared coven designation offers members a collective identity, complete with a sigil, a color, and specific ranks.</p>
        <p>When your universe contains competing covens, intentionally assign them opposing titles and themes — a lunar sisterhood versus a blood cabal, a green hedge-circle against an ashen order — so your audience recognizes the conflict between them instantly and never confuses the two.</p>

        <h2>How to Use This Coven Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Determine your coven&apos;s atmosphere and theme initially — dark cabal, cozy hedge-circle, lunar sisterhood, or ancient order.</li>
          <li>Select the number of names you desire per generation (1–24) and click <strong>Generate names</strong> to receive a fresh set of coven and witch titles.</li>
          <li>Pronounce every option aloud, visualize the witches it represents, and keep those that establish the proper mood; utilize the Copy button to store the list.</li>
          <li>Paste into your narrative notes, campaign document, or server and narrow down five to ten favorites.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>

        <h2>Tips and Mistakes to Avoid</h2>
        <p>The most frequent error is misaligned mood — a threatening title on a peaceful circle, or vice versa. Another issue is combining too many mood terms so the title becomes cluttered with imagery; one powerful mood word plus one group noun generally reads best. Refrain from copying a famous coven title from a popular show directly if you desire originality, and instead mirror its structure. Preserve the titles that remain pronounceable, atmospheric, and true to the group&apos;s genuine nature.</p>

        <h2>Privacy</h2>
        <p>This Coven Name Generator operates entirely within your browser. When you select a quantity and generate, the coven and witch names are created locally on your equipment — nothing is uploaded, tracked, or saved on our servers. Shut the tab and the list disappears unless you saved it, ensuring your coven concepts remain private.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a coven name generator?', answer: 'A Coven Name Generator is a browser utility that generates titles for witch covens, circles, and magical sisterhoods. A coven designation establishes the mood for a group of witches — mysterious, dark, nature-driven, or ancient — meaning this generator combines evocative witch-themed terminology, moon and shadow visuals, and old-world roots to create titles that resemble a genuine order. It functions entirely inside your browser, requires no registration, and delivers 1–24 coven names per run for use in stories, games, or role-play.' },
  { category: 'Naming', question: 'What defines a strong coven name?', answer: 'A potent coven name builds mood in just a few words. The top choices rely on evocative imagery — moon, shadow, thorn, ash, hollow — combined with a collective noun like Coven, Circle, Order, Sisterhood, or Sabbath. It should suggest the coven\'s character: a gentle hedge-witch circle feels completely different from a blood-magic cabal. Speak a generated name out loud and imagine the witches who belong to it; if it creates an instant atmosphere, it will work on the page.' },
  { category: 'Naming', question: 'What themes function best for coven names?', answer: 'Coven names draw inspiration from several recurring motifs: lunar and celestial (Moon, Crescent, Eclipse), nature and the wild (Thornwood, Nightshade, Willow), darkness and shadow (Umbra, Hollow, Ravenmark), and the ancient or occult (Sabbath, Rite, Elder, Veil). Elemental and seasonal terms also fit nicely. Generate a collection, organize choices by the theme that matches your coven\'s magic, and blend a mood word with a group noun to cement the identity.' },
  { category: 'Use cases', question: 'How do I name a coven to fit its magic?', answer: 'Let the coven\'s practice guide the name. A nature-based, healing circle fits soft, green words like Willow Grove or Hollow Circle; a dark or vengeful coven fits Nightshade Order or Bloodmoon Sabbath; an ancient, secretive order fits words like Veil, Elder, or Rite. Generate a batch, keep the names whose tone aligns with the witches\' powers and morals, and refine the pairing so the name reflects the actual magic your coven practices.' },
  { category: 'Usage', question: 'How can someone operate the Coven Name Generator?', answer: 'Pick how many coven names you want (1–24) and click Generate names to receive a fresh batch. Scan the list, select the ones that match your witches\' tone, and use the Copy button to save your shortlist to a notes app. Run it again for more choices — there are no limits and no account is needed. Then read your favorites aloud and picture the coven each one evokes before making your choice.' },
  { category: 'General', question: 'Does the Coven Name Generator cost anything?', answer: 'Yes. This Coven Name Generator is completely free to use directly in your browser. You can generate witch and coven name ideas as often as you wish without creating an account, paying, or downloading anything. There are no daily or total limits on runs, so brainstorm a large pool of names for your story\'s covens, review them, and generate more whenever you want fresh options.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'No. The Coven Name Generator runs entirely inside your browser. When you select a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your worldbuilding notes remain private, which is crucial when developing an unpublished story or campaign. Close the tab and the list disappears unless you copied it.' },
  { category: 'Compatibility', question: 'Is the Coven Name Generator functional on mobile devices?', answer: 'Yes. The generator is responsive and works in any modern mobile browser, letting you brainstorm coven names on your phone during a writing session or a tabletop game. Open the page, select the number of names you want, tap Generate, and copy your favorites straight into your notes. No app installation is required — it functions identically on phone, tablet, and desktop.' },
  { category: 'Limits', question: 'How many coven names am I able to generate simultaneously?', answer: 'You can request 1–24 names per run. For a larger selection, simply run it again — each run delivers a fresh random set with no daily or total restrictions. Paste multiple runs into a single document and delete any duplicates. The 1–24 range keeps each batch easy to review so you can quickly identify the two or three names that truly represent the coven you are creating.' },
  { category: 'Usage', question: 'Am I able to copy the coven names I prefer?', answer: 'Certainly. Click the Copy icon to transfer every newly created name onto your clipboard as clean text, separated by line breaks, allowing you to drop them straight into a manuscript, campaign outline, or notepad. Because the app does not record previous attempts, this serves as your primary way to compile a running shortlist. Be sure to duplicate any batch with strong options prior to hitting generate again so you never lose the right moniker for your spellcasters.' },
  { category: 'General', question: 'Do I need to sign up for an account or download anything?', answer: 'No. The Coven Name Generator operates without any sign-up, login, or installation. Open the page, choose how many names you need, click generate, and copy the results. There is no email or registration step and nothing to download — it is a self-contained browser tool, simple to pull up whenever you require a coven, circle, or sisterhood name for a project.' },
  { category: 'Naming', question: 'What collective words can I combine with a coven name?', answer: 'Beyond just "Coven," exceptional collective nouns include Assembly, Sisterhood, Rite, Circle, Conclave, Order, Sabbath, and Cabal — each delivering an entirely unique impression. Calling your group a Circle evokes earthy closeness, an Order suggests rigid antiquity, while a Cabal hints at shadowy peril. Produce a list first, then swap out the organization term to reshape its identity: "Thornwood Circle" summons an ambiance wholly distinct from "Thornwood Cabal" despite sharing a common origin.' },
  { category: 'Use cases', question: 'Can I utilize these names for a novel or story?', answer: 'Yes. Authors use the generator to name witch covens in fantasy fiction, giving rival groups distinct identities. Generate a batch and assign contrasting names to different factions — a benevolent nature circle versus a shadow-bound cabal — so readers can distinguish them immediately. Adjust spelling and pairing to suit each coven\'s lore. The tool provides quick atmospheric names; the mythology behind them belongs to you.' },
  { category: 'Use cases', question: 'Is it possible to use these names for a video game or tabletop campaign?', answer: 'Definitely. Game masters utilize coven names for enemy factions, hidden orders, and quest-giving circles in tabletop RPGs and game worldbuilding. Generate a set, keep the names that match each faction\'s alignment and territory, and build an emblem, motto, and roster of witches around your selection. A vivid coven name gives players an immediate understanding of who they face.' },
  { category: 'Technical', question: 'In what way are the coven names created?', answer: 'The generator pulls from curated word lists focused on witch and coven themes — lunar, natural, shadowy, and occult words along with collective nouns — and randomly combines them in your browser whenever you click generate. Nothing goes to a server, and every run is independent, ensuring the list varies each time. The output serves as creative inspiration rather than an official or canon database, so view each result as raw material for your worldbuilding.' },
  { category: 'Best practices', question: 'What constitutes the ideal workflow for naming a coven?', answer: 'Set the count to 12 or 24, generate, and copy the batch into a notes app. Read each name aloud and check off the ones that fit the coven\'s theme and morality. Shortlist five to ten, think about them, and choose the one that best matches the witches\' powers and role in your world. Run the generator again for fresh options whenever necessary — the account-free design supports this type of iterative brainstorming.' },
  { category: 'Best practices', question: 'What errors ought to be avoided when naming a coven?', answer: 'The primary mistake is picking a moniker whose vibe clashes with the coven — a delicate, floral title on a violent blood sect, or a dark name on a peaceful healing group. A second error is excessive length, as a title too hard to pronounce loses its magical impact. A third is copying a famous coven title from popular books, which feels uninspired. Choose labels that are atmospheric, fitting in tone, and unique to your universe.' },
  { category: 'Naming', question: 'How can I make a coven moniker sound ancient or historical?', answer: 'Rely on historical and mystical terms — Elder, Veil, Rite, Sabbath, Umbra, Wyrd — and combine them with weathered nature vocabulary like Ash, Thorn, Hollow, or Bramble. Slightly old-fashioned spelling and Latin- or Old-English-inspired roots enhance the feeling of antiquity. Generate a set, select the choices that already feel aged, and push the orthography further toward the archaic to imply a coven that has practiced its magic for generations.' },
  { category: 'Naming', question: 'Can I merge titles or edit the results?', answer: 'Indeed, and it is encouraged. Combine a mood word from one generated moniker with a collective noun from another to craft the exact coven you desire, or modify spelling to match your universe\'s lexicon. The tool provides you with seeds — atmospheric parts and group words — and the best coven titles usually result from altering a promising option rather than accepting any single line unchanged. Make every title feel custom-built for your narrative.' },
  { category: 'Limits', question: 'Can I obtain more than 24 coven monikers?', answer: 'Each generation stops at 24 titles, but there is no restriction on how many times you can run it. To assemble a larger collection for a universe with numerous covens, produce several rounds and paste them into a single document, then filter out duplicates. This multi-batch method is the intended way to collect a vast set of candidates before assigning specific titles to each circle in your story or campaign.' },
  { category: 'Privacy', question: 'Do you save the coven titles I generate?', answer: 'No. Creation happens entirely within your web browser, so we never receive or retain your generated monikers or preferences. You can operate the tool inside a private or incognito tab if desired. Reloading the page erases the previous batch unless you have already copied it, which is why saving your top choices as you go remains the safe practice while you are still deciding on titles for your covens.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Coven Name Generator without an internet connection?', answer: 'Yes. Once the page has fully loaded, the Coven Name Generator operates completely inside your browser and requires zero internet connection to generate titles. You can brainstorm witch and coven names offline — during a writing retreat, a gaming session, or anywhere lacking service — and copying to your clipboard functions offline too. You only need a connection to open the site the initial time.' },
  { category: 'General', question: 'Are the coven titles official or part of an established franchise?', answer: 'No. The monikers are random creative mixes, not entries from any published novel, video game, or official witch mythology. Because coven titles in literature can be memorable, it is wise to do a quick search to ensure your preferred choice is not already heavily linked to a well-known tale before you build your own lore around it. Maintain a shortlist so you have alternatives if you need something more original.' },
];

export default async function CovenNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="coven" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Coven Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

