import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>MD5 Generator: Free Online MD5 Hash Generator and Checksum Calculator</h2>
        <p>
          MD5 (Message-Digest Algorithm 5) is one of the most widely recognized cryptographic hash
          functions in computing history. Despite being over 30 years old and no longer suitable for
          cryptographic security applications, MD5 remains ubiquitous for file integrity verification,
          checksums, content fingerprinting, caching, and non-security data deduplication tasks. Our
          free MD5 generator computes the MD5 hash of any text string or file instantly in your browser "”
          no upload to external servers, no size limits for text input, completely private.
        </p>
        <p>
          Whether you need to verify a downloaded file's integrity by comparing its MD5 checksum to
          the published value, generate content fingerprints for cache invalidation, create deterministic
          IDs from strings, check database record integrity, or simply explore how hash functions work,
          this tool gives you the MD5 digest in both uppercase and lowercase hexadecimal formats immediately.
        </p>

        <h2>What Is MD5? A Complete Technical Overview</h2>
        <p>
          MD5 was designed by Ronald Rivest and published in 1991 as RFC 1321. It belongs to the family
          of cryptographic hash functions "” algorithms that take an arbitrary-length input and produce a
          fixed-length output (the "digest" or "hash") with specific properties.
        </p>
        <p>
          MD5 produces a 128-bit (16-byte) hash value, conventionally displayed as a 32-character
          hexadecimal string:
        </p>
        <p>
          Input: <code>"Hello, World!"</code>
        </p>
        <p>
          MD5 output: <code>65a8e27d8879283831b664bd8b7f0ad4</code>
        </p>
        <p>
          The fundamental properties that define a cryptographic hash function "” and which MD5 was
          designed to satisfy "” are:
        </p>

        <h3>Determinism</h3>
        <p>
          The same input always produces the same hash. MD5("hello") is always
          <code>5d41402abc4b2a76b9719d911017c592</code>, on any machine, in any implementation,
          at any point in time. This determinism is what makes hashes useful for integrity verification
          and content addressing.
        </p>

        <h3>Fixed Output Size</h3>
        <p>
          Regardless of whether the input is a single byte or a 10 GB file, the MD5 output is always
          exactly 128 bits (32 hex characters). This enables comparisons of any two pieces of data
          with a fixed-cost equality check.
        </p>

        <h3>Avalanche Effect</h3>
        <p>
          Changing a single bit in the input produces a completely different hash output "” approximately
          half of the output bits change. This means similar inputs produce completely dissimilar hashes,
          which is why MD5 is useful for detecting even tiny changes in data.
        </p>
        <p>
          Compare:
        </p>
        <p>
          MD5("hello") = <code>5d41402abc4b2a76b9719d911017c592</code>
        </p>
        <p>
          MD5("Hello") = <code>8b1a9953c4611296a827abf8c47804d7</code>
        </p>
        <p>
          A single bit difference (case change) produces a completely different 128-bit output.
        </p>

        <h3>Pre-image Resistance (One-Way Property)</h3>
        <p>
          Given only the MD5 hash output, it should be computationally infeasible to reconstruct the
          original input. This is the "trap-door" property "” hashing is easy (milliseconds), but
          reversing requires brute force (astronomical time for strong inputs). However, for common
          passwords and short strings, precomputed lookup tables (rainbow tables) make reversal practical
          "” which is why MD5 must never be used to hash passwords.
        </p>

        <h3>Collision Resistance (Now Broken)</h3>
        <p>
          A collision is when two different inputs produce the same hash output. For a 128-bit hash,
          birthday attack theory suggests collisions should require approximately 2^64 operations to find.
          In 1996, Hans Dobbertin found weaknesses in MD5's compression function. In 2004, researchers
          demonstrated practical collision attacks. By 2008, researchers demonstrated "chosen-prefix"
          collisions "” the ability to construct two different documents with the same MD5 hash.
        </p>
        <p>
          This broken collision resistance is why MD5 is unsuitable for digital signatures, certificate
          issuance, or any application where an attacker could substitute a different document with the
          same hash.
        </p>

        <h2>How MD5 Works: The Algorithm Internals</h2>
        <p>
          MD5 processes input in 512-bit (64-byte) blocks. The algorithm:
        </p>
        <ul>
          <li>
            <strong>Padding</strong>: appends a 1 bit, then enough 0 bits, then a 64-bit representation
            of the original message length, so the total message length is a multiple of 512 bits.
          </li>
          <li>
            <strong>Initialization</strong>: four 32-bit state variables (A, B, C, D) are initialized
            to specific constants: A=0x67452301, B=0xefcdab89, C=0x98badcfe, D=0x10325476.
          </li>
          <li>
            <strong>Processing</strong>: for each 512-bit block, 64 operations are performed across
            four 16-operation rounds. Each round uses a different nonlinear function (F, G, H, I),
            precomputed sine-derived constants, and left-rotation amounts.
          </li>
          <li>
            <strong>Output</strong>: after all blocks are processed, the final values of A, B, C, D are
            concatenated to form the 128-bit digest.
          </li>
        </ul>
        <p>
          The use of four distinct nonlinear functions, 64 operations per block, and the avalanche
          effect from the rotation operations was intended to make MD5 collision-resistant. However,
          the relatively small 128-bit output size (making birthday attacks theoretically feasible at
          2^64) and weaknesses in the compression function's design ultimately made MD5 vulnerable.
        </p>

        <h2>MD5 Checksums: The Primary Legitimate Use Case</h2>
        <p>
          Despite its broken cryptographic status, MD5 remains extremely useful for <strong>non-adversarial
          integrity checking</strong>. A checksum detects accidental corruption, not malicious tampering.
          When you download a large file from a trusted server that publishes the MD5 checksum, comparing
          your downloaded file's MD5 against the published value tells you whether the file was corrupted
          during transfer (due to network errors, disk issues, or incomplete download), not whether a
          sophisticated attacker modified it.
        </p>
        <p>
          This distinction matters enormously: MD5 checksums are perfectly appropriate for verifying that
          a file you downloaded from a trusted source arrived intact. They are not appropriate for verifying
          that the source itself hasn't been compromised "” for that, you need cryptographically strong hashes
          like SHA-256 combined with digital signatures.
        </p>

        <h3>Software Distribution Checksums</h3>
        <p>
          Many open source projects publish MD5 checksums alongside their release archives. You download
          the archive, compute its MD5 hash, and compare it to the published value. If they match, the
          file downloaded without corruption. Linux distributions, database installers (MySQL, PostgreSQL),
          and development tools often use MD5 checksums for this purpose, though SHA-256 is increasingly
          preferred.
        </p>

        <h3>Amazon S3 Content Integrity</h3>
        <p>
          Amazon S3 uses MD5 as the ETag for objects uploaded without multipart upload. The ETag in the
          HTTP response headers is the MD5 of the object's content (for single-part uploads). You can
          verify data integrity after upload by computing the local file's MD5 and comparing it to the
          S3 ETag "” this is a standard data integrity pattern in S3-based workflows.
        </p>

        <h3>Database Row Fingerprinting</h3>
        <p>
          Computing MD5 of concatenated column values creates a fingerprint for a database row. Comparing
          fingerprints between source and destination databases quickly identifies changed rows without
          comparing every column value. This "hash-based change detection" pattern is widely used in ETL
          pipelines, data warehouse loading, and CDC (Change Data Capture) systems.
        </p>

        <h3>HTTP ETag Generation</h3>
        <p>
          Web servers often use MD5 of response content as the ETag header value for HTTP caching.
          Browsers cache the response with its ETag; on subsequent requests, the browser sends
          If-None-Match: [etag-value]; the server recomputes the MD5 and returns 304 Not Modified if
          unchanged. This pattern works well because MD5 is fast and ETag-based caching does not require
          cryptographic security.
        </p>

        <h3>Content Deduplication</h3>
        <p>
          Backup systems (rsync, Dropbox, AWS Backup), version control systems (Git uses SHA-1/SHA-256),
          and file sync services use hash-based deduplication: compute the hash of each file chunk, store
          identical chunks only once. While production systems now favor SHA-256 for deduplication hashes,
          MD5 is still used in some legacy systems and is fast enough for high-throughput deduplication.
        </p>

        <h2>Why MD5 Must Never Be Used for Passwords</h2>
        <p>
          Storing passwords as plain MD5 hashes (even salted) is a critical security vulnerability that
          has led to billions of credential exposures. Here is why MD5 is catastrophically wrong for
          password hashing:
        </p>

        <h3>Speed Is the Enemy</h3>
        <p>
          Password hashing requires <em>slow</em> algorithms. MD5 was designed to be fast "” modern hardware
          can compute billions of MD5 hashes per second using a GPU. An attacker with a consumer GPU can
          exhaustively test hundreds of billions of common password candidates against a stolen MD5 hash
          database in hours. A password hashing function like bcrypt, Argon2, or scrypt is deliberately
          slow "” designed to take 100ms to 500ms per hash, making the same brute-force attack take
          thousands of years.
        </p>

        <h3>Rainbow Tables</h3>
        <p>
          Rainbow tables are precomputed lookup tables mapping common inputs (passwords, phrases, patterns)
          to their MD5 hashes. Attackers can instantly "reverse" an unsalted MD5 hash by looking it up
          in a rainbow table. The MD5 of "password" (<code>5f4dcc3b5aa765d61d8327deb882cf99</code>) is
          in every rainbow table ever built. Websites like CrackStation maintain public databases of
          billions of precomputed MD5 hashes.
        </p>

        <h3>What to Use Instead</h3>
        <p>
          For password storage, use a dedicated password hashing function:
        </p>
        <ul>
          <li>
            <strong>Argon2id</strong> (current recommendation) "” winner of the 2015 Password Hashing
            Competition. Configurable memory-hardness and time-cost. Available in Python via
            <code>argon2-cffi</code>, Node.js via <code>argon2</code>, PHP 7.2+ natively, and most
            modern languages.
          </li>
          <li>
            <strong>bcrypt</strong> "” time-tested, widely supported, configurable cost factor. Use when
            Argon2 is not available. Available in virtually every programming language.
          </li>
          <li>
            <strong>scrypt</strong> "” memory-hard algorithm designed to be resistant to ASIC and GPU
            attacks. Available in Python's <code>hashlib</code>, Node.js's <code>crypto</code> module,
            and most cryptographic libraries.
          </li>
          <li>
            <strong>PBKDF2</strong> "” NIST-recommended, FIPS-compliant, built into many platforms
            (Java, .NET, iOS/macOS). Less memory-hard than bcrypt/Argon2 but acceptable with high
            iteration counts.
          </li>
        </ul>

        <h2>MD5 vs SHA-1 vs SHA-256 vs SHA-3</h2>

        <h3>MD5 (128-bit output)</h3>
        <p>
          Fastest, smallest output. Collision resistance broken since 2004. Suitable for: checksums,
          ETags, content fingerprinting (non-adversarial). Not suitable for: password hashing, digital
          signatures, certificate generation, or any security-sensitive application.
        </p>

        <h3>SHA-1 (160-bit output)</h3>
        <p>
          Designed by NSA in 1993. Collision resistance practically broken by 2017 (SHAttered attack
          demonstrated the first practical SHA-1 collision). Google's Chrome and most browsers now reject
          SHA-1-signed TLS certificates. Still used in Git (though transitioning to SHA-256) and HMAC-SHA1
          (which is still considered secure because HMAC's construction prevents the birthday attack
          exploited in SHA-1 collision attacks). Not suitable for new security applications.
        </p>

        <h3>SHA-256 (256-bit output)</h3>
        <p>
          Part of the SHA-2 family designed by NSA. No known practical weaknesses. The current standard
          for TLS certificates, code signing, blockchain (Bitcoin uses SHA-256), Git's new object format,
          HMAC in OAuth 2.0 and JWT (HS256). Slightly slower than MD5/SHA-1 but fast enough for most
          applications. Use SHA-256 for any new application that previously used MD5 for integrity checking.
        </p>

        <h3>SHA-512 (512-bit output)</h3>
        <p>
          Larger output, higher security margin. Faster than SHA-256 on 64-bit systems due to operating
          on 64-bit words. Often used where additional security margin is desired: password hashing KDFs,
          long-term digital signatures.
        </p>

        <h3>SHA-3 / Keccak (variable output)</h3>
        <p>
          Winner of the NIST SHA-3 competition in 2012. Based on the Keccak sponge construction "”
          fundamentally different from SHA-2. Provides an independent alternative to SHA-2 in case
          structural weaknesses are found. SHA3-256 and SHA3-512 are the most common. Used in Ethereum
          blockchain (Keccak-256). Less widely deployed than SHA-2 family but increasingly supported.
        </p>

        <h2>Salting MD5 Hashes</h2>
        <p>
          A salt is a random value added to the input before hashing, making two identical inputs
          produce different outputs and preventing rainbow table attacks. Even salted MD5 is insufficient
          for password storage (too fast), but salting is the correct concept to understand.
        </p>
        <p>
          With MD5 for non-password use cases, salts are sometimes added to create application-specific
          fingerprints that cannot be reversed via public rainbow tables: <code>MD5(salt + content)</code>.
          Our tool supports an optional salt/prefix/suffix that is concatenated with your input before
          hashing.
        </p>

        <h2>MD5 in Web Development and APIs</h2>

        <h3>Gravatar Profile Images</h3>
        <p>
          Gravatar (Globally Recognized Avatar) uses MD5 of a user's email address to construct avatar
          URLs: <code>https://www.gravatar.com/avatar/[md5-of-email]</code>. The email is lowercase-trimmed,
          then MD5-hashed. Many applications display user avatars using this system without storing the
          avatar themselves. Our tool lets you compute the MD5 of an email address to construct or
          verify Gravatar URLs.
        </p>

        <h3>Cache Busting</h3>
        <p>
          Content hashes in build pipelines (webpack, Vite, Rollup) append a hash to asset filenames to
          enable aggressive caching: <code>main.a3c7d9f2.js</code>. When the file changes, the hash changes,
          triggering cache invalidation. While most modern build tools use a portion of a faster hash
          (SHA-256 truncated), MD5-based versioning is still found in legacy systems.
        </p>

        <h3>Request Signing (Legacy)</h3>
        <p>
          Some older APIs (early AWS services, some payment gateways) used HMAC-MD5 for request signing.
          While HMAC-MD5 is still considered secure (HMAC's construction mitigates MD5's collision
          weaknesses), modern APIs have moved to HMAC-SHA256. If you are integrating with a legacy system
          that uses HMAC-MD5, our tool can generate MD5 hashes for testing purposes.
        </p>

        <h2>Computing MD5 Programmatically</h2>

        <h3>Python</h3>
        <p>
          <code>import hashlib; hash = hashlib.md5(b"input string").hexdigest()</code>. For large files,
          read in chunks: <code>h = hashlib.md5(); h.update(chunk); ... ; digest = h.hexdigest()</code>.
          Python's <code>hashlib</code> module provides all common hash functions (md5, sha1, sha256,
          sha512, sha3_256) with the same API.
        </p>

        <h3>Node.js</h3>
        <p>
          <code>const crypto = require('crypto'); const hash = crypto.createHash('md5')
          .update('input string').digest('hex');</code>. For files: pipe a read stream through a
          <code>crypto.Hash</code> transform stream and collect the final digest.
        </p>

        <h3>JavaScript (Browser)</h3>
        <p>
          The Web Crypto API does not include MD5 (it excludes broken algorithms). Use the
          <code>spark-md5</code> or <code>md5</code> npm packages in bundled applications. Our tool
          includes a WebAssembly MD5 implementation for browser-side computation.
        </p>

        <h3>PHP</h3>
        <p>
          <code>md5($string)</code> returns the hexadecimal MD5 hash. <code>md5_file($path)</code>
          computes the MD5 of a file. <code>hash('md5', $string, $raw_output)</code> for raw binary output.
        </p>

        <h3>Java</h3>
        <p>
          <code>MessageDigest.getInstance("MD5")</code> from <code>java.security</code>.
          <code>digest.update(input.getBytes(StandardCharsets.UTF_8)); byte[] hash = digest.digest();</code>
          Convert to hex with <code>new BigInteger(1, hash).toString(16)</code>.
        </p>

        <h3>Go</h3>
        <p>
          <code>import "crypto/md5"; sum := md5.Sum([]byte("input string")); hex.EncodeToString(sum[:])</code>.
        </p>

        <h3>Shell / Command Line</h3>
        <p>
          Linux/macOS: <code>echo -n "input" | md5sum</code> (Linux) or <code>md5 -s "input"</code> (macOS).
          For files: <code>md5sum filename</code> (Linux) or <code>md5 filename</code> (macOS).
          Windows PowerShell: <code>Get-FileHash file.txt -Algorithm MD5</code>.
        </p>

        <h2>MD5 Output Formats</h2>
        <p>
          Our generator provides MD5 output in multiple formats:
        </p>
        <ul>
          <li>
            <strong>Lowercase hexadecimal</strong> (default): <code>5d41402abc4b2a76b9719d911017c592</code>
            "” the most common convention, used by most command-line tools and APIs.
          </li>
          <li>
            <strong>Uppercase hexadecimal</strong>: <code>5D41402ABC4B2A76B9719D911017C592</code>
            "” required by some legacy systems and Windows-centric tools.
          </li>
          <li>
            <strong>Base64</strong>: <code>XUFAKrxLKna5cZ2REBfFkg==</code> "” 24 characters, used
            in HTTP Content-MD5 headers and some storage APIs (Amazon S3 Content-MD5 header expects
            Base64-encoded raw binary MD5).
          </li>
          <li>
            <strong>Raw binary (hex escaped)</strong>: the 16 raw bytes as <code>\x5d\x41...</code>
            "” for use in binary protocols.
          </li>
        </ul>

        <h2>Verifying File Integrity with MD5</h2>
        <p>
          To verify a downloaded file's integrity using a published MD5 checksum:
        </p>
        <ul>
          <li>
            <strong>Linux</strong>: <code>md5sum downloaded-file.tar.gz</code> then compare the output
            to the publisher's checksum
          </li>
          <li>
            <strong>macOS</strong>: <code>md5 downloaded-file.pkg</code>
          </li>
          <li>
            <strong>Windows PowerShell</strong>: <code>Get-FileHash file.zip -Algorithm MD5 | Select-Object Hash</code>
          </li>
          <li>
            <strong>Python one-liner</strong>: <code>python3 -c "import hashlib; print(hashlib.md5(open('file','rb').read()).hexdigest())"</code>
          </li>
        </ul>
        <p>
          If the computed hash matches the published value exactly (case-insensitive), the file is intact.
          Any difference, even a single character, means the file is corrupted and should be re-downloaded.
        </p>

        <h2>Privacy and Performance</h2>
        <p>
          All MD5 computation in our tool runs entirely in your browser. No input text, files, or hash
          values are transmitted to our servers. The computation is performed using a highly optimized
          WebAssembly implementation that handles large inputs at near-native speed. Your data "” including
          any sensitive text or document content you hash "” remains completely private and never leaves
          your machine.
        </p>
        <p>
          For file hashing, the file is read locally using the File API and processed in chunks. Large files
          (hundreds of megabytes) are processed progressively with a progress indicator. The file never
          leaves your browser "” only the hash computation happens, entirely client-side.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is MD5 and what does it produce?',
    answer:
      'MD5 (Message-Digest Algorithm 5) is a hash function that produces a 128-bit (16-byte) fixed-size output from any input, displayed as a 32-character hexadecimal string. It was designed by Ronald Rivest in 1991 and is defined in RFC 1321.',
  },
  {
    category: 'General',
    question: 'Is MD5 the same as MD5 checksum?',
    answer:
      'Yes "” the terms are used interchangeably. An MD5 "checksum" or "hash" is the same output: the 32-character hex string produced by running the MD5 algorithm on your input. The word "checksum" emphasizes the integrity-verification use case.',
  },
  {
    category: 'General',
    question: 'What is the MD5 hash of an empty string?',
    answer:
      'The MD5 hash of an empty string ("") is d41d8cd98f00b204e9800998ecf8427e. This is a fixed, well-known value used in testing and as a reference. The hash of any input is deterministic "” the same input always produces the same output.',
  },
  {
    category: 'Security',
    question: 'Is MD5 safe to use?',
    answer:
      'MD5 is safe for non-adversarial use cases like file integrity checksums (verifying a download arrived intact) and content fingerprinting. It is NOT safe for password hashing (too fast, vulnerable to brute force), digital signatures, or certificate generation (collision attacks are practical since 2004).',
  },
  {
    category: 'Security',
    question: 'Why should I not use MD5 for passwords?',
    answer:
      'MD5 is catastrophically wrong for passwords because: (1) it is extremely fast "” GPUs compute billions of MD5 hashes per second, enabling brute-force attacks in hours; (2) rainbow tables precompute MD5 hashes of common passwords for instant lookup. Use Argon2id, bcrypt, or scrypt instead "” algorithms designed to be deliberately slow.',
  },
  {
    category: 'Security',
    question: 'Can MD5 be reversed or cracked?',
    answer:
      'MD5 cannot be mathematically reversed. However, for short inputs and common passwords, rainbow tables (precomputed hash-to-input databases) and brute-force GPU attacks make "cracking" practical. Sites like CrackStation have billions of precomputed MD5 hashes. Strong, unique inputs remain practically uncrackable.',
  },
  {
    category: 'Security',
    question: 'What are MD5 collisions?',
    answer:
      'A collision is when two different inputs produce the same MD5 hash. Practical MD5 collision attacks were demonstrated in 2004. Chosen-prefix collisions (constructing two different meaningful documents with the same MD5) were demonstrated in 2008, enabling forged certificates. This is why MD5 is banned for digital signatures and certificates.',
  },
  {
    category: 'Security',
    question: 'What should I use instead of MD5?',
    answer:
      'For integrity checking: SHA-256 (same concept, cryptographically secure). For password hashing: Argon2id, bcrypt, or scrypt (deliberately slow, memory-hard). For digital signatures: SHA-256 or SHA-3 with RSA or ECDSA. For HMACs: HMAC-SHA256. MD5 is still acceptable for checksums and non-security fingerprinting.',
  },
  {
    category: 'Use Cases',
    question: 'What are legitimate uses of MD5 today?',
    answer:
      'Legitimate current uses include: file integrity checksums (non-adversarial), Amazon S3 ETags, Gravatar profile image URLs (MD5 of email), HTTP ETag headers for caching, database row fingerprinting for change detection, legacy API request signing (HMAC-MD5), and content deduplication in some legacy systems.',
  },
  {
    category: 'Use Cases',
    question: 'How does Gravatar use MD5?',
    answer:
      'Gravatar constructs avatar URLs using MD5 of the user&#39;s email address: https://www.gravatar.com/avatar/[md5-of-lowercase-trimmed-email]. Email john.doe@example.com â†’ MD5 â†’ avatar URL. This is a legitimate MD5 use case: the hash is just an opaque identifier, not a security mechanism.',
  },
  {
    category: 'Use Cases',
    question: 'How do I verify a file\'s MD5 checksum?',
    answer:
      'Linux: md5sum filename (compare output to published checksum). macOS: md5 filename. Windows PowerShell: Get-FileHash filename -Algorithm MD5. If the computed hash matches the publisher&#39;s checksum exactly (case-insensitive), the file arrived intact. Any difference means the file is corrupted.',
  },
  {
    category: 'Technical',
    question: 'How long is an MD5 hash?',
    answer:
      'An MD5 hash is 128 bits (16 bytes) of binary data, displayed as 32 hexadecimal characters. In Base64 format, it is 24 characters (including == padding). All MD5 outputs are exactly this length regardless of input size.',
  },
  {
    category: 'Technical',
    question: 'Does MD5 of the same input always produce the same output?',
    answer:
      'Yes "” MD5 is a deterministic function. MD5("hello") will always be 5d41402abc4b2a76b9719d911017c592 on any machine, using any compliant implementation, at any time. This determinism is what makes it useful for integrity verification and content addressing.',
  },
  {
    category: 'Technical',
    question: 'Does changing one character completely change the MD5 hash?',
    answer:
      'Yes "” the avalanche effect means even a single-bit change in the input produces a completely different 128-bit output (approximately half the output bits change). MD5("hello") and MD5("Hello") are completely different hashes despite differing by only one bit (case change).',
  },
  {
    category: 'Technical',
    question: 'What is HMAC-MD5 and is it secure?',
    answer:
      'HMAC-MD5 is MD5 used within the HMAC (Hash-based Message Authentication Code) construction. HMAC&#39;s construction prevents the length-extension attacks and collision exploits that affect raw MD5. HMAC-MD5 is still considered secure for MAC purposes, though HMAC-SHA256 is preferred for new applications.',
  },
  {
    category: 'Comparison',
    question: 'What is the difference between MD5 and SHA-256?',
    answer:
      'MD5 produces 128 bits (32 hex chars); SHA-256 produces 256 bits (64 hex chars). SHA-256 has no known practical weaknesses; MD5&#39;s collision resistance is broken. SHA-256 is ~30% slower than MD5 but fast enough for virtually all use cases. Use SHA-256 for any new application that previously used MD5.',
  },
  {
    category: 'Comparison',
    question: 'What is the difference between MD5 and SHA-1?',
    answer:
      'Both are broken for security: MD5 since 2004, SHA-1 since 2017 (SHAttered attack). MD5 produces 128 bits; SHA-1 produces 160 bits. Neither should be used for digital signatures or certificates. SHA-256 is the current minimum for new security applications.',
  },
  {
    category: 'Code',
    question: 'How do I generate MD5 in Python?',
    answer:
      'import hashlib; hash_value = hashlib.md5(b"input string").hexdigest(). For unicode strings: hashlib.md5("input".encode("utf-8")).hexdigest(). For files: h = hashlib.md5(); [h.update(chunk) for chunk in iter(lambda: f.read(8192), b"")]; h.hexdigest().',
  },
  {
    category: 'Code',
    question: 'How do I generate MD5 in Node.js?',
    answer:
      'const crypto = require("crypto"); const hash = crypto.createHash("md5").update("input string").digest("hex"). For files: const hash = crypto.createHash("md5"); fs.createReadStream("file").pipe(hash); hash.on("finish", () => console.log(hash.digest("hex"))).',
  },
  {
    category: 'Code',
    question: 'How do I compute MD5 of a file in the browser?',
    answer:
      'Use a JavaScript MD5 library (spark-md5 for chunked processing of large files). Read the file using FileReader or the File API, compute MD5 in chunks for memory efficiency, and display the hex digest. Our tool does this for you "” drop a file to compute its MD5 without any upload.',
  },
  {
    category: 'Output',
    question: 'What is the difference between lowercase and uppercase MD5?',
    answer:
      'MD5 hashes are hexadecimal and are case-insensitive "” 5d41402abc4b2a76b9719d911017c592 and 5D41402ABC4B2A76B9719D911017C592 represent the same value. Most tools output lowercase. Always compare case-insensitively when verifying checksums. Some Windows tools output uppercase.',
  },
  {
    category: 'Output',
    question: 'What is Base64 MD5 and when is it used?',
    answer:
      'Base64 MD5 is the 16 raw binary bytes of the MD5 hash encoded as Base64 (24 characters including == padding). Amazon S3 requires Base64-encoded MD5 in the Content-MD5 header for upload integrity verification. The HTTP Content-MD5 header (RFC 1864) also specifies Base64 format.',
  },
  {
    category: 'Encoding',
    question: 'Does MD5 treat "hello" and "Hello" differently?',
    answer:
      'Yes "” MD5 operates on raw bytes and is case-sensitive. "hello" and "Hello" produce completely different hashes due to the avalanche effect. When computing checksums for comparison, ensure consistent encoding and case handling in your input.',
  },
  {
    category: 'Privacy',
    question: 'Is this MD5 generator safe to use with sensitive content?',
    answer:
      'Yes "” all computation runs locally in your browser. No input, no output, and no metadata is sent to our servers. The tool is safe for hashing sensitive documents, proprietary content, or personal data. Works offline once the page is loaded.',
  },
];

export const md5GeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
