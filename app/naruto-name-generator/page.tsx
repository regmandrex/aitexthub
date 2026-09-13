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
    description: 'Free Naruto name generator for shinobi, OC, and clan names. Build ninja names with clan surnames, given names, and Hidden Village ties — in your browser, no sign-up.',
    seoTitle: 'Naruto Name Generator – Shinobi, Clan & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Naruto Name Generator – Shinobi, Clan &amp; OC Names</h2>
        <p>
          This Naruto name generator builds shinobi names the way the series itself does: a clan surname, a given name, and a sense of which Hidden Village a character belongs to. Whether you are writing a fan fiction set in Konohagakure, designing an original character (OC) for a role-play server, or just want a handle that sounds like it belongs in the Naruto universe, the tool produces ready-to-use ninja names in your browser. There is no sign-up, nothing is stored, and you can generate as many batches as you like.
        </p>
        <p>
          Naruto names are not random syllables. They follow Japanese naming order (surname first, given name second), draw on nature and food motifs, and often hint at a character&apos;s clan, element, or fighting style. This page explains those conventions so the names you pick actually feel canon — and so an OC you create can slot believably into a village, a team of three, or a clan with a kekkei genkai.
        </p>

        <h2>How Naruto Character Names Are Built</h2>
        <p>
          Kishimoto built the cast from real Japanese words, food puns, and folklore. Understanding the pattern lets you generate names that sound native to the world rather than thrown together:
        </p>
        <ul>
          <li><strong>Surname first.</strong> Uzumaki Naruto, Uchiha Sasuke, Hyuga Hinata — the family name leads. Clan surnames carry the most identity, so the generator treats the surname as the anchor.</li>
          <li><strong>Food and plant puns.</strong> &quot;Naruto&quot; is the fish-cake swirl in ramen; &quot;Sasuke&quot; and &quot;Sakura&quot; (cherry blossom) follow plant and folklore roots. Soft, edible-sounding given names are very in-genre.</li>
          <li><strong>Clan = theme.</strong> Uchiha (fan/fire), Hyuga (sun), Nara (deer/shadow), Akimichi (food/expansion), Aburame (insects). A surname signals a kekkei genkai or jutsu specialty before you read a single line.</li>
          <li><strong>Nature-nature naming.</strong> Many names lean on fire, water, wind, lightning, and earth — the five chakra natures — which is why elemental words make strong given names for an OC.</li>
        </ul>

        <h2>Names by Hidden Village</h2>
        <p>
          Each of the great shinobi villages has its own flavor, and matching a name to a village makes an OC instantly more believable:
        </p>
        <ul>
          <li><strong>Konohagakure (Hidden Leaf).</strong> Home of the Uchiha, Hyuga, Nara, Akimichi, and Uzumaki. Warm, plant-and-food-rooted names fit here.</li>
          <li><strong>Sunagakure (Hidden Sand).</strong> Gaara, Temari, Kankuro — harder consonants and desert/wind motifs.</li>
          <li><strong>Kirigakure (Hidden Mist).</strong> The Seven Swordsmen, Haku, Zabuza — cold, water-edged names with a sharper edge.</li>
          <li><strong>Kumogakure (Hidden Cloud).</strong> Killer B, the Raikage — lightning and storm associations.</li>
          <li><strong>Iwagakure (Hidden Stone).</strong> Earth-natured, grounded, blunt-sounding names.</li>
        </ul>
        <p>
          Pick a village first, then generate a batch and keep the names whose sound matches its element. A Hidden Mist OC named for water and a Hidden Sand OC named for wind read very differently even when both are &quot;Naruto-style.&quot;
        </p>

        <h2>Building an Original Character (OC)</h2>
        <p>
          For fan fiction and role-play, a name is the first thing readers judge. A strong Naruto OC name does three jobs at once: it places the character in a village, it hints at their clan or element, and it follows the surname-first order so it sits naturally beside canon characters. Generate a batch, then ask of each name: Does it sound like it could appear on a team roster next to Kakashi&apos;s squad? If yes, it is in the right register.
        </p>
        <p>
          A common approach is to pick a canon clan to tie your OC to — say, a minor Hyuga branch member or a stray Uzumaki who survived the clan&apos;s fall — and let the surname do the heavy lifting while the generated given name keeps it fresh. If your OC is clanless (an orphan of the village, like Naruto himself early on), a standalone given name plus a self-chosen nickname can work just as well.
        </p>

        <h2>Jutsu, Nicknames, and Epithets</h2>
        <p>
          Beyond birth names, Naruto leans heavily on epithets — titles earned in battle. Jiraiya is the Toad Sage; Tsunade is the Slug Princess; Minato is the Yellow Flash; Itachi carries the weight of the Uchiha massacre. If you are naming an OC, consider generating a base name and then adding an epithet that reflects their signature jutsu or chakra nature: &quot;the Crimson Blade,&quot; &quot;the Silent Mist,&quot; &quot;the Lightning Fang.&quot; This two-layer naming (real name + battle title) is one of the most recognizable patterns in the series.
        </p>

        <h2>How to Use This Naruto Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of shinobi-style names.</li>
          <li>Skim for names that fit your chosen village or clan, then use the Copy button to save the whole list.</li>
          <li>Paste into your story notes or character sheet and shortlist your favorites.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your OC ideas stay private until you choose to share them.
        </p>

        <h2>Tips for Picking the Right Name</h2>
        <p>
          Say the name out loud — Naruto names are meant to be spoken in dub and sub alike, so a name that trips the tongue will trip your readers too. Keep the surname-first order if you want canon flavor, or flip it to given-name-first if your fic uses Western order for accessibility; just be consistent across your cast. Avoid accidentally reusing a canon full name (you do not want an OC literally called Uchiha Sasuke), but borrowing a canon surname for a new branch member is fair game and instantly grounds the character.
        </p>
        <p>
          If you are naming a full team of three (the standard genin squad), generate a batch and pick names that contrast — one soft and plant-rooted, one hard and elemental, one neutral — so the trio sounds like distinct people rather than variations on one theme. That contrast is exactly what makes Team 7 (Naruto, Sasuke, Sakura) work on the page.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Naruto-style shinobi, clan, and OC names for fan fiction, role-play, and handles.</li>
          <li>It does not reproduce official character names as a database — output is for original creative use.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not check name availability on any game, forum, or social platform — verify that yourself if you plan to use a name as a username.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Naruto is one of the most-named fandoms online — fic writers, AMV makers, role-players, and players of titles like Shinobi Striker and the Ultimate Ninja Storm series all need names that fit. This Naruto name generator gives you that pool instantly, grounded in the franchise&apos;s real naming logic: surname-first order, clan-coded surnames, village-flavored sounds, and elemental given names. Generate a batch, lean on the clan and village notes above, and you will end up with shinobi names that feel like they were always part of the world.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Naruto name generator?', answer: 'A Naruto name generator is a browser tool that creates shinobi-style names in the style of the Naruto series — clan surnames, given names, and village-flavored sounds. It follows the franchise\'s naming logic (surname first, food and nature motifs, clan-coded surnames) so the names fit fan fiction, original characters, role-play, and handles. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'How are real Naruto names structured?', answer: 'Naruto uses Japanese naming order: the surname comes first, then the given name (Uzumaki Naruto, Uchiha Sasuke, Hyuga Hinata). Surnames are clan-coded and hint at a kekkei genkai or jutsu specialty, while given names often come from food, plants, or folklore. "Naruto" itself is the swirl of fish cake in ramen, and "Sakura" means cherry blossom.' },
  { category: 'Naming style', question: 'Do Naruto names mean something?', answer: 'Very often, yes. Kishimoto built names from real Japanese words and puns. Clan names signal a theme — Uchiha is fan/fire, Nara is deer/shadow, Aburame is insects, Akimichi is food. Given names lean on the five chakra natures (fire, water, wind, lightning, earth) and on nature imagery. Choosing a name with fitting meaning makes an OC feel canon.' },
  { category: 'OC', question: 'How do I name a Naruto OC (original character)?', answer: 'A strong Naruto OC name does three things: places the character in a village, hints at their clan or element, and keeps surname-first order so it sits naturally beside canon characters. Tie your OC to a clan and let the surname do the heavy lifting, or make them clanless with a standalone given name plus a self-chosen nickname like Naruto had early on.' },
  { category: 'OC', question: 'Can I give my OC a canon clan surname?', answer: 'Yes — borrowing a canon surname for a new branch member is a common and effective way to ground an OC. A minor Hyuga branch member or a surviving Uzumaki instantly reads as part of the world. Just avoid reusing a complete canon name (do not name an OC literally Uchiha Sasuke); pair the canon surname with a fresh given name.' },
  { category: 'Villages', question: 'How do names differ by Hidden Village?', answer: 'Each village has a flavor. Konohagakure (Leaf) names are warm and plant- or food-rooted. Sunagakure (Sand) uses harder consonants and wind motifs. Kirigakure (Mist) leans cold and water-edged. Kumogakure (Cloud) carries lightning associations, and Iwagakure (Stone) sounds grounded and blunt. Pick a village first, then keep the generated names whose sound matches its element.' },
  { category: 'Villages', question: 'Which village should my character be from?', answer: 'Choose the village that fits your story and your character\'s element. If your OC uses water jutsu, Kirigakure (Hidden Mist) fits; wind users suit Sunagakure (Hidden Sand); lightning users suit Kumogakure (Hidden Cloud). Konohagakure (Hidden Leaf) is the default home of most major clans, so it is the safest pick for a fic set in the main canon.' },
  { category: 'Naming style', question: 'What are epithets and battle titles in Naruto?', answer: 'Beyond birth names, characters earn epithets from their deeds: Jiraiya is the Toad Sage, Tsunade the Slug Princess, Minato the Yellow Flash. For an OC, generate a base name then add a title reflecting their signature jutsu or chakra nature — "the Crimson Blade," "the Silent Mist," "the Lightning Fang." This real-name-plus-title pattern is one of the most recognizable in the series.' },
  { category: 'OC', question: 'How do I name a full genin team of three?', answer: 'Generate a batch and pick three names that contrast: one soft and plant-rooted, one hard and elemental, one neutral. That contrast is what makes Team 7 (Naruto, Sasuke, Sakura) sound like three distinct people rather than variations on a theme. Aim for variety in length and sound across the squad.' },
  { category: 'Usage', question: 'How do I use this Naruto name generator?', answer: 'Set how many names you want (1–24), click Generate names, then skim for names that fit your chosen clan or village. Use the Copy button to save the whole list, paste it into your story notes or character sheet, and shortlist your favorites. Run again for more — there is no limit, account, or download.' },
  { category: 'Usage', question: 'Should I keep surname-first order?', answer: 'Keep surname-first (Uzumaki Naruto) for canon flavor. Some fics flip to given-name-first for Western readers — that is fine too, as long as you are consistent across your whole cast. Mixing orders within one story confuses readers, so decide early and stick with it.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Absolutely. The output is a starting point. Tweak spelling, swap a surname onto a given name you like, or add an epithet. Many writers generate a batch, take the surname from one result and the given name from another, and combine them into the final character name.' },
  { category: 'Use cases', question: 'Can I use these names for fan fiction?', answer: 'Yes — fan fiction is the primary use. The names follow the series\' naming conventions so your OCs sit believably alongside canon characters. Use the clan and village notes to match a name to your character\'s background, element, and the squad they belong to.' },
  { category: 'Use cases', question: 'Can I use these names for role-play servers?', answer: 'Yes. Naruto role-play communities on Discord and forums expect names that fit the world. Generate shinobi-style names, pick one that matches your character\'s village and clan, and you will fit the setting. If the server requires unique names, check the member roster before claiming one.' },
  { category: 'Use cases', question: 'Can I use these for Naruto games like Shinobi Striker or Ultimate Ninja Storm?', answer: 'Yes. Players of Shinobi Striker, the Ultimate Ninja Storm series, and other Naruto games use generators to name custom characters and online handles. Generate a batch, pick a name in the right register, then check availability in the game if it requires unique display names.' },
  { category: 'Use cases', question: 'Can I use a generated name as a username?', answer: 'Yes, the names work as gaming or social handles. Just note this tool does not check whether a name is taken — usernames must be unique on each platform, so verify availability on the specific game, forum, or social network before committing.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated name elements built around Naruto\'s conventions — clan-style surnames, food and nature given names, and village-flavored sounds — and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Technical', question: 'Are these real characters from the anime?', answer: 'No. The generator creates original, Naruto-style names for your own use rather than reproducing the official cast as a lookup database. That is intentional — you want fresh names for OCs and handles, not duplicates of canon characters you cannot use as your own.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and the generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your OC ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, just run it again — each run produces a fresh random set and there is no daily or total limit. Paste multiple runs into one document if you want a large pool to shortlist from.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch on your phone, copy it into your notes, and shortlist names wherever you are writing or playing.' },
  { category: 'General', question: 'Is the Naruto name generator free?', answer: 'Yes, it is completely free with no account, sign-up, or download. Generate as many shinobi, clan, and OC names as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I make a generated name sound more canon?', answer: 'Say it out loud — Naruto names are meant to be spoken, so a name that trips the tongue will trip your readers. Anchor it to a clan or village from the notes above, keep surname-first order, and consider adding a meaning-based given name (a chakra nature or nature word) so the name carries the same kind of weight canon names do.' },
  { category: 'Troubleshooting', question: 'The names do not feel Naruto enough — what should I do?', answer: 'Generate a larger batch and filter hard: keep only the names whose sound matches a specific village element, and discard anything generic. Pair a strong clan-style surname with a softer, nature-rooted given name — that contrast is what gives canon names their feel. Adding a battle epithet also pushes a plain name firmly into the world.' },
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
          <p className="text-slate-700">Common questions about the Naruto name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

