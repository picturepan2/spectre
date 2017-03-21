var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 4 versions"] });

gulp.task('watch', function() {
    gulp.watch('./**/*.less', ['build']);
    gulp.watch('./**/*.less', ['docs']);
});

gulp.task('build', function() {
    gulp.src('./*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(csscomb())
        .pipe(gulp.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('docs', function() {
    gulp.src(['./docs/src/*.less', './*.less'])
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(csscomb())
        .pipe(gulp.dest('./docs/css'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./docs/css'))
});

gulp.task('default', ['build']);
