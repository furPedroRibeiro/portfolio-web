/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    colors:{
      'primary': 'white',
      'secondary': 'black',
      'terciary': 'white',
    },
    extend: {},
  },
  plugins: [],
}

