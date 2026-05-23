import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { PasswordStrengthCheckerTool } from '@/components/tools/PasswordStrengthCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 2592000;
const toolSlug = 'password-strength-checker';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta(toolSlug);
}

const faqs: FaqItem[] = [
  {
    category: 'Basics',
    question: 'What is a password strength checker and how does it work?',
    answer: `A password strength checker evaluates how secure a password is by analyzing multiple characteristics that affect its resistance to cracking attacks. Our tool examines: length (longer passwords are exponentially harder to crack), character variety (uppercase letters, lowercase letters, digits, special symbols), absence of common patterns (repeated characters, sequential runs like "abc" or "123"), and whether the password avoids common words and predictable substitutions. It calculates a strength score and estimates how long a brute-force or dictionary attack would take to crack the password given the character set size and password length. The tool runs entirely in your browser — your password is never sent to any server, making it completely private and safe to test real passwords. The result is displayed as a visual strength meter with specific improvement suggestions.`,
  },
  {
    category: 'Basics',
    question: 'Is it safe to enter my real password into a password strength checker?',
    answer: `Our password strength checker is completely safe — it runs entirely in your browser using JavaScript with no server communication. Your password is analyzed locally and never transmitted to our servers or any third party. However, as a general security practice, you should be cautious about entering real passwords into any online tool. Even though our tool is safe, the habit of typing real passwords into websites can create risk if you accidentally use a less reputable tool. We recommend two approaches: (1) Use our tool to test your password before using it — enter it here when creating a new password to see how strong it is, then use it on the actual site. (2) Alternatively, test a representative password that uses the same pattern as your real password but with different characters. The strength analysis depends on character types, length, and patterns — not the specific characters — so a test variant gives you accurate feedback without exposing your actual password.`,
  },
  {
    category: 'Basics',
    question: 'What makes a password strong according to security experts?',
    answer: `Modern password security advice has evolved significantly from the old "use symbols and capitals" advice. Current expert recommendations (NIST SP 800-63B, 2020 and 2023 guidelines): (1) Length is the most important factor — a 16-character password of random lowercase letters is more secure than an 8-character password with symbols. (2) Use a passphrase of random words (correct-horse-battery-staple style) for memorable long passwords. (3) Avoid password reuse — use a unique password for every account. (4) Use a password manager to generate and store truly random passwords. (5) Avoid dictionary words, names, dates, and predictable substitutions (p@ssw0rd is not strong). (6) Enable two-factor authentication wherever possible as a second security layer. (7) For truly high-security accounts, use randomly generated passwords of 20+ characters with all character types. Our checker scores passwords on these criteria and provides specific feedback.`,
  },
  {
    category: 'Scoring',
    question: 'How is the password strength score calculated?',
    answer: `Our password strength score considers multiple weighted factors to produce a score from 0 to 100. The most heavily weighted factors are: length (each additional character significantly increases the score, especially beyond 12 characters), character set diversity (using uppercase, lowercase, digits, AND symbols gives maximum credit — each missing category reduces the score), and absence of common patterns. Secondary factors reduce the score: repeating characters (aaa), sequential patterns (abc, 123, qwerty), common password list membership, and simple keyboard walks (asdf). The crack time estimate is calculated separately using the formula: combinations = (character set size) ^ (password length), then divided by a realistic attack rate (billions of guesses per second for offline attacks against fast hash algorithms). The strength labels (Very Weak, Weak, Fair, Strong, Very Strong) correspond to crack time ranges from seconds to centuries. This approach prioritizes length and randomness over complexity requirements.`,
  },
  {
    category: 'Scoring',
    question: 'What is the difference between password entropy and password strength?',
    answer: `Password entropy is a mathematical measure of a password's unpredictability, measured in bits. It is calculated as: entropy = log2(N^L) = L × log2(N), where N is the character set size and L is the password length. For a completely random 12-character password using lowercase letters (N=26): entropy = 12 × log2(26) ˜ 56.5 bits. Adding digits and uppercase (N=62): 71.5 bits. Adding symbols (N=95): 78.8 bits. Higher entropy means exponentially more guesses required to crack. Password strength, as evaluated by our tool, is a broader concept that includes entropy but also accounts for predictability factors that pure entropy cannot capture — dictionary words, common substitutions (@ for a, 0 for o), and sequential patterns. A password like "Password123!" has technically sufficient entropy if analyzed as random characters, but its predictability patterns make it much weaker in practice. Our checker combines both mathematical entropy and pattern analysis for a realistic assessment.`,
  },
  {
    category: 'Scoring',
    question: 'What does the crack time estimate mean and how accurate is it?',
    answer: `The crack time estimate shows approximately how long an automated password-cracking attack would take to guess your password through exhaustive search. The calculation assumes an attacker is using the most efficient approach for your password's character set: for a lowercase-only password, it tries all combinations of lowercase letters; for mixed-case with symbols, it tries the full printable character set. The attack rate assumed depends on context: online attacks against web forms are rate-limited to a few attempts per second; offline attacks against stolen password hashes can run at billions of attempts per second on modern GPU hardware. Our estimate uses offline attack rates against bcrypt (one of the more expensive password hash algorithms) at around 100,000 guesses per second — realistic for a well-resourced attacker with a modern GPU rig. If a site uses weaker hashing (MD5, SHA-1), crack times would be much shorter. The estimate gives a realistic best-case for the attacker with your password's mathematical properties, assuming no knowledge of the password pattern.`,
  },
  {
    category: 'Best Practices',
    question: 'How long should my password be in 2024 and beyond?',
    answer: `Current security recommendations: minimum 12 characters for regular accounts (email, social media, shopping). Minimum 16 characters for sensitive accounts (banking, investment, healthcare). Minimum 20+ characters for high-value accounts (email account password, password manager master password, work systems). Passphrase format (random words) works well for longer passwords: "correct-horse-battery-staple" at 28 characters is both memorable and extremely secure. The math is compelling: a random 8-character password with full character set (95 characters) has about 52.6 bits of entropy. A 16-character password of just lowercase letters has 75.2 bits — more secure despite using a smaller character set. A 20-character random password has 131 bits of entropy — essentially uncrackable by any foreseeable technology. Length wins over complexity every time. NIST now recommends against forced periodic password changes (which lead to predictable patterns like "Password123" ? "Password124") in favor of long, unique passwords that are only changed if compromised.`,
  },
  {
    category: 'Best Practices',
    question: 'What are the worst password mistakes people make?',
    answer: `Security research on leaked password databases reveals consistent patterns of poor password choices. The most common mistakes: (1) Using the word "password" or variations (password, p@ssword, Pa$$w0rd) — these appear in every dictionary attack list. (2) Using personal information — birthdays, names, pet names, hometowns — which are guessable from social media and personal data leaks. (3) Reusing passwords across multiple sites — when one site is breached, credential stuffing attacks try the same email/password combination on hundreds of other sites. (4) Making passwords too short — under 8 characters is crackable in minutes with modern hardware. (5) Predictable patterns — qwerty123, abc123, 123456, 111111 — these are in every password list. (6) Simple substitutions — replacing a with @, o with 0, e with 3 — attackers' dictionaries include these variations. (7) Using names from popular culture — sports teams, movie characters, musicians. A random password manager-generated password avoids all these pitfalls.`,
  },
  {
    category: 'Best Practices',
    question: 'Should I use a password manager? Which one is best?',
    answer: `Yes — password managers are the single most impactful security improvement most people can make. They enable you to use unique, randomly generated, long passwords for every account without needing to remember them. The master password (ideally a 20+ character passphrase) is the only password you need to memorize. Reputable password managers: Bitwarden (open source, free tier covers all essentials, paid tier is inexpensive) — excellent for individuals and families; 1Password (polished interface, strong enterprise features, subscription-based); Dashlane (feature-rich, subscription-based); Apple Passwords (built into iOS 18/macOS 15, excellent for Apple ecosystem users); Google Password Manager (convenient for Chrome/Android users, though many security professionals prefer dedicated solutions). For maximum security: generate passwords of 20+ random characters using the built-in generator, never reuse passwords, and store the master password securely (written on paper in a physical safe as a backup). Our password generator in this tool creates cryptographically secure random passwords using the browser's crypto.getRandomValues() API.`,
  },
  {
    category: 'Best Practices',
    question: 'What is two-factor authentication and does it make password strength matter less?',
    answer: `Two-factor authentication (2FA) requires a second form of verification beyond your password — typically a time-based one-time code from an authenticator app (like Google Authenticator, Authy, or our TOTP Generator tool), a hardware security key (YubiKey), or a biometric. 2FA significantly increases security even if your password is compromised — an attacker with your password still cannot log in without the second factor. However, 2FA does not make password strength irrelevant. Reasons to still use strong passwords with 2FA: (1) Not all services support 2FA. (2) 2FA can be bypassed through SIM swapping (for SMS-based 2FA), phishing, or social engineering. (3) Some attack scenarios (offline password cracking after a database breach) occur before 2FA is even relevant — the attacker wants your password hash to crack offline, not to log into the service. (4) A weak password combined with 2FA is safer than a weak password alone, but a strong password with 2FA is safest. Use both.`,
  },
  {
    category: 'Attack Types',
    question: 'What is a brute force attack and how does password length stop it?',
    answer: `A brute force attack systematically tries every possible combination of characters until the password is found. With a 4-character password using only lowercase letters (26^4 = 456,976 combinations), a modern GPU can try all combinations in milliseconds. With an 8-character lowercase password (26^8 ˜ 208 billion combinations), the same GPU takes minutes to hours. With a 12-character password using all printable ASCII characters (95^12 ˜ 5.4 × 10^23 combinations), brute force is completely impractical — it would take longer than the age of the universe even with all the world's computing power. Each additional character multiplies the search space by the character set size. This exponential growth is why length is so powerful: adding one character to a password takes longer to crack by a factor of (character set size), which might be 10–100× depending on the character set. Going from 10 to 11 characters might increase crack time from 10 years to 1,000 years.`,
  },
  {
    category: 'Attack Types',
    question: 'What is a dictionary attack and why does avoiding common words matter?',
    answer: `A dictionary attack uses a pre-compiled list of likely passwords rather than trying all possible combinations. Modern password dictionaries contain: millions of common English words, all entries from previous major data breaches (billions of real passwords from LinkedIn, Adobe, RockYou, etc.), common variations with numbers at the end (password1, password2024), common substitutions (p@ssword, passw0rd), keyboard walks (qwerty, asdfgh, 1qaz2wsx), and phrases and names from popular culture. A dictionary attack against a password like "Summer2024!" will find it quickly because "Summer" is a common word with a capital first letter, "2024" is a recent year, and "!" at the end is a standard complexity requirement trick. Passwords that appear random to humans but follow predictable patterns are vulnerable to dictionary attacks even when they pass surface-level complexity checks. Our checker identifies common patterns and penalizes them in the strength score even if the password meets technical complexity requirements.`,
  },
  {
    category: 'Attack Types',
    question: 'What is credential stuffing and how can I protect against it?',
    answer: `Credential stuffing is an attack that takes username/password combinations leaked from one data breach and automatically tries them on other services. This works because most people reuse passwords across multiple accounts. If your password is "MyDog2019!" on a small forum that gets hacked, attackers will immediately try that same email and password on Gmail, banking sites, Amazon, PayPal, and hundreds of other services. Even if your individual account password is "strong" by typical metrics, if it is reused, you are vulnerable. Protection: (1) Use a unique password for every account — the only practical way to do this is with a password manager. (2) Check if your email or passwords have appeared in known breaches using services like HaveIBeenPwned (hibp). (3) Enable 2FA on all important accounts — even if an attacker has your correct password, 2FA blocks them. (4) Use an email alias service (SimpleLogin, Apple Hide My Email) so different sites see different email addresses, making credential stuffing more difficult.`,
  },
  {
    category: 'Generation',
    question: 'How does the password generator create secure random passwords?',
    answer: `Our password generator uses the browser's built-in crypto.getRandomValues() function, which generates cryptographically secure random numbers. This is the same API used by professional cryptographic libraries and is suitable for generating passwords, tokens, and keys for security purposes. It is fundamentally different from Math.random(), which generates pseudo-random numbers that are predictable if you know the seed — crypto.getRandomValues() uses the operating system's entropy sources (hardware events, timing, system noise) to produce true unpredictability. The generator builds a character pool from your selected character types (uppercase, lowercase, digits, symbols), then randomly selects characters from this pool for each position in the password. The result is a password where each character is independently and uniformly random, giving it maximum entropy for its length. Generated passwords are displayed in plain text so you can copy them to your password manager. They are never stored, logged, or transmitted.`,
  },
  {
    category: 'Generation',
    question: 'What is a passphrase and is it more secure than a random character password?',
    answer: `A passphrase is a password made of multiple random words: "correct-horse-battery-staple" (the famous XKCD example). Passphrases have two advantages: memorability and length. Four random words chosen from a vocabulary of 7,776 words (the EFF wordlist) gives 7776^4 ˜ 3.6 × 10^15 combinations — equivalent to about 51 bits of entropy. More words dramatically increase security: five words ˜ 64 bits, six words ˜ 77 bits, seven words ˜ 90 bits. A seven-word passphrase is both memorable and extremely secure. By comparison, a 12-character random password with all character types has about 78.8 bits of entropy — comparable to six to seven random words but much harder to remember. The tradeoff: passphrases are more memorable but slightly longer to type; random character passwords are shorter but require a password manager to be practical. For your password manager master password (the one you must memorize), a six to seven word passphrase is the ideal solution.`,
  },
  {
    category: 'Compliance',
    question: 'What password requirements do security standards like NIST and ISO 27001 recommend?',
    answer: `NIST (National Institute of Standards and Technology) SP 800-63B provides the most current and research-backed guidance, updated in 2020 and again in 2023: minimum 8 characters (15+ recommended), maximum at least 64 characters (do not artificially cap password length), allow all printable ASCII characters and Unicode, do not require specific character types (no mandatory complexity rules), do not require periodic password changes unless there is evidence of compromise, check new passwords against a list of commonly used or compromised passwords and reject them, allow password managers (do not block paste functionality). ISO 27001 and SOC 2 compliance generally require documented password policies but defer to NIST or similar guidelines for technical specifics. OWASP (Open Web Application Security Project) recommends similar guidance. Our strength checker is aligned with NIST principles: it rewards length heavily, penalizes common passwords and predictable patterns, and does not artificially require all character types for high scores.`,
  },
  {
    category: 'Compliance',
    question: 'How do I create a password policy for my organization?',
    answer: `An effective organizational password policy based on current security research: (1) Minimum length: 12 characters for standard accounts, 16 for privileged/admin accounts. (2) Require password manager use: provide a recommended list (Bitwarden, 1Password, etc.) and encourage or mandate use. (3) Check against breach lists: integrate with Have I Been Pwned API to reject known-compromised passwords at creation time. (4) No arbitrary complexity requirements: NIST advises against mandatory character type requirements, which lead to predictable patterns. (5) Require 2FA for all accounts, especially privileged ones. (6) No mandatory periodic changes without evidence of compromise. (7) Screen against contextual words: reject passwords containing the company name, the username, or the service name. (8) Enforce minimum password age to prevent immediate cycling back to old passwords. Use our password strength checker as part of user education — show employees what "strong" means with concrete examples and crack time estimates before they choose passwords.`,
  },
  {
    category: 'Specific Scenarios',
    question: 'What is the best password for a Wi-Fi network?',
    answer: `Wi-Fi passwords (WPA2/WPA3 Pre-Shared Keys) have specific characteristics: they can be 8–63 characters, are entered infrequently (once per device), and can be shared via QR code. This makes them ideal candidates for very long random passwords. Recommended approach: generate a 20–30 character random password using our generator (mixing letters, digits, and symbols), save it in your password manager, and print a QR code for guest sharing. Why long? WPA2 PSK is vulnerable to offline dictionary attacks if an attacker captures the 4-way handshake during a connection — they can try billions of passwords offline using GPU acceleration. A short Wi-Fi password like "Home2024!" would fall quickly to a targeted attack. A 20-character random password is practically uncrackable. For WPA3 networks, the SAE (Simultaneous Authentication of Equals) handshake is more resistant to offline attacks, but a strong password is still good practice. A second option for memorable Wi-Fi passwords: a 4–5 word random passphrase like "maple-fish-guitar-cloud-2024" is both memorable and very strong.`,
  },
  {
    category: 'Specific Scenarios',
    question: 'How do I create a strong master password for my password manager?',
    answer: `Your password manager master password is the most important password you will ever create — it protects all your other passwords. The requirements are unusual: it must be memorized (password managers cannot fill themselves), must be very strong (if an attacker gets the encrypted vault, they will try to crack the master password offline), and must never be reused anywhere. The ideal approach: create a 6–7 word random passphrase using dice (the Diceware method) or the EFF wordlist. Example: "crimson-frog-atlas-window-seven-maple-drift." This is approximately 90 bits of entropy — uncrackable with any foreseeable technology. Write it on paper and store in a physically secure location (safe deposit box or home safe) as a backup. Memorize it through daily use — you will type it many times. Avoid: using any variation of passwords you have used before, including your name or birthday, using fewer than 5 words, or using phrases from songs or movies (which appear in phrase dictionaries). Test your master password candidate in our strength checker to see its estimated crack time.`,
  },
  {
    category: 'Privacy',
    question: 'Does this password strength checker store or log my password?',
    answer: `No. Our password strength checker runs entirely in your browser using client-side JavaScript. Your password is analyzed locally on your device and is never transmitted to our servers, never stored in any database, never logged in analytics, and never shared with any third party. The analysis code processes the password in your browser's JavaScript engine, and once you close or reload the tab, the password disappears from memory. This is a fundamental design principle: a password strength checker that sends passwords to a server — even over HTTPS — would be a security risk, because it creates a record of passwords that could be accessed or leaked. We intentionally use a browser-only architecture for this tool precisely to provide ironclad privacy guarantees. You can verify this claim: open your browser's developer tools (F12), go to the Network tab, and watch — no network requests are made when you type your password into our checker.`,
  },
  {
    category: 'Tools',
    question: 'What other security tools are available on this site?',
    answer: `We offer a suite of security and cryptography tools that complement the password strength checker. SHA-256 Generator: compute SHA-1, SHA-256, and SHA-512 hashes of any text — useful for verifying file integrity and understanding hash functions. HMAC Generator: create message authentication codes using HMAC-SHA algorithms for API authentication and data integrity verification. TOTP Generator: generate time-based one-time passwords compatible with Google Authenticator — useful for understanding 2FA and testing TOTP configurations. Bcrypt Generator: hash passwords using bcrypt with configurable work factors — the industry standard for storing passwords in databases. UUID Generator: create universally unique identifiers for use in databases, APIs, and application code. JWT Decoder: decode and inspect JSON Web Tokens without a secret — useful for debugging authentication issues. All tools run entirely in the browser with no server communication, making them safe for handling sensitive data.`,
  },
  {
    category: 'Tools',
    question: 'How can I check if my password has been compromised in a data breach?',
    answer: `Have I Been Pwned (haveibeenpwned.com), run by security researcher Troy Hunt, is the most comprehensive and trusted breach database. You can check both email addresses (to see which breaches included your email) and passwords (to see if your specific password appears in any known breach dataset). The password check uses a clever k-anonymity technique: your full password is never sent to the server. Instead, your browser hashes the password with SHA-1, sends only the first 5 characters of the hash, and receives back all hashes starting with those 5 characters. Your browser then checks locally whether your full hash is in the list — the server never sees your actual password. This makes it safe to check real passwords. Many password managers (1Password, Bitwarden) have built-in breach checking that uses the same API. If your password appears in breach data, change it immediately on any account where it was used, regardless of how strong it was — it does not matter how mathematically strong a password is if attackers have it in a list.`,
  },
  {
    category: 'Advanced',
    question: 'What is a rainbow table attack and does password hashing prevent it?',
    answer: `A rainbow table is a precomputed database of password-to-hash mappings for common passwords. Instead of computing hashes on the fly during an attack, an attacker looks up the hash in the table to instantly find the corresponding password. This makes attacks against unsalted password hashes extremely fast — billions of passwords can be "cracked" in seconds by lookup. Password hashing with a salt prevents rainbow table attacks: a salt is a random value added to each password before hashing, making the hash unique even for identical passwords. If you hash "password123" with salt "xK9m2pQr", the result is completely different from hashing "password123" with salt "hR4jN8vL". Pre-computing rainbow tables for salted hashes is impractical because each unique salt requires its own precomputation. Modern secure password storage: bcrypt, Argon2, or scrypt — these algorithms incorporate salting automatically and use key-stretching (deliberately slow computation) to limit attack speed. Our Bcrypt Generator tool demonstrates this concept practically.`,
  },
];

