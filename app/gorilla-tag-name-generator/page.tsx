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


const toolSlug = 'gorilla-tag-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Gorilla Tag Name Generator',
    description: 'Free Gorilla Tag name generator built for the game’s 12-character, all-caps limit. Get monkey-themed funny, sweaty, and cool VR names you can paste straight into the in-game computer.',
    seoTitle: 'Gorilla Tag Name Generator – Funny, Sweaty & Cool Monkey Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Gorilla Tag Name Generator – Funny, Sweaty &amp; Cool Monkey Names</h2>
        <p>
          Gorilla Tag drops you into a VR world where you are a featureless arm-swinging monkey climbing trees, chasing other players, and tagging them &quot;it.&quot; The one thing that tells everyone apart is the name floating above your gorilla. This generator builds names that actually fit that world: monkey- and ape-themed, short enough to survive the game&apos;s 12-character cap, and styled so they read cleanly once the game forces them into ALL CAPS. Whether you want something funny that makes the lobby laugh, something sweaty that warns people you main the orange map, or something cool you can keep for months, you get a batch of ideas in your browser with no sign-up.
        </p>
        <p>
          The most important thing to know up front is that Gorilla Tag does not give you a long, free-form display name. It hands you a tiny box with hard rules. A generator that ignores those rules just produces names you cannot actually use. This one is built around the real constraints — the 12-character limit, the automatic uppercasing, and the profanity filter that quietly swaps offensive names for a random default — so the ideas you copy will paste straight into the in-game computer without getting truncated or rejected.
        </p>

        <h2>The 12-Character, All-Caps Rule</h2>
        <p>
          Two constraints shape every Gorilla Tag name. First, names are capped at 12 characters. Anything longer is cut off, so &quot;SUPERSWINGER&quot; (12) just fits but &quot;SUPERSWINGERZ&quot; gets clipped. Second, the game forces every name to uppercase. You can type &quot;BananaKing&quot; in the box, but it displays as &quot;BANANAKING&quot; above your monkey and on the leaderboard.
        </p>
        <p>
          That uppercasing changes how you should think about names. Tricks that rely on lowercase letters — like the slim look of &quot;iliii&quot; or cute camelCase — disappear, because everything becomes blocky capitals. Numbers and basic symbols survive the cap and the uppercasing, which is why you see so many names like &quot;OOFMONKE7&quot; or &quot;ZZZ_APE.&quot; This generator keeps suggestions inside the 12-character budget and assumes they will be shown in caps, so what you see is what your lobby sees.
        </p>
        <ul>
          <li><strong>Count every character.</strong> Spaces, numbers, and symbols all count toward the 12. &quot;BIG MONKE&quot; with the space is 9; you have room for more.</li>
          <li><strong>Design for caps.</strong> Pick names that look strong in uppercase. &quot;KONG&quot; and &quot;SWINGLORD&quot; read great; lowercase-dependent tricks do not survive.</li>
          <li><strong>Leave a buffer.</strong> If you like adding a number or a clan tag later, keep the base under about 8–9 characters so there is space.</li>
        </ul>

        <h2>Monkey- and Ape-Themed Names</h2>
        <p>
          Gorilla Tag&apos;s whole identity is the monkey. Leaning into that theme is the fastest way to make a name feel like it belongs in the game rather than copied from a generic gamer-tag list. The generator pulls from ape vocabulary and the community&apos;s in-jokes: &quot;monke&quot; (the deliberately misspelled meme spelling), &quot;banana,&quot; &quot;Kong,&quot; &quot;silverback,&quot; &quot;swing,&quot; &quot;tree,&quot; &quot;OOF,&quot; and &quot;jungle.&quot;
        </p>
        <p>
          Because everyone in the lobby is literally a gorilla, a monkey-themed name lands as a wink rather than a cliche. &quot;MONKEMAN,&quot; &quot;BANANABOY,&quot; &quot;KONG_JR,&quot; or &quot;TREESWINGR&quot; all read instantly as Gorilla Tag names. You can also blend the theme with movement words from the game itself — climbing, swinging, jumping, tagging — since the entire game is locomotion. A name like &quot;SWINGZILLA&quot; or &quot;TAGMONKE&quot; tells people both what you are and what you do.
        </p>

        <h2>Funny vs. Sweaty vs. Cool Styles</h2>
        <p>
          Gorilla Tag names tend to fall into three camps, and knowing which one you want makes the generator far more useful.
        </p>
        <ul>
          <li><strong>Funny.</strong> The lobby is young, casual, and meme-driven, so silly names thrive. Misspelled &quot;monke,&quot; goofy phrases, and absurd combos — &quot;OOFYDOOFY,&quot; &quot;STINKMONKE,&quot; &quot;BANANABRO,&quot; &quot;NOTSWEATY&quot; — get reactions in voice chat. Funny names are the safest bet if you mostly play casual lobbies and want to fit the playful tone.</li>
          <li><strong>Sweaty.</strong> &quot;Sweaty&quot; is community slang for a tryhard who is very good at movement, especially fast climbing and tagging. Sweaty names signal that: short, aggressive, often with numbers or Zs — &quot;APEX,&quot; &quot;ZENMONKE,&quot; &quot;SWIFT7,&quot; &quot;VOIDAPE,&quot; &quot;NOSCOPE9.&quot; If you grind movement and want people to expect a chase, lean here.</li>
          <li><strong>Cool.</strong> Cool names are the middle ground — clean, memorable, no joke required, the kind you keep for a long time. &quot;KONG,&quot; &quot;EMBER,&quot; &quot;NOVA,&quot; &quot;ECLIPSE,&quot; &quot;SHADOW.&quot; They pair well with cosmetics and read well in caps, which is why a lot of regulars settle on one.</li>
        </ul>
        <p>
          Generate a batch and sort the results into these three buckets. The same run will usually give you a few of each, and seeing them side by side makes it obvious which vibe matches how you actually play.
        </p>

        <h2>The Profanity Filter and Auto-Changed Names</h2>
        <p>
          Gorilla Tag runs a profanity filter on names. You cannot save anything containing blocked words, and the filter is aggressive — it catches not just obvious slurs and swears but also letter-swaps and number-substitutions that try to sneak past it. More than that, if you set an offensive name, the game can auto-change it to a random default monkey name. If you have ever spawned in as something like &quot;Pumpkin&quot; or a random word you never chose, the filter likely rewrote a name it did not like.
        </p>
        <p>
          This is the single most common reason a name &quot;does not work&quot; in Gorilla Tag. The generator only suggests clean, family-friendly ideas, so you will not run into the filter using its output. Still, if you tweak a suggestion yourself, keep it clean — the lobby skews young, and the filter is there precisely because of that. The safest approach is to stay within the monkey, movement, and gamer-tag themes, all of which pass the filter without trouble.
        </p>

        <h2>How to Change Your Name in Gorilla Tag</h2>
        <p>
          You do not change your name from a phone app or a website — you do it inside VR. In the city/hub area there is an in-game computer with a keyboard. Walk up to it, look at the name field, and use the virtual keyboard to type your new name. Press enter to save. Your gorilla above-head name and your leaderboard entry update immediately.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Go to the city/stump hub where the in-game computer is located.</li>
          <li>Approach the computer and select the name field.</li>
          <li>Type your new name on the virtual keyboard (remember: 12 characters max, it will show in caps).</li>
          <li>Press enter to confirm. If the name is blocked, the filter rejects it or swaps in a random default — pick another from your list.</li>
          <li>Step back and check your name above your monkey to confirm it saved the way you wanted.</li>
        </ol>
        <p>
          Because you are typing with a VR keyboard, shorter names are genuinely easier to enter without mistakes. That is one more reason the generator favors tight, punchy names that fit the 12-character box on the first try.
        </p>

        <h2>Names, Cosmetics, and Your Monkey&apos;s Look</h2>
        <p>
          Gorilla Tag leans heavily on cosmetics — hats, faces, badges, holdables, and color packs you equip in the shop. Your name and your cosmetics together form your identity in the lobby, so it helps to pick a name that matches your look. A spooky cosmetic loadout pairs with &quot;SHADOW&quot; or &quot;VOIDAPE&quot;; a goofy hat fits &quot;OOFYMONKE&quot;; a clean competitive look suits &quot;APEX&quot; or &quot;SWIFT.&quot;
        </p>
        <p>
          Regulars often theme their whole presentation: a fire-colored monkey named &quot;EMBER,&quot; an icy one named &quot;FROST.&quot; When you generate a batch, glance at the cosmetics you actually run and keep the names that reinforce that vibe. A matching name-and-cosmetic combo is more recognizable than either piece alone, which matters in a game where you see the same players across lobbies.
        </p>

        <h2>How to Use This Gorilla Tag Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of monkey-themed, cap-friendly ideas.</li>
          <li>Skim for names under 12 characters that fit your style — funny, sweaty, or cool.</li>
          <li>Copy the list, then walk up to the in-game computer in the hub and type your pick on the VR keyboard.</li>
          <li>Run again for more options — no account, no download, no limit.</li>
        </ol>
        <p>
          Everything runs in your browser, so your shortlist of monkey names stays on your device. Nothing is sent to a server and nothing is stored. Generate as many batches as you want until something clicks, then take it into VR and save it.
        </p>

        <h2>Tips for Picking a Name That Sticks</h2>
        <p>
          Say it out loud. Voice chat is huge in Gorilla Tag, and people will call you by your name mid-chase — a name that is easy to say (&quot;KONG,&quot; &quot;BANANA,&quot; &quot;OOF&quot;) gets used and remembered, while a tangle of letters and numbers gets ignored. Picture it in caps above a swinging monkey, because that is exactly how it will appear, not in the lowercase you typed it in.
        </p>
        <p>
          Think about how long you want it to last. Funny names are great for a laugh but can get old; a clean cool name survives months of play and pairs with changing cosmetics. If you grind movement, a sweaty name sets expectations the moment you tag someone. And keep a couple of backups from your batch — the profanity filter or a name you simply mistype on the VR keyboard can send you back to the computer, and it is faster to grab the next idea than to brainstorm from scratch.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates monkey-themed, 12-character-friendly name ideas in funny, sweaty, and cool styles for Gorilla Tag and similar VR games.</li>
          <li>It does not change your name for you — you must type your pick into the in-game computer in VR.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not guarantee a name passes the in-game profanity filter if you edit it; keep edits clean and family-friendly.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Gorilla Tag is one of the most-played VR games, with a young, playful, meme-loving community where your monkey name is your whole on-screen identity. The constraints are real and specific — 12 characters, forced uppercase, and a strict profanity filter that will rename you if you push it — so a good name is one that respects all three while still sounding like you. Generate a batch, sort it into funny, sweaty, and cool, match it to your cosmetics, and take your favorite to the in-game computer. A few minutes of generating saves you from settling on a name you outgrow by next session.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Gorilla Tag name generator?', answer: 'It is a browser tool that creates monkey- and ape-themed names built specifically for Gorilla Tag\'s naming box. Every suggestion is designed to fit the game\'s 12-character limit and to read cleanly once the game forces it into all caps. It mixes ape vocabulary and community in-jokes — monke, banana, Kong, silverback, swing, OOF — so the ideas sound like they belong above a swinging gorilla rather than like a generic gamer tag. It runs locally with no sign-up and gives you 1–24 names per run.' },
  { category: 'Usage', question: 'How do I use the Gorilla Tag name generator?', answer: 'Pick how many names you want (1–24) and click Generate to get a fresh batch of monkey-themed, cap-friendly ideas. Skim for names under 12 characters that match your style, then use the Copy button to save your shortlist. To actually set the name you copied, walk up to the in-game computer in the city/hub, select the name field, and type your pick on the VR keyboard. Run again as many times as you like for more options.' },
  { category: 'Naming', question: 'Why do names have to be 12 characters or shorter?', answer: 'Gorilla Tag caps the name field at 12 characters and clips anything longer. "SUPERSWINGER" just fits at 12, but "SUPERSWINGERZ" gets cut off. Spaces, numbers, and symbols all count toward the 12 as well, so "BIG MONKE" is nine characters including the space. This generator keeps every suggestion inside the 12-character budget so what you see is what your lobby sees, with no truncation surprise when you type it in.' },
  { category: 'Naming', question: 'Why do all Gorilla Tag names show up in capital letters?', answer: 'The game automatically forces every name to uppercase. You can type "BananaKing" in the box, but it displays as "BANANAKING" above your monkey and on the leaderboard. That means lowercase tricks — slim "iliii" looks or cute camelCase — disappear entirely, since everything becomes blocky capitals. Numbers and basic symbols survive, which is why names like "OOFMONKE7" and "ZZZ_APE" are common. The generator assumes caps, so pick names that look strong shouted in uppercase.' },
  { category: 'Naming', question: 'What makes a name feel like a real Gorilla Tag name?', answer: 'Lean into the monkey. Because everyone in the lobby is literally a gorilla, ape-themed words land as a wink rather than a cliche — "MONKEMAN," "BANANABOY," "KONG_JR," "TREESWINGR" all read instantly as Gorilla Tag names. Blending in the game\'s movement — climbing, swinging, tagging — works too, so "SWINGZILLA" or "TAGMONKE" tells people what you are and what you do. That theme-plus-movement mix is exactly what the generator pulls from.' },
  { category: 'Naming', question: 'What is the difference between funny, sweaty, and cool names?', answer: 'Funny names lean into the young, meme-driven lobby — "OOFYDOOFY," "STINKMONKE," "BANANABRO" — and get reactions in voice chat. Sweaty names signal a tryhard who grinds movement: short, aggressive, often with numbers or Zs, like "APEX," "ZENMONKE," "SWIFT7," "VOIDAPE." Cool names are the clean middle ground you keep for months — "KONG," "EMBER," "NOVA," "ECLIPSE." Generate a batch and sort the results into these three buckets to see which vibe fits how you actually play.' },
  { category: 'Naming', question: 'What does "sweaty" mean for a Gorilla Tag name?', answer: '"Sweaty" is community slang for a tryhard who is very good at movement — fast climbing, sharp tagging, winning chases. A sweaty name warns people to expect that the moment you tag someone. These names are short and aggressive, often with numbers or repeated Zs: "APEX," "NOSCOPE9," "SWIFT7," "VOIDAPE." If you grind movement and want a name that sets expectations, sort your batch for the punchiest, most competitive-looking options.' },
  { category: 'Troubleshooting', question: 'Why did the game change my name to something random?', answer: 'Gorilla Tag runs an aggressive profanity filter, and if you set a name it flags as offensive, it can auto-swap it for a random default like "Pumpkin." The filter catches not just obvious words but letter-swaps and number-substitutions that try to sneak past it. This is the most common reason a name "does not work." The generator only suggests clean, family-friendly ideas, so its output passes the filter — just keep any edits you make clean too.' },
  { category: 'Usage', question: 'How do I actually change my name in Gorilla Tag?', answer: 'You do it inside VR, not from a phone app or website. Go to the city/stump hub where the in-game computer is, approach it, and select the name field. Type your new name on the virtual keyboard, remembering the 12-character cap and that it will show in caps, then press enter to confirm. Step back and check the name above your monkey to make sure it saved. If the filter rejected it, pick another from your list and try again.' },
  { category: 'General', question: 'Is the Gorilla Tag name generator free?', answer: 'Yes, it is completely free to use in your browser with no account, no payment, and no download. You can generate monkey-name ideas as often as you like, and there is no daily or total limit on runs. Because everything happens locally on your device, there is nothing to sign up for — open the page, set a count, and start generating cap-friendly names right away.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I generate names?', answer: 'No. When you set a count and click generate, the names are created locally on your device inside your browser. Your settings and the generated list are never uploaded to our servers, and nothing is logged or stored. You can even run it in a private or incognito window. Close the tab and the list is gone unless you copied it, so your monkey-name shortlist stays entirely yours.' },
  { category: 'Compatibility', question: 'Does the generator work on my phone?', answer: 'Yes. The generator runs in any modern web browser and is responsive on desktop, tablet, and phone — no app to install. Many players brainstorm on their phone, copy a shortlist into notes, then put on the headset and type the winner at the in-game computer. Just remember the name itself still has to be entered inside VR; the phone is only for building your list of candidates.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool, just run it again — each run produces a fresh random batch, and there is no daily or total cap. Paste several runs into one note and remove any duplicates. The 24-name limit keeps each list short enough to skim quickly while still giving you plenty of funny, sweaty, and cool options to sort through.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button puts the whole generated list on your clipboard as plain text, one name per line, so it pastes into any notes app or document. Copying is the intended way to save a shortlist before you head into VR — build your list on the page, then reference it while typing at the in-game computer so you can grab a backup instantly if the filter rejects your first pick.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No. The tool works with no sign-up, login, email, or registration of any kind. It runs entirely in your browser — open the page, choose how many names you want, click generate, and copy the results. There is nothing to create or verify. Note that changing your actual in-game name still requires the in-game computer inside Gorilla Tag; the generator only supplies the ideas.' },
  { category: 'Best practices', question: 'How do I pick a name that pairs with my cosmetics?', answer: 'Your name and your cosmetics together form your identity in the lobby, so a matching combo is more recognizable than either piece alone. A spooky loadout pairs with "SHADOW" or "VOIDAPE"; a goofy hat suits "OOFYMONKE"; a clean competitive look fits "APEX" or "SWIFT." Regulars often theme the whole presentation — a fire-colored monkey named "EMBER," an icy one named "FROST." Glance at the cosmetics you actually run and keep the names that reinforce that vibe.' },
  { category: 'Best practices', question: 'How do I choose a name that will last?', answer: 'Think about how long you want it to survive. Funny names are great for a laugh but can get old fast; a clean, cool name like "KONG" or "NOVA" holds up over months and pairs with changing cosmetics. If you grind movement, a sweaty name keeps setting expectations every session. Whatever you pick, say it out loud first — voice chat is huge, and an easy-to-say name gets used and remembered while a tangle of letters and numbers gets ignored.' },
  { category: 'Naming', question: 'Should I leave room for a number or clan tag?', answer: 'If you like adding a number or a short tag later, keep the base name under about eight or nine characters so there is space inside the 12-character cap. "MONKE" leaves plenty of room for a "7" or a "_JR," while a base that already fills the box leaves nothing. Planning for that buffer up front means you can tweak your identity later without blowing past the limit or clipping the name.' },
  { category: 'Best practices', question: 'Why should I keep a couple of backup names?', answer: 'Two things can send you back to the in-game computer: the profanity filter rejecting a name, or simply mistyping on the VR keyboard. Having two or three backups from your batch means you can grab the next idea instantly instead of brainstorming from scratch mid-session. Shorter names also help here — they are genuinely easier to enter without mistakes on a virtual keyboard, which is another reason the generator favors tight, punchy picks.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated ape vocabulary, movement words, and community memes, then randomly combines them in your browser so each run is different. Every candidate is filtered to stay within 12 characters and is meant to read well in all caps. Nothing is sent to a server, and the output is for inspiration only — it is not an official list and does not check the game for anything. The word lists are tuned to sound like real Gorilla Tag names.' },
  { category: 'Naming', question: 'Are the generated names guaranteed to be unique in my lobby?', answer: 'No — Gorilla Tag does not require globally unique names, so two monkeys in the same session can share one. The generator only supplies ideas; it does not check what anyone else is using. That is actually part of the fun, since names are more about vibe than uniqueness here. If you want to stand out, pick something distinctive and pair it with a matching cosmetic look so people recognize you across lobbies.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, generating and copying names both work entirely offline in your browser with no network connection needed. You only need a connection to open the page the first time. This pairs well with the VR workflow: build your name list, then put on the headset and enter your pick at the in-game computer, which is a separate step inside Gorilla Tag itself.' },
  { category: 'Use cases', question: 'Can I use these names in other VR games?', answer: 'Yes. Many of the monkey and movement themes work well in other casual VR titles, and the general funny/sweaty/cool sorting applies broadly. Just keep in mind that the 12-character cap and forced-uppercase display are Gorilla Tag rules specifically — another game may allow longer names, lowercase letters, or different symbols. Use the ideas as inspiration and adjust length or casing to fit whatever naming box that game gives you.' },
  { category: 'General', question: 'Does this tool change my name for me?', answer: 'No. The generator only produces and displays name ideas — it cannot reach into Gorilla Tag and set anything. Changing your in-game name is always a manual step you do inside VR at the hub computer. It also does not store your list or guarantee an edited name passes the profanity filter. Think of it as a fast idea machine: generate, sort into funny, sweaty, and cool, copy your favorite, and take it into the headset to save.' },
];

export default async function GorillaTagNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="gorilla-tag" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Gorilla Tag name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

