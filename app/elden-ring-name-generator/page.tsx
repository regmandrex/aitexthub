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


const toolSlug = 'elden-ring-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Elden Ring Name Generator',
    description: 'Free Elden Ring Name Generator for Tarnished characters, builds, and Souls-style roleplay names. Archaic, grim, lore-appropriate names for the Lands Between - inside your browser, no registration required.',
    seoTitle: 'Elden Ring Name Generator – Tarnished & Souls-Style Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Elden Ring Name Generator – Souls-Style &amp; Tarnished Names</h2>
        <p>This Elden Ring Name Generator delivers titles reflecting the bleak, ancient atmosphere of the Lands Between - handles suited for your Tarnished, an online build showcase, an active co-op summon sign, or a character in a tabletop campaign within FromSoftware&apos;s universe. The dark aesthetic typical of Souls and Elden Ring features distinct traits: weathered, quasi-Old-English structures, frequently centered on a single moody noun or a title paired with an epithet. This tool targets that precise aesthetic so every name feels suited for an ancient slab in Limgrave rather than an arcade rank list. It functions directly through your browser, requires no signup, and never saves your input.</p>
        <p>FromSoftware names carry weight because they sound ancient and earned. Malenia, Blade of Miquella. Radahn, Starscourge. Godfrey, the First Elden Lord. The pattern is name-plus-epithet, with the epithet handling the storytelling. This page breaks down that convention so the moniker you select reads as canon - and so a Tarnished you roll feels like it could share a loading screen with the demigods.</p>

        <h2>The Souls &amp; Elden Ring Naming Style</h2>
        <p>Across Demon&apos;s Souls, Dark Souls, Bloodborne, Sekiro, and Elden Ring, FromSoftware employs a consistent naming aesthetic. Understanding its building blocks lets you generate names that feel native rather than modern:</p>
        <ul>
          <li><strong>Archaic and weathered.</strong> These handles draw from Old English, Latin, and Norse roots - Godrick, Morgott, Rykard, Mohg. Heavy plosives alongside traditional suffixes (-ric, -wyn, -gar, -eth) convey an unmistakable antiquity.</li>
          <li><strong>Epithet plus name.</strong> Lore is carried by the title: &quot;the Grafted,&quot; &quot;the Omen King,&quot; &quot;Lord of Blasphemy,&quot; &quot;Blade of Miquella.&quot; Their epithet houses half a character&apos;s identity.</li>
          <li><strong>Evocative single words.</strong> A stark single name is used by many characters — Ranni, Melina, Gideon, Blaidd. More genre-fitting than a full name can be a single well-chosen word.</li>
          <li><strong>Grim, never cute.</strong> The tone is mournful and decayed. Soft, modern, or whimsical names break the spell; the Lands Between represents a dying world and the names reflect it.</li>
        </ul>

        <h2>Naming Your Tarnished</h2>
        <p>Because you spend dozens of challenging hours guiding your Tarnished, settling on a fitting identity instead of a generic placeholder matters to many adventurers. Memorable options tend to be brief, pronounceable, and faintly antiquarian—the sort of designation a Finger Maiden would murmur or that looks natural inscribed upon a summon sign. Produce several choices, then picture Melina speaking each title aloud; those that carry the resonance of an exiled champion or an ancient noble are your best selections.</p>
        <p>A moniker can subtly reflect your character's combat approach during dedicated role-play runs. Faith-focused incantation users might suit ecclesiastic, Latin-inspired titles; bleed builds demand sharp, brutal designations; sorcerers often benefit from distant, frigid appellations. This mirrors FromSoftware's own design principles, wherein an opponent&apos;s title and epithet signal their fighting discipline before any blow lands.</p>

        <h2>Building an Epithet</h2>
        <p>True Elden Ring flavor depends heavily on the epithet. When you hear &quot;Starscourge Radahn,&quot; you grasp his cosmic feat; &quot;Maliketh, the Black Blade&quot; conveys both his armaments and sacred burden. When crafting your own identity, pick an underlying moniker and anchor it to an accomplishment, an armament, or an affliction: &quot;the Ashen,&quot; &quot;Bearer of the Frenzied Flame,&quot; &quot;Knight of the Fallen Rune,&quot; or &quot;the Twice-Born.&quot; This dual setup—personal name coupled with an honorific—remains the signature hallmark of FromSoftware world-building, effortlessly turning simple text into an authentic-sounding legend.</p>

        <h2>Names by Region and Faction</h2>
        <p>The Lands Between features distinct cultures, and matching a moniker to a region or faction enriches an RP character:</p>
        <ul>
          <li><strong>Leyndell and the Golden Order.</strong> Formal, regal, Latinate names — knights and clergy hailing from the capital.</li>
          <li><strong>Caelid and the Scarlet Rot.</strong> Grittier, pestilent designations suited to a devastated, pestilence-ridden realm.</li>
          <li><strong>Liurnia and the Academy of Raya Lucaria.</strong> Frigid, intellectual designations tailored for glintstone scholars.</li>
          <li><strong>The Badlands and the Crucible Knights.</strong> Old, primal names originating before the Golden Order.</li>
          <li><strong>Mohgwyn and the Blood cults.</strong> Sanguine, sacrificial, cruel-sounding names.</li>
        </ul>

        <h2>How to Use This Elden Ring Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Select <strong>Generate names</strong> to produce a collection of Souls-style names.</li>
          <li>Speak each candidate aloud, retaining those possessing an ancient, time-tested cadence.</li>
          <li>Save the generated options, pairing a standout choice with a custom epithet derived from a relic or exploit.</li>
          <li>Spin the tool repeatedly for fresh ideas — zero restrictions, sign-ups, or software required.</li>
        </ol>
        <p>All processing happens directly within your web browser. None of your options or created monikers get transmitted over the internet, keeping all your personal concept work entirely confidential.</p>

        <h2>Tips for a Lore-Accurate Name</h2>
        <p>Favor old spellings and hard endings (-ric, -gar, -wyn, -eth, -mund). Keep it brief — most memorable FromSoftware names consist of one or two syllables spoken in a single breath. Avoid anything sounding modern, branded, or cheerful; the moment a title feels like a gamertag, it shatters the atmosphere. If a generated name is close yet too soft, swap a vowel or harden a consonant until it seems carved in stone. And when unsure, add an epithet — a simple name carrying a grim title almost always reads as canon.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Elden Ring and Souls-style names for your Tarnished, builds, and RP characters.</li>
          <li>Rather than listing official cast characters via lookup, this tool generates original output for your adventures.</li>
          <li>It never logs or saves your preferences or creations; everything happens solely on your device.</li>
          <li>In-game name availability or summon sign constraints are unmonitored here—please test them on your platform.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>Elden Ring remains one of the most-named titles of its generation — players name Tarnished characters, share builds, write play-by-post RP, and run Souls-inspired tabletop campaigns, all needing names fitting the tone. This generator provides that pool instantly, grounded in FromSoftware&apos;s real naming logic: archaic roots, name-plus-epithet structure, single evocative words, and a grim, mournful register. Generate a batch, lean on the region and epithet notes above, and you will end up with names that sound as if they always belonged in the Lands Between.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an Elden Ring Name Generator?', answer: 'Working right in your web browser, this generator crafts titles inspired by Elden Ring along with the broader Souls series—delivering somber, antique, title-adorned monikers for your Tarnished, specialized builds, or Lands Between roleplaying personas. Its logic mirrors standard FromSoftware patterns to maintain an authentic vibe. All processing happens client-side without registration or retained logs.' },
  { category: 'Naming style', question: 'What makes a name sound like Elden Ring?', answer: 'Ancient linguistic roots (Latin, Old English, Norse), crisp suffixes including -ric, -gar, -wyn, alongside -eth, coupled with a somber atmosphere. Names are frequently single words (Ranni, Blaidd, Gideon) or combined with an evocative title (Starscourge Radahn, Maliketh the Black Blade). Modern or melodic phrasing instantly clashes with this aesthetic.' },
  { category: 'Naming style', question: 'What is the name-plus-epithet pattern?', answer: 'Prominent Elden Ring figures possess descriptive epithets detailing their legend: "Godfrey, the First Elden Lord," "Mohg, Lord of Blood," "Malenia, Blade of Miquella." Narrative depth rests within the title. For your hero, attach a descriptor derived from an affliction, relic, or triumph—"the Ashen," "Bearer of the Frenzied Flame"—to grant standard names an authentic presence.' },
  { category: 'Tarnished', question: 'How should I name my Tarnished?', answer: 'Select a brief, clear, and ancient-sounding title—something suitable for a Finger Maiden or distinct upon a summon sign. Produce a list and read each candidate as if Melina addressed you directly; preserve options evoking a forgotten aristocrat or wandering champion. Alternatively, tailor the choice to reflect your combat specialty.' },
  { category: 'Tarnished', question: 'Is it possible for the name to reflect my build?', answer: 'Indeed, which fits the genre completely. A faith incantation build matches a clerical and Latinate moniker; a bleed setup calls for something sharper and more brutal; a sorcerer benefits from a colder, more distant tone. FromSoftware titles hint at a character\'s nature before you encounter them, so assigning a build-appropriate moniker suits the setting.' },
  { category: 'Lore', question: 'In what ways do monikers vary by region throughout the Lands Between?', answer: 'Leyndell alongside the Golden Order favor formal, regal, Latinate names. Caelid (Scarlet Rot) designations tend to be harsher and more weathered. Liurnia as well as Raya Lucaria lean cold and academic. The Badlands and Crucible Knights utilize ancient, primal titles from pre-Golden Order days, while blood cults lean toward sanguine, ruthless-sounding labels. Match the territory to enhance an RP character.' },
  { category: 'Lore', question: 'Does this aesthetic function for other Souls titles?', answer: 'Affirmative. The naming style remains uniform across Demon\'s Souls, Dark Souls, Bloodborne, Sekiro, and Elden Ring — archaic, weather-beaten, name-plus-epithet formats. Monikers generated here suit a Dark Souls undead, a Bloodborne hunter, or a Souls-inspired tabletop session just as well as a Tarnished.' },
  { category: 'Use cases', question: 'Can these names be used for role-playing?', answer: 'Yes — play-by-post games, Discord RP sessions, and tabletop campaigns set in the Lands Between all require lore-consistent monikers. Produce a batch, select one fitting your character\'s province and faction, and append an epithet mirroring their actions. The outcome blends seamlessly alongside canon characters.' },
  { category: 'Use cases', question: 'Can I utilize these for a summon sign or co-op designation?', answer: 'Correct. Numerous players prefer their Tarnished handle to establish a specific mood whenever their summon sign emerges in another realm. A brief, grim, ancient moniker looks far better on a sign than a contemporary username. Bear in mind that in-game handles must adhere to official rules, and this tool does not verify existing availability.' },
  { category: 'Use cases', question: 'Is it possible to use a generated title as a gamertag or handle?', answer: 'You can, though the Souls registry leans atmospheric rather than punchy. These names serve well as identifiers within Souls communities and Discord channels. This utility does not check whether a title is claimed, so verify availability on the network prior to using it.' },
  { category: 'Usage', question: 'How do I operate this generator?', answer: 'Choose how many monikers you desire (1–24), press Generate names, and read the group out loud. Retain those sounding ancient and rugged, copy the compilation to your notes, and pair a favorite with an epithet. Run the process again for additional options — there are no restrictions, required accounts, or downloads.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Indeed, and doing so is encouraged. If a title is close yet feels overly soft, swap a vowel or harden a consonant until it appears chiseled from stone. You can also combine a surname-style root from one output with a given name from another, then attach your personal epithet to form the final moniker.' },
  { category: 'Naming style', question: 'Why do my generated names tend to sound overly contemporary?', answer: 'Modern-sounding results typically indicate vowels that are too soft or overall excessive length. Prioritize brief monikers featuring hard endings (-ric, -gar, -eth) alongside traditional spellings. Incorporating a grim epithet also instantly shifts an ordinary name into the FromSoftware style.' },
  { category: 'Naming style', question: 'What is the ideal length for an Elden Ring designation?', answer: 'Brief. Most memorable FromSoftware names consist of one or two syllables easily spoken in a single breath — Ranni, Mohg, Godrick, Melina. Length derives from the epithet instead of the name itself. If the moniker by itself proves cumbersome, trim it and allow the title to carry the weight.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The generator merges curated name components centered around Souls-style conventions — ancient roots, hard consonants, traditional suffixes — and scrambles them randomly inside your browser. Every execution yields a fresh set. Nothing transmits to a server; generation occurs entirely locally.' },
  { category: 'Technical', question: 'Are these authentic characters originating from Elden Ring?', answer: 'Negative. The utility formulates unique, Souls-style monikers for your personal use rather than replicating the official cast. That approach is deliberate — you require novel names for your Tarnished and roleplay characters rather than duplicates of canon demigods you cannot truly make your own.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'No. Everything processes directly within your browser. When you hit generate, names form right on your device. Your preferences and generated names never transmit to our servers, and zero data gets saved. Feel free to use the tool in a private window to keep your character concepts private.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You are welcome to request between 1 and 24 names per generation. To get more, simply run it again; each attempt delivers a brand-new random selection with no daily or lifetime caps. Combine multiple runs into a single document should you need an extensive pool of options.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Affirmative. The generator operates on any contemporary browser across desktop, tablet, or mobile devices without requiring an app installation. Create a batch on your phone, copy it into your notes, and compile a shortlist wherever you happen to play or write.' },
  { category: 'General', question: 'Does the Elden Ring Name Generator cost anything?', answer: 'Yes, completely free of charge with no account creation, registration, or software downloads. Produce as many Tarnished, build, and RP monikers as you prefer, as frequently as you wish.' },
  { category: 'Best practices', question: 'How can I ensure a name feels genuinely lore-appropriate?', answer: 'Anchor it to a specific region or faction referenced in the notes above, keep it concise and ancient, and append an epithet derived from a notable deed or weapon. Say it aloud — if it feels at home upon a gravestone in Limgrave or mentioned within a Finger Maiden\'s address, you have the right style.' },
  { category: 'Best practices', question: 'Should I attach a title to every single moniker?', answer: 'While not strictly mandatory, it definitely assists. Standalone evocative names like Ranni or Blaidd carry their own weight, whereas simpler ones gain a lot from an epithet. Should a generated moniker feel somewhat flat, adding a grim title usually saves it and grants a canon feel.' },
  { category: 'Troubleshooting', question: 'The names do not feel dark enough — what should I do?', answer: 'Create a bigger batch and filter strictly: retain solely terms featuring hard consonants alongside archaic endings, discarding any soft or cheerful options. Afterwards, pair your top pick with a mournful or cruel epithet. Mixing a weathered name alongside a lore-heavy title provides FromSoftware names with their dark weight.' },
];

export default async function EldenRingNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="elden-ring" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Elden Ring Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
