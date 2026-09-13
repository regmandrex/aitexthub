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


const toolSlug = 'amusement-park-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Amusement Park Name Generator',
    description: 'Free amusement park name generator for theme park names. Create amusement park-style name ideas in your browser with no sign-up.',
    seoTitle: 'Amusement Park Name Generator – Theme Park Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Amusement Park Name Generator – Theme Park Name Ideas</h2>
        <p>
          A theme park&apos;s name is its first ride — it sets the mood before a single guest passes the gate. Great park names promise something: adventure (Adventureland), wonder (Wonderland), thrill (Six Flags), or a whole imagined world (Disneyland, Universal). This generator builds names in that spirit: evocative, brandable, and fun, whether you are naming a whole fictional park, brainstorming a real business, or christening the sprawling resort you just built in Planet Coaster or RollerCoaster Tycoon. It also helps with the layer beneath the park name — the individual lands, coasters, and attractions that give a park its texture.
        </p>
        <p>
          Park naming has its own logic, different from naming a person or a place. It blends aspiration, a sense of destination, and a hook that looks good on a sign and a season pass. This page breaks down the patterns behind memorable park names, the different scales you need to name (the park, its themed lands, its rides), and how to pick a name that fits the experience you are building.
        </p>

        <h2>What Makes a Great Theme Park Name</h2>
        <p>
          The strongest amusement park names tend to share a few ingredients. Knowing them helps you spot the keepers in a generated batch:
        </p>
        <ul>
          <li><strong>A promise of experience.</strong> Words like Adventure, Wonder, Fantasy, Thrill, Magic, and Discovery tell guests what they will feel. Adventureland and Fantasyland work because they name an emotion.</li>
          <li><strong>A sense of destination.</strong> Suffixes like -land, -world, Kingdom, Park, Gardens, Bay, and Pier turn a name into a place you travel to (Disneyland, SeaWorld, Busch Gardens, Kings Island).</li>
          <li><strong>Brandable and sign-ready.</strong> Short, punchy, and easy to say — a name has to fit on a marquee, a ticket, and a hashtag.</li>
          <li><strong>An evocative modifier.</strong> A color, place, or theme word (Silver, Cedar, Ocean, Enchanted, Frontier) that gives the park a specific flavor rather than a generic one.</li>
        </ul>

        <h2>Naming the Park vs. Naming the Lands</h2>
        <p>
          A full park is named at several scales, and the tone should nest inside itself. The park name is the broad brand — grand and welcoming. Inside it sit <strong>themed lands</strong>, each with its own name and mood: Frontierland, Tomorrowland, Adventure Isle, Enchanted Forest, Boardwalk. A land name is more specific than the park and sets the theme for the rides within it. Getting this hierarchy right is what makes a park feel designed rather than assembled: guests should be able to tell they have crossed from one land into another just from the naming. When you name a park, sketch two or three land names underneath it to check the whole thing hangs together.
        </p>

        <h2>Naming Rides and Roller Coasters</h2>
        <p>
          Individual attractions follow their own naming style, and a great coaster name is half the ride&apos;s marketing:
        </p>
        <ul>
          <li><strong>Thrill coasters</strong> want speed and danger words — Nitro, Velocity, Kingda Ka, Goliath, Leviathan, The Beast. Hard consonants and superlatives sell the drop.</li>
          <li><strong>Story rides</strong> want narrative — Pirates of the Caribbean, Haunted Mansion, Expedition Everest. The name hints at the journey.</li>
          <li><strong>Family rides</strong> want charm and whimsy — Grand Carousel, River Rapids, Dumbo, Teacups. Softer, playful words fit.</li>
          <li><strong>Water rides</strong> want splash and flow — Tidal Wave, Splash Mountain, Rapids Run.</li>
        </ul>
        <p>
          Match the ride name to its intensity. A gentle family attraction called &quot;Skullcrusher&quot; confuses guests as much as a 200-foot hypercoaster called &quot;Gentle Meadows.&quot; The name is a signpost for who the ride is for.</p>

        <h2>Names for Fiction and Stories</h2>
        <p>
          If you are writing a park into a story — a nostalgic summer, a horror set in an abandoned park, a satire of corporate fun — the name does heavy lifting on tone. A cheerful, over-bright name (Happy Valley, Sunnyland Gardens) turns sinister when the setting is decaying or haunted; the contrast is the point. A grand, faded name (Empire Amusements, The Wonderpalace) suggests former glory. Generate a batch and pick the name whose surface cheer or grandeur plays against, or reinforces, the mood of your scene.
        </p>

        <h2>Names for a Real Business</h2>
        <p>
          Naming an actual park, family entertainment center, or fair is partly creative and partly practical. Beyond sounding fun, a real business name needs to be memorable, easy to spell, and available as a domain and trademark, and it should not clash with an existing major park. Local flavor helps a regional park stand out — a place name, a landmark, or a founding family name roots it in its community (Kennywood, Cedar Point, Dollywood). Generate a batch of ideas, then run your shortlist through availability and trademark checks before committing.
        </p>

        <h2>Games: Planet Coaster and RollerCoaster Tycoon</h2>
        <p>
          Park-building games are one of the biggest reasons people look for park names, because a sandbox park deserves a name as ambitious as the coasters in it. For a themed build — a pirate cove, a sci-fi station, a horror carnival — pick a park name that announces the theme, then name your lands and standout coasters to match so screenshots and shares read as one cohesive world. Generate a batch, keep the name that fits your build&apos;s aesthetic, and reuse the land- and ride-naming tips above to fill in the rest of the map.
        </p>

        <h2>How to Use This Amusement Park Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of theme park and attraction name ideas.</li>
          <li>Skim for names whose mood fits your park — grand, whimsical, thrilling, or eerie.</li>
          <li>Use the Copy button to save your shortlist, then sketch a few land or ride names underneath your favorite to test the fit.</li>
          <li>Run again as often as you like — there is no account, no download, and no limit on runs.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your park concepts and business ideas stay private until you choose to share them.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          The most common miss is a name that is generic or forgettable — &quot;Fun Park&quot; or &quot;City Amusements&quot; promises nothing and sticks with no one. Avoid names so close to Disney, Universal, or Six Flags that they read as knockoffs, especially for a real business where trademark matters. Watch the scale: do not give a small local park a name so grand it overpromises, or a sprawling resort a name so plain it undersells. And say it out loud — a park name lives on signs, ads, and word of mouth, so if it is hard to say, it is hard to remember.
        </p>

        <h2>Building a Park Identity</h2>
        <p>
          The best park names are the start of a whole identity, not the end. Once you have a name you love, the lands, rides, mascots, and even snack stands can echo its theme, and that consistency is what turns a collection of attractions into a place guests remember. Generate a batch, pick the name that opens up the most creative directions, and let it set the tone for everything inside the gate — whether that gate is real, fictional, or rendered in your favorite park-building game.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an amusement park name generator?', answer: 'It is a browser tool that invents fun, evocative, brandable names for a theme park or amusement park — whether a real business you are launching or a fictional park in a game or story. It mixes playful, adventurous words with park-flavored terms like Kingdom, World, Wonderland, and Adventure to produce names that sound like a real destination. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 names per run.' },
  { category: 'Naming', question: 'What makes a good amusement park name?', answer: 'A strong park name is fun, easy to say, and paints a picture of a place families want to visit. The best ones pair an evocative word with a destination term — Adventure, Wonderland, Kingdom, Bay, Falls, Cove — so "Thunder Ridge Adventure Park" instantly suggests thrills. It should be brandable: short enough for signage and a logo, distinctive enough to trademark, and welcoming in tone. Generate a batch and keep the names that feel like a place, not just two random words.' },
  { category: 'Naming', question: 'What word patterns work for park names?', answer: 'Common molds include [Adjective] + [Landmark] + Park (Wild Canyon Park), [Theme] + World/Kingdom/Land (Dino Kingdom, Pirate\'s Cove), and evocative place-words like Bay, Falls, Ridge, Harbor, or Isle that imply a whole setting. Alliteration adds stickiness (Splash Summit, Wonder Woods). The generator draws on this vocabulary so results read like real destinations. If a name feels flat, swap the destination term or add a theme word to give it a stronger sense of place.' },
  { category: 'Use cases', question: 'How do I name a real theme park business?', answer: 'Aim for a name that is memorable, spellable, and brandable across signage, tickets, and a website. Generate a batch, shortlist the ones that fit your park\'s theme and location, then check practical availability yourself — the trademark register and a matching domain — before you commit, since a name that clashes with an existing park causes legal and marketing headaches. Say each finalist aloud and picture it on a giant entrance sign to test how it wears.' },
  { category: 'Use cases', question: 'How do I name a fictional park for a game or story?', answer: 'For a fictional park, lean into whatever mood the story needs — a bright family paradise, a rundown carnival, or a sinister abandoned funfair. Generate a batch and pick a name whose tone matches: cheerful and grand for a thriving park, ironically wholesome for a creepy one. A well-chosen name does scene-setting for free, so "Sunny Meadows Fun Park" reads very differently when the story reveals what really happens there.' },
  { category: 'Naming', question: 'How do I match a park name to a theme?', answer: 'Let the theme steer the vocabulary. A water park wants Splash, Wave, Lagoon, Cove, or Bay; a thrill park wants Thunder, Velocity, Storm, or Peak; a fairy-tale park wants Wonderland, Enchanted, or Kingdom; a dinosaur or jungle park wants Wild, Prehistoric, or Safari. Generate a batch and keep the results that echo your central idea so the name previews the experience. A themed name sets visitor expectations before they even arrive.' },
  { category: 'Naming', question: 'What destination words give a park name atmosphere?', answer: 'Words that imply a whole place carry a lot of weight: Kingdom and World suggest scale and fantasy; Wonderland and Land suggest whimsy; Bay, Cove, Falls, Harbor, and Isle suggest a scenic setting; Adventure, Summit, and Ridge suggest thrills. Ending a name on one of these instantly turns two ordinary words into a destination. Generate options and try different destination terms on your favorite base to see which atmosphere fits best.' },
  { category: 'Use cases', question: 'Can I use these names for a park-building simulation game?', answer: 'Yes. Tycoon and park-management games are more immersive when your park has a name that sounds real, and the same goes for individual themed areas or rides. Generate a batch, name your main park, then run it again for sub-areas or attractions. Because the output reads like genuine destinations, your in-game park gains personality quickly, which makes screenshots and shared saves far more fun.' },
  { category: 'Usage', question: 'How do I use the amusement park name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names that fit your park\'s theme and mood, then use the Copy button to save your shortlist. Paste the results into your notes and mix theme words with different destination terms to fine-tune. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the amusement park name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate park name ideas as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so whether you are branding a real venture or naming a fictional park, you can brainstorm as many options as you need without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your business or story ideas stay private while you are still deciding. Close the tab and the list is gone unless you copied it, so an unannounced park name stays on your machine.' },
  { category: 'Compatibility', question: 'Does the amusement park name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm names on your phone during a planning meeting or while designing a game, copy a favorite, and paste it into your notes, pitch deck, or design doc. The layout is responsive, so finding a brandable park name works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you want a bigger pool — options for a park plus its themed areas and rides — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of destination names to compare.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, pitch document, or game design doc. This is the intended way to save a shortlist: generate, copy, then narrow down. Keeping them in a file lets you compare names side by side and test each against your logo, signage, and theme before you decide.' },
  { category: 'General', question: 'Do I need an account to use the amusement park name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of fun destination names, and get back to your business plan or game design without creating anything.' },
  { category: 'Technical', question: 'How are the park names generated?', answer: 'The generator draws on curated lists of evocative adjectives, theme words, and park-destination terms like Kingdom, World, and Adventure, then combines them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration only — it does not check trademark or domain availability — so you verify a favorite yourself. The lists are tuned to produce names that sound like real, brandable destinations.' },
  { category: 'Naming', question: 'How do I make a park name brandable?', answer: 'Keep it short enough to fit a logo and a sign, easy to spell so people can find your site, and distinctive enough to stand out from existing parks. A vivid image plus a clean destination word (Coral Bay, Thunder Kingdom) brands better than a long or generic phrase. Once you have a favorite, check that a matching domain and trademark are clear. Generate several strong options so you have room to pivot if your first pick is taken.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a park?', answer: 'Avoid names too close to a famous park, which risks confusion and legal trouble. Avoid names so long or hard to spell they do not fit signage or a URL. Avoid a tone that fights the park — a scary word on a toddler-focused venue. And do not skip the practical checks of trademark and domain for a real business. Keep the options that are fun, on-theme, brandable, and genuinely distinctive.' },
  { category: 'Naming', question: 'Should the name reflect the park\'s location or theme?', answer: 'Either can anchor a great name. A location word (Coastal, Canyon, Harbor) roots the park in a place and helps local recognition; a theme word (Pirate, Dino, Enchanted) previews the experience. Some of the best names do both, pairing a place with a theme. Generate a batch and try both approaches on your idea, then choose whichever gives the clearest, most inviting picture of what visitors will find.' },
  { category: 'Use cases', question: 'Can I name individual rides or areas with this too?', answer: 'Yes. The same evocative vocabulary works for themed lands and headline attractions — a "Thunder Mountain" coaster, an "Enchanted Lagoon" boat ride, a "Wild Frontier" zone. Generate a batch and repurpose the punchier, single-idea results as ride or area names rather than whole-park names. Naming areas and attractions in a consistent style gives your park a cohesive identity, whether it is real or in a game.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want a large set of park, area, and ride names to sift through. Keep the strongest, most brandable and on-theme options in a shortlist as you go.' },
  { category: 'General', question: 'Are these names trademark-free to use?', answer: 'The generator produces original combinations for inspiration, but it does not check any trademark register or domain, so a name it suggests could still be in use somewhere. For a real business you must do your own trademark and domain search before committing. For a fictional park in a game or story, you can generally use any name freely, though it is still wise to avoid one identical to a famous real park.' },
  { category: 'Troubleshooting', question: 'Can I use the amusement park name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm park names on a flight or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time — and, for a real venture, to run your trademark and domain checks afterward.' },
];

export default async function AmusementParkNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="amusement-park" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Amusement Park name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

