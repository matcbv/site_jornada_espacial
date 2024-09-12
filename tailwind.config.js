const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.resolve(__dirname, 'src', 'views', '**', '*.html')],
  theme: {
    extend: {
      width:{
        '90': '90%',
        '100': '100%',
        '100vw': '100vw',
        '550': '550px'
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
        'dark-blue-transparent': '#0c1633ad',
        'light-blue': '#5c69cf',
        'original-yellow': 'yellow',
        'white-gray': '#d1d1d1',
        'black-transparent': 'rgba(0, 0, 0, 0.8)'
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
        '997': '997',
        '998': '998',
        '999': '999',
        '1001': '1001'
      },
      backgroundImage:{
        'radial-purple': 'radial-gradient(#16124780, transparent)',
        'radial-blue': 'radial-gradient(transparent 30%, #0c122e)'
      },
      animation:{
        'levitate': 'levitate 1.5s ease-in-out 0s infinite alternate both'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
