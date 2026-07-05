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


const toolSlug = 'magical-girl-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Magical Girl Name Generator',
    description: 'Free magical girl name generator for mahou shoujo OCs — civilian given names plus Sailor-style and Cure-style transformation names themed on stars, moons, flowers, gems, and light. In your browser, no sign-up.',
    seoTitle: 'Magical Girl Name Generator – Civilian & Transformation Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Magical Girl Name Generator – Civilian &amp; Transformation Names</h2>
        <p>
          This magical girl name generator builds names the way the mahou shoujo genre does: a soft, ordinary civilian given name for the girl&apos;s everyday life, plus a sparkling transformation name she calls out when she powers up. Think Tsukino Usagi who becomes Sailor Moon, or Yagami Hikari who fights as Cure Heart. Whether you are designing an original character (OC) for fan art, writing a Pretty Cure-style fanfic, or building a roleplay account, the tool produces ready-to-use names themed on stars, moons, flowers, gems, light, hearts, and dreams. It runs entirely in your browser, stores nothing, and you can generate as many batches as you like.
        </p>
        <p>
          Magical girl names are not random. The genre has its own grammar — a deliberately cute or elegant Japanese-inspired given name paired with a hero alias built from a celestial body, a virtue, or an element. This page walks through those conventions — the Sailor-X pattern from Sailor Moon, the Cure-X pattern from Pretty Cure, theming by element and color, and how to name a whole team — so the names you keep actually feel like they belong in a transformation sequence rather than a username list.
        </p>

        <h2>Civilian Name vs Magical Name</h2>
        <p>
          The defining convention of the genre is the dual identity. Almost every magical girl carries two names, and the contrast between them is the whole point. The civilian name is who she is at school — gentle, everyday, often a little clumsy and ordinary. The magical name is who she becomes mid-transformation — radiant, declarative, and themed. When you generate a magical girl OC, you are really generating a pair.
        </p>
        <ul>
          <li><strong>The civilian given name</strong> is soft and human: Usagi (rabbit), Sakura (cherry blossom), Madoka (circle/harmony), Hikari (light), Nagisa, Honoka, Kobato. These read as real Japanese girls&apos; names — cute, warm, and grounded.</li>
          <li><strong>The magical name</strong> is the alias she shouts: Sailor Moon, Cure Black, Princess Tutu. It is built from a theme word and usually a fixed prefix, and it is meant to be spoken aloud as a battle cry.</li>
          <li><strong>The bridge between them</strong> is often a hidden clue. Usagi (&quot;rabbit&quot; — the rabbit said to live on the moon) becomes Sailor Moon; Hikari (&quot;light&quot;) becomes Cure Heart. A good OC pair hides a similar wink.</li>
        </ul>
        <p>
          When you use the generator, treat one result as the school name and another, themed result as the transformation name — or pick a civilian name first and theme the alias around its hidden meaning.
        </p>

        <h2>The Sailor-X Pattern (Sailor Moon Style)</h2>
        <p>
          Sailor Moon codified one of the most recognizable naming formulas in anime: the prefix &quot;Sailor&quot; followed by a celestial body. Sailor Moon, Sailor Mercury, Sailor Venus, Sailor Mars, Sailor Jupiter, Sailor Saturn, Sailor Pluto — each Guardian is named for a planet or moon, and that celestial assignment dictates her color, her element, and her personality.
        </p>
        <ul>
          <li><strong>Pick a celestial body, get a whole character.</strong> Mars carries fire and red; Mercury carries water, ice, and blue intelligence; Venus carries love and orange; Jupiter carries lightning and green strength.</li>
          <li><strong>The civilian name echoes the planet.</strong> Sailor Mars is Hino Rei (&quot;hi&quot; hints at fire); Sailor Mercury is Mizuno Ami (&quot;mizu&quot; means water). The surname often carries the elemental clue.</li>
          <li><strong>For an OC,</strong> claim an unused celestial body — a comet, a constellation, an asteroid, a star like Sirius or Vega — so your Sailor-style guardian does not clash with the canon Senshi.</li>
        </ul>
        <p>
          Generate a batch of celestial- and light-themed names, pick the body that matches the element you want, then build a matching civilian surname that hints at it. That two-layer link is what makes a Sailor-style OC feel canon.
        </p>

        <h2>The Cure-X Pattern (Pretty Cure Style)</h2>
        <p>
          Pretty Cure (PreCure) runs on a different but equally rigid formula: the prefix &quot;Cure&quot; followed by a virtue, an abstract noun, or a single evocative word. Cure Black, Cure White, Cure Bloom, Cure Dream, Cure Peach, Cure Heart, Cure Happy, Cure Star, Cure Sword. Where Sailor names point at the sky, Cure names point at a feeling or ideal.
        </p>
        <ul>
          <li><strong>Theme on a virtue or concept:</strong> Heart, Dream, Happy, Peace, Honey, Fortune, Lovely, Sword, March, Rosetta. The word should sound like a wish or a value she embodies.</li>
          <li><strong>The civilian name carries the theme too.</strong> Cure Heart is Aida Mana; Cure Black is Misumi Nagisa. The hero word frequently maps onto her personality — the cheerful one becomes Cure Happy, the regal one becomes Cure Sword.</li>
          <li><strong>One word, spoken proudly.</strong> Cure names work because they are short and declarative. Avoid multi-word aliases here — &quot;Cure&quot; plus a single strong noun is the genre rule.</li>
        </ul>
        <p>
          If you are building a Pretty Cure-style OC, generate virtue- and color-themed words, pick one that matches your character&apos;s heart, and attach &quot;Cure&quot; in front of it. Then choose a soft civilian given name that fits the same emotion.
        </p>

        <h2>Theming by Element, Celestial, Flower, and Gem</h2>
        <p>
          Beyond the two big franchises, magical girl names draw from a shared palette of motifs. Cardcaptor Sakura leans on flowers and the seasons; Madoka Magica leans on light, hope, and circles; Princess Tutu leans on ballet and swans. Whatever your story, picking a theme first keeps a name coherent.
        </p>
        <ul>
          <li><strong>Celestial:</strong> moon, star, comet, aurora, galaxy, twilight, dawn, eclipse, nova. The default register of the genre and the safest place to start.</li>
          <li><strong>Flowers:</strong> sakura (cherry blossom), lily, rose, lotus, camellia, wisteria, hanabi. Soft, feminine, and very common in civilian given names.</li>
          <li><strong>Gems and colors:</strong> ruby, sapphire, opal, pearl, crystal, amethyst — and the color words crimson, azure, rose, ivory that often double as a Cure suffix.</li>
          <li><strong>Light and heart:</strong> light, shine, lumiere, radiance, hope, love, dream, heart, wish. These power-words give a name its emotional charge.</li>
          <li><strong>Element and power:</strong> moonlight, starfire, frost, blossom, prism, sparkle. Pair the element to the transformation phrase she shouts.</li>
        </ul>
        <p>
          Lock in one theme — say, celestial — and keep only the generated names that fit it. A flower-themed Cure beside a celestial-themed Sailor in the same scene reads as deliberate worldbuilding rather than a grab-bag.
        </p>

        <h2>Naming a Magical Girl OC</h2>
        <p>
          A strong magical girl OC name does three jobs: it gives her a believable, gentle civilian identity, it gives her a themed transformation alias, and it ties the two together with a hidden link. Generate a batch, then ask of each pair: could she introduce herself with the civilian name in homeroom, and shout the magical name in a henshin sequence without it sounding silly? If both pass, you have a keeper.
        </p>
        <p>
          A reliable method is to start from the meaning. Decide her element — light, ice, love, hope — then pick a civilian given name whose Japanese meaning hints at it (Hikari for light, Yuki for snow, Ai for love), and build the alias on the same idea. The clumsy-but-kind heroine, the cool rival, the mysterious senior — each archetype suggests a register, from bouncy and bright to elegant and restrained. Let the sound of the name match the personality.
        </p>
        <p>
          The mascot and the wand matter too. Many magical girls receive their alias from a talking companion — Luna naming Usagi as Sailor Moon, the fairies christening each Cure — so if your worldbuilding includes a mascot, you can frame the transformation name as something it grants rather than something she chooses. The same goes for her weapon or item: a star-themed guardian wields a star rod, a heart-themed Cure carries a heart-shaped locket. Keeping the alias, the mascot&apos;s catchphrase, and the item on one motif makes the whole package feel designed rather than assembled, which is the difference between an OC that reads as canon and one that reads as a placeholder.
        </p>

        <h2>Naming a Magical Girl Team</h2>
        <p>
          Magical girls almost always fight in groups, and the genre loves a shared naming theme across the squad. The Sailor Senshi share &quot;Sailor&quot; plus the planets; the first Pretty Cure duo are Cure Black and Cure White; Madoka&apos;s cast is bound by a single contract and motif. A team name set should feel like a matched collection, not five unrelated picks.
        </p>
        <p>
          Pick a unifying frame first, then vary within it. A celestial team can be Moon, Star, Comet, Aurora, and Eclipse. A color team can be Cure Red, Cure Blue, Cure Yellow, and so on, each girl assigned a hue and a matching personality. A flower team can be Lily, Rose, Camellia, and Wisteria. Generate a larger batch, sort the results by theme, then deal one motif to each member so the group shares a visual and verbal identity — exactly how ensemble magical girl shows signal that these girls belong together.
        </p>
        <p>
          The standard ensemble has roles as well as themes, and the names should reflect both. The leader usually takes the headline motif — the moon, the heart, the brightest light — and a warm, approachable civilian name; the rival or second-in-command gets a cooler, sharper alias (Mercury, Sword, Eclipse) and a more reserved given name; the gentle support member leans on soft flower or pastel-color words; the powerhouse takes bold element words like thunder, flame, or storm. Assign the motif to the personality, not at random, and the roster will feel like a real team where you can guess each girl&apos;s character from her name alone. When a latecomer joins mid-story — the lone wolf who fights solo before joining, like Sailor Uranus and Neptune or Cure Moonlight — give her a name that stands slightly apart from the others&apos; shared frame to signal that she arrived from outside the group.
        </p>

        <h2>How to Use This Magical Girl Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of magical girl-style names.</li>
          <li>Skim for a soft civilian given name and a themed alias, then use the Copy button to save the whole list.</li>
          <li>Paste into your character sheet or fanfic notes and pair a civilian name with a transformation name.</li>
          <li>Run again for more — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your OC ideas and team rosters stay private until you choose to share them in art, fic, or roleplay.
        </p>

        <h2>Tips for Picking the Right Magical Girl Name</h2>
        <p>
          Say the transformation name out loud — it has to work as a spoken battle cry, so anything that trips the tongue will trip the moment she powers up. Keep the civilian name gentle and ordinary so the contrast with the radiant alias lands; the gap between &quot;Usagi&quot; and &quot;Sailor Moon&quot; is what makes the reveal satisfying. Borrowing a genre prefix (Sailor-, Cure-, Princess-) instantly signals which tradition your OC belongs to, but pair it with a fresh theme word so you are not duplicating a canon heroine.
        </p>
        <p>
          If you are naming a duo or a full team, generate a batch and pick names that share a frame but contrast in tone — one bright and bouncy, one cool and elegant, one mysterious — so the group sounds like distinct girls rather than one idea repeated. That blend of shared theme and contrasting personality is exactly what makes ensembles like the Sailor Senshi or a Pretty Cure team feel alive.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates magical girl-style civilian given names and Sailor- and Cure-style transformation names for OCs, fan art, fanfic, and roleplay.</li>
          <li>It does not reproduce official characters as a database — output is original, themed material for your own creative use.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not check whether a name is taken on any roleplay site, art platform, or social network — verify that yourself if you plan to use it as a handle.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Mahou shoujo is one of the most beloved and most-OC&apos;d genres in fandom — Sailor Moon, Cardcaptor Sakura, Pretty Cure, Madoka Magica, and Princess Tutu have all inspired countless original guardians. This magical girl name generator gives you that pool instantly, grounded in the genre&apos;s real logic: a soft civilian given name, a themed transformation alias built on the Sailor-X or Cure-X pattern, motifs drawn from stars, flowers, gems, light, and hearts, and a shared theme for teams. Generate a batch, lean on the conventions above, and you will end up with magical girl names that feel ready for a henshin sequence.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a magical girl name generator?', answer: 'A magical girl name generator creates names in the mahou shoujo tradition — a soft civilian given name for the heroine\'s everyday life plus a themed transformation name she calls out when she powers up, like Usagi who becomes Sailor Moon. It combines genre motifs (stars, moons, flowers, gems, light, hearts, dreams) at random in your browser so each run gives fresh OC ideas. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'What is the difference between a civilian name and a magical name?', answer: 'The civilian name is the girl\'s ordinary school name — gentle and human, like Usagi, Sakura, Madoka, or Hikari. The magical name is the alias she shouts mid-transformation — radiant and themed, like Sailor Moon, Cure Heart, or Princess Tutu. Every magical girl OC really needs both, and the contrast between the plain civilian name and the sparkling hero name is what makes the reveal land.' },
  { category: 'Naming style', question: 'What is the Sailor-X naming pattern?', answer: 'Sailor Moon codified it: the prefix "Sailor" plus a celestial body — Sailor Moon, Mercury, Venus, Mars, Jupiter, Saturn, Pluto. The chosen planet or moon sets the guardian\'s color, element, and personality, and her civilian surname often hints at it (Sailor Mars is Hino Rei, where "hi" suggests fire). For an OC, claim an unused body like a comet, constellation, or star so you do not clash with the canon Senshi.' },
  { category: 'Naming style', question: 'What is the Cure-X naming pattern?', answer: 'Pretty Cure uses the prefix "Cure" plus a virtue or single evocative word — Cure Black, White, Bloom, Dream, Peach, Heart, Happy, Star, Sword. Where Sailor names point at the sky, Cure names point at a feeling or ideal the heroine embodies. Keep it short and declarative — "Cure" plus one strong noun — and let her civilian name and personality match the chosen virtue.' },
  { category: 'OC', question: 'How do I name a magical girl OC?', answer: 'Generate a pair: a soft civilian given name she could use in homeroom, and a themed alias she shouts in a henshin sequence. Start from her element — light, ice, love, hope — pick a civilian given name whose meaning hints at it (Hikari for light, Yuki for snow, Ai for love), then build the transformation name on the same idea using the Sailor-X or Cure-X pattern. The hidden link between the two names is what sells the character.' },
  { category: 'OC', question: 'Should my magical girl have a hidden meaning in her name?', answer: 'It is a hallmark of the genre. Usagi means "rabbit," the rabbit said to live on the moon — so she becomes Sailor Moon. Mizuno Ami carries "mizu" (water) and becomes Sailor Mercury. A good OC pair hides a similar wink: choose a civilian name whose Japanese meaning quietly foreshadows her power or her transformation theme.' },
  { category: 'Themes', question: 'What themes work best for magical girl names?', answer: 'The genre draws from a shared palette: celestial (moon, star, comet, aurora, eclipse), flowers (sakura, lily, rose, lotus, camellia), gems and colors (ruby, sapphire, crystal, crimson, azure), and light/heart power-words (light, shine, hope, love, dream, heart). Lock in one theme and keep only names that fit it, so your character reads as deliberate worldbuilding rather than a grab-bag.' },
  { category: 'Themes', question: 'How do celestial themes shape a magical girl name?', answer: 'Celestial bodies are the default register of the genre, thanks to Sailor Moon. Each body carries baggage: the moon means light and dreams, Mars means fire and red, Mercury means water and ice, Venus means love, Jupiter means lightning. Pick the body whose element matches your character, and the color and personality follow almost automatically.' },
  { category: 'Themes', question: 'Can I use flowers or gems for a magical girl name?', answer: 'Absolutely. Cardcaptor Sakura is built on flowers and the seasons, and flower words like sakura, lily, rose, camellia, and wisteria make especially good soft civilian given names. Gems and colors — ruby, sapphire, opal, crimson, azure — work well as Cure-style suffixes or as the theme for a single guardian. Generate a flower- or gem-themed batch and pair it with a matching alias.' },
  { category: 'Teams', question: 'How do I name a whole team of magical girls?', answer: 'Magical girls fight in groups with a shared theme: the Sailor Senshi share "Sailor" plus the planets; the first Pretty Cure are Cure Black and Cure White. Pick a unifying frame first, then vary within it — a celestial team could be Moon, Star, Comet, Aurora, and Eclipse; a color team could be Cure Red, Blue, and Yellow. Generate a larger batch, sort by theme, and deal one motif to each member.' },
  { category: 'Teams', question: 'How many magical girls should be in a team?', answer: 'The genre ranges from duos (the original Pretty Cure pair) to five-girl teams (the inner Sailor Senshi) and larger ensembles. A common shape is a leader plus four members, each assigned a color, an element, and a contrasting personality — the bright one, the cool rival, the gentle one, the mysterious senior. Generate enough themed names to assign one clear motif and tone to every member.' },
  { category: 'Naming style', question: 'What is a transformation phrase and do I need one?', answer: 'It is the line she shouts to henshin, like "Moon Prism Power, Make Up!" or "Pretty Cure, Dual Aurora Wave!" It usually weaves her theme word into a short, rhythmic command. While the generator focuses on names, a good transformation phrase reuses your character\'s element or alias word so the call-out and the hero name reinforce each other.' },
  { category: 'OC', question: 'Can I borrow a genre prefix like Sailor or Cure for my OC?', answer: 'Yes — using "Sailor," "Cure," or "Princess" instantly signals which tradition your OC belongs to. Just pair the prefix with a fresh theme word so you are not duplicating a canon heroine. Take an unused celestial body for a Sailor-style guardian or an unused virtue for a Cure-style one, then give her an original civilian name to match.' },
  { category: 'Usage', question: 'How do I use this magical girl name generator?', answer: 'Set how many names you want (1–24), click Generate names, then skim for a soft civilian given name and a themed alias. Use the Copy button to save the whole list, paste it into your character sheet or fanfic notes, and pair a civilian name with a transformation name. Run again for more — there is no limit, account, or download.' },
  { category: 'Usage', question: 'How do I pair a civilian name with a transformation name?', answer: 'Treat one gentle, ordinary result as her school name and a separate themed result as her alias — or pick the civilian name first and theme the transformation name around its hidden meaning. Aim for a clear contrast: an everyday civilian name beside a radiant Sailor- or Cure-style hero name. That gap is the whole appeal of the dual identity.' },
  { category: 'Usage', question: 'Can I edit the generated magical girl names?', answer: 'Of course. The output is a starting point. Swap the civilian given name from one result onto the transformation theme of another, change a Cure suffix, or adjust a celestial body to fit the element you want. Many creators generate a batch, take the alias from one result and the civilian name from another, and combine them into the final dual-identity pair.' },
  { category: 'Use cases', question: 'Can I use these names for fan fiction?', answer: 'Yes — fanfic is a primary use. The names follow mahou shoujo conventions, so your OCs sit believably beside canon heroines from Sailor Moon, Pretty Cure, or Madoka Magica. Use the theming notes to match a name to your character\'s element, give her a civilian and a magical identity, and slot her into a team with a shared motif.' },
  { category: 'Use cases', question: 'Can I use these names for art and OC design?', answer: 'Yes. Magical girl OC artists need names that match the costume palette and theme. Pick a celestial, flower, or gem motif that fits your color scheme, generate matching names, and choose a civilian name plus an alias that read together. The theme word can guide her outfit accents — a star girl gets stars, a rose girl gets roses.' },
  { category: 'Use cases', question: 'Can I use these names for roleplay accounts?', answer: 'Yes. Magical girl roleplay communities on Discord, Tumblr, and forums expect names that fit the genre. Generate a civilian and a transformation name, match them to your character\'s element and theme, and you will fit the setting. If the community requires unique names, check the existing roster before claiming one, since this tool does not check availability.' },
  { category: 'Technical', question: 'How are the magical girl names generated?', answer: 'The generator combines curated genre elements — soft Japanese-inspired given names, celestial and flower and gem motifs, virtue words, and the Sailor- and Cure-style alias patterns — and shuffles them at random in your browser. Each run produces a new set of civilian and transformation name ideas. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Technical', question: 'Are these real characters from the anime?', answer: 'No. The generator creates original, genre-flavored names for your own use rather than reproducing canon heroines as a lookup database. That is intentional — you want fresh names for OCs, not duplicates of Usagi or Madoka you cannot use as your own. Borrowing a pattern like Sailor-X or Cure-X is fine; copying a complete canon name is not.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, the magical girl names are created on your device. Your settings and the generated list are never sent to our servers and nothing is stored. You can brainstorm OC names in a private window and your ideas stay yours until you choose to share them.' },
  { category: 'Limits', question: 'How many magical girl names can I generate at once?', answer: 'You can request 1–24 names per run. For more, just run it again — each run produces a fresh random set of civilian and transformation ideas, with no daily or total limit. Paste several runs into one document when you are building a whole team and want a large pool to assign motifs from.' },
  { category: 'Compatibility', question: 'Does the magical girl name generator work on mobile?', answer: 'Yes. It runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch of magical girl names on your phone, copy them into your notes, and pair civilian and transformation names wherever you are sketching OCs or writing fanfic.' },
];

export default async function MagicalGirlNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="magical-girl" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about civilian names, transformation names, and theming for the magical girl name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

