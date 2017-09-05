const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'enabledApplicationModes',
  'fetch enabled application modes',
  (_, { session }) =>
    rp({
      uri: `${process.env.API_ADDR}/i/info/application_modes.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development'),
      qs: {
        access_token: session.accessToken,
        comprehensive: true,
      },
    })
    .then(result => JSON.parse(result)),
);
