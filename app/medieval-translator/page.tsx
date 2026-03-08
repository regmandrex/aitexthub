import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { MedievalTranslatorTool } from '@/components/tools/MedievalTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { cleanUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 86400;

const toolSlug = 'medieval-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Medieval Translator';
  const description = 'Translate modern English to medieval or Middle English style. Convert text for period writing, role-play, and education.';
  const seoTitle = 'Medieval Translator - Translate to Medieval & Middle English';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>What Is a Medieval Translator?</h2>
        <p>A medieval translator is an online tool that converts modern English into the style of medieval or Middle English—the language of Geoffrey Chaucer, court documents, and the period from roughly the eleventh to the fifteenth century. Writers, educators, and hobbyists use it to translate to medieval for historical fiction, classroom projects, themed events, or role-play. You type or paste your text, run it through the tool, and receive a version that echoes period vocabulary and spelling without requiring fluency in Middle English.</p>
        <p>This medieval translator runs in your browser and does not require sign-up. It approximates medieval and Middle English style by applying period-appropriate word choices and spelling conventions. The result is stylistic rather than a word-for-word translation of historical texts. In the sections below we cover what medieval English is, how to use the tool, when it helps most, and how it differs from other period translators so you can choose the right option for your project.</p>

        <h2>Medieval English and Middle English Explained</h2>
        <p>When people say “medieval English” they usually mean Middle English: the form of English used in England after the Norman Conquest and before the spread of printed books and standard spelling. It is the language of <em>The Canterbury Tales</em>, <em>Sir Gawain and the Green Knight</em>, and countless charters and letters. Spelling and vocabulary varied by region and time, so there is no single “correct” medieval English—only conventions that scholars and tools use to give text a period feel.</p>
        <p>A medieval translator does not replicate a specific manuscript or dialect. It applies a consistent set of substitutions and spelling rules so your modern sentences read with a medieval or Middle English flavor. That makes it useful for drafts, demos, and creative work where you plan to edit the output. For serious academic or editorial use, pair the tool with primary texts and reference grammars.</p>

        <h2>How to Use This Medieval Translator</h2>
        <p>Using the medieval translator is straightforward. Open the tool, paste or type your modern English into the input area, and click the translate or convert button. The result appears in the output box; you can copy it into your document, script, or assignment. For best results use plain text; if your source came from a webpage or email, pasting clean text without extra formatting helps the output look consistent. For long texts, work in sections so you can review and adjust each part before combining.</p>
        <p>No account or download is required. The tool is free and runs locally when possible, so your text is not sent to a server. You can use it on desktop or mobile as long as you have a modern browser.</p>

        <h2>When to Use a Medieval Translator</h2>
        <p>Translate to medieval when you need period-style text for creative or educational purposes. Common use cases include historical fiction and fantasy (dialogue, letters, in-world documents), classroom exercises on the history of English, LARP and tabletop games (signs, scrolls, NPC dialogue), and themed events (invitations, menus, or signage). The output works well for atmosphere and readability; it is not intended for legal or formal documents, where standard modern English is appropriate.</p>
        <p>Teachers often use a medieval translator to show students how modern sentences might have looked in the Middle Ages. The tool can illustrate vocabulary change and spelling variation. Emphasize that the result is an approximation and that primary sources and grammar study remain essential for deeper understanding.</p>

        <h2>Medieval vs Middle English vs Old English vs Shakespearean</h2>
        <p>Period translators target different stages of the language. Old English (Anglo-Saxon) is the earliest—the language of Beowulf and the Anglo-Saxon Chronicle, used until roughly the eleventh century. Middle English follows, spanning the Norman Conquest to the late 1400s; this is what most people mean by “medieval English” and what a medieval translator or dedicated Middle English converter typically targets. Early Modern English comes next, including the language of Shakespeare and the King James Bible, with its characteristic “thee” and “thou.” If your project needs a different period, use a tool built for that era: for example a dedicated Middle English translator, an Old English (Anglo-Saxon) translator, or a Shakespearean translator, each of which focuses on one slice of the timeline.</p>
        <p>Choosing the right tool avoids mixing periods. A medieval translator and a Middle English converter often overlap; an Old English translator and a Shakespearean translator do not. Match the tool to the century and style you want.</p>

        <h2>What to Expect When You Translate to Medieval</h2>
        <p>Output from a medieval translator is deliberately stylistic. It will swap in period-style words, adjust spelling toward older conventions, and may change word order slightly. It will not reproduce the full grammar and inflection of historical Middle English, and it will not capture every regional or temporal variety. Use the result as a draft: edit for clarity, consistency with your setting, and (if needed) closer alignment with primary sources. For essays or assignments, compare the output with primary texts so you can discuss what the tool did and did not capture.</p>
        <p>If the text feels too modern, try simplifying your input or breaking long sentences into shorter ones. If it feels too obscure, edit for readability—many readers prefer a light medieval flavor over heavy archaism. The goal is usually a balance between period feel and comprehension. Publishers and editors often prefer a light touch: a few medieval-style phrases or spelling choices can add atmosphere without making the text hard to follow.</p>

        <h2>Medieval Translator for Creative Writing</h2>
        <p>Writers of historical fiction and fantasy often use a medieval translator to draft dialogue, letters, or in-world documents. The tool speeds up the process of giving text a period feel. From there, authors refine with style sheets, beta readers, or editors so the language stays consistent and appropriate for the intended audience. Do not rely on the raw output for critical plot or legal text; treat it as a starting point.</p>
        <p>Publishers and editors may have preferences about how much period language to use. A light touch—a few medieval-style phrases or spelling choices—often reads better than a full page of dense archaism. The medieval translator gives you raw material; you decide how much to keep and how to polish it.</p>

        <h2>Using a Medieval Translator in the Classroom</h2>
        <p>In literature or history courses, a medieval translator can support units on Chaucer, the history of English, or medieval culture. Students can run modern sentences through the tool and compare the output with real Middle English texts. That comparison highlights vocabulary change, spelling variation, and the gap between automated style and actual period usage. Pair the tool with primary sources and, where possible, with a short overview of Middle English grammar so students understand what they are seeing.</p>
        <p>When grading work that used the tool, focus on how well students interpreted and integrated the output (e.g., in an essay or presentation) rather than on the unedited tool result. That keeps the emphasis on learning and critical thinking.</p>

        <h2>Medieval Translator for Role-Play and Themed Events</h2>
        <p>Live-action role-play, tabletop games, and themed parties sometimes use medieval-style text for immersion. A medieval translator can generate signs, scrolls, or short dialogue lines quickly. Keep phrases short so players and guests can read them at a glance. You can mix medieval-style lines with modern English in the same document or display; consistency within each element matters more than converting everything.</p>
        <p>For invitations, menus, or signage, a light medieval flavor often works better than heavy archaism. Edit for clarity and tone so the text fits the event and remains accessible.</p>

        <h2>Privacy, Security, and How the Tool Runs</h2>
        <p>Many medieval translators, including this one, are designed to run in the browser. When that is the case, your text is processed locally and not sent to a server, which helps with privacy. No sign-up or login is required, so you can use the tool in a private or incognito window if you prefer. For sensitive or confidential content, confirm in the tool description whether processing is local or server-based.</p>

        <h2>Limitations of Automatic Medieval Translation</h2>
        <p>Automatic translation to medieval or Middle English has inherent limits. Historical Middle English had complex grammar (including case and agreement), dialect variation, and spelling that changed over time and by region. A general-purpose medieval translator cannot capture all of that. It applies a simplified set of rules to give your text a period style. For scholarly or publication-grade accuracy, use the tool as a draft and supplement with reference editions, grammars, and (where applicable) expert review. If the output seems too modern, try rephrasing your input with simpler or more concrete words. If it seems too obscure, edit for readability; the tool may have chosen rarer or dialect forms. The goal is usually a balance between period feel and comprehension.</p>

        <h2>Medieval vs Renaissance and Early Modern English</h2>
        <p>Medieval translator and Middle English translator target the medieval period (roughly the eleventh to the fifteenth century). The Renaissance and Early Modern period (sixteenth and seventeenth centuries) brought significant changes: the Great Vowel Shift was under way, spelling was slowly standardizing, and the language of Shakespeare and the King James Bible—with its “thee,” “thou,” and distinct vocabulary—emerged. If your project needs that later style, use a Shakespearean or Early Modern translator instead of a medieval one. Matching the tool to the century and genre avoids mixing periods and keeps your text coherent.</p>

        <h2>Copy-Paste Workflow and Cleaning Text</h2>
        <p>When you copy text from a webpage or document into the medieval translator, plain text works best. Once the text is tidy, paste it into the medieval translator. That keeps the input clean and the output easier to edit. After you translate to medieval, you may paste the result into a script, essay, or social post. If you combine it with other content from the web, keep the final document consistent.</p>

        <h2>Preparing Your Text Before You Translate</h2>
        <p>If you paste text from a webpage, email, or document, it may contain hidden formatting or extra spaces. Plain text works best: once the input is clean and readable, run it through the medieval translator. The same care applies if you later combine the output with other content.</p>

        <h2>Medieval Translator and Chaucer</h2>
        <p>Geoffrey Chaucer wrote <em>The Canterbury Tales</em>, <em>Troilus and Criseyde</em>, and much of his verse in Middle English. His language represents a late-fourteenth-century London variety of medieval English. When people look for a medieval translator or Middle English converter, they often want text that evokes that Chaucerian feel—familiar enough to follow, but with period vocabulary and spelling. This tool does not reproduce Chaucer line by line; it gives your own sentences a medieval or Middle English flavor so you can draft dialogue, titles, or short passages in a similar style. For close study of Chaucer, use edited editions and glossaries alongside the translator.</p>
        <p>Chaucer’s Middle English had distinct verb endings, pronoun forms, and word order that a general medieval translator does not fully replicate. The tool is best for atmosphere and inspiration. Teachers can use it to show how modern sentences might map onto period style, then compare with actual Chaucerian lines to discuss what changes and what stays the same.</p>

        <h2>Vocabulary and Spelling in Medieval Style</h2>
        <p>Medieval and Middle English spelling was not standardized. Scribes and authors spelled by ear and by regional habit, so the same word could appear several ways in one text. A medieval translator typically applies a consistent set of spelling conventions (e.g., “knight” as “knyght,” “through” as “thorough” or “thurgh”) and swaps in period-appropriate vocabulary where possible. The result is a readable approximation, not a scholarly transcription. If you need a specific dialect or time slice—for example late West Midlands or early London—treat the output as a starting point and adjust with reference materials.</p>
        <p>Vocabulary change over time means that some modern words have no direct medieval equivalent, or had a different meaning then. The tool may substitute a near equivalent or leave a word unchanged when no good period option exists. Editing the result for your project is expected.</p>

        <h2>Step-by-Step: Translate to Medieval in Practice</h2>
        <p>To translate to medieval with this tool, open the page and locate the input box. Type or paste your modern English. If the text came from a formatted document, plain text without extra markup gives the best result. Click the translate or convert button and wait for the result. Copy the medieval-style text into your document, script, or assignment. Read through and edit for clarity, tone, and consistency. For long pieces, work in sections—translate each section, edit it, then combine and smooth the transitions.</p>
        <p>No account or sign-up is required. The tool runs in the browser. On mobile, the same steps apply: paste, translate, copy, edit. Bookmark the page if you use it often for class, role-play, or creative writing.</p>

        <h2>Medieval Translator for Historical Fiction and Fantasy</h2>
        <p>Writers of historical fiction or fantasy set in the medieval period often need period-style dialogue, letters, or in-world documents. A medieval translator can generate a first draft quickly. Use the output as raw material: refine for character voice, regional flavor, and consistency with your worldbuilding. Not every line needs to sound archaic; many authors mix a few medieval-style phrases with plainer language so the text stays readable. Publishers and editors may have style preferences, so be prepared to adjust the level of archaism. The tool is a productivity aid, not a replacement for research or editorial judgment.</p>
        <p>If your story spans several centuries or cultures, remember that “medieval” and “Middle English” refer to a specific time and place. For earlier Anglo-Saxon or later Shakespearean dialogue, different period tools exist. Matching the tool to your setting keeps the language coherent.</p>

        <h2>Teaching Medieval English With a Translator</h2>
        <p>In literature or history courses, a medieval translator can support units on the history of English, Chaucer, or medieval culture. Students can run modern sentences through the tool and compare the output with real Middle English texts. That comparison highlights vocabulary change, spelling variation, and the difference between automated style and actual period usage. Emphasize that the tool is approximate and that primary sources and grammar study remain essential. Pair the tool with short excerpts from <em>The Canterbury Tales</em> or other period texts so students see both the tool output and the real thing.</p>
        <p>When grading work that used the tool, focus on how well students interpreted and used the output—for example in an essay, presentation, or creative piece—rather than on the unedited tool result. That keeps the emphasis on critical thinking and engagement with the material.</p>

        <h2>Medieval Translator for LARP, Tabletop, and Themed Events</h2>
        <p>Live-action role-play, tabletop games, and themed parties sometimes use medieval-style text for immersion. Signs, scrolls, invitations, or short NPC dialogue can all be drafted with a medieval translator. Keep phrases short so players and guests can read them quickly. You can mix medieval-style lines with modern English in the same event; consistency within each prop or sign matters more than converting everything. For invitations or menus, a light medieval flavor often works better than heavy archaism. Edit for clarity and tone so the text fits the event and stays accessible.</p>
        <p>Museums and reenactment groups sometimes use period-style labels or placards. The medieval translator can draft that text; keep it brief and edit for historical accuracy where it matters. For mixed modern-and-period displays, use the tool only for the period parts and keep the rest in standard English.</p>

        <h2>Output: Stylistic vs Historically Exact</h2>
        <p>Medieval translator output is deliberately stylistic. It is not a word-for-word rendering of a specific manuscript or dialect. Real medieval and Middle English had many regional and temporal varieties; a single tool cannot capture all of them. Use the result as a starting point and edit for your project. For essays or assignments, compare with primary sources. If the output feels too modern, try simplifying your input or using more concrete words. If it feels too obscure, the tool may have chosen rarer forms; edit for readability. Many readers prefer a light medieval flavor over dense archaism.</p>

        <h2>Preparing Text Before and After You Translate</h2>
        <p>If you paste text from a webpage, email, or document, it may contain hidden formatting or extra spaces. Plain text works best: once the input is clean, run it through the medieval translator. After translating, if you combine the output with other pasted content, keep the final document consistent.</p>

        <h2>Why Medieval and Middle English Matter for Readers and Writers</h2>
        <p>Medieval and Middle English are the language of Chaucer, <em>Sir Gawain and the Green Knight</em>, and a long stretch of English history. Understanding how the language looked and sounded before the Great Vowel Shift and before standard spelling helps readers and writers appreciate the continuity and change in English. A medieval translator does not replace that study, but it can make the period more accessible. Students can see how their own sentences might have been written in a medieval context; writers can draft period-style text without first becoming specialists. Pair the tool with primary texts and reference grammars for depth. Teachers can use the medieval translator to show how English evolved and to spark discussion about vocabulary, spelling, and style.</p>

        <h2>Medieval Translator for Podcasts, Video, and Social Media</h2>
        <p>Content creators making medieval-themed podcasts or videos sometimes use a medieval translator to draft scripts, captions, or on-screen text. The tool gives a period flavor; edit for clarity and pacing so audiences can follow. Keep medieval-style dialogue or captions short. For the rest of your script or description, use standard English so the mix stays readable. Medieval-style bios or captions can add a period twist to social profiles; keep phrases short and avoid overdoing archaism so the text remains accessible. The tool is for fun and education; do not rely on it for formal or legal communication.</p>

        <h2>Free Medieval Translator and No Sign-Up</h2>
        <p>This medieval translator is free and does not require an account or sign-up. You can open the page, paste your text, and get a medieval-style result in seconds. That makes it useful for one-off projects, classroom demos, or quick creative experiments. Many users prefer tools that run in the browser and do not send data to a server; this tool is designed with that in mind when possible. For sensitive or confidential content, confirm in the tool description whether processing is local or server-based. No download or install is required on desktop or mobile.</p>

        <h2>Medieval Translator for Signs, Displays, and Reenactment</h2>
        <p>Museums, reenactment groups, and themed spaces sometimes use medieval-style text for signs, labels, or placards. A medieval translator can draft that text quickly. Keep it short so visitors can read it at a glance, and edit for clarity and historical consistency where it matters. If you are preparing a display that mixes modern and period text, use the medieval translator only for the period parts and keep the rest in standard English. That keeps the overall display readable while still giving period flavor where you want it. The same approach works for program notes, character sheets, or handouts at themed events.</p>

        <h2>Summary: When to Use a Medieval Translator</h2>
        <p>Use a medieval translator when you need to translate to medieval or Middle English style for creative writing, education, role-play, or themed events. The tool is free, runs in the browser, and does not require sign-up. Use plain text when possible so the input is tidy. Treat the output as stylistic and approximate; edit for your audience and project. For formal or legal documents, use standard modern English.</p>

        <h2>Related Period and Language Tools</h2>
        <p>If you need a different period or style, other translators target different eras. Match the tool to the century and style you want.</p>

        <h2>Education Standards and Using the Tool in Class</h2>
        <p>Many schools and universities teach medieval literature and the history of English. A medieval translator can support that curriculum by giving students a way to approximate period language for assignments and discussion. Always pair tool use with primary texts and scholarly resources so students understand the difference between automated style and actual period usage. When grading or reviewing work that used the medieval translator, focus on how well the student integrated the output with course material—for example in an essay, presentation, or creative piece—rather than on the raw tool output. That keeps the emphasis on learning and critical thinking.</p>
        <p>Students writing about Chaucer or medieval literature often need a quick way to approximate period language for drafts or exercises. This free medieval translator provides that. For more accurate or scholarly work, they should pair it with primary texts and reference editions. The tool is a starting point, not a substitute for reading and analysis.</p>

        <h2>Mobile and Cross-Device Use</h2>
        <p>Browser-based medieval translators work on phones and tablets. You can open the tool on one device, paste text, and copy the result into an app on another. No install is required. If you use the tool often, bookmark the page or add it to your home screen for quick access.</p>

        <h2>Quick Reference and Final Checklist</h2>
        <p>Before you publish or submit text that used the medieval translator, check that the output is appropriate for your audience and that you edited the result for readability and consistency. Use the medieval translator for creative and educational purposes only; for formal or legal documents, use standard modern English. A simple workflow: paste or type your text, translate to medieval, copy, and edit to fit your project.</p>
        <p>Bookmark this medieval translator page for quick access when you need to translate to medieval or Middle English style. The tool works on desktop and mobile with no install. Students, writers, and educators use it regularly for drafts, demos, and classroom discussion.</p>

        <h2>Conclusion</h2>
        <p>A medieval translator helps you translate to medieval or Middle English style for creative writing, education, role-play, or themed content. This free tool runs in your browser and does not require sign-up. Use the output as a starting point and edit for your audience and project. Treat the result as stylistic and approximate; pair it with primary texts and reference materials when you need deeper accuracy. You can use the medieval translator on any device with a modern browser.</p>
      </div>
    </section>
  );
}

