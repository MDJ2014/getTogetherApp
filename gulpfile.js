'use strict';


var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');



var jsfiles = ['*.js', './api/*.js'];

gulp.task('style', function(){
    return gulp.src(jsfiles)
    .pipe(jshint());
});

gulp.task("concatScripts", function(){
    gulp.src([
        'js/jquery.js', 
        'js/sticky/jquery.sticky.js', 
        'js/main.js'
    ])
});

