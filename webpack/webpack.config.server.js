/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          'css-loader/locals',
        ],
      },
    ],
  },
  plugins: [
    new LoadablePlugin(),
  ],
});
