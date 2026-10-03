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


const toolSlug = 'drag-king-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Drag King Name Generator',
    description: 'Free Drag King Name Generator for stage monickers. Generate striking and unforgettable moniker concepts right in your browser with zero registration.',
    seoTitle: 'Drag King Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Drag King Name Generator - Conceptions for Moniker</h2>
        <p>A drag king is an entertainer -- typically a woman or a non-binary artist -- who constructs a masculine or androgynous stage persona and performs it: lip-syncing, dancing, comedy, live vocals, or theatrical acts. The stage name serves as the foundation of that persona. It is the initial detail an emcee announces, the name on the promotional flyer, and the handle the audience chants for an encore. This Drag King Name Generator generates stage name ideas in that exact spirit -- masculine puns, suave gentleman combinations, rugged archetypes, and macho personas played for camp -- directly inside your browser, requiring no registration. You receive 1-24 names per generation and can produce as many batches as you prefer.</p>
        <p>Drag king naming is its own craft featuring distinct conventions, and it differs from the flamboyant wordplay of drag queens. Where queen names lean glamorous and larger-than-life, king names embrace masculinity as a performance -- sometimes smooth and seductive, sometimes rough and gritty, and frequently nodding at male tropes through a pun. This guide explores the styles defining a strong king name so the option you choose establishes your character before you even step under the lights.</p>

        <h2>What Makes an Excellent Drag King Name</h2>
        <p>A drag king name performs character work the exact moment it is uttered. The strongest ones share several traits:</p>
        <ul>
          <li><strong>A clear masculine or gender-playful hook.</strong> The name should read as a man's name or a deliberate riff on masculinity -- a rugged noun, a classic guy's first name, or a pun on male stereotypes.</li>
          <li><strong>An identity already included.</strong> A moniker like "Spikey Van Dykey" signals slapstick; something like a "Rico Suave-style" performer indicates a lounge act. The chosen name telegraphs the stage vibe, musical format, and spirit of your routine.</li>
          <li><strong>Announce-ability.</strong> A king title needs to sound fantastic voiced by a host at the start of a set and once more as the audience cheers at the finish. Brief, punchy, and simple to say beats long and clever.</li>
        </ul>

        <h2>Masculine Wordplay and Double Entendres</h2>
        <p>Wordplay remains the core trick of drag naming, and kings apply their personal touch to it. A king pun typically plays on masculine tropes, male famous figures, manly jobs, or cheeky innuendo — the style of name that wins a chuckle prior to the music even launching. Think along the lines of a swaggering &quot;Justin Case,&quot; a smooth &quot;Hugh Jass&quot; vibe, or a spin on a famous leading man&apos;s title with a masculine twist. The joke signals straight away that the routine has a sense of humor, which is why so many funny kings anchor their entire identity to a pun. When a generated option prompts a pun, alter the spelling or switch a syllable to sharpen the punchline — the tool gives you the seed, and you deliver the joke.</p>

        <h2>The Sleek Gentleman Aesthetic</h2>
        <p>Not every king is a humorist. A huge branch of drag king naming is the suave gentleman: a sharp first title paired with a bold or evocative surname, evoking a lounge crooner, a matinee idol, a slick con artist, or an old-Hollywood heartthrob. Names in this family roll off the tongue and carry swagger — a smooth first name plus a surname with a bit of glamour or danger to it. This style suits kings whose numbers are seductive, romantic, or theatrical rather than played strictly for giggles. If you want this feel, watch your generated batch for first-and-last-name combos, and feel free to mix a first name from one outcome with a surname from another to craft the exact gentleman you want to enact.</p>

        <h2>Hardy Archetypes: Rockers, Cowboys, and Tough Guys</h2>
        <p>Another popular approach borrows classic male archetypes straight out of mainstream media: the outlaw, the motorcycle rider, the rocker, the GI, the 50s greaser, or the strongman. Monikers in this category utilize hard consonants, punchy nouns, and gritty concepts to make your identity unmistakable the second your act begins. Turn to this aesthetic whenever your king rocks out to heavy metal, country, or rap, rocks tough leather or rugged denim, and channels unvarnished masculine presence rather than cheeky humor. Pick the grittiest, consonant-packed options from the list and tweak one to align with your costume and setlist.</p>

        <h2>Over-the-Top and Campy Macho Personas</h2>
        <p>Drag is performance, and numerous kings play masculinity as deliberate, over-the-top camp — the exaggerated alpha, the parody of toxic bravado, the absurdly self-serious action hero. The name is where this exaggeration begins: something bombastic, chest-thumping, or ridiculously macho that alerts the audience that the whole act is a knowing send-up of male posturing. This is one of the sharpest tools in drag king comedy, because the gap between the grandiose name and the wink behind it is the punchline. If your act satirizes masculinity, favor the biggest, most swaggering choices in your batch and lean all the way in.</p>

        <h2>Picking a Name That Matches Your Character</h2>
        <p>The primary guiding principle is starting with your character, never the generated text. First define who your king represents — a sleek crooner, a leather-wearing rocker, a rapid-fire punster, or a parody macho bro — and retain only suggestions matching that vision. An ultra-smooth lounge lizard and a rowdy biker must not sport similar handles, even if each counts as &quot;drag king names.&quot; Practice speaking every contender like a venue emcee, noting if it introduces the exact vibe of your routine. That title must carry out storytelling work before you ever take a step on stage.</p>
        <p>Many kings additionally anchor their title to something personal — a riff on their real name, a hometown, a favorite music genre, or an inside joke — because a name with a story behind it feels authentic and is simple to discuss in interviews. Use the generator to spark ideas, then bend a promising outcome toward that personal hook.</p>

        <h2>How to Use This Drag King Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of king names you wish to generate at once (1–24).</li>
          <li>Press <strong>Generate names</strong> to produce a new set of drag king stage names.</li>
          <li>Organize the results by category — such as clever puns, elegant gentlemen, or tough archetypes — and save the ones that fit your character.</li>
          <li>Click the Copy button to store your favorites, then test each option out loud using an announcer&apos;s voice.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>All generation occurs locally inside your browser. Your preferences and generated names are never transmitted to any server, ensuring total confidentiality while you develop a new drag identity you prefer to keep secret for now — your concepts remain secure until you decide to reveal them.</p>

        <h2>Tips and Mistakes to Avoid</h2>
        <p>The most standard blunder involves picking a moniker that clashes with your show — using a silly pun for an intense, sensual set, or selecting an uninspired label for an extravagant camp act. Your name must seamlessly complement your stagecraft. Another frequent misstep is picking something too complex or tongue-tying to shout, considering an announcer must introduce you clearly and fans must chant your name. Finally, avoid inadvertently copying an active performer in your area, which creates awkward confusion during bookings, so investigate your regional drag circuit and social networks before rolling out a title. Prioritize tags that hit hard, suit your persona, and feel uniquely yours, holding a few backups ready in case your favorite is unavailable.</p>

        <h2>Privacy</h2>
        <p>This Drag King Name Generator operates completely inside your browser. When you choose a quantity and generate, the monikers are produced locally on your hardware — nothing gets uploaded, tracked, or saved on our servers. Shut the tab and the list disappears unless you saved it, ensuring your character ideas remain yours while you ponder.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag king name generator?', answer: 'This Drag King Name Generator operates as a web app delivering creative stage names for drag king performers. Drag kings develop an exaggerated masculine or gender-fluid character, and because that moniker provides your audience\'s first impression, the tool combines daring, cheeky, and thematic vocabulary tailored for king routines. It runs directly inside your web browser, requires no account creation, and yields 1–24 distinct concepts each round. Treat these suggestions as creative starting points to polish, adjusting spelling and word pairings to elevate your routine.' },
  { category: 'Naming', question: 'What constitutes a strong drag king performance moniker?', answer: 'An effective drag king stage name relies on a masculine or gender-bending twist coupled with playful personality. A lot of performers adopt humorous wordplay, a dashing two-part stage identity, an imposing noun, or a ridiculously macho trope magnified for comedic effect. Top-tier titles roll off the tongue during crowd cheers and signal the king\'s overarching persona, be it a suave balladeer, a metalhead, a dusty wrangler, or a charming rogue. Always recite your potential stage name out loud prior to making a final decision.' },
  { category: 'Naming', question: 'Which nomenclature styles do drag kings frequently adopt?', answer: 'Typical drag king naming conventions feature masculine puns and double entendres, traditional gentleman monikers (a crisp first name paired with a strong last name), rugged or archetypal nouns like cowboys and rockers, alongside over-the-top macho characters meant for comedy. Certain performers select a moniker that plays on their actual name, a birthplace, or a preferred musical genre. Create a selection and filter the choices by which approach matches the character you plan to portray, then tweak the spelling to make it personal.' },
  { category: 'Use cases', question: 'How should I select a title matching my drag king identity?', answer: 'Begin with the character rather than the list of words. Should your king be a polished lounge singer, choose elegant first-and-last-name pairings; if he represents a leather-wearing rocker, look toward tougher, sharper choices; when the performance is humorous, embrace puns and exaggerated masculinity. Create a set, highlight the monikers fitting your energy, and speak each one aloud as an announcer would introduce them. The name ought to establish the character before you step on stage.' },
  { category: 'Usage', question: 'How can someone operate the Drag King Name Generator?', answer: 'Select your preferred number of names (1-24) and hit Generate names to receive a fresh batch of drag king stage-name concepts. Review the list, select the ones that suit your character, and utilize the Copy button to store your shortlist in a notes application. Execute it again for additional choices; there is no restriction and no registration required. Afterward, test your top picks out loud to determine which one you would prefer an audience to chant.' },
  { category: 'General', question: 'Does the Drag King Name Generator cost anything?', answer: 'Yes. This Drag King Name Generator is entirely free to use directly in your web browser. You can create stage-name ideas as frequently as desired without opening an account, making payments, or downloading any files. There is no daily or total limit on uses, allowing you to brainstorm a large collection of persona names, sleep on it, and return to generate more whenever you are polishing your performance.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'No. The Drag King Name Generator operates completely inside your browser. When you select a quantity and press generate, the names are produced locally on your equipment — nothing gets uploaded, recorded, or saved on our servers. Your persona concepts remain confidential, which is important when you are developing a new drag identity you are not yet ready to unveil. Shut the browser tab and the list disappears unless you saved it.' },
  { category: 'Compatibility', question: 'Will the generator function on my mobile device?', answer: 'Yes. The Drag King Name Generator is responsive and works in any contemporary mobile browser, enabling you to brainstorm names backstage or while traveling. Open the webpage, pick the desired quantity of names, tap Generate, and copy your favorites directly into notes or a message sent to a drag mentor. No app installation is needed — it functions identically on smartphone, tablet, and desktop computer.' },
  { category: 'Limits', question: 'How many drag king names am I able to generate at a single time?', answer: 'You can request 1-24 names per generation. If a larger collection is desired, simply execute it again — every run delivers a new random selection with zero daily or total restrictions. Paste multiple runs into a single document and eliminate any duplicates. The 1-24 span keeps each batch simple to scan so you can rapidly identify the couple of persona names that genuinely represent your king.' },
  { category: 'Usage', question: 'Am I able to copy the names I prefer?', answer: 'Yes. Utilize the Copy button to transfer all produced names onto your clipboard as plain text, one per line, then paste them into a notes app, document, or message. This is the intended method for maintaining a shortlist while making your decision, since the generator does not store your runs. Copy every promising batch before generating again so you do not misplace a name you liked.' },
  { category: 'General', question: 'Do I need to sign up for an account or download anything?', answer: 'No. The Drag King Name Generator functions with zero registration, login, or software installation. Launch the webpage, configure the number of names you need, click generate, and copy the outcomes. There is no email submission or sign-up phase and nothing to download — it is a self-contained browser utility, making it convenient to pull up quickly whenever inspiration for a fresh persona arrives.' },
  { category: 'Naming', question: 'How do wordplay and double entendres function within king names?', answer: 'Wordplay represents a hallmark of drag naming across both sides of the stage, and kings frequently employ a masculine pun or cheeky double entendre to indicate that the act possesses a sense of humor. A punny name secures laughter before the routine even commences and ensures the king stays memorable. When a generated selection inspires wordplay, try modifying the spelling or altering a syllable to sharpen the punchline — the tool delivers the seed, and you execute the joke.' },
  { category: 'Naming', question: 'Am I able to construct a suave gentleman-style king name?', answer: 'Definitely. A traditional approach involves a sharp first name combined with a bold or evocative surname, the sort of title resembling a lounge singer or matinee idol. Generate a collection, look for first-and-last-name combinations that flow naturally, and choose one fitting the swagger of your act. You can also mix a first name originating from one generated option with a surname from another to form the precise gentleman persona you desire.' },
  { category: 'Use cases', question: 'Can I utilize this for a rugged, cowboy, or rockstar persona?', answer: 'Yes. For a rugged archetype — cowboy, biker, rocker, or tough-guy — favor the harsher, more masculine nouns along with edgier combinations within the batch. These names rely on strong consonants and bold imagery so the persona communicates clearly the second you are announced. Generate a set, retain the grittier choices, and refine one into a name matching the costume and music your king performs to.' },
  { category: 'Technical', question: 'How are the drag king names produced?', answer: 'The generator pulls from curated word lists designed specifically for drag king personas — masculine nouns, puny fragments, gentleman-style names, and macho archetypes — and randomly merges them inside your browser each time you click generate. Nothing gets transmitted to a server, and every execution is separate, meaning the list varies each time. The output serves as a creative seed, not an official or canon name database, so treat every result as raw material for your persona.' },
  { category: 'Best practices', question: 'What constitutes the optimal workflow for selecting a king name?', answer: 'Set the quantity to 12 or 24, generate, and copy the batch into a notes application. Read each name aloud using an announcer\'s tone and mark those fitting your persona\'s attitude. Shortlist five to ten, live with them for a day, then test your top choice with a drag mentor or friend. Run the generator once more whenever fresh options are desired — the low-pressure, no-account process is tailored specifically for this style of iterative brainstorming.' },
  { category: 'Best practices', question: 'What errors ought I to steer clear of when naming a drag king?', answer: 'The most frequent mistake involves a name conflicting with the persona — a comedic pun applied to a serious dramatic act, or a bland title attached to an extravagant camp character. Another is selecting something excessively long or difficult to shout, as an emcee must announce it clearly. A third entails copying an established king operating within your local scene, creating confusion during gigs. Prioritize names that are punchy, persona-appropriate, and distinct to you.' },
  { category: 'Use cases', question: 'Can I use the generator to name characters featured in a story?', answer: 'Yes. Authors and role-players utilize it to name drag king characters or masc-presenting performers within fiction. Generate a batch, assign contrasting names to different characters — a suave crooner opposed to a rowdy rocker — so readers can differentiate them, and adjust spelling to match individual personalities. The tool provides a rapid source of persona-flavored names; the character creation and backstory are yours to develop around them.' },
  { category: 'Naming', question: 'Should my king name connect to my actual name or personal interests?', answer: 'Numerous kings anchor their stage name to something personal — a variation of their real name, a hometown, a music genre, or an inside joke — because it renders the persona genuine and simple to recall. Generate a batch to ignite ideas, then bend a promising outcome toward that personal hook. A title accompanied by a backstory is simpler to discuss during interviews and grants your act additional depth.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Each execution tops out at 24 names, yet there is no restriction concerning how many times you can run it. To compile a larger collection, generate multiple batches and paste them into a single document, then eliminate any duplicates. This batching method represents the intended strategy for accumulating a substantial list of persona candidates before narrowing down to the name you wish to perform under.' },
  { category: 'Privacy', question: 'Are the generated names saved by you?', answer: 'No. Generation takes place locally inside your browser, meaning we never collect or save your generated names or settings. You are welcome to run the utility inside a private or incognito window if preferred. Refreshing the browser erases the latest batch unless you have already copied it, which is why copying your preferred choices on the fly is the safest approach while you are still deciding on a persona name.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the generator offline?', answer: 'Yes. Once the page finishes loading, the Drag King Name Generator operates entirely within your browser and requires zero internet connection to generate names. You can brainstorm persona names offline — backstage, on a plane, or any location lacking signal — and copying to your clipboard functions offline as well. You simply need connectivity to load the site initially.' },
  { category: 'General', question: 'Are the produced handles pre-existing trademarks or official?', answer: 'No. The names are random creative combinations rather than entries from any official drag database, and the utility does not verify if a name is currently utilized by a performer or trademarked. Because drag names represent a personal stage identity, it is smart to check your local scene and social media channels to ensure no active king is already using your selection before you debut it. Maintain a shortlist so you have alternatives if your first pick is taken.' },
];

export default async function DragKingNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="drag-king" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Drag King Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

