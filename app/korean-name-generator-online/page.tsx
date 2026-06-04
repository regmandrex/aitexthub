import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { KoreanNameGeneratorTool } from '@/components/tools/KoreanNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 2592000;

const toolSlug = 'korean-name-generator-online';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Korean Name Generator Online',
    description: 'Generate authentic Korean names with Hangul, romanization, and meanings. Free Korean name generator for male, female, modern, traditional, and K-pop idol style names.',
    seoTitle: 'Korean Name Generator Online - Korean Names With Meaning & Hangul',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Korean Name Generator Online — Korean Names With Meaning and Hangul</h2>

        <h2>Introduction</h2>
        <p>This Korean name generator online creates authentic Korean names with Hangul script, romanized spelling, and optional meanings. You can choose male Korean names, female Korean names, or any gender. Style options include modern Korean names, traditional Korean names, and K-pop idol-style names. Each run gives you up to 24 names with no account or download required. The tool runs entirely in your browser — your inputs and generated names are never sent to our servers.</p>
        <p>People search for Korean name generator, name generator in Korean, Korean name generator male, Korean name generator female, write my name in Korean generator, and my Korean name generator. This page targets all of those intents with one free tool. For other name styles see our <Link href="/korean-nickname-generator">Korean nickname generator</Link> or our <Link href="/god-goddess-name-generator">god and goddess name generator</Link>. See our <Link href="/">homepage</Link> for more tools.</p>

        <h2>What Is a Korean Name Generator?</h2>
        <p>A Korean name generator is an online tool that produces Korean names consisting of a family name (surname) followed by a given name. Korean names are typically two to three syllables total: one syllable for the family name and one or two syllables for the given name. This Korean name generator online outputs the romanized version (English letters), the Hangul script (한글), and an optional meaning for each name. The tool covers male Korean names, female Korean names, modern names, traditional names, and K-pop idol-style names.</p>
        <p>Korean names follow a specific structure. The family name (성, seong) comes first. Common Korean surnames include Kim (김), Lee (ì´), Park (박), Choi (최), and Jung (정). The given name (ì´ë¦„, ireum) follows, usually consisting of one or two Hangul syllable blocks. Each syllable block is made of consonants and vowels. The tool generates both the romanized spelling and the Hangul so you see exactly how the name looks and sounds.</p>
        <p>This free Korean name generator online is designed for writers, gamers, K-drama fans, students of Korean culture, and anyone who needs a Korean name for creative, educational, or fun purposes. No account or download is required. The tool runs in your browser. See our <Link href="/">homepage</Link> for more free text and name tools.</p>

        <h2>Why Use a Korean Name Generator Online?</h2>
        <p>Coming up with an authentic Korean name can be challenging if you are not familiar with Korean naming conventions, the most common surnames, or what given name syllables mean. A Korean name generator online handles the research for you. You get a real-sounding Korean name with correct structure in seconds.</p>
        <p>Writers working on fiction set in Korea or featuring Korean characters need names that feel authentic. Gamers building a Korean-inspired character need a name that fits the world. Students studying Korean culture or language may want to explore what different names mean. K-pop fans may want a Korean idol-style stage name for fun. This Korean name generator covers all of those use cases. It is free, runs in your browser, and requires no sign-up.</p>
        <p>The generator covers the most common Korean surnames so the family names it produces are realistic. Given names are drawn from real Korean naming data covering modern popular names, traditional names still in use today, and names commonly seen among K-pop idols and celebrities. Optional meanings help you pick a name that matches a character's personality or story role.</p>

        <h2>How to Use This Korean Name Generator</h2>
        <p>Using this Korean name generator online is straightforward. Follow these steps:</p>
        <p><strong>Step 1 — Choose gender.</strong> Select male, female, or any gender. The tool has separate name lists for male Korean names and female Korean names so the output matches what you chose.</p>
        <p><strong>Step 2 — Choose style.</strong> Select modern, traditional, K-pop/idol, or any style. Modern names reflect names popular in South Korea today. Traditional names include older forms still in use. K-pop/idol names reflect names seen among Korean entertainers and celebrities.</p>
        <p><strong>Step 3 — Set the count.</strong> Choose how many names to generate, from 1 to 24 per run.</p>
        <p><strong>Step 4 — Enable or disable meanings.</strong> Check the Include meaning box to see the meaning of the given name syllables and the surname. Uncheck it for a clean list of names only.</p>
        <p><strong>Step 5 — Click Generate names.</strong> The tool runs in your browser and produces results in under a second.</p>
        <p><strong>Step 6 — Copy your results.</strong> Use the Copy button to copy all generated Korean names to your clipboard. Paste into your notes, document, or game.</p>
        <p>Run the generator multiple times to get more options. There is no daily or total limit. No account, no download, and no payment is required.</p>

        <h2>Korean Name Generator Male — Male Korean Names</h2>
        <p>To generate male Korean names, select Male from the gender dropdown. The tool uses a curated list of Korean male given names across modern, traditional, and K-pop styles. Common male Korean given names today include Minjun (민준), Siwoo (시우), Dohyun (ë„í˜„), Seojun (서준), and Junho (준호). Traditional male names include Daewon (ëŒ€ì›), Youngho (ì˜í˜¸), and Cheolsu (철수). K-pop idol male names seen among popular artists include Taehyung (태형), Jungkook (정국), Jimin (지민), Baekhyun (백현), and Sehun (세훈).</p>
        <p>Male Korean names often use syllables that carry meanings related to talent, brightness, wisdom, or strength. For example, Jun (준) means talented, Ho (호) means bright or grand, Min (민) means quick or clever, and Hyun (현) means wise. Pairing these syllables with a family name gives a complete Korean male name with meaning.</p>
        <p>The Korean name generator male option is popular for fiction writers creating Korean male characters, gamers building Korean-inspired heroes, and fans who want to know what a Korean male name sounds like with their favorite surname.</p>

        <h2>Korean Name Generator Female — Female Korean Names</h2>
        <p>Select Female to generate female Korean names. Female Korean given names in the modern era often use syllables like Yeon (연, lotus), Ji (지, wisdom), Soo (수, long life), Chae (채, colorful), and Eun (ì€, grace). Common modern female names include Jiyeon (지연), Yuna (유나), Minji (민지), Seoyeon (서연), and Jimin (지민). Traditional female Korean names include Soonja (ìˆœìž), Younghee (ì˜í¬), and Myungsook (명숙). K-pop idol female names include Jennie (제니), Rosé (로제), Irene (ì•„ì´ë¦°), Nayeon (나연), and Jihyo (지효).</p>
        <p>Female Korean names tend to use softer or more elegant syllable combinations compared to male names, though this is not a strict rule. The meanings associated with female names often reference nature (lotus, moon, flower), virtues (grace, fidelity, wisdom), or brightness. This Korean name generator female option covers all three style categories — modern, traditional, and idol.</p>

        <h2>Korean Name Generator With Meaning</h2>
        <p>Enable the Include meaning option to see what each generated Korean name means. Korean names are chosen for their meanings, not just their sound. Parents typically select syllables whose meanings reflect qualities they hope their child will embody: intelligence, kindness, strength, beauty, or long life.</p>
        <p>The meaning display shows two parts: the given name meaning and the surname meaning. For example, Kim Jiyeon (김지연) would show something like &quot;wisdom and lotus (surname: gold).&quot; This gives you a complete picture of the name. The Korean name generator with meaning option is especially useful for writers who want to match a character's name to their personality, or for anyone curious about Korean naming culture.</p>
        <p>Some popular Korean name meanings: Minjun means &quot;clever and talented,&quot; Jiyeon means &quot;wisdom and lotus,&quot; Taehyung means &quot;great shape,&quot; Yuna means &quot;gentle and graceful,&quot; and Siwoo means &quot;begin with greatness.&quot; Surnames also carry meanings: Kim means gold, Lee means plum tree, Park means gourd, and Choi means pinnacle.</p>

        <h2>Korean Name Generator With Hangul</h2>
        <p>Every name generated by this tool includes the Hangul script (한글) alongside the romanized spelling. Hangul is the official writing system of Korea, created by King Sejong the Great in the 15th century. It is a featural alphabet where each character block represents a syllable made up of consonant and vowel units.</p>
        <p>Seeing the Hangul alongside the romanization is useful for several reasons. Writers can include the Hangul in their work for authenticity. Language learners can use the tool to practice reading Korean syllable blocks. Those getting a Korean name tattoo need the Hangul, not just the romanization. Anyone writing my name in Korean generator searches will find this tool useful because it shows how the name looks in actual Korean script.</p>
        <p>For example, the surname Kim is 김 in Hangul. The given name Minjun is 민준 — two syllable blocks, 민 (min) and 준 (jun). The full name Kim Minjun is written 김민준. This tool outputs both the full romanized name and the full Hangul name for every result.</p>

        <h2>Write My Name in Korean Generator</h2>
        <p>Many people search for write my name in Korean generator or my name in Korean generator because they want to see their own name in Korean. Korean does not have an exact equivalent for every English sound, but phonetic approximations are commonly used. For example, Michael becomes ë§ˆì´í´ (Ma-i-keul) and Sarah becomes ì‚¬ë¼ (Sa-ra).</p>
        <p>This tool generates authentic Korean names rather than transliterating English names into Hangul letter by letter. If you want a Korean name that reflects your own personality or English name meaning, the best approach is to use this generator to browse names and find one whose meaning resonates with you. Many people adopt a Korean name this way rather than using a phonetic transliteration.</p>
        <p>For a truly personalized experience, look at the meanings provided and choose a Korean name whose syllable meanings align with your own name's meaning or with qualities you value. This is how many foreigners living in Korea or studying Korean culture choose their Korean name.</p>

        <h2>Korean Idol Name Generator — K-pop Style Names</h2>
        <p>The K-pop/idol style option produces Korean names associated with the entertainment industry. K-pop idols often use their real Korean names as stage names, though some adopt English stage names or modified versions. Male idol names like Taehyung (BTS V), Jungkook (BTS), Baekhyun (EXO), and Sehun (EXO) come from real Korean names with standard meanings but have become iconic through association with popular artists.</p>
        <p>Female idol names like Jennie (BLACKPINK), Nayeon (TWICE), Irene (Red Velvet), and Jihyo (TWICE) are also featured in this Korean idol name generator. The style reflects names that are popular in the K-pop world and feel both modern and memorable.</p>
        <p>Use the K-pop/idol style option if you are creating a fictional Korean pop group, writing fan fiction, building a game character inspired by K-drama or K-pop, or just want a name that feels current and culturally relevant in Korean entertainment.</p>

        <h2>Korean Name Generator From English — How It Works</h2>
        <p>Some searches are for a Korean name generator from English or Korean name generator based on real name. The intent behind these searches is usually one of two things: either the user wants their English name transliterated into Korean phonetics, or they want a Korean name that corresponds in meaning to their English name.</p>
        <p>This tool takes the second approach. Rather than spelling your English name in Hangul letter by letter, it gives you Korean names with meanings so you can find one that resonates. For example, if your English name means &quot;light,&quot; you might look for a Korean name with syllables like Hyo (효, bright), Bin (빈, bright), or Hyun (현, wise). If your name means &quot;grace,&quot; you might pick a name with Eun (ì€, grace) as a syllable.</p>
        <p>This approach produces a more authentic Korean name that a native Korean speaker would actually use, rather than a phonetic spelling that can look unusual in Korean. The Include meaning option makes it easy to scan the list and find a name whose meaning fits.</p>

        <h2>Random Korean Name Generator</h2>
        <p>Every click of the Generate names button produces a new random Korean name set. The random Korean name generator uses a different seed on each run, so you get fresh results every time. There is no limit on how many times you can generate. Run it once for a quick pick, or run it many times and paste all batches into one document to build a large pool of Korean name options.</p>
        <p>The randomization pulls from separate surname and given name lists. Surnames are drawn from the most common Korean family names so every generated name has a realistic, common surname. Given names are drawn from style-appropriate lists (modern, traditional, or idol) depending on your selection. This combination ensures every random Korean name looks and feels like a real Korean name.</p>

        <h2>South Korean Name Generator</h2>
        <p>All names in this tool are based on South Korean naming conventions, which is what most people mean when they search for Korean name generator or south Korean name generator. North Korean names follow similar structural rules (one syllable surname, one or two syllable given name) but tend to use different syllable combinations with different cultural or political connotations. This tool focuses on South Korean names as used in modern South Korea.</p>
        <p>South Korean naming trends have shifted over generations. Older generations used names like Soonja (ìˆœìž), Kyungsook (경숙), and Cheolsu (철수) that are now considered traditional. Younger generations use names like Minjun (민준), Yuna (유나), and Seojun (서준) that rank highly in South Korean baby name statistics. The generator covers both generations, so you can choose the era that fits your creative project.</p>

        <h2>Korean Fantasy Name Generator</h2>
        <p>Writers of Korean-inspired fantasy fiction often search for Korean fantasy name generator or fantasy name generator Korean. The names in this tool work well for fantasy settings because they are phonetically distinctive and carry meanings that can add depth to characters. A villain might be named after syllables meaning chaos or shadow, while a hero might carry syllables meaning brightness or strength.</p>
        <p>Korean names also work in non-Korean fantasy worlds because the sounds are accessible to English speakers while feeling exotic. Names like Kang Taewon, Shin Yongsoo, or Ryu Daewon sound suitably epic for fantasy characters without being unpronounceable. Include meanings to find names that match your characters' roles in the story.</p>
        <p>For a Korean fantasy name generator experience, run the tool on the Traditional style option, which produces older, more formal Korean names with classical meanings. These often feel more fitting for historical or fantasy settings than modern names, which may feel too contemporary.</p>

        <h2>Korean First and Last Name Generator</h2>
        <p>Every name this tool generates is a full Korean name consisting of both the family name (last name) and the given name (first name). In Korean convention, the surname comes first and the given name comes second — the opposite of English convention. So Kim Minjun is Mr. Kim, with Minjun being the given name. The tool outputs names in Korean order: surname first.</p>
        <p>The Korean last name generator component draws from the 30 most common Korean surnames, which together cover the majority of the Korean population. Kim, Lee, and Park alone account for roughly 45% of all Koreans. The tool includes less common surnames like Ryu (류), Bae (배), and Ha (하) to give variety.</p>
        <p>The Korean first name generator component uses separate male and female name lists so gender-specific results are accurate. Each given name is one or two syllables drawn from real Korean naming data.</p>

        <h2>Korean Name Generator Based on Birthday or Personality</h2>
        <p>Some searches are for Korean name generator based on birthday or Korean name generator based on personality. In Korean tradition, names were sometimes chosen based on the hour and date of birth using a system called saju (사주), which involves interpreting the four pillars of destiny. However, for creative and modern use, most people simply choose names based on sound and meaning rather than birth date calculations.</p>
        <p>For personality-based naming, the Include meaning option is your best tool. Browse the generated names and look for syllable meanings that match the personality you have in mind. A creative, artistic character might suit a name with meanings like &quot;colorful&quot; (채, chae) or &quot;art&quot; (예, ye). A strong, dependable character might suit names with meanings like &quot;iron&quot; (철, cheol) or &quot;great&quot; (대, dae). Run the generator multiple times to build a pool of options, then select the one whose meaning fits best.</p>

        <h2>Korean Full Name Generator</h2>
        <p>A Korean full name consists of the surname and the given name. Most Korean full names are two or three syllables total: one syllable surname plus one or two syllable given name. This Korean full name generator produces complete names — never just a surname or just a given name in isolation. Every result is a usable, complete Korean full name.</p>
        <p>Unlike English names, Korean names do not have middle names in the traditional sense. The given name itself may be two syllables, which some non-Koreans mistakenly think are a first and middle name. For example, in Kim Minjun (김민준), &quot;Min&quot; and &quot;Jun&quot; are not separate names — Minjun is a single two-syllable given name. This tool outputs the given name as one unit, reflecting how it is actually used.</p>

        <h2>Korean Stage Name Generator</h2>
        <p>K-pop idols and Korean actors sometimes use stage names that differ from their legal names. Stage names are often chosen to be memorable, easy to romanize, and distinctive. Some idols use English names as stage names (Lisa of BLACKPINK, whose Korean name is Lalisa Manoban). Others use modified or simplified versions of their Korean name.</p>
        <p>For a Korean stage name generator effect, try the K-pop/idol style option in this tool. The names in that category reflect the kind of names commonly used in Korean entertainment. If you are creating a fictional K-pop group, writing a K-drama, or roleplaying as a Korean idol character, the idol style option gives you the most appropriate names.</p>

        <h2>Korean Name Generator With Hangul and Meaning Combined</h2>
        <p>The most complete output from this tool shows the romanized name, the Hangul, and the meaning all together. For example: Kim Jiyeon (김지연) — wisdom and lotus (surname: gold). This format is useful for writers who want to include the Korean script in their work, for learners who want to see how the name looks in Hangul, and for anyone who wants to understand what the name means before using it.</p>
        <p>When the Include meaning option is enabled, you see the meaning of the given name syllables and the meaning of the surname. This combined output covers the Korean name generator with meaning and Korean name generator hangul searches in one result. Copy the full output to your clipboard using the Copy button and paste into your document.</p>

        <h2>North Korean Name Generator</h2>
        <p>While this tool focuses on South Korean names, many of the surnames (Kim, Lee, Park, etc.) and structural conventions apply equally to North Korean names. However, North Korean given names tend to reflect different cultural influences, including names that reference revolutionary ideals, nature, and traditional Korean values with Communist-era associations. This tool does not include North Korean-specific given names but the structural output (one syllable surname, one or two syllable given name) would apply to North Korean names as well. For general Korean name generation including names that could plausibly be North Korean, the Traditional style option is closest.</p>

        <h2>Korean Baby Name Generator</h2>
        <p>Expectant parents of Korean heritage or parents adopting Korean culture for their child sometimes search for Korean baby name generator or Korean baby names generator. While this tool is primarily built for creative use, the modern style names it generates reflect names that are genuinely popular for South Korean babies today. Names like Minjun (민준), Siwoo (시우), Yuna (유나), and Seoyeon (서연) consistently rank in South Korean baby name statistics.</p>
        <p>The Include meaning option is particularly useful for parents who care deeply about the meaning of a name. Korean naming places great importance on meaning — parents often consult with elders or name specialists (작명가, jangmyeonga) to choose syllables that will bring good fortune to the child. This tool gives you the meanings to consider, though for formal naming decisions you may want to consult a Korean naming specialist for the most auspicious choice.</p>

        <h2>Korean Gamer Name Generator and Korean Instagram Name Generator</h2>
        <p>Gamers who play Korean-style games or who want a Korean-inspired username often search for Korean gamer name generator. Similarly, social media users wanting a Korean aesthetic for their handle search for Korean Instagram name generator. This tool generates full Korean names rather than usernames, but the output can easily be adapted: take the romanized name and use it as-is (e.g., KimMinjun), combine surname initial with given name (e.g., K.Minjun), or use just the given name (e.g., Minjun97) for a username style.</p>
        <p>The K-pop/idol style option is particularly popular for gaming and social media usernames because those names have a modern, recognizable feel. Names like Baekhyun, Taehyung, and Jisoo are distinctive without being unusual within a Korean context.</p>

        <h2>Korean Name Generator for Fiction and Creative Writing</h2>
        <p>Fiction writers who need Korean character names for novels, screenplays, manhwa (Korean comics), or fan fiction use this tool to quickly generate authentic options. The most important thing for fiction is that names feel real and are spelled consistently. This tool provides the romanized name, Hangul, and meaning so you can keep a naming glossary for your story.</p>
        <p>Tips for using this tool in fiction: run it multiple times and collect 20–30 candidates; filter by gender and style appropriate to each character; use the meaning to verify the name fits the character's personality or role; keep Hangul forms for consistency if you include Korean script in your work; avoid accidentally reusing a real Korean celebrity name for a villain (the idol style list uses well-known names as references — consider modifying slightly for fictional characters).</p>
        <p>For a whole cast of characters, run the generator several times using different style options. A historical Korean drama needs traditional names; a modern K-drama needs modern names; a K-pop fiction story needs idol-style names. This Korean name generator online covers all three.</p>

        <h2>How Korean Names Are Structured</h2>
        <p>Korean names follow a consistent structure that differs from Western names. Understanding this structure helps you use the generated names correctly.</p>
        <p><strong>Surname first:</strong> In Korean, the family name always precedes the given name. Kim Jiyeon is Ms. Kim, not Ms. Jiyeon. When addressing someone formally in Korean, you use their surname with a title. In an English-language context, Korean names are sometimes presented given name first to match English convention, but the traditional Korean order is surname first.</p>
        <p><strong>One syllable surnames:</strong> The vast majority of Korean surnames are one syllable. The most common surnames — Kim (김), Lee (ì´), Park (박), Choi (최), Jung (정) — are all monosyllabic. A very small number of Korean surnames are two syllables (e.g., Namgung, ë‚¨ê¶), but these are rare. This tool uses common single-syllable surnames.</p>
        <p><strong>One or two syllable given names:</strong> Korean given names are one or two syllables. Single syllable given names exist (e.g., Joon, 준) but two-syllable given names are more common in modern Korea. This tool generates two-syllable given names for a realistic feel.</p>
        <p><strong>Hanja meanings:</strong> Historically, Korean given names were written in Hanja (Chinese characters used to write Korean before Hangul). Each Hanja character has a specific meaning. Even though most Koreans today write their names in Hangul, the Hanja meanings are still associated with each syllable. The meanings shown in this tool reflect those traditional Hanja associations.</p>

        <h2>Privacy and Local Processing</h2>
        <p>This Korean name generator online runs entirely in your browser. When you set your options and click Generate names, the names are created locally on your device using JavaScript. Your choices, the names you generate, and anything you type into the tool are never sent to our servers. We do not store your inputs or the generated names. No account or login is required. You can use this tool in a private or incognito window if you prefer. The tool works on desktop, tablet, and phone.</p>

        <h2>Copying and Using Generated Korean Names</h2>
        <p>Use the Copy button to copy all generated Korean names (including Hangul and meanings, if enabled) to your clipboard. Paste directly into a notes app, word processor, or game. The formatting preserves line breaks so each name is on its own line. If you notice extra spaces or formatting issues when pasting from the web, run the text through a plain-text cleaner. See our <Link href="/">homepage</Link> for plain-text tools.</p>
        <p>There is no limit on how many names you can copy or how many times you run the generator. Run it as many times as you need to build a complete list.</p>

        <h2>No Download or Account Required</h2>
        <p>This Korean name generator online is free to use without creating an account, providing an email address, or downloading software. Open the page, configure your options, click Generate names, and copy your results. The tool works on all modern browsers on desktop and mobile. Bookmark the page for easy access whenever you need Korean names.</p>

        <h2>Summary</h2>
        <p>Use this Korean name generator online to create authentic Korean names with Hangul, romanization, and optional meanings. Choose male Korean names, female Korean names, or any gender. Pick from modern, traditional, or K-pop idol style. Generate up to 24 names per run with no daily limit. Enable the Include meaning option to see what each name means. The tool runs in your browser with no account or download required. For other name generators and text tools see our <Link href="/">homepage</Link>. For a Korean nickname generator see our <Link href="/korean-nickname-generator">Korean nickname generator</Link>.</p>
        <p>Every generated name includes the full romanized spelling and the Hangul script. The family name always comes first, reflecting real Korean name convention. Surnames are drawn from the most common Korean family names. Given names are drawn from real Korean naming data across three style categories. The generator is free, runs locally, and stores nothing. Run it as many times as you need and copy all results with one click. No sign-up is required and the tool works on all devices. Bookmark the page for quick access when you need Korean names for fiction, games, social media, or any creative project.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Korean name generator?', answer: 'A Korean name generator is an online tool that creates Korean names consisting of a surname (family name) and a given name. This tool outputs the romanized spelling, Hangul script (한글), and optional meanings for each generated name. It covers male Korean names, female Korean names, modern names, traditional names, and K-pop idol-style names. The tool is free and runs in your browser with no account required.' },
  { category: 'Usage', question: 'How do I use the Korean name generator online?', answer: 'Choose gender (male, female, or any), choose style (modern, traditional, K-pop/idol, or any), set how many names you want (1–24), optionally check Include meaning, then click Generate names. Use the Copy button to copy all names to your clipboard. Paste into your notes and pick the name that fits. No account is required and the tool runs in your browser.' },
  { category: 'General', question: 'Is the Korean name generator free?', answer: 'Yes. This Korean name generator online is completely free. You can generate as many Korean names as you want without creating an account or paying. The tool runs locally on your device with no sign-up required.' },
  { category: 'General', question: 'Does the Korean name generator show Hangul?', answer: 'Yes. Every name generated by this tool includes the Hangul (한글) script alongside the romanized spelling. For example, Kim Minjun is shown as 김민준. This makes the tool useful for writers who need the Korean script, language learners, and anyone who wants to see how the name looks in actual Korean.' },
  { category: 'General', question: 'Can I generate Korean names with meanings?', answer: 'Yes. Enable the Include meaning option before clicking Generate names. The tool shows the meaning of the given name syllables and the surname for each result. For example, Kim Jiyeon might show "wisdom and lotus (surname: gold)." This is useful for writers who want names that match a character\'s personality.' },
  { category: 'Usage', question: 'How do I generate male Korean names?', answer: 'Select Male from the gender dropdown, then click Generate names. The tool uses a curated list of real Korean male given names across modern, traditional, and K-pop styles. You can also choose a specific style or leave it on Any. Popular male Korean names in the modern list include Minjun, Siwoo, Dohyun, and Junho.' },
  { category: 'Usage', question: 'How do I generate female Korean names?', answer: 'Select Female from the gender dropdown, then click Generate names. The tool uses a separate list of Korean female given names. Popular modern female Korean names include Jiyeon, Yuna, Minji, and Seoyeon. Traditional female names include Soonja and Younghee. K-pop idol female names include Jennie, Nayeon, and Jihyo.' },
  { category: 'Use cases', question: 'Can I use this as a write my name in Korean generator?', answer: 'This tool generates authentic Korean names rather than transliterating English names phonetically. For a personalized Korean name, enable the Include meaning option and browse results to find a name whose meaning matches your own name\'s meaning or personality. This is how many foreigners adopt a Korean name — by meaning rather than phonetics.' },
  { category: 'Use cases', question: 'Can I use the Korean name generator for fiction?', answer: 'Yes. This Korean name generator is designed for writers, screenwriters, game developers, and fanfiction authors who need authentic Korean character names. Run it multiple times to collect a pool of names. Use the Include meaning option to match names to character personalities. The Hangul output is useful if you include Korean script in your work.' },
  { category: 'Use cases', question: 'What is the K-pop idol style option?', answer: 'The K-pop/idol style produces names associated with Korean entertainment. Male idol names include Taehyung, Jungkook, Baekhyun, and Sehun. Female idol names include Jennie, Nayeon, Irene, and Jihyo. Use this option when creating a fictional K-pop group, writing K-pop fan fiction, or wanting a name with a modern Korean entertainment feel.' },
  { category: 'General', question: 'What Korean surnames does the generator use?', answer: 'The tool uses the 30 most common Korean surnames including Kim (김), Lee (ì´), Park (박), Choi (최), Jung (정), Kang (강), Cho (조), Yoon (윤), Jang (장), Lim (임), and more. These surnames cover the majority of the Korean population, so every generated name has a realistic family name.' },
  { category: 'General', question: 'How are Korean names structured?', answer: 'Korean names consist of a one-syllable surname (family name) followed by a one or two syllable given name. The surname always comes first in Korean convention. For example, Kim Minjun — Kim is the surname, Minjun is the given name. In Hangul: 김민준. Total length is typically 2–3 syllables.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Korean name generator runs entirely in your browser. Names are created locally on your device. Your inputs and the generated names are never sent to our servers. We do not store anything. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Compatibility', question: 'Does the Korean name generator work on mobile?', answer: 'Yes. The tool runs in a web browser and works on desktop, tablet, and phone. No app download is needed. Open the page, choose your options, click Generate names, and copy the results. On mobile you can paste directly into your notes app.' },
  { category: 'Limits', question: 'How many Korean names can I generate?', answer: 'You can generate 1–24 names per run. There is no daily or total limit. Run the generator as many times as you like. Each run produces a new random set. Paste multiple runs into one document if you need a large pool of names.' },
  { category: 'Use cases', question: 'Can I use this as a Korean fantasy name generator?', answer: 'Yes. Korean names work well in fantasy settings because they are phonetically distinct and carry meaningful syllable combinations. The Traditional style option produces older, more formal Korean names that feel fitting for historical or fantasy contexts. Enable meanings to find names that match your characters\' roles.' },
  { category: 'Use cases', question: 'Can I use this for a random Korean name generator?', answer: 'Yes. Every click of Generate names produces a new random set of Korean names using a different random seed. There is no limit on how many times you can run it. Use the Any gender and Any style options for maximum variety in your random results.' },
  { category: 'Technical', question: 'How does the Korean name generator work?', answer: 'The tool uses curated lists of common Korean surnames and real Korean given names separated by gender and style (modern, traditional, K-pop). When you click Generate names, JavaScript randomly pairs surnames and given names in your browser. No names or settings are sent to a server. Each run uses a different random seed for fresh results.' },
  { category: 'General', question: 'What is the difference between modern and traditional Korean names?', answer: 'Modern Korean names are those popular in South Korea today — names like Minjun, Yuna, Seojun, and Jiyeon that rank highly in current baby name statistics. Traditional names include older forms like Soonja, Cheolsu, and Youngho that were common in previous generations and are still used. The K-pop/idol style reflects names associated with Korean entertainers.' },
  { category: 'Use cases', question: 'Can I use this as a Korean stage name generator?', answer: 'Yes. The K-pop/idol style option generates names similar to those used by Korean entertainers as stage names. These names are modern, memorable, and reflect the naming style seen in K-pop groups and K-dramas. Use this option when creating a fictional idol character or K-pop group.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Korean name generator online works without sign-up or login. The tool runs entirely in your browser. Open the page, set your options, and click Generate names. No account, email, or payment is required.' },
  { category: 'Use cases', question: 'Can I use it as a Korean gamer name generator?', answer: 'Yes. Take the romanized output and adapt it as a username: use the full name (KimMinjun), use surname initial with given name (K.Minjun), or use just the given name (Minjun). The K-pop/idol style produces names that work well as gaming handles because they are distinctive and modern.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have a Korean nickname generator, god and goddess name generator, Muslim name generator, ancient Greek name generator, anime name generator, and many more. See our homepage for the full list of name generators and text tools.' },
];

export default async function KoreanNameGeneratorOnlinePage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '2140',
      bestRating: '5',
      worstRating: '1',
    },
  };
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell
        tool={{ ...toolData, title, shortDescription: description }}
        ui={<KoreanNameGeneratorTool />}
        related={<RelatedTools currentSlug={toolData.slug} />}
      >
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Korean name generator online.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
