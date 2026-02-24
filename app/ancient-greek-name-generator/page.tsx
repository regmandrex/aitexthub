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

const toolSlug = 'ancient-greek-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Ancient Greek Name Generator',
    description: 'Generate ancient Greek-style names for characters, mythology, and historical fiction.',
    seoTitle: 'Ancient Greek Name Generator - Greek Names With Meaning',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          An ancient Greek name generator is a free online tool that creates Greek-style names for characters, mythology, and historical fiction. Get 1–24 names per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is an Ancient Greek Name Generator?</h2>
        <p>An ancient Greek name generator creates Greek-style names for characters, mythology, and historical fiction. Use it for stories, games, and worldbuilding. You get names inspired by ancient Greek culture and naming patterns at the click of a button. This free tool runs in your browser with no sign-up. For deity names with meanings try our <Link href="/god-goddess-name-generator">god and goddess name generator</Link>. For other naming tools see <Link href="/species-name-generator">species name generator</Link>, <Link href="/muslim-name-generator">Muslim name generator</Link>, <Link href="/naruto-name-generator">Naruto name generator</Link>, and our <Link href="/">homepage</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
        <h2>How to Use This Ancient Greek Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or notes.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server. When pasting lists from the web, use our <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. For other naming tools see our <Link href="/fallout-name-generator">Fallout name generator</Link>, <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>, <Link href="/tribe-name-generator">tribe name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>When to Use an Ancient Greek Name Generator</h2>
        <p>Use this generator when you need Greek-style names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Historical fiction and mythology-inspired stories</li>
          <li>Tabletop and video game character names</li>
          <li>Worldbuilding for ancient or classical settings</li>
          <li>Creative writing and education</li>
        </ul>
        <p>For deity names with optional meanings use our <Link href="/god-goddess-name-generator">god and goddess name generator</Link>. For other cultures try our <Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/muslim-name-generator">Muslim name generator</Link>, <Link href="/transformers-name-generator">Transformers name generator</Link>, or <Link href="/species-name-generator">species name generator</Link>.</p>
        <h2>Ancient Greek Naming Style</h2>
        <p>Ancient Greek names often use recognizable roots and patterns. This generator uses curated first and second elements and combines them at random so you get new combinations that fit that style. The output is for creative use; for strict historical accuracy verify with references. For other naming styles see our <Link href="/muslim-name-generator">Muslim name generator</Link>, <Link href="/korean-name-generator-male">Korean name generator (male)</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This ancient Greek name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list. For more naming tools—<Link href="/naruto-name-generator">Naruto</Link>, <Link href="/fallout-name-generator">Fallout</Link>, <Link href="/island-name-generator">island name generator</Link>, <Link href="/tribe-name-generator">tribe name generator</Link>—see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
        <h2>Ancient Greek vs God and Goddess Name Generator</h2>
        <p>The <Link href="/god-goddess-name-generator">god and goddess name generator</Link> focuses on deity names with cultures (Greek, Norse, Egyptian, Roman) and optional meanings. The ancient Greek name generator gives broader Greek-style character names—mortal and mythological. Use both: god and goddess for deities, ancient Greek for mortal or general Greek-style names. For creature names use the <Link href="/species-name-generator">species name generator</Link>. When pasting into a manuscript use our <Link href="/space-remover">space remover</Link> or <Link href="/strip-html">strip HTML</Link> if you copied from the web.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through our <Link href="/space-remover">space remover</Link> or <Link href="/strip-html">strip HTML</Link>. For more tools see our <Link href="/">homepage</Link>.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The ancient Greek name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences. For other mobile-friendly tools—<Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/fallout-name-generator">Fallout name generator</Link>, <Link href="/transformers-name-generator">Transformers name generator</Link>—see our <Link href="/">homepage</Link>.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for Greek-style names and our <Link href="/god-goddess-name-generator">god and goddess name generator</Link> for deities, or our <Link href="/naruto-name-generator">Naruto</Link>, <Link href="/fallout-name-generator">Fallout</Link>, or <Link href="/muslim-name-generator">Muslim name generator</Link> for other cultures. When assembling lists from multiple tools, keep a single naming document and use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link> when pasting from the web.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of Greek-style names can be time-consuming. An ancient Greek name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your characters. For other bulk naming see our <Link href="/god-goddess-name-generator">god and goddess name generator</Link>, <Link href="/muslim-name-generator">Muslim name generator</Link>, and <Link href="/species-name-generator">species name generator</Link>.</p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the ancient Greek name generator works</h3>
        <p>The tool uses curated Greek-style first and second name elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. For strict historical or linguistic accuracy verify with authoritative sources. For creature or deity names use our <Link href="/species-name-generator">species name generator</Link> and <Link href="/god-goddess-name-generator">god and goddess name generator</Link>.</p>
        <h2>Summary</h2>
        <p>Use this ancient Greek name generator to create Greek-style names for characters, mythology, and historical fiction. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For other naming styles see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an ancient Greek name generator?', answer: 'An ancient Greek name generator is an online tool that creates Greek-style names for characters, mythology, and historical fiction. You get names inspired by ancient Greek culture and naming patterns at the click of a button. This free tool runs in your browser with no sign-up. For deity names with meanings try our god and goddess name generator. For other naming tools see species name generator, Muslim name generator, Naruto name generator, and our homepage. For cleaning text use our strip HTML and space remover.' },
  { category: 'Usage', question: 'How do I use the ancient Greek name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your story, game doc, or notes. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server. When pasting lists from the web use our strip HTML and space remover. For other naming tools—Fallout, Elden Ring, tribe name generator—see our homepage.' },
  { category: 'General', question: 'Is the ancient Greek name generator free?', answer: 'Yes. This ancient Greek name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device. For other free naming tools—god and goddess, species, Muslim, Naruto, Fallout, Elden Ring, island, tribe—see our homepage. For cleaning pasted text use our free strip HTML and space remover tools.' },
  { category: 'Use cases', question: 'Can I use it for mythology?', answer: 'Yes. The ancient Greek name generator is designed for mythology-inspired stories, historical fiction, and creative projects. For deity names with optional meanings and multiple cultures (Greek, Norse, Egyptian, Roman), try our god and goddess name generator as well. Use this tool for mortal or general Greek-style names and the god and goddess generator for divine names. For creature names use the species name generator. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. See our homepage for more tools.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This ancient Greek name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. The same applies to our other name generators. For cleaning pasted text our strip HTML and space remover tools also process in the browser. See our homepage for the full tool list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The ancient Greek name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences. For other mobile-friendly naming tools—Naruto, Fallout, Elden Ring, Transformers—see our homepage. For cleaning text on the go use our strip HTML and space remover in the browser.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this ancient Greek name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document. When you combine lists from this generator with names from our god and goddess or Naruto name generator, use consistent formatting and our space remover if needed. See our homepage for more tools.' },
  { category: 'General', question: 'Are these real Greek names?', answer: 'This ancient Greek name generator uses styles inspired by ancient Greek naming. The combinations are produced by an algorithm from curated elements. Some names may resemble historical or mythological names; many are new combinations for creative use. Use for creative work; for strict historical or linguistic accuracy verify with authoritative sources. For other naming styles see our homepage.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes, for fiction and creative projects. Writers use the ancient Greek name generator for historical fiction, mythology-inspired stories, and worldbuilding. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. For deity names use our god and goddess name generator. For creature names use the species name generator. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. See our homepage for more tools.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have a god and goddess name generator (with meanings), species name generator, Muslim name generator, Naruto name generator, Fallout name generator, Elden Ring name generator, Transformers name generator, anime names generator, tribe name generator, island name generator, and others. See our homepage for the full list. For word play try the word descrambler. For cleaning pasted text use strip HTML and space remover.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this ancient Greek name generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through our space remover or strip HTML. For more tools see our homepage.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This ancient Greek name generator works without sign-up or login. The tool runs entirely in your browser. The same is true for our other name generators. For cleaning pasted text our strip HTML and space remover tools also work without an account. See our homepage for the full list of tools.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this ancient Greek name generator for Greek-style or classical character names. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates. For the same campaign you might use this generator for one culture and our Naruto or Fallout name generator for another. For creature names the species name generator produces binomial-style names. For deity names use the god and goddess name generator. For cleaning pasted text use our strip HTML and space remover. See our homepage for all naming tools.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The ancient Greek name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. The same applies to our other name generators. For cleaning pasted text our strip HTML and space remover tools also process in the browser when possible. See our privacy policy and homepage for more information.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this ancient Greek name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document. When you combine lists from this generator with names from the god and goddess or Naruto name generator, use consistent formatting and our space remover if needed. See our homepage.' },
  { category: 'General', question: 'How is this different from the god and goddess name generator?', answer: 'The god and goddess name generator focuses on deity names with cultures (Greek, Norse, Egyptian, Roman) and optional meanings. The ancient Greek name generator gives broader Greek-style character names—mortal and mythological. Use god and goddess for deities and this for mortal or general Greek-style names. For creature names use the species name generator. For other naming styles see our Naruto name generator, Muslim name generator, and homepage. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes. You can use names from this ancient Greek name generator in tabletop games, video games, and other creative or personal projects. The names fit classical or mythology-inspired settings. When building a game with multiple cultures you might use this generator for one faction and our Naruto or Fallout name generator for another. For creature or deity names use the species name generator and god and goddess name generator. For cleaning pasted lists use our strip HTML and space remover. See our homepage for the full tool list.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this ancient Greek name generator for Greek-style names and our god and goddess name generator for deities, or our Naruto name generator, Fallout name generator, or Muslim name generator for other cultures. For creature or species names use the species name generator. When you assemble lists from multiple tools keep a single naming document and use strip HTML and space remover when pasting from the web. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This ancient Greek name generator uses curated Greek-style first and second name elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only. For deity names see our god and goddess name generator. For binomial creature names see the species name generator. For cleaning pasted text use our strip HTML and space remover.' },
  { category: 'General', question: 'Is it good for historical fiction?', answer: 'Yes, as a starting point. Writers use this ancient Greek name generator for historical fiction and mythology-inspired stories. For strict historical or linguistic accuracy verify with authoritative sources. Run the generator multiple times to build a roster and keep a naming document. For deity names use our god and goddess name generator. For creature names use the species name generator. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. See our homepage for more tools.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this ancient Greek name generator in lessons on creative writing or history-related activities. Students might generate a list of names for characters in a historical or mythology-inspired story. Emphasize that the tool is for inspiration and that for strict accuracy they should verify with references. For cross-curricular naming activities pair this tool with the species name generator or god and goddess name generator. When students paste lists into documents, remind them to use our space remover or strip HTML if they copied from the web. See our homepage.' },
  { category: 'General', question: 'How do I cite the ancient Greek name generator?', answer: 'For academic or formal use you can cite this ancient Greek name generator as a source of inspiration for character names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution. For other tools you use the same principle applies. See our homepage for the full tool list.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this ancient Greek name generator multiple times to get variety; each run produces new random combinations. If you need deity names with meanings use our god and goddess name generator. If you need names from another culture—anime, post-apocalyptic, Muslim—use our Naruto name generator, Fallout name generator, or Muslim name generator. For creature names use the species name generator. When you combine lists from multiple tools keep a single naming document and use strip HTML and space remover when pasting from the web. See our homepage for all tools.' },
  { category: 'Use cases', question: 'Can I use the ancient Greek name generator for fan fiction?', answer: 'Yes. The ancient Greek name generator is designed for fan fiction, mythology-inspired stories, and creative projects. Use the names as a starting point for characters in historical or classical settings. Run the generator multiple times to build a roster and keep a naming document. For deity names use our god and goddess name generator. For creature names use the species name generator. When pasting names into a manuscript use our space remover or strip HTML if you copied from the web. See our homepage for more tools.' },
  { category: 'General', question: 'Greek names with meaning: where do I get them?', answer: 'This ancient Greek name generator produces Greek-style name combinations; it does not include a separate "meaning" field per name. For names with optional meanings (e.g. deity names with short descriptions), use our god and goddess name generator, which lets you choose Greek and other cultures and optionally include meanings. For creature names with a scientific style see the species name generator. For cleaning pasted text use our strip HTML and space remover. See our homepage for the full tool list.' },
];

export default async function AncientGreekNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="ancient-greek" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the ancient Greek name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
