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

const toolSlug = 'naruto-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Naruto Name Generator';
  const description = 'Generate Naruto-style character and ninja names for fan fiction, roleplay, and creative writing.';
  const seoTitle = 'Naruto Name Generator - Ninja & Character Names';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          A Naruto name generator is a free online tool that creates character names inspired by the Naruto anime and manga. Get 1–24 Japanese-style ninja and character names per run. No sign-up; runs in your browser.
        </p>

        <h2>What Is a Naruto Name Generator?</h2>
        <p>A Naruto name generator is an online tool that creates character names inspired by the Naruto anime and manga—the ninja world, clans, and naming style that fans know from the series. Fans use it for fan fiction, roleplay, tabletop and video games, and creative writing. You get Japanese-style ninja and character names at the click of a button: first and last name combinations that fit the series vibe. This free tool runs in your browser with no sign-up. People search for &quot;Naruto name generator,&quot; &quot;naruto character name generator,&quot; or &quot;ninja name generator&quot; and mean this type of tool.</p>

        <h2>How to Use This Naruto Name Generator</h2>
        <p>Follow these steps to get names:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of Naruto-style first and last name combinations.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or spreadsheet.</li>
          <li>Run the generator again for more options; no account or login required.</li>
        </ol>
        <p>The tool runs entirely in your browser, so your settings and generated names are not sent to any server.</p>

        <h2>When to Use a Naruto Name Generator</h2>
        <p>Use this Naruto name generator when you need series-style names quickly and in bulk. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fan fiction: name OCs, clan members, or original ninja in Naruto-inspired worlds</li>
          <li>Tabletop and video games: ninja or anime-style character names</li>
          <li>Roleplay and LARP: character names for ninja or Japanese-inspired settings</li>
          <li>Creative writing: names that fit anime or ninja-themed stories</li>
          <li>YouTube and social content: character lists, project names, or creative handles</li>
        </ul>
        <p>It is ideal when you need many names at once or want to explore different combinations without inventing every name by hand.</p>

        <h2>Naruto Naming Style: Japanese-Style First and Last Names</h2>
        <p>The series uses Japanese-style naming: family name (or clan-style name) plus given name, with sounds and rhythms that fit the ninja world. This Naruto name generator uses curated lists of first and last name elements and combines them at random so you get new combinations that fit that style. The result is for creative use only; it is not official and does not replace your own creativity. For formal or cultural accuracy consult appropriate references.</p>

        <h2>Privacy and Local Processing</h2>
        <p>This Naruto name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. You can use it in a private or incognito window if you prefer. No account or login is required. We do not store your inputs or the generated name list.</p>

        <h2>Naruto Name Generator for Fan Fiction and Worldbuilding</h2>
        <p>Writers building Naruto-inspired or ninja-themed worlds often need many character names. Run the generator multiple times to build a roster. Keep a naming document so you do not reuse the same name for two characters and so clan or village names stay consistent. For mixed-genre projects you can pair this tool with other naming tools for different cultures or creature names; when you paste names from the web into a manuscript or spreadsheet, a space remover or strip-HTML step can keep formatting clean.</p>

        <h2>Copying and Exporting Names</h2>
        <p>After you generate a list, use the Copy button to copy all names to your clipboard in a simple text format, one per line. Paste into Word, Google Docs, a spreadsheet, or a notes app. If you build a long list across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting—for example if you combined text from a webpage—run the pasted text through a space remover or strip-HTML tool so formatting stays clean.</p>

        <h2>Mobile and Cross-Device Use</h2>
        <p>The Naruto name generator runs in a web browser, so it works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, and generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences.</p>

        <h2>Naruto Name Generator vs Anime Name Generator</h2>
        <p>Anime name generators can cover many series and styles. This one is focused on Naruto-style names: Japanese-style first and last names that fit the ninja world. Our <Link href="/anime-names-generator">anime names generator</Link> offers a broader range of anime-style names if you need variety across series. Use this page when you want names that specifically evoke the Naruto vibe; use the anime names generator when you want a wider pool of anime-style options.</p>

        <h2>Combining the Naruto Name Generator With Other Tools</h2>
        <p>Your project may need more than one naming style. A game might use this generator for ninja or anime-style names and another naming tool for other factions. A novel might mix Naruto-style names for one culture and a different naming style for another. Use each tool for its strength; when you assemble lists from multiple sources, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent.</p>

        <h2>Why Use a Generator Instead of Picking Names Manually?</h2>
        <p>Manually inventing dozens of Naruto-style names can be time-consuming. A Naruto name generator produces many options in seconds. You can run it repeatedly, then pick the names that best fit your characters or project. For one-off names you might still brainstorm by hand; for bulk naming—a cast of characters, a list for a game, or clan rosters—the generator saves time and sparks ideas.</p>

        <h2>Tool Methodology and Limitations</h2>
        <h3>How the Naruto name generator works</h3>
        <p>The tool uses curated lists of first and last name elements inspired by the series and Japanese naming patterns. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only and is not official series content.</p>
        <h3>Accuracy and use-case disclaimer</h3>
        <p>Generated names are for inspiration and creative use only. The tool does not check against official character or clan lists. Some combinations may resemble existing names; many are new. Do not use the tool for official or commercial work in a way that implies franchise endorsement. Names are inspired by the series and Japanese naming patterns; for formal or cultural accuracy consult appropriate references.</p>

        <h2>Terminology: Naruto Name Generator vs Anime Name Generator</h2>
        <p>People sometimes search for &quot;Naruto name generator,&quot; &quot;naruto character name generator,&quot; or &quot;anime name generator.&quot; This table clarifies:</p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-slate-300 text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-3 py-2 text-left">Term</th>
                <th className="border border-slate-300 px-3 py-2 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 px-3 py-2">Naruto name generator</td><td className="border border-slate-300 px-3 py-2">Tool for character names inspired by the Naruto series; Japanese-style ninja names.</td></tr>
              <tr><td className="border border-slate-300 px-3 py-2">Naruto character name generator</td><td className="border border-slate-300 px-3 py-2">Same as above; alternate phrasing.</td></tr>
              <tr><td className="border border-slate-300 px-3 py-2">Anime name generator</td><td className="border border-slate-300 px-3 py-2">Broader; can cover many anime series. We have a dedicated Naruto generator and a general anime names generator.</td></tr>
            </tbody>
          </table>
        </div>
        <p>This page focuses on Naruto-style names. For broader anime-style names see our <Link href="/anime-names-generator">anime names generator</Link>.</p>

        <h2>Summary: Getting the Most From the Naruto Name Generator</h2>
        <p>Use this Naruto name generator to create Japanese-style ninja and character names for fan fiction, games, roleplay, and creative writing. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For more naming and text tools, see our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Naruto name generator?', answer: 'A Naruto name generator is an online tool that creates character names inspired by the Naruto anime and manga—the ninja world, clans, and naming style that fans know from the series. You get Japanese-style ninja and character names: first and last name combinations that fit the series vibe for fan fiction, roleplay, tabletop and video games, and creative writing. People search for "Naruto name generator," "naruto character name generator," or "ninja name generator" and mean this type of tool. This free generator runs in your browser with no sign-up.' },
  { category: 'Usage', question: 'How do I use the Naruto name generator?', answer: 'To use this Naruto name generator, set how many names you want per run (1–24). Click "Generate names" to get a new list of Naruto-style first and last name combinations. Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or spreadsheet. Run the generator again for more options; no account or login is required. The tool runs entirely in your browser, so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'Is the Naruto name generator free?', answer: 'Yes. This Naruto name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device, so there are no subscription fees or usage limits. Many Naruto and anime name generator tools online are free; this one is designed to work without sign-up and to process names in the browser for privacy.' },
  { category: 'Use cases', question: 'Can I use the names for fan fiction?', answer: 'Yes. The Naruto name generator is designed for fan fiction, roleplay, and creative projects. The names are inspired by the series style—Japanese-style first and last names that fit the ninja world—and you can use them as a starting point for OCs, clan members, or original ninja. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. Avoid implying official franchise endorsement in commercial or published work.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Naruto name generator is designed to run in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. You can use the tool in a private or incognito window if you prefer. We do not store your inputs or the generated name list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Naruto name generator runs in a web browser, so it works on desktop, tablet, and phone. You do not need to install an app. Open the page on your device, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. The tool is responsive so buttons and controls work on small screens. Each run is independent; we do not save your history or preferences across devices.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Naruto name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit—the tool runs in your browser and does not track usage. For very long lists (e.g., dozens of characters or clan members) run the generator in batches and paste results into one document. You can then sort or deduplicate as needed.' },
  { category: 'General', question: 'Are these official Naruto names?', answer: 'This Naruto name generator uses styles inspired by the series. The combinations are produced by an algorithm from curated first and last name elements. Some names may resemble existing characters or clans; many are new combinations for creative use. The tool is not affiliated with the franchise and does not use official character or clan lists. Use the output for fan fiction, roleplay, and creative projects only. For commercial or published work avoid implying endorsement by the franchise.' },
  { category: 'Use cases', question: 'Can I use the names in a game?', answer: 'Yes. You can use names from this Naruto name generator in tabletop games, video games, and other creative or personal projects. The names are generated for general use and fit ninja or anime-style characters and factions. For commercial use avoid implying official partnership with the franchise; the tool is for inspiration only.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for Transformers, Fallout, Elden Ring, anime, god and goddess, ancient Greek, species, tribe, island, Muslim, and others. See our homepage for the full list.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this Naruto name generator to copy all generated names to your clipboard. Paste the result into Microsoft Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting—for example if you combined text from a webpage—run the pasted text through a space remover or strip-HTML tool so the list stays tidy.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Naruto name generator works without sign-up or login. Open the page and start generating. The tool runs entirely in your browser, so we do not need to store your email or any account data. You can use it in a private or incognito window if you prefer.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this Naruto name generator for ninja or anime-style character names, clan names, and roster building. Run the generator several times to build a list. Keep a spreadsheet or document of names you have already used to avoid duplicates.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings (number of names). The Naruto name generator runs locally on your device, so there is no server-side log of what you generated. You can use the tool in a private or incognito window if you want to leave no trace on your device.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Naruto name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim the list as needed. There is no daily or total limit—the tool runs in your browser and does not track usage. For very large lists (e.g., many characters or clan members) run the generator in batches and keep a master naming document.' },
  { category: 'General', question: 'Why Japanese-style names?', answer: 'Naruto is set in a world inspired by Japanese ninja culture. The series uses Japanese-style naming: family or clan-style names plus given names, with sounds and rhythms that fit the ninja world. This Naruto name generator produces names that fit that style so fan works feel consistent with the series.' },
  { category: 'Use cases', question: 'Can I use the names for YouTube or social media?', answer: 'Yes, for creative content. You can use names from this Naruto name generator for video titles, character lists, or project names on YouTube or social media. Avoid implying official partnership or endorsement by the franchise. The names are for fun and inspiration.' },
  { category: 'General', question: 'Is the Naruto name generator the same as an anime name generator?', answer: 'Anime name generators can cover many series and styles. This one is focused on Naruto-style names: Japanese-style first and last names that fit the ninja world. Our anime names generator offers a broader range of anime-style names if you need variety across series. Use this page when you want names that specifically evoke the Naruto vibe; use the anime names generator when you want a wider pool of anime-style options.' },
  { category: 'General', question: 'Can I combine this with other generators?', answer: 'Yes. Use this Naruto name generator for ninja or anime-style names and other naming tools on our site for different characters or factions. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our homepage for the full list of naming tools.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This Naruto name generator uses curated lists of first and last name elements inspired by the series and Japanese naming patterns. When you click generate, the tool randomly combines these elements in your browser (with a seeded random process so each run is different) to produce new name combinations. No names or settings are sent to a server. The result is a list of names that fit the Naruto style for creative use. The tool is not affiliated with the franchise.' },
  { category: 'General', question: 'Are the names culturally accurate?', answer: 'The names are inspired by the series and Japanese naming patterns. They are intended for creative and fan use, not as formal or culturally authoritative names. For formal or cultural accuracy—e.g., real Japanese names for a historical or educational project—consult appropriate references, naming books, or native speakers. This tool is for inspiration only.' },
  { category: 'Use cases', question: 'Can teachers use the Naruto name generator?', answer: 'Yes. Teachers can use this Naruto name generator in lessons on creative writing, worldbuilding, or as a light touchpoint for discussing anime and Japanese-inspired naming. For example, students might generate a list of names for characters in a short story set in a ninja-inspired world. Emphasize that the tool is for inspiration and that the names are not formal Japanese names.' },
  { category: 'General', question: 'How do I cite the Naruto name generator?', answer: 'For academic or formal use you can cite this Naruto name generator as a source of inspiration for character names. The generated names themselves are algorithm-produced and are not copyrighted; you can use them freely in your projects while respecting franchise and cultural sensitivity. If you publish a list of names or a work that relied on the generator, a brief acknowledgment (e.g., "Name ideas generated with the help of an online Naruto name generator") is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific style of name?', answer: 'Run this Naruto name generator multiple times to get variety; each run produces new random combinations. If you need a broader range of anime-style names (not only Naruto-style), try our anime names generator. If you need names from another culture or genre, see our homepage for the full list of naming tools.' },
];

export default async function NarutoNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="naruto" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Naruto name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
