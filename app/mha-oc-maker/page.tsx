import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { MhaOcMakerTool } from '@/components/tools/MhaOcMakerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'mha-oc-maker';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'MHA OC Maker',
    description: 'Design a custom My Hero Academia OC featuring a Quirk, hero classification, outfit, traits, flaw, and visual concept.',
    seoTitle: 'MHA OC Maker - My Hero Academia OC Generator',
    urlPath: `/${toolSlug}`,
  });
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an MHA OC Maker?', answer: 'An MHA OC Maker helps you build a unique My Hero Academia-themed character with a Quirk idea, profession, attire, temperament, drawback, and artwork reference.' },
  { category: 'Usage', question: 'How can I build an MHA OC?', answer: 'Input a character concept, pick the Quirk category and hero path, then outline the fighting style, outfit, palette, character traits, drawback, and support gear. Click Make my MHA OC to generate a single visual reference.' },
  { category: 'Ideas', question: 'What are some solid MHA OC concepts?', answer: 'Begin with a basic power, then determine its capabilities, its limits, and the method your character used to master it. Movement abilities, rescue powers, defensive traits, sensory skills, and strategic support Quirks are all great for building compelling original characters.' },
  { category: 'Originality', question: 'Does the MHA OC creator duplicate official heroes?', answer: 'No. It focuses on unique fan-created concepts. Steer clear of official titles, identical outfits, emblems, and distinct mixes when polishing your character.' },
  { category: 'Quirk', question: 'What Quirk types am I able to choose?', answer: 'The application supports Emitter, Transformation, Mutant, Support-focused, and Hybrid ability directions. You can refine the concept further using the optional character input.' },
  { category: 'Quirk', question: 'How do I design a balanced Quirk?', answer: 'Assign the power a distinct usage, area, price, and restriction. A drawback like exhaustion, sight constraints, heat buildup, or limited control fosters interesting choices rather than creating an invincible character.' },
  { category: 'Quirk', question: 'Ought an MHA OC possess a vulnerability?', answer: 'Absolutely. A drawback makes the Quirk simpler to grasp and provides battles, rescues, training, and character arcs a significant challenge to overcome.' },
  { category: 'Hero Design', question: 'What hero paths can the MHA character creator generate?', answer: 'You can build rescue, combat, reconnaissance, support, stealth, and independent vigilante paths. The function helps define the outfit, gear, training, and common scenarios.' },
  { category: 'Hero Design', question: 'How should I plan an MHA hero outfit?', answer: 'Begin with the Quirk and function. The suit ought to shield the wearer, enhance control, aid mobility, or address a distinct flaw. Include visual branding only after the functional elements succeed.' },
  { category: 'Hero Design', question: 'What are support gear options for an MHA OC?', answer: 'Support gear consists of tools that boost safe Quirk usage or assist with rescue and movement. Examples feature targeting visors, insulated gloves, capture tools, rescue cables, and specialized boots.' },
  { category: 'Output', question: 'Does the MHA OC Maker produce a picture?', answer: 'Indeed. The free initial step builds the hero concept, while Pro access unlocks one full-body anime-style character reference image featuring the chosen Quirk path, outfit, palette, function, and personality.' },
  { category: 'Output', question: 'Does it create multiple MHA OCs simultaneously?', answer: 'No. The present workflow produces one detailed MHA OC per generation, which stops a single click from using up several image-generation requests.' },
  { category: 'Character Sheet', question: 'Can I employ the output as an MHA OC character sheet?', answer: 'Sure. Employ the reference image as the visual base, then include the Quirk name, activation method, range, flaws, outfit notes, hero function, bonds, and growth goals.' },
  { category: 'Ideas', question: 'Can I utilize this for MHA OC concepts and prompts?', answer: 'Yes. Merge a Quirk type, hero function, combat style, drawback, and support item to build a targeted prompt rather than a broad superpower.' },
  { category: 'Quality', question: 'Why does my MHA OC seem overly close to a canon character?', answer: 'Modify the power mechanics instead of just altering its shade. Shift the range, cost, body impact, outfit function, role, temperament, and visual silhouette so the figure possesses a unique design logic.' },
  { category: 'Quality', question: 'How do I render an MHA OC less overpowered?', answer: 'Restrict the distance, duration, accuracy, target count, or recovery period. Force the figure to pick between two beneficial effects instead of gaining every benefit at once.' },
  { category: 'Writing', question: 'Am I allowed to use the MHA OC for fan fiction?', answer: 'Absolutely. Employ the Quirk drawback and hero function to build training hurdles, rescue choices, bonds, and outcomes. A figure grows more engaging when the power impacts their everyday life along with a battle.' },
  { category: 'Writing', question: 'Am I allowed to use the MHA OC for role-play?', answer: 'Certainly. Include ambitions, fears, quirks, communication style, limits, allies, rivals, and a motive why the figure seeks or shuns hero work.' },
  { category: 'Access', question: 'Does the MHA OC Maker cost anything?', answer: 'The page can be accessed without cost, though image creation demands an active Pro subscription so image-service expenses and usage caps can be handled.' },
  { category: 'Access', question: 'Why does the Pro billing tier show up prior to creation?', answer: 'The billing tier appears before a paid image request is executed. This stops image credits from being used for visitors lacking access and maintains transparent generation limits.' },
  { category: 'Technical', question: 'Can you use the MHA OC generator on a smartphone?', answer: 'Yes. The interface adapts to compact displays and functions within any current mobile browser. A wider screen might feel easier for examining the character reference.' },
  { category: 'Originality', question: 'Is this a certified My Hero Academia utility?', answer: 'No. This is a fan-created creative utility inspired by My Hero Academia. It lacks any official affiliation, endorsement, or operation by the copyright owners or creators.' },
  { category: 'Best practices', question: 'What actions should follow generating an MHA OC?', answer: 'Title the Quirk, outline its mechanics, polish the outfit, draw various stances, and write a brief narrative demonstrating the hero overcoming a challenge without just using brute strength.' },
];

