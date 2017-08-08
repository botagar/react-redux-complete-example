var webpack = require('webpack')
var path = require('path')

var SRC = path.resolve(__dirname, 'src')
var DIST = path.resolve(__dirname, 'dist')

var config = {
  entry: [
    'react-hot-loader/patch',
    './src/App.jsx'
  ],

  output: {
    path: DIST,
    filename: 'app.bundle.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = config