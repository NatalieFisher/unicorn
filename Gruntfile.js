module.exports = function( grunt ) {

    'use strict';

    grunt.initConfig({

        // Compile .scss/.sass to .css using Compass
        compass: {
            dist: {
                options: {
                    cssDir: 'dist/css',
                    sassDir: 'build/sass',
                    sourcemap: true,
                    outputStyle: 'compressed',
                    force: true
                }
            }
        },

        // Compile HTML
        bake: {
            build: {
                files: {
                    // Where you want HTML files to be built

                    'dist/index.html' : 'build/html/index.html',
                }
            },
        },

        // Compile JS
        uglify: {
            options: {
                sourceMap: true
            },
            build: {
                files: {
                    'dist/js/main.min.js': [
                        'build/js/jquery.min.js',
                        'build/js/functions.js'
                    ],
                }
            }
        },

        // Compile SVGs
        svgstore: {
            default : {
                files: {
                    'build/img/svgcompile.svg': ['build/img/svgs/*.svg'],
                },
            },
        },

        // Sync images to dist
        sync: {
            main: {
                files: [{
                    cwd: 'build/img',
                    src: ['**'],
                    dest: 'dist/img'
                },],
                updateAndDelete: true
            }
        },

        // Watch for file changes
        watch: {
            compass: {
                files: [
                    'build/sass/*.{scss,sass}',
                    'build/sass/**/**.{scss,sass}'
                ],
                tasks:['compass']
            },
            svgstore: {
                files: [
                    'build/img/svgs/*.svg'
                ],
                tasks:['svgstore']
            },
            sync: {
                files: [
                    'build/img/*'
                ],
                tasks:['sync']
            },
            bake: {
                files: [
                    'build/html/**'
                ],
                tasks: ['bake:build']
            },
            uglify: {
                files: [
                    'build/js/*.js',
                    '!build/js/main.min.js'
                ],
                tasks: ['uglify']
            }
        },

        // Reload browser
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'dist/*.html',
                        'dist/css/{,*/}*.css',
                        'dist/js/main.min.js',
                        'dist/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                    ]
                },
                options: {
                    server: 'dist',
                    open: true,
                    watchTask: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['sync','compass','svgstore','bake:build','uglify','browserSync','watch']);
};
