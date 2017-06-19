const fs = require('fs');
const { send } = require('micro');

const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');

module.exports = async (req, res) => send(res, 200, html);
