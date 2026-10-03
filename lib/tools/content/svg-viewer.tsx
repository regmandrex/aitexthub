import type { ToolContent } from './index';

export const svgViewerContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Inspect, Render, and View SVG Files with SVG Viewer</h2>
        <p>Scalable Vector Graphics (SVG) documents are text files based on XML that outline 2D graphics utilizing geometric paths, shapes, typography, and styles. Unlike raster formats such as PNG, JPEG, or WebP, SVGs employ mathematical definitions for shapes, ensuring they display flawlessly at any scale--ranging from a 16x16 favicon to a billboard in 4K resolution, the exact same SVG delivers sharp, clean results. Real-time rendering of SVG markup, syntax-highlighted source code display, and in-depth details regarding the element tree, dimensions, and layout of the SVG are all provided by our SVG Viewer.</p>
        <p>Logos, graphics, visualizations of data, UI components, animations, and interactive visuals all utilize SVG files. Anyone needing to programmatically check or edit vector graphics, frontend developers, and designers dealing with web assets will find that knowing how to write, interpret, and debug SVG code is a very useful skill.</p>

        <h2>A Brief History of SVG</h2>
        <p>During the late 1990s, the World Wide Web Consortium (W3C) created the SVG format as an open standard for web vector graphics. September 2001 marked the publication of the initial SVG 1.0 specification as a W3C Recommendation. Web diagrams, icons, and logos were intended to have a resolution-independent alternative to raster images through this format.</p>
        <p>Throughout the 2000s, SVG adoption progressed slowly. Native support for SVG was absent in Internet Explorer until version 9 in 2011, which necessitated plugins like Adobe SVG Viewer for earlier releases. Version 1.5 introduced basic SVG support in Firefox in 2005, while Safari followed in 2007 with version 3.0. The release of the iPhone 4 in 2010 brought a surge of retina and HiDPI screens, acting as a turning point that instantly exposed the flaws of raster icons. As creators searched for resolution-independent options, SVG quickly became the favored choice for logos and icons.</p>
        <p>Widely utilized today, SVG 1.1 (second edition, 2011) serves as the standard current specification. Although SVG 2 is currently being built with extra capabilities such as tighter HTML and CSS integration, its browser compatibility remains restricted in 2025. Production environments largely rely on SVG 1.1 features for their SVG files.</p>

        <h2>The Structure of an SVG Document</h2>
        <p>
          Every SVG document has a root <code>{'<svg>'}</code> element with namespace and dimension
          declarations, followed by child elements describing the graphic content:
        </p>
        <pre><code>{'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  width="24"\n  height="24"\n  fill="none"\n  stroke="currentColor"\n>\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n    d="M12 4v16m8-8H4"/>\n</svg>'}</code></pre>
        <h3>xmlns</h3>
        <p>Declaring the SVG namespace is handled by the <code>xmlns="http://www.w3.org/2000/svg"</code> attribute. This is mandatory for standalone .svg files processed as XML. When embedding SVG directly into an HTML5 document, it remains optional because the HTML parser automatically detects the namespace, though including it causes no issues.</p>
        <h3>viewBox</h3>
        <p>The <code>viewBox</code> attribute establishes the internal coordinate system: {' '} <code>viewBox="min-x min-y width height"</code>. Every shape inside the SVG relies on coordinates mapped to this system. The viewBox facilitates SVG scaling: an SVG featuring{' '} <code>viewBox="0 0 24 24"</code> renders at any pixel dimension by defining CSS{' '} <code>width</code> and <code>height</code> — the browser stretches the coordinate system to match. Lacking a viewBox, SVGs display with locked pixel dimensions.</p>
        <h3>width and height</h3>
        <p>
          The intrinsic dimensions of the SVG. When SVG is used as an <code>{'<img>'}</code> or
          background image, these set the default size. When SVG is inline in HTML, CSS width/height
          override these values. Setting <code>width="100%"</code> on inline SVG (without height) can
          cause sizing issues; use <code>viewBox</code> with CSS sizing instead.
        </p>

        <h2>SVG Shape Elements</h2>
        <p>Six primary shape elements along with the versatile path element are offered by SVG:</p>
        <h3>{'<path>'} "” The Universal Shape</h3>
        <p>
          The <code>{'<path>'}</code> element draws arbitrary shapes using a mini-language of commands
          in the <code>d</code> attribute. Path commands:
        </p>
        <ul>
          <li><strong>M x,y</strong>: jump to coordinates (initiates a fresh subpath absent of drawing lines)</li>
          <li><strong>L x,y</strong>: draw line to</li>
          <li><strong>H x</strong>: draw horizontal line to</li>
          <li><strong>V y</strong>: draw vertical line to</li>
          <li><strong>C x1,y1 x2,y2 x,y</strong>: cubic B&eacute;zier curve</li>
          <li><strong>S x2,y2 x,y</strong>: smooth cubic B&eacute;zier (inferred first control point)</li>
          <li><strong>Q x1,y1 x,y</strong>: quadratic B&eacute;zier curve</li>
          <li><strong>T x,y</strong>: smooth quadratic B&eacute;zier</li>
          <li><strong>A rx,ry x-rotation large-arc-flag sweep-flag x,y</strong>: elliptical arc</li>
          <li><strong>Z</strong>: close path (draw line back to start of current subpath)</li>
        </ul>
        <p>Absolute coordinates are applied by uppercase commands, whereas relative coordinates tied to the current cursor location are used by lowercase commands. Path data becomes much smaller and more efficient with relative commands since the coordinate values are lower numbers.</p>
        <h3>{'<rect>'}</h3>
        <p>Creates a rectangular shape. Properties include <code>x</code> and <code>y</code> for the top-left corner, alongside <code>width</code>,{' '} <code>height</code>, <code>rx</code>, and <code>ry</code> for border rounding. Providing both <code>rx</code> and{' '} <code>ry</code> builds an elliptical corner radius, whereas supplying only <code>rx</code> causes{' '} <code>ry</code> to automatically match <code>rx</code>.</p>
        <h3>{'<circle>'}</h3>
        <p>Renders a circle. Properties: <code>cx</code>, <code>cy</code> (center point coordinates), <code>r</code> (radius).</p>
        <h3>{'<ellipse>'}</h3>
        <p>Renders an ellipse. Properties: <code>cx</code>, <code>cy</code> (center), <code>rx</code>{' '} (horizontal radius), <code>ry</code> (vertical radius).</p>
        <h3>{'<line>'}</h3>
        <p>Renders a straight line. Properties: <code>x1</code>, <code>y1</code> (starting point),{' '} <code>x2</code>, <code>y2</code> (ending point). Only visible when a stroke is applied; lacks a fill.</p>
        <h3>{'<polyline>'}</h3>
        <p>Renders a sequence of linked line segments forming an open shape. Property: <code>points</code> (a space-separated or comma-separated collection of x,y coordinate sets).</p>
        <h3>{'<polygon>'}</h3>
        <p>Similar to a polyline but enclosed, meaning the final point links back to the starting point. Property:{' '} <code>points</code>.</p>

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

        <h2>SVG Styling: Presentation Attributes Compared to CSS</h2>
        <p>SVG tags can be styled using three distinct methods:</p>
        <h3>Presentation Attributes</h3>
        <p>Styling rules included straight as XML properties on nodes: <code>fill="red"</code>,{' '} <code>stroke="black"</code>, <code>stroke-width="2"</code>. Such formats offer maximum portability and wide browser compatibility while remaining adjustable through CSS.</p>
        <h3>Inline Style</h3>
        <p>The HTML <code>style</code> tag format functions within SVG: <code>style="fill: red; stroke: black;"</code>. Internal styles take precedence over presentation rules.</p>
        <h3>CSS Style Sheets</h3>
        <p>
          SVG elements can be targeted with CSS, either in a <code>{'<style>'}</code> block inside the
          SVG or from an external stylesheet (when SVG is inline in HTML). CSS takes precedence over
          presentation attributes. This is the most powerful styling approach and enables themes,
          hover effects, and animations:
        </p>
        <pre><code>{'<style>\n  .icon { fill: currentColor; }\n  .icon:hover { fill: blue; }\n</style>'}</code></pre>
        <p>The <code>currentColor</code> value proves very handy for icon SVGs because it adopts the parent element's text color, enabling the icon color to be managed entirely via the CSS{' '} <code>color</code> property.</p>

        <h2>SVG Gradients and Pattern Fills</h2>
        <h3>Linear Gradients</h3>
        <pre><code>{'<defs>\n  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">\n    <stop offset="0%" stop-color="#0066ff"/>\n    <stop offset="100%" stop-color="#00ccff"/>\n  </linearGradient>\n</defs>\n<rect fill="url(#grad)" width="200" height="100"/>'}</code></pre>
        <h3>Radial Gradients</h3>
        <pre><code>{'<defs>\n  <radialGradient id="rgrad" cx="50%" cy="50%" r="50%">\n    <stop offset="0%" stop-color="white"/>\n    <stop offset="100%" stop-color="#0066ff"/>\n  </radialGradient>\n</defs>'}</code></pre>
        <h3>Patterns</h3>
        <pre><code>{'<defs>\n  <pattern id="dots" x="0" y="0" width="10" height="10"\n    patternUnits="userSpaceOnUse">\n    <circle cx="5" cy="5" r="2" fill="#ddd"/>\n  </pattern>\n</defs>\n<rect fill="url(#dots)" width="100%" height="100%"/>'}</code></pre>

        <h2>SVG Filters</h2>
        <p>The filter primitives architecture of SVG delivers robust image processing capabilities:</p>
        <pre><code>{'<defs>\n  <filter id="blur">\n    <feGaussianBlur stdDeviation="3"/>\n  </filter>\n  <filter id="shadow">\n    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>\n  </filter>\n</defs>\n<circle filter="url(#blur)" cx="50" cy="50" r="40"/>'}</code></pre>
        <p>Supported filter primitives consist of: <code>feGaussianBlur</code> (blur),{' '} <code>feDropShadow</code>, <code>feColorMatrix</code> (color adjustments), <code>feMorphology</code> (dilate/erode), <code>feComposite</code> (combining two sources), <code>feTurbulence</code> (noise/texture creation), <code>feDisplacementMap</code>, <code>feFlood</code>, and additional options. Filters can be linked together, where the output of one primitive passes into the next through <code>in</code> and{' '} <code>result</code> attributes.</p>

        <h2>SVG Animations</h2>
        <p>SVG accommodates two animation techniques:</p>
        <h3>CSS Animations Applied to SVG Tags</h3>
        <p>The recommended method. Every CSS animation property functions on SVG elements, such as{' '} <code>transform</code>, <code>opacity</code>, <code>fill</code>, <code>stroke</code>, plus others. CSS animations benefit from GPU acceleration and rendering without triggering layout recalculations:</p>
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
        <p>Ensuring SVGs are accessible demands intentional work:</p>
        <ul>
          <li>
            <strong>Informative SVGs</strong> (icons, logos, diagrams): add <code>role="img"</code> to
            the <code>{'<svg>'}</code> element, a <code>{'<title>'}</code> as the first child, and
            <code>aria-labelledby</code> pointing to the title's ID.
          </li>
          <li><strong>Decorative SVGs</strong> (strictly aesthetic, paired with visible text): insert{' '} <code>aria-hidden="true"</code> so that screen readers bypass them.</li>
          <li><strong>Interactive SVGs</strong>: buttons and links embedded inside SVGs require proper ARIA roles and keyboard interaction handlers.</li>
          <li><strong>Complex infographics</strong>: supply a text alternative (via a caption or an aria-describedby connected element) that recaps the data for users relying on screen readers.</li>
        </ul>

        <h2>SVG Clipping Paths and Masking Techniques</h2>
        <p>
          SVG clipping (<code>{'<clipPath>'}</code>) and masking (<code>{'<mask>'}</code>) control the
          visibility of elements:
        </p>
        <pre><code>{'<!-- Clip to a circle -->\n<defs>\n  <clipPath id="circle-clip">\n    <circle cx="50" cy="50" r="40"/>\n  </clipPath>\n</defs>\n<image href="photo.jpg" clip-path="url(#circle-clip)"\n  width="100" height="100"/>\n\n<!-- Gradient mask for fade effect -->\n<defs>\n  <mask id="fade">\n    <linearGradient id="g">\n      <stop offset="0" stop-color="white"/>\n      <stop offset="1" stop-color="black"/>\n    </linearGradient>\n    <rect fill="url(#g)" width="100" height="100"/>\n  </mask>\n</defs>\n<rect mask="url(#fade)" fill="blue" width="100" height="100"/>'}</code></pre>

        <h2>Embedding SVG in HTML</h2>
        <p>SVG is usable within HTML through multiple techniques, each presenting distinct pros and cons:</p>
        <ul>
          <li><strong>Inline SVG</strong>: SVG code placed straight inside the HTML file. Grants complete CSS control, JavaScript interaction, and avoids additional HTTP requests. The SVG adopts the CSS environment of the document. Ideal for icons, branding, and dynamic graphics.</li>
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
        <p>Browser DevTools offer complete SVG debugging functionality. SVG nodes show up inside the HTML Element tab alongside their attributes and computed styles. Essential debugging strategies:</p>
        <ul>
          <li>Examine the <code>viewBox</code> to comprehend the coordinate system.</li>
          <li>Choose specific path elements and outline their bounding boxes.</li>
          <li>Look for <code>overflow: hidden</code> concealing content past the viewBox.</li>
          <li>Confirm that <code>fill</code> and <code>stroke</code> properties are set properly (remember the cascade &rdquo; CSS overrides presentation attributes).</li>
          <li>Utilize the Computed panel to view <code>currentColor</code> resolved values.</li>
          <li>When debugging animation bugs, leverage the Chrome Animations panel to decelerate and analyze CSS animations on SVG elements.</li>
        </ul>

        <h2>Steps to Operate This SVG Viewer</h2>
        <p>Insert SVG markup into the editor or upload an SVG file. The viewer renders the SVG instantly featuring a live preview. The source panel displays syntax-highlighted XML featuring collapsible element trees for simple navigation of intricate SVGs. Metadata is retrieved and shown: file size, viewBox dimensions, element count breakdown (paths, shapes, groups, defs). Switch between a white, black, or transparent background to test how the SVG displays across varied settings. The viewer operates completely client-side &rdquo; your SVG data never leaves your browser.</p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What defines SVG and what makes it superior to raster graphics?',
      answer:
        'SVG (Scalable Vector Graphics) is an XML-based format defining graphics as geometric shapes and paths in place of pixels. Main benefits: infinite resolution (no blur at any scale), compact file size for basic graphics, modifiable as text, stylable using CSS, animatable absent JavaScript, accessible (text is selectable and read by screen readers), and printable at any resolution. Drawbacks: unsuited for photographs, can grow complex for detailed illustrations, demands heavier rendering effort than raster files for intricate scenes.',
    },
    {
      category: 'Basics',
      question: 'What is the viewBox attribute and why does it matter?',
      answer:
        'viewBox=&quot;min-x min-y width height&quot; establishes the SVG&#39;s internal coordinate system. It allows scaling: an SVG with viewBox=&quot;0 0 24 24&quot; may be shown at any pixel dimension by defining CSS width/height &rdquo; the browser scales the coordinate space to fit. Lacking viewBox, SVGs display solely at their native pixel size. Always include a viewBox; it stands as the single most critical attribute for making SVGs responsive and scalable.',
    },
    {
      category: 'Structure',
      question: 'Which SVG elements are available for rendering graphics?',
      answer:
        'SVG includes: <rect> (rectangles, using rx/ry for corner rounding), <circle> (circles, utilizing cx/cy for centers and r for radius), <ellipse> (ellipses, via rx/ry radii), <line> (straight line segments), <polyline> (open chains of connected segments), <polygon> (closed chains of connected segments), along with <path> (complex shapes utilizing the path mini-language “ the ultimate versatile and widespread element). Every shape supports fill, stroke, plus additional presentation properties.',
    },
    {
      category: 'Paths',
      question: 'In what way do SVG path instructions function?',
      answer:
        'Path instructions inside the d attribute construct the graphic: M (move to, initiating a fresh subpath), L (line to), H (horizontal line), V (vertical line), C (cubic Bézier curve), S (smooth cubic), Q (quadratic Bézier), T (smooth quadratic), A (elliptical arc), Z (close path). Capital letters indicate absolute coordinates; lowercase letters denote relative ones. Relative instructions yield shorter path data because coordinate figures remain smaller.',
    },
    {
      category: 'Styling',
      question: 'What defines currentColor within SVG and the way to apply it?',
      answer:
        'currentColor represents a CSS keyword adopting the color property from an element\'s parent inside the HTML markup. Whenever an SVG applies fill="currentColor" or stroke="currentColor", the graphic\'s hue gets managed by the CSS color rule of the surrounding HTML. This serves as the conventional method for ensuring SVG symbols align with text color: assign the graphic\'s fill to currentColor and dictate the hue entirely through CSS absent editing the SVG itself.',
    },
    {
      category: 'Styling',
      question: 'What distinguishes presentation attributes from CSS when dealing with SVG?',
      answer:
        'Presentation attributes (fill="red") act as SVG properties that assign aesthetic traits straight onto elements. CSS (either inline styling or external sheets) can override these presentation rules. The cascading hierarchy (from lowest to highest specificity): SVG element defaults, inherited values, presentation attributes, class or ID styles, inline declarations, alongside !important. For reusable symbol components, implement presentation attributes as baselines while allowing CSS overrides for color schemes.',
    },
    {
      category: 'Animation',
      question: 'In what manner can someone bring an SVG symbol to life?',
      answer:
        'Recommended method: CSS transitions aimed at SVG components. SVG nodes accept transform (rotation, scaling, translation), opacity, fill, stroke, together with stroke-dasharray/dashoffset transitions. For a rotating loader: @keyframes spin { to { transform: rotate(360deg); } } .icon { transform-origin: center; animation: spin 1s linear infinite; }. For stroke revealing effects, animate stroke-dashoffset. Steer clear of SMIL animations (animateTransform) “ opt for CSS instead.',
    },
    {
      category: 'Animation',
      question: 'How can an individual build an SVG path tracing animation?',
      answer:
        'Utilize stroke-dasharray combined with stroke-dashoffset. Define stroke-dasharray as the total path length (retrieved via pathElement.getTotalLength()). Assign stroke-dashoffset an identical figure (concealing the stroke). Transition stroke-dashoffset toward 0 to uncover the path simulating a drawing action. Within CSS: @keyframes draw { from { stroke-dashoffset: [length]; } to { stroke-dashoffset: 0; } }. This method applies to any SVG path node.',
    },
    {
      category: 'Accessibility',
      question: 'What is the procedure for rendering an SVG symbol screen-reader friendly?',
      answer:
        'When displaying informative icons lacking accompanying copy: assign role="img" on your svg node, insert <title id="t1">Icon description</title> directly as its leading child element, and set aria-labelledby="t1" onto the svg. Regarding decorative icons accompanied by visible labels: place aria-hidden="true" straight on the svg element. When building interactive icons like action buttons: enclose the graphic with <button> tags while supplying an aria-label attribute. You should never deploy clickable SVG icons that lack descriptive, accessible labels.',
    },
    {
      category: 'Usage',
      question: 'When is it better to choose inline SVG rather than an <img src="file.svg">?',
      answer:
        'Inline SVG: choose this approach if you require CSS styling on child nodes (like currentColor or hover effects on paths), JavaScript control over SVG elements, zero additional HTTP request overhead, or ARIA accessibility targeting nested SVG titles. External SVG via img src: ideal whenever browser caching is preferred, the identical graphic appears across numerous pages, manipulating internal elements with CSS is unnecessary, and embedded scripts must stay disabled. When building icon systems, relying on inline SVG through a component or sprite pattern remains standard practice.',
    },
    {
      category: 'Gradients',
      question: 'How can I add a gradient to an SVG element?',
      answer:
        'Declare the gradient inside <defs> utilizing a distinct id, then link to it via fill="url(#gradient-id)". Employ <linearGradient> for linear types and <radialGradient> for radial ones. linearGradient properties: x1, y1 (starting point), x2, y2 (ending point), expressed in percentages or user units. Include <stop> child nodes featuring offset, stop-color, and stop-opacity properties. gradientUnits="objectBoundingBox" (the standard default) makes coordinates relative to the specific element bounding box.',
    },
    {
      category: 'Filters',
      question: 'Is it possible to apply visual effects like drop shadow and blur within SVG?',
      answer:
        'Yes, through SVG filters. Construct a <filter id="f"> inside <defs> and apply it using filter="url(#f)". feGaussianBlur handles blurring (stdDeviation governs blur radius), feDropShadow creates drop shadows, feColorMatrix adjusts color transformations, feMorphology manages expansion and contraction, while feTurbulence generates noise patterns. Although SVG filters offer great power, they demand high computational resources; for basic effects, the CSS filter property (filter: drop-shadow()) proves typically more efficient.',
    },
    {
      category: 'Clipping',
      question: 'What are the differences between SVG mask and clip-path?',
      answer:
        'clip-path employs vector shapes to specify visibility &#8211; anything sitting outside this boundary is completely clipped away (providing binary visible/hidden output with zero partial transparency). mask relies on an alpha channel for transparency control &#8211; white portions remain totally opaque, black zones turn fully invisible, and intermediate gray shades produce partial opacity. Apply clip-path whenever creating crisp cutouts (such as circular avatar crops). Turn to mask when crafting smooth transparency gradients (like a texture overlay or soft gradient fade).',
    },
    {
      category: 'Sprites',
      question: 'What exactly is an SVG sprite, and how do I implement it?',
      answer:
        'An SVG sprite is a solitary SVG document encompassing multiple icons structured as <symbol id="icon-name"> tags. Call icons using <svg><use href="sprite.svg#icon-name"/></svg>. Advantages: a single HTTP request for all icons, browser-level caching, and cross-page reusability. Drawbacks: styling individual symbols via CSS proves difficult when loaded externally (an inline sprite is recommended instead). Inline sprite: embed a hidden <svg style="display:none"> holding all symbols directly into the HTML body, then call them using <use href="#icon-name">.',
    },
    {
      category: 'Performance',
      question: 'In what ways do complex SVG documents impact browser performance?',
      answer:
        'SVG rendering relies heavily on the CPU. Key complexity drivers include numerous path nodes, extensive gradient stops, heavy SVG filters (particularly blur and displacement effects), deep group nesting, and large DOM trees. For user interface icons, complexity rarely causes problems. For massive illustrations or data-driven graphics: decrease path node density, skip SVG filters (relying on CSS alternatives instead), apply CSS will-change: transform for moving elements, and weigh converting intricate static artwork into optimized raster graphics at exact dimensions.',
    },
    {
      category: 'Performance',
      question: 'Should I choose inline SVGs or external files for optimal performance?',
      answer:
        'This depends entirely on your usage scenarios. Inline SVG: avoids additional HTTP requests, paints instantly, accepts CSS styling, but inflates HTML file size and lacks separate caching. External SVG (via img src or link): cached by the browser post-initial fetch, reusable across diverse pages without re-downloading, yet mandates an extra HTTP request for every distinct SVG. For icons rendered on every page (like navigation and UI components): inline SVG or SVG sprites. For large, singular illustrations: external files with proper caching.',
    },
    {
      category: 'Responsive',
      question: 'How can I ensure an SVG scales responsively utilizing CSS?',
      answer:
        'Define a viewBox directly on the SVG element, then manage dimensions using CSS: svg { width: 100%; height: auto; }. Having a viewBox ensures that your internal coordinates scale proportionally alongside your CSS size. Or, specify width alone via CSS while skipping height &#8211; the graphic preserves its intrinsic viewBox aspect ratio automatically. Do not assign both width and height as 100% in the absence of a viewBox, since the SVG may warp and stretch out of scale.',
    },
    {
      category: 'Tools',
      question: 'What tools are available for building and modifying SVG graphics?',
      answer:
        'Design software: Figma (desktop and web apps, outputs clean SVG), Inkscape (open-source and free, full SVG capability), Adobe Illustrator (professional choice, outputs verbose markup), Sketch (macOS exclusive). Development environments: VS Code equipped with the SVG Preview extension. Web-based editors: Boxy SVG, SVG-Edit, Vecta.io. Regarding icon resources: Icomoon, Fontello (generators for icon fonts and SVG sprites), Heroicons, Lucide (open-source icon collections featuring clean SVG markup).',
    },
    {
      category: 'Debugging',
      question: 'How can I troubleshoot SVG rendering problems inside a web browser?',
      answer:
        'Launch DevTools (F12) to examine individual SVG elements inside the Elements panel &#8211; like standard HTML markup, their attributes and styles are readily inspectable. Verify: (1) Does the viewBox feature correct dimensions? (2) Has a visible fill or stroke been defined (rather than "none")? (3) Does the graphic sit safely within its viewBox bounds? (4) Could overflow: hidden be cutting off shapes? (5) Does currentColor calculate to your desired hue? Check the Computed tab to review final rendered properties, including resolved CSS custom properties.',
    },
    {
      category: 'Defs',
      question: 'What purpose does the <defs> element serve in SVG?',
      answer:
        '<defs> (definitions) acts as a holding area for reusable SVG components that do not display on their own. Gradients, patterns, filters, clipPaths, masks, symbols, and marker nodes reside inside <defs> utilizing distinct id attributes. Other graphics then point to them via url(#id) for fill/filter/clip-path, or href href="#id" for <use>. Items inside <defs> remain hidden until called. Relying on <defs> for common definitions proves more optimal than repeating identical filters or gradients across multiple shapes.',
    },
    {
      category: 'Text',
      question: 'How is text centered inside an SVG canvas?',
      answer:
        'Apply text-anchor="middle" for horizontal alignment (positioning text relative to x="50%") alongside dominant-baseline="middle" for vertical alignment (positioning text relative to y="50%"): <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">. For precise positioning inside a designated rectangle, configure x and y to match the box\'s center point. Remember that text-anchor and dominant-baseline represent SVG-native attributes, differing from CSS vertical-align and text-align properties.',
    },
    {
      category: 'Security',
      question: 'Are there any security concerns related to SVG files?',
      answer:
        'Embedded SVGs might carry JavaScript (<script> tags) and external links (href, xlink:href) running inside the document security context. Never display unverified SVG as inline HTML without cleaning it first via DOMPurify.sanitize(svgString, { USE_PROFILES: { svg: true } }). SVGs loaded through <img src> or CSS background-image are completely isolated and unable to run scripts. For files uploaded by users, always sanitize prior to inline display or use the img tag method.',
    },
    {
      category: 'Namespace',
      question: 'Is it necessary to add xmlns within my SVG code?',
      answer:
        'The xmlns="http://www.w3.org/2000/svg" namespace declaration is mandatory for standalone .svg documents (processed as XML via browsers or parsers). When SVG appears inline inside an HTML5 page, the HTML engine automatically assumes the SVG namespace making xmlns optional yet harmless. Always include xmlns in .svg documents to guarantee proper processing by SVG tools, mailing programs, and extra XML handlers. For inline SVG in HTML, it remains optional style.',
    },
  ],
};
