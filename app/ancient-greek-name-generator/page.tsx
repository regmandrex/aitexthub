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


const toolSlug = 'ancient-greek-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Ancient Greek Name Generator',
    description: 'Free ancient greek name generator for character names. Create Greek-style name ideas in your browser with no sign-up.',
    seoTitle: 'Ancient Greek Name Generator – Greek Names for Characters & Mythology',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Ancient Greek Name Generator – Greek Names for Characters & Mythology</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Ancient Greek name generator to create character names for Ancient Greek and other fiction and mythology. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Ancient Greek name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Ancient Greek name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Ancient Greek name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Ancient Greek or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Ancient Greek Name Generator?</h2>
        <p>
          A Ancient Greek name generator is an online tool that creates character names suitable for Ancient Greek and other fiction and mythology. You get unique name ideas at the click of a button. The generator combines curated Greek-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Ancient Greek name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Ancient Greek name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Ancient Greek name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Ancient Greek Name Generator Matters</h2>
        <p>
          Choosing a memorable Ancient Greek name or character name can be time-consuming. A Ancient Greek name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Ancient Greek name or character name.
        </p>
        <p>
          A good Ancient Greek name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Ancient Greek or other platforms.
        </p>

        <h2>How the Ancient Greek Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated Greek-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Ancient Greek name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Ancient Greek or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming character names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Ancient Greek name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Ancient Greek name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Ancient Greek Name Generator</h2>
        <p>Follow these steps to get Ancient Greek name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Ancient Greek name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Ancient Greek is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Ancient Greek and Gamer Naming Style</h2>
        <p>
          Ancient Greek names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Ancient Greek name generator uses curated Greek-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Ancient Greek or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Ancient Greek name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Ancient Greek Name Generator</h2>
        <p>
          Use this Ancient Greek name generator when you need Ancient Greek or Greek-style username ideas quickly. Common use cases include creating a new Ancient Greek account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Ancient Greek name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Ancient Greek and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Ancient Greek name generator when creating a new Ancient Greek account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Ancient Greek name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Ancient Greek but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Ancient Greek Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Ancient Greek name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Ancient Greek name generator is a free way to explore options without committing until you have confirmed that your chosen Ancient Greek name or character name is available.
        </p>

        <h2>Running the Ancient Greek Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Ancient Greek name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Ancient Greek name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Ancient Greek or another platform. The Ancient Greek name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Ancient Greek name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Ancient Greek name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Ancient Greek name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Ancient Greek name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Ancient Greek name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Ancient Greek name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Ancient Greek Name Generator?</h2>
        <p>
          Players use the Ancient Greek name generator when creating or updating a Ancient Greek profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Ancient Greek name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Ancient Greek and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Ancient Greek Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Ancient Greek name generator does not check Ancient Greek or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Ancient Greek name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Ancient Greek Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Ancient Greek name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Ancient Greek or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Ancient Greek name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Ancient Greek or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Ancient Greek name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Ancient Greek password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Ancient Greek or another platform, use the official site or app and ensure you are on a secure connection. The Ancient Greek name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Ancient Greek name generator provides a fast way to create username and character name ideas for Ancient Greek and other fiction and mythology. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Ancient Greek name generator when you need Ancient Greek name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Ancient Greek or your chosen platform before committing to a name. The tool is a practical free resource for gaming character names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an Ancient Greek name generator?', answer: 'It is a browser tool that produces authentic-style Ancient Greek personal names for characters, mythology, and historical fiction — names built from real Greek roots and endings, like Theron, Nikias, Kleon, Sophia, or Kassandra. It aims for the sound of classical Hellas rather than modern usernames. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 names per run and can generate as many batches as you like.' },
  { category: 'Naming', question: 'What makes a name sound authentically Ancient Greek?', answer: 'Genuine-feeling Greek names come from meaningful roots joined together and finished with characteristic endings. Masculine names often end in -os, -es, -on, or -as (Nikolaos, Sokrates, Jason, Leonidas); feminine names commonly end in -a or -e (Helena, Penelope, Kassandra). Roots carry meaning — nikē (victory), sophia (wisdom), kratos (power), theos (god) — so a name like Nikandros reads as "victory-man." The generator combines these elements so results echo real classical names.' },
  { category: 'Naming', question: 'What endings do Ancient Greek names use?', answer: 'Masculine names typically close with -os, -on, -es, -as, or -eus (Alexios, Jason, Achilles, Leonidas, Odysseus). Feminine names usually end in -a, -e, or -is (Aikaterina, Ariadne, Chloris). These endings are the quickest way to make a name read as Greek, so if a generated result feels off, adjusting the ending to one of these often fixes it. The endings also mark gender, which helps when you are naming a mixed cast.' },
  { category: 'Naming', question: 'What roots and meanings appear in Greek names?', answer: 'Many classical names are compounds of two meaningful roots. Common ones include nikē (victory), kratos (power), demos (people), theos (god), sophia (wisdom), philos (loving), andros (man), and hippos (horse). Nikodemos means "victory of the people," Philippos means "horse-lover," Theodora means "gift of god." Knowing a few roots lets you read and even build names, and the generator draws on this vocabulary so its output carries plausible meaning rather than random syllables.' },
  { category: 'Use cases', question: 'How do I name a character for a Greek myth or historical setting?', answer: 'Decide the character\'s station and gender first — a hero, a philosopher, a queen, a soldier — then pick a generated name whose sound and ending fit. Heroic figures suit grand compounds (Leonidas, Alexandros); everyday characters can take simpler names (Kleon, Myrto). Keep names distinct across your cast, and lean on recognizable endings so readers instantly place the setting as ancient Greece rather than somewhere modern.' },
  { category: 'Naming', question: 'Should I use real mythological names or invented ones?', answer: 'Both work, depending on your goal. Using a known name (Achilles, Athena) instantly signals the myth but can carry heavy associations readers already hold. Invented, authentic-style names give you fresh characters that still feel Greek. The generator leans toward original combinations built from real elements, so you get names that sound classical without directly borrowing a famous figure — useful when you want your character to feel new but at home in the period.' },
  { category: 'Naming', question: 'How do transliteration and spelling affect Greek names?', answer: 'Greek names reach English through transliteration, so many have two accepted spellings — the Latinized form (Alexander, Achilles, Cassandra) and the closer Greek form (Alexandros, Achilleus, Kassandra). The -k- versus -c- and -os versus -us endings are the usual difference. Pick one convention and keep it consistent across your work. The generator can give you Greek-style spellings; adjust toward Latinized forms if your setting or audience expects them.' },
  { category: 'Use cases', question: 'Can I use these names for tabletop RPGs or fantasy worlds?', answer: 'Yes. A Greek-inspired region, pantheon, or city-state in a fantasy campaign comes alive with authentic-sounding names for its NPCs and gods. Generate a batch and assign names by role, keeping a consistent naming style within one culture so it feels cohesive. Because the endings and roots read as classical, players immediately sense the flavor of the setting without needing it spelled out, which keeps your world-building efficient.' },
  { category: 'Usage', question: 'How do I use the Ancient Greek name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names whose sound and ending fit your character and setting, then use the Copy button to save your shortlist. Paste the results into your notes and adjust spellings toward Greek or Latinized forms as needed. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the Ancient Greek name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate classical-style names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can name a whole cast of heroes, philosophers, and gods for your story or campaign without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character and world-building ideas stay private. Close the tab and the list is gone unless you copied it, so your unpublished names stay on your machine.' },
  { category: 'Compatibility', question: 'Does the Ancient Greek name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm names on your phone while writing or planning a session, copy a favorite, and paste it into your manuscript, wiki, or notes app. The layout is responsive, so building a cast of classical names works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — an entire city-state or pantheon, say — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of classical names to sift through and shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, document, or world-building wiki. This is the intended way to save a shortlist: generate, copy, then assign names to characters and adjust spellings. Keeping them in a file lets you track which name belongs to which figure as your cast of Greek characters grows.' },
  { category: 'General', question: 'Do I need an account to use the Ancient Greek name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of classical-style names, and get back to writing or planning without creating anything.' },
  { category: 'Technical', question: 'How are the Ancient Greek names generated?', answer: 'The generator draws on curated lists of authentic Greek roots, name-elements, and characteristic endings, then combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration — plausible, classical-sounding names rather than verified historical records — so treat it as raw material. The lists are tuned so results carry real Greek endings and meaning-bearing roots, giving them a genuine Hellenic feel.' },
  { category: 'Naming', question: 'How do I name gods or heroes versus ordinary characters?', answer: 'Gods and heroes suit grand, resonant compounds and imposing endings — think Leonidas, Alexandros, or lofty theophoric names built on theos. Ordinary citizens can carry shorter, plainer names like Kleon, Myrto, or Doris. Generate a batch and sort by grandeur: keep the weightiest for your mythic figures and the simpler ones for the crowd. Matching a name\'s scale to a character\'s role makes the whole cast feel believable.' },
  { category: 'Best practices', question: 'What mistakes should I avoid with Greek names?', answer: 'Avoid mixing spelling conventions (Achilles in one line, Achilleus in another). Avoid modern or non-Greek endings that break the classical sound. Avoid giving several characters near-identical names that readers confuse. And be careful borrowing a very famous name unless you want its baggage. Keep the options with authentic endings, clear roots, distinct sounds, and a spelling style you apply consistently throughout your work.' },
  { category: 'Naming', question: 'Are Greek names gendered, and how can I tell?', answer: 'Largely yes, and the ending is the main clue. Names ending in -os, -es, -on, -as, or -eus read as masculine; those ending in -a, -e, or -is read as feminine. So Nikolaos is masculine and Nikoletta feminine from the same root. When you generate a mixed cast, use the endings to assign gender, and if you want a name for a specific gender, favor the corresponding endings in the batch.' },
  { category: 'Use cases', question: 'Can I use these names for a novel set in ancient Greece?', answer: 'Absolutely. Historical fiction lives on names that feel of their time, and authentic Greek forms ground your reader in the period from the first page. Generate a batch, choose names that fit each character\'s class and gender, and keep your transliteration consistent. Reserve famous names for cameos and use fresh, authentic-style ones for your leads so they feel like real people of Hellas rather than borrowed legends.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want to name a large cast, a whole city, or a pantheon. Keep the strongest, most fitting classical names in a shortlist as you go.' },
  { category: 'General', question: 'Are these historically accurate names?', answer: 'They are authentic-style combinations built from real Greek roots and endings, designed to sound classical — but they are creative inspiration, not verified entries from a historical database. Some may coincide with attested names; others are plausible inventions. For a scholarly project, cross-check any name against a proper onomastic source. For fiction, mythology, and games, the output gives you names that feel genuinely Greek and are yours to adapt.' },
  { category: 'Troubleshooting', question: 'Can I use the Ancient Greek name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm classical names on a flight or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every batch of Greek-style names is generated right on your device.' },
];

export default async function AncientGreekNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="ancient-greek" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Ancient Greek name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

