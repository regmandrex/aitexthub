import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>YAML Formatter: Free Online YAML Beautifier, Validator, and Pretty Printer</h2>
        <p>
          YAML powers the configuration files, CI/CD pipelines, infrastructure-as-code manifests, and
          API specifications that run modern cloud-native applications. But YAML's whitespace-sensitive
          syntax makes it uniquely unforgiving "” a single incorrect indentation level silently changes
          the meaning of your configuration, and a mixed-indentation document causes cryptic parse
          errors that are difficult to locate without tooling. Our free online YAML formatter validates,
          formats, and beautifies YAML documents instantly in your browser, highlighting syntax errors,
          enforcing consistent indentation, and making complex nested structures readable at a glance.
        </p>
        <p>
          Whether you are debugging a Kubernetes manifest that fails to apply, reformatting a GitHub
          Actions workflow to fix a pipeline failure, cleaning up an Ansible playbook, validating an
          OpenAPI specification, or simply making a configuration file more readable for a code review,
          our YAML formatter gives you clean, valid, beautifully structured YAML output "” all processed
          locally in your browser with no data sent to any server.
        </p>

        <h2>Why YAML Formatting Is More Critical Than in Other Languages</h2>
        <p>
          In most programming languages, whitespace is cosmetic "” it has no effect on program behavior.
          Python and YAML are notable exceptions where indentation is part of the syntax. But YAML is
          arguably more fragile than Python because:
        </p>
        <ul>
          <li>
            <strong>Mixed indentation causes silent behavior changes</strong>: using 2 spaces in one
            block and 4 spaces in another is valid YAML but produces different nesting structure than
            intended. The document parses successfully while the configuration is completely wrong.
          </li>
          <li>
            <strong>Tabs are illegal</strong>: YAML explicitly forbids tab characters for indentation.
            Copy-pasting from sources that use tabs (some text editors, shell scripts) injects invisible
            invalid characters that cause parse errors with messages like "found character that cannot
            start any token" "” notoriously hard to debug without visualization.
          </li>
          <li>
            <strong>Special characters have context-dependent meaning</strong>: a colon in the middle
            of a string value versus a colon as a key-value separator are distinguished only by context.
            An unquoted string like <code>port: 8080</code> is a mapping; <code>server:8080</code> is
            a scalar string. These rules are easy to get wrong without a formatter that enforces them.
          </li>
          <li>
            <strong>Block vs flow style mixing can be confusing</strong>: YAML allows both block style
            (newline-indented) and flow style (JSON-like braces) in the same document, but inconsistent
            mixing reduces readability.
          </li>
        </ul>

        <h2>YAML Specification: 1.1 vs 1.2</h2>
        <p>
          Two major versions of the YAML specification are in active use, with important behavioral
          differences that affect formatted output:
        </p>

        <h3>YAML 1.1 (2005) "” The "Norway Problem" Version</h3>
        <p>
          YAML 1.1 treats many string values as booleans: <code>yes</code>, <code>no</code>,
          <code>on</code>, <code>off</code>, <code>true</code>, <code>false</code>, and their case
          variants are all booleans. It also treats leading-zero integers as octal (<code>010</code>
          = 8 decimal) and numbers starting with <code>0x</code> as hexadecimal.
        </p>
        <p>
          This caused the infamous "Norway problem": a YAML configuration mapping country codes to
          settings parsed <code>NO</code> (Norway's ISO code) as the boolean <code>false</code>, silently
          breaking any application that assumed it was a string. Many widely-used YAML parsers (PyYAML's
          default safe loader, Ruby's YAML library, many Go parsers) implement YAML 1.1.
        </p>

        <h3>YAML 1.2 (2009) "” The JSON-Compatible Version</h3>
        <p>
          YAML 1.2 restricts booleans to only <code>true</code> and <code>false</code>. Leading-zero
          integers are strings, not octal. JSON is a strict subset of YAML 1.2, meaning any valid JSON
          parses as valid YAML. The SnakeYAML 1.28+ library (Java), Go's <code>gopkg.in/yaml.v3</code>,
          and <code>ruamel.yaml</code> (Python) implement YAML 1.2.
        </p>
        <p>
          Our formatter targets YAML 1.2 semantics and quotes values that would be misinterpreted by
          YAML 1.1 parsers: <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>,
          Norwegian country code <code>NO</code>, and similar values. This makes output safe for both
          versions.
        </p>

        <h2>YAML Data Types and How the Formatter Handles Them</h2>

        <h3>Scalars: Strings, Numbers, Booleans, Null</h3>
        <p>
          YAML scalar types are resolved from their string representation using a set of parsing rules.
          Understanding when YAML automatically converts a value to a non-string type is essential for
          writing correct configuration files:
        </p>
        <p>
          <strong>Booleans</strong>: <code>true</code>/<code>false</code> in YAML 1.2 (case-insensitive
          per spec but most parsers require lowercase). Quote to force string: <code>"true"</code> stays
          as the string "true".
        </p>
        <p>
          <strong>Integers</strong>: bare numeric values like <code>8080</code>, <code>-1</code>,
          <code>0</code> are parsed as integers. Scientific notation is parsed as float.
        </p>
        <p>
          <strong>Floats</strong>: <code>3.14</code>, <code>1.5e10</code>, <code>.inf</code>,
          <code>-.inf</code>, <code>.nan</code> are float values.
        </p>
        <p>
          <strong>Null</strong>: <code>null</code>, <code>~</code>, or an empty value after a colon
          produce null.
        </p>
        <p>
          <strong>Strings</strong>: everything else. Strings that look like other types must be quoted.
          Our formatter detects and quotes strings containing YAML special values automatically.
        </p>

        <h3>Block Scalars: Literal and Folded</h3>
        <p>
          YAML's two multiline string styles are one of its most powerful features for configuration files:
        </p>
        <p>
          <strong>Literal block scalar (|)</strong>: preserves newlines exactly as written. Perfect for
          embedded scripts, SQL, or any content where line breaks are significant:
        </p>
        <pre>{`setup_script: |
  #!/bin/bash
  set -euo pipefail
  apt-get update
  apt-get install -y curl git
  echo "Setup complete"`}</pre>
        <p>
          <strong>Folded block scalar (&gt;)</strong>: folds single newlines into spaces, preserving
          only double newlines as paragraph breaks. Ideal for long descriptions or messages:
        </p>
        <pre>{`description: >
  This is a long description that
  will be joined into a single paragraph
  when parsed.

  This starts a new paragraph because
  of the double newline above.`}</pre>
        <p>
          Chomp indicators control trailing newlines: <code>|</code> (clip, default "” one trailing
          newline), <code>|-</code> (strip "” no trailing newlines), <code>|+</code> (keep "” all
          trailing newlines preserved). Our formatter preserves chomp indicators from the input.
        </p>

        <h3>Sequences (Lists)</h3>
        <p>
          YAML sequences use the dash-space (<code>- </code>) prefix for each item. Block sequence:
        </p>
        <pre>{`containers:
  - name: web
    image: nginx:latest
  - name: sidecar
    image: fluentd:latest`}</pre>
        <p>
          Flow sequence (JSON-style, for short lists): <code>[1, 2, 3]</code> or
          <code>[red, green, blue]</code>. Our formatter converts flow sequences to block style when
          they are long or nested.
        </p>

        <h3>Mappings (Objects)</h3>
        <p>
          YAML mappings are key-value pairs. Keys can be any valid YAML scalar. Duplicate keys are
          technically allowed by the spec but semantically invalid "” our formatter detects and warns
          about duplicate keys, which are a common source of misconfiguration bugs.
        </p>

        <h2>YAML Anchors and Aliases: The DRY Principle</h2>
        <p>
          YAML's anchor (<code>&amp;name</code>) and alias (<code>*name</code>) system is unique among
          common data formats and provides powerful DRY (Don't Repeat Yourself) capabilities for complex
          configurations:
        </p>
        <pre>{`# Define common environment variables once
common_env: &common_env
  DATABASE_URL: postgres://localhost/myapp
  REDIS_URL: redis://localhost:6379
  LOG_LEVEL: info

production:
  <<: *common_env  # Merge the anchor
  LOG_LEVEL: warn  # Override specific values

staging:
  <<: *common_env
  DATABASE_URL: postgres://staging-db/myapp`}</pre>
        <p>
          The <code>&lt;&lt;:</code> merge key is a YAML convention (not part of the core spec but
          widely supported) that merges an aliased mapping's keys into the current mapping, with local
          keys taking precedence.
        </p>
        <p>
          Our formatter preserves anchors and aliases, correctly indenting merged blocks. When converting
          from JSON (which has no anchor concept), anchors are not added, but the output is valid YAML.
        </p>

        <h2>YAML in Kubernetes: Formatting Manifests</h2>
        <p>
          Kubernetes is the primary driver of YAML usage in modern infrastructure. Every Kubernetes
          resource "” Pod, Deployment, Service, Ingress, ConfigMap, Secret, StatefulSet, CronJob, RBAC
          roles "” is defined as a YAML manifest. The consequences of formatting errors in Kubernetes
          YAML range from API server rejection (syntax errors) to silent misconfiguration (wrong
          indentation that moves a property to the wrong nesting level).
        </p>
        <p>
          Common Kubernetes YAML formatting patterns:
        </p>
        <pre>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: my-app:1.0.0
          ports:
            - containerPort: 8080
          resources:
            requests:
              memory: "128Mi"
              cpu: "250m"
            limits:
              memory: "256Mi"
              cpu: "500m"`}</pre>
        <p>
          Our formatter validates this structure and catches common Kubernetes YAML mistakes: spec at
          the wrong indentation level, containers that should be a list but formatted as a mapping, or
          resource specifications with wrong unit formatting.
        </p>

        <h2>YAML in GitHub Actions</h2>
        <p>
          GitHub Actions workflow files (<code>.github/workflows/*.yml</code>) have specific structural
          requirements. Formatting errors in workflow files lead to cryptic "Invalid workflow file"
          errors in the GitHub UI. Common formatting issues:
        </p>
        <ul>
          <li>
            <code>on:</code> at the top level must be quoted as <code>'on'</code> or <code>"on"</code>
            because <code>on</code> is a YAML 1.1 boolean value "” unquoted, some parsers convert it
            to <code>true</code>. Our formatter detects and quotes this automatically.
          </li>
          <li>
            Job steps must be a YAML sequence (each step starts with <code>- </code>), not a mapping.
          </li>
          <li>
            Multi-line <code>run</code> commands should use literal block scalars (<code>|</code>)
            rather than escaped newlines for readability.
          </li>
          <li>
            Environment variables in <code>env:</code> blocks should be properly indented under their
            containing step.
          </li>
        </ul>

        <h2>YAML in Ansible Playbooks</h2>
        <p>
          Ansible playbooks are YAML documents that describe automation tasks. Ansible uses a YAML
          structure where plays, tasks, and handlers follow specific conventions:
        </p>
        <pre>{`---
- name: Configure web server
  hosts: webservers
  become: true
  vars:
    http_port: 80
    max_clients: 200

  tasks:
    - name: Install nginx
      ansible.builtin.package:
        name: nginx
        state: present

    - name: Start and enable nginx
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: true`}</pre>
        <p>
          The <code>---</code> document start marker is conventional in Ansible. Task names in block
        style are on their own line. Our formatter handles Ansible's YAML patterns including
          <code>when</code>, <code>loop</code>, <code>register</code>, and <code>notify</code> directives.
        </p>

        <h2>OpenAPI/Swagger YAML Formatting</h2>
        <p>
          OpenAPI 3.0 and Swagger 2.0 specifications are commonly written in YAML for their superior
          readability over JSON equivalents. A well-formatted OpenAPI spec makes API documentation and
          code generation more reliable. Our formatter handles OpenAPI YAML's deeply nested structure "”
          components, schemas, paths, operations, parameters, responses "” maintaining consistent
          indentation throughout even in large specification files.
        </p>

        <h2>YAML Validation: What We Check</h2>
        <p>
          Our formatter validates the following YAML correctness criteria:
        </p>
        <ul>
          <li>
            <strong>Syntax validity</strong>: the document parses without errors. Tab characters in
            indentation, unbalanced block indicators, invalid unicode, and structural inconsistencies
            are detected and highlighted with line numbers.
          </li>
          <li>
            <strong>Duplicate keys</strong>: duplicate mapping keys at any nesting level are flagged.
            The last definition wins in most parsers, but having duplicates is almost always a bug.
          </li>
          <li>
            <strong>Mixed indentation</strong>: inconsistent indentation levels within the same document
            are detected. Our formatter normalizes to the chosen indent size (2 or 4 spaces).
          </li>
          <li>
            <strong>Tab characters</strong>: any tabs in indentation positions are flagged and converted
            to spaces.
          </li>
          <li>
            <strong>YAML 1.1 boolean traps</strong>: values like <code>yes</code>, <code>no</code>,
            <code>on</code>, <code>off</code>, <code>NO</code>, <code>YES</code> that may be
            misinterpreted as booleans by YAML 1.1 parsers are highlighted and optionally quoted.
          </li>
        </ul>

        <h2>YAML Formatting Tools for CI/CD Integration</h2>
        <p>
          For automated YAML formatting in your development pipeline:
        </p>
        <ul>
          <li>
            <strong>yamllint</strong>: Python-based YAML linter with configurable rules. Integrates with
            pre-commit, GitHub Actions, and virtually any CI system.
            Install: <code>pip install yamllint</code>.
          </li>
          <li>
            <strong>prettier</strong>: multi-language formatter with YAML support via
            <code>@prettier/plugin-yaml</code>. Produces opinionated, consistent output.
          </li>
          <li>
            <strong>yq</strong>: command-line YAML processor (jq-like). Can format YAML:
            <code>yq eval '.' input.yaml</code> outputs formatted YAML.
          </li>
          <li>
            <strong>pre-commit</strong>: add yamllint or prettier YAML hooks to
            <code>.pre-commit-config.yaml</code> to enforce formatting at commit time.
          </li>
          <li>
            <strong>VS Code YAML extension</strong>: Red Hat's YAML language server for VS Code provides
            real-time validation, formatting, and Kubernetes schema validation.
          </li>
        </ul>

        <h2>Programmatic YAML Formatting</h2>

        <h3>Python</h3>
        <p>
          Round-trip formatting (preserving comments) with ruamel.yaml:
          <code>from ruamel.yaml import YAML; yaml = YAML(); yaml.preserve_quotes = True</code>.
          For simple formatting without comments: <code>import yaml; print(yaml.dump(data, default_flow_style=False, sort_keys=False))</code>.
        </p>

        <h3>JavaScript / Node.js</h3>
        <p>
          The <code>yaml</code> package: <code>{"import YAML from 'yaml'; const formatted = YAML.stringify(YAML.parse(rawYaml), null, {indent: 2})"}</code>.
          The <code>js-yaml</code> package: <code>yaml.dump(yaml.load(rawYaml))</code>.
        </p>

        <h3>Go</h3>
        <p>
          <code>gopkg.in/yaml.v3</code>: parse to <code>yaml.Node</code> (preserves structure and comments),
          then marshal back. For simple formatting: <code>var data interface&#123;&#125;; yaml.Unmarshal(input, &amp;data); yaml.Marshal(data)</code>.
        </p>

        <h2>Privacy and Performance</h2>
        <p>
          All YAML parsing, validation, and formatting runs entirely in your browser using JavaScript.
          No YAML content "” including your configuration values, secrets in environment variable configs,
          infrastructure topology, or workflow logic "” is transmitted to our servers. The formatter
          handles documents of any complexity, including deeply nested Kubernetes manifests with many
          containers and volumes. Your infrastructure and application configuration data stays completely
          private. The tool works offline once the page is loaded.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a YAML formatter?',
    answer:
      'A YAML formatter parses a YAML document and re-serializes it with consistent indentation, proper quoting of special values, normalized whitespace, and canonical structure. It also validates syntax and reports errors with line numbers. Our formatter processes everything in your browser "” no data is sent to servers.',
  },
  {
    category: 'General',
    question: 'Why does YAML formatting matter more than JSON formatting?',
    answer:
      'YAML uses whitespace for structure "” indentation is part of the syntax, not cosmetic. Incorrect indentation silently changes the meaning of a configuration. Mixed indentation (2 spaces in one place, 4 in another) produces wrong nesting. JSON is syntactically delimited by braces and brackets so indentation never changes meaning.',
  },
  {
    category: 'General',
    question: 'What YAML specification version does this formatter target?',
    answer:
      'Our formatter targets YAML 1.2 semantics (where only true/false are booleans and JSON is a strict subset) while also flagging values that YAML 1.1 parsers would misinterpret (yes/no/on/off) for maximum compatibility. Kubernetes, GitHub Actions, and most modern tools use YAML 1.2 parsers.',
  },
  {
    category: 'Syntax',
    question: 'Why does YAML forbid tabs?',
    answer:
      'YAML explicitly forbids tab characters in indentation because different editors display tabs as different widths (2, 4, or 8 spaces), making indentation structure ambiguous. YAML requires spaces so the visual structure always matches the parsed structure. Our formatter detects tabs and converts them to spaces.',
  },
  {
    category: 'Syntax',
    question: 'Why do strings sometimes need to be quoted in YAML?',
    answer:
      'Strings must be quoted when they: contain YAML special characters (: # [ ] { } , & * ? | - < > = ! % @ \\) at the start; contain ": " or " #" inline; match YAML keywords (true, false, null, yes, no, on, off); start with digits that could parse as numbers; or start with special characters. Our formatter adds quotes automatically.',
  },
  {
    category: 'Syntax',
    question: 'What is the difference between single quotes and double quotes in YAML?',
    answer:
      'Single-quoted strings are literal "” no escape sequences are processed. &#39;It\\&#39;s here&#39; represents the literal backslash-apostrophe sequence. Double-quoted strings support escape sequences: "newline\\n tab\\t unicode\\u0041". Use single quotes for strings containing backslashes; use double quotes when you need escape sequences.',
  },
  {
    category: 'Syntax',
    question: 'What does | (pipe) mean in YAML?',
    answer:
      'The | (literal block scalar) indicator starts a multiline string where newlines are preserved exactly. script: |\\n  echo hello\\n  echo world preserves the two-line script intact. The > (folded block) folds single newlines into spaces. Both are terminated by dedentation back to the parent level.',
  },
  {
    category: 'Types',
    question: 'What is the "Norway problem" in YAML?',
    answer:
      'In YAML 1.1, the country code "NO" is parsed as the boolean false (same as "no"). A config mapping {"NO": "Norway"} becomes {"false": "Norway"} after parsing. YAML 1.2 fixes this "” only true/false are booleans. Our formatter quotes YAML 1.1 boolean-like values to prevent this.',
  },
  {
    category: 'Types',
    question: 'How do I make a number stay as a string in YAML?',
    answer:
      'Quote it: port: "8080" stays as the string "8080" rather than the integer 8080. Similarly, version: "1.0" stays as string rather than the float 1.0. Quotes override YAML&#39;s type inference. This matters for ZIP codes, phone numbers, version strings, and other numeric-looking identifiers.',
  },
  {
    category: 'Types',
    question: 'What are YAML anchors and aliases and when should I use them?',
    answer:
      'Anchors (&name) and aliases (*name) allow reuse of values without repetition. Define a block once with an anchor, reference it with an alias. The << merge key combines a referenced mapping with local overrides. Use them for: default configurations, shared environment variables, common Docker image settings.',
  },
  {
    category: 'Kubernetes',
    question: 'Why does my Kubernetes YAML fail to apply even though it "looks right"?',
    answer:
      'Most Kubernetes YAML failures are indentation errors where a property appears at the wrong nesting level. Format your manifest with our tool to reveal the actual structure. Common issues: spec at the wrong level, containers as a mapping instead of a sequence, labels indented under the wrong metadata block.',
  },
  {
    category: 'Kubernetes',
    question: 'Can I format multiple Kubernetes manifests in one file?',
    answer:
      'Yes "” Kubernetes supports multiple resource definitions in one file separated by ---  (document separator). Our formatter handles multi-document YAML files, formatting each document while preserving the --- separators between them.',
  },
  {
    category: 'GitHub Actions',
    question: 'Why does GitHub Actions show "Invalid workflow file" for my YAML?',
    answer:
      'Common causes: (1) "on:" trigger is unquoted "” in YAML 1.1, "on" is a boolean. Quote it as &#39;on:&#39; or "on:"; (2) job steps must be a sequence (start with "- "), not a mapping; (3) indentation inconsistency in the steps or jobs; (4) tabs in indentation. Our formatter catches all these automatically.',
  },
  {
    category: 'Validation',
    question: 'What does the YAML formatter validate?',
    answer:
      'Our formatter validates: syntax correctness (reports parse errors with line numbers), tab characters in indentation (illegal in YAML), duplicate mapping keys (usually a bug), inconsistent indentation widths, YAML 1.1 boolean trap values (yes/no/on/off), and null value representations.',
  },
  {
    category: 'Validation',
    question: 'What are duplicate keys in YAML and why are they a problem?',
    answer:
      'Duplicate keys in a YAML mapping occur when the same key name appears twice at the same level: {name: Alice, age: 30, name: Bob}. Most parsers accept this but use the last value, silently discarding the first. Our formatter detects and warns about duplicate keys as they almost always indicate a copy-paste error.',
  },
  {
    category: 'Tools',
    question: 'How do I format YAML from the command line?',
    answer:
      'With yq (mikefarah/yq): yq eval "." input.yaml outputs formatted YAML. With Python: python3 -c "import sys, yaml; print(yaml.dump(yaml.safe_load(sys.stdin), default_flow_style=False))" < input.yaml. With prettier: npx prettier --parser yaml input.yaml.',
  },
  {
    category: 'Tools',
    question: 'What is yamllint and how do I use it?',
    answer:
      'yamllint is a Python-based YAML linter that checks syntax, indentation, line length, and style consistency. Install: pip install yamllint. Run: yamllint file.yaml or yamllint -d "{rules: {line-length: disable}}" file.yaml. Integrates with pre-commit and CI/CD pipelines for automated enforcement.',
  },
  {
    category: 'Tools',
    question: 'How do I format YAML in Python?',
    answer:
      'Simple formatting: import yaml; print(yaml.dump(yaml.safe_load(yaml_string), default_flow_style=False, allow_unicode=True, sort_keys=False)). For comment-preserving round-trips: from ruamel.yaml import YAML; yaml = YAML(); yaml.dump(data, sys.stdout). PyYAML: pip install pyyaml, ruamel: pip install ruamel.yaml.',
  },
  {
    category: 'Indentation',
    question: 'Should I use 2-space or 4-space indentation in YAML?',
    answer:
      '2-space indentation is the dominant convention for YAML (Kubernetes documentation, GitHub Actions docs, yamllint default, and most YAML in open-source projects use 2 spaces). 4-space is common in Python-centric Ansible playbooks. Both are valid. Choose based on your project&#39;s convention and configure your editor to match.',
  },
  {
    category: 'Multiple Documents',
    question: 'What is the --- separator in YAML?',
    answer:
      'The --- (three dashes) is the YAML document start marker, separating multiple documents in a single file. Kubernetes uses this to define multiple resources in one file. The ... (three dots) is the document end marker (optional). Our formatter preserves document boundaries in multi-document files.',
  },
  {
    category: 'Comparison',
    question: 'When should I use YAML instead of JSON for configuration?',
    answer:
      'Use YAML when: humans write and edit the config regularly (comments and readability matter), multiline strings appear frequently (scripts, SQL, long descriptions), the ecosystem expects YAML (Kubernetes, Helm, Ansible, GitHub Actions, GitLab CI, Docker Compose, most cloud native tools). Use JSON for API responses, machine-generated data, and npm ecosystem configs.',
  },
  {
    category: 'Privacy',
    question: 'Is it safe to paste YAML with secrets or credentials into this formatter?',
    answer:
      'Yes "” all processing runs entirely in your browser. No YAML content including API keys, database passwords, or infrastructure topology is sent to our servers. The tool is safe for Kubernetes Secrets, Ansible vault-encrypted content, and any sensitive configuration. It works offline once the page is loaded.',
  },
  {
    category: 'OpenAPI',
    question: 'Can this formatter handle OpenAPI/Swagger YAML files?',
    answer:
      'Yes "” our formatter handles OpenAPI 3.0 and Swagger 2.0 YAML specifications, including deeply nested schemas, path definitions, parameter arrays, response objects, and component references ($ref). Large OpenAPI specs with hundreds of paths are formatted correctly with consistent indentation throughout.',
  },
];

export const yamlFormatterContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
