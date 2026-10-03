import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>JSON to YAML Converter: No-Cost Web Utility for Quick, Precise Data Structure Transformation</h2>
        <p>JSON and YAML represent the two primary data serialization formats in modern software development. JSON serves as the universal language for APIs, browser storage, and JavaScript ecosystems. YAML stands as the preferred format for configuration files, CI/CD pipelines, Kubernetes manifests, Ansible playbooks, Docker Compose files, and developer tooling. Transferring data between these two formats is a routine task for developers operating across the modern infrastructure stack.</p>
        <p>Our free JSON to YAML Converter completes the conversion instantly inside your browser "” zero server round-trips, zero file uploads, zero size restrictions, zero accounts required. Input your JSON, hit convert, and receive flawlessly formatted YAML featuring proper indentation, accurate data type mapping, and valid syntax ready for deployment in your configuration files, infrastructure-as-code repositories, or API documentation.</p>
        <p>The converter handles every edge case: nested objects and arrays, numeric types (integers, floats, scientific notation), booleans, null values, multiline strings, special characters requiring YAML quoting, and Unicode content. The final output adheres to YAML 1.2 specification guidelines to ensure maximum compatibility with tools like Kubernetes, Helm, GitHub Actions, and cloud provider CLIs.</p>

        <h2>JSON: The Universal Data Interchange Format</h2>
        <p>JSON (JavaScript Object Notation) was developed by Douglas Crockford in the early 2000s as a simpler alternative to XML for transmitting data between servers and web clients. Even though its title mentions JavaScript, JSON remains completely language-agnostic and serves as the standard data-sharing format across virtually every platform and programming language.</p>
        <p>JSON's architecture relies upon two fundamental data structures found in some fashion within all programming languages:</p>
        <ul>
          <li><strong>Objects</strong> – an unordered collection of key-value pairs enclosed in curly braces: <code>&#123;"key": "value", "number": 42&#125;</code></li>
          <li><strong>Arrays</strong> – an ordered list of values enclosed in square brackets: <code>[1, "two", true, null, &#123;"nested": "object"&#125;]</code></li>
        </ul>
        <p>Six fundamental data types exist within JSON: string values (Unicode encased in double quotes), number values (integers as well as decimals), boolean states (<code>true</code> or <code>false</code>), alongside <code>null</code>. Hierarchies may branch without limit. Specifications are rigid: object property names mandate quotes, notes/comments are disallowed, trailing commas are invalid, and undefined values are omitted.</p>
        <p>Its straightforward nature explains why JSON reigns supreme. Engines parse it in one sweep, native data structures across programming languages reflect it cleanly, and engineers can easily inspect it without sacrificing lightweight transport efficiency. Web services rely on JSON universally. It powers client storage mechanisms like localStorage and IndexedDB. Projects in npm configure through JSON (package.json, tsconfig.json, .eslintrc.json). Responses from GraphQL arrive as JSON. Webhooks transmit events as JSON.</p>

        <h3>JSON Limitations That Drive YAML Adoption</h3>
        <p>Despite its strengths, JSON has characteristics that make it unsuitable as a configuration file format for humans:</p>
        <p><strong>No comments</strong>: JSON completely lacks native comment capability. Inline notes clarifying why specific configuration settings exist provide immense utility to developers. Although variations like JSON5 and JSONC (JSON with Comments) deliver comment support, they lack inclusion in the formal specification and are far from universally recognized.</p>
        <p><strong>Verbosity with quotes</strong>: standard keys invariably demand enclosing double quotes. Across config files packed with options, this creates heavy visual clutter that masks your meaningful settings and values.</p>
        <p><strong>No multiline strings</strong>: representing multiline text in JSON requires escaped newlines (<code>\n</code>), making shell scripts, SQL queries, or documentation embedded in JSON difficult to read and edit.</p>
        <p><strong>Strict syntax</strong>: leaving out a lone comma, adding a trailing comma, or neglecting to close a bracket renders the whole file unparseable. Manual editing of JSON invites mistakes that cleaner formats like YAML naturally prevent.</p>

        <h2>YAML: The Human-Friendly Configuration Language</h2>
        <p>YAML (YAML Ain't Markup Language – a recursive acronym) prioritized seamless human readability right from inception. Version 1.0 surfaced in 2001, while YAML 1.2 (2009) updated the rules to integrate seamlessly with JSON, turning JSON into a pure subset of YAML. Hence, every valid JSON snippet qualifies as valid YAML.</p>
        <p>Relying on whitespace indentation (strictly spaces, forbidden tabs) to denote hierarchy, YAML strips away curly braces and square brackets found in JSON. A JSON object translates directly to a YAML mapping, while arrays shift to sequences. This yields a far cleaner layout for configuration management:</p>
        <p>
          JSON:
        </p>
        <p><code>&#123;"server": &#123;"host": "localhost", "port": 8080, "ssl": true&#125;&#125;</code></p>
        <p>
          YAML:
        </p>
        <pre>{`server:
  host: localhost
  port: 8080
  ssl: true`}</pre>
        <p>The YAML version is immediately understandable to non-technical stakeholders, is easier to edit without making syntax errors, and supports inline documentation through comments.</p>

        <h3>YAML Key Features</h3>

        <h4>Comments</h4>
        <p>YAML supports comments beginning with <code>#</code>, either on their own line or inline after a value. This is the single most important feature for configuration files – explaining why a setting exists, linking to documentation, or noting constraints.</p>

        <h4>Multiline Strings</h4>
        <p>YAML supplies two distinct block scalar formats for multiline strings. The literal style (<code>|</code>) preserves exact line breaks, proving superb for embedding Python, SQL queries, or shell scripts. Conversely, the folded style (<code>&gt;</code>) converts newlines into spaces (resembling HTML whitespace collapsing), ideal for lengthy narrative text.</p>

        <h4>Anchors and Aliases</h4>
        <p>By employing anchors (<code>&amp;name</code>) alongside aliases (<code>*name</code>), YAML implements DRY (Don't Repeat Yourself) design. Set a shared block of parameters once beneath an anchor, then consume it across varied sections using an alias. Both Ansible playbooks and Kubernetes Helm charts depend heavily on this pattern.</p>

        <h4>Multiple Documents</h4>
        <p>Multiple distinct configuration payloads can inhabit one YAML document when divided by <code>---</code> (document start marker). Kubernetes manifests leverage this separation to bundle related resources together. Conversely, the <code>...</code> symbol denotes document completion.</p>

        <h4>Flexible Quoting</h4>
        <p>
          YAML keys and string values can be unquoted (no quotes needed for simple alphanumeric strings),
          single-quoted (literal "” no escape sequences processed), or double-quoted (supports escape
          sequences like <code>\n</code>, <code>\t</code>, <code>A</code>).
        </p>

        <h2>The JSON to YAML Conversion Process</h2>
        <p>Our converter parses the input JSON using a standards-compliant JSON parser, builds an in-memory object graph, then serializes that graph to YAML following these mapping rules:</p>

        <h3>Data Type Conversion: JSON to YAML</h3>
        <p><strong>JSON Object – YAML Mapping</strong>: Every key-value pair transforms into a YAML mapping item. Keys appear unquoted if they function as valid YAML plain scalars (consisting of alphanumeric characters plus hyphens and underscores, avoiding YAML keywords), while remaining quoted otherwise.</p>
        <p><strong>JSON Array – YAML Sequence</strong>: Each element turns into a YAML sequence member prefixed with <code>- </code>. Object arrays yield a sequence of mappings – the standard approach for Kubernetes containers, GitHub Actions steps, and comparable lists.</p>
        <p>
          <strong>JSON String â†’ YAML Scalar</strong>: Simple strings are output unquoted. Strings containing
          YAML special characters (<code>: # [ ] &#123; &#125; , &amp; * ? | - &lt; &gt; = ! % @ \</code> at the
          start, or <code>: #</code> inline) are quoted. Strings matching YAML special values like
          <code>true</code>, <code>false</code>, <code>null</code>, <code>yes</code>, <code>no</code>,
          <code>on</code>, <code>off</code> are quoted to prevent misinterpretation as booleans.
        </p>
        <p><strong>JSON Number – YAML Integer or Float</strong>: Integer JSON values turn into YAML integers lacking quotes. Floating-point digits maintain their decimal format. Scientific notation (1.5e10) stays intact or is adjusted according to your output choices.</p>
        <p><strong>JSON Boolean – YAML Boolean</strong>: <code>true</code> – <code>true</code>, <code>false</code> – <code>false</code>. Note: YAML 1.1 (relied upon by certain legacy tools) also treats <code>yes</code>/<code>no</code> and <code>on</code>/<code>off</code> as booleans. Our converter focuses on YAML 1.2 where solely <code>true</code>/<code>false</code> serve as boolean literals.</p>
        <p><strong>JSON null – YAML null</strong>: <code>null</code> – <code>null</code>. YAML also accepts a tilde (<code>~</code>) as null; our tool applies the explicit <code>null</code> format for better readability.</p>

        <h3>Indentation</h3>
        <p>By default, our converter applies 2-space indentation—the prevailing standard across the YAML community. Projects like GitHub Actions, official Kubernetes documentation, and popular YAML linters utilize 2 spaces as standard. You may switch to 4 spaces for setups prioritizing that convention (common in Python circles). Note that tab characters are strictly forbidden in YAML, causing syntax errors with standard-compliant tools.</p>

        <h2>YAML within Kubernetes and Cloud Infrastructure</h2>
        <p>Kubernetes stands as arguably the primary catalyst behind YAML adoption during the 2010s and 2020s. Every Kubernetes asset – Pods, Deployments, Services, ConfigMaps, Secrets, Ingresses, Custom Resource Definitions – comes structured as a YAML manifest. A typical microservices program might feature dozens of YAML documents managing hundreds of components.</p>
        <p>Mastering JSON-to-YAML conversion proves vital when interacting with Kubernetes because:</p>
        <ul>
          <li>The Kubernetes API natively processes JSON – all exchanges involving the API server rely on JSON. <code>kubectl get pod mypod -o json</code> exports the complete resource in JSON format.</li>
          <li>Engineers author and review manifests using YAML for human clarity, yet the API translates them internally into JSON.</li>
          <li>Helm charts function as YAML templates. Numerous Helm chart values originate from JSON-formatted utility outputs requiring translation to YAML for inclusion within values.yaml documents.</li>
          <li>Kubernetes admission webhooks alongside operators frequently process JSON, meaning outputs must be translated into YAML for GitOps repositories.</li>
        </ul>

        <h2>YAML inside CI/CD Pipelines</h2>
        <p>Contemporary CI/CD systems entirely leverage YAML for workflow specifications:</p>
        <ul>
          <li><strong>GitHub Actions</strong>: <code>.github/workflows/*.yml</code></li>
          <li><strong>GitLab CI</strong>: <code>.gitlab-ci.yml</code></li>
          <li><strong>Azure Pipelines</strong>: <code>azure-pipelines.yml</code></li>
          <li><strong>CircleCI</strong>: <code>.circleci/config.yml</code></li>
          <li><strong>Travis CI</strong>: <code>.travis.yml</code></li>
          <li><strong>Drone CI</strong>: <code>.drone.yml</code></li>
          <li><strong>Bitbucket Pipelines</strong>: <code>bitbucket-pipelines.yml</code></li>
        </ul>
        <p>When constructing automation that dynamically builds or updates CI/CD definitions programmatically, you frequently handle JSON internally while requiring YAML results. Our converter supports this exact process: construct your pipeline layout as JSON via your scripting language, paste it here, and receive correct YAML suitable for your pipeline document.</p>

        <h2>YAML within Infrastructure as Code</h2>
        <p>The Infrastructure-as-Code (IaC) ecosystem relies on YAML:</p>
        <ul>
          <li><strong>Ansible</strong>: playbooks, role definitions, and inventories exclusively employ YAML. The collection structure and Galaxy metadata across Ansible similarly depend on YAML across the board.</li>
          <li><strong>AWS CloudFormation</strong>: infrastructure templates accept JSON or YAML, yet developers overwhelmingly favor YAML because it accommodates descriptive comments and clean multiline strings.</li>
          <li><strong>OpenAPI / Swagger</strong>: drafting API definitions in YAML produces significantly clearer documentation than sprawling JSON equivalents. Our utility helps whenever you obtain a JSON OpenAPI manifest that must be modified in YAML.</li>
          <li><strong>Docker Compose</strong>: orchestrating multi-container environments happens inside <code>docker-compose.yml</code>. Whenever configurations are constructed programmatically, running JSON-to-YAML conversion represents the standard closing milestone.</li>
          <li><strong>Pulumi</strong>: certain Pulumi providers permit YAML configuration alongside code.</li>
        </ul>

        <h2>Frequent JSON-to-YAML Transformation Cases</h2>

        <h3>Transforming API Responses into Configurations</h3>
        <p>Cloud provider APIs and CLIs output JSON. When querying Azure, AWS, or GCP APIs, the returned data is in JSON. Converting to YAML provides a format that supports comments and is easy for humans to edit when creating configuration files from that data. For instance, a common workflow involves querying AWS security group rules as JSON and converting them to YAML for use in a CloudFormation or Terraform template.</p>

        <h3>npm / package.json to YAML Documentation</h3>
        <p>Node.js applications rely heavily on package.json. Although package.json remains JSON, dependency dashboards and documentation platforms occasionally require this information in YAML. Our utility processes the complete package.json schema, encompassing scripts, nested dependencies, and peer dependencies.</p>

        <h3>Swagger/OpenAPI Format Switching</h3>
        <p>OpenAPI specs may be authored in either YAML or JSON. While numerous validators, code generators, and documentation utilities support both formats, YAML is favored by most human writers and the Swagger Editor. Transform a JSON OpenAPI document into YAML for simpler editing, and switch back if necessary.</p>

        <h3>Database Schema Definitions</h3>
        <p>Certain database migration and ORM platforms (like Rails, Django, and Flyway) accept schema definitions written in YAML. When your schema is output as JSON, our utility generates correct YAML that these systems can parse.</p>

        <h2>YAML Pitfalls and Typical Errors</h2>

        <h3>The Norway Problem (YAML 1.1)</h3>
        <p>Under YAML 1.1 (the default engine within PyYAML and multiple legacy parsers), the country identifier <code>NO</code> gets parsed as the boolean <code>false</code>. In similar fashion, <code>YES</code>, <code>ON</code>, and <code>OFF</code> register as booleans in YAML 1.1. This quirk sparked the notorious "Norway problem," where mapping datasets to country identifiers caused Norway's record to inadvertently evaluate as false.</p>
        <p>Our parser focuses on YAML 1.2 specifications, where only <code>true</code> and <code>false</code> count as booleans. Yet, if older YAML 1.1 parsers will read your YAML, the tool wraps terms like <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>, <code>true</code>, <code>false</code>, <code>null</code>, and their alternative cases in quotes to avoid errors.</p>

        <h3>Tabs vs Spaces</h3>
        <p>YAML strictly prohibits tab characters for indentation. Any tab character found within a YAML document's indentation will trigger a parsing error. Our utility consistently applies spaces. Should you edit YAML inside a text editor, adjust its settings to insert spaces whenever Tab is pressed for YAML documents.</p>

        <h3>Colon Parsing</h3>
        <p>A space following a colon (<code>: </code>) acts as the separator for key-value pairs in YAML. Any strings that include colons, such as Windows paths, time values, or URLs, need quotation marks: <code>url: "https://example.com"</code>. This is handled automatically by our utility.</p>

        <h3>Leading Zeros and Numeric Strings</h3>
        <p>YAML 1.1 reads integers starting with a zero as octal numbers (where <code>010</code> equals 8 in decimal). Texts such as postal codes, telephone numbers, or zero-padded IDs beginning with a zero must be quoted to stop this behavior. The converter wraps these values automatically.</p>

        <h3>Large Numbers</h3>
        <p>Numbers exceeding JavaScript safe integer limits (larger than 2^53 - 1) might suffer precision loss when processed as JSON numeric values. Whenever large integer IDs or timestamps appear, the utility alerts you and advises treating them as text.</p>

        <h2>YAML Validation and Best Practices</h2>
        <p>Once you turn JSON into YAML, make sure to check the result:</p>
        <ul>
          <li><strong>yamllint</strong>: a command-line utility written in Python that verifies YAML structure and formatting. Execute <code>yamllint config.yaml</code> to spot spacing mistakes, duplicate keys, and line length problems.</li>
          <li><strong>kubeval</strong>: checks Kubernetes YAML documents against the official Kubernetes API definition.</li>
          <li><strong>kube-score</strong>: security and quality evaluation for Kubernetes manifests.</li>
          <li><strong>actionlint</strong>: checks GitHub Actions workflow YAML files for correctness.</li>
          <li><strong>ansible-lint</strong>: inspects Ansible playbooks for recommended standards.</li>
        </ul>

        <h2>Automated JSON to YAML Transformation</h2>
        <p>For programmatic transformation within your source code, review these standard libraries:</p>

        <h3>JavaScript / Node.js</h3>
        <p>The <code>js-yaml</code> npm library serves as the standard: <code>const yaml = require('js-yaml'); const yamlString = yaml.dump(JSON.parse(jsonString));</code>. Settings cover indent depth, line width, and key sorting. The <code>yaml</code> package (distinct from js-yaml) offers a complete YAML 1.2 parser featuring stronger spec adherence.</p>

        <h3>Python</h3>
        <p><code>import json, yaml; data = json.loads(json_string); yaml_string = yaml.dump(data, default_flow_style=False, allow_unicode=True)</code>. Rely on <code>PyYAML</code> for standard use cases. For full YAML 1.2 compliance, utilize <code>ruamel.yaml</code> which additionally retains comments during round-trip operations. Set <code>default_flow_style=False</code> to force block style (a legible multi-line layout) instead of compact inline formatting.</p>

        <h3>Go</h3>
        <p>The standard is <code>github.com/go-yaml/yaml</code> v3: <code>import "gopkg.in/yaml.v3"; yamlBytes, _ := yaml.Marshal(data)</code>. To convert straight from JSON: <code>json.Unmarshal(jsonBytes, &amp;data); yaml.Marshal(data)</code>.</p>

        <h3>Ruby</h3>
        <p><code>require 'json'; require 'yaml'; YAML.dump(JSON.parse(json_string))</code>. The default Ruby YAML engine (Psych) supports YAML 1.1 natively; for YAML 1.2 support, check the engine version using <code>Psych::VERSION</code>.</p>

        <h3>Java</h3>
        <p>Jackson paired with SnakeYAML: <code>ObjectMapper jsonMapper = new ObjectMapper(); ObjectMapper yamlMapper = new ObjectMapper(new YAMLFactory()); Object data = jsonMapper.readValue(jsonString, Object.class); String yaml = yamlMapper.writeValueAsString(data);</code></p>

        <h2>JSON versus YAML: Selecting the Right Format</h2>
        <p>Opt for JSON when: information is consumed by machines or programmatic APIs (like REST endpoints, LocalStorage, or message queues), when tooling uniformly demands JSON (such as the npm ecosystem and most REST clients), when strict schema enforcement is required (as JSON Schema outpaces YAML validation tools), or when achieving the most concise wire format is critical.</p>
        <p>Choose YAML when: people must read and edit the data frequently (including configuration files, pipeline specifications, and documentation), when comments are vital for documenting settings, when multiline strings show up often (such as scripts embedded in configs or lengthy descriptions), or when the surrounding technology stack expects YAML (like Kubernetes, Helm, Ansible, GitHub Actions, and major cloud infrastructure utilities).</p>
        <p>Most modern projects actually utilize both formats: JSON for data storage and API payloads, and YAML for infrastructure and settings. The JSON-to-YAML utility connects the two whenever data moves between these environments – something that happens continuously within a contemporary cloud-native application architecture.</p>

        <h2>Privacy and Performance</h2>
        <p>All processing executes entirely inside your web browser via JavaScript. No JSON payload, no YAML result, and no metadata about your files ever gets sent to our servers. Conversion happens immediately for any reasonable document size (since the browser native JSON parser and YAML serializer handle megabytes effortlessly). The tool operates offline once the page loads. Your configuration parameters, API payloads, and infrastructure files stay completely secure.</p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a JSON to YAML converter?',
    answer:
      'A JSON to YAML Converter reads a JSON file and formats it as YAML – transforming arrays into YAML sequences, objects into YAML mappings, and keeping all data types intact. This conversion happens immediately inside your browser without any server processing.',
  },
  {
    category: 'General',
    question: 'Does YAML accept JSON as valid format?',
    answer:
      'Indeed. Ever since YAML 1.2 came out in 2009, any proper JSON file is considered valid YAML as well. YAML serves as a superset of JSON, bringing in extra capabilities such as comments, anchors, multiline strings, and readable layouts, all while keeping full backward compatibility with JSON.',
  },
  {
    category: 'General',
    question: 'What is the point of changing JSON into YAML?',
    answer:
      'YAML stands as the top choice for settings files, CI/CD workflows like GitLab CI and GitHub Actions, along with DevOps platforms including Kubernetes, Ansible, Docker Compose, and Helm. Whenever data originates from APIs or software in JSON format, transforming it into YAML allows people to easily edit it using comments and clearer spacing rules.',
  },
  {
    category: 'Conversion',
    question: 'In what way does a JSON object turn into YAML?',
    answer:
      'A JSON object becomes a YAML mapping. Keys are listed without surrounding braces, one per line, with values indented below nested objects: {"server": {"host": "localhost", "port": 8080}} becomes server:\\n  host: localhost\\n  port: 8080',
  },
  {
    category: 'Conversion',
    question: 'In what way does a JSON array transform into YAML?',
    answer:
      'A JSON array becomes a YAML sequence with each element prefixed by "- ". ["a", "b", "c"] becomes:\\n- a\\n- b\\n- c. Arrays of objects produce a sequence of mappings, the standard pattern for Kubernetes containers and GitHub Actions steps.',
  },
  {
    category: 'Conversion',
    question: 'In what manner are JSON null values turned into YAML?',
    answer:
      'JSON null changes to YAML null. Our tool utilizes the explicit "null" keyword rather than the tilde (~) shortcut for clarity. Certain YAML parsers also accept a blank value for null: key: (blank after colon).',
  },
  {
    category: 'Conversion',
    question: 'How are JSON boolean values changed to YAML?',
    answer:
      'JSON true becomes YAML true and false becomes false. These represent the only boolean literals in YAML 1.2. If your JSON string items are "true", "false", "yes", "no", "on", or "off", the tool wraps them in quotes to stop misinterpretation by YAML 1.1 parsers.',
  },
  {
    category: 'Conversion',
    question: 'Which JSON strings need to be enclosed in quotes in YAML?',
    answer:
      'Strings are quoted in YAML when they: contain special characters (: # [ ] { } , & * ? | - < > = ! % @ \\) at the start; contain ": " or " #" inline; match YAML keywords (true, false, null, yes, no, on, off and case variants); or start with leading zeros, +/- signs, or digits that could be parsed as numbers.',
  },
  {
    category: 'YAML Syntax',
    question: 'Is it possible for YAML to have comments? How can I include them after conversion?',
    answer:
      'Yes – YAML supports # comments, both on their own line and inline. JSON lacks this. Following the conversion of JSON to YAML, you are able to add # comments to clarify settings, link to documentation, or mention constraints. This serves as a main reason to switch configurations from JSON to YAML.',
  },
  {
    category: 'YAML Syntax',
    question: 'What defines the difference between block style and flow style YAML?',
    answer:
      'Block style uses indentation and newlines – the readable, multi-line layout (default in our tool). Flow style uses JSON-style braces and brackets on a single line: {key: value, list: [1, 2, 3]}. Both function as valid YAML. Block style is favored for human-written config files; flow style for compact, machine-produced data.',
  },
  {
    category: 'YAML Syntax',
    question: 'What do YAML anchors and aliases mean?',
    answer:
      'Anchors (&name) define a named value that can be reused; aliases (*name) reference it. Example: defaults: &defaults\\n  timeout: 30\\nproduction:\\n  <<: *defaults\\n  timeout: 60. The <<: * syntax merges the anchored mapping. JSON has no equivalent "” round-trip JSONâ†’YAMLâ†’JSON loses anchors.',
  },
  {
    category: 'YAML Syntax',
    question: 'How do YAML multiline strings (| and >) work?',
    answer:
      'The | (literal block) preserves newlines exactly "” useful for scripts and code. The > (folded block) folds newlines into spaces "” useful for long prose. JSON has no multiline string syntax; you must use \\n escape sequences. After converting, replace escaped strings with YAML block scalars for readability.',
  },
  {
    category: 'Kubernetes',
    question: 'Why does Kubernetes employ YAML instead of JSON?',
    answer:
      'Kubernetes accepts both JSON and YAML, but YAML is preferred for authoring because it offers better readability, accommodates comments for documenting resource configurations, and proves less prone to errors for humans to edit. The Kubernetes API internally uses JSON; kubectl converts YAML to JSON prior to transmitting API requests.',
  },
  {
    category: 'Kubernetes',
    question: 'Am I able to convert kubectl JSON output into a YAML manifest?',
    answer:
      'Yes – run kubectl get deployment my-app -o json, paste the output into our tool, and obtain the equivalent YAML. You might want to remove status and metadata.resourceVersion properties that are managed by the server and should not exist in declarative manifests.',
  },
  {
    category: 'Tools',
    question: 'How can one convert JSON to YAML using Python?',
    answer:
      'import json, yaml; data = json.loads(json_string); yaml_out = yaml.dump(data, default_flow_style=False, allow_unicode=True). Install PyYAML via pip install pyyaml. For YAML 1.2 compliance and comment retention, use ruamel.yaml instead.',
  },
  {
    category: 'Tools',
    question: 'How does one convert JSON to YAML inside Node.js?',
    answer:
      'npm install js-yaml, then: const yaml = require("js-yaml"); const yamlStr = yaml.dump(JSON.parse(jsonString), {indent: 2}). The yaml package (not js-yaml) provides superior YAML 1.2 compliance and comment support.',
  },
  {
    category: 'Tools',
    question: 'How is JSON converted to YAML through the command line?',
    answer:
      'Using Python: python3 -c "import sys, json, yaml; print(yaml.dump(json.load(sys.stdin), default_flow_style=False))" < input.json. Via yq: yq -P input.json (yq created by mikefarah handles JSON input using the -P pretty-print argument). Combining jq and yq: jq . input.json | yq -P.',
  },
  {
    category: 'Gotchas',
    question: 'Why is there a Norway issue within YAML?',
    answer:
      'Within YAML 1.1, "NO", "YES", "ON", and "OFF" count as booleans. A setup file mapping country codes to options would silently change Norway\'s "NO" code into false. YAML 1.2 solved this issue since only true and false function as booleans. Our tool targets YAML 1.2 and quotes these tricky values to ensure safety.',
  },
  {
    category: 'Gotchas',
    question: 'What is the reason YAML bans tab characters for spacing?',
    answer:
      'Tabs inside YAML indentation trigger parse errors because various editors and programs view tab widths differently, creating ambiguous indentation. The YAML specification explicitly demands spaces for indentation. Set up your editor to insert spaces whenever you press the Tab key for YAML documents.',
  },
  {
    category: 'Gotchas',
    question: 'Do numeric values starting with zero create issues in YAML?',
    answer:
      'Indeed, in YAML 1.1, integers featuring leading zeros get parsed as octal values (010 = 8). Postal codes, padded IDs, and phone numbers beginning with 0 require quotation marks. Our tool identifies numeric strings possessing leading zeros and quotes them automatically. While YAML 1.2 removed this octal behavior, numerous parsers continue relying on YAML 1.1.',
  },
  {
    category: 'Validation',
    question: 'In what way can I check my generated YAML?',
    answer:
      'Employ yamllint (pip install yamllint; yamllint file.yaml) for general YAML checking. For Kubernetes manifests, use kubeval or kubeconform. For GitHub Actions, try actionlint. For Ansible, use ansible-lint. Our tool generates valid YAML, though schema validation tailored for specific tools catches structural errors.',
  },
  {
    category: 'Privacy',
    question: 'Is it secure to input confidential settings into this tool?',
    answer:
      'Yes, all conversions happen locally inside your browser. No data gets transmitted to our servers. The utility remains secure for API keys found in environment settings, database connection strings, Kubernetes Secrets, or any other confidential setup data. It operates completely offline once the page finishes loading.',
  },
  {
    category: 'Format',
    question: 'Am I able to adjust the spacing depth of the final YAML?',
    answer:
      'Yes, our converter provides 2-space and 4-space indentation alternatives. Two spaces represents the typical standard found in Kubernetes documentation, the yamllint default, and GitHub Actions. Four spaces appears frequently in Python-focused projects. Both formats are valid YAML, so select the one matching your project guidelines.',
  },
  {
    category: 'Format',
    question: 'How are JSON digits expressed in scientific notation (1.5e10) handled?',
    answer:
      'Scientific notation JSON numbers remain preserved as YAML floats. A value like 1.5e10 in JSON turns into 1.5e+10 within YAML (or alternatively 15000000000.0 based on converter preferences). Most YAML parsers process scientific notation properly. Should a number need exact precision, such as a large integer ID, represent it as a string inside the source JSON.',
  },
];

export const jsonToYamlContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
