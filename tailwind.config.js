/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        home: colors.red[500],
        restaurants: colors.blue[500],
        movies: colors.yellow[500],
        books: colors.green[500],
      },
    },
  },
  plugins: [],
}
