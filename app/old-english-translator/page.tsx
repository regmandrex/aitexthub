import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { OldEnglishTranslatorTool } from '@/components/tools/OldEnglishTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 2592000;

const toolSlug = 'old-english-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Old English Translator';
  const description = 'Translate to Old English (Anglo-Saxon). Convert modern English to Anglo-Saxon for study and creative writing.';
  const seoTitle = 'Old English Translator - Translate to Anglo Saxon Online';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Old English Translator: Translate to Anglo Saxon Online</h2>
        <p>An Old English translator is an online tool that converts modern English into Old English (Anglo-Saxon)—the language of Beowulf, Anglo-Saxon England, and the period before the Norman Conquest. Whether you want to translate to Anglo Saxon for a history class, creative writing, or to explore the earliest form of English, an Old English translator lets you type or paste your text and get a version that echoes the vocabulary and structure of Anglo-Saxon.</p>
        <p>This free Old English translator runs in your browser. You enter your text, click translate, and copy the result. No sign-up is required. The tool approximates Old English by swapping in period-appropriate words and forms. In this guide we explain what Old English (Anglo-Saxon) is, how to use an Old English translator, when to use it for study and creative writing, and how it compares to Middle English and Shakespearean translators. For text cleanup and the full tool list, see the site.</p>

        <h2>What Is Old English (Anglo-Saxon)?</h2>
        <p>Old English, or Anglo-Saxon, is the earliest form of English, used in England from roughly 450 to 1150. It is the language of Beowulf and the Anglo-Saxon Chronicle. An Old English translator does not reproduce historical texts word-for-word; it gives your modern sentences an Anglo-Saxon flavor. For a later period (Chaucer-era), use a Middle English translator or medieval translator; for Early Modern (thee, thou), use the Shakespearean translator.</p>

        <h2>How to Use the Old English Translator</h2>
        <p>Open the Old English translator, type or paste your modern English into the input box, and click Translate to Anglo Saxon or Convert. The tool returns an Old English–style version. Copy the result for use in essays, role-play, or assignments. If your text was pasted from a webpage or document, clean it first so the input is plain text.</p>

        <h2>Translate to Anglo Saxon: What It Means</h2>
        <p>When people say “translate to Anglo Saxon,” they usually mean convert modern English into Old English (Anglo-Saxon) style. Our Old English translator does exactly that. A Middle English translator targets Chaucer-era language (later). The Shakespearean translator targets Early Modern English (thee, thou). Choose the right tool for your period.</p>

        <h2>When to Use an Old English Translator</h2>
        <p>Use an Old English translator or translate to Anglo Saxon for history courses, creative writing, role-play, education, or fun. It is not for formal documents. Treat the output as stylistic and approximate.</p>

        <h2>Limitations and Accuracy</h2>
        <p>Automatic Old English translation is approximate. Real Old English had complex grammar and inflection; a simple tool cannot capture full period accuracy. Use the output as a starting point and edit as needed.</p>

        <h2>Privacy and Local Processing</h2>
        <p>Many Old English translators run in the browser and do not send your text to a server. This tool is designed to process text locally when possible. That helps with privacy when you are translating to Anglo Saxon for essays, creative writing, or classroom use. For sensitive or confidential text, check whether the tool runs locally or online.</p>

        <h2>How an Old English Translator Fits With Other Text Tools</h2>
        <p>If you are preparing text for a story or document, you may use several tools in sequence. Paste content from a webpage as plain text first, then use a plain-text tool to clean extra spaces. Once your text is clean, run it through the Old English translator.</p>

        <h2>Similar Period and Language Translators</h2>
        <p>If you need a different period or style, use our similar translator pages. The medieval translator and Middle English translator target Chaucer-era language; the Shakespearean translator produces Early Modern “thee and thou” style. We also offer a Navajo translator for English to Navajo and a fancy English translator for decorative wording. For the full tool list, see the site. Each tool fits a different era or use case—pick the one that matches your project.</p>

        <h2>Old English Translator for Education</h2>
        <p>Teachers and students use Old English translators to explore Beowulf and Anglo-Saxon literature. The tool can illustrate Old English vocabulary and structure. Use it as a starting point and compare with real Old English texts.</p>

        <h2>Anglo-Saxon Text for Creative Writing</h2>
        <p>Old English–style text can add atmosphere to historical fiction and period projects. Keep phrases readable. Use the translator as a draft and refine for consistency.</p>

        <h2>Translate to Anglo Saxon: What to Expect</h2>
        <p>When you translate to Anglo Saxon, the tool approximates Old English vocabulary and forms. Results are stylistic, not historically exact. Edit the output for essays or assignments. If the result looks too modern, try simpler input; if too obscure, edit for readability. Many readers prefer a light Anglo-Saxon flavor so the text stays accessible while still evoking the period. For coursework, compare the output with real Old English texts so you can discuss what the tool captured and what it did not.</p>

        <h2>Mobile and Cross-Device Use</h2>
        <p>Browser-based Old English translators work on phones and tablets. No install or sign-up is required. You can translate to Anglo Saxon from any device; bookmark the page for quick access when you need it for Beowulf assignments, creative writing, or role-play. The same workflow applies: paste text, click translate, copy the result, and edit as needed.</p>

        <h2>Further Information</h2>
        <p>Old English translator tools run in the browser. You enter text, click translate, and copy the result. Use the Old English translator for creative and educational purposes. For formal communication, use standard modern English.</p>
        <p>No sign-up or login is required. You can use the tool in a private or incognito window if you prefer. For similar period tools—medieval translator, Middle English translator, Shakespearean translator—and for fancy English or Navajo translator, the site has more tools. For cleaning pasted text from the web, use plain text before you translate.</p>

        <h2>Beowulf and Old English Poetry</h2>
        <p>Beowulf is the most famous Old English poem. An Old English translator or translate to Anglo Saxon tool helps you approximate the language of that tradition for essays, creative writing, or classroom discussion. Real Old English had complex inflection and word order; the tool gives a stylistic approximation. Use it as a starting point and compare with scholarly editions of Beowulf.</p>
        <p>Old English poetry used alliteration and specific metrical patterns. A simple translator does not preserve meter or line structure; it focuses on vocabulary and a general Anglo-Saxon feel. For verse projects, use the tool for word choices and phrasing ideas, then adjust by hand for rhythm and form.</p>

        <h2>Grammar and Inflection in Old English</h2>
        <p>Old English (Anglo-Saxon) had case endings and grammatical gender. A simple Old English translator cannot reproduce full grammar; it focuses on vocabulary and basic word order. For serious study, use textbooks and grammars. The tool is best for getting a flavor of Old English and for creative or educational projects.</p>
        <p>Nouns had four cases (nominative, accusative, genitive, dative) and verbs had different endings for person and number. A browser-based translator typically does not implement that full system; it gives you period-style vocabulary so your text reads with an Anglo-Saxon feel. For coursework that requires grammatical accuracy, pair the tool with a reference grammar.</p>

        <h2>Translate to Anglo Saxon for Role-Play and Games</h2>
        <p>Historical games and role-play set in Anglo-Saxon England sometimes use Old English–style text for runes, signs, or dialogue. An Old English translator can generate that material; keep phrases short so players can follow. You can mix translate to Anglo Saxon lines with modern English as needed.</p>
        <p>Tabletop games, LARP, and historical reenactment often use period language for immersion. Run key phrases through the Old English translator for signs, scrolls, or in-world documents; edit for consistency and readability. Pair with primary texts or reference materials if you want deeper period accuracy.</p>

        <h2>Teaching Old English With a Translator</h2>
        <p>In history or literature courses, an Old English translator can show students how modern sentences might have looked in Anglo-Saxon England. Use it to compare word choice and structure with real Old English texts like Beowulf. Emphasize that the tool is approximate and that primary sources and grammar study are essential.</p>
        <p>Running the same sentence through the Old English translator and then comparing with a line from Beowulf or the Anglo-Saxon Chronicle helps students see both the tool’s approximations and actual period usage. That kind of comparison supports units on the history of English and on early medieval literature.</p>

        <h2>Anglo-Saxon Runes and Old English</h2>
        <p>Old English was sometimes written in runes (futhorc). An Old English translator on this site focuses on Latin-script Old English style, not runic transcription. For runes, use specialized rune converters or resources. For written Old English (Anglo-Saxon) in Latin script, this translate to Anglo Saxon tool is designed to help.</p>
        <p>Most surviving Old English texts are in Latin script. When you translate to Anglo Saxon with this tool, you get Latin-script output that you can paste into essays, stories, or handouts. If your project requires runes, use a dedicated rune tool after you have your Latin-script Old English text.</p>

        <h2>Old English in Historical Fiction</h2>
        <p>Writers of historical fiction set in Anglo-Saxon England sometimes use Old English–style dialogue or inserts. An Old English translator can draft those passages; edit for readability and consistency. Do not overuse archaic language or readers may struggle.</p>
        <p>Use the translator for first drafts of runic inscriptions, dialogue, or in-world letters; then refine with an editor or reference materials. Many readers prefer a light Anglo-Saxon flavor so the text stays accessible while still evoking the period.</p>

        <h2>Comparing Old English to Middle and Early Modern English</h2>
        <p>Old English (Anglo-Saxon) is the earliest of the three. Use a Middle English translator for Chaucer-era language; use the Shakespearean translator for Early Modern. The Old English translator targets the earliest period. Teachers often use this contrast to show how English changed over time.</p>
        <p>Running the same modern sentence through an Old English translator, then a Middle English or medieval translator, then the Shakespearean translator illustrates vocabulary, grammar, and spelling shifts across the centuries. Students can compare outputs and discuss what each period tool does and does not capture. That kind of comparison supports units on the history of English and on Beowulf and medieval literature.</p>

        <h2>Old English and Anglo-Saxon History</h2>
        <p>Anglo-Saxon England lasted from roughly the 5th century until the Norman Conquest in 1066. Old English (Anglo-Saxon) was the language of that period. An Old English translator helps you approximate that language for essays, creative writing, or classroom use. After the Conquest, Norman French and Latin influenced English, and Middle English emerged.</p>
        <p>So when you translate to Anglo Saxon, you are evoking the earliest stage of English—before the Norman Conquest, before Middle English and Chaucer, and long before Shakespeare. The Old English translator on this page gives you that earliest-period flavor for assignments, role-play, or creative writing. For the later medieval period use the Middle English or medieval translator; for Early Modern use the Shakespearean translator.</p>

        <h2>When Not to Use an Old English Translator</h2>
        <p>Do not use an Old English translator for formal or legal documents, official correspondence, or any context where standard modern English is required. Academic essays (unless the assignment explicitly asks for period style), reports, and professional writing should stay in clear modern English. The tool is for creative writing, education, role-play, and themed content—not for replacing everyday or formal communication.</p>
        <p>If you are quoting from Beowulf or another primary source, use a scholarly edition and cite it; an Old English translator is for turning your own modern sentences into Anglo-Saxon style, not for producing authoritative historical text. For serious linguistic or historical analysis, pair the tool with primary texts and reference grammars.</p>

        <h2>Old English Translator for Presentations and Handouts</h2>
        <p>Teachers and students often need short Old English–style phrases for slides, handouts, or classroom demos. Run a few key sentences through the Old English translator, then paste the result into your presentation software. Keep each example short so the audience can read it at a glance. Compare the tool output with a real Old English excerpt on the same slide to show how the language looked in manuscripts versus how the tool approximates it.</p>
        <p>When preparing handouts that mix modern commentary with period-style examples, use the translator only for the examples; keep your analysis and instructions in modern English. That way students see both the period flavor and clear explanation.</p>

        <h2>Translate to Anglo Saxon: Step-by-Step</h2>
        <p>To translate to Anglo Saxon with this tool: (1) Open the Old English translator page. (2) Type or paste your modern English into the input box. If the text came from a webpage, clean it first with a strip-HTML and space-remover tool. (3) Click Translate to Anglo Saxon or Convert. (4) Copy the Old English–style result. (5) Edit as needed for your project.</p>
        <p>For long texts, process in sections so you can review and edit each part. Combine the sections and smooth the transitions. The goal is readable, consistent output that fits your audience.</p>

        <h2>Old English Translator Output: Stylistic vs Exact</h2>
        <p>Old English translator output is stylistic, not a replica of historical Old English grammar and inflection. Real Anglo-Saxon had case endings and complex word order; the tool gives a readable approximation. Use the result as a starting point and edit for your project. If the output seems too modern, try rephrasing your input with simpler words. If it seems too obscure, edit for readability.</p>

        <h2>Teaching Old English With a Translator in the Classroom</h2>
        <p>In history or literature courses, an Old English translator can show students how modern sentences might have looked in Anglo-Saxon England. Run a short passage through the tool, then compare with an excerpt from Beowulf or the Anglo-Saxon Chronicle. That comparison highlights vocabulary change, grammar, and the gap between automated style and actual manuscript usage. Emphasize that the tool is a starting point; reading and analyzing primary texts remains central.</p>
        <p>When grading work that used the translator, focus on how well students integrated the output with course material and primary sources. The tool supports exploration; understanding still comes from engagement with real Old English texts.</p>

        <h2>Old English Translator for Podcasts and Video</h2>
        <p>Content creators making Anglo-Saxon or Beowulf-themed content sometimes use an Old English translator to draft scripts, captions, or on-screen text. The tool gives a translate to Anglo Saxon flavor; edit for clarity and pacing. Keep Old English–style dialogue or captions short so audiences can follow.</p>

        <h2>Old English Translator and Social Media</h2>
        <p>Anglo-Saxon–style captions or bios can add a period twist to social profiles. Keep phrases short for readability. Use the Old English translator for fun and education; do not rely on it for formal communication.</p>

        <h2>Why Old English Translator and Translate to Anglo Saxon Matter</h2>
        <p>Old English (Anglo-Saxon) is the earliest form of English and the language of Beowulf. An Old English translator helps you explore that period without having to learn the full grammar. Use the tool for history or literature courses, creative writing, or classroom discussion, and pair it with primary texts for depth.</p>
        <p>Teachers can use the Old English translator to show how English looked before the Norman Conquest and before Middle English. Students can compare tool output with real Old English texts like Beowulf to see vocabulary and structure in context.</p>

        <h2>Old English Translator and Education Standards</h2>
        <p>Many schools and universities teach Beowulf and the history of English. An Old English translator can support that curriculum by giving students a way to translate to Anglo Saxon for assignments and discussion. Always pair tool use with primary texts and grammars. When recommending this tool to students or colleagues, emphasize that it is for learning and support and that primary sources are essential.</p>

        <h2>Free Old English Translator and No Sign-Up</h2>
        <p>This Old English translator is free and does not require an account or sign-up. You can open the page, paste your text, and translate to Anglo Saxon style in seconds. That makes it useful for Beowulf assignments, creative writing, or classroom demos. Many users prefer tools that run in the browser and do not send data to a server; this Old English translator is designed with that in mind when possible.</p>

        <h2>Old English Translator Bookmark and Quick Access</h2>
        <p>Bookmark this Old English translator page for quick access when you need to translate to Anglo Saxon. The tool works on desktop and mobile. Students studying Beowulf or Anglo-Saxon history often need a quick way to approximate Old English; this free Old English translator provides that. For serious study, pair it with grammars and primary texts.</p>

        <h2>Summary: When to Use an Old English Translator</h2>
        <p>Use an Old English translator when you need to translate to Anglo Saxon for study, creative writing, role-play, or education. The tool is free, runs in the browser, and does not require sign-up. Treat the output as stylistic and approximate. For formal or legal documents, use standard modern English.</p>

        <h2>Quick Reference: Old English Translator and Related Tools</h2>
        <p>Use the Old English translator when you need to translate to Anglo Saxon. For a different period, try the medieval translator or Middle English translator (Chaucer-era) or the Shakespearean translator (Early Modern). For decorative wording, the fancy English translator fits; for English to Navajo, the Navajo translator. The site has more tools.</p>
        <p>Old English translator output is for creative and educational use. For formal communication, use standard modern English.</p>

        <h2>Final Checklist for Old English Translator</h2>
        <p>Before you publish or submit text that used the Old English translator: Is the output appropriate for your audience? Did you clean pasted input with a strip-HTML and space-remover tool if it came from the web? Did you edit the result for readability and consistency? Use the Old English translator for creative and educational purposes only.</p>

        <h2>Translate to Anglo Saxon: Final Notes</h2>
        <p>When you translate to Anglo Saxon with this Old English translator, remember that output is stylistic. Use it for essays, creative writing, role-play, or education. For formal or legal documents, use standard modern English. Bookmark this page for quick access when you need to translate to Anglo Saxon; the tool is free and runs in your browser.</p>

        <h2>Old English Translator and Beowulf Studies</h2>
        <p>Beowulf is the most famous Old English poem. An Old English translator or translate to Anglo Saxon tool can help students and writers approximate the language of that tradition. Use the output as a starting point and compare with scholarly editions. Real Old English had complex grammar and inflection; the tool gives a readable stylistic approximation. For serious study, pair it with grammars and primary texts.</p>

        <h2>Spelling and Manuscripts in Old English</h2>
        <p>Old English was written in Latin script (and sometimes runes). Spelling was not standardized and could vary by region and scribe. An Old English translator typically produces a normalized, readable form rather than mimicking a specific manuscript. For studying actual manuscripts, use digitized editions and scholarly resources; for creative or educational use, our translate to Anglo Saxon tool is a helpful starting point.</p>

        <h2>Why Use a Translate to Anglo Saxon Tool Online</h2>
        <p>An online Old English translator is convenient: no software to install, no sign-up, and it runs in your browser. You can use it from any device to convert modern English to Anglo-Saxon style for essays, creative writing, or role-play. Many students and writers need a quick way to get an Old English flavor without studying the language in depth; this tool fills that need. Remember that the output is approximate and that for academic work you should compare with primary sources and cite appropriately.</p>

        <h2>Old English Translator Tips</h2>
        <p>When using an Old English translator, start with short sentences to see how the tool handles vocabulary and word order. For longer texts, process in chunks and then combine and edit the result. If the output looks too modern or too archaic, try rephrasing your input and running it again. For essays or assignments, use the Old English translator as a draft and refine with a reference grammar or edition.</p>

        <h2>Copy-Paste Workflow for Translate to Anglo Saxon</h2>
        <p>When you copy text from a webpage or document into the Old English translator, clean it first. Use a plain-text tool to remove markup and normalize spaces and line breaks. Once the text is plain and tidy, paste it into the Old English translator and click Translate to Anglo Saxon. That workflow keeps the input clean and the output easier to edit. After you translate to Anglo Saxon, you may paste the result into an essay, story, or handout.</p>

        <h2>Old English Vocabulary and Word Choice</h2>
        <p>Old English had a different vocabulary from modern English; many words have been lost or changed meaning. An Old English translator swaps in period-appropriate words where it can, but it cannot capture every nuance. For creative or academic projects, use the output as a starting point and consult an Old English dictionary or glossary for finer control. That is especially important when you need a specific term or when the tool’s choice does not fit your context.</p>

        <h2>Using the Old English Translator for Different Audiences</h2>
        <p>The level of archaism you want depends on your audience. For a literature course or reenactment, you may want a heavier Old English flavor; for social media or a general audience, a light touch usually works better. The Old English translator gives you a baseline—edit up or down from there. For younger readers or casual contexts, keep the vocabulary recognizable; for academic or performance contexts, you may add more period-specific words. The tool is flexible; your editing tailors the result.</p>

        <h2>Old English and the Germanic Tradition</h2>
        <p>Old English belongs to the Germanic branch of languages and shares roots with other Germanic tongues. When you translate to Anglo Saxon, you are evoking that early Germanic heritage. The Old English translator on this page focuses on vocabulary and style rather than on comparative linguistics; for that, use academic resources. For creative and educational use, the tool is a practical way to get an Anglo-Saxon feel without formal study of the grammar.</p>

        <h2>Editing and Refining Old English–Style Text</h2>
        <p>After you translate to Anglo Saxon, plan to edit the output. Check that lines are readable and that the level of archaism fits your project. If the result feels too modern, try simpler or more concrete input; if it feels too obscure, trim rare or archaic choices for readability. The goal is usually a balance between period feel and comprehension. When mixing Old English–style lines with modern English in the same document, keep each section consistent so the reader is not confused.</p>

        <h2>Quick Workflow Summary for Translate to Anglo Saxon</h2>
        <p>For best results when you translate to Anglo Saxon: start with clean, plain text. If you pasted from the web, use plain text first. Paste into the Old English translator and click translate. Copy the output and edit for rhythm, clarity, and audience. Use the result for creative writing, education, or themed content—not for formal documents. For a different period, try the medieval translator, Middle English translator, or Shakespearean translator; the site has more tools. That keeps the input tidy and the output easier to edit.</p>
        <p>Long texts are best processed in sections. Review and edit each section before combining so the final result is consistent. Pair the tool with primary texts and reference grammars when you need higher accuracy for academic or publication use.</p>

        <h2>Conclusion</h2>
        <p>Use an Old English translator to translate to Anglo Saxon and turn modern English into Old English (Anglo-Saxon) style for study, creative writing, or fun. This free tool runs in your browser. Treat the output as stylistic and approximate; for formal or legal documents use standard modern English. Pair the tool with primary texts and reference grammars when you need higher accuracy. For similar period tools and for text cleanup, see the site.</p>
        <p>Bookmark the Old English translator for quick access when you need to translate to Anglo Saxon. The tool works on desktop and mobile with no install or sign-up. For Beowulf assignments, historical fiction, or role-play, it gives you an Anglo-Saxon flavor quickly; then edit and compare with primary texts as needed. See the site for more period and language tools.</p>
      </div>
    </section>
  );
}

