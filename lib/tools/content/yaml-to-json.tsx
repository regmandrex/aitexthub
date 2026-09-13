import React from 'react';
import type { ToolContent } from '@/lib/tools/content/types';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10"><div className="prose prose-slate max-w-none">
    <h2>YAML to JSON Converter: Free Online Tool for Instant, Accurate Format Conversion</h2>
    <p>
      The modern software stack runs on two dominant data formats: YAML for human-authored
      configuration and JSON for machine communication. Configuration files, CI/CD pipelines, and
      infrastructure manifests live as YAML. REST APIs, webhook payloads, browser storage, and
      message queues use JSON. Moving between these formats is a constant need for developers
      working across cloud infrastructure, API integration, and data pipelines.
    </p>
    <p>
      This free YAML to JSON converter transforms any valid YAML document into clean, correctly
      typed JSON instantly in your browser. It handles all YAML features: mappings, sequences,
      block and flow scalars, anchors and aliases, multiple documents, YAML 1.1 and 1.2 type
      semantics, and Unicode. No server round-trip, no account needed — just paste and convert.
    </p>
    <p>
      Whether you are extracting data from a Kubernetes manifest to feed into a JSON API, converting
      an OpenAPI spec from YAML to JSON for a tool that only accepts JSON, transforming Ansible
      variables to JSON for a Python script, or debugging a YAML configuration by viewing it as
      structured JSON, this tool gives you the output you need immediately.
    </p>

    <h2>The Relationship Between YAML and JSON</h2>
    <p>
      YAML 1.2 was designed to make JSON a strict subset. The specification states that YAML can
      be viewed as a natural superset of JSON, offering an extended feature set while remaining
      compatible with the existing JSON specification. This means every valid JSON document is
      valid YAML — but not every valid YAML document is valid JSON.
    </p>
    <p>
      The features that YAML has which JSON lacks — and which are therefore lost or transformed
      during YAML-to-JSON conversion — include:
    </p>
    <ul>
      <li>
        <strong>Comments</strong>: YAML supports <code>#</code> comments; JSON has no comment
        syntax. All comments are stripped during conversion.
      </li>
      <li>
        <strong>Anchors and aliases</strong>: YAML&#39;s <code>&amp;name</code> and <code>*name</code>
        reuse mechanism. On conversion, aliases are expanded to their full values — the resulting
        JSON may contain duplicated data where YAML used references.
      </li>
      <li>
        <strong>Multiline strings</strong>: YAML&#39;s literal (<code>|</code>) and folded (<code>&gt;</code>)
        block scalars become regular JSON string values with embedded <code>\n</code> characters.
      </li>
      <li>
        <strong>Non-string keys</strong>: YAML allows any scalar as a mapping key (integers,
        booleans). JSON requires string keys. The converter converts non-string keys to their
        string representation.
      </li>
      <li>
        <strong>Multiple documents</strong>: YAML files can contain multiple documents separated
        by <code>---</code>. JSON cannot represent multiple documents in one file. The converter
        handles multi-document YAML by converting each document into a JSON array or NDJSON.
      </li>
    </ul>

    <h2>Type Mapping: YAML to JSON</h2>
    <p>
      Understanding how YAML types map to JSON types is essential for correct conversion.
    </p>

    <h3>YAML Mappings to JSON Objects</h3>
    <p>
      A YAML mapping (key-value structure) becomes a JSON object. Keys are always converted to
      JSON strings. A YAML integer key like <code>200: &#34;OK&#34;</code> becomes the JSON object key
      <code>&#34;200&#34;</code>. Boolean YAML keys (<code>true:</code>) become the JSON key
      <code>&#34;true&#34;</code>.
    </p>

    <h3>YAML Sequences to JSON Arrays</h3>
    <p>
      Both block sequences (dash-prefixed list items) and flow sequences (<code>[a, b, c]</code>)
      become JSON arrays. Nested sequences become nested JSON arrays. Mixed-type sequences (strings
      and numbers in the same list) are valid in both YAML and JSON.
    </p>

    <h3>YAML Scalars to JSON Primitives</h3>
    <p>
      Scalar type resolution is the most nuanced part of YAML-to-JSON conversion because YAML&#39;s
      type inference rules differ between YAML 1.1 and 1.2.
    </p>
    <p>
      <strong>YAML booleans</strong>: YAML 1.2 recognizes only <code>true</code> and <code>false</code>
      (any case) as booleans. YAML 1.1 additionally recognizes <code>yes</code>, <code>no</code>,
      <code>on</code>, and <code>off</code> as booleans — a common source of bugs in Kubernetes
      YAML where a field value of <code>yes</code> becomes JSON <code>true</code> unexpectedly.
      The converter defaults to YAML 1.2 semantics.
    </p>
    <p>
      <strong>YAML integers</strong>: bare integers (<code>42</code>, <code>-7</code>) become JSON
      numbers. YAML 1.1 octal (<code>0755</code> = 493) and hexadecimal (<code>0xFF</code> = 255)
      are converted to their decimal JSON equivalents.
    </p>
    <p>
      <strong>YAML floats</strong>: <code>3.14</code>, <code>1.5e10</code>, <code>-0.5</code> become
      JSON numbers. YAML&#39;s special float values <code>.inf</code>, <code>-.inf</code>, and
      <code>.nan</code> have no JSON equivalent — the converter converts these to <code>null</code>
      with a warning.
    </p>
    <p>
      <strong>YAML null</strong>: <code>null</code>, <code>~</code>, and empty values all become
      JSON <code>null</code>.
    </p>
    <p>
      <strong>YAML strings</strong>: quoted strings always become JSON strings. Unquoted strings
      that do not match any YAML type pattern also become JSON strings. Unicode content is preserved.
    </p>

    <h2>Handling YAML Anchors and Aliases in JSON</h2>
    <p>
      YAML&#39;s anchor and alias mechanism enables DRY configuration that JSON cannot represent.
      A YAML file might define a default configuration block with an anchor and reference it in
      multiple places using aliases, with merge keys to override specific values. On conversion
      to JSON, aliases are expanded to their full values and merge keys are resolved by merging
      the referenced mapping into the containing object. The result is valid JSON with duplicated
      data where YAML used references — JSON has no reference mechanism, so the deduplication is
      lost in conversion.
    </p>
    <p>
      Understanding this expansion is important for Helm chart debugging: Helm&#39;s <code>_helpers.tpl</code>
      patterns use YAML anchors for shared configuration, and the expanded JSON shows the actual
      values that Kubernetes receives after all anchors are resolved.
    </p>

    <h2>Handling YAML Block Scalars in JSON</h2>
    <p>
      YAML block scalars (multiline strings) become JSON strings with embedded escape sequences.
      A literal block scalar (<code>|</code>) preserves newlines as <code>\n</code> in the JSON
      string, with special characters like double quotes escaped as <code>\"</code>. The trailing
      newline behavior depends on the chomp indicator: the default clip mode preserves one trailing
      newline, strip mode (<code>|-</code>) removes it, and keep mode (<code>|+</code>) preserves
      all trailing newlines.
    </p>
    <p>
      A folded block scalar (<code>&gt;</code>) converts single newlines to spaces (folding the
      lines into a paragraph), while preserving blank lines as actual newlines. This is the
      YAML-idiomatic way to write long strings without them wrapping in the source file, and
      the JSON output will contain the folded string as a single line with only paragraph-breaking
      newlines preserved.
    </p>

    <h2>Multi-Document YAML to JSON</h2>
    <p>
      A YAML file can contain multiple documents separated by <code>---</code>. This is common
      in Kubernetes, where a single manifest file may contain multiple resources (a Service and
      a Deployment in the same file), and in some CI/CD configurations.
    </p>
    <p>
      JSON has no multi-document equivalent. The converter offers three options: a JSON array
      wrapping all documents (most useful for programmatic processing), newline-delimited JSON
      (NDJSON) with one JSON object per line (the format expected by many streaming APIs and
      log processors), or conversion of the first document only (for cases where only the
      primary resource is needed).
    </p>

    <h2>Practical Use Cases for YAML to JSON Conversion</h2>

    <h3>Kubernetes API Calls and Debugging</h3>
    <p>
      The Kubernetes API server uses JSON for all communication, while developers write manifests
      in YAML. When you run <code>kubectl apply -f manifest.yaml</code>, kubectl converts the
      YAML to JSON before sending it to the API server. Understanding the JSON representation
      helps debug webhook admission controllers (which receive and return JSON), server-side apply
      strategies, and JSON patch operations. Convert your manifest to JSON to see exactly what
      the API receives.
    </p>
    <p>
      For existing resources, <code>kubectl get pod my-pod -o json</code> shows the full
      server-side JSON including status fields, managed fields, and resource versions. This is
      often more useful than the YAML output for debugging because it shows the complete object
      state as the API server sees it.
    </p>

    <h3>Helm Chart Debugging</h3>
    <p>
      Helm renders YAML templates into Kubernetes manifests. Use <code>helm template</code> to
      output the rendered YAML, then convert to JSON to feed into JSON-aware tools: <code>jq</code>
      for filtering and transforming, JSON Schema validators for structure validation, or custom
      scripts that process the manifest programmatically. Converting to JSON also resolves all
      Helm template substitutions and shows the final values.
    </p>

    <h3>OpenAPI Spec Format Switching</h3>
    <p>
      Some API tools, validation libraries, code generators, and gateways require OpenAPI
      specifications in JSON format. AWS API Gateway import, some Swagger codegen tools, and
      certain API management platforms accept only JSON OpenAPI specs. Convert your YAML-authored
      spec to JSON for these tools without maintaining duplicate files. The conversion is lossless
      for OpenAPI specs because they avoid YAML-only features like comments and anchors.
    </p>

    <h3>Ansible Variables to JSON</h3>
    <p>
      Ansible uses YAML for variable files (<code>host_vars</code>, <code>group_vars</code>).
      When integrating Ansible with external tools that expect JSON — REST APIs, Python scripts
      using the json module, monitoring and CMDB systems — convert the YAML variable file to JSON.
      The converter handles Ansible&#39;s use of YAML anchors and multiline strings in variable files.
    </p>

    <h3>GitHub Actions and CI/CD Debugging</h3>
    <p>
      GitHub Actions workflow YAML has complex data structures for matrix configurations, job
      outputs, and conditional expressions. Converting to JSON makes the data structure easier to
      understand when debugging matrix strategy configurations, understanding how job outputs are
      structured, or tracing expression evaluation. The JSON view is especially helpful for
      complex matrix configurations with includes and excludes.
    </p>

    <h3>Using jq with YAML Data</h3>
    <p>
      <code>jq</code> is a powerful command-line JSON processor, but it only processes JSON input.
      To use jq with YAML data, first convert to JSON. The combination is extremely powerful:
      <code>yq -o=json input.yaml | jq &#39;.items[] | select(.metadata.namespace == &#34;production&#34;) | .metadata.name&#39;</code>
      extracts resource names from a specific namespace in a Kubernetes manifest. Converting YAML
      to JSON as a preprocessing step unlocks the full power of jq for YAML-native data.
    </p>

    <h2>Programmatic YAML to JSON Conversion</h2>

    <h3>Python</h3>
    <p>
      The most common approach uses PyYAML and the standard json library:
      <code>import json, yaml; data = yaml.safe_load(yaml_string); json_out = json.dumps(data, indent=2)</code>.
      Install with <code>pip install pyyaml</code>. Use <code>yaml.safe_load</code> rather than
      <code>yaml.load</code> — <code>safe_load</code> disables arbitrary Python object
      deserialization for security.
    </p>
    <p>
      For YAML 1.2 semantics (avoiding <code>yes</code>/<code>no</code> being treated as booleans),
      use <code>ruamel.yaml</code>:
      <code>from ruamel.yaml import YAML; y = YAML(typ=&#39;safe&#39;); data = y.load(stream)</code>.
    </p>

    <h3>Node.js</h3>
    <p>
      Using js-yaml: <code>const yaml = require(&#39;js-yaml&#39;); const data = yaml.load(yamlString); const json = JSON.stringify(data, null, 2)</code>.
      Using the yaml package (more TypeScript-friendly):
      <code>import YAML from &#39;yaml&#39;; const json = JSON.stringify(YAML.parse(yamlString), null, 2)</code>.
      Both support GFM-style YAML with anchors, aliases, and multi-document files.
    </p>

    <h3>Command Line</h3>
    <p>
      Using <code>yq</code> (mikefarah&#39;s version): <code>yq -o=json input.yaml</code>.
      Using Python: <code>python3 -c &#34;import sys,json,yaml; print(json.dumps(yaml.safe_load(sys.stdin),indent=2))&#34; &lt; input.yaml</code>.
      Using Node.js: <code>npx js-yaml input.yaml</code>.
    </p>

    <h3>Go</h3>
    <p>
      Parse YAML to an interface and marshal to JSON:
      <code>import &#34;gopkg.in/yaml.v3&#34;; var data interface&#123;&#125;; yaml.Unmarshal(yamlBytes, &amp;data); jsonBytes, _ := json.MarshalIndent(data, &#34;&#34;, &#34;  &#34;)</code>.
    </p>

    <h3>Ruby</h3>
    <p>
      <code>require &#39;yaml&#39;; require &#39;json&#39;; puts JSON.pretty_generate(YAML.safe_load(yaml_string))</code>
    </p>

    <h2>JSON Output Formatting Options</h2>
    <p>
      The converter offers several JSON output formats: pretty-printed with 2-space indentation
      (the standard convention for JSON in files and documentation), pretty-printed with 4-space
      indentation (for projects that prefer it), minified with no whitespace (smallest output,
      ideal for API payloads and environment variables), and sorted keys (alphabetical key order
      for deterministic output and git-diff-friendly storage). The pretty-printed 2-space format
      is the default and most universally readable.
    </p>

    <h2>Common Conversion Errors and Solutions</h2>

    <h3>YAML Parse Error: Indentation Problems</h3>
    <p>
      The most common YAML errors are indentation-related: tabs instead of spaces (YAML forbids
      tab characters in indentation), inconsistent indentation levels, or misaligned continuation
      lines. Run the input through the YAML formatter to validate and normalize indentation before
      converting. The formatter reports specific line numbers for parse errors.
    </p>

    <h3>Unexpected Boolean Conversion</h3>
    <p>
      If a YAML value <code>yes</code> or <code>on</code> was intended as a string but became
      JSON <code>true</code>, the original YAML is using YAML 1.1 boolean semantics. Fix at the
      source by quoting the value: <code>value: &#34;yes&#34;</code>. This is especially important for
      port numbers, country codes, and any value that coincidentally matches YAML 1.1 boolean
      patterns.
    </p>

    <h3>Large Integer Precision</h3>
    <p>
      Integers larger than 2^53 - 1 (about 9 quadrillion) cannot be exactly represented as JSON
      numbers in most parsers due to IEEE 754 double-precision limitations. The converter warns
      when this occurs and optionally converts large integers to JSON strings to preserve precision.
      This affects distributed system IDs (Twitter/X Snowflake IDs, Instagram IDs) and 64-bit
      Unix timestamps.
    </p>

    <h2>Privacy and Performance</h2>
    <p>
      All YAML parsing and JSON serialization runs entirely in your browser using JavaScript.
      No YAML content — configuration values, infrastructure topology, environment variables with
      credentials, Kubernetes Secrets, or schema definitions — is transmitted to any server.
      The converter handles documents of any practical complexity (thousands of lines, deep nesting)
      without performance issues. The tool works offline once the page is loaded.
    </p>
  </div>
</section>
);

const faqs = [
  {
    category: 'General',
    question: 'What is a YAML to JSON converter?',
    answer: 'A YAML to JSON converter parses a YAML document and outputs equivalent JSON — converting YAML mappings to JSON objects, sequences to arrays, and scalars to their JSON type equivalents (strings, numbers, booleans, null). This tool does the conversion instantly in your browser with no server involvement, handling all YAML features including anchors, multiline strings, and multi-document files.',
  },
  {
    category: 'General',
    question: 'Is YAML a superset of JSON?',
    answer: 'Yes — YAML 1.2 was designed so that any valid JSON document is also valid YAML. The reverse is not true: YAML has features (comments, anchors, multiline strings, non-string keys) that have no JSON equivalent and are stripped or transformed during YAML-to-JSON conversion.',
  },
  {
    category: 'General',
    question: 'Why would I need to convert YAML to JSON?',
    answer: 'Common reasons: an API or tool only accepts JSON input; debugging a Kubernetes manifest to see the exact JSON sent to the API server; converting an OpenAPI YAML spec for a JSON-only code generator or API gateway; using jq to query Kubernetes or Helm YAML (jq only accepts JSON); integrating Ansible variables into a JSON-based pipeline; or passing configuration via an environment variable that requires JSON format.',
  },
  {
    category: 'Conversion',
    question: 'What happens to YAML comments when converting to JSON?',
    answer: 'YAML comments (# comment text) are stripped during conversion — JSON has no comment syntax. If comments contain important information, document it separately before converting. For workflows where comment preservation matters, keep the YAML as the source of truth and generate JSON from it rather than editing the JSON directly.',
  },
  {
    category: 'Conversion',
    question: 'What happens to YAML anchors and aliases when converting to JSON?',
    answer: 'Anchors (&name) and aliases (*name) are expanded to their full values during JSON conversion. Merge keys (<<: *anchor) are resolved by merging the referenced mapping into the containing object. The resulting JSON may contain duplicated data where YAML used references — JSON has no reference mechanism to preserve deduplication.',
  },
  {
    category: 'Conversion',
    question: 'What happens to YAML multiline strings (| and >) in JSON?',
    answer: 'Literal block scalars (|) become JSON strings with embedded \\n escape sequences preserving each newline. Folded block scalars (>) become JSON strings where single newlines are converted to spaces (paragraphs separated by blank lines still get \\n). Both types produce valid JSON strings that can be used anywhere a JSON string is accepted.',
  },
  {
    category: 'Types',
    question: 'How are YAML booleans converted to JSON?',
    answer: 'YAML 1.2: only true and false (any case) are booleans. YAML 1.1 additionally treats yes, no, on, off, and their case variants as booleans — a common surprise in Kubernetes YAML where a port named "no" becomes JSON false. The converter defaults to YAML 1.2 semantics where yes and no are strings. Enable YAML 1.1 mode for legacy content.',
  },
  {
    category: 'Types',
    question: 'How are YAML null values converted to JSON?',
    answer: 'YAML\'s null, ~ (tilde), and empty values (a key with nothing after the colon) all convert to JSON null. The converter handles all three representations correctly.',
  },
  {
    category: 'Types',
    question: 'What happens to YAML\'s .inf and .nan float values in JSON?',
    answer: 'JSON does not support infinity or NaN — they have no valid JSON literal representation. The converter converts .inf, -.inf, and .nan to JSON null with a warning. Handle these values programmatically if they appear in your data.',
  },
  {
    category: 'Types',
    question: 'What happens to non-string keys like integers or booleans in YAML?',
    answer: 'JSON requires all object keys to be strings. YAML allows integers, booleans, and other scalars as mapping keys. The converter converts non-string keys to their string representation: the YAML key 200 becomes the JSON key "200", and the YAML boolean key true becomes the string key "true". Downstream code accessing these keys by their type will need updating.',
  },
  {
    category: 'Multi-document',
    question: 'How are multi-document YAML files (with --- separators) converted?',
    answer: 'JSON cannot represent multiple documents in one file. The converter offers: (1) JSON array — wraps all documents in a JSON array; (2) NDJSON (newline-delimited JSON) — one JSON object per line, expected by streaming APIs; (3) first document only. For Kubernetes multi-resource YAML files, the JSON array option is usually most useful for programmatic processing.',
  },
  {
    category: 'Kubernetes',
    question: 'Why does kubectl use JSON internally if manifests are written in YAML?',
    answer: 'Kubernetes was built on Go with strong JSON support (encoding/json) before YAML tooling reached equivalent maturity. The Kubernetes API server natively uses JSON and Protobuf as wire formats. kubectl accepts YAML for developer ergonomics and converts it to JSON before sending to the API. YAML is the human-facing format; JSON is the protocol format.',
  },
  {
    category: 'Kubernetes',
    question: 'How do I see the JSON representation of a running Kubernetes resource?',
    answer: 'Run kubectl get pod my-pod -o json or kubectl get deployment my-deployment -o json. This outputs the full server-side JSON including status fields, managed fields, and resource versions. Pipe through jq for filtering: kubectl get pods -o json | jq \'.items[].metadata.name\' to extract all pod names.',
  },
  {
    category: 'Tools',
    question: 'How do I convert YAML to JSON from the command line?',
    answer: 'Using yq (mikefarah version): yq -o=json input.yaml. Using Python one-liner: python3 -c "import sys,json,yaml; print(json.dumps(yaml.safe_load(sys.stdin),indent=2))" < input.yaml. Using Node.js: npx js-yaml input.yaml outputs JSON. All produce formatted JSON from any valid YAML input.',
  },
  {
    category: 'Tools',
    question: 'How do I convert YAML to JSON in Python?',
    answer: 'import json, yaml; data = yaml.safe_load(yaml_string); json_out = json.dumps(data, indent=2). Install PyYAML with pip install pyyaml. Always use yaml.safe_load (not yaml.load) to disable arbitrary Python object deserialization. For YAML 1.2 semantics, use ruamel.yaml instead.',
  },
  {
    category: 'Tools',
    question: 'How do I use jq with YAML input?',
    answer: 'jq only processes JSON. To use jq with YAML data, first convert to JSON: yq -o=json input.yaml | jq \'.metadata.name\' or python3 -c "import sys,json,yaml; print(json.dumps(yaml.safe_load(sys.stdin)))" < input.yaml | jq . The combination of YAML-to-JSON conversion and jq is extremely powerful for querying infrastructure configuration.',
  },
  {
    category: 'Formatting',
    question: 'What JSON formatting options are available?',
    answer: 'The converter offers: pretty-printed with 2-space indentation (default, most common standard), pretty-printed with 4-space indentation, minified with no whitespace (smallest output for API payloads and environment variables), and sorted keys (alphabetical, useful for deterministic output and git diffs). Choose based on where the JSON will be used.',
  },
  {
    category: 'Errors',
    question: 'My YAML fails to parse — how do I find and fix the error?',
    answer: 'Common YAML parse errors: tabs in indentation (YAML requires spaces only), inconsistent indent levels, missing space after a colon in key-value pairs, and unquoted strings that look like YAML type values but were meant as strings. The converter reports the line number of the error. Use the YAML formatter tool to validate and normalize your YAML before converting.',
  },
  {
    category: 'Precision',
    question: 'Large integers in my YAML are wrong in the JSON output — why?',
    answer: 'JavaScript and most JSON parsers represent numbers as IEEE 754 doubles, which can only represent integers exactly up to 2^53 - 1 (about 9 quadrillion). Larger integers (distributed system IDs, some Unix timestamps) lose precision. The converter warns when this occurs and can output large integers as JSON strings to preserve their exact value.',
  },
  {
    category: 'Privacy',
    question: 'Is it safe to paste Kubernetes secrets or configs with credentials?',
    answer: 'Yes — all YAML parsing and JSON serialization runs entirely in your browser. No content is ever transmitted to any server. Safe for Kubernetes Secrets, Ansible vars with credentials, OpenAPI specs with API key definitions, or any sensitive configuration data.',
  },
  {
    category: 'Round-trip',
    question: 'Can I convert the JSON back to YAML after converting?',
    answer: 'Yes — use the JSON to YAML converter tool. However, information lost during YAML-to-JSON conversion (comments, anchors, block scalar styles, original formatting) cannot be recovered. The round-trip JSON-to-YAML produces semantically equivalent but structurally different YAML than the original. Keep the original YAML as your source of truth.',
  },
  {
    category: 'Comparison',
    question: 'When should I use YAML vs JSON for configuration files?',
    answer: 'Use YAML when humans author and maintain the file — YAML\'s readability, comment support, and multiline strings make it better for Kubernetes manifests, GitHub Actions, Ansible, Docker Compose, and Helm. Use JSON when the file is machine-generated, consumed by APIs, or when the ecosystem standardizes on JSON — npm package.json, tsconfig.json, AWS CloudFormation (JSON), and REST API payloads.',
  },
  {
    category: 'OpenAPI',
    question: 'How do I convert an OpenAPI YAML spec to JSON for a specific tool?',
    answer: 'Paste your OpenAPI YAML spec into the converter and click Convert. The resulting JSON is a spec-equivalent JSON representation accepted by JSON-only tools like AWS API Gateway import, some Swagger code generators, and API management platforms. The conversion is lossless for OpenAPI specs that avoid YAML-only features. Keep the YAML as your editable source and generate JSON as a build artifact.',
  },
];

export const yamlToJsonContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};



