import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTMetaDescriptionGeneratorTool } from '@/components/tools/ChatGPTMetaDescriptionGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'chatgpt-meta-description-generator';

const faqs: FaqItem[] = [
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What is a meta description?', answer: 'A meta description is an HTML attribute that provides a brief summary of a web page. It appears in search engine results below the title tag and helps users understand page content before clicking.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What is the ChatGPT Meta Description Generator?', answer: 'The ChatGPT Meta Description Generator is a free tool that creates SEO-optimized meta descriptions for web pages. It generates compelling, keyword-rich descriptions that improve click-through rates from search results.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'How long should meta descriptions be?', answer: 'Meta descriptions should be 150-160 characters to display fully in search results. Longer descriptions get truncated, so stay within this limit for maximum visibility.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Is the meta description generator free?', answer: 'Yes, this ChatGPT Meta Description Generator is completely free with no registration required. You can generate meta descriptions without usage limits.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Is my content stored when using this tool?', answer: 'No. The generator processes text locally in your browser without storing or transmitting content. Your information remains private.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Do meta descriptions affect SEO rankings?', answer: 'Meta descriptions do not directly affect rankings but significantly impact click-through rates. Higher CTR can indirectly benefit SEO by signaling content relevance to search engines.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Should every page have a unique meta description?', answer: 'Yes, unique meta descriptions help each page stand out in search results and improve click-through rates. Duplicate descriptions reduce effectiveness.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What makes a good meta description?', answer: 'Good meta descriptions are compelling, include relevant keywords naturally, accurately represent page content, and encourage clicks. They should be clear, concise, and action-oriented.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Should meta descriptions include calls to action?', answer: 'Yes, CTAs like "Learn more," "Discover," or "Get started" can improve click-through rates when used naturally and appropriately.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'How do I add meta descriptions to my website?', answer: 'Add meta descriptions in the HTML <head> section using the <meta name="description" content="..."> tag, or through your CMS\'s SEO settings.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Can I use the same meta description for multiple pages?', answer: 'Avoid duplicate meta descriptions. Each page should have a unique description that accurately represents its specific content.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What if my meta description is too long?', answer: 'Search engines truncate long descriptions. Keep within 150-160 characters to ensure your full message displays in search results.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Should meta descriptions match page content exactly?', answer: 'Meta descriptions should accurately represent page content. Misleading descriptions hurt user experience and can damage trust and SEO performance.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'How do keywords work in meta descriptions?', answer: 'Include relevant keywords naturally. Search engines may bold matching keywords when users search, making your listing stand out. Avoid keyword stuffing.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Can meta descriptions improve click-through rates?', answer: 'Yes, compelling meta descriptions significantly improve CTR from search results. Well-written descriptions can double or triple click-through rates compared to generic ones.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What tone should meta descriptions use?', answer: 'Tone should match your brand and content type. Professional content may need formal tone; consumer content often benefits from friendly, accessible language.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Should I include numbers or statistics?', answer: 'Yes, specific numbers and statistics can make descriptions more compelling and credible. "Save 30% on..." is more effective than "Save money."' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'How often should I update meta descriptions?', answer: 'Update when page content changes significantly, when CTR is low, or when new keywords become relevant. Regular review keeps descriptions effective.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Can the generator create descriptions for different industries?', answer: 'Yes, the tool generates descriptions applicable across industries. Adjust output to match your specific industry tone and terminology.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What about local SEO in meta descriptions?', answer: 'For local businesses, include location information naturally. "Best pizza in Chicago" helps local search visibility.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Should meta descriptions be written in first or third person?', answer: 'Either can work depending on context. First person ("We offer...") feels personal; third person ("This page explains...") feels objective. Choose based on your brand voice.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Can I use special characters in meta descriptions?', answer: 'Use special characters sparingly. Some characters may not display correctly. Stick to standard punctuation for reliability.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What if search engines rewrite my meta description?', answer: 'Search engines may rewrite descriptions they think are more relevant. Ensure your description accurately represents content to minimize rewriting.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'How do meta descriptions work with title tags?', answer: 'Title tags and meta descriptions work together. Title tags grab attention; meta descriptions provide context. Both should be optimized for maximum impact.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Can the generator help with e-commerce product pages?', answer: 'Yes, the tool can generate product-focused meta descriptions that highlight key features, benefits, and value propositions for e-commerce pages.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What about blog post meta descriptions?', answer: 'Blog post meta descriptions should summarize the article\'s value proposition. They should entice readers while accurately representing content.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Should meta descriptions include brand names?', answer: 'Including your brand name can help recognition, especially for established brands. For new brands, focus on value proposition first.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'How do I test meta description effectiveness?', answer: 'Monitor click-through rates in Google Search Console. Compare CTR across pages to identify which descriptions perform best.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'Can I generate multiple meta description options?', answer: 'Yes, generate multiple options and test which performs best. A/B testing meta descriptions can reveal what resonates with your audience.' },
  { category: 'ChatGPT Meta Description Generator FAQs', question: 'What makes a meta description stand out?', answer: 'Standout descriptions clearly communicate unique value, use compelling language, include relevant keywords, and create urgency or interest that compels clicks.' }
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>ChatGPT Meta Description Generator: Create SEO-Optimized Search Snippets</h2>
      <p>The ChatGPT Meta Description Generator is a free online tool that creates compelling, SEO-optimized meta descriptions for your web pages. Meta descriptions appear in search engine results below your page title, providing a brief summary that influences whether users click through to your site.</p>
      <p>While meta descriptions don't directly affect search rankings, they significantly impact click-through rates (CTR). Well-crafted meta descriptions can double or triple your CTR compared to generic or missing descriptions. This tool helps you create descriptions that attract clicks while accurately representing your content.</p>
      <p>GPT Clean Up Tools provides this meta description generator as a free resource for website owners, SEO professionals, and content creators. The tool processes information locally in your browser, ensuring your content remains private.</p>

      <h2>Understanding Meta Descriptions</h2>
      <p>Meta descriptions are HTML attributes that summarize web page content. They appear in search engine results pages (SERPs) below the title tag, helping users understand what they'll find before clicking.</p>
      <h3>What They Are</h3>
      <p>Meta descriptions are brief summaries (typically 150-160 characters) that appear in search results. They're not visible on your actual web page but are crucial for search visibility and user engagement.</p>
      <h3>Why They Matter</h3>
      <p>Meta descriptions directly impact click-through rates. Compelling descriptions encourage clicks; weak descriptions reduce traffic. Higher CTR can indirectly benefit SEO by signaling content relevance to search engines.</p>
      <h3>SEO Impact</h3>
      <p>While meta descriptions don't directly affect rankings, they significantly influence organic traffic through CTR. Well-optimized descriptions can substantially increase search-driven visits.</p>

      <h2>Elements of Effective Meta Descriptions</h2>
      <p>Understanding what makes meta descriptions effective helps you use the generator strategically.</p>
      <h3>Optimal Length</h3>
      <p>Meta descriptions should be 150-160 characters. Longer descriptions get truncated in search results, cutting off your message. The generator creates descriptions within this optimal range.</p>
      <h3>Keyword Integration</h3>
      <p>Include relevant keywords naturally. Search engines may bold matching keywords when users search, making your listing stand out. Avoid keyword stuffing—natural integration works best.</p>
      <h3>Compelling Language</h3>
      <p>Use action-oriented, benefit-focused language. "Discover," "Learn," "Get," and "Find" create engagement. Focus on what users gain, not just what you offer.</p>
      <h3>Accuracy</h3>
      <p>Meta descriptions must accurately represent page content. Misleading descriptions hurt user experience, damage trust, and can negatively impact SEO performance.</p>
      <h3>Uniqueness</h3>
      <p>Each page should have a unique meta description. Duplicate descriptions reduce effectiveness and miss opportunities to highlight page-specific value.</p>
      <h3>Call to Action</h3>
      <p>Include subtle CTAs when appropriate. "Learn more," "Discover how," or "Get started" can improve click-through rates without being pushy.</p>

      <h2>Using the Meta Description Generator</h2>
      <p>Effective use maximizes description quality and relevance.</p>
      <h3>Provide Context</h3>
      <p>Give the generator information about your page: topic, key points, target audience, and primary keywords. More context produces better descriptions.</p>
      <h3>Review Generated Options</h3>
      <p>The generator may provide multiple options. Review each for accuracy, keyword integration, and compelling language. Select the best or combine elements.</p>
      <h3>Customize for Your Brand</h3>
      <p>Adjust generated descriptions to match your brand voice. The tool provides foundation; you add brand personality and specific details.</p>
      <h3>Verify Length</h3>
      <p>Check that descriptions stay within 150-160 characters. The generator aims for this range, but verify before implementing.</p>

      <h2>Meta Description Best Practices</h2>
      <p>Follow these guidelines for effective meta descriptions.</p>
      <h3>Start with Value</h3>
      <p>Lead with what users gain. "Save 30% on..." is more compelling than "We offer discounts." Value-first language improves CTR.</p>
      <h3>Use Specifics</h3>
      <p>Specific details are more compelling than vague claims. "5-step guide" beats "helpful guide." Numbers and specifics create credibility.</p>
      <h3>Match Search Intent</h3>
      <p>Align descriptions with what searchers seek. Informational queries need educational descriptions; commercial queries need benefit-focused descriptions.</p>
      <h3>Test and Iterate</h3>
      <p>Monitor CTR in Google Search Console. Test different descriptions to see what resonates with your audience. Data guides optimization.</p>
      <h3>Update Regularly</h3>
      <p>Review and update meta descriptions when content changes, when CTR is low, or when new keywords become relevant. Keep descriptions current and effective.</p>

      <h2>Common Meta Description Mistakes</h2>
      <p>Awareness of common errors helps you avoid them.</p>
      <h3>Too Long or Too Short</h3>
      <p>Descriptions over 160 characters get truncated; descriptions under 100 characters waste space. Aim for the optimal 150-160 character range.</p>
      <h3>Keyword Stuffing</h3>
      <p>Forced keyword repetition hurts readability and can appear spammy. Natural keyword integration maintains both SEO value and user appeal.</p>
      <h3>Generic Language</h3>
      <p>Vague descriptions like "Welcome to our website" provide no value. Be specific about what users will find.</p>
      <h3>Duplicate Descriptions</h3>
      <p>Using the same description across multiple pages wastes opportunities. Each page needs unique, page-specific descriptions.</p>
      <h3>Misleading Content</h3>
      <p>Descriptions that don't match page content frustrate users and damage trust. Always ensure accuracy.</p>
      <h3>Missing Descriptions</h3>
      <p>Pages without meta descriptions let search engines create their own, often from page content that may not be optimal. Always provide descriptions.</p>

      <h2>Industry-Specific Considerations</h2>
      <p>Different industries may have specific meta description needs.</p>
      <h3>E-Commerce</h3>
      <p>Product pages benefit from descriptions highlighting key features, benefits, and value. Include pricing when it strengthens value proposition.</p>
      <h3>Local Business</h3>
      <p>Include location information naturally. "Best pizza in Chicago" helps local search visibility and attracts local customers.</p>
      <h3>Content/Blog</h3>
      <p>Blog post descriptions should summarize article value and entice readers. Focus on what readers will learn or gain.</p>
      <h3>Service Businesses</h3>
      <p>Service descriptions should highlight expertise, results, and customer benefits. "Expert [service] that [benefit]" works well.</p>

      <h2>Technical Implementation</h2>
      <p>Understanding how to implement meta descriptions ensures they work effectively.</p>
      <h3>HTML Implementation</h3>
      <p>Add meta descriptions in the HTML <head> section: <meta name="description" content="Your description here">. Most CMS platforms provide SEO settings for easy implementation.</p>
      <h3>CMS Integration</h3>
      <p>Popular CMS platforms (WordPress, Shopify, etc.) have built-in SEO fields for meta descriptions. Use these for easy management.</p>
      <h3>Character Encoding</h3>
      <p>Ensure proper character encoding to display special characters correctly. UTF-8 encoding handles most characters properly.</p>

      <h2>Measuring Meta Description Effectiveness</h2>
      <p>Tracking performance helps optimize descriptions.</p>
      <h3>Google Search Console</h3>
      <p>Monitor CTR for individual pages. Compare CTR across pages to identify which descriptions perform best.</p>
      <h3>A/B Testing</h3>
      <p>Test different descriptions for the same page to see which generates higher CTR. Data reveals what resonates with your audience.</p>
      <h3>Benchmarking</h3>
      <p>Compare your CTR to industry averages. Typical CTR varies by position and industry, but 2-5% is common for organic results.</p>

      <h2>Advanced Optimization</h2>
      <p>Beyond basics, advanced techniques can improve performance.</p>
      <h3>Rich Snippets</h3>
      <p>Structured data can enhance search listings with additional information (ratings, prices, etc.). Meta descriptions work alongside structured data.</p>
      <h3>Seasonal Updates</h3>
      <p>Update descriptions for seasonal relevance. "Holiday gift ideas" works better in December than generic descriptions.</p>
      <h3>Mobile Optimization</h3>
      <p>Mobile search results may display fewer characters. Ensure key information appears in the first 120 characters for mobile visibility.</p>

      <h2>Best Practices Summary</h2>
      <p>Effective meta descriptions combine multiple elements.</p>
      <h3>Be Compelling</h3>
      <p>Write descriptions that make users want to click. Focus on value, benefits, and what users gain.</p>
      <h3>Stay Accurate</h3>
      <p>Always ensure descriptions accurately represent page content. Honesty builds trust and improves user experience.</p>
      <h3>Optimize Length</h3>
      <p>Stay within 150-160 characters to ensure full display in search results. Every character counts.</p>
      <h3>Include Keywords</h3>
      <p>Naturally integrate relevant keywords. This helps with visibility and may result in keyword bolding in search results.</p>
      <h3>Test Continuously</h3>
      <p>Regular testing and optimization keep meta descriptions effective as search behavior and algorithms evolve.</p>
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
  return buildToolMeta({ title, description, seoTitle: 'ChatGPT Meta Description Generator - Free SEO Meta Description Tool', urlPath: `/${toolSlug}`, locale });
}

export default async function ChatGPTMetaDescriptionGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTMetaDescriptionGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">ChatGPT Meta Description Generator FAQ</h2>
          <p className="text-slate-700">Common questions about meta descriptions, SEO optimization, and search result snippets.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
