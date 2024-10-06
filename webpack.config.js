const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPLugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    entry:  [path.resolve(__dirname, 'frontend', 'js', 'index_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'header_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'general_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'galaxies_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'popups.js'),
            path.resolve(__dirname, 'frontend', 'js', 'window_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'footer_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'forms_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'profile_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'edit_profile_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'modal_animations.js'),
            path.resolve(__dirname, 'frontend', 'js', 'style_imports.js')],
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name][ext]',
                }
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer: [new CssMinimizerWebpackPlugin(), new TerserPLugin({terserOptions: {format: {comments: false}}})]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
    ],
    devtool: 'source-map'
}
