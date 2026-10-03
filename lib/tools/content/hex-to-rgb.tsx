import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Hex to RGB Color Converter: The Ultimate Guide to Color Codes, Color Models, and Web Color Systems</h2>
      <p>Color is vital for every visual medium — websites, mobile applications, digital art, print layouts, video creation, and data visualizations all rely on exact, repeatable color specifications. Within the digital realm, colors are defined through mathematical models that dictate how to generate a specific hue on display hardware. The two most widespread color representations you will encounter in web and UI development are hexadecimal color codes (hex) and RGB (Red, Green, Blue) values. A Hex to RGB Converter converts between these dual formats instantly, assisting designers and developers in working seamlessly across utilities, programming languages, and design frameworks utilizing varying color notations.</p>
      <p>Comprehending how hex and RGB relate to one another — beyond merely memorizing the conversion formula, but grasping <em>why</em> these frameworks exist, the way display hardware implements them, and how they tie into broader color science — turns you into a significantly more proficient designer and developer. This manual addresses everything from the mathematics of color bit-depth to practical implementations within CSS, design applications, and accessibility.</p>

      <h2>The RGB Color Model: How Displays Produce Color</h2>
      <p>The RGB color model is an additive framework where red, green, and blue light combine to form a broad spectrum of hues. This model stems directly from human visual perception: the human retina holds three distinct cone cell categories, each exhibiting peak sensitivity to wavelengths roughly matching red (~700nm), green (~546nm), and blue (~435nm) light. By blending varying strengths of these three primary colors, display hardware stimulates the three cone varieties to generate the illusion of essentially any visible color.</p>
      <p>This system is termed additive since you are introducing light. When all three channels operate at peak brightness, the resulting output is white light. When all three sit at zero, the output is black (meaning no light is emitted). This stands in opposition to the subtractive framework utilized in printing (CMYK), where light is subtracted through the addition of ink pigments.</p>

      <h3>Bit Depth and RGB Channel Levels</h3>
      <p>In the standard 8-bit-per-channel RGB setup, every color channel (red, green, blue) is represented via an integer running from 0 to 255. This span arises because each individual channel is encoded using 8 binary bits: 2⁸ yields 256 separate options (0 through 255).</p>
      <p>With three channels possessing 256 potential options each, the complete color space contains 256 × 256 × 256 = 16,777,216 distinct colors — commonly designated as true color or 24-bit color (8 bits multiplied by 3 channels equals 24 bits). This proves adequate for covering the visible spectrum for most consumer screens without noticeable color banding to human eyes.</p>
      <p>Greater bit depths find use in professional photography and HDR (High Dynamic Range) media:</p>
      <ul>
        <li><strong>10-bit per channel</strong>: 1,024 levels per channel, 1,073,741,824 overall colors (1 billion)</li>
        <li><strong>12-bit per channel</strong>: 4,096 levels per channel, 68,719,476,736 overall colors</li>
        <li><strong>16-bit per channel</strong>: 65,536 values per channel (utilized within RAW photography and HDR video)</li>
        <li><strong>32-bit per channel floating point</strong>: Employed in CGI rendering and compositing for figures falling outside the 0–1 span (HDR)</li>
      </ul>
      <p>Regarding web development and standard UI design, the 8-bit per channel format (RGB 0–255) remains universal. Hex color codes represent this identical 8-bit-per-channel spectrum.</p>

      <h3>RGB Notation Formats</h3>
      <p>RGB values within CSS may be expressed across multiple formats:</p>
      <ul>
        <li><code>rgb(255, 0, 0)</code> — traditional comma-separated integer format</li>
        <li><code>rgb(255 0 0)</code> — contemporary space-separated format (CSS Color Level 4)</li>
        <li><code>rgb(100%, 0%, 0%)</code> — values based on percentages</li>
        <li><code>rgba(255, 0, 0, 0.5)</code> — incorporating alpha transparency (0 means transparent, 1 means opaque)</li>
        <li><code>rgb(255 0 0 / 50%)</code> — contemporary layout utilizing slash-separated alpha</li>
      </ul>

      <h2>Hexadecimal Color Codes: Understanding How Hex Maps to RGB</h2>
      <p>A hexadecimal (hex) color code represents those same three 8-bit RGB channels inside a concise six-character string that begins with a hash symbol (#). Hexadecimal (base-16) numbering relies on digits 0–9 and letters A–F to convey values 0–15, enabling a two-character hex number to express values from 00 (decimal 0) up to FF (decimal 255).</p>
      <p>The 6-digit hex code is organized like this: <strong>#RRGGBB</strong> in which:</p>
      <ul>
        <li><strong>RR</strong> — two hexadecimal characters for red intensity (00–FF)</li>
        <li><strong>GG</strong> — two hexadecimal characters for green intensity (00–FF)</li>
        <li><strong>BB</strong> — two hexadecimal characters for blue intensity (00–FF)</li>
      </ul>
      <p>
        Example: <code>#FF5733</code>
      </p>
      <ul>
        <li>FF = 255 (red at maximum)</li>
        <li>57 = 87 (green at 87/255 ≈ 34%)</li>
        <li>33 = 51 (blue at 51/255 = 20%)</li>
        <li>Output: rgb(255, 87, 51) — a warm orange-red tone</li>
      </ul>

      <h3>The Math Behind It: Hex to RGB</h3>
      <p>Converting each two-digit hex pair into decimal involves simple positional arithmetic:</p>
      <p>
        <strong>Decimal value = (first hex digit × 16) + second hex digit</strong>
      </p>
      <p>For every single hex character, the translation is: 0→0, 1→1, ..., 9→9, A→10, B→11, C→12, D→13, E→14, F→15.</p>
      <p>
        Example — convert #3B82F6:
      </p>
      <ul>
        <li>R: 3B → (3 × 16) + 11 = 48 + 11 = 59</li>
        <li>G: 82 → (8 × 16) + 2 = 128 + 2 = 130</li>
        <li>B: F6 → (15 × 16) + 6 = 240 + 6 = 246</li>
        <li>Output: rgb(59, 130, 246) — Tailwind CSS blue-500</li>
      </ul>

      <h3>The Math Behind It: RGB to Hex</h3>
      <p>Converting each decimal RGB value to two hex digits works in reverse:</p>
      <p>
        <strong>Hex pair = Math.floor(value / 16) as hex + (value % 16) as hex</strong>
      </p>
      <p>Sample — transform rgb(34, 197, 94) (Tailwind green-500):</p>
      <ul>
        <li>R: 34 → 34 ÷ 16 = 2 remainder 2 → "22"</li>
        <li>G: 197 → 197 ÷ 16 = 12 remainder 5 → "C5"</li>
        <li>B: 94 → 94 ÷ 16 = 5 remainder 14 → "5E"</li>
        <li>Result: #22C55E</li>
      </ul>

      <h3>Shorthand Hex (#RGB)</h3>
      <p>Whenever both digits inside each pair match — #RRGGBB where RR = "XX", GG = "YY", BB = "ZZ" — you can compress the hex code down to three characters (#XYZ). The web browser enlarges each individual digit by duplicating it: #F0A expands to #FF00AA. Examples:</p>
      <ul>
        <li>#FFF → #FFFFFF (white)</li>
        <li>#000 → #000000 (black)</li>
        <li>#F00 → #FF0000 (absolute red)</li>
        <li>#0F0 → #00FF00 (absolute green)</li>
        <li>#00F → #0000FF (absolute blue)</li>
        <li>#39F → #3399FF (a standard blue)</li>
      </ul>
      <p>Not every hex color features a valid shorthand version — exclusively those where both digits within each pair are identical. #FF5733 (our orange-red from above) cannot be abbreviated because 5 ≠ 7 in the blue pair.</p>

      <h3>Alpha Hex Codes with 8 Characters (#RRGGBBAA)</h3>
      <p>The 8-character hex notation appends a two-digit alpha channel following the blue channel. Alpha values span from 00 (totally transparent) up to FF (totally opaque). Examples:</p>
      <ul>
        <li>Red at half transparency shown as #FF000080 (80 hex equals 128 decimal or 50.2%)</li>
        <li>Completely see-through black denoted by #00000000</li>
        <li>Solid white represented by #FFFFFFFF</li>
        <li>Blue at approximately 80% opacity via #0000FFCC (CC hex is 204 decimal, meaning 80%)</li>
      </ul>
      <p>Modern browsers handle 8-digit hex values natively: <code>color: #FF000080;</code> matches <code>color: rgba(255, 0, 0, 0.502);</code>. Compatibility is fantastic across all leading browsers since 2016–2017.</p>

      <h2>Alternative Color Models Outside Hex and RGB</h2>
      <p>While hex and RGB remain the standard formats across web development, grasping related color models assists you in picking the proper format for any given situation.</p>

      <h3>Hue, Saturation, and Lightness (HSL)</h3>
      <p>HSL offers a cylindrical mapping of the RGB color space that proves far more intuitive for humans to comprehend. Rather than defining red, green, and blue quantities, you define:</p>
      <ul>
        <li><strong>Hue (H)</strong>: Angle on the color circle spanning 0° to 360° (0° is red, 120° stands for green, 240° equals blue)</li>
        <li><strong>Saturation (S)</strong>: Purity of the shade from 0% (grayscale) up to 100% (maximum vividness)</li>
        <li><strong>Lightness (L)</strong>: Luminosity from 0% (pitch black) to 100% (stark white), where 50% gives the true hue</li>
      </ul>
      <p>HSL simplifies generating color variants significantly. To brighten a color, raise L. To lower saturation, drop S. To shift toward a complementary hue, add 180° to H. These adjustments are mathematically straightforward in HSL yet complicated in RGB.</p>
      <p>CSS formatting uses <code>hsl(220, 90%, 60%)</code> or <code>hsl(220deg 90% 60%)</code>. Including opacity looks like: <code>hsl(220 90% 60% / 80%)</code>.</p>

      <h3>Hue, Saturation, and Brightness/Value (HSB/HSV)</h3>
      <p>HSB (commonly known as HSV) behaves similarly to HSL but swaps out "Lightness" for "Value" (representing brightness). The key variance: HSL delivers peak color saturation at 50% lightness, whereas HSV reaches its most vibrant saturation at 100% value. The HSV/HSB model powers Photoshop's color palette and various professional graphics software. Fully saturated tones require S=100%, V=100% inside HSV, but demand S=100%, L=50% within HSL.</p>

      <h3>Perceptually Uniform Formats (OKLCH and LCH)</h3>
      <p>OKLCH and LCH are contemporary CSS color formats (CSS Color Level 4) that feature perceptual uniformity — identical numerical increments represent identical perceived color variations. RGB and HSL lack <em>perceptual uniformity</em>: shifting blue by 10 units appears drastically different from shifting yellow by 10 units. OKLCH resolves this, facilitating seamless, visually harmonious color ramps and gradients. Syntax: <code>oklch(70% 0.15 220)</code>. Browser compatibility is robust today (Chrome 111+, Safari 15.4+, Firefox 113+).</p>

      <h3>Cyan, Magenta, Yellow, and Key/Black (CMYK)</h3>
      <p>CMYK serves as the subtractive color model applied in printing. Contrary to RGB which adds light, CMYK operates by absorbing specific wavelengths through ink pigments. Furthermore, CMYK values cannot be displayed directly via CSS on screens since they belong exclusively to print production pipelines. Translating RGB values to CMYK for printing demands color profile management managed through design applications like Adobe Illustrator.</p>

      <h3>Supported Color Spaces: sRGB, Display P3, along with Rec. 2020</h3>
      <p>A color gamut establishes the scope of colors a device is capable of rendering. Standard web hex and RGB codes utilize the sRGB color space, encompassing roughly 35 percent of visible colors. At the same time, modern screens frequently accommodate broader gamuts:</p>
      <ul>
        <li><strong>Display P3</strong>: Encompasses around 53% of visible colors (utilized by Apple hardware, CSS enables it via <code>color(display-p3 r g b)</code>)</li>
        <li><strong>Rec. 2020</strong>: Encompasses around 75% of visible colors (applied in HDR video, CSS compatibility growing)</li>
        <li><strong>ProPhoto RGB</strong>: Encompasses ~91% of visible colors (applied in professional photography workflows)</li>
      </ul>
      <p>Regarding typical web applications, sRGB hex codes remain appropriate. For software aimed at Apple products featuring ProMotion screens seeking utilization of the complete P3 gamut, CSS Color Level 4 provides <code>color(display-p3 1 0 0)</code> to achieve a deeper saturation of red than the standard #FF0000 found in sRGB.</p>

      <h2>Frequent Color Reference: Hex and RGB Values</h2>
      <p>Grasping the hex and RGB figures of frequent reference colors assists in navigating different color spaces with ease:</p>
      <ul>
        <li><strong>Pure red</strong>: #FF0000 equals rgb(255, 0, 0)</li>
        <li><strong>Pure green</strong>: #00FF00 equals rgb(0, 255, 0)</li>
        <li><strong>Pure blue</strong>: #0000FF equals rgb(0, 0, 255)</li>
        <li><strong>White</strong>: #FFFFFF equals rgb(255, 255, 255)</li>
        <li><strong>Black</strong>: #000000 equals rgb(0, 0, 0)</li>
        <li><strong>Gray 50%</strong>: #808080 equals rgb(128, 128, 128)</li>
        <li><strong>Yellow</strong>: #FFFF00 equals rgb(255, 255, 0)</li>
        <li><strong>Cyan</strong>: #00FFFF equals rgb(0, 255, 255)</li>
        <li><strong>Magenta</strong>: #FF00FF equals rgb(255, 0, 255)</li>
        <li><strong>Orange</strong>: #FF8000 equals rgb(255, 128, 0)</li>
        <li><strong>Tailwind blue-500</strong>: #3B82F6 equals rgb(59, 130, 246)</li>
        <li><strong>Tailwind red-500</strong>: #EF4444 equals rgb(239, 68, 68)</li>
        <li><strong>Tailwind green-500</strong>: #22C55E equals rgb(34, 197, 94)</li>
      </ul>

      <h2>Accessibility and Color Contrast (WCAG)</h2>
      <p>Ensuring proper color contrast between backgrounds and text for individuals with color vision deficiencies or low vision—known as accessibility—ranks among the most vital uses for hex/RGB color understanding.</p>

      <h3>WCAG Contrast Ratio</h3>
      <p>The Web Content Accessibility Guidelines (WCAG) establish baseline contrast standards using relative luminance, which is a perceptually adjusted measurement of color brightness:</p>
      <ul>
        <li><strong>WCAG AA</strong>: At least 4.5:1 for standard text, 3:1 for big text (18pt+) and interface elements</li>
        <li><strong>WCAG AAA</strong>: At least 7:1 for standard text, 4.5:1 for big text</li>
      </ul>
      <p>The relative luminance is derived from linear RGB values (gamma-corrected):</p>
      <p>For every channel C (R, G, or B) where c = channel/255:</p>
      <ul>
        <li>If c is less than or equal to 0.04045: linear = c / 12.92</li>
        <li>Otherwise: linear = ((c + 0.055) / 1.055) ^ 2.4</li>
        <li>Luminance L = 0.2126 times linearR + 0.7152 times linearG + 0.0722 times linearB</li>
      </ul>
      <p>Contrast ratio = (L1 + 0.05) / (L2 + 0.05) where L1 represents the greater luminance.</p>
      <p>This equation explains why visual contrast cannot be judged simply by looking at it—contrast perception relies on the particular colors present rather than apparent brightness alone. A white and yellow pairing that seems clear to certain observers might drop below the 4.5:1 WCAG requirement.</p>

      <h3>Color Blindness Considerations</h3>
      <p>Roughly 8% of men and 0.5% of women experience a color vision deficiency. The primary categories are:</p>
      <ul>
        <li><strong>Deuteranopia/deuteranomaly</strong>: Lowered green sensitivity (~6% of males)</li>
        <li><strong>Protanopia/protanomaly</strong>: Lowered red sensitivity (~2% of males)</li>
        <li><strong>Tritanopia/tritanomaly</strong>: Lowered blue sensitivity (rare, ~0.003%)</li>
        <li><strong>Achromatopsia</strong>: Complete lack of color vision (extremely rare)</li>
      </ul>
      <p>Simulators for color blindness, such as Figma plugins or developer tool accessibility options, demonstrate how palettes look to people with various types of color vision deficiencies. The main rule: avoid relying exclusively on color to transmit data. Always back it up with patterns, text labels, or icons.</p>

      <h2>Applying Hex and RGB within CSS</h2>

      <h3>CSS Color Properties</h3>
      <p>Any stylesheet property taking a color input accepts rgba(), hex, rgb(), hsl(), and alternative formats interchangeably:</p>
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

      <h3>Design System CSS Custom Properties (Variables)</h3>
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
      <p>The <code>currentColor</code> keyword takes the element's <code>color</code> value. Great for SVG fills/strokes, borders, and box shadows matching text color automatically:</p>
      <pre><code>{`.icon {
  fill: currentColor;   /* SVG inherits text color */
}
.card {
  border: 1px solid currentColor;
  box-shadow: 0 0 8px currentColor;
}`}</code></pre>

      <h2>Hex and RGB inside Design Tools</h2>

      <h3>Figma</h3>
      <p>Figma defaults to showing hex values within its color picker tool. The properties panel displays the hex code and lets you switch to HSL, RGB, HSB, or CSS formats. Additionally, Figma accommodates Display P3 and OKLCH colors for wide-gamut projects. When exporting CSS colors from the code panel, Figma outputs hex codes by default. For transparency-aware colors, Figma exports opacity separately: <code>color: #3B82F6; opacity: 0.5;</code> or <code>background: rgba(59, 130, 246, 0.5);</code>.</p>

      <h3>Photoshop and Adobe XD</h3>
      <p>Adobe programs heavily feature hex and RGB inside their color pickers. Photoshop displays HSB, hex, LAB, HSL, and CMYK figures concurrently in its color picker, allowing you to view a single color across various formats seamlessly. When preparing assets for the web, XD and Photoshop export hex values. Photoshop includes a Copy Color as HTML command that sends the hex code straight to your clipboard.</p>

      <h3>Sketch</h3>
      <p>Sketch utilizes hex codes within its inspector for solid fills and presents an RGBA breakdown inside its color picker. Whenever you apply shared library colors or design tokens in Sketch, those hex values remain saved inside the library token definitions.</p>

      <h3>Canva</h3>
      <p>The color picker in Canva accepts hex codes via the # input. Individuals can input any hex code straight away to apply it. For brand kit colors, Canva saves them using their hex value. Canva for Teams makes it possible to upload a brand color palette containing hex codes.</p>

      <h2>Programming Languages Using Hex and RGB</h2>

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

      <h3>CSS Preprocessors like Sass and SCSS</h3>
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

      <h2>Color Systems and Design Tokens</h2>
      <p>Contemporary design systems employ design tokens—which are named, semantic pointers to color values—rather than raw hex codes spread across the codebase. This method facilitates dark mode, theing, and brand refreshes avoiding manual find-and-replace routines throughout the repository.</p>

      <h3>The Tailwind CSS Color System</h3>
      <p>Tailwind establishes an extensive color palette featuring shades ranging between 50 (the lightest) up to 950 (the darkest) for every individual hue. Every single shade corresponds to a precise hex value. Take the "blue" palette for instance:</p>
      <ul>
        <li>blue-50: #EFF6FF equals rgb(239, 246, 255)</li>
        <li>blue-100: #DBEAFE equals rgb(219, 234, 254)</li>
        <li>blue-200: #BFDBFE equals rgb(191, 219, 254)</li>
        <li>blue-400: #60A5FA equals rgb(96, 165, 250)</li>
        <li>blue-500: #3B82F6 equals rgb(59, 130, 246)</li>
        <li>blue-600: #2563EB equals rgb(37, 99, 235)</li>
        <li>blue-900: #1E3A8A equals rgb(30, 58, 138)</li>
      </ul>

      <h3>Theming Using CSS Custom Properties</h3>
      <p>Contemporary methods for dark mode and design themes rely on CSS custom properties (variables) that dynamically adjust using <code>@media (prefers-color-scheme: dark)</code> or a <code>[data-theme="dark"]</code> attribute:</p>
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

      <h2>Palette Generation and Color Harmony</h2>
      <p>After grasping hex and RGB, you are able to create cohesive color schemes programmatically. Color harmony principles function within HSL space:</p>
      <ul>
        <li><strong>Complementary</strong>: Add 180 degrees to the hue. Red (#FF0000) yields Cyan (#00FFFF)</li>
        <li><strong>Analogous</strong>: Hues within ±30° of the primary color</li>
        <li><strong>Triadic</strong>: A trio of shades separated by 120°</li>
        <li><strong>Split-complementary</strong>: Starting hue plus two colors ±150° away from the opposite</li>
        <li><strong>Tetradic</strong>: A set of four shades at 90° spacing</li>
        <li><strong>Monochromatic</strong>: Identical hue with different S and L values</li>
      </ul>
      <p>Creating tints (lighter variants) and shades (darker variants) of a primary color: in HSL, raise L for tints and lower L for shades while keeping H and S unchanged. In RGB, multiply every channel by a multiplier &gt; 1 for tints (capped at 255) and by a multiplier &lt; 1 for shades.</p>

      <h2>Named CSS Colors</h2>
      <p>CSS specifies 148 standard colors derived from the X11 color system. These span from familiar ones (<code>red</code>, <code>blue</code>, <code>green</code>) to unexpected ones (<code>rebeccapurple</code>, <code>papayawhip</code>, <code>cornflowerblue</code>). Each standard color corresponds to a particular hex code:</p>
      <ul>
        <li>red = #FF0000</li>
        <li>blue = #0000FF</li>
        <li>green = #008000 (instead of #00FF00, which is known as "lime")</li>
        <li>white = #FFFFFF</li>
        <li>black = #000000</li>
        <li>gray/grey = #808080</li>
        <li>rebeccapurple = #663399 (included in CSS4 to pay tribute to Rebecca Meyer)</li>
        <li>cornflowerblue = #6495ED</li>
        <li>goldenrod = #DAA520</li>
        <li>tomato = #FF6347</li>
      </ul>

      <h2>Performance and Color in Web Development</h2>
      <p>Color choices impact performance in subtle ways. Transparent (alpha &lt; 1) colors demand compositing, which may activate GPU layers and degrade rendering speed on intricate pages. Applying opacity-0 / opacity-1 for display/hide animations performs better than rgba() alpha transitions in certain situations, since the browser can manage opacity shifts without re-compositing child nodes.</p>
      <p>CSS <code>mix-blend-mode</code> and <code>backdrop-filter</code> rules utilize color in compute-heavy ways that can affect performance on mobile devices. Grasping the RGB values involved helps you foresee rendering complexity.</p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'How can I convert hex to RGB?',
    answer: 'Split any hex string (excluding the # prefix) into three distinct pairs: RR, GG, and BB. Convert every hexadecimal pair into base-10 integers. Sample: #3B82F6 → R: 3B = (3×16)+11 = 59, G: 82 = (8×16)+2 = 130, B: F6 = (15×16)+6 = 246 → rgb(59, 130, 246). Use this basic calculation: decimal = (initial hex char × 16) + secondary hex char.',
  },
  {
    category: 'General',
    question: 'How can I convert RGB to hex?',
    answer: 'Turn every decimal figure (0–255) into its double-character hexadecimal equivalent. Figure the first digit by dividing with 16, take the leftover value for the next digit, and translate each into hexadecimal representation (0–9, A–F). As an illustration: rgb(34, 197, 94) becomes R:34=22, G:197=C5, B:94=5E, yielding #22C55E. Programmatically: value.toString(16).padStart(2, "0").',
  },
  {
    category: 'General',
    question: 'What is the distinction between hex and RGB color codes?',
    answer: 'Hex and RGB convey identical data — three 8-bit color channels — through different formats. Hex employs concise base-16 notation (#FF5733), whereas RGB uses three decimal integers (rgb(255, 87, 51)). Hex is shorter and prevalent in CSS and HTML. RGB is more readable and simpler to compute mathematically. Both are fully interchangeable inside CSS.',
  },
  {
    category: 'General',
    question: 'What does the # character signify in a hex color code?',
    answer: 'The hash sign (#) serves as a prefix showing that what follows represents a hexadecimal color code. It forms part of the CSS and HTML syntax for color definition, rather than being part of the hex value itself. When parsing programmatically, remove the # before converting: hex.replace("#", "").',
  },
  {
    category: 'Formats',
    question: 'What is the difference between #RGB and #RRGGBB hex codes?',
    answer: 'The #RGB format is a shorthand version where every digit is duplicated: #F0A expands to #FF00AA. This only functions when both characters in each channel pair match. The #RRGGBB format is the complete 6-digit version that applies to all colors. If a hex color fits into 3 digits, the shorthand is valid; otherwise, use the full 6-digit variant.',
  },
  {
    category: 'Formats',
    question: 'What defines an 8-character hex color code (#RRGGBBAA)?',
    answer: 'The 8-character hex structure incorporates a two-digit alpha channel following the blue channel. Alpha 00 = completely transparent, FF = completely opaque. Example: #FF000080 = red at 50% opacity (0x80 = 128, 128/255 ≈ 50%). CSS natively supports 8-digit hex. It matches rgba(255, 0, 0, 0.502).',
  },
  {
    category: 'Formats',
    question: 'Do hex color codes care about capitalization?',
    answer: 'Not at all. Case makes no difference when evaluating hex color definitions in CSS and HTML. The values #3B82F6, #3b82f6, and #3B82f6 are identical in function. Usage habits vary by environment: Tailwind and CSS custom properties typically adopt capital letters, while certain utilities generate miniscule characters. Each format is completely valid.',
  },
  {
    category: 'Color Models',
    question: 'What is the distinction between RGB and HSL?',
    answer: 'RGB defines colors via red, green, and blue light levels (0–255 each). HSL defines Hue (0–360°, placement on the color wheel), Saturation (0–100%, vividness), and Lightness (0–100%, luminosity). HSL feels more intuitive for building color schemes — lighten by raising L, desaturate by lowering S, find a complementary hue by adding 180° to H.',
  },
  {
    category: 'Color Models',
    question: 'How do HSL and HSB/HSV contrast with one another?',
    answer: 'Both express colors using Hue, Saturation, and a brightness metric. HSL (Lightness) sets pure colors at 50% lightness, with 100% representing white. HSV/HSB (Value/Brightness) sets pure colors at 100% value, with 0% representing black. Photoshop relies on HSB; CSS relies on HSL. Pure red is hsl(0, 100%, 50%) or hsb(0, 100%, 100%).',
  },
  {
    category: 'Color Models',
    question: 'Why should anyone pay attention to OKLCH, and what is it?',
    answer: 'OKLCH (Lightness, Chroma, Hue) represents a perceptually uniform color space introduced in CSS Color Level 4. Contrary to RGB and HSL where identical numerical intervals do not produce identical visual shifts, OKLCH ensures uniform color modifications across different hues. This facilitates building palettes where every tone appears equally accessible and vibrant. Syntax: oklch(70% 0.15 220). Available across contemporary browsers (Chrome 111+, Safari 15.4+, Firefox 113+).',
  },
  {
    category: 'Accessibility',
    question: 'What defines the WCAG color contrast ratio and the way it gets computed?',
    answer: 'The WCAG contrast ratio contrasts the relative luminance values of two colors through the formula (L1 + 0.05) / (L2 + 0.05), where L1 stands for the brighter color\'s luminance. WCAG AA demands 4.5:1 for standard text alongside 3:1 for large text. Luminance is derived from gamma-adjusted RGB figures weighted by perceptual significance: L = 0.2126×R + 0.7152×G + 0.0722×B (following linearization).',
  },
  {
    category: 'Accessibility',
    question: 'In what ways do different forms of color blindness influence color selection?',
    answer: 'Deuteranopia (red-green, most frequent) causes red and green to look alike. Protanopia (red deficiency) makes reds appear dimmer and less saturated. Tritanopia (blue-yellow, uncommon) renders blues and greens nearly identical. Best practice: never rely solely on color to transmit data — pair it with patterns, icons, or labels. Test your palette using a colorblind simulator.',
  },
  {
    category: 'CSS',
    question: 'Is it possible to combine hex and RGB values within CSS?',
    answer: 'Affirmative. CSS supports hex, rgb(), rgba(), hsl(), hsla(), and color names in any sequence across all properties. You are free to apply `color: #3B82F6` and `background: rgba(59, 130, 246, 0.5)` inside the identical stylesheet — they function equivalently. Contemporary CSS Color Level 4 likewise permits rgb() omitting commas and employing a slash for alpha: `rgb(59 130 246 / 50%)`.',
  },
  {
    category: 'CSS',
    question: 'What is the procedure for applying color transparency inside CSS?',
    answer: 'Four choices exist: (1) rgba(r, g, b, alpha) where alpha spans 0–1, (2) 8-digit hex #RRGGBBAA, (3) rgb(r g b / alpha%) per CSS Color 4, (4) opacity property (impacting the complete element together with children). Both rgba() and 8-digit hex serve the exact same purpose and are most widespread. The opacity property behaves differently — rendering the entire element transparent rather than just the color.',
  },
  {
    category: 'CSS',
    question: 'Which CSS color formats receive backing from all contemporary browsers?',
    answer: 'Fully supported across all current browsers: hex (#RRGGBB, #RGB, #RRGGBBAA), rgb(), rgba(), hsl(), hsla(), named colors, currentColor, transparent. CSS Color Level 4 features boasting extensive yet non-universal backing comprise oklch(), color(display-p3), lch(), lab(). Always consult caniuse.com regarding specific feature compatibility when targeting older browser versions.',
  },
  {
    category: 'Programming',
    question: 'How can one translate hex into RGB using JavaScript?',
    answer: 'Evaluate each segment: `function hexToRgb(hex) { const c = hex.replace("#",""); return { r: parseInt(c.slice(0,2),16), g: parseInt(c.slice(2,4),16), b: parseInt(c.slice(4,6),16) }; }`. Regarding shorthand hex strings, expand them first: `c.length === 3 ? c.split("").map(x => x+x).join("") : c`.',
  },
  {
    category: 'Programming',
    question: 'What is the method for translating hex to RGB via Python?',
    answer: '`def hex_to_rgb(hex_color): h = hex_color.lstrip("#"); return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))`. This outputs a tuple resembling (59, 130, 246). Python\'s built-in `int(string, 16)` transforms a hex string into decimal format. Additionally, the Pillow library supplies `ImageColor.getrgb("#3B82F6")`.',
  },
  {
    category: 'Programming',
    question: 'How does one convert RGB into hex using Python?',
    answer: '`def rgb_to_hex(r, g, b): return "#{:02X}{:02X}{:02X}".format(r, g, b)`. The `:02X` modifier converts values into uppercase hex padded with zeros to reach 2 digits. For lowercase hex output: `"#{:02x}{:02x}{:02x}"`. Alternatively: `"#%02X%02X%02X" % (r, g, b)` via legacy syntax.',
  },
  {
    category: 'Design',
    question: 'How do layout applications such as Figma manage hex colors?',
    answer: 'Figma exhibits hex by default across its properties panel and color picker. Users can modify the color mode to HSL, RGB, or HSB. Upon extracting colors via the code panel, Figma yields hex for CSS. Concerning colors featuring opacity, Figma generally produces a separate opacity property or rgba() syntax instead of 8-digit hex codes.',
  },
  {
    category: 'Design',
    question: 'What are design tokens, and how do hex colors connect to them?',
    answer: 'Design tokens represent named variables holding design choices encompassing colors. Instead of hardcoding #3B82F6 throughout codebases, you establish a token like `--color-primary: #3B82F6`. This permits unified application, straightforward theme switching, dark mode compatibility, and brand refreshes absent manual find-and-replace routines. Utilities like Style Dictionary output tokens spanning multiple formats (JSON, CSS custom properties, platform-tailored formats).',
  },
  {
    category: 'Color Theory',
    question: 'What is a color gamut and how do sRGB and Display P3 compare?',
    answer: 'Color gamut denotes the spectrum of colors a system is capable of reproducing. sRGB functions as the standard web color space, encompassing roughly 35% of visible hues. Display P3 (utilized on newer Apple hardware) incorporates approximately 53% — allowing developers to declare P3 colors in CSS through color(display-p3 r g b) employing 0–1 values. Hex codes utilize sRGB. For richer colors on compatible screens, CSS Color Level 4 facilitates wide-gamut color definitions.',
  },
  {
    category: 'Color Theory',
    question: 'How should someone build a tint and shade palette starting from a hex color?',
    answer: 'Transform the hex into HSL format. For lighter tints: raise the L metric toward 100%. For darker shades: lower L toward 0%. Keep H and S fixed across each iteration. Illustration: initial hsl(217, 91%, 60%) -> tint at +20%: hsl(217, 91%, 80%) -> shade at -20%: hsl(217, 91%, 40%). This mechanism is how Tailwind CSS builds its color palette tones.',
  },
  {
    category: 'Color Theory',
    question: 'How can you find the complementary color for any given hex code?',
    answer: 'The complementary color sits directly across the color wheel — add 180 degrees to the hue inside HSL. Translate hex to HSL, add 180 degrees to H (modulo 360), then convert back to hex. Example: #3B82F6 = hsl(217 degrees, 91%, 60%) -> complement: hsl(37 degrees, 91%, 60%) = an orange hue. CSS filter: hue-rotate(180deg) is also capable of rendering the complementary color.',
  },
  {
    category: 'Technical',
    question: 'Why do certain hex colors appear differently on a monitor versus in print?',
    answer: 'Monitors employ additive RGB light combination; print relies on subtractive CMYK ink. The sRGB gamut utilized for web hex colors doesn\'t map one-to-one to CMYK. Specific RGB colors (notably saturated blues, greens, and reds) cannot be duplicated in CMYK, and the reverse is also true. For physical print, colors need definition in CMYK via a design software featuring proper color management, rather than raw hex conversion.',
  },
  {
    category: 'Technical',
    question: 'What defines relative luminance and how does it differ from brightness?',
    answer: 'Relative luminance represents a perceptually weighted measurement of light: L = 0.2126 x linearR + 0.7152 x linearG + 0.0722 x linearB (following gamma correction). The coefficients account for human visual sensitivity — our eyes are most sensitive to green, less to red, and least to blue. "Brightness" is informal; luminance serves as the exact, perceptually precise metric applied within WCAG accessibility formulas.',
  },
];

export const hexToRgbContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
