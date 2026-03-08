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

export const revalidate = 86400;

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
        <h2>Species Name Generator - Scientific and Fantasy Species Names</h2>

        <h2>Introduction</h2>
        <p>
          This guide explains how scientific-style species names work, how to use a species name generator, and how to get the best results for fantasy, sci-fi, and worldbuilding. The species name generator on this site creates binomial-style names for creatures, plants, and fictional organisms. You enter keywords or a short description (e.g., &quot;fire dragon,&quot; &quot;blue mushroom&quot;) and get a list of plausible-sounding names. It runs in your browser with no sign-up required and is designed for quick naming for games, stories, and bestiaries. It does not store your keywords when running locally and is for creative use only—not for real taxonomy.
        </p>

        <h2>What Is Binomial Nomenclature?</h2>
        <p>
          Binomial nomenclature is the system of giving each species a two-part name: Genus (capitalized) and species (lowercase). Examples include Homo sapiens, Canis lupus, and Tyrannosaurus rex. Names often come from Latin or Greek and describe a trait, place, or person. Real taxonomy is governed by formal rules and publication; a species name generator mimics the style so your fictional species sound credible and consistent without replacing real scientific naming.
        </p>
        <p>
          The format is portable and recognizable. Readers and players instantly understand that &quot;Draco ignis&quot; or &quot;Lupus glacialis&quot; are species-style names. You can use the output as-is or tweak spelling and order to fit your world. Mixing roots deliberately (e.g., Latin genus with a Greek-style species) can give your world a consistent feel. The tool does not guarantee that a name has never been used in real taxonomy; it creates plausible-sounding names for creative use only.
        </p>
        <p>
          Learning a few common roots helps you customize results. Examples: draco (dragon), lupus (wolf), aqua (water), ignis (fire), magnus (large), ferox (fierce). The generator draws on similar roots so your names feel grounded in real naming conventions.
        </p>

        <h2>Why This Tool Matters</h2>
        <p>
          Inventing dozens of plausible binomial-style names by hand is time-consuming and can lead to inconsistent style. A species name generator gives you a starting list quickly. You then edit for your setting: swap genus and species, change a letter, or combine elements from different results. That hybrid approach keeps names unique and on-theme while saving time. It is especially useful when you want names that sound like real taxonomy without using real species.
        </p>
        <p>
          Tabletop RPGs, video games, and bestiary apps often need many creature and plant names. Entering a theme (e.g., &quot;undead,&quot; &quot;forest,&quot; &quot;mechanical&quot;) and getting a list speeds up worldbuilding. GMs can run the tool with different keywords and pick names that fit the tone of the campaign. Writers can use it for minor species or as a starting point for major ones. The tool supports both quick naming and deeper customization.
        </p>
        <p>
          The tool also standardizes format. You get consistent Genus species styling, so your bestiary or world document looks coherent. That consistency helps readers and players suspend disbelief and makes your world feel more polished.
        </p>

        <h2>How the Generator Works (Step by Step)</h2>
        <p>
          You open the tool and enter keywords or a short description. Examples: &quot;ice wolf,&quot; &quot;poisonous plant,&quot; &quot;flying reptile,&quot; &quot;alien predator.&quot; The generator uses those terms to influence the output, drawing on Latin- and Greek-style roots and patterns. You click Generate and receive a list of binomial-style names. Each name has two parts: Genus (capitalized) and species (lowercase). You pick one, combine elements from several, or run again for more options.
        </p>
        <p>
          The process runs in your browser when the tool is designed for local processing. Your keywords are not sent to a server in that case. There are no accounts or sign-up steps. You can run the tool multiple times with the same or different keywords to build a long list, then copy the names into a document or spreadsheet for your bestiary or world.
        </p>
        <p>
          Because the output is algorithm-based, results can vary between runs. If you need a name that fits a specific trait, include that trait in your keywords. You can also refine names manually: change spelling, swap genus and species, or add a third epithet for subspecies in your fiction.
        </p>

        <h2>How Keywords Map to Output Style</h2>
        <p>
          The keywords you enter steer the style of the names. &quot;Dragon&quot; or &quot;draconic&quot; tends to produce names with dragon-related roots. &quot;Alien&quot; or &quot;extraterrestrial&quot; pushes the output toward sci-fi, otherworldly sounds. &quot;Forest,&quot; &quot;marine,&quot; or &quot;nocturnal&quot; can yield names that feel habitat- or behavior-based. You can combine keywords for more specific results—e.g., &quot;fire dragon&quot; or &quot;ice creature.&quot;
        </p>
        <table>
          <thead>
            <tr>
              <th>Keyword type</th>
              <th>Example keywords</th>
              <th>Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fantasy creatures</td>
              <td>dragon, elf, magical beast, forest dweller</td>
              <td>Epic fantasy, tabletop RPGs</td>
            </tr>
            <tr>
              <td>Sci-fi / alien</td>
              <td>alien, extraterrestrial, otherworldly</td>
              <td>Sci-fi races, alien fauna</td>
            </tr>
            <tr>
              <td>Habitat or trait</td>
              <td>marine, nocturnal, predatory, ice, fire</td>
              <td>Realistic-style fictional fauna</td>
            </tr>
            <tr>
              <td>Plants / fungi</td>
              <td>mushroom, thorny, glowing, carnivorous plant</td>
              <td>Fantasy flora, bestiary plants</td>
            </tr>
          </tbody>
        </table>
        <p>
          There are no strict rules. Experiment with different terms and run the tool several times to see what fits your world. Keep a naming document and stick to one style (e.g., all Latin-like) so your bestiary feels coherent.
        </p>

        <h2>When to Use a Species Name Generator</h2>
        <p>
          Use it for fantasy and sci-fi writing, tabletop and video games, worldbuilding, bestiaries, and creature design. It is ideal when you need many plausible-sounding names quickly—for one-off encounters, NPC fauna, or a full supplement. Whether you need names for dragons, alien races, or forest creatures, the same tool works with different keywords. Generated names are not real scientific names and should not be used for real species or in formal taxonomy.
        </p>
        <p>
          For minor or background species, a single run may be enough. For major species—central to your story or game—use the tool for inspiration and then refine until the name is memorable and fits your world&apos;s tone. Teachers and students sometimes use it to learn about binomial nomenclature and naming conventions; use the output for creative exercises only, not as real taxonomy in formal assignments.
        </p>

        <h2>Tips for Good Species Names</h2>
        <ul>
          <li>Keep names pronounceable and consistent in style across your world.</li>
          <li>Avoid names too similar to real species unless that is intentional.</li>
          <li>Use the tool as a starting point and refine for your setting.</li>
          <li>Combine genus from one result with species from another for uniqueness.</li>
        </ul>
        <p>
          If your world uses Latin-like names, stick to that. Mixing roots can work if done deliberately. Before you publish or use a name, do a quick check and tweak if needed (e.g., change one letter or swap genus and species) to make it unique and to avoid accidental overlap with real taxonomy.
        </p>

        <h2>Limitations and Avoiding Real or Offensive Names</h2>
        <p>
          Generated names are random or algorithm-based and are not checked against real taxonomy. They may occasionally resemble real species names by chance. If you spot a match, change the spelling or swap genus and species to avoid confusion. Do not use generated names for real organisms or in formal taxonomy. Avoid names that could be read as offensive or that copy real cultural terms without context. Use the tool for fictional, respectful use only.
        </p>
        <p>
          The tool does not guarantee uniqueness across runs. If you need many unique names, run it multiple times and mix or edit results. Keep a master list so you can avoid duplicates and stay consistent across your world or game.
        </p>

        <h2>Bestiaries and Game Design</h2>
        <p>
          Tabletop RPGs and video games often use homebrew creatures that need names. The tool can supply names for one-off encounters or for a whole supplement. GMs can run it with theme keywords (e.g., &quot;shadow,&quot; &quot;crystal,&quot; &quot;mechanical&quot;) and pick names that fit the tone. Players who create custom species or pets can use it for backstory and flavor. Keep a naming document and note which keywords produced which batch so you can keep style consistent. When you export or share your list, ensure the text is clean so co-authors or designers get a consistent, editable list.
        </p>

        <h2>Exporting and Formatting Your List</h2>
        <p>
          When you have a list of species names from the tool, you may want to export it to a spreadsheet, document, or game design file. Copy the names and paste them into your target format. If the list has extra line breaks or spaces, normalize the text before or after pasting so your naming document stays tidy. Keeping a master list in a single place helps you avoid duplicates and stay consistent when you add new entries later. If you paste from a webpage or another document, run the text through a strip-HTML tool first so you have plain text only.
        </p>

        <h2>Common Use Cases</h2>
        <p>
          The most common use is worldbuilding: naming creatures and plants for fantasy or sci-fi settings. Authors use it for minor species or as a starting point for major ones. Tabletop GMs use it for bestiaries and one-off encounters. Video game designers use it for creature lists and bestiary apps. Educators use it to illustrate binomial nomenclature in a fun way. In all cases, the output is for creative use only—not for real taxonomy or formal science.
        </p>
        <p>
          Another use is building a full bestiary. Run the tool multiple times with different keywords—e.g., one batch for &quot;forest&quot; creatures, another for &quot;alien&quot; fauna, another for &quot;dragon&quot;—and combine the results into a single document. Remove or adjust any names that are too similar to real species or that do not fit your tone.
        </p>

        <h2>Use Cases by Role</h2>
        <h3>Writers and authors</h3>
        <p>
          Fantasy and sci-fi authors use the tool to name creatures, plants, and alien life. Use it for minor species that do not need a long backstory, or as a starting point for important species that you then refine. Pair the tool with a style guide: e.g., all names use Latin roots, or all have a certain syllable count. Run it multiple times to get a long list, then pick and edit the best fits for your world.
        </p>
        <h3>Game masters and game designers</h3>
        <p>
          GMs use it for homebrew creatures, bestiaries, and campaign flavor. Run the tool with theme keywords and pick names that fit the tone of your game. Video game designers can use it for creature lists and bestiary apps. Keep a master list and stick to one naming style so your world feels coherent.
        </p>
        <h3>Educators and students</h3>
        <p>
          Teachers and students use the tool to learn about binomial nomenclature and how scientific-style names are built. Run it with a theme (e.g., &quot;marine animal,&quot; &quot;desert plant&quot;) and have students identify possible Latin or Greek roots in the results. Do not use generated names in formal science assignments as if they were real taxonomy; use them for creative and educational exercises only.
        </p>

        <h2>Common Mistakes and Troubleshooting</h2>
        <p>
          A frequent mistake is using vague keywords. Single words like &quot;creature&quot; can produce generic names. Use clear, descriptive terms like &quot;fire dragon&quot; or &quot;ice wolf&quot; for more on-theme results. Another mistake is forgetting to check for real-species overlap. If a name looks familiar, search it and tweak the spelling or order before publishing.
        </p>
        <p>
          If you need many unique names and see repeats, run the tool more times and combine genus from one result with species from another. Change a letter or add an epithet to make names distinct. When pasting lists into a document, normalize spacing and line breaks so your master list stays tidy and sortable.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check names against real taxonomy or guarantee they are unused.</li>
          <li>It does not produce scientifically valid names for real organisms.</li>
          <li>It does not replace formal taxonomic rules or publication for real species.</li>
          <li>It does not store your keywords when running locally; check the tool for details.</li>
        </ul>
        <p>
          The species name generator is for fictional, creative use only. It produces plausible-sounding binomial-style names. It does not manage taxonomy, publish names, or verify accuracy against real species. For real organisms, follow formal naming procedures and scientific standards.
        </p>

        <h2>Responsible Use and Compliance</h2>
        <p>
          Use the tool for fiction, games, and worldbuilding. Do not present generated names as real scientific names in non-fiction, educational materials that teach formal taxonomy, or any context where accuracy for real species is required. If you use output in a published book or game, ensure names are unique and do not inadvertently match real, protected, or trademarked terms. Avoid names that could be read as offensive or that appropriate real cultural terms without context.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          Many species name generators run in the browser and do not send your keywords to a server. This tool is designed to process locally when possible. No sign-up is required. That helps with privacy when you are generating names for unpublished projects or sensitive worldbuilding. Check the tool description for exact data handling.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The species name generator creates scientific-style names for fictional creatures and plants. You enter keywords, run the tool, and get binomial-style names for your worldbuilding, games, and stories. Use it for fantasy species, alien races, dragons, and fauna; refine the results to match your world&apos;s tone and pronunciation. Keep naming consistent and do not use output for real taxonomy. It is a practical species name generator for quick, repeatable naming today.
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

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
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
