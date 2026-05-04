import type { ToolContent } from './index';

export const svgOptimizerContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>SVG Optimizer: Reduce SVG File Size Without Sacrificing Quality</h2>
        <p>
          SVG files exported from design tools like Adobe Illustrator, Sketch, Figma, and Inkscape are
          frequently bloated with unnecessary data: editor-specific metadata, redundant attributes,
          empty groups, unused definitions, verbose coordinate notation, and non-optimized path data.
          A 50KB SVG icon exported from Illustrator might compress to under 5KB with no visual difference
          after optimization. Our SVG Optimizer applies SVGO-compatible optimization passes to reduce
          file size, improve rendering performance, and produce cleaner, more maintainable SVG code.
        </p>
        <p>
          SVG optimization is one of the highest-impact performance wins available for icon-heavy
          web applications. A dashboard with 50 unique SVG icons averaging 15KB each uses 750KB of
          SVG data "” optimizing those icons to an average of 3KB saves 600KB, improving load time
          and reducing bandwidth costs, particularly for users on mobile connections.
        </p>

        <h2>What SVG Exports Contain (And Why They're Bloated)</h2>
        <p>
          Understanding why SVG exports are bloated requires knowing what design tools embed:
        </p>
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
        <p>
          SVGO (SVG Optimizer) is the open-source Node.js tool that powers virtually every SVG
          optimization workflow in the JavaScript ecosystem. Created by Kir Belevich and now maintained
          by the open-source community, SVGO applies a configurable pipeline of optimization plugins,
          each responsible for a specific type of cleanup or transformation. SVGO powers:
        </p>
        <ul>
          <li>svgr (React SVG component generation)</li>
          <li>imagemin-svgo</li>
          <li>webpack, Vite, and Rollup SVG plugins</li>
          <li>SVGOMG (Jake Archibald's web UI for SVGO)</li>
          <li>Squoosh (for SVG files)</li>
          <li>vite-svg-loader, @svgr/webpack</li>
        </ul>
        <p>
          SVGO is configured via an <code>svgo.config.js</code> file or programmatically:
        </p>
        <pre><code>{"import { optimize } from 'svgo';\n\nconst result = optimize(svgString, {\n  plugins: [\n    'removeDoctype',\n    'removeXMLProcInst',\n    'removeComments',\n    'removeMetadata',\n    'removeEditorsNSData',\n    'cleanupAttrs',\n    'mergeStyles',\n    'inlineStyles',\n    {\n      name: 'convertColors',\n      params: { shorthex: true }\n    },\n    'removeUselessDefs',\n    'cleanupNumericValues',\n    'convertShapeToPath',\n    'mergePaths',\n    'removeEmptyContainers',\n  ]\n});\n\nconsole.log(result.data);"}</code></pre>

        <h2>Key SVGO Optimization Plugins</h2>
        <p>
          SVGO's optimization pipeline consists of individual plugins, each performing a focused task:
        </p>
        <h3>Metadata and Documentation Removal</h3>
        <ul>
          <li><strong>removeDoctype</strong>: removes the DOCTYPE declaration (<code>{'<!DOCTYPE svg PUBLIC ...>'}</code>). Not needed in HTML5 documents.</li>
          <li><strong>removeXMLProcInst</strong>: removes the XML processing instruction (<code>{'<?xml version="1.0"?>'}</code>). Required for standalone XML but unnecessary when SVG is embedded in HTML.</li>
          <li><strong>removeComments</strong>: removes XML comments. These are metadata for humans, not rendering.</li>
          <li><strong>removeMetadata</strong>: removes <code>{'<metadata>'}</code> elements (XMP metadata, creator information).</li>
          <li><strong>removeEditorsNSData</strong>: removes proprietary namespace data from Illustrator, Inkscape, and other editors (<code>ai:</code>, <code>inkscape:</code>, <code>sodipodi:</code> namespaced attributes).</li>
          <li><strong>removeTitle</strong>: removes <code>{'<title>'}</code> elements (document/layer names from the editor). Note: titles provide accessibility "” only remove if you don't need them.</li>
          <li><strong>removeDesc</strong>: removes <code>{'<desc>'}</code> elements. Same accessibility caveat as removeTitle.</li>
        </ul>
        <h3>Attribute and Style Cleanup</h3>
        <ul>
          <li><strong>cleanupAttrs</strong>: removes newlines and extra spaces in attribute values.</li>
          <li><strong>mergeStyles</strong>: merges multiple <code>{'<style>'}</code> elements into one.</li>
          <li><strong>inlineStyles</strong>: converts CSS class-based styles to inline style attributes for better optimization by later plugins.</li>
          <li><strong>minifyStyles</strong>: minifies CSS in <code>{'<style>'}</code> blocks using CSSO.</li>
          <li><strong>removeUselessStrokeAndFill</strong>: removes stroke or fill attributes that have no visible effect (e.g., stroke="none" with no stroke-width, fill="none" with no fill).</li>
          <li><strong>removeUnknownsAndDefaults</strong>: removes attributes that are unknown to SVG or have their default value (e.g., explicit fill="black" when black is the default).</li>
          <li><strong>removeNonInheritableGroupAttrs</strong>: removes presentational attributes from groups when they would be inherited by children anyway.</li>
        </ul>
        <h3>Numeric and Coordinate Optimization</h3>
        <ul>
          <li><strong>cleanupNumericValues</strong>: rounds coordinate values to reduce decimal places (e.g., 123.456789 â†’ 123.46). The precision parameter controls how aggressively values are rounded.</li>
          <li><strong>convertPathData</strong>: converts path commands to their shortest equivalent forms, removes redundant commands, rounds coordinates, and converts absolute commands to relative (or vice versa) when shorter.</li>
          <li><strong>convertTransform</strong>: converts and merges transform attribute matrices, collapsing multiple transforms into a single matrix when beneficial.</li>
          <li><strong>removeUselessDefs</strong>: removes elements from <code>{'<defs>'}</code> that are not referenced anywhere in the document.</li>
        </ul>
        <h3>Shape and Structure Optimization</h3>
        <ul>
          <li><strong>convertShapeToPath</strong>: converts simple shapes (<code>{'<rect>'}</code>, <code>{'<circle>'}</code>, <code>{'<ellipse>'}</code>, <code>{'<line>'}</code>, <code>{'<polyline>'}</code>, <code>{'<polygon>'}</code>) to equivalent <code>{'<path>'}</code> elements when paths produce shorter output.</li>
          <li><strong>mergePaths</strong>: merges multiple adjacent path elements with the same visual style into a single <code>d</code> attribute using the "M" move command.</li>
          <li><strong>removeEmptyContainers</strong>: removes empty <code>{'<g>'}</code>, <code>{'<defs>'}</code>, and other container elements.</li>
          <li><strong>collapseGroups</strong>: removes group elements when the group serves no purpose (no attributes, single child).</li>
        </ul>
        <h3>Color Optimization</h3>
        <ul>
          <li><strong>convertColors</strong>: converts color values to their shortest representation "” RGB to hex (<code>rgb(255,0,0)</code> â†’ <code>#ff0000</code>), long hex to short hex (<code>#ffffff</code> â†’ <code>#fff</code>), and named color keywords where shorter.</li>
        </ul>

        <h2>Typical Size Reductions</h2>
        <p>
          SVG optimization savings depend heavily on the source tool and complexity:
        </p>
        <ul>
          <li><strong>Adobe Illustrator icons</strong>: typically 50-80% size reduction. Illustrator's SVG format is exceptionally verbose.</li>
          <li><strong>Sketch icons</strong>: typically 30-60% size reduction.</li>
          <li><strong>Figma icons</strong>: typically 15-40% size reduction. Figma produces cleaner SVG than Illustrator but still has room for optimization.</li>
          <li><strong>Hand-coded SVG</strong>: 5-20% reduction. Already relatively clean, mainly coordinate rounding and whitespace removal.</li>
          <li><strong>Complex illustrations</strong>: 20-50% reduction depending on path complexity and metadata bloat.</li>
        </ul>
        <p>
          Gzip/Brotli compression applied after SVGO optimization often brings total delivery size down
          by another 70-85%, since SVG text compresses exceptionally well. An SVG that starts at 50KB,
          compresses to 10KB after SVGO, then compresses to under 2KB after gzip.
        </p>

        <h2>What NOT to Remove: Accessibility in SVGs</h2>
        <p>
          Aggressive optimization can harm accessibility. Before using SVGO with all plugins enabled,
          understand what should be preserved:
        </p>
        <ul>
          <li>
            <strong><code>{'<title>'}</code> elements</strong>: provide accessible names for SVG icons when they are not accompanied by visible text. Screen readers read the title as the element's accessible name. If an SVG icon is used without alt text or aria-label, removing the title makes it inaccessible. Configure removeTitle to false for icons used standalone.
          </li>
          <li>
            <strong><code>{'<desc>'}</code> elements</strong>: provide additional descriptions for screen readers. Keep them for complex infographics or illustrations where context matters.
          </li>
          <li>
            <strong><code>role</code> attributes</strong>: <code>role="img"</code> on the SVG element helps screen readers correctly identify SVG as an image. SVGO's removeUnknownsAndDefaults may strip custom attributes "” configure it to preserve role.
          </li>
          <li>
            <strong><code>aria-label</code> and <code>aria-labelledby</code></strong>: always preserve ARIA attributes.
          </li>
        </ul>
        <p>
          The recommended pattern for accessible SVG icons is:
        </p>
        <pre><code>{'<svg role="img" aria-labelledby="icon-title">\n  <title id="icon-title">Download</title>\n  <!-- paths -->\n</svg>'}</code></pre>

        <h2>SVG Optimization in Build Pipelines</h2>
        <h3>Vite</h3>
        <pre><code>{"// vite.config.ts\nimport { defineConfig } from 'vite';\nimport svgr from 'vite-plugin-svgr';\n\nexport default defineConfig({\n  plugins: [\n    svgr({\n      svgrOptions: {\n        svgoConfig: {\n          plugins: ['preset-default']\n        }\n      }\n    })\n  ]\n});"}</code></pre>
        <h3>webpack</h3>
        <pre><code>{"// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.svg$/,\n        use: [\n          {\n            loader: '@svgr/webpack',\n            options: {\n              svgoConfig: {\n                plugins: ['preset-default']\n            }\n          }\n        }\n      }\n    ]\n  }\n};"}</code></pre>
        <h3>CLI Batch Optimization</h3>
        <pre><code>{'# Install SVGO\nnpm install -g svgo\n\n# Optimize single file\nsvgo icon.svg -o icon.min.svg\n\n# Optimize directory\nsvgo --folder src/icons --output dist/icons\n\n# With config file\nsvgo icon.svg --config svgo.config.js\n\n# Show stats\nsvgo icon.svg --pretty'}</code></pre>

        <h2>SVG Sprites and Symbol Patterns</h2>
        <p>
          When an application uses many icons, the SVG sprite pattern is more efficient than individual
          files. All icons are combined into a single SVG file using <code>{'<symbol>'}</code> elements,
          each with an <code>id</code> attribute. Icons are referenced from HTML with{' '}
          <code>{'<use href="#icon-id">'}</code>:
        </p>
        <pre><code>{'<!-- sprite.svg -->\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n  <symbol id="icon-download" viewBox="0 0 24 24">\n    <path d="M12 16l-6-6h4V4h4v6h4l-6 6z"/>\n  </symbol>\n  <symbol id="icon-upload" viewBox="0 0 24 24">\n    <path d="M12 8l6 6h-4v6H10v-6H6l6-6z"/>\n  </symbol>\n</svg>\n\n<!-- Usage -->\n<svg><use href="sprite.svg#icon-download"/></svg>'}</code></pre>
        <p>
          SVG sprites are optimized as a whole: SVGO can process the entire sprite file, deduplicating
          shared path elements, merging common styles, and removing redundant data across all symbols.
        </p>

        <h2>Safe Optimization vs Aggressive Optimization</h2>
        <p>
          SVGO's <code>preset-default</code> configuration applies a carefully selected set of safe
          transformations that reliably reduce file size without causing visual changes. For even smaller
          files, aggressive optimization options are available but require visual verification:
        </p>
        <ul>
          <li>
            <strong>Rounding precision</strong>: reducing coordinate precision from 3 to 1 decimal place
            can cause visible artifacts on complex curved paths. Test at all sizes before reducing precision
            aggressively.
          </li>
          <li>
            <strong>convertShapeToPath</strong>: converting shapes to paths is lossless but may make future
            editing harder if the SVG needs to be re-imported into a design tool.
          </li>
          <li>
            <strong>cleanupIds</strong>: generates minimal IDs (<code>a</code>, <code>b</code>, <code>c</code>)
            instead of descriptive ones. Fine for standalone icons; problematic if the SVG uses named anchors
            or JavaScript targets element IDs.
          </li>
        </ul>

        <h2>How to Use This SVG Optimizer</h2>
        <p>
          Paste or upload your SVG file. Configure which optimization plugins to apply "” the default
          settings use SVGO's preset-default which is safe for most use cases. Toggle individual plugins
          to enable more aggressive or more conservative optimization. The tool shows the optimized SVG
          output, the compression ratio, and a size comparison. Copy the optimized SVG or download it.
          Preview the output to visually verify no quality was lost, and use the diff view to see exactly
          which attributes and elements were removed.
        </p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'Why are SVG files exported from design tools so large?',
      answer:
        'Design tools embed extensive metadata in SVG exports: editor-specific namespace declarations (Illustrator&#39;s ai: and i: namespaces), XMP metadata with creation dates and software versions, layer names as title elements, redundant group wrappers mirroring the layer structure, unused color definitions, verbose floating-point coordinates, and explicit attributes that simply repeat the SVG default values. A simple icon might have 5Ã— more metadata than actual path data.',
    },
    {
      category: 'Basics',
      question: 'How much file size reduction can I expect from SVG optimization?',
      answer:
        'Typical reductions: Adobe Illustrator exports 50-80%, Sketch 30-60%, Figma 15-40%, hand-coded SVG 5-20%. Results vary by complexity and amount of metadata. After SVGO optimization, gzip/Brotli compression adds another 70-85% reduction since SVG text compresses extremely well. A 50KB Illustrator export might reach 10KB after SVGO and under 2KB after gzip.',
    },
    {
      category: 'SVGO',
      question: 'What is SVGO and how does it work?',
      answer:
        'SVGO (SVG Optimizer) is the standard open-source Node.js tool for SVG optimization. It parses the SVG into an AST (abstract syntax tree) and applies a configurable pipeline of plugins, each performing a focused optimization: removing metadata, collapsing empty groups, rounding coordinate values, merging paths, converting colors to shorter forms, and more. SVGO is used by webpack, Vite, SVGR, and virtually every JavaScript build tool that handles SVGs.',
    },
    {
      category: 'SVGO',
      question: 'What is SVGO\'s preset-default?',
      answer:
        'preset-default is SVGO&#39;s built-in configuration that applies a carefully selected set of safe transformations. It includes: removeDoctype, removeXMLProcInst, removeComments, removeMetadata, removeEditorsNSData, cleanupAttrs, mergeStyles, inlineStyles, cleanupNumericValues, convertPathData, convertTransform, removeEmptyContainers, collapseGroups, mergePaths, convertColors, and more. These transforms reliably reduce file size without causing visual changes.',
    },
    {
      category: 'Accessibility',
      question: 'Does SVG optimization affect accessibility?',
      answer:
        'It can, if configured incorrectly. SVGO&#39;s removeTitle plugin removes <title> elements used as accessible names for screen readers. The removeDesc plugin removes <desc> elements that provide extended descriptions. For icons used without visible text labels, keep <title> elements. For decorative icons (aria-hidden="true"), titles and descriptions can safely be removed. Always configure removeTitle and removeDesc explicitly based on your accessibility requirements.',
    },
    {
      category: 'Accessibility',
      question: 'How do I make an optimized SVG accessible?',
      answer:
        'For standalone SVG icons (used without surrounding text): add role="img" to the svg element, include a <title id="icon-name">Label</title> as the first child, and add aria-labelledby="icon-name" to the svg element. Configure SVGO to preserve title elements. For decorative icons accompanying visible text: add aria-hidden="true" to the svg element and remove the title for smaller file size.',
    },
    {
      category: 'Build',
      question: 'How do I add SVG optimization to my Vite build?',
      answer:
        'Install vite-plugin-svgr or vite-svg-loader. Both use SVGO internally. Configure SVGO options in the plugin settings: svgrOptions: { svgoConfig: { plugins: ["preset-default"] } }. For custom SVGO configuration, create an svgo.config.js file in your project root "” SVGO picks it up automatically. Run all optimizations at build time, not at runtime, to keep the production bundle small.',
    },
    {
      category: 'Build',
      question: 'How do I batch optimize a folder of SVG files from the command line?',
      answer:
        'Install SVGO globally: npm install -g svgo. Optimize a directory: svgo --folder src/icons --output dist/icons. Process files in place: svgo src/icons/*.svg. With a config file: svgo src/icons/*.svg --config svgo.config.js. Show statistics: svgo icon.svg --pretty. The CLI is ideal for one-time migration optimization of an existing icon set.',
    },
    {
      category: 'React',
      question: 'How does SVGR use SVGO?',
      answer:
        'SVGR transforms SVG files into React components. It uses SVGO as its first pass to clean and optimize the SVG, then applies JSX transformations (converting SVG attributes to JSX equivalents like classâ†’className, forâ†’htmlFor). SVGR&#39;s svgoConfig option accepts standard SVGO configuration. SVGR is used by Create React App, Next.js&#39;s default SVG import behavior, @svgr/webpack, and most React build configurations.',
    },
    {
      category: 'Formats',
      question: 'What is the difference between inline SVG, external SVG src, and SVG data URIs?',
      answer:
        'Inline SVG: the SVG markup is embedded directly in the HTML. Allows CSS styling, JavaScript access, and no extra HTTP request. External SVG (src/href): served as a separate file, can be cached by the browser, simpler HTML. SVG data URI: the SVG is base64-encoded and inlined in an href or background-image "” useful for CSS and img tags but increases file size by ~33% due to base64 encoding. For icons, inline SVG or an SVG sprite are usually most efficient.',
    },
    {
      category: 'Plugins',
      question: 'Which SVGO plugins are safe to enable by default?',
      answer:
        'Safe plugins (in preset-default): removeDoctype, removeXMLProcInst, removeComments, removeMetadata, removeEditorsNSData, cleanupAttrs, mergeStyles, inlineStyles, cleanupNumericValues (precisionâ‰¥2), convertPathData, convertTransform, removeEmptyContainers, collapseGroups, convertColors, removeUselessDefs, removeUselessStrokeAndFill. Use caution with: cleanupIds (breaks external ID references), removeTitle/removeDesc (accessibility), very low coordinate precision.',
    },
    {
      category: 'Plugins',
      question: 'What does the convertPathData plugin do?',
      answer:
        'convertPathData transforms SVG path data (d attribute) into the most compact equivalent form. It converts absolute commands to relative when shorter (or vice versa), removes redundant commands (like closing a path with Z then immediately starting a new subpath with M at the same point), collapses consecutive commands of the same type, rounds coordinate values to the specified precision, and converts implicit line-to commands. It typically produces 30-50% shorter path data.',
    },
    {
      category: 'Quality',
      question: 'Can SVG optimization cause visible quality degradation?',
      answer:
        'With conservative settings (preset-default), visible quality loss is extremely rare. The main risk is aggressive coordinate rounding: reducing precision from 3 to 1 decimal place can cause slight jaggedness on complex curved paths. Test optimized SVGs at all intended display sizes, especially small sizes where rounding errors are more visible. The merger of very close path points can also cause subtle shape changes in intricate illustrations.',
    },
    {
      category: 'Sprites',
      question: 'What is an SVG sprite and how does optimization apply to it?',
      answer:
        'An SVG sprite is a single SVG file containing multiple icons as <symbol> elements, each with a unique id. Icons are referenced with <use href="sprite.svg#icon-id">. SVGO can optimize an entire sprite file: removing metadata across all symbols, deduplicating shared style definitions, and compressing all path data at once. This is more efficient than optimizing icons individually because shared styles and definitions are only stored once.',
    },
    {
      category: 'Compression',
      question: 'Should I also gzip/Brotli compress SVG files?',
      answer:
        'Yes "” SVG text compresses exceptionally well with Brotli or gzip because it contains repetitive structure (XML attributes, coordinate patterns). A 10KB SVGO-optimized SVG typically compresses to 1.5-2.5KB with Brotli. Configure your web server to compress SVG files: add image/svg+xml to the list of compressible MIME types. For static hosting (Netlify, Vercel), this is usually automatic. You can also pre-compress: create .svg.br and .svg.gz files and serve them directly.',
    },
    {
      category: 'Illustrator',
      question: 'How do I export SVGs from Adobe Illustrator with minimal bloat?',
      answer:
        'In Illustrator&#39;s SVG export dialog, select "SVG Code" not "Use Artboards", uncheck "Include Slicing Data", uncheck "Include XMP", select "CSS Properties: Presentation Attributes" (not Style Elements), set Decimal Places to 2, and uncheck "Responsive" (adds unnecessary viewBox duplication). These settings produce cleaner exports, but SVGO optimization afterward is still recommended for maximum reduction.',
    },
    {
      category: 'Figma',
      question: 'Does Figma produce clean SVG exports?',
      answer:
        'Figma&#39;s SVG export is generally cleaner than Illustrator or Sketch but still contains redundant attributes (explicit default values), unnecessary group wrappers, and verbose coordinates. SVGO typically achieves 15-40% reduction on Figma exports. Enable "Outline text" in Figma&#39;s SVG export settings to convert text to paths, ensuring fonts are embedded (though this increases file size if text is long). Use "Include "id" attribute" only if you need to target specific elements with CSS or JavaScript.',
    },
    {
      category: 'Viewbox',
      question: 'Should I preserve the viewBox attribute during optimization?',
      answer:
        'Yes "” always preserve the viewBox attribute. SVGO preserves viewBox by default and should not remove it. The viewBox defines the coordinate system of the SVG and is essential for responsive SVG scaling. Without viewBox, SVGs render at a fixed pixel size and cannot be scaled with CSS width/height properties. Only the width and height attributes (not viewBox) are optional when embedding SVG in HTML.',
    },
    {
      category: 'Performance',
      question: 'Does SVG complexity affect browser rendering performance?',
      answer:
        'Yes. SVGs with thousands of path points, complex filters (blur, shadows), many gradient stops, or deeply nested groups require more CPU time to render and rasterize. For UI icons, optimization rarely affects rendering performance meaningfully since icons are small. For large, complex illustrations or SVG-based data visualizations with many elements, reduce path complexity by decreasing coordinate precision, merging paths, and avoiding CSS filters. Complex SVGs that need animation benefit significantly from using CSS transforms on simple shapes rather than animating complex path data.',
    },
    {
      category: 'Animations',
      question: 'Does SVG optimization affect SVG animations?',
      answer:
        'SVGO optimizations are compatible with CSS animations on SVG elements. However, aggressive ID cleanup (cleanupIds) can break JavaScript-driven animations that reference element IDs. If your SVG has JavaScript-controlled animations, configure SVGO to preserve IDs: { name: "cleanupIds", params: { preserve: ["element-id-to-keep"] } }. SMIL animations (animateTransform, animate elements) are preserved by default in SVGO but are deprecated in Chrome; CSS animations are preferred.',
    },
    {
      category: 'Tools',
      question: 'What other SVG optimization tools exist besides SVGO?',
      answer:
        'Scour (Python): older but still functional Python-based SVG cleaner. ImageMagick: can convert SVG to other formats but limited SVG-specific optimization. Inkscape command line: inkscape --export-plain-svg output.svg input.svg exports a clean SVG using Inkscape&#39;s optimizer. Online: SVGOMG (jakearchibald.github.io/svgomg) provides a visual SVGO interface. IntelliJ IDEA and WebStorm have built-in SVG compression. For extreme compression, consider converting simple icons to icon fonts or base64-inlined bitmap at small sizes.',
    },
    {
      category: 'Colors',
      question: 'What color formats does SVG support and which is most compact?',
      answer:
        'SVG supports: hex (#ff0000 or #f00), rgb(255,0,0), rgba(255,0,0,1), hsl(0,100%,50%), CSS color keywords (red, blue, transparent, etc.). SVGO&#39;s convertColors plugin converts colors to their shortest representation: rgb() to hex, long hex to short hex (#ffffffâ†’#fff), and sometimes to color keywords (e.g., #000000â†’#000 or sometimes "black"). For SVG files, use hex or color keywords for maximum compressibility; avoid rgb() and hsl() which are always longer.',
    },
    {
      category: 'Icons',
      question: 'Should I use SVG icons or icon fonts in 2025?',
      answer:
        'SVG icons are the modern standard for web icons. Advantages over icon fonts: better accessibility (each icon is a separate element with explicit ARIA), more reliable rendering (icon fonts can fail to load, display as squares), easier theming (CSS currentColor for fill), independent sizing, and support for multicolor icons. SVG sprites are the most efficient delivery mechanism for large icon sets. Only consider icon fonts if you need to support very old browsers or have an existing icon font investment.',
    },
  ],
};
