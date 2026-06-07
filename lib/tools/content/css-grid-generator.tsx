import type { ToolContent } from './index';

export const cssGridGeneratorContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>CSS Grid Generator: Build Powerful Two-Dimensional Layouts with Precision</h2>
        <p>
          CSS Grid Layout is the most powerful layout system available in CSS. Unlike any layout method that
          preceded it, CSS Grid is explicitly two-dimensional "” it can handle both columns and rows
          simultaneously, giving you precise control over how elements are placed, sized, and aligned across
          a complete layout surface. Our CSS Grid Generator provides a visual interface for defining grid
          templates, placing items, and copying production-ready CSS instantly.
        </p>
        <p>
          Before CSS Grid achieved stable cross-browser support around 2017, building page-level layouts
          required float-based frameworks (Bootstrap, Foundation), table-based hacks, or painful combinations
          of positioning and negative margins. These approaches required rigid HTML structure and often
          made responsive design needlessly complex. CSS Grid changed everything: with a few declarations
          on a container, the browser handles complex placement that would have previously required
          JavaScript measurement.
        </p>

        <h2>The Grid Model: Containers, Lines, Tracks, and Cells</h2>
        <p>
          Understanding CSS Grid requires familiarity with its core vocabulary:
        </p>
        <ul>
          <li>
            <strong>Grid container</strong>: the element with <code>display: grid</code> or{' '}
            <code>display: inline-grid</code>. Its immediate children become grid items.
          </li>
          <li>
            <strong>Grid lines</strong>: the dividing lines that make up the structure of the grid. Horizontal
            lines divide rows; vertical lines divide columns. Grid lines are numbered from 1 to n+1 where
            n is the number of tracks. They can also be named.
          </li>
          <li>
            <strong>Grid tracks</strong>: the space between two adjacent grid lines "” essentially a row or
            column. Tracks are defined by <code>grid-template-columns</code> and{' '}
            <code>grid-template-rows</code>.
          </li>
          <li>
            <strong>Grid cell</strong>: the smallest unit of a grid "” the intersection of one row track and
            one column track. A grid item placed in a single cell occupies one cell.
          </li>
          <li>
            <strong>Grid area</strong>: a rectangular region of the grid defined by four grid lines. A grid
            item can span multiple cells to occupy a larger area.
          </li>
        </ul>

        <h2>Defining the Grid Template</h2>
        <h3>grid-template-columns and grid-template-rows</h3>
        <p>
          These two properties define the track sizes for columns and rows respectively. Each value in the
          space-separated list defines one track:
        </p>
        <pre><code>{'.container {\n  display: grid;\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: auto 200px auto;\n}'}</code></pre>
        <p>
          This creates a three-column grid where the first column is a fixed 200px, and the remaining two
          columns share the remaining space equally using the <code>fr</code> unit. Rows are defined with
          an auto-height first and last row (sized to content) and a fixed 200px middle row.
        </p>
        <h3>The fr Unit</h3>
        <p>
          The <code>fr</code> (fraction) unit is unique to CSS Grid and represents a fraction of the
          available free space in the grid container. It is calculated after all fixed-size tracks (pixels,
          percentages, auto) have been given their space. A column with <code>2fr</code> receives twice as
          much free space as a column with <code>1fr</code>.
        </p>
        <pre><code>{'grid-template-columns: 1fr 2fr 1fr;\n/* First column: 25% of free space\n   Second column: 50% of free space\n   Third column: 25% of free space */'}</code></pre>
        <p>
          The <code>fr</code> unit is superior to percentages for track sizing because it respects gap
          spacing "” percentages would include the gap widths in their calculation, causing overflow.
        </p>
        <h3>The repeat() Function</h3>
        <p>
          The <code>repeat()</code> function prevents repetitive track definitions:
        </p>
        <pre><code>{'/* Without repeat */\ngrid-template-columns: 1fr 1fr 1fr 1fr;\n\n/* With repeat */\ngrid-template-columns: repeat(4, 1fr);\n\n/* Mixed */\ngrid-template-columns: 200px repeat(3, 1fr) 200px;'}</code></pre>
        <h3>auto-fill and auto-fit: Intrinsically Responsive Grids</h3>
        <p>
          The most powerful use of <code>repeat()</code> combines it with <code>auto-fill</code> or{' '}
          <code>auto-fit</code> and the <code>minmax()</code> function to create grids that automatically
          add or remove columns based on available space:
        </p>
        <pre><code>{'grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));'}</code></pre>
        <p>
          This creates as many 280px-minimum columns as fit in the container, with each column growing
          to fill remaining space. When the container shrinks, columns wrap automatically. The result is
          a fully responsive grid with no media queries.
        </p>
        <p>
          The difference between <code>auto-fill</code> and <code>auto-fit</code>:
        </p>
        <ul>
          <li>
            <strong>auto-fill</strong>: creates as many columns as possible, even if some are empty. Empty
            column tracks are preserved in the grid structure, preventing existing items from growing into them.
          </li>
          <li>
            <strong>auto-fit</strong>: collapses empty column tracks to zero width. Existing items can then
            grow (via <code>1fr</code>) to fill the entire container. For most responsive card grids, {' '}
            <code>auto-fit</code> is preferred because items stretch to fill the row on partially-filled rows.
          </li>
        </ul>
        <h3>minmax(): Flexible Track Sizing with Constraints</h3>
        <p>
          <code>minmax(min, max)</code> defines a track's size as a range. The track is at least{' '}
          <code>min</code> wide and at most <code>max</code> wide:
        </p>
        <pre><code>{'grid-template-columns: minmax(200px, 1fr) minmax(400px, 3fr);\n/* Column 1: between 200px and 1fr\n   Column 2: between 400px and 3fr */'}</code></pre>
        <p>
          You can use <code>min-content</code>, <code>max-content</code>, <code>auto</code>, and{' '}
          <code>fit-content(value)</code> as min or max values for intrinsic sizing. <code>auto</code> as
          a max behaves like <code>max-content</code> but participates in <code>fr</code> distribution.
        </p>

        <h2>Placing Grid Items</h2>
        <h3>Auto Placement</h3>
        <p>
          By default, grid items are auto-placed into the grid following the auto-placement algorithm:
          items fill cells in row order (left to right, top to bottom) unless explicitly placed. The
          <code>grid-auto-flow</code> property controls this algorithm:
        </p>
        <ul>
          <li><strong>row</strong> (default): fills rows first, adding new rows as needed.</li>
          <li><strong>column</strong>: fills columns first, adding new columns as needed.</li>
          <li><strong>dense</strong>: can be combined with <code>row</code> or <code>column</code> "”
          the algorithm backtracks to fill holes left by large items. Useful for image galleries where
          items have different sizes but you want a compact layout.</li>
        </ul>
        <h3>grid-column and grid-row: Explicit Placement</h3>
        <p>
          Grid items can be explicitly placed using grid line numbers:
        </p>
        <pre><code>{'.item {\n  grid-column: 1 / 3;  /* from line 1 to line 3 (spans 2 columns) */\n  grid-row: 2 / 4;     /* from line 2 to line 4 (spans 2 rows) */\n}\n\n/* Span keyword */\n.item {\n  grid-column: 1 / span 2; /* start at line 1, span 2 columns */\n  grid-row: 2 / span 2;    /* start at line 2, span 2 rows */\n}\n\n/* Negative line numbers count from the end */\n.full-width {\n  grid-column: 1 / -1; /* spans all columns */\n}'}</code></pre>
        <h3>Named Grid Lines</h3>
        <p>
          Grid lines can be given names in square brackets for more readable placement:
        </p>
        <pre><code>{'.container {\n  grid-template-columns:\n    [sidebar-start] 250px\n    [sidebar-end content-start] 1fr\n    [content-end];\n}\n.sidebar { grid-column: sidebar-start / sidebar-end; }\n.main { grid-column: content-start / content-end; }'}</code></pre>
        <h3>grid-template-areas: Named Regions for Visual Layout</h3>
        <p>
          One of CSS Grid's most impressive features is <code>grid-template-areas</code>, which lets you
          define the layout visually as an ASCII map of named regions:
        </p>
        <pre><code>{'.container {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 60px 1fr 40px;\n  grid-template-areas:\n    "header  header"\n    "sidebar main"\n    "footer  footer";\n  height: 100vh;\n}\nheader { grid-area: header; }\n.sidebar { grid-area: sidebar; }\nmain { grid-area: main; }\nfooter { grid-area: footer; }'}</code></pre>
        <p>
          Each quoted string represents a row. Each word in the string represents a column cell. Repeating
          a name causes the item to span those cells. Use a period (<code>.</code>) for empty cells. This
          technique makes complex page layouts self-documenting "” you can read the structure directly
          from the CSS.
        </p>

        <h2>Alignment in CSS Grid</h2>
        <p>
          CSS Grid has two sets of alignment properties: those that align the grid tracks within the
          container, and those that align items within their grid areas.
        </p>
        <h3>align-content and justify-content</h3>
        <p>
          These properties align the entire grid within the container when the grid is smaller than the
          container (i.e., when there is free space in the grid container):
        </p>
        <ul>
          <li><code>justify-content</code>: aligns grid tracks along the inline (horizontal) axis.</li>
          <li><code>align-content</code>: aligns grid tracks along the block (vertical) axis.</li>
        </ul>
        <p>
          Both accept <code>start</code>, <code>end</code>, <code>center</code>, <code>space-between</code>,{' '}
          <code>space-around</code>, <code>space-evenly</code>, and <code>stretch</code>.
        </p>
        <h3>align-items and justify-items</h3>
        <p>
          These properties set the default alignment for all grid items within their respective grid areas:
        </p>
        <ul>
          <li><code>justify-items</code>: aligns items along the inline (horizontal) axis within their cell.</li>
          <li><code>align-items</code>: aligns items along the block (vertical) axis within their cell.</li>
        </ul>
        <p>
          The default value for both is <code>stretch</code>, causing items to fill their grid area.
          Setting <code>justify-items: center</code> centers all items horizontally within their cells.
        </p>
        <h3>align-self and justify-self: Per-Item Overrides</h3>
        <p>
          Individual items can override the container's alignment with <code>align-self</code> and{' '}
          <code>justify-self</code>. The <code>place-self</code> shorthand combines both:{' '}
          <code>place-self: center end</code> means <code>align-self: center; justify-self: end</code>.
        </p>
        <h3>place-content and place-items Shorthands</h3>
        <p>
          <code>place-content</code> shorthand: <code>place-content: center space-between</code> is
          equivalent to <code>align-content: center; justify-content: space-between</code>.{' '}
          <code>place-items</code> shorthand: <code>place-items: center</code> sets both{' '}
          <code>align-items</code> and <code>justify-items</code> to <code>center</code>.
        </p>

        <h2>Implicit Grid: grid-auto-rows and grid-auto-columns</h2>
        <p>
          When grid items are placed outside the explicitly defined grid "” either by auto-placement running
          out of explicit tracks, or by explicit placement beyond the defined lines "” the browser creates
          implicit tracks. The size of these implicit tracks is controlled by <code>grid-auto-rows</code>
          and <code>grid-auto-columns</code>:
        </p>
        <pre><code>{'.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(100px, auto);\n}'}</code></pre>
        <p>
          This ensures that all auto-generated rows are at least 100px tall but expand to fit content.
          Without this, implicit rows would be sized by the <code>auto</code> keyword (which sizes to
          content), potentially creating very short rows for small items.
        </p>

        <h2>gap, row-gap, column-gap in CSS Grid</h2>
        <p>
          The <code>gap</code> property (originally <code>grid-gap</code>) adds gutters between grid tracks:
        </p>
        <pre><code>{'.container {\n  gap: 24px;          /* equal row and column gap */\n  gap: 16px 24px;     /* row-gap column-gap */\n  row-gap: 16px;\n  column-gap: 24px;\n}'}</code></pre>
        <p>
          Like Flexbox, <code>gap</code> only applies between tracks "” not at the outer edges of the grid.
          This makes it superior to padding on items for consistent gutters. The <code>fr</code> unit
          respects <code>gap</code> in its calculations, so <code>repeat(3, 1fr)</code> with{' '}
          <code>gap: 24px</code> correctly distributes the remaining space after gaps are accounted for.
        </p>

        <h2>Subgrid: Nested Grids Aligned to the Parent</h2>
        <p>
          CSS Subgrid, now supported in all major browsers (Chrome 117+, Firefox 71+, Safari 16+), allows
          a grid item that is itself a grid container to use the parent grid's tracks rather than defining
          its own. This solves the classic problem of nested grid items not aligning to the outer grid:
        </p>
        <pre><code>{'.card {\n  display: grid;\n  grid-template-rows: subgrid;\n  grid-row: span 3;\n}'}</code></pre>
        <p>
          With subgrid, all cards in a row of cards can share the same row tracks from the parent grid,
          ensuring that card titles, body text, and CTAs align perfectly across all cards regardless of
          content length "” without any JavaScript height equalization.
        </p>

        <h2>Common CSS Grid Layout Patterns</h2>
        <h3>Classic Page Layout</h3>
        <pre><code>{'body {\n  display: grid;\n  grid-template-areas:\n    "header"\n    "main"\n    "footer";\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}'}</code></pre>
        <h3>Holy Grail Layout (Header, Footer, Two Sidebars, Main Content)</h3>
        <pre><code>{'.app {\n  display: grid;\n  grid-template-areas:\n    "header header  header"\n    "left   main    right"\n    "footer footer  footer";\n  grid-template-columns: 220px 1fr 220px;\n  grid-template-rows: 60px 1fr 40px;\n  min-height: 100vh;\n}'}</code></pre>
        <h3>Responsive Image Gallery</h3>
        <pre><code>{'.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-auto-rows: 200px;\n  gap: 8px;\n}\n.featured {\n  grid-column: span 2;\n  grid-row: span 2;\n}'}</code></pre>
        <h3>Dashboard Layout</h3>
        <pre><code>{'.dashboard {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 16px;\n}\n.widget-wide { grid-column: span 8; }\n.widget-narrow { grid-column: span 4; }\n.widget-full { grid-column: span 12; }'}</code></pre>

        <h2>CSS Grid in Practice: Media Queries and Responsive Design</h2>
        <p>
          CSS Grid excels at responsive design. Layout changes that required complete HTML restructuring
          and complex float-based overrides can now be expressed as simple media query changes to the
          grid template:
        </p>
        <pre><code>{'.layout {\n  display: grid;\n  grid-template-areas:\n    "sidebar"\n    "main"\n    "aside";\n  grid-template-columns: 1fr;\n}\n@media (min-width: 768px) {\n  .layout {\n    grid-template-areas: "sidebar main aside";\n    grid-template-columns: 220px 1fr 180px;\n  }\n}'}</code></pre>
        <p>
          The same HTML structure works across all screen sizes "” the layout adapts entirely through CSS.

        </p>

        <h2>CSS Grid vs Flexbox: Detailed Comparison</h2>
        <p>
          The decision between Grid and Flexbox is fundamental to CSS architecture:
        </p>
        <ul>
          <li>
            <strong>Dimensionality</strong>: Flexbox works in one dimension (a row or a column). Grid works
            in two dimensions (rows and columns simultaneously). If items must align across both axes,
            use Grid.
          </li>
          <li>
            <strong>Content-first vs layout-first</strong>: Flexbox is content-first "” the layout is driven
            by the items' sizes. Grid is layout-first "” the tracks are defined independently of item sizes,
            and items are placed within them.
          </li>
          <li>
            <strong>Explicit structure</strong>: Grid requires defining the structure upfront (grid lines,
            areas). Flexbox is more ad hoc and adapts to content. Grid is better when you have a known
            design structure; Flexbox is better when content is dynamic.
          </li>
          <li>
            <strong>Spanning</strong>: Grid items can span multiple rows and columns easily. In Flexbox,
            spanning multiple columns in a wrap scenario is not possible without changing the markup.
          </li>
        </ul>
        <p>
          The best practice is to use both: Grid for the overall page and component layout structure,
          Flexbox for the internal layout of those components.
        </p>

        <h2>Accessibility and CSS Grid</h2>
        <p>
          CSS Grid's placement capabilities introduce the same accessibility concern as Flexbox ordering:
          visual order can diverge from DOM order. When using <code>grid-column</code>, <code>grid-row</code>,
          <code>order</code>, or <code>grid-template-areas</code> to visually reorder elements, verify
          that keyboard navigation (Tab key) and screen reader reading order (DOM order) still make logical
          sense. WCAG 2.1 Success Criteria 1.3.2 and 2.4.3 require meaningful and logical sequence.
        </p>

        <h2>Tailwind CSS Grid Utilities</h2>
        <p>
          Tailwind CSS provides comprehensive Grid utilities:
        </p>
        <pre><code>{'<!-- 3-column grid -->\n<div class="grid grid-cols-3 gap-4">\n\n<!-- Responsive: 1 col mobile, 3 cols desktop -->\n<div class="grid grid-cols-1 md:grid-cols-3 gap-4">\n\n<!-- Item spanning 2 columns -->\n<div class="col-span-2">\n\n<!-- Auto-fill responsive -->\n<div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">'}</code></pre>
        <p>
          Key Tailwind Grid classes: <code>grid</code>, <code>grid-cols-{'{n}'}</code>,{' '}
          <code>grid-rows-{'{n}'}</code>, <code>col-span-{'{n}'}</code>, <code>row-span-{'{n}'}</code>,{' '}
          <code>col-start-{'{n}'}</code>, <code>col-end-{'{n}'}</code>, <code>gap-{'{n}'}</code>,{' '}
          <code>place-items-center</code>, <code>auto-cols-fr</code>, <code>auto-rows-fr</code>.
        </p>

        <h2>Browser Support for CSS Grid</h2>
        <p>
          CSS Grid Level 1 is supported in all modern browsers and has been since 2017 (Chrome 57,
          Firefox 52, Safari 10.1, Edge 16). Global support exceeds 97%. The newer features "”
          subgrid, <code>masonry</code> layout, <code>container</code> queries integration "” have
          varying support timelines: subgrid reached all major browsers by 2023 (Chrome 117).
        </p>
        <p>
          Internet Explorer 11 had an early, prefixed implementation of Grid that was not spec-compliant.
          IE grid syntax required <code>-ms-grid-column</code>, <code>-ms-grid-row</code>, and other
          prefixed properties. Autoprefixer can add these automatically for teams that still target IE11.
        </p>

        <h2>Using This CSS Grid Generator</h2>
        <p>
          Our tool provides a fully visual interface for building CSS Grid layouts. You can define column
          and row tracks using any valid CSS unit including <code>fr</code>, <code>px</code>, <code>%</code>,
          <code>auto</code>, <code>minmax()</code>, and <code>repeat()</code>. Place items by dragging them
          to specific grid areas, set spans, name areas, and configure alignment and gap settings. The
          generated CSS is clean and production-ready, with Tailwind class equivalents provided alongside.
          Whether you are prototyping a new page layout or fine-tuning a component's internal structure,
          the grid generator eliminates the write-refresh-inspect cycle and makes CSS Grid's full power
          immediately accessible.
        </p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What is CSS Grid and what problems does it solve?',
      answer:
        'CSS Grid Layout is a two-dimensional layout system that lets you define explicit row and column tracks and place items precisely within them. It solves the long-standing problem of building page-level layouts in CSS without hacks: equal-height columns, spanning items across multiple tracks, and aligning items in two directions simultaneously were all difficult or impossible before Grid.',
    },
    {
      category: 'Basics',
      question: 'How do I create a CSS Grid container?',
      answer:
        'Apply display: grid (block-level) or display: inline-grid (inline-level) to the parent element. Its immediate children automatically become grid items. Define the grid structure with grid-template-columns and grid-template-rows. Without these, items will be placed in a single-column grid with auto-sized rows.',
    },
    {
      category: 'Tracks',
      question: 'What is the fr unit and how does it differ from percentages?',
      answer:
        'The fr (fraction) unit represents a share of the remaining free space after fixed-size tracks and gaps are accounted for. Unlike percentages, fr units automatically adjust for gaps: repeat(3, 1fr) with gap: 20px gives three equal columns that together fill the container minus the two 20px gaps. Percentages would overflow because they are calculated from the total container width before gaps.',
    },
    {
      category: 'Tracks',
      question: 'How does repeat(auto-fill, minmax(280px, 1fr)) work?',
      answer:
        'auto-fill tells the browser to create as many column tracks as fit in the container without overflow. minmax(280px, 1fr) sets each track to be at least 280px wide and at most 1fr (sharing available space). The result: as many columns as fit at â‰¥280px each, with columns growing to fill the row. This creates a fully responsive grid without media queries.',
    },
    {
      category: 'Tracks',
      question: 'What is the difference between auto-fill and auto-fit?',
      answer:
        'Both create as many columns as fit, but auto-fill preserves empty column tracks (their space is reserved but unused), while auto-fit collapses empty tracks to zero width. With auto-fit and 1fr, items grow to fill the entire row even when there are fewer items than maximum columns. auto-fit is usually preferred for card grids where you want items to stretch; auto-fill is better when you want to maintain fixed column positions for future items.',
    },
    {
      category: 'Placement',
      question: 'How do I span a grid item across multiple columns?',
      answer:
        'Use grid-column: start / end (line numbers) or grid-column: span n (span keyword). For example, grid-column: 1 / 3 spans from line 1 to line 3 (2 columns), and grid-column: span 2 spans 2 columns starting from the auto-placed position. grid-column: 1 / -1 spans all columns (negative numbers count from the end).',
    },
    {
      category: 'Placement',
      question: 'How does grid-template-areas work?',
      answer:
        'grid-template-areas lets you define named regions as a visual ASCII map. Each quoted string is a row; each word in the string is a column cell. Repeat a name to span that region across multiple cells. Use a period for empty cells. Assign items to regions with grid-area: name. This makes complex layouts visually readable directly in the CSS.',
    },
    {
      category: 'Placement',
      question: 'What is the auto-placement algorithm?',
      answer:
        'When grid items are not explicitly placed, the auto-placement algorithm places them into the grid in document order, filling each row left-to-right before moving to the next row (grid-auto-flow: row). You can change the direction to column, or add the dense keyword to backfill holes left by large items. Items that are explicitly placed can leave gaps that auto-placed items skip over by default.',
    },
    {
      category: 'Alignment',
      question: 'What is the difference between justify-items and justify-content in Grid?',
      answer:
        'justify-items aligns each grid item within its own grid area (cell). justify-content aligns the entire grid (all the tracks together) within the grid container when there is free space in the container. Similarly, align-items aligns items within their cells vertically, while align-content aligns the rows within the container. The place-items and place-content shorthands combine these pairs.',
    },
    {
      category: 'Alignment',
      question: 'How do I center a grid item both horizontally and vertically within its cell?',
      answer:
        'On the item: place-self: center (shorthand for align-self: center; justify-self: center). Or on the container: place-items: center to center all items in their cells. For centering one item in the entire container, use the container as a single-cell grid: display: grid; place-items: center.',
    },
    {
      category: 'Sizing',
      question: 'How do implicit grid tracks differ from explicit grid tracks?',
      answer:
        'Explicit tracks are those you define in grid-template-columns and grid-template-rows. When items are placed or auto-placed beyond the explicit grid, the browser creates implicit tracks. Their size is controlled by grid-auto-columns and grid-auto-rows, which default to auto (sized to content). Setting grid-auto-rows: minmax(100px, auto) ensures all implicit rows are at least 100px tall.',
    },
    {
      category: 'Sizing',
      question: 'What does minmax() do and when should I use it?',
      answer:
        'minmax(min, max) defines a size range for a track. The track is at least min and at most max. minmax(200px, 1fr) means the track is at least 200px but can grow to fill available space. minmax(0, 1fr) is equivalent to 1fr. minmax(auto, 1fr) allows the track to shrink to its min-content size but grow beyond that. It is especially useful for grid-auto-rows to create rows that are tall enough for content.',
    },
    {
      category: 'Advanced',
      question: 'What is CSS Subgrid and why is it useful?',
      answer:
        'Subgrid lets a nested grid item inherit its parent grid&#39;s tracks rather than defining new tracks. This solves the alignment problem in nested grids: without subgrid, items inside a grid item cannot align to the outer grid. With subgrid, items in cards, list items, or nested components can all align to the same outer grid lines. Subgrid is supported in Chrome 117+, Firefox 71+, and Safari 16+.',
    },
    {
      category: 'Advanced',
      question: 'How do I name grid lines and why is it useful?',
      answer:
        'Add names in square brackets in the track definition: grid-template-columns: [sidebar-start] 250px [sidebar-end content-start] 1fr [content-end]. Items can then use these names for placement: grid-column: sidebar-start / sidebar-end. Named lines make layout code more readable and maintainable, especially in large projects where column numbers are hard to remember.',
    },
    {
      category: 'Responsive',
      question: 'How do I change a grid layout at different screen sizes?',
      answer:
        'Use media queries to change grid-template-columns, grid-template-areas, or any other grid property. For example, switch from a single-column stacked layout to a multi-column layout at a breakpoint. The same HTML works across all sizes. For automatic responsiveness without media queries, use repeat(auto-fill, minmax(min-width, 1fr)) which adjusts column count based on available space.',
    },
    {
      category: 'Responsive',
      question: 'Can I combine CSS Grid with CSS Container Queries?',
      answer:
        'Yes. Container queries let you change the grid layout based on the size of the container rather than the viewport, enabling fully encapsulated responsive components. A card component can switch from a stacked to a side-by-side layout when its container is wide enough, regardless of where it is placed on the page. Define @container on the parent and use @container (min-width: 400px) to change the grid inside.',
    },
    {
      category: 'Gaps',
      question: 'How does gap work in CSS Grid?',
      answer:
        'gap (shorthand for row-gap and column-gap) adds gutters between grid tracks "” both row and column tracks. It does not add space at the outer edges of the grid container. The fr unit respects gaps in its calculations. gap: 20px on a grid with repeat(3, 1fr) columns divides the space minus 2 × 20px (the two gaps) among three equal columns.',
    },
    {
      category: 'Frameworks',
      question: 'How do I use Tailwind CSS for Grid layouts?',
      answer:
        'Tailwind provides grid, grid-cols-{n}, grid-rows-{n}, col-span-{n}, row-span-{n}, gap-{n}, and alignment utilities like place-items-center. For auto-responsive grids, use arbitrary value syntax: grid-cols-[repeat(auto-fill,minmax(280px,1fr))]. Responsive prefixes (sm:, md:, lg:) apply to all grid utilities for breakpoint-based layout changes.',
    },
    {
      category: 'Grid vs Flexbox',
      question: 'When should I use CSS Grid instead of Flexbox?',
      answer:
        'Use Grid when: (1) layout requires alignment in two dimensions (rows and columns); (2) items must span multiple rows or columns; (3) you have a defined layout structure that items must fit into; (4) you need grid-template-areas for named, readable layout zones; (5) you are building a page-level or component-level template. Use Flexbox for one-dimensional flows "” navigation bars, button groups, card lists.',
    },
    {
      category: 'Debugging',
      question: 'How do I debug CSS Grid layouts in browser DevTools?',
      answer:
        'Both Chrome DevTools and Firefox DevTools have dedicated Grid inspectors. Click the "grid" badge next to a grid container in the Elements panel (Chrome) or Layout tab (Firefox) to overlay grid lines, track sizes, and area names on the page. Firefox&#39;s Grid inspector is particularly powerful, showing numbered lines, named lines, and area names simultaneously. You can also inspect grid-template-columns and grid-template-rows computed values.',
    },
    {
      category: 'Accessibility',
      question: 'What accessibility issues should I be aware of when using CSS Grid?',
      answer:
        'Visual order diverging from DOM order is the primary concern. When grid-column/row placement, grid-template-areas, or the order property creates a visual order different from the DOM, screen readers and keyboard navigation follow DOM order. Verify that Tab order and screen reader reading order still make sense. WCAG 2.1 Success Criteria 1.3.2 (Meaningful Sequence) and 2.4.3 (Focus Order) require logical, predictable navigation.',
    },
    {
      category: 'Browser Support',
      question: 'What is CSS Grid browser support in 2025?',
      answer:
        'CSS Grid Level 1 has full support in all modern browsers since 2017 (Chrome 57, Firefox 52, Safari 10.1, Edge 16) "” global coverage exceeds 97%. The gap property has been universally supported since 2020. Subgrid reached all major browsers by late 2023. Internet Explorer 11 has a non-standard prefixed implementation; IE is below 0.5% market share and most teams no longer target it.',
    },
    {
      category: 'Performance',
      question: 'Does CSS Grid have any performance implications?',
      answer:
        'CSS Grid layout is handled entirely by native browser code and is extremely fast for the vast majority of layouts. Using intrinsic sizing (auto, min-content, max-content) on many tracks can require multiple browser measurement passes; prefer explicit sizes or fr units when track counts are large. Subgrid adds a cross-tree layout dependency but is still managed natively without JS overhead.',
    },
    {
      category: 'Patterns',
      question: 'What is the "Holy Grail" layout and how do I implement it with CSS Grid?',
      answer:
        'The Holy Grail layout has a header, footer, main content, and two sidebars "” all full-height, with the main content between the sidebars. With CSS Grid: .app { display: grid; grid-template-areas: "header header header" "left main right" "footer footer footer"; grid-template-columns: 220px 1fr 220px; grid-template-rows: 60px 1fr 40px; min-height: 100vh; }. This was notoriously difficult to implement with floats or older techniques.',
    },
  ],
};
