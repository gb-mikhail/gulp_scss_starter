'use strict';

module.exports = function () {
    $.gulp.task('postcss', function () {
        return $.gulp.src('./source/styles/**/*.scss')
            plugins = [
                autoprefixer({browsers: [ 
                    'last 3 version',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'Opera 12.1'
                ]})
            ];
        return $.gulp.src('./src/*.css')
            .pipe(postcss(plugins))
            .pipe($.gulp.dest('./build/css/'));
    });
};