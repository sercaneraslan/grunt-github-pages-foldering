/*
 * grunt-github-pages-foldering
 * https://github.com/sercaneraslan/grunt-github-pages-foldering
 *
 * Copyright (c) 2014 Sercan Eraslan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('github_pages_foldering', 'This plugin is create folders recursively for Github Pages URL paths.', function() {

        var index = this.data.index,
            cwd = this.data.cwd,
            dest;


        // For Each Url
        this.data.urls.forEach(function(url) {

            // Destination creating...
            dest = (cwd ? cwd + '/' : '') + url + '/' + index.split('/').pop();

            // Copying...
            grunt.file.copy(index, dest);

            // Logging...
            grunt.log.writeln(dest + ' is ready.');
        });
    });
};
