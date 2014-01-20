'use strict';
// Run some tasks in parallel to speed up build process
module.exports = {
    server: [<% if (includeCompass) { %>
        'compass:server',<% } if (coffee) { %>
        'coffee:dist',<% } %>
        'copy:styles'
    ],
    test: [<% if (coffee) { %>
        'coffee',<% } %>
        'copy:styles'
    ],
    dist: [<% if (coffee) { %>
        'coffee',<% } if (includeCompass) { %>
        'compass',<% } %>
        'copy:styles',
        'imagemin',
        'svgmin'
    ]
};