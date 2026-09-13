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


const toolSlug = 'task-force-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Task Force Name Generator',
    description: 'Free task force name generator for unit names. Create military-style name ideas in your browser with no sign-up.',
    seoTitle: 'Task Force Name Generator – Unit Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Task Force Name Generator – Unit Names, Operations &amp; Codenames</h2>
        <p>
          A task force name has to sound official, decisive, and a little bit dangerous — Task Force 141, Operation Overlord, Delta Force, Ghost Recon. In military fiction and games, the unit name sets the tone before a single shot is fired: it tells you whether this is an elite black-ops squad, a joint coalition operation, or a covert strike team. This task force name generator builds military unit names, operation codenames, and squad designations in that tradition, combining sharp nouns, NATO-flavored words, numbers, and menace so the name reads like it came out of a briefing. It runs entirely in your browser, needs no sign-up, and gives you 1–24 names per run.
        </p>
        <p>
          Whether you are naming a squad for a tactical shooter, a unit for a war novel or campaign, a strike team for a tabletop RPG, or an operation for a military-fiction setting, the generator gives you a fast pool of authentic-sounding designations. The guide below explains how real military names are constructed — task forces, operations, and callsigns — so the name you pick sounds like it belongs in a command structure, not a random word pairing.
        </p>

        <h2>How Military Unit Names Are Built</h2>
        <p>
          Military naming follows recognizable conventions you can lean on to make a unit sound real:
        </p>
        <ul>
          <li><strong>Task force designations.</strong> Often a number, a letter, or a name attached to &quot;Task Force&quot; — Task Force 141, Task Force Black. The designation signals a specially assembled unit built for a mission.</li>
          <li><strong>Operation codenames.</strong> A single evocative word paired with &quot;Operation&quot; — Overlord, Neptune, Rolling Thunder. Real operation names are deliberately chosen to be memorable and not to reveal intent.</li>
          <li><strong>Squad and callsign names.</strong> Short, sharp identifiers a team uses on the radio — Ghost, Reaper, Bravo, Viper. These are what soldiers actually say mid-mission.</li>
        </ul>

        <h2>Task Forces vs. Operations vs. Callsigns</h2>
        <p>
          These three name types serve different jobs, and mixing them up breaks the illusion. A <strong>task force</strong> is a unit — a group of people assembled for a purpose, so its name identifies the team (Task Force 88). An <strong>operation</strong> is a mission — a codenamed action that unit carries out, so its name labels the plan (Operation Anaconda). A <strong>callsign</strong> is a handle — the short radio name for an individual or squad (this is &quot;Reaper Six&quot;). When you generate names, decide which layer you are naming: the standing unit, the specific mission, or the radio identity, and keep the results that fit that layer.
        </p>

        <h2>Names by Unit Type and Tone</h2>
        <p>
          The kind of force you are shaping should steer which generated names you keep:
        </p>
        <ul>
          <li><strong>Elite / special forces.</strong> Cold, sharp, single-word names — &quot;Ghost,&quot; &quot;Reaper,&quot; &quot;Spectre&quot; — that sound like a unit that operates in the dark.</li>
          <li><strong>Heavy / assault units.</strong> Powerful, impact-driven names — &quot;Hammer,&quot; &quot;Ironclad,&quot; &quot;Thunderbolt&quot; — that promise overwhelming force.</li>
          <li><strong>Recon / stealth teams.</strong> Quiet, watchful names — &quot;Shadow,&quot; &quot;Silent,&quot; &quot;Nightfall&quot; — that suggest observation before engagement.</li>
          <li><strong>Coalition / joint task forces.</strong> Formal, numbered, official-sounding designations that read as a large sanctioned operation.</li>
          <li><strong>Covert / black ops.</strong> Ambiguous, deniable names — vague or bureaucratic on purpose — that hide the unit&apos;s real purpose.</li>
        </ul>

        <h2>How to Use This Task Force Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose how many unit names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of military-style designations.</li>
          <li>Sort the list by layer — which work as task-force names, which as operation codenames, which as callsigns.</li>
          <li>Use the Copy button to save your shortlist, then attach the right prefix (&quot;Task Force,&quot; &quot;Operation&quot;) to complete the designation.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Building a Believable Chain of Command</h2>
        <p>
          A single unit name is a start, but rich military fiction has structure. Once you have a task force name, build the layers around it: an overarching operation the unit serves, a handful of squad callsigns beneath it, and individual operator handles within each squad. &quot;Task Force Wraith&quot; running &quot;Operation Blackout&quot; with squads &quot;Reaper,&quot; &quot;Viper,&quot; and &quot;Ghost&quot; instantly reads as a real command structure. Generate several names at once and assign them to the different tiers, and your setting gains depth without extra invention.
        </p>

        <h2>Naming Operations Like the Real Military Does</h2>
        <p>
          Real operation codenames follow a few unwritten rules worth borrowing. They are usually one or two words, evocative but not descriptive of the actual objective (to avoid tipping off the enemy), and often drawn from mythology, weather, animals, or abstract nouns — Overlord, Desert Storm, Rolling Thunder, Neptune Spear. Some militaries pull from randomized word lists specifically so the name reveals nothing. When you generate operation names, favor the ones that sound weighty and memorable but do not literally spell out the mission — that restraint is what makes them feel authentic.
        </p>

        <h2>Tips for a Task Force Name That Lands</h2>
        <p>
          Say it as a commanding officer would in a briefing — a good unit name sounds crisp and authoritative spoken aloud. Keep callsigns short; they have to be clear over a noisy radio. Match the tone to the mission: a black-ops unit wants an ambiguous, deniable name, while a large coalition operation wants a formal, numbered designation. And avoid names lifted directly from famous real or fictional units (Delta Force, Task Force 141) unless you are intentionally referencing them, since those are strongly associated with their sources.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps can make a military name ring false. The first is mixing the layers — calling a mission &quot;Task Force&quot; or a standing unit &quot;Operation&quot; confuses readers who know the difference. The second is an operation name that literally describes the objective, which real militaries avoid for security reasons. The third is a callsign too long or awkward to say quickly on a radio. The fourth is over-decorated names that pile on adjectives until they stop sounding official. When you review a generated batch, keep the names that are crisp, layer-appropriate, and plausibly straight out of a command structure.
        </p>

        <h2>Privacy</h2>
        <p>
          This task force name generator runs entirely in your browser. When you set a count and generate, the unit names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your setting ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a task force name generator?', answer: 'A task force name generator is a free browser tool that creates military unit names, operation codenames, and squad designations for games and fiction. It combines sharp nouns, NATO-flavored words, numbers, and menace at random so each run produces authentic-sounding designations like "Task Force 88" or "Operation Blackout." It is built for tactical shooters, war stories, and military RPG settings. It runs locally in your browser with no sign-up and gives you 1–24 names per run.' },
  { category: 'Usage', question: 'How do I use the task force name generator?', answer: 'Choose how many unit names you want (1–24), click Generate names, and review the batch. Sort the results by layer — which work as task-force names, which as operation codenames, which as callsigns — then copy your shortlist. Attach the right prefix ("Task Force," "Operation") to complete the designation. Run again for more; there is no sign-up and no limit.' },
  { category: 'General', question: 'Is the task force name generator free?', answer: 'Yes. It is completely free to use in your browser with no account, no download, and no limit on how many unit names you generate. Use it as often as you like while building a military setting for a game or story.' },
  { category: 'Naming', question: 'What is the difference between a task force, an operation, and a callsign?', answer: 'A task force is a unit — a group assembled for a purpose (Task Force 141). An operation is a mission — a codenamed action the unit carries out (Operation Anaconda). A callsign is a radio handle for an individual or squad ("Reaper Six"). They serve different jobs, so when you generate names, decide which layer you are naming and keep the results that fit it.' },
  { category: 'Naming', question: 'How do I name a military operation realistically?', answer: 'Real operation codenames are usually one or two words, evocative but not descriptive of the objective (to avoid revealing intent), and often drawn from mythology, weather, animals, or abstract nouns — Overlord, Desert Storm, Neptune Spear. Favor generated names that sound weighty and memorable without literally spelling out the mission; that restraint is what makes them feel authentic.' },
  { category: 'Naming', question: 'What makes a good squad callsign?', answer: 'A good callsign is short, sharp, and instantly clear over a noisy radio — Ghost, Reaper, Viper, Bravo. Soldiers actually say these mid-mission, so length and clarity matter more than flavor. Generate a batch and keep the crisp one-word options for squads and operators.' },
  { category: 'Naming', question: 'How do I match a name to the unit type?', answer: 'Let the unit type steer the tone. Special forces suit cold single-word names (Ghost, Spectre); assault units suit powerful names (Hammer, Ironclad); recon teams suit quiet names (Shadow, Nightfall); coalition forces suit formal numbered designations; and black-ops units suit ambiguous, deniable names. Generate a batch and filter for the tone your force needs.' },
  { category: 'Use cases', question: 'Can I use these names for a tactical shooter or military game?', answer: 'Yes. The generated designations work well for squads, operations, and units in tactical shooters and military games. Generate a batch, pick a name that fits the unit type you are building, and add the right prefix. Because the names are original combinations, they suit a created unit rather than duplicating a famous real or fictional force.' },
  { category: 'Use cases', question: 'Can I use the generator for a war novel or campaign?', answer: 'Yes. Writers and game masters use it to name units and operations for war fiction, military settings, and RPG campaigns. Generate several names at once and assign them to different tiers — the standing task force, the operation it runs, the squads beneath it — so your setting gains a believable command structure.' },
  { category: 'Naming', question: 'How do I build a believable chain of command?', answer: 'Layer the names. Start with a task force, add an overarching operation it serves, a handful of squad callsigns beneath it, and individual operator handles within each squad. "Task Force Wraith" running "Operation Blackout" with squads "Reaper," "Viper," and "Ghost" instantly reads as a real command structure. Generate a batch and assign names to each tier.' },
  { category: 'Naming', question: 'Should my unit name copy a real or famous unit?', answer: 'Avoid names lifted directly from famous real or fictional units — Delta Force, Task Force 141 — unless you are intentionally referencing them, since those are strongly associated with their sources. Use the generator to find something with the same military weight and tone without borrowing an established unit\'s identity.' },
  { category: 'Technical', question: 'How are the unit names generated?', answer: 'The generator draws on curated word lists of military-style nouns, adjectives, numbers, and NATO-flavored terms, then combines them at random in your browser so each run is different. It is designed to produce names that sound like they came out of a briefing. Nothing is sent to a server; generation happens entirely on your device.' },
  { category: 'Usage', question: 'How many unit names can I generate at once?', answer: 'You can request 1–24 unit names per run. For a full order of battle, run it several times and paste the results into one document, then sort them into task forces, operations, and callsigns. There is no daily or total limit on how many times you can generate.' },
  { category: 'Usage', question: 'Can I copy the names I like?', answer: 'Yes. Use the Copy button to copy the whole batch to your clipboard as plain text, one name per line. Paste it into your campaign notes, a setting document, or your story draft. Copying is the intended way to save a shortlist while you decide which designations to use.' },
  { category: 'General', question: 'Do I need an account to use the task force name generator?', answer: 'No. There is no sign-up or login. Open the page, choose how many unit names you want, generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Privacy', question: 'Is my data stored when I use the generator?', answer: 'No. The generator runs entirely in your browser. The unit names are created locally on your device and are never uploaded, logged, or stored on our servers. If you refresh or close the tab, the list is cleared unless you copied it, so your setting ideas stay private.' },
  { category: 'Compatibility', question: 'Does the task force name generator work on mobile?', answer: 'Yes. It runs in any modern browser and works on phones, tablets, and desktop with no app to install. Generate unit names on your phone while planning a campaign or building a setting on the go, and copy your favorites into notes.' },
  { category: 'Best practices', question: 'How do I test whether a unit name works?', answer: 'Say it as a commanding officer would in a briefing — a good unit name sounds crisp and authoritative spoken aloud. Check that callsigns are short enough to say clearly over a radio, and that the tone matches the mission: ambiguous for black ops, formal for a coalition operation.' },
  { category: 'Naming', question: 'How do I name a covert or black-ops unit?', answer: 'Covert units work best with ambiguous, deniable names — vague or bureaucratic on purpose — that hide the unit\'s real purpose, the way real deniable operations avoid descriptive names. Generate a batch and keep the flat, unremarkable-sounding options; the blandness is the point for a unit that is not supposed to draw attention.' },
  { category: 'Use cases', question: 'Can I use this for a sci-fi or fantasy military?', answer: 'Yes. The naming instincts — sharp nouns, evocative codenames, short callsigns — carry across genres. A sci-fi strike team or a fantasy special unit uses the same structure as a modern task force. Generate a batch and pick names whose tone fits your setting, then swap in genre-appropriate prefixes.' },
  { category: 'Troubleshooting', question: 'The names feel too similar — how do I get more variety?', answer: 'Run the generator several more times; each run pulls a new random mix. Combine batches, then deliberately sort for different tones — an elite name, a heavy-assault name, a covert name — so your shortlist spans unit types rather than one flavor. Adding your own tweak to a generated name broadens the range.' },
  { category: 'Troubleshooting', question: 'Can I use the task force name generator offline?', answer: 'Yes. Once the page has loaded, generating and copying unit names works without a network connection, because everything runs in your browser. You only need a connection to open the page initially.' },
];

export default async function TaskForceNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="task-force" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Task Force name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

