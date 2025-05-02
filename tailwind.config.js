/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './public/**/*.png',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    colors:{
      'primary': 'white',
      'secondary': 'black',
      'terciary': '#3766FF',
      'out-contrast': '#212121',
    },
    extend: {
      
    },
  },
  plugins: [],
}

