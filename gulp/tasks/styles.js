var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssImport = require('postcss-import');

sass.compiler = require('node-sass');

gulp.task('styles', function(){
    return gulp.src('./dev/temp/styles/styles.scss')
        .pipe(sass().on('error', function(errorInfo){
            console.log(errorInfo.toString());
        }))
        .pipe(postcss([cssImport, autoprefixer]))
        .pipe(gulp.dest('./dev/assets/styles'));
});