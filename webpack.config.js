var path = require('path');

module.exports = {
	entry: {
		index:'./app/index.js',
		vendors: './app/vendors.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module:{
		rules:[
			{
				test: /\.css$/, 
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options:{
							module: true
						}
					}
				]
			}
		]
	}
}