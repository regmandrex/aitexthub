import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { JsonToCsvTool } from '@/components/tools/JsonToCsvTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 86400;
const toolSlug = 'json-to-csv';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta(toolSlug);
}

const faqs: FaqItem[] = [
  {
    category: 'Basics',
    question: 'What does a JSON to CSV converter do?',
    answer: `A JSON to CSV converter transforms data from JavaScript Object Notation (JSON) format into Comma-Separated Values (CSV) format. JSON is a hierarchical, nested data format commonly used in APIs, configuration files, and web applications. CSV is a flat, tabular format where each row represents a record and each column represents a field, widely used in spreadsheets (Excel, Google Sheets) and data analysis tools. Converting JSON to CSV allows you to take structured data from an API response or database export and open it directly in a spreadsheet for analysis, reporting, filtering, or import into another system. Our tool handles arrays of objects, single objects, and optionally flattens nested objects into dot-notation column headers — all instantly in your browser with no file upload required.`,
  },
  {
    category: 'Basics',
    question: 'What JSON structure does the converter expect?',
    answer: `The tool works best with JSON arrays of objects, where each object has the same (or similar) keys. This is the most common API response format: [{"name":"Alice","age":30},{"name":"Bob","age":25}]. Each object becomes a row in the CSV, and the unique keys across all objects become columns. If an object is missing a key present in other objects, that cell is left empty. The tool also handles a single JSON object (not an array), converting it into a two-row CSV (header row + one data row). For JSON with nested objects — like {"user":{"name":"Alice","city":"NYC"}} — enable the "Flatten nested objects" option to convert nested keys to dot notation columns (user.name, user.city). Arrays within objects are converted to semicolon-separated strings in a single cell. Deep nesting beyond two levels may produce complex column names but will still convert.`,
  },
  {
    category: 'Basics',
    question: 'Is this JSON to CSV converter free and does it require signup?',
    answer: `Yes, our JSON to CSV converter is completely free with no registration required. Paste your JSON data, click Convert, and download your CSV instantly. There are no file size limits enforced by our tool (though very large JSON files may be limited by your browser's JavaScript memory). No account, email address, or payment is ever required. The conversion happens entirely in your browser using JavaScript — your data is never uploaded to any server, making it completely private. This is important when converting sensitive data like API responses containing customer information, financial records, or proprietary data. After conversion, you get a download button that saves the CSV file directly to your computer using the browser's built-in file download mechanism.`,
  },
  {
    category: 'Usage',
    question: 'How do I convert JSON to CSV for Excel or Google Sheets?',
    answer: `To open JSON data in Excel or Google Sheets, convert it to CSV using our tool, then import the CSV. Step 1: paste your JSON array into the input area. Step 2: choose your delimiter (comma for standard CSV, semicolon if your locale uses commas as decimal separators, tab for TSV). Step 3: ensure "Include headers" is checked so the first row contains column names. Step 4: click Convert, then Download CSV. For Excel: open Excel, go to Data > From Text/CSV, select your downloaded file, and choose the matching delimiter in the import wizard. For Google Sheets: go to File > Import, select your CSV file, choose the separator type, and click Import. Both applications will populate a spreadsheet with your JSON data in a clean tabular layout ready for sorting, filtering, formulas, and analysis. If your JSON contains dates as ISO strings, Excel may not auto-format them — use a custom format or TEXT() formula to display them correctly.`,
  },
  {
    category: 'Usage',
    question: 'How do I convert an API JSON response to CSV?',
    answer: `Many APIs return data as JSON arrays that are ideal for CSV conversion. The workflow: (1) Make your API call using a browser (for GET requests), curl, Postman, or your code. (2) Copy the JSON response body — it should be an array of objects like [{"id":1,"name":"Product A","price":9.99}, ...]. (3) Paste it into our JSON to CSV converter. (4) Select the appropriate delimiter and options. (5) Click Convert and download. If the API returns a nested response (e.g., the actual data array is nested under a key like {"data": [...], "meta": {...}}), extract the array first by deleting the outer wrapper or use the path to the array. For REST APIs, tools like Postman and Insomnia have built-in CSV export options, but when you need a quick one-off conversion, our browser tool is faster. For automated or recurring conversions, consider using a scripting language like Python (pandas json_normalize) or Node.js (json2csv library).`,
  },
  {
    category: 'Options',
    question: 'What does the "Flatten nested objects" option do?',
    answer: `The flatten nested objects option handles JSON with hierarchical structure. Without flattening, a nested object like {"user": {"name": "Alice", "city": "NYC"}} would appear in the CSV as a single column "user" with the value [object Object]. With flattening enabled, the tool uses dot notation to expand nested keys into separate columns: "user.name" = "Alice" and "user.city" = "NYC". This makes deeply nested API responses much more usable in spreadsheets. For example, a typical e-commerce API response might have structure like {"order_id": 123, "customer": {"name": "Alice", "email": "alice@example.com"}, "shipping": {"address": "123 Main St", "city": "NYC"}}. With flattening, this becomes columns: order_id, customer.name, customer.email, shipping.address, shipping.city. Arrays within nested objects (e.g., an array of tags) are joined as semicolon-separated values in a single cell rather than creating multiple rows.`,
  },
  {
    category: 'Options',
    question: 'When should I use semicolon or tab as the CSV delimiter instead of comma?',
    answer: `The choice of delimiter depends on your use case and locale. Use comma (the default) for standard CSV files compatible with most English-locale software, American data systems, and international data interchange. Use semicolon when your data or locale uses commas as decimal separators — in many European countries, 1.000,50 (one thousand and fifty cents) uses a comma for decimals, so the standard CSV delimiter is the semicolon instead. Excel in these locales automatically expects semicolon-delimited files. Use tab for Tab-Separated Values (TSV) when your data contains commas or semicolons as part of the data values (e.g., addresses, descriptions, free-text fields that users might have typed commas in). Tab is also commonly used for copying/pasting directly into Excel from the clipboard, since Excel interprets tab-separated text as separate columns when pasted. If your CSV values contain quotation marks or newlines, our tool wraps those fields in double-quotes and escapes internal quotes, following the RFC 4180 CSV standard.`,
  },
  {
    category: 'Technical',
    question: 'How does the converter handle arrays inside JSON objects?',
    answer: `When a JSON object contains an array value (e.g., {"name": "Alice", "tags": ["developer", "designer"]}), the converter joins the array elements into a semicolon-separated string in a single cell: "developer;designer". This is the most practical approach for tabular data — splitting each array element into its own row would duplicate all other fields and create a different (possibly unintended) data structure. If you need each array element on its own row (a many-to-one expansion), you would need to preprocess the JSON before conversion. For deeply nested arrays of objects (e.g., an order with a line_items array), the flatten option will not automatically expand these into multiple rows either — the entire line_items array will appear as a JSON string in the cell. For complex transformations like this, consider using pandas in Python (with json_normalize and its record_path parameter) or the jq command-line tool.`,
  },
  {
    category: 'Technical',
    question: 'Does the JSON to CSV converter handle Unicode and special characters correctly?',
    answer: `Yes, the converter handles Unicode characters correctly. The output CSV uses UTF-8 encoding, which supports all Unicode characters including accented Latin characters (é, ñ, ü), Asian scripts (Chinese, Japanese, Korean), Arabic, Hebrew, emoji, and other non-ASCII characters. The downloaded CSV file includes a UTF-8 BOM (Byte Order Mark) so Excel automatically opens it with the correct encoding. Without the BOM, Excel sometimes defaults to an incorrect encoding and displays garbled characters for non-ASCII content. Google Sheets correctly handles UTF-8 with or without BOM. If you are importing the CSV programmatically (Python, R, database import), specify utf-8 encoding in your import statement. Special CSV characters (commas, double quotes, newlines within values) are handled by quoting the field and escaping internal double quotes as double-double-quotes (""), following the RFC 4180 standard.`,
  },
  {
    category: 'Technical',
    question: 'What happens if my JSON objects have different keys?',
    answer: `Our converter handles inconsistent JSON arrays gracefully. It first scans all objects in the array to collect the complete union of all keys, then uses this union as the CSV header row. Objects that are missing a particular key get an empty cell in that column. For example: [{"name":"Alice","age":30},{"name":"Bob","city":"NYC"}]. The headers would be "name,age,city" and the rows would be "Alice,30," and "Bob,,NYC". This approach produces a complete CSV that captures all fields across all objects, even when they are not uniform. If object key ordering matters (you want specific columns first), you would need to preprocess the JSON to reorder keys. The column order in the output CSV follows the order in which keys are first encountered scanning through the array from top to bottom, which usually matches the first object's key order.`,
  },
  {
    category: 'Alternatives',
    question: 'How do I convert JSON to CSV in Python?',
    answer: `Python offers several ways to convert JSON to CSV. The simplest uses the built-in json and csv modules: import json, csv; data = json.loads(json_string); writer = csv.DictWriter(open('output.csv','w'), fieldnames=data[0].keys()); writer.writeheader(); writer.writerows(data). For nested JSON, pandas with json_normalize is much more powerful: import pandas as pd, json; df = pd.json_normalize(json.loads(json_string)); df.to_csv('output.csv', index=False). json_normalize handles nested keys with dot notation automatically and has advanced options for record_path (which nested key contains the records array) and meta (which parent fields to include alongside records). For command-line one-liners, the jq tool can extract and transform JSON: jq -r '(.[0]|keys_unsorted) as $keys | $keys, (.[] | [.[$keys[]]] | @csv)' input.json. Our browser tool covers the one-off conversion case; these scripting approaches are better for automating recurring conversions.`,
  },
  {
    category: 'Alternatives',
    question: 'How do I convert JSON to CSV in Excel directly?',
    answer: `Excel (version 2016 and later) can import JSON natively using Power Query. Go to Data > Get Data > From File > From JSON, select your JSON file, and Power Query opens. In the Power Query Editor, click the expand button on the "List" column to expand JSON arrays into rows, then expand "Record" columns to get individual fields as columns. Click Close & Load to import the transformed data into your spreadsheet. This approach handles nested JSON well through the visual expand UI and allows you to filter, rename, and reorder columns before importing. The downside is it requires saving your JSON as a file first and navigating the Power Query interface, which has a learning curve. For quick one-off conversions where you just want a flat CSV from a simple JSON array, our browser tool is considerably faster. Power Query shines for complex transformations and recurring imports where you can save the query.`,
  },
  {
    category: 'Comparison',
    question: 'What is the difference between JSON and CSV?',
    answer: `JSON (JavaScript Object Notation) and CSV (Comma-Separated Values) are both common data interchange formats but with fundamentally different structures. JSON is hierarchical — it supports nested objects and arrays, multiple data types (string, number, boolean, null, object, array), and has no fixed schema. It is ideal for representing complex, real-world data structures from APIs and databases. CSV is flat and tabular — it represents data as rows and columns with all values as strings (no native type information), no nesting, and a simple structure matching spreadsheets. JSON is better for data exchange between applications; CSV is better for human inspection, spreadsheet analysis, and import into traditional databases and BI tools. When you need to bridge these two worlds — taking API data into Excel or feeding spreadsheet exports into a JSON-consuming app — format conversion tools like our JSON to CSV converter are essential.`,
  },
  {
    category: 'Use Cases',
    question: 'What are common use cases for converting JSON to CSV?',
    answer: `JSON to CSV conversion appears in many practical data workflows. API data analysis: extract and analyze REST API responses in Excel or Google Sheets without writing code. Database export analysis: many NoSQL databases export as JSON; converting to CSV enables SQL-style analysis in spreadsheet tools. Reporting: convert API-sourced data into CSV for import into reporting tools like Tableau, Power BI, or Looker. Data migration: transform JSON data exports into CSV for import into relational databases, CRMs, or ERPs that accept CSV input. QA and debugging: inspect API response data in a human-readable spreadsheet format to verify field values. Data sharing: share structured data with non-technical stakeholders who work in spreadsheets rather than JSON. ETL pipelines: JSON-to-CSV is a common transformation step in Extract-Transform-Load data pipelines. Our browser tool covers the interactive, one-off use cases; for automated pipelines, scripting with pandas or Node.js json2csv is more appropriate.`,
  },
  {
    category: 'Troubleshooting',
    question: 'Why does my converted CSV show [object Object] instead of field values?',
    answer: `If you see "[object Object]" in your CSV cells, the JSON field at that position contains a nested JavaScript object rather than a simple value. For example, {"user": {"name": "Alice"}} — if you convert this without flattening, the "user" column will show [object Object] because the value is an object, not a string. The solution: enable the "Flatten nested objects" option in our converter. This will expand nested objects into dot-notation columns (user.name) rather than trying to stringify the nested object. If after enabling flattening you still see [object Object], there may be additional nesting levels deeper than the flattener handles, or the nested value might be an array of objects (which are stringified as JSON rather than expanded). In that case, examine your JSON structure and consider preprocessing it — either simplifying the nesting or manually extracting the relevant nested arrays before conversion.`,
  },
  {
    category: 'Troubleshooting',
    question: 'Why does my CSV not import correctly into Excel?',
    answer: `Several issues can cause CSV import problems in Excel. Wrong delimiter: if your data was exported with semicolons but Excel expects commas (or vice versa), columns will not split correctly. In our tool, make sure the selected delimiter matches what Excel expects for your locale — European locales often use semicolons by default. Encoding issues: Excel may default to a non-UTF-8 encoding and display garbled characters for accented or non-Latin characters. Our tool includes a UTF-8 BOM in the downloaded file specifically to prevent this — if you still see encoding issues, try opening Excel and using Data > From Text/CSV instead of double-clicking the file. Date format issues: Excel may not recognize ISO 8601 date strings (2024-01-15T10:30:00Z) as dates automatically. You may need to use Data > Text to Columns and specify date format, or use a formula to convert. Number format issues: numbers stored as strings (e.g., "1,234") may not be treated as numbers. Ensure numeric fields in your JSON are actual numbers (not quoted strings) for correct Excel number import.`,
  },
  {
    category: 'Advanced',
    question: 'How do I convert CSV back to JSON?',
    answer: `If you need to convert CSV back to JSON, our sister tool (CSV to JSON converter) handles this in the opposite direction. Paste your CSV data, specify whether it has a header row, choose the delimiter, and optionally enable type inference to convert numeric strings and booleans to their native JSON types. The output is a JSON array of objects where each row becomes an object with the header values as keys. CSV-to-JSON conversion is useful when you have edited data in a spreadsheet and need to feed it back into a JSON-consuming API or application. Note that any hierarchy information that was flattened during JSON-to-CSV conversion cannot be automatically reconstructed during CSV-to-JSON — the nested structure must be rebuilt manually or programmatically if needed. The round-trip JSON → CSV → JSON is lossless only for flat (non-nested) JSON structures.`,
  },
  {
    category: 'Advanced',
    question: 'Can this tool handle very large JSON files?',
    answer: `Our browser-based converter can handle reasonably large JSON files — typical API responses of a few megabytes process instantly. For very large files (tens of megabytes or more), browser JavaScript memory limits may apply. Modern browsers can handle arrays of tens of thousands of objects without issue. If you encounter performance problems with very large files: try using a command-line tool instead — jq is extremely fast for large file processing. The Python approach with pandas is also efficient for large datasets. If you must use a browser tool, consider splitting your large JSON file into smaller chunks first (most JSON arrays can be split at the array boundaries). For enterprise-scale data processing (hundreds of megabytes to gigabytes of JSON), dedicated ETL tools or cloud data pipelines are more appropriate than browser-based converters.`,
  },
  {
    category: 'Privacy',
    question: 'Is my JSON data secure when using this converter?',
    answer: `Yes, your data is completely secure. Our JSON to CSV converter runs entirely in your browser using JavaScript — no data is transmitted to our servers. The JSON you paste into the tool and the CSV it generates never leave your computer. The conversion happens locally using the browser's JavaScript engine. This makes our tool appropriate for sensitive data: API responses containing customer information, financial data, proprietary business data, health records, or any other confidential information. After you close the browser tab, all data is gone from memory. We do not log inputs, store outputs, or use analytics that capture form content. This privacy-by-design approach is why browser-based tools are often preferred over server-side converters for sensitive data processing, even when more features (like file upload) might be convenient.`,
  },
  {
    category: 'Tools',
    question: 'What other data format converters are available on this site?',
    answer: `In addition to JSON to CSV conversion, we offer a complete suite of data format converters. CSV to JSON: convert spreadsheet exports back to JSON format with type inference. JSON to YAML: convert JSON configuration files to the more human-readable YAML format. YAML to JSON: convert YAML files to JSON for use with APIs or tools that expect JSON. XML Formatter: beautify and validate XML with configurable indentation. YAML Formatter: format and validate YAML files with proper indentation. These tools work together for data format workflows — you might convert a CSV export to JSON, then to YAML for a configuration file, or convert a JSON API response to CSV for spreadsheet analysis. All tools run in-browser with no upload, are completely free, and work with any modern browser on desktop or mobile.`,
  },
  {
    category: 'Tools',
    question: 'Are there browser extensions for converting JSON to CSV?',
    answer: `Yes, several browser extensions offer JSON viewing and conversion capabilities. JSONView (Chrome and Firefox) formats raw JSON responses in the browser for easy reading and allows copying formatted JSON. JSON Formatter (Chrome) adds syntax highlighting and collapsible tree view to JSON responses. Some extensions include export-to-CSV functionality directly. However, for one-off conversion tasks, navigating to our dedicated tool page is often faster and more reliable than installing and managing browser extensions. Extensions also have access to your browsing data and other permissions that may be undesirable for privacy-conscious users. For developers who regularly work with JSON APIs, REST clients like Postman or Insomnia have built-in JSON viewing and export features including CSV export, which may be a more integrated solution than separate browser tools.`,
  },
  {
    category: 'Tips',
    question: 'How do I convert multiple JSON files to CSV in batch?',
    answer: `Our browser tool handles one JSON file at a time — for batch conversion of multiple files, command-line tools or scripts are more efficient. In Python with pandas: import os, json, pandas as pd; [pd.json_normalize(json.load(open(f))).to_csv(f.replace('.json','.csv'), index=False) for f in os.listdir('.') if f.endswith('.json')]. In Node.js with the json2csv package: const {Parser} = require('json2csv'); and loop through files. From the command line with jq (processing a directory): for f in *.json; do jq -r '(.[0]|keys_unsorted) as $k | $k, (.[] | [.[$k[]]] | @csv)' "$f" > "${f%.json}.csv"; done. These approaches allow processing dozens or hundreds of files without manual copy-pasting. If you have a one-time batch job with a small number of files, opening multiple browser tabs with our tool is a quick workaround.`,
  },
  {
    category: 'Tips',
    question: 'What is the fastest way to convert a JSON API response to a spreadsheet?',
    answer: `The fastest path from API JSON to spreadsheet depends on your tools and workflow. Option 1 (fastest for one-off): Copy the JSON response from your browser's Network tab or API client, paste into our tool, click Convert, then Download. Open the downloaded CSV in Excel or drag it into Google Sheets. Total time: under 60 seconds. Option 2 (fastest for recurring use): In Excel, create a Power Query connection to the API endpoint directly (Data > Get Data > From Web). Power Query handles JSON parsing and you can refresh data with one click. Option 3 (fastest for developers): Use a scripting language with HTTP + JSON-to-dataframe in one step: in Python, import requests, pandas as pd; df = pd.json_normalize(requests.get(url).json()); df.to_csv('output.csv'). The browser tool approach is optimal for exploratory, ad-hoc analysis. Power Query or scripting is better for recurring data pulls where you want automation.`,
  },
];

