const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	return {
		plugins: [
			new MiniCssExtractPlugin({
				filename: env.development ? '[name].css' : '[name].[contenthash].css',
				chunkFilename: env.development ? '[id].css' : '[id].[contenthash].css',
			}),
			new webpack.HotModuleReplacementPlugin(),
		],
		entry: path.resolve(__dirname, 'src', 'index.js'),
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'bundle.js',
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'public'),
			open: true,
			clientLogLevel: 'silent',
			port: 9000,
			historyApiFallback: true,
			hot: true,
		},
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
					include: path.resolve(__dirname, 'src'),
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									[
										'@babel/preset-env',
										{
											targets: 'defaults',
										},
									],
									'@babel/preset-react',
								],
							},
						},
					],
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'resolve-url-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
			],
		},
	};
};
