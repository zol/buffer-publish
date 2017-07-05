const webpack = require('webpack');
const config = require('./webpack.config');

config.devtool = 'cheap-module-eval-source-map';

config.entry.unshift(
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
);

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
);

module.exports = config;
