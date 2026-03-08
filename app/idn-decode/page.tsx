import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { IdnDecodeTool } from '@/components/tools/IdnDecodeTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

export const revalidate = 86400;

const toolSlug = 'idn-decode';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "IDN Decode";
  const description = "Decode Punycode domains into readable Unicode.";
  const seoTitle = "IDN Decode - Convert Punycode to Unicode";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What does an IDN decoder do?',
    answer:
      'An IDN decoder converts Punycode labels back into Unicode so they are readable again. It looks for xn-- labels, decodes them, and leaves ASCII labels unchanged. This is useful for inspecting domains in logs, certificates, or analytics reports. The decoding is reversible when the input is valid Punycode.',
  },
  {
    category: 'General',
    question: 'What is the xn-- prefix used for?',
    answer:
      'The xn-- prefix marks a label as Punycode. It tells software to decode the label into Unicode for display. Without the prefix, a label is treated as plain ASCII. Only labels that were originally encoded should include xn--.',
  },
  {
    category: 'Input',
    question: 'Can I decode a full URL instead of just a domain?',
    answer:
      'Yes. The tool decodes only the hostname portion and keeps the path, query, and fragment intact. This makes it safe to use with complete URLs from logs or analytics tools. If the URL is malformed, decoding will fail and you will see an error. Use a clean URL for the most reliable results.',
  },
  {
    category: 'Input',
    question: 'What happens if the input has no xn-- labels?',
    answer:
      'The output will match the input. ASCII labels are left unchanged because there is nothing to decode. This is expected and confirms that the hostname is already in a readable form. The tool does not invent Unicode characters that are not encoded.',
  },
  {
    category: 'Output',
    question: 'Why does my output still include xn--?',
    answer:
      'That usually means the label was not valid Punycode or the xn-- prefix was part of a literal label. The decoder only converts valid Punycode labels. If decoding fails, the label is left as-is so you do not lose information. Double-check that your input is real Punycode before decoding.',
  },
  {
    category: 'Usage',
    question: 'When should I use IDN decoding?',
    answer:
      'Decode when you need to read or display the human-friendly form of a domain. This is common in reports, customer support, or compliance workflows. If you are configuring DNS or certificates, keep the Punycode form. Use decoding for readability, not for machine configuration.',
  },
  {
    category: 'Usage',
    question: 'Can I decode email addresses?',
    answer:
      'Only the domain portion of an email address can be decoded. The local part before the @ symbol follows different rules. Split the address, decode the domain, and then recombine it if needed. The tool is designed for hostnames, not full mailbox addresses.',
  },
  {
    category: 'Technical',
    question: 'Is IDN decoding reversible?',
    answer:
      'Yes, when the input is valid Punycode. Decoding followed by encoding should return the same ASCII label. This round-trip check is a good way to validate that the output is correct. If the input is malformed, decoding may fail or return the original text unchanged.',
  },
  {
    category: 'Technical',
    question: 'Does the tool normalize Unicode output?',
    answer:
      'No. The decoder returns the Unicode characters represented by the Punycode label. It does not apply normalization such as NFC or NFD. If your workflow requires normalization, apply it after decoding. Keeping normalization separate makes the output predictable.',
  },
  {
    category: 'Technical',
    question: 'Can I decode mixed ASCII and Punycode labels?',
    answer:
      'Yes. The decoder processes each label independently. ASCII labels stay the same, while xn-- labels are converted to Unicode. This is common in real domains and is supported by design. The output will be a mix of Unicode and ASCII labels when appropriate.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why am I getting an invalid Punycode error?',
    answer:
      'Errors occur when the xn-- label is not valid Punycode or the hostname is malformed. This can happen if the label was truncated or copied incorrectly. Make sure you include the full label and that it contains only valid Punycode characters. If the input is correct but still fails, try decoding with a second tool to confirm.',
  },
  {
    category: 'Troubleshooting',
    question: 'Why does the decoded output look strange?',
    answer:
      'If the original domain uses uncommon characters or symbols, the decoded output may look unexpected. That does not necessarily mean it is wrong. Some scripts contain characters that are unfamiliar to readers who do not use that language. Always verify the domain with a trusted source if you are unsure.',
  },
  {
    category: 'Security',
    question: 'Does decoding protect against phishing?',
    answer:
      'No. Decoding makes domains readable but does not prevent look-alike characters. Homograph attacks can still use characters that appear identical to trusted domains. Use additional security checks and allowlists to protect users. Decoding is a visibility step, not a security control.',
  },
  {
    category: 'Security',
    question: 'Can decoding reveal suspicious look-alike domains?',
    answer:
      'It can help by exposing the Unicode form, which may make differences more obvious. However, some look-alike characters are still difficult to spot even in Unicode. Use decoding as one part of a broader review process. For high-risk scenarios, rely on trusted security tooling.',
  },
  {
    category: 'SEO',
    question: 'Does decoding impact SEO or rankings?',
    answer:
      'No. Decoding is a presentation step and does not change how search engines treat the domain. Search engines recognize both Unicode and Punycode forms as the same host. Use decoding to read and verify data, not as an SEO technique. Consistency and technical correctness matter more than display format.',
  },
  {
    category: 'Usage',
    question: 'Should I store decoded domains in databases?',
    answer:
      'Store the Punycode form if your systems need ASCII compatibility, and store the Unicode form separately for display if needed. Keeping both forms prevents confusion and makes debugging easier. Avoid mixing them in a single field. A clear schema helps teams know which representation they are using.',
  },
  {
    category: 'Usage',
    question: 'Can I decode hostnames with ports?',
    answer:
      'Yes. The tool keeps the port value and decodes only the hostname. This is useful when reviewing staging URLs or local test environments. Make sure the port is correctly formatted with a colon. The output retains the same port value after decoding.',
  },
  {
    category: 'Limits',
    question: 'Is there a maximum length for decoded labels?',
    answer:
      'DNS label length limits still apply after decoding. A label can be no longer than 63 characters in its encoded form, and domains have a total length limit of 253 characters. Decoding does not change those rules. If a label was valid in ASCII, the decoded form is still within DNS limits.',
  },
  {
    category: 'Input',
    question: 'Does the decoder accept uppercase Punycode?',
    answer:
      'Yes. Punycode is case-insensitive, and the decoder treats uppercase and lowercase letters the same. The output will be in Unicode regardless of the input case. If you need normalized ASCII, convert to lowercase before decoding for consistency. The decoded result is unaffected by case.',
  },
  {
    category: 'Compatibility',
    question: 'Will the decoded output work in DNS?',
    answer:
      'DNS expects ASCII labels, so the decoded Unicode form is meant for display, not for DNS records. Use the encoded Punycode form for DNS or certificate configuration. Keep the decoded form for UI, documentation, and reporting. This separation prevents configuration errors.',
  },
  {
    category: 'Best practices',
    question: 'How can I verify decoded output is correct?',
    answer:
      'A reliable method is round-trip verification. Decode the Punycode label, then re-encode it and compare with the original. If the output matches, the decoding is correct. This is especially useful when you handle sensitive domains or compliance logs.',
  },
  {
    category: 'Best practices',
    question: 'Should I show Punycode or Unicode in user interfaces?',
    answer:
      'Show Unicode when you want readability for users who recognize the script. Show Punycode when you need to avoid ambiguity or when fonts might not render correctly. Some systems show both to reduce confusion. The decoder helps you decide which form is appropriate for each context.',
  },
  {
    category: 'Privacy',
    question: 'Does the tool store the domains I decode?',
    answer:
      'No. The tool runs locally in your browser and does not send data to a server. Your inputs and outputs are not stored or logged. This makes it safe for internal or confidential domains. Clear the text when you are done to remove it from the page.',
  },
  {
    category: 'General',
    question: 'Is IDN decoding the same as URL decoding?',
    answer:
      'No. URL decoding converts percent-encoded characters like %20 into readable text. IDN decoding converts Punycode labels back into Unicode. They apply to different parts of a URL. Use URL decoding for query strings and IDN decoding for hostnames.',
  },
  {
    category: 'General',
    question: 'Does the decoder handle emoji domains?',
    answer:
      'If the emoji domain is represented in Punycode, the decoder can convert it back to the Unicode emoji. Support for emoji domains varies across registrars and browsers, so output should be reviewed in context. Decoding does not guarantee that the domain is valid or safe. It only reveals the Unicode representation.',
  },
];

