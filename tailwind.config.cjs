/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        hlsred: {
          light: '#f53b00',
          DEFAULT: '#cc1b00',
          dark: '#be0e00',
        },
        ytred: '#d42627',
        ttvpurple: '#663398',
      },
    },
  },
  plugins: [],
}
