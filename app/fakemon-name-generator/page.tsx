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
    description: 'Free Fakemon name generator for fan-made Pokémon. Build portmanteau creature names by type and element, plus matching evolution lines — for fan games, ROM hacks, and fan art. In your browser, no sign-up.',
    seoTitle: 'Fakemon Name Generator – Fan-Made Pokémon Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Fakemon Name Generator – Fan-Made Pokémon Names</h2>
        <p>
          This Fakemon name generator builds names for fan-made Pokémon the same way the real games do: by fusing two short words into a single punchy portmanteau. &quot;Fakemon&quot; is the community term for original creatures designed by fans for ROM hacks, fan games, fan art, and homemade regions. If you are spriting a new starter line, drafting a Pokédex for your own region, or just sketching creature concepts, the tool gives you a pool of Pokémon-style names in seconds — in your browser, with no sign-up and nothing stored.
        </p>
        <p>
          Real Pokémon names are never random. Charizard is char + lizard, Bulbasaur is bulb + dinosaur, Squirtle is squirt + turtle. Almost every official name welds together a creature&apos;s element or type, its animal or plant base, and a defining trait, then trims the result until it is short enough to fit in a name box. This page explains those conventions so the names you keep actually sound canon — and so a Fakemon you design slots believably into a type chart, an evolution line, and a regional dex.
        </p>

        <h2>How Pokémon Names Are Built (The Portmanteau Rule)</h2>
        <p>
          The single most important pattern in Pokémon naming is the portmanteau: two meaningful word fragments crushed into one. Understanding the formula lets the generator produce names that read as official rather than thrown together:
        </p>
        <ul>
          <li><strong>Base + trait.</strong> Charizard = <em>char</em> (burn) + <em>lizard</em>. The animal base tells you what it is; the prefix tells you what it does. This is the backbone of most Fakemon names.</li>
          <li><strong>Element + animal.</strong> Squirtle = <em>squirt</em> (water) + <em>turtle</em>. Lead with the type cue, finish with the creature, and the name explains itself at a glance.</li>
          <li><strong>Plant + form.</strong> Bulbasaur = <em>bulb</em> + <em>dinosaur</em>; Oddish = <em>odd</em> + <em>radish</em>. Grass-type Fakemon lean heavily on seeds, roots, flowers, and saur/dino endings.</li>
          <li><strong>Trim for length.</strong> Official names almost never run long. Designers drop syllables (lizard becomes <em>-zard</em>, dinosaur becomes <em>-saur</em>) so the final name stays short, punchy, and easy to say aloud — the same constraint the original name box imposed.</li>
        </ul>
        <p>
          When you skim the generated list, test each candidate against this rule: can you point to the two pieces it fuses? If a name reads as one clean word but you can still hear the element and the animal inside it, it is in the right register for a Fakemon.
        </p>

        <h2>Naming Fakemon by Type</h2>
        <p>
          Type is the strongest single signal in a Pokémon name, and matching the sound of a name to its element makes a Fakemon instantly readable. Each type has its own vocabulary of fragments:
        </p>
        <ul>
          <li><strong>Fire.</strong> char, pyro, ember, blaze, magma, cinder, scorch — Charmander, Magmar, Litten. Hard, hot syllables.</li>
          <li><strong>Water.</strong> squirt, aqua, hydro, marsh, tide, splash — Squirtle, Marshtomp, Wishiwashi. Soft, flowing sounds and sea-animal bases.</li>
          <li><strong>Grass.</strong> bulb, leaf, petal, vine, root, bloom, fungus — Bulbasaur, Bellsprout, Foongus. Plant words plus -saur or -ish endings.</li>
          <li><strong>Electric.</strong> volt, spark, jolt, watt, zap, chu — Voltorb, Jolteon, Pikachu. Sharp, snappy syllables.</li>
          <li><strong>Rock / Ground.</strong> geo, rock, gravel, dune, terra — Geodude, Onix, Sandshrew. Heavy, blunt-sounding bases.</li>
        </ul>
        <p>
          Decide your Fakemon&apos;s type first, then generate a batch and keep the names whose sound matches that element. A Fire starter named with a soft, watery syllable fights its own typing; a name that leads with a hot fragment does the work of the type chart before anyone reads the stats.
        </p>

        <h2>Naming a Full Evolution Line</h2>
        <p>
          Real Pokémon evolve in threes, and the names usually escalate so each stage sounds grander than the last. Charmander, Charmeleon, Charizard keep the shared &quot;char&quot; root while the suffix grows more imposing. Bulbasaur, Ivysaur, Venusaur escalate the plant theme from a sprouting bulb to a full bloom. Strong Fakemon line naming follows the same logic:
        </p>
        <ul>
          <li><strong>Keep a shared root.</strong> Pick a fragment — the element or animal base — and carry it through all three stages so they read as one family (the &quot;char&quot; in every Charmander-line name).</li>
          <li><strong>Escalate the suffix.</strong> Let the base form sound small and cute, the middle form sound stronger, and the final form sound mythic or grand. The ending does the growing-up.</li>
          <li><strong>Swap the theme word for a bigger one.</strong> Bulbasaur to Venusaur trades a humble bulb for Venus the flytrap and the planet. Pick a grander reference for the final stage while keeping the same syllable shape.</li>
        </ul>
        <p>
          A practical trick with this generator: produce a batch, pick one name you love for the base form, then generate again and look for two more that share its root sound or its theme. Stitch them into a three-stage line so the family is obviously related when read aloud on a dex page.
        </p>

        <h2>Designing for Fan Games, ROM Hacks, and Fan Art</h2>
        <p>
          Most people naming Fakemon are building something: a Pokémon Essentials fan game, a GBA ROM hack, a fakedex art project, or a homemade region for a comic. The name has to do real work — it has to fit a name box, pair with a sprite, and sit on a list next to canon-style entries without feeling out of place. Generate a batch, then ask of each name: does it look right under a sprite and read cleanly in a battle message like &quot;Wild ____ appeared!&quot;? If it does, it is ready for your dex.
        </p>
        <p>
          For a fakedex, consistency across the whole set matters as much as any single name. Lock in a naming style early — how aggressively you trim syllables, whether you favor cute or imposing endings, how literal your portmanteaus are — and apply it across every entry so the region feels designed by one hand. The generator is most useful here as a brainstorming partner: it floods you with raw fusions, and your job is to filter for the ones that match your region&apos;s tone.
        </p>

        <h2>How to Use This Fakemon Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of Pokémon-style portmanteau names.</li>
          <li>Skim for names that match your Fakemon&apos;s type and base creature, then use the Copy button to save the whole list.</li>
          <li>Paste into your fakedex notes or sprite project and shortlist your favorites.</li>
          <li>Run again to gather evolution-line partners or more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your unreleased region and creature concepts stay private until you choose to share them.
        </p>

        <h2>Tips for Picking the Right Fakemon Name</h2>
        <p>
          Say the name out loud — Pokémon names are built to be spoken in the anime and read in battle text, so a fusion that trips the tongue will trip your players too. Keep it short; if a generated name runs past three or four syllables, trim it the way real designers do (drop the tail of the animal word into a -saur, -zard, or -eon ending). Make sure the two source words are still faintly audible: a good Fakemon name hides its seam but never erases it.
        </p>
        <p>
          If you are naming a starter trio (the standard Grass / Fire / Water choice), generate a batch and pick three names that share a syllable shape but clearly diverge on type — one leafy, one fiery, one watery — so the trio reads as a matched set the way Bulbasaur, Charmander, and Squirtle do. That parallel structure is exactly what makes a starter line feel official rather than improvised.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Pokémon-style portmanteau names for original Fakemon, evolution lines, and fakedex projects.</li>
          <li>It does not reproduce official Pokémon names as a database — output is for original creative use in your own fan work.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not assign types, stats, or sprites — it gives you the name; the design work is yours.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Fakemon design is one of the most active corners of the Pokémon fandom — ROM hackers, Essentials developers, spriters, and fan artists all need names that sound like they came straight out of a Game Freak meeting. This Fakemon name generator gives you that pool instantly, grounded in the franchise&apos;s real naming logic: portmanteau construction, type-coded fragments, escalating evolution-line suffixes, and short, speakable results. Generate a batch, lean on the type and evolution notes above, and you will end up with creature names that feel like they always belonged in a Pokédex.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Fakemon name generator?', answer: 'A Fakemon name generator is a browser tool that creates Pokémon-style names for fan-made creatures. "Fakemon" are original Pokémon designed by fans for ROM hacks, fan games, fakedexes, and fan art. The generator builds names the way the real games do — fusing two short words into a portmanteau like Charizard (char + lizard) or Squirtle (squirt + turtle) — so the results sound canon. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'How are real Pokémon names made?', answer: 'Almost every Pokémon name is a portmanteau: two meaningful word fragments fused into one. Charizard is char (burn) plus lizard; Bulbasaur is bulb plus dinosaur; Oddish is odd plus radish. The pattern usually combines an element or type cue, an animal or plant base, and a trait, then trims syllables so the name stays short and speakable. The generator follows this same construction to produce Fakemon names that read as official.' },
  { category: 'Naming style', question: 'What makes a Fakemon name sound canon instead of random?', answer: 'You should be able to point to the two pieces it fuses, while it still reads as one clean word. Charmander hides "char" and "salamander" inside a single name; a good Fakemon name does the same — the seam is hidden but never erased. Keep it short (three to four syllables max), lead with a type-appropriate fragment, and trim the animal word into an ending like -saur, -zard, or -eon. If the element and the creature are both faintly audible, it is in the right register.' },
  { category: 'Types', question: 'How do I name a Fakemon by its type?', answer: 'Each type has its own vocabulary of fragments. Fire uses char, pyro, ember, blaze, magma; Water uses aqua, hydro, tide, splash, marsh; Grass uses bulb, leaf, petal, vine, root plus -saur or -ish endings; Electric uses volt, spark, jolt, zap, chu; Rock and Ground use geo, gravel, dune, terra. Decide your Fakemon\'s type first, generate a batch, and keep the names whose sound matches that element so the name does the work of the type chart at a glance.' },
  { category: 'Types', question: 'Which type fragment should I lead with?', answer: 'Lead with the cue that best signals the typing, usually the element. Squirtle leads with "squirt" for Water; Charmander leads with "char" for Fire. If your creature\'s identity is more about the animal than the element (like a clearly turtle-shaped Water type), you can lead with the animal and tuck the element into a prefix instead. Generate a batch both ways and keep whichever reads cleaner under a sprite.' },
  { category: 'Evolution lines', question: 'How do I name a full evolution line?', answer: 'Keep a shared root across all stages and escalate the suffix so each form sounds grander. Charmander, Charmeleon, Charizard all keep "char" while the ending grows more imposing. Bulbasaur to Venusaur swaps a humble bulb for a grander flower while holding the -saur shape. With this generator, pick a base-form name you love, then generate again and look for two more that share its root sound or theme to build a matched three-stage family.' },
  { category: 'Evolution lines', question: 'Should the final evolution have a grander name?', answer: 'Yes. Real Pokémon lines escalate: the base form sounds small or cute, the middle form sounds stronger, and the final form sounds mythic. Venusaur references both Venus flytraps and the planet; Charizard adds a dragon-scale "-zard." When you reach the final stage, swap the theme word for a bigger reference while keeping the same syllable shape so the family still reads as one line on a dex page.' },
  { category: 'Use cases', question: 'Can I use these names in a Pokémon fan game?', answer: 'Yes — fan games are a primary use. Whether you build in Pokémon Essentials, RPG Maker, or another engine, the generator gives you portmanteau names that fit a name box and sit naturally beside canon-style dex entries. Generate a batch, filter for names that match each creature\'s type and base, and paste your shortlist into your fakedex notes. The names are original combinations meant for your own creative work.' },
  { category: 'Use cases', question: 'Can I use these names for a ROM hack?', answer: 'Yes. ROM hacks (GBA, NDS, and others) often have tight name-length limits, so the generator\'s short, trimmed portmanteaus fit well. Generate names, keep the ones that stay under your hack\'s character limit, and check that each reads cleanly in a battle message like "Wild ____ appeared!" The tool gives you the name; you handle the sprite, stats, and insertion into your hack.' },
  { category: 'Use cases', question: 'Can I use these names for fan art and fakedex projects?', answer: 'Absolutely. Spriters, illustrators, and fakedex creators use Fakemon names to label their original designs. For a full fakedex, lock in a consistent naming style early — how hard you trim syllables, whether you favor cute or imposing endings — and apply it across every entry so the region feels designed by one hand. The generator floods you with raw fusions; your job is to filter for the ones that match your project\'s tone.' },
  { category: 'Naming style', question: 'How do I name a starter trio?', answer: 'Generate a batch and pick three names that share a syllable shape but clearly diverge on type — one leafy, one fiery, one watery — the way Bulbasaur, Charmander, and Squirtle do. That parallel structure is what makes a starter line feel official rather than improvised. Run the generator a few times, set the three candidates side by side, and adjust endings so the trio reads as a matched set.' },
  { category: 'Naming style', question: 'How long should a Fakemon name be?', answer: 'Short. Official names almost never exceed three or four syllables because they have to fit a name box and be said aloud in the anime and in battle text. If a generated fusion runs long, trim it the way real designers do: drop the tail of the animal word into an ending like -saur, -zard, -eon, or -ish. A name you can say in one breath is far more usable than a clever but unwieldy one.' },
  { category: 'Usage', question: 'How do I use this Fakemon name generator?', answer: 'Set how many names you want (1–24), click Generate names, then skim for fusions that match your Fakemon\'s type and base creature. Use the Copy button to save the whole list, paste it into your fakedex or sprite notes, and shortlist your favorites. Run again to gather evolution-line partners or more options — there is no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes, and you should. The output is a starting point. Tweak the spelling, trim a syllable, or take the element fragment from one result and the animal base from another and fuse them yourself. Many designers generate a batch, pull two pieces they like from different names, and combine them into the final Fakemon name. The generator gives you raw material; the polish is yours.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated Pokémon-style fragments — element cues (char, aqua, volt), animal and plant bases (lizard, turtle, bulb), and trimmed endings (-saur, -zard, -eon) — and fuses them at random in your browser. Each run produces a new set of portmanteaus. Nothing is sent to a server; generation is entirely local, so the process mirrors how a designer brainstorms name fusions, just faster.' },
  { category: 'Technical', question: 'Are these real Pokémon names?', answer: 'No. The generator creates original, Pokémon-style fusions for your own Fakemon rather than reproducing the official Pokédex as a lookup database. That is intentional — you want fresh names for original creatures you can actually use, not duplicates of canon Pokémon. The fragments are inspired by the franchise\'s naming logic, but the combinations are yours to claim.' },
  { category: 'Best practices', question: 'How do I make a generated name sound more like a real Pokémon?', answer: 'Say it out loud — Pokémon names are built to be spoken, so a fusion that trips the tongue will trip your players. Anchor it to a clear type fragment, keep it under four syllables, and make sure both source words are still faintly audible so the portmanteau has a hidden seam rather than a random blend. Pairing it with an evolution line that shares its root also pushes a plain name firmly into canon territory.' },
  { category: 'Troubleshooting', question: 'The names do not feel Pokémon enough — what should I do?', answer: 'Generate a larger batch and filter hard. Keep only fusions where you can identify both source words, and discard anything that reads as one shapeless word. Pair a clear type fragment with a recognizable animal or plant base — that combination is what gives canon names their feel. Trimming the ending into a -saur or -zard shape, or building the name into a three-stage line, also makes a plain result land as a real Pokémon name.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, the Fakemon names are created on your device. Your settings and the generated list are never sent to our servers and nothing is stored. You can use the tool in a private window, so your unreleased region, starter line, or creature concepts stay yours until you choose to share them.' },
  { category: 'Limits', question: 'How many Fakemon names can I generate at once?', answer: 'You can request 1–24 names per run. For more, just run it again — each run produces a fresh random set of portmanteaus and there is no daily or total limit. Paste several runs into one document if you want a large pool to shortlist from, which is handy when you are naming an entire regional fakedex rather than a single creature.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Sketching Fakemon concepts on a tablet? Generate a batch right beside your art app, copy the names into your notes, and shortlist them wherever you are designing your region.' },
  { category: 'General', question: 'Is the Fakemon name generator free?', answer: 'Yes, it is completely free with no account, sign-up, or download. Generate as many Pokémon-style creature names as you like, as often as you like — whether you are naming one Fakemon or a full regional dex of a hundred-plus original creatures.' },
  { category: 'Use cases', question: 'Can I use a Fakemon name commercially?', answer: 'The names this tool produces are original combinations you are free to use in your own fan projects — fan games, ROM hacks, and fan art are non-commercial by nature, since Pokémon itself is owned by Nintendo, Game Freak, and The Pokémon Company. The generator does not check trademarks. If you ever build something original and commercial, choose names that do not echo official Pokémon and run your own trademark check before publishing.' },
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
          <p className="text-slate-700">Common questions about the Fakemon name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

