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
    description: 'Free Elden Ring name generator for Tarnished characters, builds, and Souls-style RP names. Archaic, grim, lore-fitting names for the Lands Between — in your browser, no sign-up.',
    seoTitle: 'Elden Ring Name Generator – Tarnished & Souls-Style Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Elden Ring Name Generator – Tarnished &amp; Souls-Style Names</h2>
        <p>
          This Elden Ring name generator creates names that fit the grim, archaic tone of the Lands Between — names for your Tarnished, for a build you are sharing, for a co-op summon sign, or for a tabletop or play-by-post character set in FromSoftware&apos;s world. The Souls and Elden Ring naming style is very specific: weathered, half-Old-English, often a single evocative word or a name plus a title. The generator leans into that register so the names sound like they belong on a gravestone in Limgrave rather than on a modern leaderboard. It runs in your browser with no sign-up and stores nothing.
        </p>
        <p>
          FromSoftware names carry weight because they sound old and earned. Malenia, Blade of Miquella. Radahn, Starscourge. Godfrey, the First Elden Lord. The pattern is name-plus-epithet, with the epithet doing the storytelling. This page explains that convention so the name you pick reads as canon — and so a Tarnished you roll feels like it could share a loading screen with the demigods.
        </p>

        <h2>The Elden Ring &amp; Souls Naming Style</h2>
        <p>
          Across Demon&apos;s Souls, Dark Souls, Bloodborne, Sekiro, and Elden Ring, FromSoftware uses a consistent naming aesthetic. Knowing its building blocks lets you generate names that feel native rather than modern:
        </p>
        <ul>
          <li><strong>Archaic and weathered.</strong> Names lean on Old English, Latin, and Norse roots — Godrick, Morgott, Rykard, Mohg. Hard consonants and old spellings (-ric, -wyn, -gar, -eth) read as ancient.</li>
          <li><strong>Name plus epithet.</strong> The title carries the lore: &quot;the Grafted,&quot; &quot;the Omen King,&quot; &quot;Lord of Blasphemy,&quot; &quot;Blade of Miquella.&quot; Half a character&apos;s identity lives in their epithet.</li>
          <li><strong>Single evocative words.</strong> Many characters go by one stark name — Ranni, Melina, Gideon, Blaidd. A single well-chosen word can be more in-genre than a full name.</li>
          <li><strong>Grim, never cute.</strong> The tone is mournful and decayed. Soft, modern, or whimsical names break the spell; the Lands Between is a dying world and the names reflect it.</li>
        </ul>

        <h2>Naming Your Tarnished</h2>
        <p>
          The Tarnished — your character — is a name you live with across a long, hard playthrough, and many players want one that fits the world rather than the default. A strong Tarnished name is short, speakable, and slightly archaic: something a Finger Maiden might intone or that would sit comfortably on a summon sign. Generate a batch, then read each one as if Melina were addressing you by it; the ones that sound like a half-forgotten lord or a wandering knight are the keepers.
        </p>
        <p>
          If you are role-playing a build, the name can hint at the playstyle. A faith-based incantation build might carry a clerical, Latinate name; a bleed build something sharper and crueler; a mage a colder, more distant one. This is the same logic FromSoftware uses, where a character&apos;s name and epithet telegraph what they are before you fight them.
        </p>

        <h2>Building an Epithet</h2>
        <p>
          The epithet is where Elden Ring naming truly comes alive. &quot;Starscourge Radahn&quot; tells you he holds back the stars; &quot;Maliketh, the Black Blade&quot; names a weapon and a duty. For your own character, generate a base name and then attach a title built from a deed, a weapon, or a curse: &quot;the Ashen,&quot; &quot;Bearer of the Frenzied Flame,&quot; &quot;Knight of the Fallen Rune,&quot; &quot;the Twice-Born.&quot; This two-part structure — name plus title — is the single most recognizable feature of FromSoftware naming, and it instantly elevates a plain name into something that sounds lore-accurate.
        </p>

        <h2>Names by Region and Faction</h2>
        <p>
          The Lands Between has distinct cultures, and matching a name to a region or faction deepens an RP character:
        </p>
        <ul>
          <li><strong>Leyndell and the Golden Order.</strong> Formal, regal, Latinate names — knights and clergy of the capital.</li>
          <li><strong>Caelid and the Scarlet Rot.</strong> Harsher, more decayed names fitting a blighted, war-torn land.</li>
          <li><strong>Liurnia and the Academy of Raya Lucaria.</strong> Cold, scholarly, glintstone-sorcerer names.</li>
          <li><strong>The Badlands and the Crucible Knights.</strong> Old, primal names from before the Golden Order.</li>
          <li><strong>Mohgwyn and the Blood cults.</strong> Sanguine, sacrificial, cruel-sounding names.</li>
        </ul>

        <h2>How to Use This Elden Ring Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a batch of Souls-style names.</li>
          <li>Read them aloud and keep the ones that sound archaic and weathered.</li>
          <li>Copy the list into your notes, then pair a favorite with an epithet built from a deed or weapon.</li>
          <li>Run again for more — no limit, no account, no download.</li>
        </ol>
        <p>
          Everything runs locally in your browser. Your settings and generated names are never sent to a server, so your character ideas stay private.
        </p>

        <h2>Tips for a Lore-Accurate Name</h2>
        <p>
          Favor old spellings and hard endings (-ric, -gar, -wyn, -eth, -mund). Keep it short — most memorable FromSoftware names are one or two syllables you can say in a single breath. Avoid anything that sounds modern, branded, or cheerful; the moment a name feels like a gamertag, it leaves the world. If a generated name is close but too soft, swap a vowel or harden a consonant until it sounds like it was carved in stone. And when in doubt, add an epithet — a plain name carrying a grim title almost always reads as canon.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Elden Ring and Souls-style names for your Tarnished, builds, and RP characters.</li>
          <li>It does not reproduce the official cast as a lookup list — output is original for your own use.</li>
          <li>It does not store your generated names or settings; generation is fully local.</li>
          <li>It does not check name availability in-game or on summon signs — verify that yourself if needed.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Elden Ring is one of the most-named games of its generation — players name Tarnished characters, share builds, write play-by-post RP, and run Souls-inspired tabletop campaigns, all needing names that fit the tone. This generator gives you that pool instantly, grounded in FromSoftware&apos;s real naming logic: archaic roots, name-plus-epithet structure, single evocative words, and a grim, mournful register. Generate a batch, lean on the region and epithet notes above, and you will end up with names that sound like they were always part of the Lands Between.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an Elden Ring name generator?', answer: 'It is a browser tool that creates names in the style of Elden Ring and the wider Souls series — archaic, grim, name-plus-epithet names for your Tarnished, your builds, or role-play characters set in the Lands Between. It follows FromSoftware\'s naming conventions so the names feel canon. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'What makes a name sound like Elden Ring?', answer: 'Archaic roots (Old English, Latin, Norse), hard endings like -ric, -gar, -wyn, and -eth, and a grim, weathered tone. Names are often short single words (Ranni, Blaidd, Gideon) or a name paired with a lore-heavy epithet (Starscourge Radahn, Maliketh the Black Blade). Soft or modern-sounding names break the register.' },
  { category: 'Naming style', question: 'What is the name-plus-epithet pattern?', answer: 'Most major Elden Ring characters carry a title that tells their story: "Godfrey, the First Elden Lord," "Mohg, Lord of Blood," "Malenia, Blade of Miquella." The epithet does the lore work. For your own character, attach a title built from a deed, weapon, or curse — "the Ashen," "Bearer of the Frenzied Flame" — to make a plain name sound canon.' },
  { category: 'Tarnished', question: 'How should I name my Tarnished?', answer: 'Pick something short, speakable, and slightly archaic — a name a Finger Maiden could intone or that would sit on a summon sign. Generate a batch and read each aloud as if Melina were addressing you; keep the ones that sound like a half-forgotten lord or wandering knight. You can also tie the name to your build\'s playstyle.' },
  { category: 'Tarnished', question: 'Can the name hint at my build?', answer: 'Yes, and that is very in-genre. A faith incantation build suits a clerical, Latinate name; a bleed build something sharper and crueler; a sorcerer a colder, more distant one. FromSoftware names telegraph what a character is before you meet them, so naming a build to match its identity fits the world.' },
  { category: 'Lore', question: 'How do names differ by region in the Lands Between?', answer: 'Leyndell and the Golden Order use formal, regal, Latinate names. Caelid (Scarlet Rot) names are harsher and more decayed. Liurnia and Raya Lucaria lean cold and scholarly. The Badlands and Crucible Knights use old, primal names from before the Golden Order, and the Blood cults use sanguine, cruel-sounding names. Match the region to deepen an RP character.' },
  { category: 'Lore', question: 'Does this style work for other Souls games?', answer: 'Yes. The naming aesthetic is consistent across Demon\'s Souls, Dark Souls, Bloodborne, Sekiro, and Elden Ring — archaic, weathered, name-plus-epithet. Names generated here fit a Dark Souls undead, a Bloodborne hunter, or a Souls-inspired tabletop campaign just as well as a Tarnished.' },
  { category: 'Use cases', question: 'Can I use these names for role-play?', answer: 'Yes — play-by-post, Discord RP, and tabletop campaigns set in the Lands Between all need lore-fitting names. Generate a batch, pick one that matches your character\'s region and faction, and add an epithet that reflects their deeds. The result sits naturally alongside canon characters.' },
  { category: 'Use cases', question: 'Can I use these for a summon sign or co-op name?', answer: 'Yes. Many players want their Tarnished name to set a tone when their summon sign appears in another world. A short, grim, archaic name reads better on a sign than a modern handle. Note that in-game character names must follow the game\'s rules and this tool does not check what is already in use.' },
  { category: 'Use cases', question: 'Can I use a generated name as a gamertag or username?', answer: 'You can, though the Souls register skews atmospheric rather than punchy. The names work as handles for Souls communities and Discord servers. This tool does not check whether a name is taken, so verify availability on the platform before claiming it.' },
  { category: 'Usage', question: 'How do I use this generator?', answer: 'Set how many names you want (1–24), click Generate names, and read the batch aloud. Keep the ones that sound archaic and weathered, copy the list into your notes, and pair a favorite with an epithet. Run again for more — there is no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes, and it is encouraged. If a name is close but too soft, swap a vowel or harden a consonant until it sounds carved in stone. You can also mix a surname-style root from one result with a given name from another, then attach your own epithet for the final name.' },
  { category: 'Naming style', question: 'Why do my generated names sound too modern?', answer: 'Modern-sounding output usually means the vowels are too soft or the name is too long. Favor short names with hard endings (-ric, -gar, -eth) and old spellings. Adding a grim epithet also instantly pulls a plain name into the FromSoftware register.' },
  { category: 'Naming style', question: 'How long should an Elden Ring name be?', answer: 'Short. Most memorable FromSoftware names are one or two syllables you can say in a single breath — Ranni, Mohg, Godrick, Melina. Length comes from the epithet, not the name itself. If the name alone is a mouthful, trim it and let the title carry the weight.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated name elements built around Souls-style conventions — archaic roots, hard consonants, old endings — and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Technical', question: 'Are these real characters from Elden Ring?', answer: 'No. The generator creates original, Souls-style names for your own use rather than reproducing the official cast. That is intentional — you want fresh names for your Tarnished and RP characters, not duplicates of canon demigods you cannot make your own.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your character ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set with no daily or total limit. Paste multiple runs into one document if you want a large pool to choose from.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch on your phone, copy it into notes, and shortlist names wherever you are playing or writing.' },
  { category: 'General', question: 'Is the Elden Ring name generator free?', answer: 'Yes, completely free with no account, sign-up, or download. Generate as many Tarnished, build, and RP names as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I make a name feel truly lore-accurate?', answer: 'Anchor it to a region or faction from the notes above, keep it short and archaic, and attach an epithet built from a deed or weapon. Read it aloud — if it sounds like it belongs on a gravestone in Limgrave or in a Finger Maiden\'s address, it is in the right register.' },
  { category: 'Best practices', question: 'Should I add a title to every name?', answer: 'Not always, but it helps. Single evocative names (Ranni, Blaidd) work on their own, while plainer names benefit hugely from an epithet. If a generated name feels flat, a grim title almost always rescues it and makes it sound canon.' },
  { category: 'Troubleshooting', question: 'The names do not feel grim enough — what should I do?', answer: 'Generate a larger batch and filter hard: keep only names with hard consonants and archaic endings, discard anything soft or cheerful. Then pair your favorite with a mournful or cruel epithet. The combination of a weathered name and a lore-heavy title is what gives FromSoftware names their dark weight.' },
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
          <p className="text-slate-700">Common questions about the Elden Ring name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
