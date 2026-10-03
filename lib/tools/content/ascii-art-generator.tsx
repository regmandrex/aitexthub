import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>ASCII Art Generator: The Complete Manual for Typography, FIGlet Fonts, and Text Art</h2>
      <p>ASCII art stands as one of the most enduring and oldest branches of digital creativity. Emerging in the 1960s and 1970s before graphical user interfaces existed, computer terminals could only display text characters — yet artists and programmers discovered methods to build portraits, animations, landscapes, and decorative typography utilizing merely the 95 printable characters within the ASCII set. Today, ASCII art remains both culturally vibrant and technically valuable, showing up in terminal applications, code comments, README files, social media bios, email signatures, retro-themed websites, and internet developer humor.</p>
      <p>An ASCII Art Generator accepts user-supplied text and renders large decorative letters composed of smaller characters — a method known as "FIGlet" (derived from "Frank, Ian and Glenn's Letters"). Rather than presenting "HELLO" as five compact characters, a FIGlet renderer creates a multi-line block of ASCII characters that collectively form large, visually styled letterforms. Beyond FIGlet text, ASCII Art Generators can additionally convert images into character-based formats, generate borders and banners, and supply decorative separators for documentation and code.</p>

      <h2>The Evolution of ASCII Art</h2>
      <p>ASCII art possesses a much richer history than most individuals recognize. Its origins stem from typewriter art — decorative visuals produced on mechanical typewriters through character overstriking — which predates computers entirely. However, the digital variant arose alongside the teletype terminal era of the 1960s, when early computer output equipment could print characters onto paper and creative programmers started arranging them into pictures.</p>
      <p>Established in 1963, the American Standard Code for Information Interchange (ASCII) standard set up 95 printable characters that served as universal components for text art. Legacy computing platforms by vendors including Hewlett-Packard, IBM, and DEC featured ASCII art across their promotional items, manuals, and system alerts — the IBM mainframe period featured a rich culture of calendar graphics produced via line printers.</p>
      <p>The peak era of ASCII art emerged alongside Bulletin Board Systems (BBSs) throughout the eighties and early nineties. Prior to the World Wide Web, users dialed into BBS networks using modems to share messages, files, and cultural content. BBS platforms featured complex ASCII art menus, welcome banners, and visuals, fostering an entire artistic movement centered on crafting striking displays from text characters alone. Organizations such as iCE Underground and ACiD Productions crafted detailed ANSI art, which extended ASCII via color escape codes and turned into collectible artifacts among BBS users.</p>
      <p>The FIGlet program was developed in 1991 by Glenn Chappell alongside Ian Chai while studying at the University of California, Santa Cruz. Its title derives from "Frank, Ian and Glenn's Letters" (honoring Frank, a contributor to the project). FIGlet streamlined the process of printing large ASCII titles straight from terminal commands, quickly turning into a staple across Unix systems. The utility remains easily installable via modern package managers (<code>apt install figlet</code>, <code>brew install figlet</code>) and still ranks among the most recognized CLI text banner generators.</p>
      <p>The web era turned ASCII art from a BBS trend into a worldwide movement. Discussion boards on Usenet focused on ASCII art (alt.ascii-art) distributed techniques and designs. Email signatures containing ASCII art grew popular. The rise of messaging apps introduced emoticons, which are basic ASCII facial expressions like :-) and :-( that transformed into modern emoji. Meanwhile, Japanese web culture introduced kaomoji, which are intricate horizontal facial expressions built with Unicode symbols.</p>

      <h2>FIGlet: The Mechanics of ASCII Text Art</h2>
      <p>FIGlet fonts rely on .flf (FIGlet Font) files that determine the rendering of individual characters into multi-line ASCII art graphics. Every font character is outlined as a grid of characters, usually six to ten lines in height, combining to create the visual form of that letter when displayed.</p>

      <h3>FIGlet Font Structure</h3>
      <p>A FIGlet font file starts with a header line defining metrics like height representing row count per character, baseline, maximum width, and special symbols for blank spaces and hard blanks within characters. Character definitions come next, where rows are separated by newlines and characters are marked off using the @ character.</p>
      <p>For instance, the letter "H" inside a basic FIGlet font might appear as:</p>
      <pre><code>{`|_| |_|
|  _  |
|_| |_|`}</code></pre>
      <p>When several characters are set adjacent to each other using correct spacing rules called smushing rules, they create words and sentences that appear as large-scale text.</p>

      <h3>Rules for Kerning and Smushing</h3>
      <p>FIGlet applies advanced guidelines regarding the placement of adjacent characters. Kerning shifts characters as close as possible without colliding. Smushing extends this by combining overlapping edge characters following precise guidelines:</p>
      <ul>
        <li><strong>Equal character smushing</strong>: Two identical characters combine into a single one</li>
        <li><strong>Underscore smushing</strong>: Specific alternative characters replace the underscore</li>
        <li><strong>Hierarchy smushing</strong>: Symbols of specific types substitute others within a hierarchy</li>
        <li><strong>Opposite pair smushing</strong>: Inverse bracket/brace/parenthesis sets merge into a vertical bar</li>
        <li><strong>Big X smushing</strong>: / and \ merge into X</li>
        <li><strong>Hardblank smushing</strong>: Hard blank characters merge with any element</li>
      </ul>
      <p>Various FIGlet renderers produce slightly distinct looks using identical fonts because of smushing rules — various tools enforce these guidelines with differing levels of strictness.</p>

      <h3>Popular FIGlet Fonts</h3>
      <p>A wide variety of FIGlet fonts are available, offering unique visual styles. Some of the most widely used consist of:</p>
      <ul>
        <li><strong>Standard</strong>: The baseline FIGlet typeface — legible, neat, and medium-sized</li>
        <li><strong>Big</strong>: Taller, much bolder characters featuring heavy lines</li>
        <li><strong>Banner</strong>: Broad, block-style letters constructed from # symbols</li>
        <li><strong>Block</strong>: Solid block typography carrying a contemporary, strong look</li>
        <li><strong>Bubble</strong>: Circular-bound rounded characters that feel casual and approachable</li>
        <li><strong>Digital</strong>: Seven-segment layout reminiscent of scoreboards and digital timepieces</li>
        <li><strong>Doom</strong>: Sharp, fierce characters frequently seen in metal and gaming culture</li>
        <li><strong>Ghost</strong>: Hollow-centered characters defined by outlines</li>
        <li><strong>Graffiti</strong>: Urban art inspired tag lettering</li>
        <li><strong>Larry 3D</strong>: Characters featuring a 3D perspective shadow effect</li>
        <li><strong>Lean</strong>: Italicized characters slanting toward the right</li>
        <li><strong>Mini</strong>: Small and dense characters built for tight areas</li>
        <li><strong>Ogre</strong>: Heavy, prominent typography carrying a medieval or fantasy vibe</li>
        <li><strong>Script</strong>: Cursive, calligraphic-style lettering</li>
        <li><strong>Shadow</strong>: Characters enhanced with a drop shadow</li>
        <li><strong>Slant</strong>: Tilted characters resembling a more intense italic style</li>
        <li><strong>Small</strong>: A smaller variant of Standard ideal for restricted spaces</li>
        <li><strong>Speed</strong>: Extremely thin, compressed letters implying movement</li>
        <li><strong>Star Wars</strong>: Typography mimicking the opening crawl sequences of Star Wars movies</li>
        <li><strong>Thin</strong>: Slender one-stroke characters — graceful and minimal</li>
      </ul>

      <h2>ASCII Art in Programming and Software Development</h2>
      <p>Despite being an age-old method, ASCII art continues to see active use in modern software creation across various contexts.</p>

      <h3>README Files and Project Documentation</h3>
      <p>ASCII art banners are a staple of open-source project README documents. A large ASCII art rendering of a project title builds immediate visual impact, establishes brand recognition, and makes the README much more memorable. Projects ranging from major open-source tools to indie libraries utilize ASCII art headers to help their GitHub pages stand out.</p>
      <p>The tradition of large ASCII art project titles in READMEs goes back to the Unix heritage where command-line utilities would exhibit a startup banner. Tools such as neofetch (system info display), cowsay (speaking ASCII cow), and cmatrix (Matrix rain visual) sustain this practice as both functional utilities and cultural items.</p>

      <h3>Terminal Application Headers</h3>
      <p>CLI (command-line interface) programs leverage ASCII art for startup banners, help menus, and version screens. When a developer executes your CLI tool, an ASCII art banner of the tool's name delivers a professional, polished feel and signifies active, steady maintenance. Libraries such as figlet.js, pyfiglet, and chalk (for ANSI colors) make integrating ASCII art banners effortless in any language.</p>

      <h3>Source Code Comments and Section Dividers</h3>
      <p>Large codebases sometimes employ ASCII art "section dividers" within source code comments to visually partition major sections. A prominent ASCII art header makes key boundaries unmissable when scrolling swiftly through thousands of code lines:</p>
      <pre><code>{`/*
 * ╔══════════════════════════════════╗
 * ║      AUTHENTICATION MODULE       ║
 * ╚══════════════════════════════════╝
 */`}</code></pre>
      <p>This method proves especially common in embedded systems, game engine source code, and large monolithic C/C++ files where visual navigation helpers are beneficial.</p>

      <h3>Changelogs and Git Commit Messages</h3>
      <p>Major version releases sometimes apply ASCII art inside changelogs or commit logs to emphasize the importance of the update. A "Version 2.0" launch might feature an ASCII art "2.0" banner within the changelog to visually highlight the milestone. This is purely visual yet introduces personality and celebration to release notes.</p>

      <h3>Startup Output and Error Messages</h3>
      <p>Certain applications incorporate ASCII art within error messages — especially critical errors — to ensure they are impossible to miss. A server displaying a giant ASCII art "ERROR" upon crashing is far more noticeable than plain text output scrolling by inside a log file. Likewise, startup success messages carrying ASCII art logos offer instant visual verification that a service initialized properly.</p>

      <h2>ASCII Art in Social Media and Digital Culture</h2>

      <h3>Twitter and Social Networks</h3>
      <p>ASCII art across social networks has experienced a varied history. Twitter's monospaced font rendering was never guaranteed, rendering pure ASCII art hit-or-miss. Yet, Unicode box-drawing symbols, block elements, and Braille characters (which supply extremely fine pixel-like control) have enabled intricate text-based art on platforms supporting Unicode and monospace viewing.</p>
      <p>"Text art" utilizing Unicode block characters (█, ▄, ▀, ░, ▒, ▓) permits much more detailed image depiction than traditional ASCII art — these characters divide a cell into quarters and halves, effectively doubling or quadrupling the visual resolution relative to employing a single character per cell.</p>

      <h3>Discord and Chat Platforms</h3>
      <p>Discord presents text in monospace when enclosed within code blocks (triple backtick), establishing it as the preferred platform for ASCII art sharing. Discord servers dedicated to ASCII art and "text art" exist, complete with bots generating ASCII art on demand. The blend of monospace rendering and emoji support makes Discord exceptionally well-suited for hybrid ASCII/emoji creations.</p>

      <h3>Email Signatures</h3>
      <p>ASCII art email signatures were widespread during the 1990s and early 2000s, and while they have faded in corporate settings (where HTML email with logos is standard), they endure among developer and technical communities as a medium for personal expression. A tasteful ASCII art signature in plain-text emails — particularly on open-source mailing lists — remains viewed as charming instead of outdated.</p>

      <h3>Twitch and Streaming</h3>
      <p>Twitch chat's monospace layout and rapid scroll generate a unique canvas for ASCII art. Coordinated "chat art" — where hundreds of viewers simultaneously input specific characters — can generate images that briefly appear in the chat feed. This form of collaborative ASCII art is temporary and community-driven, needing coordination via extensions and browser scripts.</p>

      <h2>Image to ASCII Art Translation</h2>
      <p>Beyond text-based FIGlet banners, ASCII Art Generators can transform actual images into character-based formats. This process maps image pixels to ASCII characters based on their luminance:</p>

      <h3>Brightness Mapping</h3>
      <p>Different ASCII characters possess varying visual "weight" — the ratio of dark ink to light space when printed. Characters are ranked roughly from lightest to darkest: space, period (.), comma, colon, semicolon, plus, equals, asterisk, at sign (@), hash (#), with several other characters filling the spectrum. By converting an image to grayscale and mapping brightness levels to characters along this scale, you can build a recognizable character-based version of the image.</p>
      <p>A standard scale for luminance might employ <code>" .:-=+*#%@"</code> (ten steps ranging from bright to dark) or an expanded palette containing seventy symbols for smoother transitions. Selecting your glyph collection profoundly impacts the visual appeal of the final output.</p>

      <h3>Resolution and Aspect Ratio</h3>
      <p>Transforming pictures into ASCII art demands careful management of proportions. Console symbols are generally taller than they are wide (roughly a 2:1 proportion), meaning that when mapping a single symbol per pixel, the output looks vertically elongated. Adjusting by sampling alternate rows (utilizing half the vertical detail) or employing half-block symbols (▀ ▄) that fit two rows into one symbol height fixes the proportion.</p>

      <h3>Color ASCII Art</h3>
      <p>Merging ASCII symbols with ANSI color sequences enables chromatic ASCII art that retains both the symbol pattern and the chromatic data of the starting photo. Every symbol is tinted using the ANSI text color nearest to the initial pixel color. This yields substantially more discernible outcomes than black-and-white ASCII art, especially for pictures featuring subtle color transitions.</p>

      <h2>Extended Character Sets and Unicode Art</h2>
      <p>Contemporary "ASCII art" frequently employs Unicode symbols far past the standard 95-symbol ASCII collection. This broadened palette significantly boosts the creative potential:</p>

      <h3>Box Drawing Characters</h3>
      <p>Unicode's box drawing block (U+2500–U+257F) supplies single lines, double lines, thick lines, dashed lines, and all corner/junction variations for building exact rectangular frames and grids in text:</p>
      <pre><code>{`┌──────────────┐
│  Box Drawing │
│  Characters  │
└──────────────┘

╔══════════════╗
║ Double Lines ║
╚══════════════╝`}</code></pre>

      <h3>Block Elements</h3>
      <p>Block elements (U+2580–U+259F) offer half-block, quarter-block, and eighth-block symbols that allow much higher-resolution images than classic ASCII. The symbols ▀ (upper half block), ▄ (lower half block), ▌ (left half), ▐ (right half), and the full block █ constitute the foundation of block-pixel art where each terminal cell actually holds 2–8 sub-pixels.</p>

      <h3>Braille Characters</h3>
      <p>Every Braille symbol (U+2800–U+28FF) holds 8 dot locations in a 2×4 matrix. By treating each Braille symbol as an 8-pixel cell, users can attain 4× the horizontal detail and 4× the vertical detail of standard ASCII art (8 pixels per symbol cell versus 1). Software like jp2a and img2txt utilize Braille symbols for high-resolution text-based image rendering in modern shells.</p>

      <h3>Symbol and Emoji Art</h3>
      <p>The growth of emoji (Unicode 6.0 in 2010 and growing with every Unicode release) generated fresh avenues for artistic text graphics. "Emoji art" blends emoji symbols to build pictures and scenarios, while hybrid arrangements utilize classic ASCII symbols alongside emoji for mixed-media text designs.</p>

      <h2>Libraries and Tools for ASCII Art Generation</h2>

      <h3>Command-Line Tools</h3>
      <ul>
        <li><strong>figlet</strong>: The initial version — produces FIGlet text titles. <code>figlet "Hello World"</code></li>
        <li><strong>toilet</strong>: An upgraded figlet featuring color capabilities and extra filters. <code>toilet -f big -F metal "HELLO"</code></li>
        <li><strong>cowsay</strong>: Produces an ASCII art bovine with a dialogue box — a cherished Unix favorite. <code>cowsay "Hello"</code></li>
        <li><strong>lolcat</strong>: Applies rainbow ANSI colors to any text or ASCII art routed through it</li>
        <li><strong>jp2a</strong>: Transforms JPEG pictures into ASCII art within the console</li>
        <li><strong>img2txt</strong>: Part of the libcaca package — transforms pictures into colored ASCII art</li>
        <li><strong>ascii-image-converter</strong>: Contemporary Go utility for translating pictures into ASCII/Unicode art</li>
      </ul>

      <h3>JavaScript Libraries</h3>
      <ul>
        <li><strong>figlet.js</strong>: Fully featured FIGlet port for Node.js and web tools. Handles hundreds of typefaces and the complete FIGlet standard</li>
        <li><strong>ascii-art</strong>: Extensive package encompassing text graphics, image art, and grid creation</li>
        <li><strong>cfonts</strong>: Striking terminal typefaces for Node.js featuring ANSI color backing</li>
        <li><strong>boxen</strong>: Builds striking frames within the shell — handy for CLI status readouts</li>
      </ul>

      <h3>Python Libraries</h3>
      <ul>
        <li><strong>pyfiglet</strong>: Full Python port of FIGlet featuring the complete typeface collection</li>
        <li><strong>art</strong>: Python package featuring text graphics and ASCII art derived from pictures</li>
        <li><strong>Pillow + custom</strong>: Converting images into ASCII art programmatically utilizing PIL/Pillow</li>
      </ul>

      <h2>Practical Uses for ASCII Art Today</h2>

      <h3>Developer Tools and CLIs</h3>
      <p>When creating developer utilities, version displays and startup banners in ASCII art bring charm and a polished feel. Numerous applications like Next.js, Vite, Create React App, and others present stylized text or ASCII art upon booting up. This practice serves as a standard professional convention within the developer tool ecosystem.</p>

      <h3>Print-Friendly Certificates and Badges</h3>
      <p>Messages of acknowledgment, badges, and plain-text certificates featuring ASCII art borders can be printed on any hardware without requiring specific fonts or layouts, making them valuable for command-line games, terminal-based educational courses, and text-only communication systems.</p>

      <h3>Placeholder Text in Wireframes</h3>
      <p>Programmers sometimes utilize placeholder images and ASCII art boxes within early mockups and wireframes shared as plain text or inside monospace-rendered environments like Slack threads, Jira tickets, and GitHub issues.</p>

      <h3>Game Development</h3>
      <p>Text-based adventures, terminal games, and roguelikes form a thriving category that relies entirely upon Unicode/ASCII art for visual presentation. Countless terminal-based games and titles like Dwarf Fortress (ASCII mode) and NetHack employ ASCII characters as their primary graphic medium. Rather than acting as a technical restriction, the ASCII art aesthetic is chosen deliberately, with players actively favoring the abstract and imaginative nature of text-driven graphics.</p>

      <h3>Retro Aesthetic Design</h3>
      <p>The retro computing style and terminal aesthetic remain popular in UI design, particularly for cyberpunk-influenced design systems, hacker-focused projects, and developer tools. ASCII art integrates smoothly with this look, recalling the atmosphere of early personal computers, BBS culture, and vintage Unix systems.</p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is ASCII art?',
    answer: 'ASCII art consists of visual designs produced using the ninety-five printable characters of the ASCII character set. It covers both image-based creations, which arrange characters to form pictures, and text banners, which render large decorative letters using smaller symbols. Originating during the 1960s and 1970s on text-only terminals, ASCII art remains popular in online spaces, terminal software, and developer culture.',
  },
  {
    category: 'General',
    question: 'What is FIGlet and how does it work?',
    answer: 'Developed in 1991, FIGlet (Frank, Ian and Glenn\'s Letters) is software designed to produce large ASCII text banners. It relies on font files (.flf) that specify how individual characters render as multi-line blocks of ASCII symbols. Users provide text input, and the utility translates it into oversized decorative lettering. Available on Linux and Mac through commands like brew install figlet and apt install figlet, the tool has been ported to every major programming language.',
  },
  {
    category: 'General',
    question: 'What is the difference between ASCII art and Unicode art?',
    answer: 'ASCII art depends exclusively on the ninety-five printable symbols outlined in the 7-bit ASCII standard from 1963. Unicode art expands on this by incorporating thousands of extra characters, including emoji, Braille characters for high-resolution pixel art, block elements (█▄▀), and box-drawing symbols (─│┌┐). Contemporary generators of ASCII art frequently utilize Unicode characters to enhance visual fidelity while preserving the classic text-art style.',
  },
  {
    category: 'Fonts',
    question: 'What are the most popular FIGlet fonts?',
    answer: 'Among the most frequently utilized FIGlet fonts are Standard (clean default), Big (tall prominent letters), Banner (wide blocky # characters), Block (solid modern letters), Bubble (rounded circular letters), Digital (seven-segment display style), Doom (angular gaming aesthetic), Graffiti (street-art style), Larry 3D (3D perspective shadow), Slant (exaggerated italic), Star Wars (movie crawl style), and Shadow (drop shadow effect). You can find hundreds of alternative fonts directly at figlet.org.',
  },
  {
    category: 'Fonts',
    question: 'How do I choose the right ASCII art font?',
    answer: 'Select your font based on context: use Standard or Small for readable, clean technical README documents; Big or Block for striking banners; Digital or Shadow for a contemporary tech feel; Doom or Graffiti for metal and gaming aesthetics; Bubble or Script for casual or friendly projects; and Star Wars for dramatic, reveal-style headers. Always keep available column width in mind, as certain fonts demand over eighty columns per character for proper rendering.',
  },
  {
    category: 'Usage',
    question: 'How do I add ASCII art to a README file?',
    answer: 'Wrap the ASCII art in a code block (triple backticks) to ensure monospace rendering: ```\\n<ascii art here>\\n```. GitHub renders code blocks in monospace, preserving character spacing. Without a code block, Markdown may collapse spaces and break the art. For centered display, there\'s no standard Markdown centering, but HTML `<pre>` tags with `align="center"` work on GitHub.',
  },
  {
    category: 'Usage',
    question: 'How do I add an ASCII art banner to a Node.js CLI app?',
    answer: 'Run `npm install figlet` to install figlet.js. Next, write: `import figlet from "figlet"; figlet("My Tool", (err, data) => { console.log(data); });`. For synchronous usage, use `figlet.textSync("My Tool", { font: "Big" })`. To build polished startup banners for your command-line interface, pair this with chalk for ANSI colors or boxen for framing borders.',
  },
  {
    category: 'Usage',
    question: 'How do I generate ASCII art in Python?',
    answer: 'Use pyfiglet: `pip install pyfiglet`. Then: `import pyfiglet; result = pyfiglet.figlet_format("Hello", font="big"); print(result)`. List available fonts: `pyfiglet.FigletFont.getFonts()`. For image-to-ASCII conversion, use the art library or implement your own with Pillow: convert to grayscale, resize, map brightness values to a character gradient.',
  },
  {
    category: 'Technical',
    question: 'What does "smushing" mean in FIGlet?',
    answer: 'Smushing is FIGlet\'s technique for merging overlapping edge characters when adjacent letters are placed close together. Six smushing rules handle cases like: two identical characters becoming one, opposite bracket pairs ([] → |), "/" and "\\" becoming "X", etc. Smushing produces tighter, more compact text art. "Kerning" is the milder version that just removes blank spaces without merging characters.',
  },
  {
    category: 'Technical',
    question: 'How does the conversion from pictures to ASCII art function?',
    answer: 'Image-to-ASCII conversion: (1) Transform image into grayscale. (2) Scale to desired character dimensions (factoring in character aspect ratio — typically characters are roughly 2× taller than wide). (3) Translate each pixel brightness to a character from a ramp such as " .:-=+*#%@" where space represents lightest and @ represents darkest. (4) Combine characters into lines. Color variants also incorporate ANSI color codes corresponding to each pixel shade.',
  },
  {
    category: 'Technical',
    question: 'Why does my ASCII art appear stretched or warped?',
    answer: 'ASCII art warping typically stems from an aspect ratio issue. Terminal characters are roughly twice as tall as they are wide (about 8×16 pixels per character). When your generator fails to factor this in, pictures look vertically elongated. Resolve this by: (1) Applying half the vertical resolution (sampling every alternate row), (2) Utilizing half-block characters (▀▄) for 2× vertical resolution, or (3) Modifying the output width/height proportion by 2:1.',
  },
  {
    category: 'Platforms',
    question: 'How can I properly show ASCII art on Discord?',
    answer: 'Wrap ASCII art in a code block in Discord: use triple backticks (\\`\\`\\`) to create a code block. Discord renders code blocks in monospace, preserving all spacing. Without the code block, Discord uses a proportional font that collapses spaces and ruins the art. For large art, be aware of Discord\'s 2000-character message limit.',
  },
  {
    category: 'Platforms',
    question: 'Will ASCII art function properly within electronic mail?',
    answer: 'Displaying ASCII art in plain-text messaging demands an email environment set to a monospace typeface. Because most email programs default to proportional fonts for unformatted text, ASCII character alignments frequently get distorted. When sending HTML emails, enclose the graphic inside a <pre> tag styled with a fixed-width CSS font family. For strictly text-based channels (such as programmer discussion lists), readers usually view text in fixed-width fonts. Be sure to verify formatting across different email applications before using ASCII designs in production messages.',
  },
  {
    category: 'Culture',
    question: 'What was ANSI art and in what ways does it differ from ASCII art?',
    answer: 'ANSI art builds upon ASCII art by incorporating ANSI escape codes for cursor placement and 16 foreground and background colors. Widely favored on BBS networks throughout the late 1980s and 1990s, collectives such as ACiD Productions crafted complex multi-screen pieces representing the pinnacle of pre-web digital art. While ASCII art is strictly monochrome text, ANSI art introduces vibrant colors. Both rely on text characters, yet ANSI art delivers significantly greater visual richness.',
  },
  {
    category: 'Culture',
    question: 'What exactly is a kaomoji?',
    answer: 'Kaomoji (顔文字) are Japanese-style emoticons that read horizontally rather than being rotated 90°. They use Unicode characters to create expressive faces: (╯°□°）╯︵ ┻━┻ (table flip), (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ (celebration), ¯\\_(ツ)_/¯ (shrug). Kaomoji represent a distinct artistic tradition from Western ASCII art, using a wider Unicode character palette and reading face-forward rather than sideways.',
  },
  {
    category: 'Tools',
    question: 'What is the cowsay command and what makes it famous?',
    answer: 'cowsay is a Unix utility developed by Tony Monroe in 1999 that produces an ASCII art cow featuring a speech bubble with your inputted text: `cowsay "Hello"`. It turned into a cherished Unix custom and running inside joke. The tool provides alternative characters via the -f parameter: `-f tux` for Tux the Linux penguin, `-f dragon` for a dragon. Users frequently pipe it with fortune for randomized messages: `fortune | cowsay`.',
  },
  {
    category: 'Tools',
    question: 'What is toilet and how does it vary from figlet?',
    answer: 'TOIlet (The Other Implementation\'s Letters) serves as a figlet alternative that introduces ANSI color capabilities along with extra output filters. It works with figlet .flf typefaces alongside its proprietary .tlf format. Main benefits over figlet include integrated color filters (--filter metal, --filter gay for rainbow, --filter border), broader Unicode compatibility, and more consistent maintenance. Command syntax: `toilet -f big -F metal "HELLO"` for metallic hued large text.',
  },
  {
    category: 'Tools',
    question: 'What are box-drawing Unicode characters and how do people use them?',
    answer: 'Box-drawing symbols (Unicode U+2500–U+257F) consist of single-line (─│┌┐└┘├┤┬┴┼), double-line (═║╔╗╚╝╠╣╦╩╬), and thick variations designed for creating exact rectangular borders and tabular layouts within text. They produce much neater boundaries than standard ASCII symbols like +, -, and |. They are utilized in command-line interfaces, data tables, README decorative frames, and source code comment separators.',
  },
  {
    category: 'Tools',
    question: 'What is Braille art and why does it feature high resolution?',
    answer: 'Braille Unicode characters (U+2800–U+28FF) each feature a 2x4 arrangement of dot locations yielding 8 pixels per symbol. By viewing every Braille symbol as a pixel block, you achieve quadruple the horizontal and vertical resolution relative to single-character-per-pixel ASCII art. Each console cell effectively houses 8 sub-pixels. Programs like jp2a and contemporary command-line graphic renderers leverage Braille symbols to achieve superior text-based picture rendering.',
  },
  {
    category: 'SEO',
    question: 'Am I able to use ASCII art for website favicons or logos?',
    answer: 'ASCII art cannot be directly converted into browser favicons, which demand graphic formats like .ico or .png. Nevertheless, ASCII art functions well as decorative elements inside plain-text sections, terminal-displayed web pages, or text-based logo substitutes within developer project README files. Certain sites incorporate ASCII art within their HTML source code, viewable through View Source, serving as a hidden easter egg or brand signature for technically inclined guests.',
  },
  {
    category: 'Advanced',
    question: 'What is Sixel graphics and how does it relate to ASCII art?',
    answer: 'Sixel is a pixel graphics format created by DEC for computer terminals, showing pictures as tinted "sixels" (vertical slices of 6 pixels). Current terminal emulators such as mlterm, mintty, and iTerm2 handle Sixel, allowing real bitmap images to appear inside terminals. Sixel is technically distinct from ASCII art but shows how terminal graphics evolved — moving from plain text art to full image rendering inside terminal emulators.',
  },
  {
    category: 'Advanced',
    question: 'How can I generate animated ASCII art?',
    answer: 'Terminal animation works by overwriting previous output using ANSI escape codes: \\033[H\\033[2J clears the screen, \\033[A moves cursor up. In JavaScript: use process.stdout.write() with carriage returns. Libraries: blessed and neo-blessed for terminal UI with animation, asciinema for recording terminal sessions including ASCII animations. The classic Matrix rain effect uses this technique: new characters print over old ones in a loop.',
  },
  {
    category: 'Advanced',
    question: 'How do large language models handle ASCII art generation?',
    answer: 'LLMs (such as ChatGPT and Claude) face difficulties with ASCII art creation because they interpret text as tokens instead of visual symbols. Layout and exact character placement pose challenges for transformer models. For consistent ASCII art, choose specialized FIGlet tools instead of relying on an LLM. LLMs excel at describing ASCII art, breaking it down, and identifying basic patterns, yet they frequently generate skewed results when trying to build exact character-grid graphics.',
  },
  {
    category: 'General',
    question: 'Is there a standard for ASCII art file formats?',
    answer: 'No universal standard exists. FIGlet fonts utilize the .flf format (outlined in the FIGlet specification). ANSI graphics from BBS eras relied on .ans files (ANSI escape code sequences). The creative subculture created SAUCE (Standard Architecture for Universal Comment Extensions) as a metadata format for text-based artwork documents. Contemporary ASCII art generally lives within basic .txt documents or is embedded right inside source code. This absence of a single standard highlights ASCII art\'s grassroots, community-centered roots.',
  },
];

export const asciiArtGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
