const webpack = require('webpack')
const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with js
        exclude: /node-modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'), // a directory or URL to serve HTML from
    historyApiFallback: true, //fallback to /index.html for single page applications
    inline: true, // inline mode, (set false to disable including client scripts (like live reload))
    open: true // open default browser while launching
  },
  devtool: 'eval-source-map' // enable devtool for bettet debugging experience
}

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets()
  )
}
