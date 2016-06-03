(function () {
    'use strict';
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var paths = {
        'styles': {
            'src': 'src/**/*.scss',
            'dest': 'dist/css'
        },
        'scripts': {
            'src': 'dist/js/dev/**/*.js',
            'dest': 'dist/js/min/**/*.js'
        },
        'livereload': ['/**/*.html', 'src/**/*.scss', 'dist/js/devs/**/*.js']
    };
    gulp.task('default', ['sass', 'watch']);
    gulp.task('sass', function () {
        return gulp.src(paths.styles.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
    });
    gulp.task('livereload', function() {
        return gulp.src(paths.livereload);
    });
    gulp.task('watch', function() {
        gulp.watch(paths.styles.src, ['sass']);
        gulp.watch(paths.livereload, ['livereload']);
    });
}());