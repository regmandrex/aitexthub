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
    description: 'Free How to Train Your Dragon name generator for dragon and Viking monikers. Craft trait-based dragon names and sturdy Norse-style Viking titles for RP, art, and fanfic directly inside your browser without registering.',
    seoTitle: 'HTTYD Name Generator – Viking & Dragon Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>HTTYD Name Generator – Viking &amp; Dragon Names</h2>
        <p>HTTYD stands for How to Train Your Dragon, the realm of Berk where blunt Vikings dwell alongside dragons they once fought. This generator creates monikers for both sides of that universe: rugged Norse Viking names reminiscent of Stoick the Vast, Astrid, and Hiccup, alongside descriptive dragon titles like Hookfang, Stormfly, and Toothless. Whether you craft an original character for role-play or art, write fan fiction, or name a beast to match a drawing, the utility delivers instant browser-ready names. No registration is required, nothing gets saved, and you can produce endless batches.</p>
        <p>How to Train Your Dragon naming conventions avoid randomness, adhering to two distinct and clear logics. Viking labels carry heavy Old Norse roots coupled with blunt, occasionally unflattering humor (the chief's heir bears the literal name Hiccup). Meanwhile, dragon tags are consistently descriptive, highlighting exactly what the creature does or looks like—Toothless features retractable claws, Hookfang displays curling tusks, and Stormfly excels at fast flight. This section clarifies both traditions so your selected names feel genuinely native to Berk, allowing your dragon or Viking OC to fit smoothly into the universe.</p>

        <h2>How Viking Monikers Function in How to Train Your Dragon</h2>
        <p>Berk human residents receive names within a recognizable Norse register, blended with the franchise's unique comedic flair. Grasping this structure enables you to produce titles sounding natural to the Hairy Hooligan Tribe rather than randomly assembled:</p>
        <ul>
          <li><strong>Old Norse roots.</strong> Valka, Astrid, Stoick, Eret, and Gobber display the consonant-heavy, harsh cadence typical of Scandinavian names. Strong vowel pairings and clusters like &quot;th,&quot; &quot;gr,&quot; and &quot;st&quot; instantly read as authentic Viking.</li>
          <li><strong>Blunt, descriptive epithets.</strong> Clan members in HTTYD pick up honorifics that describe them completely: Stoick the Vast, Hiccup the Useful, Snotlout. Such nicknames frequently spotlight an obvious build, a legendary triumph, or an embarrassing shortcoming without any sugarcoating.</li>
          <li><strong>Comedic, even insulting given names.</strong> &quot;Hiccup&quot; and &quot;Snotlout&quot; carry little glory — the running joke remains that Viking clans labeled weaker offspring and troublemakers to ward off subterranean beasts and trolls. Quirky, offbeat monikers belong firmly in the setting.</li>
          <li><strong>Compound and twin names.</strong> Fishlegs, Tuffnut, and Ruffnut showcase the way two ordinary terms fuse into a single tough handle, alongside how brothers and sisters often share rhyming or complementary titles (Tuff/Ruff).</li>
        </ul>

        <h2>How Dragon Names Work in How to Train Your Dragon</h2>
        <p>Dragon names follow a completely different rule from Viking names: they are descriptions, not heritage. A rider looks at the creature and names the most obvious trait, ability, or quirk:</p>
        <ul>
          <li><strong>Appearance-based.</strong> Toothless (his teeth retract), Hookfang (curved tusks), Meatlug (a stout, lumpy Gronckle), Skullcrusher — the moniker serves as a direct mirror of the beast&apos;s physical presence.</li>
          <li><strong>Ability-based.</strong> Stormfly darts quickly while launching sharp quills; Cloudjumper navigates deep fog banks; Barf and Belch, the two-headed Zippleback, earned their titles because one snout exhales volatile vapor while the other sparks the flame.</li>
          <li><strong>Fused characteristic terms.</strong> Pairing two tangible words together — like Cloud + jumper, Storm + fly, or Skull + crusher — forms the vast majority of dragon names, establishing an authentic &quot;Berk dragon&quot; feel instead of an ordinary fantasy creature.</li>
          <li><strong>Endearing or playful.</strong> Bond-names can stay sweet or humorous despite a beast's ferocity — Meatlug as well as Toothless belong to deadly breeds yet carry distinctly loving names.</li>
        </ul>

        <h2>Naming by Dragon Species and Class</h2>
        <p>How to Train Your Dragon sorts dragons into species, each with a distinct look and temperament, and matching a name to a species makes an OC dragon instantly more believable:</p>
        <ul>
          <li><strong>Night Fury.</strong> The breed of Toothless — dark, aerodynamic, quiet, firing blasts of plasma. Titles should evoke rapid movement and deep shadows.</li>
          <li><strong>Deadly Nadder.</strong> The breed of Stormfly — vibrant, quill-covered, proud, sporting tail-launched spines. Sharp-sounding, colorful titles work best.</li>
          <li><strong>Monstrous Nightmare.</strong> The breed of Hookfang — massive, short-tempered, capable of igniting itself. Fiery, aggressive titles match its nature.</li>
          <li><strong>Gronckle.</strong> The breed of Meatlug — stout, sluggish, spewing molten rock, yet remarkably sweet. Chunky, blunt, endearing titles fit nicely.</li>
          <li><strong>Hideous Zippleback.</strong> The breed of Barf and Belch — dual-headed, venting flammable gas alongside an igniting spark. These virtually always require twin titles operating as a pair.</li>
        </ul>
        <p>Pick a species first, then generate a batch and keep the names whose sound matches its class and temperament. A stealthy Night Fury and a hot-headed Monstrous Nightmare should not share the same kind of name, even though both are &quot;HTTYD-style.&quot;</p>

        <h2>Building an Original Character (OC) Viking</h2>
        <p>Whether writing fanfic, creating art, or doing role-play, viewers form an initial impression from an OC Viking&apos;s name. A well-crafted Berk Viking name fulfills two key roles: echoing Old Norse roots while offering a blunt, descriptive twist true to tribal humor. Produce a list, then consider: could someone bellow this across the Great Hall alongside Stoick and Gobber without jarring the ears? If it fits, you have hit the target tone.</p>
        <p>A dependable method unites a stout personal name with an earned moniker — such as &quot;Bjorn the Stubborn,&quot; &quot;Sigrid the Loud,&quot; or &quot;Halvard the Half-Bearded.&quot; This epithet provides the perfect outlet for Norse humor: highlight a personal defect, a physical quirk, or an infamous blunder rather than pure victory. Should your OC serve as lighthearted comic relief like Snotlout or Fishlegs, a slightly clumsy title builds deeper character than an entire paragraph of exposition.</p>

        <h2>Building an Original Character (OC) Dragon</h2>
        <p>Coming up with an OC dragon name demands the reverse strategy of a Viking: focus on its physical build rather than family history. Settle on a species and highlight its single most memorable attribute — a spiky crest, a parted tail, a tendency to hum — and craft the title to reflect it. Every official dragon was designated this way, explaining why &quot;Frostquill&quot; or &quot;Emberhide&quot; sounds immediately like a Berk dragon whereas an elven fantasy name feels completely alien.</p>
        <p>Whenever an OC dragon belongs to a human partner, think about how that particular handler would title it. A battle-hardened fighter might favor a fierce, direct label (Skullcrusher); an affectionate tamer could settle on something warm and goofy (Meatlug). The final choice needs to honor both the dragon&apos;s physical traits and the personality of its human — that mutual connection makes any bond-name feel deeply authentic instead of casually applied.</p>

        <h2>How to Use This HTTYD Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of Berk-style Viking and dragon names.</li>
          <li>Skim for names that fit your chosen Viking tribe role or dragon species, then use the Copy button to save the whole list.</li>
          <li>Drop these into your art caption, story notes, or character sheet, and narrow down your top picks.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>Your browser handles all the generation locally. Neither your settings nor the names you generate ever leave your device, meaning your OC dragons and OC Vikings remain completely private until you decide to share them.</p>

        <h2>Tips for Picking the Right Name</h2>
        <p>Speak the name aloud, since Berk names need to be shouted across a windy cliff, meaning mumbled names fail to carry. For Vikings, stick to harsh Norse consonants and leave the comedy to an epithet, whereas for dragons, ensure the name describes the beast even out of context. Steer clear of accidentally copying a canon full name (nobody wants an OC named Hiccup or a dragon named Toothless), though mimicking the formula—a descriptive by-name or a blunt compound—ensures you stay entirely on-theme.</p>
        <p>When naming a dragon-and-rider pair, generate a pair of batches and choose names that complement one another in the style of Astrid and Stormfly or Hiccup and Toothless, since pairing a slightly self-making Viking with a fierce, descriptive dragon transforms the bond into a believable relationship rather than two random names placed side by side.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It creates dragon names and How to Train Your Dragon-style Viking names for role-play, fanfic, and art.</li>
          <li>It avoids acting as a database of the official Berk cast, ensuring all output serves original creative purposes.</li>
          <li>It does not save your generated list or settings; everything processes locally inside your browser.</li>
          <li>It doesn't check if names are available on social platforms, forums, or games, so verify that yourself if you intend to use a name as a handle.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>How to Train Your Dragon ranks among the most-written and most-drawn fandoms on the internet, meaning role-players on Berk-themed servers, artists sketching OC dragons, and fic writers all require fitting names. This HTTYD Name Generator instantly delivers that pool, rooted firmly in the franchise&apos;s authentic naming mechanics: blunt humor and Old Norse roots for Vikings, concrete trait-based compounds for dragons, and species-appropriate sounds for both. Run a batch, rely on the dragon and Viking advice outlined above, and you will finish with names that feel like they always belonged on Berk.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a HTTYD name generator?', answer: 'HTTYD stands for How to Train Your Dragon, and this generator creates names for both sides of that universe: rugged, Norse-inspired Viking names reminiscent of Stoick, Astrid, and Hiccup, alongside descriptive, trait-focused dragon names such as Hookfang, Stormfly, and Toothless. Click to pull a fresh batch derived from concrete dragon trait-words, blunt Viking humor, and Old Norse roots, all blended directly in your browser. Completely free and operating locally without requiring an account, it never transmits names to a server. Apply the results toward role-play, OC art, and fanfic set on Berk.' },
  { category: 'Usage', question: 'How can someone operate the HTTYD Name Generator?', answer: 'Choose your desired number of names per run (1–24), press "Generate names" for a fresh set of dragon and Viking names in the style of Berk, and scan for ones that match your dragon species or Viking tribe role. Use the Copy button to grab the complete list, paste it into your character sheet, art caption, or story notes, and shortlist your favorites. Run the generator again for additional choices, with zero sign-up necessary. Since everything happens inside your browser, your OC dragons and Vikings stay private until you choose to reveal them.' },
  { category: 'General', question: 'Does the HTTYD Name Generator cost anything?', answer: 'Indeed. This HTTYD Name Generator is completely free to use directly in your browser. You can generate dragon and Viking name concepts as frequently as desired without paying or creating an account. Operating locally on your device, the tool requires no downloads. With zero limits on your total or daily runs, you can brainstorm as many names as your role-play, art, or fic requires.' },
  { category: 'Naming', question: 'How do Viking names function in How to Train Your Dragon?', answer: 'The human residents of Berk receive names drawn from a Norse register infused with comedic elements. These names feature heavy, consonant-rich Old Norse sounds like Gobber, Stoick, and Astrid, featuring clusters such as "gr," "st," and "th." Vikings earn blunt, descriptive epithets—such as Hiccup the Useful or Stoick the Vast—highlighting a flaw, deed, or physical trait without any flattery. Even given names can be insulting (Snotlout, Hiccup), playing on the joke that parents named weaklings to frighten away trolls. The pattern is completed by twin and compound names like Tuffnut and Ruffnut or Fishlegs.' },
  { category: 'Naming', question: 'How do dragon names operate in HTTYD?', answer: 'Dragon names take the exact opposite approach of Viking names by relying on descriptions instead of heritage. A rider observes the beast and labels its most prominent characteristic—such as Cloudjumper (soars through cloud), Stormfly (fast flyer), Hookfang (curved tusks), or Toothless (retractable teeth). Most combine two concrete words (Skull + crusher, Cloud + jumper), which creates the exact feel of a Berk dragon instead of a generic fantasy monster. Even for terrifying species, bond-names can remain humorous or warm, as seen with Meatlug.' },
  { category: 'Naming', question: 'How can I match a name to a specific dragon species?', answer: 'Select your species first, then keep names whose acoustic qualities fit that class. A Night Fury (the species of Toothless) calls for shadowy, fast names. A Deadly Nadder (Stormfly) fits sharp, bright names. A Monstrous Nightmare (Hookfang) demands fiery, aggressive ones. A Gronckle (Meatlug) matches blunt, lumpy, affectionate names. A Hideous Zippleback (Barf and Belch) almost always receives a paired title that functions as a duo. A hot-headed Monstrous Nightmare and a stealthy Night Fury ought never to share identical naming styles.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server whenever I utilize the HTTYD Name Generator?', answer: 'Negative. This HTTYD Name Generator functions entirely within your browser. Selecting your name quantity and clicking generate builds them locally right on your device. Neither your chosen options nor the resulting names go to our servers, and we store neither your generated lists nor your inputs. Generation remains entirely local and private, keeping your OC dragons and Vikings yours until you decide to share them.' },
  { category: 'Compatibility', question: 'Is the HTTYD Name Generator functional on mobile devices?', answer: 'Yes. The HTTYD Name Generator operates inside a web browser across phone, tablet, and desktop. Installing an app is completely unnecessary. Simply open the page, pick your desired name count, and generate. On mobile devices, you can build a brief batch and paste it straight into your art caption or notes. Being fully responsive, the tool functions on any device equipped with a modern browser.' },
  { category: 'Limits', question: 'How many HTTYD names am I able to generate simultaneously?', answer: 'Each run permits 1–24 requested names. Should you need more, simply run it again, as each execution delivers a fresh random assortment. There are no daily or total limits. Combine multiple runs in a single document and eliminate duplicates if necessary. This batch size keeps the list easily readable while supplying enough dragon and Viking names to build a solid shortlist.' },
  { category: 'Usage', question: 'Am I able to copy names straight from the generator?', answer: 'Affirmative. Employ the Copy button to transfer every generated name to your clipboard, then paste them into a character sheet, script, or notes app. Appearing as plain text with one per line, the names work smoothly in any editor. Copy your collection, speak every favorite aloud—since Berk names demand to be bellowed—to test them prior to committing. Copying serves as the intended method for saving a shortlist.' },
  { category: 'General', question: 'Must I create a profile to access the HTTYD Name Generator?', answer: 'No. This HTTYD Name Generator functions without registration or login. The utility runs completely within your browser. You do not need to establish an account to use it — open the page, define how many names you want, click generate, and copy the outcomes. No email, password, or sign-up is required.' },
  { category: 'Naming', question: 'What is the process for naming an OC Viking for Berk?', answer: 'A solid Berk Viking name serves two distinct purposes: delivering an Old Norse sound while carrying a blunt descriptive touch matching the tribe\'s humor. A popular method involves pairing a rugged given name with a earned epithet—such as "Halvard the Half-Bearded," "Sigrid the Loud," or "Bjorn the Stubborn"—and channeling that epithet toward a notable blunder, body quirk, or flaw rather than purely a victory. If your OC acts as a comedic foil similar to Fishlegs or Snotlout, a somewhat undignified name provides more character depth than an entire paragraph. Test each option: would it ring out across the Great Hall alongside Gobber and Stoick?' },
  { category: 'Privacy', question: 'Are the generated names saved by you?', answer: 'No. Generation takes place inside your browser. We do not receive or save the names or your configurations. The generator operates locally on your hardware, and you can employ it in a private or incognito window if you prefer. Should you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Every run delivers up to 24 names. Run it again to acquire more, with each execution providing a fresh random selection. Multiple runs can be pasted into a single document for subsequent duplicate removal. There exist no daily or total restrictions. Batching runs represents the intended workflow whenever you require a vast collection of Berk-style dragon and Viking names to select from.' },
  { category: 'Naming', question: 'How should I create a name for an OC dragon?', answer: 'Naming an OC dragon works differently than naming a Viking: begin with the design rather than the background. Pick the species and its most notable feature -- a spiked ridge, a forked tail, a humming sound -- and let the title reflect it. That is how every canon dragon moniker was formed, which is why "Frostquill" or "Emberhide" sounds instantly like a Berk reptile while a borrowed elf name does not. If the dragon is paired with a rider, think about how that person would call it: a rough fighter chooses something aggressive, while a softer rider selects something warm and playful.' },
  { category: 'Technical', question: 'How do the HTTYD names get generated?', answer: 'This tool utilizes two specific vocabularies -- Old Norse roots and simple nicknames for Vikings, plus concrete trait words for dragons -- mirroring the two distinct naming rules of the series. When you press generate, the system blends them randomly inside your browser so every batch differs. No names or preferences get sent to any server. The output serves original creative purposes; it does not replicate the official Berk characters as a database or verify if a name already exists.' },
  { category: 'Naming', question: 'How do I name a rider and dragon combination?', answer: 'Produce two sets and select names that complement each other just like Hiccup and Toothless or Astrid and Stormfly do. A slightly self-deprecating Viking name paired with a fierce, descriptive dragon title makes the partnership feel like an authentic connection rather than two random names placed side by side. Allow the dragon\'s name to mirror its physical form alongside the personality of the rider who selected it -- that mutual fit is what gives a bond name its authenticity.' },
  { category: 'Best practices', question: 'What is the best workflow for the HTTYD name generator?', answer: 'Determine first if you are naming a Viking (focusing on Norse phonetics and humor) or a dragon (focusing on a species and distinctive feature). Pick the quantity (such as 12 or 24), hit generate, and copy the selection into your notes. Keep the names that suit your character or species, pronounce each one aloud to check its impact, and narrow it down to five or ten. Run it again for additional options. For a pair, generate both and choose names that mirror one another.' },
  { category: 'Best practices', question: 'What errors should I avoid?', answer: 'The primary one is reusing an official full name -- you certainly do not want an OC literally named Hiccup or a dragon called Toothless. Mimic the layout (a simple compound, a descriptive descriptor) instead of the exact moniker. For dragons, steer clear of titles that lose their descriptive meaning out of context. For Vikings, do not omit the harsh Norse consonants or the humorous nickname, which anchor the name to Berk. Speak the names aloud; one that sounds muffled will not carry across a windy ridge.' },
  { category: 'Troubleshooting', question: 'What if my OC name matches an official character?', answer: 'How to Train Your Dragon boasts a vast, heavily engaged fandom, meaning many great names are already claimed by canon figures or other users\' OCs. This generator provides suggestions and does not check name availability on any game, forum, or social network. If you intend to use a name as a handle or desire uniqueness, verify it yourself, and maintain a short list of five to ten so you have alternatives. Replicating the naming pattern instead of a specific moniker minimizes clashes.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the HTTYD Name Generator without an internet connection?', answer: 'Yes. Once the page loads, the generator operates entirely within your browser and requires no internet connection to build names. You can brainstorm Viking and dragon names offline, and copying and pasting functions offline too. You will only need a connection initially to open the webpage.' },
  { category: 'Use cases', question: 'Can I use these names for fanfiction and roleplay servers?', answer: 'Yes -- that is the primary purpose. For fanfiction, an OC\'s name is the initial detail readers judge, so a moniker that sounds authentic to Berk establishes the mood right away. For Berk-based roleplay servers, both Viking and dragon names help your character fit into the universe. Create a batch, keep the ones matching your tribe role or dragon species, and verify they sound canon next to Stoick and Toothless. The result is meant for original characters, not for copying the official cast.' },
  { category: 'Naming', question: 'How do I name an entire Viking tribe or clan?', answer: 'Give the tribe a common naming pattern so its members feel like a single people, much like the Hairy Hooligans do. Choose a sound family -- heavy Norse consonants, a repeating root, or a local style -- and let each Viking vary within it. Produce a large batch, keep the names that share that feel, and assign the simple comic nicknames to characters meant to act as foils. A chieftain and their tribe ought to sound connected, not pulled from random fantasy titles.' },
  { category: 'Best practices', question: 'How do I choose between a Viking name and a dragon name?', answer: 'Decide what you are naming first, since the two follow contrasting rules. A Viking name begins with heritage -- Old Norse sounds plus a blunt, often comedic epithet. A dragon name starts from the appearance -- a species and its single most prominent trait, transformed into a concrete compound. If you are naming a rider and dragon duo, do both and select names that bounce off each other, a self-deprecating Viking alongside a fierce descriptive dragon, so the partnership feels like a genuine relationship.' },
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
          <p className="text-slate-700">Frequent inquiries concerning the HTTYD Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

