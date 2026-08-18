import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>Encoding and decoding tools</strong> convert text between representations so it survives
        transport through systems that would otherwise corrupt it. This category collects a full set of tools
        covering <Link href="/base64-encode">Base64</Link>,{' '}
        <Link href="/url-encode">URL encoding</Link>,{' '}
        <Link href="/text-to-html-entities">HTML entities</Link>,{' '}
        <Link href="/utf8-encode">UTF-8</Link>,{' '}
        <Link href="/idn-encode">internationalized domain names</Link>,{' '}
        <Link href="/text-to-hex">hexadecimal</Link>, and{' '}
        <Link href="/text-to-morse-code">Morse code</Link>.
      </p>
      <p>
        One thing is worth stating before anything else, because misunderstanding it causes real security
        incidents: <strong>encoding is not encryption</strong>. Encoded data is reversible by anyone who
        receives it, with no key and no secret involved. That is the entire point. If you ever find
        yourself thinking that Base64 will keep something confidential, stop and use actual cryptography
        instead.
      </p>
      <p>
        The tools divide into two families that solve different problems. Character encodings such as
        UTF-8 answer the question of how a character becomes bytes, which arises because writing systems
        contain far more characters than a byte can represent. Transport encodings such as Base64 and
        percent-encoding answer a different question: how data containing a protocol reserved characters
        travels through that protocol without breaking it. Knowing which family a problem belongs to
        usually identifies the fix.
      </p>
      <p>
        Every tool here runs entirely in your browser. Nothing you paste is uploaded, logged, or stored,
        which matters because these utilities routinely handle tokens, credentials, and API payloads
        during debugging.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>Base64: Binary Data as Text</h2>
      <p>
        The <Link href="/base64-encode">Base64 encoder</Link> and{' '}
        <Link href="/base64-decode">Base64 decoder</Link> handle the most widely used binary-to-text
        encoding on the web.
      </p>
      <p>
        Base64 exists because many systems were designed to carry text and mishandle arbitrary binary
        data. Email, JSON, XML, and URLs all have characters with special meaning, and raw binary
        containing those bytes breaks them. Base64 represents every three bytes of input as four ASCII
        characters drawn from a 64-character alphabet of letters, digits, plus, and slash, with equals
        signs padding the end.
      </p>
      <p>
        <strong>The size cost is roughly 33 percent.</strong> Four output characters for every three input
        bytes is the fixed overhead, and it is the trade you accept for the ability to embed binary
        anywhere text is allowed. This is why inlining a small icon as a data URI is usually worthwhile
        and inlining a large photograph is usually not.
      </p>
      <p>
        <strong>Base64url is a distinct variant.</strong> Standard Base64 uses plus and slash, both of
        which have meaning in URLs. Base64url substitutes hyphen and underscore and typically omits
        padding. JSON Web Tokens use this variant, which is why pasting a JWT segment into a standard
        Base64 decoder sometimes fails or produces garbage.
      </p>
      <p>
        <strong>Common failure modes</strong> are worth recognizing. Incorrect padding causes decode
        errors, since the length must be a multiple of four. Whitespace and line breaks introduced by
        copying from an email header or a wrapped log line break decoding unless stripped. And decoding
        succeeds while producing nonsense when the input was Base64url and the decoder expected standard
        Base64.
      </p>

      <h2>URL Encoding: Percent-Encoding for the Web</h2>
      <p>
        The <Link href="/url-encode">URL encoder</Link>,{' '}
        <Link href="/url-decode">URL decoder</Link>, and{' '}
        <Link href="/url-encoder-decoder">combined URL encoder and decoder</Link> handle
        percent-encoding, defined in RFC 3986.
      </p>
      <p>
        URLs have a restricted character set, and several characters carry structural meaning: the
        question mark begins a query string, the ampersand separates parameters, the equals sign assigns
        values, the hash introduces a fragment, and the slash delimits path segments. When any of these
        appears in data rather than structure, it must be percent-encoded as a byte value preceded by a
        percent sign.
      </p>
      <p>
        The space character is the most familiar case, encoded as %20 in paths and often as a plus sign in
        query strings, a legacy of HTML form submission that continues to cause confusion. A literal plus
        sign in query data must therefore itself be encoded as %2B, or it will be read as a space.
      </p>
      <p>
        <strong>Double encoding is the classic bug.</strong> If already-encoded data is encoded again, the
        percent signs are themselves encoded, so %20 becomes %2520. The result is a URL that looks
        approximately right and resolves to the wrong thing, or to nothing. This typically happens when
        two layers of code both helpfully encode the same value, and the fix is to establish which layer
        owns encoding rather than adding a decode step.
      </p>
      <p>
        <strong>Encoding context matters.</strong> The rules differ between a path segment, a query
        parameter, and a fragment, which is why some languages provide separate functions for each. Using
        a whole-URL encoder on a component, or a component encoder on a whole URL, produces subtly wrong
        results in both directions.
      </p>

      <h2>HTML Entities: Escaping Markup</h2>
      <p>
        The <Link href="/text-to-html-entities">text to HTML entities converter</Link> and{' '}
        <Link href="/html-entities-to-text">HTML entities to text converter</Link> handle escaping for web
        content.
      </p>
      <p>
        Certain characters carry structural meaning in HTML. The less-than sign opens a tag, the ampersand
        begins an entity reference, and quotation marks delimit attribute values. Displaying these
        literally requires replacing them with entity references such as the named forms for ampersand,
        less-than, and greater-than, or numeric references.
      </p>
      <p>
        <strong>This is a security control, not a formatting nicety.</strong> Failing to escape
        user-supplied content before rendering it as HTML is the mechanism behind cross-site scripting.
        If a user can submit a script tag that reaches another user&apos;s browser unescaped, it executes
        with that user&apos;s session. Escaping on output is the standard defence, and it must happen at
        render time in the correct context rather than on input, since the same value may be safe in one
        context and dangerous in another.
      </p>
      <p>
        <strong>Double encoding shows up here too.</strong> Content escaped once and then escaped again
        displays the entity code as literal text, so a reader sees the escape sequence rather than the
        character. This commonly happens when a content management system escapes content that arrived
        already escaped, and it is the cause of visible ampersand-hash sequences on published pages.
      </p>

      <h2>UTF-8 and Character Encoding</h2>
      <p>
        The <Link href="/utf8-encode">UTF-8 encoder</Link> and{' '}
        <Link href="/utf8-decode">UTF-8 decoder</Link> convert between characters and their byte
        representations.
      </p>
      <p>
        Unicode assigns a code point to every character across every writing system. An encoding
        determines how those code points become bytes. UTF-8 uses a single byte for ASCII characters,
        keeping English text compact and backward compatible with older systems, and two to four bytes for
        everything else. It is now the overwhelming majority of web content and the sensible default for
        essentially everything.
      </p>
      <p>
        <strong>Mojibake is what an encoding mismatch looks like.</strong> When UTF-8 bytes are
        interpreted as Latin-1 or Windows-1252, each byte of a multi-byte character renders separately, so
        a single curly apostrophe becomes several strange symbols. The underlying data is usually intact
        and only the interpretation is wrong, which means it is frequently recoverable once you identify
        what happened.
      </p>
      <p>
        <strong>Replacement characters mean data was lost.</strong> A black diamond containing a question
        mark, or a bare question mark where a letter belongs, indicates the system could not represent the
        character and substituted a placeholder. Unlike mojibake, this is generally unrecoverable, because
        the original value was discarded rather than misread.
      </p>
      <p>
        <strong>Byte order marks cause parse failures.</strong> A BOM at the start of a file is invisible
        in editors but unexpected by many parsers, producing errors that point at position zero in a file
        that looks perfect. UTF-8 does not require a BOM, and including one causes more problems than it
        solves.
      </p>

      <h2>Internationalized Domain Names</h2>
      <p>
        The <Link href="/idn-encode">IDN encoder</Link> and{' '}
        <Link href="/idn-decode">IDN decoder</Link> convert between Unicode domain names and their
        Punycode representation.
      </p>
      <p>
        The domain name system was designed for a limited ASCII character set, so domains containing
        accented letters, Cyrillic, Arabic, Chinese, or emoji need a representation DNS can carry.
        Punycode encodes Unicode domain labels into ASCII strings prefixed with xn--, which is why a
        domain that displays in one script appears in browser tooling and certificate details as a string
        of seemingly random characters.
      </p>
      <p>
        <strong>The homograph attack is the security concern here.</strong> Many characters across
        different scripts are visually identical or near-identical to Latin letters. A Cyrillic letter
        that renders exactly like a Latin one allows registration of a domain visually indistinguishable
        from a legitimate site while being an entirely different address. Browsers mitigate this by
        displaying Punycode rather than Unicode when a label mixes scripts suspiciously, but the defence
        is imperfect. Decoding a domain to see its actual Punycode form is a genuine verification step
        when something looks off.
      </p>

      <h2>Hexadecimal and Morse</h2>
      <p>
        The <Link href="/text-to-hex">text to hex converter</Link> represents characters as their
        hexadecimal byte values. Hexadecimal is convenient because one hex digit maps exactly to four
        bits, so each byte is precisely two digits, making the relationship between the representation and
        the underlying data direct in a way decimal is not. It is the standard way to display hashes,
        colour values, memory contents, and binary data under inspection.
      </p>
      <p>
        The <Link href="/text-to-morse-code">text to Morse code converter</Link> and{' '}
        <Link href="/morse-code-translator">Morse code translator</Link> handle a rather older encoding.
        Morse represents letters as sequences of short and long signals, with code length inversely
        related to letter frequency in English, which is why E is a single dot and Q takes four symbols.
        That frequency weighting is an early example of the compression principle underlying modern
        encoding schemes. Morse remains in use in amateur radio and aviation navigation beacons, and it is
        one of very few encodings transmissible by sound, light, or touch.
      </p>

      <h2>Data URIs and Where Base64 Appears</h2>
      <p>
        Base64 turns up in more places than most people realize, and recognizing it saves debugging time.
      </p>
      <p>
        <strong>Data URIs</strong> embed a resource directly in a document rather than referencing an
        external file. The format states a MIME type, declares base64 encoding, and follows with the
        encoded payload. They are common for small icons in CSS, inline SVG, and email images, and they
        eliminate an HTTP request at the cost of size and cacheability.
      </p>
      <p>
        <strong>HTTP Basic authentication</strong> transmits credentials as Base64 in an Authorization
        header. This is worth understanding precisely because it looks like protection and is not: the
        credentials are recoverable by anyone who sees the header. Basic auth is only acceptable over
        HTTPS, where the transport layer provides the confidentiality the encoding does not.
      </p>
      <p>
        <strong>Email attachments</strong> use Base64 because SMTP was designed for seven-bit ASCII text.
        Any binary attachment is encoded, which is why raw email source contains long blocks of apparently
        random characters and why attachments inflate message size.
      </p>
      <p>
        <strong>JSON Web Tokens</strong> use Base64url for their header and payload segments. The
        significant consequence is that a JWT payload is encoded, not encrypted, so anyone holding the
        token can read every claim inside it. Sensitive data must never be placed there on the assumption
        it is hidden.
      </p>
      <p>
        <strong>Certificates and keys in PEM format</strong> are Base64-encoded binary wrapped in
        begin and end markers. This is why a certificate file is readable text that means nothing to a
        human reader.
      </p>
      <p>
        <strong>Configuration and secret storage</strong> frequently Base64-encodes values, notably in
        Kubernetes secrets. This is a serialization convenience, not a security measure, and treating
        Base64-encoded secrets as protected is a common and consequential misunderstanding.
      </p>

      <h2>Encoding in APIs and Data Exchange</h2>
      <p>
        Most encoding problems surface at boundaries between systems, and a few patterns account for the
        majority of them.
      </p>
      <p>
        <strong>Query strings versus request bodies.</strong> Data in a query string must be
        percent-encoded and is subject to URL length limits that vary by server and proxy. Data in a
        request body has no such constraint and is not exposed in server logs or browser history, which is
        why anything sensitive or lengthy belongs in the body.
      </p>
      <p>
        <strong>Content-Type declarations must match reality.</strong> A response declaring one character
        set while containing another produces mojibake regardless of how carefully the data was encoded.
        The declaration is what the receiving system trusts, so an incorrect header defeats correct
        encoding entirely.
      </p>
      <p>
        <strong>Form encoding has two common variants.</strong> Standard form submission
        percent-encodes fields and is unsuitable for binary. Multipart form data separates fields with
        boundary markers and carries binary without encoding overhead, which is why file uploads use it.
      </p>
      <p>
        <strong>Nested encoding accumulates.</strong> A value that is Base64-encoded, placed in JSON, and
        then put in a URL has been encoded three times, and each layer must be reversed in the correct
        order. Confusion about the order is a frequent source of values that decode to nonsense rather
        than failing cleanly.
      </p>
      <p>
        <strong>Signatures must be computed over the right bytes.</strong> When verifying a webhook
        signature, hash the raw request body rather than a re-serialized version. Any whitespace or key
        ordering difference introduced by parsing and re-encoding changes the hash and causes verification
        to fail for reasons that look mysterious.
      </p>

      <h2>Choosing the Right Encoding</h2>
      <p>
        <strong>Use Base64</strong> when embedding binary data in a text format: images in CSS or HTML,
        file attachments in JSON, or binary payloads in email.
      </p>
      <p>
        <strong>Use URL encoding</strong> for anything placed into a URL path, query string, or fragment,
        and be careful to encode components rather than whole URLs.
      </p>
      <p>
        <strong>Use HTML entity encoding</strong> when rendering untrusted content as HTML, always at
        output time and always in the correct context.
      </p>
      <p>
        <strong>Use UTF-8</strong> as the default character encoding for everything, and declare it
        explicitly in HTTP headers, HTML meta tags, and database configuration rather than relying on
        defaults.
      </p>
      <p>
        <strong>Use none of them for secrets.</strong> Encoding provides no confidentiality. Credentials,
        tokens, and personal data require encryption in transit and at rest, and access control on top.
        If the reason you are encoding something is that you do not want someone to read it, you have
        chosen the wrong tool entirely and should reach for real cryptography instead of an encoding.
      </p>

      <h2>Why Encoding Exists: A Short History</h2>
      <p>
        The reason so many encodings exist, and why they interact awkwardly, is largely historical.
      </p>
      <p>
        <strong>ASCII established the assumption.</strong> Standardized in the 1960s with 128 characters
        in seven bits, it covered English and little else. For decades a character and a byte were
        effectively the same thing, and enormous amounts of software were written assuming that identity
        held. Much of the friction today comes from that assumption being embedded in systems that
        outlived it.
      </p>
      <p>
        <strong>Code pages fragmented the eighth bit.</strong> When the spare bit became available,
        different regions filled those 128 additional slots differently. Latin-1 covered Western European
        languages, other pages covered Cyrillic, Greek, and Hebrew, and the same byte meant different
        characters depending on which page was assumed. A document was only readable if the reader knew
        which page applied, and nothing in the file said so.
      </p>
      <p>
        <strong>Unicode unified the character set.</strong> Rather than competing regional standards, one
        code point per character across every writing system. The remaining question was how to turn those
        code points into bytes, which is what an encoding does.
      </p>
      <p>
        <strong>UTF-8 won on backward compatibility.</strong> Competing encodings such as UTF-16 use two
        bytes minimum, breaking every system that assumed ASCII. UTF-8 keeps ASCII characters as single
        identical bytes, so existing English text and existing software kept working while everything else
        became representable. That pragmatism is why it now dominates.
      </p>
      <p>
        <strong>Transport encodings solved a different problem.</strong> Base64 and percent-encoding exist
        not because of character sets but because protocols reserved certain bytes for structure. Email,
        URLs, and markup all needed a way to carry data containing their own delimiters, and that need is
        independent of Unicode entirely.
      </p>

      <h2>Encoding and Search Visibility</h2>
      <p>
        Encoding choices affect how content is indexed, which is worth knowing if the pages matter for
        search.
      </p>
      <p>
        <strong>Mojibake damages indexing directly.</strong> Garbled characters mean search engines see
        different words than you intended. A keyword containing a corrupted apostrophe is not the keyword
        you are trying to rank for, and the damage is invisible in any view that renders the text
        correctly.
      </p>
      <p>
        <strong>URL encoding affects readability and click-through.</strong> A URL heavy with percent
        sequences is harder to read in results and less likely to be clicked or shared. Using
        ASCII-friendly slugs rather than encoded non-ASCII characters generally produces cleaner links,
        though this trades against using the natural language of the audience.
      </p>
      <p>
        <strong>Internationalized domains display inconsistently.</strong> Some contexts show the Unicode
        form and others show Punycode, so a domain intended to read naturally in one script may appear as
        an xn-- string in search results, browser address bars, or link previews depending on the client.
      </p>
      <p>
        <strong>Declared and actual encoding must agree.</strong> A page declaring one charset while
        serving another can render correctly in a forgiving browser and be indexed incorrectly by a
        crawler that trusts the declaration, which is a failure mode that survives casual checking.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For JSON, YAML, XML, and Markdown conversion, see the{' '}
        <Link href="/ai-tools/data-format-converters">data format converters</Link>. For hashing, JWT
        decoding, and other developer utilities, see the{' '}
        <Link href="/ai-tools/developer-tools">developer tools</Link>. For invisible characters and
        whitespace problems, see the <Link href="/ai-tools/text-tools">text tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is the difference between encoding and encryption?',
    answer:
      'Encoding transforms data into a different representation so it survives a transport channel, and anyone can reverse it with no key involved. Encryption transforms data so only someone holding the correct key can reverse it. Base64 and URL encoding provide no confidentiality whatsoever, and treating them as though they do is a recurring source of security incidents.',
  },
  {
    category: 'General',
    question: 'Are these encoding tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is it safe to paste a token or API key into these tools?',
    answer:
      'The tools process everything in your browser, so nothing is transmitted, logged, or stored. Standard caution still applies: a live token remains a credential, so avoid pasting production secrets on shared or untrusted machines, and rotate anything you suspect has been exposed elsewhere.',
  },
  {
    category: 'Technical',
    question: 'How does Base64 work?',
    answer:
      'It represents every three bytes of input as four ASCII characters drawn from a 64-character alphabet of letters, digits, plus, and slash, with equals signs padding the end. This lets binary data travel through systems designed to carry text, such as email, JSON, and URLs.',
  },
  {
    category: 'Technical',
    question: 'Why does Base64 make files bigger?',
    answer:
      'Because four output characters represent every three input bytes, giving a fixed overhead of roughly 33 percent. That is the price of being able to embed binary anywhere text is allowed, which is why inlining a small icon as a data URI is usually worthwhile and inlining a large photograph is usually not.',
  },
  {
    category: 'Technical',
    question: 'What is Base64url and why does my JWT not decode?',
    answer:
      'Base64url is a variant substituting hyphen and underscore for plus and slash, since those two characters have meaning in URLs, and it typically omits padding. JSON Web Tokens use this variant, so pasting a JWT segment into a standard Base64 decoder can fail or produce garbage.',
  },
  {
    category: 'Technical',
    question: 'Why does my Base64 string fail to decode?',
    answer:
      'Usually incorrect padding, since the length must be a multiple of four, or whitespace and line breaks introduced when copying from an email header or a wrapped log line. It can also be Base64url input given to a standard decoder, which sometimes decodes successfully into nonsense rather than failing outright.',
  },
  {
    category: 'Technical',
    question: 'What is percent-encoding?',
    answer:
      'The mechanism for representing characters in URLs that would otherwise carry structural meaning or fall outside the allowed set. Each such character becomes a percent sign followed by its byte value in hexadecimal, so a space becomes %20. It is defined in RFC 3986.',
  },
  {
    category: 'Technical',
    question: 'Why is a space sometimes %20 and sometimes a plus sign?',
    answer:
      'A legacy of HTML form submission. Spaces are %20 in URL paths but historically encoded as plus signs in query strings. This is why a literal plus sign in query data must itself be encoded as %2B, or it will be interpreted as a space when decoded.',
  },
  {
    category: 'Technical',
    question: 'What is double encoding and how do I avoid it?',
    answer:
      'Encoding already-encoded data, so percent signs are themselves encoded and %20 becomes %2520. The result looks approximately right and resolves to the wrong thing. It usually happens when two layers of code both encode the same value, and the fix is deciding which layer owns encoding rather than adding a decode step.',
  },
  {
    category: 'Technical',
    question: 'What is UTF-8 and why is it the default?',
    answer:
      'UTF-8 maps Unicode code points to bytes, using one byte for ASCII characters and two to four for everything else. That keeps English text compact and backward compatible while representing every writing system. It is now the overwhelming majority of web content and the sensible default for essentially everything.',
  },
  {
    category: 'Technical',
    question: 'What is Punycode?',
    answer:
      'The encoding that lets domain names containing non-ASCII characters work with a DNS designed for ASCII. Unicode domain labels are encoded into ASCII strings prefixed with xn--, which is why a domain displaying in Cyrillic or Chinese appears as seemingly random characters in certificate details and browser tooling.',
  },
  {
    category: 'Privacy and Security',
    question: 'Why does HTML entity encoding matter for security?',
    answer:
      'Because failing to escape user-supplied content before rendering it as HTML is the mechanism behind cross-site scripting. If a user can submit a script tag that reaches another user browser unescaped, it executes with that user session. Escaping must happen at output time in the correct context, not on input.',
  },
  {
    category: 'Privacy and Security',
    question: 'What is a homograph attack?',
    answer:
      'Registering a domain that looks identical to a legitimate one by using characters from other scripts that render the same as Latin letters. A Cyrillic letter can be visually indistinguishable from its Latin counterpart. Browsers mitigate this by showing Punycode when scripts mix suspiciously, but decoding a domain yourself is a genuine verification step.',
  },
  {
    category: 'Privacy and Security',
    question: 'Can I use Base64 to hide sensitive data?',
    answer:
      'No. Base64 is trivially reversible by anyone, requires no key, and is recognizable on sight. Anything requiring confidentiality needs real encryption in transit and at rest, plus access control. Base64-encoded credentials in source code or configuration are exactly as exposed as plaintext ones.',
  },
  {
    category: 'Usage',
    question: 'Should I inline images as Base64 data URIs?',
    answer:
      'Only small ones. The 33 percent size overhead trades bytes for an eliminated HTTP request, which pays off for assets under roughly 2 KB such as small icons. Larger images are better as separate files, since those can be cached independently, served in modern formats, and loaded without blocking parsing.',
  },
  {
    category: 'Usage',
    question: 'Should I encode a whole URL or just parts of it?',
    answer:
      'Just the parts. Encoding rules differ between path segments, query parameters, and fragments, which is why many languages provide separate functions for each. Running a whole-URL encoder over a component, or a component encoder over a whole URL, produces subtly wrong results in both directions.',
  },
  {
    category: 'Usage',
    question: 'When should I escape HTML, on input or output?',
    answer:
      'On output, at render time, in the context where the value is being used. The same value may be safe in one context and dangerous in another, so escaping on input either misses cases or corrupts stored data. Storing the raw value and escaping when rendering is the standard approach.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my text show strange symbols instead of apostrophes?',
    answer:
      'Mojibake, caused by UTF-8 bytes being interpreted as Latin-1 or Windows-1252. Each byte of a multi-byte character renders separately, so one curly apostrophe becomes several odd symbols. The data is usually intact and only the interpretation is wrong, so it is often recoverable.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What does a black diamond question mark mean?',
    answer:
      'It is a replacement character, meaning the system could not represent the original at all and substituted a placeholder. Unlike mojibake, this is usually unrecoverable, because the original value was discarded rather than misread. It typically means text passed through a system with a narrower character set.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my file fail to parse at position zero?',
    answer:
      'Almost certainly a byte order mark at the start. It is invisible in editors but unexpected by many parsers, so the file looks perfect while failing immediately. UTF-8 does not require a BOM, and including one generally causes more problems than it solves.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do HTML entities appear as literal text on my page?',
    answer:
      'Double encoding. The content was escaped once and then escaped again, so the ampersand in the escape sequence was itself escaped. The page then displays the entity code rather than the character it represents. Decoding once resolves it, and identifying which layer escapes prevents it recurring.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Which encoding should I use for what?',
    answer:
      'Base64 for embedding binary in text formats. URL encoding for anything going into a URL path, query, or fragment. HTML entity encoding when rendering untrusted content as HTML. UTF-8 as the default character encoding everywhere. And none of them for anything requiring confidentiality.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between hex and Base64 for binary data?',
    answer:
      'Hex uses two characters per byte, doubling the size, and maps directly since one hex digit is exactly four bits. Base64 uses four characters per three bytes, adding about 33 percent, so it is more compact. Hex is preferred for inspection and display, such as hashes, while Base64 is preferred for transport.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why is hexadecimal used for hashes and colour values?',
    answer:
      'Because one hex digit maps exactly to four bits, so every byte is precisely two digits. That makes the relationship between the representation and the underlying data direct and readable in a way decimal is not, which matters when the data is a bit pattern rather than a number.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What is the difference between form encoding and multipart form data?',
    answer:
      'Standard form encoding percent-encodes each field, which works for text and is unsuitable for binary because of the size overhead. Multipart form data separates fields with boundary markers and carries binary directly without encoding, which is why file uploads use it and why upload endpoints reject standard form encoding.',
  },
  {
    category: 'General',
    question: 'What is the difference between character encodings and transport encodings?',
    answer:
      'Character encodings such as UTF-8 answer how a character becomes bytes, which matters because writing systems contain far more characters than one byte represents. Transport encodings such as Base64 and percent-encoding answer how data containing a protocol reserved characters travels through that protocol safely. Identifying which family a problem belongs to usually points at the fix.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What happens when a value is encoded several times over?',
    answer:
      'The layers accumulate and must be reversed in the correct order. A value that is Base64-encoded, placed in JSON, then put in a URL has been encoded three times. Confusion about the order is a frequent source of values that decode into nonsense rather than failing cleanly, which makes the problem harder to spot.',
  },
  {
    category: 'Privacy and Security',
    question: 'Are Base64-encoded secrets in config files protected?',
    answer:
      'No. Base64 encoding in configuration and secret storage, notably Kubernetes secrets, is a serialization convenience rather than a security measure. Anyone who can read the file can decode the value instantly. Base64-encoded credentials are exactly as exposed as plaintext ones and need the same access controls.',
  },
  {
    category: 'Privacy and Security',
    question: 'Why is HTTP Basic authentication only safe over HTTPS?',
    answer:
      'Because it transmits credentials as Base64 in an Authorization header, which anyone observing the traffic can decode. The encoding provides no confidentiality at all. Over HTTPS the transport layer supplies the protection the encoding does not, which is why Basic auth over plain HTTP is effectively sending a password in the clear.',
  },
  {
    category: 'Technical',
    question: 'Where does Base64 show up in everyday development?',
    answer:
      'Data URIs embedding small assets, HTTP Basic authentication headers, email attachments since SMTP was designed for seven-bit ASCII, JWT header and payload segments, PEM-format certificates and keys, and configuration secret storage. Recognizing it on sight saves a great deal of debugging time.',
  },
  {
    category: 'Technical',
    question: 'Why do so many different encodings exist?',
    answer:
      'History. ASCII assumed a character was a byte, then regional code pages filled the spare eighth bit differently so the same byte meant different characters depending on assumptions nothing recorded. Unicode unified the character set, and UTF-8 won on backward compatibility by keeping ASCII bytes identical.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why does my webhook signature verification fail?',
    answer:
      'Usually because the signature was computed over a re-serialized body rather than the raw bytes received. Parsing JSON and re-encoding it can change whitespace or key ordering, which changes the hash. Always hash the raw request body exactly as it arrived, before any parsing.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Should data go in the query string or the request body?',
    answer:
      'Anything sensitive or lengthy belongs in the body. Query strings must be percent-encoded, are subject to URL length limits that vary by server and proxy, and are exposed in server logs and browser history. Request bodies have none of those constraints.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Does encoding affect SEO?',
    answer:
      'Yes, in a few ways. Mojibake means search engines see different words than you intended, so a keyword with a corrupted apostrophe is not the keyword you are targeting. Heavily percent-encoded URLs read poorly in results. And a page declaring one charset while serving another can render fine in a browser yet index incorrectly.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I declare UTF-8 properly across a stack?',
    answer:
      'Explicitly, at every layer rather than relying on defaults. Set the charset in HTTP response headers, declare it in an HTML meta tag, configure the database and its connection to use a full UTF-8 collation, and ensure files are saved as UTF-8. Mismatches between layers are the usual source of mojibake.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I debug an encoding problem systematically?',
    answer:
      'Work out where the data changes. Inspect the raw bytes at each stage, since what an editor displays is already an interpretation. Identify whether you are seeing mojibake, which is recoverable, or replacement characters, which are not. Then find the layer where the wrong encoding was assumed rather than patching the symptom downstream.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I verify a suspicious internationalized domain?',
    answer:
      'Decode it to its Punycode form and inspect the actual label. A domain that displays identically to a legitimate one may use characters from a different script entirely, and the xn-- form reveals that immediately. Browsers apply mitigations for mixed-script labels, but the protection is imperfect.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
