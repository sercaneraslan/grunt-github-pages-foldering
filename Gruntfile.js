/*
 * grunt-github-pages-foldering
 * https://github.com/sercaneraslan/grunt-github-pages-foldering
 *
 * Copyright (c) 2014 Sercan Eraslan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        github_pages_foldering: {
            default: {
                urls: [
                    'contact',
                    'about',
                    'blog',
                    'blog/grunt-is-really-good',
                    'blog/angular-is-so-sexy'
                ],
                index: 'index.html',
                cwd: 'build'
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['github_pages_foldering']);
};
