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


const toolSlug = 'yautja-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Yautja Name Generator',
    description: 'Free yautja name generator for Predator-style names. Create Yautja-style name ideas in your browser with no sign-up.',
    seoTitle: 'Yautja Name Generator – Predator Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Yautja Name Generator – Predator Name Ideas</h2>
        <p>
          The Yautja are the alien hunters of the Predator films — a proud, clan-based warrior species whose entire culture revolves around the honorable hunt. Their names are not soft: they are guttural, consonant-heavy, and studded with apostrophes and clicks, built to sound like a language spoken through mandibles rather than lips. This Yautja name generator produces Predator-style names in that register — harsh, hard to pronounce at a glance, and steeped in hunter culture — for fanfic writers, original-character (OC) creators, and role-players. It runs in your browser, needs no sign-up, and gives you 1–24 names per run with a copy button.
        </p>
        <p>
          The guide below explains what actually makes a Yautja name feel authentic: the sound and phonetics of the species, the honor culture that names are earned within, the difference between a guttural clan name and a rare human-given title, and how to build a Predator OC that slots believably into the hunt.
        </p>

        <h2>How Yautja Names Sound</h2>
        <p>
          The defining feature of a Yautja name is its phonetics. The species&apos; spoken language is a mix of clicks, growls, and roars, and their written names in the expanded lore reflect that — think of canon names like Dachande, Scarface (a nickname), Kwei, Chopper, and the honorific &quot;Dahdtoudi.&quot; A convincing Yautja name tends to share these traits:
        </p>
        <ul>
          <li><strong>Hard, guttural consonants.</strong> K, G, T, D, and R clusters dominate, giving names a throaty, aggressive weight.</li>
          <li><strong>Apostrophes and glottal breaks.</strong> Punctuation marks stand in for the clicks and stops of the spoken tongue — a name may fracture mid-word to suggest a sound a human throat cannot make.</li>
          <li><strong>Unpronounceable-looking at a glance.</strong> Part of the alien effect is that the name looks difficult on the page, dense with consonants and short on soft vowels.</li>
          <li><strong>Blunt, martial rhythm.</strong> No lilting melody — the cadence should feel like a challenge barked across a clearing.</li>
        </ul>

        <h2>Names and the Hunter&apos;s Honor Code</h2>
        <p>
          Among the Yautja, a name is bound up with honor. Their society is meritocratic and ritualistic: a young Predator becomes a full-fledged hunter (a &quot;Blooded&quot; warrior) only after killing worthy prey, and status is measured in trophies, scars, and the difficulty of the hunt. Names and titles reflect that standing. A dishonored Yautja — one who cheats the hunt or dies without courage — is a &quot;Bad Blood,&quot; effectively an outcast. When you name an OC, decide where they sit in this hierarchy: an Unblooded youngster, a proven Blooded hunter, a revered Elder, or a disgraced Bad Blood. The name can carry that weight through its severity.
        </p>

        <h2>Clan Names vs. Earned Titles</h2>
        <p>
          Yautja names in the lore come in two flavors, and mixing them thoughtfully makes a character richer. First, the true guttural name — the alien-tongue designation like Dachande or Kwei — which is what other Yautja use. Second, the earned epithet or nickname, often given by humans or derived from a deed: Scarface, Wolf, City Hunter, Chopper. Human characters, unable to pronounce the real name, tend to coin these descriptive handles. For an OC you can generate a harsh true name for use among their own kind and pair it with a blunt human nickname for scenes with human characters, exactly as the films and comics do.
        </p>

        <h2>Building a Predator OC</h2>
        <p>
          For fanfic and role-play, a Yautja OC&apos;s name is the first signal of whether they belong in the universe. Start from the sound: generate a batch and keep the names that are genuinely hard to say, dense with hard consonants and broken by apostrophes. Then anchor the name to the character&apos;s standing and clan. A grizzled Elder&apos;s name might feel weightier and more ancient; a reckless Unblooded youth&apos;s might be shorter and sharper.
        </p>
        <p>
          Consider the clan, too. Yautja hunt in clans with their own traditions, and members of one clan can share a naming texture — a recurring sound or root — so they read as kin. If your story pits clans against each other, give each a distinct phonetic flavor so readers can feel the rivalry the way they would between rival tribes.
        </p>

        <h2>Common Use Cases</h2>
        <p>
          Beyond original fanfic characters, these names suit several needs. Tabletop and video-game players building a Predator-styled hunter want a name that reads as alien and dangerous on a character sheet. Cosplayers and prop-makers naming their bio-mask persona want something that fits the lore. Writers of crossover fiction — Alien vs. Predator and beyond — need names for background hunters and rival clans. In each case the goal is the same: a name that sounds like it was roared, not spoken.
        </p>

        <h2>How to Use This Yautja Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide your Predator&apos;s standing and clan first — Unblooded youth, Blooded hunter, revered Elder, or dishonored Bad Blood.</li>
          <li>Set how many names you want per run (1–24) and click <strong>Generate names</strong> for a fresh batch of Yautja-style names.</li>
          <li>Keep the ones that are genuinely guttural and hard to pronounce, then use the Copy button to save the list.</li>
          <li>Pair a harsh true name for use among Yautja with a blunt human nickname (Scarface, Wolf) for scenes with human characters.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The biggest mistake is a name that sounds too human or too soft — smooth vowels and gentle rhythms break the alien effect instantly. Do not overload a name with apostrophes to the point of nonsense; one or two glottal breaks read as language, a dozen read as keyboard mashing. Avoid reusing a canon name outright (an OC literally named Dachande or Scarface reads as fan-service rather than an original character); echo the structure instead. And keep the name consistent with the character&apos;s honor standing — a revered Elder and a disgraced Bad Blood should not sound interchangeable.
        </p>

        <h2>Privacy</h2>
        <p>
          This Yautja name generator runs entirely in your browser. When you set a count and generate, the Predator-style names are created locally on your device — nothing is uploaded, logged, or stored on our servers. The output is for original creative use and does not reproduce an official roster from the films. Close the tab and the list is gone unless you copied it, so your OC ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Yautja name generator?', answer: 'It is a browser tool that creates Predator-style names — the harsh, guttural, honor-bound names of the Yautja alien hunters. It is built for writers, role-players, and worldbuilders who need a name for an original Yautja character, a hunting clan, or a Predator OC in fiction. The generator combines curated Yautja-style word pieces at random in your browser and gives you 1–24 names per run. It runs locally, stores nothing, and needs no sign-up.' },
  { category: 'Usage', question: 'How do I use the Yautja name generator?', answer: 'Set how many names you want (1–24) and click Generate to get a fresh batch of Predator-style names. Skim for the ones that sound suitably harsh and honorable, then use the Copy button to save the whole list. Paste it into your story notes, character sheet, or role-play profile and shortlist your favorites. Run again as often as you like for more options; there is no account, no download, and no limit on runs.' },
  { category: 'Naming', question: 'What makes a name sound Yautja?', answer: 'Yautja names lean on hard, guttural sounds — clustered consonants, glottal breaks, and a bold rhythm that feels like it was growled through mandibles rather than spoken softly. Bold and memorable beats delicate; a name should sound like a warrior who has earned it. The generator combines word pieces tuned to that harsh, alien cadence so the output reads as a hunter\'s name and not a soft human one. Say a candidate out loud — if it feels heavy and dangerous, it fits.' },
  { category: 'Naming', question: 'How do I name a Yautja character for a story?', answer: 'Match the name\'s weight to the character\'s standing in the Hunt. A seasoned, honored hunter can carry a longer, more imposing name; a young Blooded warrior earning their place suits something sharper and simpler. Decide the character\'s role — elder, clan leader, disgraced Bad Blood, or fresh initiate — then generate a batch and keep the name whose sound matches that role. You can tweak spelling or drop a syllable to fine-tune the feel to your character.' },
  { category: 'Naming', question: 'How should I name a Yautja hunting clan?', answer: 'A clan name should sound collective and imposing — something that reads well as a banner over a group of hunters rather than a single warrior. Generate a batch, favor the harsher and broader-sounding options, and pick one that contrasts with your individual characters\' names so the clan reads as its own entity. If you are building rival clans, assign each a distinctly different sound so readers can tell your factions apart in a fight.' },
  { category: 'Use cases', question: 'Can I use these names for role-play and worldbuilding?', answer: 'Yes — that is exactly what the tool is for. Tabletop players building a Predator-style hunter, forum role-players, and worldbuilders inventing a whole Yautja clan all use the same harsh, honor-coded style. Generate a batch, match a name to your character\'s rank and personality, and drop it straight into your profile or campaign notes. The names are yours to use and tweak freely once you pick them.' },
  { category: 'Naming', question: 'Should Yautja names be long or short?', answer: 'Either can work, and the length itself carries meaning. Longer, more elaborate names suit elders, clan leaders, and legendary hunters whose reputation precedes them. Shorter, sharper names suit young warriors, scouts, or characters you want to feel quick and lethal. Generate a mix and let the length signal standing — pairing a long-named elder against a short-named upstart in the same scene instantly tells readers who is who.' },
  { category: 'Best practices', question: 'How do I name a whole group of Yautja characters?', answer: 'Generate a batch and pick names that contrast in sound and length so your characters do not blur together. Give the elder a long, imposing name, the reckless young hunter a short, sharp one, and the outcast Bad Blood something rougher still. Lay the candidates side by side and assign the most distinct-sounding names to your most important characters, keeping the rest varied enough that no two are easily confused in dialogue.' },
  { category: 'Naming', question: 'Can I tweak the generated names?', answer: 'Absolutely. The generator gives you raw material; the final name is yours to shape. Swap a vowel for a harsher one, drop or add a syllable, or splice the strong front of one name onto the tail of another until it sounds exactly like your character. This is a normal part of the workflow — treat the output as a starting pool and tune it until the name feels earned rather than random.' },
  { category: 'Naming', question: 'What common mistakes should I avoid with Yautja names?', answer: 'The biggest one is picking a name that sounds too soft or too human — a gentle, flowing name undercuts a fearsome hunter. Avoid names that are hard to say aloud, since they trip up dialogue and role-play. Also avoid giving every character in a clan a similar-sounding name, which makes them blur together. Favor harsh, distinct, pronounceable options and let each name earn its place the way a Yautja earns its mark.' },
  { category: 'General', question: 'Is the Yautja name generator free?', answer: 'Yes, it is completely free to use in your browser with no account, no payment, and no download. You can generate Predator-style names as often as you like, and there is no daily or total limit on runs. Everything happens locally on your device, so there is nothing to sign up for — open the page, set a count, and start generating hunter names right away.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I generate names?', answer: 'No. When you set a count and click generate, the names are created locally on your device inside your browser. Your settings and the generated list are never uploaded to our servers, and nothing is logged or stored. Your character ideas stay private until you decide to publish them. You can even run the tool in a private or incognito window if you prefer.' },
  { category: 'Compatibility', question: 'Does the generator work on mobile?', answer: 'Yes. The tool runs in any modern web browser and is responsive on desktop, tablet, and phone, with no app to install. Brainstorming a character on your phone? Open the page, generate a batch, and copy it straight into your notes app or a character sheet. It works anywhere you can open a browser tab.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool — say, to name an entire clan — just run it again, since each run produces a fresh random batch and there is no daily or total cap. Paste several runs into one document and remove any duplicates. The 24-name limit keeps each list easy to skim while still giving you plenty of hunter names to sort through.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button puts the whole list on your clipboard as plain text, one name per line, so it pastes cleanly into any notes app, character sheet, or campaign document. Copying is the intended way to save a batch before you shortlist. Grab a big list, drop it into your worldbuilding notes, and mark the names that fit each character so you can compare them side by side.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No. The generator works with no sign-up, login, email, or registration. It runs entirely in your browser — open the page, choose how many names you want, click generate, and copy the results. There is nothing to create or verify, and no personal information is ever requested. Just open it and start naming your Yautja hunters and clans.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated Yautja-style word pieces — harsh consonant clusters and guttural fragments — then randomly combines them in your browser so each run is different. The pieces are chosen to sound bold, alien, and honor-bound. Nothing is sent to a server, and the output is original inspiration rather than an official roster pulled from a database. Read a few aloud and you will hear the heavy, warrior-like cadence they are tuned for.' },
  { category: 'General', question: 'Are these official Predator or Yautja names?', answer: 'No. Every name the tool produces is original material for your own creative use — it is not a database of canon characters from the films or comics. That is deliberate, so your hunter stands on its own rather than borrowing an established name. If a generated name happens to echo the general style of canon Yautja, that is the point; if you want to avoid any specific canon name, simply pick another from your batch.' },
  { category: 'Naming', question: 'How does Yautja honor culture affect naming?', answer: 'The Yautja are defined by a strict code of honor built around the Hunt, and a name should feel earned within that world. A respected elder or clan leader carries a weighty, imposing name; a young Blooded warrior who has just made their first kill suits something sharper and less grand; a dishonored Bad Blood might have a rougher, harsher name. Let the character\'s standing in that honor system guide which generated name you keep.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a Yautja character?', answer: 'Decide the character\'s role and standing first — elder, clan leader, young hunter, or outcast — then generate a batch and read each candidate aloud. Keep the names whose sound and length match that role, tweak spelling if needed, and check none of them blur with your other characters. Copy your shortlist so you have backups if a name does not sit right once you see it in dialogue. A few minutes of generating beats staring at a blank field.' },
  { category: 'Naming', question: 'How do I make rival hunters sound different?', answer: 'Give each rival a distinctly different sound so readers feel the contrast in every scene they share. Vary the length, the harshness, and the rhythm — a long, cold, deliberate name against a short, snarling one immediately reads as two different warriors. Generate a batch, lay the strongest candidates side by side, and deliberately assign contrasting names to opponents so their clash is clear even before you describe them.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, generating and copying names both work entirely offline in your browser with no network connection needed. You only need a connection to open the page the first time. That makes it handy for brainstorming Yautja names on the go — generate, copy into a local notes file, and refine your list wherever you are, even without internet.' },
  { category: 'General', question: 'Does this tool design the character for me?', answer: 'No. The generator only produces name ideas — it does not write the character\'s backstory, rank, or appearance. Pair a generated name with your own concept: decide the hunter\'s clan, their place in the honor code, and their personality, then choose the name whose sound fits. Think of it as a fast idea machine for the name specifically, leaving the rest of the character in your hands to build.' },
];

export default async function YautjaNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="yautja" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Yautja name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

