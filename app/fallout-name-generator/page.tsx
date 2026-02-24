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

const toolSlug = 'fallout-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Fallout Name Generator',
    description: 'Generate Fallout-style character and faction names for roleplay and creative writing.',
    seoTitle: 'Fallout Name Generator - Character & Faction Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          A Fallout name generator is a free online tool that creates character and faction names inspired by the Fallout games. Get 1–24 wasteland- and faction-style names per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is a Fallout Name Generator?</h2>
        <p>A Fallout name generator is an online tool that creates character and faction names inspired by the Fallout games—the wasteland, vaults, and faction naming style that fans know from the series. Use it for roleplay, fan fiction, tabletop and video games, and creative writing. You get wasteland-style and faction-style names at the click of a button. This free tool runs in your browser with no sign-up. For other game-style names try our <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>, <Link href="/runescape-name-generator">RuneScape name generator</Link>, or <Link href="/naruto-name-generator">Naruto name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>How to Use This Fallout Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or spreadsheet.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server. When pasting lists from the web, use our <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. For other naming tools see our <Link href="/species-name-generator">species name generator</Link>, <Link href="/tribe-name-generator">tribe name generator</Link>, <Link href="/god-goddess-name-generator">god and goddess name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>When to Use a Fallout Name Generator</h2>
        <p>Use this generator when you need post-apocalyptic or faction-style names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fan fiction and roleplay set in Fallout-inspired or wasteland worlds</li>
          <li>Tabletop and video game character or faction names</li>
          <li>Worldbuilding for post-apocalyptic settings</li>
          <li>Creative writing and YouTube or social content</li>
        </ul>
        <p>For other genres try our <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>, <Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/transformers-name-generator">Transformers name generator</Link>, or <Link href="/anime-names-generator">anime names generator</Link>. For creature or deity names use the <Link href="/species-name-generator">species name generator</Link> and <Link href="/god-goddess-name-generator">god and goddess name generator</Link>.</p>
        <h2>Fallout Naming Style: Wasteland and Factions</h2>
        <p>The games use a distinct wasteland and faction naming feel—rugged, survival-oriented, and faction-specific. This generator uses curated word elements and combines them at random so you get new combinations that fit that style. The output is for creative use only and is not official. For other naming styles see our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, <Link href="/muslim-name-generator">Muslim name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This Fallout name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list. For more naming tools—<Link href="/naruto-name-generator">Naruto</Link>, <Link href="/transformers-name-generator">Transformers</Link>, <Link href="/island-name-generator">island name generator</Link>, <Link href="/tribe-name-generator">tribe name generator</Link>—see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
        <h2>Fallout Name Generator for Worldbuilding</h2>
        <p>Writers and GMs building post-apocalyptic or faction-based worlds often need many names. Run the generator multiple times to build a roster. Keep a naming document to avoid reusing names and to keep faction naming consistent. For mixed settings use this tool for wasteland names and our <Link href="/elden-ring-name-generator">Elden Ring</Link> or <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link> for other cultures. For creature names use the <Link href="/species-name-generator">species name generator</Link>. When pasting into a manuscript or spreadsheet use our <Link href="/space-remover">space remover</Link> or <Link href="/strip-html">strip HTML</Link> if you copied from the web.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through our <Link href="/space-remover">space remover</Link> or <Link href="/strip-html">strip HTML</Link>. For more tools see our <Link href="/">homepage</Link>.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The Fallout name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences. For other mobile-friendly tools—<Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>, <Link href="/transformers-name-generator">Transformers name generator</Link>—see our <Link href="/">homepage</Link>.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for wasteland or faction names and our <Link href="/naruto-name-generator">Naruto</Link>, <Link href="/transformers-name-generator">Transformers</Link>, or <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link> for other factions or cultures. When assembling lists from multiple tools, keep a single naming document and use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link> when pasting from the web.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of Fallout-style names can be time-consuming. A Fallout name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your characters or factions. For bulk naming—a cast of characters or a list for a game—the generator saves time. For other bulk naming see our <Link href="/god-goddess-name-generator">god and goddess name generator</Link>, <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, and <Link href="/species-name-generator">species name generator</Link>.</p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the Fallout name generator works</h3>
        <p>The tool uses curated wasteland- and faction-style word elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only and is not official game content.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. The tool does not check against official Fallout character or faction lists. Do not use in a way that implies franchise endorsement. For creature or deity names use our <Link href="/species-name-generator">species name generator</Link> and <Link href="/god-goddess-name-generator">god and goddess name generator</Link>.</p>
        <h2>Terminology: Fallout Name Generator</h2>
        <p>People search for &quot;Fallout name generator,&quot; &quot;fallout character name generator,&quot; or &quot;fallout faction names.&quot; This page serves those intents with one tool that produces character- and faction-style names. For other game or fandom names see our <Link href="/elden-ring-name-generator">Elden Ring</Link>, <Link href="/naruto-name-generator">Naruto</Link>, <Link href="/runescape-name-generator">RuneScape name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>Summary</h2>
        <p>Use this Fallout name generator to create wasteland- and faction-style names for roleplay, fan fiction, games, and worldbuilding. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For other naming styles see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Fallout name generator?', answer: 'A Fallout name generator is an online tool that creates character and faction names inspired by the Fallout games—the wasteland, vaults, and faction naming style that fans know from the series. You get wasteland-style and faction-style names for roleplay, fan fiction, tabletop and video games, and creative writing. This free tool runs in your browser with no sign-up. For other game-style names try our Elden Ring name generator, RuneScape name generator, or Naruto name generator. For cleaning text use our strip HTML and space remover. More on our homepage.' },
  { category: 'Usage', question: 'How do I use the Fallout name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your story, game doc, or spreadsheet. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server. When pasting lists from the web use our strip HTML and space remover. For other naming tools—species name generator, tribe name generator, god and goddess name generator—see our homepage.' },
  { category: 'General', question: 'Is the Fallout name generator free?', answer: 'Yes. This Fallout name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device. For other free naming tools—Elden Ring, Naruto, Transformers, anime names, god and goddess, ancient Greek, species, tribe—see our homepage. For cleaning pasted text use our free strip HTML and space remover tools.' },
  { category: 'Use cases', question: 'Can I use the names for roleplay?', answer: 'Yes. The Fallout name generator is designed for fan works, roleplay, and creative projects. The names fit wasteland and faction settings. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. For mixed settings use this tool for wasteland names and our Elden Ring or Naruto name generator for other styles. For creature names use the species name generator. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. Avoid implying official franchise endorsement in commercial or published work.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Fallout name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. The same applies to our other name generators. For cleaning pasted text our strip HTML and space remover tools also process in the browser. See our homepage for the full tool list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Fallout name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences. For other mobile-friendly naming tools—Naruto, Elden Ring, Transformers—see our homepage. For cleaning text on the go use our strip HTML and space remover in the browser.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Fallout name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document. When you combine lists from this generator with names from our Naruto or Elden Ring name generator, use consistent formatting and our space remover if needed. See our homepage for more tools.' },
  { category: 'General', question: 'Are these official Fallout names?', answer: 'This Fallout name generator uses styles inspired by the games. The combinations are produced by an algorithm from curated wasteland- and faction-style elements. Some names may resemble existing characters or factions; many are new combinations for creative use. The tool is not affiliated with the franchise. Use the output for fan fiction, roleplay, and creative projects only. For commercial or published work avoid implying endorsement by the franchise. For other naming styles see our homepage.' },
  { category: 'Use cases', question: 'Can I use the names in a game?', answer: 'Yes. You can use names from this Fallout name generator in tabletop games, video games, and other creative or personal projects. For commercial use avoid implying official partnership with the franchise. When building a game with multiple factions you might use this generator for one faction and our Elden Ring or Naruto name generator for another. For creature or species names use the species name generator. For cleaning pasted lists use our strip HTML and space remover. See our homepage for the full tool list.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have an Elden Ring name generator, Naruto name generator, Transformers name generator, RuneScape name generator, anime names generator, god and goddess name generator, ancient Greek name generator, species name generator, tribe name generator, island name generator, and others. See our homepage for the full list. For word play try the word descrambler. For cleaning pasted text use strip HTML and space remover.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this Fallout name generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through our space remover or strip HTML. For more tools see our homepage.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Fallout name generator works without sign-up or login. The tool runs entirely in your browser. The same is true for our other name generators. For cleaning pasted text our strip HTML and space remover tools also work without an account. See our homepage for the full list of tools.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this Fallout name generator for post-apocalyptic or faction-style character and faction names. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates. For the same campaign you might use this generator for one faction and our Elden Ring or Naruto name generator for another. For creature names the species name generator produces binomial-style names. For cleaning pasted text use our strip HTML and space remover. See our homepage for all naming tools.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The Fallout name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. The same applies to our other name generators. For cleaning pasted text our strip HTML and space remover tools also process in the browser when possible. See our privacy policy and homepage for more information.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Fallout name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document. When you combine lists from this generator with names from the Naruto or Elden Ring name generator, use consistent formatting and our space remover if needed. See our homepage.' },
  { category: 'General', question: 'Why Fallout-style names?', answer: 'Fallout has a distinct wasteland and faction naming style—rugged, survival-oriented, and faction-specific. This Fallout name generator mimics that style for fan works, roleplay, and creative writing. For other naming styles—Elden Ring, Naruto, anime, god and goddess, species—see our homepage. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'Use cases', question: 'Can I use the names for YouTube or social media?', answer: 'Yes, for creative content. You can use names from this Fallout name generator for video titles, character lists, or project names on YouTube or social media. Avoid implying official partnership or endorsement by the franchise. When you paste lists from the generator into a script or description, use our space remover or strip HTML if you copied from the web. For other naming tools see our homepage. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this Fallout name generator for wasteland or faction names and our Naruto name generator, Transformers name generator, or Elden Ring name generator for other characters or factions. For creature or species names use the species name generator; for deity names use the god and goddess name generator and ancient Greek name generator. When you assemble lists from multiple tools keep a single naming document and use strip HTML and space remover when pasting from the web. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This Fallout name generator uses curated wasteland- and faction-style word elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only and is not official game content. For deity names see our god and goddess name generator. For binomial creature names see the species name generator. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'General', question: 'Is it good for worldbuilding?', answer: 'Yes. Writers and GMs use this Fallout name generator for post-apocalyptic settings, faction rosters, and wasteland character names. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters or factions. For mixed-genre worlds use this tool for one culture and our Elden Ring or ancient Greek name generator for another. For creature names use the species name generator. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. See our homepage for more tools.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this Fallout name generator in lessons on creative writing or worldbuilding. Students might generate a list of names for characters or factions in a post-apocalyptic story. Emphasize that the tool is for inspiration and that the names are not official. For cross-curricular naming activities pair this tool with the species name generator or ancient Greek name generator. When students paste lists into documents, remind them to use our space remover or strip HTML if they copied from the web. See our homepage.' },
  { category: 'General', question: 'How do I cite the Fallout name generator?', answer: 'For academic or formal use you can cite this Fallout name generator as a source of inspiration for character or faction names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects while respecting franchise sensitivity. A brief acknowledgment is optional. We do not require attribution. For other tools you use the same principle applies. See our homepage for the full tool list.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this Fallout name generator multiple times to get variety; each run produces new random combinations. If you need names from another genre—dark fantasy, anime, post-apocalyptic sci-fi—use our Elden Ring name generator, Naruto name generator, or Transformers name generator. For creature or deity names use the species name generator and god and goddess name generator. When you combine lists from multiple tools keep a single naming document and use strip HTML and space remover when pasting from the web. See our homepage for all tools.' },
  { category: 'Use cases', question: 'Can I use the Fallout name generator for fan fiction?', answer: 'Yes. The Fallout name generator is designed for fan fiction, roleplay, and creative projects. Use the names as a starting point for characters, factions, or locations in Fallout-inspired or original wasteland settings. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. For mixed-genre stories use this tool for wasteland names and our Naruto or ancient Greek name generator for other cultures. For creature names use the species name generator. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. Avoid implying official franchise endorsement in commercial or published work. See our homepage for more tools.' },
];

export default async function FalloutNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="fallout" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Fallout name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
