const path = require('path');

module.exports = {
	entry: {
		app: './assets/js/main.js'
	},
	output: {
		path: path.join(__dirname, 'public/js'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				loader: 'style!css',
				test: /\.css$/
			},
			{
				loader: 'babel',
				exclude: /node_modules/,
				test: /\.js$/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.css']
	}
};

