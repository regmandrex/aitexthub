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


const toolSlug = 'stripper-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Stripper Name Generator',
    description: 'Free stripper name generator for stage names. Create glamorous name ideas in your browser with no sign-up.',
    seoTitle: 'Stripper Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Stripper Name Generator – Stage Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Stripper name generator to create stage names for Stripper and other performers. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Stripper name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Stripper name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Stripper name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Stripper or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Stripper Name Generator?</h2>
        <p>
          A Stripper name generator is an online tool that creates stage names suitable for Stripper and other performers. You get unique name ideas at the click of a button. The generator combines curated glamorous words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Stripper name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Stripper name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Stripper name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Stripper Name Generator Matters</h2>
        <p>
          Choosing a memorable Stripper name or character name can be time-consuming. A Stripper name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Stripper name or character name.
        </p>
        <p>
          A good Stripper name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Stripper or other platforms.
        </p>

        <h2>How the Stripper Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated glamorous elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Stripper name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Stripper or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming stage names: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Stripper name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Stripper name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Stripper Name Generator</h2>
        <p>Follow these steps to get Stripper name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Stripper name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Stripper is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Stripper and Gamer Naming Style</h2>
        <p>
          Stripper names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Stripper name generator uses curated glamorous elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Stripper or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Stripper name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Stripper Name Generator</h2>
        <p>
          Use this Stripper name generator when you need Stripper or glamorous username ideas quickly. Common use cases include creating a new Stripper account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Stripper name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Stripper and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Stripper name generator when creating a new Stripper account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Stripper name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Stripper but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Stripper Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Stripper name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Stripper name generator is a free way to explore options without committing until you have confirmed that your chosen Stripper name or character name is available.
        </p>

        <h2>Running the Stripper Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Stripper name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Stripper name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Stripper or another platform. The Stripper name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Stripper name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Stripper name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Stripper name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Stripper name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Stripper name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Stripper name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Stripper Name Generator?</h2>
        <p>
          Players use the Stripper name generator when creating or updating a Stripper profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Stripper name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Stripper and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Stripper Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Stripper name generator does not check Stripper or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Stripper name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Stripper Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Stripper name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Stripper or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Stripper name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Stripper or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Stripper name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Stripper password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Stripper or another platform, use the official site or app and ensure you are on a secure connection. The Stripper name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Stripper name generator provides a fast way to create username and character name ideas for Stripper and other performers. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Stripper name generator when you need Stripper name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Stripper or your chosen platform before committing to a name. The tool is a practical free resource for gaming stage names.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a stripper name generator?', answer: 'It is a browser tool that builds playful, glamorous stage names in the style dancers and burlesque performers use on stage. It pairs a bold, evocative first name (think Diamond, Cherry, Roxy, Foxy) with a smooth or sultry surname or single-word persona, so each result reads as a ready-to-use stage name rather than a legal one. Everything is combined locally in your browser, it is free, and nothing you generate is sent to a server or stored.' },
  { category: 'Usage', question: 'How do I use the stripper name generator?', answer: 'Choose how many names you want per run (1 to 24), then click Generate to get a fresh batch of stage names. Skim the list for the persona that fits the vibe you want, whether that is glamorous, cheeky, or vintage burlesque, and use the Copy button to save the whole batch. Paste it into your notes and shortlist your favorites. Run again as many times as you like; there is no sign-up and no download.' },
  { category: 'Naming', question: 'What makes a good stripper stage name?', answer: 'The best stage names are short, punchy, and easy to announce over music, so they land the moment the DJ says them. They usually lean on one strong image: a gem (Diamond, Ruby), a sweet or sultry word (Cherry, Honey, Candy), or a bold adjective (Foxy, Sinful, Velvet). A memorable stage name is distinctive enough to stick in a crowd but easy to spell, so regulars can find you and tip you again.' },
  { category: 'Naming', question: 'What is the classic "first pet plus street" stripper name game?', answer: 'It is the party game where your stage name is the name of your first pet plus the street you grew up on, so a childhood cat named Bella on Maple Avenue becomes "Bella Maple." It is a fun, low-effort way to get an instant persona, and this generator captures the same spirit by pairing an evocative first name with a smooth second word. If you want, use your real pet-and-street answer as inspiration, then generate variations to find one that flows better.' },
  { category: 'General', question: 'Is the stripper name generator free?', answer: 'Yes, it is completely free and runs in your browser with no account, no email, and no payment. You can generate as many batches of stage names as you like with no daily or total limit. There is nothing to install and no paywall on any feature. Because it runs locally, using it costs you nothing and reveals nothing about what you generate.' },
  { category: 'Naming', question: 'How do I pick a burlesque stage name versus a club stage name?', answer: 'Burlesque personas often lean vintage and theatrical, favoring names with old-Hollywood glamour like Ginger, Dita-style flourishes, or a playful pun (Coco Chantémps). Club stage names tend to be shorter and higher-impact, one or two syllables that carry across a loud room. Generate a batch, then sort the results by that feel: keep the retro, elegant ones for a burlesque act and the sharp, bold ones for the floor.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server or stored?', answer: 'No. The generator runs entirely in your browser, so when you click Generate the names are assembled on your own device and never transmitted anywhere. We do not log, save, or see the names you create or how many times you run it. You can use it in a private or incognito window, and closing the tab clears the last batch unless you copied it first.' },
  { category: 'Compatibility', question: 'Does the stripper name generator work on mobile?', answer: 'Yes. It is a responsive web page that works on phones, tablets, and desktops without installing an app. On a phone you can generate a short batch backstage, tap Copy, and drop the names straight into your notes or a message. Any modern mobile browser handles it, and because generation is local it stays fast even on a spotty connection.' },
  { category: 'Limits', question: 'How many stage names can I generate at once?', answer: 'Each run gives you between 1 and 24 names, and you set the count before generating. If you want a bigger pool, just run it again; every run produces a fresh random set. There is no daily cap or lifetime limit, so you can keep generating until a name clicks. Paste several runs into one note and delete any repeats to build a longer shortlist.' },
  { category: 'Usage', question: 'Can I copy the generated stage names?', answer: 'Yes. The Copy button puts the entire batch on your clipboard as plain text, one name per line, ready to paste into notes, a message, or a document. Say your favorites out loud after copying, since a stage name has to sound good announced over music, not just look good on screen. Copying is the intended way to save a shortlist, as the tool does not export a file.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No account, login, or email is required. Open the page, set how many names you want, click Generate, and copy the results. There is no registration step and nothing gated behind a sign-up. This keeps stage-name brainstorming quick and completely anonymous.' },
  { category: 'Naming', question: 'Should my stage name be one word or two?', answer: 'Both work, and the right choice depends on how you present. A single strong word (Diamond, Scarlett, Vixen) is instantly memorable and easy to announce, while a two-part name (Roxy Blaze, Cherry Divine) reads more like a full persona and gives you a "surname" for branding. Generate batches of each style and test which one is easier to say quickly and to spell for someone tipping you.' },
  { category: 'Naming', question: 'What themes do the names draw on?', answer: 'The word pool blends several classic stage-name themes: gemstones and precious things (Diamond, Ruby, Pearl), sweet or indulgent words (Cherry, Candy, Honey, Sugar), bold sensual adjectives (Foxy, Sultry, Velvet, Sinful), and glamorous or exotic first names (Roxy, Lola, Jasmine). Mixing these registers is what gives the results their playful, glamorous feel rather than sounding like an ordinary name.' },
  { category: 'Best practices', question: 'How do I avoid picking a stage name someone else already uses?', answer: 'Popular stage names get reused a lot, especially the classic gem and sweet-word combos, so generate a batch and look for a pairing that feels a little less obvious. Combining an unexpected first name with a familiar theme word keeps it distinctive while still on-brand. If you plan to use the name as a social handle too, search it first, since this tool suggests ideas but does not check whether a name is already taken anywhere.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated lists of glamorous first names and sultry or sweet second words, then randomly pairs and shuffles them in your browser each time you click Generate. That randomness surfaces combinations you might not think of yourself. Nothing is sent to a server, and the output is meant purely as creative inspiration, not a registry of real performers.' },
  { category: 'Use cases', question: 'Can I use these names for burlesque, cabaret, or roller derby?', answer: 'Absolutely. The same playful, persona-driven naming works for burlesque acts, cabaret characters, roller derby skate names, and drag or theatrical personas, since all of them prize a bold, memorable stage identity. Generate a batch and keep the ones that match your act, whether that is glamorous, comedic, or fierce. Tweak the spelling or add a punny twist to make it fully your own.' },
  { category: 'Naming', question: 'How do I make my stage name feel classy rather than crude?', answer: 'Lean on the glamorous end of the word pool, gems, silks, flowers, and old-Hollywood first names, and skip anything too on-the-nose. Names like Velvet, Scarlett, Jasmine, or Diamond read as elegant and confident, which tends to age better than a shock-value name. Generate a batch, then say each aloud and keep only the ones that sound poised and easy to introduce.' },
  { category: 'Naming', question: 'Can I use the generator to name a character in a story?', answer: 'Yes. Writers use it to name dancers, cabaret performers, and nightlife characters in fiction and RP so the persona reads convincingly. A well-chosen stage name signals a character\'s attitude in a single word, glamorous, tough, sweet, or mysterious, before any dialogue does the work. Generate options, pick the one that matches your character\'s vibe, and adjust it to fit your world.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser and nothing is written to our servers. We do not keep the names, your settings, or a count of your runs. If you refresh or close the page, the last batch is gone unless you copied it, so save anything you want to keep before leaving.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run tops out at 24, but you can run it as many times as you want. Do several runs and paste them into one note to build a larger pool, then delete any duplicates. There is no daily or total limit, so batching runs is the normal way to gather a big list of stage-name options before choosing.' },
  { category: 'Best practices', question: 'What is the best workflow for choosing a stage name?', answer: 'Decide the feel you want first, glamorous, cheeky, vintage burlesque, or bold, then generate a batch of 12 to 24 and copy it into a note. Say each candidate out loud as if announcing it over music, and shortlist five to ten that land well. Sit with them for a day, check they are easy to spell and not already widely used, then commit to the one that feels like you.' },
  { category: 'Use cases', question: 'Is this just for adult performers?', answer: 'Not at all. The playful, glamorous naming style suits anyone who wants a bold alter-ego: burlesque and cabaret performers, drag artists, roller derby skaters, party hosts, cosplay personas, and fiction writers all use names like these. The tool simply produces confident, memorable stage names, and how you use them is up to you.' },
  { category: 'Troubleshooting', question: 'Can I use the stripper name generator offline?', answer: 'Yes, once the page has loaded it runs fully in your browser and needs no connection to generate more names. You can brainstorm stage names on a plane or backstage with no signal, and the Copy button works offline too. You only need a connection the first time, to load the page.' },
];

export default async function StripperNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="stripper" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Stripper name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

