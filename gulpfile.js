'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
