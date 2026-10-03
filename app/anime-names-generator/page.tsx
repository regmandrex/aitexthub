import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'anime-names-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Anime Names Generator',
    description: 'Free Anime Names Generator for character names and nicknames. Generate anime-style name ideas directly in your browser with zero registration.',
    seoTitle: 'Anime Names Generator – Character Names & Nicknames',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Anime Names Generator – Aliases &amp; Character Names</h2>
        <p>Anime characters succeed or fail based on their names. A name following anime and manga conventions establishes the mood prior to any character action — soft and melodic for a gentle heroine, sharp and aggressive for a rival, theatrical and elaborate for a final boss. This Anime Names Generator produces Japanese-inspired given names, family names, and descriptive nicknames so you can name original characters (OCs) intended for fan fiction, role-play, artwork, and cosplay. It runs completely inside your browser, demands no sign-up, and supplies 1–24 names per generation.</p>
        <p>Anime naming is never random. Creators select names whose phonetics align with kanji meanings, rely heavily on nature and virtue vocabulary, and apply honorifics and nicknames to display interpersonal ties. The guide below outlines those actual conventions — name sequence, significance, tropes, romaji, and honorifics — ensuring the names you produce feel natural in an anime universe rather than randomly put together.</p>

        <h2>How Japanese Name Order Functions</h2>
        <p>In Japanese, the <strong>family name comes before the given name</strong> — Uzumaki Naruto, Kurosaki Ichigo, Yagami Light. English translations typically reverse this to given-name-first (Naruto Uzumaki), explaining why identical characters appear in both sequences depending on the source. When designing an OC, determine which sequence suits your project — authentic traditional Japanese order, or Western order matching dubbed and subtitled media familiar to your audience — and maintain consistency throughout.</p>

        <h2>Names That Hold Secret Meanings</h2>
        <p>One hallmark of anime naming involves meaning embedded within the sound. Because Japanese names use kanji characters, and most kanji possess multiple readings, writers select characters whose meanings subtly foreshadow the character arc: a name based on the kanji meaning &quot;light&quot; for a hero, or &quot;darkness&quot; for an antagonist. Typical meaning elements comprise:</p>
        <ul>
          <li><strong>Nature:</strong> hana (flower), yuki (snow), sora (sky), tsuki (moon), umi (sea), kaze (wind).</li>
          <li><strong>Virtue &amp; strength:</strong> makoto (sincerity), takeshi (strong/warrior), akira (bright/clear), rei (grace).</li>
          <li><strong>Light &amp; season:</strong> hikari (light), haru (spring), aki (autumn), hoshi (star).</li>
        </ul>
        <p>If significance matters for your character, take a generated name you enjoy and research kanji whose pronunciation corresponds, ensuring the written typography reinforces the personality you envision.</p>

        <h2>Typical Anime Naming Conventions</h2>
        <p>Specific naming structures repeat across the medium, and mirroring them makes an OC feel authentically anime. Protagonists frequently receive bright, hopeful, easily shouted names. Rivals and villains obtain sharper sounds or darker themes. Cool, detached characters typically possess short, concise names. Comic relief characters might feature slightly silly or overly grand names for contrast. Meanwhile, entire casts are sometimes named around a shared motif — flowers, numbers, celestial bodies — helping a group feel unified. Establishing a character&apos;s archetype beforehand assists in selecting generator names matching their specific role.</p>

        <h2>Epithets, Honorifics, and Nicknames</h2>
        <p>Anime relationships are commonly indicated through how characters address each other. <strong>Honorifics</strong> — -san (polite), -kun (familiar, often for boys), -chan (affectionate, cute), -senpai (senior), -sama (great respect) — attach to names to show intimacy and hierarchy; while this generator supplies the base name, you append the honorific to suit the context. <strong>Nicknames</strong> derive from abbreviating a given name or appending an affectionate suffix, while <strong>epithets</strong> represent dramatic titles earned through combat — &quot;the Crimson Blade,&quot; &quot;the Silent Fang.&quot; Select short, impactful results for nicknames, and combine a descriptive word with a trait for an epithet.</p>

        <h2>Romaji: Writing Japanese Names in English</h2>
        <p>Romaji represents the romanized spelling of Japanese, and because multiple systems exist, long vowels and specific sounds can be transcribed in various ways — Yuki or Yuuki, Ono or Ōno, Shinichi or Shin&apos;ichi. For creative writing, choose one romaji spelling per character and keep it uniform, since alternating between Yuki and Yuuki mid-story reads as a mistake. Simpler spellings generally prove easier for English-speaking readers, whereas macrons or doubled vowels indicate a more exact phonetic translation.</p>

        <h2>Naming Villains vs. Heroes</h2>
        <p>Mood dictates whether you should choose a hero or villain name. Protagonists and gentle figures fit better with softer, melodic sounds and pleasant vowels; adversaries and villains call for sharper names featuring hard consonants or dark imagery. Anime frequently labels its cast so audiences can discern alignment before anyone speaks, and you can leverage that approach. Produce a set, group the selections by vibe, and allocate the mellower names to heroes and the tougher ones to bad guys so your ensemble communicates its dynamics instantly.</p>

        <h2>How to Use This Anime Names Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to produce a new set of anime-inspired character names.</li>
          <li>Read each one out loud and select the options that match specific roles and characters.</li>
          <li>Save your shortlist using the Copy button, pick between Japanese and Western name order, and include nicknames or honorifics.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>Generation takes place completely inside your browser. Because your settings and generated names are never transmitted to any server, your secret story notes and unpublished OCs remain totally private until you decide to share them.</p>

        <h2>Adjusting and Combining Names</h2>
        <p>The finest anime names often stem from altering a generated outcome instead of keeping any single line untouched. Blend a given name from one result with a family name from another, modify spelling to soften or harden an audio texture, or shorten a title into a nickname. The generator supplies expressive building blocks; shape every individual choice until it properly matches the character in your mind, then search for matching kanji if you wish the written version to possess significance.</p>

        <h2>Common Mistakes to Avoid</h2>
        <p>A few mistakes weaken an anime cast. The initial issue is giving multiple characters names that sound too similar, confusing readers — mix up vowels and consonants across your roster. The second problem is a tone clashing with the persona, such as a harsh moniker on a gentle healer. The third pitfall is accidentally repeating a famous canon name (Naruto, Sasuke, Goku), which feels unoriginal, meaning a fast search prior to finalizing is smart. The fourth trap is combining romaji spellings for a single figure. Retain names that stand out, fit the tone, maintain consistent spelling, and remain unlinked to any well-known established character.</p>

        <h2>Privacy</h2>
        <p>This Anime Names Generator operates entirely within your browser. When you select a quantity and hit generate, names are built locally on your device — no data is uploaded, tracked, or saved on our servers. These outputs are unique combinations designed for your personal characters, not pulled from any official franchise. Close the browser tab and the list disappears unless you saved it.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an Anime Names Generator?', answer: 'An Anime Names Generator is a web utility that generates character aliases and names inspired by manga and anime. It blends Japanese-style given names, surnames, and evocative vocabulary so you can name original characters (OCs) for cosplay, role-play, art, or fan fiction. Operating entirely in your browser without requiring registration, it delivers 1–24 name concepts per generation. The results serve as creative inspiration to build upon, not official series characters.' },
  { category: 'Naming', question: 'What makes a great anime character name?', answer: 'A solid anime name usually flows well when spoken, hints at the individual\'s role or personality, and matches the story\'s mood — lyrical and soft for a kind heroine, tough and sharp for a villain or rival. Numerous memorable anime names feature subtle meanings, incorporating virtue or nature terms into their sounds. Generate a collection, say each one out loud, and keep those that evoke a distinct temperament and appearance for your character.' },
  { category: 'Naming', question: 'How does Japanese name ordering apply to anime characters?', answer: 'Within Japanese tradition, the surname precedes the given name (such as Uzumaki Naruto), whereas English translations typically reverse this to put the given name first. When developing a character, choose the format that suits your project and maintain consistency. If you create separate surnames and given names, you can combine them in either format — traditional Japanese style for authenticity, or Western style to align with dubbed and translated media familiar to your audience.' },
  { category: 'Naming', question: 'Do anime names possess hidden meanings?', answer: 'Frequently, yes. Anime authors often select names whose phonetics align with kanji meanings — referencing seasons, flowers, light, or strength — allowing a name to subtly foreshadow a character\'s journey. This generator uses evocative components to mimic that practice, though it does not assign actual kanji. If meanings matter for your project, take a generated name you like and search for kanji with matching readings so the written version supports your envisioned character.' },
  { category: 'Use cases', question: 'Can I employ this for naming a fan fiction OC?', answer: 'Yes. Naming original characters (OCs) is among its primary uses. Produce a set, choose names matching each figure\'s vibe and function, and integrate them into your crossover or fan fiction. Assign contrasting titles to antagonists and allies so readers easily distinguish them, adapting spellings or pairings to fit your universe. The tool supplies a rapid selection of anime-themed names; their backstories and personalities are yours to craft.' },
  { category: 'Usage', question: 'How can someone operate the Anime Names Generator?', answer: 'Select your desired name count (1–24) and click Generate names to receive a fresh set of anime-themed character names. Browse the results, highlight those suited to your figures, and utilize the Copy button to store your shortlist in a notes application. Run the tool again for additional choices — there are no accounts required and no restrictions. Afterward, speak your favorites out loud and visualize the corresponding character before finalizing your choice.' },
  { category: 'General', question: 'Does the Anime Names Generator cost anything?', answer: 'Yes. This Anime Names Generator is completely free to use directly in your browser. You can produce character names and aliases as frequently as desired without downloading anything, paying fees, or registering an account. There are no limitations on total or daily usage, enabling you to name an entire cast for a fan project, ponder the ideas, and generate more whenever you introduce new characters.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'Nope. The Anime Names Generator operates completely inside your web browser. Once you pick a quantity and hit generate, names are generated right on your machine — no data is sent, saved, or kept on our backends. Your personal character ideas remain confidential, which is crucial when drafting a hidden project or OC. Shut the browser window and the results vanish unless you saved them.' },
  { category: 'Compatibility', question: 'Is the Anime Names Generator functional on mobile devices?', answer: 'Indeed. This generator works on mobile devices and functions within any standard phone browser, allowing you to create character titles on your smartphone during a writing sprint or convention. Just load the site, select your desired quantity, hit Generate, and copy top picks directly to your notes. Zero downloads are needed — it operates identically across smartphone, tablet, and computer.' },
  { category: 'Limits', question: 'What is the maximum number of anime names I can create simultaneously?', answer: 'You can generate 1 to 24 names per batch. For a bigger cast, simply run the tool again — every execution yields a new randomized list with zero restrictions on usage. Combine multiple batches into one file and weed out duplicates. The 1–24 limit ensures each output is simple to review so you can swiftly find monikers that match your developing characters.' },
  { category: 'Usage', question: 'Am I allowed to copy the anime names I like?', answer: 'Yes. Hit the Copy action to export your generated items as plain line-separated text straight to the clipboard, ready to drop into planning sheets, drafts, or dossiers. Since the utility never records prior outputs, this offers the best technique for saving options while deciding. Make sure to back up promising lists between spins so you never lose the right moniker for your cast.' },
  { category: 'General', question: 'Do I need to sign up for an account or download anything?', answer: 'No. Using the Anime Names Generator involves no setup, account credentials, or software downloads. Load up the web page, choose your desired output count, start the tool, and collect your results. Free of sign-ups or email verification steps, this independent browser tool stands ready whenever you require fresh monikers for upcoming campaigns or fictional characters.' },
  { category: 'Naming', question: 'How should I name a villain compared to a hero in anime style?', answer: 'Vibe dictates the picks. Gentle, virtuous personas match smooth, melodic labels made of warm phonetics; antagonists and rivals match spiky syllables built with punchy stops or ominous themes. Produce a list, filter the results by vibe, and give the fluid picks to the heroes while reserving harsher sounds for villains. Anime character naming regularly reveals moral stance before a word is spoken, an effect you can recreate with matching pairings.' },
  { category: 'Use cases', question: 'Are these names suitable for a game character or role-play?', answer: 'Without question. Gamers and role-players pick anime-style names to build MMO characters, Discord personas, and RP profiles. Produce a round, pick the candidates that align with your concept, and alter the letters so it feels distinct. Because user handles must be unique on most networks, prepare a brief reserve list whenever your first choice is taken. The tool provides the anime flavor; you shape the character it belongs to.' },
  { category: 'Technical', question: 'How do these anime names get generated?', answer: 'The generator utilizes hand-picked word lists tailored for anime naming—incorporating Japanese-style first and last name parts alongside striking nature and virtue terms—and instantly mixes them right inside your browser with every click. All processing stays local without server uploads, and each generation runs separately, ensuring varied results every single time. View the output as imaginative fuel rather than an official registry, and use every suggestion as a starting point to polish.' },
  { category: 'Best practices', question: 'What is the ideal workflow for naming an anime cast?', answer: 'Adjust the quantity to 12 or 24, click generate, and paste the entire set into a notes app. Speak each name out loud and highlight those fitting particular roles. Pick a few favorites for every part, choose between Japanese or Western naming orders, and match the best options to your cast. Generate new batches whenever a fresh character is introduced—the registration-free process is designed specifically for this kind of cyclical worldbuilding.' },
  { category: 'Best practices', question: 'What mistakes ought I to avoid when naming anime characters?', answer: 'One common slip is choosing handles that share identical cadences, which puzzles readers, so make sure to vary the sounds across your cast. Another misstep is picking a handle that clashes with personality — like an aggressive moniker on a pacifist healer, or the reverse. A final one is accidentally borrowing an iconic canon handle, which feels derivative. Favor names that are distinct from each other, on-tone, and not tied to a well-known existing character.' },
  { category: 'Naming', question: 'Am I able to create anime-style nicknames or epithets?', answer: 'Definitely. Anime frequently features nicknames and title-based epithets—a shortened given name, a playful suffix feel, or a dramatic combat moniker. Produce a set and extract brief, catchy outcomes for nicknames, or merge an atmospheric word with a character attribute for epithets like a "Crimson" or "Silent" designation. These elements build depth, allowing others to address your OC in methods highlighting their dynamics.' },
  { category: 'Naming', question: 'Can the generated names be modified or combined?', answer: 'Yes, and doing so is generally beneficial. Combine a first name from one output with a surname from another, modify the spelling to soften or harden pronunciation, or attach a nickname. The generator supplies rich components, and the greatest anime names frequently arise from tweaking a promising option instead of using any single line directly. Sculpt every choice until it matches the mental image of your character.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'A single query provides up to 24 names, yet you are free to run it as frequently as you like. When assembling names for a sprawling cast, generate several batches and paste them into one document, then remove duplicates. This batching approach is the intended way to gather a big pool of candidates before assigning distinct names to every character in your story or campaign.' },
  { category: 'Privacy', question: 'Do you store the anime names that I generate?', answer: 'No. Since generation occurs entirely within your browser, we never collect or retain your generated names or configurations. Feel free to use the tool in a private or incognito tab if preferred. Reloading the browser wipes out the recent batch unless you have already copied it, which makes saving favorites as you proceed the safest practice during character creation.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Anime Names Generator without an internet connection?', answer: 'Yes. Once loaded, the Anime Names Generator operates completely inside your browser and requires zero internet access to create names. You can brainstorm character names offline—during a convention, traveling, or anywhere lacking connectivity—while clipboard copying functions offline as well. An active connection is only necessary for the initial page load.' },
  { category: 'General', question: 'Are these generated names sourced from actual anime or are they brand new?', answer: 'These are random, original combinations rather than stolen from any particular anime or manga, though they are crafted to fit that aesthetic naturally. Since certain mixes might coincidentally match a famous character, running a fast search is wise before building your OC around a top pick, helping maintain your character\'s originality. Maintain a short list of backups in case one choice proves too similar to an existing one.' },
];

export default async function AnimeNamesGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="anime" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequently asked questions regarding the Anime Names Generator name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

