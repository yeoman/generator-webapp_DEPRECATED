{
            // Compiles Sass to CSS and generates necessary files if requested
            options: {<% if (includeLibSass) { %>
                includePaths: [
                    'bower_components'
                ]<% } if (includeRubySass) { %>
                loadPath: [
                    'bower_components'
                ]<% } %>
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.app %>/styles',
                    src: ['*.scss'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.app %>/styles',
                    src: ['*.scss'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        }