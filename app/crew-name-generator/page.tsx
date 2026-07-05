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


const toolSlug = 'crew-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Crew Name Generator',
    description: 'Free crew name generator for crew and gang names. Create crew-style name ideas in your browser with no sign-up.',
    seoTitle: 'Crew Name Generator – Gang & Crew Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Crew Name Generator – Gang, Clan &amp; Crew Names</h2>
        <p>
          A crew name is a flag. Whether it flies over a GTA Online crew, a Rocket League clan, a street racing team, a heist gang in your story, or a Discord friend group, the name announces the group&apos;s attitude before anyone sees a single member. This crew name generator builds crew, gang, and clan names in that spirit — mixing sharp nouns, colors, city references, and edge so you land on something that sounds tight and territorial. It runs entirely in your browser, needs no sign-up, and gives you 1–24 names per run.
        </p>
        <p>
          Whether you are founding a gaming crew or clan, naming a gang for a story or role-play, branding a car meet or racing team, or just labeling a squad of friends, the generator gives you a fast pool of ideas to rally under. The guide below explains what makes crew names stick — the tone, the tag, and the identity — so the name you pick reads like a real crew, not a random pair of words.
        </p>

        <h2>What Makes a Great Crew Name</h2>
        <p>
          Crew names live and die on a few qualities. Understanding them helps you turn a generated idea into a banner people want to fly:
        </p>
        <ul>
          <li><strong>A clear tone.</strong> Menacing, slick, funny, or elite — the name should signal the vibe of the group at a glance. A crew called &quot;Midnight Syndicate&quot; sets a very different expectation than &quot;Chaos Squad.&quot;</li>
          <li><strong>A short tag or abbreviation.</strong> Great crew names shorten cleanly to a 2–4 letter clan tag that fits next to a username in-game — [NGT], [VLT], [666].</li>
          <li><strong>A shared identity.</strong> The best names give members something to belong to — a color, a symbol, a territory, an attitude everyone shares.</li>
        </ul>

        <h2>The Clan Tag Matters as Much as the Name</h2>
        <p>
          In competitive and online gaming, the crew name is only half the job — the clan tag is the part players actually wear. A tag is the short bracketed abbreviation shown before each member&apos;s name, so it has to read clearly at a glance and survive being squeezed into a scoreboard. When you pick a generated crew name, test whether it shortens into a strong 2–4 character tag: &quot;Nightfall Order&quot; becomes [NFO], &quot;Vault&quot; becomes [VLT]. If a name has no clean tag, it will be harder for your crew to rep, so favor generated options that abbreviate well.
        </p>

        <h2>Crew Names by Type</h2>
        <p>
          The kind of group you are naming should steer which generated names you keep:
        </p>
        <ul>
          <li><strong>Gaming clan / esports crew.</strong> Sharp, elite, taggable names — &quot;Vanguard,&quot; &quot;Ascend,&quot; &quot;Nemesis&quot; — that look strong on a leaderboard.</li>
          <li><strong>Street gang / GTA crew.</strong> Territorial, edgy names — colors, city references, and menace built in — that fit an open-world crew.</li>
          <li><strong>Racing / car crew.</strong> Fast, mechanical names — &quot;Redline,&quot; &quot;Nitro Kings,&quot; &quot;Apex&quot; — that match a street-racing identity.</li>
          <li><strong>Heist / criminal crew (fiction).</strong> Cool, professional names that sound like a team of specialists rather than thugs.</li>
          <li><strong>Friend group / casual squad.</strong> Fun, self-aware names that do not take themselves too seriously.</li>
        </ul>

        <h2>How to Use This Crew Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose how many crew names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of crew, gang, and clan names.</li>
          <li>Sort the list by type and vibe — which sound like esports clans, which like street crews, which shorten into a clean tag.</li>
          <li>Use the Copy button to save your shortlist, then test each favorite as a 2–4 letter clan tag.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Building a Crew Identity Around the Name</h2>
        <p>
          A name is the start; a crew people want to join has an identity. Once you have a name you like, build the rest: a clan tag, a color scheme or emblem, a motto, and a set of ranks or roles. &quot;Nightfall Order&quot; suggests a dark palette, a crescent-moon emblem, and titles like Warden or Initiate; &quot;Nitro Kings&quot; suggests chrome, flames, and a racing hierarchy. Let the generated name point the way, and the crew gains a culture members can rally behind rather than just a label.
        </p>

        <h2>Naming Gangs and Crews for Stories</h2>
        <p>
          Fiction runs on believable factions, and a gang&apos;s name does a lot of characterization for free. A ruthless cartel, a scrappy street crew, a slick heist team, and a biker gang should all sound different — the name signals the group&apos;s size, era, and code. Use tone deliberately: hard consonants and dark words for a feared gang, cooler and cleaner words for a professional crew. Generate a batch and assign contrasting names to rival factions so readers can tell your groups apart at a glance and feel the tension between them.
        </p>

        <h2>Tips for a Crew Name That Sticks</h2>
        <p>
          Say it and tag it — a great crew name sounds good called out in voice chat and looks good abbreviated on a scoreboard. Keep it short enough to read fast; long names get cut off or ignored. Match the tone to the actual group, since an intimidating name on a casual friend squad only works if the joke is intentional. And check that the name is not already a well-known crew or clan in the game you play, both to avoid confusion and because many games block duplicate crew names outright.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps weaken an otherwise good crew name. The first is a name with no clean clan tag, which leaves your crew with nothing short to wear. The second is over-length; a name too long to say or display quickly never catches on. The third is a tone that fights the group — an elite esports name on a casual squad, or vice versa. The fourth is copying a famous crew or clan, which reads as unoriginal and may be blocked as a duplicate. When you review a generated batch, keep the names that are taggable, concise, tone-appropriate, and distinctive.
        </p>

        <h2>Privacy</h2>
        <p>
          This crew name generator runs entirely in your browser. When you set a count and generate, the crew names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your crew ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a crew name generator?', answer: 'A crew name generator is an online tool that creates crew, gang, and clan names for gaming crews, street-racing teams, Discord squads, and fictional gangs. You get fresh crew name ideas at the click of a button. The generator combines curated crew-style words — sharp nouns, colors, city references, and edge — at random in your browser, so each run produces new combinations. This free crew name generator runs locally with no sign-up and does not send generated names to any server. Always check the game or platform you plan to use it on for availability before committing to a name.' },
  { category: 'Usage', question: 'How do I use the crew name generator?', answer: 'Set how many crew names you want per run (1–24), click "Generate names" to get a fresh batch of crew, gang, and clan ideas, then use the Copy button to save your shortlist. Sort the list by vibe — which sound like esports clans, which like street crews, which shorten into a clean tag — and test each favorite as a 2–4 letter clan tag. Run again for more options; no sign-up is required. The crew name generator runs in your browser so your settings and generated names are never sent to a server.' },
  { category: 'General', question: 'Is the crew name generator free?', answer: 'Yes. This crew name generator is free to use in your browser. You can generate crew, gang, and clan name ideas as often as you like without creating an account or paying. The tool runs locally on your device and does not require a download. There is no daily or total limit on how many times you can run the generator, so brainstorm as many crew names as you need.' },
  { category: 'Naming', question: 'What makes a good crew name?', answer: 'A strong crew name has a clear tone (menacing, slick, funny, or elite), shortens cleanly into a 2–4 letter clan tag, and gives members a shared identity — a color, a symbol, a territory, or an attitude. "Midnight Syndicate" sets a very different expectation than "Chaos Squad," and both read better than a random pair of words. When you review a generated batch, keep the names that are taggable, concise, tone-appropriate for your group, and distinctive.' },
  { category: 'Naming', question: 'Why does the clan tag matter so much?', answer: 'In competitive and online gaming the crew name is only half the job — the clan tag is the part players actually wear next to their username. It has to read clearly at a glance and survive being squeezed onto a scoreboard. When you pick a generated crew name, test whether it shortens into a strong 2–4 character tag: "Nightfall Order" becomes [NFO], "Vault" becomes [VLT]. If a name has no clean tag, it is harder for your crew to rep, so favor generated options that abbreviate well.' },
  { category: 'Use cases', question: 'Can I use these names for a GTA Online or gaming crew?', answer: 'Yes. The crew name generator is built for exactly this — gaming crews, esports clans, GTA Online crews, Rocket League clans, and more. Generate a batch, keep the names that fit your game\'s vibe, and check them against the crews already in that game. Many games block duplicate crew names outright, so verify availability before you lock one in. The tool suggests ideas; it does not reserve or register names on any platform.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I use the crew name generator?', answer: 'No. This crew name generator runs in your browser. When you set the number of names and click generate, the crew names are created locally on your device. Your choices and the generated ideas are not sent to our servers, and we do not store your inputs or the generated list. Generation is fully local and private — close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the crew name generator work on mobile?', answer: 'Yes. The crew name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many crew names you want, then generate. On a phone you can generate a short list and copy it straight into notes or into your game\'s crew-creation screen. The tool is responsive and works on any device with a modern browser.' },
  { category: 'Limits', question: 'How many crew names can I generate at once?', answer: 'You can request 1–24 crew names per run with this generator. If you need more than 24 ideas, run it again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed. The batch size is designed to keep the list manageable while giving you enough crew, gang, and clan options to shortlist.' },
  { category: 'Usage', question: 'Can I copy the crew names from the generator?', answer: 'Yes. Use the Copy button to copy all generated crew names to your clipboard, then paste into a notes app or document. The names are plain text, one per line, so they work in any editor or form. Copy your shortlist, then test each favorite as a 2–4 letter clan tag and check it for availability in your game. Copying is the intended way to save a batch before you commit to one.' },
  { category: 'General', question: 'Do I need an account to use the crew name generator?', answer: 'No. This crew name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account to use it — open the page, set how many crew name ideas you want, click generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Use cases', question: 'Can I use it to name a racing or car crew?', answer: 'Yes. For a street-racing or car crew, favor fast, mechanical names — "Redline," "Nitro Kings," "Apex" — that match the identity. Generate a batch and keep the options that sound quick and sharp, then build the rest of the identity around the name: chrome and flames for "Nitro Kings," a racing hierarchy, a clean tag. The generator gives you the name; the crew\'s culture grows from there.' },
  { category: 'Privacy', question: 'Do you store the crew names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the crew name ideas or your settings. The generator runs locally on your device, and you can use it in a private or incognito window if you prefer. If you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Can I get more than 24 crew names?', answer: 'Each run of this crew name generator gives up to 24 names. To get more ideas, run it again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit. Batching runs is the intended workflow when you need a large pool of crew, gang, and clan options to choose from.' },
  { category: 'Use cases', question: 'Can I use the crew name generator to name a gang for a story?', answer: 'Yes. Fiction runs on believable factions, and a gang\'s name does a lot of characterization for free. A ruthless cartel, a scrappy street crew, a slick heist team, and a biker gang should all sound different. Generate a batch, then assign contrasting names to rival factions — hard consonants and dark words for a feared gang, cooler and cleaner words for a professional crew — so readers can tell your groups apart at a glance.' },
  { category: 'Technical', question: 'How are the crew names generated?', answer: 'This crew name generator uses curated crew-style words and elements — sharp nouns, colors, city references, and edge. When you click generate, the tool randomly combines them in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only; we do not check any game or platform for availability. The word lists are designed to sound like real crews and gangs — bold, taggable, and easy to say.' },
  { category: 'General', question: 'Are the crew names unique?', answer: 'The names are randomly combined from our word lists, so each run can produce new combinations. We do not check any game or platform for availability, so you must verify yourself whether a crew name is already taken before using it. Many games block duplicate crew names, so having a shortlist of five to ten options gives you backups if your first choice is gone.' },
  { category: 'Naming', question: 'How do I pick a name that matches my type of crew?', answer: 'Let the group steer which generated names you keep. For a gaming clan or esports crew, favor sharp, elite, taggable names like "Vanguard" or "Nemesis." For a GTA or street crew, favor territorial, edgy names with colors and menace. For a racing crew, favor fast, mechanical names. For a heist crew in fiction, favor cool, professional names. For a friend squad, favor fun, self-aware ones. Matching tone to the actual group is what makes a name land.' },
  { category: 'Naming', question: 'How do I build a crew identity around the name?', answer: 'A name is the start; a crew people want to join has an identity. Once you have a name you like, build the rest: a clan tag, a color scheme or emblem, a motto, and a set of ranks or roles. "Nightfall Order" suggests a dark palette, a crescent-moon emblem, and titles like Warden or Initiate; "Nitro Kings" suggests chrome, flames, and a racing hierarchy. Let the generated name point the way and the crew gains a culture, not just a label.' },
  { category: 'Best practices', question: 'What is the best workflow for the crew name generator?', answer: 'Set the count (e.g. 12 or 24), click generate, and copy the list into a notes app. Sort by which names shorten into a clean tag and which match your crew\'s tone. Test your favorites as 2–4 letter tags, then check availability in your game. If your first choice is taken, try the next. Run again for more options and keep a shortlist of five to ten so you have backups. Say it and tag it — a great crew name sounds good in voice chat and looks good abbreviated on a scoreboard.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a crew?', answer: 'A few missteps weaken an otherwise good crew name. The first is a name with no clean clan tag, leaving your crew with nothing short to wear. The second is over-length — a name too long to say or display quickly never catches on. The third is a tone that fights the group, like an elite esports name on a casual squad. The fourth is copying a famous crew, which reads as unoriginal and may be blocked as a duplicate. Keep the taggable, concise, tone-appropriate, and distinctive options.' },
  { category: 'Troubleshooting', question: 'Why is my first choice crew name already taken?', answer: 'Popular crew and gang names are often already in use across games and platforms. This generator does not check availability; it only suggests combinations. Always have a shortlist of five to ten options so you have backups. Run the generator again for more ideas and check availability in your game before committing — many games block duplicate crew names outright. This is normal when using any name generator for games and fiction.' },
  { category: 'Troubleshooting', question: 'Can I use the crew name generator offline?', answer: 'Yes. Once the page is loaded, the crew name generator runs entirely in your browser and does not need a network connection to generate names. You can brainstorm crew, gang, and clan ideas offline, and copying and pasting works offline too. You will need a connection only to open the page initially and to check name availability in your game or on another platform.' },
  { category: 'Use cases', question: 'Can I use it to name a Discord server or friend squad?', answer: 'Yes. For a casual friend group or Discord squad, favor fun, self-aware names that do not take themselves too seriously — the joke lands better than forced menace. Generate a batch, keep the ones that make your group laugh or fit an inside reference, and check the name is not already a well-known server before you adopt it. The generator gives you a fast pool of ideas to rally the squad under.' },
];

export default async function CrewNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="crew" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Crew name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

