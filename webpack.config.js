const webpack = require('webpack')
const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin');

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'dist')

var reactConfig = {
  entry: [
    'react-hot-loader/patch',
    './src/main.js'
  ],

  output: {
    path: DIST,
    filename: 'app.bundle.js'
  },

  devServer: {
    inline: true, // Hot reloading
    port: 8081, // Port which the Dev Server will listen on
    contentBase: './', // Where the entry to your app is
    open: true // Open site in new browser tab upon command execution
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
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
    new webpack.NamedModulesPlugin(),
    new WebpackShellPlugin({
      onBuildStart: ['echo reactConfig Starting'],
      onBuildEnd: ['echo reactConfig Ending']
    })
  ]
}

var bffConfig = {
  target: 'node',

  node: {
    __dirname: false,
  },

  entry: [
    './src/server.js'
  ],

  output: {
    path: DIST,
    filename: 'server.bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = [reactConfig, bffConfig]