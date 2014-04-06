{
            // Copies remaining files to places other tasks can use
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%%= config.app %>',
                    dest: '<%%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*'
                    ]
                }<% if (includeBootstrap) { %>, {
                    expand: true,
                    dot: true,<% if (includeSass) { %>
                    cwd: '.',
                    src: ['bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*.*'],<% } else { %>
                    cwd: 'bower_components/bootstrap/dist',
                    src: ['fonts/*.*'],<% } %>
                    dest: '<%%= config.dist %>'
                }<% } %>]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%%= config.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        }