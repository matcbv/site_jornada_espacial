/*
  Como o postcss.config.js está na raíz do projeto, não sera necesário especificar o caminho no webpack.config.js, caso contrário, teríamos que seguir o exemplo abaixo:

    use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: require('./postcss.config.js'), // Usando a configuração externa
      },
    },
  ],
*/
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
