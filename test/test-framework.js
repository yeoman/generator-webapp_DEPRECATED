'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('test framework', function () {
  describe('mocha', function () {
    describe('general', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(__dirname, '.tmp'))
          .withOptions({
            'skip-install': true,
            'test-framework': 'mocha'
          })
          .withPrompts({
            features: []
          })
          .on('end', done);
      });

      it('uses the correct eslint environment', function () {
        assert.fileContent('package.json', '"mocha"');
      });
    });

    describe('with grunt', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(__dirname, '.tmp'))
          .withOptions({
            'skip-install': true,
            'test-framework': 'mocha'
          })
          .withPrompts({
            taskRunner: 'Grunt',
            features: []
          })
          .on('end', done);
      });

      it('uses the grunt plugin', function () {
        assert.fileContent('package.json', '"grunt-mocha"');
        assert.fileContent('Gruntfile.js', 'mocha');
      });
    });
  });

  describe('jasmine', function () {
    describe('general', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(__dirname, '.tmp'))
          .withOptions({
            'skip-install': true,
            'test-framework': 'jasmine'
          })
          .withPrompts({
            features: []
          })
          .on('end', done);
      });

      it('uses the correct eslint environment', function () {
        assert.fileContent('package.json', '"jasmine"');
      });
    });

    describe('with grunt', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(__dirname, '.tmp'))
          .withOptions({
            'skip-install': true,
            'test-framework': 'jasmine'
          })
          .withPrompts({
            taskRunner: 'Grunt',
            features: []
          })
          .on('end', done);
      });

      it('uses the grunt plugin', function () {
        assert.fileContent('package.json', '"grunt-contrib-jasmine"');
        assert.fileContent('Gruntfile.js', 'jasmine');
      });
    });
  });
});
