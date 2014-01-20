'use strict';
// Generates a custom Modernizr build that includes only the tests you
// reference in your app
module.exports = {
    devFile: '<%%= yeoman.app %>/bower_components/modernizr/modernizr.js',
    outputFile: '<%%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
    files: [
        '<%%= yeoman.dist %>/scripts/{,*/}*.js',
        '<%%= yeoman.dist %>/styles/{,*/}*.css',
        '!<%%= yeoman.dist %>/scripts/vendor/*'
    ],
    uglify: true
};