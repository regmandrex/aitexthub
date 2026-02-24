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
        <p>A Fallout name generator is an online tool that creates character and faction names inspired by the Fallout games—the wasteland, vaults, and faction naming style that fans know from the series. Use it for roleplay, fan fiction, tabletop and video games, and creative writing. You get wasteland-style and faction-style names at the click of a button. This free tool runs in your browser with no sign-up.</p>
        <h2>How to Use This Fallout Name Generator</h2>
        <p>Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list.</li>
          <li>Use the Copy button to copy all names to your clipboard, then paste into your story, game doc, or spreadsheet.</li>
          <li>Run again for more options; no account required.</li>
        </ol>
        <p>The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Fallout Name Generator</h2>
        <p>Use this generator when you need post-apocalyptic or faction-style names quickly. Key use cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fan fiction and roleplay set in Fallout-inspired or wasteland worlds</li>
          <li>Tabletop and video game character or faction names</li>
          <li>Worldbuilding for post-apocalyptic settings</li>
          <li>Creative writing and YouTube or social content</li>
        </ul>
        <p>It is ideal when you need many names at once or want to explore different combinations without inventing every name by hand.</p>
        <h2>Fallout Naming Style: Wasteland and Factions</h2>
        <p>The games use a distinct wasteland and faction naming feel—rugged, survival-oriented, and faction-specific. This generator uses curated word elements and combines them at random so you get new combinations that fit that style. The output is for creative use only and is not official.</p>
        <h2>Wasteland vs Faction Names: What to Expect</h2>
        <p>Fallout-style names often fall into two broad categories: wasteland survivor names (rugged, practical, sometimes grim) and faction or group names (military, tribal, or settlement-style). This Fallout name generator produces both character-style and faction-style combinations. Run it multiple times to see the range. If you need names for a specific type of character—a vault dweller, a raider, a merchant—pick from the list and tweak if needed. The generator is meant to spark ideas rather than to reproduce exact in-game names.</p>
        <h2>Tips for Choosing Fallout-Style Names</h2>
        <p>Good Fallout-style names feel consistent with the setting: memorable but not overly cute, and fitting the tone of your story or game. Run the generator several times and keep a shortlist of names that match the vibe you want. For a cast of characters, mix wasteland and faction-style names so each person or group has a distinct feel. Avoid names that sound too modern or out of place in a post-apocalyptic world. If you are building a faction, consider how the name will look on a banner or how it will sound when characters say it aloud.</p>
        <h2>Using Fallout Names in Fan Works and Commercial Projects</h2>
        <p>The names from this Fallout name generator are inspired by the series but are not taken from official character or faction lists. For fan fiction, roleplay, and personal projects you can use them freely. For commercial or published work, avoid implying endorsement or partnership with the franchise: use the names as inspiration and do not suggest that your project is official. When in doubt, treat the output as a starting point and adjust names so they feel original while still fitting the wasteland aesthetic.</p>
        <h2>Examples of Fallout Naming Conventions</h2>
        <p>In the Fallout universe, names often reflect survival, place, or allegiance. Vault dwellers might have orderly or number-style references; wastelanders might use nicknames or place-based names; factions often use military or tribal wording. This generator does not copy specific in-game names but produces new combinations that echo those conventions—so you might get names that sound like they belong in a vault, a raider camp, or a settlement. Use the examples you get as a guide for the tone of your own naming document.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This Fallout name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Fallout Name Generator for Worldbuilding</h2>
        <p>Writers and GMs building post-apocalyptic or faction-based worlds often need many names. Run the generator multiple times to build a roster. Keep a naming document to avoid reusing names and to keep faction naming consistent. For mixed settings you can pair this tool with other naming tools for different cultures or creature names; when pasting from the web into a manuscript or spreadsheet, a space remover or strip-HTML step can keep formatting clean.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into Word, Google Docs, a spreadsheet, or notes. For long lists across multiple runs, paste each run into the same document and sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool so formatting stays clean.</p>
        <h2>Mobile and Cross-Device Use</h2>
        <p>The Fallout name generator runs in a web browser and works on desktop, tablet, and phone. No app install is required. Each run is independent; we do not save your history or preferences.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for wasteland or faction names and other naming tools on our site for other factions or cultures. When assembling lists from multiple tools, keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent.</p>
        <h2>Why Use a Generator Instead of Picking Manually?</h2>
        <p>Manually inventing dozens of Fallout-style names can be time-consuming. A Fallout name generator produces many options in seconds. Run it repeatedly and pick the names that best fit your characters or factions. For bulk naming—a cast of characters or a list for a game—the generator saves time.</p>
        <h2>Tool Methodology and Limitations</h2>
        <h3>How the Fallout name generator works</h3>
        <p>The tool uses curated wasteland- and faction-style word elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for creative use only and is not official game content.</p>
        <h3>Disclaimer</h3>
        <p>Generated names are for inspiration only. The tool does not check against official Fallout character or faction lists. Do not use in a way that implies franchise endorsement.</p>
        <h2>Terminology: Fallout Name Generator</h2>
        <p>People search for &quot;Fallout name generator,&quot; &quot;fallout character name generator,&quot; or &quot;fallout faction names.&quot; This page serves those intents with one tool that produces character- and faction-style names.</p>
        <h2>Building a Naming Document for Your Project</h2>
        <p>Whether you are writing a novel, running a tabletop campaign, or creating a mod, a single naming document helps you stay consistent. Each time you run this Fallout name generator, paste the results into that document and note which names you have already assigned (e.g. to a character, faction, or location). That way you avoid reusing the same name and keep the tone of your wasteland or faction naming coherent. If you pull names from multiple runs or from other tools, keep one master list and use a space remover or strip-HTML step when pasting from the web so formatting stays clean.</p>
        <h2>What Makes a Name Feel &quot;Fallout&quot;?</h2>
        <p>Fallout-style names often suggest survival, place, history, or allegiance. They can be short and punchy (like callsigns or nicknames) or longer and more formal (like faction or settlement names). The generator does not replicate specific in-game names but uses word elements that evoke the same feel: rugged, post-apocalyptic, and sometimes dark or ironic. If a generated name does not quite fit, use it as a base and adjust a syllable or word until it matches your vision.</p>
        <h2>Character Limits and Where Names Are Used</h2>
        <p>If you are naming something inside a game (e.g. a character or settlement), check that game&apos;s character limit for names. This Fallout name generator does not enforce any limit; you can trim or combine results to fit. For fiction and tabletop, length is flexible. Keep spelling consistent in your naming document so you do not end up with two variants of the same name in different chapters or sessions.</p>
        <h2>Reusing and Sharing Your Name List</h2>
        <p>You can run this Fallout name generator as often as you like and reuse the same list across multiple projects if you want. Many creators keep a personal bank of wasteland and faction names and draw from it for different stories or campaigns. The names are algorithm-generated and not copyrighted; just avoid implying that your work is officially connected to the franchise when you share or publish. If you build a list with this tool and other naming tools on our site, keep one master file and clean pasted text so formatting stays consistent when you copy between documents.</p>
        <h2>How to Stay Consistent Across a Series or Campaign</h2>
        <p>If you are writing a series of stories or running a long tabletop campaign, naming consistency matters. Keep one master naming document and update it every time you introduce a new character, faction, or location. Note where each name first appeared so you can refer back. When you run this Fallout name generator for new material, paste the results into the master list and mark which names you have already used. That way you avoid accidentally reusing a name or creating two similar names for different groups. A simple spreadsheet or sectioned document works well: one column or section for characters, one for factions, one for locations.</p>
        <h2>When to Tweak a Generated Name</h2>
        <p>Sometimes a generated name is almost right but needs a small change. You might want to swap a word, shorten it for a character limit, or adjust the spelling to match your world. That is fine—the generator is there to spark ideas. If you are building a faction and the name sounds too similar to another group in your project, run the generator again or tweak one element so each faction feels distinct. The goal is a list of names that feel cohesive and fit your tone, whether that is grim, darkly humorous, or survival-focused.</p>
        <h2>Vault, Wasteland, and Faction Variety</h2>
        <p>The Fallout universe includes vault dwellers, wasteland survivors, raiders, merchants, and organized factions. This generator produces names that can fit any of those contexts. Run it multiple times and you will see a mix of styles: some names sound like individual callsigns or nicknames, others like group or settlement names. Use the list to assign names that match each character or faction type in your story or game. Keeping a few spare names in your document helps when you need to name a new character or group on the fly.</p>
        <h2>Quick Reference: Getting the Most From the Generator</h2>
        <p>To get the most from this Fallout name generator: run it several times and paste results into one document; mark which names you have already used so you do not duplicate; keep separate notes for characters, factions, and locations if your project is large; and when pasting from the web into your list, use a space remover or strip-HTML step so formatting stays clean. The tool is free, runs in your browser, and does not send your data to a server. For more naming and text tools, see our homepage. If you hit a creative block, a fresh run of the generator often sparks new ideas for wasteland or faction names.</p>
        <h2>No Download or Install Required</h2>
        <p>This Fallout name generator runs entirely in your web browser. You do not need to download software or install an app. Open the page on any device, set how many names you want, and click generate. The names are created on your device and are not sent to our servers. That makes the tool fast, private, and easy to use on the go. You can bookmark the page and return whenever you need more name ideas for your next story or session. There are no ads or paywalls; the generator is free to use as often as you like.</p>
        <h2>Summary</h2>
        <p>Use this Fallout name generator to create wasteland- and faction-style names for roleplay, fan fiction, games, and worldbuilding. Set the number of names (1–24) and run as often as you like. Copy results into your document or notes. The tool runs locally in your browser with no sign-up. Keep a naming document so you do not reuse the same name for two characters or factions. Run the generator in batches for large projects. The names are for inspiration only; avoid implying official franchise endorsement in published work. For more naming and text tools, see our <Link href="/">homepage</Link>. No account or download is required; the tool is free.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Fallout name generator?', answer: 'A Fallout name generator is an online tool that creates character and faction names inspired by the Fallout games—the wasteland, vaults, and faction naming style that fans know from the series. You get wasteland-style and faction-style names for roleplay, fan fiction, tabletop and video games, and creative writing. The tool produces new combinations that fit the post-apocalyptic vibe without copying official character or faction lists. This free tool runs in your browser with no sign-up. It is ideal when you need many names at once or want to explore different combinations quickly.' },
  { category: 'Usage', question: 'How do I use the Fallout name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your story, game doc, or spreadsheet. Run the generator again for more options; no account is required. The tool runs in your browser so your settings and generated names are not sent to any server. For large projects, run it in batches and keep a single naming document so you can sort and deduplicate. If you paste from the web, use a space remover or strip-HTML step to keep formatting clean.' },
  { category: 'General', question: 'Is the Fallout name generator free?', answer: 'Yes. This Fallout name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device and does not track usage or impose daily limits. There are no premium features or paywalls.' },
  { category: 'Use cases', question: 'Can I use the names for roleplay?', answer: 'Yes. The Fallout name generator is designed for fan works, roleplay, and creative projects. The names fit wasteland and faction settings. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. For commercial or published work, avoid implying official franchise endorsement; use the names as inspiration and make clear your project is not affiliated with the franchise. The names work well for both one-off sessions and long-running campaigns.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Fallout name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. You can use the tool in a private or incognito window if you prefer. No analytics or tracking is tied to the names you generate.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Fallout name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or email. Each run is independent; we do not save your history or preferences across devices. The page is responsive so buttons and controls work on small screens.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Fallout name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. For very long lists run the generator in batches and paste results into one document, then sort or deduplicate as needed. Many users run it five or ten times and build a list of over a hundred names for a single project.' },
  { category: 'General', question: 'Are these official Fallout names?', answer: 'This Fallout name generator uses styles inspired by the games. The combinations are produced by an algorithm from curated wasteland- and faction-style elements. Some names may resemble existing characters or factions; many are new combinations for creative use. The tool is not affiliated with the franchise. Use the output for fan fiction, roleplay, and creative projects only. For commercial or published work avoid implying endorsement by the franchise and treat the names as inspiration rather than official content. We do not copy from official character or faction lists.' },
  { category: 'Use cases', question: 'Can I use the names in a game?', answer: 'Yes. You can use names from this Fallout name generator in tabletop games, video games, and other creative or personal projects. The names work well for NPCs, factions, and player characters in post-apocalyptic settings. Check any in-game character limits before committing to a name. For commercial use avoid implying official partnership with the franchise.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have name generators for Elden Ring, Naruto, Transformers, RuneScape, anime, god and goddess, ancient Greek, species, tribe, island, Muslim, and others. See our homepage for the full list. You can combine this Fallout name generator with others when your project needs names from different settings or cultures. Each tool runs in your browser with no sign-up.' },
  { category: 'Usage', question: 'Can I copy the names to a document?', answer: 'Yes. Use the Copy button on this Fallout name generator to copy all generated names to your clipboard. Paste into Word, Google Docs, a spreadsheet, or a notes app. The names are in a simple text format, one per line. If you build a long list across multiple runs, paste each run into the same document and then sort or deduplicate as needed. If you notice extra spaces or line breaks after pasting, run the pasted text through a space remover or strip-HTML tool so the list stays tidy. Keeping a single master list for your project helps you avoid reusing names and keeps formatting consistent.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Fallout name generator works without sign-up or login. The tool runs entirely in your browser. You can use it in a private or incognito window if you prefer. No email or registration is required to generate or copy names.' },
  { category: 'Use cases', question: 'Can I use it for tabletop RPGs?', answer: 'Yes. GMs and players use this Fallout name generator for post-apocalyptic or faction-style character and faction names. Run the generator several times to build a roster. Keep a document of names you have already used to avoid duplicates. The names work well for NPCs, raider groups, settlements, and player characters in wasteland or vault-inspired campaigns. You can reserve a block of names for each faction or location so you always have options when you need to introduce someone new.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The Fallout name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. No server receives your choices or the generated list. This is useful if you are generating names for unpublished or sensitive projects.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Fallout name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates or trim as needed. There is no daily or total limit. For very large lists run the generator in batches and keep a master naming document so you stay consistent across your project. Many users build lists of fifty or a hundred names for a single story or campaign.' },
  { category: 'General', question: 'Why Fallout-style names?', answer: 'Fallout has a distinct wasteland and faction naming style—rugged, survival-oriented, and faction-specific. Fans and creators often want names that fit that world for roleplay, fan fiction, and original post-apocalyptic settings. This Fallout name generator mimics that style so you can quickly get ideas without copying official content. The output works for vault dwellers, wastelanders, raiders, and factions alike.' },
  { category: 'Use cases', question: 'Can I use the names for YouTube or social media?', answer: 'Yes, for creative content. You can use names from this Fallout name generator for video titles, character lists, or project names on YouTube or social media. Avoid implying official partnership or endorsement by the franchise. The names are fine for fan content and creative projects. If you create a series or channel with a wasteland theme, the generator can help you name characters and groups consistently.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this Fallout name generator for wasteland or faction names and other naming tools on our site for different characters or factions. When you assemble lists from multiple tools keep a single naming document and clean pasted text (e.g. with a space remover or strip-HTML step) so formatting stays consistent. See our homepage for the full list of naming tools. Combining tools is useful when your project mixes post-apocalyptic with other settings or cultures—for example, Greek-style names for one region and Fallout-style for another.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This Fallout name generator uses curated wasteland- and faction-style word elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for creative use only and is not official game content. The algorithm is designed to produce names that feel consistent with the Fallout aesthetic. You can run it as many times as you like to get fresh combinations. Each run is independent and random.' },
  { category: 'General', question: 'Is it good for worldbuilding?', answer: 'Yes. Writers and GMs use this Fallout name generator for post-apocalyptic settings, faction rosters, and wasteland character names. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters or factions. The mix of character- and faction-style names helps you populate both individuals and groups in your world. Many creators use it to name settlements, raider gangs, and vault-related groups. The variety supports both one-off sessions and long-running worldbuilding.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this Fallout name generator in lessons on creative writing or worldbuilding. Students might generate a list of names for characters or factions in a post-apocalyptic story. Emphasize that the tool is for inspiration and that the names are not official. You can pair it with discussions about setting, tone, and naming conventions in fiction. The generator is free and runs in the browser with no sign-up. Students can paste results into a shared document and discuss which names fit different character or faction types.' },
  { category: 'General', question: 'How do I cite the Fallout name generator?', answer: 'For academic or formal use you can cite this Fallout name generator as a source of inspiration for character or faction names. The generated names are algorithm-produced and are not copyrighted; you can use them freely in your projects while respecting franchise sensitivity. A brief acknowledgment is optional. We do not require attribution. If your institution or publisher requires a URL or tool name, you can include the page title and site. The tool is intended for creative and educational use.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run this Fallout name generator multiple times to get variety; each run produces new random combinations. You may get more wasteland-style or more faction-style names in different runs. If a name is close but not quite right, tweak a word or syllable to match your vision. If you need names from another genre or culture, see our homepage for the full list of naming tools. The generator is flexible enough to support both serious and darkly humorous tones.' },
  { category: 'Use cases', question: 'Can I use the Fallout name generator for fan fiction?', answer: 'Yes. The Fallout name generator is designed for fan fiction, roleplay, and creative projects. Use the names as a starting point for characters, factions, or locations in Fallout-inspired or original wasteland settings. Run the generator multiple times to build a roster and keep a naming document so you do not reuse the same name for two characters. Avoid implying official franchise endorsement in commercial or published work. The names help you keep a consistent tone without copying official content. Many fan writers use it to name OCs and original factions. The tool is free and runs in your browser with no sign-up.' },
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
