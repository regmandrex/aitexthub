import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Border Radius Generator: The Ultimate Guide to CSS border-radius, Rounded Corners, and Shape Styling</h2>
      <p>The CSS <code>border-radius</code> property stands as one of the most transformative and widely adopted properties in modern web layout. It lets you curve the boundaries of any HTML element, turning sharp rectangular boxes into welcoming rounded cards, pill-shaped buttons, flawless circles, ellipses, and intricate organic forms. Before CSS3 introduced <code>border-radius</code> back in 2010, achieving smooth corners demanded JavaScript scripts, numerous overlapping image segments, or proprietary vendor-specific solutions. Today, a solitary line of CSS can generate curved shapes that previously required substantial development effort.</p>
      <p>Mastering <code>border-radius</code> thoroughly — beyond merely assigning a basic pixel figure — unlocks a remarkable spectrum of creative possibilities. The property accepts up to eight separate values governing the horizontal and vertical radii of every corner individually, allowing everything from asymmetrical rounded cards to leaf shapes, speech bubbles, and abstract organic geometries minus any SVG or image files.</p>

      <h2>Full border-radius Syntax Guide</h2>
      <p>The <code>border-radius</code> shorthand property dictates all four corners at once, yet its complete syntax proves more subtle than many developers appreciate.</p>

      <h3>Single Value: Uniform Corner Radius</h3>
      <pre><code>{`.element { border-radius: 8px; }
/* All four corners: 8px horizontal and vertical radius */`}</code></pre>
      <p>The most basic format applies an identical radius to all four corners. This represents the standard implementation for cards, buttons, and layout containers. Frequent figures:</p>
      <ul>
        <li><code>4px</code> — slight curvature, contemporary interface look</li>
        <li><code>8px</code> — typical card corner radius (employed by Tailwind's <code>rounded-lg</code>)</li>
        <li><code>12px</code> — noticeable corner smoothing, approachable look</li>
        <li><code>16px</code> — highly rounded, optimized for mobile devices</li>
        <li><code>50%</code> — circular or elliptical (applied to a square box, yields a true circle)</li>
        <li><code>9999px</code> — capsule form (massive value forces peak rounding — handy for fluid-width boxes where 50% makes an oval instead of a pill)</li>
      </ul>

      <h3>Dual Values: Horizontal Pair / Vertical Pair</h3>
      <pre><code>{`.element { border-radius: 10px 20px; }
/* top-left & bottom-right: 10px
   top-right & bottom-left: 20px */`}</code></pre>
      <p>With a pair of values, the first acts upon the top-left and bottom-right corners (the "main diagonal"), while the second governs the top-right and bottom-left corners (the "anti-diagonal"). This produces a delicate asymmetric effect helpful for giving a layout a slight dynamic tilt.</p>

      <h3>Three Values</h3>
      <pre><code>{`.element { border-radius: 10px 20px 30px; }
/* top-left: 10px
   top-right & bottom-left: 20px
   bottom-right: 30px */`}</code></pre>

      <h3>Quad Values: Separate Corners</h3>
      <pre><code>{`.element { border-radius: 10px 20px 30px 40px; }
/* top-left: 10px, top-right: 20px, bottom-right: 30px, bottom-left: 40px */
/* Order: clockwise from top-left */`}</code></pre>
      <p>With four values, each individual corner receives its own radius assigned in a clockwise direction beginning at the top-left. This is the format a border-radius generator typically utilizes when precise per-corner adjustment is needed.</p>

      <h3>The Forward Slash: Elliptical Corners</h3>
      <p>The slash separator is the most potent yet least understood feature of <code>border-radius</code>, enabling you to define separate horizontal and vertical radii for every single corner. Horizontal radii come before the slash, whereas vertical radii follow it:</p>
      <pre><code>{`.element { border-radius: 50% / 20%; }
/* Horizontal radius: 50%, Vertical radius: 20%
   Creates a wide, flat oval pill shape */

.element { border-radius: 40px 0 40px 0 / 0 40px 0 40px; }
/* Creates a leaf/wave shape with alternating
   horizontal and vertical corner rounding */`}</code></pre>
      <p>Through the slash syntax, you can utilize up to 8 values—4 horizontal radii alongside 4 vertical radii—offering totally separate control over each dimension of every corner's curve.</p>

      <h3>Longhand Properties</h3>
      <p>CSS additionally supplies separate corner properties:</p>
      <pre><code>{`border-top-left-radius: 10px 20px;     /* horizontal vertical */
border-top-right-radius: 10px 20px;
border-bottom-right-radius: 10px 20px;
border-bottom-left-radius: 10px 20px;`}</code></pre>
      <p>Every longhand property takes two values: the vertical radius and the horizontal radius. These prove most handy for styling specific corners using JavaScript or whenever specificity conflicts necessitate individual longhand overrides.</p>

      <h2>Units for border-radius</h2>
      <p>border-radius supports every CSS length unit alongside percentages:</p>
      <ul>
        <li><strong>px</strong>: Fixed pixels—most frequent for interface elements. Consistent across dimensions.</li>
        <li><strong>%</strong>: Percentage of the object's size. On a square, 50% yields a circle. On a rectangle, 50% yields an ellipse. Scales alongside element size.</li>
        <li><strong>em</strong>: Proportional to the element's font size. Ideal for buttons where rounding needs to scale with text dimensions.</li>
        <li><strong>rem</strong>: Proportional to the root font size. Uniform throughout the component.</li>
        <li><strong>vw/vh</strong>: Ratio of viewport width/height. Produces rounded corners that adjust dynamically to screen dimensions.</li>
      </ul>
      <p>Percentages behave distinctly for horizontal and vertical radii: the horizontal radius percentage targets the element's width, while the vertical radius percentage targets the element's height. This explains why 50% forms a circle on square elements but an ellipse on rectangular ones.</p>

      <h2>Building Common Shapes with border-radius</h2>

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
      <p>Employing <code>9999px</code> (or any massive value) rather than <code>50%</code> for pill shapes matters: <code>50%</code> on wide elements yields pointed oval tips, whereas a massive pixel value generates proper semicircular caps across any element dimensions.</p>

      <h3>Leaf Shape</h3>
      <pre><code>{`.leaf {
  border-radius: 0 50% 0 50%;
}
/* Rounds top-right and bottom-left, leaving top-left
   and bottom-right sharp — creates a diamond-rotated leaf */`}</code></pre>

      <h3>Speech Bubble (built with CSS only)</h3>
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

      <h3>Squircle (Apple-style app icon geometry)</h3>
      <p>The squircle—the rounded square silhouette utilized for iOS app icons—cannot be made using CSS <code>border-radius</code> by itself. iOS relies on a superellipse equation for its icon corners. Still, a strong approximation (frequently termed a "squircle" casually) relies on an elevated percentage value:</p>
      <pre><code>{`.squircle-approx {
  border-radius: 22%;  /* Approximates iOS squircle */
}

/* For a true squircle, use CSS clip-path with SVG path:
   clip-path: path('M 0,50 C 0,0 0,0 50,0 S 100,0 100,50 100,100 50,100 0,100 0,50'); */`}</code></pre>

      <h3>Organic/Blob Shapes</h3>
      <p>Extreme asymmetric border-radius values combined with slash syntax produce organic blob shapes favored in contemporary illustration-styled web development:</p>
      <pre><code>{`.blob {
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  /* Or animated: */
  animation: morph 8s ease-in-out infinite;
}
@keyframes morph {
  0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  50% { border-radius: 70% 30% 50% 50% / 50% 40% 60% 40%; }
}`}</code></pre>

      <h2>Border Radius within Contemporary Design Systems</h2>

      <h3>Tailwind CSS Border Radius Scale Reference</h3>
      <p>Tailwind CSS supplies a complete rounded utility scale:</p>
      <ul>
        <li><code>rounded-none</code>: 0px</li>
        <li><code>rounded-sm</code>: 2px</li>
        <li><code>rounded</code>: 4px</li>
        <li><code>rounded-md</code>: 6px</li>
        <li><code>rounded-lg</code>: 8px</li>
        <li><code>rounded-xl</code>: 12px</li>
        <li><code>rounded-2xl</code>: 16px</li>
        <li><code>rounded-3xl</code>: 24px</li>
        <li><code>rounded-full</code>: 9999px (capsule/circle)</li>
      </ul>
      <p>For singular corners: <code>rounded-t-lg</code> (top), <code>rounded-r-lg</code> (right), <code>rounded-b-lg</code> (bottom), <code>rounded-l-lg</code> (left). For targeted corners: <code>rounded-tl-lg</code>, <code>rounded-tr-lg</code>, <code>rounded-br-lg</code>, <code>rounded-bl-lg</code>.</p>

      <h3>Material Design</h3>
      <p>Google's Material Design 3 (Material You) establishes a shape framework utilizing corner rounding as a core visual expression. The shape scale spans from Extra Small (4dp) up to Extra Large (28dp), with Full (circular/pill) acting as the peak. Diverse component categories feature suggested shape rules: buttons employ rounded corners, cards employ rounded corners, dialogs employ large rounded corners, and FABs employ large rounded corners or circular designs.</p>

      <h3>Apple HIG (Human Interface Guidelines) Standards</h3>
      <p>Apple's design aesthetic applies ample corner rounding everywhere—macOS window edges, iOS app icons (squircle), buttons, and cards all display distinct rounding. Apple's design ethos treats corner radius as a primary indicator of friendliness and softness. The iOS dynamic island relies on a smooth continuous curve (matching screen corner radiuses)—an advanced implementation of matching radii connecting hardware and software.</p>

      <h2>Performance and Border Radius</h2>
      <p>CSS <code>border-radius</code> stands out as an exceptionally GPU-friendly style property. Contemporary browsers utilize GPU compositing for rendering rounded corners, rendering even complex border-radius definitions practically free regarding rendering performance. The rule prompts compositing yet avoids requiring repaints when the element itself remains static — the graphics processor manages the corner clipping.</p>
      <p>The singular performance factor: border-radius clips the visual presentation of the element, containing overflow content. Should a child element overflow, it gets clipped to that rounded perimeter. Such clipping might occasionally provoke accidental layer promotions within intricate layouts. Apply <code>overflow: hidden</code> explicitly instead of relying on border-radius clipping for content containment.</p>

      <h2>Design Trends Featuring Border Radius</h2>

      <h3>The Neumorphism Trend</h3>
      <p>Neumorphism (2020) represented a design movement blending subtle border-radius, soft shadows, and background color matching to fabricate extruded user interface elements appearing pushed out of or into the backdrop. It depended heavily on generous border-radius values (typically 15-20px) paired with dual box-shadows (one light, one dark) to accomplish the soft 3D look.</p>

      <h3>Glassmorphism</h3>
      <p>Glassmorphism (2021) paired border-radius alongside <code>backdrop-filter: blur()</code>, semi-transparent backgrounds, and delicate borders to generate a frosted glass effect. Rounded corners prove fundamental to the aesthetic — sharp edges would disrupt the gentle, translucent quality of the style.</p>

      <h3>Blobby/Organic UI</h3>
      <p>Modern web design (2022-present) frequently employs highly asymmetric border-radius figures (blobs) as decorative background features, hero section shapes, and accent elements. Animated blob shapes utilizing CSS keyframes and asymmetric border-radius have grown particularly prominent in SaaS landing pages and portfolio sites.</p>

      <h2>Accessibility Considerations</h2>
      <p>Border-radius carries no direct accessibility implications — it is strictly cosmetic. Nevertheless, certain factors emerge:</p>
      <ul>
        <li>Rounded shapes can occasionally make discerning the exact clickable area of an element harder — confirm visual affordance (color, border, shadow) distinctly communicates interactivity independent of corner geometry</li>
        <li>Extremely rounded shapes (approaching circles) on interactive items might confuse users regarding their clickable dimensions</li>
        <li>Guarantee adequate contrast between rounded items and their backdrops, because corner curves could diminish perceived contrast in small components</li>
      </ul>

      <h2>Browser Compatibility</h2>
      <p>CSS <code>border-radius</code> features universal browser backing — all modern browsers (Chrome, Firefox, Safari, Edge) accommodate the full specification covering elliptical radii (slash syntax), percentages, and every length unit. The property proves secure for deployment without requiring vendor prefixes or fallbacks. Legacy vendor prefixes (<code>-webkit-border-radius</code>, <code>-moz-border-radius</code>) remain unnecessary for any browser launched after 2012.</p>

      <h2>Consistent Border Radius Using CSS Custom Properties</h2>
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
      <p>Specifying border-radius attributes as CSS custom properties establishes a uniform shape system across your application and facilitates simple global updates — modify the <code>--radius-card</code> value in one spot and all cards update concurrently.</p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What function does CSS border-radius perform?',
    answer: 'The CSS border-radius property rounds the corners of an element. It manages the curvature of each corner separately, converting sharp-cornered rectangles into curved shapes containing cards, pill buttons, circles, ellipses, and complex organic forms. It accepts length values (px, em, rem) and percentages, featuring an optional slash to configure distinct horizontal and vertical radii.',
  },
  {
    category: 'Syntax',
    question: 'What sequence are values written in for the border-radius shorthand?',
    answer: 'Configurations proceed in a clockwise manner beginning top-left: border-radius: top-left top-right bottom-right bottom-left. Specifying 1 value adjusts all four angles together. Specifying 2 values: first governs top-left & bottom-right, second governs top-right & bottom-left. Specifying 3 values: first handles top-left, second handles top-right & bottom-left, third handles bottom-right. Specifying 4 values covers every single vertex clockwise.',
  },
  {
    category: 'Syntax',
    question: 'What does the slash (/) indicate within border-radius?',
    answer: 'The slash separates horizontal radii from vertical radii: border-radius: [horizontal] / [vertical]. This permits elliptical corners where the horizontal curve and vertical curve vary in size. Example: border-radius: 50px / 25px produces corners measuring 50px wide yet only 25px tall. The slash syntax unlocks the full capability of border-radius for generating organic and asymmetric shapes.',
  },
  {
    category: 'Shapes',
    question: 'In what way can I build a flawless circle utilizing CSS border-radius?',
    answer: 'Apply border-radius: 50% to an element possessing matching width and height: `.circle { width: 100px; height: 100px; border-radius: 50%; }`. The 50% applies to both dimensions — on a square, this builds a circle. On a non-square rectangle, 50% forms an ellipse. For a circle from a non-square element, you would need to employ border-radius: [half-width] / [half-height] in px values.',
  },
  {
    category: 'Shapes',
    question: 'How might I generate a pill or capsule geometry using border-radius?',
    answer: 'Utilize a massive value: border-radius: 9999px. This guarantees the rounding consistently forms a pristine semicircle regardless of element width. Refrain from employing 50% for pill shapes — on a wide item, 50% constructs oval-pointed ends instead of semicircular ones. 9999px (or any number greater than half the element height) constantly forces perfect semicircular ends.',
  },
  {
    category: 'Shapes',
    question: 'How can I construct an iOS-style squircle symbol shape using CSS?',
    answer: 'An approximate match: border-radius: 22% on a square element. Apple\'s iOS employs a mathematical superellipse for its exact squircle, which cannot be perfectly reproduced using border-radius alone. To get a true squircle, apply clip-path alongside an SVG path, or deploy an SVG mask. The 22% approximation looks extremely close for the majority of design cases and sees wide usage in web icon creation.',
  },
  {
    category: 'Shapes',
    question: 'How can I generate blob and organic shapes utilizing CSS?',
    answer: 'Apply highly asymmetric border-radius amounts through the slash syntax: `border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%`. Transitioning between distinct asymmetric figures using CSS keyframes builds morphing blob motion graphics, which are very common for hero area backgrounds and graphic components within SaaS landing pages.',
  },
  {
    category: 'Units',
    question: 'Should I opt for px or % when setting border-radius?',
    answer: 'Employ px for UI elements (buttons, cards, input fields) where you require uniform rounding irrespective of component size. Choose % for shapes needing proportional scaling (circles always demand 50%, pills need a high px value). Use em or rem for items where the corner rounding scales alongside typography styles. Mixed strategies work well: border-radius: 8px yields consistent card edges; border-radius: 50% delivers scalable circles.',
  },
  {
    category: 'Tailwind',
    question: 'What classes comprise the Tailwind CSS rounded utility set?',
    answer: 'Tailwind offers these: rounded-none (0), rounded-sm (2px), rounded (4px), rounded-md (6px), rounded-lg (8px), rounded-xl (12px), rounded-2xl (16px), rounded-3xl (24px), rounded-full (9999px). For specific edges: rounded-t-lg (top), rounded-r-lg (right), rounded-b-lg (bottom), rounded-l-lg (left). For individual corners: rounded-tl-lg, rounded-tr-lg, rounded-br-lg, rounded-bl-lg.',
  },
  {
    category: 'Performance',
    question: 'Does border-radius impact overall page performance?',
    answer: 'Contemporary browsers rely on GPU compositing to draw border-radius, rendering it essentially free regarding performance cost. Rounded corners get managed by the GPU and do not provoke repaints. The primary factor to note: border-radius clips overflowing content, which can occasionally induce unexpected GPU layer promotions in intricate layouts. For content clipping, favor explicit overflow: hidden instead of relying on border-radius clipping.',
  },
  {
    category: 'Implementation',
    question: 'How do I apply distinct border-radius values to individual corners using CSS?',
    answer: 'Utilize either the shorthand variant with 4 settings: `border-radius: 10px 20px 30px 40px` (TL TR BR BL), or separate longhand rules: border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius. Each longhand property takes two values for the horizontal and vertical radii respectively.',
  },
  {
    category: 'Implementation',
    question: 'How do I set up a CSS custom property system for border-radius?',
    answer: 'Establish a scale inside :root: `--radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px; --radius-full: 9999px;` then build semantic tokens: `--radius-card: var(--radius-lg); --radius-button: var(--radius-md);`. Apply them via: `.card { border-radius: var(--radius-card); }`. This allows global style modifications and aligns with Tailwind or Material Design token architectures.',
  },
  {
    category: 'Design',
    question: 'What border-radius figures are utilized by major design systems?',
    answer: 'Tailwind\'s default scale peaks at rounded-3xl (24px). Material Design 3 implements a shape scale ranging from Extra Small (4dp) to Extra Large (28dp) alongside full. Apple\'s iOS relies on a ~22% squircle for application icons. Google\'s UI uses a 4px–28px span. GitHub implements 6px for buttons and cards. Stripe employs 4px–8px for a sleek, minimal look. The trend between 2022 and 2024 favors larger corner radii (12–24px+) for a friendlier, contemporary feel.',
  },
  {
    category: 'Animation',
    question: 'Is it possible to animate border-radius via CSS?',
    answer: 'Yes. border-radius supports full animation and transition capabilities. `transition: border-radius 0.3s ease` permits smooth corner rounding adjustments upon hover or state updates. CSS keyframes can shift between various border-radius amounts to produce morphing blob visuals. GSAP and similar animation frameworks additionally support border-radius animation. Keep in mind: animating border-radius might trigger compositing layer changes — test performance on lower-tier hardware for complex animations.',
  },
  {
    category: 'Browser Support',
    question: 'Are vendor prefixes necessary for border-radius properties?',
    answer: 'No. CSS border-radius enjoys universal browser backing across all modern web software without requiring vendor prefixes. Legacy -webkit-border-radius and -moz-border-radius prefixes are obsolete — no browser launched after 2012 mandates them. The complete specification, encompassing elliptical radii (slash syntax) and percentage figures, is supported everywhere. It is entirely safe to use without compatibility worries.',
  },
  {
    category: 'Design',
    question: 'How do clip-path and border-radius differ when creating shapes?',
    answer: 'border-radius builds rounded rectangle variations — including circles, pills, ellipses, and blobs. It remains straightforward, performant, and easily animatable. clip-path generates arbitrary polygon shapes, triangles, hexagons, diamonds, and custom SVG paths that border-radius cannot achieve. For rounded shapes: use border-radius. For non-rectangular elements (triangles, polygons, intricate curves): use clip-path. clip-path also functions on images and cleanly hides overflow.',
  },
  {
    category: 'Advanced',
    question: 'What is the highest possible value for border-radius?',
    answer: 'There is no defined upper limit. When border-radius values surpass half of an element\'s dimension (width or height), the browser automatically scales them down proportionally to prevent adjacent corners from colliding. This implies that extremely high figures (9999px) function precisely as 50% of the relevant dimension — which explains why `border-radius: 9999px` dependably generates pill shapes: the value gets capped at the maximum sensible amount.',
  },
  {
    category: 'Advanced',
    question: 'In what manner does border-radius affect border and box-shadow styling?',
    answer: 'The border follows the rounded shape — borders are drawn along the curved corner paths. box-shadow also tracks the rounded shape — shadows properly respect the border-radius curvature. outline does NOT follow border-radius in every browser (it stays rectangular). For outline-like styling that respects border-radius, deploy box-shadow: 0 0 0 3px color instead of outline.',
  },
  {
    category: 'Advanced',
    question: 'In what way does border-radius function on pictures?',
    answer: 'Setting border-radius on an <img> tag or on a container with background-image crops the graphic to the curved outline. To secure complete clipping on an img element across every browser, assign `overflow: hidden` to its parent element. Setting border-radius: 50% against a square img creates round profile avatars — this stands as the standard image border-radius scenario.',
  },
  {
    category: 'Responsive',
    question: 'How can I make border-radius adapt to screens?',
    answer: 'Approaches: (1) Use em/rem units so curved edges adjust proportionally with type scales. (2) Leverage CSS clamp(): `border-radius: clamp(4px, 2vw, 16px)` to guarantee fluid viewport-responsive corners. (3) Control sizes with media queries: `@media (min-width: 768px) { border-radius: 16px; }`. (4) Implement Tailwind responsive prefixes: `rounded-md md:rounded-xl`. When styling components that need broader radii on mobile viewports, lower their border-radius across desktop layouts where they exit full-width presentation.',
  },
  {
    category: 'Accessibility',
    question: 'Does border-radius impact accessibility?',
    answer: 'border-radius is strictly visual with zero direct accessibility consequences. Yet: verify that interactive items possessing rounded corners still feature adequate visible affordance (color, size, contrast) to signal their clickable status. Highly circular forms (border-radius: 50%) on non-square interactive elements might induce confusion about the clickable zone. Focus rings (outline or box-shadow) ought to optically trace the rounded shape for keyboard navigation clarity.',
  },
  {
    category: 'Tools',
    question: 'How do I operate a border-radius generator?',
    answer: 'A border-radius generator supplies visual sliders or fields for each corner radius metric, presenting a live preview of the shape. You are able to independently alter all four corners and the horizontal/vertical radii for elliptical angles. The tool outputs the CSS shorthand or separate property rules that you can paste directly into your style sheet. This proves much quicker than manually computing intricate asymmetric numbers.',
  },
  {
    category: 'CSS Variables',
    question: 'How do popular component libraries build their border-radius scales?',
    answer: 'shadcn/ui employs a --radius CSS variable (default 0.5rem) utilized as: calc(var(--radius) - 2px) for small, var(--radius) for medium, calc(var(--radius) + 2px) for large — enabling global radius style modifications. Radix UI exposes --radius tokens. Chakra UI and MUI utilize a theme.borderRadius object. All primary systems externalize border-radius into tokens for styling flexibility.',
  },
  {
    category: 'Shapes',
    question: 'How might I build a half-circle or D-form via border-radius?',
    answer: 'Building an upper semicircle requires: `border-radius: 100px 100px 0 0` (setting top-left and top-right matching container height, base set to 0). For an arch facing right: `border-radius: 0 50% 50% 0`. The trick involves setting corner values along the rounded boundary to fifty percent of total height. Crafting a symmetrical half-circle requires total element width to equal half the height, or inverted for horizontal setups.',
  },
  {
    category: 'Shapes',
    question: 'In what ways does border-image-radius differ from border-radius?',
    answer: 'The border-radius attribute establishes the geometric curvature of the outer container boundaries. No recognized `border-image-radius` rule exists in CSS. Adding a border-image processes boundary angles uniquely — image subdivisions are assigned to the perimeter via border-image-slice definitions. Both properties collaborate: border-radius determines clipping boundaries, yet border-image vertices follow slice specifications rather than radial dimensions.',
  },
];

export const borderRadiusGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
