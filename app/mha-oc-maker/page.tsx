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
    description: 'Create an original My Hero Academia OC with a Quirk, hero role, costume, personality, weakness, and reference image.',
    seoTitle: 'MHA OC Maker - My Hero Academia OC Generator',
    urlPath: `/${toolSlug}`,
  });
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an MHA OC maker?', answer: 'An MHA OC maker helps you design an original My Hero Academia-inspired character with a Quirk concept, role, costume, personality, limitation, and visual reference image.' },
  { category: 'Usage', question: 'How do I make an MHA OC?', answer: 'Enter a character idea, choose the Quirk type and hero role, then define the combat style, costume, colors, personality, weakness, and support item. Select Make my MHA OC to create one reference image.' },
  { category: 'Ideas', question: 'What are good MHA OC ideas?', answer: 'Start with a simple ability and ask what it can do, what it cannot do, and how the character learned to use it. Rescue abilities, mobility powers, sensory abilities, defensive powers, and clever support Quirks can all create strong original characters.' },
  { category: 'Originality', question: 'Does the MHA OC generator copy canon heroes?', answer: 'No. It is intended for original fan-made concepts. Avoid official names, exact costumes, logos, and recognizable combinations when refining your character.' },
  { category: 'Quirk', question: 'What Quirk types can I use?', answer: 'The tool includes Emitter, Transformation, Mutant, Support-focused, and Hybrid ability directions. You can make the concept more specific in the optional character field.' },
  { category: 'Quirk', question: 'How do I create a balanced Quirk?', answer: 'Give the ability a clear action, range, cost, and limitation. A weakness such as stamina loss, line-of-sight dependence, overheating, or reduced control creates useful decisions instead of making the character unbeatable.' },
  { category: 'Quirk', question: 'Should an MHA OC have a weakness?', answer: 'Yes. A limitation makes the Quirk easier to understand and gives fights, rescues, training, and character growth a meaningful problem to solve.' },
  { category: 'Hero Design', question: 'What hero roles can the MHA character creator make?', answer: 'You can create rescue, combat, reconnaissance, support, stealth, and independent vigilante directions. The role helps determine the costume, equipment, training, and typical situations.' },
  { category: 'Hero Design', question: 'How do I design an MHA hero costume?', answer: 'Start with the Quirk and role. The costume should protect the user, improve control, support movement, or solve a specific weakness. Add visual branding only after the practical parts work.' },
  { category: 'Hero Design', question: 'What are support items for an MHA OC?', answer: 'Support items are tools that improve safe Quirk use or help with rescue and mobility. Examples include targeting visors, insulated gloves, capture tools, rescue cables, and specialized boots.' },
  { category: 'Output', question: 'Does the MHA OC maker generate an image?', answer: 'Yes. The free first step creates the hero concept, and Pro access unlocks one full-body anime-style character reference image with the selected Quirk direction, costume, palette, role, and personality.' },
  { category: 'Output', question: 'Does it generate multiple MHA OCs at once?', answer: 'No. The current workflow creates one focused MHA OC per generation, which prevents one click from spending several image-generation requests.' },
  { category: 'Character Sheet', question: 'Can I use the result as an MHA OC character sheet?', answer: 'Yes. Use the reference image as the visual starting point, then add the Quirk name, activation method, range, weaknesses, costume notes, hero role, relationships, and growth goals.' },
  { category: 'Ideas', question: 'Can I use this for MHA OC ideas and prompts?', answer: 'Yes. Combine a Quirk type, hero role, combat style, limitation, and support item to create a focused prompt instead of a generic superpower.' },
  { category: 'Quality', question: 'Why does my MHA OC feel too similar to a canon character?', answer: 'Change the ability mechanism rather than only changing its color. Alter the range, cost, body effect, costume function, role, personality, and visual silhouette so the character has a distinct design logic.' },
  { category: 'Quality', question: 'How do I make an MHA OC less overpowered?', answer: 'Limit the distance, duration, precision, number of targets, or recovery time. Make the character choose between two useful effects instead of receiving every advantage at once.' },
  { category: 'Writing', question: 'Can I use the MHA OC for fan fiction?', answer: 'Yes. Use the Quirk limitation and hero role to create training problems, rescue decisions, relationships, and consequences. A character becomes more interesting when the ability affects their daily life as well as a fight.' },
  { category: 'Writing', question: 'Can I use the MHA OC for role-play?', answer: 'Yes. Add goals, fears, habits, communication style, boundaries, allies, rivals, and a reason the character wants or avoids hero work.' },
  { category: 'Access', question: 'Is the MHA OC maker free?', answer: 'The page can be opened for free, but image generation requires an active Pro plan so image-service costs and usage limits can be managed.' },
  { category: 'Access', question: 'Why does the Pro payment plan appear before generation?', answer: 'The payment plan appears before a paid image request is made. This prevents image credits from being spent for visitors without access and keeps the generation limits clear.' },
  { category: 'Technical', question: 'Does the MHA OC generator work on mobile?', answer: 'Yes. The controls stack for smaller screens and work in a modern mobile browser. A larger display may be more comfortable for reviewing the character reference.' },
  { category: 'Originality', question: 'Is this an official My Hero Academia tool?', answer: 'No. This is a fan-made creative tool inspired by My Hero Academia. It is not affiliated with, endorsed by, or operated by the official creators or rights holders.' },
  { category: 'Best practices', question: 'What should I do after creating an MHA OC?', answer: 'Name the Quirk, write its rules, refine the costume, sketch several poses, and create a short scene that shows the character solving a problem without relying on raw power alone.' },
];

