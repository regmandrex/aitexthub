import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ShakespeareanTranslatorTool } from '@/components/tools/ShakespeareanTranslatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 86400;

const toolSlug = 'shakespearean-translator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Shakespearean Translator';
  const description = 'Translate text into Shakespearean English. Convert modern English to thee, thou, and period phrasing.';
  const seoTitle = 'Shakespearean Translator - Translate Into Shakespearean English';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Shakespearean Translator: Translate Into Shakespearean English</h2>
        <p>A Shakespearean translator is an online tool that converts modern English into Shakespearean-style English—thee, thou, hath, dost, and the phrasing associated with William Shakespeare and Early Modern English. Whether you want to add a theatrical flair to a message, create period-accurate dialogue for a play or story, or simply have fun with "translate into Shakespearean" style text, a Shakespearean translator lets you type or paste your text and get a version that echoes the language of the Bard.</p>
        <p>This free Shakespearean translator runs in your browser. You enter your text, click translate, and copy the result. No sign-up is required. The tool replaces common modern words with Shakespearean equivalents (e.g., you → thee, your → thy, are → art) and can adjust phrasing to sound more period-appropriate. In this guide we explain what Shakespearean English is, how to use a Shakespearean translator, when to use it for creative writing and education. For text cleanup and other tools, see the site.</p>

        <h2>What Is Shakespearean English?</h2>
        <p>Shakespearean English is the form of English used by William Shakespeare and his contemporaries in the late 16th and early 17th centuries. It is part of Early Modern English and includes pronouns like thee, thou, thy, and verbs like hath, dost, art, wilt. A Shakespearean translator does not reproduce Shakespeare word-for-word; it gives your modern sentences a Shakespearean flavor by swapping in these forms and similar vocabulary.</p>

        <h2>How to Use a Shakespearean Translator</h2>
        <p>Open the Shakespearean translator, type or paste your modern English into the input box, and click Translate or Convert. The tool returns a Shakespearean-style version. Copy the result for use in scripts, social posts, or assignments. Clean pasted text with plain text first for best results.</p>

        <h2>When to Use Shakespearean Translation</h2>
        <p>Use a Shakespearean translator for creative writing, theatre, education, themed events, or fun social posts. It is not for formal or legal documents. Treat the output as stylistic and approximate.</p>

        <h2>Shakespearean vs Middle English vs Old English</h2>
        <p>Shakespearean (Early Modern) English is different from Middle English (Chaucer) and Old English (Anglo-Saxon). A Shakespearean translator targets thee/thou and 16th–17th century style. A Middle English translator or Middle English converter targets Chaucer-era language. An Old English translator targets Anglo-Saxon. Choose the right tool for your period.</p>

        <h2>Limitations and Accuracy</h2>
        <p>Automatic Shakespearean translation is approximate. Real Shakespeare used complex grammar and vocabulary; a simple word-swap tool cannot capture full period accuracy. Use the output as a starting point and edit as needed for scripts or assignments.</p>

        <h2>Privacy and Local Processing</h2>
        <p>Many Shakespearean translators run in the browser and do not send your text to a server. This tool is designed to process text locally when possible.</p>

        <h2>How a Shakespearean Translator Fits With Other Text Tools</h2>
        <p>If you are preparing text for a script or document, you may use several tools in sequence. Paste content from a webpage as plain text first, then clean extra spaces if needed. Once your text is clean, run it through the Shakespearean translator.</p>

        <h2>Shakespearean Translator for Education</h2>
        <p>Teachers and students use Shakespearean translators to explore how English has changed. The tool can illustrate thee/thou and period vocabulary. Use it as a starting point and compare with real Shakespeare texts.</p>

        <h2>Shakespearean Text for Social Media and Themed Content</h2>
        <p>Shakespearean-style text can add a theatrical or literary twist to captions, bios, and posts. Keep phrases short for readability.</p>

        <h2>Translate Into Shakespearean: Common Phrases</h2>
        <p>When you translate into Shakespearean, common modern phrases become "thee" and "thy," "hath" for "has," "dost" for "do," and so on. The translator applies these substitutions so your text sounds period-style. For more accurate or creative control, edit the output by hand.</p>

        <h2>Mobile and Cross-Device Use</h2>
        <p>Browser-based Shakespearean translators work on phones and tablets. No install or sign-up is required.</p>

        <h2>Shakespearean Translator and Text Cleanup Workflow</h2>
        <p>When you paste from a webpage or document, use plain text so you have clean input. After translating, paste the result into your script or email.</p>
        <p>Shakespearean translator output is for creative and educational use. Do not rely on it for formal or legal documents.</p>
        <h2>Thee, Thou, Thy: A Quick Reference</h2>
        <p>When you translate into Shakespearean, the most common swaps are: you → thee (or thou), your → thy, are → art, is → hath, have → hast, do → dost, does → doth, will → wilt, not → nay, yes → aye. The Shakespearean translator applies these so your text sounds period-appropriate. For more nuance, edit the output.</p>
        <h2>How Early Modern English Differs From Today</h2>
        <p>Early Modern English—the language of Shakespeare and the King James Bible—differs from modern English in pronouns, verb forms, and word order. "You" was used but "thee" and "thou" were common for singular address; "your" often appeared as "thy." Verbs took different endings: "has" could be "hath," "do" could be "dost" or "doth." A Shakespearean translator applies these patterns so your text reads with a period feel. It does not replicate every grammatical nuance of the era; for that, use the output as a draft and consult reference grammars or editions.</p>
        <p>Spelling was also variable in Early Modern English. The tool may leave modern spelling in place or adjust a few words for effect. If you need a specific look—for example for a programme or invitation—edit the result so it is consistent throughout.</p>

        <h2>Shakespearean Translator for Creative Writing</h2>
        <p>Writers of historical fiction, fantasy, or period drama often use a Shakespearean translator to draft dialogue or in-world documents. The tool speeds up the process of getting thee/thou and period phrasing onto the page. From there, authors refine for character voice, tone, and consistency. Not every line needs to sound heavily archaic; many readers prefer a light Shakespearean flavor so the text stays readable. Use the translator for first drafts and inspiration; use your own editing for the final version.</p>
        <p>Publishers and editors may have preferences about how much period language to use. A Shakespearean translator gives you raw material; you decide how much to keep and how to polish it for your audience.</p>

        <h2>Editing and Refining Shakespearean-Style Text</h2>
        <p>After you translate into Shakespearean, plan to edit the output. Check that lines are speakable if the text is for performance—tongue-twisters or overly dense phrasing can trip up actors. For social posts or captions, keep phrases short so they scan quickly. If the result feels too modern, try simplifying your input or using more concrete words; if it feels too obscure, trim rare or archaic choices for readability. The goal is usually a balance between period feel and comprehension.</p>
        <p>When mixing Shakespearean-style lines with modern English in the same document, keep each section consistent. Avoid switching between "you" and "thee" in the same sentence unless you are aiming for a specific effect.</p>

        <h2>Why Thee and Thou Matter for Period Feel</h2>
        <p>Thee, thou, and thy are among the most recognizable features of Shakespearean and Early Modern English. They signal to readers and audiences that the text is set in or evoking that period. A Shakespearean translator applies these forms so your modern sentences take on that register. In real Early Modern usage, the choice between you and thou could carry social or emotional weight; a simple tool cannot capture that nuance. For most creative and educational uses, a consistent thee/thou style is enough to create the desired effect.</p>

        <h2>Shakespearean vs Fancy English and Other Stylistic Tools</h2>
        <p>Shakespearean translator targets Early Modern English (thee, thou). A fancy English translator targets ornate or formal wording and fancy Unicode fonts. Medieval translator and Middle English translator target earlier periods (Chaucer-era). Choose the tool that matches your project.</p>
        <p>Use the Shakespearean translator for scripts, education, and fun. For formal communication, use standard English.</p>
        <h2>Similar Period and Language Translators</h2>
        <p>If you need a different period or style, other translators target different eras—Chaucer-era medieval or Middle English, Anglo-Saxon Old English, ornate fancy English, or English to Navajo. Each tool fits a different use case; pick the one that matches your project.</p>

        <h2>Further Information and Related Tools</h2>
        <p>Shakespearean translator tools run in the browser. You enter text, click translate, and copy the result. For text cleanup and the full list of tools, see the site.</p>
        <p>Use the Shakespearean translator for creative and educational purposes. For formal communication, use standard modern English.</p>

        <h2>Translate Into Shakespearean: Common Patterns</h2>
        <p>When you translate into Shakespearean, the tool often replaces you with thee or thou, your with thy, and modern verbs with period forms (hath, dost, art, wilt). Sentence order may shift slightly. Results are stylistic; for performance or publication, edit with a director or editor.</p>

        <h2>Shakespearean Translator for Theatre</h2>
        <p>Theatre companies and drama students use Shakespearean translators to draft or explore period-style dialogue. Use the output as a starting point; refine with a director or script editor for accuracy and clarity.</p>

        <h2>Teaching Shakespeare With a Translator</h2>
        <p>In literature courses, a Shakespearean translator can show students how modern sentences might have looked in Early Modern English. Use it to compare with real Shakespeare texts and to illustrate thee/thou and period vocabulary. Emphasize that the tool is approximate and that reading the plays is essential.</p>

        <h2>Shakespearean vs Medieval and Old English</h2>
        <p>Translate into Shakespearean targets Early Modern English (late 16th–17th century). Medieval translator and Middle English translator target the earlier medieval period (Chaucer). Old English translator targets Anglo-Saxon (earliest). Choose the right tool for your period.</p>
        <p>Teachers often use this contrast to show how English changed over time. Running the same modern sentence through an Old English translator, then a Middle English or medieval translator, then the Shakespearean translator illustrates vocabulary, grammar, and spelling shifts. Students can compare outputs and discuss what each period tool does and does not capture.</p>

        <h2>Using the Shakespearean Translator for Different Audiences</h2>
        <p>The level of archaism you want depends on your audience. For theatre or film, directors may prefer a heavier period feel; for social media or invitations, a light touch usually works better. The Shakespearean translator gives you a baseline—edit up or down from there. For younger readers or casual contexts, keep thee/thou but simplify sentence structure. For academic or performance contexts, you may add more period vocabulary and adjust rhythm. The tool is flexible; your editing tailors the result.</p>

        <h2>Shakespearean Translator for Social Media</h2>
        <p>Shakespearean-style captions and bios can add a literary or theatrical twist to social profiles. Keep phrases short for readability.</p>
        <p>Use one or two period-style lines rather than converting entire posts; that keeps the feed readable while still signaling a love of the Bard or period language. Hashtags and handles stay modern unless you are building a themed account. The tool is popular for bookstagram, theatre communities, and education-focused profiles.</p>

        <h2>Why Use a Shakespearean Translator Instead of Writing by Hand</h2>
        <p>Writing consistent thee/thou and period verb forms from scratch is time-consuming and easy to get wrong. A Shakespearean translator applies the substitutions quickly so you can focus on content and tone. You then edit for rhythm, clarity, and any nuance the tool missed. That workflow is especially useful for teachers preparing examples, writers drafting dialogue, or anyone creating a large amount of period-style text. The tool does the mechanical work; you do the creative and editorial work.</p>

        <h2>Early Modern English and the King James Bible</h2>
        <p>Shakespearean English overlaps with the language of the King James Bible (1611). A Shakespearean translator gives you a similar register—thee, thou, and period phrasing. For religious or literary projects that need that style, the tool can help draft or explore.</p>

        <h2>When Not to Use a Shakespearean Translator</h2>
        <p>Do not use a Shakespearean translator for formal or legal documents, official correspondence, or anywhere standard modern English is required. Résumés, contracts, and academic essays (unless the assignment explicitly asks for period style) should stay in clear modern English. The tool is for creative, educational, and themed content—not for replacing proper communication in professional or legal contexts.</p>
        <p>If you are quoting or adapting an existing Shakespeare play, use a scholarly edition and cite it; a Shakespearean translator is for turning your own modern sentences into period style, not for producing authoritative Shakespeare text. For accessibility, many productions use modernised language; in those cases a translator is unnecessary.</p>

        <h2>Shakespearean Translator and Podcasts or Audio</h2>
        <p>Podcasters and audio creators sometimes use Shakespearean-style intros or outros for a literary or theatrical feel. A Shakespearean translator can draft those lines quickly; read the result aloud to check that it sounds natural and that thee/thou do not trip up the speaker. Keep audio segments short so listeners can follow. The same applies to voice-over or narration: translate a draft, then refine for pacing and clarity.</p>
        <p>When scripting for performance, whether on stage or in audio, consistency matters. Use the translator for a first pass, then edit so every line fits the same level of archaism and the same character voice. Avoid mixing heavy period language with modern slang unless that contrast is intentional.</p>

        <h2>Quick Workflow Summary for Translate Into Shakespearean</h2>
        <p>For best results: start with clean, plain text. Paste into the Shakespearean translator and click translate. Copy the output and edit for rhythm, clarity, and audience. Use the result for creative writing, education, or themed content—not for formal documents. For other periods or styles, the site lists all tools.</p>

        <h2>Free Shakespearean Translator and No Sign-Up</h2>
        <p>This Shakespearean translator is free and does not require an account or sign-up. You can open the page, paste your text, and translate into Shakespearean style in seconds. That makes it useful for theatre rehearsals, classroom demos, or quick social posts.</p>
        <p>Many users prefer tools that run in the browser and do not send data to a server. This Shakespearean translator is designed with that in mind when possible.</p>

        <h2>Shakespearean Translator Bookmark and Quick Access</h2>
        <p>Bookmark this Shakespearean translator page for quick access when you need to translate into Shakespearean style. The tool works on desktop and mobile.</p>
        <p>Drama students and theatre groups often need a quick way to get thee/thou style dialogue. This free Shakespearean translator provides that. For performance or publication, refine the output with a director or editor.</p>

        <h2>Shakespearean Translator Output: Stylistic vs Exact</h2>
        <p>Shakespearean translator output is stylistic, not a replica of Shakespeare’s exact language. Real Early Modern English had variety; the tool gives a consistent thee/thou register. Use the result as a starting point and edit for your project.</p>
        <p>If the output seems too dense or too modern, try rephrasing your input. For scripts, keep lines speakable; for social posts, keep them short.</p>

        <h2>Translate Into Shakespearean: Step-by-Step</h2>
        <p>To translate into Shakespearean with this tool: (1) Open the Shakespearean translator page. (2) Type or paste your modern English into the input box. If the text came from a webpage, use plain text for best results. (3) Click Translate or Convert. (4) Copy the Shakespearean-style result. (5) Edit as needed for scripts or posts.</p>
        <p>For long passages, process in sections so you can review and edit each part. Combine the sections and smooth the transitions.</p>

        <h2>Shakespearean Translator for Invitations and Events</h2>
        <p>Themed events and literary gatherings sometimes use Shakespearean-style wording for invitations or programs. A Shakespearean translator can draft that text; edit for clarity and tone. Keep the language readable so guests understand the details.</p>
        <p>If you are preparing a mix of modern and period text, use the Shakespearean translator only for the period parts. For the rest of your copy, use plain text to keep formatting clean.</p>

        <h2>Limitations of Automatic Shakespearean Translation</h2>
        <p>Automatic translation into Shakespearean has inherent limits. Real Shakespeare used a large and varied vocabulary, complex sentence structures, and period-specific idioms. A general-purpose tool applies a consistent set of substitutions (thee, thou, hath, dost, and the like) and cannot capture every nuance. Use the output as a starting point for scripts, essays, or creative work, and edit for accuracy and style. For performance or publication, pair the tool with the plays and, where appropriate, a director or editor.</p>
        <p>If the result feels too flat or too modern, try rephrasing your input with simpler, more direct language. If it feels overdone, trim some of the archaic forms so the text stays readable. Many users find that a light Shakespearean touch works better than heavy archaism for modern audiences.</p>

        <h2>Shakespearean Translator for Education and Curriculum</h2>
        <p>Many schools and universities teach Shakespeare and Early Modern English. A Shakespearean translator can support that curriculum by giving students a way to approximate thee/thou and period phrasing for assignments and discussion. Use it to show how modern sentences might have looked in Shakespeare’s time, then compare the tool’s output with real lines from the plays. That comparison highlights both what the tool does well and what it cannot capture—vocabulary, rhythm, and context. Always pair tool use with primary texts and scholarly resources.</p>
        <p>When grading work that used the translator, focus on how well students interpreted and used the output (for example in an essay or presentation) rather than on the raw tool result. That keeps the emphasis on critical thinking and engagement with the material.</p>

        <h2>Privacy, Local Processing, and How the Tool Runs</h2>
        <p>Many Shakespearean translators, including this one, are designed to run in the browser. When that is the case, your text is processed locally and not sent to a server, which helps with privacy and speed. No sign-up or login is required, so you can use the tool in a private or incognito window if you prefer. For sensitive or confidential content, check the tool description to confirm whether processing is local or server-based.</p>

        <h2>Shakespearean Translator for Podcasts and Video</h2>
        <p>Content creators making Shakespeare-themed or period podcasts or videos sometimes use a Shakespearean translator to draft scripts, captions, or on-screen text. The tool gives a thee/thou flavor; edit for clarity and pacing so audiences can follow. Keep Shakespearean-style dialogue or captions short. For the rest of your script or description, use standard English so the mix stays readable. The same approach works for social media: a few period-style phrases can add a literary twist without making the whole post hard to read.</p>

        <h2>Summary: When to Use a Shakespearean Translator</h2>
        <p>Use a Shakespearean translator when you need to translate into Shakespearean style for theatre, education, social media, or themed content. The tool is free, runs in the browser, and does not require sign-up.</p>
        <p>Treat the output as stylistic and approximate. For formal or legal documents, use standard modern English.</p>

        <h2>Shakespearean Translator and Copy-Paste Workflow</h2>
        <p>When you copy text from a script or webpage into the Shakespearean translator, clean it first. Use plain text so the input is tidy.</p>
        <p>After you translate into Shakespearean, you may paste the result into a script, caption, or post. If you combine it with other content from the web, run that content through the same cleanup so the final document is consistent.</p>

        <h2>Why Translate Into Shakespearean</h2>
        <p>Shakespearean English (Early Modern English) is the language of the Bard, the King James Bible, and a formative period for English. A Shakespearean translator helps you explore that register—thee, thou, and period phrasing—without studying the language in full. Use the tool for theatre, education, or fun, and pair it with real Shakespeare texts for depth.</p>
        <p>Teachers can use the Shakespearean translator to show how modern sentences map onto Early Modern English. Students can compare tool output with real Shakespeare to see thee/thou and period vocabulary in context.</p>

        <h2>Quick Reference: Shakespearean Translator and Related Tools</h2>
        <p>Use the Shakespearean translator when you need to translate into Shakespearean style. For text cleanup and other tools, see the site.</p>
        <p>Shakespearean translator output is for creative and educational use. For formal communication, use standard modern English.</p>

        <h2>Shakespearean Translator and Education Standards</h2>
        <p>Many schools and universities teach Shakespeare and Early Modern English. A Shakespearean translator can support that curriculum by giving students a way to approximate thee/thou and period phrasing for assignments and discussion. Always pair tool use with the plays and scholarly resources.</p>
        <p>When grading or reviewing work that used a Shakespearean translator, focus on how well the student integrated the output with course material.</p>

        <h2>Shakespearean Translator for Podcasts and Video</h2>
        <p>Content creators making Shakespeare-themed or period podcasts or videos sometimes use a Shakespearean translator to draft scripts, captions, or on-screen text. The tool gives a thee/thou flavor; edit for clarity and pacing.</p>
        <p>Keep Shakespearean-style dialogue or captions short so audiences can follow. For the rest of your script or description, use standard English.</p>

        <h2>Final Checklist for Shakespearean Translator</h2>
        <p>Before you publish or submit text that used the Shakespearean translator: Is the output appropriate for your audience? Did you prepare pasted input as plain text? Did you edit the result for readability and consistency?</p>
        <p>Use the Shakespearean translator for creative and educational purposes only. For formal or legal documents, use standard modern English.</p>

        <h2>Shakespearean Translator and Social Media</h2>
        <p>Shakespearean-style captions or bios can add a literary or theatrical twist to social profiles. Keep phrases short for readability.</p>
        <p>Use the Shakespearean translator for fun and education; do not rely on it for formal communication.</p>

        <h2>Shakespearean Translator Summary</h2>
        <p>A Shakespearean translator converts modern English into Shakespearean (Early Modern) style with thee, thou, and period phrasing for theatre, education, or fun. This free tool runs in your browser and does not require sign-up.</p>
        <p>Treat output as stylistic and approximate. For formal or legal documents, use standard modern English.</p>

        <h2>Step-by-Step Workflow for Translating Into Shakespearean</h2>
        <p>A practical workflow is: (1) Draft your text in modern English or paste it from a document. (2) If it came from the web, run it through a strip-HTML and space-remover tool so the input is clean. (3) Paste the cleaned text into the Shakespearean translator and click Translate or Convert. (4) Copy the result and paste it into your script, caption, or assignment. (5) Edit for clarity, tone, and consistency. For long texts, repeat steps 3–5 in sections so you can review each part before combining. This workflow keeps the input tidy and the output easier to refine.</p>

        <h2>When Not to Use a Shakespearean Translator</h2>
        <p>Do not use a Shakespearean translator for formal or legal documents, official correspondence, or any context where standard modern English is required. The tool is for creative, educational, and entertainment purposes. For business, academic citations, or legal text, use plain modern English. Similarly, if your project needs a different period—medieval, Middle English, or Old English (Anglo-Saxon)—use a translator built for that era so the language matches your setting.</p>

        <h2>Quick Reference: Thee, Thou, Thy and Common Verbs</h2>
        <p>When you translate into Shakespearean, the most frequent substitutions are: you → thee or thou, your → thy, are → art, has → hath, have → hast or hath, do → dost, does → doth, will → wilt, and similar. The Shakespearean translator applies these so your text sounds period-appropriate. Sentence order may change slightly. For scripts, ensure lines remain speakable; for social posts, keep them short. Edit the output for nuance and readability.</p>
        <p>Real Early Modern English had regional and social variation in how thee and thou were used. A general-purpose tool gives a consistent register suitable for most creative and educational uses. For scholarly or performance-grade accuracy, combine the tool with primary texts and reference materials.</p>

        <h2>Conclusion</h2>
        <p>Use a Shakespearean translator to turn modern English into Shakespearean-style text with thee, thou, and period phrasing. This free Shakespearean translator lets you translate into Shakespearean for scripts, education, or fun. For other tools and text cleanup, see the site.</p>
      </div>
    </section>
  );
}

