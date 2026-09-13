import type { FaqItem } from '@/components/faqData';
import type { ToolContent } from './index';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Book Blurb Generator: Craft Back-Cover Copy That Sells</h2>
        <p>
          A book blurb is arguably the most important piece of marketing copy an author will ever write. It lives on the back cover of a printed book, dominates the above-the-fold description on Amazon and Goodreads, and determines whether a browser becomes a buyer in under thirty seconds. Yet most authors "” even those who write brilliantly for hundreds of pages "” find blurb writing paralyzing. The skills that make a novelist great (scene-building, interiority, pacing) are largely the opposite of what a blurb demands (compression, hooks, urgency). Our free book blurb generator bridges that gap by turning your plot summary into polished, market-ready back-cover copy that mirrors the voice of bestselling books in your genre.
        </p>
        <p>
          Whether you are querying literary agents, launching a self-published title, or refreshing the description on a backlist book that stopped converting, this tool produces blurbs that feel crafted rather than generated. Below, we explore what makes a blurb work, why AI-generated descriptions often miss the mark, and how to get the best results from this generator.
        </p>

        <h2>What Is a Book Blurb and Why Does It Matter So Much?</h2>
        <p>
          A book blurb (also called a book description, back-cover copy, or jacket copy) is a short persuasive text "” typically 150 to 300 words "” designed to entice a potential reader into opening the book. It is not a synopsis. A synopsis tells an agent or editor what happens, including the ending. A blurb is a sales tool: it teases the core conflict, introduces the protagonist in a compelling way, raises the emotional stakes, and ends on a note of irresistible curiosity.
        </p>
        <p>
          Professional publishers employ specialized copywriters to write blurbs. Indie authors rarely have that luxury. The result is a market flooded with self-published titles featuring descriptions that either spoil too much, say too little, or bury the hook under pages of world-building context. In a category like romance, thriller, or fantasy "” where readers browse dozens of titles in a single session "” a weak blurb is a conversion killer regardless of how good the book itself is.
        </p>
        <p>
          The stakes are equally high for query letters. When you submit to an agent, the one-paragraph hook you include in your query letter is functionally a blurb. Agents read hundreds of these weekly. A blurb that captures the core dramatic question with urgency and voice gets requests for the full manuscript. One that meanders into backstory gets a polite pass.
        </p>

        <h2>Why AI-Generated Blurbs Often Sound Robotic</h2>
        <p>
          General-purpose AI writing tools tend to produce blurbs that are technically correct but commercially ineffective. The most common failure modes are:
        </p>
        <h3>Over-summarizing the Plot</h3>
        <p>
          AI models trained on book data often learn that descriptions should explain what happens. But the best blurbs withhold as much as they reveal. A thriller blurb never tells you who the killer is. A romance blurb never describes the resolution of the central misunderstanding. Generic AI tools lean toward completeness when they should lean toward tension.
        </p>
        <h3>Missing the Emotional Core</h3>
        <p>
          Readers buy books based on the emotional experience they expect, not the plot mechanics. A great blurb for a literary novel might not even name the protagonist's job or hometown "” but it will make you feel the specific quality of grief or longing the story delivers. AI that doesn't understand this distinction produces flat, functional summaries instead of emotionally resonant copy.
        </p>
        <h3>Ignoring Genre Conventions</h3>
        <p>
          Romance blurbs follow different rules from thriller blurbs. Fantasy blurbs for epic secondary-world stories use different language from contemporary fantasy. Cozy mystery blurbs have a warm, wry tone that would feel wrong in a dark psychological suspense novel. AI models without genre-specific fine-tuning produce blurbs in a vague middle register that fits no genre particularly well.
        </p>
        <h3>Clichéd Openers</h3>
        <p>
          "In a world where..." or "When [name] discovers..." are the blurb equivalent of "It was a dark and stormy night." They signal to an agent or experienced reader that the author doesn't know the current market. AI tools frequently default to these openers because they appear commonly in training data.
        </p>

        <h2>How Our Book Blurb Generator Works Differently</h2>
        <p>
          Our blurb generator is tuned specifically for back-cover copy rather than general prose. It applies the following principles that separate professional jacket copy from amateur summaries:
        </p>
        <h3>Hook-First Architecture</h3>
        <p>
          Every blurb the tool produces opens with the core dramatic question or the protagonist's most compelling situation "” not with backstory, setting, or character biography. The first sentence is engineered to make the reader ask "and then what?" immediately.
        </p>
        <h3>Stakes Escalation</h3>
        <p>
          The middle section of the blurb builds stakes progressively. What does the protagonist want? What is standing in the way? What will they lose if they fail? This three-beat structure mirrors the way the best commercial blurbs create urgency without giving away the second or third act.
        </p>
        <h3>Genre-Calibrated Language</h3>
        <p>
          The tool adjusts vocabulary, sentence rhythm, and emotional temperature to match your specified genre. A dark romance blurb uses different language than a middle-grade adventure blurb, and the generator recognizes this distinction.
        </p>
        <h3>Cliffhanger Endings</h3>
        <p>
          Professional blurbs almost always end on an open question or a provocative statement that forces the reader to open the book to find the answer. The generator is specifically tuned to produce these endings rather than summarizing the resolution.
        </p>

        <h2>Step-by-Step: How to Use the Book Blurb Generator</h2>
        <h3>Step 1: Gather Your Core Story Elements</h3>
        <p>
          Before you type anything into the generator, take five minutes to identify: your protagonist's name and defining trait, the inciting incident that launches the story, the central conflict or dramatic question, the primary emotional stakes (what the protagonist stands to gain or lose emotionally), and your genre and subgenre. The more precisely you can articulate these elements, the better the output will be.
        </p>
        <h3>Step 2: Write a Raw Summary</h3>
        <p>
          Paste a rough description of your book into the input field. Don't worry about polish "” this is the material the generator will reshape. Include the protagonist's situation at the start of the story, what disrupts that situation, what they're trying to achieve, and what the central obstacle is. Three to five sentences is usually sufficient.
        </p>
        <h3>Step 3: Specify Genre and Tone</h3>
        <p>
          Select your genre from the dropdown or type it in. If your book has subgenre characteristics "” "dark romance," "cozy mystery," "epic secondary-world fantasy," "literary fiction" "” include those as well. Tone guidance such as "witty and warm," "tense and atmospheric," or "emotional and character-driven" will further calibrate the output.
        </p>
        <h3>Step 4: Generate and Compare Variants</h3>
        <p>
          Generate at least three variants. Blurb writing involves a degree of subjective judgment, and different versions will emphasize different aspects of the story. Compare the openings of each variant "” which one would make you keep reading if you saw it on a shelf? Which one most accurately captures what your book feels like to read?
        </p>
        <h3>Step 5: Edit and Personalize</h3>
        <p>
          Use the best generated blurb as a working draft. Read it aloud. Swap any word that doesn't match your book's specific voice. Tighten any sentence that feels loose. Add any detail that the generator missed because it wasn't in your raw summary. The goal is a blurb that could only be about this book, in this author's voice.
        </p>

        <h2>Use Cases for the Book Blurb Generator</h2>
        <h3>Self-Published Authors on Amazon KDP</h3>
        <p>
          Amazon's book description field allows up to 4,000 characters, but studies of bestselling indie titles consistently show that the most effective descriptions are between 150 and 300 words. The generator produces output in this sweet spot. You can also use the tool to generate an extended description for Amazon's A+ Content feature, which allows formatted text with headers and additional paragraphs.
        </p>
        <h3>Query Letter Hooks</h3>
        <p>
          The one-paragraph hook in a query letter to a literary agent follows the same structural rules as a back-cover blurb: introduce the protagonist, establish the conflict, raise the stakes, end with a question. Many authors use the generator to draft their query hook and then adapt the same language for their Goodreads description and promotional materials.
        </p>
        <h3>Goodreads and BookBub Descriptions</h3>
        <p>
          Readers on Goodreads and BookBub are active book consumers who evaluate dozens of descriptions in a single browsing session. A description that opens with a strong hook and maintains tension throughout converts significantly better than one that buries the premise in backstory. The generator can produce platform-specific variants with appropriate formatting.
        </p>
        <h3>Series Bible and Marketing Materials</h3>
        <p>
          Authors writing series need consistent blurb language across multiple books. The generator helps establish a voice and structural template for the series that can be applied to each successive title while highlighting what makes each installment unique.
        </p>
        <h3>Book Proposal Non-Fiction Summaries</h3>
        <p>
          Non-fiction book proposals require an overview section that functions like a blurb "” it must articulate the book's core argument, its target audience, and why this book, at this moment, matters. The generator can be adapted for this use case by framing the "conflict" as the problem the book solves and the "stakes" as what readers stand to gain.
        </p>

        <h2>Before and After: What the Generator Transforms</h2>
        <h3>Before (Author's Raw Summary)</h3>
        <p>
          "My book is about a woman named Clara who grew up in a small town and left to become a doctor in the city. When her mother gets sick, she has to go back home and deal with all the memories she left behind. She also runs into her ex, Jake, who is now running the family farm. They have to work together to save the farm from a developer, and along the way they fall in love again. It's a second-chance romance set in Vermont."
        </p>
        <h3>After (Generator Output)</h3>
        <p>
          "Clara left Millhaven with two promises: a medical school acceptance letter and a vow never to look back. Twelve years later, her mother's diagnosis drags her home to the one place she swore she'd outrun "” and straight back into the orbit of Jake Mercer, the man she walked away from without a word of explanation. With a ruthless developer threatening to level the Mercer farm before the harvest is in, Clara and Jake are forced into an uneasy partnership. But working side by side on land that holds every memory they've spent a decade avoiding might cost Clara more than she's willing to lose "” because some promises can't survive coming home."
        </p>
        <p>
          The transformation illustrates the key principles: the opening hook establishes character and conflict simultaneously, the stakes are both practical (the farm) and emotional (the relationship), and the ending withholds the resolution while making it irresistible.
        </p>

        <h2>Tips for Getting the Best Results</h2>
        <h3>Lead with Your Protagonist's Core Want, Not Their Biography</h3>
        <p>
          The most common mistake in raw summaries is opening with the protagonist's history rather than their desire. "Clara grew up in a small town" tells us where she's from. "Clara left Millhaven with two promises" tells us who she is and immediately creates narrative tension. Frame your input around what your protagonist wants and what is standing in the way.
        </p>
        <h3>Name the Emotional Experience, Not Just the Plot</h3>
        <p>
          Add a line to your input about the emotional experience of the book: "It's ultimately about the courage it takes to forgive someone who hurt you." "The story explores what happens when ambition and love ask for incompatible things." This gives the generator the emotional texture it needs to produce copy that resonates rather than just summarizes.
        </p>
        <h3>Include Comparable Titles if You Have Them</h3>
        <p>
          If you know that your book reads like a specific author's work, include that in your input. The generator can calibrate the language register, sentence rhythm, and emotional temperature of the output to match comparable titles in the market, which is exactly what agents and readers use comp titles for.
        </p>
        <h3>Try Different Length Instructions</h3>
        <p>
          A blurb for a physical book back cover needs to fit in approximately 150 words due to space constraints. An Amazon description can be 250 to 300 words. A BookBub featured deal description might need to be under 150 characters. Specify your target length and platform for the most useful output.
        </p>

        <h2>How the Generator Compares to Writing a Blurb Manually</h2>
        <p>
          Writing a blurb manually from scratch typically takes authors between two hours and two days "” and often produces results they're not satisfied with. The emotional closeness authors feel to their own work makes it genuinely difficult to be objective about what the story is, versus what it means to them. The generator provides an outside perspective by default: it processes the story elements you provide and produces copy based on what those elements suggest to a neutral reader.
        </p>
        <p>
          That said, the generator is a starting point rather than a final product. The best results come from treating the generated output as a first draft: a structurally sound starting point that you refine with the specific language, voice, and details that only you know. Think of it as having a professional copywriter produce a first draft that you then polish "” a process that compresses days of work into minutes.
        </p>

        <h2>SEO Considerations for Book Descriptions</h2>
        <p>
          Amazon's search algorithm "” called A9 "” weights book descriptions for keyword relevance, particularly for categories and subgenres. A romance novel with "second chance romance," "small-town romance," and "Vermont" in the description will rank higher for those searches than a book with an identical cover and title but a keyword-sparse description. The generator incorporates the genre and subgenre terms you specify naturally into the copy, supporting discoverability without keyword stuffing.
        </p>
        <p>
          For Google indexing of your author website or book landing page, the same principles apply. A description that includes the genre name, subgenre, setting, and emotional theme naturally "” the way readers actually search "” performs better in search results than one that focuses only on plot.
        </p>

        <h2>Blurb Conventions by Genre</h2>
        <h3>Romance</h3>
        <p>
          Romance blurbs almost always introduce both romantic leads in the first two sentences, establish the meet or reunion, name the central conflict or tension that keeps them apart, and end with a question about whether love will win. Dark romance blurbs use more intense, atmospheric language. Contemporary romance blurbs are warmer and often wry. Historical romance blurbs use period-appropriate vocabulary without being inaccessible.
        </p>
        <h3>Thriller and Mystery</h3>
        <p>
          Thriller blurbs open with the inciting crime or threat and establish the protagonist's personal stakes immediately. The best thriller blurbs create a sense of ticking clock "” something terrible will happen unless the protagonist acts. Mystery blurbs in the cozy subgenre are warmer and often include the setting as a character; in the hardboiled subgenre they are spare and atmospheric.
        </p>
        <h3>Fantasy and Science Fiction</h3>
        <p>
          Speculative fiction blurbs face the unique challenge of introducing a world that doesn't exist while maintaining focus on the human story at the center. The best SFF blurbs spend one sentence on world-context and then immediately pivot to the character's conflict. The temptation to describe the magic system or the political structure of the alien empire should be resisted "” readers come for the story, not the world bible.
        </p>
        <h3>Literary Fiction</h3>
        <p>
          Literary fiction blurbs often work by atmosphere and emotional resonance rather than plot mechanics. They focus on the quality of the reading experience "” the specific texture of emotion the book delivers "” and lean on language that signals literary quality: unusual word choices, elegant sentence structures, thematic language. The generator calibrates its output to match this register when literary fiction is specified.
        </p>

        <h2>Common Blurb Writing Mistakes the Generator Helps Avoid</h2>
        <p>
          Among the most common blurb mistakes the generator actively counters: starting with a rhetorical question directed at the reader ("Have you ever wondered what it would be like to...?"), using the word "journey" as a substitute for describing the actual story, beginning with the protagonist's name and nothing else ("Sarah Mitchell is a woman who..."), spoiling the climax or ending, including more than two character names in a blurb under 250 words (readers can't track more than two), and using genre clichés that appear in thousands of other blurbs without differentiating the book.
        </p>

        <h2>Using Generated Blurbs in Your Author Brand</h2>
        <p>
          A strong blurb doesn't just sell a single book "” it communicates what kind of author you are and what kind of reading experience readers can expect from your entire catalog. Once you've refined a generated blurb that truly captures your book's essence, study its language choices and structural moves. Over time, you'll develop an intuitive sense of how to apply those principles to future titles without needing to start from scratch each time. Many authors find that working with the generator accelerates their understanding of their own authorial voice by showing them what their story sounds like from the outside.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'Getting Started',
    question: 'What information do I need to provide to get a good blurb?',
    answer:
      'The most important elements are your protagonist&#39;s core desire, the inciting incident that disrupts their life, the central conflict or obstacle, the emotional stakes, and your genre and subgenre. You don&#39;t need a polished summary "” a rough three-to-five sentence description of the story&#39;s setup is sufficient. The more clearly you articulate what the protagonist wants and what stands in the way, the stronger the output will be.',
  },
  {
    category: 'Getting Started',
    question: 'How long should my book blurb be?',
    answer:
      'The ideal blurb length depends on the platform. For a physical book back cover, 150 words is usually the sweet spot due to space constraints. For Amazon KDP, 200 to 300 words converts best. For a query letter hook, aim for one tight paragraph of 75 to 100 words. The generator can produce output calibrated to any of these lengths "” specify your target length in your input.',
  },
  {
    category: 'Getting Started',
    question: 'Can I use this generator for non-fiction books?',
    answer:
      'Yes. For non-fiction, frame the "conflict" as the problem your reader faces and the "protagonist" as the reader themselves or the central subject of the book. The generator can produce compelling back-cover copy for self-help, memoir, business books, and prescriptive non-fiction by applying the same hook-first, stakes-driven structure that works for fiction.',
  },
  {
    category: 'How It Works',
    question: 'Why does the generator avoid starting with the protagonist\'s name?',
    answer:
      'Opening with a name tells readers nothing except the name. Professional blurbs open with situation, conflict, or emotional tone "” elements that immediately engage a reader&#39;s curiosity. "Clara left Millhaven with two promises" is more compelling than "Clara Mitchell is a doctor who..." because it implies story from the first word. The generator follows this convention unless you specifically request a name-first opening.',
  },
  {
    category: 'How It Works',
    question: 'How does the generator handle genre-specific conventions?',
    answer:
      'The generator adjusts vocabulary, sentence rhythm, emotional temperature, and structural conventions based on the genre you specify. Romance blurbs introduce both leads and name the central tension. Thriller blurbs establish urgency and ticking-clock stakes. Literary fiction blurbs emphasize emotional texture over plot mechanics. Specifying your subgenre (dark romance, cozy mystery, epic fantasy) produces even more calibrated output.',
  },
  {
    category: 'How It Works',
    question: 'Will the generator spoil my ending?',
    answer:
      'The generator is specifically tuned to withhold resolutions and end on open questions rather than summarizing the ending. A blurb that reveals the climax removes the reader&#39;s incentive to buy the book. If you include the ending in your raw summary, the generator will use that information to build tension toward it without revealing it in the output.',
  },
  {
    category: 'Quality and Editing',
    question: 'How much editing does the generated blurb typically need?',
    answer:
      'Most generated blurbs require light editing rather than heavy revision. The structure, hook, and stakes are usually strong out of the box. The editing work typically involves swapping any words that don&#39;t match your specific voice, adding details the generator couldn&#39;t know from your summary, and tightening any sentence that feels slightly off. Treat the output as a well-structured first draft rather than a finished product.',
  },
  {
    category: 'Quality and Editing',
    question: 'What should I do if the generated blurb doesn\'t capture my story\'s tone?',
    answer:
      'Try adding explicit tone guidance to your input: "This is a dark, atmospheric story" or "The tone is warm and witty with a lot of banter." Also check whether your raw summary conveys the emotional core of the story or only the plot mechanics. Adding a sentence about how the book is supposed to make readers feel "” the emotional experience you&#39;re delivering "” significantly improves tonal accuracy.',
  },
  {
    category: 'Quality and Editing',
    question: 'Can I generate multiple variants and combine elements from different versions?',
    answer:
      'Absolutely, and this is often the best approach. Generate three to five variants, then identify which version has the strongest opening, which has the best stakes escalation, and which has the most compelling ending. Combine the best elements from different variants into a single refined blurb. This mix-and-match approach often produces better results than any single generated output.',
  },
  {
    category: 'Platform-Specific Use',
    question: 'How do I optimize a blurb for Amazon search?',
    answer:
      'Amazon&#39;s A9 algorithm considers keywords in your book description for discoverability. Include your genre name, subgenre terms, setting, and emotional themes naturally in the text. For example, a "small-town second-chance romance set in Vermont" should include those exact phrases. The generator incorporates genre and setting terms you specify, but you can add additional keyword phrases during editing without disrupting readability.',
  },
  {
    category: 'Platform-Specific Use',
    question: 'Can I use this tool for my query letter hook?',
    answer:
      'Yes. The one-paragraph hook in a query letter follows the same structural rules as a back-cover blurb "” introduce the protagonist, establish the conflict, raise the stakes, end with a question. Specify "query letter hook" as your format and aim for 75 to 100 words. Many agents also appreciate a single-sentence logline above the hook; the generator can produce both.',
  },
  {
    category: 'Platform-Specific Use',
    question: 'How does a Goodreads blurb differ from an Amazon blurb?',
    answer:
      'Goodreads readers are often more engaged book consumers than casual Amazon browsers, and blurbs on Goodreads benefit from slightly more literary language and slightly more specific emotional texture. Both platforms benefit from strong hooks, but Goodreads readers respond well to blurbs that signal what the reading experience feels like, not just what happens. The generator can be directed to produce Goodreads-optimized copy by specifying the platform.',
  },
  {
    category: 'Series and Backlist',
    question: 'Can I use this tool for books that are part of a series?',
    answer:
      'Yes, and series blurbs have specific conventions worth noting. The first book in a series should stand completely alone in its blurb "” do not mention the series or future books unless the series is already established. From the second book onward, you can reference the series name and briefly orient readers who may be joining mid-series, while still focusing primarily on the current book&#39;s conflict.',
  },
  {
    category: 'Series and Backlist',
    question: 'How can I use the generator to refresh a backlist book\'s description?',
    answer:
      'If a backlist title has low conversion rates, a refreshed blurb can significantly improve sales without any other changes. Use the generator to produce a new version based on what you now know about how readers respond to the book "” what they highlight in reviews, what emotions they mention, what they recommend it for. Incorporate that reader-validated language into your input for the most resonant output.',
  },
  {
    category: 'Writing Craft',
    question: 'What is the difference between a blurb and a synopsis?',
    answer:
      'A synopsis is a complete plot summary used by agents and editors "” it tells everything that happens, including the ending. A blurb is a sales tool that withholds the ending and focuses on creating desire rather than conveying information. They serve opposite purposes: a synopsis proves you can plot; a blurb proves you can sell. This tool generates blurbs, not synopses.',
  },
  {
    category: 'Writing Craft',
    question: 'How important is the final line of a blurb?',
    answer:
      'The final line is disproportionately important. Readers who make it to the end of a blurb are already interested "” the final line tips them from interested to committed. Professional blurbs almost always end on an open question, a provocative statement, or a raised stake that can only be resolved by reading the book. Avoid ending with a statement that implies the story will have a satisfying resolution "” end instead with the question that makes the resolution feel necessary.',
  },
  {
    category: 'Writing Craft',
    question: 'Should my blurb mention the title or my author name?',
    answer:
      'No. The title appears above or below the blurb, and your author name is credited separately. Including them inside the blurb text wastes valuable words and looks amateurish. The blurb should function as pure persuasive copy focused entirely on hooking the reader into the story.',
  },
  {
    category: 'Common Problems',
    question: 'Why does my generated blurb feel generic even after editing?',
    answer:
      'Generic blurbs usually result from generic input. If your raw summary uses abstract language ("she goes on a journey of self-discovery") rather than specific story details ("she discovers the man she&#39;s falling for was hired to investigate her family"), the output will be similarly abstract. Revise your input to include the most specific, concrete, surprising elements of your story and regenerate.',
  },
  {
    category: 'Common Problems',
    question: 'How do I write a blurb for a character-driven literary novel with no strong external plot?',
    answer:
      'Literary fiction blurbs work by emotional and atmospheric specificity rather than plot mechanics. Focus your input on the specific emotional situation the protagonist is in, the specific quality of longing or conflict or tension that drives the story, and the particular way the book makes readers feel. The generator calibrated to "literary fiction" will produce copy that sells the reading experience rather than the plot.',
  },
  {
    category: 'Common Problems',
    question: 'My book has multiple POV characters. How do I write a blurb for it?',
    answer:
      'Multi-POV blurbs typically work best by focusing on one or two of the most compelling characters and the overarching conflict that connects all perspectives. If every POV character is equally important, consider structuring the blurb around the central dramatic question that all characters are entangled in, rather than introducing each one. Too many names in a blurb creates confusion rather than complexity.',
  },
  {
    category: 'Advanced Use',
    question: 'Can I use the generator to write taglines and one-liners as well as full blurbs?',
    answer:
      'Yes. A tagline is the single sentence that appears on a book cover or in a promotional header "” it distills the book&#39;s core promise to its most essential and evocative form. Specify "tagline" or "one-line hook" as your format and the generator will produce options in the five-to-fifteen word range that capture the book&#39;s essence. These are useful for social media, advertising copy, and author bio pages.',
  },
  {
    category: 'Advanced Use',
    question: 'How do I adapt a blurb for different marketing contexts like newsletter features, BookBub ads, or Amazon ads?',
    answer:
      'Different platforms have different copy lengths and audience expectations. BookBub featured deal descriptions need to be under 150 characters. Amazon ads display only the first few lines. Newsletter features allow slightly more space and can include a more personal authorial voice. Specify the platform and word/character limit in your input and the generator will produce copy optimized for that specific context.',
  },
  {
    category: 'Advanced Use',
    question: 'Can the generator help me write comparison titles (comps) for my query letter?',
    answer:
      'The generator can help you articulate the "X meets Y" or "for fans of Z" framing that agents look for in comp titles, but selecting the actual titles is judgment that requires market knowledge. Once you&#39;ve identified your comp titles, you can include them in your input and the generator will incorporate them naturally into the query hook "” for example, "In the tradition of [Author], this novel..." or "Fans of [Title] will recognize..."',
  },
];

export const blurbGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
