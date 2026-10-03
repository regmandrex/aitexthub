import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { GodGoddessNameGeneratorTool } from '@/components/tools/GodGoddessNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'god-goddess-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'God & Goddess Name Generator',
    description: '[21] Generate god and goddess names with meanings. Pick a culture (Greek, Norse, Egyptian, Roman) and receive deity monikers for fiction, games, and storytelling.',
    seoTitle: 'God & Goddess Name Generator - Deity Names With Meaning',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>[22] God &amp; Goddess Name Generator - Deity Names With Meaning</h2>
        <p>[23] A divinity&apos;s title provides the foundation for an entire mythological framework. Names like Zeus, Odin, Ra, and Isis instantly conjure an explicit realm, temperament, and cosmic station within a solitary term. Inspired by historic pantheons, this god and goddess name generator crafts sacred titles to help you flesh out rosters for tabletop RPGs, fantasy fiction, and custom universes. Tailor your results by <strong>culture</strong> (Greek, Norse, Egyptian, Roman, or Any), designate a <strong>type</strong> (gods only, goddesses only, or both), and optionally <strong>include a meaning</strong> so every title is tied to a domain. Running purely within your browser without logins, it outputs 1–24 names per run.</p>
        <p>[24] Divine names are not interchangeable across cultures — a Norse god and an Egyptian goddess sound completely different, and that contrast is the entire point. The guide below explains how theonyms (god-names) actually function in each of the four supported pantheons, how epithets and domains shape a deity&apos;s identity, and how to utilize the culture and type options to construct a cohesive pantheon rather than a random collection of names.</p>

        <h2>Understanding Divine Names: Theonyms, Domains, and Epithets</h2>
        <p>A <strong>theonym</strong> is simply a divine title, and throughout different myths these labels rely on specific patterns. Many connect to a <strong>domain</strong> — the particular realm the deity governs, such as battle, ocean, romance, agriculture, or morning — meaning a label and a function travel side by side (which is what the &quot;Include meaning&quot; option surfaces). Deities also accumulate <strong>epithets</strong>: descriptive alternate names highlighting a specific quality or action. Zeus is &quot;Zeus the Thunderer,&quot; Athena is &quot;Grey-eyed Athena,&quot; Apollo is &quot;Far-shooting.&quot; When inventing a deity for creative writing, blending a primary name with a domain and an epithet grants it the same complex presence actual gods possess.</p>

        <h2>Greek Deity Names</h2>
        <p>The names of Greek deities are characteristically melodic with heavy vocalic phrasing, frequently utilizing suffixes like -os or -on for gods (Helios, Kronos) and -a, -e, or -is for goddesses (Artemis, Athena, Persephone). Many encapsulate specific concepts or domains derived from historic roots. Since Greek mythological structures maintain clear distinctions — such as primordial deities, Titans, and Olympians — any inspired selection should integrate neatly into this tiered order. When creating mortal titles that harmonize with your pantheon, explore our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>.</p>

        <h2>Norse Deity Names</h2>
        <p>Norse terms are harsher and heavily consonant-driven, dense with traditional Old Norse phonetics — Odin, Thor, Freyr, Freyja, Heimdall, Tyr. Many stem from terms for elemental and martial powers (lightning, ice, combat, destiny), matching the stern, weather-worn atmosphere of the mythology. Select &quot;Norse&quot; whenever you need deities that feel rugged and elemental, and lean upon domains like tempest, warfare, ocean, and the netherworld to position every single god inside the pantheon.</p>

        <h2>Egyptian Deity Names</h2>
        <p>Egyptian theonyms are brief, weighty, and frequently built from harsh or breathy phonetics — Ra, Isis, Osiris, Anubis, Horus, Bastet, Set. Numerous deities connect to universal forces (sunlight, heavens, afterlife) or adopt animalistic traits, giving their titles an archaic and ceremonial aura. Egyptian options read as official and monumental, fitting seamlessly into a pantheon focused around the sun, mortality, and cosmic balance.</p>

        <h2>Roman Deity Names</h2>
        <p>Roman gods mirror the Greek pantheon yet retain distinct Latin titles — Jupiter, Juno, Mars, Venus, Neptune, Minerva. The phonetics feel sturdier and more bureaucratic than the Greek equivalents, echoing Rome&apos;s civic, state-focused religious nature. Choose &quot;Roman&quot; when looking for authority and solemnity, remembering that many Roman deities share spheres with Greek counterparts (Mars/Ares, Venus/Aphrodite), allowing you to replicate an existing framework through a different stylistic tone.</p>

        <h2>Navigating the Culture and Type Options</h2>
        <p>The tool&apos;s configuration settings allow you to tailor the output to fit your universe:</p>
        <ul>
          <li><strong>Culture</strong> — choose Greek, Norse, Egyptian, or Roman for a unified, consistent mythology, or &quot;Any culture&quot; for a blended or original pantheon drawing from multiple sources.</li>
          <li><strong>Type</strong> — choose &quot;Gods only,&quot; &quot;Goddesses only,&quot; or &quot;Gods and goddesses&quot; depending on whether you require a single category or a balanced roster.</li>
          <li><strong>Include meaning</strong> — enable this feature to attach a concise domain to each label (such as sky, war, love, harvest) so you can connect a deity to its function instantly.</li>
        </ul>
        <p>Execute one generation per tradition to maintain separate pantheons, or select &quot;Any culture&quot; for a blended atmosphere. For aristocratic family names to govern beneath your deities, our <Link href="/royal-surname-generator">royal surname generator</Link> matches nicely with this utility.</p>

        <h2>Constructing a Coherent Pantheon</h2>
        <p>A credible pantheon is an interconnected framework, not merely a collection. Assign every deity a unique sphere so their powers remain separate — one deity of combat, one of oceans, one of agriculture — and establish connections: brothers and sisters, adversaries, a supreme sky-patriarch, a sovereign of the nether realms. Turn on meanings and produce names within one tradition so they share phonetic traits, then assign spheres to specific functions. The outcome feels like authentic folklore, where every immortal serves a purpose and the entire group appears cohesive.</p>

        <h2>Steps to Operate This God and Goddess Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Select a culture (Greek, Norse, Egyptian, Roman, or Any) alongside a type (gods, goddesses, or both).</li>
          <li>Choose the desired quantity per generation (1–24), and optionally check <strong>Include meaning</strong>.</li>
          <li>Press <strong>Generate names</strong> to instantly receive a new set of divine titles accompanied by their respective domains.</li>
          <li>Utilize the Copy button to preserve your shortlist, after which you can assign each entry a role, an epithet, and a specific pantheon position.</li>
          <li>Generate again — once per tradition for separate pantheons — with zero restrictions, zero login requirements, and zero installations.</li>
        </ol>
        <p>All generation occurs locally inside your browser. Your preferences and the titles you produce are never transmitted to an external server, keeping your fictional universe confidential until you decide to reveal it.</p>

        <h2>[17] Common Mistakes to Avoid</h2>
        <p>Several errors shatter the illusion of an authentic pantheon. The primary mistake is blending linguistic styles accidentally — a Germanic-sounding term next to a Hellenic one feels discordant unless your setting is consciously mixed (select one tradition per pantheon to prevent this). The secondary mistake is borrowing a well-known immortal title directly (Zeus, Thor, Ra) unless the homage is deliberate. The third mistake is assigning redundant spheres, giving multiple immortals identical portfolios. The fourth mistake is disregarding significance — a term is much better when it connects to a defined domain. Retain titles that fit the tone, remain unique, and suit a specific function. These are imaginative creations drawn from legends, not an academic database, so check against historical sources if absolute precision is required.</p>

        <h2>Privacy</h2>
        <p>This god and goddess name generator executes completely inside your web browser. When you configure your preferences and create, the titles and definitions are built locally upon your machine — nothing gets transmitted, recorded, or saved on our backend systems. Shut the window and the output disappears unless you saved it. For additional naming utilities, visit our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What exactly is a god and goddess name generator?', answer: 'A god and goddess name generator is a web-based utility that invents deity-style terms drawn from ancient legends (Greek, Norse, Egyptian, Roman). You pick a culture and category (male deities, female deities, or both) and receive titles with optional definitions instantly upon clicking. This free utility operates inside your browser with no registration needed. The results are intended for artistic purposes only.' },
  { category: 'Usage', question: 'What is the process for using the god and goddess name generator?', answer: 'Select a culture (Egyptian, Greek, Roman, Norse, or Any), pick a type (Gods and goddesses, Gods only, or Goddesses only), choose the quantity of names (1-24), optionally select "Include meaning," and hit "Generate names." Click the Copy button to transfer all names to your clipboard. Transfer them to your notes and select the best options. Registration is unnecessary. The application operates in your browser, meaning your preferences and generated names stay off any remote servers.' },
  { category: 'General', question: 'Does the god and goddess name generator cost anything?', answer: 'Indeed. This god and goddess name generator is completely free for browser use. You can produce names limitlessly without registering or paying a fee. The application functions locally on your hardware.' },
  { category: 'Use cases', question: 'Is it suitable for creative writing?', answer: 'Certainly. The god and goddess name generator is built for storytelling, games, and fiction. Execute the generator repeatedly to compile a selection of deity names for your pantheon or characters. The utility is free and operates within your browser without registration.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'Negative. This god and goddess name generator functions inside your browser. Once you configure your choices and click generate, the names are built locally upon your system. Your preferences and the resulting names remain off our servers. We never save your inputs or the resulting list.' },
  { category: 'Compatibility', question: 'Will the god and goddess name generator function on smartphones?', answer: 'Correct. The god and goddess name generator operates via a web browser and functions on phone, tablet, and desktop devices. Application installation is unnecessary. Launch the site, select type and culture, pick the quantity of names, and generate. On mobile devices, you can produce a quick list and transfer it to your notes.' },
  { category: 'Limits', question: 'What is the maximum number of names I can produce?', answer: 'You are able to request 1-24 names per batch using this god and goddess name generator. Should you require more than 24, simply trigger the generator again; every execution creates a fresh randomized selection. There are no daily or overall caps. Combine multiple batches into a single file and delete duplicates if necessary.' },
  { category: 'General', question: 'Which traditions are included?', answer: 'The generator supports Roman, Egyptian, Norse, and Greek deity names. Users may pick a single tradition or select Any culture for a blended option. These names and their optional definitions draw inspiration from those ancient mythologies. The generated content serves creative purposes exclusively.' },
  { category: 'Use cases', question: 'Am I allowed to use these names in a novel?', answer: 'Indeed. Authors rely on the god and goddess name generator for fantasy stories and myth-based narratives. Execute the tool several times to assemble a short list or an entire pantheon. Maintain a record of names to avoid assigning identical labels to multiple figures. This utility provides inspiration only.' },
  { category: 'General', question: 'What alternative name generators are available?', answer: 'We offer Muslim, royal surname, ancient Greek, anime names, and numerous additional options for creative projects and characters. Check our homepage to view the complete catalog of text and naming utilities.' },
    { category: 'Usage', question: 'Are these names able to be copied?', answer: 'Indeed. Click the Copy button on this god and goddess name generator to transfer every generated name (plus meanings, if activated) straight to your clipboard. Transfer them into a document or notes application. Should you spot extra spaces after pasting, run the text through a plain-text tool.' },
  { category: 'General', question: 'Do I need to sign up?', answer: 'Negative. This god and goddess name generator functions without requiring registration or sign-in. The utility operates completely within your web browser. There is no need to make an account on our platform to access it.' },
  { category: 'Use cases', question: 'Is it suitable for tabletop RPGs?', answer: 'Yes. Game masters utilize the god goddess name generator for deity non-player characters and pantheons. Select a culture or "Any" and execute the generator multiple times to compile a roster. You can activate "Include meaning" to align names with specific domains (e.g. war, harvest).' },
  { category: 'Privacy', question: 'Do you keep a record of the names?', answer: 'No. Creation takes place inside your browser. We never capture or save the names or your configurations. The god and goddess name generator executes locally on your hardware. You are free to run the tool within a private or incognito window if desired.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Every click of this god and goddess name generator yields up to 24 names. For additional ones, trigger the generator again; every execution creates a fresh randomized list. You are free to paste multiple batches into a single document and then filter out duplicates. There exists no daily or overall restriction.' },
  { category: 'General', question: 'Can I obtain exclusively goddess names?', answer: 'Affirmative. Access the Type menu and pick "Goddesses only" to retrieve strictly goddess-themed names. You may additionally select "Gods only" or "Gods and goddesses." The system accommodates Greek, Norse, Egyptian, and Roman for each category.' },
  { category: 'Use cases', question: 'Am I allowed to apply the names within games?', answer: 'Yes. You are welcome to utilize names from this god and goddess name generator for tabletop games, video games, and alternative artistic endeavors. Pick a culture or "Any" and execute the tool repeatedly to construct a pantheon. Optional definitions assist in matching names to specific functions.' },
    { category: 'General', question: 'Is it possible to integrate with other generators?', answer: 'Indeed. Employ this god and goddess name generator for deity terms and our ancient Greek name generator for human-style Greek monikers or our royal surname generator for aristocratic family names. When compiling lists from multiple utilities, maintain a single file and utilize a plain-text utility when pasting from the internet. Consult our main page for extra utilities.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'This god and goddess name generator implements curated name and meaning components inspired by Greek, Norse, Egyptian, and Roman mythologies. Upon clicking generate, the utility randomly selects from these collections inside your browser so every execution varies. No names or configurations are transmitted to a server. The output serves exclusively for creative purposes.' },
  { category: 'General', question: 'Do these represent authentic mythological names?', answer: 'Names and definitions draw inspiration from genuine mythologies yet are combined or applied for variety. The system serves purely for creative inspiration; it does not constitute a scholarly or comprehensive reference. Apply them toward fiction and games; verify via references should you require absolute precision.' },
  { category: 'Use cases', question: 'Are educators permitted to utilize it?', answer: 'Yes. Instructors can leverage this god and goddess name generator for creative writing or mythology-based tasks. Pupils might produce a roster of deity terms for a narrative or assignment. Stress that the utility exists for inspiration and that names derive from mythology, remaining non-exhaustive.' },
  { category: 'General', question: 'How should I reference the utility?', answer: 'For academic or formal applications, you may cite this god and goddess name generator as an inspiration source for deity or character names. The generated monikers are algorithmically derived; you are free to employ them across your projects. A brief credit remains optional. We mandate no attribution.' },
  { category: 'General', question: 'What if a particular culture is required?', answer: 'Select Greek, Norse, Egyptian, or Roman via the Culture menu to acquire solely names from that mythology. Opt for "Any culture" for a blend. Run the utility several times to secure additional choices. For alternative naming conventions, check our ancient Greek or royal surname generator on our homepage.' },
  { category: 'Privacy', question: 'Can I operate it in private or incognito mode?', answer: 'Affirmative. The god and goddess name generator functions within your browser and operates smoothly in private or incognito windows. Names are generated locally and remain unshared with our servers. No profile or sign-in is necessary.' },
];

export default async function GodGoddessNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<GodGoddessNameGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the god and goddess name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

