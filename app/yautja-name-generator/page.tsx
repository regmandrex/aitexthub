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
    description: 'No-cost Yautja Name Generator for Predator-inspired names. Generate Yautja-style name concepts instantly in your browser without registering.',
    seoTitle: 'Yautja Name Generator – Predator Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Yautja Name Generator - Predator Name Concept Ideas</h2>
        <p>The Yautja are the alien hunters from the Predator films — a proud, clan-based warrior race whose entire society centers around the honorable hunt. Their names are far from soft: they are throaty, consonant-heavy, and filled with apostrophes and clicks, designed to sound like a language spoken through mandibles instead of lips. This Yautja Name Generator creates Predator-style names in that exact register — harsh, difficult to pronounce at first glance, and steeped in hunter culture — for fan fiction writers, original-character (OC) creators, and role-players. It functions within your browser, needs no registration, and delivers 1–24 names per generation alongside a copy button.</p>
        <p>The guide below outlines what truly makes a Yautja name feel authentic: the acoustics and phonetics of the species, the honor culture wherein names are earned, the distinction between a guttural clan name and a rare human-given title, and how to construct a Predator OC that fits believably into the hunt.</p>

        <h2>What Yautja Names Sound Like</h2>
        <p>The defining characteristic of a Yautja name lies in its phonetics. The spoken language of the species combines clicks, growls, and roars, and their written names within the expanded lore reflect that — think of canonical names like Dachande, Scarface (a nickname), Kwei, Chopper, and the honorific &quot;Dahdtoudi.&quot; A convincing Yautja name generally displays these qualities:</p>
        <ul>
          <li><strong>Rugged, guttural sounds.</strong> K, G, T, D, and R groupings prevail, lending titles a harsh, ferocious heft.</li>
          <li><strong>Apostrophes and glottal breaks.</strong> Punctuation marks represent the clicks and stops of the spoken tongue — a name might fracture mid-word to imply a sound human vocal cords cannot replicate.</li>
          <li><strong>Unpronounceable-looking at a glance.</strong> Part of the alien aesthetic is that the name appears challenging on the page, packed with consonants and lacking soft vowels.</li>
          <li><strong>Blunt, martial rhythm.</strong> No melodic lilt — the cadence should feel like a challenge barked across an open field.</li>
        </ul>

        <h2>Monikers and the Hunter&apos;s Honor Code</h2>
        <p>Among the Yautja, a name is deeply tied to honor. Their culture is merit-based and ritualistic: a young Predator attains full hunter status (becoming a &quot;Blooded&quot; warrior) only after slaying worthy prey, and social standing is gauged by trophies, scars, and the difficulty of the hunt. Names and titles reflect that position. A dishonored Yautja — someone who cheats the hunt or dies without bravery — is a &quot;Bad Blood,&quot; essentially an outcast. When naming an OC, determine their place in this hierarchy: an Unblooded novice, an experienced Blooded hunter, a respected Elder, or an exiled Bad Blood. The name can convey that gravity through its harshness.</p>

        <h2>Clan Names versus Earned Titles</h2>
        <p>Yautja names in the lore come in two styles, and blending them thoughtfully creates a richer character. First, the authentic guttural name — the alien-language designation such as Dachande or Kwei — which other Yautja utilize. Second, the earned epithet or moniker, frequently bestowed by humans or stemming from a deed: Scarface, Wolf, City Hunter, Chopper. Human characters, unable to articulate the real name, tend to invent these descriptive handles. For an OC, you can generate a harsh true name for interactions among their own kind and pair it with a blunt human nickname for scenes featuring humans, exactly as the films and comics portray.</p>

        <h2>Crafting a Predator OC</h2>
        <p>For fan fiction and role-play, a Yautja OC&apos;s name serves as the primary indicator of whether they belong in the universe. Begin with the sound: generate a selection and keep the names that prove genuinely difficult to say, heavy with hard consonants and broken up by apostrophes. Next, anchor the moniker to the character&apos;s status and clan. A weathered Elder&apos;s name might feel heavier and more ancient; a rash Unblooded youth&apos;s might be briefer and sharper.</p>
        <p>Consider the clan as well. Yautja hunt in clans possessing unique traditions, and members of a single clan often share a naming texture — a recurring sound or root — so they register as relatives. If your narrative pits clans against one another, assign each a distinct phonetic style so readers can sense the rivalry just as they would between opposing tribes.</p>

        <h2>Common Use Cases</h2>
        <p>Aside from original fan fiction characters, these names serve multiple purposes. Tabletop and video game players crafting a Predator-style hunter desire a moniker that reads as alien and dangerous on a character sheet. Cosplayers and prop makers naming their bio-mask persona want something fitting the lore. Authors of crossover fiction — Alien vs. Predator and beyond — require names for background hunters and opposing clans. In every scenario, the objective remains identical: a name that sounds as though it were roared rather than spoken.</p>

        <h2>[10] How to Use This Yautja Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide your Predator&apos;s standing and clan first — Unblooded youth, Blooded hunter, respected Elder, or dishonored Bad Blood.</li>
          <li>Choose the quantity of names per batch (1–24) and press <strong>Generate names</strong> to produce a new set of Yautja-style names.</li>
          <li>Keep the ones that feel truly guttural and difficult to pronounce, and then click the Copy button to store your list.</li>
          <li>Combine a harsh true name meant for Yautja use with a blunt human nickname (Scarface, Wolf) when writing scenes featuring humans.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>

        <h2>Tips and Mistakes to Avoid</h2>
        <p>The biggest pitfall is a name sounding too human or too delicate — soft vowels and mild rhythms instantly shatter the alien atmosphere. Avoid stuffing a name with apostrophes until it becomes nonsense; one or two glottal breaks sound like actual speech, while a dozen look like keyboard smashing. Do not reuse a canon name directly (an OC literally called Dachande or Scarface feels like fan-service rather than an original character); mimic the structure instead. Finally, keep the name aligned with the character's honor standing — a revered Elder and a disgraced Bad Blood should never sound interchangeable.</p>

        <h2>Privacy</h2>
        <p>This Yautja Name Generator operates entirely within your browser. When you select a quantity and generate, the Predator-style names are built locally on your hardware — nothing gets uploaded, tracked, or saved on our servers. The results serve original creative purposes and do not replicate an official roster from the films. Close the tab and the list vanishes unless you saved it, ensuring your OC concepts remain yours.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Yautja name generator?', answer: 'It functions as a browser utility that crafts Predator-style names — the harsh, guttural, honor-bound identities of the Yautja alien hunters. Designed for authors, role-players, and worldbuilders requiring a moniker for an original Yautja character, a hunting clan, or a Predator OC in their writing. The generator merges curated Yautja-style word segments randomly inside your browser to supply 1–24 names per generation. It executes locally, retains no data, and demands no registration.' },
  { category: 'Usage', question: 'How can someone operate the Yautja Name Generator?', answer: 'Choose how many names you require (1–24) and hit Generate to produce a fresh set of Predator-style names. Scan for the options that sound suitably harsh and honorable, then click the Copy button to capture the entire list. Transfer it into your story notes, character sheet, or role-play profile to shortlist your top choices. Run it again as frequently as desired for additional possibilities; there is no profile, no software installation, and no restriction on uses.' },
  { category: 'Naming', question: 'What defines a true Yautja name?', answer: 'Yautja names rely heavily on hard, guttural sounds — clustered consonants, glottal breaks, and a robust rhythm resembling a growl forced through mandibles rather than a soft whisper. Bold and memorable beats delicate; a name ought to sound like a warrior earned it. The generator blends word fragments tailored to that harsh, alien cadence so the final output reads as a hunter\'s designation instead of a gentle human title. Speak a candidate aloud — if it feels heavy and dangerous, it fits.' },
  { category: 'Naming', question: 'How should I name a Yautja character for my fiction?', answer: 'Match the name\'s weight to the character\'s status within the Hunt. A seasoned, respected hunter can carry a longer, more imposing moniker; a young Blooded warrior proving their worth suits something sharper and simpler. Decide the character\'s position — elder, clan leader, disgraced Bad Blood, or new initiate — then generate a batch and keep the name whose sound fits that function. You may adjust spelling or drop a syllable to customize the feel for your specific character.' },
  { category: 'Naming', question: 'What is the best way to name a Yautja hunting clan?', answer: 'A clan designation should sound collective and commanding — something that reads effectively as a banner over multiple hunters rather than a single warrior. Generate a batch, prioritize the harsher and broader-sounding choices, and select one that contrasts with your individual characters\' names so the clan stands out as its own entity. When creating rival clans, give each a distinctly different sound to help readers separate your factions during conflict.' },
  { category: 'Use cases', question: 'Are these names suitable for role-play and worldbuilding?', answer: 'Yes — that is the exact purpose of this utility. Tabletop gamers creating a Predator-style hunter, forum role-players, and worldbuilders designing an entire Yautja clan all utilize this same harsh, honor-coded style. Generate a batch, match a name to your character\'s rank and temperament, and paste it straight into your profile or campaign notes. The names are yours to employ and modify freely once selected.' },
  { category: 'Naming', question: 'Are Yautja names supposed to be short or long?', answer: 'Either approach works, and length itself conveys meaning. Extended, intricate names fit elders, clan leaders, and legendary hunters whose reputations precede them. Brighter, shorter names suit young warriors, scouts, or characters meant to feel quick and lethal. Generate a mix and let length indicate social standing — pitting a long-named elder against a short-named novice in the same scene immediately clarifies who is who for readers.' },
  { category: 'Best practices', question: 'What is the best way to name an entire group of Yautja characters?', answer: 'Produce a batch and select names varying in sound and length so your characters remain distinct. Assign the elder a lengthy, imposing name, the reckless young hunter a brief, sharp one, and the outcast Bad Blood something even rougher. Place the candidates side by side and allocate the most unique-sounding names to your primary characters, keeping the rest diverse enough that none get mixed up during dialogue.' },
  { category: 'Naming', question: 'Am I allowed to tweak the generated names?', answer: 'Certainly. The generator supplies raw material; the final designation is yours to mold. Substitute a vowel for a harsher alternative, remove or add a syllable, or attach the strong beginning of one name to the end of another until it sounds right for your character. This forms a standard part of the creative process — view the output as an initial pool and refine it until the name feels earned rather than randomized.' },
  { category: 'Naming', question: 'Which common pitfalls should be avoided with Yautja names?', answer: 'The primary mistake is selecting a name that sounds overly soft or human — a gentle, flowing label undermines a terrifying hunter. Steer clear of names that prove difficult to pronounce, as they disrupt dialogue and role-play. Also avoid granting every character in a clan a similar-sounding name, which causes them to blur together. Favor harsh, distinct, speakable choices and let each name earn its place much like a Yautja earns their mark.' },
  { category: 'General', question: 'Does the Yautja Name Generator cost anything?', answer: 'Yes, it remains completely free to use within your browser with no account, no fees, and no downloads required. You may generate Predator-style names as often as you wish, with zero daily or total limits on executions. Everything processes locally on your device, meaning no registration is necessary — just open the page, choose a quantity, and start generating hunter names instantly.' },
  { category: 'Privacy', question: 'Does generating names mean my data gets sent to a server?', answer: 'No. When you specify a count and press generate, the names are constructed locally on your machine inside your browser. Your configurations and the resulting list are never transmitted to our servers, and nothing is logged or saved. Your character concepts stay private until you choose to share them. You may even run the tool within a private or incognito window if preferred.' },
  { category: 'Compatibility', question: 'Will the generator function properly on mobile devices?', answer: 'Yes. The utility functions inside any modern web browser and adapts to desktop, tablet, and phone without requiring an app installation. Brainstorming a character on your mobile device? Open the page, generate a batch, and copy it directly into your notes app or character sheet. It operates anywhere you can open a browser tab.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You can request 1–24 names per run. If a larger pool is needed — for instance, when naming an entire clan — simply run it again, since each execution yields a fresh random set with no daily or total ceiling. Paste multiple runs into a single document and delete any duplicates. The 24-name limit keeps each list manageable while still providing plenty of hunter names to evaluate.' },
  { category: 'Usage', question: 'Am I allowed to copy the generated names?', answer: 'Indeed, the Copy button transfers the complete list straight to your clipboard as unformatted text, placing one name per line for seamless pasting into notes, character sheets, or campaign files. This copy feature is the primary way to save batches prior to narrowing down your choices. Simply grab a large list, paste it into your lore notes, and flag the names that suit each individual character for direct side-by-side comparison.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No, the generator operates completely without requiring any sign-up, login, email, or registration. It functions entirely within your web browser—just open the site, select your desired quantity of names, hit generate, and copy the outputs. There are no accounts to create or verify, and zero personal data is ever collected. Simply load the page and begin crafting names for your Yautja hunters and clans.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The tool pulls from selected Yautja-inspired phonetic pieces featuring harsh consonant clusters and guttural parts, then blends them randomly in your browser to ensure every execution yields unique results. These components are specifically designed to sound fierce, otherworldly, and honor-driven. Nothing gets transmitted to an external server, meaning the results serve as fresh inspiration rather than an official database export. Speak a few out loud to experience their heavy, warrior-centric rhythm.' },
  { category: 'General', question: 'Are these authentic Predator or Yautja titles?', answer: 'No, every single name generated by this tool is completely original material intended for your personal creative projects and is not sourced from a canon database of film or comic characters. This is done on purpose so your hunter maintains originality instead of borrowing established lore. If a generated moniker happens to mirror the general vibe of canon Yautja, that is the goal, but should you wish to sidestep any particular canon title, just select another option from your set.' },
  { category: 'Naming', question: 'How does Yautja honor tradition influence the naming process?', answer: 'Yautja society is defined by a rigid honor code centered on the Hunt, meaning a name should feel genuinely earned within that universe. A revered elder or clan leader naturally deserves a weighty, imposing title; a young Blooded hunter securing their initial kill fits a sharper, more modest designation; and a disgraced Bad Blood might suit a rougher, harsher term. Allow the character\'s status within this honor framework to dictate which generated name you ultimately adopt.' },
  { category: 'Best practices', question: 'What is the optimal workflow to name a Yautja character?', answer: 'Determine your character\'s standing and function first—such as elder, clan leader, novice hunter, or outcast—then produce a set and voice each option aloud. Retain the names whose audio quality and length align with that specific position, adjust spelling if necessary, and verify they do not overlap with your other cast members. Copy your shortlisted picks to ensure you have alternatives handy if a moniker feels off during dialogue. Spending a few minutes generating beats staring at an empty text box.' },
  { category: 'Naming', question: 'How can I make competing hunters sound distinct?', answer: 'Assign each rival a distinctly contrasting sound so readers instantly notice the difference during shared encounters. Vary the length, harshness, and pacing by pitting a long, cold, calculated name against a short, aggressive snarl to easily distinguish two warriors. Generate a batch, place the top contenders side by side, and consciously pick opposing names for adversaries so their rivalry remains obvious before any physical description is provided.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the generator offline?', answer: 'Yes, once the initial page load completes, both name generation and copying function fully offline inside your browser without needing any internet connection. You only require connectivity to load the page initially. This makes it exceptionally convenient for brainstorming Yautja names while traveling—simply generate, copy to a local file, and refine your selections wherever you happen to be.' },
  { category: 'General', question: 'Does this utility create the character for you?', answer: 'No, the generator merely supplies name concepts and does not write your character\'s history, rank, or visual design. Combine a generated name with your personal vision by defining the hunter\'s clan, honor standing, and personality, then picking the moniker that matches best. Consider it a rapid idea generator exclusively for names, leaving the rest of the character creation process entirely up to you.' },
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
          <p className="text-slate-700">Frequent inquiries concerning the Yautja Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

