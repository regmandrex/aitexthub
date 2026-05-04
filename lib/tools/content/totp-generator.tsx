import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>TOTP Generator: The Complete Guide to Time-Based One-Time Passwords and Two-Factor Authentication</h2>
      <p>
        Time-Based One-Time Passwords (TOTP) are the most widely deployed standard for software-based two-factor authentication (2FA). When you open Google Authenticator, Authy, 1Password, or Microsoft Authenticator and see a six-digit code that changes every 30 seconds, you're using TOTP. This same mechanism protects millions of accounts across every major platform — Google, GitHub, AWS, Cloudflare, Stripe, Twitter, Coinbase, and thousands more. Understanding how TOTP works, what makes it secure, and where its limitations lie is essential for anyone building secure authentication systems or managing organizational security.
      </p>
      <p>
        TOTP is defined in RFC 6238 (published 2011) as an extension of HOTP (HMAC-based One-Time Password, RFC 4226 from 2005). It generates temporary codes using a shared secret and the current Unix timestamp, making each code valid only for a short time window. Unlike SMS-based 2FA, TOTP codes are generated entirely offline — no network connection required, no SMS carrier vulnerability, and no real-time server communication needed at code generation time.
      </p>

      <h2>How TOTP Works: The Algorithm</h2>
      <p>
        Understanding the TOTP algorithm demystifies what seems like magic. The process is actually quite straightforward once you understand each step.
      </p>

      <h3>Step 1: The Shared Secret</h3>
      <p>
        When you set up TOTP authentication on a service, that service generates a cryptographically random secret — typically 160 bits (20 bytes) of random data. This secret is shared between the server and your authenticator app, usually via a QR code scan. The secret is displayed in Base32 encoding (A–Z plus 2–7) because Base32 is case-insensitive and avoids characters that look similar (0 vs O, 1 vs I vs l).
      </p>
      <p>
        A typical Base32-encoded TOTP secret looks like: <code>JBSWY3DPEHPK3PXP</code>. This encodes 10 bytes (80 bits) — though RFC 6238 recommends at least 128 bits, and implementations like Google Authenticator use 80-bit secrets by default while better implementations use 160 bits.
      </p>
      <p>
        The shared secret must be kept confidential on both ends. If an attacker obtains the secret, they can generate all future TOTP codes. Services that have suffered database breaches where TOTP secrets were stored in plaintext have effectively invalidated their 2FA protection for all affected accounts.
      </p>

      <h3>Step 2: Time Counter (T)</h3>
      <p>
        TOTP uses time to create unique codes. The current Unix timestamp (seconds since January 1, 1970, UTC) is divided by the time step (typically 30 seconds) and the floor is taken:
      </p>
      <p>
        <strong>T = floor(Unix_timestamp / time_step)</strong>
      </p>
      <p>
        For example, at Unix timestamp 1714000200 (April 25, 2024, 10:10:00 UTC):
        T = floor(1714000200 / 30) = floor(57133340) = 57133340
      </p>
      <p>
        This means all Unix timestamps within the same 30-second window produce the same T value, and therefore the same TOTP code. T increments by 1 every 30 seconds, making each 30-second window unique.
      </p>

      <h3>Step 3: HMAC-SHA1 Computation</h3>
      <p>
        The time counter T is converted to an 8-byte big-endian unsigned integer. Then HMAC-SHA1 is computed using the shared secret as the key and the 8-byte T value as the message:
      </p>
      <p>
        <strong>hash = HMAC-SHA1(secret, T_bytes)</strong>
      </p>
      <p>
        HMAC-SHA1 produces a 20-byte (160-bit) output. SHA-1 is considered cryptographically weak for some purposes (collision resistance) but remains secure for HMAC usage — HMAC security depends on the PRF properties of the hash, not its collision resistance.
      </p>
      <p>
        Some TOTP implementations use HMAC-SHA256 or HMAC-SHA512 instead. The choice of hash algorithm is configured in the TOTP parameters (the "algorithm" field in the otpauth:// URI), though most authenticator apps only support SHA1 despite the spec allowing SHA256 and SHA512.
      </p>

      <h3>Step 4: Dynamic Truncation</h3>
      <p>
        The 20-byte HMAC output must be reduced to a short numeric code. Dynamic truncation extracts a 4-byte (32-bit) integer from the HMAC output:
      </p>
      <ol>
        <li>Take the last byte of the HMAC (byte 19)</li>
        <li>Use its lower 4 bits as an offset value (0–15)</li>
        <li>Extract 4 bytes starting at that offset position</li>
        <li>Set the most significant bit of the first byte to 0 (avoid signed integer issues)</li>
        <li>Interpret the 4 bytes as a 31-bit unsigned integer</li>
      </ol>
      <p>
        This dynamic truncation is deterministic and produces the same result for the same HMAC input. The offset-based selection adds entropy from the entire HMAC rather than always taking the first 4 bytes.
      </p>

      <h3>Step 5: Code Generation</h3>
      <p>
        The final TOTP code is computed by taking the truncated integer modulo 10^digits:
      </p>
      <p>
        <strong>TOTP = truncated_integer mod 10^6</strong> (for 6-digit codes)
      </p>
      <p>
        The result is zero-padded to the specified number of digits. If the modulo result is 34891, the 6-digit code is "034891". Zero-padding is critical — without it, codes starting with 0 would appear to have fewer digits, breaking authentication.
      </p>
      <p>
        Most TOTP implementations use 6-digit codes (digits=6, mod 1,000,000). Some high-security implementations use 8-digit codes for a 100× larger code space, reducing brute-force attack viability.
      </p>

      <h2>The otpauth:// URI Format</h2>
      <p>
        TOTP configuration is typically shared via a QR code containing an otpauth:// URI. Understanding this format is important for building TOTP enrollment flows, debugging authentication issues, and migrating between authenticator apps.
      </p>
      <p>
        The otpauth URI format: <code>otpauth://totp/LABEL?PARAMETERS</code>
      </p>
      <p>
        Full example:
      </p>
      <pre><code>{`otpauth://totp/Example%3Auser@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA1&digits=6&period=30`}</code></pre>
      <p>
        Parameters explained:
      </p>
      <ul>
        <li><strong>type</strong>: <code>totp</code> (time-based) or <code>hotp</code> (counter-based)</li>
        <li><strong>label</strong>: Displayed in the authenticator app. Format: <code>issuer:account</code> (URL-encoded)</li>
        <li><strong>secret</strong>: Base32-encoded shared secret (no padding required by most implementations)</li>
        <li><strong>issuer</strong>: The service name displayed in the authenticator. Should match the issuer in the label.</li>
        <li><strong>algorithm</strong>: SHA1 (default), SHA256, or SHA512</li>
        <li><strong>digits</strong>: 6 (default) or 8</li>
        <li><strong>period</strong>: 30 seconds (default). The time step in seconds. Some systems use 60.</li>
        <li><strong>counter</strong>: For HOTP only, the initial counter value</li>
      </ul>

      <h2>TOTP Security Analysis</h2>
      <p>
        TOTP provides significantly stronger authentication than passwords alone, but understanding its security properties and attack vectors is essential for properly evaluating and implementing it.
      </p>

      <h3>What TOTP Protects Against</h3>
      <ul>
        <li><strong>Password theft/database breach</strong>: An attacker with your password still cannot log in without the current TOTP code, which they don't have.</li>
        <li><strong>Password reuse attacks</strong>: Even if the same password is used across sites, TOTP prevents the second site's credentials from being used on the first.</li>
        <li><strong>Brute-force password attacks</strong>: A successful brute-force yields only the password, not the TOTP secret.</li>
        <li><strong>Credential stuffing</strong>: Leaked username/password pairs from other breaches don't enable login when TOTP is required.</li>
      </ul>

      <h3>Attacks Against TOTP</h3>
      <p>
        <strong>Real-time phishing (adversary-in-the-middle)</strong>: The most significant practical attack. A phishing site relays credentials and the TOTP code in real-time to the real site, logging in before the 30-second window expires. Tools like Evilginx2 and Modlishka automate this. TOTP does NOT protect against sophisticated real-time phishing. Hardware security keys (FIDO2/WebAuthn) do protect against this attack, as they bind authentication to the origin URL.
      </p>
      <p>
        <strong>Secret theft</strong>: If the server-side TOTP secret database is breached and secrets are stored in plaintext, all accounts' TOTP protection is broken. Secrets should be stored encrypted at rest, ideally using hardware security modules (HSMs).
      </p>
      <p>
        <strong>Brute force in real time</strong>: With 6 digits and a 30-second window, an attacker has at most 2 tries per window (most implementations rate-limit to 1–3 attempts before locking). The code space of 1,000,000 values means brute-forcing a single window has only 1-in-1,000,000 chance without rate limiting. With rate limiting, brute force is effectively impossible.
      </p>
      <p>
        <strong>Time manipulation</strong>: TOTP codes depend on synchronized clocks. If an attacker can manipulate the victim's system clock, they might reuse codes from past or future windows. Well-implemented TOTP validation includes a clock skew tolerance (typically ±1 window = ±30 seconds) to accommodate slight clock drift.
      </p>
      <p>
        <strong>SIM swapping</strong>: This attack targets SMS-based 2FA, not TOTP. TOTP is immune to SIM swapping because it doesn't use SMS.
      </p>
      <p>
        <strong>Malware</strong>: If the victim's device is compromised by malware, the attacker can read the TOTP code from the authenticator app (on the same device) or intercept it as it's typed. This is a device compromise problem, not a TOTP problem.
      </p>

      <h3>TOTP vs. SMS 2FA vs. FIDO2</h3>
      <p>
        Not all 2FA is equally secure. Here's a comparative analysis:
      </p>
      <ul>
        <li><strong>SMS 2FA</strong>: Convenient but weakest — vulnerable to SIM swapping, SS7 attacks, SMS interception, and carrier social engineering. NIST SP 800-63B has deprecated SMS as a primary authentication method.</li>
        <li><strong>TOTP</strong>: Good security — immune to SIM swapping and SS7 attacks, works offline, widely supported. Vulnerable to real-time phishing and secret theft. Much better than SMS.</li>
        <li><strong>FIDO2/WebAuthn (hardware keys)</strong>: Best security — immune to phishing (origin-bound), immune to replay attacks, no shared secret on server, phishing-resistant even in real-time relay scenarios. The gold standard for high-security accounts.</li>
        <li><strong>Push notifications (Duo, Microsoft Authenticator)</strong>: Convenient but vulnerable to MFA fatigue attacks where attackers spam push requests until the user accidentally approves one.</li>
      </ul>

      <h2>Implementing TOTP: Server-Side Code</h2>

      <h3>Generating a TOTP Secret</h3>
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

      <h3>Validating a TOTP Code</h3>
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

      <h3>Libraries for TOTP Implementation</h3>
      <ul>
        <li><strong>Node.js</strong>: <code>otplib</code>, <code>speakeasy</code>, <code>@otplib/preset-default</code></li>
        <li><strong>Python</strong>: <code>pyotp</code>, <code>onetimepass</code></li>
        <li><strong>Go</strong>: <code>github.com/pquerna/otp</code></li>
        <li><strong>Ruby</strong>: <code>rotp</code></li>
        <li><strong>Java</strong>: <code>GoogleAuth</code>, <code>aerogear-otp-java</code></li>
        <li><strong>PHP</strong>: <code>spomky-labs/otphp</code>, <code>google-authenticator-php</code></li>
      </ul>
      <p>
        Always use a well-maintained library rather than implementing TOTP from scratch. Libraries handle edge cases like Base32 padding, clock skew, timing-safe comparison, and HMAC implementation correctly.
      </p>

      <h3>Timing-Safe Comparison</h3>
      <p>
        TOTP code comparison must use timing-safe string comparison to prevent timing side-channel attacks. A naive <code>code === expected</code> comparison in some languages returns faster when the strings differ at an earlier position, leaking information about how many digits are correct:
      </p>
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

      <h2>TOTP Enrollment Flow Best Practices</h2>
      <p>
        The TOTP setup experience matters as much as the cryptography. A poorly designed enrollment flow leads to support tickets, lockouts, and security gaps.
      </p>

      <h3>Secret Generation and QR Code Display</h3>
      <p>
        Generate the secret on the server using a CSPRNG (cryptographically secure pseudo-random number generator). Never generate TOTP secrets on the client side. Display the QR code and the raw secret key simultaneously — users may need the raw key to configure authenticators that don't have a camera, or to set up TOTP in a password manager.
      </p>

      <h3>Verification Before Enabling</h3>
      <p>
        Always require the user to enter a valid TOTP code before saving the secret and enabling TOTP on their account. This confirms they have successfully scanned the QR code and can generate valid codes. Without this verification step, users who fail to scan correctly are locked out.
      </p>

      <h3>Backup Codes</h3>
      <p>
        Generate a set of single-use backup codes when the user enables TOTP. These codes allow account recovery if the user loses their authenticator device. Standard practice is 8–10 codes of 8–12 characters each. Store them hashed (bcrypt or similar) — treat them as passwords, not secrets. Display them once, warn users to save them securely, and provide a way to regenerate them (which should invalidate all previous backup codes).
      </p>

      <h3>Clock Synchronization</h3>
      <p>
        TOTP validation must tolerate clock skew. A ±30 second tolerance (allowing the previous and next code window) is standard. Some implementations allow ±90 seconds (3 windows) to accommodate devices with significant clock drift. Track the acceptable clock drift per user if you support very large windows.
      </p>

      <h3>Rate Limiting and Account Lockout</h3>
      <p>
        Limit TOTP validation attempts to prevent brute force. A common policy: 5 failed attempts within 5 minutes triggers a 15-minute lockout. Send an alert to the account's email when TOTP fails repeatedly. Log all TOTP failures with IP address and user agent for security monitoring.
      </p>

      <h3>Recovery Flow</h3>
      <p>
        Plan for TOTP recovery before deployment. Common approaches: backup codes, email/SMS verification to disable TOTP temporarily (with a cool-off period), identity verification with customer support, and emergency access codes generated at enrollment. Each approach has security tradeoffs — weaker recovery mechanisms can be exploited for account takeover.
      </p>

      <h2>Common TOTP Authenticator Apps</h2>

      <h3>Google Authenticator</h3>
      <p>
        The most widely used TOTP app. Simple, reliable, and available on iOS and Android. Key limitation: no cloud backup in the original design (recently added optional Google Account sync). Losing a device without backup codes means manual account recovery for each service. Doesn't support TOTP over USB hardware key.
      </p>

      <h3>Authy</h3>
      <p>
        Twilio's authenticator with encrypted cloud backup and multi-device sync. More user-friendly for account recovery but introduces Twilio as a trust dependency. Your TOTP secrets are stored (encrypted) on Twilio's servers, adding a cloud attack surface compared to purely local apps.
      </p>

      <h3>Microsoft Authenticator</h3>
      <p>
        Microsoft's app supports both TOTP and Microsoft-specific push notification 2FA. Includes cloud backup via Microsoft account. Provides passwordless phone sign-in for Microsoft services. Works for all standard otpauth:// TOTP setups.
      </p>

      <h3>1Password, Bitwarden, and Password Managers</h3>
      <p>
        Many password managers now include TOTP support. This has the convenience advantage of autofilling both password and TOTP code, but concentrates two authentication factors in one application — defeating the "something you have is separate from something you know" principle if the password manager is also your password. Use a separate app if you want true second-factor isolation.
      </p>

      <h3>Aegis (Android) and Raivo (iOS)</h3>
      <p>
        Open-source authenticators with encrypted local backup, import/export capabilities, and no cloud dependency. Aegis (Android) is widely recommended by security professionals for its transparency and features. Raivo (iOS) provides similar capabilities. Both support standard otpauth:// format.
      </p>

      <h2>TOTP in Cloud Platforms and DevOps</h2>

      <h3>AWS IAM TOTP</h3>
      <p>
        AWS IAM supports virtual MFA devices (TOTP) for console login. Configure via IAM console &gt; Security credentials &gt; Assign MFA device. Use <code>aws iam enable-mfa-device</code> CLI command. For IAM users requiring MFA, add a condition key: <code>aws:MultiFactorAuthPresent: "true"</code> to IAM policies. For the root account, MFA is critically important — compromise of the AWS root account is catastrophic.
      </p>

      <h3>GitHub TOTP</h3>
      <p>
        GitHub now requires 2FA for all accounts that contribute to code. TOTP is the recommended method over SMS. GitHub Enterprise supports enforcing TOTP at the organization level. GitHub's device authorization flow (OAuth) doesn't bypass TOTP — each new device authorization still requires TOTP verification.
      </p>

      <h3>SSH TOTP with PAM</h3>
      <p>
        Adding TOTP to SSH authentication uses the Google Authenticator PAM module:
      </p>
      <pre><code>{`# Install
apt-get install libpam-google-authenticator

# Configure PAM (/etc/pam.d/sshd)
auth required pam_google_authenticator.so

# Configure SSH (/etc/ssh/sshd_config)
ChallengeResponseAuthentication yes
UsePAM yes
AuthenticationMethods publickey,keyboard-interactive`}</code></pre>

      <h2>HOTP: The Counter-Based Predecessor</h2>
      <p>
        TOTP is built on HOTP (HMAC-based OTP, RFC 4226). The difference: HOTP uses a counter instead of a timestamp. The counter is stored on both the server and the authenticator, incrementing each time a code is used or requested. TOTP replaced HOTP's counter with the time counter T to avoid the counter synchronization problem — if the user generates codes without authenticating, the counter diverges between client and server. TOTP eliminates this synchronization requirement at the cost of requiring synchronized clocks.
      </p>

      <h2>TOTP Alternatives and Future of Authentication</h2>
      <p>
        The industry is moving toward phishing-resistant authentication. TOTP, while a major improvement over passwords alone, is vulnerable to real-time phishing. The future is FIDO2/WebAuthn, which binds authentication to the site origin, making phishing attacks impossible even when the attacker runs a real-time relay.
      </p>
      <p>
        Passkeys — a consumer-friendly implementation of FIDO2 — are now supported by Google, Apple, Microsoft, and most major services. Passkeys replace both passwords and TOTP with a single phishing-resistant credential stored in the device's secure enclave and synchronized through the cloud (iCloud Keychain, Google Password Manager). As passkey adoption grows, TOTP will eventually be positioned as a legacy fallback rather than a primary 2FA mechanism.
      </p>
      <p>
        For now, TOTP remains the best widely-available 2FA mechanism for most services and users. It is dramatically more secure than no 2FA or SMS-based 2FA, is standardized and interoperable, and requires no special hardware.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is TOTP (Time-Based One-Time Password)?',
    answer: 'TOTP is a standard algorithm (RFC 6238) that generates temporary, time-sensitive 6-digit codes for two-factor authentication. It uses a shared secret and the current Unix timestamp to produce a unique code that changes every 30 seconds. It is used by Google Authenticator, Authy, and most authenticator apps, and is supported by services like Google, GitHub, AWS, and thousands more.',
  },
  {
    category: 'General',
    question: 'How does TOTP generate codes?',
    answer: 'TOTP combines the shared secret with the current time window (Unix timestamp ÷ 30) using HMAC-SHA1. The 20-byte HMAC output is dynamically truncated to 4 bytes, then reduced to a 6-digit number by taking modulo 1,000,000. The result is zero-padded to 6 digits. This deterministic process means the server can independently verify the code without network communication at verification time.',
  },
  {
    category: 'General',
    question: 'Why do TOTP codes expire every 30 seconds?',
    answer: 'The 30-second window balances usability and security. Shorter windows reduce the attack window if a code is intercepted but make it harder to type the code in time. Longer windows increase attack opportunity. 30 seconds is the TOTP standard (RFC 6238 default). Most implementations also accept the previous and next window codes to tolerate clock drift.',
  },
  {
    category: 'Security',
    question: 'Is TOTP safe against phishing attacks?',
    answer: 'TOTP does NOT protect against sophisticated real-time phishing attacks. An attacker who runs a phishing site that relays your credentials and TOTP code to the real site in real-time can log in before the 30-second window expires. For phishing-resistant 2FA, use FIDO2/WebAuthn hardware keys or passkeys, which bind authentication to the legitimate site\'s URL.',
  },
  {
    category: 'Security',
    question: 'Is TOTP more secure than SMS-based 2FA?',
    answer: 'Yes, significantly. TOTP is immune to SIM swapping, SS7 attacks, and SMS interception — all real attacks against SMS 2FA. NIST SP 800-63B has deprecated SMS as an authentication method. TOTP codes are generated offline on your device with no carrier dependency. Always prefer TOTP over SMS 2FA when both options are available.',
  },
  {
    category: 'Security',
    question: 'What is an MFA fatigue attack and does TOTP prevent it?',
    answer: 'MFA fatigue attacks target push-notification-based 2FA (like Duo or Microsoft Authenticator), where attackers spam approval requests until the user accidentally approves one. TOTP is not vulnerable to this attack since codes are generated by the user, not sent as push notifications requiring approval.',
  },
  {
    category: 'Security',
    question: 'Can TOTP codes be brute-forced?',
    answer: 'With proper rate limiting, brute force is computationally infeasible. There are 1,000,000 possible 6-digit codes. With rate limiting of 3 attempts per 30-second window, an attacker has ~10,000 years of expected brute-force time. Rate limit TOTP attempts to 3–5 per minute and lock accounts after repeated failures to prevent any viable attack.',
  },
  {
    category: 'Security',
    question: 'What happens if my TOTP secret is stolen?',
    answer: 'If an attacker obtains your TOTP secret (e.g., from a server database breach or by scanning your QR code setup screen), they can generate all future TOTP codes indefinitely. Immediately disable TOTP, set up a new secret, and change your password if you suspect your TOTP secret has been compromised.',
  },
  {
    category: 'Implementation',
    question: 'How should I store TOTP secrets on the server?',
    answer: 'TOTP secrets must be stored encrypted at rest. Unlike passwords (which should be hashed), TOTP secrets must be retrievable in plaintext for verification — so use encryption, not hashing. Use AES-256-GCM or a hardware security module (HSM). Rotate the encryption key periodically. Store the encrypted secret per user, and consider using an HSM for the encryption key itself in high-security applications.',
  },
  {
    category: 'Implementation',
    question: 'What is clock skew and how should I handle it?',
    answer: 'Clock skew is the difference between the user\'s device clock and the server clock. TOTP codes depend on synchronized time, so even small differences can cause valid codes to be rejected. Standard practice: accept codes from the previous and next time window (±30 seconds) in addition to the current window. Some implementations allow ±90 seconds for high-drift environments.',
  },
  {
    category: 'Implementation',
    question: 'Should I use 6-digit or 8-digit TOTP codes?',
    answer: 'RFC 6238 recommends 6 digits for typical use and 8 digits for high-security applications. 8-digit codes (100,000,000 possibilities vs 1,000,000 for 6-digit) are 100× harder to brute force but less convenient to type. Most services use 6-digit codes. Use 8-digit codes when supporting high-value accounts or when the extra typing burden is acceptable.',
  },
  {
    category: 'Implementation',
    question: 'What are TOTP backup codes and how should I implement them?',
    answer: 'Backup codes are single-use codes generated at TOTP enrollment, allowing account recovery if the user loses their authenticator device. Best practices: generate 8–10 codes of 8–12 random characters, store them hashed (bcrypt), display them once and warn users to save them, invalidate all codes when new ones are generated, mark each code as used immediately after verification.',
  },
  {
    category: 'Implementation',
    question: 'What libraries should I use for TOTP implementation?',
    answer: 'Node.js: `otplib` or `speakeasy`. Python: `pyotp` (most popular, straightforward). Go: `github.com/pquerna/otp`. Ruby: `rotp`. Java: `aerogear-otp-java`. PHP: `spomky-labs/otphp`. Always use a library rather than implementing TOTP from scratch — libraries handle Base32 encoding, clock skew, timing-safe comparison, and algorithm details correctly.',
  },
  {
    category: 'Format',
    question: 'What is the otpauth:// URI format?',
    answer: 'The otpauth URI format is how TOTP configuration is encoded in QR codes: `otpauth://totp/LABEL?secret=SECRET&issuer=SERVICE&algorithm=SHA1&digits=6&period=30`. LABEL is the account identifier (e.g., "Service:user@example.com"), SECRET is the Base32-encoded shared secret, issuer is the service name displayed in the app.',
  },
  {
    category: 'Format',
    question: 'What is Base32 encoding and why does TOTP use it?',
    answer: 'Base32 encodes binary data using the characters A–Z and 2–7. It is case-insensitive, avoids visually confusing characters (unlike Base64 which uses 0, O, 1, I, l), and is safe for human transcription. TOTP uses Base32 for the shared secret because users sometimes need to manually enter the secret key, and Base32\'s character set minimizes transcription errors.',
  },
  {
    category: 'Format',
    question: 'What is the difference between TOTP and HOTP?',
    answer: 'HOTP (RFC 4226) uses an incrementing counter for each code generation. TOTP (RFC 6238) extends HOTP by using the current time window as the counter. TOTP eliminated HOTP\'s counter synchronization problem — with HOTP, if a user generates codes without using them, the counter drifts between client and server. TOTP\'s time-based counter is inherently synchronized.',
  },
  {
    category: 'Apps',
    question: 'Which authenticator app should I use?',
    answer: 'Security-focused recommendations: Aegis (Android, open-source, encrypted backup), Raivo (iOS, open-source), or Google Authenticator with Google Account sync enabled. For team/enterprise use: 1Password or Bitwarden (integrates with password management). Avoid SMS-based 2FA apps. For highest security, pair TOTP with a hardware key for critical accounts.',
  },
  {
    category: 'Apps',
    question: 'What happens if I lose my TOTP authenticator device?',
    answer: 'You need backup codes or an alternative recovery method. If you have backup codes, use one to disable TOTP and set it up again on a new device. Without backup codes, contact the service\'s support — recovery usually requires identity verification. This is why saving backup codes at enrollment is critical. Some authenticators (Authy, Google Authenticator with sync) back up to cloud, enabling recovery without backup codes.',
  },
  {
    category: 'Apps',
    question: 'Can I use the same TOTP secret in multiple authenticator apps?',
    answer: 'Yes. TOTP is stateless and doesn\'t track which devices are using the secret. Multiple apps with the same secret all generate the same codes. This can be useful for redundancy (two phones as backup) or for team accounts. However, sharing secrets increases exposure risk — more apps with the secret means more attack surface.',
  },
  {
    category: 'Advanced',
    question: 'What HMAC algorithm does TOTP use?',
    answer: 'TOTP (RFC 6238) specifies HMAC-SHA1 as the default, with optional HMAC-SHA256 and HMAC-SHA512. Despite SHA-1 being considered weak for collision resistance, HMAC-SHA1 remains secure — HMAC security depends on pseudorandom function (PRF) properties, not collision resistance. However, most authenticator apps only support SHA1; SHA256/SHA512 have limited app compatibility.',
  },
  {
    category: 'Advanced',
    question: 'Can TOTP be used in applications other than user login?',
    answer: 'Yes. TOTP can protect any action that benefits from time-limited authorization: API key generation, sensitive operations (fund transfers, password changes), device authorization, configuration changes, and system access. The same TOTP standard works for machine-to-machine authentication, though TOTP secrets for automated systems should be stored securely (HSM or secrets manager).',
  },
  {
    category: 'Advanced',
    question: 'How does TOTP compare to passkeys/FIDO2?',
    answer: 'FIDO2/WebAuthn (passkeys) is more secure than TOTP. FIDO2 is phishing-resistant (cryptographically bound to the site origin), uses asymmetric cryptography (no shared secret on server), requires no clock synchronization, and is immune to replay attacks. The tradeoff: FIDO2 requires compatible hardware or modern devices. TOTP is more universally supported but phishable. For critical accounts, use FIDO2/hardware keys.',
  },
  {
    category: 'Advanced',
    question: 'How do I add TOTP to SSH using the Google Authenticator PAM module?',
    answer: 'Install libpam-google-authenticator, run google-authenticator as the user to generate a secret, configure /etc/pam.d/sshd to require the PAM module, and set ChallengeResponseAuthentication yes and UsePAM yes in /etc/ssh/sshd_config. Set AuthenticationMethods publickey,keyboard-interactive to require both SSH key and TOTP. Test thoroughly before disconnecting to avoid lockout.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does my TOTP code keep getting rejected?',
    answer: 'The most common cause is clock skew — your device clock is out of sync with the server. Sync your device clock to NTP (time.google.com or pool.ntp.org). Also check: correct secret was scanned (re-scan QR code), account in authenticator matches the service, service allows ±30 second tolerance. If codes are consistently rejected, the secret may have been changed or the account\'s TOTP reset.',
  },
  {
    category: 'Troubleshooting',
    question: 'How do I migrate TOTP codes to a new phone?',
    answer: 'With Google Authenticator: use the Transfer Accounts feature in the app (requires both phones simultaneously). With Authy: sign into Authy on the new device and restore from cloud backup. With Aegis: export an encrypted backup, transfer the file, import on the new device. For services without app backup: use backup codes to disable and re-enroll TOTP on the new phone. Start migration before wiping the old phone.',
  },
];

export const totpGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
