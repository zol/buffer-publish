const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    '../web/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  // TODO: put this in a dev config
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      react: path.resolve('../../node_modules/react'),
      'react-dom': path.resolve('../../node_modules/react-dom'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        exclude: /node_modules(?!\/@bufferapp\/components)(?!\/@bufferapp\/web-components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
