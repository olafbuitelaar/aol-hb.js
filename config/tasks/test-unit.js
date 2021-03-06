const gulp = require('gulp');
const Server = require('karma').Server;
const config = require('../config');

gulp.task('test-unit', ['build'], (done) => {
  new Server({
    configFile: config.karmaConfigFilePath,
    singleRun: true
  }, done).start();
});
