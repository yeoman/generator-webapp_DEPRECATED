{
            // The following *-min tasks produce minified files in the dist folder
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%%= config.dist %>/images'
                }]
            }
        }