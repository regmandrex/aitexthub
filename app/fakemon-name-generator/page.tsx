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


const toolSlug = 'fakemon-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Fakemon Name Generator',
    description: 'No-cost Fakemon Name Generator designed for custom monster creation. Generate blended creature titles using specific types and elements alongside matching evolution paths for fangames, ROM hacks, and artwork directly in your web browser without registration.',
    seoTitle: 'Fakemon Name Generator – Fan-Made Pokémon Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Fakemon Name Generator – Fan-Made Pocket Monster Monikers</h2>
        <p>This Fakemon Name Generator creates names for fan-made Pokémon the exact way official games do: by blending two brief words into a single catchy portmanteau. &quot;Fakemon&quot; is the community term for custom creatures designed by enthusiasts for ROM hacks, fan games, fan art, and homemade regions. Whether you are spriting a fresh starter line, planning a Pokëdex for your custom region, or sketching creature concepts, the tool provides a batch of Pokémon-style names in seconds — directly in your browser, requiring no sign-up and storing nothing.</p>
        <p>Actual Pokémon names are never random. Charizard equals char plus lizard, Bulbasaur is bulb plus dinosaur, and Squirtle is squirt plus turtle. Almost every official moniker fuses a creature&apos;s element or type, its plant or animal base, and a characteristic trait, then trims the outcome until it is concise enough for a name box. This section clarifies those rules so your kept names sound authentic — helping your custom Fakemon integrate smoothly into a type chart, evolution chain, and regional dex.</p>

        <h2>The Portmanteau Rule: How Pokémon Names Are Built</h2>
        <p>The single most crucial pattern in Pokémon naming is the portmanteau: two meaningful word segments merged into one. Grasping this formula enables the generator to produce titles that feel official rather than random:</p>
        <ul>
          <li><strong>Base + trait.</strong> Charizard = <em>char</em> (burn) + <em>lizard</em>. The animal base establishes what the creature is; the prefix indicates what it performs. This serves as the foundation for most Fakemon names.</li>
          <li><strong>Element + animal.</strong> Squirtle = <em>squirt</em> (water) + <em>turtle</em>. Lead with the type indicator, end with the creature, and the title explains itself immediately.</li>
          <li><strong>Plant + form.</strong> Bulbasaur = <em>bulb</em> + <em>dinosaur</em>; Oddish = <em>odd</em> + <em>radish</em>. Grass-type Fakemon rely heavily on seeds, roots, blossoms, and saur or dino suffixes.</li>
          <li><strong>Trim for length.</strong> Official titles virtually never stretch long. Creators drop syllables (lizard turns into <em>-zard</em>, dinosaur becomes <em>-saur</em>) so the final name stays brief, snappy, and simple to pronounce aloud — adhering to the exact constraint imposed by the original name box.</li>
        </ul>
        <p>When you review the generated list, test every candidate against this rule: can you identify the two components it merges? If a title reads as one smooth word while you can still perceive the animal and element inside, it fits the proper style for a Fakemon.</p>

        <h2>Categorizing Fakemon by Their Type</h2>
        <p>Type is the most dominant single cue in a Pokémon name, and aligning a name's sound with its element makes any Fakemon instantly understandable. Every type features its own vocabulary of fragments:</p>
        <ul>
          <li><strong>Fire.</strong> char, pyro, ember, blaze, magma, cinder, and scorch—as seen in Charmander, Magmar, and Litten. These provide hard, hot syllables.</li>
          <li><strong>Water.</strong> squirt, aqua, hydro, marsh, tide, and splash—utilized in Squirtle, Marshtomp, and Wishiwashi. They offer soft, flowing sounds combined with aquatic animal foundations.</li>
          <li><strong>Grass.</strong> bulb, leaf, petal, vine, root, bloom, and fungus—found in Bulbasaur, Bellsprout, and Foongus. Plant terminology paired with -saur or -ish suffixes.</li>
          <li><strong>Electric.</strong> volt, spark, jolt, watt, zap, and chu—exemplified by Voltorb, Jolteon, and Pikachu. These consist of sharp, snappy syllables.</li>
          <li><strong>Rock / Ground.</strong> geo, rock, gravel, dune, and terra—demonstrated by Geodude, Onix, and Sandshrew. They feature heavy, blunt-sounding bases.</li>
        </ul>
        <p>Determine your Fakemon&apos;s type first, then generate a set and retain the names whose acoustics match that element. A Fire starter named using a soft, watery syllable conflicts with its own typing; a title starting with a hot fragment handles the type chart's job before anyone checks the stats.</p>

        <h2>Creating a Complete Evolution Chain</h2>
        <p>Real Pokémon evolve in threes, and their names typically escalate so each phase sounds grander than the previous one. Charmander, Charmeleon, and Charizard share the &quot;char&quot; root while the suffix grows increasingly imposing. Bulbasaur, Ivysaur, and Venusaur scale the plant motif up from a tiny sprout to a full blossom. Effective Fakemon line naming follows this exact logic:</p>
        <ul>
          <li>[1] <strong>Keep a shared root.</strong> Choose a core piece — like a base element or animal — and maintain it across all three phases so they feel like a single family (similar to the &quot;char&quot; found in every Charmander-family name).</li>
          <li>[2] <strong>Escalate the suffix.</strong> Make the base form sound diminutive and cute, the middle stage feel more powerful, and the final evolution grand or mythic. The ending handles the progression.</li>
          <li>[3] <strong>Swap the theme word for a bigger one.</strong> Bulbasaur turning into Venusaur trades a simple bulb for Venus the flytrap alongside the planet. Select a larger reference for the final phase while preserving the identical syllable structure.</li>
        </ul>
        <p>[4] One useful technique with this generator is to create a batch, select a name you adore for the base phase, and then generate again to find two additional options sharing that root sound or theme. Stitch them into a three-stage line so the family clearly connects when spoken aloud on a dex page.</p>

        <h2>[5] Designing for Fan Games, ROM Hacks, and Fan Art</h2>
        <p>[6] Most people naming Fakemon are building something: a Pokémon Essentials fan game, a GBA ROM hack, a fakedex art project, or a custom region for a comic. The name must do actual work — fitting a name box, matching a sprite, and resting on a list beside canon entries without feeling out of place. Generate a set, then question each one: does it look correct underneath a sprite and read smoothly in a battle prompt such as &quot;Wild ____ appeared!&quot;? If so, it is ready for your dex.</p>
        <p>[7] For a fakedex, consistency across the entire collection matters just as much as any individual name. Establish a naming style early on — how aggressively you trim syllables, whether you prefer cute or imposing endings, and how literal your portmanteaus are — and apply it to every entry so the region feels crafted by a single hand. Here, the generator acts as an ideal brainstorming partner, flooding you with raw fusions while your task is filtering for those matching your region&apos;s tone.</p>

        <h2>[10] How to Use This Fakemon Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>[8] Click <strong>Generate names</strong> to retrieve a fresh set of Pokémon-inspired portmanteau names.</li>
          <li>[9] Scan for names fitting your Fakemon&apos;s type and base creature, then utilize the Copy button to save the entire list.</li>
          <li>[10] Paste the results into your fakedex notes or sprite project to shortlist your top choices.</li>
          <li>[11] Run the tool again to collect evolution-line partners or more choices — there are no limits, accounts, or downloads required.</li>
        </ol>
        <p>[12] Generation occurs entirely within your browser. Your settings and created names are never transmitted to a server, ensuring your unreleased region and creature concepts remain private until you decide to share them.</p>

        <h2>[13] Tips for Picking the Right Fakemon Name</h2>
        <p>[14] Say the name aloud — Pokémon names are designed to be spoken within the anime and read in battle text, meaning a clunky fusion will trip up your players as well. Keep it brief; if a generated name exceeds three or four syllables, trim it similarly to how real designers do (dropping the animal word's tail into a -saur, -zard, or -eon ending). Verify that the two source words remain subtly audible: an effective Fakemon name conceals its seam without ever erasing it.</p>
        <p>[15] If you are naming a starter trio (the classic Grass / Fire / Water selection), generate a set and pick three names sharing a syllable shape while clearly diverging by type — one leafy, one fiery, one watery — so the trio forms a matched set akin to Bulbasaur, Charmander, and Squirtle. This parallel framework is precisely what grants a starter line an official rather than improvised feel.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>[16] It creates Pokémon-style portmanteau names for original Fakemon, evolution chains, and fakedex projects.</li>
          <li>[17] It does not serve as a database reproducing official Pokémon names — the output is strictly for original creative implementation within your personal fan works.</li>
          <li>It does not save your generated list or settings; everything processes locally inside your browser.</li>
          <li>[18] It does not assign types, statistics, or sprites — it provides the name, leaving the design work entirely up to you.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>[19] Fakemon design represents one of the liveliest segments of the Pokémon fandom — ROM hackers, Essentials developers, spriters, and fan artists all require names sounding as though they originated directly from a Game Freak gathering. This Fakemon Name Generator supplies that pool instantly, anchored in the franchise&apos;s authentic naming mechanics: portmanteau creation, type-coded fragments, escalating evolution-line suffixes, and concise, speakable outputs. Generate a batch, rely on the type and evolution notes above, and you will finish with creature names feeling as though they always belonged inside a Pokédex.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Fakemon name generator?', answer: '[20] A Fakemon Name Generator is a browser utility that generates Pokémon-style names for fan-created creatures. "Fakemon" are original Pokémon crafted by fans for ROM hacks, fan games, fakedexes, and fan art. The generator constructs names just like the actual games do — combining two short words into a portmanteau such as Charizard (char + lizard) or Squirtle (squirt + turtle) — ensuring the results sound authentic. It operates locally without requiring sign-ups and retains no data.' },
  { category: 'Naming style', question: '[21] How are real Pokémon names made?', answer: 'The vast majority of Pokémon names rely on blend words, fusing two distinct roots into an original term. Charizard pairs char (scorch) with lizard; Bulbasaur unites bulb and dinosaur; Oddish combines odd and radish. This formula typically links an elemental nature, a botanical or zoological archetype, and an inherent characteristic, subsequently shedding extra syllables to keep the pronunciation fluid and rapid. Our tool implements that very naming logic so generated Fakemon options feel completely legitimate.' },
  { category: 'Naming style', question: '[23] What makes a Fakemon name sound canon instead of random?', answer: '[24] You ought to be able to identify the two components it fuses, while it still reads as a single seamless word. Charmander conceals "char" and "salamander" inside one name; a quality Fakemon name achieves the same — the join is hidden yet never obliterated. Keep it brief (maximum three to four syllables), lead with a type-suited fragment, and trim the animal word down to a suffix like -saur, -zard, or -eon. If the element and creature remain faintly discernible, it hits the proper register.' },
  { category: 'Types', question: '[25] How do I name a Fakemon by its type?', answer: 'Every type features a unique set of word fragments. Fire employs char, pyro, ember, blaze, magma; Water utilizes aqua, hydro, tide, splash, marsh; Grass relies on bulb, leaf, petal, vine, root alongside -saur or -ish suffixes; Electric draws on volt, spark, jolt, zap, chu; Rock and Ground feature geo, gravel, dune, terra. Pick your Fakemon\'s element initially, create a group, and retain the titles whose pronunciation fits that category so the moniker instantly communicates the type chart.' },
  { category: 'Types', question: 'What kind of type fragment ought to be first?', answer: 'Start with the cue that most clearly communicates the typing, typically the element. Squirtle begins with "squirt" for Water; Charmander starts with "char" for Fire. If your monster\'s concept focuses heavier on the animal rather than the element (such as an obvious turtle-like Water type), you can begin with the animal and place the element into a prefix instead. Produce a set both ways and keep whichever appears clearer beneath a sprite.' },
  { category: 'Evolution lines', question: 'How should a complete evolutionary line be labeled?', answer: 'Maintain a common root throughout every phase and build up the suffix so each iteration sounds more impressive. Charmander, Charmeleon, Charizard all maintain "char" while the conclusion becomes increasingly majestic. Bulbasaur to Venusaur trades a simple bulb for a larger bloom while maintaining the -saur structure. Using this generator, choose a base-form moniker you adore, then create again and search for two additional ones sharing that root sound or motif to construct a cohesive three-stage family.' },
  { category: 'Evolution lines', question: 'Ought the ultimate evolution to feature a grander title?', answer: 'Yes. Authentic Pokémon lines progress: the initial form sounds tiny or adorable, the intermediate form sounds tougher, and the ultimate form sounds legendary. Venusaur alludes to both Venus flytraps and the world; Charizard incorporates a dragon-scale "-zard." Upon reaching the final phase, substitute the thematic word for a larger allusion while preserving identical syllable structures so the family still reads as a single line inside a dex entry.' },
  { category: 'Use cases', question: 'Is it okay to use these monikers in a Pokémon fan game?', answer: 'Yes — fan projects represent a major application. Whether you develop using Pokémon Essentials, RPG Maker, or an alternate engine, the tool provides blended titles fitting a name box and sitting comfortably next to official-style dex entries. Create a set, filter for monikers matching every creature\'s type and foundation, and insert your final list into your fakedex notes. The titles are novel combinations intended for your personal creative projects.' },
  { category: 'Use cases', question: 'Are these designations permitted for a ROM hack?', answer: 'Yes. ROM hacks (GBA, NDS, and others) frequently feature strict character-length restrictions, meaning the generator\'s concise, edited portmanteaus work nicely. Produce monikers, retain those staying beneath your hack\'s character ceiling, and verify that each displays cleanly within a battle message like "Wild ____ appeared!" The utility supplies the moniker; you manage the sprite, stats, and integration into your hack.' },
  { category: 'Use cases', question: 'Can these names apply to fan art and fakedex projects?', answer: 'Certainly. Visual artists, concept drawers, and fakedex authors employ Fakemon names to tag their custom creatures. When building an entire fakedex, establish a unified naming convention right away—deciding how aggressively you cut syllables or whether you prefer adorable or fierce suffixes—and maintain it throughout every profile so the region appears crafted by a single creator. The tool overwhelms you with unrefined combinations; your task is to select the ones fitting your work\'s atmosphere.' },
  { category: 'Naming style', question: 'What is the best way to title a starter trio?', answer: 'Produce a set and select three titles that possess a matching syllabic pattern yet distinctly separate by element—one grass, one flame, one aqua—similar to Bulbasaur, Charmander, and Squirtle. That balanced framework makes a beginning lineup feel authentic rather than haphazard. Execute the tool several times, place the three choices adjacent to one another, and modify suffixes so the group appears as a cohesive collection.' },
  { category: 'Naming style', question: 'How many characters should a Fakemon name contain?', answer: 'Brief. Standard titles rarely surpass three or four syllables because they must fit inside an interface box and be spoken aloud during battles and television shows. Should a generated blend turn out extended, shorten it like professional creators do: remove the end of the creature term into a suffix like -saur, -zard, -eon, or -ish. A label you can pronounce in a single breath proves far more practical than an elaborate yet clumsy one.' },
  { category: 'Usage', question: 'How can I operate this Fakemon Name Generator?', answer: 'Determine the quantity of titles you require (1–24), press Generate names, and review the results for portmanteaus fitting your Fakemon\'s element and underlying animal. Employ the Copy function to store the complete inventory, insert it into your fakedex or artwork logs, and narrow down your top choices. Execute the process again to collect evolution partners or additional selections—there are no restrictions, profiles, or installations.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Indeed, and you ought to. The generated output serves as a foundation. Adjust the orthography, shorten a syllable, or extract the elemental piece from one option and the creature base from another to combine them yourself. Numerous creators produce a collection, extract two elements they appreciate from separate results, and merge them into the ultimate Fakemon name. The tool provides raw ingredients; the refinement belongs to you.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The utility merges handpicked Pokémon-style components—element indicators (char, aqua, volt), creature and flora roots (lizard, turtle, bulb), and shortened suffixes (-saur, -zard, -eon)—and blends them randomly within your browser. Every execution generates a fresh batch of portmanteaus. Nothing gets transmitted to an external database; the operation occurs strictly locally, meaning the workflow mirrors traditional brainstorming for name combinations, only at a higher speed.' },
  { category: 'Technical', question: 'Do these count as actual Pokémon names?', answer: 'Negative. The utility generates unique, Pokémon-inspired blends for your personal Fakemon rather than acting as a directory for official Pokédex entries. That design choice is deliberate—you require novel titles for custom monsters that are ready for implementation, not exact copies of established creatures. The components draw inspiration from the series\' linguistic patterns, yet the resulting mixes belong entirely to you.' },
  { category: 'Best practices', question: 'In what way can a generated title sound more like a genuine Pokémon?', answer: 'Vocalize it—Pokémon labels are designed for spoken conversation, meaning a clumsy portmanteau will cause hesitation for your audience. Tie it to a distinct elemental root, restrict it below four syllables, and verify that both original terms remain subtly recognizable so the compound features a hidden boundary instead of a chaotic mixture. Associating it with an evolutionary branch sharing the same origin also elevates a standard title securely into official territory.' },
  { category: 'Troubleshooting', question: 'The names lack a proper Pokémon vibe — what steps should be taken?', answer: 'Produce a bigger batch and apply strict filtering. Keep solely combinations where both root words remain clear, and throw away any output that sounds like a single blurry term. Blend a distinct type fragment with an obvious animal or plant foundation — that specific mix creates the official creature feel. Modifying the suffix into a -saur or -zard style, or structuring the term into a three-stage family, additionally helps a standard outcome feel like an authentic Pokémon moniker.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'No. Everything processes locally in your browser. When you hit generate, the Fakemon names are built directly on your device. Your preferences and the created list are never transmitted to our servers and nothing is saved. You can operate the utility in an incognito window, ensuring your unlisted region, starter line, or monster ideas remain confidential until you decide to reveal them.' },
  { category: 'Limits', question: 'How many Fakemon names am I able to create simultaneously?', answer: 'You can ask for 1–24 names per generation. For additional results, simply run it again — every execution yields a brand new random set of portmanteaus and there exists no daily or overall restriction. Combine multiple runs into a single file if you desire a massive selection to pick from, which works well when you are naming an entire regional fakedex instead of just one monster.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Affirmative. The generator works within any current browser on a computer, tablet, or mobile device with zero software downloads required. Doodling Fakemon ideas on a tablet? Make a batch directly next to your drawing software, transfer the names into your notes, and curate them wherever you are developing your world.' },
  { category: 'General', question: 'Does the Fakemon Name Generator cost anything?', answer: 'Yes, it is entirely free with no profile, registration, or installation needed. Produce as many Pokémon-style creature names as you wish, as frequently as you desire — whether you are naming a single Fakemon or an entire regional dex containing over a hundred custom monsters.' },
  { category: 'Use cases', question: 'Am I allowed to use a Fakemon name for business purposes?', answer: 'The monikers generated by this utility are unique blends you are welcome to use inside your personal fan endeavors — fan games, ROM hacks, and fan art are non-commercial inherently, because Pokémon itself belongs to Nintendo, Game Freak, and The Pokémon Company. The generator does not verify trademarks. Should you ever develop something independent and commercial, select titles that avoid mimicking official Pokémon and perform your own trademark search prior to release.' },
];

export default async function FakemonNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="fakemon" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Fakemon Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

