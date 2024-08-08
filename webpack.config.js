const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
//const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { optimize } = require('webpack')

module.exports = {
    mode: 'development',
    entry:  [path.resolve(__dirname, 'docs', 'frontend', 'js', 'index_animations.js'),
            path.resolve(__dirname, 'docs', 'frontend', 'js', 'popups.js'),
            path.resolve(__dirname, 'docs', 'frontend', 'js', 'window_animations.js'), 
            path.resolve(__dirname, 'docs', 'frontend', 'js', 'style_imports.js'),
            path.resolve(__dirname, 'docs', 'frontend', 'js', 'header_animation.js')],
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
    optimization:{
        minimize: true,
        minimizer: [new CssMinimizerWebpackPlugin()]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
    ],
    devtool: 'source-map'
}