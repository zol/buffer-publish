const fs = require('fs');
const { join } = require('path');
const { send } = require('micro');
const {
  router,
  get,
  post,
} = require('microrouter');

const rpc = require('./rpc');

const staticAssetFile = join(__dirname, 'staticAssets.json');
let isStaticAssetsLoaded = process.env.NODE_ENV === 'development';
let staticAssets = {
  'bundle.js': '/static/bundle.js',
};
const getStaticAssets = () => new Promise((resolve, reject) => {
  if (isStaticAssetsLoaded) {
    return resolve(staticAssets);
  }
  fs.readFile(staticAssetFile, 'utf8', (err, data) => {
    if (err) {
      return reject(err);
    }
    staticAssets = JSON.parse(data);
    isStaticAssetsLoaded = true;
    resolve(staticAssets);
  });
});

const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
const index = async (req, res) => {
  const assets = await getStaticAssets();
  send(res, 200, html.replace('{{{bundle}}}', assets['bundle.js']));
};
const notFound = (req, res) => send(res, 404, 'not found');

module.exports = router(
  get('/', index),
  post('/rpc', rpc),
  get('/*', notFound),
  post('/*', notFound),
);
