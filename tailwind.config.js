const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.resolve(__dirname, 'src', 'views', '**', '*.html')],
  // Com themes, conseguimos personalizar e estender o design system do Tailwind, configurando aspectos como cores, espaçamentos, fontes, e outros valores que serão utilizados nas classes utilitárias.
  theme: {
    extend: {
      width:{
        '18': '72px',
        '550': '550px',
        '85': '85%',
        '90': '90%',
      },
      height: {
        '90': '90%',
        'full-90': '90vh'
      },
      maxWidth:{
        '100': '100vw',
        '500': '500px',
        '800': '800px'
      },
      colors:{
        'dark-blue': '#040216',
        'mid-blue': '#121251',
        'mid-blue-transparent': '#1212511f',
        'light-purple-transparent': '#5c69cf38',
        'dark-blue-transparent': '#0c1633ad',
        'light-blue': '#a3adff',
        'original-yellow': 'yellow',
        'light-yellow': '#ffff5f',
        'white-gray': '#d1d1d1',
        'black-transparent': 'rgba(0, 0, 0, 0.85)',
        'black-transparenter': 'rgba(0, 0, 0, 0.5)',
        'error-red': '#d93939'
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
        '1001': '1001',
      },
      backgroundImage:{
        'radial-purple': 'radial-gradient(#16124780, transparent)',
        'radial-blue': 'radial-gradient(transparent 30%, #0c122e)',
      },
      animation:{
        'levitate': 'levitate 1.5s ease-in-out 0s infinite alternate both',
        'resizing': 'resizing 2s linear 0s infinite normal both;',
      },
    },
  },
  plugins: [],
  // Em corePlugins, controlamos quais plugins do núcleo do Tailwind serão ativados ou desativados.
  corePlugins: {
    // No Tailwind CSS, o plugin preflight é responsável por aplicar um conjunto de estilos base resetados e padronizados ao HTML. Ele atua como uma reinicialização de estilos, removendo as diferenças padrão entre navegadores, como margens, espaçamentos e tipografia, e garantindo uma base mais consistente para os estilos que serão definidos.
    preflight: false,
  },
};
