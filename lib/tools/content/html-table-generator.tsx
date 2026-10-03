import type { ToolContent } from './index';

export const htmlTableGeneratorContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>HTML Table Generator: Create Accessible, Semantic Data Tables</h2>
        <p>HTML tables represent the correct, semantic approach for displaying tabular data on the web—specifically data arranged in rows and columns featuring meaningful relationships among values. Despite occasional misuse as layout tools (a practice long since replaced by CSS), HTML tables remain vital for presenting structured data including financial reports, comparison charts, data exports, schedules, sports standings, and any information where row and column relationships carry significance. Our HTML Table Generator enables you to visually configure table structure, accessibility attributes, and styling, before exporting clean, semantic HTML.</p>

        <h2>The Semantic Roles of Table HTML Elements</h2>
        <p>A fully semantic HTML table relies on a hierarchy of elements describing both structure and purpose:</p>
        <h3>{'<table>'}</h3>
        <p>
          The root element that establishes a table context. All table-related elements must be descendants
          of <code>{'<table>'}</code>. The element accepts no presentation attributes in HTML5 "”
          all styling should be done via CSS.
        </p>
        <h3>{'<caption>'}</h3>
        <p>
          An optional but recommended element that provides a title or summary for the table. Must be the
          first child of <code>{'<table>'}</code>. Screen readers announce the caption before reading the
          table, helping users understand the table's purpose before they navigate it. CSS can position
          the caption above or below the table.
        </p>
        <h3>{'<thead>, <tbody>, <tfoot>'}</h3>
        <p>These sectioning elements organize rows according to their function:</p>
        <ul>
          <li>
            <strong>{'<thead>'}</strong>: wraps header rows. Browsers can repeat the header on each page
            when printing multi-page tables. Must come before <code>{'<tbody>'}</code>.
          </li>
          <li>
            <strong>{'<tbody>'}</strong>: wraps data rows. A table can have multiple <code>{'<tbody>'}</code>
            elements to group logical sections of data. If omitted, the browser implicitly creates one.
          </li>
          <li>
            <strong>{'<tfoot>'}</strong>: wraps footer rows, typically containing totals or summary
            information. In HTML5, <code>{'<tfoot>'}</code> can appear before or after{' '}
            <code>{'<tbody>'}</code> in the source order "” browsers will always render it at the bottom.
          </li>
        </ul>
        <h3>{'<tr>'} "” Table Row</h3>
        <p>
          Represents a row of cells. All cells in a table row must be direct children of the{' '}
          <code>{'<tr>'}</code> element. Rows are logically ordered from top to bottom; the first{' '}
          <code>{'<tr>'}</code> in <code>{'<thead>'}</code> is row 1.
        </p>
        <h3>{'<th>'} "” Table Header Cell</h3>
        <p>Represents a header cell—a cell labeling either a row or a column. The <code>scope</code> attribute is vital for accessibility:</p>
        <ul>
          <li><code>scope="col"</code>: this particular header describes the entire column underneath it.</li>
          <li><code>scope="row"</code>: this specific header describes the entire row to its right.</li>
          <li><code>scope="colgroup"</code>: this header spans across a column group.</li>
          <li><code>scope="rowgroup"</code>: this header spans across a row group.</li>
        </ul>
        <p>Screen readers utilize <code>scope</code> to announce which header applies to a specific data cell as users navigate through the table. Navigating a complex table with a screen reader becomes disorienting without proper <code>scope</code> attributes.</p>
        <h3>{'<td>'} "” Table Data Cell</h3>
        <p>Represents a data cell containing the actual tabular information. It may hold any HTML such as text, images, links, buttons, or even nested tables, though nesting should be avoided whenever possible to maintain simplicity and accessibility.</p>
        <h3>{'<col>'} and {'<colgroup>'}</h3>
        <p>
          <code>{'<colgroup>'}</code> groups one or more columns for styling purposes.{' '}
          <code>{'<col>'}</code> elements within a <code>{'<colgroup>'}</code> represent individual columns.
          These elements allow CSS to target entire columns without adding classes to every cell:
        </p>
        <pre><code>{'<colgroup>\n  <col style="width: 200px;">\n  <col span="2" style="background: #f8f8f8;">\n  <col style="width: 100px;">\n</colgroup>'}</code></pre>

        <h2>colspan and rowspan: Cell Spanning</h2>
        <p>Table cells can span across multiple rows or columns by utilizing the <code>colspan</code> and{' '} <code>rowspan</code> attributes. These prove essential for intricate table layouts including merged header cells, grouped data, and summary rows:</p>
        <pre><code>{'<!-- Header spanning two columns -->\n<tr>\n  <th colspan="2">Full Name</th>\n  <th>Age</th>\n</tr>\n<tr>\n  <td>John</td>\n  <td>Smith</td>\n  <td>34</td>\n</tr>\n\n<!-- Cell spanning two rows -->\n<tr>\n  <td rowspan="2">Monday</td>\n  <td>9:00 AM</td>\n  <td>Math</td>\n</tr>\n<tr>\n  <td>10:00 AM</td>\n  <td>Science</td>\n</tr>'}</code></pre>
        <p>When working with <code>rowspan</code> or <code>colspan</code>, make sure to delete the cells that are covered by the spanning element. Every single row needs the precise cell quantity once spans are factored in; if totals are off, web browsers automatically add blank cells to fix it, potentially triggering layout bugs.</p>

        <h2>Accessible HTML Tables: WAI-ARIA and Screen Reader Best Practices</h2>
        <p>Tables rank among the hardest components for screen readers to interpret when built poorly, yet they can become fully accessible through proper organization and attributes.</p>
        <h3>Always Use {'<th>'} for Headers</h3>
        <p>
          Every column and row that represents a header should use <code>{'<th>'}</code>, not a styled
          <code>{'<td>'}</code>. Screen readers announce <code>{'<th>'}</code> cells differently from data
          cells and associate them with the cells they label.
        </p>
        <h3>scope Attribute</h3>
        <p>Basic tables without spanning headers only require <code>scope="col"</code> for column headers and{' '} <code>scope="row"</code> for row headers. When dealing with complex tables that feature multi-level or spanning headers, apply <code>id</code> along with <code>headers</code> attributes to define precise relationships:</p>
        <pre><code>{'<th id="q1" colspan="2">Q1</th>\n...\n<td headers="q1 jan">142</td>'}</code></pre>
        <h3>caption Element</h3>
        <p>
          Provide a <code>{'<caption>'}</code> that describes the table's content. Screen readers read
          the caption first, giving users context before they start navigating cells. If the table's
          purpose is clear from surrounding text, an <code>aria-label</code> or{' '}
          <code>aria-describedby</code> on the <code>{'<table>'}</code> element can serve a similar
          purpose.
        </p>
        <h3>summary Attribute (Deprecated yet Still Utilized)</h3>
        <p>
          The HTML4 <code>summary</code> attribute on <code>{'<table>'}</code> provided a description of
          the table structure for screen readers. It is deprecated in HTML5 but still widely supported.
          The modern alternative is to include a detailed description in a <code>{'<caption>'}</code>
          or in a paragraph before the table referenced via <code>aria-describedby</code>.
        </p>

        <h2>Responsive HTML Tables</h2>
        <p>Tables naturally span wide and fail to adjust smoothly to small mobile displays. A ten-column table easily overflows its parent container on smartphone screens. Multiple approaches solve this issue:</p>
        <h3>Horizontal Scroll</h3>
        <p>The easiest method: enclose the table inside a wrapper set to <code>overflow-x: auto</code>. The layout stays intact while visitors scroll sideways when required. This remains accessible and semantically sound, despite feeling slightly clunky on mobile screens.</p>
        <pre><code>{'.table-wrapper {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}'}</code></pre>
        <h3>Priority Columns using CSS</h3>
        <p>Conceal secondary columns on compact displays:</p>
        <pre><code>{'@media (max-width: 600px) {\n  .col-secondary { display: none; }\n}'}</code></pre>
        <h3>Card-Style Transform</h3>
        <p>Transform every single row into a visual card for smaller viewports. Every cell header appears as a pseudo-element leveraging the <code>data-label</code> property:</p>
        <pre><code>{'@media (max-width: 600px) {\n  table, thead, tbody, th, td, tr { display: block; }\n  thead tr { display: none; }\n  td::before {\n    content: attr(data-label) ": ";\n    font-weight: bold;\n  }\n}'}</code></pre>
        <h3>JavaScript-Enhanced Responsiveness</h3>
        <p>Plugins such as DataTables, Footable, and Tablesaw deliver complete responsive table solutions via JavaScript, featuring swipe navigation, column toggle, and card views.</p>

        <h2>Designing HTML Tables through CSS</h2>
        <p>Contemporary CSS delivers precise control over all details of table styling. Essential properties:</p>
        <h3>border-collapse</h3>
        <p>Determines whether neighboring cell borders combine into one or remain apart. <code>border-collapse: collapse</code> unifies adjacent borders into a singular line, which is typical for standard data grids.{' '} <code>border-collapse: separate</code> serves as the default, leaving borders distinct and allowing{' '} <code>border-spacing</code> to create space between cells.</p>
        <pre><code>{'table {\n  border-collapse: collapse;\n  width: 100%;\n}\nth, td {\n  border: 1px solid #e5e7eb;\n  padding: 12px 16px;\n  text-align: left;\n}'}</code></pre>
        <h3>Striped Rows</h3>
        <pre><code>{'tbody tr:nth-child(even) {\n  background-color: #f9fafb;\n}'}</code></pre>
        <h3>Hover Highlighting</h3>
        <pre><code>{'tbody tr:hover {\n  background-color: #f0f9ff;\n}'}</code></pre>
        <h3>Sticky Headers</h3>
        <p>Keep column headers fixed at the top of the screen while visitors scroll down an extensive table:</p>
        <pre><code>{'thead th {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 1;\n  box-shadow: 0 1px 0 #e5e7eb;\n}'}</code></pre>
        <h3>Column Width Control</h3>
        <p>Table columns automatically fit their contents initially. To manage column dimensions:</p>
        <pre><code>{'table {\n  table-layout: fixed;\n  width: 100%;\n}\n/* Each column is 1/4 of the table */\nth { width: 25%; }'}</code></pre>
        <p>
          <code>table-layout: fixed</code> uses the widths set on <code>{'<col>'}</code> elements or the
          first row's cells to determine column widths, ignoring cell content. This dramatically improves
          rendering performance for large tables because the browser doesn't need to measure all cells
          before determining widths.
        </p>

        <h2>Interactive and Sortable Tables</h2>
        <p>Sorting columns becomes vital when handling massive datasets. Basic visual cues are possible with pure CSS, yet true sorting demands JavaScript. A simple vanilla JS method:</p>
        <pre><code>{"document.querySelectorAll('th[data-sortable]').forEach(th => {\n  th.addEventListener('click', () => {\n    const table = th.closest('table');\n    const col = Array.from(th.parentElement.children).indexOf(th);\n    const rows = Array.from(table.querySelectorAll('tbody tr'));\n    const asc = th.dataset.sort !== 'asc';\n    rows.sort((a, b) => {\n      const aText = a.cells[col].textContent;\n      const bText = b.cells[col].textContent;\n      return asc\n        ? aText.localeCompare(bText, undefined, { numeric: true })\n        : bText.localeCompare(aText, undefined, { numeric: true });\n    });\n    table.querySelector('tbody').append(...rows);\n    th.dataset.sort = asc ? 'asc' : 'desc';\n  });\n});"}</code></pre>

        <h2>Virtual Scrolling and Paginated Tables</h2>
        <p>Displaying thousands of table rows simultaneously becomes sluggish and hard to navigate. Two standard approaches:</p>
        <ul>
          <li><strong>Pagination</strong>: show a set amount of rows per page (like 25 or 50) using next and previous controls. Straightforward to build and grasp. Ideal when users browse through records one by one.</li>
          <li><strong>Virtual scrolling</strong>: load solely the rows shown inside the current viewport, dynamically mounting and unmounting DOM elements as users scroll. Packages such as TanStack Table (formerly React Table), AG Grid, and Handsontable use this technique. Supports millions of rows without slowing down.</li>
        </ul>

        <h2>Tables within JavaScript Frameworks</h2>
        <h3>React</h3>
        <p>TanStack Table (TanStack/table) stands as the top headless table library for React. It manages sorting, filtering, pagination, virtualization, and column controls while letting you handle the UI, ensuring complete flexibility. Basic scenarios function nicely with AG Grid Community Edition or Material UI's DataGrid component.</p>
        <h3>Vue</h3>
        <p>Vue 3's combination with TanStack Table alongside Vuetify's v-data-table are favored options. Built-in server-side sorting and pagination are delivered via the v-data-table component.</p>
        <h3>Tailwind CSS Table Formatting</h3>
        <p>Out of the box, Tailwind's typography plugin offers appealing table styling for prose tables. Common Tailwind approaches for custom tables include:</p>
        <pre><code>{'<table class="w-full text-sm text-left border-collapse">\n  <thead class="bg-gray-50 text-gray-700 uppercase text-xs">\n    <tr>\n      <th class="px-6 py-3 border-b border-gray-200">Name</th>\n    </tr>\n  </thead>\n  <tbody class="divide-y divide-gray-200">\n    <tr class="hover:bg-gray-50">\n      <td class="px-6 py-4">John Smith</td>\n    </tr>\n  </tbody>\n</table>'}</code></pre>

        <h2>Tables versus CSS Grid and Flexbox</h2>
        <p>
          A perennial web development question: when should you use a <code>{'<table>'}</code> versus CSS
          Grid or Flexbox? The answer is semantic:
        </p>
        <ul>
          <li>
            <strong>Use <code>{'<table>'}</code></strong> when the data is inherently tabular "” where each
            cell's meaning depends on both its row and column. Financial data, comparison charts, schedules,
            and data exports are tabular. The relationship between rows and columns is part of the data
            meaning.
          </li>
          <li><strong>Use CSS Grid or Flexbox</strong> for UI scaffolding, navigation menus, form field alignment, or product card grids where elements visually resemble tables yet lack row-column relationships. These choices involve presentation rather than data structure.</li>
        </ul>
        <p>
          Using <code>{'<table>'}</code> for layout (outside of HTML emails, which remain a special case)
          is incorrect HTML5 and harms accessibility "” screen readers announce table structure to users,
          confusing them with announced row/column counts that have no semantic meaning.
        </p>

        <h2>HTML Tables in Emails</h2>
        <p>A notable exception to the rule against using tables for layout is found in email HTML. Due to extremely limited CSS support, email clients like Outlook cannot handle Flexbox, Grid, or many modern layout properties. For complex email templates to render reliably across major clients such as Outlook, Gmail, and Apple Mail, table-based layouts remain the sole dependable option. Higher-level abstractions compiled to table-based HTML for emails are provided by frameworks like Foundation for Emails and MJML.</p>

        <h2>[10] How to Use This HTML Table Generator</h2>
        <p>
          Configure the number of rows and columns, add header text, data cells, and optional caption.
          Toggle <code>colspan</code> and <code>rowspan</code> for merged cells. Select styling options
          including border style, striped rows, hover effects, and responsive wrapper. The generator
          outputs clean, semantic HTML5 with proper <code>{'<thead>'}</code>, <code>{'<tbody>'}</code>,{' '}
          <code>{'<th scope>'}</code>, and <code>{'<caption>'}</code> elements, plus corresponding CSS
          for your selected styles. Use the generated code as a starting point for data-driven tables
          in your HTML pages, CMS, or JavaScript framework.
        </p>
      </div>
    </section>
  ),
  faqs: [
    {
      category: 'Basics',
      question: 'When is it appropriate to use an HTML table?',
      answer:
        'An HTML table should be employed when data is inherently tabular, meaning the meaning of each cell relies on both its column header and row header. Appropriate use cases encompass financial data, schedules, comparison charts, sports standings, and data exports. Avoid using tables for visual alignment of non-tabular content or page layouts; opt for CSS Grid or Flexbox instead.',
    },
    {
      category: 'Basics',
      question: 'What is the minimum HTML required for a valid table?',
      answer:
        'A valid table minimally requires <table>, at least one <tr> (table row), and a minimum of one <td> or <th> (table cell) inside that row. Nevertheless, a well-structured and accessible table should also incorporate <caption>, <thead>, <tbody>, and <th scope="col"> for column headers. Although not strictly mandated by HTML, these elements are strongly advised for accessibility and semantics.',
    },
    {
      category: 'Structure',
      question: 'What is the difference between <th> and <td>?',
      answer:
        'A header cell labeling a row or column is represented by <th> (table header), which is typically centered and bold by default. Content-containing data cells are represented by <td> (table data). Screen readers handle them distinctly, announcing <th> cells as headers linked to the data cells they describe. Always employ <th> for column and row headers instead of a styled <td>.',
    },
    {
      category: 'Structure',
      question: 'What are <thead>, <tbody>, and <tfoot> and are they necessary?',
      answer:
        'These tags categorize table rows based on their function, with <thead> containing header rows, <tbody> holding data rows, and <tfoot> wrapping summary or footer rows. They enhance accessibility and semantics, enabling browsers to repeat headers during printing. Data sections can also be organized using multiple <tbody> elements. While HTML does not require them, their use is strongly recommended for any non-trivial table.',
    },
    {
      category: 'Spanning',
      question: 'How can I merge cells inside an HTML table?',
      answer:
        'To span a cell across several columns, utilize the colspan attribute like this: <td colspan="2">. Spanning multiple rows is achieved with rowspan: <td rowspan="3">. When a cell spans multiple rows or columns, the corresponding cells in the affected rows must be removed, ensuring every row accounts for all column positions, including those covered by spanning cells originating elsewhere.',
    },
    {
      category: 'Accessibility',
      question: 'How do I make an HTML table accessible to screen readers?',
      answer:
        'Use <th> for all headers, apply scope="col" to column headers, and use scope="row" for row headers. Include a <caption> element to describe the table. For complex tables featuring spanning headers, explicit associations are made using id attributes on <th> and headers attributes on <td>. Verify that the table maintains a logical reading order where top-to-bottom and left-to-right align with the data structure.',
    },
    {
      category: 'Accessibility',
      question: 'What is the purpose of the scope attribute on a <th> element?',
      answer:
        'The scope attribute informs screen readers regarding which cells correspond to a given header. When scope="col" is used, the header labels every cell directly beneath it in that column. When scope="row" is applied, the header labels all cells to its right within that row. Groups of rows or columns are targeted by scope="colgroup" and scope="rowgroup". In complex tables lacking scope, screen readers might fail to correctly associate headers with their corresponding data cells.',
    },
    {
      category: 'Styling',
      question: 'How do I eliminate the spacing between table cell borders?',
      answer:
        'Apply border-collapse: collapse to the table element. Default table cells feature separate borders with spacing between them via border-collapse: separate. By merging adjacent borders into one, border-collapse: collapse grants tables a classic, clean grid look. Note that the border-spacing property for gaps between cells only functions alongside border-collapse: separate.',
    },
    {
      category: 'Styling',
      question: 'How do I generate striped table rows using CSS?',
      answer:
        'Utilize the pseudo-class nth-child: tbody tr:nth-child(even) { background-color: #f9fafb; }, or substitute odd for alternating rows. For Tailwind CSS, append the even:bg-gray-50 class to each <tr> element or employ a JavaScript framework to apply alternating classes. Striped rows greatly enhance scannability for wide tables containing numerous columns.',
    },
    {
      category: 'Styling',
      question: 'How can I make table column headers sticky?',
      answer:
        'Apply position: sticky; top: 0 to <th> elements in the <thead>. Include a background color so the header isn&#39;t transparent, alongside a z-index greater than table cells. The table needs a scroll container (overflow-y: auto on a parent possessing fixed height) for sticky behavior to function. Incorporating a bottom border or box-shadow on the sticky header supplies a visual separator as rows scroll underneath it.',
    },
    {
      category: 'Responsive',
      question: 'How can I make a wide table work on mobile displays?',
      answer:
        'Three primary strategies: (1) Horizontal scroll wrapper &#8211; enclose the table within a div featuring overflow-x: auto; the table scrolls horizontally without breaking layout. (2) Hide columns &#8211; employ media queries to hide less critical columns on small displays. (3) Card transform &#8211; utilize CSS to convert each row into a card, exhibiting header labels as pseudo-element prefixes. The horizontal scroll wrapper represents the easiest and most accessible method.',
    },
    {
      category: 'Performance',
      question: 'How can I enhance HTML table rendering performance for massive datasets?',
      answer:
        'Set table-layout: fixed combined with explicit column widths to stop the browser from measuring all cell contents prior to rendering. For extremely large tables (thousands of rows), implement virtual scrolling through libraries like TanStack Table &#8211; merely render visible rows while creating or destroying rows as users scroll. Paginating data (25-50 rows per page) is the easiest performance fix and usually preferred from a UX perspective.',
    },
    {
      category: 'Sorting',
      question: 'How can I add sortable columns to an HTML table?',
      answer:
        'Bind click listener handlers across your <th> elements. When triggered, gather every <tr> entry residing inside the <tbody>, reorganize them via Array.sort() while assessing the textual contents of the matching column cells, and re-insert the sorted collection into the <tbody> container. Leverage localeCompare configured with numeric: true to maintain natural alphanumeric sorting. Reflect current sorting directions (visual chevrons) on the target <th> by toggling a custom data attribute. For more advanced data presentation demands, integrate TanStack Table or an equivalent headless grid solution.',
    },
    {
      category: 'Frameworks',
      question: 'Which React library works best for complex data tables?',
      answer:
        'TanStack Table (formerly React Table) stands as the top headless table library &#8211; it handles sorting, filtering, pagination, grouping, and virtualization while leaving you in control of HTML rendering. AG Grid Community Edition delivers a full-featured grid complete with rich built-in UI. Mantine DataTable and MUI DataGrid offer pre-styled components. For basic tables, a standard HTML table utilizing Tailwind CSS styles frequently outperforms heavy libraries concerning bundle size and performance.',
    },
    {
      category: 'Layout',
      question: 'Can I utilize CSS table display values (display: table) instead of HTML table elements?',
      answer:
        'Yes &#8211; display: table, display: table-row, display: table-cell can be assigned to non-table HTML elements to grant them table layout functionality minus table semantics. This previously served as a cross-browser layout hack but is currently unnecessary given Flexbox and Grid. Steer clear of this pattern: it grants elements table layout without table semantics, confusing screen readers, and offers zero benefits over contemporary CSS layout.',
    },
    {
      category: 'Layout',
      question: 'Ought I to employ HTML tables for page layout?',
      answer:
        'Absolutely not &#8211; contemporary web design should never rely on tables to structure pages. Structuring layouts with tables is an outdated 1990s practice that introduces serious accessibility hurdles (screen readers verbalize meaningless row and column counts), severely complicates responsive design, and produces inflexible HTML that is difficult to update. Instead, rely on CSS Grid to structure two-dimensional interfaces and Flexbox to align one-dimensional elements. The only lingering exception remains HTML email (in which strict email client limitations still necessitate table-driven formatting).',
    },
    {
      category: 'Email',
      question: 'Why do tables remain utilized for HTML email layout?',
      answer:
        'Email clients, particularly Outlook (which relies on the Microsoft Word rendering engine), have exceptionally restricted CSS support. They fail to support Flexbox, CSS Grid, or numerous modern layout properties. Table-based layout is the singular dependable approach for generating multi-column email templates rendering accurately across all primary clients. MJML and Foundation for Emails abstract this complexity by allowing you to author clean HTML compiling to table-based email HTML.',
    },
    {
      category: 'Caption',
      question: 'What is the <caption> element and when should I apply it?',
      answer:
        'The <caption> element supplies a title or description for the table. It must serve as the initial child of <table>. Screen readers announce the caption prior to reading the table, assisting users in grasping the table&#39;s purpose upfront. Utilize a caption for any table where purpose isn&#39;t instantly apparent from surrounding context. Captions additionally boost SEO by supplying descriptive text linked with the table&#39;s data.',
    },
    {
      category: 'colgroup',
      question: 'What are <col> and <colgroup> elements employed for?',
      answer:
        'The <colgroup> and <col> tags permit CSS styling to affect entire columns without adding classes to each cell. <colgroup> groups columns, and each <col> inside stands for one or more columns. Apply the span attribute on <col> to represent multiple sequential columns. Assign width, background-color, or visibility CSS to style whole columns. This represents the sole method to style an entire column with a single CSS rule.',
    },
    {
      category: 'Tailwind',
      question: 'How can I style HTML tables via Tailwind CSS?',
      answer:
        'Assign Tailwind utility classes directly to table elements. Typical pattern: table: w-full text-sm text-left border-collapse; thead: bg-gray-50 text-gray-600 uppercase; th/td: px-6 py-3 border-b border-gray-200; tbody tr: hover:bg-gray-50; alternating rows: even:bg-gray-50 on tr elements. The @tailwindcss/typography plugin delivers pre-styled prose tables via the prose class.',
    },
    {
      category: 'Validation',
      question: 'What constitute typical HTML table validation errors?',
      answer:
        'Typical mistakes: (1) Inconsistent cell counts &#8211; every row must feature the same total number of cells after calculating colspan/rowspan; (2) Placing <tr> directly into a <table> without wrapping them in <thead>/<tbody> (valid syntax, yet discouraged); (3) Utilizing <td> rather than <th> across header sections; (4) Omitting the scope attribute on header cells; (5) Inserting non-tabular tags directly underneath <table> (only <caption>, <colgroup>, <thead>, <tbody>, and <tfoot> serve as legitimate direct children). Verify markup via the W3C Markup Validation Service.',
    },
    {
      category: 'JavaScript',
      question: 'How can I dynamically generate an HTML table utilizing JavaScript?',
      answer:
        '[1] Generate the table tag, then leverage innerHTML or document.createElement. For rendering dynamic data: const table = document.createElement("table"); const tbody = table.createTBody(); data.forEach(row => { const tr = tbody.insertRow(); row.forEach(cell => { tr.insertCell().textContent = cell; }); }). insertRow() along with insertCell() serve as DOM Table API functions dedicated to proper node generation. When working in React/Vue, iterate through your data collections to produce JSX or template-based rows.',
    },
    {
      category: 'Export',
      question: '[2] How do I export an HTML table to CSV or Excel?',
      answer:
        '[3] Exporting to CSV: traverse each table row and its corresponding cells, concatenating entries with commas and separating rows with line breaks, while escaping text values containing commas. Generate a Blob assigned the text/csv MIME type and trigger a file download using an injected <a> element. Exporting to Excel: incorporate the SheetJS (xlsx) library, capable of processing a DOM table element directly via XLSX.utils.table_to_sheet(tableElement) to output an .xlsx workbook. For backend-driven exports, transmit your dataset via JSON and process it with backend libraries.',
    },
    {
      category: 'Print',
      question: '[4] How do I make HTML table headers repeat on every printed page?',
      answer:
        '[5] Enclosing your header lines within <thead> provides the canonical mechanism to duplicate headings across printouts: modern web browsers (Chrome, Firefox, Safari, Edge) automatically repeat <thead> items along the top margin of every printed sheet across extended tables. Verify that your print stylesheet avoids assigning display: block to any table nodes, which disrupts this native behavior. Alternatively, you can apply CSS: thead { display: table-header-group; } directly.',
    },
  ],
};
