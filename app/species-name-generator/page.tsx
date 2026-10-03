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
  const description = 'Produce formal scientific names for beasts, botanicals, and imaginary wildlife. Complimentary binomial monikers crafted for worldbuilding, fantasy, and sci-fi lore.';
  const seoTitle = 'Species Name Generator - Scientific & Fantasy Species Names';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a species name generator?', answer: 'A Species Name Generator is a web utility generating scientific binomial designations for imaginary beasts, flora, or entities. You input descriptive keywords or text to receive Genus species formats sounding believable for science fiction, fantasy, stories, or gaming. It emulates genuine taxonomy strictly for creative projects, not actual biological species.' },
  { category: 'General', question: 'Does the Species Name Generator cost anything?', answer: 'Affirmative. This utility is completely free within your browser without needing registration. Simply type keywords, execute the program, and receive a collection of binomial names. Most such systems process on your device so details stay off remote servers. Feel free to run it repeatedly to discover extra choices.' },
  { category: 'Usage', question: 'How can someone operate the Species Name Generator?', answer: 'Launch the application, input descriptive keywords or a brief summary (such as "dragon," "ice creature," or "poisonous plant"), then hit Generate. Browse the generated binomial options and select or modify one for your flora or fauna. Run it again for additional variations or blend pieces from distinct outputs to match your fictional universe.' },
  { category: 'Technical', question: 'Could you explain binomial nomenclature?', answer: 'Binomial nomenclature represents the two-word naming convention for organisms consisting of a capitalized Genus and lowercase species, such as Canis lupus or Tyrannosaurus rex. Titles frequently leverage Greek or Latin roots highlighting traits, regions, or individuals. The application simulates this format so your imaginary names sound authentic and align with standard taxonomic practices.' },
  { category: 'Use cases', question: 'At what point might I employ a Species Name Generator?', answer: 'Apply it toward sci-fi and fantasy writing, video and tabletop gaming, worldbuilding, plus bestiaries. It assists in building cohesive, believable titles for imaginary creatures without inventing every term independently. Excellent for authors, game masters, and designers requiring numerous plant or beast designations rapidly.' },
  { category: 'Use cases', question: 'Is it permitted to use the generated output for authentic species?', answer: 'No. The created names are meant strictly for imaginative and fictional purposes. Actual species naming adheres to strict taxonomic guidelines and demands official publication plus scientific community approval. Refrain from applying the tool output to actual organisms, formal taxonomy, or research papers.' },
  { category: 'General', question: 'Do the outputs represent genuine biological species titles?', answer: 'No. They are produced by algorithms and remain unverified against actual biological taxonomy. They might accidentally coincide with real species names. Restrict their use exclusively to fiction, gaming, and worldbuilding. The utility crafts believable terms suited for your universe, rather than scientifically validated or published designations.' },
  { category: 'Formatting', question: 'Which format is utilized by the Species Name Generator?', answer: 'Standard forms use "Genus species"—a pair of words where Genus is capitalized and species stays lowercase, drawing from Latin or Greek roots (such as Draco ignis or Lupus glacialis). You may append variant epithets or subspecies designations (like an extra third term) to tailor the label for your fictional setting or compendium.' },
  { category: 'Privacy', question: 'Does my data get transmitted to an external server?', answer: 'This utility runs inside your web browser and processes keywords locally whenever feasible, ensuring your data is never transmitted to an external server. This approach preserves confidentiality whenever you generate designations for secret projects or private worldbuilding. Review the application overview for precise specifications regarding information processing.' },
  { category: 'Limits', question: 'What is the output quantity of names from the Species Name Generator?', answer: 'Most utilities provide a fixed quantity per execution; you may repeat the process to generate additional choices. Treat it as a randomized Species Name Generator by executing it repeatedly utilizing identical or distinct keywords to compile an extensive collection. Afterwards, select or merge the top selections for your bestiary or universe.' },
  { category: 'General', question: 'Are the generated results customizable?', answer: 'Certainly. Employ the utility as a foundational baseline. You are free to alter spelling, interchange genus and species, or blend components from various outcomes to match your creative universe. Personalization ensures designations remain distinct and cohesive. Numerous participants execute the utility and subsequently polish the results for better flow and uniformity.' },
  { category: 'Use cases', question: 'Does this work well for tabletop RPGs?', answer: 'Indeed. Tabletop game masters and participants utilize it for custom monsters, bestiaries, and lore development. Input thematic terms such as "dragon," "undead," or "forest" and select designations that suit your campaign. Executing the utility with varied terms accelerates the naming process and maintains a uniform aesthetic throughout your campaign.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Yes. Browser-based utilities function seamlessly on smartphones and mobile devices. Type in your keywords and transfer the names you prefer into a notepad or document. No setup is necessary; the application operates entirely within your browser. You can access it remotely for rapid naming during gaming sessions or writing blocks.' },
  { category: 'Technical', question: 'For what reason does the Species Name Generator employ Latin or Greek style?', answer: 'Actual scientific classifications frequently incorporate Latin or Greek roots for historical and global uniformity. The utility imitates this convention so fictional terms appear believable and familiar to audiences and gamers. You can lean toward Latin or Greek for a traditional atmosphere or incorporate fabricated roots for science fiction or extraterrestrial species.' },
  { category: 'Use cases', question: 'Am I allowed to use these names in a published book?', answer: 'You are welcome to utilize generated designations within creative writing and commercial novels. It is wise to modify them to ensure originality and suitability for your environment so they do not inadvertently resemble actual organisms. They do not constitute genuine taxonomy, so refrain from presenting them as authentic species within factual works. The utility supplies a jumping-off point; your revisions personalize the names.' },
  { category: 'General', question: 'What if I require names for a particular trait?', answer: 'Input that characteristic as a keyword (for instance, "fire," "winged," "nocturnal," "aquatic"). The utility will factor it into the name generation process. You can combine multiple terms for targeted outcomes—such as "fire dragon" or "alien predator." Execute again to obtain further choices if necessary.' },
  { category: 'General', question: 'Does this differ from a standard character name generator?', answer: 'Negative. A Species Name Generator generates binomial-format terms for organisms (beasts, flora, lifeforms). Character name generators formulate personal monickers for individuals or figures. Employ the species utility for fantastical creatures, alien populations, dragons, or any imaginary living thing; utilize a character or personal generator for individuals and locations.' },
  { category: 'Use cases', question: 'Is it capable of generating names for fungi and plants?', answer: 'Affirmatively. Input botanical- or mycological-associated terms (such as "mushroom," "thorny," "glowing," "carnivorous plant") and the application will generate designations following the identical binomial structure. This exact procedure applies to any biological category—beasts, flora, mushrooms, or extraterrestrial entities. Utilize the outcomes as a foundation and polish them for your universe.' },
  { category: 'Limits', question: 'Will running it multiple times produce duplicate results?', answer: 'Applications might occasionally repeat or generate comparable designations across multiple executions. Should you require numerous distinct names, execute the utility several times and blend or adjust the outcomes. Merge the genus from one outcome with the species from another, or alter a character, to guarantee distinctiveness within your bestiary or universe.' },
  { category: 'Workflow', question: 'Is it possible to copy these names into a document?', answer: 'Yes. Highlight the created species designations and transfer them into Word, Google Docs, a spreadsheet, or your lore repository. Modify as required for your assignment.' },
  { category: 'Privacy', question: 'Does this tool save any of my keywords?', answer: 'Because this application executes entirely within your web browser, our servers never receive your search terms. Session procedures can differ; review our privacy statement and documentation for specific policies. Keeping data local offers reassurance when outlining private lore or novel worlds.' },
  { category: 'Best practices', question: 'What search terms function best?', answer: 'Use precise, detailed descriptors. "Fire dragon" or "ice wolf" usually generate more fitting names compared to a single vague term. For dragon titles try "dragon," "dragon fire," or "draconic." For alien labels use "alien," "extraterrestrial," or "otherworldly." For fantasy beasts try "fantasy creature," "magical beast," or "forest dweller."' },
  { category: 'Troubleshooting', question: 'Why do certain names resemble actual species?', answer: 'The application is not verified against real taxonomy. Generated terms might coincidentally match actual species. If you find a similarity, alter the spelling or switch genus and species prior to publishing. Do not employ output for real organisms or display it as official taxonomy.' },
  { category: 'Responsible use', question: 'When is it inappropriate to utilize the Species Name Generator?', answer: 'Do not utilize it for living organisms or within formal taxonomy. Real species naming demands publication and approval by the scientific community as well. Also prevent using results that might get confused with genuine, protected, or trademarked species names. The utility is meant for fiction, games, and worldbuilding solely.' },
];

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Species Name Generator - Scientific &amp; Fantasy Species Names</h2>
        <p>Every beast and plant inside a well-crafted world deserves a title that sounds like it belongs to an actual taxonomy. &quot;Draco ignis&quot; or &quot;Lupus glacialis&quot; reads instantly as a species the way &quot;Tyrannosaurus rex&quot; and &quot;Canis lupus&quot; do — two Latin- or Greek-inspired words that subtly describe the organism. This Species Name Generator generates those binomial-style names for fictional creatures, plants, fungi, and alien life. You type in a keyword or brief description (&quot;fire dragon,&quot; &quot;glowing mushroom,&quot; &quot;ice wolf&quot;), and it creates designations in that scientific register — plus a fantasy mode for looser, evocative creature names. It operates directly in your browser, requires no registration, and serves creative purposes exclusively, not real taxonomy.</p>
        <p>Good species naming is not random word-mixing — it follows the rules of actual biology. The overview below outlines how binomial nomenclature truly operates, the Latin and Greek roots containing meaning, how the scientific and fantasy modes differ, and how to name an entire believable bestiary rather than a bunch of isolated creatures.</p>

        <h2>How Binomial Nomenclature Functions</h2>
        <p>Every actual species relies on binomial nomenclature, a dual-part naming framework consisting of a capitalized <strong>Genus</strong> alongside a lowercase <strong>species</strong> epithet, exemplified by <em>Homo sapiens</em>, <em>Panthera leo</em>, or <em>Tyrannosaurus rex</em>. Related organisms are categorized by the genus, whereas the species epithet separates an individual from related ones, frequently referencing a characteristic, environment, location, or individual. Traditionally, the complete name appears in italics. Imitating this framework gives an imaginary name authentic scientific credibility — featuring a genus resembling a grouping (Draco, the dragons) paired with an epithet specifying the unique subject (ignis, of fire).</p>
        <p>The genus functions as a noun; the species epithet is usually an adjective that must grammatically match it, or a noun in the genitive (&quot;of&quot; something). You do not need to make the Latin grammar flawless for fiction, yet maintaining the two-word, Genus-then-epithet layout is what sells the illusion.</p>

        <h2>Latin and Greek Roots That Hold Meaning</h2>
        <p>Real scientific names rely upon Latin and Greek roots because they remain historically standard and internationally recognizable. Learning a few allows you to decode and customize any produced name:</p>
        <ul>
          <li><strong>Creatures:</strong> draco (dragon), lupus (wolf), serpens (snake), ursus (bear), aquila (eagle), felis (cat).</li>
          <li><strong>Elements &amp; traits:</strong> ignis (representing fire), glacies / glacialis (referring to ice), aqua (meaning water), umbra (standing for shadow), lux (for light), venenum (designating venom).</li>
          <li><strong>Descriptors:</strong> magnus (denoting large), minimus (very tiny), ferox (signifying fierce), horridus (bristly/dreadful), niger (the color black), aureus (gleaming golden).</li>
          <li><strong>Habitat:</strong> sylvaticus (dwelling in the forest), marinus (belonging to the sea), montanus (found across mountains), nocturnus (active throughout the night).</li>
        </ul>
        <p>Combine a creature-genus with a trait-epithet — <em>Lupus glacialis</em> (ice wolf), <em>Draco venenum</em> (venom dragon), <em>Serpens nocturnus</em> (night serpent) — and the moniker both sounds authentic and informs a reader what the organism represents.</p>

        <h2>Scientific Mode versus Fantasy Mode</h2>
        <p>The generator features two registers so you can match the mood of your universe:</p>
        <ul>
          <li><strong>Scientific mode</strong> generates strict binomial titles — Genus species, Latin/Greek roots, capitalization and lowercase maintained — perfect for hard sci-fi, naturalistic fantasy, and bestiaries mimicking a field guide.</li>
          <li><strong>Fantasy mode</strong> creates looser, more expressive creature and race titles that prioritize sound and style over taxonomic structure — better for high-fantasy species, monster names, and alien races requiring a mythic rather than catalogued feel.</li>
        </ul>
        <p>Choose scientific when you desire the appearance of biology and fantasy when you want atmosphere. Many worlds employ both: a formal binomial for the bestiary entry, and a common fantasy label that characters actually speak aloud.</p>

        <h2>How Search Terms Direct the Output</h2>
        <p>The search term you type determines the linguistic roots and phonetics the utility taps into. Precise, detailed input yields relevant names, whereas ambiguous terms result in generic ones. Several patterns include:</p>
        <ul>
          <li><strong>Fantasy creatures</strong> — dragon, draconic, magical beast, forest dweller — for epic fantasy and tabletop bestiaries.</li>
          <li><strong>Sci-fi / alien</strong> — alien, extraterrestrial, otherworldly — for alien fauna and non-human races.</li>
          <li><strong>Habitat or trait</strong> — marine, nocturnal, predatory, ice, fire — for realistic-feeling fictional fauna.</li>
          <li><strong>Plants &amp; fungi</strong> — mushroom, thorny, glowing, carnivorous plant — for fantasy flora.</li>
        </ul>
        <p>Combining terms sharpens the result: &quot;fire dragon&quot; or &quot;aquatic predator&quot; yields more targeted names than a single vague word like &quot;creature.&quot;</p>

        <h2>Naming Fantasy Species and Races</h2>
        <p>Not every fictional organism needs a Latin binomial. For a playable race, a monster, or a sentient species, a fantasy-style moniker usually works better — something pronounceable and evocative that a character could actually yell during a battle. The trick is internal consistency: give a species&apos; name a sound family (soft and flowing for graceful fey creatures, hard and guttural for brutish monsters) so the label signals what the creature is. You can still retain a real-taxonomy feel by assigning the race a formal binomial in your lore notes while using the common moniker in the tale.</p>

        <h2>Building a Coherent Bestiary</h2>
        <p>A believable bestiary reads like it was compiled by a single naturalist, not put together at random. Select a naming style and stick to it — all Latin-inspired, all Greek-inspired, or a deliberate blend — so entries feel connected. Group related creatures under a shared genus (three dragon species all in genus Draco, differentiated by epithet) to imply an evolutionary family. Maintain a master list so you never duplicate a moniker or drift in tone, and note which keyword generated which batch so you can expand your world later without breaking consistency.</p>

        <h2>How to Use This Species Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Provide an initial term or summary phrase (such as &quot;fire dragon,&quot; &quot;glowing fungus,&quot; &quot;alien predator&quot;).</li>
          <li>Select scientific mode for strict binomial titles or fantasy mode for looser creature monikers.</li>
          <li>Click <strong>Generate</strong> to receive a batch of Genus species (or fantasy) names.</li>
          <li>Use the Copy button to save your shortlist, then refine — swap a genus from one result with an epithet from another, or append a third word for a subspecies.</li>
          <li>Run again with the same or new keywords — there is no restriction, no login, and no download.</li>
        </ol>
        <p>Generation occurs completely in your browser. Your keywords and the names you generate are never transmitted to a server, ensuring your unpublished worldbuilding remains private until you decide to share it.</p>

        <h2>Common Mistakes to Avoid</h2>
        <p>A few errors undermine an otherwise believable moniker. The first is vague keywords — &quot;creature&quot; yields generic output, so use precise descriptors. The second is inconsistent style, mixing strict Latin binomials with loose invented titles in the same bestiary without purpose. The third is accidental overlap with a real species — the tool is not cross-referenced with real taxonomy, so if a title seems familiar, search it and adjust a letter or swap the two words before publishing. The fourth is treating the output as actual science: these are plausible-sounding fictional titles only, never valid taxonomy for real organisms. Keep the monikers that are pronounceable, consistent in style, and distinct.</p>

        <h2>Privacy</h2>
        <p>This Species Name Generator operates entirely within your browser. When you input a keyword and generate, the titles are produced locally on your device — nothing is uploaded, tracked, or saved on our servers. The output is meant for fiction, games, and worldbuilding, not for actual taxonomy or formal science. Close the tab and the list disappears unless you copied it.</p>
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
          <p className="text-slate-700">Answers regarding binomial names, usage, keywords, bestiaries, and best practices for fantasy and sci-fi naming.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

