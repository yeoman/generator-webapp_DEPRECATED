'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('sass', function () {
  describe('general', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          features: [
            'includeSass'
          ]
        })
        .on('end', done);
    });

    it('uses scss', function () {
      assert.file('app/styles/main.scss');
      assert.noFile('app/styles/main.css');
    });

    it('adds the html description', function () {
      assert.fileContent('app/index.html', 'Sass');
    });
  });

  describe('with gulp', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          taskRunner: 'Gulp',
          features: [
            'includeSass'
          ]
        })
        .on('end', done);
    });

    it('uses the gulp plugin', function () {
      assert.fileContent('package.json', 'gulp-sass');
      assert.fileContent('gulpfile.babel.js', '$.sass');
    });
  });

  describe('with grunt', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          taskRunner: 'Grunt',
          features: [
            'includeSass'
          ]
        })
        .on('end', done);
    });

    it('uses the grunt plugin', function () {
      assert.fileContent('package.json', 'grunt-sass');
      assert.fileContent('Gruntfile.js', 'sass');
    });
  });
});
