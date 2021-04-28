/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

  const webpackConfig = require('../webpack');

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: path.resolve(__dirname, '../dev'),
  }));
  const clientCompiler = compiler.compilers.find((c) => c.name === 'client');
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const serverRenderer = require('../prod/serverRenderer');
  app.use(express.static('prod'));
  app.use(serverRenderer());
}

module.exports = app;
