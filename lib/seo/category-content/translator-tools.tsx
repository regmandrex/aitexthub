import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>Translator tools</strong> in this category convert English into stylized, historical,
        fictional, and novelty forms. This is not language translation in the conventional sense. The
        tools here transform register, period, and style rather than moving text between natural
        languages.
      </p>
      <p>
        They fall into groups. Historical English converters produce{' '}
        <Link href="/shakespearean-translator">Shakespearean</Link>,{' '}
        <Link href="/middle-english-translator">Middle English</Link>,{' '}
        <Link href="/old-english-translator">Old English</Link>, and{' '}
        <Link href="/medieval-translator">medieval</Link> phrasing. Fictional language converters cover{' '}
        <Link href="/simlish-translator">Simlish</Link> from The Sims. Music and subculture converters
        include the <Link href="/cartinese-translator">Cartinese</Link> and{' '}
        <Link href="/playboi-carti-translator">Playboi Carti</Link> translators, and{' '}
        <Link href="/ganglish-translator">Ganglish</Link>. Style converters handle{' '}
        <Link href="/fancy-english-translator">fancy English</Link> and{' '}
        <Link href="/gibberish-translator">gibberish</Link>. There are also Korean-language tools for{' '}
        <Link href="/korean-dialect-translator">regional dialects</Link> and a{' '}
        <Link href="/korean-cat-translator">Korean cat translator</Link>, plus a{' '}
        <Link href="/navajo-translator">Navajo translator</Link>.
      </p>
      <p>
        One tool in this category is different in kind and worth flagging immediately. The Navajo
        translator handles a living language spoken by tens of thousands of people, not a style or a
        fictional construct, and it is covered separately below with the care that warrants.
      </p>
      <p>
        Most of these run entirely in your browser, applying rule-based substitution and pattern matching
        rather than sending text anywhere. They are built purely for creative writing, games, roleplay, and
        entertainment. The sections below cover what distinguishes each period of English, how dialect and
        register work in fiction, how these converters operate internally and where they predictably fail,
        and how to use stylized language without exhausting your readers.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Historical English Converters</h2>
      <p>
        The largest group produces English from earlier periods, and the distinctions between them are
        more substantial than most people assume.
      </p>
      <h3>Shakespearean and Early Modern English</h3>
      <p>
        The <Link href="/shakespearean-translator">Shakespearean translator</Link> produces Early Modern
        English, the language of roughly 1500 to 1700. This is the period most people picture when they
        imagine old-fashioned English, and it is entirely readable to modern speakers with occasional
        vocabulary help.
      </p>
      <p>
        The defining features are the second-person pronouns and their verb forms. Thou is the singular
        subject, thee the singular object, thy and thine the possessives, and ye the plural subject. The
        crucial point most imitations get wrong is that this was not simply formal or archaic: thou was
        the intimate and familiar form used with close friends, family, children, and social inferiors,
        while you was the respectful plural form used with strangers and superiors. Using thou to address
        a stranger was a deliberate insult, and Shakespeare uses this distinction dramatically.
      </p>
      <p>
        Verb endings follow the pronoun. Second-person singular takes -est, so thou speakest and thou
        hast. Third-person singular takes -eth, so he speaketh and she hath. A common error in imitation
        is attaching -eth to everything regardless of person, which produces text that reads as
        Shakespearean only to someone who has not read Shakespeare.
      </p>
      <h3>Middle English</h3>
      <p>
        The <Link href="/middle-english-translator">Middle English translator</Link> targets roughly 1100
        to 1500, the language of Chaucer. This is substantially harder for modern readers, with different
        spelling conventions, vocabulary that has since shifted meaning or vanished, and grammar retaining
        inflections English later lost.
      </p>
      <p>
        Middle English emerged after the Norman Conquest brought enormous French vocabulary into Old
        English, which is why English has so many near-synonym pairs where one word is Germanic and the
        other Romance: begin and commence, kingly and royal, freedom and liberty. The Germanic word is
        usually plainer and the French one more formal, a register distinction still active today.
      </p>
      <h3>Old English</h3>
      <p>
        The <Link href="/old-english-translator">Old English translator</Link> targets roughly 450 to 1100,
        the language of Beowulf. Old English is genuinely a foreign language to modern speakers, not merely
        archaic. It is a Germanic language with four grammatical cases, three genders, and vocabulary
        largely unrecognizable today, and it uses letters that have since left the alphabet, notably thorn
        and eth for the th sounds.
      </p>
      <p>
        Anyone approaching Old English text without study finds it unreadable, which is worth knowing
        before using it for anything readers are meant to follow.
      </p>
      <h3>Medieval Style</h3>
      <p>
        The <Link href="/medieval-translator">medieval translator</Link> produces a stylized register
        rather than a historical reconstruction, aiming at the flavour readers associate with the period
        from fantasy fiction and games. This is often what people actually want when they ask for
        old-fashioned English: something evoking a period without demanding scholarship.
      </p>

      <h2>Fictional and Constructed Languages</h2>
      <p>
        The <Link href="/simlish-translator">Simlish translator</Link> handles the invented language from
        The Sims. Simlish is deliberately not a real language: it was designed to sound emotionally
        expressive while being semantically empty, so players project their own meaning onto character
        interactions. This was a considered design decision, since a real language would have needed
        translation for every market and would have constrained how players imagine their characters.
      </p>
      <p>
        Constructed languages fall on a spectrum. At one end sit fully developed ones with real grammar
        and lexicon, such as Tolkien&apos;s Quenya, Klingon, and Dothraki, which can be learned and used.
        At the other sit sound-alike systems like Simlish, built for atmosphere rather than communication.
        Both are legitimate design choices serving different purposes.
      </p>

      <h2>Music, Subculture, and Novelty Converters</h2>
      <p>
        The <Link href="/cartinese-translator">Cartinese translator</Link> and{' '}
        <Link href="/playboi-carti-translator">Playboi Carti translator</Link> render text in the
        distinctive stylized orthography associated with that artist and fanbase, where deliberate
        misspelling, letter substitution, and unconventional capitalization function as an in-group
        marker.
      </p>
      <p>
        This is worth noting as a genuine linguistic phenomenon rather than mere noise. Orthographic
        variation as identity signalling has a long history online, from early leetspeak through to
        contemporary fandom conventions. Writing a word in a non-standard way that other members
        immediately recognize demonstrates belonging in a way standard spelling cannot.
      </p>
      <p>
        The <Link href="/ganglish-translator">Ganglish translator</Link> applies slang register
        conversion, and the <Link href="/gibberish-translator">gibberish translator</Link> produces
        deliberately nonsensical output. Gibberish generators serve real purposes beyond amusement:
        placeholder text for design mockups, testing how systems handle unexpected input, and word games.
      </p>
      <p>
        The <Link href="/fancy-english-translator">fancy English translator</Link> elevates register,
        substituting formal and ornate vocabulary for plain terms. The result is usually comic, which is
        itself instructive: it demonstrates that register mismatch is funny precisely because English
        carries strong expectations about which words suit which contexts.
      </p>

      <h2>Korean Language Tools</h2>
      <p>
        The <Link href="/korean-dialect-translator">Korean dialect translator</Link> converts between
        standard Korean and regional varieties. Korean dialects differ substantially in vocabulary,
        intonation, and sentence endings. Gyeongsang dialect from the southeast, associated with Busan and
        Daegu, has distinctive pitch patterns and verb endings that mark it immediately. Jeolla dialect
        from the southwest differs again, and Jeju is divergent enough that some linguists classify it as a
        separate language rather than a dialect.
      </p>
      <p>
        Dialect carries strong social meaning in Korea. It signals regional origin, appears constantly in
        film and television for characterization, and shifts the emotional register of a line in ways
        standard Korean does not.
      </p>
      <p>
        The <Link href="/korean-cat-translator">Korean cat translator</Link> is a novelty tool applying a
        cat-speech pattern to Korean text, comparable to the English convention of replacing sounds with
        meow variants. Different languages have different conventions for representing animal sounds,
        which is why Korean cats say different things than English ones in writing.
      </p>

      <h2>The Navajo Translator and Language Respect</h2>
      <p>
        The <Link href="/navajo-translator">Navajo translator</Link> differs fundamentally from everything
        else in this category, and it is worth being explicit about that.
      </p>
      <p>
        Navajo, or Diné bizaad, is a living language spoken by tens of thousands of people. It is not a
        novelty, a style, or a fictional construct. It belongs to the Athabaskan family and is
        grammatically complex in ways that make automated translation genuinely difficult, with verb
        morphology encoding distinctions English handles through separate words entirely.
      </p>
      <p>
        Navajo is historically significant beyond its linguistic interest. Navajo code talkers served in
        the Second World War, using the language as an unbroken military code, and that contribution was
        classified for decades afterwards.
      </p>
      <p>
        Two things follow. First, automated Navajo translation is unreliable, and its grammatical
        structure means naive word substitution produces output that is not merely awkward but wrong.
        Second, the language survived active suppression, including the punishment of children for
        speaking it in boarding schools, and revitalization efforts continue today. Treating it as a
        novelty generator alongside gibberish would be a mistake. If you are working with Navajo
        seriously, consult speakers and community resources rather than relying on any automated tool.
      </p>

      <h2>How English Changed Between These Periods</h2>
      <p>
        Understanding what actually shifted makes these converters easier to use well, because you can
        tell which features carry the period and which are decoration.
      </p>
      <p>
        <strong>English lost its inflections.</strong> Old English marked grammatical role through word
        endings, using four cases much as German and Latin do. Because endings signalled who did what to
        whom, word order was comparatively free. As those endings eroded, English came to depend on
        position instead, which is why modern English word order is rigid where older English was not.
        The traces that survive are the pronoun cases: he and him, she and her, who and whom.
      </p>
      <p>
        <strong>The Great Vowel Shift changed pronunciation without changing spelling.</strong> Between
        roughly 1400 and 1700, long vowels moved substantially. Spelling had begun to standardize with
        printing before the shift finished, which is why English spelling records a pronunciation nobody
        uses. The silent e, the odd vowel in words like great and break, and much of what makes English
        spelling irregular date from this mismatch.
      </p>
      <p>
        <strong>Vocabulary arrived in layers.</strong> Germanic core vocabulary from Old English, Norse
        words from Viking settlement including the pronoun they, French after the Norman Conquest, and
        Latin and Greek during the Renaissance. Each layer settled into a register, which is why the plain
        word is usually Germanic and the formal one usually Latinate. This is a live resource for writing
        rather than a historical curiosity: choosing between ask and enquire is choosing a register. The
        pattern is remarkably consistent once noticed, and it explains why plain Anglo-Saxon vocabulary
        reads as direct and honest while Latinate vocabulary reads as official, evasive, or educated
        depending on context. Writers exploit this constantly, usually without naming it.
      </p>
      <p>
        <strong>The second-person distinction collapsed.</strong> English once had thou for singular
        intimate and you for plural or respectful, exactly like French tu and vous. You gradually took
        over both roles, leaving modern English unable to mark the distinction at all, which is why
        regional forms like y&apos;all and you lot keep emerging to fill the gap.
      </p>
      <p>
        <strong>Spelling standardized late.</strong> Before printing and dictionaries, spelling was
        largely phonetic and variable, and writers spelled the same word differently within one document
        without anyone objecting. Standardization is recent enough that our sense of correct spelling as a
        fixed thing is a historical anomaly rather than the norm.
      </p>

      <h2>Dialect and Register in Fiction</h2>
      <p>
        These tools are mostly used for creative work, where the craft question is how to convey a voice
        without costing the reader.
      </p>
      <p>
        <strong>Phonetic spelling has largely fallen out of favour.</strong> Nineteenth-century fiction
        rendered accents by respelling words, and it reads badly now. It slows reading substantially, it
        implicitly treats one accent as standard and others as deviations requiring notation, and it
        frequently patronizes the characters it marks. Contemporary practice conveys voice through word
        choice, rhythm, and syntax instead.
      </p>
      <p>
        <strong>Syntax carries dialect more effectively than spelling.</strong> Sentence construction,
        idiom, and the order in which information arrives distinguish speakers convincingly without a
        single respelled word. A character who front-loads emotion and one who buries it read as different
        people even in identical vocabulary.
      </p>
      <p>
        <strong>Register signals more than education.</strong> Shifting between formal and casual within a
        scene tells the reader something about the relationship. A character who becomes more formal under
        stress and one who becomes cruder are both revealing themselves, and that movement is usually more
        interesting than a fixed voice.
      </p>
      <p>
        <strong>Anachronism is felt before it is identified.</strong> A period-set scene containing a
        modern idiom breaks immersion even for readers who could not name what went wrong. This cuts both
        ways: vocabulary that feels archaic is sometimes recent, and words that feel modern are sometimes
        centuries old, so intuition about period is unreliable.
      </p>
      <p>
        <strong>The reader supplies more than writers expect.</strong> A few well-chosen markers establish
        a voice, after which readers maintain it themselves. This is why restraint works: the effect
        persists long after the explicit signals stop, and continuing to signal heavily produces
        diminishing returns and mounting fatigue.
      </p>

      <h2>Using Stylized Language in Creative Work</h2>
      <p>
        These converters are most useful as a starting point, and a few principles make the results
        better.
      </p>
      <p>
        <strong>Restraint beats saturation.</strong> Dialect and archaic language work best applied
        lightly. A character who uses period vocabulary occasionally reads as belonging to their setting;
        one whose every line is dense with thee and thou becomes exhausting within a page. Published
        historical fiction typically uses far less archaism than readers assume, relying on rhythm and
        word choice rather than grammar.
      </p>
      <p>
        <strong>Consistency matters more than accuracy.</strong> Readers rarely check whether your
        Elizabethan English is grammatically correct for 1595, but they notice immediately when a
        character shifts register between scenes without reason.
      </p>
      <p>
        <strong>Comprehension is the constraint.</strong> If readers cannot follow it, atmosphere is not
        worth the cost. This is why medieval-flavoured English works in fantasy while accurate Middle
        English does not.
      </p>
      <p>
        <strong>Check output rather than trusting it.</strong> Rule-based converters apply patterns
        mechanically and produce errors, particularly attaching verb endings to the wrong person. If the
        text matters, verify it.
      </p>
      <p>
        <strong>Read it aloud.</strong> Stylized language is largely about sound. Passages that look right
        frequently sound wrong, and speaking them is the fastest way to find out. This matters most for
        dialogue, where the reader is imagining a voice and any phrase that cannot comfortably be spoken
        will register as false to the reader.
      </p>

      <h2>How Style Converters Work</h2>
      <p>
        Knowing the mechanism explains both what these tools do well and where they predictably fail.
      </p>
      <p>
        <strong>Most are rule-based substitution systems.</strong> They hold a dictionary mapping modern
        words to period or stylized equivalents, plus pattern rules for transforming word endings and
        common constructions. Input is tokenized, each token checked against the dictionary, and
        transformation rules applied.
      </p>
      <p>
        <strong>This is why context errors are common.</strong> A substitution table has no model of
        meaning, so a word with several senses gets the same replacement regardless of which sense was
        intended. Words that are both nouns and verbs are a frequent failure point, since the correct
        period equivalent often differs by part of speech.
      </p>
      <p>
        <strong>Grammatical agreement is the hardest part.</strong> Applying Early Modern verb endings
        correctly requires identifying the subject and its person and number, which is a parsing problem
        rather than a lookup. Simpler implementations attach endings by pattern, which is exactly why
        -eth so often lands on verbs that should take -est.
      </p>
      <p>
        <strong>Novelty converters are usually simpler still.</strong> Gibberish and sound-alike systems
        typically apply phonetic transformation rules to syllables without any dictionary, which is why
        they handle arbitrary input gracefully while period converters degrade on unusual vocabulary.
      </p>
      <p>
        <strong>Coverage determines quality.</strong> A converter with a large curated dictionary produces
        markedly better output than one relying on general rules, because most of the period flavour comes
        from vocabulary rather than grammar. Words absent from the dictionary pass through unchanged,
        which is why output often mixes converted and modern terms.
      </p>

      <h2>Practical Uses Beyond Novelty</h2>
      <p>
        These tools have applications that are not purely for amusement.
      </p>
      <p>
        <strong>Tabletop roleplaying.</strong> Game masters running fantasy or historical settings use
        period converters to give non-player characters distinct voices quickly, which matters when you
        are improvising dialogue for several characters in one session.
      </p>
      <p>
        <strong>Teaching language history.</strong> Seeing the same sentence rendered across Old, Middle,
        and Early Modern English makes the scale of change concrete in a way description does not. The
        contrast between periods is far more legible side by side than in isolation.
      </p>
      <p>
        <strong>Game and interactive fiction development.</strong> Establishing a consistent voice for
        in-game text, item descriptions, and dialogue across a large body of content is easier with a
        reference transformation than by hand.
      </p>
      <p>
        <strong>Testing and placeholder content.</strong> Gibberish and stylized text exercise how
        interfaces handle unexpected characters, unusual word lengths, and text that cannot be
        pattern-matched, which is genuinely useful in software testing.
      </p>
      <p>
        <strong>Social and creative play.</strong> Themed events, in-character forum posts, community
        challenges, and correspondence games all use stylized language as part of the activity rather than
        as decoration around it.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For humanizing AI-generated creative writing, including roleplay, fanfiction, and screenplays, see
        the <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link>. For name generators
        across fictional settings, see the{' '}
        <Link href="/ai-tools/generator-tools">generator tools</Link>. For Unicode text styling and case
        conversion, see the <Link href="/ai-tools/text-tools">text tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What kind of translators are these?',
    answer:
      'Style and novelty converters rather than language translators. They transform English into historical periods, fictional languages, stylized registers, and novelty forms. They are built for creative writing, games, roleplay, and entertainment rather than for translating between natural languages.',
  },
  {
    category: 'General',
    question: 'Are these translator tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits. Most run entirely in your browser using rule-based substitution.',
  },
  {
    category: 'General',
    question: 'Can I use the output in published work?',
    answer:
      'Yes, there is no restriction from us and no attribution required. Do check the output rather than trusting it, since rule-based converters apply patterns mechanically and make predictable errors that a reader familiar with the style will notice.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between thou and you in Shakespearean English?',
    answer:
      'It was social, not formal. Thou was the intimate singular used with close friends, family, children, and social inferiors, while you was the respectful plural used with strangers and superiors. Using thou to address a stranger was a deliberate insult, and Shakespeare exploits this dramatically.',
  },
  {
    category: 'Technical',
    question: 'When do I use -est and -eth verb endings?',
    answer:
      'They follow the person. Second-person singular takes -est, so thou speakest and thou hast. Third-person singular takes -eth, so he speaketh and she hath. Attaching -eth to every verb regardless of person is the most common error in imitation Shakespearean English.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between Old, Middle, and Early Modern English?',
    answer:
      'Old English, roughly 450 to 1100, is the language of Beowulf and is genuinely foreign to modern speakers, with four cases and three genders. Middle English, roughly 1100 to 1500, is Chaucer and is difficult but partly readable. Early Modern English, roughly 1500 to 1700, is Shakespeare and is readable with occasional vocabulary help.',
  },
  {
    category: 'Technical',
    question: 'Why does English have so many pairs of near-synonyms?',
    answer:
      'The Norman Conquest brought enormous French vocabulary into Old English, producing pairs where one word is Germanic and the other Romance: begin and commence, kingly and royal, freedom and liberty. The Germanic word is usually plainer and the French one more formal, a register distinction still active in English today.',
  },
  {
    category: 'Technical',
    question: 'Why is Old English unreadable when Shakespeare is not?',
    answer:
      'Because Old English is a different language rather than an older style. It is Germanic with four grammatical cases, three genders, vocabulary largely unrecognizable today, and letters that have since left the alphabet such as thorn and eth. Shakespeare is modern English with older conventions.',
  },
  {
    category: 'Technical',
    question: 'Is Simlish a real language?',
    answer:
      'No, deliberately so. It was designed to sound emotionally expressive while carrying no semantic content, so players project their own meaning onto character interactions. A real language would have required translation for every market and would have constrained how players imagine their characters.',
  },
  {
    category: 'Usage',
    question: 'How much archaic language should I use in historical fiction?',
    answer:
      'Far less than most people assume. Published historical fiction typically relies on rhythm and word choice rather than grammatical archaism. A character using period vocabulary occasionally reads as belonging to their setting, while one whose every line is dense with thee and thou becomes exhausting within a page.',
  },
  {
    category: 'Usage',
    question: 'What matters more, historical accuracy or consistency?',
    answer:
      'Consistency. Readers rarely check whether your Elizabethan English is grammatically correct for 1595, but they notice immediately when a character shifts register between scenes for no reason. Internal coherence does more for believability than scholarly precision.',
  },
  {
    category: 'Usage',
    question: 'Why does fantasy use medieval-flavoured English rather than real Middle English?',
    answer:
      'Because comprehension is the binding constraint. Accurate Middle English is difficult for modern readers, so atmosphere would come at the cost of readability. A stylized register evokes the period while staying followable, which is what readers actually want from the effect.',
  },
  {
    category: 'Usage',
    question: 'How do I check whether stylized output sounds right?',
    answer:
      'Read it aloud. Stylized language is largely about sound, and passages that look correct on the page frequently sound wrong when spoken. This is the fastest way to catch both mechanical converter errors and phrasing that is technically valid but tonally off.',
  },
  {
    category: 'Usage',
    question: 'What are gibberish generators actually useful for?',
    answer:
      'Beyond amusement, they produce placeholder text for design mockups where real copy would distract from layout, they test how systems handle unexpected input, and they support word games and puzzles. Nonsense text with realistic structure is genuinely useful in several technical contexts.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What are the main Korean dialects?',
    answer:
      'Gyeongsang from the southeast around Busan and Daegu has distinctive pitch patterns and verb endings. Jeolla from the southwest differs again in vocabulary and sentence endings. Jeju is divergent enough that some linguists classify it as a separate language rather than a dialect of Korean.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does Korean dialect matter culturally?',
    answer:
      'It signals regional origin and carries strong social meaning. Dialect appears constantly in Korean film and television for characterization, and it shifts the emotional register of a line in ways standard Korean does not, which is why dialect conversion is useful for creative writing rather than merely decorative.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do animal sounds differ between languages in writing?',
    answer:
      'Because each language has its own conventions for representing them, shaped by its own phonology. This is why a Korean cat says something different in writing than an English one, and why the Korean cat translator applies a different pattern than an English equivalent would.',
  },
  {
    category: 'Detection and Limits',
    question: 'Is the Navajo translator reliable?',
    answer:
      'No, and this should be stated plainly. Navajo is grammatically complex in ways that make automated translation genuinely difficult, with verb morphology encoding distinctions English handles through separate words. Naive substitution produces output that is not merely awkward but wrong. Consult speakers and community resources for anything serious.',
  },
  {
    category: 'Detection and Limits',
    question: 'Is Navajo a novelty language?',
    answer:
      'No. Diné bizaad is a living language spoken by tens of thousands of people, historically significant through the Navajo code talkers of the Second World War, and one that survived active suppression including the punishment of children for speaking it. It sits in this category for practical reasons but should not be treated as a novelty.',
  },
  {
    category: 'Detection and Limits',
    question: 'How accurate are the historical English converters?',
    answer:
      'They apply rules mechanically and make predictable errors, most commonly attaching verb endings to the wrong grammatical person. They produce a convincing flavour rather than scholarly accuracy, which is usually what people want, but text that matters should be checked rather than trusted.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my text stored when I use these tools?',
    answer:
      'Most run entirely in your browser using rule-based substitution, so nothing is transmitted. Where any server processing occurs, text is not retained for training or stored after your session.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Which converter should I use for a fantasy setting?',
    answer:
      'The medieval translator, in most cases. It produces the stylized register readers associate with the period from fantasy fiction and games, rather than a historical reconstruction. The Shakespearean translator suits a more specifically Elizabethan feel, and Middle or Old English are generally too difficult for readers to follow.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why does my Shakespearean output sound wrong?',
    answer:
      'Most often because verb endings are attached to the wrong person, typically -eth applied to everything. It may also be using thou where the social relationship called for you, since that distinction was about intimacy and status rather than formality, and getting it backwards reads as odd to anyone familiar with the period.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between constructed languages like Klingon and Simlish?',
    answer:
      'Depth of design. Klingon, Quenya, and Dothraki have real grammar and lexicon and can be learned and used to communicate. Simlish is a sound-alike system built for atmosphere with no semantic content at all. Both are legitimate design choices serving different purposes.',
  },
  {
    category: 'Usage',
    question: 'How should a character register shift within a scene?',
    answer:
      'Deliberately, because movement between formal and casual reveals the relationship. A character who becomes more formal under stress and one who becomes cruder are both telling the reader something, and that shift is usually more interesting than a voice that stays fixed throughout.',
  },
  {
    category: 'Usage',
    question: 'Why does Germanic vocabulary sound plainer than Latinate vocabulary?',
    answer:
      'Because the layers arrived at different times and settled into different registers. Germanic core vocabulary reads as direct and honest, while Latinate vocabulary reads as official, evasive, or educated depending on context. Choosing between ask and enquire, or begin and commence, is choosing a register, and writers exploit this constantly without naming it.',
  },
  {
    category: 'Technical',
    question: 'When did English spelling become standardized?',
    answer:
      'Surprisingly recently. Before printing and dictionaries, spelling was largely phonetic and variable, and writers spelled the same word several ways within a single document without anyone objecting. Our sense of correct spelling as a fixed thing is a historical anomaly rather than the long-standing norm.',
  },
  {
    category: 'Technical',
    question: 'Why does English have no singular and plural you?',
    answer:
      'It once did. Thou was singular intimate and you was plural or respectful, exactly like French tu and vous. You gradually took over both roles, leaving modern English unable to mark the distinction, which is why regional forms such as y-all and you lot keep emerging to fill the gap.',
  },
  {
    category: 'Usage',
    question: 'How do I convey a character voice without dialect spelling?',
    answer:
      'Through syntax, idiom, and the order information arrives in. Sentence construction distinguishes speakers convincingly without a single respelled word. A character who front-loads emotion and one who buries it read as different people even using identical vocabulary.',
  },
  {
    category: 'Usage',
    question: 'How much stylistic signalling does a reader actually need?',
    answer:
      'Less than writers expect. A few well-chosen markers establish a voice, after which readers maintain it themselves. This is why restraint works: the effect persists long after explicit signals stop, and continuing to signal heavily produces diminishing returns alongside mounting reader fatigue.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can I trust my intuition about which words sound period-appropriate?',
    answer:
      'Not reliably. Vocabulary that feels archaic is sometimes recent, and words that feel modern are sometimes centuries old. Anachronism is felt by readers before it is identified, so a period scene containing a modern idiom breaks immersion even for someone who could not name what went wrong. Check rather than assume.',
  },
  {
    category: 'Technical',
    question: 'How do these style converters actually work?',
    answer:
      'Most are rule-based substitution systems holding a dictionary that maps modern words to period equivalents, plus pattern rules for transforming word endings. Input is tokenized, each token looked up, and rules applied. There is no model of meaning involved, which explains their characteristic failure modes.',
  },
  {
    category: 'Technical',
    question: 'Why do converters mishandle words with multiple meanings?',
    answer:
      'Because a substitution table has no model of context, so a word with several senses receives the same replacement regardless of which was intended. Words that function as both noun and verb are a frequent failure point, since the correct period equivalent often differs by part of speech.',
  },
  {
    category: 'Technical',
    question: 'Why does some output stay modern while other words convert?',
    answer:
      'Words absent from the converter dictionary pass through unchanged. Coverage largely determines quality, because most of the period flavour comes from vocabulary rather than grammar, so a converter with a large curated dictionary produces noticeably better results than one relying on general rules.',
  },
  {
    category: 'Technical',
    question: 'Why did English lose its grammatical cases?',
    answer:
      'Old English marked grammatical role through word endings, so word order was comparatively free. As those endings eroded over centuries, English came to depend on position instead, which is why modern word order is rigid. The surviving traces are pronoun cases: he and him, she and her, who and whom.',
  },
  {
    category: 'Technical',
    question: 'Why is English spelling so irregular?',
    answer:
      'Largely the Great Vowel Shift. Between roughly 1400 and 1700 long vowels moved substantially, but spelling had begun standardizing with printing before the shift finished. English spelling therefore records a pronunciation nobody uses, which accounts for silent letters and pairs like great and break.',
  },
  {
    category: 'Usage',
    question: 'Should I use phonetic spelling to write an accent?',
    answer:
      'Generally no. It has largely fallen out of favour because it slows reading substantially, implicitly treats one accent as standard and others as deviations needing notation, and often patronizes the characters it marks. Contemporary practice conveys voice through word choice, rhythm, and syntax instead.',
  },
  {
    category: 'Usage',
    question: 'What are these tools useful for beyond entertainment?',
    answer:
      'Tabletop roleplaying, where a game master needs distinct NPC voices while improvising. Teaching language history, since the same sentence across periods makes the scale of change concrete. Game and interactive fiction development for consistent in-game text. And placeholder or test content for interfaces.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I use these converters in a writing project?',
    answer:
      'As a starting point rather than a finished result. Convert a passage, then edit it down so the stylistic markers appear sparingly, check consistency across scenes, verify the grammar where it matters, and read the result aloud. The converter supplies raw material and your editing does the actual work.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I give a character a distinct voice without overusing dialect?',
    answer:
      'Use rhythm and word choice rather than phonetic spelling or grammatical markers. Vary sentence length, favour particular vocabulary, and let syntax carry the difference. Heavy phonetic dialect slows reading and dates badly, while consistent rhythm and lexical preference read as voice without costing comprehension.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Why is stylized spelling used as an identity marker online?',
    answer:
      'Because writing a word in a non-standard way that other members immediately recognize demonstrates belonging in a way standard spelling cannot. This has a long history online, from early leetspeak through to contemporary fandom conventions, and it functions as a genuine sociolinguistic signal rather than noise.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
