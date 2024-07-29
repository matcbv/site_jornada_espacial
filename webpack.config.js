const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: [path.resolve(__dirname, 'docs', 'frontend', 'js', 'index_animations.js'), path.resolve(__dirname, 'docs', 'frontend', 'js', 'planets_popups.js'), path.resolve(__dirname, 'docs', 'frontend', 'js', 'window_animations.js'), path.resolve(__dirname, 'docs', 'frontend', 'js', 'footer_animations.js')],
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
    ],
    devtool: 'source-map'
}