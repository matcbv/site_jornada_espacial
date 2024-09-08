const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.resolve(__dirname, 'src', 'views', '*.html')],
  theme: {
    extend: {
      maxWidth:{
        '100': '100vw'
      },
      backgroundImage:{
        'main': 'linear-gradient(to bottom, #040216 30%, transparent)' 
      },
      colors:{
        'dark-blue': '#040216',
        'mid-blue': '#121251',
        'mid-blue-transparent': '#12125136',
        'original-yellow': 'yellow',
        'gold': '#b78d15'
      },
      screens:{
        'md': '992px'
      },
      fontFamily:{
        'xanh-mono': 'Xanh Mono',
        'rubik-mono-one': 'Rubik Mono One',
        'inconsolata': 'Inconsolata'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
