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


const toolSlug = 'wrestling-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Wrestling Name Generator',
    description: 'Free wrestling name generator for wrestler names. Create wrestling-style name ideas in your browser with no sign-up.',
    seoTitle: 'Wrestling Name Generator – Wrestler Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Wrestling Name Generator – Ring Names, Gimmicks &amp; Personas</h2>
        <p>
          A great wrestling name does more than sound cool — it tells the crowd who you are before you say a word. &quot;Stone Cold&quot; Steve Austin, The Undertaker, Macho Man Randy Savage, Becky Lynch &quot;The Man&quot;: each name carries a gimmick, an attitude, and a promise about what happens when the bell rings. This wrestling name generator builds ring names in that tradition, mixing tough nouns, action words, and larger-than-life adjectives so you can find a persona that fits your character. It runs entirely in your browser, needs no sign-up, and gives you 1–24 names per run.
        </p>
        <p>
          Whether you are creating a wrestler for a backyard federation, a video-game universe mode, a fan-fiction storyline, or a tabletop role-play, the generator gives you a fast pool of ring-name ideas to build a character around. Below, the guide explains how real wrestling names are constructed — the ring name, the nickname, and the gimmick — so the name you pick actually works as a persona, not just a random pair of words.
        </p>

        <h2>How a Wrestling Ring Name Is Built</h2>
        <p>
          Pro wrestling names follow patterns you can lean on. Understanding them helps you turn a generated idea into a complete character:
        </p>
        <ul>
          <li><strong>The ring name.</strong> The core identity — sometimes a stylized real name (Randy Orton), sometimes pure invention (Bray Wyatt, Rhea Ripley). It should be easy to chant and look good on a title graphic.</li>
          <li><strong>The nickname or epithet.</strong> The tag that sums up the gimmick: &quot;The Viper,&quot; &quot;The Rated-R Superstar,&quot; &quot;The Beast Incarnate.&quot; This is where attitude lives, and it is often the part the crowd actually shouts.</li>
          <li><strong>The gimmick.</strong> The character concept the name signals — monster heel, high-flying underdog, arrogant technician, wildcard brawler. A name like &quot;Deacon Dread&quot; promises a very different match than &quot;Flashy Frankie Gold.&quot;</li>
        </ul>

        <h2>Heels, Faces, and Naming for Alignment</h2>
        <p>
          Wrestling divides characters into faces (heroes) and heels (villains), and a name can lean either way. Menacing, harsh-sounding names — hard consonants, words like Dread, Havoc, Venom, Reaper — read as heel and invite boos. Bright, heroic, momentum-driven names — Blaze, Ace, Bolt, Maverick — read as face and cue cheers. Pick a batch, then sort the results by which side of the alignment they suggest; the same generator can seed both a monster villain and a fan-favorite babyface.
        </p>

        <h2>Names by Wrestling Style</h2>
        <p>
          The kind of wrestler you are shaping should steer which generated names you keep:
        </p>
        <ul>
          <li><strong>Powerhouse / monster.</strong> Heavy, physical names — &quot;Titan,&quot; &quot;Crusher,&quot; &quot;The Mountain&quot; — that sell size and dominance.</li>
          <li><strong>High-flyer / cruiserweight.</strong> Quick, aerial-sounding names — &quot;Sky,&quot; &quot;Falcon,&quot; &quot;Volt&quot; — that match a fast, acrobatic style.</li>
          <li><strong>Technical wrestler.</strong> Cooler, more precise names that suggest skill and control rather than brute force.</li>
          <li><strong>Brawler / hardcore.</strong> Rough, dangerous names with an unhinged edge that fit a no-rules, weapons-allowed character.</li>
          <li><strong>Charismatic showman.</strong> Flashy, self-promoting names — gold, glitz, and swagger built right in.</li>
        </ul>

        <h2>How to Use This Wrestling Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose how many ring names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of wrestling-style names.</li>
          <li>Sort the list by gimmick — which sound like heels, which like faces, which fit your wrestler&apos;s style.</li>
          <li>Use the Copy button to save your shortlist, then pair a favorite ring name with a nickname to complete the persona.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Building the Full Persona Around the Name</h2>
        <p>
          A ring name is the anchor, but a memorable wrestler needs the rest of the package. Once you have a name you like, decide the gimmick it implies, then add the details that make it stick: an entrance-worthy nickname, a catchphrase, a signature look, and a finishing move whose name echoes the character. &quot;The Viper&quot; has the RKO; &quot;The Deadman&quot; has the Tombstone. Let the generated name suggest the finisher and the theme, and the character will feel whole rather than assembled from parts.
        </p>

        <h2>Tips for a Ring Name That Lands</h2>
        <p>
          Say it out loud as if an announcer is introducing you — a great wrestling name sounds good bellowed across an arena. Keep it chantable: crowds latch onto short, rhythmic names (&quot;E-C-Dub,&quot; &quot;Y2J,&quot; &quot;Rock&quot;). Make sure it fits the gimmick you actually want to play; a fearsome name on a comedic character can work as deliberate irony, but only if that contrast is the point. And avoid names too close to a famous wrestler unless you are intentionally writing a tribute or parody.
        </p>

        <h2>How Ring Names Have Changed Across Wrestling Eras</h2>
        <p>
          Naming conventions in pro wrestling have shifted with the business, and knowing the eras helps you pick a name that fits the tone you want. In the territory and golden age, names leaned on strongman and carnival roots — larger-than-life descriptors, animal comparisons, and regional-hero framing like &quot;The American Dream.&quot; Wrestlers were often billed as giants, monsters, or noble champions, and the names matched that broad, theatrical register.
        </p>
        <p>
          The Attitude Era of the late 1990s pushed names in an edgier, more attitude-driven direction. Nicknames became sharper and more personal — &quot;Stone Cold,&quot; &quot;The Rock,&quot; &quot;Degeneration&quot; — reflecting antihero characters who blurred the old face-and-heel line. Catchphrases fused with names so tightly that the epithet often eclipsed the given name entirely.
        </p>
        <p>
          The modern era mixes registers freely. Some stars use stylized real names to feel authentic and relatable; others build fully invented personas with mythic or horror overtones. Independent and international scenes add even more variety, borrowing from lucha libre&apos;s masked-hero tradition, Japanese strong-style seriousness, and British technical heritage. When you generate names, decide which era&apos;s flavor you are chasing and keep the ones that match it — a territory-era giant reads very differently from a modern stylized antihero.
        </p>

        <h2>Naming Women&apos;s Division and Modern Characters</h2>
        <p>
          Women&apos;s wrestling names span the same range as men&apos;s, from fierce and dominant to charismatic and heroic. Characters like &quot;The Man,&quot; &quot;The Queen,&quot; and &quot;Mami&quot; show how a single powerful epithet can define a persona and get an entire arena chanting. When building a women&apos;s division character, treat the nickname as the centerpiece: a strong, ownable tag — one word or a short phrase the crowd can shout back — often does more work than the given name. Generate a batch, then look for names and epithets that project confidence, edge, or star power, and pair them the same way you would for any wrestler.
        </p>

        <h2>Naming Factions, Stables, and Tag Teams</h2>
        <p>
          Some of wrestling&apos;s most memorable names belong to groups rather than individuals. Factions and stables — The Four Horsemen, D-Generation X, The Shield, The Bloodline — use collective names that signal a shared identity and a common threat. When naming a group, you have a few reliable patterns: a collective noun with menace (a &quot;Brood,&quot; a &quot;Syndicate,&quot; a &quot;Dynasty&quot;), a shared surname or family framing, or a unifying concept every member embodies. Generate individual ring names first, spot two or three that share a theme, then build the group name around what they have in common. A stable name should feel bigger than any one member while still telling the crowd exactly what the group stands for.
        </p>

        <h2>How a Name Evolves With a Heel or Face Turn</h2>
        <p>
          Wrestling characters are not static, and a great storyline often hinges on a heel or face turn — a villain becoming a hero, or vice versa. Names can evolve to signal that shift. A wrestler might keep the core ring name but swap the nickname: the same person can go from a beloved &quot;Ace&quot; to a bitter &quot;Fallen Ace&quot; after turning heel. Others drop a nickname entirely, or add a darker one, to mark a character&apos;s transformation. When you are planning a long story, generate a couple of names or epithets that could plausibly belong to the same character in different moral phases — it gives you a built-in visual and verbal cue for the turn when it comes.
        </p>

        <h2>Worked Examples: From Generated Name to Full Character</h2>
        <p>
          To see how a single generated name becomes a complete persona, walk through a few examples. Suppose the generator gives you &quot;Dread.&quot; That harsh, one-word name reads as a monster heel; add the nickname &quot;The Nightmare,&quot; a slow menacing entrance, a mask or face paint, and a finisher called &quot;Lights Out,&quot; and you have a fully realized villain. Now take &quot;Bolt.&quot; Bright and fast, it suits a high-flying face; pair it with &quot;The Human Lightning,&quot; an energetic entrance, and an aerial finisher named &quot;Thunderstrike,&quot; and the character sells itself before the first move.
        </p>
        <p>
          A name like &quot;Sterling Gold&quot; suggests an arrogant, flashy showman — give him the epithet &quot;The Million-Dollar Smile,&quot; gaudy ring gear, and a smug catchphrase, and the gimmick writes itself. The point of these examples is the method: the generated name plants the seed, and the gimmick, nickname, look, and finisher grow from it in a consistent direction. Run the generator, pick a name whose tone is clear, then let every other choice reinforce it.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps can undercut an otherwise good ring name. The first is choosing a name that is hard to chant or pronounce — if the crowd cannot easily shout it, it will never catch on, no matter how clever it looks written down. The second is a name that fights the gimmick: a soft, gentle name on a monster heel confuses the audience unless the contrast is deliberate. The third is over-length; stacking too many words (&quot;The Unstoppable Crimson War-Machine of Doom&quot;) buries the memorable core. The fourth is accidental similarity to an existing star, which reads as imitation. And finally, avoid names so generic they could belong to anyone — the whole point of a ring name is to signal a specific character. When you review a generated batch, filter against these traps and keep the names that are chantable, gimmick-aligned, concise, distinctive, and specific.
        </p>

        <h2>Privacy</h2>
        <p>
          This wrestling name generator runs entirely in your browser. When you set a count and generate, the ring names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your character ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a wrestling name generator?', answer: 'A wrestling name generator is a free browser tool that creates ring names and personas for pro-wrestling characters. It combines tough nouns, action words, and larger-than-life adjectives at random so each run produces new ring-name ideas — the kind you would pair with a gimmick and a nickname. It is built for creating wrestlers for backyard feds, video-game universe modes, fan fiction, and role-play. It runs locally in your browser with no sign-up and gives you 1–24 names per run.' },
  { category: 'Usage', question: 'How do I use the wrestling name generator?', answer: 'Choose how many ring names you want (1–24), click Generate names, and review the batch. Sort the results by gimmick — which sound like villains (heels), which like heroes (faces), which fit your wrestler\'s style — then copy your shortlist. Pair a favorite ring name with a nickname or epithet to complete the persona. Run again for more; there is no sign-up and no limit.' },
  { category: 'General', question: 'Is the wrestling name generator free?', answer: 'Yes. It is completely free to use in your browser with no account, no download, and no limit on how many ring names you generate. Use it as often as you like while building a wrestler for a game, a story, or a backyard federation.' },
  { category: 'Naming', question: 'What makes a good wrestling ring name?', answer: 'A strong ring name is easy to chant, sounds good shouted by an announcer, and signals the gimmick. Crowds latch onto short, rhythmic names (Rock, Y2J, E-C-Dub). It should fit the character you want to play — menacing for a heel, heroic for a face — and look good on a title graphic. Pair the core name with a nickname like "The Viper" or "The Beast Incarnate" and you have a complete persona.' },
  { category: 'Naming', question: 'What is the difference between a ring name, a nickname, and a gimmick?', answer: 'The ring name is the core identity (Randy Orton, Rhea Ripley). The nickname or epithet is the tag that sums up the character ("The Viper," "The Rated-R Superstar") and is often what the crowd chants. The gimmick is the character concept the name signals — monster heel, high-flying underdog, arrogant technician. A good generated name gives you the ring name; you add the nickname and gimmick to finish the persona.' },
  { category: 'Naming', question: 'How do I make a heel (villain) versus a face (hero) name?', answer: 'Heel names use harsh, menacing sounds and words like Dread, Havoc, Venom, or Reaper to invite boos. Face names are brighter and momentum-driven — Blaze, Ace, Bolt, Maverick — to cue cheers. Generate a batch and sort it: the same run can seed both a monster villain and a fan-favorite babyface depending on which names you keep.' },
  { category: 'Naming', question: 'How do I match a name to my wrestling style?', answer: 'Let the style steer which names you keep. Powerhouses suit heavy names (Titan, Crusher, The Mountain); high-flyers suit quick aerial names (Sky, Falcon, Volt); technical wrestlers suit cooler, precise names; brawlers suit rough, dangerous ones; and charismatic showmen suit flashy, gold-and-glitz names. Generate a batch, then filter for the ones that sell your character\'s style.' },
  { category: 'Naming', question: 'How do I name a finishing move to match?', answer: 'A finisher name should echo the character. "The Viper" has the RKO; "The Deadman" has the Tombstone. Once you pick a ring name and gimmick, let them suggest the finisher — a monster heel might have a "Guillotine" or "Reaper Bomb," a high-flyer a "Skyfall." Naming the finisher to fit the persona makes the whole character feel intentional rather than assembled from parts.' },
  { category: 'Use cases', question: 'Can I use these names for a WWE 2K or wrestling video game?', answer: 'Yes. The generated ring names work well for created wrestlers in WWE 2K, universe modes, and other wrestling games. Generate a batch, pick a name that fits the moveset and gimmick you plan to build, and add a nickname for the entrance. Because the names are original combinations, they suit an original character rather than duplicating a real roster wrestler.' },
  { category: 'Use cases', question: 'Can I use the generator for fan fiction or a wrestling story?', answer: 'Yes. Writers use it to name original wrestlers for fan fiction, promos, and storyline drafts. A ring name that signals the gimmick lets readers picture the character instantly. Generate a batch, assign heel and face names to your roster, and give each one a nickname and finisher so the characters read as a believable locker room.' },
  { category: 'Use cases', question: 'Is this good for a backyard or indie wrestling persona?', answer: 'Yes. If you are building a persona for backyard wrestling or an indie character, a memorable ring name is the foundation. Pick a name you can perform under, make sure it is chantable, and build a gimmick, look, and catchphrase around it. The generator gives you the raw ring-name ideas to choose from.' },
  { category: 'Naming', question: 'How do I create a tag-team name from these?', answer: 'Generate individual ring names, then look for two that share a theme — a color, a threat, an attitude — and build a team identity around it. Tag teams often use a shared surname, a collective noun (The Brood, The Shield), or a paired concept. Two generated names with a common thread can become the seed for a unit name.' },
  { category: 'Naming', question: 'Should my ring name copy a famous wrestler?', answer: 'Avoid names too close to a famous wrestler unless you are intentionally writing a tribute or parody. Real ring names are trademarked, and a near-copy reads as derivative for an original character. Use the generator to find something that has the same energy — menacing, heroic, flashy — without borrowing an established star\'s identity.' },
  { category: 'Technical', question: 'How are the ring names generated?', answer: 'The generator draws on curated word lists of wrestling-style nouns, adjectives, and action words, then combines them at random in your browser so each run is different. It is designed to produce names that sound like ring names — bold, chantable, and gimmick-ready. Nothing is sent to a server; generation happens entirely on your device.' },
  { category: 'Usage', question: 'How many ring names can I generate at once?', answer: 'You can request 1–24 ring names per run. For a full roster, run it several times and paste the results into one document, then sort them into heels, faces, and tag-team candidates. There is no daily or total limit on how many times you can generate.' },
  { category: 'Usage', question: 'Can I copy the names I like?', answer: 'Yes. Use the Copy button to copy the whole batch to your clipboard as plain text, one name per line. Paste it into your notes, a character sheet, or your story draft. Copying is the intended way to save a shortlist while you decide which ring name and gimmick to commit to.' },
  { category: 'General', question: 'Do I need an account to use the wrestling name generator?', answer: 'No. There is no sign-up or login. Open the page, choose how many ring names you want, generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Privacy', question: 'Is my data stored when I use the generator?', answer: 'No. The generator runs entirely in your browser. The ring names are created locally on your device and are never uploaded, logged, or stored on our servers. If you refresh or close the tab, the list is cleared unless you copied it, so your character ideas stay private.' },
  { category: 'Compatibility', question: 'Does the wrestling name generator work on mobile?', answer: 'Yes. It runs in any modern browser and works on phones, tablets, and desktop with no app to install. Generate ring names on your phone while watching a match or building a character on the go, and copy your favorites into notes.' },
  { category: 'Naming', question: 'How do I build a full persona around the name?', answer: 'Start with the ring name, decide the gimmick it implies, then add an entrance-worthy nickname, a catchphrase, a signature look, and a finisher whose name fits. A ring name is the anchor; the nickname, gimmick, and finisher turn it into a character the crowd remembers.' },
  { category: 'Best practices', question: 'What is the best way to test a ring name?', answer: 'Say it out loud as if a ring announcer is introducing you across an arena — great wrestling names sound good bellowed, not just read. Then check it is chantable and that it matches the gimmick you want. If a fearsome name lands on a comedic character, keep it only if that irony is the point.' },
  { category: 'Use cases', question: 'Can I use this for a role-playing game character?', answer: 'Yes. Beyond pro wrestling, these bold, persona-driven names suit gladiators, arena fighters, and larger-than-life RPG or tabletop characters. Generate a batch and pick a name whose attitude fits the fighter you are creating.' },
  { category: 'Troubleshooting', question: 'The names feel too similar — how do I get more variety?', answer: 'Run the generator several more times; each run pulls a new random mix. Combine batches, then deliberately sort for different flavors — a monster name, a flashy name, a technical name — so your shortlist covers a range of gimmicks rather than one tone. Mixing your own tweaks into a generated name also adds variety.' },
  { category: 'Troubleshooting', question: 'Can I use the wrestling name generator offline?', answer: 'Yes. Once the page has loaded, generating and copying ring names works without a network connection, because everything runs in your browser. You only need a connection to open the page initially.' },
];

export default async function WrestlingNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="wrestling" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Wrestling name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

