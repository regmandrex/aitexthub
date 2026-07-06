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
    description: 'Free coven name generator for coven and witch names. Create witch-style name ideas in your browser with no sign-up.',
    seoTitle: 'Coven Name Generator – Witch & Coven Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Coven Name Generator – Witch &amp; Coven Name Ideas</h2>
        <p>
          A coven name is an incantation in miniature. Before a single witch is described, the name of her circle — the Nightshade Coven, the Order of the Waning Moon, the Ashen Sisterhood — sets the mood: ancient, dark, nature-bound, or whimsical. This coven name generator builds those names by weaving lunar, occult, nature, and shadow motifs together with group words, so writers, role-players, and game designers can name a witch circle that feels like a genuine order rather than a random pair of words. It runs in your browser, needs no sign-up, and gives you 1–24 names per run with a copy button.
        </p>
        <p>
          The guide below covers what actually makes a coven name work: the recurring themes witches&apos; names draw on, the difference between dark and whimsical covens, the Wiccan and pagan flavor behind the real tradition, the fandom conventions from shows like American Horror Story: Coven and Charmed, and how to name a circle for stories, role-play, and games.
        </p>
        <p>
          People search for Coven name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Coven name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Coven or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Makes a Coven Name Work</h2>
        <p>
          A coven name has to conjure atmosphere in a handful of words. The strongest names pair an evocative mood word — moon, shadow, thorn, ash, hollow, raven — with a group noun that names the gathering: Coven, Circle, Order, Sisterhood, Sabbath, Cabal, or Rite. &quot;The Nightshade Circle&quot; and &quot;the Order of the Ashen Veil&quot; both work because the mood word does the imagery and the group noun does the structure.
        </p>
        <p>
          Say a generated name aloud and picture the witches who belong to it. If it sets an instant mood — dread, mystery, quiet power, or mischief — it will carry on the page. A name that says nothing about the coven&apos;s nature is a wasted opportunity, because the name is often the first characterization your audience gets.
        </p>

        <h2>The Themes Behind Coven Names</h2>
        <p>
          Coven names draw power from a handful of recurring themes. Picking one dominant theme keeps the name coherent rather than scattered:
        </p>
        <ul>
          <li><strong>Lunar and celestial.</strong> Moon, Crescent, Eclipse, Waning, Starless — the moon is the classic witch symbol, tied to cycles, tides, and old rites.</li>
          <li><strong>Nature and the wild.</strong> Thornwood, Nightshade, Willow, Bramble, Hemlock — plants (especially poisonous or hedge-witch herbs) and wild places ground a coven in the earth.</li>
          <li><strong>Darkness and shadow.</strong> Umbra, Hollow, Ravenmark, Duskfall, Ebon — for covens that lean sinister or secretive.</li>
          <li><strong>The ancient and occult.</strong> Sabbath, Rite, Elder, Veil, Sigil, Grimoire — words that promise old knowledge and hidden practice.</li>
          <li><strong>Elemental and seasonal.</strong> Ember, Frost, Tempest, Samhain, Solstice — tying the coven to a season or element gives it a whole flavor at once.</li>
        </ul>

        <h2>Dark Covens vs. Whimsical Covens</h2>
        <p>
          Not every coven is sinister. The generator produces names across a spectrum, and choosing the right end matters. A dark coven — a blood-magic cabal, a cursed order — wants hard, shadowed words: the Ravenmark Cabal, the Order of the Withered Hand. A whimsical or cozy coven — a hedge-witch circle, a kitchen-magic sisterhood — wants softer, greener imagery: the Willowbrook Circle, the Honeythorn Coven.
        </p>
        <p>
          Match the name to the tone of your story or role-play. A gentle circle of village witches sounds wrong under a menacing name, and a fearsome cabal loses its edge under a cozy one. Sort a generated batch by mood and keep the names whose weight matches the coven you actually have in mind.
        </p>

        <h2>Wiccan and Pagan Flavor</h2>
        <p>
          Real modern witchcraft — Wicca and broader neo-paganism — gives coven naming a grounded vocabulary you can borrow for authenticity. Actual covens often name themselves after a sabbat (the eight seasonal festivals like Samhain, Beltane, and Yule), a goddess or deity, a local landmark or grove, or a tradition (Gardnerian, Alexandrian, hereditary). Words like &quot;circle,&quot; &quot;grove,&quot; and &quot;hearth&quot; recur because they describe how practitioners actually gather. Drawing on this register — a lunar phase, a sacred herb, a seasonal rite — makes a fictional coven feel researched rather than invented on the spot.
        </p>

        <h2>Fandom Conventions: AHS Coven, Charmed, and More</h2>
        <p>
          Popular witch fiction sets expectations worth knowing. American Horror Story: Coven centers on a hidden academy and speaks of the Supreme, Salem descendants, and secret lineages, favoring a gothic Southern-American register. Charmed built its world around the &quot;Power of Three&quot; and the Halliwell line, leaning on family and destiny rather than a formal coven name. The Craft, Sabrina, and The Witcher each carry their own flavor. If you are writing in or near a fandom, echoing its naming logic — an academy, a bloodline, a sisterhood of three — helps your coven slot into reader expectations, while a distinct name keeps it your own.
        </p>

        <h2>Naming a Coven for Stories, Role-Play, and Games</h2>
        <p>
          In fiction, a coven name does a lot of worldbuilding for free — it tells the reader the group&apos;s age, ethos, and reputation before any scene. For tabletop and video-game campaigns, a coven is a memorable faction or antagonist, so give it a name that a party will remember and fear or seek out. In role-play communities and Discord servers, a shared coven name gives members something to belong to, complete with a sigil, a color, and titles.
        </p>
        <p>
          If your world has rival covens, deliberately give them contrasting names and themes — a lunar sisterhood against a blood cabal, a green hedge-circle against an ashen order — so your audience can feel the tension between them at a glance and never confuse the two.
        </p>

        <h2>How to Use This Coven Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide your coven&apos;s tone and theme first — dark cabal, cozy hedge-circle, lunar sisterhood, or ancient order.</li>
          <li>Set how many names you want per run (1–24) and click <strong>Generate names</strong> for a fresh batch of coven and witch names.</li>
          <li>Say each candidate aloud, picture the witches it names, and keep the ones that set the right mood; use the Copy button to save the list.</li>
          <li>Paste into your story notes, campaign doc, or server and shortlist five to ten favorites.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The most common mistake is mismatching mood — a menacing name on a gentle circle, or the reverse. Another is stacking too many mood words so the name becomes a soup of imagery; one strong mood word plus one group noun usually reads best. Avoid copying a famous coven name from a well-known show outright if you want originality, and instead echo its structure. Keep the names that are pronounceable, atmospheric, and true to the coven&apos;s actual nature.
        </p>

        <h2>Privacy</h2>
        <p>
          This coven name generator runs entirely in your browser. When you set a count and generate, the coven and witch names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your coven ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a coven name generator?', answer: 'A coven name generator is a browser tool that creates names for witch covens, circles, and magical sisterhoods. A coven name sets the tone for a group of witches — mysterious, dark, nature-bound, or ancient — so this generator mixes evocative witch-style words, moon and shadow imagery, and old-world roots to produce names that feel like a real order. It runs entirely in your browser, needs no sign-up, and gives you 1–24 coven names per run to use in stories, games, or role-play.' },
  { category: 'Naming', question: 'What makes a good coven name?', answer: 'A strong coven name conjures atmosphere in a few words. The best ones lean on evocative imagery — moon, shadow, thorn, ash, hollow — paired with a group word like Coven, Circle, Order, Sisterhood, or Sabbath. It should hint at the coven\'s nature: a gentle hedge-witch circle sounds very different from a blood-magic cabal. Say a generated name aloud and picture the witches who belong to it; if it sets an instant mood, it will work on the page.' },
  { category: 'Naming', question: 'What themes work best for coven names?', answer: 'Coven names draw power from a handful of recurring themes: lunar and celestial (Moon, Crescent, Eclipse), nature and the wild (Thornwood, Nightshade, Willow), darkness and shadow (Umbra, Hollow, Ravenmark), and the ancient or occult (Sabbath, Rite, Elder, Veil). Elemental and seasonal words also work well. Generate a batch, sort options by the theme that fits your coven\'s magic, and combine a mood word with a group noun to lock in the identity.' },
  { category: 'Use cases', question: 'How do I name a coven to match its magic?', answer: 'Let the coven\'s practice steer the name. A nature-based, healing circle suits soft, green words like Willow Grove or Hollow Circle; a dark or vengeful coven suits Nightshade Order or Bloodmoon Sabbath; an ancient, secretive order suits words like Veil, Elder, or Rite. Generate a batch, keep the names whose tone matches the witches\' powers and morals, and refine the pairing so the name promises the kind of magic your coven actually practices.' },
  { category: 'Usage', question: 'How do I use the coven name generator?', answer: 'Choose how many coven names you want (1–24) and click Generate names to get a fresh batch. Skim the list, mark the ones that fit the tone of your witches, and use the Copy button to save your shortlist into a notes app. Run it again for more options — there is no limit and no account needed. Then read your favorites aloud and picture the coven each one conjures before you commit.' },
  { category: 'General', question: 'Is the coven name generator free?', answer: 'Yes. This coven name generator is completely free to use in your browser. You can generate witch and coven name ideas as often as you like without creating an account, paying, or downloading anything. There is no daily or total cap on runs, so brainstorm a big pool of names for your story\'s covens, sit with them, and generate more whenever you need fresh options.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The coven name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your worldbuilding notes stay private, which matters when you are developing an unpublished story or campaign. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the coven name generator work on mobile?', answer: 'Yes. The generator is responsive and runs in any modern mobile browser, so you can brainstorm coven names on your phone during a writing session or a tabletop game. Open the page, choose how many names you want, tap Generate, and copy your favorites straight into notes. No app install is required — it works the same on phone, tablet, and desktop.' },
  { category: 'Limits', question: 'How many coven names can I generate at once?', answer: 'You can request 1–24 names per run. For a larger pool, just run it again — each run produces a fresh random set with no daily or total limit. Paste several runs into one document and remove any repeats. The 1–24 range keeps each batch easy to skim so you can quickly spot the two or three names that truly capture the coven you are building.' },
  { category: 'Usage', question: 'Can I copy the coven names I like?', answer: 'Yes. Use the Copy button to send all generated names to your clipboard as plain text, one per line, then paste them into notes, a manuscript, or a campaign document. This is the intended way to keep a shortlist while you decide, since the generator does not save your runs. Copy each promising batch before generating again so you do not lose a name that fit your witches.' },
  { category: 'General', question: 'Do I need an account or download?', answer: 'No. The coven name generator works with no sign-up, login, or install. Open the page, set how many names you want, click generate, and copy the results. There is no email or registration step and nothing to download — it is a self-contained browser tool, easy to pull up whenever you need a coven, circle, or sisterhood name for a project.' },
  { category: 'Naming', question: 'What group words can I pair with a coven name?', answer: 'Beyond "Coven," strong collective words include Circle, Order, Sisterhood, Sabbath, Cabal, Rite, Assembly, and Conclave — each carries a slightly different flavor. A Circle feels intimate and grounded, an Order feels structured and old, a Cabal feels secretive and dangerous. Generate a batch, then swap the group word to shift the tone: "Thornwood Circle" and "Thornwood Cabal" imply very different covens from the same root.' },
  { category: 'Use cases', question: 'Can I use these names for a story or novel?', answer: 'Yes. Writers use the generator to name witch covens in fantasy fiction, giving rival groups distinct identities. Generate a batch and assign contrasting names to different factions — a benevolent nature circle versus a shadow-bound cabal — so readers can tell them apart at a glance. Adjust spelling and pairing to fit each coven\'s lore. The tool is a fast source of atmospheric names; the mythology around them is yours to write.' },
  { category: 'Use cases', question: 'Can I use these names for a tabletop or video game campaign?', answer: 'Absolutely. Game masters use coven names for antagonist factions, hidden orders, and quest-giving circles in tabletop RPGs and worldbuilding for games. Generate a set, keep the names that fit each faction\'s alignment and territory, and build an emblem, motto, and roster of witches around the one you choose. A vivid coven name gives players an instant sense of who they are dealing with.' },
  { category: 'Technical', question: 'How are the coven names generated?', answer: 'The generator draws from curated word lists tuned for witch and coven themes — lunar, natural, shadowy, and occult words plus collective nouns — and randomly combines them in your browser each time you click generate. Nothing is sent to a server, and every run is independent, so the list differs each time. The output is creative inspiration, not an official or canon database, so treat each result as raw material for your worldbuilding.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a coven?', answer: 'Set the count to 12 or 24, generate, and copy the batch into a notes app. Read each name aloud and mark the ones that match the coven\'s theme and morality. Shortlist five to ten, sit with them, then pick the one that best fits the witches\' powers and place in your world. Run the generator again for fresh options whenever you need them — the no-account flow is built for this kind of iterative brainstorming.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a coven?', answer: 'The most common misstep is a name whose tone fights the coven — a soft, floral name on a menacing blood cult, or a grim name on a gentle healing circle. Another is over-length, since a name too long to say loses its incantatory punch. A third is reusing a famous coven name from well-known fiction, which reads as unoriginal. Favor names that are evocative, tone-appropriate, and distinctive to your world.' },
  { category: 'Naming', question: 'How do I make a coven name sound ancient or old-world?', answer: 'Lean on archaic and occult roots — Elder, Veil, Rite, Sabbath, Umbra, Wyrd — and pair them with weathered nature words like Ash, Thorn, Hollow, or Bramble. Slightly antique spellings and Latin- or Old-English-flavored fragments deepen the sense of age. Generate a batch, pick the options that already feel old, and lean the spelling further toward the archaic to suggest a coven that has practiced its craft for centuries.' },
  { category: 'Naming', question: 'Can I combine names or tweak the results?', answer: 'Yes, and it is encouraged. Mix a mood word from one generated name with a group noun from another to build the exact coven you want, or adjust spelling to fit your world\'s language. The generator gives you seeds — evocative fragments and collective words — and the strongest coven names usually come from bending a promising result rather than taking any single line untouched. Make each name feel handmade for your story.' },
  { category: 'Limits', question: 'Can I get more than 24 coven names?', answer: 'Each run tops out at 24 names, but there is no limit on how many times you can run it. To build a larger pool for a world with many covens, generate several batches and paste them into one document, then remove duplicates. This batching approach is the intended way to gather a big list of candidates before assigning distinct names to each circle in your story or campaign.' },
  { category: 'Privacy', question: 'Do you store the coven names I generate?', answer: 'No. Generation happens locally in your browser, so we never receive or store your generated names or settings. You can run the tool in a private or incognito window if you like. Refreshing the page clears the last batch unless you have already copied it, which is why copying your favorites as you go is the safe habit while you are still choosing names for your covens.' },
  { category: 'Troubleshooting', question: 'Can I use the coven name generator offline?', answer: 'Yes. Once the page has loaded, the coven name generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm witch and coven names offline — during a writing retreat, a campaign session, or anywhere without signal — and copying to your clipboard works offline too. You only need a connection to load the page the first time.' },
  { category: 'General', question: 'Are the coven names official or from a known franchise?', answer: 'No. The names are random creative combinations, not entries from any published book, game, or canon witch lore. Because coven names in fiction can be memorable, it is worth a quick search to make sure your favorite is not already strongly tied to a well-known story before you build your own around it. Keep a shortlist so you have backups if you want something more original.' },
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
          <p className="text-slate-700">Common questions about the Coven name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

