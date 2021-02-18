const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isEnvDevelopment = process.env.NODE_ENV === 'development';
const buildFolder = isEnvDevelopment ? 'dev' : 'prod';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/index.js'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, buildFolder)
  },
  watch: isEnvDevelopment,
  devtool: isEnvDevelopment ? 'source-map' : false,
  devServer: {
    contentBase: path.join(__dirname, buildFolder),
    compress: true,
    port: 9000,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [buildFolder]
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};