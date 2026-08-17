import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>AI writing tools</strong> analyze and improve the mechanics of prose: grammar,
        readability, tone, style consistency, and voice. This category collects 45 tools covering five
        core functions across nine models, including{' '}
        <Link href="/ai-grammar-checker">grammar checking</Link>,{' '}
        <Link href="/ai-readability-checker">readability scoring</Link>,{' '}
        <Link href="/ai-tone-analyzer">tone analysis</Link>,{' '}
        <Link href="/ai-style-analyzer">style analysis</Link>, and{' '}
        <Link href="/ai-passive-voice-fixer">passive voice correction</Link>.
      </p>
      <p>
        These tools measure different things, and knowing which one answers your question saves time. A
        grammar checker tells you whether a sentence is correct. A readability checker tells you whether
        your audience will follow it. A tone analyzer tells you how it will land emotionally. A style
        analyzer tells you whether your choices are consistent across a document. They are complementary,
        and a passage can pass one while failing another badly.
      </p>
      <p>
        None of these tools is specific to AI-generated text, despite the naming. Grammar, readability,
        tone, consistency, and passive voice are properties of any prose, so they apply equally to a draft
        you wrote entirely yourself. What the AI-specific framing reflects is that generated text tends to
        fail in characteristic ways, particularly uniform sentence rhythm and reflexive hedging, which
        these tools surface efficiently.
      </p>
      <p>
        Model-specific versions exist for{' '}
        <Link href="/chatgpt-grammar-checker">ChatGPT</Link>,{' '}
        <Link href="/claude-grammar-checker">Claude</Link>,{' '}
        <Link href="/gemini-grammar-checker">Gemini</Link>, and the other major models, tuned for the
        characteristic weaknesses each produces. The general versions handle text from any source,
        including text you wrote entirely yourself.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Grammar Checkers: What They Catch and What They Miss</h2>
      <p>
        The <Link href="/ai-grammar-checker">AI grammar checker</Link> identifies errors in syntax,
        agreement, punctuation, and usage. Modern checkers catch the mechanical categories reliably:
        subject-verb agreement, tense consistency, pronoun reference, comma splices, misplaced modifiers,
        and the confusable pairs that spellcheck cannot distinguish because both spellings are valid
        words.
      </p>
      <p>
        That last category is worth attention because it is where unchecked drafts most often embarrass
        their authors. Their, there, and they&apos;re. Its and it&apos;s. Your and you&apos;re. Affect and
        effect. Complement and compliment. Principal and principle. A spellchecker passes all of these
        because every variant is a real word; only a grammar checker that parses the sentence can tell
        which one belongs.
      </p>
      <p>
        What grammar checkers reliably miss is meaning. A sentence can be grammatically flawless and
        wrong, unclear, or say the opposite of what you intended. Checkers also struggle with deliberate
        stylistic choices, flagging intentional fragments and single-sentence paragraphs as errors when
        they are doing exactly what a skilled writer wants. Treat suggestions as prompts to reconsider,
        not instructions to comply with. Accepting every suggestion produces flatter prose than rejecting
        all of them.
      </p>
      <p>
        Grammar checking is also weakest on technical and domain-specific writing, where field vocabulary,
        conventional constructions, and specialized punctuation are misread as errors. In heavily
        technical drafts a high proportion of flags are false positives, and getting into the habit of
        clicking accept on everything will damage the text.
      </p>

      <h2>Readability Checkers: Writing for Your Actual Audience</h2>
      <p>
        The <Link href="/ai-readability-checker">AI readability checker</Link> scores how difficult text is
        to read, using established formulas that estimate difficulty from sentence length and word
        complexity.
      </p>
      <p>
        <strong>Flesch Reading Ease</strong> produces a score from 0 to 100, where higher means easier. It
        weights average sentence length and average syllables per word. Scores of 60 to 70 correspond
        roughly to plain English suitable for a general audience; below 30 indicates text most readers
        will find heavy going. <strong>Flesch-Kincaid Grade Level</strong> converts the same inputs into a
        US school grade, so a score of 8 suggests an eighth-grade reading level. The{' '}
        <strong>Gunning Fog index</strong> weights the proportion of words with three or more syllables.
        The <strong>SMOG index</strong> is widely used in health communication, where comprehension
        failures carry real consequences.
      </p>
      <p>
        The critical thing to understand about all of these formulas is that they measure only sentence
        length and word length. They do not measure whether your argument is logical, whether your
        organization makes sense, whether your vocabulary suits the audience, or whether the text is
        actually comprehensible. This is why you can game them trivially, and why gaming them is
        counterproductive.
      </p>
      <p>
        Chopping a well-constructed sentence into fragments improves the score and often damages
        comprehension, because the connective tissue that showed how ideas related has been removed.
        Replacing a precise three-syllable technical term with a vague two-syllable substitute improves
        the score and makes the text less accurate. A readability score is a rough signal worth checking,
        not a target worth optimizing.
      </p>
      <p>
        Reasonable targets vary by context. General web content aims around grade 8 to 10. Journalism
        typically lands near grade 9. Technical documentation for practitioners can sit higher without
        problem, because the audience shares the vocabulary. Health information for patients should aim
        lower, often grade 6, because the consequences of misunderstanding are severe and stress reduces
        reading capacity. Academic writing routinely scores as difficult and is appropriate for its
        audience.
      </p>

      <h2>Tone Analyzers: How Writing Lands</h2>
      <p>
        The <Link href="/ai-tone-analyzer">AI tone analyzer</Link> evaluates the emotional register and
        attitude a piece conveys: formal or casual, warm or distant, confident or tentative, urgent or
        measured.
      </p>
      <p>
        Tone problems are common precisely because tone is hard to perceive in your own writing. You know
        what you meant, so you read your intent into the text rather than reading what the text conveys to
        someone without that context. This is why an email that felt neutral to the sender lands as curt,
        or why marketing copy meant to sound confident reads as arrogant.
      </p>
      <p>
        Written communication strips away the paralinguistic cues that carry most emotional information in
        speech: intonation, pace, facial expression, and gesture. What remains is word choice, sentence
        length, punctuation, and structure, which have to do all the work. Short sentences and imperatives
        read as brusque even when no curtness was intended. Extensive hedging reads as uncertain even when
        the writer is confident. Exclamation marks that feel enthusiastic to the sender frequently read as
        forced.
      </p>
      <p>
        Register mismatch is the most consequential tone failure: casual phrasing in a formal context
        reads as unprofessional, and formal phrasing in a casual context reads as cold or evasive. The
        same message can succeed or fail entirely on this dimension, which is why tone-checking outbound
        communication is worth the minute it takes.
      </p>

      <h2>Style Analyzers: Consistency Across a Document</h2>
      <p>
        The <Link href="/ai-style-analyzer">AI style analyzer</Link> examines the choices that make writing
        feel unified, and flags where a document contradicts itself.
      </p>
      <p>
        Consistency issues accumulate invisibly, particularly in documents written over time, assembled
        from multiple sources, or produced collaboratively. Spelling conventions drift between American
        and British forms. Serial commas appear in some lists and not others. Numbers are spelled out in
        one paragraph and written as digits in the next. Headings switch between sentence case and title
        case. Terminology varies between near-synonyms for the same concept, leaving readers unsure
        whether a distinction is intended.
      </p>
      <p>
        None of these is an error in isolation. Both spellings are correct; both comma conventions are
        defensible. The problem is inconsistency, which readers register as carelessness even when they
        cannot articulate what they noticed. This matters most in documents with multiple authors, where
        each contributor brings their own defaults.
      </p>
      <p>
        Style analysis also surfaces habits that weaken prose: over-reliance on a favourite construction,
        sentences that begin the same way repeatedly, adverb density, and nominalization, where verbs are
        converted into abstract nouns. &quot;We made a decision regarding the implementation&quot; is
        weaker than &quot;we decided to implement,&quot; and heavy nominalization is one of the most
        reliable markers of bureaucratic prose.
      </p>

      <h2>Passive Voice: When to Fix It and When Not To</h2>
      <p>
        The <Link href="/ai-passive-voice-fixer">AI passive voice fixer</Link> identifies passive
        constructions and converts them to active voice where that improves the sentence.
      </p>
      <p>
        Passive voice places the recipient of an action in the subject position: &quot;the report was
        written by the committee&quot; rather than &quot;the committee wrote the report.&quot; The active
        version is shorter, clearer about responsibility, and usually stronger.
      </p>
      <p>
        However, the common advice to eliminate passive voice entirely is wrong, and following it
        mechanically produces worse writing. Passive voice is the correct choice in several situations.
      </p>
      <p>
        <strong>When the actor is unknown or irrelevant.</strong> &quot;The building was constructed in
        1890&quot; is better than naming a construction firm nobody cares about.
      </p>
      <p>
        <strong>When the recipient is the topic.</strong> If a paragraph is about a policy, &quot;the
        policy was adopted in March&quot; keeps the topic in subject position and maintains focus better
        than switching to whoever adopted it.
      </p>
      <p>
        <strong>In scientific methods sections.</strong> &quot;The samples were incubated at 37
        degrees&quot; is conventional because the procedure matters and the identity of the person
        performing it does not. This is an established disciplinary norm, not a stylistic failing.
      </p>
      <p>
        <strong>When you deliberately want to de-emphasize the actor.</strong> This is worth naming
        honestly, since it is also how passive voice gets abused. &quot;Mistakes were made&quot; is
        grammatically fine and rhetorically evasive, and recognizing that move matters as much for reading
        critically as for writing well.
      </p>
      <p>
        A useful heuristic: if you can append &quot;by zombies&quot; to a verb phrase and it still parses,
        the construction is passive. Then ask whether naming the actor would improve the sentence. Often
        it does; sometimes it does not.
      </p>

      <h2>Editing in Passes</h2>
      <p>
        These tools work best applied in a deliberate order, because fixing sentences inside a paragraph
        you later delete is wasted effort.
      </p>
      <p>
        <strong>First pass: structure.</strong> Is the argument in the right order? Does each section earn
        its place? No tool in this category helps here; this is reading with distance and asking whether
        the shape works.
      </p>
      <p>
        <strong>Second pass: paragraphs.</strong> Does each make one point? Do transitions carry the
        reader between them? Readability scoring starts being useful here, since it flags paragraphs where
        sentence complexity has run away.
      </p>
      <p>
        <strong>Third pass: sentences.</strong> Now apply the passive voice fixer, cut nominalizations,
        vary sentence length, and remove filler. This is where the largest gain in prose quality happens.
      </p>
      <p>
        <strong>Fourth pass: consistency.</strong> Run the style analyzer to catch spelling conventions,
        terminology, capitalization, and number formatting.
      </p>
      <p>
        <strong>Fifth pass: correctness.</strong> Grammar checking last, because it operates at sentence
        level and there is no point correcting text that has not settled.
      </p>
      <p>
        <strong>Final pass: cleanup.</strong> Remove invisible characters and normalize spacing before
        publishing, using the <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>. Text can be
        perfectly written and still paste badly.
      </p>

      <h2>Writing Habits That Weaken Prose</h2>
      <p>
        A diagnostic list of the patterns that most reliably make writing worse, all of which these tools
        help surface.
      </p>
      <p>
        <strong>Filler openings.</strong> &quot;It is important to note that,&quot; &quot;there
        are,&quot; and &quot;this is something that&quot; delay the sentence without adding meaning.
        Deleting them usually improves the sentence immediately.
      </p>
      <p>
        <strong>Nominalization.</strong> Turning verbs into nouns adds words and removes energy.
        &quot;Conduct an investigation&quot; is weaker than &quot;investigate.&quot;
      </p>
      <p>
        <strong>Adverb dependence.</strong> Adverbs propping up weak verbs signal that a stronger verb
        exists. &quot;Walked slowly&quot; against &quot;ambled&quot; is the standard example.
      </p>
      <p>
        <strong>Uniform sentence length.</strong> Prose where every sentence runs twenty words becomes
        monotonous regardless of quality. Variation creates emphasis.
      </p>
      <p>
        <strong>Buried subjects.</strong> Long introductory clauses before the sentence reveals what it is
        about force the reader to hold information without a frame.
      </p>
      <p>
        <strong>Vague quantifiers.</strong> Many, several, various, and significant assert less than they
        appear to. A number is stronger, and if you do not have one, saying so is more honest.
      </p>

      <h2>How Format Changes the Rules</h2>
      <p>
        The same advice does not apply everywhere. What counts as good writing depends on how the text
        will be read, and applying web conventions to a report or report conventions to a landing page
        produces predictable failures.
      </p>
      <h3>Writing for the Web</h3>
      <p>
        People scan web pages before they read them, so structure has to survive scanning. Short
        paragraphs, informative subheadings, and front-loaded sentences all serve that behaviour. The most
        important information belongs at the start of a paragraph rather than built toward, because a
        reader skimming first lines needs each one to carry meaning. Long unbroken blocks are skipped
        regardless of quality.
      </p>
      <h3>Writing for Print and Long Documents</h3>
      <p>
        Sustained reading tolerates and rewards longer construction. A report read start to finish can
        develop an argument across paragraphs, use subordinate clauses to show relationships, and assume
        the reader retains what came before. Chopping this into web-style fragments removes the connective
        tissue and makes the argument harder to follow, not easier.
      </p>
      <h3>Writing for Email</h3>
      <p>
        Email is read fast, often on a phone, frequently while doing something else. The request or key
        information belongs in the first two lines, since anything below the fold may not be read. Length
        correlates strongly with delay: long emails get postponed rather than answered. Tone matters more
        here than almost anywhere, because there is no context to soften a blunt sentence.
      </p>
      <h3>Writing to Be Spoken</h3>
      <p>
        Scripts, presentations, and podcast copy follow different rules entirely. Sentences must be
        speakable in one breath. Subordinate clauses that read fine become impossible to follow aloud,
        because a listener cannot re-read. Repetition that looks redundant on the page is necessary in
        speech, since the audience has no way to look back. Reading a draft aloud is the only reliable
        test.
      </p>

      <h2>Punctuation That Changes Meaning</h2>
      <p>
        Most punctuation questions are conventions where either choice is defensible. A few are not,
        because the mark changes what the sentence says.
      </p>
      <p>
        <strong>The comma splice</strong> joins two independent clauses with only a comma, which is the
        most common punctuation error in otherwise competent writing. The fixes are a full stop, a
        semicolon, or a coordinating conjunction. A semicolon is right when the two clauses are closely
        related and you want to signal that relationship; a full stop is right when they are simply
        sequential.
      </p>
      <p>
        <strong>Restrictive and non-restrictive clauses</strong> are separated by whether commas appear.
        &quot;The employees who missed the deadline were reprimanded&quot; means only that subset was
        reprimanded. &quot;The employees, who missed the deadline, were reprimanded&quot; means all of them
        missed it and all were reprimanded. Same words, different fact, and only the commas distinguish
        them.
      </p>
      <p>
        <strong>The apostrophe in possessives</strong> trips people most with plurals and with its. The
        possessive of it has no apostrophe; it&apos;s is always a contraction of it is or it has. Plural
        possessives place the apostrophe after the s, so the policies belonging to several companies are
        the companies&apos; policies.
      </p>
      <p>
        <strong>Hyphens in compound modifiers</strong> resolve genuine ambiguity. A small-business owner
        owns a small business; a small business owner is a short person who owns a business. The hyphen is
        doing real work, and omitting it in the first case produces a sentence that says something else.
      </p>
      <p>
        <strong>Colons and semicolons</strong> are frequently confused. A colon introduces: it says what
        follows explains or lists what preceded. A semicolon joins two complete thoughts of equal weight.
        Using a semicolon where a colon belongs weakens the introduction; using a colon where a semicolon
        belongs implies an explanation that is not there.
      </p>

      <h2>Word Choice and Precision</h2>
      <p>
        Vocabulary is where writing most often loses force, and the failures are systematic rather than
        random.
      </p>
      <p>
        <strong>Verbs carry sentences.</strong> The single most effective vocabulary edit is replacing a
        weak verb plus modifier with a precise verb. Moved quickly becomes darted or hurried. Looked
        carefully becomes examined or scrutinized. The precise verb is shorter and more vivid, and it
        removes the adverb that was compensating for imprecision.
      </p>
      <p>
        <strong>Abstraction distances the reader.</strong> Concrete nouns anchor writing in something the
        reader can picture. Utilize a solution asks the reader to imagine nothing; replace the broken
        valve gives them an image. Abstract vocabulary is sometimes necessary and often habitual, and the
        habitual cases are worth hunting.
      </p>
      <p>
        <strong>Intensifiers usually weaken.</strong> Very, really, quite, extremely, and highly signal
        that the underlying word was not strong enough. Very important suggests important was
        insufficient; critical or decisive does the work directly. Cutting intensifiers almost always
        tightens prose.
      </p>
      <p>
        <strong>Jargon has a legitimate use and an illegitimate one.</strong> Within a field, technical
        vocabulary is precise and efficient; replacing it with plain language loses information. Outside
        that field, the same vocabulary excludes readers and often disguises thin content. The test is
        whether your actual audience shares the term, not whether the term sounds professional.
      </p>
      <p>
        <strong>Clichés are invisible to the writer.</strong> Phrases that arrive fully formed, at the end
        of the day, think outside the box, low-hanging fruit, take the reader past the sentence without
        engaging them, precisely because they are so familiar. They also signal that the writer reached
        for a stock phrase instead of describing the specific situation. The reliable test is whether the
        phrase would survive being replaced with a concrete description of what actually happened; if the
        specific version is more informative, the cliché was doing no work.
      </p>

      <h2>Finding and Keeping a Voice</h2>
      <p>
        Voice is the quality that makes writing recognizable as coming from a particular person or
        organization. It is the hardest thing for these tools to measure and the thing most worth
        protecting.
      </p>
      <p>
        Voice emerges from consistent choices rather than from any single feature: characteristic sentence
        rhythm, level of formality, willingness to use humour, how directly claims are made, how much the
        writer appears in the text. Two writers can describe the same facts accurately and produce
        completely different reading experiences.
      </p>
      <p>
        The risk with heavy tool use is homogenization. Grammar checkers push toward conventional
        construction. Readability tools push toward shorter sentences. Accepting every suggestion produces
        prose that is correct, accessible, and indistinguishable from everyone else who accepted every
        suggestion. This is the same flattening that makes AI output recognizable, arrived at by a
        different route.
      </p>
      <p>
        The practical defence is deciding in advance which features are yours and holding them. If long
        sentences are part of how you think, a readability warning is information rather than an
        instruction. If you use fragments deliberately, a grammar flag on a fragment is a false positive.
        Tools should catch mistakes you did not intend, not overwrite choices you did.
      </p>
      <p>
        For organizations, this is what a style guide is for: recording the decisions that constitute the
        house voice so contributors converge on it deliberately rather than each drifting toward their own
        defaults or toward whatever a checker suggests.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For rewriting AI drafts to sound naturally human, see the{' '}
        <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link>. For essays, theses, and
        research papers, see the <Link href="/ai-tools/academic-tools">academic tools</Link>. For resumes,
        cover letters, and business communication, see the{' '}
        <Link href="/ai-tools/professional-tools">professional tools</Link>. For removing hidden characters
        before publishing, see the <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>. The
        full <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is the difference between a grammar checker and a style analyzer?',
    answer:
      'A grammar checker identifies errors: things that are objectively incorrect, such as subject-verb disagreement or a comma splice. A style analyzer examines choices that are not errors but should be consistent, such as spelling conventions, serial commas, number formatting, and terminology. Both spellings of a word can be correct while using both in one document is still a problem.',
  },
  {
    category: 'General',
    question: 'Are these writing tools free?',
    answer:
      'Yes. All 45 tools in this category are free with no account required and no usage limits.',
  },
  {
    category: 'General',
    question: 'Do these tools work on text I wrote myself?',
    answer:
      'Yes. Nothing about them is specific to AI-generated text. Grammar, readability, tone, style consistency, and passive voice apply equally to writing produced entirely by a person. The model-specific versions are tuned for characteristic AI weaknesses, but the general versions work on any text.',
  },
  {
    category: 'General',
    question: 'Which tool should I use first?',
    answer:
      'None of them, initially. Structure comes first, and that requires reading with distance rather than running a tool. Once the shape is right, work down in order: readability for paragraphs, passive voice and sentence-level editing, style analysis for consistency, then grammar checking last.',
  },
  {
    category: 'Usage',
    question: 'What Flesch Reading Ease score should I aim for?',
    answer:
      'It depends on your audience. General web content typically targets 60 to 70, which corresponds to plain English. Journalism lands near grade 9. Technical documentation for practitioners can score harder without problem since the audience shares the vocabulary. Health information for patients should aim easier, often grade 6, because misunderstanding carries real consequences.',
  },
  {
    category: 'Usage',
    question: 'Can I game a readability score?',
    answer:
      'Easily, and doing so is counterproductive. These formulas measure only sentence length and word length. Chopping a well-built sentence into fragments improves the score while removing the connective tissue that showed how ideas relate. Substituting a vague short word for a precise long one improves the score and makes the text less accurate.',
  },
  {
    category: 'Usage',
    question: 'Should I always fix passive voice?',
    answer:
      'No. Passive voice is correct when the actor is unknown or irrelevant, when the recipient is the topic of the paragraph, and in scientific methods sections where the procedure matters more than who performed it. Eliminating it mechanically produces worse writing. Fix it when naming the actor would make the sentence clearer.',
  },
  {
    category: 'Usage',
    question: 'How do I tell if a sentence is passive?',
    answer:
      'A quick test: if you can append the phrase by zombies after the verb and the sentence still parses, it is passive. The report was written by zombies works, so that sentence is passive. Then ask whether naming the real actor would improve it, which it often but not always does.',
  },
  {
    category: 'Usage',
    question: 'Why does my email sound rude when I did not intend it to?',
    answer:
      'Written text strips away intonation, pace, and facial expression, which carry most emotional information in speech. Short sentences and imperatives that feel efficient to you read as brusque without those cues. Adding a brief opening line, softening imperatives into requests, and explaining reasoning usually fixes it.',
  },
  {
    category: 'Usage',
    question: 'Should I accept every grammar checker suggestion?',
    answer:
      'No. Checkers flag intentional fragments, deliberate single-sentence paragraphs, and domain-specific constructions as errors when those choices are doing exactly what you want. In technical writing a high proportion of flags are false positives. Treat each suggestion as a prompt to reconsider rather than an instruction.',
  },
  {
    category: 'Technical',
    question: 'How does Flesch Reading Ease actually work?',
    answer:
      'It combines average sentence length and average syllables per word into a score from 0 to 100, where higher is easier. It measures nothing else: not logic, not organization, not whether your vocabulary suits the audience, not whether the text is actually comprehensible. That narrowness is why it is a rough signal rather than a quality measure.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between Flesch-Kincaid, Gunning Fog, and SMOG?',
    answer:
      'They weight the same underlying inputs differently. Flesch-Kincaid converts sentence and syllable length into a US school grade level. Gunning Fog weights the proportion of words with three or more syllables. SMOG also focuses on polysyllabic words and is widely used in health communication, where comprehension failures carry serious consequences.',
  },
  {
    category: 'Technical',
    question: 'What is nominalization and why does it weaken writing?',
    answer:
      'Nominalization converts a verb into an abstract noun, so decide becomes make a decision and investigate becomes conduct an investigation. It adds words, removes the energy of the verb, and often obscures who did what. Heavy nominalization is one of the most reliable markers of bureaucratic prose.',
  },
  {
    category: 'Technical',
    question: 'Which confusable word pairs do spellcheckers miss?',
    answer:
      'Any pair where both forms are real words: their, there, and they are; its and it is; your and you are; affect and effect; complement and compliment; principal and principle. A spellchecker passes all of these because every variant exists in the dictionary. Only a checker that parses the sentence can tell which belongs.',
  },
  {
    category: 'Detection and Limits',
    question: 'What do grammar checkers reliably miss?',
    answer:
      'Meaning. A sentence can be grammatically flawless while being wrong, unclear, or the opposite of what you intended. Checkers also miss logical gaps, unsupported claims, poor organization, and inappropriate register. They verify the machinery of the sentence, not whether the sentence is worth making.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why does my technical writing get so many false grammar flags?',
    answer:
      'Because checkers are trained predominantly on general prose. Field vocabulary, conventional domain constructions, and specialized punctuation all read as anomalies. In heavily technical drafts a large share of flags are false positives, so accepting suggestions uncritically will actively damage the text.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can a readability score tell me if my writing is good?',
    answer:
      'No. It measures sentence length and word length, nothing more. Well-organized, logically sound writing can score as difficult, and incoherent writing can score as easy. Use it to catch paragraphs where complexity has run away, not as a verdict on quality.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my document mix American and British spelling?',
    answer:
      'Usually because it was assembled from multiple sources or written over a long period, sometimes by different people. Neither convention is wrong, but mixing them reads as carelessness. A style analyzer catches the drift, and picking one convention and applying it consistently is the fix.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Should I use the serial comma or not?',
    answer:
      'Either is defensible; consistency is what matters. The serial comma prevents genuine ambiguity in some lists, which is why most style guides in American publishing require it. British publishing more often omits it. Choose one and apply it throughout rather than switching between them within a document.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my text stored when I use these tools?',
    answer:
      'Your text is not retained for training or shared, and it is not stored after your session. For material that must never leave your machine, the tools in the AI cleanup category run entirely client-side with no network transmission at all.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'My writing is grammatically correct but still reads badly. Why?',
    answer:
      'Grammar is the floor, not the ceiling. Common causes are uniform sentence length producing monotony, nominalization draining energy from verbs, filler openings delaying the point, and vague quantifiers where specifics belong. The style analyzer and readability checker surface these; the grammar checker will not.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between a writing tool and an AI humanizer?',
    answer:
      'Writing tools analyze and correct mechanics: grammar, readability, tone, consistency, passive voice. A humanizer rewrites text so it reads as human-written rather than machine-generated, targeting rhythm variation, specificity, and reduced hedging. Use writing tools to fix craft problems and a humanizer when text reads mechanically.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Do I need the model-specific version of these tools?',
    answer:
      'Usually not. The general grammar checker, readability checker, tone analyzer, style analyzer, and passive voice fixer all work on text from any source. The model-specific versions are tuned for characteristic weaknesses of particular models and may catch slightly more if you consistently work with one.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What order should I edit in?',
    answer:
      'Largest to smallest. Structure first, then paragraph logic, then sentences, then consistency, then grammar, then a cleanup pass for hidden characters. Editing sentences inside a paragraph you later delete is wasted work, which is why order matters more than most people expect.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I make my sentences less monotonous?',
    answer:
      'Mark the length of each sentence in a paragraph. If they cluster around a similar count, deliberately break some apart and combine others, and place a very short sentence after a long one for emphasis. This single change does more for the feel of a passage than almost any other edit.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I match tone to a specific audience?',
    answer:
      'Identify the register first: how formal, how warm, how direct. Then check the specific carriers of tone, which are word choice, sentence length, punctuation, and how directly you make requests. Register mismatch is the most consequential tone failure, since casual phrasing in a formal context reads as unprofessional and formal phrasing in a casual one reads as cold.',
  },
  {
    category: 'Technical',
    question: 'When should I use a colon instead of a semicolon?',
    answer:
      'A colon introduces: it signals that what follows explains, expands, or lists what came before. A semicolon joins two complete thoughts of roughly equal weight without subordinating either. Using a semicolon where a colon belongs weakens the introduction, and using a colon where a semicolon belongs implies an explanatory relationship that is not actually there.',
  },
  {
    category: 'Usage',
    question: 'What is the fastest way to strengthen weak sentences?',
    answer:
      'Replace weak verb plus adverb combinations with a precise verb. Moved quickly becomes darted; looked carefully becomes examined. The precise verb is shorter, more vivid, and removes the adverb that was compensating for imprecision. Cutting intensifiers such as very, really, and extremely has a similar effect, since they usually signal the underlying word was not strong enough.',
  },
  {
    category: 'Technical',
    question: 'What is a comma splice and how do I fix it?',
    answer:
      'A comma splice joins two independent clauses with only a comma, and it is the most common punctuation error in otherwise competent writing. There are three fixes: replace the comma with a full stop, replace it with a semicolon if the clauses are closely related, or add a coordinating conjunction such as and, but, or so.',
  },
  {
    category: 'Technical',
    question: 'When do commas around a clause change the meaning?',
    answer:
      'With restrictive versus non-restrictive clauses. The employees who missed the deadline were reprimanded means only that subset was reprimanded. The employees, who missed the deadline, were reprimanded means all of them missed it and all were reprimanded. Identical words, different fact, distinguished only by the commas.',
  },
  {
    category: 'Usage',
    question: 'Does good writing advice change depending on the format?',
    answer:
      'Substantially. Web readers scan, so short paragraphs and front-loaded sentences work. Print and long reports reward sustained construction that develops an argument across paragraphs. Email needs the key point in the first two lines. Text written to be spoken needs sentences speakable in one breath, since listeners cannot re-read.',
  },
  {
    category: 'Usage',
    question: 'How do I stop editing tools from flattening my voice?',
    answer:
      'Decide in advance which features are deliberate and hold them. If long sentences are part of how you think, a readability warning is information rather than an instruction. If you use fragments intentionally, a grammar flag on one is a false positive. Accepting every suggestion produces prose that is correct and indistinguishable from everyone else who did the same.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I keep style consistent across a multi-author document?',
    answer:
      'Agree the conventions up front, spelling variant, serial comma, number formatting, heading capitalization, and preferred terminology for key concepts, then run a style analyzer over the assembled draft. Contributors bring their own defaults, so inconsistency in collaborative documents is the norm rather than the exception and needs a deliberate reconciliation pass.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