export default async function MedievalTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = cleanUrl(toolSlug);

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a medieval translator?', answer: 'A medieval translator is an online tool that converts modern English into medieval or Middle English style—the language of Geoffrey Chaucer, medieval manuscripts, and the period from roughly the eleventh to the fifteenth century. It helps you translate to medieval for creative writing, education, role-play, or themed content. The result is stylistic and approximate rather than word-for-word historical text.' },
    { category: 'General', question: 'Is the medieval translator free?', answer: 'Yes. This medieval translator is free to use in your browser with no sign-up or account required. You enter or paste your text, click translate, and copy the medieval-style result. The tool runs locally when possible so your text is not sent to a server.' },
    { category: 'Usage', question: 'How do I use the medieval translator?', answer: 'Open the medieval translator page, type or paste your modern English into the input box, and click Translate or Convert. Copy the result for use in stories, assignments, or themed content. Plain text gives the most consistent output; for long text, process in sections.' },
    { category: 'Technical', question: 'What is medieval English?', answer: 'Medieval English usually refers to Middle English—the form of English used in England from roughly the eleventh to the fifteenth century, including the language of Geoffrey Chaucer and The Canterbury Tales. Spelling and vocabulary varied by region and time; a medieval translator gives your modern sentences that period flavor without reproducing a specific manuscript or dialect.' },
    { category: 'Technical', question: 'Is medieval the same as Middle English?', answer: 'In common use, medieval and Middle English often refer to the same period (Chaucer-era). This medieval translator gives a general medieval or Middle English style. Use it for literature courses, historical fiction, or period projects.' },
    { category: 'Use cases', question: 'When would I use a medieval translator?', answer: 'Use a medieval translator when you need to translate to medieval or Middle English style for historical fiction, role-play and LARP, education, themed events, or fun. It is ideal for dialogue, letters, signs, and classroom demos. It is not intended for formal or legal documents, where standard modern English is appropriate.' },
    { category: 'Use cases', question: 'Can I translate from medieval to modern English?', answer: 'This tool focuses on converting modern English into medieval or Middle English style. Some other tools offer reverse conversion from medieval to modern. Use plain text so your document stays consistent.' },
    { category: 'General', question: 'Medieval vs Shakespearean translator?', answer: 'A medieval translator targets Middle English (Chaucer-era, roughly 11th–15th century). A Shakespearean translator targets Early Modern English (thee, thou, late 16th–17th century). Use the medieval translator for earlier period style; use the Shakespearean translator for Bard-style text. They target different periods and vocabulary.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'This medieval translator is designed to process text locally in your browser when possible, so your input is not sent to a server. That helps with privacy and speed. For details on how a specific session is handled, check the tool description or privacy policy.' },
    { category: 'General', question: 'Medieval vs Old English translator?', answer: 'Medieval or Middle English is the later period (Chaucer-era, roughly 1150–1500). Old English (Anglo-Saxon) is the earliest period—the language of Beowulf. Use an Old English translator to translate to Anglo Saxon; use the medieval translator for the middle period. They target different stages of the language.' },
    { category: 'Use cases', question: 'Is a medieval translator good for school?', answer: 'Yes. Teachers and students use a medieval translator to explore Chaucer and medieval literature and to see how modern sentences might have looked in the period. Use the output as a starting point and compare it with real Middle English texts so students see both the tool’s approximations and actual period usage. Pair tool use with primary sources and reference editions.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Browser-based medieval translators typically handle normal paragraph and page lengths. For very long texts, process in sections so you can review and edit each part before combining. Plain text input works best.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The medieval translator runs in your browser on phones and tablets with no install or download required. You can paste text, translate to medieval style, and copy the result into any app. Bookmark the page for quick access when you need it on the go.' },
    { category: 'General', question: 'Where can I find a Middle English converter?', answer: 'This medieval translator targets medieval and Middle English style. For a general Chaucer-era flavor, use this page. It is suitable for literature courses, historical fiction, and period projects.' },
    { category: 'Formatting', question: 'Can I get different medieval styles?', answer: 'Tools vary: some focus mainly on vocabulary; others adjust spelling and word order. The output is always stylistic. For essays or assignments, use the medieval translator as a draft and refine with reference materials or a Middle English dictionary for the level of period accuracy you need.' },
    { category: 'Use cases', question: 'Can I use medieval text in a book?', answer: 'Yes. Use the medieval translator as a starting point and refine for historical accuracy with an editor or reference materials. Many authors of historical fiction use it to draft period-style dialogue or in-world documents, then edit for character voice and consistency. Cite primary sources where required.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The medieval translator runs entirely in your browser, so there is no download or install. Open the page, paste your text, and translate to medieval style. The same applies on mobile: no app install is required.' },
    { category: 'Workflow', question: 'Can I copy medieval text to social media?', answer: 'Yes. Copy the medieval-style output and paste it into any app for captions, bios, or themed posts. The tool is popular for role-play communities, literature fans, and education; use it for fun and education, not for formal communication. Keep phrases short for readability.' },
    { category: 'Technical', question: 'How accurate is automatic medieval translation?', answer: 'Automatic medieval translation is approximate. Real Middle English had varied spelling, regional dialects, and complex grammar that a simple tool cannot fully capture. Use the result as a draft and edit for your project. For academic or publication-grade accuracy, pair the tool with primary texts and reference grammars or editions.' },
    { category: 'General', question: 'Can I translate long paragraphs?', answer: 'Yes. You can translate long paragraphs or full pages through the medieval translator. For long text, process in sections so you can review and edit each part; then combine and smooth the transitions. Plain text input works best.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the medieval translator runs locally in your browser, your text is not stored on our servers. Session handling may vary; for full details on data handling and retention, see the tool description and the site’s privacy policy.' },
    { category: 'Use cases', question: 'Medieval translator for role-play?', answer: 'Yes. Use the medieval translator for dialogue, signs, scrolls, or descriptions in medieval-themed LARP, tabletop games, or role-play. Keep phrases short so players can read them quickly. Pair it with primary texts or reference materials if you want deeper period accuracy.' },
    { category: 'General', question: 'Where can I find more translator tools?', answer: 'Different translators target different eras and styles—Chaucer-era Middle English, Anglo-Saxon, or Early Modern Shakespearean. Choose the one that matches your project. This medieval translator focuses on medieval and Middle English style.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<MedievalTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Medieval Translator and how to translate to medieval and Middle English.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
