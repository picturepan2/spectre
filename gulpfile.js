const gulp = require("gulp");
const { parallel } = require("gulp");
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');

function build() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
}

function docs_css() {
  return gulp
    .src(['./src/*.scss', './docs/src/scss/*.scss'])
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./docs/dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./docs/dist'));
}

function docs_pug() {
  return gulp
    .src('docs/src/**/!(_)*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
}

function watch() {
  gulp.watch('./**/*.scss', parallel(build, docs_css));
  gulp.watch('./**/*.pug', docs_pug);
}

exports.watch = watch;
exports.build = build;
exports.docs = parallel(docs_pug, docs_css);
exports.default = build;
