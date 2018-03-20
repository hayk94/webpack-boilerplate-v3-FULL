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
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
    alias: { // Create Aliases
      images: path.resolve(__dirname, 'src/assets/images')
    }
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
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
          fallback: 'style-loader'
        }))
      },
      {
        test: /\.jsx$/, // files ending with js
        exclude: /node-modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?context=src/assets/images/&name=images/[path][name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: '75-90',
                speed: 3
              }
            }
          }
        ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ]
}

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets()
  )
} else {
  module.exports.devtool = 'eval-source-map' // enable devtool for better debugging experience
  module.exports.devServer = {
    contentBase: path.resolve(__dirname, './public'), // a directory or URL to serve HTML from
    historyApiFallback: true, // fallback to /index.html for single page applications
    inline: true, // inline mode, (set false to disable including client scripts (like live reload))
    open: true // open default browser while launching
  }
}