function createWriteUp() {
  return <section className="mt-10 rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6"><div className="prose prose-slate max-w-none">
    <h2>MHA OC Maker - Generate an Original My Hero Academia Hero</h2>
    <p>This MHA OC Maker assists you in turning a superpower concept into a well-rounded My Hero Academia-themed persona. Rather than ending at an ability title, construct the Quirk around a specific occupation, fighting or rescue technique, outfit design, support gear, character trait, and restriction. The outcome is a single visual mockup along with a concise character outline for further development.</p>
    <p>Apply this MHA OC generator for artwork, character profiles, role-playing, fan stories, practice settings, and hero suit design. It generates fan-made inspiration instead of serving as a licensed My Hero Academia character creator or official utility.</p>

    <h2>Steps to Build an MHA OC</h2>
    <ol className="list-decimal pl-6"><li>Begin with a distinct power or narrative obstacle instead of a broad generic hero concept.</li><li>Select the Quirk category and hero profession that best match the idea.</li><li>Plan a costume and support gadget addressing a realistic flaw.</li><li>Assign the Quirk a restriction, then create a single reference image to tweak.</li></ol>

    <h2>Establish the Quirk Prior to the Outfit</h2>
    <p>A solid MHA OC typically possesses a power expressible in one sentence. Next, consider four factors: what triggers it, what it targets, its operational range, and the physical toll on the user? These details transform a flashy concept into an ability driving meaningful choices within a story.</p>
    <p>Emitter abilities are capable of altering or projecting external elements. Transformation powers temporarily modify the physical form of the user. Mutant traits stay permanently integrated and influence daily physical routines. Hybrid or support-oriented ideas may blend paths, yet they all profit from one primary rule that audiences easily grasp.</p>

    <h2>Assign Every MHA OC a Practical Restriction</h2>
    <p>A limitation isn't a penalty; it serves as the mechanic driving tactical thinking. A power might demand clear sightlines, lose accuracy at a distance, deplete stamina, cause overheating, or grow hard to manage during panic. A rescue hero might wield an amazing skill that remains hazardous in tight crowds. A combat hero could excel close up while struggling against ranged threats.</p>
    <p>Pick a vulnerability tying directly into the hero's demeanor. An impetuous hero might burn through a brief stamina pool. A nervous hero might overcompensate with an exact skill. An arrogant hero could overlook a recovery penalty. Consequently, this constraint dictates both battle sequences and character progression.</p>

    <h2>Outline an MHA Hero Profession</h2>
    <p>Hero professions make an OC seem like part of an operational career. Rescue specialists focus on evacuation, safeguarding, and signals. Reconnaissance specialists collect data and spot threats. Support specialists ready gear and open opportunities for allies. Stealth specialists manage attention and positioning. Combat heroes might still save citizens, though their training and suit highlight a different initial reaction.</p>
    <p>A profession additionally introduces a built-in drawback. A rescue specialist might lack endurance for an extended brawl. A recon specialist could require time to assess conditions. A support hero might underperform lacking prior setup. Such balances stick in memory much better than making every hero universally capable.</p>

    <h2>Design a Functional Hero Suit</h2>
    <p>Base the suit design on the Quirk's protection demands. Heat-generating abilities might necessitate cooling or insulation. A mobility Quirk could require reinforced landing zones and flexible joints. A sensory power might call for headgear, auditory defense, or filtering tools. A rescue Quirk might demand illumination gear, cables, medical tools, or radios.</p>
    <p>Once you understand the practical function, pick a palette and silhouette. A recognizable initial draft needs just two primary colors and one accent. Allow the outfit to convey the role before you add intricate patterns, capes, or decorative armor.</p>

    <h2>Generate MHA OC Concepts Featuring Support Gear</h2>
    <p>Support gear should expand control instead of wiping out a Quirk's vulnerability. A targeting visor can boost precision without granting infinite range. Insulated gloves might lower accidental injury but demand upkeep. A rescue cable aids mobility and evacuation yet adds extra weight plus limited supplies.</p>
    <p>Whenever equipment resolves an issue, assign it a failure condition or a cost. The gear might require battery power, setup time, replacement components, or assistance from a teammate. Such demands foster chances for improvisation, preparation, and progression.</p>

    <h2>Construct an MHA OC Profile Page</h2>
    <p>An effective MHA OC character sheet ought to log the Quirk category, name, activation method, duration, range, optimal use, recovery time, and weakness. Include the costume function, hero role, support gear, goals, personality, and relationships. While the generated image aids the visual aspect, the established rules keep the character steady for writing and role-play.</p>
    <p>Separate what your character chooses to do from what they are capable of doing. A hero might possess an ability capable of massive destruction yet train to apply it strictly for rescue missions. Another individual could hold a modest power and achieve success through equipment, teamwork, and timing. This differentiation grants the OC an identity beyond mere power levels.</p>

    <h2>Ensure an MHA OC Remains Unique</h2>
    <p>Simply shifting the color of a known ability fails to build a fresh character. Alter the body effect, mechanism, role, limitation, personality, and outfit function simultaneously. Evaluate your design against your personal rules rather than checking which canon hero it resembles most.</p>
    <p>A reliable originality check involves describing the figure without referencing any canon personality. Can you detail what the Quirk performs, its cost, how the outfit assists, and the hurdle the hero faces? If so, the concept possesses its own core.</p>

    <h2>Leverage the MHA OC Generator for Role-Play and Tales</h2>
    <p>When writing fan fiction, tie the Quirk directly to everyday routines. Does the individual steer clear of specific substances, require a unique schedule, conceal a physical mutation, or rely on costly maintenance gear? These elements build scenes well before any villain surfaces.</p>
    <p>For role-play purposes, outline what the person expects from others and where they misjudge themselves. Incorporate a boundary, a training objective, a relationship challenging their beliefs, and a scenario where Quirk restrictions matter. A robust role-play entity holds something to learn, a task to complete, and motivation for change.</p>

    <h2>Polish the Created MHA OC</h2>
    <p>Inspect the reference picture for Quirk effects, silhouette, outfit mechanics, and visual clarity. Strip away elements that fail to support the hero duties. Next, draw expression, front, action, rescue, and side perspectives. Verify if the figure stays recognizable when the power is inactive.</p>
    <p>The initial output serves as a design prompt instead of a finished identity. Rename generic attributes, rewrite Quirk mechanics, modify the clothing, and make choices suited to your specific project. Your personal edits transform an MHA OC concept into a usable recurring character.</p>

    <h2>Fan-Made Character Disclaimer</h2>
    <p>This creative fan project draws inspiration from My Hero Academia. It remains entirely unofficial, grants no rights regarding the franchise or characters, and should not be advertised as endorsed by rights holders. Consult the publishing rules of any platform where you share or monetize fan creations.</p>
  </div></section>;
}

export default function MhaOcMakerPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'DesignApplication', operatingSystem: 'Web', description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } };
  return <><JsonLd data={webPageSchema({ name: title, url, description })} /><JsonLd data={webAppSchema} /><ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<MhaOcMakerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>{createWriteUp()}<div className="mt-10 space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2><p className="text-slate-700">Frequent inquiries regarding the creation of an original MHA character.</p></div><FAQSection items={pageFaqs} /><FaqJsonLd faqs={pageFaqs} /></ToolPageShell></>;
}
