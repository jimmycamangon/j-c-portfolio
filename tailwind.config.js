/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Tailwind 3.3 lacks these steps; used for hairlines and ink tints
      opacity: {
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: token('paper'),
        panel: token('panel'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        signal: token('signal'),
        caution: token('caution'),
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(110%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        fade: 'fade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        draw: 'draw 1.1s cubic-bezier(0.7, 0, 0.2, 1) both',
        ticker: 'ticker 38s linear infinite',
        blink: 'blink 1.4s steps(2, start) infinite',
      },
    },
  },
  plugins: [],
};
