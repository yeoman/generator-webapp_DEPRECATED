/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');


describe('Webapp generator test', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.webapp = helpers.createGenerator('webapp:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));
  });

  it('the generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.app = require('../app');
  });

  it('creates expected files', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      'Gruntfile.js',
      'grunt/autoprefixer.js',
      'grunt/bower-install.js',
      'grunt/clean.js',
      'grunt/coffee.js',
      'grunt/compass.js',
      'grunt/concurrent.js',
      'grunt/connect.js',
      'grunt/copy.js',
      'grunt/htmlmin.js',
      'grunt/jshint.js',
      'grunt/mocha.js',
      'grunt/rev.js',
      'grunt/svgmin.js',
      'grunt/usemin.js',
      'grunt/useminPrepare.js',
      'grunt/watch.js',
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/scripts/main.coffee',
      'app/styles/main.scss'
    ];

    var notExpected = [
      'grunt/jasmine.js',
      'grunt/modernizr.js'
    ];

    helpers.mockPrompt(this.webapp, {
      features: ['includeCompass']
    });

    this.webapp.coffee = true;
    this.webapp.options['skip-install'] = true;
    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      helpers.assertNoFile(notExpected);
      done();
    });
  });

  it('creates expected files in non-AMD non-coffee mode', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      'Gruntfile.js',
      'grunt/autoprefixer.js',
      'grunt/bower-install.js',
      'grunt/clean.js',
      'grunt/compass.js',
      'grunt/concurrent.js',
      'grunt/connect.js',
      'grunt/copy.js',
      'grunt/htmlmin.js',
      'grunt/jshint.js',
      'grunt/mocha.js',
      'grunt/rev.js',
      'grunt/svgmin.js',
      'grunt/usemin.js',
      'grunt/useminPrepare.js',
      'grunt/watch.js',
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/scripts/main.js',
      'app/styles/main.scss'
    ];
    var notExpected = [
      'grunt/coffee.js',
      'grunt/jasmine.js',
      'grunt/modernizr.js'
    ];

    helpers.mockPrompt(this.webapp, {
      features: ['includeCompass']
    });

    this.webapp.coffee = false;
    this.webapp.options['skip-install'] = true;
    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      helpers.assertNoFile(notExpected);
      done();
    });
  });

  it('creates expected files in AMD mode', function (done) {
    var expected= [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      'Gruntfile.js',
      'grunt/autoprefixer.js',
      'grunt/bower-install.js',
      'grunt/clean.js',
      'grunt/compass.js',
      'grunt/concurrent.js',
      'grunt/connect.js',
      'grunt/copy.js',
      'grunt/htmlmin.js',
      'grunt/jshint.js',
      'grunt/mocha.js',
      'grunt/rev.js',
      'grunt/svgmin.js',
      'grunt/usemin.js',
      'grunt/useminPrepare.js',
      'grunt/watch.js',
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/scripts/main.js',
      'app/styles/main.scss'
    ];
    var notExpected = [
      'grunt/coffee.js',
      'grunt/jasmine.js',
      'grunt/modernizr.js'
    ];
    
    helpers.mockPrompt(this.webapp, {
      features: ['includeCompass']
    });

    this.webapp.options['skip-install'] = true;
    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      helpers.assertNoFile(notExpected);
      done();
    });
  });
});
