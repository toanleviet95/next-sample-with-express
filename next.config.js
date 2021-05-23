/* eslint-disable */
require('dotenv').config();

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    PORT: process.env.PORT,
    API_ENDPOINT: process.env.API_ENDPOINT,
  }
};
