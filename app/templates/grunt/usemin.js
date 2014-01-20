'use strict';
// Performs rewrites based on rev and the useminPrepare configuration
module.exports = {
    options: {
        assetsDirs: ['<%%= yeoman.dist %>']
    },
    html: ['<%%= yeoman.dist %>/{,*/}*.html'],
    css: ['<%%= yeoman.dist %>/styles/{,*/}*.css']
};