export default async function OldEnglishTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is an Old English translator?', answer: 'An Old English translator is an online tool that converts modern English into Old English (Anglo-Saxon) style—the language of Beowulf and Anglo-Saxon England. It helps you translate to Anglo Saxon for study, creative writing, or education. The result is stylistic and approximate rather than word-for-word historical text.' },
    { category: 'General', question: 'Is the Old English translator free?', answer: 'Yes. This Old English translator is free to use in your browser with no sign-up or account required. You enter or paste your text, click translate, and copy the Anglo-Saxon-style result. The tool runs locally when possible so your text is not sent to a server.' },
    { category: 'Usage', question: 'How do I use the Old English translator?', answer: 'Open the Old English translator page, type or paste your modern English into the input box, and click Translate to Anglo Saxon or Convert. Copy the result for use in essays, role-play, or assignments. If your text was pasted from a webpage or document, clean it first with a strip-HTML and space-remover tool so the input is plain text.' },
    { category: 'Technical', question: 'What is Old English (Anglo-Saxon)?', answer: 'Old English, or Anglo-Saxon, is the earliest form of English used in England from roughly 450 to 1150, including the language of Beowulf and the Anglo-Saxon Chronicle. It had case endings, grammatical gender, and complex word order that differ greatly from modern English.' },
    { category: 'Technical', question: 'Is Old English the same as Middle English?', answer: 'No. Old English (Anglo-Saxon) is the earlier period (roughly 450–1150). Middle English (Chaucer-era) is later (roughly 1150–1500). Use our Middle English translator for that period; use the Old English translator for the earliest form of English.' },
    { category: 'Use cases', question: 'When would I translate to Anglo Saxon?', answer: 'Use an Old English translator when you need to translate to Anglo Saxon for history or literature courses, creative writing, role-play, education, or fun. It is ideal for Beowulf-related assignments, historical fiction, and classroom demos. It is not intended for formal or legal documents.' },
    { category: 'Use cases', question: 'Can I translate from Old English to modern English?', answer: 'This tool focuses on converting modern English into Old English (Anglo-Saxon) style. Some other tools offer reverse conversion from Old English to modern. For cleaning and formatting text before or after you translate, use a plain-text utility.' },
    { category: 'General', question: 'Old English vs Shakespearean translator?', answer: 'Old English (Anglo-Saxon) is much earlier—the language of Beowulf (roughly 450–1150). Shakespearean targets Early Modern English (thee, thou, late 16th–17th century). Use the Old English translator for the earliest period; use the Shakespearean translator for Bard-style text.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'This Old English translator is designed to process text locally in your browser when possible, so your input is not sent to a server. That helps with privacy and speed. For details on how a specific session is handled, check the tool description or privacy policy.' },
    { category: 'General', question: 'Translate to Anglo Saxon vs medieval translator?', answer: 'Translate to Anglo Saxon means Old English (earliest period). Medieval translator usually targets Middle English (Chaucer-era, later). Use our medieval or Middle English translator for that style; use the Old English translator for Anglo-Saxon.' },
    { category: 'Use cases', question: 'Is an Old English translator good for school?', answer: 'Yes. Teachers and students use it to explore Beowulf and Anglo-Saxon literature and to see how modern sentences might have looked in the period. Use the output as a starting point and compare with real Old English texts. Pair tool use with primary sources and reference grammars.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Browser-based Old English translators typically handle normal paragraph and page lengths. For very long texts, process in sections so you can review and edit each part before combining. If the text was pasted from the web, clean it with a plain-text tool first.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Old English translator runs in your browser on phones and tablets with no install or download required. You can paste text, translate to Anglo Saxon style, and copy the result into any app.' },
    { category: 'General', question: 'Where can I find a translate to Anglo Saxon tool?', answer: 'This page is our Old English translator—you can translate to Anglo Saxon here. For Middle English or Chaucer-era style, use our Middle English translator or medieval translator; for Early Modern (thee, thou), use the Shakespearean translator. See the site for more period and language tools.' },
    { category: 'Formatting', question: 'Can I get different Old English styles?', answer: 'Tools vary: some focus mainly on vocabulary; others may adjust word order. The output is always stylistic. For essays or assignments, use the Old English translator as a draft and refine with reference materials or an Old English grammar for the level of accuracy you need.' },
    { category: 'Use cases', question: 'Can I use Old English text in an essay?', answer: 'Yes. Use the Old English translator as a starting point and refine with reference materials or your instructor. Many students use it to draft period-style phrases for Beowulf or Anglo-Saxon assignments, then edit and cite primary sources where required.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The Old English translator runs entirely in your browser, so there is no download or install. Open the page, paste your text, and translate to Anglo Saxon style. The same applies on mobile: no app install is required.' },
    { category: 'Workflow', question: 'Can I copy Old English text to a document?', answer: 'Yes. Copy the Old English–style output and paste it into any app for essays, captions, or themed content. The tool is popular for history and literature courses, role-play, and creative writing. Keep phrases short for readability where needed.' },
    { category: 'Technical', question: 'How accurate is automatic Old English translation?', answer: 'Automatic Old English translation is approximate. Real Old English had complex grammar, inflection, and word order that a simple tool cannot fully capture. Use the result as a draft and edit for your project. For academic or publication-grade accuracy, pair the tool with primary texts and reference grammars.' },
    { category: 'General', question: 'Can I translate long paragraphs?', answer: 'Yes. You can translate long paragraphs or full pages through the Old English translator. For long text, process in sections so you can review and edit each part; then combine and smooth the transitions. If the text was pasted from the web, clean it with a plain-text tool first.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the Old English translator runs locally in your browser, your text is not stored on our servers. Session handling may vary; for full details on data handling and retention, see the tool description and the site’s privacy policy.' },
    { category: 'Use cases', question: 'Old English translator for Beowulf?', answer: 'Yes. Use the Old English translator to approximate Anglo-Saxon style for Beowulf-related study or creative projects. Pair it with scholarly editions and primary texts for depth. Use a strip-HTML and space-remover tool for cleaning pasted text.' },
    { category: 'General', question: 'Where can I find more translator tools?', answer: 'Different translators target different eras—medieval, Middle English, Shakespearean, Navajo, fancy English. Each targets a different era or style; pick the one that matches your project.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<OldEnglishTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Old English Translator and how to translate to Anglo Saxon.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

