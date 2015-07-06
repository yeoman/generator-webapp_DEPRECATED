'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('tasks', function () {
  describe('with gulp', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          taskRunner: 'Gulp',
          features: []
        })
        .on('end', done);
    });

    it('creates the configuration file', function () {
      assert.file('gulpfile.babel.js');
    });

    it('registers necessary tasks', function () {
      [
        'styles',
        'lint',
        'lint:test',
        'html',
        'images',
        'fonts',
        'extras',
        'clean',
        'serve',
        'serve:dist',
        'serve:test',
        'wiredep',
        'build',
        'default'
      ].forEach(function (task) {
        assert.fileContent('gulpfile.babel.js', 'gulp.task(\'' + task);
      });
    });
  });

  describe('with grunt', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          taskRunner: 'Grunt',
          features: []
        })
        .on('end', done);
    });

    it('creates the configuration file', function () {
      assert.file('Gruntfile.js');
    });

    it('registers necessary tasks', function () {
      [
        'serve',
        'test',
        'build',
        'default'
      ].forEach(function (task) {
        assert.fileContent('Gruntfile.js', 'grunt.registerTask(\'' + task);
      });
    });
  });
});
