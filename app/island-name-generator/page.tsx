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

const toolSlug = 'island-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Island Name Generator',
    description: 'Generate island names for games, stories, Animal Crossing, and worldbuilding.',
    seoTitle: 'Island Name Generator - Names for Islands Free',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          An island name generator (or names for islands generator) is a free online tool that creates island names for games like Animal Crossing, stories, and worldbuilding. Get 1–24 tropical, fantasy, or peaceful-sounding names per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is an Island Name Generator?</h2>
        <p>An island name generator—sometimes searched as &quot;names for islands generator&quot;—creates island names for games (e.g. Animal Crossing), stories, and worldbuilding. You get tropical, fantasy, or peaceful-sounding names at the click of a button. This free tool runs in your browser with no sign-up. For other naming tools try our <Link href="/tribe-name-generator">tribe name generator</Link>, <Link href="/species-name-generator">species name generator</Link>, or <Link href="/god-goddess-name-generator">god and goddess name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>How to Use This Island Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your game, story, or notes.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server. When pasting lists from the web, use our <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. For other naming tools see our <Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/fallout-name-generator">Fallout name generator</Link>, <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>When to Use an Island Name Generator</h2>
        <p>Use this generator when you need island names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Animal Crossing and other games that let you name an island</li>
          <li>Stories and novels with island settings</li>
          <li>Tabletop games and worldbuilding (fantasy, pirate, or tropical settings)</li>
          <li>Creative writing and YouTube or social content</li>
        </ul>
        <p>For other naming styles try our <Link href="/tribe-name-generator">tribe name generator</Link>, <Link href="/species-name-generator">species name generator</Link>, <Link href="/god-goddess-name-generator">god and goddess name generator</Link>, or <Link href="/naruto-name-generator">Naruto name generator</Link>. For creature or character names use the <Link href="/species-name-generator">species name generator</Link> and <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>.</p>
        <h2>Island Naming Style</h2>
        <p>Island names often use natural or evocative word elements—coral, sunset, palm, isle, shores, haven. This generator uses curated first and second elements and combines them at random so you get new combinations that fit that style. The output is for creative use only. For other naming styles see our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, <Link href="/muslim-name-generator">Muslim name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This island name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list. For more naming tools—<Link href="/naruto-name-generator">Naruto</Link>, <Link href="/fallout-name-generator">Fallout</Link>, <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>, <Link href="/tribe-name-generator">tribe name generator</Link>—see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
        <h2>Island Name Generator for Worldbuilding</h2>
        <p>Writers and game designers building worlds with islands often need many location names. Run the generator multiple times to build a roster. Keep a naming document to avoid reusing names. For mixed settings use this tool for island names and our <Link href="/species-name-generator">species name generator</Link> or <Link href="/tribe-name-generator">tribe name generator</Link> for creatures and teams. When pasting into a manuscript or spreadsheet use our <Link href="/space-remover">space remover</Link> or <Link href="/strip-html">strip HTML</Link> if you copied from the web.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through our <Link href="/space-remover">space remover</Link> or <Link href="/strip-html">strip HTML</Link>. For more tools see our <Link href="/">homepage</Link>.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The island name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences. For other mobile-friendly tools—<Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/fallout-name-generator">Fallout name generator</Link>, <Link href="/transformers-name-generator">Transformers name generator</Link>—see our <Link href="/">homepage</Link>.</p>
        <h2>Names for Islands Generator: Search Intent</h2>
        <p>People search for &quot;island name generator&quot; or &quot;names for islands generator&quot;; both refer to the same type of tool. This page serves those intents with one generator. For other location or character names see our <Link href="/tribe-name-generator">tribe name generator</Link>, <Link href="/species-name-generator">species name generator</Link>, <Link href="/god-goddess-name-generator">god and goddess name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for island or location names and our <Link href="/tribe-name-generator">tribe name generator</Link>, <Link href="/species-name-generator">species name generator</Link>, or <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link> for creatures and characters. When assembling lists from multiple tools, keep a single naming document and use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link> when pasting from the web.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of island names can be time-consuming. An island name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your game or story. For other bulk naming see our <Link href="/god-goddess-name-generator">god and goddess name generator</Link>, <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, and <Link href="/species-name-generator">species name generator</Link>.</p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the island name generator works</h3>
        <p>The tool uses curated first and second word elements (e.g. coral, isle, shores, haven). When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. Some combinations may resemble existing place names. For creature or deity names use our <Link href="/species-name-generator">species name generator</Link> and <Link href="/god-goddess-name-generator">god and goddess name generator</Link>.</p>
        <h2>Summary</h2>
        <p>Use this island name generator to create island names for Animal Crossing, stories, games, and worldbuilding. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For other naming styles see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an island name generator?', answer: 'An island name generator is an online tool that creates island names for games (e.g. Animal Crossing), stories, and worldbuilding. You get names like "Coral Isle" or "Sunset Shores"—tropical, fantasy, or peaceful-sounding—for your projects. People sometimes search for "names for islands generator"; this page serves that intent. This free tool runs in your browser with no sign-up. For other naming tools try our tribe name generator, species name generator, or god and goddess name generator. For cleaning text use our strip HTML and space remover. More on our homepage.' },
  { category: 'Usage', question: 'How do I use the island name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your game, story, or notes. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server. When pasting lists from the web use our strip HTML and space remover. For other naming tools—Naruto, Fallout, ancient Greek name generator—see our homepage.' },
  { category: 'General', question: 'Is the island name generator free?', answer: 'Yes. This island name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device. For other free naming tools—tribe, species, god and goddess, ancient Greek, Naruto, Fallout, Elden Ring—see our homepage. For cleaning pasted text use our free strip HTML and space remover tools.' },
  { category: 'Use cases', question: 'Can I use it for Animal Crossing?', answer: 'Yes. Many players use island name generators to get ideas for their Animal Crossing island name. Run the generator multiple times to get options and pick the one that fits. The names are for inspiration; you can tweak them to fit the character limit. For other naming tools—tribe name generator, species name generator, god and goddess name generator—see our homepage. When pasting names use our space remover or strip HTML if you copied from the web.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This island name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. The same applies to our other name generators. For cleaning pasted text our strip HTML and space remover tools also process in the browser. See our homepage for the full tool list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The island name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences. For other mobile-friendly naming tools—Naruto, Fallout, Elden Ring, Transformers—see our homepage. For cleaning text on the go use our strip HTML and space remover in the browser.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this island name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document. When you combine lists from this generator with names from our tribe or species name generator, use consistent formatting and our space remover if needed. See our homepage for more tools.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have a tribe name generator, species name generator, god and goddess name generator, ancient Greek name generator, Naruto name generator, Fallout name generator, Elden Ring name generator, Transformers name generator, anime names generator, and others. See our homepage for the full list. For word play try the word descrambler. For cleaning pasted text use strip HTML and space remover.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this island name generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through our space remover or strip HTML. For more tools see our homepage.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This island name generator works without sign-up or login. The tool runs entirely in your browser. The same is true for our other name generators. For cleaning pasted text our strip HTML and space remover tools also work without an account. See our homepage for the full list of tools.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes, for creative projects. The names are for inspiration. Writers use island name generators to name islands in novels, short stories, and worldbuilding. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two locations. For mixed settings use this tool for island names and our species name generator or tribe name generator for creatures and teams. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. See our homepage for more tools.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The island name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. The same applies to our other name generators. For cleaning pasted text our strip HTML and space remover tools also process in the browser when possible. See our privacy policy and homepage for more information.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this island name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document. When you combine lists from this generator with names from the tribe or species name generator, use consistent formatting and our space remover if needed. See our homepage.' },
  { category: 'General', question: 'Why "names for islands generator"?', answer: 'That phrase matches how people search for this type of tool. "Island name generator" and "names for islands generator" refer to the same thing; this page serves both search intents with one generator. For other naming styles—tribe, species, god and goddess, ancient Greek, Naruto, Fallout—see our homepage. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'Use cases', question: 'Can I use it for tabletop games?', answer: 'Yes. GMs use this island name generator for island names in fantasy, pirate, or tropical settings. Run the generator several times to build a list. Keep a document of names you have already used to avoid duplicates. For the same campaign you might use this generator for locations and our species name generator or tribe name generator for creatures and teams. For cleaning pasted text use our strip HTML and space remover. See our homepage for all naming tools.' },
  { category: 'General', question: 'Are the names unique?', answer: 'The names are randomly combined from curated word lists. Some combinations may resemble existing place names; many are new. The tool does not check against a database of real islands. Use the output for creative use only. For creature or deity names use our species name generator and god and goddess name generator. See our homepage for more tools.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this island name generator for island or location names and our species name generator or tribe name generator for creatures and teams. For character names use the Naruto name generator, Fallout name generator, or ancient Greek name generator. When you assemble lists from multiple tools keep a single naming document and use strip HTML and space remover when pasting from the web. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This island name generator uses curated first and second word elements (e.g. coral, isle, shores, haven, sunset, palm). When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only. For deity names see our god and goddess name generator. For binomial creature names see the species name generator. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'General', question: 'Is the island name generator good for worldbuilding?', answer: 'Yes. Writers and game designers use this island name generator to name islands in their worlds. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two locations. For mixed settings use this tool for island names and our species name generator or tribe name generator for creatures and teams. When pasting names into a manuscript or spreadsheet use our space remover or strip HTML if you copied from the web. See our homepage for more tools.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this island name generator in lessons on creative writing or geography-related activities. Students might generate a list of island names for a story or a map project. Emphasize that the tool is for inspiration. For cross-curricular naming activities pair this tool with the species name generator or ancient Greek name generator. When students paste lists into documents, remind them to use our space remover or strip HTML if they copied from the web. See our homepage.' },
  { category: 'General', question: 'How do I cite the island name generator?', answer: 'For academic or formal use you can cite this island name generator as a source of inspiration for island names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution. For other tools you use the same principle applies. See our homepage for the full tool list.' },
  { category: 'General', question: 'What if I need a specific theme?', answer: 'Run this island name generator multiple times to get variety; each run produces new random combinations. You can also tweak the results manually. If you need names from another category—creature names, character names, tribe names—use our species name generator, ancient Greek name generator, or tribe name generator. When you combine lists from multiple tools keep a single naming document and use strip HTML and space remover when pasting from the web. See our homepage for all tools.' },
  { category: 'Use cases', question: 'Can I use the island name generator for YouTube or social media?', answer: 'Yes, for creative content. You can use names from this island name generator for video titles, worldbuilding lists, or project names on YouTube or social media. When you paste lists from the generator into a script or description, use our space remover or strip HTML if you copied from the web. For other naming tools see our homepage. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'General', question: 'What is a "names for islands generator"?', answer: 'A "names for islands generator" is the same as an island name generator: a tool that produces island names for games (e.g. Animal Crossing), stories, and worldbuilding. People search for either phrase; this page serves both intents with one generator. You get tropical, fantasy, or peaceful-sounding names at the click of a button. For other naming tools—tribe name generator, species name generator, god and goddess name generator—see our homepage. For cleaning pasted text use our strip HTML and space remover.' },
];

export default async function IslandNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="island" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the island name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
