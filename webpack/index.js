/* eslint-disable @typescript-eslint/no-var-requires */
const clientConfig = require('./webpack.config.client');
const serverConfig = require('./webpack.config.server');

module.exports = [clientConfig, serverConfig];
