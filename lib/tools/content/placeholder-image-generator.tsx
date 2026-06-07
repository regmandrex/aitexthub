import type { ToolContent } from './index';

export const placeholderImageGeneratorContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Placeholder Image Generator: Create Custom Dummy Images for Development and Design</h2>
        <p>
          Placeholder images are blank or labeled images used during development and prototyping to
          represent spaces where real images will eventually appear. They allow developers to build and
          test layouts, components, and user interfaces without waiting for final assets from designers
          or content teams. Our Placeholder Image Generator creates custom-sized placeholder images with
          configurable colors, text labels, and formats "” instantly and for free.
        </p>
        <p>
          Placeholder images serve a critical role in modern web development workflows. They allow
          frontend developers and designers to work independently: the developer builds the layout using
          placeholder images of the correct dimensions, and the designer or content team supplies the
          real images later. This parallel workflow is the norm in agile development teams. Placeholder
          images are also essential for design systems documentation, component library Storybook stories,
          README screenshots, and user acceptance testing scenarios.
        </p>

        <h2>A History of Placeholder Image Services</h2>
        <p>
          The concept of a remote placeholder image service originated with placehold.it (now
          via.placeholder.com), launched around 2009. The service provided a simple URL API "”
          <code>https://via.placeholder.com/300x200</code> "” that returned a gray rectangle with the
          size printed as text. This format became the universal standard for placeholder images in
          web development.
        </p>
        <p>
          Many creative variants followed. Lorempixel (now defunct) provided real photographs in specific
          categories (food, nature, people) as placeholders. Picsum Photos (picsum.photos) uses
          unsplash-style photographs randomly selected by seed. Placebear, Placedog, and similar services
          provided humorous alternatives with bear and dog photos. For professional projects, these
          photograph-based placeholders could sometimes confuse clients into thinking real images had
          been selected. The labeled gray rectangle remains the clearest signal that "this is a placeholder."
        </p>

        <h2>Common Placeholder Image Dimensions</h2>
        <p>
          Standard dimensions used in web design correspond to common UI patterns:
        </p>
        <ul>
          <li><strong>16×16</strong>: favicon, small icon</li>
          <li><strong>32×32</strong>: standard icon</li>
          <li><strong>48×48</strong>: medium icon, avatar in list view</li>
          <li><strong>64×64</strong>: small avatar</li>
          <li><strong>100×100</strong>: small profile photo</li>
          <li><strong>150×150</strong>: thumbnail, product card image</li>
          <li><strong>200×200</strong>: square thumbnail</li>
          <li><strong>300×200</strong>: horizontal card image, blog post thumbnail</li>
          <li><strong>400×300</strong>: standard article image</li>
          <li><strong>600×400</strong>: featured image</li>
          <li><strong>800×600</strong>: large content image, 4:3 ratio</li>
          <li><strong>1200×630</strong>: Open Graph image (og:image), Facebook share preview</li>
          <li><strong>1280×720</strong>: 720p HD, hero image, banner</li>
          <li><strong>1920×1080</strong>: 1080p Full HD, full-width hero banner</li>
          <li><strong>2560×1440</strong>: 2K/1440p, large background image</li>
        </ul>
        <p>
          Aspect ratios matter as much as dimensions. Common aspect ratios in web design:
        </p>
        <ul>
          <li><strong>1:1 (square)</strong>: profile photos, product thumbnails, avatar</li>
          <li><strong>4:3</strong>: traditional monitor, general content images</li>
          <li><strong>16:9</strong>: HD video, wide hero banners, slides</li>
          <li><strong>3:2</strong>: DSLR photography, wide card images</li>
          <li><strong>2:1</strong>: wide panoramic banners</li>
          <li><strong>9:16</strong>: portrait (Stories, TikTok, mobile full-screen)</li>
          <li><strong>21:9</strong>: ultra-wide cinematic</li>
        </ul>

        <h2>Generating Placeholder Images with CSS</h2>
        <p>
          For pure CSS placeholder implementations without any external dependency, several techniques work:
        </p>
        <h3>CSS Background Color with Aspect Ratio</h3>
        <pre><code>{'.placeholder {\n  background-color: #e5e7eb;\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.placeholder::before {\n  content: "Image placeholder";\n}'}</code></pre>
        <h3>CSS-Generated SVG Data URI</h3>
        <p>
          An SVG data URI can be embedded directly in CSS as a background image, creating a
          self-contained placeholder with custom colors and text:
        </p>
        <pre><code>{'background-image: url(&#39;data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="100%25" height="100%25" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" fill="%23888" font-family="sans-serif" font-size="14"%3E300×200%3C/text%3E%3C/svg%3E&#39;);'}</code></pre>

        <h2>Generating Placeholder Images with SVG</h2>
        <p>
          SVG is the ideal format for placeholder images because it is infinitely scalable, tiny in file
          size, and can be generated on the fly with arbitrary dimensions. A complete SVG placeholder:
        </p>
        <pre><code>{'<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">\n  <rect width="100%" height="100%" fill="#e5e7eb"/>\n  <!-- Cross pattern for visual interest -->\n  <line x1="0" y1="0" x2="400" y2="300" stroke="#d1d5db" stroke-width="1"/>\n  <line x1="400" y1="0" x2="0" y2="300" stroke="#d1d5db" stroke-width="1"/>\n  <rect x="1" y="1" width="398" height="298" fill="none" stroke="#d1d5db" stroke-width="1"/>\n  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"\n    fill="#6b7280" font-family="sans-serif" font-size="16" font-weight="500">\n    400×300\n  </text>\n</svg>'}</code></pre>
        <p>
          SVG placeholders can include diagonal lines (the classic "X" pattern from design wireframes),
          a camera icon, custom text, or any other visual cue. The SVG can be inlined directly in HTML
          or referenced as an <code>src</code> attribute value.
        </p>

        <h2>URL-Based Placeholder Services</h2>
        <p>
          Remote URL-based placeholder services provide the quickest way to add placeholders to HTML
          without generating files:
        </p>
        <h3>via.placeholder.com</h3>
        <pre><code>{'https://via.placeholder.com/300x200\nhttps://via.placeholder.com/300x200/ff0000/ffffff?text=Title\nhttps://via.placeholder.com/300  <!-- square -->'}</code></pre>
        <h3>picsum.photos (Lorem Picsum)</h3>
        <pre><code>{'https://picsum.photos/300/200          <!-- random photo -->\nhttps://picsum.photos/seed/abc/300/200   <!-- deterministic -->\nhttps://picsum.photos/300/200?grayscale  <!-- grayscale -->\nhttps://picsum.photos/300/200?blur=5     <!-- blurred -->'}</code></pre>
        <h3>dummyimage.com</h3>
        <pre><code>{'https://dummyimage.com/300x200/000/fff\nhttps://dummyimage.com/300x200.png\nhttps://dummyimage.com/300x200/ff0000/00ff00&text=Hello'}</code></pre>
        <h3>Self-Hosted with Canvas API</h3>
        <p>
          For projects that cannot depend on external services (air-gapped environments, CI testing,
          offline development), the HTML Canvas API can generate placeholder images in-browser:
        </p>
        <pre><code>{"function generatePlaceholder(width, height, bg = '#e5e7eb', fg = '#6b7280') {\n  const canvas = document.createElement('canvas');\n  canvas.width = width;\n  canvas.height = height;\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = bg;\n  ctx.fillRect(0, 0, width, height);\n  ctx.strokeStyle = fg;\n  ctx.lineWidth = 1;\n  ctx.beginPath();\n  ctx.moveTo(0, 0);\n  ctx.lineTo(width, height);\n  ctx.moveTo(width, 0);\n  ctx.lineTo(0, height);\n  ctx.stroke();\n  ctx.fillStyle = fg;\n  ctx.textAlign = 'center';\n  ctx.textBaseline = 'middle';\n  ctx.font = `${Math.min(width, height) * 0.1}px sans-serif`;\n  ctx.fillText(`${width}×${height}`, width / 2, height / 2);\n  return canvas.toDataURL();\n}"}</code></pre>

        <h2>Placeholder Images in Design Tools</h2>
        <h3>Figma</h3>
        <p>
          Figma supports placeholder images via the "image fill" option: create a frame with the
          target dimensions, fill it with a color (typically gray), and add a text label. Figma's
          component library for design systems often includes a standardized "placeholder" component
          with consistent styling. The Unsplash plugin provides real photograph placeholders directly
          in Figma.
        </p>
        <h3>Sketch</h3>
        <p>
          Sketch has built-in placeholder support: rectangles with "data" fills that auto-populate with
          images from a predefined set. The "Images" data type provides random stock photographs. Custom
          data sources can be configured for project-specific placeholder sets.
        </p>
        <h3>Adobe XD</h3>
        <p>
          XD provides "Repeat Grid" with auto-populated image content from a folder, making it easy to
          create realistic-looking prototype layouts with multiple card images simultaneously.
        </p>

        <h2>Placeholder Images in JavaScript Frameworks</h2>
        <h3>React</h3>
        <pre><code>{"// Simple SVG placeholder component\nfunction Placeholder({ width, height, text, bg = '#e5e7eb', fg = '#9ca3af' }) {\n  return (\n    <svg\n      width={width}\n      height={height}\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox={`0 0 ${width} ${height}`}\n    >\n      <rect width=\"100%\" height=\"100%\" fill={bg} />\n      <text\n        x=\"50%\"\n        y=\"50%\"\n        textAnchor=\"middle\"\n        dominantBaseline=\"middle\"\n        fill={fg}\n        fontSize={Math.min(width, height) * 0.1}\n        fontFamily=\"sans-serif\"\n      >\n        {text || `${width}×${height}`}\n      </text>\n    </svg>\n  );\n}"}</code></pre>
        <h3>Next.js Image Component</h3>
        <p>
          Next.js's <code>{'<Image>'}</code> component supports a <code>placeholder</code> prop:
        </p>
        <ul>
          <li><code>placeholder="empty"</code>: no placeholder (default)</li>
          <li><code>placeholder="blur"</code>: a blurred low-resolution version while the full image loads. For local images, Next.js generates the blur automatically; for remote images, provide a <code>blurDataURL</code></li>
          <li><code>placeholder="data:..."</code>: use a custom data URI as the placeholder</li>
        </ul>
        <pre><code>{'import Image from "next/image";\n\n<Image\n  src="/product.jpg"\n  width={400}\n  height={300}\n  placeholder="blur"\n  alt="Product photo"\n/>'}</code></pre>
        <h3>Lazy Loading and Low-Quality Image Placeholders (LQIP)</h3>
        <p>
          The Low-Quality Image Placeholder pattern uses a tiny, heavily compressed (10×10 pixels or
          smaller) version of the actual image as a placeholder that is immediately available, then
          progressively replaces it with the full-resolution image as it loads. The placeholder is
          often encoded as a base64 data URI and inlined directly in the HTML, eliminating an extra
          network request. Tools like Squoosh, Sharp, and <code>plaiceholder</code> can generate
          appropriate LQIP data URIs.
        </p>

        <h2>Skeleton Screens: The Modern Alternative</h2>
        <p>
          Skeleton screens (also called content placeholders or skeleton loaders) are UI patterns where
          blank shapes matching the approximate layout of loading content are shown while data is fetched.
          For images, this means a gray rectangle of the correct aspect ratio with a pulsing animation.
          This approach provides better perceived performance than a loading spinner and communicates the
          layout to the user before content arrives.
        </p>
        <pre><code>{'/* CSS skeleton loader */\n.skeleton-image {\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes shimmer {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}'}</code></pre>
        <p>
          Skeleton screens are the current industry standard for loading states in web and mobile
          applications, used by Facebook, LinkedIn, YouTube, and virtually every major application.
        </p>

        <h2>Image Placeholder Best Practices for SEO</h2>
        <p>
          When using placeholder images in production (which should be rare "” placeholders should be
          replaced before launch), be aware of SEO implications:
        </p>
        <ul>
          <li>Always include descriptive <code>alt</code> text "” even for placeholders, an empty <code>alt=""</code> is better than omitting it</li>
          <li>Avoid linking to external placeholder services in production; they may have downtime and introduce external dependencies</li>
          <li>External placeholder services may be blocked by corporate firewalls and content security policies</li>
          <li>Placeholder images count against Core Web Vitals LCP (Largest Contentful Paint) if they are large "” keep placeholder images appropriately sized</li>
        </ul>

        <h2>Server-Side Placeholder Generation</h2>
        <p>
          For dynamic applications, placeholder images can be generated server-side on demand:
        </p>
        <h3>Node.js with Sharp</h3>
        <pre><code>{"import sharp from 'sharp';\n\nasync function generatePlaceholder(width, height) {\n  return sharp({\n    create: {\n      width,\n      height,\n      channels: 3,\n      background: { r: 229, g: 231, b: 235 }\n    }\n  })\n  .png()\n  .toBuffer();\n}"}</code></pre>
        <h3>Express.js Placeholder Route</h3>
        <pre><code>{"app.get('/placeholder/:size', async (req, res) => {\n  const [width, height] = req.params.size.split('x').map(Number);\n  const buffer = await generatePlaceholder(width, height);\n  res.set('Content-Type', 'image/png');\n  res.set('Cache-Control', 'public, max-age=31536000');\n  res.send(buffer);\n});"}</code></pre>

        <h2>How to Use This Placeholder Image Generator</h2>
        <p>
          Enter the desired width and height in pixels, customize the background color, text color,
          and label text. The generator produces the image immediately in the preview and offers
          download as PNG or SVG. You can also copy the image as a base64 data URI for inline embedding
          in HTML or CSS. Select from preset sizes for common use cases (avatar, card image, hero banner,
          Open Graph) to quickly generate standard-dimension placeholders. The generated images are clean,
          clearly labeled with their dimensions, and suitable for development wireframes, Storybook stories,
          design documentation, and prototype presentations.
        </p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What is a placeholder image?',
      answer:
        'A placeholder image is a dummy image used during development or prototyping to represent a space where a real image will eventually appear. Placeholder images are typically gray or colored rectangles with the image dimensions printed as text, clearly communicating "this is not final content" while allowing layouts to be built and tested without waiting for actual images.',
    },
    {
      category: 'Basics',
      question: 'Why do developers use placeholder images?',
      answer:
        'Placeholder images allow parallel development: frontend developers build layouts with correctly-sized placeholders while designers or content teams prepare real assets. They are also used in component library documentation, Storybook stories, README screenshots, API documentation, design mockups, and user testing sessions where real images are not necessary or available.',
    },
    {
      category: 'Formats',
      question: 'What format should I use for placeholder images "” PNG or SVG?',
      answer:
        'SVG is usually preferred for placeholder images because it is infinitely scalable, very small in file size, and can be generated on the fly with arbitrary dimensions. SVG also renders text labels at any size without pixelation. Use PNG when you need a raster format (some older tools or email clients may not support SVG), or when you need specific pixel-level rendering. For development use, SVG is almost always the better choice.',
    },
    {
      category: 'Formats',
      question: 'Can I use a placeholder image as a base64 data URI?',
      answer:
        'Yes. A placeholder SVG or PNG can be encoded as a base64 data URI and used directly as the src attribute of an img element or as a CSS background-image. This eliminates the need for an external image file or network request. Format: data:image/svg+xml;base64,[encoded SVG] or data:image/png;base64,[encoded PNG]. This is particularly useful for CSS-only placeholder components in component libraries.',
    },
    {
      category: 'Services',
      question: 'What are the most popular placeholder image services?',
      answer:
        'via.placeholder.com: returns labeled gray rectangles at any dimension via URL (https://via.placeholder.com/300x200). Picsum Photos (picsum.photos): returns random photographs at specified dimensions. Lorem Picsum supports grayscale, blur, and seeded random selection. dummyimage.com: similar to via.placeholder.com with color customization. For most production development work, local SVG generation is preferred over external services to avoid network dependencies.',
    },
    {
      category: 'Services',
      question: 'Should I use external placeholder image services in production code?',
      answer:
        'No "” external placeholder services should only be used in development, testing, and prototype stages. In production, they introduce external dependencies that may have downtime, may be blocked by content security policies or firewalls, add latency from the extra network request, and may log access statistics. Replace all placeholder images with real assets before deploying to production.',
    },
    {
      category: 'Dimensions',
      question: 'What dimensions should I use for an Open Graph image placeholder?',
      answer:
        '1200×630 pixels is the standard size for Open Graph (og:image) images. This ratio (roughly 1.91:1) is used by Facebook, LinkedIn, Twitter/X, and most social platforms for link preview images. The content should be kept within the central 1080×566 area to account for different cropping behaviors across platforms. Minimum size accepted by most platforms is 600×315.',
    },
    {
      category: 'Dimensions',
      question: 'What is the standard size for a website hero image placeholder?',
      answer:
        'Common hero image sizes: 1920×1080 (Full HD, most common for desktop), 1440×810 (common for many modern sites), 1280×720 (720p, minimum for modern sites), and 2560×1440 (2K for retina/HiDPI). For responsive designs, the hero section&#39;s intrinsic aspect ratio matters more than exact pixel dimensions. A 16:9 aspect ratio (1920×1080) works well for most landscape hero designs.',
    },
    {
      category: 'CSS',
      question: 'How do I create a CSS-only placeholder image?',
      answer:
        'Use a div with background-color and aspect-ratio: div { background-color: #e5e7eb; aspect-ratio: 4/3; width: 100%; }. Add a pseudo-element for the label: div::before { content: "Image placeholder"; display: block; text-align: center; color: #9ca3af; }. For the classic X wireframe look, use CSS gradients or SVG background images. The aspect-ratio property (supported in all modern browsers) is the cleanest way to maintain proportions without JavaScript.',
    },
    {
      category: 'React',
      question: 'How do I create a reusable placeholder image component in React?',
      answer:
        'Create an SVG-based component that accepts width, height, text, background color, and text color props. Return an SVG element with a rect fill and centered text element. This approach requires no external dependencies and works with SSR. For Next.js specifically, the built-in Image component supports placeholder="blur" with a blurDataURL prop for production-ready progressive loading.',
    },
    {
      category: 'Next.js',
      question: 'How does Next.js Image component handle placeholder images?',
      answer:
        'The Next.js Image component supports three placeholder modes: "empty" (no placeholder, default), "blur" (shows a blurred low-res version while loading "” automatically generated for local images), and a custom data URI. For remote images with blur placeholder, provide a blurDataURL (a small base64-encoded image). The blur placeholder eliminates layout shift during image loading and improves perceived performance.',
    },
    {
      category: 'Skeleton',
      question: 'What is a skeleton screen and how does it relate to image placeholders?',
      answer:
        'A skeleton screen shows blank shapes matching the layout of loading content, with an animated shimmer effect. For images, this means a gray rectangle of the correct aspect ratio with a pulsing gradient animation. Skeleton screens provide better perceived performance than static placeholders and communicate layout structure to users during loading. They are the industry standard for loading states in web and mobile apps (used by Facebook, LinkedIn, YouTube).',
    },
    {
      category: 'Performance',
      question: 'What is a Low-Quality Image Placeholder (LQIP) and how does it work?',
      answer:
        'LQIP is a performance technique where a tiny (10-20px), heavily compressed version of the actual image is used as a placeholder while the full image loads. The LQIP is encoded as a base64 data URI and inlined in HTML so it is available immediately without a network request. As the full image loads, it smoothly replaces the LQIP. This provides a visual preview of the final image and reduces the visual jump from blank to loaded. Tools like plaiceholder and Sharp can generate LQIP data URIs.',
    },
    {
      category: 'Figma',
      question: 'How do I add placeholder images in Figma designs?',
      answer:
        'Create a rectangle with the target dimensions and fill it with a gray color (#E5E7EB or similar). Add a text layer with the dimensions and center it. Group as a component for reuse across the design. Alternatively, use Figma plugins: "Unsplash" inserts real photographs, "Placeholder" generates labeled rectangles, and "Content Reel" populates designs with mock content including images. For consistent team usage, add a placeholder component to your design system.',
    },
    {
      category: 'Generators',
      question: 'Can I generate placeholder images on the server side in Node.js?',
      answer:
        'Yes. Use Sharp for high-performance server-side image generation: sharp({ create: { width, height, channels: 3, background: { r: 229, g: 231, b: 235 } } }).png().toBuffer(). This returns a PNG Buffer that can be served directly from an Express route. For text labels, use SVG generation (no Canvas dependencies) or the sharp composite API to overlay an SVG text layer on the generated image.',
    },
    {
      category: 'URL API',
      question: 'How does the via.placeholder.com URL API work?',
      answer:
        'The URL format is: https://via.placeholder.com/WIDTHxHEIGHT/BGCOLOR/TEXTCOLOR?text=Custom+Text. Examples: /300x200 returns a 300×200 gray rectangle with "300x200" text; /300x200/ff0000/ffffff returns a red background with white text; /300 returns a 300×300 square; /300x200.png forces PNG format. The service is free but has rate limits and may have occasional downtime "” use for development only, not production.',
    },
    {
      category: 'Responsive',
      question: 'How do I create responsive placeholder images that maintain aspect ratio?',
      answer:
        'Use the CSS aspect-ratio property: .placeholder { aspect-ratio: 16/9; width: 100%; background: #e5e7eb; }. Before universal aspect-ratio support, the padding-top hack was used: wrap the placeholder in a container with padding-top: 56.25% (for 16:9) and position: relative, then position the placeholder absolutely within it. For SVG placeholders, set width="100%" height="auto" on the SVG element to let it scale fluidly.',
    },
    {
      category: 'Accessibility',
      question: 'Should placeholder images have alt text?',
      answer:
        'Yes "” always include the alt attribute, even on placeholder images. For purely decorative placeholders where the space will be filled by real content, use alt="" (empty string) to tell screen readers to ignore the element. Never omit the alt attribute entirely "” that causes screen readers to read the image filename or URL, which is confusing for users. For placeholder images that represent meaningful content (e.g., in a product listing), use descriptive alt text like alt="Product photo placeholder".',
    },
    {
      category: 'Design',
      question: 'What colors should I use for placeholder images?',
      answer:
        'Standard placeholder colors: background #E5E7EB or #D1D5DB (light gray), text #9CA3AF or #6B7280 (medium gray). These Tailwind gray palette values have become the de facto standard. For dark mode, invert to #374151 background with #6B7280 text. Avoid pure white or black backgrounds which can be confused with actual content or broken images. The gray tones clearly communicate "not final" to both developers and stakeholders.',
    },
    {
      category: 'Email',
      question: 'Do placeholder images work in HTML email templates?',
      answer:
        'External placeholder services (via.placeholder.com, picsum.photos) work in email since they are just standard image URLs. SVG inline images have limited email client support "” Outlook does not render SVG. For email templates, use PNG or JPEG placeholder images. Background-color CSS as placeholders are unreliable in email clients; always use actual image files. Litmus and Email on Acid are tools for testing image rendering across email clients.',
    },
    {
      category: 'Storybook',
      question: 'How do I use placeholder images in Storybook stories?',
      answer:
        'Use the data URI approach for offline-safe placeholders: import the generatePlaceholder function or use a fixed base64 SVG data URI as the src prop. For photograph placeholders, picsum.photos with a fixed seed (picsum.photos/seed/storyname/300/200) provides deterministic images that don&#39;t change between renders. Avoid via.placeholder.com in Storybook CI environments which may be network-restricted.',
    },
    {
      category: 'Tools',
      question: 'What desktop tools can generate placeholder images?',
      answer:
        'ImageMagick: convert -size 300x200 xc:#e5e7eb -pointsize 20 -fill "#9ca3af" -gravity center -annotate 0 "300x200" placeholder.png. GIMP: Script-Fu console can generate placeholder images programmatically. Inkscape: create SVG placeholders with precise dimensions. For batch generation, a shell script with ImageMagick is the most efficient approach. Python with Pillow: Image.new("RGB", (300, 200), "#e5e7eb") followed by ImageDraw for text.',
    },
    {
      category: 'Security',
      question: 'Are there security concerns with external placeholder image services?',
      answer:
        'Using external placeholder services requires browsers to make requests to third-party servers, which: (1) leaks user IP addresses to the placeholder service; (2) may violate strict Content Security Policies that disallow external image sources; (3) introduces availability dependency "” if the service is down, images break; (4) may trigger CORS issues in certain configurations. For any project with security requirements, use locally generated or self-hosted placeholder images.',
    },
  ],
};
