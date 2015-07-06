'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('bootstrap', function () {
  describe('general', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          features: [
            'includeBootstrap'
          ]
        })
        .on('end', done);
    });

    it('adds the bower dependency', function () {
      assert.fileContent('bower.json', 'bootstrap');
    });

    it('doesn\'t explicitly add jquery', function () {
      assert.noFileContent('bower.json', 'jquery');
    });

    it('adds the comment block', function () {
      assert.fileContent('app/index.html', 'scripts/plugins.js')
    });

    it('adds the html description', function () {
      assert.fileContent('app/index.html', 'Bootstrap');
    });
  });

  describe('with sass', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          taskRunner: 'Grunt',
          features: [
            'includeSass',
            'includeBootstrap'
          ]
        })
        .on('end', done);
    });

    it('uses bootstrap sass', function () {
      assert.fileContent('bower.json', '"bootstrap-sass"');
      assert.fileContent('Gruntfile.js', '/bootstrap-sass/');
      assert.fileContent('app/styles/main.scss', '$icon-font-path');
    });
  });

  describe('without sass', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          taskRunner: 'Grunt',
          features: [
            'includeBootstrap'
          ]
        })
        .on('end', done);
    });

    it('uses regular bootstrap', function () {
      assert.fileContent('bower.json', '"bootstrap"');
      assert.fileContent('Gruntfile.js', '/bootstrap/');
    });
  });
});
