import type { ToolContent } from './index';

export const placeholderImageGeneratorContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Placeholder Image Generator: Generate Tailored Placeholder Graphics for Design and Development</h2>
        <p>Placeholder images are blank or captioned graphics utilized during creation and prototyping to designate zones where genuine images will eventually display. They permit developers to construct and evaluate layouts, UI elements, and interfaces absent of final assets originating from designers or content creators. Our Placeholder Image Generator builds custom-sized placeholder graphics featuring adjustable color schemes, text captions, and file formats - instantly and freely.</p>
        <p>Placeholder images fulfill an essential function within contemporary web creation pipelines. They enable frontend developers and designers to operate separately: developers build layouts utilizing placeholders possessing accurate dimensions, while designers or content groups deliver authentic images later. This concurrent methodology represents standard practice amongst agile development groups. Placeholder images likewise prove vital concerning design system documentation, component library Storybook stories, README captures, and user acceptance testing scenarios.</p>

        <h2>The Evolution of Placeholder Image Platforms</h2>
        <p>Around 2009, placehold.it (currently known as via.placeholder.com) started the trend of remote placeholder image services. By offering a straightforward URL API <code>https://via.placeholder.com/300x200</code> that delivered a gray box displaying its dimensions in text, it created the global standard for web development placeholders.</p>
        <p>Various imaginative alternatives emerged afterwards. Lorempixel, which is no longer active, offered actual photos across categories like food, people, and nature. Picsum Photos utilizes seed-based random Unsplash-style pictures. Other fun options included Placebear and Placedog featuring animal snapshots. Clients sometimes mistook these photographic placeholders for final assets on professional jobs. Ultimately, the text-labeled gray box stays the most unmistakable sign of a placeholder.</p>

        <h2>Typical Placeholder Image Sizes</h2>
        <p>Typical sizes applied in web layout match frequent UI designs:</p>
        <ul>
          <li><strong>16×16</strong>: browser favicon, tiny icon</li>
          <li><strong>32×32</strong>: conventional icon</li>
          <li><strong>48×48</strong>: medium-sized icon, list view avatar</li>
          <li><strong>64×64</strong>: compact avatar</li>
          <li><strong>100×100</strong>: compact profile picture</li>
          <li><strong>150×150</strong>: preview thumbnail, item card graphic</li>
          <li><strong>200×200</strong>: evenly proportioned thumbnail</li>
          <li><strong>300×200</strong>: landscape card visual, article preview</li>
          <li><strong>400×300</strong>: standard blog photo</li>
          <li><strong>600×400</strong>: primary featured image</li>
          <li><strong>800×600</strong>: bigger article photo, 4:3 aspect ratio</li>
          <li><strong>1200×630</strong>: Open Graph image (og:image), social media preview</li>
          <li><strong>1280×720</strong>: high definition 720p, main visual, header banner</li>
          <li><strong>1920×1080</strong>: Full HD 1080p, widescreen header banner</li>
          <li><strong>2560×1440</strong>: 2K resolution at 1440p, expansive background graphic</li>
        </ul>
        <p>Proportions are just as vital as size measurements. Frequently used web design aspect ratios:</p>
        <ul>
          <li><strong>1:1 (square)</strong>: user avatars, item previews, profile pictures</li>
          <li><strong>4:3</strong>: classic display screen, standard media visuals</li>
          <li><strong>16:9</strong>: HD video, wide headers, presentation slides</li>
          <li><strong>3:2</strong>: digital camera photos, wide card graphics</li>
          <li><strong>2:1</strong>: expansive panoramic headers</li>
          <li><strong>9:16</strong>: vertical format (mobile vertical, TikTok, Stories)</li>
          <li><strong>21:9</strong>: cinematic ultra-wide</li>
        </ul>

        <h2>Creating Placeholder Images Using CSS</h2>
        <p>For pure CSS placeholder setups requiring zero outside dependencies, several methods work well:</p>
        <h3>Aspect Ratio Combined with CSS Background Color</h3>
        <pre><code>{'.placeholder {\n  background-color: #e5e7eb;\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.placeholder::before {\n  content: "Image placeholder";\n}'}</code></pre>
        <h3>SVG Data URI Generated via CSS</h3>
        <p>An SVG data URI may be placed directly inside CSS acting as a background image, producing a self-contained placeholder featuring custom text and colors:</p>
        <pre><code>{'background-image: url(&#39;data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="100%25" height="100%25" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" fill="%23888" font-family="sans-serif" font-size="14"%3E300×200%3C/text%3E%3C/svg%3E&#39;);'}</code></pre>

        <h2>Generating Placeholder Images via SVG</h2>
        <p>SVG serves as the optimal format for placeholder graphics due to infinite scalability, microscopic file sizes, and dynamic generation capabilities with custom dimensions. A complete SVG placeholder:</p>
        <pre><code>{'<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">\n  <rect width="100%" height="100%" fill="#e5e7eb"/>\n  <!-- Cross pattern for visual interest -->\n  <line x1="0" y1="0" x2="400" y2="300" stroke="#d1d5db" stroke-width="1"/>\n  <line x1="400" y1="0" x2="0" y2="300" stroke="#d1d5db" stroke-width="1"/>\n  <rect x="1" y="1" width="398" height="298" fill="none" stroke="#d1d5db" stroke-width="1"/>\n  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"\n    fill="#6b7280" font-family="sans-serif" font-size="16" font-weight="500">\n    400×300\n  </text>\n</svg>'}</code></pre>
        <p>SVG placeholders can incorporate diagonal lines (the traditional design wireframe "X" motif), a camera icon, personalized text, or alternative visual markers. The SVG may be embedded straight into HTML or called through an <code>src</code> attribute value.</p>

        <h2>URL-Based Placeholder Services</h2>
        <p>Remote URL-driven placeholder platforms supply the fastest approach for inserting placeholders into HTML without file generation:</p>
        <h3>via.placeholder.com</h3>
        <pre><code>{'https://via.placeholder.com/300x200\nhttps://via.placeholder.com/300x200/ff0000/ffffff?text=Title\nhttps://via.placeholder.com/300  <!-- square -->'}</code></pre>
        <h3>Lorem Picsum (picsum.photos)</h3>
        <pre><code>{'https://picsum.photos/300/200          <!-- random photo -->\nhttps://picsum.photos/seed/abc/300/200   <!-- deterministic -->\nhttps://picsum.photos/300/200?grayscale  <!-- grayscale -->\nhttps://picsum.photos/300/200?blur=5     <!-- blurred -->'}</code></pre>
        <h3>dummyimage.com</h3>
        <pre><code>{'https://dummyimage.com/300x200/000/fff\nhttps://dummyimage.com/300x200.png\nhttps://dummyimage.com/300x200/ff0000/00ff00&text=Hello'}</code></pre>
        <h3>Canvas API Self-Hosted Approach</h3>
        <p>For applications unable to rely on external services (such as CI testing, offline builds, or air-gapped systems), the HTML Canvas API can produce placeholder images directly within the browser:</p>
        <pre><code>{"function generatePlaceholder(width, height, bg = '#e5e7eb', fg = '#6b7280') {\n  const canvas = document.createElement('canvas');\n  canvas.width = width;\n  canvas.height = height;\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = bg;\n  ctx.fillRect(0, 0, width, height);\n  ctx.strokeStyle = fg;\n  ctx.lineWidth = 1;\n  ctx.beginPath();\n  ctx.moveTo(0, 0);\n  ctx.lineTo(width, height);\n  ctx.moveTo(width, 0);\n  ctx.lineTo(0, height);\n  ctx.stroke();\n  ctx.fillStyle = fg;\n  ctx.textAlign = 'center';\n  ctx.textBaseline = 'middle';\n  ctx.font = `${Math.min(width, height) * 0.1}px sans-serif`;\n  ctx.fillText(`${width}×${height}`, width / 2, height / 2);\n  return canvas.toDataURL();\n}"}</code></pre>

        <h2>Placeholder Images Within Design Software</h2>
        <h3>Figma</h3>
        <p>Figma accommodates placeholder images utilizing the "image fill" feature: construct a frame matching your target dimensions, apply a color fill (usually gray), and incorporate a text label. Figma design system component libraries frequently feature a standardized "placeholder" element possessing uniform styling. The Unsplash plugin supplies authentic photo placeholders right inside Figma.</p>
        <h3>Sketch</h3>
        <p>Sketch offers native placeholder functionality: rectangles equipped with "data" fills that automatically populate using images pulled from a preset collection. The "Images" data format delivers random stock photographs. Tailored data sources can be established for project-specific placeholder collections.</p>
        <h3>Adobe XD</h3>
        <p>XD supplies the "Repeat Grid" function featuring automatically populated image content sourced from a directory, streamlining the creation of realistic prototype layouts containing multiple card images simultaneously.</p>

        <h2>Using Placeholder Images in JavaScript Frameworks</h2>
        <h3>React</h3>
        <pre><code>{"// Basic SVG placeholder element\nfunction Placeholder({ width, height, text, bg = '#e5e7eb', fg = '#9ca3af' }) {\n  return (\n    <svg\n      width={width}\n      height={height}\n      xmlns=\"http://www.w3.org/2000/svg\"\n      viewBox={`0 0 ${width} ${height}`}\n    >\n      <rect width=\"100%\" height=\"100%\" fill={bg} />\n      <text\n        x=\"50%\"\n        y=\"50%\"\n        textAnchor=\"middle\"\n        dominantBaseline=\"middle\"\n        fill={fg}\n        fontSize={Math.min(width, height) * 0.1}\n        fontFamily=\"sans-serif\"\n      >\n        {text || `${width}×${height}`}\n      </text>\n    </svg>\n  );\n}"}</code></pre>
        <h3>Next.js Image Element</h3>
        <p>
          Next.js's <code>{'<Image>'}</code> component supports a <code>placeholder</code> prop:
        </p>
        <ul>
          <li><code>placeholder="empty"</code>: no placeholder is used (standard)</li>
          <li><code>placeholder="blur"</code>: displays a low-resolution blurred variant while the complete graphic loads. Next.js creates the blur automatically for local files, whereas remote images require a <code>blurDataURL</code></li>
          <li><code>placeholder="data:..."</code>: applies a personalized data URI serving as the placeholder</li>
        </ul>
        <pre><code>{'import Image from "next/image";\n\n<Image\n  src="/product.jpg"\n  width={400}\n  height={300}\n  placeholder="blur"\n  alt="Product photo"\n/>'}</code></pre>
        <h3>Low-Quality Image Placeholders (LQIP) and Lazy Loading</h3>
        <p>The Low-Quality Image Placeholder pattern utilizes a miniature, heavily compressed (10x10 pixels or smaller) duplicate of the original image as a temporary stand-in that loads instantly, before smoothly transitioning to the high-resolution file upon completion. The stand-in is frequently formatted as a base64 data URI embedded right inside the HTML, which removes the need for an extra network call. Utilities such as Squoosh, Sharp, and <code>plaiceholder</code> are capable of creating suitable LQIP data URIs.</p>

        <h2>The Modern Alternative: Skeleton Screens</h2>
        <p>Skeleton screens (alternatively known as content placeholders or skeleton loaders) represent UI patterns where empty shapes mimicking the general structure of incoming content appear while fetching data. Concerning images, this translates to a gray box with the proper aspect ratio featuring a subtle pulse effect. This method delivers superior perceived performance compared to standard loading spinners while outlining the layout for users ahead of content delivery.</p>
        <pre><code>{'/* CSS skeleton loader */\n.skeleton-image {\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes shimmer {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}'}</code></pre>
        <p>Skeleton screens currently serve as the prevailing standard for loading interfaces across web and mobile platforms, implemented by Facebook, LinkedIn, YouTube, and essentially all major software products.</p>

        <h2>SEO Best Practices for Image Placeholders</h2>
        <p>Whenever utilizing placeholder images in live environments (though this ought to be uncommon as placeholders should swap out pre-launch), keep potential SEO impacts in mind:</p>
        <ul>
          <li>Always incorporate informative <code>alt</code> text, because even for stand-ins, a blank <code>alt=""</code> remains superior to leaving it out entirely</li>
          <li>Refrain from referencing third-party placeholder platforms in production environments, since they might experience outages and create unwanted external dependencies</li>
          <li>Third-party placeholder platforms could potentially trigger blocks by corporate firewalls as well as content security policies</li>
          <li>Placeholder images affect Core Web Vitals LCP (Largest Contentful Paint) metrics if their file sizes are excessive, so ensure placeholder files remain appropriately dimensioned</li>
        </ul>

        <h2>Server-Side Placeholder Generation</h2>
        <p>For dynamic software solutions, placeholder images are able to be produced on-demand on the server side:</p>
        <h3>Sharp with Node.js</h3>
        <pre><code>{"import sharp from 'sharp';\n\nasync function generatePlaceholder(width, height) {\n  return sharp({\n    create: {\n      width,\n      height,\n      channels: 3,\n      background: { r: 229, g: 231, b: 235 }\n    }\n  })\n  .png()\n  .toBuffer();\n}"}</code></pre>
        <h3>Express.js Placeholder Endpoint</h3>
        <pre><code>{"app.get('/placeholder/:size', async (req, res) => {\n  const [width, height] = req.params.size.split('x').map(Number);\n  const buffer = await generatePlaceholder(width, height);\n  res.set('Content-Type', 'image/png');\n  res.set('Cache-Control', 'public, max-age=31536000');\n  res.send(buffer);\n});"}</code></pre>

        <h2>[10] How to Use This Placeholder Image Generator</h2>
        <p>Type your preferred width and height in pixels, modify the background tone, font color, and caption text. The tool builds the picture instantly inside the preview and provides downloads as PNG or SVG format. Users may additionally copy the graphic as a base64 data URI for direct embedding within HTML or CSS. Choose from standard dimensions for frequent scenarios (avatar, card image, hero banner, Open Graph) to rapidly create standard-size placefillers. These generated graphics look neat, feature clear dimension labels, and work great for development wireframes, Storybook stories, design documentation, and prototype presentations.</p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What defines a placeholder image?',
      answer:
        'A placeholder image is a dummy graphic utilized throughout software creation or prototyping to denote an area where an actual picture will eventually show up. Such placeholder images usually consist of gray or tinted rectangles featuring their pixel dimensions written inside, distinctly signaling "this is not final content" while enabling structures to be assembled and tested prior to receiving real assets.',
    },
    {
      category: 'Basics',
      question: 'Why do programmers rely on placeholder images?',
      answer:
        'Placeholder images enable concurrent development: frontend engineers construct user interfaces with properly scaled placeholders while designers or content groups gather final assets. They also serve in component library documentation, Storybook stories, README screenshots, API documentation, design mockups, and user testing sessions where authentic graphics remain unnecessary or unavailable.',
    },
    {
      category: 'Formats',
      question: 'Which format is best for placeholder images "” PNG or SVG?',
      answer:
        'SVG is generally favored for placeholder images because it scales infinitely, stays lightweight in file size, and gets created dynamically with custom dimensions. SVG additionally displays text labels at any scale without losing crispness. Choose PNG whenever a raster format is required (certain legacy utilities or mail clients might lack SVG support), or when precise pixel rendering matters. For coding purposes, SVG remains almost always the superior alternative.',
    },
    {
      category: 'Formats',
      question: 'Is it possible to use a placeholder image as a base64 data URI?',
      answer:
        'Yes. A placeholder SVG or PNG is easily encoded into a base64 data URI and applied straight into the src property of an img tag or inside a CSS background-image. This removes any requirement for a separate image file or network call. Structure: data:image/svg+xml;base64,[encoded SVG] or data:image/png;base64,[encoded PNG]. This proves especially helpful regarding CSS-only placeholder components within UI libraries.',
    },
    {
      category: 'Services',
      question: 'Which placeholder image services are the most widely used?',
      answer:
        'via.placeholder.com: provides gray rectangles with labels at any size through a URL (https://via.placeholder.com/300x200). Picsum Photos (picsum.photos): supplies random pictures at given dimensions. Lorem Picsum lets you use grayscale, blur, and seeded random picks. dummyimage.com: acts like via.placeholder.com but includes color choices. For most production development tasks, local SVG creation is favored over third-party services to prevent network reliance.',
    },
    {
      category: 'Services',
      question: 'Is it okay to use external placeholder image services in production code?',
      answer:
        'No "” external placeholder services must only be utilized during development, testing, and prototyping phases. In production, they bring in outside dependencies that might experience downtime, get blocked by firewalls or content security policies, add latency via extra network calls, and could log access data. Swap out all placeholder images for actual assets prior to releasing to production.',
    },
    {
      category: 'Dimensions',
      question: 'What size dimensions ought I to select for an Open Graph image placeholder?',
      answer:
        '1200×630 pixels is the standard dimension for Open Graph (og:image) visuals. This proportion (about 1.91:1) is utilized by Facebook, Twitter/X, LinkedIn, and most social networks for previewing links. Content ought to stay inside the inner 1080×566 space to fit varying crop styles across platforms. The smallest size most networks accept is 600×315.',
    },
    {
      category: 'Dimensions',
      question: 'What is the typical size for a website hero image placeholder?',
      answer:
        'Standard hero image sizes: 1920×1080 (Full HD, most frequent for desktop), 1440×810 (frequent for many contemporary sites), 1280×720 (720p, smallest for modern sites), and 2560×1440 (2K for retina/HiDPI). For responsive layouts, the intrinsic aspect ratio of the hero section matters more than exact pixel measurements. A 16:9 ratio (1920×1080) functions well for most landscape hero designs.',
    },
    {
      category: 'CSS',
      question: 'How can I make a CSS-only placeholder image?',
      answer:
        'Employ a div featuring background-color and aspect-ratio: div { background-color: #e5e7eb; aspect-ratio: 4/3; width: 100%; }. Include a pseudo-element for the text: div::before { content: "Image placeholder"; display: block; text-align: center; color: #9ca3af; }. For the traditional X wireframe aesthetic, apply CSS gradients or SVG background graphics. The aspect-ratio property (supported across all modern browsers) is the neatest approach to preserve proportions without JavaScript.',
    },
    {
      category: 'React',
      question: 'How do I build a reusable placeholder image component in React?',
      answer:
        'Make an SVG-based component that accepts width, height, text, background color, and text color props. Output an SVG element with a rect fill and centered text node. This method needs no external dependencies and functions with SSR. For Next.js specifically, the built-in Image component handles placeholder="blur" together with a blurDataURL prop for production-grade progressive loading.',
    },
    {
      category: 'Next.js',
      question: 'How does the Next.js Image component manage placeholder images?',
      answer:
        'The Next.js Image component supports three placeholder settings: "empty" (no placeholder, standard), "blur" (shows a blurred low-res copy while fetching "” automatically produced for local files), and a custom data URI. For remote graphics using a blur placeholder, supply a blurDataURL (a tiny base64-encoded image). The blur placeholder prevents layout shifts when images load and boosts perceived speed.',
    },
    {
      category: 'Skeleton',
      question: 'What is a skeleton screen and how does it connect to image placeholders?',
      answer:
        'A skeleton screen displays empty shapes matching the structure of loading content, complete with an animated shimmer effect. For images, this means a gray rectangle matching the proper aspect ratio featuring a pulsing gradient animation. Skeleton screens deliver better perceived performance than static placeholders and convey layout structure to users while loading. They stand as the industry standard for loading states across web and mobile apps (utilized by Facebook, YouTube, LinkedIn).',
    },
    {
      category: 'Performance',
      question: 'What is a Low-Quality Image Placeholder (LQIP) and how does it function?',
      answer:
        'LQIP is a performance method where a tiny (10-20px), heavily compressed copy of the real image serves as a placeholder while the full image downloads. The LQIP is encoded as a base64 data URI and inlined within HTML so it becomes available instantly without a network call. As the complete image loads, it smoothly replaces the LQIP. This delivers a visual preview of the final asset and minimizes the visual jump from empty to loaded. Tools like Sharp and plaiceholder can produce LQIP data URIs.',
    },
    {
      category: 'Figma',
      question: 'How can I add placeholder images within Figma designs?',
      answer:
        'Draw a rectangle matching the target dimensions and fill it using a gray hue (#E5E7EB or similar). Add a text layer featuring the dimensions and center it. Group as a component for reuse throughout the layout. Alternatively, employ Figma plugins: "Unsplash" drops in real photographs, "Placeholder" builds labeled rectangles, and "Content Reel" populates layouts with mock content including images. For consistent team adoption, include a placeholder component in your design system.',
    },
    {
      category: 'Generators',
      question: 'Is it possible to generate placeholder images on the server side using Node.js?',
      answer:
        'Yes. Utilize Sharp for high-performance server-side image creation: sharp({ create: { width, height, channels: 3, background: { r: 229, g: 231, b: 235 } } }).png().toBuffer(). This yields a PNG Buffer that can be delivered directly via an Express route. For text labels, apply SVG generation (lacking Canvas dependencies) or the sharp composite API to overlay an SVG text layer onto the generated graphic.',
    },
    {
      category: 'URL API',
      question: 'How does the via.placeholder.com URL API operate?',
      answer:
        'The URL structure is: https://via.placeholder.com/WIDTHxHEIGHT/BGCOLOR/TEXTCOLOR?text=Custom+Text. Examples: /300x200 outputs a 300×200 gray rectangle bearing "300x200" text; /300x200/ff0000/ffffff yields a red background with white text; /300 yields a 300×300 square; /300x200.png forces PNG format. The service is free yet has rate limits and might experience periodic downtime "” utilize for development only, not production.',
    },
    {
      category: 'Responsive',
      question: 'How can I build responsive placeholder images that preserve aspect ratio?',
      answer:
        'Apply the CSS aspect-ratio rule: .placeholder { aspect-ratio: 16/9; width: 100%; background: #e5e7eb; }. Before aspect-ratio had widespread support, the padding-top trick was common: enclose the placeholder inside a wrapper set to padding-top: 56.25% (for 16:9) and position: relative, then give the placeholder an absolute position inside it. When using SVG placeholders, apply width="100%" height="auto" directly to the SVG tag to ensure smooth scaling.',
    },
    {
      category: 'Accessibility',
      question: 'Do placeholder images require alt text?',
      answer:
        'Definitely "” always include the alt attribute, even for placeholder graphics. For purely decorative placeholders destined to be replaced by actual content, use alt="" (blank string) to instruct screen readers to bypass the element. Never leave out the alt attribute entirely "” this forces screen readers to read the image URL or filename aloud, creating a confusing experience. For placeholder images that signify meaningful elements (such as inside a product catalog), apply descriptive alt text like alt="Product photo placeholder".',
    },
    {
      category: 'Design',
      question: 'What color scheme works best for placeholder images?',
      answer:
        'Standard placeholder color codes: background #E5E7EB or #D1D5DB (soft gray), text #9CA3AF or #6B7280 (mid gray). These Tailwind gray shades are now the established default. For dark mode interfaces, reverse this to a #374151 background paired with #6B7280 text. Steer clear of pure black or pure white backgrounds, which might be mistaken for real content or broken graphics. These gray tones clearly signal "not final" to both developers and stakeholders.',
    },
    {
      category: 'Email',
      question: 'Can placeholder images be used inside HTML email templates?',
      answer:
        'External placeholder platforms (picsum.photos, via.placeholder.com) function correctly in emails because they rely on standard image URLs. Inline SVG graphics have poor support across email clients "” Outlook, for instance, does not render SVG. For email layouts, stick to PNG or JPEG placeholders. CSS background-color rules used as placeholders are unreliable in mail clients; always utilize actual image files. Email on Acid and Litmus are useful utilities for checking image display across various email applications.',
    },
    {
      category: 'Storybook',
      question: 'How should placeholder images be implemented in Storybook stories?',
      answer:
        'Utilize the data URI technique for offline-friendly placeholders: import the generatePlaceholder function or apply a static base64 SVG data URI for the src prop. For photographic placeholders, picsum.photos with a static seed (picsum.photos/seed/storyname/300/200) delivers consistent images that remain static across re-renders. Avoid via.placeholder.com within Storybook CI workflows that might lack internet access.',
    },
    {
      category: 'Tools',
      question: 'Which desktop programs can generate placeholder images?',
      answer:
        'ImageMagick: convert -size 300x200 xc:#e5e7eb -pointsize 20 -fill "#9ca3af" -gravity center -annotate 0 "300x200" placeholder.png. GIMP: The Script-Fu console can build placeholder images programmatically. Inkscape: design SVG placeholders with exact dimensions. For bulk generation, a shell script utilizing ImageMagick is the most efficient choice. Python with Pillow: Image.new("RGB", (300, 200), "#e5e7eb") combined with ImageDraw for handling text.',
    },
    {
      category: 'Security',
      question: 'Are there security risks associated with third-party placeholder image services?',
      answer:
        'Relying on external placeholder services forces browsers to send requests to outside servers, which: (1) exposes user IP addresses to the placeholder provider; (2) might breach strict Content Security Policies that block external image links; (3) creates a dependency on uptime "” if the provider fails, the images break; (4) can trigger CORS issues under certain setups. For projects with strict security guidelines, stick to locally created or self-hosted placeholder graphics.',
    },
  ],
};
