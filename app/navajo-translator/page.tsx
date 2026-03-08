import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { NavajoTranslatorTool } from '@/components/tools/NavajoTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { cleanUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 86400;

const toolSlug = 'navajo-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Navajo Translator';
  const description = 'English to Navajo translator. Convert English text to Navajo for learning and respectful use.';
  const seoTitle = 'Navajo Translator - English to Navajo Translation Online';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Navajo Translator: English to Navajo Translation Online</h2>
        <p>A Navajo translator is an online tool that helps convert English text to Navajo (Diné bizaad)—the language of the Navajo people and one of the most widely spoken Indigenous languages in North America. Whether you are learning Navajo, preparing respectful materials, or exploring the language for educational purposes, an English to Navajo translator lets you type or paste your text and get a version that supports learning and respectful use.</p>
        <p>This free Navajo translator runs in your browser. You enter your English text, click translate, and copy the result. No sign-up is required. The tool is designed for learning and respectful use. In this guide we explain what a Navajo translator is, how to use an English to Navajo translator, when to use it for learning and education, and how it fits with certified translation and other text tools. For text cleanup and the full tool list, see the site.</p>

        <h2>What Is Navajo (Diné bizaad)?</h2>
        <p>Navajo (Diné bizaad) is the language of the Navajo Nation and is among the most widely spoken Indigenous languages in the United States. An English to Navajo translator does not replace learning from speakers or certified materials; it can support vocabulary and phrase exploration.</p>
        <p>Navajo has complex grammar, including tone and verb morphology, that automated tools cannot fully capture. Use this English to Navajo translator as a learning aid alongside textbooks, speaker input, and programs from the Navajo Nation or accredited language programs. For official or published translation, always use certified professional translators.</p>

        <h2>How to Use the Navajo Translator</h2>
        <p>Open the Navajo translator, type or paste your English text into the input box, and click Translate to Navajo or Translate. The tool returns a Navajo translation or phrase support. Copy the result for use in learning, respectful communication, or education. If your text was pasted from a webpage or document, clean it first with plain text so the input is tidy.</p>

        <h2>English to Navajo: Use With Respect</h2>
        <p>An English to Navajo translator is a learning and support tool. For important or official use, consult certified translators and Navajo language resources. Use the tool for vocabulary exploration and phrase practice, not as the sole source of translation.</p>
        <p>Respectful use means acknowledging that Diné bizaad is a living language and that the Navajo Nation and language community are the authority. This tool supports learners and educators; it does not replace learning from speakers or certified materials. When you share Navajo text, credit the language and direct people to professional resources when they need accurate or official translation.</p>

        <h2>When to Use a Navajo Translator</h2>
        <p>Use a Navajo translator or English to Navajo tool for language learning, educational projects, respectful communication support, or exploration. It is not a substitute for certified translation or learning from speakers.</p>
        <p>Good use cases include classroom vocabulary demos, personal phrase practice, and respectful exploration of Diné bizaad when paired with certified materials. Avoid using the tool for legal, medical, or official documents; for those, always use professional Navajo translators and resources from the Navajo Nation.</p>

        <h2>Limitations and Accuracy</h2>
        <p>Automatic English to Navajo translation is limited. Navajo has complex grammar and tone; for accurate or official use, consult certified translators and community resources. Use this tool as a learning aid.</p>
        <p>The tool may not capture dialect variation, tone, or context-dependent meanings. For classroom use it can support vocabulary and phrase exploration when paired with certified materials. For any use where accuracy is critical—legal, medical, signage, or published content—always use professional Navajo translators and resources from the Navajo Nation.</p>

        <h2>Privacy and Local Processing</h2>
        <p>Many Navajo translators run in the browser and do not send your text to a server. This tool is designed to process text locally when possible. That helps with privacy when you are practicing vocabulary or phrases. For sensitive or confidential text, check whether the tool you use runs locally or online; when in doubt, use short practice phrases rather than long or personal content.</p>

        <h2>How a Navajo Translator Fits With Other Text Tools</h2>
        <p>If you are preparing text for a document or project, you may use several tools in sequence. Paste content from a webpage as plain text first, then clean extra spaces. Once your text is clean, you can run it through the Navajo translator.</p>

        <h2>Similar Period and Language Translators</h2>
        <p>If you need period or stylistic English instead of Navajo, other translators target different eras or styles. The site has the full tool list; pick the one that matches your project.</p>

        <h2>Navajo Translator for Education</h2>
        <p>Teachers and students use English to Navajo translators to support language learning and cultural education. The tool can help explore vocabulary and phrases. Use it as a supplement to certified materials and speaker input.</p>
        <p>In language and culture units, the Navajo translator can support introductory exposure to Diné bizaad. Run simple English phrases through the tool and compare with certified resources or speaker pronunciation. Emphasize that the tool is for practice and exploration and that the Navajo Nation and accredited programs are the source for in-depth learning and certified translation.</p>

        <h2>English to Navajo for Learning and Respectful Use</h2>
        <p>An English to Navajo translator can support learning and respectful use when combined with community resources and certified translation where needed. Pair the tool with textbooks, speaker input, and programs from the Navajo Nation.</p>
        <p>Use the translator for vocabulary lists, phrase practice, and classroom demos. Do not use it as the only source for signage, official documents, or published materials. When you share Navajo text with others, credit the language and the Navajo Nation and direct people to certified resources when they need accurate or official translation.</p>

        <h2>What to Expect From English to Navajo Translation</h2>
        <p>When you use an English to Navajo translator, results are for learning and support. The tool may return word or phrase suggestions rather than full sentences depending on how it is built. For important or official use, consult certified translators. Treat the output as a learning aid, not as certified or legal translation. When in doubt, pair the tool with resources from the Navajo Nation and accredited language programs.</p>

        <h2>Mobile and Cross-Device Use</h2>
        <p>Browser-based Navajo translators work on phones and tablets. No install or sign-up is required. You can get English to Navajo support from any device; bookmark the page for quick access when you need it for language learning, classroom demos, or respectful exploration. Remember that output is for learning and support and that for official use you should consult certified translators.</p>

        <h2>Further Information</h2>
        <p>Navajo translator tools run in the browser. You enter English text, click translate, and copy the result. Use the Navajo translator for learning and respectful use. For formal or official Navajo translation, consult certified resources.</p>
        <p>We also offer period and stylistic English translators; each fits a different use case. The site lists all tools and text utilities for cleaning pasted content.</p>
        <p>No sign-up or login is required for the Navajo translator. You can use it in a private or incognito window if you prefer. When you need English to Navajo support for classroom demos or personal practice, open the page and paste your text. For official or certified use, always turn to professional Navajo translators and resources from the Navajo Nation.</p>

        <h2>Navajo Language and Culture</h2>
        <p>Navajo (Diné bizaad) is central to Navajo (Diné) culture and identity. An English to Navajo translator is a learning aid; it does not replace community knowledge or certified translation. When using Navajo text, respect cultural context and use resources from the Navajo Nation and language programs where possible.</p>
        <p>Language revitalization efforts have emphasized teaching Diné bizaad in schools and communities. An English to Navajo translator can support those efforts when used as a supplement to certified materials and speaker-led instruction. When you recommend this tool, direct users to Navajo Nation resources and accredited programs for deeper learning and for any official or certified translation needs.</p>

        <h2>English to Navajo for Classrooms</h2>
        <p>Teachers use English to Navajo tools to support language and culture units. Pair the translator with certified materials, speaker visits, and curriculum from the Navajo Nation or accredited programs. Use the tool for vocabulary exploration and phrase practice, not as the sole source of translation.</p>
        <p>When preparing handouts or slides that include Navajo phrases, run short English sentences through the Navajo translator as a starting point; then verify with certified resources or speaker input where possible. Keep each example short so students can read and practice. Emphasize that the tool is for learning and that certified translation is required for official or published use.</p>

        <h2>Navajo Translator and Respectful Use</h2>
        <p>When you use a Navajo translator or English to Navajo tool, aim for respectful use. Do not use output for official documents, legal matters, or medical information without certified translation. For learning, signage ideas, or educational projects, the tool can support exploration when combined with community resources.</p>
        <p>Respectful use also means crediting the Navajo Nation and Diné culture when you use Navajo text in educational or public contexts. Direct learners and colleagues to certified materials and language programs. This English to Navajo translator is one support tool among many; community knowledge and certified translation remain essential.</p>

        <h2>Certified Navajo Translation</h2>
        <p>For official, legal, medical, or published content in Navajo, use certified professional translators and resources from the Navajo Nation. An English to Navajo translator on this site is for learning and support only. Keep that distinction clear when recommending tools to students or colleagues.</p>
        <p>Many institutions and agencies require certified translation for documents, signage, or public materials. This tool does not provide certification. Use it for classroom demos, vocabulary practice, and respectful exploration; for anything that must be legally or officially accurate, consult professional Navajo translators and community-approved resources.</p>
        <p>When students or colleagues ask where to get certified Navajo translation, direct them to the Navajo Nation language programs and to professional translators who work with Diné bizaad. This English to Navajo translator remains a learning aid; it does not replace that professional pipeline.</p>

        <h2>Navajo and Other Indigenous Languages</h2>
        <p>Navajo is one of many Indigenous languages of the Americas. This page focuses on English to Navajo translation support. For other languages and resources, seek community and academic sources.</p>
        <p>We do not offer translators for other Indigenous languages on this site. For Navajo (Diné bizaad), this English to Navajo translator provides learning and support. For period or stylistic English—medieval, Middle English, Old English, Shakespearean, fancy English—we have dedicated translator pages listed on the site.</p>

        <h2>Navajo Language Revival and Resources</h2>
        <p>Navajo (Diné bizaad) has been the focus of language revitalization efforts. An English to Navajo translator can support learners and educators when used alongside certified materials and programs from the Navajo Nation. When you recommend this tool to others, clarify that it is for learning and support.</p>

        <h2>When Not to Use a Navajo Translator</h2>
        <p>Do not use a Navajo translator for official documents, legal matters, medical information, or published content without certified translation. The tool is for learning, vocabulary exploration, and respectful educational use. For any context where accuracy or legal validity matters, consult professional Navajo translators and resources from the Navajo Nation.</p>
        <p>When recommending this tool to students or colleagues, make the distinction clear: learning and support only. For formal or official Navajo, direct users to certified resources.</p>

        <h2>English to Navajo: Step-by-Step</h2>
        <p>To use this English to Navajo translator: (1) Open the Navajo translator page. (2) Type or paste your English text into the input box. If the text came from a webpage, use plain text first. (3) Click Translate to Navajo or Translate. (4) Copy the result. (5) Use it for learning or support, and consult certified resources for official use.</p>
        <p>For long texts, process in sections. Remember that output is for learning and support; for important or official Navajo text, use certified translators.</p>

        <h2>Navajo Translator Output: Learning Aid vs Certified</h2>
        <p>This English to Navajo translator is a learning aid, not a certified translation service. Use it for vocabulary exploration, phrase practice, and respectful educational projects. For official, legal, medical, or published content in Navajo, consult certified professional translators and resources from the Navajo Nation. When recommending this tool to students or colleagues, make the distinction clear.</p>

        <h2>English to Navajo for Podcasts and Video</h2>
        <p>Content creators making language or culture content sometimes use an English to Navajo translator to support vocabulary or phrase segments. The tool is for learning and support; pair it with certified materials and community resources. Keep any Navajo segments short and accurate; for official or published use, consult certified translators.</p>

        <h2>Navajo Translator and Social Media</h2>
        <p>English to Navajo phrases can support language learning or respectful cultural content on social media. Keep use appropriate and pair with certified resources. Use the Navajo translator for learning and respectful use only; for formal or official translation, use certified translators.</p>

        <h2>Why English to Navajo Translator Matters</h2>
        <p>Navajo (Diné bizaad) is one of the most widely spoken Indigenous languages in the United States. An English to Navajo translator supports language learning and respectful use when combined with community resources and certified materials. Use the tool for classrooms, vocabulary exploration, or educational projects, and consult the Navajo Nation and accredited programs for depth.</p>
        <p>Teachers can use the Navajo translator to support language and culture units. Pair it with certified materials and speaker input. Emphasize that the tool is a supplement, not a replacement for learning from speakers or certified translation.</p>

        <h2>Navajo Translator and Education Standards</h2>
        <p>Many schools and universities teach Indigenous languages and cultures. An English to Navajo translator can support that curriculum when used alongside certified materials and community resources. Always pair tool use with accredited programs and speaker input. When recommending this Navajo translator to students or colleagues, emphasize that it is for learning and support only and that certified resources are needed for official use.</p>

        <h2>English to Navajo and Language Learning</h2>
        <p>An English to Navajo translator can support vocabulary and phrase practice when used alongside certified materials and community resources. Pair the tool with textbooks, speaker input, and programs from the Navajo Nation. Navajo (Diné bizaad) has complex grammar and tone; the tool gives learning support, not certified translation. For official or published content, use professional translators.</p>

        <h2>Navajo Translator and Diné Culture</h2>
        <p>Navajo (Diné bizaad) is central to Diné culture and identity. When you use an English to Navajo translator, pair it with resources from the Navajo Nation and language programs. Respect cultural context and use the tool for learning and respectful exploration, not for official or commercial use without certified translation.</p>

        <h2>Free Navajo Translator and No Sign-Up</h2>
        <p>This Navajo translator is free and does not require an account or sign-up. You can open the page, paste your English text, and get English to Navajo support in seconds. That makes it useful for language learning, classroom demos, or respectful exploration. Many users prefer tools that run in the browser and do not send data to a server; this English to Navajo translator is designed with that in mind when possible.</p>

        <h2>Navajo Translator Bookmark and Quick Access</h2>
        <p>Bookmark this Navajo translator page for quick access when you need English to Navajo support. The tool works on desktop and mobile. Teachers and students often need a quick English to Navajo tool for vocabulary or phrase practice; this free Navajo translator provides that. For official or certified translation, consult professional resources.</p>

        <h2>Summary: When to Use a Navajo Translator</h2>
        <p>Use a Navajo translator when you need English to Navajo support for learning, education, or respectful exploration. The tool is free, runs in the browser, and does not require sign-up. Treat the output as a learning aid; for formal or official use, use certified translators and resources from the Navajo Nation when needed. The site lists all tools.</p>

        <h2>Quick Reference: Navajo Translator and Related Tools</h2>
        <p>Use the Navajo translator when you need English to Navajo support. The site has the full list of tools.</p>
        <p>Navajo translator output is for learning and respectful use. For official or certified translation, consult professional resources.</p>

        <h2>Final Checklist for Navajo Translator</h2>
        <p>Before you use or share output from the Navajo translator: Is the use appropriate (learning and support only)? Did you use plain text for pasted input if it came from the web? For official or certified Navajo, have you directed users to professional resources? Use the Navajo translator for learning and respectful use only.</p>

        <h2>English to Navajo: Final Notes</h2>
        <p>When you use this English to Navajo translator, remember that output is for learning and respectful use. For official or certified Navajo, consult professional resources. Bookmark this page for quick access when you need English to Navajo support; the tool is free and runs in your browser.</p>

        <h2>Combining Navajo Translator With Other Text Tools</h2>
        <p>If you are preparing materials that include both English and Navajo, you may use several tools. Paste content from a webpage as plain text first, then clean extra spaces. Use the Navajo translator for the phrases you want to convert to Navajo. For period or stylistic English (e.g. translate into Shakespearean, translate to Anglo Saxon), we have dedicated translator pages on the site.</p>

        <h2>English to Navajo: Copy-Paste Workflow</h2>
        <p>When you copy text from a webpage or document into the Navajo translator, clean it first. Use plain text so the input is tidy, then paste it into the English to Navajo translator. That workflow keeps the input clean and the output easier to use. After you run text through the Navajo translator, you may use the result for learning or support. If you combine it with other content from the web, use plain text for that too so the final document is consistent.</p>

        <h2>English to Navajo: Learning vs Certified Use</h2>
        <p>When you use an English to Navajo translator, results are for learning and support. The tool may offer word-by-word or phrase-level suggestions rather than full sentence translation, depending on implementation. For important or official use, consult certified translators. Treat the output as a learning aid and verify with community resources or certified materials when accuracy matters.</p>

        <h2>Navajo Translator Tips</h2>
        <p>When using the Navajo translator, start with short phrases or sentences to see how the tool handles vocabulary and structure. For longer texts, process in sections. Always pair the tool with certified materials and speaker input for learning; never rely on it alone for official or published Navajo. When recommending this tool to students or colleagues, clarify that it is for learning and support and that the Navajo Nation and accredited programs are the authority for certified translation.</p>

        <h2>Why Use an English to Navajo Tool Online</h2>
        <p>An online Navajo translator is convenient: no software to install, no sign-up, and it runs in your browser. You can use it from any device for vocabulary exploration, phrase practice, or classroom demos. Many teachers and students need a quick English to Navajo support tool for language and culture units; this free tool provides that. Remember that output is for learning and support and that for official or certified use you must consult professional translators and Navajo Nation resources.</p>

        <h2>Using the Navajo Translator for Different Contexts</h2>
        <p>The way you use an English to Navajo translator depends on context. In a classroom, use it for vocabulary and phrase demos alongside certified materials. For personal learning, pair it with textbooks and speaker input. For signage or public materials, always have output verified by certified translators or community resources. Never use the tool as the sole source for legal, medical, or official content. When in doubt, direct users to the Navajo Nation and accredited language programs.</p>

        <h2>Navajo Grammar and Tone</h2>
        <p>Navajo (Diné bizaad) has complex grammar, including verb morphology and tone, that automated tools cannot fully reproduce. This English to Navajo translator gives learning support—word and phrase suggestions—rather than grammatically complete certified translation. For understanding Navajo grammar and tone in depth, use textbooks, courses, and speaker-led instruction. The tool is a supplement for exploration and practice, not a replacement for learning from the language community.</p>

        <h2>English to Navajo for Handouts and Presentations</h2>
        <p>When you prepare handouts or presentations that include Navajo phrases, use the English to Navajo translator as a starting point for short sentences or vocabulary. Verify with certified resources or speaker input where possible. Keep each phrase short so the audience can read and practice. Emphasize that the tool is for learning and that certified translation is required for official or published materials. Pair the translator with curriculum from the Navajo Nation or accredited programs for best practice.</p>

        <h2>Respecting Diné bizaad in Public Use</h2>
        <p>When Navajo (Diné bizaad) appears in public—signage, exhibits, or media—it should be accurate and respectful. An English to Navajo translator on this site is for learning and support; for any public or published use, have the text verified by certified translators or community resources. That respects the language and the Navajo Nation. Use the tool for classroom demos and personal practice; for anything that will be seen by the public or used officially, consult professionals.</p>

        <h2>Editing and Using Navajo Translator Output</h2>
        <p>After you run text through the Navajo translator, use the result as a learning aid. If you are creating handouts or slides, keep phrases short and verify with certified resources where possible. Do not use the output for legal, medical, or official documents without professional translation. When recommending the tool to others, emphasize that it supports learning and exploration and that the Navajo Nation and accredited programs are the source for certified translation and in-depth language study.</p>

        <h2>Quick Workflow Summary for English to Navajo</h2>
        <p>For best results with the Navajo translator: start with clean, plain text. If you pasted from the web, use plain text first. Paste into the English to Navajo translator and click translate. Copy the output and use it for learning or support; for official or certified use consult professional translators. For period or stylistic English, see the site. That keeps the input tidy and the output easier to use for learning and practice.</p>
        <p>Treat Navajo translator output as a learning aid. Pair the tool with certified materials and resources from the Navajo Nation. Never use the output for legal, medical, or official documents without certified translation.</p>
        <p>Teachers can use this workflow for handouts and demos: clean the text, run it through the Navajo translator, then verify key phrases with certified resources where possible. Students get exposure to vocabulary and structure while learning that community and professional resources are the authority for accurate Navajo.</p>

        <h2>Conclusion</h2>
        <p>Use a Navajo translator to convert English to Navajo for learning and respectful use. This free English to Navajo translator runs in your browser. Treat the output as a learning aid; for official or certified Navajo translation consult professional translators and resources from the Navajo Nation. For similar translator tools and for text cleanup, see the site.</p>
        <p>Bookmark the Navajo translator for quick access when you need English to Navajo support. The tool works on desktop and mobile with no install or sign-up. Pair it with certified materials and the Navajo Nation for in-depth learning and official translation. Use it for vocabulary and phrase practice; for legal, medical, or published content always use professional Navajo translators. The site lists all translator and text tools in one place.</p>
      </div>
    </section>
  );
}

