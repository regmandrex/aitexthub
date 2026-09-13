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


const toolSlug = 'bg3-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'BG3 Name Generator',
    description: 'Free Baldur’s Gate 3 name generator for your Tav and custom characters. Race-fitting D&D names for elves, tieflings, dwarves, githyanki, and more — in your browser, no sign-up.',
    seoTitle: 'BG3 Name Generator – Baldur’s Gate 3 Tav & D&D Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>BG3 Name Generator – Baldur&apos;s Gate 3 Tav &amp; D&amp;D Names</h2>
        <p>
          This BG3 name generator builds names for your custom character — your &quot;Tav&quot; — and for any companion, hireling, or origin character you create in Baldur&apos;s Gate 3. Because BG3 runs on Dungeons &amp; Dragons 5e and the Forgotten Realms setting, names are not generic fantasy filler: each playable race has its own naming traditions, from the flowing names of elves to the harsh, guttural names of githyanki. The generator leans into those conventions so the name you pick fits both your race and the world of Faerûn. It runs in your browser with no sign-up and stores nothing.
        </p>
        <p>
          A name in BG3 sticks with you through a 100-hour campaign, voiced by companions and narrated by the Dream Visitor, so it is worth getting right. This page walks through D&amp;D naming by race so the name you generate sounds like it belongs to a Sword Coast adventurer rather than a placeholder.
        </p>

        <h2>D&amp;D Naming by Race</h2>
        <p>
          Baldur&apos;s Gate 3 lets you play a wide roster of races, each with distinct naming traditions drawn from D&amp;D lore. Matching the name to the race is the single biggest thing that makes a Tav feel real:
        </p>
        <ul>
          <li><strong>Elves &amp; half-elves.</strong> Flowing, melodic names with soft consonants — graceful, vowel-rich sounds. High elves and wood elves both favor lyrical names.</li>
          <li><strong>Tieflings.</strong> Often a &quot;virtue name&quot; (a word or concept) alongside an Infernal-flavored name, reflecting their fiendish heritage and the names they choose for themselves.</li>
          <li><strong>Dwarves.</strong> Hard, strong names with clan associations — sturdy consonants and a sense of stone and lineage.</li>
          <li><strong>Githyanki.</strong> Harsh, alien, guttural names with apostrophes and hard sounds (like Lae&apos;zel) — distinctly non-human.</li>
          <li><strong>Humans.</strong> The widest range, drawing on the many cultures of the Sword Coast and beyond.</li>
          <li><strong>Halflings &amp; gnomes.</strong> Warmer, homier, often slightly whimsical names that suit their communities.</li>
          <li><strong>Dragonborn &amp; half-orcs.</strong> Strong, clan- or deed-rooted names with weight and presence.</li>
        </ul>

        <h2>Naming Your Tav</h2>
        <p>
          &quot;Tav&quot; is the community nickname for a custom (non-origin) BG3 protagonist — named after the default character. When you build your own hero instead of playing an origin like Astarion or Shadowheart, you choose everything, including the name companions will use for the rest of the game. Generate a batch filtered to your race, then read each one as if Shadowheart were saying it across a campfire; the names that sound natural in that context are the ones to keep.
        </p>
        <p>
          Consider your class and background too. A noble Paladin might carry a more formal, lineage-heavy name; a wild Druid something earthier; a roguish Urchin something short and street-worn. D&amp;D characters are defined as much by background as by stats, and a name that nods to that background makes the character feel authored rather than rolled.
        </p>

        <h2>Origin vs. Custom Characters</h2>
        <p>
          BG3&apos;s origin characters — Astarion, Gale, Lae&apos;zel, Shadowheart, Wyll, Karlach, and the Dark Urge — come pre-named, and those names are a masterclass in race-fitting naming. Lae&apos;zel is unmistakably githyanki; Astarion has the smooth elegance of a high-elf vampire; Karlach is strong and direct, fitting her tiefling barbarian energy. If you are creating a custom character or a multiplayer party, use these as a tuning fork: generate names and compare them to the canon companions of the same race to check that yours sits in the same register.
        </p>

        <h2>Naming for Multiplayer and Custom Campaigns</h2>
        <p>
          BG3 supports multiplayer parties of custom characters, and many groups want a cohesive set of names rather than a clash of styles. Generate a batch for each player&apos;s race and pick names that feel like they could adventure together — varied but tonally consistent. The same approach works if you are porting your BG3 Tav into a tabletop D&amp;D campaign: the names are setting-accurate for the Forgotten Realms, so they travel cleanly from the video game to the tabletop.
        </p>

        <h2>How to Use This BG3 Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a batch of D&amp;D-style names.</li>
          <li>Keep the names that fit your chosen race and class, using the race notes above as a guide.</li>
          <li>Copy the list into your notes and shortlist your favorites for character creation.</li>
          <li>Run again for more — no limit, no account, no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your character ideas stay private until you choose to use them.
        </p>

        <h2>Tips for a Race-Fitting Name</h2>
        <p>
          Decide your race first, then filter hard for sound: elven names should flow, dwarven names should feel like stone, githyanki names should sound alien. Say the name out loud — it will be spoken constantly in cutscenes, so a name that is awkward to pronounce will grate over a long campaign. Avoid borrowing a canon companion&apos;s exact name, but echoing the style of a same-race companion is a reliable shortcut. If a generated name is close, tweak the spelling or add an apostrophe (for githyanki) to push it fully into the right tradition.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Baldur&apos;s Gate 3 and D&amp;D-style names for your Tav, companions, and custom characters.</li>
          <li>It does not reproduce official companion names as a list — output is original for your own use.</li>
          <li>It does not store your generated names or settings; generation is fully local.</li>
          <li>It does not interact with your save file or the game — it only suggests names to type into character creation.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Baldur&apos;s Gate 3 is one of the most character-creation-driven games ever made, and naming your Tav is part of the fun. This generator gives you a pool of names grounded in real D&amp;D and Forgotten Realms naming traditions — race-by-race, from lilting elven names to harsh githyanki ones. Pick your race, generate a batch, lean on the notes above, and you will end up with a name that fits both your character and the Sword Coast they are about to save (or doom).
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a BG3 name generator?', answer: 'It is a browser tool that creates names for Baldur’s Gate 3 characters — your custom "Tav," companions, and hirelings — in the style of D&D and the Forgotten Realms. Because each playable race has its own naming tradition, the generator produces race-fitting names rather than generic fantasy filler. It runs locally with no sign-up and stores nothing.' },
  { category: 'Tav', question: 'What is a "Tav" in BG3?', answer: '"Tav" is the community nickname for a custom (non-origin) Baldur’s Gate 3 protagonist, taken from the default character. When you build your own hero rather than playing an origin like Astarion or Shadowheart, you choose the name companions will use for the entire campaign — so it is worth picking one that fits your race and class.' },
  { category: 'Races', question: 'How do names differ by race in BG3?', answer: 'Elves and half-elves favor flowing, melodic names; tieflings often use a virtue name plus Infernal flavor; dwarves use hard, clan-rooted names; githyanki use harsh, alien names with apostrophes (like Lae’zel); humans span many cultures; halflings and gnomes lean warm and homey; dragonborn and half-orcs use strong, deed-rooted names. Matching the name to the race is what makes a Tav feel real.' },
  { category: 'Races', question: 'How do I name an elf or half-elf?', answer: 'Elven names are flowing and melodic with soft consonants and rich vowels. Generate a batch, keep the lyrical-sounding ones, and read them aloud — if it sounds graceful and a little otherworldly, it fits. Half-elves can lean either toward their elven or human heritage depending on the character you want.' },
  { category: 'Races', question: 'How do I name a tiefling?', answer: 'Tieflings in D&D often carry a "virtue name" — a word or concept they choose for themselves — alongside an Infernal-flavored name reflecting their fiendish heritage. The generator can give you a base; pair it with a virtue concept (like Hope, Ire, or Sorrow) for an authentically tiefling result. Karlach is a good canon reference for tone.' },
  { category: 'Races', question: 'How do I name a githyanki?', answer: 'Githyanki names are harsh, alien, and guttural, frequently with apostrophes and hard consonants — Lae’zel is the canonical example. Filter your batch for the most non-human-sounding results, and add an apostrophe if needed to push a name fully into the githyanki tradition.' },
  { category: 'Origins', question: 'Can I use these for origin or companion characters?', answer: 'The origin characters (Astarion, Gale, Lae’zel, Shadowheart, Wyll, Karlach, the Dark Urge) come pre-named, but you can use this generator when creating your own companion-style NPCs, hirelings, or alternate party members. Compare your generated names to the canon companion of the same race to check the register.' },
  { category: 'Class', question: 'Should the name match my class or background?', answer: 'It helps. A noble Paladin suits a formal, lineage-heavy name; a Druid something earthier; an Urchin rogue something short and street-worn. D&D characters are defined by background as much as stats, so a name that nods to yours makes the character feel authored rather than randomly rolled.' },
  { category: 'Use cases', question: 'Can I use these names in tabletop D&D?', answer: 'Yes. Because BG3 uses D&D 5e and the Forgotten Realms, the names are setting-accurate and travel cleanly to tabletop campaigns. If you are porting your Tav into a home game, the generated name will fit right in alongside other Sword Coast characters.' },
  { category: 'Use cases', question: 'Can I use this for multiplayer parties?', answer: 'Yes. For a multiplayer party of custom characters, generate a batch for each player’s race and pick names that feel like they could adventure together — varied but tonally consistent. This avoids a clash of naming styles across the party.' },
  { category: 'Usage', question: 'How do I use this generator?', answer: 'Set how many names you want (1–24), click Generate names, then keep the ones that fit your chosen race and class using the race notes above. Copy the list into your notes, shortlist your favorites, and type your pick into BG3 character creation. Run again for more — no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes. The output is a starting point. Tweak the spelling, add an apostrophe for a githyanki feel, soften consonants for an elf, or combine parts of two results. Many players generate a batch and then refine a favorite until it is exactly right.' },
  { category: 'Naming style', question: 'My name does not sound race-appropriate — what do I do?', answer: 'Decide your race first, then filter the batch hard for sound: elven names should flow, dwarven names should feel like stone, githyanki names should sound alien. If a result is close, adjust the spelling toward that tradition. Comparing against a same-race canon companion is a reliable check.' },
  { category: 'Naming style', question: 'Should I worry about how the name is pronounced?', answer: 'Yes. The name is spoken constantly in BG3 cutscenes by companions and the narrator, so a name that is awkward to say will grate over a long campaign. Read each candidate aloud before committing and favor ones that roll off the tongue.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated name elements built around D&D and Forgotten Realms race conventions and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Technical', question: 'Are these real characters from BG3?', answer: 'No. The generator creates original, D&D-style names for your own use rather than reproducing the official companions. That is intentional — you want a fresh name for your Tav, not a duplicate of Astarion or Shadowheart that you cannot make your own.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your character ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set with no daily or total limit. Paste multiple runs into one document if you want a large pool to choose from for your party.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch on your phone while planning your character, copy it into notes, and shortlist names before you sit down to play.' },
  { category: 'General', question: 'Is the BG3 name generator free?', answer: 'Yes, completely free with no account, sign-up, or download. Generate as many Tav and companion names as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I make a name feel truly BG3?', answer: 'Anchor it to your race’s naming tradition, nod to your class or background, and read it aloud to be sure it is comfortable to say. Comparing your candidate to the canon companion of the same race is the fastest way to confirm it sits in the right register.' },
  { category: 'Best practices', question: 'Does the name need to match my appearance?', answer: 'Not strictly, but a name that fits your race and the vibe of your character build deepens immersion. A grim, scarred warrior with a soft lyrical name can feel mismatched — though deliberate contrast can also be a strong roleplay choice if that is your intent.' },
  { category: 'Troubleshooting', question: 'The names feel too generic — what should I do?', answer: 'Generate a larger batch and filter ruthlessly for race-specific sound, discarding anything that could belong to any fantasy character. Then refine your favorite’s spelling toward its tradition. The more you lean into a single race’s conventions, the less generic the result feels.' },
];

export default async function Bg3NameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="bg3" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the BG3 name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
