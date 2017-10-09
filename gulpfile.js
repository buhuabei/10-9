const zipjs = require('gulp-uglify');
const gulp = require('gulp');
const zipcss = require('gulp-minify-css');
const connect = require('gulp-connect');
gulp.task('zipjs', function () {
    gulp.src('./ind.js')
        .pipe(zipjs())
        .pipe(gulp.dest('dest'));
});
gulp.task('zipcss', function () {
    gulp.src('./style.css')
        .pipe(zipcss())
        .pipe(gulp.dest('dest'));
});
gulp.task('server', function () {
    connect.server({
        root: './'
    });
});