export default async function ShakespeareanTranslatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a Shakespearean translator?', answer: 'A Shakespearean translator is an online tool that converts modern English into Shakespearean-style English—the language of William Shakespeare and Early Modern English. It applies period-appropriate forms such as thee, thou, thy, hath, dost, and art so you can translate into Shakespearean for scripts, education, themed content, or social posts. The result is stylistic and approximate rather than word-for-word Shakespeare.' },
    { category: 'General', question: 'Is the Shakespearean translator free?', answer: 'Yes. This Shakespearean translator is free to use in your browser with no sign-up or account required. You enter or paste your text, click translate, and copy the Shakespearean-style result. The tool runs locally when possible so your text is not sent to a server.' },
    { category: 'Usage', question: 'How do I use the Shakespearean translator?', answer: 'Open the Shakespearean translator page, type or paste your modern English into the input box, and click Translate or Convert. Copy the result for use in scripts, captions, or assignments. If your text was pasted from a webpage or document, clean it first with a strip-HTML and space-remover tool so the input is plain text; that helps the output look consistent.' },
    { category: 'Technical', question: 'What is Shakespearean English?', answer: 'Shakespearean English is the form of English used by William Shakespeare and his contemporaries in the late sixteenth and early seventeenth centuries. It is part of Early Modern English and includes distinctive pronouns (thee, thou, thy) and verb forms (hath, dost, art, wilt). A Shakespearean translator gives your modern sentences that period flavor without reproducing Shakespeare’s exact wording.' },
    { category: 'Technical', question: 'Is Shakespearean the same as Middle English?', answer: 'No. Shakespearean English is Early Modern English (late 16th–17th century) with thee, thou, and period phrasing. Middle English is the earlier language of Chaucer and the medieval period—different spelling, grammar, and vocabulary. Use a Middle English translator or medieval translator for that era; use the Shakespearean translator when you want Bard-style or Early Modern text.' },
    { category: 'Use cases', question: 'When would I use a Shakespearean translator?', answer: 'Use a Shakespearean translator when you need to translate into Shakespearean style for theatre scripts, creative writing, classroom teaching, themed events, or fun social posts. It is ideal for dialogue, invitations, captions, and exploring how modern sentences might have sounded in Early Modern English. It is not intended for formal or legal documents, where standard modern English is appropriate.' },
    { category: 'Use cases', question: 'Can I translate from Shakespearean to modern English?', answer: 'This tool focuses on converting modern English into Shakespearean (thee, thou) style. Some other tools offer reverse conversion from Shakespearean to modern. For cleaning and formatting text before or after you translate, use plain text so your document stays consistent.' },
    { category: 'General', question: 'Why do different Shakespearean translators give different results?', answer: 'Different Shakespearean translators use different word maps, substitution rules, and vocabulary choices for thee/thou and period phrasing. Results are always approximate and stylistic rather than historically exact. For scripts or publication, use the output as a starting point and edit with a director or editor for accuracy and clarity.' },
    { category: 'Privacy', question: 'Is my text sent to a server?', answer: 'This Shakespearean translator is designed to process text locally in your browser when possible, so your input is not sent to a server. That helps with privacy and speed. For details on how a specific session is handled, check the tool description or privacy policy.' },
    { category: 'General', question: 'What does "thee" and "thou" mean?', answer: 'In Early Modern English, "thee" and "thou" are singular forms of "you"; "thy" means "your." Shakespeare and the King James Bible used these forms. The Shakespearean translator swaps in thee, thou, and thy so your text sounds period-appropriate. For more nuance, edit the output by hand.' },
    { category: 'Use cases', question: 'Is a Shakespearean translator good for school?', answer: 'Yes. Teachers and students use a Shakespearean translator to explore how English has changed and to illustrate thee/thou and period vocabulary. Use the output as a starting point and compare it with real Shakespeare texts so students see both the tool’s approximations and actual Early Modern usage. Pair tool use with the plays and scholarly resources.' },
    { category: 'Limits', question: 'Is there a character limit?', answer: 'Browser-based Shakespearean translators typically handle normal paragraph and page lengths. For very long texts, process in sections so you can review and edit each part before combining. If the text was pasted from the web, plain text works best.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Shakespearean translator runs in your browser on phones and tablets with no install or download required. You can paste text, translate into Shakespearean style, and copy the result into any app. Bookmark the page for quick access when you need thee/thou style on the go.' },
    { category: 'General', question: 'Translate into Shakespearean vs translate to Anglo Saxon?', answer: 'Translate into Shakespearean targets Early Modern English (thee, thou, 16th–17th century). Translate to Anglo Saxon targets Old English—the much earlier language of Beowulf and the Anglo-Saxon Chronicle. They are different periods and languages. Use an Old English translator for Anglo-Saxon; use the Shakespearean translator for Bard-style text.' },
    { category: 'Formatting', question: 'Can I get different Shakespearean styles?', answer: 'Tools vary: some focus mainly on pronoun substitution (you → thee, your → thy), while others adjust more vocabulary and phrasing. The output is always stylistic. For theatre or publication, edit the result with a director or script editor to get the level of period accuracy and clarity you need.' },
    { category: 'Use cases', question: 'Can I use Shakespearean text in a play?', answer: 'Yes. Theatre companies and drama students use a Shakespearean translator to draft or explore period-style dialogue. Use the output as a starting point and refine with a director or script editor for accuracy, speakability, and consistency. The tool speeds up the process of getting thee/thou style; human editing ensures it fits the production.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. The Shakespearean translator runs entirely in your browser, so there is no download or install. Open the page, paste your text, and translate into Shakespearean style. The same applies on mobile: no app install is required.' },
    { category: 'Workflow', question: 'Can I copy Shakespearean text to social media?', answer: 'Yes. Copy the Shakespearean-style output and paste it into any app for captions, bios, or themed posts. Keep phrases short for readability. The tool is popular for adding a literary or theatrical twist to social profiles; use it for fun and education, not for formal communication.' },
    { category: 'Technical', question: 'How accurate is automatic Shakespearean translation?', answer: 'Automatic Shakespearean translation is approximate. Real Shakespeare used complex grammar, varied vocabulary, and period-specific idioms that a simple tool cannot fully capture. Use the result as a draft and edit for your project. For performance or publication, pair the tool with the plays and, where needed, expert review.' },
    { category: 'General', question: 'Can I translate long paragraphs?', answer: 'Yes. You can translate long paragraphs or full pages through the Shakespearean translator. For long text, process in sections so you can review and edit each part; then combine and smooth the transitions. If the text was pasted from the web, plain text works best.' },
    { category: 'Privacy', question: 'Do you store my text?', answer: 'When the Shakespearean translator runs locally in your browser, your text is not stored on our servers. Session handling may vary; for full details on data handling and retention, see the tool description and the site’s privacy policy.' },
    { category: 'Use cases', question: 'Shakespearean vs medieval translator?', answer: 'A Shakespearean translator targets Early Modern English (thee, thou, late 16th–17th century). A medieval translator or Middle English translator targets the earlier medieval period and Chaucer-era language. Choose the tool that matches your period: Shakespearean for Bard-style text, medieval or Middle English for earlier style.' },
    { category: 'General', question: 'Where can I find more translator tools?', answer: 'The site lists all text and translator tools for different periods and styles.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ShakespeareanTranslatorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Shakespearean Translator and how to translate into Shakespearean English.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
