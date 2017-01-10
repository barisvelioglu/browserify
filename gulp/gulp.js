var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  gulp.src(['../app/lib/*.js', '../app/routes/*.js', '../app/services/*.js', '../app/views/*.js'])
    .pipe(jshint("./.jshintrc"))
    .pipe(jshint.reporter('default'));
});
