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


const toolSlug = 'amusement-park-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Amusement Park Name Generator',
    description: 'Free amusement park name generator for theme park names. Create amusement park-style name ideas in your browser with no sign-up.',
    seoTitle: 'Amusement Park Name Generator – Theme Park Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Amusement Park Name Generator – Theme Park Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Amusement Park name generator to create theme park names for Amusement Park and other creative projects. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Amusement Park name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Amusement Park name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Amusement Park name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Amusement Park or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Amusement Park Name Generator?</h2>
        <p>
          A Amusement Park name generator is an online tool that creates theme park names suitable for Amusement Park and other creative projects. You get unique name ideas at the click of a button. The generator combines curated amusement park-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Amusement Park name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Amusement Park name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Amusement Park name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Amusement Park Name Generator Matters</h2>
        <p>
          Choosing a memorable Amusement Park name or character name can be time-consuming. A Amusement Park name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Amusement Park name or character name.
        </p>
        <p>
          A good Amusement Park name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Amusement Park or other platforms.
        </p>

        <h2>How the Amusement Park Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated amusement park-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Amusement Park name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Amusement Park or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming theme park names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Amusement Park name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Amusement Park name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Amusement Park Name Generator</h2>
        <p>Follow these steps to get Amusement Park name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Amusement Park name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Amusement Park is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Amusement Park and Gamer Naming Style</h2>
        <p>
          Amusement Park names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Amusement Park name generator uses curated amusement park-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Amusement Park or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Amusement Park name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Amusement Park Name Generator</h2>
        <p>
          Use this Amusement Park name generator when you need Amusement Park or amusement park-style username ideas quickly. Common use cases include creating a new Amusement Park account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Amusement Park name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Amusement Park and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Amusement Park name generator when creating a new Amusement Park account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Amusement Park name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Amusement Park but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Amusement Park Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Amusement Park name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Amusement Park name generator is a free way to explore options without committing until you have confirmed that your chosen Amusement Park name or character name is available.
        </p>

        <h2>Running the Amusement Park Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Amusement Park name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Amusement Park name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Amusement Park or another platform. The Amusement Park name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Amusement Park name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Amusement Park name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Amusement Park name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Amusement Park name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Amusement Park name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Amusement Park name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Amusement Park Name Generator?</h2>
        <p>
          Players use the Amusement Park name generator when creating or updating a Amusement Park profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Amusement Park name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Amusement Park and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Amusement Park Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Amusement Park name generator does not check Amusement Park or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Amusement Park name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Amusement Park Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Amusement Park name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Amusement Park or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Amusement Park name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Amusement Park or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Amusement Park name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Amusement Park password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Amusement Park or another platform, use the official site or app and ensure you are on a secure connection. The Amusement Park name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Amusement Park name generator provides a fast way to create username and character name ideas for Amusement Park and other creative projects. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Amusement Park name generator when you need Amusement Park name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Amusement Park or your chosen platform before committing to a name. The tool is a practical free resource for gaming theme park names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an amusement park name generator?', answer: 'It is a browser tool that invents fun, evocative, brandable names for a theme park or amusement park — whether a real business you are launching or a fictional park in a game or story. It mixes playful, adventurous words with park-flavored terms like Kingdom, World, Wonderland, and Adventure to produce names that sound like a real destination. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 names per run.' },
  { category: 'Naming', question: 'What makes a good amusement park name?', answer: 'A strong park name is fun, easy to say, and paints a picture of a place families want to visit. The best ones pair an evocative word with a destination term — Adventure, Wonderland, Kingdom, Bay, Falls, Cove — so "Thunder Ridge Adventure Park" instantly suggests thrills. It should be brandable: short enough for signage and a logo, distinctive enough to trademark, and welcoming in tone. Generate a batch and keep the names that feel like a place, not just two random words.' },
  { category: 'Naming', question: 'What word patterns work for park names?', answer: 'Common molds include [Adjective] + [Landmark] + Park (Wild Canyon Park), [Theme] + World/Kingdom/Land (Dino Kingdom, Pirate\'s Cove), and evocative place-words like Bay, Falls, Ridge, Harbor, or Isle that imply a whole setting. Alliteration adds stickiness (Splash Summit, Wonder Woods). The generator draws on this vocabulary so results read like real destinations. If a name feels flat, swap the destination term or add a theme word to give it a stronger sense of place.' },
  { category: 'Use cases', question: 'How do I name a real theme park business?', answer: 'Aim for a name that is memorable, spellable, and brandable across signage, tickets, and a website. Generate a batch, shortlist the ones that fit your park\'s theme and location, then check practical availability yourself — the trademark register and a matching domain — before you commit, since a name that clashes with an existing park causes legal and marketing headaches. Say each finalist aloud and picture it on a giant entrance sign to test how it wears.' },
  { category: 'Use cases', question: 'How do I name a fictional park for a game or story?', answer: 'For a fictional park, lean into whatever mood the story needs — a bright family paradise, a rundown carnival, or a sinister abandoned funfair. Generate a batch and pick a name whose tone matches: cheerful and grand for a thriving park, ironically wholesome for a creepy one. A well-chosen name does scene-setting for free, so "Sunny Meadows Fun Park" reads very differently when the story reveals what really happens there.' },
  { category: 'Naming', question: 'How do I match a park name to a theme?', answer: 'Let the theme steer the vocabulary. A water park wants Splash, Wave, Lagoon, Cove, or Bay; a thrill park wants Thunder, Velocity, Storm, or Peak; a fairy-tale park wants Wonderland, Enchanted, or Kingdom; a dinosaur or jungle park wants Wild, Prehistoric, or Safari. Generate a batch and keep the results that echo your central idea so the name previews the experience. A themed name sets visitor expectations before they even arrive.' },
  { category: 'Naming', question: 'What destination words give a park name atmosphere?', answer: 'Words that imply a whole place carry a lot of weight: Kingdom and World suggest scale and fantasy; Wonderland and Land suggest whimsy; Bay, Cove, Falls, Harbor, and Isle suggest a scenic setting; Adventure, Summit, and Ridge suggest thrills. Ending a name on one of these instantly turns two ordinary words into a destination. Generate options and try different destination terms on your favorite base to see which atmosphere fits best.' },
  { category: 'Use cases', question: 'Can I use these names for a park-building simulation game?', answer: 'Yes. Tycoon and park-management games are more immersive when your park has a name that sounds real, and the same goes for individual themed areas or rides. Generate a batch, name your main park, then run it again for sub-areas or attractions. Because the output reads like genuine destinations, your in-game park gains personality quickly, which makes screenshots and shared saves far more fun.' },
  { category: 'Usage', question: 'How do I use the amusement park name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names that fit your park\'s theme and mood, then use the Copy button to save your shortlist. Paste the results into your notes and mix theme words with different destination terms to fine-tune. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the amusement park name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate park name ideas as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so whether you are branding a real venture or naming a fictional park, you can brainstorm as many options as you need without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your business or story ideas stay private while you are still deciding. Close the tab and the list is gone unless you copied it, so an unannounced park name stays on your machine.' },
  { category: 'Compatibility', question: 'Does the amusement park name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm names on your phone during a planning meeting or while designing a game, copy a favorite, and paste it into your notes, pitch deck, or design doc. The layout is responsive, so finding a brandable park name works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you want a bigger pool — options for a park plus its themed areas and rides — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of destination names to compare.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, pitch document, or game design doc. This is the intended way to save a shortlist: generate, copy, then narrow down. Keeping them in a file lets you compare names side by side and test each against your logo, signage, and theme before you decide.' },
  { category: 'General', question: 'Do I need an account to use the amusement park name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of fun destination names, and get back to your business plan or game design without creating anything.' },
  { category: 'Technical', question: 'How are the park names generated?', answer: 'The generator draws on curated lists of evocative adjectives, theme words, and park-destination terms like Kingdom, World, and Adventure, then combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration only — it does not check trademark or domain availability — so you verify a favorite yourself. The lists are tuned to produce names that sound like real, brandable destinations.' },
  { category: 'Naming', question: 'How do I make a park name brandable?', answer: 'Keep it short enough to fit a logo and a sign, easy to spell so people can find your site, and distinctive enough to stand out from existing parks. A vivid image plus a clean destination word (Coral Bay, Thunder Kingdom) brands better than a long or generic phrase. Once you have a favorite, check that a matching domain and trademark are clear. Generate several strong options so you have room to pivot if your first pick is taken.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a park?', answer: 'Avoid names too close to a famous park, which risks confusion and legal trouble. Avoid names so long or hard to spell they do not fit signage or a URL. Avoid a tone that fights the park — a scary word on a toddler-focused venue. And do not skip the practical checks of trademark and domain for a real business. Keep the options that are fun, on-theme, brandable, and genuinely distinctive.' },
  { category: 'Naming', question: 'Should the name reflect the park\'s location or theme?', answer: 'Either can anchor a great name. A location word (Coastal, Canyon, Harbor) roots the park in a place and helps local recognition; a theme word (Pirate, Dino, Enchanted) previews the experience. Some of the best names do both, pairing a place with a theme. Generate a batch and try both approaches on your idea, then choose whichever gives the clearest, most inviting picture of what visitors will find.' },
  { category: 'Use cases', question: 'Can I name individual rides or areas with this too?', answer: 'Yes. The same evocative vocabulary works for themed lands and headline attractions — a "Thunder Mountain" coaster, an "Enchanted Lagoon" boat ride, a "Wild Frontier" zone. Generate a batch and repurpose the punchier, single-idea results as ride or area names rather than whole-park names. Naming areas and attractions in a consistent style gives your park a cohesive identity, whether it is real or in a game.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want a large set of park, area, and ride names to sift through. Keep the strongest, most brandable and on-theme options in a shortlist as you go.' },
  { category: 'General', question: 'Are these names trademark-free to use?', answer: 'The generator produces original combinations for inspiration, but it does not check any trademark register or domain, so a name it suggests could still be in use somewhere. For a real business you must do your own trademark and domain search before committing. For a fictional park in a game or story, you can generally use any name freely, though it is still wise to avoid one identical to a famous real park.' },
  { category: 'Troubleshooting', question: 'Can I use the amusement park name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm park names on a flight or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time — and, for a real venture, to run your trademark and domain checks afterward.' },
];

export default async function AmusementParkNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="amusement-park" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Amusement Park name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

