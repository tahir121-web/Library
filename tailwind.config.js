/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-primary': '#00ED64',
        'neon-secondary': '#001E2B',
        'neon-accent': '#0b2a3a',
      }
    },
  },
  plugins: [],
}