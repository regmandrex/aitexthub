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
        <h2>Ancient Greek Name Generator - Greek Names for Characters and Mythology</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use an ancient Greek name generator to create Greek-style names for characters, mythology, and historical fiction. The tool runs in your browser and produces names inspired by ancient Greek culture and naming patterns at the click of a button. It is designed for writers, GMs, and educators who need many Greek-style names quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.
        </p>
        <p>
          People often search for &quot;ancient Greek name generator&quot; or &quot;Greek names with meaning&quot;; this page serves those intents. For deity names with optional meanings we also offer a god and goddess name generator on our site. Whether you are naming characters for historical fiction, a tabletop campaign, or a mythology-inspired story, the tool gives you a pool of ideas to choose from or adapt.
        </p>
        <h2>What Is an Ancient Greek Name Generator?</h2>
        <p>
          An ancient Greek name generator is an online tool that creates Greek-style names for characters, mythology, and historical fiction. You get names inspired by ancient Greek culture and naming patterns at the click of a button. The generator combines curated first and second name elements at random so each run produces new combinations. The output is for creative use only. This free tool runs in your browser with no sign-up.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the list and paste it into a document, then pick the names that fit your characters. Many users run the generator multiple times to build a roster and keep a naming document so they do not reuse the same name for two characters.
        </p>
        <h2>Why This Ancient Greek Name Generator Matters</h2>
        <p>
          Manually inventing dozens of Greek-style names can be time-consuming. An ancient Greek name generator produces many options in seconds. Instead of staring at a blank list, you get options that fit classical and mythology-inspired settings. You can run it on a phone or desktop, copy the names you like, and then assign them to characters. The tool is free and does not require an account.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. Writers and GMs can use it for unpublished projects without any data leaving their device.
        </p>
        <h2>How to Use This Ancient Greek Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or notes.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use an Ancient Greek Name Generator</h2>
        <p>Use this generator when you need Greek-style names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Historical fiction and mythology-inspired stories</li>
          <li>Tabletop and video game character names</li>
          <li>Worldbuilding for ancient or classical settings</li>
          <li>Creative writing and education</li>
        </ul>
        <p>It is ideal when you need many names at once or want to explore different combinations without inventing every name by hand. The generator outputs plain text, one name per line, so you can paste into your manuscript or campaign doc and pick the names that fit.</p>
        <h2>Use Cases in Detail: Fiction, Games, and Education</h2>
        <p>
          Historical fiction and mythology-inspired writers use the ancient Greek name generator to name mortal and mythological characters. Run the generator in batches and paste results into a naming document; then assign names to protagonists, supporting cast, and minor characters. For tabletop and video games, GMs and players use it for Greek-style or classical campaign settings. Keep a list of names already used so you do not repeat and so NPCs stay consistent. Educators use the tool in lessons on creative writing or history: students can generate a list of names for characters in a mythology-inspired story. Emphasize that the tool is for inspiration and that for strict historical or linguistic accuracy they should verify with references.
        </p>
        <p>
          The ancient Greek name generator gives broader Greek-style character names; it does not include a separate &quot;meaning&quot; field per name. For deity names with optional meanings and multiple cultures (Greek, Norse, Egyptian, Roman), use our god and goddess name generator. Use this tool for mortal or general Greek-style names and the god and goddess generator for divine names.
        </p>
        <h2>Ancient Greek Naming Style</h2>
        <p>Ancient Greek names often use recognizable roots and patterns. This generator uses curated first and second elements and combines them at random so you get new combinations that fit that style. The output is for creative use; for strict historical accuracy verify with references.</p>
        <h2>How the Ancient Greek Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated Greek-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of name ideas, one per line. You can copy the full list with one click and paste it into a document or notes app. To get more ideas, run the generator again; each run produces a new random set.
        </p>
        <p>
          The generator does not copy from specific historical records. It only produces new combinations from its word list. Use the output as inspiration; for strict historical or linguistic accuracy verify with authoritative sources.
        </p>
        <h2>Privacy and Local Processing</h2>
        <p>
          This ancient Greek name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. You can use the tool in a private or incognito window if you prefer.
        </p>
        <h2>Ancient Greek vs God and Goddess Name Generator</h2>
        <p>Our god and goddess name generator focuses on deity names with cultures (Greek, Norse, Egyptian, Roman) and optional meanings. The ancient Greek name generator gives broader Greek-style character names—mortal and mythological. Use the former for deities and this tool for mortal or general Greek-style names. When pasting into a manuscript from the web, a space remover or strip-HTML step can keep formatting clean.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool so formatting stays clean.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The ancient Greek name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for Greek-style names and other naming tools on our site for deities or other cultures. When assembling lists from multiple tools, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of Greek-style names can be time-consuming. An ancient Greek name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your characters.</p>
        <h2>Best Practices and Naming Documents</h2>
        <p>
          Run the generator in batches when you need many names. Paste each run into a single document and remove duplicates. If you are naming multiple characters for one story or campaign, keep a naming document and mark which names you have already used. When you paste from the web, use a space remover or strip-HTML step so formatting stays clean.
        </p>
        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run. There is no daily or total limit. If you need more than 24, run the generator again and paste the new list into your document. For very large casts, run the generator in batches and then sort or deduplicate. The tool is designed for quick, repeated use. No download or account is required.
        </p>
        <h2>Choosing and Refining Greek-Style Names</h2>
        <p>
          Run the generator multiple times and save names that fit your characters. For historical fiction, you may want names that sound more formal or archaic; for mythology-inspired stories, you might mix mortal and divine-sounding names. The god and goddess name generator on our site offers deity names with optional meanings if you need divine names. For this tool, use the output as inspiration and tweak spelling or combine elements if you want a specific feel. Keeping a naming document helps you avoid reusing the same name for two characters and keeps spelling consistent across the manuscript or campaign.
        </p>
        <p>
          When you build a long list from multiple runs, paste each run into one document and remove duplicates. If you paste from the web into a manuscript or spreadsheet, run the text through a space remover or strip-HTML tool so formatting stays clean. For strict historical or linguistic accuracy, verify names with authoritative sources; the generator is for creative use and inspiration only.
        </p>
        <h2>Quick Reference: Ancient Greek Name Generator at a Glance</h2>
        <p>
          The ancient Greek name generator produces 1–24 names per run, with no daily limit. Names are Greek-style and suitable for historical fiction, mythology-inspired stories, and tabletop games. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names, then paste into your document or naming list. For deity names with meanings use our god and goddess name generator; for more naming tools see our homepage.
        </p>
        <p>
          You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page and return whenever you need new Greek-style name ideas for characters, stories, or campaigns.
        </p>
        <h2>Running the Generator in Batches</h2>
        <p>
          When you need many Greek-style names—for example a cast for a historical novel or a roster of NPCs for a tabletop campaign—run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document so you have one master list. Then remove duplicates and pick the names that fit your characters. There is no daily or total limit; the tool is designed for repeated use. Keeping a naming document helps you track which names you have already used so you do not reuse the same name for two characters and so spelling stays consistent.
        </p>
        <p>
          For very large casts, run the generator in batches of 24 and paste each batch below the previous one. If you notice extra spaces or line breaks after pasting from the web, run the pasted text through a space remover or strip-HTML tool so the list stays tidy. The generator does not remember past runs; each run is independent and happens entirely in your browser. For strict historical or linguistic accuracy verify with authoritative sources; the generator is for creative use and inspiration only.
        </p>
        <h2>Who Uses an Ancient Greek Name Generator?</h2>
        <p>
          Historical fiction and mythology-inspired writers use the ancient Greek name generator to name mortal and mythological characters. Tabletop GMs and players use it for Greek-style or classical campaign settings. Educators use it in lessons on creative writing or history. The same tool serves all these use cases: set how many names you want, generate, copy, and paste into your document or naming list. No account or download is required.
        </p>
        <p>
          The generator gives broader Greek-style character names; it does not include a separate meaning field per name. For deity names with optional meanings and multiple cultures (Greek, Norse, Egyptian, Roman), use our god and goddess name generator. Use this tool for mortal or general Greek-style names. See our homepage for more naming tools.
        </p>
        <h2>No Download or Account Required</h2>
        <p>
          This ancient Greek name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want (1–24), and click generate. The tool is free and does not show ads or paywalls. You can bookmark the page and return whenever you need new Greek-style name ideas. Each run is independent; we do not save your history or preferences.
        </p>
        <p>
          There is no app to install and no login. The generator works on desktop, tablet, and phone in any modern browser. If you need names on the go, open the page on your phone, generate a short list, and copy it into notes or your manuscript.
        </p>
        <h2>Getting the Most Out of the Ancient Greek Name Generator</h2>
        <p>
          To get a strong set of Greek-style names, run the generator several times and paste all results into one document. Skim for names that fit your characters and remove the rest. Shortlist several options per character so you can choose the best fit. For deity names with optional meanings use our god and goddess name generator; for mortal or general Greek-style names this tool is the right choice. For strict historical or linguistic accuracy verify with authoritative sources; the generator is for creative use and inspiration only.
        </p>
        <p>
          The generator does not copy from specific historical records. It only produces new combinations from its word list. Use the output as inspiration; the goal is to speed up brainstorming, not to replace your own creativity or research.
        </p>
        <h2>Formatting and Pasting Names</h2>
        <p>
          After you copy names from the ancient Greek name generator, paste them into your story, game doc, or notes. The names are plain text, one per line. If you paste into a spreadsheet, each name can go in its own cell. If you notice extra spaces, line breaks, or stray characters after pasting—for example if you combined text from a webpage—run the pasted text through a space remover or strip-HTML tool so the list stays tidy and consistent.
        </p>
        <h2>Typical Workflow for the Ancient Greek Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into your manuscript or naming file. If you need more names, run the generator again and append the new list to the same document. Remove duplicates and pick the names that fit your characters. For historical fiction or tabletop games, assign one name per character and keep a naming document so you do not reuse the same name. For deity names with meanings use our god and goddess name generator.
        </p>
        <p>
          The whole process takes a few minutes. No account or download is required. The generator runs in your browser and does not store your choices or the generated names. Each run produces a new random set of Greek-style names. For strict historical accuracy verify with authoritative sources. For more naming tools see our homepage.
        </p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the ancient Greek name generator works</h3>
        <p>The tool uses curated Greek-style first and second name elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. For strict historical or linguistic accuracy verify with authoritative sources.</p>
        <h2>Summary</h2>
        <p>Use this ancient Greek name generator to create Greek-style names for characters, mythology, and historical fiction. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. Keep a naming document to avoid reusing names; for strict historical accuracy verify with authoritative sources. You can run it on any device in a modern browser. No download or account is required.</p>
        <p>For deity names with optional meanings use our god and goddess name generator. Run the generator in batches when you need many names; paste each run into one document and remove duplicates. Names are created locally and are not sent to our servers. For more naming and text tools, see our <Link href="/">homepage</Link>.</p>
        <p>The generator produces Greek-style name combinations for creative use. For strict historical or linguistic accuracy verify with authoritative sources. The tool is free, browser-only, and works on desktop and mobile. No sign-up or download is required. Use it alongside our god and goddess name generator when you need both mortal and deity names. For other naming and text tools see our homepage.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an ancient Greek name generator?', answer: 'An ancient Greek name generator is an online tool that creates Greek-style names for characters, mythology, and historical fiction. You get names inspired by ancient Greek culture and naming patterns at the click of a button. This free tool runs in your browser with no sign-up. For deity names with optional meanings we also offer a god and goddess name generator on our site.' },
  { category: 'Usage', question: 'How do I use the ancient Greek name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your story, game doc, or notes. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is the ancient Greek name generator free?', answer: 'Yes. This ancient Greek name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for mythology?', answer: 'Yes. The ancient Greek name generator is designed for mythology-inspired stories, historical fiction, and creative projects. For deity names with optional meanings and multiple cultures (Greek, Norse, Egyptian, Roman), try our god and goddess name generator as well. Use this tool for mortal or general Greek-style names and the god and goddess generator for divine names.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This ancient Greek name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The ancient Greek name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this ancient Greek name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document.' },
  { category: 'General', question: 'Are these real Greek names?', answer: 'This ancient Greek name generator uses styles inspired by ancient Greek naming. The combinations are produced by an algorithm from curated elements. Some names may resemble historical or mythological names; many are new combinations for creative use. Use for creative work; for strict historical or linguistic accuracy verify with authoritative sources.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes, for fiction and creative projects. Writers use the ancient Greek name generator for historical fiction, mythology-inspired stories, and worldbuilding. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for god and goddess (with meanings), species, Muslim, Naruto, Fallout, Elden Ring, Transformers, anime, tribe, island, and others. See our homepage for the full list.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this ancient Greek name generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through a space remover or strip-HTML tool so the list stays tidy.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This ancient Greek name generator works without sign-up or login. The tool runs entirely in your browser.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this ancient Greek name generator for Greek-style or classical character names. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The ancient Greek name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this ancient Greek name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document.' },
  { category: 'General', question: 'How is this different from the god and goddess name generator?', answer: 'The god and goddess name generator focuses on deity names with cultures (Greek, Norse, Egyptian, Roman) and optional meanings. The ancient Greek name generator gives broader Greek-style character names—mortal and mythological. Use god and goddess for deities and this for mortal or general Greek-style names.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes. You can use names from this ancient Greek name generator in tabletop games, video games, and other creative or personal projects. The names fit classical or mythology-inspired settings.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this ancient Greek name generator for Greek-style names and other naming tools on our site for deities or other cultures. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This ancient Greek name generator uses curated Greek-style first and second name elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Is it good for historical fiction?', answer: 'Yes, as a starting point. Writers use this ancient Greek name generator for historical fiction and mythology-inspired stories. For strict historical or linguistic accuracy verify with authoritative sources. Run the generator multiple times to build a roster and keep a naming document.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this ancient Greek name generator in lessons on creative writing or history-related activities. Students might generate a list of names for characters in a historical or mythology-inspired story. Emphasize that the tool is for inspiration and that for strict accuracy they should verify with references.' },
  { category: 'General', question: 'How do I cite the ancient Greek name generator?', answer: 'For academic or formal use you can cite this ancient Greek name generator as a source of inspiration for character names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this ancient Greek name generator multiple times to get variety; each run produces new random combinations. If you need deity names with meanings use our god and goddess name generator. If you need names from another culture, see our homepage for the full list of naming tools.' },
  { category: 'Use cases', question: 'Can I use the ancient Greek name generator for fan fiction?', answer: 'Yes. The ancient Greek name generator is designed for fan fiction, mythology-inspired stories, and creative projects. Use the names as a starting point for characters in historical or classical settings. Run the generator multiple times to build a roster and keep a naming document.' },
  { category: 'General', question: 'Greek names with meaning: where do I get them?', answer: 'This ancient Greek name generator produces Greek-style name combinations; it does not include a separate "meaning" field per name. For names with optional meanings (e.g. deity names with short descriptions), use our god and goddess name generator, which lets you choose Greek and other cultures and optionally include meanings.' },
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
