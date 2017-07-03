const micro = require('micro');
const service = require('./service');

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const webpack = require('webpack');
  const config = require('./webpack.config.dev');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  /* eslint-disable */

  const compiler = webpack(config);
  const wpMiddleware = (next) => {
    const mw = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
    });
    return (req, res) => mw(req, res, () => next(req, res));
  };

  const wpHotMiddleware = (next) => {
    const mw = webpackHotMiddleware(compiler);
    return (req, res) => mw(req, res, () => next(req, res));
  };

  middleware.push(wpHotMiddleware, wpMiddleware);
}


const server = micro(middleware.reduce((p, c) => c(p), service));

server.listen(80);
