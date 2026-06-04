import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Bcrypt Generator: Free Online Password Hashing Tool for Secure Development and Testing</h2>
        <p>
          Bcrypt is the gold standard of password hashing algorithms for web applications. Designed in
          1999 by Niels Provos and David Mazières, bcrypt has remained one of the most trusted password
          hashing functions in existence "” surviving decades of cryptanalytic scrutiny while MD5, SHA-1,
          and even SHA-256 (when used directly for passwords) have been rendered dangerously inadequate.
          Our free online bcrypt generator lets you hash passwords and verify bcrypt hashes instantly
          in your browser, with configurable work factors, for development, testing, and learning purposes.
        </p>
        <p>
          This tool is designed for developers implementing authentication systems, security engineers
          auditing password storage practices, students learning about cryptographic hashing, and anyone
          who needs to generate bcrypt hashes for testing or seeding databases without writing code.
          All computation runs in your browser "” no passwords are transmitted to our servers.
        </p>

        <h2>Why Password Hashing Is Not Like Regular Hashing</h2>
        <p>
          A fundamental misconception in web development is treating password storage like any other data
          hashing problem. General-purpose cryptographic hash functions (MD5, SHA-1, SHA-256) are designed
          to be <em>fast</em> "” they can hash gigabytes of data per second, which is essential for their
          intended applications: file integrity checking, digital signatures, and message authentication.
        </p>
        <p>
          For passwords, speed is the enemy. The faster a hash function runs, the more passwords an
          attacker can test per second in a brute-force or dictionary attack. A modern GPU can compute
          billions of SHA-256 hashes per second. Given that most user passwords are short and drawn from
          a limited vocabulary of common words, phrases, and patterns, an attacker with a stolen SHA-256
          password database can crack the majority of accounts in hours.
        </p>
        <p>
          Password hashing functions are designed with the opposite goal: they must be <em>deliberately
          slow</em>. Bcrypt's work factor (cost factor) controls how many iterations of the core algorithm
          execute, letting you tune the hashing time from milliseconds to seconds. A legitimate login
          attempt waiting 200ms for password verification is imperceptible to users. An attacker testing
          a billion password candidates at 200ms each would need 6,000 years.
        </p>

        <h2>How Bcrypt Works: The Blowfish Key Setup</h2>
        <p>
          Bcrypt is based on the Blowfish block cipher. Specifically, it uses an expensive key schedule
          algorithm from Blowfish called EksBlowfishSetup. The name bcrypt comes from "b" for Blowfish
          and "crypt" from the Unix password hashing API.
        </p>
        <p>
          The bcrypt algorithm:
        </p>
        <ul>
          <li>
            <strong>Generates a random 128-bit (16-byte) salt</strong>: each password hash gets its
            own unique random salt, making precomputed rainbow table attacks impossible even if the
            attacker knows the hashing algorithm.
          </li>
          <li>
            <strong>Runs EksBlowfishSetup</strong>: initializes the Blowfish cipher state using the
            cost factor, salt, and password. This step is intentionally expensive "” it runs
            2^cost_factor iterations of the Blowfish key schedule, where each iteration is
            computationally intensive.
          </li>
          <li>
            <strong>Encrypts the OrpheanBeholder string</strong>: a specific 192-bit constant
            ("OrpheanBeholderScryDoubt") is encrypted 64 times with the initialized cipher.
          </li>
          <li>
            <strong>Produces the final hash</strong>: the output combines the cost factor, salt, and
            ciphertext in a standard format.
          </li>
        </ul>
        <p>
          The entire bcrypt hash is self-contained: <code>$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VPLMsAbBK</code>
        </p>
        <p>
          Breaking this down:
        </p>
        <ul>
          <li><code>$2b$</code> "” version identifier (2b is the current recommended version; 2a and 2y also exist)</li>
          <li><code>12$</code> "” cost factor (12 means 2^12 = 4,096 iterations)</li>
          <li>Next 22 characters "” Base64-encoded 128-bit salt</li>
          <li>Remaining 31 characters "” Base64-encoded 184-bit hash output</li>
        </ul>
        <p>
          Total: 60 characters for the complete bcrypt hash including the version, cost, salt, and
          checksum "” everything needed to verify a password is in the hash itself.
        </p>

        <h2>Bcrypt Work Factor: Choosing the Right Cost</h2>
        <p>
          The work factor (cost factor) is bcrypt's most important configuration parameter. It determines
          how many iterations of the key schedule run: 2^cost iterations. Each increment of the cost
          factor doubles the computation time.
        </p>

        <h3>Current Recommendations (2024)</h3>
        <p>
          OWASP (Open Web Application Security Project) recommends a minimum work factor of 10 for bcrypt,
          with 12 preferred when the hardware budget allows. The goal is for password hashing to take
          approximately 100-300 milliseconds on current hardware for a single hash.
        </p>
        <p>
          Typical bcrypt timing on modern server hardware (2024):
        </p>
        <ul>
          <li>Cost 10: ~65ms per hash</li>
          <li>Cost 11: ~130ms per hash</li>
          <li>Cost 12: ~260ms per hash (OWASP preferred)</li>
          <li>Cost 13: ~520ms per hash</li>
          <li>Cost 14: ~1040ms per hash (one second "” noticeable to users)</li>
        </ul>
        <p>
          For high-traffic applications where authentication is a bottleneck, cost 10 or 11 is a practical
          balance. For low-traffic security-sensitive applications (admin portals, financial systems), cost
          12 or 13 provides stronger protection.
        </p>

        <h3>Increasing Cost Over Time</h3>
        <p>
          One of bcrypt's elegant properties is that you can increase the work factor over time as hardware
          gets faster. During login, after successfully verifying the password against the current hash,
          rehash the password with the new higher cost factor and update the stored hash. Users transparently
          get upgraded security at their next login without any disruption.
        </p>

        <h2>Bcrypt Salting: Preventing Rainbow Table Attacks</h2>
        <p>
          Every bcrypt hash includes a unique 128-bit random salt generated during hashing. This salt is
          incorporated into the key setup, meaning two users with identical passwords will have completely
          different bcrypt hashes.
        </p>
        <p>
          Example: both Alice and Bob use the password "password123"
        </p>
        <p>
          Alice's hash: <code>$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VPLMsAbBK</code>
        </p>
        <p>
          Bob's hash: <code>$2b$12$wH3PNfAbg7j2M7xA/wPkouQz1BTdcMYjWL3OYkz0YRwP8Z3eHvr0.</code>
        </p>
        <p>
          The salt is embedded in the hash string so verification does not require storing it separately.
          This means:
        </p>
        <ul>
          <li>
            <strong>Rainbow tables are useless</strong>: a precomputed rainbow table of unsalted hashes
            cannot crack bcrypt because each hash has a unique salt "” an attacker would need a separate
            rainbow table for every possible salt value.
          </li>
          <li>
            <strong>Credential stuffing is harder</strong>: an attacker cannot determine which users
            share the same password by comparing hashes "” all hashes look unique.
          </li>
          <li>
            <strong>Per-record cracking required</strong>: if an attacker cracks one bcrypt hash, the
            work provides no shortcut for cracking other hashes "” each hash must be attacked independently.
          </li>
        </ul>

        <h2>Bcrypt Versions: 2a, 2b, and 2y</h2>
        <p>
          The bcrypt specification has evolved through several versions:
        </p>
        <ul>
          <li>
            <strong>$2$</strong> "” original version. Had a bug with passwords containing non-ASCII bytes.
            Do not use.
          </li>
          <li>
            <strong>$2a$</strong> "” fixed non-ASCII bug, but some implementations (notably OpenBSD)
            had a different bug with passwords containing the null byte. Widely deployed but has
            implementation inconsistencies.
          </li>
          <li>
            <strong>$2b$</strong> "” the correct, canonical version introduced in OpenBSD 5.5. All new
            implementations should produce $2b$ hashes. Most modern libraries (bcrypt for Node.js,
            Python's bcrypt, PHP 7.x+) produce $2b$ by default.
          </li>
          <li>
            <strong>$2x$ and $2y$</strong> "” versions introduced by PHP to work around the $2a$ bug.
            $2y$ is equivalent to $2b$ in correctly-implemented bcrypt. PHP 7+ defaults to $2y$ which
            is verified-equivalent to $2b$.
          </li>
        </ul>
        <p>
          Our generator produces $2b$ hashes "” the current standard. Verification accepts all common versions.
        </p>

        <h2>Bcrypt's 72-Character Password Limit</h2>
        <p>
          One important limitation: bcrypt silently truncates passwords to 72 bytes (not characters "”
          multibyte UTF-8 characters count as multiple bytes). Passwords longer than 72 bytes produce the
          same hash as the first 72 bytes. This has two implications:
        </p>
        <p>
          <strong>Security implication</strong>: users who set very long passphrases (73+ characters)
          receive no additional security from the extra characters beyond the 72-byte limit "” the extra
          content is ignored.
        </p>
        <p>
          <strong>Practical mitigation</strong>: two approaches are used in production. The safer approach
          is to pre-hash the password with SHA-256 or SHA-512 before passing to bcrypt "” the SHA output
          is always 32 or 64 bytes, well within the limit, and represents the full entropy of any-length
          input. The simpler approach is to limit accepted passwords to 72 bytes and clearly communicate
          this to users.
        </p>
        <p>
          Our generator shows the effective byte length of your input and warns if it exceeds 72 bytes.
        </p>

        <h2>Bcrypt Implementation in Major Languages</h2>

        <h3>Node.js / JavaScript</h3>
        <p>
          The <code>bcrypt</code> package (native binding to C++ bcrypt) and <code>bcryptjs</code> (pure
          JavaScript, no native dependencies) are both widely used:
        </p>
        <p>
          <code>const bcrypt = require('bcrypt');</code>
        </p>
        <p>
          <code>const hash = await bcrypt.hash(password, 12); // saltRounds = cost factor</code>
        </p>
        <p>
          <code>const match = await bcrypt.compare(password, hash); // returns boolean</code>
        </p>
        <p>
          Always use the async API (<code>bcrypt.hash</code> / <code>bcrypt.compare</code>) rather than
          the synchronous API (<code>bcrypt.hashSync</code> / <code>bcrypt.compareSync</code>) in Node.js
          servers. The sync versions block the event loop during the CPU-intensive hash computation,
          degrading server responsiveness for all concurrent requests.
        </p>

        <h3>Python</h3>
        <p>
          The <code>bcrypt</code> package wraps the OpenBSD bcrypt implementation:
        </p>
        <p>
          <code>import bcrypt</code>
        </p>
        <p>
          <code>hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(rounds=12))</code>
        </p>
        <p>
          <code>match = bcrypt.checkpw(password.encode('utf-8'), hashed)</code>
        </p>
        <p>
          Always encode the password to bytes before passing to bcrypt. The <code>gensalt(rounds=12)</code>
          call generates a new random salt with the specified cost factor "” you do not manage the salt
          separately.
        </p>

        <h3>PHP</h3>
        <p>
          PHP 5.5+ has native bcrypt support through <code>password_hash()</code> and
          <code>password_verify()</code>:
        </p>
        <p>
          <code>{'$hash = password_hash($password, PASSWORD_BCRYPT, [&#39;cost&#39; => 12]);'}</code>
        </p>
        <p>
          <code>$match = password_verify($password, $hash); // returns boolean</code>
        </p>
        <p>
          PHP also provides <code>password_needs_rehash()</code> to check if a stored hash was generated
          with a lower cost factor and should be upgraded on next login.
        </p>

        <h3>Java / Spring</h3>
        <p>
          Spring Security provides <code>BCryptPasswordEncoder</code>:
        </p>
        <p>
          <code>BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);</code>
        </p>
        <p>
          <code>String hash = encoder.encode(rawPassword);</code>
        </p>
        <p>
          <code>boolean matches = encoder.matches(rawPassword, encodedPassword);</code>
        </p>

        <h3>Go</h3>
        <p>
          <code>golang.org/x/crypto/bcrypt</code>:
        </p>
        <p>
          <code>hash, err := bcrypt.GenerateFromPassword([]byte(password), 12)</code>
        </p>
        <p>
          <code>err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))</code>
        </p>

        <h3>Ruby / Rails</h3>
        <p>
          The <code>bcrypt</code> gem (which has_secure_password in Rails uses internally):
        </p>
        <p>
          <code>require 'bcrypt'; hash = BCrypt::Password.create(password, cost: 12)</code>
        </p>
        <p>
          <code>BCrypt::Password.new(hash) == password # returns boolean</code>
        </p>

        <h2>Bcrypt vs Argon2 vs scrypt vs PBKDF2</h2>

        <h3>Bcrypt (1999)</h3>
        <p>
          Pros: time-tested, widely supported in every language and framework, simple configuration (one
          cost parameter). Cons: fixed maximum memory usage, no parallelism resistance (can be attacked
          with multiple GPUs/threads), 72-byte password limit. Still excellent and recommended for most
          web applications.
        </p>

        <h3>scrypt (2009)</h3>
        <p>
          Pros: memory-hard (requires significant RAM for computation, making GPU attacks more expensive),
          configurable memory and CPU cost. Cons: two-parameter tuning is error-prone, less universal
          library support than bcrypt. Better than bcrypt for hardening against ASIC/GPU attacks.
        </p>

        <h3>Argon2 (2015 "” Password Hashing Competition Winner)</h3>
        <p>
          The current OWASP and NIST recommendation for new applications. Three variants:
        </p>
        <ul>
          <li><strong>Argon2d</strong> "” fastest, best resistance against GPU attacks, but vulnerable to
          side-channel attacks. Suitable for cryptocurrencies, not authentication.</li>
          <li><strong>Argon2i</strong> "” side-channel resistant, weaker against GPU attacks. Suitable
          for password hashing.</li>
          <li><strong>Argon2id</strong> "” hybrid approach (OWASP and NIST recommended). Use this
          unless you have a specific reason not to.</li>
        </ul>
        <p>
          Argon2id parameters: minimum memory 19MB, minimum time cost 2, minimum parallelism 1 (OWASP
          minimum recommendation). Supported in Python via <code>argon2-cffi</code>, Node.js via
          <code>argon2</code>, PHP via <code>password_hash($pass, PASSWORD_ARGON2ID)</code> (PHP 7.3+).
        </p>

        <h3>PBKDF2 (2000)</h3>
        <p>
          NIST-recommended and FIPS-compliant. The only option in some regulated environments (US
          government systems). Less memory-hard than bcrypt/scrypt/Argon2, making it relatively more
          vulnerable to GPU brute force. Requires very high iteration counts (OWASP recommends 600,000
          iterations with SHA-256, 1,300,000 with SHA-1). Available natively in .NET, Java, iOS, and
          Android without additional libraries.
        </p>

        <h2>Implementing Bcrypt Correctly: Common Mistakes</h2>

        <h3>Timing-Safe Comparison</h3>
        <p>
          Never compare bcrypt hashes with string equality (<code>===</code> or <code>==</code>). String
          comparison short-circuits as soon as it finds a mismatch, creating a timing oracle that leaks
          information about where hashes differ. Use the library's provided <code>compare</code> function,
          which performs constant-time comparison. All mainstream bcrypt libraries handle this correctly.
        </p>

        <h3>Blocking the Event Loop</h3>
        <p>
          The synchronous bcrypt API in Node.js blocks the entire event loop during hashing. A login
          endpoint using <code>bcrypt.hashSync()</code> will freeze all other request processing for
          100-300ms per authentication. Always use the async API in server applications.
        </p>

        <h3>Cost Factor Too Low</h3>
        <p>
          Using a cost factor of 4 or 6 (often seen in tutorials that prioritize test speed) is dangerous
          in production. Cost 4 takes microseconds, providing essentially no protection. The code
          that sets the cost factor must be different between test environments (cost 4 for speed) and
          production (cost 12 for security). Use environment variables to configure the cost.
        </p>

        <h3>Storing Plaintext Passwords "Temporarily"</h3>
        <p>
          Never store plaintext passwords for any duration "” not in a database, not in a log, not in a
          temporary file, not in application memory longer than necessary. Hash on receipt, immediately,
          before any other processing. Treat the plaintext password like a hot coal "” handle it briefly
          and discard it.
        </p>

        <h3>Using Bcrypt for Non-Password Data</h3>
        <p>
          Bcrypt's intentional slowness is a feature for passwords and a bug for other use cases. Do not
          use bcrypt for API key verification, session token validation, file checksums, or any high-
          throughput hashing need. Use HMAC-SHA256 for those scenarios.
        </p>

        <h2>Bcrypt Hash Format Reference</h2>
        <p>
          A complete bcrypt hash like <code>$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VPLMsAbBK</code> contains:
        </p>
        <ul>
          <li><code>$2b$</code> "” algorithm version (2b = current canonical bcrypt)</li>
          <li><code>12$</code> "” cost factor (work factor = 2^12 = 4,096 iterations)</li>
          <li><code>LQv3c1yqBWVHxkd0LHAkCO</code> "” 22 characters: Base64-encoded 128-bit salt</li>
          <li><code>Yz6TtxMQJqhN8/LewdBPj/VPLMsAbBK</code> "” 31 characters: Base64-encoded 184-bit hash</li>
        </ul>
        <p>
          Total length: 60 characters. Fixed, regardless of input password length. The complete hash
          is stored as a single string in the database "” no need to store salt separately.
        </p>
        <p>
          The bcrypt Base64 alphabet is slightly different from standard Base64: it uses <code>./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</code>
          "” note the <code>./</code> at the start instead of <code>+/</code>.
        </p>

        <h2>Testing Bcrypt Hashes</h2>
        <p>
          During development, you often need to:
        </p>
        <ul>
          <li>Generate test bcrypt hashes for seed data</li>
          <li>Verify that a password matches a stored hash in a database</li>
          <li>Check that your bcrypt implementation produces hashes in the expected format</li>
          <li>Test that password update flows correctly replace old hashes</li>
          <li>Validate that the cost factor is configured correctly in different environments</li>
        </ul>
        <p>
          Our tool supports all of these: generate a hash from a password with a chosen cost factor,
          verify that a password matches a given bcrypt hash, and inspect the hash structure (version,
          cost, salt) without writing any code.
        </p>

        <h2>Database Schema for Bcrypt Hashes</h2>
        <p>
          Store bcrypt hashes in a <code>VARCHAR(60)</code> column (exactly 60 characters). Some
          developers use <code>CHAR(60)</code> (fixed length). Do not truncate to fewer than 60
          characters "” the hash will become unverifiable. If you are planning for potential future
          algorithm migration to Argon2 or similar, use <code>VARCHAR(255)</code> to accommodate
          longer future hash strings without a schema migration.
        </p>
        <p>
          Column naming convention: <code>password_hash</code> or <code>password_digest</code>
          (Rails convention). Never name the column <code>password</code> "” this risks confusion
          with plaintext storage and may trigger GDPR/compliance audit flags.
        </p>

        <h2>Privacy: Why This Tool Never Sees Your Passwords</h2>
        <p>
          All bcrypt computation in our tool runs in your browser using WebAssembly. The password you
          type, the salt generated, and the hash produced never leave your browser. No network request
          is made during hashing or verification. The tool works completely offline once loaded.
        </p>
        <p>
          This matters because: passwords are the most sensitive data users create. Even if a bcrypt
          hash is exposed, a strong password is safe (bcrypt's slowness protects it). But plaintext
          passwords transmitted to a third-party server represent an unacceptable risk even when TLS
          is used "” the server could log, store, or leak the plaintext. Our offline-first architecture
          eliminates this risk entirely.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is bcrypt and why is it used for passwords?',
    answer:
      'Bcrypt is a password hashing function based on the Blowfish cipher, designed in 1999. It is the standard for password storage because it is deliberately slow (protecting against brute-force attacks), automatically salted (preventing rainbow table attacks), and has a configurable work factor that can be increased as hardware gets faster.',
  },
  {
    category: 'General',
    question: 'What does a bcrypt hash look like?',
    answer:
      'A bcrypt hash is always 60 characters: $2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VPLMsAbBK "” containing the version ($2b$), cost factor (12), Base64-encoded salt (22 chars), and Base64-encoded hash (31 chars). The complete hash includes everything needed to verify a password.',
  },
  {
    category: 'General',
    question: 'Is bcrypt one-way? Can it be reversed?',
    answer:
      'Bcrypt is a one-way function "” given a bcrypt hash, it is computationally infeasible to recover the original password through mathematical means. Verification works by running bcrypt on the candidate password with the extracted salt and comparing the result to the stored hash. Brute force against weak passwords is possible but extremely slow due to bcrypt&#39;s cost factor.',
  },
  {
    category: 'Work Factor',
    question: 'What work factor (cost) should I use?',
    answer:
      'OWASP recommends a minimum of cost 10, preferably 12 for new systems. Cost 12 takes approximately 250-400ms on current server hardware "” imperceptible to users but making brute-force attacks extremely slow. Increase the cost factor over time as hardware improves.',
  },
  {
    category: 'Work Factor',
    question: 'What does the bcrypt cost factor (work factor) actually do?',
    answer:
      'The cost factor N means the algorithm runs 2^N iterations of the internal key schedule. Cost 10 = 1,024 iterations (~65ms); cost 12 = 4,096 iterations (~260ms); cost 14 = 16,384 iterations (~1 second). Each +1 doubles the time. Higher cost = more work for attackers, more time for legitimate users.',
  },
  {
    category: 'Work Factor',
    question: 'Can I upgrade the work factor without forcing users to reset passwords?',
    answer:
      'Yes "” during a successful login, after verifying the password against the old hash, check if password_needs_rehash() is true (PHP) or if the cost is below your target. If so, re-hash the password with the new higher cost factor and update the stored hash. Users get upgraded security transparently at next login.',
  },
  {
    category: 'Salt',
    question: 'Do I need to store the bcrypt salt separately?',
    answer:
      'No "” the salt is embedded in the bcrypt hash string itself. The 22 characters after the cost factor in the hash are the Base64-encoded salt. bcrypt.compare() / password_verify() automatically extracts the salt from the stored hash for verification.',
  },
  {
    category: 'Salt',
    question: 'Why does bcrypt use a random salt?',
    answer:
      'The random salt ensures two users with the same password produce different hashes. This prevents rainbow table attacks (precomputed hash-to-password lookup tables) and prevents attackers from identifying which users share passwords by comparing hashes. Each bcrypt hash must be individually attacked.',
  },
  {
    category: 'Limits',
    question: 'What is bcrypt\'s 72-character password limit?',
    answer:
      'Bcrypt truncates passwords to 72 bytes. Characters beyond the 72nd byte are ignored "” a 100-character password produces the same hash as its first 72 characters. Mitigation: pre-hash with SHA-256 (always 32 bytes) before bcrypt, or limit accepted passwords to 72 bytes. Our generator warns when input exceeds 72 bytes.',
  },
  {
    category: 'Security',
    question: 'Why is bcrypt better than MD5 or SHA-256 for passwords?',
    answer:
      'MD5 and SHA-256 are designed to be fast "” GPUs compute billions per second, making brute force trivial. Bcrypt is deliberately slow (100-500ms per hash) and memory-intensive, reducing GPU brute-force to a few thousand hashes per second. The difference between cracking in hours vs. thousands of years.',
  },
  {
    category: 'Security',
    question: 'Is bcrypt still secure in 2024?',
    answer:
      'Yes "” bcrypt remains secure and is recommended by OWASP for password hashing. Its main limitation is no built-in parallelism or memory-hardness resistance. For new applications, Argon2id offers better theoretical resistance to GPU attacks while bcrypt remains excellent and more universally supported.',
  },
  {
    category: 'Security',
    question: 'Should I use bcrypt or Argon2 for new projects?',
    answer:
      'OWASP&#39;s first recommendation is Argon2id for new applications. Bcrypt is the second recommendation when Argon2 is not available. Both are excellent choices. Argon2id offers memory-hardness (making GPU attacks more expensive) but has less universal framework support. Bcrypt works out-of-the-box in virtually every web framework.',
  },
  {
    category: 'Versions',
    question: 'What is the difference between $2a$, $2b$, and $2y$ bcrypt?',
    answer:
      '$2a$ had implementation bugs with certain password byte patterns. $2b$ is the correct canonical version (OpenBSD 5.5+) "” use this for all new hashes. $2y$ was PHP&#39;s workaround for the $2a$ bug and is equivalent to $2b$. Most modern libraries produce $2b$ hashes automatically.',
  },
  {
    category: 'Implementation',
    question: 'How do I hash a password with bcrypt in Node.js?',
    answer:
      'npm install bcrypt, then: const bcrypt = require("bcrypt"); const hash = await bcrypt.hash(password, 12); // Store hash in database. To verify: const match = await bcrypt.compare(candidatePassword, storedHash); Always use the async API to avoid blocking the event loop.',
  },
  {
    category: 'Implementation',
    question: 'How do I hash a password with bcrypt in Python?',
    answer:
      'pip install bcrypt, then: import bcrypt; hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt(rounds=12)). Verify: bcrypt.checkpw(candidate.encode("utf-8"), hashed). Always encode strings to bytes before passing to the bcrypt functions.',
  },
  {
    category: 'Implementation',
    question: 'How do I hash a password with bcrypt in PHP?',
    answer:
      'Built into PHP 5.5+: $hash = password_hash($password, PASSWORD_BCRYPT, ["cost" => 12]); Verify: $match = password_verify($password, $hash); Check if rehash needed: password_needs_rehash($hash, PASSWORD_BCRYPT, ["cost" => 12]).',
  },
  {
    category: 'Implementation',
    question: 'How do I store bcrypt hashes in a database?',
    answer:
      'Use VARCHAR(60) (bcrypt hashes are always exactly 60 characters) or VARCHAR(255) for future algorithm flexibility. Name the column password_hash or password_digest. Never name it "password" "” this can cause confusion with plaintext and trigger compliance audit concerns.',
  },
  {
    category: 'Implementation',
    question: 'How do I implement "change password" with bcrypt?',
    answer:
      'Verify the current password against the stored hash first. If it matches, hash the new password with bcrypt and update the stored hash. Also invalidate all existing sessions (by rotating the session secret or deleting sessions for that user). Never store the old hash for comparison after a password change.',
  },
  {
    category: 'Comparison',
    question: 'What is the difference between bcrypt and PBKDF2?',
    answer:
      'Both are slow password hashing functions. Bcrypt is simpler (one cost parameter) and universally supported in web frameworks. PBKDF2 is NIST-recommended and FIPS-compliant, making it required in some regulated environments. PBKDF2 requires very high iteration counts (600,000+ with SHA-256) to match bcrypt&#39;s protection level.',
  },
  {
    category: 'Testing',
    question: 'How do I generate test bcrypt hashes without writing code?',
    answer:
      'Use our bcrypt generator "” enter any password, choose a cost factor (use 4 for tests to be fast, 12 for production-realistic), and instantly get the bcrypt hash. Copy it to use in database seeds, test fixtures, or when testing your authentication system&#39;s verification logic.',
  },
  {
    category: 'Testing',
    question: 'Why should I use cost factor 4 for test environments?',
    answer:
      'Cost factor 4 (the minimum) takes microseconds instead of hundreds of milliseconds. Unit tests and integration tests that hash passwords run dramatically faster. Use an environment variable (BCRYPT_COST=4 in test, BCRYPT_COST=12 in production) to configure this without hardcoding.',
  },
  {
    category: 'Privacy',
    question: 'Is it safe to use this online bcrypt generator?',
    answer:
      'Yes "” all bcrypt computation runs entirely in your browser using WebAssembly. No password, salt, or hash is transmitted to our servers. The tool is safe for testing with real-looking passwords. For production systems, generate hashes programmatically using your application&#39;s bcrypt library to ensure correct integration.',
  },
  {
    category: 'Common Mistakes',
    question: 'What are the most common bcrypt implementation mistakes?',
    answer:
      'Most common mistakes: (1) using cost factor 4 in production (too fast); (2) using the synchronous API in Node.js (blocks event loop); (3) comparing hashes with === instead of bcrypt.compare() (timing oracle); (4) using bcrypt for API keys or sessions (should be fast, use HMAC-SHA256); (5) not upgrading cost factors as hardware improves.',
  },
];

export const bcryptGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
