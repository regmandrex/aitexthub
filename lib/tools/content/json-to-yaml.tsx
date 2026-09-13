import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>JSON to YAML Converter: Free Online Tool for Instant, Accurate Data Format Conversion</h2>
        <p>
          JSON and YAML are the two dominant data serialization formats in modern software engineering.
          JSON is the universal language of APIs, browser storage, and JavaScript ecosystems. YAML is the
          preferred format for configuration files, CI/CD pipelines, Kubernetes manifests, Ansible playbooks,
          Docker Compose files, and developer tooling. Moving data between these two formats is a daily task
          for developers working across the modern infrastructure stack.
        </p>
        <p>
          Our free JSON to YAML converter handles the conversion instantly in your browser "” no server round-trip,
          no file upload, no size limits, no account required. Paste your JSON, click convert, and get perfectly
          formatted YAML with proper indentation, correct data type mapping, and valid syntax ready to use
          in your configuration files, infrastructure-as-code repositories, or API documentation.
        </p>
        <p>
          The converter handles every edge case: nested objects and arrays, numeric types (integers, floats,
          scientific notation), booleans, null values, multiline strings, special characters that require
          YAML quoting, and Unicode content. The output follows YAML 1.2 specification conventions for
          maximum compatibility with tools like Kubernetes, Helm, GitHub Actions, and cloud provider CLIs.
        </p>

        <h2>JSON: The Universal Data Interchange Format</h2>
        <p>
          JSON (JavaScript Object Notation) was introduced by Douglas Crockford in the early 2000s as a
          lightweight alternative to XML for data exchange between web clients and servers. Despite its
          name referencing JavaScript, JSON is completely language-independent and has become the standard
          data exchange format across virtually every programming language and platform.
        </p>
        <p>
          JSON's structure is built on two universal data structures that exist in some form in every
          programming language:
        </p>
        <ul>
          <li>
            <strong>Objects</strong> "” an unordered collection of key-value pairs enclosed in curly braces:
            <code>&#123;"key": "value", "number": 42&#125;</code>
          </li>
          <li>
            <strong>Arrays</strong> "” an ordered list of values enclosed in square brackets:
            <code>[1, "two", true, null, &#123;"nested": "object"&#125;]</code>
          </li>
        </ul>
        <p>
          JSON supports six primitive value types: string (double-quoted Unicode text), number (integer
          or floating-point), boolean (<code>true</code> or <code>false</code>), and <code>null</code>.
          Structures can nest arbitrarily deep. The format has strict rules: keys must be quoted strings,
          there are no comments, no trailing commas, and no undefined values.
        </p>
        <p>
          JSON's dominance comes from its simplicity. It parses in a single pass, maps directly to data
          structures in every language, and is human-readable enough for debugging while being compact
          enough for network transmission. REST APIs universally use JSON. Browser localStorage and
          IndexedDB use JSON. Configuration files in the npm ecosystem use JSON (package.json, tsconfig.json,
          .eslintrc.json). GraphQL responses are JSON. Webhook payloads are JSON.
        </p>

        <h3>JSON Limitations That Drive YAML Adoption</h3>
        <p>
          Despite its strengths, JSON has characteristics that make it unsuitable as a configuration file
          format for humans:
        </p>
        <p>
          <strong>No comments</strong>: JSON has no comment syntax. Configuration files benefit enormously
          from inline documentation explaining why a setting has a particular value. JSON5 and JSONC (JSON
          with Comments) extend JSON to allow comments, but neither is part of the official specification
          and neither is universally supported.
        </p>
        <p>
          <strong>Verbosity with quotes</strong>: every key must be a double-quoted string. For configuration
          files with many settings, this adds significant visual noise that obscures the actual values.
        </p>
        <p>
          <strong>No multiline strings</strong>: representing multiline text in JSON requires escaped newlines
          (<code>\n</code>), making shell scripts, SQL queries, or documentation embedded in JSON difficult
          to read and edit.
        </p>
        <p>
          <strong>Strict syntax</strong>: a single missing comma, trailing comma, or unmatched bracket makes
          the entire document invalid. Human editing of JSON is error-prone in ways that structured formats
          like YAML avoid.
        </p>

        <h2>YAML: The Human-Friendly Configuration Language</h2>
        <p>
          YAML (YAML Ain't Markup Language "” a recursive acronym) was designed from the ground up for
          human readability. Version 1.0 was published in 2001, and YAML 1.2 (2009) refined the specification
          to align more closely with JSON, making JSON a strict subset of YAML. Any valid JSON document is
          also a valid YAML document.
        </p>
        <p>
          YAML uses indentation (spaces only, never tabs) to represent structure, eliminating the brackets
          and braces of JSON. A JSON object becomes a YAML mapping; a JSON array becomes a YAML sequence.
          The result is dramatically more readable for configuration files:
        </p>
        <p>
          JSON:
        </p>
        <p>
          <code>&#123;"server": &#123;"host": "localhost", "port": 8080, "ssl": true&#125;&#125;</code>
        </p>
        <p>
          YAML:
        </p>
        <pre>{`server:
  host: localhost
  port: 8080
  ssl: true`}</pre>
        <p>
          The YAML version is immediately understandable to non-technical stakeholders, is easier to edit
          without making syntax errors, and supports inline documentation through comments.
        </p>

        <h3>YAML Key Features</h3>

        <h4>Comments</h4>
        <p>
          YAML supports comments beginning with <code>#</code>, either on their own line or inline after
          a value. This is the single most important feature for configuration files "” explaining why a
          setting exists, linking to documentation, or noting constraints.
        </p>

        <h4>Multiline Strings</h4>
        <p>
          YAML has two multiline string syntaxes. The literal block scalar (<code>|</code>) preserves
          newlines exactly, making it perfect for embedding shell scripts, SQL, or Python code. The folded
          block scalar (<code>&gt;</code>) folds newlines into spaces (like HTML's whitespace collapsing),
          ideal for long prose descriptions.
        </p>

        <h4>Anchors and Aliases</h4>
        <p>
          YAML's anchor (<code>&amp;name</code>) and alias (<code>*name</code>) features enable DRY
          (Don't Repeat Yourself) configuration. Define a common set of values once with an anchor and
          reference it in multiple places with an alias. Kubernetes Helm charts and Ansible playbooks
          use this extensively.
        </p>

        <h4>Multiple Documents</h4>
        <p>
          A single YAML file can contain multiple documents separated by <code>---</code> (document start
          marker). Kubernetes manifests use this to define multiple resources in one file. The
          <code>...</code> marker indicates document end.
        </p>

        <h4>Flexible Quoting</h4>
        <p>
          YAML keys and string values can be unquoted (no quotes needed for simple alphanumeric strings),
          single-quoted (literal "” no escape sequences processed), or double-quoted (supports escape
          sequences like <code>\n</code>, <code>\t</code>, <code>A</code>).
        </p>

        <h2>The JSON to YAML Conversion Process</h2>
        <p>
          Our converter parses the input JSON using a standards-compliant JSON parser, builds an in-memory
          object graph, then serializes that graph to YAML following these mapping rules:
        </p>

        <h3>Type Mapping: JSON to YAML</h3>
        <p>
          <strong>JSON Object â†’ YAML Mapping</strong>: Each key-value pair becomes a YAML mapping entry.
          Keys are output unquoted when they are valid YAML plain scalars (alphanumeric plus hyphens and
          underscores, not a YAML keyword), quoted otherwise.
        </p>
        <p>
          <strong>JSON Array â†’ YAML Sequence</strong>: Each element becomes a YAML sequence item prefixed
          with <code>- </code>. Arrays of objects produce a sequence of mappings "” the standard pattern
          for Kubernetes containers, GitHub Actions steps, and similar lists.
        </p>
        <p>
          <strong>JSON String â†’ YAML Scalar</strong>: Simple strings are output unquoted. Strings containing
          YAML special characters (<code>: # [ ] &#123; &#125; , &amp; * ? | - &lt; &gt; = ! % @ \</code> at the
          start, or <code>: #</code> inline) are quoted. Strings matching YAML special values like
          <code>true</code>, <code>false</code>, <code>null</code>, <code>yes</code>, <code>no</code>,
          <code>on</code>, <code>off</code> are quoted to prevent misinterpretation as booleans.
        </p>
        <p>
          <strong>JSON Number â†’ YAML Integer or Float</strong>: Integer JSON numbers become YAML integers
          without quotes. Floating-point numbers are preserved with their decimal notation. Scientific
          notation (1.5e10) is preserved as-is or converted depending on your output settings.
        </p>
        <p>
          <strong>JSON Boolean â†’ YAML Boolean</strong>: <code>true</code> â†’ <code>true</code>,
          <code>false</code> â†’ <code>false</code>. Note: YAML 1.1 (used by some older tools) also treats
          <code>yes</code>/<code>no</code> and <code>on</code>/<code>off</code> as booleans. Our converter
          targets YAML 1.2 where only <code>true</code>/<code>false</code> are boolean literals.
        </p>
        <p>
          <strong>JSON null â†’ YAML null</strong>: <code>null</code> â†’ <code>null</code>. YAML also
          accepts a tilde (<code>~</code>) as null; our converter uses the explicit <code>null</code> form
          for clarity.
        </p>

        <h3>Indentation</h3>
        <p>
          Our converter uses 2-space indentation by default "” the most widely accepted YAML convention.
          Kubernetes documentation, GitHub Actions, and most YAML linters default to 2 spaces. You can
          switch to 4-space indentation for projects that prefer it (common in Python-centric environments).
          Tab characters are not valid in YAML and will cause parse errors in compliant parsers.
        </p>

        <h2>YAML in Kubernetes and Cloud Infrastructure</h2>
        <p>
          Kubernetes is arguably the biggest driver of YAML adoption in the 2010s and 2020s. Every
          Kubernetes resource "” Pods, Deployments, Services, ConfigMaps, Secrets, Ingresses, Custom
          Resource Definitions "” is defined as a YAML manifest. A typical microservices application
          might have dozens of YAML files managing hundreds of resources.
        </p>
        <p>
          Understanding JSON-to-YAML conversion is essential when working with Kubernetes because:
        </p>
        <ul>
          <li>
            The Kubernetes API natively speaks JSON "” all communication with the API server uses JSON.
            <code>kubectl get pod mypod -o json</code> dumps the full resource as JSON.
          </li>
          <li>
            Developers write and read manifests in YAML for human readability, but the API converts
            internally to JSON.
          </li>
          <li>
            Helm charts are YAML templates. Many Helm chart values come from JSON-formatted tool outputs
            that need conversion to YAML for inclusion in values.yaml files.
          </li>
          <li>
            Kubernetes admission webhooks and operators often work in JSON and output must be converted
            to YAML for GitOps repositories.
          </li>
        </ul>

        <h2>YAML in CI/CD Pipelines</h2>
        <p>
          Modern CI/CD platforms all use YAML for pipeline definitions:
        </p>
        <ul>
          <li><strong>GitHub Actions</strong>: <code>.github/workflows/*.yml</code></li>
          <li><strong>GitLab CI</strong>: <code>.gitlab-ci.yml</code></li>
          <li><strong>Azure Pipelines</strong>: <code>azure-pipelines.yml</code></li>
          <li><strong>CircleCI</strong>: <code>.circleci/config.yml</code></li>
          <li><strong>Travis CI</strong>: <code>.travis.yml</code></li>
          <li><strong>Drone CI</strong>: <code>.drone.yml</code></li>
          <li><strong>Bitbucket Pipelines</strong>: <code>bitbucket-pipelines.yml</code></li>
        </ul>
        <p>
          When building automation that generates or modifies CI/CD configurations programmatically,
          you often work with JSON internally and need to produce YAML output. Our converter handles
          this workflow: generate your pipeline structure as JSON in your scripting language, paste
          it here, and get valid YAML for your pipeline file.
        </p>

        <h2>YAML in Infrastructure as Code</h2>
        <p>
          The Infrastructure-as-Code (IaC) ecosystem is built on YAML:
        </p>
        <ul>
          <li>
            <strong>Ansible</strong>: playbooks, roles, and inventory are all YAML files.
            The Ansible collection format and Galaxy metadata use YAML throughout.
          </li>
          <li>
            <strong>AWS CloudFormation</strong>: templates can be JSON or YAML; YAML is preferred for
            human authoring due to comment support and multiline string capabilities.
          </li>
          <li>
            <strong>OpenAPI / Swagger</strong>: API specifications written in YAML are more readable
            than JSON equivalents. Our converter helps when you receive a JSON OpenAPI spec and need
            to edit it as YAML.
          </li>
          <li>
            <strong>Docker Compose</strong>: <code>docker-compose.yml</code> defines multi-container
            applications. When composing configurations programmatically, JSON-to-YAML conversion is
            often the final step.
          </li>
          <li>
            <strong>Pulumi</strong>: some Pulumi providers accept YAML configuration alongside code.
          </li>
        </ul>

        <h2>Common JSON-to-YAML Conversion Scenarios</h2>

        <h3>Converting API Responses to Configuration</h3>
        <p>
          Cloud provider CLIs and APIs return JSON. When you query AWS, GCP, or Azure APIs, the response
          is JSON. If you need to create a configuration file based on that data, converting to YAML gives
          you a human-editable, comment-annotatable format. For example, querying an AWS security group's
          rules as JSON and converting them to YAML for a Terraform or CloudFormation template is a
          typical workflow.
        </p>

        <h3>npm / package.json to YAML Documentation</h3>
        <p>
          Node.js projects use package.json extensively. While package.json stays as JSON, documentation
          systems and dependency dashboards sometimes need the data in YAML format. Our converter handles
          the full package.json structure including nested dependencies, scripts, and peer dependencies.
        </p>

        <h3>Swagger/OpenAPI Format Switching</h3>
        <p>
          OpenAPI specifications can be written in either JSON or YAML. Many code generators, validators,
          and documentation tools accept both, but the Swagger Editor and most human authors prefer YAML.
          Convert a JSON OpenAPI spec to YAML for easier editing, then convert back if needed.
        </p>

        <h3>Database Schema Definitions</h3>
        <p>
          Some ORM and database migration tools (Django, Rails, Flyway) can read schema definitions from
          YAML. If your schema is generated as JSON, our converter produces valid YAML that these tools
          can consume.
        </p>

        <h2>YAML Gotchas and Common Mistakes</h2>

        <h3>The Norway Problem (YAML 1.1)</h3>
        <p>
          In YAML 1.1 (used by PyYAML by default and many older tools), the two-letter country code
          <code>NO</code> is interpreted as the boolean <code>false</code>. Similarly, <code>YES</code>,
          <code>ON</code>, <code>OFF</code> are booleans in YAML 1.1. This caused the infamous "Norway
          problem" where a YAML configuration mapping country codes to data had Norway's entry silently
          converted to false.
        </p>
        <p>
          Our converter targets YAML 1.2, where only <code>true</code> and <code>false</code> are booleans.
          However, if your YAML will be consumed by YAML 1.1 tools, the converter quotes strings like
          <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>, <code>true</code>,
          <code>false</code>, <code>null</code>, and their case variants to prevent misinterpretation.
        </p>

        <h3>Tabs vs Spaces</h3>
        <p>
          YAML explicitly forbids tab characters for indentation. Any tab in the indentation of a YAML
          document will cause a parse error. Our converter always uses spaces. If you are editing YAML
          in a text editor, configure it to insert spaces on Tab keypress for YAML files.
        </p>

        <h3>Colon Parsing</h3>
        <p>
          A colon followed by a space (<code>: </code>) is the key-value separator in YAML. Strings
          containing colons (URLs, time values, Windows paths) must be quoted:
          <code>url: "https://example.com"</code>. Our converter handles this automatically.
        </p>

        <h3>Leading Zeros and Numeric Strings</h3>
        <p>
          YAML 1.1 interprets leading-zero integers as octal (<code>010</code> = 8 in decimal).
          Strings like postal codes, phone numbers, or padded IDs that start with zero must be quoted
          to prevent this interpretation. Our converter quotes such values automatically.
        </p>

        <h3>Large Numbers</h3>
        <p>
          Numbers that exceed JavaScript's safe integer range (greater than 2^53 - 1) may lose precision
          when parsed as JSON numbers. If you have large integer IDs or timestamps, the converter warns
          you and suggests treating them as strings.
        </p>

        <h2>YAML Validation and Best Practices</h2>
        <p>
          After converting JSON to YAML, validate the output:
        </p>
        <ul>
          <li>
            <strong>yamllint</strong>: a Python command-line linter that checks YAML syntax and style.
            Run <code>yamllint config.yaml</code> to catch indentation errors, duplicate keys, and
            line length issues.
          </li>
          <li>
            <strong>kubeval</strong>: validates Kubernetes YAML manifests against the Kubernetes API schema.
          </li>
          <li>
            <strong>kube-score</strong>: security and reliability analysis of Kubernetes manifests.
          </li>
          <li>
            <strong>actionlint</strong>: validates GitHub Actions workflow YAML files.
          </li>
          <li>
            <strong>ansible-lint</strong>: lints Ansible playbooks for best practices.
          </li>
        </ul>

        <h2>Programmatic JSON to YAML Conversion</h2>
        <p>
          For automated conversion in your codebase, here are the standard libraries:
        </p>

        <h3>JavaScript / Node.js</h3>
        <p>
          The <code>js-yaml</code> npm package is the standard: <code>const yaml = require('js-yaml');
          const yamlString = yaml.dump(JSON.parse(jsonString));</code>. Options include indent level,
          line width, and sort keys. The <code>yaml</code> package (different from js-yaml) is a full
          YAML 1.2 parser with better spec compliance.
        </p>

        <h3>Python</h3>
        <p>
          <code>import json, yaml; data = json.loads(json_string); yaml_string = yaml.dump(data,
          default_flow_style=False, allow_unicode=True)</code>. Use <code>PyYAML</code> for most cases.
          For YAML 1.2 compliance, use <code>ruamel.yaml</code> which also preserves comments in round-trip
          scenarios. Set <code>default_flow_style=False</code> to always use block style (readable multi-line
          format) rather than the compact inline style.
        </p>

        <h3>Go</h3>
        <p>
          <code>github.com/go-yaml/yaml</code> v3 is the standard: <code>import "gopkg.in/yaml.v3";
          yamlBytes, _ := yaml.Marshal(data)</code>. For converting from JSON directly:
          <code>json.Unmarshal(jsonBytes, &amp;data); yaml.Marshal(data)</code>.
        </p>

        <h3>Ruby</h3>
        <p>
          <code>require 'json'; require 'yaml'; YAML.dump(JSON.parse(json_string))</code>. Ruby's
          built-in YAML library (Psych) supports YAML 1.1 by default; for YAML 1.2 compliance,
          use <code>Psych::VERSION</code> to check the engine.
        </p>

        <h3>Java</h3>
        <p>
          Jackson with SnakeYAML: <code>ObjectMapper jsonMapper = new ObjectMapper();
          ObjectMapper yamlMapper = new ObjectMapper(new YAMLFactory());
          Object data = jsonMapper.readValue(jsonString, Object.class);
          String yaml = yamlMapper.writeValueAsString(data);</code>
        </p>

        <h2>JSON vs YAML: When to Use Which</h2>
        <p>
          Choose JSON when: the data is consumed by machines or APIs (REST responses, LocalStorage, message
          queues), when tooling universally expects JSON (npm ecosystem, most REST clients), when strict
          schema validation matters (JSON Schema is more mature than YAML schema tools), or when you need
          the most compact wire format.
        </p>
        <p>
          Choose YAML when: humans write and read the data regularly (configuration files, pipeline
          definitions, documentation), when comments are essential for explaining settings, when multiline
          strings appear frequently (scripts embedded in config, long descriptions), or when the ecosystem
          expects YAML (Kubernetes, Helm, Ansible, GitHub Actions, most cloud infrastructure tools).
        </p>
        <p>
          In practice, most projects use both: JSON for API responses and data storage, YAML for configuration
          and infrastructure. The JSON-to-YAML converter bridges the gap when data flows between these
          two domains "” which it does constantly in a modern cloud-native application stack.
        </p>

        <h2>Privacy and Performance</h2>
        <p>
          All conversion runs entirely in your browser using JavaScript. No JSON content, no YAML output,
          and no metadata about your data is transmitted to our servers. The conversion is instant for
          any reasonable document size (the browser's JSON parser and YAML serializer handle megabytes
          easily). Works offline once the page loads. Your configuration data, API responses, and
          infrastructure definitions remain completely private.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a JSON to YAML converter?',
    answer:
      'A JSON to YAML converter parses a JSON document and serializes it as YAML "” converting objects to YAML mappings, arrays to YAML sequences, and preserving all data types. Our tool does this instantly in your browser with no server involvement.',
  },
  {
    category: 'General',
    question: 'Is JSON valid YAML?',
    answer:
      'Yes. Since YAML 1.2 (2009), any valid JSON document is also a valid YAML document. YAML is a superset of JSON "” it adds features like comments, multiline strings, anchors, and human-friendly syntax, while remaining backward-compatible with JSON.',
  },
  {
    category: 'General',
    question: 'Why convert JSON to YAML?',
    answer:
      'YAML is the preferred format for configuration files, CI/CD pipelines (GitHub Actions, GitLab CI), and infrastructure tools (Kubernetes, Ansible, Helm, Docker Compose). When data comes from APIs or tools as JSON, converting to YAML makes it human-editable with comment support and cleaner indentation-based structure.',
  },
  {
    category: 'Conversion',
    question: 'How does JSON object convert to YAML?',
    answer:
      'A JSON object becomes a YAML mapping. Keys are listed without surrounding braces, one per line, with values indented below nested objects: {"server": {"host": "localhost", "port": 8080}} becomes server:\\n  host: localhost\\n  port: 8080',
  },
  {
    category: 'Conversion',
    question: 'How does a JSON array convert to YAML?',
    answer:
      'A JSON array becomes a YAML sequence with each element prefixed by "- ". ["a", "b", "c"] becomes:\\n- a\\n- b\\n- c. Arrays of objects produce a sequence of mappings, the standard pattern for Kubernetes containers and GitHub Actions steps.',
  },
  {
    category: 'Conversion',
    question: 'How are JSON null values converted to YAML?',
    answer:
      'JSON null converts to YAML null. Our converter uses the explicit "null" keyword rather than the tilde (~) shorthand for clarity. Some YAML parsers also accept an empty value for null: key: (empty after colon).',
  },
  {
    category: 'Conversion',
    question: 'How are JSON booleans converted to YAML?',
    answer:
      'JSON true converts to YAML true and false to false. These are the only boolean literals in YAML 1.2. If your JSON string values are "true", "false", "yes", "no", "on", or "off", the converter quotes them to prevent misinterpretation by YAML 1.1 parsers.',
  },
  {
    category: 'Conversion',
    question: 'Which JSON strings need to be quoted in YAML?',
    answer:
      'Strings are quoted in YAML when they: contain special characters (: # [ ] { } , & * ? | - < > = ! % @ \\) at the start; contain ": " or " #" inline; match YAML keywords (true, false, null, yes, no, on, off and case variants); or start with leading zeros, +/- signs, or digits that could be parsed as numbers.',
  },
  {
    category: 'YAML Syntax',
    question: 'Can YAML have comments? How do I add them after converting?',
    answer:
      'Yes "” YAML supports # comments, both on their own line and inline. JSON does not. After converting JSON to YAML, you can add # comments to explain settings, link to documentation, or note constraints. This is one of the primary reasons to convert configuration from JSON to YAML.',
  },
  {
    category: 'YAML Syntax',
    question: 'What is the difference between block style and flow style YAML?',
    answer:
      'Block style uses indentation and newlines "” the readable, multi-line format (default in our converter). Flow style uses JSON-like braces and brackets on a single line: {key: value, list: [1, 2, 3]}. Both are valid YAML. Block style is preferred for human-authored config files; flow style for compact, machine-generated data.',
  },
  {
    category: 'YAML Syntax',
    question: 'What are YAML anchors and aliases?',
    answer:
      'Anchors (&name) define a named value that can be reused; aliases (*name) reference it. Example: defaults: &defaults\\n  timeout: 30\\nproduction:\\n  <<: *defaults\\n  timeout: 60. The <<: * syntax merges the anchored mapping. JSON has no equivalent "” round-trip JSONâ†’YAMLâ†’JSON loses anchors.',
  },
  {
    category: 'YAML Syntax',
    question: 'What are YAML multiline strings (| and >)?',
    answer:
      'The | (literal block) preserves newlines exactly "” useful for scripts and code. The > (folded block) folds newlines into spaces "” useful for long prose. JSON has no multiline string syntax; you must use \\n escape sequences. After converting, replace escaped strings with YAML block scalars for readability.',
  },
  {
    category: 'Kubernetes',
    question: 'Why does Kubernetes use YAML instead of JSON?',
    answer:
      'Kubernetes accepts both JSON and YAML, but YAML is preferred for authoring because it is more readable, supports comments for documenting resource configurations, and is less error-prone for humans to edit. The Kubernetes API internally uses JSON; kubectl converts YAML to JSON before sending API requests.',
  },
  {
    category: 'Kubernetes',
    question: 'Can I convert kubectl JSON output to a YAML manifest?',
    answer:
      'Yes "” run kubectl get deployment my-app -o json, paste the output into our converter, and get the equivalent YAML. You may want to remove status and metadata.resourceVersion fields that are server-managed and should not be in declarative manifests.',
  },
  {
    category: 'Tools',
    question: 'How do I convert JSON to YAML in Python?',
    answer:
      'import json, yaml; data = json.loads(json_string); yaml_out = yaml.dump(data, default_flow_style=False, allow_unicode=True). Install PyYAML with pip install pyyaml. For YAML 1.2 compliance and comment preservation, use ruamel.yaml instead.',
  },
  {
    category: 'Tools',
    question: 'How do I convert JSON to YAML in Node.js?',
    answer:
      'npm install js-yaml, then: const yaml = require("js-yaml"); const yamlStr = yaml.dump(JSON.parse(jsonString), {indent: 2}). The yaml package (not js-yaml) offers better YAML 1.2 compliance and comment support.',
  },
  {
    category: 'Tools',
    question: 'How do I convert JSON to YAML from the command line?',
    answer:
      'With Python: python3 -c "import sys, json, yaml; print(yaml.dump(json.load(sys.stdin), default_flow_style=False))" < input.json. With yq: yq -P input.json (yq by mikefarah supports JSON input with the -P pretty-print flag). With jq + yq: jq . input.json | yq -P.',
  },
  {
    category: 'Gotchas',
    question: 'What is the Norway problem in YAML?',
    answer:
      'In YAML 1.1, "NO", "YES", "ON", "OFF" are treated as booleans. A configuration file mapping country codes to settings would silently convert Norway&#39;s "NO" code to false. YAML 1.2 fixed this "” only true/false are booleans. Our converter targets YAML 1.2 and quotes these problematic values for safety.',
  },
  {
    category: 'Gotchas',
    question: 'Why does YAML forbid tabs for indentation?',
    answer:
      'Tabs in YAML indentation cause parse errors because different editors and tools interpret tab width differently, making indentation ambiguous. The YAML specification explicitly requires spaces for indentation. Configure your editor to insert spaces on Tab keypress for YAML files.',
  },
  {
    category: 'Gotchas',
    question: 'Do numbers with leading zeros cause problems in YAML?',
    answer:
      'Yes "” in YAML 1.1, leading-zero integers are parsed as octal (010 = 8). Postal codes, padded IDs, and phone numbers starting with 0 must be quoted. Our converter detects numeric-looking strings with leading zeros and quotes them automatically. In YAML 1.2, this octal behavior was removed, but many parsers still use YAML 1.1.',
  },
  {
    category: 'Validation',
    question: 'How do I validate my converted YAML?',
    answer:
      'Use yamllint (pip install yamllint; yamllint file.yaml) for general YAML validation. For Kubernetes manifests: kubeval or kubeconform. For GitHub Actions: actionlint. For Ansible: ansible-lint. Our converter produces valid YAML, but schema validation for the specific tool catches structural issues.',
  },
  {
    category: 'Privacy',
    question: 'Is it safe to paste sensitive configuration data into this converter?',
    answer:
      'Yes "” all conversion runs locally in your browser. No data is sent to our servers. The tool is safe for API keys in environment configs, database connection strings, Kubernetes Secrets, or any other sensitive configuration data. Works offline once the page is loaded.',
  },
  {
    category: 'Format',
    question: 'Can I control the indentation of the YAML output?',
    answer:
      'Yes "” our converter offers 2-space and 4-space indentation options. 2 spaces is the most common convention (Kubernetes documentation, yamllint default, GitHub Actions). 4 spaces is common in Python-centric projects. Both are valid YAML; choose based on your project&#39;s style guide.',
  },
  {
    category: 'Format',
    question: 'What happens to JSON numbers in scientific notation (1.5e10)?',
    answer:
      'Scientific notation JSON numbers are preserved as YAML floats. 1.5e10 in JSON becomes 1.5e+10 in YAML (or 15000000000.0 depending on converter settings). Most YAML parsers handle scientific notation correctly. If the number must remain exact (e.g., a large integer ID), treat it as a string in the source JSON.',
  },
];

export const jsonToYamlContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
