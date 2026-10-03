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
    description: 'Free Drag Queen Name Generator for stage names. Generate striking title concepts inside your web browser with zero registration.',
    seoTitle: 'Drag Queen Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Drag Queen Name Generator - Conceptions for Moniker</h2>
        <p>A drag queen name acts as a performance condensed into a single line. Before a queen even hits a pose or lipsyncs a word, the flyer already communicates whether the audience is about to witness glamour, comedy, camp, or something eerie. This Drag Queen Name Generator generates stage names in that exact tradition — pop-culture puns, alliterative showgirl titles, glamorous fantasy monikers, and witty double entendres — directly inside your browser. There is no requirement to sign up, nothing gets saved, and you receive 1–24 names per generation so you can compile a broad list and narrow it down to your ideal performance persona.</p>
        <p>Drag queen naming stands out as a deeply creative performance tradition governed by distinct patterns. Certain names ooze pure glamour, others rely on groan-worthy humor, some represent family lineages handed down through a drag house, and a few embrace deliberate grotesqueness for horror or spooky routines. The guide below explores these conventions so that the moniker you select resembles an authentic queen&apos;s title — one capable of headlining a show — rather than simply a random assortment of attractive words.</p>

        <h2>Elements of a Fantastic Drag Queen Moniker</h2>
        <p>The most powerful drag queen names accomplish multiple tasks simultaneously. Understanding the elements that distinguish a memorable moniker from a forgettable one helps you transform a generated concept into a true headliner:</p>
        <ul>
          <li><strong>Instant persona.</strong> The name needs to communicate the exact identity of the queen — whether a glamorous diva, a comedy act, a spooky ghoul, or a filthy provocateur — within the brief two seconds it takes to read.</li>
          <li><strong>A sonic hook.</strong> Alliteration (&quot;Bianca, Bianca&quot;), rhyme, or a compelling rhythm ensures a name sticks in the mind and remains enjoyable for a host to announce.</li>
          <li><strong>A layer of wit.</strong> The finest titles reward a second glance — featuring a pun, a dual meaning, or a clever twist on something recognizable that triggers laughter upon realization.</li>
        </ul>

        <h2>The Pop-Culture Pun</h2>
        <p>The single most iconic device in drag queen naming is the pun based on a celebrity or a familiar phrase. Performers take a famous name and twist it into something humorous, fabulous, or filthy, deriving comedy from the clash between the glamorous reference and the clever alteration. This tradition underpins countless legendary drag names because audiences immediately catch the reference and then do a double take at the spin. Should a generated option resemble a known name or phrase, embrace it: alter the spelling, swap a term, or amplify the innuendo until the punchline lands. The pun frequently forms the core personality of the entire act.</p>

        <h2>Glamorous Monikers Compared to Humorous Ones</h2>
        <p>A distinct divide exists within drag naming between glamour and comedy, reflecting the specific style of queen you aim to be. A glamour or &quot;fishy&quot; queen — highly polished, fashion-forward, and pageant-ready — seeks a moniker reminiscent of a supermodel or classic Hollywood star: elegant, feminine, aspirational, and rich in lovely first names combined with luxurious surnames. Conversely, a comedy queen desires a name that provokes laughter before she ever speaks: a groan-inducing pun, an absurd blend, or an intentionally unglamorous word paired with a fancy one. Determine which lane your act occupies, then retain the generated names that suit it — a pageant moniker and a comedy title should remain distinct, even though both qualify as &quot;drag queen names.&quot;</p>

        <h2>Eerie, Gothic, and Scary Characters</h2>
        <p>A substantial sector of drag crafts names rooted in the macabre — encompassing horror queens, gothic vampires, monsters, and witches. Monikers here gravitate toward dark, theatrical themes featuring references to death, decay, and the supernatural, frequently inverted through puns just like glamour queens do with celebrity names. This aesthetic fits performers whose numbers are theatrical, unsettling, or year-round Halloween-themed, thriving on the juxtaposition of ghoulish elements with feminine or glamorous flair. If your persona embodies a creature of the night, prioritize the darker, more gothic options from your batch to let the name promise a fright.</p>

        <h2>Alliteration, Flow, and Audio</h2>
        <p>Beyond mere meaning, drag names rely heavily on sound. Alliteration appears everywhere in the drag world because matching initials for the first and last name remain catchy, simple to chant, and fun to deliver with flair. Rhymes, repetition, and robust rhythms achieve the exact same effect. When evaluating a generated batch, voice each name aloud in an announcer&apos;s tone and observe which ones carry a musical bounce — these are the options hosts love introducing and crowds easily remember. You can also combine a first name from one output with a surname from another to establish alliteration or rhythm that the generator did not initially produce.</p>

        <h2>Drag Family and House Titles</h2>
        <p>Across numerous scenes, a queen&apos;s surname denotes affiliation. Drag houses and families — mentored collectives originating from a &quot;drag mother&quot; — frequently share a surname that new queens adopt upon joining, mimicking generational family names. Should you belong to or establish a drag family, a shared surname unites members and immediately establishes a lineage for anyone familiar with the community. While generating names, you can keep a chosen family surname constant and utilize the tool solely for first-name suggestions that harmonize well with it.</p>

        <h2>[10] How to Use This Drag Queen Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Select the quantity of queen monikers you desire per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to receive a new set of drag queen stage monikers.</li>
          <li>Sort the list by style — identifying which read as glamour, which as comedy puns, and which as spooky — and retain the options that align with your persona.</li>
          <li>Utilize the Copy button to store your preferred list, then speak every favorite out loud as an MC would introduce them.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>Creation occurs completely within your browser. Your preferences and the titles you generate are never transmitted to a server, which is essential when you are developing a drag persona you aren't prepared to unveil — your concepts remain confidential until you decide to reveal them.</p>

        <h2>Tips and Mistakes to Avoid</h2>
        <p>The most frequent error involves a name clashing with the act — such as applying a filthy pun to a serious pageant queen, or a bland, pretty moniker to an eccentric comedy character. The name and performance ought to align harmoniously. Another pitfall is selecting a title that is overly long or difficult to pronounce, given that hosts must announce it cleanly and crowds need to chant it, so prioritize punchy, rhythmic options. A third mistake is accidentally using a name already utilized by an established queen; drag is a close-knit community where duplicates cause confusion and may be perceived as disrespectful, meaning you should always check your local scene and social media platforms prior to your debut. Maintain a shortlist to ensure you have backups if your primary choice is already claimed.</p>

        <h2>Privacy</h2>
        <p>This Drag Queen Name Generator operates completely inside your browser. When you choose a quantity and generate, the monikers are produced locally on your hardware — nothing gets uploaded, tracked, or saved on our servers. Shut the tab and the list disappears unless you saved it, ensuring your character ideas remain yours while you ponder.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag queen name generator?', answer: 'It functions as a browser utility that invents flamboyant, punny drag performer stage names — providing the glamorous, camp, and wordplay-driven monikers queens utilize on stage, such as Anita Mann, Ivana Tinkle, or Sasha Fierce-style pairings. It emphasizes pop-culture puns, alliteration, and over-the-top glamour vocabulary. Everything processes locally within your browser without uploads or data storage, remaining completely free and requiring no sign-up. You receive between 1 and 24 name ideas per run and are free to generate as many batches as desired.' },
  { category: 'Naming', question: 'What defines a fantastic drag queen moniker?', answer: 'Fantastic drag personas are camp, unforgettable, and fun to say out loud using wordplay, puns, alliteration, or a dual meaning that makes the crowd laugh or gasp. Traditional tricks include a double-entendre pun (Anita Mann), a fabulous first moniker plus a sharp surname, or a glamorous word tweaked just right. The top handles capture your character in a phrase, so a fierce queen and a comedy queen should sound distinct the moment they appear on a flyer.' },
  { category: 'Naming', question: 'How do puns function in drag names?', answer: 'The most iconic drag monikers are puns that resemble a real name until spoken aloud — Ivana Tinkle, Sharon Needles, Anita Mann, Ben Dover. The humor lies in the phonetics, meaning a pun title reads innocently on paper and hits when verbalized. Create a batch, pronounce each one out loud, and keep the ones where the double meaning clicks. A clever pun is instantly quotable, which is precisely what a stage name needs.' },
  { category: 'Naming', question: 'What are the typical styles for drag names?', answer: 'A few recognizable molds: the pun name (Ivana Tinkle), the glamorous diva title (Sable, Divine, Chanel), the alliterative handle (Bianca Del Rio, Trixie Mattel), the pop-culture riff (twisting a celebrity or brand), and the fierce single-word mononym. The tool blends glamour words, punny surnames, and camp elements so you can find a moniker in whatever style suits your persona. Scan the batch for the mold that fits the queen you aim to be.' },
  { category: 'Use cases', question: 'How should I select a drag name matching my persona?', answer: 'Begin with your drag character: are you a comedy queen, a glamour diva, a spooky queen, or a pageant queen? Match the title\'s vibe to that — puns and jokes for comedy, lush glamorous words for a diva, dark or gothic twists for a spooky act. Generate a batch, read each aloud as if introducing yourself on stage, and keep the ones that feel like you the second a host announces them.' },
  { category: 'Naming', question: 'Is it necessary to have both a first and last drag name?', answer: 'Many legendary drag monikers do — a fabulous first name plus a surname that delivers the punch, like Bianca Del Rio or Sharon Needles. The surname is frequently where the pun or glamour lands. That said, plenty of renowned queens use a single striking word (Divine, Sasha). Create both formats and select based on your persona: a full pun handle for comedy, a lush double title for glamour, or a single-word mononym for ultimate fierceness.' },
  { category: 'Naming', question: 'Which themes and words inspire a drag name?', answer: 'Glamour and camp form the core: jewels and fabrics (Sable, Velvet, Chanel), sweetness (Sugar, Candy, Honey), fierceness (Fierce, Venom, Storm), and innuendo for the puns. Alliteration and rhythm make names stand out on a poster. The generator utilizes this vocabulary so outcomes feel genuinely drag rather than plain. If an outcome is close yet flat, swap a single word for something more fabulous or cheeky to elevate it.' },
  { category: 'Use cases', question: 'Is it okay to adopt a generated option as my real drag name?', answer: 'Yes — these serve as inspiration for a real stage persona, so if a generated moniker captures your character, adopt it and make it yours. Say it aloud, picture it on a poster and being announced, and check that it is not already the famous name of an established queen in your local scene to avoid confusion. Adjust the spelling or pairing freely; the generator provides a starting point, and the final title is yours to claim.' },
  { category: 'Usage', question: 'How can someone operate the Drag Queen Name Generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Read each one aloud as if a host were introducing you, since drag names exist in performance, then use the Copy button to save your top picks. Paste the results into your notes and mix first names with different punny surnames to refine. Run again whenever you wish; there is no account, no download, and no restriction on runs.' },
  { category: 'General', question: 'Does the Drag Queen Name Generator cost anything?', answer: 'Yes. The utility is completely free to use in your browser with no account, no payment, and no download. You can create stage-name ideas as often as you like — there is no daily cap or total limit on runs. It operates entirely on your device, allowing you to brainstorm your entire drag persona, from a fierce diva title to a cheeky pun, without any expense or friction.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'No. The generator runs entirely within your browser. When you set a count and click generate, the names are produced locally on your device — nothing gets uploaded, logged, or stored on our servers. Your persona concepts remain private while you are still workshopping them. Close the tab and the list disappears unless you copied it, ensuring your drag name stays yours until you decide to unveil it.' },
  { category: 'Compatibility', question: 'Is the Drag Queen Name Generator functional on mobile devices?', answer: 'Yes. The tool operates in any modern web browser and functions on desktop, tablet, and phone with no app to install. You can brainstorm stage names on your mobile device backstage or on the move, copy a favorite, and paste it into your notes or a social bio. The layout is responsive, meaning discovering the ideal glamorous, punny moniker works just as effectively on a small screen as on a desktop.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You can request 1 to 24 names per run. If you desire a larger pool of stage-name ideas, simply run it again; each execution yields a fresh random set of camp, punny, and glamorous choices. There is no daily or total limit. Paste multiple runs into a single document and remove any duplicates. The 24-per-run cap keeps each batch readable while providing plenty of drag names to voice aloud and shortlist.' },
  { category: 'Usage', question: 'Am I able to copy names straight from the generator?', answer: 'Yes. The Copy button places the entire generated batch onto your clipboard as plain text, one name per line, ready to paste into any notes app or document. This is the intended method to save a shortlist: generate, copy, then read them aloud to find the one that hits. Keeping them in a notes file allows you to mix and match first names with punny surnames until your stage name is precisely right.' },
  { category: 'General', question: 'Must I create a profile to access the Drag Queen Name Generator?', answer: 'No. The utility works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration required. It is designed for fast, friction-free brainstorming, so you can drop in, grab a batch of fabulous stage monikers, and begin building your persona without creating anything.' },
  { category: 'Technical', question: 'In what way do these drag names get created?', answer: 'The tool draws on curated lists of glamorous first names, punny and camp surnames, and fabulous vocabulary, then combines them in your browser so every run differs. Nothing is sent to a server. The output is for creative inspiration solely — an initial pool of stage-name ideas — and the lists are optimized to yield names that are memorable, quotable, and full of wordplay when spoken aloud.' },
  { category: 'Naming', question: 'What steps make my drag name stand out in memory?', answer: 'Lean into sound: alliteration (Trixie Mattel), rhythm, and a pun that pays off out loud all stick in the memory. Keep it brief enough to shout across a room and simple to spell for a flyer or handle. If a generated moniker is close, sharpen it — substitute a punchier surname, incorporate alliteration, or dial up the glamour. A name people can chant or quote is a moniker that gets remembered.' },
  { category: 'Best practices', question: 'Which errors must I steer clear of when choosing a drag name?', answer: 'Steer clear of a pun so cryptic the crowd misses the joke, as well as one too lengthy to announce easily. Do not accidentally duplicate a well-known local queen\'s established handle. Ensure the spelling is clear on a poster. Verify the tone matches your performance style — a delicate glamour title on a boisterous comedy queen gives mixed signals. Retain options that are punchy, memorable, on-brand, and distinctly yours.' },
  { category: 'Naming', question: 'Is it possible to create a single-word or mononym drag title?', answer: 'Indeed. Some of the most legendary names in drag are just one fierce word — Divine, Sasha, Sable, Venom. Produce a batch and select the standout first-name or glamour terms to use by themselves. A strong mononym shines when the term already holds attitude or elegance, so choose one that sounds striking spoken alone. You can always add a surname later if you want a complete stage name.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Every run supplies up to 24 names. For a larger pool, execute the generator multiple times and combine every batch into a single document, then filter out duplicates. There are no daily or total limits on runs, making batching the ideal workflow when you want a massive list of stage-name concepts to say aloud and sort through. Save the most powerful and memorable choices in a shortlist as you proceed.' },
  { category: 'General', question: 'Are these names from real queens or are they invented?', answer: 'They are original, crafted combinations made from glamorous and punny name elements instead of a database of active performers. The generator acts as a brainstorming aid for building your personal persona, so treat the results as raw material to refine rather than a list to copy verbatim. Always confirm that a favorite name is not already the recognized handle of an established local queen before adopting it yourself.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Drag Queen Name Generator without an internet connection?', answer: 'Yes. After the page finishes loading, the generator operates completely within your browser and needs no internet connection to create names. You can brainstorm stage names backstage or anywhere without Wi-Fi, and copying and pasting functions offline too. A connection is only required to load the page initially; afterward, every fabulous, punny batch is produced right on your device.' },
  { category: 'Naming', question: 'How can I select a drag name that fits my drag persona?', answer: 'Allow your persona to guide the title. A glamour queen needs something sophisticated and aspirational; a comedy queen requires a name that triggers instant laughter; a spooky or edgy performance demands darker, sharper wordplay. Pick your style first, then generate a batch and keep only names that match that tone — a soft glamour label on a rowdy comedy act sends conflicting messages. The ideal stage name previews your show before you step into the spotlight.' },
  { category: 'Use cases', question: 'Am I allowed to use these names for a drag handle on social media?', answer: 'Yes. A solid drag name doubles as your Instagram, TikTok, and booking handle, so pick one that reads clearly and is easy to spell for flyers and tags. Generate a batch, shortlist the punchy, quotable choices, and verify if the handle remains available on your platforms, since the tool provides ideas without checking availability. Keeping alternative options handy helps if your first pick belongs to another artist.' },
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
          <p className="text-slate-700">Frequent inquiries concerning the Drag Queen Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

