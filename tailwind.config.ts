import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        // Neubrutalist hard-edged offset shadows (no blur) — pair with border-3
        // border-black and an active/hover translate to fake a "pressed" button.
        neo: '4px 4px 0 0 #000',
        'neo-sm': '2px 2px 0 0 #000',
        'neo-lg': '6px 6px 0 0 #000',
        // Same treatment for elements on dark surfaces, where a black shadow would vanish.
        'neo-invert': '4px 4px 0 0 #fff',
        'neo-invert-sm': '2px 2px 0 0 #fff',
      },
    },
  },
  plugins: [typography],
};

export default config;
