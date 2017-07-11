const { rpc } = require('@bufferapp/micro-rpc');
const loginMethod = require('./login');
const logoutMethod = require('./logout');

module.exports = rpc(
  loginMethod,
  logoutMethod,
);
