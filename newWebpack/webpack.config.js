const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname,"dist")
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
  }
}
