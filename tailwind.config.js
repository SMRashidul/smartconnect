/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scan app directory
    './components/**/*.{js,ts,jsx,tsx}', // Scan components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};