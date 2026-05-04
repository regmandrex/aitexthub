import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { TransformersNameGeneratorTool } from '@/components/tools/TransformersNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 604800;

const toolSlug = 'transformers-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Transformers Name Generator';
  const description = 'Generate Transformers-style character names and title maker names for fan fiction, games, and creative writing.';
  const seoTitle = 'Transformers Name Generator - Character & Title Maker';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          A Transformers name generator is a free online tool that creates character names and title-style names inspired by the Transformers franchise. Get 1–24 names per run, with an option to include epic title-style phrases (e.g., &quot;Dark of the Moon&quot;). No sign-up; runs in your browser.
        </p>

        <h2>What Is a Transformers Name Generator?</h2>
        <p>A Transformers name generator is an online tool that creates character names and title-style names inspired by the Transformers franchise—the robots, factions, and epic story titles that fans know from film, TV, comics, and games. Fans use it for fan fiction, roleplay, tabletop and video games, and creative writing. Whether you need a robot-style character name (like Bumblebee, Starscream, or Ironhide) or a title maker–style name (e.g., &quot;Dark of the Moon,&quot; &quot;Rise of the Fallen&quot;), a Transformers name generator can produce a list of ideas quickly. The tool combines prefixes, suffixes, and title phrases so you get both classic character-style names and epic title-style names in one place. People search for &quot;transformer name generator,&quot; &quot;name generator transformers,&quot; or &quot;transformers title maker&quot; and mean the same kind of tool: one that outputs names that fit the franchise style for creative use.</p>
        <p>Writers, GMs, and content creators use a Transformers name generator when they need many names at once or want to explore options without inventing every name by hand. The generator runs in your browser with no sign-up.</p>

        <h2>How to Use This Transformers Name Generator</h2>
        <p>Follow these steps to get names:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Choose whether to include title-style names: turn &quot;Include title-style names&quot; on for a mix of character names and epic title phrases, or off for character names only.</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or spreadsheet.</li>
          <li>Run the generator again for more options; no account or login required.</li>
        </ol>
        <p>The tool runs entirely in your browser, so your settings and generated names are not sent to any server.</p>

        <h2>Transformers Character Names vs Title Maker Names</h2>
        <p>Character names in the franchise often sound bold and mechanical: single-word or compound names (Megatron, Ironhide, Bumblebee, Starscream). Title-style names are phrases that sound like movie or episode titles (e.g., &quot;Dark of the Moon,&quot; &quot;Rise of the Fallen&quot;) and are used for stories, episodes, or creative projects. This generator supports both. Turn on &quot;Include title-style names&quot; to get a mix of character names and title-style phrases; turn it off for character-style names only. That way you can use one tool whether you search for &quot;transformer name generator,&quot; &quot;name generator transformers,&quot; or &quot;transformers dark of the moon title maker.&quot;</p>

        <h2>When to Use a Transformers Name Generator</h2>
        <p>Use this Transformers name generator when you need franchise-style names quickly and in bulk. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fan fiction: name OCs, factions, or locations in Transformers-inspired worlds</li>
          <li>Tabletop and video games: name NPCs, factions, or missions</li>
          <li>Roleplay and LARP: character names and story titles</li>
          <li>Creative writing: robot or sci-fi character names in original settings</li>
          <li>YouTube and social content: titles, character lists, or project names</li>
        </ul>
        <p>It is ideal when you need many names at once or want to explore different styles without inventing every name by hand.</p>

        <h2>Transformers Naming Style: Prefixes, Suffixes, and Title Phrases</h2>
        <p>Franchise character names often use strong syllables, mechanical or martial imagery (iron, star, prime, strike), and memorable rhythm. Title-style names often use patterns like &quot;[Something] of the [Moon/Cybertron/Fallen]&quot; or &quot;Rise of the [X].&quot; This Transformers name generator uses curated lists of prefixes, suffixes, and title phrases and combines them at random so you get new combinations that fit the style. The result is for creative use only; it is not official and does not replace your own creativity. For formal or commercial use avoid implying endorsement by the franchise.</p>

        <h2>Privacy and Local Processing</h2>
        <p>This Transformers name generator runs in your browser. When you set the number of names and the title-style option and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. You can use it in a private or incognito window if you prefer. No account or login is required. We do not store your inputs or the generated name list.</p>

        <h2>Transformers Name Generator for Fan Fiction and Worldbuilding</h2>
        <p>Writers building Transformers-inspired or robot-themed worlds often need many character and faction names. Run the generator multiple times with title-style names on or off to build a roster. Keep a naming document so you do not reuse the same name for two characters and so faction names stay consistent. For mixed-genre projects you can pair this tool with other naming tools for different cultures or creature names; when you paste names from the web into a manuscript or spreadsheet, a plain-text tool can keep formatting clean.</p>

        <h2>Copying and Exporting Names</h2>
        <p>After you generate a list, use the Copy button to copy all names to your clipboard in a simple text format, one per line. Paste into Word, Google Docs, a spreadsheet, or a notes app. If you build a long list across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting—for example if you combined text from a webpage—run the pasted text through a plain-text tool so formatting stays clean.</p>

        <h2>Mobile and Cross-Device Use</h2>
        <p>The Transformers name generator runs in a web browser, so it works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose your settings, and generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences.</p>

        <h2>Character Names Only vs Mix With Title-Style Names</h2>
        <p>If you want only character-style names (e.g., Ironstrike, Stormblade), turn off &quot;Include title-style names.&quot; If you want a mix of character names and epic title phrases (e.g., &quot;Strike of Cybertron,&quot; &quot;Dark of the Moon&quot;), turn that option on. One tool covers both &quot;transformer name generator&quot; and &quot;transformers title maker&quot; search intents.</p>

        <h2>Combining the Transformers Name Generator With Other Tools</h2>
        <p>Your project may need more than one naming style. A game might use this generator for robot or faction names and another naming tool for human or other factions. A novel might mix Transformers-style names for one culture and a different naming style for another. Use each tool for its strength; when you assemble lists from multiple sources, keep a single naming document and clean pasted text (e.g. with a plain-text step) so formatting stays consistent.</p>

        <h2>Why Use a Generator Instead of Picking Names Manually?</h2>
        <p>Manually inventing dozens of franchise-style names can be time-consuming. A Transformers name generator produces many options in seconds. You can run it repeatedly, then pick the names that best fit your characters or project. For one-off names you might still brainstorm by hand; for bulk naming—a cast of characters, a list for a game, or title ideas—the generator saves time and sparks ideas.</p>

        <h2>Tool Methodology and Limitations</h2>
        <h3>How the Transformers name generator works</h3>
        <p>The tool uses curated lists of prefixes, suffixes, and title phrases inspired by the franchise style. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only and is not official franchise content.</p>
        <h3>Accuracy and use-case disclaimer</h3>
        <p>Generated names are for inspiration and creative use only. The tool does not check against official character or title lists. Some combinations may resemble existing names; many are new. Do not use the tool for official or commercial work in a way that implies franchise endorsement.</p>

        <h2>Terminology: Transformer Name Generator vs Title Maker</h2>
        <p>People sometimes search for &quot;transformer name generator,&quot; &quot;name generator transformers,&quot; or &quot;transformers title maker.&quot; This table clarifies:</p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-slate-300 text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-3 py-2 text-left">Term</th>
                <th className="border border-slate-300 px-3 py-2 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 px-3 py-2">Transformers name generator</td><td className="border border-slate-300 px-3 py-2">Tool for character-style and/or title-style names inspired by the franchise.</td></tr>
              <tr><td className="border border-slate-300 px-3 py-2">Transformer name generator</td><td className="border border-slate-300 px-3 py-2">Same as above; alternate phrasing.</td></tr>
              <tr><td className="border border-slate-300 px-3 py-2">Transformers title maker</td><td className="border border-slate-300 px-3 py-2">Tool for epic title-style phrases (e.g., &quot;Dark of the Moon&quot;). This generator can do both when you enable title-style names.</td></tr>
            </tbody>
          </table>
        </div>
        <p>This page serves all these intents with one tool.</p>

        <h2>Summary: Getting the Most From the Transformers Name Generator</h2>
        <p>Use this Transformers name generator to create franchise-style character names and optional title-style phrases for fan fiction, games, roleplay, and creative writing. Set the number of names (1–24), choose whether to include title-style names, and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. For more naming and text tools, see our <Link href="/">homepage</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Transformers name generator?', answer: 'A Transformers name generator is an online tool that creates character names and title-style names inspired by the Transformers franchise—the robots, factions, and epic story titles from film, TV, comics, and games. You get robot-style character names (e.g., Bumblebee, Starscream, Ironhide) and optional title-style phrases (e.g., "Dark of the Moon," "Rise of the Fallen") for fan fiction, roleplay, games, and creative writing. The tool combines prefixes, suffixes, and title phrases so you get both classic character-style names and epic title-style names in one place. People search for "transformer name generator," "name generator transformers," or "transformers title maker" and mean this type of tool. This free generator runs in your browser with no sign-up. For other fandom names try our Naruto name generator, Fallout name generator, or anime names generator; for mythology-style names the god and goddess name generator and ancient Greek name generator offer different flavors.' },
  { category: 'Usage', question: 'How do I use the Transformers name generator?', answer: 'To use this Transformers name generator, set how many names you want per run (1–24). Then choose whether to include title-style names: turn "Include title-style names" on for a mix of character names and epic title phrases, or off for character names only. Click "Generate names" to get a new list. Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or spreadsheet. Run the generator again for more options; no account or login is required. The tool runs entirely in your browser, so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is a transformers title maker?', answer: 'A "title maker" in this context means a tool that produces names or phrases that sound like story or episode titles—e.g., "Dark of the Moon," "Rise of the Fallen," "Strike of Cybertron." Fans use these for fan fiction titles, episode names, or project names. This Transformers name generator can produce both character-style names and title-style names in one tool. When you turn on "Include title-style names," you get a mix of character names (e.g., Ironstrike, Stormblade) and epic title phrases. So "Transformers name generator" and "Transformers title maker" are both covered on this page.' },
  { category: 'General', question: 'Is the Transformers name generator free?', answer: 'Yes. This Transformers name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device, so there are no subscription fees or usage limits. Many transformer name generator and title maker tools online are free; this one is designed to work without sign-up and to process names in the browser for privacy.' },
  { category: 'Use cases', question: 'Can I use the names for fan fiction?', answer: 'Yes. The Transformers name generator is designed for fan fiction, roleplay, and creative projects. The names are inspired by the franchise style—bold, mechanical, memorable—and you can use them as a starting point for OCs, factions, or locations. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. For mixed-genre stories you can pair this tool with other naming tools for different cultures or creature names. Avoid implying official franchise endorsement in commercial or published work.' },
  { category: 'Technical', question: 'What are "title-style" names?', answer: 'Title-style names are phrases that sound like movie or episode titles—e.g., "Optimus of the Moon," "Strike of Cybertron," "Dark of the Moon." They use patterns such as "[Something] of the [Moon/Cybertron/Fallen]" or "Rise of the [X]." The option "Include title-style names" in this Transformers name generator adds these to the list alongside character-style names. Turn it on for a mix; turn it off to get only character-style names (e.g., Ironhide, Starscream-style). That way one tool serves both "transformer name generator" and "transformers title maker" search intents.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Transformers name generator is designed to run in your browser. When you set the number of names and the title-style option and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. You can use the tool in a private or incognito window if you prefer. We do not store your inputs or the generated name list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Transformers name generator runs in a web browser, so it works on desktop, tablet, and phone. You do not need to install an app. Open the page on your device, choose how many names and whether to include title-style names, then generate. On a phone you can generate a short list and copy it into notes or email. The tool is responsive so buttons and controls work on small screens. Each run is independent; we do not save your history or preferences across devices.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Transformers name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit—the tool runs in your browser and does not track usage. For very long lists (e.g., dozens of characters or title ideas) run the generator in batches and paste results into one document. You can then sort or deduplicate as needed.' },
  { category: 'General', question: 'Are these official Transformers names?', answer: 'This Transformers name generator uses styles inspired by the franchise. The combinations are produced by an algorithm from curated prefixes, suffixes, and title phrases. Some names may resemble existing characters or titles; many are new combinations for creative use. The tool is not affiliated with the franchise and does not use official character or title lists. Use the output for fan fiction, roleplay, and creative projects only. For commercial or published work avoid implying endorsement by the franchise.' },
  { category: 'Use cases', question: 'Can I use the names in a game?', answer: 'Yes. You can use names from this Transformers name generator in tabletop games, video games, and other creative or personal projects. The names are generated for general use and fit robot or sci-fi factions and characters. For commercial use avoid implying official partnership with the franchise; the tool is for inspiration only.' },
  { category: 'General', question: 'What is the difference between "transformer name generator" and "name generator transformers"?', answer: 'Both phrases refer to the same type of tool: one that generates Transformers-style names (character names and/or title-style phrases). "Transformer name generator" and "name generator transformers" are just different word orders; search engines and users often use either. This page serves both intents with one generator. You get character-style names and, if you turn on "Include title-style names," epic title-style phrases as well. So whether you search for "transformer name generator," "name generator transformers," or "transformers title maker," this tool covers it.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this Transformers name generator to copy all generated names to your clipboard. Paste the result into Microsoft Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting—for example if you combined text from a webpage—run the pasted text through a plain-text tool so the list stays tidy.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Transformers name generator works without sign-up or login. Open the page and start generating. The tool runs entirely in your browser, so we do not need to store your email or any account data. You can use it in a private or incognito window if you prefer.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this Transformers name generator for robot or sci-fi character names, faction names, and mission or story titles. Run the generator several times with title-style names on or off to build a roster. Keep a spreadsheet or document of names you have already used to avoid duplicates.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for Naruto, Fallout, Elden Ring, anime, god and goddess, ancient Greek, species, tribe, island, and others. See our homepage for more tools.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings (number of names, title-style on/off). The Transformers name generator runs locally on your device, so there is no server-side log of what you generated. You can use the tool in a private or incognito window if you want to leave no trace on your device.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Transformers name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim the list as needed. There is no daily or total limit—the tool runs in your browser and does not track usage. For very large lists (e.g., many characters or title ideas) run the generator in batches and keep a master naming document.' },
  { category: 'General', question: 'Why do some names sound like movie titles?', answer: 'The "Include title-style names" option adds phrases that sound like story or movie titles—e.g., "of Cybertron," "Dark of the Moon," "Rise of the Fallen." That matches searches like "transformers dark of the moon title maker" and "transformers title maker." When the option is on you get a mix of character-style names and these epic title phrases. When it is off you get only character-style names (e.g., Ironstrike, Stormblade). One tool serves both needs.' },
  { category: 'Use cases', question: 'Can I use the names for YouTube or social media?', answer: 'Yes, for creative content. You can use names from this Transformers name generator for video titles, character lists, or project names on YouTube or social media. Avoid implying official partnership or endorsement by the franchise. The names are for fun and inspiration.' },
  { category: 'General', question: 'Is the Transformers name generator the same as a title maker?', answer: 'On this page the same tool does both: it can generate character-style names and title-style names. So "Transformers name generator" and "Transformers title maker" are both covered here. Turn on "Include title-style names" for a mix of character names and epic title phrases (e.g., "Dark of the Moon"); turn it off for character names only. That way one tool serves users who search for a transformer name generator and users who search for a transformers title maker.' },
  { category: 'General', question: 'How do I get character names only?', answer: 'Turn off "Include title-style names" to get only character-style names (e.g., Ironstrike, Stormblade, Bumblebee-style). When that option is off the generator outputs only character-style names and no epic title phrases. Turn "Include title-style names" on when you want a mix of character names and title-style phrases (e.g., "Strike of Cybertron," "Dark of the Moon"). So one tool covers both "transformer name generator" and "transformers title maker" use cases.' },
  { category: 'General', question: 'Can I combine this with other generators?', answer: 'Yes. Use this Transformers name generator for robot or sci-fi names and other naming tools on our site for different characters or factions. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a plain-text step) so formatting stays consistent. See our homepage for more naming tools.' },
  { category: 'Technical', question: 'How does the Transformers name generator create names?', answer: 'This Transformers name generator uses curated lists of prefixes, suffixes, and title phrases inspired by the franchise style—bold, mechanical, memorable. When you click generate, the tool randomly combines these elements in your browser (with a seeded random process so each run is different) to produce character-style names and, when you enable it, title-style phrases. No names or settings are sent to a server. The result is a list of new combinations that fit the Transformers vibe for creative use. The tool is not affiliated with the franchise and does not use official character or title lists.' },
];

export default async function TransformersNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<TransformersNameGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Transformers name generator and title maker.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

