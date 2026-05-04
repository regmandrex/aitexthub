import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>ASCII Art Generator: The Complete Guide to Text Art, FIGlet Fonts, and Creative Typography</h2>
      <p>
        ASCII art is one of the oldest and most enduring forms of digital creativity. Predating graphical user interfaces, it emerged in the 1960s and 1970s when computer terminals could only display text characters — yet programmers and artists found ways to create portraits, landscapes, animations, and decorative typography using nothing but the 95 printable characters in the ASCII character set. Today, ASCII art remains culturally vibrant and technically useful, appearing in terminal applications, README files, code comments, social media profiles, email signatures, retro-themed websites, and developer humor across the internet.
      </p>
      <p>
        An ASCII art generator takes text you provide and renders it as large decorative letters built from smaller characters — a technique called "FIGlet" (from "Frank, Ian and Glenn's Letters"). Instead of displaying "HELLO" as five small characters, a FIGlet renderer produces a multi-line block of ASCII characters that together form large, visually styled versions of those letters. Beyond FIGlet text, ASCII art generators can also convert images to character-based representations, create borders and banners, and produce decorative separators for code and documentation.
      </p>

      <h2>The History of ASCII Art</h2>
      <p>
        ASCII art has a richer history than most people realize. Its roots trace back to typewriter art — decorative images created on mechanical typewriters by overstriking characters — which predates computers entirely. But the digital form emerged with the teletype terminal era of the 1960s, when early computer output devices could print characters on paper and creative programmers began arranging them into pictures.
      </p>
      <p>
        The ASCII character set itself was standardized in 1963 (American Standard Code for Information Interchange), providing 95 printable characters that became the universal building blocks of text-based art. Early computer systems from manufacturers like DEC, IBM, and Hewlett-Packard all produced ASCII art in their documentation, system messages, and promotional materials — the IBM mainframe era had an entire tradition of calendar art printed on line printers.
      </p>
      <p>
        The golden age of ASCII art arrived with BBSs (Bulletin Board Systems) in the 1980s and early 1990s. Before the World Wide Web, people connected to BBSs via dial-up modems to exchange files, messages, and culture. BBS systems had elaborate ASCII art welcome screens, menus, and decorations — a whole artistic subculture developed around creating stunning visual displays using only text characters. Groups like ACiD Productions and iCE Underground produced elaborate ANSI art (an extension of ASCII using color escape codes) that became collectors' items in the BBS community.
      </p>
      <p>
        FIGlet specifically was created in 1991 by Glenn Chappell and Ian Chai at the University of California, Santa Cruz. The name stands for "Frank, Ian and Glenn's Letters" (Frank was an earlier contributor). FIGlet allowed easy generation of large text banners from command-line input, and it became a Unix staple. The figlet command is still available in package managers today (<code>apt install figlet</code>, <code>brew install figlet</code>) and remains one of the most widely used text banner tools.
      </p>
      <p>
        The internet era transformed ASCII art from a BBS phenomenon into a global culture. Usenet newsgroups dedicated to ASCII art (alt.ascii-art) shared techniques and creations. Email signatures with ASCII art became common. The advent of instant messaging brought "emoticons" — simple ASCII facial expressions like :-) and :-( that evolved into today's emoji. Japanese internet culture developed "kaomoji" — complex horizontal face expressions using Unicode characters.
      </p>

      <h2>FIGlet: How ASCII Text Art Works</h2>
      <p>
        FIGlet fonts are defined in .flf (FIGlet Font) files that specify how each character should be rendered as a multi-line ASCII art block. Each character in the font is described as a rectangular grid of characters, typically 6–10 lines tall, that together form the visual shape of that letter when printed.
      </p>

      <h3>FIGlet Font Structure</h3>
      <p>
        A FIGlet font file begins with a header line specifying parameters like height (number of rows per character), baseline, max width, and special characters used for blank space and hard blanks within characters. Each character definition follows, with rows separated by newlines and characters delimited by the @ symbol.
      </p>
      <p>
        For example, the letter "H" in a simple FIGlet font might look like:
      </p>
      <pre><code>{`|_| |_|
|  _  |
|_| |_|`}</code></pre>
      <p>
        When multiple characters are placed side by side with appropriate spacing (smushing rules), they form words and sentences that read like oversized text.
      </p>

      <h3>Smushing and Kerning Rules</h3>
      <p>
        FIGlet implements sophisticated rules for how adjacent characters are placed next to each other. "Kerning" moves characters as close together as possible without overlapping. "Smushing" goes further, merging overlapping edge characters according to specific rules:
      </p>
      <ul>
        <li><strong>Equal character smushing</strong>: Two identical characters smush into one</li>
        <li><strong>Underscore smushing</strong>: Underscore is replaced by certain other characters</li>
        <li><strong>Hierarchy smushing</strong>: Characters in certain classes replace others in a hierarchy</li>
        <li><strong>Opposite pair smushing</strong>: Opposite bracket/brace/parenthesis pairs smush into vertical bar</li>
        <li><strong>Big X smushing</strong>: / and \ smush into X</li>
        <li><strong>Hardblank smushing</strong>: Hard blank characters smush with anything</li>
      </ul>
      <p>
        The smushing rules are what give different FIGlet renderers slightly different appearances even with the same font — different implementations apply these rules with varying strictness.
      </p>

      <h3>Popular FIGlet Fonts</h3>
      <p>
        Hundreds of FIGlet fonts exist, each with a distinct visual character. The most popular include:
      </p>
      <ul>
        <li><strong>Standard</strong>: The default FIGlet font — clean, readable, moderate size</li>
        <li><strong>Big</strong>: Taller, more prominent letters with thick strokes</li>
        <li><strong>Banner</strong>: Wide blocky letters made of # characters</li>
        <li><strong>Block</strong>: Solid block letters with a bold, modern appearance</li>
        <li><strong>Bubble</strong>: Rounded letters enclosed in circles — friendly and casual</li>
        <li><strong>Digital</strong>: Seven-segment display style — resembles digital clocks and scoreboards</li>
        <li><strong>Doom</strong>: Angular, intimidating letters popular in gaming and metal aesthetics</li>
        <li><strong>Ghost</strong>: Outlined letters with a hollow interior</li>
        <li><strong>Graffiti</strong>: Tag-style letters evocative of street art</li>
        <li><strong>Larry 3D</strong>: Letters with three-dimensional perspective shadow</li>
        <li><strong>Lean</strong>: Italic-style letters that lean to the right</li>
        <li><strong>Mini</strong>: Small, compact letters for space-constrained uses</li>
        <li><strong>Ogre</strong>: Bold, heavy letters with a fantasy/medieval aesthetic</li>
        <li><strong>Script</strong>: Calligraphic cursive-style letters</li>
        <li><strong>Shadow</strong>: Letters with a drop shadow effect</li>
        <li><strong>Slant</strong>: Angled letters similar to italic text but more exaggerated</li>
        <li><strong>Small</strong>: Compact version of Standard — good for tight spaces</li>
        <li><strong>Speed</strong>: Very narrow condensed letters suggesting motion</li>
        <li><strong>Star Wars</strong>: Letters styled after the opening crawl of Star Wars films</li>
        <li><strong>Thin</strong>: Narrow single-stroke letters — elegant and minimal</li>
      </ul>

      <h2>ASCII Art in Programming and Development</h2>
      <p>
        Despite being a decades-old technique, ASCII art remains actively used in modern software development across several contexts.
      </p>

      <h3>README Files and Documentation</h3>
      <p>
        ASCII art banners are a staple of open-source project README files. A large ASCII art rendering of a project name creates immediate visual impact, establishes brand identity, and makes the README more memorable. Projects from major open-source tools to indie libraries use ASCII art headers to make their GitHub pages stand out.
      </p>
      <p>
        The convention of large ASCII art project names in READMEs traces back to the Unix tradition where command-line tools would display a startup banner. Tools like neofetch (system information display), cowsay (talking ASCII cow), and cmatrix (Matrix rain effect) maintain this tradition as both functional tools and cultural artifacts.
      </p>

      <h3>Terminal Application Headers</h3>
      <p>
        CLI (command-line interface) applications use ASCII art for startup banners, help screens, and version displays. When a developer runs your CLI tool, an ASCII art banner of the tool's name creates a professional, polished impression and indicates active, confident maintenance. Libraries like figlet.js, pyfiglet, and chalk (for ANSI colors) make adding ASCII art banners trivial in any language.
      </p>

      <h3>Code Comments and Section Headers</h3>
      <p>
        Large codebases sometimes use ASCII art "section dividers" in source code comments to visually separate major sections. A prominent ASCII art header makes major boundaries unmissable when scrolling quickly through thousands of lines of code:
      </p>
      <pre><code>{`/*
 * ╔══════════════════════════════════╗
 * ║      AUTHENTICATION MODULE       ║
 * ╚══════════════════════════════════╝
 */`}</code></pre>
      <p>
        This technique is particularly common in embedded systems, game engine source code, and large monolithic C/C++ files where visual navigation aids are valuable.
      </p>

      <h3>Git Commit Messages and Changelogs</h3>
      <p>
        Major version releases sometimes use ASCII art in changelogs or commit messages to emphasize the significance of the change. A "Version 2.0" release might have an ASCII art "2.0" banner in the changelog to mark the milestone visually. This is purely aesthetic but adds personality and celebration to release notes.
      </p>

      <h3>Error Messages and Startup Output</h3>
      <p>
        Some applications use ASCII art in error messages — particularly catastrophic errors — to make them impossible to miss. A server that displays a giant ASCII art "ERROR" when it crashes is significantly more noticeable than plain text output scrolling past in a log file. Similarly, startup success messages with ASCII art logos give immediate visual confirmation that a service initialized correctly.
      </p>

      <h2>ASCII Art in Social Media and Online Culture</h2>

      <h3>Twitter and Social Platforms</h3>
      <p>
        ASCII art on social media has had a complex history. Twitter's monospaced font rendering was never guaranteed, making pure ASCII art hit-or-miss. However, Unicode box-drawing characters, block elements, and Braille characters (which provide very fine-grained pixel-like control) have enabled elaborate text-based art on platforms that support Unicode and monospace display.
      </p>
      <p>
        "Text art" using Unicode block characters (█, ▄, ▀, ░, ▒, ▓) allows much finer-grained image representation than traditional ASCII art — these characters divide a cell into quarters and halves, effectively doubling or quadrupling the visual resolution compared to using a single character per cell.
      </p>

      <h3>Discord and Chat Applications</h3>
      <p>
        Discord renders text in monospace when wrapped in code blocks (triple backtick), making it the go-to platform for ASCII art sharing. Discord servers dedicated to ASCII art and "text art" exist, with bots that generate ASCII art on demand. The combination of monospace rendering and emoji support makes Discord particularly well-suited for hybrid ASCII/emoji compositions.
      </p>

      <h3>Email Signatures</h3>
      <p>
        ASCII art email signatures were ubiquitous in the 1990s and early 2000s, and while they've faded in corporate environments (where HTML email with logos is standard), they persist in developer and technical communities as a form of personal expression. A tasteful ASCII art signature in plain-text emails — particularly in open-source mailing lists — is still considered charming rather than dated.
      </p>

      <h3>Twitch and Streaming</h3>
      <p>
        Twitch chat's monospace display and rapid scroll creates a unique canvas for ASCII art. Coordinated "chat art" — where hundreds of viewers simultaneously type specific characters — can produce images that briefly appear in the chat stream. This form of collaborative ASCII art is ephemeral and community-driven, requiring coordination through extensions and browser scripts.
      </p>

      <h2>Image to ASCII Art Conversion</h2>
      <p>
        Beyond text-based FIGlet banners, ASCII art generators can convert actual images to character-based representations. This technique maps image pixels to ASCII characters based on their brightness:
      </p>

      <h3>Brightness Mapping</h3>
      <p>
        Different ASCII characters have different visual "weight" — the proportion of dark ink to light space when printed. Characters are ranked roughly from lightest to darkest: space, period (.), comma, colon, semicolon, plus, equals, asterisk, at sign (@), hash (#), with various other characters filling the spectrum. By converting an image to grayscale and mapping brightness values to characters along this scale, you can create a recognizable character-based representation of the image.
      </p>
      <p>
        A typical brightness-to-character mapping might use: <code>" .:-=+*#%@"</code> (10 levels from lightest to darkest) or a more refined set with 70 characters for finer gradations. The choice of character set significantly affects the aesthetic quality of the result.
      </p>

      <h3>Resolution and Aspect Ratio</h3>
      <p>
        ASCII art from images requires careful handling of aspect ratio. Terminal characters are typically taller than they are wide (approximately 2:1 ratio), so when mapping one character per pixel, the resulting image appears vertically stretched. Compensating by sampling every other row (using half the vertical resolution) or using half-block characters (▀ ▄) that pack two rows into one character height corrects the aspect ratio.
      </p>

      <h3>Color ASCII Art</h3>
      <p>
        Combining ASCII characters with ANSI color escape codes allows color ASCII art that preserves both the character texture and the color information of the original image. Each character is colored with the ANSI foreground color closest to the original pixel color. This produces significantly more recognizable results than monochrome ASCII art, particularly for photographs with subtle color gradients.
      </p>

      <h2>Unicode Art and Extended Character Sets</h2>
      <p>
        Modern "ASCII art" often uses Unicode characters well beyond the original 95-character ASCII set. This expanded palette dramatically increases the expressive possibilities:
      </p>

      <h3>Box Drawing Characters</h3>
      <p>
        Unicode's box drawing block (U+2500–U+257F) provides single lines, double lines, bold lines, dashed lines, and all corner/junction combinations for creating precise rectangular borders and tables in text:
      </p>
      <pre><code>{`┌──────────────┐
│  Box Drawing │
│  Characters  │
└──────────────┘

╔══════════════╗
║ Double Lines ║
╚══════════════╝`}</code></pre>

      <h3>Block Elements</h3>
      <p>
        Block elements (U+2580–U+259F) provide half-block, quarter-block, and eighth-block characters that enable much higher-resolution images than traditional ASCII. The characters ▀ (upper half block), ▄ (lower half block), ▌ (left half), ▐ (right half), and the full block █ form the basis of block-pixel art where each terminal cell effectively contains 2–8 sub-pixels.
      </p>

      <h3>Braille Characters</h3>
      <p>
        Each Braille character (U+2800–U+28FF) contains 8 dot positions in a 2×4 grid. By treating each Braille character as an 8-pixel cell, you can achieve 4× the horizontal resolution and 4× the vertical resolution of standard ASCII art (8 pixels per character cell vs 1). Tools like jp2a and img2txt use Braille characters for high-resolution text-based image display in modern terminals.
      </p>

      <h3>Emoji and Symbol Art</h3>
      <p>
        The rise of emoji (Unicode 6.0 in 2010 and expanding with each Unicode version) created new possibilities for expressive text art. "Emoji art" combines emoji characters to create images and scenes, while hybrid compositions use traditional ASCII characters alongside emoji for mixed-media text compositions.
      </p>

      <h2>Tools and Libraries for ASCII Art Generation</h2>

      <h3>Command-Line Tools</h3>
      <ul>
        <li><strong>figlet</strong>: The original — generates FIGlet text banners. <code>figlet "Hello World"</code></li>
        <li><strong>toilet</strong>: An extended figlet with color support and additional filters. <code>toilet -f big -F metal "HELLO"</code></li>
        <li><strong>cowsay</strong>: Generates an ASCII art cow with a speech bubble — a beloved Unix classic. <code>cowsay "Hello"</code></li>
        <li><strong>lolcat</strong>: Adds rainbow ANSI colors to any text or ASCII art piped through it</li>
        <li><strong>jp2a</strong>: Converts JPEG images to ASCII art in the terminal</li>
        <li><strong>img2txt</strong>: Part of the libcaca library — converts images to colorized ASCII art</li>
        <li><strong>ascii-image-converter</strong>: Modern Go tool for converting images to ASCII/Unicode art</li>
      </ul>

      <h3>JavaScript Libraries</h3>
      <ul>
        <li><strong>figlet.js</strong>: Full-featured FIGlet implementation for Node.js and browsers. Supports hundreds of fonts and the complete FIGlet specification</li>
        <li><strong>ascii-art</strong>: Comprehensive library covering text art, image art, and table generation</li>
        <li><strong>cfonts</strong>: Beautiful console fonts for Node.js with ANSI color support</li>
        <li><strong>boxen</strong>: Creates beautiful boxes in the terminal — useful for CLI status displays</li>
      </ul>

      <h3>Python Libraries</h3>
      <ul>
        <li><strong>pyfiglet</strong>: Complete Python port of FIGlet with the full font library</li>
        <li><strong>art</strong>: Python library with text art and ASCII art from images</li>
        <li><strong>Pillow + custom</strong>: Using PIL/Pillow to convert images to ASCII art programmatically</li>
      </ul>

      <h2>Practical Uses for ASCII Art Today</h2>

      <h3>Developer Tools and CLIs</h3>
      <p>
        When building developer tools, ASCII art startup banners and version displays add polish and personality. Tools like Next.js, Vite, Create React App, and many others display ASCII art or stylized text on startup. This is a professional convention in the developer tooling space.
      </p>

      <h3>Print-Friendly Certificates and Badges</h3>
      <p>
        Plain-text certificates, badges, and acknowledgment messages using ASCII art borders are printable on any system without special fonts or formatting — useful for terminal-based educational programs, command-line games, and text-only communication systems.
      </p>

      <h3>Placeholder Text in Wireframes</h3>
      <p>
        Developers sometimes use ASCII art boxes and placeholder images in early wireframes and mockups that are shared as plain text or in monospace-rendered environments (GitHub issues, Jira tickets, Slack threads).
      </p>

      <h3>Game Development</h3>
      <p>
        Roguelike games, terminal games, and text-based adventures are a thriving genre that relies entirely on ASCII/Unicode art for their visual presentation. Games like NetHack, Dwarf Fortress (ASCII mode), and countless terminal-based games use ASCII characters as their primary visual medium. The ASCII art aesthetic has become a deliberate design choice rather than a technical limitation — players actively prefer the imaginative, abstract quality of text-based graphics.
      </p>

      <h3>Retro Aesthetic Design</h3>
      <p>
        The "terminal aesthetic" and retro computing look is fashionable in UI design, particularly for developer tools, hacker-themed projects, and cyberpunk-influenced design systems. ASCII art fits naturally into this aesthetic, evoking the feel of old-school Unix systems, BBS culture, and early personal computing.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is ASCII art?',
    answer: 'ASCII art is visual artwork created using the 95 printable characters of the ASCII character set. It encompasses both image-based art (arranging characters to form pictures) and text banners (rendering large decorative letters using smaller characters). ASCII art originated in the 1960s–70s on text-only terminals and remains popular in developer culture, terminal applications, and online communities.',
  },
  {
    category: 'General',
    question: 'What is FIGlet and how does it work?',
    answer: 'FIGlet (Frank, Ian and Glenn\'s Letters) is a program created in 1991 that generates large ASCII art text banners. It uses font files (.flf) that define how each character should appear as a multi-line block of ASCII characters. You provide text input and it renders it as oversized decorative letters. The figlet command is available on Linux/Mac (apt install figlet / brew install figlet) and has been ported to every major programming language.',
  },
  {
    category: 'General',
    question: 'What is the difference between ASCII art and Unicode art?',
    answer: 'ASCII art uses only the 95 printable characters defined in the 7-bit ASCII standard (1963). Unicode art extends this with thousands of additional characters including box-drawing characters (─│┌┐), block elements (█▄▀), Braille characters (for high-resolution pixel art), and emoji. Modern "ASCII art" generators often use Unicode characters for better visual quality while maintaining the text-art aesthetic.',
  },
  {
    category: 'Fonts',
    question: 'What are the most popular FIGlet fonts?',
    answer: 'The most widely used FIGlet fonts are: Standard (clean default), Big (tall prominent letters), Banner (wide blocky # characters), Block (solid modern letters), Bubble (rounded circular letters), Digital (seven-segment display style), Doom (angular gaming aesthetic), Graffiti (street-art style), Larry 3D (3D perspective shadow), Slant (exaggerated italic), Star Wars (movie crawl style), and Shadow (drop shadow effect). Hundreds of fonts are available at figlet.org.',
  },
  {
    category: 'Fonts',
    question: 'How do I choose the right ASCII art font?',
    answer: 'Choose based on context: Standard or Small for technical README files (clean, readable), Big or Block for impact banners, Digital or Shadow for a modern tech look, Doom or Graffiti for gaming/metal aesthetics, Bubble or Script for friendly/casual contexts, Star Wars for dramatic reveal-style headers. Consider the available column width — some fonts require 80+ columns per character to display correctly.',
  },
  {
    category: 'Usage',
    question: 'How do I add ASCII art to a README file?',
    answer: 'Wrap the ASCII art in a code block (triple backticks) to ensure monospace rendering: ```\\n<ascii art here>\\n```. GitHub renders code blocks in monospace, preserving character spacing. Without a code block, Markdown may collapse spaces and break the art. For centered display, there\'s no standard Markdown centering, but HTML `<pre>` tags with `align="center"` work on GitHub.',
  },
  {
    category: 'Usage',
    question: 'How do I add an ASCII art banner to a Node.js CLI app?',
    answer: 'Install figlet.js: `npm install figlet`. Then: `import figlet from "figlet"; figlet("My Tool", (err, data) => { console.log(data); });`. For synchronous use: `figlet.textSync("My Tool", { font: "Big" })`. Combine with chalk for ANSI colors or boxen for box borders to create polished CLI startup banners.',
  },
  {
    category: 'Usage',
    question: 'How do I generate ASCII art in Python?',
    answer: 'Use pyfiglet: `pip install pyfiglet`. Then: `import pyfiglet; result = pyfiglet.figlet_format("Hello", font="big"); print(result)`. List available fonts: `pyfiglet.FigletFont.getFonts()`. For image-to-ASCII conversion, use the art library or implement your own with Pillow: convert to grayscale, resize, map brightness values to a character gradient.',
  },
  {
    category: 'Technical',
    question: 'What is "smushing" in FIGlet?',
    answer: 'Smushing is FIGlet\'s technique for merging overlapping edge characters when adjacent letters are placed close together. Six smushing rules handle cases like: two identical characters becoming one, opposite bracket pairs ([] → |), "/" and "\\" becoming "X", etc. Smushing produces tighter, more compact text art. "Kerning" is the milder version that just removes blank spaces without merging characters.',
  },
  {
    category: 'Technical',
    question: 'How does image-to-ASCII art conversion work?',
    answer: 'Image-to-ASCII conversion: (1) Convert image to grayscale. (2) Resize to target character dimensions (accounting for character aspect ratio — usually characters are ~2× taller than wide). (3) Map each pixel\'s brightness to a character from a gradient like " .:-=+*#%@" where space is lightest and @ is darkest. (4) Assemble characters into rows. Color versions additionally apply ANSI color codes matching each pixel\'s color.',
  },
  {
    category: 'Technical',
    question: 'Why does my ASCII art look stretched or distorted?',
    answer: 'ASCII art distortion is usually an aspect ratio problem. Terminal characters are approximately twice as tall as they are wide (roughly 8×16 pixels per character). If your generator doesn\'t account for this, images appear vertically stretched. Fix by: (1) Using half the vertical resolution (sample every other row), (2) Using half-block characters (▀▄) for 2× vertical resolution, or (3) Adjusting the output width/height ratio by 2:1.',
  },
  {
    category: 'Platforms',
    question: 'How do I display ASCII art correctly on Discord?',
    answer: 'Wrap ASCII art in a code block in Discord: use triple backticks (\\`\\`\\`) to create a code block. Discord renders code blocks in monospace, preserving all spacing. Without the code block, Discord uses a proportional font that collapses spaces and ruins the art. For large art, be aware of Discord\'s 2000-character message limit.',
  },
  {
    category: 'Platforms',
    question: 'Does ASCII art work in emails?',
    answer: 'ASCII art works in plain-text emails displayed with a monospace font. Most email clients default to proportional fonts for plain text, which breaks ASCII art spacing. For HTML emails, wrap art in a <pre> tag with a monospace font CSS style. For plain-text emails (like developer mailing lists), many clients do render monospace. Test across your target email clients before relying on ASCII art in emails.',
  },
  {
    category: 'Culture',
    question: 'What was ANSI art and how does it differ from ASCII art?',
    answer: 'ANSI art extends ASCII art with ANSI escape codes for 16 colors (foreground and background) and cursor positioning. Popular on BBSs in the late 1980s–1990s, ANSI art groups like ACiD Productions created elaborate multi-screen artworks that were the peak of pre-web digital visual culture. ASCII art is monochrome text only; ANSI art adds color. Both use text characters but ANSI art is far more visually rich.',
  },
  {
    category: 'Culture',
    question: 'What is a kaomoji?',
    answer: 'Kaomoji (顔文字) are Japanese-style emoticons that read horizontally rather than being rotated 90°. They use Unicode characters to create expressive faces: (╯°□°）╯︵ ┻━┻ (table flip), (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ (celebration), ¯\\_(ツ)_/¯ (shrug). Kaomoji represent a distinct artistic tradition from Western ASCII art, using a wider Unicode character palette and reading face-forward rather than sideways.',
  },
  {
    category: 'Tools',
    question: 'What is the cowsay command and why is it famous?',
    answer: 'cowsay is a Unix command (written by Tony Monroe in 1999) that generates an ASCII art cow with a speech bubble containing the text you provide: `cowsay "Hello"`. It became a beloved Unix tradition and cultural joke. The command includes alternate "cows" via the -f flag: `-f tux` for Tux the Linux penguin, `-f dragon` for a dragon. It\'s often piped with fortune for random quotes: `fortune | cowsay`.',
  },
  {
    category: 'Tools',
    question: 'What is toilet and how does it differ from figlet?',
    answer: 'TOIlet (The Other Implementation\'s Letters) is a figlet replacement that adds ANSI color support and additional output filters. It supports figlet .flf fonts plus its own .tlf format. Key advantages over figlet: built-in color filters (--filter metal, --filter gay for rainbow, --filter border), wider Unicode support, and more actively maintained. Usage: `toilet -f big -F metal "HELLO"` for metallic colored big text.',
  },
  {
    category: 'Tools',
    question: 'What are box-drawing Unicode characters and how are they used?',
    answer: 'Box-drawing characters (Unicode U+2500–U+257F) include single-line (─│┌┐└┘├┤┬┴┼), double-line (═║╔╗╚╝╠╣╦╩╬), and bold variants for drawing precise rectangular borders and table structures in text. They create much cleaner borders than ASCII characters like +, -, and |. They\'re used in terminal UIs, table formatting, README decorative boxes, and code comment section dividers.',
  },
  {
    category: 'Tools',
    question: 'What is Braille art and why is it high-resolution?',
    answer: 'Braille Unicode characters (U+2800–U+28FF) each contain a 2×4 grid of dot positions (8 pixels per character). By treating each Braille character as a pixel cell, you get 4× horizontal and 4× vertical resolution compared to one-character-per-pixel ASCII art. Each terminal cell effectively contains 8 sub-pixels. Tools like jp2a and modern terminal image renderers use Braille characters for the highest-quality text-based image display.',
  },
  {
    category: 'SEO',
    question: 'Can I use ASCII art for website favicons or logos?',
    answer: 'ASCII art doesn\'t translate directly to browser favicons (which require image files like .ico or .png). However, ASCII art can be used as decorative elements in plain-text areas, terminal-rendered pages, or as text-based logo alternatives in developer tool README files. Some websites use ASCII art in their page source code (visible via View Source) as an easter egg or branding element for technically curious visitors.',
  },
  {
    category: 'Advanced',
    question: 'What is Sixel graphics and how does it relate to ASCII art?',
    answer: 'Sixel is a pixel graphics format developed by DEC for terminals, representing images as colored "sixels" (6-pixel vertical slices). Modern terminal emulators like mlterm, mintty, and iTerm2 support Sixel, enabling actual bitmap image display in terminals. Sixel is technically separate from ASCII art but represents the evolution of terminal graphics — from pure text art to actual image rendering within terminal emulators.',
  },
  {
    category: 'Advanced',
    question: 'How do I create animated ASCII art?',
    answer: 'Terminal animation works by overwriting previous output using ANSI escape codes: \\033[H\\033[2J clears the screen, \\033[A moves cursor up. In JavaScript: use process.stdout.write() with carriage returns. Libraries: blessed and neo-blessed for terminal UI with animation, asciinema for recording terminal sessions including ASCII animations. The classic Matrix rain effect uses this technique: new characters print over old ones in a loop.',
  },
  {
    category: 'Advanced',
    question: 'How do large language models handle ASCII art generation?',
    answer: 'LLMs (like ChatGPT and Claude) struggle with ASCII art generation because they process text as tokens, not visual characters. Spacing and character-by-character precision are difficult for transformer models. For reliable ASCII art, use dedicated FIGlet tools rather than asking an LLM. LLMs can describe ASCII art, explain it, and recognize simple patterns, but they often produce misaligned output when attempting to generate precise character-grid art.',
  },
  {
    category: 'General',
    question: 'Is there a standard for ASCII art file formats?',
    answer: 'No universal standard exists. FIGlet fonts use .flf format (documented in the FIGlet spec). ANSI art from BBSs used .ans files (ANSI escape code sequences). The art scene community developed SAUCE (Standard Architecture for Universal Comment Extensions) as a metadata standard for text art files. Modern ASCII art is typically stored as plain .txt files or embedded directly in code. The lack of a standard reflects ASCII art\'s informal, community-driven origins.',
  },
];

export const asciiArtGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
