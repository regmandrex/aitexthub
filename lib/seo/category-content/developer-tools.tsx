import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        Developer tools are the small utilities you reach for a dozen times a day and never think about
        until one of them is missing. You need to decode a JWT to find out why an API is returning 401.
        You need a UUID for a test fixture. You need to know whether 10.0.4.0/22 actually contains the
        address a firewall rule is blocking. None of these tasks is hard, but each one interrupts what
        you were doing, and the interruption costs more than the task itself.
      </p>
      <p>
        This category collects 52 of those utilities in one place. Every one of them runs entirely in
        your browser using client-side JavaScript. Nothing you paste is uploaded, logged, stored, or
        transmitted to a server. That distinction matters more than it might sound. A large share of the
        developer utilities indexed on the web today are thin wrappers around a server-side API, which
        means every token, hash input, private key, connection string, and customer record you paste
        into them travels across the network and lands in somebody else&apos;s request logs. For a tool
        you use while debugging production, that is a genuine security problem rather than a
        hypothetical one.
      </p>
      <p>
        The tools below are grouped roughly by the kind of work they support: encoding and decoding,
        hashing and cryptography, data format conversion, CSS and design, network and time math, and
        text manipulation. If you know what you need, the grid is the fastest path. If you are trying to
        work out which tool fits your problem, the sections after the grid walk through each family in
        depth, including the failure modes that bite people most often.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Encoding and Decoding Tools</h2>
      <p>
        Encoding is the process of representing data in a form that survives a transport channel which
        would otherwise corrupt it. It is not encryption, and conflating the two is one of the most
        persistent sources of security incidents in web development. Encoded data is trivially
        reversible by anyone who receives it; that is the entire point. Encryption requires a key to
        reverse. If you ever find yourself thinking that Base64 will keep a secret safe, stop and reach
        for real cryptography instead.
      </p>
      <p>
        The <Link href="/base64-to-image">Base64 to Image converter</Link> and{' '}
        <Link href="/image-to-base64">Image to Base64 converter</Link> handle the most common encoding
        task in front-end work: turning binary image data into a text string that can live inside a CSS
        file, an HTML document, or a JSON payload. Base64 represents every three bytes of input as four
        ASCII characters drawn from a 64-character alphabet, which means the encoded output is always
        approximately 33 percent larger than the original binary. That overhead is the trade you make
        for the ability to inline an asset and eliminate a network round trip.
      </p>
      <p>
        The practical rule for data URIs is that small assets benefit and large ones do not. An icon
        under about 2 KB is usually worth inlining, because the HTTP request it would otherwise require
        costs more in latency than the extra bytes cost in transfer. A 200 KB hero image is almost
        always worse inlined: it blocks the parser, it cannot be cached separately from the document
        that contains it, and it cannot be served in a modern format through content negotiation. It
        also inflates the HTML payload that has to be parsed before anything renders.
      </p>
      <p>
        The <Link href="/ascii-converter">ASCII converter</Link> and{' '}
        <Link href="/binary-to-text">Binary to Text converter</Link> operate at a lower level, mapping
        between characters and their numeric code points in decimal, hexadecimal, or binary. These are
        indispensable when you are debugging a protocol by hand, working through an embedded systems
        problem, or trying to understand why a string comparison is failing when the two strings look
        identical on screen. Very often the answer is that one of them contains a character you cannot
        see, and viewing the raw code points is the fastest way to prove it.
      </p>
      <p>
        The <Link href="/unicode-text-converter">Unicode text converter</Link> addresses the opposite
        need: deliberately producing styled text using Unicode&apos;s mathematical alphanumeric symbol
        blocks. This is how people get bold or italic text into contexts that do not support formatting,
        such as social media bios and messaging apps. It is worth understanding what you are actually
        creating. These are not styled Latin letters; they are entirely separate code points that happen
        to look like styled letters. Screen readers frequently announce them character by character or
        skip them altogether, and search engines generally do not treat them as equivalent to the plain
        letters they resemble. Use them for decoration, never for content that has to be accessible or
        indexable.
      </p>
      <p>
        The <Link href="/rot13-encoder">ROT13 encoder and decoder</Link> implements a Caesar cipher with
        a fixed shift of 13. Because the Latin alphabet has 26 letters, applying ROT13 twice returns the
        original text, which makes a single function serve as both encoder and decoder. ROT13 offers no
        security whatsoever and was never intended to. Its historical role was hiding spoilers and
        punchlines on Usenet, where the goal was preventing accidental reading rather than preventing
        deliberate reading. The tool also supports ROT47, which shifts across 94 printable ASCII
        characters and therefore scrambles digits and punctuation as well as letters.
      </p>

      <h2>Hashing and Cryptographic Tools</h2>
      <p>
        A cryptographic hash function maps input of any length to a fixed-length output in a way that is
        designed to be infeasible to reverse. Hashes underpin password storage, data integrity checks,
        digital signatures, content addressing, and deduplication. Choosing the wrong hash function for
        a task is a common and consequential mistake, so it is worth being precise about which tool
        belongs where.
      </p>
      <p>
        The <Link href="/sha256-generator">SHA-256 generator</Link> produces a 256-bit digest and is the
        right default for general-purpose integrity work. SHA-256 belongs to the SHA-2 family, has no
        known practical collision attacks, and is the hash securing Bitcoin, TLS certificates, and most
        modern software signing. Use it to verify that a downloaded file matches its published checksum,
        to generate content-addressable identifiers, or to detect whether a record changed between two
        points in time. The tool also supports SHA-1 and SHA-512 for compatibility with existing
        systems.
      </p>
      <p>
        A word on SHA-1: it is cryptographically broken. The SHAttered attack demonstrated a practical
        collision in 2017, and the cost of generating collisions has fallen steadily since. SHA-1
        remains present in legacy Git object addressing and older certificate chains, so you will
        encounter it, and the tool supports it for that reason. Do not choose it for anything new.
      </p>
      <p>
        The <Link href="/md5-generator">MD5 generator</Link> carries a stronger warning. MD5 has been
        considered cryptographically broken since 2004, and collisions can now be produced in seconds on
        ordinary hardware. It retains exactly one legitimate use: non-adversarial checksums where you
        are guarding against accidental corruption rather than deliberate tampering, such as verifying
        that a large file copied correctly across a local network. If an attacker has any influence over
        the input, MD5 gives you nothing. It appears in this collection because a great deal of existing
        infrastructure still emits MD5 digests and you sometimes need to match one.
      </p>
      <p>
        The <Link href="/bcrypt-generator">bcrypt hash generator</Link> exists for a fundamentally
        different purpose, and the distinction is the single most important idea in this section.
        SHA-256 and MD5 are designed to be fast. For password storage, speed is precisely the
        vulnerability, because it lets an attacker who has stolen your database test billions of
        candidate passwords per second on commodity GPU hardware. Bcrypt is deliberately slow and
        includes a configurable cost factor that controls how slow. Each increment of the cost factor
        doubles the work required, so raising it from 10 to 12 makes both legitimate verification and
        brute-force attacks four times more expensive. Bcrypt also generates and embeds a random salt
        automatically, which is why hashing the same password twice correctly yields two different
        outputs. If you take one thing from this page: never store passwords with a general-purpose
        hash function, and never write your own scheme on top of one.
      </p>
      <p>
        The <Link href="/hmac-generator">HMAC generator</Link> handles authenticated hashing. A plain
        hash tells you whether data changed; it cannot tell you who produced it, because anyone can
        compute a hash. HMAC combines a hash function with a secret key so that only parties holding the
        key can generate or verify a valid signature. This is the mechanism behind webhook verification
        at Stripe, GitHub, Shopify, and essentially every provider that needs you to confirm an incoming
        request genuinely came from them. When you verify a webhook signature, compare digests using a
        constant-time comparison function rather than a plain equality check, because a naive comparison
        leaks information about the correct value through timing differences.
      </p>
      <p>
        The <Link href="/jwt-decoder">JWT decoder</Link> inspects JSON Web Tokens, the dominant format
        for stateless authentication in modern APIs. A JWT is three Base64URL-encoded segments separated
        by dots: a header naming the signing algorithm, a payload carrying claims, and a signature. The
        crucial point that catches people out is that the payload is encoded, not encrypted. Anyone
        holding the token can read every claim inside it. Never put a password, an API secret, a full
        payment card number, or sensitive personal data in a JWT payload on the assumption that it is
        hidden, because it is not. The decoder is invaluable for diagnosing authentication failures:
        checking whether <code>exp</code> has passed, confirming the <code>aud</code> claim matches the
        service rejecting the request, or verifying that the roles you expected are actually present.
      </p>
      <p>
        The <Link href="/totp-generator">TOTP generator</Link> produces the six-digit codes used in
        two-factor authentication. TOTP derives a code from a shared secret and the current Unix time
        divided into fixed intervals, normally 30 seconds, using HMAC-SHA1 under the hood. Because both
        sides compute the code independently from the same inputs, no network communication is needed at
        the moment of authentication. This also explains the most common TOTP failure: if a device clock
        drifts by more than a minute or so, generated codes stop matching and every login attempt fails.
        The fix is almost always time synchronisation rather than anything to do with the secret.
      </p>
      <p>
        The <Link href="/password-strength-checker">password strength checker</Link> evaluates entropy
        and structural weakness rather than applying the composition rules that dominated password
        policy for two decades. Current NIST guidance reversed the old advice deliberately: mandatory
        complexity rules and forced periodic rotation push people toward predictable patterns such as
        capitalising the first letter, appending a digit and an exclamation mark, and incrementing a
        counter each quarter. Length contributes far more entropy than character variety. A long
        passphrase of ordinary words is both stronger and easier to remember than a short string of
        substituted characters.
      </p>

      <h2>Data Format Conversion Tools</h2>
      <p>
        Data format conversion is the connective tissue of practical engineering work. An API returns
        JSON, a finance team needs a spreadsheet, a Kubernetes manifest wants YAML, and a legacy
        integration insists on XML. These converters handle the translation without requiring you to
        write throwaway scripts.
      </p>
      <p>
        The <Link href="/json-to-csv">JSON to CSV converter</Link> and{' '}
        <Link href="/csv-to-json">CSV to JSON converter</Link> bridge the gap between hierarchical and
        tabular data. This conversion is inherently lossy in one direction, and understanding why saves
        real debugging time. JSON is a tree that supports arbitrary nesting; CSV is a flat grid of rows
        and columns. When a nested object is flattened into columns, the structural relationship has to
        be encoded in the column names, typically as dotted paths like <code>user.address.city</code>.
        Arrays of varying length are worse, because they produce either ragged columns or serialised
        cell values. Converting back to JSON cannot always reconstruct the original shape.
      </p>
      <p>
        CSV also has a specification problem. RFC 4180 defines a baseline, but real-world CSV is
        inconsistent about delimiters, quoting, escaping, and line endings. Fields containing commas
        must be quoted; fields containing quotes must have those quotes doubled. Excel complicates
        matters further by using semicolons as delimiters in locales where the comma is the decimal
        separator, and by aggressively coercing values that look like dates or numbers. This is the
        source of the well-documented problem where gene names such as SEPT2 become dates, which was
        disruptive enough that the genetics community renamed the genes.
      </p>
      <p>
        The <Link href="/json-to-yaml">JSON to YAML</Link> and{' '}
        <Link href="/yaml-to-json">YAML to JSON</Link> converters translate between the two formats that
        dominate configuration. YAML is a superset of JSON, so every valid JSON document is already
        valid YAML, but the reverse does not hold: YAML supports comments, anchors, multi-line strings,
        and multiple documents in one file, none of which JSON represents.
      </p>
      <p>
        YAML&apos;s convenience comes with a notorious sharp edge often called the Norway problem. Under
        the YAML 1.1 specification, the unquoted tokens <code>yes</code>, <code>no</code>,{' '}
        <code>on</code>, <code>off</code>, <code>true</code>, and <code>false</code> all parse as
        booleans. The country code for Norway is NO, so an unquoted list of country codes silently turns
        Norway into the boolean false. Version numbers suffer similarly: <code>1.10</code> parses as the
        float 1.1, quietly losing the distinction from <code>1.1</code>. Leading zeros can trigger octal
        interpretation. The defence is simple and worth making a habit: quote any string value whose
        meaning depends on being a string. The{' '}
        <Link href="/yaml-formatter">YAML formatter</Link> validates structure and normalises
        indentation, which catches a related class of bug, since YAML derives meaning from indentation
        and a tab character where spaces were expected is a parse error.
      </p>
      <p>
        The <Link href="/xml-formatter">XML formatter</Link> pretty-prints, minifies, and validates XML.
        XML remains entrenched in enterprise integration, SOAP services, RSS and Atom feeds, SVG, office
        document formats, and Android layouts. Well-formedness checking catches unclosed tags, mismatched
        nesting, and improperly escaped characters. The five characters requiring escaping in XML content
        are the ampersand, less-than, greater-than, apostrophe, and quotation mark, and an unescaped
        ampersand is far and away the most common cause of a document failing to parse.
      </p>
      <p>
        The <Link href="/markdown-to-html">Markdown to HTML converter</Link> and{' '}
        <Link href="/text-to-html">Text to HTML converter</Link> handle content transformation. Markdown
        has no single authoritative specification, which is why the same document can render differently
        across platforms. CommonMark exists to fix that, and GitHub Flavored Markdown extends it with
        tables, strikethrough, task lists, and autolinking. Differences between flavours usually surface
        in edge cases: how many spaces make a nested list, whether underscores inside words trigger
        emphasis, and how raw HTML is treated.
      </p>

      <h2>CSS and Design Tools</h2>
      <p>
        CSS generators solve a specific problem: some CSS properties have syntax dense enough that
        adjusting values by hand and reloading is slower than manipulating a control and reading the
        output.
      </p>
      <p>
        The <Link href="/box-shadow-generator">box shadow generator</Link> exposes the five components of
        a shadow: horizontal offset, vertical offset, blur radius, spread radius, and colour, plus the
        optional <code>inset</code> keyword. The most useful technique it makes easy is layering.
        Real-world shadows are not a single uniform blur; physical objects cast a tight dark shadow close
        to the surface and a wider diffuse one further out. Stacking two or three comma-separated shadows
        with increasing offset and blur but decreasing opacity produces depth that a single shadow cannot.
        A common failing of hand-written shadows is excessive opacity, which reads as muddy rather than
        elevated.
      </p>
      <p>
        The <Link href="/border-radius-generator">border radius generator</Link> covers the full
        eight-value syntax. Most developers know the shorthand for rounded corners but not the slash
        syntax that specifies horizontal and vertical radii independently, which produces elliptical
        corners and organic blob shapes rather than circular arcs.
      </p>
      <p>
        The <Link href="/css-flexbox-generator">Flexbox generator</Link> and{' '}
        <Link href="/css-grid-generator">CSS Grid generator</Link> address the two modern layout systems.
        The choice between them is genuinely simple once framed correctly: Flexbox is one-dimensional,
        distributing space along a single axis, while Grid is two-dimensional, controlling rows and
        columns simultaneously. Use Flexbox for a navigation bar, a row of buttons, or centring. Use Grid
        for page-level structure and any layout where alignment must hold in both directions. They
        compose naturally, and a typical page uses Grid for the overall skeleton with Flexbox inside
        individual components. The Flexbox property that causes the most confusion is{' '}
        <code>flex-basis</code> and its interaction with <code>min-width</code>; a flex item will not
        shrink below its automatic minimum content size unless you explicitly set{' '}
        <code>min-width: 0</code>, which is the standard fix for text that refuses to truncate inside a
        flex container.
      </p>
      <p>
        The <Link href="/hex-to-rgb">Hex to RGB converter</Link> translates between colour notations. Hex
        is compact and ubiquitous in design tools; RGB and especially HSL are easier to manipulate
        programmatically. HSL is the notation to reach for when generating a palette, because producing a
        lighter variant means adjusting one lightness number rather than recalculating three channels.
        The <Link href="/px-to-rem">PX to REM converter</Link> supports accessible typography. Sizing
        text in rem units means it scales with the user&apos;s browser font-size preference, while pixel
        values ignore that preference entirely. Users who increase their default font size are usually
        doing so because they need to, and overriding that choice is an accessibility failure.
      </p>
      <p>
        The <Link href="/svg-optimizer">SVG optimizer</Link> and{' '}
        <Link href="/svg-viewer">SVG viewer</Link> handle vector graphics. SVG exported from design
        software is routinely bloated with editor metadata, redundant groups, excessive coordinate
        precision, and unused definitions; optimisation commonly cuts file size by half or more without
        any visible change. Coordinate precision is the biggest single win, since two decimal places are
        almost always sufficient and exporters frequently emit six or more. The{' '}
        <Link href="/favicon-generator">favicon generator</Link> and{' '}
        <Link href="/placeholder-image-generator">placeholder image generator</Link> cover routine asset
        production, and the{' '}
        <Link href="/image-metadata-viewer">image metadata viewer</Link> reads EXIF data. That last one
        has a privacy dimension worth knowing: photographs taken on phones often embed GPS coordinates,
        timestamps, and device identifiers, and publishing an unstripped image can disclose a home
        address.
      </p>

      <h2>Network, Time, and Calculation Tools</h2>
      <p>
        The <Link href="/ip-subnet-calculator">IP subnet calculator</Link> handles the modular arithmetic
        behind network addressing. CIDR notation expresses a network as an address followed by a prefix
        length, where the prefix is the number of leading bits identifying the network and the remainder
        identify hosts within it. A /24 network reserves 24 bits for the network and 8 for hosts, giving
        256 addresses of which 254 are assignable, because the all-zeros address identifies the network
        itself and the all-ones address is the broadcast address.
      </p>
      <p>
        Subnetting errors are unusually costly because they fail in confusing ways. An address outside
        the range a firewall rule was meant to cover produces intermittent connectivity that looks like
        an application bug. Overlapping CIDR ranges between a VPC and an on-premises network break
        routing in ways that only appear once specific hosts try to talk to each other. Checking the
        arithmetic before deploying is far cheaper than diagnosing it afterwards. The reserved private
        ranges worth memorising are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.
      </p>
      <p>
        The <Link href="/epoch-converter">epoch converter</Link> translates between Unix timestamps and
        human-readable dates. Unix time counts seconds since midnight UTC on 1 January 1970, which makes
        it unambiguous across time zones and trivial to compare or sort. The recurring practical
        difficulty is unit confusion: Unix tools and most databases use seconds, while JavaScript&apos;s{' '}
        <code>Date.now()</code> and many APIs use milliseconds. Passing a seconds value where
        milliseconds are expected yields a date in January 1970; the reverse yields a date tens of
        thousands of years in the future. Both are immediately recognisable once you know the pattern.
      </p>
      <p>
        Timestamps also carry the 2038 problem. A signed 32-bit integer counting seconds overflows on 19
        January 2038, and systems still using 32-bit time values will wrap to a negative number
        representing 1901. Most modern platforms have moved to 64-bit time, but embedded devices and
        older database schemas have not universally followed.
      </p>
      <p>
        The <Link href="/cron-generator">cron expression generator</Link> builds and explains scheduling
        expressions. Cron syntax is terse and easy to get subtly wrong, and the classic mistake is
        writing <code>* * * * *</code> when you meant a specific time, producing a job that runs every
        minute rather than once a day. The fields are minute, hour, day of month, month, and day of week.
        The genuinely counter-intuitive rule is that when both day-of-month and day-of-week are
        restricted, most cron implementations treat them as a logical OR rather than an AND, so an
        expression intended to mean the first Monday of the month instead fires on every first of the
        month and every Monday.
      </p>
      <p>
        The <Link href="/uuid-generator">UUID generator</Link> produces universally unique identifiers in
        versions 1, 4, and 7. Version 4 is random and the usual default. Version 1 encodes a timestamp
        and MAC address, which makes it sortable but leaks hardware information. Version 7, a recent
        addition, is the one worth knowing about: it embeds a Unix timestamp in the high bits while
        keeping the remainder random, so identifiers sort chronologically. That property matters for
        database performance, because random version 4 identifiers scatter inserts across a B-tree index
        and cause page splits and fragmentation, whereas time-ordered identifiers append cleanly. If you
        are choosing a primary key type for a new table, UUIDv7 gives you global uniqueness without the
        index penalty.
      </p>
      <p>
        The <Link href="/qr-code-reader">QR code reader</Link> decodes QR images. QR codes include
        Reed-Solomon error correction at four levels, with the highest tolerating roughly 30 percent
        damage, which is why a partially obscured code still scans. Because a QR code is opaque to human
        inspection, decoding one before acting on it is a genuine security measure; quishing attacks
        distribute codes that resolve to credential-harvesting pages, and reading the destination first
        is the only way to check.
      </p>

      <h2>Text Manipulation and Analysis Tools</h2>
      <p>
        The <Link href="/text-diff">text diff checker</Link> compares two texts and highlights what
        changed. Diffing underpins version control, code review, and content auditing. Most diff
        algorithms derive from the longest common subsequence problem, and line-level granularity suits
        code while word-level granularity suits prose. A diff is the fastest way to answer a question
        that comes up constantly: these two files should be identical, so what exactly is different?
      </p>
      <p>
        The <Link href="/regex-tester">regex tester</Link> provides immediate feedback on pattern
        matching, which transforms regular expressions from guesswork into something you can iterate on.
        Beyond correctness, the tester helps you avoid catastrophic backtracking, a performance failure
        where nested quantifiers over overlapping character classes cause matching time to grow
        exponentially with input length. A pattern like <code>(a+)+b</code> against a long run of
        &quot;a&quot; characters can hang a process outright. This is the mechanism behind ReDoS attacks,
        and it is a real risk whenever a regex is applied to user-supplied input.
      </p>
      <p>
        The <Link href="/sort-lines">line sorter</Link>,{' '}
        <Link href="/text-reverser">text reverser</Link>,{' '}
        <Link href="/string-length-calculator">string length calculator</Link>, and{' '}
        <Link href="/word-frequency-counter">word frequency counter</Link> handle routine text
        processing. The string length calculator deserves particular attention because string length is
        far less obvious than it appears. A single emoji may be one grapheme cluster that a reader sees
        as one character, while occupying two UTF-16 code units in JavaScript and four bytes in UTF-8.
        Emoji built from zero-width joiner sequences, such as family emoji, can span a dozen code points.
        This is why a database column defined as VARCHAR(255) does not reliably hold 255 characters of
        arbitrary Unicode, and why validating input length in the browser using{' '}
        <code>string.length</code> can disagree with server-side validation counting bytes.
      </p>
      <p>
        The <Link href="/slug-generator">slug generator</Link> converts titles into URL-safe strings,
        handling lowercasing, whitespace, diacritics, and punctuation. The{' '}
        <Link href="/robots-txt-generator">robots.txt generator</Link> and{' '}
        <Link href="/open-graph-generator">Open Graph tag generator</Link> support technical SEO. One
        point about robots.txt is worth stating plainly because it is widely misunderstood: it controls
        crawling, not indexing. A URL blocked in robots.txt can still appear in search results if other
        pages link to it, because the crawler is prevented from fetching the page but not from learning
        it exists. To keep a page out of an index you need a <code>noindex</code> directive, which
        requires the crawler to be allowed to fetch the page and read it.
      </p>
      <p>
        Rounding out the collection, the{' '}
        <Link href="/ascii-art-generator">ASCII art generator</Link> builds text banners and image
        conversions, the <Link href="/html-table-generator">HTML table generator</Link> produces table
        markup, the <Link href="/sql-formatter">SQL formatter</Link> beautifies queries across dialects,
        the <Link href="/image-compare">image comparison tool</Link> diffs two images visually, the{' '}
        <Link href="/text-to-speech">text to speech reader</Link> uses the browser Speech Synthesis API,
        and the <Link href="/url-shortener">URL shortener</Link> creates short links.
      </p>

      <h2>Why Client-Side Processing Matters</h2>
      <p>
        Every tool in this category runs in your browser. When you paste a JWT into the decoder, the
        parsing happens in JavaScript on your machine and the token never leaves it. This is
        architecturally different from the majority of comparable tools online, and the difference has
        concrete consequences.
      </p>
      <p>
        Consider what a server-side developer utility actually receives. Debugging an authentication
        problem means pasting a real session token, which is a live credential until it expires.
        Formatting a failing query means pasting real SQL, which reveals schema structure and sometimes
        embedded literals from production data. Testing a webhook signature means pasting a signing
        secret. Checking a hash means submitting whatever you are hashing. On a server-side tool, all of
        that lands in request logs, and those logs are retained, backed up, and occasionally breached.
      </p>
      <p>
        Client-side processing removes the exposure entirely rather than mitigating it. There is no
        server-side log to breach because there is no request. This is also why these tools work offline
        once loaded, respond instantly with no network latency, and impose no rate limits or file size
        caps beyond what your own machine can handle.
      </p>
      <p>
        The honest caveat is that client-side execution is not a licence to trust any tool blindly. A
        page that runs in your browser can still exfiltrate what you paste if its JavaScript chooses to.
        The verifiable check, and one worth performing on any tool handling sensitive input, is to open
        your browser&apos;s developer tools, switch to the Network tab, paste your data, and watch
        whether any request fires. On these tools, none does. That test takes ten seconds and applies
        equally well to every other utility you use.
      </p>

      <h2>Choosing the Right Tool</h2>
      <p>
        A few decisions come up often enough to be worth stating directly. For password storage, use
        bcrypt, never SHA-256 or MD5. For file integrity, use SHA-256, and treat MD5 as acceptable only
        for accidental-corruption checks. For webhook verification, use HMAC with constant-time
        comparison. For new database primary keys, prefer UUIDv7 over UUIDv4 to avoid index
        fragmentation. For one-dimensional layout use Flexbox and for two-dimensional layout use Grid.
        For font sizing use rem rather than px so that user preferences are respected. When writing YAML,
        quote any string whose meaning depends on being a string.
      </p>
      <p>
        Each tool page includes its own documentation, worked examples, and detailed FAQ covering that
        specific utility. If you are looking for something adjacent, the{' '}
        <Link href="/ai-tools/encoding-tools">encoding tools</Link>,{' '}
        <Link href="/ai-tools/data-format-converters">data format converters</Link>, and{' '}
        <Link href="/ai-tools/color-css-tools">colour and CSS tools</Link> categories overlap with this
        one, and the full <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'Are these developer tools really free?',
    answer:
      'Yes. Every tool in this category is free to use with no account, no signup, and no usage limits. There is no trial period and no feature gated behind a paid tier. The site is supported by advertising, which is what allows the tools themselves to stay open.',
  },
  {
    category: 'General',
    question: 'Do I need to create an account to use them?',
    answer:
      'No. All 52 developer tools work immediately without registration. Because the processing happens in your browser rather than on a server, there is no account system for the tools to hook into in the first place.',
  },
  {
    category: 'General',
    question: 'Do these tools work offline?',
    answer:
      'Largely yes. Once a tool page has loaded, the JavaScript that powers it runs locally, so it continues to function without a network connection. You need connectivity to load the page initially, and the URL shortener is the exception since it necessarily requires a server to create and resolve short links.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is my data sent to a server when I use these tools?',
    answer:
      'No. Every tool in this category processes data client-side using JavaScript running in your browser. Text you paste, files you upload, and results you generate stay on your machine. You can verify this yourself by opening your browser developer tools, switching to the Network tab, and confirming that no request fires when you use a tool.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is it safe to paste a production JWT into the decoder?',
    answer:
      'Decoding happens entirely in your browser and the token is never transmitted, so the tool itself does not expose it. Standard operational caution still applies: a JWT is a live credential until it expires, so avoid pasting production tokens into any tool on a shared or untrusted machine, and rotate a token if you suspect it has been exposed elsewhere.',
  },
  {
    category: 'Privacy and Security',
    question: 'Can other people see what I paste into these tools?',
    answer:
      'No. There is no server-side storage, no request logging of tool inputs, and no shared state between users. Each session is isolated to your own browser tab, and closing the tab discards everything.',
  },
  {
    category: 'Privacy and Security',
    question: 'Do you store uploaded images or files?',
    answer:
      'No. Tools that accept file input, such as the image metadata viewer, QR code reader, and image to Base64 converter, read the file directly in the browser using the File API. The file is never uploaded, so there is nothing on our side to store or delete.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between encoding and encryption?',
    answer:
      'Encoding transforms data into a different representation so it can travel safely through a channel, and it is reversible by anyone. Base64, URL encoding, and ASCII conversion are all encoding. Encryption transforms data so that only someone holding the correct key can reverse it. Base64 provides no security whatsoever, and treating it as though it does is a recurring source of vulnerabilities.',
  },
  {
    category: 'Technical',
    question: 'Which hash function should I use for storing passwords?',
    answer:
      'Use bcrypt, or a modern alternative such as Argon2 or scrypt. Never use MD5 or SHA-256 for passwords. General-purpose hashes are designed to be fast, and that speed lets an attacker who steals your database test billions of password guesses per second on GPU hardware. Bcrypt is deliberately slow, with a configurable cost factor, and salts each hash automatically.',
  },
  {
    category: 'Technical',
    question: 'Why does bcrypt produce a different hash every time for the same password?',
    answer:
      'Bcrypt generates a random salt for each hash and embeds it in the output string. Identical passwords therefore produce different hashes, which prevents attackers from using precomputed rainbow tables and stops them from spotting that two users share a password. Verification works because the salt is stored inside the hash, so the library can extract it and recompute correctly.',
  },
  {
    category: 'Technical',
    question: 'Is MD5 still safe to use?',
    answer:
      'Not for anything security-related. MD5 has been cryptographically broken since 2004 and collisions can be generated in seconds on ordinary hardware. Its one remaining legitimate use is non-adversarial checksums, such as verifying a file copied correctly across a local network. If an attacker can influence the input, MD5 provides no protection at all.',
  },
  {
    category: 'Technical',
    question: 'Can I see the payload of a JWT without the secret key?',
    answer:
      'Yes, and this is by design rather than a flaw. A JWT payload is Base64URL-encoded, not encrypted, so anyone holding the token can read every claim in it. The secret is required only to verify the signature and confirm the token has not been tampered with. This is precisely why you must never place passwords, API keys, or sensitive personal data in a JWT payload.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between UUID v4 and UUID v7?',
    answer:
      'UUID v4 is entirely random, while UUID v7 embeds a Unix timestamp in its high bits and fills the remainder with randomness. Both are globally unique, but v7 identifiers sort chronologically. That matters for database performance: random v4 values scatter inserts across a B-tree index and cause page splits and fragmentation, whereas time-ordered v7 values append cleanly. For new primary keys, v7 is usually the better choice.',
  },
  {
    category: 'Technical',
    question: 'Why does my YAML file turn the country code NO into false?',
    answer:
      'This is the well-known Norway problem. Under the YAML 1.1 specification, the unquoted tokens yes, no, on, off, true, and false are parsed as booleans, so the country code NO becomes the boolean false. The fix is to quote the value. As a general habit, quote any YAML string whose meaning depends on it staying a string, including version numbers and values with leading zeros.',
  },
  {
    category: 'Technical',
    question: 'Why does my Unix timestamp show a date in 1970?',
    answer:
      'You are almost certainly passing a seconds value where milliseconds are expected. Unix tools and most databases count seconds, while JavaScript Date.now() and many web APIs use milliseconds. A seconds value interpreted as milliseconds lands in January 1970; a milliseconds value interpreted as seconds lands tens of thousands of years in the future. Multiply or divide by 1000 as appropriate.',
  },
  {
    category: 'Technical',
    question: 'Why do my TOTP codes keep getting rejected?',
    answer:
      'The usual cause is clock drift. TOTP derives its code from a shared secret and the current time divided into 30-second intervals, so both sides must agree on the time. If a device clock is off by more than a minute, every generated code fails. Synchronising the system clock resolves it in the great majority of cases.',
  },
  {
    category: 'Usage',
    question: 'When should I use Flexbox instead of CSS Grid?',
    answer:
      'Use Flexbox for one-dimensional layout, where you are distributing space along a single axis: navigation bars, button rows, centring a single element. Use Grid for two-dimensional layout, where rows and columns must align simultaneously: page structure, dashboards, card grids. They work well together, and a common pattern is Grid for the page skeleton with Flexbox inside individual components.',
  },
  {
    category: 'Usage',
    question: 'Should I inline images as Base64 data URIs?',
    answer:
      'Only small ones. Base64 encoding inflates data by roughly 33 percent, so inlining trades bytes for an eliminated HTTP request. Assets under about 2 KB, such as small icons, usually benefit. Larger images are better left as separate files because they can then be cached independently, served in modern formats, and loaded without blocking document parsing.',
  },
  {
    category: 'Usage',
    question: 'Why should I use rem instead of px for font sizes?',
    answer:
      'Rem units scale with the browser font-size setting, so text respects the size a user has chosen. Pixel values ignore that preference entirely. People who increase their default font size generally do so because they need to, and overriding that is an accessibility failure. The PX to REM converter handles the arithmetic against your chosen base size.',
  },
  {
    category: 'Usage',
    question: 'How do I verify a webhook signature correctly?',
    answer:
      'Compute an HMAC of the raw request body using the shared secret and the algorithm your provider specifies, then compare it against the signature header using a constant-time comparison function. Two details matter: hash the raw body rather than a re-serialised version, since any whitespace change alters the result, and avoid plain string equality, which leaks information about the correct value through timing differences.',
  },
  {
    category: 'Usage',
    question: 'Why does my cron job run more often than I expected?',
    answer:
      'The most frequent cause is leaving asterisks in fields you meant to constrain, since an asterisk means every value. A subtler cause is that when both day-of-month and day-of-week are restricted, most cron implementations combine them with a logical OR rather than an AND, so an expression meant to fire on the first Monday of the month fires on every first of the month and also every Monday.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my CSV open incorrectly in Excel?',
    answer:
      'Excel applies locale-specific delimiter rules and aggressive type coercion. In locales where the comma is the decimal separator it expects semicolons as delimiters, and it converts values resembling dates or numbers automatically, which strips leading zeros from postcodes and turns identifiers into dates. Importing through the Data tab rather than opening the file directly lets you set the delimiter and force columns to text.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my string length differ between the browser and the database?',
    answer:
      'Different layers count different units. JavaScript string.length counts UTF-16 code units, UTF-8 storage counts bytes, and a reader counts grapheme clusters. A single emoji can be one grapheme, two UTF-16 code units, and four bytes at once, and emoji built from zero-width joiner sequences span more still. This is why VARCHAR(255) does not reliably hold 255 arbitrary Unicode characters.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Will blocking a page in robots.txt remove it from Google?',
    answer:
      'No, and this is a common and costly misunderstanding. Robots.txt controls crawling, not indexing. A blocked URL can still appear in search results if other pages link to it, because the crawler is prevented from fetching the page but not from learning it exists. To remove a page from an index, use a noindex directive, which requires the crawler to be allowed to fetch the page so it can read that directive.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why is my regular expression so slow?',
    answer:
      'You are probably hitting catastrophic backtracking, which happens when nested quantifiers apply to overlapping character classes. A pattern such as (a+)+b tested against a long run of the letter a can take exponential time and hang the process outright. This is the mechanism behind ReDoS attacks, so it matters whenever a regex runs against user-supplied input. Restructure the pattern to remove the nested quantifier or use atomic grouping where your engine supports it.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why will my text not truncate inside a flex container?',
    answer:
      'A flex item will not shrink below its automatic minimum content size, so long text keeps its container wide and text-overflow: ellipsis never engages. The standard fix is to set min-width: 0 on the flex item, which allows it to shrink below its content size so the truncation rules can take effect.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why does my XML fail to parse?',
    answer:
      'By far the most common cause is an unescaped ampersand in element content or an attribute value. XML requires five characters to be escaped: ampersand, less-than, greater-than, apostrophe, and quotation mark. Other frequent causes are unclosed tags, mismatched nesting, and more than one root element. The XML formatter reports well-formedness errors with their location.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Can I use these tools for commercial work?',
    answer:
      'Yes. There is no restriction on using the tools or their output in commercial projects, and no attribution is required. They are ordinary utilities, and what you produce with them is yours.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Is there an API for these tools?',
    answer:
      'No, and the reason is architectural rather than a roadmap gap. These tools run entirely client-side, which is what keeps your data private, and an API would require exactly the server-side processing that design avoids. For automation, the underlying operations are generally available as well-maintained open-source libraries in most languages.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Is there a file size limit for the image and file tools?',
    answer:
      'There is no limit imposed by us, since nothing is uploaded. The practical ceiling is your own device memory and browser limits, because the file is read and processed locally. Very large files may be slow on low-memory devices, but a size cap of the kind server-based tools apply does not exist here.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
