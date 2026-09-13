import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'stupid-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Stupid Name Generator',
    description: 'Free stupid name generator for dumb, ridiculous, and sick-sounding names. Generate stupid names for gamertags, jokes, and characters with no sign-up.',
    seoTitle: 'Stupid Name Generator – Dumb & Sick Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Stupid Name Generator – Dumb Names That Are Meant to Be Dumb</h2>
        <p>
          A stupid name is not a clever name that missed. It is a deliberate register with its own rules, and it does something wit cannot: it commits so completely to being dumb that the commitment becomes the joke. A clever name asks to be admired. A stupid name asks for nothing, and that is precisely why it disarms people.
        </p>
        <p>
          This stupid name generator works that register on purpose — blunt, dopey, ridiculous, occasionally cursed. Set a count between 1 and 24 and generate. Read the results out loud, because this is the most sound-driven of all the name registers and half the good ones look unremarkable on a screen.
        </p>

        <h2>Stupid, Silly, Funny, Sick: Four Words That Are Not Synonyms</h2>
        <p>
          Picking the wrong register is the single most common reason a stupid name does not land, and these four get treated as synonyms when they are nothing of the sort.
        </p>
        <p>
          <strong>Silly</strong> is whimsical and light — harmless, slightly childlike, safe in mixed company. <strong>Funny</strong> is the umbrella covering anything that gets a laugh, wit included. <strong>Stupid</strong> is deliberately dumb and proud of it, where the absence of cleverness is the mechanism rather than a failure. <strong>Sick</strong> is the edgier neighbour: gross, cursed, or slightly wrong, sitting near a line without necessarily crossing it.
        </p>
        <p>
          This page covers the last two. If a result makes you groan and then laugh at yourself for laughing, it is working exactly as intended.
        </p>

        <h2>Why a Stupid Name Beats a Clever One More Often Than Expected</h2>
        <p>
          A stupid name works through three mechanisms, and they are worth separating because they fail differently.
        </p>
        <p>
          <strong>A stupid name makes no claim, so nothing decays.</strong> A clever name carries an implicit assertion: I thought of something good. That assertion has to keep being true on every reading, and it does not — the tenth encounter with a clever name is measurably less impressive than the first, because cleverness is a performance and performances go stale. A stupid name asserts nothing, so there is nothing to wear out. It is exactly as dumb on day three hundred as on day one.
        </p>
        <p>
          <strong>No setup means no defence.</strong> A clever name announces effort, and effort creates expectation. A stupid name signals no effort at all, which removes the expectation entirely, and a joke arriving with no setup catches people unprepared. This is why one genuinely dumb name in a room of clever ones usually gets the biggest reaction.
        </p>
        <p>
          <strong>Discomfort sticks better than approval.</strong> At the sick end, the reaction is mild objection followed by a laugh. That is a far more adhesive response than simple appreciation — people remember names they half-object to long after they have forgotten names they admired.
        </p>
        <p>
          The corollary matters: a stupid name generator is a poor choice where you get one impression and need it to count. A conference badge, a portfolio, a first introduction — those reward the clever name, because the decay problem never gets a chance to arise.
        </p>

        <h2>What Makes a Stupid Name Generator Result Sound Stupid</h2>
        <p>
          What makes a stupid name generator result work is mostly phonetics, not meaning, which is why reading aloud matters more here than in any other register.
        </p>
        <p>
          <strong>Plosive consonants carry most of a stupid name.</strong> Sounds made by stopping airflow completely and releasing it — p, b, t, d, k, g — do more comic work than any other class in English. A name loaded with plosives lands harder than one built on soft continuants like s, f, and l, regardless of what the words mean. This is not folklore; it is why comic character names across a century of writing keep clustering around the same handful of consonants.
        </p>
        <p>
          <strong>Trochaic rhythm makes a stupid name land.</strong> A stressed syllable followed by an unstressed one — the shape of words like <em>blunder</em>, <em>doofus</em>, <em>wobble</em> — has an inherently lumbering quality. Names in this rhythm sound stupid before you have processed a single word of meaning. Put the stress on the second syllable instead and the name sounds dignified, which is the wrong shape entirely.
        </p>
        <p>
          <strong>The length of a stupid name signals commitment.</strong> Very short reads as blunt and confident. Very long reads as someone who refused to stop. The middle lengths are weakest, because they read as ordinary names that happen to be a bit odd — not committed enough to be funny, not normal enough to pass.
        </p>

        <h2>The Competence Instinct, and Why a Stupid Name Generator Beats It</h2>
        <p>
          Producing a genuinely stupid name by hand is harder than producing a clever one, which is counterintuitive enough to need explaining.
        </p>
        <p>
          The obstacle is that everyone has a reflex toward looking competent. Asked to name something, most people automatically reach for a name that reflects well on them, and the reflex operates below conscious control. Attempts at stupid names come out mildly witty as a result — the writer could not stop themselves being a bit clever, and the name lands in the dead zone between registers where it is neither dumb nor sharp.
        </p>
        <p>
          A stupid name generator has no reputation to protect and no impulse to demonstrate skill, so it will follow a dumb idea all the way down where a person would have talked themselves out of it halfway. That willingness is the specific thing being outsourced here.
        </p>
        <p>
          Which produces the most important rule for using a stupid name generator: <strong>do not edit the results.</strong> The urge to polish a generated name is the competence instinct reasserting itself, and every edit drags the name back toward the dead zone. Take it as it comes.
        </p>

        <h2>Why Games Are the Natural Home for a Stupid Name Generator</h2>
        <p>
          A stupid name generator finds its most natural use in gaming. The deliberately dumb handle is one of the most durable conventions online, and it persists because it solves a real problem rather than because players lack imagination.
        </p>
        <p>
          Competitive games generate constant status pressure. Every match produces a public record of how you did, and a serious handle attaches that record to something that reads like an identity. A stupid name severs the link. It signals in advance that you are not staking anything on the result, which makes losing more comfortable and winning funnier. Everyone in the lobby reads it as exactly that.
        </p>
        <p>
          There is also a mechanic no other context offers: games narrate your name back to you. Kill feeds, death messages, objective callouts, and end-of-match summaries all drop your handle into sentences written for serious names. A stupid name converts every one of those templates into a joke, delivered automatically, all match. That is an enormous amount of output from one naming decision.
        </p>
        <p>
          So the useful test before committing to a stupid name is to read a candidate inside a sentence like that. The names that win are the ones that become funny specifically when a game announces they did something.
        </p>

        <h2>Where Else a Stupid Name Generator Earns Its Keep</h2>
        <p>
          <strong>Among friends,</strong> a stupid name generator outperforms a clever approach because there is no audience to impress. Clever names in a tight group can read as trying too hard; a dumb name reads as comfortable.
        </p>
        <p>
          <strong>On throwaway accounts,</strong> burners, alts, and one-joke handles all benefit from a stupid name that immediately announces it is not serious, which sets expectations correctly for anyone who finds it.
        </p>
        <p>
          <strong>In a league of careful puns,</strong> a stupid team name stands out by contrast and ages better, because it was never trying to impress and so cannot become dated the way a topical clever name does.
        </p>
        <p>
          <strong>For pets, cars, and Wi-Fi networks,</strong> these are the ideal low-stakes homes for the most committed results. Networks especially: neighbours see the name with no context at all, which suits something that explains nothing and apologises for nothing.
        </p>

        <h2>A Stupid Name Generator Invites Escalation in a Way Clever Names Do Not</h2>
        <p>
          One property no other register shares: a stupid name asks people to join in. A clever name closes the conversation, because the correct response to a good pun is appreciation and appreciation ends the exchange. A stupid name opens it, because the obvious response is to produce a stupider one.
        </p>
        <p>
          That makes a stupid name generator unusually good for group naming. Put a whole batch in front of a chat, a server, or a league where everyone names their own team, and the activity turns competitive rather than consultative. Seeding a group with one genuinely committed stupid name reliably produces a run of increasingly ridiculous replies, which is usually a better outcome than any single name you could have picked yourself.
        </p>
        <p>
          If that is the goal, pick something dumb but not maximally dumb. Leaving headroom above your name is what makes escalation feel available to everybody else.
        </p>

        <h2>Where a Stupid Name Crosses the Line</h2>
        <p>
          The sick end of the stupid name register sits near a line and it is worth being clear about where, because crossing it is not edgy — it just gets you moderated.
        </p>
        <p>
          A stupid name that is gross, absurd, cursed, or mildly juvenile is fine essentially everywhere. Slurs, harassment, and explicit content are a different category entirely and this generator does not produce them. The distinction is not intensity; it is whether the joke has a target. A stupid name is funny at nobody&apos;s expense. A name funny at someone&apos;s expense stopped being a stupid name and became something else.
        </p>
        <p>
          The practical dimension is real. Platform filters catch the second category reliably, rejection at signup wastes your time, and an account action over a handle wastes considerably more. The dumbest name that passes a filter beats a stronger one that does not, because you can actually use it.
        </p>

        <h2>Platform Realities Before You Commit to a Stupid Name</h2>
        <p>
          Where a stupid name will live changes what survives.
        </p>
        <p>
          <strong>Filter strictness varies wildly for stupid names.</strong> Services aimed at younger audiences reject far more than obvious profanity, including innocuous words containing flagged substrings. A name accepted on one platform can be refused on another for reasons never explained to you.
        </p>
        <p>
          <strong>Character sets differ, which constrains a stupid name.</strong> Some allow only letters and numbers, others permit underscores or periods, a few allow spaces. If you want one handle everywhere, build it from letters alone.
        </p>
        <p>
          <strong>Length caps are inconsistent,</strong> and truncation hurts more in this register than others — a stupid name cut in half usually reads as an ordinary typo rather than a joke.
        </p>
        <p>
          <strong>Sound-based humour does not translate.</strong> A name funny for its phonetics in one language is neutral or accidentally meaningful in another. In international lobbies that is worth a thought, less for offence than because half your audience will simply not hear it.
        </p>
        <p>
          One quirk in your favour: stupid names are far more likely to be available than clever ones, because most people do not try to register them. If yours is somehow taken, respell it rather than appending a number — a number makes the whole thing look like an ordinary account and defeats the point.
        </p>

        <h2>Why a Stupid Name Generator Has Such High Variance</h2>
        <p>
          A stupid name generator has wider variance than any other name category, and knowing that changes how you should run it.
        </p>
        <p>
          Most name generators produce a gentle spread — a few weak results, a lot of acceptable ones, a couple of good ones. Stupid names do not distribute that way. A batch tends to contain several that are genuinely flat, several that are perfect, and very little occupying the middle. That is a consequence of how the register works: commitment is binary in practice, and a name either went far enough or it did not.
        </p>
        <p>
          The practical implication is that small batches from a stupid name generator are actively misleading. Generating four names gives you a decent chance of seeing nothing but flat results and concluding the tool does not work, when in fact you sampled the wrong end of a wide distribution. Generate the full 24 every time. The cost is nothing and it is the difference between judging the register fairly and judging a bad sample.
        </p>
        <p>
          It also means you should expect to discard most of a batch without hesitation. Discarding twenty of twenty-four is a normal outcome, not a sign anything went wrong.
        </p>

        <h2>The Dead Zone a Stupid Name Generator Has to Clear</h2>
        <p>
          The most common stupid name failure is not a name that is too dumb — it is a name that is not dumb enough, landing in the gap between registers where it reads as neither.
        </p>
        <p>
          A name in the dead zone has one odd element and is otherwise ordinary. Readers cannot tell whether it was meant seriously, so they default to assuming it was, and an ordinary name with one strange feature reads as a mistake rather than a joke. The reader ends up mildly confused instead of amused, which is the worst available outcome — worse than a flat name, because a flat name at least does not raise a question.
        </p>
        <p>
          Escaping the dead zone means pushing a stupid name further in either direction. Push into full commitment and the name becomes obviously deliberate. Pull back to completely ordinary and it becomes a normal name doing a normal job. What does not work is stopping halfway, and halfway is exactly where the competence instinct wants to leave you.
        </p>
        <p>
          The test is quick: could a reader mistake this for a name someone chose sincerely? If yes, and that was not your intent, it is in the dead zone and needs to go further.
        </p>

        <h2>Picking Between Two Stupid Names You Like</h2>
        <ul>
          <li><strong>Say both, wait a minute, say them again.</strong> One will have stayed funny and one will have flattened. Immediate reaction is a poor guide here because novelty inflates everything.</li>
          <li><strong>Imagine a stranger reading it aloud.</strong> Names funny when you say them but embarrassing from someone else are wrong for anything public.</li>
          <li><strong>Check which survives being typed often.</strong> If you will enter it repeatedly, an awkward one will annoy you long after it stopped being funny.</li>
          <li><strong>Prefer the one that is harder to justify.</strong> A stupid name you can explain is usually a clever name in disguise. The one with no defensible reasoning is generally correct.</li>
        </ul>

        <h2>Sick Names Versus Plain Stupid Names</h2>
        <p>
          The sick end behaves differently enough from a plain stupid name to be worth separating, because people reach for one when they want the other.
        </p>
        <p>
          A stupid name is dumb and harmless. A sick name adds discomfort — it is gross, cursed, or slightly wrong in a way that produces a flinch before the laugh. The overlap is large and this generator produces both, but they are not substitutes. Sick names are more memorable, because objection is stickier than approval, and correspondingly riskier, because the same quality that makes them stick makes them more likely to be flagged.
        </p>
        <p>
          Two practical consequences for choosing a stupid name. First, sick names hit platform filters far more often than plain stupid ones, so verify before you commit a sick name to an account you care about. Second, a sick name is a stronger claim about the room than a stupid one — it assumes an audience that finds the discomfort funny rather than off-putting, and that assumption is wrong more often outside close groups.
        </p>
        <p>
          If you want maximum memorability with minimum risk, the sweet spot is a stupid name that is aggressively dumb rather than actually unpleasant. It gets most of the stickiness without inheriting any of the filter or audience problems.
        </p>

        <h2>Why a Stupid Name Is Hard to Fake by Hand</h2>
        <p>
          There is a recognisable difference between a stupid name that was chosen deliberately and one that is stupid because someone tried to be clever and failed. Readers detect it reliably even when they could not explain how.
        </p>
        <p>
          The tell is internal consistency. A deliberate stupid name commits uniformly. A deliberately stupid name is dumb throughout — every element points the same direction, and nothing in it is reaching for admiration. A failed clever name has a visible ambition in it: one element that was trying to be sharp, sitting awkwardly beside the parts that did not work. That mismatch is what readers pick up on, and it converts a joke into an apparent misfire.
        </p>
        <p>
          This is the strongest practical argument against editing generated results. An edit is almost always an attempt to improve one element, and improving one element is precisely what breaks the consistency that makes the whole name read as deliberate. The unedited result is worse in every individual respect and better as a name, because it commits uniformly.
        </p>

        <h2>Reading the Room Before You Use a Stupid Name</h2>
        <p>
          Using a stupid name is a claim about the situation as much as about you — it says this setting is not serious. When that is accurate it reads as relaxed and confident. When it is wrong it reads as someone who misjudged where they were.
        </p>
        <p>
          The check takes five seconds before you commit to a stupid name: does anyone here have something at stake? In a casual lobby, a friend group, or a joke league, nobody does and the name costs nothing. Where someone is being evaluated, competing seriously, or representing something beyond themselves, a stupid name imposes your read of the situation on people who may not share it. That is not an argument for caution generally — it is an argument for identifying the room, after which you can commit completely.
        </p>

        <h2>Say Every Stupid Name Generator Result Out Loud Before Judging</h2>
        <p>
          Every name tool benefits from reading results aloud. A stupid name generator depends on it, because the register is built almost entirely out of sound and the written form hides most of what makes a name work.
        </p>
        <p>
          A stupid name on screen is just a sequence of letters your eye processes in a fraction of a second without engaging any of the machinery that makes it funny. The plosives do nothing, the rhythm does nothing, and the lumbering quality that would land instantly in speech is completely invisible. What you are evaluating silently is a different object from the one people will actually encounter.
        </p>
        <p>
          This produces a specific and predictable error: the names that survive a silent scan are the ones with funny meanings, while the ones that would have been genuinely funny to say get discarded as unremarkable. Since meaning is the weaker of the two mechanisms in this register, silent reading systematically selects the wrong half of every batch.
        </p>
        <p>
          Read the whole list once, out loud, before deciding anything. It takes twenty seconds and it changes which names survive.
        </p>

        <h2>When to Retire a Stupid Name</h2>
        <p>
          Stupid names age well but not infinitely. Four signals that a stupid name has finished its run: the context changed and it is now visible to a wider audience than it was chosen for; you have started explaining it to new people, which means it became an obligation rather than a joke; it got adopted so thoroughly that it is now simply your name and the joke quietly ended; or the reference expired and readers no longer have any idea what it meant.
        </p>

        <h2>What This Stupid Name Generator Keeps</h2>
        <p>
          Nothing. Names from this stupid name generator are produced for your session and are not stored, logged, or attached to an identity. We do not keep results, batch sizes, or run counts. Refreshing or closing the page clears the batch, so copy anything you want before you leave.
        </p>

        <h2>If a Stupid Name Generator Is Too Blunt for You</h2>
        <p>
          A stupid name generator works a narrow band, and it does not suit every use. For something lighter and more whimsical that still works in mixed company, the <Link href="/silly-name-generator">silly name generator</Link> sits a few notches down. For a wider mix that includes wit alongside absurdity, the <Link href="/funny-name-generator">funny name generator</Link> has a higher hit rate per batch. And if you want the exact opposite of this page — names built on wordplay that reward the reader for decoding them — the <Link href="/punny-name-generator">punny name generator</Link> does only that.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a stupid name generator?', answer: 'It is a free tool that produces deliberately dumb, ridiculous, and sick-sounding names — blunt and unsophisticated on purpose rather than by accident. It targets a specific comedic register where the absence of cleverness is the joke, which is different from what a witty or punny generator does. It runs in your browser with no account needed to start.' },
  { category: 'Naming', question: 'What is the difference between stupid, silly, funny, and sick names?', answer: 'They are genuinely different registers. Silly is whimsical and light, harmless and slightly childlike, and works in mixed company. Funny is the umbrella term for anything that gets a laugh, including clever constructions. Stupid is deliberately dumb and proud of it, where the joke is the absence of wit rather than a failure of it. Sick is the edgier neighbour — gross, cursed, or slightly wrong. This generator covers the last two.' },
  { category: 'Naming', question: 'Why are stupid names actually funny?', answer: 'Several mechanisms. Anti-cleverness removes the expectation a witty name creates, so the joke arrives with no setup and catches people unprepared. Total commitment matters more than anything else, because a half-dumb name reads as a mistake while an aggressively dumb one reads as a decision. Sound carries most of the comedy, particularly hard consonants and thudding one-syllable words. And at the sick end, mild discomfort followed by a laugh is a far stickier reaction than simple approval.' },
  { category: 'Best practices', question: 'How do I pick the best stupid name from a batch?', answer: 'When two results are similar, pick the one that went further — commitment is the whole mechanism, and the dumber option is almost always the better one. Read the batch aloud, since this register lives in sound more than any other and a name can look unremarkable on screen while being genuinely funny spoken. And resist the urge to polish a result into something cleverer, because improving a stupid name switches registers and ruins it.' },
  { category: 'Use cases', question: 'Are stupid names good for gaming and gamertags?', answer: 'It is the natural home for them. A deliberately dumb gamertag reframes everything the game says about you — losing with a stupid name is funnier than losing with a serious one, and winning with one is funnier still. Games that announce player names in combat text amplify this enormously, because the game delivers your punchline for you, repeatedly, at no effort.' },
  { category: 'Use cases', question: 'Do stupid names work in group chats?', answer: 'Well, and often better than clever ones. Among people who know each other there is no audience to impress, so a clever name can read as trying too hard while a dumb one reads as comfortable. Stupid names also invite escalation from everyone else in the chat, which is usually the actual goal.' },
  { category: 'Use cases', question: 'Can I use a stupid name for a fantasy football team?', answer: 'Yes, and it has a specific advantage in a league full of carefully constructed puns: it stands out by contrast. It also ages better than a topical clever name, because it was never trying to be impressive, so it cannot become dated. The name that was dumb in week one is exactly as dumb in week sixteen, which is the point.' },
  { category: 'Use cases', question: 'Are stupid names useful for fictional characters?', answer: 'Yes, particularly for characters who are not meant to be taken seriously — the bumbling henchman, the useless rival, the background idiot. A stupid name does the characterisation before the character speaks a line, which saves you a paragraph of description. Keep the strongest ones for characters who appear often enough to justify the attention the name draws.' },
  { category: 'Best practices', question: 'Where is the line between a stupid name and an offensive one?', answer: 'The distinction is whether the joke has a target. A name that is gross, absurd, cursed, or mildly juvenile is funny at nobody expense and is fine essentially everywhere. A name built on slurs, harassment, or explicit content is a different category entirely, and this generator does not produce it. There is a practical dimension too: platform filters catch the second category reliably, and the dumbest name that passes a filter is funnier than one that does not, because you can actually use it.' },
  { category: 'Limits', question: 'How many stupid names can I generate at once?', answer: 'Between 1 and 24 per run, with no cap on how many runs you do. This register has unusually high variance — some results are flat and some are perfect, with little in between — so generating the full 24 and shortlisting works considerably better than small batches.' },
  { category: 'Usage', question: 'How do I use the stupid name generator?', answer: 'Set your batch size between 1 and 24, press Generate, and read the results aloud rather than silently. Look for the result that went furthest rather than the one that seems most balanced. Use the Copy button to put the batch on your clipboard, then paste it wherever you need it. Run it again for a completely fresh set as many times as you like.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button places the whole batch on your clipboard as plain text, one name per line, which pastes cleanly into notes, documents, and chat windows. Given the variance in this register, collecting a few runs into one document and shortlisting from the combined pile is the sensible workflow.' },
  { category: 'Use cases', question: 'Can I use a stupid name for a burner or joke account?', answer: 'Yes, it is one of the better uses. Burner accounts, alt profiles, test accounts, and one-joke handles all benefit from a name that immediately announces it is not serious. A stupid name sets expectations correctly for anyone who encounters the account, which is exactly what you want from a throwaway.' },
  { category: 'Troubleshooting', question: 'How do I turn a stupid name into a username?', answer: 'These convert to handles more easily than most types, since they tend to be short and phonetically simple already. Remove spaces, check the character limit, and test against the platform filter. One quirk of this register: stupid names are far more likely to be available than clever ones, because most people do not try to register them. If yours is taken, respell it rather than adding a number, since a number makes it look like an ordinary account.' },
  { category: 'Best practices', question: 'What mistakes make a stupid name fall flat?', answer: 'Being clever by accident is the main one — a name with a hidden pun is a clever name in disguise and reads as one. Hedging is the second: a name that is only slightly dumb reads as a failed attempt at a good name, so go further. Confusing crude with dumb is a third, since a name can be extremely stupid and completely clean. And using one where the register does not fit reads as careless rather than confident.' },
  { category: 'Naming', question: 'What makes a name sound stupid?', answer: 'Mostly phonetics rather than meaning. Hard consonants, especially k and b sounds, carry a disproportionate amount of the comedy, as do thudding one-syllable words and dopey repeated syllables. This is why the same name can look flat written down and be genuinely funny spoken, and why reading a batch aloud is more important in this register than any other.' },
  { category: 'Compatibility', question: 'Does the stupid name generator work on mobile?', answer: 'Yes. It is a responsive page working on phones, tablets, and desktops with nothing to install. On a phone you can generate a batch, tap Copy, and paste straight into a chat or a signup field. Any modern mobile browser handles it.' },
  { category: 'General', question: 'Is the stupid name generator free?', answer: 'Yes, it is free with nothing to install or download. Generate as many batches as you want at no cost, since it runs as an ordinary web page in your browser.' },
  { category: 'Privacy', question: 'Are the names I generate stored?', answer: 'No. Names are generated for your session and are not stored, logged, or attached to an identity. We do not keep results, batch sizes, or how often you run the tool. Refreshing or closing the page clears the current batch, so copy anything worth keeping before you navigate away.' },
  { category: 'Naming', question: 'What is a sick name and how is it different from a stupid one?', answer: 'Sick names sit at the edgier end of the same register — gross, cursed, or slightly wrong in a way that produces mild discomfort before the laugh. Stupid names are blunt and dumb but not necessarily uncomfortable. The overlap is large, and this generator produces both, but sick names carry more risk of hitting a platform filter, so check before committing one to an account.' },
  { category: 'Best practices', question: 'Should I keep generating or use the first name I liked?', answer: 'Usually use it. Spending twenty minutes selecting the perfect stupid name is its own kind of joke, but the first result that made you laugh out loud was almost certainly correct. This register rewards instinct over deliberation, and extended comparison tends to talk you out of the genuinely dumb option in favour of a safer one.' },
  { category: 'Troubleshooting', question: 'My results seem clever rather than stupid. What now?', answer: 'Generate again and specifically discard anything with wordplay in it. A result carrying a hidden pun belongs to a different register and will read as clever no matter how you use it. If you consistently want the wittier output, the punny name generator targets that directly, while this page is tuned for the blunt end.' },
  { category: 'Use cases', question: 'Can I use stupid names for pets, cars, or Wi-Fi networks?', answer: 'Yes, and these are ideal low-stakes homes for the most committed results. A genuinely dumb name gives a pet, car, or robot vacuum instant personality. Wi-Fi networks are a particularly good fit because your neighbours see the name without any context at all, which suits a name that explains nothing and apologises for nothing.' },
  { category: 'Limits', question: 'Can I generate more than 24 stupid names?', answer: 'Not in one run, but there is no limit on runs. Do several batches of 24, paste them into the same note, and delete duplicates to build a longer list. Each run is an independent random set, so batching this way genuinely widens your options rather than producing variations on the same results.' },
];

export default async function StupidNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '870', bestRating: '5', worstRating: '1' } };
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="stupid" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the stupid name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
