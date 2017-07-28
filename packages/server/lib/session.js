const jwt = require('jsonwebtoken');
const RPCClient = require('micro-rpc-client');

const isDevelopment = process.env.NODE_ENV === 'development';
const COOKIE_NAME = 'session';
  // isDevelopment ?
  // 'buffer-session-2-local' :
  // 'buffer-session-2';
const COOKIE_DOMAIN = isDevelopment ? '.local.buffer.com' : '.buffer.com';
const client = new RPCClient({
  url: `http://${process.env.SESSION_SVC_HOST}`,
});

const session = module.exports;

// returns the encoded session jwt
session.create = ({
  accessToken,
  userId,
}) =>
  client.call('create', {
    session: {
      userId,
      accessToken,
    },
  })
  .then(({ token }) => token);

// Given a jwt return the session object
session.get = sessionCooke =>
  client.call('get', {
    token: sessionCooke,
  })
  .then(({ token }) => jwt.decode(token));

// Given a jwt and the response object, set the session cookie
session.writeCookie = (token, res) => {
  res.cookie(COOKIE_NAME, token, {
    domain: COOKIE_DOMAIN,
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    // NOTE - We should enable httpOnly if we skip manually sending the cookie on the front-end
    // httpOnly: true,
    // secure: true, // TODO :)
  });
};

session.middleware = (req, res, next) => {
  const sessionCookie = req.cookies[COOKIE_NAME];
  if (!sessionCookie) {
    return res.redirect('/login');
  }

  session.get(sessionCookie)
    .then((decodedSession) => {
      req.session = decodedSession;
      next();
    })
    .catch(next);
};
