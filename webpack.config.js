var path = require('path');
var commonConfig = require('./webpack-common.config.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: 'my-component',
    libraryTarget: 'umd',
  },
  module: commonConfig.module,
};