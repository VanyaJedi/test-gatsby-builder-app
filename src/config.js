// using module.exports here so gatsby-config can read it
const keys = require('../env.js');
module.exports = {
  // TODO: uncomment next line and enter your own public API key
   builderAPIKey: keys.builderAPIKey
};
