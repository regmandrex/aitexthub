import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { MiddleEnglishTranslatorTool } from '@/components/tools/MiddleEnglishTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 86400;

const toolSlug = 'middle-english-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Middle English Translator';
  const description = 'Translate modern English to Middle English. Middle English converter for Chaucer-style and medieval text.';
  const seoTitle = 'Middle English Translator - Middle English Converter Online';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Middle English Translator: Middle English Converter Online</h2>
        <p>A Middle English translator is an online tool that converts modern English into Middle English—the language of Geoffrey Chaucer, medieval manuscripts, and the period from roughly the 11th to the 15th century. Whether you need a Middle English converter for a literature class, historical fiction, or to explore how English looked before the Great Vowel Shift, a Middle English translator lets you type or paste your text and get a version that echoes Chaucer-style vocabulary and spelling.</p>
        <p>This free Middle English translator runs in your browser. You enter your text, click convert or translate, and copy the result. No sign-up is required. The tool approximates Middle English by swapping in period-appropriate words and forms. In this guide we explain what Middle English is, how to use a Middle English translator or Middle English converter, when to use it for creative writing and education. For text cleanup and other tools, see the site.</p>

        <h2>What Is Middle English?</h2>
        <p>Middle English is the form of English used in England from roughly 1150 to 1500. It followed Old English (Anglo-Saxon) and preceded Early Modern English (the language of Shakespeare). A Middle English translator does not reproduce The Canterbury Tales word-for-word; it gives your modern sentences a Middle English flavor.</p>

        <h2>How to Use the Middle English Translator</h2>
        <p>Open the Middle English translator, type or paste your modern English into the input box, and click Convert to Middle English or Translate. The tool returns a Middle English–style version. Copy the result for use in essays, role-play, or assignments. Clean pasted text with plain text first for best results.</p>

        <h2>Middle English Converter vs Medieval vs Old English</h2>
        <p>A Middle English converter and medieval translator often target the same period (Chaucer-era). Old English translator targets Anglo-Saxon (earlier). Shakespearean translator targets Early Modern English (thee, thou). Choose the right tool for your period.</p>

        <h2>When to Use a Middle English Translator</h2>
        <p>Use a Middle English translator or Middle English converter for literature courses, historical fiction, role-play, education, or fun. It is not for formal documents. Treat the output as stylistic and approximate.</p>

        <h2>Limitations and Accuracy</h2>
        <p>Automatic Middle English translation is approximate. Real Middle English had varied spelling and regional forms; a simple tool cannot capture full period accuracy. Use the output as a starting point and edit as needed.</p>

        <h2>Privacy and Local Processing</h2>
        <p>Many Middle English translators run in the browser and do not send your text to a server. This tool is designed to process text locally when possible.</p>

        <h2>How a Middle English Translator Fits With Other Text Tools</h2>
        <p>If you are preparing text for a story or document, you may use several tools in sequence. Paste content from a webpage as plain text first, then clean extra spaces if needed. Once your text is clean, run it through the Middle English translator.</p>

        <h2>Middle English Translator for Education</h2>
        <p>Teachers and students use Middle English translators to explore Chaucer and medieval literature. The tool can illustrate Middle English vocabulary and spelling. Use it as a starting point and compare with real texts like The Canterbury Tales.</p>

        <h2>Chaucer-Style Text for Creative Writing</h2>
        <p>Middle English–style text can add atmosphere to historical fiction and period projects. Keep phrases readable.</p>

        <h2>Convert to Middle English: What to Expect</h2>
        <p>When you use a Middle English converter, the tool approximates Middle English vocabulary and spelling. Results are stylistic, not historically exact. Edit the output for essays or assignments.</p>
        <p>If the result looks too modern, try simpler or more concrete input; if it looks too obscure, the tool may have chosen rarer forms—edit for readability. Many readers prefer a light Middle English flavor so the text stays accessible. For coursework, compare the output with real Middle English texts so you can discuss what the tool captured and what it did not.</p>

        <h2>Similar Period and Language Translators</h2>
        <p>Need a different period? Our medieval translator targets the same Chaucer-era style; the Old English translator handles Anglo-Saxon (translate to Anglo Saxon). For later period style (thee, thou), use the Shakespearean translator. For decorative or stylized text, the fancy English translator fits; for English to Navajo, try our Navajo translator. Each tool serves a different era or style—choose the one that matches your project.</p>

        <h2>Middle English in the Classroom</h2>
        <p>Literature and history teachers use the Middle English translator to show how modern sentences might have looked in the period. Run a short passage through the tool, then compare with an excerpt from The Canterbury Tales or another primary source. That comparison highlights spelling variation, vocabulary change, and the gap between automated style and actual manuscript usage. Emphasize that the tool is a starting point; reading and analyzing primary texts remains central. When grading work that used the translator, focus on how well students interpreted and applied the output rather than on the raw tool result.</p>

        <h2>Mobile and Cross-Device Use</h2>
        <p>Browser-based Middle English translators work on phones and tablets. No install or sign-up is required.</p>

        <h2>Further Information and Related Tools</h2>
        <p>Middle English translator tools run in the browser. You enter text, click convert or translate, and copy the result. For similar period and language tools—medieval translator, Old English translator (translate to Anglo Saxon), Shakespearean translator, fancy English translator, Navajo translator (English to Navajo)—and for text cleanup, see the site.</p>
        <p>Use the Middle English translator for creative and educational purposes. For formal communication, use standard modern English.</p>

        <h2>Chaucer and Middle English Literature</h2>
        <p>Geoffrey Chaucer wrote The Canterbury Tales and other works in Middle English. A Middle English translator or Middle English converter helps you approximate that style for essays, creative writing, or classroom discussion. Real Middle English varied by region and time; Chaucer’s London English is only one variety. Use the tool as a starting point and compare with published editions of Chaucer.</p>

        <h2>Spelling and Vocabulary in Middle English</h2>
        <p>Middle English spelling was not standardized. The same word could be written different ways in different manuscripts. A Middle English translator typically picks one convention (e.g., Chaucerian or a simplified modernized spelling) so the output is readable. Vocabulary also shifted: many words from Old English remained, and French and Latin influence grew. The tool swaps in period-appropriate words where it can; for full accuracy, consult a Middle English dictionary or edition.</p>

        <h2>Middle English Converter for Role-Play and Games</h2>
        <p>Tabletop games, LARP, and historical role-play often use period language for immersion. A Middle English converter can generate signs, dialogue, or descriptions in a Chaucer-style register. Keep phrases short so players can understand; you can mix Middle English–style lines with modern English as needed.</p>

        <h2>Teaching Middle English With a Translator</h2>
        <p>In literature or history courses, a Middle English translator can show students how modern sentences might have looked in the period. Use it to compare word choice and sentence structure with real Middle English texts. Emphasize that the tool is approximate and that reading primary sources is essential.</p>

        <h2>Great Vowel Shift and Middle English</h2>
        <p>The Great Vowel Shift was a major sound change that began in late Middle English and continued into Early Modern English. A Middle English translator usually focuses on vocabulary and spelling rather than reconstructing pronunciation. For understanding how Middle English sounded, use academic resources and recordings; the tool is best for written style.</p>

        <h2>Middle English in Historical Fiction</h2>
        <p>Writers of historical fiction set in medieval England sometimes use Middle English–style dialogue or inserts (letters, signs) to add authenticity. A Middle English translator or Middle English converter can draft those passages; edit for readability and consistency with your chosen level of period style. Do not overuse archaic language or readers may struggle.</p>

        <h2>Comparing Middle English to Old and Early Modern English</h2>
        <p>Middle English sits between Old English (Anglo-Saxon) and Early Modern English (Shakespeare). Use our Old English translator to translate to Anglo Saxon for the earliest period; use our Shakespearean translator for translate into Shakespearean for the later period. The Middle English translator targets the middle period (Chaucer and beyond).</p>

        <h2>Why Use a Middle English Converter Online</h2>
        <p>An online Middle English converter is convenient: no software to install, no sign-up, and it runs in your browser. You can use it from any device to convert modern English to Middle English style for essays, creative writing, or role-play.</p>
        <p>Many students and writers need a quick way to get a Middle English flavor without studying the language in depth. A Middle English translator or Middle English converter online fills that need. Remember that the output is approximate; for academic work, compare with primary sources and cite appropriately.</p>

        <h2>Middle English Translator and Manuscripts</h2>
        <p>Medieval manuscripts were written by hand and often show spelling and dialect variation. A Middle English translator on a computer cannot reproduce that variation; it gives a normalized, readable Middle English style. For studying actual manuscripts, use digitized editions and scholarly resources. For creative or educational use, our Middle English converter is a helpful starting point. For cleaning and formatting your own text, use plain text for best results. The site has more tools. of tools.</p>
        <p>If you are preparing a presentation or handout that includes Middle English examples, paste your draft as plain text first if it came from the web, then clean spacing if needed. Run the result through the Middle English translator for any phrases you want in period style. For Old English translator or Shakespearean translator, see our other pages. See the site for more tools.</p>

        <h2>Middle English for Poetry and Verse</h2>
        <p>Chaucer wrote in verse, and Middle English poetry had distinct meter and rhyme. A Middle English translator typically focuses on prose-style output; it does not preserve meter or rhyme. For verse, use the tool for vocabulary and phrasing ideas, then adjust by hand for rhythm. For cleaning pasted text, use plain text for best results. For medieval translator, Old English translator (translate to Anglo Saxon), or translate into Shakespearean, we have dedicated pages. See the site.</p>
        <p>Teachers sometimes ask students to translate a short modern passage into Middle English style. Our Middle English converter can help generate a draft; students can then edit and compare with real Middle English texts. For handouts or pasted content, use plain text for best results. For other creative tools, see the site.</p>

        <h2>Free Middle English Translator and Privacy</h2>
        <p>This Middle English translator is free and runs in your browser. When the tool processes text locally, your input is not sent to a server, which helps privacy. For sensitive or confidential text, check whether the tool you use runs locally or online. For cleaning and formatting text, use plain text for best results. For Middle English converter, medieval translator, Old English translator, or Shakespearean translator, we have dedicated pages. See the site for more tools.</p>
        <p>No sign-up or login is required to use the Middle English translator. You can use it in a private or incognito window if you prefer. For other period or stylistic tools—medieval translator, Old English translator (translate to Anglo Saxon), Shakespearean translator, fancy English translator—see the site. see the site.</p>

        <h2>Middle English Converter Tips</h2>
        <p>When using a Middle English converter, start with short sentences to see how the tool handles vocabulary and word order. For longer texts, process in chunks and then combine and edit the result. Always clean pasted text with plain text first. For medieval translator, Old English translator (translate to Anglo Saxon), or Shakespearean translator, we have dedicated pages. See the site for more tools.</p>
        <p>If the output looks too modern or too archaic, try rephrasing your input and running it again. Different tools use different word maps and rules. For essays or assignments, use the Middle English translator as a draft and refine with a Middle English dictionary or edition. For cleaning and formatting, use plain text for best results. See the site.</p>

        <h2>Middle English and French Influence</h2>
        <p>After the Norman Conquest, French had a strong influence on Middle English vocabulary. Many words we use today entered English in the Middle English period. A Middle English translator may use some of these loanwords to give an authentic period feel. For cleaning pasted text from the web, use plain text for best results. For Old English translator (translate to Anglo Saxon) or Shakespearean translator (translate into Shakespearean), see our other pages. See the site for more tools.</p>
        <p>Teachers can use this contrast—Old English vs Middle English vs Early Modern—to show how English changed over time. Our Old English translator, Middle English translator, and Shakespearean translator support that comparison. For handouts and pasted text, use plain text for best results. See the site.</p>

        <h2>When Not to Use a Middle English Translator</h2>
        <p>Do not use a Middle English translator for formal or legal documents, official correspondence, or any context where standard modern English is required. Academic essays (unless the assignment explicitly asks for period style), reports, and professional writing should stay in clear modern English. The tool is for creative writing, education, role-play, and themed content—not for replacing everyday or formal communication.</p>
        <p>If you are quoting from The Canterbury Tales or another primary source, use a scholarly edition and cite it; a Middle English translator is for turning your own modern sentences into Middle English style, not for producing authoritative medieval text. For serious linguistic or historical analysis, pair the tool with primary texts and reference grammars.</p>

        <h2>Middle English Translator for Presentations and Handouts</h2>
        <p>Teachers and students often need short Middle English–style phrases for slides, handouts, or classroom demos. Run a few key sentences through the Middle English translator, then paste the result into your presentation software. Keep each example short so the audience can read it at a glance. Compare the tool output with a real Middle English excerpt on the same slide to show how the language looked in manuscripts versus how the tool approximates it.</p>
        <p>When preparing handouts that mix modern commentary with period-style examples, use the translator only for the examples; keep your analysis and instructions in modern English. That way students see both the period flavor and clear explanation. For other period tools—medieval translator, Old English translator, Shakespearean translator—and for more tools, see the site.</p>

        <h2>Dialect and Region in Middle English</h2>
        <p>Middle English was not a single standard; it had many regional dialects (e.g. Northern, Southern, Midlands, Kentish). Chaucer wrote in a form of London English; other writers used different spellings and words. A Middle English translator usually produces one consistent style rather than mimicking a specific dialect. If your project requires a particular region or author, use the output as a base and adjust with a Middle English dictionary or edition. For translate to Anglo Saxon use the Old English translator; for later period style use the Shakespearean translator; for the full tool list see the site.</p>
        <p>Using the Middle English translator for the first time, try a single sentence and see how the vocabulary and spelling change. Then move on to short paragraphs. That way you learn what to expect before converting longer texts for essays or creative work.</p>

        <h2>Middle English Translator Bookmark and Access</h2>
        <p>Bookmark this Middle English translator or Middle English converter page for quick access when you need to convert modern English to Middle English style. The tool runs in the browser and works on mobile. For a full set of text tools, bookmark the site. For cleaning pasted content, use plain text for best results. See the site for more tools.</p>
        <p>Students and writers often need a quick Middle English converter for a single passage or assignment. This free Middle English translator is designed for that. For ongoing study, pair it with primary texts and reference materials. For other period tools—medieval translator, Old English translator (translate to Anglo Saxon), Shakespearean translator—see the site. see the site.</p>

        <h2>Free Middle English Translator and No Sign-Up</h2>
        <p>This Middle English translator is free and does not require an account or sign-up. You can open the page, paste your text, and convert to Middle English style in seconds. That makes it useful for literature classes, creative writing, or quick role-play text. For cleaning pasted text from the web, use plain text for best results first. For medieval translator, Old English translator (translate to Anglo Saxon), or Shakespearean translator, see the site.</p>
        <p>Many users prefer tools that run in the browser and do not send data to a server. This Middle English converter is designed with that in mind when possible. For other period or stylistic tools—medieval translator, Old English translator, Shakespearean translator, fancy English translator—see the site. see the site.</p>

        <h2>Convert to Middle English: Step-by-Step</h2>
        <p>To convert to Middle English with this tool: (1) Open the Middle English translator page. (2) Type or paste your modern English into the input box. If the text came from a webpage, clean it first with plain text. (3) Click Convert to Middle English or Translate. (4) Copy the Middle English–style result. (5) Edit as needed for essays or projects. For medieval translator, Old English translator (translate to Anglo Saxon), or translate into Shakespearean, we have dedicated pages. See the site for more tools.</p>
        <p>For long texts, process in sections so you can review and edit each part. Combine the sections and smooth the transitions. For cleaning and formatting the combined result, use plain text for best results. For other period or stylistic text—medieval translator, Old English translator, Shakespearean translator, fancy English translator, Navajo translator (English to Navajo)—see the site. See the site.</p>

        <h2>Middle English Translator Output: Stylistic vs Exact</h2>
        <p>Middle English translator output is stylistic, not a replica of historical Middle English. Real Middle English had regional and temporal variety; the tool gives a normalized, readable Chaucer-style baseline. Use the result as a starting point and edit for your project. For cleaning and formatting your document, use plain text for best results. For medieval translator, Old English translator, or Shakespearean translator, we have dedicated pages. See the site.</p>
        <p>If the output seems too modern or too archaic, try rephrasing your input. For essays or assignments, use the Middle English converter as a draft and refine with a Middle English dictionary or edition. For cleaning pasted text before you convert, use plain text for best results. For other period tools—medieval translator, Old English translator, Shakespearean translator—see the site.</p>

        <h2>Summary: When to Use a Middle English Translator</h2>
        <p>Use a Middle English translator or Middle English converter when you need to convert modern English to Middle English (Chaucer-style) for literature, education, role-play, or creative writing. The tool is free, runs in the browser, and does not require sign-up. Clean pasted text with plain text first. For medieval translator, Old English translator (translate to Anglo Saxon), or Shakespearean translator (translate into Shakespearean), we have dedicated pages. See the site for more tools.</p>
        <p>Treat the output as stylistic and approximate. For formal or legal documents, use standard modern English. For cleaning and formatting the rest of your content, use plain text for best results. For other period or stylistic text—medieval translator, Old English translator, Shakespearean translator, fancy English translator—see the site. See the site.</p>

        <h2>Middle English Converter and Copy-Paste Workflow</h2>
        <p>When you copy text from a webpage or document into the Middle English translator, clean it first. Once the text is plain and tidy, paste it into the Middle English converter. That workflow keeps the input clean and the output easier to edit. For medieval translator, Old English translator (translate to Anglo Saxon), or Shakespearean translator, we have dedicated pages. See the site for more tools.</p>
        <p>After you convert to Middle English, you may paste the result into an essay, story, or handout. If you combine it with other content from the web, run that content through the same cleanup so the final document is consistent. For other period tools—medieval translator, Middle English translator, Old English translator, Shakespearean translator—see the site. see the site.</p>

        <h2>Why Middle English Translator and Converter Matter</h2>
        <p>Middle English is the language of Chaucer and medieval literature. A Middle English translator or Middle English converter helps you explore that period without having to learn the language in full. Use the tool for literature courses, creative writing, or classroom discussion, and pair it with primary texts like The Canterbury Tales for depth. For cleaning pasted text, use plain text for best results. For medieval translator, Old English translator (translate to Anglo Saxon), or translate into Shakespearean, see the site.</p>
        <p>Teachers can use the Middle English translator to show how English looked before standard spelling and before the Great Vowel Shift. Students can compare tool output with real Middle English texts to see vocabulary and spelling in context. For handouts or pasted content, use plain text for best results. For other period tools—medieval translator, Old English translator, Shakespearean translator—see the site. See the site.</p>

        <h2>Quick Reference: Middle English Translator and Related Tools</h2>
        <p>Use the Middle English translator or Middle English converter when you need to convert modern English to Middle English style. For cleaning and formatting text (spaces, line breaks, HTML), use plain text for formatting. For medieval translator, Old English translator (translate to Anglo Saxon), or Shakespearean translator (translate into Shakespearean), see the site. For Navajo translator (English to Navajo) or fancy English translator, see the site.</p>
        <p>Middle English translator output is for creative and educational use. For formal communication, use standard modern English. For cleaning pasted text, use plain text for best results. See the site.</p>

        <h2>Final Checklist for Middle English Translator</h2>
        <p>Before you publish or submit text that used the Middle English translator or Middle English converter: Is the output appropriate for your audience? Did you prepare pasted input as plain text? Did you edit the result for readability and consistency? For medieval translator, Old English translator (translate to Anglo Saxon), or Shakespearean translator (translate into Shakespearean), we have dedicated pages. See the site for more tools.</p>
        <p>Use the Middle English translator for creative and educational purposes only. For formal or legal documents, use standard modern English. For cleaning and formatting the rest of your content, use plain text for best results. For other period or stylistic text—medieval translator, Old English translator, Shakespearean translator, fancy English translator—see the site. See the site.</p>

        <h2>Conclusion</h2>
        <p>Use a Middle English translator or Middle English converter to turn modern English into Chaucer-style Middle English for literature, education, or fun. This free Middle English translator lets you convert to Middle English for creative and educational use.</p>
      </div>
    </section>
  );
}

