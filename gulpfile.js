"use strict";

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('hello', function() {
  console.log('hello');
});

gulp.task('sass', function() {
  gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('build'));
});

// Inject the html if it changes
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
  gulp.src('src/*/*.js')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'build'
    }
  });
});

gulp.task('watchFiles', function() {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/*/*.js', ['js']);
  gulp.watch('src/*/*.scss', ['sass']);
});

gulp.task('clean', function() {
  del(['build/js/*']);
  del(['build/css/*']);
  del('build/*.html');
});

gulp.task('default', ['clean', 'sass', 'js', 'html', 'browserSync', 'watchFiles']);