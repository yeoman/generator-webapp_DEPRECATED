{
            // Reads HTML for usemin blocks to enable smart builds that automatically
            // concat, minify and revision files. Creates configurations in memory so
            // additional tasks can operate on them
            options: {
                dest: '<%%= config.dist %>'
            },
            html: '<%%= config.app %>/index.html'
        }