export default async function NavajoTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = cleanUrl(toolSlug);

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a Navajo translator?', answer: 'A Navajo translator is an online tool that helps convert English text to Navajo (Diné bizaad) for learning and respectful use. It supports English to Navajo translation online and is designed as a learning aid, not a certified translation service. Pair it with community resources and certified materials for best use.' },
    { category: 'General', question: 'Is the Navajo translator free?', answer: 'Yes. This Navajo translator is free to use in your browser with no sign-up or account required. You enter or paste your English text, click translate, and copy the result. The tool runs locally when possible so your text is not sent to a server.' },
    { category: 'Usage', question: 'How do I use the Navajo translator?', answer: 'Open the Navajo translator page, type or paste your English text into the input box, and click Translate to Navajo or Translate. Copy the result for use in learning, respectful communication, or education. If your text was pasted from a webpage or document, clean it first with plain text so the input is plain text.' },
    { category: 'Technical', question: 'What is Navajo (Diné bizaad)?', answer: 'Navajo (Diné bizaad) is the language of the Navajo Nation and one of the most widely spoken Indigenous languages in the United States. It is central to Diné culture and identity and has been the focus of language revitalization efforts.' },
    { category: 'Technical', question: 'Is English to Navajo translation accurate?', answer: 'Automatic English to Navajo translation is limited. Navajo has complex grammar and tone that a simple tool cannot fully capture. Use this tool for learning and vocabulary exploration; for official, legal, or published content, consult certified professional translators and resources from the Navajo Nation.' },
    { category: 'Use cases', question: 'When would I use an English to Navajo translator?', answer: 'Use an English to Navajo translator for language learning, educational projects, respectful communication support, or exploration. It is ideal for classroom demos, vocabulary practice, and cultural education when combined with certified materials and speaker input. It is not a substitute for certified translation.' },
    { category: 'Use cases', question: 'Can I translate from Navajo to English?', answer: 'This tool focuses on converting English to Navajo. Some other tools offer reverse conversion from Navajo to English. For cleaning and formatting text before or after you translate, use plain text so your document stays consistent.' },
    { category: 'General', question: 'Navajo translator vs other language tools?', answer: 'The site lists period and language tools; the Navajo translator is for English to Navajo (Diné bizaad) support. The site lists all tools.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'This Navajo translator is designed to process text locally in your browser when possible, so your input is not sent to a server. That helps with privacy and speed. For details on how a specific session is handled, check the tool description or privacy policy.' },
    { category: 'General', question: 'Where can I find certified Navajo translation?', answer: 'For official or certified Navajo translation, consult professional Navajo translators and community language resources from the Navajo Nation. This tool is for learning and support only; it does not replace certified translation for legal, medical, or published content.' },
    { category: 'Use cases', question: 'Is a Navajo translator good for school?', answer: 'Yes. Teachers and students use it to support language and culture education when it is paired with certified materials and speaker input. Use the tool for vocabulary exploration and phrase practice; emphasize that it is a learning aid and that certified resources are needed for official use.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Browser-based Navajo translators typically handle normal paragraph and page lengths. For very long texts, process in sections. If the text was pasted from the web, plain text works best.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Navajo translator runs in your browser on phones and tablets with no install or download required. You can paste text, get English to Navajo support, and copy the result into any app.' },
    { category: 'General', question: 'Where can I find an English to Navajo tool?', answer: 'This page is our English to Navajo translator. For period English style—Middle English, Old English (translate to Anglo Saxon), Shakespearean, or medieval—see our other translator pages. The site lists all period and language tools.' },
    { category: 'Formatting', question: 'Can I get different Navajo dialects?', answer: 'Tools vary. For dialect-specific or community-accepted usage, consult Navajo language resources and speakers. This English to Navajo translator gives general learning support; for nuanced or regional usage, pair it with certified materials and community input.' },
    { category: 'Use cases', question: 'Can I use Navajo text in a project?', answer: 'Use the translator as a learning aid for drafts, vocabulary, or phrase practice. For published or official use, verify with certified translators or community resources. Do not use the output for legal, medical, or official documents without certified translation.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The Navajo translator runs entirely in your browser, so there is no download or install. Open the page, paste your English text, and get English to Navajo support. The same applies on mobile: no app install is required.' },
    { category: 'Workflow', question: 'Can I copy Navajo text to a document?', answer: 'Yes. Copy the output and paste it into any app for learning, notes, or respectful communication support. Use it for handouts, vocabulary lists, or educational projects. For official or certified use, consult professional translators.' },
    { category: 'Technical', question: 'How does English to Navajo translation work?', answer: 'The tool converts English input to Navajo-style output for learning and support. It does not provide certified or legally binding translation. For full accuracy and for official use, pair the tool with certified resources and speaker input from the Navajo Nation or accredited programs.' },
    { category: 'General', question: 'Can I translate long paragraphs?', answer: 'Yes. You can run long paragraphs through the Navajo translator. For long text, process in sections. Remember that output is for learning and support; for important or official Navajo text, use certified translators. If the text was pasted from the web, plain text works best.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the Navajo translator runs locally in your browser, your text is not stored on our servers. Session handling may vary; for full details on data handling and retention, see the tool description and the site’s privacy policy.' },
    { category: 'Use cases', question: 'Navajo translator for learning?', answer: 'Yes. Use it to explore vocabulary and phrases alongside certified materials and community resources. Pair the tool with textbooks, speaker input, and programs from the Navajo Nation. Treat it as a learning aid, not as the sole source of translation for official or published content.' },
    { category: 'General', question: 'Where can I find more translator tools?', answer: 'The site lists all period and language tools; pick the one that matches your project.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<NavajoTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Navajo Translator and English to Navajo translation.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
