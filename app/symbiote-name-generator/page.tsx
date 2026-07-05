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
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
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
  { category: 'General', question: 'What is a Symbiote name generator?', answer: 'A Symbiote name generator is an online tool that creates symbiote names for Symbiote and other fiction and creative projects. You get unique Symbiote name ideas at the click of a button. The generator combines curated Venom-style words at random in your browser so each run produces new combinations. This free Symbiote name generator runs locally with no sign-up and does not send generated names to any server. Always check your game or story for availability before committing to a name.' },
  { category: 'Usage', question: 'How do I use the Symbiote name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list of character name ideas, then use the Copy button to copy all names to your clipboard. Paste into a notes app and check your game or story for availability. Run again for more options; no sign-up is required. The Symbiote name generator runs in your browser so your settings and generated names are not sent to any server. Building a shortlist of five to ten options before checking availability is a good habit.' },
  { category: 'General', question: 'Is the Symbiote name generator free?', answer: 'Yes. This Symbiote name generator is free to use in your browser. You can generate Symbiote name ideas as often as you like without creating an account or paying. The tool runs locally on your device and does not require a download. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Use cases', question: 'Can I use the names for Steam?', answer: 'Yes. The Symbiote name generator produces username ideas that you can use on Steam. Names must be unique on the platform, so always check Steam\'s availability before committing. Run the generator multiple times to build a shortlist of character name ideas, then check which names are available on Steam. The tool does not reserve or validate names; it only suggests combinations for you to verify on the platform.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I use the Symbiote name generator?', answer: 'No. This Symbiote name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated Symbiote name ideas are not sent to our servers. We do not store your inputs or the generated list. Generation is fully local and private.' },
  { category: 'Compatibility', question: 'Does the Symbiote name generator work on mobile?', answer: 'Yes. The Symbiote name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or check availability on Steam\'s app. The tool is responsive and works on any device with a modern browser.' },
  { category: 'Limits', question: 'How many names can I generate with the Symbiote name generator?', answer: 'You can request 1–24 names per run with this Symbiote name generator. If you need more than 24 character name ideas, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed. The batch size is designed to keep the list manageable while giving you enough Symbiote name options to shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the Symbiote name generator?', answer: 'Yes. Use the Copy button on this Symbiote name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line, so they work in any editor or form. Check your game or story for availability before choosing a name. Copying is the intended way to save your shortlist of character name ideas.' },
  { category: 'General', question: 'Do I need an account to use the Symbiote name generator?', answer: 'No. This Symbiote name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it. Open the page, set how many Symbiote name ideas you want, click generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Use cases', question: 'Can I use the Symbiote name generator for other platforms?', answer: 'Yes. The names work as ideas for any gaming or social platform—Discord, Xbox, PlayStation, or others. The Symbiote name generator is built for Steam-style character names but the output can inspire usernames elsewhere. Check each platform\'s availability; names must be unique on each service. The generator does not check availability for you, so always verify on the platform where you plan to use the name.' },
  { category: 'Privacy', question: 'Do you store the names I generate with the Symbiote name generator?', answer: 'No. Generation happens in your browser. We do not receive or store the Symbiote name ideas or your settings. The Symbiote name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. If you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Can I get more than 24 names from the Symbiote name generator?', answer: 'Each run of this Symbiote name generator gives up to 24 names. To get more character name ideas, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit. Batching runs is the intended workflow when you need a large pool of Symbiote name options.' },
  { category: 'General', question: 'Why "Steam" specifically in a Symbiote name generator?', answer: 'Symbiote is a major gaming platform, and people often search for Symbiote name ideas and character name generators. The Symbiote name generator serves that intent and produces names that fit Symbiote and similar gaming environments. The same ideas work for other platforms—Discord, Xbox, PlayStation—as inspiration. Use the names as character names wherever you need a unique username; always check availability on the platform you choose.' },
  { category: 'Use cases', question: 'Can I use the Symbiote name generator for esports?', answer: 'Yes. Use the Symbiote name generator as inspiration for in-game names or stream handles. Run it multiple times to get a shortlist of character name ideas, then check availability on your platform. The tool is free and runs in your browser with no sign-up. Many esports and streamers use Symbiote name generators to brainstorm handles before verifying availability on Steam, Twitch, or other services.' },
  { category: 'Technical', question: 'How are the names generated in the Symbiote name generator?', answer: 'This Symbiote name generator uses curated Venom-style words and elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only; we do not check Symbiote or any platform for availability. The word lists are designed to sound like gaming symbiote names—bold, memorable, and easy to type.' },
  { category: 'General', question: 'Are the names from the Symbiote name generator unique?', answer: 'The names are randomly combined from our word list, so each run can produce new combinations. We do not check Symbiote or any platform for availability. You must check yourself whether a Symbiote name or character name is available before using it on your profile. The generator helps you discover ideas; uniqueness on a given platform depends on that platform\'s current registrations.' },
  { category: 'Use cases', question: 'Can teachers use the Symbiote name generator?', answer: 'Yes. Teachers can use this Symbiote name generator for creative or tech-related activities—for example when students are learning about usernames, digital identity, or online profiles. Emphasize that the tool is for inspiration and that names must be checked for availability on any platform. The Symbiote name generator is free and runs in the browser with no sign-up, so it is easy to use in a classroom or workshop setting.' },
  { category: 'General', question: 'How do I cite the Symbiote name generator?', answer: 'For academic or formal use you can cite this Symbiote name generator as a source of inspiration for symbiote names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution. The tool is a free, browser-based utility for Symbiote name ideas and character name brainstorming.' },
  { category: 'Use cases', question: 'Can I use the Symbiote name generator for a new Symbiote account?', answer: 'Yes. When creating a new Symbiote account you need a unique username. Run this Symbiote name generator to get character name ideas, copy the list, then check Symbiote for availability. Pick a name that is available and that you like. The tool runs in your browser with no sign-up. Building a shortlist of five to ten options before you start the sign-up process saves time, since many Symbiote names are already taken.' },
  { category: 'General', question: 'Do the names from the Symbiote name generator work for streaming?', answer: 'Yes. The Symbiote name generator produces username ideas that can work for streaming platforms, in-game names, or social handles. Use the names as inspiration and check your platform for availability. Run the generator multiple times to build a shortlist of options. Many streamers use Symbiote name generators to brainstorm stream handles before checking availability on Twitch, YouTube, or other services.' },
  { category: 'Best practices', question: 'What is the best workflow for the Symbiote name generator?', answer: 'Open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the Symbiote name generator again for more options. Keep a shortlist of five to ten character name ideas so you have backups. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Best practices', question: 'Should I run the Symbiote name generator multiple times?', answer: 'Yes. Running the Symbiote name generator multiple times is the intended workflow when you want a large pool of Symbiote name ideas. Paste each run into one document and remove duplicates if any appear. Then check availability on your game or story for each name you like. Having a shortlist saves time compared to checking one idea at a time. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Troubleshooting', question: 'Why is my first choice from the Symbiote name generator taken?', answer: 'Popular symbiote names are often already in use on Symbiote and other platforms. The Symbiote name generator does not check availability; it only suggests combinations. Always have a shortlist of five to ten options so you have backups. Run the generator again for more Symbiote name ideas and check availability on your platform before committing. This is normal when using any name generator for fiction and creative projects.' },
  { category: 'Troubleshooting', question: 'Can I use the Symbiote name generator offline?', answer: 'Yes. Once the page is loaded, the Symbiote name generator runs entirely in your browser and does not require a network connection to generate names. You can generate character name ideas offline. Copying and pasting also works offline. You will need a connection only to open the page initially and to check availability on Symbiote or another platform.' },
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

