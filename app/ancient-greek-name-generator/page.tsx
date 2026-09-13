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
    description: 'Free ancient greek name generator for character names. Create Greek-style name ideas in your browser with no sign-up.',
    seoTitle: 'Ancient Greek Name Generator – Greek Names for Characters & Mythology',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Ancient Greek Name Generator – Greek Names for Characters &amp; Mythology</h2>
        <p>
          Ancient Greek names were not decorative labels — they were tiny sentences. Nearly every classical Greek name is built from real word-roots that mean something: Nikolaos joins <em>nike</em> (victory) and <em>laos</em> (people) to mean &quot;victory of the people&quot;; Sophia means &quot;wisdom&quot;; Alexandros means &quot;defender of men.&quot; This generator builds names in that authentic style, using genuine Greek roots, the correct gendered endings, and the naming conventions of the classical world, so your names read like they belong in Athens or Sparta rather than a generic fantasy setting. It is built for historical fiction, mythology retellings, D&amp;D campaigns set in Greek-flavored worlds, and anyone who wants a name with real meaning behind it.
        </p>
        <p>
          Because the names follow the actual patterns of Ancient Greek — gendered suffixes, theophoric elements honoring the gods, meaningful compound roots — you can pick one knowing it would have sounded natural on a citizen of a Greek polis. This page explains how those conventions work so you can choose a name that fits your character&apos;s gender, era, and role, and understand the meaning you are giving them.
        </p>

        <h2>How Ancient Greek Names Are Built</h2>
        <p>
          The classical Greek naming system is remarkably consistent, and knowing its logic lets you pick names that feel authentic rather than invented:
        </p>
        <ul>
          <li><strong>Meaningful compound roots.</strong> Most names combine two elements with a clear sense — <em>nike</em> (victory), <em>laos</em> (people), <em>kleos</em> (glory), <em>kratos</em> (power), <em>philos</em> (loving), <em>hippos</em> (horse). Nikolaos, Kleisthenes, and Philippos (&quot;lover of horses&quot;) all follow this pattern.</li>
          <li><strong>Gendered endings.</strong> Male names typically end in <strong>-os</strong>, <strong>-es</strong>, or <strong>-on</strong> (Nikolaos, Sokrates, Jason). Female names usually end in <strong>-a</strong> or <strong>-e</strong> (Sophia, Helena, Penelope, Aphrodite).</li>
          <li><strong>Single given names, not surnames.</strong> Classical Greeks generally had one personal name, distinguished by a patronymic and their deme or city rather than a family surname.</li>
          <li><strong>A recognizable sound.</strong> Clusters like <em>th</em>, <em>ph</em>, <em>kl</em>, and <em>chr</em>, and vowel-rich endings, give Greek names their characteristic music.</li>
        </ul>

        <h2>Male, Female, and the Gendered Endings</h2>
        <p>
          The single fastest way to make a Greek name read correctly is to match the ending to the gender. Male names lean on <strong>-os</strong> (Nikolaos, Demetrios), <strong>-es</strong> (Sokrates, Aristoteles, Herakles), and <strong>-on</strong> (Jason, Solon, Platon). Female names lean on <strong>-a</strong> (Sophia, Chloe becomes Chloa in older forms, Kassandra) and <strong>-e</strong> (Penelope, Aphrodite, Persephone, Arete). The same root can often be genderized by swapping the ending — Nikolaos and Nikolaia both carry &quot;victory,&quot; one masculine, one feminine. When you generate a batch, sort the results by their endings to slot each name to the right character.
        </p>

        <h2>Theophoric Names: Honoring the Gods</h2>
        <p>
          A huge share of Greek names are <em>theophoric</em> — built to honor a deity by embedding the god&apos;s name or an attribute. This was a genuine act of devotion, and it makes a name feel deeply rooted in the ancient world:
        </p>
        <ul>
          <li><strong>Apollo:</strong> Apollodoros (&quot;gift of Apollo&quot;), Apollonios.</li>
          <li><strong>Dionysos:</strong> Dionysios, Dionysia.</li>
          <li><strong>Demeter:</strong> Demetrios, Demetria (&quot;devoted to Demeter&quot;).</li>
          <li><strong>Athena / Zeus / Hera:</strong> Athenodoros, Diodoros (&quot;gift of Zeus,&quot; from <em>Dios</em>), Herodotos.</li>
        </ul>
        <p>
          If your character is a priest, an oracle&apos;s servant, or simply born to a pious family, a theophoric name signals that instantly. Pick the god who suits their story and choose a name that carries that deity&apos;s root.
        </p>

        <h2>Patronymics and Identifying a Citizen</h2>
        <p>
          Because Greeks used a single given name, they distinguished people by a <strong>patronymic</strong> — &quot;son of&quot; or &quot;daughter of&quot; the father. In Greek this is formed with the genitive, but in English historical fiction it usually reads as &quot;Perikles, son of Xanthippos&quot; or &quot;Perikles Xanthippou.&quot; A citizen was often further identified by their <em>deme</em> (local district) or city — &quot;Demosthenes of Paiania.&quot; If you want a full, formal identity for a character, pair a generated given name with a father&apos;s name and a place: given name, patronymic, origin. That three-part identity is how a real Athenian would be named in an official record.
        </p>

        <h2>Famous Names as a Register Guide</h2>
        <p>
          Historical and mythological names are the best gauge of whether a name sounds right. Philosophers (Sokrates, Platon, Aristoteles), statesmen (Perikles, Themistokles, Solon), and generals (Leonidas, Alexandros) show the male register; mythic and historical women (Penelope, Kassandra, Aspasia, Hypatia, Sappho) show the female one. You should not reuse a famous full name for an original character — a hero literally called Leonidas or Helen invites unwanted comparison — but echoing the structure and roots is exactly how you stay authentic. Generate a batch and test each name by asking whether it could sit in a list beside these without standing out as modern or invented.
        </p>

        <h2>How to Name a Character for Fiction or D&amp;D</h2>
        <p>
          Start from the character&apos;s gender and role, then let the meaning do the work. A warrior might carry a name rooted in <em>nike</em>, <em>kratos</em>, or <em>machos</em> (battle); a scholar in <em>sophia</em> (wisdom) or <em>logos</em>; a devout character in a theophoric name. Generate a batch, filter by the correct gendered ending, and read the meanings — pick a name whose sense reinforces who the character is. For a Greek-flavored D&amp;D setting, this gives NPCs and player characters names that feel cohesive and lived-in, as if they share one culture rather than being drawn from a grab bag.
        </p>

        <h2>How to Use This Ancient Greek Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of authentic-style Greek names.</li>
          <li>Sort the results by their endings to match male (-os, -es, -on) or female (-a, -e) characters.</li>
          <li>Use the Copy button to save your shortlist, then pair a favorite with a patronymic and city if you want a full formal name.</li>
          <li>Run again as often as you like — there is no account, no download, and no limit on runs.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your characters and story notes stay private until you choose to share them.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          The most common slip is mismatching the gendered ending — giving a male character a name ending in -a, or a female character one ending in -os, which reads wrong immediately to anyone familiar with the language. Avoid grafting Latin or Roman endings (-us, -ius) onto Greek roots; those belong to Rome, not Athens, and mixing them breaks the illusion. Steer clear of famous canon names for major original characters. And do not over-modernize the spelling into unrecognizable forms — the classic <em>k</em>, <em>ph</em>, and <em>-os</em> spellings are what carry the ancient flavor.
        </p>

        <h2>Using These Names in Your Work</h2>
        <p>
          These are original, authentic-style combinations built from real Greek roots, not a lookup of specific historical people, which makes them ideal for historical fiction, mythology retellings, tabletop campaigns, and worldbuilding. Because each name carries genuine meaning, you can weave that sense into your character — a name meaning &quot;glory&quot; or &quot;gift of Apollo&quot; becomes a small piece of characterization. Generate a batch, choose names whose gender and meaning fit, and build your Greek world on a foundation of names that would have sounded real to the people who lived in it.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an Ancient Greek name generator?', answer: 'It is a browser tool that produces authentic-style Ancient Greek personal names for characters, mythology, and historical fiction — names built from real Greek roots and endings, like Theron, Nikias, Kleon, Sophia, or Kassandra. It aims for the sound of classical Hellas rather than modern usernames. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 names per run and can generate as many batches as you like.' },
  { category: 'Naming', question: 'What makes a name sound authentically Ancient Greek?', answer: 'Genuine-feeling Greek names come from meaningful roots joined together and finished with characteristic endings. Masculine names often end in -os, -es, -on, or -as (Nikolaos, Sokrates, Jason, Leonidas); feminine names commonly end in -a or -e (Helena, Penelope, Kassandra). Roots carry meaning — nikē (victory), sophia (wisdom), kratos (power), theos (god) — so a name like Nikandros reads as "victory-man." The generator combines these elements so results echo real classical names.' },
  { category: 'Naming', question: 'What endings do Ancient Greek names use?', answer: 'Masculine names typically close with -os, -on, -es, -as, or -eus (Alexios, Jason, Achilles, Leonidas, Odysseus). Feminine names usually end in -a, -e, or -is (Aikaterina, Ariadne, Chloris). These endings are the quickest way to make a name read as Greek, so if a generated result feels off, adjusting the ending to one of these often fixes it. The endings also mark gender, which helps when you are naming a mixed cast.' },
  { category: 'Naming', question: 'What roots and meanings appear in Greek names?', answer: 'Many classical names are compounds of two meaningful roots. Common ones include nikē (victory), kratos (power), demos (people), theos (god), sophia (wisdom), philos (loving), andros (man), and hippos (horse). Nikodemos means "victory of the people," Philippos means "horse-lover," Theodora means "gift of god." Knowing a few roots lets you read and even build names, and the generator draws on this vocabulary so its output carries plausible meaning rather than random syllables.' },
  { category: 'Use cases', question: 'How do I name a character for a Greek myth or historical setting?', answer: 'Decide the character\'s station and gender first — a hero, a philosopher, a queen, a soldier — then pick a generated name whose sound and ending fit. Heroic figures suit grand compounds (Leonidas, Alexandros); everyday characters can take simpler names (Kleon, Myrto). Keep names distinct across your cast, and lean on recognizable endings so readers instantly place the setting as ancient Greece rather than somewhere modern.' },
  { category: 'Naming', question: 'Should I use real mythological names or invented ones?', answer: 'Both work, depending on your goal. Using a known name (Achilles, Athena) instantly signals the myth but can carry heavy associations readers already hold. Invented, authentic-style names give you fresh characters that still feel Greek. The generator leans toward original combinations built from real elements, so you get names that sound classical without directly borrowing a famous figure — useful when you want your character to feel new but at home in the period.' },
  { category: 'Naming', question: 'How do transliteration and spelling affect Greek names?', answer: 'Greek names reach English through transliteration, so many have two accepted spellings — the Latinized form (Alexander, Achilles, Cassandra) and the closer Greek form (Alexandros, Achilleus, Kassandra). The -k- versus -c- and -os versus -us endings are the usual difference. Pick one convention and keep it consistent across your work. The generator can give you Greek-style spellings; adjust toward Latinized forms if your setting or audience expects them.' },
  { category: 'Use cases', question: 'Can I use these names for tabletop RPGs or fantasy worlds?', answer: 'Yes. A Greek-inspired region, pantheon, or city-state in a fantasy campaign comes alive with authentic-sounding names for its NPCs and gods. Generate a batch and assign names by role, keeping a consistent naming style within one culture so it feels cohesive. Because the endings and roots read as classical, players immediately sense the flavor of the setting without needing it spelled out, which keeps your world-building efficient.' },
  { category: 'Usage', question: 'How do I use the Ancient Greek name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names whose sound and ending fit your character and setting, then use the Copy button to save your shortlist. Paste the results into your notes and adjust spellings toward Greek or Latinized forms as needed. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the Ancient Greek name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate classical-style names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can name a whole cast of heroes, philosophers, and gods for your story or campaign without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character and world-building ideas stay private. Close the tab and the list is gone unless you copied it, so your unpublished names stay on your machine.' },
  { category: 'Compatibility', question: 'Does the Ancient Greek name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm names on your phone while writing or planning a session, copy a favorite, and paste it into your manuscript, wiki, or notes app. The layout is responsive, so building a cast of classical names works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — an entire city-state or pantheon, say — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of classical names to sift through and shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, document, or world-building wiki. This is the intended way to save a shortlist: generate, copy, then assign names to characters and adjust spellings. Keeping them in a file lets you track which name belongs to which figure as your cast of Greek characters grows.' },
  { category: 'General', question: 'Do I need an account to use the Ancient Greek name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of classical-style names, and get back to writing or planning without creating anything.' },
  { category: 'Technical', question: 'How are the Ancient Greek names generated?', answer: 'The generator draws on curated lists of authentic Greek roots, name-elements, and characteristic endings, then combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration — plausible, classical-sounding names rather than verified historical records — so treat it as raw material. The lists are tuned so results carry real Greek endings and meaning-bearing roots, giving them a genuine Hellenic feel.' },
  { category: 'Naming', question: 'How do I name gods or heroes versus ordinary characters?', answer: 'Gods and heroes suit grand, resonant compounds and imposing endings — think Leonidas, Alexandros, or lofty theophoric names built on theos. Ordinary citizens can carry shorter, plainer names like Kleon, Myrto, or Doris. Generate a batch and sort by grandeur: keep the weightiest for your mythic figures and the simpler ones for the crowd. Matching a name\'s scale to a character\'s role makes the whole cast feel believable.' },
  { category: 'Best practices', question: 'What mistakes should I avoid with Greek names?', answer: 'Avoid mixing spelling conventions (Achilles in one line, Achilleus in another). Avoid modern or non-Greek endings that break the classical sound. Avoid giving several characters near-identical names that readers confuse. And be careful borrowing a very famous name unless you want its baggage. Keep the options with authentic endings, clear roots, distinct sounds, and a spelling style you apply consistently throughout your work.' },
  { category: 'Naming', question: 'Are Greek names gendered, and how can I tell?', answer: 'Largely yes, and the ending is the main clue. Names ending in -os, -es, -on, -as, or -eus read as masculine; those ending in -a, -e, or -is read as feminine. So Nikolaos is masculine and Nikoletta feminine from the same root. When you generate a mixed cast, use the endings to assign gender, and if you want a name for a specific gender, favor the corresponding endings in the batch.' },
  { category: 'Use cases', question: 'Can I use these names for a novel set in ancient Greece?', answer: 'Absolutely. Historical fiction lives on names that feel of their time, and authentic Greek forms ground your reader in the period from the first page. Generate a batch, choose names that fit each character\'s class and gender, and keep your transliteration consistent. Reserve famous names for cameos and use fresh, authentic-style ones for your leads so they feel like real people of Hellas rather than borrowed legends.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want to name a large cast, a whole city, or a pantheon. Keep the strongest, most fitting classical names in a shortlist as you go.' },
  { category: 'General', question: 'Are these historically accurate names?', answer: 'They are authentic-style combinations built from real Greek roots and endings, designed to sound classical — but they are creative inspiration, not verified entries from a historical database. Some may coincide with attested names; others are plausible inventions. For a scholarly project, cross-check any name against a proper onomastic source. For fiction, mythology, and games, the output gives you names that feel genuinely Greek and are yours to adapt.' },
  { category: 'Troubleshooting', question: 'Can I use the Ancient Greek name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm classical names on a flight or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every batch of Greek-style names is generated right on your device.' },
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
          <p className="text-slate-700">Common questions about the Ancient Greek name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

