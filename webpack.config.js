const { resolve } = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: resolve('src', 'main.js'),
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    alias: {
      components: resolve('packages/components'),
    },
  },
};