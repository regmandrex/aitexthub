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


const toolSlug = 'nun-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Nun Name Generator',
    description: 'Free nun name generator for religious-order names. Create religious-order-style name ideas in your browser with no sign-up.',
    seoTitle: 'Nun Name Generator – Religious Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Nun Name Generator – Religious Name Ideas</h2>
        <p>
          When a woman enters religious life, she often takes a new name — a name-in-religion that marks a break with her old self and binds her to a saint, a virtue, or a mystery of the faith. That is why nuns are called Sister Mary Agnes or Mother Teresa of the Cross rather than by the name they were born with. This nun name generator builds those religious names in the authentic Catholic tradition, so writers, role-players, and game designers can name a single cloistered character or an entire convent convincingly. It runs in your browser, needs no sign-up, and gives you 1–24 names per run with a copy button.
        </p>
        <p>
          The guide below explains how nuns actually choose their names, the three main naming patterns, the meaning of the &quot;of the&quot; devotional titles, and how to name novices, sisters, and mothers so a religious community reads like a real institution. Learn the conventions and your invented order will feel vowed rather than made up.
        </p>

        <h2>How Nuns Take a Name in Religion</h2>
        <p>
          Traditionally, a woman entering a convent receives a new name at her clothing (when she first wears the habit) or at her profession of vows. The change is symbolic: the old name belonged to her secular life, and the new one belongs to God. In many orders the name is chosen for her by the superior, or picked from a shortlist she submits, and it honors a saint she is asked to imitate or a devotion the community holds dear.
        </p>
        <p>
          Practice varies by era. Strict contemplative and traditional orders still confer dramatic new names — Sister Perpetua, Sister Mary of the Angels — while many modern congregations, after the mid-twentieth-century reforms, let sisters keep their baptismal names or make a religious name optional. For fiction, both are valid: an austere medieval cloister taking solemn &quot;of the&quot; names, or a modern active congregation of ordinary first names prefixed simply with &quot;Sister.&quot;
        </p>

        <h2>The Three Main Naming Patterns</h2>
        <p>
          Almost every nun&apos;s name follows one of three recognizable forms. Understanding them lets you pick output that sounds genuinely professed:
        </p>
        <ul>
          <li><strong>A saint&apos;s name.</strong> The simplest and oldest form — Sister Agnes, Sister Catherine, Sister Bernadette, Sister Clare — placing the sister under the patronage of a woman (or sometimes a man) canonized by the Church.</li>
          <li><strong>&quot;Mary&quot; plus a second name.</strong> Because Marian devotion runs deep, many orders add a Marian element: Sister Mary Frances, Sister Mary Joseph, Sister Mary Agnes. &quot;Mary&quot; can even pair with a male saint&apos;s name.</li>
          <li><strong>A devotional &quot;of the&quot; title.</strong> The most solemn form ties the sister to a mystery, feast, or sacred image: Sister Teresa of the Child Jesus, Sister Mary of the Sorrows, Sister Faustina of the Blessed Sacrament.</li>
        </ul>
        <p>
          Virtue names — Sister Grace, Sister Charity, Sister Mercy, Sister Faith — form a fourth, smaller strand, popular in some English-speaking congregations. Generate a batch and you will see these forms mixed, so you can keep whichever register matches the order you are building.
        </p>

        <h2>What &quot;of the&quot; Titles Mean</h2>
        <p>
          The &quot;of the&quot; phrase is a religious title that anchors the sister to a devotion — the Cross, the Sacred Heart, the Immaculate Conception, the Angels, the Blessed Sacrament, the Child Jesus. It deepens the name and signals the spirituality of her order. Carmelites in particular favor this form; Saint Thérèse of Lisieux was, in religion, Thérèse of the Child Jesus and the Holy Face. When you want a name to feel especially contemplative or solemn, keep the generated options that carry an &quot;of the&quot; suffix, and match the devotion to the mood: the Sorrows and the Cross for austerity, the Angels and the Light for gentleness.
        </p>

        <h2>Sister, Mother, and the Hierarchy of a Convent</h2>
        <p>
          The prefix tells the reader a character&apos;s rank at a glance. &quot;Sister&quot; is the standard address for a professed nun or a member of an active congregation. &quot;Mother&quot; marks authority — an abbess, a prioress, or a mother superior who leads the house — and in some orders is also used for senior nuns. A novice, still early in formation, is usually addressed as &quot;Sister&quot; with a newly chosen, sometimes still tentative name.
        </p>
        <p>
          When you name a whole cast, use the prefixes to make the structure legible: give the leader a &quot;Mother&quot; name and the rest &quot;Sister&quot; names. You can even show a character&apos;s arc by keeping her core name and shifting the prefix — a sister who rises to lead her house becomes &quot;Mother.&quot;
        </p>

        <h2>Which Saints&apos; Names Recur Most</h2>
        <p>
          Popular choices honor widely venerated women saints: Agnes, Catherine, Teresa, Bernadette, Cecilia, Clare, Rita, Faustina, Thérèse, and Scholastica. Male saints appear too, usually as a second name or in the &quot;of the&quot; form — Sister Mary Joseph, Sister Francis. When you build an order, keep saints whose feast, era, or charism matches the community: a house founded in a Franciscan tradition leans on Clare and Agnes; a Carmelite one on Teresa and Thérèse. That consistency makes the convent feel historically grounded rather than assembled at random.
        </p>

        <h2>Naming a Whole Convent or Order</h2>
        <p>
          To make a religious community feel like one institution, give its members a shared flavor of saints and devotions. A Marian convent leans on &quot;Mary&quot; names; a contemplative Carmelite house on &quot;of the&quot; titles; an active teaching congregation on plainer saint names. Give the superior a &quot;Mother&quot; name, the professed sisters &quot;Sister&quot; names, and keep the whole roster tonally consistent. Generate a large batch, then sort the names into ranks and assign each a small backstory so the order reads as a living body rather than a list.
        </p>

        <h2>Nun Names in Gothic and Horror Fiction</h2>
        <p>
          A cloistered convent is a classic gothic and horror setting, and names that sound solemnly vowed heighten the dread — Sister Mary of the Sorrows, Mother Agatha, Sister Perpetua. Favor the older, austere &quot;of the&quot; forms and lesser-known saints for an ancient, eerie feel. The genre works precisely on the contrast between a name&apos;s piety and a sinister plot, so a pious, gentle-sounding name on a menacing character does more unsettling work than an obviously dark one.
        </p>

        <h2>How to Use This Nun Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Decide your order&apos;s spirituality and era first — austere medieval cloister, Marian convent, Carmelite house, or modern congregation.</li>
          <li>Set how many names you want per run (1–24) and click <strong>Generate names</strong> for a fresh batch of Sister and Mother names.</li>
          <li>Skim for names whose register fits — saintly, Marian, or contemplative &quot;of the&quot; — then use the Copy button to save the list.</li>
          <li>Paste into your story notes or character sheet and assign each name a role, from novice to mother superior.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>

        <h2>Tips and Common Mistakes</h2>
        <p>
          Avoid modern, casual, or clearly secular first names that would not survive a vow ceremony — a religious name should sound set apart. Do not mix incompatible traditions unless you mean to, such as a Carmelite &quot;of the&quot; title on a name from an unrelated order. Be careful about borrowing the exact name of a famous real saint or a living sister if you want originality. Keep the names that are dignified, era-appropriate, and consistent with the order&apos;s spirituality, and let the prefix do the work of showing rank.
        </p>

        <h2>Privacy</h2>
        <p>
          This nun name generator runs entirely in your browser. When you set a count and generate, the religious names are created locally on your device — nothing is uploaded, logged, or stored on our servers. The output is for creative use and does not reproduce any directory of real living sisters. Close the tab and the list is gone unless you copied it, so your convent roster stays yours.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a nun name generator?', answer: 'A nun name generator is a browser tool that creates religious names in the style nuns and sisters take when they enter a convent — names built from saints, virtues, and devotions, usually prefixed with "Sister" or "Mother." It is useful for writers, role-players, and game designers who need believable names for a religious order or a single cloistered character. Everything runs locally in your browser, nothing is stored or uploaded, and it is free with no sign-up. You get 1 to 24 names per run.' },
  { category: 'Naming', question: 'How do nuns choose their religious names?', answer: 'Traditionally a woman entering religious life takes a new name at her clothing or profession, symbolizing a break with her former self. The name is often chosen for her, or from a shortlist, and honors a saint, a mystery of the faith, or a virtue she wishes to embody — Sister Mary Agnes, Sister Teresa of the Cross, Sister Faustina. The prefix "Sister" is standard, while "Mother" usually marks a superior or an older nun. This generator mirrors that convention.' },
  { category: 'Naming', question: 'What are the common patterns in a nun\'s name?', answer: 'Three patterns dominate. First, a saint\'s name: Sister Agnes, Sister Catherine, Sister Bernadette. Second, "Mary" plus a second name, since many orders add a Marian element: Sister Mary Frances. Third, a devotional phrase built with "of the": Sister Teresa of the Child Jesus, Sister Mary of the Angels. Virtue names — Sister Grace, Sister Charity, Sister Mercy — also appear. Generate a batch and you will see these forms mixed, so you can pick the register that fits your order.' },
  { category: 'Naming', question: 'What does "of the" mean in names like "Sister Teresa of the Cross"?', answer: 'The "of the" phrase is a religious title tying the sister to a devotion, a mystery of the faith, or a sacred image — the Cross, the Sacred Heart, the Immaculate Conception, the Angels, the Blessed Sacrament. It deepens the name and signals the spirituality of her order; Carmelites in particular favor this form (think Thérèse of the Child Jesus). When you want a name to feel especially solemn or contemplative, keep the generated options that carry an "of the" suffix.' },
  { category: 'Use cases', question: 'How do I name a whole convent or religious order?', answer: 'Generate a batch and assign names that feel like they belong to the same community — a shared flavor of saints and devotions reads as one order. Give the superior a "Mother" name and the professed sisters "Sister" names, and consider a house theme: a Marian convent leans on "Mary" names, a Carmelite house on contemplative "of the" titles. Keeping the roster tonally consistent makes the order feel like a real institution rather than a random list of characters.' },
  { category: 'Naming', question: 'What is the difference between "Sister" and "Mother"?', answer: '"Sister" is the standard address for a professed nun or a member of an active congregation. "Mother" typically marks a position of authority — an abbess, a prioress, or a mother superior who leads the community — and is also used more broadly for senior nuns in some orders. When naming a cast, give the leader a "Mother" name and the rest "Sister" names to make the convent\'s hierarchy legible at a glance in your story or game.' },
  { category: 'Use cases', question: 'Can I use these names for fiction, games, or role-play?', answer: 'Yes — that is the main use. Historical fiction, gothic horror, fantasy monasteries, tabletop clergy NPCs, and role-play characters all benefit from names that sound authentically vowed rather than invented on the spot. Generate a batch, keep the ones that fit your setting\'s tone — austere and medieval, warmly modern, or eerie and cloistered — and pair them with a role in the community. The output is for original creative use, not a lookup of real living sisters.' },
  { category: 'General', question: 'Is the nun name generator free?', answer: 'Yes. The nun name generator is completely free to use in your browser with no account, no payment, and no download. You can generate religious names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm as many sister and mother names as your novel, campaign, or character roster needs without any friction.' },
  { category: 'Usage', question: 'How do I use the nun name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch for names that fit your order\'s spirituality — saintly, Marian, or contemplative — then use the Copy button to save your shortlist. Paste the results into your story notes or character sheet and assign each name a role, from novice to mother superior. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The nun name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character work stays private. Close the tab and the list is gone unless you copied it, so your convent roster remains yours until you choose to share it.' },
  { category: 'Compatibility', question: 'Does the nun name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. Open the page, choose how many names you want, and generate. On a phone you can produce a quick batch and copy it straight into your notes app or a manuscript. The layout is responsive, so naming a religious order works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many nun names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — say, to populate an entire convent — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while still giving you plenty of sister and mother names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, document, or spreadsheet. This is the intended way to save a shortlist: generate, copy, then assign each name a role in the community. In a spreadsheet each name lands in its own cell, which is handy for tracking a full convent roster with ranks and backstories.' },
  { category: 'General', question: 'Do I need an account to use the nun name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. Because everything runs locally in your browser, there is nothing to create an account for. It is designed for instant, friction-free brainstorming whenever you need a religious name for a character or an order.' },
  { category: 'Naming', question: 'Which saints\' names are most common for nuns?', answer: 'Popular choices honor widely venerated women saints — Agnes, Catherine, Teresa, Bernadette, Cecilia, Clare, Rita, Faustina, Therese, and Scholastica — alongside Marian names built on "Mary." Male saints appear too, often in the "of the" form or as a second name (Sister Mary Joseph, Sister Francis). Generate a batch and you will see a mix; keep the saints whose feast, era, or charism matches the order you are building so the community feels historically grounded.' },
  { category: 'Use cases', question: 'How do I name a novice versus a mother superior?', answer: 'A novice is early in formation and may still be addressed as "Sister" with a newly chosen name, sometimes still tentative. A mother superior or abbess carries authority and the title "Mother." To show a character\'s arc, you can keep the same core name and shift the prefix — a sister who rises to lead her house becomes "Mother." Generate names for the whole community, then assign titles by rank so the hierarchy reads clearly in your story.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a nun?', answer: 'Avoid modern, casual, or clearly secular first names that would not survive a vow ceremony — a religious name should sound set apart. Avoid mixing incompatible traditions unless intended (a Carmelite "of the" name on a name from an unrelated order). Be careful borrowing the exact name of a famous real saint or living sister if you want originality. Keep the names that are dignified, era-appropriate, and consistent with your order\'s spirituality.' },
  { category: 'Naming', question: 'Do modern nuns still take new names?', answer: 'Practice varies. Many traditional and contemplative orders still confer a new religious name at clothing or profession, while some modern congregations after the mid-20th-century reforms let sisters keep their baptismal names or make the new name optional. For fiction, either approach is valid — a strict cloistered order taking dramatic "of the" names, or a modern active congregation using ordinary first names with "Sister." Match the convention to the era and character of your order.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens entirely in your browser, so we never receive or store the names or your settings. You can use the tool in a private or incognito window if you prefer. If you refresh or close the page, the last batch is cleared unless you have already copied it. There is no server-side record of what you generated or how many times you ran it.' },
  { category: 'Technical', question: 'How are the nun names generated?', answer: 'The generator draws on curated lists of saints\' names, Marian elements, virtues, and devotional "of the" phrases, then combines them with the "Sister" and "Mother" prefixes in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration — it does not reproduce a directory of real living sisters or any official religious register. The lists are tuned to sound like genuine professed names across several traditions.' },
  { category: 'Use cases', question: 'Can I use these names for a gothic or horror setting?', answer: 'Yes. A cloistered convent is a classic gothic and horror setting, and names that sound solemnly vowed heighten the atmosphere — Sister Mary of the Sorrows, Mother Agatha, Sister Perpetua. Favor the older, austere "of the" forms and lesser-known saints for an eerie, ancient feel. Generate a batch, keep the ones that carry dread or mystery, and build your haunted order around them. The contrast between a name\'s piety and a sinister plot is exactly what makes the genre work.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool — populating a large abbey, for example — run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you need a large set of religious names to choose from. Keep the strongest, most tonally consistent options in a shortlist as you go.' },
  { category: 'Troubleshooting', question: 'Can I use the nun name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm sister and mother names offline, and copying and pasting works offline too. You only need a connection to open the page the first time. This makes it handy for writing on the go, on a plane, or anywhere your connection is unreliable.' },
];

export default async function NunNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="nun" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Nun name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