const writeUp = (
  <section className="prose prose-slate max-w-none">
    <h2>Why Password Strength Matters More Than Ever</h2>
    <p>
      Data breaches expose billions of passwords every year. When a service gets breached and password hashes are stolen, attackers can attempt to crack those hashes offline — trying billions of passwords per second using GPU-accelerated attacks. A weak password might be cracked in minutes; a strong one might take longer than the age of the universe. The difference between these outcomes is not luck — it is password length, randomness, and uniqueness.
    </p>
    <p>
      Our free password strength checker helps you understand exactly how secure your passwords are. It evaluates length, character diversity, common patterns, and estimates the actual crack time — not as a vague "you should add a symbol" suggestion, but as a concrete security assessment with specific improvement guidance. And because it runs entirely in your browser, your passwords never leave your device.
    </p>

    <h2>How the Strength Checker Evaluates Passwords</h2>
    <p>
      The tool applies multiple scoring factors simultaneously. Length gets the most weight — each additional character multiplies the attack space exponentially. Character set diversity (using uppercase, lowercase, digits, and symbols) is rewarded because it increases the character pool that attackers must cover. Pattern penalties reduce the score for repeated characters, sequential runs, keyboard walks, and common words that appear in password dictionaries.
    </p>
    <p>
      The crack time estimate uses realistic offline attack assumptions — roughly 100,000 bcrypt hashes per second with modern GPU hardware. This represents a well-resourced attacker who has obtained a copy of a password database. Online attack rates (against live web services) are much lower due to rate limiting, but offline attacks against leaked databases are the primary threat model for password security.
    </p>

    <h2>The Science of Password Length vs. Complexity</h2>
    <p>
      Security research and NIST guidelines have converged on a clear finding: length matters more than complexity. A 16-character password of random lowercase letters (entropy: ˜75 bits) is more secure than an 8-character password with mandatory complexity requirements (entropy: ˜52 bits). The math is straightforward: each character added to a password multiplies the search space by the character set size. Each additional character type requirement adds a fixed bonus to complexity that is smaller than the benefit of a few extra characters.
    </p>
    <p>
      This is why NIST SP 800-63B explicitly recommends against complexity requirements — they lead users to make predictable choices (capital first letter, number at the end, symbol replacing a letter) that actually reduce security relative to what users would choose without those constraints. A policy saying "at least 12 random characters" produces stronger passwords than "at least 8 characters with uppercase, lowercase, number, and symbol."
    </p>

    <h2>Understanding the Password Criteria Checklist</h2>
    <p>
      The strength checker displays a checklist of criteria, each contributing to the overall score. Minimum length (8 characters) is a baseline — not sufficient alone, but necessary. Extended length (12+ characters) is where real security begins. Uppercase letters expand the character set from 26 to 52 possible characters per position. Lowercase letters are the base character set. Numbers add 10 more characters. Special symbols add 32 more printable ASCII characters. No common patterns — this is often the most revealing check, because passwords that technically include all character types but follow predictable patterns score poorly here.
    </p>
    <p>
      Each criterion met contributes to the total score. Exceeding criteria (e.g., being much longer than the minimum) provides bonus points. Meeting all criteria and having no pattern deductions gives maximum score. The visual strength bar and label (Very Weak through Very Strong) provide an intuitive summary.
    </p>

    <h2>Generating Secure Passwords with the Built-in Generator</h2>
    <p>
      The password generator creates cryptographically secure random passwords using the browser's crypto.getRandomValues() API — the same entropy source used by professional cryptographic software. Generated passwords are completely random: each character is selected independently and uniformly from your chosen character set, with no patterns or predictability. This is fundamentally more secure than human-created passwords, which inevitably contain patterns even when people try to be random.
    </p>
    <p>
      Use the generator to create passwords you will store in a password manager. Choose a length appropriate for the account's sensitivity: 16 characters for standard accounts, 20+ for financial and email accounts, and a memorable passphrase for your password manager master password. The generated password will score Very Strong on the strength checker and have a crack time measured in centuries or more.
    </p>

    <h2>Password Attacks Explained: Brute Force, Dictionary, and Credential Stuffing</h2>
    <p>
      Understanding the attacks that the strength score protects against helps clarify why specific criteria matter. Brute force attacks try every possible combination — length defeats this because search space grows exponentially. Dictionary attacks try known passwords and variations — avoiding common words, patterns, and predictable substitutions defeats this. Credential stuffing reuses leaked password databases against other services — using unique passwords for every account defeats this.
    </p>
    <p>
      Modern attacks are hybrid: attackers combine dictionary lists with pattern rules (capitalize first letter, add number to end, substitute symbols) to try billions of pattern-matched variations before resorting to pure brute force. Our checker penalizes patterns specifically to identify passwords that would fall quickly to hybrid attacks even when they technically meet complexity requirements.
    </p>

    <h2>Password Best Practices by Account Type</h2>
    <p>
      Different accounts warrant different levels of password security. Email accounts are the highest priority — they receive password reset links for all other accounts, so an email compromise leads to full account takeover across services. Use a 20+ character unique password with 2FA. Password manager master password: 6+ random words as a passphrase, memorized, never stored digitally. Banking and financial accounts: 16+ character unique random password with 2FA. Social media accounts: 12+ character unique random passwords — breached social accounts are used for identity fraud and phishing. Work accounts: follow your organization's policy, ideally 16+ characters with 2FA. Low-value or throwaway accounts: at minimum, a unique password from your password manager (even if shorter than ideal) to prevent credential stuffing.
    </p>

    <h2>The Password Manager Imperative</h2>
    <p>
      The only practical way to have a unique, long, random password for every account is to use a password manager. There are simply too many accounts — the average person has 100+ online accounts — to remember unique strong passwords for each. Password managers generate, store, and autofill passwords, requiring you to remember only one master password. They alert you to reused passwords and can check your passwords against breach databases.
    </p>
    <p>
      The security of password managers has been thoroughly analyzed. Even if a password manager's servers are breached, your vault is encrypted with your master password — attackers cannot read it without cracking your master password first. The risk of using a password manager is far lower than the risk of reusing passwords across accounts. Every major security organization — NIST, CISA, NSA, and virtually every security researcher — recommends using a password manager.
    </p>

    <h2>Two-Factor Authentication as a Complement to Strong Passwords</h2>
    <p>
      Two-factor authentication (2FA) adds a second verification step beyond your password. Even if an attacker obtains your password through a breach, phishing, or guessing, they cannot log in without your second factor. App-based 2FA using TOTP (Time-based One-Time Passwords, compatible with Google Authenticator, Authy, etc.) is more secure than SMS-based 2FA, which can be intercepted through SIM swapping attacks. Hardware security keys (YubiKey, Titan Key) are the most phishing-resistant 2FA method. Passkeys (replacing passwords entirely with cryptographic key pairs) are the next evolution, eliminating passwords from the equation for supporting services.
    </p>
    <p>
      Use 2FA everywhere it is offered, prioritizing it on email, financial, and work accounts. Our TOTP Generator tool can help you understand how time-based one-time passwords work. With both a strong unique password and 2FA enabled, your accounts are protected even against sophisticated attacks.
    </p>

    <h2>Checking for Breached Passwords</h2>
    <p>
      Creating a strong password is necessary but not sufficient — you also need to ensure your password has not appeared in known data breaches. The Have I Been Pwned (hibp) service maintains a database of over 12 billion compromised passwords from real breaches. Their password checking API uses k-anonymity to let you check if a specific password appears in breach data without sending the actual password to the server. Major password managers integrate this check automatically. We recommend checking any new password you create against this database before using it — our tool focuses on mathematical strength; breach database checking covers the orthogonal risk of reusing compromised passwords even when they appear to be original.
    </p>

    <h2>Organizational Password Security</h2>
    <p>
      For organizations, password security extends beyond individual user choices to policy, tooling, and culture. Password policies should align with current NIST guidance: require minimum 12 characters, check new passwords against breach databases, mandate 2FA for all accounts, provide and recommend password managers, and avoid counterproductive requirements like mandatory complexity and periodic rotation without compromise evidence. Technical controls: implement account lockout policies, rate limiting on authentication endpoints, monitoring for credential stuffing patterns, and alerting for account access from unusual locations. Security awareness training should make password security concrete — show employees the crack time difference between "Company2024!" and a random 16-character password. Our strength checker is a useful training aid for this purpose.
    </p>

    <h2>Password Entropy: The Mathematics of Security</h2>
    <p>
      Password strength is most precisely expressed as entropy — the number of bits of randomness in a password. Higher entropy means more possible passwords, which means longer attack times. The formula is simple: entropy = log2(character set size ^ password length) = password length × log2(character set size).
    </p>
    <p>
      <strong>Entropy by character set</strong>: a password using only 26 lowercase letters has log2(26) ˜ 4.70 bits per character. Add uppercase (52 characters): 5.70 bits per character. Add digits (62 characters): 5.95 bits. Add common symbols (72 characters): 6.17 bits. Add all printable ASCII (95 characters): 6.57 bits. These differences seem small per character but compound significantly over a full password length.
    </p>
    <p>
      <strong>Concrete examples</strong>: an 8-character lowercase-only password: 8 × 4.70 = 37.6 bits — crackable in seconds on modern hardware. An 8-character password with all character types: 8 × 6.57 = 52.6 bits — takes hours to days offline. A 12-character lowercase password: 12 × 4.70 = 56.4 bits — similar security to the 8-character complex one. A 16-character lowercase password: 75.2 bits — years to decades. A 16-character all-character-types password: 105.1 bits — billions of years. NIST and CISA consider 112-bit entropy sufficient for long-term security.
    </p>
    <p>
      <strong>Passphrases and diceware</strong>: diceware passphrases select random words from a list of 7,776 words (6^5 — one word per roll of 5 dice). Each word contributes log2(7,776) ˜ 12.92 bits of entropy. A 6-word diceware passphrase has approximately 77.5 bits of entropy. These passphrases are both highly secure and more memorable than random character strings — "correct-horse-battery-staple" is famously secure because its apparent predictability (real English words) does not reduce security when words are truly randomly selected from a large list.
    </p>

    <h2>Common Password Vulnerabilities and How to Avoid Them</h2>
    <p>
      Analyzing the most common password failures helps users understand exactly what makes a password weak even when it "looks" strong.
    </p>
    <p>
      <strong>Keyboard walks</strong>: patterns like "qwerty," "asdf," "123456," "!@#$%^," and "zxcv" are keyboard adjacency sequences. Attackers include hundreds of keyboard walk patterns in their attack dictionaries. A password like "Qwerty123!" scores weakly because it combines a keyboard walk with trivial substitutions — entirely covered by standard rule-based attacks within seconds.
    </p>
    <p>
      <strong>Date and year patterns</strong>: incorporating birthdays, anniversary dates, graduation years, or current years (like "2024" appended to a word) is extremely common — and entirely predictable. Attackers apply year ranges (1900–2030) and date formats to every word in their dictionary. "Password2024!" provides essentially no additional security over "Password!" because the year suffix is checked automatically.
    </p>
    <p>
      <strong>Leet speak substitutions</strong>: replacing letters with symbols — @ for a, 3 for e, 0 for o, 1 for i, $ for s — is so well-known that all modern cracking tools apply these substitutions automatically. "P@ssw0rd!" is among the most-cracked passwords in breach databases despite technically containing uppercase, lowercase, digits, and symbols. The predictable substitution pattern provides no real security.
    </p>
    <p>
      <strong>Name-based passwords</strong>: using your name, your pet's name, your spouse's name, or your company name — even with numbers and symbols — provides inadequate security. Personal information is trivially available through social media and public records, and targeted attacks against specific individuals use this information to personalize the attack dictionary. "Fluffy2024!" is weak because "Fluffy" appears in any pet name dictionary.
    </p>
    <p>
      <strong>Popular culture references</strong>: song lyrics, movie quotes, sports teams, and character names all appear in modern attack dictionaries. "IronMan2019!" or "LetsGoCubbies2016$" seem creative to humans but are predictable to automated attacks. If it is something memorable from culture, it is already in an attack dictionary.
    </p>

    <h2>Password Security for High-Value Targets: Advanced Considerations</h2>
    <p>
      For high-value accounts — executives, journalists, activists, and anyone facing sophisticated adversaries — basic password hygiene is necessary but insufficient. Advanced threat actors use techniques beyond standard password cracking.
    </p>
    <p>
      <strong>Phishing resistance</strong>: even a perfectly strong password is useless if you are tricked into typing it into a fake login page. Hardware security keys (FIDO2/WebAuthn) are the only phishing-resistant 2FA — they cryptographically verify the website's domain before authenticating, making phishing attacks physically impossible regardless of password strength. Google's internal use of hardware keys eliminated employee phishing across their organization. For high-risk users, hardware security keys are the most important password security upgrade.
    </p>
    <p>
      <strong>Side-channel attacks</strong>: sophisticated adversaries can observe keystrokes through acoustic emanations, electromagnetic emissions, or network timing. These attacks are extremely rare and primarily relevant to nation-state-level targets. For typical users, these risks are negligible compared to the much more common threats of phishing, credential stuffing, and password reuse.
    </p>
    <p>
      <strong>Memory-only attacks</strong>: attackers who gain temporary physical access to your computer can extract passwords from memory if you are logged into accounts. Full-disk encryption (FileVault on macOS, BitLocker on Windows) mitigates this for theft, but running malware on your system presents similar risks. For high-value targets, using a dedicated secure device for sensitive access (banking, email) reduces this exposure.
    </p>
    <p>
      <strong>Operational security (OPSEC)</strong>: sophisticated adversaries may combine password attacks with social engineering — contacting your service provider and convincing them to reset your password through social manipulation. Enabling account PINs or passwords with service providers (telecommunications companies, email providers) for support access prevents this. The security of your account is only as strong as the weakest authentication path to it, including phone and in-person support.
    </p>

    <h2>Privacy of Our Password Strength Checker</h2>
    <p>
      Entering your actual password into any online tool requires trust that the tool does not capture and transmit it. Our password strength checker is built from the ground up for privacy — all analysis happens in your browser using JavaScript. No passwords are sent to our servers; no network requests are made when you type in the password field. You can verify this yourself using your browser's network monitoring tab (F12 ? Network) — typing a password in our tool generates zero network requests.
    </p>
    <p>
      The strength calculation, pattern detection, crack time estimation, and entropy calculation are all performed by JavaScript running locally in your browser. The password exists only in your browser's JavaScript memory during the session and is never stored or logged. When you close or reload the tab, the password is gone. This architecture means you can safely check passwords for your most sensitive accounts — financial, email, and work accounts — without any risk that the password will be captured.
    </p>
    <p>
      The password generator also uses the browser's <code>crypto.getRandomValues()</code> API, which generates cryptographically strong random numbers using the operating system's entropy pool. Generated passwords are not predictable or reproducible — each generation is independent, high-entropy, and suitable for use as a real password. The generated password never leaves your browser.
    </p>

    <h2>How Password Hashing Protects You When Services Get Breached</h2>
    <p>
      Understanding why strong passwords matter even when a service gets breached requires understanding password hashing — the technique responsible services use to store passwords.
    </p>
    <p>
      <strong>What is password hashing?</strong> Rather than storing your actual password, services store a one-way hash — a fixed-length cryptographic output derived from your password. When you log in, the system hashes the password you enter and compares it to the stored hash. If they match, you are authenticated. The original password cannot be mathematically recovered from the hash — hence "one-way." Even if a breach exposes the hash database, attackers cannot directly read your password from the hash.
    </p>
    <p>
      <strong>Offline cracking against hashes</strong>: attackers who obtain a hash database attempt to crack hashes by hashing billions of candidate passwords and comparing them to the stolen hashes — a search for a collision. Fast hash functions (MD5, SHA-1, SHA-256) allow billions of attempts per second on modern GPUs. This is why your password strength determines how long offline cracking takes — not whether cracking is attempted, but whether it completes in meaningful time. Password-specific hashing algorithms (bcrypt, scrypt, Argon2) are deliberately slow — designed to limit cracking to thousands of attempts per second even with powerful hardware. Our crack time estimate assumes bcrypt hashing, which is the current standard recommendation.
    </p>
    <p>
      <strong>The role of salts</strong>: a cryptographic salt is a random value added to your password before hashing, unique to each user account. Salts prevent precomputation attacks (rainbow tables) — an attacker cannot hash "password" once and match it against all users who used "password," because each user's salt produces a different hash. Modern password hashing algorithms include salts automatically. If a service is breached and your password hash is exposed, the attacker must crack your specific hash individually — they cannot reuse work done to crack other users' hashes.
    </p>
    <p>
      <strong>Why strong passwords matter despite hashing</strong>: bcrypt with 10 rounds limits cracking to approximately 100,000 guesses per second on modern hardware. An 8-character all-character password with 52.6 bits of entropy requires up to 2^52.6 ˜ 7 quadrillion guesses — at 100,000 per second, that is about 2,200 years. A weak 6-character lowercase password (27 bits) takes about 13 seconds. The difference in hash cracking resistance between a weak and strong password is the difference between being compromised in seconds and being effectively immune.
    </p>

    <h2>Evolution of Password Attacks: From Lists to AI</h2>
    <p>
      Password cracking technology has evolved dramatically over the past two decades, and understanding the current state of the art helps calibrate what "strong enough" means in practice.
    </p>
    <p>
      <strong>Dictionary attacks and wordlists</strong>: the earliest automated password attacks used wordlists — text files containing thousands of common words, names, and passwords. Tools like John the Ripper and Hashcat come with comprehensive wordlists (rockyou.txt, a list of 14 million real passwords from the 2009 RockYou breach, is the standard benchmark list). If your password appears on any major wordlist, it will be cracked in the first few minutes of any serious attack.
    </p>
    <p>
      <strong>Rule-based attacks</strong>: Hashcat and similar tools apply transformation rules to base wordlists — capitalize the first letter, append a number, substitute symbols for letters, reverse the string, append years. A wordlist of 100,000 words with 100,000 rules generates 10 billion candidate passwords — covering the vast majority of human-chosen passwords that are based on words with modifications. This is why "Password123!" is trivially crackable despite its apparent complexity.
    </p>
    <p>
      <strong>GPU acceleration</strong>: modern GPU-accelerated cracking using tools like Hashcat achieves extraordinary speeds. For MD5 hashes: over 100 billion per second on a single high-end GPU. For bcrypt with cost factor 10: approximately 100,000-200,000 per second. For Argon2id: even slower, depending on memory and iteration settings. The choice of hashing algorithm and cost factor dramatically affects attack feasibility. This is why services storing passwords with MD5 (without stretching) are fundamentally insecure — speeds that make bcrypt impractical make MD5 trivially crackable.
    </p>
    <p>
      <strong>AI and machine learning in password cracking</strong>: recent research has applied neural networks (specifically recurrent neural networks and transformers) to password generation and cracking. Models trained on large breach databases can generate new candidate passwords that match human password patterns better than traditional rule-based approaches. AI-generated candidates fill gaps in rule coverage for unusual but human-predictable patterns. These approaches represent the frontier of password cracking and further reinforce the importance of using truly random passwords generated by a computer rather than human-created passwords that follow human-predictable patterns.
    </p>
    <p>
      <strong>Cloud cracking</strong>: cloud computing (AWS, Google Cloud, Azure) allows anyone with a credit card to rent GPU capacity for cracking — the barrier to sophisticated password attacks has dropped to the cost of a few cloud computing hours. What once required specialized hardware and expertise now requires only leaked password hashes and willingness to spend money. This democratization of cracking capability makes password strength more important, not less, as more attackers can afford to crack recovered hashes.
    </p>

    <h2>Password Security Myths Debunked</h2>
    <p>
      Several persistent myths about password security lead users to make suboptimal choices. Addressing these directly helps users apply genuinely effective practices.
    </p>
    <p>
      <strong>Myth: "Changing passwords regularly makes them more secure"</strong>: NIST explicitly reversed this recommendation in their 2017 SP 800-63B guidelines. Forced password rotation leads to predictable behaviors — users append incrementing numbers ("Password1", "Password2", "Password3") or make other small changes that provide no real security benefit. Password rotation makes sense only when there is evidence of compromise. Otherwise, keeping a strong, unique password unchanged is better than regularly replacing it with a predictably modified version.
    </p>
    <p>
      <strong>Myth: "Adding symbols always makes passwords more secure"</strong>: symbols increase character set size, which mathematically increases entropy. But if symbols are added predictably (! at the end, @ replacing a, $ replacing s), the security benefit is minimal because these patterns are the first things rule-based attacks try. Symbols added randomly throughout a password do genuinely increase security; symbols added as predictable suffixes or substitutions do not.
    </p>
    <p>
      <strong>Myth: "My account isn't interesting enough to target"</strong>: credential stuffing attacks are not targeted — they are automated and apply to every account simultaneously. A breach of your shopping site exposes your email/password combination, which is then automatically tried against thousands of other services (banks, email providers, social media). The attack is not about you specifically; it is about finding any reused password that happens to also work on a valuable account. Every account with a reused password is at risk regardless of the account's apparent value.
    </p>
    <p>
      <strong>Myth: "Security questions provide extra protection"</strong>: security questions like "what was your first pet's name" or "what city were you born in" are based on information that is publicly available, guessable, or exposed through social media. They represent a weak secondary authentication method compared to TOTP or hardware keys. Answering security questions with random strings stored in your password manager — rather than truthful answers — converts them from a weakness to a reasonably strong authentication factor.
    </p>
    <p>
      <strong>Myth: "Incognito mode protects my passwords"</strong>: incognito / private browsing mode prevents your browser from saving browsing history, cookies, and form data — but it does not affect network traffic, DNS resolution, or what websites and services receive. Your passwords typed into incognito mode are transmitted to websites exactly as they would be in regular mode. Incognito provides privacy from other users of your computer, not from the network or from websites.
    </p>

    <h2>Industry Standards and Regulatory Requirements for Passwords</h2>
    <p>
      Various industries and regulatory frameworks impose specific password requirements that organizations must meet. Understanding these standards helps organizations comply and helps individuals understand the baseline security levels required for different contexts.
    </p>
    <p>
      <strong>NIST SP 800-63B (Digital Identity Guidelines)</strong>: the US National Institute of Standards and Technology's guidelines for password security. Key requirements: minimum 8 characters (recommended 64+ character maximum support), check against breach databases and ban compromised passwords, allow all printable ASCII and Unicode characters, do not require complexity rules (the research shows they harm security), do not require periodic rotation without evidence of compromise, implement rate limiting and lockout to prevent online guessing, use bcrypt, scrypt, PBKDF2, or Argon2 for password hashing.
    </p>
    <p>
      <strong>PCI DSS (Payment Card Industry Data Security Standard)</strong>: requirements for systems handling credit card data. PCI DSS 4.0 (effective 2024): minimum 12 characters for service providers, minimum 8 characters for user accounts (upgrading from the older 7-character minimum), complexity requirements (uppercase, lowercase, numeric, special character), change passwords every 90 days for privileged accounts, no password reuse for 4 previous passwords, MFA required for all administrative access.
    </p>
    <p>
      <strong>HIPAA (Health Insurance Portability and Accountability Act)</strong>: HIPAA requires covered entities to implement password management procedures but does not specify exact requirements — it defers to NIST guidelines and organization-specific risk analysis. The general expectation aligns with NIST: strong passwords, MFA for remote access, password complexity and length appropriate to the sensitivity of the data protected.
    </p>
    <p>
      <strong>SOC 2 (Service Organization Control)</strong>: SOC 2 compliance (relevant for SaaS companies handling customer data) requires password policies as part of the security criteria. Auditors look for documented password policies, enforcement controls, MFA requirements, and evidence of compliance. SOC 2 auditors typically expect minimum 12-character passwords with complexity, MFA on all privileged accounts, and encrypted storage using modern hashing.
    </p>
    <p>
      Our password strength checker helps developers, security teams, and compliance officers quickly assess whether passwords meet these standards — the criteria panel explicitly shows the minimum length, extended length, and complexity requirements that map to regulatory baseline requirements. Use it to demonstrate compliance and educate team members on what meets the bar.
    </p>

    <h2>Special Cases: Service Account Passwords, API Keys, and Secrets Management</h2>
    <p>
      Beyond human user passwords, organizations manage many other types of secrets that require equally careful security practices.
    </p>
    <p>
      <strong>Service account passwords</strong>: service accounts are non-human accounts used by applications, scripts, and services to authenticate with databases, APIs, and internal systems. Service account passwords should be: at least 32 characters of random data, unique per service, stored in a secrets manager (not in source code or environment variables), rotated regularly (automated rotation using secrets managers like HashiCorp Vault or AWS Secrets Manager eliminates the human factor). Service account passwords often have very high privilege — a compromised service account can access all resources the service touches. They warrant stronger passwords than individual user accounts.
    </p>
    <p>
      <strong>API keys and tokens</strong>: API keys are effectively passwords for programmatic access. Best practices: generate them with sufficient entropy (at least 128 bits, typically represented as 32+ hexadecimal characters), rotate them regularly, limit their scope (a read-only API key cannot be used for writes), store them in environment variables or secrets managers rather than in code, revoke and regenerate immediately if exposed. Many API key formats include version and service identifiers in their prefix — AWS access key IDs start with "AKIA," which helps automated scanning tools detect accidentally committed secrets in code repositories.
    </p>
    <p>
      <strong>Secrets scanning and prevention</strong>: the accidental commit of secrets (API keys, database passwords, private keys) into public repositories is a constant source of security incidents. GitHub, GitLab, and other platforms have automated secrets scanning that detects common secret patterns (AWS keys, GitHub tokens, private keys) and alerts developers. Tools like GitGuardian, Trufflehog, and git-secrets can be integrated into pre-commit hooks to prevent secrets from ever reaching the repository. Secrets committed to Git history must be treated as compromised even after deletion from the latest version — Git history is permanent unless rewritten, and scanners may have already detected the exposure.
    </p>
    <p>
      <strong>Secrets management at scale</strong>: organizations with many services and environments benefit from centralized secrets management. HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, and Google Cloud Secret Manager all provide: centralized storage with encryption, fine-grained access control, audit logging of secret access, automatic rotation capabilities, and API-based access that eliminates hardcoded secrets. Transitioning from hardcoded or environment-variable-stored secrets to a dedicated secrets manager is one of the highest-value security improvements for any organization with more than a handful of services.
    </p>
    <p>
      Our password strength checker is a tool for the human side of secrets management — evaluating the quality of passwords created for human accounts. For machine-to-machine secrets like service account passwords and API keys, randomness is more important than the complexity criteria our tool checks. A 32-character random hex string (using only [0-9A-F]) scores lower on our complexity checker than a human-readable password with mixed character types, but provides far more entropy (128 bits) and is better for automated use. The right security assessment method depends on the use case — our checker is optimized for human-facing passwords.
    </p>
    <p>
      The bottom line: password security is one of the highest-return investments in personal and organizational cybersecurity. The combination of a password manager, unique strong passwords for every account, and two-factor authentication on high-value accounts eliminates the vast majority of realistic attack scenarios. Our password strength checker, built for complete privacy with all analysis happening locally in your browser, gives you the concrete data you need to understand your current password security and make informed improvements. Strong passwords are not complicated — they are long, random, and unique per account. Start with those three properties, and our checker will confirm you are on the right track. Use the built-in password generator for any new account you create, run your existing most-sensitive passwords through the strength analysis to identify weak spots, and enable two-factor authentication wherever possible — this combination of long random passwords, a password manager, and 2FA raises your security posture dramatically above the baseline and makes credential-based attacks against your accounts practically infeasible for any attacker who does not have direct physical access to your authenticated device.
    </p>
  </section>
);

export default async function PasswordStrengthCheckerPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolData.title,
    description: toolData.shortDescription,
    url,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Any',
    permissions: 'browser',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={webPageSchema({ name: toolData.title, description: toolData.shortDescription, url })} />
      <ToolPageShell tool={toolData} ui={<PasswordStrengthCheckerTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}

