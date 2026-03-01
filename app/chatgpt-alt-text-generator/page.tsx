import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTAltTextGeneratorTool } from '@/components/tools/ChatGPTAltTextGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 86400;

const toolSlug = 'chatgpt-alt-text-generator';

const faqs: FaqItem[] = [
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What is alt text?', answer: 'Alt text (alternative text) is descriptive text added to images in HTML. It helps screen readers describe images to visually impaired users and provides context when images fail to load.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What is the ChatGPT Alt Text Generator?', answer: 'The ChatGPT Alt Text Generator is a free tool that creates descriptive, SEO-friendly alt text for images. It generates accurate descriptions that improve accessibility and search visibility.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Why is alt text important?', answer: 'Alt text improves accessibility for visually impaired users, helps search engines understand image content for SEO, and provides fallback text when images don\'t load.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Is the alt text generator free?', answer: 'Yes, this ChatGPT Alt Text Generator is completely free with no registration required. You can generate alt text without usage limits.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Is my image stored when using this tool?', answer: 'No. The generator processes image descriptions locally in your browser without storing or transmitting images. Your images remain private.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'How long should alt text be?', answer: 'Alt text should be concise—typically 5-15 words or 125 characters maximum. Be descriptive but brief, focusing on what the image shows and why it matters.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Do alt text descriptions affect SEO?', answer: 'Yes, alt text helps search engines understand image content, which can improve image search rankings and overall page SEO. It\'s an important ranking factor.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Should decorative images have alt text?', answer: 'Decorative images that don\'t convey information should use empty alt text (alt="") rather than descriptive text. This tells screen readers to skip them.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What makes good alt text?', answer: 'Good alt text is specific, concise, and contextually relevant. It describes what the image shows and why it matters to the page content, without being redundant.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Should alt text include "image of" or "picture of"?', answer: 'No, avoid phrases like "image of" or "picture of." Screen readers already announce images, so start directly with the description: "Woman reading book" not "Image of woman reading book."' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'How do I add alt text to images?', answer: 'Add alt text in HTML using the alt attribute: <img src="image.jpg" alt="Your description">. Most CMS platforms provide alt text fields in image settings.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Can alt text include keywords for SEO?', answer: 'Yes, include relevant keywords naturally when they accurately describe the image. However, prioritize accurate description over keyword stuffing.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Should alt text match image filenames?', answer: 'Alt text should be more descriptive than filenames. Filenames like "IMG123.jpg" provide no context; alt text should describe what the image shows.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What about images with text in them?', answer: 'If images contain important text, include that text in the alt description. This ensures the information is accessible to all users.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'How do I describe complex images?', answer: 'For complex images (charts, graphs, infographics), provide a brief summary in alt text and consider providing detailed descriptions elsewhere on the page.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Should product images have descriptive alt text?', answer: 'Yes, product images should include product names, key features, or relevant details. "Red leather handbag with gold hardware" is better than "Handbag."' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Can the generator help with different image types?', answer: 'Yes, the tool can generate alt text for various image types—photos, illustrations, charts, logos, and more. Adjust output based on image purpose.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What about images used as links?', answer: 'When images function as links, alt text should describe the link destination, not just the image. "Contact us" is better than "Envelope icon" for a contact link.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'How do I test if alt text is effective?', answer: 'Use screen reader software to test how alt text sounds. Ensure descriptions are clear, concise, and provide necessary context without being redundant.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Should alt text be written in present tense?', answer: 'Alt text is typically written in present tense. "Woman reading book" is more natural than "Woman reads book" or "Woman read book."' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What about images in social media?', answer: 'Social media platforms have their own alt text fields. Use similar principles—be descriptive, concise, and contextually relevant.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Can I use the same alt text for similar images?', answer: 'Similar images can have similar alt text, but ensure each description accurately represents its specific image. Generic descriptions may miss important details.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'How do I handle images with captions?', answer: 'If images have captions that fully describe them, alt text can be shorter or focus on details the caption doesn\'t cover. Avoid redundancy.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What makes alt text accessible?', answer: 'Accessible alt text accurately describes image content in a way that helps users understand context and meaning, especially when images convey important information.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Should alt text include emotional context?', answer: 'When relevant, include emotional context. "Smiling family at beach" conveys more than "Family at beach." Context helps users understand image purpose.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'How do I describe images with people?', answer: 'Focus on what\'s relevant to the content. Avoid describing appearance unless relevant. "Businessperson presenting" is better than detailed physical descriptions.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Can the generator help with e-commerce product images?', answer: 'Yes, the tool can generate product-focused alt text that includes product names, colors, features, and other relevant details for e-commerce.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'What about logo images?', answer: 'Logo alt text should include the company or organization name. "Company Name logo" is clear and helpful for both accessibility and SEO.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'How do I ensure alt text is accurate?', answer: 'Review generated alt text against the actual image. Ensure descriptions accurately represent what the image shows and its purpose on the page.' },
  { category: 'ChatGPT Alt Text Generator FAQs', question: 'Should I update alt text when images change?', answer: 'Yes, update alt text when images are replaced or when image context changes. Keep descriptions current and accurate.' }
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>ChatGPT Alt Text Generator: Create Accessible Image Descriptions</h2>
      <p>The ChatGPT Alt Text Generator is a free online tool that creates descriptive, SEO-friendly alt text for images. Alt text (alternative text) is crucial for web accessibility, helping screen readers describe images to visually impaired users while also improving SEO by helping search engines understand image content.</p>
      <p>Well-written alt text makes your website more accessible to all users and can improve your search rankings, especially in image search results. This tool helps you create accurate, concise descriptions that serve both accessibility and SEO purposes.</p>
      <p>GPT Clean Up Tools provides this alt text generator as a free resource for website owners, content creators, and developers. The tool processes image descriptions locally in your browser, ensuring your information remains private.</p>

      <h2>Understanding Alt Text</h2>
      <p>Alt text is descriptive text added to images in HTML that serves multiple important functions.</p>
      <h3>What It Is</h3>
      <p>Alt text is an HTML attribute (alt="description") that provides a text alternative for images. It appears when images fail to load and is read by screen readers for visually impaired users.</p>
      <h3>Accessibility Purpose</h3>
      <p>Screen readers use alt text to describe images to users who cannot see them. This makes web content accessible to visually impaired users, meeting accessibility standards and legal requirements.</p>
      <h3>SEO Benefits</h3>
      <p>Search engines use alt text to understand image content, which helps with image search rankings and overall page SEO. Well-optimized alt text can improve search visibility.</p>
      <h3>Fallback Function</h3>
      <p>When images fail to load, alt text displays in place of the image, helping users understand what should have appeared.</p>

      <h2>Elements of Effective Alt Text</h2>
      <p>Understanding what makes alt text effective helps you use the generator strategically.</p>
      <h3>Conciseness</h3>
      <p>Alt text should be brief—typically 5-15 words or 125 characters maximum. Be descriptive but avoid unnecessary words. "Red sports car on highway" is better than "A photograph showing a red sports car driving on a highway road."</p>
      <h3>Specificity</h3>
      <p>Be specific about what the image shows. "Woman reading book in coffee shop" is more helpful than "Person reading." Specificity provides better context.</p>
      <h3>Contextual Relevance</h3>
      <p>Alt text should describe what matters in context. A product image needs product details; a decorative image may need empty alt text. Consider why the image is on the page.</p>
      <h3>Accuracy</h3>
      <p>Alt text must accurately describe the image. Misleading descriptions hurt accessibility and can damage trust. Always verify accuracy.</p>
      <h3>Natural Language</h3>
      <p>Write alt text in natural, conversational language. Avoid technical jargon unless necessary. "Smiling family at beach" reads better than "Four human subjects in outdoor coastal environment."</p>
      <h3>No Redundancy</h3>
      <p>Don't include information already provided nearby. If an image has a caption that fully describes it, alt text can be shorter or focus on details the caption doesn't cover.</p>

      <h2>Using the Alt Text Generator</h2>
      <p>Effective use maximizes description quality and relevance.</p>
      <h3>Provide Image Context</h3>
      <p>Give the generator information about the image: what it shows, its purpose on the page, and relevant details. More context produces better descriptions.</p>
      <h3>Review Generated Descriptions</h3>
      <p>Review generated alt text for accuracy, conciseness, and relevance. Ensure descriptions accurately represent the image and serve the page context.</p>
      <h3>Customize for Purpose</h3>
      <p>Adjust descriptions based on image purpose. Product images need product details; decorative images may need empty alt text. Match description to function.</p>
      <h3>Verify Length</h3>
      <p>Check that alt text stays within 125 characters. The generator aims for this range, but verify before implementing.</p>

      <h2>Alt Text Best Practices</h2>
      <p>Follow these guidelines for effective alt text.</p>
      <h3>Start with What Matters</h3>
      <p>Lead with the most important information. "Product name and key feature" is better than starting with less relevant details.</p>
      <h3>Avoid "Image of" Phrases</h3>
      <p>Don't start with "image of" or "picture of." Screen readers already announce images, so start directly with the description.</p>
      <h3>Include Text from Images</h3>
      <p>If images contain important text, include that text in alt descriptions. This ensures information is accessible to all users.</p>
      <h3>Describe Function for Links</h3>
      <p>When images function as links, describe the link destination rather than just the image. "Contact us" is better than "Envelope icon" for a contact link.</p>
      <h3>Use Present Tense</h3>
      <p>Write alt text in present tense. "Woman reading book" is more natural than past or future tense.</p>

      <h2>Common Alt Text Mistakes</h2>
      <p>Awareness of common errors helps you avoid them.</p>
      <h3>Too Vague</h3>
      <p>Generic descriptions like "image" or "photo" provide no value. Be specific about what the image shows.</p>
      <h3>Too Long</h3>
      <p>Overly detailed descriptions become tedious for screen reader users. Keep descriptions concise while remaining descriptive.</p>
      <h3>Keyword Stuffing</h3>
      <p>Forced keyword repetition hurts readability and accessibility. Natural keyword integration works better.</p>
      <h3>Missing Alt Text</h3>
      <p>Images without alt text are inaccessible to screen reader users. Always provide alt text unless images are purely decorative.</p>
      <h3>Redundant Information</h3>
      <p>Repeating information already provided in captions or nearby text wastes space. Focus on unique details.</p>
      <h3>Inaccurate Descriptions</h3>
      <p>Descriptions that don't match images confuse users and damage trust. Always verify accuracy.</p>

      <h2>Image Type Considerations</h2>
      <p>Different image types have different alt text needs.</p>
      <h3>Product Images</h3>
      <p>Product images should include product names, key features, colors, or relevant details. "Red leather handbag with gold hardware" provides useful information.</p>
      <h3>Decorative Images</h3>
      <p>Decorative images that don't convey information should use empty alt text (alt=""). This tells screen readers to skip them.</p>
      <h3>Informational Images</h3>
      <p>Images that convey information need descriptive alt text. Charts, graphs, and diagrams should be described clearly.</p>
      <h3>Logo Images</h3>
      <p>Logo alt text should include the company or organization name. "Company Name logo" is clear and helpful.</p>
      <h3>Complex Images</h3>
      <p>For complex images (charts, infographics), provide a brief summary in alt text and consider detailed descriptions elsewhere on the page.</p>

      <h2>Accessibility Standards</h2>
      <p>Alt text is required by web accessibility standards.</p>
      <h3>WCAG Guidelines</h3>
      <p>The Web Content Accessibility Guidelines (WCAG) require alt text for images that convey information. This is a Level A requirement, the most basic accessibility standard.</p>
      <h3>Legal Requirements</h3>
      <p>Many jurisdictions require accessible websites. Missing or poor alt text can create legal liability. Proper alt text helps meet compliance requirements.</p>
      <h3>User Experience</h3>
      <p>Beyond compliance, good alt text improves experience for all users, including those using slow connections where images may not load.</p>

      <h2>SEO Optimization</h2>
      <p>Alt text contributes to search engine optimization.</p>
      <h3>Image Search Rankings</h3>
      <p>Well-optimized alt text helps images rank in image search results. This can drive additional traffic to your website.</p>
      <h3>Page SEO</h3>
      <p>Search engines use alt text to understand page content, which can improve overall page rankings. Images with descriptive alt text contribute to page relevance.</p>
      <h3>Keyword Integration</h3>
      <p>Include relevant keywords naturally when they accurately describe images. However, prioritize accurate description over keyword optimization.</p>

      <h2>Technical Implementation</h2>
      <p>Understanding how to implement alt text ensures it works effectively.</p>
      <h3>HTML Implementation</h3>
      <p>Add alt text in HTML: <code>&lt;img src="image.jpg" alt="Your description"&gt;</code>. Most CMS platforms provide alt text fields in image settings.</p>
      <h3>CMS Integration</h3>
      <p>Popular CMS platforms (WordPress, Shopify, etc.) have built-in alt text fields. Use these for easy management across your site.</p>
      <h3>Empty Alt Text</h3>
      <p>For decorative images, use alt="" (empty alt text) rather than omitting the attribute. This explicitly tells screen readers to skip the image.</p>

      <h2>Best Practices Summary</h2>
      <p>Effective alt text combines multiple elements.</p>
      <h3>Be Descriptive</h3>
      <p>Describe what the image shows in a way that helps users understand its purpose and content.</p>
      <h3>Stay Concise</h3>
      <p>Keep descriptions brief—typically 5-15 words. Conciseness improves readability for screen reader users.</p>
      <h3>Consider Context</h3>
      <p>Think about why the image is on the page and what information it provides. Context guides appropriate description.</p>
      <h3>Verify Accuracy</h3>
      <p>Always ensure alt text accurately represents the image. Misleading descriptions hurt accessibility and trust.</p>
      <h3>Test with Screen Readers</h3>
      <p>Use screen reader software to test how alt text sounds. This helps ensure descriptions are clear and helpful.</p>
    </div>
  </section>
);

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};
  const title = toolData.title;
  const description = toolData.shortDescription;
  return buildToolMeta({ title, description, seoTitle: 'ChatGPT Alt Text Generator - Free Accessible Image Description Tool', urlPath: `/${toolSlug}` });
}

export default async function ChatGPTAltTextGeneratorPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTAltTextGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">ChatGPT Alt Text Generator FAQ</h2>
          <p className="text-slate-700">Common questions about alt text, web accessibility, and image SEO.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
