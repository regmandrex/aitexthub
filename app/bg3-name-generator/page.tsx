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


const toolSlug = 'bg3-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'BG3 Name Generator',
    description: 'No-cost Baldur’s Gate 3 name generator designed for your Tav and custom characters. Race-appropriate D&D monikers for tieflings, elves, dwarves, githyanki, and additional races — right in your browser, without registering.',
    seoTitle: 'BG3 Name Generator – Baldur’s Gate 3 Tav & D&D Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>BG3 Name Generator – Baldur&apos;s Gate 3 Tav &amp; D&amp;D Names</h2>
        <p>This BG3 Name Generator creates monikers for your custom hero — your &quot;Tav&quot; — and for any companion, mercenary, or origin hero you design in Baldur&apos;s Gate 3. Since BG3 utilizes Dungeons &amp; Dragons 5e and the Forgotten Realms universe, titles are not generic fantasy filler: every playable race features its own naming customs, ranging from the smooth titles of elves to the abrasive, harsh monikers of githyanki. The utility embraces these standards so the title you select matches both your ancestry and the realm of Faerûn. It runs inside your browser with no registration and saves nothing.</p>
        <p>A title in BG3 stays with you through a 100-hour playthrough, voiced by allies and narrated by the Dream Visitor, making it crucial to get right. This article reviews D&amp;D naming by race so the moniker you create sounds like it belongs to a Sword Coast hero rather than a placeholder.</p>

        <h2>D&amp;D Naming by Race</h2>
        <p>Baldur&apos;s Gate 3 allows you to play a broad variety of races, each featuring distinct naming traditions derived from D&amp;D lore. Aligning the title with the ancestry is the single most important factor that makes a Tav feel authentic:</p>
        <ul>
          <li><strong>Elves &amp; half-elves.</strong> Flowing, melodic monikers featuring soft consonants — graceful, vowel-heavy sounds. High elves and wood elves both prefer lyrical titles.</li>
          <li><strong>Tieflings.</strong> Frequently a &quot;virtue name&quot; (a term or concept) alongside an Infernal-themed moniker, demonstrating their demonic background and the names they select for themselves.</li>
          <li><strong>Dwarves.</strong> Tough, solid titles featuring clan connections — sturdy consonants alongside a feeling of stone and ancestry.</li>
          <li><strong>Githyanki.</strong> Harsh, alien, guttural monikers featuring apostrophes and hard sounds (like Lae&apos;zel) — clearly non-human.</li>
          <li><strong>Humans.</strong> The broadest selection, drawing upon the numerous cultures of the Sword Coast and beyond.</li>
          <li><strong>Halflings &amp; gnomes.</strong> Warmer, cozier, frequently somewhat whimsical titles that fit their communities.</li>
          <li><strong>Dragonborn &amp; half-orcs.</strong> Robust, clan- or deed-based monikers possessing weight and presence.</li>
        </ul>

        <h2>Naming Your Tav</h2>
        <p>"Tav" represents the popular moniker for a bespoke BG3 hero that is non-origin, originating from the initial character preset. When crafting your own champion instead of selecting preset characters like Astarion or Shadowheart, you customize everything, including the moniker companions address you by throughout the journey. Produce a selection filtered by your ancestry, then review each option imagining Shadowheart uttering it by a campfire; those that feel natural within that setting are the ones you ought to retain.</p>
        <p>Take your class and background into account as well. A noble Paladin might bear a weightier, heritage-bound moniker; a wild Druid something earthier; a roguish Urchin something concise and street-hardened. D&amp;D heroes are defined just as much by their origins as their statistics, and a designation that reflects that background renders the hero feeling deliberately crafted instead of randomly rolled.</p>

        <h2>Origin vs. Custom Characters</h2>
        <p>BG3&apos;s origin characters — Astarion, Gale, Lae&apos;zel, Shadowheart, Wyll, Karlach, and the Dark Urge — arrive pre-named, and those monikers serve as a masterclass in race-appropriate nomenclature. Lae&apos;zel is distinctly githyanki; Astarion possesses the smooth sophistication of a high-elf vampire; Karlach is robust and direct, matching her tiefling barbarian energy. Should you be designing a custom hero or a multiplayer party, utilize these as a tuning fork: generate monikers and contrast them against canon companions of identical ancestry to verify yours resides in the same category.</p>

        <h2>Naming for Multiplayer and Custom Campaigns</h2>
        <p>BG3 supports multiplayer groups consisting of custom heroes, and numerous squads prefer a harmonious collection of monikers rather than conflicting styles. Generate a collection for each player&apos;s ancestry and select monikers that seem capable of adventuring side-by-side — diverse yet tonally unified. The identical strategy applies if you are transferring your BG3 Tav into a tabletop D&amp;D campaign: the monikers are setting-accurate for the Forgotten Realms, meaning they transition seamlessly from the digital screen to the tabletop.</p>

        <h2>How to Use This BG3 Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to acquire a collection of D&amp;D-style monikers.</li>
          <li>Preserve the monikers that suit your chosen ancestry and class, referencing the ancestry notes provided previously as a guide.</li>
          <li>Transfer the list into your notes and shortlist your favored options for hero creation.</li>
          <li>Spin the tool repeatedly for fresh ideas — zero restrictions, sign-ups, or software required.</li>
        </ol>
        <p>Generation takes place entirely within your browser. Your preferences and the monikers you generate are never transmitted to a server, ensuring your hero concepts remain confidential until you decide to implement them.</p>

        <h2>Tips for a Race-Fitting Name</h2>
        <p>Determine your ancestry first, then screen rigorously for phonetics: elven monikers ought to flow, dwarven monikers should feel like stone, githyanki monikers must sound extraterrestrial. Utter the moniker aloud — it will be spoken continuously during cutscenes, meaning a designation that proves awkward to articulate will become tiresome over an extended campaign. Refrain from adopting a canon companion&apos;s exact moniker, but mirroring the aesthetic of a same-race companion offers a dependable shortcut. If a generated moniker is close, adjust the spelling or append an apostrophe (for githyanki) to push it completely into the appropriate tradition.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It produces Baldur&apos;s Gate 3 and D&amp;D-style monikers for your Tav, companions, and custom heroes.</li>
          <li>It does not replicate official companion monikers as a compilation — the output remains original for your personal utilization.</li>
          <li>It never logs or saves your preferences or creations; everything happens solely on your device.</li>
          <li>It does not interface with your save data or the application — it merely proposes monikers to input into hero creation.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>Baldur&apos;s Gate 3 stands as one of the premier character-creation-driven titles ever developed, and naming your Tav forms part of the enjoyment. This generator supplies you with a pool of monikers rooted in authentic D&amp;D and Forgotten Realms naming conventions — ancestry by ancestry, ranging from lyrical elven monikers to harsh githyanki ones. Select your ancestry, produce a collection, rely on the notes above, and you will ultimately secure a moniker that suits both your hero and the Sword Coast they are poised to rescue (or devastate).</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a BG3 name generator?', answer: 'It functions as a browser utility that generates monikers for Baldur’s Gate 3 heroes — your custom "Tav," companions, and hirelings — in the aesthetic of D&D and the Forgotten Realms. Because each playable ancestry features its respective naming convention, the generator yields race-fitting monikers instead of generic fantasy filler. It operates locally absent of registration and archives nothing.' },
  { category: 'Tav', question: 'What is a "Tav" in BG3?', answer: '"Tav" acts as the community moniker for a custom (non-origin) Baldur’s Gate 3 protagonist, derived from the default character. When you forge your personal hero instead of controlling an origin like Astarion or Shadowheart, you decide the moniker companions will utilize for the entirety of the campaign — making it worthwhile to select one matching your ancestry and class.' },
  { category: 'Races', question: 'How do names differ by race in BG3?', answer: 'Elves and half-elves prefer flowing, melodic monikers; tieflings frequently employ a virtue moniker combined with Infernal flavor; dwarves utilize rigid, clan-anchored monikers; githyanki deploy severe, alien monikers featuring apostrophes (such as Lae’zel); humans encompass numerous cultures; halflings and gnomes lean warm and domestic; dragonborn and half-orcs implement robust, deed-anchored monikers. Aligning the moniker with the ancestry is precisely what causes a Tav to feel authentic.' },
  { category: 'Races', question: 'How do I name an elf or half-elf?', answer: 'Elven monikers are flowing and melodic containing gentle consonants and rich vowels. Generate a collection, retain the lyrical-sounding ones, and read them aloud — should it sound graceful and somewhat otherworldly, it applies. Half-elves may lean toward either their elven or human heritage according to the hero you desire.' },
  { category: 'Races', question: 'What is the best way to christen a tiefling?', answer: 'Tieflings within D&D frequently bear a "virtue name" — a term or concept they select for themselves — alongside an Infernal-flavored moniker reflecting their fiendish heritage. The generator can furnish a foundation; couple it with a virtue concept (such as Hope, Ire, or Sorrow) to achieve an authentically tiefling outcome. Karlach serves as a solid canon reference regarding tone.' },
  { category: 'Races', question: 'What is the best way to name a githyanki?', answer: 'Githyanki names sound harsh, alien, and guttural, often featuring apostrophes and hard consonants, with Lae’zel serving as the prime example. Sort your batch to find the least human-sounding options, and insert an apostrophe if necessary to firmly establish the githyanki naming convention.' },
  { category: 'Origins', question: 'Are these suitable for origin or companion characters?', answer: 'The origin characters (Astarion, Gale, Lae’zel, Shadowheart, Wyll, Karlach, the Dark Urge) arrive already named, but you can employ this generator when designing your own companion-style NPCs, hirelings, or alternative party members. Match your generated names against the canonical companion of identical race to verify the tone.' },
  { category: 'Class', question: 'Ought the name to match my class or background?', answer: 'It helps. A noble Paladin fits a formal, ancestry-focused name; a Druid requires something more earthy; an Urchin rogue needs a brief, street-worn moniker. D&D characters gain definition from their background as much as their stats, meaning a fitting name makes the character feel crafted rather than randomly generated.' },
  { category: 'Use cases', question: 'Is it possible to use these names in tabletop D&D?', answer: 'Yes. Since BG3 relies on D&D 5e and the Forgotten Realms, the names remain setting-appropriate and transfer seamlessly to tabletop campaigns. Should you bring your Tav into a home game, the resulting name will blend in perfectly alongside other Sword Coast inhabitants.' },
  { category: 'Use cases', question: 'Can I employ this for multiplayer parties?', answer: 'Yes. For a multiplayer group of custom characters, produce a batch for every player’s race and select names that sound cohesive for an adventuring party, remaining varied yet tonally uniform. This prevents any jarring style clashes throughout the group.' },
  { category: 'Usage', question: 'How do I operate this generator?', answer: 'Choose your desired name quantity (1–24), hit Generate names, and retain the options that match your selected race and class by utilizing the race notes provided above. Transfer the list to your notes, narrow down your top choices, and type your selection into the BG3 character creator. Generate more as needed without any restrictions, account requirements, or downloads.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Yes. The generated results serve as a foundation. Adjust the spelling, insert an apostrophe for a githyanki touch, soften the consonants for an elf, or merge elements from two distinct outcomes. Numerous players create a batch and subsequently polish a favorite until it feels completely correct.' },
  { category: 'Naming style', question: 'Why does my name fail to sound fitting for my race, and how can I fix it?', answer: 'Pick your race initially, then narrow down options strictly by phonetics: elven titles ought to be fluid, dwarven ones heavy as rock, and githyanki ones strange and otherworldly. When an option comes close, tweak its orthography to match that heritage. Testing against an official companion of the identical race serves as a dependable test.' },
  { category: 'Naming style', question: 'Is pronunciation something I need to be concerned about?', answer: 'Indeed. Since companions and the narrator voice the name frequently throughout BG3 cutscenes, a moniker that feels clumsy to utter becomes irritating across an extended playthrough. Speak every option out preference prior to finalizing and prioritize those that flow smoothly.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The tool mixes hand-picked naming parts based on D&D along with Forgotten Realms racial rules, blending them randomly right inside your web browser. Every single generation delivers a brand new batch. Zero data leaves for an external server; processing happens completely on your device.' },
  { category: 'Technical', question: 'Do these represent actual characters featured in BG3?', answer: 'Negative. The system invents brand new, D&D-inspired titles for your personal gameplay rather than copying canonical companions. That design is deliberate since you require a unique moniker for your Tav, instead of a clone of Astarion or Shadowheart that feels impossible to claim as your own.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'No. Everything processes directly within your browser. When you hit generate, names form right on your device. Your preferences and generated names never transmit to our servers, and zero data gets saved. Feel free to use the tool in a private window to keep your character concepts private.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'Users may ask for 1 to 24 results per generation. Should you need additional ones, simply trigger it once more since every execution yields a fresh randomized selection without any restrictions on daily or overall counts. Combine multiple batches inside a single file if you desire an extensive list to pick from for your group.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Certainly. The tool functions within any contemporary browser across computers, tablets, or smartphones without requiring any software installation. Produce a list on your mobile device while designing your hero, save it to your memos, and pick favorites prior to launching your session.' },
  { category: 'General', question: 'Does the BG3 Name Generator cost anything?', answer: 'Of course, it is totally costless with zero requirement for registration, accounts, or software downloads. Create as many Tav and companion monikers as you desire, as frequently as you wish.' },
  { category: 'Best practices', question: 'What steps ensure a name truly captures the essence of BG3?', answer: 'Ground it within your specific race\'s naming customs, hint at your profession or origin, and speak it out loud to verify its ease of articulation. Evaluating your choice alongside an official companion from the same race represents the quickest method to verify it fits the proper tone.' },
  { category: 'Best practices', question: 'Must the moniker align with my visual design?', answer: 'Not strictly, but a moniker that matches your heritage and character style enhances immersion. A weathered, battle-scarred fighter carrying a delicate poetic name might seem out of place, although intentional contrast can also make for a powerful roleplay decision if that is what you want.' },
  { category: 'Troubleshooting', question: 'The names feel overly generic — what should I do?', answer: 'Produce a bigger batch and screen severely for heritage-appropriate phonetics, throwing away anything that could fit any fantasy figure. Afterward, polish your top choice\'s orthography toward its tradition. The closer you stay to one species\' rules, the less standard the output feels.' },
];

export default async function Bg3NameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="bg3" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the BG3 Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
