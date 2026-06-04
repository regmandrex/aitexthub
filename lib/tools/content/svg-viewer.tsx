import type { ToolContent } from './index';

export const svgViewerContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>SVG Viewer: Render, Inspect, and Understand SVG Files</h2>
        <p>
          SVG (Scalable Vector Graphics) files are XML-based text files that describe two-dimensional
          graphics using geometric shapes, paths, text, and styling. Unlike raster images (JPEG, PNG,
          WebP), SVGs contain mathematical descriptions of shapes that render perfectly at any size "”
          from a 16×16 favicon to a 4K billboard, the same SVG file produces crisp, artifact-free output.
          Our SVG Viewer renders SVG markup in real time, displays the source code with syntax highlighting,
          and provides detailed information about the SVG's structure, dimensions, and element tree.
        </p>
        <p>
          SVG files are used for logos, icons, illustrations, data visualizations, UI elements, animations,
          and interactive graphics. Understanding how to read, write, and debug SVG markup is a valuable
          skill for frontend developers, designers who work with web deliverables, and anyone who needs to
          inspect or modify vector graphics programmatically.
        </p>

        <h2>A History of SVG</h2>
        <p>
          The SVG format was developed by the W3C (World Wide Web Consortium) in the late 1990s as an
          open standard for vector graphics on the web. The first SVG specification (1.0) was published
          as a W3C Recommendation in September 2001. The format was designed to provide a resolution-
          independent alternative to raster images for logos, icons, and diagrams on the web.
        </p>
        <p>
          SVG adoption was slow throughout the 2000s. Internet Explorer did not support SVG natively
          until IE9 (2011), requiring plugins (Adobe SVG Viewer) for earlier versions. Firefox added
          basic SVG support in version 1.5 (2005), and Safari added it in 3.0 (2007). The turning
          point came with the proliferation of retina/HiDPI displays starting with the iPhone 4 in 2010,
          which made the limitations of raster icons immediately visible. SVG became the preferred format
          for icons and logos as developers sought resolution-independent alternatives.
        </p>
        <p>
          SVG 1.1 (second edition, 2011) is the current widely-supported specification. SVG 2 is in
          development with additional features including better integration with CSS and HTML, but has
          limited browser support in 2025. Most SVG files in production use SVG 1.1 features.
        </p>

        <h2>The SVG Document Structure</h2>
        <p>
          Every SVG document has a root <code>{'<svg>'}</code> element with namespace and dimension
          declarations, followed by child elements describing the graphic content:
        </p>
        <pre><code>{'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  width="24"\n  height="24"\n  fill="none"\n  stroke="currentColor"\n>\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n    d="M12 4v16m8-8H4"/>\n</svg>'}</code></pre>
        <h3>xmlns</h3>
        <p>
          The <code>xmlns="http://www.w3.org/2000/svg"</code> attribute declares the SVG namespace.
          Required for standalone SVG files (.svg) parsed as XML. Optional when SVG is inline in an
          HTML5 document (the HTML parser infers the namespace), but harmless to include.
        </p>
        <h3>viewBox</h3>
        <p>
          The <code>viewBox</code> attribute defines the internal coordinate system:{' '}
          <code>viewBox="min-x min-y width height"</code>. All shapes within the SVG use coordinates
          relative to this coordinate system. The viewBox enables SVG scaling: a SVG with{' '}
          <code>viewBox="0 0 24 24"</code> can be displayed at any pixel size by setting CSS{' '}
          <code>width</code> and <code>height</code> "” the browser scales the coordinate system to fit.
          Without viewBox, SVGs render at fixed pixel dimensions.
        </p>
        <h3>width and height</h3>
        <p>
          The intrinsic dimensions of the SVG. When SVG is used as an <code>{'<img>'}</code> or
          background image, these set the default size. When SVG is inline in HTML, CSS width/height
          override these values. Setting <code>width="100%"</code> on inline SVG (without height) can
          cause sizing issues; use <code>viewBox</code> with CSS sizing instead.
        </p>

        <h2>SVG Shape Elements</h2>
        <p>
          SVG provides six basic shape elements plus the general-purpose path element:
        </p>
        <h3>{'<path>'} "” The Universal Shape</h3>
        <p>
          The <code>{'<path>'}</code> element draws arbitrary shapes using a mini-language of commands
          in the <code>d</code> attribute. Path commands:
        </p>
        <ul>
          <li><strong>M x,y</strong>: move to (starts a new subpath without drawing)</li>
          <li><strong>L x,y</strong>: line to</li>
          <li><strong>H x</strong>: horizontal line to</li>
          <li><strong>V y</strong>: vertical line to</li>
          <li><strong>C x1,y1 x2,y2 x,y</strong>: cubic Bézier curve</li>
          <li><strong>S x2,y2 x,y</strong>: smooth cubic Bézier (inferred first control point)</li>
          <li><strong>Q x1,y1 x,y</strong>: quadratic Bézier curve</li>
          <li><strong>T x,y</strong>: smooth quadratic Bézier</li>
          <li><strong>A rx,ry x-rotation large-arc-flag sweep-flag x,y</strong>: elliptical arc</li>
          <li><strong>Z</strong>: close path (draw line back to start of current subpath)</li>
        </ul>
        <p>
          Uppercase commands use absolute coordinates; lowercase commands use relative coordinates
          (relative to the current cursor position). Using relative commands results in more compact
          path data because coordinate values are smaller numbers.
        </p>
        <h3>{'<rect>'}</h3>
        <p>
          Draws a rectangle. Attributes: <code>x</code>, <code>y</code> (top-left corner), <code>width</code>,{' '}
          <code>height</code>, <code>rx</code>, <code>ry</code> (border radius). Both <code>rx</code> and{' '}
          <code>ry</code> are set: creates an elliptical border radius. Only <code>rx</code> is set:{' '}
          <code>ry</code> defaults to <code>rx</code>.
        </p>
        <h3>{'<circle>'}</h3>
        <p>
          Draws a circle. Attributes: <code>cx</code>, <code>cy</code> (center coordinates), <code>r</code>
          (radius).
        </p>
        <h3>{'<ellipse>'}</h3>
        <p>
          Draws an ellipse. Attributes: <code>cx</code>, <code>cy</code> (center), <code>rx</code>{' '}
          (horizontal radius), <code>ry</code> (vertical radius).
        </p>
        <h3>{'<line>'}</h3>
        <p>
          Draws a straight line. Attributes: <code>x1</code>, <code>y1</code> (start point),{' '}
          <code>x2</code>, <code>y2</code> (end point). Only visible with a stroke; no fill.
        </p>
        <h3>{'<polyline>'}</h3>
        <p>
          Draws a series of connected line segments (open polygon). Attribute: <code>points</code>
          (space or comma-separated list of x,y coordinate pairs).
        </p>
        <h3>{'<polygon>'}</h3>
        <p>
          Like polyline but closed "” the last point connects back to the first. Attribute:{' '}
          <code>points</code>.
        </p>

        <h2>SVG Text</h2>
        <p>
          The <code>{'<text>'}</code> element renders text within SVG. Key attributes:{' '}
          <code>x</code>, <code>y</code> (anchor position), <code>text-anchor</code> (start, middle, end "”
          controls horizontal alignment relative to x), <code>dominant-baseline</code> (controls vertical
          alignment), <code>font-family</code>, <code>font-size</code>, <code>fill</code>.
        </p>
        <pre><code>{'<text\n  x="50%"\n  y="50%"\n  text-anchor="middle"\n  dominant-baseline="middle"\n  font-family="sans-serif"\n  font-size="16"\n  fill="#333"\n>\n  Hello SVG\n</text>'}</code></pre>
        <p>
          SVG text uses the system's installed fonts or web fonts loaded via <code>{'<style>'}</code>.
          For icons and logos, "outline text" (converting text to paths) is preferred for guaranteed
          rendering consistency, though it prevents text selection and accessibility.
        </p>

        <h2>SVG Styling: Presentation Attributes vs CSS</h2>
        <p>
          SVG elements can be styled in three ways:
        </p>
        <h3>Presentation Attributes</h3>
        <p>
          Style properties written directly as XML attributes on elements: <code>fill="red"</code>,{' '}
          <code>stroke="black"</code>, <code>stroke-width="2"</code>. These are the most portable
          and have good browser support. They can be overridden by CSS.
        </p>
        <h3>Inline Style</h3>
        <p>
          The HTML <code>style</code> attribute syntax works in SVG: <code>style="fill: red; stroke: black;"</code>.
          Inline styles override presentation attributes.
        </p>
        <h3>CSS Style Sheets</h3>
        <p>
          SVG elements can be targeted with CSS, either in a <code>{'<style>'}</code> block inside the
          SVG or from an external stylesheet (when SVG is inline in HTML). CSS takes precedence over
          presentation attributes. This is the most powerful styling approach and enables themes,
          hover effects, and animations:
        </p>
        <pre><code>{'<style>\n  .icon { fill: currentColor; }\n  .icon:hover { fill: blue; }\n</style>'}</code></pre>
        <p>
          The <code>currentColor</code> value is especially useful for icon SVGs "” it inherits the
          text color of the parent element, allowing icon color to be controlled entirely by CSS{' '}
          <code>color</code> property.
        </p>

        <h2>SVG Gradients and Patterns</h2>
        <h3>Linear Gradients</h3>
        <pre><code>{'<defs>\n  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">\n    <stop offset="0%" stop-color="#0066ff"/>\n    <stop offset="100%" stop-color="#00ccff"/>\n  </linearGradient>\n</defs>\n<rect fill="url(#grad)" width="200" height="100"/>'}</code></pre>
        <h3>Radial Gradients</h3>
        <pre><code>{'<defs>\n  <radialGradient id="rgrad" cx="50%" cy="50%" r="50%">\n    <stop offset="0%" stop-color="white"/>\n    <stop offset="100%" stop-color="#0066ff"/>\n  </radialGradient>\n</defs>'}</code></pre>
        <h3>Patterns</h3>
        <pre><code>{'<defs>\n  <pattern id="dots" x="0" y="0" width="10" height="10"\n    patternUnits="userSpaceOnUse">\n    <circle cx="5" cy="5" r="2" fill="#ddd"/>\n  </pattern>\n</defs>\n<rect fill="url(#dots)" width="100%" height="100%"/>'}</code></pre>

        <h2>SVG Filters</h2>
        <p>
          SVG's filter primitives system provides powerful image processing effects:
        </p>
        <pre><code>{'<defs>\n  <filter id="blur">\n    <feGaussianBlur stdDeviation="3"/>\n  </filter>\n  <filter id="shadow">\n    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>\n  </filter>\n</defs>\n<circle filter="url(#blur)" cx="50" cy="50" r="40"/>'}</code></pre>
        <p>
          Available filter primitives include: <code>feGaussianBlur</code> (blur),{' '}
          <code>feDropShadow</code>, <code>feColorMatrix</code> (color transforms), <code>feMorphology</code>
          (expand/contract), <code>feComposite</code> (blend two sources), <code>feTurbulence</code>
          (noise/texture), <code>feDisplacementMap</code>, <code>feFlood</code>, and more. Filters can
          be chained: the output of one primitive feeds the input of the next via <code>in</code> and{' '}
          <code>result</code> attributes.
        </p>

        <h2>SVG Animations</h2>
        <p>
          SVG supports two animation approaches:
        </p>
        <h3>CSS Animations on SVG Elements</h3>
        <p>
          The preferred approach. All CSS animation properties work on SVG elements including{' '}
          <code>transform</code>, <code>opacity</code>, <code>fill</code>, <code>stroke</code>, and
          more. CSS animations are GPU-accelerated and composited without layout recalculation:
        </p>
        <pre><code>{'@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  transform-origin: center;\n  animation: spin 1s linear infinite;\n}'}</code></pre>
        <h3>SMIL Animations (Deprecated)</h3>
        <p>
          SVG has its own animation system based on SMIL (Synchronized Multimedia Integration Language)
          using elements like <code>{'<animate>'}</code>, <code>{'<animateTransform>'}</code>, and{' '}
          <code>{'<animateMotion>'}</code>. SMIL animations work without JavaScript and are self-contained
          in the SVG file, but Chrome deprecated support for SMIL animations in 2015 (and later reversed
          the removal). CSS animations are the recommended alternative for new projects.
        </p>

        <h2>SVG Accessibility</h2>
        <p>
          Making SVGs accessible requires explicit effort:
        </p>
        <ul>
          <li>
            <strong>Informative SVGs</strong> (icons, logos, diagrams): add <code>role="img"</code> to
            the <code>{'<svg>'}</code> element, a <code>{'<title>'}</code> as the first child, and
            <code>aria-labelledby</code> pointing to the title's ID.
          </li>
          <li>
            <strong>Decorative SVGs</strong> (purely visual, accompanied by visible text): add{' '}
            <code>aria-hidden="true"</code> so screen readers skip them.
          </li>
          <li>
            <strong>Interactive SVGs</strong>: buttons and links within SVGs need appropriate ARIA
            roles and keyboard event handlers.
          </li>
          <li>
            <strong>Complex infographics</strong>: provide a text alternative (in a caption or
            aria-describedby linked element) summarizing the data for screen reader users.
          </li>
        </ul>

        <h2>SVG Clipping and Masking</h2>
        <p>
          SVG clipping (<code>{'<clipPath>'}</code>) and masking (<code>{'<mask>'}</code>) control the
          visibility of elements:
        </p>
        <pre><code>{'<!-- Clip to a circle -->\n<defs>\n  <clipPath id="circle-clip">\n    <circle cx="50" cy="50" r="40"/>\n  </clipPath>\n</defs>\n<image href="photo.jpg" clip-path="url(#circle-clip)"\n  width="100" height="100"/>\n\n<!-- Gradient mask for fade effect -->\n<defs>\n  <mask id="fade">\n    <linearGradient id="g">\n      <stop offset="0" stop-color="white"/>\n      <stop offset="1" stop-color="black"/>\n    </linearGradient>\n    <rect fill="url(#g)" width="100" height="100"/>\n  </mask>\n</defs>\n<rect mask="url(#fade)" fill="blue" width="100" height="100"/>'}</code></pre>

        <h2>Using SVG in HTML</h2>
        <p>
          SVG can be used in HTML in several ways, each with different trade-offs:
        </p>
        <ul>
          <li>
            <strong>Inline SVG</strong>: SVG markup embedded directly in the HTML document. Allows full
            CSS access, JavaScript access, and no extra HTTP request. The SVG inherits the document's
            CSS context. Best for icons, logos, and interactive graphics.
          </li>
          <li>
            <strong>{'<img src="icon.svg">'}</strong>: SVG as an external image. Cached by the browser.
            No access to the SVG's internal elements from CSS or JavaScript. Scripts inside the SVG do
            not execute. Good for decorative images and when caching is important.
          </li>
          <li>
            <strong>CSS background-image</strong>: SVG as a background. Same limitations as{' '}
            <code>{'<img>'}</code>. Good for decorative backgrounds and pseudo-element icons.
          </li>
          <li>
            <strong>{'<object type="image/svg+xml">'}</strong>: SVG with its own browsing context.
            Scripts inside execute. Limited CSS inheritance from parent. Rarely used in modern development.
          </li>
        </ul>

        <h2>Debugging SVG</h2>
        <p>
          Browser DevTools provide full SVG debugging capabilities. SVG elements appear in the HTML
          Element panel with their attributes and computed styles. Key debugging techniques:
        </p>
        <ul>
          <li>Inspect the <code>viewBox</code> to understand the coordinate system.</li>
          <li>Select individual path elements and highlight their bounding boxes.</li>
          <li>Check for <code>overflow: hidden</code> hiding content outside the viewBox.</li>
          <li>Verify that <code>fill</code> and <code>stroke</code> values are applied correctly
          (check the cascade "” CSS overrides presentation attributes).</li>
          <li>Use the Computed panel to see <code>currentColor</code> resolved values.</li>
          <li>For animation issues, use the Chrome Animations panel to slow down and inspect
          CSS animations on SVG elements.</li>
        </ul>

        <h2>How to Use This SVG Viewer</h2>
        <p>
          Paste SVG markup into the editor or upload an SVG file. The viewer renders the SVG in real
          time with a live preview. The source panel shows syntax-highlighted XML with collapsible
          element trees for easy navigation of complex SVGs. Metadata is extracted and displayed: file
          size, viewBox dimensions, element count breakdown (paths, shapes, groups, defs). Toggle between
          a white, black, or transparent background to check how the SVG renders against different
          contexts. The viewer is entirely client-side "” your SVG data never leaves your browser.
        </p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What is SVG and what advantages does it have over raster images?',
      answer:
        'SVG (Scalable Vector Graphics) is an XML-based format that describes graphics as geometric shapes and paths rather than pixels. Key advantages: infinite resolution (no blur at any size), small file size for simple graphics, editable as text, styleable with CSS, animatable without JavaScript, accessible (text can be selected and read by screen readers), and printable at any resolution. Disadvantages: not suitable for photographs, can be complex for detailed illustrations, requires more rendering work than raster images for complex scenes.',
    },
    {
      category: 'Basics',
      question: 'What is the viewBox attribute and why is it important?',
      answer:
        'viewBox="min-x min-y width height" defines the SVG&#39;s internal coordinate system. It enables scaling: an SVG with viewBox="0 0 24 24" can be displayed at any pixel size by setting CSS width/height "” the browser scales the coordinate space to fit. Without viewBox, SVGs render only at their intrinsic pixel size. Always include a viewBox; it is the single most important attribute for making SVGs responsive and scalable.',
    },
    {
      category: 'Structure',
      question: 'What SVG elements can I use to draw shapes?',
      answer:
        'SVG provides: <rect> (rectangles, with rx/ry for rounded corners), <circle> (circles, with cx/cy center and r radius), <ellipse> (ellipses, with rx/ry radii), <line> (single line segments), <polyline> (connected line segments, open), <polygon> (connected line segments, closed), and <path> (arbitrary shapes using the path mini-language "” the most flexible and most common element). All shapes accept fill, stroke, and other presentation attributes.',
    },
    {
      category: 'Paths',
      question: 'How do SVG path commands work?',
      answer:
        'Path commands in the d attribute draw the shape: M (move to, starts a new subpath), L (line to), H (horizontal line), V (vertical line), C (cubic Bézier curve), S (smooth cubic Bézier), Q (quadratic Bézier), T (smooth quadratic Bézier), A (elliptical arc), Z (close path). Uppercase commands use absolute coordinates; lowercase use relative coordinates. Relative commands produce more compact path data since coordinate values are smaller.',
    },
    {
      category: 'Styling',
      question: 'What is currentColor in SVG and how do I use it?',
      answer:
        'currentColor is a CSS keyword that inherits the color property of the element&#39;s parent in the HTML document. When an SVG uses fill="currentColor" or stroke="currentColor", the icon color is controlled by the CSS color property of the surrounding HTML. This is the standard way to make SVG icons match text color: set the icon&#39;s fill to currentColor and control the color entirely from CSS without touching the SVG.',
    },
    {
      category: 'Styling',
      question: 'What is the difference between presentation attributes and CSS in SVG?',
      answer:
        'Presentation attributes (fill="red") are SVG attributes that set visual properties directly on elements. CSS (inline style or stylesheets) can override presentation attributes. The cascade order (low to high specificity): SVG element defaults, inherited values, presentation attributes, class/ID styles, inline styles, !important. For reusable icon components, use presentation attributes as defaults and let CSS override for theming.',
    },
    {
      category: 'Animation',
      question: 'How do I animate an SVG icon?',
      answer:
        'Preferred approach: CSS animations targeting SVG elements. SVG elements support transform (rotate, scale, translate), opacity, fill, stroke, and stroke-dasharray/dashoffset animations. For a spinning loader: @keyframes spin { to { transform: rotate(360deg); } } .icon { transform-origin: center; animation: spin 1s linear infinite; }. For path drawing effects, animate stroke-dashoffset. Avoid SMIL animations (animateTransform) "” use CSS instead.',
    },
    {
      category: 'Animation',
      question: 'How do I create an SVG path drawing animation?',
      answer:
        'Use stroke-dasharray and stroke-dashoffset. Set stroke-dasharray to the path length (get it with pathElement.getTotalLength()). Set stroke-dashoffset to the same value (hides the stroke). Animate stroke-dashoffset to 0 to reveal the path as if it is being drawn. In CSS: @keyframes draw { from { stroke-dashoffset: [length]; } to { stroke-dashoffset: 0; } }. This technique works for any SVG path element.',
    },
    {
      category: 'Accessibility',
      question: 'How do I make an SVG icon accessible?',
      answer:
        'For informative icons (used without adjacent text): add role="img" to the svg element, add <title id="t1">Icon description</title> as the first child, add aria-labelledby="t1" to svg. For decorative icons (next to visible text): add aria-hidden="true" to the svg element. For interactive icons (buttons): wrap in a <button> and add aria-label to the button. Never use SVG icons as interactive elements without accessible names.',
    },
    {
      category: 'Usage',
      question: 'When should I use inline SVG vs an <img src="file.svg">?',
      answer:
        'Inline SVG: when you need CSS styling of internal elements (currentColor, hover effects on paths), JavaScript access to SVG elements, no extra HTTP request, or ARIA accessibility that reads SVG titles. External SVG via img src: when you want browser caching, the SVG is used on many pages, you don&#39;t need to style internal elements, and scripts inside the SVG should not execute. For icon systems, inline SVG via a sprite pattern or component is standard.',
    },
    {
      category: 'Gradients',
      question: 'How do I add a gradient to an SVG element?',
      answer:
        'Define the gradient in <defs> with a unique id, then reference it with fill="url(#gradient-id)". Use <linearGradient> for linear gradients and <radialGradient> for radial. linearGradient attributes: x1, y1 (start point), x2, y2 (end point), both in percentage or user units. Add <stop> children with offset, stop-color, and stop-opacity attributes. gradientUnits="objectBoundingBox" (default) makes coordinates relative to the element&#39;s bounding box.',
    },
    {
      category: 'Filters',
      question: 'Can I apply visual effects like blur and drop shadow in SVG?',
      answer:
        'Yes, using SVG filters. Define a <filter id="f"> in <defs> and apply it with filter="url(#f)". feGaussianBlur for blur (stdDeviation controls blur radius), feDropShadow for drop shadows, feColorMatrix for color transforms, feMorphology for expand/contract, feTurbulence for noise textures. SVG filters are powerful but computationally expensive; for simple effects, CSS filter property (filter: drop-shadow()) is usually more efficient.',
    },
    {
      category: 'Clipping',
      question: 'How do SVG clip-path and mask differ?',
      answer:
        'clip-path uses a shape to define what is visible "” everything outside the clip shape is hidden (no transparency, binary visible/hidden). mask uses an alpha channel to define transparency "” white areas of the mask are fully visible, black areas are fully transparent, gray areas are partially transparent. Use clip-path for sharp cut-outs (circular avatar crops). Use mask for soft transparency effects (gradient fade, texture overlay).',
    },
    {
      category: 'Sprites',
      question: 'What is an SVG sprite and how do I use it?',
      answer:
        'An SVG sprite is a single SVG file containing multiple icons as <symbol id="icon-name"> elements. Reference icons with <svg><use href="sprite.svg#icon-name"/></svg>. Benefits: one HTTP request for all icons, browser caching, reusable across the page. Limitations: cannot easily style individual symbols from CSS when loaded as external files (use inline sprite instead). Inline sprite: add a hidden <svg style="display:none"> with all symbols to the HTML body, then reference with <use href="#icon-name">.',
    },
    {
      category: 'Performance',
      question: 'How do complex SVG files affect browser performance?',
      answer:
        'SVG rendering is CPU-bound. Complex factors: thousands of path points, many gradient stops, SVG filters (especially blur, displacement), deep group nesting, and many DOM elements. For UI icons, complexity is rarely an issue. For large illustrations or data visualizations: reduce path point density, avoid SVG filters (use CSS alternatives), use CSS will-change: transform for animated elements, and consider converting complex static illustrations to optimized raster images at the required sizes.',
    },
    {
      category: 'Performance',
      question: 'Should I inline SVGs or use external files for performance?',
      answer:
        'It depends on usage patterns. Inline SVG: no extra HTTP request, renders immediately, can be styled with CSS, but increases HTML size and is not cached separately. External SVG (img src or link): cached by browser after first load, reusable across pages without re-downloading, but requires an extra HTTP request per unique SVG. For icons used on every page (navigation, UI elements): inline SVG or SVG sprites. For large one-time illustrations: external files with caching.',
    },
    {
      category: 'Responsive',
      question: 'How do I make an SVG scale responsively with CSS?',
      answer:
        'Set viewBox on the SVG element and control size with CSS: svg { width: 100%; height: auto; }. The viewBox ensures the coordinate system scales with the CSS size. Alternatively, set only width in CSS and omit height "” the SVG maintains its viewBox aspect ratio. Avoid setting both width and height to 100% without viewBox as this can cause the SVG to stretch beyond its intended proportions.',
    },
    {
      category: 'Tools',
      question: 'What tools can I use to create and edit SVG files?',
      answer:
        'Design tools: Figma (browser and desktop, exports clean SVG), Inkscape (free, open-source, full SVG support), Adobe Illustrator (industry standard, verbose exports), Sketch (Mac-only). Code editors: VS Code with SVG Preview extension. Online editors: Boxy SVG, SVG-Edit, Vecta.io. For icons specifically: Icomoon, Fontello (icon fonts/SVG sprite generators), Heroicons, Lucide (pre-made open-source icon libraries with clean SVG code).',
    },
    {
      category: 'Debugging',
      question: 'How do I debug SVG rendering issues in the browser?',
      answer:
        'Open DevTools (F12) and inspect SVG elements in the Elements panel "” they appear like HTML elements with inspectable attributes and styles. Check: (1) Is viewBox set correctly? (2) Is fill or stroke set (not "none" when it should show)? (3) Is the element inside the viewBox bounds? (4) Is overflow: hidden clipping content? (5) Is currentColor resolving to the expected color? The Computed tab shows final computed values including resolved CSS custom properties.',
    },
    {
      category: 'Defs',
      question: 'What is the <defs> element in SVG?',
      answer:
        '<defs> (definitions) is a container for reusable SVG elements that are not rendered directly. Gradients, patterns, filters, clipPaths, masks, symbols, and marker elements are defined in <defs> with unique id attributes. They are then referenced from other elements using url(#id) for fill/filter/clip-path, or href="#id" for <use>. Elements in <defs> are invisible until referenced. Using <defs> for shared definitions is more efficient than duplicating the same gradient or filter on multiple elements.',
    },
    {
      category: 'Text',
      question: 'How do I center text within an SVG?',
      answer:
        'Use text-anchor="middle" for horizontal centering (aligns the text around x="50%") and dominant-baseline="middle" for vertical centering (aligns the text around y="50%"): <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">. For exact centering within a specific rectangle, set x and y to the rectangle&#39;s center coordinates. Note: text-anchor and dominant-baseline are SVG-specific properties, not the same as CSS text-align and vertical-align.',
    },
    {
      category: 'Security',
      question: 'Are there security risks with SVG files?',
      answer:
        'Inline SVGs can contain JavaScript (<script> elements) and external resource references (href, xlink:href) that execute in the page&#39;s security context. Never render untrusted SVG as inline HTML without sanitization "” use DOMPurify.sanitize(svgString, { USE_PROFILES: { svg: true } }). SVG loaded via <img src> or CSS background-image is sandboxed and cannot execute scripts. For user-uploaded SVGs, always sanitize before inline rendering or use the img element approach.',
    },
    {
      category: 'Namespace',
      question: 'Do I need to include xmlns in my SVG markup?',
      answer:
        'The xmlns="http://www.w3.org/2000/svg" namespace declaration is required for standalone .svg files (parsed as XML by the browser or by XML parsers). When SVG is inline in an HTML5 document, the HTML parser infers the SVG namespace automatically and xmlns is optional (but harmless). Always include xmlns in .svg files to ensure correct parsing by SVG libraries, email clients, and other XML consumers. For inline SVG in HTML, it is optional convention.',
    },
  ],
};
