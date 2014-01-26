'use strict';
// Copies remaining files to places other tasks can use
module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%%= yeoman.app %>',
            dest: '<%%= yeoman.dist %>',
            src: [
                '*.{ico,png,txt}',
                '.htaccess',
                'images/{,*/}*.webp',
                '{,*/}*.html',
                'styles/fonts/{,*/}*.*'<% if (includeBootstrap) { %>,
                'bower_components/' + (this.includeCompass ? 'sass-' : '') + 'bootstrap/' + (this.includeCompass ? 'fonts/' : 'dist/fonts/') +'*.*'<% } %>
            ]
        }]
    },
    styles: {
        expand: true,
        dot: true,
        cwd: '<%%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
    }
};