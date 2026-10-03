import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>[6] YAML Formatter: Free Online YAML Beautifier, Validator, and Pretty Printer</h2>
        <p>[7] YAML serves as the foundation for setup files, CI/CD pipelines, infrastructure-as-code manifests, alongside API specifications powering contemporary cloud-native environments. Nevertheless, because its syntax relies heavily on whitespace, YAML is extraordinarily unforgiving – shifting a single indentation level subtly alters the meaning of your settings, while mixed-indentation files trigger confusing parse errors that can be grueling to troubleshoot without assistance. Our free online YAML formatter parses, aligns, and tidies YAML documents on the fly right in your browser, flagging syntax errors, establishing unified indentation, and turning deeply nested blocks readable instantly.</p>
        <p>[8] Whether you are debugging a Kubernetes manifest that fails to apply, reformatting a GitHub Actions workflow to fix a pipeline failure, cleaning up an Ansible playbook, validating an OpenAPI specification, or simply making a configuration file more readable for a code review, our YAML formatter gives you clean, valid, beautifully structured YAML output – all processed locally in your browser with no data sent to any server.</p>

        <h2>[9] Why YAML Formatting Is More Critical Than in Other Languages</h2>
        <p>[10] Across the majority of programming languages, spacing is purely visual – exerting zero influence over how code executes. Python and YAML stand out as key exceptions where spacing actively dictates syntax. All the same, YAML proves distinctly more prone to mistakes than Python because:</p>
        <ul>
          <li>[11] <strong>Inconsistent spacing leads to unnoticed structural shifts</strong>: adopting 2 spaces throughout one section and 4 spaces inside another constitutes valid YAML, yet it reorganizes hierarchy in ways you didn't intend. While the file parses without complaints, your operational settings become entirely incorrect.</li>
          <li>[12] <strong>Tabs are illegal</strong>: YAML explicitly forbids tab characters for indentation. Copy-pasting from sources that use tabs (some text editors, shell scripts) injects invisible invalid characters that cause parse errors with messages like "found character that cannot start any token" – notoriously hard to debug without visualization.</li>
          <li>[12] <strong>Punctuation marks shift in meaning based on context</strong>: whether a colon functions as an internal text character or as a key-value delimiter depends solely on surrounding syntax. For example, an unquoted sequence like <code>port: 8080</code> creates a key-value mapping; conversely, <code>server:8080</code> evaluates as a scalar string. Navigating such conventions invites mistakes unless you rely on a formatter to keep them in check.</li>
          <li>[14] <strong>Block vs flow style mixing can be confusing</strong>: YAML allows both block style (newline-indented) and flow style (JSON-like braces) in the same document, but inconsistent mixing reduces readability.</li>
        </ul>

        <h2>[15] YAML Specification: 1.1 vs 1.2</h2>
        <p>[16] Two major versions of the YAML specification are in active use, with important behavioral differences that affect formatted output:</p>

        <h3>[17] YAML 1.1 (2005) – The "Norway Problem" Version</h3>
        <p>[13] In YAML 1.1, numerous everyday literals are interpreted as booleans: <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>, <code>true</code>, <code>false</code>, including their mixed-case variants, all become true/false values. Furthermore, numbers carrying leading zeros parse as octal values (meaning <code>010</code> equals 8 in decimal format), whereas numbers preceded by <code>0x</code> evaluate as hexadecimal.</p>
        <p>[14] Such rules resulted in the well-known "Norway problem": a setup file mapping country keys to values parsed <code>NO</code> (the official ISO country code for Norway) as the boolean <code>false</code>, quietly breaking any software expecting a standard string. An assortment of popular YAML processors (the default safe loader in PyYAML, the standard YAML library in Ruby, and multiple Go parsers) continue running YAML 1.1.</p>

        <h3>[20] YAML 1.2 (2009) – The JSON-Compatible Version</h3>
        <p>[15] In contrast, YAML 1.2 limits truth values strictly to <code>true</code> and <code>false</code>. Numbers containing leading zeros remain strings rather than octals. Moreover, JSON represents an exact subset of YAML 1.2, guaranteeing that every compliant JSON document parses cleanly as valid YAML. Frameworks like SnakeYAML 1.28+ (for Java), <code>gopkg.in/yaml.v3</code> (for Go), and <code>ruamel.yaml</code> (for Python) adhere to the YAML 1.2 standard.</p>
        <p>[22] Built around YAML 1.2 rules, this tool wraps problematic tokens in quotes to prevent confusion in YAML 1.1 engines: <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>, Norway's code <code>NO</code>, along with comparable literals. Consequently, the generated file remains fully compatible across both standards.</p>

        <h2>[23] YAML Data Types and How the Formatter Handles Them</h2>

        <h3>[24] Scalars: Strings, Numbers, Booleans, Null</h3>
        <p>[25] YAML scalar types are resolved from their string representation using a set of parsing rules. Understanding when YAML automatically converts a value to a non-string type is essential for writing correct configuration files:</p>
        <p><strong>Booleans</strong>: <code>true</code>/<code>false</code> define flags in YAML 1.2 (technically case-insensitive, though lowercase is widely expected). Wrap in quotes for text: <code>"true"</code> remains the literal word "true".</p>
        <p><strong>Integers</strong>: unquoted numerals such as <code>8080</code>, <code>-1</code>, or <code>0</code> evaluate directly as whole numbers. Exponential notation evaluates as float.</p>
        <p><strong>Floats</strong>: inputs like <code>3.14</code>, <code>1.5e10</code>, <code>.inf</code>, <code>-.inf</code>, and <code>.nan</code> represent decimal numbers.</p>
        <p><strong>Null</strong>: writing <code>null</code>, <code>~</code>, or leaving blank space following a colon will yield null.</p>
        <p><strong>Strings</strong>: all remaining data. Text resembling other data types requires quotation marks. Any string containing reserved keywords is automatically identified and quoted by our engine.</p>

        <h3>Block Scalars: Literal and Folded</h3>
        <p>Configuration files benefit greatly from one of YAML's strongest capabilities, its pair of multiline string styles:</p>
        <p><strong>Literal block scalar (|)</strong>: keeps line breaks precisely as entered. Ideal for embedded SQL, scripts, or any text where line spacing matters:</p>
        <pre>{`setup_script: |
  #!/bin/bash
  set -euo pipefail
  apt-get update
  apt-get install -y curl git
  echo "Setup complete"`}</pre>
        <p><strong>Folded block scalar (&gt;)</strong>: turns single line breaks into spaces while keeping double line breaks as paragraph separators. Great for extended messages or descriptions:</p>
        <pre>{`description: >\n  This extended section of text\n  merges into one continuous paragraph\n  during evaluation.\n\n  A fresh paragraph begins right here\n  due to the two preceding line breaks.`}</pre>
        <p>Block chomping indicators manage final line endings: <code>|</code> (clip: default behavior keeping one trailing line break), <code>|-</code> (strip: removes every trailing line break), <code>|+</code> (keep: retains every single trailing line break). Any original chomp indicators are maintained by our system.</p>

        <h3>Sequences (Lists)</h3>
        <p>YAML sequences rely on the dash-space (<code>- </code>) marker for every entry. Block sequence:</p>
        <pre>{`containers:
  - name: web
    image: nginx:latest
  - name: sidecar
    image: fluentd:latest`}</pre>
        <p>Inline sequences (compact JSON style): <code>[1, 2, 3]</code> or <code>[red, green, blue]</code>. Whenever lists become lengthy or deeply layered, the formatter expands them into multi-line block format.</p>

        <h3>Mappings (Objects)</h3>
        <p>YAML mappings consist of key-value pairs where keys can be any valid YAML scalar. Although duplicate keys are permitted by the specification, they are semantically incorrect, and our formatter spots and warns you about them since they frequently cause misconfiguration bugs.</p>

        <h2>YAML Anchors and Aliases: The DRY Principle</h2>
        <p>The anchor (<code>&amp;name</code>) and alias (<code>*name</code>) mechanism in YAML stands out among standard data formats, offering robust DRY (Don't Repeat Yourself) functionality for intricate configurations:</p>
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
        <p>The <code>&lt;&lt;:</code> merge key is a widely adopted YAML convention rather than a core specification feature, combining an aliased mapping's keys into the present mapping while local keys retain priority.</p>
        <p>Our formatter maintains anchors and aliases while properly formatting merged blocks with correct indentation. Converting from JSON, which lacks anchors, will not introduce them, yet the resulting output remains valid YAML.</p>

        <h2>YAML in Kubernetes: Formatting Manifests</h2>
        <p>Kubernetes is the main catalyst for YAML adoption in current infrastructure. Every Kubernetes resource – Pod, Deployment, Service, Ingress, ConfigMap, Secret, StatefulSet, CronJob, RBAC roles – is specified via a YAML manifest. The impact of formatting mistakes in Kubernetes YAML spans from API server rejection due to syntax errors up to silent misconfigurations where incorrect indentation shifts a property to the wrong nesting level.</p>
        <p>Standard YAML formatting approaches for Kubernetes:</p>
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
        <p>This formatter checks the hierarchy and detects typical Kubernetes YAML errors: spec placed at an incorrect indentation depth, containers written as a mapping instead of a list, or resource requests with improper unit formatting.</p>

        <h2>YAML in GitHub Actions</h2>
        <p>GitHub Actions workflow files (<code>.github/workflows/*.yml</code>) feature precise structural demands. Mistakes in workflow file formatting result in obscure "Invalid workflow file" messages within the GitHub interface. Typical formatting problems:</p>
        <ul>
          <li><code>on:</code> at the root level needs to be enclosed in quotes as <code>'on'</code> or <code>"on"</code> since <code>on</code> acts as a YAML 1.1 boolean value – left unquoted, certain parsers transform it into <code>true</code>. Our formatter identifies and wraps this in quotes automatically.</li>
          <li>Your job steps need to be a YAML sequence (where each individual step starts with <code>- </code>), rather than a mapping.</li>
          <li>Multi-line <code>run</code> instructions ought to employ literal block scalars (<code>|</code>) instead of escaped newlines to enhance clarity.</li>
          <li>Environment variables inside <code>env:</code> sections need correct indentation beneath their parent step.</li>
        </ul>

        <h2>Ansible Playbooks and YAML</h2>
        <p>Ansible playbooks serve as YAML files outlining automation procedures. Ansible relies on a YAML framework where plays, tasks, and handlers adhere to precise rules:</p>
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
        <p>The <code>---</code> file start indicator is standard for Ansible. Task titles in block format occupy their own line. This tool processes Ansible's YAML structures containing <code>when</code>, <code>loop</code>, <code>register</code>, and <code>notify</code> instructions.</p>

        <h2>Formatting OpenAPI and Swagger YAML</h2>
        <p>OpenAPI 3.0 and Swagger 2.0 definitions are frequently authored in YAML because they offer better legibility than JSON alternatives. A cleanly structured OpenAPI document improves API documentation and code generation dependability. Our formatting tool manages OpenAPI YAML's heavily layered hierarchy "" components, schemas, paths, operations, parameters, responses "" preserving uniform spacing throughout even within extensive specification documents.</p>

        <h2>What We Check: YAML Validation</h2>
        <p>Our formatting utility tests the following YAML accuracy standards:</p>
        <ul>
          <li><strong>Syntax validity</strong>: the file compiles cleanly. Tab spacing in indentation, mismatched block markers, improper unicode, and layout flaws are spotted and marked with line counts.</li>
          <li><strong>Duplicate keys</strong>: repeated mapping keys at any depth are identified. The final declaration prevails in most parsers, but retaining duplicates is nearly always an error.</li>
          <li><strong>Mixed indentation</strong>: varying spacing depths within the exact same file are spotted. Our tool standardizes to the selected indent width (2 or 4 spaces).</li>
          <li><strong>Tab characters</strong>: any tabs located in spacing areas are flagged and transformed into spaces.</li>
          <li><strong>YAML 1.1 boolean traps</strong>: entries like <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>, <code>NO</code>, <code>YES</code> that might be construed as booleans by YAML 1.1 parsers are flagged and optionally wrapped in quotes.</li>
        </ul>

        <h2>CI/CD Integration Using YAML Formatting Tools</h2>
        <p>For automated YAML styling within your engineering workflow:</p>
        <ul>
          <li><strong>yamllint</strong>: Python-driven YAML validator featuring customizable parameters. Connects with pre-commit, GitHub Actions, and virtually any CI platform. Install: <code>pip install yamllint</code>.</li>
          <li><strong>prettier</strong>: multi-format processor with YAML backing via <code>@prettier/plugin-yaml</code>. Generates opinionated, uniform results.</li>
          <li><strong>yq</strong>: CLI tool for handling YAML files (analogous to jq). Reformats documents cleanly: running <code>yq eval '.' input.yaml</code> outputs neatly styled data.</li>
          <li><strong>pre-commit</strong>: attach yamllint or prettier YAML hooks into <code>.pre-commit-config.yaml</code> to mandate formatting upon committing.</li>
          <li><strong>VS Code YAML extension</strong>: Red Hat's YAML language server for VS Code delivers live verification, formatting, and Kubernetes schema verification.</li>
        </ul>

        <h2>Programmatic YAML Formatting</h2>

        <h3>Python</h3>
        <p>Round-trip formatting (preserving comments) with ruamel.yaml: <code>from ruamel.yaml import YAML; yaml = YAML(); yaml.preserve_quotes = True</code>. For basic styling without comments: <code>import yaml; print(yaml.dump(data, default_flow_style=False, sort_keys=False))</code>.</p>

        <h3>JavaScript / Node.js</h3>
        <p>
          The <code>yaml</code> package: <code>{"import YAML from 'yaml'; const formatted = YAML.stringify(YAML.parse(rawYaml), null, {indent: 2})"}</code>.
          The <code>js-yaml</code> package: <code>yaml.dump(yaml.load(rawYaml))</code>.
        </p>

        <h3>Go</h3>
        <p><code>gopkg.in/yaml.v3</code>: parse into <code>yaml.Node</code> (retains layout and comments), then marshal again. For basic styling: <code>var data interface&#123;&#125;; yaml.Unmarshal(input, &amp;data); yaml.Marshal(data)</code>.</p>

        <h2>Privacy and Performance</h2>
        <p>All YAML parsing, verification, and styling executes entirely inside your browser via JavaScript. No YAML data "" encompassing your setup values, secrets within environment variable setups, system architecture, or pipeline rules "" is sent to our servers. The formatting tool processes files of any intricacy, including heavily layered Kubernetes manifests featuring multiple containers and volumes. Your system and software configuration details remain totally secure. The utility functions offline once the webpage finishes loading.</p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What defines a YAML formatter?',
    answer:
      'YAML formatters ingest raw markup and output clean syntax featuring standardized indentation levels, properly escaped reserved terms, uniform spacing, and tidy structural hierarchy. They likewise check validity and pinpoint errors by line. This tool operates entirely inside your web browser ',
  },
  {
    category: 'General',
    question: 'Why is YAML formatting more critical than JSON formatting?',
    answer:
      'YAML relies on whitespace for structure, meaning indentation is a core part of the syntax rather than just appearance. Wrong indentation can subtly alter a configuration\'s logic. Inconsistent indentation, like mixing 2 and 4 spaces, leads to improper nesting. JSON relies on brackets and braces for syntax, meaning spacing never alters the meaning.',
  },
  {
    category: 'General',
    question: 'Which YAML spec version is used by this formatter?',
    answer:
      'Our formatter focuses on YAML 1.2 rules where true and false are the sole booleans and JSON acts as a strict subset, while highlighting values like yes, no, on, and off that older YAML 1.1 parsers might misread, ensuring broad compatibility. Popular environments like Kubernetes, GitHub Actions, and modern software rely on YAML 1.2 parsers.',
  },
  {
    category: 'Syntax',
    question: 'For what reason does YAML ban tabs?',
    answer:
      'YAML strictly bans tab characters for indentation because various text editors render tabs at different sizes such as 2, 4, or 8 spaces, rendering the layout unclear. YAML mandates spaces so the visual layout always aligns with the parsed hierarchy. Our formatter identifies tabs and swaps them for spaces.',
  },
  {
    category: 'Syntax',
    question: 'When is it necessary to put quotes around strings in YAML?',
    answer:
      'Strings must be quoted when they: contain YAML special characters (: # [ ] { } , & * ? | - < > = ! % @ \\) at the start; contain ": " or " #" inline; match YAML keywords (true, false, null, yes, no, on, off); start with digits that could parse as numbers; or start with special characters. Our formatter adds quotes automatically.',
  },
  {
    category: 'Syntax',
    question: 'How do single quotes differ from double quotes within YAML files?',
    answer:
      'Single-quoted strings are literal "” no escape sequences are processed. &#39;It\\&#39;s here&#39; represents the literal backslash-apostrophe sequence. Double-quoted strings support escape sequences: "newline\\n tab\\t unicode\\u0041". Use single quotes for strings containing backslashes; use double quotes when you need escape sequences.',
  },
  {
    category: 'Syntax',
    question: 'What does the pipe symbol | represent in YAML?',
    answer:
      'The | (literal block scalar) indicator starts a multiline string where newlines are preserved exactly. script: |\\n  echo hello\\n  echo world preserves the two-line script intact. The > (folded block) folds single newlines into spaces. Both are terminated by dedentation back to the parent level.',
  },
  {
    category: 'Types',
    question: 'What exactly is the "Norway problem" within YAML?',
    answer:
      'Under YAML 1.1, the country code "NO" gets interpreted as the boolean false (just like "no"). A config mapping {"NO": "Norway"} turns into {"false": "Norway"} post-parsing. YAML 1.2 resolves this issue - only true/false count as booleans. Our formatter wraps YAML 1.1 boolean-like values in quotes to avoid this.',
  },
  {
    category: 'Types',
    question: 'How can I ensure a number remains a string in YAML?',
    answer:
      'Wrap it in quotes: port: "8080" remains the string "8080" instead of becoming integer 8080. Likewise, version: "1.0" stays a string instead of float 1.0. Quotation marks bypass YAML&#39;s type inference. This is crucial for postal codes, phone numbers, version numbers, and similar numeric strings.',
  },
  {
    category: 'Types',
    question: 'When should you utilize YAML anchors and aliases, and what are they?',
    answer:
      'Anchors (&name) and aliases (*name) enable value reuse without duplication. Establish a block once using an anchor, then invoke it using an alias. The << merge key merges a referenced mapping alongside local overrides. Apply them for: default configs, shared environment variables, standard Docker image properties.',
  },
  {
    category: 'Kubernetes',
    question: 'Why does my Kubernetes YAML fail to apply even though it "looks right"?',
    answer:
      'The majority of Kubernetes YAML errors stem from spacing mistakes where a property sits at an incorrect nesting depth. Structure your manifest using our tool to expose the true hierarchy. Typical problems: spec at an improper level, containers structured as a mapping instead of a list, labels misaligned under the metadata section.',
  },
  {
    category: 'Kubernetes',
    question: 'Is it possible to format several Kubernetes manifests within a single file?',
    answer:
      'Indeed - Kubernetes permits multiple resource definitions inside one file divided by --- (document separator). Our formatter supports multi-document YAML files, cleaning every section while keeping the --- dividers intact between them.',
  },
  {
    category: 'GitHub Actions',
    question: 'Why does GitHub Actions report "Invalid workflow file" regarding my YAML?',
    answer:
      'Typical triggers: (1) "on:" trigger is unquoted "” in YAML 1.1, "on" acts as a boolean. Wrap it as &#39;on:&#39; or "on:"; (2) job steps must form a sequence (beginning with "- "), not a mapping; (3) spacing mismatches inside jobs or steps; (4) tabs used for indentation. Our formatter flags all these instantly.',
  },
  {
    category: 'Validation',
    question: 'What checks does the YAML formatter perform?',
    answer:
      'Our formatter validates: syntax correctness (highlights parse errors alongside line numbers), tab characters in indentation (unsupported in YAML), duplicate mapping keys (typically a bug), irregular indentation widths, YAML 1.1 boolean trap values (yes/no/on/off), and null value representations.',
  },
  {
    category: 'Validation',
    question: 'What are duplicate keys in YAML and why are they an issue?',
    answer:
      'Duplicate keys in a YAML mapping occur when identical key names show up twice at the same level: {name: Alice, age: 30, name: Bob}. Most parsers accept this yet pick the final value, silently ignoring the first. Our formatter identifies and warns about duplicate keys since they almost always point to a copy-paste mistake.',
  },
  {
    category: 'Tools',
    question: 'How do I format YAML via the command line?',
    answer:
      'Using yq (mikefarah/yq): yq eval "." input.yaml outputs formatted YAML. Using Python: python3 -c "import sys, yaml; print(yaml.dump(yaml.safe_load(sys.stdin), default_flow_style=False))" < input.yaml. Using prettier: npx prettier --parser yaml input.yaml.',
  },
  {
    category: 'Tools',
    question: 'What is yamllint and how do I apply it?',
    answer:
      'yamllint is a Python-based YAML linter that checks syntax, indentation, line length, and style consistency. Install: pip install yamllint. Run: yamllint file.yaml or yamllint -d "{rules: {line-length: disable}}" file.yaml. Integrates smoothly with pre-commit and CI/CD pipelines for automated enforcement.',
  },
  {
    category: 'Tools',
    question: 'In Python, how can I format YAML?',
    answer:
      'Basic formatting: import yaml; print(yaml.dump(yaml.safe_load(yaml_string), default_flow_style=False, allow_unicode=True, sort_keys=False)). For comment-preserving round-trips: from ruamel.yaml import YAML; yaml = YAML(); yaml.dump(data, sys.stdout). PyYAML: pip install pyyaml, ruamel: pip install ruamel.yaml.',
  },
  {
    category: 'Indentation',
    question: 'Should I opt for 2-space or 4-space indentation in YAML?',
    answer:
      '2-space indentation remains the leading standard for YAML (Kubernetes documentation, GitHub Actions docs, yamllint default, and most open-source YAML projects use 2 spaces). 4-space is common within Python-focused Ansible playbooks. Both remain valid. Pick according to your project&#39;s convention and set your editor to match.',
  },
  {
    category: 'Multiple Documents',
    question: 'What does the --- separator mean in YAML?',
    answer:
      'The --- (three dashes) marks the YAML document start, dividing multiple documents inside a single file. Kubernetes utilizes this to specify multiple resources within one file. The ... (three dots) acts as the document end marker (optional). Our formatter maintains document boundaries across multi-document files.',
  },
  {
    category: 'Comparison',
    question: 'When should I pick YAML over JSON for configuration?',
    answer:
      'Opt for YAML whenever: humans write and edit the config frequently (comments and readability matter), multiline strings pop up often (scripts, SQL, extensive descriptions), the ecosystem demands YAML (Kubernetes, Helm, Ansible, GitHub Actions, GitLab CI, Docker Compose, most cloud native tools). Choose JSON for API responses, machine-generated data, and npm ecosystem configs.',
  },
  {
    category: 'Privacy',
    question: 'Is it secure to paste YAML containing secrets or credentials into this formatter?',
    answer:
      'Yes "” all processing happens entirely within your browser. No YAML data including API keys, database passwords, or infrastructure topology gets transmitted to our servers. The tool remains safe for Kubernetes Secrets, Ansible vault-encrypted content, and any sensitive setup. It works completely offline once the page loads.',
  },
  {
    category: 'OpenAPI',
    question: 'Can this formatter process OpenAPI/Swagger YAML files?',
    answer:
      'Yes "” our formatter manages OpenAPI 3.0 and Swagger 2.0 YAML specifications, covering deeply nested schemas, path definitions, parameter arrays, response objects, and component references ($ref). Large OpenAPI specs featuring hundreds of paths format correctly while keeping consistent indentation throughout.',
  },
];

export const yamlFormatterContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
