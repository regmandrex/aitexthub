import type { FaqItem } from '@/components/faqData';
import type { ToolContent } from './index';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>QR Code Reader: Free Online QR Scanner to Decode QR Codes from Image</h2>
        <p>The QR Code Reader is a free online QR scanner that decodes QR codes from any image you upload, paste, or drop into your browser. Unlike mobile QR code scanners that require a camera, this web-based QR reader works on any device with a browser "” desktop, laptop, tablet, or phone "” and processes the image entirely on your device. No server upload, no account, no installation, and no daily limit on how many QR codes you can decode.</p>
        <p>It is the fastest way to read a QR code when you already have the image on your computer, inside a PDF, pasted from a chat app, or saved from a screenshot. Most people come to this QR code reader because their phone failed them: the camera could not focus, the QR was trapped inside a PDF sent over email, the QR appeared inside a YouTube video they paused on a laptop, or a colleague sent them a screenshot. Mobile scanners only work when the QR is physically in front of a camera; a desktop QR code scanner like this one works on anything saved as an image.</p>

        <h2>What Is a QR Code and How Does It Work</h2>
        <p>A QR code (short for Quick Response code) is a two-dimensional barcode invented by the Japanese company Denso Wave in 1994. It was originally designed to track automotive parts on assembly lines, but its high data density and quick-scan performance made it popular for consumer use. A modern QR code can encode up to 4,296 alphanumeric characters or 7,089 numeric digits in a single square matrix, which is why a single QR code can contain a full URL, a WiFi password, a contact card, a payment link, or a calendar event.</p>

        <h3>QR Code Structure and Position Detection Patterns</h3>
        <p>Every QR code has three large square position-detection patterns in three of its four corners. Those patterns let the decoder locate, rotate, and align the code regardless of the camera angle. The body of the code is a grid of black and white modules, each representing a single bit. The edges and central areas include timing patterns, format information, and version information that tell the decoder how to read the rest of the grid.</p>

        <h3>Reed"“Solomon Error Correction</h3>
        <p>QR codes are forgiving because of Reed"“Solomon error correction. The standard defines four levels "” L (recovers 7% damage), M (15%), Q (25%), and H (30%) "” so a QR code can still be scanned with a logo covering the middle, a torn corner, scratches, or stickers partially blocking it. This QR reader uses the same error correction math that scanners in phones and industrial equipment rely on, so it decodes QR codes that look damaged to the human eye. If a code is too damaged to decode, the tool tells you instead of silently failing.</p>

        <h2>How to Read a QR Code Online with This Tool</h2>
        <p>Using the QR code reader takes three steps, and there are three ways to provide the image depending on where you have it stored.</p>

        <h3>Upload a QR Code Image File</h3>
        <p>Click the upload button and pick a PNG, JPG, JPEG, WebP, GIF, or BMP image from your computer. The decoder analyzes the pixels locally and returns the payload in about a second. For best results, use PNG or a high-quality JPG with sharp module edges "” low-quality JPEGs sometimes blur modules enough to break decoding, especially for small QR codes with high data density.</p>

        <h3>Drag and Drop a QR Code Image</h3>
        <p>Drag a QR image from your desktop, file manager, or another browser tab directly onto the upload zone. This is the fastest route when the image is already visible on screen. Drag-and-drop works identically on Windows, macOS, ChromeOS, and Linux.</p>

        <h3>Paste a QR Code from the Clipboard</h3>
        <p>Press Ctrl+V (Cmd+V on Mac) to paste a QR code image from your clipboard. This works for screenshots (Windows+Shift+S or Cmd+Shift+4), images copied from websites (right-click, Copy Image), and images from chat apps like Slack, Teams, Discord, and WhatsApp Web. The paste route is the quickest way to decode a QR that arrived in a conversation.</p>

        <h2>QR Code Payload Types This Reader Decodes</h2>
        <p>The reader decodes every common QR payload type and returns the raw decoded text instantly. The tool also labels the payload type so you know what you are looking at before you act on it.</p>

        <h3>URL QR Codes</h3>
        <p>The most common QR codes encode a full URL. The reader returns the decoded URL and offers a "visit link" button that opens it in a new tab only after you confirm it looks safe. We intentionally do not auto-open URLs because QR-based phishing is a real threat.</p>

        <h3>WiFi QR Codes</h3>
        <p>A WiFi QR code starts with <code>WIFI:</code> and encodes the network name, authentication type, and password. The reader parses the fields into SSID, security, and password so you can copy the password separately and paste it into your operating system's WiFi settings.</p>

        <h3>vCard and MeCard Contact QR Codes</h3>
        <p>Contact QR codes encode a structured text block with name, phone, email, address, company, and website. The reader parses the vCard fields into readable lines and provides a download button that saves the contact as a .vcf file you can import into Apple Contacts, Google Contacts, Microsoft Outlook, or any other address book.</p>

        <h3>Email, Phone, SMS, and Calendar QR Codes</h3>
        <p>The reader also handles <code>mailto:</code> email QR codes, <code>tel:</code> phone QR codes, <code>sms:</code> SMS QR codes, <code>geo:</code> location QR codes, and vEvent calendar QR codes. Each payload is shown in a readable format with the underlying URI preserved so you can copy it, parse it, or hand it to another tool.</p>

        <h3>Payment QR Codes</h3>
        <p>Bitcoin and cryptocurrency payment QR codes, UPI payment QR codes used in India, and EPC/SEPA bank transfer QR codes used in Europe all decode correctly. The reader shows the full payment request so you can verify the destination address, amount, and memo before initiating a transfer from a wallet app.</p>

        <h2>QR Code Security and Quishing Protection</h2>
        <p>QR code phishing "” sometimes called "quishing" "” has risen sharply as QR codes have become ubiquitous. A malicious QR code might encode a link to a fake login page, a malware download, or a URL that looks legitimate but redirects to a credential harvester. Attackers have been caught placing fake QR stickers over legitimate ones in parking meters, restaurant tables, and event posters.</p>

        <h3>Always Read the URL Before Visiting</h3>
        <p>The single best defense against quishing is to decode the QR code first and read the URL before visiting. This reader shows you the decoded URL alongside a "visit link" button that never opens the link automatically. Look at the full URL: verify the domain, check the top-level domain, and be suspicious of URL shorteners, IP address URLs, unusual TLDs, and Unicode lookalike characters that mimic legitimate domains.</p>

        <h3>Processing Happens in Your Browser</h3>
        <p>All QR decoding on this page happens locally in your browser using JavaScript. Your image is never uploaded to our servers, never logged, and never stored. You can verify this yourself: open your browser developer tools, switch to the Network tab, and then decode a QR code "” you will see no outgoing request containing your image. For QR codes that carry sensitive information (payment details, WiFi passwords, private contacts), local processing is a meaningful privacy guarantee.</p>

        <h3>Suspicious Pattern Flags</h3>
        <p>The decoder flags obvious suspicious patterns in the decoded output: IP address URLs, unusual top-level domains, URL shorteners, and Unicode lookalike characters in domain names. These flags are not a verdict "” legitimate URLs can trigger them "” but they are a nudge to double-check before visiting.</p>

        <h2>Static QR Codes vs Dynamic QR Codes</h2>
        <p>Understanding the difference between static and dynamic QR codes matters for auditing and security. A static QR code encodes the destination directly; what you decode is exactly what the creator encoded. A dynamic QR code encodes a short URL (like <code>qr.io/abc123</code>) that redirects via a QR code management service to the real destination.</p>

        <h3>When You Decode a Dynamic QR</h3>
        <p>When this reader decodes a dynamic QR code, you get the short-link URL, not the final destination. To see the final destination, paste the short URL into a URL expander tool or into a browser to follow the redirect. Dynamic QR codes are popular because marketers can change the destination after the QR is printed, but the redirect also obscures where the QR actually leads.</p>

        <h3>Auditing Dynamic QR Codes Before Visiting</h3>
        <p>Before scanning any dynamic QR code in the wild, expand the short URL to see the final destination, check the domain reputation, and only then decide whether to visit. This two-step audit "” decode, then expand "” is a standard practice for anyone who regularly handles unfamiliar QR codes.</p>

        <h2>Who Uses This Online QR Code Scanner</h2>
        <p>The tool is used by a wide mix of people with different needs, united by the fact that they already have a QR code as an image and want to decode it without a phone.</p>

        <h3>Developers Testing QR-Based Features</h3>
        <p>Developers building features that generate QR codes "” order confirmations, loyalty programs, payment links, two-factor setup codes "” need to verify that the generated QR encodes the correct payload. Rather than printing and scanning physically, they upload the image here and see the decoded text instantly. This is especially useful when testing edge cases like very long URLs, Unicode text, or special characters that can trip up some QR libraries.</p>

        <h3>Print Producers and Marketing Teams</h3>
        <p>Print vendors sometimes reproduce QR codes with incorrect colors or insufficient contrast, which can break decoding. Upload the printed-proof image here, confirm the QR scans correctly, and only then approve the print run. Marketing teams use the same flow to reverse-engineer competitor QR codes "” decode the QR printed on a competitor's package to see what URL they direct customers to, usually a campaign landing page or a product registration flow.</p>

        <h3>IT and Security Teams Auditing QR Codes</h3>
        <p>IT and security teams use the reader to audit QR codes that appear in emails, documents, or on stickers inside their organization. Decoding the QR locally (without visiting the URL) is the safe first step when investigating a suspicious QR. The flagged patterns help teams prioritize which codes to examine more closely.</p>

        <h3>Everyday Users Whose Phone Failed</h3>
        <p>Finally, everyday users who could not scan a QR code with their phone "” bad lighting, camera focus issues, QR trapped in a PDF, QR in a paused video frame "” use this tool as a fallback. Screenshot the QR, paste or upload it, and get the decoded text in under a second.</p>

        <h2>QR Code Error Correction Levels Explained</h2>
        <p>When generating a QR code, the creator picks one of four error correction levels. The level affects both how much damage the code can tolerate and how much data it can hold. Level L allows 7% recovery with the highest data capacity, M allows 15%, Q allows 25%, and H allows 30% recovery with the lowest data capacity. Most consumer QR codes use M or Q because the balance between capacity and resilience works for typical use cases.</p>

        <h3>Why Error Correction Enables Logo-Embedded QRs</h3>
        <p>A QR code with an embedded logo in the middle works because the designer chose a high error correction level (Q or H) so that the logo "” which obscures part of the grid "” can be ignored by the decoder. If the logo covers more than the correction level allows (roughly 25"“30% of the code), the QR will fail to decode. This reader handles logo-embedded QRs normally as long as the error correction budget has not been exceeded.</p>

        <h2>Privacy, Performance, and Offline Use</h2>
        <p>Because decoding runs entirely in JavaScript inside your browser, three things follow: the tool is private, the tool is fast, and the tool works offline after the first page load.</p>

        <h3>Privacy Guarantees</h3>
        <p>Your images never leave your device. There is no server that holds them, no log that records them, and no training dataset that consumes them. Close the tab and the image is gone. For anyone who processes QR codes containing sensitive payloads "” payment info, credentials, contact details "” this is a meaningful improvement over cloud-based QR decoders.</p>

        <h3>Performance</h3>
        <p>Decoding a normal QR image takes under a second on a modern device. Larger images (several megapixels) take a second or two. Because the decoder does not need to round-trip to a server, the end-to-end wait is typically faster than any cloud-based QR API.</p>

        <h3>Offline Use</h3>
        <p>Once the page has loaded, you can disconnect from the internet and the reader continues to function. This matters on planes, in hotels with flaky WiFi, and inside secure environments where outbound network traffic is restricted. Bookmark the page for instant access later; it is small and fast-loading.</p>

        <h2>Limits and Edge Cases</h2>
        <p>No QR decoder handles every edge case, and it is worth understanding where this one draws the line.</p>

        <h3>Very Low Contrast or Blurry Codes</h3>
        <p>QR codes with extremely low contrast between dark and light modules may fail to decode. Similarly, heavily compressed JPEGs can blur the module edges past the decoder's tolerance. Increase the contrast in an image editor, re-export as PNG, and try again.</p>

        <h3>Multiple QR Codes in One Image</h3>
        <p>The reader decodes the most prominent QR in an image. If your image contains several QR codes, crop each one into a separate image and decode them individually. Multi-QR detection is on the roadmap, but for now the single-QR behavior keeps results unambiguous.</p>

        <h3>Specialized Industrial QR Codes</h3>
        <p>Specialized industrial QR formats (Micro QR, rMQR, some electronic-component traceability codes) may not decode with this reader. For those, a dedicated industrial scanner is still the right tool. The reader covers every standard QR code version (1 through 40) used by consumer applications.</p>

        <h2>Pairing the Reader with a QR Code Generator</h2>
        <p>Generating QR codes and reading them are two sides of the same workflow. Our site has a companion QR code generator tool that creates QR codes for URLs, WiFi networks, vCards, and payment links, with configurable error correction level, size, margin, color, and optional embedded logo. Use the generator to create codes, then use this reader to verify them "” if the decoded payload matches what you intended, you know the generator configured the code correctly.</p>
        <p>Together, the generator and reader form a complete QR code toolkit that runs entirely in your browser and never sends data to a server. That combination matters for anyone who builds, tests, or verifies QR-based features as part of their job.</p>

        <h2>Free Forever, No Account Required</h2>
        <p>The QR code reader is completely free with no usage cap, no premium tier, no watermark on decoded output, no account requirement, and no forced email signup. The site is supported by modest display ads that cover hosting and development; if ads bother you, an ad blocker works fine and the tool continues to function normally.</p>
        <p>We built this reader because we needed a fast, private, desktop-friendly way to decode QR codes from images, and the existing options were either paywalled, ad-heavy to the point of unusable, or uploaded images to a server. If you find it useful, bookmark it, share it, and tell us what else would be worth building.</p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a QR code reader and how does this online QR scanner work?',
    answer:
      'A QR code reader is a tool that decodes the two-dimensional barcode called a QR (Quick Response) code back into the text or URL it encodes. This online QR code scanner analyzes pixel data from any image you upload, paste, or drag and drop. The algorithm locates the three position-detection patterns in the corners of the code, aligns the grid, reads each module (black or white square) as a bit, applies Reed"“Solomon error correction, and reconstructs the original payload. The whole process takes about a second for a normal-sized QR image and happens entirely in your browser without uploading anything to a server.',
  },
  {
    category: 'Usage',
    question: 'How do I read a QR code from an image on my computer?',
    answer:
      'You have three ways to read a QR code from an image on this page. Click the upload button to pick a PNG, JPG, JPEG, WebP, GIF, or BMP file from your computer. Drag and drop the image directly onto the upload zone. Or press Ctrl+V (Cmd+V on Mac) to paste a QR code image from your clipboard "” this works for screenshots, images copied from websites, and images from chat apps. The decoded text appears below the uploader within a second or two. If the QR code decodes to a URL, a "visit link" button appears so you can confirm the URL before opening it.',
  },
  {
    category: 'Usage',
    question: 'Can I scan a QR code without a phone or a camera?',
    answer:
      'Yes. This QR code reader decodes QR codes from image files, so you do not need a phone camera at all. As long as you have an image of the QR code "” a screenshot, a download from a PDF, a photo taken on any camera, or an image from an email "” you can upload it here and decode it. This is the best tool to use when your phone camera fails to scan, when the QR code is trapped inside a PDF or a PowerPoint slide, when the QR code is in a YouTube video paused on your desktop, or when someone sends you a screenshot of a QR code in Slack, Teams, WhatsApp, or another chat app.',
  },
  {
    category: 'Privacy and Security',
    question: 'Is this QR code reader safe? Can it read malicious QR codes without risking my computer?',
    answer:
      'Yes, the reader itself is safe. Decoding a QR code is a read-only pixel-analysis operation; it does not execute any code from the QR payload. What the reader produces is just text, which your browser displays as text. The reader does not automatically follow URLs, connect to WiFi networks, or add contacts. This matters because QR codes are increasingly used in phishing attacks (called "quishing") where a malicious QR code encodes a link to a fake login page. By showing you the decoded URL before you visit it, this reader gives you a chance to verify the domain and cancel if anything looks off.',
  },
  {
    category: 'Privacy and Security',
    question: 'Does the QR code reader upload my images to your server?',
    answer:
      'No. All QR code decoding happens locally in your browser using JavaScript. Your image is never uploaded to our servers, never logged, and never stored. You can verify this by opening your browser developer tools, switching to the Network tab, and then decoding a QR code "” you will see no outgoing request that includes your image. This matters for QR codes that contain sensitive information: payment QR codes, WiFi passwords, private vCards, event tickets, and anything else you would not want sitting in someone else&#39;s logs. Close the tab and the data is gone.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What file formats does this online QR scanner support?',
    answer:
      'The QR reader accepts PNG, JPG, JPEG, WebP, GIF, and BMP images. For best results, use PNG or a high-quality JPG with sharp module edges "” low-quality JPEGs sometimes blur the modules enough to break decoding, especially for small QR codes with high data density. If your image is a PDF, a document, or a video frame, export or screenshot the QR code region as an image first. Most operating systems let you save selections as PNG (Cmd+Shift+4 on Mac, Windows+Shift+S on Windows 10/11). Images up to 10 MB decode without any noticeable delay.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Can this reader decode QR codes with logos, colors, or rounded modules?',
    answer:
      'Yes, as long as the underlying code structure is intact. QR codes with embedded logos rely on the error correction level (L, M, Q, or H) to tolerate the obscured area "” a code designed with an H-level correction can lose 30% of its modules and still decode. Similarly, colored and styled QR codes work as long as there is enough contrast between dark and light modules. Extremely low-contrast QR codes (light gray on white, for example) may fail to decode; in that case, increase contrast in your image editor before uploading. Rounded and pixel-art QR modules decode normally because the decoder looks at module centers, not edges.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'What types of QR codes can this tool decode?',
    answer:
      'The reader decodes every common QR payload type: URL QR codes, plain text QR codes, email QR codes (mailto:), phone QR codes (tel:), SMS QR codes (sms:), WiFi QR codes (WIFI:), vCard and MeCard contact QR codes, vEvent calendar QR codes, geographic location QR codes (geo:), Bitcoin and cryptocurrency payment QR codes, UPI payment QR codes (upi:), EPC/SEPA bank transfer QR codes, and generic text. The decoded payload is returned as raw text, and the tool shows you the payload type so you know what you are looking at. Specialized industrial QR codes also decode, but the payload format is application-specific.',
  },
  {
    category: 'Usage',
    question: 'How do I scan a WiFi QR code online?',
    answer:
      'Upload the WiFi QR code image to this reader just like any other QR image. The decoded output will be a string starting with WIFI: "” for example, WIFI:S:MyNetwork;T:WPA;P:password123;;. The fields are S (SSID, the network name), T (authentication type: WPA, WEP, or nopass for open networks), and P (password). The reader shows these fields in a parsed view so you can copy the SSID and password separately without manually splitting the string. On a phone, scanning the same QR typically auto-joins the network; on a desktop, you would use this tool to see the password and then type it into Windows or macOS WiFi settings manually.',
  },
  {
    category: 'Usage',
    question: 'Can I decode vCard contact QR codes with this QR reader?',
    answer:
      'Yes. vCard and MeCard QR codes encode contact information "” name, phone, email, address, company, title, and website "” as a structured text block. Upload the QR image and the reader decodes the full vCard text. The tool also parses the vCard into individual fields so you can see the contact cleanly, and provides a download button that saves the parsed contact as a .vcf file you can import into Apple Contacts, Google Contacts, Microsoft Outlook, or any other address book. This is useful for digital business cards and conference badges that use QR codes to share contact info.',
  },
  {
    category: 'Technical',
    question: 'What is the difference between static and dynamic QR codes, and which does this reader handle?',
    answer:
      'A static QR code encodes the payload (URL, text, whatever) directly "” what you decode is exactly what the creator put in. A dynamic QR code encodes a short URL (like qr.io/abc123) that redirects via a QR code management service to the real destination. This reader decodes both, but for dynamic QR codes you get the short URL, not the final destination. To see the final destination, paste the short URL into a URL expander tool, or open it in a browser tab to follow the redirect. Dynamic QR codes are useful because the destination can be changed after printing, but they do add an extra hop that makes it harder to audit the real destination from the code alone.',
  },
  {
    category: 'Detection and Limits',
    question: 'How accurate is this free online QR code reader?',
    answer:
      'The reader implements the ISO/IEC 18004 QR code standard with full Reed"“Solomon error correction. For well-formed QR codes with good contrast and sharpness, decoding accuracy is essentially 100%. Edge cases that may fail include extremely low-contrast codes, severely damaged codes (more than 30% obscured), codes with non-standard encoding, and extremely small low-resolution images. For those cases, the reader tells you it could not decode rather than returning a guess. If a QR decodes with a phone camera but not here, it is usually an image-quality issue rather than a reader issue "” re-capture the image at higher resolution and try again.',
  },
  {
    category: 'Usage',
    question: 'Can this QR scanner read QR codes from PDFs, PowerPoint, or Word documents?',
    answer:
      'Indirectly, yes. The reader accepts images, not PDFs or documents, so you need to export the QR region as an image first. On most systems: open the PDF or document, zoom in on the QR code so it is clearly visible, take a screenshot of just the QR region (Windows+Shift+S on Windows, Cmd+Shift+4 on Mac), and then paste or upload that screenshot into the reader. For PDFs specifically, you can also use any PDF-to-image converter to extract pages as PNG and then upload. The decoded text is the same regardless of which document format the QR originally came from.',
  },
  {
    category: 'Detection and Limits',
    question: 'Is there a limit on how many QR codes I can decode with this tool?',
    answer:
      'No. There is no daily cap, monthly cap, or session cap. You can decode one QR code or ten thousand, and the experience is identical because all decoding happens locally in your browser. There is no server quota to hit, no rate limit, and no "upgrade for unlimited usage" wall. The only soft limit is your device&#39;s memory "” if you were to process extremely large images (many megabytes each) in rapid succession, your browser could get sluggish, but this is a device limitation rather than a tool policy. For normal use, the reader is effectively unlimited.',
  },
  {
    category: 'Privacy and Security',
    question: 'How do I protect myself from QR code phishing (quishing) attacks?',
    answer:
      'Three habits defend against QR phishing. First, decode before you act "” use this reader or your phone&#39;s built-in preview mode to see the URL before visiting it. Second, verify the domain "” legitimate QR codes from trusted brands use their own domains, while phishing QR codes often use lookalike domains (paypa1.com instead of paypal.com), URL shorteners, IP addresses, or unusual top-level domains. Third, be suspicious of QR codes in unexpected places: stickers over existing QR codes, QR codes in unsolicited emails, QR codes in parking lots, and QR codes claiming to offer refunds or prizes. If anything looks off, do not visit the link.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Does this QR reader work on mobile phones?',
    answer:
      'Yes, the page is mobile-responsive and the QR reader works in Safari on iOS, Chrome on Android, and every other major mobile browser. The drag-and-drop and paste flows may be less useful on mobile, but the upload flow works perfectly "” tap the upload button, pick an image from your photo library, and see the decoded text in seconds. On iPhone, you can also use the native camera QR scan feature and this reader together: snap a photo of a QR, pick it from your photo library, and get the decoded text. That flow is more private than many third-party QR scanner apps that send data to their servers.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can I read multiple QR codes in a single image?',
    answer:
      'The current reader decodes one QR code per image "” the most prominent one in the image. If your image contains multiple QR codes, crop each code into a separate image and upload them one at a time. We may add multi-QR detection in the future, but for now the single-QR behavior keeps results unambiguous and the UI simple. If you regularly need to decode many QR codes at once, let us know through the contact form "” user requests are the primary driver of which features we build.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What should I do if the QR code will not decode?',
    answer:
      'Most decode failures come from image quality rather than the tool. Try these fixes in order. First, make sure the QR code is not cropped "” it needs the three square position-detection patterns in the corners intact. Second, increase the image resolution; very small QR images (under 100×100 pixels) sometimes fail. Third, check contrast "” if the QR is faint or the dark and light modules are too similar, bump the contrast in any image editor. Fourth, try a different image format; a poorly compressed JPEG can blur the modules, so re-export as PNG if possible. Fifth, make sure the image is not rotated into an unrecognizable orientation "” most QR readers auto-rotate, but extreme skew can confuse them.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Can this tool decode QR codes that contain non-English characters, emojis, or Unicode?',
    answer:
      'Yes. QR codes use the ECI (Extended Channel Interpretation) mechanism to encode character sets beyond ASCII, and this reader handles all common encodings including UTF-8 (which covers Unicode text like Chinese, Japanese, Korean, Arabic, Hindi, and emoji). Decoded text displays in its native script without mojibake. This matters for international QR codes "” Japanese event tickets, Chinese payment QR codes, Korean restaurant menus, and similar use cases. Some very old QR generators still produce Shift-JIS-encoded codes, which this reader also handles correctly.',
  },
  {
    category: 'Technical',
    question: 'What is the maximum amount of text a QR code can hold, and can this reader handle the largest codes?',
    answer:
      'A QR code version 40 (the largest standard) holds up to 7,089 numeric digits, 4,296 alphanumeric characters, or 2,953 bytes of data. This reader handles every standard QR version from 1 to 40. Very large QR codes tend to have more modules (up to 177×177 for version 40), which means they need a higher-resolution image to decode cleanly. If you try to decode a large QR from a tiny image, the reader may fail because the modules are smaller than individual pixels; re-capture at higher resolution and it will decode.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Is the QR code reader available as an API or for commercial use?',
    answer:
      'The tool itself is not exposed as an API because it runs entirely client-side. The underlying decoding logic is based on open-source libraries you can embed in your own app if you need the same capability inside a browser or Node.js environment. For commercial use of this page itself, there are no restrictions "” you and your team can use it at work, use decoded results in commercial projects, or include decoded data in client deliverables. We do not claim any rights to your inputs or the decoded outputs.',
  },
  {
    category: 'Advanced Workflow',
    question: 'Does this QR code reader generate QR codes, or is there a separate QR generator?',
    answer:
      'This page only reads QR codes. For generating QR codes "” turning a URL, WiFi credential, vCard, or other payload into a QR image "” use our QR code generator tool, which is linked in the Related Tools section at the bottom of the page. The generator produces PNG and SVG QR codes with configurable error correction level, module size, margin, foreground color, background color, and optional embedded logo. Together, the generator and reader let you verify that a generated QR encodes what you intended "” generate it, then decode it with this reader to confirm the payload matches.',
  },
  {
    category: 'Additional Questions',
    question: 'Who built this QR code reader and how is the project funded?',
    answer:
      'The reader was built by the small team behind the rest of this site. We built it because we kept needing a desktop QR code scanner that was fast, private, and free, and the existing options were either paywalled, ad-heavy to the point of unusable, or sent our images to someone else&#39;s server. The project is funded by modest display ads on the surrounding pages, which cover hosting and development costs. There is no VC money, no data sale, no email list, and no plans to add any of those. If you find the tool useful, bookmark it, share it, and tell us what else would be helpful to build.',
  },
];

export const qrCodeReaderContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
