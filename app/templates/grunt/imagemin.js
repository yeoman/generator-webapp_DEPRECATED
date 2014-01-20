'use strict';
// The following *-min tasks produce minified files in the dist folder
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%%= yeoman.app %>/images',
            src: '{,*/}*.{gif,jpeg,jpg,png}',
            dest: '<%%= yeoman.dist %>/images'
        }]
    }
};