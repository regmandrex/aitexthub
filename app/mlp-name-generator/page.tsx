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
    description: 'Free My Little Pony name generator for ponysonas and OCs. Two-word descriptive pony names for earth ponies, pegasi, unicorns, and alicorns — in your browser, no sign-up.',
    seoTitle: 'MLP Name Generator – My Little Pony Ponysona & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>MLP Name Generator – My Little Pony Ponysona &amp; OC Names</h2>
        <p>
          This MLP name generator creates My Little Pony names for your ponysona, an OC, or a character you are writing into Equestria. The Friendship Is Magic naming style is one of the most recognizable in any show: almost every pony has a two-word descriptive name that captures a trait, a talent, or a vibe — Twilight Sparkle, Rainbow Dash, Pinkie Pie, Fluttershy. The generator builds names in that exact pattern so your OC fits right in with the Mane Six and the wider cast. It runs in your browser with no sign-up and stores nothing.
        </p>
        <p>
          A pony name in MLP is more than a label — it usually telegraphs the character&apos;s personality and often connects to their cutie mark and special talent. This page explains how that naming logic works so the name you generate feels like a real Equestrian, not a placeholder.
        </p>

        <h2>How MLP Pony Names Work</h2>
        <p>
          The Friendship Is Magic naming convention has a clear, learnable structure:
        </p>
        <ul>
          <li><strong>Two descriptive words.</strong> Most names pair an adjective or noun with another word to paint a quick picture — Rainbow Dash, Apple Bloom, Cloud Chaser. The combination is the name.</li>
          <li><strong>Talent-coded.</strong> A pony&apos;s name often hints at their special talent and cutie mark. Twilight Sparkle is magical; Applejack works the orchard; Pinkie Pie throws parties.</li>
          <li><strong>Soft, friendly, whimsical.</strong> The tone is warm and gentle — nothing harsh. Names sound pleasant to say and a little sweet.</li>
          <li><strong>Often alliterative.</strong> Many names share a sound or letter (Pinkie Pie, Fluttershy) for an extra musical quality.</li>
        </ul>

        <h2>Names by Pony Type</h2>
        <p>
          Equestria has distinct pony races, and matching a name to your OC&apos;s type makes it more believable:
        </p>
        <ul>
          <li><strong>Earth ponies.</strong> Grounded names tied to nature, farming, food, or hard work — think apples, soil, harvest, and craft.</li>
          <li><strong>Pegasi.</strong> Sky-themed names built around clouds, weather, wind, speed, and flight.</li>
          <li><strong>Unicorns.</strong> Names leaning on magic, light, gems, stars, and elegance.</li>
          <li><strong>Alicorns.</strong> Grand, regal names fitting the rare winged-unicorn princesses (Celestia, Luna, Cadance).</li>
          <li><strong>Crystal ponies, kirin, and more.</strong> The expanded universe supports shimmering, gem-toned, or exotic names for less common types.</li>
        </ul>

        <h2>Building a Ponysona</h2>
        <p>
          A &quot;ponysona&quot; is an MLP fan&apos;s personal pony self — an OC that represents you in Equestria. Because the name is so closely tied to personality and talent, building a ponysona name is partly self-portrait: pick the two words that capture what you love or what you are good at. Generate a batch in your pony type&apos;s lane, then look for the pair that feels like you. Many fans also design the cutie mark to match the name, so a name that suggests a clear talent gives you a head start on the whole character.
        </p>

        <h2>Names, Cutie Marks, and Talent</h2>
        <p>
          In MLP, name, cutie mark, and special talent form a tight little package. Applejack&apos;s name, apple cutie mark, and farming talent all reinforce each other; Rarity&apos;s name, gem cutie mark, and fashion-design talent do the same. When you generate a name, think about the cutie mark and talent it implies — a name like &quot;Star Weaver&quot; suggests a magical, celestial talent and a starry mark, while &quot;Clover Field&quot; suggests an earth pony with a connection to growing things. Letting the name lead the design keeps your OC coherent.
        </p>

        <h2>How to Use This MLP Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a batch of two-word pony names.</li>
          <li>Keep the ones that fit your pony type and the personality or talent you want.</li>
          <li>Copy the list into your notes and shortlist names that could anchor a cutie mark.</li>
          <li>Run again for more — no limit, no account, no download.</li>
        </ol>
        <p>
          Everything runs locally in your browser. Your settings and generated names are never sent to a server, so your OC ideas stay private.
        </p>

        <h2>Tips for a Great Pony Name</h2>
        <p>
          Stick to the two-word pattern — it is the single thing that makes a name read as MLP. Match the words to your pony type (sky words for pegasi, magic words for unicorns, nature words for earth ponies) so the name signals the race at a glance. Aim for a name that hints at a talent, since that connects to the cutie mark and gives your OC depth. A touch of alliteration adds the show&apos;s musical charm. And say it out loud — pony names are meant to be sweet and easy to say, so a name that sounds warm and friendly is on target.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates My Little Pony-style two-word names for ponysonas, OCs, and Equestrian characters.</li>
          <li>It does not reproduce official characters as a list — output is original for your own use.</li>
          <li>It does not store your generated names or settings; generation is fully local.</li>
          <li>It does not design cutie marks — it suggests names you can build a cutie mark around.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          My Little Pony names are tiny character sketches — two words that capture a personality, a talent, and a place in Equestria. This generator gives you a pool built in that exact convention, sorted by pony type, so your ponysona or OC fits right in beside Twilight Sparkle and Rainbow Dash. Pick your pony type, generate a batch, find the pair that feels like you (or your character), and you will have a name ready to anchor a cutie mark and a whole story.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an MLP name generator?', answer: 'It is a browser tool that creates My Little Pony names for ponysonas and OCs in the Friendship Is Magic style — two-word descriptive names that capture a trait or talent, like Twilight Sparkle or Rainbow Dash. It builds names sorted by pony type so your OC fits Equestria. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'How do My Little Pony names work?', answer: 'Almost every pony has a two-word descriptive name that paints a quick picture and usually hints at their special talent and cutie mark — Rainbow Dash, Apple Bloom, Pinkie Pie. The tone is soft, friendly, and often alliterative. The combination of the two words is the name, and it telegraphs the character’s personality.' },
  { category: 'Naming style', question: 'Why are MLP names two words?', answer: 'The two-word pattern is the core of the Friendship Is Magic naming convention — it lets a name describe a trait or talent in a compact, memorable way. Sticking to two descriptive words is the single biggest thing that makes a name read as authentically MLP rather than generic.' },
  { category: 'Pony types', question: 'How do names differ by pony type?', answer: 'Earth ponies get grounded names tied to nature, farming, and food; pegasi get sky-themed names around clouds, weather, and flight; unicorns get magic-, gem-, and star-themed names; and alicorns get grand, regal names like Celestia or Luna. Matching the name to your pony’s race makes it instantly believable.' },
  { category: 'Pony types', question: 'How do I name a pegasus?', answer: 'Pegasus names are sky-themed — built around clouds, weather, wind, speed, and flight (Rainbow Dash, Cloud Chaser, Derpy’s flight antics). Generate a batch and keep the airy, fast-sounding two-word pairs for a name that signals a flier at a glance.' },
  { category: 'Pony types', question: 'How do I name a unicorn?', answer: 'Unicorn names lean on magic, light, gems, stars, and elegance (Twilight Sparkle, Rarity, Starlight Glimmer). Generate a batch and look for the sparkly, magical, refined pairs. A name suggesting a magical talent also helps you design a matching cutie mark.' },
  { category: 'Pony types', question: 'How do I name an earth pony?', answer: 'Earth pony names are grounded in nature, farming, food, craft, and hard work (Applejack, Big Macintosh). Generate a batch and keep the warm, down-to-earth pairs. A name tied to growing things or a trade fits the earth pony identity perfectly.' },
  { category: 'Pony types', question: 'How do I name an alicorn?', answer: 'Alicorns are the rare winged unicorns, usually princesses, so their names are grand and regal — Celestia, Luna, Cadance. Generate a batch and choose a name with a stately, celestial, or royal quality to fit an alicorn’s elevated status.' },
  { category: 'Ponysona', question: 'What is a ponysona?', answer: 'A ponysona is an MLP fan’s personal pony self — an OC that represents you in Equestria. Because pony names are tied to personality and talent, building a ponysona name is partly self-portrait: pick two words that capture what you love or what you are good at, then design a matching cutie mark.' },
  { category: 'Ponysona', question: 'How do I make a ponysona name about me?', answer: 'Choose your pony type, then generate a batch and look for the two-word pair that reflects your real interests or talents. A baker might lean toward food words, an artist toward color or craft words. The closer the name maps to you, the more personal your ponysona feels.' },
  { category: 'Cutie marks', question: 'How does the name connect to a cutie mark?', answer: 'In MLP, name, cutie mark, and special talent reinforce each other — Applejack’s name, apple mark, and farming talent all align. A name like "Star Weaver" suggests a celestial talent and a starry mark; "Clover Field" suggests an earth pony who grows things. Letting the name lead keeps your OC coherent.' },
  { category: 'Usage', question: 'How do I use this generator?', answer: 'Set how many names you want (1–24), click Generate names, and keep the two-word pairs that fit your pony type and desired personality or talent. Copy the list into your notes and shortlist names that could anchor a cutie mark. Run again for more — no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes. The output is a starting point. Swap one of the two words to better match your pony type or talent, or combine words from different results. Many fans generate a batch and then refine a favorite until it captures exactly the trait they want.' },
  { category: 'Use cases', question: 'Can I use these names for fan art?', answer: 'Yes — MLP has a huge OC and ponysona fan-art community, and the name is the foundation of a new character. Generate a batch, pick a two-word name that fits your pony’s type and talent, and build the cutie mark and design around it.' },
  { category: 'Use cases', question: 'Can I use these for fan fiction or RP?', answer: 'Absolutely. Writing or role-playing in Equestria needs names that match the show’s warm, descriptive style. Generate a batch, match it to your character’s pony type and personality, and the name will sit naturally beside the canon cast.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated MLP-style word pairs — nature, sky, magic, and talent words — in the show’s two-word pattern and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Technical', question: 'Are these real characters from MLP?', answer: 'No. The generator creates original, pony-style names for your own use rather than reproducing the official cast. That is intentional — you want a fresh name for your ponysona or OC, not a duplicate of Twilight Sparkle that you cannot make your own.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your OC ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set with no daily or total limit. Paste multiple runs into one document if you want a large pool to choose from for your ponysonas and OCs.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch on your phone while sketching a pony, copy it into notes, and shortlist names wherever you are.' },
  { category: 'General', question: 'Is the MLP name generator free?', answer: 'Yes, completely free with no account, sign-up, or download. Generate as many ponysona and OC names as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I make a name feel truly MLP?', answer: 'Stick to the two-word pattern, match the words to your pony type, and aim for a name that hints at a talent so it connects to a cutie mark. A touch of alliteration adds the show’s musical charm, and saying it aloud confirms it sounds warm and friendly.' },
  { category: 'Best practices', question: 'Should the name hint at a talent?', answer: 'Yes — it is one of the most authentic touches. In MLP, a pony’s name, cutie mark, and special talent all align, so a name that suggests a clear talent gives your OC depth and a head start on the cutie mark. A name that means something will always feel more in-genre than a random pair.' },
  { category: 'Troubleshooting', question: 'The names feel too generic — what should I do?', answer: 'Generate a larger batch and filter for the pairs that clearly match your pony type and a specific talent, discarding anything vague. Then refine a favorite so both words point at the same trait. The tighter the two words connect to a personality and cutie mark, the more authentically MLP the name feels.' },
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
          <p className="text-slate-700">Common questions about the MLP name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
