const fs = require('fs');
const { send } = require('micro');
const {
  router,
  get,
  post,
} = require('microrouter');

const rpc = require('./rpc');

const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
const index = (req, res) => send(res, 200, html);
const notFound = (req, res) => send(res, 404, 'not found');

module.exports = router(
  get('/', index),
  post('/rpc', rpc),
  get('/*', notFound),
  post('/*', notFound));
