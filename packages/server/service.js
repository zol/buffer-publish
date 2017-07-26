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
// NOTE: Bugsnag will not notify in local setup with current weback configuration
// https://docs.bugsnag.com/platforms/browsers/faq/#4-code-generated-with-eval-e-g-from-webpack
let bugsnagScript = '';

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'production') {
  staticAssets = JSON.parse(fs.readFileSync(join(__dirname, 'staticAssets.json'), 'utf8'));
  bugsnagScript = `<script
                            src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js"
                            data-apikey="6d235b284e8baf3c8d669a1991844969"></script>`;
}

const html = fs.readFileSync(join(__dirname, 'index.html'), 'utf8')
                .replace('{{{bundle}}}', staticAssets['bundle.js'])
                .replace('{{{bugsnagScript}}}', bugsnagScript);


const index = async (req, res) => send(res, 200, html);
const notFound = (req, res) => send(res, 404, 'not found');

module.exports = router(
  get('/', index),
  post('/rpc', rpc),
  get('/*', notFound),
  post('/*', notFound),
);
