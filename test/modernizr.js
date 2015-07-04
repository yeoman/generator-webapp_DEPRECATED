'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('modernizr', function () {
  describe('general', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withOptions({'skip-install': true})
        .withPrompts({
          features: [
            'includeModernizr'
          ]
        })
        .on('end', done);
    });

    it('adds the bower dependency', function () {
      assert.fileContent('bower.json', 'modernizr');
    });

    it('adds the html description', function () {
      assert.fileContent('app/index.html', 'Modernizr');
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
            'includeModernizr'
          ]
        })
        .on('end', done);
    });

    it('uses the grunt plugin', function () {
      assert.fileContent('package.json', 'modernizr');
      assert.fileContent('Gruntfile.js', 'modernizr');
    });
  });
});