function createWriteUp() {
  return <section className="mt-10 rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6"><div className="prose prose-slate max-w-none">
    <h2>MHA OC Maker - Create an Original My Hero Academia Character</h2>
    <p>This MHA OC maker helps you turn a superpower idea into a more complete My Hero Academia-inspired character. Instead of stopping at an ability name, build the Quirk around a role, combat or rescue style, costume function, support item, personality, and limitation. The result is one visual reference image and a compact character direction you can continue developing.</p>
    <p>Use this MHA OC generator for fan art, character sheets, role-play, fan fiction, training scenarios, and hero costume planning. It creates fan-made inspiration and is not an official My Hero Academia character creator or licensed tool.</p>

    <h2>How to Make an MHA OC</h2>
    <ol className="list-decimal pl-6"><li>Start with a specific ability or character problem rather than a vague “strong hero” idea.</li><li>Choose the Quirk type and hero role that best fit the concept.</li><li>Design a costume and support item that solve a practical weakness.</li><li>Give the Quirk a limitation, then generate one reference image to refine.</li></ol>

    <h2>Build the Quirk Before the Costume</h2>
    <p>A strong MHA OC usually has an ability that can be explained in one sentence. Then ask four questions: what activates it, what does it affect, what is its effective range, and what does it cost the user? These questions turn a flashy idea into a power that can create choices in a scene.</p>
    <p>Emitter abilities can change or project something outside the body. Transformation abilities alter the user's body temporarily. Mutant abilities remain part of the body and affect how the character moves through everyday life. Hybrid and support-focused concepts can combine directions, but they still benefit from one central rule that readers can remember.</p>

    <h2>Give Every MHA OC a Useful Limitation</h2>
    <p>A limitation is not a punishment; it is the part of the Quirk that creates strategy. A power may require line of sight, lose precision at long range, consume stamina, overheat the body, or become difficult to control when the user is frightened. A rescue hero may have an excellent ability that is dangerous in crowded spaces. A combat hero may be powerful at close range but weak against distance.</p>
    <p>Choose a weakness that interacts with the character's personality. An impatient hero may waste a short stamina window. An anxious hero may over-correct a precise ability. A confident hero may ignore a recovery cost. The limitation then shapes both action scenes and character growth.</p>

    <h2>Design an MHA Hero Role</h2>
    <p>Hero roles make an OC feel like part of a working profession. Rescue heroes prioritize evacuation, protection, and communication. Reconnaissance heroes gather information and identify danger. Support heroes prepare equipment and create openings for teammates. Stealth heroes control attention and movement. Combat heroes may still rescue people, but their training and costume will emphasize a different first response.</p>
    <p>A role also gives you a natural weakness. A rescue specialist may not be built for a long duel. A recon specialist may need time to analyze a situation. A support hero may be less effective without preparation. Those tradeoffs are more memorable than making every character equally good at everything.</p>

    <h2>Make the Hero Costume Practical</h2>
    <p>Start the costume from the Quirk's safety requirements. Heat-producing abilities may need insulation or cooling. A mobility Quirk may need flexible joints and protected landing points. A perception ability may need a visor, ear protection, or a way to filter information. A rescue Quirk may need cables, lights, medical supplies, or communication equipment.</p>
    <p>Once the practical function is clear, choose a silhouette and palette. Two main colors and one accent are enough for a recognizable first draft. Let the costume communicate the role before adding decorative armor, capes, or complicated patterns.</p>

    <h2>Create MHA OC Ideas With Support Items</h2>
    <p>Support items should extend control, not erase the Quirk's weakness. A targeting visor can improve accuracy but should not create unlimited range. Insulated gloves can reduce accidental harm but may require maintenance. A rescue cable can help with mobility and evacuation but introduces weight and a limited supply.</p>
    <p>When an item solves a problem, give it a cost or failure condition. The equipment may need setup time, battery power, replacement parts, or a teammate's help. That creates opportunities for preparation, improvisation, and growth.</p>

    <h2>Build an MHA OC Character Sheet</h2>
    <p>A useful MHA OC character sheet should record the Quirk name, category, activation method, range, duration, best use, weakness, and recovery time. Add the hero role, costume function, support items, personality, goals, and relationships. The generated image can help with the visual side, but the rules make the character consistent for writing and role-play.</p>
    <p>Separate what the character can do from what the character chooses to do. A hero may have an ability that could cause serious damage but train to use it for rescue. Another character may have a modest ability and become effective through timing, teamwork, and equipment. That distinction gives the OC an identity beyond power level.</p>

    <h2>Keep an MHA OC Original</h2>
    <p>Changing the color of a familiar ability is not enough to create a new character. Change the mechanism, body effect, limitation, role, costume function, and personality together. Compare the design to your own rules instead of asking which canon hero it resembles most.</p>
    <p>A good originality test is to describe the character without naming a canon character. Can you explain what the Quirk does, what it costs, how the costume helps, and what problem the character faces? If yes, the concept has its own foundation.</p>

    <h2>Use the MHA OC Generator for Stories and Role-Play</h2>
    <p>For fan fiction, connect the Quirk to daily life. Does the character avoid certain materials, need a special routine, hide a visible mutation, or depend on equipment that is expensive to repair? These details create scenes before a villain appears.</p>
    <p>For role-play, define what the character wants from other people and what they misunderstand about themselves. Add a training goal, a boundary, a relationship that challenges their assumptions, and a situation where the Quirk's limitation matters. A strong role-play character has something to do, something to learn, and a reason to change.</p>

    <h2>Refine the Generated MHA OC</h2>
    <p>Review the reference image for silhouette, costume function, Quirk effect, and visual clarity. Remove details that do not support the hero role. Then sketch front, side, action, rescue, and expression views. Test whether the character remains recognizable without the ability effect turned on.</p>
    <p>The first result is a design prompt, not a final identity. Rename generic features, rewrite the Quirk rules, adjust the costume, and make the choices that belong to your project. Your revision is what turns an MHA OC idea into a character you can keep using.</p>

    <h2>Fan-Made Character Disclaimer</h2>
    <p>This is a fan-made creative tool inspired by My Hero Academia. It is not official, does not provide rights to the franchise or its characters, and should not be presented as endorsed by the rights holders. Review the rules of the platform where you publish or monetize fan work.</p>
  </div></section>;
}

export default function MhaOcMakerPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'DesignApplication', operatingSystem: 'Web', description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } };
  return <><JsonLd data={webPageSchema({ name: title, url, description })} /><JsonLd data={webAppSchema} /><ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<MhaOcMakerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>{createWriteUp()}<div className="mt-10 space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2><p className="text-slate-700">Common questions about creating an original MHA character.</p></div><FAQSection items={pageFaqs} /><FaqJsonLd faqs={pageFaqs} /></ToolPageShell></>;
}
