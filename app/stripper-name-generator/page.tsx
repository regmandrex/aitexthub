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

const toolSlug = 'stripper-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Stripper Name Generator',
    description: 'Generate stage names for performers and creative personas.',
    seoTitle: 'Stripper Name Generator - Stage Names Free',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Stripper Name Generator - Stage Names for Performers</h2>
        <h2>Introduction</h2>
        <p>This guide explains how to use a stripper name generator (or stage name generator) to create stage names for performers and creative personas. The tool runs in your browser and produces memorable stage-name ideas at the click of a button. It is designed for anyone who needs stage name inspiration quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.</p>
        <p>People search for stripper name generator or stage name ideas; this page serves those intents with one free generator. For other stage-name styles try our <Link href="/drag-queen-name-generator">drag queen name generator</Link> or <Link href="/wrestling-name-generator">wrestling name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>What Is a Stripper Name Generator?</h2>
        <p>A stripper name generator creates stage names for performers and creative personas. You get memorable stage-name ideas at the click of a button. The generator combines curated stage-name-style elements at random so each run produces new combinations. The output is for inspiration only. This free tool runs in your browser with no sign-up.</p>
        <p>The output is plain text, one name per line. You can copy the list and paste it into a notes app, then pick the name that fits your persona or character.</p>
        <h2>Why This Stripper Name Generator Matters</h2>
        <p>Choosing a memorable stage name can be tricky. A stripper name generator speeds up brainstorming. You get options in seconds. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>
        <h2>How to Use This Stripper Name Generator</h2>
        <p>Follow these steps: set how many names you want per run (1–24); click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; paste into your notes and pick one; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Stripper Name Generator</h2>
        <p>Use this generator when you need stage name ideas quickly. Key use cases: performer stage names; character names for fiction or roleplay; creative personas. The output is for inspiration only; pick a name you like and make it yours.</p>
        <h2>Use Cases in Detail</h2>
        <p>Performers use the stripper name generator when choosing or refreshing a stage name. Writers and roleplayers use it for character names. Run the generator multiple times to build a shortlist. For other stage-name styles try our drag queen or wrestling name generator; see our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Stage Naming Style</h2>
        <p>Stage names often use bold, memorable word combinations. This generator uses curated stage-name-style first and second elements and combines them at random so you get new combinations. The output is for creative use only.</p>
        <h2>How the Stripper Name Generator Works (Step by Step)</h2>
        <p>When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated elements in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into a notes app. To get more ideas, run the generator again.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This stripper name generator runs entirely in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many name ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>
        <h2>No Download or Account Required</h2>
        <p>This stripper name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Stripper Name Generator?</h2>
        <p>Performers use it when choosing or refreshing a stage name. Writers and roleplayers use it for character names. The same tool works for creative personas. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the Stripper Name Generator</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your persona or character. For other stage-name styles try our drag queen or wrestling name generator; see our homepage for the full list.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated stage-name-style first and second elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only.</p>
        <h2>Combining With Other Generators</h2>
        <p>Use this generator for stage names and our drag queen or wrestling name generator for other styles. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app and pick the name that fits. Run the generator again for more options. No account or download is required.</p>
        <h2>Quick Reference: Stripper Name Generator at a Glance</h2>
        <p>The stripper name generator produces 1–24 names per run, with no daily limit. Names are stage-name style and suitable for performers and creative personas. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access.</p>
        <h2>Choosing and Refining a Stage Name</h2>
        <p>Once you have a shortlist from the stripper name generator, consider how the name sounds out loud and how it looks in print. Short, memorable names often work well for stage use. Avoid names that are hard to spell or pronounce if you want audiences to find you easily. You can tweak a generated name (e.g. change one word or add a letter) to make it unique. The generator is there to spark ideas; the final choice is yours.</p>
        <p>If you perform under a stage name in a professional context, check whether you need to register a business name or use a DBA (doing business as) in your area. The generator does not give legal or business advice; it only supplies name ideas. For other creative name styles try our drag queen or wrestling name generator.</p>
        <h2>Stage Names in Different Contexts</h2>
        <p>Stage names are used in many contexts: performance, streaming, roleplay, and fiction. The stripper name generator can serve any of these. For performance or streaming, pick a name that fits your persona and is easy to remember. For fiction or roleplay, generate a batch and choose names that fit your characters. The same list can inspire both real-stage and character names; how you use the names is up to you.</p>
        <h2>No Download or Registration</h2>
        <p>You do not need to install an app or create an account to use this stripper name generator. Open the page in any modern browser, set the number of names you want (1–24), and click generate. The tool works on desktop, tablet, and phone. Names are created in your browser and are not sent to our servers, so you can use the generator in private or incognito mode if you prefer.</p>
        <h2>Frequently Asked Questions About Stage Names</h2>
        <p>People often ask whether generated names are already in use. The tool combines curated elements at random, so many combinations will be new; some may resemble existing names. Use the output as inspiration and pick a name that feels right for you. If you need a different style (e.g. drag or wrestling persona), try our drag queen name generator or wrestling name generator. For a full list of naming and text tools see our homepage.</p>
        <h2>Batch Generation and Building a Shortlist</h2>
        <p>To build a shortlist quickly, run the stripper name generator several times with 12 or 24 names per run. Copy each batch into a single document and skim for names that stand out. You can then narrow down to a few finalists and try saying them out loud or writing them in different contexts. The generator does not limit how many times you run it; there is no daily cap. Paste all results in one place and remove duplicates if needed.</p>
        <p>If you are naming multiple characters (e.g. for a story or roleplay), generate a larger batch and assign names from the list. Keep a note of which name belongs to which character to avoid reuse. For other name styles use our drag queen or wrestling name generator or browse our homepage for more tools.</p>
        <h2>Tips for Memorable Stage Names</h2>
        <p>Short names are often easier for audiences to remember and say. If a generated name feels long, consider shortening it or using a single word from the combination. Alliteration (e.g. matching first letters) can make a name stick. The stripper name generator gives you raw material; you can tweak spelling or add a middle word to make a name unique. Run the generator often and keep a running list of favourites until you decide.</p>
        <p>If you perform in more than one context (e.g. stage and social media), use the same stage name everywhere so people can find you. The generator does not check whether a name is already in use; that is your responsibility. For more name ideas try our drag queen or wrestling name generator or see our homepage.</p>
        <p>You can run the generator in private or incognito mode; names are created in your browser and are not sent to our servers. There is no daily limit and no account required. Bookmark the page for quick access when you need new ideas.</p>
        <h2>Formatting and Pasting Generated Names</h2>
        <p>The stripper name generator outputs one name per line in plain text. When you paste into a notes app or document, the formatting is preserved. If you see extra spaces or odd line breaks after pasting from the web, run the text through a space remover or strip-HTML tool. Our site has both; see the homepage for links. The Copy button copies all names at once so you can paste them wherever you need.</p>
        <h2>Summary</h2>
        <p>Use this stripper name generator to create stage name ideas for performers and creative personas. Set the number of names (1–24) and run as often as you like. Copy results into your notes. The tool runs locally in your browser with no sign-up. For other naming tools—drag queen, wrestling, anime names, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool. You get up to 24 names per run with no daily limit. Bookmark the page for quick access.</p>
        <p>The free stripper name generator (stage name generator) requires no account and does not store or send your data. Names are created in your browser only. Run it in batches to build a shortlist, then pick the name that fits your persona or character. For different stage-name styles try our drag queen or wrestling name generator. No download is required and the tool works on all devices. Use the Copy button to grab all names at once and paste them into your notes.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a stripper name generator?', answer: 'A stripper name generator is an online tool that creates stage names for performers and creative personas. You get memorable stage-name ideas at the click of a button. This free tool runs in your browser with no sign-up. The output is for inspiration only; pick a name you like and make it yours.' },
  { category: 'Usage', question: 'How do I use the stripper name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your notes and pick the name that fits your persona or character. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This stripper name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for a stage name?', answer: 'Yes. The stripper name generator is designed for stage name inspiration. Run the generator multiple times to get a shortlist, then pick the name that fits your persona. The output is for inspiration only; make it yours.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This stripper name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The stripper name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this stripper name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have drag queen, wrestling, anime names, and many others for character and stage names. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this stripper name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This stripper name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for a character?', answer: 'Yes. Writers and roleplayers use the stripper name generator for character names in creative projects and fiction. Run the generator multiple times to get a shortlist and pick the name that fits your character. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The stripper name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this stripper name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why "stripper" name generator?', answer: 'People often search for stage names in that context. The tool provides ideas for performers and creative use. The same generator works for any stage name need; pick a name you like and make it yours.' },
  { category: 'Use cases', question: 'Can I use it for roleplay?', answer: 'Yes. The stripper name generator is useful for roleplay character names or creative personas. Run the generator multiple times to get options that fit your character. The tool is free and runs in your browser with no sign-up.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this stripper name generator for stage-style names and our drag queen or wrestling name generator for other stage-name styles. When you assemble lists from multiple tools keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This stripper name generator uses curated stage-name-style first and second elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Are these real stage names?', answer: 'The names are algorithm-generated from curated elements. Some combinations may resemble existing names; many are new. Use the output for inspiration only. The tool does not copy from any real performer.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this stripper name generator for creative writing or character creation in appropriate contexts. Students might generate a list of stage-style names for characters. Emphasize that the tool is for inspiration and creative use only.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this stripper name generator as a source of inspiration for stage or character names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this stripper name generator multiple times to get variety; each run produces new random combinations. If you need a different stage style try our drag queen name generator or wrestling name generator. See our homepage for the full list of naming tools.' },
  { category: 'Use cases', question: 'Can I use it for a performer persona?', answer: 'Yes. The stripper name generator is designed for performer stage names and creative personas. Run the generator multiple times to get a shortlist and pick the name that fits. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Can I use it in private or incognito mode?', answer: 'Yes. The stripper name generator runs in your browser and works in private or incognito windows. Names are created locally and are not sent to our servers. No account or login is required.' },
];

export default async function StripperNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="stripper" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the stripper name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
