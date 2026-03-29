#!/usr/bin/env node
/**
 * Fill article template placeholders from a group config.
 * Makes per-tool article generation easier: use {tool_name}, {slug}, etc. in templates.
 *
 * Usage:
 *   node scripts/fill-article-template.mjs --list <group>              # list tools in group
 *   node scripts/fill-article-template.mjs <group> <slug> [template]   # fill template for one tool
 *   node scripts/fill-article-template.mjs <group> <slug>              # read template from stdin
 *
 * Config: scripts/config/<group>.json with { "group", "tools": [ { "slug", "toolName", ... } ] }
 * Placeholders: {tool_name}, {tool_name_lower}, {slug}, {primary_keyword}, {short_description}, {what_it_does}, {language_style}
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const configDir = path.join(__dirname, 'config');

function loadGroup(group) {
  const p = path.join(configDir, `${group}.json`);
  if (!fs.existsSync(p)) {
    console.error(`Config not found: ${p}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function getTool(groupConfig, slug) {
  const t = groupConfig.tools.find((x) => x.slug === slug);
  if (!t) {
    console.error(`Tool not found: ${slug} in group ${groupConfig.group}`);
    process.exit(1);
  }
  return t;
}

function placeholders(tool) {
  const name = tool.toolName || tool.slug;
  return {
    tool_name: name,
    tool_name_lower: name.toLowerCase(),
    slug: tool.slug,
    primary_keyword: tool.primaryKeyword ?? name,
    short_description: tool.shortDescription ?? '',
    what_it_does: tool.whatItDoes ?? 'processes your text',
    language_style: tool.languageStyle ?? name,
  };
}

function fillTemplate(text, vars) {
  let out = text;
  for (const [key, value] of Object.entries(vars)) {
    const re = new RegExp(`\\{${key}\\}`, 'g');
    out = out.replace(re, value);
  }
  return out;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node fill-article-template.mjs --list <group> | <group> <slug> [template file]');
    process.exit(1);
  }

  if (args[0] === '--list') {
    const group = args[1];
    if (!group) {
      console.error('Usage: node fill-article-template.mjs --list <group>');
      process.exit(1);
    }
    const config = loadGroup(group);
    console.log(`Group: ${config.group}`);
    for (const t of config.tools) {
      console.log(`  ${t.slug}  →  ${t.toolName}`);
    }
    return;
  }

  const [group, slug, templatePath] = args;
  if (!group || !slug) {
    console.error('Usage: node fill-article-template.mjs <group> <slug> [template file]');
    process.exit(1);
  }

  const config = loadGroup(group);
  const tool = getTool(config, slug);
  const vars = placeholders(tool);

  let template;
  if (templatePath && fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, 'utf8');
  } else if (templatePath) {
    console.error(`Template file not found: ${templatePath}`);
    process.exit(1);
  } else {
    template = fs.readFileSync(0, 'utf8');
  }

  console.log(fillTemplate(template, vars));
}

main();
