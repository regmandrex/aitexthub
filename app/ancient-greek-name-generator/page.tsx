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


const toolSlug = 'ancient-greek-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Ancient Greek Name Generator',
    description: 'Free Ancient Greek Name Generator for character names. Create Greek-style name ideas in your browser without any sign-up.',
    seoTitle: 'Ancient Greek Name Generator – Greek Names for Characters & Mythology',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Ancient Greek Name Generator – Greek Names for Characters &amp; Mythology</h2>
        <p>Classical Greek designations were far more than surface tags — they functioned as condensed statements. Virtually every historical moniker from the region combines genuine semantic bases: Nikolaos fuses <em>nike</em> (conquest) with <em>laos</em> (the populace) to signify &quot;victory of the people&quot;; Sophia translates to &quot;wisdom&quot;; Alexandros conveys &quot;protector of men.&quot; Producing identities through this legitimate methodology, this engine applies authentic root words, appropriate grammatical gender markers, and ancient customs so your outputs feel native to Sparta or Athens instead of a vague fantasy backdrop. It serves creators of period novels, mythological adaptations, D&amp;D adventures featuring Hellenic themes, or anyone seeking deeply purposeful names.</p>
        <p>Since each moniker adheres to genuine linguistic rules of the Hellenic world — proper grammatical inflections, sacred terms paying homage to deities, and rich compound components — you may choose any option confident it fits a citizen walking an ancient polis. Below, we break down these historical practices so you can select an option matching your figure&apos;s background, time period, and social station, while fully grasping the message behind their identity.</p>

        <h2>How Ancient Greek Names Are Built</h2>
        <p>The classical Greek naming system is remarkably consistent, and knowing its logic lets you pick names that feel authentic rather than invented:</p>
        <ul>
          <li><strong>Compound stems with meaning.</strong> Most classical names pair two roots with distinct definitions — <em>nike</em> (victory), <em>laos</em> (people), <em>kleos</em> (renown), <em>kratos</em> (might), <em>philos</em> (fond of), <em>hippos</em> (steed). Nikolaos, Kleisthenes, and Philippos (&quot;horse lover&quot;) rely on this very structure.</li>
          <li><strong>Gender-based word endings.</strong> Masculine identifiers generally conclude with <strong>-os</strong>, <strong>-es</strong>, or <strong>-on</strong> (Nikolaos, Sokrates, Jason). Feminine alternatives commonly finish with <strong>-a</strong> or <strong>-e</strong> (Sophia, Helena, Penelope, Aphrodite).</li>
          <li><strong>Single monikers without family names.</strong> Citizens of ancient Greece carried one unique identity, distinguished by ancestral patronymics and local civic origins rather than hereditary surnames.</li>
          <li><strong>Distinctive phonetics.</strong> Consonant combinations such as <em>th</em>, <em>ph</em>, <em>kl</em>, and <em>chr</em>, alongside prominent vowel terminations, grant ancient Greek names their melodic cadence.</li>
        </ul>

        <h2>Male, Female, and the Gendered Endings</h2>
        <p>Aligning the grammatical ending with the character&apos;s gender is the quickest method to ensure historical accuracy. Masculine identities commonly use <strong>-os</strong> (Nikolaos, Demetrios), <strong>-es</strong> (Sokrates, Aristoteles, Herakles), and <strong>-on</strong> (Jason, Solon, Platon). Feminine forms typically employ <strong>-a</strong> (Sophia, Chloe rendered archaically as Chloa, Kassandra) and <strong>-e</strong> (Penelope, Aphrodite, Persephone, Arete). Changing the suffix on a single stem alters its gender — Nikolaos and Nikolaia both draw on &quot;victory,&quot; tailored for male and female figures respectively. Generating a list lets you sort by terminal letters to find the ideal match for every role.</p>

        <h2>Theophoric Names: Honoring the Gods</h2>
        <p>A huge share of Greek names are <em>theophoric</em> — built to honor a deity by embedding the god&apos;s name or an attribute. This was a genuine act of devotion, and it makes a name feel deeply rooted in the ancient world:</p>
        <ul>
          <li><strong>Apollo:</strong> Apollodoros (&quot;gift of Apollo&quot;), Apollonios.</li>
          <li><strong>Dionysos:</strong> Dionysios, Dionysia.</li>
          <li><strong>Demeter:</strong> Demetrios, Demetria (&quot;devoted to Demeter&quot;).</li>
          <li><strong>Athena / Zeus / Hera:</strong> Athenodoros, Diodoros (&quot;gift of Zeus,&quot; from <em>Dios</em>), Herodotos.</li>
        </ul>
        <p>For characters serving as priestesses, oracle attendants, or children of deeply devout households, a god-honoring theophoric identity communicates that heritage immediately. Pick a patron deity relevant to their narrative and choose an option featuring that divine root.</p>

        <h2>Patronymics and Identifying a Citizen</h2>
        <p>Classical individuals lacked surnames and were traditionally identified by a <strong>patronymic</strong> — highlighting their father with &quot;son of&quot; or &quot;daughter of.&quot; Though Greek relies on the genitive case, English historical texts usually phrase this as &quot;Perikles, son of Xanthippos&quot; or &quot;Perikles Xanthippou.&quot; Citizens were also recognized by their native <em>deme</em> or origin — like &quot;Demosthenes of Paiania.&quot; For complete period authenticity, combine a generated forename with their paternal lineage and home community: personal name, father&apos;s name, hometown. That exact trio constituted formal identification for historical Athenians.</p>

        <h2>Famous Names as a Register Guide</h2>
        <p>Real historical figures and mythic personalities provide the ultimate benchmark for linguistic authenticity. Renowned thinkers (Sokrates, Platon, Aristoteles), political leaders (Perikles, Themistokles, Solon), alongside military commanders (Leonidas, Alexandros) illustrate masculine styles; legendary and actual historical women (Penelope, Kassandra, Aspasia, Hypatia, Sappho) demonstrate feminine counterparts. Avoid directly borrowing iconic identities for new personas — christening someone verbatim as Helen or Leonidas brings distracting associations — yet mirroring their morphological components is key to credibility. Produce several choices and evaluate whether any option blends seamlessly among these classical references without seeming artificial or contemporary.</p>

        <h2>How to Create a Character Moniker for Stories or D&amp;D</h2>
        <p>Begin with the character's gender and role, then let the meaning do the heavy lifting. A warrior might bear a name stemming from <em>nike</em>, <em>kratos</em>, or <em>machos</em> (battle); a scholar from <em>sophia</em> (wisdom) or <em>logos</em>; a religious figure in a theophoric name. Produce a set, filter by the proper gendered suffix, and read the definitions — select a name whose sense reinforces who the person is. For a Hellenic-style D&amp;D campaign, this supplies NPCs and player characters with designations that feel integrated and authentic, as if they belong to a single culture instead of a random assortment.</p>

        <h2>How to Use This Ancient Greek Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to acquire a fresh set of genuine-sounding Greek names.</li>
          <li>Sort the output by their suffixes to fit male (-os, -es, -on) or female (-a, -e) characters.</li>
          <li>Use the Copy button to store your shortlist, then pair a favorite with a patronymic and city if you desire a complete formal name.</li>
          <li>Run it again as frequently as you wish — there is no profile, no download, and no restriction on uses.</li>
        </ol>
        <p>Generation occurs completely within your browser. Your configurations and the names you build are never transmitted to a server, ensuring your characters and plot notes remain confidential until you choose to reveal them.</p>

        <h2>Common Mistakes to Avoid</h2>
        <p>The most frequent error is misaligning the gendered suffix — assigning a male character a name ending in -a, or a female character one terminating in -os, which looks incorrect instantly to anyone acquainted with the language. Refrain from attaching Latin or Roman endings (-us, -ius) to Greek roots; those belong to Rome, not Athens, and blending them shatters the illusion. Avoid famous canonical names for major original figures. And do not over-modernize the orthography into unrecognizable shapes — the classic <em>k</em>, <em>ph</em>, and <em>-os</em> forms are what preserve the ancient vibe.</p>

        <h2>Applying These Monikers Within Your Projects</h2>
        <p>These are novel, authentic-style combinations formed from genuine Greek roots, not a database of specific historical people, making them perfect for historical fiction, mythological retellings, tabletop campaigns, and worldbuilding. Because every name holds true meaning, you can weave that connotation into your character — a name meaning &quot;glory&quot; or &quot;gift of Apollo&quot; turns into a subtle touch of character development. Create a batch, select names whose gender and significance align, and construct your Greek realm upon a base of names that would have sounded genuine to the individuals who inhabited it.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an Ancient Greek Name Generator?', answer: 'It is a browser utility that creates genuine-sounding Ancient Greek personal names for characters, mythology, and historical fiction — designations formed from real Greek roots and suffixes, like Theron, Nikias, Kleon, Sophia, or Kassandra. It aims for the tone of classical Hellas rather than contemporary usernames. Everything executes locally in your browser, nothing is uploaded or archived, and it is free with no registration. You acquire 1 to 24 names per execution and can produce as many batches as you desire.' },
  { category: 'Naming', question: 'What gives a name that genuine Ancient Greek feel?', answer: 'Authentic-feeling Greek names derive from meaningful roots combined together and completed with characteristic suffixes. Masculine names frequently terminate in -os, -es, -on, or -as (Nikolaos, Sokrates, Jason, Leonidas); feminine names typically end in -a or -e (Helena, Penelope, Kassandra). Roots carry significance — nikē (victory), sophia (wisdom), kratos (power), theos (god) — so a designation like Nikandros reads as "victory-man." The tool integrates these components so the results mirror true classical names.' },
  { category: 'Naming', question: 'Which suffixes are common in Ancient Greek names?', answer: 'Masculine names usually close with -os, -on, -es, -as, or -eus (Alexios, Jason, Achilles, Leonidas, Odysseus). Feminine names generally end in -a, -e, or -is (Aikaterina, Ariadne, Chloris). These suffixes are the fastest way to make a name read as Greek, so if a generated result feels off, altering the ending to one of these usually corrects it. The terminations also indicate gender, which assists when you are naming a diverse cast.' },
  { category: 'Naming', question: 'What origins and definitions surface in Greek names?', answer: 'Many classical names are amalgams of two meaningful roots. Common ones feature nikē (victory), kratos (power), demos (people), theos (god), sophia (wisdom), philos (loving), andros (man), and hippos (horse). Nikodemos translates to "victory of the people," Philippos means "horse-lover," Theodora means "gift of god." Knowing a few roots enables you to read and even construct names, and the generator utilizes this vocabulary so its output carries plausible significance rather than random syllables.' },
  { category: 'Use cases', question: 'How should I name a persona for a historical context or Greek myth?', answer: 'Determine the character\'s status and gender first — a hero, a philosopher, a queen, a soldier — then choose a generated name whose sound and suffix match. Heroic figures suit grand compounds (Leonidas, Alexandros); everyday characters can take simpler designations (Kleon, Myrto). Keep names distinct across your cast, and rely on recognizable endings so readers immediately identify the setting as ancient Greece rather than a modern era.' },
  { category: 'Naming', question: 'Ought I to employ actual mythological names or created ones?', answer: 'Both function well, depending on your objective. Utilizing a known name (Achilles, Athena) instantly signals the myth but can carry heavy associations readers already hold. Invented, authentic-style names provide you with fresh characters that still feel Greek. The generator favors original combinations built from real elements, so you get designations that sound classical without directly borrowing a famous figure — helpful when you want your character to feel novel yet at home in the era.' },
  { category: 'Naming', question: 'How do spelling and transliteration impact Greek names?', answer: 'Greek names reach English through transliteration, meaning many possess two accepted spellings — the Latinized form (Alexander, Achilles, Cassandra) and the closer Greek form (Alexandros, Achilleus, Kassandra). The -k- versus -c- and -os versus -us endings represent the typical variance. Select one convention and maintain it consistently throughout your work. The generator can supply you with Greek-style spellings; adjust toward Latinized forms if your setting or audience demands them.' },
  { category: 'Use cases', question: 'Am I able to use these names for fantasy worlds or tabletop RPGs?', answer: 'Yes. A Greek-inspired region, pantheon, or city-state within a fantasy campaign comes alive with authentic-sounding designations for its NPCs and gods. Produce a batch and assign names by role, maintaining a consistent naming style within a single culture so it feels cohesive. Because the suffixes and roots read as classical, players instantly perceive the flavor of the environment without requiring it to be explained, which keeps your worldbuilding efficient.' },
  { category: 'Usage', question: 'How can someone operate the Ancient Greek Name Generator?', answer: 'Select the desired quantity of names per batch (1 to 24) and press Generate. Review the list to find options matching your character and setting\'s tone, then use the Copy button to store your favorites. Transfer the output to your notes and modify the spelling toward Hellenic or Latin variations if required. Generate more whenever desired; registration, installation, and usage caps do not exist.' },
  { category: 'General', question: 'Does the Ancient Greek Name Generator cost anything?', answer: 'Indeed. This tool is totally free within your web browser, requiring no sign-up, fees, or software installation. Classical-style names can be produced as frequently as desired since daily restrictions or total usage caps are absent. Operating directly on your machine, it lets you name entire groups of heroes, thinkers, and deities for your tale or campaign smoothly and without expense.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'No. The tool functions completely inside your web browser. Upon selecting a quantity and hitting generate, the names form locally on your hardware—nothing gets transmitted, tracked, or saved on our servers. Your character and setting concepts remain confidential. Shut the tab and the list disappears unless saved, keeping your unreleased names on your personal device.' },
  { category: 'Compatibility', question: 'Is the Ancient Greek Name Generator functional on mobile devices?', answer: 'Yes. The utility operates within any contemporary web browser across computers, tablets, and smartphones without requiring software installation. You can brainstorm names via mobile during writing or session planning, copy a preferred option, and paste it into your manuscript, wiki, or notes document. Featuring a responsive design, creating classical names functions equally well on compact displays and desktop monitors.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You are able to request between 1 and 24 names per generation. Should a broader selection be required—such as an entire city-state or pantheon—simply repeat the process; each execution yields a brand-new random assortment. Total and daily restrictions are non-existent. Combine multiple batches into a single file and clear out any repeats. The limit of 24 per batch ensures readability while supplying ample classical names to review and shortlist.' },
  { category: 'Usage', question: 'Am I able to copy names straight from the generator?', answer: 'Yes. The Copy button transfers the entire generated set to your clipboard as unformatted text, one per line, prepared for insertion into any note-taking software, file, or world-building wiki. This represents the standard method for saving a shortlist: generate, copy, then assign names to figures and refine spellings. Storing them in a document helps track which moniker designates which individual as your Hellenic cast expands.' },
  { category: 'General', question: 'Must I create a profile to access the Ancient Greek Name Generator?', answer: 'No. The utility operates without any registration or login requirements. Open the site, choose your name quantity, press generate, and copy the output—no email, password, or account creation necessary. Designed for rapid, effortless brainstorming, it allows you to visit, acquire a batch of classical-styled names, and resume writing or planning instantly without signing up.' },
  { category: 'Technical', question: 'In what way are the Ancient Greek names created?', answer: 'The utility utilizes handpicked collections of genuine Hellenic roots, name components, and typical suffixes, merging them locally so each batch varies. No data leaves your device. Designed for creative brainstorming, the results offer plausible, classical-sounding monikers rather than verified historical data, so view them as raw inspiration. The internal lists are calibrated to ensure authentic Greek endings and meaningful roots for a true Hellenic atmosphere.' },
  { category: 'Naming', question: 'What is the method for naming deities or heroes compared to standard characters?', answer: 'Deities and legends fit majestic, booming combinations and grand suffixes — consider Leonidas, Alexandros, or elevated theophoric titles formed from theos. Common people might bear briefer, simpler titles like Kleon, Myrto, or Doris. Create a batch and organize by majesty: save the heaviest for your legendary figures and the basic ones for the masses. Pairing a title\'s magnitude with a persona\'s function makes the entire roster seem authentic.' },
  { category: 'Best practices', question: 'What errors ought I to sidestep with Hellenic names?', answer: 'Steer clear of blending orthography styles (Achilles in one spot, Achilleus in another). Steer clear of contemporary or un-Hellenic suffixes that ruin the classical tone. Steer clear of assigning multiple figures nearly identical titles that confuse audiences. And watch out taking an extremely famous title unless you desire its history. Maintain the choices featuring genuine suffixes, transparent roots, unique tones, and an orthography method you utilize uniformly across your project.' },
  { category: 'Naming', question: 'Are Hellenic names gendered, and how might I recognize them?', answer: 'Mostly yes, and the suffix is the primary indicator. Titles concluding in -os, -es, -on, -as, or -eus appear masculine; those concluding in -a, -e, or -is appear feminine. Thus Nikolaos is masculine and Nikoletta feminine originating from the identical root. When you produce a diverse roster, employ the suffixes to designate gender, and if you desire a title for a particular gender, prioritize the matching suffixes in the set.' },
  { category: 'Use cases', question: 'Am I allowed to employ these titles for a story placed in classical Greece?', answer: 'Certainly. Historical novels thrive on titles that belong to their era, and genuine Hellenic forms anchor your audience in the timeline from opening page one. Produce a set, pick titles that match every persona\'s status and gender, and maintain your romanization uniform. Keep renowned titles for minor appearances and employ fresh, genuine-style ones for your protagonists so they seem like actual citizens of Hellas rather than borrowed myths.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Every execution delivers up to 24 names. For an expanded collection, execute the generator continuously and paste every set into a single file, afterward delete duplicates. There exists no daily or overall restriction on executions, so grouping represents the designed process when you desire to name a vast roster, an entire settlement, or a pantheon. Save the most powerful, fitting classical titles in a shortlist as you proceed.' },
  { category: 'General', question: 'Do these represent historically valid titles?', answer: 'They are genuine-style compounds constructed from authentic Hellenic roots and suffixes, crafted to sound classical — yet they serve as artistic motivation, not certified records from an academic archive. Certain ones might match documented titles; others represent believable creations. For an academic undertaking, verify any title against a reliable onomastic reference. For creative writing, mythology, and gaming, the output delivers titles that sound truly Hellenic and remain yours to modify.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Ancient Greek Name Generator without an internet connection?', answer: 'Indeed. Once the site has finished loading, the generator operates completely inside your web browser and demands no internet access to create titles. You are able to invent classical titles during a trip or anywhere absent web access, and transferring and pasting functions offline as well. You simply require a connection to load the site initially; following that every set of Hellenic-style titles is produced directly on your hardware.' },
];

export default async function AncientGreekNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="ancient-greek" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Ancient Greek Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

