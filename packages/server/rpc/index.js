const { rpc } = require('@bufferapp/micro-rpc');
const loginMethod = require('./login');
const logoutMethod = require('./logout');
const checkToken = require('./checkToken');

module.exports = checkToken(rpc(
  loginMethod,
  logoutMethod,
));
