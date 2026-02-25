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

const toolSlug = 'korean-name-generator-male';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Korean Name Generator (Male)',
    description: 'Generate Korean male names for characters, stories, and creative projects.',
    seoTitle: 'Korean Name Generator Male - Korean Male Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Korean Name Generator (Male) - Korean Male Names for Creative Projects</h2>
        <h2>Introduction</h2>
        <p>This guide explains how to use a Korean name generator (male)—also searched as Korean male name generator—to create Korean male names for characters, stories, and creative projects. The tool runs in your browser and produces names in Korean order (family name + given name, e.g. Kim Min-ho) at the click of a button. It is designed for anyone who needs Korean male name inspiration quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.</p>
        <p>People search for Korean name generator male or Korean male names; this page serves those intents with one free generator. For nicknames try our <Link href="/korean-nickname-generator">Korean nickname generator</Link>. For other naming see <Link href="/muslim-name-generator">Muslim name generator</Link>, <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, and our <Link href="/">homepage</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
        <h2>What Is a Korean Name Generator (Male)?</h2>
        <p>A Korean name generator (male) creates Korean male names for characters, stories, and creative projects. You get family name + given name in Korean order (e.g., Kim Min-ho). The generator combines curated Korean family names and male given-name elements at random so each run produces new combinations. The output is for inspiration only. This free tool runs in your browser with no sign-up.</p>
        <p>The output is plain text, one name per line. You can copy the list and paste it into a notes app, then pick the name that fits your character or project. For cultural accuracy in serious work, verify with references.</p>
        <h2>Why This Korean Name Generator (Male) Matters</h2>
        <p>Choosing believable Korean male names for characters can be tricky. A Korean name generator male speeds up brainstorming. You get options in seconds. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>
        <h2>How to Use This Korean Name Generator (Male)</h2>
        <p>Follow these steps: set how many names you want per run (1–24); click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; paste into your notes and pick one; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Korean Name Generator (Male)</h2>
        <p>Use this generator when you need Korean male name ideas quickly. Key use cases: fiction and novels; tabletop RPGs and games; creative writing and roleplay. The output is for inspiration only; for serious cultural accuracy verify with references.</p>
        <h2>Use Cases in Detail</h2>
        <p>Writers use the Korean name generator male when creating characters for fiction. Gamers use it for tabletop RPGs and video game characters. Run the generator multiple times to build a shortlist. For nicknames (any gender) try our Korean nickname generator; for other culture names see our Muslim or ancient Greek name generator and our <Link href="/">homepage</Link>.</p>
        <h2>Korean Naming Style</h2>
        <p>Korean names typically use family name first, then given name (e.g., Kim Min-ho). This generator uses curated Korean family names and male given-name elements and combines them at random so you get new combinations. The output is for creative use only; verify with references for cultural accuracy.</p>
        <h2>How the Korean Name Generator (Male) Works (Step by Step)</h2>
        <p>When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated Korean family and given-name elements in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into a notes app. To get more ideas, run the generator again.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This Korean name generator (male) runs entirely in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many name ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>
        <h2>No Download or Account Required</h2>
        <p>This Korean name generator (male) runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Korean Name Generator (Male)?</h2>
        <p>Writers use it when creating characters for fiction. Gamers use it for tabletop RPGs and video game characters. The same tool works for creative writing and roleplay. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the Korean Name Generator (Male)</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your character or project. For nicknames (any gender) try our Korean nickname generator; for other culture names see our homepage.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated Korean family names and male given-name elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only; verify with references for cultural accuracy.</p>
        <h2>Combining With Other Generators</h2>
        <p>Use this generator for Korean male names and our Muslim or ancient Greek name generator for other culture names. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app and pick the name that fits your character. Run the generator again for more options. No account or download is required.</p>
        <h2>Quick Reference: Korean Name Generator (Male) at a Glance</h2>
        <p>The Korean name generator (male) produces 1–24 names per run, with no daily limit. Names are in Korean order (family + given name) and suitable for characters and creative projects. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access.</p>
        <h2>Korean Name Order and Format</h2>
        <p>Korean names usually put the family name first, then the given name (e.g. Kim Min-ho). This Korean name generator male follows that order. The output is in Romanized form so you can use it in English-language fiction, games, or roleplay. If you need the names in Hangul or for formal use, use the generated names as a base and verify spelling and usage with references or a native speaker.</p>
        <p>Different Romanization systems exist (e.g. Revised Romanization, McCune-Reischauer). This tool uses a common Romanization style for readability. For projects that require a specific system, you can adapt the spelling. The generator is for inspiration; it does not guarantee compliance with any single standard.</p>
        <h2>Using Korean Male Names in Fiction and Games</h2>
        <p>Writers and game designers use the Korean name generator male to quickly get a list of plausible Korean male names. Run the generator several times and paste the results into a single document. When you pick a name for a character, consider whether the family name and given name fit the setting and era. For serious historical or cultural accuracy, cross-check with references. For nicknames or a lighter tone, try our Korean nickname generator.</p>
        <h2>Why Use a Korean Name Generator?</h2>
        <p>Coming up with believable Korean male names for multiple characters can be time-consuming. This Korean name generator male produces names in the correct order (family + given) so you can focus on story or game design. Run it as often as you like and copy the results into your notes. The tool is free and runs in your browser with no sign-up. For other naming tools—Muslim, ancient Greek, anime—see our homepage.</p>
        <h2>Batch Generation and Building a Shortlist</h2>
        <p>Run the Korean name generator male several times with 12 or 24 names per run. Copy each batch into a single document and pick names that fit your characters or project. The generator has no daily limit. For nicknames (any gender) try our Korean nickname generator; for other culture names see our Muslim or ancient Greek name generator and our homepage.</p>
        <p>When you assign names to characters, note the family name and given name so you use them consistently (e.g. in dialogue or credits). For serious cultural or historical accuracy verify with references or native speakers. The generator is for inspiration only.</p>
        <h2>Tips for Using Korean Male Names in Stories</h2>
        <p>Use the Korean name generator male to get a list of names in the correct order (family + given). In dialogue or narration you can use the full name or the given name depending on formality. Keep a note of each character’s family name so you stay consistent. For historical or period pieces, verify that the name elements were in use in that era.</p>
        <p>The generator is free and runs in your browser with no sign-up. Run it multiple times to build a list, then pick names that fit your characters. For nicknames (any gender) try our Korean nickname generator; for other culture names see our homepage.</p>
        <p>Names are created in your browser and are not sent to our servers. There is no daily limit and no account required. The output is for creative use; verify with references when you need cultural or historical accuracy.</p>
        <p>Run the generator multiple times and paste results into one document. For nicknames try our Korean nickname generator; for other culture names see our Muslim or ancient Greek name generator on our homepage. The tool runs in your browser with no sign-up and no daily limit. Use the Copy button to copy all names at once.</p>
        <h2>Formatting and Pasting Generated Names</h2>
        <p>The Korean name generator male outputs one name per line in plain text (Romanized). When you paste into a notes app or document, the formatting is preserved. If you see extra spaces or odd line breaks after pasting from the web, run the text through a space remover or strip-HTML tool. Our site has both; see the homepage for links. Use the Copy button to copy all names at once.</p>
        <h2>Summary</h2>
        <p>Use this Korean name generator (male) to create Korean male names for characters, stories, and creative projects. Set the number of names (1–24) and run as often as you like. Copy results into your notes. The tool runs locally in your browser with no sign-up. For nicknames try our Korean nickname generator; for other naming tools—Muslim, ancient Greek, anime names, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool. This free Korean male name generator requires no account.</p>
        <p>The generator is free, requires no account, and does not store or send your data. Names are created in your browser only and follow Korean order (family + given name). For nicknames (any gender) try our Korean nickname generator; for other culture names see our homepage.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Korean name generator male?', answer: 'A Korean name generator male is an online tool that creates Korean male names for characters, stories, and creative projects. You get names in Korean order (family + given name, e.g. Kim Min-ho). This free tool runs in your browser with no sign-up. The output is for inspiration only; verify with references for cultural accuracy in serious work.' },
  { category: 'Usage', question: 'How do I use the Korean name generator male?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your notes and pick the name that fits your character or project. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This Korean name generator (male) is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use it for fiction?', answer: 'Yes. The Korean name generator male is designed for characters and creative projects including fiction. Run the generator multiple times to get a shortlist and pick the name that fits your character. For serious cultural accuracy verify with references.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Korean name generator (male) runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Korean name generator (male) runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Korean name generator (male). If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'How is this different from the Korean nickname generator?', answer: 'The Korean nickname generator focuses on nicknames (e.g. cute, cool) and can be used for any gender. This tool generates full male names (family + given) in Korean style for characters and creative projects. Use the nickname generator for casual or playful names.' },
  { category: 'Use cases', question: 'Can I use the names in a book?', answer: 'Yes. The Korean name generator male is suitable for fiction and creative projects including books. Use the names as inspiration; for serious cultural accuracy verify with references or native speakers. The tool is free and runs in your browser with no sign-up.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have Muslim, ancient Greek, anime names, Korean nickname generator, and many others. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this Korean name generator (male) to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Korean name generator (male) works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. The Korean name generator male is useful for tabletop RPG character names. Run the generator multiple times to get options that fit your character. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The Korean name generator (male) runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Korean name generator (male) gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why male only?', answer: 'People often search specifically for "Korean name generator male." This page serves that intent. For nicknames that can be used for any gender try our Korean nickname generator. We may add a female-focused generator in the future; see our homepage for updates.' },
  { category: 'Use cases', question: 'Can I use the names for games?', answer: 'Yes. The Korean name generator male is suitable for video game characters, tabletop RPGs, and other creative projects. Run the generator multiple times to get a shortlist and pick the name that fits. The tool is free and runs in your browser with no sign-up.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this Korean name generator (male) for Korean male names and our Muslim or ancient Greek name generator for other culture names. When you assemble lists from multiple tools keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This Korean name generator (male) uses curated Korean family names and male given-name elements. When you click generate, the tool randomly combines these in your browser in Korean order (family + given) so each run is different. No names or settings are sent to a server. The result is for creative use only.' },
  { category: 'General', question: 'Are these real Korean names?', answer: 'The names use common Korean family and given name elements. They are algorithm-generated combinations suitable for creative work. For serious cultural or historical accuracy verify with references or native speakers. The tool does not copy from any specific real person.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this Korean name generator (male) for creative writing or culture-related activities. Students might generate a list of Korean male names for characters or projects. Emphasize that the tool is for inspiration and that cultural accuracy can be verified with references.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this Korean name generator (male) as a source of inspiration for character names. The generated names are algorithm-produced; you can use them freely in creative work. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need female names?', answer: 'This generator is male-focused. For nicknames that can be used for any gender try our Korean nickname generator. We may add a female-focused Korean name generator in the future; see our homepage for the full list of naming tools.' },
];

export default async function KoreanNameGeneratorMalePage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="korean-male" resultLabel="Generated Korean male names" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Korean name generator (male).</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
