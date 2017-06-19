const webpack = require('webpack');
const config = require('./webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const service = require('./service');

const compiler = webpack(config);
const middleware = (next) => {
  const mw = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
  });
  return (req, res) => mw(req, res, () => next(req, res));
};

const hotMiddleware = (next) => {
  const mw = webpackHotMiddleware(compiler);
  return (req, res) => mw(req, res, () => next(req, res));
};

module.exports = [hotMiddleware, middleware].reduce((p, c) => c(p), service);
