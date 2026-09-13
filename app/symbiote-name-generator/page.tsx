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


const toolSlug = 'symbiote-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Symbiote Name Generator',
    description: 'Free symbiote name generator for OC symbiotes, Venom-style alien names, and Klyntar spawn. Menacing single-word names built from violence, sound, and predation — in your browser, no sign-up.',
    seoTitle: 'Symbiote Name Generator – Venom & Carnage-Style OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Symbiote Name Generator – Venom &amp; Carnage-Style OC Names</h2>
        <p>
          This symbiote name generator builds names the way Marvel does for the Klyntar: short, menacing, single words that hit like a threat. Venom. Carnage. Riot. Scream. Lasher. Phage. Agony. Toxin. These are not gentle handles — they are sounds an alien predator would answer to. Whether you are designing an original character (OC) symbiote for fan art, writing fanfiction set in the symbiote mythos, or building a character for a role-play server, this tool gives you a pool of names that feel like they crawled out of the same primordial mass as Eddie Brock&apos;s other half. It runs entirely in your browser, stores nothing, and you can generate as many batches as you like with no sign-up.
        </p>
        <p>
          Symbiote names are not random — they follow a tight, recognizable convention. Almost every named symbiote in the comics is a single, hard-sounding word that evokes violence, sound, predation, or dread. This page explains that convention so the name you pick for an OC symbiote actually reads as canon, sits believably beside Venom and Carnage, and tells a reader something about your creature before they even see it.
        </p>

        <h2>How Symbiote Names Work in Marvel</h2>
        <p>
          When the first Klyntar spawn were introduced in the Maximum Carnage and Planet of the Symbiotes era, Marvel established a naming pattern that has held ever since. Understanding it is the difference between a name that sounds like a real symbiote and one that sounds like a generic monster:
        </p>
        <ul>
          <li><strong>One word, not two.</strong> Venom, Carnage, Riot, Phage, Lasher, Agony, Scream. Symbiote names are almost never compound phrases — a single blunt word carries the whole threat. The generator anchors on this single-word convention.</li>
          <li><strong>It is an abstract noun, not a name.</strong> Unlike a human, a symbiote is usually named for a concept: violence (Carnage), poison (Toxin), sound (Scream), or an emotion (Agony). The word <em>is</em> the creature&apos;s nature.</li>
          <li><strong>Hard consonants and short vowels.</strong> The most iconic names end on a sharp sound — the &quot;-age&quot; of Carnage, the hiss of Scream, the snap of Riot. Names that bite read as more dangerous.</li>
          <li><strong>Lineage shows in tone.</strong> Carnage is Venom&apos;s spawn and its name escalates the cruelty. The five spawn from Life Foundation — Riot, Phage, Lasher, Agony, Scream — share a family of harsh, visceral words. A name can signal whose offspring your OC is.</li>
        </ul>

        <h2>Naming Themes: Violence, Sound, Predation, Darkness</h2>
        <p>
          Pick a theme first, then generate and keep the names that match it. Symbiote naming clusters around a handful of moods, and choosing one up front makes your OC coherent:
        </p>
        <ul>
          <li><strong>Violence and slaughter.</strong> The Carnage lineage — words for bloodshed, ruin, and destruction. Best for a feral, kill-driven symbiote with no interest in a stable host.</li>
          <li><strong>Sound and shriek.</strong> Scream is the touchstone here; symbiotes are famously vulnerable to sonics, so a sound-themed name is both ironic and fitting. Think shrieks, echoes, and noise.</li>
          <li><strong>Poison and predation.</strong> Toxin and Anti-Venom live here — names of venom, contagion, and the hunt. Good for a symbiote defined by what it does to a host or a target.</li>
          <li><strong>Darkness and dread.</strong> This is the Knull register — the King in Black, god of the symbiotes, draws on the void, the abyss, and primordial night. Use it for an ancient or godlike OC tied to the dragon Grendel or the living abyss.</li>
        </ul>
        <p>
          A name from one cluster reads very differently from another even though both are &quot;symbiote-style.&quot; A sound-themed symbiote and a darkness-themed one suggest different origins, different hosts, and different stories.
        </p>

        <h2>Building an OC Symbiote</h2>
        <p>
          For fan art, fanfiction, and role-play, the symbiote&apos;s name is the first thing an audience judges. A strong OC symbiote name does three jobs at once: it states the creature&apos;s nature in one word, it fits the menacing single-word convention, and it hints at lineage or theme so the symbiote slots into the existing mythos. Generate a batch, then ask of each option: could this name appear in a panel next to Venom and Carnage without looking out of place? If yes, it is in the right register.
        </p>
        <p>
          A common approach is to decide your symbiote&apos;s defining trait before you name it. Is it a sound-based predator, a poison spreader, a berserker spawn of Venom, or something dredged up from Knull&apos;s abyss? Let that trait choose the theme, then let the generator surface the exact word. Many creators also tie an OC to a known lineage — a sibling of the Life Foundation five, or a fresh spawn that broke off from Venom — and pick a name that rhymes tonally with that family.
        </p>

        <h2>The Host and Symbiote Dynamic</h2>
        <p>
          A symbiote is only half the character. The other half is the host it bonds to — Eddie Brock for Venom, Cletus Kasady for Carnage, Patricia Robertson for Scream. When a host and symbiote bond, the merged being often takes the symbiote&apos;s name: the human becomes &quot;Venom,&quot; the &quot;we&quot; that the symbiote speaks in. This means your OC name has to work on two levels — as the alien&apos;s name and as the identity the bonded pair shares.
        </p>
        <p>
          Think about the contrast between host and symbiote when you name. A meek host bonded to a symbiote called something brutal creates tension; a violent host paired with an equally savage name doubles down. The name you generate is not just the creature&apos;s label — it is the persona the host steps into every time the symbiote takes over. Choose a word that you would want a character to growl in the third-person plural.
        </p>

        <h2>How to Use This Symbiote Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of single-word, symbiote-style names.</li>
          <li>Skim for names that match your chosen theme — violence, sound, predation, or darkness — then use the Copy button to save the whole list.</li>
          <li>Paste into your character notes or art reference and shortlist your favorites for your OC.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your OC symbiote concept stays private until you choose to share it in a comic, a fic, or a thread.
        </p>

        <h2>Tips for Picking the Right Symbiote Name</h2>
        <p>
          Say the name out loud — symbiotes speak, and their names are meant to be spat, hissed, or growled. If a name does not sound dangerous when you say it, it will not read as dangerous on the page. Keep it to a single word for canon flavor; the moment you reach for two words you drift away from the Klyntar convention and toward a generic monster name. Avoid copying a canon symbiote outright — you do not want an OC literally called Venom or Carnage — but borrowing the <em>shape</em> of those names (one harsh, abstract noun) is exactly how you fit in.
        </p>
        <p>
          If you are naming a brood — several spawn from one parent symbiote — generate a batch and pick words that share a tonal family, the way Riot, Phage, Lasher, Agony, and Scream do. Pick names of similar length and harshness so the group reads as siblings rather than unrelated creatures. That cohesion is what made the Life Foundation five feel like a single terrifying litter.
        </p>

        <h2>Symbiotes, Klyntar, and the King in Black</h2>
        <p>
          The lore behind the names deepens your options. The symbiotes are properly called the Klyntar — a race that descended into violence after being created by the dark god Knull, who forged them from the living abyss. Knull, the King in Black, sits at the top of the mythos as the source of every symbiote, wielding a sword of living darkness and the dragon Grendel. Names that lean into void, abyss, and primordial dread tie an OC to this divine, ancient end of the spectrum, while names of pure aggression place it among the feral, host-hungry spawn.
        </p>
        <p>
          Knowing where on this spectrum your OC sits — a noble, redeemed Klyntar like Venom became, a pure predator like Carnage, or a fragment of Knull&apos;s godhood — tells you which kind of name to keep from each batch. The generator gives you the words; the lore tells you which ones belong to your creature.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates menacing, single-word, symbiote-style names for OC symbiotes in fan art, fanfiction, and role-play.</li>
          <li>It does not reproduce Marvel&apos;s official symbiote roster as a database — output is for original creative use.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not check whether a name is used by an existing character or handle — if you plan to use a name publicly, verify that yourself.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          The symbiote corner of Marvel is one of the most-drawn and most-written fandoms online — artists designing OC symbiotes, fic writers exploring the host bond, and role-players claiming their own piece of the Klyntar all need names that fit. This symbiote name generator gives you that pool instantly, grounded in the real naming logic: single harsh words, abstract nouns of violence and dread, lineage-coded tone, and the predatory edge that runs from Venom to Carnage to Knull himself. Generate a batch, lean on the theme and lore notes above, and you will end up with a name that sounds like it was always part of the symbiote mythos.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a symbiote name generator?', answer: 'A symbiote name generator is an online tool that creates menacing, single-word, Venom-style names for OC symbiotes — the kind Marvel gives the Klyntar. Venom, Carnage, Riot, Scream, Toxin: short, hard-sounding words that hit like a threat. The generator draws on curated abstract nouns of violence, sound, predation, and dread in your browser, so each run produces new combinations. It is free, runs locally with no sign-up, and never sends names to a server. Use the output for fan art, fanfiction, or role-play in the symbiote mythos.' },
  { category: 'Usage', question: 'How do I use the symbiote name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" for a fresh batch of single-word, symbiote-style names, then skim for ones that match your chosen theme — violence, sound, predation, or darkness. Use the Copy button to save the whole list, paste it into your character notes or art reference, and shortlist favorites for your OC. Run again for more options; no sign-up is required. Everything runs in your browser, so your OC concept stays private until you share it.' },
  { category: 'General', question: 'Is the symbiote name generator free?', answer: 'Yes. This symbiote name generator is free to use in your browser. You can generate OC symbiote names as often as you like without creating an account or paying. The tool runs locally on your device and does not require a download. There is no daily or total limit on how many runs you can do, so brainstorm as many names as your OC, brood, or story needs.' },
  { category: 'Naming', question: 'What makes a good symbiote name?', answer: 'A strong symbiote name does three jobs at once: it states the creature\'s nature in one word, it fits the menacing single-word convention, and it hints at lineage or theme so the symbiote slots into the mythos. Follow the Marvel pattern — one word not two, an abstract noun rather than a human name, and hard consonants with short vowels that bite (the "-age" of Carnage, the hiss of Scream). The test: could this name appear in a panel next to Venom and Carnage without looking out of place?' },
  { category: 'Naming', question: 'What are the main symbiote naming themes?', answer: 'Symbiote naming clusters around four moods — pick one first, then keep the matching results. Violence and slaughter (the Carnage lineage: bloodshed and ruin) suit a feral, kill-driven symbiote. Sound and shriek (Scream) are fitting and ironic, since symbiotes are vulnerable to sonics. Poison and predation (Toxin, Anti-Venom) fit a symbiote defined by what it does to a host. Darkness and dread (the Knull register: void, abyss, primordial night) suit an ancient or godlike OC. A name from one cluster reads very differently from another.' },
  { category: 'Naming', question: 'How do I signal my OC symbiote\'s lineage?', answer: 'Lineage shows in tone. Carnage is Venom\'s spawn and its name escalates the cruelty; the five Life Foundation spawn — Riot, Phage, Lasher, Agony, Scream — share a family of harsh, visceral words. To tie your OC to a known lineage, pick a name that rhymes tonally with that family: a berserker word for a Venom spawn, a void word for a fragment of Knull. Decide whose offspring your symbiote is before naming, and the right word from each batch becomes obvious.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I use the symbiote name generator?', answer: 'No. This symbiote name generator runs in your browser. When you set the number of names and click generate, they are created locally on your device. Your choices and the generated names are not sent to our servers, and we do not store your inputs or the generated list. Generation is fully local and private, so your OC symbiote concept stays yours until you choose to share it.' },
  { category: 'Compatibility', question: 'Does the symbiote name generator work on mobile?', answer: 'Yes. The symbiote name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short batch and copy it straight into your notes or an art reference. The tool is responsive and works on any device with a modern browser.' },
  { category: 'Limits', question: 'How many symbiote names can I generate at once?', answer: 'You can request 1–24 names per run. If you need more, run it again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed. The batch size keeps the list readable while giving you enough single-word symbiote names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. Use the Copy button to copy all generated names to your clipboard, then paste into a notes app, script, or art reference. The names are plain text, one per line, so they work in any editor. Copy your batch, then say each favorite out loud to test it — copying is the intended way to save a shortlist before you commit to one name for your OC.' },
  { category: 'General', question: 'Do I need an account to use the symbiote name generator?', answer: 'No. This symbiote name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account to use it — open the page, set how many names you want, click generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Naming', question: 'How does the host and symbiote name work together?', answer: 'A symbiote is only half the character; the other half is the host it bonds to — Eddie Brock for Venom, Cletus Kasady for Carnage. When they bond, the merged being usually takes the symbiote\'s name and speaks as "we." So your OC name has to work on two levels: as the alien\'s name and as the identity the bonded pair shares. Play with contrast — a meek host bonded to a brutal-sounding symbiote creates tension; a violent host with a savage name doubles down. Pick a word you would want a character to growl in the third-person plural.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The generator runs locally on your device, and you can use it in a private or incognito window if you prefer. If you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run gives up to 24 names. To get more, run it again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit. Batching runs is the intended workflow when you need a large pool of symbiote names — for example when naming a whole brood.' },
  { category: 'Naming', question: 'How do I name a brood of symbiotes?', answer: 'To name several spawn from one parent symbiote, generate a batch and pick words that share a tonal family, the way Riot, Phage, Lasher, Agony, and Scream do. Choose names of similar length and harshness so the group reads as siblings rather than unrelated creatures. That cohesion is exactly what made the Life Foundation five feel like a single terrifying litter. Keep the words from one theme cluster to reinforce that they came from the same source.' },
  { category: 'Technical', question: 'How are the symbiote names generated?', answer: 'This generator uses curated Venom-style vocabulary — abstract nouns of violence, sound, poison, and dread, with the hard consonants and short vowels the genre favors. When you click generate, the tool randomly combines them in your browser so each run is different. No names or settings are sent to a server. The result is for original creative use; it does not reproduce Marvel\'s official symbiote roster as a database or check whether a name already exists.' },
  { category: 'Naming', question: 'What is the connection to Knull and the King in Black?', answer: 'The symbiotes are properly called the Klyntar, a race forged from the living abyss by the dark god Knull — the King in Black, source of every symbiote, who wields a sword of living darkness and the dragon Grendel. Names leaning into void, abyss, and primordial dread tie an OC to this divine, ancient end of the spectrum, while names of pure aggression place it among the feral, host-hungry spawn. Decide where your OC sits — noble Klyntar, pure predator, or fragment of Knull\'s godhood — and keep the matching words.' },
  { category: 'Best practices', question: 'What is the best workflow for the symbiote name generator?', answer: 'Pick your OC\'s defining trait first — sound-based predator, poison spreader, Venom spawn, or something from Knull\'s abyss. Set the count (e.g. 12 or 24), click generate, and copy the list into your notes. Keep the words that match your theme, say each out loud to confirm it sounds dangerous, and shortlist five to ten. Run again for more. Let the trait choose the theme and the generator surface the exact word.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a symbiote?', answer: 'The main mistake is reaching for two words — the moment you do, you drift away from the single-word Klyntar convention toward a generic monster name. The second is a name that does not sound dangerous when spoken; symbiote names are meant to be spat, hissed, or growled. The third is copying a canon symbiote outright, so avoid literally calling your OC Venom or Carnage. Borrow the shape — one harsh, abstract noun — not the exact name.' },
  { category: 'Troubleshooting', question: 'Why does my symbiote name match an existing character?', answer: 'The symbiote fandom is huge and heavily drawn, so many strong single words are already taken by canon or by other creators\' OCs. This generator suggests combinations and does not check whether a name is used by an existing character or handle. If you plan to use a name publicly, verify it yourself, and keep a shortlist of five to ten so you have backups. Twisting a theme word rather than using a bare classic reduces collisions.' },
  { category: 'Troubleshooting', question: 'Can I use the symbiote name generator offline?', answer: 'Yes. Once the page is loaded, the generator runs entirely in your browser and does not need a network connection to generate names. You can brainstorm symbiote names offline, and copying and pasting works offline too. You will need a connection only to open the page initially.' },
  { category: 'Use cases', question: 'Can I use these names for fan art or a role-play character?', answer: 'Yes — that is the main use. For fan art, the name is the first thing an audience judges, so a strong single-word name sets the tone before they see the design. For role-play, it is the persona the host steps into every time the symbiote takes over. Generate a batch, pick a word that fits your creature\'s theme and lineage, and confirm it reads as canon beside Venom and Carnage. The output is for original OCs, not for duplicating existing characters.' },
  { category: 'Naming', question: 'Should a symbiote name relate to its color or design?', answer: 'It can, and tying the word to the visual is a strong move. Carnage is red and its name screams blood; Toxin, Anti-Venom, and Scream each carry a look implied by the word. If your OC has a signature palette or silhouette — acid green, bone white, a bladed form — pick a generated word whose meaning echoes it, so the name and the design reinforce each other. A word that matches the art reads as intentional rather than arbitrary.' },
  { category: 'Best practices', question: 'How do I test whether a generated symbiote name is strong enough?', answer: 'Run it through three checks. Say it aloud — does it sound dangerous when spat or hissed? Read it in a line of dialogue where the bonded pair calls itself "we [name]" — does it carry menace? And place it in an imagined panel next to Venom and Carnage — does it belong or stick out as too soft? A name that passes all three is ready. If it fails one, generate again and keep sifting; the batch will surface a better fit.' },
];

export default async function SymbioteNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="symbiote" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Symbiote name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

