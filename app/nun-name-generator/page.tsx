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
    description: 'Free Nun Name Generator for religious-order titles. Formulate religious-order-style title concepts within your browser with no registration.',
    seoTitle: 'Nun Name Generator – Religious Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Nun Name Generator – Religious Title Concepts</h2>
        <p>When a woman enters religious life, she frequently adopts a new title — a religious title that signifies a break with her past self and binds her to a saint, a virtue, or a mystery of the faith. This is why nuns are designated Sister Mary Agnes or Mother Teresa of the Cross rather than by the title they were born with. This Nun Name Generator constructs those religious titles in the authentic Catholic tradition, allowing authors, role-players, and game designers to name a single cloistered character or an entire convent convincingly. It operates in your browser, requires no registration, and supplies 1–24 titles per execution accompanied by a copy button.</p>
        <p>The guide below outlines how nuns actually select their titles, the three primary naming patterns, the significance of the &quot;of the&quot; devotional titles, and how to name novices, sisters, and mothers so a religious community reads like a genuine institution. Learn the conventions and your invented order will feel sacred rather than fabricated.</p>

        <h2>How Nuns Adopt a Title in Religion</h2>
        <p>Historically, a woman joining a religious community gets a fresh name during her clothing ceremony (putting on the habit for the first time) or when she professes her vows. This shift holds deep meaning: her former name represents her worldly existence, while the new one is dedicated to God. Within numerous orders, the superior selects the moniker, or picks one from a provided list, celebrating a patron saint to emulate or a cherished community devotion.</p>
        <p>Practices fluctuate across periods. While strict contemplative traditions still grant dramatic titles like Sister Perpetua or Sister Mary of the Angels, numerous modern congregations allow sisters to keep baptismal names or treat religious titles as optional following twentieth-century reforms. For writing fiction, both approaches work well: an austere medieval cloister featuring solemn of the names, or a contemporary active group using ordinary first names simply preceded by Sister.</p>

        <h2>The Three Primary Naming Structures</h2>
        <p>Nearly every nun name adheres to one of three recognizable formats. Grasping them helps you select outputs that sound genuinely professed:</p>
        <ul>
          <li><strong>A saint&apos;s name.</strong> The oldest and most straightforward format — Sister Agnes, Sister Catherine, Sister Bernadette, Sister Clare — placing the individual under the spiritual protection of a canonized woman or man.</li>
          <li><strong>&quot;Mary&quot; plus a second name.</strong> Because Marian devotion is profound, many orders incorporate a Marian component like Sister Mary Frances, Sister Mary Joseph, or Sister Mary Agnes. Mary can even accompany a male saint moniker.</li>
          <li><strong>A devotional &quot;of the&quot; title.</strong> The most solemn variation connects the nun to a sacred image, feast, or mystery: Sister Teresa of the Child Jesus, Sister Mary of the Sorrows, Sister Faustina of the Blessed Sacrament.</li>
        </ul>
        <p>Virtue names — Sister Grace, Sister Charity, Sister Mercy, Sister Faith — comprise a smaller secondary category favored within select English-speaking congregations. Generating batches reveals these styles blended together, letting you retain whichever tone matches your developing order.</p>

        <h2>What &quot;of the&quot; Titles Signify</h2>
        <p>The of the phrase serves as a religious descriptor anchoring the nun to a specific devotion including the Cross, Sacred Heart, Immaculate Conception, Angels, Blessed Sacrament, or Child Jesus. It deepens the moniker and reflects her order&apos;s spirituality. Carmelites particularly embrace this style; Saint Thérèse of Lisieux was known in religion as Thérèse of the Child Jesus and the Holy Face. Whenever you desire a particularly contemplative or solemn feel, keep generated options containing an of the suffix and align the devotion with the atmosphere: Sorrows and the Cross for austerity, Angels and Light for gentleness.</p>

        <h2>Sister, Mother, and the Hierarchy of a Convent</h2>
        <p>The title instantly reveals a character&apos;s position to the reader. &quot;Sister&quot; serves as the typical form of address for a professed nun or a member of an active congregation. &quot;Mother&quot; indicates leadership — such as an abbess, prioress, or mother superior guiding the dwelling — and within specific communities is also applied to elder nuns. A novice, still in early training, is generally called &quot;Sister&quot; using a recently selected, occasionally provisional title.</p>
        <p>When naming an entire ensemble, utilize the titles to clarify the hierarchy: assign the leader a &quot;Mother&quot; title and the others &quot;Sister&quot; titles. You can even illustrate a character&apos;s development by retaining her primary name while changing the prefix — a nun who ascends to govern her convent turns into &quot;Mother.&quot;</p>

        <h2>Which Saints&apos; Names Appear Most Frequently</h2>
        <p>Frequent selections honor widely celebrated female saints: Agnes, Catherine, Teresa, Bernadette, Cecilia, Clare, Rita, Faustina, Thérèse, and Scholastica. Male saints also emerge, typically as secondary names or within of the structures like Sister Mary Joseph or Sister Francis. When constructing an order, choose saints whose eras, feasts, or charisms align with the community: Franciscan foundations rely on Clare and Agnes, whereas Carmelites favor Teresa and Thérèse. Such consistency roots the convent historically rather than randomly.</p>

        <h2>Naming an Entire Convent or Order</h2>
        <p>To make a religious order feel cohesive, provide its members with a common theme of saints and spiritual focuses. A Marian community relies on &quot;Mary&quot; monikers; a contemplative Carmelite house on &quot;of the&quot; titles; a teaching congregation on simpler saint options. Assign the leader a &quot;Mother&quot; title, the professed nuns &quot;Sister&quot; titles, and maintain a consistent tone across the roster. Produce a large batch, organize the names by rank, and give each a brief background so the community feels alive rather than like a simple inventory.</p>

        <h2>Nun Names in Gothic and Horror Stories</h2>
        <p>A cloistered monastery serves as a traditional gothic and horror backdrop, and strictly vowed names amplify the fear — Sister Mary of the Sorrows, Mother Agatha, Sister Perpetua. Choose older, severe &quot;of the&quot; structures and obscure saints for an archaic, creepy atmosphere. The style thrives on the tension between a sacred title and a dark narrative, meaning a gentle, holy-sounding name on a frightening character is far more disturbing than an overtly menacing one.</p>

        <h2>How to Use This Nun Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Determine your order&apos;s era and spirituality initially, whether it is an austere medieval cloister, Marian convent, Carmelite house, or modern congregation.</li>
          <li>Specify your desired name quantity per run between 1 and 24, then click <strong>Generate names</strong> to obtain fresh batches of Sister and Mother options.</li>
          <li>Scan for suitable options whose tone matches — saintly, Marian, or contemplative &quot;of the&quot; — and then click the Copy button to store the collection.</li>
          <li>Paste choices directly into story notes or character profiles, assigning specific roles ranging from novice to mother superior.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>

        <h2>Tips and Mistakes to Avoid</h2>
        <p>Steer clear of contemporary, informal, or obviously worldly given names that would never appear in a vow ceremony — a sacred name should feel distinct. Do not combine clashing traditions unless intended, like pairing a Carmelite &quot;of the&quot; suffix with a name from an unrelated order. Take care when using the exact identity of a well-known historical saint or an existing nun if you desire uniqueness. Retain formal, historically fitting names that align with the community&apos;s spirituality, letting the title convey the rank.</p>

        <h2>Privacy</h2>
        <p>This Nun Name Generator operates completely inside your browser. Once you choose a quantity and click generate, the religious names are formulated right on your machine — zero data gets sent, recorded, or saved on our servers. The results are meant for fiction writing and do not replicate any database of actual living nuns. Shut the window and the compilation disappears unless you saved it, ensuring your convent roster remains completely private.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a nun name generator?', answer: 'A Nun Name Generator functions as a web utility that generates religious titles in the tradition of nuns and sisters upon entering a convent—comprising saints, virtues, and devotions, typically beginning with "Sister" or "Mother." This is beneficial for authors, role-players, and game creators seeking plausible names for a monastic community or an isolated member. Everything executes directly within your browser, with zero storage or uploads, and remains completely free without registration. Users receive 1 to 24 names per generation.' },
  { category: 'Naming', question: 'How do nuns select their religious titles?', answer: 'Historically, a woman entering a monastic life receives a fresh title during her clothing or profession, marking a separation from her past identity. The choice is frequently determined for her, or selected from a shortlist, honoring a saint, a theological mystery, or a specific virtue—Sister Mary Agnes, Sister Teresa of the Cross, Sister Faustina. The prefix "Sister" is standard, whereas "Mother" typically designates a superior or senior nun. This generator reflects that exact tradition.' },
  { category: 'Naming', question: 'What are the typical patterns found in a nun\'s title?', answer: 'Three primary styles prevail. First, a saint\'s title: Sister Agnes, Sister Catherine, Sister Bernadette. Second, "Mary" combined with a secondary name, as numerous orders incorporate a Marian aspect: Sister Mary Frances. Third, a devotional phrase constructed using "of the": Sister Teresa of the Child Jesus, Sister Mary of the Angels. Virtue names—Sister Grace, Sister Charity, Sister Mercy—are also present. Generate a batch to observe these styles blended, allowing you to select the tone matching your order.' },
  { category: 'Naming', question: 'What does "of the" signify in names such as "Sister Teresa of the Cross"?', answer: 'The "of the" phrase serves as a sacred title connecting the sister to a specific devotion, theological mystery, or holy symbol—the Cross, the Sacred Heart, the Immaculate Conception, the Angels, or the Blessed Sacrament. It enriches the name and indicates the spirituality of her order; Carmelites especially favor this format (for instance, Thérèse of the Child Jesus). When seeking a title that feels notably grave or contemplative, retain the generated choices possessing an "of the" suffix.' },
  { category: 'Use cases', question: 'How should I name an entire convent or religious order?', answer: 'Produce a batch and assign names that appear to belong to a unified community—a consistent theme of saints and devotions reads as a single order. Designate the leader with a "Mother" name and professed members with "Sister" names, while considering a house motif: a Marian convent favors "Mary" names, while a Carmelite house relies on contemplative "of the" designations. Maintaining roster tonal consistency makes the order resemble a genuine institution rather than an arbitrary collection of characters.' },
  { category: 'Naming', question: 'What is the distinction between "Sister" and "Mother"?', answer: '"Sister" serves as the conventional form of address for a professed nun or member of an active community. Conversely, "Mother" generally denotes a position of leadership—an abbess, prioress, or mother superior directing the group—and is occasionally applied more broadly to senior nuns within certain orders. When developing a cast, assign the leader a "Mother" designation and the remainder "Sister" names to ensure the convent hierarchy is immediately clear within your narrative or game.' },
  { category: 'Use cases', question: 'Can these names be utilized for fiction, games, or role-play?', answer: 'Indeed—that represents the primary application. Historical fiction, gothic horror, fantasy monasteries, tabletop clergy NPCs, and role-play avatars all profit from names that sound genuinely vowed rather than hastily invented. Create a batch, preserve those that match your setting\'s atmosphere—austere and medieval, warmly modern, or eerie and secluded—and pair them with a community role. The results are intended for original creative work, not as a directory of real living sisters.' },
  { category: 'General', question: 'Does the Nun Name Generator cost anything?', answer: 'Yes. The Nun Name Generator is entirely free to utilize within your browser without requiring an account, payment, or download. You may generate religious names as frequently as desired—there exists no daily ceiling or maximum run restriction. It operates exclusively on your hardware, enabling you to brainstorm as many sister and mother names as your book, campaign, or character directory requires without any obstacles.' },
  { category: 'Usage', question: 'How can someone operate the Nun Name Generator?', answer: 'Select the desired quantity of names per run (1 to 24) and press Generate. Review the set for options matching your order\'s spirituality—saintly, Marian, or contemplative—then apply the Copy button to preserve your shortlist. Transfer the results into your narrative notes or character sheet and allocate each name a specific rank, ranging from novice to mother superior. Execute again as often as needed; there is no profile, no software download, and no restriction on runs.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'No. The Nun Name Generator operates completely inside your web browser. When you specify a quantity and trigger generation, the names are produced locally on your device—nothing is transmitted, logged, or retained on our servers. Your character development remains confidential. Close the tab and the compilation disappears unless you saved it, ensuring your convent roster stays exclusively yours until you decide to share it.' },
  { category: 'Compatibility', question: 'Is the Nun Name Generator functional on mobile devices?', answer: 'Yes. The generator functions across any contemporary web browser and operates on desktop, tablet, and mobile devices without requiring software installation. Access the page, select your required name quantity, and generate. On a smartphone, you can instantly produce a batch and copy it directly into your notes application or manuscript. The interface is adaptive, meaning naming a religious order functions just as efficiently on a compact display as on a computer.' },
  { category: 'Limits', question: 'What quantity of nun names is it possible to create simultaneously?', answer: 'You may request 1 to 24 names per execution. Should a larger collection be required—for instance, to populate an entire convent—simply execute the tool again; each run yields a completely new random assortment. There are no daily or overall constraints. Paste multiple generations into a single document and eliminate any duplicates. The 24-per-run limit keeps every batch easily readable while still supplying ample sister and mother names for your shortlist.' },
  { category: 'Usage', question: 'Am I able to copy names straight from the generator?', answer: 'Yes. The Copy button transfers the entire generated set to your clipboard as plain text, presenting one name per line, prepared for pasting into any notes tool, document, or spreadsheet. This constitutes the intended method for saving a shortlist: generate, copy, and then assign each name a community role. Within a spreadsheet, every name occupies an individual cell, proving convenient for monitoring a complete convent roster complete with ranks and histories.' },
  { category: 'General', question: 'Must I create a profile to access the Nun Name Generator?', answer: 'No. The utility operates without any registration or login requirements. Open the interface, define your desired name quantity, trigger generation, and copy the outcomes—leaving out email, password, or sign-up steps. Because all processing occurs locally within your browser, an account creation phase is entirely absent. It is engineered for instantaneous, seamless brainstorming whenever a religious name is needed for a character or an order.' },
  { category: 'Naming', question: 'Which saint names are most prevalent for nuns?', answer: 'Popular options honor widely celebrated female saints—Agnes, Catherine, Teresa, Bernadette, Cecilia, Clare, Rita, Faustina, Therese, and Scholastica—alongside Marian names formulated upon "Mary." Male saints also surface, frequently within the "of the" structure or acting as a secondary name (Sister Mary Joseph, Sister Francis). Generate a batch to observe a mixture; retain those saints whose feast days, eras, or charisms align with the order you are constructing so the community appears historically grounded.' },
  { category: 'Use cases', question: 'How do I distinguish a novice\'s name from a mother superior\'s?', answer: 'A novice remains early in formation and might still be addressed as "Sister" alongside a newly selected name, occasionally still tentative. Conversely, a mother superior or abbess embodies authority alongside the title "Mother." To illustrate a character progression, you can maintain the core name while altering the prefix—a sister who ascends to lead her house transitions to "Mother." Generate titles for the entire community, then distribute ranks by hierarchy so the structure reads distinctly within your story.' },
  { category: 'Best practices', question: 'What pitfalls ought one to steer clear of when choosing a name for a nun?', answer: 'Steer clear of contemporary, casual, or overtly secular first names that would never pass a vow ceremony — a religious name needs to feel set apart. Avoid mixing clashing traditions unless deliberately chosen (a Carmelite "of the" title applied to a name from a totally different order). Be careful borrowing the exact name of a famous real saint or living sister if originality is your goal. Stick to names that remain dignified, period-accurate, and aligned with your order\'s spiritual path.' },
  { category: 'Naming', question: 'Do contemporary nuns still take new names?', answer: 'Practices differ. Plenty of traditional and contemplative orders still bestow a fresh religious name during clothing or profession, while some modern congregations following mid-20th-century reforms permit sisters to retain their baptismal names or make the new moniker optional. For writing fiction, both paths work — a strict cloistered order using dramatic "of the" names, or a contemporary active community employing standard first names preceded by "Sister." Match the convention to the time period and identity of your order.' },
  { category: 'Privacy', question: 'Are the generated names saved by you?', answer: 'Not at all. Every creation step runs strictly inside your personal browser, ensuring we never collect, view, or retain your outputs or configurations. Running the application within a private or incognito tab is completely fine. Reloading or navigating away instantly erases your current outputs unless you copied them beforehand. We maintain zero server logs tracking your generated words or how frequently you employ the utility.' },
  { category: 'Technical', question: 'How are the nun names created?', answer: 'The generator pulls from curated lists of saints\' names, Marian themes, virtues, and devotional "of the" phrases, blending them alongside the "Sister" and "Mother" prefixes right in your browser so each generation varies. Nothing gets transmitted to a server. The output serves purely for creative inspiration — it does not replicate a directory of actual living sisters or any official religious registry. The lists are calibrated to sound like authentic professed names spanning multiple traditions.' },
  { category: 'Use cases', question: 'Can I utilize these names for a gothic or horror environment?', answer: 'Indeed. A cloistered convent serves as a classic gothic and horror setting, and names carrying solemn vows heighten the atmosphere — Sister Mary of the Sorrows, Mother Agatha, Sister Perpetua. Lean toward older, austere "of the" structures and lesser-known saints to create an eerie, ancient vibe. Generate a batch, keep the ones evoking dread or mystery, and construct your haunted order around them. The juxtaposition of a name\'s piety with a dark plot is precisely what makes the genre succeed.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Each execution delivers up to 24 names. For a larger pool — populating a massive abbey, for example — run the generator multiple times and combine every batch into a single document, subsequently stripping out duplicates. There are no daily or overall limits on runs, meaning batching is the intended workflow when a vast collection of religious names is required for selection. Retain the most robust, tonally consistent choices in a shortlist as you proceed.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Nun Name Generator without an internet connection?', answer: 'Yes. Once the page has fully loaded, the tool executes completely within your browser and requires zero network connection to generate names. You are free to brainstorm sister and mother names offline, and the copy-paste functionality operates offline too. A connection is only necessary for loading the page initially. This proves convenient for writing on the move, aboard an aircraft, or wherever your connection remains spotty.' },
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
          <p className="text-slate-700">Frequent inquiries concerning the Nun Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

