const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

// MC expects enabledApplicationModes to be array of strings
const getEnabledApplicationModes = (result) => {
  const applicationModes = result.application_modes;
  if (!applicationModes) return [];

  const enabledApplicationModes = [];
  Object.keys(applicationModes).forEach((mode) => {
    if (applicationModes[mode].state === 'enabled') {
      enabledApplicationModes.push(mode);
    }
  });
  return enabledApplicationModes;
};

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
      },
    })
    .then(result => JSON.parse(result))
    .then(parsedResult => ({
      enabledApplicationModes: getEnabledApplicationModes(parsedResult),
    })),
);
