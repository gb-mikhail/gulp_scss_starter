'use strict';

// Global-variables

global.$ = {
    gulp: require('gulp'),
    del: require('del'),
    uglify: require('gulp-uglify'),
    pump: require('pump'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

// Require-Tasks

require('./gulp/tasks/clean.js')();
require('./gulp/tasks/sass.js')();
require('./gulp/tasks/pug.js')();
require('./gulp/tasks/serve.js')();
require('./gulp/tasks/watch.js')();
require('./gulp/tasks/copy.js')();
require('./gulp/tasks/uglify-js.js')();
require('./gulp/tasks/postcss.js')();

// Main-task

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel (
        'sass',
        'postcss',
        'copy',
        'js',
        'pug'
    ),
    
    $.gulp.parallel (
        'watch',
        'serve'
    )
));
