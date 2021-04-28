/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const buildFolder = isEnvDevelopment ? '../dev' : '../prod';

console.log(path.resolve(__dirname, buildFolder));
module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, buildFolder),
    publicPath: '/',
  },
  watch: isEnvDevelopment,
  devtool: isEnvDevelopment ? 'source-map' : false,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new RobotstxtPlugin({
      filePath: './robots.txt',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
};
