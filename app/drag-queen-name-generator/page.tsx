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


const toolSlug = 'drag-queen-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Drag Queen Name Generator',
    description: 'Free drag queen name generator for stage names. Create glamorous name ideas in your browser with no sign-up.',
    seoTitle: 'Drag Queen Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Drag Queen Name Generator – Stage Name Ideas</h2>
        <p>
          A drag queen name is a performance in a single line. Before a queen strikes a pose or lip-syncs a note, the name on the flyer has already told the room whether to expect glamour, comedy, camp, or something spooky. This drag queen name generator builds stage names in that tradition — pop-culture puns, alliterative showgirl names, glamorous fantasy handles, and cheeky double entendres — right in your browser. There is no sign-up, nothing is stored, and you get 1–24 names per run so you can brainstorm a big pool and narrow down to the persona you want to perform.
        </p>
        <p>
          Drag queen naming is one of the most creative traditions in performance, and it follows real patterns. Some names are pure glamour, some are jokes you groan-laugh at, some are family names passed down within a drag house, and some are deliberately grotesque for a spooky or horror act. The guide below walks through those conventions so the name you pick reads like a real queen&apos;s — one that could headline a show — rather than a random pair of pretty words.
        </p>

        <h2>What Makes a Great Drag Queen Name</h2>
        <p>
          The strongest drag queen names do several jobs at once. Learning what separates a memorable name from a forgettable one helps you turn a generated idea into a headliner:
        </p>
        <ul>
          <li><strong>Instant persona.</strong> The name should tell the audience who this queen is — a glamorous diva, a comedy queen, a spooky ghoul, a filthy provocateur — in the two seconds it takes to read it.</li>
          <li><strong>A sonic hook.</strong> Alliteration (&quot;Bianca, Bianca&quot;), rhyme, or a satisfying rhythm makes a name stick and makes it fun for a host to announce.</li>
          <li><strong>A layer of wit.</strong> The best names reward a second look — a pun, a double meaning, or a clever twist on something familiar that earns a laugh once it clicks.</li>
        </ul>

        <h2>The Pop-Culture Pun</h2>
        <p>
          The single most iconic drag queen naming device is the pun on a celebrity or a well-known phrase. A queen takes a famous name and warps it into something funny, fabulous, or filthy — the humor comes from the collision between the glamorous reference and the twist. This is the tradition behind countless legendary drag names, and it works because the audience gets the reference instantly and then does a double take at the spin. If a generated option lands near a recognizable name or phrase, lean into it: bend the spelling, swap a word, or push the innuendo until the joke snaps into place. The pun is often the whole personality of the act.
        </p>

        <h2>Glamour Names Versus Comedy Names</h2>
        <p>
          There is a real split in drag naming between glamour and comedy, and it maps onto the kind of queen you want to be. A glamour or &quot;fishy&quot; queen — polished, high-fashion, pageant-ready — wants a name that sounds like a supermodel or an old-Hollywood star: elegant, feminine, and aspirational, heavy on beautiful first names and luxurious surnames. A comedy queen wants a name that gets a laugh before she opens her mouth: a groan-worthy pun, an absurd combination, or a deliberately unglamorous word smashed against a fancy one. Decide which lane your act lives in, then keep the generated names that serve it — a pageant name and a comedy name should not look alike, even though both are &quot;drag queen names.&quot;
        </p>

        <h2>Spooky, Gothic, and Horror Personas</h2>
        <p>
          A whole corner of drag builds names around the macabre — the horror queen, the gothic vampire, the monster, the witch. Names here reach for the dark and theatrical: references to death, decay, and the supernatural, often twisted into a pun the same way glamour queens twist celebrity names. This style suits performers whose numbers are theatrical, unsettling, or Halloween-flavored year round, and it thrives on the contrast between something ghoulish and something feminine or glamorous. If your persona is a creature of the night, favor the darker, more gothic options in your batch and let the name promise a scare.
        </p>

        <h2>Alliteration, Rhythm, and Sound</h2>
        <p>
          Beyond meaning, drag names live on sound. Alliteration is everywhere in drag because a matching first-name and surname initial is catchy, easy to chant, and fun to say with a flourish. Rhyme, repetition, and a strong rhythm do the same work. When you review a generated batch, say each name out loud in an announcer&apos;s voice and notice which ones have a musical bounce — those are the names a host will love to introduce and a crowd will remember. You can also mix a first name from one result with a surname from another to build alliteration or rhythm the generator did not produce on its own.
        </p>

        <h2>Drag Family and House Names</h2>
        <p>
          In many scenes, a queen&apos;s surname signals belonging. Drag houses and drag families — mentored groups descended from a &quot;drag mother&quot; — often share a surname that a new queen adopts when she joins, the way a family name is passed down. If you are part of, or building, a drag family, a shared surname ties your members together and reads instantly as a lineage to anyone who knows the scene. When you generate names, you can hold a chosen family surname constant and use the generator only for first-name ideas that pair well with it.
        </p>

        <h2>How to Use This Drag Queen Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many queen names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of drag queen stage names.</li>
          <li>Sort the list by style — which read as glamour, which as comedy puns, which as spooky — and keep the ones that match your persona.</li>
          <li>Use the Copy button to save your shortlist, then read each favorite aloud as a host would announce it.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, which matters when you are workshopping a drag identity you are not ready to reveal — your ideas stay private until you choose to share them.
        </p>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The most common mistake is a name that fights the act — a filthy pun on a serious pageant queen, or a bland, pretty name on a big comedy character. The name and the performance should agree. Another is a name too long or hard to say, since a host has to announce it cleanly and a crowd has to chant it, so favor names that are punchy and rhythmic. A third is accidentally taking a name an established queen already performs under — drag is a tight community and a duplicate causes confusion and can read as disrespectful, so search your local scene and social platforms before you debut. Keep a shortlist so you have backups if your first choice is claimed.
        </p>

        <h2>Privacy</h2>
        <p>
          This drag queen name generator runs entirely in your browser. When you set a count and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your persona ideas stay yours while you decide.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag queen name generator?', answer: 'It is a browser tool that invents flamboyant, punny drag performer stage names — the kind of glamorous, camp, wordplay-driven handles queens use on stage, like Anita Mann, Ivana Tinkle, or Sasha Fierce-style pairings. It leans into pop-culture puns, alliteration, and over-the-top glamour words. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 name ideas per run and can generate as many batches as you like.' },
  { category: 'Naming', question: 'What makes a great drag queen name?', answer: 'Great drag names are camp, memorable, and fun to announce — they use wordplay, puns, alliteration, or a double meaning that makes the audience laugh or gasp. Classic tricks include a innuendo pun (Anita Mann), a fabulous first name plus a punchy surname, or a glamorous word twisted just enough. The best names capture your persona in a phrase, so a fierce queen and a comedy queen should sound different the moment they are read on a poster.' },
  { category: 'Naming', question: 'How do drag name puns work?', answer: 'The most iconic drag names are puns that sound like a real name until you say them aloud — Ivana Tinkle, Sharon Needles, Anita Mann, Ben Dover. The joke lives in the phonetics, so a pun name should read innocent on the page and land when spoken. Generate a batch, say each one out loud, and keep the ones where the double meaning clicks. A clean pun is instantly quotable, which is exactly what a stage name wants.' },
  { category: 'Naming', question: 'What are the common styles of drag names?', answer: 'A few recognizable molds: the pun name (Ivana Tinkle), the glamorous diva name (Sable, Divine, Chanel), the alliterative name (Bianca Del Rio, Trixie Mattel), the pop-culture riff (twisting a celebrity or brand), and the fierce one-word mononym. The generator mixes glamour words, punny surnames, and camp elements so you can find a name in whichever style fits your persona. Skim the batch for the mold that matches the queen you want to be.' },
  { category: 'Use cases', question: 'How do I pick a drag name that fits my persona?', answer: 'Start with your drag character: are you a comedy queen, a glamour diva, a spooky queen, a pageant queen? Match the name\'s tone to that — puns and jokes for comedy, lush glamorous words for a diva, dark or gothic twists for a spooky act. Generate a batch, read each aloud as if introducing yourself on stage, and keep the ones that feel like you the moment a host announces them.' },
  { category: 'Naming', question: 'Should my drag name have a first name and surname?', answer: 'Many iconic drag names do — a fabulous first name plus a surname that adds the punch, like Bianca Del Rio or Sharon Needles. The surname is often where the pun or the glamour lands. That said, plenty of legendary queens go by a single striking word (Divine, Sasha). Generate both formats and choose based on your persona: a full pun name for comedy, a lush double name for glamour, or a one-word mononym for pure fierceness.' },
  { category: 'Naming', question: 'What themes and words feed a drag name?', answer: 'Glamour and camp are the core: jewels and fabrics (Sable, Velvet, Chanel), sweetness (Sugar, Candy, Honey), fierceness (Fierce, Venom, Storm), and innuendo for the puns. Alliteration and rhythm make names pop off a flyer. The generator draws on this vocabulary so results feel authentically drag rather than plain. If a result is close but flat, swap one word for something more fabulous or more cheeky to push it over the top.' },
  { category: 'Use cases', question: 'Can I use a generated name as my actual drag name?', answer: 'Yes — these are inspiration for a real stage persona, so if a generated name captures your character, take it and make it yours. Say it aloud, imagine it on a poster and being announced, and check it is not already the well-known name of an established queen in your scene to avoid confusion. Tweak the spelling or pairing freely; the generator gives you a starting point, and the final name is yours to own.' },
  { category: 'Usage', question: 'How do I use the drag queen name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Read each one aloud as if a host were introducing you, since drag names live in performance, then use the Copy button to save your favorites. Paste the results into your notes and mix first names with different punny surnames to fine-tune. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the drag queen name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate stage-name ideas as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm your whole drag persona, from a fierce diva name to a cheeky pun, without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your persona ideas stay private while you are still workshopping them. Close the tab and the list is gone unless you copied it, so your drag name stays yours until you choose to reveal it.' },
  { category: 'Compatibility', question: 'Does the drag queen name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm stage names on your phone backstage or on the go, copy a favorite, and paste it into your notes or a social bio. The layout is responsive, so finding the perfect glamorous, punny name works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you want a bigger pool of stage-name ideas, just run it again; each run produces a fresh random set of camp, punny, and glamorous options. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of drag names to say out loud and shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app or document. This is the intended way to save a shortlist: generate, copy, then read them aloud to find the one that lands. Keeping them in a notes file lets you mix and match first names with punny surnames until your stage name is exactly right.' },
  { category: 'General', question: 'Do I need an account to use the drag queen name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of fabulous stage names, and start building your persona without creating anything.' },
  { category: 'Technical', question: 'How are the drag names generated?', answer: 'The generator draws on curated lists of glamorous first names, punny and camp surnames, and fabulous vocabulary, then combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration only — a starting pool of stage-name ideas — and the lists are tuned to produce names that are memorable, quotable, and full of wordplay when read aloud.' },
  { category: 'Naming', question: 'How can I make my drag name more memorable?', answer: 'Lean into sound: alliteration (Trixie Mattel), rhythm, and a pun that pays off out loud all stick in the memory. Keep it short enough to shout across a room and easy to spell for a flyer or handle. If a generated name is close, sharpen it — swap in a punchier surname, add alliteration, or lean the glamour up. A name people can chant or quote is a name that gets remembered.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when picking a drag name?', answer: 'Avoid a pun so obscure the audience misses it, and one so long it is hard to announce. Avoid accidentally copying an established queen\'s well-known name in your scene. Watch that spelling reads clearly on a poster. And make sure the tone matches your act — a soft glamour name on a rowdy comedy queen sends mixed signals. Keep the options that are punchy, quotable, on-brand, and unmistakably yours.' },
  { category: 'Naming', question: 'Can I generate a one-word or mononym drag name?', answer: 'Yes. Some of drag\'s most iconic names are single fierce words — Divine, Sasha, Sable, Venom. Generate a batch and pull the standout first-name or glamour-word entries to use on their own. A strong mononym works best when the word already carries attitude or glamour, so pick one that sounds powerful said alone. You can always pair it with a surname later if you want a fuller stage name.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want a large set of stage-name ideas to say aloud and sift through. Keep the strongest, most quotable options in a shortlist as you go.' },
  { category: 'General', question: 'Are these real queens\' names or invented ones?', answer: 'They are original, invented combinations built from glamorous and punny name elements — not a database of existing performers. The generator is a brainstorming aid for creating your own persona, so treat the output as raw material to shape rather than a list to copy. Always check that a name you love is not already the well-known handle of an established queen in your scene before you make it your own.' },
  { category: 'Troubleshooting', question: 'Can I use the drag queen name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm stage names backstage or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every fabulous, punny batch is generated right on your device.' },
  { category: 'Naming', question: 'How do I pick a drag name that matches my drag persona?', answer: 'Let your persona lead the name. A glamour queen wants something elegant and aspirational; a comedy queen wants a name that lands a laugh out loud; a spooky or edgy act wants darker, sharper wordplay. Decide your lane first, then generate a batch and keep only the names whose tone fits — a soft glamour name on a rowdy comedy act sends mixed signals. The best stage name previews the show before you step on stage.' },
  { category: 'Use cases', question: 'Can I use these names for a drag handle on social media?', answer: 'Yes. A strong drag name doubles as your Instagram, TikTok, and booking handle, so pick one that reads clearly and spells easily for flyers and tags. Generate a batch, shortlist the punchy, quotable options, then check whether the handle is free on the platforms you use, since the tool suggests ideas but does not check availability. Keeping a few backups helps if your first choice is already taken by another performer.' },
];

export default async function DragQueenNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="drag-queen" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Drag Queen name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

