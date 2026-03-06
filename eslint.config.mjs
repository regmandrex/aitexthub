import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextCoreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'lib/seo/generated-registry-entries.ts'],
  },
  {
    files: ['app/**/page.{js,jsx,ts,tsx}'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default config;
