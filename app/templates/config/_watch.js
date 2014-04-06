{
            // Watches files for changes and runs tasks based on the changed files
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },<% if (coffee) { %>
            coffee: {
                files: ['<%%= config.app %>/scripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.{coffee,litcoffee,coffee.md}'],
                tasks: ['coffee:test', 'test:watch']
            },<% } else { %>
            js: {
                files: ['<%%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },<% } %>
            gruntfile: {
                files: ['Gruntfile.js']
            },<% if (includeSass) { %>
            sass: {
                files: ['<%%= config.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['sass:server', 'autoprefixer']
            },<% } %>
            styles: {
                files: ['<%%= config.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= config.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',<% if (coffee) { %>
                    '.tmp/scripts/{,*/}*.js',<% } %>
                    '<%%= config.app %>/images/{,*/}*'
                ]
            }
        }