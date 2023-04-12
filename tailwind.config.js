/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'serif': ['Playfair Display'],
      'mono': ['Oxanium'],
      'sans': ['Montserrat']

    },
    extend: {},
  },
  plugins: [],
  safelist: [
    'text-red-500',
    'text-green-500',
  ]
}
