const path = require('path');
const webpack = require('webpack');
// const { FederatedTypesPlugin } = require('@module-federation/typescript');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = require('./webpack/devServer');
const rules = require('./webpack/rules');
// const federationConfig = require('./webpack/mfPlugin');

const buildDate = new Date().toLocaleString();
const isDevelopment = process.env.NODE_ENV === 'development';
const DIST_ROOT_PATH = path.join(__dirname, './', 'dist');

module.exports = (env, argv) => {
  return {
    devtool: isDevelopment ? 'eval-source-map' : 'hidden-source-map',
    entry: './src/index.tsx',
    mode: process.env.NODE_ENV || 'development',
    performance: { maxAssetSize: 1000000 },
    devServer: devServer,
    output: {
      publicPath: 'auto'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'package')
      }
    },
    module: {
      rules: rules
    },
    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
      // new FederatedTypesPlugin({
      //   federationConfig,
      //   disableDownloadingRemoteTypes: process.env.NODE_ENV !== 'development'
      // }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        icon: './public/assets/icon/iconfont.css'
      }),
      new ForkTsCheckerWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join('./', 'public', 'assets'),
            to: path.join(DIST_ROOT_PATH, 'assets')
          }
        ]
      }),
      new CssMinimizerWebpackPlugin(),
      new MiniCssExtractPlugin()
    ]
  };
};
