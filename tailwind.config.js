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
    },
    colors: {
      darkTheme: '#1A1A40',
      lightTheme: '#EAEAEA',
      primaryColor: '#0077B6',
      secondaryColor: '#ADD8E6',
    }
  },
  plugins: [],
}
