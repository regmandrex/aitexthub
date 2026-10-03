import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Box Shadow Generator: The Complete Guide to CSS box-shadow, Shadow Systems, and Elevation Design</h2>
      <p>The CSS <code>box-shadow</code> property stands as one of the most expressive utilities in a web designer toolkit. A well-designed shadow can communicate depth, elevation, and interactivity — granting flat digital interfaces a feeling of physical dimension that directs user attention and conveys hierarchy. From the barely noticeable 1px outline shadow on a card to the striking depth-creating shadow of a modal dialog, <code>box-shadow</code> shapes how people view and engage with digital screens.</p>
      <p>CSS box-shadow debuted in CSS3 and has enjoyed universal support across browsers since 2011. It has progressed from a basic decorative trick into a foundational element of every major design system — Material Design, Apple Human Interface Guidelines, Tailwind CSS, and Fluent Design all specify complex multi-tier shadow systems for conveying elevation and interactive states. Grasping box-shadow at a profound technical level, covering its performance traits, stacking behavior, and creative uses, remains vital for any dedicated front-end developer or UI designer.</p>

      <h2>All About the box-shadow Syntax</h2>
      <p>Here is the complete syntax for <code>box-shadow</code>:</p>
      <pre><code>{`box-shadow: [inset] offset-x offset-y [blur-radius] [spread-radius] [color];

/* Multiple shadows (comma-separated): */
box-shadow: shadow1, shadow2, shadow3;`}</code></pre>

      <h3>Required Parameters</h3>
      <ul>
        <li><strong>offset-x</strong>: Horizontal offset. Positive values push the shadow right, negative values pull it left.</li>
        <li><strong>offset-y</strong>: Vertical offset. Positive values place the shadow down, negative values place it up.</li>
      </ul>

      <h3>Optional Parameters</h3>
      <ul>
        <li><strong>blur-radius</strong> (default 0): Greater amounts generate a bigger, softer, more diffuse shadow. 0 yields a sharp-edged shadow. Technically, this represents the standard deviation of a Gaussian blur applied to the shadow.</li>
        <li><strong>spread-radius</strong> (default 0): Positive amounts extend the shadow past the element dimensions; negative amounts shrink it. A spread of 0 makes the shadow exact in size to the element prior to blur application.</li>
        <li><strong>color</strong> (default currentColor or black relative to browser): The shadow hue. Employ rgba() or hsla() for transparency — transparent shadows prove crucial for natural-looking outcomes functioning on any background color.</li>
        <li><strong>inset</strong> keyword: Places the shadow inside the element border instead of outside. Generates a sunken, pressed-in look.</li>
      </ul>

      <h3>Multiple Shadows</h3>
      <p>Several comma-separated shadows display in a front-to-back sequence, meaning the initial shadow in the series appears above any following ones. Utilizing multiple stacked shadows is essential for achieving believable, lifelike shadow effects:</p>
      <pre><code>{`/* Layered shadow system: ambient + direct light */
box-shadow:
  0 1px 2px rgba(0,0,0,0.04),
  0 4px 8px rgba(0,0,0,0.08),
  0 16px 32px rgba(0,0,0,0.12);`}</code></pre>

      <h2>Comprehending Shadow Authenticity: Light Physics</h2>
      <p>The gap between amateur and expert shadow design lies in grasping how light and shadow interact physically. Authentic shadows in reality do not originate from one single fixed point; rather, they result from a mix of ambient, direct, and bounced light. Mimicking these physical traits through CSS creates shadows that feel organic instead of fake.</p>

      <h3>Ambient Occlusion: The Contact Shadow</h3>
      <p>Items sit upon surfaces. Wherever contact occurs, light fails to penetrate, producing a compact, deep shadow right beneath the element known as an ambient occlusion shadow. Within CSS, this corresponds to a very brief shadow featuring low blur alongside medium opacity:</p>
      <pre><code>{`/* Ambient occlusion (contact shadow) */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);`}</code></pre>

      <h3>Directional Light: The Cast Shadow</h3>
      <p>Apart from contact shadows, elevated items project extended shadows stemming from a directional illumination source, such as the sun or overhead lighting. Greater elevation results in longer and softer shadows. Within CSS:</p>
      <pre><code>{`/* Low elevation: card */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Medium elevation: dropdown */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* High elevation: modal */
box-shadow: 0 24px 64px rgba(0, 0, 0, 0.20);`}</code></pre>

      <h3>The Multi-Layer Shadow Technique</h3>
      <p>The most authentic CSS shadows incorporate two to four layers: a compact crisp shadow (ambient occlusion) alongside one or more expanded, softer shadows functioning as cast shadows from varying light angles. This simulates how actual shadows possess a dark, sharp center accompanied by a gentle, spread-out penumbra:</p>
      <pre><code>{`/* Professional multi-layer shadow */
box-shadow:
  0 1px 2px rgba(0,0,0,0.07),   /* ambient occlusion */
  0 2px 4px rgba(0,0,0,0.07),   /* short cast shadow */
  0 4px 8px rgba(0,0,0,0.07),   /* medium cast shadow */
  0 8px 16px rgba(0,0,0,0.07),  /* long cast shadow */
  0 16px 32px rgba(0,0,0,0.07); /* very long cast shadow */`}</code></pre>

      <h2>Elevation Systems in Design Frameworks</h2>

      <h3>Material Design Elevation Scale</h3>
      <p>Material Design establishes a 25-tier elevation hierarchy spanning 0dp through 24dp, featuring exact box-shadow settings for every single tier. Essential elevation steps include:</p>
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
      <p>Shadows in Material Design deploy three distinct tiers at once: umbra representing the dark direct shadow, penumbra acting as the medium slightly diffused shadow, and ambient serving as the very diffuse light layer. This triple-layer structure generates the signature Material Design look that communicates accurate depth.</p>

      <h3>Tailwind CSS Shadow Scale</h3>
      <p>Tailwind offers a useful utility scale for shadows:</p>
      <ul>
        <li><code>shadow-neo-sm</code>: <code>0 1px 2px 0 rgb(0 0 0 / 0.05)</code></li>
        <li><code>shadow</code>: <code>0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-neo</code>: <code>0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-neo-lg</code>: <code>0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-neo-lg</code>: <code>0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)</code></li>
        <li><code>shadow-neo-lg</code>: <code>0 25px 50px -12px rgb(0 0 0 / 0.25)</code></li>
        <li><code>shadow-inner</code>: <code>inset 0 2px 4px 0 rgb(0 0 0 / 0.05)</code></li>
        <li><code>shadow-none</code>: Removes shadow</li>
      </ul>
      <p>Tailwind v3 also brought in colored shadow utilities: <code>shadow-blue-500/50</code> tints the shadow with any Tailwind color at any opacity, enabling colored glow effects.</p>

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

      <h3>Applying box-shadow as a Border</h3>
      <p>A box-shadow with zero blur and a spread value generates a crisp border without altering the layout (unlike <code>border</code> which adds to the box model and may trigger layout shifts):</p>
      <pre><code>{`/* 2px outline that doesn't affect layout */
box-shadow: 0 0 0 2px #3B82F6;

/* Multiple outline "borders" */
box-shadow:
  0 0 0 2px #3B82F6,   /* inner border */
  0 0 0 4px white,      /* gap */
  0 0 0 6px #3B82F6;   /* outer border */`}</code></pre>
      <p>This technique proves especially handy for focus indicators, hover states, selected states, and multi-ring effects unattainable through a sole <code>outline</code> or <code>border</code>.</p>

      <h3>One-Sided Shadows</h3>
      <p>Standard box-shadow expands across all sides. To produce a shadow on a single side, apply negative spread along with precise offset values:</p>
      <pre><code>{`/* Shadow only on bottom */
box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.3);

/* Shadow only on right side */
box-shadow: 4px 0 6px -4px rgba(0, 0, 0, 0.3);

/* Header with bottom shadow only */
header {
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.15);
}`}</code></pre>

      <h2>Interactive States and Box Shadow</h2>
      <p>Box-shadow works exceptionally well for conveying interactive states due to its ability to transition fluidly:</p>
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
      <p>This pattern — shadow expanding and the element lifting during hover, then contracting and settling on active — directly mimics the physical motion of picking up an object. It stands as one of the most intuitive interactive affordances in digital UI design.</p>

      <h2>Accessibility and Focus States with Box Shadow</h2>
      <p>Box-shadow is increasingly favored over the browser-default <code>outline</code> for focus indicators since it honors <code>border-radius</code> (outlines remain rectangular) and permits much greater visual styling precision:</p>
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
      <p>WCAG 2.2 introduced stricter focus appearance guidelines (Success Criterion 2.4.11 and 2.4.12) defining minimum focus indicator area and contrast. A two-layer box-shadow (white ring paired with a colored ring) ensures strong visibility across both light and dark backgrounds.</p>

      <h2>Performance Considerations</h2>
      <p>Box-shadow performance involves nuanced details. Modern browsers GPU-composite box shadows efficiently when elements reside on their personal compositing layer. Still, several key factors deserve attention:</p>
      <ul>
        <li><strong>box-shadow triggers repaint</strong>: Modifying box-shadow forces the browser to repaint both the element and its shadow zone. On elements animating frequently, this might introduce jank on lower-end devices.</li>
        <li><strong>filter: drop-shadow() is better for images</strong>: For images and non-rectangular elements, <code>filter: drop-shadow()</code> respects the element's genuine visual form (including transparency). Meanwhile, box-shadow always relies on the rectangular box model.</li>
        <li><strong>Avoid on large animated elements</strong>: Using box-shadow on a full-viewport-width element updating every animation frame can be sluggish. Consider employing a pseudo-element featuring a static shadow instead.</li>
        <li><strong>will-change: box-shadow</strong>: Advises the browser to promote the element to its dedicated GPU layer prior to shadow animation kickoff. Apply sparingly — excessive compositing layers consume valuable GPU memory.</li>
      </ul>

      <h2>Shadow Adjustments for Dark Mode</h2>
      <p>Dark shadows appearing refined on white backgrounds turn invisible on dark ones. For dark mode, shadows require adjustment:</p>
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
      <p>During dark mode, elevation is frequently better communicated via surface lightness (slightly brighter backgrounds for elevated items) instead of shadows. Material Design 3 and Apple's dark mode both utilize this strategy — elevated surfaces appear lighter, not bound by shadows.</p>

      <h2>Shadow Systems Built with CSS Custom Properties</h2>
      <pre><code>{`:root {
  --shadow-neo-sm:    0 1px 3px rgba(0,0,0,0.08),
                  0 1px 2px rgba(0,0,0,0.04);
  --shadow-neo:    0 4px 8px rgba(0,0,0,0.08),
                  0 2px 4px rgba(0,0,0,0.04);
  --shadow-neo-lg:    0 16px 32px rgba(0,0,0,0.10),
                  0 4px 8px rgba(0,0,0,0.06);
  --shadow-neo-lg:    0 32px 64px rgba(0,0,0,0.12),
                  0 8px 16px rgba(0,0,0,0.08);
  --shadow-focus: 0 0 0 3px rgba(59,130,246,0.4);
  --shadow-inset: inset 0 2px 4px rgba(0,0,0,0.08);
}

.card   { box-shadow: var(--shadow-neo); }
.modal  { box-shadow: var(--shadow-neo-lg); }
:focus  { box-shadow: var(--shadow-focus); }`}</code></pre>

      <h2>box-shadow versus filter: drop-shadow()</h2>
      <p>CSS provides two distinct shadow methods:</p>
      <ul>
        <li><strong>box-shadow</strong>: Applies to the element's rectangular box. Respects border-radius. Supports inset. Supports spread. Multiple shadows via comma. Fails to follow transparent image areas.</li>
        <li><strong>filter: drop-shadow()</strong>: Tracks the element's actual visual shape, encompassing transparent image regions, SVG shapes, and text. No inset or spread parameter. Multiple drops through chained filter functions. Better suited for irregular shapes.</li>
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
    answer: 'The CSS box-shadow property incorporates shadow effects around an element\'s box. It accepts offset-x, offset-y, optional blur-radius, optional spread-radius, color, alongside an optional inset keyword. Multiple comma-separated shadows can combine. It serves elevation effects, interactive state feedback, decorative glows, focus indicators, and simulates physical depth within flat UI design.',
  },
  {
    category: 'Syntax',
    question: 'What is the correct sequence of values in box-shadow?',
    answer: 'box-shadow: [inset] offset-x offset-y [blur] [spread] [color]. Required: offset-x and offset-y. Optional: blur (defaults to 0, builds sharp shadow), spread (defaults to 0, identical size to element), color (defaults to black/currentColor), alongside the inset keyword at the beginning. Example: `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` = no horizontal offset, 4px downward, 8px blur, 10% opacity black.',
  },
  {
    category: 'Syntax',
    question: 'What function does the spread radius perform in box-shadow?',
    answer: 'Spread radius expands or shrinks the shadow before blur applies. Positive spread: shadow reaches beyond element dimensions. Zero spread: shadow matches element size. Negative spread: shadow contracts. Use zero blur plus positive spread for a crisp outline: `box-shadow: 0 0 0 2px blue` establishes a 2px border bypassing layout impact. Negative spread coupled with offset creates one-sided shadows.',
  },
  {
    category: 'Syntax',
    question: 'What does the inset keyword accomplish in box-shadow?',
    answer: 'inset shifts the shadow inside the element rather than externally. Produces a depressed, recessed look: `box-shadow: inset 0 2px 4px rgba(0,0,0,0.2)`. Applied for: clicked button active states, form field inner depth, neumorphic pressed states. Can be mixed with outer shadows: `box-shadow: 0 4px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`.',
  },
  {
    category: 'Syntax',
    question: 'How can multiple shadows be added in CSS?',
    answer: 'Separate numerous shadows using commas: `box-shadow: shadow1, shadow2, shadow3`. The initial shadow in the sequence draws on top. Several shadows serve for: authentic multi-tier elevation styles, blending outer shadow with inner highlight, ring effects (utilizing zero-blur spread), and glow + shadow blends. Expert design systems employ 2–4 stacked shadows for organic-looking depth.',
  },
  {
    category: 'Design',
    question: 'How do I craft realistic shadows that look organic?',
    answer: 'Build with stacked declarations: combine a tight contact layer (ambient occlusion) with expanded diffuse layers (cast shadow). Rely on rgba() containing opacity over opaque tones — translucent projections blend seamlessly across any backdrop. Case in point: `box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.12)`. Keep transparency soft (8–20%) while spreading blur for elevated planes. Avoid pure black by introducing subtly warmed or chilled dark tones from your design system.',
  },
  {
    category: 'Design',
    question: 'What box-shadow measurements should I apply for varying elevation depths?',
    answer: 'Slight lift (cards, list items): `0 2px 8px rgba(0,0,0,0.08)`. Balanced lift (dropdowns, popovers): `0 8px 24px rgba(0,0,0,0.12)`. Prominent lift (dialogs, modals): `0 24px 64px rgba(0,0,0,0.20)`. The guiding rule: higher altitudes demand expanded offset-y, amplified blur, potentially condensed spread, along with a modest step up in overall opacity.',
  },
  {
    category: 'Tailwind',
    question: 'Which classes represent Tailwind CSS shadow utilities?',
    answer: 'The scale offered by Tailwind consists of shadow-neo-sm (subtle), shadow (default), shadow-neo (medium), shadow-neo-lg (large), shadow-neo-lg (extra large), shadow-neo-lg (very dramatic), shadow-inner (inset), and shadow-none. Colored shadows are supported in Tailwind v3+ via syntax like shadow-blue-500/50 which applies a tinted opacity shadow. Directional shadows on specific sides are available using shadow-t, shadow-r, shadow-b, shadow-l in Tailwind v4.',
  },
  {
    category: 'Techniques',
    question: 'How do I generate a chromatic glow effect using box-shadow?',
    answer: 'Apply minimal or zero offsets alongside a colored rgba value like `box-shadow: 0 0 20px rgba(59, 130, 246, 0.5)`. Achieve branded button glows by matching the button\'s hue with a high blur level: `.btn-primary { background: #3B82F6; box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4); }`. Intensify glow effects by stacking several colored shadows together, or apply them during hover states for interactive visuals.',
  },
  {
    category: 'Techniques',
    question: 'How can I produce a single-sided shadow on the bottom only?',
    answer: 'Implement a precise offset alongside negative spread via `box-shadow: 0 4px 6px -4px rgba(0,0,0,0.3)`. Negative spread reduces shadow dimensions, so pairing it with blur and offset confines the shadow strictly to the offset direction. Create bottom-only shadows by using a positive offset-y with a negative spread close to the blur amount, or right-only shadows by setting a positive offset-x alongside a matching negative spread.',
  },
  {
    category: 'Techniques',
    question: 'How can I apply box-shadow instead of a border without altering the layout?',
    answer: 'Utilize zero blur and a spread value: `box-shadow: 0 0 0 2px #3B82F6`. This generates a 2px border-like ring without expanding the element\'s dimensions or impacting the layout. Unlike border, it avoids triggering layout shifts. Helpful for: focus rings (prevents content shifting), hover state borders, selected state indicators. Layer multiple for multi-ring designs: `0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue`.',
  },
  {
    category: 'Techniques',
    question: 'What is neumorphism and in what way is it built utilizing box-shadow?',
    answer: 'Neumorphism replicates 3D-extruded surfaces through dual shadows: one dark (bottom-right), one light (top-left): `box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff`. The element background needs to match the page background color. The pressed state relies on inset: `box-shadow: inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff`. Main limitation: weak accessibility contrast — apply with caution.',
  },
  {
    category: 'Performance',
    question: 'Does box-shadow impact rendering performance?',
    answer: 'box-shadow initiates paint (repaint), which might prove costly for elements updating frequently. For optimal performance: avoid animating box-shadow on massive elements, apply will-change: box-shadow to pre-promote to a compositor layer, or animate opacity/transform instead and use a pseudo-element carrying a static shadow. Current browsers manage static box-shadow efficiently with GPU compositing.',
  },
  {
    category: 'Performance',
    question: 'When ought I to implement filter: drop-shadow instead of box-shadow?',
    answer: 'Employ filter: drop-shadow() for: PNG images featuring transparency (the shadow follows the visible shape, not the rectangular box), SVG icons plus illustrations, non-rectangular shapes such as cut-out images. Apply box-shadow for: rectangular or border-radius-rounded elements, inset shadows, spread radius control, alongside when requiring multiple chained shadows. box-shadow usually runs faster than filter for rectangular elements.',
  },
  {
    category: 'Accessibility',
    question: 'In what way do I apply box-shadow for accessible focus indicators?',
    answer: 'Substitute the default outline with box-shadow for border-radius-aware focus rings: `:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.5); }`. For WCAG 2.2 compliance (SC 2.4.11), use a two-layer setup featuring a white gap: `0 0 0 2px white, 0 0 0 4px #3B82F6`. This delivers high visibility across both light and dark backgrounds. Always utilize :focus-visible, not :focus, to prevent rings on clicks.',
  },
  {
    category: 'Dark Mode',
    question: 'How can I adjust box-shadow for dark mode?',
    answer: 'Black shadows turn invisible over dark backgrounds. Choices: (1) Raise opacity: `rgba(0,0,0,0.4)` rather than `rgba(0,0,0,0.1)`. (2) Apply border instead of shadow in dark mode: `box-shadow: 0 0 0 1px rgba(255,255,255,0.1)`. (3) Utilize elevation via lightness (a slightly lighter surface background) rather than shadow. Implement via `@media (prefers-color-scheme: dark)` or the `.dark` class.',
  },
  {
    category: 'Animation',
    question: 'How do I animate box-shadow upon hover?',
    answer: 'Incorporate transition and update the shadow on :hover: `.card { box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: box-shadow 0.3s ease, transform 0.2s ease; } .card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.15); transform: translateY(-2px); }`. Combining shadow expansion with a minor upward translate produces a natural "lifting" effect. For active/pressed states, shrink the shadow and drop the translate.',
  },
  {
    category: 'Animation',
    question: 'What stands as the optimal way to animate shadows for performance?',
    answer: 'Animating box-shadow directly kicks off paint. For better performance: (1) Pre-create both shadow states and transition between them. (2) Apply will-change: box-shadow to prepare GPU compositing. (3) Alternatively, build two pseudo-element overlays with different shadows, then animate their opacity — opacity animations execute on the compositor thread without paint. (4) Utilize transform + opacity adjustments alongside static shadows for the peak performance approach.',
  },
  {
    category: 'Material Design',
    question: 'What are the elevation shadow values used in Material Design?',
    answer: 'Material Design 3 relies on three combined shadow projections (umbra, penumbra, ambient). Level 1 (cards at rest): `0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)`. Level 2 (dropdowns): `0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)`. Level 3 (FAB): `0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)`. Deeper positions step up naturally through scaled blur radii alongside wider offsets.',
  },
  {
    category: 'CSS Variables',
    question: 'How can I build a shadow system using CSS custom properties?',
    answer: 'Define semantic shadow tokens: `:root { --shadow-neo-sm: 0 1px 3px rgba(0,0,0,0.08); --shadow-neo: 0 4px 12px rgba(0,0,0,0.1); --shadow-neo-lg: 0 16px 32px rgba(0,0,0,0.12); --shadow-focus: 0 0 0 3px rgba(59,130,246,0.4); }`. Apply via: `.card { box-shadow: var(--shadow-neo); }`. Permits theme-wide shadow updates, dark mode overrides inside :root, and design token architecture alignment.',
  },
  {
    category: 'Techniques',
    question: 'In what way do I create a text shadow effect versus box-shadow?',
    answer: 'The box-shadow property targets the container boundary. To style typographical elements, implement text-shadow directly: `text-shadow: 2px 2px 4px rgba(0,0,0,0.5)`. Text shadow parameter order: offset-x offset-y blur-radius color. Separate layered projections using commas. Bear in mind text-shadow omits inset or spread adjustments. For an illuminated styling effect: `text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f`. The standard box-shadow property cannot shade individual letters.',
  },
  {
    category: 'Browser Support',
    question: 'Do I require vendor prefixes for box-shadow?',
    answer: 'No. Modern browsers deliver complete, built-in support for box-shadow without prefix tags. The old -webkit-box-shadow and -moz-box-shadow variants were critical before 2011, yet they offer zero utility for current platforms. Full capabilities — spanning inset modes, spread distances, layered values, and rgba colors — operate across all engines. You can implement it freely with total peace of mind.',
  },
  {
    category: 'Techniques',
    question: 'How do I generate a long flat shadow (common in flat design)?',
    answer: 'Extended diagonal long shadows cast from an object at 45 degrees, producing a striking vintage flat design style. Apply several box-shadows in succession: `box-shadow: 1px 1px 0 rgba(0,0,0,0.1), 2px 2px 0 rgba(0,0,0,0.1), ... 20px 20px 0 rgba(0,0,0,0.1)`. Every increment increases both horizontal and vertical offsets by 1px. JavaScript or CSS preprocessors (Sass) can produce these smoothly. Or else, deploy an SVG or CSS gradient for enhanced precision.',
  },
];

export const boxShadowGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
