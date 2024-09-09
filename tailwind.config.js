const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.resolve(__dirname, 'src', 'views', '*.html')],
  theme: {
    extend: {
      width:{
        '90': '90%',
        '100': '100%',
        '100vw': '100vw'
      },
      height: {
        '92': '92%',
        '100': '100%'
      },
      maxWidth:{
        '100': '100vw',
        '500': '500px'
      },
      colors:{
        'dark-blue': '#040216',
        'mid-blue': '#121251',
        'mid-blue-transparent': '#1212511f',
        'light-purple-transparent': '#5c69cf38',
        'dark-purple-transparent': '#12125152',
        'light-blue': '#5c69cf',
        'original-yellow': 'yellow',
        'white-gray': '#d1d1d1',
      },
      screens:{
        'md': '992px',
        'sm': '768px'
      },
      fontFamily:{
        'xanh-mono': 'Xanh Mono',
        'rubik-mono-one': 'Rubik Mono One',
        'inconsolata': 'Inconsolata'
      },
      fontSize:{
        'custom-sm': '0.75rem'
      },
      boxShadow:{
        'white-10': '0 0 10px #ffffff80',
        'white-5': '0 0 5px #ffffff80'
      },
      zIndex:{
        '998': '998',
        '999': '999'
      },
      backgroundImage:{
        'radial-purple': 'radial-gradient(#16124780, transparent)'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
