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
        'pma-green': 'rgb(31, 53, 51)',
        'pma-dark-orange': 'rgb(138, 70, 21)',
        'pma-pink': 'rgb(253,240,236)',
      },
      minWidth: {
        400: '400px',
      },
    },
  },
  plugins: [],
}

