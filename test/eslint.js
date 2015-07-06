'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('eslint', function () {
  describe('general', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          features: []
        })
        .on('end', done);
    });

    it('adds basic configuration', function () {
      assert.fileContent('package.json', 'eslintConfig');
    });

    it('uses the es6 environment', function () {
      assert.fileContent('package.json', 'es6');
    });
  });

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

    it('uses the gulp plugin', function () {
      assert.fileContent('package.json', 'gulp-eslint');
      assert.fileContent('gulpfile.babel.js', '$.eslint');
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

    it('uses the grunt plugin', function () {
      assert.fileContent('package.json', 'grunt-eslint');
      assert.fileContent('Gruntfile.js', 'eslint');
    });
  });
});
