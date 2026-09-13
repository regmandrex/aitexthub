import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Hex to RGB Color Converter: The Complete Guide to Color Codes, Color Models, and Web Color Systems</h2>
      <p>
        Color is fundamental to every visual medium — websites, mobile apps, digital art, print design, video production, and data visualization all depend on precise, reproducible color specification. In the digital world, colors are defined by mathematical models that describe how to produce a specific color on display hardware. The two most common color representations you'll encounter in web and UI development are hexadecimal color codes (hex) and RGB (Red, Green, Blue) values. A hex to RGB converter translates between these two representations instantly, helping designers and developers work fluidly across tools, languages, and design systems that use different color notations.
      </p>
      <p>
        Understanding how hex and RGB relate to each other — not just knowing the conversion formula, but understanding <em>why</em> these systems exist, how display hardware uses them, and how they connect to broader color science — makes you a significantly more effective designer and developer. This guide covers everything from the mathematics of color bit-depth to practical applications in CSS, design tools, and accessibility.
      </p>

      <h2>The RGB Color Model: How Screens Make Color</h2>
      <p>
        The RGB color model is an additive color model in which red, green, and blue light are added together to produce a wide range of colors. The model is derived directly from how the human eye perceives color: the human retina contains three types of cone cells, each most sensitive to wavelengths corresponding roughly to red (~700nm), green (~546nm), and blue (~435nm) light. By mixing light of these three primary colors in varying intensities, display hardware can stimulate the three cone types to produce the perception of virtually any visible color.
      </p>
      <p>
        This is called an additive model because you add light. When all three channels are at maximum intensity, the result is white light. When all three are at zero, the result is black (no light emitted). This contrasts with the subtractive model used in printing (CMYK), where you subtract light by adding ink pigments.
      </p>

      <h3>RGB Channel Values and Bit Depth</h3>
      <p>
        In the most common 8-bit-per-channel RGB implementation, each color channel (red, green, blue) is represented by an integer from 0 to 255. This range comes from the fact that each channel is encoded in 8 binary bits: 2⁸ = 256 distinct values (0 through 255).
      </p>
      <p>
        With three channels each having 256 possible values, the total color space contains 256 × 256 × 256 = 16,777,216 distinct colors — often called "true color" or "24-bit color" (8 bits × 3 channels = 24 bits). This is sufficient to cover the visible gamut of most consumer displays with imperceptible color banding for human vision.
      </p>
      <p>
        Higher bit depths are used in professional photography and HDR (High Dynamic Range) content:
      </p>
      <ul>
        <li><strong>10-bit per channel</strong>: 1,024 values per channel, 1,073,741,824 total colors (1 billion)</li>
        <li><strong>12-bit per channel</strong>: 4,096 values per channel, 68,719,476,736 total colors</li>
        <li><strong>16-bit per channel</strong>: 65,536 values per channel (used in RAW photography and HDR video)</li>
        <li><strong>32-bit per channel floating point</strong>: Used in CGI rendering and compositing for values outside the 0–1 range (HDR)</li>
      </ul>
      <p>
        For web development and standard UI design, 8-bit per channel (RGB 0–255) is universal. Hex color codes encode this same 8-bit-per-channel space.
      </p>

      <h3>RGB Notation Formats</h3>
      <p>
        RGB values in CSS can be written in several formats:
      </p>
      <ul>
        <li><code>rgb(255, 0, 0)</code> — classic comma-separated integer notation</li>
        <li><code>rgb(255 0 0)</code> — modern space-separated notation (CSS Color Level 4)</li>
        <li><code>rgb(100%, 0%, 0%)</code> — percentage-based values</li>
        <li><code>rgba(255, 0, 0, 0.5)</code> — with alpha transparency (0 = transparent, 1 = opaque)</li>
        <li><code>rgb(255 0 0 / 50%)</code> — modern notation with slash-separated alpha</li>
      </ul>

      <h2>Hexadecimal Color Codes: How Hex Represents RGB</h2>
      <p>
        A hexadecimal (hex) color code encodes the same three 8-bit RGB channels in a compact six-character string preceded by a hash symbol (#). Hexadecimal (base-16) numbering uses digits 0–9 and letters A–F to represent values 0–15, allowing a two-character hex number to represent values from 00 (decimal 0) to FF (decimal 255).
      </p>
      <p>
        The six-character hex code is structured as: <strong>#RRGGBB</strong> where:
      </p>
      <ul>
        <li><strong>RR</strong> — two hex digits for the red channel (00–FF)</li>
        <li><strong>GG</strong> — two hex digits for the green channel (00–FF)</li>
        <li><strong>BB</strong> — two hex digits for the blue channel (00–FF)</li>
      </ul>
      <p>
        Example: <code>#FF5733</code>
      </p>
      <ul>
        <li>FF = 255 (red at maximum)</li>
        <li>57 = 87 (green at 87/255 ≈ 34%)</li>
        <li>33 = 51 (blue at 51/255 = 20%)</li>
        <li>Result: rgb(255, 87, 51) — a warm orange-red</li>
      </ul>

      <h3>The Conversion Formula: Hex to RGB</h3>
      <p>
        Converting each two-digit hex pair to decimal is straightforward positional arithmetic:
      </p>
      <p>
        <strong>Decimal value = (first hex digit × 16) + second hex digit</strong>
      </p>
      <p>
        For each hex digit, the mapping is: 0→0, 1→1, ..., 9→9, A→10, B→11, C→12, D→13, E→14, F→15.
      </p>
      <p>
        Example — convert #3B82F6:
      </p>
      <ul>
        <li>R: 3B → (3 × 16) + 11 = 48 + 11 = 59</li>
        <li>G: 82 → (8 × 16) + 2 = 128 + 2 = 130</li>
        <li>B: F6 → (15 × 16) + 6 = 240 + 6 = 246</li>
        <li>Result: rgb(59, 130, 246) — Tailwind CSS blue-500</li>
      </ul>

      <h3>The Conversion Formula: RGB to Hex</h3>
      <p>
        Converting each decimal RGB value to two hex digits is the reverse:
      </p>
      <p>
        <strong>Hex pair = Math.floor(value / 16) as hex + (value % 16) as hex</strong>
      </p>
      <p>
        Example — convert rgb(34, 197, 94) (Tailwind green-500):
      </p>
      <ul>
        <li>R: 34 → 34 ÷ 16 = 2 remainder 2 → "22"</li>
        <li>G: 197 → 197 ÷ 16 = 12 remainder 5 → "C5"</li>
        <li>B: 94 → 94 ÷ 16 = 5 remainder 14 → "5E"</li>
        <li>Result: #22C55E</li>
      </ul>

      <h3>Shorthand Hex (#RGB)</h3>
      <p>
        When both digits in each pair are identical — #RRGGBB where RR = "XX", GG = "YY", BB = "ZZ" — the hex code can be shortened to three characters (#XYZ). The browser expands each single digit by doubling it: #F0A expands to #FF00AA. Examples:
      </p>
      <ul>
        <li>#FFF → #FFFFFF (white)</li>
        <li>#000 → #000000 (black)</li>
        <li>#F00 → #FF0000 (pure red)</li>
        <li>#0F0 → #00FF00 (pure green)</li>
        <li>#00F → #0000FF (pure blue)</li>
        <li>#39F → #3399FF (a medium blue)</li>
      </ul>
      <p>
        Not all hex colors have valid shorthand forms — only those where both digits of each pair match. #FF5733 (our orange-red from above) cannot be shortened because 5 ≠ 7 in the blue pair.
      </p>

      <h3>8-Character Hex with Alpha (#RRGGBBAA)</h3>
      <p>
        The 8-character hex format adds a two-digit alpha channel after the blue channel. Alpha ranges from 00 (fully transparent) to FF (fully opaque). Examples:
      </p>
      <ul>
        <li>#FF000080 — red at 50% opacity (80 hex = 128 decimal = 50.2%)</li>
        <li>#00000000 — fully transparent black</li>
        <li>#FFFFFFFF — fully opaque white</li>
        <li>#0000FFCC — blue at ~80% opacity (CC hex = 204 decimal = 80%)</li>
      </ul>
      <p>
        CSS supports 8-character hex: <code>color: #FF000080;</code> is equivalent to <code>color: rgba(255, 0, 0, 0.502);</code>. Browser support is excellent for modern browsers (all major browsers since 2016–2017).
      </p>

      <h2>Color Systems Beyond RGB and Hex</h2>
      <p>
        While hex and RGB are the most common formats in web development, understanding related color systems helps you choose the right format for each context.
      </p>

      <h3>HSL (Hue, Saturation, Lightness)</h3>
      <p>
        HSL is a cylindrical representation of the RGB color space that is more intuitive for humans to reason about. Instead of specifying red, green, and blue amounts, you specify:
      </p>
      <ul>
        <li><strong>Hue (H)</strong>: Position on the color wheel, 0°–360° (0° = red, 120° = green, 240° = blue)</li>
        <li><strong>Saturation (S)</strong>: Color intensity, 0% (gray) to 100% (fully saturated color)</li>
        <li><strong>Lightness (L)</strong>: Brightness, 0% (black) to 100% (white), with 50% = pure color</li>
      </ul>
      <p>
        HSL makes it much easier to create color variations. To make a color lighter, increase L. To desaturate it, decrease S. To rotate to a complementary color, add 180° to H. These operations are arithmetically simple in HSL but complex in RGB.
      </p>
      <p>
        CSS syntax: <code>hsl(220, 90%, 60%)</code> or <code>hsl(220deg 90% 60%)</code>. With alpha: <code>hsl(220 90% 60% / 80%)</code>.
      </p>

      <h3>HSB/HSV (Hue, Saturation, Brightness/Value)</h3>
      <p>
        HSB (also called HSV) is similar to HSL but uses "Value" (brightness) instead of "Lightness". The key difference: in HSL, full saturation at 50% lightness gives the purest color; in HSV, full saturation at 100% value gives the purest color. HSV/HSB is used by Photoshop's color picker and many professional design tools. Pure colors have S=100%, V=100% in HSV but S=100%, L=50% in HSL.
      </p>

      <h3>OKLCH and LCH (Perceptually Uniform)</h3>
      <p>
        OKLCH and LCH are modern CSS color spaces (CSS Color Level 4) that are perceptually uniform — equal numerical steps in the color space correspond to equal perceived differences in color. RGB and HSL are <em>not</em> perceptually uniform: changing blue by 10 units looks very different from changing yellow by 10 units. OKLCH fixes this, enabling smooth, visually consistent color palettes and gradients. Syntax: <code>oklch(70% 0.15 220)</code>. Browser support is now excellent (Chrome 111+, Safari 15.4+, Firefox 113+).
      </p>

      <h3>CMYK (Cyan, Magenta, Yellow, Key/Black)</h3>
      <p>
        CMYK is the subtractive color model used in print. Unlike RGB which adds light, CMYK works by absorbing (subtracting) specific wavelengths using ink pigments. CMYK values cannot be directly represented in CSS for screen display — they're for print production workflows. Converting RGB to CMYK for print requires color profile management and is handled by design tools like Adobe Illustrator.
      </p>

      <h3>Color Spaces: sRGB, Display P3, Rec. 2020</h3>
      <p>
        A color gamut defines the range of colors a system can reproduce. Standard web hex/RGB values use the sRGB color space, which covers about 35% of visible colors. Modern displays increasingly support wider gamuts:
      </p>
      <ul>
        <li><strong>Display P3</strong>: Covers about 53% of visible colors (Apple devices use this, CSS supports it with <code>color(display-p3 r g b)</code>)</li>
        <li><strong>Rec. 2020</strong>: Covers about 75% of visible colors (used in HDR video, CSS support emerging)</li>
        <li><strong>ProPhoto RGB</strong>: Covers ~91% of visible colors (used in professional photo editing)</li>
      </ul>
      <p>
        For most web use, sRGB hex codes are correct. For apps targeting Apple devices with ProMotion displays and wanting to use the full P3 gamut, CSS Color Level 4 offers <code>color(display-p3 1 0 0)</code> for a more saturated red than sRGB's #FF0000.
      </p>

      <h2>Common Color Reference: Hex and RGB Values</h2>
      <p>
        Understanding the hex/RGB values of common reference colors helps you navigate color spaces intuitively:
      </p>
      <ul>
        <li><strong>Pure red</strong>: #FF0000 = rgb(255, 0, 0)</li>
        <li><strong>Pure green</strong>: #00FF00 = rgb(0, 255, 0)</li>
        <li><strong>Pure blue</strong>: #0000FF = rgb(0, 0, 255)</li>
        <li><strong>White</strong>: #FFFFFF = rgb(255, 255, 255)</li>
        <li><strong>Black</strong>: #000000 = rgb(0, 0, 0)</li>
        <li><strong>Gray 50%</strong>: #808080 = rgb(128, 128, 128)</li>
        <li><strong>Yellow</strong>: #FFFF00 = rgb(255, 255, 0)</li>
        <li><strong>Cyan</strong>: #00FFFF = rgb(0, 255, 255)</li>
        <li><strong>Magenta</strong>: #FF00FF = rgb(255, 0, 255)</li>
        <li><strong>Orange</strong>: #FF8000 = rgb(255, 128, 0)</li>
        <li><strong>Tailwind blue-500</strong>: #3B82F6 = rgb(59, 130, 246)</li>
        <li><strong>Tailwind red-500</strong>: #EF4444 = rgb(239, 68, 68)</li>
        <li><strong>Tailwind green-500</strong>: #22C55E = rgb(34, 197, 94)</li>
      </ul>

      <h2>Color Contrast and Accessibility (WCAG)</h2>
      <p>
        One of the most critical applications of hex/RGB color knowledge is accessibility — specifically, ensuring sufficient color contrast between text and background for users with low vision or color blindness.
      </p>

      <h3>WCAG Contrast Ratio</h3>
      <p>
        The Web Content Accessibility Guidelines (WCAG) define minimum contrast ratios based on relative luminance, a perceptually weighted measure of color brightness:
      </p>
      <ul>
        <li><strong>WCAG AA</strong>: Minimum 4.5:1 for normal text, 3:1 for large text (18pt+) and UI components</li>
        <li><strong>WCAG AAA</strong>: Minimum 7:1 for normal text, 4.5:1 for large text</li>
      </ul>
      <p>
        Relative luminance is calculated from linear RGB values (gamma-corrected):
      </p>
      <p>
        For each channel C (R, G, or B) with value c = channel/255:
      </p>
      <ul>
        <li>If c ≤ 0.04045: linear = c / 12.92</li>
        <li>Else: linear = ((c + 0.055) / 1.055) ^ 2.4</li>
        <li>Luminance L = 0.2126 × linearR + 0.7152 × linearG + 0.0722 × linearB</li>
      </ul>
      <p>
        Contrast ratio = (L1 + 0.05) / (L2 + 0.05) where L1 is the larger luminance.
      </p>
      <p>
        This formula reveals why text contrast cannot be evaluated by eye alone — the perception of contrast depends on the specific colors involved, not just their apparent brightness difference. A yellow-on-white combination that looks distinct to some viewers might fail WCAG at a ratio below 4.5:1.
      </p>

      <h3>Color Blindness Considerations</h3>
      <p>
        Approximately 8% of men and 0.5% of women have some form of color blindness. The most common types:
      </p>
      <ul>
        <li><strong>Deuteranopia/deuteranomaly</strong>: Reduced sensitivity to green (~6% of males)</li>
        <li><strong>Protanopia/protanomaly</strong>: Reduced sensitivity to red (~2% of males)</li>
        <li><strong>Tritanopia/tritanomaly</strong>: Reduced sensitivity to blue (rare, ~0.003%)</li>
        <li><strong>Achromatopsia</strong>: No color vision at all (very rare)</li>
      </ul>
      <p>
        Color blindness simulators (like the devTools accessibility features, or Figma plugins) show how your colors appear to users with different types of color blindness. The key principle: never use color as the only means of conveying information. Always supplement with icons, labels, or patterns.
      </p>

      <h2>Using Hex and RGB in CSS</h2>

      <h3>CSS Color Properties</h3>
      <p>
        Any CSS property that accepts a color value accepts hex, rgb(), rgba(), hsl(), and other color formats interchangeably:
      </p>
      <pre><code>{`/* All equivalent — Tailwind blue-500 */
.element {
  color: #3B82F6;
  color: rgb(59, 130, 246);
  color: rgb(59 130 246);          /* CSS Color 4 */
  color: hsl(217, 91%, 60%);
}

/* With transparency */
.overlay {
  background: #3B82F680;           /* 50% opacity */
  background: rgba(59, 130, 246, 0.5);
  background: rgb(59 130 246 / 50%);
}`}</code></pre>

      <h3>CSS Custom Properties (Variables) for Design Systems</h3>
      <pre><code>{`:root {
  --color-primary: #3B82F6;
  --color-primary-rgb: 59, 130, 246;  /* For rgba() use */
  --color-secondary: #22C55E;
}

.btn-primary {
  background: var(--color-primary);
  border: 2px solid rgba(var(--color-primary-rgb), 0.3);
}`}</code></pre>

      <h3>CSS currentColor</h3>
      <p>
        The <code>currentColor</code> keyword inherits the element's <code>color</code> value. Useful for SVG fills and strokes, borders, and box shadows that should automatically match text color:
      </p>
      <pre><code>{`.icon {
  fill: currentColor;   /* SVG inherits text color */
}
.card {
  border: 1px solid currentColor;
  box-shadow: 0 0 8px currentColor;
}`}</code></pre>

      <h2>Hex and RGB in Design Tools</h2>

      <h3>Figma</h3>
      <p>
        Figma displays colors in hex by default in its color picker. The properties panel shows the hex value and allows switching to RGB, HSL, HSB, or CSS formats. Figma also supports OKLCH and Display P3 colors for wide-gamut design. When copying colors from Figma's code panel for CSS, it exports hex by default. For opacity-aware colors, Figma exports the opacity as a separate property: <code>color: #3B82F6; opacity: 0.5;</code> or <code>background: rgba(59, 130, 246, 0.5);</code>.
      </p>

      <h3>Adobe XD and Photoshop</h3>
      <p>
        Adobe tools use hex and RGB prominently in their color pickers. Photoshop's color picker shows hex, HSB, HSL, LAB, and CMYK values simultaneously, making it easy to see the same color in multiple representations. When exporting for web, Photoshop and XD output hex codes. Photoshop's "Copy Color as HTML" feature copies the hex code directly to clipboard.
      </p>

      <h3>Sketch</h3>
      <p>
        Sketch uses hex codes in its inspector for solid colors and shows RGBA breakdown in its color picker. When you use design tokens or shared library colors in Sketch, the hex values are stored in the library's token definitions.
      </p>

      <h3>Canva</h3>
      <p>
        Canva's color picker accepts hex codes in the # field. Users can type any hex code directly to apply it. For brand kit colors, Canva stores them by hex value. Canva for Teams supports uploading a brand color palette with hex codes.
      </p>

      <h2>Hex and RGB in Programming Languages</h2>

      <h3>JavaScript / TypeScript</h3>
      <pre><code>{`// Hex to RGB
function hexToRgb(hex) {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  return { r, g, b };
}

// RGB to Hex
function rgbToHex(r, g, b) {
  return '#' + [r, g, b]
    .map(v => v.toString(16).padStart(2, '0'))
    .join('');
}

// With alpha
function hexToRgba(hex) {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  const a = cleaned.length === 8
    ? parseInt(cleaned.substring(6, 8), 16) / 255
    : 1;
  return { r, g, b, a };
}`}</code></pre>

      <h3>Python</h3>
      <pre><code>{`def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(r, g, b):
    return '#{:02X}{:02X}{:02X}'.format(r, g, b)

# Using colorsys for HSL conversion
import colorsys
r, g, b = hex_to_rgb('#3B82F6')
h, l, s = colorsys.rgb_to_hls(r/255, g/255, b/255)
print(f"H:{h*360:.0f} S:{s*100:.0f}% L:{l*100:.0f}%")`}</code></pre>

      <h3>CSS Preprocessors (Sass/SCSS)</h3>
      <pre><code>{`// Sass color functions
$primary: #3B82F6;
$light: lighten($primary, 20%);   // Lighten by 20%
$dark: darken($primary, 20%);     // Darken by 20%
$muted: desaturate($primary, 50%); // Reduce saturation
$complement: adjust-hue($primary, 180deg); // Complementary color

// Get RGB components
$red: red($primary);    // → 59
$green: green($primary); // → 130
$blue: blue($primary);  // → 246`}</code></pre>

      <h2>Design Tokens and Color Systems</h2>
      <p>
        Modern design systems use design tokens — named, semantic references to color values — instead of raw hex codes scattered throughout code. This approach enables theming, dark mode, and brand updates without find-and-replace across the codebase.
      </p>

      <h3>Tailwind CSS Color System</h3>
      <p>
        Tailwind defines a complete color palette with shades from 50 (lightest) to 950 (darkest) for each hue. Each shade maps to a specific hex value. For example, the "blue" palette:
      </p>
      <ul>
        <li>blue-50: #EFF6FF = rgb(239, 246, 255)</li>
        <li>blue-100: #DBEAFE = rgb(219, 234, 254)</li>
        <li>blue-200: #BFDBFE = rgb(191, 219, 254)</li>
        <li>blue-400: #60A5FA = rgb(96, 165, 250)</li>
        <li>blue-500: #3B82F6 = rgb(59, 130, 246)</li>
        <li>blue-600: #2563EB = rgb(37, 99, 235)</li>
        <li>blue-900: #1E3A8A = rgb(30, 58, 138)</li>
      </ul>

      <h3>CSS Custom Properties for Theming</h3>
      <p>
        The modern approach to dark mode and theming uses CSS custom properties (variables) that update based on <code>@media (prefers-color-scheme: dark)</code> or a <code>[data-theme="dark"]</code> attribute:
      </p>
      <pre><code>{`:root {
  --bg: #FFFFFF;
  --text: #111827;
  --primary: #3B82F6;
}
[data-theme="dark"] {
  --bg: #111827;
  --text: #F9FAFB;
  --primary: #60A5FA;  /* Lighter shade for dark bg */
}`}</code></pre>

      <h2>Color Harmony and Palette Generation</h2>
      <p>
        Once you understand hex and RGB, you can programmatically generate harmonious color palettes. Color harmony rules operate in HSL space:
      </p>
      <ul>
        <li><strong>Complementary</strong>: Add 180° to the hue. Red (#FF0000) → Cyan (#00FFFF)</li>
        <li><strong>Analogous</strong>: Colors ±30° from the base hue</li>
        <li><strong>Triadic</strong>: Three colors at 120° intervals</li>
        <li><strong>Split-complementary</strong>: Base + two colors ±150° from complementary</li>
        <li><strong>Tetradic</strong>: Four colors at 90° intervals</li>
        <li><strong>Monochromatic</strong>: Same hue, varying S and L</li>
      </ul>
      <p>
        Generating tints (lighter versions) and shades (darker versions) of a base color: in HSL, increase L for tints and decrease L for shades while keeping H and S constant. In RGB, multiply each channel by a factor &gt; 1 for tints (clamped at 255) and by a factor &lt; 1 for shades.
      </p>

      <h2>Named CSS Colors</h2>
      <p>
        CSS defines 148 named colors from the X11 color system. These range from the obvious (<code>red</code>, <code>blue</code>, <code>green</code>) to the surprising (<code>rebeccapurple</code>, <code>papayawhip</code>, <code>cornflowerblue</code>). Each named color maps to a specific hex value:
      </p>
      <ul>
        <li>red = #FF0000</li>
        <li>blue = #0000FF</li>
        <li>green = #008000 (not #00FF00, which is "lime")</li>
        <li>white = #FFFFFF</li>
        <li>black = #000000</li>
        <li>gray/grey = #808080</li>
        <li>rebeccapurple = #663399 (added in CSS4 to honor Rebecca Meyer)</li>
        <li>cornflowerblue = #6495ED</li>
        <li>goldenrod = #DAA520</li>
        <li>tomato = #FF6347</li>
      </ul>

      <h2>Performance and Color in Web Development</h2>
      <p>
        Color choice affects performance in subtle ways. Transparent (alpha &lt; 1) colors require compositing, which can trigger GPU layers and affect rendering performance on complex pages. Using opacity-0 / opacity-1 for show/hide animations is more performant than rgba() alpha transitions in some cases, as the browser can handle opacity changes without re-compositing child elements.
      </p>
      <p>
        CSS <code>mix-blend-mode</code> and <code>backdrop-filter</code> properties use color in computation-intensive ways that can impact performance on mobile devices. Understanding the RGB values involved helps you anticipate rendering complexity.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'How do I convert hex to RGB?',
    answer: 'Split the hex code (without #) into three pairs: RR, GG, BB. Convert each pair from base-16 to base-10. Example: #3B82F6 → R: 3B = (3×16)+11 = 59, G: 82 = (8×16)+2 = 130, B: F6 = (15×16)+6 = 246 → rgb(59, 130, 246). Use the formula: decimal = (first hex digit × 16) + second hex digit.',
  },
  {
    category: 'General',
    question: 'How do I convert RGB to hex?',
    answer: 'Convert each decimal value (0–255) to a two-digit hex number. Divide by 16 for the first digit, take the remainder for the second, then convert each to hex (0–9, A–F). Example: rgb(34, 197, 94) → R:34=22, G:197=C5, B:94=5E → #22C55E. In code: value.toString(16).padStart(2, "0").',
  },
  {
    category: 'General',
    question: 'What is the difference between hex and RGB color codes?',
    answer: 'Hex and RGB represent exactly the same information — three 8-bit color channels — in different notations. Hex uses compact base-16 notation (#FF5733), while RGB uses three decimal integers (rgb(255, 87, 51)). Hex is more compact and common in CSS and HTML. RGB is more readable and easier to manipulate mathematically. Both are interchangeable in CSS.',
  },
  {
    category: 'General',
    question: 'What does the # symbol mean in a hex color code?',
    answer: 'The hash symbol (#) is a prefix that indicates what follows is a hexadecimal color code. It is part of the CSS and HTML syntax for color specification, not part of the hex value itself. When parsing programmatically, strip the # before converting: hex.replace("#", "").',
  },
  {
    category: 'Formats',
    question: 'What is the difference between #RGB and #RRGGBB hex codes?',
    answer: '#RGB is a shorthand form where each digit is doubled: #F0A expands to #FF00AA. This only works when both digits of each channel pair are identical. #RRGGBB is the full 6-digit form that works for all colors. If a hex color can be written as 3 digits, the shorthand is valid; otherwise, use the full 6-digit form.',
  },
  {
    category: 'Formats',
    question: 'What is an 8-character hex color code (#RRGGBBAA)?',
    answer: 'The 8-character hex format adds a two-digit alpha channel after the blue channel. Alpha 00 = fully transparent, FF = fully opaque. Example: #FF000080 = red at 50% opacity (0x80 = 128, 128/255 ≈ 50%). CSS supports 8-digit hex natively. It is equivalent to rgba(255, 0, 0, 0.502).',
  },
  {
    category: 'Formats',
    question: 'Are hex color codes case-sensitive?',
    answer: 'No. Hex color codes are case-insensitive in CSS and HTML. #3B82F6 and #3b82f6 and #3B82f6 are all identical. Convention varies by context: CSS custom properties and Tailwind use uppercase letters, while some tools output lowercase. Either works correctly.',
  },
  {
    category: 'Color Models',
    question: 'What is the difference between RGB and HSL?',
    answer: 'RGB specifies colors by red, green, and blue light amounts (0–255 each). HSL specifies Hue (0–360°, position on color wheel), Saturation (0–100%, colorfulness), and Lightness (0–100%, brightness). HSL is more intuitive for creating color variations — lighten by increasing L, desaturate by decreasing S, find complementary color by adding 180° to H.',
  },
  {
    category: 'Color Models',
    question: 'What is the difference between HSL and HSB/HSV?',
    answer: 'Both represent colors with Hue, Saturation, and a brightness-like component. HSL (Lightness) places pure colors at 50% lightness, with 100% being white. HSV/HSB (Value/Brightness) places pure colors at 100% value, with 0% being black. Photoshop uses HSB; CSS uses HSL. Pure red is hsl(0, 100%, 50%) or hsb(0, 100%, 100%).',
  },
  {
    category: 'Color Models',
    question: 'What is OKLCH and why should I care about it?',
    answer: 'OKLCH (Lightness, Chroma, Hue) is a perceptually uniform color space in CSS Color Level 4. Unlike RGB and HSL where equal numerical steps don\'t equal equal perceived changes, OKLCH is designed so color adjustments look consistent across hues. It enables creating color palettes where all shades appear equally vibrant and accessible. Syntax: oklch(70% 0.15 220). Supported in modern browsers (Chrome 111+, Safari 15.4+, Firefox 113+).',
  },
  {
    category: 'Accessibility',
    question: 'What is WCAG color contrast ratio and how is it calculated?',
    answer: 'WCAG contrast ratio compares the relative luminance of two colors: (L1 + 0.05) / (L2 + 0.05) where L1 is the lighter color\'s luminance. WCAG AA requires 4.5:1 for normal text and 3:1 for large text. Luminance is calculated from gamma-corrected RGB values weighted by perceptual importance: L = 0.2126×R + 0.7152×G + 0.0722×B (after linearization).',
  },
  {
    category: 'Accessibility',
    question: 'How do color blindness types affect which colors to use?',
    answer: 'Deuteranopia (red-green, most common) makes red and green appear similar. Protanopia (red weak) makes reds appear darker and less saturated. Tritanopia (blue-yellow, rare) makes blues and greens appear similar. Best practice: never use color alone to convey information — supplement with icons, patterns, or labels. Use a colorblind simulator to test your palette.',
  },
  {
    category: 'CSS',
    question: 'Can I mix hex and RGB in CSS?',
    answer: 'Yes. CSS accepts hex, rgb(), rgba(), hsl(), hsla(), and named colors in any order across any properties. You can use `color: #3B82F6` and `background: rgba(59, 130, 246, 0.5)` in the same stylesheet — these are equivalent. Modern CSS Color Level 4 also accepts rgb() without commas and with a slash for alpha: `rgb(59 130 246 / 50%)`.',
  },
  {
    category: 'CSS',
    question: 'How do I use color transparency in CSS?',
    answer: 'Four options: (1) rgba(r, g, b, alpha) where alpha is 0–1, (2) 8-digit hex #RRGGBBAA, (3) rgb(r g b / alpha%) in CSS Color 4, (4) opacity property (affects the entire element including children). rgba() and 8-digit hex are equivalent and most common. The opacity property is different — it makes the whole element transparent, not just the color.',
  },
  {
    category: 'CSS',
    question: 'What CSS color formats are supported by all modern browsers?',
    answer: 'Fully supported in all modern browsers: hex (#RRGGBB, #RGB, #RRGGBBAA), rgb(), rgba(), hsl(), hsla(), named colors, currentColor, transparent. CSS Color Level 4 features with very good but not universal support: oklch(), color(display-p3), lch(), lab(). Always check caniuse.com for specific feature support if targeting older browsers.',
  },
  {
    category: 'Programming',
    question: 'How do I convert hex to RGB in JavaScript?',
    answer: 'Parse each pair: `function hexToRgb(hex) { const c = hex.replace("#",""); return { r: parseInt(c.slice(0,2),16), g: parseInt(c.slice(2,4),16), b: parseInt(c.slice(4,6),16) }; }`. For shorthand hex, expand first: `c.length === 3 ? c.split("").map(x => x+x).join("") : c`.',
  },
  {
    category: 'Programming',
    question: 'How do I convert hex to RGB in Python?',
    answer: '`def hex_to_rgb(hex_color): h = hex_color.lstrip("#"); return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))`. This returns a tuple like (59, 130, 246). Python\'s `int(string, 16)` converts a hex string to decimal. The Pillow library also provides `ImageColor.getrgb("#3B82F6")`.',
  },
  {
    category: 'Programming',
    question: 'How do I convert RGB to hex in Python?',
    answer: '`def rgb_to_hex(r, g, b): return "#{:02X}{:02X}{:02X}".format(r, g, b)`. The `:02X` format specifier converts to uppercase hex with zero-padding to 2 digits. For lowercase hex: `"#{:02x}{:02x}{:02x}"`. Also: `"#%02X%02X%02X" % (r, g, b)` in older style.',
  },
  {
    category: 'Design',
    question: 'How do design tools like Figma handle hex colors?',
    answer: 'Figma displays hex by default in its color picker and properties panel. You can switch the color mode to RGB, HSL, or HSB. When copying colors from the code panel, Figma outputs hex for CSS. For colors with opacity, Figma typically outputs a separate opacity property or rgba() notation rather than 8-digit hex.',
  },
  {
    category: 'Design',
    question: 'What are design tokens and how do hex colors relate to them?',
    answer: 'Design tokens are named variables that store design decisions including colors. Instead of hardcoding #3B82F6 throughout code, you define a token like `--color-primary: #3B82F6`. This enables consistent use, easy theming, dark mode support, and brand updates without find-and-replace. Tools like Style Dictionary generate tokens in multiple formats (CSS custom properties, JSON, platform-specific formats).',
  },
  {
    category: 'Color Theory',
    question: 'What is color gamut and what are sRGB vs Display P3?',
    answer: 'Color gamut is the range of colors a system can reproduce. sRGB is the standard web color space, covering ~35% of visible colors. Display P3 (used in modern Apple devices) covers ~53% — you can specify P3 colors in CSS with color(display-p3 r g b) using 0–1 values. Hex codes use sRGB. For richer colors on compatible displays, CSS Color Level 4 enables wide-gamut color specification.',
  },
  {
    category: 'Color Theory',
    question: 'How do I create a tint and shade palette from a hex color?',
    answer: 'Convert the hex to HSL. For tints (lighter): increase the L value toward 100%. For shades (darker): decrease L toward 0%. Keep H and S constant for each step. Example: base hsl(217, 91%, 60%) → tint at +20%: hsl(217, 91%, 80%) → shade at -20%: hsl(217, 91%, 40%). This is how Tailwind CSS generates its color palette shades.',
  },
  {
    category: 'Color Theory',
    question: 'What is the complementary color of a hex code?',
    answer: 'The complementary color is directly opposite on the color wheel — add 180° to the hue in HSL. Convert hex to HSL, add 180° to H (mod 360), convert back to hex. Example: #3B82F6 = hsl(217°, 91%, 60%) → complement: hsl(37°, 91%, 60%) = an orange. CSS filter: hue-rotate(180deg) can also display the complementary color.',
  },
  {
    category: 'Technical',
    question: 'Why do some hex colors look different on screen than in print?',
    answer: 'Screens use additive RGB light mixing; print uses subtractive CMYK ink. The sRGB gamut used for web hex colors doesn\'t map 1:1 to CMYK. Some RGB colors (particularly saturated blues, greens, and reds) cannot be reproduced in CMYK, and vice versa. For print, colors need to be specified in CMYK through a design tool with proper color management, not raw hex conversion.',
  },
  {
    category: 'Technical',
    question: 'What is relative luminance and how is it different from brightness?',
    answer: 'Relative luminance is a perceptually weighted measure of light: L = 0.2126×linearR + 0.7152×linearG + 0.0722×linearB (after gamma correction). The weights reflect human visual sensitivity — our eyes are most sensitive to green, less to red, and least to blue. "Brightness" is informal; luminance is the precise, perceptually accurate measure used in WCAG accessibility calculations.',
  },
];

export const hexToRgbContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
