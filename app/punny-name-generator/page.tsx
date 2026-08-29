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

const toolSlug = 'punny-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Punny Name Generator',
    description: 'Free punny name generator and pun name maker. Create name puns built on real words, foods, and phrases — every result is an actual pun, not a random name.',
    seoTitle: 'Punny Name Generator – Name Puns & Pun Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Punny Name Generator – Name Puns That Actually Land</h2>
        <p>
          A pun name is a machine with two moving parts, and a punny name generator is only useful if it respects both of them. The first part is a name — something with the shape, rhythm, and capitalisation of a person, which the reader accepts without thinking. The second part is a phrase hiding inside it, which arrives about half a second later. The gap between those two readings is where the joke lives, and everything that follows on this page is about controlling that gap.
        </p>
        <p>
          This punny name generator is tuned for that one construction. Every result is built on a real word, food, expression, or phrase rather than invented from comic-sounding syllables. Set a count between 1 and 24, generate, and read the batch aloud — puns are sound before they are spelling, and silent reading will cost you the best results in every run.
        </p>

        <h2>The Two-Reading Test Every Punny Name Generator Result Must Pass</h2>
        <p>
          Every working pun name from a punny name generator passes two readings in sequence, and every failed one breaks at a specific point. Knowing which point saves you from discarding a name that is one edit from being excellent.
        </p>
        <p>
          <strong>First reading — does it pass as a name?</strong> The reader has to accept it as a person before anything else happens. This requires plausible name rhythm, a believable split between first and surname, and no spelling so strange it announces itself as a puzzle. A construction that fails here never gets a second reading, because the reader has already classified it as wordplay and started decoding rather than absorbing.
        </p>
        <p>
          <strong>Second reading — does the phrase arrive unprompted?</strong> A beat after the name registers, the underlying phrase should surface without the reader working for it. This requires the source phrase to be one they know well, the stress pattern to match, and the phonetic distortion to stay small.
        </p>
        <p>
          Pun names that fail the first reading are usually over-distorted and can be rescued by pulling the spelling back toward normal. Names that fail the second are usually built on source material that is too obscure, and those cannot be rescued — the problem is the phrase, not the construction.
        </p>

        <h2>Five Ways This Punny Name Generator Builds a Pun</h2>
        <p>
          A punny name generator is only as good as the range of constructions it draws on. This one varies its method across a batch rather than repeating a single trick, so one run gives you several mechanisms to choose between.
        </p>

        <h3>Homophone</h3>
        <p>
          The name is phonetically identical to an existing phrase with no distortion at all. This is the cleanest construction and the rarest, because English does not offer many phrases that already sound exactly like a plausible name. When one appears in a batch, it is almost always the pick.
        </p>

        <h3>Split-Word</h3>
        <p>
          A single word or phrase divided at a boundary that is not its own, so the fragments read as a first and last name. The seam is the joke — the reader sees two ordinary name-shaped chunks, then realises the division was in the wrong place. This produces the most satisfying double-take of any construction, and it works better in writing than aloud, because the eye catches a boundary the ear glides over.
        </p>

        <h3>Near-Miss Respelling</h3>
        <p>
          One or two letters away from a real phrase, close enough that the ear completes it automatically. This is the most productive construction because it reaches phrases no exact homophone could ever produce. It is also the easiest to overdo: past roughly two changes, readers stop hearing a pun and start seeing a misspelling.
        </p>

        <h3>Category-Anchored</h3>
        <p>
          The pun draws on a specific domain — food, trades, animals, plants. These work disproportionately well when the name is attached to something in that domain, because the context has already narrowed what the reader is listening for before the name arrives.
        </p>

        <h3>Honorific Frame</h3>
        <p>
          The wordplay sits inside a formal container: a title, an initial, a suffix. The straight delivery is the mechanism — formality makes the joke inside it land harder by contrast, the same way a deadpan delivery beats a grinning one.
        </p>

        <h2>Three Variables That Decide Whether a Pun Name Lands</h2>
        <p>
          When a pun name from any punny name generator fails, it is nearly always one of three things, and they are worth checking in order.
        </p>
        <p>
          <strong>Familiarity of the source.</strong> This is the dominant factor by a wide margin. A pun on a phrase people hear constantly resolves instantly, because the phrase sits near the surface of memory and needs almost no prompting. A pun on something obscure requires active retrieval, and the joke dies during the search. If a pun is not landing, this is the first thing to suspect.
        </p>
        <p>
          <strong>Stress placement.</strong> Names carry a natural emphasis pattern and so do phrases. When the pun preserves the source phrase&apos;s stress, the ear locks on immediately. When it forces emphasis onto an unnatural syllable, readers see the letters and never hear the sound — which is why a pun can look flawless written down and fail completely when spoken.
        </p>
        <p>
          <strong>Syllable count.</strong> Matching the source syllable-for-syllable makes a pun feel inevitable. Adding or dropping one makes it feel approximate, and approximate puns earn a nod rather than a laugh.
        </p>

        <h2>Rescuing a Punny Name Generator Result That Almost Works</h2>
        <p>
          Most of the best pun names in a punny name generator batch are not the finished ones — they are near-misses that took one edit. Four moves fix the majority.
        </p>
        <p>
          <strong>Move the split point.</strong> Shift the boundary between first and surname one or two letters in either direction. This single move converts more near-misses than the other three combined.
        </p>
        <p>
          <strong>Change one vowel.</strong> Vowels carry most of the phonetic weight in a pun. Nudging a single vowel toward the source usually closes the gap without making the name look misspelled.
        </p>
        <p>
          <strong>Add or drop a doubled consonant.</strong> Doubled letters change how a reader paces a name and can pull an ambiguous construction onto the intended reading.
        </p>
        <p>
          <strong>Change what surrounds it.</strong> Sometimes the pun is fine and its container is wrong. A name that falls flat unattached often lands once it belongs to a bakery, a character, or a team, because the setting primes the reader toward the right domain before they read a letter.
        </p>

        <h2>Why a Punny Name Generator Yields Two or Three Keepers Per Run</h2>
        <p>
          A batch of 24 from this punny name generator typically yields two or three name puns you would actually use. That sounds like a poor return until you see why, at which point it becomes the expected outcome rather than a disappointment.
        </p>
        <p>
          Pun name quality is close to binary. Most name types sit on a gradient where a middling result is still usable. Puns do not — either the phonetic match closes and the second meaning arrives, or it does not close and the reader sees a name with no joke in it. There is very little ground between those states.
        </p>
        <p>
          This compounds because a pun name must satisfy several constraints at once: name-shaped, phonetically faithful, built on a known phrase, stress-compatible, syllable-matched. Each one independently eliminates candidates, and they multiply rather than average. A construction meeting four of five does not score eighty percent — it fails.
        </p>
        <p>
          So generating volume is not optional with a punny name generator the way it is elsewhere. Two or three runs for one keeper is normal work, and a fair trade given how much longer a good pun name lasts than an absurd one.
        </p>

        <h2>Choosing Source Material for a Pun Name Maker</h2>
        <p>
          When you are steering a pun name maker toward a particular kind of pun rather than taking what a batch offers, the source category matters more than any other choice.
        </p>
        <p>
          <strong>Food is the strongest category a punny name generator can draw on.</strong> Food words are short, phonetically varied, universally known, and carry no baggage — satisfying nearly every constraint at once. This is why food puns dominate business naming and keep reappearing in fiction across every language with restaurants.
        </p>
        <p>
          <strong>Occupations are the next best source for a pun name,</strong> because they are already name-adjacent. A large share of real surnames began as job descriptions, so an occupational pun sounds like a plausible name almost automatically.
        </p>
        <p>
          <strong>Idioms are high-risk and high-reward.</strong> When an idiom pun lands it is the funniest type available, because the phrase carries an entire meaning rather than a single word. But idioms are long, and compressing one into a name without distortion is difficult.
        </p>
        <p>
          <strong>Technical vocabulary is usually a trap.</strong> Domain terms feel clever to whoever knows them and read as nonsense to everyone else. Unless the audience is guaranteed to share the vocabulary, these fail more often than they land.
        </p>
        <p>
          <strong>Anything requiring current knowledge expires.</strong> A pun on a phrase that is everywhere right now will be unreadable in two years. Fine for something disposable, poor for a business or a character who has to last.
        </p>

        <h2>The Same Pun Name in Different Media</h2>
        <p>
          A pun name that works in one medium can fail in another, and the pattern is consistent enough to plan around.
        </p>
        <p>
          <strong>On the page, split-word pun names win.</strong> The eye catches an unusual word boundary that the ear passes straight over. If your pun depends on someone noticing where one word ends and another starts, it belongs somewhere it will be read.
        </p>
        <p>
          <strong>Spoken aloud, homophone pun names win.</strong> When a name is said, spelling becomes invisible and only sound survives. Puns relying on an unusual respelling lose their entire mechanism, while phonetically exact ones land harder than they ever do in print.
        </p>
        <p>
          <strong>As a handle, compression helps.</strong> Removing spaces obscures word boundaries and slightly increases the work of spotting the joke. That is usually an advantage — handles get read repeatedly, so a small delay is affordable, and the reader who works it out feels rewarded.
        </p>
        <p>
          <strong>On a sign, only short and category-anchored survives.</strong> Signage gets a fraction of a second from someone not trying to read it. Anything requiring effort is lost, and anything failing to signal the category has spent its one opportunity.
        </p>

        <h2>Why Pun Names Predate Every Punny Name Generator</h2>
        <p>
          Pun names are not a modern novelty or an internet habit. They appear across centuries of theatre, literature, shop signage, and stage naming, in language after language, and they keep reappearing for a structural reason worth understanding.
        </p>
        <p>
          A pun name is the most compressed joke format that exists. Every other kind of joke needs a setup and a payoff separated in time — you have to give the audience something before you can subvert it. A pun name collapses both halves into a single string the reader processes in under a second, with the setup and the punchline occupying the same characters.
        </p>
        <p>
          That compression is why it survives in places nothing else fits. A shop sign, a jersey, a name tag, a username, a menu item: each has room for exactly one unit of text and no room at all for a setup. Any trade whose signage is its primary advertising adopted pun naming heavily, because they needed a joke that fits in the space a name occupies. The same pressure produces the same solution wherever it appears, which is why the convention keeps being reinvented independently rather than spreading from one source.
        </p>

        <h2>Where the Reader Meets Your Pun Name Matters</h2>
        <p>
          A pun name is not self-contained. Its success depends heavily on what surrounds it, and the identical construction can be invisible in one setting and obvious in another.
        </p>
        <p>
          <strong>Domain priming is the strongest lever available for a pun name.</strong> When a reader already has the right category active in mind, a pun in that category resolves almost instantly, because the search space has been narrowed before the name arrives. This is why a food pun on a bakery works better than the same pun floating free — the setting did half the work.
        </p>
        <p>
          <strong>Typography does more than people expect.</strong> Capitalising at the intended word boundary tells the eye where to split. The same letters split correctly read as wordplay and split wrongly read as gibberish, and that is entirely within your control.
        </p>
        <p>
          <strong>Neighbouring names set the frame.</strong> A pun sitting in a list of other puns gets read punningly, because the reader learns the pattern by the third entry and starts actively looking. A single pun among straight names frequently gets skimmed past by readers who were never told to look for one.
        </p>

        <h2>Testing a Punny Name Generator Result Before You Commit</h2>
        <p>
          You are structurally the worst judge of your own pun name, because you already know the answer. These tests correct for that.
        </p>
        <ul>
          <li><strong>The cold read.</strong> Show it to someone with no context and say nothing at all. If they reach the second meaning unaided, it works. If you have to prompt even slightly, it does not.</li>
          <li><strong>The delay check.</strong> Watch their timing. A beat of nothing followed by recognition is the target. Instant comprehension usually means the pun is too obvious to satisfy; no reaction means it missed entirely.</li>
          <li><strong>The retell test.</strong> Ask them to repeat it back an hour later. A pun that survives retelling is genuinely memorable; one that comes back garbled was too fragile to use.</li>
          <li><strong>Test in the right channel.</strong> Try it in the medium you will actually use. Puns that work spoken often fail written and vice versa, so testing in the wrong one gives you a false positive.</li>
        </ul>

        <h2>Judging a Punny Name Generator&apos;s Output: the Groan Is a Pass</h2>
        <p>
          People misread the reaction their pun name gets more often than they misjudge the pun itself, and it costs them names that were working.
        </p>
        <p>
          Groaning at a pun name is not rejection. It is the conventional acknowledgement that a pun landed — a way of registering that you got it while pretending you did not want to. The groan is culturally specific to wordplay and does not attach to other kinds of joke, which is exactly what makes it a reliable signal. Nobody groans at a name that failed; they simply say nothing.
        </p>
        <p>
          <strong>Silence is the actual failure state for a pun name.</strong> If a pun produces no reaction at all, the second reading did not arrive and the name is doing nothing. That is the result to act on, not the groan.
        </p>
        <p>
          <strong>A delayed laugh is the best outcome available.</strong> The beat of nothing followed by a reaction means the recognition mechanism fired exactly as designed. This is better than an immediate laugh, which often means the pun was so obvious it never created the gap that makes wordplay satisfying.
        </p>
        <p>
          <strong>An explanation request is fatal.</strong> If someone asks what it means, the pun has failed for that person permanently — explaining it cannot recover the joke, because the entire mechanism was the unaided recognition you just replaced with a description.
        </p>
        <p>
          Read your test audience on this scale rather than on whether they seemed impressed. Puns are not built to impress; they are built to be caught.
        </p>

        <h2>Building a Set of Pun Names That Belong Together</h2>
        <p>
          Sometimes you need several results from a pun name maker that work as a group — a cast, a roster, a product line, a set of accounts. Here consistency matters more than the individual quality of any one name.
        </p>
        <p>
          The reliable method with a punny name generator is to fix one variable and vary the other. Either hold the construction type constant and change the source domain, or hold the domain constant and vary the construction. A set built entirely on food puns, or entirely on split-word constructions, reads as deliberate. A set varying both axes at random reads as unrelated names that happen to be puns.
        </p>
        <p>
          Order matters too. If the pun names appear in sequence, put the clearest one first. The opening entry teaches the reader that this is a pun list, and once they know the pattern they actively look for wordplay in everything after it — which rescues the subtler entries that would otherwise be skimmed past entirely.
        </p>

        <h2>How Long a Pun Name From a Pun Name Maker Keeps Working</h2>
        <p>
          Pun names outlast every other kind of funny name, and the reason is mechanical rather than a matter of taste. It is the single strongest argument for reaching for a punny name generator over a general one.
        </p>
        <p>
          A name that is funny through surprise spends its impact on first contact, which is exactly what a pun name does not do. Once someone has been surprised, the surprise cannot happen again for that person, and there is nothing underneath to re-trigger. A pun name works differently: the recognition beat resets completely for every new reader, so in any context with turnover the pun effectively never ages. A shop sign, a username, a character in a book being read by someone new — each of those meets a fresh audience continuously, and the pun performs identically every time.
        </p>
        <p>
          Even for repeat readers a pun name decays more slowly than other mechanics. The recognition partially re-fires rather than disappearing, which is why people keep finding the same pun mildly satisfying long after a merely absurd name has gone invisible.
        </p>
        <p>
          The trade-off with a punny name generator is the hit rate discussed above. Absurd names are easy to produce in volume and most are at least serviceable; puns either work or they do not. You generate more to find fewer, and what you find lasts considerably longer. For anything you will keep for months or years, that is the right side of the trade.
        </p>

        <h2>Six Ways to Kill a Pun Name That Was Working</h2>
        <ul>
          <li><strong>Punning on something nobody says.</strong> Readers cannot recognise what they do not already know. Obscure source material is the single most common cause of a dead pun.</li>
          <li><strong>Distorting past two letters.</strong> Beyond that threshold the reader stops hearing wordplay and starts seeing an error, which converts your joke into an apparent typo.</li>
          <li><strong>Stacking two puns in one name.</strong> The second competes with the first for the same recognition moment and both are muddied. One clean pun beats two half-visible ones.</li>
          <li><strong>Fighting the stress.</strong> A pun that only works if the reader emphasises an unnatural syllable will fail for nearly everyone who encounters it.</li>
          <li><strong>Explaining it.</strong> A pun needing a parenthetical has already failed. There is no version of wordplay that becomes funny after being decoded for you.</li>
          <li><strong>Settling for merely clever.</strong> Recognition alone is not comedy. If the hidden phrase means something unremarkable, you have built a riddle. The second meaning has to be undignified or absurdly at odds with the surface for the pun to be funny rather than just neat.</li>
        </ul>

        <h2>What This Punny Name Generator Does Not Store</h2>
        <p>
          Every pun name this punny name generator produces is generated for your session and is not stored, logged, or tied to an identity. We do not keep results, batch sizes, or run counts. Refreshing or closing the page clears the batch, so copy anything worth keeping before you leave — given the yield rate on puns, losing a good one to a refresh is genuinely annoying.
        </p>

        <h2>If a Punny Name Generator Is Not What You Wanted</h2>
        <p>
          A punny name generator works a narrow register, and the constraints that make pun names durable also make them fussy. If you would rather have names that are funny without demanding the reader decode anything, the <Link href="/funny-name-generator">funny name generator</Link> mixes wordplay with absurdity, mismatch, and sound-based humour and has a much higher hit rate per batch. The <Link href="/stupid-name-generator">stupid name generator</Link> goes the other direction entirely, where the absence of cleverness is the joke. And if you want to pun on one specific name rather than generate from scratch, the <Link href="/funny-name-converter">funny name converter</Link> takes a name as input and works from its sounds.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a punny name generator?', answer: 'It is a free tool that produces name puns — names built so they read as a plausible person at first glance and resolve into a real word or phrase a beat later. Unlike a general funny name generator, every result here is an actual pun on something real: a food, an expression, a common phrase, or an existing name. It runs in your browser with no account required.' },
  { category: 'General', question: 'How is this different from a funny name generator?', answer: 'A funny name generator mixes several comedy mechanics — absurdity, mismatched pairings, silly sounds, and puns among them. This pun name maker restricts itself to wordplay only. If you want a name that hides a real phrase inside it, this is the right tool; if you want names that are goofy or absurd without necessarily being puns, the funny name generator gives you a wider mix.' },
  { category: 'Naming', question: 'What makes a name pun actually work?', answer: 'Two conditions have to hold at once. The result must be name-shaped, with the rhythm and structure of a real name so the reader accepts it initially. And it must be phonetically close enough to the source phrase that the second reading is unmistakable. Beyond that, the three biggest predictors of success are how common the source phrase is, whether the pun preserves the natural stress pattern, and whether the syllable count matches.' },
  { category: 'Naming', question: 'What are the main types of name puns?', answer: 'Homophone puns sound identical to an existing phrase with no distortion, which makes them the cleanest. Split-word puns divide a single word at an unnatural point so the fragments read as a first and last name. Near-miss respellings sit a letter or two from a real phrase. Category puns work within a domain like food or occupations. Title puns build the wordplay into a formal construction, where the straight delivery makes the joke land harder.' },
  { category: 'Usage', question: 'How do I use the pun name maker?', answer: 'Set how many name puns you want, from 1 to 24, then press Generate. Read every result out loud rather than silently, because puns are sound-based jokes and silent reading misses the ones that work best. Look for a short delay followed by recognition — that beat is the joke working. Copy the batch to keep your shortlist.' },
  { category: 'Best practices', question: 'Why should I read pun names aloud?', answer: 'Because a pun lives in sound, not spelling. A name pun that looks perfect written down can fail completely when spoken, usually because it forces stress onto an unnatural syllable. Reading aloud also surfaces puns your eyes skipped, since the phonetic match is often clearer to the ear than to the eye. This is the single highest-value habit when picking from a batch.' },
  { category: 'Limits', question: 'How many name puns can I generate at once?', answer: 'Between 1 and 24 per run, with no limit on how many runs you do. Expect a run of 24 to contain roughly two or three genuinely clean puns — that yield is normal. Pun quality varies more than other name types because the phonetic match either works or it does not, so generating a large batch and shortlisting is the right approach.' },
  { category: 'Troubleshooting', question: 'My pun almost works. How do I fix it?', answer: 'Four moves rescue most near-misses. Shift the split point one or two letters in either direction so the first and last name divide more naturally. Adjust a single vowel toward the source phrase, since vowels carry most of the phonetic weight. Add or remove a doubled consonant to change how the reader paces the name. Or change the surrounding context, because a pun that falls flat unattached often lands once it is a shop, a character, or a team.' },
  { category: 'Use cases', question: 'Can I use a punny name for a business?', answer: 'Yes, and it is one of the strongest uses. Punny names have dominated small business naming for decades in hairdressing, cafés, bakeries, plumbing, and pet grooming, for a practical reason: a pun name is memorable without advertising spend. Someone who hears it once and laughs recalls it weeks later. The one constraint is that the pun should still signal what you sell — a clever pun that leaves people unsure of your category has traded utility for wit.' },
  { category: 'Use cases', question: 'Are pun names good for fantasy football or trivia teams?', answer: 'They outperform other funny names there, for a structural reason. An absurd or shock name is funny the first time it appears in the standings and invisible by week four. A pun name re-triggers its recognition beat for every new person who reads it, so in a league with rotating members or a table everyone checks weekly, it keeps working all season.' },
  { category: 'Use cases', question: 'Can I use pun names for fictional characters?', answer: 'Yes, and it is a long-standing genre convention, especially in comedy, children fiction, and animation. A pun name tells the reader immediately that the work does not take itself entirely seriously, setting tone before any dialogue happens. Use them consistently across the cast — a single pun name among otherwise straight names reads as an accident rather than a deliberate choice.' },
  { category: 'Use cases', question: 'Do punny names work as usernames?', answer: 'Well, and often better than generic names. A pun handle is more likely to be available because the search space for puns is enormous while common words are exhausted. Pun names also survive username compression better than most types — removing the spaces from a split-word pun makes the joke slightly harder to spot, which works in your favor, since a reader who decodes it feels rewarded.' },
  { category: 'Naming', question: 'Why do some puns need explaining?', answer: 'Almost always because the source phrase is too obscure. A reader cannot recognize what they do not already know well, so a pun on an expression people rarely use dies during retrieval. Puns on very common phrases resolve instantly because the phrase sits near the surface of memory. If a pun needs a parenthetical to work, it has already failed — there is no version of a pun that becomes funny after being decoded for you.' },
  { category: 'Best practices', question: 'How far can I distort spelling in a pun name?', answer: 'About two letters is the practical ceiling. Within that range the ear completes the phrase automatically and the name still looks intentional. Past it, readers stop hearing a pun and start seeing a misspelling, which converts your joke into an apparent error. If a pun needs three or more changes to work, it is usually better to generate a fresh batch than to force it.' },
  { category: 'Best practices', question: 'Can I put two puns in one name?', answer: 'It rarely works. The second pun competes with the first for the same recognition moment, and rather than doubling the joke both readings get muddied. One clean pun delivered clearly beats two half-visible ones. If you have two puns you like, use them on two different things rather than stacking them.' },
  { category: 'Naming', question: 'What is the difference between a pun name and a merely clever name?', answer: 'Recognition alone is not comedy. A name that reveals a hidden word but where that word means something unremarkable produces a small nod of recognition and nothing more — that is a riddle, not a joke. For a pun to be funny, the second meaning has to be incongruous with the first: the phrase underneath should be undignified, unexpected, or absurdly at odds with the name on the surface.' },
  { category: 'Privacy', question: 'Are my generated pun names stored?', answer: 'No. Results are generated for your session and are not stored, logged, or tied to any identity. We do not keep the name puns you produce, your batch size, or how many times you run the tool. Refreshing or closing the page clears the current batch, so copy anything worth keeping before you navigate away.' },
  { category: 'General', question: 'Is the punny name generator free?', answer: 'Yes. There is no payment, and you can generate name puns without installing anything. It runs as a normal web page, so there is nothing to download and no cost regardless of how many batches you generate.' },
  { category: 'Compatibility', question: 'Does the pun name generator work on mobile?', answer: 'Yes, it is a responsive page that works on phones, tablets, and desktops. On mobile you can generate a batch, tap Copy, and paste the puns straight into a chat or a signup field. One tip specific to this tool: reading results aloud matters for puns, and phones make that easy to do anywhere.' },
  { category: 'Usage', question: 'Can I copy the generated name puns?', answer: 'Yes. The Copy button puts the entire batch on your clipboard as plain text, one name per line, which pastes cleanly into notes, documents, and chat windows. Since good puns come at a lower yield than other name types, collecting several runs into one document and shortlisting from the combined pile is the standard workflow.' },
  { category: 'Best practices', question: 'How do I know if a pun name is good without asking anyone?', answer: 'You largely cannot, and that is worth accepting. You already know what the pun is meant to be, which makes you the worst possible judge of whether it reads cold. The reliable test is showing it to someone with no context and watching whether they arrive at the second meaning unaided. If they need a hint, the pun is not finished.' },
  { category: 'Naming', question: 'Why do pun names last longer than other funny names?', answer: 'Because the recognition mechanism resets for each new reader. An absurd name front-loads its impact and decays with exposure, since surprise cannot happen twice for the same person. A pun name re-fires its recognition beat for everyone who encounters it fresh, and even repeat readers get a partial re-trigger. For anything you will keep for months or years, that durability makes the pun the better investment despite the lower hit rate.' },
  { category: 'Technical', question: 'How does the generator build the puns?', answer: 'It works from real source material — common words, foods, phrases, and expressions — and constructs names that stay phonetically faithful to that source while taking the shape of a plausible person name. It deliberately varies the pun type across a batch, mixing homophones, split-word constructions, and near-miss respellings, so a single run gives you several different mechanisms rather than the same trick repeated.' },
  { category: 'Troubleshooting', question: 'Why did I get results that are not really puns?', answer: 'Occasionally a result lands closer to a generally funny name than a strict pun, usually when the phonetic match is looser than intended. Skip those and generate again rather than trying to force them. It also helps to read aloud before judging, since some genuine puns look like ordinary names on the page and only reveal themselves when spoken.' },
];

export default async function PunnyNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '960', bestRating: '5', worstRating: '1' } };
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="punny" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the punny name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
