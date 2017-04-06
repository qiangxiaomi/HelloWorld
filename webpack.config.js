const path = require('path');
const webpack = require('webpack');

module.exports = {
	
	context: path.resolve(__dirname,'./src'),
	entry: {
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		 main: './main.js',
	},
	output:{
		path: path.resolve(__dirname,'./build'),
		filename: 'bundle.js',
	}
};