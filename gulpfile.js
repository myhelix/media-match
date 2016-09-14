var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('uglify', function() {
  gulp.src('media.match.js')
    .pipe(uglify())
    .pipe(rename('media.match.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['uglify']);
