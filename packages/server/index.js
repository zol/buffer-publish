const fs = require('fs');
const webpack = require('webpack');
const { send } = require('micro');
const config = require('./webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

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

const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');

const microService = async (req, res) => send(res, 200, html);

module.exports = [hotMiddleware, middleware].reduce((p, c) => c(p), microService);
