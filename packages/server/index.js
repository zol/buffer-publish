const http = require('http');
const express = require('express');
const logMiddleware = require('@bufferapp/logger/middleware');
const bugsnag = require('bugsnag');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');
const { join } = require('path');
const shutdownHelper = require('@bufferapp/shutdown-helper');
const { apiError } = require('./middleware');
const session = require('./lib/session');
const controller = require('./lib/controller');
const rpc = require('./rpc');

const app = express();
const server = http.createServer(app);

let staticAssets = {
  'bundle.js': '/static/bundle.js',
};

// NOTE: Bugsnag will not notify in local setup with current weback configuration
// https://docs.bugsnag.com/platforms/browsers/faq/#4-code-generated-with-eval-e-g-from-webpack
let bugsnagScript = '';

const isProduction = process.env.NODE_ENV === 'production';
app.set('isProduction', isProduction);

if (!isProduction) {
  /* eslint-disable global-require */
  const webpack = require('webpack');
  const config = require('./webpack.config.dev');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  /* eslint-enable global-require */

  const compiler = webpack(config);
  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  staticAssets = JSON.parse(fs.readFileSync(join(__dirname, 'staticAssets.json'), 'utf8'));
  if (process.env.BUGSNAG_KEY) {
    bugsnag.register(process.env.BUGSNAG_KEY);
    app.set('bugsnag', bugsnag);
    // NOTE: Bugsnag will not notify in local setup with current weback configuration
    // https://docs.bugsnag.com/platforms/browsers/faq/#4-code-generated-with-eval-e-g-from-webpack
    bugsnagScript = `<script src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js"
                              data-apikey="${process.env.BUGSNAG_KEY}"></script>`;
  }
}

const html = fs.readFileSync(join(__dirname, 'index.html'), 'utf8')
                .replace('{{{bundle}}}', staticAssets['bundle.js'])
                .replace('{{{bugsnagScript}}}', bugsnagScript);

app.use(logMiddleware({ name: 'BufferPublish' }));
app.use(cookieParser());
app.get('/', session.middleware, (req, res) => res.send(html));

app.post('/rpc', (req, res, next) => {
  rpc(req, res)
    // catch any unexpected errors
    .catch(err => next(err));
});

app.use('/login', bodyParser.urlencoded({ extended: true }));
app.get('/login', controller.login);
app.post('/login', controller.handleLogin);
app.post('/signout', controller.signout);

app.get('/health-check', controller.healthCheck);

app.use(apiError);

server.listen(80, () => console.log('listening on port 80'));

shutdownHelper.init({ server });
