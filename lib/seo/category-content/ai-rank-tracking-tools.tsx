import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>AI rank tracking tools</strong> measure how often your brand appears in the answers AI
        assistants give. This category collects trackers for the major assistants, including the general{' '}
        <Link href="/ai-rank-tracker">AI rank tracker</Link> plus dedicated versions for{' '}
        <Link href="/chatgpt-rank-tracker">ChatGPT</Link>,{' '}
        <Link href="/claude-rank-tracker">Claude</Link>,{' '}
        <Link href="/gemini-rank-tracker">Gemini</Link>, and{' '}
        <Link href="/perplexity-rank-tracker">Perplexity</Link>.
      </p>
      <p>
        This matters because a growing share of the questions that used to go to a search engine now go
        to an assistant instead. Someone choosing project management software, comparing accounting
        options, or asking which tool solves a specific problem increasingly asks an AI and acts on the
        answer without visiting a results page at all. If your brand is not in that answer, you are absent
        from the decision entirely, and no amount of traditional ranking compensates.
      </p>
      <p>
        The discipline is new enough that it has several competing names, including generative engine
        optimization, answer engine optimization, and LLM visibility. The underlying question is the same:
        when an assistant answers a question in your category, does it mention you, and what does it say?
      </p>
      <p>
        It is worth setting expectations before going further. You cannot optimize an assistant the way
        you optimize for a search algorithm, and there is no submission process or ranking factor to
        manipulate. What you can do is measure where you stand, understand which sources shape the answers
        in your category, and work on those. The sections below cover how AI visibility differs from
        search ranking, what the trackers measure, how to choose prompts worth tracking, what genuinely
        influences answers, how the four platforms differ, and the mistakes that waste the most effort.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Why AI Visibility Is Different From Search Ranking</h2>
      <p>
        Traditional SEO and AI visibility overlap but are not the same problem, and the differences change
        what you should measure and do.
      </p>
      <p>
        <strong>There is no ranked list.</strong> Search returns ten positions in a stable order. An
        assistant returns prose that may mention three brands, or one, or none. Being mentioned at all is
        the primary outcome, and position within the answer matters far less than presence.
      </p>
      <p>
        <strong>Answers are not deterministic.</strong> Ask the same question twice and you can get
        different responses, because generation involves sampling. This has a major methodological
        consequence: a single check tells you almost nothing. Meaningful measurement requires running the
        same prompt repeatedly and looking at how often you appear across runs.
      </p>
      <p>
        <strong>Phrasing changes everything.</strong> Small differences in how a question is asked produce
        substantially different answers. Best tool for X, alternatives to Y, and how do I solve Z may each
        surface a different set of brands, even though a search engine would treat them as closely related
        queries.
      </p>
      <p>
        <strong>The source of knowledge varies by system.</strong> Some assistants answer from training
        data, which is fixed at a cutoff and cannot be influenced after the fact. Others retrieve live web
        results and summarize them, which means current content can affect the answer within days. Most
        now do some of both, and which mode applies to a given question changes what you can do about it.
      </p>
      <p>
        <strong>There may be no click at all.</strong> An assistant can recommend you while sending no
        traffic, so your analytics show nothing while the mention is doing real work. This is the central
        measurement problem in the field and the reason dedicated tracking exists.
      </p>

      <h2>What the Trackers Measure</h2>
      <p>
        The <Link href="/ai-rank-tracker">AI rank tracker</Link> and its platform-specific versions check
        whether and how your brand appears for a set of prompts.
      </p>
      <p>
        <strong>Mention rate</strong> is the core metric: across repeated runs of the same prompt, what
        proportion include you. This handles the non-determinism problem directly, and it is the number
        worth tracking over time.
      </p>
      <p>
        <strong>Position within the answer</strong> matters less than in search but is not irrelevant.
        Being named first in a list of recommendations carries more weight than appearing in a closing
        aside.
      </p>
      <p>
        <strong>Sentiment and framing</strong> matter more here than in search, because the assistant is
        characterizing you rather than just listing you. Being described as the budget option, the
        enterprise choice, or the one with a difficult interface shapes the decision in ways a blue link
        never did. A mention is not automatically a good mention. Framing is also stickier than it looks:
        once a characterization is established across the sources assistants read, it tends to persist
        through repeated answers, so a description that was accurate three years ago can follow a product
        long after it stopped being true. Catching that early is one of the more valuable things tracking
        surfaces.
      </p>
      <p>
        <strong>Competitor co-occurrence</strong> shows who you are being grouped with. If assistants
        consistently name three competitors and not you for your core use case, that is a specific,
        actionable gap.
      </p>
      <p>
        <strong>Cited sources</strong> reveal what the answer was built from, where the system exposes
        them. This is the most directly actionable signal available, because it tells you which pages are
        shaping your category&apos;s answers. Those pages are frequently not the ones you would guess:
        a community thread, a niche review roundup, or a documentation page often carries more weight in
        a given answer than the marketing site you have spent the most effort on, which makes the citation
        list one of the more genuinely surprising and useful outputs to come out of any tracking exercise
        you run.
      </p>

      <h2>Choosing Prompts to Track</h2>
      <p>
        Prompt selection determines whether tracking tells you anything useful, and it is where most
        effort should go.
      </p>
      <p>
        <strong>Track how buyers actually ask, not how you describe yourself.</strong> People ask
        assistants in natural language about problems, not in keyword form about product categories. What
        should I use to keep track of freelance invoices is a real prompt; invoicing software for
        freelancers is a keyword.
      </p>
      <p>
        <strong>Cover the decision stages.</strong> Problem-aware prompts where the person does not yet
        know a category exists. Category prompts asking what the options are. Comparison prompts naming
        two products. Objection prompts asking whether something is worth it or what its downsides are.
        Each surfaces different brands.
      </p>
      <p>
        <strong>Include prompts naming your competitors.</strong> Alternatives to a competitor is one of
        the highest-intent questions anyone asks, and whether you appear there is directly commercially
        meaningful.
      </p>
      <p>
        <strong>Include prompts naming you.</strong> What an assistant says when asked about your brand
        directly is worth knowing, particularly since it may be outdated, incomplete, or wrong in ways you
        can address.
      </p>
      <p>
        <strong>Keep the set stable.</strong> Comparability over time requires tracking the same prompts.
        Changing the set every month produces data you cannot trend.
      </p>

      <h2>Influencing AI Answers</h2>
      <p>
        You cannot optimize an assistant the way you optimize for a search algorithm, but several things
        demonstrably affect whether you appear.
      </p>
      <p>
        <strong>Be present in the sources these systems read.</strong> Assistants that retrieve live
        content draw heavily on the same pages that rank well, alongside review sites, comparison
        articles, documentation, community discussion, and reference sites. Presence across that
        ecosystem matters more than the strength of any single property you control.
      </p>
      <p>
        <strong>Third-party mentions carry disproportionate weight.</strong> Your own site says you are
        the best option, and every competitor site says the same, so that claim carries little
        information. Independent reviews, comparison articles, and community recommendations are what
        assistants draw on when characterizing a category.
      </p>
      <p>
        <strong>Make claims extractable.</strong> Content that states facts plainly and specifically is
        easier to cite than content burying them in narrative. Clear statements of what a product does,
        who it suits, what it costs, and how it compares can be lifted and attributed; a page that
        requires reading in full to extract one fact is a worse source.
      </p>
      <p>
        <strong>Structured, factual content helps.</strong> Specifications, comparison tables, documented
        limitations, and explicit answers to common questions are exactly the material an assembled answer
        needs.
      </p>
      <p>
        <strong>Correct the record where it is wrong.</strong> If assistants describe your pricing,
        features, or positioning inaccurately, the underlying sources usually are too. Finding and
        updating them is more effective than publishing another page on your own site.
      </p>
      <p>
        <strong>Accept the training data limitation.</strong> Where an answer comes from training data
        rather than retrieval, nothing you publish today changes it until a future model incorporates it.
        Effort is better directed at retrieval-based surfaces where the feedback loop is measured in days.
      </p>

      <h2>Platform Differences</h2>
      <p>
        The four tracked platforms behave differently enough to warrant separate measurement.
      </p>
      <p>
        <strong>ChatGPT</strong> has the largest user base and mixes training knowledge with web
        retrieval depending on the question and configuration. The{' '}
        <Link href="/chatgpt-rank-tracker">ChatGPT rank tracker</Link> covers it, and for most brands it
        is the first surface worth measuring simply on volume.
      </p>
      <p>
        <strong>Perplexity</strong> is search-first by design, retrieving and citing sources for nearly
        every answer. That makes it the most transparent and the most immediately actionable surface,
        since the{' '}
        <Link href="/perplexity-rank-tracker">Perplexity rank tracker</Link> shows citations you can trace
        and influence directly.
      </p>
      <p>
        <strong>Gemini</strong> integrates with Google&apos;s index and appears in AI overviews on search
        results, giving it reach beyond its standalone app. The{' '}
        <Link href="/gemini-rank-tracker">Gemini rank tracker</Link> covers it, and its behaviour is
        closest to traditional search of the four.
      </p>
      <p>
        <strong>Claude</strong> skews toward professional and technical use, so visibility there matters
        disproportionately for developer tools, B2B software, and technical services. The{' '}
        <Link href="/claude-rank-tracker">Claude rank tracker</Link> covers it.
      </p>

      <h2>Why Buying Research Moved to Assistants</h2>
      <p>
        The shift is worth understanding, because it explains which categories are affected first and how
        much.
      </p>
      <p>
        <strong>Assistants collapse a multi-step process.</strong> Researching a purchase traditionally
        meant several searches, opening a dozen tabs, reading comparison articles, and assembling a
        shortlist yourself. An assistant does the assembly and returns a shortlist directly. For the
        person researching, that is a genuine improvement, which is why the behaviour is spreading rather
        than being a novelty.
      </p>
      <p>
        <strong>Follow-up questions are the real difference.</strong> Search treats each query
        independently. An assistant holds context, so someone can ask which of those works offline, then
        which is cheapest for a team of five, then what the migration path looks like. That conversational
        narrowing is where the actual decision gets made, and it is invisible to any search-based
        measurement.
      </p>
      <p>
        <strong>The effect is strongest where choice is confusing.</strong> Categories with many similar
        options, unclear differentiation, or high research burden benefit most from an assistant
        summarizing. Software, professional services, and technical products are affected earlier and more
        heavily than categories where people already know what they want.
      </p>
      <p>
        <strong>Trust transfers to the summary.</strong> When an assistant states that three tools lead a
        category, users generally accept the framing rather than verifying it. This concentrates attention
        on whoever is named and makes absence more costly than a low search ranking, because a low ranking
        is at least visible on the page.
      </p>
      <p>
        <strong>Zero-click is the norm rather than the exception.</strong> The person acts on the answer.
        They may search your brand name directly afterwards, arrive through a different channel, or simply
        remember the recommendation. Attribution breaks down entirely, which is why visibility has to be
        measured directly rather than inferred from traffic.
      </p>

      <h2>Building a Visibility Program</h2>
      <p>
        Moving from occasional checks to something systematic does not require much, but it does require
        consistency.
      </p>
      <p>
        <strong>Start by establishing where you actually stand.</strong> Run twenty to thirty prompts
        covering your category, your competitors, and your brand, several times each. Record mention rate
        and read what is being said. This baseline is the thing every later measurement is compared
        against, so it is worth doing carefully.
      </p>
      <p>
        <strong>Identify the gaps that matter commercially.</strong> Not every absence is worth fixing. A
        prompt you never appear in, from an audience that would not buy, is noise. Absence from the
        highest-intent prompts in your core use case is the priority.
      </p>
      <p>
        <strong>Trace the sources behind answers where you can.</strong> On platforms that cite, look at
        which pages are producing the answers in your category. That list is your actual target: those are
        the properties shaping how the category is described.
      </p>
      <p>
        <strong>Work on third-party surfaces first.</strong> Getting listed accurately in the review
        sites, comparison articles, and directories that assistants draw on usually moves the needle more
        than anything you publish on your own domain, and it is frequently neglected because it is less
        satisfying than creating content.
      </p>
      <p>
        <strong>Re-measure on a fixed schedule.</strong> Monthly, using the same prompts and the same
        number of runs. Changing method between measurements destroys comparability, which is the whole
        value of tracking.
      </p>
      <p>
        <strong>Expect slow movement.</strong> Retrieval-based surfaces respond within weeks of source
        changes. Training-data answers change only across model generations. Neither responds to a single
        published page the way a long-tail search query sometimes does.
      </p>

      <h2>Measuring Sensibly</h2>
      <p>
        A few practices separate useful tracking from noise.
      </p>
      <p>
        <strong>Run each prompt multiple times.</strong> Because answers vary, a single result is
        anecdote. Mention rate across several runs is the meaningful unit.
      </p>
      <p>
        <strong>Track trend, not snapshots.</strong> Absolute mention rate for one week says little.
        Movement over months, particularly after you change something, is what tells you whether the work
        is paying off.
      </p>
      <p>
        <strong>Watch competitors in the same data.</strong> Your mention rate falling while everyone
        else&apos;s also falls means the model changed, not that you did something wrong. Relative
        position is more informative than absolute numbers.
      </p>
      <p>
        <strong>Read the answers, not just the metrics.</strong> How you are characterized is often more
        important than whether you were named, and that only shows up on reading.
      </p>
      <p>
        <strong>Expect volatility around model updates.</strong> A new model version can change answers
        across your entire prompt set overnight. Sharp discontinuities usually mean the platform changed
        rather than your visibility did.
      </p>

      <h2>Common Mistakes in AI Visibility Work</h2>
      <p>
        The field is new, and several confident approaches circulating do not survive contact with how
        these systems work.
      </p>
      <p>
        <strong>Treating one check as data.</strong> Because answers vary between runs, a single query
        showing you present or absent tells you almost nothing. Teams routinely celebrate or panic over
        results that would have come out differently thirty seconds later.
      </p>
      <p>
        <strong>Optimizing your own site and stopping there.</strong> Publishing a page claiming you are
        the best option in your category adds nothing, because every competitor has published the same
        page. The sources that differentiate are third-party, and effort spent exclusively on owned
        properties largely misses the mechanism.
      </p>
      <p>
        <strong>Assuming search tactics transfer directly.</strong> Keyword targeting, internal linking,
        and technical optimization help by improving your presence in retrieved sources, but they do not
        address extractability, third-party coverage, or how you are characterized. AI visibility is
        adjacent to SEO rather than a subset of it.
      </p>
      <p>
        <strong>Chasing prompts nobody asks.</strong> Tracking phrasings you invented rather than
        phrasings buyers use produces clean-looking data about nothing. Prompt selection is the highest
        leverage decision in the whole exercise and usually gets the least thought.
      </p>
      <p>
        <strong>Counting mentions without reading them.</strong> A mention describing you as expensive and
        hard to learn is not a win. Sentiment and framing carry more weight here than in search precisely
        because the assistant is summarizing rather than listing.
      </p>
      <p>
        <strong>Believing anyone who guarantees placement.</strong> There is no submission process, no
        ranking factor to manipulate, and no mechanism by which a vendor can guarantee an assistant will
        recommend you. Influence is real; control is not.
      </p>
      <p>
        <strong>Expecting search-speed feedback.</strong> A published page can affect a long-tail search
        query within days. AI answers respond on the timescale of source updates and model releases, so
        judging an effort after two weeks measures noise.
      </p>

      <h2>How This Fits With Traditional SEO</h2>
      <p>
        The two disciplines are related but the relationship is often misdescribed.
      </p>
      <p>
        <strong>The overlap is real and largest for retrieval.</strong> Assistants that search the live web
        draw heavily on pages that already rank well, so conventional SEO does substantial work for AI
        visibility without any additional effort. This is most pronounced on Gemini given its integration
        with Google index.
      </p>
      <p>
        <strong>The divergence is in what gets rewarded.</strong> Search rewards a page being the best
        answer. AI answers reward your brand being consistently mentioned across the sources a summary is
        built from. One is about a page winning a position; the other is about an entity being present in
        a body of evidence.
      </p>
      <p>
        <strong>Content strategy shifts accordingly.</strong> For search, comprehensive pages that fully
        answer a query perform well. For AI visibility, being cited across many independent sources
        matters more than owning one excellent page, which pushes effort toward digital PR, review
        presence, documentation, and community engagement.
      </p>
      <p>
        <strong>Some traffic is genuinely lost.</strong> Informational queries that a summary fully
        satisfies will not produce clicks regardless of what you do. Content strategy is moving toward
        material requiring engagement with the actual page: tools, original data, detailed comparison, and
        anything the reader must act on rather than merely know.
      </p>
      <p>
        <strong>Both should be measured, separately.</strong> Search rankings and AI mention rates answer
        different questions and can move in opposite directions. Collapsing them into one visibility
        number hides exactly the information you need.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For the content work that underpins visibility in both search and AI answers, see the{' '}
        <Link href="/ai-tools/seo-content-tools">SEO content tools</Link>. For generating titles, meta
        descriptions, and alt text, see the{' '}
        <Link href="/ai-tools/generator-tools">generator tools</Link>. For making content read as
        genuinely human rather than generic, see the{' '}
        <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is AI rank tracking?',
    answer:
      'Measuring how often your brand appears in the answers AI assistants give to relevant questions. Since a growing share of buying research now happens in ChatGPT, Claude, Gemini, and Perplexity rather than on search results pages, being absent from those answers means being absent from the decision entirely.',
  },
  {
    category: 'General',
    question: 'Are these rank tracking tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits.',
  },
  {
    category: 'General',
    question: 'What is generative engine optimization?',
    answer:
      'One of several competing names for optimizing visibility in AI-generated answers, alongside answer engine optimization and LLM visibility. The discipline is new enough that terminology has not settled, but the underlying question is consistent: when an assistant answers a question in your category, does it mention you and what does it say.',
  },
  {
    category: 'Technical',
    question: 'How is AI visibility different from search ranking?',
    answer:
      'There is no ranked list, so presence matters more than position. Answers are non-deterministic, so a single check proves nothing. Phrasing changes results substantially. Knowledge comes from training data or live retrieval depending on the system. And an assistant can recommend you while sending zero traffic.',
  },
  {
    category: 'Technical',
    question: 'Why do I get different answers to the same question?',
    answer:
      'Because generation involves sampling rather than lookup, so responses vary between runs. This is the central methodological challenge in AI rank tracking, and it means meaningful measurement requires running the same prompt repeatedly and looking at how often you appear across runs.',
  },
  {
    category: 'Technical',
    question: 'Do assistants answer from training data or live search?',
    answer:
      'It varies by system and by question, and most now do some of both. Training data is fixed at a cutoff and cannot be influenced afterwards. Live retrieval means current content can affect answers within days. Which mode applies determines whether publishing something today can change the answer.',
  },
  {
    category: 'Technical',
    question: 'Can I see which sources an AI answer used?',
    answer:
      'On some platforms, yes. Perplexity cites sources for nearly every answer, which makes it the most transparent and actionable surface. Other systems expose citations inconsistently. Where citations are visible they are the most directly useful signal available, since they show exactly which pages shape your category answers.',
  },
  {
    category: 'Usage',
    question: 'Which prompts should I track?',
    answer:
      'How buyers actually ask, in natural language about problems rather than in keyword form. Cover the decision stages: problem-aware, category, comparison, and objection prompts. Include prompts naming competitors, since alternatives-to questions are high intent. Include prompts naming you. Then keep the set stable so you can trend it.',
  },
  {
    category: 'Usage',
    question: 'How often should I check my AI visibility?',
    answer:
      'Monthly is sufficient for most brands, with more frequent checks after you make a significant change or when a platform releases a new model. What matters is consistency of method and trend over time rather than frequency, since week-to-week movement is mostly noise.',
  },
  {
    category: 'Usage',
    question: 'How many times should I run each prompt?',
    answer:
      'Enough that mention rate stabilizes, which usually means several runs rather than one. Because answers vary between generations, a single result is anecdote rather than data. The proportion of runs including you is the meaningful unit and the number worth tracking.',
  },
  {
    category: 'Usage',
    question: 'Should I track all four platforms or just one?',
    answer:
      'Start with the one your audience uses. ChatGPT has the largest user base and is the default starting point on volume alone. Claude skews professional and technical, so it matters disproportionately for developer tools and B2B software. Perplexity is the most actionable because it cites sources.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can I control what AI assistants say about my brand?',
    answer:
      'Not directly, and anyone claiming otherwise is overselling. You can influence the sources these systems draw on, correct inaccurate information where it originates, and make your factual claims easier to extract and cite. What you cannot do is optimize an assistant the way you optimize for a ranking algorithm.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why can I not change an answer that comes from training data?',
    answer:
      'Because training data is fixed at a cutoff. Content published afterwards is not part of it and will not affect answers until a future model incorporates it. Effort is better directed at retrieval-based surfaces, where new content can influence answers within days rather than model generations.',
  },
  {
    category: 'Detection and Limits',
    question: 'Is being mentioned always good?',
    answer:
      'No, and this is easy to miss when tracking mention rate alone. Assistants characterize brands rather than just listing them, so being described as the budget option, the hard-to-use one, or the choice for a segment you do not serve shapes decisions against you. Read the answers rather than only counting mentions.',
  },
  {
    category: 'Detection and Limits',
    question: 'My mention rate dropped sharply. What happened?',
    answer:
      'Check whether competitors dropped too. A decline across the board usually means the platform shipped a model update rather than that your visibility changed. Sharp discontinuities affecting your whole prompt set at once are almost always platform-side rather than something you caused.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why does my analytics show no traffic from AI assistants?',
    answer:
      'Because an assistant can recommend you without generating a click. The user reads the answer and acts on it, sometimes searching your brand name directly later. This is the central measurement problem in the field and precisely why dedicated visibility tracking exists separately from analytics.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'How does Perplexity differ from the other platforms?',
    answer:
      'It is search-first by design, retrieving and citing sources for nearly every answer. That transparency makes it the most immediately actionable surface, since you can trace which pages produced a given answer and work on those sources directly rather than guessing at what influenced the result.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Does Gemini visibility overlap with Google search rankings?',
    answer:
      'Substantially. Gemini integrates with Google index and appears in AI overviews on search results, so its behaviour is closest to traditional search of the four platforms. Strong conventional SEO tends to carry over there more directly than it does to the others.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does Claude visibility matter for B2B specifically?',
    answer:
      'Because its usage skews toward professional and technical contexts. For developer tools, B2B software, and technical services, a smaller total user base can still represent a disproportionate share of the people actually making purchasing decisions in that category.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I actually improve my AI visibility?',
    answer:
      'Be present across the sources these systems read, including review sites, comparison articles, documentation, and community discussion. Prioritize third-party mentions over your own site claims. State facts plainly so they can be extracted and cited. And correct inaccurate information at its source rather than publishing a rebuttal on your own domain.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Why do third-party mentions matter more than my own site?',
    answer:
      'Because every company site claims to be the best option, so that claim carries almost no information. Independent reviews, comparison articles, and community recommendations are what assistants draw on when characterizing a category, since those sources differentiate between products in a way marketing copy does not.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I make content that AI answers will cite?',
    answer:
      'State facts plainly and specifically so individual claims can be lifted and attributed. Clear statements of what a product does, who it suits, what it costs, and how it compares work well. Specifications, comparison tables, and documented limitations are exactly the material an assembled answer needs.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What should I do if an assistant says something wrong about my product?',
    answer:
      'Find where the wrong information originates, since the underlying sources are usually inaccurate too. Updating outdated review listings, comparison articles, and directory entries is far more effective than publishing a correction on your own site, which carries little weight relative to third-party sources.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Should I track competitors alongside my own brand?',
    answer:
      'Yes, and it is one of the most useful things you can do. Competitor co-occurrence shows who you are being grouped with, and if assistants consistently name three rivals but not you for your core use case, that is a specific and actionable gap rather than a vague visibility problem.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why do assistants describe my product using outdated information?',
    answer:
      'Because framing is sticky. Once a characterization is established across the sources assistants read, it persists through repeated answers, so a description accurate three years ago can follow a product long after it stopped being true. Catching this early is one of the more valuable things regular tracking surfaces.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why is absence from an AI answer worse than a low search ranking?',
    answer:
      'Because a low ranking is at least visible on the page, while absence from a summary is total. Users generally accept an assistant framing that three tools lead a category rather than verifying it, which concentrates attention on whoever is named and removes everyone else from consideration entirely.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How does content strategy change for AI visibility?',
    answer:
      'It shifts from owning one excellent page toward being cited across many independent sources. Search rewards a page being the best answer; AI answers reward an entity appearing consistently in the evidence a summary is built from. That pushes effort toward digital PR, review presence, documentation, and community engagement.',
  },
  {
    category: 'Usage',
    question: 'Which absences should I actually try to fix?',
    answer:
      'The ones that matter commercially. Not appearing in a prompt from an audience that would never buy is noise, not a problem. Absence from the highest-intent prompts in your core use case, and from alternatives-to questions naming your closest competitors, is where the effort belongs.',
  },
  {
    category: 'General',
    question: 'Why has buying research moved to AI assistants?',
    answer:
      'Because they collapse a multi-step process. Research traditionally meant several searches, a dozen tabs, and assembling a shortlist yourself. An assistant returns the shortlist directly and holds context for follow-up questions, so the narrowing that actually decides a purchase happens in conversation rather than across separate queries.',
  },
  {
    category: 'General',
    question: 'Which categories are most affected by this shift?',
    answer:
      'Those where choice is confusing: many similar options, unclear differentiation, and high research burden. Software, professional services, and technical products are affected earlier and more heavily. Categories where buyers already know what they want see less change.',
  },
  {
    category: 'Detection and Limits',
    question: 'What are the most common mistakes in AI visibility work?',
    answer:
      'Treating a single check as data when answers vary between runs. Optimizing only your own site when the differentiating sources are third-party. Assuming search tactics transfer directly. Tracking prompts nobody actually asks. Counting mentions without reading how you are described. And expecting search-speed feedback.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can a vendor guarantee my brand will be recommended?',
    answer:
      'No. There is no submission process, no ranking factor to manipulate, and no mechanism by which anyone can guarantee an assistant recommends you. Influence over the sources these systems read is real and worth working on. Control over the output is not, and claims otherwise should be treated as a warning sign.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I build a visibility program from scratch?',
    answer:
      'Establish a baseline by running twenty to thirty prompts covering your category, competitors, and brand, several times each. Identify which absences matter commercially rather than fixing every gap. Trace the sources behind answers where platforms cite them. Work on third-party surfaces first. Then re-measure monthly using identical method.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How long before changes show up in AI answers?',
    answer:
      'Retrieval-based surfaces respond within weeks of the underlying sources changing. Training-data answers change only across model generations, which can be many months. Neither responds to a single published page the way a long-tail search query sometimes does, so judging an effort after two weeks measures noise rather than effect.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Should I measure AI visibility and search rankings together?',
    answer:
      'Measure both, but separately. They answer different questions and can move in opposite directions, since search rewards a page winning a position while AI answers reward an entity being present across the sources a summary draws on. Collapsing them into one number hides exactly the information you need.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Does traditional SEO help with AI visibility?',
    answer:
      'Considerably, since assistants that retrieve live content draw heavily on pages that already rank well. The overlap is largest for Gemini given its integration with Google index. But AI visibility also depends on third-party mentions and extractability in ways conventional ranking does not measure.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why do slightly different prompts give completely different brands?',
    answer:
      'Because assistants respond to the specific framing rather than normalizing to a canonical query the way search engines do. Best tool for X, alternatives to Y, and how do I solve Z each set up a different answer, even though a search engine would treat them as closely related.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my tracking data stored?',
    answer:
      'Prompts and results are not retained for training or shared with third parties, and are not stored after your session. If you are tracking prompts that reveal unreleased positioning or competitive strategy, that is worth knowing before running them anywhere.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
