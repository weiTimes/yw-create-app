const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

// const dllReactMainfest = require('./dist/react.mainfest.json');

const APP_DIR = path.resolve(__dirname, '../src');
const OUPUT_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: APP_DIR,
  },
  output: {
    path: OUPUT_DIR,
    // publicPath: './',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    mainFields: ['main'],
    alias: {
      '@/images': path.resolve(__dirname, '../src/assets/images'),
      '@/utils': path.resolve(__dirname, '../src/utils'),
      '@': path.resolve(__dirname, '../src'),
    },
    enforceExtension: false,
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            include: path.resolve(__dirname, '../src'),
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    // new DllReferencePlugin({
    //   // 描述 react 动态链接库的文件内容
    //   manifest: dllReactMainfest,
    // }),
    new ForkTsCheckerWebpackPlugin(),
    new MomentLocalesPlugin(),
    new HtmlWebpackPlugin({
      title: 'yw-create-app',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new WebpackBar(),
  ],
};
