/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        conectado: {
          1: '#252c56',
          2: '#1184c6',
          3: '#006c68',
          4: '#ee2d6e',
          5: '#ffd346',
          6: '#f6893e',

        },
      }
    },
  },
  plugins: [

  ],
}

