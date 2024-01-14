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
      'terciary': '#db1414',
      'out-contrast': '#212121',
    },
    extend: {
      
    },
  },
  plugins: [],
}

