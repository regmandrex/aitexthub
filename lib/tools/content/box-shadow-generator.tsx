import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Box Shadow Generator: The Complete Guide to CSS box-shadow, Elevation Design, and Shadow Systems</h2>
      <p>
        The CSS <code>box-shadow</code> property is one of the most expressive tools in a web designer's toolkit. A well-crafted shadow can convey depth, elevation, and interactivity — giving flat digital interfaces a sense of physical dimension that guides users' attention and communicates hierarchy. From the barely perceptible 1px outline shadow on a card to the dramatic depth-inducing shadow of a modal dialog, <code>box-shadow</code> shapes how users perceive and interact with digital interfaces.
      </p>
      <p>
        CSS box-shadow was introduced in CSS3 and has been universally supported across browsers since 2011. It has evolved from a simple decorative novelty into a core component of every major design system — Material Design, Apple's Human Interface Guidelines, Tailwind CSS, and Fluent Design all define sophisticated multi-level shadow systems for conveying elevation and interactive state. Understanding box-shadow at a deep technical level, including its performance characteristics, stacking behavior, and creative applications, is essential for any serious front-end developer or UI designer.
      </p>

      <h2>The Complete box-shadow Syntax</h2>
      <p>
        The full syntax of <code>box-shadow</code>:
      </p>
      <pre><code>{`box-shadow: [inset] offset-x offset-y [blur-radius] [spread-radius] [color];

/* Multiple shadows (comma-separated): */
box-shadow: shadow1, shadow2, shadow3;`}</code></pre>

      <h3>Required Parameters</h3>
      <ul>
        <li><strong>offset-x</strong>: Horizontal offset. Positive = shadow to the right, negative = shadow to the left.</li>
        <li><strong>offset-y</strong>: Vertical offset. Positive = shadow below, negative = shadow above.</li>
      </ul>

      <h3>Optional Parameters</h3>
      <ul>
        <li><strong>blur-radius</strong> (default 0): Higher values produce a larger, softer, more diffuse shadow. 0 produces a sharp-edged shadow. Technically, this is the standard deviation of a Gaussian blur applied to the shadow.</li>
        <li><strong>spread-radius</strong> (default 0): Positive values expand the shadow beyond the element's dimensions; negative values shrink it. A spread of 0 makes the shadow exactly the same size as the element before blur is applied.</li>
        <li><strong>color</strong> (default currentColor or black depending on browser): The shadow color. Use rgba() or hsla() for transparency — transparent shadows are essential for natural-looking results that work on any background color.</li>
        <li><strong>inset</strong> keyword: Moves the shadow inside the element's border rather than outside. Creates a depressed, pressed-in appearance.</li>
      </ul>

      <h3>Multiple Shadows</h3>
      <p>
        Multiple comma-separated shadows are rendered front-to-back — the first shadow in the list renders on top of subsequent shadows. Multiple layered shadows are fundamental to realistic, natural-looking shadow systems:
      </p>
      <pre><code>{`/* Layered shadow system: ambient + direct light */
box-shadow:
  0 1px 2px rgba(0,0,0,0.04),
  0 4px 8px rgba(0,0,0,0.08),
  0 16px 32px rgba(0,0,0,0.12);`}</code></pre>

      <h2>Understanding Shadow Realism: Light Physics</h2>
      <p>
        The difference between amateur and professional shadow implementations is understanding the physics of light and shadow. Real shadows in the physical world don't come from a single point source at a fixed position — they're the combined result of ambient light, direct light, and reflected light. Replicating this physical behavior with CSS produces shadows that feel natural rather than artificial.
      </p>

      <h3>Ambient Occlusion: The Contact Shadow</h3>
      <p>
        Objects rest on surfaces. Where they touch, light cannot reach — this creates a tight, dark shadow directly under the object called an ambient occlusion shadow. In CSS, this translates to a very short shadow with minimal blur and medium opacity:
      </p>
      <pre><code>{`/* Ambient occlusion (contact shadow) */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);`}</code></pre>

      <h3>Directional Light: The Cast Shadow</h3>
      <p>
        Beyond the contact shadow, objects at elevation cast longer shadows from a directional light source (like the sun or a ceiling light). The higher the elevation, the longer and softer the shadow. In CSS:
      </p>
      <pre><code>{`/* Low elevation: card */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Medium elevation: dropdown */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* High elevation: modal */
box-shadow: 0 24px 64px rgba(0, 0, 0, 0.20);`}</code></pre>

      <h3>The Multi-Layer Shadow Technique</h3>
      <p>
        The most realistic CSS shadows use two to four layers: a small tight shadow (ambient occlusion) and one or more larger, softer shadows (cast shadows from different light sources). This mimics how real shadows have a dark, crisp core with a soft, diffuse penumbra:
      </p>
      <pre><code>{`/* Professional multi-layer shadow */
box-shadow:
  0 1px 2px rgba(0,0,0,0.07),   /* ambient occlusion */
  0 2px 4px rgba(0,0,0,0.07),   /* short cast shadow */
  0 4px 8px rgba(0,0,0,0.07),   /* medium cast shadow */
  0 8px 16px rgba(0,0,0,0.07),  /* long cast shadow */
  0 16px 32px rgba(0,0,0,0.07); /* very long cast shadow */`}</code></pre>

      <h2>Elevation Systems in Design Frameworks</h2>

      <h3>Material Design Elevation Scale</h3>
      <p>
        Material Design defines a 25-level elevation scale (0dp–24dp) with specific box-shadow values for each level. Key elevation levels:
      </p>
      <ul>
        <li><strong>0dp</strong>: No shadow — flat surfaces (backgrounds, cards at rest)</li>
        <li><strong>1dp</strong>: Very subtle shadow (raised buttons, bottom sheets)</li>
        <li><strong>2dp</strong>: Cards</li>
        <li><strong>4dp</strong>: Navigation bars</li>
        <li><strong>6dp</strong>: FAB (floating action button) resting state</li>
        <li><strong>8dp</strong>: Card on hover, menus</li>
        <li><strong>12dp</strong>: FAB pressed state</li>
        <li><strong>16dp</strong>: Navigation drawers</li>
        <li><strong>24dp</strong>: Dialogs</li>
      </ul>
      <p>
        Material Design's shadows use three layers simultaneously: umbra (dark, direct shadow), penumbra (medium, slightly diffuse), and ambient (light, very diffuse). This three-layer system produces the characteristic Material Design shadow quality that conveys precise elevation.
      </p>

      <h3>Tailwind CSS Shadow Scale</h3>
      <p>
        Tailwind provides a practical shadow utility scale:
      </p>
      <ul>
        <li><code>shadow-sm</code>: <code>0 1px 2px 0 rgb(0 0 0 / 0.05)</code></li>
        <li><code>shadow</code>: <code>0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-md</code>: <code>0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-lg</code>: <code>0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-xl</code>: <code>0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-2xl</code>: <code>0 25px 50px -12px rgb(0 0 0 / 0.25)</code></li>
        <li><code>shadow-inner</code>: <code>inset 0 2px 4px 0 rgb(0 0 0 / 0.05)</code></li>
        <li><code>shadow-none</code>: Removes shadow</li>
      </ul>
      <p>
        Tailwind v3 also introduced colored shadow utilities: <code>shadow-blue-500/50</code> tints the shadow with any Tailwind color at any opacity, enabling colored glow effects.
      </p>

      <h2>Creative Shadow Techniques</h2>

      <h3>Colored Shadows and Glows</h3>
      <p>
        While traditional shadows use black (rgba(0,0,0,...)), colored shadows and glows create distinctive design effects. A colored glow is simply a box-shadow with a colored semi-transparent value and no offset (or very small offset):
      </p>
      <pre><code>{`/* Blue glow effect */
box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);

/* Multi-color glow */
box-shadow: 0 0 30px rgba(59, 130, 246, 0.4),
            0 0 60px rgba(139, 92, 246, 0.2);

/* Brand-colored elevation shadow (matches element color) */
.btn-primary {
  background: #3B82F6;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
}`}</code></pre>

      <h3>Neumorphism Shadows</h3>
      <p>
        Neumorphism uses dual shadows — one light, one dark — to simulate a surface that appears extruded from or pressed into the background:
      </p>
      <pre><code>{`/* Neumorphic card (requires background color to match) */
.neumorphic {
  background: #e0e5ec;
  box-shadow:
    6px 6px 12px #b8bec7,   /* dark shadow (bottom-right) */
    -6px -6px 12px #ffffff;  /* light shadow (top-left) */
}

/* Pressed/inset state */
.neumorphic-pressed {
  box-shadow:
    inset 4px 4px 8px #b8bec7,
    inset -4px -4px 8px #ffffff;
}`}</code></pre>

      <h3>Inset Shadows</h3>
      <p>
        The <code>inset</code> keyword creates shadows inside the element rather than outside, simulating pressed or sunken states:
      </p>
      <pre><code>{`/* Inset input field shadow */
input {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Pressed button state */
.btn:active {
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);
}

/* Combining inset and outer shadows */
.fancy {
  box-shadow:
    0 4px 8px rgba(0,0,0,0.1),
    inset 0 1px 0 rgba(255,255,255,0.2);
}`}</code></pre>

      <h3>Using box-shadow as a Border</h3>
      <p>
        Box-shadow with zero blur and a spread value creates a sharp border without affecting layout (unlike <code>border</code> which adds to the box model and can cause layout shifts):
      </p>
      <pre><code>{`/* 2px outline that doesn't affect layout */
box-shadow: 0 0 0 2px #3B82F6;

/* Multiple outline "borders" */
box-shadow:
  0 0 0 2px #3B82F6,   /* inner border */
  0 0 0 4px white,      /* gap */
  0 0 0 6px #3B82F6;   /* outer border */`}</code></pre>
      <p>
        This technique is especially useful for focus indicators, hover states, selected states, and multi-ring effects that can't be achieved with a single <code>outline</code> or <code>border</code>.
      </p>

      <h3>One-Sided Shadows</h3>
      <p>
        Standard box-shadow spreads on all sides. To create a shadow on only one side, use negative spread and precise offset values:
      </p>
      <pre><code>{`/* Shadow only on bottom */
box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.3);

/* Shadow only on right side */
box-shadow: 4px 0 6px -4px rgba(0, 0, 0, 0.3);

/* Header with bottom shadow only */
header {
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.15);
}`}</code></pre>

      <h2>Box Shadow and Interactive States</h2>
      <p>
        Box-shadow is particularly powerful for communicating interactive states because it can be transitioned smoothly:
      </p>
      <pre><code>{`.card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}

.card:active {
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  transform: translateY(0);
}`}</code></pre>
      <p>
        This pattern — shadow growing and element lifting on hover, shrinking and settling on active — directly mimics the physical behavior of picking up an object. It's one of the most intuitive interactive affordances in digital UI design.
      </p>

      <h2>Box Shadow for Focus States and Accessibility</h2>
      <p>
        Box-shadow is increasingly recommended over the browser-default <code>outline</code> for focus indicators because it respects <code>border-radius</code> (outlines remain rectangular) and can be styled with much more visual precision:
      </p>
      <pre><code>{`/* Accessible focus ring using box-shadow */
:focus-visible {
  outline: none;  /* remove default */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

/* High-contrast focus for dark mode */
@media (prefers-color-scheme: dark) {
  :focus-visible {
    box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.7);
  }
}

/* WCAG 2.2 enhanced focus: 3px minimum with high contrast */
:focus-visible {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3B82F6;
}`}</code></pre>
      <p>
        WCAG 2.2 introduced enhanced focus appearance requirements (Success Criterion 2.4.11 and 2.4.12) specifying minimum focus indicator area and contrast. A two-layer box-shadow (white ring + colored ring) provides high visibility on both light and dark backgrounds.
      </p>

      <h2>Performance Considerations</h2>
      <p>
        Box-shadow performance is a nuanced topic. Modern browsers GPU-composite box shadows efficiently when elements are on their own compositing layer. However, there are important considerations:
      </p>
      <ul>
        <li><strong>box-shadow triggers repaint</strong>: Changing box-shadow causes the browser to repaint the element and its shadow area. On elements that animate frequently, this can cause jank on lower-end devices.</li>
        <li><strong>filter: drop-shadow() is better for images</strong>: For images and non-rectangular elements, <code>filter: drop-shadow()</code> respects the element's actual visual shape (including transparency). box-shadow always uses the rectangular box model.</li>
        <li><strong>Avoid on large animated elements</strong>: Box-shadow on a full-viewport-width element that updates every animation frame can be slow. Consider using a pseudo-element with a static shadow instead.</li>
        <li><strong>will-change: box-shadow</strong>: Hints to the browser to promote the element to its own GPU layer before shadow animation begins. Use sparingly — excessive compositing layers consume GPU memory.</li>
      </ul>

      <h2>Dark Mode Shadow Considerations</h2>
      <p>
        Black shadows that look elegant on white backgrounds become invisible on dark backgrounds. For dark mode, shadows need adjustment:
      </p>
      <pre><code>{`/* Light mode: standard dark shadow */
.card {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* Dark mode: use border instead, or reduce shadow */
@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    /* Or add a subtle border instead: */
    /* box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1); */
  }
}`}</code></pre>
      <p>
        In dark mode, elevation is often better communicated through surface lightness (slightly lighter backgrounds for elevated elements) rather than shadows. Material Design 3 and Apple's dark mode both use this approach — elevated surfaces are lighter, not shadow-bounded.
      </p>

      <h2>CSS Custom Properties for Shadow Systems</h2>
      <pre><code>{`:root {
  --shadow-sm:    0 1px 3px rgba(0,0,0,0.08),
                  0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:    0 4px 8px rgba(0,0,0,0.08),
                  0 2px 4px rgba(0,0,0,0.04);
  --shadow-lg:    0 16px 32px rgba(0,0,0,0.10),
                  0 4px 8px rgba(0,0,0,0.06);
  --shadow-xl:    0 32px 64px rgba(0,0,0,0.12),
                  0 8px 16px rgba(0,0,0,0.08);
  --shadow-focus: 0 0 0 3px rgba(59,130,246,0.4);
  --shadow-inset: inset 0 2px 4px rgba(0,0,0,0.08);
}

.card   { box-shadow: var(--shadow-md); }
.modal  { box-shadow: var(--shadow-xl); }
:focus  { box-shadow: var(--shadow-focus); }`}</code></pre>

      <h2>box-shadow vs. filter: drop-shadow()</h2>
      <p>
        CSS offers two shadow mechanisms:
      </p>
      <ul>
        <li><strong>box-shadow</strong>: Applies to the element's rectangular box. Respects border-radius. Supports inset. Supports spread. Multiple shadows via comma. Does not follow transparent areas of images.</li>
        <li><strong>filter: drop-shadow()</strong>: Follows the element's actual visual shape, including transparent image areas, SVG shapes, and text. No inset or spread parameter. Multiple drops via chained filter functions. Better for irregular shapes.</li>
      </ul>
      <pre><code>{`/* box-shadow: shadow on the rectangular box */
.card { box-shadow: 0 8px 16px rgba(0,0,0,0.15); }

/* filter: drop-shadow: shadow follows actual visual shape */
.png-logo { filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3)); }
.svg-icon { filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5)); }`}</code></pre>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is CSS box-shadow?',
    answer: 'The CSS box-shadow property adds shadow effects around an element\'s box. It accepts offset-x, offset-y, optional blur-radius, optional spread-radius, color, and an optional inset keyword. Multiple comma-separated shadows can be combined. It\'s used for elevation effects, interactive state feedback, decorative glows, focus indicators, and simulating physical depth in flat UI design.',
  },
  {
    category: 'Syntax',
    question: 'What is the correct order of values in box-shadow?',
    answer: 'box-shadow: [inset] offset-x offset-y [blur] [spread] [color]. Required: offset-x and offset-y. Optional: blur (default 0, creates sharp shadow), spread (default 0, same size as element), color (default black/currentColor), and inset keyword at the start. Example: `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` = no horizontal offset, 4px down, 8px blur, 10% opacity black.',
  },
  {
    category: 'Syntax',
    question: 'What does the spread radius do in box-shadow?',
    answer: 'Spread radius expands or contracts the shadow before blur is applied. Positive spread: shadow extends beyond element dimensions. Zero spread: shadow is same size as element. Negative spread: shadow shrinks. Use zero blur + positive spread for a sharp outline: `box-shadow: 0 0 0 2px blue` creates a 2px border that doesn\'t affect layout. Negative spread with offset creates one-sided shadows.',
  },
  {
    category: 'Syntax',
    question: 'What does the inset keyword do in box-shadow?',
    answer: 'inset moves the shadow inside the element instead of outside. Creates a pressed-in, sunken appearance: `box-shadow: inset 0 2px 4px rgba(0,0,0,0.2)`. Used for: depressed button active states, text input inner depth, neumorphic pressed states. Can be combined with outer shadows: `box-shadow: 0 4px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`.',
  },
  {
    category: 'Syntax',
    question: 'How do I add multiple shadows in CSS?',
    answer: 'Separate multiple shadows with commas: `box-shadow: shadow1, shadow2, shadow3`. First shadow in the list renders on top. Multiple shadows are used for: realistic multi-layer elevation effects, combining outer shadow with inner highlight, ring effects (using zero-blur spread), and glow + shadow combinations. Professional design systems use 2–4 layered shadows for natural-looking depth.',
  },
  {
    category: 'Design',
    question: 'How do I create realistic shadows that look natural?',
    answer: 'Use multiple layers: a small tight shadow (ambient occlusion) plus larger soft shadows (cast shadow). Use rgba() with transparency, not opaque colors — transparent shadows work on any background. Example: `box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.12)`. Keep opacity low (8–20%) and use higher blur for higher elevation. Avoid pure black — use slightly warm or cool blacks matching your palette.',
  },
  {
    category: 'Design',
    question: 'What box-shadow values should I use for different elevation levels?',
    answer: 'Low elevation (cards, list items): `0 2px 8px rgba(0,0,0,0.08)`. Medium elevation (dropdowns, popovers): `0 8px 24px rgba(0,0,0,0.12)`. High elevation (dialogs, modals): `0 24px 64px rgba(0,0,0,0.20)`. The pattern: as elevation increases, offset-y increases, blur increases, spread may decrease slightly, and opacity increases moderately.',
  },
  {
    category: 'Tailwind',
    question: 'What are the Tailwind CSS shadow utility classes?',
    answer: 'Tailwind\'s scale: shadow-sm (subtle), shadow (default), shadow-md (medium), shadow-lg (large), shadow-xl (extra large), shadow-2xl (very dramatic), shadow-inner (inset), shadow-none. Tailwind v3+ supports colored shadows: shadow-blue-500/50 tints the shadow with a color at opacity. Add shadow on specific sides with shadow-t, shadow-r, shadow-b, shadow-l in Tailwind v4.',
  },
  {
    category: 'Techniques',
    question: 'How do I create a colored glow effect with box-shadow?',
    answer: 'Use zero or near-zero offsets with a colored rgba value: `box-shadow: 0 0 20px rgba(59, 130, 246, 0.5)`. For branded button glows, use the button color with high blur: `.btn-primary { background: #3B82F6; box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4); }`. Layer multiple colored shadows for more intense glows. Use on hover states for interactive glow effects.',
  },
  {
    category: 'Techniques',
    question: 'How do I create a one-sided shadow (only on bottom)?',
    answer: 'Use negative spread with precise offset: `box-shadow: 0 4px 6px -4px rgba(0,0,0,0.3)`. The negative spread shrinks the shadow, and combining it with an offset and blur keeps shadow visible only in the offset direction. For a bottom-only shadow: offset-y positive, negative spread close to the blur value. For right-only: offset-x positive, negative spread matching blur.',
  },
  {
    category: 'Techniques',
    question: 'How do I use box-shadow instead of border without affecting layout?',
    answer: 'Use zero blur and a spread value: `box-shadow: 0 0 0 2px #3B82F6`. This creates a 2px border-like ring without adding to the element\'s dimensions or affecting layout. Unlike border, it doesn\'t cause layout shifts. Useful for: focus rings (doesn\'t shift content), hover state borders, selected state indicators. Stack multiple for multi-ring effects: `0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue`.',
  },
  {
    category: 'Techniques',
    question: 'What is neumorphism and how is it created with box-shadow?',
    answer: 'Neumorphism simulates 3D-extruded surfaces using dual shadows: one dark (bottom-right), one light (top-left): `box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff`. The element background must match the page background color. Pressed state uses inset: `box-shadow: inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff`. Key limitation: poor accessibility contrast — use carefully.',
  },
  {
    category: 'Performance',
    question: 'Does box-shadow affect rendering performance?',
    answer: 'box-shadow triggers paint (repaint), which can be expensive for elements that change frequently. For best performance: avoid animating box-shadow on large elements, use will-change: box-shadow to pre-promote to a compositor layer, or animate opacity/transform instead and use a pseudo-element with a static shadow. Modern browsers handle static box-shadow well with GPU compositing.',
  },
  {
    category: 'Performance',
    question: 'When should I use filter: drop-shadow instead of box-shadow?',
    answer: 'Use filter: drop-shadow() for: PNG images with transparency (shadow follows the visible shape, not the rectangular box), SVG icons and illustrations, non-rectangular shapes like cut-out images. Use box-shadow for: rectangular or border-radius-rounded elements, inset shadows, spread radius control, and when you need multiple chained shadows. box-shadow is generally faster than filter for rectangular elements.',
  },
  {
    category: 'Accessibility',
    question: 'How do I use box-shadow for accessible focus indicators?',
    answer: 'Replace default outline with box-shadow for border-radius-aware focus rings: `:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.5); }`. For WCAG 2.2 compliance (SC 2.4.11), use a two-layer approach with a white gap: `0 0 0 2px white, 0 0 0 4px #3B82F6`. This provides high visibility on both light and dark backgrounds. Always use :focus-visible, not :focus, to avoid ring on click.',
  },
  {
    category: 'Dark Mode',
    question: 'How do I adjust box-shadow for dark mode?',
    answer: 'Black shadows become invisible on dark backgrounds. Options: (1) Increase opacity: `rgba(0,0,0,0.4)` instead of `rgba(0,0,0,0.1)`. (2) Use border instead of shadow in dark mode: `box-shadow: 0 0 0 1px rgba(255,255,255,0.1)`. (3) Use elevation via lightness (slightly lighter surface background) rather than shadow. Apply via `@media (prefers-color-scheme: dark)` or `.dark` class.',
  },
  {
    category: 'Animation',
    question: 'How do I animate box-shadow on hover?',
    answer: 'Add transition and change shadow on :hover: `.card { box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: box-shadow 0.3s ease, transform 0.2s ease; } .card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.15); transform: translateY(-2px); }`. Combining shadow growth with a small upward translate creates a natural "lifting" effect. For active/pressed state, reduce shadow and remove translate.',
  },
  {
    category: 'Animation',
    question: 'What is the best way to animate shadows for performance?',
    answer: 'Animating box-shadow directly triggers paint. For better performance: (1) Pre-create both shadow states and animate between them with transition. (2) Use will-change: box-shadow to prepare GPU compositing. (3) Alternatively, create two pseudo-element overlays with the different shadows, then animate their opacity — opacity animations run on the compositor thread without paint. (4) Use transform + opacity changes alongside static shadows for the most performant approach.',
  },
  {
    category: 'Material Design',
    question: 'What are Material Design\'s elevation shadow values?',
    answer: 'Material Design 3 uses three-layer shadows (umbra, penumbra, ambient). Level 1 (cards at rest): `0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)`. Level 2 (dropdowns): `0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)`. Level 3 (FAB): `0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)`. Higher levels continue with increasing offsets and blur.',
  },
  {
    category: 'CSS Variables',
    question: 'How do I create a shadow system with CSS custom properties?',
    answer: 'Define semantic shadow tokens: `:root { --shadow-sm: 0 1px 3px rgba(0,0,0,0.08); --shadow-md: 0 4px 12px rgba(0,0,0,0.1); --shadow-lg: 0 16px 32px rgba(0,0,0,0.12); --shadow-focus: 0 0 0 3px rgba(59,130,246,0.4); }`. Apply: `.card { box-shadow: var(--shadow-md); }`. Enables theme-wide shadow changes, dark mode overrides within :root, and design token architecture alignment.',
  },
  {
    category: 'Techniques',
    question: 'How do I create a text shadow effect vs. box-shadow?',
    answer: 'box-shadow applies to an element\'s box. For text specifically, use the text-shadow property instead: `text-shadow: 2px 2px 4px rgba(0,0,0,0.5)`. text-shadow syntax: offset-x offset-y blur-radius color. Multiple text shadows are comma-separated. text-shadow doesn\'t support inset or spread. For neon text glow: `text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f`. box-shadow won\'t produce these effects for individual characters.',
  },
  {
    category: 'Browser Support',
    question: 'Do I need vendor prefixes for box-shadow?',
    answer: 'No. box-shadow has universal browser support without vendor prefixes. -webkit-box-shadow and -moz-box-shadow were required before 2011 but are completely unnecessary for any modern browser. The full specification including inset, spread, multiple shadows, and rgba colors is supported everywhere. Safe to use without any compatibility concerns or prefixes.',
  },
  {
    category: 'Techniques',
    question: 'How do I create a long flat shadow (popular in flat design)?',
    answer: 'Long shadows extend diagonally from an element at 45 degrees, creating a dramatic retro flat design effect. Use multiple box-shadows in a sequence: `box-shadow: 1px 1px 0 rgba(0,0,0,0.1), 2px 2px 0 rgba(0,0,0,0.1), ... 20px 20px 0 rgba(0,0,0,0.1)`. Each step adds 1px in both x and y direction. CSS preprocessors (Sass) or JavaScript can generate these efficiently. Alternatively, use a CSS gradient or SVG for more control.',
  },
];

export const boxShadowGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
