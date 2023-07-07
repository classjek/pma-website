/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      fontFamily: {
        canela: ['Canela', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
      },
      textColor: ['hover', 'focus'],
      colors: {
        'pma-orange': 'rgb(237, 106, 68)',
      },
    },
  },
  plugins: [],
}
