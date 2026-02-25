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

const toolSlug = 'drag-queen-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Drag Queen Name Generator',
    description: 'Generate drag queen and performer stage names for creative and entertainment use.',
    seoTitle: 'Drag Queen Name Generator - Stage Names Free',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Drag Queen Name Generator - Stage Names and Performer Names</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a drag queen name generator to create stage names for performers and creative personas. The tool runs in your browser and produces glamorous, punny, or memorable name ideas at the click of a button. It is designed for performers, writers, and anyone who needs stage-name inspiration quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.
        </p>
        <p>
          People search for drag queen name generators or stage name ideas for performance and creative use. This page serves those intents with one free generator. The output is for inspiration only; pick a name you like and make it yours. For other naming styles we have a stripper name generator (stage names), anime names generator, and silly name generator on our site. For cleaning pasted text use our strip HTML and space remover tools; see our <Link href="/">homepage</Link> for the full list.
        </p>
        <h2>What Is a Drag Queen Name Generator?</h2>
        <p>
          A drag queen name generator is an online tool that creates stage names for performers and creative personas. You get glamorous, punny, or memorable name ideas at the click of a button. The generator combines curated word elements at random so each run produces new combinations. The output is for inspiration and creative use only. This free tool runs in your browser with no sign-up.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the list and paste it into a notes app, then pick the name that fits your persona or character. Many users run the generator multiple times to build a shortlist before deciding.
        </p>
        <h2>Why This Drag Queen Name Generator Matters</h2>
        <p>
          Choosing a memorable stage name can be tricky. A drag queen name generator speeds up brainstorming. Instead of staring at a blank page, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then refine or combine ideas. The tool is free and does not require an account.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer.
        </p>
        <h2>How to Use This Drag Queen Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app and pick the name that fits your persona or character.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Drag Queen Name Generator</h2>
        <h2>When to Use a Drag Queen Name Generator</h2>
        <p>Use this generator when you need stage name ideas quickly. Key use cases: performer or drag stage names; character names for fiction or roleplay; creative personas for social media or content; fun name ideas for events or parties. The output is for inspiration only; the tool is designed for creative and entertainment use in a respectful context. Run the generator multiple times to build a shortlist before deciding on a name.</p>
        <h2>Use Cases in Detail: Performance, Characters, and Creative Personas</h2>
        <p>
          Performers use the drag queen name generator when choosing or refreshing a stage name. Writers and roleplayers use it for character names in fiction or games. Content creators use it for creative personas or handles. The same tool works for events, parties, or fun—run it multiple times to get a shortlist. For other styles try our silly name generator or anime names generator; see our <Link href="/">homepage</Link> for the full list.
        </p>
        <p>
          The generator does not copy from any real performer. It only produces new combinations from its word list. Use the output for inspiration and creative use; the final choice and how you use the name are yours. For stage names in a different style try our stripper name generator; for fun or silly names try our silly name generator.
        </p>
        <h2>Drag Queen and Stage Naming Style</h2>
        <p>Stage names in drag and performance often use bold, memorable word combinations—glamorous, punny, or theatrical. This generator uses curated elements and combines them at random so you get new combinations in that style. The output is for creative use only. Use names in a respectful context.</p>
        <h2>How the Drag Queen Name Generator Works (Step by Step)</h2>
        <p>When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated word elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again.</p>
        <p>The generator does not copy from any real performer or existing stage names. It only produces new combinations from its word list. Use the output as inspiration; you can refine or combine elements to create the name that fits your persona or character.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This drag queen name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Formatting and Pasting Names</h2>
        <p>After you copy names from the drag queen name generator, paste them into your notes app or document. The names are plain text, one per line. If you paste from the web and see extra spaces or line breaks, run the pasted text through a space remover or strip-HTML tool so the list stays tidy. Then pick the name that fits your persona or character.</p>
        <h2>Tips for Choosing a Stage Name</h2>
        <p>Pick a name that is easy to remember and that fits your persona or character. Run the generator multiple times to get a shortlist. You can refine or combine elements—the generator gives you ideas; the final choice is yours. Use the name in a respectful context. For other naming styles try our silly name generator or anime names generator; see our homepage for the full list.</p>
        <p>When you have a shortlist, say the names aloud to see how they sound. Stage names often work best when they are memorable and fit the tone you want. The tool is free and runs in your browser with no sign-up; use it whenever you need new stage name ideas.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many name ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required. Paste multiple runs into one document and remove duplicates to build a long shortlist before deciding.</p>
        <h2>No Download or Account Required</h2>
        <p>This drag queen name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Drag Queen Name Generator?</h2>
        <p>Performers use it when choosing or refreshing a stage name. Writers and roleplayers use it for character names. Content creators use it for creative personas. The same tool works for fun at events or parties. No account or download is required on our site.</p>
        <p>The generator is designed for creative and entertainment use. Use the output for inspiration; pick a name that fits your persona or character and use it in a respectful context. For other naming tools see our homepage.</p>
        <h2>Getting the Most Out of the Drag Queen Name Generator</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your persona or character. You can refine or combine elements—the generator gives you ideas; the final choice is yours. For other naming styles try our silly name generator or anime names generator; see our homepage for the full list.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually brainstorming dozens of stage names can be time-consuming. A drag queen name generator produces many options in seconds. Run it repeatedly and pick the name that best fits your persona or character. The tool is free and runs in your browser with no sign-up.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated word elements and combines them at random in your browser. Each run is different. No names or settings are sent to a server. The output is for creative use only. The generator does not copy from any real performer; use the output for inspiration in a respectful context.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for stage-style names and our silly name generator for fun names or our anime names generator for character names. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app and pick the name that fits. Run the generator again for more options. The whole process takes a few minutes. No account or download is required.</p>
        <h2>Quick Reference: Drag Queen Name Generator at a Glance</h2>
        <p>The drag queen name generator produces 1–24 names per run, with no daily limit. Names are stage-name style and suitable for performers, characters, and creative personas. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage. No account or download is required. Bookmark the page for quick access.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access. Names are for inspiration only; use them in a respectful and creative context. The tool is free and works on desktop and mobile.</p>
        <h2>Summary</h2>
        <p>Use this drag queen name generator to create stage name ideas for performers, characters, and creative personas. Set the number of names (1–24) and run as often as you like. Copy results into your notes. The tool runs locally in your browser with no sign-up. Pick a name that fits and use it in a respectful context. Names are created locally and are not sent to our servers. Each run produces a new random set.</p>
        <p>For other naming tools—stripper name generator, silly name generator, anime names, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool. The generator is free and works on any device; bookmark the page for quick access when you need new stage name ideas. No sign-up or download is required.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag queen name generator?', answer: 'A drag queen name generator is an online tool that creates stage names for performers and creative personas. You get glamorous, punny, or memorable name ideas for entertainment and character use. This free tool runs in your browser with no sign-up. The output is for inspiration only; pick a name you like and make it yours.' },
  { category: 'Usage', question: 'How do I use the drag queen name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into a notes app and pick the name that fits your persona or character. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This drag queen name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for a stage name?', answer: 'Yes. The drag queen name generator is designed for stage name inspiration. Run the generator multiple times to get a shortlist, then pick the name that fits your persona. The output is for inspiration only; make it yours and use it in a respectful context.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This drag queen name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The drag queen name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this drag queen name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'Are these real drag queen names?', answer: 'The names are algorithm-generated from curated word elements. Some combinations may resemble existing names; many are new. Use the output for inspiration only. The tool does not copy from any real performer; use names in a respectful and creative context.' },
  { category: 'Use cases', question: 'Can I use the names for a character?', answer: 'Yes. Writers and roleplayers use the drag queen name generator for character names in fiction, games, or creative projects. Run the generator multiple times to get a shortlist and pick the name that fits your character. The tool is free and runs in your browser with no sign-up.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have a stripper name generator (stage names), silly name generator, anime names generator, and many others for character and creative names. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this drag queen name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This drag queen name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for roleplay?', answer: 'Yes. The drag queen name generator is useful for roleplay character names or creative personas. Run the generator multiple times to get options that fit your character. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The drag queen name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this drag queen name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why stage names?', answer: 'Drag and performance often use memorable stage names that are bold, glamorous, or punny. The generator offers ideas in that style for performers, characters, and creative personas. Use the output for inspiration and creative use in a respectful context.' },
  { category: 'Use cases', question: 'Can I use the names for social media?', answer: 'Yes. You can use the drag queen name generator for creative personas or handles on social media. Run the generator to get ideas, then pick a name that fits. If it matters to you, ensure the name is not already in use on your platform.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this drag queen name generator for stage-style names and our silly name generator for fun names or our anime names generator for character style. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This drag queen name generator uses curated first and second word elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Is the drag queen name generator respectful?', answer: 'The tool is designed for creative and entertainment use. Use the generated names in a respectful context. The output is for inspiration; the final choice and how you use it are yours.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this drag queen name generator for creative writing or performance-related activities. Students might generate a list of stage names for characters or performance projects. Emphasize that the tool is for inspiration and that names should be used in a respectful context.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this drag queen name generator as a source of inspiration for stage or character names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this drag queen name generator multiple times to get variety; each run produces new random combinations. If you need a different style try our silly name generator for fun names or our anime names generator for character names. See our homepage for the full list of naming tools.' },
];

export default async function DragQueenNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="drag-queen" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the drag queen name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
