const webpack = require('webpack')

const config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/env', 'stage-2']
        }
      }

    ]
  },

  plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
    ],
}

module.exports = config