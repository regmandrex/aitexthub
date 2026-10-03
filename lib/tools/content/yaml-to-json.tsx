import React from 'react';
import type { ToolContent } from '@/lib/tools/content/types';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10"><div className="prose prose-slate max-w-none">
    <h2>YAML to JSON Converter: No-Cost Web Utility for Fast, Precise Format Transformation</h2>
    <p>Current software infrastructure relies primarily on two key data formats: YAML for human-created settings and JSON for automated machine exchange. Configuration files, CI/CD pipelines, and infrastructure definitions exist as YAML. REST APIs, webhook payloads, browser storage, and messaging queues utilize JSON. Transitioning between these formats remains a frequent requirement for developers dealing with cloud environments, API connections, and data flows.</p>
    <p>This free YAML to JSON Converter turns any valid YAML file into tidy, properly typed JSON instantly right inside your browser. It manages all YAML attributes: mappings, sequences, block and flow scalars, anchors plus aliases, multiple documents, YAML 1.1 alongside 1.2 type rules, plus Unicode. Without server trips and requiring no registration — simply paste and convert.</p>
    <p>Whether pulling data out of a Kubernetes manifest for a JSON API, translating an OpenAPI specification from YAML to JSON for a utility requiring only JSON, changing Ansible variables into JSON for a Python utility, or troubleshooting YAML settings by inspecting them as structured JSON, this program delivers the precise results you need instantly.</p>

    <h2>The Connection Between YAML and JSON</h2>
    <p>YAML 1.2 was crafted to position JSON as a strict subset. The standard outlines YAML as a natural superset of JSON, delivering broader capabilities while keeping compatibility with the existing JSON guidelines. This implies every legitimate JSON file functions as valid YAML — though not every acceptable YAML file qualifies as valid JSON.</p>
    <p>The traits present in YAML but absent in JSON — which consequently disappear or shift during a YAML-to-JSON translation — include:</p>
    <ul>
      <li><strong>Comments</strong>: YAML supports <code>#</code> comments; JSON lacks any comment system. All comments get removed during transformation.</li>
      <li><strong>Anchors and aliases</strong>: YAML&#39;s <code>&amp;name</code> and <code>*name</code> referencing mechanism. Upon conversion, aliases expand into their complete values — meaning the resulting JSON might feature duplicated information where YAML used pointers.</li>
      <li><strong>Multiline strings</strong>: Both literal (<code>|</code>) along with folded (<code>&gt;</code>) block scalars found in YAML translate into standard JSON string formats containing literal <code>\n</code> newline breaks.</li>
      <li><strong>Non-string keys</strong>: YAML permits any scalar as a mapping key (numbers, booleans). JSON demands string keys. The translator transforms non-string keys into their string format equivalents.</li>
      <li><strong>Multiple documents</strong>: YAML documents can include several files separated by <code>---</code>. JSON cannot support multiple documents inside a single file. The converter manages multi-document YAML by turning every document into a JSON array or NDJSON.</li>
    </ul>

    <h2>Structure Translation: YAML to JSON</h2>
    <p>Comprehending how YAML types map onto JSON types is vital for accurate conversion.</p>

    <h3>YAML Dictionaries into JSON Objects</h3>
    <p>A standard YAML mapping (a key-value collection) parses directly into a JSON object. All keys are consistently converted into JSON strings. For instance, any numeric YAML entry such as <code>200: &#34;OK&#34;</code> converts into the JSON string key <code>&#34;200&#34;</code>. Similarly, truthy YAML values (<code>true:</code>) will turn into the quoted JSON key <code>&#34;true&#34;</code>.</p>

    <h3>YAML Lists to JSON Arrays</h3>
    <p>Both block sequences (dash-preceded list items) along with flow sequences (<code>[a, b, c]</code>) turn into JSON arrays. Nested sequences become nested JSON arrays. Mixed-type sequences (strings and numbers within the same list) work in both YAML and JSON.</p>

    <h3>YAML Values to JSON Primitives</h3>
    <p>Scalar type resolution stands as the trickiest aspect of YAML-to-JSON conversion because YAML type detection rules vary between YAML 1.1 and 1.2.</p>
    <p><strong>YAML booleans</strong>: YAML 1.2 recognizes only <code>true</code> and <code>false</code> (any casing) as booleans. YAML 1.1 additionally acknowledges <code>yes</code>, <code>no</code>, <code>on</code>, as well as <code>off</code> as booleans — a frequent trigger for errors in Kubernetes YAML where a field setting of <code>yes</code> becomes JSON <code>true</code> unexpectedly. The translator defaults to YAML 1.2 rules.</p>
    <p><strong>YAML integers</strong>: raw numbers (<code>42</code>, <code>-7</code>) translate into JSON numbers. YAML 1.1 octals (<code>0755</code> = 493) alongside hex values (<code>0xFF</code> = 255) change into their decimal JSON equivalents.</p>
    <p><strong>YAML floats</strong>: <code>3.14</code>, <code>1.5e10</code>, <code>-0.5</code> transform into JSON numbers. YAML&#39;s unique float constants <code>.inf</code>, <code>-.inf</code>, plus <code>.nan</code> lack any JSON equivalent — the translator turns them into <code>null</code> along with a warning.</p>
    <p><strong>YAML null</strong>: <code>null</code>, <code>~</code>, and blank entries all turn into JSON <code>null</code>.</p>
    <p><strong>YAML strings</strong>: quoted text always becomes JSON strings. Unquoted text lacking any matching YAML type pattern similarly becomes JSON strings. Unicode characters remain intact.</p>

    <h2>Managing YAML Anchors and Aliases inside JSON</h2>
    <p>YAML&#39;s anchor and alias system permits DRY setups that JSON cannot display. A YAML file might establish a default configuration block utilizing an anchor and reference it across several locations via aliases, alongside merge keys overriding precise values. Upon converting to JSON, aliases expand fully while merge keys resolve through combining the referenced mapping inside the containing object. The outcome is valid JSON featuring duplicated data where YAML utilized references — JSON lacks a reference mechanism, meaning deduplication disappears during conversion.</p>
    <p>Comprehending this expansion matters for Helm chart troubleshooting: Helm&#39;s <code>_helpers.tpl</code> patterns leverage YAML anchors for shared settings, whereas the expanded JSON presents the exact figures Kubernetes takes in once all anchors get resolved.</p>

    <h2>Managing YAML Block Scalars inside JSON</h2>
    <p>Multiline strings in YAML, known as block scalars, are translated into JSON strings containing inline escape characters. When using a literal block scalar (<code>|</code>), line breaks turn into <code>\n</code> in the resulting JSON, and symbols such as quotation marks receive escapes like <code>\"</code>. Final newline handling is controlled by the chomping modifier: clip mode (the default) retains a single terminal newline, strip mode (<code>|-</code>) eliminates it entirely, and keep mode (<code>|+</code>) maintains every trailing line break.</p>
    <p>A folded block scalar (<code>&gt;</code>) shifts single newlines into spaces (collapsing the lines into a single paragraph), whilst keeping blank lines as actual newlines. This represents the YAML-standard method for drafting long strings without wrapping inside the source file, and the JSON output holds the folded string on one single line keeping only paragraph-breaking newlines intact.</p>

    <h2>Converting Multiple YAML Documents to JSON</h2>
    <p>A YAML document may hold multiple documents separated via <code>---</code>. This appears frequently within Kubernetes, where a single manifest file can house several resources (a Service alongside a Deployment in one file), plus specific CI/CD setups.</p>
    <p>JSON lacks any multi-document equivalent. The utility provides three choices: a JSON array wrapping all documents (best for programmatic tasks), newline-delimited JSON (NDJSON) containing one JSON object per line (the layout requested by many streaming APIs plus log processors), or converting solely the first document (when only the primary resource is required).</p>

    <h2>Real-World Scenarios for Translating YAML into JSON</h2>

    <h3>Kubernetes API Calls and Troubleshooting</h3>
    <p>The Kubernetes API server relies on JSON for all messaging, while engineers draft manifests in YAML. Executing <code>kubectl apply -f manifest.yaml</code> makes kubectl change YAML into JSON prior to sending it toward the API server. Grasping the JSON structure helps troubleshoot webhook admission controllers (accepting and returning JSON), server-side apply methods, as well as JSON patch tasks. Turn your manifest into JSON to observe precisely what the API obtains.</p>
    <p>Regarding existing resources, <code>kubectl get pod my-pod -o json</code> displays the comprehensive server-side JSON containing status fields, managed fields, plus resource versions. This proves typically superior to YAML output for debugging since it reveals complete object states as observed by the API server.</p>

    <h3>Helm Chart Debugging</h3>
    <p>Helm renders YAML templates into Kubernetes manifests. Utilize <code>helm template</code> to output rendered YAML, then convert to JSON for inputting into JSON-ready tools: <code>jq</code> for filtering and transformations, JSON Schema validators for structure checks, or custom scripts handling manifests programmatically. Converting to JSON also resolves every Helm template substitution, exposing final values.</p>

    <h3>Switching Formats for OpenAPI Specs</h3>
    <p>Certain API utilities, validation packages, code generators, and gateways demand OpenAPI specifications in JSON format. AWS API Gateway import, specific Swagger codegen tools, plus select API management platforms accept solely JSON OpenAPI specs. Change your YAML-created spec into JSON for such tools while avoiding duplicate file maintenance. Conversion remains lossless for OpenAPI specs because they bypass YAML-only features like comments and anchors.</p>

    <h3>Transforming Ansible Variables into JSON</h3>
    <p>Ansible employs YAML for variable documents (<code>host_vars</code>, <code>group_vars</code>). When integrating Ansible with external systems expecting JSON — REST APIs, Python scripts utilizing the json module, monitoring alongside CMDB systems — transform the YAML variable document into JSON. The converter manages Ansible&#39;s implementation of YAML anchors and multiline text inside variable files.</p>

    <h3>GitHub Actions and CI/CD Troubleshooting</h3>
    <p>GitHub Actions workflow YAML features intricate data frameworks covering matrix setups, job outputs, and conditional expressions. Transforming to JSON simplifies understanding the data framework when troubleshooting matrix strategy setups, grasping job output structures, or tracking expression evaluation. The JSON perspective proves particularly valuable for complex matrix setups featuring includes and excludes.</p>

    <h3>Utilizing jq alongside YAML Data</h3>
    <p>Even though <code>jq</code> serves as a highly capable terminal tool for handling JSON, parsing anything other than JSON directly is unsupported. You can pair jq with YAML content simply by converting the payload into JSON beforehand. This workflow delivers incredible flexibility: running <code>yq -o=json input.yaml | jq &#39;.items[] | select(.metadata.namespace == &#34;production&#34;) | .metadata.name&#39;</code> pulls out the names of resources assigned to a particular namespace inside a Kubernetes manifest. Translating YAML into JSON upfront lets you leverage every capability of jq on files created natively in YAML.</p>

    <h2>Automated YAML to JSON Transformation</h2>

    <h3>Python</h3>
    <p>The standard approach relies on PyYAML and the built-in json library: <code>import json, yaml; data = yaml.safe_load(yaml_string); json_out = json.dumps(data, indent=2)</code>. Install with <code>pip install pyyaml</code>. Use <code>yaml.safe_load</code> rather than <code>yaml.load</code> — <code>safe_load</code> disables arbitrary Python object deserialization for security.</p>
    <p>For YAML 1.2 semantics (preventing <code>yes</code>/<code>no</code> from being interpreted as booleans), use <code>ruamel.yaml</code>: <code>from ruamel.yaml import YAML; y = YAML(typ=&#39;safe&#39;); data = y.load(stream)</code>.</p>

    <h3>Node.js</h3>
    <p>With js-yaml: <code>const yaml = require(&#39;js-yaml&#39;); const data = yaml.load(yamlString); const json = JSON.stringify(data, null, 2)</code>. Via the yaml package (better for TypeScript): <code>import YAML from &#39;yaml&#39;; const json = JSON.stringify(YAML.parse(yamlString), null, 2)</code>. Both handle GFM-style YAML featuring anchors, aliases, as well as multi-document files.</p>

    <h3>Command Line</h3>
    <p>With <code>yq</code> (mikefarah&#39;s version): <code>yq -o=json input.yaml</code>. Through Python: <code>python3 -c &#34;import sys,json,yaml; print(json.dumps(yaml.safe_load(sys.stdin),indent=2))&#34; &lt; input.yaml</code>. Via Node.js: <code>npx js-yaml input.yaml</code>.</p>

    <h3>Go</h3>
    <p>Decode YAML into an interface and serialize it to JSON: <code>import &#34;gopkg.in/yaml.v3&#34;; var data interface&#123;&#125;; yaml.Unmarshal(yamlBytes, &amp;data); jsonBytes, _ := json.MarshalIndent(data, &#34;&#34;, &#34; &#34;)</code>.</p>

    <h3>Ruby</h3>
    <p>
      <code>require &#39;yaml&#39;; require &#39;json&#39;; puts JSON.pretty_generate(YAML.safe_load(yaml_string))</code>
    </p>

    <h2>Choices for Formatting JSON Output</h2>
    <p>The converter provides multiple JSON output formats: pretty-printed using 2-space indentation (the default standard for JSON files and documentation), pretty-printed using 4-space indentation (for projects preferring it), minified with zero whitespace (yielding the smallest output, ideal for API payloads and environment variables), and sorted keys (ensuring alphabetical order for deterministic output and git-diff-friendly storage). The pretty-printed 2-space format serves as the default and most readable option.</p>

    <h2>Frequent Mistakes During Conversion and How to Fix Them</h2>

    <h3>YAML Parsing Failure: Issues with Indentation</h3>
    <p>The most frequent YAML errors relate to indentation: using tabs instead of spaces (as YAML forbids tab characters in indentation), inconsistent indentation levels, or misaligned continuation lines. Run your input through the YAML formatter to validate and normalize indentation before performing the conversion. The formatter pinpoints exact line numbers for any parse errors.</p>

    <h3>Unexpected Boolean Conversion</h3>
    <p>If a YAML value like <code>yes</code> or <code>on</code> was meant to be a string but turned into JSON <code>true</code>, the original YAML relies on YAML 1.1 boolean semantics. Fix this at the source by wrapping the value in quotes: <code>value: &#34;yes&#34;</code>. This is particularly vital for port numbers, country codes, and any data matching YAML 1.1 boolean patterns.</p>

    <h3>Large Integer Precision</h3>
    <p>Integers exceeding 2^53 - 1 (roughly 9 quadrillion) cannot be precisely represented as JSON numbers in most parsers because of IEEE 754 double-precision constraints. The converter issues a warning when this occurs and can optionally transform large integers into JSON strings to retain precision. This impacts distributed system IDs (including Twitter/X Snowflake IDs and Instagram IDs) alongside 64-bit Unix timestamps.</p>

    <h2>Privacy and Performance</h2>
    <p>All YAML parsing and JSON serialization executes entirely inside your browser via JavaScript. No YAML content — whether configuration values, infrastructure topology, environment variables carrying credentials, Kubernetes Secrets, or schema definitions — gets sent to any server. The converter manages documents of arbitrary complexity (thousands of lines or deep nesting) efficiently without performance bottlenecks. The tool remains fully functional offline after the page finishes loading.</p>
  </div>
</section>
);

const faqs = [
  {
    category: 'General',
    question: 'What is a YAML to JSON converter?',
    answer: 'A YAML to JSON Converter parses a YAML document and outputs equivalent JSON — translating YAML mappings into JSON objects, sequences into arrays, and scalars into their proper JSON type equivalents (strings, numbers, booleans, null). This tool performs the translation instantly right in your browser without involving any server, supporting all YAML features such as anchors, multiline strings, and multi-document files.',
  },
  {
    category: 'General',
    question: 'Does YAML serve as a superset of JSON?',
    answer: 'Yes — YAML 1.2 was structured so that any valid JSON document also qualifies as valid YAML. The opposite does not hold true: YAML incorporates features (like comments, anchors, multiline strings, and non-string keys) that lack any JSON equivalent and are consequently stripped or transformed during YAML-to-JSON conversion.',
  },
  {
    category: 'General',
    question: 'What is the purpose of changing YAML into JSON?',
    answer: 'Typical motivations include: an API or utility exclusively accepting JSON input; troubleshooting a Kubernetes manifest to inspect the precise JSON payload dispatched to the API server; converting an OpenAPI YAML specification for a JSON-only code generator or API gateway; leveraging jq to query Kubernetes or Helm YAML files (since jq processes only JSON); embedding Ansible variables into a JSON-based pipeline; or supplying configuration through an environment variable requiring JSON format.',
  },
  {
    category: 'Conversion',
    question: 'How does the conversion process handle YAML comments when moving to JSON?',
    answer: 'YAML comments (# comment text) get removed during conversion because JSON lacks any comment syntax. Should comments contain critical details, document them separately prior to conversion. For workflows where preserving comments is essential, retain YAML as your source of truth and generate JSON from it rather than modifying the JSON directly.',
  },
  {
    category: 'Conversion',
    question: 'How are YAML anchors and aliases treated when converting into JSON?',
    answer: 'Anchors (&name) alongside aliases (*name) expand into their full values during JSON conversion. Merge keys (<<: *anchor) get resolved by merging the referenced mapping directly into the containing object. The resulting JSON may contain duplicated data where YAML utilized references, as JSON provides no reference mechanism to maintain deduplication.',
  },
  {
    category: 'Conversion',
    question: 'What occurs with YAML multiline strings (| and >) inside JSON?',
    answer: 'Literal block scalars (|) become JSON strings with embedded \\n escape sequences preserving each newline. Folded block scalars (>) become JSON strings where single newlines are converted to spaces (paragraphs separated by blank lines still get \\n). Both types produce valid JSON strings that can be used anywhere a JSON string is accepted.',
  },
  {
    category: 'Types',
    question: 'How do YAML booleans get converted into JSON?',
    answer: 'YAML 1.2: only true and false under any case qualify as booleans. YAML 1.1 additionally treats yes, no, on, off, plus their case variants as booleans — a frequent surprise within Kubernetes YAML where a port labeled "no" becomes JSON false. The converter defaults to YAML 1.2 semantics where yes and no remain strings. Activate YAML 1.1 mode for legacy content.',
  },
  {
    category: 'Types',
    question: 'How are YAML null values translated to JSON?',
    answer: 'YAML values like null, ~ (tilde), and empty entries (a key possessing nothing past the colon) all shift to JSON null. The converter processes all three representations accurately.',
  },
  {
    category: 'Types',
    question: 'What happens regarding YAML\'s .inf and .nan float values within JSON?',
    answer: 'JSON lacks support for infinity or NaN since they possess no valid JSON literal representation. The converter changes .inf, -.inf, and .nan into JSON null alongside a warning. Process these values programmatically should they surface inside your data.',
  },
  {
    category: 'Types',
    question: 'What transpires with non-string keys such as integers or booleans inside YAML?',
    answer: 'JSON mandates that every object key must be a string. YAML permits integers, booleans, alongside other scalars to serve as mapping keys. The converter transforms non-string keys into their string format: the YAML key 200 turns into the JSON key "200", and the YAML boolean key true becomes the string key "true". Subsequent code accessing such keys via their type will require updates.',
  },
  {
    category: 'Multi-document',
    question: 'How are multi-document YAML files (incorporating --- separators) converted?',
    answer: 'JSON cannot express multiple documents within a single file. The converter provides: (1) JSON array — encloses all documents within a JSON array; (2) NDJSON (newline-delimited JSON) — one JSON object per line, anticipated by streaming APIs; (3) first document only. For Kubernetes multi-resource YAML files, the JSON array choice typically proves most beneficial for programmatic handling.',
  },
  {
    category: 'Kubernetes',
    question: 'Why does kubectl utilize JSON internally when manifests are authored in YAML?',
    answer: 'Kubernetes was developed on Go featuring robust JSON support (encoding/json) prior to YAML tooling achieving equivalent maturity. The Kubernetes API server natively employs JSON and Protobuf as wire formats. kubectl accepts YAML for developer convenience and converts it into JSON before transmission to the API. YAML acts as the human-facing format; JSON functions as the protocol format.',
  },
  {
    category: 'Kubernetes',
    question: 'How can I view the JSON representation for a running Kubernetes resource?',
    answer: 'Execute kubectl get pod my-pod -o json or kubectl get deployment my-deployment -o json. This yields the complete server-side JSON encompassing status fields, managed fields, along with resource versions. Pipe through jq for filtering: kubectl get pods -o json | jq \'.items[].metadata.name\' to isolate all pod names.',
  },
  {
    category: 'Tools',
    question: 'How do I convert YAML to JSON utilizing the command line?',
    answer: 'Employing yq (mikefarah version): yq -o=json input.yaml. Utilizing Python one-liner: python3 -c "import sys,json,yaml; print(json.dumps(yaml.safe_load(sys.stdin),indent=2))" < input.yaml. Utilizing Node.js: npx js-yaml input.yaml outputs JSON. All generate formatted JSON starting from any valid YAML input.',
  },
  {
    category: 'Tools',
    question: 'How can I convert YAML to JSON inside Python?',
    answer: 'import json, yaml; data = yaml.safe_load(yaml_string); json_out = json.dumps(data, indent=2). Install PyYAML via pip install pyyaml. Constantly utilize yaml.safe_load (rather than yaml.load) to deactivate arbitrary Python object deserialization. For YAML 1.2 semantics, utilize ruamel.yaml instead.',
  },
  {
    category: 'Tools',
    question: 'How do I apply jq alongside YAML input?',
    answer: 'jq exclusively processes JSON. To leverage jq together with YAML data, initially convert to JSON: yq -o=json input.yaml | jq \'.metadata.name\' or python3 -c "import sys,json,yaml; print(json.dumps(yaml.safe_load(sys.stdin)))" < input.yaml | jq . The blending of YAML-to-JSON conversion and jq proves exceptionally powerful for querying infrastructure configuration.',
  },
  {
    category: 'Formatting',
    question: 'What JSON formatting choices remain accessible?',
    answer: 'The converter provides: pretty-printed using 2-space indentation (default, most prevalent standard), pretty-printed utilizing 4-space indentation, minified lacking whitespace (smallest output for API payloads plus environment variables), and sorted keys (alphabetical, advantageous for deterministic output and git diffs). Select based upon where the JSON will find application.',
  },
  {
    category: 'Errors',
    question: 'My YAML fails parsing — how do I locate and resolve the error?',
    answer: 'Typical YAML syntax mistakes: using tabs for indentation (as YAML permits spaces exclusively), mismatched indentation depths, omitted spaces after colons in key-value pairings, and unformatted strings resembling YAML type values intended as strings. The utility highlights the specific line number where the fault occurs. Utilize the YAML formatter tool to check and standardize your YAML prior to translation.',
  },
  {
    category: 'Precision',
    question: 'Why are large integer values in my YAML altered incorrectly within the resulting JSON?',
    answer: 'JavaScript and the vast majority of JSON parsers handle numbers through IEEE 754 double precision, capable of accurately representing integers up to 2^53 - 1 (roughly 9 quadrillion). Higher integers (such as distributed network IDs or select Unix timestamps) suffer precision loss. The tool issues a warning upon detecting this and can export large numbers as JSON strings to maintain their exact figures.',
  },
  {
    category: 'Privacy',
    question: 'Is it secure to paste Kubernetes credentials or configs containing secrets?',
    answer: 'Affirmative — all YAML processing and JSON encoding happens completely inside your web browser. No data ever gets sent to an external server. Completely secure for Kubernetes Secrets, Ansible variables with credentials, OpenAPI documents containing API key setups, or any confidential configuration files.',
  },
  {
    category: 'Round-trip',
    question: 'Am I able to convert the JSON back into YAML subsequent to translation?',
    answer: 'Yes — simply utilize the JSON to YAML converter utility. Nonetheless, details lost during the initial YAML-to-JSON parsing phase (such as comments, anchors, block scalar formats, and original spacing) cannot be restored. The reverse JSON-to-YAML process generates semantically equivalent yet structurally distinct YAML compared to the source. Retain your original YAML file as the definitive master source.',
  },
  {
    category: 'Comparison',
    question: 'When is it appropriate to opt for YAML versus JSON regarding configuration files?',
    answer: 'Choose YAML whenever humans write and manage the document — YAML\'s readability, comment capabilities, and multiline string options make it superior for Kubernetes manifests, GitHub Actions, Ansible, Docker Compose, and Helm. Opt for JSON when documents are generated by machines, processed by APIs, or when system ecosystems standardize around JSON — such as npm package.json, tsconfig.json, AWS CloudFormation (JSON), and REST API payloads.',
  },
  {
    category: 'OpenAPI',
    question: 'How can I translate an OpenAPI YAML specification into JSON suited for a particular utility?',
    answer: 'Paste your OpenAPI YAML document into the converter and press Convert. The output JSON represents a spec-compliant JSON structure accepted by JSON-exclusive platforms like AWS API Gateway imports, select Swagger code generators, and API management services. The translation is entirely lossless for OpenAPI specs avoiding YAML-specific features. Keep your YAML file as the editable master and produce JSON as a build output.',
  },
];

export const yamlToJsonContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};



