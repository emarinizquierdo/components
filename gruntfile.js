module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }],
                        ["riotify"],
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./dist/module.js": ["./modules/app.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./modules/*.js", "./modules/*.tag", "index.html"],
                tasks: ["browserify"],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                }
            }
        },
        'http-server': {

            'dev': {

                // the server root directory 
                root: '.',

                // the server port 
                // can also be written as a function, e.g. 
                // port: function() { return 8282; } 
                port: 3000,

                // the host ip address 
                // If specified to, for example, "127.0.0.1" the server will 
                // only be available on that ip. 
                // Specify "0.0.0.0" to be available everywhere 
                host: "0.0.0.0",

                ///cache: 60000,
                showDir: true,
                autoIndex: true,

                // server default file extension 
                ext: "html",

                // run in parallel with other tasks 
                runInBackground: true,

                // specify a logger function. By default the requests are 
                // sent to stdout. 
                logFn: function(req, res, error) {},

                // Proxies all requests which can't be resolved locally to the given url 
                // Note this this will disable 'showDir' 
                ///proxy: "http://someurl.com",

                /// Use 'https: true' for default module SSL configuration 
                /// (default state is disabled) 
                ///https: {
                ///cert: "cert.pem",
                ///key : "key.pem"
                ///}

            }

        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask("default", ["http-server", "watch"]);
    grunt.registerTask("build", ["browserify"]);
};
