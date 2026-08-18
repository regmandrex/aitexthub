import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>AI academic tools</strong> help students, researchers, and academic writers check,
        strengthen, and refine scholarly work. This category covers essay checking,
        thesis validation, research paper review, assignment compliance, essay rewriting, and academic
        humanizing, with dedicated versions for output from{' '}
        <Link href="/chatgpt-essay-checker">ChatGPT</Link>,{' '}
        <Link href="/claude-essay-checker">Claude</Link>,{' '}
        <Link href="/gemini-essay-checker">Gemini</Link>,{' '}
        <Link href="/llama-essay-checker">LLaMA</Link>,{' '}
        <Link href="/grok-essay-checker">Grok</Link>,{' '}
        <Link href="/perplexity-essay-checker">Perplexity</Link>,{' '}
        <Link href="/deepseek-essay-checker">DeepSeek</Link>, and{' '}
        <Link href="/mistral-essay-checker">Mistral</Link>.
      </p>
      <p>
        Academic writing is judged by standards that general writing tools do not measure. A grammar
        checker will not tell you that your thesis statement is descriptive rather than arguable, that
        your evidence does not actually support the claim it follows, or that your literature review
        summarizes sources without synthesizing them. These are the failures that cost marks, and they
        are structural rather than surface-level.
      </p>
      <p>
        A necessary word on academic integrity before anything else. These tools are built for checking
        and improving your own work. If your institution restricts AI assistance, those rules apply
        regardless of what any tool can do, and this page does not advise you on evading them. Policies
        differ by university and often by department, so the handbook governing your specific programme is
        the one that matters rather than any general guidance you find online. What follows is written for
        people who want their scholarly writing to be genuinely stronger, and the advice holds whether or
        not AI was involved in producing the draft.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Essay Checkers: What They Actually Evaluate</h2>
      <p>
        The <Link href="/ai-essay-checker">AI essay checker</Link> examines an essay against the criteria
        academic markers actually apply, which differ substantially from the criteria a general writing
        tool measures.
      </p>
      <p>
        <strong>Argument structure</strong> is the first and most important. An academic essay advances a
        claim and supports it. A weak essay describes a topic instead, moving through subtopics without
        ever asserting something a reader could disagree with. This failure is invisible to grammar
        checking because every sentence can be flawless while the whole says nothing arguable.
      </p>
      <p>
        <strong>Paragraph coherence</strong> matters next. Each body paragraph should make one point,
        support it, and connect back to the central argument. The common failure is the paragraph that
        introduces evidence and then simply stops, leaving the reader to infer why it was included. The
        analytical move, explaining what the evidence demonstrates and why it matters to the argument, is
        the part students most often omit.
      </p>
      <p>
        <strong>Evidence integration</strong> is where quotations either work or sit inert. A quotation
        dropped into a paragraph without introduction or interpretation is a dropped quote, and it reads
        as padding. Strong integration frames the source, presents the material, and then interprets it.
      </p>
      <p>
        <strong>Academic register</strong> covers the conventions of scholarly prose: hedging claims
        appropriately, avoiding contractions and colloquialism, maintaining consistent tense, and using
        the disciplinary vocabulary precisely. Register that drifts toward the conversational undermines
        credibility even when the argument is sound.
      </p>
      <p>
        Model-specific checkers exist because different models produce different characteristic
        weaknesses. The <Link href="/chatgpt-essay-checker">ChatGPT essay checker</Link>,{' '}
        <Link href="/claude-essay-checker">Claude essay checker</Link>, and{' '}
        <Link href="/gemini-essay-checker">Gemini essay checker</Link> are tuned accordingly, though the
        general <Link href="/ai-essay-checker">AI essay checker</Link> handles any source.
      </p>

      <h2>Thesis Checkers: The Single Highest-Leverage Fix</h2>
      <p>
        The <Link href="/ai-thesis-checker">AI thesis checker</Link> evaluates thesis statements, and this
        is the highest-leverage tool in the category, because a weak thesis guarantees a weak essay no
        matter how well the rest is executed.
      </p>
      <p>
        A strong thesis has four properties. It is <strong>arguable</strong>, meaning a reasonable person
        could disagree. It is <strong>specific</strong>, naming what is being claimed rather than
        gesturing at a topic area. It is <strong>supportable</strong> within the scope and length
        available. And it is <strong>significant</strong>, answering the question of why the claim
        matters.
      </p>
      <p>
        The most common failure is the descriptive thesis. Consider: &quot;This essay examines the causes
        of the French Revolution.&quot; Nobody can disagree with that, because it asserts nothing; it
        announces a subject. Compare: &quot;Fiscal crisis, not Enlightenment ideology, was the decisive
        trigger of the French Revolution, and the ideological account has been retrospectively
        overstated.&quot; That is arguable, specific, and worth defending.
      </p>
      <p>
        The second common failure is the overreaching thesis, a claim so broad no essay could support it.
        &quot;Social media has fundamentally changed human society&quot; cannot be defended in three
        thousand words. Narrowing scope makes a thesis both more defensible and more interesting.
      </p>
      <p>
        A useful test: if you cannot state the counterargument to your thesis in one sentence, it probably
        is not arguable yet.
      </p>

      <h2>Research Paper Checkers</h2>
      <p>
        The <Link href="/ai-research-paper-checker">AI research paper checker</Link> applies to
        longer-form scholarly work with formal structural requirements, typically abstract, introduction,
        literature review, methodology, results, discussion, and conclusion.
      </p>
      <p>
        <strong>Literature review synthesis</strong> is the most frequent weakness. A weak review is an
        annotated list: this author found X, that author found Y, a third found Z. A strong review
        organizes by theme or debate, identifies where the field agrees and disagrees, and locates a gap
        the present work addresses. The distinguishing move is grouping sources into a conversation rather
        than a sequence.
      </p>
      <p>
        <strong>Methodological transparency</strong> means describing procedure with enough precision that
        another researcher could replicate it, and stating limitations honestly rather than burying them.
        A paper that acknowledges its constraints is more credible than one that overclaims.
      </p>
      <p>
        <strong>Claim calibration</strong> is where papers most often overreach. Correlational data does
        not support causal claims. A small sample does not support population-level generalization.
        Matching the strength of a claim to the strength of the evidence is a hallmark of serious work.
      </p>
      <p>
        A specific and serious caution when AI has been involved in drafting: <strong>hallucinated
        citations</strong>. Language models fabricate references that look entirely plausible, with real
        author names, real journal titles, realistic volume and page numbers, and sometimes valid-looking
        DOIs, for papers that do not exist. This has ended academic careers and triggered retractions.
        Verify every single reference against the actual source database. Never cite a work you have not
        personally located.
      </p>

      <h2>Assignment Checkers: Compliance Before Quality</h2>
      <p>
        The <Link href="/ai-assignment-checker">AI assignment checker</Link> addresses something quality
        checking misses entirely: whether the submission satisfies the brief. Strong work that answers
        the wrong question scores badly, and this is a preventable loss.
      </p>
      <p>
        Compliance checking covers whether every part of a multi-part question is addressed, whether the
        word count falls inside the permitted range, whether the required citation style is used
        consistently, whether formatting requirements are met, and whether the specific instruction verb
        has been honoured.
      </p>
      <p>
        That last point deserves emphasis, because instruction verbs are precise and students routinely
        conflate them. <em>Describe</em> asks what something is. <em>Analyze</em> asks how its parts
        relate. <em>Evaluate</em> asks you to judge worth against criteria. <em>Compare</em> asks for
        similarities and differences. <em>Critically discuss</em> asks you to weigh competing positions
        and reach a supported judgment. An essay that describes when the question said evaluate has
        answered a different question, however well written it is.
      </p>

      <h2>Essay Rewriters and Academic Humanizers</h2>
      <p>
        The <Link href="/ai-essay-rewriter">AI essay rewriter</Link> improves clarity, flow, and academic
        tone in existing drafts, tightening sentences, fixing register drift, and improving transitions
        between paragraphs.
      </p>
      <p>
        The <Link href="/ai-academic-humanizer">AI academic humanizer</Link> addresses prose that reads as
        machine-generated: uniform sentence length, excessive hedging, abstraction where specificity
        belongs, and formulaic paragraph shapes. Academic writing has a particular tension here, because
        scholarly convention genuinely requires more hedging than general prose. The distinction worth
        holding is between calibrated hedging, which accurately reflects uncertainty in the evidence, and
        reflexive hedging, which qualifies everything into meaninglessness. &quot;The data suggest a
        modest association&quot; is calibrated. &quot;It may potentially be possible that there could be
        some form of relationship&quot; is not.
      </p>
      <p>
        For general-purpose humanizing across other content types, see the{' '}
        <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link> category.
      </p>

      <h2>Essay Structure: What Markers Look For</h2>
      <p>
        Most marking rubrics reward the same underlying structure, and knowing what each section is
        supposed to accomplish makes the difference between an essay that reads as competent and one that
        reads as controlled.
      </p>
      <h3>The Introduction</h3>
      <p>
        An introduction does three jobs: it establishes why the question matters, it states the thesis,
        and it signals the shape of the argument. What it should not do is open with a broad
        generalization about human history, define terms from a dictionary, or restate the question. Those
        three moves are the most common weak openings and markers see them constantly.
      </p>
      <p>
        The thesis belongs at the end of the introduction, where it functions as a hinge into the body.
        Burying it in the middle or deferring it to the conclusion leaves the reader without a frame for
        everything that follows, and an argument the reader cannot track reads as disorganized even when
        it is not.
      </p>
      <h3>Body Paragraphs</h3>
      <p>
        The reliable pattern is claim, evidence, analysis, link. The claim states what this paragraph
        argues. The evidence supports it. The analysis explains what the evidence demonstrates. The link
        connects back to the thesis. Students most often omit the analysis, producing paragraphs where
        evidence appears and the reader is left to infer its significance.
      </p>
      <p>
        Paragraph order should follow the logic of the argument rather than the order you found sources.
        A common revision that improves essays substantially is reordering paragraphs so each builds on
        the previous one, then rewriting the opening sentence of each to make the progression explicit.
      </p>
      <h3>Counterarguments</h3>
      <p>
        Engaging seriously with the strongest opposing position is one of the clearest markers of
        sophisticated work. The weak version raises a trivial objection and dismisses it. The strong
        version presents the best case against the thesis, concedes what is genuinely persuasive about it,
        and then explains why the thesis nonetheless holds. Conceding a real point strengthens rather than
        weakens an argument, because it demonstrates that the conclusion survived scrutiny.
      </p>
      <h3>The Conclusion</h3>
      <p>
        A conclusion should do more than restate the introduction. It draws out the implication of the
        argument, acknowledges its limits, and indicates what follows. Introducing entirely new evidence
        in the conclusion is a structural error, but extending the argument to its consequence is exactly
        what the section is for.
      </p>

      <h2>Common Academic Writing Mistakes</h2>
      <p>
        A diagnostic list of the failures that cost the most marks relative to how easily they are fixed.
      </p>
      <p>
        <strong>Answering the question you prepared for.</strong> Revision often produces a topic you know
        well, and the temptation to write about that instead of what was asked is strong. It is the single
        most expensive mistake in the list.
      </p>
      <p>
        <strong>Summarizing sources instead of using them.</strong> A paragraph that recounts what an
        author argued, without doing anything with it, is content the marker already knows. Sources are
        instruments for advancing your claim, not exhibits.
      </p>
      <p>
        <strong>Unsupported assertion.</strong> Statements presented as obvious that actually require
        evidence. If a claim is contestable and you have not supported it, a marker will notice.
      </p>
      <p>
        <strong>Inconsistent terminology.</strong> Switching between near-synonyms for a key concept
        creates ambiguity about whether you mean the same thing. Fix a term early and use it consistently.
      </p>
      <p>
        <strong>Signposting that substitutes for structure.</strong> Phrases like &quot;this essay will
        now turn to&quot; help only when the structure underneath is sound. Heavy signposting layered over
        a disorganized argument makes the disorganization more visible, not less.
      </p>
      <p>
        <strong>Leaving no time for revision.</strong> Structural problems are only visible with distance.
        A draft finished the night before submission cannot be restructured, only proofread, and
        proofreading fixes the cheapest category of error.
      </p>

      <h2>AI Detection in Academic Settings</h2>
      <p>
        Turnitin, GPTZero, Originality.ai, and Copyleaks are widely deployed in universities, and being
        clear-eyed about their reliability matters because real academic consequences follow from their
        output.
      </p>
      <p>
        These systems measure statistical properties of text, chiefly perplexity, how predictable each
        word is given the preceding context, and burstiness, how much sentence length and complexity vary.
        Human writing tends to be less predictable and more variable. Generated writing tends to be
        smoother.
      </p>
      <p>
        The problem is that these signals correlate with things other than authorship. Non-native English
        speakers are flagged at substantially higher rates, because writing in a second language often
        produces simpler and more regular construction. Students on the autism spectrum have reported
        elevated false positives. Technical and scientific writing is flagged more often because
        disciplinary convention reduces stylistic variation. Heavily edited work scores as AI precisely
        because editing removes irregularity, meaning the most carefully revised essay can look most
        machine-like.
      </p>
      <p>
        These are not edge cases. Documented false positive rates are high enough that several
        universities have restricted or abandoned automated AI detection for disciplinary purposes.
      </p>
      <p>
        If you are accused on the basis of a detector score, the practical defence is process evidence:
        version history in Google Docs or Word, drafts with timestamps, research notes, browser history
        showing sources consulted, and your ability to discuss the argument in detail. Maintaining a
        visible drafting trail is worth doing routinely, not just when a problem arises. For more on how
        detection works, see the <Link href="/ai-tools/ai-detection-tools">AI detection tools</Link>{' '}
        category.
      </p>

      <h2>A Workflow for Producing Stronger Academic Work</h2>
      <p>
        The order in which you do things affects the result more than most students expect, because
        effort spent polishing text that later gets cut is effort lost entirely.
      </p>
      <p>
        <strong>Start by interrogating the question.</strong> Identify the instruction verb, the scope,
        and every distinct part that must be addressed. Write these down. A surprising proportion of lost
        marks trace back to a requirement that was present in the brief and never registered.
      </p>
      <p>
        <strong>Read before you decide what you think.</strong> Forming a thesis first and then searching
        for support produces confirmation bias and thin evidence, because you stop reading once you find
        agreement. Reading broadly first lets the argument emerge from the material, which usually
        produces a more defensible and more interesting claim.
      </p>
      <p>
        <strong>Draft the thesis and test it before writing.</strong> Run it through the{' '}
        <Link href="/ai-thesis-checker">thesis checker</Link> and try to state the counterargument. If you
        cannot, refine it. Ten minutes here saves hours of writing toward a claim that will not hold.
      </p>
      <p>
        <strong>Outline at the paragraph level.</strong> One line per paragraph stating what it argues.
        This makes gaps and repetition visible while they are still cheap to fix, and it exposes ordering
        problems before you have written prose you are reluctant to cut.
      </p>
      <p>
        <strong>Write the body first.</strong> Introductions written before the argument exists commit you
        to a structure the essay may not follow. Writing the introduction last means it can accurately
        describe what the essay actually does.
      </p>
      <p>
        <strong>Leave the draft alone before revising.</strong> Structural problems are invisible while
        the argument is still fresh in your mind, because you supply the missing connections
        automatically. A day away restores enough distance to read what is actually on the page.
      </p>
      <p>
        <strong>Revise in passes, largest first.</strong> Structure, then paragraph logic, then sentences,
        then proofreading. Proofreading a paragraph you are about to delete is wasted work, which is why
        the order matters.
      </p>
      <p>
        <strong>Verify every citation last.</strong> Check each reference against the actual source,
        confirm the citation style is consistent throughout, and run a cleanup pass so hidden characters
        do not corrupt the submission.
      </p>

      <h2>Citation Styles and Academic Formatting</h2>
      <p>
        Citation style is a compliance requirement, and consistency matters more than any individual
        formatting choice.
      </p>
      <p>
        <strong>APA</strong>, standard in psychology, education, and the social sciences, uses
        author-date in-text citation and a reference list emphasizing publication year, reflecting a field
        where recency signals relevance. <strong>MLA</strong>, standard in the humanities, uses
        author-page and a works cited list, reflecting a field where locating a passage matters more than
        publication date. <strong>Chicago</strong> offers notes-bibliography, common in history, and
        author-date, common in the sciences. <strong>Harvard</strong> is author-date with institutional
        variation, which is why you should always check your department&apos;s specific guide.{' '}
        <strong>IEEE</strong>, standard in engineering and computer science, uses bracketed numbers in
        citation order.
      </p>
      <p>
        Two recurring errors are worth naming. First, mixing styles within one document, usually from
        copying formatted citations out of different databases. Second, citing a source you found quoted
        in another source as though you read the original. If you did not read it, cite it as quoted in
        the work where you found it.
      </p>

      <h2>Discipline-Specific Expectations</h2>
      <p>
        Academic writing conventions are not universal, and applying the habits of one discipline in
        another is a common source of lost marks for students taking modules outside their home subject.
      </p>
      <p>
        <strong>Humanities</strong> writing argues through interpretation of texts and sources. Close
        reading is the central method, quotation is expected and frequent, and the first person is
        increasingly accepted. Essays are typically continuous prose without subheadings, and the argument
        develops cumulatively rather than being reported in sections.
      </p>
      <p>
        <strong>Social sciences</strong> writing blends theoretical framing with empirical evidence.
        Structure is more explicit, subheadings are normal, and claims are expected to be tied to data or
        established literature. Methodology matters even in essay work, since how a conclusion was reached
        is part of what is being assessed.
      </p>
      <p>
        <strong>Sciences and engineering</strong> writing prioritizes reproducibility and concision. The
        passive voice remains common in methods sections because the procedure matters more than the
        person performing it. Claims are tightly bounded, hedging is calibrated to statistical confidence,
        and unnecessary prose is treated as a defect rather than a stylistic choice.
      </p>
      <p>
        <strong>Law</strong> writing has its own citation conventions and a distinctive argumentative
        structure built around authority, precedent, and application to facts. Referencing requirements
        are unusually strict and vary by jurisdiction.
      </p>
      <p>
        When in doubt, read two or three recent articles from a journal your department cites and imitate
        their structure. That is faster and more reliable than inferring conventions from general advice.
      </p>

      <h2>Using AI Responsibly in Academic Work</h2>
      <p>
        Institutional policies vary widely, and yours is the one that governs. Most fall somewhere on a
        spectrum from prohibition through permitted-with-disclosure to actively encouraged for specific
        tasks.
      </p>
      <p>
        Uses that are widely accepted include understanding difficult concepts, generating research
        directions to investigate yourself, getting feedback on drafts you wrote, checking grammar and
        clarity, and formatting citations. Uses that are widely prohibited include submitting generated
        text as your own work, fabricating data or sources, and disguising generated content to evade
        detection.
      </p>
      <p>
        Where disclosure is required, be specific: naming the tool, what you used it for, and which parts
        of the work it touched is far better received than a vague blanket acknowledgment. Departments
        differ, so check your handbook rather than assuming the university-wide policy applies unchanged.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For grammar, readability, and tone analysis, see the{' '}
        <Link href="/ai-tools/writing-tools">writing tools</Link>. For removing invisible characters and
        formatting artifacts before submission, which matters because learning management systems often
        mangle extended Unicode, see the{' '}
        <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>. For understanding detection, see
        the <Link href="/ai-tools/ai-detection-tools">AI detection tools</Link>. The complete{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What do AI academic tools actually check?',
    answer:
      'They evaluate the things academic markers assess: whether your thesis is arguable, whether paragraphs make and support a single point, whether evidence is integrated and interpreted rather than dropped in, whether your register is appropriately scholarly, and whether the submission meets the assignment brief. This is different from grammar checking, which measures surface correctness.',
  },
  {
    category: 'General',
    question: 'Are these academic tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits.',
  },
  {
    category: 'General',
    question: 'Which tool should I use first on a draft?',
    answer:
      'The thesis checker, because it has the most leverage. A weak thesis guarantees a weak essay regardless of how well everything else is executed, and fixing it early prevents you polishing paragraphs that support an argument you will end up rewriting. Run the assignment checker second to confirm you are answering the question actually asked.',
  },
  {
    category: 'General',
    question: 'Do I need the model-specific version for my text?',
    answer:
      'Not usually. The general AI essay checker, thesis checker, and research paper checker handle text from any source. The model-specific versions are tuned for characteristic weaknesses of each model output, so they may catch a little more if you consistently work with one.',
  },
  {
    category: 'Usage',
    question: 'What makes a thesis statement strong?',
    answer:
      'Four properties. It is arguable, meaning a reasonable person could disagree. It is specific, naming the claim rather than the topic area. It is supportable within your word count. And it is significant, making clear why the claim matters. A quick test: if you cannot state the counterargument in one sentence, it is probably not arguable yet.',
  },
  {
    category: 'Usage',
    question: 'Why is my essay described as descriptive rather than analytical?',
    answer:
      'Because it explains what something is instead of arguing something about it. Descriptive writing moves through subtopics and reports information. Analytical writing makes a claim someone could dispute and defends it with interpreted evidence. The fix is usually at the thesis level, since a descriptive thesis produces descriptive paragraphs throughout.',
  },
  {
    category: 'Usage',
    question: 'What is a dropped quote and how do I fix it?',
    answer:
      'A dropped quote is a quotation inserted without introduction or interpretation, leaving the reader to work out why it is there. Fix it with a three-part move: frame the source and its context, present the quotation, then explain what it demonstrates and how it advances your argument. The interpretation is the part most often missing.',
  },
  {
    category: 'Usage',
    question: 'What is the difference between describe, analyze, and evaluate?',
    answer:
      'Describe asks what something is. Analyze asks how its parts relate and why that matters. Evaluate asks you to judge its worth against explicit criteria. Critically discuss asks you to weigh competing positions and reach a supported judgment. These verbs are precise, and answering with the wrong one means answering a different question however well you write.',
  },
  {
    category: 'Usage',
    question: 'How do I write a literature review that synthesizes rather than lists?',
    answer:
      'Organize by theme or debate rather than by source. Instead of a paragraph per author, write a paragraph per issue and show which authors line up where, where the field agrees, where it disagrees, and what remains unresolved. Then identify the gap your work addresses. The test is whether a source could be moved without disrupting the structure; if so, you are still listing.',
  },
  {
    category: 'Usage',
    question: 'How much hedging is appropriate in academic writing?',
    answer:
      'Enough to accurately reflect the strength of your evidence, and no more. Calibrated hedging is precise: the data suggest a modest association. Reflexive hedging qualifies everything into meaninglessness: it may potentially be possible that there could be some relationship. Match your certainty to your evidence rather than defaulting to maximum caution.',
  },
  {
    category: 'Technical',
    question: 'What are hallucinated citations and how do I avoid them?',
    answer:
      'Language models fabricate references that look entirely convincing, with real author names, real journal titles, plausible volumes and pages, and sometimes valid-looking DOIs, for papers that do not exist. This has caused retractions and ended careers. The only defence is verifying every reference against the actual database and never citing work you have not personally located.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between APA, MLA, and Chicago?',
    answer:
      'APA uses author-date and is standard in psychology, education, and the social sciences, where recency signals relevance. MLA uses author-page with a works cited list and is standard in the humanities, where locating a passage matters more than the date. Chicago offers notes-bibliography, common in history, and an author-date variant used in the sciences.',
  },
  {
    category: 'Technical',
    question: 'How do I cite a source I found quoted in another source?',
    answer:
      'Cite it as quoted in the work where you found it, using your style secondary-citation format. Do not cite the original as though you read it. Ideally, locate the original and read it, since secondary citation can propagate errors and misrepresentations that entered at the intermediate stage.',
  },
  {
    category: 'Detection and Limits',
    question: 'How accurate are Turnitin and GPTZero at detecting AI writing?',
    answer:
      'Considerably less accurate than their marketing implies. They measure statistical regularity rather than authorship, and false positive rates are high enough that several universities have restricted or abandoned automated AI detection for disciplinary purposes. A detector score is a weak signal, not evidence.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why does AI detection flag non-native English speakers more often?',
    answer:
      'Because writing in a second language often produces simpler, more regular sentence construction with more predictable vocabulary, which is exactly the statistical profile detectors associate with generated text. This is a well-documented bias, and it means detector results are least reliable for the students most likely to be harmed by them.',
  },
  {
    category: 'Detection and Limits',
    question: 'I wrote my essay myself but it was flagged as AI. What should I do?',
    answer:
      'Present process evidence. Version history in Google Docs or Word showing the draft evolving, timestamped drafts, research notes, browser history of sources consulted, and your ability to discuss the argument in depth are all far more probative than a detector score. Keep a visible drafting trail routinely, not only when a problem arises.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can careful editing make my writing look more like AI?',
    answer:
      'Yes, which is one of the clearest indictments of these systems. Editing removes irregularity, smooths sentence rhythm, and regularizes vocabulary, all of which move text toward the statistical profile detectors read as machine-generated. The most carefully revised essay can score worse than a rougher one.',
  },
  {
    category: 'Detection and Limits',
    question: 'What is the difference between plagiarism detection and AI detection?',
    answer:
      'Plagiarism detection compares your text against a corpus of existing documents and reports matching passages, which is a deterministic lookup you can verify by inspecting the matched source. AI detection estimates authorship from statistical properties alone, with nothing to compare against, so its output cannot be verified at all.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my coursework stored when I use these tools?',
    answer:
      'Your work is not retained for training or shared with third parties, and it is not stored after your session. If you are handling unpublished research or material under embargo, the cleanup tools in the AI cleanup category run entirely client-side with no transmission at all.',
  },
  {
    category: 'Privacy and Security',
    question: 'Will my university know I used these tools?',
    answer:
      'Nothing is reported to any institution. That said, whether use is permitted is governed by your institution policy, not by whether it can be observed. Check your course handbook, since departmental rules often differ from university-wide ones.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my essay look wrong after uploading to Canvas or Blackboard?',
    answer:
      'Learning management systems frequently run older text pipelines that handle extended Unicode poorly, so smart quotes and em dashes appear as question marks or black diamonds. Normalizing punctuation to plain ASCII and removing invisible characters before submission avoids it. The AI cleanup tools category covers this.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my word count differ from what my instructor sees?',
    answer:
      'Applications count differently, and invisible characters make it worse. Zero-width spaces break word boundaries, so one program may count two words where another counts one. Whether footnotes, headers, and reference lists are included also varies. Check your brief for what counts, and clean the text so counts are consistent.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Is using an AI academic tool considered cheating?',
    answer:
      'That depends entirely on your institution policy and how you use it. Checking your own draft, getting feedback on structure, and fixing citation formatting are widely accepted. Submitting generated text as your own work is prohibited essentially everywhere. Read your handbook rather than assuming, since departments vary considerably.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Should I disclose that I used AI assistance?',
    answer:
      'Where your institution requires it, yes, and be specific. Naming the tool, the task you used it for, and which parts of the work it touched is far better received than a vague blanket acknowledgment. Specific disclosure demonstrates good faith; vague disclosure invites suspicion.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'My essay is well written but scored badly. Why?',
    answer:
      'Most often it answered the wrong question. Strong prose that describes when the brief said evaluate, or that addresses two parts of a three-part question, loses marks that no amount of polish recovers. Run the assignment checker to verify compliance before you invest in refinement.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between an essay checker and a grammar checker?',
    answer:
      'A grammar checker measures surface correctness: spelling, punctuation, agreement. An essay checker evaluates whether the argument works, whether paragraphs cohere, whether evidence is interpreted, and whether the register suits academic writing. An essay can be grammatically perfect and still fail as an essay.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What order should I use these tools in?',
    answer:
      'Thesis checker first, since it has the most leverage. Assignment checker next, to confirm you are answering the question asked. Then essay or research paper checker for structure and evidence. Then the rewriter for clarity and register. Then a cleanup pass before submission. Fixing structure before polishing prose avoids wasted effort.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I avoid overclaiming in a research paper?',
    answer:
      'Match claim strength to evidence strength. Correlational data does not support causal language. Small or non-representative samples do not support population generalization. Qualitative findings describe rather than predict. Stating limitations explicitly strengthens a paper, because acknowledged constraints read as rigour while unacknowledged ones read as oversight.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do academic writing conventions differ between disciplines?',
    answer:
      'Substantially. Humanities essays argue through close reading of texts, usually as continuous prose without subheadings. Social science writing ties claims to data and uses explicit structure. Science and engineering writing prioritizes reproducibility and concision, with hedging calibrated to statistical confidence. Law has its own citation rules and an argument structure built on authority and precedent. Reading two recent articles from a journal your department cites is the fastest way to learn the local conventions.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Should I write the introduction first or last?',
    answer:
      'Last, in most cases. An introduction written before the argument exists commits you to a structure the essay may not end up following, and rewriting it afterwards is common enough that drafting it first often wastes the effort. Writing it last means it can accurately describe what the essay actually does.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I handle a counterargument properly?',
    answer:
      'Present the strongest version of the opposing position, not a weak one you can easily dismiss. Concede whatever is genuinely persuasive about it, then explain why your thesis holds regardless. Conceding a real point strengthens your argument because it shows the conclusion survived serious scrutiny rather than avoiding it.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I keep evidence that I wrote my own work?',
    answer:
      'Draft in a tool with version history, such as Google Docs or Word with AutoSave, so the document evolution is recorded automatically. Keep research notes and annotated sources. Save intermediate drafts with dates. This costs nothing while you work and is by far the strongest response if authorship is ever questioned.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
