'use strict';

const fs = require('fs');

module.exports = function(grunt) {
    //load plugins
    [
        'grunt-contrib-watch',
        'grunt-babel',
        'grunt-jsdoc-to-markdown',
        'grunt-markdown-toc',
        'grunt-eslint'
    ].forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
        jsdoc2md: {
            oneOutputFile: {
                src: 'dist/index.js',
                dest: 'docs/API.md'
            }
        },
        babel: {
            dist: {
                files: {
                    "dist/index.js": "src/index.js",
                    "dist/lib/doSomething.js": "src/lib/doSomething.js"
                }
            }
        },
        markdown_toc: {
            src: ['./**.md', './docs/**.md']
        },
        watch: {
            babel: {
                files: ['src/**/*.js'],
                tasks: ['babel']
            },
            toc: {
                files: ["**/*"],
                tasks: ["toc"],
                options: {
                    livereload: true
                }
            }
        },
        eslint: {
            target: ['dist/**/*.js']
        }
    });
};