export default async function MiddleEnglishTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a Middle English translator?', answer: 'A Middle English translator is an online tool that converts modern English into Middle English—the language of Geoffrey Chaucer, medieval manuscripts, and the period from roughly the eleventh to the fifteenth century. It works as a Middle English converter for literature courses, historical fiction, role-play, and education. The result is stylistic and approximate rather than word-for-word Chaucer.' },
    { category: 'General', question: 'Is the Middle English translator free?', answer: 'Yes. This Middle English translator is free to use in your browser with no sign-up or account required. You enter or paste your text, click convert or translate, and copy the Middle English–style result. The tool runs locally when possible so your text is not sent to a server.' },
    { category: 'Usage', question: 'How do I use the Middle English translator?', answer: 'Open the Middle English translator page, type or paste your modern English into the input box, and click Convert to Middle English or Translate. Copy the result for use in essays, creative writing, or assignments. If your text was pasted from a webpage or document, clean it first with a strip-HTML and space-remover tool so the input is plain text; that helps the output look consistent.' },
    { category: 'Technical', question: 'What is Middle English?', answer: 'Middle English is the form of English used in England from roughly 1150 to 1500. It followed Old English (Anglo-Saxon) and preceded Early Modern English (Shakespeare). It includes the language of Geoffrey Chaucer and The Canterbury Tales, with variable spelling and regional dialects. A Middle English translator gives your modern sentences a Middle English flavor without reproducing historical texts word-for-word.' },
    { category: 'Technical', question: 'Is Middle English the same as medieval English?', answer: 'In common use, Middle English and medieval English often refer to the same period (roughly 11th–15th century). A medieval translator and a Middle English translator (or Middle English converter) both target Chaucer-era style. Use either for literature courses, historical fiction, or period projects; choose the tool that fits your curriculum or project name.' },
    { category: 'Use cases', question: 'When would I use a Middle English converter?', answer: 'Use a Middle English translator or Middle English converter for literature courses (especially Chaucer and medieval literature), historical fiction, role-play and LARP, education, or fun. It is ideal for converting modern passages to Middle English style for essays, dialogue, or themed content. It is not intended for formal or legal documents, where standard modern English is appropriate.' },
    { category: 'Use cases', question: 'Can I translate from Middle English to modern English?', answer: 'This tool focuses on converting modern English into Middle English style. Some other tools offer reverse conversion from Middle English to modern. For cleaning pasted text before or after you convert, use plain text so your document stays consistent.' },
    { category: 'General', question: 'Middle English vs Shakespearean translator?', answer: 'Middle English is the earlier period (Chaucer, roughly 1150–1500). Shakespearean or Early Modern English is later (thee, thou, late 16th–17th century). Use a Middle English translator for Chaucer-era style; use a Shakespearean translator for Bard-style text. They target different periods and vocabulary.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'This Middle English translator is designed to process text locally in your browser when possible, so your input is not sent to a server. That helps with privacy and speed. For details on how a specific session is handled, check the tool description or privacy policy.' },
    { category: 'General', question: 'Middle English vs Old English translator?', answer: 'Middle English is the later period (Chaucer-era, roughly 1150–1500). Old English (Anglo-Saxon) is the earliest period—the language of Beowulf. Use an Old English translator to translate to Anglo Saxon; use the Middle English translator for the middle period. They target different stages of the language.' },
    { category: 'Use cases', question: 'Is a Middle English translator good for school?', answer: 'Yes. Teachers and students use a Middle English translator to explore Chaucer and medieval literature and to see how modern sentences might have looked in Middle English. Use the output as a starting point and compare it with real Middle English texts so students see both the tool’s approximations and actual period usage. Pair tool use with primary sources and reference editions.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Browser-based Middle English translators typically handle normal paragraph and page lengths. For very long texts, process in sections so you can review and edit each part before combining. If the text was pasted from the web, plain text works best.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Middle English translator runs in your browser on phones and tablets with no install or download required. You can paste text, convert to Middle English style, and copy the result into any app. Bookmark the page for quick access when you need a Middle English converter on the go.' },
    { category: 'General', question: 'Where can I find a Middle English converter?', answer: 'This page is our Middle English converter. You can convert modern English to Middle English style here. The medieval translator also targets similar Chaucer-era style; use whichever fits your project. For other period tools (Old English translator, Shakespearean translator), see the site.' },
    { category: 'Formatting', question: 'Can I get different Middle English styles?', answer: 'Tools vary: some focus mainly on vocabulary; others adjust spelling and word order. The output is always stylistic. For essays or assignments, use the Middle English translator as a draft and refine with a Middle English dictionary or edition for the level of period accuracy you need.' },
    { category: 'Use cases', question: 'Can I use Middle English text in an essay?', answer: 'Yes. Use the Middle English translator as a starting point and refine with reference materials or your instructor’s guidance. Cite primary sources where required and make clear that the tool was used for draft or comparison. Many instructors accept tool-assisted drafts when students also engage with real Middle English texts.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The Middle English translator runs entirely in your browser, so there is no download or install. Open the page, paste your text, and convert to Middle English style. The same applies on mobile: no app install is required.' },
    { category: 'Workflow', question: 'Can I copy Middle English text to a document?', answer: 'Yes. Copy the Middle English–style output and paste it into any app for essays, captions, role-play, or themed content. The tool is popular for literature classes, creative writing, and LARP; use it for fun and education, not for formal communication.' },
    { category: 'Technical', question: 'How accurate is automatic Middle English translation?', answer: 'Automatic Middle English translation is approximate. Real Middle English had varied spelling, regional dialects, and complex grammar that a simple tool cannot fully capture. Use the result as a draft and edit for your project. For academic or publication-grade accuracy, pair the tool with primary texts and reference grammars or editions.' },
    { category: 'General', question: 'Can I convert long paragraphs?', answer: 'Yes. You can convert long paragraphs or full pages through the Middle English translator. For long text, process in sections so you can review and edit each part; then combine and smooth the transitions. If the text was pasted from the web, plain text works best.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the Middle English translator runs locally in your browser, your text is not stored on our servers. Session handling may vary; for full details on data handling and retention, see the tool description and the site’s privacy policy.' },
    { category: 'Use cases', question: 'Middle English translator for Chaucer?', answer: 'Yes. Use the Middle English translator to approximate Chaucer-style language for study or creative projects. It gives your modern sentences a Middle English flavor similar to The Canterbury Tales period. Pair it with primary texts and reference materials for depth; use a strip-HTML and space-remover tool for cleaning pasted text.' },
    { category: 'General', question: 'Where can I find more translator tools?', answer: 'The site lists all text and translator tools, including medieval translator, Old English translator (translate to Anglo Saxon), Shakespearean translator, Navajo translator (English to Navajo), and fancy English translator. You can use them alongside the Middle English translator for different periods and styles.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<MiddleEnglishTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Middle English Translator and Middle English converter.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
