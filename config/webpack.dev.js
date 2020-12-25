const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
    pathinfo: false,
  },
  cache: {
    type: 'memory',
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    usedExports: true,
  },
  devServer: {
    historyApiFallback: true,
    // publicPath: path.resolve(__dirname, '../dist'),
    contentBase: path.join(__dirname, '../public'),
    open: false,
    hot: true,
    quiet: true,
    port: 8082,
    proxy: {
      '/api': {
        // target: 'http://121.41.16.183:3000/mock/11',
        target: 'http://yunying.kmwl1688.com',
        // secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    // new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
