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
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'steam-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Steam Name Generator',
    description: 'Free Steam name generator for gaming usernames and gamer tags. Create unique Steam username ideas in your browser with no sign-up. Check availability on Steam and other platforms.',
    seoTitle: 'Steam Name Generator – Free Gaming Usernames & Gamer Tag Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Steam Name Generator – Gaming Usernames and Gamer Tags</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Steam name generator to create usernames and gamer tags for Steam and other gaming platforms. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Steam username ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check Steam or your platform for availability before committing to a name.
        </p>
        <p>
          People search for Steam username ideas and gamer tag generators when setting up a new profile, an esports handle, or a stream name. This Steam name generator serves that intent with one free, browser-based tool. Whether you need a single standout gamer tag or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Steam or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Steam Name Generator?</h2>
        <p>
          A Steam name generator is an online tool that creates usernames and gamer tags suitable for Steam and other gaming platforms. You get unique name ideas at the click of a button. The generator combines curated gamer-style words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Steam name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check Steam or your platform for availability and pick one. Many users run the Steam name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Steam name generators are useful when you are tired of reusing the same username or when you want a fresh gamer tag that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on Steam or your platform before you commit to a new username.
        </p>

        <h2>Why This Steam Name Generator Matters</h2>
        <p>
          Choosing a memorable Steam username or gamer tag can be time-consuming. A Steam name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on Steam or your platform. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Steam username or gamer tag.
        </p>
        <p>
          A good Steam name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Steam or other platforms.
        </p>

        <h2>How the Steam Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated gamer-style elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Steam username ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Steam or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming usernames and gamer tags: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Steam name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Steam name generator multiple times is the intended workflow when you want a large pool of gamer tag ideas before checking availability.
        </p>

        <h2>How to Use This Steam Name Generator</h2>
        <p>Follow these steps to get Steam username ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of gamer tag ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check Steam or your platform for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Steam name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Steam is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Steam and Gamer Naming Style</h2>
        <p>
          Steam usernames and gamer tags often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Steam name generator uses curated gamer-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Steam or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy gamer tags; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on Steam or your platform. The Steam name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Steam Name Generator</h2>
        <p>
          Use this Steam name generator when you need Steam or gamer-style username ideas quickly. Common use cases include creating a new Steam account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Steam name generator is when you are rebranding. If you have used the same gamer tag for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Steam and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Steam name generator when creating a new Steam account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Steam name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of gamer tag ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Steam but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Steam Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short gamer tags are easier to say in voice chat and less likely to be mistyped. Run the Steam name generator multiple times to get a shortlist, then check Steam or your platform for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Steam name generator is a free way to explore options without committing until you have confirmed that your chosen Steam username or gamer tag is available.
        </p>

        <h2>Running the Steam Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Steam name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of gamer tag options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Steam username ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Steam or another platform. The Steam name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Steam name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of gamer tag ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Steam name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Steam username ideas to your clipboard (one per line). Paste into a notes app or document. Check Steam or your platform for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Steam name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Steam name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Steam name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate gamer tag ideas without installing anything.
        </p>

        <h2>Who Uses a Steam Name Generator?</h2>
        <p>
          Players use the Steam name generator when creating or updating a Steam profile, or when they want a new gamer tag for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Steam name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Steam and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Steam Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Steam name generator does not check Steam or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Steam username ideas or gamer tag inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Steam Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check Steam or your platform for availability for each name you like. If your first choice is taken, try the next. Run the Steam name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Steam or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Steam name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Steam or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Steam name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Steam password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Steam or another platform, use the official site or app and ensure you are on a secure connection. The Steam name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Steam name generator provides a fast way to create username and gamer tag ideas for Steam and other gaming platforms. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Steam name generator when you need Steam username ideas, gamer tag inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Steam or your chosen platform before committing to a name. The tool is a practical free resource for gaming usernames and gamer tags.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Steam name generator?', answer: 'A Steam name generator is an online tool that creates usernames and gamer tags for Steam and other gaming platforms. You get unique Steam username ideas at the click of a button. The generator combines curated gamer-style words at random in your browser so each run produces new combinations. This free Steam name generator runs locally with no sign-up and does not send generated names to any server. Always check Steam or your platform for availability before committing to a name.' },
  { category: 'Usage', question: 'How do I use the Steam name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list of gamer tag ideas, then use the Copy button to copy all names to your clipboard. Paste into a notes app and check Steam or your platform for availability. Run again for more options; no sign-up is required. The Steam name generator runs in your browser so your settings and generated names are not sent to any server. Building a shortlist of five to ten options before checking availability is a good habit.' },
  { category: 'General', question: 'Is the Steam name generator free?', answer: 'Yes. This Steam name generator is free to use in your browser. You can generate Steam username ideas as often as you like without creating an account or paying. The tool runs locally on your device and does not require a download. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Use cases', question: 'Can I use the names for Steam?', answer: 'Yes. The Steam name generator produces username ideas that you can use on Steam. Names must be unique on the platform, so always check Steam\'s availability before committing. Run the generator multiple times to build a shortlist of gamer tag ideas, then check which names are available on Steam. The tool does not reserve or validate names; it only suggests combinations for you to verify on the platform.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I use the Steam name generator?', answer: 'No. This Steam name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated Steam username ideas are not sent to our servers. We do not store your inputs or the generated list. Generation is fully local and private.' },
  { category: 'Compatibility', question: 'Does the Steam name generator work on mobile?', answer: 'Yes. The Steam name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or check availability on Steam\'s app. The tool is responsive and works on any device with a modern browser.' },
  { category: 'Limits', question: 'How many names can I generate with the Steam name generator?', answer: 'You can request 1–24 names per run with this Steam name generator. If you need more than 24 gamer tag ideas, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed. The batch size is designed to keep the list manageable while giving you enough Steam username options to shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the Steam name generator?', answer: 'Yes. Use the Copy button on this Steam name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line, so they work in any editor or form. Check Steam or your platform for availability before choosing a name. Copying is the intended way to save your shortlist of gamer tag ideas.' },
  { category: 'General', question: 'Do I need an account to use the Steam name generator?', answer: 'No. This Steam name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it. Open the page, set how many Steam username ideas you want, click generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Use cases', question: 'Can I use the Steam name generator for other platforms?', answer: 'Yes. The names work as ideas for any gaming or social platform—Discord, Xbox, PlayStation, or others. The Steam name generator is built for Steam-style gamer tags but the output can inspire usernames elsewhere. Check each platform\'s availability; names must be unique on each service. The generator does not check availability for you, so always verify on the platform where you plan to use the name.' },
  { category: 'Privacy', question: 'Do you store the names I generate with the Steam name generator?', answer: 'No. Generation happens in your browser. We do not receive or store the Steam username ideas or your settings. The Steam name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. If you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Can I get more than 24 names from the Steam name generator?', answer: 'Each run of this Steam name generator gives up to 24 names. To get more gamer tag ideas, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit. Batching runs is the intended workflow when you need a large pool of Steam username options.' },
  { category: 'General', question: 'Why "Steam" specifically in a Steam name generator?', answer: 'Steam is a major gaming platform, and people often search for Steam username ideas and gamer tag generators. The Steam name generator serves that intent and produces names that fit Steam and similar gaming environments. The same ideas work for other platforms—Discord, Xbox, PlayStation—as inspiration. Use the names as gamer tags wherever you need a unique username; always check availability on the platform you choose.' },
  { category: 'Use cases', question: 'Can I use the Steam name generator for esports?', answer: 'Yes. Use the Steam name generator as inspiration for in-game names or stream handles. Run it multiple times to get a shortlist of gamer tag ideas, then check availability on your platform. The tool is free and runs in your browser with no sign-up. Many esports and streamers use Steam name generators to brainstorm handles before verifying availability on Steam, Twitch, or other services.' },
  { category: 'Technical', question: 'How are the names generated in the Steam name generator?', answer: 'This Steam name generator uses curated gamer-style words and elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only; we do not check Steam or any platform for availability. The word lists are designed to sound like gaming usernames and gamer tags—bold, memorable, and easy to type.' },
  { category: 'General', question: 'Are the names from the Steam name generator unique?', answer: 'The names are randomly combined from our word list, so each run can produce new combinations. We do not check Steam or any platform for availability. You must check yourself whether a Steam username or gamer tag is available before using it on your profile. The generator helps you discover ideas; uniqueness on a given platform depends on that platform\'s current registrations.' },
  { category: 'Use cases', question: 'Can teachers use the Steam name generator?', answer: 'Yes. Teachers can use this Steam name generator for creative or tech-related activities—for example when students are learning about usernames, digital identity, or online profiles. Emphasize that the tool is for inspiration and that names must be checked for availability on any platform. The Steam name generator is free and runs in the browser with no sign-up, so it is easy to use in a classroom or workshop setting.' },
  { category: 'General', question: 'How do I cite the Steam name generator?', answer: 'For academic or formal use you can cite this Steam name generator as a source of inspiration for usernames and gamer tags. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution. The tool is a free, browser-based utility for Steam username ideas and gamer tag brainstorming.' },
  { category: 'Use cases', question: 'Can I use the Steam name generator for a new Steam account?', answer: 'Yes. When creating a new Steam account you need a unique username. Run this Steam name generator to get gamer tag ideas, copy the list, then check Steam for availability. Pick a name that is available and that you like. The tool runs in your browser with no sign-up. Building a shortlist of five to ten options before you start the sign-up process saves time, since many Steam usernames are already taken.' },
  { category: 'General', question: 'Do the names from the Steam name generator work for streaming?', answer: 'Yes. The Steam name generator produces username ideas that can work for streaming platforms, in-game names, or social handles. Use the names as inspiration and check your platform for availability. Run the generator multiple times to build a shortlist of options. Many streamers use Steam name generators to brainstorm stream handles before checking availability on Twitch, YouTube, or other services.' },
  { category: 'Best practices', question: 'What is the best workflow for the Steam name generator?', answer: 'Open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check Steam or your platform for availability for each name you like. If your first choice is taken, try the next. Run the Steam name generator again for more options. Keep a shortlist of five to ten gamer tag ideas so you have backups. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Best practices', question: 'Should I run the Steam name generator multiple times?', answer: 'Yes. Running the Steam name generator multiple times is the intended workflow when you want a large pool of Steam username ideas. Paste each run into one document and remove duplicates if any appear. Then check availability on Steam or your platform for each name you like. Having a shortlist saves time compared to checking one idea at a time. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Troubleshooting', question: 'Why is my first choice from the Steam name generator taken?', answer: 'Popular usernames and gamer tags are often already in use on Steam and other platforms. The Steam name generator does not check availability; it only suggests combinations. Always have a shortlist of five to ten options so you have backups. Run the generator again for more Steam username ideas and check availability on your platform before committing. This is normal when using any name generator for gaming platforms.' },
  { category: 'Troubleshooting', question: 'Can I use the Steam name generator offline?', answer: 'Yes. Once the page is loaded, the Steam name generator runs entirely in your browser and does not require a network connection to generate names. You can generate gamer tag ideas offline. Copying and pasting also works offline. You will need a connection only to open the page initially and to check availability on Steam or another platform.' },
];

export default async function SteamNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="steam" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Steam name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
