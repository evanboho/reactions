const publicPath = 'http://localhost:3001/'
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    './modules/client'
  ],
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  module: {
    loaders: [{
      test: /.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }],
  },
  devServer: {
    contentBase: '/assets/',
    publicPath: publicPath,
    port: 3001,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}
