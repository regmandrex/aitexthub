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
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'species-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Species Name Generator';
  const description = 'Generate scientific-style species names for creatures, plants, and fictional organisms.';
  const seoTitle = 'Species Name Generator - Scientific & Fantasy Species Names';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Species Name Generator: Scientific and Fantasy Species Names</h2>
        <p>A species name generator is an online tool that creates scientific-style names for creatures, plants, and fictional organisms. Real species use binomial nomenclature (Genus species), often from Latin or Greek roots—for example, Tyrannosaurus rex or Canis lupus. A species name generator produces similar-sounding names for your fantasy world, game, story, or project. You enter keywords or a short description (e.g., "fire dragon," "blue mushroom"), and the tool suggests binomial-style names that sound credible and memorable.</p>
        <p>This free species name generator runs in your browser. You input your theme or keywords, run the generator, and get a list of possible species names. No sign-up is required. The names are for creative use—fiction, games, worldbuilding—and are not intended to replace real scientific naming. In this guide we explain how species naming works, how to use a species name generator, when to use it for fantasy and sci-fi, and tips for choosing the best names.</p>

        <h2>What Is Binomial Nomenclature?</h2>
        <p>Binomial nomenclature is the system of giving each species a two-part name: Genus (capitalized) and species (lowercase), e.g., Homo sapiens. Names often come from Latin or Greek and describe a trait, place, or person. A species name generator mimics this style so your fictional species sound plausible and consistent. You can use the names as-is or tweak them to fit your setting.</p>

        <h2>How to Use a Species Name Generator</h2>
        <p>Open the species name generator and enter keywords or a short description (e.g., "ice wolf," "poisonous plant," "flying reptile"). Click Generate. The tool returns a list of binomial-style names. Pick one that fits your creature or plant, or run again for more options. You can combine results or adjust spelling to match your worldbuilding.</p>

        <h2>When to Use a Species Name Generator</h2>
        <p>Use it for fantasy and sci-fi writing, tabletop and video games, worldbuilding, and any project where you need plausible-sounding species names. It is ideal for bestiaries, bestiary apps, creature design, and educational or creative projects. Generated names are not real scientific names and should not be used for real species or in formal taxonomy.</p>

        <h2>Tips for Good Species Names</h2>
        <p>Keep names pronounceable and consistent in style. If your world uses Latin-like names, stick to that. Mixing roots (e.g., Latin genus + Greek species) can work if done deliberately. Avoid names that are too similar to real species unless that is intentional. Use the generator as a starting point and refine for your setting.</p>

        <h2>Limitations</h2>
        <p>Generated names are random or algorithm-based; they are not checked against real taxonomy. They may occasionally resemble real species names by chance. Use them for fiction and creativity only. For real species, follow formal taxonomic rules and authorities.</p>

        <h2>Privacy</h2>
        <p>Many species name generators run in the browser and do not send your keywords to a server. Check the tool. This tool is designed to process locally when possible.</p>

        <h2>Conclusion</h2>
        <p>A species name generator helps you create scientific-style names for fictional creatures and plants. Use this free species name generator to input keywords and get binomial-style names for your worldbuilding, games, and stories. Refine the results to match your setting and keep naming consistent.</p>
      </div>
    </section>
  );
}

