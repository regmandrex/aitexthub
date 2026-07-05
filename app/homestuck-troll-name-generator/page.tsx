import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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


const toolSlug = 'homestuck-troll-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Homestuck Troll Name Generator',
    description: 'Free Homestuck troll name generator for fantrolls and OCs. Build six-letter first and last names tied to a zodiac sign, blood color, and a hidden pun — in your browser, no sign-up.',
    seoTitle: 'Homestuck Troll Name Generator – Fantroll & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Homestuck Troll Name Generator – Fantroll &amp; OC Names</h2>
        <p>
          This Homestuck troll name generator builds troll names the way Andrew Hussie did in the webcomic: a six-letter first name and a six-letter last name, each chosen to bury a pun, a mythological reference, or a zodiac tie inside something that still reads like a name a grub would actually be hatched with. Whether you are designing a fantroll (an original troll OC) for a roleplay, sketching a session of twelve players for a fan adventure, or just want a handle in the spirit of Karkat Vantas and Terezi Pyrope, the tool produces ready-to-use troll names in your browser. There is no sign-up, nothing is stored, and you can generate as many batches as you like.
        </p>
        <p>
          Troll names are not random syllables. They obey a tight structural rule — the famous &quot;6-6-6&quot; convention of two six-letter names — and almost every canon name doubles as a riddle once you know where to look. This page explains those conventions, the twelve zodiac signs, the blood-color hemospectrum, and the hidden-reference trick, so the fantroll you create reads as something Hussie could have slipped into the comic rather than a generic fantasy handle.
        </p>

        <h2>The 6-6-6 Rule: Two Six-Letter Names</h2>
        <p>
          The single most recognizable thing about a troll name is its shape. Every canon troll has a first name of exactly six letters and a last name of exactly six letters. Karkat Vantas, Terezi Pyrope, Vriska Serket, Sollux Captor, Aradia Megido, Tavros Nitram, Nepeta Leijon, Kanaya Maryam, Equius Zahhak, Gamzee Makara, Eridan Ampora, Feferi Peixes — count the letters and every one lands on six and six. Fans call this the &quot;6-6-6&quot; convention, a quiet nod to the trolls&apos; horned, vaguely demonic design.
        </p>
        <p>
          If you want a fantroll to pass as canon, the six-and-six count is the rule you cannot break. A name like &quot;Vrissa Aimlys&quot; works structurally; &quot;Vris Aim&quot; does not, no matter how good the pun is. The generator keeps both halves at six letters so you do not have to count on your fingers — but it is worth checking the count yourself if you tweak a result, because a stray fifth or seventh letter is the fastest way to mark an OC as fan-made.
        </p>
        <p>
          The rule has a few well-known wrinkles worth knowing. The ancestors and the dancestors of the trolls keep the same six-letter halves while echoing their descendants — the Disciple, the Signless, and the Sufferer are role-titles rather than birth names, but where birth names appear they hold to the count. The cherubs and certain other species in Homestuck do not follow the troll convention at all, so if a character is meant to be a troll specifically, the six-and-six shape is what sells it. When in doubt, line your fantroll&apos;s name up against Captor, Megido, and Zahhak and make sure it has the same rhythm and length.
        </p>

        <h2>Hidden Puns and Mythological References</h2>
        <p>
          The second layer of a troll name is the buried reference. Hussie rarely picked names at random; each typically hides a pun on the character&apos;s role, a god or monster from mythology, or both at once. Vriska Serket carries the spider goddess Serket and the &quot;eight&quot; motif of an arachnid; Terezi Pyrope is named for pyrope garnet (red, matching her dragon and her later justice theme); Nepeta Leijon hides &quot;leijona&quot; (lion) and nepeta, the genus for catnip, fitting her cat obsession; Feferi Peixes pulls from &quot;peixe,&quot; Portuguese for fish, suiting the heiress of a sea-dwelling line.
        </p>
        <p>
          The references draw from a wide net. Some are straight mythology — Serket the Egyptian scorpion goddess, Makara echoing the sea-monster of Hindu astrology that also names the Capricorn sign Gamzee carries. Others are linguistic puns hidden in plain sight: Sollux Captor sounds out &quot;sol&quot; and &quot;lux&quot; (two suns, for his Gemini double vision) over &quot;captor&quot; for the psionic he is forced to become. Equius Zahhak nods to &quot;equine,&quot; matching his centaur fixation, while Zahhak references the dragon-king of Persian myth. Once you start reading troll names as riddles, the pattern is everywhere.
        </p>
        <p>
          When you build a fantroll, decide what the name should mean before you finalize the sound. Pick a mythological figure tied to your troll&apos;s theme — a wind god for an air-coded troll, a smith deity for a builder — then bend it toward six letters and look for a pun your troll&apos;s interest can hang on. The best fantroll names reward a second glance: a reader who knows the reference smiles, and a reader who does not still hears a clean, troll-shaped name. Resist the urge to make the pun too obvious; the canon names hide their meaning just below the surface, which is what makes spotting it satisfying rather than groan-worthy.
        </p>

        <h2>The Twelve Zodiac Signs</h2>
        <p>
          The twelve trolls of the main session each map to one Western zodiac sign, and their personalities, symbols, and even their typing color lean on that sign. Aradia is Aries, Tavros is Taurus, Sollux is Gemini, Karkat is Cancer, Nepeta is Leo, Kanaya is Virgo, Terezi is Libra, Vriska is Scorpio, Equius is Sagittarius, Gamzee is Capricorn, Eridan is Aquarius, and Feferi is Pisces. Each troll wears their sign&apos;s glyph on their shirt, and the symbol is as much a part of the character as the name.
        </p>
        <p>
          The signs are not just decoration; in Homestuck they also tie into each troll&apos;s aspect and the structure of their session. The zodiac glyphs themselves are stylized into the troll&apos;s personal symbol, often recolored to match their blood, so the sign and the blood color reinforce each other visually. Eridan&apos;s Aquarius glyph and his violet blood read as a unit; Feferi&apos;s Pisces glyph paired with rare fuchsia signals royalty before she says a word. The sign is the first thing a reader recognizes about a troll at a glance.
        </p>
        <p>
          For a fantroll, choosing a zodiac sign first gives you a free scaffold. The sign suggests a temperament (a fiery Aries troll versus a dreamy Pisces troll), a symbol you can describe on their clothing, and a thematic direction for the name&apos;s hidden pun. If you are building a full twelve-troll session, assigning one sign per troll keeps the cast balanced the way the canon group is — and avoids two OCs accidentally claiming the same glyph. You can also build a smaller friend group of three or four trolls; just spread the signs and elements so the group does not feel like four variations on one personality.
        </p>

        <h2>Blood Color and the Hemospectrum</h2>
        <p>
          Troll society is rigidly stratified by blood color, a caste system fans call the hemospectrum. It runs from rust/burgundy red at the bottom (Aradia, Tavros), up through yellow (Sollux), lime, olive (Nepeta), jade (Kanaya), teal (Terezi), cerulean (Vriska), blue (Equius), indigo/purple (Gamzee), violet (Eridan), and finally fuchsia at the very top — the rare royal color reserved for heiresses like Feferi. The higher the blood runs up the spectrum, the longer the troll lives and the more authority they hold.
        </p>
        <p>
          The spectrum splits roughly into two halves that matter for characterization. The &quot;warm&quot; lowbloods from rust up through olive are short-lived, common, and treated as disposable by troll society; the &quot;cool&quot; highbloods from jade and teal up to fuchsia live longer, hold power, and are expected to lord it over those beneath them. The seadwellers — violet and fuchsia — sit at the very top, biologically distinct with gills and fins, which is why Eridan and Feferi carry an air of nobility the land-dwelling trolls do not. Knowing where your fantroll falls on this divide shapes how they would treat, and be treated by, every other troll in a scene.
        </p>
        <p>
          A troll&apos;s blood color is also their text color: each speaks in their own hue, which is why blood and typing quirk are linked. When designing a fantroll, pick a blood color deliberately. A rust-blood and a fuchsia-blood occupy opposite ends of a brutal social order, and that single choice tells a reader more about your troll&apos;s station, lifespan, and likely attitude than a paragraph of backstory would. Avoid handing an OC fuchsia blood casually — it is canonically the rarest, reserved for would-be empresses, so it carries weight. Most fantroll makers settle on a mid-spectrum color like olive, teal, or cerulean, which gives a troll room to interact with both highbloods and lowbloods without instantly being the most important character in the room.
        </p>

        <h2>Typing Quirks</h2>
        <p>
          Trolls do not type normally. Each has a typing quirk — a consistent stylistic distortion of their text — and a strong fantroll usually comes with one. Sollux doubles every &quot;i&quot; and &quot;s&quot; and writes in twos (&quot;ii&quot; and &quot;2&quot;) for his Gemini and yellow-blood double vision; Terezi TYPES IN ALL CAPS and swaps letters for numbers tied to her senses; Tavros uses uPPERCASE oN tHE wRONG lETTER; Feferi sprinkles &quot;)(&quot; and &quot;38)&quot; for her fins and glasses. The quirk is a fingerprint as identifiable as the name.
        </p>
        <p>
          The generator gives you the name; the quirk is yours to invent, and the two should rhyme thematically. A fire-themed teal-blood might capitalize words about heat; a music-obsessed troll might replace letters with note names. Keep a quirk readable — the canon ones distort text without making it impossible to parse — and tie it to the zodiac, blood color, or hidden pun you already chose so the whole identity hangs together.
        </p>
        <p>
          A few patterns recur across the canon quirks and make good models. Letter-to-number substitution (Terezi&apos;s 1s, 3s, and 4s), doubling (Sollux&apos;s ii and 2), case inversion (Tavros and Vriska), prefix or suffix tics (Gamzee&apos;s lowercase honking), and inserted symbols (Feferi&apos;s )( and Eridan&apos;s wavy &quot;wwords&quot; and double-v) cover most of what you will want. Pick one or two of these moves rather than stacking five — an over-engineered quirk becomes a wall of noise that roleplay partners struggle to read. A light touch that consistently flags the same troll is the goal, the way you can spot a Sollux line by the twos alone.
        </p>

        <h2>How to Use This Homestuck Troll Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many troll names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of six-letter first and last name pairs.</li>
          <li>Skim for a pairing that fits the zodiac sign and blood color you have in mind, then use the Copy button to save the whole list.</li>
          <li>Paste into your character notes and shortlist the names whose sound and buried pun match your fantroll.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your fantroll ideas stay private until you choose to share them in a roleplay or fan work.
        </p>

        <h2>Building a Fantroll OC</h2>
        <p>
          A fantroll is an original troll character, and the name is where most fans start. A strong fantroll name does three jobs at once: it lands on six-and-six letters so it sits beside canon trolls, it hints at a zodiac sign or blood color, and it hides a pun or myth reference that rewards a closer read. Generate a batch, then ask of each pair: could this name appear in a trollslum census next to Vantas and Maryam without standing out as fake? If yes, it is in the right register.
        </p>
        <p>
          A common approach is to lock the framework first — pick a zodiac sign, a blood color, and a one-word concept (rust-blood Aries who tinkers with junk, say) — and then generate names until one fits the concept&apos;s pun. Build the typing quirk and the sign glyph around the chosen name. If you are casting a whole twelve-troll session, generate a large batch and assign names to signs so each blood tier and each glyph is represented exactly once, mirroring the structure of the original group.
        </p>
        <p>
          Once the name is set, the rest of the fantroll falls into place around it. Trolls have a lusus (a monstrous guardian beast), a hive, a strife specibus (the kind of weapon they use), and a place in the romantic quadrant system that is unique to troll culture — flushed, pale, ashen, and caliginous relationships rather than a single notion of love. None of that is generated here, but the name is the keystone: a clear six-and-six name with a buried pun gives you the tone, the caste, and the sign all at once, and the lusus and quadrants tend to suggest themselves from there. Many creators write the name first precisely because it constrains and inspires every later choice.
        </p>

        <h2>Tips for a Name That Feels Canon</h2>
        <p>
          Say the name out loud. The canon troll names are meant to be spoken — Karkat, Terezi, Vriska all roll off the tongue with a hard, slightly harsh edge that suits the species. A fantroll name that trips over itself when said aloud will trip a reader too, so favor pairings that sound natural even before you check the letter count. Many of the strongest fan names lean on consonant clusters and abrupt endings the way the canon ones do, rather than soft, flowing fantasy sounds that read as elf rather than troll.
        </p>
        <p>
          Watch out for accidental collisions with canon. You do not want a fantroll literally named Vriska Serket, and you should also dodge near-misses that read as lazy expies — a &quot;Vriksa Sarket&quot; fools no one. Generate a batch, discard anything that echoes a canon troll too closely, and keep the pairings that feel new but native. A good final test: imagine the name appearing in a list of the twelve original trolls. If it would slide in without a reader doing a double-take, you have hit the register; if it stands out as either too plain or too obviously fan-made, generate again.
        </p>
        <p>
          Finally, let the name and the framework check each other. If you picked Pisces and fuchsia but the generated name has a fiery, aggressive sound, either swap the name or reconsider the concept — a serene sea-dweller and a snarling battle name pull against each other. The canon trolls feel cohesive because name, sign, blood, and quirk all point the same direction. Lining those four up is the difference between a fantroll that reads as a real troll and one that reads as a costume.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Homestuck-style troll names — six-letter first and last name pairs — for fantrolls, roleplay, and fan fiction.</li>
          <li>It does not reproduce the canon cast as a database; output is original material for your own creative use, not duplicates of Vriska or Karkat.</li>
          <li>It does not assign a blood color, zodiac sign, or typing quirk for you — those are creative choices you layer onto the name.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Homestuck has one of the most prolific OC communities on the internet, and the fantroll is its signature creation — a whole subculture of original trolls with their own signs, blood colors, quirks, and tangled romantic quadrants. This Homestuck troll name generator gives you the starting pool instantly, grounded in the comic&apos;s real naming logic: the strict six-and-six letter count, a zodiac sign, a place on the hemospectrum, and a pun or myth reference hiding in plain sight. Generate a batch, lean on the zodiac and blood notes above, and you will end up with troll names that feel like they were always part of the session.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Homestuck troll name generator?', answer: 'It is a browser tool that creates troll names in the style of the webcomic Homestuck: a six-letter first name and a six-letter last name, the pairing fans call the 6-6-6 convention. It produces names suited to fantrolls (original troll OCs), roleplay, and fan fiction in the spirit of Karkat Vantas, Terezi Pyrope, and Vriska Serket. It runs locally in your browser with no sign-up and stores nothing.' },
  { category: 'Naming rules', question: 'What is the 6-6-6 rule for troll names?', answer: 'Every canon troll has a first name of exactly six letters and a last name of exactly six letters. Karkat Vantas, Sollux Captor, Aradia Megido, Kanaya Maryam, Feferi Peixes — count them and each half lands on six. Fans call this the 6-6-6 convention, a nod to the trolls\' horned, demon-styled design. If you want a fantroll to pass as canon, keeping both names at six letters is the one rule you should not break.' },
  { category: 'Naming rules', question: 'Do troll names have to follow the six-letter pattern?', answer: 'For canon-feeling names, yes. The six-and-six letter count is the strongest structural signal of a Homestuck troll name. A name like Vrissa Aimlys works because both halves hit six letters; cutting either short marks the name as fan-made. This generator keeps both names at six letters, but if you edit a result by hand, recount the letters so you do not accidentally land on five or seven.' },
  { category: 'Hidden meaning', question: 'Why do canon troll names hide puns and myths?', answer: 'Andrew Hussie rarely named trolls at random. Most names bury a pun on the character\'s role or a mythological reference, often both. Vriska Serket carries the spider goddess Serket; Terezi Pyrope is named for red pyrope garnet; Nepeta Leijon hides a lion and nepeta, the catnip genus, fitting her cat obsession; Feferi Peixes pulls from peixe, Portuguese for fish. A strong fantroll name rewards a second look the same way.' },
  { category: 'Hidden meaning', question: 'How do I put a hidden reference in my fantroll name?', answer: 'Decide what the name should mean before you fix the sound. Pick a myth figure or a word tied to your troll\'s theme — a wind god for an air-coded troll, a smith deity for a builder — then bend it toward six letters and hang a pun on your troll\'s interest. Generate a batch, and keep the pairing whose buried reference matches the concept you already have in mind.' },
  { category: 'Zodiac', question: 'How do the twelve zodiac signs relate to trolls?', answer: 'The twelve trolls of the main session each map to one Western zodiac sign: Aradia is Aries, Tavros Taurus, Sollux Gemini, Karkat Cancer, Nepeta Leo, Kanaya Virgo, Terezi Libra, Vriska Scorpio, Equius Sagittarius, Gamzee Capricorn, Eridan Aquarius, and Feferi Pisces. Each wears their sign\'s glyph on their shirt. Choosing a sign for a fantroll gives you a temperament, a symbol, and a direction for the name\'s pun.' },
  { category: 'Zodiac', question: 'Which zodiac sign should my fantroll be?', answer: 'Pick the sign that fits the temperament you want — a fiery Aries troll reads very differently from a dreamy Pisces troll. The sign also gives you a glyph to describe on the troll\'s clothing and a thematic hook for the hidden pun. If you are building a full twelve-troll session, assign one sign per troll so each glyph appears exactly once, the way the canon group is structured.' },
  { category: 'Blood color', question: 'What is the hemospectrum?', answer: 'The hemospectrum is the blood-color caste system that stratifies troll society. It runs from rust/burgundy red at the bottom (Aradia, Tavros), up through yellow (Sollux), olive (Nepeta), jade (Kanaya), teal (Terezi), cerulean (Vriska), blue (Equius), purple (Gamzee), violet (Eridan), and fuchsia at the very top (Feferi). Higher blood means longer life and more authority. Picking a blood color tells a reader your troll\'s station before any backstory.' },
  { category: 'Blood color', question: 'What blood color should I give my fantroll?', answer: 'Choose it deliberately, because it sets your troll\'s social rank, lifespan, and likely attitude. A rust-blood and a fuchsia-blood sit at opposite ends of a brutal order. Avoid handing an OC fuchsia blood casually — canonically it is the rarest color, reserved for would-be empresses like Feferi, so it carries weight. A mid-spectrum color like teal or cerulean is a safer, more flexible default.' },
  { category: 'Typing quirk', question: 'What is a typing quirk?', answer: 'A typing quirk is a consistent stylistic distortion of a troll\'s text. Sollux doubles his i\'s and s\'s and writes twos for his Gemini double vision; Terezi TYPES IN ALL CAPS with letter-number swaps; Tavros uSES uPPERCASE oN tHE wRONG lETTER; Feferi sprinkles )( and 38) for her fins and glasses. A quirk is a fingerprint as recognizable as the name, so most strong fantrolls come with one.' },
  { category: 'Typing quirk', question: 'How do I invent a typing quirk for my fantroll?', answer: 'Tie the quirk to something you already chose — the zodiac sign, blood color, or the name\'s pun. A fire-themed troll might capitalize words about heat; a music-obsessed troll might swap letters for note names. Keep it readable: the canon quirks distort text without making it impossible to parse. The generator gives you the name; the quirk is yours to build around it.' },
  { category: 'Fantroll', question: 'How do I make a fantroll OC?', answer: 'A fantroll is an original troll character. Lock the framework first — a zodiac sign, a blood color, and a one-word concept like "rust-blood Aries who tinkers with junk" — then generate names until one fits the concept\'s pun and lands on six-and-six letters. Build the typing quirk and sign glyph around the chosen name. Ask of each result whether it could sit on a census beside Vantas and Maryam without looking fake.' },
  { category: 'Fantroll', question: 'Can I name a full twelve-troll session?', answer: 'Yes, and that is a common project. Generate a large batch, then assign names to the twelve zodiac signs so each sign and each blood tier is represented once, mirroring the canon group of twelve. Spreading the cast across the hemospectrum and the zodiac the way the original session does keeps the group balanced and avoids two OCs claiming the same glyph or color.' },
  { category: 'Fantroll', question: 'Can I borrow a canon troll\'s last name for my OC?', answer: 'It is usually better not to. Canon surnames like Vantas, Serket, or Maryam are tightly tied to specific characters and bloodlines, so reusing one reads as derivative. Generate a fresh six-letter last name instead and bury your own pun in it. If you want a hereditary nod — a descendant or relative — make it deliberate and acknowledge it, rather than reusing the name by accident.' },
  { category: 'Usage', question: 'How do I use this Homestuck troll name generator?', answer: 'Set how many troll names you want (1–24), click Generate names, then skim for a six-letter first and last pairing that fits the zodiac sign and blood color you have in mind. Use the Copy button to save the whole list, paste it into your character notes, and shortlist the names whose sound and buried pun match your fantroll. Run again for more — there is no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the names the generator gives me?', answer: 'Yes. Treat the output as a starting point. Take the first name from one result and the last name from another, or tweak a letter to sharpen a pun — just recount so each half stays at six letters. Many fantroll makers generate a batch, mix and match the halves, and layer on a zodiac glyph, blood color, and typing quirk to finish the character.' },
  { category: 'Use cases', question: 'Can I use these names for roleplay?', answer: 'Yes — troll roleplay is a primary use. Homestuck roleplay communities expect names that follow the six-and-six convention and fit a zodiac sign and blood color. Generate a batch, pick a pairing that matches your troll\'s caste and sign, and add a typing quirk so your dialogue reads in-character. If a server keeps a roster, glance at it so two players do not run identical names.' },
  { category: 'Use cases', question: 'Can I use these names for fan fiction?', answer: 'Yes. Original trolls populate a huge amount of Homestuck fan fiction. Because the generated names follow the comic\'s naming logic, your fantrolls sit believably beside canon characters in a scene. Use the zodiac and hemospectrum notes to ground each OC, and keep blood colors spread across the spectrum so your cast has the same social tension the canon trolls do.' },
  { category: 'Technical', question: 'How are the troll names generated?', answer: 'The generator combines curated name parts built around Homestuck\'s conventions — six-letter first names and six-letter last names with the kind of mythological and pun-friendly sounds the canon trolls use — and shuffles them at random in your browser. Each run produces a new set of pairings. Nothing is sent to a server; generation is entirely local to your device.' },
  { category: 'Technical', question: 'Are these the real trolls from Homestuck?', answer: 'No. The generator creates original, Homestuck-style troll names for your own fantrolls rather than reproducing the canon cast as a lookup database. That is intentional: you want fresh six-and-six names you can claim as OCs, not duplicates of Vriska or Karkat that already belong to established characters in the comic.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, the troll names are created on your device. Your settings and the generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your fantroll ideas stay yours until you choose to post them in a roleplay or fan work.' },
  { category: 'Limits', question: 'How many troll names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set of six-letter pairings and there is no daily or total limit. Paste several runs into one document if you want a large pool to draw from when assigning names across the twelve zodiac signs of a full session.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch of troll names on your phone, copy it into your notes, and work out the zodiac sign, blood color, and typing quirk for each fantroll wherever you are sketching characters.' },
  { category: 'General', question: 'Is the Homestuck troll name generator free?', answer: 'Yes, it is completely free with no account, sign-up, or download. Generate as many six-and-six troll names for fantrolls and roleplay as you like, as often as you like.' },
];

export default async function HomestuckTrollNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="homestuck-troll" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Homestuck Troll name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

