import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { PxToRemTool } from '@/components/tools/PxToRemTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 2592000;
const toolSlug = 'px-to-rem';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta(toolSlug);
}

const faqs: FaqItem[] = [
  {
    category: 'Basics',
    question: 'What is px to rem conversion and why does it matter for CSS?',
    answer: `PX to REM conversion translates pixel values (px) into REM units, which are relative to the root element's font size. 1rem equals the font size set on the HTML element — by default 16px in all major browsers. So 16px = 1rem, 32px = 2rem, 8px = 0.5rem, and 24px = 1.5rem. This conversion matters because REM units scale with the user's browser font size preference, while pixels are fixed. If a user increases their browser's base font size from 16px to 20px (for accessibility), all REM-sized elements scale proportionally — text becomes larger, spacing increases, components resize — maintaining the visual design while respecting the user's needs. Pixel sizes ignore this preference entirely. Using REMs for typography and spacing produces more accessible, flexible CSS that respects user preferences and adapts to different device contexts. Our tool provides instant PX?REM conversion with a configurable base font size.`,
  },
  {
    category: 'Basics',
    question: 'What is the formula to convert px to rem?',
    answer: `The formula is simple: rem = px ÷ base_font_size. With the default browser base font size of 16px: 16px ÷ 16 = 1rem, 24px ÷ 16 = 1.5rem, 32px ÷ 16 = 2rem, 12px ÷ 16 = 0.75rem, 10px ÷ 16 = 0.625rem. To convert rem to px: px = rem × base_font_size. So 1.5rem × 16 = 24px, 0.875rem × 16 = 14px. If your root font size is set to something other than 16px (for example, many design systems set it to 10px to make mental math easier: 1rem = 10px, so 16px = 1.6rem), adjust the base accordingly. Our tool has a configurable base font size for this reason — if your project uses html { font-size: 62.5%; } (which sets the base to 10px), change the base to 10 and all calculations update automatically. Memorize the most common conversions: 16=1rem, 14=0.875rem, 20=1.25rem, 24=1.5rem, 32=2rem, 48=3rem, 64=4rem.`,
  },
  {
    category: 'Basics',
    question: 'What is the difference between px, rem, and em units in CSS?',
    answer: `These three CSS units handle sizing very differently. px (pixels): absolute unit, always the exact specified size regardless of user preferences or parent element size. 16px is always 16px. Simple and predictable but not accessible — ignores user font size preferences. rem (root em): relative to the root element's (html) font size. If html has font-size: 16px, then 1rem = 16px everywhere on the page. Consistent (not affected by nesting) and accessible (scales with user preferences). em (em): relative to the current element's font size. If a paragraph has font-size: 18px, then 1em = 18px within that paragraph. If a span inside that paragraph uses em, it is relative to the paragraph's 18px, not the root 16px. This makes em context-dependent and potentially tricky when nested — ems compound with each other through nesting. General recommendation: use rem for font sizes and most spacing (globally consistent, accessible), em for specific cases where scaling relative to the local element makes sense (like button padding that should scale with button font size), and px for borders, shadows, and fine details that should remain crisp at exact pixel values.`,
  },
  {
    category: 'Basics',
    question: 'Why should I use rem instead of px for font sizes?',
    answer: `Using rem for font sizes rather than px has significant accessibility benefits. Browser users can set a custom base font size in their browser settings (typically in Accessibility or Appearance settings). This preference is designed to help users with low vision, dyslexia, or other conditions that benefit from larger text. When font sizes are set in rem, they respect this preference — a user who sets their browser to 20px base size will see all rem-defined text 25% larger. When font sizes are set in px, they are fixed and ignore this preference entirely, effectively overriding the user's accessibility settings. The W3C WCAG (Web Content Accessibility Guidelines) and modern accessibility best practices recommend using relative units (rem or em) for text sizes. Beyond accessibility, rem-based font sizes make it easy to create responsive typography — changing the root font size at different breakpoints scales all text proportionally with one CSS rule. The px-to-rem converter makes migrating an existing px-based project to rem straightforward.`,
  },
  {
    category: 'Usage',
    question: 'How do I use the px to rem converter for my CSS project?',
    answer: `Using our px to rem converter is immediate: enter any pixel value in the PX field, and the equivalent rem value appears instantly with the default 16px base. For multiple conversions, use the bulk converter — paste a list of pixel values (one per line), and all conversions appear simultaneously. The reference table provides pre-calculated values for common pixel sizes (4px through 128px) at three different base sizes (16px, 14px, 18px) for quick lookup without manual entry. To configure for non-standard bases: change the "Base Font Size" field to match your project's root font size. If your CSS has html { font-size: 10px; } or html { font-size: 62.5%; }, set the base to 10 and all values calculate correctly. Copy individual results using the copy button next to each value, or select all output text for bulk copying. The tool handles decimal precision automatically — 16px at base 16 produces exactly 1rem, while 15px produces 0.9375rem with full precision.`,
  },
  {
    category: 'Usage',
    question: 'How do I convert my entire CSS file from px to rem?',
    answer: `Converting an existing CSS codebase from px to rem can be done manually using our bulk converter or automated with build tools. Manual approach: collect all unique pixel values used for font sizes and spacing from your CSS, paste them into the bulk converter, and use the results to replace values in your CSS. Keep px for borders, box shadows, and 1px details. Automated approach: use PostCSS with the postcss-pxtorem plugin. Install with npm install postcss postcss-pxtorem --save-dev, then configure: require('postcss-pxtorem')({ rootValue: 16, propList: ['font-size', 'padding', 'margin', 'width', 'height'] }). This automatically converts specified CSS properties during the build process. The Sass/SCSS approach: define a function function rem($px) { @return math.div($px, 16) * 1rem; } and use rem(16px) instead of 16px throughout your Sass files. This keeps pixel values readable in source and converts to rem in output. Our converter is best for understanding what specific values equate to before deciding your conversion strategy.`,
  },
  {
    category: 'Technical',
    question: 'What is the default browser font size and how does it affect rem calculations?',
    answer: `All major browsers (Chrome, Firefox, Safari, Edge) set the default base font size to 16px. This means 1rem = 16px by default for any webpage that does not override the root font size. However, users can change this default in browser settings: in Chrome, Settings > Appearance > Font size; in Firefox, Settings > General > Language and Appearance > Fonts; in Safari, Preferences > Advanced > Accessibility > Minimum font size. When users change their browser's font size setting, the root font size changes, and all rem values on the page scale accordingly — this is the entire point of using rem. If your CSS sets html { font-size: 16px; } explicitly (fixed pixels), you override the user's browser preference and lose this accessibility benefit. Best practice: set html { font-size: 100%; } or do not set it at all, allowing the browser's default (which respects user settings) to be the root. Then use rem for all font sizes to inherit this scalability.`,
  },
  {
    category: 'Technical',
    question: 'What is the 62.5% base font size trick?',
    answer: `The 62.5% base font size trick is a popular approach that makes rem mental math easy: setting html { font-size: 62.5%; } makes 1rem = 10px (since 62.5% of 16px = 10px). With 10px base, the math becomes trivial: 16px = 1.6rem, 24px = 2.4rem, 12px = 1.2rem, 14px = 1.4rem. Proponents argue this reduces mental calculation when writing CSS. However, there are drawbacks: (1) You must remember to reset body { font-size: 1.6rem; } (or 1.4rem, etc.) to restore readable body text, since all elements would inherit the 10px root without this reset. (2) Any third-party components or libraries that assume a 16px root will be affected. (3) Some developers find it confusing because the actual pixel-to-rem ratio differs from browsers' defaults. Our tool supports any base font size — if your project uses 62.5%, set the base to 10 and all conversions calculate correctly. Set base to 16 for default-browser-behavior projects.`,
  },
  {
    category: 'Technical',
    question: 'What CSS properties should use rem and which should use px?',
    answer: `General guidelines for unit selection by property: Use rem for: font-size (all text should scale with user preferences), padding and margin for text-related spacing (should scale with text), line-height (use unitless or rem, not em or px), max-width for readable line lengths (scale with user's preferred text size), border-radius for elements that scale. Use px for: border-width (1px borders should stay 1px for crispness), box-shadow blur and spread values (pixel precision matters for aesthetics), transform translate values where exact positioning is needed, animation keyframe values. Use em for: padding and margin on interactive elements like buttons (padding that scales proportionally with the button's own font size creates more consistent visual balance). Use % for: layout widths (make flexible, responsive columns), height when relative to parent. Use viewport units (vw, vh, vmin, vmax) for: truly viewport-relative sizing, full-viewport sections. Use ch for: monospace font containers where character width matters (code blocks with specific column limits).`,
  },
  {
    category: 'Responsive Design',
    question: 'How does rem interact with responsive design and media queries?',
    answer: `Rem and responsive design interact powerfully. The key technique: fluid type scaling using rem with a base font size that changes at breakpoints. Set different root font sizes for different screen widths: html { font-size: 14px; } at mobile, font-size: 16px at tablet, font-size: 18px at desktop — all using a single breakpoint approach. All rem-defined font sizes, padding, and margins scale proportionally when the root changes. This creates a responsive design that adapts not just to screen size but to appropriate reading conditions. More advanced: CSS clamp() for fluid scaling without breakpoints: font-size: clamp(1rem, 2.5vw, 1.5rem) scales smoothly between 1rem minimum and 1.5rem maximum based on viewport width. Note: media queries themselves should use em rather than rem — there is a browser quirk where rem in media queries refers to the browser's default 16px, not to overridden root font sizes. So use @media (min-width: 48em) rather than @media (min-width: 48rem) for reliable behavior.`,
  },
  {
    category: 'Design Systems',
    question: 'How do design systems and frameworks like Tailwind handle rem and px?',
    answer: `Modern CSS frameworks and design systems use rem extensively. Tailwind CSS: the default spacing scale uses rem — 1 spacing unit (p-1, m-1) = 0.25rem = 4px (at 16px base). All Tailwind text sizes (text-sm, text-base, text-lg) are in rem. Tailwind's font-size defaults assume 16px browser base. You can customize the root font size in your Tailwind config. Bootstrap 5: uses rem throughout — font sizes, margins, paddings are all rem-based. The root font-size is set to 10px via html { font-size: 62.5% } in some older versions, or directly in rem with modern versions. Material Design: specifies typography in rem, with a 16px (1rem) base for body text. Figma to code: when exporting designs from Figma or other design tools, values are often in px from the design. Our px-to-rem converter bridges design (px) and implementation (rem) by providing instant conversion of Figma values to the rem units your CSS framework uses.`,
  },
  {
    category: 'Design Systems',
    question: 'What are the most common rem values in professional web design?',
    answer: `Professional web design uses these rem values most frequently (at 16px base): 0.25rem (4px) — tiny spacing, fine-tuning margins and gaps. 0.5rem (8px) — standard inner padding for small elements, icon spacing. 0.75rem (12px) — small text, caption font size, compact spacing. 0.875rem (14px) — secondary text, meta information, navigation links. 1rem (16px) — base body text size, standard spacing unit. 1.125rem (18px) — slightly larger body text for reading comfort. 1.25rem (20px) — small headings, large body text. 1.5rem (24px) — h4/h5 headings, large UI elements. 1.75rem (28px) — h3/medium headings. 2rem (32px) — h2/section headings. 2.5rem (40px) — h1/large headings. 3rem (48px) — display headings. 4rem (64px) — hero display text. Our reference table includes pre-calculated conversions for all values from 4px to 128px at multiple bases, covering all these common design values.`,
  },
  {
    category: 'Accessibility',
    question: 'How does using rem improve web accessibility?',
    answer: `REM units are a fundamental accessibility improvement because they respect user-set browser font preferences. WCAG Success Criterion 1.4.4 (Resize text) requires that text can be resized up to 200% without loss of content or functionality. Using rem ensures your typography and layout automatically accommodate user font size preferences without layout breaks. Users who benefit from larger text include: people with low vision or eye strain, older users whose eyesight has changed, users with dyslexia who find larger text easier to parse, users accessing your site on high-DPI screens where default sizes appear too small. When you test accessibility: go to Chrome Settings > Appearance > Font size, set it to "Very Large" (or about 24px), and reload your site. If text overflows containers, overlaps other elements, or breaks the layout, those elements likely use fixed px sizes. Replacing px with rem in those problem areas fixes the issue and brings your site closer to WCAG compliance. Screen reader users also benefit from proportional sizing because their screen reading software may have adjusted system font scaling.`,
  },
  {
    category: 'Comparison',
    question: 'When is it appropriate to use px instead of rem?',
    answer: `Pixels remain appropriate in specific scenarios. Borders: 1px borders should stay 1px — they define the physical crispest possible line. Using 0.0625rem (1px at 16px base) technically works but unnecessarily adds conversion complexity. Box shadows: shadows with specific blur and spread values look best in px. Decorative micro-spacing: 1–2px adjustments for visual fine-tuning. Position offsets: when element positioning must align with exact pixel grids (icon alignment, image positioning). Minimum sizes: min-width: 300px (a specific minimum, not a scalable size) is fine in px. Fixed-size icons: icon containers that should not scale with text (1:1 aspect ratio SVG icons in a fixed-size button). Canvas and SVG drawing: coordinate systems that are inherently pixel-based. A practical rule: if the value represents a scalable typographic or spatial element that should grow with user font preferences, use rem. If the value represents a precise physical/visual detail that should remain crisp at exactly that size regardless of typography scale, use px.`,
  },
  {
    category: 'Practical',
    question: 'How do I convert Figma px values to rem for my CSS?',
    answer: `Figma designs are specified in pixels, while your CSS implementation should use rem. The workflow: identify spacing, font sizes, and padding values from Figma. Use our bulk converter: paste all unique pixel values (one per line), set the base to match your project's root font size (16 for standard, 10 for 62.5% trick), and copy the rem results. Most common Figma values you will convert: 12, 14, 16, 18, 20, 24, 32, 48 (font sizes) and 4, 8, 12, 16, 24, 32, 48, 64 (spacing). Create a CSS custom properties or SCSS variables file with semantic names: --font-size-sm: 0.875rem; --font-size-base: 1rem; --spacing-sm: 0.5rem; --spacing-md: 1rem. Use these variables throughout your CSS rather than hardcoded values. If you use a design token approach (Style Dictionary, Theo), define tokens in the design tool with px values and apply px-to-rem transformation in the build pipeline. This produces CSS with rem values while keeping Figma specs in familiar pixels for designers.`,
  },
  {
    category: 'Practical',
    question: 'What is viewport font size scaling and how does it relate to rem?',
    answer: `Viewport-relative font scaling combines the accessibility benefits of rem with the viewport-responsiveness of vw (viewport width) units. The technique: set the root font size using CSS clamp() or a calc() that scales between a minimum and maximum based on viewport width. Example: html { font-size: clamp(16px, 1vw + 12px, 20px); }. This sets font size to minimum 16px (on small screens), scales smoothly with viewport width, and caps at 20px on large screens. All rem-defined values then scale automatically across viewport sizes. This eliminates the need for font-size media query breakpoints — the type scales fluidly instead of jumping. The clamp() approach with rem is now considered the most sophisticated responsive typography technique. Our px-to-rem calculator is useful alongside this: if your clamp() produces a range of 16–20px at the root, knowing that 24px = 1.5rem (at 16px base) and 30px = 1.5rem (at 20px base) helps you understand how specific elements scale across the viewport range.`,
  },
  {
    category: 'Browser Support',
    question: 'Is rem well-supported in all browsers?',
    answer: `Yes, rem is universally supported in all modern browsers with excellent support: Chrome (since version 4, 2010), Firefox (since version 3.6, 2010), Safari (since version 5, 2010), Edge (since version 12, 2015), Opera, and all mobile browsers. IE 9+ supported rem (IE 8 did not, but IE 8 support is no longer a concern for any modern web project). The browser support for rem is essentially 100% for any project targeting the current web ecosystem. You can safely use rem for all font sizes, spacing, and layout values without any polyfills or fallbacks. The only nuanced browser difference: rem in media queries should be em instead due to a historical behavior in some older browsers where rem in media queries did not account for root font-size overrides. This is not a current compatibility issue but a best-practice convention inherited from that period. Otherwise, rem works identically across all browsers and can be used freely for all CSS properties.`,
  },
  {
    category: 'Tools',
    question: 'What other CSS-related tools are available on this site?',
    answer: `We offer a comprehensive set of CSS development tools alongside the px to rem converter. Hex to RGB: convert CSS hex color codes (#ff5500) to RGB values and vice versa, with opacity support for rgba. Border Radius Generator: visually create CSS border-radius values with live preview — generate perfect circles, pill shapes, and custom curves. Box Shadow Generator: create complex CSS box shadows with multiple layers, inset shadows, and color settings through a visual interface. CSS Grid Generator: visually design CSS grid layouts and generate the corresponding grid-template-areas, grid-template-columns, and grid-template-rows code. CSS Flexbox Generator: build flexbox container configurations visually and export the CSS. Placeholder Image Generator: create placeholder images in any dimension for layout testing, outputting CSS or HTML img tags with correct dimensions. All tools are browser-based, free, and require no account — designed for daily developer workflow use.`,
  },
  {
    category: 'Advanced',
    question: 'How does Sass/SCSS simplify px to rem conversion in a codebase?',
    answer: `Sass/SCSS provides two powerful ways to handle px-to-rem conversion throughout a codebase. Method 1 — rem() function: @use 'sass:math'; @function rem($px) { @return math.div($px, 16px) * 1rem; } Usage: font-size: rem(24px); ? outputs font-size: 1.5rem. Method 2 — CSS custom property approach: define pixel values as custom properties in the source and convert in a mixin. The rem() function approach is most popular — it keeps px values in source code (readable and matching design specs) while outputting rem in compiled CSS. If your base is 10px (62.5% trick): @function rem($px) { @return math.div($px, 10px) * 1rem; }. Configure the base as a variable: $base: 16px; @function rem($px) { @return math.div($px, $base) * 1rem; }. Many existing Sass utility libraries include a rem() function already. Our px-to-rem calculator is useful for verifying rem() function output and for CSS projects that do not use a preprocessor.`,
  },
  {
    category: 'Technical',
    question: 'What is the difference between rem, em, px, vw, and vh CSS units?',
    answer: `CSS offers several length units suited to different purposes. px (pixels): absolute unit — 1 CSS pixel is one device-independent pixel (on high-DPI screens, 1 CSS px may map to 2 or more physical pixels). Pixel values do not scale with user font-size preferences, creating accessibility barriers for users who rely on larger browser defaults. rem (root em): relative to the root element's computed font size (html font-size, default 16px in all browsers). All rem values scale together when the root font size changes — essential for respecting user font-size preferences and for site-wide scaling. em: relative to the current element's font size. Cascades and compounds — a 1.2em element inside another 1.2em element renders at 1.44× the base. Useful for component-scoped sizing where you want child elements to scale with a component's font size. vw (viewport width): 1vw = 1% of the viewport width. Scales with the browser window — useful for fluid layouts and viewport-relative headings. vh (viewport height): 1vh = 1% of the viewport height. Used for full-screen sections and sticky layout heights. Practical rule: use rem for typography and spacing (accessibility and scalability), px for borders, shadows, and 1px outlines (should not scale), vw/vh for layout sections that fill the viewport. Never use px for font-size on body or html elements.`,
  },
  {
    category: 'Technical',
    question: 'How do I use CSS clamp() with rem for responsive fluid typography?',
    answer: `CSS clamp() with rem creates fluid typography that scales smoothly between viewport sizes without breakpoints. Syntax: font-size: clamp(min, preferred, max). A practical example: font-size: clamp(1rem, 0.5rem + 2.5vw, 2rem). This sets a minimum of 1rem (16px), grows fluidly using 0.5rem + 2.5vw, and caps at 2rem (32px). How the fluid part works: at 400px viewport width, 0.5rem + 2.5vw = 8px + 10px = 18px. At 800px: 8px + 20px = 28px. At 1200px: 8px + 30px = 38px, clamped to 32px max. The rem minimum and maximum respect user font-size preferences — if the user sets 20px base, the clamp min becomes 20px (1rem) and max becomes 40px (2rem). Formula for fluid type between two viewport sizes: the preferred value = calc(minSize + (maxSize - minSize) × ((100vw - minVP) / (maxVP - minVP))). Simplified: preferred ˜ Xrem + Yvw where X is the fixed offset and Y scales with viewport. Our px-to-rem converter helps translate Figma design spec px values to the rem units required inside clamp() expressions. Major browsers (Chrome, Firefox, Safari, Edge) fully support clamp() — use it freely in production.`,
  },
  {
    category: 'Use Cases',
    question: 'How do I convert all px values to rem when migrating a legacy CSS codebase?',
    answer: `Migrating a legacy CSS codebase from px to rem requires a systematic approach to avoid breaking existing layouts. Step 1 — establish your root font size. If you are not using the 62.5% trick, keep html { font-size: 16px } (or just leave it at default). If using 62.5%: html { font-size: 62.5%; } body { font-size: 1.6rem; } — then 1rem = 10px, making mental math trivial. Step 2 — identify px values to convert. Priority order: font-size (highest accessibility impact), margin and padding (spacing should scale), line-height (should scale with text). Do NOT convert: border widths (1px borders should stay 1px), box-shadow px values (pixel-precision shadows), border-radius (can stay px or convert to rem). Step 3 — use our bulk converter. Paste all your px values, get rem equivalents, replace in your CSS. Step 4 — do not convert viewport-based pixel values in media queries to rem — convert them to em (48em instead of 768px) for accessibility. Step 5 — test with browser zoom levels (100%, 150%, 200%) and with your browser font size set to a non-default value (e.g., 24px). All rem-based sizing should scale correctly. Automated tools: the postcss-pxtorem PostCSS plugin can automate the conversion at build time, with configurable exclude patterns.`,
  },
  {
    category: 'Use Cases',
    question: 'How does px to rem conversion work in Tailwind CSS and Bootstrap?',
    answer: `Both Tailwind CSS and Bootstrap use rem natively for all their spacing, typography, and component sizing — so understanding px-to-rem conversion directly informs how you configure and extend these frameworks. Tailwind CSS: the default spacing scale uses 0.25rem increments. spacing-1 = 0.25rem (4px), spacing-2 = 0.5rem (8px), spacing-4 = 1rem (16px), spacing-8 = 2rem (32px), spacing-16 = 4rem (64px). Font sizes: text-sm = 0.875rem (14px), text-base = 1rem (16px), text-lg = 1.125rem (18px), text-xl = 1.25rem (20px), text-2xl = 1.5rem (24px), text-4xl = 2.25rem (36px). To add custom values in tailwind.config.js: extend: { spacing: { '18': '4.5rem' } } — always express in rem. Bootstrap 5: uses rem for all component sizing. The base font size is 1rem (16px). Spacers use 0.25rem increments via the $spacer CSS custom property. The grid breakpoints use em (not rem): sm: 36em, md: 48em, lg: 62em, xl: 75em, xxl: 87.5em. Bootstrap's Sass variables accept rem values: $font-size-base: 1rem, $h1-font-size: 2.5rem. Our converter helps you translate design token px values to the rem equivalents needed in Tailwind's config or Bootstrap's Sass variable overrides.`,
  },
];

