const { rpc } = require('@bufferapp/micro-rpc');
const loginMethod = require('./login');

module.exports = rpc(
  loginMethod);
