const { rpc } = require('@bufferapp/micro-rpc');
const checkToken = require('./checkToken');
const loginMethod = require('./login');
const logoutMethod = require('./logout');
const profilesMethod = require('./profiles');
const queuedPostsMethod = require('./queuedPosts');
const sentPostsMethod = require('./sentPosts');
const profileSettingsMethod = require('./profileSettings');

module.exports = checkToken(rpc(
  loginMethod,
  logoutMethod,
  profilesMethod,
  queuedPostsMethod,
  sentPostsMethod,
  profileSettingsMethod,
));
