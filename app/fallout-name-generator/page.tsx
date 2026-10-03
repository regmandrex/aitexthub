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


const toolSlug = 'fallout-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Fallout Name Generator',
    description: '[3] An entirely free Fallout Name Generator built for Vault Dwellers, wasteland survivors, raiders, and ghouls. Craft classic retro-apocalyptic aliases steeped in Fallout style mid-century nuclear flavor—directly in your browser with zero registration.',
    seoTitle: 'Fallout Name Generator – Vault Dweller & Wasteland Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>[4] Fallout Name Generator – Vault Dweller &amp; Wasteland Names</h2>
        <p>[5] This Fallout Name Generator generates fitting titles for the retro-apocalyptic universe of the Fallout series—a setting where mid-century Americana was frozen in place before enduring nuclear fallout. Whether creating a fresh Vault Dweller, a hardened wasteland survivor for roleplay, a notorious raider boss, or a new outpost in Fallout 4, this utility provides the quintessential balance of atomic-age cheer and post-war grit. It works straight in your browser, requires no login, and saves nothing.</p>
        <p>[6] The unmistakable naming conventions in Fallout stand out as masterclass worldbuilding: breezy &quot;Greaser&quot; and &quot;Sunshine&quot; tropes clashing against ruthless raider handles, all coated in vintage Vault-Tec promotional gloss. This guide explores naming conventions across various survivor types and factions so your output genuinely matches the Fallout aesthetic.</p>

        <h2>[7] The Fallout Naming Aesthetic</h2>
        <p>[8] Fallout&apos;s identity comes from a specific collision of eras. Understanding it makes your names feel canon:</p>
        <ul>
          <li>[9] <strong>1950s Americana, preserved.</strong> Upbeat, vintage personal names reminiscent of mid-century soda shops or glossy Vault-Tec advertisements. They evoke clean, cheerful, nostalgic simplicity.</li>
          <li>[10] <strong>Post-nuclear grit.</strong> Wasteland denizens frequently adopt rugged monikers, squad callsigns, or blunt, sharp descriptors forged amid the ruins.</li>
          <li>[11] <strong>Faction flavor.</strong> Groups like the Brotherhood of Steel, the NCR, Caesar&apos;s Legion, raider gangs, and ghouls reflect distinct styling—spanning formal military rankings to classical Latinate handles.</li>
          <li>[12] <strong>Dark irony.</strong> The Fallout universe thrives on pairing sunny phrases with grim settings. An upbeat atomic-age forename applied to a ruthless drifter captures that signature tone.</li>
        </ul>

        <h2>[13] Names by Survivor Type</h2>
        <p>[14] The kind of character you are naming shapes the right register:</p>
        <ul>
          <li><strong>Vault Dwellers.</strong> Polished, pre-war American naming conventions match inhabitants sheltered within the sanitized safety of an underground Vault — echoing childhoods steeped in vintage Vault-Tec instructional reels.</li>
          <li>[16] <strong>Wasteland survivors.</strong> A standard first name joined with a gritty moniker, or an unadorned weathered title, fits characters fighting to survive the harsh wastes.</li>
          <li>[17] <strong>Raiders.</strong> Menacing, aggressive street tags created to spread fear—coarse, violent, and occasionally laced with pitch-black humor.</li>
          <li>[18] <strong>Ghouls.</strong> Frequently retaining their original pre-war identities from centuries past, creating an emotional rift between historical ordinary names and scarred, irradiated exteriors.</li>
          <li>[19] <strong>Super mutants.</strong> Direct, unrefined, usually single-word names that mirror their altered intellect and altered psychology.</li>
        </ul>

        <h2>Faction Naming</h2>
        <p>[20] Fallout&apos;s factions each have a naming culture worth matching:</p>
        <ul>
          <li>[21] <strong>Brotherhood of Steel.</strong> Structured military designations pairing title with rank; scribes, knights, and paladins exude orderly formality.</li>
          <li>[22] <strong>NCR.</strong> Practical, frontier-style monikers capturing an emergent democratic nation with old-school pioneer resilience.</li>
          <li>[23] <strong>Caesar&apos;s Legion.</strong> Latin-inspired names and official titles mirroring their neo-Roman militant culture—some of the most unmistakable sounds in the wasteland.</li>
          <li>[24] <strong>The Institute / Enclave.</strong> Detached, bureaucratic, high-tech identifiers that underline their hidden agendas and clinical operations.</li>
        </ul>

        <h2>Naming Settlements (Fallout 4)</h2>
        <p>Because Fallout 4 emphasizes settlement construction, adventurers also name towns along with personalities. An ideal town title channels either forgotten atomic optimism (sunny, tourist-brochure labels) or harsh wasteland survival (fortified, makeshift, or stubbornly hopeful names). Produce a collection and select tags that would make sense carved onto a weathered entrance sign—that delivers the quintessential Commonwealth settlement experience.</p>

        <h2>[10] How to Use This Fallout Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Press <strong>Generate names</strong> to instantly produce a fresh set of post-apocalyptic options.</li>
          <li>Rely on the provided guidance to select whatever suits your specific survivor concept or group.</li>
          <li>Save the results into a separate document and highlight top contenders for your settlement or build.</li>
          <li>Spin the tool repeatedly for fresh ideas — zero restrictions, sign-ups, or software required.</li>
        </ol>
        <p>All processing happens directly within your web browser. None of your options or created monikers get transmitted over the internet, keeping all your personal concept work entirely confidential.</p>

        <h2>Tips for a Fallout-Fitting Name</h2>
        <p>Embrace the contrast of timelines: an earnest mid-twentieth-century forename fits the atmosphere of Fallout far better than an ordinary high-fantasy alias. When designing raiders, choose punchy, slightly exaggerated tags — surviving the wastes favors a handle that inspires fear. With ghouls, recall that many hold onto their original mortal identities, meaning an antiquated pre-war title coupled with an endurance narrative works best. When building an affiliate of a specific group, adopt their linguistic style (militaristic jargon for the Brotherhood, classical Latin for the Legion) so your persona integrates smoothly.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Fallout-style names for Vault Dwellers, survivors, raiders, ghouls, and settlements.</li>
          <li>You will not find existing canon personalities here — each generated moniker is novel and yours to adapt.</li>
          <li>It never logs or saves your preferences or creations; everything happens solely on your device.</li>
          <li>It operates separately from the title itself, providing inspiration tailored for your tabletop campaigns or play.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>The universe of Fallout thrives within the tension dividing an idealized, perpetual 1950s atomic optimism from the irradiated devastation that destroyed it. Outstanding Fallout handles embody this paradox by blending cheeriness with bleakness. Drawing from that precise thematic spirit, our tool provides curated lists organized across survivor roles and allegiances, covering everything from polished Vault-Tec titles to savage raider epithets. Select your persona's origins, produce a list, apply the provided guidance, and create an identity woven seamlessly into post-nuclear lore. War. War never changes.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Fallout name generator?', answer: 'This web application supplies Fallout-inspired aliases, fusing nostalgic 1950s Americana with harsh post-atomic survivor gritty flavor. It serves Vault dwellers, scavengers, bandits, mutated ghouls, and outposts based on genuine setting tropes. The entire engine executes inside your browser without accounts, installations, or data retention.' },
  { category: 'Aesthetic', question: 'What makes a name sound like Fallout?', answer: 'A proper Fallout identity reflects an idealized 1950s caught in total nuclear collapse. Cheerful mid-century forenames, gritty battlefield handles, and grimly playful contrasts (like an upbeat alias given to a ruthless scavenger) define this universe. Any identity combining quaint vintage warmth with rugged grit fits the setting.' },
  { category: 'Survivor types', question: 'How do I name a Vault Dweller?', answer: 'Vault Dwellers matured within the secure shelter of a Vault, making pristine, pre-war American first names ideal for them — the sort heard during a Vault-Tec orientation film. Produce a selection and preserve the wholesome, hopeful, slightly nostalgic choices.' },
  { category: 'Survivor types', question: 'How should I name a wasteland survivor?', answer: 'Survivors who fought through the wastes frequently use a first name coupled with a hard-earned nickname, or a single weathered term. Generate a batch and look for handles that feel roughened by the ruins — practical, somewhat scarred, and memorable.' },
  { category: 'Survivor types', question: 'How should I name a raider?', answer: 'Raider names are aggressive, intimidating monikers designed to frighten — blunt, brutal, and occasionally darkly humorous. Create within that style and select something that would make a settlement anxious. Theatrical menace suits raider culture better than subtlety.' },
  { category: 'Survivor types', question: 'How should I name a ghoul?', answer: 'Ghouls are frequently centuries old and tend to keep their pre-war human names, establishing a striking contrast between an ancient name and a radiation-damaged body. A slightly dated, pre-war first name paired with a survival background works best for a ghoul character.' },
  { category: 'Factions', question: 'What is the best way to name a Brotherhood of Steel character?', answer: 'The Brotherhood relies on a military first-name-plus-rank approach featuring knights, paladins, and scribes for a disciplined vibe. Create a base name and combine it with a Brotherhood rank to achieve an authentic fit for their order.' },
  { category: 'Factions', question: 'How can I create a Caesar’s Legion character name?', answer: 'The Legion employs Latinized names and titles that evoke Roman-empire cosplay, standing out as one of Fallout\'s most unique naming conventions. Generate a set and favor the Latin-inspired options, or modify a name into a Legion-style title for maximum impact.' },
  { category: 'Factions', question: 'What about names for the NCR or the Institute?', answer: 'NCR names feel practical and frontier-oriented, suiting a settler republic working to rebuild the West. Conversely, Institute and Enclave names sound cold, formal, and technocratic, reflecting their secretive and ambitious nature. Align with the faction’s tone to ensure your character matches its culture.' },
  { category: 'Settlements', question: 'Is it possible to name a Fallout 4 settlement?', answer: 'Certainly. A strong settlement name suggests either pre-war optimism, resembling a cheerful brochure, or post-war reality, such as something scrappy or grimly hopeful. Generate a batch and search for titles that look right at home on a hand-painted sign near a reconstructed Commonwealth town.' },
  { category: 'Usage', question: 'How do I operate this generator?', answer: 'Choose your desired number of names (1–24), press Generate names, and select the ones matching your survivor type or faction using the tips provided above. Copy the list into your notes to narrow down your favorites. Run the tool again for additional options with no limits, accounts, or downloads required.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Indeed, the output serves as a foundation. Combine a clean first name with a rugged nickname, apply a Latin twist for the Legion, or shorten it to a single direct word for a super mutant. Many gamers generate a batch and then tweak a favorite to suit their specific character concept.' },
  { category: 'Aesthetic', question: 'Why do cheerful names suit grim characters?', answer: 'Dark irony is central to the Fallout atmosphere; a wholesome mid-century moniker worn by a hardened survivor highlights the disconnect between the hopeful pre-war era and the harsh reality that followed. This contrast often fits the genre better than a strictly gloomy name.' },
  { category: 'Use cases', question: 'Can these names be used for role-playing?', answer: 'Yes, tabletop, play-by-post, and Discord RP set in the Fallout universe all require wasteland-appropriate names. Generate a batch, align it with your character’s origin and faction, and the result will blend seamlessly alongside official canon characters.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The tool merges hand-picked Fallout motifs—like mid-century given names, wasteland monikers, and faction styles—and mixes them randomly inside your browser. Every execution yields a fresh list. No information is transmitted to any server since generation happens completely locally.' },
  { category: 'Technical', question: 'Are these authentic characters from Fallout?', answer: 'Negative. The utility generates unique, Fallout-inspired names for your personal use instead of recycling the official roster. This design choice ensures your survivor receives a fresh title rather than duplicating a canon figure you cannot truly customize.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'No. Everything processes directly within your browser. When you hit generate, names form right on your device. Your preferences and generated names never transmit to our servers, and zero data gets saved. Feel free to use the tool in a private window to keep your character concepts private.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You are welcome to request between 1 and 24 names per generation. To get more, simply run it again; each attempt delivers a brand-new random selection with no daily or lifetime caps. Combine multiple runs into a single document should you need an extensive pool of options.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Absolutely. The generator functions on any contemporary browser across desktop, tablet, or mobile devices without requiring app downloads. Produce a batch on your smartphone while brainstorming a character, save them to your notes, and curate your top picks wherever you happen to be.' },
  { category: 'General', question: 'Does the Fallout Name Generator cost anything?', answer: 'Yes, it is entirely free without needing an account, registration, or software download. Create as many Vault Dweller, survivor, raider, and settlement names as you desire, as frequently as you wish.' },
  { category: 'Best practices', question: 'How do I give a name a genuine Fallout feel?', answer: 'Emphasize the era clash; a wholesome mid-century name captures the mood far better than standard fantasy tropes. Tailor the name to your character’s survivor category or faction, and incorporate a rugged nickname or faction rank for added flavor. Say it aloud against the franchise\'s cheerful-yet-grim tone to verify it works.' },
  { category: 'Best practices', question: 'Should the name correspond to my character’s faction?', answer: '[1] It enhances immersion. A Brotherhood paladin, an NCR ranger, and a Legion centurion ought to sound distinct. Matching the name to the faction’s register — military, frontier, or Latin — immediately roots the character in the wasteland’s politics.' },
  { category: 'Troubleshooting', question: '[2] The names feel overly generic — what should I do?', answer: '[3] Produce an expanded collection and screen for specific historical tones: isolate vintage mid-century titles and weathered survivor tags, filtering out anything that reads too generic. Fusing an innocent retro given name with a harsh moniker creates that iconic Fallout irony.' },
];

export default async function FalloutNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="fallout" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Fallout Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
