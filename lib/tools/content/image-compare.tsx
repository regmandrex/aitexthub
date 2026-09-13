import type { ToolContent } from './index';

export const imageCompareContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Image Compare Tool: Visually Diff Two Images Side by Side</h2>
        <p>
          Comparing two images "” whether they are design mockups versus implementations, before/after
          edits, different compression settings, or two versions of a photograph "” is a task developers,
          designers, photographers, and QA testers face regularly. Our Image Compare tool provides an
          interactive slider-based comparison, a side-by-side view, and pixel-level difference analysis
          so you can quickly identify what changed between two images.
        </p>
        <p>
          Visual comparison is harder than it sounds. The human eye naturally adapts to context: when
          viewing images separately, subtle color shifts, sharpness changes, or compression artifacts
          become nearly invisible. But when two images are displayed with a movable split line between
          them, even a 5% brightness change becomes immediately obvious. Overlaying the pixel difference
          as a heatmap surfaces changes that neither side-by-side nor overlay views would reveal. This
          tool combines all three approaches.
        </p>

        <h2>Use Cases for Image Comparison</h2>
        <h3>Design QA and Pixel Regression Testing</h3>
        <p>
          Frontend development teams use image comparison extensively for visual regression testing "”
          automatically comparing screenshots of the current build against a baseline to detect
          unintended UI changes. A padding change, a font weight difference, or a color shift in a
          brand CSS variable can affect dozens of components. Automated visual regression tools like
          Percy, Chromatic, and Playwright's screenshot testing use pixel-diffing algorithms to detect
          these changes. Our manual comparison tool serves the same purpose when you need to investigate
          a specific component or page.
        </p>
        <h3>Image Compression and Format Comparison</h3>
        <p>
          When optimizing images for the web, you must balance file size against visual quality. Converting
          a JPEG to WebP at quality 80 might reduce file size by 40% "” but does it introduce visible
          artifacts? Comparing the original and compressed version at full resolution with the split
          slider reveals compression artifacts, banding, and detail loss that are invisible in thumbnails.
          This is especially valuable for evaluating AVIF vs WebP vs JPEG quality at equivalent file sizes.
        </p>
        <h3>Photo Editing Before/After</h3>
        <p>
          Photographers and retouchers use before/after comparison to evaluate the impact of color grading,
          retouching, sharpening, and noise reduction. The slider interface is the standard UI for this
          purpose, popularized by tools like Lightroom's before/after split view and countless photography
          portfolio websites.
        </p>
        <h3>A/B Testing Design Variants</h3>
        <p>
          Product designers comparing two button styles, color schemes, or layout variants benefit from
          direct comparison. Overlaying two designs with the split slider reveals how size, spacing, and
          visual weight differ "” more accurately than viewing them in separate browser tabs.
        </p>
        <h3>Scientific and Medical Imaging</h3>
        <p>
          Medical professionals, scientists, and researchers use image comparison for before/after
          treatment photos, microscopy comparisons, satellite imagery change detection, and CT/MRI scan
          comparison. Pixel-level difference maps are particularly valuable for quantifying change.
        </p>

        <h2>How Pixel Difference Algorithms Work</h2>
        <p>
          Computing the visual difference between two images goes beyond simple pixel-by-pixel subtraction.
          Several algorithms are used in practice:
        </p>
        <h3>Raw Pixel Difference (Delta E)</h3>
        <p>
          The simplest approach: subtract the RGB values of each corresponding pixel pair and sum the
          differences. A pixel in image A with RGB(200, 100, 50) compared to the same position in image B
          with RGB(210, 95, 55) has differences of 10, -5, and 5. The total difference can be expressed
          as the Euclidean distance in RGB color space:{' '}
          <code>{'sqrt(10² + 5² + 5²) ≈ 12.2'}</code>. This raw distance is easy to compute but does not
          match human perception "” humans are more sensitive to green channel changes than red or blue.
        </p>
        <h3>Perceptual Difference (SSIM)</h3>
        <p>
          The Structural Similarity Index Measure (SSIM) compares images by analyzing luminance, contrast,
          and structure "” properties that correlate with how humans perceive image quality. SSIM produces
          values from -1 (completely dissimilar) to 1 (identical). A score above 0.95 typically indicates
          visually imperceptible differences; below 0.8 means visible degradation. SSIM is the industry
          standard metric for image quality assessment and is used by video codecs, image compression
          benchmarks, and ML model evaluation.
        </p>
        <h3>Pixelmatch Algorithm</h3>
        <p>
          Pixelmatch, used by many visual regression testing tools, compares images anti-aliasing-aware.
          It first checks if pixels differ significantly using a threshold parameter. For borderline pixels
          near edges, it checks surrounding pixels to determine if the difference is due to anti-aliasing
          (which should be ignored) or genuine content change (which should be flagged). This makes it
          significantly more useful for UI screenshots than raw pixel comparison, which would flag every
          anti-aliased edge as a change.
        </p>
        <h3>Perceptual Hash (pHash) Similarity</h3>
        <p>
          For determining whether two images are "the same" at a high level "” ignoring minor rescaling,
          recompression, or color adjustments "” perceptual hashing is the standard approach. A perceptual
          hash generates a compact binary fingerprint of an image based on its DCT (Discrete Cosine
          Transform) frequency components. Two similar images produce similar hash values; the Hamming
          distance between hashes correlates with visual similarity. pHash is used for duplicate detection,
          reverse image search, and content-based image retrieval.
        </p>

        <h2>The Split Slider Interface</h2>
        <p>
          The split comparison slider is the most intuitive interface for image comparison. A vertical
          (or horizontal) divider separates the two images; dragging the divider reveals more of one
          image or the other. This design was popularized by Google Earth's historical imagery comparison,
          Wikipedia's image comparison templates, and photography before/after showcases.
        </p>
        <p>
          Implementing a split slider requires two absolutely-positioned images in a container with
          overflow hidden, with a draggable divider that controls the clip width of the top image:
        </p>
        <pre><code>{'/* CSS */\n.compare-container {\n  position: relative;\n  overflow: hidden;\n}\n.image-before {\n  position: absolute;\n  clip-path: inset(0 calc(100% - var(--split)) 0 0);\n}\n.divider {\n  position: absolute;\n  left: var(--split);\n  cursor: ew-resize;\n}'}</code></pre>
        <p>
          JavaScript updates the <code>--split</code> CSS custom property as the user drags, giving
          smooth 60fps updates using the CSS engine rather than JavaScript layout calculations.
        </p>

        <h2>Overlay and Difference Views</h2>
        <p>
          Beyond the split slider, two other comparison modes provide different insights:
        </p>
        <h3>Overlay / Onion Skin</h3>
        <p>
          Blending both images at 50% opacity reveals differences as ghosting or haloing effects. This is
          the "onion skin" technique used in animation to compare consecutive frames. For design comparison,
          overlay mode makes alignment differences immediately visible "” a 2px shift in a button creates
          a double-image ghost effect.
        </p>
        <h3>Difference / XOR View</h3>
        <p>
          Computing the absolute pixel difference between images and amplifying it produces a difference
          map. Identical pixels appear black; changed pixels appear in proportion to their change magnitude.
          A small brightness change produces a dark gray difference pixel; a large content change produces
          a bright white pixel. This view is invaluable for finding subtle changes invisible in normal
          comparison modes. Many image comparison tools apply a color tint to the difference map "”
          red for significant differences, yellow for minor "” to create an intuitive heatmap.
        </p>

        <h2>Comparing Images Programmatically</h2>
        <p>
          For automated testing and CI pipelines, several libraries provide programmatic image comparison:
        </p>
        <h3>Pixelmatch (JavaScript/Node.js)</h3>
        <pre><code>{"import { PNG } from 'pngjs';\nimport pixelmatch from 'pixelmatch';\nimport fs from 'fs';\n\nconst img1 = PNG.sync.read(fs.readFileSync('before.png'));\nconst img2 = PNG.sync.read(fs.readFileSync('after.png'));\nconst { width, height } = img1;\nconst diff = new PNG({ width, height });\n\nconst numDiffPixels = pixelmatch(\n  img1.data, img2.data, diff.data,\n  width, height,\n  { threshold: 0.1 }\n);\n\nconsole.log(`Different pixels: ${numDiffPixels}`);\nfs.writeFileSync('diff.png', PNG.sync.write(diff));"}</code></pre>
        <h3>ImageMagick CLI</h3>
        <pre><code>{'# Generate visual difference image\nconvert before.png after.png -metric SSIM \\\n  -compare diff.png 2>&1\n\n# Get SSIM score\nconvert before.png after.png -metric SSIM -compare -format "%[distortion]" info:'}</code></pre>
        <h3>PIL/Pillow (Python)</h3>
        <pre><code>{"from PIL import Image, ImageChops\nimport numpy as np\n\nimg1 = Image.open('before.png').convert('RGB')\nimg2 = Image.open('after.png').convert('RGB')\n\ndiff = ImageChops.difference(img1, img2)\narr = np.array(diff)\nprint(f'Max diff: {arr.max()}')\nprint(f'Mean diff: {arr.mean():.2f}')\ndiff.save('diff.png')"}</code></pre>
        <h3>Playwright Visual Testing</h3>
        <pre><code>{"import { test, expect } from '@playwright/test';\n\ntest('homepage visual regression', async ({ page }) => {\n  await page.goto('/');\n  await expect(page).toHaveScreenshot('homepage.png', {\n    maxDiffPixelRatio: 0.02 // Allow up to 2% pixel difference\n  });\n});"}</code></pre>

        <h2>Image Comparison in Design Systems</h2>
        <p>
          Modern design systems increasingly use visual regression testing as a core part of their CI/CD
          pipeline. Tools like Storybook's Chromatic integration automatically capture screenshots of
          every component story and compare them against a baseline after each pull request. Changes
          require explicit approval in a UI review workflow before they can be merged.
        </p>
        <p>
          This approach transforms visual consistency from a manual QA task into an automated, auditable
          process. Designers can review only the visual changes in each PR, filtered to only the stories
          that changed. This eliminates the common problem of developers making "safe" CSS changes that
          unintentionally affect dozens of components they didn't test.
        </p>

        <h2>Best Practices for Image Comparison in Testing</h2>
        <ul>
          <li>
            <strong>Set appropriate thresholds</strong>: pixel-perfect comparison fails on anti-aliased
            text with subpixel rendering differences across platforms. Use a threshold of 0.1-0.2 for
            UI screenshots and 0.0 for exact binary comparison.
          </li>
          <li>
            <strong>Mask dynamic content</strong>: dates, times, user avatars, and ads change between
            screenshots. Mask these regions to prevent false positives.
          </li>
          <li>
            <strong>Normalize viewport and scale</strong>: ensure both screenshots are taken at identical
            viewport dimensions and device pixel ratios. A 1440px screenshot compared to a 1280px screenshot
            will produce all-different results despite identical content.
          </li>
          <li>
            <strong>Wait for animations to complete</strong>: screenshot CSS animations mid-transition.
            Use <code>prefers-reduced-motion</code> in tests or wait for animations to end.
          </li>
          <li>
            <strong>Store baselines in version control</strong>: baseline screenshots should live in your
            git repository, updated intentionally via a deliberate review workflow, not automatically on
            every push.
          </li>
        </ul>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What is image comparison and what is it used for?',
      answer:
        'Image comparison identifies visual differences between two images. Common use cases: visual regression testing in frontend development (detecting unintended UI changes), image compression evaluation (original vs WebP/AVIF quality), photo editing before/after review, design mockup vs implementation QA, and scientific/medical before/after analysis. Tools range from side-by-side viewers to automated pixel-diffing algorithms.',
    },
    {
      category: 'Basics',
      question: 'What is the split slider comparison interface?',
      answer:
        'The split slider shows two images side by side with a movable vertical (or horizontal) divider between them. Dragging the divider reveals more of one image or the other. This interface makes subtle differences immediately obvious: even small brightness shifts or pixel-level changes become visible when the eye can directly compare adjacent areas.',
    },
    {
      category: 'Algorithms',
      question: 'What is SSIM and how is it used for image quality measurement?',
      answer:
        'SSIM (Structural Similarity Index Measure) compares images by analyzing luminance, contrast, and structure "” properties aligned with human perception. It produces a score from -1 (completely different) to 1 (identical). Scores above 0.95 are typically imperceptible to the human eye; below 0.8 shows visible degradation. SSIM is the standard metric for image quality research, codec evaluation, and compression benchmarks.',
    },
    {
      category: 'Algorithms',
      question: 'What is a pixel difference heatmap?',
      answer:
        'A pixel difference heatmap visualizes where two images differ. It is calculated by computing the absolute difference of each pixel&#39;s color values between the two images. Identical pixels appear black; changed pixels appear lighter or colored proportional to the magnitude of change. Color coding (red for large differences, yellow for small) turns the raw difference into an intuitive heatmap showing exactly where and how much the images differ.',
    },
    {
      category: 'Algorithms',
      question: 'What is a perceptual hash and how does it differ from pixel comparison?',
      answer:
        'A perceptual hash (pHash) is a compact fingerprint of an image derived from its frequency domain (DCT). Similar images produce similar hashes; the Hamming distance between two hashes indicates similarity. Unlike pixel comparison, pHash is robust to rescaling, recompression, minor color adjustments, and format conversion "” two versions of the same photo at different resolutions will have a low Hamming distance. Use pixel comparison for exact change detection; use pHash for duplicate detection and "same image" determination.',
    },
    {
      category: 'Algorithms',
      question: 'What is the Pixelmatch algorithm?',
      answer:
        'Pixelmatch is an image diffing algorithm that compares images while being aware of anti-aliasing. Instead of flagging every slightly different pixel as a change, it checks whether borderline pixels are near anti-aliased edges "” if so, it ignores those pixels. This dramatically reduces false positives in UI screenshot comparisons where every curved edge and diagonal line has anti-aliased pixels that vary between renders.',
    },
    {
      category: 'Visual Regression',
      question: 'What is visual regression testing?',
      answer:
        'Visual regression testing automatically compares screenshots of the current codebase against a stored baseline to detect unintended visual changes. After a code change, a CI pipeline takes fresh screenshots and pixel-diffs them against the baseline. Differences are flagged for human review. This catches accidental CSS changes that affect components outside the developer&#39;s direct view. Tools: Chromatic (for Storybook), Percy, Playwright screenshot assertions.',
    },
    {
      category: 'Visual Regression',
      question: 'How do I set up visual regression testing with Playwright?',
      answer:
        'Use Playwright&#39;s built-in screenshot comparison: await expect(page).toHaveScreenshot("name.png"). On first run, Playwright saves the screenshot as a baseline. On subsequent runs, it compares against the baseline and fails if differences exceed the threshold. Set maxDiffPixelRatio (fraction of different pixels allowed) or maxDiffPixels (absolute count). Run playwright test --update-snapshots to update baselines after intentional changes.',
    },
    {
      category: 'Image Optimization',
      question: 'How do I compare image quality at different compression settings?',
      answer:
        'Use the split slider to compare the original image against the compressed version at 100% zoom. Look for compression artifacts (blocky patches, ringing around sharp edges, color banding in gradients) in the compressed version. The difference heatmap highlights regions where quality degraded. For quantitative comparison, check SSIM scores "” 0.95+ is typically imperceptible; below 0.9 shows noticeable degradation.',
    },
    {
      category: 'Formats',
      question: 'What image formats does this comparison tool support?',
      answer:
        'The tool supports all image formats natively supported by modern browsers: PNG, JPEG, WebP, AVIF, GIF, SVG, and BMP. For pixel-level comparison, lossless formats (PNG, WebP lossless) provide the most accurate results since lossy formats like JPEG introduce their own compression artifacts that may obscure the actual differences you are trying to detect.',
    },
    {
      category: 'Photography',
      question: 'How do photographers use image comparison tools?',
      answer:
        'Photographers use comparison for: before/after editing review (original RAW vs edited export); evaluating different noise reduction settings; comparing different lens apertures for sharpness and bokeh; reviewing retouching work; comparing output from different export settings (color profiles, sharpening); and showing clients the before/after transformation. The split slider is the standard UI for photo before/after presentations on portfolio websites.',
    },
    {
      category: 'Design',
      question: 'How do designers use image comparison to QA designs?',
      answer:
        'Designers compare design mockups (Figma exports, design specs) against actual browser implementations to check for spacing inconsistencies, font rendering differences, color accuracy, and alignment issues. The overlay mode (blending both images at 50%) is particularly useful for catching alignment and sizing discrepancies. Automated visual testing tools like Chromatic integrate this into the PR review workflow.',
    },
    {
      category: 'Programming',
      question: 'What JavaScript libraries are available for image comparison?',
      answer:
        'Pixelmatch: fast, anti-aliasing-aware pixel comparison returning a diff pixel count and diff image. Resemblejs: wraps Pixelmatch with a friendlier API and extra output formats. jimp: pure JavaScript image processing with diff support. Sharp: high-performance Node.js image processing with comparison utilities. For browser-side comparison, canvas APIs can compute pixel differences from two image elements loaded via CORS-enabled URLs.',
    },
    {
      category: 'Programming',
      question: 'How do I compare two images in Python?',
      answer:
        'Use Pillow (PIL): from PIL import Image, ImageChops; diff = ImageChops.difference(img1, img2). For perceptual comparison, use scikit-image: from skimage.metrics import structural_similarity; score, diff = structural_similarity(arr1, arr2, full=True, channel_axis=-1). For command-line comparison, ImageMagick&#39;s compare command supports -metric SSIM, PSNR, and other metrics with visual diff output.',
    },
    {
      category: 'CI/CD',
      question: 'How do I prevent visual regressions in my CI pipeline?',
      answer:
        'Integrate a visual testing tool: Playwright (built-in screenshot assertions), Chromatic (Storybook-based), or Percy. On each PR, the CI runs tests that take screenshots and compare against baselines. Failed comparisons block the PR and require either: (1) fixing the unintended change, or (2) intentionally approving the change through the visual review UI to update the baseline. Store baseline images in version control.',
    },
    {
      category: 'Thresholds',
      question: 'What comparison threshold should I use for UI screenshot testing?',
      answer:
        'For UI screenshots with text and anti-aliased edges: use 0.1-0.2 threshold with Pixelmatch (ignores small sub-pixel rendering differences) plus maxDiffPixelRatio around 0.01-0.02 (1-2% pixel difference allowed). For exact binary comparison (icons, generated graphics without anti-aliasing): threshold 0.0, maxDiffPixels 0. For photographic content: SSIM above 0.95 typically indicates imperceptible difference. Adjust thresholds empirically to minimize false positives without missing real regressions.',
    },
    {
      category: 'Dynamic Content',
      question: 'How do I handle dynamic content (timestamps, ads) in visual regression tests?',
      answer:
        'Use screenshot masking to exclude dynamic regions from comparison. In Playwright: await page.locator(".timestamp").evaluate(el => el.style.visibility = "hidden") before screenshotting, or use the mask option in toHaveScreenshot: expect(page).toHaveScreenshot({ mask: [page.locator(".dynamic")] }). Masking blocks out the specified regions in both the baseline and the comparison screenshot.',
    },
    {
      category: 'Color',
      question: 'Why do the same images appear different on different monitors?',
      answer:
        'Monitor color gamut, calibration, brightness, gamma, and color profile (sRGB, Display P3, Adobe RGB) all affect how images look. An sRGB image appears washed out on an uncalibrated wide-gamut monitor and over-saturated on a Display P3 screen without proper color management. Web browsers with color management (all modern browsers support ICC profiles) apply the image&#39;s embedded color profile. Use a calibrated monitor and color-managed workflow for accurate image comparison.',
    },
    {
      category: 'Overlay',
      question: 'What is the onion skin / overlay comparison mode?',
      answer:
        'Overlay or onion skin mode blends both images at equal opacity (typically 50% each). This reveals differences as ghosting effects "” regions where images differ appear doubled or blurred. This mode is particularly effective for detecting alignment and size differences, where content has moved by a few pixels. It is borrowed from animation, where "onion skin" shows the previous and next frames at reduced opacity to help animators maintain continuity.',
    },
    {
      category: 'Medical',
      question: 'How is image comparison used in medical and scientific contexts?',
      answer:
        'Medical imaging uses comparison for before/after treatment documentation, lesion size tracking in CT/MRI scans, and wound healing progress photos. Scientific uses include satellite imagery change detection (vegetation, urban development, ice extent), microscopy comparisons, and gel electrophoresis band density analysis. In these contexts, quantitative pixel-level measurements and calibrated color accuracy are important, unlike purely visual web/design comparisons.',
    },
    {
      category: 'File Size',
      question: 'How do image comparison tools handle images of different sizes?',
      answer:
        'For pixel-level comparison to work, both images must be the same dimensions in pixels. If images differ in size, the comparison tool must resize one to match the other before computing pixel differences "” this introduces resampling artifacts that may be misidentified as content differences. For comparing images of different dimensions (e.g., 1x vs 2x retina versions), compare at the same logical size, or use perceptual hash comparison which is resolution-independent.',
    },
    {
      category: 'Tools',
      question: 'What other image comparison tools are available besides web-based generators?',
      answer:
        'Desktop tools: Kaleidoscope (Mac, professional diff/merge tool); Beyond Compare (cross-platform, supports image diff); DiffImg (free, cross-platform). Command line: ImageMagick compare command; ffmpeg with pixel format filters. Online tools: Diff Checker (supports images), IMGonline image comparison. Automated testing: Chromatic, Percy, Applitools, BackstopJS. For code-level integration: Playwright, Cypress, WebdriverIO all have screenshot comparison built in.',
    },
    {
      category: 'Export',
      question: 'Can I save the difference image from a comparison?',
      answer:
        'Yes "” visual diff tools can export the difference visualization as a PNG. The diff image is generated by computing per-pixel absolute differences and mapping them to a visual scale. These diff images are useful for documentation, bug reports, and communicating changes to non-technical stakeholders. In automated testing pipelines, diff images are stored as CI artifacts so developers can review exactly what changed.',
    },
    {
      category: 'Accessibility',
      question: 'How does image comparison relate to accessibility testing?',
      answer:
        'Visual comparison can catch accessibility-related visual regressions: color contrast changes (a CSS variable change could accidentally reduce text/background contrast below WCAG 4.5:1), focus ring disappearance, tooltip visibility changes, or animation triggering on previously static elements. However, image comparison alone is insufficient for accessibility testing "” combine it with automated tools (axe, Lighthouse) and manual keyboard navigation testing.',
    },
  ],
};
