export type JsonToXmlOptions = {
  rootName?: string;
  pretty?: boolean;
  indent?: number;
  includeDeclaration?: boolean;
};

export type XmlToJsonOptions = {
  pretty?: boolean;
  includeAttributes?: boolean;
};

export type JsonToYamlOptions = {
  indent?: number;
};

function parseJsonInput(input: string): unknown {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error('Enter JSON to convert.');
  }
  try {
    return JSON.parse(trimmed);
  } catch (error) {
    throw new Error('Invalid JSON. Check for missing quotes, commas, or brackets.');
  }
}

function clampIndent(value?: number): number {
  if (!value || Number.isNaN(value)) return 2;
  return Math.min(8, Math.max(0, Math.round(value)));
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function sanitizeTagName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return 'item';
  let safe = trimmed.replace(/[^A-Za-z0-9_.-]/g, '-');
  if (!/^[A-Za-z_]/.test(safe)) {
    safe = `item-${safe}`;
  }
  return safe || 'item';
}

function wrapXmlContainer(
  tagName: string,
  children: string,
  depth: number,
  pretty: boolean,
  indentSize: number
): string {
  const indent = pretty ? ' '.repeat(indentSize * depth) : '';
  const newline = pretty ? '\n' : '';
  if (!children) {
    return `${indent}<${tagName} />${newline}`;
  }
  if (!pretty) {
    return `${indent}<${tagName}>${children}</${tagName}>`;
  }
  return `${indent}<${tagName}>${newline}${children}${indent}</${tagName}>${newline}`;
}

function renderXmlValue(
  value: unknown,
  tagName: string,
  depth: number,
  pretty: boolean,
  indentSize: number
): string {
  const indent = pretty ? ' '.repeat(indentSize * depth) : '';
  const newline = pretty ? '\n' : '';

  if (Array.isArray(value)) {
    return value.map((item) => renderXmlValue(item, tagName, depth, pretty, indentSize)).join('');
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) {
      return `${indent}<${tagName} />${newline}`;
    }
    const children = entries
      .map(([key, childValue]) => renderXmlValue(childValue, sanitizeTagName(key), depth + 1, pretty, indentSize))
      .join('');
    return wrapXmlContainer(tagName, children, depth, pretty, indentSize);
  }

  const text = escapeXml(value === null || value === undefined ? '' : String(value));
  return `${indent}<${tagName}>${text}</${tagName}>${newline}`;
}

export function jsonToXml(input: string, options: JsonToXmlOptions = {}): string {
  const data = parseJsonInput(input);
  const rootName = sanitizeTagName(options.rootName ?? 'root');
  const pretty = options.pretty ?? true;
  const indentSize = clampIndent(options.indent ?? 2);
  let xmlBody = '';

  if (Array.isArray(data)) {
    const items = data.map((item) => renderXmlValue(item, 'item', 1, pretty, indentSize)).join('');
    xmlBody = wrapXmlContainer(rootName, items, 0, pretty, indentSize);
  } else {
    xmlBody = renderXmlValue(data, rootName, 0, pretty, indentSize);
  }

  const trimmed = xmlBody.trimEnd();
  if (options.includeDeclaration) {
    const newline = pretty ? '\n' : '';
    return `<?xml version="1.0" encoding="UTF-8"?>${newline}${trimmed}`;
  }

  return trimmed;
}

function parseXmlInput(input: string): Document {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error('Enter XML to convert.');
  }
  if (typeof DOMParser === 'undefined') {
    throw new Error('XML parsing is not available in this environment.');
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(trimmed, 'application/xml');
  const parserErrors = doc.getElementsByTagName('parsererror');
  if (parserErrors.length > 0) {
    throw new Error('Invalid XML. Check for unclosed tags or invalid characters.');
  }
  return doc;
}

function elementToJson(element: Element, includeAttributes: boolean): unknown {
  const result: Record<string, unknown> = {};
  if (includeAttributes && element.attributes.length > 0) {
    const attributes: Record<string, string> = {};
    Array.from(element.attributes).forEach((attr) => {
      attributes[attr.name] = attr.value;
    });
    result['@attributes'] = attributes;
  }

  const childElements = Array.from(element.children);
  const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === 3);
  const textValue = textNodes.map((node) => node.textContent ?? '').join('').trim();

  if (childElements.length === 0) {
    if (!textValue) {
      return Object.keys(result).length ? result : '';
    }
    if (Object.keys(result).length) {
      result['#text'] = textValue;
      return result;
    }
    return textValue;
  }

  const children: Record<string, unknown> = {};
  childElements.forEach((child) => {
    const name = child.nodeName;
    const value = elementToJson(child, includeAttributes);
    if (Object.prototype.hasOwnProperty.call(children, name)) {
      const existing = children[name];
      if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        children[name] = [existing, value];
      }
    } else {
      children[name] = value;
    }
  });

  if (textValue) {
    children['#text'] = textValue;
  }

  return { ...result, ...children };
}

