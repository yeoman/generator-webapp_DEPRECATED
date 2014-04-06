{
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%%= config.dist %>/images'
                }]
            }
        }