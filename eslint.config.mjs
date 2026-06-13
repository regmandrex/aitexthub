import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextCoreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**', '.claude/**', 'lib/seo/generated-registry-entries.ts'],
  },
  {
    // Prose-heavy site: raw apostrophes/quotes in JSX text are fine everywhere,
    // not just in page files.
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default config;
