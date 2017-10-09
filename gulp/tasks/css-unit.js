'use strict';

module.exports = function() {
    $.gulp.task('cssunit', function() {
        return $.gulp.src( './source/styles/**/*.scss')
            .pipe($.gp.cssUnit({
                type: 'px-to-rem',
                rootSize:16,
            }))
            .pipe($.gulp.dest('./build/css/'));
    })
};