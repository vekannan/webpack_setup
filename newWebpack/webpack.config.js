const path = require("path")
const { config } = require("process")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname,"dist");
const source = path.resolve(__dirname,"src")

const webpackConfig = {
  entry: `${source}/index.js`,
  output: {
    filename: "main.js",
    path: outputPath,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }, 
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /node_module/,
          use: ['babel-loader']
      },
      { 
          test: /\.svg$/, 
          loader: 'svg-inline-loader' 
      },
      {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Venkat webpack experiment',
    filename: "index.html",
    template: 'src/index.html'
  })]
}


module.exports = webpackConfig;