export default async function SpeciesNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a species name generator?', answer: 'A species name generator creates scientific-style (binomial) names for fictional creatures, plants, or organisms. You enter keywords or a description and get names like "Genus species" that sound plausible for fantasy, games, or stories.' },
    { category: 'General', question: 'Is the species name generator free?', answer: 'Yes. This species name generator is free to use. You enter keywords, run the tool, and get a list of names. Many generators run in the browser and do not require sign-up.' },
    { category: 'Usage', question: 'How do I use the species name generator?', answer: 'Enter keywords or a short description (e.g., "dragon," "ice," "poisonous plant") and click Generate. Review the list of binomial-style names and pick or adapt one for your creature or plant. Run again for more options.' },
    { category: 'Technical', question: 'What is binomial nomenclature?', answer: 'Binomial nomenclature is the two-part naming system for species: Genus (capitalized) + species (lowercase), e.g., Canis lupus. Names often use Latin or Greek roots. The generator mimics this style for fictional use.' },
    { category: 'Use cases', question: 'When would I use a species name generator?', answer: 'Use it for fantasy and sci-fi writing, RPGs, video games, worldbuilding, and bestiaries. It helps you create consistent, credible-sounding names for fictional species without inventing every name from scratch.' },
    { category: 'Use cases', question: 'Can I use generated names for real species?', answer: 'No. Generated names are for creative and fictional use only. Real species naming follows formal taxonomic rules and requires publication and acceptance by the scientific community.' },
    { category: 'General', question: 'Are the generated names real?', answer: 'No. They are algorithm-generated and may by chance resemble real names. They are not verified against taxonomy. Use them for fiction, games, and creative projects only.' },
    { category: 'Formatting', question: 'What format do the names use?', answer: 'Typically "Genus species"—two words, Genus capitalized, species lowercase, often Latin- or Greek-style. Some tools add variants (e.g., with epithets or subspecies-style). Check the tool output.' },
    { category: 'Privacy', question: 'Is my input sent to a server?', answer: 'Many species name generators run in the browser and process keywords locally. Check the tool. This tool is designed to process locally when possible.' },
    { category: 'Limits', question: 'How many names can I generate?', answer: 'It depends on the tool. Some return a fixed number per run; others let you generate multiple batches. Run the generator again for more options.' },
    { category: 'General', question: 'Can I customize the names?', answer: 'Yes. Use the generator as a starting point. You can change spelling, swap genus and species, or combine elements from different results to fit your worldbuilding.' },
    { category: 'Use cases', question: 'Is this good for tabletop RPGs?', answer: 'Yes. Tabletop GMs and players use species name generators for homebrew creatures, bestiaries, and worldbuilding. It speeds up naming and keeps a consistent style.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. Browser-based species name generators work on phones and tablets. Enter keywords and copy the names you like.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. Online species name generators run in your browser. No download or install required.' },
    { category: 'Technical', question: 'Why Latin or Greek style?', answer: 'Real scientific names often use Latin or Greek roots for historical and international consistency. The generator mimics this so fictional names feel plausible and recognizable.' },
    { category: 'Use cases', question: 'Can I use these names in a published book?', answer: 'You can use generated names in fiction. Consider tweaking them to be unique and to fit your setting. They are not real taxonomy, so avoid presenting them as real species in non-fiction.' },
    { category: 'General', question: 'What if I need a name for a specific trait?', answer: 'Enter that trait as a keyword (e.g., "fire," "winged," "nocturnal"). The generator will use it to influence the names. You can also combine multiple keywords.' },
    { category: 'Workflow', question: 'Can I copy names to a document?', answer: 'Yes. Copy the generated names and paste into Word, Google Docs, or your worldbuilding document. Edit as needed for your project.' },
    { category: 'Privacy', question: 'Do you store my keywords?', answer: 'When the tool runs locally, your keywords are not stored on our servers. Check the tool description and privacy policy.' },
    { category: 'General', question: 'What is a scientific species name?', answer: 'A scientific species name is the formal binomial (Genus species) given to a species in taxonomy. The generator creates similar-style names for fictional use, not for real taxonomy.' },
    { category: 'Use cases', question: 'Can I generate names for plants and fungi?', answer: 'Yes. Enter plant- or fungus-related keywords (e.g., "mushroom," "thorny," "glowing") and the generator will produce names in the same binomial style.' },
    { category: 'Limits', question: 'Are there duplicate or repeated names?', answer: 'Generators may occasionally repeat or produce similar names across runs. If you need many unique names, run multiple times and mix or tweak results.' },
    { category: 'General', question: 'Is this the same as a character name generator?', answer: 'No. A species name generator creates binomial-style names for species (creatures, plants). Character name generators create personal names for people or characters. Use the one that fits your need.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<SpeciesNameGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions and answers about the Species Name Generator and scientific-style names.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
