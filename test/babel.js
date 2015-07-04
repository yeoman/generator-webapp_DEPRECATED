'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('babel', function () {
  describe('on', function () {
    describe('with gulp', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(__dirname, '.tmp'))
          .withOptions({'skip-install': true, babel: true})
          .withPrompts({
            taskRunner: 'Gulp',
            features: []
          })
          .on('end', done);
      });

      it('uses the gulp plugin', function () {
        assert.fileContent('package.json', 'gulp-babel');
        assert.fileContent('gulpfile.babel.js', 'babel');
      });
    });

    describe('with grunt', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(__dirname, '.tmp'))
          .withOptions({'skip-install': true, babel: true})
          .withPrompts({
            taskRunner: 'Grunt',
            features: []
          })
          .on('end', done);
      });

      it('uses the grunt plugin', function () {
        assert.fileContent('package.json', 'grunt-babel');
        assert.fileContent('Gruntfile.js', 'babel');
      });
    });
  });

  describe('off', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true, babel: false})
        .withPrompts({
          features: []
        })
        .on('end', done);
    });

    it('doesn\'t use any plugins', function () {
      assert.noFileContent('package.json', 'babel');
    });
  });
});
