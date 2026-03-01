import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTPassiveVoiceFixerTool } from '@/components/tools/ChatGPTPassiveVoiceFixerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 86400;

const toolSlug = 'chatgpt-passive-voice-fixer';

const faqs: FaqItem[] = [
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'What is the ChatGPT Passive Voice Fixer?', answer: 'The ChatGPT Passive Voice Fixer is a free tool that identifies passive voice constructions in your writing and suggests active voice alternatives. It helps you create more direct, engaging prose.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'What is passive voice?', answer: 'Passive voice occurs when the subject receives the action rather than performing it. "The ball was thrown by John" is passive; "John threw the ball" is active. Passive emphasizes the action or recipient; active emphasizes the doer.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Is the passive voice fixer free?', answer: 'Yes, this ChatGPT Passive Voice Fixer on GPT Clean Up Tools is completely free with no registration required. You can fix passive voice without usage limits or subscription fees.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Is my text stored when using this tool?', answer: 'No. The passive voice fixer processes text locally in your browser without storing or transmitting content. Your text remains private throughout the process.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Is passive voice always bad?', answer: 'No, passive voice has legitimate uses—when the actor is unknown, unimportant, or when you want to emphasize the action or recipient. The issue is excessive or inappropriate passive voice, not all passive constructions.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'When should I use passive voice?', answer: 'Use passive when: the doer is unknown ("The window was broken"), the doer is less important than the action ("Mistakes were made"), or in scientific writing emphasizing processes over researchers.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Why is active voice generally preferred?', answer: 'Active voice is typically more direct, concise, and engaging. It clearly identifies who does what, creating stronger prose. Readers process active constructions more easily.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'How do I identify passive voice?', answer: 'Passive voice typically uses a form of "to be" (was, were, is, are) plus a past participle. The subject receives rather than performs the action. "The report was written" vs. "She wrote the report."' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Does the tool convert all passive to active?', answer: 'The tool identifies passive constructions and suggests active alternatives. You decide which conversions improve your writing—some passive uses may be intentional and appropriate.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'How much passive voice is too much?', answer: 'There is no strict percentage, but excessive passive voice makes writing feel indirect and bureaucratic. Most style guides recommend active voice as the default, with passive reserved for specific purposes.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Does passive voice affect readability?', answer: 'Yes, excessive passive voice reduces readability. Active voice is more direct and easier to process. Passive voice often requires more words and creates less engaging prose.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Can the tool help with AI-generated content?', answer: 'Yes, AI content sometimes overuses passive voice. The fixer identifies these instances for conversion, making AI-assisted writing more direct and engaging.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'What about scientific writing?', answer: 'Scientific writing traditionally used passive voice ("The experiment was conducted") but many journals now prefer active voice ("We conducted the experiment"). Check your target publication\'s style.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Does passive voice affect word count?', answer: 'Passive constructions are often longer than active equivalents. Converting to active voice can reduce word count while improving clarity.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Can I use the tool for academic writing?', answer: 'Yes, though academic conventions vary. Some fields prefer active voice; others accept passive. Use the tool to identify patterns, then apply discipline-specific guidelines.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Does the tool work with non-English text?', answer: 'The tool is optimized for English. Passive voice constructions differ across languages. English analysis will be most accurate.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'How does passive voice affect tone?', answer: 'Passive voice creates more formal, impersonal, or distant tone. It can sound bureaucratic or evasive. Active voice feels more direct, confident, and engaging.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Should business writing avoid passive voice?', answer: 'Business writing benefits from active voice for clarity and directness. Passive voice can obscure responsibility ("Mistakes were made" vs. "We made mistakes").' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'What is the "by zombie" test?', answer: 'If you can add "by zombies" after the verb and it makes grammatical sense, the sentence is probably passive. "The report was written [by zombies]" works; "She wrote the report [by zombies]" does not.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Does passive voice always include "by"?', answer: 'No, "by" phrases are optional. "The report was written" is passive even without "by someone." The passive construction is about the verb form and subject relationship.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Can passive voice be more clear than active?', answer: 'Sometimes. When the actor is unknown or irrelevant, passive can be clearer. "The building was constructed in 1920" may work better than awkwardly inserting unknown builders.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'How do I convert passive to active?', answer: 'Identify the true actor (often in "by" phrase or implied), make them the subject, and use active verb form. "The cake was eaten by children" becomes "Children ate the cake."' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Does fiction allow more passive voice?', answer: 'Fiction writing has stylistic flexibility. Passive voice can create specific effects—mystery, distance, formal speech. Use intentionally for effect, not by default.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'What percentage of passive voice is normal?', answer: 'Strong writing typically has 5-15% passive voice. Higher percentages suggest overuse. The right amount depends on context and purpose.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Can I review suggestions before applying?', answer: 'Yes, the tool shows passive instances and suggests alternatives. You review and decide which changes to make. Not all passive voice needs changing.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Does the tool explain why constructions are passive?', answer: 'The tool identifies passive voice and provides active alternatives. Understanding the pattern helps you recognize passive voice in future writing.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'How does passive voice affect persuasion?', answer: 'Active voice is generally more persuasive—clearer, more confident, more engaging. Passive can seem evasive or weak. Persuasive writing typically prefers active voice.' },
  { category: 'ChatGPT Passive Voice Fixer FAQs', question: 'Can the tool help me learn to avoid passive voice?', answer: 'Yes, seeing patterns in your writing helps you recognize passive constructions. Over time, you will naturally write more actively.' }
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>ChatGPT Passive Voice Fixer: Transform Your Writing with Active Voice</h2>
      <p>The ChatGPT Passive Voice Fixer is a free online tool that identifies passive voice constructions in your writing and suggests active voice alternatives. While passive voice has legitimate uses, excessive passive voice makes writing indirect, wordy, and less engaging. This tool helps you create stronger, more direct prose.</p>
      <p>Active voice clearly shows who does what, creating more vigorous and readable writing. The ChatGPT Passive Voice Fixer identifies where passive voice weakens your text and provides alternatives that clarify responsibility and strengthen expression.</p>
      <p>GPT Clean Up Tools provides this passive voice fixer as a free resource for writers seeking clearer, more direct communication. The tool processes text locally in your browser, ensuring your content remains private throughout the analysis.</p>

      <h2>Understanding Passive vs. Active Voice</h2>
      <p>The distinction between passive and active voice is fundamental to effective writing.</p>
      <h3>Active Voice</h3>
      <p>In active voice, the subject performs the action: "The team completed the project." The doer (team) is clear, the action (completed) is direct, and the sentence is concise. Active voice is typically more engaging and easier to read.</p>
      <h3>Passive Voice</h3>
      <p>In passive voice, the subject receives the action: "The project was completed by the team." The focus shifts to the recipient (project), often requiring more words and obscuring who is responsible. The actor may even be omitted: "The project was completed."</p>
      <h3>Why This Matters</h3>
      <p>Active voice creates direct, vigorous prose. Passive voice can seem indirect, bureaucratic, or evasive. While both have appropriate uses, defaulting to active voice produces stronger writing.</p>

      <h2>When Passive Voice Is Appropriate</h2>
      <p>Passive voice is not always wrong. Certain situations call for passive constructions.</p>
      <h3>Unknown Actor</h3>
      <p>When you do not know who performed an action: "The window was broken sometime last night." Forcing active voice with unknown actors creates awkward constructions.</p>
      <h3>Unimportant Actor</h3>
      <p>When who did something matters less than what was done: "The building was constructed in 1890." The builders' identity is less relevant than the construction date.</p>
      <h3>Emphasis Shift</h3>
      <p>When you want to emphasize the action or recipient: "The suspect was arrested at noon." The arrest matters more than which officer made it.</p>
      <h3>Scientific Convention</h3>
      <p>Some scientific writing uses passive to emphasize methods over researchers: "The samples were analyzed using mass spectrometry." Though this convention is changing.</p>
      <h3>Tact and Diplomacy</h3>
      <p>When assigning responsibility directly would be inappropriate: "Mistakes were made in the process." (Though this can also seem evasive.)</p>

      <h2>Problems with Excessive Passive Voice</h2>
      <p>While appropriate passive voice serves purposes, excess causes problems.</p>
      <h3>Wordiness</h3>
      <p>Passive constructions often use more words: "The decision was made by the committee" (7 words) vs. "The committee decided" (3 words). Accumulated wordiness bogs down writing.</p>
      <h3>Obscured Responsibility</h3>
      <p>Passive voice can hide who is responsible: "Errors were introduced" avoids identifying who made errors. This can seem evasive or bureaucratic.</p>
      <h3>Weak Impact</h3>
      <p>Passive constructions feel less direct and engaging. Compare: "The ball was hit by the batter" vs. "The batter hit the ball." Active voice has more impact.</p>
      <h3>Reduced Readability</h3>
      <p>Readers process active voice more easily. Heavy passive voice increases cognitive load and reduces reading engagement.</p>

      <h2>Using the Passive Voice Fixer</h2>
      <p>Effective use of this tool improves your writing while respecting appropriate passive uses.</p>
      <h3>Submit Your Text</h3>
      <p>Paste your content for analysis. The tool identifies passive constructions throughout your text, showing where passive voice appears.</p>
      <h3>Review Suggestions</h3>
      <p>For each passive construction, the tool suggests active alternatives. Review these against your communication purpose. Some passive uses may be intentional and appropriate.</p>
      <h3>Apply Selectively</h3>
      <p>Accept suggestions that improve your writing; keep passive voice where it serves purpose. The goal is intentional voice choice, not elimination of all passive.</p>
      <h3>Learn Patterns</h3>
      <p>Notice where you tend to use passive voice. Understanding your patterns helps you write more actively from the start.</p>

      <h2>Converting Passive to Active</h2>
      <p>Understanding conversion techniques helps you improve independently of tools.</p>
      <h3>Find the True Actor</h3>
      <p>Identify who actually performs the action. This may be in a "by" phrase or implied by context. "The report was reviewed" – by whom?</p>
      <h3>Make the Actor the Subject</h3>
      <p>Move the actor to subject position: "The manager reviewed the report." The doer is now prominent.</p>
      <h3>Use Active Verb Form</h3>
      <p>Change from "was [past participle]" to simple past or appropriate tense: "was reviewed" becomes "reviewed."</p>
      <h3>Adjust as Needed</h3>
      <p>Some conversions require minor rewording for natural flow. The meaning should remain the same.</p>

      <h2>Passive Voice in Different Contexts</h2>
      <p>Context affects how much passive voice is appropriate.</p>
      <h3>Business Writing</h3>
      <p>Business communication benefits from active voice for clarity and directness. Passive voice can obscure accountability—often undesirable in business contexts.</p>
      <h3>Academic Writing</h3>
      <p>Academic conventions vary by discipline. Some fields accept passive voice; others prefer active. Check your field's expectations. Many style guides now recommend active voice.</p>
      <h3>Technical Writing</h3>
      <p>Technical documentation often uses passive for procedures: "The button should be pressed." Active voice can be clearer: "Press the button." User instructions often work better in active.</p>
      <h3>Creative Writing</h3>
      <p>Fiction writers use passive voice for specific effects—creating mystery, distance, or formal register. Use intentionally for effect, not by habit.</p>
      <h3>Journalism</h3>
      <p>News writing strongly prefers active voice for clarity and impact. Passive voice should be exception, not rule.</p>

      <h2>Common Passive Voice Patterns</h2>
      <p>Recognizing common patterns helps you identify passive voice.</p>
      <h3>Be + Past Participle</h3>
      <p>The most common pattern: "was written," "were completed," "is being reviewed." Forms of "be" plus past participle usually indicate passive.</p>
      <h3>Get + Past Participle</h3>
      <p>"Get" can also form passive: "got injured," "gets done." These are informal but still passive constructions.</p>
      <h3>By Phrases</h3>
      <p>Presence of "by [actor]" often indicates passive: "written by the team," "reviewed by management." The actor appears after the verb rather than before.</p>

      <h2>Best Practices</h2>
      <p>Follow these guidelines for effective voice usage.</p>
      <h3>Default to Active</h3>
      <p>Make active voice your default choice. Use passive only when it serves specific purpose.</p>
      <h3>Be Intentional</h3>
      <p>When you use passive voice, know why. Intentional passive serves purpose; habitual passive weakens writing.</p>
      <h3>Vary Sentence Structure</h3>
      <p>All-active writing can feel monotonous. Occasional passive provides variety. Balance is key.</p>
      <h3>Consider Your Audience</h3>
      <p>Some audiences expect certain conventions. Match voice to audience expectations while maintaining clarity.</p>
      <h3>Review and Revise</h3>
      <p>Use tools like this fixer during editing. First drafts may have unintentional passive voice that revision can address.</p>
    </div>
  </section>
);

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};
  const title = toolData.title;
  const description = toolData.shortDescription;
  return buildToolMeta({ title, description, seoTitle: 'ChatGPT Passive Voice Fixer - Free Active Voice Converter', urlPath: `/${toolSlug}` });
}

export default async function ChatGPTPassiveVoiceFixerPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description, url };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTPassiveVoiceFixerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">ChatGPT Passive Voice Fixer FAQ</h2>
          <p className="text-slate-700">Common questions about passive and active voice, when to use each, and how to improve your writing.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
