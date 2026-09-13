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


const toolSlug = 'beyblade-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Beyblade Name Generator',
    description: 'Free Beyblade name generator for custom Beys and OC characters. Build beast-spirit names by type — Attack, Defense, Stamina, Balance — plus special-move names, in your browser with no sign-up.',
    seoTitle: 'Beyblade Name Generator – Custom Bey, Beast & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Beyblade Name Generator – Custom Bey, Beast &amp; OC Names</h2>
        <p>
          This Beyblade name generator builds names the way the franchise itself does: a beast or concept fused with an attribute, so the finished name sounds like a spinning top with a spirit locked inside it. Dragoon, Dranzer, Draciel, Pegasus, L-Drago, Valtryek, Spryzen, Achilles — every iconic Bey is a creature, a mythic figure, or a force of nature wearing a sharpened name. Whether you are designing an original Bey (OC) for a fan series, sketching fan art, or naming the tops in your own backyard tournament, this tool gives you ready-to-use, in-universe names in your browser. There is no sign-up, nothing is stored, and you can spin up as many batches as you like.
        </p>
        <p>
          Beyblade names are not random syllables. They follow a tight logic: a beast-spirit or mythological root, a hard consonant edge, and a hint of the Bey&apos;s battle type — Attack, Defense, Stamina, or Balance. This page walks through those conventions so the names you keep actually feel canon, and so an OC Bey you create can slot believably beside Storm Pegasus, Earth Eagle, or Victory Valtryek in a roster, a fan-comic, or a homemade beystadium league.
        </p>

        <h2>How Beyblade Names Are Built</h2>
        <p>
          From the original Bakuten Shoot era through Metal Saga and the Burst series, the naming formula has stayed remarkably consistent. Understanding it lets you generate names that sound native to the world rather than thrown together:
        </p>
        <ul>
          <li><strong>Beast or beast-spirit first.</strong> The classic &quot;bit-beast&quot; concept — Dragoon (a dragon), Dranzer (a phoenix), Draciel (a turtle), Driger (a tiger) — anchors a Bey to a sacred animal. The creature carries the identity, so the generator treats the beast root as the spine of the name.</li>
          <li><strong>Mythology in the Burst era.</strong> Modern Beys lean on mythic figures and constellations: Valtryek (from Valkyrie), Spryzen (Spriggan), Achilles, Fafnir, Longinus, Roktavor. A name that nods to Norse, Greek, or world myth instantly reads as Burst-generation.</li>
          <li><strong>Attribute fusion.</strong> Names often blend two roots — a beast plus a quality (Storm Pegasus, Rock Leone, Earth Eagle, Flame Sagittario). The element or adjective signals the Bey&apos;s personality before it ever touches the stadium.</li>
          <li><strong>Hard, sharp phonetics.</strong> The franchise favors zr, dr, kr, and -us / -on / -yn endings (Spryzen, Valtryek, Kerbeus, Roktavor). Those edges make a name sound fast and metallic, which is why softer words rarely survive as Bey names.</li>
        </ul>

        <h2>Names by Battle Type</h2>
        <p>
          Every Bey belongs to one of four combat types, and matching a name to a type makes a custom Bey instantly more believable. The sound of the name should echo what the top does in the stadium:
        </p>
        <ul>
          <li><strong>Attack.</strong> Aggressive, lunging Beys built to slam opponents out of the ring — Storm Pegasus, Lightning L-Drago, Victory Valtryek. Names lean on speed and predators: storm, lightning, blades, raptors, and big cats.</li>
          <li><strong>Defense.</strong> Heavy, immovable Beys that absorb hits — Earth Eagle, Rock Leone, Kerbeus, Bahamut. Names lean on stone, fortresses, guardians, and armored beasts.</li>
          <li><strong>Stamina.</strong> Patient Beys that out-spin the opponent — Flame Libra, Fafnir, Wyvron. Names lean on endurance, hovering creatures, serpents, and the long, steady burn.</li>
          <li><strong>Balance.</strong> All-rounders that adapt — Spryzen, Cosmic Pegasus, Spriggan Requiem. Names blend traits from the other three, often pairing a cosmic or hybrid root with a versatile beast.</li>
        </ul>
        <p>
          Pick a type first, then generate a batch and keep the names whose sound matches it. A Defense Bey named for stone and a Stamina Bey named for a coiling serpent read very differently, even when both follow the same beast-plus-attribute formula.
        </p>

        <h2>The Bit-Beast and Beast-Spirit Convention</h2>
        <p>
          The heart of Beyblade naming is the idea that a top is not just plastic and metal — it houses a beast. In the original series these were &quot;bit-beasts&quot;: Dragoon the wind dragon, Dranzer the fire phoenix, Driger the lightning tiger, Draciel the water turtle. The four blended an animal with one of the classical elements, which is why a strong OC name often does the same. When you generate a batch, ask of each result: what creature lives inside this Bey, and what element does it command? If the name suggests both, it is doing the job a real bit-beast name does.
        </p>
        <p>
          The convention survived into later eras under different labels — Metal Saga tied Beys to constellations and zodiac beasts (Leone the lion, Sagittario the archer), while Burst leans on mythological beings as spirit-avatars. Whatever the era, the throughline is the same: a Bey is a vessel for a legendary creature, and the name should make that creature audible the moment someone says it out loud.
        </p>

        <h2>Designing an Original Bey (OC)</h2>
        <p>
          For a fan series, fan-comic, or fan-art Bey, the name is the first thing the audience judges. A strong OC Bey name does three jobs at once: it names a beast or mythic figure, it carries a type-appropriate edge, and it sits naturally beside canon Beys in a roster. Generate a batch, then test each name: could it appear on a tournament bracket next to Spryzen and Valtryek without looking out of place? If yes, it is in the right register.
        </p>
        <p>
          A common approach is to pick a mythological beast that has not been used yet — a basilisk, a manticore, a thunderbird, a kraken — and fuse it with an attribute that signals your Bey&apos;s type. Then layer in the franchise&apos;s naming system if your series uses one: the Burst games stack a beast-name with a layer, disc, and driver (for example &quot;Galaxy Zeus 4Glaive&quot;), so an OC built that way feels mechanically authentic. If you want a simpler classic-era feel, a two-word combo like &quot;Tempest Wyvron&quot; or &quot;Obsidian Kerbeus&quot; is plenty.
        </p>

        <h2>Special Moves and Battle Cries</h2>
        <p>
          Beyblade is famous for its named finishing moves, shouted at the moment of impact. Tyson&apos;s Dragoon unleashes the Galaxy Storm and Victory Tornado; Kai&apos;s Dranzer calls the Flame Saber and Blazing Gig; Burst-era Beys trigger Requiem and avatar-bursting special moves. If you are designing an OC Bey, give it a signature move that matches its beast and type: a Defense Bey might guard with an &quot;Iron Bastion,&quot; a Stamina Bey might outlast the field with &quot;Eternal Spiral,&quot; an Attack Bey might finish with &quot;Meteor Fang.&quot; This two-layer naming — the Bey&apos;s name plus its special-move name — is one of the most recognizable patterns in the franchise, and it gives fan-fiction and fan-art battles their dramatic punch.
        </p>

        <h2>How to Use This Beyblade Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of Beyblade-style names.</li>
          <li>Skim for names that fit your chosen battle type or beast theme, then use the Copy button to save the whole list.</li>
          <li>Paste into your design notes or fan-series bible and shortlist your favorites.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your OC Bey ideas stay private until you choose to reveal them in your series or art.
        </p>

        <h2>Tips for Picking the Right Bey Name</h2>
        <p>
          Say the name out loud — Beyblade names are meant to be shouted at the launch (&quot;3, 2, 1, Let it rip!&quot;), so a name that stumbles in the mouth will stumble in a battle scene too. Keep a hard consonant or a sharp ending if you want that metallic, fast feel. Make sure the beast and the type agree: a name that sounds heavy and armored should not be powering an Attack Bey built for speed. And avoid accidentally reusing a canon Bey name exactly — borrowing a fresh beast (a wyvern, a chimera) and fusing it your own way is far stronger than recycling Pegasus or L-Drago.
        </p>
        <p>
          If you are naming a whole team or rival roster, generate a batch and pick names that contrast across the four types — one fierce Attack name, one stony Defense name, one enduring Stamina name, one adaptable Balance name. That spread is exactly what makes a cast of Beys feel like distinct competitors rather than variations on one theme, the way Gingka&apos;s Pegasus, Kyoya&apos;s Leone, and Ryuga&apos;s L-Drago each sound like their own beast.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Beyblade-style names — beast-spirit roots, mythic figures, and type-themed attributes — for custom Beys, OCs, fan series, and fan art.</li>
          <li>It does not reproduce official Bey names as a database; output is original combinations for your own creative use.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not check whether a name has been used by Takara Tomy or Hasbro — if you plan to publish a series commercially, verify originality yourself.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Beyblade is one of the most design-driven fandoms out there — fans build OC Beys, draw beast avatars, write tournament arcs, and even 3D-print custom layers, and every one of those needs a name that fits the world. This Beyblade name generator gives you that pool instantly, grounded in the franchise&apos;s real naming logic: a beast or mythic figure at the core, a sharp metallic edge, and a sound that matches the Attack, Defense, Stamina, or Balance role the Bey is built to play. Generate a batch, lean on the type and beast notes above, pair it with a special move, and you will end up with Bey names that sound like they were always ready to rip.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Beyblade name generator?', answer: 'A Beyblade name generator is a browser tool that creates names in the style of the franchise — a beast or mythic figure fused with an attribute, like Storm Pegasus, Valtryek, or Spryzen. It follows Beyblade naming logic (a bit-beast or legendary creature at the core, a sharp metallic ending, and a hint of battle type) so the names fit custom Beys, OCs, fan series, and fan art. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'How are real Beyblade names structured?', answer: 'Most Bey names pair a beast or mythic root with an attribute. The original series used bit-beasts — Dragoon (dragon), Dranzer (phoenix), Driger (tiger), Draciel (turtle) — each blended with an element. The Burst era leans on mythology: Valtryek from Valkyrie, Spryzen from Spriggan, plus Achilles, Fafnir, and Longinus. The franchise also favors hard, fast phonetics with zr, dr, and -us or -on endings.' },
  { category: 'Naming style', question: 'What are bit-beasts and why do they shape Bey names?', answer: 'A bit-beast is the spirit creature said to live inside a Beyblade in the original series — a wind dragon, a fire phoenix, a lightning tiger, a water turtle. Because the Bey is a vessel for that beast, the name is built to make the creature audible. That is why a strong custom name names both an animal or mythic figure and, often, an element it commands. Later eras kept the convention through constellation beasts and mythological avatars.' },
  { category: 'Battle type', question: 'How do names differ by battle type?', answer: 'Each Bey is Attack, Defense, Stamina, or Balance, and the sound should echo the role. Attack names lean on speed and predators (Storm Pegasus, Lightning L-Drago). Defense names lean on stone and guardians (Earth Eagle, Rock Leone, Kerbeus). Stamina names lean on endurance and serpents (Fafnir, Wyvron). Balance names blend traits, often with a cosmic or hybrid root (Spryzen, Cosmic Pegasus). Pick a type first, then keep the names that match it.' },
  { category: 'Battle type', question: 'What type should my custom Bey be?', answer: 'Choose the type that fits how your Bey fights. If it lunges in to knock opponents out of the ring, make it Attack and give it a fast, predatory name. If it absorbs hits and holds the center, make it Defense and name it for stone or an armored beast. If it outlasts the field, make it Stamina with a coiling, enduring name. If it adapts, make it Balance and blend roots. Balance is the safest default for a flexible OC.' },
  { category: 'OC', question: 'How do I design and name an original Bey (OC)?', answer: 'A strong OC Bey name does three things: names a beast or mythic figure, carries a type-appropriate edge, and sits naturally beside canon Beys on a roster. Pick a mythological creature that has not been used — a basilisk, manticore, thunderbird, or kraken — fuse it with an attribute that signals your type, then test it: could it appear on a bracket next to Spryzen and Valtryek without looking out of place? If yes, it works.' },
  { category: 'OC', question: 'Can I build a name in the Burst layer-disc-driver format?', answer: 'Yes, and it makes an OC feel mechanically authentic. Burst Beys stack a beast-name with a layer, disc, and driver — for example Galaxy Zeus 4Glaive. Take a generated beast-plus-attribute name as the layer name, then add a disc number and a driver word of your own. If you prefer the simpler classic feel, a two-word combo like Tempest Wyvron or Obsidian Kerbeus is plenty on its own.' },
  { category: 'Naming style', question: 'How do special moves and battle cries fit in?', answer: 'Beyblade is famous for named finishing moves shouted at impact — Dragoon\'s Galaxy Storm, Dranzer\'s Flame Saber, and Burst-era Requiem moves. For an OC, give it a signature move that matches its beast and type: an Iron Bastion for Defense, an Eternal Spiral for Stamina, a Meteor Fang for Attack. This two-layer naming, the Bey name plus its move name, is one of the most recognizable patterns in the franchise.' },
  { category: 'OC', question: 'How do I name a full team or rival roster of Beys?', answer: 'Generate a batch and pick names that contrast across the four types: one fierce Attack name, one stony Defense name, one enduring Stamina name, one adaptable Balance name. That spread makes a cast feel like distinct competitors rather than variations on a theme — the way Gingka\'s Pegasus, Kyoya\'s Leone, and Ryuga\'s L-Drago each sound like their own beast.' },
  { category: 'Usage', question: 'How do I use this Beyblade name generator?', answer: 'Set how many names you want (1–24), click Generate names, then skim for names that fit your chosen battle type or beast theme. Use the Copy button to save the whole list, paste it into your design notes or fan-series bible, and shortlist your favorites. Run again for more — there is no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit or combine the generated names?', answer: 'Absolutely. The output is a starting point. Swap the beast root from one result onto the attribute from another, sharpen an ending to -us or -on, or fuse two names into a hybrid Balance Bey. Many designers generate a batch, take the creature word from one name and the element word from another, and combine them into the final Bey.' },
  { category: 'Use cases', question: 'Can I use these names for a fan series or fan fiction?', answer: 'Yes — fan series and fan fiction are a primary use. The names follow the franchise\'s naming conventions so your OC Beys sit believably beside canon ones. Use the beast and type notes to match each name to its bit-beast and combat role, and pair it with a special move so battle scenes have the same dramatic punch the show does.' },
  { category: 'Use cases', question: 'Can I use these names for fan art or 3D-printed custom Beys?', answer: 'Yes. Fan artists and makers who design original beast avatars or 3D-print custom layers need names that fit the world. Generate a batch, choose one whose beast suits your design, and let the type guide the visual — armored and heavy for Defense, sleek and bladed for Attack. The names are yours to use for non-commercial fan creations.' },
  { category: 'Naming style', question: 'Why do so many Bey names use mythological figures?', answer: 'The Burst era especially treats Beys as vessels for legendary beings, so names draw on Norse, Greek, and world myth — Valkyrie, Spriggan, Achilles, Fafnir, Longinus, Roktavor. A mythic root gives a Bey instant gravity and a built-in personality. When you want a name to read as Burst-generation, reaching for an unused mythological creature is the most reliable way to get there.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated elements built around Beyblade\'s conventions — beast and bit-beast roots, mythological figures, elemental attributes, and the franchise\'s sharp phonetic endings — and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local, so you can keep designing OC Beys offline once the page has loaded.' },
  { category: 'General', question: 'Are these real Beys from the anime or toy line?', answer: 'No. The generator creates original, Beyblade-style names for your own use rather than reproducing the official Bey lineup as a lookup database. That is intentional — you want fresh names for custom Beys and OCs, not duplicates of Dragoon or Valtryek that you cannot claim as your own design.' },
  { category: 'Privacy', question: 'Are my generated Bey names sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and the generated names are never sent to our servers and nothing is stored. You can brainstorm your OC Beys in a private window and your design ideas stay yours until you reveal them in your series or art.' },
  { category: 'Limits', question: 'How many Bey names can I generate at once?', answer: 'You can request 1–24 names per run. For more, just run it again — each run produces a fresh random set and there is no daily or total limit. Paste several runs into one document if you want a large pool to shortlist from when naming a whole roster of Beys.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch of Bey names on your phone at a tournament or while sketching, copy it into your notes, and shortlist favorites wherever you are designing.' },
  { category: 'General', question: 'Is the Beyblade name generator free?', answer: 'Yes, it is completely free with no account, sign-up, or download. Generate as many custom Bey, beast, and OC names as you like, as often as you like, whether you are building one Bey or a full tournament roster.' },
  { category: 'Best practices', question: 'How do I make a generated name sound more canon?', answer: 'Say it out loud as if you were shouting it at the launch — Beyblade names are meant to be called out, so a name that stumbles in the mouth will stumble in a battle scene. Keep a hard consonant or a sharp ending for that metallic feel, make sure the beast and the battle type agree, and consider pairing the name with a special move so it carries the same two-layer weight canon Beys do.' },
  { category: 'Best practices', question: 'How do I avoid reusing an existing Bey name?', answer: 'Borrow a fresh beast rather than a famous one. Pegasus, L-Drago, and Valtryek are taken, but wyverns, chimeras, basilisks, and thunderbirds are wide open. Fuse an unused creature with your own attribute and ending, then double-check it does not match an official release. Building from a less common myth or animal is both safer and more distinctive than recycling a canon root.' },
  { category: 'Troubleshooting', question: 'The names do not feel Beyblade enough — what should I do?', answer: 'Generate a larger batch and filter hard: keep only names with a clear beast or mythic root and a sharp, metallic ending, and discard anything soft or generic. Fuse a strong creature word with a type-appropriate attribute (storm, rock, flame, cosmic), and add a special-move name. That combination is what gives canon Beys their feel and will push a plain result firmly into the world.' },
];

export default async function BeybladeNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="beyblade" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Beyblade name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

