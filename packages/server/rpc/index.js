const { rpc } = require('@bufferapp/micro-rpc');
const checkToken = require('./checkToken');
const profilesMethod = require('./profiles');
const queuedPostsMethod = require('./queuedPosts');
const sentPostsMethod = require('./sentPosts');
const userMethod = require('./user');
const deletePostMethod = require('./deletePost');
const sharePostNowMethod = require('./sharePostNow');
const enabledApplicationModesMethod = require('./enabledApplicationModes');
const apiWrapperMethod = require('./apiWrapper');
const environmentMethod = require('./environment');

module.exports = checkToken(rpc(
  profilesMethod,
  queuedPostsMethod,
  sentPostsMethod,
  userMethod,
  deletePostMethod,
  sharePostNowMethod,
  enabledApplicationModesMethod,
  apiWrapperMethod,
  environmentMethod,
));
