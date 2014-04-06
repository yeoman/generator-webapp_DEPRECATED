{
            // Run some tasks in parallel to speed up build process
            server: [<% if (includeSass) { %>
                'sass:server',<% } if (coffee) {  %>
                'coffee:dist',<% } %>
                'copy:styles'
            ],
            test: [<% if (coffee) { %>
                'coffee',<% } %>
                'copy:styles'
            ],
            dist: [<% if (coffee) { %>
                'coffee',<% } if (includeSass) { %>
                'sass',<% } %>
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }