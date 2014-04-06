{
            // Automatically inject Bower components into the HTML file
            app: {
                src: ['<%%= config.app %>/index.html'],
                ignorePath: '<%%= config.app %>/',<% if (includeSass) { %>
                exclude: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js']<% } else { %>
                exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']<% } %>
            }<% if (includeSass) { %>,
            sass: {
                src: ['<%%= config.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: '<%%= config.app %>/bower_components/'
            }<% } %>
        }