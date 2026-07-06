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
    description: 'Generate god and goddess names with meanings. Choose culture (Greek, Norse, Egyptian, Roman) and get deity names for fiction, games, and storytelling.',
    seoTitle: 'God & Goddess Name Generator - Deity Names With Meaning',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>God &amp; Goddess Name Generator - Deity Names With Meaning</h2>
        <p>
          A god&apos;s name is the seed of a whole pantheon. Zeus, Odin, Ra, and Isis each carry a domain, a temperament, and a place in a divine hierarchy that a single word evokes instantly. This god and goddess name generator builds deity names in that tradition, drawing on the naming patterns of real mythologies so you can populate a pantheon for fiction, tabletop RPGs, and worldbuilding. You can pick a <strong>culture</strong> (Greek, Norse, Egyptian, Roman, or Any), a <strong>type</strong> (gods only, goddesses only, or both), and optionally <strong>include a meaning</strong> so each name arrives with a domain attached. It runs in your browser, needs no sign-up, and gives you 1–24 names per run.
        </p>
        <p>
          Divine names are not interchangeable across cultures — a Norse god and an Egyptian goddess sound nothing alike, and that difference is the whole point. The guide below explains how theonyms (god-names) actually work in each of the four supported pantheons, how epithets and domains shape a deity&apos;s identity, and how to use the culture and type options to build a coherent pantheon rather than a random pile of names.
        </p>

        <h2>How Divine Names Work: Theonyms, Domains, and Epithets</h2>
        <p>
          A <strong>theonym</strong> is simply the name of a god, and across mythologies these names cluster around a few devices. Many are tied to a <strong>domain</strong> — the sphere the deity rules, such as war, the sea, love, harvest, or the dawn — so a name and a role travel together (this is what the &quot;Include meaning&quot; option surfaces). Gods also collect <strong>epithets</strong>: descriptive by-names that name an aspect or deed. Zeus is &quot;Zeus the Thunderer,&quot; Athena is &quot;Grey-eyed Athena,&quot; Apollo is &quot;Far-shooting.&quot; When you name a deity for fiction, pairing a core name with a domain and an epithet gives it the same layered identity real gods have.
        </p>

        <h2>Greek Deity Names</h2>
        <p>
          Greek theonyms tend to be melodic and vowel-rich, often ending in -os or -on for gods (Kronos, Helios) and -a, -e, or -is for goddesses (Athena, Persephone, Artemis). Many encode a domain or trait in an ancient root. The Greek pantheon is highly organized — Olympians, Titans, primordial deities — so a Greek-flavored name should feel like it belongs to that structured family. For human-style Greek names to sit alongside your gods, pair this tool with our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>.
        </p>

        <h2>Norse Deity Names</h2>
        <p>
          Norse names are harder and more consonant-heavy, thick with the sounds of Old Norse — Odin, Thor, Freyr, Freyja, Heimdall, Tyr. Many derive from words for natural and martial forces (thunder, frost, war, fate), matching the grim, weather-beaten character of the mythology. Choose &quot;Norse&quot; when you want deities that sound rugged and elemental, and lean on domains like storm, battle, the sea, and the underworld to place each god in the pantheon.
        </p>

        <h2>Egyptian Deity Names</h2>
        <p>
          Egyptian theonyms are short, weighty, and often built on hard or breathy sounds — Ra, Isis, Osiris, Anubis, Horus, Bastet, Set. Many gods are tied to cosmic forces (the sun, the sky, the afterlife) or take animal aspects, so their names feel ancient and ceremonial. Egyptian names read as formal and monumental, well suited to a pantheon centered on the sun, death, and cosmic order.
        </p>

        <h2>Roman Deity Names</h2>
        <p>
          Roman gods parallel the Greek pantheon but carry their own Latinate names — Jupiter, Juno, Mars, Venus, Neptune, Minerva. The sounds are firmer and more institutional than the Greek, reflecting Rome&apos;s civic, state-religion character. Choose &quot;Roman&quot; when you want authority and gravitas, and note that many Roman gods share domains with Greek counterparts (Mars/Ares, Venus/Aphrodite), so you can mirror an existing structure with a different tonal register.
        </p>

        <h2>Using the Culture and Type Options</h2>
        <p>
          The tool&apos;s options let you tune the output to your world:
        </p>
        <ul>
          <li><strong>Culture</strong> — pick Greek, Norse, Egyptian, or Roman for a single, coherent mythology, or &quot;Any culture&quot; for a mixed or invented pantheon that borrows from several.</li>
          <li><strong>Type</strong> — choose &quot;Gods only,&quot; &quot;Goddesses only,&quot; or &quot;Gods and goddesses&quot; depending on whether you need one type or a balanced roster.</li>
          <li><strong>Include meaning</strong> — turn this on to attach a short domain to each name (e.g. sky, war, love, harvest) so you can match a deity to its role at a glance.</li>
        </ul>
        <p>
          Run once per culture to keep pantheons distinct, or use &quot;Any culture&quot; when you want a syncretic feel. For noble mortal surnames to rule under your gods, our <Link href="/royal-surname-generator">royal surname generator</Link> pairs well with this one.
        </p>

        <h2>Building a Coherent Pantheon</h2>
        <p>
          A believable pantheon is a system, not a list. Assign each deity a distinct domain so they do not overlap — one god of war, one of the sea, one of the harvest — and give them relationships: siblings, rivals, a ruling sky-father, a queen of the underworld. Enable meanings and generate within a single culture so the names share a sound family, then map the domains onto roles. The result reads like a real mythology, where each god fills a niche and the whole set feels internally consistent.
        </p>

        <h2>How to Use This God and Goddess Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose a culture (Greek, Norse, Egyptian, Roman, or Any) and a type (gods, goddesses, or both).</li>
          <li>Set how many names you want per run (1–24), and optionally check <strong>Include meaning</strong>.</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of deity names with their domains.</li>
          <li>Use the Copy button to save your shortlist, then assign each name a role, an epithet, and a place in the pantheon.</li>
          <li>Run again — once per culture for distinct pantheons — with no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your worldbuilding stays private until you choose to share it.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps break the illusion of a real pantheon. The first is mixing culture-sounds unintentionally — a Norse-sounding name beside a Greek one reads as a mismatch unless your world is deliberately syncretic (use a single culture per pantheon to avoid it). The second is copying a famous deity name outright (Zeus, Thor, Ra) unless you intend the reference. The third is stacking overlapping domains, giving three gods the same portfolio. The fourth is ignoring meaning — a name is far stronger when it maps to a clear domain. Keep the names that are tonally consistent, distinct, and matched to a role. These are creative combinations inspired by mythology, not a scholarly register, so verify against references if you need strict accuracy.
        </p>

        <h2>Privacy</h2>
        <p>
          This god and goddess name generator runs entirely in your browser. When you set your options and generate, the names and meanings are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it. For more naming tools, see our <Link href="/">homepage</Link>.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a god and goddess name generator?', answer: 'A god and goddess name generator is an online tool that creates deity-style names inspired by mythologies (Greek, Norse, Egyptian, Roman). You choose culture and type (gods, goddesses, or both) and get names with optional meanings at the click of a button. This free tool runs in your browser with no sign-up. The output is for creative use only.' },
  { category: 'Usage', question: 'How do I use the god and goddess name generator?', answer: 'Choose a culture (Greek, Norse, Egyptian, Roman, or Any), choose type (Gods only, Goddesses only, or Gods and goddesses), set how many names you want (1–24), optionally check "Include meaning," then click "Generate names." Use the Copy button to copy all names to your clipboard. Paste into your notes and pick the names that fit. No sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is the god and goddess name generator free?', answer: 'Yes. This god and goddess name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for fiction?', answer: 'Yes. The god and goddess name generator is designed for fiction, games, and storytelling. Run the generator multiple times to get a shortlist of deity names for your characters or pantheon. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This god and goddess name generator runs in your browser. When you set your options and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does the god and goddess name generator work on mobile?', answer: 'Yes. The god and goddess name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose culture and type, set the number of names, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this god and goddess name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'What cultures are supported?', answer: 'The generator supports Greek, Norse, Egyptian, and Roman deity names. You can choose one culture or "Any culture" for a mix. Names and optional meanings are inspired by those mythologies. The output is for creative use only.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes. Writers use the god and goddess name generator for fantasy and myth-inspired fiction. Run the generator multiple times to build a pantheon or shortlist. Keep a naming document so you do not reuse the same name for two characters. The tool is for inspiration only.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have ancient Greek, royal surname, Muslim, anime names, and many others for character and creative names. See our homepage for the full list of naming and text tools.' },
    { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this god and goddess name generator to copy all generated names (and meanings, if enabled) to your clipboard. Paste into a notes app or document. If you notice extra spaces after pasting, run the text through a plain-text tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This god and goddess name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs use the god goddess name generator for deity NPCs and pantheons. Choose a culture or "Any" and run the generator several times to build a roster. You can enable "Include meaning" to match names to domains (e.g. war, harvest).' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The god and goddess name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this god and goddess name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Can I get goddess names only?', answer: 'Yes. Use the Type dropdown and select "Goddesses only" to get only goddess-style names. You can also choose "Gods only" or "Gods and goddesses." The generator supports Greek, Norse, Egyptian, and Roman for each type.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes. You can use names from this god and goddess name generator in tabletop games, video games, and other creative projects. Choose a culture or "Any" and run the generator multiple times to build a pantheon. Optional meanings help match names to roles.' },
    { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this god and goddess name generator for deity names and our ancient Greek name generator for human-style Greek names or our royal surname generator for noble surnames. When you assemble lists from multiple tools keep one document and use a plain-text tool when pasting from the web. See our homepage for more tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This god and goddess name generator uses curated name and meaning elements inspired by Greek, Norse, Egyptian, and Roman mythologies. When you click generate, the tool randomly picks from these lists in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Are these real mythological names?', answer: 'Names and meanings are inspired by real mythologies but are combined or used for variety. The generator is for creative inspiration only; it is not a scholarly or exhaustive source. Use for fiction and games; verify with references if you need strict accuracy.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this god and goddess name generator for creative writing or mythology-related activities. Students might generate a list of deity names for a story or project. Emphasize that the tool is for inspiration and that names are inspired by mythology, not exhaustive.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this god and goddess name generator as a source of inspiration for deity or character names. The generated names are algorithm-produced; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific culture?', answer: 'Choose Greek, Norse, Egyptian, or Roman from the Culture dropdown to get only names from that mythology. Use "Any culture" for a mix. Run the generator multiple times to get more options. For other naming styles see our ancient Greek or royal surname generator on our homepage.' },
  { category: 'Privacy', question: 'Can I use it in private or incognito mode?', answer: 'Yes. The god and goddess name generator runs in your browser and works in private or incognito windows. Names are created locally and are not sent to our servers. No account or login is required.' },
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
          <p className="text-slate-700">Common questions about the god and goddess name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