export function xmlToJson(input: string, options: XmlToJsonOptions = {}): string {
  const doc = parseXmlInput(input);
  const pretty = options.pretty ?? true;
  const includeAttributes = options.includeAttributes ?? true;
  const root = doc.documentElement;
  const data = { [root.nodeName]: elementToJson(root, includeAttributes) };
  return JSON.stringify(data, null, pretty ? 2 : undefined);
}

function formatYamlKey(key: string): string {
  if (/^[A-Za-z0-9_-]+$/.test(key)) {
    return key;
  }
  return JSON.stringify(key);
}

function formatYamlScalar(value: unknown): string {
  if (value === null || value === undefined) return 'null';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'string') {
    if (value === '' || /[:#\n\r\t]/.test(value) || value.trim() !== value) {
      return JSON.stringify(value);
    }
    return value;
  }
  return JSON.stringify(value);
}

function isMultiline(value: string): boolean {
  return value.includes('\n');
}

function stringifyYaml(value: unknown, indentSize: number, depth: number): string {
  const indent = ' '.repeat(indentSize * depth);

  if (Array.isArray(value)) {
    if (value.length === 0) return `${indent}[]`;
    return value
      .map((item) => {
        const rendered = stringifyYaml(item, indentSize, depth + 1);
        if (isMultiline(rendered)) {
          return `${indent}-\n${rendered}`;
        }
        return `${indent}- ${rendered.trimStart()}`;
      })
      .join('\n');
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return `${indent}{}`;
    return entries
      .map(([key, item]) => {
        const rendered = stringifyYaml(item, indentSize, depth + 1);
        const safeKey = formatYamlKey(key);
        if (isMultiline(rendered)) {
          return `${indent}${safeKey}:\n${rendered}`;
        }
        return `${indent}${safeKey}: ${rendered.trimStart()}`;
      })
      .join('\n');
  }

  return `${indent}${formatYamlScalar(value)}`;
}

export function jsonToYaml(input: string, options: JsonToYamlOptions = {}): string {
  const data = parseJsonInput(input);
  const indentSize = clampIndent(options.indent ?? 2);
  return stringifyYaml(data, indentSize, 0).trimEnd();
}

function normalizeText(text: string): string {
  return text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ');
}

function renderListItemContent(item: Element, depth: number): string {
  const parts = Array.from(item.childNodes).filter((node) => {
    if (node.nodeType !== 1) return true;
    const tag = (node as Element).tagName.toLowerCase();
    return tag !== 'ul' && tag !== 'ol';
  });
  return parts.map((child) => renderHtmlNode(child, depth, true)).join('').trim();
}

function renderList(list: Element, depth: number, ordered: boolean): string {
  const items = Array.from(list.children).filter((child) => child.tagName.toLowerCase() === 'li');
  const indent = '  '.repeat(depth);
  const lines = items.map((item, index) => {
    const marker = ordered ? `${index + 1}. ` : '- ';
    const content = renderListItemContent(item, depth + 1);
    const nestedLists = Array.from(item.children).filter((child) => {
      const tag = child.tagName.toLowerCase();
      return tag === 'ul' || tag === 'ol';
    });
    const nested = nestedLists
      .map((child) => renderList(child, depth + 1, child.tagName.toLowerCase() === 'ol'))
      .join('');
    return `${indent}${marker}${content}${nested ? `\n${nested.trimEnd()}` : ''}`;
  });
  return `${lines.join('\n')}\n\n`;
}

