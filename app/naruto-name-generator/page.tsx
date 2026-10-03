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


const toolSlug = 'naruto-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Naruto Name Generator',
    description: 'Free Naruto Name Generator for clan, OC, and shinobi names. Create ninja names incorporating given names, clan surnames, and Hidden Village connections — right in your browser without registering.',
    seoTitle: 'Naruto Name Generator – Shinobi, Clan & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Naruto Name Generator – Shinobi, Clan &amp; OC Names</h2>
        <p>This Naruto Name Generator constructs shinobi names the exact way the original series does: a given name, a clan surname, and an indication of the character's Hidden Village. Whether you are drafting fan fiction located in Konohagakure, creating an original character (OC) for a roleplay server, or simply wanting a screen name that fits the Naruto universe, the utility instantly delivers ready-to-use ninja names within your browser. There is no registration, no data is stored, and you are free to generate as many sets as you desire.</p>
        <p>Naruto names are never just random syllables. They adhere to traditional Japanese naming conventions (family name first, personal name second), incorporate food and nature themes, and frequently hint at a character's element, clan, or combat style. This section outlines these exact rules so the names you choose genuinely feel canon — allowing any OC you design to fit seamlessly into a clan, a three-person squad, or a village possessing a kekkei genkai.</p>

        <h2>How Are Naruto Character Names Constructed</h2>
        <p>Kishimoto constructed the character roster using traditional Japanese vocabulary, folklore references, and food puns. Comprehending this structure allows you to build names that feel native to the universe instead of randomly assembled:</p>
        <ul>
          <li><strong>Surname first.</strong> Uchiha Sasuke, Uzumaki Naruto, Hyuga Hinata — the family name comes first. Because clan surnames carry the heaviest identity, the generator utilizes the surname as the primary anchor.</li>
          <li><strong>Food and plant puns.</strong> &quot;Naruto&quot; refers to the spiral fish-cake found in ramen; &quot;Sakura&quot; (cherry blossom) and &quot;Sasuke&quot; draw on botanical and folklore roots. Soft, edible-sounding given names fit the genre perfectly.</li>
          <li><strong>Clan = theme.</strong> Hyuga (sun), Uchiha (fire/fan), Akimichi (expansion/food), Nara (shadow/deer), Aburame (insects). A family name immediately hints at a jutsu specialty or kekkei genkai before you read a single sentence.</li>
          <li><strong>Nature-nature naming.</strong> Many names draw inspiration from the five chakra natures — earth, wind, fire, water, and lightning — which explains why elemental terms make fantastic given names for an OC.</li>
        </ul>

        <h2>Monikers Grouped by Hidden Village</h2>
        <p>Every major shinobi village possesses its own distinct style, and matching a name to the correct village makes any OC instantly more convincing:</p>
        <ul>
          <li><strong>Konohagakure (Hidden Leaf).</strong> The birthplace of the Uzumaki, Hyuga, Uchiha, Nara, and Akimichi clans. Plant- and food-inspired names feel right at home here.</li>
          <li><strong>Sunagakure (Hidden Sand).</strong> Kankuro, Gaara, Temari — featuring harsher consonants alongside wind and desert motifs.</li>
          <li><strong>Kirigakure (Hidden Mist).</strong> The Seven Swordsmen, Haku, Zabuza - chilly, water-based monikers carrying extra sharpness.</li>
          <li><strong>Kumogakure (Hidden Cloud).</strong> Killer B, the Raikage - tied to storms and electrical forces.</li>
          <li><strong>Iwagakure (Hidden Stone).</strong> Earth-affiliated, solid, heavy-sounding titles.</li>
        </ul>
        <p>Select a settlement first, produce a set, and retain those whose tones match its element. A Hidden Mist OC named after water and a Hidden Sand OC named after wind read quite differently even when both are &quot;Naruto-style.&quot;</p>

        <h2>Designing an Original Character (OC)</h2>
        <p>For fan fiction and role-play, a moniker is the initial detail critics notice. A solid Naruto OC name serves three purposes at once: it places the figure in a settlement, it hints at their lineage or element, and it applies the surname-first sequence so it fits smoothly next to official characters. Create a batch, then ask regarding each option: Does it sound like it could appear on a squad roster next to Kakashi&apos;s team? If affirmative, it matches the right tone.</p>
        <p>A frequent tactic is picking an official clan to connect your OC with - like a minor Hyuga branch member or a lone Uzumaki surviving the clan&apos;s fall - letting the surname carry the weight while the generated given name keeps it fresh. Should your OC lack a clan (an orphan of the settlement, like Naruto himself initially), an independent given name plus a self-selected nickname works equally well.</p>

        <h2>Techniques, Monikers, and Titles</h2>
        <p>Beyond birth names, Naruto relies heavily on epithets - titles gained through battle. Jiraiya is the Toad Sage; Tsunade is the Slug Princess; Minato is the Yellow Flash; Itachi bears the burden of the Uchiha massacre. If you are naming an OC, think about creating a base moniker and appending an epithet reflecting their signature jutsu or chakra affinity: &quot;the Crimson Blade,&quot; &quot;the Silent Mist,&quot; &quot;the Lightning Fang.&quot; This dual-layer naming (real name plus combat title) is among the most recognizable tropes in the franchise.</p>

        <h2>How to Use This Naruto Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to retrieve a fresh set of shinobi-themed monikers.</li>
          <li>Scan for titles matching your chosen settlement or clan, then apply the Copy button to preserve the full selection.</li>
          <li>Paste into your narrative notes or character sheet and shortlist your top picks.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>Generation occurs completely within your browser. Your preferences and the monikers you build are never transmitted to a server, keeping your OC concepts private until you decide to share them.</p>

        <h2>Tips for Picking the Right Name</h2>
        <p>Speak the moniker aloud - Naruto monikers are meant for vocalization in sub and dub alike, so a title that trips the tongue will trip your readers too. Maintain the surname-first sequence if you want official flavor, or reverse it to given-name-first when your story uses Western order for accessibility; just keep it uniform across your cast. Avoid accidentally duplicating an official full name (you do not want an OC literally called Uchiha Sasuke), but borrowing an official surname for a new branch member is fully acceptable and instantly grounds the figure.</p>
        <p>If you are naming a complete team of three (the standard genin squad), produce a set and choose monikers offering contrast - one soft and plant-based, one hard and elemental, one neutral - so the trio reads like distinct individuals instead of variations on a single theme. That exact contrast makes Team 7 (Naruto, Sasuke, Sakura) succeed on the page.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It creates Naruto-style shinobi, clan, and OC names for fan fiction, role-play, and handles.</li>
          <li>It does not duplicate official character names as a database - output is meant for original creative use.</li>
          <li>It does not save your generated list or settings; everything processes locally inside your browser.</li>
          <li>It does not verify name availability on any game, forum, or social network - check that yourself when planning to use a moniker as a username.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>Naruto is among the most-named fandoms online - fiction writers, AMV creators, role-players, and gamers playing titles like Shinobi Striker and the Ultimate Ninja Storm series all require monikers that fit. This Naruto Name Generator supplies that pool instantly, grounded in the franchise&apos;s authentic naming logic: surname-first order, clan-coded surnames, village-flavored tones, and elemental given names. Create a set, rely on the clan and settlement notes above, and you will finish with shinobi names feeling as though they always belonged to the world.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Naruto name generator?', answer: 'A Naruto Name Generator is a browser utility that builds shinobi-themed monikers in the fashion of the Naruto series - clan surnames, given names, and settlement-flavored sounds. It follows the franchise\'s naming logic (surname first, food and nature motifs, clan-coded surnames) so the monikers suit fan fiction, original characters, role-play, and handles. It functions locally with zero registration and preserves nothing.' },
  { category: 'Naming style', question: 'How do actual Naruto names work structurally?', answer: 'Naruto utilizes Japanese naming order: the surname appears first, then the given name (Uzumaki Naruto, Uchiha Sasuke, Hyuga Hinata). Surnames are clan-coded and point toward a kekkei genkai or jutsu specialty, while given names often originate from food, plants, or folklore. "Naruto" itself represents the swirl of fish cake in ramen, and "Sakura" denotes cherry blossom.' },
  { category: 'Naming style', question: 'Do names in Naruto carry specific meanings?', answer: 'Most definitely. Kishimoto routinely based names on authentic Japanese terms and wordplay. Family names signify an inherent theme — Uchiha relates to fans and fire, Nara denotes shadow and deer, Aburame pertains to insects, and Akimichi references sustenance. Given names regularly reflect the natural landscape or the five elemental chakra types (lightning, fire, water, earth, wind). Selecting a name with deliberate significance gives your custom OC an authentic presence.' },
  { category: 'OC', question: 'What is the best way to create a name for a Naruto OC (original character)?', answer: 'A powerful Naruto OC name accomplishes three goals: grounds the person in a specific settlement, hints at their elemental affinity or family, and maintains the traditional surname-first structure so it fits smoothly beside official characters. Connect your OC to a designated family and let the surname carry the weight, or make them independent by using a standalone given name combined with an original moniker like Naruto possessed initially.' },
  { category: 'OC', question: 'Is it acceptable to assign my OC a recognized family surname?', answer: 'Indeed - adopting an established surname for a new collateral family member remains a reliable and effective strategy to anchor an OC. A minor Hyuga branch descendant or a surviving Uzumaki instantly feels authentic to the setting. Simply avoid duplicating a complete canonical name (never call an OC literally Uchiha Sasuke); instead, pair the familiar surname with an entirely original given name.' },
  { category: 'Villages', question: 'In what ways do names vary depending on the Hidden Village?', answer: 'Every settlement carries a distinct style. Konohagakure (Leaf) names feel warm and draw inspiration from plants or foods. Sunagakure (Sand) relies on harsher consonants and wind themes. Kirigakure (Mist) leans toward cold, water-associated tones. Kumogakure (Cloud) holds lightning connections, and Iwagakure (Stone) sounds grounded and heavy. Choose your village first, then select generated names whose sounds match that region\'s element.' },
  { category: 'Villages', question: 'Which village should my character originate from?', answer: 'Select the town that matches your narrative and your character\'s chakra affinity. If your OC specializes in water techniques, Kirigakure (Hidden Mist) works well; wind users fit Sunagakure (Hidden Sand); lightning users suit Kumogakure (Hidden Cloud). Konohagakure (Hidden Leaf) serves as the standard home for most prominent clans, making it the most secure choice for a story set in the primary canon timeline.' },
  { category: 'Naming style', question: 'What exactly are epithets and combat titles within Naruto?', answer: 'Beyond given names, figures earn titles based on their achievements: Jiraiya is the Toad Sage, Tsunade the Slug Princess, Minato the Yellow Flash. For an OC, create a foundational name and attach a title representing their signature technique or chakra type - "the Crimson Blade," "the Silent Mist," "the Lightning Fang." This real-name-plus-title formula stands out as one of the most recognizable conventions in the franchise.' },
  { category: 'OC', question: 'How can I properly name a complete three-person genin squad?', answer: 'Produce a collection and select three names that offer good contrast: one soft and plant-based, one hard and elemental, one neutral. That exact contrast is why Team 7 (Naruto, Sasuke, Sakura) sounds like three distinct individuals rather than copy-pasted themes. Try to ensure variation in length and auditory feel across the entire team.' },
  { category: 'Usage', question: 'How can I operate this Naruto Name Generator?', answer: 'Set the desired quantity of names (1-24), click Generate names, and review the results for options that suit your chosen clan or village. Use the Copy button to capture the complete list, paste it directly into your writing notes or character profile, and shortlist your top picks. Run it again for additional choices - there are zero restrictions, required accounts, or downloads.' },
  { category: 'Usage', question: 'Ought I to maintain the surname-first arrangement?', answer: 'Preserve the surname-first order (Uzumaki Naruto) for genuine canonical flavor. Certain stories invert this to given-name-first for Western audiences - which is also acceptable, provided you remain consistent throughout your entire cast. Mixing naming formats inside a single project confuses readers, so make your choice early and stick with it.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Certainly. The generated output serves merely as a starting point. Adjust spellings, swap a surname onto a given name you prefer, or append an epithet. Numerous authors produce a batch, take the surname from one option and the given name from another, and merge them together to form the final character identity.' },
  { category: 'Use cases', question: 'Can I apply these names toward fan fiction projects?', answer: 'Yes - fan fiction represents the primary use case. The generated names follow the franchise\'s strict naming traditions so your OCs blend naturally alongside official figures. Utilize the clan and village guidelines to align a name with your character\'s background, element, and squad affiliation.' },
  { category: 'Use cases', question: 'Are these names suitable for role-play servers?', answer: 'Indeed. Naruto role-playing groups across Discord and various forums expect names that match the universe. Generate shinobi-style options, select one that reflects your character\'s home village and clan, and you will blend right into the environment. If the server demands completely unique names, check the roster before claiming one.' },
  { category: 'Use cases', question: 'Am I allowed to use these for Naruto games like Shinobi Striker or Ultimate Ninja Storm?', answer: 'Yes. Participants playing Shinobi Striker, the Ultimate Ninja Storm series, and related Naruto titles utilize generators to name custom avatars and online handles. Produce a batch, choose a name matching the correct tone, and verify availability inside the game if it mandates unique display names.' },
  { category: 'Use cases', question: 'Is it okay to use a generated name as a username?', answer: 'Indeed, these monickers function well for gaming or social profiles. Be aware that this tool does not verify if a handle is already in use — usernames need to be distinct on every platform, so check availability on your chosen game, forum, or social network beforehand.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The generator blends hand-picked name components designed around Naruto\'s established rules - clan-themed surnames, food and nature given names, and village-inspired sounds - and randomizes them directly inside your browser. Every execution generates a fresh batch. Nothing gets transmitted to any server; the creation process happens entirely locally.' },
  { category: 'Technical', question: 'Are these actual characters featured in the anime?', answer: 'No. The generator produces brand new, Naruto-themed names for your personal use rather than replicating the official cast as a searchable database. That is intentional - you require fresh names for OCs and handles, rather than duplicates of canon characters you cannot truly make your own.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'None at all. Everything processes directly within your web browser. The moment you press the button, titles are generated right on your machine. Your personal options and generated outputs never touch external servers or databases. Running this system within private browsing mode guarantees your OC concepts remain entirely your own.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'Each query lets you produce between 1 and 24 results. When you want additional ideas, simply trigger the generator again — every click offers an entirely new random set without daily caps or usage ceilings. You can paste consecutive batches into a blank draft to compile a broad collection for your shortlist.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Absolutely. The tool functions seamlessly across any current web browser on smartphones, tablets, or desktop setups without requiring extra software. Produce an assortment on your mobile device, store them in your notes app, and refine your roster wherever your writing takes place.' },
  { category: 'General', question: 'Does the Naruto Name Generator cost anything?', answer: 'Indeed, this tool is entirely free to access, demanding no account setup, logins, or external downloads. Feel free to generate endless batches of shinobi identities, OC concepts, and custom clan titles whenever necessary.' },
  { category: 'Best practices', question: 'How can I make a generated name feel more authentic to the canon?', answer: 'Test the cadence aloud — monikers in Naruto are crafted to be spoken, meaning an awkward flow will disrupt your reader. Ground the character by referencing an established village or clan from above, use the traditional surname-first structure, and integrate a meaningful personal name (like a nature element or chakra nature) to mirror the weight of canonical figures.' },
  { category: 'Troubleshooting', question: 'The names do not feel Naruto enough — what should I do?', answer: 'Create a larger batch of options and trim them aggressively: retain merely the names whose phonetic flavor matches an elemental village style, casting aside anything bland. Contrast an imposing, clan-oriented surname with a gentler, nature-inspired personal name — that precise balance defines genuine canonical figures. Attaching an earned combat epithet will also instantly integrate a basic moniker into the universe.' },
];

export default async function NarutoNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="naruto" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Naruto Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

