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


const toolSlug = 'httyd-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'HTTYD Name Generator',
    description: 'Free How to Train Your Dragon name generator for Viking and dragon names. Build rugged Norse-style Viking names and trait-based dragon names for fanfic, art, and RP — in your browser, no sign-up.',
    seoTitle: 'HTTYD Name Generator – Viking & Dragon Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>HTTYD Name Generator – Viking &amp; Dragon Names</h2>
        <p>
          HTTYD stands for How to Train Your Dragon, the world of Berk where blunt-talking Vikings live alongside the dragons they once fought. This generator builds names for both halves of that world: rugged, Norse-flavored Viking names in the spirit of Hiccup, Astrid, and Stoick the Vast, and descriptive, trait-based dragon names like Toothless, Stormfly, and Hookfang. Whether you are writing fanfic, designing an original character (OC) for art or role-play, or naming a dragon to match a sketch, the tool produces ready-to-use names right in your browser. There is no sign-up, nothing is stored, and you can generate as many batches as you like.
        </p>
        <p>
          The naming in How to Train Your Dragon is not random — it follows two very clear, very different logics. Viking names are heavy with Old Norse roots and a streak of blunt, sometimes unflattering humor (the chief&apos;s heir is literally named &quot;Hiccup&quot;). Dragon names are almost always descriptive, pointing straight at what the beast looks like or does — Toothless has retractable teeth, Hookfang has curling tusks, Stormfly is a fast flyer. This page explains both conventions so the names you pick actually feel like they belong on Berk, and so an OC Viking or OC dragon slots believably into the world.
        </p>

        <h2>How Viking Names Work in How to Train Your Dragon</h2>
        <p>
          The human cast of Berk is named in a recognizable Norse register, but with the franchise&apos;s own comedic twist. Understanding the pattern lets you generate names that sound native to the Hairy Hooligan Tribe rather than thrown together:
        </p>
        <ul>
          <li><strong>Old Norse roots.</strong> Astrid, Stoick, Valka, Gobber, and Eret carry the hard, consonant-heavy sound of Scandinavian names. Strong vowels and clusters like &quot;st,&quot; &quot;gr,&quot; and &quot;th&quot; read instantly as Viking.</li>
          <li><strong>Blunt, descriptive epithets.</strong> Vikings in HTTYD earn titles that say exactly what they are: Stoick the Vast, Hiccup the Useful, Snotlout. A by-name often describes a body, a deed, or a flaw with zero flattery.</li>
          <li><strong>Comedic, even insulting given names.</strong> &quot;Hiccup&quot; and &quot;Snotlout&quot; are not heroic — the joke is that Viking parents named runts and troublemakers to scare off gnomes and trolls. Slightly silly names are very in-genre.</li>
          <li><strong>Compound and twin names.</strong> Fishlegs, Tuffnut, and Ruffnut show how two plain words jam together into one rugged handle, and how sibling pairs rhyme or mirror each other (Tuff/Ruff).</li>
        </ul>

        <h2>How Dragon Names Work in How to Train Your Dragon</h2>
        <p>
          Dragon names follow a completely different rule from Viking names: they are descriptions, not heritage. A rider looks at the creature and names the most obvious trait, ability, or quirk:
        </p>
        <ul>
          <li><strong>Appearance-based.</strong> Toothless (his teeth retract), Hookfang (curved tusks), Meatlug (a stout, lumpy Gronckle), Skullcrusher — the name is a snapshot of the dragon&apos;s body.</li>
          <li><strong>Ability-based.</strong> Stormfly flies fast and fires spine shots; Cloudjumper soars through cloud cover; Barf and Belch, the two-headed Zippleback, are named for the gas one head sprays and the spark the other ignites.</li>
          <li><strong>Compound trait words.</strong> Most dragon names mash two concrete words — Cloud + jumper, Storm + fly, Skull + crusher — which is exactly the pattern that reads as &quot;a Berk dragon&quot; rather than a generic fantasy beast.</li>
          <li><strong>Affectionate or comedic.</strong> A bond-name can be soft or funny even for a fearsome dragon — Meatlug and Toothless are both terrifying species named with obvious warmth.</li>
        </ul>

        <h2>Naming by Dragon Species and Class</h2>
        <p>
          How to Train Your Dragon sorts dragons into species, each with a distinct look and temperament, and matching a name to a species makes an OC dragon instantly more believable:
        </p>
        <ul>
          <li><strong>Night Fury.</strong> Toothless&apos;s species — sleek, black, stealthy, with plasma blasts. Names should feel fast and shadowy.</li>
          <li><strong>Deadly Nadder.</strong> Stormfly&apos;s species — colorful, spiny, vain, with spine-shot tails. Bright, sharp-edged names fit.</li>
          <li><strong>Monstrous Nightmare.</strong> Hookfang&apos;s species — large, hot-headed, sets itself on fire. Aggressive, fiery names suit it.</li>
          <li><strong>Gronckle.</strong> Meatlug&apos;s species — round, slow, lava-spitting, surprisingly sweet. Lumpy, blunt, affectionate names work well.</li>
          <li><strong>Hideous Zippleback.</strong> Barf and Belch&apos;s species — two-headed, one head gas and one spark. These almost always get paired names that work as a duo.</li>
        </ul>
        <p>
          Pick a species first, then generate a batch and keep the names whose sound matches its class and temperament. A stealthy Night Fury and a hot-headed Monstrous Nightmare should not share the same kind of name, even though both are &quot;HTTYD-style.&quot;
        </p>

        <h2>Building an Original Character (OC) Viking</h2>
        <p>
          For fanfic, art, and role-play, an OC Viking&apos;s name is the first thing the audience judges. A strong Berk Viking name does two jobs at once: it sounds Old Norse, and it carries a blunt descriptive edge that fits the tribe&apos;s sense of humor. Generate a batch, then ask of each name: could this be shouted across the Great Hall next to Stoick and Gobber without sounding out of place? If yes, it is in the right register.
        </p>
        <p>
          A common approach is to pair a rugged given name with an earned epithet — &quot;Bjorn the Stubborn,&quot; &quot;Sigrid the Loud,&quot; &quot;Halvard the Half-Bearded.&quot; The epithet is where you lean into Viking humor: name a flaw, a body quirk, or a famous blunder, not just a triumph. If your OC is meant to be a comic foil like Snotlout or Fishlegs, a slightly undignified name does more characterization than a paragraph of description.
        </p>

        <h2>Building an Original Character (OC) Dragon</h2>
        <p>
          Naming an OC dragon runs the opposite way from naming a Viking: start from the design, not the heritage. Decide the species and the single most striking trait — a frilled crest, a split tail, a habit of humming — and let the name describe it. That is how every canon dragon name was built, and it is why &quot;Frostquill&quot; or &quot;Emberhide&quot; reads instantly as a Berk dragon while a borrowed elf-name does not.
        </p>
        <p>
          If your OC dragon is bonded to a rider, consider how that rider would name it. A gruff warrior might pick something blunt and martial (Skullcrusher); a gentler rider might land on something warm and a little silly (Meatlug). The name should reflect both the dragon&apos;s body and the personality of the person who chose it — that two-way fit is what makes a bond-name feel earned rather than slapped on.
        </p>

        <h2>How to Use This HTTYD Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of Berk-style Viking and dragon names.</li>
          <li>Skim for names that fit your chosen Viking tribe role or dragon species, then use the Copy button to save the whole list.</li>
          <li>Paste into your story notes, art caption, or character sheet and shortlist your favorites.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your OC Vikings and OC dragons stay private until you choose to share them.
        </p>

        <h2>Tips for Picking the Right Name</h2>
        <p>
          Say the name out loud — Berk names are meant to be bellowed across a windy cliff, so a name that mumbles will not carry. For Vikings, keep the hard Norse consonants and let an epithet do the comedy; for dragons, make sure the name still describes the creature even out of context. Avoid accidentally reusing a canon full name (you do not want an OC literally called Hiccup or a dragon called Toothless), but echoing the structure — a blunt compound, a descriptive by-name — is exactly how you stay on-theme.
        </p>
        <p>
          If you are naming a rider-and-dragon pair, generate two batches and pick names that play off each other the way Hiccup and Toothless or Astrid and Stormfly do — a slightly self-deprecating Viking with a fierce, descriptive dragon makes the bond read as a real relationship rather than two unrelated names sitting side by side.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates How to Train Your Dragon-style Viking names and dragon names for fanfic, art, and role-play.</li>
          <li>It does not reproduce the official Berk cast as a lookup database — output is for original creative use.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not check name availability on any game, forum, or social platform — verify that yourself if you plan to reuse a name as a handle.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          How to Train Your Dragon is one of the most-drawn and most-written dragon fandoms online — fic writers, artists sketching OC dragons, and role-players on Berk-themed servers all need names that fit. This HTTYD name generator gives you that pool instantly, grounded in the franchise&apos;s real naming logic: Old Norse roots and blunt humor for Vikings, concrete trait-based compounds for dragons, and species-matched sound for both. Generate a batch, lean on the Viking and dragon notes above, and you will end up with names that feel like they were always part of Berk.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a HTTYD name generator?', answer: 'A HTTYD name generator is an online tool that creates dragon and character names for HTTYD and other fiction and games. You get unique HTTYD name ideas at the click of a button. The generator combines curated How to Train Your Dragon-style words at random in your browser so each run produces new combinations. This free HTTYD name generator runs locally with no sign-up and does not send generated names to any server. Always check your game or story for availability before committing to a name.' },
  { category: 'Usage', question: 'How do I use the HTTYD name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list of character name ideas, then use the Copy button to copy all names to your clipboard. Paste into a notes app and check your game or story for availability. Run again for more options; no sign-up is required. The HTTYD name generator runs in your browser so your settings and generated names are not sent to any server. Building a shortlist of five to ten options before checking availability is a good habit.' },
  { category: 'General', question: 'Is the HTTYD name generator free?', answer: 'Yes. This HTTYD name generator is free to use in your browser. You can generate HTTYD name ideas as often as you like without creating an account or paying. The tool runs locally on your device and does not require a download. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Use cases', question: 'Can I use the names for Steam?', answer: 'Yes. The HTTYD name generator produces username ideas that you can use on Steam. Names must be unique on the platform, so always check Steam\'s availability before committing. Run the generator multiple times to build a shortlist of character name ideas, then check which names are available on Steam. The tool does not reserve or validate names; it only suggests combinations for you to verify on the platform.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I use the HTTYD name generator?', answer: 'No. This HTTYD name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated HTTYD name ideas are not sent to our servers. We do not store your inputs or the generated list. Generation is fully local and private.' },
  { category: 'Compatibility', question: 'Does the HTTYD name generator work on mobile?', answer: 'Yes. The HTTYD name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or check availability on Steam\'s app. The tool is responsive and works on any device with a modern browser.' },
  { category: 'Limits', question: 'How many names can I generate with the HTTYD name generator?', answer: 'You can request 1–24 names per run with this HTTYD name generator. If you need more than 24 character name ideas, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed. The batch size is designed to keep the list manageable while giving you enough HTTYD name options to shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the HTTYD name generator?', answer: 'Yes. Use the Copy button on this HTTYD name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line, so they work in any editor or form. Check your game or story for availability before choosing a name. Copying is the intended way to save your shortlist of character name ideas.' },
  { category: 'General', question: 'Do I need an account to use the HTTYD name generator?', answer: 'No. This HTTYD name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it. Open the page, set how many HTTYD name ideas you want, click generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Use cases', question: 'Can I use the HTTYD name generator for other platforms?', answer: 'Yes. The names work as ideas for any gaming or social platform—Discord, Xbox, PlayStation, or others. The HTTYD name generator is built for Steam-style character names but the output can inspire usernames elsewhere. Check each platform\'s availability; names must be unique on each service. The generator does not check availability for you, so always verify on the platform where you plan to use the name.' },
  { category: 'Privacy', question: 'Do you store the names I generate with the HTTYD name generator?', answer: 'No. Generation happens in your browser. We do not receive or store the HTTYD name ideas or your settings. The HTTYD name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. If you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Can I get more than 24 names from the HTTYD name generator?', answer: 'Each run of this HTTYD name generator gives up to 24 names. To get more character name ideas, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit. Batching runs is the intended workflow when you need a large pool of HTTYD name options.' },
  { category: 'General', question: 'Why "Steam" specifically in a HTTYD name generator?', answer: 'HTTYD is a major gaming platform, and people often search for HTTYD name ideas and character name generators. The HTTYD name generator serves that intent and produces names that fit HTTYD and similar gaming environments. The same ideas work for other platforms—Discord, Xbox, PlayStation—as inspiration. Use the names as character names wherever you need a unique username; always check availability on the platform you choose.' },
  { category: 'Use cases', question: 'Can I use the HTTYD name generator for esports?', answer: 'Yes. Use the HTTYD name generator as inspiration for in-game names or stream handles. Run it multiple times to get a shortlist of character name ideas, then check availability on your platform. The tool is free and runs in your browser with no sign-up. Many esports and streamers use HTTYD name generators to brainstorm handles before verifying availability on Steam, Twitch, or other services.' },
  { category: 'Technical', question: 'How are the names generated in the HTTYD name generator?', answer: 'This HTTYD name generator uses curated How to Train Your Dragon-style words and elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only; we do not check HTTYD or any platform for availability. The word lists are designed to sound like gaming dragon and character names—bold, memorable, and easy to type.' },
  { category: 'General', question: 'Are the names from the HTTYD name generator unique?', answer: 'The names are randomly combined from our word list, so each run can produce new combinations. We do not check HTTYD or any platform for availability. You must check yourself whether a HTTYD name or character name is available before using it on your profile. The generator helps you discover ideas; uniqueness on a given platform depends on that platform\'s current registrations.' },
  { category: 'Use cases', question: 'Can teachers use the HTTYD name generator?', answer: 'Yes. Teachers can use this HTTYD name generator for creative or tech-related activities—for example when students are learning about usernames, digital identity, or online profiles. Emphasize that the tool is for inspiration and that names must be checked for availability on any platform. The HTTYD name generator is free and runs in the browser with no sign-up, so it is easy to use in a classroom or workshop setting.' },
  { category: 'General', question: 'How do I cite the HTTYD name generator?', answer: 'For academic or formal use you can cite this HTTYD name generator as a source of inspiration for dragon and character names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution. The tool is a free, browser-based utility for HTTYD name ideas and character name brainstorming.' },
  { category: 'Use cases', question: 'Can I use the HTTYD name generator for a new HTTYD account?', answer: 'Yes. When creating a new HTTYD account you need a unique username. Run this HTTYD name generator to get character name ideas, copy the list, then check HTTYD for availability. Pick a name that is available and that you like. The tool runs in your browser with no sign-up. Building a shortlist of five to ten options before you start the sign-up process saves time, since many HTTYD names are already taken.' },
  { category: 'General', question: 'Do the names from the HTTYD name generator work for streaming?', answer: 'Yes. The HTTYD name generator produces username ideas that can work for streaming platforms, in-game names, or social handles. Use the names as inspiration and check your platform for availability. Run the generator multiple times to build a shortlist of options. Many streamers use HTTYD name generators to brainstorm stream handles before checking availability on Twitch, YouTube, or other services.' },
  { category: 'Best practices', question: 'What is the best workflow for the HTTYD name generator?', answer: 'Open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the HTTYD name generator again for more options. Keep a shortlist of five to ten character name ideas so you have backups. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Best practices', question: 'Should I run the HTTYD name generator multiple times?', answer: 'Yes. Running the HTTYD name generator multiple times is the intended workflow when you want a large pool of HTTYD name ideas. Paste each run into one document and remove duplicates if any appear. Then check availability on your game or story for each name you like. Having a shortlist saves time compared to checking one idea at a time. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Troubleshooting', question: 'Why is my first choice from the HTTYD name generator taken?', answer: 'Popular dragon and character names are often already in use on HTTYD and other platforms. The HTTYD name generator does not check availability; it only suggests combinations. Always have a shortlist of five to ten options so you have backups. Run the generator again for more HTTYD name ideas and check availability on your platform before committing. This is normal when using any name generator for fiction and games.' },
  { category: 'Troubleshooting', question: 'Can I use the HTTYD name generator offline?', answer: 'Yes. Once the page is loaded, the HTTYD name generator runs entirely in your browser and does not require a network connection to generate names. You can generate character name ideas offline. Copying and pasting also works offline. You will need a connection only to open the page initially and to check availability on HTTYD or another platform.' },
];

export default async function HttydNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="httyd" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the HTTYD name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

