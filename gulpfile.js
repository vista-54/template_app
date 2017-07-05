let gulp = require('gulp');
let serve = require('gulp-serve');
let browserSync = require('browser-sync').create();
let watch = require('gulp-watch');
let sass = require('gulp-sass');
let watchSass = require("gulp-watch-sass")

gulp.task('browser-reload',function () {
    browserSync.reload();
});

gulp.task('browser-sync', function () {
    gulp.watch("app/*.html").on('change', browserSync.reload);
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});
gulp.task('sass', function () {
    gulp.src('app/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/content/css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('app/templates/*/*.scss', ['sass', 'browser-reload']);
});
