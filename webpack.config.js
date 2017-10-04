'use strict';

const path = require('path')
const webpack = require('webpack')
// var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  // Add source map support
  devtool: "#cheap-source-map",
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "build/bundle.js",
    library: "app",
    libraryTarget: "window"
  },
  resolve: {
    extensions: ['.js', '.marko'],
    modules: ['./', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.marko$/,
        loader: 'marko-loader'
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
