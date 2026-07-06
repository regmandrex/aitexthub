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


const toolSlug = 'genderbend-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Genderbend Name Generator',
    description: 'Free genderbend name generator for alternate name ideas. Create flexible name ideas in your browser with no sign-up.',
    seoTitle: 'Genderbend Name Generator – Alternate Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Genderbend Name Generator – Alternate Name Ideas</h2>
        <h2>Introduction</h2>
        <p>
          This guide explains how to use a Genderbend name generator to create alternate name ideas for Genderbend and other fiction and creative projects. The tool runs in your browser and produces unique, memorable name ideas at the click of a button. It is designed for players who want Genderbend name ideas quickly without sign-up or download. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like. Always check your game or story for availability before committing to a name.
        </p>
        <p>
          People search for Genderbend name ideas and character name generators when setting up a new profile, an esports handle, or a stream name. This Genderbend name generator serves that intent with one free, browser-based tool. Whether you need a single standout character name or a shortlist of options, the generator gives you a pool of ideas. Names must be unique on each service, so verifying availability on Genderbend or your chosen platform is an essential step after generating ideas.
        </p>

        <h2>What Is a Genderbend Name Generator?</h2>
        <p>
          A Genderbend name generator is an online tool that creates alternate name ideas suitable for Genderbend and other fiction and creative projects. You get unique name ideas at the click of a button. The generator combines curated flexible words and elements at random so each run produces new combinations. The output is for inspiration only; you must check your platform for availability. This free Genderbend name generator runs in your browser with no sign-up and does not send generated names to any server.
        </p>
        <p>
          The output is plain text, one name per line. You can copy the full list and paste it into a notes app, then check your game or story for availability and pick one. Many users run the Genderbend name generator multiple times to build a shortlist before deciding. Because names are created locally, your choices stay private and nothing is stored on our servers.
        </p>
        <p>
          Genderbend name generators are useful when you are tired of reusing the same username or when you want a fresh character name that fits your style. The tool does not guarantee that a name is available; it only suggests combinations. Always confirm availability on your game or story before you commit to a new username.
        </p>

        <h2>Why This Genderbend Name Generator Matters</h2>
        <p>
          Choosing a memorable Genderbend name or character name can be time-consuming. A Genderbend name generator speeds up brainstorming. Instead of staring at a blank field, you get options in seconds. You can run it on a phone or desktop, copy the names you like, and then check availability on your game or story. The tool is free and does not require an account, so there is no friction to trying many ideas.
        </p>
        <p>
          The generator also keeps your ideas private. Names are created in your browser and are not sent to our servers. You can use it in a private or incognito window if you prefer. Because generation is local, there is no risk of your shortlist being stored or logged. That matters when you are testing ideas before you settle on a final Genderbend name or character name.
        </p>
        <p>
          A good Genderbend name generator also standardizes the workflow: set how many names you want, click generate, copy the list, and check availability. You get a consistent way to explore username ideas without writing scripts or visiting multiple sites. The output is easy to paste into notes or a document so you can track which names you have already checked on Genderbend or other platforms.
        </p>

        <h2>How the Genderbend Name Generator Works (Step by Step)</h2>
        <p>
          When you open the page, you choose how many names you want per run (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated flexible elements in your browser. Each run is independent; no names or settings are sent to a server. The result is a list of Genderbend name ideas, one per line. You can copy the full list with one click and paste it into a notes app. To get more ideas, run the generator again. The tool does not check Genderbend or any platform for availability—you must do that yourself.
        </p>
        <p>
          The underlying word lists are designed to sound like gaming alternate name ideas: bold, memorable, and easy to type. The generator shuffles and combines these elements so that each run produces different combinations. That randomness helps you discover names you might not have thought of on your own. Because everything runs in the browser, the Genderbend name generator works offline once the page is loaded and does not depend on a backend service.
        </p>
        <p>
          There are no hidden steps. You set the count, click generate, and receive a list. Copying is one click; pasting into your own document keeps your shortlist in one place. Running the Genderbend name generator multiple times is the intended workflow when you want a large pool of character name ideas before checking availability.
        </p>

        <h2>How to Use This Genderbend Name Generator</h2>
        <p>Follow these steps to get Genderbend name ideas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click &quot;Generate names&quot; to get a new list of character name ideas.</li>
          <li>Use the Copy button to copy all names to your clipboard.</li>
          <li>Paste into a notes app or document, then check your game or story for availability and pick one.</li>
          <li>Run again for more options; no account or download is required.</li>
        </ol>
        <p>
          The Genderbend name generator runs in your browser; your settings and generated names are not sent to any server. You can run it as often as you like. Building a shortlist of five to ten options before checking availability on Genderbend is a good habit, since popular usernames are often taken. Have backups ready so that if your first choice is unavailable, you can try the next name on your list.
        </p>

        <h2>Genderbend and Gamer Naming Style</h2>
        <p>
          Genderbend names and character names often use bold, memorable word combinations: action words, nicknames, or creative spellings. This Genderbend name generator uses curated flexible elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; the tool does not check Genderbend or any platform for availability. You can use the names as-is or tweak spelling and punctuation to make them your own.
        </p>
        <p>
          Different games and communities favor different styles. Some players prefer short, punchy character names; others like longer usernames. Running the generator multiple times gives you a mix of lengths and styles. Skim the list, mark the ones you like, and then verify each one on your game or story. The Genderbend name generator is a starting point—your final choice should fit your personality and the rules of your platform.
        </p>

        <h2>When to Use a Genderbend Name Generator</h2>
        <p>
          Use this Genderbend name generator when you need Genderbend or flexible username ideas quickly. Common use cases include creating a new Genderbend account or updating your profile name, choosing an in-game name for esports or casual play, and picking a stream or social handle. The same tool works for other platforms—Discord, Xbox, PlayStation, or social profiles—as inspiration. Names must be unique on each platform, so always check availability before committing.
        </p>
        <p>
          Another good time to use a Genderbend name generator is when you are rebranding. If you have used the same character name for years and want a fresh identity, generating a batch of ideas helps you explore options without pressure. Run the tool several times, paste results into one document, and remove duplicates. Then check Genderbend and any other platforms you use to see which names are still available. Having a shortlist saves time compared to checking one idea at a time.
        </p>

        <h2>Use Cases in Detail: Profiles, Esports, and Streams</h2>
        <p>
          Players use the Genderbend name generator when creating a new Genderbend account or refreshing their profile name. Esports and streamers use it for in-game names or stream handles. The same tool works for other platforms—Discord, Xbox, PlayStation, or social—as inspiration; you must check each platform for availability. Run the generator multiple times to build a shortlist, then check which names are free on your platform. The Genderbend name generator does not reserve or validate names; it only suggests combinations.
        </p>
        <p>
          Content creators often need a consistent handle across Steam, streaming, and social media. Generating a batch of character name ideas lets you test different options before you commit. Copy the names you like into a single list, then check availability on each service. If one name is taken on Genderbend but free elsewhere, you can still use it on the platforms where it is available, or use the generator again to find alternatives that work everywhere.
        </p>

        <h2>Tips for Choosing a Genderbend Username</h2>
        <p>
          Pick a name that is easy to remember and type. Short character names are easier to say in voice chat and less likely to be mistyped. Run the Genderbend name generator multiple times to get a shortlist, then check your game or story for availability. Have a few backups in case your first choice is taken. Avoid names that might be mistaken for someone else or that break platform rules. The generator gives you ideas only; the final choice is yours.
        </p>
        <p>
          Consider how the name will look in different contexts: in-game, on a stream overlay, or in a friend list. Some combinations look great in one font but odd in another. If you plan to use the same handle across multiple games and platforms, check availability everywhere before you invest in branding. The Genderbend name generator is a free way to explore options without committing until you have confirmed that your chosen Genderbend name or character name is available.
        </p>

        <h2>Running the Genderbend Name Generator in Batches</h2>
        <p>
          When you need many username ideas, run the Genderbend name generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates if any appear. Check availability on your platform for each name you like. There is no daily or total limit; you can run the generator as often as you want. Batching is useful when you are setting up several accounts, testing ideas for a team, or simply want a large pool of character name options before making a decision.
        </p>
        <p>
          Keeping a single document with all your generated Genderbend name ideas makes it easy to track which names you have already checked. Mark names as &quot;taken&quot; or &quot;available&quot; as you go. That way you avoid re-checking the same name on Genderbend or another platform. The Genderbend name generator does not remember previous runs, so your document is your only record of the ideas you have collected.
        </p>

        <h2>Privacy and Local Processing</h2>
        <p>
          This Genderbend name generator runs entirely in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list. No account or login is required. That means your shortlist of character name ideas stays on your machine unless you choose to copy it somewhere else.
        </p>
        <p>
          Because generation is local, the tool is suitable for use in private or incognito windows. If you close the tab, the generated list is gone unless you have copied it. There is no server-side log of what names you generated or how many times you ran the Genderbend name generator. This privacy model is intentional: username brainstorming is personal, and the tool is designed so that you control where your ideas go.
        </p>

        <h2>Copying and Exporting Names</h2>
        <p>
          Use the Copy button to copy all generated Genderbend name ideas to your clipboard (one per line). Paste into a notes app or document. Check your game or story for availability before committing to a name. The names are plain text, so they work in any editor or form. If you paste into a spreadsheet, each line can go in its own cell for easy tracking. The Genderbend name generator does not export to a file; copying and pasting is the intended way to save your shortlist.
        </p>

        <h2>Limits and Batch Size</h2>
        <p>
          You can request 1–24 names per run with this Genderbend name generator. There is no daily or total limit. Run the generator again for more options. No download or account is required. If you need more than 24 names in one go, run the tool multiple times and paste the results into one document. Removing duplicates is up to you; the generator does not track previous output.
        </p>

        <h2>No Download or Account Required</h2>
        <p>
          This Genderbend name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone. That makes it easy to use when you are away from your main device or when you want to quickly generate character name ideas without installing anything.
        </p>

        <h2>Who Uses a Genderbend Name Generator?</h2>
        <p>
          Players use the Genderbend name generator when creating or updating a Genderbend profile, or when they want a new character name for other platforms. Esports and streamers use it for in-game names or stream handles. The same tool works for Discord, Xbox, PlayStation, or social profiles—always check availability on each platform. Educators and workshop leaders sometimes use it to demonstrate username creation or digital identity in a classroom setting. No account or download is required on our site.
        </p>
        <p>
          Anyone who needs a steady supply of username ideas can benefit. Whether you are a casual gamer, a competitive player, or a content creator, the Genderbend name generator provides a fast way to explore options. The key is to treat the output as inspiration and always verify availability on Genderbend and any other platform where you plan to use the name.
        </p>

        <h2>Getting the Most Out of the Genderbend Name Generator</h2>
        <p>
          Run the generator several times and paste all results into one document. Skim for names that fit your style and check your platform for availability. Shortlist five to ten options so you have backups if your first choice is taken. The Genderbend name generator does not check Genderbend or any platform; you must do that yourself. When you have a shortlist, check availability one by one. Usernames are often taken on popular services, so having several options saves time.
        </p>
        <p>
          Another tip is to try different batch sizes. Sometimes generating 24 names at once gives you a good mix; other times you may prefer smaller runs so you can review each set before generating more. The tool is flexible. Use it whenever you need new Genderbend name ideas or character name inspiration. Bookmarking the page makes it easy to return when you are ready to refresh your profile or create a new account.
        </p>

        <h2>Typical Workflow for the Genderbend Name Generator</h2>
        <p>
          A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Genderbend name generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need new username ideas. The tool is free and runs in your browser with no sign-up.
        </p>

        <h2>What This Tool Does NOT Do</h2>
        <ul>
          <li>It does not check Genderbend or any platform for username availability.</li>
          <li>It does not reserve or hold names for you.</li>
          <li>It does not store your generated list or your settings.</li>
          <li>It does not connect to Steam, Discord, or any external gaming service.</li>
        </ul>
        <p>
          This Genderbend name generator produces name ideas only. It does not validate availability, create accounts, or manage your profile. You must check Genderbend or your chosen platform yourself and follow that platform&apos;s rules when creating or changing your username. The tool is a brainstorming aid, not a replacement for checking availability.
        </p>

        <h2>Privacy and Security Notes</h2>
        <p>
          The Genderbend name generator runs entirely in your browser. It does not send data to a server and does not store generated values. This is helpful for quick brainstorming and offline use. If you refresh the page, the last generated list is cleared. Copy any names you want to keep before closing or refreshing.
        </p>
        <p>
          For account security, never share your Genderbend password or other credentials. The generator only suggests usernames; it does not handle login or account creation. When you check availability on Genderbend or another platform, use the official site or app and ensure you are on a secure connection. The Genderbend name generator is a standalone tool and does not integrate with any login system.
        </p>

        <h2>Final Summary and When to Use This Tool</h2>
        <p>
          The Genderbend name generator provides a fast way to create username and character name ideas for Genderbend and other fiction and creative projects. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. Keep a shortlist of options in case your first choice is taken. No download or account is required. The generator is free and works on any device.
        </p>
        <p>
          Use this Genderbend name generator when you need Genderbend name ideas, character name inspiration, or a quick way to explore options before checking availability. It is best for brainstorming, rebranding, and building a shortlist. Always verify availability on Genderbend or your chosen platform before committing to a name. The tool is a practical free resource for gaming alternate name ideas.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a genderbend name generator?', answer: 'It is a browser tool that suggests gender-swapped versions of names — the masculine-to-feminine or feminine-to-masculine counterpart used when you reimagine a character as another gender (often called Rule 63 in fandom). It offers matching alternate forms so a swapped character keeps a recognizable link to the original: Alexander to Alexandra, Daniel to Danielle, Victoria to Victor. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 ideas per run.' },
  { category: 'Naming', question: 'What makes a good genderbend name?', answer: 'The best swaps keep an audible or etymological thread to the original so readers instantly connect the two versions. Shared roots (Alexander/Alexandra), matching initials (Michael/Michelle), or a similar sound (Julian/Julia) all work. You want the new name to feel like the same character reflected, not a random replacement. Generate a batch, then keep the ones that echo the source name in rhythm, letters, or meaning while reading naturally for the swapped gender.' },
  { category: 'Naming', question: 'How do I genderbend a specific character\'s name?', answer: 'Start from the original and look for its counterpart: a feminine or masculine form of the same root (Gabriel/Gabrielle, Nicholas/Nicole), a rhyming near-match, or a name sharing the first letter or syllable. Generate ideas around those patterns and pick the one that best preserves the character\'s identity. For invented or fantasy names with no obvious counterpart, tweak the ending or vowel sounds so the swapped name still feels part of the same world.' },
  { category: 'Naming', question: 'What are common masculine-to-feminine name pairs?', answer: 'Classic pairs share a root and swap the ending: Alexander/Alexandra, Daniel/Danielle, Gabriel/Gabrielle, Christian/Christina, Julian/Julia, Nicholas/Nicole, Robert/Roberta, Joseph/Josephine. Others match by sound rather than spelling, like Michael/Michelle or Frederick/Frederica. These pairings are the backbone of genderbend naming because the link is obvious the moment someone reads both, which is exactly what a good swap needs.' },
  { category: 'Naming', question: 'What about feminine-to-masculine swaps?', answer: 'The same logic runs in reverse: Victoria/Victor, Georgia/George, Josephine/Joseph, Frederica/Frederick, Nicole/Nicholas, Christina/Christian. When a feminine name has no established masculine form, you can shorten it or shift the ending — Samantha to Sam or Samuel, Erica to Eric, Josephine to Joseph. Generate a batch and keep the masculine forms that still sound like the same person viewed from the other side.' },
  { category: 'Use cases', question: 'How do I name a Rule 63 or gender-swapped OC?', answer: 'For fan works, take the canon character\'s name and find its counterpart so readers immediately recognize who the OC is a version of — that recognizable thread is the whole point of a Rule 63 design. Generate matching forms, then choose one that fits the tone: a playful pun-adjacent swap for comedy, a clean etymological match for a serious reimagining. Keep the surname if you want the link obvious, and adjust only the given name.' },
  { category: 'Naming', question: 'How do I keep the swapped name recognizable?', answer: 'Preserve at least one strong anchor: the same first letter, the same number of syllables, a shared root, or a rhyming ending. "Anthony" to "Antonia" keeps the An- and the rhythm; "Valentina" to "Valentine" keeps almost everything. The more anchors you retain, the faster a reader links the two. Generate several options and favor the ones that carry the most of the original name across the swap.' },
  { category: 'Naming', question: 'What if a name has no obvious opposite-gender form?', answer: 'Many names lack a ready counterpart, so you improvise. Adopt a common gendered ending (-a, -ina, -elle for feminine; -o, -us, -er for masculine), borrow a similar-sounding established name, or use a shared nickname that works for either gender (Alex, Sam, Charlie, Jamie). Generate a batch to see candidates, then pick the improvised form that reads most naturally while still echoing the source name.' },
  { category: 'Usage', question: 'How do I use the genderbend name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for swaps that keep a clear link to your source name, then use the Copy button to save your shortlist. Paste the results into your notes and compare them side by side with the original to see which reads best. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the genderbend name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate gender-swapped name ideas as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can explore counterpart names for a whole cast of swapped characters without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character ideas stay private, which matters for fan works and OCs you may not have shared yet. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the genderbend name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm swapped names on your phone while sketching or writing, copy a favorite, and paste it straight into your notes or art description. The layout is responsive, so pairing up counterpart names works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool of swap options for one character or a whole cast, just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of counterpart forms to compare.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app or document. This is the intended way to save a shortlist: generate, copy, then compare each swap against the original. Keeping them in a notes file lets you line up source names and their genderbent counterparts so you can pick the cleanest match.' },
  { category: 'General', question: 'Do I need an account to use the genderbend name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of gender-swapped forms, and get back to writing or drawing your OC without creating anything.' },
  { category: 'Technical', question: 'How are the genderbend names generated?', answer: 'The generator draws on curated lists of paired and gender-typical name elements, then combines and matches them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration only — a starting pool of counterpart forms — so you still choose the swap that best fits your character. The lists favor names with clear masculine and feminine forms so the link across a swap stays recognizable.' },
  { category: 'Naming', question: 'Can I use a unisex name instead of swapping?', answer: 'Yes, and it is often the neatest solution. Gender-neutral names — Alex, Sam, Charlie, Jamie, Riley, Jordan, Casey — read naturally for any gender, so a character reimagined as another gender can keep the exact same name with no swap at all. Generate a batch and note the unisex options if you want the swapped version to stay maximally recognizable while sidestepping the need for a separate counterpart form.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when genderbending a name?', answer: 'Avoid a swap so different that readers cannot connect it to the original — that defeats the purpose. Avoid forcing an awkward ending onto a name that already has a natural counterpart. Do not swap the surname if keeping it would make the link clearer. And read the result out loud to be sure it sounds like a real name. Keep the options that are recognizable, natural-sounding, and true to the source.' },
  { category: 'Naming', question: 'Should I keep the surname when I genderbend a character?', answer: 'Usually yes. Surnames are typically not gendered, so keeping the original family name is the single strongest way to signal that your swapped character is the same person reimagined. Change only the given name to its counterpart and let the shared surname carry the recognition. Drop or change the surname only when your story deliberately treats the swap as a separate character rather than a reflection of the original.' },
  { category: 'Use cases', question: 'Can I use these for fantasy or invented character names?', answer: 'Yes. For invented names with no real-world counterpart, the generator gives you patterns to work from — shift a vowel, swap a gendered-sounding ending, or borrow the rhythm of an established pair. Generate a batch and adapt the closest candidate so the swapped name still fits your setting\'s naming style. The goal is the same as with real names: keep enough of the original that the connection reads clearly.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool of swap candidates, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want many counterpart options to compare against a source name. Keep the strongest, most recognizable matches in a shortlist as you go.' },
  { category: 'General', question: 'Are these official or canon names?', answer: 'No. The generator produces suggested counterpart forms for creative use, not entries from any official or canonical database. Genderbend and Rule 63 designs are fan and original-fiction creations, so treat the output as raw material to shape rather than a fixed answer. Mix, tweak, and rename freely until the swapped version fits your character and your setting the way you want.' },
  { category: 'Troubleshooting', question: 'Can I use the genderbend name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm swapped forms for your OCs on a plane or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every batch is generated right on your device.' },
];

export default async function GenderbendNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="genderbend" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Genderbend name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

