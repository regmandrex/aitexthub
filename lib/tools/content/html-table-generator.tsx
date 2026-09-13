import type { ToolContent } from './index';

export const htmlTableGeneratorContent: ToolContent = {
  writeUp: (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>HTML Table Generator: Build Semantic, Accessible Data Tables</h2>
        <p>
          HTML tables are the correct and semantic way to display tabular data on the web "” data organized
          in rows and columns with meaningful relationships between values. Despite their occasional misuse
          as layout tools (a practice long abandoned in favor of CSS), HTML tables remain indispensable
          for presenting structured data: financial reports, comparison charts, data exports, schedules,
          sports standings, and any information where the relationship between rows and columns carries
          meaning. Our HTML Table Generator lets you configure table structure, styling, and accessibility
          attributes visually, then export clean, semantic HTML.
        </p>

        <h2>Table HTML Elements and Their Semantic Roles</h2>
        <p>
          A fully semantic HTML table uses a hierarchy of elements that describe both structure and purpose:
        </p>
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
        <p>
          These sectioning elements group rows by purpose:
        </p>
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
        <p>
          Represents a header cell "” a cell that labels either a column or a row. The <code>scope</code>
          attribute is critical for accessibility:
        </p>
        <ul>
          <li><code>scope="col"</code>: this header describes the entire column below it.</li>
          <li><code>scope="row"</code>: this header describes the entire row to the right of it.</li>
          <li><code>scope="colgroup"</code>: this header spans a column group.</li>
          <li><code>scope="rowgroup"</code>: this header spans a row group.</li>
        </ul>
        <p>
          Screen readers use <code>scope</code> to announce which header applies to each data cell as a
          user navigates the table. Without proper <code>scope</code>, navigating a complex table with
          a screen reader becomes disorienting.
        </p>
        <h3>{'<td>'} "” Table Data Cell</h3>
        <p>
          Represents a data cell containing the actual tabular content. Can contain any HTML: text,
          images, links, buttons, even nested tables (though nesting should be avoided when possible
          for simplicity and accessibility).
        </p>
        <h3>{'<col>'} and {'<colgroup>'}</h3>
        <p>
          <code>{'<colgroup>'}</code> groups one or more columns for styling purposes.{' '}
          <code>{'<col>'}</code> elements within a <code>{'<colgroup>'}</code> represent individual columns.
          These elements allow CSS to target entire columns without adding classes to every cell:
        </p>
        <pre><code>{'<colgroup>\n  <col style="width: 200px;">\n  <col span="2" style="background: #f8f8f8;">\n  <col style="width: 100px;">\n</colgroup>'}</code></pre>

        <h2>Cell Spanning: colspan and rowspan</h2>
        <p>
          Table cells can span multiple columns or rows using the <code>colspan</code> and{' '}
          <code>rowspan</code> attributes. These are essential for complex table layouts like merged header
          cells, summary rows, and grouped data:
        </p>
        <pre><code>{'<!-- Header spanning two columns -->\n<tr>\n  <th colspan="2">Full Name</th>\n  <th>Age</th>\n</tr>\n<tr>\n  <td>John</td>\n  <td>Smith</td>\n  <td>34</td>\n</tr>\n\n<!-- Cell spanning two rows -->\n<tr>\n  <td rowspan="2">Monday</td>\n  <td>9:00 AM</td>\n  <td>Math</td>\n</tr>\n<tr>\n  <td>10:00 AM</td>\n  <td>Science</td>\n</tr>'}</code></pre>
        <p>
          When using <code>rowspan</code> or <code>colspan</code>, be careful to remove the cells that
          the spanning cell replaces. Each row must have the correct number of cells after accounting for
          spans; if the cell count doesn't add up, browsers insert empty cells to compensate, which can
          cause unexpected layout shifts.
        </p>

        <h2>Accessible HTML Tables: WAI-ARIA and Screen Reader Best Practices</h2>
        <p>
          Tables are one of the most screen-reader-unfriendly elements if implemented carelessly, but
          they can be made excellent with the right attributes and structure.
        </p>
        <h3>Always Use {'<th>'} for Headers</h3>
        <p>
          Every column and row that represents a header should use <code>{'<th>'}</code>, not a styled
          <code>{'<td>'}</code>. Screen readers announce <code>{'<th>'}</code> cells differently from data
          cells and associate them with the cells they label.
        </p>
        <h3>scope Attribute</h3>
        <p>
          For simple tables (no spanning headers), <code>scope="col"</code> on column headers and{' '}
          <code>scope="row"</code> on row headers is sufficient. For complex tables with spanning or
          multi-level headers, use the <code>id</code> and <code>headers</code> attributes for explicit
          relationships:
        </p>
        <pre><code>{'<th id="q1" colspan="2">Q1</th>\n...\n<td headers="q1 jan">142</td>'}</code></pre>
        <h3>caption Element</h3>
        <p>
          Provide a <code>{'<caption>'}</code> that describes the table's content. Screen readers read
          the caption first, giving users context before they start navigating cells. If the table's
          purpose is clear from surrounding text, an <code>aria-label</code> or{' '}
          <code>aria-describedby</code> on the <code>{'<table>'}</code> element can serve a similar
          purpose.
        </p>
        <h3>summary Attribute (Deprecated but Still Used)</h3>
        <p>
          The HTML4 <code>summary</code> attribute on <code>{'<table>'}</code> provided a description of
          the table structure for screen readers. It is deprecated in HTML5 but still widely supported.
          The modern alternative is to include a detailed description in a <code>{'<caption>'}</code>
          or in a paragraph before the table referenced via <code>aria-describedby</code>.
        </p>

        <h2>Responsive HTML Tables</h2>
        <p>
          Tables are inherently wide and do not adapt gracefully to narrow mobile viewports. A table with
          ten columns can easily overflow its container on a phone screen. Several strategies address this:
        </p>
        <h3>Horizontal Scroll</h3>
        <p>
          The simplest approach: wrap the table in a container with <code>overflow-x: auto</code>. The
          table maintains its structure; users scroll horizontally if needed. This is semantically correct
          and accessible, though it can be awkward on touch devices.
        </p>
        <pre><code>{'.table-wrapper {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}'}</code></pre>
        <h3>Priority Columns with CSS</h3>
        <p>
          Hide less important columns on narrow screens:
        </p>
        <pre><code>{'@media (max-width: 600px) {\n  .col-secondary { display: none; }\n}'}</code></pre>
        <h3>Card-Style Transform</h3>
        <p>
          Reformat each row as a visual card on small screens. Each cell's header is shown as a
          pseudo-element using the <code>data-label</code> attribute:
        </p>
        <pre><code>{'@media (max-width: 600px) {\n  table, thead, tbody, th, td, tr { display: block; }\n  thead tr { display: none; }\n  td::before {\n    content: attr(data-label) ": ";\n    font-weight: bold;\n  }\n}'}</code></pre>
        <h3>JavaScript-Enhanced Responsiveness</h3>
        <p>
          Libraries like DataTables, Footable, and Tablesaw provide fully responsive table patterns with
          JavaScript, including column toggle, card views, and swipe navigation.
        </p>

        <h2>Styling HTML Tables with CSS</h2>
        <p>
          Modern CSS provides fine-grained control over every aspect of table appearance. Key properties:
        </p>
        <h3>border-collapse</h3>
        <p>
          Controls whether adjacent cell borders are merged or kept separate. <code>border-collapse: collapse</code>
          merges adjacent borders into a single line "” the standard look for most data tables.{' '}
          <code>border-collapse: separate</code> (default) keeps borders separate, enabling{' '}
          <code>border-spacing</code> for gaps between cells.
        </p>
        <pre><code>{'table {\n  border-collapse: collapse;\n  width: 100%;\n}\nth, td {\n  border: 1px solid #e5e7eb;\n  padding: 12px 16px;\n  text-align: left;\n}'}</code></pre>
        <h3>Striped Rows</h3>
        <pre><code>{'tbody tr:nth-child(even) {\n  background-color: #f9fafb;\n}'}</code></pre>
        <h3>Hover Highlighting</h3>
        <pre><code>{'tbody tr:hover {\n  background-color: #f0f9ff;\n}'}</code></pre>
        <h3>Sticky Headers</h3>
        <p>
          Make column headers stick to the top of the viewport as the user scrolls through a long table:
        </p>
        <pre><code>{'thead th {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 1;\n  box-shadow: 0 1px 0 #e5e7eb;\n}'}</code></pre>
        <h3>Column Width Control</h3>
        <p>
          By default, table columns size to their content. To control column widths:
        </p>
        <pre><code>{'table {\n  table-layout: fixed;\n  width: 100%;\n}\n/* Each column is 1/4 of the table */\nth { width: 25%; }'}</code></pre>
        <p>
          <code>table-layout: fixed</code> uses the widths set on <code>{'<col>'}</code> elements or the
          first row's cells to determine column widths, ignoring cell content. This dramatically improves
          rendering performance for large tables because the browser doesn't need to measure all cells
          before determining widths.
        </p>

        <h2>Sortable and Interactive Tables</h2>
        <p>
          For large datasets, sorting by column is an essential feature. Pure CSS can implement simple
          visual hints, but actual sorting requires JavaScript. A basic vanilla JS approach:
        </p>
        <pre><code>{"document.querySelectorAll('th[data-sortable]').forEach(th => {\n  th.addEventListener('click', () => {\n    const table = th.closest('table');\n    const col = Array.from(th.parentElement.children).indexOf(th);\n    const rows = Array.from(table.querySelectorAll('tbody tr'));\n    const asc = th.dataset.sort !== 'asc';\n    rows.sort((a, b) => {\n      const aText = a.cells[col].textContent;\n      const bText = b.cells[col].textContent;\n      return asc\n        ? aText.localeCompare(bText, undefined, { numeric: true })\n        : bText.localeCompare(aText, undefined, { numeric: true });\n    });\n    table.querySelector('tbody').append(...rows);\n    th.dataset.sort = asc ? 'asc' : 'desc';\n  });\n});"}</code></pre>

        <h2>Paginated Tables and Virtual Scrolling</h2>
        <p>
          Rendering thousands of table rows at once is slow and difficult to use. Two common solutions:
        </p>
        <ul>
          <li>
            <strong>Pagination</strong>: display a fixed number of rows per page (e.g., 25 or 50) with
            previous/next navigation. Simple to implement and understand. Works well when users need to
            browse data sequentially.
          </li>
          <li>
            <strong>Virtual scrolling</strong>: render only the rows currently visible in the viewport,
            creating and destroying DOM nodes as the user scrolls. Libraries like TanStack Table (formerly
            React Table), AG Grid, and Handsontable implement this pattern. Enables tables with millions
            of rows without performance degradation.
          </li>
        </ul>

        <h2>Tables in JavaScript Frameworks</h2>
        <h3>React</h3>
        <p>
          TanStack Table (TanStack/table) is the most popular headless table library for React. It handles
          sorting, filtering, pagination, virtualization, and column management while leaving all rendering
          to you, making it fully customizable. Simpler use cases work well with AG Grid Community Edition
          or Material UI's DataGrid component.
        </p>
        <h3>Vue</h3>
        <p>
          Vuetify's v-data-table and Vue 3's integration with TanStack Table are popular choices. The
          v-data-table component provides rich built-in functionality including server-side pagination
          and sorting.
        </p>
        <h3>Tailwind CSS Table Styles</h3>
        <p>
          Tailwind's typography plugin provides nice table styles out of the box for prose tables. For
          custom tables, common Tailwind patterns:
        </p>
        <pre><code>{'<table class="w-full text-sm text-left border-collapse">\n  <thead class="bg-gray-50 text-gray-700 uppercase text-xs">\n    <tr>\n      <th class="px-6 py-3 border-b border-gray-200">Name</th>\n    </tr>\n  </thead>\n  <tbody class="divide-y divide-gray-200">\n    <tr class="hover:bg-gray-50">\n      <td class="px-6 py-4">John Smith</td>\n    </tr>\n  </tbody>\n</table>'}</code></pre>

        <h2>Tables vs CSS Grid and Flexbox</h2>
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
          <li>
            <strong>Use CSS Grid or Flexbox</strong> for layouts that visually resemble a table but where
            the items do not have row-column relationships: product card grids, form field alignment,
            navigation menus, or UI scaffolding. These are presentation decisions, not data organization.
          </li>
        </ul>
        <p>
          Using <code>{'<table>'}</code> for layout (outside of HTML emails, which remain a special case)
          is incorrect HTML5 and harms accessibility "” screen readers announce table structure to users,
          confusing them with announced row/column counts that have no semantic meaning.
        </p>

        <h2>HTML Tables in Email</h2>
        <p>
          Email HTML is a notable exception to the "don't use tables for layout" rule. Email clients,
          particularly Outlook, have extremely limited CSS support and do not support Flexbox, Grid, or
          many modern layout properties. Table-based layout remains the only reliable way to build
          complex email templates that render consistently across Gmail, Outlook, Apple Mail, and other
          major clients. Frameworks like MJML and Foundation for Emails provide higher-level abstractions
          that compile to table-based HTML for email.
        </p>

        <h2>How to Use This HTML Table Generator</h2>
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
      question: 'When should I use an HTML table?',
      answer:
        'Use an HTML table when data is inherently tabular "” where each cell&#39;s meaning depends on both its row header and column header. Financial data, comparison charts, sports standings, schedules, and data exports are appropriate table use cases. Do not use tables for page layout or visual alignment of non-tabular content; use CSS Grid or Flexbox instead.',
    },
    {
      category: 'Basics',
      question: 'What is the minimum HTML needed for a valid table?',
      answer:
        'The minimum valid table requires <table>, at least one <tr> (table row), and at least one <td> or <th> (table cell) inside the row. However, for a well-structured, accessible table, you should also include <thead>, <tbody>, <th scope="col"> for column headers, and a <caption>. These elements are not strictly required by HTML but are strongly recommended for semantics and accessibility.',
    },
    {
      category: 'Structure',
      question: 'What is the difference between <th> and <td>?',
      answer:
        '<th> (table header) represents a header cell that labels a column or row. It is typically bold and centered by default. <td> (table data) represents a data cell containing content. Screen readers treat them differently: <th> cells are announced as headers and associated with the data cells they label. Always use <th> for row and column headers, never a styled <td>.',
    },
    {
      category: 'Structure',
      question: 'What are <thead>, <tbody>, and <tfoot> and should I use them?',
      answer:
        'These elements group table rows by function. <thead> wraps header rows, <tbody> wraps data rows, and <tfoot> wraps footer/summary rows. They improve semantics, accessibility, and allow browsers to repeat headers when printing. You can have multiple <tbody> elements to group data sections. While not required by HTML, they are strongly recommended for any non-trivial table.',
    },
    {
      category: 'Spanning',
      question: 'How do I merge cells in an HTML table?',
      answer:
        'Use the colspan attribute to span a cell across multiple columns: <td colspan="2">. Use rowspan to span across multiple rows: <td rowspan="3">. When a cell spans multiple columns/rows, remove the corresponding cells from affected rows "” each row must account for all column positions including those occupied by spanning cells from other rows.',
    },
    {
      category: 'Accessibility',
      question: 'How do I make an HTML table accessible for screen readers?',
      answer:
        'Use <th> for all headers, add scope="col" for column headers and scope="row" for row headers. Include a <caption> element describing the table. For complex tables with spanning headers, use id attributes on <th> and headers attributes on <td> for explicit associations. Ensure the table has logical reading order (left-to-right, top-to-bottom matches the data&#39;s logical structure).',
    },
    {
      category: 'Accessibility',
      question: 'What does the scope attribute do on a <th> element?',
      answer:
        'The scope attribute tells screen readers which cells a header applies to. scope="col" means the header labels all cells in its column below it. scope="row" means the header labels all cells in its row to the right. scope="colgroup" and scope="rowgroup" apply to groups of columns/rows. Without scope, screen readers in complex tables may not correctly associate headers with their data cells.',
    },
    {
      category: 'Styling',
      question: 'How do I remove the gap between table cell borders?',
      answer:
        'Set border-collapse: collapse on the table element. By default, table cells have separate borders (border-collapse: separate) with space between them. border-collapse: collapse merges adjacent borders into a single border, giving tables the classic clean grid appearance. Note that border-spacing (gap between cells) only works with border-collapse: separate.',
    },
    {
      category: 'Styling',
      question: 'How do I create striped table rows with CSS?',
      answer:
        'Use the nth-child pseudo-class: tbody tr:nth-child(even) { background-color: #f9fafb; }. Or use odd for the alternating rows. For Tailwind CSS: add the class even:bg-gray-50 to each <tr> element, or use a JavaScript framework to apply alternating classes. Striped rows significantly improve scannability for wide tables with many columns.',
    },
    {
      category: 'Styling',
      question: 'How do I make table column headers sticky?',
      answer:
        'Apply position: sticky; top: 0 to <th> elements in the <thead>. Add a background color so the header isn&#39;t transparent, and a z-index higher than the table cells. The table must have a scroll container (overflow-y: auto on a parent with a fixed height) for sticky to take effect. Adding a bottom border or box-shadow to the sticky header provides a visual separator when rows scroll beneath it.',
    },
    {
      category: 'Responsive',
      question: 'How do I make a wide table work on mobile screens?',
      answer:
        'Three main approaches: (1) Horizontal scroll wrapper "” wrap the table in a div with overflow-x: auto; the table scrolls horizontally without breaking layout. (2) Hide columns "” use media queries to hide less important columns on small screens. (3) Card transform "” use CSS to convert each row into a card, displaying header labels as pseudo-element prefixes. The horizontal scroll wrapper is the simplest and most accessible approach.',
    },
    {
      category: 'Performance',
      question: 'How do I improve HTML table rendering performance for large datasets?',
      answer:
        'Set table-layout: fixed and explicit column widths to prevent the browser from measuring all cell content before rendering. For very large tables (thousands of rows), use virtual scrolling via libraries like TanStack Table "” only render visible rows and create/destroy rows as the user scrolls. Paginating data (25-50 rows per page) is the simplest performance solution and often preferable from a UX standpoint.',
    },
    {
      category: 'Sorting',
      question: 'How do I add sortable columns to an HTML table?',
      answer:
        'Add click event listeners to <th> elements. In the handler, read all <tr> elements from <tbody>, sort them using Array.sort() comparing the text content of the clicked column&#39;s cells, then append the sorted rows back to <tbody>. Use localeCompare with numeric: true for natural sort order. Update visual indicators (arrows) in the <th> using a data attribute. For complex sorting needs, use TanStack Table or a similar headless table library.',
    },
    {
      category: 'Frameworks',
      question: 'What is the best React library for advanced data tables?',
      answer:
        'TanStack Table (formerly React Table) is the most popular headless table library "” it handles sorting, filtering, pagination, grouping, and virtualization while you control the HTML rendering. AG Grid Community Edition offers a full-featured grid with rich built-in UI. Mantine DataTable and MUI DataGrid provide pre-styled components. For simple tables, a plain HTML table with Tailwind CSS styles often outperforms heavy libraries in bundle size and performance.',
    },
    {
      category: 'Layout',
      question: 'Can I use CSS table display values (display: table) instead of HTML table elements?',
      answer:
        'Yes "” display: table, display: table-row, display: table-cell can be applied to non-table HTML elements to give them table layout behavior without the table semantic. This was once used as a cross-browser layout hack but is now unnecessary given Flexbox and Grid. Avoid this pattern: it gives elements table layout without table semantics, confusing screen readers, and does not provide any benefit over modern CSS layout.',
    },
    {
      category: 'Layout',
      question: 'Should I use HTML tables for page layout?',
      answer:
        'No "” never use tables for page layout in modern web development. Tables for layout is a 1990s technique that creates severe accessibility problems (screen readers announce row/column counts that have no semantic meaning), makes responsive design extremely difficult, and produces rigid HTML that is hard to maintain. Use CSS Grid for two-dimensional page layouts and Flexbox for one-dimensional component layouts. The only current exception is HTML email (where email client limitations still require table-based layout).',
    },
    {
      category: 'Email',
      question: 'Why are tables still used for HTML email layout?',
      answer:
        'Email clients, especially Outlook (which uses the Microsoft Word rendering engine), have extremely limited CSS support. They don&#39;t support Flexbox, CSS Grid, or many modern layout properties. Table-based layout is the only reliable way to create multi-column email templates that render correctly in all major clients. MJML and Foundation for Emails abstract this complexity by letting you write clean HTML that compiles to table-based email HTML.',
    },
    {
      category: 'Caption',
      question: 'What is the <caption> element and when should I use it?',
      answer:
        'The <caption> element provides a title or description for the table. It must be the first child of <table>. Screen readers announce the caption before reading the table, helping users understand the table&#39;s purpose upfront. Use a caption for any table where the purpose isn&#39;t immediately obvious from surrounding context. Captions also improve SEO by providing descriptive text associated with the table&#39;s data.',
    },
    {
      category: 'colgroup',
      question: 'What are <col> and <colgroup> elements used for?',
      answer:
        '<colgroup> and <col> allow CSS styling to be applied to entire columns without adding classes to every cell. <colgroup> groups columns, and each <col> inside represents one or more columns. Use the span attribute on <col> to represent multiple consecutive columns. Apply width, background-color, or visibility CSS to style entire columns. This is the only way to style a full column with a single CSS rule.',
    },
    {
      category: 'Tailwind',
      question: 'How do I style HTML tables with Tailwind CSS?',
      answer:
        'Apply Tailwind utility classes directly to table elements. Common pattern: table: w-full text-sm text-left border-collapse; thead: bg-gray-50 text-gray-600 uppercase; th/td: px-6 py-3 border-b border-gray-200; tbody tr: hover:bg-gray-50; alternating rows: even:bg-gray-50 on tr elements. The @tailwindcss/typography plugin provides pre-styled prose tables via the prose class.',
    },
    {
      category: 'Validation',
      question: 'What are common HTML table validation errors?',
      answer:
        'Common errors: (1) Incorrect cell count "” rows must have the same number of cells accounting for colspan/rowspan; (2) Nesting <tr> directly in <table> without <thead>/<tbody> (allowed but not recommended); (3) Using <td> where <th> should be for headers; (4) Missing scope on header cells; (5) Placing non-table elements directly inside <table> (only <caption>, <colgroup>, <thead>, <tbody>, <tfoot> are valid direct children). Validate with the W3C Markup Validation Service.',
    },
    {
      category: 'JavaScript',
      question: 'How do I dynamically create an HTML table with JavaScript?',
      answer:
        'Create the table element, then use document.createElement or innerHTML. For data-driven tables: const table = document.createElement("table"); const tbody = table.createTBody(); data.forEach(row => { const tr = tbody.insertRow(); row.forEach(cell => { tr.insertCell().textContent = cell; }); }). insertRow() and insertCell() are DOM Table API methods that handle proper element creation. For React/Vue, map over data arrays to render JSX or template rows.',
    },
    {
      category: 'Export',
      question: 'How do I export an HTML table to CSV or Excel?',
      answer:
        'To CSV: iterate through table rows and cells, joining cells with commas and rows with newlines, handle quoting for cells containing commas. Create a Blob with type text/csv and trigger a download with a temporary <a> element. To Excel: use the SheetJS (xlsx) library which can read a DOM table element directly via XLSX.utils.table_to_sheet(tableElement) and generate an .xlsx file. For server-side exports, pass the data in JSON and use server-side libraries.',
    },
    {
      category: 'Print',
      question: 'How do I make HTML table headers repeat on every printed page?',
      answer:
        'Wrapping header rows in <thead> is the standard way to enable repeated headers in print: browsers (Chrome, Firefox, Safari, Edge) automatically repeat the <thead> content at the top of each printed page for long tables. Ensure your print stylesheet does not set display: block on table elements, which would break this behavior. You can also use CSS: thead { display: table-header-group; } explicitly.',
    },
  ],
};
