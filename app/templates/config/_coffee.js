            // Compiles CoffeeScript to JavaScript
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.app %>/scripts',
                    src: '{,*/}*.{coffee,litcoffee,coffee.md}',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.{coffee,litcoffee,coffee.md}',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }