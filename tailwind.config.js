/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // Важно для структуры app/
    './pages/**/*.{js,ts,jsx,tsx}',   // Если есть страницы в папке pages
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
