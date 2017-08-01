const { join } = require('path');
const RPCClient = require('micro-rpc-client');
const { isShutingDown } = require('@bufferapp/shutdown-helper');
const bufferApi = require('./bufferApi');
const session = require('./session');

const controller = module.exports;

controller.login = (req, res) => {
  res.sendFile(join(__dirname, '../views/login.html'));
};

controller.handleLogin = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.send('missing required fields');
  }

  bufferApi.signin({
    email: req.body.email,
    password: req.body.password,
  }) // response is { token, user }
    .then((apiRes) => { console.log(apiRes.token, apiRes.user._id); return apiRes; }) // debug line
    .then(response => session.create({ accessToken: response.token }))
    .then((jwt) => {
      session.writeCookie(jwt, res);
      res.redirect('/');
    })
    .catch(next);
};

controller.signout = (req, res) => {
  res.send('signout page');
};

controller.healthCheck = (req, res) => {
  if (isShutingDown()) {
    return res.status(500).json({ status: 'shutting down' });
  }
  const sessionClient = new RPCClient({
    url: `http://${process.env.SESSION_SVC_HOST}`,
  });
  sessionClient.listMethods()
    .then(() => res.status(200).json({ status: 'awesome' }))
    .catch(() => res.status(500).json({ status: 'cannot connect to session service' }));
};
