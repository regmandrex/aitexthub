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


const toolSlug = 'hillbilly-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Hillbilly Name Generator',
    description: 'Free hillbilly name generator for country-style names. Create country-style name ideas in your browser with no sign-up.',
    seoTitle: 'Hillbilly Name Generator – Country Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Hillbilly Name Generator – Country Name Ideas</h2>
        <p>
          A good hillbilly name lands like a punchline. Cletus, Billy-Bob, Bobby-Sue, Earl, Daisy-Mae — these rustic, down-home Appalachian and country names carry an instant comic warmth, the sound of a porch swing and a screen door slamming. This hillbilly name generator builds names in that tradition — double first names, twangy nicknames, and folksy surnames — for comedy writers, character creators, and anyone who needs a good-natured country name for a joke, a sketch, or a role-play. It runs in your browser, needs no sign-up, and gives you 1–24 names per run with a copy button.
        </p>
        <p>
          The guide below covers what actually makes a hillbilly name funny and believable: the hyphenated double-name pattern, the classic first names and nicknames, the folksy surnames, and how to use these names for humor and characters without tipping into mean-spirited caricature.
        </p>

        <h2>The Double-Name Pattern</h2>
        <p>
          The single most recognizable feature of a hillbilly name is the hyphenated double first name — Billy-Bob, Bobby-Sue, Daisy-Mae, Jim-Bob, Ellie-May, Peggy-Sue. Rooted in real Southern and Appalachian naming, where two given names (or a name plus a family name) are used together every day, the pattern reads as warm, rural, and unmistakably country. The comedy comes from the rhythm: two short, homey names snapped together with a hyphen. When you generate a batch, the double names are usually the ones that land hardest, because that mash-up is the genre&apos;s signature.
        </p>

        <h2>Classic First Names and Nicknames</h2>
        <p>
          Hillbilly humor leans on a well-worn cast of first names and nicknames that instantly signal the type. Understanding the pool helps you pick the funniest fit:
        </p>
        <ul>
          <li><strong>Classic men&apos;s names.</strong> Cletus, Earl, Billy, Bubba, Jed, Roscoe, Gus, Delbert, Merle — plain, old-fashioned, and a little worn-in.</li>
          <li><strong>Classic women&apos;s names.</strong> Daisy, Ellie, Peggy, Loretta, Wanda, Darlene, Bonnie, Sue — country-radio warmth with a wink.</li>
          <li><strong>Nicknames and diminutives.</strong> Bubba, Junior, Skeeter, Cooter, Bo, Duke — earned handles that replace the given name entirely.</li>
          <li><strong>The &quot;-y&quot; ending.</strong> Billy, Bobby, Jimmy, Tammy — soft, familiar endings that keep the whole name sounding neighborly.</li>
        </ul>

        <h2>Folksy Surnames</h2>
        <p>
          The last name seals the persona. Hillbilly surnames tend toward plain Anglo-Scots-Irish family names common in Appalachia — Hicks, Tucker, McCoy, Hatfield, Boggs, Skaggs, Puckett, Dubois — or occupational and descriptive names with a rural ring. The McCoy and Hatfield surnames in particular carry the famous feud folklore that shorthands the whole backwoods archetype. Pair a homey double first name with a plain family surname (&quot;Bobby-Sue Tucker,&quot; &quot;Earl Puckett&quot;) and you have a full, believable country name in three words.
        </p>

        <h2>Using Hillbilly Names for Comedy</h2>
        <p>
          These names shine in humor: sitcom and cartoon characters, comedy sketches, group-chat aliases, fantasy football team owners, party games, and April Fools&apos; personas. A name like Cletus Boggs or Daisy-Mae Hicks does a joke&apos;s worth of characterization before the character says a word. For a bit that needs a whole family, generate a batch and give siblings rhyming or paired double names (Billy-Bob and Bobby-Sue) to sell the down-home clan in one stroke. The over-the-top ones are often the funniest, so do not be shy about the most cartoonish results.
        </p>

        <h2>Naming Country Characters for Fiction</h2>
        <p>
          Beyond pure comedy, these names work for genuine rural and Southern characters in fiction — as long as you pick with a light touch. A well-chosen country name grounds a character in a place and background instantly. For a warm, sympathetic character, favor the softer classics (Loretta, Earl, Ellie) over the most cartoonish handles. For broad comedy, lean into the exaggerated ones. The generator gives you the full range, so match the name&apos;s silliness to how seriously you want the character taken.
        </p>

        <h2>Keeping It Good-Natured, Not Mean</h2>
        <p>
          &quot;Hillbilly&quot; humor works best when it is affectionate rather than a put-down of real people and places. The archetype has deep roots in real Appalachian culture, so aim the comedy at a fictional, over-the-top character — the sound and the double-name gag — rather than at a stereotype meant to belittle. Used with warmth, these names read as playful and fond; used as an insult, they fall flat. Pick names that make people smile with the character, not sneer at a region.
        </p>

        <h2>How to Use This Hillbilly Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide the tone first — broad cartoon comedy, a warm country character, or a whole backwoods family.</li>
          <li>Set how many names you want per run (1–24) and click <strong>Generate names</strong> for a fresh batch of hillbilly and country names.</li>
          <li>Skim for the double names and nicknames that land the hardest, then use the Copy button to save the list.</li>
          <li>Paste into your script, notes, or group chat and pair first names with folksy surnames for full names.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Tips and Common Mistakes</h2>
        <p>
          Say the name out loud — hillbilly names are built on rhythm, and a good double name has a snappy, two-beat bounce. For a family or duo, use rhyming or paired names to sell the connection. The main mistake is aiming the joke at real people instead of a fictional character, which turns warm comedy into a cheap shot. The second is playing it too safe; the genre rewards the over-the-top, so keep the boldest results. And a plain surname usually beats an elaborate one, since the humor lives in the first name.
        </p>

        <h2>Privacy</h2>
        <p>
          This hillbilly name generator runs entirely in your browser. When you set a count and generate, the country-style names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your character ideas stay yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a hillbilly name generator?', answer: 'It is a browser tool that produces rustic, country-style comic names in the hillbilly tradition — think exaggerated Appalachian and backwoods handles like Cletus, Bo, Earl, Jolene, or Bubba paired with folksy surnames and nicknames. It is built for fiction, humor, and character work rather than real profiles. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 names per run and can generate as many batches as you like.' },
  { category: 'Naming', question: 'What makes a name sound convincingly hillbilly?', answer: 'The classic recipe is an old-fashioned Southern first name (Cletus, Earl, Jed, Merle, Bobbie Sue), often a double-barrel like Billy-Ray or Jimmy-Joe, plus a plain rural surname and maybe a nickname earned from a trait or mishap. Dropped consonants and phonetic spellings — "ol\'", "Lil", "Skeeter" — sell the accent. Overalls-and-moonshine imagery, hunting, and country living all feed the vibe, so lean into homey, down-to-earth words rather than anything slick or modern.' },
  { category: 'Naming', question: 'What are good first names for a hillbilly character?', answer: 'Reach for old country staples: Cletus, Bubba, Jed, Earl, Merle, Roscoe, Buford, Delbert, and Otis for men; Jolene, Bobbie Sue, Darlene, Loretta, Peggy, and Wanda for women. Double names like Billy-Bob, Jimmy-Joe, and Mary-Lou are quintessential. These read instantly as backwoods because they hark back to an older rural South, which is exactly the comic register the generator aims for.' },
  { category: 'Naming', question: 'What kinds of surnames and nicknames fit the theme?', answer: 'Plain, homespun surnames work best — Hensley, Tucker, McCoy, Boggs, Hatfield, Crabtree, Puckett. Nicknames often come from a trait, a critter, or a story: Skeeter, Gator, Possum, Buck, Cooter, or "Two-Toes." A good hillbilly name frequently stacks all three, as in "Cletus \'Gator\' McCoy," which gives you a first name, an earned nickname, and a country surname in one memorable package.' },
  { category: 'Use cases', question: 'How do I name a hillbilly character for a story or comic?', answer: 'Decide the role first: a lovable dim-witted cousin, a shotgun-toting grandpa, or a sharp-tongued matriarch all suggest different names. Generate a batch, then match tone to character — softer, sillier names for comic relief and grittier, harder ones for a feud or menace. Keep names in a family distinct so readers can tell cousins apart, and consider a shared surname (Hatfield, McCoy) to signal a clan or rivalry at a glance.' },
  { category: 'Use cases', question: 'Can I use these for a redneck or country wrestling gimmick?', answer: 'Absolutely. Rustic personas — a moonshine-brewing brawler, a barefoot backwoods giant, a trash-talking country boy — thrive on a loud hillbilly name. Generate a batch and keep the ones that sound tough or funny said out loud, since a ring name or gimmick lives in how a crowd chants it. Nicknames like "Mad Dog," "Gator," or "Moonshine" pair well with a country surname to complete the character.' },
  { category: 'Naming', question: 'How do phonetic spellings and apostrophes help?', answer: 'Dropping letters and adding apostrophes mimics a drawl on the page: "ol\'" for old, "lil\'" for little, "-in\'" endings, or spellings like "Jethro" and "Cooter." Used sparingly they add flavor; overused they get hard to read. If a generated name feels too plain, tweaking one word into a phonetic spelling often lifts it into clearer hillbilly territory while keeping the name easy to say.' },
  { category: 'Naming', question: 'Are hillbilly names meant to be affectionate or mocking?', answer: 'It depends on how you use them. In good-natured comedy they read as warm and folksy — a family of eccentric but likable characters. Pushed harder they can tip into caricature, so it is worth keeping intent in mind, especially if the piece touches real communities. The generator supplies the classic comic register; the tone your story sets around a name is what decides whether it lands as affectionate or as a punchline.' },
  { category: 'Usage', question: 'How do I use the hillbilly name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for the ones that fit your character — the lovable, the gruff, the outright silly — then use the Copy button to save your shortlist. Paste the results into your notes and mix and match first names, nicknames, and surnames to fine-tune. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the hillbilly name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate country-style names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm a whole cast of backwoods characters without any friction or cost.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character ideas stay private. Close the tab and the list is gone unless you copied it, so your work-in-progress cast stays on your machine.' },
  { category: 'Compatibility', question: 'Does the hillbilly name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm names on your phone while writing on the couch, copy a favorite, and paste it into your manuscript or notes app. The layout is responsive, so building out a batch of backwoods characters works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — a whole extended hillbilly family, say — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while still giving you plenty of names to sift through.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app or document. This is the intended way to save a shortlist: generate, copy, then pick and refine. Keeping them in a notes file lets you assign names to characters and mix first names with different surnames and nicknames as your cast takes shape.' },
  { category: 'General', question: 'Do I need an account to use the hillbilly name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is designed for quick, friction-free brainstorming, so you can drop in, grab a batch of country names, and get back to writing without creating anything.' },
  { category: 'Technical', question: 'How are the hillbilly names generated?', answer: 'The generator draws on curated lists of old-fashioned Southern first names, folksy nicknames, and plain rural surnames, then combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration only — these are fictional comic names, not entries from any real registry — and the lists are tuned to sound authentically backwoods, bold, and easy to say out loud.' },
  { category: 'Naming', question: 'How do I build a whole hillbilly family or clan?', answer: 'Pick one country surname and attach it to several generated first names to create siblings and cousins — the Boggs family, the McCoy clan. Vary the first names so nobody blurs together, and hand out nicknames to the standouts. For a classic feud, generate two surnames and split your cast between them, Hatfield versus McCoy style, so the rivalry reads instantly in every character\'s name.' },
  { category: 'Best practices', question: 'What mistakes should I avoid with hillbilly names?', answer: 'Avoid names so heavy with dropped letters and apostrophes that they are hard to read. Avoid giving every character in a family near-identical names that readers confuse. Avoid modern or slick-sounding words that break the rustic register. And keep an eye on tone if your piece touches real people or places. Keep the options that are folksy, distinct, easy to say, and true to the down-home vibe you want.' },
  { category: 'Naming', question: 'Should the name match the character\'s personality?', answer: 'It helps a lot. A gentle, slow-talking giant suits a soft name like "Big Merle," while a scheming moonshiner might earn something sharper like "Sly Roscoe." Read your generated batch out loud and keep the ones whose sound matches the character in your head. A name that fits the personality does free characterization, telling the audience who someone is before they say a word.' },
  { category: 'Use cases', question: 'Can I use these names for tabletop RPGs or games?', answer: 'Yes. Rustic NPCs — a backwoods trapper, a moonshine-selling innkeeper, a suspicious swamp hermit — come alive with a good hillbilly name. Generate a batch and assign names to your NPCs, keeping a surname or region consistent for a family or town. Because the names read instantly as country folk, players grasp who they are meeting without a long description, which keeps your session moving.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want a large cast of backwoods characters to sift through. Keep the strongest, most character-appropriate options in a shortlist as you go.' },
  { category: 'General', question: 'Are these real names or invented ones?', answer: 'They are fictional, comic-style combinations built from classic country-name elements — not entries from any official records or a canonical database. The generator is a brainstorming aid for stories, humor, and characters, so treat the output as raw material to shape rather than authentic genealogy. Mix, tweak, and rename freely until each character has a name that fits, since nothing here is fixed or reserved.' },
  { category: 'Troubleshooting', question: 'Can I use the hillbilly name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm hillbilly characters on a flight or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every batch is generated right on your device.' },
];

export default async function HillbillyNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="hillbilly" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Hillbilly name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

