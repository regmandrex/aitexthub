import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>AI cleanup tools</strong> fix the problem that shows up the moment you paste
        AI-generated text somewhere it matters. The text looked perfect in ChatGPT. Then you pasted it
        into WordPress, Google Docs, Canvas, Blackboard, Shopify, or an email client, and the spacing
        collapsed, the quotation marks turned into strange symbols, the bullet points broke, and
        something about the paragraph structure went subtly wrong. Nothing you can see in the source
        explains it.
      </p>
      <p>
        The reason is that AI output is rarely plain text. It carries invisible Unicode characters,
        zero-width spaces, non-breaking spaces, byte order marks, smart quotes, em dashes, leftover
        Markdown syntax, and irregular whitespace patterns that no visual inspection reveals. This
        category collects 111 <strong>AI text cleaner</strong> tools that strip those artifacts and
        return clean, portable, editor-safe plain text.
      </p>
      <p>
        You will find a general-purpose <Link href="/ai-text-cleaner">AI text cleaner</Link> that works
        with output from any model, plus dedicated cleaners tuned for{' '}
        <Link href="/chatgpt-space-remover">ChatGPT</Link>,{' '}
        <Link href="/gemini-watermark-cleaner">Google Gemini</Link>,{' '}
        <Link href="/claude-watermark-cleaner">Claude</Link>,{' '}
        <Link href="/grok-watermark-cleaner">Grok</Link>,{' '}
        <Link href="/deepseek-watermark-cleaner">DeepSeek</Link>,{' '}
        <Link href="/llama-watermark-cleaner">LLAMA</Link>,{' '}
        <Link href="/mistral-watermark-cleaner">Mistral</Link>, and{' '}
        <Link href="/perplexity-watermark-cleaner">Perplexity</Link>. Every tool runs entirely in your
        browser. Your text is never uploaded, never logged, and never stored on a server.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>What Are AI Cleanup Tools and Why Do You Need One?</h2>
      <p>
        An <strong>AI cleanup tool</strong> is a utility that removes the technical artifacts large
        language models embed in their output while leaving your actual words untouched. This is a
        crucial distinction and the one most people get wrong when they first look for a solution.
        An AI text cleaner is not a paraphraser, not a rewriter, and not a humanizer. It does not change
        your wording, restructure your sentences, or alter your meaning. It performs technical cleanup
        only: removing what should not be there and normalizing what is malformed.
      </p>
      <p>
        The need arises because language models generate text as token sequences rendered into Unicode,
        and Unicode contains a great many characters that occupy space, affect layout, or influence text
        processing while remaining completely invisible on screen. When you copy ChatGPT output from a
        browser, you also copy the underlying character data, including everything you cannot see. Paste
        that into a content management system and the hidden characters travel with it.
      </p>
      <p>
        The symptoms are familiar to anyone who publishes AI-assisted content regularly. Paragraphs that
        will not align. Spacing that changes when the page renders. Quotation marks that appear as
        question marks or black diamonds. Line breaks that vanish or multiply. Text that fails a
        database import with an encoding error. Search-and-replace operations that skip matches which
        clearly exist. Word counts that disagree between two applications. Each of these traces back to
        characters that are present in the data but absent from the display.
      </p>

      <h2>Hidden Characters in AI Text: The Complete Breakdown</h2>
      <p>
        Understanding what you are removing helps you choose the right <strong>AI text cleaner</strong>{' '}
        and recognize problems faster. These are the artifacts that appear most often in ChatGPT, Gemini,
        Claude, and other AI output.
      </p>
      <h3>Zero-Width Characters</h3>
      <p>
        The zero-width space (U+200B), zero-width non-joiner (U+200C), zero-width joiner (U+200D), and
        word joiner (U+2060) render as nothing at all. They have no width and no visual mark. They
        nonetheless count as characters, break word boundaries, disrupt search and replace, inflate
        character counts, and can split words in ways that damage both readability for screen readers
        and parsing for search engines. The{' '}
        <Link href="/zero-width-space-remover">zero-width space remover</Link> and{' '}
        <Link href="/invisible-character-detector">invisible character detector</Link> target these
        directly, and they are the single most common artifact in AI-generated text.
      </p>
      <h3>Non-Breaking Spaces</h3>
      <p>
        The non-breaking space (U+00A0) looks exactly like an ordinary space but prevents line wrapping
        at that point. It is the reason a paragraph occasionally refuses to wrap correctly and pushes
        layout in unexpected directions. Because it is visually identical to a normal space, it survives
        proofreading indefinitely. It also breaks string comparison: text containing a non-breaking space
        will not match otherwise identical text containing a regular space, which quietly defeats
        deduplication and search.
      </p>
      <h3>Byte Order Marks and Directional Marks</h3>
      <p>
        The byte order mark (U+FEFF) sometimes appears at the start of copied text and causes parse
        errors in JSON, CSV, and configuration files. Left-to-right and right-to-left marks (U+200E,
        U+200F) control bidirectional text ordering and can reverse the apparent order of characters
        when they appear unexpectedly.
      </p>
      <h3>Smart Quotes and Typographic Punctuation</h3>
      <p>
        AI models produce typographically correct punctuation by default: curly quotation marks, curly
        apostrophes, en dashes, em dashes, and ellipsis characters. These are correct for publishing but
        actively harmful in code, CSV files, JSON, SQL queries, and any system expecting ASCII. A curly
        apostrophe in a code snippet is a syntax error. Curly quotes in a CSV break field parsing. The{' '}
        <Link href="/em-dash-remover">em dash remover</Link> handles the punctuation that has become the
        most recognizable signature of AI writing.
      </p>
      <h3>Whitespace Irregularities</h3>
      <p>
        AI output frequently contains double spaces after sentences, trailing spaces at line ends,
        inconsistent blank line counts between paragraphs, and mixed tabs and spaces in indented
        content. The <Link href="/ai-space-remover">AI space remover</Link>,{' '}
        <Link href="/remove-whitespace">whitespace remover</Link>, and{' '}
        <Link href="/remove-line-breaks">line break remover</Link> normalize these patterns.
      </p>
      <h3>Residual Markdown Syntax</h3>
      <p>
        When a model produces Markdown and you paste it into an editor that does not interpret Markdown,
        you get literal asterisks around bold text, pound signs before headings, and backticks around
        code. The <Link href="/clean-ai">Clean AI Text tool</Link> strips this residual syntax alongside
        hidden Unicode.
      </p>

      <h2>ChatGPT Text Cleaner: Cleaning OpenAI Output</h2>
      <p>
        ChatGPT is the most widely used AI writing assistant, and its output has recognizable
        characteristics. It applies smart quotes and em dashes consistently, produces Markdown formatting
        that survives copy-paste as literal syntax, and generates spacing patterns that vary between the
        web interface, the mobile apps, and the API.
      </p>
      <p>
        The <Link href="/chatgpt-space-remover">ChatGPT space remover</Link> handles spacing and blank
        line normalization. The{' '}
        <Link href="/chatgpt-watermark-remover">ChatGPT watermark remover</Link> targets hidden
        characters and formatting artifacts, and the{' '}
        <Link href="/chatgpt-watermark-detector">ChatGPT watermark detector</Link> inspects text without
        modifying it, which is the right first step when you want to know what is present before
        deciding what to remove.
      </p>
      <p>
        A note on the word watermark, since it causes confusion. OpenAI researched cryptographic
        watermarking that would statistically mark generated text, but no such system is confirmed active
        in consumer ChatGPT. What these tools address is not a cryptographic watermark but the practical
        set of formatting fingerprints AI output carries: hidden Unicode, characteristic punctuation, and
        spacing patterns. Removing them produces cleaner text; it is not defeating a cryptographic
        signature, because there is no confirmed signature to defeat.
      </p>

      <h2>Cleaning Output From Every Major AI Model</h2>
      <p>
        Different models produce different artifacts, which is why this category includes dedicated
        cleaners for each rather than a single generic tool.
      </p>
      <p>
        <strong>Google Gemini</strong> output tends toward heavier Markdown and distinctive spacing around
        headings and lists. The <Link href="/gemini-space-remover">Gemini space remover</Link>,{' '}
        <Link href="/gemini-watermark-cleaner">Gemini watermark cleaner</Link>, and{' '}
        <Link href="/gemini-watermark-detector">Gemini watermark detector</Link> handle these. Gemini is
        also notable because Google applies SynthID watermarking to Gemini-generated images, which is a
        genuine cryptographic watermark, unlike the text case.
      </p>
      <p>
        <strong>Claude</strong> produces long-form prose with characteristic paragraph spacing and
        punctuation. The <Link href="/claude-space-remover">Claude space remover</Link>,{' '}
        <Link href="/claude-watermark-cleaner">Claude watermark cleaner</Link>, and{' '}
        <Link href="/claude-watermark-detector">Claude watermark detector</Link> address it.
      </p>
      <p>
        <strong>Grok</strong>, <strong>DeepSeek</strong>, <strong>LLAMA</strong>,{' '}
        <strong>Mistral</strong>, and <strong>Perplexity</strong> each have dedicated cleaners as well:
        the <Link href="/grok-space-remover">Grok space remover</Link>,{' '}
        <Link href="/deepseek-space-remover">DeepSeek space remover</Link>,{' '}
        <Link href="/llama-space-remover">LLAMA space remover</Link>,{' '}
        <Link href="/mistral-space-remover">Mistral space remover</Link>, and{' '}
        <Link href="/perplexity-space-remover">Perplexity space remover</Link>, each paired with a
        matching watermark cleaner and detector. Perplexity deserves particular mention because its
        answers include citation markers and reference formatting that need handling beyond ordinary
        whitespace normalization.
      </p>
      <p>
        If you do not know which model produced a piece of text, or you are processing output from
        several, the general-purpose <Link href="/ai-text-cleaner">AI text cleaner</Link> and{' '}
        <Link href="/ai-watermark-remover">AI watermark remover</Link> apply the full set of cleanup
        rules regardless of source.
      </p>

      <h2>Cleaning AI-Generated Code</h2>
      <p>
        AI-generated code carries a distinct and more damaging set of problems, because artifacts that
        merely look untidy in prose cause outright failures in code. Smart quotes are the worst offender:
        a curly apostrophe or curly quotation mark in a string literal is a syntax error in every
        mainstream programming language, and the error message rarely points at the real cause because
        the characters look correct in the editor.
      </p>
      <p>
        The <Link href="/ai-code-cleaner">AI code cleaner</Link> normalizes indentation, removes trailing
        whitespace, strips invisible characters, and converts typographic punctuation back to ASCII. The{' '}
        <Link href="/ai-code-fixer">AI code fixer</Link> addresses structural issues including mixed tabs
        and spaces, inconsistent indentation depth, and formatting inconsistencies that break linters.
      </p>
      <p>
        Mixed indentation deserves specific attention because it is silently destructive in Python, where
        indentation is syntactic. A block indented with a tab in one line and four spaces in another may
        look identical but raises TabError or, worse, executes with different block structure than
        intended. YAML has the same sensitivity, and a tab where spaces were expected is an immediate
        parse error.
      </p>

      <h2>AI Detection Checkers: Turnitin, GPTZero, Originality, and Copyleaks</h2>
      <p>
        This category includes checkers that estimate how AI-generated text will fare against the major
        detection platforms:{' '}
        <Link href="/chatgpt-turnitin-checker">Turnitin</Link>,{' '}
        <Link href="/chatgpt-gptzero-checker">GPTZero</Link>,{' '}
        <Link href="/chatgpt-originality-checker">Originality.ai</Link>, and{' '}
        <Link href="/chatgpt-copyleaks-checker">Copyleaks</Link>, alongside the general{' '}
        <Link href="/chatgpt-detector">ChatGPT detector</Link>.
      </p>
      <p>
        It is important to be straightforward about what AI detection can and cannot do, because the
        marketing around it overstates its reliability considerably. AI detectors work by measuring
        statistical properties of text, chiefly perplexity, which reflects how predictable each word is
        given what came before, and burstiness, which reflects how much sentence length and complexity
        vary. Human writing tends to be less predictable and more variable. AI writing tends to be
        smoother and more uniform.
      </p>
      <p>
        These are probabilistic signals, not proof, and they produce false positives at rates high enough
        to cause real harm. Non-native English speakers are flagged disproportionately, because writing
        in a second language often produces simpler, more regular sentence construction that resembles
        the statistical profile of generated text. Technical and academic writing is flagged more often
        because formal conventions reduce variability. Well-edited human writing can score as AI
        precisely because editing removes irregularity.
      </p>
      <p>
        Use these checkers as a rough signal, not a verdict. If you wrote something yourself and a
        detector flags it, that is a limitation of the detector rather than evidence about your work. For
        deeper coverage of how detection actually operates, see the{' '}
        <Link href="/ai-tools/ai-detection-tools">AI detection tools</Link> category.
      </p>

      <h2>How to Clean AI Text: A Practical Workflow</h2>
      <p>
        A reliable process for taking AI output to publication-ready text looks like this.
      </p>
      <p>
        <strong>Step one: inspect before you change anything.</strong> Run the text through the{' '}
        <Link href="/ai-watermark-detector">AI watermark detector</Link> or{' '}
        <Link href="/invisible-character-detector">invisible character detector</Link> first. Knowing
        what is actually present tells you which cleanup steps you need and prevents you from applying
        transformations that were never necessary.
      </p>
      <p>
        <strong>Step two: remove invisible characters.</strong> This is the highest-value step and the
        one that resolves most pasting problems. Zero-width characters and non-breaking spaces cause
        effects wildly disproportionate to their visibility.
      </p>
      <p>
        <strong>Step three: normalize punctuation, but only if the destination requires it.</strong>{' '}
        Smart quotes and em dashes are correct and desirable for a blog post or a published article. They
        are actively harmful in code, CSV, JSON, or SQL. Match this decision to where the text is going
        rather than applying it reflexively.
      </p>
      <p>
        <strong>Step four: normalize whitespace.</strong> Collapse multiple spaces, strip trailing
        whitespace, and standardize blank lines between paragraphs using the{' '}
        <Link href="/ai-space-remover">AI space remover</Link>.
      </p>
      <p>
        <strong>Step five: strip residual Markdown</strong> if your destination does not render it, and{' '}
        <strong>step six: verify the result</strong> by pasting into the actual target application rather
        than assuming it worked. The destination editor is the only ground truth that matters.
      </p>

      <h2>Cleaning AI Text for Specific Platforms</h2>
      <p>
        The right cleanup settings depend on where the text is going. Applying the same aggressive
        normalization everywhere produces worse results than matching the cleanup to the destination.
      </p>
      <h3>WordPress and Blog Publishing</h3>
      <p>
        For <strong>WordPress</strong>, Ghost, Medium, and similar publishing platforms, remove invisible
        characters and normalize whitespace but keep smart quotes and em dashes. Typographic punctuation
        renders correctly and reads better in published prose. The critical step is stripping residual
        Markdown, because the WordPress block editor does not interpret Markdown on paste, so asterisks
        around bold text and pound signs before headings appear as literal characters in your published
        post. Hidden Unicode also affects how your content is indexed, since a zero-width space inside a
        keyword means search engines see a different word than the one you intended to rank for.
      </p>
      <h3>Google Docs and Microsoft Word</h3>
      <p>
        Word processors handle typographic punctuation well but are notoriously sensitive to whitespace
        irregularities. Inconsistent blank lines between paragraphs interact badly with paragraph spacing
        settings, producing gaps that will not respond to formatting controls. Non-breaking spaces are
        especially disruptive here because they prevent justification from working correctly. Normalize
        whitespace thoroughly and remove invisible characters before importing.
      </p>
      <h3>Email and Newsletter Platforms</h3>
      <p>
        Email clients render HTML inconsistently, and hidden characters compound that unpredictability.
        Non-breaking spaces can force horizontal scrolling on mobile email clients by preventing text
        from wrapping in narrow columns. Some spam filters also treat unusual Unicode density as a signal,
        since invisible characters are a known technique for evading keyword filters. Cleaning to plain
        text before composing reduces both problems.
      </p>
      <h3>Learning Management Systems</h3>
      <p>
        Canvas, Blackboard, Moodle, and similar platforms frequently run older text processing pipelines
        that handle extended Unicode poorly. Smart quotes commonly appear as question marks or black
        diamond replacement characters in submitted assignments. For LMS submissions, normalizing
        punctuation to plain ASCII alongside removing invisible characters is usually the safest choice.
      </p>
      <h3>Code Editors and Version Control</h3>
      <p>
        For code destinations, convert all typographic punctuation to ASCII, normalize indentation, and
        strip trailing whitespace. Trailing whitespace matters beyond tidiness: it produces noisy diffs in
        Git where lines appear changed although nothing meaningful differs, which makes code review harder
        and pollutes blame history.
      </p>

      <h2>Common AI Text Problems and Their Fixes</h2>
      <p>
        A quick diagnostic reference for the symptoms people report most often when working with{' '}
        <strong>ChatGPT text cleanup</strong> and output from other models.
      </p>
      <p>
        <strong>Text looks fine in the editor but wrong when published.</strong> Almost always invisible
        Unicode. The editor and the rendering engine treat the characters differently. Run the invisible
        character detector to confirm, then clean.
      </p>
      <p>
        <strong>Quotation marks appear as question marks or black diamonds.</strong> An encoding mismatch:
        the text contains UTF-8 smart quotes but the destination is interpreting bytes as Latin-1 or
        ASCII. Normalize punctuation to plain ASCII before pasting.
      </p>
      <p>
        <strong>Paragraph spacing will not stay consistent.</strong> Mixed blank line counts combined with
        non-breaking spaces. Normalize whitespace to standardize the gaps between paragraphs.
      </p>
      <p>
        <strong>A line refuses to wrap and breaks the layout.</strong> A non-breaking space is preventing
        the wrap at that point. It is invisible and identical to a normal space, so it will not be found
        by reading the text.
      </p>
      <p>
        <strong>Bullet points render as literal asterisks or hyphens.</strong> Residual Markdown syntax
        pasted into an editor that does not interpret it. Strip the Markdown or paste into an editor that
        renders it.
      </p>
      <p>
        <strong>Character count exceeds a field limit although the visible text is shorter.</strong>{' '}
        Invisible characters counting toward the total. This affects meta descriptions, social media
        posts, and any field with a hard character cap.
      </p>

      <h2>Privacy: Why Client-Side Cleaning Matters</h2>
      <p>
        Every AI cleanup tool in this category processes text entirely in your browser using client-side
        JavaScript. Nothing is uploaded, transmitted, logged, or stored.
      </p>
      <p>
        This matters more for text cleaning than for almost any other utility category, because of what
        people clean. Unpublished manuscripts. Confidential business documents. Student coursework.
        Client deliverables under NDA. Internal reports. Legal drafts. Medical documentation. Text you
        paste into a server-based cleaning tool is transmitted across the network and processed on
        infrastructure you do not control, where it may be logged, cached, retained, or used for model
        training depending on terms you probably did not read.
      </p>
      <p>
        Client-side processing eliminates that exposure structurally rather than promising to handle it
        responsibly. You can verify the claim yourself in about ten seconds: open your browser developer
        tools, select the Network tab, paste your text, and run the cleaner. No request is made. It also
        means these tools work offline once loaded, respond instantly with no network round trip, and
        impose no length limits beyond your device memory.
      </p>

      <h2>Unicode Normalization and Why Identical Text Can Differ</h2>
      <p>
        One subtlety worth understanding is that Unicode often provides more than one way to encode the
        same visible character. The letter e with an acute accent can be a single precomposed code point
        (U+00E9) or a plain letter e followed by a combining acute accent (U+0065 U+0301). Both render
        identically. Neither is wrong. But they are different byte sequences, so string comparison
        reports them as unequal, search fails to match across them, and database uniqueness constraints
        treat them as distinct values.
      </p>
      <p>
        AI models can emit either form depending on their training data and the language involved, which
        makes this a real concern for multilingual content. Unicode defines normalization forms to
        resolve it, chiefly NFC, which prefers composed characters, and NFD, which decomposes them. NFC
        is the standard choice for web content and the form the W3C recommends. Normalizing to NFC before
        storing or comparing text eliminates an entire class of bugs that are otherwise extremely
        difficult to diagnose, precisely because the two versions look identical in every editor and
        every log output.
      </p>
      <p>
        This also explains a puzzling behavior people encounter with accented text and non-Latin scripts:
        a search that works in one application fails in another, or a deduplication pass leaves entries
        that appear to be exact duplicates. The underlying text differs at the byte level even though it
        matches character for character on screen.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        Cleaning is one part of a larger workflow. If you need to change how text reads rather than how it
        is encoded, the <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link> rewrite AI
        drafts to sound natural. The{' '}
        <Link href="/ai-tools/ai-detection-tools">AI detection tools</Link> analyze text for signals of
        machine generation. The{' '}
        <Link href="/ai-tools/ai-watermark-tools">AI watermark tools</Link> handle images rather than
        text, including SynthID and generative watermarks. The{' '}
        <Link href="/ai-tools/text-tools">general text tools</Link> cover case conversion, duplicate
        removal, and word counting, and the{' '}
        <Link href="/ai-tools/writing-tools">writing tools</Link> handle grammar, readability, and tone.
        The complete <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is an AI text cleaner?',
    answer:
      'An AI text cleaner is a tool that removes the technical artifacts language models embed in their output while leaving your words unchanged. It strips invisible Unicode characters, zero-width spaces, non-breaking spaces, byte order marks, and irregular whitespace, and it can normalize smart quotes and em dashes to plain ASCII. It is not a rewriter: your wording, meaning, and structure stay exactly as you wrote them.',
  },
  {
    category: 'General',
    question: 'Why does ChatGPT text paste badly into WordPress or Google Docs?',
    answer:
      'Because ChatGPT output is not plain text. It carries invisible Unicode, non-breaking spaces, smart quotes, em dashes, and sometimes literal Markdown syntax. Your editor renders those characters differently than the ChatGPT interface did, which is why spacing collapses, quotation marks look wrong, and paragraph structure breaks. Running the text through an AI text cleaner before pasting resolves it.',
  },
  {
    category: 'General',
    question: 'Will cleaning change my wording or meaning?',
    answer:
      'No. These tools perform technical cleanup only. They remove characters that should not be there and normalize malformed spacing. They never paraphrase, rewrite, restructure, or substitute words. If you want the wording itself changed, that is what the AI humanizer tools do, and they are a separate category.',
  },
  {
    category: 'General',
    question: 'Are these AI cleanup tools free?',
    answer:
      'Yes. All 111 tools in this category are free with no account, no signup, and no usage limits. There is no trial period and no length cap on the text you can clean.',
  },
  {
    category: 'Technical',
    question: 'What is a zero-width space and why does it matter?',
    answer:
      'A zero-width space (U+200B) is a Unicode character with no visual width and no visible mark. It is completely invisible, yet it still counts as a character, breaks word boundaries, disrupts search and replace, inflates character counts, and can split words in ways that harm both screen reader output and search engine parsing. It is the single most common artifact in AI-generated text.',
  },
  {
    category: 'Technical',
    question: 'What is a non-breaking space and how is it different from a normal space?',
    answer:
      'A non-breaking space (U+00A0) looks identical to a regular space but prevents a line from wrapping at that point. Because it is visually indistinguishable, it survives proofreading indefinitely. It also breaks string comparison, so text containing one will not match otherwise identical text containing a regular space, which quietly defeats search and deduplication.',
  },
  {
    category: 'Technical',
    question: 'What is a byte order mark and why does it break my CSV or JSON?',
    answer:
      'A byte order mark (U+FEFF) is an invisible character that sometimes appears at the very start of copied text. Parsers for JSON, CSV, and configuration formats often do not expect it and fail with an error pointing at position zero. Because it is invisible, the file looks perfectly correct in an editor, which makes it a frustrating bug to track down.',
  },
  {
    category: 'Technical',
    question: 'Does ChatGPT actually watermark its text?',
    answer:
      'There is no confirmed cryptographic watermark in consumer ChatGPT output. OpenAI has researched statistical watermarking, but no such system is verified as active. What these tools remove is not a cryptographic signature but the practical formatting fingerprints AI text carries: hidden Unicode, characteristic punctuation such as em dashes, and distinctive spacing patterns.',
  },
  {
    category: 'Technical',
    question: 'Why do em dashes signal AI writing?',
    answer:
      'Language models use em dashes far more frequently than most human writers do, because their training data over-represents polished editorial prose where the em dash is a standard device. The em dash is not wrong, but its unusually high density has become one of the most recognizable stylistic markers of AI-generated text. The em dash remover converts them to hyphens or restructures the punctuation.',
  },
  {
    category: 'Technical',
    question: 'Should I remove smart quotes and em dashes from my text?',
    answer:
      'It depends entirely on the destination. For a blog post, article, or any published prose, smart quotes and em dashes are typographically correct and should stay. For code, CSV, JSON, SQL, or any system expecting ASCII, they cause real failures and must be converted. A curly apostrophe inside a string literal is a syntax error in every mainstream programming language.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between a watermark cleaner and a watermark detector?',
    answer:
      'A detector inspects text and reports what it finds without changing anything, which makes it the right first step when you want to understand what is present. A cleaner removes the artifacts it finds. Running the detector first tells you which cleanup steps you actually need and stops you applying transformations that were never necessary.',
  },
  {
    category: 'Usage',
    question: 'Which tool should I use if I do not know which AI model produced the text?',
    answer:
      'Use the general-purpose AI text cleaner or AI watermark remover. Both apply the complete set of cleanup rules regardless of source model. The model-specific tools are tuned for the particular patterns each model produces, but the general tools handle output from any of them.',
  },
  {
    category: 'Usage',
    question: 'How do I clean AI text for WordPress specifically?',
    answer:
      'Remove invisible characters and normalize whitespace, but keep smart quotes and em dashes, since WordPress renders typographic punctuation correctly and it looks better in published prose. If your AI output still contains literal Markdown such as asterisks around bold text, strip that too, because the WordPress block editor will not interpret it on paste.',
  },
  {
    category: 'Usage',
    question: 'How do I clean AI-generated code?',
    answer:
      'Use the AI code cleaner, which converts typographic punctuation back to ASCII, normalizes indentation, removes trailing whitespace, and strips invisible characters. Smart quotes are the critical fix here: a curly apostrophe in a string literal breaks compilation in every mainstream language, and the error message rarely points at the real cause since the characters look correct.',
  },
  {
    category: 'Usage',
    question: 'Can I clean text for an academic paper or assignment?',
    answer:
      'Yes, and cleaning is legitimate regardless of how the text was produced, because it only fixes formatting and encoding. It does not change your argument, your evidence, or your wording. Separately, follow your institution AI policy regarding whether and how AI assistance may be used and disclosed. Cleaning formatting and complying with academic integrity rules are independent questions.',
  },
  {
    category: 'Usage',
    question: 'Does cleaning help my text pass AI detection?',
    answer:
      'Not meaningfully. AI detectors analyze statistical properties of word choice and sentence structure, not invisible characters or spacing. Cleaning makes text technically portable; it does not change the linguistic patterns detectors measure. Anyone claiming that removing hidden characters defeats AI detection is describing a mechanism that does not exist.',
  },
  {
    category: 'Usage',
    question: 'Is there a length limit on how much text I can clean?',
    answer:
      'No limit is imposed by us, because nothing is uploaded. The practical ceiling is your own device memory, since processing happens locally in your browser. Very long documents may take a moment on low-memory devices, but the size caps that server-based tools apply do not exist here.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my text uploaded to a server when I clean it?',
    answer:
      'No. Every tool in this category processes text entirely in your browser using client-side JavaScript. Nothing is uploaded, transmitted, logged, or stored. You can verify this by opening your browser developer tools, selecting the Network tab, and confirming that no request fires when you run a cleaner.',
  },
  {
    category: 'Privacy and Security',
    question: 'Can I safely clean confidential or unpublished documents?',
    answer:
      'Yes. Because processing is client-side, confidential material never leaves your machine. This matters particularly for text cleaning, since people routinely clean unpublished manuscripts, client work under NDA, internal reports, and legal drafts. A server-based cleaner would transmit all of that to infrastructure you do not control.',
  },
  {
    category: 'Privacy and Security',
    question: 'Do these tools work offline?',
    answer:
      'Yes, once the page has loaded. The JavaScript that performs the cleaning runs locally, so it keeps working without a network connection. You need connectivity only for the initial page load.',
  },
  {
    category: 'Detection and Limits',
    question: 'How accurate are AI detectors like Turnitin and GPTZero?',
    answer:
      'Considerably less accurate than their marketing suggests. They measure statistical properties such as perplexity and burstiness, which are probabilistic signals rather than proof. False positives are common enough to cause real harm, particularly for non-native English speakers, technical and academic writing, and heavily edited prose, all of which share the regularity that detectors read as machine-generated.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why was my own writing flagged as AI-generated?',
    answer:
      'Because detectors measure regularity, not authorship. Writing that is well-edited, formal, technical, or produced by a non-native English speaker tends to have consistent sentence length and predictable word choice, which is exactly the statistical profile detectors associate with AI. A flag on work you wrote yourself is a limitation of the detector, not evidence about your work.',
  },
  {
    category: 'Detection and Limits',
    question: 'What is the difference between AI detection and plagiarism detection?',
    answer:
      'Plagiarism detection compares your text against a corpus of existing documents to find matching passages, which is a deterministic lookup. AI detection estimates whether text was machine-generated from its statistical properties alone, with nothing to compare against. Plagiarism results can be verified by inspecting the source they matched; AI detection results cannot be verified at all.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my text fail a database import with an encoding error?',
    answer:
      'Usually a byte order mark at the start of the file or invisible Unicode characters the target encoding cannot represent. If the destination column expects Latin-1 or ASCII and your text contains curly quotes, em dashes, or zero-width characters, the import fails or silently substitutes replacement characters. Cleaning to plain ASCII before import resolves it.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do my word counts differ between applications?',
    answer:
      'Different applications count differently, and invisible characters make the disagreement worse. Zero-width spaces break word boundaries, so one application may see two words where another sees one. Non-breaking spaces may or may not be treated as word separators depending on the tool. Cleaning the text first makes counts consistent.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does search and replace skip matches that clearly exist?',
    answer:
      'Almost always an invisible character sitting inside the string you are searching for. A zero-width space between two letters means the text no longer matches your search term, even though it looks identical on screen. Similarly, a non-breaking space will not match a query containing a regular space. Running the invisible character detector reveals what is actually there.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between an AI cleaner and an AI humanizer?',
    answer:
      'A cleaner fixes encoding and formatting without touching your words. A humanizer rewrites the words themselves to vary sentence rhythm and word choice so the prose reads as human-written. They solve different problems: use a cleaner when text pastes badly, and a humanizer when text reads mechanically. They are complementary, and running a cleaner after a humanizer is a sensible final step.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Do I need a model-specific cleaner or is the general one enough?',
    answer:
      'The general AI text cleaner handles output from any model and is the right default. The model-specific tools are tuned for patterns particular to each model, such as the citation markers Perplexity adds or the heavier Markdown Gemini produces. If you consistently work with one model, its dedicated cleaner may catch a little more.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'My Python code from ChatGPT raises TabError. Why?',
    answer:
      'Mixed indentation. The code contains tabs on some lines and spaces on others, which look identical in most editors but are different characters. Python treats indentation as syntax, so the mismatch raises TabError or, worse, produces block structure you did not intend. The AI code cleaner normalizes indentation to one consistent style.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What is the right order of operations when cleaning AI text?',
    answer:
      'Inspect with a detector first so you know what is present. Then remove invisible characters, which resolves most problems. Then normalize punctuation only if the destination requires ASCII. Then normalize whitespace, then strip residual Markdown if the target does not render it. Finally, verify by pasting into the real destination application rather than assuming the result is correct.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Should I clean before or after editing my AI draft?',
    answer:
      'Clean early, then clean again at the end. Cleaning early stops hidden characters from propagating as you copy passages around and makes search and replace behave predictably while you edit. A final pass catches anything reintroduced by pasting additional AI output during revision.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
