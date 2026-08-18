import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>Generator tools</strong> produce content rather than transforming text you already have.
        This category collects generators spanning four distinct groups: SEO metadata generators for
        titles, descriptions and alt text; name generators for games, fiction and branding; combinatorics
        tools for permutations and combinations; and a set of Korean-language generators for nicknames,
        usernames and acrostic poems.
      </p>
      <p>
        These groups have little in common technically, but they answer the same underlying need. You want
        options. Naming something, writing a meta description, or working out how many arrangements exist
        are all tasks where the hard part is generating candidates rather than judging them, and having
        twenty options to react to is far easier than producing one from nothing.
      </p>
      <p>
        The groups also differ in what kind of answer they give. Combinatorics tools are deterministic:
        there is exactly one correct set of permutations for a given input, and the tool computes it.
        Name and metadata generators are the opposite, producing candidates that are better or worse
        rather than right or wrong, which means your judgment is doing the real work and the tool is
        supplying raw material. Knowing which kind you are using changes how you should treat the output.
      </p>
      <p>
        Most of these tools run entirely in your browser. The combinatorics and random data generators are
        pure computation, and the name generators draw on structured word lists, so nothing you enter is
        transmitted anywhere.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>SEO Metadata Generators</h2>
      <p>
        The largest group in this category generates the on-page elements search engines read first:{' '}
        <Link href="/ai-meta-description-generator">meta descriptions</Link>,{' '}
        <Link href="/ai-title-tag-generator">title tags</Link>, and{' '}
        <Link href="/ai-alt-text-generator">image alt text</Link>. Model-specific versions exist for{' '}
        <Link href="/chatgpt-meta-description-generator">ChatGPT</Link>,{' '}
        <Link href="/claude-title-tag-generator">Claude</Link>,{' '}
        <Link href="/gemini-alt-text-generator">Gemini</Link>, and the other major models.
      </p>
      <h3>Title Tags</h3>
      <p>
        The title tag is the single most important on-page SEO element. It appears as the clickable
        headline in search results, it is what browsers show in tabs, and it is the default text when
        someone shares your link.
      </p>
      <p>
        Length is measured in pixels rather than characters, which is why character-count advice is only
        approximate. Google truncates titles at roughly 580 pixels, which corresponds to about 55 to 60
        characters in typical rendering, though wide characters consume more space than narrow ones.
        Titles that exceed it are cut with an ellipsis, so anything essential belongs early.
      </p>
      <p>
        Front-load the primary keyword, but write for the person deciding whether to click. A title that
        reads as keyword-stuffed suppresses click-through even when it ranks, and click-through feeds back
        into ranking. Include your brand name only when it adds credibility, and keep every title on the
        site unique, since duplicate titles across pages are a common and easily fixed technical problem.
      </p>
      <p>
        One thing worth knowing: Google frequently rewrites title tags, often using your H1 or anchor text
        instead. Studies have found rewrites on a substantial share of results. You cannot prevent this,
        but titles that accurately describe the page are rewritten less often than ones that overreach.
      </p>
      <h3>Meta Descriptions</h3>
      <p>
        The meta description is not a ranking factor. Google has stated this directly and repeatedly. It
        matters because it is advertising copy: it influences whether someone clicks your result over the
        nine others on the page, and click-through does affect performance.
      </p>
      <p>
        Aim for roughly 150 to 160 characters, understanding that the real limit is again pixel-based and
        mobile truncates earlier than desktop. Include the primary keyword, because matched terms are
        bolded in results and bolding draws the eye, but write it as a sentence a person would want to
        read rather than a list of terms.
      </p>
      <p>
        The most effective descriptions state what the reader will get and give a reason to choose you. A
        description that simply restates the title wastes the space. Google also rewrites descriptions
        frequently, pulling a passage from your page when it judges that more relevant to the query, which
        is another reason the on-page content matters more than the tag.
      </p>
      <h3>Alt Text</h3>
      <p>
        Alt text serves two purposes, and the accessibility one is primary. Screen reader users depend on
        it to understand what an image conveys, and it is a legal requirement under accessibility
        legislation in many jurisdictions. It is also read by search engines and is what displays when an
        image fails to load.
      </p>
      <p>
        Good alt text describes the image in context, specifically. &quot;Chart showing revenue rising
        from 400,000 to 1.2 million between 2023 and 2025&quot; is useful. &quot;Chart&quot; is not.
        &quot;Image of a chart about revenue growth seo analytics business&quot; is keyword stuffing and
        actively harms screen reader users, who have to listen to it.
      </p>
      <p>
        Two rules people frequently miss. Purely decorative images should have an empty alt attribute
        rather than no attribute, which tells screen readers to skip them instead of announcing a
        filename. And avoid opening with &quot;image of&quot; or &quot;picture of,&quot; since screen
        readers already announce that it is an image.
      </p>
      <p>
        For more on-page SEO utilities, see the{' '}
        <Link href="/ai-tools/seo-content-tools">SEO content tools</Link> category.
      </p>

      <h3>Writing Metadata That Earns Clicks</h3>
      <p>
        Ranking and being clicked are different problems, and metadata is where the second one is won or
        lost. A result in position three with compelling copy routinely outperforms position one with
        weak copy, and that click-through difference feeds back into ranking over time.
      </p>
      <p>
        <strong>Match the search intent, not just the keyword.</strong> Someone searching how to fix a
        problem wants a solution; someone searching a product name wants to evaluate or buy. Metadata
        that answers the actual intent behind the query gets clicked; metadata that merely contains the
        query does not.
      </p>
      <p>
        <strong>Be concrete about what the page contains.</strong> Numbers, specifics, and scope work
        well because they set an accurate expectation. A description promising a comparison of seven
        options with pricing tells the reader precisely what they will get, which is more persuasive than
        a general claim of comprehensive coverage.
      </p>
      <p>
        <strong>Differentiate from the results around you.</strong> Search your target query and read the
        first page. If every listing makes the same promise in the same words, saying something different
        is worth more than saying the same thing slightly better.
      </p>
      <p>
        <strong>Avoid overpromising.</strong> Copy that oversells produces clicks followed by immediate
        exits, and a pattern of visitors returning to search signals that the page did not answer the
        query. Accuracy sustains performance in a way exaggeration does not.
      </p>
      <p>
        <strong>Remember that titles serve multiple surfaces.</strong> The same tag appears in browser
        tabs, bookmarks, and social shares. A title that is only legible in a full search result is
        working in one context and failing in several others, which is another argument for front-loading
        the distinctive part.
      </p>

      <h2>Name Generators for Games and Fiction</h2>
      <p>
        The second large group generates names for characters, places, and creations across games, fiction
        and roleplay. These include franchise-specific generators for{' '}
        <Link href="/naruto-name-generator">Naruto</Link>,{' '}
        <Link href="/elden-ring-name-generator">Elden Ring</Link>,{' '}
        <Link href="/runescape-name-generator">RuneScape</Link>,{' '}
        <Link href="/fallout-name-generator">Fallout</Link>,{' '}
        <Link href="/transformers-name-generator">Transformers</Link>,{' '}
        <Link href="/mlp-name-generator">My Little Pony</Link>, and{' '}
        <Link href="/gorilla-tag-name-generator">Gorilla Tag</Link>, alongside broader tools such as the{' '}
        <Link href="/anime-names-generator">anime name generator</Link>,{' '}
        <Link href="/species-name-generator">species name generator</Link>,{' '}
        <Link href="/god-goddess-name-generator">god and goddess name generator</Link>,{' '}
        <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>,{' '}
        <Link href="/tribe-name-generator">tribe name generator</Link>,{' '}
        <Link href="/island-name-generator">island name generator</Link>, and{' '}
        <Link href="/royal-surname-generator">royal surname generator</Link>.
      </p>
      <p>
        Franchise-specific generators exist because naming conventions within a setting are genuinely
        distinct. Names that fit Elden Ring have a different phonetic character from names that fit
        Fallout, and a generic fantasy name generator produces output that feels wrong in both. The
        conventions are usually consistent enough to model: characteristic sounds, syllable structures,
        and morphological patterns that readers of that setting recognize without being able to articulate.
      </p>
      <p>
        <strong>What makes a name work</strong> in fiction comes down to a few properties. It should be
        pronounceable, because readers subvocalize and a name they stumble over pulls them out of the
        text. It should be distinguishable from other names in the same work, since two characters whose
        names start with the same letter and have the same rhythm get confused constantly. It should carry
        the right connotations through sound alone, which is why harsh consonants suit antagonists and
        liquid consonants suit gentler characters across many traditions. And it should be consistent with
        the naming conventions of its own culture within the story.
      </p>
      <p>
        The last point is where amateur worldbuilding most often breaks down. If one character from a
        region is called Kaelthorn and another from the same village is called Steve, the setting stops
        feeling coherent. Generators help here precisely because they apply a consistent pattern.
      </p>
      <p>
        The <Link href="/anime-names-generator">anime name generator</Link> and{' '}
        <Link href="/korean-name-generator-online">Korean name generator</Link> touch on real naming
        systems rather than invented ones, which brings a responsibility worth naming: real cultural naming
        conventions carry meaning, and using them decoratively without understanding is how you end up with
        a character whose name means something unintended or absurd.
      </p>

      <h2>Username and Branding Generators</h2>
      <p>
        A related group generates names for online identity and business use:{' '}
        <Link href="/steam-name-generator">Steam names</Link>,{' '}
        <Link href="/badass-username-generator">usernames</Link>,{' '}
        <Link href="/shopify-store-name-generator">Shopify store names</Link>,{' '}
        <Link href="/wrestling-name-generator">wrestling names</Link>,{' '}
        <Link href="/drag-queen-name-generator">drag names</Link>,{' '}
        <Link href="/boxer-name-generator">boxer names</Link>, and{' '}
        <Link href="/silly-name-generator">deliberately silly names</Link>.
      </p>
      <p>
        Business naming has practical constraints that fictional naming does not. Before committing to a
        store or brand name, check domain availability across the extensions you care about, check social
        handle availability on the platforms you will use, and search trademark registers in your
        jurisdiction. A name that is perfect and unavailable costs more time than a name that is good and
        free.
      </p>
      <p>
        Pronounceability matters commercially too. A name people cannot say confidently does not get
        recommended aloud, and word of mouth is the cheapest acquisition channel there is. Spelling
        matters for the same reason: if hearing the name does not tell someone how to type it, you lose
        direct traffic permanently.
      </p>
      <p>
        The <Link href="/ambigram-tattoo-generator">ambigram generator</Link> and{' '}
        <Link href="/two-name-ambigram-generator">two-name ambigram generator</Link> serve a different
        purpose entirely, producing designs that read as one word upright and another when rotated 180
        degrees. Given that these are frequently used for tattoos, checking the rotated reading carefully
        before committing is advice worth taking literally. Print the design, turn the page, and confirm
        both readings are legible to someone who has not been told what they say.
      </p>

      <h2>Combinatorics and Random Data Generators</h2>
      <p>
        The <Link href="/combination-generator">combination generator</Link>,{' '}
        <Link href="/line-combination-generator">line combination generator</Link>, and{' '}
        <Link href="/permutation-generator">permutation generator</Link> handle a class of problem where
        intuition is unreliable and the numbers grow much faster than people expect.
      </p>
      <p>
        The distinction between the two is the one people get wrong. A <strong>permutation</strong> is an
        arrangement where order matters. A <strong>combination</strong> is a selection where it does not.
        Choosing three people from ten to fill three distinct roles is a permutation, because swapping who
        holds which role produces a different outcome. Choosing three people from ten for an undifferentiated
        committee is a combination.
      </p>
      <p>
        The scale is the practical issue. Permutations of ten items taken three at a time give 720
        results. Combinations of the same give 120. But full permutations of just ten items give 3,628,800,
        and of thirteen items over six billion. This is why exhaustive generation stops being viable very
        quickly, and why understanding the growth rate matters before you start.
      </p>
      <p>
        Practical uses include generating test case matrices, building product variant lists from options
        such as size and colour, checking scheduling arrangements, and enumerating possibilities in
        probability work. The line combination generator applies the same logic to lines of text, which is
        useful for building keyword permutations or generating structured content variants.
      </p>
      <p>
        The <Link href="/random-hex-generator">random hex generator</Link> produces random hexadecimal
        strings for identifiers, colour values, and test data. One caution worth stating: browser
        randomness is suitable for test fixtures and colour selection but should not be used to generate
        cryptographic secrets, session tokens, or anything security-sensitive. Those require a
        cryptographically secure random source, generated server-side.
      </p>
      <p>
        The <Link href="/morse-code-generator">Morse code generator</Link> converts between text and Morse.
        Morse encodes letters as sequences of short and long signals, with the code lengths inversely
        related to letter frequency in English, so E is a single dot and Q is four symbols. It remains in
        active use in amateur radio and aviation navigation beacons, and it is one of the few encodings
        that can be transmitted by sound, light, or touch.
      </p>

      <h2>Korean Language Generators</h2>
      <p>
        A distinct group serves Korean-language naming and wordplay: the{' '}
        <Link href="/korean-nickname-generator">Korean nickname generator</Link>,{' '}
        <Link href="/korean-nickname-maker">Korean nickname maker</Link>,{' '}
        <Link href="/korean-instagram-username-generator">Korean Instagram username generator</Link>,{' '}
        <Link href="/korean-name-generator-male">Korean male name generator</Link>,{' '}
        <Link href="/korean-acrostic-poem-generator">Korean acrostic poem generator</Link>, and{' '}
        <Link href="/korean-word-chain-game">Korean word chain game</Link>.
      </p>
      <p>
        Korean naming follows structural conventions worth understanding. A traditional Korean name has a
        one-syllable family name followed by a two-syllable given name, with a relatively small set of
        family names covering a large share of the population. Given names are frequently constructed from
        Sino-Korean morphemes chosen for their meaning, so parents select syllables carrying connotations
        such as brightness, virtue, or strength.
      </p>
      <p>
        The <Link href="/korean-acrostic-poem-generator">acrostic poem generator</Link> supports a form
        called samhaengsi, where each line begins with successive syllables of a name or word. It is a
        common social and party game in Korea, and the appeal lies in the constraint: producing something
        witty within a fixed pattern.
      </p>
      <p>
        The <Link href="/korean-word-chain-game">word chain game</Link> supports kkeutmalitgi, in which
        each player must produce a word beginning with the final syllable of the previous word. The game
        has a strategic layer, since certain syllables are notoriously difficult to begin words with, and
        skilled players steer toward them deliberately.
      </p>

      <h2>Building Consistent Naming Systems</h2>
      <p>
        For anyone doing sustained worldbuilding, whether for a novel, a tabletop campaign, or a game, the
        useful skill is not generating individual names but establishing systems that produce consistent
        ones.
      </p>
      <p>
        <strong>Define a phonetic inventory per culture.</strong> Decide which sounds a language uses and,
        more importantly, which it does not. A culture whose names never use the letter K and favour
        liquid consonants will produce names that feel related even when generated independently. The
        exclusions do as much work as the inclusions.
      </p>
      <p>
        <strong>Establish syllable structure.</strong> Whether names tend toward one, two, or three
        syllables, and whether they end on vowels or consonants, creates an audible signature. Japanese
        names sound distinct from Welsh names partly because of consistent syllable shape rather than
        specific sounds alone.
      </p>
      <p>
        <strong>Decide on naming morphology.</strong> Many real cultures build names from meaningful
        components: patronymics, occupational surnames, place-based names, or compound elements carrying
        significance. Deciding that your culture forms surnames from a parent name plus a suffix gives you
        an unlimited generator that produces internally coherent results.
      </p>
      <p>
        <strong>Vary deliberately across cultures.</strong> If every group in your setting sounds the
        same, the world feels small. Contrast between naming systems is what makes a character&apos;s
        origin recognizable from their name alone, which is a genuinely useful storytelling tool.
      </p>
      <p>
        <strong>Keep a name registry.</strong> In long projects, accidentally reusing a name or creating
        two that are confusingly similar is common. A simple list, checked before naming anything new,
        prevents a class of problem that is painful to fix once published.
      </p>

      <h2>Usernames and Online Identity</h2>
      <p>
        Username generation has constraints that differ from both fiction and business naming, mostly
        because the namespace is enormously contested and the choice is often permanent.
      </p>
      <p>
        <strong>Availability is the binding constraint.</strong> On established platforms, nearly every
        short dictionary word was taken years ago. Practical strategies include compound words that are
        unlikely to have been paired, deliberate misspellings that remain pronounceable, adding a
        meaningful word rather than a number, and using a phrase rather than a single term. Appending
        digits is the least effective approach, since it reads as a fallback and is hard to remember.
      </p>
      <p>
        <strong>Consistency across platforms has real value.</strong> Using the same handle everywhere
        makes you findable and builds recognition, which matters if the identity is tied to anything you
        want people to follow. Checking availability across all platforms you might eventually use, before
        settling anywhere, is worth the few minutes it takes.
      </p>
      <p>
        <strong>Consider longevity.</strong> A username chosen at fifteen frequently becomes an
        embarrassment at twenty-five, and on many platforms changing it costs you accumulated history or
        is not possible at all. Names tied to a current interest, a joke that will date, or a reference
        that will not age well are worth avoiding for any account you expect to keep.
      </p>
      <p>
        <strong>Think about what it reveals.</strong> Usernames incorporating a birth year, a full name, a
        school, or a location disclose more than people intend, and that information persists across every
        platform where the handle appears. For accounts tied to a real identity this may be fine; for
        anything else it is worth a moment&apos;s thought.
      </p>

      <h2>Getting Better Results From Generators</h2>
      <p>
        A few habits substantially improve what you get out of any generator in this category.
      </p>
      <p>
        <strong>Generate far more than you need.</strong> The value of a generator is volume. Producing
        thirty options and discarding twenty-eight is the intended workflow, not a sign the tool failed.
        Judging is much easier than creating, and a large pool makes judging possible.
      </p>
      <p>
        <strong>Say the results aloud.</strong> This catches problems invisible on screen: awkward
        consonant clusters, unintended words formed across a boundary, and names that are ambiguous when
        heard rather than read. For anything customer-facing, this step is not optional.
      </p>
      <p>
        <strong>Check availability before falling in love.</strong> For business or username generation,
        verify the domain, the handles, and the trademark position early. Attachment forms fast, and
        discovering a conflict afterwards is expensive.
      </p>
      <p>
        <strong>Use output as raw material.</strong> The strongest results usually come from combining
        parts of several generated options, or from using one as a starting point and modifying it. Treat
        the output as a source of ideas rather than a menu of finished answers.
      </p>
      <p>
        <strong>Check meaning across languages.</strong> For anything commercial or public, search whether
        your chosen name means something unfortunate in a major language. This failure is common enough to
        be a recurring genre of business story.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For SEO utilities beyond metadata generation, see the{' '}
        <Link href="/ai-tools/seo-content-tools">SEO content tools</Link>. For developer-focused
        generators including UUIDs, hashes, and placeholder assets, see the{' '}
        <Link href="/ai-tools/developer-tools">developer tools</Link>. For creative writing and roleplay
        content, see the <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is in the generator tools category?',
    answer:
      'Four distinct groups: SEO metadata generators for titles, descriptions and alt text; name generators for games, fiction, usernames and branding; combinatorics tools for permutations and combinations; and Korean-language generators for nicknames, usernames and acrostic poems.',
  },
  {
    category: 'General',
    question: 'Are these generator tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits. Most run entirely in your browser, so you can generate as many options as you want.',
  },
  {
    category: 'General',
    question: 'Can I use generated names commercially?',
    answer:
      'Yes, there is no restriction from us and no attribution required. However, a generator cannot tell you whether a name is already trademarked or in use. For any commercial name, check trademark registers in your jurisdiction, domain availability, and social handles before committing.',
  },
  {
    category: 'Usage',
    question: 'How long should a title tag be?',
    answer:
      'Google truncates around 580 pixels, which is roughly 55 to 60 characters in typical rendering. The real limit is pixel-based rather than character-based, so wide characters consume more space. Put anything essential early, since text beyond the limit is replaced with an ellipsis.',
  },
  {
    category: 'Usage',
    question: 'How long should a meta description be?',
    answer:
      'Roughly 150 to 160 characters, though the real limit is pixel-based and mobile truncates earlier than desktop. Include the primary keyword, since matched terms are bolded in results and bolding draws the eye, but write it as a sentence someone would want to read rather than a list of terms.',
  },
  {
    category: 'Usage',
    question: 'What makes good alt text?',
    answer:
      'A specific description of what the image conveys in context. Chart showing revenue rising from 400,000 to 1.2 million between 2023 and 2025 is useful; Chart is not. Avoid opening with image of, since screen readers already announce that. Never stuff keywords, because screen reader users have to listen to the result.',
  },
  {
    category: 'Usage',
    question: 'What alt text should decorative images have?',
    answer:
      'An empty alt attribute rather than no attribute at all. An empty alt tells screen readers to skip the image, while a missing attribute causes many screen readers to announce the filename instead, which is noise the user has to sit through.',
  },
  {
    category: 'Usage',
    question: 'How do I get better results from a name generator?',
    answer:
      'Generate far more options than you need, since judging is much easier than creating. Say the results aloud to catch awkward clusters and unintended words. Combine parts of different options rather than treating each as final. And check availability early, before attachment forms.',
  },
  {
    category: 'Usage',
    question: 'What makes a fictional character name work?',
    answer:
      'Pronounceability, since readers subvocalize and stumble over difficult names. Distinguishability from other names in the same work, because similar names get confused constantly. Sound connotations that match the character. And consistency with the naming conventions of that character culture within the story.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between a permutation and a combination?',
    answer:
      'Order. A permutation is an arrangement where order matters; a combination is a selection where it does not. Choosing three people from ten for three distinct roles is a permutation, since swapping roles changes the outcome. Choosing three from ten for an undifferentiated committee is a combination.',
  },
  {
    category: 'Technical',
    question: 'Why do permutation counts get so large so quickly?',
    answer:
      'Because they grow factorially. Permutations of ten items taken three at a time give 720 results, but full permutations of ten items give 3,628,800, and of thirteen items over six billion. Exhaustive generation stops being viable much sooner than most people expect, so check the count before generating.',
  },
  {
    category: 'Technical',
    question: 'Can I use the random hex generator for passwords or tokens?',
    answer:
      'No. Browser randomness is fine for test fixtures, colour values, and sample data, but it is not appropriate for cryptographic secrets, session tokens, or API keys. Those need a cryptographically secure random source, generated server-side, where the output quality is guaranteed.',
  },
  {
    category: 'Technical',
    question: 'How does Morse code work?',
    answer:
      'It encodes letters as sequences of short and long signals, with code length inversely related to letter frequency in English, so E is a single dot and Q takes four symbols. It is still used in amateur radio and aviation navigation beacons, and it is one of the few encodings transmissible by sound, light, or touch.',
  },
  {
    category: 'Technical',
    question: 'How are Korean names structured?',
    answer:
      'Traditionally a one-syllable family name followed by a two-syllable given name, with a small set of family names covering a large share of the population. Given names are often built from Sino-Korean morphemes chosen for meaning, so syllables are selected for connotations such as brightness, virtue, or strength.',
  },
  {
    category: 'Technical',
    question: 'What is a samhaengsi acrostic poem?',
    answer:
      'A Korean form where each line begins with successive syllables of a name or word. It is a common social and party game, and the appeal is the constraint: producing something witty while hitting a fixed pattern. The acrostic poem generator supports this form.',
  },
  {
    category: 'Detection and Limits',
    question: 'Is the meta description a ranking factor?',
    answer:
      'No. Google has stated directly and repeatedly that it is not. It matters because it functions as advertising copy in the search result, influencing whether someone clicks your listing over the others, and click-through does affect performance. Write it to earn the click, not to rank.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why did Google change my title tag in search results?',
    answer:
      'Google rewrites titles on a substantial share of results, often substituting your H1 or anchor text when it judges that more accurate for the query. You cannot prevent it. Titles that accurately describe the page content are rewritten less often than ones that overreach or stuff keywords.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can a generator tell me if a name is trademarked?',
    answer:
      'No. Generators produce candidate names from patterns and word lists with no knowledge of existing trademarks, companies, or registered marks. Checking trademark registers in the jurisdictions you operate in is a separate step and an essential one for any commercial use.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why should I check my brand name in other languages?',
    answer:
      'Because names that work in one language routinely mean something unfortunate in another, and this failure is common enough to be a recurring genre of business story. A quick search across major languages before committing costs minutes and avoids a problem that is expensive to fix after launch.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Does pronounceability actually matter for a business name?',
    answer:
      'Yes, commercially. A name people cannot say confidently does not get recommended aloud, and word of mouth is the cheapest acquisition channel available. Spelling matters for the same reason: if hearing the name does not tell someone how to type it, you lose direct traffic permanently.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my input stored when I use these generators?',
    answer:
      'The combinatorics, random data, and name generators run entirely in your browser, so nothing you enter is transmitted anywhere. For the SEO metadata generators, your text is not retained for training or shared, and is not stored after your session.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why use a franchise-specific name generator instead of a generic one?',
    answer:
      'Because naming conventions within a setting are genuinely distinct. Names that fit Elden Ring have a different phonetic character from names that fit Fallout, and a generic fantasy generator produces output that feels wrong in both. The franchise generators model the characteristic sounds and structures readers of that setting recognize.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'My generated fantasy names feel inconsistent with each other. Why?',
    answer:
      'Probably because they are drawn from different patterns without a shared convention. If one character from a village is called Kaelthorn and another is called Steve, the setting stops feeling coherent. Pick a phonetic pattern for each culture in your story and generate within it rather than mixing sources.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Should I use real cultural naming conventions in fiction?',
    answer:
      'You can, but with care. Real naming systems carry actual meaning, so borrowing them decoratively without understanding is how a character ends up with a name that means something unintended or absurd. If you use a real system, check what the specific name you chose actually conveys.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I write title tags across a whole site?',
    answer:
      'Keep every title unique, since duplicates across pages are a common and easily fixed technical problem. Front-load the primary keyword for each page, write for the person deciding whether to click rather than for the algorithm, and include the brand name only where it adds credibility.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What are permutation generators actually useful for?',
    answer:
      'Building test case matrices, generating product variant lists from options such as size and colour, checking scheduling arrangements, and enumerating possibilities in probability work. The line combination generator applies the same logic to lines of text, which suits keyword permutations and structured content variants.',
  },
  {
    category: 'Technical',
    question: 'What is the Korean word chain game and how does it work?',
    answer:
      'Kkeutmalitgi is a game where each player must produce a word beginning with the final syllable of the previous word. It has a genuine strategic layer, because certain syllables are notoriously difficult to start words with, and experienced players deliberately steer the chain toward them to force an opponent out.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I avoid reusing names accidentally in a long project?',
    answer:
      'Keep a name registry and check it before naming anything new. In novels, campaigns, and games that run for years, accidentally reusing a name or creating two that are confusingly similar is common, and it is painful to fix after publication. A simple list costs nothing and prevents an entire class of continuity problem.',
  },
  {
    category: 'General',
    question: 'Should I treat generator output as finished or as raw material?',
    answer:
      'It depends on the type. Combinatorics tools are deterministic, producing exactly one correct answer for a given input, so the output is final. Name and metadata generators produce candidates that are better or worse rather than right or wrong, so treat those as raw material and expect to combine, modify, and discard most of what you get.',
  },
  {
    category: 'Usage',
    question: 'Why do my generated usernames feel dated after a few years?',
    answer:
      'Because they were tied to a current interest, a joke that aged badly, or a reference that stopped being recognizable. On many platforms changing a handle costs accumulated history or is not possible at all, so for any account you expect to keep, favour something neutral enough to still fit you in a decade.',
  },
  {
    category: 'Usage',
    question: 'How do I find an available username when everything is taken?',
    answer:
      'Compound words unlikely to have been paired, deliberate misspellings that stay pronounceable, adding a meaningful word rather than a number, or using a short phrase. Appending digits is the least effective approach, since it reads as a fallback and is hard for anyone to remember or type correctly.',
  },
  {
    category: 'Usage',
    question: 'Should I use the same username on every platform?',
    answer:
      'Generally yes. A consistent handle makes you findable and builds recognition, which matters for any identity you want people to follow. Check availability across every platform you might eventually use before settling on one, since discovering a conflict after building an audience is expensive.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I build a consistent naming system for a fictional world?',
    answer:
      'Define a phonetic inventory per culture, including which sounds it never uses, since exclusions do as much work as inclusions. Establish typical syllable count and whether names end on vowels or consonants. Decide how surnames form, such as patronymics or place-based names. Then vary deliberately between cultures so origin is recognizable from a name alone.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I write metadata that actually earns clicks?',
    answer:
      'Match the intent behind the query rather than just containing the keyword. Be concrete about what the page holds, since numbers and scope set accurate expectations. Read the current first page for your target query and say something different from the listings around you. Avoid overpromising, because clicks followed by immediate exits signal the page did not answer the query.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What should I check before committing to a store or brand name?',
    answer:
      'Domain availability across the extensions you care about, handle availability on the platforms you will actually use, trademark registers in your jurisdiction, meaning in other major languages, and whether people can spell it after hearing it. A perfect unavailable name costs more time than a good available one.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
