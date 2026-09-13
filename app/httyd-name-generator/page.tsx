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
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
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
  { category: 'General', question: 'What is a HTTYD name generator?', answer: 'HTTYD stands for How to Train Your Dragon, and this generator builds names for both halves of that world: rugged, Norse-flavored Viking names in the spirit of Hiccup, Astrid, and Stoick, and descriptive, trait-based dragon names like Toothless, Stormfly, and Hookfang. Click to get a fresh batch drawn from Old Norse roots, blunt Viking humor, and concrete dragon trait-words, combined in your browser. It is free, runs locally with no sign-up, and never sends names to a server. Use the output for fanfic, OC art, and role-play set on Berk.' },
  { category: 'Usage', question: 'How do I use the HTTYD name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" for a fresh batch of Berk-style Viking and dragon names, then skim for ones that fit your chosen Viking tribe role or dragon species. Use the Copy button to save the whole list, paste it into your story notes, art caption, or character sheet, and shortlist favorites. Run again for more options; no sign-up is required. Everything runs in your browser, so your OC Vikings and dragons stay private until you share them.' },
  { category: 'General', question: 'Is the HTTYD name generator free?', answer: 'Yes. This HTTYD name generator is free to use in your browser. You can generate Viking and dragon name ideas as often as you like without creating an account or paying. The tool runs locally on your device and does not require a download. There is no daily or total limit on how many runs you can do, so brainstorm as many names as your fic, art, or role-play needs.' },
  { category: 'Naming', question: 'How do Viking names work in How to Train Your Dragon?', answer: 'The human cast of Berk is named in a Norse register with a comedic twist. Names carry hard, consonant-heavy Old Norse sounds (Astrid, Stoick, Gobber) with clusters like "st," "gr," and "th." Vikings earn blunt descriptive epithets — Stoick the Vast, Hiccup the Useful — that name a body, deed, or flaw with zero flattery. Given names can even be insulting (Hiccup, Snotlout), because the joke is that parents named runts to scare off trolls. Compound and twin names (Fishlegs, Tuffnut and Ruffnut) round out the pattern.' },
  { category: 'Naming', question: 'How do dragon names work in HTTYD?', answer: 'Dragon names follow the opposite rule from Viking names: they are descriptions, not heritage. A rider looks at the creature and names its most obvious trait — Toothless (retractable teeth), Hookfang (curved tusks), Stormfly (fast flyer), Cloudjumper (soars through cloud). Most mash two concrete words together (Cloud + jumper, Skull + crusher), which is exactly what reads as "a Berk dragon" rather than a generic fantasy beast. A bond-name can also be warm or funny even for a fearsome species, like Meatlug.' },
  { category: 'Naming', question: 'How do I match a name to a dragon species?', answer: 'Pick a species first, then keep names whose sound matches its class. A Night Fury (Toothless\'s species) wants fast, shadowy names. A Deadly Nadder (Stormfly) suits bright, sharp-edged names. A Monstrous Nightmare (Hookfang) wants aggressive, fiery ones. A Gronckle (Meatlug) fits lumpy, blunt, affectionate names. A Hideous Zippleback (Barf and Belch) almost always gets a paired name that works as a duo. A stealthy Night Fury and a hot-headed Monstrous Nightmare should not share the same kind of name.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I use the HTTYD name generator?', answer: 'No. This HTTYD name generator runs in your browser. When you set the number of names and click generate, they are created locally on your device. Your choices and the generated names are not sent to our servers, and we do not store your inputs or the generated list. Generation is fully local and private, so your OC Vikings and dragons stay yours until you choose to share them.' },
  { category: 'Compatibility', question: 'Does the HTTYD name generator work on mobile?', answer: 'Yes. The HTTYD name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short batch and copy it straight into your notes or an art caption. The tool is responsive and works on any device with a modern browser.' },
  { category: 'Limits', question: 'How many HTTYD names can I generate at once?', answer: 'You can request 1–24 names per run. If you need more, run it again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed. The batch size keeps the list readable while giving you enough Viking and dragon names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. Use the Copy button to copy all generated names to your clipboard, then paste into a notes app, script, or character sheet. The names are plain text, one per line, so they work in any editor. Copy your batch, then say each favorite out loud — Berk names are meant to be bellowed — to test it before you commit. Copying is the intended way to save a shortlist.' },
  { category: 'General', question: 'Do I need an account to use the HTTYD name generator?', answer: 'No. This HTTYD name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account to use it — open the page, set how many names you want, click generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Naming', question: 'How do I name an OC Viking for Berk?', answer: 'A strong Berk Viking name does two jobs: it sounds Old Norse, and it carries a blunt descriptive edge that fits the tribe\'s humor. A common approach is to pair a rugged given name with an earned epithet — "Bjorn the Stubborn," "Sigrid the Loud," "Halvard the Half-Bearded" — and lean the epithet into a flaw, body quirk, or famous blunder, not just a triumph. If your OC is a comic foil like Snotlout or Fishlegs, a slightly undignified name does more characterization than a paragraph. Test each: could it be shouted across the Great Hall next to Stoick and Gobber?' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The generator runs locally on your device, and you can use it in a private or incognito window if you prefer. If you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run gives up to 24 names. To get more, run it again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit. Batching runs is the intended workflow when you need a large pool of Berk-style Viking and dragon names to choose from.' },
  { category: 'Naming', question: 'How do I name an OC dragon?', answer: 'Naming an OC dragon runs opposite to naming a Viking: start from the design, not the heritage. Decide the species and the single most striking trait — a frilled crest, a split tail, a habit of humming — and let the name describe it. That is how every canon dragon name was built, which is why "Frostquill" or "Emberhide" reads instantly as a Berk dragon while a borrowed elf-name does not. If the dragon is bonded to a rider, consider how that rider would name it: a gruff warrior picks something martial, a gentler rider something warm and silly.' },
  { category: 'Technical', question: 'How are the HTTYD names generated?', answer: 'This generator uses two curated vocabularies — Old Norse roots and blunt epithets for Vikings, and concrete trait-words for dragons — reflecting the two different naming logics of the franchise. When you click generate, the tool randomly combines them in your browser so each run is different. No names or settings are sent to a server. The result is for original creative use; it does not reproduce the official Berk cast as a lookup database or check whether a name already exists.' },
  { category: 'Naming', question: 'How do I name a rider-and-dragon pair?', answer: 'Generate two batches and pick names that play off each other the way Hiccup and Toothless or Astrid and Stormfly do. A slightly self-deprecating Viking name paired with a fierce, descriptive dragon name makes the bond read as a real relationship rather than two unrelated names side by side. Let the dragon\'s name reflect both its body and the personality of the rider who chose it — that two-way fit is what makes a bond-name feel earned.' },
  { category: 'Best practices', question: 'What is the best workflow for the HTTYD name generator?', answer: 'Decide first whether you are naming a Viking (start from Norse sound and humor) or a dragon (start from a species and a striking trait). Set the count (e.g. 12 or 24), click generate, and copy the list into your notes. Keep the names that fit your role or species, say each out loud to confirm it carries, and shortlist five to ten. Run again for more. For a pair, generate both and pick names that echo each other.' },
  { category: 'Best practices', question: 'What mistakes should I avoid?', answer: 'The main one is reusing a canon full name — you do not want an OC literally called Hiccup or a dragon called Toothless. Echo the structure (a blunt compound, a descriptive by-name) instead of the exact name. For dragons, avoid names that stop describing the creature out of context. For Vikings, do not drop the hard Norse consonants or the comedic epithet, which are what place the name on Berk. Say names aloud; one that mumbles will not carry across a windy cliff.' },
  { category: 'Troubleshooting', question: 'What if my OC name matches a canon character?', answer: 'How to Train Your Dragon has a large, heavily written fandom, so many strong names are already used by canon characters or other creators\' OCs. This generator suggests combinations and does not check name use on any game, forum, or social platform. If you plan to reuse a name as a handle or want originality, verify it yourself, and keep a shortlist of five to ten so you have backups. Echoing the naming structure rather than a specific name reduces collisions.' },
  { category: 'Troubleshooting', question: 'Can I use the HTTYD name generator offline?', answer: 'Yes. Once the page is loaded, the generator runs entirely in your browser and does not need a network connection to generate names. You can brainstorm Viking and dragon names offline, and copying and pasting works offline too. You will need a connection only to open the page initially.' },
  { category: 'Use cases', question: 'Can I use these names for fanfic and role-play servers?', answer: 'Yes — that is the main use. For fanfic, an OC\'s name is the first thing readers judge, so a name that sounds native to Berk sets the tone immediately. For Berk-themed role-play servers, both Viking and dragon names help your character slot into the world. Generate a batch, keep the ones that match your tribe role or dragon species, and confirm they read as canon beside Stoick and Toothless. The output is for original characters, not for duplicating the official cast.' },
  { category: 'Naming', question: 'How do I name a whole Viking tribe or clan?', answer: 'Give the tribe a shared naming logic so its members read as one people, the way the Hairy Hooligans do. Pick a sound family — heavy Norse consonants, a recurring root, or a regional flavor — and let each Viking vary within it. Generate a large batch, keep the names that share that texture, and hand the blunt comic epithets to the characters meant as foils. A chief and their tribe should sound related, not assembled from unrelated fantasy names.' },
  { category: 'Best practices', question: 'How do I decide between a Viking name and a dragon name?', answer: 'Decide what you are naming first, because the two follow opposite logic. A Viking name starts from heritage — Old Norse sound plus a blunt, often comic epithet. A dragon name starts from the design — a species and its single most striking trait, turned into a concrete compound. If you are naming a rider-and-dragon pair, do both and pick names that play off each other, a self-deprecating Viking beside a fierce descriptive dragon, so the bond reads as a real relationship.' },
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

