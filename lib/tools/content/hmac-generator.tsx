import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>HMAC Generator: The Complete Guide to Hash-Based Message Authentication Codes</h2>
      <p>
        HMAC (Hash-based Message Authentication Code) is one of the most widely deployed cryptographic primitives in modern software. Every time you interact with a secure webhook, use JWT authentication, sign an API request to AWS, verify a Stripe event, or authenticate a download, HMAC is likely working behind the scenes to ensure the data you received hasn't been tampered with and came from a trusted source. Despite its ubiquity, HMAC is frequently misunderstood or misimplemented — and the security consequences of getting it wrong can be severe.
      </p>
      <p>
        HMAC is defined in RFC 2104 (1997) by Bellare, Canetti, and Krawczyk. It combines an arbitrary cryptographic hash function (most commonly SHA-256, SHA-512, or SHA-1) with a secret key to produce an authentication tag — a fixed-length value that proves both the integrity of the message (it hasn't been changed) and its authenticity (it was produced by someone with the secret key). This dual property makes HMAC far more powerful than a simple hash for security-critical applications.
      </p>

      <h2>The Cryptographic Problem HMAC Solves</h2>
      <p>
        To understand why HMAC exists, you need to understand what plain hashes cannot do and what goes wrong with naive approaches to message authentication.
      </p>

      <h3>Why Plain Hashes Are Insufficient for Authentication</h3>
      <p>
        A plain hash like SHA-256(message) proves nothing about who created it. If you send a message with its hash over an insecure channel, an attacker can intercept the message, modify it, and compute a new valid SHA-256 hash for the modified message. The recipient checks the hash, it matches, and they believe the message is authentic — but it's been tampered with. Plain hashes provide integrity (detects accidental corruption) but no authentication (doesn't prove origin).
      </p>
      <p>
        The naive solution is to include a secret key: SHA-256(key + message). This seems to work — without the key, an attacker can't compute the correct hash for a modified message. But this approach is vulnerable to a length extension attack.
      </p>

      <h3>Length Extension Attacks on Naive Key-Prepend</h3>
      <p>
        SHA-256 (like SHA-1 and MD5) is built on the Merkle-Damgård construction, which processes messages in blocks sequentially. A Merkle-Damgård hash's internal state after processing input M is essentially the hash of M. This means that given SHA-256(key + message), an attacker who doesn't know the key can compute SHA-256(key + message + padding + extension) for any extension string they choose — extending the authenticated message with arbitrary content without knowing the key.
      </p>
      <p>
        This is not a theoretical concern: Flickr's API was vulnerable to a length extension attack in 2009. Any API that authenticates requests with SHA-256(key + params) or SHA-256(params + key) is potentially vulnerable.
      </p>

      <h3>HMAC's Solution: Nested Hashing</h3>
      <p>
        HMAC solves the length extension problem by using a carefully designed two-level hashing structure:
      </p>
      <p>
        <strong>HMAC(K, m) = H((K' ⊕ opad) || H((K' ⊕ ipad) || m))</strong>
      </p>
      <p>
        Where:
      </p>
      <ul>
        <li><strong>H</strong> = the hash function (SHA-256, SHA-1, etc.)</li>
        <li><strong>K</strong> = the secret key</li>
        <li><strong>K'</strong> = the key padded or hashed to match the hash block size (64 bytes for SHA-256)</li>
        <li><strong>ipad</strong> = inner padding constant: 0x36 repeated block-size times</li>
        <li><strong>opad</strong> = outer padding constant: 0x5C repeated block-size times</li>
        <li><strong>||</strong> = concatenation</li>
        <li><strong>⊕</strong> = XOR</li>
      </ul>
      <p>
        The inner hash H((K' ⊕ ipad) || m) processes the key and message together. The outer hash H((K' ⊕ opad) || inner_result) hashes the result with a differently-keyed version of the key. This nesting means the outer hash cannot be extended from the inner hash result, defeating length extension attacks.
      </p>

      <h2>HMAC Algorithms: SHA-1, SHA-256, SHA-512</h2>
      <p>
        HMAC is an algorithm construction, not tied to any specific hash function. The choice of underlying hash affects the output length, performance, and security margin.
      </p>

      <h3>HMAC-SHA1</h3>
      <p>
        HMAC-SHA1 produces a 20-byte (160-bit) authentication tag. SHA-1 is considered cryptographically broken for collision resistance — meaning an attacker can find two different inputs that produce the same SHA-1 hash. However, this vulnerability does not apply to HMAC usage. HMAC security depends on pseudorandom function (PRF) properties of the hash, not collision resistance, and HMAC-SHA1 is still considered secure for authentication purposes.
      </p>
      <p>
        That said, HMAC-SHA1 is deprecated for new applications because:
      </p>
      <ul>
        <li>The 160-bit output provides only 80 bits of security against birthday attacks (a generic attack requiring 2^80 operations)</li>
        <li>Regulations and standards (NIST SP 800-131A) discourage SHA-1 use even in HMAC contexts</li>
        <li>HMAC-SHA256 is available with minimal performance overhead on modern hardware</li>
      </ul>
      <p>
        HMAC-SHA1 is still used in legacy systems, TOTP (RFC 6238 uses it as default), older payment APIs, and systems requiring interoperability with older partners.
      </p>

      <h3>HMAC-SHA256</h3>
      <p>
        HMAC-SHA256 is the modern standard recommendation for most applications. It produces a 32-byte (256-bit) output, provides 128 bits of security against birthday attacks, and is NIST-approved at all security levels through 2030 and beyond. SHA-256 is hardware-accelerated on modern x86, ARM64, and Apple Silicon processors using the SHA-NI instruction set, making HMAC-SHA256 very fast in practice.
      </p>
      <p>
        HMAC-SHA256 is used by: AWS Signature Version 4 (S3, EC2, all AWS services), GitHub webhook signatures, Stripe webhook signatures, most modern JWT HS256 implementations, Signal Protocol, TLS 1.3, and the majority of new API authentication schemes.
      </p>

      <h3>HMAC-SHA512</h3>
      <p>
        HMAC-SHA512 produces a 64-byte (512-bit) output, providing 256 bits of security against birthday attacks. It is used in high-security applications where maximum margin is required. On 64-bit processors, SHA-512 often runs faster than SHA-256 because it processes data in 64-bit words (vs SHA-256's 32-bit words), making each block operation more efficient per byte processed.
      </p>
      <p>
        SHA-512 is commonly used for: long-term key derivation, high-security token generation, financial system MACs, and applications following conservative security practices.
      </p>

      <h3>HMAC-SHA3</h3>
      <p>
        SHA-3 (Keccak) uses the sponge construction rather than Merkle-Damgård and is intrinsically resistant to length extension attacks. Using HMAC with SHA-3 is technically sound but somewhat redundant — SHA-3 can be used in KMAC (Key-Based Message Authentication Code) mode, which is more efficient. SHA-3 adoption in HMAC is currently limited but may grow as SHA-3 hardware acceleration improves.
      </p>

      <h2>Real-World HMAC Applications</h2>

      <h3>Webhook Signature Verification</h3>
      <p>
        Webhooks send HTTP POST requests to your server when events occur in a service. How do you know the request actually came from that service and wasn't spoofed? HMAC signatures. The service signs the webhook payload with a secret key that only you and the service share, and you verify the signature before processing the webhook.
      </p>
      <p>
        GitHub webhook verification: GitHub computes HMAC-SHA256 of the raw request body using your webhook secret key and sends it in the <code>X-Hub-Signature-256</code> header as <code>sha256=hexdigest</code>. Your server recomputes the HMAC and compares:
      </p>
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
      <p>
        Stripe, Shopify, Slack, Twilio, and virtually every major platform use the same pattern with slight variations in header names and encoding.
      </p>

      <h3>AWS Signature Version 4</h3>
      <p>
        AWS API requests are authenticated using SigV4, a multi-step HMAC-SHA256 signing process. The signing key is derived through four rounds of HMAC:
      </p>
      <pre><code>{`kDate    = HMAC-SHA256("AWS4" + SecretKey, Date)
kRegion  = HMAC-SHA256(kDate, Region)
kService = HMAC-SHA256(kRegion, Service)
kSigning = HMAC-SHA256(kService, "aws4_request")
signature = HMAC-SHA256(kSigning, StringToSign)`}</code></pre>
      <p>
        This key derivation scheme means a signing key derived for a specific date, region, and service cannot be used to sign requests for other dates, regions, or services — limiting the damage if a signing key is compromised.
      </p>

      <h3>JWT Authentication (HS256, HS384, HS512)</h3>
      <p>
        JSON Web Tokens (JWTs) signed with symmetric algorithms use HMAC. HS256 = HMAC-SHA256, HS384 = HMAC-SHA384, HS512 = HMAC-SHA512. The JWT signature is HMAC of base64url(header) + "." + base64url(payload) using the secret key. The server verifies the signature on each request without database lookup, enabling stateless authentication.
      </p>
      <p>
        Critical security note: JWTs signed with HS256 use a symmetric secret that must be kept confidential on the server. This differs from RS256 (RSA signature) where the server has a private key and clients verify with a public key. For public-facing APIs where you need to allow third parties to verify tokens without sharing a secret, use RS256 or ES256 instead of HS256.
      </p>

      <h3>API Request Signing</h3>
      <p>
        Many APIs require signed requests where the HMAC of the request parameters (including timestamp and nonce) is sent as part of the request. The timestamp prevents replay attacks (an attacker cannot reuse an old valid request because the timestamp check fails). The nonce prevents duplicate requests in the same timestamp window.
      </p>
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
      <p>
        One-time passwords (RFC 6238 TOTP, RFC 4226 HOTP) use HMAC as their core operation. HMAC-SHA1 of (secret, counter_or_timestamp) is the mathematical foundation of every authenticator app code you've ever seen. The HMAC output is dynamically truncated to produce the 6-digit code users type.
      </p>

      <h3>TLS/SSL Handshake</h3>
      <p>
        TLS uses HMAC in its MAC (message authentication code) records to ensure data integrity during transmission. TLS 1.2 uses HMAC-SHA256 for AES-GCM cipher suites. TLS 1.3 uses AEAD (Authenticated Encryption with Associated Data) which integrates authentication into the encryption, but HMAC-SHA256 is still used in the handshake for key derivation (the HKDF algorithm is built on HMAC).
      </p>

      <h3>HKDF: HMAC-Based Key Derivation</h3>
      <p>
        HKDF (HMAC-based Key Derivation Function, RFC 5869) uses HMAC to derive cryptographic keys from an input key material. It is a two-step process:
      </p>
      <ol>
        <li><strong>Extract</strong>: PRK = HMAC-Hash(salt, IKM) — extracts a pseudorandom key from the input material</li>
        <li><strong>Expand</strong>: OKM = T(1) || T(2) || ... where T(n) = HMAC-Hash(PRK, T(n-1) || info || n)</li>
      </ol>
      <p>
        HKDF is used in Signal Protocol, TLS 1.3, Noise Protocol Framework, and virtually every modern cryptographic protocol that needs to derive multiple keys from a single shared secret.
      </p>

      <h2>HMAC Output Formats</h2>
      <p>
        HMAC produces raw binary output. For display and transmission in text contexts, it is encoded:
      </p>
      <ul>
        <li><strong>Hex (hexadecimal)</strong>: Most common. HMAC-SHA256 produces 64 hex characters (32 bytes). Example: <code>a1b2c3d4e5f6...</code>. Used by GitHub, Stripe, and most webhooks.</li>
        <li><strong>Base64</strong>: 44 characters for HMAC-SHA256 (32 bytes + padding). Used in HTTP Authorization headers, JWT signatures. Example: <code>obLQdOX2...</code></li>
        <li><strong>Base64url</strong>: URL-safe Base64 without padding (replaces + with -, / with _). Used in JWTs and URL parameters. Example: <code>obLQdOX2...</code></li>
        <li><strong>Raw binary</strong>: Used internally in cryptographic protocols where the HMAC output feeds into further computation (like HKDF).</li>
      </ul>
      <p>
        The output format is a presentation concern, not a security concern — the same HMAC value in hex and Base64 are identical, just encoded differently. Choose the format expected by your target system.
      </p>

      <h2>Truncated HMAC</h2>
      <p>
        Some applications truncate HMAC output for convenience — sending only the first N bytes of the full HMAC. RFC 2104 allows truncation to at least half the hash output length (so HMAC-SHA256 can be truncated to 128 bits minimum). TOTP uses a 4-byte truncation plus modular reduction to produce 6-digit codes.
      </p>
      <p>
        Truncation reduces the security margin proportionally. HMAC-SHA256 truncated to 128 bits provides ~128 bits of security. Truncating to 64 bits provides 64 bits of security — borderline for modern threat models. Most practical applications should not truncate below 128 bits.
      </p>

      <h2>Critical Security Implementation Requirements</h2>

      <h3>Timing-Safe Comparison</h3>
      <p>
        <strong>This is the most critical implementation detail.</strong> When comparing a received HMAC with a computed HMAC, you must use constant-time comparison that does not short-circuit on the first byte difference. A naive string comparison that returns early when bytes differ creates a timing side-channel: an attacker who can measure response time can determine how many bytes of their forged HMAC are correct, eventually constructing a valid signature byte by byte.
      </p>
      <p>
        Every language provides a constant-time comparison function:
      </p>
      <ul>
        <li>Python: <code>hmac.compare_digest(a, b)</code></li>
        <li>Node.js: <code>crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b))</code></li>
        <li>Go: <code>hmac.Equal(a, b)</code></li>
        <li>Ruby: <code>ActiveSupport::SecurityUtils.secure_compare(a, b)</code></li>
        <li>Java: <code>MessageDigest.isEqual(a, b)</code></li>
        <li>PHP: <code>hash_equals($expected, $provided)</code></li>
      </ul>
      <p>
        This is not optional. A timing oracle on HMAC comparison is a real attack that has been demonstrated in practice.
      </p>

      <h3>Minimum Key Length</h3>
      <p>
        The HMAC key should be at least as long as the hash output to ensure the full security of the algorithm. For HMAC-SHA256, use at least 32 bytes (256 bits) of key material. For HMAC-SHA512, use at least 64 bytes. Keys shorter than the hash output length reduce the effective key space and therefore the security margin.
      </p>
      <p>
        Generate HMAC keys using a CSPRNG: <code>crypto.randomBytes(32)</code> in Node.js, <code>secrets.token_bytes(32)</code> in Python. Never use passwords directly as HMAC keys — first derive a key from the password using a KDF (PBKDF2, Argon2, scrypt).
      </p>

      <h3>Key Separation and Context</h3>
      <p>
        Never use the same secret key for different purposes. If you use HMAC-SHA256 for both webhook verification and CSRF tokens, a leak in one context compromises both. Use separate keys for each purpose, or derive separate keys from a master key using HKDF with different context strings.
      </p>

      <h3>Replay Attack Prevention</h3>
      <p>
        HMAC verifies authenticity and integrity but not freshness. An attacker who captures a valid HMAC-signed message can replay it later and the HMAC will verify correctly. Prevent replay attacks by including a timestamp in the authenticated message and rejecting messages older than a threshold (typically 5 minutes). Also include a nonce (random value) or request counter to prevent exact message replays within the acceptance window.
      </p>

      <h3>Side-Channel Attacks</h3>
      <p>
        In addition to timing attacks, HMAC implementations may be vulnerable to power analysis attacks in hardware contexts (embedded systems, smart cards). Modern constant-time hash implementations in software on general-purpose computers are typically not vulnerable to power analysis, but embedded implementations should use libraries designed for side-channel resistance.
      </p>

      <h2>HMAC vs. Other Message Authentication Mechanisms</h2>

      <h3>HMAC vs. AEAD (AES-GCM, ChaCha20-Poly1305)</h3>
      <p>
        Authenticated Encryption with Associated Data (AEAD) provides both encryption and authentication in one operation. If you need to keep the message confidential in addition to authenticating it, use AEAD rather than HMAC + separate encryption. Encrypting then MACing (Encrypt-then-MAC) is secure, but AEAD cipher suites like AES-GCM and ChaCha20-Poly1305 are purpose-built for this and handle all the ordering correctly.
      </p>
      <p>
        Use HMAC when you need authentication without confidentiality (webhook verification, API signing, digital receipts). Use AEAD when you need both authentication and confidentiality.
      </p>

      <h3>HMAC vs. Poly1305</h3>
      <p>
        Poly1305 is a one-time MAC (message authentication code) that is faster than HMAC on hardware with good polynomial arithmetic support. It is used as the authentication component in ChaCha20-Poly1305. Unlike HMAC, Poly1305 requires a fresh key for each message — keys must never be reused. HMAC can safely reuse the same key for multiple messages. For general-purpose authentication outside of AEAD contexts, HMAC is simpler and safer.
      </p>

      <h3>HMAC vs. RSA/ECDSA Signatures</h3>
      <p>
        HMAC uses symmetric keys — both parties need the same secret. RSA and ECDSA use asymmetric key pairs — one party has a private key and signs, the other has a public key and verifies. Asymmetric signatures enable public verifiability (anyone with the public key can verify) and non-repudiation (the signer cannot deny signing). HMAC enables only mutual authentication between parties sharing the secret. For API authentication between known parties sharing a secret, HMAC is simpler and faster. For public signatures (code signing, certificate signatures), use RSA or ECDSA.
      </p>

      <h2>Implementing HMAC Across Languages</h2>

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

      <h2>HMAC in Security Standards and Compliance</h2>
      <p>
        HMAC appears in virtually every security standard. NIST FIPS 198-1 is the official specification for HMAC. NIST SP 800-107 provides guidance on HMAC key lengths and security levels. PCI DSS requires message authentication for all data transmission, which HMAC satisfies. SOC 2 and ISO 27001 auditors expect to see authenticated communication channels, which HMAC helps provide. HIPAA requires integrity controls for ePHI, and HMAC signatures on API communications satisfy this requirement.
      </p>
      <p>
        For compliance purposes, document your HMAC implementation including: algorithm (HMAC-SHA256 preferred), key length, key generation method, key storage (HSM or encrypted secrets manager), key rotation schedule, and whether constant-time comparison is used. Security auditors will ask for all of these.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is HMAC and what does it do?',
    answer: 'HMAC (Hash-based Message Authentication Code) is a cryptographic algorithm that produces an authentication tag for a message using a secret key and a hash function. It proves two things: the message hasn\'t been tampered with (integrity) and it came from someone with the secret key (authenticity). It is used in webhooks, API signing, JWT authentication, and TLS.',
  },
  {
    category: 'General',
    question: 'What is the difference between HMAC and a regular hash?',
    answer: 'A regular hash (SHA-256, MD5) has no secret key — anyone can compute it, and anyone can forge a valid hash for a modified message. HMAC adds a secret key to the process, making it impossible to produce a valid HMAC without knowing the key. HMAC also protects against length extension attacks that break naive key-prepend approaches like SHA-256(key + message).',
  },
  {
    category: 'General',
    question: 'What hash algorithms can be used with HMAC?',
    answer: 'HMAC works with any cryptographic hash function. Common choices: HMAC-SHA256 (recommended for most applications), HMAC-SHA512 (high security), HMAC-SHA384, HMAC-SHA1 (legacy, still secure for HMAC use but deprecated for new applications). SHA-3 variants are also usable. Avoid HMAC-MD5 for security-sensitive applications — use SHA-256 or better.',
  },
  {
    category: 'General',
    question: 'What is a length extension attack and how does HMAC prevent it?',
    answer: 'A length extension attack exploits the Merkle-Damgård construction used in SHA-1/SHA-256/SHA-512. Given H(key + message), an attacker can compute H(key + message + padding + extension) without knowing the key. HMAC prevents this by using nested hashing — the outer hash wraps the inner hash in a way that makes extension impossible.',
  },
  {
    category: 'Security',
    question: 'Why must I use timing-safe comparison when verifying HMAC?',
    answer: 'Naive string comparison (== or ===) returns as soon as bytes differ, creating a timing side-channel. An attacker who can measure response time can determine how many bytes of their forged HMAC are correct, eventually building a valid signature byte by byte. Timing-safe comparison (crypto.timingSafeEqual, hmac.compare_digest) always takes the same time regardless of how many bytes match.',
  },
  {
    category: 'Security',
    question: 'What key length should I use for HMAC?',
    answer: 'Use at least as many bytes as the hash output length: 32 bytes for HMAC-SHA256, 64 bytes for HMAC-SHA512. Generate keys with a CSPRNG (crypto.randomBytes(32) in Node.js, secrets.token_bytes(32) in Python). Never use a password directly as an HMAC key — derive a key from the password using Argon2, scrypt, or PBKDF2 first.',
  },
  {
    category: 'Security',
    question: 'Can HMAC protect against replay attacks?',
    answer: 'HMAC verifies authenticity and integrity but not freshness. An attacker can replay a valid HMAC-signed message and it will verify correctly. Prevent replay attacks by including a timestamp in the authenticated message and rejecting messages older than a threshold (typically 5 minutes). Add a nonce or request counter to prevent exact replays within the time window.',
  },
  {
    category: 'Security',
    question: 'What is the difference between HMAC-SHA1 and HMAC-SHA256?',
    answer: 'HMAC-SHA1 produces 20-byte output (160-bit), providing 80 bits of security. It is considered legacy but still secure for HMAC authentication. HMAC-SHA256 produces 32-byte output (256-bit), providing 128 bits of security. HMAC-SHA256 is the current recommendation for all new applications. Both are secure for authentication, but HMAC-SHA256 has a larger security margin and is NIST-approved through 2030+.',
  },
  {
    category: 'Applications',
    question: 'How do I verify a GitHub webhook signature?',
    answer: 'GitHub sends HMAC-SHA256 in the X-Hub-Signature-256 header as "sha256=hexdigest". Verify by computing HMAC-SHA256 of the raw request body using your webhook secret, prepending "sha256=", and comparing with timing-safe comparison. Never compare without timing-safe comparison — it creates a vulnerability. Use the raw body bytes, not a parsed/serialized version, as JSON serialization may change byte order.',
  },
  {
    category: 'Applications',
    question: 'How does AWS use HMAC for request signing?',
    answer: 'AWS Signature Version 4 derives a signing key through 4 rounds of HMAC-SHA256: HMAC(HMAC(HMAC(HMAC("AWS4"+secretKey, date), region), service), "aws4_request"). The signature is then HMAC-SHA256 of the canonical request using this derived key. This key derivation limits the scope of each signing key to a specific date, region, and service.',
  },
  {
    category: 'Applications',
    question: 'How does HMAC relate to JWT authentication?',
    answer: 'JWTs signed with HS256, HS384, or HS512 use HMAC with SHA-256, SHA-384, or SHA-512 respectively. The signature is HMAC of base64url(header) + "." + base64url(payload) using the secret key. HS256 JWTs use symmetric keys — the same key signs and verifies. For public verification or non-repudiation, use RS256 (RSA) or ES256 (ECDSA) instead.',
  },
  {
    category: 'Applications',
    question: 'What is HKDF and how does it use HMAC?',
    answer: 'HKDF (HMAC-based Key Derivation Function, RFC 5869) uses HMAC to derive multiple cryptographic keys from a single input. The Extract step uses HMAC to produce a pseudorandom key; the Expand step uses HMAC iteratively to produce key material of the desired length. HKDF is used in TLS 1.3, Signal Protocol, and Noise Protocol for key derivation.',
  },
  {
    category: 'Technical',
    question: 'What is the mathematical structure of HMAC?',
    answer: 'HMAC(K, m) = H((K\' ⊕ opad) || H((K\' ⊕ ipad) || m)) where H is the hash function, K\' is the key padded to block size, ipad is 0x36 repeated block-size times, opad is 0x5C repeated block-size times, and || is concatenation. The nested structure prevents length extension attacks by ensuring the outer hash cannot be extended from the inner result.',
  },
  {
    category: 'Technical',
    question: 'What HMAC output formats are available?',
    answer: 'HMAC produces raw binary. Common encodings: hexadecimal (most common for webhooks — 64 chars for SHA256), Base64 (44 chars for SHA256 — used in HTTP headers), Base64url (URL-safe variant without padding — used in JWTs and URLs), and raw binary (used when feeding into further cryptographic operations). The format is a presentation choice that doesn\'t affect security.',
  },
  {
    category: 'Technical',
    question: 'Can I truncate HMAC output?',
    answer: 'RFC 2104 allows truncation to at least half the hash output. HMAC-SHA256 can be safely truncated to 128 bits (16 bytes). TOTP uses a specialized truncation to 4 bytes plus modular reduction. Don\'t truncate below 128 bits for security-sensitive applications — the security margin reduces proportionally with truncation length.',
  },
  {
    category: 'Comparison',
    question: 'When should I use HMAC vs AEAD encryption (AES-GCM)?',
    answer: 'Use HMAC when you need authentication without confidentiality (webhook verification, API signing, integrity checks on public data). Use AEAD (AES-GCM, ChaCha20-Poly1305) when you need both authentication and confidentiality — AEAD combines encryption and authentication in one safe operation. If you\'re doing Encrypt-then-MAC manually, switch to AEAD instead.',
  },
  {
    category: 'Comparison',
    question: 'When should I use HMAC vs RSA/ECDSA digital signatures?',
    answer: 'Use HMAC for authentication between parties who share a secret key — it\'s faster and simpler. Use RSA/ECDSA when you need public verifiability (anyone with the public key can verify), non-repudiation (the signer can\'t deny signing), or when sharing a secret key isn\'t feasible. JWTs: use HS256 for internal APIs with shared secrets, RS256 or ES256 for public APIs.',
  },
  {
    category: 'Implementation',
    question: 'How do I implement HMAC verification in Node.js?',
    answer: 'Use the built-in crypto module: `const hmac = crypto.createHmac("sha256", secretKey).update(message).digest("hex")`. For verification: `crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected))`. Always use timingSafeEqual — never use ===, ==, or string comparison to compare HMACs.',
  },
  {
    category: 'Implementation',
    question: 'How do I implement HMAC in Python?',
    answer: 'Use the built-in hmac module: `h = hmac.new(key.encode(), message.encode(), hashlib.sha256); result = h.hexdigest()`. For verification: `hmac.compare_digest(expected, received)` — this is Python\'s constant-time comparison function that prevents timing attacks.',
  },
  {
    category: 'Implementation',
    question: 'How do I implement HMAC in Go?',
    answer: '`mac := hmac.New(sha256.New, []byte(secretKey)); mac.Write([]byte(message)); result := hex.EncodeToString(mac.Sum(nil))`. For verification: `hmac.Equal(expected, received)` — Go\'s HMAC package provides the Equal function for constant-time comparison. Import: `crypto/hmac`, `crypto/sha256`, `encoding/hex`.',
  },
  {
    category: 'Implementation',
    question: 'How do I implement HMAC verification in PHP?',
    answer: '`$hmac = hash_hmac("sha256", $message, $secretKey)`. For verification: `hash_equals($expectedHmac, $receivedHmac)` — PHP\'s hash_equals is constant-time. Never use == or === for HMAC comparison in PHP.',
  },
  {
    category: 'Compliance',
    question: 'Is HMAC-SHA256 approved for use in compliance frameworks?',
    answer: 'Yes. HMAC-SHA256 is approved by NIST FIPS 198-1 and is valid through at least 2031 per NIST SP 800-131A. It satisfies PCI DSS requirements for message authentication, HIPAA integrity requirements for ePHI, and SOC 2/ISO 27001 authentication controls. Document your implementation details (algorithm, key length, key management) for audit purposes.',
  },
  {
    category: 'Compliance',
    question: 'Should I use HMAC-SHA1 or HMAC-SHA256?',
    answer: 'Use HMAC-SHA256 for all new applications. HMAC-SHA1 is still secure for authentication but is deprecated by NIST SP 800-131A. Legacy systems using HMAC-SHA1 should migrate to SHA-256 at the next opportunity. TOTP apps still use HMAC-SHA1 by default for RFC compliance, but newer TOTP URIs can specify SHA256.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does my HMAC verification keep failing?',
    answer: 'Common causes: (1) Key encoding mismatch — ensure key is bytes/string consistently (don\'t mix UTF-8 and raw bytes). (2) Message encoding — ensure both sides sign the same byte representation (raw body, not re-serialized JSON). (3) Hex case mismatch — compare lowercased or case-insensitively. (4) Trailing newline — some tools add \\n to input. (5) Different algorithms — confirm both sides use the same HMAC variant (SHA256 vs SHA1).',
  },
];

export const hmacGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
