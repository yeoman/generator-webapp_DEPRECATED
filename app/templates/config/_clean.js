{
            // Empties folders to start fresh
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%%= config.dist %>/*',
                        '!<%%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        }