const writeUp = (
  <section className="prose prose-slate max-w-none">
    <h2>What Is the PX to REM Converter?</h2>
    <p>
      Our free px to rem converter instantly translates pixel values to REM units and back, with a configurable base font size to match your project's settings. Enter any pixel value and see the equivalent rem, or enter a rem value to see the pixel equivalent. The bulk converter handles lists of multiple values at once — perfect for converting all the font sizes or spacing values in a design spec. The reference table provides pre-calculated conversions for common sizes at three different base font sizes.
    </p>
    <p>
      REM (Root EM) is a CSS unit that represents multiples of the root element's font size — the font size set on the html element. By default, browsers set this to 16px. So 1rem = 16px, 1.5rem = 24px, 0.875rem = 14px. The critical advantage of rem over pixels: rem scales with the user's browser font size preference, making rem-based designs accessible and responsive to user needs.
    </p>

    <h2>Why Rem Units Matter for Accessibility</h2>
    <p>
      WCAG (Web Content Accessibility Guidelines) Success Criterion 1.4.4 requires that text can be resized up to 200% without loss of content or functionality. When font sizes are specified in rem, they automatically scale when users increase their browser's base font size in accessibility settings. When font sizes are specified in px, they are fixed — the user's accessibility preference is ignored.
    </p>
    <p>
      The users most affected by this are people with low vision, the elderly (whose eyesight often requires larger text), users with dyslexia, and those accessing sites on very high-resolution displays where default text appears too small. By using rem for all font sizes and text-related spacing, you create a website that genuinely works for a broader range of users without requiring additional effort on their part.
    </p>

    <h2>The Math Behind PX to REM Conversion</h2>
    <p>
      The formula is division: rem = px ÷ base_font_size. With a 16px base: 24px ÷ 16 = 1.5rem. For rem to px: px = rem × base_font_size. 1.5rem × 16 = 24px. These simple formulas make the converter trivial to implement mentally for common values once you memorize the base conversion (1rem = 16px at default base). The challenge is that design tools like Figma always work in pixels, while CSS best practices require rem — the converter bridges this workflow gap.
    </p>
    <p>
      The most common values to memorize: 8px = 0.5rem, 12px = 0.75rem, 14px = 0.875rem, 16px = 1rem, 18px = 1.125rem, 20px = 1.25rem, 24px = 1.5rem, 32px = 2rem. These cover most of a typical design's typography and spacing scale. Our reference table shows these and more, eliminating the need for mental calculation during CSS development.
    </p>

    <h2>Setting Up Your Base Font Size</h2>
    <p>
      The base font size determines the px-to-rem conversion ratio for your specific project. Most projects use the browser's default 16px base — achieved by either not setting a font size on html, or setting html &#123; font-size: 100%; &#125;. Both approaches inherit the user's browser preference, which is 16px by default but can be changed by the user.
    </p>
    <p>
      The popular 62.5% trick (html &#123; font-size: 62.5%; &#125;) sets the base to 10px, making conversions simpler: 16px = 1.6rem, 24px = 2.4rem. If your project uses this, set the base to 10 in our converter. The trade-off: you must set a body font size to compensate (body &#123; font-size: 1.6rem; &#125;) and third-party components may be affected by the non-standard root size.
    </p>

    <h2>REM vs EM vs PX: Choosing the Right Unit</h2>
    <p>
      Each CSS unit has appropriate uses. Pixels are absolute — use them for borders, box shadows, and fine visual details where exact pixel precision matters. EM units are relative to the parent element's font size — useful for component-level spacing that should scale with the component's text size, like button padding. REM units are relative to the root font size — consistent throughout the document regardless of nesting, ideal for typography and global spacing.
    </p>
    <p>
      The practical recommendation for modern CSS: use rem for all font sizes and most spacing properties (padding, margin, gap). Use em for properties that should scale with the component's own font size (padding inside a button). Use px for borders, box shadows, and fine-tuning adjustments. This combination produces accessible, scalable, and visually precise CSS.
    </p>

    <h2>Converting a CSS Codebase from PX to REM</h2>
    <p>
      Migrating an existing codebase from px to rem can be done incrementally. Start with font sizes — they have the most accessibility impact. Identify all font-size declarations in your CSS and convert them to rem using our bulk converter. Next, convert padding and margin values for typographic elements (headings, paragraphs, content areas). Leave borders, box shadows, and decorative details in px.
    </p>
    <p>
      For larger codebases, automate the migration with PostCSS and the postcss-pxtorem plugin. Configure it to convert only specified CSS properties (font-size, padding, margin) and exclude others (border, box-shadow). This produces a converted stylesheet automatically. Alternatively, add a Sass rem() function and progressively replace px values with rem() calls as you edit each component.
    </p>

    <h2>REM in Design Systems and CSS Frameworks</h2>
    <p>
      All major CSS frameworks use rem as their standard unit. Tailwind CSS's default spacing scale (p-1, m-2, gap-4) uses rem values at a 16px base. Bootstrap 5 uses rem throughout its component styles. Material Design's typography scale specifies values in rem. Understanding px-to-rem conversion is essential for working with these frameworks — when you see that Tailwind's text-xl is 1.25rem, knowing that equals 20px helps you match it to design specs.
    </p>
    <p>
      Design tokens (defined in tools like Style Dictionary) often bridge the gap: designers define values in px, token transforms convert them to rem for CSS output, and rem values are what developers implement. Our converter supports this workflow by providing the accurate rem equivalent of any design-specified pixel value.
    </p>

    <h2>Responsive Typography with REM</h2>
    <p>
      REM enables powerful responsive typography patterns. The simplest: adjust the root font size at breakpoints. html &#123; font-size: 14px; &#125; at mobile, 16px at tablet, 18px at desktop — all rem-defined elements scale proportionally. One root change scales everything. More sophisticated: use CSS clamp() for fluid scaling without breakpoints: html &#123; font-size: clamp(14px, 1.5vw + 10px, 18px); &#125;. This smoothly scales the root (and therefore all rem values) between viewport sizes.
    </p>
    <p>
      CSS viewport units combined with rem unlock fluid type: font-size: clamp(1rem, 2.5vw, 1.5rem) sets a minimum of 1rem, scales with the viewport, and caps at 1.5rem. This creates typography that is readable on all screen sizes without media query breakpoints. Our converter helps you understand what minimum and maximum px values your clamp() ranges represent.
    </p>

    <h2>Using the Bulk Converter for Design Implementation</h2>
    <p>
      When implementing a design from Figma or Sketch, you typically encounter a list of pixel values for font sizes and spacing. Instead of converting each individually, use the bulk converter: list all pixel values on separate lines, set the base to match your project, and copy the complete table of rem equivalents. This takes seconds rather than minutes of manual calculation.
    </p>
    <p>
      The reference table provided by the tool covers the most commonly used values in design (4px through 128px) at three typical base font sizes (14px, 16px, 18px), providing a permanent reference during development. Bookmark this page for quick access during CSS implementation.
    </p>

    <h2>Why Rem Is the Gold Standard for Accessible Web Typography</h2>
    <p>
      Accessibility-focused typography relies on rem units because they inherit and scale from the user's browser font-size preference — a fundamental accessibility mechanism. Approximately 3–4% of web users change their default browser font size from the standard 16px, and this group skews heavily toward users with low vision, older adults, and people with dyslexia or reading difficulties. When a user sets their browser font preference to 20px and your page uses rem units, your typography scales proportionally: a 1.5rem heading becomes 30px instead of 24px, preserving the intended typographic hierarchy at a larger absolute size. When your page uses px, that heading stays at 24px regardless of the user's preference — smaller relative to their other applications and harder to read.
    </p>
    <p>
      WCAG 2.1 Success Criterion 1.4.4 (Resize Text, Level AA) requires that text can be resized up to 200% without loss of content or functionality. Browser zoom achieves this for both px and rem text. But Success Criterion 1.4.12 (Text Spacing, Level AA) requires that your layout does not break when line height, letter spacing, and word spacing are changed. Rem-based layouts are more resilient to these spacing adjustments because they scale with the base font size rather than overriding it with fixed pixel values.
    </p>
    <p>
      The practical impact of using px for font sizes: test your site by going to browser Settings ? Appearance ? Font Size and setting it to "Very Large" or "Largest." If your text does not grow, you are using px for font sizes and failing accessibility users. Replace those px values with rem — our converter makes this a straightforward calculation. This single change can meaningfully improve usability for millions of users with visual impairments, cognitive disabilities, or simply aging eyesight.
    </p>

    <h2>Rem Units in CSS Custom Properties and Design Tokens</h2>
    <p>
      Modern design systems use CSS custom properties (CSS variables) as design tokens — centralized, reusable values for spacing, typography, and color. Expressing these tokens in rem rather than px makes the entire design system accessible-by-default and provides a single point of control for global scaling.
    </p>
    <p>
      A rem-based design token system might look like: <code>:root &#123; --space-xs: 0.25rem; --space-sm: 0.5rem; --space-md: 1rem; --space-lg: 1.5rem; --space-xl: 2rem; --space-2xl: 3rem; --font-xs: 0.75rem; --font-sm: 0.875rem; --font-base: 1rem; --font-lg: 1.125rem; --font-xl: 1.25rem; --font-2xl: 1.5rem; --font-3xl: 2rem; --font-4xl: 3rem; &#125;</code>. Every component uses these tokens: <code>padding: var(--space-md) var(--space-lg); font-size: var(--font-base);</code>. The benefit: changing the root font-size in a media query or for a specific context scales every component simultaneously.
    </p>
    <p>
      Context-specific scaling with rem tokens: for a compact dashboard view, you might set <code>html &#123; font-size: 14px; &#125;</code> in a specific layout class. Every rem value throughout the UI shrinks proportionally, creating a compact layout without editing each component individually. For a presentation or large-display mode, set <code>html &#123; font-size: 20px; &#125;</code> and everything grows uniformly. This is impossible to achieve with px-based tokens — each token would need to be individually overridden.
    </p>

    <h2>PX to REM in Tailwind CSS Projects</h2>
    <p>
      Tailwind CSS uses rem for all its spacing and typography utilities, making px-to-rem conversion a daily task when working with design specs. Understanding Tailwind's spacing scale helps you map Figma px values to the correct utility class immediately.
    </p>
    <p>
      Tailwind's default spacing scale uses 0.25rem (4px) increments: <code>space-1 = 0.25rem (4px)</code>, <code>space-2 = 0.5rem (8px)</code>, <code>space-3 = 0.75rem (12px)</code>, <code>space-4 = 1rem (16px)</code>, <code>space-5 = 1.25rem (20px)</code>, <code>space-6 = 1.5rem (24px)</code>, <code>space-8 = 2rem (32px)</code>, <code>space-10 = 2.5rem (40px)</code>, <code>space-12 = 3rem (48px)</code>, <code>space-16 = 4rem (64px)</code>, <code>space-20 = 5rem (80px)</code>, <code>space-24 = 6rem (96px)</code>. When a Figma spec shows 24px padding, convert to rem (1.5rem) and then look up that it maps to <code>p-6</code> in Tailwind.
    </p>
    <p>
      Tailwind font size scale: <code>text-xs = 0.75rem (12px)</code>, <code>text-sm = 0.875rem (14px)</code>, <code>text-base = 1rem (16px)</code>, <code>text-lg = 1.125rem (18px)</code>, <code>text-xl = 1.25rem (20px)</code>, <code>text-2xl = 1.5rem (24px)</code>, <code>text-3xl = 1.875rem (30px)</code>, <code>text-4xl = 2.25rem (36px)</code>, <code>text-5xl = 3rem (48px)</code>, <code>text-6xl = 3.75rem (60px)</code>. When a design uses a font size not in the default scale, add it to your tailwind.config.js: <code>theme: &#123; extend: &#123; fontSize: &#123; '10xl': '10rem' &#125; &#125; &#125;</code>. Always specify custom font sizes in rem, never in px.
    </p>
    <p>
      Custom spacing values outside Tailwind's default scale: use our bulk converter to find the rem equivalent of any px value, then add it to your config: <code>theme: &#123; extend: &#123; spacing: &#123; '18': '4.5rem', '22': '5.5rem' &#125; &#125; &#125;</code>. The naming convention is the rem value times 4 (so 4.5rem becomes spacing-18, 5.5rem becomes spacing-22) following Tailwind's built-in pattern.
    </p>

    <h2>Converting Existing CSS from PX to REM: A Migration Guide</h2>
    <p>
      Migrating a legacy CSS codebase from pixel-based sizing to rem requires a methodical approach to avoid breaking existing layouts while improving accessibility. Here is a complete migration strategy:
    </p>
    <p>
      Phase 1 — Audit. Search your CSS for all px values: <code>grep -r "font-size:.*px" src/</code> and <code>grep -r "margin.*px\|padding.*px" src/</code>. Categorize them: typography px values (highest priority to convert), spacing px values (high priority), border widths (keep as px), box-shadow px offsets (can stay px), border-radius (optional to convert). Create a spreadsheet of all unique px values used for typography and spacing.
    </p>
    <p>
      Phase 2 — Set root font size. If using the 62.5% trick: add <code>html &#123; font-size: 62.5%; &#125;</code> and <code>body &#123; font-size: 1.6rem; &#125;</code> — this makes 1rem = 10px, so px ÷ 10 = rem. If keeping the standard 16px base: leave the html font-size at browser default (do not set it to 16px explicitly — that overrides user preferences). With 16px base, divide all px values by 16 to get rem.
    </p>
    <p>
      Phase 3 — Convert using our bulk converter. Paste all your unique px values, get rem equivalents, replace throughout your CSS. Use find-and-replace carefully: replacing "24px" with "1.5rem" everywhere could affect borders and shadows. Work column by column: replace all font-size px values first, then all margin/padding values.
    </p>
    <p>
      Phase 4 — Automated conversion with PostCSS. The postcss-pxtorem plugin converts px to rem at build time: <code>// postcss.config.js &#123; plugins: &#123; 'postcss-pxtorem': &#123; rootValue: 16, propList: ['font-size', 'margin', 'padding', 'line-height'] &#125; &#125; &#125;</code>. The propList controls which CSS properties are converted — exclude borders, outlines, and box-shadow pixel values.
    </p>
    <p>
      Phase 5 — Testing. Test at 100%, 125%, 150%, and 200% browser zoom. Test with browser font size set to 20px and 24px. Verify all text, spacing, and layout elements scale correctly. Check that 1px borders, box shadows, and outlines are not scaled (they should remain pixel-precise at all zoom levels).
    </p>

    <h2>Media Queries: Should You Use PX, REM, or EM?</h2>
    <p>
      Media query breakpoints have a nuanced relationship with rem and em units. The standard advice is to use em (not rem) for media query breakpoints, and this recommendation has a specific technical reason behind it.
    </p>
    <p>
      The problem with rem in media queries: in some browsers (Safari historically, some older browsers), the rem unit in media queries is calculated based on the initial font size of the document (16px) rather than the current root font size. If you use the 62.5% trick (<code>html &#123; font-size: 62.5%; &#125;</code>), rem-based media queries may not scale as expected because 1rem would still equal 16px in the media query context, not 10px. Em units in media queries consistently use the browser's default font size (16px) — they are not affected by CSS overrides to the html font-size.
    </p>
    <p>
      Practical breakpoints in em: the most common breakpoints converted to em (assuming 16px base): 320px = 20em (small mobile), 480px = 30em (large mobile), 640px = 40em (landscape mobile), 768px = 48em (tablet), 1024px = 64em (small desktop), 1280px = 80em (desktop), 1440px = 90em (large desktop), 1920px = 120em (wide screen). Our converter calculates these for any px value — just enter your breakpoint px and read the em equivalent (same math as rem when the base is 16px).
    </p>
    <p>
      Em-based media queries also respond to user font-size preferences. If a user sets their browser font to 24px (1.5× the default), a 48em breakpoint triggers at 24px × 48 = 1152px instead of 768px. This means the layout switches to a wider-screen layout later than it would for the average user — which often works in favor of accessibility since larger text needs more horizontal space to avoid wrapping. This behavior is generally considered a feature, not a bug, for accessible design.
    </p>

    <h2>Rem in JavaScript: Reading and Setting Values</h2>
    <p>
      JavaScript often needs to work with rem values when dynamically calculating layout dimensions, responding to user interactions, or implementing custom animation. Reading and setting rem values in JavaScript requires converting through the root font size.
    </p>
    <p>
      Reading the root font size: <code>const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);</code> — this returns the computed pixel value of the root font size (e.g., 16 or 10 if using 62.5%). Converting px to rem in JavaScript: <code>const remValue = pxValue / rootFontSize;</code>. Converting rem to px: <code>const pxValue = remValue * rootFontSize;</code>.
    </p>
    <p>
      Reading a rem CSS custom property: <code>const remSpacingMd = getComputedStyle(document.documentElement).getPropertyValue('--space-md').trim();</code> returns "1rem". To use this as a pixel value in calculations: <code>const pxValue = parseFloat(remSpacingMd) * rootFontSize;</code>. Setting a CSS custom property from JavaScript: <code>document.documentElement.style.setProperty('--space-md', '1.25rem');</code> — note you set rem values as strings.
    </p>
    <p>
      Animation with rem: when animating layout properties that use rem, calculate the pixel target first: <code>const targetPx = 2 * rootFontSize; // 2rem in pixels</code>, then animate to that pixel value. For Web Animations API: <code>element.animate([&#123; fontSize: '1rem' &#125;, &#123; fontSize: '2rem' &#125;], &#123; duration: 300 &#125;);</code> — the API accepts rem strings directly and handles the conversion internally.
    </p>

    <h2>PX to REM Reference Table: Common Design Values</h2>
    <p>
      The following reference table covers the pixel values most commonly encountered in web design specifications, along with their rem equivalents at the three most common base font sizes. Use this during design implementation to quickly find the correct rem value without calculation.
    </p>
    <p>
      At 16px base (browser default — most common): 8px = 0.5rem, 10px = 0.625rem, 12px = 0.75rem, 14px = 0.875rem, 16px = 1rem, 18px = 1.125rem, 20px = 1.25rem, 24px = 1.5rem, 28px = 1.75rem, 32px = 2rem, 36px = 2.25rem, 40px = 2.5rem, 48px = 3rem, 56px = 3.5rem, 64px = 4rem, 72px = 4.5rem, 80px = 5rem, 96px = 6rem, 128px = 8rem.
    </p>
    <p>
      At 10px base (62.5% trick — convenient for mental math): 8px = 0.8rem, 10px = 1rem, 12px = 1.2rem, 14px = 1.4rem, 16px = 1.6rem, 18px = 1.8rem, 20px = 2rem, 24px = 2.4rem, 32px = 3.2rem, 48px = 4.8rem, 64px = 6.4rem.
    </p>
    <p>
      At 18px base (large-text accessibility preset): 9px = 0.5rem, 18px = 1rem, 27px = 1.5rem, 36px = 2rem, 54px = 3rem. At 14px base (common for data-dense applications): 7px = 0.5rem, 14px = 1rem, 21px = 1.5rem, 28px = 2rem, 42px = 3rem. Our bulk converter generates a complete custom reference table for any combination of px values and base font size you specify.
    </p>

    <h2>Font Size Best Practices: Minimum Sizes for Readability and Accessibility</h2>
    <p>
      Typography standards and accessibility guidelines provide clear guidance on minimum font sizes. Understanding these in rem terms ensures your design decisions are both aesthetically sound and legally compliant with accessibility requirements.
    </p>
    <p>
      Body text minimum: 16px (1rem) is the industry-recommended minimum for body text on desktop. Mobile body text should also be at least 16px to prevent iOS Safari from automatically zooming in on focused form inputs (iOS zooms when the input font size is less than 16px). For older audiences or accessibility-focused content, 18-20px (1.125–1.25rem) body text significantly improves readability. WCAG does not specify a minimum font size, but 16px is the practical floor below which readability measurably degrades.
    </p>
    <p>
      Heading hierarchy in rem: a typical typographic scale might use — h1: 2.5rem (40px), h2: 2rem (32px), h3: 1.5rem (24px), h4: 1.25rem (20px), h5: 1.125rem (18px), h6: 1rem (16px). This creates clear visual hierarchy while maintaining proportional relationships between heading levels. Modular scale systems (using a multiplier like 1.25 or 1.414) automate the calculation: if your base is 1rem and your scale ratio is 1.25, each heading level is 1.25× the previous — producing values of 1rem, 1.25rem, 1.563rem, 1.953rem, 2.441rem, 3.052rem.
    </p>
    <p>
      Caption and helper text: secondary text like captions, form helper text, and footer notes can go as low as 0.75rem (12px) for supplemental information that does not need to be easily readable at a glance. Never use text below 0.625rem (10px) — it is not legible even at normal viewing distance. For legal disclaimers that must technically be present but are supplemental, 0.75rem is the practical minimum.
    </p>

    <h2>REM Units in CSS Grid and Flexbox Layouts</h2>
    <p>
      CSS Grid and Flexbox both work naturally with rem units for gap values, fixed-size dimensions, and minimum/maximum track sizing. Using rem for layout spacing ensures your layouts scale correctly with user font-size preferences, not just with viewport width.
    </p>
    <p>
      CSS Grid with rem gaps: <code>display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;</code> — the 1.5rem gap (24px at default) scales if the user has a larger font size preference, maintaining the proportional relationship between content and spacing. For fixed-column grids with explicit column widths: <code>grid-template-columns: 16rem 1fr; gap: 2rem;</code> creates a sidebar that is 256px wide (at 16px base) with a fluid content column.
    </p>
    <p>
      Flexbox with rem: <code>display: flex; gap: 1rem; padding: 1.5rem;</code> — all spacing uses rem. For cards in a flex container: <code>flex: 0 0 20rem; max-width: 20rem;</code> creates cards with a fixed base width of 320px that scales with user font preferences. This is particularly useful for accessible card layouts — a user who prefers 20px fonts gets cards that are 400px wide (20rem × 20px) rather than the default 320px, providing more comfortable reading width for their larger text.
    </p>
    <p>
      Min-width and max-width with rem: <code>max-width: 65rem;</code> (1040px at 16px base) is a common optimal line length for body text — approximately 65 characters per line, which readability research identifies as ideal. Using rem for max-width means the container scales proportionally if the user has a larger font, maintaining the optimal characters-per-line ratio. This is a significant typographic advantage over <code>max-width: 1040px</code> which would allow lines to become too long (too many characters per line) when text is rendered at a larger size.
    </p>

    <h2>Browser Support and Cross-Browser Compatibility for REM Units</h2>
    <p>
      Rem units have excellent browser support as of 2024. All modern browsers — Chrome, Firefox, Safari, Edge, Samsung Internet, Opera — fully support rem for all CSS properties. Internet Explorer 9+ supported rem for most properties (with a bug: IE 9 and 10 did not support rem in font shorthand or on pseudo-elements). Internet Explorer 11 supported rem fully. Since Microsoft ended IE support in June 2022 and IE's global usage share is below 0.5%, IE compatibility is no longer a practical concern for most projects.
    </p>
    <p>
      Known edge cases in modern browsers: as mentioned earlier, rem in media queries can behave unexpectedly in some browsers when the root font size is set via CSS (the 62.5% trick). Using em for media queries avoids this. Some older Android browsers (WebView before Android 4.4) had rem support issues — also no longer a practical concern. CSS custom properties (variables) using rem values are fully supported in all modern browsers and have been since 2017.
    </p>
    <p>
      Testing rem behavior across browsers: open your page in Chrome, Firefox, and Safari, then go to each browser's settings and change the default font size from Medium/16px to Large/20px or Very Large/24px. Verify that all rem-based text and spacing scales up proportionally. Verify that your layout does not break at these larger sizes (check for text overflow, button misalignment, and container overflow). This is the most important cross-browser test for rem-based designs, and it simultaneously tests accessibility compliance.
    </p>

    <h2>PX to REM Converter: Frequently Encountered Design Scenarios</h2>
    <p>
      Certain px-to-rem conversion scenarios come up repeatedly in front-end development. Here are the most common ones and exactly how to handle them.
    </p>
    <p>
      Scenario 1 — Figma design handoff: your designer provides a spec with font-size: 18px and padding: 24px 32px. Convert: 18 ÷ 16 = 1.125rem, 24 ÷ 16 = 1.5rem, 32 ÷ 16 = 2rem. CSS result: <code>font-size: 1.125rem; padding: 1.5rem 2rem;</code>.
    </p>
    <p>
      Scenario 2 — Third-party component override: a UI library sets <code>font-size: 14px</code> on a component and you need to override it to match your rem-based system. Convert your target size to rem and override: <code>font-size: 0.875rem !important;</code>. Never increase specificity just to override a px value with another px value — use rem consistently.
    </p>
    <p>
      Scenario 3 — Legacy codebase with 62.5% base: you join a project using the 62.5% trick (<code>html &#123; font-size: 62.5%; &#125;</code>). A new designer provides specs in px. Convert by dividing by 10: 24px ? 2.4rem, 18px ? 1.8rem, 14px ? 1.4rem. Document this base convention in your project's CONTRIBUTING.md to prevent future confusion.
    </p>
    <p>
      Scenario 4 — Responsive icon sizing: icons that should scale with text use em (relative to parent font size) rather than rem. An icon inside a button with <code>font-size: 1.25rem</code> uses <code>width: 1em; height: 1em;</code> to match the button text size automatically. Use rem only for icons that should have an absolute size regardless of surrounding text.
    </p>
    <p>
      Scenario 5 — Print stylesheets: for print CSS, rem units behave relative to the browser's default font size setting for printing (typically 12pt or 16px). This is usually the desired behavior for accessible print output. Our converter works for print CSS rem values using the same 16px base — 12px print body text = 0.75rem, and it will scale if the user changes their print font size setting.
    </p>

    <h2>The 62.5% Root Font Size Trick: Pros, Cons, and Modern Alternatives</h2>
    <p>
      The 62.5% trick — setting <code>html &#123; font-size: 62.5%; &#125;</code> so that 1rem = 10px — has been widely used in CSS for the past decade to make mental math easier. At 10px per rem, converting 24px to rem is trivially 2.4rem rather than the less intuitive 1.5rem at 16px base.
    </p>
    <p>
      The problem with the 62.5% trick: it sets the root font-size to 10px, which is below the browser's default of 16px. If a user has set their browser font size to 20px (a 1.25× preference), the 62.5% trick produces 20px × 62.5% = 12.5px as the actual root font size — still larger than 10px, so the user's preference is partially honored. But this is less proportional than leaving the root font-size at browser default (100%), where the user's 20px preference directly produces rem values scaled at 20px. The 62.5% trick reduces but does not eliminate the user preference scaling — it just makes it less predictable.
    </p>
    <p>
      Additionally, the 62.5% trick requires a compensating body font-size: <code>body &#123; font-size: 1.6rem; &#125;</code> to restore text to 16px. Forgetting this line results in tiny 10px body text. Every new developer joining the project must understand this convention or face confusing font sizes.
    </p>
    <p>
      Modern alternative — CSS calc() for mental-math-friendly rem: instead of changing the root font size, use a CSS custom property for your base and calculate rem values with calc(): <code>:root &#123; --base: 16; &#125; font-size: calc(24 / var(--base) * 1rem)</code>. Or simply use our px-to-rem converter, which makes the calculation instant — eliminating the mental math problem that the 62.5% trick was solving. The converter approach preserves the full browser font-size scaling behavior without the 62.5% trick's complications.
    </p>
    <p>
      When the 62.5% trick is still acceptable: for existing legacy codebases that already use it, migration cost outweighs the benefit. For personal projects where the only developer understands the convention. For projects that will never need to support browser font-size customization (embedded kiosks, specific enterprise tools). For all new projects starting from scratch, use 100% browser default base and our converter for instant rem calculation — it achieves the same developer convenience without the accessibility trade-offs.
    </p>

    <h2>Integrating PX to REM Conversion into Your Development Workflow</h2>
    <p>
      The most efficient workflow for px-to-rem conversion depends on your tooling. For developers using Figma with a developer handoff plugin: many Figma plugins (Figma to Code, Anima) can export CSS with rem units rather than px, bypassing manual conversion entirely. Configure the plugin's base font size to match your project and copy rem values directly from the export.
    </p>
    <p>
      For developers working from design specs in PDF or image form: keep our px-to-rem converter open in a browser tab. As you read pixel values from the spec, type them in and copy the rem equivalent. The bulk input mode is ideal when you need to convert an entire spacing or font scale at once — paste all values, get all rem equivalents in one step.
    </p>
    <p>
      For teams with a Figma design system: establish a shared spacing and typography scale in rem from the start. Document the base font size (typically 16px or 10px with the 62.5% trick) and publish the rem equivalents in a team wiki. This eliminates individual conversion and ensures all developers use identical rem values for identical design tokens.
    </p>
    <p>
      For VS Code users: extensions like CSS Rem (by rsbondi) add inline rem conversion — hover over a rem value and see the px equivalent, or trigger a command to convert selected px values to rem. The Stylelint plugin with stylelint-use-logical and related rules can enforce rem usage and flag forbidden px values in font-size properties.
    </p>
    <p>
      For linting and CI enforcement: add a Stylelint rule that disallows px units for font-size and related properties: <code>&#123; "rules": &#123; "unit-disallowed-list": [["px"], &#123; "severity": "warning", "message": "Use rem instead of px for font sizes" &#125;] &#125; &#125;</code>. Run Stylelint in CI to catch px-based font sizes before they reach production. This creates an automated safety net that enforces the accessibility standard across your entire team.
    </p>
  </section>
);

export default async function PxToRemPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolData.title,
    description: toolData.shortDescription,
    url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    permissions: 'browser',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={webPageSchema({ name: toolData.title, description: toolData.shortDescription, url })} />
      <ToolPageShell tool={toolData} ui={<PxToRemTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}

