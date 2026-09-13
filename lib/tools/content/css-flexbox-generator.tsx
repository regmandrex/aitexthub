import type { ToolContent } from './index';

export const cssFlexboxGeneratorContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>CSS Flexbox Generator: Master One-Dimensional Layouts with Visual Precision</h2>
        <p>
          CSS Flexbox "” formally the CSS Flexible Box Layout Module "” is the most widely adopted tool for building
          one-dimensional user interfaces on the web. Whether you are aligning navigation items horizontally,
          centering a modal vertically, distributing cards with equal spacing, or building a responsive sidebar
          layout, Flexbox provides the vocabulary and the power to express your intent in a handful of CSS
          declarations. Our CSS Flexbox Generator lets you visually configure every Flexbox property in real
          time, preview the result instantly, and copy production-ready code directly into your project.
        </p>
        <p>
          Before Flexbox arrived in browsers around 2012 and reached wide stable support by 2014, developers
          relied on floats, inline-block hacks, negative margins, and table-based layouts to achieve even modest
          alignment goals. Those techniques were brittle, verbose, and often required JavaScript to measure and
          position elements at runtime. Flexbox replaced all of that complexity with a declarative model: tell the
          browser <em>how</em> you want items to be distributed and aligned, and let the layout engine figure out
          the math.
        </p>

        <h2>The Flexbox Mental Model: Container and Items</h2>
        <p>
          Every Flexbox layout begins with a <strong>flex container</strong> "” the parent element that establishes
          a flex formatting context for its children. You create a flex container by setting{' '}
          <code>{'display: flex'}</code> (block-level) or <code>{'display: inline-flex'}</code> (inline-level) on
          that element. Once the container is a flex container, its immediate children automatically become{' '}
          <strong>flex items</strong> and respond to Flexbox alignment and sizing rules.
        </p>
        <p>
          The Flexbox model organizes items along two axes. The <strong>main axis</strong> runs in the direction
          defined by the <code>flex-direction</code> property "” by default, left to right for left-to-right
          languages. The <strong>cross axis</strong> runs perpendicular to the main axis. Understanding these two
          axes is the key to understanding every Flexbox property: some properties control distribution along
          the main axis (<code>justify-content</code>, <code>flex-grow</code>, <code>flex-shrink</code>), while
          others control alignment along the cross axis (<code>align-items</code>, <code>align-self</code>).
        </p>

        <h2>flex-direction: Controlling the Main Axis</h2>
        <p>
          The <code>flex-direction</code> property establishes the direction of the main axis and therefore
          determines how flex items are laid out:
        </p>
        <ul>
          <li>
            <strong>row</strong> (default): items are arranged left-to-right in left-to-right writing modes. The
            main axis is horizontal, the cross axis is vertical.
          </li>
          <li>
            <strong>row-reverse</strong>: items are arranged right-to-left. The start and end of the main axis
            are swapped, which also affects <code>justify-content</code> behavior.
          </li>
          <li>
            <strong>column</strong>: items are stacked top-to-bottom. The main axis is now vertical, the cross
            axis is horizontal. This is essential for building vertical navigation menus and stacked card layouts.
          </li>
          <li>
            <strong>column-reverse</strong>: items are stacked bottom-to-top. Useful for chat interfaces where
            the newest message should appear at the bottom while content grows upward.
          </li>
        </ul>
        <p>
          Note that reversing the direction with <code>row-reverse</code> or <code>column-reverse</code> changes
          the visual order but not the DOM order. Screen readers and keyboard navigation still follow the DOM order,
          so use reverse values for purely decorative rearrangement only "” never to replace meaningful content
          reordering that should be done in the HTML itself.
        </p>

        <h2>flex-wrap: Handling Overflow and Responsive Grids</h2>
        <p>
          By default, flex items are forced onto a single line even if that causes them to overflow their
          container (<code>flex-wrap: nowrap</code>). Setting <code>flex-wrap: wrap</code> allows items to wrap
          onto additional lines when they would otherwise overflow. Each wrapped line becomes an independent
          flex line within the cross axis.
        </p>
        <p>
          The <code>flex-wrap: wrap-reverse</code> value wraps items but reverses the direction of wrapping "”
          new lines appear above (or before) the first line rather than below (or after) it. This is rarely
          needed but can solve specific layout puzzles where content must grow in the reverse cross-axis direction.
        </p>
        <p>
          The shorthand <code>flex-flow</code> combines <code>flex-direction</code> and <code>flex-wrap</code>
          into a single declaration:
        </p>
        <pre><code>{'/* Equivalent to flex-direction: row; flex-wrap: wrap; */\n.container {\n  flex-flow: row wrap;\n}'}</code></pre>

        <h2>justify-content: Main Axis Distribution</h2>
        <p>
          <code>justify-content</code> defines how the browser distributes space <em>along the main axis</em>
          after flex items have been sized. It only has an effect when there is free space available on the
          main axis (either because items don't fill the container, or because of fixed sizes). The values are:
        </p>
        <ul>
          <li>
            <strong>flex-start</strong> (default): items are packed toward the start of the main axis. For{' '}
            <code>flex-direction: row</code>, that means the left edge in LTR languages.
          </li>
          <li>
            <strong>flex-end</strong>: items are packed toward the end of the main axis "” the right edge for
            a horizontal row.
          </li>
          <li>
            <strong>center</strong>: items are centered along the main axis. This is the simplest way to
            horizontally center a group of items inside a row container.
          </li>
          <li>
            <strong>space-between</strong>: items are evenly distributed; the first item is at the start, the
            last item is at the end, and equal space is placed between each pair of adjacent items. No space
            is added before the first item or after the last item.
          </li>
          <li>
            <strong>space-around</strong>: items are evenly distributed with equal space around each item.
            Because each item has space on both sides, the gaps between items are twice as large as the space
            at the edges.
          </li>
          <li>
            <strong>space-evenly</strong>: space is distributed so that the gaps between all items, and the
            gaps between items and the container edges, are all equal. This is often the most visually
            balanced distribution for card grids.
          </li>
        </ul>
        <p>
          Modern browsers also support <code>start</code>, <code>end</code>, <code>left</code>, and{' '}
          <code>right</code> as values for <code>justify-content</code>, which respect writing direction
          independently of <code>flex-direction</code>.
        </p>

        <h2>align-items: Cross Axis Alignment for All Items</h2>
        <p>
          While <code>justify-content</code> controls the main axis, <code>align-items</code> controls how
          items are aligned along the <em>cross axis</em> within a flex line:
        </p>
        <ul>
          <li>
            <strong>stretch</strong> (default): items stretch to fill the container height (for a row container).
            Items with an explicit height set are not stretched.
          </li>
          <li>
            <strong>flex-start</strong>: items are aligned at the start of the cross axis. For a row container,
            items align at the top of the container.
          </li>
          <li>
            <strong>flex-end</strong>: items align at the end of the cross axis "” the bottom for a row container.
          </li>
          <li>
            <strong>center</strong>: items are centered on the cross axis. Combined with{' '}
            <code>justify-content: center</code>, this achieves perfect centering both horizontally and vertically "”
            the classic "center a div" problem solved in two lines.
          </li>
          <li>
            <strong>baseline</strong>: items are aligned so that their text baselines line up. Essential for
            navigation bars or cards where text of different sizes should read along the same visual baseline.
          </li>
          <li>
            <strong>first baseline / last baseline</strong>: more precise baseline variants for multi-line text
            scenarios.
          </li>
        </ul>

        <h2>align-content: Multi-Line Cross Axis Distribution</h2>
        <p>
          When <code>flex-wrap: wrap</code> is set and items span multiple lines, <code>align-content</code>
          controls how those <em>lines</em> are distributed along the cross axis "” similar to how{' '}
          <code>justify-content</code> distributes items along the main axis. It has no effect on a
          single-line container.
        </p>
        <p>
          The values mirror <code>justify-content</code>: <code>flex-start</code>, <code>flex-end</code>,{' '}
          <code>center</code>, <code>space-between</code>, <code>space-around</code>,{' '}
          <code>space-evenly</code>, and <code>stretch</code>. Setting <code>align-content: stretch</code>
          causes each flex line to expand equally to fill the container's cross size, which is often what you
          want for equal-height rows in a wrapping card grid.
        </p>

        <h2>gap, row-gap, column-gap: Spacing Between Items</h2>
        <p>
          Prior to 2020, adding consistent space between flex items required <code>margin</code> hacks "”
          adding margins to all items and then removing the margin from the first or last item to avoid
          double-spacing at the edges. The <code>gap</code> property (originally <code>grid-gap</code> from
          CSS Grid, later extended to Flexbox) solves this cleanly. It defines the space between flex items
          without affecting the outer edges of the container.
        </p>
        <pre><code>{'.container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;          /* equal row and column gap */\n  gap: 16px 24px;     /* row-gap column-gap */\n  row-gap: 16px;\n  column-gap: 24px;\n}'}</code></pre>
        <p>
          Browser support for <code>gap</code> in Flexbox contexts reached near-universal coverage by 2021
          (Chrome 84, Firefox 63, Safari 14.1). For projects that require older Safari support, the margin
          hack or a polyfill may still be necessary.
        </p>

        <h2>Flex Item Properties: flex-grow, flex-shrink, flex-basis</h2>
        <p>
          While container properties define the overall layout strategy, item-level properties control how
          each individual flex item behaves within that strategy.
        </p>
        <h3>flex-grow</h3>
        <p>
          <code>flex-grow</code> defines how much a flex item grows relative to its siblings when there is
          free space on the main axis. The value is a unitless ratio: an item with <code>flex-grow: 2</code>
          will receive twice as much of the available free space as an item with <code>flex-grow: 1</code>.
          The default value is <code>0</code>, meaning items do not grow beyond their base size.
        </p>
        <p>
          A common pattern is giving all items <code>flex-grow: 1</code> to distribute space equally among
          them, creating equal-width columns. Or you can give one item <code>flex-grow: 1</code> while
          others have <code>flex-grow: 0</code> to make only one item fill the remaining space "” perfect for
          a navigation bar where the center content expands but the logo and button stay fixed.
        </p>
        <h3>flex-shrink</h3>
        <p>
          <code>flex-shrink</code> is the counterpart to <code>flex-grow</code>: it defines how much a flex
          item shrinks relative to its siblings when there is not enough space. The default is{' '}
          <code>1</code>, meaning all items shrink proportionally. Setting <code>flex-shrink: 0</code>
          prevents an item from shrinking below its base size "” essential for keeping a sidebar or icon at
          a fixed width when the container is too small.
        </p>
        <h3>flex-basis</h3>
        <p>
          <code>flex-basis</code> sets the initial main-axis size of a flex item before free space is
          distributed by <code>flex-grow</code> and <code>flex-shrink</code>. It can take any CSS length
          value (<code>px</code>, <code>%</code>, <code>rem</code>, <code>vw</code>) or the keywords{' '}
          <code>auto</code> (use the item's <code>width</code>/<code>height</code>) or <code>content</code>
          (size to content). The default is <code>auto</code>.
        </p>
        <p>
          When <code>flex-basis</code> is set to <code>0</code>, all items start at zero size and the entire
          main-axis space is treated as free space for <code>flex-grow</code> to distribute. This gives
          perfectly equal-sized columns regardless of content. When set to <code>auto</code>, items start
          at their content size and only the remaining space is distributed by <code>flex-grow</code>.
        </p>
        <h3>The flex Shorthand</h3>
        <p>
          The <code>flex</code> shorthand combines <code>flex-grow</code>, <code>flex-shrink</code>, and{' '}
          <code>flex-basis</code>. The specification recommends always using the shorthand rather than the
          individual properties because the shorthand sets intelligent defaults for omitted values:
        </p>
        <pre><code>{'flex: 1;         /* flex-grow: 1; flex-shrink: 1; flex-basis: 0% */\nflex: auto;      /* flex-grow: 1; flex-shrink: 1; flex-basis: auto */\nflex: none;      /* flex-grow: 0; flex-shrink: 0; flex-basis: auto */\nflex: 0 0 200px; /* no grow, no shrink, fixed 200px base */\nflex: 1 1 300px; /* grow and shrink from a 300px base */'}</code></pre>

        <h2>align-self: Per-Item Cross Axis Override</h2>
        <p>
          <code>align-self</code> lets you override the container's <code>align-items</code> setting for an
          individual flex item. It accepts all the same values as <code>align-items</code> plus{' '}
          <code>auto</code> (the default, which inherits from <code>align-items</code>). This is useful when
          one item in a row needs to be pinned to the top or bottom while the others are centered.
        </p>

        <h2>order: Visual Reordering Without DOM Changes</h2>
        <p>
          The <code>order</code> property controls the order in which flex items appear within their container,
          independently of their position in the DOM. Items are displayed in ascending order of their{' '}
          <code>order</code> value "” the default is <code>0</code> for all items, so they appear in DOM order.
          Negative values cause items to appear before items with <code>order: 0</code>.
        </p>
        <p>
          The same accessibility caveat applies as with <code>flex-direction: reverse</code> values: keyboard
          navigation and screen readers follow the DOM order, not the visual order. Use <code>order</code>
          only for visual reordering, not for restructuring meaningful content sequences.
        </p>

        <h2>Common Flexbox Patterns and Recipes</h2>
        <h3>Perfect Centering</h3>
        <pre><code>{'.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'}</code></pre>
        <p>
          This is the canonical solution to the long-standing "how do I center a div?" problem. It centers
          both horizontally and vertically, regardless of the content size or container size.
        </p>
        <h3>Navbar with Spaced Elements</h3>
        <pre><code>{'nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n}'}</code></pre>
        <p>
          <code>space-between</code> pushes the logo to the left and the action buttons to the right with
          a single declaration. No floats, no absolute positioning.
        </p>
        <h3>Equal-Width Columns</h3>
        <pre><code>{'.columns {\n  display: flex;\n  gap: 16px;\n}\n.column {\n  flex: 1;\n}'}</code></pre>
        <h3>Sticky Footer Layout</h3>
        <pre><code>{'body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex: 1;\n}\nfooter {\n  /* stays at bottom even on short pages */\n}'}</code></pre>
        <h3>Responsive Card Grid Without Media Queries</h3>
        <pre><code>{'.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card {\n  flex: 1 1 280px; /* grow, shrink, min 280px */\n  max-width: 400px;\n}'}</code></pre>
        <p>
          This pattern creates a grid of cards that automatically adjusts the number of columns based on
          the available width, without a single media query. Cards wrap when they can't maintain 280px,
          growing to fill available space up to 400px maximum width.
        </p>

        <h2>Flexbox vs CSS Grid: Choosing the Right Tool</h2>
        <p>
          Flexbox and CSS Grid are complementary layout tools, each suited to different scenarios:
        </p>
        <ul>
          <li>
            <strong>Flexbox is one-dimensional</strong>: it excels at laying out items in a single row or
            column, distributing space along one axis. Navigation bars, toolbars, button groups, form field
            rows, and card lists that wrap are Flexbox's natural habitat.
          </li>
          <li>
            <strong>CSS Grid is two-dimensional</strong>: it manages rows and columns simultaneously, making
            it ideal for page-level layouts, data tables, image galleries, and any design where items must
            align in both dimensions.
          </li>
        </ul>
        <p>
          A common pattern is using Grid for the overall page layout and Flexbox for the individual
          components within each grid area. The tools compose well: a grid cell can contain a flex container,
          and a flex item can be a grid container.
        </p>

        <h2>Flexbox in Modern Frameworks</h2>
        <h3>Tailwind CSS Flexbox Utilities</h3>
        <p>
          Tailwind CSS maps every Flexbox property to utility classes, making Flexbox accessible through
          HTML-level composition:
        </p>
        <pre><code>{'<!-- Perfect centering -->\n<div class="flex items-center justify-center">\n\n<!-- Navbar -->\n<nav class="flex items-center justify-between">\n\n<!-- Responsive card grid -->\n<div class="flex flex-wrap gap-4">\n  <div class="flex-1 min-w-[280px]">'}</code></pre>
        <p>
          Key Tailwind Flexbox classes: <code>flex</code>, <code>inline-flex</code>, <code>flex-row</code>,{' '}
          <code>flex-col</code>, <code>flex-wrap</code>, <code>items-start/center/end/stretch/baseline</code>,{' '}
          <code>justify-start/center/end/between/around/evenly</code>, <code>flex-1</code>,{' '}
          <code>flex-auto</code>, <code>flex-none</code>, <code>grow</code>, <code>shrink</code>,{' '}
          <code>basis-{'{size}'}</code>.
        </p>
        <h3>Bootstrap Flex Utilities</h3>
        <p>
          Bootstrap 4+ replaced its custom grid hack with native Flexbox. The flex utilities follow a{' '}
          <code>d-flex</code>, <code>flex-{'{direction}'}</code>, <code>justify-content-{'{value}'}</code>,{' '}
          <code>align-items-{'{value}'}</code> naming pattern with responsive breakpoint modifiers.
        </p>

        <h2>Accessibility Considerations in Flexbox Layouts</h2>
        <p>
          Flexbox's visual reordering capabilities introduce potential accessibility problems. When{' '}
          <code>order</code>, <code>flex-direction: reverse</code>, or <code>flex-wrap: wrap-reverse</code>
          creates a visual order different from the DOM order, users who navigate by keyboard or screen
          reader will experience content in a different sequence than sighted mouse users. The WCAG 2.1
          Success Criterion 1.3.2 (Meaningful Sequence) and 2.4.3 (Focus Order) require that navigation
          order be logical and intuitive. Always ensure that the DOM order represents the logical reading
          order, using Flexbox for purely visual adjustments only.
        </p>

        <h2>Performance Characteristics of Flexbox</h2>
        <p>
          Modern browsers implement Flexbox as a native layout algorithm with highly optimized C++ code.
          For the vast majority of layouts, Flexbox performance is excellent and should never be a concern.
          However, a few patterns are worth being aware of:
        </p>
        <ul>
          <li>
            <strong>Intrinsic sizing passes</strong>: when <code>flex-basis: auto</code> or{' '}
            <code>flex-basis: content</code> is used, the browser must measure each item's content before
            computing the layout. For containers with many items or deeply nested content, this can add
            layout work. Prefer explicit <code>flex-basis</code> values when item sizes are known.
          </li>
          <li>
            <strong>Reflow scope</strong>: Flexbox layout is contained within the flex container "” changes
            to one flex item's size trigger re-layout of the container and its items but do not propagate
            outside the container's formatting context. This containment makes Flexbox more efficient
            than older float-based layouts.
          </li>
          <li>
            <strong>Paint layers</strong>: Flexbox does not create paint layers by itself. Items with
            transforms, opacity, or <code>will-change</code> still create layers as they would for any
            other element.
          </li>
        </ul>

        <h2>Debugging Flexbox Layouts</h2>
        <p>
          Both Chrome DevTools and Firefox DevTools have dedicated Flexbox inspection panels. In Chrome,
          clicking the "flex" badge next to a flex container in the Elements panel opens a visual overlay
          showing item boundaries, free space, and alignment guides. Firefox's Flexbox inspector includes
          a model diagram showing the main and cross axes with their current values.
        </p>
        <p>
          Common Flexbox debugging techniques:
        </p>
        <ul>
          <li>Add <code>{'outline: 1px solid red'}</code> to the container and items to see actual boundaries.</li>
          <li>Temporarily set a fixed height on the container to confirm cross-axis behavior.</li>
          <li>Check that <code>min-width</code> and <code>min-height</code> aren't preventing shrinking "” by
          default, flex items have <code>min-width: auto</code> which prevents them from shrinking below
          their content size. Set <code>{'min-width: 0'}</code> or <code>{'overflow: hidden'}</code> to allow
          smaller sizes.</li>
          <li>Verify that the parent has a defined size when using percentage-based <code>flex-basis</code>.</li>
        </ul>

        <h2>Browser Support and Progressive Enhancement</h2>
        <p>
          Flexbox has excellent browser support. The modern single-value syntax (<code>display: flex</code>)
          is supported in all browsers released since 2015, covering well over 99% of global web traffic.
          The <code>gap</code> property for Flexbox has slightly narrower support (iOS Safari 14.5+, released
          April 2021) but covers the vast majority of modern devices.
        </p>
        <p>
          For projects that must support Internet Explorer 11 (increasingly rare), the IE implementation
          of Flexbox had significant bugs and required a vendor prefix (<code>-ms-flexbox</code>). Tools
          like Autoprefixer can add the necessary prefixes automatically. Most teams today no longer
          support IE11 and can use modern Flexbox without any prefixing.
        </p>

        <h2>Using This CSS Flexbox Generator</h2>
        <p>
          Our generator provides a visual, interactive interface for every Flexbox property. You can:
        </p>
        <ul>
          <li>Select the number of flex items and customize their content or relative sizes.</li>
          <li>Toggle every container property "” <code>flex-direction</code>, <code>flex-wrap</code>,{' '}
          <code>justify-content</code>, <code>align-items</code>, <code>align-content</code>, and{' '}
          <code>gap</code> "” with immediate visual feedback.</li>
          <li>Adjust item-level properties like <code>flex-grow</code>, <code>flex-shrink</code>,{' '}
          <code>flex-basis</code>, <code>align-self</code>, and <code>order</code> for individual items.</li>
          <li>Copy the generated CSS with a single click to paste directly into your stylesheet.</li>
          <li>Use the generated Tailwind class equivalents for utility-first CSS frameworks.</li>
        </ul>
        <p>
          Whether you are learning Flexbox for the first time or quickly prototyping a new component layout,
          this tool eliminates the write-refresh-inspect cycle and lets you explore the full power of the
          Flexible Box Layout Model interactively.
        </p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'What is CSS Flexbox and when should I use it?',
      answer:
        'CSS Flexbox (Flexible Box Layout) is a one-dimensional layout model that distributes space along a single axis "” either a row or a column. Use Flexbox for navigation bars, button groups, card lists, centering content, and any layout where items flow in one direction. For two-dimensional layouts where items must align in both rows and columns simultaneously, CSS Grid is the better choice.',
    },
    {
      category: 'Basics',
      question: 'How do I create a flex container?',
      answer:
        'Apply display: flex (block-level) or display: inline-flex (inline-level) to the parent element. Its immediate children automatically become flex items and respond to Flexbox properties. Nested elements (grandchildren) are not flex items and require their own flex context if needed.',
    },
    {
      category: 'Basics',
      question: 'What is the difference between the main axis and the cross axis?',
      answer:
        'The main axis runs in the direction set by flex-direction (horizontal by default for row). The cross axis runs perpendicular to it. Properties like justify-content and flex-grow act on the main axis; align-items and align-self act on the cross axis. When flex-direction changes to column, the axes swap "” the main axis becomes vertical and the cross axis becomes horizontal.',
    },
    {
      category: 'Alignment',
      question: 'How do I center a div both horizontally and vertically with Flexbox?',
      answer:
        'Set display: flex; justify-content: center; align-items: center on the parent container. This centers the child along both the main axis (justify-content) and the cross axis (align-items). Give the parent a defined height or min-height so the cross-axis centering has space to work.',
    },
    {
      category: 'Alignment',
      question: 'What is the difference between justify-content and align-items?',
      answer:
        'justify-content distributes space along the main axis (horizontally for flex-direction: row). align-items aligns items along the cross axis (vertically for flex-direction: row). A helpful mnemonic: justify-content controls the direction items flow; align-items controls the perpendicular direction.',
    },
    {
      category: 'Alignment',
      question: 'When does align-content have any effect?',
      answer:
        'align-content only affects multi-line flex containers "” those with flex-wrap: wrap or flex-wrap: wrap-reverse where items have actually wrapped to multiple lines. It distributes the lines themselves along the cross axis. On a single-line container, align-content has no effect regardless of its value.',
    },
    {
      category: 'Alignment',
      question: 'How do I align one specific flex item differently from the others?',
      answer:
        'Use align-self on the individual item. It accepts the same values as align-items (flex-start, flex-end, center, stretch, baseline) plus auto (which inherits from the container&#39;s align-items). Setting align-self: flex-end on one card while the container has align-items: flex-start would pin that single card to the bottom.',
    },
    {
      category: 'Sizing',
      question: 'What does flex: 1 actually mean?',
      answer:
        'flex: 1 expands to flex-grow: 1; flex-shrink: 1; flex-basis: 0%. Items with flex: 1 share the container&#39;s space equally, each starting from zero width (or height in column direction) and growing proportionally. This is the standard way to create equal-width columns. flex: auto means flex-grow: 1; flex-shrink: 1; flex-basis: auto (items grow/shrink but start from their content size).',
    },
    {
      category: 'Sizing',
      question: 'What is the difference between flex-basis and width?',
      answer:
        'flex-basis sets the initial size of a flex item along the main axis before flex-grow and flex-shrink are applied. For flex-direction: row, flex-basis acts like width; for flex-direction: column, it acts like height. The key difference is that flex-basis only applies within a flex context and participates in the flex algorithm, while width always sets the box size regardless of context. If both are set, flex-basis takes precedence over width.',
    },
    {
      category: 'Sizing',
      question: 'Why won\'t my flex items shrink below a certain size?',
      answer:
        'By default, flex items have min-width: auto, which prevents them from shrinking below their content&#39;s minimum content size. This is a common source of unexpected overflow. To allow an item to shrink smaller, set min-width: 0 (or min-height: 0 for column containers). Alternatively, setting overflow: hidden on the item also implicitly sets min-width to 0.',
    },
    {
      category: 'Sizing',
      question: 'How does flex-grow distribute free space?',
      answer:
        'After all items are placed at their flex-basis size, any remaining free space is distributed among items that have a positive flex-grow value. The space is divided in proportion to each item&#39;s flex-grow value. If three items have flex-grow values of 1, 2, and 1, the middle item receives twice as much of the free space as either of the other two.',
    },
    {
      category: 'Wrapping',
      question: 'How do I make flex items wrap to multiple lines?',
      answer:
        'Set flex-wrap: wrap on the container. Items will wrap to a new line when they would otherwise overflow. Each wrapped line is an independent flex line. Without flex-wrap: wrap, all items are forced onto one line and may overflow or compress below their minimum size.',
    },
    {
      category: 'Wrapping',
      question: 'How do I create a responsive card grid with Flexbox without media queries?',
      answer:
        'Use flex-wrap: wrap on the container and set a flex-basis with a minimum width on items: .card { flex: 1 1 280px; max-width: 400px; }. This creates as many columns as fit at the minimum width, automatically wrapping to fewer columns on narrow screens. Add gap for spacing between cards. This pattern is sometimes called the "flexy grid" or "auto-fill" pattern.',
    },
    {
      category: 'Direction',
      question: 'How do I build a vertical layout with Flexbox?',
      answer:
        'Set flex-direction: column on the container. Items stack top-to-bottom. justify-content then controls vertical distribution and align-items controls horizontal alignment. This is ideal for sidebar navigation, stacked form fields, and any vertically-oriented component.',
    },
    {
      category: 'Direction',
      question: 'What is the difference between flex-direction: row-reverse and simply reversing the DOM order?',
      answer:
        'flex-direction: row-reverse changes the visual order without changing the DOM. Screen readers, keyboard navigation (Tab key), and accessibility tools still follow DOM order. For purely decorative reordering (like a right-to-left decorative layout), row-reverse is fine. For meaningful content reordering that should be perceived by all users, change the DOM order instead.',
    },
    {
      category: 'Spacing',
      question: 'How does gap work in Flexbox and should I use it over margins?',
      answer:
        'gap (shorthand for row-gap and column-gap) adds space between flex items but not at the edges of the container. This makes it superior to margins for inter-item spacing because margins require removing the first/last margin to avoid double-spacing at the edges. gap has full browser support for Flexbox in all browsers released since 2021. For iOS Safari 14.0 and earlier, use the margin hack as a fallback.',
    },
    {
      category: 'Advanced',
      question: 'What is the order property and when should I use it?',
      answer:
        'The order property changes the visual order of flex items without changing the DOM. Items are displayed in ascending order value (default is 0). Use it only for visual reordering of non-essential content "” for example, reordering decorative elements at different screen sizes. Never use order to reorganize content that should be presented in a different sequence for keyboard or screen reader users, as this violates WCAG 1.3.2 (Meaningful Sequence).',
    },
    {
      category: 'Advanced',
      question: 'How do I build a sticky footer with Flexbox?',
      answer:
        'Apply display: flex; flex-direction: column; min-height: 100vh to the body or page wrapper. Give the main content area flex: 1. The footer will stick to the bottom on short pages because the main content grows to fill available height. No JavaScript required.',
    },
    {
      category: 'Advanced',
      question: 'Can I nest flex containers inside flex items?',
      answer:
        'Yes. A flex item can itself be a flex container by setting display: flex on it. This is a common pattern: a page might use CSS Grid for the overall layout, Grid cells contain flex containers for component-level layouts, and those components contain further flex containers for their internal structure. Nesting depth has no inherent performance penalty in modern browsers.',
    },
    {
      category: 'Frameworks',
      question: 'How do Tailwind CSS Flexbox utilities map to CSS Flexbox properties?',
      answer:
        'Tailwind provides one utility class per property value: flex (display: flex), flex-col (flex-direction: column), flex-wrap (flex-wrap: wrap), items-center (align-items: center), justify-between (justify-content: space-between), flex-1 (flex: 1 1 0%), grow (flex-grow: 1), shrink-0 (flex-shrink: 0), basis-1/2 (flex-basis: 50%), gap-4 (gap: 1rem), and self-end (align-self: flex-end).',
    },
    {
      category: 'Debugging',
      question: 'How do I debug a Flexbox layout that isn\'t behaving as expected?',
      answer:
        'Use browser DevTools "” both Chrome and Firefox have dedicated Flexbox inspectors that draw visual overlays on flex containers. Common issues: (1) items not shrinking "” check min-width: auto is not preventing shrink; (2) items not growing "” check that the container has free space and flex-basis is not set to a large value; (3) alignment not working "” check the container has a defined height; (4) items wrapping unexpectedly "” check flex-basis is not too large.',
    },
    {
      category: 'Browser Support',
      question: 'What is the browser support for CSS Flexbox in 2025?',
      answer:
        'CSS Flexbox is supported in every modern browser including all versions of Chrome, Firefox, Safari, and Edge released in the past decade. Global support exceeds 99%. The gap property for Flexbox requires Safari 14.1+ (April 2021). Internet Explorer 11 had a partial implementation with significant bugs; IE is below 0.5% global market share and most teams no longer support it.',
    },
    {
      category: 'Flexbox vs Grid',
      question: 'Should I use Flexbox or CSS Grid for my layout?',
      answer:
        'Choose Flexbox for one-dimensional layouts where items flow in a single row or column "” navigation bars, button groups, cards that wrap, toolbars, and form fields. Choose CSS Grid for two-dimensional layouts where items must align in both rows and columns "” page templates, image galleries, data tables, and dashboards. Use them together: Grid for the page structure, Flexbox for components within each grid area.',
    },
  ],
};
