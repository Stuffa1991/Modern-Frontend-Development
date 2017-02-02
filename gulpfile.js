'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');

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

gulp.task('default',['sass', 'compress'], function() {
    gulp.watch('./app/sass/**/*.scss', ['sass']);
    gulp.watch('./app/js/**/*.js', ['compress']);
});