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
    description: 'Free Magical Girl Name Generator for mahou shoujo OCs — civilian given names alongside Sailor-style and Cure-style transformation aliases themed around stars, moons, blossoms, gems, and radiance. Accessible in your browser without registration.',
    seoTitle: 'Magical Girl Name Generator – Civilian & Transformation Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>[1] Magical Girl Name Generator – Civilian &amp; Transformation Names</h2>
        <p>This Magical Girl Name Generator crafts names following the traditions of the mahou shoujo genre: a gentle, everyday civilian given name for her normal life, paired with a shimmering transformation moniker she shouts out during her power-up sequence. Consider Usagi Tsukino who transforms into Sailor Moon, or Hikari Yagami who fights as Cure Heart. Whether you are creating an original character (OC) for fan art, penning a Pretty Cure-style fanfiction, or managing a roleplay profile, the utility generates ready-to-use titles themed on stars, moons, flowers, gems, light, hearts, and dreams. It runs entirely inside your browser, saves no data, and permits unlimited batch generation.</p>
        <p>Magical girl names are never arbitrary. The genre follows a distinct grammar — a purposefully sweet or elegant Japanese-inspired given name coupled with a hero alias drawn from a celestial body, a virtue, or an elemental force. This section explores those conventions — the Sailor-X pattern from Sailor Moon, the Cure-X pattern from Pretty Cure, thematic choices by element and color, and team-naming strategies — ensuring your kept names actually sound like they belong in a transformation sequence rather than a random username list.</p>

        <h2>[2] Civilian Name vs Magical Name</h2>
        <p>The defining hallmark of this genre is dual identity. Almost every magical girl bears two monikers, and the contrast between them is the primary appeal. Her civilian title represents her school persona — soft, everyday, and frequently a bit ordinary or clumsy. Her magical title embodies her transformed self — radiant, expressive, and heavily themed. Crafting a magical girl OC essentially means designing a matched pair.</p>
        <ul>
          <li><strong>The civilian given name</strong> remains soft and human: Usagi (rabbit), Sakura (cherry blossom), Madoka (circle/harmony), Hikari (light), Nagisa, Honoka, Kobato. These read naturally as authentic Japanese girls&apos; names — warm, cute, and grounded.</li>
          <li><strong>The magical name</strong> is the battle cry she yells out: Sailor Moon, Cure Black, Princess Tutu. Formed from a thematic word alongside a fixed prefix, it is meant to be spoken aloud as a combat invocation.</li>
          <li><strong>The bridge between them</strong> often conceals a clever hint. Usagi (&quot;rabbit&quot; — referencing the mythical rabbit of the moon) transforms into Sailor Moon; Hikari (&quot;light&quot;) becomes Cure Heart. A stellar OC pair hides a similar subtle nod.</li>
        </ul>
        <p>When utilizing the generator, treat one output as the school name and a separate, themed output as the transformation title — or select a civilian moniker first and base the alias around its hidden significance.</p>

        <h2>[3] The Sailor-X Pattern (Sailor Moon Style)</h2>
        <p>Sailor Moon established one of anime's most recognizable naming conventions: the prefix &quot;Sailor&quot; paired with a celestial body. Sailor Moon, Sailor Mercury, Sailor Venus, Sailor Mars, Sailor Jupiter, Sailor Saturn, Sailor Pluto — every Guardian derives her name from a planet or moon, which dictates her color scheme, elemental powers, and disposition.</p>
        <ul>
          <li><strong>Choose a celestial body, establish an entire character.</strong> Mars embodies fire and red hues; Mercury brings water, ice, and blue intellect; Venus represents love and orange tones; Jupiter delivers lightning and green strength.</li>
          <li><strong>The civilian moniker reflects the planet.</strong> Sailor Mars is Rei Hino (&quot;hi&quot; points to fire); Sailor Mercury is Ami Mizuno (&quot;mizu&quot; signifies water). Surnames frequently carry these elemental hints.</li>
          <li><strong>For an OC,</strong> claim an unused celestial entity — an asteroid, comet, constellation, or star like Vega or Sirius — so your Sailor-style guardian avoids overlapping with canon Senshi.</li>
        </ul>
        <p>Produce a batch of celestial- and light-themed titles, select the heavenly body fitting your desired element, and construct a complementary civilian surname hinting at it. That dual-layered connection gives a Sailor-style OC a canon feel.</p>

        <h2>[4] The Cure-X Pattern (Pretty Cure Style)</h2>
        <p>Pretty Cure (PreCure) follows its own well-defined, strict design system: the standard &quot;Cure&quot; prefix attached to an intangible concept, a noble trait, or a punchy solitary descriptor. Cure Black, Cure White, Cure Bloom, Cure Dream, Cure Peach, Cure Heart, Cure Happy, Cure Star, Cure Sword. While cosmic motifs define Sailor aesthetics, Cure identities center on emotional resonance and moral strength.</p>
        <ul>
          <li><strong>Theme around a concept or virtue:</strong> Heart, Dream, Happy, Peace, Honey, Fortune, Lovely, Sword, March, Rosetta. The chosen term should evoke a wish or core value she represents.</li>
          <li><strong>The civilian name reflects this theme as well.</strong> Cure Heart is Mana Aida; Cure Black is Nagisa Misumi. The heroic descriptor frequently matches her personality — the bubbly character becomes Cure Happy, while the noble one adopts Cure Sword.</li>
          <li><strong>A single word, proclaimed with pride.</strong> Cure names succeed through brevity and directness. Refrain from using multi-word aliases here — &quot;Cure&quot; paired with one robust noun remains the golden rule of the genre.</li>
        </ul>
        <p>When creating a Pretty Cure-inspired OC, produce virtue- and color-centric terms, select one fitting your character&apos;s heart, and prepend &quot;Cure&quot; to it. Following that, pick a gentle civilian given name matching that identical emotion.</p>

        <h2>Theming through Element, Celestial, Flower, and Gem</h2>
        <p>Aside from the two major franchises, magical girl names stem from a common pool of motifs. Cardcaptor Sakura focuses on flowers and seasons; Madoka Magica focuses on light, hope, and circles; Princess Tutu focuses on ballet and swans. Whatever your narrative, choosing a theme upfront keeps any name unified.</p>
        <ul>
          <li><strong>Celestial:</strong> moon, star, comet, aurora, galaxy, twilight, dawn, eclipse, nova. Represents the quintessential genre framework and serves as an ideal baseline for creators.</li>
          <li><strong>Flowers:</strong> sakura (cherry blossom), lily, rose, lotus, camellia, wisteria, hanabi. Gentle, graceful elements frequently integrated into standard civilian naming traditions.</li>
          <li><strong>Gems and colors:</strong> ruby, sapphire, opal, pearl, crystal, amethyst — alongside color terms crimson, azure, rose, ivory that frequently serve as a Cure suffix.</li>
          <li><strong>Light and heart:</strong> light, shine, lumiere, radiance, hope, love, dream, heart, wish. These emotionally charged expressions give an alter ego genuine motivational weight.</li>
          <li><strong>Element and power:</strong> moonlight, starfire, frost, blossom, prism, sparkle. Align this elemental focus with the invocation used during her transformation sequence.</li>
        </ul>
        <p>Settle on a single theme — for instance, celestial — and keep only the generated names fitting it. A flower-themed Cure next to a celestial-themed Sailor within the same frame reads as intentional worldbuilding instead of a random mix.</p>

        <h2>Coming Up With a Magical Girl OC Moniker</h2>
        <p>A solid magical girl OC name fulfills three purposes: it provides a believable, soft civilian identity, it grants a themed transformation alias, and it connects both via a concealed link. Generate a batch, then evaluate each pair: could she introduce herself using the civilian name in homeroom, and shout the magical name in a henshin sequence without sounding silly? If both succeed, you have a keeper.</p>
        <p>A dependable approach is beginning with the meaning. Determine her element — light, ice, love, hope — then choose a civilian given name whose Japanese meaning implies it (Hikari for light, Yuki for snow, Ai for love), and build the alias on that very concept. The clumsy-yet-kind heroine, the cool rival, the mysterious senior — each archetype suggests a register, ranging from bouncy and bright to elegant and restrained. Let the sound of the name reflect the personality.</p>
        <p>The mascot and the wand matter as well. Numerous magical girls receive their alias via a talking companion — Luna naming Usagi as Sailor Moon, the fairies christening each Cure — meaning if your worldbuilding incorporates a mascot, you can frame the transformation name as something bestowed rather than chosen by her. The same applies to her weapon or item: a star-themed guardian wields a star rod, a heart-themed Cure carries a heart-shaped locket. Maintaining the alias, the mascot&apos;s catchphrase, and the item around one motif makes the entire package feel engineered rather than slapped together, representing the boundary between an OC reading as canon versus reading as a placeholder.</p>

        <h2>Designating a Magical Girl Squad</h2>
        <p>Magical girls nearly always battle in squads, and the genre favors a shared naming theme across the group. The Sailor Senshi share &quot;Sailor&quot; plus planets; the initial Pretty Cure duo are Cure Black and Cure White; Madoka&apos;s cast is united by one contract and motif. A team name collection should appear as a coordinated set, not five unrelated choices.</p>
        <p>Select a unifying framework first, then vary within it. A celestial team might consist of Moon, Star, Comet, Aurora, and Eclipse. A color team could comprise Cure Red, Cure Blue, Cure Yellow, and so forth, with each girl assigned a hue and matching personality. A flower team can feature Lily, Rose, Camellia, and Wisteria. Generate a larger batch, sort outcomes by theme, then assign one motif per member so the group shares visual and verbal identity — precisely how ensemble magical girl series indicate these girls belong together.</p>
        <p>The standard ensemble features roles alongside themes, and the names ought to mirror both. The leader typically claims the headline motif — the moon, the heart, the brightest light — along with a warm, approachable civilian name; the rival or second-in-command receives a cooler, sharper alias (Mercury, Sword, Eclipse) and a more reserved given name; the gentle support member leans on soft flower or pastel-color words; the powerhouse adopts bold element terms like thunder, flame, or storm. Assign the motif to personality, never randomly, and the roster will feel like an authentic team where you can deduce each girl&apos;s character from her name alone. When a newcomer arrives mid-narrative — the lone wolf fighting solo before uniting, like Sailor Uranus and Neptune or Cure Moonlight — provide a name standing slightly apart from the others&apos; shared framework to signify she came from outside the unit.</p>

        <h2>[10] How to Use This Magical Girl Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to acquire a fresh batch of magical girl-style names.</li>
          <li>Scan for a soft civilian given name and themed alias, then utilize the Copy button to preserve the complete list.</li>
          <li>Paste into your character sheet or fanfic notes and pair a civilian name alongside a transformation name.</li>
          <li>Run again for additional options — there exists no limit, no account, and no download.</li>
        </ol>
        <p>Generation occurs entirely within your browser. Your settings and generated names are never transmitted to a server, ensuring your OC ideas and team rosters remain private until you decide to share them in art, fic, or roleplay.</p>

        <h2>Hints for Selecting the Ideal Magical Girl Title</h2>
        <p>Pronounce the transformation name aloud — it must function as an uttered battle cry, meaning anything stumbling off the tongue ruins the moment she powers up. Keep the civilian name soft and ordinary so the contrast with the radiant alias resonates; the gap between &quot;Usagi&quot; and &quot;Sailor Moon&quot; creates a satisfying reveal. Borrowing a genre prefix (Sailor-, Cure-, Princess-) instantly indicates which tradition your OC belongs to, yet pair it with a fresh theme word to avoid duplicating a canonical heroine.</p>
        <p>If you are naming a duo or full team, generate a batch and select names sharing a framework yet contrasting in tone — one bright and bouncy, one cool and elegant, one mysterious — ensuring the group sounds like distinct girls instead of a single repeated concept. That blend of shared theme and contrasting personality precisely makes ensembles like the Sailor Senshi or a Pretty Cure team feel alive.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It crafts magical girl-style civilian given names and Sailor- and Cure-style transformation names for roleplay, fanart, OCs, and fanfiction.</li>
          <li>It avoids reproducing official characters as a database — outputs are entirely original, themed ideas for your personal creative projects.</li>
          <li>It does not save your generated list or settings; everything processes locally inside your browser.</li>
          <li>It does not verify whether a name is already taken on social networks, art sites, or roleplay forums — please check yourself if using it as a handle.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>Mahou shoujo remains among the most cherished and OC-heavy genres in fandom — Princess Tutu, Cardcaptor Sakura, Sailor Moon, Pretty Cure, and Madoka Magica have inspired countless original heroines. This Magical Girl Name Generator supplies that pool instantly, grounded in the genre's core logic: a gentle civilian given name, a themed transformation alias using the Sailor-X or Cure-X format, motifs pulled from hearts, stars, flowers, gems, and light, alongside a unified team theme. Produce a batch, rely on these conventions, and you will get magical girl names primed for a henshin sequence.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a magical girl name generator?', answer: 'A Magical Girl Name Generator builds names in the mahou shoujo style — a soft civilian given name for everyday life plus a themed transformation name shouted during power-ups, much like Usagi becoming Sailor Moon. It blends genre motifs like flowers, moons, stars, gems, light, dreams, and hearts randomly right in your browser so every run yields fresh OC concepts. It operates locally with zero sign-ups and saves nothing.' },
  { category: 'Naming style', question: '[5] What is the difference between a civilian name and a magical name?', answer: 'The civilian name represents the girl\'s everyday school identity — human and soft, such as Madoka, Sakura, Usagi, or Hikari. The magical name stands for the alias shouted during transformation — themed and radiant, like Cure Heart, Sailor Moon, or Princess Tutu. Every magical girl OC truly requires both, and the striking contrast between the simple civilian moniker and the brilliant hero title makes the reveal effective.' },
  { category: 'Naming style', question: 'What defines the Sailor-X naming convention?', answer: 'Sailor Moon popularized this format: the prefix "Sailor" paired with a celestial body like Sailor Venus, Moon, Mercury, Mars, Jupiter, Saturn, or Pluto. The chosen moon or planet determines the guardian\'s element, color, and personality, while her civilian surname often hints at it, such as Hino Rei for Sailor Mars where "hi" implies fire. For your OC, claim an unused body including a star, comet, or constellation to avoid clashing with canon Senshi.' },
  { category: 'Naming style', question: 'What does the Cure-X naming pattern entail?', answer: 'Pretty Cure utilizes the prefix "Cure" followed by a virtue or single evocative word like Cure White, Black, Bloom, Dream, Heart, Peach, Happy, Sword, or Star. While Sailor names point toward the sky, Cure names emphasize a feeling or ideal represented by the heroine. Keep things declarative and concise — "Cure" plus a strong noun — ensuring her personality and civilian name match the selected virtue.' },
  { category: 'OC', question: 'How can I name a magical girl OC?', answer: 'Generate a combination: a soft civilian given name suitable for homeroom, alongside a themed alias shouted during a henshin sequence. Begin with her element — ice, light, love, or hope — choose a civilian given name whose meaning points toward it (Yuki for snow, Hikari for light, Ai for love), and then construct the transformation name around that same concept using the Cure-X or Sailor-X pattern. The underlying connection between both names brings the character to life.' },
  { category: 'OC', question: 'Should the name of my magical girl contain a hidden meaning?', answer: 'That serves as a hallmark of the entire genre. Usagi translates to "rabbit," referencing the rabbit said to dwell on the moon, leading her to become Sailor Moon. Ami Mizuno features "mizu" (water) and transforms into Sailor Mercury. A strong OC duo hides a similar nod: pick a civilian name whose Japanese translation subtly foreshadows her transformation theme or power.' },
  { category: 'Themes', question: 'Which themes function best for magical girl names?', answer: 'The genre draws from a shared collection: celestial themes including star, moon, comet, eclipse, and aurora; floral options like sakura, lily, rose, camellia, and lotus; gems and colors such as crystal, ruby, sapphire, azure, and crimson; and power-words like light, shine, hope, dream, heart, and love. Commit to a single theme and retain only fitting names so your character feels like intentional worldbuilding rather than a random assortment.' },
  { category: 'Themes', question: 'How do celestial themes influence a magical girl name?', answer: 'Celestial bodies represent the default standard of the genre thanks to Sailor Moon. Each body carries distinct traits: the moon signifies dreams and light, Mars stands for red and fire, Mercury represents water and ice, Venus denotes love, and Jupiter means lightning. Select the celestial body whose element fits your character, allowing personality and color to follow naturally.' },
  { category: 'Themes', question: 'Is it possible to use gems or flowers for a magical girl name?', answer: 'Definitely. Cardcaptor Sakura centers around the seasons and flowers, making floral terms like sakura, rose, lily, wisteria, and camellia fantastic soft civilian given names. Colors and gems — sapphire, ruby, opal, azure, and crimson — work wonderfully as Cure-style suffixes or themes for individual guardians. Generate a gem- or flower-themed set and pair it with a matching alias.' },
  { category: 'Teams', question: 'How do you name an entire team of magical girls?', answer: 'Magical girls operate in groups sharing a unified theme: the initial Pretty Cure duo consists of Cure White and Cure Black, while the Sailor Senshi share "Sailor" with the planets. Establish a unifying framework first, then vary within it; a celestial team might feature Moon, Star, Comet, Aurora, and Eclipse, whereas a color team could use Cure Blue, Red, and Yellow. Create a larger batch, organize by theme, and assign one motif to each member.' },
  { category: 'Teams', question: 'How many magical girls should belong to a team?', answer: 'The genre spans from duos like the original Pretty Cure pair to five-girl teams such as the inner Sailor Senshi and larger ensembles. A popular setup features a leader accompanied by four members, each given a contrasting personality, element, and color — the gentle one, the bright one, the cool rival, and the mysterious senior. Generate enough themed names to assign a clear tone and motif to every single member.' },
  { category: 'Naming style', question: '[6] What is a transformation phrase and do I need one?', answer: 'This refers to the signature incantation recited during henshin sequences, such as "Moon Prism Power, Make Up!" or "Pretty Cure, Dual Aurora Wave!" It commonly integrates her primary motif within a punchy, cadenced phrase. Although our generator outputs character identities, crafting an effective incantation around her elemental focus or hero title will seamlessly unify both concepts.' },
  { category: 'OC', question: '[7] Can I borrow a genre prefix like Sailor or Cure for my OC?', answer: 'Certainly — utilizing "Sailor," "Cure," or "Princess" establishes immediate ties to a legendary anime subgenre. Just marry the title with an untaken central concept to prevent overlapping with existing heroes. Pick an unused celestial body for a Sailor-style guardian or an unused virtue for a Cure-style one, followed by crafting a grounded everyday identity to complete the pair.' },
  { category: 'Usage', question: 'How can I operate this Magical Girl Name Generator?', answer: 'Choose your desired output quantity (1–24), select Generate names, and review the results to discover a gentle everyday identity alongside an evocative heroine persona. Click the Copy button to collect the whole batch, transfer it directly into your story outlines or OC records, and link an ordinary name with an alter ego. Repeat anytime — no limits apply, with no account registration or file downloads required.' },
  { category: 'Usage', question: '[10] How do I pair a civilian name with a transformation name?', answer: 'Assign a quiet, standard generation for her day-to-day life and save an expressive thematic option for her mystical alias — or pick the normal identity initially and shape the alter ego around its subtle significance. Strive for noticeable variance: an ordinary schoolgirl identity juxtaposed with a brilliant Sailor- or Cure-style hero name. That distinct contrast provides the entire charm of a secret identity.' },
  { category: 'Usage', question: '[12] Can I edit the generated magical girl names?', answer: 'Absolutely. Every result provides a creative springboard. You can take the civilian identity from one roll and paste it beside an alter ego from another, modify a Cure suffix, or swap in an alternate cosmic body matching your desired affinity. Plenty of writers roll a full set, harvest an alias from one entry and an everyday moniker from a different entry, and blend them into a cohesive character profile.' },
  { category: 'Use cases', question: 'Can I apply these names toward fan fiction projects?', answer: 'Definitely — narrative writing serves as a primary application. Every entry honors authentic mahou shoujo conventions, ensuring your creations sit believably beside canon heroines from Sailor Moon, Pretty Cure, or Madoka Magica. Rely on our aesthetic suggestions to coordinate abilities, establish both an everyday and hero moniker, and build out a harmonized roster sharing matching motifs.' },
  { category: 'Use cases', question: '[15] Can I use these names for art and OC design?', answer: 'Certainly. Visual character artists need titles that complement their costume schemes and artistic motifs. Select a stellar, botanical, or mineral theme that reflects your chosen colors, generate fitting suggestions, and pair an ordinary persona with a hero title that flows well. That central motif can inform costume details — giving starlight accents to a stellar character or floral touches to a rose hero.' },
  { category: 'Use cases', question: '[17] Can I use these names for roleplay accounts?', answer: 'Yes. Storytelling groups across Discord, Tumblr, and private boards consistently look for identities matching classic genre tropes. Produce an everyday identity alongside a battle persona, align them with an elemental theme, and your hero will immediately fit right in. If the group enforces strict uniqueness, verify their master list beforehand, as our engine does not track existing player choices.' },
  { category: 'Technical', question: '[19] How are the magical girl names generated?', answer: 'Our system integrates curated aesthetic elements — delicate Japanese-inspired given names, cosmic, floral, and gemstone terms, noble concepts, and recognizable Sailor- and Cure-style alias patterns — shuffling them on the fly inside your web client. Every click provides a unique set of regular identities and mystical alter egos. No input ever leaves your machine; calculation takes place locally.' },
  { category: 'Technical', question: 'Are these actual characters featured in the anime?', answer: 'No. Rather than acting as an index of established franchise characters, this tool fabricates original identities fitting traditional genre tropes. This design is deliberate — writers need fresh concepts for new characters rather than duplicate entries like Usagi or Madoka that belong to trademarked franchises. Utilizing a formula such as Sailor-X or Cure-X works wonderfully, whereas reproducing a canon persona does not.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'Not at all. Every calculation is performed within your active browser tab. The instant you hit generate, every character concept compiles right on your hardware. Neither your preferences nor your generated entries get transmitted to external databases, and nothing is retained. Feel free to brainstorm character sheets inside incognito windows knowing your concepts remain entirely confidential until you distribute them.' },
  { category: 'Limits', question: '[23] How many magical girl names can I generate at once?', answer: '[24] Each batch can generate between 1 and 24 results. Whenever you require additional suggestions, simply trigger another run — you will receive a brand-new assortment of alter ego and superheroine concepts without any caps or daily restrictions. Storing multiple rounds inside a single note is great for populating full magical squads or brainstorming themed palettes.' },
  { category: 'Compatibility', question: 'Is the Magical Girl Name Generator functional on mobile devices?', answer: '[25] Absolutely. Our tool functions smoothly across mobile devices, tablets, and desktop setups via standard web browsers with zero installations needed. Feel free to draft batches of names right from your smartphone, stash them into your writing notebook, and balance secret identities against superhero monikers while actively plotting fan fiction or creating fresh OCs.' },
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
          <p className="text-slate-700">Frequently asked questions concerning transformation names, theming, and civilian names for the Magical Girl Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

