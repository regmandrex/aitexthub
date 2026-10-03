import type { ToolContent } from './index';

export const svgOptimizerContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>SVG Optimizer: Minimize SVG File Size Without Losing Quality</h2>
        <p>SVG files exported from design programs like Adobe Illustrator, Sketch, Figma, and Inkscape often contain excessive unnecessary data: application-specific metadata, redundant attributes, empty groups, unused definitions, verbose coordinate notation, and non-optimized path data. A 50KB SVG icon saved from Illustrator can compress down to under 5KB with zero visual differences following optimization. Our SVG Optimizer runs SVGO-compatible optimization passes to decrease file size, boost rendering performance, and generate cleaner, more manageable SVG code.</p>
        <p>SVG optimization provides some of the most substantial performance gains possible for icon-heavy web applications. A dashboard featuring 50 distinct SVG icons averaging 15KB each loads 750KB of SVG data - optimizing those icons to an average of 3KB saves 600KB, enhancing loading speed and cutting bandwidth expenses, especially for mobile users.</p>

        <h2>What SVG Exports Include (And Why They Are Bloated)</h2>
        <p>Comprehending why SVG exports carry excess weight means recognizing what software tools embed:</p>
        <h3>Adobe Illustrator</h3>
        <p>
          Illustrator SVG exports embed a full XML namespace declaration for Adobe proprietary extensions
          (<code>xmlns:a</code>, <code>xmlns:i</code>), XMP metadata headers with file creation dates
          and software versions, extensive <code>{'<defs>'}</code> sections with empty patterns, gradients
          referenced nowhere, and <code>{'<style>'}</code> blocks with unused class selectors. The{' '}
          <code>preserveAspectRatio</code>, <code>xml:space</code>, and <code>version</code> attributes
          are added by default. A simple icon might have more metadata than actual path data.
        </p>
        <h3>Sketch</h3>
        <p>
          Sketch exports include <code>title</code> elements (page/layer name from the document),
          group IDs matching internal object identifiers, auto-generated class names, and separate
          <code>{'<g>'}</code> elements for each layer group with no transformation. These groups are
          semantically empty (no transformation, no style) and exist purely to mirror the Sketch layer
          structure.
        </p>
        <h3>Figma</h3>
        <p>
          Figma's SVG export is generally cleaner than Illustrator or Sketch but still includes
          redundant group wrappers, explicit <code>fill-rule</code> and <code>clip-rule</code> attributes
          on every path (even when they match the default), <code>xmlns:xlink</code> declarations even
          when no xlink hrefs are used, and verbose floating-point coordinates like{' '}
          <code>{'M 123.456789 234.567891'}</code> rather than the more compact{' '}
          <code>{'M 123.46 234.57'}</code>.
        </p>

        <h2>SVGO: The Standard SVG Optimization Engine</h2>
        <p>SVGO (SVG Optimizer) represents the open-source Node.js tool driving nearly every SVG optimization workflow throughout the JavaScript environment. Developed by Kir Belevich and currently maintained by the open-source community, SVGO executes a customizable pipeline of optimization plugins, each handling a distinct cleanup or transformation task. SVGO powers:</p>
        <ul>
          <li>svgr (React SVG component generation)</li>
          <li>imagemin-svgo</li>
          <li>Rollup, Vite, and webpack SVG plugins</li>
          <li>Jake Archibald's web interface for SVGO, known as SVGOMG</li>
          <li>For SVG files, use Squoosh</li>
          <li>vite-svg-loader, @svgr/webpack</li>
        </ul>
        <p>SVGO can be set up programmatically or through an <code>svgo.config.js</code> file:</p>
        <pre><code>{"import { optimize } from 'svgo';\n\nconst result = optimize(svgString, {\n  plugins: [\n    'removeDoctype',\n    'removeXMLProcInst',\n    'removeComments',\n    'removeMetadata',\n    'removeEditorsNSData',\n    'cleanupAttrs',\n    'mergeStyles',\n    'inlineStyles',\n    {\n      name: 'convertColors',\n      params: { shorthex: true }\n    },\n    'removeUselessDefs',\n    'cleanupNumericValues',\n    'convertShapeToPath',\n    'mergePaths',\n    'removeEmptyContainers',\n  ]\n});\n\nconsole.log(result.data);"}</code></pre>

        <h2>Essential SVGO Optimization Plugins</h2>
        <p>The optimization pipeline in SVGO is made of separate plugins, with each carrying out a specific job:</p>
        <h3>Elimination of Metadata and Documentation</h3>
        <ul>
          <li><strong>removeDoctype</strong>: removes the DOCTYPE declaration (<code>{'<!DOCTYPE svg PUBLIC ...>'}</code>). Not needed in HTML5 documents.</li>
          <li><strong>removeXMLProcInst</strong>: removes the XML processing instruction (<code>{'<?xml version="1.0"?>'}</code>). Required for standalone XML but unnecessary when SVG is embedded in HTML.</li>
          <li><strong>removeComments</strong>: strips out XML comments. These serve as human metadata rather than visual rendering.</li>
          <li><strong>removeMetadata</strong>: removes <code>{'<metadata>'}</code> elements (XMP metadata, creator information).</li>
          <li><strong>removeEditorsNSData</strong>: deletes vendor-specific namespace data originating from tools like Illustrator, Inkscape, and others (attributes using <code>ai:</code>, <code>inkscape:</code>, and <code>sodipodi:</code> namespaces).</li>
          <li><strong>removeTitle</strong>: removes <code>{'<title>'}</code> elements (document/layer names from the editor). Note: titles provide accessibility "” only remove if you don't need them.</li>
          <li><strong>removeDesc</strong>: removes <code>{'<desc>'}</code> elements. Same accessibility caveat as removeTitle.</li>
        </ul>
        <h3>Sanitizing Attributes and Styles</h3>
        <ul>
          <li><strong>cleanupAttrs</strong>: eliminates extra whitespace and line breaks inside attribute values.</li>
          <li><strong>mergeStyles</strong>: merges multiple <code>{'<style>'}</code> elements into one.</li>
          <li><strong>inlineStyles</strong>: transforms CSS class-based rules into direct inline style attributes to help subsequent plugins optimize better.</li>
          <li><strong>minifyStyles</strong>: minifies CSS in <code>{'<style>'}</code> blocks using CSSO.</li>
          <li><strong>removeUselessStrokeAndFill</strong>: strips out fill or stroke properties that do not produce any visible changes (such as stroke="none" lacking a stroke-width, or fill="none" with no fill).</li>
          <li><strong>removeUnknownsAndDefaults</strong>: drops properties unrecognized by SVG along with those set to standard defaults (like an explicit fill="black" when black is already the default).</li>
          <li><strong>removeNonInheritableGroupAttrs</strong>: strips presentation properties from group tags whenever child elements would inherit them anyway.</li>
        </ul>
        <h3>Optimizing Coordinates and Numbers</h3>
        <ul>
          <li><strong>cleanupNumericValues</strong>: shortens decimal coordinates to fewer digits (for instance, 123.456789 â†’ 123.46). The precision setting determines the extent of the rounding applied.</li>
          <li><strong>convertPathData</strong>: transforms path instructions into their most concise variants, eliminates unnecessary commands, adjusts coordinates, and swaps absolute commands for relative ones (or vice versa) when it saves space.</li>
          <li><strong>convertTransform</strong>: merges and alters transform attribute matrices, combining several transformations into one matrix whenever advantageous.</li>
          <li><strong>removeUselessDefs</strong>: removes elements from <code>{'<defs>'}</code> that are not referenced anywhere in the document.</li>
        </ul>
        <h3>Geometry and Structure Enhancement</h3>
        <ul>
          <li><strong>convertShapeToPath</strong>: converts simple shapes (<code>{'<rect>'}</code>, <code>{'<circle>'}</code>, <code>{'<ellipse>'}</code>, <code>{'<line>'}</code>, <code>{'<polyline>'}</code>, <code>{'<polygon>'}</code>) to equivalent <code>{'<path>'}</code> elements when paths produce shorter output.</li>
          <li><strong>mergePaths</strong>: combines several neighboring path nodes sharing an identical visual appearance into one <code>d</code> attribute utilizing the "M" move instruction.</li>
          <li><strong>removeEmptyContainers</strong>: removes empty <code>{'<g>'}</code>, <code>{'<defs>'}</code>, and other container elements.</li>
          <li><strong>collapseGroups</strong>: eliminates container elements whenever the group is redundant (possessing no attributes and only one child).</li>
        </ul>
        <h3>Color Optimization</h3>
        <ul>
          <li><strong>convertColors</strong>: transforms color codes into their briefest formats - RGB to hex (<code>rgb(255,0,0)</code> â†’ <code>#ff0000</code>), extended hex to compact hex (<code>#ffffff</code> â†’ <code>#fff</code>), and utilizes color keyword names where shorter.</li>
        </ul>

        <h2>Typical Size Reductions</h2>
        <p>How much space you save optimizing SVGs relies mostly on complexity and the source tool:</p>
        <ul>
          <li><strong>Adobe Illustrator icons</strong>: generally see a 50-80% file size decrease. Illustrator's SVG output is notoriously lengthy.</li>
          <li><strong>Sketch icons</strong>: generally achieve a 30-60% file size decrease.</li>
          <li><strong>Figma icons</strong>: typically achieve a 15-40% file size decrease. Figma outputs tidier SVG than Illustrator though optimization potential remains.</li>
          <li><strong>Hand-coded SVG</strong>: 5-20% reduction. Already fairly streamlined, focusing primarily on coordinate rounding and whitespace elimination.</li>
          <li><strong>Complex illustrations</strong>: 20-50% file savings based on vector node density alongside unnecessary embedded metadata.</li>
        </ul>
        <p>Applying Gzip/Brotli compression following SVGO optimization typically shrinks final transfer weight by an extra 70-85%, given that plain-text SVG code is remarkably compressible. A graphic commencing at 50KB can diminish to 10KB using SVGO, before ultimately plunging below 2KB once packaged with gzip.</p>

        <h2>What NOT to Remove: Accessibility in SVGs</h2>
        <p>High-level optimization might negatively impact accessibility. Prior to running SVGO with every plugin activated, know which elements need to be kept safe:</p>
        <ul>
          <li>
            <strong><code>{'<title>'}</code> elements</strong>: provide accessible names for SVG icons when they are not accompanied by visible text. Screen readers read the title as the element's accessible name. If an SVG icon is used without alt text or aria-label, removing the title makes it inaccessible. Configure removeTitle to false for icons used standalone.
          </li>
          <li>
            <strong><code>{'<desc>'}</code> elements</strong>: provide additional descriptions for screen readers. Keep them for complex infographics or illustrations where context matters.
          </li>
          <li><strong><code>role</code> attributes</strong>: Setting <code>role="img"</code> directly on an SVG tag allows assistive technology to recognize the graphic properly as artwork. Because removeUnknownsAndDefaults inside SVGO might discard non-standard parameters, adjust your setup so that role stays intact.</li>
          <li><strong><code>aria-label</code> and <code>aria-labelledby</code></strong>: retain these vital ARIA attributes under all circumstances.</li>
        </ul>
        <p>Here is the advised approach for making SVG icons accessible:</p>
        <pre><code>{'<svg role="img" aria-labelledby="icon-title">\n  <title id="icon-title">Download</title>\n  <!-- paths -->\n</svg>'}</code></pre>

        <h2>Optimizing SVGs Within Build Workflows</h2>
        <h3>Vite</h3>
        <pre><code>{"// vite.config.ts\nimport { defineConfig } from 'vite';\nimport svgr from 'vite-plugin-svgr';\n\nexport default defineConfig({\n  plugins: [\n    svgr({\n      svgrOptions: {\n        svgoConfig: {\n          plugins: ['preset-default']\n        }\n      }\n    })\n  ]\n});"}</code></pre>
        <h3>webpack</h3>
        <pre><code>{"// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.svg$/,\n        use: [\n          {\n            loader: '@svgr/webpack',\n            options: {\n              svgoConfig: {\n                plugins: ['preset-default']\n            }\n          }\n        }\n      }\n    ]\n  }\n};"}</code></pre>
        <h3>CLI Batch Optimization</h3>
        <pre><code>{'# Install SVGO\nnpm install -g svgo\n\n# Optimize single file\nsvgo icon.svg -o icon.min.svg\n\n# Optimize directory\nsvgo --folder src/icons --output dist/icons\n\n# With config file\nsvgo icon.svg --config svgo.config.js\n\n# Show stats\nsvgo icon.svg --pretty'}</code></pre>

        <h2>Working with SVG Sprites and Symbol Techniques</h2>
        <p>
          When an application uses many icons, the SVG sprite pattern is more efficient than individual
          files. All icons are combined into a single SVG file using <code>{'<symbol>'}</code> elements,
          each with an <code>id</code> attribute. Icons are referenced from HTML with{' '}
          <code>{'<use href="#icon-id">'}</code>:
        </p>
        <pre><code>{'<!-- sprite.svg -->\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n  <symbol id="icon-download" viewBox="0 0 24 24">\n    <path d="M12 16l-6-6h4V4h4v6h4l-6 6z"/>\n  </symbol>\n  <symbol id="icon-upload" viewBox="0 0 24 24">\n    <path d="M12 8l6 6h-4v6H10v-6H6l6-6z"/>\n  </symbol>\n</svg>\n\n<!-- Usage -->\n<svg><use href="sprite.svg#icon-download"/></svg>'}</code></pre>
        <p>SVG sprites undergo global optimization: SVGO handles the complete sprite sheet, eliminating duplicate path data, combining shared styles, and stripping unnecessary information across every symbol.</p>

        <h2>Comparing Safe Optimization and Aggressive Optimization</h2>
        <p>SVGO's <code>preset-default</code> setup executes a chosen group of safe modifications that safely shrink file dimensions minus visual alterations. For even tinier documents, aggressive optimization options are accessible but demand visual validation:</p>
        <ul>
          <li><strong>Rounding precision</strong>: shrinking coordinate precision from 3 to 1 decimal place may create visible flaws on intricate curved paths. Check at all scales prior to shrinking precision aggressively.</li>
          <li><strong>convertShapeToPath</strong>: transforming shapes to paths is lossless yet can make future editing tougher if the SVG needs re-importing into a design software.</li>
          <li><strong>cleanupIds</strong>: produces minimal IDs (<code>a</code>, <code>b</code>, <code>c</code>) instead of descriptive ones. Acceptable for standalone icons; problematic if the SVG employs named anchors or JavaScript targets element IDs.</li>
        </ul>

        <h2>How to Operate This SVG Optimizer</h2>
        <p>Drop or upload your SVG document. Set which optimization plugins to run – the standard settings utilize SVGO's preset-default which is safe for most use cases. Toggle individual plugins to activate heavier or lighter optimization. The utility displays the optimized SVG output, the compression ratio, and a scale comparison. Transfer the optimized SVG or download it. Preview the output to visually confirm zero quality was lost, and employ the diff view to see precisely which attributes and elements were eliminated.</p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'Why do graphics software exports result in such bulky SVG files?',
      answer:
        'Design programs embed extensive metadata in SVG exports: editor-specific namespace declarations (Illustrator&#39;s ai: and i: namespaces), XMP metadata containing creation dates and software versions, layer names as title elements, redundant group wrappers mirroring the layer structure, unused color definitions, verbose floating-point coordinates, and explicit attributes that merely repeat the SVG default values. A simple icon can feature 5× more metadata than actual path data.',
    },
    {
      category: 'Basics',
      question: 'What kind of file size decrease should I anticipate after SVG optimization?',
      answer:
        'Typical savings span: files from Adobe Illustrator drop 50-80%, Sketch outputs decrease 30-60%, Figma assets shrink 15-40%, and hand-coded SVG dips 5-20%. Final gains depend largely on overall detail and embedded metadata. After processing through SVGO, applying gzip/Brotli compression cuts file weight by another 70-85% thanks to the high compressibility of SVG text. Consequently, an initial 50KB Illustrator export could drop to 10KB using SVGO and end up below 2KB once compressed with gzip.',
    },
    {
      category: 'SVGO',
      question: 'What exactly is SVGO and in what way does it function?',
      answer:
        'SVGO (SVG Optimizer) is the standard open-source Node.js utility for SVG optimization. It parses the SVG into an AST (abstract syntax tree) and executes a configurable pipeline of plugins, each performing a targeted optimization: stripping metadata, collapsing empty groups, rounding coordinate values, merging paths, translating colors to shorter forms, and more. SVGO is employed by webpack, Vite, SVGR, and virtually every JavaScript build utility that handles SVGs.',
    },
    {
      category: 'SVGO',
      question: 'What does the preset-default configuration of SVGO entail?',
      answer:
        'preset-default represents the default setup bundled with SVGO, executing an array of vetted, non-breaking optimizers. Included are: removeDoctype, removeXMLProcInst, removeComments, removeMetadata, removeEditorsNSData, cleanupAttrs, mergeStyles, inlineStyles, cleanupNumericValues, convertPathData, convertTransform, removeEmptyContainers, collapseGroups, mergePaths, convertColors, plus additional passes. Together, these routines reliably trim down file footprints without causing any rendering discrepancies.',
    },
    {
      category: 'Accessibility',
      question: 'Does the process of SVG optimization impact accessibility?',
      answer:
        'It can, if configured improperly. SVGO&#39;s removeTitle plugin strips <title> elements utilized as accessible names for screen readers. The removeDesc plugin drops <desc> elements that deliver extended descriptions. For icons used without visible text labels, retain <title> elements. For decorative icons (aria-hidden="true"), titles and descriptions can safely be eliminated. Always configure removeTitle and removeDesc explicitly based on your accessibility criteria.',
    },
    {
      category: 'Accessibility',
      question: 'In what way can I ensure an optimized SVG remains accessible?',
      answer:
        'For standalone SVG icons (utilized without surrounding text): attach role="img" to the svg element, include a <title id="icon-name">Label</title> as the initial child, and add aria-labelledby="icon-name" to the svg element. Configure SVGO to preserve title elements. For decorative icons accompanying visible text: include aria-hidden="true" to the svg element and drop the title for a tinier file size.',
    },
    {
      category: 'Build',
      question: 'What are the steps to integrate SVG optimization into my Vite build?',
      answer:
        'Install vite-plugin-svgr or vite-svg-loader. Both employ SVGO internally. Configure SVGO options within the plugin settings: svgrOptions: { svgoConfig: { plugins: ["preset-default"] } }. For custom SVGO configuration, establish an svgo.config.js file inside your project root – SVGO picks it up automatically. Execute all optimizations at build time, not at runtime, to keep the production bundle compact.',
    },
    {
      category: 'Build',
      question: 'How is it possible to batch optimize an entire directory of SVG files via the command line?',
      answer:
        'To install SVGO across your system: run npm install -g svgo. Batch clean an entire folder: svgo --folder src/icons --output dist/icons. Target individual assets: svgo src/icons/*.svg. Load custom parameters: svgo src/icons/*.svg --config svgo.config.js. View file metrics: svgo icon.svg --pretty. Utilizing the CLI works brilliantly when performing single-pass bulk conversions across pre-existing icon libraries.',
    },
    {
      category: 'React',
      question: 'In what manner does SVGR incorporate SVGO?',
      answer:
        'Converting SVG files straight into React components is handled by SVGR. It initiates an initial cleanup routine through SVGO, followed by applying JSX transformations (translating standard SVG attributes into JSX conventions such as class→className and for→htmlFor). Through the svgoConfig option, SVGR accepts conventional SVGO configuration setups. Developers encounter SVGR natively throughout Create React App, Next.js default SVG loaders, @svgr/webpack, alongside a vast majority of modern React toolchains.',
    },
    {
      category: 'Formats',
      question: 'What distinguishes inline SVG, external SVG src, and SVG data URIs from one another?',
      answer:
        'Embedded SVG: the SVG code is placed directly within the HTML document. Permits CSS styling, JavaScript interaction, and eliminates an extra HTTP request. External SVG (src/href): delivered as a separate file, cacheable by the browser, cleaner HTML. SVG data URI: the SVG is base64-encoded and inserted into an href or background-image "” handy for CSS and img tags but expands file size by roughly 33% due to base64 encoding. Regarding icons, inline SVG or an SVG sprite are typically most efficient.',
    },
    {
      category: 'Plugins',
      question: 'What SVGO plugins are safe to turn on by default?',
      answer:
        'Safe plugins (in preset-default): removeDoctype, removeXMLProcInst, removeComments, removeMetadata, removeEditorsNSData, cleanupAttrs, mergeStyles, inlineStyles, cleanupNumericValues (precisionâ‰¥2), convertPathData, convertTransform, removeEmptyContainers, collapseGroups, convertColors, removeUselessDefs, removeUselessStrokeAndFill. Exercise caution regarding: cleanupIds (breaks external ID references), removeTitle/removeDesc (accessibility), and extremely low coordinate precision.',
    },
    {
      category: 'Plugins',
      question: 'How does the convertPathData plugin function?',
      answer:
        'convertPathData alters SVG path data (d attribute) into its most concise equivalent shape. It transforms absolute commands into relative ones when shorter (or vice versa), drops redundant commands (such as closing a path with Z and immediately beginning a new subpath with M at the same spot), combines consecutive commands of the same type, rounds coordinate values to the specified precision, and changes implicit line-to commands. It usually generates 30-50% shorter path data.',
    },
    {
      category: 'Quality',
      question: 'Can SVG optimization result in visible quality degradation?',
      answer:
        'With conservative configurations (preset-default), visible quality loss is extremely rare. The primary danger is aggressive coordinate rounding: dropping precision from 3 to 1 decimal place can introduce slight jaggedness along intricate curved paths. Test optimized SVGs across all intended display dimensions, particularly small scales where rounding flaws are more apparent. The merging of closely positioned path points may also trigger subtle contour shifts in complex illustrations.',
    },
    {
      category: 'Sprites',
      question: 'What defines an SVG sprite and in what way does optimization affect it?',
      answer:
        'An SVG sprite is a single SVG document housing multiple icons as <symbol> nodes, each possessing a distinct id. Icons are referenced using <use href="sprite.svg#icon-id">. SVGO can streamline an entire sprite file: stripping metadata across all symbols, deduplicating shared style definitions, and compressing all path data simultaneously. This proves more efficient than optimizing icons separately since shared styles and definitions are stored just once.',
    },
    {
      category: 'Compression',
      question: 'Should I additionally gzip/Brotli compress SVG files?',
      answer:
        'Yes "” SVG text compresses exceptionally well using Brotli or gzip because it features repetitive structures (XML attributes, coordinate patterns). A 10KB SVGO-optimized SVG typically shrinks to 1.5-2.5KB with Brotli. Set up your web server to compress SVG documents: add image/svg+xml to the list of compressible MIME types. For static hosting (Netlify, Vercel), this happens automatically in most cases. You can also pre-compress: generate .svg.br and .svg.gz files and serve them directly.',
    },
    {
      category: 'Illustrator',
      question: 'In what manner can I export SVGs out of Adobe Illustrator keeping bloat to a minimum?',
      answer:
        'Inside Illustrator&#39;s SVG export window, choose "SVG Code" rather than "Use Artboards", deselect "Include Slicing Data", deselect "Include XMP", pick "CSS Properties: Presentation Attributes" (not Style Elements), configure Decimal Places to 2, and deselect "Responsive" (which adds unnecessary viewBox duplication). These configurations yield cleaner exports, but subsequent SVGO optimization remains advised for maximum reduction.',
    },
    {
      category: 'Figma',
      question: 'Does Figma generate clean SVG exports?',
      answer:
        'Figma&#39;s SVG export is generally cleaner than Illustrator or Sketch yet still includes redundant attributes (explicit default values), unnecessary group wrappers, and verbose coordinates. SVGO typically achieves a 15-40% reduction on Figma exports. Enable "Outline text" inside Figma&#39;s SVG export settings to transform text into paths, guaranteeing fonts are embedded (though this expands file size if the text is lengthy). Use "Include "id" attribute" only when you must target specific elements via CSS or JavaScript.',
    },
    {
      category: 'Viewbox',
      question: 'Ought I to preserve the viewBox attribute during optimization?',
      answer:
        'Yes "” always retain the viewBox attribute. SVGO preserves viewBox by default and must not delete it. The viewBox dictates the coordinate system of the SVG and proves vital for responsive SVG scaling. Without viewBox, SVGs render at a fixed pixel dimension and cannot scale via CSS width/height properties. Only the width and height attributes (not viewBox) are optional when embedding SVG within HTML.',
    },
    {
      category: 'Performance',
      question: 'Does SVG complexity impact browser rendering performance?',
      answer:
        'Yes. SVGs containing thousands of path points, complex filters (blur, shadows), numerous gradient stops, or deeply nested groups demand extra CPU time to render and rasterize. For UI icons, optimization rarely impacts rendering performance meaningfully since icons are small. For large, intricate illustrations or SVG-based data visualizations featuring many elements, reduce path complexity by lowering coordinate precision, combining paths, and avoiding CSS filters. Complex SVGs requiring animation benefit greatly from employing CSS transforms on simple shapes instead of animating intricate path data.',
    },
    {
      category: 'Animations',
      question: 'Is SVG optimization capable of impacting SVG animations?',
      answer:
        'SVGO optimizations remain compatible with CSS animations on SVG elements. Nevertheless, aggressive ID cleanup (cleanupIds) can disrupt JavaScript-driven animations referencing element IDs. If your SVG features JavaScript-controlled animations, configure SVGO to retain IDs: { name: "cleanupIds", params: { preserve: ["element-id-to-keep"] } }. SMIL animations (animateTransform, animate elements) are kept by default within SVGO but are deprecated in Chrome; CSS animations are preferred.',
    },
    {
      category: 'Tools',
      question: 'What alternative SVG optimization tools exist besides SVGO?',
      answer:
        'Scour (Python): an older yet still operational Python-based SVG cleaner. ImageMagick: capable of converting SVG to other formats but offers limited SVG-specific optimization. Inkscape command line: inkscape --export-plain-svg output.svg input.svg exports a clean SVG utilizing Inkscape&#39;s optimizer. Online: SVGOMG (jakearchibald.github.io/svgomg) offers a visual SVGO interface. IntelliJ IDEA and WebStorm include built-in SVG compression. For extreme compression, consider transforming simple icons into icon fonts or base64-inlined bitmaps at small scales.',
    },
    {
      category: 'Colors',
      question: 'What color formats does SVG support and which proves most compact?',
      answer:
        'SVG supports: hex (#ff0000 or #f00), rgb(255,0,0), rgba(255,0,0,1), hsl(0,100%,50%), CSS color keywords (red, blue, transparent, etc.). SVGO&#39;s convertColors plugin transforms colors to their briefest representation: rgb() to hex, long hex to short hex (#ffffffâ†’#fff), and occasionally to color keywords (e.g., #000000â†’#000 or sometimes "black"). For SVG files, utilize hex or color keywords for peak compressibility; avoid rgb() and hsl() which are consistently longer.',
    },
    {
      category: 'Icons',
      question: 'Are icon fonts or SVG icons better to use in 2025?',
      answer:
        'Web icons nowadays standardly rely on SVG. Benefits over icon fonts include: superior accessibility (distinct ARIA per icon), higher dependability (icon fonts can fail and show as squares), simpler styling via CSS currentColor for fills, separate sizing, and multi-color icon compatibility. Large icon collections are most efficiently served using SVG sprites. Icon fonts should only be considered when legacy browser support is mandatory or an existing icon font setup is present.',
    },
  ],
};
