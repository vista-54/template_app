let gulp = require('gulp');
let serve = require('gulp-serve');
let browserSync = require('browser-sync').create();
let watch = require('gulp-watch');

gulp.task('browser-sync', function() {
    gulp.watch("app/*.html").on('change', browserSync.reload);
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});