function renderHtmlNode(node: Node, depth: number, inline: boolean): string {
  if (node.nodeType === 3) {
    return normalizeText(node.textContent ?? '');
  }
  if (node.nodeType !== 1) {
    return '';
  }

  const element = node as Element;
  const tag = element.tagName.toLowerCase();

  switch (tag) {
    case 'h1':
      return `${'#'} ${renderHtmlChildren(element, depth, true)}\n\n`;
    case 'h2':
      return `${'##'} ${renderHtmlChildren(element, depth, true)}\n\n`;
    case 'h3':
      return `${'###'} ${renderHtmlChildren(element, depth, true)}\n\n`;
    case 'h4':
      return `${'####'} ${renderHtmlChildren(element, depth, true)}\n\n`;
    case 'h5':
      return `${'#####'} ${renderHtmlChildren(element, depth, true)}\n\n`;
    case 'h6':
      return `${'######'} ${renderHtmlChildren(element, depth, true)}\n\n`;
    case 'p': {
      const content = renderHtmlChildren(element, depth, true);
      return inline ? content : `${content}\n\n`;
    }
    case 'br':
      return inline ? ' ' : '  \n';
    case 'strong':
    case 'b':
      return `**${renderHtmlChildren(element, depth, true)}**`;
    case 'em':
    case 'i':
      return `*${renderHtmlChildren(element, depth, true)}*`;
    case 'code':
      return `\`${element.textContent ?? ''}\``;
    case 'pre': {
      const content = element.textContent ? element.textContent.replace(/\r\n/g, '\n').trimEnd() : '';
      return `\`\`\`\n${content}\n\`\`\`\n\n`;
    }
    case 'a': {
      const href = element.getAttribute('href') ?? '';
      const text = renderHtmlChildren(element, depth, true);
      return href ? `[${text}](${href})` : text;
    }
    case 'img': {
      const alt = element.getAttribute('alt') ?? '';
      const src = element.getAttribute('src') ?? '';
      return src ? `![${alt}](${src})` : '';
    }
    case 'ul':
      return renderList(element, depth, false);
    case 'ol':
      return renderList(element, depth, true);
    case 'blockquote': {
      const content = renderHtmlChildren(element, depth, true);
      return `> ${content}\n\n`;
    }
    case 'hr':
      return `---\n\n`;
    default:
      return renderHtmlChildren(element, depth, inline);
  }
}

function renderHtmlChildren(element: Element, depth: number, inline: boolean): string {
  return Array.from(element.childNodes)
    .map((child) => renderHtmlNode(child, depth, inline))
    .join('');
}

function cleanupMarkdown(markdown: string): string {
  return markdown.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

export function htmlToMarkdown(input: string): string {
  if (!input.trim()) {
    throw new Error('Enter HTML to convert.');
  }
  if (typeof DOMParser === 'undefined') {
    return input.replace(/<[^>]*>/g, '').trim();
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, 'text/html');
  const content = renderHtmlNode(doc.body, 0, false);
  return cleanupMarkdown(content);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function applyInlineMarkdown(text: string): string {
  let escaped = escapeHtml(text);
  const codeSpans: string[] = [];
  escaped = escaped.replace(/`([^`]+)`/g, (_, code) => {
    const index = codeSpans.push(code) - 1;
    return `{{CODE_SPAN_${index}}}`;
  });
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  escaped = escaped.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  escaped = escaped.replace(/{{CODE_SPAN_(\d+)}}/g, (_, idx) => `<code>${codeSpans[Number(idx)] ?? ''}</code>`);
  return escaped;
}

export function markdownToHtml(input: string): string {
  const normalized = input.replace(/\r\n/g, '\n');
  if (!normalized.trim()) {
    throw new Error('Enter Markdown to convert.');
  }

  const lines = normalized.split('\n');
  let html = '';
  let paragraphLines: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let listItems: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const content = paragraphLines.join(' ').trim();
    if (content) {
      html += `<p>${applyInlineMarkdown(content)}</p>\n`;
    }
    paragraphLines = [];
  };

  const flushList = () => {
    if (!listType) return;
    html += `<${listType}>${listItems.map((item) => `<li>${applyInlineMarkdown(item)}</li>`).join('')}</${listType}>\n`;
    listType = null;
    listItems = [];
  };

  for (const line of lines) {
    const fenceMatch = line.match(/^```/);
    if (fenceMatch) {
      if (inCodeBlock) {
        html += `<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>\n`;
        inCodeBlock = false;
        codeLines = [];
      } else {
        flushParagraph();
        flushList();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      html += `<h${level}>${applyInlineMarkdown(headingMatch[2].trim())}</h${level}>\n`;
      continue;
    }

    const blockquoteMatch = line.match(/^\s*>\s?(.*)$/);
    if (blockquoteMatch) {
      flushParagraph();
      flushList();
      html += `<blockquote>${applyInlineMarkdown(blockquoteMatch[1].trim())}</blockquote>\n`;
      continue;
    }

    const ulMatch = line.match(/^\s*[-*+]\s+(.*)$/);
    if (ulMatch) {
      flushParagraph();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(ulMatch[1].trim());
      continue;
    }

    const olMatch = line.match(/^\s*\d+\.\s+(.*)$/);
    if (olMatch) {
      flushParagraph();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(olMatch[1].trim());
      continue;
    }

    paragraphLines.push(line.trim());
  }

  if (inCodeBlock) {
    html += `<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>\n`;
  }

  flushParagraph();
  flushList();

  return html.trim();
}
