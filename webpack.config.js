const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const { glob } = require('glob');

const pathList = glob.sync(path.resolve(__dirname, 'frontend', 'js', '*.js'));

module.exports = {
	mode: 'production',
	entry: pathList,
	output: {
		path: path.join(process.cwd(), 'public', 'assets'),
		filename: 'js/bundle.js',
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerWebpackPlugin()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/styles.css',
		}),
	],
	devtool: 'source-map',
};
