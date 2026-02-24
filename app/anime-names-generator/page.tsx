import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'anime-names-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Anime Names Generator',
    description: 'Generate anime-style character names and nicknames for fan fiction and creative writing.',
    seoTitle: 'Anime Names Generator - Character & Nicknames',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          An anime names generator (or anime nicknames generator) is a free online tool that creates anime-style character names and nicknames for fan fiction and creative writing. Get 1–24 names per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is an Anime Names Generator?</h2>
        <p>An anime names generator—sometimes searched as &quot;anime nicknames generator&quot;—creates anime-style character names and nicknames for fan fiction and creative writing. Use it for characters, roleplay, and games. You get Japanese-inspired names and suffixes (e.g. -kun, -chan) at the click of a button. This free tool runs in your browser with no sign-up. For series-specific names we also offer a Naruto name generator on our site.</p>
        <h2>How to Use This Anime Names Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or notes.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use an Anime Names Generator</h2>
        <p>Use this generator when you need anime-style names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fan fiction and roleplay with anime-style characters</li>
          <li>Tabletop and video game character names</li>
          <li>Creative writing and YouTube or social content</li>
          <li>Nicknames and character handles</li>
        </ul>
        <p>It is ideal when you need many names at once or want to explore different combinations without inventing every name by hand.</p>
        <h2>Anime Naming Style: Names and Nicknames</h2>
        <p>Anime names often use Japanese-inspired sounds and suffixes (-kun, -chan, etc.). This generator uses curated first names and suffixes and combines them at random so you get new combinations that fit that style. The output is for creative use only.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This anime names generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Anime Names Generator vs Naruto Name Generator</h2>
        <p>Our Naruto name generator is focused on Naruto-style names (Japanese-style first and last names for the ninja world). The anime names generator is broader: it includes nicknames and suffixes for any anime-style character. Use this page when you want a wide pool of anime-style options; use the Naruto generator when you want names that specifically evoke the Naruto vibe.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool so formatting stays clean.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The anime names generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for anime-style names and other naming tools on our site for different cultures. When assembling lists from multiple tools, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of anime-style names can be time-consuming. An anime names generator produces many options in seconds. Run it repeatedly and pick the names that best fit your characters.</p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the anime names generator works</h3>
        <p>The tool uses curated anime-style first names and suffixes. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. They are inspired by anime naming patterns; for formal or cultural accuracy consult appropriate references.</p>
        <h2>Tips for Picking Anime-Style Names</h2>
        <p>Good anime-style names fit the tone of your character or story. Run the generator several times and save names that match the vibe you want—some combinations sound more serious, others more playful or quirky. If you write for a specific series, consider how the names compare to that world&apos;s naming style. Keeping a naming document helps you avoid reusing the same name for different characters and keeps spelling consistent. For characters with titles or suffixes (-kun, -chan), you can add those after the generated name if your generator output does not include them.</p>
        <h2>Summary</h2>
        <p>Use this anime names generator to create anime-style character names and nicknames for fan fiction, roleplay, and creative writing. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For more naming and text tools, see our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an anime names generator?', answer: 'An anime names generator is an online tool that creates anime-style character names and nicknames for fan fiction and creative writing. You get Japanese-inspired names and suffixes (e.g. -kun, -chan) at the click of a button. People sometimes search for "anime nicknames generator"; this page serves that intent too. This free tool runs in your browser with no sign-up.' },
  { category: 'Usage', question: 'How do I use the anime names generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your story, game doc, or notes. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is an anime nicknames generator?', answer: 'It is the same as an anime names generator: a tool that produces anime-style names and nicknames for characters. People search for "anime nicknames generator" or "anime names generator"; this page serves both intents with one generator.' },
  { category: 'General', question: 'Is the anime names generator free?', answer: 'Yes. This anime names generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for fan fiction?', answer: 'Yes. The anime names generator is designed for fan fiction, roleplay, and creative projects. The names fit anime-style characters across series. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This anime names generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The anime names generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this anime names generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for Naruto, Transformers, Fallout, Elden Ring, god and goddess, ancient Greek, species, tribe, island, Muslim, and others. See our homepage for the full list.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this anime names generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through a space remover or strip-HTML tool so the list stays tidy.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This anime names generator works without sign-up or login. The tool runs entirely in your browser.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this anime names generator for anime-style character names. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The anime names generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this anime names generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document.' },
  { category: 'General', question: 'How is this different from the Naruto name generator?', answer: 'The Naruto name generator is focused on Naruto-style names: Japanese-style first and last names that fit the ninja world. The anime names generator is broader and includes nicknames and suffixes for any anime-style character. Use this page when you want a wide pool of anime-style options; use the Naruto generator when you want names that specifically evoke the Naruto vibe.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes. You can use names from this anime names generator in tabletop games, video games, and other creative or personal projects. The names fit anime-style characters.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this anime names generator for anime-style names and other naming tools on our site for different cultures. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This anime names generator uses curated anime-style first names and suffixes (e.g. -kun, -chan). When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Are the names culturally accurate?', answer: 'The names are inspired by anime naming patterns. They are intended for creative and fan use, not as formal or culturally authoritative names. For formal or cultural accuracy—e.g. real Japanese names for an educational project—consult appropriate references. This tool is for inspiration only.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this anime names generator in lessons on creative writing or as a light touchpoint for discussing anime and naming. Students might generate a list of names for characters in an anime-inspired story. Emphasize that the tool is for inspiration.' },
  { category: 'General', question: 'How do I cite the anime names generator?', answer: 'For academic or formal use you can cite this anime names generator as a source of inspiration for character names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this anime names generator multiple times to get variety; each run produces new random combinations. If you need Naruto-specific names use our Naruto name generator. If you need names from another genre, see our homepage for the full list of naming tools.' },
  { category: 'Use cases', question: 'Can I use the anime names generator for YouTube or social media?', answer: 'Yes, for creative content. You can use names from this anime names generator for video titles, character lists, or project names on YouTube or social media.' },
  { category: 'General', question: 'Is the anime names generator good for roleplay?', answer: 'Yes. The anime names generator is designed for roleplay, fan fiction, and creative projects. Use the names for anime-style characters in tabletop games, online roleplay, or creative writing. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters.' },
];

export default async function AnimeNamesGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="anime" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the anime names generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
