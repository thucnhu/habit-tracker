const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
	},
	watch: true,
}
