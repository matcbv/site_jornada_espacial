const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry:  [path.resolve(__dirname, 'docs', 'frontend', 'js', 'index_animations.js'),
            path.resolve(__dirname, 'docs', 'frontend', 'js', 'popups.js'),
            path.resolve(__dirname, 'docs', 'frontend', 'js', 'window_animations.js'), 
            path.resolve(__dirname, 'docs', 'frontend', 'js', 'style_imports.js')],
    output: {
        path: path.resolve(__dirname, 'docs', 'public', 'assets'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './docs/src/views/index.html',
        //     filename: '../../index.html',
        //     inject: 'body'
        //   }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
    ],
    devtool: 'source-map'
}