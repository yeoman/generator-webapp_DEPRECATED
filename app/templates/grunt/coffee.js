'use strict';
// Compiles CoffeeScript to JavaScript
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%%= yeoman.app %>/scripts',
            src: '{,*/}*.{coffee,litcoffee,coffee.md}',
            dest: '.tmp/scripts',
            ext: '.js'
        }]
    },
    test: {
        files: [{
            expand: true,
            cwd: 'test/spec',
            src: '{,*/}*.{coffee,litcoffee,coffee.md}',
            dest: '.tmp/spec',
            ext: '.js'
        }]
    }
};