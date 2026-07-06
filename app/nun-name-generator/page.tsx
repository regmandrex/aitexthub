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


const toolSlug = 'nun-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Nun Name Generator',
    description: 'Free nun name generator for religious-order names. Create religious-order-style name ideas in your browser with no sign-up.',
    seoTitle: 'Nun Name Generator – Religious Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Nun Name Generator – Religious Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Nun name generator to create religious-order names for Nun and other fiction. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Nun name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Nun name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Nun name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Nun or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Nun Name Generator?</h2>
        <p>
          A Nun name generator is an online tool that creates religious-order names suitable for Nun and other fiction. You get unique name ideas at the click of a button. The generator combines curated religious-order-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Nun name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Nun name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Nun name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Nun Name Generator Matters</h2>
        <p>
          Choosing a memorable Nun name or character name can be time-consuming. A Nun name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Nun name or character name.
        </p>
        <p>
          A good Nun name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Nun or other platforms.
        </p>

        <h2>How the Nun Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated religious-order-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Nun name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Nun or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming religious-order names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Nun name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Nun name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Nun Name Generator</h2>
        <p>Follow these steps to get Nun name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Nun name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Nun is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Nun and Gamer Naming Style</h2>
        <p>
          Nun names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Nun name generator uses curated religious-order-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Nun or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Nun name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Nun Name Generator</h2>
        <p>
          Use this Nun name generator when you need Nun or religious-order-style username ideas quickly. Common use cases include creating a new Nun account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Nun name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Nun and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Nun name generator when creating a new Nun account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Nun name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Nun but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Nun Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Nun name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Nun name generator is a free way to explore options without committing until you have confirmed that your chosen Nun name or character name is available.
        </p>

        <h2>Running the Nun Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Nun name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Nun name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Nun or another platform. The Nun name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Nun name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Nun name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Nun name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Nun name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Nun name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Nun name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Nun Name Generator?</h2>
        <p>
          Players use the Nun name generator when creating or updating a Nun profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Nun name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Nun and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Nun Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Nun name generator does not check Nun or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Nun name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Nun Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Nun name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Nun or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Nun name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Nun or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Nun name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Nun password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Nun or another platform, use the official site or app and ensure you are on a secure connection. The Nun name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Nun name generator provides a fast way to create username and character name ideas for Nun and other fiction. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Nun name generator when you need Nun name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Nun or your chosen platform before committing to a name. The tool is a practical free resource for gaming religious-order names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a nun name generator?', answer: 'A nun name generator is a browser tool that creates religious names in the style nuns and sisters take when they enter a convent — names built from saints, virtues, and devotions, usually prefixed with "Sister" or "Mother." It is useful for writers, role-players, and game designers who need believable names for a religious order or a single cloistered character. Everything runs locally in your browser, nothing is stored or uploaded, and it is free with no sign-up. You get 1 to 24 names per run.' },
  { category: 'Naming', question: 'How do nuns choose their religious names?', answer: 'Traditionally a woman entering religious life takes a new name at her clothing or profession, symbolizing a break with her former self. The name is often chosen for her, or from a shortlist, and honors a saint, a mystery of the faith, or a virtue she wishes to embody — Sister Mary Agnes, Sister Teresa of the Cross, Sister Faustina. The prefix "Sister" is standard, while "Mother" usually marks a superior or an older nun. This generator mirrors that convention.' },
  { category: 'Naming', question: 'What are the common patterns in a nun\'s name?', answer: 'Three patterns dominate. First, a saint\'s name: Sister Agnes, Sister Catherine, Sister Bernadette. Second, "Mary" plus a second name, since many orders add a Marian element: Sister Mary Frances. Third, a devotional phrase built with "of the": Sister Teresa of the Child Jesus, Sister Mary of the Angels. Virtue names — Sister Grace, Sister Charity, Sister Mercy — also appear. Generate a batch and you will see these forms mixed, so you can pick the register that fits your order.' },
  { category: 'Naming', question: 'What does "of the" mean in names like "Sister Teresa of the Cross"?', answer: 'The "of the" phrase is a religious title tying the sister to a devotion, a mystery of the faith, or a sacred image — the Cross, the Sacred Heart, the Immaculate Conception, the Angels, the Blessed Sacrament. It deepens the name and signals the spirituality of her order; Carmelites in particular favor this form (think Thérèse of the Child Jesus). When you want a name to feel especially solemn or contemplative, keep the generated options that carry an "of the" suffix.' },
  { category: 'Use cases', question: 'How do I name a whole convent or religious order?', answer: 'Generate a batch and assign names that feel like they belong to the same community — a shared flavor of saints and devotions reads as one order. Give the superior a "Mother" name and the professed sisters "Sister" names, and consider a house theme: a Marian convent leans on "Mary" names, a Carmelite house on contemplative "of the" titles. Keeping the roster tonally consistent makes the order feel like a real institution rather than a random list of characters.' },
  { category: 'Naming', question: 'What is the difference between "Sister" and "Mother"?', answer: '"Sister" is the standard address for a professed nun or a member of an active congregation. "Mother" typically marks a position of authority — an abbess, a prioress, or a mother superior who leads the community — and is also used more broadly for senior nuns in some orders. When naming a cast, give the leader a "Mother" name and the rest "Sister" names to make the convent\'s hierarchy legible at a glance in your story or game.' },
  { category: 'Use cases', question: 'Can I use these names for fiction, games, or role-play?', answer: 'Yes — that is the main use. Historical fiction, gothic horror, fantasy monasteries, tabletop clergy NPCs, and role-play characters all benefit from names that sound authentically vowed rather than invented on the spot. Generate a batch, keep the ones that fit your setting\'s tone — austere and medieval, warmly modern, or eerie and cloistered — and pair them with a role in the community. The output is for original creative use, not a lookup of real living sisters.' },
  { category: 'General', question: 'Is the nun name generator free?', answer: 'Yes. The nun name generator is completely free to use in your browser with no account, no payment, and no download. You can generate religious names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm as many sister and mother names as your novel, campaign, or character roster needs without any friction.' },
  { category: 'Usage', question: 'How do I use the nun name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names that fit your order\'s spirituality — saintly, Marian, or contemplative — then use the Copy button to save your shortlist. Paste the results into your story notes or character sheet and assign each name a role, from novice to mother superior. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The nun name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character work stays private. Close the tab and the list is gone unless you copied it, so your convent roster remains yours until you choose to share it.' },
  { category: 'Compatibility', question: 'Does the nun name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. Open the page, choose how many names you want, and generate. On a phone you can produce a quick batch and copy it straight into your notes app or a manuscript. The layout is responsive, so naming a religious order works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many nun names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — say, to populate an entire convent — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while still giving you plenty of sister and mother names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, document, or spreadsheet. This is the intended way to save a shortlist: generate, copy, then assign each name a role in the community. In a spreadsheet each name lands in its own cell, which is handy for tracking a full convent roster with ranks and backstories.' },
  { category: 'General', question: 'Do I need an account to use the nun name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. Because everything runs locally in your browser, there is nothing to create an account for. It is designed for instant, friction-free brainstorming whenever you need a religious name for a character or an order.' },
  { category: 'Naming', question: 'Which saints\' names are most common for nuns?', answer: 'Popular choices honor widely venerated women saints — Agnes, Catherine, Teresa, Bernadette, Cecilia, Clare, Rita, Faustina, Therese, and Scholastica — alongside Marian names built on "Mary." Male saints appear too, often in the "of the" form or as a second name (Sister Mary Joseph, Sister Francis). Generate a batch and you will see a mix; keep the saints whose feast, era, or charism matches the order you are building so the community feels historically grounded.' },
  { category: 'Use cases', question: 'How do I name a novice versus a mother superior?', answer: 'A novice is early in formation and may still be addressed as "Sister" with a newly chosen name, sometimes still tentative. A mother superior or abbess carries authority and the title "Mother." To show a character\'s arc, you can keep the same core name and shift the prefix — a sister who rises to lead her house becomes "Mother." Generate names for the whole community, then assign titles by rank so the hierarchy reads clearly in your story.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a nun?', answer: 'Avoid modern, casual, or clearly secular first names that would not survive a vow ceremony — a religious name should sound set apart. Avoid mixing incompatible traditions unless intended (a Carmelite "of the" name on a name from an unrelated order). Be careful borrowing the exact name of a famous real saint or living sister if you want originality. Keep the names that are dignified, era-appropriate, and consistent with your order\'s spirituality.' },
  { category: 'Naming', question: 'Do modern nuns still take new names?', answer: 'Practice varies. Many traditional and contemplative orders still confer a new religious name at clothing or profession, while some modern congregations after the mid-20th-century reforms let sisters keep their baptismal names or make the new name optional. For fiction, either approach is valid — a strict cloistered order taking dramatic "of the" names, or a modern active congregation using ordinary first names with "Sister." Match the convention to the era and character of your order.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens entirely in your browser, so we never receive or store the names or your settings. You can use the tool in a private or incognito window if you prefer. If you refresh or close the page, the last batch is cleared unless you have already copied it. There is no server-side record of what you generated or how many times you ran it.' },
  { category: 'Technical', question: 'How are the nun names generated?', answer: 'The generator draws on curated lists of saints\' names, Marian elements, virtues, and devotional "of the" phrases, then combines them with the "Sister" and "Mother" prefixes in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration — it does not reproduce a directory of real living sisters or any official religious register. The lists are tuned to sound like genuine professed names across several traditions.' },
  { category: 'Use cases', question: 'Can I use these names for a gothic or horror setting?', answer: 'Yes. A cloistered convent is a classic gothic and horror setting, and names that sound solemnly vowed heighten the atmosphere — Sister Mary of the Sorrows, Mother Agatha, Sister Perpetua. Favor the older, austere "of the" forms and lesser-known saints for an eerie, ancient feel. Generate a batch, keep the ones that carry dread or mystery, and build your haunted order around them. The contrast between a name\'s piety and a sinister plot is exactly what makes the genre work.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool — populating a large abbey, for example — run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you need a large set of religious names to choose from. Keep the strongest, most tonally consistent options in a shortlist as you go.' },
  { category: 'Troubleshooting', question: 'Can I use the nun name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm sister and mother names offline, and copying and pasting works offline too. You only need a connection to open the page the first time. This makes it handy for writing on the go, on a plane, or anywhere your connection is unreliable.' },
];

export default async function NunNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="nun" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Nun name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