const writeUp = (
  <section className="prose prose-slate max-w-none">
    <h2>What Is JSON to CSV Conversion?</h2>
    <p>
      JSON (JavaScript Object Notation) is the universal language of web APIs and modern data exchange. When you fetch data from virtually any web service — a weather API, an e-commerce platform, a database export, a CRM system — the response arrives as JSON. It is human-readable, hierarchically structured, and self-describing. CSV (Comma-Separated Values), by contrast, is a flat tabular format perfectly matched to spreadsheet applications like Microsoft Excel and Google Sheets.
    </p>
    <p>
      JSON to CSV conversion bridges these two worlds. It takes structured API data and transforms it into a format that business analysts, data scientists, and anyone with a spreadsheet can immediately work with — without writing a single line of code. Our free online JSON to CSV converter handles this transformation instantly in your browser, with no data upload and no privacy concerns.
    </p>

    <h2>How to Use the JSON to CSV Converter</h2>
    <p>
      The tool accepts JSON input in several forms. The most common is a JSON array of objects — the standard format for API list responses. Paste your JSON array into the left panel. The tool automatically detects whether you have a valid JSON array and shows a preview of the structure. Configure the options: select your delimiter (comma for standard CSV, semicolon for European locales, tab for TSV), decide whether to include a header row, and optionally enable nested object flattening for hierarchical JSON. Click Convert and the formatted CSV appears immediately. Click Download CSV to save the file to your computer.
    </p>

    <h2>Understanding JSON Structure for CSV Conversion</h2>
    <p>
      The ideal input for JSON to CSV conversion is an array of flat objects with consistent keys. For example: [{"name":"Alice","age":30,"city":"New York"},{"name":"Bob","age":25,"city":"Los Angeles"}]. This becomes a three-column CSV with headers "name,age,city" and two data rows. The converter handles variations: missing keys across objects produce empty cells, additional keys in some objects expand the column list, and mixed string/number values are handled transparently.
    </p>
    <p>
      Real-world API responses are rarely perfectly flat. They often contain nested objects ({"address": {"street": "123 Main", "city": "NYC"}}) and arrays within objects ({"tags": ["javascript", "react"]}). The flatten option handles nested objects by expanding them to dot-notation columns (address.street, address.city). Arrays within objects are joined as semicolon-delimited strings in a single cell. Deep nesting is handled recursively.
    </p>

    <h2>Converting API Responses to CSV</h2>
    <p>
      The most common use case for JSON to CSV conversion is working with API data. REST APIs almost universally return JSON, and when you need to analyze, share, or import this data into non-API-native tools, CSV is the standard intermediate format. The workflow: make your API request (in Postman, your browser's network tab, or curl), copy the JSON response body, paste it into our converter, configure options, and download the CSV.
    </p>
    <p>
      For paginated APIs that return data in multiple pages, you may need to combine multiple JSON arrays before converting. The easiest approach: copy each page response, manually combine them into a single array ([ ...page1, ...page2, ...page3 ]), paste the combined array into the converter, and download once. For APIs with large result sets, automating this with a script is more practical than manual combination.
    </p>

    <h2>JSON to CSV for Data Analysis in Excel and Google Sheets</h2>
    <p>
      Once you have your CSV, importing into Excel or Google Sheets is straightforward. In Excel, the simplest method is to double-click the CSV file — Excel opens it automatically and applies column splitting based on the file's delimiter. If columns are not splitting correctly, use Data &gt; From Text/CSV for more control over the import settings. In Google Sheets, go to File &gt; Import &gt; Upload and select your CSV file. Google Sheets offers options for separator type, convert text to numbers, and whether to replace the spreadsheet or create a new sheet.
    </p>
    <p>
      After import, your JSON data is available as a structured spreadsheet. You can sort by any column, filter rows using AutoFilter, create PivotTables for summary analysis, add formulas for calculations, and create charts. For data that updates regularly, consider automating the JSON-to-CSV pipeline rather than manually repeating the conversion each time.
    </p>

    <h2>Handling Nested JSON Structures</h2>
    <p>
      Many APIs return deeply nested JSON. A typical e-commerce order API response might look like: {"order_id": 12345, "customer": {"id": 789, "name": "Alice Johnson", "email": "alice@example.com"}, "items": [{"sku": "ABC123", "qty": 2, "price": 29.99}], "shipping": {"address": "123 Main St", "city": "Portland", "state": "OR"}}. With our flatten option enabled, the nested "customer" and "shipping" objects expand to: customer.id, customer.name, customer.email, shipping.address, shipping.city, shipping.state. The items array (an array of objects) is stringified as JSON in a single cell — to properly expand arrays of nested objects into multiple rows, you would need a more specialized tool or preprocessing script.
    </p>

    <h2>JSON to CSV in Different Programming Languages</h2>
    <p>
      For automated or recurring JSON to CSV conversion, scripting languages offer more power than browser tools. In Python, the pandas library's json_normalize function is the gold standard: it handles nested structures intelligently, supports record_path for specifying which array to expand, and supports meta for including parent-level fields alongside expanded records. The csv module works for simple flat arrays. In JavaScript/Node.js, the json2csv npm package provides a Parser class with extensive options. In R, the jsonlite package's fromJSON function reads JSON and purrr can flatten nested structures before writing with write.csv. Command-line users can use jq with its @csv format string for quick one-liners.
    </p>

    <h2>CSV Delimiter Selection: Comma, Semicolon, and Tab</h2>
    <p>
      The choice of delimiter affects compatibility with downstream tools. Comma is the universal default, correct for English-locale software and international data exchange. Semicolon is the European standard, used in countries where commas are decimal separators (Germany, France, Italy, Spain). If you export a CSV with commas and open it in Excel in a European locale, all data may appear in a single column — use semicolons to avoid this. Tab creates TSV (Tab-Separated Values), which is useful when your data contains embedded commas or semicolons (like product descriptions or addresses) that would otherwise corrupt CSV parsing. Our tool wraps fields containing delimiters in double-quotes per RFC 4180, but TSV avoids this complexity for data with lots of embedded punctuation.
    </p>

    <h2>Privacy and Security of Your JSON Data</h2>
    <p>
      Unlike server-based converters, our tool processes your JSON data entirely in your browser. No data is transmitted to our servers. The JavaScript conversion code runs locally, the resulting CSV is generated in-memory, and the download is triggered by the browser's file API — all without any network request containing your data. This matters when your JSON contains sensitive information: customer emails, API keys (rotate them if they appeared in a response you are analyzing), financial records, health data, or proprietary business data. Many organizations have data security policies that prohibit uploading sensitive data to web services — our tool complies with such policies by design.
    </p>

    <h2>Common JSON to CSV Conversion Issues and Solutions</h2>
    <p>
      The most frequent issues and how to resolve them: [object Object] in cells — enable the flatten nested objects option; Empty CSV with no rows — verify your JSON is an array, not a single object at the top level; Garbled characters in Excel — our tool includes a UTF-8 BOM for Excel compatibility, but if you copy-paste the CSV content rather than using the download button, the BOM may be lost — use the download button; Columns not splitting in Excel — ensure the delimiter setting matches your Excel locale; Missing fields — the tool scans all objects for the union of keys, so sparse objects with unique keys will create columns with mostly empty cells (this is correct behavior for inconsistent JSON arrays).
    </p>

    <h2>JSON to CSV for Database Import</h2>
    <p>
      Many relational databases accept CSV as an import format. MySQL LOAD DATA INFILE, PostgreSQL COPY, SQLite's .import command, and SQL Server BULK INSERT all support CSV import. After converting your JSON to CSV with our tool, you can import it directly into a database table. Key considerations: ensure the column names in the CSV header match the database table column names (or map them during import), verify that data types are compatible (numbers should be stored as actual numbers in JSON, not quoted strings, for clean import), and handle NULL values appropriately (empty CSV cells typically import as NULL or empty string depending on database configuration). This JSON-to-CSV-to-database pipeline is common for one-time data migrations and backfills.
    </p>

    <h2>Automating Recurring JSON to CSV Conversions</h2>
    <p>
      For recurring conversions (daily API pulls, hourly data exports), browser-based tools are not practical — automation is needed. A minimal Python automation: set up a cron job or scheduled task that calls your API, saves the response JSON, converts it to CSV using pandas, and deposits the CSV in a shared location (S3 bucket, SharePoint folder, email attachment). Cloud tools like AWS Glue, Google Dataflow, and Azure Data Factory handle JSON-to-CSV transformation as part of larger ETL pipelines. For non-technical users, tools like Zapier and Make (formerly Integromat) can automate API-to-spreadsheet workflows without code. The browser tool is optimized for the interactive, exploratory use case; choose the right tool for each scenario.
    </p>

    <h2>Handling Nested JSON Objects When Converting to CSV</h2>
    <p>
      The fundamental limitation of JSON to CSV conversion is that CSV is inherently flat — rows and columns with no concept of nesting — while JSON can represent arbitrarily deep hierarchical structures. When your JSON contains nested objects, a strategy for flattening is required.
    </p>
    <p>
      Dot-notation flattening: the most common approach. Nested keys are concatenated with dots to create flat column names. <code>&#123;"user": &#123;"name": "Alice", "address": &#123;"city": "London"&#125;&#125;&#125;</code> becomes columns <code>user.name</code> and <code>user.address.city</code>. This preserves all data without loss and produces predictable column names. Downside: column names with dots can be awkward in some spreadsheet applications and databases. In JavaScript: libraries like flat.js handle recursive dot-notation flattening. In Python: <code>pd.json_normalize(data)</code> flattens nested JSON using dot notation automatically.
    </p>
    <p>
      Arrays within JSON objects: when a JSON object contains an array property (e.g., <code>&#123;"name": "Alice", "tags": ["developer", "manager"]&#125;</code>), flattening becomes more complex. Options: (1) join array values into a single CSV cell as a semicolon-separated string — "developer;manager". (2) Create multiple columns — tags_0, tags_1, tags_2 — with each array element in its own column. (3) Explode: create one CSV row per array element, repeating the parent object's scalar fields. The explode approach is most database-friendly but multiplies row count. Our tool uses option 1 (joined strings) for array values.
    </p>
    <p>
      Parent-child relationship preservation: for deeply nested JSON representing parent-child relationships (e.g., an order with line items), the cleanest output is two separate CSV files — one for orders (scalar fields only) and one for line items (with a foreign key back to the order ID). Convert each level of your JSON separately: first extract and convert the parent objects, then extract and convert all child arrays with a join key. This relational approach produces CSVs that import cleanly into relational databases and maintain data integrity.
    </p>

    <h2>JSON to CSV for Google Sheets and Data Analysis Workflows</h2>
    <p>
      Google Sheets is the most common destination for JSON to CSV conversions in business and analytics workflows. Understanding exactly how to get your converted CSV into Google Sheets cleanly saves significant frustration.
    </p>
    <p>
      Method 1 — Copy-paste: convert JSON to CSV in our tool, copy the CSV output, open Google Sheets, click an empty cell, and paste (Ctrl+V). Google Sheets automatically parses comma-delimited content when pasted, distributing values into columns correctly. This works well for standard comma-delimited CSVs with no special characters in values. If values contain commas, Sheets may split them incorrectly — use the File Import method instead.
    </p>
    <p>
      Method 2 — File import: save the CSV output as a .csv file, then go to File → Import → Upload in Google Sheets. Choose separator type "Comma" and whether to replace the current sheet or insert a new one. This method handles quoted fields with embedded commas correctly and is the most reliable for complex CSV. It also correctly detects and handles UTF-8 encoding including international characters.
    </p>
    <p>
      Method 3 — IMPORTDATA formula: if your JSON source is accessible via URL that returns CSV, use =IMPORTDATA("https://your-api.com/data.csv") to pull the CSV directly into Sheets. This auto-refreshes periodically. Not applicable for JSON-to-CSV conversion since the JSON source needs to be pre-converted, but useful if you have a server-side endpoint that performs the conversion.
    </p>
    <p>
      Data validation after import: verify row and column counts match expectations, check that numeric columns contain numbers (not text formatted as numbers — indicated by left-alignment in Sheets), and verify date columns are recognized as dates (Sheets-formatted dates show right-aligned; text dates show left-aligned). Use Format → Number → Date to reformat date columns if they imported as strings.
    </p>

    <h2>JSON to CSV for Machine Learning Datasets and Model Training</h2>
    <p>
      Machine learning practitioners frequently work with JSON-format datasets from APIs, annotation tools, and research sources, and need to convert them to CSV for use with pandas, scikit-learn, and other ML libraries that work natively with tabular data.
    </p>
    <p>
      Feature engineering preparation: JSON datasets often contain rich nested structures that need to be flattened into feature columns for ML training. Converting JSON to CSV is often the first step before feature engineering — the flat CSV structure makes it clear which fields exist and how to extract features from them. Seeing the data in CSV (or a spreadsheet) gives ML practitioners an immediate visual of the dataset's structure, missing values, and scale.
    </p>
    <p>
      Label and annotation JSON: labeling tools like Label Studio, CVAT, and Labelbox export annotations in JSON format. These annotation JSONs need to be converted to CSV (with image path, label class, bounding box coordinates as columns) for training object detection and classification models. Our converter handles the flattening of simple annotation structures; deeply nested annotation formats may require a custom conversion script.
    </p>
    <p>
      pandas integration: for Python-based ML workflows, pandas' <code>pd.read_json()</code> directly reads JSON arrays into DataFrames without needing the CSV intermediate step. <code>df = pd.read_json('data.json')</code> for JSON arrays, <code>pd.json_normalize(json_data)</code> for nested JSON objects. The CSV conversion step is most valuable when the destination is a tool that does not have native JSON reading capability — Excel, Google Sheets, R's read.csv(), or legacy database bulk import tools.
    </p>

    <h2>Comparing JSON to CSV Converters: Online Tools vs Code Libraries</h2>
    <p>
      Multiple approaches exist for JSON to CSV conversion, each suited to different contexts. Choosing the right approach saves time and avoids data quality issues.
    </p>
    <p>
      Online converters (like ours): best for interactive, one-off conversions. Zero setup, immediate visual result, no coding required, privacy-safe (browser-only processing), handles common JSON structures correctly. Use when: you have a JSON response you need in a spreadsheet right now, you want to visually inspect the CSV output before using it, or you are not in a development environment.
    </p>
    <p>
      Python with pandas: best for production workflows, automation, large files, and complex nested structures. <code>df = pd.json_normalize(data); df.to_csv('output.csv', index=False)</code>. Handles deeply nested JSON, type inference, date parsing, and encoding correctly. Use when: conversion is part of an automated pipeline, the JSON is complex or large, or you need fine-grained control over the output format.
    </p>
    <p>
      Node.js with json2csv or papaparse: best for JavaScript-native environments (Node.js scripts, serverless functions, web applications). <code>const {parse} = require('json2csv'); const csv = parse(jsonArray);</code>. Use when: you are building a web application feature that exports data as CSV or your pipeline is already Node.js-based.
    </p>
    <p>
      Command-line with jq: <code>jq -r '(.[0] | keys_unsorted) as $keys | $keys, (.[] | [.[$keys[]]] | @csv)' data.json</code> converts a JSON array to CSV via jq. Powerful but requires jq knowledge. Use when: you are comfortable with jq and need a quick command-line conversion without installing additional libraries.
    </p>

    <h2>JSON to CSV for Financial Data, Reports, and Accounting Exports</h2>
    <p>
      Financial data is among the most commonly converted JSON-to-CSV because accounting software (QuickBooks, Xero, FreshBooks), financial reporting tools, and banking APIs output data in JSON format while spreadsheet-based financial analysis and reporting workflows require CSV. Understanding the specific requirements for financial CSV exports prevents data integrity errors that could have serious consequences.
    </p>
    <p>
      Currency values: financial JSON typically stores monetary values as numbers (integers in cents/pence, or decimals in the major currency unit). When converted to CSV, ensure currency values are not formatted with currency symbols or thousand separators — "1234.56" not "$1,234.56". Currency symbols in CSV cells cause spreadsheet applications to interpret the values as text rather than numbers, breaking SUM formulas and pivot tables. Thousand separators (commas) conflict with comma-delimited CSV parsing. Clean numeric values in your JSON before conversion, or strip formatting after.
    </p>
    <p>
      Date formats for accounting software: different accounting platforms require specific date formats in CSV imports. QuickBooks: MM/DD/YYYY. Xero: DD/MM/YYYY or YYYY-MM-DD depending on regional settings. Sage: DD/MM/YYYY. Excel on US locale: MM/DD/YYYY. If your JSON stores dates in ISO 8601 format (2026-04-19), they convert correctly to that format in CSV. If you need a different format for your accounting software, post-process the date columns after conversion.
    </p>
    <p>
      Reconciliation IDs and reference numbers: financial records often have transaction IDs, reference numbers, or account codes that look like numbers but must remain as strings (leading zeros, alphanumeric formats). Ensure type inference does not convert "001234" to 1234, stripping the leading zeros. Wrap these fields in the JSON with string type explicitly if possible, or quote them in the CSV output.
    </p>
    <p>
      Audit trail considerations: financial CSV exports should preserve all fields from the original JSON, including metadata fields (creation timestamps, modification timestamps, user IDs, status codes) that may be needed for audit purposes. Do not strip fields during conversion even if they appear irrelevant — they may be needed for reconciliation or compliance review later.
    </p>

    <h2>Understanding JSON Array vs JSON Object at the Root Level</h2>
    <p>
      JSON to CSV conversion assumes that the input JSON represents tabular data — a collection of similar records. The two most common root-level JSON structures that represent tabular data are JSON arrays and JSON objects with an array property, and handling each correctly is important for successful conversion.
    </p>
    <p>
      Root-level JSON array: the most common format for tabular JSON data. <code>[&#123;"id": 1, "name": "Alice"&#125;, &#123;"id": 2, "name": "Bob"&#125;]</code>. Each element of the array is one record (one CSV row). Our converter accepts this format directly — paste the array and convert. This is the standard output format of REST APIs that return lists of resources.
    </p>
    <p>
      Wrapped array (object with array property): many APIs wrap their data in a root object with metadata. <code>&#123;"total": 2, "data": [&#123;"id": 1, "name": "Alice"&#125;, &#123;"id": 2, "name": "Bob"&#125;]&#125;</code>. The actual records are in the "data" property. To convert, you need to extract the array first — copy just the value of the "data" property: <code>[&#123;"id": 1, "name": "Alice"&#125;, &#123;"id": 2, "name": "Bob"&#125;]</code>. Common wrapper property names: data, results, items, records, rows, content, payload, response. In JavaScript: <code>const records = response.data || response.results || response.items;</code> extracts the array for conversion.
    </p>
    <p>
      Pagination handling: paginated APIs return one page of results per request, each wrapped in a response object with pagination metadata (total, page, per_page, next_cursor). To convert all pages to a single CSV: fetch all pages and concatenate the data arrays: <code>const allRecords = []; for (const page of pages) allRecords.push(...page.data); // then convert allRecords to CSV</code>. If you have multiple JSON files (one per page), convert each separately and paste the CSV rows together (excluding the header row from pages 2+).
    </p>

    <h2>JSON to CSV Privacy and Data Handling Best Practices</h2>
    <p>
      When converting JSON to CSV, the data you are working with often includes sensitive information — personal data (names, emails, phone numbers), financial records, health information, or confidential business data. Understanding the privacy implications of your tool choice protects both you and the data subjects.
    </p>
    <p>
      Browser-only processing — our privacy guarantee: our JSON to CSV converter operates entirely within your browser. When you paste JSON and click Convert, the conversion runs as JavaScript in your browser tab — no data is sent to our servers, no network requests are made, and no data is logged. You can verify this by opening browser Developer Tools (F12), going to the Network tab, and observing that no requests are made when you perform a conversion. This architecture makes our tool safe for sensitive data including personally identifiable information (PII), financial records, and health information (PHI).
    </p>
    <p>
      Server-side converters: some online JSON-to-CSV tools process data on their servers. Your JSON is transmitted to their server, converted, and the CSV is returned. The data may be logged for debugging, stored temporarily, or in some cases retained longer. For sensitive data, this architecture is inappropriate — any server transmission of PII, PHI, or financial data may constitute a data breach depending on your jurisdiction and applicable regulations (GDPR, HIPAA, CCPA).
    </p>
    <p>
      GDPR and data minimization: the principle of data minimization suggests converting only the fields you actually need. If your JSON contains 50 fields but your analysis needs only 5, filter the JSON to those 5 fields before conversion. This reduces the surface area of sensitive data in the CSV file, which may be less securely handled than the source system. In JavaScript: <code>const filtered = data.map(row =&gt; &#123; const &#123;id, name, email&#125; = row; return &#123;id, name, email&#125;; &#125;);</code>.
    </p>
    <p>
      CSV file security: CSV files have no native encryption or access control. Once data leaves your JSON source and enters a CSV file, the file is as protected as the filesystem it lives on. Store converted CSV files in protected locations, use OS-level encryption (BitLocker, FileVault), and delete CSV files containing sensitive data after use. Never email CSV files containing PII in plain text — use encrypted email or a secure file sharing service.
    </p>

    <h2>JSON to CSV Column Order and Header Control</h2>
    <p>
      By default, JSON object properties have no guaranteed order in the JSON specification — though most JavaScript engines maintain insertion order for string keys in modern implementations. When converting JSON to CSV, the column order in the output CSV corresponds to the order keys appear in the first object of the JSON array. If different objects have keys in different orders, the first object's key order determines the column headers, and values from subsequent objects are mapped to those columns correctly regardless of key order in each object.
    </p>
    <p>
      Controlling column order: if you need a specific column order in the output CSV (for import into a system with fixed column positions, or for readability in a spreadsheet), pre-process the JSON to ensure keys appear in the desired order. In JavaScript: <code>const ordered = data.map(row =&gt; &#123; const &#123;id, name, email, created_at, ...rest&#125; = row; return &#123;id, name, email, created_at, ...rest&#125;; &#125;)</code> — destructuring and re-constructing objects with specific keys first ensures those columns appear first in the CSV. In Python with pandas: <code>df = pd.json_normalize(data); df = df[['id', 'name', 'email', 'created_at']]; df.to_csv('output.csv', index=False)</code> — column selection and reordering in one step.
    </p>
    <p>
      Excluding sensitive columns: before conversion, filter out columns you do not need in the CSV: <code>const cleaned = data.map(row =&gt; &#123; const &#123;password_hash, internal_id, ...rest&#125; = row; return rest; &#125;)</code> — destructuring with rest pattern removes specific keys. This is preferable to converting all columns and then deleting sensitive columns from the spreadsheet, since the sensitive data never appears in the CSV file at all.
    </p>
    <p>
      Header name transformation: if your JSON uses camelCase keys (firstName, emailAddress) but your CSV destination requires snake_case (first_name, email_address), transform the keys during conversion: <code>const snakeCased = data.map(row =&gt; Object.fromEntries(Object.entries(row).map(([k, v]) =&gt; [k.replace(/[A-Z]/g, l =&gt; '_' + l.toLowerCase()), v])))</code>. This produces a CSV with snake_case column headers while preserving all values exactly. Our browser tool uses the original JSON key names — key name transformation requires the scripting approach.
    </p>

    <h2>Validating JSON Before Conversion: Common JSON Errors</h2>
    <p>
      Invalid JSON is the most common cause of conversion failure. Understanding the most frequent JSON syntax errors helps you identify and fix them quickly before attempting conversion.
    </p>
    <p>
      Trailing commas: JavaScript objects and arrays allow trailing commas (<code>[1, 2, 3,]</code>), but standard JSON does not. Many developers accidentally include trailing commas after the last item in a JSON array or the last property in a JSON object. Fix: remove the trailing comma after the last item. In VS Code, the "JSON with Comments" mode highlights trailing commas; extensions like Prettier auto-fix them.
    </p>
    <p>
      Unquoted keys: JavaScript object literals allow unquoted keys (<code>&#123;name: "Alice"&#125;</code>), but JSON requires all keys to be double-quoted strings (<code>&#123;"name": "Alice"&#125;</code>). This commonly occurs when developers copy JavaScript object literals (from code) into a JSON converter instead of JSON-serialized output. Fix: add double quotes around all keys. A global find-and-replace using the pattern <code>(\w+):</code> → <code>"$1":</code> handles simple cases, though regex-based fixes may not handle all edge cases.
    </p>
    <p>
      Single quotes: JSON requires double quotes for strings — single quotes are not valid JSON. <code>&#123;'name': 'Alice'&#125;</code> is JavaScript object syntax, not JSON. Fix: replace all single quotes used as string delimiters with double quotes. Be careful not to replace apostrophes within string values (e.g., <code>"don't"</code>).
    </p>
    <p>
      Comments in JSON: standard JSON does not support comments (// or /* */). If your JSON source includes comments (from a JSON5 or HJSON file, or from copy-pasted code), they must be removed before parsing. Our converter uses standard JSON.parse() — input with comments will fail. Use JSON5.parse() (via the json5 library) if you need to parse JSON with comments.
    </p>
    <p>
      Undefined values: JSON does not support the JavaScript value undefined. JSON.stringify() drops properties with undefined values. If your JSON source contains undefined, it may appear as missing properties in the serialized JSON. Check for missing properties in the converted CSV and trace back to undefined values in the source data if columns are unexpectedly missing.
    </p>

    <h2>JSON to CSV for E-commerce Product Catalog Management</h2>
    <p>
      E-commerce platforms and product catalog management systems are among the most frequent sources of JSON-to-CSV conversion needs. Product APIs (Shopify, WooCommerce, Magento, BigCommerce), inventory management systems, and product information management (PIM) tools all expose product data as JSON. Converting this data to CSV enables bulk editing in spreadsheets, importing into marketing tools, generating price lists, and sharing catalogs with partners.
    </p>
    <p>
      Shopify product JSON to CSV: Shopify's Admin API returns product data as JSON with nested variants, images, options, and metafields. A typical product JSON has the structure: <code>&#123;"id": 1234, "title": "T-Shirt", "variants": [&#123;"price": "19.99", "sku": "TS-BLK-M"&#125;], "images": [&#123;"src": "https://..."&#125;]&#125;</code>. For catalog CSV, flatten by variant: each variant becomes one row with the parent product's fields duplicated. This matches Shopify's own product CSV import format. After converting and adjusting column names to match Shopify's required headers, the CSV can be re-imported to update prices, inventory, or descriptions in bulk.
    </p>
    <p>
      WooCommerce REST API to CSV: WooCommerce returns product data with similar nested structures. The CSV export for WooCommerce requires specific columns: ID, Type, SKU, Name, Published, Price, Sale Price, Stock, Categories, Tags, Images. After JSON-to-CSV conversion, map your JSON fields to these column names and ensure categories are pipe-separated (Clothing|T-Shirts) rather than in separate columns.
    </p>
    <p>
      Price list generation: product JSON from an ERP or inventory system often needs to become a PDF price list for sales teams. The typical workflow: JSON → CSV → Excel → formatted price list PDF. Our converter handles the first step; Excel's formatting and PDF export handles the final steps. Sorting by category and filtering by active products in Excel before printing keeps the price list relevant and organized.
    </p>
    <p>
      Competitor price monitoring: price monitoring tools scrape competitor sites and return price data as JSON. Converting this to CSV and importing into Excel enables price comparison analysis, margin calculations, and repricing decision support. The JSON typically contains product name, URL, price, and availability — all flatten cleanly to CSV columns for spreadsheet analysis.
    </p>

    <h2>JSON to CSV Quick Start: Getting Your First Conversion Done in 60 Seconds</h2>
    <p>
      For users who need a result immediately: paste your JSON array directly into the input field. If your JSON is wrapped in an object (with a "data" or "results" property), paste only the array value — the portion starting with [ and ending with ]. Click Convert. The CSV output appears below with the first row as column headers and each subsequent row as one JSON object. Click Copy to clipboard. Paste into Excel, Google Sheets, or a CSV file. Total time: under 60 seconds for any JSON array under 10,000 records.
    </p>
    <p>
      If conversion fails with an error: check that your JSON is valid (no trailing commas, all keys double-quoted, no JavaScript-specific syntax like undefined or comments). A JSON validator like JSONLint can identify the exact line and character position of any syntax error. Fix the JSON, paste again, and convert. If your JSON is valid but conversion produces unexpected results (all data in one column, numeric values as strings), check the delimiter setting and type inference option in the converter settings.
    </p>
    <p>
      For the most common use case — an API response you want to analyze in a spreadsheet — our JSON to CSV converter is the fastest tool available, requiring no installation, no account, and no data upload to external servers. Bookmark this page for the next time you receive a JSON API response and need to explore it in Excel or Google Sheets.
    </p>
  </section>
);

export default async function JsonToCsvPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolData.title,
    description: toolData.description,
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
      <JsonLd data={webPageSchema({ title: toolData.title, description: toolData.description, url })} />
      <ToolPageShell
        toolSlug={toolSlug}
        toolComponent={<JsonToCsvTool />}
        relatedToolsComponent={<RelatedTools currentSlug={toolSlug} />}
        faqComponent={<FAQSection faqs={faqs} />}
        faqJsonLdComponent={<FaqJsonLd faqs={faqs} />}
        writeUp={writeUp}
      />
    </>
  );
}
