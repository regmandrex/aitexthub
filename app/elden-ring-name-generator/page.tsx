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

const toolSlug = 'elden-ring-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Elden Ring Name Generator',
    description: 'Generate Elden Ring and Souls-style character names for games and roleplay.',
    seoTitle: 'Elden Ring Name Generator - Souls Character Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          An Elden Ring name generator (or elden ring names generator) is a free online tool that creates Souls-style character names for games and roleplay. Get 1–24 names per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is an Elden Ring Name Generator?</h2>
        <p>An Elden Ring name generator—sometimes searched as &quot;elden ring names generator&quot;—creates character names inspired by Elden Ring and the Souls series. Use it for your Tarnished or other dark fantasy characters in games and roleplay. You get names with the distinct Elden Ring / Souls naming feel at the click of a button. This free tool runs in your browser with no sign-up.</p>
        <h2>How to Use This Elden Ring Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your game, story, or notes.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use an Elden Ring Name Generator</h2>
        <p>Use this generator when you need Souls-style or dark fantasy character names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Naming your Tarnished or characters in Elden Ring and similar games</li>
          <li>Dark Souls and other Souls-like character names</li>
          <li>Tabletop RPGs and roleplay with a dark fantasy vibe</li>
          <li>Creative writing and worldbuilding</li>
        </ul>
        <p>It is ideal when you need many names at once or want to explore different combinations without inventing every name by hand.</p>
        <h2>Elden Ring and Souls Naming Style</h2>
        <p>The games use a distinct dark fantasy naming feel—archaic, memorable, and often multi-part. This generator uses curated first and second elements and combines them at random so you get new combinations that fit that style. The output is for creative use only and is not official.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This Elden Ring name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Elden Ring Name Generator for Worldbuilding</h2>
        <p>Writers and GMs building dark fantasy worlds often need many character names. Run the generator multiple times to build a roster. Keep a naming document to avoid reusing names. For mixed settings you can pair this tool with other naming tools for different cultures or creature names; when pasting from the web, a space remover or strip-HTML step can keep formatting clean.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool so formatting stays clean.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The Elden Ring name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences.</p>
        <h2>Elden Ring Names Generator vs Name Generator</h2>
        <p>People search for &quot;elden ring names generator&quot; or &quot;Elden Ring name generator&quot;; both refer to the same type of tool. This page serves those intents with one generator that produces Souls-style character names.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for Souls-style names and other naming tools on our site for other factions or cultures. When assembling lists from multiple tools, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of Souls-style names can be time-consuming. An Elden Ring name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your characters.</p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the Elden Ring name generator works</h3>
        <p>The tool uses curated Souls-style first and second name elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only and is not official game content.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. The tool does not check against official Elden Ring or Souls character lists. Do not use in a way that implies franchise endorsement.</p>
        <h2>Summary</h2>
        <p>Use this Elden Ring name generator to create Souls-style character names for games, roleplay, and creative writing. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For more naming and text tools, see our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an Elden Ring name generator?', answer: 'An Elden Ring name generator is an online tool that creates Souls-style character names for games and roleplay. You get names inspired by Elden Ring and the Souls series—the distinct dark fantasy naming feel that fans know. Use it for your Tarnished or other characters. This free tool runs in your browser with no sign-up.' },
  { category: 'Usage', question: 'How do I use the Elden Ring name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your game, story, or notes. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is an elden ring names generator?', answer: 'It is the same as an Elden Ring name generator: a tool that produces character names in the Elden Ring / Souls style. People search for "elden ring names generator" or "Elden Ring name generator"; this page serves both intents with one generator.' },
  { category: 'General', question: 'Is the Elden Ring name generator free?', answer: 'Yes. This Elden Ring name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for my Tarnished?', answer: 'Yes. The Elden Ring name generator is designed for character naming in Elden Ring and similar games. Use the names as a starting point for your Tarnished or other characters. Run the generator multiple times to get options and pick the one that fits.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Elden Ring name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Elden Ring name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Elden Ring name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for Fallout, Naruto, Transformers, RuneScape, anime, god and goddess, ancient Greek, species, tribe, island, and others. See our homepage for the full list.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this Elden Ring name generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through a space remover or strip-HTML tool so the list stays tidy.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Elden Ring name generator works without sign-up or login. The tool runs entirely in your browser.' },
  { category: 'Use cases', question: 'Can I use it for other Souls games?', answer: 'Yes. The Elden Ring name generator produces names in a Souls-style that fits Elden Ring, Dark Souls, and similar games. GMs and players use it for dark fantasy character names in tabletop RPGs and roleplay. Run the generator several times to build a roster.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The Elden Ring name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Elden Ring name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document.' },
  { category: 'General', question: 'Why Elden Ring / Souls style?', answer: 'Elden Ring and Souls games have a distinct dark fantasy naming feel—archaic, memorable, and often multi-part. This Elden Ring name generator mimics that style for fan characters, roleplay, and creative writing.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this Elden Ring name generator for dark fantasy character names. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this Elden Ring name generator for Souls-style names and other naming tools on our site for different characters or factions. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This Elden Ring name generator uses curated Souls-style first and second name elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only and is not official game content.' },
  { category: 'General', question: 'Are these official Elden Ring names?', answer: 'This Elden Ring name generator uses styles inspired by the games. The combinations are produced by an algorithm from curated elements. Some names may resemble existing characters; many are new combinations for creative use. The tool is not affiliated with the franchise. Use the output for fan fiction, roleplay, and creative projects only. For commercial or published work avoid implying endorsement by the franchise.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this Elden Ring name generator in lessons on creative writing or worldbuilding. Students might generate a list of names for characters in a dark fantasy story. Emphasize that the tool is for inspiration and that the names are not official.' },
  { category: 'General', question: 'How do I cite the Elden Ring name generator?', answer: 'For academic or formal use you can cite this Elden Ring name generator as a source of inspiration for character names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects while respecting franchise sensitivity. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this Elden Ring name generator multiple times to get variety; each run produces new random combinations. If you need names from another genre, see our homepage for the full list of naming tools.' },
  { category: 'Use cases', question: 'Can I use the Elden Ring name generator for fan fiction?', answer: 'Yes. The Elden Ring name generator is designed for fan fiction, roleplay, and creative projects. Use the names as a starting point for characters in Elden Ring-inspired or original dark fantasy settings. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. Avoid implying official franchise endorsement in commercial or published work.' },
  { category: 'General', question: 'Is the Elden Ring name generator good for worldbuilding?', answer: 'Yes. Writers and GMs use this Elden Ring name generator for dark fantasy worlds, faction rosters, and character naming. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters.' },
];

export default async function EldenRingNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="elden-ring" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Elden Ring name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
