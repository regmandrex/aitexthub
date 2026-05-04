import React from 'react';
import type { FaqItem } from '@/components/faqData';
import type { ToolContent } from './index';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Fanfiction Rewriter: Make AI-Generated Fanfic Sound Human, Pass Detection, and Nail Fandom Voice</h2>
        <p className="text-slate-700 mb-4">The Fanfiction Rewriter is a free online tool that rewrites AI-generated fanfiction to sound authentic, emotionally resonant, and genuinely human. If you have drafted fanfiction with ChatGPT, Claude, Gemini, or any other large language model and the output reads as flat, overly formal, or robotically structured, this tool transforms that draft into writing that fits the AO3 and Wattpad communities you write for. No account required, no word limits on processing, and completely free.</p>
        <p className="text-slate-700 mb-4">Fanfiction communities are among the most sophisticated readers on the internet. AO3 readers in particular have spent years developing sharp instincts for voice, character consistency, and the specific emotional register that makes a fic land. AI-generated fanfiction fails that audience not because it gets facts wrong but because it gets tone wrong "” the phrasing is too clean, the character voices are too generic, and the emotional beats arrive exactly where a formula would place them rather than where the story needs them. The Fanfiction Rewriter addresses these structural problems, not just surface synonyms.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why AI Fanfiction Gets Flagged on AO3 and Wattpad</h2>
        <p className="text-slate-700 mb-4">AO3 has an explicit policy against fully AI-generated works. Wattpad has similarly updated its community guidelines to address AI content. Beyond platform policy, readers flag AI fanfiction through a different channel entirely: the comments section. Fandom readers have spent years absorbing community-specific style conventions, in-universe dialogue rhythms, and ship-specific emotional dynamics. When an AI generates fanfic, it draws on a statistical average of training data "” which produces writing that covers the right topics but misses the specific register that makes a fic feel like it belongs in a particular fandom.</p>
        <p className="text-slate-700 mb-4">The practical markers that readers and moderators use to identify AI fanfiction include: dialogue that sounds like a character description rather than a character speaking; action lines that tell you what a character is feeling instead of showing behavior; transitions that use boilerplate phrases like "as the evening wore on" or "it was then that"; and an uncanny smoothness where every paragraph resolves its tension before the next paragraph introduces new tension. Human fanfic writers create jagged emotional arcs. AI creates smooth ones.</p>
        <p className="text-slate-700 mb-4">GPTZero, Originality.ai, and similar AI detection tools compound the platform risk. These detectors analyze perplexity (how unpredictable the word choices are) and burstiness (how much sentence length varies) to assign an AI probability score. Raw AI output scores high on these detection metrics. The Fanfiction Rewriter rewrites the text with the patterns human writers naturally produce "” varied perplexity, burstier sentence structure, more idiomatic phrasing "” bringing detection scores down significantly.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Fandom Voice and Character Consistency: What AI Gets Wrong</h2>
        <p className="text-slate-700 mb-4">Character voice is the single biggest weakness of AI-generated fanfiction. A language model processes canonical character dialogue and synthesizes a statistical average of how that character speaks. What emerges is a kind of flattened, composite voice that sort of sounds like the character if you squint, but lacks the specific tics, vocabulary, and emotional register that make the character feel real to fans who have consumed hundreds of hours of canon content.</p>
        <p className="text-slate-700 mb-4">Consider the difference between writing a character as "sarcastic and intelligent" versus writing them with the specific cadence of their canonical one-liners, the way they deflect vulnerability with humor, the particular topics they avoid and the ones they cannot stop talking about. Human fanfic writers absorb these details through years of fandom engagement. AI models average them. The Fanfiction Rewriter works to reintroduce the variation and specificity that character voice requires.</p>
        <p className="text-slate-700 mb-4">Beyond individual character voice, AI fanfic frequently mishandles the relational dynamics between characters. Ship dynamics "” the specific emotional power balance, the history of tension and release, the way two characters&#39; speech patterns change when they are alone together versus in company "” are extraordinarily fandom-specific. Readers who ship a particular pairing have a precise internal model of how those characters interact, and AI output that violates that model reads as out-of-character (OOC) regardless of how technically correct the prose is.</p>
        <p className="text-slate-700 mb-4">The Fanfiction Rewriter addresses these voice problems by restructuring the dialogue attribution, varying the emotional temperature within scenes, and breaking the smooth systematic progression through emotional beats that AI characteristically produces. The result is writing that reads as if someone who genuinely loves the characters wrote it "” not as if a language model optimizing for plausibility generated it.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The AO3 Tagging System and What It Reveals About Fandom Expectations</h2>
        <p className="text-slate-700 mb-4">One of AO3&#39;s most distinctive features is its tagging system "” a folksonomy that lets writers self-categorize their works with extraordinary granularity. Tags include canonical relationship tags (Character A/Character B for romantic pairings, Character A &amp; Character B for platonic ones), content warnings, trope tags (Slow Burn, Enemies to Lovers, Hurt/Comfort, Fake Dating), POV tags, rating tags, and the famous "Additional Tags" freeform field where writers add anything from "set in a coffee shop" to specific emotional beats readers should prepare for.</p>
        <p className="text-slate-700 mb-4">AI-generated fanfiction creates friction with the tagging system in interesting ways. AI tends to write "everything" "” it produces a fic that hits trope beats from multiple different categories simultaneously, because it is trained to be comprehensive. Real fanfic writers are specific: they know they are writing a slowburn enemies-to-lovers with a particular emotional focus, and they maintain that focus across the whole work. AI-generated fic that gets tagged and posted tends to confuse readers who chose it for a specific trope, because the AI has spread its attention too broadly.</p>
        <p className="text-slate-700 mb-4">The tagging system also reveals how specifically fandom readers have defined their preferences. There are thousands of ship-specific tags, trope-specific tags, and even tags that reference specific canonical moments or dynamics. This degree of specificity reflects how deeply invested fandom readers are in precise emotional and narrative categories. AI cannot simulate that level of community-specific knowledge from training data alone, which is why AI-generated fanfic consistently feels generic to readers who have internalized the fandom&#39;s specific vocabulary.</p>
        <p className="text-slate-700 mb-4">When using the Fanfiction Rewriter, think about your tags as a creative brief. What specific trope are you executing? What emotional register does your pairing call for in this particular fic? The more specifically you can articulate these goals, the better you can direct your editorial pass on the rewriter output toward those targets.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Ship Dynamics and the Specific Emotional Register of Fanfiction</h2>
        <p className="text-slate-700 mb-4">Shipping is the heart of a substantial portion of fanfiction, and ship-specific writing has some of the most exacting standards of any creative writing community. Readers of a popular ship on AO3 have read thousands of fics featuring those characters. They have developed precise expectations: how the characters move around each other in the earliest chapters, how the tension builds and releases, how confessions are staged, what kinds of miscommunication are authentic to these characters versus contrived, how the physical descriptions of each character are handled in the point of view of the other.</p>
        <p className="text-slate-700 mb-4">AI fails at ship dynamics in predictable ways. It produces confession scenes that are too direct "” the characters simply tell each other how they feel without the layers of deflection, misreading, and aborted attempts that make human-written slowburn so satisfying. It writes physical awareness passages that are technically correct but emotionally generic "” "he noticed how close they were standing" instead of a more specific, character-grounded observation that only makes sense given what this particular character notices and values. It resolves emotional tension too quickly and completely, leaving no loose threads for the reader to carry into the next chapter.</p>
        <p className="text-slate-700 mb-4">Slowburn fics, hurt/comfort, enemies-to-lovers, and other major AO3 tropes each have their own genre conventions that AI handles poorly. Slowburn requires sustained tension management over many chapters "” something that is genuinely difficult for AI because maintaining tension means deliberately withholding resolution, which conflicts with AI&#39;s tendency to smooth and resolve. Hurt/comfort requires calibrated emotional vulnerability in the comfort section, a register that AI often renders as stilted or therapist-like rather than intimate. Enemies-to-lovers requires voice changes that track the characters&#39; emotional development, something that requires more longitudinal character modeling than AI typically sustains.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Common AI Tells in Fanfiction Writing</h2>
        <p className="text-slate-700 mb-4">If you are reviewing AI-generated fanfic before putting it through the rewriter, here are the specific patterns to look for. Identifying these patterns helps you understand what the tool is addressing and gives you better criteria for evaluating the output.</p>
        <p className="text-slate-700 mb-4">Excessive adverb use in dialogue attribution: AI consistently writes "he said softly," "she replied quietly," "he muttered darkly." Human fanfic writers use attribution adverbs sparingly and rely on the dialogue itself, the context, and occasional beats (action between dialogue lines) to communicate tone. When every third line of dialogue has an -ly adverb, the prose reads as AI.</p>
        <p className="text-slate-700 mb-4">Paragraph-level emotional resolution: AI structures paragraphs so each one introduces a feeling, develops it, and resolves it before the next paragraph begins. Human writers let feelings bleed across paragraphs and chapters. A feeling introduced in the third paragraph of a chapter might not resolve until the eighth, or might carry as an undercurrent through the rest of the fic. AI tidiness makes the emotional structure feel mechanical.</p>
        <p className="text-slate-700 mb-4">Generic internal monologue: AI writes internal thought in a very consistent register "” clear, grammatically complete sentences that summarize what the character is feeling. Human writers write internal monologue as fragments, as interruptions, as contradictions. A character does not think "I realized I was feeling jealous about the way she looked at him." A character thinks "wait. No. That was "” it didn&#39;t matter." The fragmented, self-interrupting quality of real internal monologue is almost entirely absent from AI output.</p>
        <p className="text-slate-700 mb-4">Formulaic scene transitions: AI uses the same set of transitional phrases repeatedly. "As the hours passed." "Later that evening." "It wasn&#39;t until the next morning that." These formulaic transitions are a consistent AI tell. Human writers vary their transitions significantly "” cutting hard to the next scene, using white space to signal time passing, or ending one scene at a charged moment and opening the next in a changed emotional state without explanation.</p>
        <p className="text-slate-700 mb-4">Over-explaining character motivation: AI writing tells the reader why a character does things, clearly and explicitly. "He left the room because he needed space to process what had happened." Human writers let actions speak for themselves or have characters lie to themselves about their motivations, which produces more interesting and authentic psychology. The interpretive work of figuring out why a character acts as they do is part of the pleasure of reading good fanfic, and AI removes it entirely.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Fandom-Specific Terminology and In-Universe Language</h2>
        <p className="text-slate-700 mb-4">Every fandom develops its own specific vocabulary "” not just the proper nouns from canon (character names, place names, magic systems, technology) but the community-specific language that fans use to talk about the canon and about their own creative work. AI-generated fanfic consistently lacks this community-specific language because AI is trained on general text, not on the specific linguistic ecosystem of any particular fandom.</p>
        <p className="text-slate-700 mb-4">In-universe language matters enormously for authenticity. A fic set in a particular canon world should use that world&#39;s vocabulary naturally and correctly "” not just the major proper nouns but the everyday language characters would use for mundane things. Getting this wrong (using modern idioms in a medieval fantasy setting, or using formal language in a canon where characters are deliberately casual) immediately signals to readers that the writer does not have deep familiarity with the source material.</p>
        <p className="text-slate-700 mb-4">Community-specific fandom vocabulary is equally important. Fandom readers are used to seeing certain meta-concepts referenced in author&#39;s notes and in the fic itself "” canon-compliant, canon divergence, missing scene, post-canon, pre-canon, fix-it. They are used to certain trope-specific language that signals exactly what kind of fic they are reading. AI-generated fanfic tends to avoid this specific fandom vocabulary in favor of more general literary language, which paradoxically makes it feel less at home in the community than a fic that wears its trope affiliations openly.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">AO3 Community Standards and What Readers Expect</h2>
        <p className="text-slate-700 mb-4">Archive of Our Own is not just a repository of fanfiction "” it is a community with distinct literary standards, social norms, and expectations about what fanfiction should do as a creative form. AO3 readers are often highly literate and have strong opinions about craft. The kudos, comments, and bookmark culture on AO3 rewards writing that takes genuine creative risks, that has a distinctive authorial voice, and that engages thoughtfully with canonical source material.</p>
        <p className="text-slate-700 mb-4">AO3 readers are also extraordinarily forgiving of imperfection when writing feels genuine. A fic that has some grammatical roughness but has authentic character voice and emotional stakes will get more kudos than a technically polished fic that feels emotionally flat. This is why AI-generated fanfic tends to perform poorly even when it is grammatically correct: AO3 readers are optimizing for emotional authenticity, not technical correctness.</p>
        <p className="text-slate-700 mb-4">The comment culture on AO3 is also worth understanding. Comments on successful fics are substantial "” readers write paragraphs dissecting specific scenes, quoting lines that hit them, asking questions about the characters&#39; motivations. AI-generated fics tend not to attract this kind of engagement because there is nothing in them that provokes the specific kind of emotional reaction that drives detailed commenting. The Fanfiction Rewriter works to produce writing that can generate that reaction.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Wattpad Conventions and Teen/YA Fanfiction</h2>
        <p className="text-slate-700 mb-4">Wattpad has a different literary culture from AO3. Where AO3 skews toward longer, more complex fics with sophisticated tag systems and strong community discussion, Wattpad is built around serialized reading, short chapters, strong cliffhangers, and high emotional engagement per chapter. Wattpad readers often have parasocial relationships with their favorite writers and expect frequent updates and direct author-reader interaction through comments.</p>
        <p className="text-slate-700 mb-4">AI fanfiction on Wattpad fails in platform-specific ways. The chapter structure is wrong "” AI produces chapters that feel like excerpts from a novel rather than episodes in a serial, without the hook-and-cliffhanger rhythm that keeps readers coming back. The author&#39;s note culture on Wattpad (in which writers directly address their readers at the start or end of chapters) is completely absent from AI output. The informal, conversational register that characterizes many successful Wattpad fics is replaced by AI&#39;s default slightly formal literary prose.</p>
        <p className="text-slate-700 mb-4">Wattpad&#39;s algorithm also rewards specific engagement metrics: read-through rate (what percentage of readers who start a chapter finish it), voting, and comments. All three of these metrics depend on writing that creates genuine emotional engagement at the chapter level. AI-generated fanfic tends to have flat chapter-level pacing "” each chapter reaches a kind of equilibrium rather than building to a charged moment that compels readers to continue. The Fanfiction Rewriter addresses this by building toward chapter-ending hooks and increasing the dialogue-to-narration ratio toward Wattpad norms.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How to Use the Fanfiction Rewriter</h2>
        <p className="text-slate-700 mb-4">Using the Fanfiction Rewriter is straightforward. Paste your AI-generated fanfiction text into the input box. Click the Rewrite or Humanize button. The tool processes your text and returns a rewritten version that has been transformed to read as human-written. The process typically takes under fifteen seconds for inputs up to 2,000 words.</p>
        <p className="text-slate-700 mb-4">For best results, provide context in your input. If you are pasting a section that is mid-story, include a brief note at the top about the characters, their current emotional state, and what the scene is doing narratively. The more context the tool has, the more accurately it can calibrate the voice and emotional register of the output.</p>
        <p className="text-slate-700 mb-4">After receiving the output, review it carefully. The Fanfiction Rewriter produces significantly improved output, but every fic has specific character voice requirements, specific ship dynamics, and specific tonal expectations that the writer knows better than any tool. Use the output as a strong draft and edit it with your own knowledge of the characters and fandom. The tool handles the systematic AI patterns; you handle the fandom-specific specificity.</p>
        <p className="text-slate-700 mb-4">For longer fics, process scene by scene or chapter by chapter rather than dumping the entire story into the tool at once. This gives you more control over consistency across sections and makes reviewing the output more manageable. After processing all sections, read the full draft aloud to check for continuity in character voice and pacing rhythm.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Getting Past AI Detection Tools</h2>
        <p className="text-slate-700 mb-4">AI detection tools like GPTZero, Originality.ai, Copyleaks, and Turnitin analyze text using two primary metrics: perplexity (how predictable the word choices are at each position in the text, given preceding context) and burstiness (how much sentence length varies throughout the text). Raw AI output scores high on perplexity predictability and low on burstiness "” the sentences tend to be similar lengths and the word choices tend to be the most statistically probable options.</p>
        <p className="text-slate-700 mb-4">The Fanfiction Rewriter addresses both metrics directly. It introduces word choice variation that reduces perplexity predictability "” not by inserting random unusual words, but by selecting the more idiomatic, contextually specific option rather than the statistically safest one. It also restructures sentence rhythm to increase burstiness "” mixing very short sentences with longer, more complex constructions in patterns that match human writing rather than AI output.</p>
        <p className="text-slate-700 mb-4">Testing shows that AI fanfiction processed through the rewriter typically scores below 30% AI probability on GPTZero and Originality.ai "” compared to 85-95% for raw AI output. Results vary by input length, writing style, and which specific detection tool is used, but the rewriting consistently produces significant reduction in detection scores.</p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Ethical Use of the Fanfiction Rewriter</h2>
        <p className="text-slate-700 mb-4">Using AI assistance for creative writing involves genuine ethical considerations that are worth engaging with honestly. The fanfiction community has strong feelings about AI-generated content, and those feelings are grounded in legitimate concerns about creative labor, community authenticity, and the economics of creative production.</p>
        <p className="text-slate-700 mb-4">The most defensible use of a tool like this is as a drafting assistant. You write the story "” the characters, the emotional beats, the specific scenes you want to explore "” and use AI to generate a rough prose draft that you then rewrite, humanize, and edit into your own voice. This workflow uses AI&#39;s generative speed while keeping the creative decisions with the human writer. The result is genuinely your work: the ideas are yours, the editorial judgment is yours, the fandom-specific voice choices are yours. The AI handled some of the initial prose generation, the same way using autocomplete or a thesaurus assists writing without replacing the writer.</p>
        <p className="text-slate-700 mb-4">What is harder to defend is submitting AI-generated fanfic with no meaningful human creative input "” using AI to generate the premise, the characters&#39; actions, the dialogue, and the emotional beats, then using the rewriter to make it pass detection, and posting it as your creative work. Beyond the platform policy issues, this approach produces writing that lacks the specific fandom engagement that makes fanfic valuable to communities.</p>
        <p className="text-slate-700 mb-4">Transparency about AI assistance, where you are comfortable with it, is worth considering. Some writers in fandom spaces disclose that they used AI as a drafting tool; others keep their writing process private. The relevant ethical question is whether your audience would feel misled if they knew how you wrote the fic "” and whether your answer to that question is something you are comfortable with.</p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What does the Fanfiction Rewriter do?',
    answer: 'The Fanfiction Rewriter takes AI-generated fanfiction text and rewrites it to sound authentically human "” addressing the flat character voice, formulaic scene transitions, over-explained emotions, and statistical smoothness that mark AI output. It is specifically tuned for the conventions of fanfiction communities on AO3 and Wattpad, not just general prose. The tool handles the systematic structural patterns so your editing time can focus on fandom-specific voice work.'
  },
  {
    category: 'General',
    question: 'Is the Fanfiction Rewriter free to use?',
    answer: 'Yes, completely free. There is no account required, no subscription, no daily word limit, and no watermarks on the output. You can process as many fanfiction drafts as you need without cost. The tool is funded by modest display ads that cover hosting and development costs.'
  },
  {
    category: 'General',
    question: 'What kind of fanfiction does this tool work best for?',
    answer: 'The tool works for any fandom "” anime, books, TV shows, movies, games, K-pop RPF, and any other source material. It addresses the universal patterns of AI-generated prose that appear regardless of fandom. It works equally well for shipfics, gen fic, hurt/comfort, slowburn, AUs, and any other fic type or content rating.'
  },
  {
    category: 'How It Works',
    question: 'How does the Fanfiction Rewriter make AI text sound human?',
    answer: 'The tool analyzes incoming text for the statistical signatures of AI writing "” consistent sentence length, predictable word choices, systematic emotional progression, formulaic transitions, and over-explained character motivation "” and rewrites these elements with the variation, fragmentation, and idiomatic specificity that human writers naturally produce. The result is text with higher perplexity variation and burstier sentence structure, which are the key metrics AI detectors measure. Both human readers and automated detection tools respond to these underlying statistical properties.'
  },
  {
    category: 'How It Works',
    question: 'Does the tool understand character voice?',
    answer: 'The tool improves character voice by removing the generic flattening that AI applies to dialogue and internal monologue "” replacing composite-character voice with more specific, idiosyncratic expression. For fandom-specific character voice details (specific canonical catchphrases, speech tics, vocabulary choices), you will want to do a final editorial pass using your own knowledge of the canon. The rewriter gives you much better raw material to work from.'
  },
  {
    category: 'How It Works',
    question: 'Will the rewriter preserve my story plot and details?',
    answer: 'Yes. The rewriter transforms stylistic and statistical properties of the text while preserving semantic content "” character names, plot events, dialogue content, and specific details are maintained. The rewriting changes how things are expressed, not what is being expressed. Always review the output to confirm nothing has shifted in ways that affect your story.'
  },
  {
    category: 'Detection',
    question: 'Will rewritten fanfiction pass AI detection tools like GPTZero?',
    answer: 'Rewritten fanfiction consistently scores significantly lower on AI detection tools. Raw AI output typically scores 85-95% AI probability; output from the Fanfiction Rewriter typically scores below 30% on GPTZero and Originality.ai. Detection scores vary by input length, content, and which specific detector is used, so always verify with the detection tool you are concerned about.'
  },
  {
    category: 'Detection',
    question: 'Will it pass AO3\'s content moderation?',
    answer: 'AO3\'s policy focuses on fully AI-generated works posted as human-written. Using AI as a drafting tool that you then substantially rewrite and edit is a different situation. Humanized output that you have edited with your own voice and fandom knowledge is significantly more defensible than raw AI output. Always add your own editorial layer on top of the rewriter output to ensure the work reflects genuine creative input.'
  },
  {
    category: 'Quality',
    question: 'How much editing will I need to do after using the tool?',
    answer: 'Most outputs need light-to-moderate editing. The tool addresses the structural AI patterns that make writing feel robotic, but fandom-specific character voice, ship dynamics, and in-universe references still benefit from a writer who knows the canon. Treat the output as a strong draft that needs a human editorial pass, not as finished prose ready to post. The more familiar you are with the source material, the more targeted your edits can be.'
  },
  {
    category: 'Quality',
    question: 'Does the rewriter help with slowburn pacing?',
    answer: 'The rewriter improves pacing by breaking AI\'s characteristic over-resolution pattern "” where each scene completely resolves its emotional tension before the next one begins. It introduces the tension-carrying, thread-maintaining structures that slowburn requires. For chapter-by-chapter pacing management across a multi-chapter fic, process each chapter separately to maintain consistency and review the full assembled draft for continuity.'
  },
  {
    category: 'Quality',
    question: 'How does the tool handle dialogue?',
    answer: 'Dialogue is one of the primary areas the rewriter addresses. It reduces the over-reliance on -ly adverbs in dialogue attribution, restructures attribution patterns to be more varied, and adjusts dialogue content away from AI\'s characteristic over-directness toward the kind of layered, subtext-heavy exchanges that characterize good fanfic dialogue. The tool also addresses the beat-action patterns between dialogue lines that human writers use to convey emotion.'
  },
  {
    category: 'Platform',
    question: 'Does it work for Wattpad-specific conventions?',
    answer: 'Yes. The rewriter is aware of Wattpad\'s specific conventions: shorter paragraphs, higher dialogue-to-narration ratio, chapter-ending hooks, and the more informal register that Wattpad readers expect. For Wattpad content specifically, the output will be adjusted toward these platform conventions rather than the longer, more literary style more common on AO3. The tool also addresses the read-through rate factors that affect Wattpad algorithmic promotion.'
  },
  {
    category: 'Platform',
    question: 'Can I use rewritten fanfiction for other fanfiction platforms?',
    answer: 'Yes "” the rewriter produces human-sounding prose that works across all fanfiction platforms: FanFiction.net, Tumblr, personal fic blogs, Discord fic servers, and any other platform where you share fanfiction. The core humanization applies universally; platform-specific stylistic adjustments are something you can apply in your editorial pass.'
  },
  {
    category: 'Workflow',
    question: 'What is the best workflow for using the Fanfiction Rewriter?',
    answer: 'Best practice is: (1) write a detailed outline of your fic with specific character motivations and scene purposes; (2) use AI to draft the prose; (3) run each scene or chapter through the rewriter; (4) edit the output with your own fandom knowledge and character voice; (5) read the full draft aloud to check for consistency; (6) post. The tool is most powerful as the middle step in a human-led creative process.'
  },
  {
    category: 'Workflow',
    question: 'How long should my input be for best results?',
    answer: 'Inputs of 300-2,000 words per processing run produce the best results. Very short inputs (under 100 words) may not provide enough context for the tool to calibrate the register well. Very long inputs (over 3,000 words) can be processed but may benefit from being split into sections for more consistent output across the full text.'
  },
  {
    category: 'Technical',
    question: 'What AI models does this work with?',
    answer: 'The rewriter works on text generated by any AI model "” ChatGPT (all versions), Claude, Gemini, Llama, Mistral, Cohere, and others. It targets the universal statistical patterns shared across all LLM outputs rather than being tuned to any specific model. The common AI tells in fanfiction appear regardless of which model generated the text.'
  },
  {
    category: 'Technical',
    question: 'Is my fanfiction text stored or used for training?',
    answer: 'No. Your text is processed and the output is returned to you; it is not stored on servers, not logged, and not used to train AI models. Privacy is a design principle of the tool, not an afterthought. For writers working with sensitive or highly personal creative content, this means you can process freely without concern about your unpublished work appearing elsewhere.'
  },
  {
    category: 'Ship Dynamics',
    question: 'Does the tool understand ship-specific dynamics?',
    answer: 'The tool improves the handling of ship dynamics by addressing the most common AI failures: over-direct confession scenes, emotionally generic physical awareness, and too-clean emotional resolution. For the specific canonical relationship history and power dynamics of your particular ship, your own editorial knowledge remains essential "” the tool gives you better raw material to work with.'
  },
  {
    category: 'Ship Dynamics',
    question: 'Can the rewriter help with enemies-to-lovers fanfic?',
    answer: 'Yes. Enemies-to-lovers is one of the hardest AO3 tropes for AI to execute well because it requires voice changes that track character development across the arc. The rewriter works to break the flat, undifferentiated voice that AI applies to characters at different stages of their relationship arc and introduce the register shifts that make enemies-to-lovers feel earned rather than merely asserted.'
  },
  {
    category: 'Ethics',
    question: 'Is it ethical to use AI assistance for fanfiction?',
    answer: 'This is a genuine question with real community stakes. Using AI as a drafting tool that you then substantially rewrite, edit, and shape with your own creative judgment is defensible and analogous to using any other writing tool. Using AI to generate all creative content with no meaningful human input and posting it as human work is more ethically complicated, particularly given fandom communities\' deep investments in authentic creative exchange.'
  },
  {
    category: 'Ethics',
    question: 'Should I disclose AI assistance to fandom readers?',
    answer: 'Platform policies vary. AO3 prohibits fully AI-generated works; works with substantial human creative input that used AI as a drafting tool exist in a grayer area. The ethical question is whether your readers would feel misled if they knew your process. Some writers are fully transparent about AI assistance; others keep their writing process private. What the tool does not change is that if you are submitting work to a platform that prohibits AI content, you remain responsible for that choice regardless of detection outcomes.'
  },
  {
    category: 'Comparison',
    question: 'How is this different from basic paraphrasing or synonym-swapping tools?',
    answer: 'Basic paraphrasing tools substitute synonyms and shuffle sentence order without addressing the underlying statistical structure of AI text. Detectors identify AI text primarily through perplexity and burstiness metrics, not vocabulary "” synonym-swapping does not change these metrics. The Fanfiction Rewriter targets the actual statistical patterns that both detectors and human readers respond to, producing a fundamentally different type of text rather than a surface-level variation of the same AI output.'
  },
  {
    category: 'Comparison',
    question: 'How does this compare to just editing AI output myself?',
    answer: 'Manual editing of AI output is always the gold standard, but it is time-intensive. The Fanfiction Rewriter handles the systematic structural issues automatically "” the sentence rhythm, the transition formulas, the over-resolution pattern "” so your manual editing time can focus on fandom-specific voice work, plot details, and the specific character dynamics that only you know. It makes your editing time more valuable by removing the generic problems first.'
  },
  {
    category: 'Advanced',
    question: 'Can I use this for multi-chapter fics?',
    answer: 'Yes, processing chapter by chapter. For long multi-chapter fics, process each chapter individually, review each output, then read the assembled draft for consistency across the full text. Pay particular attention to chapter transitions and to whether character voice remains consistent across chapters processed in separate runs.'
  },
  {
    category: 'Advanced',
    question: 'Does the rewriter help with smut or explicit content?',
    answer: 'The humanization applies equally to all content types. AI-generated explicit content has the same structural tells as AI-generated general content "” and the same emotional flatness that makes it feel unconvincing. The rewriter addresses these patterns regardless of content rating. Platform policies on explicit AI content vary "” check the specific policies of where you are posting.'
  },
];

export const fanfictionRewriterContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
