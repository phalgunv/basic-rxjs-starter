const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');  
module.exports = {  
    entry: './src/index.ts',  
    devtool: 'inline-source-map',  
    module: {  
      rules: [  
        {  
          test: /\.tsx?$/,  
          use: 'ts-loader',  
          exclude: /node_modules/  
        },
	{
           test: /\.html$/,
           loader: 'html-loader'
        }
      ]  
    },  
    resolve: {  
      extensions: [ '.tsx', '.ts', '.js' ]  
    },  
    output: {  
      filename: 'index_bundle.js',  
      path: path.resolve(__dirname, './dist'),
    },
    plugins: [new HtmlWebpackPlugin({
	template: 'src/index.html'
    })],

};  
