/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');

const isDevelopment = process.env.NODE_ENV === 'development';
// const buildFolder = isDevelopment ? 'dev' : 'prod';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDevelopment && 'webpack-hot-middleware/client',
    './src/client.tsx',
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    // !isDevelopment && new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: [buildFolder],
    // }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ].filter(Boolean),
});
