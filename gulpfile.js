//Import dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var rmr = require('rmr');

//Clean the dist folder
gulp.task('clean', function()
{
  //Clean the dist folder and exit
  return rmr.sync('./dist');
});

//Build the SCSS files
gulp.task('build:scss', function()
{
  //Select all the SCSS files
  gulp.src('scss/**/*.scss')

  //Build the scss files
  .pipe(sass({ includePaths: [ './bower_components/' ] }).on('error', sass.logError))

  //Save on the dist folder
  .pipe(gulp.dest('./dist/'));
});

//Build the javascript files
gulp.task('build:js', function()
{
  //Concatenate all files
  return gulp.src([ 'js/canvas.js', './js/**.js' ])

  //Concatenate all files
  .pipe(concat('jviz-canvas.js'))

  //Save in the dist folder
  .pipe(gulp.dest('./dist/'));
});

//Build wrapper
gulp.task('build', [ 'clean', 'build:scss', 'build:js' ]);
