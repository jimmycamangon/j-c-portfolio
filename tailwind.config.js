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
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'], 
      },
      backgroundImage: {
        darkTheme: 'radial-gradient(circle, #10111A, #000000)', // Dark gradient
        lightTheme: 'radial-gradient(circle, #f5f7fa, #c3cfe2)', // Light gradient
      },
    },
    colors: {
      primaryColor: '#0077B6',
      secondaryColor: '#ADD8E6',
      grayColor: "#6b7280",
      textGray: "#6b7280",
      widthGray: "#D3D3D3",
      textDark: "#000000",
      whiteColor: "#fff",
    },
  },
  plugins: [],
};