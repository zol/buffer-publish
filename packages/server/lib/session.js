const jwt = require('jsonwebtoken');
const RPCClient = require('micro-rpc-client');

const COOKIE_NAME = 'session';
  // isDevelopment ?
  // 'buffer-session-2-local' :
  // 'buffer-session-2';
const client = new RPCClient({
  url: `http://${process.env.SESSION_SVC_HOST}`,
});

exports = module.exports;

// Given a jwt return the session object
exports.get = sessionCookie =>
  client.call('get', { token: sessionCookie })
    .then(({ token }) => jwt.decode(token));

exports.getCookie = req => req.cookies[COOKIE_NAME];

exports.middleware = (req, res, next) => {
  const sessionCookie = exports.getCookie(req);
  if (!sessionCookie) {
    return next();
  }

  exports.get(sessionCookie)
    .then((decodedSession) => {
      req.session = decodedSession;
      next();
    })
    .catch(next);
};
