var gulp = require('gulp'),
  compass = require('gulp-compass'),
  rev = require('gulp-rev'),
  revCollector = require('gulp-rev-collector'),
  gulpSequence = require('gulp-sequence'),
  del = require('del');

gulp.task('compass', function () {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './src/assets/css',
      sass: './src/assets/scss'
    }))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('rev', function () {
  return gulp.src(['./dist/Content/**/*.css', './dist/Content/**/*.js', '!./dist/Content/assets/**/*.*'])
    .pipe(rev())
    .pipe(gulp.dest('./dist/Content'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/Content'));
});

gulp.task('revCollector', function () {
  return gulp.src(['./dist/Content/**/*.json', './dist/Content/**/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('./dist/Content'));
});

gulp.task('cleanOriginal', function () {
  return del(['./dist/Content/**/*.js', './dist/Content/**/*.css', '!./dist/Content/assets/**/*.*', '!./dist/Content/**/*-*.js', '!./dist/Content/**/*-*.css' , '!./dist/Content/fonts/**/*.*']);
});

gulp.task('version', gulpSequence('rev', 'revCollector', 'cleanOriginal'));
