import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>AI professional tools</strong> refine the writing your career depends on: resumes, cover
        letters, LinkedIn profiles, business email, and press releases. This category collects 45 tools
        covering five core functions across nine models, including the{' '}
        <Link href="/ai-resume-humanizer">AI resume humanizer</Link>,{' '}
        <Link href="/ai-cover-letter-humanizer">cover letter humanizer</Link>,{' '}
        <Link href="/ai-linkedin-rewriter">LinkedIn rewriter</Link>,{' '}
        <Link href="/ai-email-humanizer">email humanizer</Link>, and{' '}
        <Link href="/ai-press-release-polisher">press release polisher</Link>.
      </p>
      <p>
        Professional writing is judged differently from other prose because it usually has a gatekeeper.
        A resume is screened by applicant tracking software before a person sees it. A cover letter is
        skimmed in well under a minute. A cold email is deleted or answered in the time it takes to read
        the first two lines. A press release is ignored by a journalist who receives dozens each day. In
        every case the reader is looking for a reason to stop reading, and generic AI-generated phrasing
        gives them one immediately.
      </p>
      <p>
        That gatekeeping shapes everything about how these documents should be written. Length matters
        because attention is scarce. Structure matters because readers skim in predictable patterns.
        Specificity matters because it is the only thing that distinguishes you from the many applicants
        or senders making the same general claims. And formatting matters in ways it does not elsewhere,
        because software reads your resume before any person does.
      </p>
      <p>
        Model-specific versions exist for{' '}
        <Link href="/chatgpt-resume-humanizer">ChatGPT</Link>,{' '}
        <Link href="/claude-cover-letter-humanizer">Claude</Link>,{' '}
        <Link href="/gemini-email-humanizer">Gemini</Link>, and the other major models. The general
        versions work on text from any source, including drafts you wrote yourself.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Resume Humanizers and Applicant Tracking Systems</h2>
      <p>
        The <Link href="/ai-resume-humanizer">AI resume humanizer</Link> addresses two audiences at once,
        and they want different things. An applicant tracking system parses your resume for keywords and
        structure. A human recruiter, if it reaches one, spends a famously short time on the first pass.
        Writing for one while ignoring the other is the most common resume failure.
      </p>
      <p>
        <strong>What applicant tracking systems actually do</strong> is more mundane than the folklore
        around them suggests. Most parse your document into structured fields, extract skills and
        employment history, and rank or filter against the job description. They are not sophisticated,
        and that is precisely why formatting choices matter. Multi-column layouts frequently parse in the
        wrong reading order. Text inside images, graphics, or text boxes is often invisible to the parser.
        Headers and footers are sometimes skipped. Unusual section headings like &quot;Where I Have
        Been&quot; may not map to the expected employment category.
      </p>
      <p>
        The reliable approach is a single-column layout, conventional section headings such as Experience,
        Education, and Skills, standard fonts, and either .docx or a text-based PDF. The advice to submit
        plain text is outdated; most modern systems handle PDFs, provided the text is selectable rather
        than an image.
      </p>
      <p>
        <strong>Keyword matching</strong> rewards using the employer&apos;s vocabulary. If the posting
        says &quot;stakeholder management&quot; and your resume says &quot;working with partners,&quot;
        a keyword match fails even though you have the experience. Mirror the terminology of the specific
        posting rather than maintaining one generic resume. Keyword stuffing, by contrast, is both
        detectable and counterproductive once a human reads it.
      </p>
      <p>
        <strong>What makes bullet points work</strong> is specificity and outcome. The weak pattern
        describes responsibility: &quot;responsible for managing the social media accounts.&quot; The
        strong pattern describes accomplishment with a number: &quot;grew Instagram following from 4,000
        to 27,000 in eleven months by shifting to short-form video.&quot; Start with an action verb, state
        what you did, and quantify the result. If you have no number, describe the concrete change.
      </p>
      <p>
        AI-generated resume content fails predictably here. It produces fluent, confident bullets that
        describe duties rather than achievements, because it has no access to your actual results. It also
        reaches for the same stock verbs, spearheaded, leveraged, orchestrated, at a density that recruiters
        recognize immediately.
      </p>

      <h2>Resume Structure and Common Mistakes</h2>
      <p>
        Beyond parsing and phrasing, a set of structural decisions consistently separates resumes that
        progress from resumes that do not.
      </p>
      <p>
        <strong>Order sections by relevance, not convention.</strong> For most experienced candidates,
        experience precedes education. For recent graduates, the reverse holds only until the first
        substantial role. Anything the reader needs to see should appear above the point where they stop,
        which on a first pass is early.
      </p>
      <p>
        <strong>Length depends on career stage.</strong> One page is right for early career. Two pages are
        normal and expected after roughly a decade, and compressing a substantial career into one page
        forces the omission of the specifics that make it credible. Beyond two pages, relevance drops
        sharply outside academia, where a full CV follows different rules entirely.
      </p>
      <p>
        <strong>Drop the objective statement.</strong> A line stating that you seek a challenging role
        offering growth tells the reader nothing they did not infer from receiving your application. If
        you want a summary at the top, make it a short professional profile stating what you do and your
        strongest evidence for it.
      </p>
      <p>
        <strong>Cut references available on request.</strong> It is assumed, it occupies space, and it
        signals a template rather than a considered document. The same applies to listing full postal
        addresses, which serve no purpose and occasionally introduce location bias before anyone has read
        your experience.
      </p>
      <p>
        <strong>Handle employment gaps directly.</strong> Unexplained gaps invite speculation that is
        usually worse than the reality. A brief factual line covering caring responsibilities, study,
        health, or redundancy closes the question. Attempting to disguise a gap by manipulating dates is
        both transparent and damaging when discovered.
      </p>
      <p>
        <strong>Skills sections should be specific and honest.</strong> Listing every technology you have
        encountered dilutes the ones you know well, and an interviewer probing a listed skill you barely
        have costs you more than omitting it would have. Where proficiency varies substantially,
        indicating level is more useful than a flat list.
      </p>

      <h2>Cover Letters: What They Are Actually For</h2>
      <p>
        The <Link href="/ai-cover-letter-humanizer">AI cover letter humanizer</Link> targets the document
        with the widest gap between how much effort people spend and how much value they get, mostly
        because the standard approach is wrong.
      </p>
      <p>
        A cover letter should not summarize your resume. The reader already has your resume. Its job is to
        answer a question the resume cannot: why this role, at this organization, and what specifically
        you would bring to it. A letter that restates employment history in paragraph form wastes the one
        opportunity you have to say something the structured document could not.
      </p>
      <p>
        The failure pattern is easy to recognize. &quot;I am writing to express my keen interest in the
        Marketing Manager position at your esteemed organization. With my extensive background in
        marketing and proven track record of success, I am confident I would be a valuable asset to your
        team.&quot; This says nothing. It could be sent to any employer for any role, and hiring managers
        see dozens of near-identical versions.
      </p>
      <p>
        The stronger version demonstrates specific knowledge. Reference something concrete about the
        organization: a product decision, a recent announcement, a strategic direction, a problem visible
        from outside. Then connect it to a specific thing you have done. One paragraph of genuine
        specificity outperforms three of enthusiastic generality, and it is exactly what a language model
        cannot supply on its own, because it does not know the company or your history.
      </p>
      <p>
        Length matters more than most applicants think. Under a page, ideally three or four short
        paragraphs. Hiring managers read many of these under time pressure, and length correlates with
        being skimmed rather than read.
      </p>

      <h2>LinkedIn: A Different Register Entirely</h2>
      <p>
        The <Link href="/ai-linkedin-rewriter">AI LinkedIn rewriter</Link> handles a platform whose
        conventions differ sharply from both resumes and general social media.
      </p>
      <p>
        <strong>The headline</strong> is the highest-value real estate on a LinkedIn profile, since it
        appears in search results, comments, and connection requests. Defaulting to your job title wastes
        it. A headline that states what you do and for whom is more useful than one that states your
        title at a company nobody outside it recognizes.
      </p>
      <p>
        <strong>The About section</strong> works in first person, which distinguishes it from a resume
        summary. Third-person self-description reads as stiff on this platform. The opening two lines
        matter disproportionately because everything after them is hidden behind a &quot;see more&quot;
        link that most readers never click.
      </p>
      <p>
        <strong>Posts</strong> follow their own norms. The first line determines whether anyone expands
        the post. Short paragraphs and line breaks aid mobile reading, where most of the audience is.
        Specific experience outperforms general advice consistently, and the most recognizable failure
        mode on the platform is the humble-brag anecdote with a forced business lesson, which regular users
        parody constantly.
      </p>
      <p>
        AI-generated LinkedIn content is unusually easy to spot because it defaults to exactly that
        register: inspirational framing, rhetorical questions, single-sentence paragraphs for emphasis, and
        a moral at the end. Genuine specificity is the antidote.
      </p>

      <h2>Business Email That Gets Answered</h2>
      <p>
        The <Link href="/ai-email-humanizer">AI email humanizer</Link> improves the writing most people do
        most often, where small changes compound across hundreds of messages.
      </p>
      <p>
        <strong>The subject line</strong> determines whether the email is opened, and specificity beats
        cleverness. &quot;Question&quot; and &quot;Following up&quot; carry no information. &quot;Budget
        approval needed by Thursday for Q3 campaign&quot; tells the recipient what it is and when it
        matters.
      </p>
      <p>
        <strong>Put the ask in the first two lines.</strong> Email is read fast, often on a phone,
        frequently while doing something else. Context that precedes the request means the request may
        never be reached. State what you need, then explain why.
      </p>
      <p>
        <strong>One email, one request.</strong> Multiple asks in a single message reliably produce a
        response to one of them. If you genuinely need three things, number them explicitly, or send
        separate emails.
      </p>
      <p>
        <strong>Tone is harder than it looks</strong> because email strips out intonation, pace, and
        expression. Short sentences and bare imperatives that feel efficient to you read as curt. The
        common overcorrection is padding with pleasantries until the message becomes evasive. The middle
        path is a brief human opening, a direct request framed as a request rather than a demand, and a
        stated reason.
      </p>
      <p>
        <strong>Cold email</strong> is the hardest case. Recipients have become extremely good at spotting
        templates, and spam filters increasingly weight formulaic phrasing and identical structure across
        many sends. Genuine personalization, brevity, and a small specific ask outperform polished generic
        outreach substantially. For sequences, see the{' '}
        <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link> category, which includes
        dedicated cold email and follow-up tools.
      </p>

      <h2>Press Releases and Media Outreach</h2>
      <p>
        The <Link href="/ai-press-release-polisher">AI press release polisher</Link> handles a format with
        rigid conventions and a hostile audience, in the sense that journalists receive far more releases
        than they can use and discard most within seconds.
      </p>
      <p>
        The structure is conventional and worth following: a headline stating the news, a dateline, a
        first paragraph containing who, what, when, where, and why, supporting detail in descending order
        of importance, a quotation from someone with standing to comment, boilerplate about the
        organization, and press contact details.
      </p>
      <p>
        The inverted pyramid is not stylistic preference; it is functional. Editors cut from the bottom,
        so anything essential placed late may be removed. It also means a journalist can decide whether
        the story is relevant from the first paragraph alone, which is exactly what they are doing.
      </p>
      <p>
        The defining failure is confusing announcement with news. That a company has launched a product,
        hired an executive, or reached a milestone is not inherently newsworthy. What makes it news is why
        a publication&apos;s readers would care: it changes something, affects a market, solves a problem
        people have, or represents a trend. If you cannot articulate that in one sentence, the release
        will not be picked up regardless of how well it is written.
      </p>
      <p>
        Quotations are the other consistent weakness. Most press release quotes say nothing: &quot;We are
        thrilled to announce this exciting new chapter.&quot; A usable quote provides insight,
        explanation, or a genuine perspective a journalist could reproduce. Executives approve empty
        quotes because they are safe, and journalists discard them for the same reason.
      </p>

      <h2>Internal Business Writing</h2>
      <p>
        Most professional writing is never seen outside the organization, and it follows different rules
        from anything aimed at recruiters or journalists. The audience already knows the context, which
        changes what needs saying.
      </p>
      <h3>Status Updates and Reports</h3>
      <p>
        The reliable structure leads with the conclusion. Readers of a status update want to know whether
        things are on track before they want the detail, so a summary line stating the position, followed
        by supporting detail, respects how the document is actually read. Chronological narrative,
        recounting what happened in order, forces every reader to reach the end before knowing whether
        they needed to.
      </p>
      <p>
        Bad news buried late is the most damaging pattern. A risk mentioned in the seventh paragraph reads
        as concealment once it materializes, even when it was disclosed. Surfacing problems early, with
        what you are doing about them, builds the credibility that makes future updates trusted.
      </p>
      <h3>Proposals and Recommendations</h3>
      <p>
        A recommendation should state what you propose, why, what it costs, what the alternatives were,
        and why you rejected them. The rejected alternatives matter more than people expect: showing that
        you considered and dismissed the obvious options pre-empts the first questions a decision-maker
        will ask, and demonstrates that the recommendation survived scrutiny.
      </p>
      <p>
        Vagueness about cost and risk reads as either naivety or evasion. A proposal that names its
        downsides is more persuasive than one that presents an unbroken case, because decision-makers know
        no option is free.
      </p>
      <h3>Meeting Requests and Documentation</h3>
      <p>
        A meeting request that states the decision to be made, who needs to be present, and what attendees
        should have read beforehand produces a meeting that works. One that states a topic produces a
        discussion. The difference in outcome is substantial and costs one sentence to achieve.
      </p>

      <h2>Interviews and Follow-Up Communication</h2>
      <p>
        Written communication continues throughout a hiring process, and the messages after an interview
        are where candidates most often either consolidate a good impression or undermine it.
      </p>
      <p>
        <strong>The thank-you message</strong> should be sent within a day and should do more than express
        gratitude. Referencing a specific point from the conversation demonstrates that you were engaged
        and reinforces the exchange in the interviewer&apos;s memory. Where you answered something poorly,
        a brief, non-defensive addition is legitimate and occasionally decisive.
      </p>
      <p>
        <strong>Following up on silence</strong> requires calibration. Following up before the stated
        timeline reads as impatient; never following up reads as disinterested. A short message after the
        date they gave, restating continued interest and asking about timing, is appropriate. Repeated
        follow-ups at short intervals are not.
      </p>
      <p>
        <strong>Salary discussion in writing</strong> benefits from precision. A specific figure or a
        narrow range, with brief justification grounded in market rate or the scope of the role, is
        stronger than a vague statement of flexibility. Flexibility communicated too early tends to anchor
        the conversation low.
      </p>
      <p>
        <strong>Declining an offer</strong> is worth doing well, since industries are smaller than they
        appear and the person you decline may hire again or move elsewhere. Brief, warm, and without
        invented reasons is the right register.
      </p>

      <h2>Why AI-Generated Professional Writing Fails</h2>
      <p>
        The failures are consistent across all five formats, and understanding them tells you where to
        direct your own effort.
      </p>
      <p>
        <strong>It cannot supply your specifics.</strong> A model does not know that you cut deployment
        time by a third, that the company just restructured its EMEA operation, or that your last role
        involved rebuilding a team after two departures. These details are what make professional writing
        persuasive, and they are exactly what generation cannot invent.
      </p>
      <p>
        <strong>It defaults to enthusiasm over substance.</strong> Generated professional writing is
        confident and warm and says very little. Thrilled, excited, passionate, and delighted appear
        constantly because they are safe. Readers discount them entirely.
      </p>
      <p>
        <strong>It produces recognizable structure.</strong> Three-paragraph cover letters with identical
        shapes. Bullets that all begin with the same handful of verbs. LinkedIn posts with a hook, three
        short paragraphs, and a lesson. Recruiters and hiring managers see these patterns at volume.
      </p>
      <p>
        <strong>It hedges where confidence is expected.</strong> Professional writing often needs to assert
        capability directly. Generated text tends to qualify, which reads as uncertainty in exactly the
        context where you are trying to demonstrate competence.
      </p>
      <p>
        The practical implication is that AI drafts are a reasonable starting structure and a poor finished
        product. The value you add is specificity: numbers, names, concrete outcomes, and genuine knowledge
        of the organization.
      </p>

      <h2>A Workflow for Job Applications</h2>
      <p>
        <strong>Start from the posting.</strong> List the requirements it names and the vocabulary it uses.
        This drives both keyword alignment and what you choose to emphasize.
      </p>
      <p>
        <strong>Tailor the resume per application.</strong> Reorder bullets so the most relevant experience
        appears first, and mirror the posting&apos;s terminology where it accurately describes what you did.
        A generic resume sent widely performs worse than a targeted one sent to fewer roles.
      </p>
      <p>
        <strong>Quantify everything you can.</strong> Go through each bullet and ask what changed and by how
        much. Where you have no number, describe the concrete outcome instead.
      </p>
      <p>
        <strong>Research before writing the cover letter.</strong> Find one specific, genuine thing about
        the organization to reference. This single step separates letters that get read from letters that
        get skimmed.
      </p>
      <p>
        <strong>Check formatting for parsing.</strong> Single column, standard headings, selectable text.
        Open the PDF and confirm you can select and copy the text; if you cannot, neither can the parser.
      </p>
      <p>
        <strong>Clean before submitting.</strong> Application portals frequently mangle smart quotes and
        em dashes, and hidden Unicode can break parsing outright. Run a final pass with the{' '}
        <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For grammar, readability, and tone analysis, see the{' '}
        <Link href="/ai-tools/writing-tools">writing tools</Link>. For rewriting AI drafts to sound
        naturally human across other formats, see the{' '}
        <Link href="/ai-tools/ai-humanizer-tools">AI humanizer tools</Link>. For removing hidden characters
        before submitting to an application portal, see the{' '}
        <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What do AI professional tools do?',
    answer:
      'They refine career and business writing: resumes, cover letters, LinkedIn profiles, business email, and press releases. Each format has its own conventions and gatekeepers, so the tools target the specific failure modes of each rather than applying general writing advice uniformly.',
  },
  {
    category: 'General',
    question: 'Are these professional tools free?',
    answer:
      'Yes. All 45 tools in this category are free with no account required and no usage limits.',
  },
  {
    category: 'General',
    question: 'Do I need the model-specific version?',
    answer:
      'Usually not. The general resume humanizer, cover letter humanizer, LinkedIn rewriter, email humanizer, and press release polisher work on text from any source. Model-specific versions are tuned for characteristic weaknesses of each model and may catch a little more if you consistently use one.',
  },
  {
    category: 'Technical',
    question: 'How do applicant tracking systems actually work?',
    answer:
      'Most parse your document into structured fields, extract skills and employment history, and rank or filter against the job description. They are not sophisticated, which is exactly why formatting matters: multi-column layouts often parse in the wrong order, text inside images is invisible, and unconventional section headings may not map to expected categories.',
  },
  {
    category: 'Technical',
    question: 'Should I submit my resume as PDF or Word?',
    answer:
      'Either works with most modern systems, provided the PDF contains selectable text rather than an image. The old advice to always use plain text is outdated. A quick check: open the PDF and try to select and copy the text. If you cannot, the parser cannot read it either.',
  },
  {
    category: 'Technical',
    question: 'Do multi-column resume layouts break ATS parsing?',
    answer:
      'Frequently, yes. Parsers often read multi-column layouts in the wrong order, interleaving content from separate columns into nonsense. Text boxes, graphics, and content in headers or footers are also commonly missed. A single-column layout with conventional headings is the reliable choice.',
  },
  {
    category: 'Technical',
    question: 'Does keyword stuffing help get past ATS filters?',
    answer:
      'No, and it backfires. Matching the employer vocabulary where it accurately describes your experience is useful, since a system looking for stakeholder management will not match working with partners. But stuffed keywords are detectable, and once a human reads the resume they read as dishonest.',
  },
  {
    category: 'Usage',
    question: 'What makes a strong resume bullet point?',
    answer:
      'Specificity and outcome. Weak bullets describe responsibility: responsible for managing social media. Strong bullets describe accomplishment with a number: grew Instagram following from 4,000 to 27,000 in eleven months by shifting to short-form video. Start with an action verb, state what you did, and quantify the result.',
  },
  {
    category: 'Usage',
    question: 'What should a cover letter actually say?',
    answer:
      'Not a summary of your resume, since the reader already has it. A cover letter answers why this role, at this organization, and what specifically you bring. Reference something concrete about the company and connect it to a specific thing you have done. One paragraph of genuine specificity beats three of enthusiastic generality.',
  },
  {
    category: 'Usage',
    question: 'How long should a cover letter be?',
    answer:
      'Under a page, ideally three or four short paragraphs. Hiring managers read many of these under time pressure, and length correlates strongly with being skimmed rather than read. Brevity also forces you to identify what actually matters.',
  },
  {
    category: 'Usage',
    question: 'What makes a good LinkedIn headline?',
    answer:
      'Stating what you do and for whom, rather than defaulting to your job title. The headline appears in search results, comments, and connection requests, making it the highest-value space on the profile. A title at a company outsiders do not recognize wastes that visibility.',
  },
  {
    category: 'Usage',
    question: 'Should my LinkedIn About section be first or third person?',
    answer:
      'First person. Third-person self-description reads as stiff on LinkedIn, unlike a resume summary. Pay particular attention to the opening two lines, since everything after them is hidden behind a see more link that most readers never click.',
  },
  {
    category: 'Usage',
    question: 'How do I write a subject line that gets opened?',
    answer:
      'Be specific rather than clever. Question and Following up carry no information. Budget approval needed by Thursday for Q3 campaign tells the recipient what it concerns and when it matters, which is what determines whether it gets opened and acted on.',
  },
  {
    category: 'Usage',
    question: 'Why do my emails not get replies?',
    answer:
      'Most often because the ask is buried below context the reader never reached, or because the message contained several requests and got a response to one. Put the request in the first two lines, then explain why. Keep one email to one ask, or number them explicitly if you genuinely need several.',
  },
  {
    category: 'Usage',
    question: 'Why does my professional email sound cold?',
    answer:
      'Email strips out intonation, pace, and facial expression, so short sentences and bare imperatives that feel efficient read as curt. The common overcorrection is padding with pleasantries until the message becomes evasive. A brief human opening, a request framed as a request, and a stated reason usually lands correctly.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What structure should a press release follow?',
    answer:
      'Headline stating the news, dateline, a first paragraph covering who, what, when, where and why, supporting detail in descending importance, a quotation from someone with standing, boilerplate, and press contacts. The inverted pyramid is functional rather than stylistic: editors cut from the bottom, so anything essential placed late may be removed.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do journalists ignore most press releases?',
    answer:
      'Because they confuse announcement with news. That a company launched a product or hired an executive is not inherently newsworthy. What makes it news is why a publication readers would care: it changes something, affects a market, or represents a trend. If you cannot state that in one sentence, it will not be picked up.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What makes a usable press release quote?',
    answer:
      'Insight or explanation a journalist could actually reproduce. Most press release quotes say nothing, such as being thrilled to announce an exciting new chapter. Executives approve empty quotes because they are safe, and journalists discard them for exactly that reason.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my resume look wrong after uploading to an application portal?',
    answer:
      'Portals frequently mangle extended Unicode, so smart quotes and em dashes appear as question marks or black diamonds, and hidden characters can break parsing outright. Normalizing punctuation to plain ASCII and removing invisible characters before submitting avoids it.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can recruiters tell if my resume was written by AI?',
    answer:
      'Often, though by pattern rather than by any detection tool. Generated resumes describe duties rather than achievements, lack specific numbers, and reach for the same stock verbs such as spearheaded and leveraged at recognizable density. Adding real figures and concrete outcomes is what fixes it.',
  },
  {
    category: 'Detection and Limits',
    question: 'Why is AI-generated LinkedIn content so recognizable?',
    answer:
      'Because it defaults to the platform most parodied register: an inspirational hook, rhetorical questions, single-sentence paragraphs for emphasis, and a business lesson at the end. Regular users spot the shape immediately. Specific personal experience is the reliable antidote.',
  },
  {
    category: 'Detection and Limits',
    question: 'Will using AI to write my cover letter hurt my chances?',
    answer:
      'Only if it shows, which it usually does when the letter is used unedited. Generated letters are fluent, enthusiastic, and interchangeable, and hiring managers see many near-identical versions. Used as a starting structure and then filled with genuine specifics about the company and your experience, it is simply a drafting aid.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my resume stored when I use these tools?',
    answer:
      'Your text is not retained for training or shared with third parties, and it is not stored after your session. Since resumes contain personal contact details and employment history, that matters more here than in most categories.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'My resume gets no responses. What should I check first?',
    answer:
      'Formatting and targeting, in that order. Confirm the text is selectable in the PDF and the layout is single column with conventional headings, since a parsing failure means no human ever sees it. Then check whether you are mirroring the posting vocabulary and leading with the most relevant experience.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Should I use one resume for every application?',
    answer:
      'No. A targeted resume sent to fewer roles outperforms a generic one sent widely. Reordering bullets so the most relevant experience appears first and mirroring the posting terminology where it accurately describes your work takes minutes and materially changes both keyword matching and human impression.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between these and the general humanizer tools?',
    answer:
      'These target formats with specific gatekeepers and conventions: ATS parsing for resumes, hiring manager skim behaviour for cover letters, platform norms for LinkedIn, and journalist expectations for press releases. The general humanizer tools address rhythm and specificity across any content type without those format-specific rules.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What order should I work through a job application?',
    answer:
      'Start from the posting and list its requirements and vocabulary. Tailor the resume to lead with relevant experience and mirror that vocabulary. Quantify every bullet you can. Research the organization before writing the cover letter. Verify formatting parses. Then run a cleanup pass before submitting.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I quantify achievements when I have no metrics?',
    answer:
      'Describe the concrete change instead. Scope works, such as the number of people, clients, or systems involved. So does before and after state: a process that took three days now takes one, or a backlog that was cleared. Specific description is far stronger than a vague claim of significant improvement.',
  },
  {
    category: 'Usage',
    question: 'How do I run a meeting request that actually produces a decision?',
    answer:
      'State the decision to be made, who needs to be present, and what attendees should read beforehand. A request that names a decision produces a decision; one that names a topic produces a discussion. The difference in outcome is substantial and costs a single sentence to achieve.',
  },
  {
    category: 'Usage',
    question: 'How should I write a proposal or recommendation?',
    answer:
      'State what you propose, why, what it costs, what alternatives you considered, and why you rejected them. The rejected alternatives matter more than most people expect, since they pre-empt the first questions a decision-maker asks and show the recommendation survived scrutiny. Naming the downsides makes a proposal more persuasive, not less, because decision-makers know no option is free.',
  },
  {
    category: 'Usage',
    question: 'How do I discuss salary in writing?',
    answer:
      'Give a specific figure or a narrow range with brief justification grounded in market rate or the scope of the role. Vague statements about being flexible tend to anchor the conversation low, and precision reads as considered rather than demanding. Save broad flexibility for later in the negotiation if you need it.',
  },
  {
    category: 'Usage',
    question: 'How long should my resume be?',
    answer:
      'One page for early career, two pages once you have roughly a decade of experience. Compressing a substantial career onto one page forces you to cut the specifics that make it credible. Beyond two pages relevance drops sharply outside academia, where a full CV follows different conventions entirely.',
  },
  {
    category: 'Usage',
    question: 'Should I include an objective statement on my resume?',
    answer:
      'No. A line saying you seek a challenging role with growth opportunities tells the reader nothing they did not already infer from your application. If you want something at the top, use a short professional profile stating what you do and your strongest evidence for it.',
  },
  {
    category: 'Usage',
    question: 'How do I handle employment gaps?',
    answer:
      'Address them briefly and factually. Caring responsibilities, study, health, or redundancy all close the question in one line. Unexplained gaps invite speculation that is usually worse than the reality, and manipulating dates to disguise a gap is both transparent and far more damaging when noticed.',
  },
  {
    category: 'Usage',
    question: 'Should I send a thank-you message after an interview?',
    answer:
      'Yes, within a day, and make it do more than express gratitude. Referencing a specific point from the conversation shows you were engaged and reinforces the exchange in the interviewer memory. If you answered something poorly, a brief non-defensive addition is legitimate and occasionally decisive.',
  },
  {
    category: 'Usage',
    question: 'How do I write a status update people actually read?',
    answer:
      'Lead with the conclusion. State whether things are on track first, then give supporting detail. Chronological narrative forces every reader to reach the end before knowing whether they needed to. Surface problems early rather than burying them, since a risk disclosed late reads as concealment once it materializes.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I make cold email actually work?',
    answer:
      'Genuine personalization, brevity, and a small specific ask. Recipients spot templates instantly, and spam filters increasingly weight formulaic phrasing and identical structure across many sends. A short message referencing something real about the recipient outperforms polished generic outreach substantially.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
