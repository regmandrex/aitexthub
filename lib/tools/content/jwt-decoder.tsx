import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>JWT Decoder: Free Online JSON Web Token Inspector, Debugger, and Validator</h2>
        <p>JSON Web Tokens (JWTs) stand as the standard standard for managing identification and access rights across contemporary web applications, API endpoints, mobile services, and distributed microservices. They underwrite OAuth 2.0 exchanges, OpenID Connect workflows, automated service-to-service permissions, and enterprise single sign-on deployments across innumerable web properties. When breakdowns surface "” such as a 401 Unauthorized code, stale tokens, absent claims, or invalid audience tags "” inspecting the decoded payload provides the immediate path to resolution.</p>
        <p>Simply paste an encoded token into this complimentary JWT decoder to immediately parse its header, payload, and signature into clean, structured JSON. The utility translates Unix timestamps into human-readable calendar dates, detects expiration states, reports the underlying signing algorithm, warns about potential vulnerabilities, and displays individual claims without dispatching information across the internet. Execution takes place purely inside your client using JavaScript, guaranteeing total privacy for your credentials.</p>
        <p>No matter if you are an engineer resolving an unexpected 401 response late at night, an auditor reviewing token security settings, a frontend programmer verifying session claims following sign-in, or a computer science student exploring JWT-based authentication mechanisms, this utility delivers immediate insight right when you need it.</p>

        <h2>What Is a JSON Web Token (JWT)?</h2>
        <p>Representing claims about a subject via an easily transportable and web-safe format, a JSON Web Token allows recipients to verify assertions cryptographically. Standardized under RFC 7519 by the Internet Engineering Task Force (IETF), this format has emerged as the premier mechanism enabling stateless authentication across contemporary microservices and distributed architectures.</p>
        <p>
          A JWT is structured as three Base64URL-encoded segments separated by dots:
        </p>
        <p>
          <code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</code>
        </p>
        <p>
          The three segments are:
        </p>
        <ul>
          <li>
            <strong>Header</strong> "” a JSON object specifying the token type (<code>typ</code>) and the
            cryptographic algorithm (<code>alg</code>) used to sign it
          </li>
          <li>
            <strong>Payload</strong> "” a JSON object containing claims: assertions about the subject and
            additional metadata relevant to the application
          </li>
          <li>
            <strong>Signature</strong> "” a cryptographic value computed from the encoded header, the encoded
            payload, and a secret or private key, used to verify integrity
          </li>
        </ul>
        <p>
          The compact dot-separated format was designed specifically to be safe in URL query parameters,
          HTTP Authorization headers, and cookie values without additional encoding. Base64URL differs from
          standard Base64 in that it replaces <code>+</code> with <code>-</code> and <code>/</code> with
          <code>_</code>, and omits padding characters, making it fully URL-safe.
        </p>

        <h2>Anatomy of the JWT Header</h2>
        <p>Acting as token metadata, the JWT header consists of a Base64URL-encoded JSON object. At a bare minimum, it includes the <code>alg</code> property which defines the signature algorithm. A standard header appears as:</p>
        <p>
          <code>&#123;"alg": "HS256", "typ": "JWT"&#125;</code>
        </p>
        <p>The <code>typ</code> (Type) header is nearly always set to <code>"JWT"</code>, separating JSON Web Tokens from alternative token formats. For complex cases utilizing JWEs (JSON Web Encryption) or nested JWTs, this type can be <code>"JWE"</code> or a different value.</p>
        <p>Security relies heavily on the <code>alg</code> (Algorithm) element. It informs the recipient which method to employ during signature validation. Permitted algorithms outlined in the JSON Web Algorithms (JWA) standard specified within RFC 7518 include:</p>

        <h3>Symmetric Algorithms (HMAC)</h3>
        <p>Algorithms based on HMAC utilize one shared secret for both validation and generation. They work well when every participant required to check the token is fully trusted and possesses secure access to that identical secret:</p>
        <ul>
          <li><strong>HS256</strong> &mdash; HMAC utilizing SHA-256, the commonest JWT signing algorithm</li>
          <li><strong>HS384</strong> &mdash; HMAC utilizing SHA-384, sturdier though infrequently required</li>
          <li><strong>HS512</strong> &mdash; HMAC utilizing SHA-512, peak HMAC security level</li>
        </ul>

        <h3>Asymmetric Algorithms (RSA)</h3>
        <p>Verification uses a public key while signing relies on a private key when employing RSA algorithms. The issuer safeguards the private key, whereas the public key is shared openly with any service requiring token verification:</p>
        <ul>
          <li><strong>RS256</strong> &mdash; RSA PKCS#1 v1.5 digital signature employing SHA-256</li>
          <li><strong>RS384</strong> &mdash; RSA PKCS#1 v1.5 digital signature employing SHA-384</li>
          <li><strong>RS512</strong> &mdash; RSA PKCS#1 v1.5 digital signature employing SHA-512</li>
          <li><strong>PS256</strong> &mdash; RSA-PSS digital signature using SHA-256 (safer padding than PKCS#1)</li>
          <li><strong>PS384</strong> – RSA-PSS signature using SHA-384</li>
          <li><strong>PS512</strong> &#8212; RSA-PSS signature utilizing SHA-512</li>
        </ul>

        <h3>Asymmetric Algorithms (ECDSA)</h3>
        <p>The Elliptic Curve Digital Signature Algorithm delivers the same level of security as RSA while using much smaller keys, which is perfect for high-speed systems and resource-limited environments:</p>
        <ul>
          <li><strong>ES256</strong> &#8212; ECDSA using the P-256 curve alongside SHA-256</li>
          <li><strong>ES384</strong> &#8212; ECDSA using the P-384 curve alongside SHA-384</li>
          <li><strong>ES512</strong> &#8212; ECDSA using the P-521 curve alongside SHA-512</li>
        </ul>

        <h3>The Risky "none" Algorithm</h3>
        <p>The <code>none</code> algorithm indicates a token lacking any signature. The specification includes this option for cases where other methods ensure integrity, yet historically it has triggered major security flaws. A number of legacy JWT libraries processed <code>none</code> tokens unquestioningly, enabling malicious actors to forge custom tokens containing arbitrary claims. You must always define permitted algorithms explicitly within your JWT library settings and block <code>none</code> entirely.</p>

        <h3>The Key ID (kid) Header Parameter</h3>
        <p>An optional marker for the specific signing key utilized is the <code>kid</code> header parameter. As servers rotate signing keys routinely for security purposes, they make available a JSON Web Key Set (JWKS) containing multiple public keys. Verifying systems use the <code>kid</code> found in the JWT header to determine the correct validation key, facilitating seamless key transitions without breaking all current tokens at once. To assist in troubleshooting key rotation problems, our decoder highlights the <code>kid</code> value clearly.</p>

        <h2>Understanding the JWT Payload: A Deep Dive into Claims</h2>
        <p>Meaningful data resides within the payload itself. Three claim categories are outlined in RFC 7519: registered claims established by the standard, public claims listed in the IANA JSON Web Token Claims registry, and private claims tailored for specific applications between participating parties.</p>

        <h3>Registered Claims: The Seven Standard Attributes</h3>
        <p>Defined specifically by the specification, these seven claim names are reserved. Although all remain optional, they enjoy widespread adoption:</p>

        <h4>iss "” Issuer</h4>
        <p>The principal that created the JWT is named by the <code>iss</code> claim. Usually, this takes the form of an authorization server URL like <code>https://auth.example.com</code>, <code>https://accounts.google.com</code>, or <code>https://your-tenant.auth0.com/</code>. Resource servers need to confirm that this issuer corresponds to the anticipated authority. Any missing or invalid <code>iss</code> demands immediate token rejection.</p>

        <h4>sub "” Subject</h4>
        <p>Representing the main entity of the token—frequently a user ID—the <code>sub</code> claim serves as a unique identifier. Within the issuer's scope, it ought to remain locally unique and persist throughout the account existence. Avoid employing changeable data like email addresses for the subject since user IDs should stay constant even if emails are modified.</p>

        <h4>aud "” Audience</h4>
        <p>The <code>aud</code> claim designates who the JWT is meant for, meaning the specific apps or platforms permitted to accept it. This value can appear as either a string or an array of strings. Resource servers need to confirm their personal identifier is present inside the audience claim prior to handling the token. Audience validation stops token confusion attacks where credentials created for Service A get used on Service B.</p>

        <h4>exp "” Expiration Time</h4>
        <p>Denoting a Unix timestamp representing seconds elapsed since January 1, 1970 UTC, the <code>exp</code> claim marks the deadline beyond which processing the token is forbidden. This particular claim experiences frequent misconfiguration, acting as the primary reason behind tokens that appear valid yet get refused. Translating the raw numeric timestamp into readable UTC and local dates, our decoder also calculates whether the token has expired, the elapsed time since expiration, or the remaining duration before it runs out.</p>
        <p>Access tokens with short lifespans lasting from 15 minutes up to 1 hour significantly reduce harm if credentials get stolen. Rely on refresh tokens to keep sessions active over longer periods instead of granting extended lifetimes to access tokens.</p>

        <h4>nbf "” Not Before</h4>
        <p>The <code>nbf</code> claim is a Unix timestamp indicating the exact moment before which the token must be rejected. It appears less frequently than <code>exp</code> yet remains helpful for credentials meant to activate later, such as a scheduled batch job token that ought to remain unusable until its designated start time.</p>

        <h4>iat "” Issued At</h4>
        <p>Represented as a Unix timestamp, the <code>iat</code> field records the precise moment a token was generated. Combined with <code>exp</code>, it establishes the total validity window. Furthermore, it helps systems identify sessions generated prior to security updates or credential resets, ensuring any token carrying an <code>iat</code> that precedes a password modification gets rejected.</p>

        <h4>jti "” JWT ID</h4>
        <p>Acting as a unique nonce for every issued credential, the <code>jti</code> claim provides an explicit identifier for an individual JWT instance. This mechanism facilitates token blocklisting alongside replay mitigation: after a single-use token gets processed, its <code>jti</code> is logged, causing any repeated transmission containing that identical <code>jti</code> to fail. The JTI must remain entirely distinct for every credential and issuer.</p>

        <h3>Typical Private Claims in Real-World Use</h3>
        <p>Aside from registered claims, production JWTs usually contain custom application data:</p>
        <ul>
          <li><strong>email</strong> &#8211; the user's electronic mail address (OIDC profile scope)</li>
          <li><strong>name / given_name / family_name</strong> &#8211; parts of the user display name (OIDC)</li>
          <li><strong>picture</strong> &#8211; link address for the profile picture of the user (OIDC)</li>
          <li>
            <strong>scope</strong> "” space-separated OAuth 2.0 permissions granted to the bearer
          </li>
          <li>
            <strong>role / roles</strong> "” RBAC roles assigned to the user
          </li>
          <li>
            <strong>permissions</strong> "” fine-grained permission list (Auth0 RBAC)
          </li>
          <li>
            <strong>tenant_id / org_id</strong> "” multi-tenant application identifiers
          </li>
          <li>
            <strong>azp</strong> "” Authorized Party, the client that was issued the token
          </li>
          <li>
            <strong>sid</strong> "” Session ID for front-channel logout support
          </li>
          <li><strong>nonce</strong> – value tied to the OIDC auth request to stop replay attacks</li>
          <li><strong>at_hash / c_hash</strong> – hash strings linking the ID token with a code or access token</li>
        </ul>

        <h2>JWT Signature: Ensuring Integrity Without Secrecy</h2>
        <p>The signature is generated by taking the Base64URL-encoded header, adding a dot, adding the Base64URL-encoded payload, and applying the signing algorithm with the secret or private key. For HS256:</p>
        <p>
          <code>HMAC-SHA256(base64url(header) + "." + base64url(payload), secret)</code>
        </p>
        <p>
          For RS256:
        </p>
        <p>
          <code>RSA-SHA256-Sign(base64url(header) + "." + base64url(payload), privateKey)</code>
        </p>
        <p>The signature prevents tampering: if an attacker alters any bit of the header or payload and recomputes Base64URL encoding, the signature will fail to match because they lack the signing key. Note that the payload is encoded, not encrypted "” anyone holding the JWT can read the claims. Never include sensitive data like passwords, SSNs, or credit card numbers in a JWT payload.</p>

        <h2>Decoding vs Verifying: An Important Distinction</h2>
        <p>Our decoder displays the contents of the JWT header and payload by reversing the Base64URL encoding. This process requires no secret and no key "” any party can decode any JWT. This is intentional: the payload is not a secret; it is a collection of claims readable by anyone who receives the token.</p>
        <p>Verification is a completely different operation. It utilizes the secret key (for HMAC) or public key (for RSA/ECDSA) to recalculate the expected signature and evaluate it against the provided signature. If they match, the token was genuinely created by the key holder and remains unaltered. Only following successful verification should any application trust the payload claims.</p>
        <p>Signature checks for RS256 and ES256 tokens can be executed directly inside your web browser via the native Web Crypto API. Simply provide a public key or relevant JWKS JSON with the payload to evaluate authenticity purely client-side. When validating HS256, you can safely input a secret, as your key never departs your local environment.</p>

        <h2>JSON Web Key Sets (JWKS) and Key Rotation</h2>
        <p>Prominent identity providers make their public signing keys available at a standard JWKS URL:</p>
        <ul>
          <li>Google: <code>https://www.googleapis.com/oauth2/v3/certs</code></li>
          <li>Microsoft: <code>https://login.microsoftonline.com/common/discovery/v2.0/keys</code></li>
          <li>Auth0: <code>https://your-tenant.auth0.com/.well-known/jwks.json</code></li>
        </ul>
        <p>A JWKS is structured as a JSON object holding a collection of JSON Web Keys (JWK). Every key features attributes like <code>kty</code> (key type: RSA, EC, oct), <code>kid</code> (key ID corresponding to the JWT header), <code>use</code> (sig for signing, enc for encryption), along with the actual key parameters (n and e for RSA, x and y for EC).</p>
        <p>Key rotation is considered a vital security practice: frequently swapping out the signing key pair ensures that if a legacy key gets breached, the risk window stays small. The rotation procedure: (1) create a fresh key pair; (2) publish the new public key within the JWKS together with the previous one; (3) begin signing fresh tokens using the new private key; (4) allow time for all tokens signed by the prior key to lapse; (5) delete the old public key from the JWKS. The <code>kid</code> header claim allows this workflow to function smoothly – verifiers identify the correct key via its ID rather than guessing the current one.</p>

        <h2>JWT in OAuth 2.0 and OpenID Connect</h2>
        <p>OAuth 2.0 functions as an authorization framework specifying methods for apps to secure delegated resource access for users. OpenID Connect (OIDC) acts as a lightweight identity layer sitting on OAuth 2.0 that standardizes user authentication.</p>
        <p>During an OIDC process, the identity provider issues a pair of tokens: an <strong>access token</strong> meant for accessing APIs (frequently a JWT), plus an <strong>ID token</strong> (constantly a JWT) that holds user profile details. The ID token serves the client application – verifying user identity. Meanwhile, the access token is intended for resource servers – verifying permitted bearer actions.</p>
        <p>A frequent error involves treating the ID token as a bearer token for API requests. The <code>aud</code> claim inside an ID token represents the client ID instead of the API – meaning resource servers ought to decline it. API authorization should rely exclusively on the access token.</p>
        <p>This decoder proves especially handy throughout OIDC setup: insert the ID token to verify that <code>iss</code> corresponds to the provider URL, <code>aud</code> matches your client ID, <code>nonce</code> aligns with the authorization request value, and <code>exp</code> confirms the token remains valid.</p>

        <h2>JWT within Microservices: Service-to-Service Authentication</h2>
        <p>Contemporary microservice frameworks require a mechanism for components to verify their identity mutually without human interaction. Machine-to-machine (M2M) JWTs address this challenge. A central identity provider distributes short-lived JWTs to components via the OAuth 2.0 Client Credentials grant. These credentials contain claims specifying the source component and the endpoints it has permission to invoke.</p>
        <p>In a standard microservice setup: Service A needs to invoke Service B. Service A acquires an access token from the identity provider with its client ID and secret. It includes the token within the request header to Service B. Service B checks the token signature utilizing the identity provider's public key (from JWKS), confirms the audience claim aligns with its own identifier, and executes the request.</p>
        <p>Inspecting the M2M token using our utility assists in troubleshooting: incorrect issuer, audience discrepancy, token already expired (M2M tokens ought to be cached and utilized until close to expiration, rather than retrieved on every call), or absent scope claims.</p>

        <h2>Frequent JWT Debugging Scenarios</h2>

        <h3>401 Unauthorized: The Most Frequent JWT Issue</h3>
        <p>When your API responds with 401 despite a seemingly valid JWT, step through this troubleshooting list utilizing our decoder:</p>
        <p>First, inspect <code>exp</code>. Has the token lapsed? This is the primary culprit " tokens generated during testing expire, or application logic neglects to renew tokens correctly.</p>
        <p>Second, inspect <code>aud</code>. Does the audience align with your API's requirements? A token generated for <code>https://api.example.com</code> sent to <code>https://admin.example.com</code> will be declined by a correctly secured API.</p>
        <p>Third, inspect <code>iss</code>. Does the issuer align with your API's specified issuer? A pre-production token provided to production will be rejected.</p>
        <p>Fourth, inspect <code>alg</code>. Does the algorithm align with your backend's requirements? A backend configured exclusively for RS256 will decline HS256 tokens and vice versa.</p>
        <p>Fifth, inspect clock drift. If your backend clock is slightly ahead of the token's <code>exp</code> while the token appears to have remaining seconds, time synchronization across nodes could be the culprit. Most JWT parsers support a minor clock skew window (30-60 seconds).</p>

        <h3>Missing Claims Following Login</h3>
        <p>If your software anticipates a <code>role</code>, <code>email</code>, or <code>permissions</code> claim that is missing, the issue is typically the OAuth 2.0 scopes asked for. Most identity providers exclusively embed claims tied to requested scopes:</p>
        <ul>
          <li><code>openid</code> scope â†’ <code>sub</code> claim</li>
          <li><code>profile</code> scope â†’ <code>name</code>, <code>given_name</code>, <code>picture</code></li>
          <li><code>email</code> scope â†’ <code>email</code>, <code>email_verified</code></li>
        </ul>
        <p>Custom claims such as roles or permissions typically demand explicit setup on the auth server, frequently termed "rules", "actions", or "claim mappers" based on the provider.</p>

        <h3>Token Operates Locally Yet Fails in Production</h3>
        <p>Examine both tokens (production and development) side by side. Typical discrepancies include: varying issuers (staging vs production auth server URL), divergent audiences, different signing keys (incorrect key set in production), or dissimilar token lifespans.</p>

        <h2>JWT Security: Threat Vectors and Defenses</h2>

        <h3>Algorithm Confusion Attacks</h3>
        <p>During an algorithm confusion exploit, a bad actor grabs a JWT signed using RS256, swaps the <code>alg</code> header for <code>HS256</code>, and signs the token with the RS256 public key acting as the HMAC secret. Software packages failing to strictly verify the anticipated algorithm might attempt HS256 checking utilizing that public key — and succeed, since the attacker signed using precisely that value.</p>
        <p>Defense: always explicitly define the expected algorithm within your JWT library settings. Never deduce the algorithm directly from the token header — since the header is controlled by the attacker.</p>

        <h3>JWT Injection</h3>
        <p>If your software builds JWT payloads from untrusted user input lacking proper sanitization, an adversary could inject extra claims or override existing ones within non-standard library builds. Always generate the payload via authoritative server-side sources rather than user data.</p>

        <h3>Replay Attacks</h3>
        <p>A compromised JWT can be presented by an intruder acting as the real user until expiration occurs. Defenses: employ brief expiration intervals, adopt token binding (linking tokens to client certificates), use refresh token rotation alongside revocation, and incorporate the <code>jti</code> claim for single-use tokens.</p>

        <h3>Confidential Information Inside Payload</h3>
        <p>JWT payloads utilize Base64URL encoding rather than encryption. Anyone intercepting or receiving the token can inspect every claim. Never put passwords, social security numbers, credit cards, medical history, or other private personal data inside JWT claims. Keep only the minimum required claims for making authorization choices.</p>

        <h2>JWT Best Practices: A Definitive Guide</h2>

        <h3>Algorithm Selection</h3>
        <p>For most apps: choose RS256 (or ES256 for reduced key sizes). RS256 permits the issuer to keep the private signing key secure while sharing the public verification key across all resource servers — meaning resource servers validate tokens without being able to generate new ones, offering layered defense. HS256 suits only scenarios where every verifying entity is fully trusted and able to securely exchange the signing secret.</p>

        <h3>Token Lifetime</h3>
        <p>Access tokens: 15 minutes up to 1 hour works well for typical applications. Highly sensitive systems (finance, healthcare) should stick to 5-15 minutes. Refresh tokens: 24 hours to 30 days depending on session needs, accompanied by rotation and revocation features.</p>
        <p>Never generate access tokens boasting multi-day lifespans. A stolen 90-day access token grants an intruder three whole months of unchecked entry. A stolen 15-minute token presents a very narrow window.</p>

        <h3>Storage in Browsers</h3>
        <p>Keep tokens within memory (JavaScript variables) for ultimate security — they vanish upon tab closure. For persistent logins, utilize HttpOnly, Secure, SameSite=Strict cookies, which remain inaccessible to JavaScript and stay safe from XSS attacks. Avoid localStorage and sessionStorage — as they are exposed to any JavaScript executing on the page, including injected malicious scripts.</p>

        <h3>Claim Validation</h3>
        <p>Always verify: <code>iss</code> (must match the expected issuer), <code>aud</code> (needs to include your service), <code>exp</code> (has to be in the future), <code>nbf</code> (must reside in the past if present), along with the signature (needs checking against the anticipated key utilizing the explicitly defined algorithm). Validate all these parameters on every single request — never cache validation outcomes past the token's lifetime.</p>

        <h3>Minimal Payload</h3>
        <p>Keep JWT payloads compact. Each claim adds extra bytes onto every request. Include solely what is necessary for authorization logic. Pull detailed user profiles out of a database utilizing the <code>sub</code> claim instead of embedding all profile details straight into the token. This keeps tokens lightweight, shrinks the attack surface from exposed claims, and prevents stale information problems whenever user details change.</p>

        <h2>Base64URL Encoding: Technical Particulars</h2>
        <p>Standard Base64 translates 3 bytes of raw binary data into 4 ASCII characters utilizing the character set <code>A-Z a-z 0-9 + /</code> accompanied by <code>=</code> padding. This is not safe for URLs because <code>+</code> and <code>/</code> hold special meaning inside URLs and HTTP headers.</p>
        <p>Base64URL swaps <code>+</code> → <code>-</code> and <code>/</code> → <code>_</code>, dropping the <code>=</code> padding symbols entirely. The outcome fits seamlessly into URL path segments, query parameters, and HTTP headers devoid of percent-encoding.</p>
        <p>Our decoder handles Base64URL automatically. You can paste JWT strings directly — either with or without the <code>Bearer</code> prefix — and the tool strips it out while decoding accurately.</p>

        <h2>JWT Libraries by Platform and Language</h2>
        <p>Selecting the proper JWT package matters, because certain packages fail to check every security aspect automatically. Rely on active, heavily-reviewed packages and set them up carefully:</p>

        <h3>Node.js / JavaScript</h3>
        <ul>
          <li><code>jsonwebtoken</code> (Auth0) - the top choice; solid default settings but make sure to define <code>algorithms</code> directly</li>
          <li><code>jose</code> - contemporary, full-featured JWK/JWKS capabilities, ready for OIDC</li>
          <li><code>@auth0/jwt-decode</code> – runs exclusively on the client side without signature validation</li>
        </ul>

        <h3>Python</h3>
        <ul>
          <li><code>PyJWT</code> – elegant interface, sensible defaults; make sure to set the <code>algorithms</code> argument</li>
          <li><code>python-jose</code> – includes JWK/JWKS capabilities</li>
          <li><code>authlib</code> - comprehensive OAuth 2.0 and OIDC library featuring JWT support</li>
        </ul>

        <h3>Java</h3>
        <ul>
          <li><code>java-jwt</code> (Auth0) - widely used and expressive programming interface</li>
          <li><code>jjwt</code> (Stormpath/JJWT) - fluent builder pattern with type safety</li>
          <li><code>nimbus-jose-jwt</code> - the most comprehensive JWA and JWE capabilities available</li>
          <li><code>Spring Security OAuth2</code> - seamlessly connected with the Spring framework</li>
        </ul>

        <h3>Go</h3>
        <ul>
          <li><code>golang-jwt/jwt</code> - idiomatic Go library, being an actively maintained fork of dgrijalva/jwt-go</li>
          <li><code>lestrrat-go/jwx</code> - full JWK, JWE, JWS, and JWT capabilities</li>
        </ul>

        <h3>.NET</h3>
        <ul>
          <li><code>System.IdentityModel.Tokens.Jwt</code> - the official Microsoft library</li>
          <li><code>Microsoft.AspNetCore.Authentication.JwtBearer</code> - middleware for ASP.NET Core</li>
        </ul>

        <h3>Ruby</h3>
        <ul>
          <li><code>ruby-jwt</code> - straightforward and popular</li>
          <li><code>omniauth-jwt</code> - an OmniAuth strategy built on JWT</li>
        </ul>

        <h3>PHP</h3>
        <ul>
          <li><code>firebase/php-jwt</code> - supported by Firebase</li>
          <li><code>lcobucci/jwt</code> - contemporary, type-safe PHP 8 architecture</li>
        </ul>

        <h3>Rust</h3>
        <ul>
          <li><code>jsonwebtoken</code> - robust and well-maintained Rust package</li>
        </ul>

        <h2>Comparing Our JWT Decoder to Alternative Options</h2>

        <h3>jwt.io</h3>
        <p>While the jwt.io utility by Auth0 is widely referenced across the industry, offering comprehensive options along with signature checking, certain operational states transmit token contents back to Auth0 servers, surrounded by Auth0 promotion. In contrast, our solution conducts every parsing and validation step strictly in the client, without external network calls or embedded marketing.</p>

        <h3>Local Development Tools</h3>
        <p>Certain developers rely on terminal utilities like <code>jwt-cli</code> or command-line base64 decoding. Our web utility is quicker to access, includes syntax highlighting along with expiration checks, and demands zero setup - perfect for rapid reviews while debugging.</p>

        <h2>Privacy and Security Standards of Our Tool</h2>
        <p>Every single JWT decoding and validation process happens completely inside your web browser. The JavaScript handling your token reaches your browser to execute locally - meaning zero token info, payload content, or signature details ever get sent to our servers or external entities. The page executes no API requests throughout the decoding process.</p>
        <p>We never log tokens, save them in any database, incorporate third-party analytics that might capture input field data, or employ service workers that could intercept network communication. You can securely decode tokens holding sensitive claims including user IDs, email addresses, permissions, and tenant identifiers.</p>
        <p>Nevertheless, maintain good habits: steer clear of sharing production administrator tokens with any utility out of routine. For tokens possessing the highest privilege levels, perform decoding in a local tool or IDE. But for the daily work of troubleshooting authentication flows, our browser-based decoder remains the fastest and most convenient choice available.</p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a JWT decoder and what does it display?',
    answer:
      'A JWT decoder splits a JSON Web Token on the dot separator and Base64URL-decodes each of the three segments - header, payload, and signature - into readable JSON. Our decoder also converts Unix timestamps into human-readable dates, flags expired tokens, identifies the signing algorithm, and highlights the key ID (kid) claim.',
  },
  {
    category: 'General',
    question: 'Is it secure to decode my JWT using this online utility?',
    answer:
      'Yes - our tool decodes completely inside your browser utilizing JavaScript. No data gets transmitted to any server. For the highest-privilege production tokens (admin credentials, etc.), you might prefer a local tool, but for everyday debugging this utility is safe.',
  },
  {
    category: 'General',
    question: 'What make up the three sections of a JWT?',
    answer:
      'A JWT contains three Base64URL-encoded segments separated by dots: (1) Header - contains the algorithm (alg) and token type (typ); (2) Payload - contains the claims (iss, sub, aud, exp, iat, and custom claims); (3) Signature - cryptographic proof that the header and payload have not been altered.',
  },
  {
    category: 'General',
    question: 'How does decoding a JWT differ from verifying it?',
    answer:
      'The process of decoding merely reverses Base64URL encoding back into raw JSON, an operation anyone can execute without specialized secrets. Conversely, verification employs a cryptographic key to guarantee signature authenticity and ensure message integrity. You should never rely on raw decoded claims in production before completing thorough server-side verification.',
  },
  {
    category: 'General',
    question: 'Can I view the signature content by decoding a JWT?',
    answer:
      'Yes - our decoder displays the raw Base64URL-encoded signature value. However, the signature is binary data; it does not decode into meaningful human-readable text. Its function is to be verified cryptographically via the signing key, not read directly.',
  },
  {
    category: 'Claims',
    question: 'What does the exp claim signify and how do I interpret it?',
    answer:
      'The exp (Expiration Time) claim is a Unix timestamp - seconds since January 1 1970 UTC - after which the token must be rejected. Our decoder transforms it into a human-readable date like "2025-12-31 23:59:59 UTC" and informs you whether the token is currently expired, expired X minutes ago, or expires in X minutes.',
  },
  {
    category: 'Claims',
    question: 'What is the aud claim and why does it trigger 401 errors?',
    answer:
      'Designating target recipients, the aud (Audience) claim lists which specific consumers or services may honor the token. An appropriately secured endpoint will refuse any token whose aud excludes its own designated resource name. Delivering a token intended for Service A over to Service B frequently triggers 401 errors; unpack your token to confirm that its aud matches backend expectations.',
  },
  {
    category: 'Claims',
    question: 'What is the difference between iss and sub?',
    answer:
      'iss (Issuer) identifies who generated and signed the token - the authorization server URL. sub (Subject) identifies who the token concerns - typically the user ID. The iss indicates "Google issued this token"; the sub indicates "it concerns user ID 1234567890".',
  },
  {
    category: 'Claims',
    question: 'What is the scope claim within a JWT?',
    answer:
      'The scope claim is utilized in OAuth 2.0 access tokens to list the permissions granted to the bearer as a space-separated string: "read:users write:posts admin:billing". Resource servers rely on the scope to determine what operations the token authorizes.',
  },
  {
    category: 'Claims',
    question: 'What does the jti claim mean?',
    answer:
      'The jti (JWT ID) serves as a unique identifier for a specific token instance. It enables replay prevention for single-use tokens - the server stores used jti values and rejects tokens presenting the identical jti twice. It is additionally useful for token revocation via blocklist.',
  },
  {
    category: 'Algorithms',
    question: 'What does HS256 signify within a JWT header?',
    answer:
      'HS256 stands for HMAC with SHA-256. It is a symmetric algorithm - the exact same secret key is utilized for both signing and verification. It represents the most frequently used JWT signing algorithm and proves suitable when all parties needing to verify tokens also need to be trusted with the signing secret.',
  },
  {
    category: 'Algorithms',
    question: 'When should I utilize RS256 rather than HS256?',
    answer:
      'Apply RS256 in microservices architectures where different services validate tokens. Under RS256, the auth server keeps the private signing key; API servers just require the public key via JWKS. They validate tokens but cannot issue new ones — a major security upgrade compared to distributing an HMAC secret.',
  },
  {
    category: 'Algorithms',
    question: 'Why does the "none" algorithm present a security threat?',
    answer:
      'The none algorithm generates tokens lacking a signature. Certain legacy JWT parsers accepted none tokens blindly, enabling threat actors to forge tokens featuring custom claims. Always strictly define permitted algorithms inside your JWT framework and completely block none.',
  },
  {
    category: 'Security',
    question: 'Where is the best place to keep JWTs inside a web browser?',
    answer:
      'Apply HttpOnly, Secure, SameSite=Strict cookies — these cannot be read by JS scripts and remain protected against XSS. Do not use localStorage or sessionStorage — these can be accessed by any JavaScript running on the site, such as XSS payloads. For ultimate safety, store tokens within memory (JS variables) only.',
  },
  {
    category: 'Security',
    question: 'How can I invalidate a JWT ahead of its expiration?',
    answer:
      'Stateless JWTs are unable to be revoked without extra backend systems. Solutions: (1) store a server-side jti blocklist; (2) apply extremely brief expiration windows (5-15 minutes) alongside refresh token rotation; (3) cycle the signing key (invalidates all existing tokens though causes disruption); (4) maintain a session database keyed by sid claim.',
  },
  {
    category: 'Security',
    question: 'What constitutes an algorithm confusion exploit?',
    answer:
      'An adversary alters the alg field from RS256 to HS256 and signs the updated token utilizing the server\'s public key as the HMAC secret. Parsers that infer the algorithm via the token header (instead of static configuration) may validate it successfully. Defense: always hardcode the anticipated algorithm in your verifier.',
  },
  {
    category: 'OAuth and OIDC',
    question: 'What is the difference between an ID token and an access token?',
    answer:
      'Within OpenID Connect, an ID token represents a JWT destined for the client app demonstrating user identity (housing profile claims). An access token targets resource servers granting permission for what the holder may execute. Never submit an ID token as a bearer token for API requests — its audience belongs to the client application, not the API.',
  },
  {
    category: 'OAuth and OIDC',
    question: 'What defines a JWKS endpoint and what makes it significant?',
    answer:
      'Exposing the active public credentials of an identity provider, a JSON Web Key Set (JWKS) endpoint serves as an openly accessible web resource. Validating services query this endpoint to retrieve the key matching the kid declared within the JWT header. Through this model, JWKS facilitates zero-downtime key rotation: introduce a new key, issue fresh tokens with it, wait until older tokens expire, and finally purge the obsolete key.',
  },
  {
    category: 'Debugging',
    question: 'Why do I receive 401 Unauthorized using a seemingly valid token?',
    answer:
      'Run our decoder and verify sequentially: (1) exp &#8212; has the token lapsed? (2) aud &#8212; is it the right audience for your API? (3) iss &#8212; does it align with your set issuer? (4) alg &#8212; does it fit your server setup? These four verifications fix almost all JWT 401 errors.',
  },
  {
    category: 'Debugging',
    question: 'Why are certain claims absent from my token?',
    answer:
      'Absent claims typically indicate that the relevant OAuth 2.0 scope wasn\'t asked for when authorizing. Regarding OIDC: the email claim needs the email scope, and profile info demands the profile scope. User-defined claims such as roles demand specific setup on the authorization server (actions, rules, or claim mappers).',
  },
  {
    category: 'Debugging',
    question: 'My token functions fine in development yet breaks in production. Why is that?',
    answer:
      'Analyze and contrast iss, aud, along with alg parameters across both tokens. Typical triggers: mismatch between staging and production auth server URLs in iss, varying client IDs within aud, mismatched signing keys (verify production uses proper JWKS or secrets), or time synchronization drift among applications.',
  },
  {
    category: 'Technical',
    question: 'What is Base64URL encoding?',
    answer:
      'Serving as a web-compatible variant of Base64, Base64URL substitutes - for +, swaps _ for /, and completely strips trailing = characters. Because of this structure, token strings sit comfortably within URLs, HTTP headers, and cookie storage without URL encoding. Our decoder seamlessly processes Base64URL strings, accepting tokens with or without an existing Bearer prefix.',
  },
  {
    category: 'Technical',
    question: 'Is it possible to encrypt JWT payloads?',
    answer:
      'Standard JSON Web Signature structures (JWS) incorporate integrity signatures but lack confidentiality; anyone can read their payload contents. By contrast, encrypted tokens known as JWEs (JSON Web Encryption) consist of five segments and hide their payloads completely from parties lacking the appropriate decryption key. This decoder parses JWS formats, whereas handling JWE items requires access to your private key.',
  },
  {
    category: 'Technical',
    question: 'What does the kid claim mean and how do key rotation workflows leverage it?',
    answer:
      'The kid (Key ID) found in a JWT header specifies the exact public key utilized for signing that token. Throughout key rotation, several keys exist inside JWKS simultaneously &#8211; each featuring a distinct kid. Verifiers rely on kid to locate the proper key instead of testing every option, ensuring seamless rotation without breaking active sessions.',
  },
];

export const jwtDecoderContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
