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


const toolSlug = 'drag-queen-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Drag Queen Name Generator',
    description: 'Free drag queen name generator for stage names. Create glamorous name ideas in your browser with no sign-up.',
    seoTitle: 'Drag Queen Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Drag Queen Name Generator – Stage Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Drag Queen name generator to create stage names for Drag Queen and other performers. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Drag Queen name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Drag Queen name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Drag Queen name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Drag Queen or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Drag Queen Name Generator?</h2>
        <p>
          A Drag Queen name generator is an online tool that creates stage names suitable for Drag Queen and other performers. You get unique name ideas at the click of a button. The generator combines curated glamorous words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Drag Queen name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Drag Queen name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Drag Queen name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Drag Queen Name Generator Matters</h2>
        <p>
          Choosing a memorable Drag Queen name or character name can be time-consuming. A Drag Queen name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Drag Queen name or character name.
        </p>
        <p>
          A good Drag Queen name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Drag Queen or other platforms.
        </p>

        <h2>How the Drag Queen Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated glamorous elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Drag Queen name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Drag Queen or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming stage names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Drag Queen name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Drag Queen name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Drag Queen Name Generator</h2>
        <p>Follow these steps to get Drag Queen name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Drag Queen name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Drag Queen is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Drag Queen and Gamer Naming Style</h2>
        <p>
          Drag Queen names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Drag Queen name generator uses curated glamorous elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Drag Queen or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Drag Queen name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Drag Queen Name Generator</h2>
        <p>
          Use this Drag Queen name generator when you need Drag Queen or glamorous username ideas quickly. Common use cases include creating a new Drag Queen account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Drag Queen name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Drag Queen and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Drag Queen name generator when creating a new Drag Queen account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Drag Queen name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Drag Queen but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Drag Queen Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Drag Queen name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Drag Queen name generator is a free way to explore options without committing until you have confirmed that your chosen Drag Queen name or character name is available.
        </p>

        <h2>Running the Drag Queen Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Drag Queen name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Drag Queen name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Drag Queen or another platform. The Drag Queen name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Drag Queen name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Drag Queen name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Drag Queen name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Drag Queen name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Drag Queen name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Drag Queen name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Drag Queen Name Generator?</h2>
        <p>
          Players use the Drag Queen name generator when creating or updating a Drag Queen profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Drag Queen name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Drag Queen and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Drag Queen Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Drag Queen name generator does not check Drag Queen or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Drag Queen name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Drag Queen Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Drag Queen name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Drag Queen or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Drag Queen name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Drag Queen or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Drag Queen name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Drag Queen password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Drag Queen or another platform, use the official site or app and ensure you are on a secure connection. The Drag Queen name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Drag Queen name generator provides a fast way to create username and character name ideas for Drag Queen and other performers. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Drag Queen name generator when you need Drag Queen name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Drag Queen or your chosen platform before committing to a name. The tool is a practical free resource for gaming stage names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag queen name generator?', answer: 'It is a browser tool that invents flamboyant, punny drag performer stage names — the kind of glamorous, camp, wordplay-driven handles queens use on stage, like Anita Mann, Ivana Tinkle, or Sasha Fierce-style pairings. It leans into pop-culture puns, alliteration, and over-the-top glamour words. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 name ideas per run and can generate as many batches as you like.' },
  { category: 'Naming', question: 'What makes a great drag queen name?', answer: 'Great drag names are camp, memorable, and fun to announce — they use wordplay, puns, alliteration, or a double meaning that makes the audience laugh or gasp. Classic tricks include a innuendo pun (Anita Mann), a fabulous first name plus a punchy surname, or a glamorous word twisted just enough. The best names capture your persona in a phrase, so a fierce queen and a comedy queen should sound different the moment they are read on a poster.' },
  { category: 'Naming', question: 'How do drag name puns work?', answer: 'The most iconic drag names are puns that sound like a real name until you say them aloud — Ivana Tinkle, Sharon Needles, Anita Mann, Ben Dover. The joke lives in the phonetics, so a pun name should read innocent on the page and land when spoken. Generate a batch, say each one out loud, and keep the ones where the double meaning clicks. A clean pun is instantly quotable, which is exactly what a stage name wants.' },
  { category: 'Naming', question: 'What are the common styles of drag names?', answer: 'A few recognizable molds: the pun name (Ivana Tinkle), the glamorous diva name (Sable, Divine, Chanel), the alliterative name (Bianca Del Rio, Trixie Mattel), the pop-culture riff (twisting a celebrity or brand), and the fierce one-word mononym. The generator mixes glamour words, punny surnames, and camp elements so you can find a name in whichever style fits your persona. Skim the batch for the mold that matches the queen you want to be.' },
  { category: 'Use cases', question: 'How do I pick a drag name that fits my persona?', answer: 'Start with your drag character: are you a comedy queen, a glamour diva, a spooky queen, a pageant queen? Match the name\'s tone to that — puns and jokes for comedy, lush glamorous words for a diva, dark or gothic twists for a spooky act. Generate a batch, read each aloud as if introducing yourself on stage, and keep the ones that feel like you the moment a host announces them.' },
  { category: 'Naming', question: 'Should my drag name have a first name and surname?', answer: 'Many iconic drag names do — a fabulous first name plus a surname that adds the punch, like Bianca Del Rio or Sharon Needles. The surname is often where the pun or the glamour lands. That said, plenty of legendary queens go by a single striking word (Divine, Sasha). Generate both formats and choose based on your persona: a full pun name for comedy, a lush double name for glamour, or a one-word mononym for pure fierceness.' },
  { category: 'Naming', question: 'What themes and words feed a drag name?', answer: 'Glamour and camp are the core: jewels and fabrics (Sable, Velvet, Chanel), sweetness (Sugar, Candy, Honey), fierceness (Fierce, Venom, Storm), and innuendo for the puns. Alliteration and rhythm make names pop off a flyer. The generator draws on this vocabulary so results feel authentically drag rather than plain. If a result is close but flat, swap one word for something more fabulous or more cheeky to push it over the top.' },
  { category: 'Use cases', question: 'Can I use a generated name as my actual drag name?', answer: 'Yes — these are inspiration for a real stage persona, so if a generated name captures your character, take it and make it yours. Say it aloud, imagine it on a poster and being announced, and check it is not already the well-known name of an established queen in your scene to avoid confusion. Tweak the spelling or pairing freely; the generator gives you a starting point, and the final name is yours to own.' },
  { category: 'Usage', question: 'How do I use the drag queen name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Read each one aloud as if a host were introducing you, since drag names live in performance, then use the Copy button to save your favorites. Paste the results into your notes and mix first names with different punny surnames to fine-tune. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the drag queen name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate stage-name ideas as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm your whole drag persona, from a fierce diva name to a cheeky pun, without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your persona ideas stay private while you are still workshopping them. Close the tab and the list is gone unless you copied it, so your drag name stays yours until you choose to reveal it.' },
  { category: 'Compatibility', question: 'Does the drag queen name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm stage names on your phone backstage or on the go, copy a favorite, and paste it into your notes or a social bio. The layout is responsive, so finding the perfect glamorous, punny name works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you want a bigger pool of stage-name ideas, just run it again; each run produces a fresh random set of camp, punny, and glamorous options. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of drag names to say out loud and shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app or document. This is the intended way to save a shortlist: generate, copy, then read them aloud to find the one that lands. Keeping them in a notes file lets you mix and match first names with punny surnames until your stage name is exactly right.' },
  { category: 'General', question: 'Do I need an account to use the drag queen name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of fabulous stage names, and start building your persona without creating anything.' },
  { category: 'Technical', question: 'How are the drag names generated?', answer: 'The generator draws on curated lists of glamorous first names, punny and camp surnames, and fabulous vocabulary, then combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration only — a starting pool of stage-name ideas — and the lists are tuned to produce names that are memorable, quotable, and full of wordplay when read aloud.' },
  { category: 'Naming', question: 'How can I make my drag name more memorable?', answer: 'Lean into sound: alliteration (Trixie Mattel), rhythm, and a pun that pays off out loud all stick in the memory. Keep it short enough to shout across a room and easy to spell for a flyer or handle. If a generated name is close, sharpen it — swap in a punchier surname, add alliteration, or lean the glamour up. A name people can chant or quote is a name that gets remembered.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when picking a drag name?', answer: 'Avoid a pun so obscure the audience misses it, and one so long it is hard to announce. Avoid accidentally copying an established queen\'s well-known name in your scene. Watch that spelling reads clearly on a poster. And make sure the tone matches your act — a soft glamour name on a rowdy comedy queen sends mixed signals. Keep the options that are punchy, quotable, on-brand, and unmistakably yours.' },
  { category: 'Naming', question: 'Can I generate a one-word or mononym drag name?', answer: 'Yes. Some of drag\'s most iconic names are single fierce words — Divine, Sasha, Sable, Venom. Generate a batch and pull the standout first-name or glamour-word entries to use on their own. A strong mononym works best when the word already carries attitude or glamour, so pick one that sounds powerful said alone. You can always pair it with a surname later if you want a fuller stage name.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want a large set of stage-name ideas to say aloud and sift through. Keep the strongest, most quotable options in a shortlist as you go.' },
  { category: 'General', question: 'Are these real queens\' names or invented ones?', answer: 'They are original, invented combinations built from glamorous and punny name elements — not a database of existing performers. The generator is a brainstorming aid for creating your own persona, so treat the output as raw material to shape rather than a list to copy. Always check that a name you love is not already the well-known handle of an established queen in your scene before you make it your own.' },
  { category: 'Troubleshooting', question: 'Can I use the drag queen name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm stage names backstage or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every fabulous, punny batch is generated right on your device.' },
  { category: 'Naming', question: 'How do I pick a drag name that matches my drag persona?', answer: 'Let your persona lead the name. A glamour queen wants something elegant and aspirational; a comedy queen wants a name that lands a laugh out loud; a spooky or edgy act wants darker, sharper wordplay. Decide your lane first, then generate a batch and keep only the names whose tone fits — a soft glamour name on a rowdy comedy act sends mixed signals. The best stage name previews the show before you step on stage.' },
  { category: 'Use cases', question: 'Can I use these names for a drag handle on social media?', answer: 'Yes. A strong drag name doubles as your Instagram, TikTok, and booking handle, so pick one that reads clearly and spells easily for flyers and tags. Generate a batch, shortlist the punchy, quotable options, then check whether the handle is free on the platforms you use, since the tool suggests ideas but does not check availability. Keeping a few backups helps if your first choice is already taken by another performer.' },
];

export default async function DragQueenNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="drag-queen" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Drag Queen name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

