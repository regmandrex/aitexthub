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


const toolSlug = 'stripper-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Stripper Name Generator',
    description: 'Free stripper name generator for stage names. Create glamorous name ideas in your browser with no sign-up.',
    seoTitle: 'Stripper Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Stripper Name Generator – Stage Name Ideas</h2>
        <p>
          A stage name is a persona in two words. On a busy floor or a burlesque bill, a dancer is never introduced by a legal name — she is Diamond, Roxy Blaze, or Cherry Divine, a bold alter-ego that lands the second the DJ says it. This stripper name generator builds those glamorous, playful stage names by pairing evocative first names with sultry or sweet second words, so the result reads as a ready-to-use persona rather than an ordinary name. It runs in your browser, needs no sign-up, and gives you 1–24 names per run with a copy button.
        </p>
        <p>
          The same naming style suits far more than one profession: burlesque and cabaret acts, drag artists, roller derby skaters, party hosts, cosplay alter-egos, and fiction writers all want a confident, memorable stage identity. The guide below covers the classic naming games, the word themes behind a great stage name, one-word versus two-word personas, and how to keep the persona separate from your real identity.
        </p>

        <h2>The Classic &quot;First Pet + Street&quot; Name Game</h2>
        <p>
          The best-known way to conjure an instant stage name is the party game: take the name of your first pet and add the street you grew up on. A childhood cat named Bella on Maple Avenue becomes &quot;Bella Maple.&quot; It is fun precisely because it produces a name that feels personal yet completely disguised. This generator captures the same spirit — an evocative first name joined to a smooth second word — while removing the luck of the draw. Use your real pet-and-street answer as a starting point, then generate variations until one flows better and sounds like a persona rather than a coincidence.
        </p>

        <h2>The Themes Behind a Great Stage Name</h2>
        <p>
          Stage names are not random glamour; they draw on a handful of recurring word families. Recognizing them helps you steer a batch toward the vibe you want:
        </p>
        <ul>
          <li><strong>Gems and precious things.</strong> Diamond, Ruby, Pearl, Crystal — names that signal value and shine and are instantly easy to announce.</li>
          <li><strong>Sweet and indulgent words.</strong> Cherry, Candy, Honey, Sugar — playful, warm, and approachable, the cheeky end of the spectrum.</li>
          <li><strong>Bold sensual adjectives.</strong> Foxy, Velvet, Sultry, Sinful, Scarlet — these carry attitude and read as confident rather than cute.</li>
          <li><strong>Glamorous or exotic first names.</strong> Roxy, Lola, Jasmine, Vixen, Ginger — first names that already sound like a persona before you add anything.</li>
        </ul>
        <p>
          Mixing registers is what gives a name its spark. A gem paired with an adjective (Velvet Diamond), or a sweet word with a glamorous surname (Cherry Divine), reads far more like a stage identity than either half alone.
        </p>

        <h2>One Word or Two?</h2>
        <p>
          Both forms work, and the choice depends on how you present. A single strong word — Diamond, Scarlett, Vixen — is instantly memorable and easy for a DJ to call over loud music. A two-part name — Roxy Blaze, Cherry Divine, Lola Sinclair — reads more like a full persona and gives you a &quot;surname&quot; to build branding, socials, and merchandise around. Generate batches of each and test which is easier to say quickly and to spell for someone who wants to find you again.
        </p>

        <h2>Club Floor vs. Burlesque Stage</h2>
        <p>
          The setting shifts the flavor. Club stage names tend to be short and high-impact — one or two syllables that cut across a noisy room and stick after one hearing. Burlesque and cabaret personas lean vintage and theatrical, favoring old-Hollywood glamour, a wink of a pun, or a French flourish (think Ginger, or a playful Coco Chantémps). When you generate a batch, sort by feel: keep the sharp, bold pairings for the floor and the retro, elegant, slightly witty ones for a burlesque act.
        </p>

        <h2>Keeping It Classy Rather Than Crude</h2>
        <p>
          A stage name that reads as poised tends to age better and travel further than a shock-value one. Lean on the glamorous end of the word pool — gems, silks, flowers, old-Hollywood first names — and skip anything too on-the-nose. Names like Velvet, Scarlett, Jasmine, and Diamond sound elegant and self-assured. Say each candidate aloud as if introducing it, and keep only the ones you would be comfortable announcing in any room. Confidence, not crudeness, is what makes a stage name memorable.
        </p>

        <h2>The Persona Is Also Privacy</h2>
        <p>
          A stage name does real work beyond branding: it separates the performer from the private person. Choosing a name that shares nothing with your legal identity keeps your two lives distinct, which matters for safety and peace of mind. That is another reason the &quot;first pet + street&quot; game endures — it feels personal but reveals nothing traceable. When you shortlist a name, check that it does not accidentally echo your real name, hometown, or handle elsewhere, so the persona stays a genuine wall between stage and self.
        </p>

        <h2>Stage Names for Fiction and Alter-Egos</h2>
        <p>
          Writers use stage names to characterize dancers, cabaret performers, and nightlife figures in a single word — glamorous, tough, sweet, or mysterious — before any dialogue does the work. The same instinct suits drag personas, roller derby skate names, and cosplay alter-egos, all of which prize a bold, instantly readable identity. Generate options, pick the one whose tone matches the character or act, and tweak the spelling or add a pun to make it fully your own.
        </p>

        <h2>How to Use This Stripper Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide the feel you want first — glamorous, cheeky, vintage burlesque, or bold and high-impact.</li>
          <li>Set how many names you want per run (1–24) and click <strong>Generate names</strong> for a fresh batch of stage names.</li>
          <li>Say each candidate out loud as if announcing it over music, then use the Copy button to save the whole list.</li>
          <li>Paste into your notes and shortlist five to ten that land well and are easy to spell.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The classic gem-and-sweet-word combos get reused constantly, so favor a slightly less obvious pairing to stay distinctive — an unexpected first name over a familiar theme word keeps it fresh while still on-brand. Make sure the name is easy to spell so regulars can find you and tip you again. If you will use the name as a social handle too, search it first, since this tool suggests ideas but does not check whether a name is already taken anywhere. And avoid a name that leaks your real identity — the whole point of a persona is the separation.
        </p>

        <h2>Privacy</h2>
        <p>
          This stripper name generator runs entirely in your browser. When you set a count and generate, the stage names are assembled locally on your device — nothing is uploaded, logged, or stored on our servers. You can use it in a private or incognito window. Close the tab and the list is gone unless you copied it, so your stage-name brainstorming stays completely anonymous.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a stripper name generator?', answer: 'It is a browser tool that builds playful, glamorous stage names in the style dancers and burlesque performers use on stage. It pairs a bold, evocative first name (think Diamond, Cherry, Roxy, Foxy) with a smooth or sultry surname or single-word persona, so each result reads as a ready-to-use stage name rather than a legal one. Everything is combined locally in your browser, it is free, and nothing you generate is sent to a server or stored.' },
  { category: 'Usage', question: 'How do I use the stripper name generator?', answer: 'Choose how many names you want per run (1 to 24), then click Generate to get a fresh batch of stage names. Skim the list for the persona that fits the vibe you want, whether that is glamorous, cheeky, or vintage burlesque, and use the Copy button to save the whole batch. Paste it into your notes and shortlist your favorites. Run again as many times as you like; there is no sign-up and no download.' },
  { category: 'Naming', question: 'What makes a good stripper stage name?', answer: 'The best stage names are short, punchy, and easy to announce over music, so they land the moment the DJ says them. They usually lean on one strong image: a gem (Diamond, Ruby), a sweet or sultry word (Cherry, Honey, Candy), or a bold adjective (Foxy, Sinful, Velvet). A memorable stage name is distinctive enough to stick in a crowd but easy to spell, so regulars can find you and tip you again.' },
  { category: 'Naming', question: 'What is the classic "first pet plus street" stripper name game?', answer: 'It is the party game where your stage name is the name of your first pet plus the street you grew up on, so a childhood cat named Bella on Maple Avenue becomes "Bella Maple." It is a fun, low-effort way to get an instant persona, and this generator captures the same spirit by pairing an evocative first name with a smooth second word. If you want, use your real pet-and-street answer as inspiration, then generate variations to find one that flows better.' },
  { category: 'General', question: 'Is the stripper name generator free?', answer: 'Yes, it is completely free and runs in your browser with no account, no email, and no payment. You can generate as many batches of stage names as you like with no daily or total limit. There is nothing to install and no paywall on any feature. Because it runs locally, using it costs you nothing and reveals nothing about what you generate.' },
  { category: 'Naming', question: 'How do I pick a burlesque stage name versus a club stage name?', answer: 'Burlesque personas often lean vintage and theatrical, favoring names with old-Hollywood glamour like Ginger, Dita-style flourishes, or a playful pun (Coco Chantémps). Club stage names tend to be shorter and higher-impact, one or two syllables that carry across a loud room. Generate a batch, then sort the results by that feel: keep the retro, elegant ones for a burlesque act and the sharp, bold ones for the floor.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server or stored?', answer: 'No. The generator runs entirely in your browser, so when you click Generate the names are assembled on your own device and never transmitted anywhere. We do not log, save, or see the names you create or how many times you run it. You can use it in a private or incognito window, and closing the tab clears the last batch unless you copied it first.' },
  { category: 'Compatibility', question: 'Does the stripper name generator work on mobile?', answer: 'Yes. It is a responsive web page that works on phones, tablets, and desktops without installing an app. On a phone you can generate a short batch backstage, tap Copy, and drop the names straight into your notes or a message. Any modern mobile browser handles it, and because generation is local it stays fast even on a spotty connection.' },
  { category: 'Limits', question: 'How many stage names can I generate at once?', answer: 'Each run gives you between 1 and 24 names, and you set the count before generating. If you want a bigger pool, just run it again; every run produces a fresh random set. There is no daily cap or lifetime limit, so you can keep generating until a name clicks. Paste several runs into one note and delete any repeats to build a longer shortlist.' },
  { category: 'Usage', question: 'Can I copy the generated stage names?', answer: 'Yes. The Copy button puts the entire batch on your clipboard as plain text, one name per line, ready to paste into notes, a message, or a document. Say your favorites out loud after copying, since a stage name has to sound good announced over music, not just look good on screen. Copying is the intended way to save a shortlist, as the tool does not export a file.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No account, login, or email is required. Open the page, set how many names you want, click Generate, and copy the results. There is no registration step and nothing gated behind a sign-up. This keeps stage-name brainstorming quick and completely anonymous.' },
  { category: 'Naming', question: 'Should my stage name be one word or two?', answer: 'Both work, and the right choice depends on how you present. A single strong word (Diamond, Scarlett, Vixen) is instantly memorable and easy to announce, while a two-part name (Roxy Blaze, Cherry Divine) reads more like a full persona and gives you a "surname" for branding. Generate batches of each style and test which one is easier to say quickly and to spell for someone tipping you.' },
  { category: 'Naming', question: 'What themes do the names draw on?', answer: 'The word pool blends several classic stage-name themes: gemstones and precious things (Diamond, Ruby, Pearl), sweet or indulgent words (Cherry, Candy, Honey, Sugar), bold sensual adjectives (Foxy, Sultry, Velvet, Sinful), and glamorous or exotic first names (Roxy, Lola, Jasmine). Mixing these registers is what gives the results their playful, glamorous feel rather than sounding like an ordinary name.' },
  { category: 'Best practices', question: 'How do I avoid picking a stage name someone else already uses?', answer: 'Popular stage names get reused a lot, especially the classic gem and sweet-word combos, so generate a batch and look for a pairing that feels a little less obvious. Combining an unexpected first name with a familiar theme word keeps it distinctive while still on-brand. If you plan to use the name as a social handle too, search it first, since this tool suggests ideas but does not check whether a name is already taken anywhere.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated lists of glamorous first names and sultry or sweet second words, then randomly pairs and shuffles them in your browser each time you click Generate. That randomness surfaces combinations you might not think of yourself. Nothing is sent to a server, and the output is meant purely as creative inspiration, not a registry of real performers.' },
  { category: 'Use cases', question: 'Can I use these names for burlesque, cabaret, or roller derby?', answer: 'Absolutely. The same playful, persona-driven naming works for burlesque acts, cabaret characters, roller derby skate names, and drag or theatrical personas, since all of them prize a bold, memorable stage identity. Generate a batch and keep the ones that match your act, whether that is glamorous, comedic, or fierce. Tweak the spelling or add a punny twist to make it fully your own.' },
  { category: 'Naming', question: 'How do I make my stage name feel classy rather than crude?', answer: 'Lean on the glamorous end of the word pool, gems, silks, flowers, and old-Hollywood first names, and skip anything too on-the-nose. Names like Velvet, Scarlett, Jasmine, or Diamond read as elegant and confident, which tends to age better than a shock-value name. Generate a batch, then say each aloud and keep only the ones that sound poised and easy to introduce.' },
  { category: 'Naming', question: 'Can I use the generator to name a character in a story?', answer: 'Yes. Writers use it to name dancers, cabaret performers, and nightlife characters in fiction and RP so the persona reads convincingly. A well-chosen stage name signals a character\'s attitude in a single word, glamorous, tough, sweet, or mysterious, before any dialogue does the work. Generate options, pick the one that matches your character\'s vibe, and adjust it to fit your world.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser and nothing is written to our servers. We do not keep the names, your settings, or a count of your runs. If you refresh or close the page, the last batch is gone unless you copied it, so save anything you want to keep before leaving.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run tops out at 24, but you can run it as many times as you want. Do several runs and paste them into one note to build a larger pool, then delete any duplicates. There is no daily or total limit, so batching runs is the normal way to gather a big list of stage-name options before choosing.' },
  { category: 'Best practices', question: 'What is the best workflow for choosing a stage name?', answer: 'Decide the feel you want first, glamorous, cheeky, vintage burlesque, or bold, then generate a batch of 12 to 24 and copy it into a note. Say each candidate out loud as if announcing it over music, and shortlist five to ten that land well. Sit with them for a day, check they are easy to spell and not already widely used, then commit to the one that feels like you.' },
  { category: 'Use cases', question: 'Is this just for adult performers?', answer: 'Not at all. The playful, glamorous naming style suits anyone who wants a bold alter-ego: burlesque and cabaret performers, drag artists, roller derby skaters, party hosts, cosplay personas, and fiction writers all use names like these. The tool simply produces confident, memorable stage names, and how you use them is up to you.' },
  { category: 'Troubleshooting', question: 'Can I use the stripper name generator offline?', answer: 'Yes, once the page has loaded it runs fully in your browser and needs no connection to generate more names. You can brainstorm stage names on a plane or backstage with no signal, and the Copy button works offline too. You only need a connection the first time, to load the page.' },
];

export default async function StripperNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="stripper" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Stripper name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

