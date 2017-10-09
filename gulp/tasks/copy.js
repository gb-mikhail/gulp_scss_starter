'use strict';

module.exports = function () {
    $.gulp.task('copy', function () {
        return $.gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe($.gulp.dest('build/libs/jquery/')),

        $.gulp.src('node_modules/slick-carousel/slick/slick.min.js')
        .pipe($.gulp.dest('build/libs/slick/')),
        
        $.gulp.src('node_modules/normalize.css/normalize.css')
        .pipe($.gulp.dest('build/css/')),

        $.gulp.src('source/fonts/**.*')
        .pipe($.gulp.dest('build/fonts/')),

        $.gulp.src('source/img/**.*')
        .pipe($.gulp.dest('build/img/'))
    });
};