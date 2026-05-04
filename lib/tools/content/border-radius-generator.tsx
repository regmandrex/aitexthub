import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Border Radius Generator: The Complete Guide to CSS border-radius, Rounded Corners, and Shape Design</h2>
      <p>
        The CSS <code>border-radius</code> property is one of the most transformative and widely used properties in modern web design. It allows you to round the corners of any HTML element, transforming sharp rectangles into friendly rounded cards, pill-shaped buttons, perfect circles, ellipses, and complex organic shapes. Before CSS3 introduced <code>border-radius</code> in 2010, achieving rounded corners required JavaScript hacks, multiple overlapping image slices, or proprietary browser-specific implementations. Today, a single line of CSS can create rounded shapes that were previously a significant development effort.
      </p>
      <p>
        Understanding <code>border-radius</code> at a deep level — beyond just setting a simple pixel value — unlocks a remarkable range of design possibilities. The property supports up to eight individual values controlling the horizontal and vertical radii of each corner independently, enabling everything from asymmetric rounded cards to leaf shapes, speech bubbles, and abstract organic forms without any SVG or image assets.
      </p>

      <h2>The Complete border-radius Syntax</h2>
      <p>
        The <code>border-radius</code> shorthand property controls all four corners simultaneously, but its full syntax is more nuanced than most developers realize.
      </p>

      <h3>Single Value: Uniform Corners</h3>
      <pre><code>{`.element { border-radius: 8px; }
/* All four corners: 8px horizontal and vertical radius */`}</code></pre>
      <p>
        The simplest form applies the same radius to all four corners. This is the most common usage for cards, buttons, and containers. Common values:
      </p>
      <ul>
        <li><code>4px</code> — subtle rounding, modern UI style</li>
        <li><code>8px</code> — standard card rounding (used by Tailwind's <code>rounded-lg</code>)</li>
        <li><code>12px</code> — pronounced rounding, friendly appearance</li>
        <li><code>16px</code> — very rounded, mobile-friendly</li>
        <li><code>50%</code> — circle/ellipse (when applied to a square element, creates a perfect circle)</li>
        <li><code>9999px</code> — pill shape (extremely large value forces maximum rounding — useful for variable-width elements where 50% creates an ellipse rather than pill)</li>
      </ul>

      <h3>Two Values: Horizontal Pair / Vertical Pair</h3>
      <pre><code>{`.element { border-radius: 10px 20px; }
/* top-left & bottom-right: 10px
   top-right & bottom-left: 20px */`}</code></pre>
      <p>
        With two values, the first applies to the top-left and bottom-right corners (the "main diagonal"), and the second applies to the top-right and bottom-left corners (the "anti-diagonal"). This creates a subtle asymmetric effect useful for giving a design a slight dynamic lean.
      </p>

      <h3>Three Values</h3>
      <pre><code>{`.element { border-radius: 10px 20px 30px; }
/* top-left: 10px
   top-right & bottom-left: 20px
   bottom-right: 30px */`}</code></pre>

      <h3>Four Values: Individual Corners</h3>
      <pre><code>{`.element { border-radius: 10px 20px 30px 40px; }
/* top-left: 10px, top-right: 20px, bottom-right: 30px, bottom-left: 40px */
/* Order: clockwise from top-left */`}</code></pre>
      <p>
        With four values, each corner gets its own radius applied clockwise starting from the top-left. This is the format a border-radius generator typically uses when you need precise per-corner control.
      </p>

      <h3>The Slash: Elliptical Corners</h3>
      <p>
        The most powerful and least-known aspect of <code>border-radius</code> is the slash separator, which lets you specify independent horizontal and vertical radii for each corner. Before the slash are the horizontal radii; after the slash are the vertical radii:
      </p>
      <pre><code>{`.element { border-radius: 50% / 20%; }
/* Horizontal radius: 50%, Vertical radius: 20%
   Creates a wide, flat oval pill shape */

.element { border-radius: 40px 0 40px 0 / 0 40px 0 40px; }
/* Creates a leaf/wave shape with alternating
   horizontal and vertical corner rounding */`}</code></pre>
      <p>
        With the slash syntax, you can have up to 8 values — 4 horizontal radii and 4 vertical radii — giving completely independent control over every aspect of every corner's curvature.
      </p>

      <h3>Longhand Properties</h3>
      <p>
        CSS also provides individual corner properties:
      </p>
      <pre><code>{`border-top-left-radius: 10px 20px;     /* horizontal vertical */
border-top-right-radius: 10px 20px;
border-bottom-right-radius: 10px 20px;
border-bottom-left-radius: 10px 20px;`}</code></pre>
      <p>
        Each longhand property accepts two values: the horizontal radius and the vertical radius. These are most useful for targeting individual corners via JavaScript or when specificity conflicts with the shorthand require individual overrides.
      </p>

      <h2>Units for border-radius</h2>
      <p>
        border-radius accepts all CSS length units plus percentages:
      </p>
      <ul>
        <li><strong>px</strong>: Absolute pixels — most common for UI elements. Predictable across sizes.</li>
        <li><strong>%</strong>: Percentage of the element's dimensions. On a square, 50% creates a circle. On a rectangle, 50% creates an ellipse. Scales with element size.</li>
        <li><strong>em</strong>: Relative to the element's font size. Good for buttons where rounding should scale with text size.</li>
        <li><strong>rem</strong>: Relative to the root font size. Consistent across the component.</li>
        <li><strong>vw/vh</strong>: Percentage of viewport width/height. Creates viewport-responsive rounding.</li>
      </ul>
      <p>
        Percentages are applied differently to horizontal and vertical radii: the horizontal radius percentage refers to the element's width, and the vertical radius percentage refers to the element's height. This is why 50% creates a circle on a square element but an ellipse on a non-square element.
      </p>

      <h2>Creating Common Shapes with border-radius</h2>

      <h3>Perfect Circle</h3>
      <pre><code>{`.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
/* Element must have equal width and height */`}</code></pre>

      <h3>Pill / Capsule Shape</h3>
      <pre><code>{`.pill {
  border-radius: 9999px;  /* or 100px, any very large value */
}
/* Works on any width/height - sides become perfectly semicircular */`}</code></pre>
      <p>
        Using <code>9999px</code> (or any very large value) rather than <code>50%</code> for pills is important: <code>50%</code> on a wide element creates a pointy oval ends, while a very large px value creates proper semicircular ends on any element size.
      </p>

      <h3>Leaf Shape</h3>
      <pre><code>{`.leaf {
  border-radius: 0 50% 0 50%;
}
/* Rounds top-right and bottom-left, leaving top-left
   and bottom-right sharp — creates a diamond-rotated leaf */`}</code></pre>

      <h3>Speech Bubble (with CSS only)</h3>
      <pre><code>{`.bubble {
  border-radius: 20px;
  position: relative;
}
.bubble::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 20px;
  border: 10px solid transparent;
  border-top-color: currentColor;
  border-bottom: 0;
}`}</code></pre>

      <h3>Squircle (iOS-style app icon shape)</h3>
      <p>
        The squircle — the rounded square shape used for iOS app icons — is not achievable with CSS <code>border-radius</code> alone. iOS uses a superellipse formula for its icon corners. However, a close approximation (often called "squircle" loosely) uses a large percentage value:
      </p>
      <pre><code>{`.squircle-approx {
  border-radius: 22%;  /* Approximates iOS squircle */
}

/* For a true squircle, use CSS clip-path with SVG path:
   clip-path: path('M 0,50 C 0,0 0,0 50,0 S 100,0 100,50 100,100 50,100 0,100 0,50'); */`}</code></pre>

      <h3>Organic/Blob Shapes</h3>
      <p>
        Highly asymmetric border-radius values with the slash syntax create organic blob shapes popular in modern illustration-influenced web design:
      </p>
      <pre><code>{`.blob {
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  /* Or animated: */
  animation: morph 8s ease-in-out infinite;
}
@keyframes morph {
  0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  50% { border-radius: 70% 30% 50% 50% / 50% 40% 60% 40%; }
}`}</code></pre>

      <h2>Border Radius in Modern Design Systems</h2>

      <h3>Tailwind CSS Border Radius Scale</h3>
      <p>
        Tailwind CSS provides a comprehensive rounded utility scale:
      </p>
      <ul>
        <li><code>rounded-none</code>: 0px</li>
        <li><code>rounded-sm</code>: 2px</li>
        <li><code>rounded</code>: 4px</li>
        <li><code>rounded-md</code>: 6px</li>
        <li><code>rounded-lg</code>: 8px</li>
        <li><code>rounded-xl</code>: 12px</li>
        <li><code>rounded-2xl</code>: 16px</li>
        <li><code>rounded-3xl</code>: 24px</li>
        <li><code>rounded-full</code>: 9999px (pill/circle)</li>
      </ul>
      <p>
        For individual corners: <code>rounded-t-lg</code> (top), <code>rounded-r-lg</code> (right), <code>rounded-b-lg</code> (bottom), <code>rounded-l-lg</code> (left). For specific corners: <code>rounded-tl-lg</code>, <code>rounded-tr-lg</code>, <code>rounded-br-lg</code>, <code>rounded-bl-lg</code>.
      </p>

      <h3>Material Design</h3>
      <p>
        Google's Material Design 3 (Material You) defines a shape system using corner rounding as a key design expression. The shape scale ranges from Extra Small (4dp) to Extra Large (28dp), with Full (circular/pill) as the maximum. Different component types have recommended shape styles: buttons use rounded corners, cards use rounded corners, dialogs use large rounded corners, FABs use large rounded corners or circular.
      </p>

      <h3>Apple HIG (Human Interface Guidelines)</h3>
      <p>
        Apple's design language uses generous corner rounding throughout — macOS window corners, iOS app icons (squircle), buttons, and cards all feature prominent rounding. Apple's design philosophy uses corner radius as a key signal of "softness" and friendliness. The iOS dynamic island uses a continuous curve (matching the display's corner curves) — a sophisticated application of matching radii between hardware and software.
      </p>

      <h2>Border Radius and Performance</h2>
      <p>
        CSS <code>border-radius</code> is one of the most GPU-friendly CSS properties. Modern browsers use GPU compositing to render rounded corners, making even complex border-radius values essentially free in terms of rendering performance. The property triggers compositing but does not require repaints when the element itself doesn't change — the GPU handles the corner clipping.
      </p>
      <p>
        The one performance consideration: border-radius clips the element's visual rendering, including overflow content. If a child element overflows, it will be clipped to the rounded shape. This clipping can sometimes trigger unintended layer promotions in complex layouts. Use <code>overflow: hidden</code> explicitly rather than relying on border-radius clipping for content containment.
      </p>

      <h2>Border Radius in Design Trends</h2>

      <h3>The Neumorphism Trend</h3>
      <p>
        Neumorphism (2020) was a design trend combining subtle border-radius, soft shadows, and background color matching to create "extruded" UI elements that appeared pushed out of or into the background. It heavily relied on generous border-radius values (typically 15–20px) combined with dual box-shadows (one light, one dark) to achieve the soft 3D appearance.
      </p>

      <h3>Glassmorphism</h3>
      <p>
        Glassmorphism (2021) combined border-radius with <code>backdrop-filter: blur()</code>, semi-transparent backgrounds, and subtle borders to create a frosted glass effect. Rounded corners are essential to the aesthetic — sharp corners would break the soft, translucent quality of the design.
      </p>

      <h3>Blobby/Organic UI</h3>
      <p>
        Contemporary web design (2022–present) frequently uses highly asymmetric border-radius values (blobs) as decorative background elements, hero section shapes, and accent shapes. Animated blob shapes using CSS keyframes and asymmetric border-radius have become particularly popular in SaaS landing pages and portfolio sites.
      </p>

      <h2>Accessibility Considerations</h2>
      <p>
        Border-radius has no direct accessibility implications — it's purely cosmetic. However, some considerations arise:
      </p>
      <ul>
        <li>Rounded shapes can sometimes make it harder to perceive the exact clickable area of an element — ensure visual affordance (color, border, shadow) clearly communicates interactivity regardless of corner shape</li>
        <li>Very highly rounded shapes (approaching circles) on interactive elements may confuse users about their clickable dimensions</li>
        <li>Ensure sufficient contrast between rounded elements and their backgrounds, as corner curves may reduce perceived contrast in small elements</li>
      </ul>

      <h2>Browser Compatibility</h2>
      <p>
        CSS <code>border-radius</code> has universal browser support — all modern browsers (Chrome, Firefox, Safari, Edge) support the complete specification including elliptical radii (slash syntax), percentages, and all length units. The property is safe to use without any vendor prefixes or fallbacks. Historical vendor prefixes (<code>-webkit-border-radius</code>, <code>-moz-border-radius</code>) are no longer needed for any browser released after 2012.
      </p>

      <h2>CSS Custom Properties for Consistent Border Radius</h2>
      <pre><code>{`:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --radius-card: var(--radius-lg);
  --radius-button: var(--radius-md);
  --radius-input: var(--radius-md);
  --radius-badge: var(--radius-full);
  --radius-avatar: var(--radius-full);
}

.card { border-radius: var(--radius-card); }
.btn { border-radius: var(--radius-button); }
.input { border-radius: var(--radius-input); }`}</code></pre>
      <p>
        Defining border-radius values as CSS custom properties creates a consistent shape system across your application and enables easy global updates — change the <code>--radius-card</code> value in one place and all cards update simultaneously.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What does CSS border-radius do?',
    answer: 'The CSS border-radius property rounds the corners of an element. It controls the curvature of each corner independently, transforming sharp-cornered rectangles into rounded shapes including cards, pill buttons, circles, ellipses, and complex organic forms. It accepts length values (px, em, rem) and percentages, with an optional slash to set different horizontal and vertical radii.',
  },
  {
    category: 'Syntax',
    question: 'What is the order of values in the border-radius shorthand?',
    answer: 'Values go clockwise from top-left: border-radius: top-left top-right bottom-right bottom-left. With 1 value: all corners equal. With 2 values: first = top-left & bottom-right, second = top-right & bottom-left. With 3 values: first = top-left, second = top-right & bottom-left, third = bottom-right. With 4 values: each corner clockwise.',
  },
  {
    category: 'Syntax',
    question: 'What does the slash (/) mean in border-radius?',
    answer: 'The slash separates horizontal radii from vertical radii: border-radius: [horizontal] / [vertical]. This enables elliptical corners where the horizontal curve and vertical curve are different sizes. Example: border-radius: 50px / 25px creates corners that are 50px wide but only 25px tall. The slash syntax unlocks the full power of border-radius for creating organic and asymmetric shapes.',
  },
  {
    category: 'Shapes',
    question: 'How do I make a perfect circle with CSS border-radius?',
    answer: 'Apply border-radius: 50% to an element with equal width and height: `.circle { width: 100px; height: 100px; border-radius: 50%; }`. The 50% applies to both dimensions — on a square, this creates a circle. On a non-square rectangle, 50% creates an ellipse. For a circle from a non-square element, you would need to use border-radius: [half-width] / [half-height] in px values.',
  },
  {
    category: 'Shapes',
    question: 'How do I create a pill/capsule shape with border-radius?',
    answer: 'Use a very large value: border-radius: 9999px. This ensures the rounding is always a perfect semicircle regardless of element width. Avoid using 50% for pill shapes — on a wide element, 50% creates oval-pointed ends rather than semicircular ones. 9999px (or any value larger than half the element height) always forces perfect semicircular ends.',
  },
  {
    category: 'Shapes',
    question: 'How do I create an iOS-style squircle icon shape with CSS?',
    answer: 'A close approximation: border-radius: 22% on a square element. iOS uses a mathematical superellipse for its precise squircle, which can\'t be perfectly replicated with border-radius alone. For a true squircle, use clip-path with an SVG path, or use an SVG mask. The 22% approximation is visually very close for most design purposes and is commonly used in web icon implementations.',
  },
  {
    category: 'Shapes',
    question: 'How do I create blob/organic shapes with CSS?',
    answer: 'Use highly asymmetric border-radius values with the slash syntax: `border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%`. Animating between different asymmetric values with CSS keyframes creates morphing blob animations — popular for hero section backgrounds and decorative elements in SaaS landing pages.',
  },
  {
    category: 'Units',
    question: 'Should I use px or % for border-radius?',
    answer: 'Use px for UI components (buttons, cards, inputs) where you want consistent rounding regardless of element size. Use % for shapes that should scale proportionally (circles always need 50%, pill shapes need a large px value). Use em or rem for components where rounding should scale with typography (some button styles). Mixed approaches work: border-radius: 8px creates consistent card corners; border-radius: 50% creates scalable circles.',
  },
  {
    category: 'Tailwind',
    question: 'What are the Tailwind CSS rounded utility classes?',
    answer: 'Tailwind\'s scale: rounded-none (0), rounded-sm (2px), rounded (4px), rounded-md (6px), rounded-lg (8px), rounded-xl (12px), rounded-2xl (16px), rounded-3xl (24px), rounded-full (9999px). For individual sides: rounded-t-lg (top), rounded-r-lg (right), rounded-b-lg (bottom), rounded-l-lg (left). For corners: rounded-tl-lg, rounded-tr-lg, rounded-br-lg, rounded-bl-lg.',
  },
  {
    category: 'Performance',
    question: 'Does border-radius affect page performance?',
    answer: 'Modern browsers use GPU compositing to render border-radius, making it essentially free performance-wise. Rounded corners are handled by the GPU and do not trigger repaints. The main consideration: border-radius clips overflow content, which can sometimes cause unintended GPU layer promotions in complex layouts. For content clipping, prefer explicit overflow: hidden over relying on border-radius clipping.',
  },
  {
    category: 'Implementation',
    question: 'How do I apply different border-radius to different corners in CSS?',
    answer: 'Use either the shorthand with 4 values: `border-radius: 10px 20px 30px 40px` (TL TR BR BL), or individual longhand properties: border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius. Each longhand accepts two values for the horizontal and vertical radii respectively.',
  },
  {
    category: 'Implementation',
    question: 'How do I create a CSS custom property system for border-radius?',
    answer: 'Define a scale in :root: `--radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px; --radius-full: 9999px;` then create semantic tokens: `--radius-card: var(--radius-lg); --radius-button: var(--radius-md);`. Apply: `.card { border-radius: var(--radius-card); }`. This enables global style updates and matches Tailwind/Material Design token architecture.',
  },
  {
    category: 'Design',
    question: 'What border-radius values do major design systems use?',
    answer: 'Tailwind default scale tops at rounded-3xl (24px). Material Design 3 uses a shape scale from Extra Small (4dp) to Extra Large (28dp) plus full. Apple\'s iOS uses ~22% squircle for app icons. Google\'s UI uses 4px–28px range. GitHub uses 6px for buttons and cards. Stripe uses 4px–8px for a professional, minimal feel. The trend in 2022–2024 is toward larger corner radii (12–24px+) for a friendlier, modern appearance.',
  },
  {
    category: 'Animation',
    question: 'Can I animate border-radius with CSS?',
    answer: 'Yes. border-radius is fully animatable and transitionable. `transition: border-radius 0.3s ease` enables smooth corner rounding changes on hover or state change. CSS keyframes can animate between different border-radius values for morphing blob effects. GSAP and other animation libraries also support animating border-radius. Note: animating border-radius can trigger compositing layer changes — test performance on lower-end devices for complex animations.',
  },
  {
    category: 'Browser Support',
    question: 'Do I need vendor prefixes for border-radius?',
    answer: 'No. CSS border-radius has universal browser support across all modern browsers without vendor prefixes. Historical -webkit-border-radius and -moz-border-radius prefixes are obsolete — no browser released after 2012 requires them. The full specification including elliptical radii (slash syntax) and percentages is supported everywhere. Safe to use without any compatibility concerns.',
  },
  {
    category: 'Design',
    question: 'What is the difference between border-radius and clip-path for shapes?',
    answer: 'border-radius creates rounded rectangle variants — circles, pills, ellipses, blobs. It\'s simple, performant, and animatable. clip-path creates arbitrary polygon shapes, triangles, hexagons, diamonds, and custom SVG paths that border-radius cannot produce. For rounded shapes: use border-radius. For non-rectangular shapes (triangles, polygons, complex curves): use clip-path. clip-path also works on images and hides overflow cleanly.',
  },
  {
    category: 'Advanced',
    question: 'What is the maximum value for border-radius?',
    answer: 'There\'s no specified maximum. When border-radius values exceed half the element\'s dimension (width or height), the browser automatically reduces them proportionally so that adjacent corners don\'t overlap. This means very large values (9999px) effectively behave as 50% of the relevant dimension — which is why `border-radius: 9999px` reliably creates pill shapes: the value gets capped to the maximum meaningful amount.',
  },
  {
    category: 'Advanced',
    question: 'How does border-radius interact with border and box-shadow?',
    answer: 'border follows the rounded shape — borders render along the curved corner paths. box-shadow also follows the rounded shape — shadows respect the border-radius curvature. outline does NOT follow border-radius in all browsers (it remains rectangular). For outline-like effects that respect border-radius, use box-shadow: 0 0 0 3px color instead of outline.',
  },
  {
    category: 'Advanced',
    question: 'How does border-radius work with images?',
    answer: 'Applying border-radius to an <img> element or a div with a background-image clips the image to the rounded shape. For img tags, also add `overflow: hidden` to the parent container in some browsers to ensure the image is properly clipped. The combination of border-radius: 50% on an equal-sized img creates circular avatar images — the most common image border-radius use case.',
  },
  {
    category: 'Responsive',
    question: 'How do I make border-radius responsive?',
    answer: 'Options: (1) Use em/rem so rounding scales with font size. (2) Use CSS clamp(): `border-radius: clamp(4px, 2vw, 16px)` for viewport-responsive rounding. (3) Adjust via media queries: `@media (min-width: 768px) { border-radius: 16px; }`. (4) Use Tailwind responsive prefixes: `rounded-md md:rounded-xl`. For cards that should be more rounded on mobile (common pattern), decrease border-radius at larger breakpoints where they\'re no longer full-width.',
  },
  {
    category: 'Accessibility',
    question: 'Does border-radius affect accessibility?',
    answer: 'border-radius is purely cosmetic with no direct accessibility impact. However: ensure interactive elements with rounded corners still have sufficient visible affordance (color, size, contrast) to communicate their clickable nature. Very circular shapes (border-radius: 50%) on non-square interactive elements may cause confusion about the clickable area. Focus indicators (outline or box-shadow) should visually follow the rounded shape for keyboard navigation clarity.',
  },
  {
    category: 'Tools',
    question: 'How do I use a border-radius generator?',
    answer: 'A border-radius generator provides visual sliders or inputs for each corner\'s radius values, showing a live preview of the shape. You can independently adjust all four corners and the horizontal/vertical radii for elliptical corners. The tool generates the CSS shorthand or individual property declarations you can copy directly into your stylesheet. This is far faster than manually calculating complex asymmetric values.',
  },
  {
    category: 'CSS Variables',
    question: 'How do popular component libraries define their border-radius scales?',
    answer: 'shadcn/ui uses a --radius CSS variable (default 0.5rem) applied as: calc(var(--radius) - 2px) for small, var(--radius) for medium, calc(var(--radius) + 2px) for large — allowing global radius personality changes. Radix UI exposes --radius tokens. Chakra UI and MUI use a theme.borderRadius object. All major systems externalize border-radius into tokens for theming flexibility.',
  },
  {
    category: 'Shapes',
    question: 'How do I create a half-circle or D-shape with border-radius?',
    answer: 'For a top half-circle: `border-radius: 100px 100px 0 0` (top-left and top-right = height value, bottom = 0). For a right D-shape: `border-radius: 0 50% 50% 0`. The key is making only the rounded side\'s corners equal to half the element height. For a perfect half-circle, the element width should equal half its height (or vice versa for vertical orientation).',
  },
  {
    category: 'Shapes',
    question: 'What is the difference between border-radius and border-image-radius?',
    answer: 'border-radius rounds the visual corner curve of the element\'s border. There is no standard `border-image-radius` property. When using border-image, the border corners are handled differently — border-image slices are applied to the corners based on the border-image-slice values. border-radius and border-image interact: border-radius affects the clip of the rendered output but border-image corners are defined by slice values, not radius curves.',
  },
];

export const borderRadiusGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
