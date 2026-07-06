import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { SpeciesNameGeneratorTool } from '@/components/tools/SpeciesNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'species-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Species Name Generator';
  const description = 'Generate scientific-style species names for creatures, plants, and fictional organisms. Free binomial names for fantasy, sci-fi, and worldbuilding.';
  const seoTitle = 'Species Name Generator - Scientific & Fantasy Species Names';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a species name generator?', answer: 'A species name generator is an online tool that creates scientific-style (binomial) names for fictional creatures, plants, or organisms. You enter keywords or a description and get names in the form "Genus species" that sound plausible for fantasy, sci-fi, games, or stories. It mimics real taxonomy style for creative use only, not for real species.' },
  { category: 'General', question: 'Is the species name generator free?', answer: 'Yes. This tool is free to use in your browser with no sign-up required. You enter keywords, run the tool, and get a list of binomial-style names. Many such tools process locally so your input is not sent to a server. You can run it multiple times for more options.' },
  { category: 'Usage', question: 'How do I use the species name generator?', answer: 'Open the tool, enter keywords or a short description (e.g., "dragon," "ice creature," "poisonous plant"), and click Generate. Review the list of binomial-style names and pick or adapt one for your creature or plant. Run again for more options or combine elements from different results to fit your worldbuilding.' },
  { category: 'Technical', question: 'What is binomial nomenclature?', answer: 'Binomial nomenclature is the two-part naming system for species: Genus (capitalized) and species (lowercase), e.g., Canis lupus or Tyrannosaurus rex. Names often use Latin or Greek roots to describe traits, places, or people. The tool mimics this style so your fictional names sound credible and consistent with real taxonomy conventions.' },
  { category: 'Use cases', question: 'When would I use a species name generator?', answer: 'Use it for fantasy and sci-fi writing, tabletop and video games, worldbuilding, and bestiaries. It helps you create consistent, credible-sounding names for fictional species without inventing every name from scratch. Ideal for GMs, authors, and game designers who need many creature or plant names quickly.' },
  { category: 'Use cases', question: 'Can I use the output for real species?', answer: 'No. Generated names are for creative and fictional use only. Real species naming follows formal taxonomic rules and requires publication and acceptance by the scientific community. Do not use the tool output for real organisms or in formal taxonomy or scientific papers.' },
  { category: 'General', question: 'Are the results real species names?', answer: 'No. They are algorithm-generated and not verified against real taxonomy. They may by chance resemble real species names. Use them for fiction, games, and worldbuilding only. The tool produces plausible-sounding names for your setting, not scientifically valid or published names.' },
  { category: 'Formatting', question: 'What format does the species name generator use?', answer: 'Typically "Genus species"—two words, Genus capitalized, species lowercase, often Latin- or Greek-style (e.g., Draco ignis, Lupus glacialis). You can add subspecies or variant epithets for fiction (e.g., a third word) to extend the name for your world or bestiary.' },
  { category: 'Privacy', question: 'Is my input sent to a server?', answer: 'This tool is designed to run in the browser and process keywords locally when possible, so your input is not sent to a server. That helps with privacy when you are generating names for unpublished projects or sensitive worldbuilding. Check the tool description for exact details on data handling.' },
  { category: 'Limits', question: 'How many names can the species name generator produce?', answer: 'Most tools return a set number per run; you can run the tool again for more options. Use it as a random species name generator by running multiple times with the same or different keywords to build a long list. Then pick or combine the best fits for your bestiary or world.' },
  { category: 'General', question: 'Can I customize the output?', answer: 'Yes. Use the tool as a starting point. You can change spelling, swap genus and species, or combine elements from different results to fit your worldbuilding. Customizing keeps names unique and on-theme. Many users run the tool and then refine the output for pronunciation and consistency.' },
  { category: 'Use cases', question: 'Is it good for tabletop RPGs?', answer: 'Yes. Tabletop GMs and players use it for homebrew creatures, bestiaries, and worldbuilding. Enter theme keywords like "dragon," "undead," or "forest" and pick names that fit your campaign. Running the tool with different keywords speeds up naming and keeps a consistent style across your game.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. Browser-based tools work on phones and tablets. Enter keywords and copy the names you like into notes or a doc. No install is required; the tool runs in the browser. You can use it on the go for quick naming during game sessions or while writing.' },
  { category: 'Technical', question: 'Why does the species name generator use Latin or Greek style?', answer: 'Real scientific names often use Latin or Greek roots for historical and international consistency. The tool mimics this so fictional names feel plausible and recognizable to readers and players. You can lean into Latin or Greek for a classic feel or mix in invented roots for sci-fi or alien species.' },
  { category: 'Use cases', question: 'Can I use the names in a published book?', answer: 'You can use generated names in fiction and published books. Consider tweaking them to be unique and to fit your setting so they do not accidentally match real species. They are not real taxonomy, so avoid presenting them as real species in non-fiction. The tool gives you a starting point; your edits make the names yours.' },
  { category: 'General', question: 'What if I need names for a specific trait?', answer: 'Enter that trait as a keyword (e.g., "fire," "winged," "nocturnal," "aquatic"). The tool will use it to influence the names. You can combine multiple keywords for more specific results—for example, "fire dragon" or "alien predator." Run again for more options if needed.' },
  { category: 'General', question: 'Is it the same as a character name generator?', answer: 'No. A species name generator creates binomial-style names for species (creatures, plants, organisms). Character name generators create personal names for people or characters. Use the species tool for fantasy species, alien races, dragons, or any fictional organism; use a character or name generator for people and places.' },
  { category: 'Use cases', question: 'Can it create names for plants and fungi?', answer: 'Yes. Enter plant- or fungus-related keywords (e.g., "mushroom," "thorny," "glowing," "carnivorous plant") and the tool will produce names in the same binomial style. The same workflow works for any organism type—creatures, plants, fungi, or alien life. Use the results as a starting point and refine for your setting.' },
  { category: 'Limits', question: 'Are there duplicates when running multiple times?', answer: 'Tools may occasionally repeat or produce similar names across runs. If you need many unique names, run the tool multiple times and mix or tweak results. Combine genus from one result with species from another, or change a letter, to ensure uniqueness in your bestiary or world.' },
  { category: 'Workflow', question: 'Can I copy the names to a document?', answer: 'Yes. Copy the generated species names and paste them into Word, Google Docs, a spreadsheet, or your worldbuilding document. Edit as needed for your project.' },
  { category: 'Privacy', question: 'Does the tool store my keywords?', answer: 'When the tool runs locally in your browser, your keywords are not stored on our servers. Session handling may vary; check the tool description and privacy policy for details. Many users prefer local processing for worldbuilding and unpublished projects.' },
  { category: 'Best practices', question: 'What keywords work best?', answer: 'Use clear, descriptive terms. "Fire dragon" or "ice wolf" tend to produce more on-theme names than a single vague word. For dragon-style names try "dragon," "dragon fire," or "draconic." For alien names use "alien," "extraterrestrial," or "otherworldly." For fantasy creatures try "fantasy creature," "magical beast," or "forest dweller."' },
  { category: 'Troubleshooting', question: 'Why do some names look like real species?', answer: 'The tool is not checked against real taxonomy. Generated names may by chance resemble real species. If you spot a match, change the spelling or swap genus and species before publishing. Do not use output for real organisms or present it as real taxonomy.' },
  { category: 'Responsible use', question: 'When should I not use the species name generator?', answer: 'Do not use it for real organisms or in formal taxonomy. Real species naming requires publication and acceptance by the scientific community. Also avoid using output that could be confused with real, protected, or trademarked species names. The tool is for fiction, games, and worldbuilding only.' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Species Name Generator - Scientific &amp; Fantasy Species Names</h2>
        <p>
          Every creature and plant in a well-built world deserves a name that sounds like it belongs to a real taxonomy. &quot;Draco ignis&quot; or &quot;Lupus glacialis&quot; reads instantly as a species the way &quot;Tyrannosaurus rex&quot; and &quot;Canis lupus&quot; do — two Latin- or Greek-flavored words that quietly describe the organism. This species name generator builds those binomial-style names for fictional creatures, plants, fungi, and alien life. You enter a keyword or short description (&quot;fire dragon,&quot; &quot;glowing mushroom,&quot; &quot;ice wolf&quot;), and it produces names in that scientific register — plus a fantasy mode for looser, evocative creature names. It runs in your browser, needs no sign-up, and is for creative use only, not real taxonomy.
        </p>
        <p>
          Good species naming is not random word-mashing — it follows the logic of real biology. The guide below explains how binomial nomenclature actually works, the Latin and Greek roots that carry meaning, how the scientific and fantasy modes differ, and how to name a whole believable bestiary rather than a pile of one-off creatures.
        </p>

        <h2>How Binomial Nomenclature Works</h2>
        <p>
          Binomial nomenclature is the two-part naming system every real species uses: a <strong>Genus</strong> (capitalized) followed by a <strong>species</strong> epithet (lowercase), as in <em>Homo sapiens</em>, <em>Panthera leo</em>, or <em>Tyrannosaurus rex</em>. The genus groups related organisms; the species epithet distinguishes one from its cousins, usually by naming a trait, a habitat, a place, or a person. The whole name is conventionally italicized. Copying this structure is what makes a fictional name feel scientifically real — a genus that sounds like a family (Draco, the dragons) plus an epithet that pins down the individual (ignis, of fire).
        </p>
        <p>
          The genus is a noun; the species epithet is typically an adjective that must grammatically agree with it, or a noun in the genitive (&quot;of&quot; something). You do not need to get the Latin grammar perfect for fiction, but keeping the two-word, Genus-then-epithet shape is what sells the illusion.
        </p>

        <h2>Latin and Greek Roots That Carry Meaning</h2>
        <p>
          Real scientific names lean on Latin and Greek roots because they are historically standard and internationally recognizable. Learning a handful lets you decode and customize any generated name:
        </p>
        <ul>
          <li><strong>Creatures:</strong> draco (dragon), lupus (wolf), serpens (snake), ursus (bear), aquila (eagle), felis (cat).</li>
          <li><strong>Elements &amp; traits:</strong> ignis (fire), glacies / glacialis (ice), aqua (water), umbra (shadow), lux (light), venenum (venom).</li>
          <li><strong>Descriptors:</strong> magnus (large), minimus (tiny), ferox (fierce), horridus (bristly/dreadful), niger (black), aureus (golden).</li>
          <li><strong>Habitat:</strong> sylvaticus (of the forest), marinus (of the sea), montanus (of mountains), nocturnus (of the night).</li>
        </ul>
        <p>
          Combine a creature-genus with a trait-epithet — <em>Lupus glacialis</em> (ice wolf), <em>Draco venenum</em> (venom dragon), <em>Serpens nocturnus</em> (night serpent) — and the name both sounds authentic and tells a reader what the organism is.
        </p>

        <h2>Scientific Mode vs. Fantasy Mode</h2>
        <p>
          The generator supports two registers so you can match the tone of your world:
        </p>
        <ul>
          <li><strong>Scientific mode</strong> produces strict binomial names — Genus species, Latin/Greek roots, capitalization and lowercase intact — ideal for hard sci-fi, naturalistic fantasy, and bestiaries that mimic a field guide.</li>
          <li><strong>Fantasy mode</strong> produces looser, more evocative creature and race names that prioritize sound and flavor over taxonomic form — better for high-fantasy species, monster names, and alien races that need to feel mythic rather than catalogued.</li>
        </ul>
        <p>
          Pick scientific when you want the veneer of biology and fantasy when you want atmosphere. Many worlds use both: a formal binomial for the bestiary entry, and a common fantasy name that characters actually say aloud.
        </p>

        <h2>How Keywords Steer the Output</h2>
        <p>
          The keyword you enter maps onto the roots and sounds the tool reaches for. Descriptive, specific input produces on-theme names, while vague input drifts generic. A few patterns:
        </p>
        <ul>
          <li><strong>Fantasy creatures</strong> — dragon, draconic, magical beast, forest dweller — for epic fantasy and tabletop bestiaries.</li>
          <li><strong>Sci-fi / alien</strong> — alien, extraterrestrial, otherworldly — for alien fauna and non-human races.</li>
          <li><strong>Habitat or trait</strong> — marine, nocturnal, predatory, ice, fire — for realistic-feeling fictional fauna.</li>
          <li><strong>Plants &amp; fungi</strong> — mushroom, thorny, glowing, carnivorous plant — for fantasy flora.</li>
        </ul>
        <p>
          Combining terms sharpens the result: &quot;fire dragon&quot; or &quot;aquatic predator&quot; yields more targeted names than a single vague word like &quot;creature.&quot;
        </p>

        <h2>Naming Fantasy Species and Races</h2>
        <p>
          Not every fictional organism wants a Latin binomial. For a playable race, a monster, or a sentient species, a fantasy-mode name usually serves better — something pronounceable and evocative that a character could actually shout in the middle of a fight. The trick is internal consistency: give a species&apos; name a sound family (soft and flowing for graceful fey creatures, hard and guttural for brutish monsters) so the name signals what the creature is. You can still borrow a real-taxonomy feel by giving the race a formal binomial in your worldbuilding notes while using the common name in the story.
        </p>

        <h2>Building a Coherent Bestiary</h2>
        <p>
          A believable bestiary reads like it was catalogued by one naturalist, not assembled at random. Pick a naming style and hold to it — all Latin-flavored, all Greek-flavored, or a deliberate blend — so entries feel related. Group related creatures under a shared genus (three dragon species all in genus Draco, distinguished by epithet) to imply an evolutionary family. Keep a master list so you never reuse a name or drift in style, and note which keyword produced which batch so you can extend the world later without breaking consistency.
        </p>

        <h2>How to Use This Species Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Enter a keyword or short description (e.g. &quot;fire dragon,&quot; &quot;glowing fungus,&quot; &quot;alien predator&quot;).</li>
          <li>Choose scientific mode for strict binomial names or fantasy mode for looser creature names.</li>
          <li>Click <strong>Generate</strong> to get a batch of Genus species (or fantasy) names.</li>
          <li>Use the Copy button to save your shortlist, then refine — swap a genus from one result with an epithet from another, or add a third word for a subspecies.</li>
          <li>Run again with the same or new keywords — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your keywords and the names you create are never sent to a server, so your unpublished worldbuilding stays private until you choose to share it.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps undercut an otherwise credible name. The first is vague keywords — &quot;creature&quot; produces generic output, so use specific descriptors. The second is inconsistent style, mixing strict Latin binomials with loose invented names in the same bestiary without intent. The third is accidental overlap with a real species — the tool is not checked against real taxonomy, so if a name looks familiar, search it and tweak a letter or swap the two words before publishing. The fourth is treating the output as real science: these are plausible-sounding fictional names only, never valid taxonomy for real organisms. Keep the names that are pronounceable, consistent in style, and distinct.
        </p>

        <h2>Privacy</h2>
        <p>
          This species name generator runs entirely in your browser. When you enter a keyword and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. The output is for fiction, games, and worldbuilding, not for real taxonomy or formal science. Close the tab and the list is gone unless you copied it.
        </p>
      </div>
    </section>
  );
}

export default async function SpeciesNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<SpeciesNameGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Species Name Generator FAQ</h2>
          <p className="text-slate-700">
            Answers about binomial names, usage, keywords, bestiaries, and best practices for fantasy and sci-fi naming.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

