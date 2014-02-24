{
            // Make sure code styles are up to par and there are no obvious mistakes
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%%= config.app %>/scripts/{,*/}*.js',
                '!<%%= config.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        }