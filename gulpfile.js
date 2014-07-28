var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    serve = require('gulp-serve');

gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(useref.assets())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(useref.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', serve('dist'));

// Default Task
gulp.task('default', ['html', 'dist']);
