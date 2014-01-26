'use strict';

module.exports = {
    dist: {
        options: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeCommentsFromCDATA: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            useShortDoctype: true
        },
        files: [{
            expand: true,
            cwd: '<%%= yeoman.dist %>',
            src: '{,*/}*.html',
            dest: '<%%= yeoman.dist %>'
        }]
    }
};