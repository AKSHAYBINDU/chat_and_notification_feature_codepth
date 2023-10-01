/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'custom-rgba': 'rgba(10, 16, 69, 1)',
      },
    },
  },
  plugins: [],
}