import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Image to Base64 Converter: The Complete Guide to Base64 Encoding, Data URIs, and Inline Images</h2>
      <p>
        Base64 encoding transforms binary data — images, fonts, audio files, and any other binary file — into a printable ASCII string that can be safely embedded in text-based formats like HTML, CSS, JSON, XML, and email. When you convert an image to Base64, you get a long string of letters, numbers, and symbols that, when decoded, reconstructs the original image exactly. This technique enables images and other binary assets to be embedded directly in documents rather than loaded from external URLs, with significant implications for page loading performance, portability, and security.
      </p>
      <p>
        The term "Base64" refers to the encoding scheme itself: it represents binary data using a set of 64 ASCII characters (A–Z, a–z, 0–9, +, /), plus the = padding character. Base64 is defined in RFC 4648 and is used pervasively across computing — in email (MIME encoding), TLS certificates (PEM format), JSON Web Tokens, data URIs, and hundreds of other contexts where binary data needs to be transmitted in text channels.
      </p>

      <h2>How Base64 Encoding Works</h2>
      <p>
        Understanding the mechanism of Base64 encoding helps you understand why encoded data is always larger than the original and how to work with Base64 programmatically.
      </p>

      <h3>The Encoding Process</h3>
      <p>
        Base64 encodes binary data in groups of 3 bytes (24 bits) at a time:
      </p>
      <ol>
        <li>Take 3 bytes (24 bits) of binary input</li>
        <li>Split the 24 bits into four 6-bit groups</li>
        <li>Map each 6-bit value (0–63) to a character in the Base64 alphabet</li>
        <li>If the input length is not divisible by 3, pad with = characters</li>
      </ol>
      <p>
        The Base64 alphabet maps 6-bit values to characters:
      </p>
      <ul>
        <li>0–25 → A–Z</li>
        <li>26–51 → a–z</li>
        <li>52–61 → 0–9</li>
        <li>62 → +</li>
        <li>63 → /</li>
        <li>Padding → =</li>
      </ul>

      <h3>The Size Overhead</h3>
      <p>
        Because 3 bytes of binary data become 4 Base64 characters (3 bytes × 8 bits = 24 bits → 4 × 6-bit characters), Base64 encoding always expands data by a factor of 4/3 — approximately 33% larger than the original. A 100 KB PNG image becomes approximately 133 KB as a Base64 string. This overhead is a fundamental characteristic of the encoding, not a flaw that can be optimized away.
      </p>
      <p>
        When Base64-encoded data is embedded in CSS or HTML, it also contributes to HTML transfer size. However, modern HTTP compression (gzip, Brotli) compresses Base64 text efficiently, often reducing the effective overhead in transit to closer to 15–20%.
      </p>

      <h3>Base64 URL-Safe Variant</h3>
      <p>
        Standard Base64 uses + and / characters, which have special meanings in URLs (+ means space, / separates path segments). For data intended for use in URLs or filenames, Base64url (Base64 URL-safe) replaces + with - and / with _, and omits padding:
      </p>
      <ul>
        <li>Standard: <code>abc+def/ghi=</code></li>
        <li>URL-safe: <code>abc-def_ghi</code></li>
      </ul>
      <p>
        Base64url is used in JSON Web Tokens (JWTs), OAuth tokens, URL-safe identifiers, and any other context where Base64 data appears in URLs or needs to be URL-safe. When working with data URIs in CSS/HTML, standard Base64 (with + and /) is fine.
      </p>

      <h2>Data URIs: Embedding Images in HTML and CSS</h2>
      <p>
        A data URI (data URL) is a URL scheme defined in RFC 2397 that allows embedding binary data directly in a document. The format is:
      </p>
      <pre><code>{`data:[mediatype][;base64],<data>`}</code></pre>
      <p>
        For a PNG image, a data URI looks like:
      </p>
      <pre><code>{`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...`}</code></pre>
      <p>
        Data URIs can be used anywhere a URL is accepted in HTML or CSS:
      </p>
      <pre><code>{`<!-- Inline image in HTML -->
<img src="data:image/png;base64,iVBORw0KGgo..." alt="Inline image">

<!-- Background image in CSS -->
.icon {
  background-image: url('data:image/png;base64,iVBORw0KGgo...');
}

<!-- Favicon as inline data URI in HTML head -->
<link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo...">

<!-- SVG as inline data URI -->
.logo {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz...');
}

<!-- For SVG, you can also use URL encoding instead of Base64 -->
.logo {
  background-image: url("data:image/svg+xml,%3Csvg xmlns...");
}`}</code></pre>

      <h3>MIME Types for Common Image Formats</h3>
      <ul>
        <li>PNG: <code>image/png</code></li>
        <li>JPEG: <code>image/jpeg</code></li>
        <li>GIF: <code>image/gif</code></li>
        <li>WebP: <code>image/webp</code></li>
        <li>AVIF: <code>image/avif</code></li>
        <li>SVG: <code>image/svg+xml</code></li>
        <li>ICO (favicon): <code>image/x-icon</code> or <code>image/vnd.microsoft.icon</code></li>
        <li>BMP: <code>image/bmp</code></li>
        <li>TIFF: <code>image/tiff</code></li>
      </ul>

      <h2>When to Use Base64 Encoded Images</h2>
      <p>
        Base64 image encoding is not universally beneficial. Understanding when it helps and when it hurts is key to using it effectively.
      </p>

      <h3>Best Use Cases for Base64 Images</h3>

      <h4>Small Icons and UI Elements</h4>
      <p>
        Small images (under ~2–5 KB) that are used immediately on page load benefit from being Base64-encoded inline. Each external image requires a separate HTTP request — for small images, the request overhead (TCP handshake + TLS negotiation + HTTP headers) can exceed the image data transfer itself. Inlining eliminates this overhead.
      </p>
      <p>
        CSS sprites and SVG icon systems address the same problem differently, but Base64 inline data URIs in CSS are a common and effective approach for small UI elements like custom bullet points, rating stars, checkboxes, and loading spinners.
      </p>

      <h4>Email Templates</h4>
      <p>
        Email clients have strict and inconsistent support for externally hosted images. Many corporate email clients block external images by default, showing broken image placeholders until the user explicitly allows images. Embedding images as Base64 in the email HTML ensures they always display, regardless of external image blocking.
      </p>
      <p>
        However, Base64 images in email significantly increase email size, which can affect deliverability (large emails are more likely to be clipped by Gmail, rejected by spam filters with size limits) and loading time. Balance these concerns based on your email use case.
      </p>

      <h4>Self-Contained HTML Documents</h4>
      <p>
        When creating portable HTML documents — email reports, offline pages, documentation bundles, HTML exports from tools — embedding images as Base64 ensures the document is fully self-contained and displays correctly without needing any external resources. This is the primary use case for "save as complete web page" exports from browsers.
      </p>

      <h4>CSS Background Images in Critical Path CSS</h4>
      <p>
        For small images used in the critical rendering path (above-the-fold content), inlining them as Base64 in inline or critical CSS eliminates the render-blocking image requests. This can improve First Contentful Paint (FCP) and Largest Contentful Paint (LCP) metrics for small background images.
      </p>

      <h4>Preventing Resource Hotlinking</h4>
      <p>
        Base64-encoded images cannot be hotlinked — there's no URL to hotlink. For images you want to prevent from being used externally, embedding them as Base64 in CSS ensures they can only be used in the context of your document.
      </p>

      <h3>When NOT to Use Base64 Images</h3>

      <h4>Large Images</h4>
      <p>
        For images larger than ~5–10 KB, the benefits of inlining rarely outweigh the drawbacks:
      </p>
      <ul>
        <li>33% file size increase defeats image optimization efforts</li>
        <li>Base64 strings cannot be cached by the browser independently of the HTML/CSS file — every page load re-downloads the image data, unlike referenced images which can be cached for months</li>
        <li>Base64 data in HTML/CSS increases the size of the document, potentially delaying the start of rendering</li>
        <li>Long Base64 strings make HTML and CSS files significantly harder to read and maintain</li>
      </ul>

      <h4>Frequently Used Images</h4>
      <p>
        Images referenced from multiple pages benefit enormously from browser caching. A 50 KB logo that's loaded on every page of your site is downloaded once and cached for all subsequent page loads if it's an external URL. As a Base64 inline, it's re-downloaded with every page — multiplied across all pages and all users, this can represent significant bandwidth waste.
      </p>

      <h4>Hero Images and Page Photography</h4>
      <p>
        Large photographic images (100 KB–several MB) should always be served as external files with appropriate caching headers, responsive image sizes (srcset), and modern image formats (WebP, AVIF). Base64 encoding a large photograph removes all these optimization opportunities.
      </p>

      <h2>SVG Images and Base64</h2>
      <p>
        SVG images have special considerations when used in data URIs. Because SVG is an XML-based text format, it can be used in data URIs either Base64-encoded or URL-encoded:
      </p>
      <pre><code>{`/* Base64 encoded SVG */
background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+...');

/* URL-encoded SVG (smaller, more readable) */
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E...");

/* Inline SVG in HTML (best for accessibility and styling) */
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <path d="..." fill="currentColor"/>
</svg>`}</code></pre>
      <p>
        For SVGs in CSS, URL-encoding (percent-encoding) is often preferred over Base64 because:
      </p>
      <ul>
        <li>The URL-encoded version is smaller than Base64 (SVG is already text — no binary overhead)</li>
        <li>URL-encoded SVGs can contain CSS custom property references for theming (with some limitations)</li>
        <li>They're more readable in source code</li>
      </ul>
      <p>
        For SVGs used in HTML <code>&lt;img&gt;</code> tags and CSS backgrounds, either approach works. For SVGs that need to respond to CSS (color changes, hover states), inline SVG in HTML is the only approach that allows full CSS control including <code>fill: currentColor</code>.
      </p>

      <h2>Converting Images to Base64 Programmatically</h2>

      <h3>Browser JavaScript (FileReader API)</h3>
      <pre><code>{`// Convert a File object (from file input) to Base64 data URI
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Usage with file input
const input = document.querySelector<HTMLInputElement>('input[type="file"]');
input?.addEventListener('change', async (e) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) {
    const dataUri = await fileToBase64(file);
    // dataUri = "data:image/png;base64,iVBORw0KGgo..."
    document.querySelector('img')!.src = dataUri;
  }
});`}</code></pre>

      <h3>Browser JavaScript (Canvas API)</h3>
      <pre><code>{`// Convert an existing image element to Base64
function imageToBase64(img: HTMLImageElement, format = 'image/png', quality = 0.9): string {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL(format, quality);
  // Returns: "data:image/png;base64,..."
}

// For JPEG with quality control:
const base64Jpeg = imageToBase64(imgEl, 'image/jpeg', 0.85);`}</code></pre>

      <h3>Node.js</h3>
      <pre><code>{`import { readFileSync } from 'fs';

// Synchronous
const imageBuffer = readFileSync('./image.png');
const base64String = imageBuffer.toString('base64');
const dataUri = \`data:image/png;base64,\${base64String}\`;

// Async
import { readFile } from 'fs/promises';
const buffer = await readFile('./image.png');
const base64 = buffer.toString('base64');

// Get MIME type from file extension
import { extname } from 'path';
function getMimeType(filename: string): string {
  const ext = extname(filename).toLowerCase();
  const mimes: Record<string, string> = {
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon', '.avif': 'image/avif',
  };
  return mimes[ext] || 'application/octet-stream';
}`}</code></pre>

      <h3>Python</h3>
      <pre><code>{`import base64
from pathlib import Path

# Encode image file to Base64 string
def image_to_base64(filepath: str, mime_type: str = None) -> str:
    with open(filepath, 'rb') as f:
        image_data = f.read()
    b64_string = base64.b64encode(image_data).decode('utf-8')

    if mime_type:
        return f"data:{mime_type};base64,{b64_string}"
    return b64_string

# Decode Base64 back to image
def base64_to_image(b64_string: str, output_path: str):
    if b64_string.startswith('data:'):
        b64_string = b64_string.split(',', 1)[1]
    image_data = base64.b64decode(b64_string)
    with open(output_path, 'wb') as f:
        f.write(image_data)

# Usage
data_uri = image_to_base64('logo.png', 'image/png')
base64_to_image(data_uri, 'output.png')`}</code></pre>

      <h3>Shell (Linux/Mac)</h3>
      <pre><code>{`# Encode image to Base64
base64 -i image.png -o image.b64
base64 image.png > image.b64

# Inline one-liner for CSS/HTML
echo "data:image/png;base64,$(base64 -i image.png)"

# Decode Base64 back to image
base64 -d image.b64 > output.png
base64 --decode image.b64 > output.png`}</code></pre>

      <h2>Base64 in CSS Preprocessors and Build Tools</h2>

      <h3>Webpack / Vite url-loader</h3>
      <p>
        Modern build tools can automatically inline small images as Base64 during the build process. With webpack's url-loader or asset/inline module type, images below a configurable size threshold are automatically inlined:
      </p>
      <pre><code>{`// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4 KB — inline images smaller than this
          },
        },
      },
    ],
  },
};`}</code></pre>

      <h3>PostCSS and SCSS</h3>
      <p>
        SCSS supports inlining images via the image-url() function in some implementations. The postcss-inline-base64 plugin can automatically replace url() references with base64-encoded versions. Tailwind CSS's JIT engine handles this for utility classes when configured with the right content pipeline.
      </p>

      <h2>Performance Implications</h2>

      <h3>HTTP/2 and Base64 Tradeoffs</h3>
      <p>
        HTTP/2 multiplexes multiple requests over a single connection, dramatically reducing the overhead of multiple image requests. Under HTTP/2, the argument for Base64 inlining (saving HTTP round trips) is much weaker than under HTTP/1.1. On HTTP/2-served sites, Base64 is most beneficial only for images that are:
      </p>
      <ul>
        <li>Very small (under 1–2 KB)</li>
        <li>Used on a single page (no caching benefit from external URL)</li>
        <li>Part of the critical rendering path (must load synchronously with the CSS)</li>
      </ul>
      <p>
        For most image use cases on modern HTTP/2 sites, serving images as external URLs with proper caching headers, CDN delivery, and modern formats (WebP/AVIF) outperforms Base64 inlining at any significant file size.
      </p>

      <h3>Web Fonts and Base64</h3>
      <p>
        Web fonts can also be Base64-encoded and embedded in CSS @font-face declarations, eliminating font file requests. This is occasionally done for icon fonts (single font file used everywhere) but is rarely optimal for text fonts due to the large file sizes and the fact that modern browsers handle font loading efficiently with font-display: swap and preloading.
      </p>

      <h2>Base64 in API Responses and JSON</h2>
      <p>
        REST APIs frequently need to transmit binary image data in JSON responses. Since JSON is text-based, binary data must be Base64-encoded. Common patterns:
      </p>
      <pre><code>{`// API response with Base64 image
{
  "id": "user_123",
  "name": "Jane Doe",
  "avatar": {
    "data": "iVBORw0KGgoAAAANSUhEUgAA...",
    "mimeType": "image/jpeg",
    "encoding": "base64"
  }
}

// Using in JavaScript
const response = await fetch('/api/user/123');
const user = await response.json();
const imgSrc = \`data:\${user.avatar.mimeType};base64,\${user.avatar.data}\`;
document.querySelector('img').src = imgSrc;`}</code></pre>

      <h2>Security Considerations</h2>

      <h3>Content Security Policy (CSP)</h3>
      <p>
        A strict Content Security Policy (CSP) with <code>img-src 'self'</code> blocks Base64 data URIs unless you explicitly allow <code>data:</code> in the img-src directive. To allow inline Base64 images with CSP, add <code>data:</code> to the relevant directive:
      </p>
      <pre><code>{`Content-Security-Policy: img-src 'self' data: https://trusted-cdn.com;
Content-Security-Policy: style-src 'self' 'unsafe-inline';`}</code></pre>
      <p>
        Note: <code>data:</code> URIs in <code>script-src</code> are blocked by default in modern CSP policies and should not be added there. The <code>data:</code> scheme for images is generally safe.
      </p>

      <h3>SVG XSS Risks</h3>
      <p>
        SVG files can contain JavaScript and are a potential XSS vector when served with an incorrect content type. However, SVG images embedded as Base64 data URIs in <code>&lt;img&gt;</code> tags are sandboxed by the browser and cannot execute scripts. SVG content inlined directly in HTML (as <code>&lt;svg&gt;...&lt;/svg&gt;</code>) can execute scripts and must be sanitized if the SVG content comes from user input.
      </p>

      <h3>Phishing with Data URIs</h3>
      <p>
        Data URIs were historically used in phishing attacks to create fake pages without a traceable URL. Modern browsers have mitigated this by blocking top-level navigation to data: URIs (you can't navigate a browser tab to a data: URI from an external link). Data URI images within pages remain fully supported and safe.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is Base64 image encoding?',
    answer: 'Base64 encoding converts binary image data into a text string of ASCII characters that can be embedded in HTML, CSS, JSON, or any text format. The resulting string looks like "iVBORw0KGgo..." and can be used as a data URI (data:image/png;base64,...) anywhere a URL is accepted. Base64 encoded images are about 33% larger than the original binary file.',
  },
  {
    category: 'General',
    question: 'What is a data URI?',
    answer: 'A data URI is a URL that embeds file content directly rather than referencing an external file. Format: data:[mediatype][;base64],<data>. Example: data:image/png;base64,iVBORw0KGgo... can be used as an <img src>, CSS background-image URL, or link href — anywhere a URL is accepted. The browser decodes and displays the image without making an HTTP request.',
  },
  {
    category: 'General',
    question: 'Why does Base64 encoding make files larger?',
    answer: 'Base64 encodes 3 bytes of binary data as 4 ASCII characters (3 bytes × 8 bits = 24 bits → 4 × 6 bits). This 4/3 ratio means Base64 output is approximately 33% larger than the input. A 100 KB image becomes ~133 KB as Base64. This is an inherent property of the encoding — HTTP compression (gzip/Brotli) can partially offset it in transit, reducing effective overhead to ~15–20%.',
  },
  {
    category: 'Usage',
    question: 'When should I use Base64 images?',
    answer: 'Base64 images are best for: small icons and UI elements under 2–5 KB (eliminates HTTP request overhead), email templates (avoids external image blocking), self-contained HTML documents (offline pages, exports), and images in the critical rendering path. Avoid Base64 for large images, images used across many pages (loses browser caching), and hero/photographic images.',
  },
  {
    category: 'Usage',
    question: 'When should I NOT use Base64 images?',
    answer: 'Avoid Base64 for: images larger than ~5 KB (33% size increase outweighs benefits), images used on multiple pages (no caching — re-downloaded every page load), hero images and photography, and HTTP/2 sites where multiple image requests are cheap. External images with proper caching can be served once and cached for months; Base64 images re-download with every HTML/CSS file.',
  },
  {
    category: 'CSS',
    question: 'How do I use a Base64 image as a CSS background?',
    answer: 'Use the full data URI in url(): `.element { background-image: url("data:image/png;base64,iVBORw0KGgo..."); }`. This works for background-image, border-image, list-style-image, and any CSS property that accepts a URL. For small repeating patterns, icons, and UI decorations, this eliminates a separate HTTP request.',
  },
  {
    category: 'HTML',
    question: 'How do I embed a Base64 image in HTML?',
    answer: 'Use the data URI as the src attribute: `<img src="data:image/png;base64,iVBORw0KGgo..." alt="Description">`. Also works for: `<link rel="icon" href="data:image/png;base64,...">` (inline favicon), CSS background-image, and srcset attributes. Always include the correct MIME type (image/png, image/jpeg, image/gif, image/svg+xml, etc.).',
  },
  {
    category: 'SVG',
    question: 'Should I use Base64 or URL encoding for SVG in CSS?',
    answer: 'URL encoding (percent-encoding) is often better for SVG in CSS because SVG is already text — Base64 encoding it adds overhead. URL-encoded SVG is shorter: `url("data:image/svg+xml,%3Csvg%20xmlns=...")`. Base64 SVG works fine but is longer. For SVGs that need CSS color theming, neither works in CSS backgrounds — use inline SVG in HTML for full CSS control including currentColor.',
  },
  {
    category: 'Programming',
    question: 'How do I convert an image to Base64 in JavaScript?',
    answer: 'Browser: use FileReader API: `const reader = new FileReader(); reader.readAsDataURL(file); reader.onload = () => console.log(reader.result)`. Or canvas: `canvas.toDataURL("image/png")`. Node.js: `const b64 = fs.readFileSync("image.png").toString("base64"); const dataUri = "data:image/png;base64," + b64`.',
  },
  {
    category: 'Programming',
    question: 'How do I convert an image to Base64 in Python?',
    answer: '`import base64; with open("image.png", "rb") as f: b64 = base64.b64encode(f.read()).decode("utf-8"); data_uri = f"data:image/png;base64,{b64}"`. To decode back: `image_data = base64.b64decode(b64_string); open("output.png", "wb").write(image_data)`.',
  },
  {
    category: 'Programming',
    question: 'How do I convert a Base64 string back to an image file?',
    answer: 'JavaScript: `const byteCharacters = atob(base64String); const byteArray = new Uint8Array([...byteCharacters].map(c => c.charCodeAt(0))); const blob = new Blob([byteArray], {type: "image/png"}); const url = URL.createObjectURL(blob)`. Node.js: `Buffer.from(base64String, "base64")` then write to file. Python: `base64.b64decode(b64_string)`.',
  },
  {
    category: 'Programming',
    question: 'How do I get only the Base64 string without the data URI prefix?',
    answer: 'A data URI has format `data:image/png;base64,<actual_base64>`. To get just the Base64 string: `const b64 = dataUri.split(",")[1]` in JavaScript, or `b64_string.split(",", 1)[1]` in Python. The prefix `data:image/png;base64,` is metadata needed for data URIs but not for APIs or storage that handle the MIME type separately.',
  },
  {
    category: 'Performance',
    question: 'Does Base64 encoding affect page performance?',
    answer: 'It depends on image size and usage. For very small images (< 2KB), Base64 inlining improves performance by eliminating HTTP requests. For larger images, performance degrades: 33% size increase, no independent browser caching (image re-downloads with HTML/CSS on every page load), increased HTML/CSS parsing time. Under HTTP/2, the benefit of eliminating requests is greatly reduced.',
  },
  {
    category: 'Performance',
    question: 'How does Base64 affect browser caching?',
    answer: 'Base64 images embedded in HTML or CSS are cached together with that file — they cannot be cached independently. If the HTML changes (even for unrelated reasons), the browser re-downloads the Base64 image data. External image URLs are cached independently with their own cache headers (max-age, ETag), often for months. This makes Base64 much less cache-efficient for frequently-used images.',
  },
  {
    category: 'Email',
    question: 'Why is Base64 useful for email images?',
    answer: 'Many corporate email clients (Outlook, enterprise webmail) block external images by default, showing broken image placeholders. Base64-embedded images display without external requests, ensuring they\'re always visible. However, Base64 images increase email file size, which can affect deliverability (large emails may be clipped by Gmail or rejected by size-limited spam filters). Balance based on your audience and email type.',
  },
  {
    category: 'Security',
    question: 'Does CSP (Content Security Policy) affect Base64 images?',
    answer: 'Yes. A CSP with `img-src \'self\'` blocks data: URI images unless you add data: to the directive: `img-src \'self\' data:`. For Base64 images in CSS backgrounds, the style-src policy applies. Always review your CSP when adding Base64 images. Note: data: in script-src is blocked by modern CSP and should not be added — only add data: to img-src or other non-executable directives.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between Base64 and Base64url?',
    answer: 'Standard Base64 uses + and / characters, which have special meanings in URLs. Base64url replaces + with - and / with _, and omits = padding. Base64url is safe for use in URLs, filenames, and JWT tokens. Standard Base64 is fine for data URIs in HTML/CSS. When working with JWTs, OAuth tokens, or URL parameters, use Base64url. When creating data URIs for images, standard Base64 is correct.',
  },
  {
    category: 'Technical',
    question: 'What MIME types should I use for different image formats in data URIs?',
    answer: 'PNG: image/png, JPEG: image/jpeg, GIF: image/gif, WebP: image/webp, AVIF: image/avif, SVG: image/svg+xml, ICO: image/x-icon, BMP: image/bmp. Use the correct MIME type for the image format — browsers use it to decide how to decode and render the image. An incorrect MIME type can cause the image to display incorrectly or not at all.',
  },
  {
    category: 'Build Tools',
    question: 'Can webpack/Vite automatically Base64-encode small images?',
    answer: 'Yes. Webpack\'s Asset Modules with `type: "asset"` and `parser.dataUrlCondition.maxSize` automatically inlines images below the threshold as Base64 and outputs a file URL for larger images. Vite does the same with `build.assetsInlineLimit` (default 4096 bytes). This automates the decision: small images become inline Base64, large images become external files.',
  },
  {
    category: 'JSON',
    question: 'How do APIs use Base64 for image data in JSON?',
    answer: 'REST APIs transmit images in JSON by Base64-encoding the binary data. The JSON field contains the Base64 string and a MIME type field. Example: `{"data": "iVBORw0KGgo...", "mimeType": "image/png"}`. Some APIs use the full data URI format, others just the raw Base64 string. Reconstruct the data URI as `data:${mimeType};base64,${data}` for use in HTML/CSS.',
  },
  {
    category: 'Formats',
    question: 'Can I Base64-encode animated GIFs?',
    answer: 'Yes. An animated GIF can be Base64-encoded and used as a data URI. The animation is preserved — browsers decode and display the full animated GIF from the Base64 data. Use `data:image/gif;base64,...` as the src or CSS background-image URL. Note that animated GIFs are typically large (many frames of uncompressed pixel data), so the 33% size overhead of Base64 is more significant.',
  },
  {
    category: 'Accessibility',
    question: 'Do Base64 images affect accessibility?',
    answer: 'Base64 images in <img> tags need alt text just like any other image: `<img src="data:image/png;base64,..." alt="Description of the image">`. Screen readers handle Base64 image src attributes the same way as regular URLs. CSS background images (Base64 or URL) are always inaccessible to screen readers — they\'re presentational. For meaningful images, use <img> with alt text regardless of whether the src is a URL or data URI.',
  },
  {
    category: 'General',
    question: 'What is an image to Base64 converter?',
    answer: 'An image to Base64 converter is a tool that reads an image file and encodes it as a Base64 string — a text representation of the binary image data. The resulting Base64 string can be used directly in HTML as a data URL (data:image/png;base64,...), in CSS as a background-image, or in JSON API payloads. This free online image to Base64 converter supports PNG, JPG, GIF, WebP, and SVG files with one-click copy for the data URL, Base64-only string, CSS background, and HTML img tag formats.',
  },
];

export const imageToBase64Content: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
