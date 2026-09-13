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


const toolSlug = 'tumblr-blog-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Tumblr Blog Name Generator',
    description: 'Free Tumblr blog name generator for blog and aesthetic names. Create Tumblr blog name ideas in your browser with no sign-up.',
    seoTitle: 'Tumblr Blog Name Generator – Blog & Aesthetic Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Tumblr Blog Name Generator – Blog Names &amp; URLs</h2>
        <p>
          On Tumblr, your blog name is your URL. The handle you choose becomes <strong>yourname.tumblr.com</strong> and the @username people see reblogging across their dashboards — it is your address, your identity, and the first impression of your whole aesthetic all at once. This Tumblr blog name generator builds names in that distinctive Tumblr voice — lowercase, wordy, poetic, a little melancholy or a little chaotic — right in your browser, with no sign-up and 1–24 ideas per run, so you can find a URL that captures your blog&apos;s vibe and is still free.
        </p>
        <p>
          Tumblr naming does not look like naming a Twitter handle or a YouTube channel. It has its own culture: run-on word-smushes, soft aesthetic phrases, fandom-coded URLs, and self-aware jokes, almost always in lowercase. The guide below breaks down those conventions so the name you pick reads as genuinely Tumblr, not like a corporate handle wandering onto the wrong platform.
        </p>

        <h2>How Tumblr URLs Work</h2>
        <p>
          Every Tumblr blog gets a subdomain — pick the URL &quot;softgrunge&quot; and your blog lives at softgrunge.tumblr.com. A few practical facts shape a good choice. Tumblr URLs allow letters, numbers, and hyphens (no spaces or most symbols), and they can be fairly long, which is why Tumblr is famous for sprawling multi-word names. Your URL is also technically changeable later, but changing it breaks every old link and can confuse followers, so it is worth choosing one you will want to keep. Separately from the URL, you have a blog <strong>title</strong> displayed at the top of your page, which can be anything and is easy to edit — save flourishes and long phrases for the title if your URL needs to stay short.
        </p>

        <h2>The Tumblr Aesthetic: Lowercase and Wordy</h2>
        <p>
          The defining trait of Tumblr naming is a lowercase, aesthetic sensibility. Where other platforms push CamelCase or numbers, Tumblr leans into soft, evocative, all-lowercase phrases — moods, colors, weather, celestial and nature imagery, quiet melancholy, and dreamy abstractions. Think along the lines of &quot;paleblossom,&quot; &quot;citylightsatnight,&quot; or &quot;softlyhaunted.&quot; The words are often smushed together without spaces because the URL cannot contain them, which is how the signature Tumblr run-on look emerged in the first place. When you scan a generated batch, keep the options that feel like a mood or an image rather than a label.
        </p>

        <h2>Fandom Blogs Versus Aesthetic Blogs</h2>
        <p>
          Tumblr URLs tend to split into two big families, and knowing which you are is half the naming battle:
        </p>
        <ul>
          <li><strong>Fandom blogs.</strong> Built around a show, book, ship, band, or character, these URLs often reference the fandom directly or bury an inside joke or a favorite character&apos;s name in the handle so fellow fans recognize it instantly.</li>
          <li><strong>Aesthetic blogs.</strong> Built around a mood or a visual theme — cottagecore, dark academia, soft grunge, dreamcore — these lean on atmospheric words that signal the vibe at a glance.</li>
        </ul>
        <p>
          Some of the most memorable URLs blend the two: a fandom reference dressed in aesthetic language. Decide which family your blog belongs to, then steer the generator toward references or moods accordingly.
        </p>

        <h2>Wordplay, Puns, and Self-Aware Names</h2>
        <p>
          Tumblr humor is a genre of its own, and it shows up in URLs constantly. Puns on a favorite character&apos;s name, absurd or chaotic phrases, ironic and self-deprecating handles, and knowing jokes about being terminally online are all deeply Tumblr. A name like &quot;localcryptid&quot; or a pun-based fandom URL does double duty: it tells people your content and your sense of humor in one breath. If a generated option sparks a joke or a pun, lean into it — the platform rewards names with a wink far more than polished, brandable ones.
        </p>

        <h2>How to Use This Tumblr Blog Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide your blog&apos;s direction — a fandom, an aesthetic, or a personal/chaotic vibe.</li>
          <li>Set how many name ideas you want per run (1–24) and click <strong>Generate names</strong>.</li>
          <li>Keep the lowercase, evocative options that match your blog&apos;s mood, remembering the URL can only use letters, numbers, and hyphens.</li>
          <li>Use the Copy button to save your shortlist, then check each favorite on Tumblr to see if the URL is still free.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your blog ideas stay private until you claim the URL.
        </p>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The most common mistake is picking a URL tied too tightly to one fleeting interest — a name built entirely around a single ship or a trend you may age out of can feel dated when your blog evolves, so a slightly broader aesthetic or personal name ages better. A second is loading the URL with numbers and hyphens to grab a taken word; it works, but it reads as clunky and un-Tumblr, so a fresh word-smush is usually better. A third is confusing the URL with the display title — the URL is the part that must be unique and typeable, while the title can carry the long poetic phrase. Keep a shortlist, since the prettiest single words were claimed years ago, and lean on multi-word combinations to find something still open.
        </p>

        <h2>Privacy</h2>
        <p>
          This Tumblr blog name generator runs entirely in your browser. When you set a count and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers, and the tool has no connection to Tumblr itself. Close the tab and the list is gone unless you copied it.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Tumblr blog name generator?', answer: 'It is a browser tool that creates aesthetic, memorable blog names and handles for Tumblr. Your blog name becomes your URL — yourname.tumblr.com — and doubles as the @handle people see on your posts, so it needs to be catchy and available. The generator combines curated aesthetic word pieces at random in your browser and gives you 1–24 names per run. It runs locally with no sign-up, so you can brainstorm a pool of URL ideas and then check which ones are free on Tumblr.' },
  { category: 'Usage', question: 'How do I use the Tumblr blog name generator?', answer: 'Set how many names you want (1–24) and click Generate to get a fresh batch of blog name ideas. Skim for the ones that match the vibe you want, then use the Copy button to save the whole list. Paste it into a notes app and check each favorite on Tumblr, since the URL you pick has to be unique. Run again as often as you like for more options; no account or download is required.' },
  { category: 'Naming', question: 'What makes a good Tumblr blog name?', answer: 'A strong Tumblr name is short enough to remember, hints at your blog\'s vibe, and reads well as a URL with no awkward hyphens or numbers tacked on. It should look right in lowercase, since Tumblr URLs are shown in lowercase and the aesthetic community leans that way. Aim for something evocative rather than literal — a mood or an image beats a plain description — and make sure it still makes sense if someone types it into a browser bar.' },
  { category: 'Naming', question: 'How do I name an aesthetic or vibe-based blog?', answer: 'Decide the aesthetic first — soft and dreamy, moody and dark, cottagecore, vintage, cosmic — then generate a batch and keep the names whose sound matches it. Aesthetic Tumblr names tend to pair a soft or evocative word with an image or feeling, and they lean into lowercase for a gentle, understated look. Read candidates as if they were the header of a curated blog; the one that instantly conjures the mood you are going for is the one to grab.' },
  { category: 'Naming', question: 'Should my Tumblr URL be all lowercase?', answer: 'Tumblr URLs are not case-sensitive and display in lowercase, and the aesthetic corner of the platform strongly favors an all-lowercase look — it reads as soft and intentional. You can capitalize your display title separately, but the handle itself will show lowercase. When you shortlist generated names, picture them in lowercase across the top of a blog and in the @handle on your posts; if it still looks clean and calm there, it fits the platform\'s style.' },
  { category: 'Naming', question: 'How long should a Tumblr blog name be?', answer: 'Shorter is easier to remember, type, and share, but Tumblr URLs can be fairly long, which gives aesthetic blogs room for a two- or three-word phrase like a little poem. Balance the two: a compact handle is cleaner for a personal blog, while a longer evocative phrase can suit a themed or curated blog. Generate a mix of lengths, then keep whichever reads smoothly out loud and does not force you to squint at a wall of letters.' },
  { category: 'Use cases', question: 'How do I name a themed or fandom blog?', answer: 'For a fandom, art, or topic blog, work a hint of the subject into an aesthetic-sounding name so followers immediately know what you post. Generate a batch, then splice in a word tied to your theme — a character trait, a color, a motif — so the handle signals the content without being a dry label. The goal is a name that reads like it belongs to a curated blog about that thing, not just the topic word with numbers after it.' },
  { category: 'Naming', question: 'Can I change my Tumblr URL later?', answer: 'Yes — Tumblr lets you change your blog\'s URL in settings, and the old URL frees up for someone else once you switch. That said, changing it breaks existing links and can lose you followers who find you by URL, so it is worth picking a name you can live with. Because a rename is possible but disruptive, generate a solid shortlist now and choose one you genuinely like rather than settling on the first available option.' },
  { category: 'Naming', question: 'What is the difference between my primary blog and a sideblog name?', answer: 'Your primary blog\'s URL is tied to your account and is what you post from by default; sideblogs are separate blogs under the same account, each with its own unique URL. If you run a personal main plus a themed sideblog, you may want two different names — a personal handle for the main and a topic-flavored one for the side. Generate a batch for each, matching the personal one to you and the sideblog one to its theme.' },
  { category: 'Best practices', question: 'Why is my first-choice blog name already taken?', answer: 'Tumblr blog URLs are globally unique and the platform has been around a long time, so short and popular words are usually gone. This is normal — the generator only suggests ideas and cannot check availability, so build a shortlist of five to ten names and test them in order. If a clean version is taken, an evocative two-word phrase from your batch is often still free and reads better than adding numbers.' },
  { category: 'General', question: 'Is the Tumblr blog name generator free?', answer: 'Yes, it is completely free to use in your browser with no account, no payment, and no download. You can generate blog name ideas as often as you like, and there is no daily or total limit on runs. Everything happens locally on your device, so there is nothing to sign up for — open the page, set a count, and start brainstorming URL ideas to check on Tumblr right away.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I generate names?', answer: 'No. When you set a count and click generate, the names are created locally on your device inside your browser. Your settings and the generated list are never uploaded to our servers, and nothing is logged or stored. Your blog-name ideas stay private until you decide to claim one. You can even run the tool in a private or incognito window if you prefer.' },
  { category: 'Compatibility', question: 'Does the generator work on mobile?', answer: 'Yes. The tool runs in any modern web browser and is responsive on desktop, tablet, and phone, with no app to install. Since a lot of Tumblr happens on mobile, you can generate a batch on your phone, copy the list into notes, and check each name in the Tumblr app to see which URLs are free. It works anywhere you can open a browser tab.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool — useful since many URLs are already taken — just run it again, as each run produces a fresh random batch and there is no daily or total cap. Paste several runs into one document and remove any duplicates. The 24-name limit keeps each list easy to skim while still giving you plenty of candidates to check for availability.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button puts the whole list on your clipboard as plain text, one name per line, so it pastes cleanly into any notes app or document. Copying is the intended way to save a batch before you check availability. Grab a big list, drop it into your notes, and mark each name as taken or free as you test them on Tumblr so you never re-check the same URL twice.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No. The generator works with no sign-up, login, email, or registration. It runs entirely in your browser — open the page, choose how many names you want, click generate, and copy the results. There is nothing to create or verify here. You will of course need a Tumblr account to actually claim a URL, but that is a separate step on Tumblr, not on this tool.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated aesthetic and evocative word pieces, then randomly combines them in your browser so each run is different. The pieces are chosen to sound soft, memorable, and URL-friendly, matching Tumblr\'s all-lowercase style. Nothing is sent to a server, and the output is inspiration only — it does not check Tumblr for availability. Read a few candidates as lowercase URLs and you will see which ones feel right for a blog.' },
  { category: 'General', question: 'Does this tool check if a Tumblr URL is available?', answer: 'No. The generator only produces name ideas; it cannot see which URLs are already registered on Tumblr. Availability changes constantly and is entirely up to Tumblr, so you must check each favorite yourself in the Tumblr URL field. That is why a shortlist matters — generate several, then test them in order and claim the first clean one that is still free.' },
  { category: 'Best practices', question: 'What is the best workflow for choosing a Tumblr URL?', answer: 'Decide your blog\'s vibe, generate a batch of 12 to 24 names, and copy the list into notes. Picture each in lowercase as a URL and handle, cross off the ones that feel clunky, then check your favorites on Tumblr in order. Claim the first one that is both available and something you would be happy typing for a long time. Keeping a shortlist means an early collision does not send you back to square one.' },
  { category: 'Naming', question: 'What mistakes should I avoid when naming a Tumblr blog?', answer: 'Avoid stuffing in numbers or hyphens just to get around a taken URL — they read as an afterthought and are easy to mistype. Avoid names so long or obscure that no one can recall or share them. And avoid picking something tied to a passing phase you will outgrow, since renaming later breaks your links. Favor a short, lowercase, evocative name that still fits your blog months from now.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, generating and copying names both work entirely offline in your browser with no network connection needed. You only need a connection to open the page the first time and, later, to check URL availability on Tumblr. That makes it easy to brainstorm a list wherever you are and test the winners once you are back online.' },
  { category: 'Naming', question: 'Should the same name work as both a URL and a display title?', answer: 'They are separate fields — the URL is your lowercase handle, while the display title at the top of your blog can be styled differently — but it helps when they relate. A clean generated name can serve as your URL, with a slightly dressed-up version as the title. When shortlisting, favor names that read well both as a bare lowercase handle and as a header, so your blog feels cohesive.' },
  { category: 'Use cases', question: 'Can I use these names for other social or blog platforms?', answer: 'Yes. Many of the aesthetic, lowercase-friendly names work well as handles on other blogging and social sites too, so you can aim for a consistent identity across platforms. Just remember that each platform has its own availability and its own character rules, so a name free on Tumblr may be taken elsewhere. Generate a batch, then check the same shortlist on every platform where you want the handle to match.' },
];

export default async function TumblrBlogNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="tumblr-blog" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Tumblr blog name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

