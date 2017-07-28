const rp = require('request-promise');

const BUFFER_API_ADDR = process.env.API_ADDR;

const bufferApi = module.exports;

bufferApi.signin = ({ email, password }) => rp({
  uri: `${BUFFER_API_ADDR}/1/user/signin.json`,
  method: 'POST',
  strictSSL: false, // TODO - In prod this should be secure
  form: {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    email,
    password,
  },
  json: true,
});
