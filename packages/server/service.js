const fs = require('fs');
const { join } = require('path');
const { send } = require('micro');
const {
  router,
  get,
  post,
} = require('microrouter');

const rpc = require('./rpc');

let staticAssets = {
  'bundle.js': '/static/bundle.js',
};
/* istanbul ignore if  */
if (process.env.NODE_ENV === 'production') {
  staticAssets = JSON.parse(fs.readFileSync(join(__dirname, 'staticAssets.json'), 'utf8'));
}
const html = fs.readFileSync(join(__dirname, 'index.html'), 'utf8')
                .replace('{{{bundle}}}', staticAssets['bundle.js']);

const index = async (req, res) => send(res, 200, html);
const notFound = (req, res) => send(res, 404, 'not found');

module.exports = router(
  get('/', index),
  post('/rpc', rpc),
  get('/*', notFound),
  post('/*', notFound),
);
