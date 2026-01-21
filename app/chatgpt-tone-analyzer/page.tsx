import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTToneAnalyzerTool } from '@/components/tools/ChatGPTToneAnalyzerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'chatgpt-tone-analyzer';

const faqs: FaqItem[] = [
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What is the ChatGPT Tone Analyzer?', answer: 'The ChatGPT Tone Analyzer is a free tool that identifies the emotional tone and attitude conveyed in your writing. It detects whether text sounds formal, casual, friendly, professional, confident, uncertain, or other tonal qualities.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Why does tone matter in writing?', answer: 'Tone affects how readers receive your message. The wrong tone can alienate audiences, undermine credibility, or miscommunicate intent. Appropriate tone builds connection and ensures your message lands as intended.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Is the tone analyzer free?', answer: 'Yes, this ChatGPT Tone Analyzer on GPT Clean Up Tools is completely free with no registration required. You can analyze tone without usage limits or subscription fees.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Is my text stored when using this tool?', answer: 'No. The tone analyzer processes text locally in your browser without storing or transmitting content. Your text remains private throughout the analysis.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What tones can the analyzer detect?', answer: 'The tool can identify various tones: formal, informal, friendly, professional, confident, hesitant, enthusiastic, neutral, persuasive, authoritative, conversational, academic, and more.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How accurate is tone analysis?', answer: 'AI tone analysis captures many tonal signals but may miss subtle nuances or cultural variations. Use results as guidance, verifying against your intended tone and audience expectations.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Can tone vary within a document?', answer: 'Yes, tone can and often should vary—introductions may be welcoming while technical sections are more formal. The analyzer can identify tone shifts throughout your text.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How do I adjust tone if the analysis shows problems?', answer: 'Adjust word choice (formal vs. casual vocabulary), sentence structure (short/direct vs. complex), and use of contractions, personal pronouns, and qualifiers. Each affects perceived tone.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Does tone differ from style?', answer: 'Tone is the emotional quality or attitude; style encompasses broader writing choices including structure, voice, and techniques. Tone is one component of overall style.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What is appropriate tone for business emails?', answer: 'Business emails typically need professional but approachable tone—clear, respectful, and appropriately formal for the relationship. Too casual may seem unprofessional; too formal may seem cold.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How does audience affect appropriate tone?', answer: 'Different audiences expect different tones. Experts accept technical tone; general audiences need accessible, warmer approaches. Know your audience to set appropriate tone targets.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Can the analyzer help with AI-generated content?', answer: 'Yes, AI content sometimes has inconsistent or inappropriate tone. Tone analysis helps identify issues so you can adjust AI-assisted writing to match intended voice.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What makes tone sound confident?', answer: 'Confident tone uses declarative statements, avoids excessive hedging (maybe, perhaps, I think), employs active voice, and makes clear assertions. Hesitant language undermines perceived confidence.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What makes tone sound friendly?', answer: 'Friendly tone uses conversational language, personal pronouns (you, we), contractions, inclusive phrasing, and warmth. Formal distance creates opposite effect.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Can tone be too formal?', answer: 'Yes, excessive formality can seem cold, distant, or even condescending. Match formality to context—job applications need formality; customer support may need warmth.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How does tone affect persuasion?', answer: 'Appropriate tone builds trust and receptivity. Wrong tone triggers resistance. Persuasive writing matches audience expectations while conveying confidence and credibility.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Does the tool work with non-English text?', answer: 'The tool is optimized for English. Tone signals vary across languages and cultures. English analysis will be most reliable.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Can I analyze specific sections separately?', answer: 'Yes, analyzing sections separately helps identify where tone shifts occur and whether those shifts are appropriate for your document structure.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What is neutral tone?', answer: 'Neutral tone avoids strong emotional signals—neither overly enthusiastic nor negative, neither very formal nor casual. It is appropriate for objective, factual communication.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How do contractions affect tone?', answer: 'Contractions (don\'t, can\'t, we\'re) create more casual, conversational tone. Avoiding them creates formality. Use appropriately for your context.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What is authoritative tone?', answer: 'Authoritative tone conveys expertise and confidence—clear statements, specific evidence, professional vocabulary. It builds credibility in contexts requiring demonstrated knowledge.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Can tone analysis improve customer communication?', answer: 'Yes, appropriate tone in customer communication improves satisfaction and outcomes. Analyze support responses, marketing copy, and other customer-facing content.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How does passive voice affect tone?', answer: 'Passive voice can sound more formal, distant, or impersonal. Active voice typically sounds more direct and engaging. Choose based on desired tone.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What tone is best for academic writing?', answer: 'Academic writing typically uses formal, objective, authoritative tone—avoiding personal anecdotes, casual language, and emotional appeals while maintaining scholarly credibility.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'Can the same content have different tone for different audiences?', answer: 'Yes, adapting tone for different audiences is common practice. A topic can be presented formally for experts or conversationally for general readers.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How do exclamation points affect tone?', answer: 'Exclamation points add enthusiasm or emphasis but can seem unprofessional or overwhelming if overused. Use sparingly and appropriately for context.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'What is the relationship between tone and brand voice?', answer: 'Brand voice is the consistent personality across communications; tone adapts that voice to specific contexts. Tone analysis helps maintain brand voice consistency.' },
  { category: 'ChatGPT Tone Analyzer FAQs', question: 'How can I make my tone more engaging?', answer: 'Engaging tone often uses direct address (you), varied sentence structure, concrete examples, and appropriate enthusiasm. Avoid monotonous patterns and distant language.' }
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>ChatGPT Tone Analyzer: Understand the Emotional Impact of Your Writing</h2>
      <p>The ChatGPT Tone Analyzer is a free online tool that identifies the emotional tone and attitude conveyed in your writing. Tone shapes how readers perceive your message—the same information delivered with different tones creates vastly different impacts. This tool helps you ensure your writing strikes the right emotional note for your audience and purpose.</p>
      <p>Whether you are crafting professional emails, marketing content, academic papers, or personal communications, understanding your tone helps you connect with readers and achieve your communication goals. The ChatGPT Tone Analyzer provides AI-powered analysis that identifies tonal qualities throughout your text.</p>
      <p>GPT Clean Up Tools provides this tone analyzer as a free resource for writers, marketers, professionals, and anyone seeking to communicate more effectively. The tool processes text locally in your browser, ensuring your content remains private throughout the analysis.</p>

      <h2>Understanding Tone in Writing</h2>
      <p>Tone is the emotional quality or attitude conveyed through word choice, sentence structure, and overall approach. It is how your writing "sounds" to readers—formal or casual, confident or uncertain, friendly or distant.</p>
      <h3>Tone vs. Voice vs. Style</h3>
      <p>Voice is your distinctive writing personality that remains consistent across contexts. Style encompasses your overall writing approach including techniques and structures. Tone adapts your voice to specific situations—you might have a confident voice but use encouraging tone in one context and authoritative tone in another.</p>
      <h3>Why Tone Matters</h3>
      <p>Tone affects reader reception at an emotional level. The wrong tone can undermine otherwise excellent content—a condescending tone alienates readers regardless of helpful information. Appropriate tone builds connection, trust, and receptivity to your message.</p>
      <h3>Tone Signals</h3>
      <p>Various elements signal tone: vocabulary (formal vs. casual words), sentence structure (complex vs. simple), use of contractions, personal pronouns, hedging language, and directness. The analyzer examines these elements to identify overall tonal qualities.</p>

      <h2>Common Tonal Qualities</h2>
      <p>Understanding different tones helps you recognize and adjust your writing appropriately.</p>
      <h3>Formal vs. Informal</h3>
      <p>Formal tone uses professional vocabulary, complete sentences, no contractions, and maintains distance. Informal tone uses casual language, contractions, conversational structures, and personal connection. Context determines appropriateness.</p>
      <h3>Confident vs. Hesitant</h3>
      <p>Confident tone makes clear assertions, uses active voice, and avoids excessive qualifiers. Hesitant tone includes hedging words (maybe, perhaps, seems), passive constructions, and qualified statements. Balance is often needed—some uncertainty is appropriate when warranted.</p>
      <h3>Friendly vs. Professional</h3>
      <p>Friendly tone uses warmth, personal address, inclusive language, and conversational elements. Professional tone maintains appropriate distance, uses businesslike vocabulary, and focuses on competence. Many contexts need blend of both.</p>
      <h3>Authoritative vs. Approachable</h3>
      <p>Authoritative tone establishes expertise through confident assertions, specific evidence, and professional register. Approachable tone invites engagement through accessibility, warmth, and connection. Expert communication often needs both credibility and accessibility.</p>

      <h2>Using the Tone Analyzer</h2>
      <p>Effective tone analysis helps you align writing with communication goals.</p>
      <h3>Before Writing</h3>
      <p>Consider your target tone before drafting. Who is your audience? What relationship do you want to establish? What emotional response do you seek? Having tone goals helps you write appropriately from the start.</p>
      <h3>During Editing</h3>
      <p>Analyze tone during editing to verify alignment with intentions. The analyzer identifies current tone; you determine whether it matches your goals and make adjustments as needed.</p>
      <h3>Section Analysis</h3>
      <p>Different document sections may need different tones. Introductions might be welcoming; technical sections more formal; conclusions encouraging. Analyze sections separately to ensure appropriate variation.</p>
      <h3>Interpreting Results</h3>
      <p>Results show detected tonal qualities. Compare against your intentions. If the analyzer detects "formal and distant" but you want "professional but friendly," you know adjustments are needed.</p>

      <h2>Adjusting Tone</h2>
      <p>When analysis reveals tone mismatches, several techniques help you adjust.</p>
      <h3>Vocabulary Choices</h3>
      <p>Swap formal words for casual equivalents or vice versa. "Utilize" sounds formal; "use" is neutral. "Help" is friendly; "assist" is more formal. Word-level changes significantly shift tone.</p>
      <h3>Sentence Structure</h3>
      <p>Shorter, simpler sentences feel more direct and accessible. Longer, complex sentences feel more formal or academic. Adjust structure to match desired tone.</p>
      <h3>Personal Pronouns</h3>
      <p>First person (I, we) and second person (you) create connection. Third person and passive constructions create distance. Choose based on desired reader relationship.</p>
      <h3>Contractions</h3>
      <p>Contractions (don't, we're, it's) create casual, conversational tone. Avoiding them increases formality. Use appropriately for context.</p>
      <h3>Qualifiers and Hedging</h3>
      <p>Words like "perhaps," "might," "seems" add uncertainty. Direct statements without excessive qualification sound more confident. Balance based on appropriate certainty level.</p>

      <h2>Tone in Different Contexts</h2>
      <p>Different contexts have different tone expectations and requirements.</p>
      <h3>Business Communication</h3>
      <p>Business emails and documents typically need professional but approachable tone—competent without being cold, friendly without being unprofessional. The specific balance depends on relationship and situation.</p>
      <h3>Marketing and Sales</h3>
      <p>Marketing often uses enthusiastic, persuasive, benefit-focused tone. Sales communications balance confidence with relationship-building warmth. Tone should match brand voice while adapting to specific campaigns.</p>
      <h3>Customer Support</h3>
      <p>Support communications need empathetic, helpful, patient tone. Customers want to feel heard and assisted, not processed. Warm professionalism works well.</p>
      <h3>Academic Writing</h3>
      <p>Academic tone is typically formal, objective, and evidence-based. Personal opinions are minimized; assertions are supported. This establishes scholarly credibility.</p>
      <h3>Social Media</h3>
      <p>Social platforms typically expect more casual, engaging, conversational tone. Overly formal content may seem out of place. Match platform culture while maintaining brand consistency.</p>

      <h2>Tone and AI-Generated Content</h2>
      <p>AI-assisted writing benefits from tone analysis for quality control.</p>
      <h3>AI Tone Inconsistency</h3>
      <p>AI models may produce inconsistent tone, shifting between formal and casual or confident and hedging. Tone analysis identifies these inconsistencies for correction.</p>
      <h3>Matching Brand Voice</h3>
      <p>AI content may not automatically match your brand voice. Analyze and adjust AI output to ensure consistent tone across all content, whether human or AI-generated.</p>
      <h3>Context Appropriateness</h3>
      <p>AI may not automatically select appropriate tone for specific contexts. Verify that AI-assisted content has suitable tone for its intended purpose and audience.</p>

      <h2>Best Practices</h2>
      <p>Follow these guidelines for effective tone management.</p>
      <h3>Know Your Audience</h3>
      <p>Audience expectations determine appropriate tone. Research your readers. What tone do they expect? What builds connection versus creates distance?</p>
      <h3>Define Tone Goals</h3>
      <p>Be specific about intended tone before and during writing. Vague goals lead to inconsistent results. "Professional but approachable" is more actionable than "good tone."</p>
      <h3>Check Consistency</h3>
      <p>Ensure consistent tone throughout unless deliberate shifts serve purpose. Inconsistent tone feels jarring and unprofessional.</p>
      <h3>Consider Cultural Context</h3>
      <p>Tone expectations vary across cultures. What seems friendly in one culture may seem unprofessional in another. Consider your audience's cultural context.</p>
      <h3>Balance Multiple Needs</h3>
      <p>Many contexts require balancing multiple tonal needs—confident but not arrogant, friendly but professional, authoritative but accessible. Find the right balance for your situation.</p>
    </div>
  </section>
);

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};
  const toolKey = toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` ? t(`Tools.${toolKey}.title`) : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description` ? t(`Tools.${toolKey}.description`) : toolData.shortDescription;
  return buildToolMeta({ title, description, seoTitle: 'ChatGPT Tone Analyzer - Free Writing Tone Detection Tool', urlPath: `/${toolSlug}`, locale });
}

export default async function ChatGPTToneAnalyzerPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const toolKey = toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` ? t(`Tools.${toolKey}.title`) : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description` ? t(`Tools.${toolKey}.description`) : toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description, url };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTToneAnalyzerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">ChatGPT Tone Analyzer FAQ</h2>
          <p className="text-slate-700">Common questions about tone analysis, emotional impact, and communication effectiveness.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
