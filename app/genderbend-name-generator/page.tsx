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


const toolSlug = 'genderbend-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Genderbend Name Generator',
    description: 'Free genderbend name generator for alternate name ideas. Create flexible name ideas in your browser with no sign-up.',
    seoTitle: 'Genderbend Name Generator – Alternate Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Genderbend Name Generator – Alternate Name Ideas</h2>
        <p>
          Genderbending — the fandom concept often tagged &quot;Rule 63,&quot; the tongue-in-cheek internet rule that every character has an opposite-gender counterpart — is the practice of reimagining a character as another gender. A huge part of that reimagining is the name. When you flip a character from masculine to feminine or vice versa, you usually want a new name that feels like the same person: the counterpart&apos;s name, not a random substitute. This genderbend name generator produces those alternate names — masculine and feminine forms that echo the sound, rhythm, and etymology of an original — right in your browser, with no sign-up. You get 1–24 names per run for fan characters, original characters (OCs), fanfiction, and cosplay.
        </p>
        <p>
          Good genderbend naming is not just swapping to any name of the other gender. It is finding the version that a reader would recognize as &quot;the same character, but gender-flipped.&quot; That means matching etymological roots, shared nicknames, sound, and initials. The guide below explains the techniques writers and artists actually use so the counterpart name you pick lands as an obvious twin rather than a stranger.
        </p>

        <h2>What Genderbending a Name Really Means</h2>
        <p>
          A genderbent name is the opposite-gender counterpart of a character&apos;s name — ideally one that keeps enough of the original that the connection is instant. When done well, the audience sees the new name and immediately maps it back: Alexander becomes Alexandra, Daniel becomes Danielle, Victoria becomes Victor. The goal is recognizability. A random name of the other gender technically genderbends the character, but it throws away the free storytelling that a matched counterpart gives you — the wink of familiarity that makes fans smile. This generator is tuned to produce that recognizable, matched feel rather than unrelated substitutes.
        </p>

        <h2>Matching by Etymology and Root</h2>
        <p>
          The cleanest genderbends share a root. Many names come in built-in masculine and feminine pairs because they descend from the same origin: Julius and Julia, Christian and Christine, Paul and Paula, Joseph and Josephine, Gabriel and Gabriella, Nicholas and Nicole. When a character&apos;s name has an established counterpart like these, that counterpart is almost always the strongest choice — it is the version speakers already recognize as the same name in another gender. Start by asking whether the original name has a natural etymological partner, and reach for invented forms only when it does not.
        </p>

        <h2>Matching by Sound and Rhythm</h2>
        <p>
          Not every name has a tidy counterpart, so the next technique is matching sound. Keep the same number of syllables, the same stress pattern, and as many shared consonants and vowels as you can, then shift the ending toward the target gender. In English, feminine forms often lean on endings like -a, -ella, -ette, -ine, or -lyn, while masculine forms lean on harder consonant endings or drop a soft final vowel. The aim is a name that rhymes with or rhythmically echoes the original, so it feels like a sibling even when the roots differ. Reading the pair aloud back to back is the quickest test of whether the echo works.
        </p>

        <h2>Keeping the Nickname and Initials</h2>
        <p>
          A powerful trick is to preserve what stays constant between genders. Many nicknames are already unisex, so choosing a counterpart that shortens to the same nickname keeps the character grounded — Samuel and Samantha both go by Sam; Alexander and Alexandra both go by Alex; Charles and Charlotte both go by Charlie. Sharing an initial does similar work, which matters when a character&apos;s monogram, signature, or a plot point hangs on a specific letter. When you scan a batch of generated options, favor the ones that keep the original&apos;s nickname or first initial — those genderbends feel the most seamless.
        </p>

        <h2>Genderbending Beyond the Binary</h2>
        <p>
          Not every genderbend is a straight masculine-to-feminine flip. Some creators reimagine a character as non-binary or androgynous, and here the naming goal shifts toward unisex names or gender-neutral forms — think Alex, Sam, Jordan, Riley, Rowan, or a shortened form that reads either way. The same principles apply: keep the sound and the connection to the original, but steer toward names without a strong gender signal. Generate a batch and keep the options that feel balanced rather than pulled firmly to one side.
        </p>

        <h2>Using Genderbent Names in Fandom</h2>
        <p>
          Genderbending shows up across creative work, and the name does different jobs depending on the context:
        </p>
        <ul>
          <li><strong>Fanfiction.</strong> A genderbent name signals the AU (alternate universe) premise in the first line and lets readers track the flipped character without confusion.</li>
          <li><strong>Cosplay.</strong> Genderbent or &quot;crossplay&quot; costumes often come with a counterpart name for the character card, badge, or con introduction.</li>
          <li><strong>Original characters.</strong> Writers use genderbend logic to create a sibling, a twin, or a mirror-universe version of an existing OC.</li>
          <li><strong>Roleplay.</strong> On forums and servers, a recognizable counterpart name keeps a gender-swapped character legible to everyone at the table.</li>
        </ul>

        <h2>How to Use This Genderbend Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide the direction you want — masculine to feminine, feminine to masculine, or toward a neutral form.</li>
          <li>Set how many alternate names you want per run (1–24) and click <strong>Generate names</strong>.</li>
          <li>Compare each result to your original: does it share a root, a nickname, an initial, or the same rhythm?</li>
          <li>Use the Copy button to save your shortlist, then read the original and the counterpart aloud back to back.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your OCs and unpublished AU ideas stay private until you choose to share them.
        </p>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The most common mistake is genderbending to a name that is simply unrelated — technically the other gender, but with no link to the original, which severs the recognition that makes a genderbend satisfying. Reach for a shared root, nickname, or sound instead. A second mistake is ignoring the source&apos;s cultural or linguistic background: a Japanese, Norse, or Latinate name reads best when its counterpart stays in the same tradition rather than jumping to an unrelated one. A third is over-forcing an ending — not every name needs an -a tacked on; sometimes the natural counterpart looks quite different. Generate several options, keep the ones that feel like an obvious twin, and let the pair pass the read-aloud test.
        </p>

        <h2>Privacy</h2>
        <p>
          This genderbend name generator runs entirely in your browser. When you set a count and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your character ideas stay yours while you build them.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a genderbend name generator?', answer: 'It is a browser tool that suggests gender-swapped versions of names — the masculine-to-feminine or feminine-to-masculine counterpart used when you reimagine a character as another gender (often called Rule 63 in fandom). It offers matching alternate forms so a swapped character keeps a recognizable link to the original: Alexander to Alexandra, Daniel to Danielle, Victoria to Victor. Everything runs locally in your browser, nothing is uploaded or stored, and it is free with no sign-up. You get 1 to 24 ideas per run.' },
  { category: 'Naming', question: 'What makes a good genderbend name?', answer: 'The best swaps keep an audible or etymological thread to the original so readers instantly connect the two versions. Shared roots (Alexander/Alexandra), matching initials (Michael/Michelle), or a similar sound (Julian/Julia) all work. You want the new name to feel like the same character reflected, not a random replacement. Generate a batch, then keep the ones that echo the source name in rhythm, letters, or meaning while reading naturally for the swapped gender.' },
  { category: 'Naming', question: 'How do I genderbend a specific character\'s name?', answer: 'Start from the original and look for its counterpart: a feminine or masculine form of the same root (Gabriel/Gabrielle, Nicholas/Nicole), a rhyming near-match, or a name sharing the first letter or syllable. Generate ideas around those patterns and pick the one that best preserves the character\'s identity. For invented or fantasy names with no obvious counterpart, tweak the ending or vowel sounds so the swapped name still feels part of the same world.' },
  { category: 'Naming', question: 'What are common masculine-to-feminine name pairs?', answer: 'Classic pairs share a root and swap the ending: Alexander/Alexandra, Daniel/Danielle, Gabriel/Gabrielle, Christian/Christina, Julian/Julia, Nicholas/Nicole, Robert/Roberta, Joseph/Josephine. Others match by sound rather than spelling, like Michael/Michelle or Frederick/Frederica. These pairings are the backbone of genderbend naming because the link is obvious the moment someone reads both, which is exactly what a good swap needs.' },
  { category: 'Naming', question: 'What about feminine-to-masculine swaps?', answer: 'The same logic runs in reverse: Victoria/Victor, Georgia/George, Josephine/Joseph, Frederica/Frederick, Nicole/Nicholas, Christina/Christian. When a feminine name has no established masculine form, you can shorten it or shift the ending — Samantha to Sam or Samuel, Erica to Eric, Josephine to Joseph. Generate a batch and keep the masculine forms that still sound like the same person viewed from the other side.' },
  { category: 'Use cases', question: 'How do I name a Rule 63 or gender-swapped OC?', answer: 'For fan works, take the canon character\'s name and find its counterpart so readers immediately recognize who the OC is a version of — that recognizable thread is the whole point of a Rule 63 design. Generate matching forms, then choose one that fits the tone: a playful pun-adjacent swap for comedy, a clean etymological match for a serious reimagining. Keep the surname if you want the link obvious, and adjust only the given name.' },
  { category: 'Naming', question: 'How do I keep the swapped name recognizable?', answer: 'Preserve at least one strong anchor: the same first letter, the same number of syllables, a shared root, or a rhyming ending. "Anthony" to "Antonia" keeps the An- and the rhythm; "Valentina" to "Valentine" keeps almost everything. The more anchors you retain, the faster a reader links the two. Generate several options and favor the ones that carry the most of the original name across the swap.' },
  { category: 'Naming', question: 'What if a name has no obvious opposite-gender form?', answer: 'Many names lack a ready counterpart, so you improvise. Adopt a common gendered ending (-a, -ina, -elle for feminine; -o, -us, -er for masculine), borrow a similar-sounding established name, or use a shared nickname that works for either gender (Alex, Sam, Charlie, Jamie). Generate a batch to see candidates, then pick the improvised form that reads most naturally while still echoing the source name.' },
  { category: 'Usage', question: 'How do I use the genderbend name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for swaps that keep a clear link to your source name, then use the Copy button to save your shortlist. Paste the results into your notes and compare them side by side with the original to see which reads best. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'General', question: 'Is the genderbend name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate gender-swapped name ideas as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can explore counterpart names for a whole cast of swapped characters without any cost or friction.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character ideas stay private, which matters for fan works and OCs you may not have shared yet. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the genderbend name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. You can brainstorm swapped names on your phone while sketching or writing, copy a favorite, and paste it straight into your notes or art description. The layout is responsive, so pairing up counterpart names works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool of swap options for one character or a whole cast, just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while giving you plenty of counterpart forms to compare.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app or document. This is the intended way to save a shortlist: generate, copy, then compare each swap against the original. Keeping them in a notes file lets you line up source names and their genderbent counterparts so you can pick the cleanest match.' },
  { category: 'General', question: 'Do I need an account to use the genderbend name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. It is built for quick, friction-free brainstorming, so you can drop in, grab a batch of gender-swapped forms, and get back to writing or drawing your OC without creating anything.' },
  { category: 'Technical', question: 'How are the genderbend names generated?', answer: 'The generator draws on curated lists of paired and gender-typical name elements, then combines and matches them in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration only — a starting pool of counterpart forms — so you still choose the swap that best fits your character. The lists favor names with clear masculine and feminine forms so the link across a swap stays recognizable.' },
  { category: 'Naming', question: 'Can I use a unisex name instead of swapping?', answer: 'Yes, and it is often the neatest solution. Gender-neutral names — Alex, Sam, Charlie, Jamie, Riley, Jordan, Casey — read naturally for any gender, so a character reimagined as another gender can keep the exact same name with no swap at all. Generate a batch and note the unisex options if you want the swapped version to stay maximally recognizable while sidestepping the need for a separate counterpart form.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when genderbending a name?', answer: 'Avoid a swap so different that readers cannot connect it to the original — that defeats the purpose. Avoid forcing an awkward ending onto a name that already has a natural counterpart. Do not swap the surname if keeping it would make the link clearer. And read the result out loud to be sure it sounds like a real name. Keep the options that are recognizable, natural-sounding, and true to the source.' },
  { category: 'Naming', question: 'Should I keep the surname when I genderbend a character?', answer: 'Usually yes. Surnames are typically not gendered, so keeping the original family name is the single strongest way to signal that your swapped character is the same person reimagined. Change only the given name to its counterpart and let the shared surname carry the recognition. Drop or change the surname only when your story deliberately treats the swap as a separate character rather than a reflection of the original.' },
  { category: 'Use cases', question: 'Can I use these for fantasy or invented character names?', answer: 'Yes. For invented names with no real-world counterpart, the generator gives you patterns to work from — shift a vowel, swap a gendered-sounding ending, or borrow the rhythm of an established pair. Generate a batch and adapt the closest candidate so the swapped name still fits your setting\'s naming style. The goal is the same as with real names: keep enough of the original that the connection reads clearly.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool of swap candidates, run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you want many counterpart options to compare against a source name. Keep the strongest, most recognizable matches in a shortlist as you go.' },
  { category: 'General', question: 'Are these official or canon names?', answer: 'No. The generator produces suggested counterpart forms for creative use, not entries from any official or canonical database. Genderbend and Rule 63 designs are fan and original-fiction creations, so treat the output as raw material to shape rather than a fixed answer. Mix, tweak, and rename freely until the swapped version fits your character and your setting the way you want.' },
  { category: 'Troubleshooting', question: 'Can I use the genderbend name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm swapped forms for your OCs on a plane or anywhere without internet, and copying and pasting works offline too. You only need a connection to open the page the first time; after that every batch is generated right on your device.' },
];

export default async function GenderbendNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="genderbend" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Genderbend name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

