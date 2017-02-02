'use strict';
 
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	eslint = require('gulp-eslint'),
	sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect');

gulp.task('sass', function () {
	return gulp.src('./app/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('compress', function () {
	return gulp.src('./app/js/**/*.js')
		.pipe(sourcemaps.init())
		// .pipe(eslint())
		// .pipe(eslint.format())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/javascript'));
});

gulp.task('html', function () {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('./app/sass/**/*.scss', ['sass']);
    gulp.watch('./app/js/**/*.js', ['compress']);
    gulp.watch('./dist/index.html', ['html']);
});

gulp.task('default',['sass', 'compress', 'html', 'watch', 'connect'], function() {

});