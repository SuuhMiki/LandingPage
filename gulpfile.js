const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp.src('./src/styles/*.scss') 
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest('./dist/css')); 
}

function images() {
  return gulp.src('./src/images/**/*') 
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images')); 
}

function html() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}

exports.watch = function() {
  gulp.watch('./src/styles/*.scss', styles); 
  gulp.watch('./src/images/**/*', images); 
}

exports.html = html;
exports.default = gulp.parallel(styles, images, html);
