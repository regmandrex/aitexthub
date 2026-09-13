import type { ToolContent } from './index';

export const faviconGeneratorContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Favicon Generator: Create Complete Browser Icon Sets for Every Platform</h2>
        <p>
          A favicon "” short for "favorite icon" "” is the small image that appears in browser tabs, bookmark
          lists, address bars, and increasingly in mobile home screens, app launchers, and operating system
          UI. What started as a single 16×16 pixel ICO file has evolved into a complex ecosystem of sizes,
          formats, and manifest declarations that span desktop browsers, iOS, Android, Windows, and macOS.
          Our Favicon Generator handles this complexity for you, creating a complete icon set and the
          necessary HTML declarations from a single source image.
        </p>
        <p>
          Getting favicons right matters more than many developers realize. A missing or low-resolution
          favicon shows as a broken icon or a generic browser icon in bookmarks and pinned tabs. An
          improperly sized icon appears blurry or poorly cropped on high-DPI displays. An incomplete
          manifest means your site won't have a proper icon when added to a mobile home screen. Our tool
          generates all required sizes and formats from your source image, outputting everything you need
          for a complete, professional favicon implementation.
        </p>

        <h2>The History of Favicons: From 16×16 ICO to PWA Manifests</h2>
        <p>
          The favicon was introduced by Internet Explorer 5 in 1999. The original mechanism was simple:
          place a file named <code>favicon.ico</code> in the root of your web server and the browser would
          automatically request it. The ICO format was chosen because it could contain multiple image sizes
          in a single file "” originally just 16×16 pixels at 256 colors.
        </p>
        <p>
          The W3C standardized the favicon in HTML 4.01 via the <code>{'<link rel="shortcut icon">'}</code>
          element, allowing any image format (PNG, GIF, ICO) to be specified with a custom path. Over time,
          the <code>shortcut</code> keyword was removed from the standard "” modern HTML uses{' '}
          <code>rel="icon"</code> "” but browsers continue to support the old form for backward compatibility.
        </p>
        <p>
          As retina displays became common starting with the iPhone 4 in 2010 and MacBook Pros in 2012,
          the 16×16 favicon became visibly blurry on high-DPI screens. Developers began providing larger
          sizes "” 32×32, 48×48 "” via the <code>sizes</code> attribute on the link element. Apple
          simultaneously introduced the "Apple Touch Icon" for websites added to the iOS home screen,
          requiring 57×57, then 60×60, 72×72, 76×76, 120×120, 152×152, and eventually 180×180 pixel
          versions in PNG format. Android Chrome followed with its own requirements via the Web App Manifest.
          Windows 8 and 10 added tile icons. The result: a modern complete favicon set easily requires
          10-15 separate image files.
        </p>

        <h2>What Image Files Does a Complete Favicon Set Need?</h2>
        <p>
          A production-ready favicon implementation requires the following files:
        </p>
        <ul>
          <li>
            <strong>favicon.ico</strong>: A multi-size ICO container typically including 16×16 and 32×32
            images. This is the universal fallback read by all browsers, even without a{' '}
            <code>{'<link>'}</code> element. Place it at the root of your domain.
          </li>
          <li>
            <strong>favicon-16x16.png</strong>: Used by browsers that prefer PNG over ICO for tab favicons.
            Chrome and Firefox use this size for standard-density displays.
          </li>
          <li>
            <strong>favicon-32x32.png</strong>: Used for high-DPI tab favicons and taskbar shortcuts on
            Windows. Chrome's new tab page uses this size.
          </li>
          <li>
            <strong>apple-touch-icon.png</strong>: 180×180 PNG used by iOS when the user adds the site to
            their home screen. Without this file, iOS uses a screenshot of the page. The icon should have
            a white or colored background "” iOS does not apply a background automatically.
          </li>
          <li>
            <strong>android-chrome-192x192.png</strong>: Used by Android Chrome when the site is added to
            the home screen or installed as a PWA. Referenced in the Web App Manifest.
          </li>
          <li>
            <strong>android-chrome-512x512.png</strong>: Used in the Android app drawer and splash screens
            for PWAs. Referenced in the Web App Manifest. Google requires a 512×512 icon for PWA
            installability.
          </li>
          <li>
            <strong>mstile-150x150.png</strong>: Used by Windows 8/10 when the site is pinned to the
            Start menu. Referenced in <code>browserconfig.xml</code> or the{' '}
            <code>{'<meta name="msapplication-TileImage">'}</code> tag.
          </li>
          <li>
            <strong>safari-pinned-tab.svg</strong>: A monochrome SVG icon used by Safari on macOS for
            pinned tabs. Must be a single-color SVG "” Safari uses it as a mask, ignoring colors and
            applying the user's chosen accent color.
          </li>
        </ul>

        <h2>The Web App Manifest (site.webmanifest)</h2>
        <p>
          The Web App Manifest is a JSON file that provides information about your web application to the
          browser, enabling progressive web app (PWA) features including home screen installation, splash
          screens, and app-like display modes. It must be referenced in your HTML:
        </p>
        <pre><code>{'<link rel="manifest" href="/site.webmanifest">'}</code></pre>
        <p>
          A minimal <code>site.webmanifest</code> for favicon purposes:
        </p>
        <pre><code>{'{\n  "name": "My App",\n  "short_name": "App",\n  "icons": [\n    {\n      "src": "/android-chrome-192x192.png",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "/android-chrome-512x512.png",\n      "sizes": "512x512",\n      "type": "image/png"\n    }\n  ],\n  "theme_color": "#ffffff",\n  "background_color": "#ffffff",\n  "display": "standalone"\n}'}</code></pre>
        <p>
          The <code>theme_color</code> controls the browser UI color on Android Chrome (the address bar
          color), and the <code>background_color</code> is used for the splash screen background when
          the PWA is launched. <code>display: standalone</code> removes the browser chrome when the app
          is launched from the home screen.
        </p>

        <h2>HTML Link Tags for Favicon Implementation</h2>
        <p>
          The complete set of <code>{'<link>'}</code> and <code>{'<meta>'}</code> tags for cross-browser,
          cross-platform favicon support:
        </p>
        <pre><code>{'<!-- Standard favicon -->\n<link rel="icon" type="image/x-icon" href="/favicon.ico">\n\n<!-- PNG favicons for modern browsers -->\n<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n\n<!-- Apple Touch Icon for iOS -->\n<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n\n<!-- Safari pinned tab -->\n<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">\n\n<!-- Web App Manifest -->\n<link rel="manifest" href="/site.webmanifest">\n\n<!-- Windows tile -->\n<meta name="msapplication-TileColor" content="#2d89ef">\n<meta name="theme-color" content="#ffffff">'}</code></pre>
        <p>
          The order matters: browsers read link elements top to bottom and use the most specific match.
          More specific entries (with explicit <code>sizes</code> and <code>type</code>) should come
          after the generic <code>favicon.ico</code> fallback so browsers that support specific sizes
          use the best available image.
        </p>

        <h2>SVG Favicons: The Future of Browser Icons</h2>
        <p>
          All modern desktop browsers (Chrome 80+, Firefox 41+, Safari 12+, Edge 80+) support SVG
          favicons via <code>{'<link rel="icon" type="image/svg+xml" href="/favicon.svg">'}</code>. SVG
          favicons are resolution-independent "” they look perfect at any size and on any display density.
          They also support CSS, including <code>@media (prefers-color-scheme: dark)</code>, enabling
          automatic dark mode variants without serving separate files:
        </p>
        <pre><code>{'<!-- In favicon.svg -->\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <style>\n    circle { fill: #0066ff; }\n    @media (prefers-color-scheme: dark) {\n      circle { fill: #66aaff; }\n    }\n  </style>\n  <circle cx="50" cy="50" r="50"/>\n</svg>'}</code></pre>
        <p>
          Despite excellent browser support, SVG favicons should not completely replace the ICO fallback
          because older browsers, some email clients, and bookmarking services still request
          <code>favicon.ico</code>. The recommended modern implementation uses SVG as the primary icon
          with ICO as a fallback:
        </p>
        <pre><code>{'<link rel="icon" href="/favicon.ico" sizes="any"><!-- fallback -->\n<link rel="icon" href="/favicon.svg" type="image/svg+xml"><!-- preferred -->'}</code></pre>

        <h2>Favicon Design Best Practices</h2>
        <h3>Simplicity Above All Else</h3>
        <p>
          At 16×16 pixels, a favicon has only 256 pixels to work with. Complex logos, thin lines, and
          fine details become unrecognizable at this scale. The most effective favicons use:
        </p>
        <ul>
          <li>A single letter or monogram from the brand name.</li>
          <li>A simple geometric icon or logo mark (not the full logo).</li>
          <li>High contrast between foreground and background.</li>
          <li>Bold, thick strokes that remain visible at small sizes.</li>
          <li>Maximum 2-3 colors for clarity.</li>
        </ul>
        <h3>Design for the Smallest Size First</h3>
        <p>
          The 16×16 favicon is the hardest design constraint. Start there "” if it's recognizable at 16×16,
          it will look great at 32×32, 192×192, and beyond. If you start at 512×512 and scale down, fine
          details will turn into an unrecognizable blur. Consider pixel art techniques for the 16×16 version:
          deliberate pixel placement on whole-pixel boundaries eliminates anti-aliasing blur.
        </p>
        <h3>Background Color and Transparency</h3>
        <p>
          The ICO and PNG formats support full transparency. Whether to use a transparent background
          depends on context:
        </p>
        <ul>
          <li>
            <strong>Browser tabs</strong>: transparent backgrounds adapt to the browser's theme (light or
            dark). A logo mark without a background looks modern and integrates well with both themes.
          </li>
          <li>
            <strong>Apple Touch Icons</strong>: iOS does not apply a background to app icons "” what you
            provide is what appears on the home screen. Use a solid background color that represents the
            brand for touch icons.
          </li>
          <li>
            <strong>Windows Tiles</strong>: Windows applies its own background color (specified via{' '}
            <code>msapplication-TileColor</code>), so tile images should use a transparent background
            to let the tile color show.
          </li>
        </ul>
        <h3>Dark Mode Awareness</h3>
        <p>
          A favicon with a white or very light design will be invisible on a browser with a dark tab bar.
          Options: (1) use an SVG favicon with a <code>@media (prefers-color-scheme)</code> query to
          switch colors; (2) use a colored background that is visible on both light and dark themes;
          (3) provide separate favicons for light and dark via JavaScript that swaps the link element's
          <code>href</code> based on <code>window.matchMedia('(prefers-color-scheme: dark)')</code>.
        </p>

        <h2>Animated Favicons</h2>
        <p>
          Animated ICO files (using multiple frames like an animated GIF) are technically supported in
          some browsers, though support is inconsistent and performance is poor. A better approach uses
          JavaScript to cycle through a series of favicon images for notification-style animations:
        </p>
        <pre><code>{"let step = 0;\nconst frames = ['/favicon-1.png', '/favicon-2.png', '/favicon-3.png'];\nsetInterval(() => {\n  document.querySelector('link[rel=icon]').href = frames[step % frames.length];\n  step++;\n}, 200);"}</code></pre>
        <p>
          Canvas-based dynamic favicons can display real-time data like unread notification counts,
          progress bars, or live data visualizations. Libraries like <em>Favicon.js</em> and{' '}
          <em>Tinycon</em> simplify this pattern.
        </p>

        <h2>Emoji Favicons</h2>
        <p>
          A simple trick for quick, unique favicons: use an emoji as an SVG favicon. This requires no
          image file at all:
        </p>
        <pre><code>{"<link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>\">"}</code></pre>
        <p>
          This technique works in modern browsers and renders the emoji at whatever resolution the browser
          needs. It is not suitable for professional branded products but is useful for development tools,
          internal dashboards, and personal projects where a branded favicon is not required.
        </p>

        <h2>Favicon Caching and Cache Busting</h2>
        <p>
          Browsers cache favicons aggressively "” often indefinitely. When you update a favicon, many users
          will continue seeing the old one for days or weeks. To force the new favicon to load:
        </p>
        <ul>
          <li>
            Add a version query string: <code>href="/favicon.ico?v=2"</code>. The browser treats the URL
            as a new resource and fetches it fresh. Users who already have the page open need to refresh,
            but new visits will get the latest icon.
          </li>
          <li>
            Change the filename: <code>favicon-v2.ico</code>. Less elegant but absolutely guaranteed to
            bust the cache.
          </li>
          <li>
            In development, use hard reload (Ctrl+Shift+R / Cmd+Shift+R) to force all cached resources
            including favicons to be reloaded.
          </li>
        </ul>

        <h2>Favicon for Progressive Web Apps (PWA)</h2>
        <p>
          PWAs have stricter icon requirements than standard websites:
        </p>
        <ul>
          <li>A 192×192 icon is required for Android home screen installation.</li>
          <li>A 512×512 icon is required for the PWA splash screen and the Chrome app store.</li>
          <li>Icons should be defined in the Web App Manifest's <code>icons</code> array.</li>
          <li>
            For maskable icons (icons that can be safely cropped to different shapes by Android), the
            design should have a safe zone in the center 80% of the image with at least a 10% padding
            on all sides. Specify <code>purpose: "maskable"</code> in the manifest icons array.
          </li>
        </ul>
        <pre><code>{'{\n  "icons": [\n    {\n      "src": "/icon-192.png",\n      "sizes": "192x192",\n      "type": "image/png",\n      "purpose": "any"\n    },\n    {\n      "src": "/icon-512.png",\n      "sizes": "512x512",\n      "type": "image/png",\n      "purpose": "any maskable"\n    }\n  ]\n}'}</code></pre>

        <h2>Testing Your Favicon Implementation</h2>
        <p>
          After implementing favicons, verify the complete implementation:
        </p>
        <ul>
          <li>
            <strong>Browser tab</strong>: Open the page in Chrome, Firefox, Safari, and Edge. Check the
            favicon appears in the tab and matches your design at small sizes.
          </li>
          <li>
            <strong>Bookmarks</strong>: Bookmark the page and verify the icon appears in the bookmarks bar.
          </li>
          <li>
            <strong>iOS home screen</strong>: Use "Add to Home Screen" in Safari on an iPhone or iPad.
            The apple-touch-icon should appear as the app icon.
          </li>
          <li>
            <strong>Android home screen</strong>: Add to home screen in Chrome on Android. The
            android-chrome-192x192 icon should appear.
          </li>
          <li>
            <strong>RealFaviconGenerator validator</strong>: The RealFaviconGenerator website includes
            a favicon checker that fetches your site and reports missing icons, incorrect sizes, and
            broken manifest declarations.
          </li>
          <li>
            <strong>Google Search Console</strong>: The Rich Results Test and URL Inspection tools show
            how Google renders your favicon for search results.
          </li>
        </ul>

        <h2>Common Favicon Mistakes and How to Avoid Them</h2>
        <ul>
          <li>
            <strong>Serving favicon.ico with wrong MIME type</strong>: Ensure your server sends{' '}
            <code>Content-Type: image/x-icon</code> or <code>image/vnd.microsoft.icon</code> for ICO files.
            Some servers default to <code>application/octet-stream</code>, which causes browsers to reject
            the file.
          </li>
          <li>
            <strong>Missing favicon in SPAs</strong>: Single-page apps built with webpack or Vite sometimes
            forget to copy static assets including the favicon to the output directory. Verify{' '}
            <code>favicon.ico</code> is at the root of your deployed site.
          </li>
          <li>
            <strong>Using a JPEG for touch icons</strong>: Apple Touch Icons must be PNG. JPEG is not
            supported.
          </li>
          <li>
            <strong>Forgetting the manifest</strong>: Many developers add the favicon files but forget
            to reference the <code>site.webmanifest</code> with a link element, preventing PWA
            installability.
          </li>
          <li>
            <strong>Low-contrast designs</strong>: Dark logos on dark tab bars (or light logos on light
            tab bars) become invisible. Test on both light and dark browser themes.
          </li>
        </ul>

        <h2>How to Use This Favicon Generator</h2>
        <p>
          Upload your source image "” ideally a high-resolution PNG (512×512 or larger) or an SVG for
          maximum quality. The generator produces all required sizes and formats: favicon.ico (16×16 and
          32×32 embedded), PNG files at every standard size, and the <code>site.webmanifest</code> JSON
          file. Copy the generated HTML snippet directly into your page's <code>{'<head>'}</code> section.
          The tool also provides a preview of how your favicon will appear at each size so you can verify
          legibility before downloading.
        </p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What is a favicon and why do I need one?',
      answer:
        'A favicon is the small icon displayed in browser tabs, bookmarks, and history lists for your website. Without a favicon, browsers show a generic default icon, which makes your site look unfinished and reduces brand recognition. A proper favicon also improves user experience "” visitors can quickly identify your tab among many open tabs, and bookmarks are more recognizable.',
    },
    {
      category: 'Basics',
      question: 'What is the minimum favicon setup for a modern website?',
      answer:
        'The practical minimum is: (1) favicon.ico at your domain root as a universal fallback; (2) a 32×32 PNG for modern browsers; (3) a 180×180 apple-touch-icon.png for iOS; (4) a site.webmanifest with 192×192 and 512×512 icons for Android/PWA. Most visitors will be covered by this set. The ICO file alone is technically sufficient but will appear blurry on retina displays.',
    },
    {
      category: 'Formats',
      question: 'What image format should I use for favicons "” ICO, PNG, or SVG?',
      answer:
        'Use all three for maximum compatibility. ICO at the domain root as the universal fallback (all browsers). PNG for explicit link elements at specific sizes (better compression and quality than ICO for PNG). SVG as the preferred icon in modern browsers (infinite resolution, dark mode support via CSS media queries). The recommended pattern: <link rel="icon" href="/favicon.ico" sizes="any"> followed by <link rel="icon" href="/favicon.svg" type="image/svg+xml">.',
    },
    {
      category: 'Formats',
      question: 'What is an ICO file and can it contain multiple sizes?',
      answer:
        'An ICO file is a container format that can embed multiple images at different sizes and color depths in a single file. A typical favicon.ico contains 16×16 and 32×32 images. Some implementations also include 48×48 and 64×64. The browser chooses the most appropriate size from the container. ICO files can contain PNG-compressed images as of Windows Vista, which improves quality and reduces file size.',
    },
    {
      category: 'Apple',
      question: 'What is the Apple Touch Icon and what size should it be?',
      answer:
        'The Apple Touch Icon is used by iOS Safari when a user adds your site to their home screen. The recommended size is 180×180 pixels PNG "” this is the largest size required and iOS will scale it down for older devices. Name it apple-touch-icon.png and reference it with <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">. The icon should have a solid background color since iOS does not apply one automatically.',
    },
    {
      category: 'Android',
      question: 'What favicon sizes does Android Chrome require?',
      answer:
        'Android Chrome uses the icons defined in your Web App Manifest. The required sizes are 192×192 (for home screen addition) and 512×512 (for the PWA splash screen and Chrome installability requirements). Define these in site.webmanifest under the "icons" key with their paths, sizes, and type fields. Without these, Android may fall back to a screenshot of your page.',
    },
    {
      category: 'Manifest',
      question: 'What is site.webmanifest and do I need it?',
      answer:
        'site.webmanifest (or manifest.json) is a JSON file that describes your web application, including its name, theme color, and icon set. It enables PWA features like home screen installation on Android, splash screens, and standalone app mode. You need it if you want Android Chrome to use your custom icons and if you want your site to be installable as a PWA. Reference it with <link rel="manifest" href="/site.webmanifest">.',
    },
    {
      category: 'SVG',
      question: 'Can I use an SVG file as a favicon?',
      answer:
        'Yes. All major modern desktop browsers support SVG favicons: Chrome 80+, Firefox 41+, Safari 12+, Edge 80+. Use <link rel="icon" type="image/svg+xml" href="/favicon.svg">. SVG favicons are infinitely scalable and support CSS including @media (prefers-color-scheme: dark) for automatic dark mode adaptation. Keep an ICO fallback for older browsers: <link rel="icon" href="/favicon.ico" sizes="any">.',
    },
    {
      category: 'Design',
      question: 'How do I design a good favicon?',
      answer:
        'Design for the smallest size first "” 16×16 pixels. At this scale, only simple shapes and letter marks are recognizable; complex logos become blurry. Use high contrast, bold strokes, and maximum 2-3 colors. Avoid thin lines and fine details. A single initial letter, a simple icon from your logo, or a geometric shape works best. Test your design at 16×16 before finalizing.',
    },
    {
      category: 'Design',
      question: 'Should my favicon have a transparent or colored background?',
      answer:
        'For browser tab favicons, transparent backgrounds let the icon adapt to both light and dark browser themes "” this is usually the best choice for a modern look. For Apple Touch Icons (iOS home screen), use a solid colored background since iOS does not apply one. For Windows tiles, use transparent and set the tile color via msapplication-TileColor meta tag. For Android icons with "maskable" purpose, ensure a solid background within the safe zone.',
    },
    {
      category: 'Dark Mode',
      question: 'How do I create a favicon that works in both light and dark browser themes?',
      answer:
        'SVG favicons support CSS media queries including prefers-color-scheme. Add a <style> element inside your SVG with @media (prefers-color-scheme: dark) rules to change icon colors for dark themes. For PNG/ICO favicons, use JavaScript to swap the favicon&#39;s href attribute based on window.matchMedia("(prefers-color-scheme: dark)").matches. Alternatively, design a single icon with high contrast that is visible on both light and dark backgrounds.',
    },
    {
      category: 'PWA',
      question: 'What is a maskable icon and why do I need it?',
      answer:
        'Maskable icons are designed to be safely cropped to different shapes (circle, rounded square, teardrop) by Android launchers. The icon design must keep all important content within the central 80% of the image (the "safe zone") with at least 10% padding on all sides. Declare maskable icons in your manifest with "purpose": "maskable". Without a maskable icon, Android may display your icon with white padding to prevent awkward cropping.',
    },
    {
      category: 'Implementation',
      question: 'Where should I place favicon files in my project?',
      answer:
        'Place favicon.ico, site.webmanifest, and the root-level PNG/SVG files in the public directory (for frameworks like Next.js, Nuxt, or Vite) or the root of your web server. The ICO file must be accessible at yourdomain.com/favicon.ico (no path) because many browsers and services request it from the root without reading your HTML. Other files can be in a subdirectory if you update the href values in your link elements accordingly.',
    },
    {
      category: 'Implementation',
      question: 'What HTML do I add to my head element for complete favicon support?',
      answer:
        'The complete set: <link rel="icon" type="image/x-icon" href="/favicon.ico"> as the fallback, <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">, <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">, <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">, <link rel="manifest" href="/site.webmanifest">, <meta name="theme-color" content="#your-color">.',
    },
    {
      category: 'Caching',
      question: 'My favicon updated but browsers are still showing the old one "” how do I fix this?',
      answer:
        'Browsers cache favicons aggressively. To force an update: add a version query string to the favicon URL in your link elements (<link rel="icon" href="/favicon.ico?v=2">), or change the filename. For personal cache clearing: do a hard reload (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac), clear browser history, or open in a private/incognito window. Other users&#39; caches will expire naturally over time, or sooner with the query string technique.',
    },
    {
      category: 'SEO',
      question: 'Does having a favicon affect Google search rankings?',
      answer:
        'Google displays favicons in search results (the small icon next to the URL in mobile and desktop search). A missing or low-quality favicon results in Google showing a generic globe icon, which reduces click-through rates. Google requires the favicon to be accessible to its crawler and at least 48×48 pixels (it displays at 16×16 in results). While favicon presence is not a direct ranking signal, click-through rate is, and recognizable icons improve CTR.',
    },
    {
      category: 'SEO',
      question: 'What favicon requirements does Google have for showing it in search results?',
      answer:
        'Google&#39;s requirements: the favicon URL must be accessible to Googlebot (not blocked by robots.txt); the image must be at least 48×48 pixels; the favicon must be a square image; it should represent your brand (Google will not show favicons it considers misleading). If Google cannot find your favicon or it doesn&#39;t meet requirements, a generic globe icon appears. Verify your favicon in Google Search Console under URL Inspection.',
    },
    {
      category: 'Next.js',
      question: 'How do I add a favicon in Next.js?',
      answer:
        'In Next.js 13+ with the App Router, place a favicon.ico in the app/ directory "” Next.js automatically serves it and generates the link tag. You can also use route-based metadata with the metadata export, or place icon.png, icon.svg, apple-icon.png files in the app/ directory for automatic favicon detection. For the Pages Router, place favicon.ico in the public/ directory and add link tags in _document.tsx or per-page Head components.',
    },
    {
      category: 'Tools',
      question: 'What source image should I use with a favicon generator?',
      answer:
        'Use a high-resolution square PNG (minimum 512×512 pixels, ideally 1024×1024) or an SVG for the cleanest results. The source should be your logo mark or icon "” not the full horizontal logo with a text wordmark. The image should have either a transparent background (if the icon will stand alone) or the background color you want for touch icons. Avoid very thin strokes or fine details that will disappear at small sizes.',
    },
    {
      category: 'Windows',
      question: 'What are Windows tile icons and do I still need them?',
      answer:
        'Windows tile icons (mstile) were used by Windows 8/10 when websites were pinned to the Start menu via Internet Explorer. With IE&#39;s end of life and Edge&#39;s switch to Chromium, Windows tile icons have declining relevance. Modern Edge uses the Web App Manifest for PWA icons. If your audience includes Windows users who might pin your site via older systems, include the mstile-150x150.png and browserconfig.xml. Otherwise, they can be safely omitted.',
    },
    {
      category: 'Troubleshooting',
      question: 'Why is my favicon not showing up?',
      answer:
        'Common causes: (1) The favicon file is not in the expected location (domain root for favicon.ico); (2) The server is returning a 404 for the favicon URL; (3) The browser has cached a 404 response "” clear cache and hard reload; (4) The link element is missing or points to the wrong path; (5) The MIME type is incorrect (should be image/x-icon for ICO); (6) The image file is corrupted or in an unsupported format. Check the browser&#39;s Network tab in DevTools to see the favicon request status.',
    },
    {
      category: 'Emoji',
      question: 'Can I use an emoji as a favicon?',
      answer:
        'Yes, using a data URI SVG: <link rel="icon" href="data:image/svg+xml,<svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 100 100&#39;><text y=&#39;.9em&#39; font-size=&#39;90&#39;>🎨</text></svg>">. This works in modern browsers without any image file. The emoji renders at the browser&#39;s native size and quality. It is suitable for development tools, internal apps, and personal projects but not for professional branded sites where a custom icon is expected.',
    },
    {
      category: 'Animation',
      question: 'Can I animate a favicon?',
      answer:
        'Yes, using JavaScript. Animate by cycling the href attribute of the link[rel=icon] element between different image URLs using setInterval. You can also draw to a Canvas element and use canvas.toDataURL() to set the favicon dynamically "” this enables real-time notification badges, progress indicators, or custom animations based on app state. Libraries like Favicon.js and Tinycon provide prebuilt badge/counter functionality.',
    },
    {
      category: 'Testing',
      question: 'How do I test that my favicon is working correctly across all platforms?',
      answer:
        'Test in multiple browsers (Chrome, Firefox, Safari, Edge) for tab and bookmark appearance. Test "Add to Home Screen" on an actual iOS device in Safari and on Android in Chrome. Use the RealFaviconGenerator website validator which checks all sizes and formats. Check Google Search Console&#39;s Rich Results Test. In DevTools, inspect the Network tab and filter for "favicon" to see which files are being requested and their response status codes.',
    },
  ],
};
