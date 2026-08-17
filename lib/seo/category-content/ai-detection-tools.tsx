import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>AI detection tools</strong> estimate whether a piece of text was written by a language
        model. This category collects 17 detectors: model-specific versions for{' '}
        <Link href="/gpt-5-detector">GPT-5</Link>,{' '}
        <Link href="/gpt-5-pro-detector">GPT-5 Pro</Link>,{' '}
        <Link href="/gpt-5.1-detector">GPT-5.1</Link>,{' '}
        <Link href="/gpt-5.2-detector">GPT-5.2</Link>, and{' '}
        <Link href="/gpt-4.5-detector">GPT-4.5</Link>, plus detectors for twelve languages including{' '}
        <Link href="/spanish-ai-detector">Spanish</Link>,{' '}
        <Link href="/french-ai-detector">French</Link>,{' '}
        <Link href="/german-ai-detector">German</Link>,{' '}
        <Link href="/japanese-ai-detector">Japanese</Link>,{' '}
        <Link href="/korean-ai-detector">Korean</Link>,{' '}
        <Link href="/chinese-ai-detector">Chinese</Link>,{' '}
        <Link href="/arabic-ai-detector">Arabic</Link>, and{' '}
        <Link href="/hindi-ai-detector">Hindi</Link>.
      </p>
      <p>
        This page will be more useful if it is direct about something the industry generally is not: AI
        detection is unreliable, and the confidence with which detector scores are presented is not
        supported by how they work. A percentage score looks like a measurement. It is an estimate
        derived from statistical properties that correlate imperfectly with authorship, and those same
        properties correlate with things that have nothing to do with who wrote the text.
      </p>
      <p>
        That does not make detectors useless. It makes them a weak signal that should inform a
        conversation rather than settle one. Understanding the mechanism is the difference between using
        them sensibly and using them to make decisions they cannot support.
      </p>
      <p>
        The stakes justify the caution. Detection results are used to fail coursework, reject freelance
        submissions, decline job applications, and remove published content. Those are consequential
        outcomes resting on a probabilistic estimate with documented bias against identifiable groups. If
        you are on either side of that process, whether running the checks or subject to them, the
        sections below cover how the measurement works, who it misclassifies, what it fundamentally cannot
        distinguish, and where it does hold genuine value.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>How AI Detection Actually Works</h2>
      <p>
        AI detectors do not look anything up. There is no database of generated text to compare against,
        no watermark to verify, and no record of what any model produced. Detection is entirely inferential,
        based on measuring statistical properties of the text in front of it.
      </p>
      <h3>Perplexity</h3>
      <p>
        Perplexity measures how surprising each word is given the words before it. A detector runs the
        text through a language model and asks, at each position, how confidently that model would have
        predicted the actual next word. When the model consistently would have predicted correctly,
        perplexity is low.
      </p>
      <p>
        Generated text has low perplexity almost by construction. A language model produces text by
        selecting high-probability continuations, so its output is, by definition, what a language model
        finds predictable. Human writing tends to have higher perplexity because people make idiosyncratic
        word choices, include specific details no model would guess, and occasionally write things that
        are odd but effective.
      </p>
      <h3>Burstiness</h3>
      <p>
        Burstiness measures variation in sentence length and complexity across a passage. Human writing
        swings: a forty-word sentence developing an idea, then a five-word one landing the point. That
        variation emerges naturally from thinking while writing.
      </p>
      <p>
        Model output clusters more tightly around a comfortable middle length. Each sentence is
        well-formed and they are all approximately the same shape, producing an evenness that reads as
        smooth and measures as low burstiness.
      </p>
      <h3>Why This Is Weaker Than It Sounds</h3>
      <p>
        Both signals measure regularity, not authorship. Anything that makes human writing more regular
        moves it toward the AI end of the scale, and there are many such things that have nothing to do
        with using a language model.
      </p>

      <h2>False Positives: Who Gets Wrongly Flagged</h2>
      <p>
        This is the most important section on this page, because the harm from AI detection falls
        unevenly and predictably.
      </p>
      <p>
        <strong>Non-native English speakers</strong> are flagged at substantially higher rates. Writing in
        a second language typically produces simpler sentence construction, more common vocabulary, and
        more regular structure, because the writer is drawing on a smaller set of confident patterns. That
        profile is close to what detectors read as machine-generated. Research examining this has found
        false positive rates for non-native writers far above those for native writers on identical
        tasks.
      </p>
      <p>
        <strong>Autistic writers and others with distinctive writing patterns</strong> have reported
        elevated false positives, often because consistent structure and precise, literal phrasing read
        as machine-like to a system measuring variance.
      </p>
      <p>
        <strong>Technical and scientific writing</strong> is flagged more often because disciplinary
        convention actively suppresses stylistic variation. Methods sections are supposed to be uniform.
        Precise terminology is supposed to repeat rather than vary for elegance. The conventions that make
        the writing good are the ones detectors penalize.
      </p>
      <p>
        <strong>Heavily edited writing</strong> scores worse than rough writing, which is close to a
        reductio of the whole approach. Editing smooths rhythm, regularizes vocabulary, and removes
        oddities. A carefully revised essay can be flagged where the messy first draft would have passed.
      </p>
      <p>
        <strong>Formulaic formats</strong> such as legal documents, standard business correspondence, and
        structured reports score as AI because the format demands uniformity. A contract clause that
        deviates stylistically from its neighbours is a drafting error, not a virtue, so the writing
        conventions in these formats push directly against every property detection treats as a human
        signal. The same holds for regulatory filings and standardized clinical documentation.
      </p>
      <p>
        These are not marginal cases. Several universities have restricted or abandoned automated AI
        detection for disciplinary purposes on exactly these grounds, and some detection vendors have
        quietly moderated their accuracy claims.
      </p>

      <h2>False Negatives: What Detection Misses</h2>
      <p>
        Detection fails in the other direction too, and the ways it fails are easy enough that treating a
        pass as clearance is unwise.
      </p>
      <p>
        Light editing substantially changes detector output. Varying sentence lengths, replacing a few
        predictable phrases with specific ones, and adding concrete detail all move the statistical
        profile without changing the substance. Text that was generated and then genuinely revised
        frequently passes.
      </p>
      <p>
        Prompting also matters. A model asked to write in a specific voice, at varied sentence lengths,
        with concrete examples, produces output that scores differently from the same model asked for a
        generic article. Short passages are unreliable regardless, because statistical measures need
        volume to mean anything, which is why most detectors give low-confidence results under a few
        hundred words.
      </p>
      <p>
        The combination matters: detectors produce both false positives on genuine human writing and false
        negatives on generated text. A system that errs in both directions cannot support a confident
        conclusion in either.
      </p>

      <h2>Model-Specific and Multilingual Detection</h2>
      <p>
        The model-specific detectors for{' '}
        <Link href="/gpt-5-detector">GPT-5</Link>,{' '}
        <Link href="/gpt-5-pro-detector">GPT-5 Pro</Link>,{' '}
        <Link href="/gpt-5.1-detector">GPT-5.1</Link>,{' '}
        <Link href="/gpt-5.2-detector">GPT-5.2</Link>, and{' '}
        <Link href="/gpt-4.5-detector">GPT-4.5</Link> exist because each model generation has somewhat
        different output characteristics. Newer models generally produce more varied, less formulaic text
        than earlier ones, which makes them harder to detect. This is a structural problem for the
        detection industry: as generation improves, the statistical gap detection relies on narrows.
      </p>
      <p>
        Multilingual detection is harder still, and the reason is worth understanding. Most detection
        research and training data is English. Applying perplexity-based methods to other languages
        requires a language model well-calibrated for that language, and calibration quality varies
        enormously. Detection in{' '}
        <Link href="/japanese-ai-detector">Japanese</Link>,{' '}
        <Link href="/korean-ai-detector">Korean</Link>,{' '}
        <Link href="/chinese-ai-detector">Chinese</Link>, and{' '}
        <Link href="/arabic-ai-detector">Arabic</Link> faces additional complications from writing systems
        and morphology that behave very differently from English under tokenization.
      </p>
      <p>
        Languages with rich inflection, such as{' '}
        <Link href="/russian-ai-detector">Russian</Link>, and languages with different orthographic
        conventions produce baseline perplexity distributions unlike English, so thresholds calibrated on
        English data do not transfer. Treat non-English detection results as weaker still.
      </p>
      <p>
        The specific difficulties vary by language. Chinese and Japanese lack word boundaries as English
        marks them, so tokenization decisions materially affect the perplexity calculation before any
        detection happens. Arabic morphology attaches multiple meaningful units to a single written form,
        which compresses text in ways that shift the statistics. Korean agglutination has a similar
        effect. Languages such as{' '}
        <Link href="/german-ai-detector">German</Link> form long compounds that a tokenizer may split
        inconsistently, and richly inflected languages such as{' '}
        <Link href="/russian-ai-detector">Russian</Link> spread the same lexical item across many surface
        forms.
      </p>
      <p>
        There is also a compounding fairness problem. Detection in a language is least reliable exactly
        where the training data is thinnest, and the writers most affected are frequently the same
        non-native English speakers already disadvantaged by English-language detection. The errors stack
        rather than cancel.
      </p>

      <h2>Reading a Detection Score Properly</h2>
      <p>
        Detector output is usually presented as a percentage, and that presentation encourages a
        misreading serious enough to be worth addressing directly.
      </p>
      <p>
        <strong>A score is not a probability that the text is AI-generated.</strong> An output labelled
        87 percent does not mean there is an 87 percent chance a model wrote it. It is a similarity
        measure: how closely the statistical profile of this text resembles the profile the detector
        associates with generated writing. Those are different quantities, and conflating them inflates
        confidence substantially.
      </p>
      <p>
        <strong>Base rates matter enormously and are usually ignored.</strong> Suppose a detector is 95
        percent accurate and you screen 1,000 submissions in a context where 50 are actually generated.
        You correctly flag roughly 48 of them, but you also wrongly flag about 48 of the 950 genuine
        submissions. Half of everything flagged is a false accusation, despite the impressive-sounding
        accuracy figure. When the true rate is lower, the picture gets worse.
      </p>
      <p>
        <strong>Sentence-level highlighting is weaker than document-level scoring.</strong> Many detectors
        highlight individual sentences they consider machine-written. Since statistical measures need
        volume to be meaningful, per-sentence judgments are the least reliable output these tools produce,
        even though they look the most specific and are the most persuasive to a reader.
      </p>
      <p>
        <strong>Accuracy claims come from the vendor.</strong> Published figures are typically measured on
        datasets the vendor selected, often comparing clean generated text against clean human text with
        no editing in between. Real submissions are messier, and independent evaluation consistently finds
        lower performance than vendor claims.
      </p>

      <h2>What Detection Cannot Distinguish</h2>
      <p>
        A separate problem from accuracy is that detection measures a property that does not map onto the
        distinctions people actually care about.
      </p>
      <p>
        <strong>Assistance versus authorship.</strong> Most real use is somewhere in between: a writer who
        drafted an outline with a model then wrote the prose, or wrote the prose then used a model to
        tighten it. Detection cannot tell you where on that spectrum a document sits, and for most
        policies the position on that spectrum is the entire question.
      </p>
      <p>
        <strong>Permitted from prohibited use.</strong> Grammar checking, translation assistance, and
        rephrasing for clarity are permitted in most contexts and all involve model output touching the
        text. A detector responds to the statistical residue without any notion of whether the use was
        allowed.
      </p>
      <p>
        <strong>Accessibility tools from evasion.</strong> Writers using assistive technology for
        dyslexia, motor impairment, or language support produce text shaped by that assistance. Treating
        the resulting regularity as suspicious penalizes accommodation.
      </p>
      <p>
        <strong>Collaboration from generation.</strong> Text edited by several people converges toward a
        neutral register, losing individual idiosyncrasy in the same way generated text lacks it.
        Professionally edited work, which is to say most published writing, has this property by design.
      </p>
      <p>
        This is why process evidence outperforms detection so decisively. Version history shows how a
        document came to exist, which is the actual question. A score describes a property of the finished
        artifact, which is at best a weak proxy for it.
      </p>

      <h2>Watermarking: The Approach That Would Actually Work</h2>
      <p>
        There is a technically sound alternative to statistical detection, and understanding it clarifies
        why statistical detection is so limited.
      </p>
      <p>
        Cryptographic watermarking embeds a signal during generation rather than inferring one afterward.
        A model can be made to prefer certain token choices according to a secret pattern, producing text
        that looks normal but carries a statistically verifiable signature detectable by anyone holding
        the key. This is deterministic in a way inference never is.
      </p>
      <p>
        Google&apos;s SynthID does this for images and has been extended to text. OpenAI has researched
        text watermarking and reportedly developed a working system without deploying it publicly. The
        obstacles are commercial and practical rather than technical: watermarking only works if the
        generating provider implements it, users can switch to models that do not, paraphrasing degrades
        the signal, and no provider wants to disadvantage its own users.
      </p>
      <p>
        For image watermarking, which is genuinely deployed at scale, see the{' '}
        <Link href="/ai-tools/ai-watermark-tools">AI watermark tools</Link> category. The contrast is
        instructive: image watermarking works because it was designed in, while text detection is
        reverse-engineered from output.
      </p>

      <h2>The Major Detection Platforms</h2>
      <p>
        Several commercial detectors dominate institutional use, and their differences are worth knowing
        even though the underlying limitations apply to all of them.
      </p>
      <p>
        <strong>Turnitin</strong> is the most widely deployed in education, largely because it was already
        installed for plagiarism checking and AI detection was added to an existing product. That
        distribution advantage means many institutions use it by default rather than by evaluation. Its AI
        indicator is separate from the similarity score, and conflating the two is a common
        misunderstanding among both students and staff.
      </p>
      <p>
        <strong>GPTZero</strong> was among the earliest consumer detectors and popularized the perplexity
        and burstiness framing. It is widely used precisely because it is accessible, which also means it
        is applied casually in contexts where its limitations are not understood.
      </p>
      <p>
        <strong>Originality.ai</strong> targets publishers and content agencies rather than education, and
        its scoring is tuned for a different use case: screening freelance submissions at volume. That
        makes its trade-off between false positives and false negatives different from a tool designed for
        academic use, which matters when the same tool is applied across both.
      </p>
      <p>
        <strong>Copyleaks</strong> combines plagiarism and AI detection and markets multilingual support,
        though the calibration caveats for non-English detection apply here as everywhere.
      </p>
      <p>
        Running the same text through several of these commonly produces meaningfully different scores.
        That divergence is informative: when tools built on similar principles disagree substantially, the
        signal in that particular text is weak, and treating any single number as authoritative is
        unjustified.
      </p>

      <h2>Where Detection Is Genuinely Useful</h2>
      <p>
        Nothing above means these tools have no legitimate application. It means the applications are
        narrower than they are marketed for.
      </p>
      <p>
        <strong>Triage at scale.</strong> Where the alternative is reading nothing, a detector can surface
        submissions worth a closer human look. The output is a prompt for attention rather than a
        conclusion, and the consequences of a false flag are limited to someone reading more carefully.
      </p>
      <p>
        <strong>Self-assessment before submission.</strong> Checking your own work tells you what a score
        will say, which is useful if you write in a second language or a technical register where false
        positives are likely. Knowing in advance lets you have your drafting evidence ready.
      </p>
      <p>
        <strong>Content quality signals.</strong> For publishers, a high score often correlates with
        writing that is generic and unspecific regardless of how it was produced. Used this way, the
        detector is a rough proxy for thin content rather than an authorship test, and that is a question
        it answers more honestly.
      </p>
      <p>
        <strong>Aggregate monitoring.</strong> Tracking scores across a large corpus over time can reveal
        shifts worth investigating, even though no individual score is reliable. Aggregate patterns are
        more robust than point estimates.
      </p>
      <p>
        The common thread is that these uses tolerate error. Detection becomes indefensible precisely when
        a single score triggers a consequential decision about one person, which is unfortunately the use
        case it is most often sold for.
      </p>

      <h2>Using Detection Results Responsibly</h2>
      <p>
        If you are in a position where detector output influences decisions about other people, a few
        principles follow directly from the mechanism.
      </p>
      <p>
        <strong>Never treat a score as evidence.</strong> A detector output is a probability estimate from
        a system with documented bias and error in both directions. It can reasonably prompt a
        conversation. It cannot establish a fact.
      </p>
      <p>
        <strong>Account for the bias.</strong> If your cohort includes non-native English speakers,
        neurodivergent writers, or technical subject matter, your false positive rate is higher than any
        headline accuracy figure suggests, and it falls on identifiable groups.
      </p>
      <p>
        <strong>Ask for process, not proof of innocence.</strong> Version history, drafts, notes, and the
        ability to discuss the work in detail are far more informative than any score. Asking someone to
        prove they wrote something is a difficult standard; asking them to walk through how they wrote it
        is reasonable and revealing.
      </p>
      <p>
        <strong>Be transparent about the tool.</strong> People subject to detection should know it is
        being used and what its limitations are. Undisclosed screening that produces consequential
        outcomes is hard to defend.
      </p>
      <p>
        If you are the person flagged, the practical response is process evidence: document history
        showing the draft evolving, timestamped intermediate versions, research notes, and a demonstrated
        command of the material. Keeping that trail routinely costs nothing and is the strongest available
        answer.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For rewriting AI drafts so they read naturally, see the{' '}
        <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link>. For removing invisible
        characters and formatting artifacts, which is a separate problem from detection, see the{' '}
        <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>. For academic contexts
        specifically, see the <Link href="/ai-tools/academic-tools">academic tools</Link>. For image and
        video watermarks, see the{' '}
        <Link href="/ai-tools/ai-watermark-tools">AI watermark tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'How do AI detectors work?',
    answer:
      'They measure statistical properties of the text rather than looking anything up. Perplexity captures how predictable each word is given the preceding context, and burstiness captures how much sentence length and complexity vary. Generated text tends to be more predictable and more uniform. There is no database of AI text and no watermark being checked.',
  },
  {
    category: 'General',
    question: 'Are AI detectors accurate?',
    answer:
      'Much less than their presentation suggests. They measure regularity rather than authorship, and they err in both directions: false positives on human writing that happens to be regular, and false negatives on generated text that has been lightly edited. A percentage score looks like a measurement but is an estimate from an imperfect proxy.',
  },
  {
    category: 'General',
    question: 'Are these detection tools free?',
    answer:
      'Yes. All 17 tools in this category are free with no account required and no usage limits.',
  },
  {
    category: 'Technical',
    question: 'What is perplexity in AI detection?',
    answer:
      'Perplexity measures how surprising each word is given the words before it. A detector runs the text through a language model and asks how confidently it would have predicted each actual word. Low perplexity means highly predictable text, which is characteristic of generated output since models select high-probability continuations by design.',
  },
  {
    category: 'Technical',
    question: 'What is burstiness in AI detection?',
    answer:
      'Burstiness measures variation in sentence length and complexity across a passage. Human writing swings between long developing sentences and short punchy ones because people think while writing. Model output clusters around a comfortable middle length, producing evenness that measures as low burstiness.',
  },
  {
    category: 'Technical',
    question: 'Do detectors check a database of AI-generated text?',
    answer:
      'No, and this is a common misconception. There is no record of what any model produced and nothing to compare against. Detection is entirely inferential, based on measuring statistical properties of the text in front of it. This is fundamentally different from plagiarism detection, which does compare against a real corpus.',
  },
  {
    category: 'Technical',
    question: 'Why are newer AI models harder to detect?',
    answer:
      'Because they produce more varied, less formulaic text than earlier generations. Detection relies on a statistical gap between generated and human writing, and as generation quality improves that gap narrows. This is a structural problem for the detection industry rather than a temporary calibration issue.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why do AI detectors flag non-native English speakers so often?',
    answer:
      'Writing in a second language typically produces simpler construction, more common vocabulary, and more regular structure, because the writer draws on a smaller set of confident patterns. That profile closely matches what detectors read as machine-generated. Research has found false positive rates for non-native writers far above those for native writers on identical tasks.',
  },
  {
    category: 'Detection and Limits',
    question: 'I wrote this myself and it was flagged. What does that mean?',
    answer:
      'It means the detector found your writing statistically regular, not that you did anything wrong. Careful editing, technical subject matter, formal register, and writing in a second language all push text toward the profile detectors associate with generation. The flag reflects a property of the text, not evidence about its authorship.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can editing make my writing look more like AI?',
    answer:
      'Yes, which is close to a reductio of the whole approach. Editing smooths rhythm, regularizes vocabulary, and removes oddities, all of which reduce the variation detectors measure. A carefully revised essay can be flagged where the messy first draft would have passed.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why is technical writing flagged more often?',
    answer:
      'Because disciplinary convention actively suppresses stylistic variation. Methods sections are supposed to be uniform, and precise terminology is supposed to repeat rather than vary for elegance. The conventions that make technical writing good are exactly the ones detectors penalize as machine-like.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can AI-generated text pass detection?',
    answer:
      'Frequently, yes. Light editing that varies sentence lengths and adds specific detail substantially changes the statistical profile. Prompting for a particular voice with varied structure also affects results. Since detectors produce both false positives and false negatives, neither a flag nor a pass supports a confident conclusion.',
  },
  {
    category: 'Detection and Limits',
    question: 'How much text do detectors need to be meaningful?',
    answer:
      'More than most people supply. Statistical measures need volume, so results under a few hundred words are unreliable, and most detectors report low confidence for short passages. A single paragraph does not contain enough signal for perplexity and burstiness to mean anything.',
  },
  {
    category: 'Detection and Limits',
    question: 'What is the difference between AI detection and plagiarism detection?',
    answer:
      'Plagiarism detection compares your text against a real corpus of existing documents and reports matching passages, so a result can be verified by inspecting the source it matched. AI detection estimates authorship from statistical properties with nothing to compare against, so its output cannot be verified at all.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Is AI detection reliable in languages other than English?',
    answer:
      'Less reliable still. Most detection research and training data is English, and perplexity-based methods need a language model well-calibrated for the target language. Thresholds calibrated on English do not transfer to languages with different morphology, writing systems, or tokenization behaviour.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why is detection harder in Japanese, Korean, Chinese, and Arabic?',
    answer:
      'Their writing systems and morphology behave very differently from English under tokenization, which is the operation perplexity measurement depends on. Baseline perplexity distributions differ from English, so both the measurement and the threshold applied to it are on weaker footing than in the language the methods were developed for.',
  },
  {
    category: 'Technical',
    question: 'What is cryptographic watermarking and why is it different?',
    answer:
      'Watermarking embeds a signal during generation rather than inferring one afterward. A model can prefer certain token choices according to a secret pattern, producing normal-looking text carrying a verifiable signature. This is deterministic rather than inferential, which makes it far more reliable than statistical detection.',
  },
  {
    category: 'Technical',
    question: 'Why is text watermarking not widely deployed?',
    answer:
      'The obstacles are commercial rather than technical. It only works if the generating provider implements it, users can switch to models that do not, paraphrasing degrades the signal, and no provider wants to disadvantage its own users relative to competitors. Image watermarking such as SynthID is deployed precisely because those pressures differ.',
  },
  {
    category: 'Usage',
    question: 'How should institutions use detection results?',
    answer:
      'As a prompt for a conversation, never as evidence. Account for the fact that false positives fall disproportionately on non-native speakers, neurodivergent writers, and technical subjects. Ask for process evidence such as drafts and version history rather than asking someone to prove they wrote something, and disclose that detection is being used.',
  },
  {
    category: 'Usage',
    question: 'What should I do if I am accused based on a detector score?',
    answer:
      'Present process evidence. Document version history showing the draft evolving, timestamped intermediate versions, research notes, and your ability to discuss the argument in depth are all far more informative than a score. Keeping that trail routinely, rather than only when a problem arises, is the strongest available protection.',
  },
  {
    category: 'Usage',
    question: 'Should I run my own writing through a detector before submitting?',
    answer:
      'It can be worth knowing what a score will say, particularly if you write in a second language or in a technical register where false positives are more likely. Treat a high score as a prompt to have your drafting evidence in order, not as a signal that something is wrong with your writing.',
  },
  {
    category: 'Usage',
    question: 'Do I need the model-specific detector for my text?',
    answer:
      'Not usually, and often you will not know which model produced a piece of text anyway. The model-specific versions are tuned for characteristic output of each generation. Given the accuracy limits that apply across all of them, the choice of detector matters less than how you interpret the result.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my text stored when I run a detection check?',
    answer:
      'Your text is not retained for training or shared with third parties, and it is not stored after your session. If you are checking unpublished or confidential material, this matters, and the cleanup tools in the AI cleanup category run entirely client-side with no transmission at all.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Two detectors gave me completely different scores. Which is right?',
    answer:
      'Neither necessarily. Different detectors use different underlying models, different thresholds, and different calibration data, so disagreement is common and expected. Wide divergence between tools on the same text is itself useful information: it tells you the signal is weak for that passage.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Does removing invisible characters help text pass AI detection?',
    answer:
      'No. Detectors analyze word choice and sentence structure, not hidden Unicode or spacing. Cleaning makes text technically portable and fixes pasting problems, but it does not touch the linguistic patterns detection measures. Anyone claiming otherwise is describing a mechanism that does not exist.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Do humanizer tools defeat AI detectors?',
    answer:
      'Genuine humanizing usually improves scores, because varying sentence length raises burstiness and adding specific detail raises perplexity, which are the properties being measured. But no tool can guarantee a result, since detectors change. Improved scores follow from genuinely better writing rather than a durable trick.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why does professionally edited writing often score as AI?',
    answer:
      'Because editing by multiple hands converges toward a neutral register, losing the individual idiosyncrasy detectors treat as the human signal. Text refined by an editor has the same smoothness generated text has, arrived at by a different route. Most published writing has this property by design, which is a significant problem for applying detection to professional content.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What specifically makes detection harder in each non-English language?',
    answer:
      'Chinese and Japanese lack English-style word boundaries, so tokenization choices affect the perplexity calculation before detection begins. Arabic and Korean attach multiple meaningful units to single forms, compressing text and shifting the statistics. German compounds may split inconsistently, and richly inflected languages like Russian spread one lexical item across many surface forms.',
  },
  {
    category: 'Detection and Limits',
    question: 'Are vendor accuracy claims reliable?',
    answer:
      'Treat them cautiously. Published figures are typically measured on datasets the vendor selected, often comparing clean generated text against clean human text with no editing between. Real submissions are messier, and independent evaluation consistently finds performance below vendor claims.',
  },
  {
    category: 'Detection and Limits',
    question: 'Does an 87 percent score mean an 87 percent chance my text is AI?',
    answer:
      'No, and this is the most common misreading. A score is a similarity measure: how closely the statistical profile of your text resembles the profile the detector associates with generated writing. That is a different quantity from the probability that a model wrote it, and treating them as the same inflates confidence substantially.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why do false accusations happen even with a 95 percent accurate detector?',
    answer:
      'Base rates. Screen 1,000 submissions where 50 are actually generated, and a 95 percent accurate detector correctly flags about 48 while wrongly flagging about 48 of the 950 genuine ones. Half of everything flagged is a false accusation despite the impressive accuracy figure, and the picture worsens as the true rate falls.',
  },
  {
    category: 'Detection and Limits',
    question: 'Should I trust sentence-level AI highlighting?',
    answer:
      'Less than document-level scores, despite it looking more specific. Statistical measures need volume to mean anything, so per-sentence judgments are the least reliable output these tools produce. They are also the most persuasive to a reader, which is an unfortunate combination.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can detection tell the difference between AI assistance and AI authorship?',
    answer:
      'No, and this is a deeper problem than accuracy. Most real use sits between those poles: outlining with a model then writing, or writing then tightening with one. Detection responds to statistical residue without any notion of where on that spectrum a document sits, which is usually the entire question a policy cares about.',
  },
  {
    category: 'Detection and Limits',
    question: 'Are accessibility tools likely to trigger AI detection?',
    answer:
      'They can. Writers using assistive technology for dyslexia, motor impairment, or language support produce text shaped by that assistance, which often reads as more regular. Treating that regularity as suspicious penalizes accommodation, and it is one reason detection outcomes fall unevenly.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'How do Turnitin, GPTZero, Originality.ai and Copyleaks differ?',
    answer:
      'Mainly in distribution and tuning rather than principle. Turnitin dominates education because it was already installed for plagiarism checking. GPTZero popularized the perplexity and burstiness framing. Originality.ai targets publishers screening freelance work at volume, so its error trade-off differs. Copyleaks combines plagiarism and AI detection. The underlying limitations apply to all of them.',
  },
  {
    category: 'Usage',
    question: 'When is AI detection actually appropriate to use?',
    answer:
      'Where error is tolerable: triaging large volumes to surface work worth a human look, self-checking before submission, using scores as a rough proxy for generic content, or monitoring aggregate patterns over time. It becomes indefensible exactly when a single score triggers a consequential decision about one person.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I keep evidence that I wrote my own work?',
    answer:
      'Draft in a tool with automatic version history such as Google Docs or Word with AutoSave, so the document evolution is recorded without effort. Keep research notes and annotated sources, and save intermediate drafts with dates. This costs nothing while you work and is by far the strongest response if authorship is questioned.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Is it worth using detection at all given the limitations?',
    answer:
      'As one weak signal among several, yes. It can flag text worth a closer look, particularly at scale where reading everything is impossible. What it cannot do is support a decision on its own, and the practical test is whether you would be comfortable defending an outcome using only the score as justification.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
