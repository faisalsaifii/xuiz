const path = require('path')

module.exports = {
	entry: './index.ts',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'xuiz.js',
		library: 'xuiz',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx'],
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
	},
}
