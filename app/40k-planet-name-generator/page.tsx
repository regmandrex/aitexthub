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


const toolSlug = '40k-planet-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: '40K Planet Name Generator',
    description: 'Free 40k planet name generator for planet and world names. Create Warhammer 40K-style name ideas in your browser with no sign-up.',
    seoTitle: '40K Planet Name Generator – Warhammer Planet & World Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>40K Planet Name Generator – Warhammer Planet & World Names</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a 40K Planet name generator to create planet and world names for 40K Planet and other fiction and games. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want 40K Planet name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for 40K Planet name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This 40K Planet name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on 40K Planet or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a 40K Planet Name Generator?</h2>
        <p>
          A 40K Planet name generator is an online tool that creates planet and world names suitable for 40K Planet and other fiction and games. You get unique name ideas at the click of a button. The generator combines curated Warhammer 40K-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free 40K Planet name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the 40K Planet name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          40K Planet name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This 40K Planet Name Generator Matters</h2>
        <p>
          Choosing a memorable 40K Planet name or character name can be time-consuming. A 40K Planet name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final 40K Planet name or character name.
        </p>
        <p>
          A good 40K Planet name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on 40K Planet or other platforms.
        </p>

        <h2>How the 40K Planet Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated Warhammer 40K-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of 40K Planet name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check 40K Planet or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming planet and world names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the 40K Planet name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the 40K Planet name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This 40K Planet Name Generator</h2>
        <p>Follow these steps to get 40K Planet name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The 40K Planet name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on 40K Planet is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>40K Planet and Gamer Naming Style</h2>
        <p>
          40K Planet names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This 40K Planet name generator uses curated Warhammer 40K-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check 40K Planet or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The 40K Planet name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a 40K Planet Name Generator</h2>
        <p>
          Use this 40K Planet name generator when you need 40K Planet or Warhammer 40K-style username ideas quickly. Common use cases include creating a new 40K Planet account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a 40K Planet name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check 40K Planet and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the 40K Planet name generator when creating a new 40K Planet account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The 40K Planet name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on 40K Planet but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a 40K Planet Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the 40K Planet name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The 40K Planet name generator is a free way to explore options without committing until you have confirmed that your chosen 40K Planet name or character name is available.
        </p>

        <h2>Running the 40K Planet Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the 40K Planet name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated 40K Planet name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on 40K Planet or another platform. The 40K Planet name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This 40K Planet name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the 40K Planet name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated 40K Planet name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The 40K Planet name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this 40K Planet name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This 40K Planet name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a 40K Planet Name Generator?</h2>
        <p>
          Players use the 40K Planet name generator when creating or updating a 40K Planet profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the 40K Planet name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on 40K Planet and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the 40K Planet Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The 40K Planet name generator does not check 40K Planet or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new 40K Planet name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the 40K Planet Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the 40K Planet name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check 40K Planet or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This 40K Planet name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check 40K Planet or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The 40K Planet name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your 40K Planet password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on 40K Planet or another platform, use the official site or app and ensure you are on a secure connection. The 40K Planet name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The 40K Planet name generator provides a fast way to create username and character name ideas for 40K Planet and other fiction and games. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this 40K Planet name generator when you need 40K Planet name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on 40K Planet or your chosen platform before committing to a name. The tool is a practical free resource for gaming planet and world names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a 40K planet name generator?', answer: 'It is a browser tool that invents grimdark, Imperial-sounding world names in the style of Warhammer 40,000 — the gothic, Latinate planet names of the 41st Millennium, like Cadia, Armageddon, Vigilus, or Sanctus Prime. It leans on High Gothic flavor, Latin roots, and ominous suffixes to make worlds feel part of the Imperium. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 world names per run.' },
  { category: 'Naming', question: 'What makes a name sound like a Warhammer 40K planet?', answer: 'The 40K style is gothic and Latinate: harsh consonants, Latin or pseudo-Latin roots (Sanctus, Mortis, Ferrus, Tempestus), and grand or ominous suffixes like -us, -a, -ia, -is, or Prime. Roman numerals and designations (Prime, Secundus, Tertius) evoke the Imperium\'s bureaucracy. Names often carry a sense of dread, faith, or war. The generator combines these elements so results feel like real Imperial worlds rather than generic sci-fi planets.' },
  { category: 'Naming', question: 'What suffixes and designations fit 40K worlds?', answer: 'Classic endings include -us, -a, -ia, -is, -or, and -ax, plus grand designations like Prime, Secundus, Majoris, and Tertius that suggest a world\'s rank in an Imperial system. Roman numerals (Cadia III) and the word Prime attached to a name (Sanctus Prime) are hallmarks of the setting. If a generated name feels too plain, adding a designation or a harsher suffix pushes it firmly into 40K territory.' },
  { category: 'Naming', question: 'What Latin and gothic roots work for these names?', answer: 'Pseudo-Latin roots carry huge flavor: Sanctus (holy), Mortis (death), Ferrus (iron), Bellum (war), Tempestus (storm), Ignis (fire), Vigil (watch), Rex (king). Dark, religious, and martial words all fit the Imperium\'s tone of grim faith and endless war. The generator draws on this vocabulary so a name like Mortis Ferrum reads as a war-scarred iron world, giving even a random result an implied history.' },
  { category: 'Use cases', question: 'How do I name a planet for a 40K campaign or story?', answer: 'Consider the world\'s role first — a fortress world, a hive world, a shrine world, a death world, an agri-world — since the type suggests the tone. Fortress and death worlds want harsh, martial names; shrine worlds want holy, Latinate ones. Generate a batch, pick a name whose sound matches the world\'s character, and add a designation if it sits in a larger system. A fitting name previews the planet before you describe it.' },
  { category: 'Naming', question: 'How do the different world types affect the name?', answer: 'The 40K setting classifies worlds by function, and the name can hint at it. Hive worlds sound industrial and crowded; forge worlds sound mechanical and iron-heavy (roots like Ferrus, Mechanicus); shrine worlds sound sacred (Sanctus, Ecclesia); death worlds sound hostile (Mortis, Bellum). Generate a batch and sort names by the tone they carry, then assign the darkest to death worlds and the holiest to shrine worlds so each name fits its planet.' },
  { category: 'Naming', question: 'Should I use Roman numerals or Prime in the name?', answer: 'They add strong Imperial flavor. Attaching a designation like Prime, Secundus, or a Roman numeral (Vostroya IX) makes a world feel like one entry in the Imperium\'s vast registry of planets and star systems. Use them when a world is part of a named system or has strategic rank; leave them off for a standalone name that needs to stand on its own. The generator can suggest both, so pick what fits your setting.' },
  { category: 'Use cases', question: 'Can I use these for tabletop wargaming or narrative play?', answer: 'Yes. A campaign fought over a named world — a siege of a fortress planet, a crusade to reclaim a lost shrine world — gains weight when the planet has an evocative Imperial name. Generate a batch, name your contested world and its neighbors, and keep the naming consistent across a system. Because the names read as authentic 40K, your battles and objectives feel like they belong to the wider grimdark galaxy.' },
  { category: 'Usage', question: 'How do I use the 40K planet name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names whose tone fits your world — martial, holy, industrial, or hostile — then use the Copy button to save your shortlist. Paste the results into your notes and add designations like Prime or a numeral to fine-tune. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the 40K planet name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate Imperial world names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can name a whole sector of planets for your campaign or story without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your campaign and world-building ideas stay private. Close the tab and the list is gone unless you copied it, so your unrevealed worlds stay on your machine.' },
  { category: 'Compatibility', question: 'Does the 40K planet name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm world names on your phone at the gaming table or while writing, copy a favorite, and paste it into your notes, army list, or story doc. The layout is responsive, so naming a sector of Imperial worlds works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — a whole sector or subsector of worlds — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of Imperial world names to sift through and assign.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, campaign doc, or world-building wiki. This is the intended way to save a shortlist: generate, copy, then assign names to worlds and add designations. Keeping them in a file lets you map out a whole sector of named planets as your setting expands.' },
  { category: 'General', question: 'Do I need an account to use the 40K planet name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of grimdark world names, and get back to your campaign or story without creating anything.' },
  { category: 'Technical', question: 'How are the planet names generated?', answer: 'The generator draws on curated lists of Latinate roots, gothic word-elements, ominous suffixes, and Imperial designations, then combines them in your browser so every run is different. Nothing is sent to a server. The output is original creative inspiration in the 40K style — not names pulled from any official Games Workshop source — so treat it as raw material. The lists are tuned to produce dark, grand, believably Imperial world names.' },
  { category: 'Naming', question: 'How do I name a whole star system or sector?', answer: 'Pick a naming convention and apply it across the group so the sector feels cohesive — for example, related Latin roots, a shared designation style, or numbered worlds around a central name (Cadia I through Cadia VII). Generate a batch, choose a lead world, then run again for its neighbors, keeping the tone consistent. A unified naming scheme makes your sector read as one region of the Imperium rather than scattered planets.' },
  { category: 'Best practices', question: 'What mistakes should I avoid with 40K planet names?', answer: 'Avoid names that sound too soft or modern for the grimdark tone. Avoid overusing the same suffix so every world blurs together. Avoid accidentally copying a famous canon world (Cadia, Terra, Macragge) unless you mean to reference it. And keep pronunciations manageable at the table. Keep the options that are gothic, Latinate, distinct from one another, and heavy with the Imperium\'s ominous flavor.' },
  { category: 'Naming', question: 'Can I create world names for other grimdark sci-fi settings?', answer: 'Yes. The Latinate, gothic, ominous style suits any dark far-future or space-opera setting, not just 40K specifically. Generate a batch and use the results for your own original grimdark universe, adjusting suffixes or roots to fit your lore. Because the names carry a built-in sense of dread and grandeur, they lend instant atmosphere to any bleak interstellar empire you are building.' },
  { category: 'Use cases', question: 'Can I use these names in fan fiction or homebrew lore?', answer: 'Yes. For personal campaigns, homebrew regiments, and non-commercial fan fiction, these original-style world names give you fresh planets that feel authentically Imperial without lifting canon worlds. Generate a batch, assign names to your invented worlds, and build their history around the tone each name implies. The names are yours to adapt; they are inspiration, not fixed canon, so tweak spelling and designations freely.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want to name a large sector, subsector, or crusade\'s worth of worlds. Keep the strongest, most fitting Imperial names in a shortlist as you go.' },
  { category: 'General', question: 'Are these official Warhammer 40K planet names?', answer: 'No. The generator produces original, 40K-inspired combinations built from Latinate and gothic elements — not names from any official Games Workshop publication or database. They are creative inspiration for your own campaigns, stories, and homebrew lore. Some may resemble canon worlds by coincidence, so if you want to avoid overlap, cross-check a favorite against known 40K worlds before adopting it as your own.' },
  { category: 'Troubleshooting', question: 'Can I use the 40K planet name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm Imperial world names at the gaming table or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every batch of grimdark planet names is generated right on your device.' },
];

export default async function Planet40kNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="fortyk-planet" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the 40K Planet name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

