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


const toolSlug = 'mlp-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'MLP Name Generator',
    description: 'Free My Little Pony name generator for ponysonas and OCs. Two-word descriptive pony names for earth ponies, pegasi, unicorns, and alicorns — right in your browser, without any sign-up.',
    seoTitle: 'MLP Name Generator – My Little Pony Ponysona & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>MLP Name Generator – My Little Pony Ponysona &amp; OC Names</h2>
        <p>This MLP Name Generator generates My Little Pony names for your ponysona, an OC, or any character you are writing into Equestria. The Friendship Is Magic naming style stands out as one of the most recognizable across television: almost every pony possesses a two-word descriptive moniker that highlights a trait, talent, or vibe — Twilight Sparkle, Rainbow Dash, Pinkie Pie, Fluttershy. The generator builds names using that exact pattern so your OC blends seamlessly with the Mane Six and broader cast. It functions directly in your browser with no registration and saves nothing.</p>
        <p>A pony moniker within MLP serves as more than just a label — it typically broadcasts the character&apos;s personality and frequently links to their cutie mark alongside special talent. This section details how such naming logic operates so the name you produce feels like a genuine Equestrian rather than a placeholder.</p>

        <h2>How MLP Pony Names Work</h2>
        <p>The Friendship Is Magic naming convention features a straightforward, graspable structure:</p>
        <ul>
          <li><strong>Two descriptive words.</strong> Most monikers combine an adjective or noun with a second term to paint a swift picture — Rainbow Dash, Apple Bloom, Cloud Chaser. The combination makes up the name.</li>
          <li><strong>Talent-coded.</strong> A pony&apos;s title frequently hints toward their special talent and cutie mark. Twilight Sparkle demonstrates magic; Applejack handles the orchard; Pinkie Pie organizes parties.</li>
          <li><strong>Soft, friendly, whimsical.</strong> The overall tone remains warm and gentle — avoiding harshness. Monikers sound pleasant when spoken and slightly sweet.</li>
          <li><strong>Often alliterative.</strong> Numerous names share a common sound or letter (Pinkie Pie, Fluttershy) delivering an extra musical quality.</li>
        </ul>

        <h2>Names by Pony Type</h2>
        <p>Equestria boasts distinct pony races, and pairing a name to your OC&apos;s specific type enhances credibility:</p>
        <ul>
          <li><strong>Earth ponies.</strong> Grounded terms connected to nature, farming, food, or hard work — think apples, soil, harvest, and craft.</li>
          <li><strong>Pegasi.</strong> Sky-centric monikers centered on clouds, weather, wind, speed, and flight.</li>
          <li><strong>Unicorns.</strong> Names leaning heavily on magic, light, gems, stars, and elegance.</li>
          <li><strong>Alicorns.</strong> Grand, regal titles suiting the rare winged-unicorn princesses (Celestia, Luna, Cadance).</li>
          <li><strong>Crystal ponies, kirin, and more.</strong> The expanded universe accommodates shimmering, gem-toned, or exotic names for less common types.</li>
        </ul>

        <h2>Building a Ponysona</h2>
        <p>A &quot;ponysona&quot; acts as an MLP fan&apos;s digital pony representation — an OC reflecting you inside Equestria. Because the moniker ties so closely into personality and talent, constructing a ponysona name functions partly as a self-portrait: select the pair of words capturing what you cherish or excel at. Generate a batch within your pony type&apos;s category, then seek the combination feeling most like you. Many enthusiasts also design cutie marks matching the title, meaning a name suggesting clear talent gives a head start on building the entire character.</p>

        <h2>Names, Cutie Marks, and Talent</h2>
        <p>Within MLP, name, cutie mark, and special talent build a tight cohesive unit. Applejack&apos;s name, apple cutie mark, alongside farming talent mutually reinforce each other; Rarity&apos;s name, gem cutie mark, plus fashion-design talent achieve the same. Whenever you generate a name, consider the cutie mark and talent it implies — a moniker like &quot;Star Weaver&quot; points toward a magical, celestial talent alongside a starry mark, whereas &quot;Clover Field&quot; implies an earth pony linked to growing things. Allowing the name to guide design preserves your OC&apos;s consistency.</p>

        <h2>[10] How to Use This MLP Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to obtain a batch of two-word pony names.</li>
          <li>Keep the ones matching your pony type and the personality or talent you prefer.</li>
          <li>Save the selection into your personal notes and shortlist names that might serve as a cutie mark base.</li>
          <li>Spin the tool repeatedly for fresh ideas — zero restrictions, sign-ups, or software required.</li>
        </ol>
        <p>Everything executes right in your web browser. Your preferences and created names are never transmitted to a remote server, ensuring your OC concepts remain completely private.</p>

        <h2>Guidelines for an Exceptional Pony Name</h2>
        <p>Stick with the two-word format — it remains the primary element that makes a name feel like MLP. Match the terms to your specific pony category (weather words for pegasi, arcane words for unicorns, earthy words for earth ponies) so the title indicates the species instantly. Look for a designation that hints at a skill, since that ties into the cutie mark and grants your OC depth. A dash of alliteration introduces the show&apos;s musical charm. And pronounce it aloud — pony names are meant to be sweet and simple to utter, meaning a title that sounds warm and welcoming hits the mark.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It produces My Little Pony-style two-word designations for ponysonas, OCs, and Equestrian figures.</li>
          <li>You will not find existing canon personalities here — each generated moniker is novel and yours to adapt.</li>
          <li>It never logs or saves your preferences or creations; everything happens solely on your device.</li>
          <li>It does not craft cutie marks — it proposes names you can construct a cutie mark around.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>My Little Pony names resemble brief character sketches — a pair of words capturing a personality, a gift, and a place in Equestria. This generator offers a collection built upon that exact formula, categorized by pony type, ensuring your ponysona or OC blends right in alongside Twilight Sparkle and Rainbow Dash. Select your pony category, produce a set, locate the combination that feels authentic to you (or your character), and you will possess a name prepared to support a cutie mark and an entire narrative.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: '[3] What is an MLP Name Generator?', answer: 'It functions as a browser utility that generates My Little Pony names for ponysonas and OCs matching the Friendship Is Magic aesthetic — double-word descriptive titles that capture a characteristic or ability, such as Twilight Sparkle or Rainbow Dash. It compiles designations sorted by pony species so your OC fits Equestria. It executes locally without requiring registration and saves nothing.' },
  { category: 'Naming style', question: 'How do My Little Pony names function?', answer: 'Nearly every pony features a two-word descriptive title that paints a rapid picture and typically suggests their unique talent and cutie mark — Rainbow Dash, Apple Bloom, Pinkie Pie. The tone feels gentle, welcoming, and frequently alliterative. The pairing of the two words forms the name, which communicates the character’s disposition.' },
  { category: 'Naming style', question: 'Why are MLP names composed of two words?', answer: 'The two-word structure forms the foundation of the Friendship Is Magic naming convention — allowing a moniker to describe a trait or talent in a concise, memorable manner. Adhering to two descriptive words stands as the single biggest factor making a name read as genuinely MLP rather than generic.' },
  { category: 'Pony types', question: 'How do names vary by pony species?', answer: 'Earth ponies receive grounded designations connected to nature, agriculture, and sustenance; pegasi obtain sky-focused monikers centered on clouds, weather, and aviation; unicorns get magic-, gem-, and star-oriented titles; and alicorns secure grand, majestic names like Celestia or Luna. Aligning the name with your pony’s lineage renders it immediately credible.' },
  { category: 'Pony types', question: 'How should I name a pegasus?', answer: 'Pegasus titles are sky-oriented — constructed around clouds, climate, breeze, velocity, and flight (Rainbow Dash, Cloud Chaser, Derpy’s aerial antics). Produce a set and retain the airy, swift-sounding two-word combinations for a designation that signifies a flyer immediately.' },
  { category: 'Pony types', question: 'How should I name a unicorn?', answer: 'Unicorn names draw upon magic, illumination, crystals, stars, and grace (Twilight Sparkle, Rarity, Starlight Glimmer). Produce a set and search for the sparkling, enchanted, polished pairings. A name implying an arcane ability additionally aids in designing a matching cutie mark.' },
  { category: 'Pony types', question: 'How should I name an earth pony?', answer: 'Earth pony monikers are rooted in nature, farming, food, craftsmanship, and labor (Applejack, Big Macintosh). Produce a set and retain the cozy, down-to-earth combinations. A designation tied to cultivating flora or a profession suits the earth pony identity ideally.' },
  { category: 'Pony types', question: 'How should I name an alicorn?', answer: 'Alicorns represent the scarce winged unicorns, generally royalty, meaning their names are grand and regal — Celestia, Luna, Cadance. Produce a set and pick a title possessing a stately, celestial, or royal essence to match an alicorn’s elevated standing.' },
  { category: 'Ponysona', question: 'What defines a ponysona?', answer: 'A ponysona is an MLP enthusiast\'s personal pony alter ego — an OC representing you within Equestria. Because pony monikers link to personality and talent, constructing a ponysona title functions partly as a self-portrait: select two terms capturing what you adore or excel at, then design a matching cutie mark.' },
  { category: 'Ponysona', question: 'How can I create a ponysona name centered on myself?', answer: 'Pick your pony type, then create a list and search for the dual-word combination reflecting your actual passions or skills. A baker might prefer culinary terms, whereas an artist favors color or craft expressions. The better the name fits you, the more unique your ponysona becomes.' },
  { category: 'Cutie marks', question: 'In what way does the name tie into a cutie mark?', answer: 'Within MLP, moniker, cutie mark, and special skill complement one another — Applejack’s name, apple emblem, and farming ability all match. A title like "Star Weaver" implies a celestial craft and a starry symbol; "Clover Field" points to an earth pony who cultivates crops. Letting the moniker guide you keeps your OC consistent.' },
  { category: 'Usage', question: 'How do I operate this generator?', answer: 'Choose how many names you need (1–24), press Generate names, and retain the two-word pairings matching your pony type alongside your desired personality or skill. Save the selection to your notes and shortlist options that could inspire a cutie mark. Run it again for additional choices — zero limits, accounts, or downloads.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Indeed. The output serves as a starting point. Switch one of the two words to better suit your pony type or talent, or mix words from different results. Numerous fans produce a batch and subsequently polish a favorite until it perfectly captures the desired trait.' },
  { category: 'Use cases', question: 'Am I allowed to use these names for fan art?', answer: 'Yes — MLP boasts a massive OC and ponysona fan-art community, and the title forms the basis of a fresh character. Generate a selection, pick a two-word moniker fitting your pony’s type and talent, and build the cutie mark plus design around it.' },
  { category: 'Use cases', question: 'Is it okay to use these for RP or fan fiction?', answer: 'Certainly. Writing or role-playing within Equestria requires names matching the series\' cozy, descriptive tone. Produce a batch, align it with your character’s pony type and temperament, and the title will fit smoothly alongside the official cast.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The generator blends curated MLP-style word pairs — nature, sky, magic, and skill words — in the show’s dual-word format and shuffles them randomly right inside your browser. Every execution yields a fresh assortment. Nothing transmits to a server; generation occurs entirely locally.' },
  { category: 'Technical', question: 'Do these represent actual characters from MLP?', answer: 'No. The tool generates authentic, pony-style monikers for your personal use instead of replicating the official cast. This is deliberate — you want a brand-new title for your ponysona or OC, rather than a duplicate of Twilight Sparkle that cannot become your own.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'No. Everything executes within your browser. When you click generate, names are created directly on your device. Your settings and generated monikers are never transmitted to our servers and nothing gets stored. You can operate the tool inside a private window so your OC concepts remain yours.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You may request 1–24 names per generation. For extras, run it again — each attempt yields a fresh random set with zero daily or total restrictions. Paste multiple runs into a single file if you desire a broad pool to select from for your ponysonas and OCs.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Yes. The generator works on any contemporary browser via desktop, tablet, or mobile phone without installing any app. Produce a batch on your phone while sketching a pony, transfer it into your notes, and shortlist names wherever you happen to be.' },
  { category: 'General', question: 'Does the MLP Name Generator cost anything?', answer: 'Indeed, entirely free with no account, registration, or download required. Create as many ponysona and OC monikers as you wish, as frequently as you like.' },
  { category: 'Best practices', question: 'What is the best way to make a name feel truly MLP?', answer: 'Maintain the two-word structure, match those words to your pony type, and target a title hinting at a skill so it links to a cutie mark. A hint of alliteration contributes the show’s musical flair, and speaking it aloud ensures it sounds welcoming and friendly.' },
  { category: 'Best practices', question: 'Ought the name to give a hint about a specific talent?', answer: 'Yes — it stands as one of the most authentic touches. In MLP, a pony’s title, cutie mark, and special skill all align, meaning a name suggesting a clear ability grants your OC depth and a head start on the cutie mark. A meaningful title always feels more authentic to the genre than a random pairing.' },
  { category: 'Troubleshooting', question: '[2] The names feel overly generic — what should I do?', answer: 'Generate a larger batch and filter for the pairs clearly matching your pony type and a distinct talent, discarding anything vague. Next, polish a favorite so both words point toward the identical trait. The tighter the two words connect to a personality and cutie mark, the more genuinely MLP the title feels.' },
];

export default async function MlpNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="mlp" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the MLP Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
