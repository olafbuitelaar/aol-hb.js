const webpackConfig = require('./webpack.config');
const environmentResolver = require('./helpers/environmentConfigResolver');

webpackConfig.module.postLoaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules)|(tests)|(build)/,
    loader: 'istanbul-instrumenter'
  }
];

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai-sinon'],

    files: [
      'src/helpers/polyfills.js',
      'tests/unit/*Test.js'
    ],

    browsers: environmentResolver.resolveKarmaBrowsers(),

    colors: true,

    port: 9876,

    reporters: ['progress', 'coverage', 'mocha'],

    // Add webpack as preprocessor
    preprocessors: {
      'tests/unit/*Test.js': ['webpack'],
      'src/**/*.js': ['coverage']
    },

    customLaunchers: {
      CHROME_TRAVIS_CI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    webpack: webpackConfig,

    mochaReporter: {
      showDiff: true
    }
  });
};
