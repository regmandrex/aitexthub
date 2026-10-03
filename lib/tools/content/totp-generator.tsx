import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>The Complete Guide to Time-Based One-Time Passwords and Two-Factor Authentication: TOTP Generator</h2>
      <p>Time-Based One-Time Passwords (TOTP) represent the most universally adopted standard for software-driven two-factor authentication (2FA). When you launch Google Authenticator, Authy, 1Password, or Microsoft Authenticator and view a six-digit code that refreshes every 30 seconds, you are utilizing TOTP. This very same process secures millions of profiles across every major platform — Google, GitHub, AWS, Cloudflare, Stripe, Twitter, Coinbase, and countless others. Comprehending how TOTP functions, what guarantees its security, and where its boundaries reside is vital for anybody developing secure authentication frameworks or overseeing organizational security.</p>
      <p>TOTP is outlined in RFC 6238 (released 2011) as an evolution of HOTP (HMAC-based One-Time Password, RFC 4226 from 2005). It produces temporary codes employing a shared secret alongside the current Unix timestamp, rendering each code active solely for a brief temporal window. Contrary to SMS-based 2FA, TOTP codes are generated entirely offline — zero network connectivity necessary, zero SMS carrier vulnerability, and zero real-time server communication required at the moment of code creation.</p>

      <h2>How TOTP Functions: The Algorithm</h2>
      <p>Grasping the TOTP algorithm clarifies what appears like wizardry. The procedure is actually quite straightforward once you comprehend each individual phase.</p>

      <h3>Phase 1: The Shared Secret</h3>
      <p>When you configure TOTP authentication on a platform, that platform creates a cryptographically random secret — generally 160 bits (20 bytes) of random data. This secret is distributed between the server and your authenticator app, typically via scanning a QR code. The secret is presented in Base32 encoding (A–Z plus 2–7) because Base32 is case-insensitive and avoids characters that appear alike (0 vs O, 1 vs I vs l).</p>
      <p>A standard Base32-encoded TOTP secret resembles: <code>JBSWY3DPEHPK3PXP</code>. This encodes 10 bytes (80 bits) — although RFC 6238 advises at least 128 bits, and solutions like Google Authenticator employ 80-bit secrets by default whilst superior implementations utilize 160 bits.</p>
      <p>The shared secret must be preserved securely on both sides. If a malicious actor acquires the secret, they can produce all upcoming TOTP codes. Platforms that have experienced database compromises where TOTP secrets were stored in plaintext have effectively nullified their 2FA protection for all impacted accounts.</p>

      <h3>Phase 2: Time Counter (T)</h3>
      <p>TOTP leverages time to generate distinct codes. The active Unix timestamp (seconds since January 1, 1970, UTC) is divided by the time step (typically 30 seconds) and rounded down:</p>
      <p>
        <strong>T = floor(Unix_timestamp / time_step)</strong>
      </p>
      <p>For instance, at Unix timestamp 1714000200 (April 25, 2024, 10:10:00 UTC): T = floor(1714000200 / 30) = floor(57133340) = 57133340</p>
      <p>Consequently, every Unix timestamp falling inside that 30-second interval generates an identical T value, resulting in the exact same TOTP code. Because T goes up by 1 every 30 seconds, every 30-second window stays distinct.</p>

      <h3>Phase 3: HMAC-SHA1 Computation</h3>
      <p>The time counter T transforms into an 8-byte big-endian unsigned integer. Next, HMAC-SHA1 gets calculated by taking the shared secret for the key alongside the 8-byte T value for the message:</p>
      <p>
        <strong>hash = HMAC-SHA1(secret, T_bytes)</strong>
      </p>
      <p>HMAC-SHA1 generates a 20-byte (160-bit) result. While SHA-1 is viewed as cryptographically weak in certain scenarios regarding collision resistance, it stays secure for HMAC applications since HMAC security relies on the PRF traits of the hash rather than collision resistance.</p>
      <p>Certain TOTP applications employ HMAC-SHA256 or HMAC-SHA512 instead. Selecting the hash algorithm is set within the TOTP parameters via the "algorithm" field inside the otpauth:// URI, even though the majority of authenticator apps only handle SHA1 even though the specification permits SHA256 and SHA512.</p>

      <h3>Step 4: Dynamic Truncation</h3>
      <p>The 20-byte HMAC result needs shrinking down to a brief numeric code. Dynamic truncation pulls a 4-byte (32-bit) integer from the HMAC result:</p>
      <ol>
        <li>Take the final byte of the HMAC (byte 19)</li>
        <li>Utilize its lower 4 bits as an offset number (0–15)</li>
        <li>Pull 4 bytes beginning at that specific offset location</li>
        <li>Change the most significant bit of the initial byte to 0 to prevent signed integer problems</li>
        <li>Treat the 4 bytes as a 31-bit unsigned integer</li>
      </ol>
      <p>This predictable truncation relies on determinism, yielding identical outputs for identical HMAC data. Selecting via offset incorporates entropy throughout the entire HMAC instead of simply grabbing the initial 4 bytes.</p>

      <h3>Phase 5: Code Generation</h3>
      <p>Computation of the final TOTP code happens by applying modulo 10^digits to the truncated integer:</p>
      <p>
        <strong>TOTP = truncated_integer mod 10^6</strong> (for 6-digit codes)
      </p>
      <p>Padding with zeros ensures the output matches the required digit count. Should the modulo output equal 34891, the resulting 6-digit code becomes "034891". Such zero-padding remains vital; omitting it causes codes beginning with 0 to look shorter, thus failing authentication.</p>
      <p>Standard TOTP setups rely on 6-digit codes (digits=6, mod 1,000,000). Certain security-focused setups employ 8-digit codes to expand the code space by 100x, lowering the effectiveness of brute-force attempts.</p>

      <h2>The otpauth:// URI Structure</h2>
      <p>Sharing TOTP settings generally happens through a QR code featuring an otpauth:// URI. Grasping this structure aids in creating TOTP onboarding processes, troubleshooting login troubles, and moving between authentication applications.</p>
      <p>The structure of the otpauth URI: <code>otpauth://totp/LABEL?PARAMETERS</code></p>
      <p>
        Full example:
      </p>
      <pre><code>{`otpauth://totp/Example%3Auser@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA1&digits=6&period=30`}</code></pre>
      <p>
        Parameters explained:
      </p>
      <ul>
        <li><strong>type</strong>: <code>totp</code> (time-based) or <code>hotp</code> (counter-based)</li>
        <li><strong>label</strong>: Shown inside the authenticator app. Structure: <code>issuer:account</code> (URL-encoded)</li>
        <li><strong>secret</strong>: Shared secret encoded in Base32 (padding is unnecessary for most systems)</li>
        <li><strong>issuer</strong>: The name of the service shown inside the authenticator app. This must match the issuer found in the label.</li>
        <li><strong>algorithm</strong>: SHA1 (standard), SHA256, or SHA512</li>
        <li><strong>digits</strong>: 6 (standard) or 8</li>
        <li><strong>period</strong>: 30 seconds (standard). The duration of the time step in seconds. Certain platforms utilize 60.</li>
        <li><strong>counter</strong>: Applicable solely to HOTP, representing the starting counter value</li>
      </ul>

      <h2>TOTP Security Analysis</h2>
      <p>TOTP delivers markedly better protection than passwords by themselves, yet knowing its security traits and vulnerability vectors is vital for correctly assessing and deploying it.</p>

      <h3>What TOTP Safeguards Against</h3>
      <ul>
        <li><strong>Password theft/database breach</strong>: Someone possessing your password remains unable to sign in without possessing the active TOTP code, which stays out of their reach.</li>
        <li><strong>Password reuse attacks</strong>: Even when identical passwords get used across multiple platforms, TOTP stops credentials meant for one platform from granting access elsewhere.</li>
        <li><strong>Brute-force password attacks</strong>: Successfully executing a brute-force attack recovers merely the password, leaving the TOTP secret safe.</li>
        <li><strong>Credential stuffing</strong>: Exposed pairs of usernames and passwords originating from separate incidents fail to grant access whenever TOTP is enforced.</li>
      </ul>

      <h3>Attacks Against TOTP</h3>
      <p><strong>Real-time phishing (adversary-in-the-middle)</strong>: The most impactful practical threat. A fraudulent page forwards user credentials alongside the TOTP code instantly to the legitimate service, granting access prior to the expiration of the 30-second timeframe. Software like Evilginx2 and Modlishka streamline this process. TOTP fails to defend against advanced real-time phishing schemes. Hardware-based security keys (FIDO2/WebAuthn) defend against such attacks by tying authentication directly to the origin URL.</p>
      <p><strong>Secret theft</strong>: When the database containing server-side TOTP secrets suffers a breach and secrets remain unencrypted, TOTP security fails for every account. Secrets demand encrypted storage at rest, preferably leveraging hardware security modules (HSMs).</p>
      <p>[1] <strong>Live brute-force attempts</strong>: Given a 6-character code and a 30-second interval, an adversary can submit perhaps 2 guesses per cycle (production systems typically block access after 1 to 3 failed attempts). Because the overall pool spans 1,000,000 potential combinations, guessing an active code without rate limits carries just a 1-in-1,000,000 probability. When request throttling is implemented, guessing the code in real time becomes mathematically impossible.</p>
      <p>[2] <strong>Clock manipulation</strong>: The validity of TOTP codes depends upon matching system clocks. Should an attacker succeed in altering a target's internal clock, they might manage to authenticate using expired or future tokens. Robust authentication backends counteract minor timing variations by allowing a drift window (frequently ±1 period, which translates to ±30 seconds) to manage slight system desynchronization.</p>
      <p>[3] <strong>SIM card hijacking</strong>: This threat exclusively targets text-based verification rather than TOTP systems. Because TOTP tokens bypass cellular messaging entirely, the protocol remains completely safe from SIM swapping schemes.</p>
      <p>[4] <strong>Malicious software</strong>: When an attacker infects a victim's machine with spyware, they can capture the active TOTP string straight out of the authenticator application or log keystrokes during entry. That vulnerability stems from an insecure operating environment rather than any flaw in TOTP design.</p>

      <h3>[5] TOTP vs. SMS 2FA vs. FIDO2</h3>
      <p>[6] Not all 2FA is equally secure. Here's a comparative analysis:</p>
      <ul>
        <li>[7] <strong>Text message 2FA</strong>: Simple to adopt but inherently insecure—exposed to carrier impersonation, SS7 routing vulnerabilities, network eavesdropping, and SIM hijacking. Consequently, NIST SP 800-63B advises against relying on SMS messaging for core multi-factor authentication.</li>
        <li>[8] <strong>TOTP</strong>: Dependable protection—unaffected by carrier exploits or SIM hijacking, functional without an internet connection, and universally supported. It remains susceptible to live adversary-in-the-middle phishing and database secret leakage, yet outperforms SMS dramatically.</li>
        <li>[9] <strong>Hardware tokens via FIDO2/WebAuthn</strong>: Top-tier defense—immune to phishing through cryptographic domain binding, protected from replay attempts, requiring no secret data stored on authentication servers, and resilient even during active proxy sessions. The premier benchmark for mission-critical accounts.</li>
        <li>[10] <strong>Push notifications (Duo, Microsoft Authenticator)</strong>: Convenient but vulnerable to MFA fatigue attacks where attackers spam push requests until the user accidentally approves one.</li>
      </ul>

      <h2>[11] Implementing TOTP: Server-Side Code</h2>

      <h3>[12] Generating a TOTP Secret</h3>
      <pre><code>{`// Node.js
import * as crypto from 'crypto';

function generateTotpSecret(bytes = 20): string {
  const buffer = crypto.randomBytes(bytes);
  return base32Encode(buffer); // Use a base32 library
}

// Python
import secrets
import base64

def generate_totp_secret(byte_length=20):
    random_bytes = secrets.token_bytes(byte_length)
    return base64.b32encode(random_bytes).decode('utf-8')`}</code></pre>

      <h3>[13] Validating a TOTP Code</h3>
      <pre><code>{`// Node.js — TOTP validation with clock skew tolerance
import * as crypto from 'crypto';

function validateTotp(
  secret: string,  // Base32-encoded
  code: string,    // 6-digit code from user
  window = 1,      // Allow ±window time steps
  digits = 6,
  period = 30
): boolean {
  const secretBytes = base32Decode(secret);
  const now = Math.floor(Date.now() / 1000);
  const T = Math.floor(now / period);

  for (let i = -window; i <= window; i++) {
    const expectedCode = generateHotp(secretBytes, T + i, digits);
    if (timingSafeEqual(code, expectedCode)) return true;
  }
  return false;
}

function generateHotp(secretBytes: Buffer, counter: number, digits: number): string {
  const counterBytes = Buffer.allocUnsafe(8);
  counterBytes.writeBigUInt64BE(BigInt(counter));
  const hmac = crypto.createHmac('sha1', secretBytes).update(counterBytes).digest();
  const offset = hmac[19] & 0xf;
  const code = (((hmac[offset] & 0x7f) << 24) |
                ((hmac[offset + 1] & 0xff) << 16) |
                ((hmac[offset + 2] & 0xff) << 8) |
                (hmac[offset + 3] & 0xff)) % Math.pow(10, digits);
  return code.toString().padStart(digits, '0');
}`}</code></pre>

      <h3>[14] Libraries for TOTP Implementation</h3>
      <ul>
        <li>[15] <strong>Node.js</strong>: <code>otplib</code>, <code>speakeasy</code>, <code>@otplib/preset-default</code></li>
        <li><strong>Python</strong>: <code>pyotp</code>, <code>onetimepass</code></li>
        <li>[16] <strong>Go</strong>: <code>github.com/pquerna/otp</code></li>
        <li><strong>Ruby</strong>: <code>rotp</code></li>
        <li><strong>Java</strong>: <code>GoogleAuth</code>, <code>aerogear-otp-java</code></li>
        <li>[17] <strong>PHP</strong>: <code>spomky-labs/otphp</code>, <code>google-authenticator-php</code></li>
      </ul>
      <p>[18] Rely on an established, well-tested package instead of rolling your own TOTP algorithm. Battle-tested packages properly address intricate edge scenarios including Base32 padding discrepancies, clock drift tolerance, side-channel immune comparisons, and accurate HMAC operations.</p>

      <h3>Timing-Safe Comparison</h3>
      <p>[19] TOTP code comparison must use timing-safe string comparison to prevent timing side-channel attacks. A naive <code>code === expected</code> comparison in some languages returns faster when the strings differ at an earlier position, leaking information about how many digits are correct:</p>
      <pre><code>{`// Node.js — timing-safe comparison
import * as crypto from 'crypto';
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

# Python — timing-safe comparison
import hmac
def timing_safe_equal(a: str, b: str) -> bool:
    return hmac.compare_digest(a, b)`}</code></pre>

      <h2>[20] TOTP Enrollment Flow Best Practices</h2>
      <p>[21] The onboarding workflow is just as vital as the core mathematical cryptography. An unintuitive or confusing verification registration creates friction, escalates user lockout problems, and exposes security vulnerabilities.</p>

      <h3>[22] Secret Generation and QR Code Display</h3>
      <p>[23] Produce the authentication key directly on the backend using a CSPRNG (cryptographically secure pseudo-random number generator). Avoid creating TOTP secrets inside the client environment. Present the QR graphic alongside the unencoded secret string simultaneously; this ensures visitors lacking cameras or configuring credentials inside a password manager can finalize their setup.</p>

      <h3>Verification Before Enabling</h3>
      <p>[24] Do not store the shared secret or activate TOTP on a user account until they supply a verified TOTP code. Doing so ensures that they properly captured the QR code and are capable of producing valid passcodes. Skipping this confirmation phase risks permanently locking out individuals who scanned the code improperly.</p>

      <h3>Backup Codes</h3>
      <p>[25] Provide an allotment of single-use recovery credentials whenever an individual turns on TOTP. With these tokens, people can regain account access if they misplace their authenticator hardware. Industry standards recommend generating 8–10 distinct codes containing 8–12 characters apiece. Keep these values hashed via bcrypt or comparable algorithms; handle them like login passwords instead of ordinary secrets. Show them just one time, prompt the user to archive them securely, and include an option to issue new ones (which must immediately cancel all existing recovery tokens).</p>

      <h3>Clock Synchronization</h3>
      <p>Clock drift must be accounted for during TOTP validation. A standard window is plus or minus 30 seconds, which permits the prior and subsequent codes. Certain systems permit plus or minus 90 seconds, spanning three windows, to support hardware with heavy time drift. Monitor allowable time variance on a per-user basis when utilizing extended windows.</p>

      <h3>Account Lockout and Rate Limiting</h3>
      <p>Restrict validation tries for TOTP to stop brute force attacks. A typical rule is that five unsuccessful tries in five minutes causes a 15-minute suspension. Notify the user via email when validation fails continuously. Record every failed attempt along with the user agent and IP address for security audits.</p>

      <h3>Recovery Flow</h3>
      <p>Prepare your recovery strategy for TOTP prior to launching. Standard methods involve recovery codes, email or SMS confirmation to temporarily turn off TOTP after a cooling period, support team identity checks, and emergency passcodes provided during setup. Every option carries security compromises, as weaker backup flows can be leveraged for account hijacking.</p>

      <h2>Popular TOTP Authenticator Apps</h2>

      <h3>Google Authenticator</h3>
      <p>The top choice for TOTP usage. It is dependable, straightforward, and works on Android and iOS. A major drawback is the lack of native cloud storage in its classic layout, though optional Google Account sync was introduced recently. Losing your hardware without backup codes forces manual restoration across platforms. USB hardware keys for TOTP are unsupported.</p>

      <h3>Authy</h3>
      <p>Twilio offers an authenticator featuring multi-device syncing and secured cloud backup. Account recovery is simpler, though it makes Twilio a necessary trust factor. Your TOTP secrets rest encrypted on Twilio infrastructure, creating a cloud vulnerability compared to offline-only applications.</p>

      <h3>Microsoft Authenticator</h3>
      <p>The Microsoft app handles both standard TOTP and push-based Microsoft 2FA. Backup functionality is included via a Microsoft account. It enables passwordless mobile login for Microsoft products. Any standard otpauth:// TOTP configuration is fully supported.</p>

      <h3>Password Managers like 1Password and Bitwarden</h3>
      <p>Numerous password vaults currently feature built-in TOTP generation. While this makes autofilling passwords and TOTP codes very convenient, it combines two authentication layers into a single program, undermining the separation of knowledge and possession if the vault itself holds your credentials. Opt for a standalone utility to maintain strict factor isolation.</p>

      <h3>Raivo (iOS) and Aegis (Android)</h3>
      <p>Open-source verification tools featuring export functions, encrypted offline backups, and zero cloud reliance. Experts strongly endorse Aegis on Android due to its feature set and open nature. Raivo offers comparable features for iOS users. Both fully accept standard otpauth:// URIs.</p>

      <h2>TOTP in Cloud Platforms and DevOps</h2>

      <h3>AWS IAM TOTP</h3>
      <p>AWS IAM accommodates software-based MFA devices (TOTP) to secure web console authentication. Set this up through IAM console &gt; Security credentials &gt; Assign MFA device. Alternatively, invoke the <code>aws iam enable-mfa-device</code> CLI command. Whenever IAM users must have multi-factor authentication enforced, attach the condition key <code>aws:MultiFactorAuthPresent: "true"</code> inside IAM policies. Activating MFA on the AWS root account is especially critical, as losing control of that primary account yields catastrophic results.</p>

      <h3>GitHub TOTP</h3>
      <p>GitHub now mandates 2FA for all users pushing code. TOTP is advised instead of SMS. GitHub Enterprise permits requiring TOTP across an organization. The device authorization flow (OAuth) on GitHub does not skip TOTP -- every fresh device setup still demands TOTP authentication.</p>

      <h3>SSH TOTP via PAM</h3>
      <p>Integrating TOTP into SSH logins relies upon the Google Authenticator PAM module:</p>
      <pre><code>{`# Install
apt-get install libpam-google-authenticator

# Configure PAM (/etc/pam.d/sshd)
auth required pam_google_authenticator.so

# Configure SSH (/etc/ssh/sshd_config)
ChallengeResponseAuthentication yes
UsePAM yes
AuthenticationMethods publickey,keyboard-interactive`}</code></pre>

      <h2>HOTP: The Counter-Based Forerunner</h2>
      <p>TOTP builds upon HOTP (HMAC-based OTP, RFC 4226). The distinction: HOTP relies on a counter rather than a timestamp. This counter resides on both the server and the authenticator device, advancing every single time a passcode is requested or utilized. TOTP swapped out the counter of HOTP for the time counter T to prevent the counter synchronization issue — when a user creates codes minus authenticating, the counter drifts apart between server and client. TOTP removes this synchronization demand in exchange for needing synchronized clocks.</p>

      <h2>Future of Authentication and TOTP Alternatives</h2>
      <p>The sector is shifting toward phishing-resistant authentication. TOTP, though a significant upgrade from passwords by themselves, remains susceptible to live phishing. The way forward is FIDO2/WebAuthn, which ties authentication to the website domain, rendering phishing attacks impossible even if the adversary operates a live relay.</p>
      <p>Passkeys — a user-friendly version of FIDO2 — are currently backed by Google, Apple, Microsoft, and nearly all major platforms. Passkeys substitute both passwords and TOTP with one phishing-resistant credential kept inside the device's secure enclave and synced via the cloud (iCloud Keychain, Google Password Manager). As passkey usage increases, TOTP will ultimately be viewed as an older fallback rather than a main 2FA method.</p>
      <p>For the present, TOTP is still the premier widely-accessible 2FA method for the majority of platforms and people. It offers vastly superior security compared to lacking 2FA or SMS-based 2FA, follows established standards for interoperability, and demands zero dedicated hardware.</p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a Time-Based One-Time Password (TOTP)?',
    answer: 'TOTP is a standard algorithm (RFC 6238) that creates temporary, time-dependent 6-digit codes for dual-factor authentication. It relies on a shared secret together with the current Unix timestamp to create a distinct code updating every 30 seconds. This is utilized by Google Authenticator, Authy, as well as most authenticator apps, and finds support on platforms like Google, GitHub, AWS, plus thousands of others.',
  },
  {
    category: 'General',
    question: 'In what way does TOTP produce codes?',
    answer: 'TOTP merges the shared secret alongside the current time window (Unix timestamp ÷ 30) utilizing HMAC-SHA1. The 20-byte HMAC result undergoes dynamic truncation down to 4 bytes, then gets reduced into a 6-digit number through modulo 1,000,000. The outcome receives zero-padding for 6 digits. This deterministic workflow implies that the server can independently validate the code sans network communication during verification.',
  },
  {
    category: 'General',
    question: 'Why do TOTP codes stop working after 30 seconds?',
    answer: 'The 30-second window balances usability alongside security. Shorter windows shrink the attack window if someone intercepts a code yet make typing the code in time more difficult. Extended windows raise the attack opportunity. 30 seconds stands as the TOTP standard (RFC 6238 default). Most implementations likewise accept previous and next window codes to tolerate clock drift.',
  },
  {
    category: 'Security',
    question: 'Does TOTP protect against phishing attacks safely?',
    answer: 'TOTP does NOT defend against advanced real-time phishing attacks. An attacker operating a phishing site forwarding your credentials and TOTP code to the real site instantly can sign in before the 30-second window expires. For phishing-resistant 2FA, utilize FIDO2/WebAuthn hardware keys or passkeys, tying authentication to the legitimate site URL.',
  },
  {
    category: 'Security',
    question: 'Are TOTP methods safer than SMS-based 2FA options?',
    answer: 'Yes, substantially. TOTP remains immune against SIM swapping, SS7 attacks, and SMS interception — all active threats targeting SMS 2FA. NIST SP 800-63B has deprecated SMS as an authentication mechanism. TOTP codes generate offline upon your device without carrier dependence. Always favor TOTP over SMS 2FA whenever both choices are accessible.',
  },
  {
    category: 'Security',
    question: 'What defines an MFA fatigue attack and does TOTP stop it?',
    answer: 'MFA fatigue attacks target push-notification-driven 2FA (like Duo or Microsoft Authenticator), wherein attackers spam approval prompts until users accidentally approve one. TOTP resists this attack since users generate the codes instead of receiving push notifications requiring approval.',
  },
  {
    category: 'Security',
    question: 'Can brute force attacks crack TOTP codes?',
    answer: 'With proper rate limiting, brute force remains computationally impossible. Exactly 1,000,000 potential 6-digit codes exist. Through rate limiting set to 3 attempts per 30-second window, an attacker faces roughly 10,000 years of expected brute-force duration. Rate limit TOTP attempts to 3–5 per minute and lock accounts following repeated failures to block any viable attack.',
  },
  {
    category: 'Security',
    question: 'What occurs if someone steals my TOTP secret?',
    answer: 'If an attacker acquires your TOTP secret (for instance, through a server database breach or scanning your QR code setup screen), they can generate all upcoming TOTP codes indefinitely. Promptly deactivate TOTP, establish a fresh secret, and modify your password when you suspect your TOTP secret faces compromise.',
  },
  {
    category: 'Implementation',
    question: 'How ought I store TOTP secrets upon the server?',
    answer: 'TOTP secrets must reside encrypted at rest. Unlike passwords (which require hashing), TOTP secrets must be retrievable in plaintext for verification — so employ encryption instead of hashing. Utilize AES-256-GCM or a hardware security module (HSM). Rotate the encryption key periodically. Keep the encrypted secret per user, and contemplate utilizing an HSM for the encryption key itself within high-security environments.',
  },
  {
    category: 'Implementation',
    question: 'What constitutes clock skew and how should I manage it?',
    answer: 'Clock skew is the variance between the user device clock and the server clock. TOTP codes rely on synchronized time, meaning minor differences can cause valid codes to experience rejection. Standard practice: accept codes originating from the prior and subsequent time window (±30 seconds) alongside the current window. Certain implementations permit ±90 seconds regarding high-drift environments.',
  },
  {
    category: 'Implementation',
    question: 'Should I deploy 6-digit or 8-digit TOTP codes?',
    answer: 'RFC 6238 advises 6 digits for standard use and 8 digits regarding high-security applications. 8-digit codes (100,000,000 possibilities compared to 1,000,000 for 6-digit) are 100× harder to brute force yet less convenient for typing. Most services utilize 6-digit codes. Apply 8-digit codes when supporting high-value accounts or when the extra typing effort proves acceptable.',
  },
  {
    category: 'Implementation',
    question: 'What are TOTP backup codes and how should I deploy them?',
    answer: 'Backup codes function as single-use codes produced during TOTP enrollment, enabling account recovery if users misplace their authenticator device. Best practices: generate 8–10 codes of 8–12 random characters, store them hashed (bcrypt), display them once while warning users to save them, invalidate every code when new ones are generated, and mark each code as used instantly following verification.',
  },
  {
    category: 'Implementation',
    question: 'What libraries are recommended for TOTP implementation?',
    answer: 'Node.js: `otplib` or `speakeasy`. Python: `pyotp` (most popular, straightforward). Go: `github.com/pquerna/otp`. Ruby: `rotp`. Java: `aerogear-otp-java`. PHP: `spomky-labs/otphp`. Always use a library rather than writing TOTP from scratch — libraries handle Base32 encoding, clock skew, timing-safe comparison, and algorithm details accurately.',
  },
  {
    category: 'Format',
    question: 'What defines the otpauth:// URI format?',
    answer: 'The otpauth URI format is the way TOTP settings are represented inside QR codes: `otpauth://totp/LABEL?secret=SECRET&issuer=SERVICE&algorithm=SHA1&digits=6&period=30`. LABEL represents the account marker (such as "Service:user@example.com"), SECRET stands for the Base32-encoded shared secret, and issuer corresponds to the service name shown within the app.',
  },
  {
    category: 'Format',
    question: 'Why does TOTP use Base32 encoding and what is it?',
    answer: 'Base32 converts binary data applying letters A–Z alongside digits 2–7. It remains case-insensitive, omits easily confused symbols (unlike Base64 which employs 0, O, 1, I, l), and proves safe for manual human entry. TOTP employs Base32 regarding the shared secret because individuals sometimes must type the secret key by hand, meaning the Base32 character set cuts down on typing mistakes.',
  },
  {
    category: 'Format',
    question: 'What is the difference between TOTP and HOTP?',
    answer: 'HOTP (RFC 4226) applies an increasing counter for every single code generation. TOTP (RFC 6238) builds upon HOTP by substituting the active time window as the counter. TOTP resolved the counter synchronization issue found in HOTP — through HOTP, if an individual creates codes without consuming them, the counter gets out of sync between client and server. The time-based counter in TOTP stays naturally synchronized.',
  },
  {
    category: 'Apps',
    question: 'What authenticator app ought I to pick?',
    answer: 'Security-oriented suggestions: Aegis (Android, open-source, encrypted backup), Raivo (iOS, open-source), or Google Authenticator featuring Google Account sync turned on. For team or enterprise applications: 1Password or Bitwarden (combining with password management). Steer clear of SMS-based 2FA apps. For maximal security, combine TOTP alongside a hardware key for vital accounts.',
  },
  {
    category: 'Apps',
    question: 'What occurs if my TOTP authenticator device gets lost?',
    answer: 'You require backup codes or another recovery strategy. Should you possess backup codes, apply one to turn off TOTP and configure it once more on a fresh device. Absent backup codes, reach out to the service provider\'s support team — recovery typically demands identity verification. This is the reason why storing backup codes during sign-up remains vital. Certain authenticators (Authy, Google Authenticator with sync) save data to the cloud, permitting recovery without backup codes.',
  },
  {
    category: 'Apps',
    question: 'Is it possible to utilize a single TOTP secret across several authenticator apps?',
    answer: 'Yes. TOTP operates statelessly and never tracks which gadgets utilize the secret. Several applications loaded with the identical secret will produce identical codes. This proves helpful for redundancy (holding two phones as backups) or managing team accounts. Nevertheless, sharing secrets raises exposure danger — additional apps holding the secret translate to a broader attack surface.',
  },
  {
    category: 'Advanced',
    question: 'Which HMAC algorithm is utilized by TOTP?',
    answer: 'TOTP (RFC 6238) establishes HMAC-SHA1 as the standard, alongside optional HMAC-SHA256 and HMAC-SHA512. Although SHA-1 is viewed as weak for collision resistance, HMAC-SHA1 stays secure since HMAC security relies on pseudorandom function (PRF) features rather than collision resistance. Still, many authenticator apps support solely SHA1; SHA256/SHA512 possess restricted app compatibility.',
  },
  {
    category: 'Advanced',
    question: 'Is it possible to use TOTP in contexts beyond user authentication?',
    answer: 'Affirmative. TOTP can secure any workflow requiring time-limited authorization: API key creation, critical actions (fund transfers, password updates), device authorization, settings modifications, and system entry. The identical TOTP protocol applies to machine-to-machine authentication, although TOTP secrets for automated platforms ought to be kept safely (HSM or secrets manager).',
  },
  {
    category: 'Advanced',
    question: 'How does TOTP stack up against passkeys/FIDO2?',
    answer: 'FIDO2/WebAuthn (passkeys) offers higher security than TOTP. FIDO2 resists phishing (cryptographically linked to the site origin), utilizes asymmetric cryptography (lacking a shared secret on the server), demands no clock sync, and withstands replay attacks. The drawback: FIDO2 needs compatible hardware or contemporary devices. TOTP enjoys broader support yet remains vulnerable to phishing. For high-value accounts, employ FIDO2/hardware keys.',
  },
  {
    category: 'Advanced',
    question: 'How can I set up TOTP for SSH utilizing the Google Authenticator PAM module?',
    answer: 'Install libpam-google-authenticator, execute google-authenticator as the user to produce a secret, update /etc/pam.d/sshd to mandate the PAM module, and enable ChallengeResponseAuthentication yes and UsePAM yes in /etc/ssh/sshd_config. Configure AuthenticationMethods publickey,keyboard-interactive to enforce both SSH key and TOTP. Verify carefully prior to logging out to prevent getting locked out.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why do my TOTP codes continually get refused?',
    answer: 'The typical trigger is clock drift — your device clock lacks synchronization with the server. Align your device clock via NTP (time.google.com or pool.ntp.org). Additionally verify: the correct secret was captured (scan QR code again), the account in the authenticator corresponds to the service, and the service permits a +/-30 second window. If codes continually fail, the secret could have been updated or the account\'s TOTP reset.',
  },
  {
    category: 'Troubleshooting',
    question: 'How do I transfer TOTP codes to a replacement smartphone?',
    answer: 'Using Google Authenticator: leverage the Transfer Accounts option inside the app (demands both phones at once). Using Authy: log into Authy on the replacement device and recover via cloud backup. Using Aegis: generate an encrypted backup, move the file, restore on the replacement device. For services lacking app backup: utilize backup codes to deactivate and re-register TOTP on the replacement phone. Begin the transfer prior to wiping the previous phone.',
  },
];

export const totpGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
