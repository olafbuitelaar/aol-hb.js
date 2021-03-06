const config = require('./config');
const path = require('path');

module.exports = {
  output: {
    filename: config.outputFileName
  },

  resolve: {
    root: [path.resolve('./')],
    modulesDirectories: ['node_modules', 'src', 'config']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve('./src'),
          path.resolve('./tests')
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
