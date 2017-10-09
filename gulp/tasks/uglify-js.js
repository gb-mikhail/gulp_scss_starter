'use strict';

module.exports = function () {
    $.gulp.task('js', function (cb) {
        $.pump([
            $.gulp.src('source/js/**/*.js'),
            $.uglify(),
            $.gulp.dest('build/js/')
        ],
            cb
        );
    });
};