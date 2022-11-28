const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		polyfill: 'babel-polyfill',
		app: './scripts/pages/index.js',
		app2: './scripts/pages/photographer.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '/'),
		},
	},
	experiments: {
		topLevelAwait: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
