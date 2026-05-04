import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>JWT Decoder: Free Online JSON Web Token Inspector, Debugger, and Validator</h2>
        <p>
          JSON Web Tokens (JWTs) are the dominant mechanism for authentication and authorization in modern
          web applications, REST APIs, mobile backends, and microservices. They power OAuth 2.0 flows,
          OpenID Connect identity layers, machine-to-machine service authentication, and single sign-on
          systems used by millions of applications worldwide. When something breaks "” a 401 Unauthorized
          response, an expired token error, a missing claim, a mismatched audience "” you need to see
          inside the token immediately to diagnose the problem.
        </p>
        <p>
          Our free JWT decoder lets you paste any JWT string and instantly view the decoded header, payload,
          and signature in human-readable JSON format. The tool converts Unix timestamps to readable dates,
          flags expired tokens, identifies the signing algorithm, highlights known security concerns, and
          lets you inspect every claim without sending any data to a remote server. Everything runs locally
          in your browser using JavaScript "” your tokens stay completely private.
        </p>
        <p>
          Whether you are a backend engineer debugging a 401 response at midnight, a security engineer
          auditing token configuration, a frontend developer inspecting what claims are available after
          login, or a student learning about JWT-based authentication systems for the first time, this tool
          gives you the clarity you need instantly.
        </p>

        <h2>What Is a JSON Web Token (JWT)?</h2>
        <p>
          A JSON Web Token is a compact, URL-safe string that encodes claims "” assertions about a subject
          "” in a format that can be cryptographically verified. The JWT specification is defined in
          RFC 7519 by the Internet Engineering Task Force (IETF) and has become the de facto standard for
          stateless authentication in distributed systems.
        </p>
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
        <p>
          The JWT header is a Base64URL-encoded JSON object that acts as metadata about the token itself.
          At minimum it contains the <code>alg</code> field specifying the signing algorithm. A typical
          header looks like:
        </p>
        <p>
          <code>&#123;"alg": "HS256", "typ": "JWT"&#125;</code>
        </p>
        <p>
          The <code>typ</code> (Type) field is almost always <code>"JWT"</code>, distinguishing JSON Web
          Tokens from other token types. In some advanced scenarios involving JWEs (JSON Web Encryption)
          or nested JWTs, the type may be <code>"JWE"</code> or another value.
        </p>
        <p>
          The <code>alg</code> (Algorithm) field is critical for security. It tells the receiving party
          which algorithm to use when verifying the signature. The supported algorithms under the JSON Web
          Algorithms (JWA) specification defined in RFC 7518 are:
        </p>

        <h3>Symmetric Algorithms (HMAC)</h3>
        <p>
          HMAC-based algorithms use a single shared secret for both signing and verification. They are
          appropriate when all parties that need to verify the token are trusted and can securely access
          the same secret:
        </p>
        <ul>
          <li><strong>HS256</strong> "” HMAC with SHA-256, the most widely used JWT signing algorithm</li>
          <li><strong>HS384</strong> "” HMAC with SHA-384, stronger but rarely needed</li>
          <li><strong>HS512</strong> "” HMAC with SHA-512, maximum HMAC strength</li>
        </ul>

        <h3>Asymmetric Algorithms (RSA)</h3>
        <p>
          RSA algorithms use a private key for signing and a public key for verification. The private key
          is kept secret by the issuer; the public key can be distributed freely to any service that needs
          to verify tokens:
        </p>
        <ul>
          <li><strong>RS256</strong> "” RSA PKCS#1 v1.5 signature with SHA-256</li>
          <li><strong>RS384</strong> "” RSA PKCS#1 v1.5 signature with SHA-384</li>
          <li><strong>RS512</strong> "” RSA PKCS#1 v1.5 signature with SHA-512</li>
          <li><strong>PS256</strong> "” RSA-PSS signature with SHA-256 (more secure padding than PKCS#1)</li>
          <li><strong>PS384</strong> "” RSA-PSS signature with SHA-384</li>
          <li><strong>PS512</strong> "” RSA-PSS signature with SHA-512</li>
        </ul>

        <h3>Asymmetric Algorithms (ECDSA)</h3>
        <p>
          Elliptic Curve Digital Signature Algorithm provides equivalent security to RSA with significantly
          smaller key sizes, making it ideal for constrained environments and high-throughput systems:
        </p>
        <ul>
          <li><strong>ES256</strong> "” ECDSA with P-256 curve and SHA-256</li>
          <li><strong>ES384</strong> "” ECDSA with P-384 curve and SHA-384</li>
          <li><strong>ES512</strong> "” ECDSA with P-521 curve and SHA-512</li>
        </ul>

        <h3>The Dangerous "none" Algorithm</h3>
        <p>
          The <code>none</code> algorithm specifies an unsigned token "” there is no signature. This value
          exists in the specification for situations where integrity is guaranteed by other means, but in
          practice it has been the source of severe security vulnerabilities. Several early JWT libraries
          accepted <code>none</code> tokens without checking, allowing attackers to craft arbitrary tokens
          with any claims they chose. Always explicitly specify allowed algorithms in your JWT library
          configuration and categorically reject <code>none</code>.
        </p>

        <h3>The kid (Key ID) Header Claim</h3>
        <p>
          The <code>kid</code> header parameter is an optional identifier for the signing key used. When
          a server rotates signing keys "” which should happen regularly for security "” it publishes multiple
          public keys in a JSON Web Key Set (JWKS). The <code>kid</code> in the JWT header tells verifiers
          which key to use for validation, allowing smooth key rotation without invalidating all existing
          tokens simultaneously. Our decoder displays the <code>kid</code> value prominently to help
          diagnose key rotation issues.
        </p>

        <h2>Anatomy of the JWT Payload: Claims Deep Dive</h2>
        <p>
          The payload is where the meaningful data lives. RFC 7519 defines three categories of claims:
          registered claims (standardized by the spec), public claims (registered in the IANA JSON Web
          Token Claims registry), and private claims (application-specific, agreed upon by parties).
        </p>

        <h3>Registered Claims: The Seven Standard Fields</h3>
        <p>
          These seven claim names are reserved and have specific semantic meanings defined by the
          specification. All are optional but widely used:
        </p>

        <h4>iss "” Issuer</h4>
        <p>
          The <code>iss</code> claim identifies the principal that issued the JWT. It is typically the
          URL of the authorization server: <code>https://auth.example.com</code>,
          <code>https://accounts.google.com</code>, or <code>https://your-tenant.auth0.com/</code>.
          Resource servers must validate that the issuer matches the expected authority. An incorrect or
          missing <code>iss</code> should cause the token to be rejected immediately.
        </p>

        <h4>sub "” Subject</h4>
        <p>
          The <code>sub</code> claim is the unique identifier for the principal the token represents "”
          almost always a user ID. It should be locally unique within the issuer context and stable for
          the lifetime of the account. Do not use mutable values like email addresses as the subject "”
          users can change their email but their ID should be permanent.
        </p>

        <h4>aud "” Audience</h4>
        <p>
          The <code>aud</code> claim identifies the intended recipients of the JWT "” the services or
          applications that are allowed to accept and use it. It can be a string or an array of strings.
          Resource servers must verify that their own identifier appears in the audience claim before
          processing the token. Audience validation prevents token confusion attacks where a token issued
          for Service A is presented to Service B.
        </p>

        <h4>exp "” Expiration Time</h4>
        <p>
          The <code>exp</code> claim is a Unix timestamp (seconds since January 1, 1970 UTC) after which
          the token must not be accepted for processing. This is the single most frequently misconfigured
          claim and the number-one cause of "valid-looking but rejected" tokens. Our decoder converts the
          raw numeric timestamp to a human-readable date and time in both UTC and local time, and tells
          you whether the token is currently expired, how long ago it expired, or how long until it expires.
        </p>
        <p>
          Short-lived access tokens (15 minutes to 1 hour) dramatically limit the damage from token theft.
          Use refresh tokens for maintaining long-lived sessions rather than issuing long-lived access tokens.
        </p>

        <h4>nbf "” Not Before</h4>
        <p>
          The <code>nbf</code> claim is a Unix timestamp before which the token must not be accepted. It
          is less commonly used than <code>exp</code> but useful for tokens that should only become valid
          at a future time "” for instance, a scheduled batch job token that should not be usable until
          the scheduled start time.
        </p>

        <h4>iat "” Issued At</h4>
        <p>
          The <code>iat</code> claim records when the token was issued as a Unix timestamp. Together with
          <code>exp</code>, it defines the token's lifetime. It is also useful for detecting tokens that
          pre-date a password change or account compromise event "” if a user resets their password, any
          token with an <code>iat</code> before the reset time should be invalidated.
        </p>

        <h4>jti "” JWT ID</h4>
        <p>
          The <code>jti</code> claim is a unique identifier for the specific JWT instance, similar to a
          nonce. It enables token blocklisting and replay prevention: once a single-use token has been
          consumed, its <code>jti</code> is stored and any subsequent presentation of a token with the
          same <code>jti</code> is rejected. The JTI value must be unique per token and per issuer.
        </p>

        <h3>Common Private Claims in Practice</h3>
        <p>
          Beyond registered claims, real-world JWTs typically carry application-specific data:
        </p>
        <ul>
          <li>
            <strong>email</strong> "” the user's email address (OIDC profile scope)
          </li>
          <li>
            <strong>name / given_name / family_name</strong> "” user display name components (OIDC)
          </li>
          <li>
            <strong>picture</strong> "” URL to the user's profile photo (OIDC)
          </li>
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
          <li>
            <strong>nonce</strong> "” value bound to the OIDC authorization request to prevent replay
          </li>
          <li>
            <strong>at_hash / c_hash</strong> "” hash values binding the ID token to an access token or code
          </li>
        </ul>

        <h2>JWT Signature: Integrity Without Secrecy</h2>
        <p>
          The signature is computed by taking the Base64URL-encoded header, concatenating a dot, concatenating
          the Base64URL-encoded payload, and applying the signing algorithm with the secret or private key.
          For HS256:
        </p>
        <p>
          <code>HMAC-SHA256(base64url(header) + "." + base64url(payload), secret)</code>
        </p>
        <p>
          For RS256:
        </p>
        <p>
          <code>RSA-SHA256-Sign(base64url(header) + "." + base64url(payload), privateKey)</code>
        </p>
        <p>
          The signature prevents tampering: if an attacker modifies any bit of the header or payload and
          recomputes Base64URL encoding, the signature will no longer match because they do not have the
          signing key. Note that the payload is encoded, not encrypted "” anyone who has the JWT can read
          the claims. Never put sensitive data like passwords, SSNs, or credit card numbers in a JWT
          payload.
        </p>

        <h2>Decoding vs Verifying: A Critical Distinction</h2>
        <p>
          Our decoder shows you the contents of the JWT header and payload by reversing the Base64URL
          encoding. This operation requires no secret and no key "” any party can decode any JWT. This is
          by design: the payload is not a secret; it is a set of claims that can be read by anyone who
          receives the token.
        </p>
        <p>
          Verification is an entirely different operation. It uses the secret key (for HMAC) or public key
          (for RSA/ECDSA) to recompute the expected signature and compare it against the provided signature.
          If they match, the token was genuinely issued by the holder of the key and has not been altered.
          Only after successful verification should any application trust the claims in the payload.
        </p>
        <p>
          Our tool optionally performs signature verification for RS256 and ES256 tokens using the Web Crypto
          API entirely in your browser. Paste a public key or JWKS JSON alongside the token to verify it
          client-side. For HS256 verification, you can optionally provide your secret "” it never leaves
          your browser.
        </p>

        <h2>JSON Web Key Sets (JWKS) and Key Rotation</h2>
        <p>
          Major identity providers publish their public signing keys at a well-known JWKS URL:
        </p>
        <ul>
          <li>Google: <code>https://www.googleapis.com/oauth2/v3/certs</code></li>
          <li>Microsoft: <code>https://login.microsoftonline.com/common/discovery/v2.0/keys</code></li>
          <li>Auth0: <code>https://your-tenant.auth0.com/.well-known/jwks.json</code></li>
        </ul>
        <p>
          A JWKS is a JSON object containing an array of JSON Web Keys (JWK). Each key has properties
          including <code>kty</code> (key type: RSA, EC, oct), <code>kid</code> (key ID matching the JWT
          header), <code>use</code> (sig for signing, enc for encryption), and the key material itself
          (n and e for RSA, x and y for EC).
        </p>
        <p>
          Key rotation is a security best practice: regularly replace the signing key pair so that even if
          an old key is compromised, exposure is limited. The rotation process: (1) generate new key pair;
          (2) add new public key to JWKS alongside old key; (3) start signing new tokens with new private
          key; (4) wait for all tokens signed with old key to expire; (5) remove old public key from JWKS.
          The <code>kid</code> header claim makes this process seamless "” verifiers look up the right key
          by ID rather than needing to know which key is current.
        </p>

        <h2>JWT in OAuth 2.0 and OpenID Connect</h2>
        <p>
          OAuth 2.0 is an authorization framework defining how applications obtain delegated access to
          resources on behalf of users. OpenID Connect (OIDC) is a thin identity layer built on top of
          OAuth 2.0 that standardizes user authentication.
        </p>
        <p>
          In an OIDC flow, the identity provider returns two tokens: an <strong>access token</strong> for
          calling APIs (often a JWT), and an <strong>ID token</strong> (always a JWT) containing the user's
          identity. The ID token is for the client application "” it proves who the user is. The access
          token is for resource servers "” it proves what the bearer is authorized to do.
        </p>
        <p>
          A common mistake is using the ID token as a bearer token for API calls. The <code>aud</code>
          claim of an ID token is the client ID, not the API "” resource servers should reject it. Always
          use the access token for API authorization.
        </p>
        <p>
          Our decoder is particularly useful during OIDC integration: paste the ID token to check that
          <code>iss</code> matches the provider URL, <code>aud</code> matches your client ID,
          <code>nonce</code> matches what you sent in the authorization request, and <code>exp</code>
          shows the token has not expired.
        </p>

        <h2>JWT in Microservices: Service-to-Service Authentication</h2>
        <p>
          Modern microservice architectures need a way for services to authenticate to each other without
          user involvement. Machine-to-machine (M2M) JWTs solve this problem. A central identity server
          issues short-lived JWTs to services using the OAuth 2.0 Client Credentials flow. These tokens
          carry claims identifying the originating service and the services it is authorized to call.
        </p>
        <p>
          In a typical microservice scenario: Service A needs to call Service B. Service A fetches an
          access token from the identity server using its client ID and secret. It attaches the token to
          the request to Service B. Service B verifies the token signature using the identity server's
          public key (from JWKS), validates the audience claim matches its own identifier, and processes
          the request.
        </p>
        <p>
          Decoding the M2M token with our tool helps diagnose: wrong issuer, audience mismatch, token
          already expired (M2M tokens should be cached and reused until near expiry, not fetched on every
          request), or missing scope claims.
        </p>

        <h2>Common JWT Debugging Scenarios</h2>

        <h3>401 Unauthorized: The Most Common JWT Problem</h3>
        <p>
          When your API returns 401 with a valid-looking JWT, work through this diagnostic checklist using
          our decoder:
        </p>
        <p>
          First, check <code>exp</code>. Is the token expired? This is the most frequent cause "” tokens
          issued during development expire, or client code fails to refresh tokens properly.
        </p>
        <p>
          Second, check <code>aud</code>. Does the audience match what your API expects? A token issued
          for <code>https://api.example.com</code> presented to <code>https://admin.example.com</code>
          will be rejected by a properly configured API.
        </p>
        <p>
          Third, check <code>iss</code>. Does the issuer match your API's configured issuer? A staging
          token presented to production will fail.
        </p>
        <p>
          Fourth, check <code>alg</code>. Does the algorithm match what your server expects? A server
          configured to only accept RS256 will reject HS256 tokens and vice versa.
        </p>
        <p>
          Fifth, check clock skew. If your server time is slightly ahead of the token's <code>exp</code>
          but the token looks like it has seconds left, time synchronization between services may be the
          issue. Most JWT libraries accept a small clock skew tolerance (30-60 seconds).
        </p>

        <h3>Missing Claims After Login</h3>
        <p>
          If your application expects a <code>role</code>, <code>email</code>, or <code>permissions</code>
          claim that is not present, the problem is almost always the OAuth 2.0 scopes requested. Most
          providers only include claims corresponding to requested scopes:
        </p>
        <ul>
          <li><code>openid</code> scope â†’ <code>sub</code> claim</li>
          <li><code>profile</code> scope â†’ <code>name</code>, <code>given_name</code>, <code>picture</code></li>
          <li><code>email</code> scope â†’ <code>email</code>, <code>email_verified</code></li>
        </ul>
        <p>
          Custom claims like roles or permissions usually require explicit configuration on the authorization
          server "” often called "rules", "actions", or "claim mappers" depending on the provider.
        </p>

        <h3>Token Works in Development But Fails in Production</h3>
        <p>
          Decode both tokens (development and production) side by side. The most likely differences are:
          different issuers (staging vs production auth server URL), different audiences, different signing
          keys (wrong key configured in production), or different token lifetimes.
        </p>

        <h2>JWT Security: Attack Vectors and Mitigations</h2>

        <h3>Algorithm Confusion Attacks</h3>
        <p>
          In an algorithm confusion attack, an attacker takes a JWT signed with RS256, changes the
          <code>alg</code> header to <code>HS256</code>, and signs the token using the RS256 public key
          as the HMAC secret. Libraries that do not explicitly validate the expected algorithm may
          attempt HS256 verification using the public key "” and succeed, because the attacker signed with
          exactly that value.
        </p>
        <p>
          Mitigation: always explicitly specify the expected algorithm in your JWT library configuration.
          Never determine the algorithm from the token header "” the header is attacker-controlled.
        </p>

        <h3>JWT Injection</h3>
        <p>
          If your application constructs JWT payloads from user-supplied input without proper sanitization,
          an attacker may inject additional claims or override existing ones (in non-standard library
          implementations). Always construct the payload from server-side authoritative sources, not from
          user input.
        </p>

        <h3>Replay Attacks</h3>
        <p>
          A stolen JWT can be presented by an attacker as if they were the legitimate user until the token
          expires. Mitigations: use short expiration times, implement token binding (binding tokens to
          client certificates), use refresh token rotation with revocation, and include the <code>jti</code>
          claim for single-use tokens.
        </p>

        <h3>Sensitive Data in Payload</h3>
        <p>
          JWT payloads are Base64URL encoded, not encrypted. Anyone who intercepts or receives the token
          can read all claims. Never include passwords, social security numbers, credit card numbers,
          medical records, or other sensitive personal data in JWT claims. Include only the minimum
          necessary claims for authorization decisions.
        </p>

        <h2>JWT Best Practices: A Complete Reference</h2>

        <h3>Algorithm Selection</h3>
        <p>
          For most applications: use RS256 (or ES256 for smaller key sizes). RS256 allows the token
          issuer to keep the private signing key secret while distributing the public verification key
          to all resource servers "” resource servers can verify tokens but cannot mint new ones, providing
          defense in depth. HS256 is appropriate only when all verifying parties are fully trusted and
          can securely share the signing secret.
        </p>

        <h3>Token Lifetime</h3>
        <p>
          Access tokens: 15 minutes to 1 hour is a reasonable range for most applications. Highly sensitive
          applications (banking, healthcare) should use 5-15 minutes. Refresh tokens: 24 hours to 30 days
          depending on your session requirements, with rotation and revocation support.
        </p>
        <p>
          Never issue access tokens with multi-day lifetimes. A stolen 90-day access token gives an
          attacker three months of unrestricted access. A stolen 15-minute token has a narrow window.
        </p>

        <h3>Storage in Browsers</h3>
        <p>
          Store tokens in memory (JavaScript variables) for the most security "” they disappear when the
          tab is closed. For persistent sessions, use HttpOnly, Secure, SameSite=Strict cookies, which
          cannot be accessed by JavaScript and are therefore immune to XSS attacks. Avoid localStorage and
          sessionStorage "” they are accessible to any JavaScript running on the page, including injected
          malicious scripts.
        </p>

        <h3>Claim Validation</h3>
        <p>
          Always validate: <code>iss</code> (must match expected issuer), <code>aud</code> (must include
          your service), <code>exp</code> (must be in the future), <code>nbf</code> (must be in the past
          if present), and the signature (must verify with the expected key using the explicitly configured
          algorithm). Validate all of these on every request "” do not cache validation results beyond the
          token lifetime.
        </p>

        <h3>Minimal Payload</h3>
        <p>
          Keep JWT payloads small. Every claim adds bytes to every request. Include only what is needed
          for authorization decisions. Fetch detailed user profiles from a database using the <code>sub</code>
          claim rather than embedding all profile data in the token. This keeps tokens small, reduces the
          attack surface from exposed claims, and avoids stale data problems when user attributes change.
        </p>

        <h2>Base64URL Encoding: Technical Details</h2>
        <p>
          Standard Base64 encodes 3 bytes of binary data as 4 ASCII characters using the alphabet
          <code>A-Z a-z 0-9 + /</code> with <code>=</code> padding. This is not URL-safe because
          <code>+</code> and <code>/</code> are meaningful in URLs and HTTP headers.
        </p>
        <p>
          Base64URL substitutes <code>+</code> â†’ <code>-</code> and <code>/</code> â†’ <code>_</code>, and
          omits the <code>=</code> padding characters. The result can appear in URL path segments, query
          parameters, and HTTP headers without any percent-encoding.
        </p>
        <p>
          Our decoder handles Base64URL automatically. You can paste JWT strings directly "” with or without
          the <code>Bearer</code> prefix "” and the tool strips it and decodes correctly.
        </p>

        <h2>JWT Libraries by Language and Platform</h2>
        <p>
          Choosing the right JWT library is important "” not all libraries validate all security properties
          by default. Use maintained, widely-audited libraries and configure them explicitly:
        </p>

        <h3>Node.js / JavaScript</h3>
        <ul>
          <li><code>jsonwebtoken</code> (Auth0) "” the most popular; good defaults but configure <code>algorithms</code> explicitly</li>
          <li><code>jose</code> "” modern, comprehensive JWK/JWKS support, OIDC-ready</li>
          <li><code>@auth0/jwt-decode</code> "” client-side decode only, no verification</li>
        </ul>

        <h3>Python</h3>
        <ul>
          <li><code>PyJWT</code> "” clean API, good defaults; configure <code>algorithms</code> parameter</li>
          <li><code>python-jose</code> "” JWK/JWKS support</li>
          <li><code>authlib</code> "” full OAuth 2.0 + OIDC implementation including JWT</li>
        </ul>

        <h3>Java</h3>
        <ul>
          <li><code>java-jwt</code> (Auth0) "” popular, expressive API</li>
          <li><code>jjwt</code> (Stormpath/JJWT) "” type-safe builder pattern</li>
          <li><code>nimbus-jose-jwt</code> "” most complete JWA/JWE support</li>
          <li><code>Spring Security OAuth2</code> "” integrated with Spring ecosystem</li>
        </ul>

        <h3>Go</h3>
        <ul>
          <li><code>golang-jwt/jwt</code> "” idiomatic Go, actively maintained fork of dgrijalva/jwt-go</li>
          <li><code>lestrrat-go/jwx</code> "” comprehensive JWK, JWE, JWS, JWT support</li>
        </ul>

        <h3>.NET</h3>
        <ul>
          <li><code>System.IdentityModel.Tokens.Jwt</code> "” Microsoft's official library</li>
          <li><code>Microsoft.AspNetCore.Authentication.JwtBearer</code> "” ASP.NET Core middleware</li>
        </ul>

        <h3>Ruby</h3>
        <ul>
          <li><code>ruby-jwt</code> "” simple, widely used</li>
          <li><code>omniauth-jwt</code> "” OmniAuth strategy using JWT</li>
        </ul>

        <h3>PHP</h3>
        <ul>
          <li><code>firebase/php-jwt</code> "” maintained by Firebase</li>
          <li><code>lcobucci/jwt</code> "” type-safe, modern PHP 8 API</li>
        </ul>

        <h3>Rust</h3>
        <ul>
          <li><code>jsonwebtoken</code> "” safe, well-maintained Rust implementation</li>
        </ul>

        <h2>Comparing Our JWT Decoder to Alternatives</h2>

        <h3>jwt.io</h3>
        <p>
          The jwt.io debugger created by Auth0 is the most well-known JWT tool. It is feature-rich and
          supports signature verification. However, it sends token data to Auth0's servers in some
          configuration modes and embeds Auth0 branding throughout. Our tool performs all decoding and
          verification client-side with zero server involvement and no third-party embedding.
        </p>

        <h3>Local Development Tools</h3>
        <p>
          Some developers use command-line tools like <code>jwt-cli</code> or base64 decoding in a terminal.
          Our online tool is faster to reach, provides syntax highlighting and expiration detection, and
          requires no installation "” ideal for quick inspection during debugging sessions.
        </p>

        <h2>Privacy and Security of Our Tool</h2>
        <p>
          All JWT decoding and verification runs entirely in your browser. The JavaScript that processes
          your token is delivered to your browser and runs locally "” no token data, no payload contents,
          no signature values are transmitted to our servers or any third party. The page makes no API
          calls during the decode operation.
        </p>
        <p>
          We do not log tokens, store them in any database, include third-party analytics that might capture
          input field contents, or use service workers that could intercept network traffic. You can safely
          decode tokens containing sensitive claims including user IDs, email addresses, permissions, and
          tenant identifiers.
        </p>
        <p>
          That said, adopt good hygiene: avoid sharing production administrator tokens with any tool out
          of habit. For tokens with the highest privilege levels, decode in a local tool or IDE. But for
          the daily work of debugging authentication flows, our browser-based decoder is the fastest and
          most convenient option available.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a JWT decoder and what does it show?',
    answer:
      'A JWT decoder splits a JSON Web Token on the dot separator and Base64URL-decodes each of the three segments "” header, payload, and signature "” into readable JSON. Our decoder also converts Unix timestamps to human-readable dates, flags expired tokens, identifies the signing algorithm, and highlights the key ID (kid) claim.',
  },
  {
    category: 'General',
    question: 'Is it safe to decode my JWT in this online tool?',
    answer:
      'Yes "” our tool decodes entirely in your browser using JavaScript. No data is transmitted to any server. For the highest-privilege production tokens (admin credentials, etc.), you may prefer a local tool, but for everyday debugging this tool is safe.',
  },
  {
    category: 'General',
    question: 'What are the three parts of a JWT?',
    answer:
      'A JWT has three Base64URL-encoded segments separated by dots: (1) Header "” contains the algorithm (alg) and token type (typ); (2) Payload "” contains the claims (iss, sub, aud, exp, iat, and custom claims); (3) Signature "” cryptographic proof that the header and payload have not been tampered with.',
  },
  {
    category: 'General',
    question: 'What is the difference between decoding and verifying a JWT?',
    answer:
      'Decoding reverses the Base64URL encoding to reveal the JSON "” anyone can do this without any key. Verification uses a cryptographic key to confirm the signature is valid and the payload has not been altered. Never trust decoded claims without server-side verification.',
  },
  {
    category: 'General',
    question: 'Can I see the signature content by decoding a JWT?',
    answer:
      'Yes "” our decoder shows the raw Base64URL-encoded signature value. However, the signature is binary data; it does not decode to meaningful human-readable text. Its purpose is to be verified cryptographically using the signing key, not read directly.',
  },
  {
    category: 'Claims',
    question: 'What does the exp claim mean and how do I read it?',
    answer:
      'The exp (Expiration Time) claim is a Unix timestamp "” seconds since January 1 1970 UTC "” after which the token must be rejected. Our decoder converts it to a human-readable date like "2025-12-31 23:59:59 UTC" and tells you whether the token is currently expired, expired X minutes ago, or expires in X minutes.',
  },
  {
    category: 'Claims',
    question: 'What is the aud claim and why does it cause 401 errors?',
    answer:
      'The aud (Audience) claim specifies which services are permitted to accept the token. A correctly-configured API rejects any token whose aud does not include its own identifier. Presenting a token issued for Service A to Service B is a common source of 401 errors "” decode the token and check the aud value against what your API expects.',
  },
  {
    category: 'Claims',
    question: 'What is the difference between iss and sub?',
    answer:
      'iss (Issuer) identifies who created and signed the token "” the authorization server URL. sub (Subject) identifies who the token is about "” typically the user ID. The iss says "Google issued this token"; the sub says "it is about user ID 1234567890".',
  },
  {
    category: 'Claims',
    question: 'What is the scope claim in a JWT?',
    answer:
      'The scope claim is used in OAuth 2.0 access tokens to list the permissions granted to the bearer as a space-separated string: "read:users write:posts admin:billing". Resource servers use the scope to determine what operations the token authorizes.',
  },
  {
    category: 'Claims',
    question: 'What is the jti claim?',
    answer:
      'The jti (JWT ID) is a unique identifier for a specific token instance. It enables replay prevention for single-use tokens "” the server stores used jti values and rejects tokens presenting the same jti twice. It is also useful for token revocation via blocklist.',
  },
  {
    category: 'Algorithms',
    question: 'What does HS256 mean in a JWT header?',
    answer:
      'HS256 means HMAC with SHA-256. It is a symmetric algorithm "” the same secret key is used for both signing and verification. It is the most commonly used JWT signing algorithm and is suitable when all parties that need to verify tokens also need to be trusted with the signing secret.',
  },
  {
    category: 'Algorithms',
    question: 'When should I use RS256 instead of HS256?',
    answer:
      'Use RS256 for distributed systems where multiple services verify tokens. With RS256, the authorization server holds the private signing key; resource servers only need the public key from JWKS. They can verify tokens but cannot mint new ones "” a significant security improvement over sharing an HMAC secret.',
  },
  {
    category: 'Algorithms',
    question: 'Why is the "none" algorithm a security risk?',
    answer:
      'The none algorithm produces tokens with no signature. Some early JWT libraries accepted none tokens without checking, allowing attackers to forge tokens with arbitrary claims. Always explicitly configure allowed algorithms in your JWT library and categorically reject none.',
  },
  {
    category: 'Security',
    question: 'Where should I store JWTs in a browser?',
    answer:
      'Use HttpOnly, Secure, SameSite=Strict cookies "” they cannot be accessed by JavaScript and are immune to XSS. Avoid localStorage and sessionStorage "” they are accessible to any JavaScript on the page, including injected malicious scripts. For maximum security, keep tokens in memory (JavaScript variables) only.',
  },
  {
    category: 'Security',
    question: 'How do I revoke a JWT before it expires?',
    answer:
      'Stateless JWTs cannot be revoked without additional infrastructure. Options: (1) maintain a server-side jti blocklist; (2) use very short expiration times (5-15 minutes) with refresh token rotation; (3) rotate the signing key (invalidates all tokens but is disruptive); (4) maintain a session table indexed by sid claim.',
  },
  {
    category: 'Security',
    question: 'What is an algorithm confusion attack?',
    answer:
      'An attacker changes the alg field from RS256 to HS256 and signs the modified token using the server&#39;s public key as the HMAC secret. Libraries that determine the algorithm from the token header (rather than explicit configuration) may verify it successfully. Mitigation: always hardcode the expected algorithm in your verifier.',
  },
  {
    category: 'OAuth and OIDC',
    question: 'What is the difference between an ID token and an access token?',
    answer:
      'In OpenID Connect, an ID token is a JWT for the client application proving who the user is (contains identity claims). An access token is for resource servers authorizing what the bearer can do. Never use an ID token as a bearer token for API calls "” its audience is the client app, not the API.',
  },
  {
    category: 'OAuth and OIDC',
    question: 'What is a JWKS endpoint and why does it matter?',
    answer:
      'A JSON Web Key Set (JWKS) endpoint is a public URL exposing the authorization server&#39;s current public keys. Verifiers fetch it to find the key matching the kid in the JWT header. JWKS enables key rotation without downtime "” publish a new key, sign new tokens with it, wait for old tokens to expire, then remove the old key.',
  },
  {
    category: 'Debugging',
    question: 'Why am I getting 401 Unauthorized with a token that looks valid?',
    answer:
      'Use our decoder and check in order: (1) exp "” is the token expired? (2) aud "” does it match your API&#39;s expected audience? (3) iss "” does it match your configured issuer? (4) alg "” does it match your server configuration? These four checks resolve the vast majority of JWT 401 errors.',
  },
  {
    category: 'Debugging',
    question: 'Why are claims missing from my token?',
    answer:
      'Missing claims usually mean the corresponding OAuth 2.0 scope was not requested during authorization. For OIDC: email claim requires email scope, profile data requires profile scope. Custom claims like roles require explicit configuration on the authorization server (rules, actions, or claim mappers).',
  },
  {
    category: 'Debugging',
    question: 'My token works in development but fails in production. Why?',
    answer:
      'Decode both tokens and compare iss, aud, and alg values. Common causes: staging vs production auth server URL in iss, different client IDs in aud, different signing keys (ensure production has the correct JWKS or secret configured), or clock skew between services.',
  },
  {
    category: 'Technical',
    question: 'What is Base64URL encoding?',
    answer:
      'Base64URL is a URL-safe variant of Base64. It replaces + with -, / with _, and omits = padding. This allows JWT strings to appear in URLs, HTTP headers, and cookie values without percent-encoding. Our decoder handles Base64URL automatically "” paste raw JWTs with or without the Bearer prefix.',
  },
  {
    category: 'Technical',
    question: 'Can JWT payloads be encrypted?',
    answer:
      'Standard JWTs (JWS "” JSON Web Signature) are signed but not encrypted "” the payload is readable by anyone. Encrypted JWTs are called JWEs (JSON Web Encryption) and have five segments. JWE payloads are unreadable without the decryption key. Our decoder handles JWS tokens; JWE decryption requires the private key.',
  },
  {
    category: 'Technical',
    question: 'What is the kid claim and how does key rotation use it?',
    answer:
      'The kid (Key ID) in the JWT header identifies which public key was used to sign the token. During key rotation, multiple keys coexist in JWKS "” each with a unique kid. Verifiers use kid to look up the correct key rather than trying all keys, enabling smooth rotation without invalidating in-flight tokens.',
  },
];

export const jwtDecoderContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
