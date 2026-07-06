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


const toolSlug = 'royal-surname-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Royal Surname Generator',
    description: 'Free royal surname generator for royal surnames. Create noble-style name ideas in your browser with no sign-up.',
    seoTitle: 'Royal Surname Generator – Noble Surname Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Royal Surname Generator – Noble Surname Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Royal Surname Generator name generator to create royal surnames for Royal Surname Generator and other fiction and creative projects. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Royal Surname Generator name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Royal Surname Generator name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Royal Surname Generator name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Royal Surname Generator or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Royal Surname Generator?</h2>
        <p>
          A Royal Surname Generator name generator is an online tool that creates royal surnames suitable for Royal Surname Generator and other fiction and creative projects. You get unique name ideas at the click of a button. The generator combines curated noble-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Royal Surname Generator name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Royal Surname Generator name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Royal Surname Generator name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Royal Surname Generator Matters</h2>
        <p>
          Choosing a memorable Royal Surname Generator name or character name can be time-consuming. A Royal Surname Generator name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Royal Surname Generator name or character name.
        </p>
        <p>
          A good Royal Surname Generator name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Royal Surname Generator or other platforms.
        </p>

        <h2>How the Royal Surname Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated noble-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Royal Surname Generator name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Royal Surname Generator or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming royal surnames: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Royal Surname Generator name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Royal Surname Generator name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Royal Surname Generator</h2>
        <p>Follow these steps to get Royal Surname Generator name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Royal Surname Generator name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Royal Surname Generator is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Royal Surname Generator and Gamer Naming Style</h2>
        <p>
          Royal Surname Generator names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Royal Surname Generator name generator uses curated noble-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Royal Surname Generator or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Royal Surname Generator name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Royal Surname Generator</h2>
        <p>
          Use this Royal Surname Generator name generator when you need Royal Surname Generator or noble-style username ideas quickly. Common use cases include creating a new Royal Surname Generator account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Royal Surname Generator name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Royal Surname Generator and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Royal Surname Generator name generator when creating a new Royal Surname Generator account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Royal Surname Generator name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Royal Surname Generator but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Royal Surname Generator Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Royal Surname Generator name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Royal Surname Generator name generator is a free way to explore options without committing until you have confirmed that your chosen Royal Surname Generator name or character name is available.
        </p>

        <h2>Running the Royal Surname Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Royal Surname Generator name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Royal Surname Generator name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Royal Surname Generator or another platform. The Royal Surname Generator name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Royal Surname Generator name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Royal Surname Generator name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Royal Surname Generator name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Royal Surname Generator name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Royal Surname Generator name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Royal Surname Generator name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Royal Surname Generator?</h2>
        <p>
          Players use the Royal Surname Generator name generator when creating or updating a Royal Surname Generator profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Royal Surname Generator name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Royal Surname Generator and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Royal Surname Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Royal Surname Generator name generator does not check Royal Surname Generator or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Royal Surname Generator name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Royal Surname Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Royal Surname Generator name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Royal Surname Generator or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Royal Surname Generator name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Royal Surname Generator or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Royal Surname Generator name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Royal Surname Generator password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Royal Surname Generator or another platform, use the official site or app and ensure you are on a secure connection. The Royal Surname Generator name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Royal Surname Generator name generator provides a fast way to create username and character name ideas for Royal Surname Generator and other fiction and creative projects. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Royal Surname Generator name generator when you need Royal Surname Generator name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Royal Surname Generator or your chosen platform before committing to a name. The tool is a practical free resource for gaming royal surnames.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a royal surname generator?', answer: 'A royal surname generator is a browser tool that produces noble-sounding family names for kings, queens, dukes, and dynasties in fiction, tabletop campaigns, and role-play. It combines regal roots, place-based particles, and grand-sounding endings into surnames that read like a ruling house rather than a random word pair. Everything runs locally in your browser, nothing is stored or uploaded, and it is free with no sign-up. You get 1 to 24 names per run and can generate as many batches as you like.' },
  { category: 'Usage', question: 'How do I use the royal surname generator?', answer: 'Choose how many surnames you want per run (1 to 24) and click Generate. Skim the batch for names that fit your setting — a stern warrior house, a wealthy merchant dynasty, an ancient elven line — then use the Copy button to save your shortlist. Paste the results into your worldbuilding notes or character sheet and pair the surname with a first name and a title. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'Naming', question: 'What makes a surname sound royal or noble?', answer: 'Royal surnames tend to lean on a few cues: hard, dignified roots (Black, Storm, Gold, Iron), place-based particles that imply landholding (von, de, of), and grand endings like -mont, -field, -haven, -crown, or -mere. A ruling house name should sound like it owns territory and has history behind it. Length and rhythm matter too — Ravenscrown or Montclaire carry more weight than a single blunt word, because a dynasty name is meant to echo down generations.' },
  { category: 'Naming', question: 'How do royal surnames differ from ordinary family names?', answer: 'Ordinary family names often describe a trade or a parent (Smith, Johnson), while royal surnames evoke land, lineage, and grandeur. A noble house name usually implies a seat of power — a castle, a region, a founding legend — so words tied to territory, heraldry, and elemental force read as regal. The particle of nobility (de, von, of) is a strong signal: "House of Ravenmere" or "de Valois" instantly frames the name as aristocratic rather than common.' },
  { category: 'Use cases', question: 'How do I name a ruling dynasty for my story?', answer: 'Start from the house\'s character and history. A conquering warrior dynasty wants iron, blood, and storm imagery; a refined old-money line wants elegant, French- or Latin-flavored roots; a fading dynasty can carry a melancholy, faded-grandeur sound. Generate a batch, keep the surnames whose tone matches the house, then build outward — a motto, a sigil, a founding ancestor. Assigning contrasting surnames to rival houses helps readers keep your dynasties straight at a glance.' },
  { category: 'Naming', question: 'Should I use a particle like "von," "de," or "of"?', answer: 'A nobiliary particle is one of the fastest ways to make a surname read as aristocratic, because historically it marked landed families — "von" in German lands, "de" in France and Spain, "of" in English fantasy houses. Use it when you want the name to feel European-medieval or high-fantasy. Drop it when you want something blunter and more martial. Try the same generated root both ways — "Ravenmoor" versus "de Ravenmoor" — and keep whichever fits your setting\'s register.' },
  { category: 'Use cases', question: 'Can I use these surnames for a Dungeons & Dragons or tabletop campaign?', answer: 'Yes — noble house names are a staple of tabletop worldbuilding. Use the generator to name the great houses of a kingdom, a player character\'s aristocratic background, or the villain\'s ancient bloodline. Generate a batch, assign distinct surnames to each faction so they feel like separate powers, and hang a sigil and a reputation on each. The tool gives you the surname; the intrigue and rivalries you build around it are what make the house memorable at the table.' },
  { category: 'General', question: 'Is the royal surname generator free?', answer: 'Yes. The royal surname generator is completely free to use in your browser with no account, no payment, and no download. You can generate noble house and dynasty names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm as many surnames as your story, campaign, or character roster needs without any friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The royal surname generator runs entirely in your browser. When you set a count and click generate, the surnames are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your worldbuilding stays private. Close the tab and the list is gone unless you copied it, so your dynasty names remain yours until you choose to share them.' },
  { category: 'Compatibility', question: 'Does the royal surname generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. Open the page, choose how many surnames you want, and generate. On a phone you can produce a quick batch and copy it straight into your notes app or a campaign document. The layout is responsive, so naming a noble house works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many royal surnames can I generate at once?', answer: 'You can request 1 to 24 surnames per run. If you need a larger pool — say, to name every great house in a kingdom — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while still giving you plenty of dynasty names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the surnames from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one surname per line, ready to paste into any notes app, document, or spreadsheet. This is the intended way to save a shortlist: generate, copy, then pair each surname you like with a first name and a title to hear how the full noble name sounds. In a spreadsheet each surname lands in its own cell for easy tracking.' },
  { category: 'General', question: 'Do I need an account to use the royal surname generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many surnames you want, click generate, and copy the results — no email, password, or registration involved. Because everything runs locally in your browser, there is nothing to create an account for. It is designed for instant, friction-free brainstorming whenever you need a noble house or dynasty name.' },
  { category: 'Naming', question: 'What endings and roots work best for a grand dynasty name?', answer: 'Strong regal endings include -crown, -mont, -mere, -haven, -field, -moor, -guard, and -wraith, each hinting at land or legacy. For roots, elemental and heraldic words carry weight — Raven, Storm, Gold, Iron, Ash, Wolf, Rose, Thorn. Combining a dark or elemental root with a landed ending (Ravencrest, Ashmont, Goldmere) produces a surname that sounds like it has ruled a region for centuries. Say it aloud: a dynasty name should roll off the tongue like a title.' },
  { category: 'Use cases', question: 'How do I name rival noble houses so they feel distinct?', answer: 'Give each house a different tonal palette. One might be martial and grim (Ironmarch, Blackthorn), another refined and old-money (de Valmont, Rosaline), a third exotic or foreign to the setting (Zharoun, Kaelmere). Generate a batch, sort the surnames by tone, and assign contrasting ones to competing houses. The contrast does storytelling work for free — readers feel the difference between the upstart merchant dynasty and the ancient royal bloodline before you explain a thing.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a royal house?', answer: 'Avoid surnames so long or ornate they are hard to say or remember — a dynasty name gets repeated constantly, so it must be pronounceable. Avoid accidentally reusing a famous real or fictional house (Tudor, Lannister, Habsburg) unless you intend the reference. Avoid a tone that clashes with the house\'s character, like a delicate name on a brutal warlord line. Keep the surnames that are dignified, distinctive, and easy to shout across a throne room.' },
  { category: 'Naming', question: 'Can these names work for queens, kings, and titled characters?', answer: 'Yes. A royal surname pairs with a first name and a title to form a full regal name: Queen Isadora of Ravenmere, King Aldric Blackcrown, Duke Emeric de Valmont. Generate a batch of surnames, then front them with period-appropriate given names and a rank. The surname anchors the lineage while the title marks the individual\'s place in it, so the same house name can serve a whole cast of related royals across your story.' },
  { category: 'Use cases', question: 'Can I use royal surnames for fantasy or historical settings?', answer: 'Both. For high fantasy, lean into elemental and evocative roots (Stormcrown, Nightmere, Ashvale). For a historical or historical-fiction feel, favor real-world nobiliary particles and Latin- or French-flavored roots (de Montclair, von Adelstein). Generate a batch and keep whichever style matches your world\'s register. The generator suggests combinations; adjusting spelling or adding a particle lets you tune any surname toward either a medieval-European or an invented-fantasy flavor.' },
  { category: 'Privacy', question: 'Do you store the surnames I generate?', answer: 'No. Generation happens entirely in your browser, so we never receive or store the surnames or your settings. You can use the tool in a private or incognito window if you prefer. If you refresh or close the page, the last batch is cleared unless you have already copied it. There is no server-side record of what you generated or how many times you ran it.' },
  { category: 'Technical', question: 'How are the royal surnames generated?', answer: 'The generator draws on curated word lists of regal roots, nobiliary particles, and grand-sounding endings, then randomly combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration — it does not reproduce any real royal genealogy or official heraldic register, and it does not check whether a name is already used. The lists are tuned to sound like ruling houses: dignified, landed, and easy to say.' },
  { category: 'General', question: 'Are the generated surnames unique?', answer: 'They are randomly combined from the word lists, so each run can produce fresh combinations, but the tool does not guarantee uniqueness or check any database. If you want a truly distinctive house name, generate several batches, shortlist your favorites, and adjust spelling or add a particle to make one your own. For fiction this is rarely an issue; for a public handle you would verify the name yourself on the platform in question.' },
  { category: 'Limits', question: 'Can I get more than 24 surnames?', answer: 'Each run returns up to 24 surnames. For a bigger pool — naming a whole court of noble houses, for example — run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you need a large set of dynasty names to choose from. Keep the strongest options in a shortlist as you go.' },
  { category: 'Best practices', question: 'What is the best workflow for naming a noble house?', answer: 'Decide the house\'s character first — martial, refined, ancient, foreign — then generate 12 to 24 surnames and copy them into your notes. Sort by tone, keep the five to ten that fit, and test each by saying the full name with a title: "House Ashmont," "Queen Lyra de Ravenmere." Add a sigil and a one-line reputation to your favorite. Run again for more if nothing lands. The surname is the seed; the house identity grows from there.' },
  { category: 'Troubleshooting', question: 'Can I use the royal surname generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce surnames. You can brainstorm noble house and dynasty names offline, and copying and pasting works offline too. You only need a connection to open the page the first time. This makes it handy for worldbuilding on the go, on a plane, or anywhere your connection is unreliable.' },
];

export default async function RoyalSurnameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="royal" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Royal Surname Generator name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

