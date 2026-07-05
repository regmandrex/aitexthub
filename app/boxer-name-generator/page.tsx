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


const toolSlug = 'boxer-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Boxer Name Generator',
    description: 'Free boxer name generator for fighter nicknames. Create boxer-style name ideas in your browser with no sign-up.',
    seoTitle: 'Boxer Name Generator – Fighter Nickname Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Boxer Name Generator – Fighter Names &amp; Ring Nicknames</h2>
        <p>
          Boxing is the sport of the great nickname. &quot;Iron&quot; Mike Tyson, &quot;Sugar&quot; Ray Robinson, Muhammad Ali &quot;The Greatest,&quot; Manny &quot;Pac-Man&quot; Pacquiao, &quot;Prince&quot; Naseem Hamed — in the fight game, the nickname is half the legend, doing as much work as the record. This boxer name generator builds fighter names and ring nicknames in that tradition, mixing hard-hitting nouns, metals, animals, and hometown-hero framing so you can find a name that sounds like it belongs on a fight poster. It runs entirely in your browser, needs no sign-up, and gives you 1–24 names per run.
        </p>
        <p>
          Whether you are creating a fighter for a boxing video game&apos;s career mode, a sports novel or screenplay, a tabletop or role-play character, or just a hard-hitting handle for yourself, the generator gives you a fast pool of ideas to build a fighter around. The guide below breaks down how real boxing names and nicknames are built — the fighter&apos;s name, the ring moniker, and the fighting identity behind it — so the name you pick actually reads like a boxer, not a random word pair.
        </p>

        <h2>How a Boxing Name Is Built</h2>
        <p>
          Boxing names have two layers, and the best fighters nail both. Understanding the structure helps you turn a generated idea into a complete fighter:
        </p>
        <ul>
          <li><strong>The fighter&apos;s name.</strong> The name on the record and the fight poster — sometimes a real-sounding name, sometimes stylized. It should look good in lights and be easy for a ring announcer to call.</li>
          <li><strong>The ring nickname.</strong> The moniker that captures the fighter&apos;s style or spirit: &quot;Iron,&quot; &quot;The Hitman,&quot; &quot;Sugar,&quot; &quot;The Golden Boy.&quot; This is where the identity lives, and it is what commentators and fans repeat.</li>
          <li><strong>The fighting identity.</strong> The character the name signals — knockout puncher, slick defensive genius, come-forward brawler, hometown hero. A name like &quot;Hurricane&quot; promises a very different fight than &quot;The Professor.&quot;</li>
        </ul>

        <h2>Where Boxing Nicknames Come From</h2>
        <p>
          Ring nicknames tend to draw from a handful of well-worn wells, and knowing them helps you spot the strongest generated options:
        </p>
        <ul>
          <li><strong>Power and metal.</strong> &quot;Iron,&quot; &quot;Steel,&quot; &quot;Hammer,&quot; &quot;The Bomber&quot; — names that promise a knockout and sound heavy when announced.</li>
          <li><strong>Animals.</strong> &quot;The Bull,&quot; &quot;Cobra,&quot; &quot;The Lion&quot; — animal nicknames map a fighting style to an instantly readable image.</li>
          <li><strong>Speed and sweetness.</strong> &quot;Sugar,&quot; &quot;Lightning,&quot; &quot;The Flash&quot; — for slick, fast, skillful fighters rather than sluggers.</li>
          <li><strong>Hometown and heritage.</strong> &quot;The Pride of&quot; a city, or a nod to a fighter&apos;s roots — framing that turns a boxer into a people&apos;s champion.</li>
          <li><strong>Menace and mystique.</strong> &quot;The Executioner,&quot; &quot;Nightmare,&quot; &quot;The Destroyer&quot; — intimidation built right into the name.</li>
        </ul>

        <h2>Names by Fighting Style</h2>
        <p>
          The kind of fighter you are shaping should steer which generated names you keep:
        </p>
        <ul>
          <li><strong>Knockout puncher.</strong> Heavy, explosive names — &quot;Dynamite,&quot; &quot;The Hammer,&quot; &quot;Concrete&quot; — that sell one-punch power.</li>
          <li><strong>Slick boxer / defensive genius.</strong> Smooth, clever names — &quot;Sugar,&quot; &quot;The Magician,&quot; &quot;Silk&quot; — that suggest skill over force.</li>
          <li><strong>Swarmer / pressure fighter.</strong> Relentless, forward-driving names — &quot;The Bull,&quot; &quot;Hurricane,&quot; &quot;Machine&quot; — that match a come-forward style.</li>
          <li><strong>Counter-puncher / technician.</strong> Cooler, cerebral names — &quot;The Professor,&quot; &quot;The Surgeon&quot; — that signal precision.</li>
          <li><strong>Showman.</strong> Flashy, self-promoting names built around gold, glory, and swagger.</li>
        </ul>

        <h2>Nicknames Across the Weight Classes</h2>
        <p>
          Weight class subtly shapes what a nickname should evoke. Heavyweight names lean on raw power and destruction — the division of one-punch knockouts wants names like &quot;Iron,&quot; &quot;The Beast,&quot; or &quot;Bronze Bomber.&quot; The lighter divisions, where speed and volume rule, suit quicker, sharper monikers — &quot;Lightning,&quot; &quot;Sugar,&quot; &quot;The Flash.&quot; Middleweight and welterweight, boxing&apos;s glamour divisions, balance both, which is why they produce some of the sport&apos;s most iconic all-rounder nicknames. When you generate a batch, keep the names whose weight and energy match the division your fighter competes in.
        </p>

        <h2>How to Use This Boxer Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose how many fighter names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of boxing-style names and nicknames.</li>
          <li>Sort the list by fighting style and weight class — which sound like knockout artists, which like slick technicians.</li>
          <li>Use the Copy button to save your shortlist, then pair a favorite name with a ring nickname to complete the fighter.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Building the Full Fighter Around the Name</h2>
        <p>
          A ring name is the anchor, but a memorable boxer needs the rest of the package. Once you have a name you like, decide the fighting identity it implies, then add the details that make it stick: a signature style, a home city and walkout, a record and a rival, and a story arc — the undefeated prospect, the comeback veteran, the underdog challenger. &quot;The Golden Boy&quot; suggests a marketable prospect; &quot;The Executioner&quot; suggests a feared knockout artist. Let the generated name and nickname point the way, and the fighter will feel like someone with a real career behind them.
        </p>

        <h2>Naming Fictional Fighters for Games and Stories</h2>
        <p>
          Boxing fiction lives and dies on believable fighters, and a name is the first thing that sells one. For a career-mode created boxer, pick a name that fits the archetype you are building and that a commentator could plausibly hype. For a novel, film, or comic, use the nickname to telegraph the character&apos;s arc — a cocky &quot;Golden Boy&quot; who must be humbled, a battered &quot;Old Warrior&quot; on one last run. Generate a full division of fighters at once and give each a distinct nickname, and you have a believable field of contenders for your protagonist to climb through.
        </p>

        <h2>Tips for a Boxing Name That Lands</h2>
        <p>
          Say it out loud in a ring announcer&apos;s voice — a great boxing name sounds good drawn out over a microphone before the opening bell. Keep the nickname short and punchy; the best ones are one or two words fans can chant. Make sure it fits the fighter you actually want: a menacing nickname on a friendly, technical boxer confuses the story unless the contrast is deliberate. And steer clear of names too close to a real legend unless you are intentionally writing a tribute, since &quot;Iron Mike&quot; or &quot;The Greatest&quot; are indelibly tied to their owners.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps can flatten an otherwise strong fighter name. The first is a nickname that fights the style — calling a defensive counter-puncher &quot;The Destroyer&quot; sets the wrong expectation. The second is over-length; stacking too many words buries the memorable core that fans actually shout. The third is copying a legend so closely the name reads as imitation rather than homage. The fourth is a name that is hard for a commentator to say quickly under the noise of a crowd. When you review a generated batch, keep the names that are punchy, style-appropriate, distinctive, and easy to announce.
        </p>

        <h2>Privacy</h2>
        <p>
          This boxer name generator runs entirely in your browser. When you set a count and generate, the fighter names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your character ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a boxer name generator?', answer: 'A boxer name generator is a free browser tool that creates fighter names and ring nicknames for boxing characters. It combines hard-hitting nouns, metals, animals, and hometown-hero framing at random so each run produces new ideas — the kind of name and moniker you would see on a fight poster. It is built for career-mode fighters in boxing games, sports fiction, and role-play. It runs locally in your browser with no sign-up and gives you 1–24 names per run.' },
  { category: 'Usage', question: 'How do I use the boxer name generator?', answer: 'Choose how many fighter names you want (1–24), click Generate names, and review the batch. Sort the results by fighting style and weight class — which sound like knockout artists, which like slick technicians — then copy your shortlist. Pair a favorite name with a ring nickname like "Iron" or "The Hitman" to complete the fighter. Run again for more; there is no sign-up and no limit.' },
  { category: 'General', question: 'Is the boxer name generator free?', answer: 'Yes. It is completely free to use in your browser with no account, no download, and no limit on how many fighter names you generate. Use it as often as you like while building a boxer for a game, a story, or a role-play.' },
  { category: 'Naming', question: 'What makes a good boxing nickname?', answer: 'A great boxing nickname is short, punchy, and captures the fighter\'s style — "Iron" for a knockout puncher, "Sugar" for a slick technician, "The Bull" for a pressure fighter. It should sound good drawn out by a ring announcer and be easy for fans to chant. The best ones do as much work as the fighter\'s record, telling you who the boxer is before the first bell.' },
  { category: 'Naming', question: 'What is the difference between a fighter\'s name and a ring nickname?', answer: 'The fighter\'s name is what appears on the record and the poster; the ring nickname is the moniker that captures their style or spirit — "Iron" Mike, "The Greatest," "The Golden Boy." The nickname is what commentators and fans repeat. A good generated result gives you the fighter\'s name; you add the nickname to complete the identity.' },
  { category: 'Naming', question: 'Where do boxing nicknames come from?', answer: 'Ring nicknames usually draw from a few wells: power and metal ("Iron," "Hammer"), animals ("The Bull," "Cobra"), speed and sweetness ("Sugar," "Lightning"), hometown and heritage ("The Pride of" a city), and menace ("The Executioner," "Nightmare"). Knowing these sources helps you spot the strongest generated options and match one to your fighter\'s image.' },
  { category: 'Naming', question: 'How do I match a nickname to fighting style?', answer: 'Let the style steer the name. Knockout punchers suit explosive names (Dynamite, The Hammer); slick defensive boxers suit smooth names (Sugar, The Magician); pressure fighters suit relentless names (The Bull, Hurricane); technicians suit cerebral names (The Professor, The Surgeon); and showmen suit flashy, gold-and-glory names. Generate a batch and filter for the ones that sell your fighter\'s style.' },
  { category: 'Naming', question: 'Does weight class affect the nickname?', answer: 'It does. Heavyweight names lean on raw power and destruction (Iron, The Beast, Bronze Bomber); lighter divisions, ruled by speed and volume, suit quicker names (Lightning, Sugar, The Flash); and the glamour divisions in the middle balance both. Keep the generated names whose weight and energy match the division your fighter competes in.' },
  { category: 'Use cases', question: 'Can I use these names for a boxing video game career mode?', answer: 'Yes. The generated fighter names work well for created boxers in career or franchise modes. Generate a batch, pick a name that fits the archetype and division you plan to build, and add a ring nickname a commentator could hype. Because the names are original combinations, they suit a created fighter rather than duplicating a real champion.' },
  { category: 'Use cases', question: 'Can I use the generator for a boxing novel or screenplay?', answer: 'Yes. Writers use it to name original fighters for novels, films, and comics. Use the nickname to telegraph the character\'s arc — a cocky "Golden Boy" who gets humbled, a battered "Old Warrior" on one last run. Generate a whole division of contenders at once, give each a distinct nickname, and you have a believable field for your protagonist to climb.' },
  { category: 'Naming', question: 'How do I build a full fighter around the name?', answer: 'Start with the name and nickname, decide the fighting identity they imply, then add a signature style, a home city and walkout, a record and a rival, and a story arc — undefeated prospect, comeback veteran, underdog challenger. The name is the anchor; those details make the fighter feel like someone with a real career.' },
  { category: 'Naming', question: 'Should my boxer nickname copy a real legend?', answer: 'Avoid nicknames too close to a real legend unless you are intentionally writing a tribute. "Iron Mike" and "The Greatest" are indelibly tied to their owners, so a near-copy reads as imitation for an original fighter. Use the generator to find something with the same energy — power, speed, menace — without borrowing a famous boxer\'s identity.' },
  { category: 'Technical', question: 'How are the fighter names generated?', answer: 'The generator draws on curated word lists of boxing-style nouns, adjectives, metals, and animals, then combines them at random in your browser so each run is different. It is designed to produce names and nicknames that sound like they belong on a fight poster. Nothing is sent to a server; generation happens entirely on your device.' },
  { category: 'Usage', question: 'How many fighter names can I generate at once?', answer: 'You can request 1–24 fighter names per run. For a full division, run it several times and paste the results into one document, then sort them by weight class and style. There is no daily or total limit on how many times you can generate.' },
  { category: 'Usage', question: 'Can I copy the names I like?', answer: 'Yes. Use the Copy button to copy the whole batch to your clipboard as plain text, one name per line. Paste it into your notes, a character sheet, or your story draft. Copying is the intended way to save a shortlist while you decide which fighter name and nickname to commit to.' },
  { category: 'General', question: 'Do I need an account to use the boxer name generator?', answer: 'No. There is no sign-up or login. Open the page, choose how many fighter names you want, generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Privacy', question: 'Is my data stored when I use the generator?', answer: 'No. The generator runs entirely in your browser. The fighter names are created locally on your device and are never uploaded, logged, or stored on our servers. If you refresh or close the tab, the list is cleared unless you copied it, so your character ideas stay private.' },
  { category: 'Compatibility', question: 'Does the boxer name generator work on mobile?', answer: 'Yes. It runs in any modern browser and works on phones, tablets, and desktop with no app to install. Generate fighter names on your phone while watching a fight or building a character on the go, and copy your favorites into notes.' },
  { category: 'Best practices', question: 'What is the best way to test a boxing name?', answer: 'Say it out loud in a ring announcer\'s voice — a great boxing name sounds good drawn out over a microphone before the opening bell. Then check the nickname is short, chantable, and matches the style you want. If a menacing nickname lands on a friendly technical boxer, keep it only if that contrast is the point.' },
  { category: 'Naming', question: 'How do I name a fighter for an underdog story?', answer: 'Underdog fighters often carry humble, gritty, or hometown-hero nicknames rather than flashy ones — a name that sounds like a working fighter who earned every round. Generate a batch and keep the grounded, blue-collar names; save the "Golden Boy" flash for the favored rival your underdog has to beat.' },
  { category: 'Use cases', question: 'Can I use this for MMA or other combat sports characters?', answer: 'Yes. While the generator is tuned for boxing, the fighter names and nicknames work for MMA, kickboxing, and other combat-sport characters too — the naming instincts (power, animal, speed, menace) carry across. Generate a batch and pick a name whose energy fits the fighter you are creating.' },
  { category: 'Troubleshooting', question: 'The names feel too similar — how do I get more variety?', answer: 'Run the generator several more times; each run pulls a new random mix. Combine batches, then deliberately sort for different flavors — a power name, a speed name, an animal name — so your shortlist spans styles rather than one tone. Adding your own tweak to a generated name also broadens the range.' },
  { category: 'Troubleshooting', question: 'Can I use the boxer name generator offline?', answer: 'Yes. Once the page has loaded, generating and copying fighter names works without a network connection, because everything runs in your browser. You only need a connection to open the page initially.' },
];

export default async function BoxerNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="boxer" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Boxer name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

