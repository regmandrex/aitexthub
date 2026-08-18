import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>SEO content tools</strong> check and improve the writing that has to perform in search
        results. This category covers two distinct functions across all nine major models: the{' '}
        <Link href="/ai-blog-post-validator">AI blog post validator</Link>, which audits articles against
        the criteria search engines and readers actually reward, and the{' '}
        <Link href="/ai-product-description-improver">AI product description improver</Link>, which
        strengthens ecommerce copy.
      </p>
      <p>
        Model-specific versions exist for{' '}
        <Link href="/chatgpt-blog-post-validator">ChatGPT</Link>,{' '}
        <Link href="/claude-blog-post-validator">Claude</Link>,{' '}
        <Link href="/gemini-product-description-improver">Gemini</Link>,{' '}
        <Link href="/llama-blog-post-validator">LLaMA</Link>,{' '}
        <Link href="/grok-product-description-improver">Grok</Link>,{' '}
        <Link href="/perplexity-blog-post-validator">Perplexity</Link>,{' '}
        <Link href="/deepseek-product-description-improver">DeepSeek</Link>, and{' '}
        <Link href="/mistral-blog-post-validator">Mistral</Link>.
      </p>
      <p>
        Search has changed substantially, and a good deal of widely circulated SEO advice now describes
        tactics that stopped working years ago. Keyword density is not a ranking factor. Word count is not
        a ranking factor. What matters is whether a page genuinely answers what someone was looking for,
        and whether there is evidence behind it that a competitor generating similar content cannot
        replicate.
      </p>
      <p>
        The sections below cover what search engines actually reward, how to validate a blog post before
        publishing, what makes product copy convert, which widely repeated practices are now wrong, how to
        improve pages you already have, how to measure whether content works, the technical foundations
        that determine whether any of it is visible, and how AI answers are changing the relationship
        between ranking and traffic.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>What Search Engines Actually Reward</h2>
      <p>
        Google&apos;s stated position is that it rewards helpful, reliable, people-first content. That
        sounds like marketing language, but the ranking systems behind it are specific enough to act on.
      </p>
      <h3>Search Intent</h3>
      <p>
        Intent is the single most important concept in modern SEO, and misreading it is the most common
        reason a well-written page fails to rank.
      </p>
      <p>
        Queries fall into recognizable types. <strong>Informational</strong> queries want an explanation.{' '}
        <strong>Navigational</strong> queries want a specific site. <strong>Commercial</strong> queries
        want to compare options before deciding. <strong>Transactional</strong> queries want to buy now.
      </p>
      <p>
        A page that answers the wrong intent will not rank regardless of quality. If the results for a
        query are all comparison articles, publishing a product page will not compete, because the search
        engine has already learned what people clicking that query want. The practical method is simple
        and underused: search your target query, read what currently ranks, and note what format,
        depth, and angle those pages share. That is the intent, expressed as evidence rather than
        guesswork.
      </p>
      <h3>E-E-A-T</h3>
      <p>
        Experience, expertise, authoritativeness, and trustworthiness are the criteria in Google&apos;s
        published quality rater guidelines. The first E, experience, was added later and is the one most
        relevant to AI-assisted content, because it is the hardest to fabricate.
      </p>
      <p>
        A review by someone who used a product describes specific things: what surprised them, what broke,
        how long setup took, what they switched from and why. Generated content describes products in
        terms anyone could write from a specification sheet. That difference is visible to readers and
        increasingly to ranking systems.
      </p>
      <p>
        Trustworthiness carries the most weight in categories affecting health, finance, safety, and legal
        matters, where the guidelines set a higher bar. Clear authorship, cited sources, transparent
        corrections, and accurate claims matter more in those categories than anywhere else.
      </p>
      <h3>Helpful Content</h3>
      <p>
        The useful test Google articulates is whether content was created primarily for people or
        primarily to rank. Signals that it was created to rank include covering topics only because they
        get traffic, summarizing what others said without adding anything, writing to a word count rather
        than to a point, and answering a question the page never actually resolves.
      </p>

      <h2>Blog Post Validation: What to Check</h2>
      <p>
        The <Link href="/ai-blog-post-validator">AI blog post validator</Link> audits an article against
        these criteria before publication.
      </p>
      <p>
        <strong>Does it answer the query early?</strong> Readers arriving from search have a specific
        question. Making them read three paragraphs of preamble about how the topic is increasingly
        important in the modern landscape before reaching the answer increases bounce rate and signals the
        page did not deliver. Answer first, then elaborate.
      </p>
      <p>
        <strong>Does it contain anything a competitor could not write?</strong> Original data, personal
        testing, specific figures from your own experience, named examples, or a genuine position that
        differs from consensus. Content assembled from what already ranks has nothing to offer over what
        already ranks.
      </p>
      <p>
        <strong>Is the structure scannable?</strong> Descriptive subheadings, short paragraphs, and
        front-loaded sentences serve how people actually read on the web, which is by scanning first and
        reading second. Subheadings that state what a section covers also help search engines understand
        the page.
      </p>
      <p>
        <strong>Is it internally linked?</strong> Links to related pages help readers continue and help
        search engines understand relationships between your pages. Descriptive anchor text conveys more
        than a bare instruction to click here.
      </p>
      <p>
        <strong>Is it accurate?</strong> This matters more with AI drafting, because models fabricate
        statistics and citations that look entirely plausible. Every figure and every reference needs
        verification against a real source before publication.
      </p>

      <h2>Product Description Improvement</h2>
      <p>
        The <Link href="/ai-product-description-improver">AI product description improver</Link> addresses
        ecommerce copy, where the writing has to do something more specific than inform: it has to resolve
        the hesitation stopping someone from buying.
      </p>
      <p>
        <strong>Features describe the product; benefits describe the outcome.</strong> A twelve-hour
        battery is a feature. Getting through a full day of travel without hunting for an outlet is the
        benefit. Most weak product copy lists features exhaustively and never makes the translation, which
        leaves the reader to do work they usually will not do.
      </p>
      <p>
        <strong>Specifics build trust; superlatives destroy it.</strong> Premium, high-quality,
        best-in-class, and innovative appear on every product page ever written and are therefore read as
        noise. Dimensions, materials, weight, capacity, compatibility, and measured performance figures
        are what buyers actually need, and their presence signals that the seller knows the product.
      </p>
      <p>
        <strong>Answer the objection before it stops the sale.</strong> Every product has a predictable
        set of hesitations: will this fit, will it work with what I own, how long does it last, what
        happens if it is wrong. Copy that addresses these directly converts better than copy that avoids
        them, and the questions are usually visible in reviews and support tickets.
      </p>
      <p>
        <strong>Avoid duplicate manufacturer copy.</strong> Ecommerce sites that paste supplier
        descriptions end up with text identical to hundreds of competitors, which gives search engines no
        reason to prefer any of them. Original descriptions are one of the highest-value SEO investments
        an ecommerce site can make, and one of the least done.
      </p>
      <p>
        <strong>Structure for scanning.</strong> A short opening that states what the product is and who
        it suits, then scannable specifications, then supporting detail. Buyers compare across tabs and
        rarely read continuously.
      </p>

      <h2>SEO Advice That Is Now Wrong</h2>
      <p>
        A number of widely repeated practices are either ineffective or actively harmful, and they persist
        because they were once true.
      </p>
      <p>
        <strong>Keyword density.</strong> There is no target percentage. Repeating a phrase to hit a ratio
        makes writing worse and has not helped rankings for many years. Use the term naturally where it
        belongs and use related vocabulary elsewhere, which is closer to how the language actually works
        and how modern retrieval interprets it.
      </p>
      <p>
        <strong>Minimum word counts.</strong> Length is not a ranking factor. Longer content sometimes
        correlates with better performance because thorough answers need space, but padding a page to
        reach 2,000 words adds nothing a reader values. The right length is whatever answers the question
        completely.
      </p>
      <p>
        <strong>Exact-match anchor text everywhere.</strong> Over-optimized internal linking looks
        manipulative. Descriptive, natural anchor text serves readers better and carries the same
        information.
      </p>
      <p>
        <strong>Meta keywords.</strong> Ignored by every major search engine for well over a decade. The
        tag still appears in older templates and in advice written when it mattered, but filling it in has
        no effect whatsoever on how a page is ranked or understood, and time spent populating it across a
        site is entirely wasted. Remove it from your templates rather than maintaining it.
      </p>
      <p>
        <strong>Publishing frequency for its own sake.</strong> Volume without substance dilutes a site.
        A small number of genuinely useful pages outperforms a large number of thin ones, and thin pages
        can drag down perception of the whole domain.
      </p>
      <p>
        <strong>Chasing every keyword variation with a separate page.</strong> Search engines understand
        synonyms and related concepts. Multiple near-identical pages compete with each other rather than
        capturing more traffic, which is the cannibalization problem.
      </p>

      <h2>AI-Generated Content and Search</h2>
      <p>
        Google&apos;s position is that it does not penalize AI-generated content as such; it penalizes
        content produced to rank rather than to help. That distinction is doing considerable work, and it
        is worth understanding what it means in practice.
      </p>
      <p>
        Generation makes producing low-value content cheap, so the volume of it has increased enormously,
        and search systems have responded by weighting the signals that low-value content lacks:
        firsthand experience, original data, genuine expertise, and specificity that cannot be assembled
        from existing sources.
      </p>
      <p>
        The practical implication is that AI-assisted content competes fine when it carries real
        substance, and struggles when it does not. The failure mode is not detection; it is that the
        content has nothing to offer over the many similar pages produced the same way. Adding what a
        model cannot supply, meaning your own testing, figures, examples, and position, is both the
        strongest SEO move and the strongest quality move.
      </p>
      <p>
        For rewriting drafts so they read naturally rather than generically, see the{' '}
        <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link>.
      </p>

      <h2>Updating Existing Content</h2>
      <p>
        Improving pages you already have is usually a better investment than publishing new ones, and it
        is consistently underdone because it is less satisfying than creating something.
      </p>
      <p>
        <strong>Pages ranking just below the first page are the highest-leverage targets.</strong> A page
        in positions eleven to twenty already has relevance signals the search engine recognizes; it needs
        a reason to move up rather than a reason to exist. Improving one of these typically produces more
        traffic than writing a new article from nothing.
      </p>
      <p>
        <strong>Declining pages usually lost to a better answer, not to an algorithm.</strong> When
        traffic falls, look at what now ranks above you. Frequently a competitor published something more
        current, more thorough, or better matched to intent. Matching or exceeding that specific thing is
        more productive than general optimization.
      </p>
      <p>
        <strong>Freshness matters where the topic changes.</strong> For pricing, statistics, software
        versions, and regulations, outdated content actively misleads and readers notice. For evergreen
        explanations, changing dates without changing content is a cosmetic move that fools nobody.
      </p>
      <p>
        <strong>Consolidation often beats addition.</strong> Several thin pages on closely related
        subtopics usually perform worse than one strong page covering the subject properly. Merging them
        and redirecting the old URLs concentrates ranking signals rather than dividing them.
      </p>
      <p>
        <strong>Pruning is a real tactic.</strong> Pages that attract no traffic, serve no user need, and
        have no links pointing at them can dilute how a site is assessed overall. Removing or
        substantially improving them sometimes lifts the rest of the domain. Audit before acting, though:
        a page with no search traffic may still convert well from email or social, or serve an existing
        customer need that never shows up in ranking data. Traffic alone is the wrong criterion, and
        deleting a page that quietly does a job is a harder mistake to undo than leaving it in place.
      </p>

      <h2>Measuring Whether Content Works</h2>
      <p>
        Rankings are a proxy. What matters is whether the page does its job, and the useful measurements
        are more specific than a position number.
      </p>
      <p>
        <strong>Impressions and click-through rate</strong> separate two different problems. Low
        impressions mean you are not ranking for anything with volume, which is a relevance or targeting
        issue. High impressions with low click-through means you are ranking but the title and description
        are not earning the click, which is a copy problem and much cheaper to fix.
      </p>
      <p>
        <strong>Queries you rank for but did not target</strong> are one of the most useful signals
        available. They show what readers actually think your page is about, and they frequently reveal
        topics worth covering properly that you stumbled into accidentally.
      </p>
      <p>
        <strong>Return-to-search behaviour</strong> indicates the page did not answer the question.
        Someone clicking your result and immediately going back to try another is a clearer signal of
        failure than time on page, which is easily misread.
      </p>
      <p>
        <strong>Conversions matter more than traffic</strong> for commercial pages. A page attracting a
        thousand visitors who never buy is worth less than one attracting fifty who do, and optimizing for
        volume alone can actively move you away from the audience that matters.
      </p>
      <p>
        <strong>Give changes time.</strong> Search results fluctuate, and reacting to a few days of
        movement leads to changing things that were working. Meaningful assessment usually needs several
        weeks, and comparing like periods rather than adjacent ones avoids seasonal misreadings.
      </p>

      <h2>Technical Foundations</h2>
      <p>
        Content quality only matters if the page can be crawled, indexed, and rendered.
      </p>
      <p>
        <strong>Indexability.</strong> Confirm the page is not blocked by robots.txt or carrying a noindex
        directive. A frequent and costly error is blocking a page in robots.txt to remove it from search:
        that prevents crawling, not indexing, so the URL can still appear. Removing a page requires
        noindex, which requires the crawler to be allowed to fetch it.
      </p>
      <p>
        <strong>Canonical tags.</strong> Where similar content exists at multiple URLs, canonicals tell
        search engines which is authoritative and consolidate ranking signals rather than splitting them.
      </p>
      <p>
        <strong>Core Web Vitals.</strong> Largest Contentful Paint measures loading, Interaction to Next
        Paint measures responsiveness, and Cumulative Layout Shift measures visual stability. They are
        real ranking inputs, though modest ones relative to content relevance, and they matter more as a
        tiebreaker between comparable pages.
      </p>
      <p>
        <strong>Structured data.</strong> Schema markup helps search engines understand page content and
        can produce rich results. Article, FAQ, Product, and Breadcrumb schemas are the most broadly
        applicable.
      </p>
      <p>
        <strong>Mobile rendering.</strong> Indexing is mobile-first, so the mobile version is what gets
        evaluated. Content hidden or omitted on mobile is effectively content search engines do not see.
      </p>

      <h2>Ecommerce SEO Beyond Descriptions</h2>
      <p>
        Product pages have structural problems that copy improvements alone do not solve.
      </p>
      <p>
        <strong>Category pages usually carry more search value than product pages.</strong> People search
        for types of thing far more often than for a specific item, so the category page is where broad
        commercial queries land. Treating category pages as bare grids of products wastes the highest
        intent traffic a store receives.
      </p>
      <p>
        <strong>Faceted navigation generates enormous URL sprawl.</strong> Every combination of filters
        can create a crawlable URL, producing thousands of near-identical pages that consume crawl budget
        and split ranking signals. Canonicals, robots directives, or parameter handling are needed to
        control it, and neglecting this is one of the most common technical failures on large stores.
      </p>
      <p>
        <strong>Out-of-stock and discontinued products need a decision.</strong> Deleting the page loses
        accumulated ranking signals and any links pointing at it. The usual better options are keeping the
        page with alternatives shown, or redirecting to the closest replacement or parent category.
      </p>
      <p>
        <strong>Reviews are original content you do not have to write.</strong> They add specificity,
        answer objections in the buyer&apos;s own language, and update continuously. They also surface the
        exact hesitations worth addressing in the description itself.
      </p>
      <p>
        <strong>Variant handling matters.</strong> Separate URLs for every size and colour create
        duplicate content competing with itself. A single product page handling variants through selection
        usually performs better than many thin ones.
      </p>

      <h2>Search Is Changing: AI Answers</h2>
      <p>
        A structural shift is underway that affects how content should be written, and it is worth
        planning for rather than reacting to.
      </p>
      <p>
        Search engines increasingly answer questions directly rather than only listing links, through AI
        overviews and generated summaries. At the same time, a growing share of informational queries
        never reach a search engine at all, going instead to ChatGPT, Claude, Gemini, or Perplexity.
      </p>
      <p>
        The consequence is that ranking and being read are separating. A page can be the source an AI
        answer draws on while receiving no click, and the traditional relationship between position and
        traffic weakens for exactly the informational queries that content marketing has historically
        targeted.
      </p>
      <p>
        What appears to help is being the kind of source these systems draw on: clear factual statements
        that can be extracted and attributed, specific data rather than general claims, direct answers
        near the top of a page, and structure that makes individual claims easy to isolate. Content that
        buries its answer in narrative is harder to cite.
      </p>
      <p>
        The strategic implication is that queries where a summary fully satisfies the reader will lose
        click traffic regardless of what you do. Value concentrates in content requiring engagement with
        the actual page: tools, original data, detailed comparison, and anything where the reader needs to
        act rather than just know. For measuring how often your brand appears in AI answers, see the{' '}
        <Link href="/ai-tools/ai-rank-tracking-tools">AI rank tracking tools</Link>.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For generating titles, meta descriptions, and alt text, see the{' '}
        <Link href="/ai-tools/generator-tools">generator tools</Link>. For tracking visibility inside AI
        answers rather than search results, see the{' '}
        <Link href="/ai-tools/ai-rank-tracking-tools">AI rank tracking tools</Link>. For grammar,
        readability, and tone, see the <Link href="/ai-tools/writing-tools">writing tools</Link>. For
        robots.txt, Open Graph tags, and slug generation, see the{' '}
        <Link href="/ai-tools/developer-tools">developer tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What do SEO content tools do?',
    answer:
      'They audit and improve content that has to perform in search. The blog post validator checks articles against the criteria search engines and readers reward, and the product description improver strengthens ecommerce copy by translating features into benefits and adding the specifics buyers need.',
  },
  {
    category: 'General',
    question: 'Are these SEO tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits.',
  },
  {
    category: 'General',
    question: 'Do I need the model-specific version?',
    answer:
      'Usually not. The general blog post validator and product description improver work on text from any source, including content you wrote yourself. The model-specific versions are tuned for characteristic weaknesses of each model output.',
  },
  {
    category: 'Technical',
    question: 'What is search intent and why does it matter so much?',
    answer:
      'Search intent is what someone actually wants from a query: an explanation, a specific site, a comparison before deciding, or to buy now. A page answering the wrong intent will not rank regardless of quality, because the search engine has already learned what people clicking that query want.',
  },
  {
    category: 'Technical',
    question: 'How do I work out the intent behind a keyword?',
    answer:
      'Search it and read what currently ranks. Note the format, depth, and angle those pages share, because that is the intent expressed as evidence rather than guesswork. If every result is a comparison article, a product page will not compete no matter how well written it is.',
  },
  {
    category: 'Technical',
    question: 'What is E-E-A-T?',
    answer:
      'Experience, expertise, authoritativeness, and trustworthiness, the criteria in Google published quality rater guidelines. Experience was added later and is most relevant to AI-assisted content because it is hardest to fabricate: firsthand detail about what surprised you or what broke cannot be assembled from a specification sheet.',
  },
  {
    category: 'Technical',
    question: 'Is keyword density still a ranking factor?',
    answer:
      'No. There is no target percentage, and repeating a phrase to hit a ratio makes writing worse without helping rankings. Use the term naturally where it belongs and related vocabulary elsewhere, which is both how language actually works and how modern retrieval interprets a page.',
  },
  {
    category: 'Technical',
    question: 'Does word count affect rankings?',
    answer:
      'No. Length is not a ranking factor. Longer content sometimes correlates with better performance because thorough answers need space, but padding to reach a target adds nothing readers value. The right length is whatever answers the question completely and then stops.',
  },
  {
    category: 'Technical',
    question: 'What are Core Web Vitals?',
    answer:
      'Largest Contentful Paint measures loading, Interaction to Next Paint measures responsiveness, and Cumulative Layout Shift measures visual stability. They are genuine ranking inputs but modest ones relative to content relevance, mattering most as a tiebreaker between otherwise comparable pages.',
  },
  {
    category: 'Technical',
    question: 'Will blocking a page in robots.txt remove it from Google?',
    answer:
      'No, and this is a costly misunderstanding. Robots.txt controls crawling, not indexing, so a blocked URL can still appear in results if other pages link to it. Removing a page requires a noindex directive, which requires the crawler to be allowed to fetch the page so it can read that directive.',
  },
  {
    category: 'Usage',
    question: 'How should I structure a blog post for search?',
    answer:
      'Answer the query early rather than building up to it, since readers arriving from search have a specific question and preamble increases bounce. Use descriptive subheadings, keep paragraphs short, front-load sentences, and link internally with anchor text that describes the destination.',
  },
  {
    category: 'Usage',
    question: 'What makes a product description convert?',
    answer:
      'Translating features into outcomes, since a twelve-hour battery is a feature and getting through a travel day without hunting for an outlet is the benefit. Specifics rather than superlatives, because premium and best-in-class read as noise. And answering the objection that stops the sale before the buyer has to ask.',
  },
  {
    category: 'Usage',
    question: 'Should I use manufacturer product descriptions?',
    answer:
      'No, if you can avoid it. Pasting supplier copy leaves you with text identical to hundreds of competitors, giving search engines no reason to prefer your page. Original descriptions are among the highest-value SEO investments an ecommerce site can make and among the least commonly done.',
  },
  {
    category: 'Usage',
    question: 'How do I know what objections to address in product copy?',
    answer:
      'Read your reviews and support tickets. The hesitations are usually already documented there: whether it fits, whether it works with something the buyer owns, how long it lasts, and what happens if it is wrong. Answering those directly in the description converts better than leaving them unresolved.',
  },
  {
    category: 'Usage',
    question: 'How many keywords should one page target?',
    answer:
      'One primary topic, with the related terms and questions that naturally belong to it. Search engines understand synonyms and related concepts, so building separate near-identical pages for keyword variations makes those pages compete with each other rather than capturing more traffic.',
  },
  {
    category: 'Detection and Limits',
    question: 'Does Google penalize AI-generated content?',
    answer:
      'Not as such. Google states it rewards helpful, people-first content regardless of production method, and penalizes content made to rank rather than to help. Since generation made low-value content cheap to produce at volume, search systems now weight the signals such content lacks: firsthand experience, original data, and genuine specificity.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why does my AI-written article not rank?',
    answer:
      'Usually because it contains nothing a competitor could not also produce. Content assembled from what already ranks has no advantage over what already ranks. The fix is adding what a model cannot supply: your own testing, figures, named examples, and a position you are willing to defend.',
  },
  {
    category: 'Detection and Limits',
    question: 'Do I need to disclose that content was AI-assisted?',
    answer:
      'Google does not require it for ranking purposes. Some platforms, publications, and jurisdictions do, and audience expectations vary by context. The ranking question and the disclosure question are separate, and the second is governed by your publisher, platform, and legal obligations rather than by search.',
  },
  {
    category: 'Detection and Limits',
    question: 'Are hallucinated statistics a real risk in SEO content?',
    answer:
      'A serious one. Models fabricate figures and citations that look entirely plausible, including realistic-seeming sources that do not exist. Publishing an invented statistic damages trust and, in regulated categories, can carry worse consequences. Verify every figure and reference against a real source before publishing.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What structured data should I add to an article?',
    answer:
      'Article schema for the content itself, FAQ schema where the page answers discrete questions, and Breadcrumb schema for navigation context. Product schema applies to ecommerce pages. These help search engines understand the page and can produce rich results, though they are not a ranking factor in themselves.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Does mobile matter if most of my traffic is desktop?',
    answer:
      'Yes, because indexing is mobile-first, meaning the mobile version is what gets evaluated regardless of where your traffic comes from. Content hidden or omitted on mobile is effectively content search engines do not see, which is a common and invisible way pages lose relevance.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'When should I use canonical tags?',
    answer:
      'Where similar or identical content is reachable at multiple URLs, such as parameter variations, print versions, or syndicated copies. A canonical tells search engines which URL is authoritative, consolidating ranking signals onto one page rather than splitting them across several.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'My page is well written but does not rank. What should I check first?',
    answer:
      'Intent, then indexability. Search your target query and compare your page format against what ranks; if they are comparison articles and yours is a product page, that alone explains it. Then confirm the page is crawlable, not carrying noindex, and rendering fully on mobile.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is keyword cannibalization?',
    answer:
      'Multiple pages on your site targeting the same query, so they compete with each other and split ranking signals instead of accumulating them. It usually comes from building a separate page for every keyword variation. Consolidating into one strong page normally outperforms several weak ones.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Should I publish more frequently to improve rankings?',
    answer:
      'Not for its own sake. Volume without substance dilutes a site, and thin pages can drag down how the whole domain is perceived. A small number of genuinely useful pages consistently outperforms a large number of shallow ones, and consolidating weak content often helps more than adding more.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Should I delete pages that get no search traffic?',
    answer:
      'Audit before deleting, because traffic alone is the wrong criterion. A page with no search visibility may still convert well from email or social, or serve an existing customer need that never appears in ranking data. Genuinely dead pages can dilute how a site is assessed, but removing one that quietly does a job is harder to undo than leaving it.',
  },
  {
    category: 'Usage',
    question: 'How do I write content that AI answers will cite?',
    answer:
      'Make individual claims easy to extract and attribute. Clear factual statements, specific data rather than general assertions, direct answers near the top of the page, and structure that isolates each point all help. Content that buries its answer inside narrative is substantially harder for these systems to cite.',
  },
  {
    category: 'Usage',
    question: 'Does updating the date on old content help?',
    answer:
      'Only if the content actually changed. Freshness genuinely matters for topics that move, such as pricing, statistics, software versions, and regulations, where outdated content misleads. For evergreen explanations, changing the date without changing anything is a cosmetic move that helps nothing.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How long should I wait before judging a content change?',
    answer:
      'Several weeks at minimum. Search results fluctuate constantly, and reacting to a few days of movement leads to reversing changes that were working. Compare like periods rather than adjacent ones, since seasonal patterns can otherwise be misread as the effect of your edit.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Should I write new content or improve existing pages?',
    answer:
      'Usually improve existing ones, and it is consistently underdone. Pages ranking in positions eleven to twenty are the highest-leverage targets, since they already have relevance signals and need a reason to move up rather than a reason to exist. Improving one typically produces more traffic than writing a new article from nothing.',
  },
  {
    category: 'Advanced Workflow',
    question: 'My traffic to a page is declining. What should I check?',
    answer:
      'Look at what now ranks above you. Declines usually mean a competitor published something more current, more thorough, or better matched to intent, rather than an algorithm penalty. Matching or exceeding that specific thing is far more productive than general optimization.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What metrics actually tell me whether content is working?',
    answer:
      'Impressions versus click-through rate separates two problems: low impressions is a relevance issue, while high impressions with low clicks is a title and description problem that is much cheaper to fix. Queries you rank for but did not target reveal what readers think the page is about. For commercial pages, conversions matter more than traffic.',
  },
  {
    category: 'Usage',
    question: 'Are category pages or product pages more important for SEO?',
    answer:
      'Category pages usually carry more search value, because people search for types of thing far more often than for a specific item. Treating category pages as bare product grids wastes the highest-intent commercial traffic a store receives, and adding genuine content there is often the biggest available win.',
  },
  {
    category: 'Technical',
    question: 'What should I do with out-of-stock product pages?',
    answer:
      'Do not simply delete them, since that discards accumulated ranking signals and any links pointing at the page. Better options are keeping the page live with alternatives shown, or redirecting to the closest replacement or the parent category, depending on whether the product is temporarily or permanently gone.',
  },
  {
    category: 'Technical',
    question: 'How do I handle faceted navigation on a large store?',
    answer:
      'Control it deliberately with canonicals, robots directives, or parameter handling. Every filter combination can create a crawlable URL, producing thousands of near-identical pages that consume crawl budget and split ranking signals. Neglecting this is one of the most common technical failures on large ecommerce sites.',
  },
  {
    category: 'Detection and Limits',
    question: 'How are AI answers changing SEO?',
    answer:
      'Ranking and being read are separating. Search engines increasingly answer directly through AI overviews, and many informational queries now go to ChatGPT or Perplexity instead. A page can be the source an answer draws on while receiving no click, which weakens the traditional link between position and traffic.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What is the right workflow for producing content that ranks?',
    answer:
      'Start by searching the target query and reading what ranks, to establish intent and the bar you have to clear. Decide what you can add that those pages lack. Draft answering the query early. Verify every factual claim. Then check structure, internal links, and technical indexability before publishing.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I make AI-assisted content actually competitive?',
    answer:
      'Add what a model cannot: original data from your own testing or analytics, named specifics, concrete numbers, and a position that differs from consensus with reasoning behind it. These are simultaneously the strongest E-E-A-T signals and the things that make content genuinely worth reading.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What matters most in regulated categories like health and finance?',
    answer:
      'Trustworthiness, which the quality rater guidelines weight most heavily in categories affecting health, finance, safety, and legal matters. Clear authorship, cited sources, accurate claims, and transparent corrections matter far more there than in ordinary categories, and the bar for demonstrated expertise is genuinely higher.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
