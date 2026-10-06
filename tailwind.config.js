/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'nav': '1300px',
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
    },
    // Values come from the CSS variables in globals.css (light on :root, dark on .dark)
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      bg: 'rgb(var(--bg) / <alpha-value>)',
      surface: 'rgb(var(--surface) / <alpha-value>)',
      line: 'rgb(var(--line) / <alpha-value>)',
      fg: 'rgb(var(--fg) / <alpha-value>)',
      muted: 'rgb(var(--muted) / <alpha-value>)',
      accent: 'rgb(var(--accent) / <alpha-value>)',
    },
  },
  plugins: [],
};
