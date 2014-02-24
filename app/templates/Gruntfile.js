// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };
    <% if (splitConfigs){ %>
    config = require('load-grunt-configs')(grunt, config);
    grunt.initConfig(config);
    <% }else{ %>
    // Define the configuration for all the tasks
    grunt.initConfig({
        config : config,
        watch : <%= configs.watch %>,
        connect : <%= configs.connect %>,
        clean : <%= configs.clean %>,
        jshint : <%= configs.jshint %>,<% if (testFramework === 'mocha') { %>
        mocha : <%= configs.mocha %>,<% } else if (testFramework === 'jasmine') { %>
        jasmine : <%= configs.jasmine %>,<% } %><% if (coffee) { %>
        coffee : <%= configs.coffee %>,<% } %><% if (includeSass) { %>
        sass : <%= configs.sass %>,<% } %>
        autoprefixer : <%= configs.autoprefixer %>,
        bowerInstall : <%= configs.bowerInstall %>,
        rev : <%= configs.rev %>,
        useminPrepare : <%= configs.useminPrepare %>,
        usemin : <%= configs.usemin %>,
        imagemin : <%= configs.imagemin %>,
        svgmin: <%= configs.svgmin %>,
        htmlmin: <%= configs.htmlmin %>,
        copy: <%= configs.copy %>,<% if (includeModernizr) { %>
        modernizr: <%= configs.modernizr %>,<% } %>
        concurrent: <%= configs.concurrent %>
    });
    <% } %>
    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',<% if (testFramework === 'mocha') { %>
            'mocha'<% } else if (testFramework === 'jasmine') { %>
            'jasmine'<% } %>
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',<% if (includeModernizr) { %>
        'modernizr',<% } %>
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
