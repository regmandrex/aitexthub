import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>HMAC Generator: The Ultimate Manual for Hash-Based Message Authentication Codes</h2>
      <p>HMAC (Hash-based Message Authentication Code) stands as one of the most broadly deployed cryptographic primitives across contemporary software engineering. Each time you communicate with a protected webhook, handle JWT authentication, sign an API request to AWS, validate a Stripe event, or verify a download, HMAC likely operates behind the scenes to guarantee the received data remains unaltered and originates from a trusted party. Despite its widespread nature, HMAC faces frequent misunderstandings or faulty implementations — and the security ramifications of errors here can prove drastic.</p>
      <p>HMAC was formally specified within RFC 2104 (1997) authored by Bellare, Canetti, and Krawczyk. It merges a standard cryptographic hash function (frequently SHA-256, SHA-512, or SHA-1) alongside a secret key to generate an authentication tag — a constant-size value confirming both message integrity (absence of modification) and authenticity (creation by an authorized key holder). This dual characteristic makes HMAC significantly stronger than basic hashing for security-focused use cases.</p>

      <h2>The Cryptographic Issue Addressed by HMAC</h2>
      <p>To grasp why HMAC exists, one must recognize the limitations of plain hashes and the flaws inherent in naive message authentication strategies.</p>

      <h3>Why Standard Hashes Fall Short for Authentication</h3>
      <p>A standard hash such as SHA-256(message) offers zero proof regarding its author. Transmitting a message accompanied by its hash over an unsecured network lets an attacker intercept, alter, and calculate a fresh valid SHA-256 hash for the updated payload. The receiver validates the hash, finds a match, and wrongly assumes the message is genuine — even though it was compromised. Standard hashes ensure integrity (spotting accidental errors) but fail to provide authentication (proving the source).</p>
      <p>The basic workaround involves appending a secret key: SHA-256(key + message). This appears functional — absent the key, malicious actors cannot calculate the correct hash for modified payloads. Nevertheless, this strategy remains susceptible to length extension exploits.</p>

      <h3>Length Extension Vulnerabilities in Simple Key-Prepend</h3>
      <p>SHA-256 (alongside SHA-1 and MD5) relies upon the Merkle-Damgård construction, parsing inputs sequentially in fixed blocks. The internal state of a Merkle-Damgård hash following input M processing is essentially the hash of M itself. Consequently, given SHA-256(key + message), an attacker lacking the key can derive SHA-256(key + message + padding + extension) for any chosen extension string — appending arbitrary data to the authenticated payload without knowing the secret key.</p>
      <p>This issue is far from purely theoretical: Flickr's API suffered from a length extension vulnerability back in 2009. Any interface authenticating requests via SHA-256(key + params) or SHA-256(params + key) carries potential risk.</p>

      <h3>The HMAC Approach: Nested Hashing</h3>
      <p>HMAC resolves the length extension dilemma by employing a deliberately engineered two-tier hashing architecture:</p>
      <p>
        <strong>HMAC(K, m) = H((K' ⊕ opad) || H((K' ⊕ ipad) || m))</strong>
      </p>
      <p>
        Where:
      </p>
      <ul>
        <li><strong>H</strong> = the hash function (SHA-256, SHA-1, etc.)</li>
        <li><strong>K</strong> = the private key</li>
        <li><strong>K'</strong> = the key hashed or padded to fit the hash block size (64 bytes for SHA-256)</li>
        <li><strong>ipad</strong> = internal padding constant: 0x36 filled block-size times</li>
        <li><strong>opad</strong> = external padding constant: 0x5C filled block-size times</li>
        <li><strong>||</strong> = concatenation</li>
        <li><strong>⊕</strong> = XOR</li>
      </ul>
      <p>The initial hash H((K' ⊕ ipad) || m) combines the secret and the message. The secondary hash H((K' ⊕ opad) || inner_result) processes that output alongside a modified version of the key. Because of this dual-layer structure, the outer hash cannot be derived directly from the inner hash output, effectively preventing length extension attacks.</p>

      <h2>Supported HMAC cryptographic functions: SHA-1, SHA-256, SHA-512</h2>
      <p>HMAC is a structural design, independent of any particular hash function. Selecting the underlying hash influences performance, output length, and overall security margins.</p>

      <h3>HMAC-SHA1</h3>
      <p>HMAC-SHA1 generates a 20-byte (160-bit) authentication tag. SHA-1 is presently considered broken regarding collision resistance, meaning malicious actors can construct two distinct inputs that yield an identical SHA-1 hash. However, this specific flaw does not compromise HMAC implementation. HMAC safety relies on the pseudorandom function (PRF) attributes of the hash rather than collision resistance, leaving HMAC-SHA1 secure for verification needs.</p>
      <p>Nevertheless, HMAC-SHA1 is discouraged for newly built systems because:</p>
      <ul>
        <li>The 160-bit payload yields merely 80 bits of defense against birthday attacks (a standard method requiring 2^80 cycles)</li>
        <li>Compliance rules and benchmarks (NIST SP 800-131A) advise against employing SHA-1 even within HMAC setups</li>
        <li>HMAC-SHA256 runs efficiently with negligible speed loss on current computing devices</li>
      </ul>
      <p>HMAC-SHA1 remains active in legacy architectures, TOTP (defaulting to it via RFC 6238), legacy billing endpoints, and infrastructures needing backward compatibility with older systems.</p>

      <h3>HMAC-SHA256</h3>
      <p>HMAC-SHA256 serves as the current baseline standard for the majority of implementations. It generates a 32-byte (256-bit) digest, delivers 128 bits of birthday attack defense, and holds NIST certification for all security tiers up to 2030 and beyond. Contemporary x86, ARM64, and Apple Silicon architectures accelerate SHA-256 natively via the SHA-NI instruction set, ensuring HMAC-SHA256 performs exceptionally fast in production.</p>
      <p>HMAC-SHA256 is implemented across: AWS Signature Version 4 (S3, EC2, all AWS services), GitHub webhook signatures, Stripe webhook signatures, most modern JWT HS256 implementations, Signal Protocol, TLS 1.3, and the vast majority of current API security protocols.</p>

      <h3>HMAC-SHA512</h3>
      <p>HMAC-SHA512 outputs a 64-byte (512-bit) signature, offering 256 bits of protection against birthday attacks. It is deployed in high-assurance environments requiring maximum security margins. On 64-bit hardware, SHA-512 frequently outperforms SHA-256 since it handles data using 64-bit blocks (contrasted with SHA-256's 32-bit blocks), rendering every block instruction more performant per processed byte.</p>
      <p>SHA-512 is frequently utilized for: long-term credential generation, high-security token creation, banking system MACs, and software adhering to conservative security guidelines.</p>

      <h3>HMAC-SHA3</h3>
      <p>SHA-3 (Keccak) implements a sponge construction rather than Merkle-Damgård mechanics, providing native immunity to length extension vulnerabilities. Combining HMAC with SHA-3 is methodically sound yet somewhat superfluous, as SHA-3 operates inside KMAC (Key-Based Message Authentication Code) mode for greater efficiency. SHA-3 usage in HMAC stays minimal today but could expand as hardware acceleration for SHA-3 advances.</p>

      <h2>Real-World HMAC Applications</h2>

      <h3>Webhook Signature Verification</h3>
      <p>Webhooks transmit HTTP POST messages to your backend whenever events trigger within an external platform. How do you verify the call genuinely originated from that service instead of being forged? HMAC signatures. The platform signs the webhook payload using a shared secret known only to you and them, allowing you to authenticate the signature prior to handling the webhook data.</p>
      <p>GitHub webhook verification: GitHub generates an HMAC-SHA256 of the raw payload using your configured webhook secret and transmits it inside the <code>X-Hub-Signature-256</code> request header formatted as <code>sha256=hexdigest</code>. Your server then recalculates the HMAC and performs a comparison:</p>
      <pre><code>{`// Node.js GitHub webhook verification
import * as crypto from 'crypto';

function verifyGitHubWebhook(
  payload: Buffer,
  signature: string,
  secret: string
): boolean {
  const expectedSig = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  // CRITICAL: timing-safe comparison
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSig)
  );
}`}</code></pre>
      <p>Stripe, Shopify, Slack, Twilio, and essentially every major network utilize this identical mechanism, differing only slightly in header nomenclature and formatting.</p>

      <h3>AWS Signature Version 4</h3>
      <p>AWS API calls are secured utilizing SigV4, an iterative HMAC-SHA256 signing sequence. The cryptographic signing key is generated through four distinct HMAC phases:</p>
      <pre><code>{`kDate    = HMAC-SHA256("AWS4" + SecretKey, Date)
kRegion  = HMAC-SHA256(kDate, Region)
kService = HMAC-SHA256(kRegion, Service)
kSigning = HMAC-SHA256(kService, "aws4_request")
signature = HMAC-SHA256(kSigning, StringToSign)`}</code></pre>
      <p>By using this key derivation approach, a signing key generated for a specific region, date, and service cannot sign requests for other regions, dates, or services — which limits potential damage if a signing key becomes compromised.</p>

      <h3>JWT Authentication (HS256, HS384, HS512)</h3>
      <p>When creating symmetric signatures for JSON Web Tokens (JWTs), systems rely heavily on HMAC. Variants include HS256 = HMAC-SHA256, HS384 = HMAC-SHA384, and HS512 = HMAC-SHA512. Applying HMAC over the combination of base64url(header) + "." + base64url(payload) with your secret key outputs the authentic JWT signature. This mechanism permits stateless authentication, letting backends authenticate requests without recurring database queries.</p>
      <p>Critical security note: A symmetric secret kept confidential on the server must be used for JWTs signed with HS256. This differs from RS256 (RSA signature) where clients verify using a public key while the server holds a private key. When building public-facing APIs that require third parties to verify tokens without sharing a secret, choose RS256 or ES256 over HS256.</p>

      <h3>API Request Signing</h3>
      <p>A timestamp and nonce can be included as request parameters whose HMAC is sent alongside the request, which many APIs mandate. Replay attacks are stopped by the timestamp because outdated valid requests fail the timestamp validation check. Duplicate requests within identical timestamp windows are blocked by the nonce.</p>
      <pre><code>{`# Python — API request signing pattern
import hmac
import hashlib
import time

def sign_request(secret_key, method, path, params, body):
    timestamp = str(int(time.time()))
    nonce = secrets.token_hex(16)

    # Create canonical string
    canonical = f"{method}\\n{path}\\n{timestamp}\\n{nonce}\\n{body}"

    # Compute HMAC-SHA256
    signature = hmac.new(
        secret_key.encode(),
        canonical.encode(),
        hashlib.sha256
    ).hexdigest()

    return {
        'X-Timestamp': timestamp,
        'X-Nonce': nonce,
        'X-Signature': signature
    }`}</code></pre>

      <h3>TOTP and HOTP</h3>
      <p>Core operations in one-time passwords (RFC 6238 TOTP, RFC 4226 HOTP) rely on HMAC. Every authenticator app code you have encountered is mathematically founded on HMAC-SHA1 of (secret, counter_or_timestamp). Dynamic truncation of the HMAC output generates the 6-digit code entered by users.</p>

      <h3>TLS/SSL Handshake</h3>
      <p>During data transmission, TLS ensures integrity by using HMAC inside its MAC (message authentication code) records. AES-GCM cipher suites in TLS 1.2 utilize HMAC-SHA256. Although TLS 1.3 adopts AEAD (Authenticated Encryption with Associated Data) to merge authentication directly into encryption, HMAC-SHA256 remains active in the handshake for deriving keys (since the HKDF algorithm builds upon HMAC).</p>

      <h3>HKDF: HMAC-Based Key Derivation</h3>
      <p>Cryptographic keys are derived from input key material using HKDF (HMAC-based Key Derivation Function, RFC 5869) via HMAC in a two-step procedure:</p>
      <ol>
        <li><strong>Extract</strong>: PRK = HMAC-Hash(salt, IKM) — pulls a pseudorandom key out of the input material</li>
        <li><strong>Expand</strong>: OKM = T(1) || T(2) || ... where T(n) = HMAC-Hash(PRK, T(n-1) || info || n)</li>
      </ol>
      <p>Nearly every modern cryptographic protocol requiring multiple keys derived from a single shared secret, along with Signal Protocol, TLS 1.3, and the Noise Protocol Framework, utilizes HKDF.</p>

      <h2>HMAC Output Formats</h2>
      <p>Raw binary output is generated by HMAC, which requires encoding for text transmission and display:</p>
      <ul>
        <li><strong>Hex (hexadecimal)</strong>: Most widespread. HMAC-SHA256 outputs 64 hex characters (32 bytes). Example: <code>a1b2c3d4e5f6...</code>. Utilized by GitHub, Stripe, and nearly all webhooks.</li>
        <li><strong>Base64</strong>: 44 characters for HMAC-SHA256 (32 bytes plus padding). Employed in HTTP Authorization headers, JWT signatures. Example: <code>obLQdOX2...</code></li>
        <li><strong>Base64url</strong>: URL-safe Base64 absent padding (swaps + with -, / with _). Applied in JWTs and URL parameters. Example: <code>obLQdOX2...</code></li>
        <li><strong>Raw binary</strong>: Applied internally within cryptographic protocols where the HMAC result feeds into subsequent processing (like HKDF).</li>
      </ul>
      <p>Presentation and security are distinct; the format choice does not affect safety since hex and Base64 representations of the exact same HMAC value are identical, simply encoded differently. Select whatever format your target system demands.</p>

      <h2>Truncated HMAC</h2>
      <p>Convenience sometimes leads applications to truncate HMAC output by sending only the initial N bytes of the full HMAC. At least half the hash output length is permitted for truncation under RFC 2104, allowing HMAC-SHA256 to drop to a minimum of 128 bits. Generating 6-digit codes in TOTP involves modular reduction combined with a 4-byte truncation.</p>
      <p>Proportionally, the security margin decreases through truncation. Roughly 128 bits of security come from HMAC-SHA256 truncated to 128 bits. Providing 64 bits of security, truncating down to 64 bits borders on risky for modern threat models. Most practical implementations should avoid truncating past 128 bits.</p>

      <h2>Critical Security Implementation Requirements</h2>

      <h3>Timing-Safe Comparison</h3>
      <p><strong>This is the most critical implementation detail.</strong> Comparing a received HMAC against a computed HMAC requires constant-time comparison that avoids stopping on the initial byte discrepancy. A standard string comparison returning early upon mismatched bytes introduces a timing side-channel: measuring response times allows an attacker to figure out how many bytes of their forged signature are accurate, ultimately building a valid signature byte by byte.</p>
      <p>Constant-time comparison functions are supplied across all programming languages:</p>
      <ul>
        <li>Python: <code>hmac.compare_digest(a, b)</code></li>
        <li>Node.js: <code>crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b))</code></li>
        <li>Go: <code>hmac.Equal(a, b)</code></li>
        <li>Ruby: <code>ActiveSupport::SecurityUtils.secure_compare(a, b)</code></li>
        <li>Java: <code>MessageDigest.isEqual(a, b)</code></li>
        <li>PHP: <code>hash_equals($expected, $provided)</code></li>
      </ul>
      <p>This requirement is mandatory. A timing oracle exploiting HMAC comparisons represents a proven attack vector demonstrated in real scenarios.</p>

      <h3>Minimum Key Length</h3>
      <p>The HMAC key ought to match or exceed the hash output length to guarantee complete cryptographic security. Regarding HMAC-SHA256, employ at least 32 bytes (256 bits) of secret material. For HMAC-SHA512, utilize a minimum of 64 bytes. Keys smaller than the hash output size diminish the usable key space alongside the overall security margin.</p>
      <p>Produce HMAC keys through a CSPRNG: <code>crypto.randomBytes(32)</code> inside Node.js, <code>secrets.token_bytes(32)</code> within Python. Never apply plain passwords directly as HMAC keys — rather derive a secure key from your password using a KDF (PBKDF2, Argon2, scrypt).</p>

      <h3>Context and Key Separation</h3>
      <p>Never employ identical secret keys across distinct applications. Should you utilize HMAC-SHA256 simultaneously for webhook validation and CSRF tokens, a security breach in one arena compromises both. Implement separate keys for each application, or derive unique keys from a primary master key via HKDF utilizing different context strings.</p>

      <h3>Replay Attack Prevention</h3>
      <p>HMAC establishes authenticity and integrity yet fails to ensure freshness. An adversary capturing a valid HMAC-signed packet can replay it later and the HMAC will validate successfully. Stop replay attacks by embedding a timestamp inside the authenticated payload and dropping packets exceeding an age threshold (frequently 5 minutes). Also append a nonce (random value) or request counter to block exact packet replays within the acceptance window.</p>

      <h3>Side-Channel Attacks</h3>
      <p>Besides timing vulnerabilities, HMAC implementations can face power analysis threats in hardware environments (embedded gear, smart cards). Modern constant-time hash engines running in software on standard processors are generally safe against power analysis, but embedded builds must adopt libraries engineered for side-channel defense.</p>

      <h2>HMAC versus Other Message Authentication Mechanisms</h2>

      <h3>HMAC versus AEAD (AES-GCM, ChaCha20-Poly1305)</h3>
      <p>Authenticated Encryption with Associated Data (AEAD) supplies both encryption and authentication in a single step. When you must keep the message secret alongside proving authenticity, choose AEAD instead of combining HMAC with separate encryption. Encrypting then MACing (Encrypt-then-MAC) is safe, but AEAD cipher suites such as AES-GCM and ChaCha20-Poly1305 are specifically designed for this and manage all ordering properly.</p>
      <p>Apply HMAC whenever you require authentication without secrecy (webhook validation, API signing, digital receipts). Turn to AEAD when you need both authentication and confidentiality.</p>

      <h3>HMAC vs. Poly1305</h3>
      <p>Poly1305 represents a one-time MAC (message authentication code) outpacing HMAC on hardware equipped with strong polynomial arithmetic support. It functions as the authentication block inside ChaCha20-Poly1305. Unlike HMAC, Poly1305 demands a fresh key for every single message — keys must never be reused. HMAC allows safe key reuse across multiple messages. For general authentication tasks outside AEAD bounds, HMAC is simpler and safer.</p>

      <h3>HMAC versus RSA/ECDSA Signatures</h3>
      <p>HMAC relies on symmetric keys — both participants possess the identical secret. RSA and ECDSA leverage asymmetric key pairs — one party holds a private key to sign, while another uses a public key to verify. Asymmetric signatures allow public verifiability (any entity with the public key can verify) and non-repudiation (the signer cannot deny signing). HMAC only permits mutual authentication between parties sharing the secret. For API authorization among trusted parties sharing a secret, HMAC is faster and simpler. For public signatures (code signing, certificate signatures), deploy RSA or ECDSA.</p>

      <h2>Coding HMAC Across Different Languages</h2>

      <h3>Node.js</h3>
      <pre><code>{`import * as crypto from 'crypto';

const hmac = crypto.createHmac('sha256', secretKey)
  .update(message)
  .digest('hex');  // 'base64', 'base64url', or 'binary'`}</code></pre>

      <h3>Python</h3>
      <pre><code>{`import hmac
import hashlib

h = hmac.new(
    key.encode('utf-8'),
    message.encode('utf-8'),
    hashlib.sha256
)
result = h.hexdigest()  # or .digest() for raw bytes`}</code></pre>

      <h3>Go</h3>
      <pre><code>{`import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/hex"
)

mac := hmac.New(sha256.New, []byte(secretKey))
mac.Write([]byte(message))
result := hex.EncodeToString(mac.Sum(nil))`}</code></pre>

      <h3>Java</h3>
      <pre><code>{`import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

Mac mac = Mac.getInstance("HmacSHA256");
SecretKeySpec secretKey = new SecretKeySpec(
    key.getBytes("UTF-8"), "HmacSHA256"
);
mac.init(secretKey);
byte[] rawHmac = mac.doFinal(message.getBytes("UTF-8"));
String result = bytesToHex(rawHmac);`}</code></pre>

      <h3>PHP</h3>
      <pre><code>{`$hmac = hash_hmac('sha256', $message, $secretKey);
// $hmac is lowercase hex string`}</code></pre>

      <h3>Ruby</h3>
      <pre><code>{`require 'openssl'
hmac = OpenSSL::HMAC.hexdigest('SHA256', secret_key, message)`}</code></pre>

      <h2>Compliance and Security Standards for HMAC</h2>
      <p>HMAC surfaces in practically every security framework. NIST FIPS 198-1 stands as the official specification for HMAC. NIST SP 800-107 offers guidelines regarding HMAC key lengths and security thresholds. PCI DSS mandates message authentication for all data transfers, a condition HMAC fulfills. SOC 2 and ISO 27001 assessors expect verifiable communication pipelines, which HMAC helps deliver. HIPAA demands integrity safeguards for ePHI, and HMAC signatures on API traffic fulfill this condition.</p>
      <p>For regulatory compliance, document your HMAC architecture detailing: algorithm (HMAC-SHA256 favored), key length, key generation process, key storage (HSM or secure secrets manager), key rotation timeline, and whether constant-time verification is applied. Auditors will demand all of these elements.</p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What exactly is HMAC and its purpose?',
    answer: 'HMAC (Hash-based Message Authentication Code) is a cryptographic function generating an authentication tag for a message leveraging a secret key and a hash function. It proves two attributes: the content remains unmodified (integrity) and it originated from an entity possessing the secret key (authenticity). It is deployed in webhooks, API signing, JWT authentication, and TLS.',
  },
  {
    category: 'General',
    question: 'What is the distinction between HMAC and a standard hash?',
    answer: 'Standard hashes like MD5 or SHA-256 lack a secret key, meaning anyone can generate them and forge a valid hash for an altered message. HMAC incorporates a secret key into the procedure, rendering it impossible to create a legitimate HMAC absent that key. Additionally, HMAC guards against length extension attacks that defeat simple key-prefix methods such as SHA-256(key + message).',
  },
  {
    category: 'General',
    question: 'Which hash algorithms are compatible with HMAC?',
    answer: 'HMAC functions alongside any cryptographic hash algorithm. Frequent choices include HMAC-SHA256 (advisable for most use cases), HMAC-SHA512 (enhanced security), HMAC-SHA384, as well as HMAC-SHA1 (older, though still safe for HMAC usage despite being discouraged for fresh systems). SHA-3 alternatives also work. Steer clear of HMAC-MD5 for security-critical scenarios—opt for SHA-256 or better instead.',
  },
  {
    category: 'General',
    question: 'What constitutes a length extension attack and in what way does HMAC stop it?',
    answer: 'A length extension attack leverages the Merkle-Damgård architecture utilized within SHA-1, SHA-256, and SHA-512. Given H(key + message), a malicious actor can calculate H(key + message + padding + extension) minus knowledge of the key. HMAC blocks this via nested hashing, wherein the outer hash encapsulates the inner hash in a manner that renders extension unachievable.',
  },
  {
    category: 'Security',
    question: 'Why is it necessary to employ timing-safe comparison while validating HMAC?',
    answer: 'Basic string evaluations using == or === exit immediately when bytes mismatch, creating a timing side-channel vulnerability. An adversary capable of measuring latency can deduce how many bytes of their crafted HMAC prove accurate, eventually reconstructing a genuine signature byte by byte. Timing-safe comparisons like hmac.compare_digest or crypto.timingSafeEqual take identical durations regardless of how many bytes align.',
  },
  {
    category: 'Security',
    question: 'What key size ought to be utilized for HMAC?',
    answer: 'Ensure you use a byte count at least matching the hash output size: 32 bytes for HMAC-SHA256 and 64 bytes for HMAC-SHA512. Produce keys via a CSPRNG, specifically secrets.token_bytes(32) in Python or crypto.randomBytes(32) inside Node.js. Never utilize a password directly as an HMAC key; instead, derive a key from that password through PBKDF2, scrypt, or Argon2 first.',
  },
  {
    category: 'Security',
    question: 'Can HMAC defend against replay attacks?',
    answer: 'HMAC confirms authenticity and integrity, though not freshness. A bad actor can replay a legitimate HMAC-signed payload, and verification will succeed. Thwart replay attacks by embedding a timestamp in the authenticated message and discarding items older than a specific limit, typically 5 minutes. Incorporate a nonce or request counter to block identical replays inside that temporal window.',
  },
  {
    category: 'Security',
    question: 'How do HMAC-SHA1 and HMAC-SHA256 differ from each other?',
    answer: 'HMAC-SHA1 generates a 20-byte result (160-bit), offering 80 bits of security. It is viewed as legacy yet remains secure for HMAC authentication. HMAC-SHA256 yields a 32-byte result (256-bit), delivering 128 bits of security. HMAC-SHA256 stands as the modern preference for all new implementations. Both remain secure for authentication, but HMAC-SHA256 features a wider security buffer and stays NIST-approved through 2030 and beyond.',
  },
  {
    category: 'Applications',
    question: 'How can I validate a signature from a GitHub webhook?',
    answer: 'GitHub transmits HMAC-SHA256 inside the X-Hub-Signature-256 header structured as sha256=hexdigest. Confirm it by calculating HMAC-SHA256 on the raw request payload using your webhook secret, appending sha256= to the front, and checking it with a timing-safe evaluation. Avoid standard comparisons entirely since they introduce security flaws. Always utilize raw body bytes instead of parsed or serialized data, because JSON serialization might alter byte sequences.',
  },
  {
    category: 'Applications',
    question: 'In what way does AWS leverage HMAC for signing requests?',
    answer: 'AWS Signature Version 4 derives a signing key through four cycles of HMAC-SHA256, specifically HMAC(HMAC(HMAC(HMAC("AWS4"+secretKey, date), region), service), "aws4_request"). The resulting signature is then an HMAC-SHA256 of the canonical request utilizing this generated key. Such key derivation restricts each signing key\'s utility to a single date, geographic region, and service.',
  },
  {
    category: 'Applications',
    question: 'How does HMAC connect to JWT authentication?',
    answer: 'JSON Web Tokens signed using HS256, HS384, or HS512 apply HMAC alongside SHA-256, SHA-384, or SHA-512 correspondingly. The resulting signature is an HMAC of base64url(header) + "." + base64url(payload) leveraging the secret key. HS256 JWTs rely on symmetric keys, meaning the identical key both signs and checks. For public validation or non-repudiation, deploy ES256 (ECDSA) or RS256 (RSA) instead.',
  },
  {
    category: 'Applications',
    question: 'What is HKDF and how does it incorporate HMAC?',
    answer: 'HKDF (HMAC-based Key Derivation Function, RFC 5869) utilizes HMAC to generate multiple cryptographic keys originating from a solitary input. The Extract phase employs HMAC to create a pseudorandom key, while the Expand phase uses HMAC iteratively to produce key material matching the requested length. HKDF finds use within TLS 1.3, the Noise Protocol, and the Signal Protocol for generating keys.',
  },
  {
    category: 'Technical',
    question: 'What is the mathematical layout of HMAC?',
    answer: 'HMAC(K, m) = H((K\' ⊕ opad) || H((K\' ⊕ ipad) || m)), where H represents the hash function, K\' denotes the key padded to block length, ipad is 0x36 repeated block-size times, opad equals 0x5C repeated block-size times, and || stands for concatenation. This nested architecture prevents length extension attacks by guaranteeing the outer hash cannot be prolonged using the inner output.',
  },
  {
    category: 'Technical',
    question: 'What output formats are available for HMAC?',
    answer: 'HMAC yields raw binary data. Standard encodings include hexadecimal, which is most prevalent for webhooks yielding 64 chars for SHA256, Base64 providing 44 chars for SHA256 used within HTTP headers, Base64url serving as a URL-safe variant absent padding for URLs and JWTs, and raw binary employed when feeding subsequent cryptographic functions. The selected format represents a display preference that leaves security unaffected.',
  },
  {
    category: 'Technical',
    question: 'Is it possible to shorten HMAC output?',
    answer: 'RFC 2104 permits truncation down to half of the hash output at minimum. HMAC-SHA256 can safely be truncated to 128 bits (16 bytes). TOTP employs a distinct truncation down to 4 bytes together with modular reduction. Avoid truncating below 128 bits for applications sensitive to security, as the security margin shrinks proportionally with the truncation size.',
  },
  {
    category: 'Comparison',
    question: 'When is it appropriate to choose HMAC over AEAD encryption (AES-GCM)?',
    answer: 'Opt for HMAC when authentication is required without confidentiality (such as webhook validation, API signing, and integrity checks on public information). Choose AEAD (AES-GCM, ChaCha20-Poly1305) when you need both confidentiality and authentication, since AEAD merges encryption and authentication into a single secure step. If you are manually implementing Encrypt-then-MAC, transition to AEAD instead.',
  },
  {
    category: 'Comparison',
    question: 'When should I select HMAC instead of RSA/ECDSA digital signatures?',
    answer: 'Use HMAC for authentication between participants who share a secret key, as it is simpler and quicker. Use RSA/ECDSA when public verifiability is necessary (anyone holding the public key can verify), non-repudiation is required (the signer cannot deny signing), or sharing a secret key is impractical. For JWTs, employ HS256 for internal APIs relying on shared secrets, and RS256 or ES256 for public-facing APIs.',
  },
  {
    category: 'Implementation',
    question: 'How can I set up HMAC verification in Node.js?',
    answer: 'Invoke the built-in crypto module: `const hmac = crypto.createHmac("sha256", secretKey).update(message).digest("hex")`. To check signatures safely: `crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected))`. You must exclusively apply timingSafeEqual instead of ===, ==, or standard string comparison when validating HMAC outputs.',
  },
  {
    category: 'Implementation',
    question: 'How do I set up HMAC in Python?',
    answer: 'Make use of the built-in hmac module: `h = hmac.new(key.encode(), message.encode(), hashlib.sha256); result = h.hexdigest()`. For validation: `hmac.compare_digest(expected, received)` which serves as Python\'s constant-time comparison function to stop timing attacks.',
  },
  {
    category: 'Implementation',
    question: 'How is HMAC implemented in Go?',
    answer: '`mac := hmac.New(sha256.New, []byte(secretKey)); mac.Write([]byte(message)); result := hex.EncodeToString(mac.Sum(nil))`. For verification: `hmac.Equal(expected, received)` as Go\'s HMAC library supplies the Equal function for constant-time comparisons. Required imports: `crypto/hmac`, `crypto/sha256`, `encoding/hex`.',
  },
  {
    category: 'Implementation',
    question: 'How can I configure HMAC verification in PHP?',
    answer: '`$hmac = hash_hmac("sha256", $message, $secretKey)`. For checking: `hash_equals($expectedHmac, $receivedHmac)` since PHP\'s hash_equals operates in constant time. Never employ == or === for comparing HMACs in PHP.',
  },
  {
    category: 'Compliance',
    question: 'Does HMAC-SHA256 hold approval for regulatory compliance frameworks?',
    answer: 'Yes. HMAC-SHA256 is sanctioned by NIST FIPS 198-1 and remains valid through at least 2031 according to NIST SP 800-131A. It fulfills PCI DSS standards for message authentication, HIPAA integrity mandates for ePHI, and SOC 2/ISO 27001 security controls. Ensure you document your implementation specifics (such as algorithm, key length, and key management) for auditing purposes.',
  },
  {
    category: 'Compliance',
    question: 'Should I opt for HMAC-SHA1 or HMAC-SHA256?',
    answer: 'Select HMAC-SHA256 for all brand-new projects. While HMAC-SHA1 remains secure for authentication, it has been deprecated by NIST SP 800-131A. Legacy platforms relying on HMAC-SHA1 ought to upgrade to SHA-256 at the earliest opportunity. TOTP applications still default to HMAC-SHA1 to maintain RFC compliance, though newer TOTP URIs can explicitly specify SHA256.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does my HMAC verification continuously fail?',
    answer: 'Common causes: (1) Key encoding mismatch — ensure key is bytes/string consistently (don\'t mix UTF-8 and raw bytes). (2) Message encoding — ensure both sides sign the same byte representation (raw body, not re-serialized JSON). (3) Hex case mismatch — compare lowercased or case-insensitively. (4) Trailing newline — some tools add \\n to input. (5) Different algorithms — confirm both sides use the same HMAC variant (SHA256 vs SHA1).',
  },
];

export const hmacGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