const writeUp = (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>IDN Decode Tool - Convert Punycode to Readable Domains</h2>
      <h2>Introduction</h2>
      <p>
        Punycode is the ASCII representation of internationalized domain names. It is essential for compatibility with DNS and legacy systems,
        but it is not friendly to read. A domain like xn--mnich-kva.com is technically correct, yet most people would rather see the Unicode form
        that reflects the actual language or brand. IDN decoding turns those ASCII labels back into their human-readable form so you can inspect
        and validate them with confidence.
      </p>
      <p>
        The IDN Decode tool on gptcleanuptools.com restores readability without changing the underlying host. It works in your browser and does
        not store any data. Paste a Punycode domain or full URL, and the tool decodes the hostname while leaving the rest of the URL intact. This
        is useful for audits, support tickets, analytics reports, and any workflow where you need to see the real Unicode domain.
      </p>
      <p>
        Decoding is also helpful when you suspect homograph attacks. The Unicode form can reveal characters that look similar but are not the
        same. While decoding is not a security filter, it is a valuable visibility step for reviewers and analysts. This page explains how IDN
        decoding works, what it does not do, and how to use it responsibly.
      </p>

      <h2>How Punycode Represents Unicode Domains</h2>
      <p>
        IDN encoding converts Unicode labels into ASCII using Punycode. Each label that contains non-ASCII characters is encoded and prefixed
        with xn--. ASCII labels remain unchanged. This means a domain can contain a mix of normal labels and xn-- labels, depending on which parts
        contain Unicode.
      </p>
      <p>
        Punycode is reversible, which is why decoding works so reliably. The encoding algorithm preserves the original Unicode characters. When
        you decode, the xn-- prefix is removed and the label is converted back to its Unicode form. The result is the same hostname, just rendered
        in a more readable script.
      </p>
      <p>
        It is important to note that decoding is a display step. The DNS system still uses the ASCII form behind the scenes. When you copy a
        decoded domain into DNS settings, you should re-encode it. The decoder is for readability and verification, not for configuration.
      </p>

      <h2>How the IDN Decode Tool Works</h2>
      <h3>1) Input parsing</h3>
      <p>
        Paste a Punycode hostname or a full URL. The tool detects the hostname portion and ignores the path, query, and fragment. This keeps
        decoding focused on the part of the URL that actually uses IDN encoding. If the input is malformed, the tool returns a clear error.
      </p>
      <h3>2) Label detection</h3>
      <p>
        The decoder scans each label for the xn-- prefix. Labels without that prefix are left unchanged. Labels with the prefix are decoded using
        the Punycode algorithm. This label-by-label approach preserves mixed domains and keeps ASCII labels readable.
      </p>
      <h3>3) Output formatting</h3>
      <p>
        The decoded hostname is recombined with any URL path, query, or fragment that was present in the input. The output is intended for
        display and inspection. It does not alter the destination or the meaning of the URL. You can copy the output into documentation, reports,
        or UI text fields with confidence.
      </p>
      <pre>
        <code>{`const labels = hostname.split('.');
const decoded = labels.map((label) => {
  return label.startsWith('xn--') ? fromPunycode(label.slice(4)) : label;
});
return decoded.join('.');`}</code>
      </pre>
      <p>
        The snippet shows the core logic: decode only xn-- labels and leave ASCII labels untouched. The tool adds validation and error handling so
        invalid inputs are flagged instead of silently corrupted.
      </p>

      <h2>Example Decoding Results</h2>
      <p>
        The examples below show how Punycode labels become readable Unicode. Notice that the xn-- prefix disappears after decoding. Only the
        encoded labels change, while ASCII labels remain the same. This makes the output easier to read and compare.
      </p>
      <table>
        <thead>
          <tr>
            <th>Punycode input</th>
            <th>Decoded output</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>xn--mnich-kva.com</td>
            <td>{'m\u00fcnich.com'}</td>
            <td>Single label decoded.</td>
          </tr>
          <tr>
            <td>xn--bcher-kva.example</td>
            <td>{'b\u00fccher.example'}</td>
            <td>First label decoded only.</td>
          </tr>
          <tr>
            <td>xn--caf-dma.example</td>
            <td>{'caf\u00e9.example'}</td>
            <td>Accent restored to Unicode.</td>
          </tr>
          <tr>
            <td>example.com</td>
            <td>example.com</td>
            <td>ASCII labels unchanged.</td>
          </tr>
        </tbody>
      </table>
      <p>
        These examples show why decoding is useful for audits and reporting. The Unicode output is readable and closer to the intended brand or
        language. The Punycode form remains the correct format for DNS and certificates.
      </p>

      <h2>Why Decode IDNs in Practice</h2>
      <p>
        The most common reason to decode is readability. Punycode is hard to parse visually, especially when domains are long. Decoding restores
        the original characters so reviewers can see the intended language and spelling. This is especially useful in support tickets and content
        reviews where accuracy matters.
      </p>
      <p>
        Decoding also helps when you are verifying analytics or logs. A Punycode domain in a report may not be recognizable to non-technical
        stakeholders. Decoding provides a readable version while preserving the underlying host. This reduces confusion and speeds up review.
      </p>
      <p>
        Another use case is compliance and security review. Decoding exposes characters that might be hidden in Punycode, which helps auditors
        spot suspicious or unintended domains. While decoding is not a security guarantee, it is a practical first step for manual inspection.
      </p>

      <h2>Unicode Details and Normalization</h2>
      <p>
        Unicode characters can be represented in different forms, such as composed or decomposed sequences. Punycode encodes the exact sequence of
        code points, so decoding will return that same sequence. This means two visually identical domains can decode to different underlying
        code points if they were normalized differently.
      </p>
      <p>
        If your workflow requires a normalized form, apply normalization after decoding. Keep normalization separate from decoding so you can
        track changes intentionally. The tool is focused on decoding accuracy and does not alter the character sequence on its own.
      </p>

      <h2>Security Notes: Homograph Awareness</h2>
      <p>
        Decoding can reveal characters that are hard to distinguish in ASCII. For example, letters from different scripts may look identical in
        some fonts. The Unicode output helps reviewers identify these patterns more clearly. However, decoding does not guarantee that a domain is
        safe or trustworthy.
      </p>
      <p>
        Use decoded output as an input to security review rather than a final decision. For high-risk workflows, apply additional checks such as
        script mixing rules, allowlists, or visual warnings. The decoder is a visibility tool, not an enforcement tool.
      </p>

      <h2>When to Keep Punycode Instead</h2>
      <p>
        Use Punycode when you are configuring DNS or requesting certificates. These systems expect ASCII hostnames, and the Unicode form may be
        rejected. If you need to store a stable key in a database, the ASCII form is often safer. The decoded form is best suited for display or
        reporting.
      </p>
      <p>
        If you are sharing a domain with someone who might not have proper Unicode font support, consider including both forms. The Punycode form
        ensures compatibility while the Unicode form provides readability. Providing both reduces ambiguity and avoids miscommunication.
      </p>

      <h2>Use Cases Across Teams</h2>
      <h3>Support and customer success</h3>
      <p>
        Support teams decode Punycode domains from logs and tickets so they can read the actual customer domain. This makes it easier to confirm
        spelling and detect mistakes. It also helps when communicating with non-technical users who do not recognize Punycode.
      </p>
      <h3>Security and compliance</h3>
      <p>
        Security teams decode domains to evaluate potential spoofing. The Unicode form can reveal hidden differences between legitimate and
        malicious domains. Decoding is not a full defense, but it is a key step in manual review.
      </p>
      <h3>Marketing and localization</h3>
      <p>
        Localization teams use decoding to verify that a translated domain matches the intended language. Marketing teams can confirm that a
        branded domain appears correctly in Unicode before publishing. The decoder provides a quick check without additional tooling.
      </p>
      <h3>Developers and QA</h3>
      <p>
        Engineers decode IDNs when debugging URL parsing, certificate logs, or analytics pipelines. It helps them understand what a system is
        actually processing and ensures that encoded values map to the expected Unicode labels. This improves test coverage for internationalized
        inputs.
      </p>

      <h2>Publishing and SEO Considerations</h2>
      <p>
        Search engines treat Unicode and Punycode domains as the same host. Decoding does not change ranking or indexing behavior. The key is to
        use consistent internal linking and canonical signals. Use decoding for readability in reports and content previews, not as a ranking
        strategy.
      </p>
      <p>
        When generating sitemaps or structured data, use the domain format that your system expects. Some tools prefer ASCII, while others accept
        Unicode. The decoder helps you inspect and verify both forms so you can choose the right one for each context.
      </p>

      <h2>Accessibility and Usability</h2>
      <p>
        Unicode domains are easier to read for users who speak the local language. Decoding makes those domains visible and understandable in
        reports, interfaces, and support channels. This improves usability and reduces confusion. It also helps teams communicate clearly across
        technical and non-technical roles.
      </p>
      <p>
        In environments where Unicode support is limited, the Punycode form remains essential. The decoder lets you provide both representations
        to accommodate different audiences. This balance improves accessibility without sacrificing compatibility.
      </p>

      <h2>What This Tool Does Not Do</h2>
      <ul>
        <li>It does not validate DNS records or domain registration status.</li>
        <li>It does not detect phishing or enforce security rules.</li>
        <li>It does not normalize Unicode or convert between scripts.</li>
        <li>It does not change URL paths, queries, or fragments.</li>
      </ul>
      <p>
        The IDN Decode tool is a formatting utility. It reveals the Unicode representation of encoded labels, but it does not validate the domain
        or guarantee safety. Pair it with validation and security tools when those checks are required.
      </p>

      <h2>Privacy and Security Notes</h2>
      <p>
        Decoding happens locally in your browser. No data is sent to a server or stored. This is important for internal domains or sensitive
        investigations. You control the input and output at all times.
      </p>
      <p>
        Keep in mind that decoded output may include sensitive or misleading characters. Handle it with care and avoid sharing it publicly if it
        could create confusion. The tool provides visibility, not verification.
      </p>

      <h2>Best Practices for IDN Decoding</h2>
      <p>
        Decode for readability, but keep the Punycode form for technical configuration. When reviewing domains, use round-trip verification by
        re-encoding the decoded output and comparing it with the original. This reduces mistakes and confirms that the decoded form is accurate.
      </p>
      <p>
        Store both forms when possible. Use the Unicode form for UI display and the ASCII form for technical storage. This makes it easier to
        audit logs, generate reports, and troubleshoot issues without losing compatibility.
      </p>

      <h2>How to Interpret Decoded Output</h2>
      <p>
        Decoded output is meant for human interpretation. It helps you see the language, accents, and script that the domain owner intended. The
        decoded form is not necessarily the version that should be copied into DNS, because DNS expects ASCII. Treat the Unicode output as a view
        layer and the Punycode input as the transport layer.
      </p>
      <p>
        If you see characters that look unfamiliar, compare the output with known domain records or registration details. Some scripts contain
        characters that are visually similar to Latin letters, which can cause confusion. Decoding makes those differences visible, but the final
        decision still requires context. Use decoded output as a review tool, not as a substitute for verification.
      </p>

      <h2>Audit and Compliance Workflows</h2>
      <p>
        Compliance teams often review domain lists for policy enforcement or risk assessment. Punycode entries are difficult to read in bulk, so
        decoding helps reviewers understand what the domains actually say. A decoded view can reveal misleading or confusing names that would be
        hard to detect in ASCII form. This is especially valuable when reviewing partner domains, affiliate links, or user-generated content.
      </p>
      <p>
        For audit trails, keep both the encoded and decoded forms in your records. The encoded form is the canonical technical identifier, while
        the decoded form provides readability for reports. Storing both reduces ambiguity during audits and gives reviewers the context they need
        to make accurate decisions. This pattern also helps when regulators request clear documentation.
      </p>

      <h2>Reporting and Analytics Use Cases</h2>
      <p>
        Analytics dashboards often store hostnames in their ASCII form. This is efficient for indexing but not user friendly for reports. When
        you export or share data, decoding those hostnames makes reports readable for non-technical stakeholders. It also helps marketers verify
        that branded domains are represented correctly.
      </p>
      <p>
        In attribution workflows, a decoded hostname can prevent mislabeling. For example, two Punycode domains might look similar in ASCII but
        represent different Unicode labels. Decoding helps analysts spot those differences and avoid grouping unrelated domains. This improves
        reporting accuracy and reduces downstream confusion.
      </p>

      <h2>Font and Rendering Considerations</h2>
      <p>
        Unicode rendering depends on fonts and platform support. A decoded domain might not display correctly if the viewer lacks the appropriate
        fonts. In those cases, the Punycode form remains a reliable fallback. When sharing results, consider providing both forms to avoid
        misinterpretation.
      </p>
      <p>
        Script mixing can also affect readability. Some scripts share glyphs that look like Latin characters, while others use entirely different
        shapes. Decoding exposes the true script, but you should still check how it renders in your target UI. This is especially important for
        security reviews and customer-facing content.
      </p>

      <h2>Browser and Registrar Behavior</h2>
      <p>
        Browsers often display Unicode in the address bar when a domain passes security checks. If a domain fails those checks, the browser may
        display Punycode instead. Decoding gives you the Unicode form regardless of browser decisions, which helps during troubleshooting. It is
        also useful when comparing browser display behavior across different locales.
      </p>
      <p>
        Registrars typically store the ASCII form internally. Decoding helps you verify that the registered domain matches the intended Unicode
        label. If you are transferring domains between registrars, decode the Punycode form to confirm that nothing changed. This step prevents
        mistakes during domain migrations or renewals.
      </p>

      <h2>Handling Suspicious or Unexpected Output</h2>
      <p>
        If the decoded output contains characters you do not expect, treat it as a signal to investigate further. It could mean the domain was
        registered with a different script than you assumed, or that the input is malformed. Use round-trip checks and compare with registrar
        records to confirm the correct label. Document any discrepancies for future review.
      </p>
      <p>
        For high-risk workflows, consider additional safeguards such as script allowlists or confusable character detection. Decoding is an
        important visibility step, but it does not replace these controls. A layered approach is more effective when handling untrusted domains.
      </p>

      <h2>Final Summary and When to Use This Tool</h2>
      <p>
        The IDN Decode tool converts Punycode hostnames back into readable Unicode so you can inspect and verify internationalized domains. It
        decodes only the hostname portion and leaves the rest of the URL intact. The output is intended for display and documentation, not for
        DNS configuration.
      </p>
      <p>
        Use this tool when you need to review encoded domains in logs, audits, or reports. Decode for readability, and re-encode when you need a
        compatible ASCII form for DNS or certificates. This balanced workflow keeps your systems correct and your teams aligned.
      </p>
    </div>
  </section>
);

export default async function IdnDecodePage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
  };

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<IdnDecodeTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {writeUp}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">IDN Decode FAQ</h2>
          <p className="text-slate-700">Helpful answers about Punycode decoding, Unicode output, and safe handling of IDN domains.</p>
        </div>
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}
