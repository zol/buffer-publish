const fs = require('fs');
const { join } = require('path');
const { send } = require('micro');
const {
  router,
  get,
  post,
} = require('microrouter');

const rpc = require('./rpc');

let bundleScript = '/static/bundle.js';
if (process.env.NODE_ENV !== 'development') {
  const staticAssetFile = join(__dirname, 'staticAssets.json');
  const staticAssets = JSON.parse(fs.readFileSync(staticAssetFile, 'utf8'));
  bundleScript = staticAssets['bundle.js'];
}
const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
const index = (req, res) => {
  send(res, 200, html.replace('{{{bundle}}}', bundleScript));
};
const notFound = (req, res) => send(res, 404, 'not found');

module.exports = router(
  get('/', index),
  post('/rpc', rpc),
  get('/*', notFound),
  post('/*', notFound),
);
