import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p><strong>Encoding and decoding tools</strong> convert text between different formats so it survives transmission through systems that would otherwise corrupt it. This group gathers a comprehensive collection of utilities spanning <Link href="/base64-encode">Base64</Link>,{' '} <Link href="/url-encode">URL encoding</Link>,{' '} <Link href="/text-to-html-entities">HTML entities</Link>,{' '} <Link href="/utf8-encode">UTF-8</Link>,{' '} <Link href="/idn-encode">internationalized domain names</Link>,{' '} <Link href="/text-to-hex">hexadecimal</Link>, and{' '} <Link href="/text-to-morse-code">Morse code</Link>.</p>
      <p>One vital point must be made right away, because misunderstanding it leads directly to security incidents: <strong>encoding is not encryption</strong>. Anyone who obtains encoded data can easily reverse it without needing any key or secret whatsoever. That is the entire purpose. Should you ever assume that Base64 will keep something secret, stop immediately and use proper cryptography instead.</p>
      <p>The available utilities separate into two distinct families addressing completely different challenges. Character encodings like UTF-8 answer how individual characters translate into raw bytes, a necessity because human writing systems contain vastly more characters than a single byte can hold. Transport encodings such as Base64 and percent-encoding answer a separate question: how data containing protocol-reserved characters can travel safely through that protocol without breaking it. Figuring out which family a specific problem falls under generally points straight to the solution.</p>
      <p>Every utility provided here executes completely inside your web browser. Nothing you paste gets uploaded, logged, or saved, which is crucial since these tools frequently handle sensitive tokens, credentials, and API payloads during troubleshooting sessions.</p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Base64: Transforming Binary Data into Text</h2>
      <p>The <Link href="/base64-encode">Base64 encoder</Link> and{' '} <Link href="/base64-decode">Base64 decoder</Link> manage the web's most prevalent binary-to-text encoding format.</p>
      <p>Base64 exists because numerous legacy systems were built exclusively for text and mishandle raw binary data. Email systems, JSON, XML, and URLs all contain characters with special functions, meaning unencoded binary streams containing those exact bytes will break them. Base64 translates every block of three input bytes into four ASCII characters chosen from a 64-character alphabet consisting of letters, numbers, plus, and slash signs, with equals symbols used for trailing padding.</p>
      <p><strong>The size overhead is approximately 33 percent.</strong> Producing four output characters for every three input bytes represents a fixed tax, and it is the necessary compromise for embedding binary data anywhere text is permitted. This explains why inlining a tiny icon as a data URI usually makes sense whereas inlining a massive photo typically does not.</p>
      <p><strong>Base64url is a specialized variant.</strong> Standard Base64 relies on the plus and slash characters, both of which hold specific meanings inside web URLs. Base64url replaces those with the hyphen and underscore while typically dropping the padding. JSON Web Tokens make use of this specific variation, which explains why dropping a JWT piece into a standard Base64 decoder occasionally fails or yields gibberish.</p>
      <p><strong>Typical error scenarios</strong> are important to recognize. Improper padding triggers decoding failures because the total length must be a multiple of four. Extra whitespace and line breaks brought in by copying from email headers or wrapped log files will break the decoding process unless completely removed. Furthermore, decoding can seemingly succeed while generating pure nonsense if the input was Base64url yet the decoder expected standard Base64.</p>

      <h2>URL Encoding: Percent-Encoding for Internet Traffic</h2>
      <p>The <Link href="/url-encode">URL encoder</Link>,{' '} <Link href="/url-decode">URL decoder</Link>, and{' '} <Link href="/url-encoder-decoder">combined URL encoder and decoder</Link> manage percent-encoding as formally defined in RFC 3986.</p>
      <p>URLs restrict allowable characters, reserving several for strict structural purposes: the question mark starts query parameters, the ampersand divides parameters, the equals sign assigns values, the hash marks a fragment, and the forward slash separates path segments. When any of these characters happen to appear inside actual data rather than structural layout, they must be percent-encoded as a hexadecimal byte value preceded by a percent sign.</p>
      <p>Spaces are the typical example, turned into %20 within paths and frequently represented by a plus symbol inside query strings, an old HTML form convention that still creates misunderstandings. Any actual plus symbol inside query parameters needs its own encoding as %2B, otherwise it gets interpreted as a space.</p>
      <p><strong>Double encoding is the classic bug.</strong> When already-encoded data gets processed through the encoder again, the existing percent signs get re-encoded, turning %20 into %2520. The final result is a URL that appears roughly correct yet resolves to the wrong destination or fails entirely. This typically occurs when two distinct software layers both try to helpfully encode the same piece of information, and the correct fix is deciding which layer is responsible for encoding rather than simply appending another decode pass.</p>
      <p><strong>Encoding context matters greatly.</strong> The required rules differ significantly between path segments, query parameters, and fragments, which explains why some programming languages provide distinct functions for each scenario. Applying a whole-URL encoder to a single component, or utilizing a component encoder on an entire URL, yields subtly incorrect outcomes in both directions.</p>

      <h2>HTML Entities: Escaping Markup Syntax</h2>
      <p>The <Link href="/text-to-html-entities">text to HTML entities converter</Link> and{' '} <Link href="/html-entities-to-text">HTML entities to text converter</Link> manage escaping for web material.</p>
      <p>Specific characters possess structural meaning within HTML. The less-than character opens a tag, the ampersand starts an entity reference, and quotation marks mark attribute boundaries. Showing these literally demands substituting them with entity references like the named types for ampersand, less-than, and greater-than, or numeric counterparts.</p>
      <p><strong>Treat this safeguard as core security, not aesthetic polish.</strong> Cross-site scripting directly stems from failing to sanitize visitor-supplied text before outputting it into an HTML context. Whenever someone successfully submits an unfiltered script tag that executes inside someone else&apos;s browser, that script hijacks the victim&apos;s active session. Context-aware output escaping provides the primary countermeasure, requiring execution during rendering rather than at ingestion because a specific string might be harmless in one scenario yet dangerous in a different one.</p>
      <p><strong>Double encoding appears here too.</strong> Content escaped once and subsequently escaped again displays the entity code as literal text, meaning an observer sees the escape sequence rather than the character. This frequently occurs when a content management system escapes material that arrived already escaped, and it is the origin of visible ampersand-hash sequences on published pages.</p>

      <h2>UTF-8 and Character Encoding Systems</h2>
      <p>The <Link href="/utf8-encode">UTF-8 encoder</Link> and{' '} <Link href="/utf8-decode">UTF-8 decoder</Link> translate between characters and their corresponding byte forms.</p>
      <p>Unicode assigns unique scalar values to every typographic mark across world languages. An encoding protocol specifies how those designated points convert into raw bytes. UTF-8 allocates one byte for standard ASCII entries, keeping Western files compact while maintaining legacy compatibility, reserving two to four bytes for alternative alphabets. It accounts for virtually the entire modern web, establishing itself as the undisputed standard everywhere.</p>
      <p><strong>Mojibake illustrates character interpretation failures.</strong> Whenever UTF-8 binary streams are parsed using Latin-1 or Windows-1252 profiles, every single component byte renders as an isolated character, morphing a standard typographical apostrophe into erratic sequences of symbols. Because underlying byte sequences typically stay undamaged despite incorrect interpretation, content can generally be salvaged once the mapping error is identified.</p>
      <p><strong>Replacement glyphs confirm permanent data erasure.</strong> A dark diamond framing a white question mark, or an isolated question mark replacing a normal character, proves the processor could not handle that code point and substituted a fallback token. Unlike mojibake, this problem remains fundamentally irreversible since original data was purged rather than misread.</p>
      <p><strong>Byte order marks cause parse failures.</strong> A BOM at the beginning of a file remains invisible in editors but unexpected by many parsers, generating errors pointing to position zero in a file that appears flawless. UTF-8 does not require a BOM, and including one creates more complications than it resolves.</p>

      <h2>Internationalized Domain Names</h2>
      <p>The <Link href="/idn-encode">IDN encoder</Link> and{' '} <Link href="/idn-decode">IDN decoder</Link> switch between Unicode domain names and their Punycode form.</p>
      <p>The domain name system was built for a restricted ASCII character set, so domains featuring accented letters, Cyrillic, Arabic, Chinese, or emoji require a format DNS can handle. Punycode transforms Unicode domain labels into ASCII strings starting with xn--, which explains why a domain showing in one script appears within browser tooling and certificate details as a sequence of seemingly random characters.</p>
      <p><strong>The homograph attack is the security issue here.</strong> Numerous characters across various scripts look identical or nearly identical to Latin letters. A Cyrillic letter rendering exactly like a Latin one permits registering a domain visually indistinguishable from a legitimate site while operating as a completely different address. Browsers address this by presenting Punycode instead of Unicode when a label blends scripts suspiciously, yet the defense remains imperfect. Decoding a domain to view its actual Punycode form serves as a reliable verification step whenever something seems suspicious.</p>

      <h2>Hexadecimal and Morse</h2>
      <p>The <Link href="/text-to-hex">text to hex converter</Link> displays characters through their hexadecimal byte values. Hexadecimal works well because one hex digit corresponds precisely to four bits, so each byte equals exactly two digits, rendering the connection between the presentation and the underlying data direct in a way decimal cannot match. It serves as the standard approach for showing hashes, color values, memory contents, and binary data under examination.</p>
      <p>The <Link href="/text-to-morse-code">text to Morse code converter</Link> and{' '} <Link href="/morse-code-translator">Morse code translator</Link> deal with a considerably older encoding. Morse translates letters into patterns of short and long signals, where code length inversely relates to letter frequency in English, explaining why E is a single dot and Q requires four symbols. That frequency weighting represents an early illustration of the compression principle behind modern encoding schemes. Morse continues to see use in amateur radio and aviation navigation beacons, alongside standing as one of very few encodings transmissible via sound, light, or touch.</p>

      <h2>Data URIs and Where Base64 Appears</h2>
      <p>Base64 shows up in more places than most individuals realize, and identifying it reduces debugging time.</p>
      <p><strong>Data URIs</strong> embed a resource directly inside a document instead of linking to an external file. The structure specifies a MIME type, states base64 encoding, and follows with the encoded payload. They prove popular for small icons in CSS, inline SVG, and email images, while removing an HTTP request at the expense of size and cacheability.</p>
      <p><strong>HTTP Basic authentication</strong> sends credentials as Base64 inside an Authorization header. This deserves careful understanding precisely because it resembles protection while offering none: the credentials can be retrieved by anyone viewing the header. Basic auth is only acceptable over HTTPS, where the transport layer supplies the confidentiality lacking in the encoding.</p>
      <p><strong>Email attachments</strong> utilize Base64 because SMTP was created for seven-bit ASCII text. Any binary attachment gets encoded, explaining why raw email source contains lengthy blocks of seemingly random characters and why attachments expand message size.</p>
      <p><strong>JSON Web Tokens</strong> implement Base64url for their header and payload segments. The crucial takeaway is that a JWT payload is encoded rather than encrypted, meaning anyone holding the token can read every claim contained within it. Sensitive information must never be placed there under the assumption that it remains hidden.</p>
      <p><strong>Certificates and keys in PEM format</strong> represent Base64-encoded binary wrapped inside begin and end markers. This explains why a certificate file appears as readable text that signifies nothing to a human reviewer.</p>
      <p><strong>Configuration and secret storage</strong> frequently applies Base64 encoding to values, particularly within Kubernetes secrets. This functions as a serialization convenience rather than a security measure, and treating Base64-encoded secrets as secured constitutes a widespread and significant misunderstanding.</p>

      <h2>Encoding in APIs and Data Exchange Protocols</h2>
      <p>Most translation errors appear where platforms meet, and a small number of patterns cause most of them.</p>
      <p><strong>Query strings versus request bodies.</strong> Information in a query parameter needs percent-encoding and faces URL length caps that depend on the server and proxy. Payload data in a request body has no such restriction and stays hidden from server logs and browser history, which is why sensitive or long text belongs in the body.</p>
      <p><strong>Content-Type declarations must match reality.</strong> A response stating one character set while carrying another causes mojibake no matter how carefully the text was formatted. The declaration is trusted by the receiving system, so a wrong header completely ruins correct formatting.</p>
      <p><strong>Form encoding has two common variants.</strong> Standard form submission percent-encodes fields and fails for binary. Multipart form data separates fields using boundary markers and handles binary without formatting overhead, which explains why file uploads rely on it.</p>
      <p><strong>Nested encoding accumulates.</strong> A value that is Base64-encoded, inserted into JSON, and then added to a URL has been processed three times, and every layer must be reversed in the correct sequence. Confusion about the order frequently turns values into garbage instead of failing neatly.</p>
      <p><strong>Cryptographic hashes require evaluation across identical bytes.</strong> In verifying incoming webhook payloads, calculate digests strictly using unmodified request streams instead of re-encoded strings. Slight variations in spacing or parameter keys stemming from parsing steps modify resultant signatures, prompting validation errors that appear entirely inexplicable.</p>

      <h2>Selecting the Proper Encoding</h2>
      <p><strong>Use Base64</strong> when putting binary files inside a text format: images in CSS or HTML, file attachments in JSON, or binary data in email.</p>
      <p><strong>Use URL encoding</strong> for anything placed inside a URL path, query string, or fragment, and make sure to encode components rather than entire URLs.</p>
      <p><strong>Use HTML entity encoding</strong> when displaying untrusted content as HTML, always at output time and always within the correct context.</p>
      <p><strong>Use UTF-8</strong> as the default character encoding for everything, and state it explicitly inside HTTP headers, HTML meta tags, and database settings instead of depending on defaults.</p>
      <p><strong>Use none of them for secrets.</strong> Encoding offers zero confidentiality. Credentials, tokens, and personal details demand encryption both in transit and at rest, plus access control. If you are encoding something simply to hide it from plain view, you picked the wrong mechanism entirely and should use true cryptography instead of encoding.</p>

      <h2>The Purpose of Encoding: A Brief Background</h2>
      <p>A vast number of encodings exist, and their awkward interactions are primarily the result of history.</p>
      <p><strong>ASCII established the assumption.</strong> Standardized in the 1960s with 128 characters across seven bits, it covered English and little else. For decades a character and a byte meant the exact same thing, and massive amounts of code were written expecting that rule to hold. Much of today's friction stems from that assumption built into systems that outlived it.</p>
      <p><strong>Code pages fragmented the eighth bit.</strong> When the extra bit became available, various regions utilized those 128 additional slots differently. Latin-1 served Western European languages, other pages handled Cyrillic, Greek, and Hebrew, and the identical byte represented different characters depending on the assumed page. A document was only readable if the user knew the correct page, and nothing inside the file stated it.</p>
      <p><strong>Unicode unified the character set.</strong> Instead of competing regional standards, it established one code point per character across every writing system. The remaining challenge was how to transform those code points into bytes, which is what an encoding accomplishes.</p>
      <p><strong>UTF-8 won on backward compatibility.</strong> Rival encodings such as UTF-16 require at least two bytes, breaking any system that assumed ASCII. UTF-8 retains ASCII characters as identical single bytes, so current English text and legacy software kept functioning while everything else became representable. That practicality is why it now rules.</p>
      <p><strong>Transport encodings solved a different problem.</strong> Base64 and percent-encoding exist not because of character sets, but because protocols reserved certain bytes for structure. Email, URLs, and markup all required a method to transmit data containing their own delimiters, and that requirement is completely separate from Unicode.</p>

      <h2>Encoding and Search Engine Visibility</h2>
      <p>Encoding choices impact how content gets indexed, which matters if your pages rely on search traffic.</p>
      <p><strong>Mojibake damages indexing directly.</strong> Garbled letters mean search engines read different terms than intended. A keyword with a corrupted apostrophe is not the term you want to rank for, and the damage remains invisible in any view rendering the text properly.</p>
      <p><strong>Percent-encoding harms URL legibility and sharing rates.</strong> A path congested with escape codes appears messy on search pages and discourages user clicks or shares. Opting for clean ASCII slugs rather than encoded unicode characters typically yields crisper URLs, though this requires balancing against the natural dialects of regional audiences.</p>
      <p><strong>Internationalized domains display inconsistently.</strong> Some environments show the Unicode version while others show Punycode, meaning a domain designed to read naturally in one script might appear as an xn-- string in search results, browser address bars, or link previews depending on the user's client.</p>
      <p><strong>Declared and actual encoding must agree.</strong> A page stating one charset while delivering another can display correctly in a lenient browser yet get indexed wrongly by a crawler that trusts the declaration, a failure mode that easily escapes casual review.</p>

      <h2>Related Tool Categories</h2>
      <p>To convert JSON, YAML, XML, and Markdown, check out the{' '} <Link href="/ai-tools/data-format-converters">data format converters</Link>. For hashing, JWT decoding, and other developer utilities, check out the{' '} <Link href="/ai-tools/developer-tools">developer tools</Link>. For invisible characters and whitespace problems, check out the <Link href="/ai-tools/text-tools">text tools</Link>. The complete{' '} <Link href="/ai-tools">tool directory</Link> can be searched.</p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is the difference between encoding and encryption?',
    answer:
      'Data transformation through encoding changes its representation to safely cross a transport channel without needing any secret key to reverse it. Encryption alters data so only the correct key holder can decode it. Since Base64 and URL encoding offer zero privacy, treating them as secure mechanisms is a frequent root cause of security incidents.',
  },
  {
    category: 'General',
    question: 'Are these encoding utilities free of charge?',
    answer:
      'Yes. Every tool in this collection is entirely free, requires no account, and has zero usage caps.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is it secure to paste an API key or token into these utilities?',
    answer:
      'Every process runs inside your browser, meaning no data is logged, stored, or transmitted anywhere. Normal precautions apply: active tokens remain sensitive credentials, so refrain from pasting production secrets on shared devices, and rotate any credentials suspected of compromise.',
  },
  {
    category: 'Technical',
    question: 'How does Base64 function?',
    answer:
      'It converts every block of three input bytes into four ASCII characters chosen from a 64-character set of digits, letters, slashes, and plus signs, using equals symbols for padding at the end. This enables binary data to travel across text-only mediums like URLs, JSON, and email.',
  },
  {
    category: 'Technical',
    question: 'Why does Base64 increase file sizes?',
    answer:
      'Because each group of three input bytes yields four output characters, introducing a fixed overhead of around 33 percent. This expansion is the trade-off for embedding binary data wherever text is permitted, making small icon inlines as data URIs practical while large photo inlines usually are not.',
  },
  {
    category: 'Technical',
    question: 'What is Base64url and why is my JWT failing to decode?',
    answer:
      'Base64url substitutes plus and slash with underscores and hyphens since those original characters hold special meaning in URLs, and it typically omits padding. Because JSON Web Tokens rely on this variant, pasting a JWT chunk into a standard Base64 decoder can yield errors or corrupted output.',
  },
  {
    category: 'Technical',
    question: 'Why does my Base64 string fail parsing?',
    answer:
      'This usually stems from incorrect padding since lengths must be multiples of four, or from line breaks and whitespace copied from log lines or email headers. Feeding Base64url data into a standard decoder can also result in gibberish rather than a clean failure.',
  },
  {
    category: 'Technical',
    question: 'What is percent-encoding?',
    answer:
      'The method for encoding URL characters that would otherwise carry structural importance or sit outside the permissible set. Each character becomes a percent symbol followed by its hexadecimal byte value, turning a space into %20, as defined by RFC 3986.',
  },
  {
    category: 'Technical',
    question: 'Why is a space occasionally represented as %20 and other times as a plus sign?',
    answer:
      'This is a legacy artifact of HTML form submissions. While spaces translate to %20 in URL paths, they historically became plus signs within query strings. Consequently, an actual plus sign in query data requires %2B encoding to prevent it from turning into a space during decoding.',
  },
  {
    category: 'Technical',
    question: 'What is double encoding and how can I prevent it?',
    answer:
      'This occurs when already-encoded data gets processed again, turning percent signs into %2520. The final output looks plausible yet resolves incorrectly. It usually happens when two code layers independently encode the same value, and the solution is assigning ownership of the encoding step rather than adding more decoding.',
  },
  {
    category: 'Technical',
    question: 'What is UTF-8 and why does it serve as the default?',
    answer:
      'UTF-8 translates Unicode code points into bytes, utilizing one byte for ASCII characters and two to four bytes for all others. This keeps English text efficient and backward-compatible while supporting every global writing system, making it the overwhelming standard for web content today.',
  },
  {
    category: 'Technical',
    question: 'What is Punycode?',
    answer:
      'The encoding system enabling domain names with non-ASCII characters to operate on a DNS built for ASCII. Unicode labels are transformed into ASCII strings beginning with xn--, which explains why Cyrillic or Chinese domains appear as random character sequences in browser details and certificates.',
  },
  {
    category: 'Privacy and Security',
    question: 'Why is HTML entity encoding important for security?',
    answer:
      'Omission of escaping user input prior to HTML rendering is the root vulnerability behind cross-site scripting. If an unescaped script tag submitted by a user reaches another browser, it runs within that user session. Escaping must occur at output time in the appropriate context, not during input.',
  },
  {
    category: 'Privacy and Security',
    question: 'What exactly is a homograph attack?',
    answer:
      'The registration of a fake domain that visually mimics a real one by substituting Latin letters with characters from other alphabets that look identical. A Cyrillic letter can be completely indistinguishable from its Latin equivalent. Browsers combat this by displaying Punycode when character sets mix, making manual verification a smart precaution.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is it safe to use Base64 for securing sensitive data?',
    answer:
      'No. Base64 is easily reversible by anyone, needs no key, and is instantly recognizable. Anything requiring secrecy demands proper encryption both in transit and at rest, along with access control. Base64 credentials left in source code or config files remain just as vulnerable as plaintext.',
  },
  {
    category: 'Usage',
    question: 'Ought I to inline images as Base64 data URIs?',
    answer:
      'Only small ones. The 33 percent size expansion trades extra bytes to remove an HTTP request, which benefits assets under roughly 2 KB like small icons. Larger images should remain separate files since they cache independently, support modern formats, and load without blocking parsing.',
  },
  {
    category: 'Usage',
    question: 'Should I encode a whole URL or just parts of it?',
    answer:
      'Only the parts. Encoding rules vary across path segments, query parameters, and fragments, which explains why many languages provide distinct functions for each. Running a whole-URL encoder on a component, or a component encoder on a full URL, yields subtly incorrect results either way.',
  },
  {
    category: 'Usage',
    question: 'When should I escape HTML, on input or output?',
    answer:
      'On output, at render time, specifically within the context where the value gets used. Since the same value might be safe in one scenario and hazardous in another, escaping during input either misses edge cases or damages stored data. Saving raw values and escaping upon render is the standard method.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my text show strange symbols instead of apostrophes?',
    answer:
      'Mojibake, triggered when UTF-8 bytes get parsed as Latin-1 or Windows-1252. Every byte of a multi-byte character renders individually, turning a single curly apostrophe into multiple odd symbols. The underlying data typically remains intact with only the interpretation failing, making it frequently recoverable.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What does a black diamond question mark mean?',
    answer:
      'It acts as a replacement character, indicating the system failed to represent the original data entirely and inserted a placeholder. Unlike mojibake, this is normally irreversible because the initial value was discarded rather than misread. It usually points to text passing through a restrictive character set.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my file fail to parse at position zero?',
    answer:
      'Almost certainly due to a byte order mark at the beginning. It remains invisible inside editors but catches many parsers off guard, making the file appear flawless while failing instantly. UTF-8 does not require a BOM, and including one generally creates more issues than it fixes.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do HTML entities appear as literal text on my page?',
    answer:
      'Double encoding. The content was escaped once and subsequently escaped again, causing the ampersand in the escape sequence to be escaped itself. Consequently, the page shows the entity code rather than the intended character. A single decoding step fixes it, and tracking the offending escape layer prevents recurrence.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Which encoding should I use for what?',
    answer:
      'Base64 works best for embedding binary within text formats. URL encoding suits anything entering a URL path, query, or fragment. HTML entity encoding applies when rendering untrusted content as HTML. UTF-8 serves as the default character encoding everywhere. None of them protect data requiring confidentiality.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between hex and Base64 for binary data?',
    answer:
      'Hex uses two characters per byte, doubling the size, and maps directly since one hex digit equals exactly four bits. Base64 uses four characters for every three bytes, adding about 33 percent overhead, making it more compact. Hex is preferred for inspection and viewing hashes, whereas Base64 is favored for transport.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why is hexadecimal used for hashes and colour values?',
    answer:
      'Because a single hex digit maps precisely to four bits, meaning each byte equals exactly two digits. This creates a direct, readable relationship between the representation and the raw data that decimal lacks, which is vital when handling bit patterns instead of typical numbers.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What is the difference between form encoding and multipart form data?',
    answer:
      'Standard form encoding percent-encodes every field, working well for text while failing for binary due to size bloat. Multipart form data uses boundary markers to separate fields and transmits binary data directly without encoding, which explains why file uploads rely on it and why upload endpoints reject standard form encoding.',
  },
  {
    category: 'General',
    question: 'What is the difference between character encodings and transport encodings?',
    answer:
      'Character encodings like UTF-8 define how a character turns into bytes, necessary because writing systems contain vastly more characters than a single byte can hold. Transport encodings like Base64 and percent-encoding specify how data with protocol-reserved characters moves through a protocol safely. Identifying which group a problem falls into usually reveals the solution.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What occurs when a data value undergoes multiple encoding steps in succession?',
    answer:
      'The layers build up and must be reversed in the proper sequence. A value encoded with Base64, embedded into JSON, and then placed inside a URL has undergone three encodings. Confusion regarding this sequence frequently results in values decoding into gibberish instead of failing cleanly, making the issue much harder to identify.',
  },
  {
    category: 'Privacy and Security',
    question: 'Are Base64-encoded secrets inside configuration files actually secure?',
    answer:
      'No. Base64 encoding used in configuration and secret management, particularly Kubernetes secrets, serves as a serialization convenience rather than a true security safeguard. Anyone capable of reading the file can decode that value instantly. Credentials encoded in Base64 remain just as exposed as plaintext equivalents and demand identical access controls.',
  },
  {
    category: 'Privacy and Security',
    question: 'Why is HTTP Basic authentication secure solely when used over HTTPS?',
    answer:
      'Because it transmits credentials as Base64 strings inside an Authorization header, which anyone intercepting the network traffic can easily decode. This encoding offers zero confidentiality by itself. Running over HTTPS provides the transport layer security that the encoding lacks, which is why Basic auth over plain HTTP essentially sends passwords in the clear.',
  },
  {
    category: 'Technical',
    question: 'Where does Base64 typically appear in standard software development?',
    answer:
      'Data URIs containing small embedded assets, HTTP Basic authentication headers, email attachments dating back to SMTP designs limited to seven-bit ASCII, JWT header and payload sections, PEM-format keys and certificates, and stored configuration secrets. Spotting it immediately can save hours of troubleshooting time.',
  },
  {
    category: 'Technical',
    question: 'Why do so many distinct encodings continue to exist?',
    answer:
      'History. ASCII originally presumed that every character equaled one single byte, and regional code pages subsequently utilized the extra eighth bit differently, meaning identical bytes represented entirely different characters depending on undocumented assumptions. Unicode ultimately unified the character set, while UTF-8 triumphed regarding backward compatibility by keeping original ASCII bytes unchanged.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my webhook signature validation process keep failing?',
    answer:
      'Typically because the signature was computed against a re-serialized message body instead of the exact raw bytes received. Parsing a JSON payload and re-encoding it can alter whitespace or key order, which in turn changes the resulting hash. Always hash the raw request body precisely as it arrived, prior to any parsing steps.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Should data be transmitted inside the query string or the request body?',
    answer:
      'Any sensitive or lengthy data belongs inside the body. Query strings must undergo percent-encoding, face strict URL length restrictions that differ across servers and proxies, and remain fully exposed within server logs and browser history. Request bodies suffer from none of these limitations.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Does SEO get impacted by encoding?',
    answer:
      'Yes, in several distinct ways. Mojibake means search engines encounter different words than intended, meaning a keyword featuring a corrupted apostrophe is not your target keyword. Heavily percent-encoded URLs read poorly in search results. Furthermore, a page declaring one character set while serving another might render correctly in a browser yet still index improperly.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How can I correctly declare UTF-8 consistently across an entire tech stack?',
    answer:
      'Explicitly, at every individual layer rather than depending upon default settings. Define the charset in HTTP response headers, declare it via an HTML meta tag, configure both the database and its connection to utilize full UTF-8 collation, and ensure source files are saved using UTF-8. Layer mismatches are the primary cause of mojibake.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I approach debugging an encoding issue in a systematic manner?',
    answer:
      'Trace precisely where the data undergoes transformation. Inspect raw bytes at each individual phase, since what a text editor displays represents an already interpreted version. Determine whether you are observing mojibake, which can be fixed, or replacement characters, which cannot. Then locate the layer where an incorrect encoding was assumed rather than patching symptoms downstream.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How can I properly verify a suspicious internationalized domain name?',
    answer:
      'Decode it into its Punycode format and inspect the literal label. A domain rendering identically to a legitimate site might utilize characters from an entirely different script, and the xn-- prefix reveals this instantly. Modern browsers implement mitigations for mixed-script labels, but those protections remain imperfect.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
