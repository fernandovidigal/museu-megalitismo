var gulp = require('gulp');
var browser = require('browser-sync').create();
var del = require('del');
var imagemin = require('gulp-imagemin');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

gulp.task('previewApp', function(){
    browser.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('resetAppFolder', function(){
    return del('./app');
});

gulp.task('copyGeneralFiles', ['resetAppFolder'], function(){
    var pathsToCopy = [
        './dev/**/*',
        '!./dev/index.html',
        '!./dev/assets/images/**',
        '!./dev/assets/styles/**',
        '!./dev/assets/scripts/**',
        '!./dev/temp',
        '!./dev/temp/**',
    ];
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./app'));
});

gulp.task('optimizeImages', ['resetAppFolder'], function(){
    return gulp.src('./dev/assets/images/**/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./app/assets/images'));
});

gulp.task('useminTrigger', ['resetAppFolder'], function(){
    gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function(){
    return gulp.src('./dev/index.html')
        .pipe(usemin({
            css: [function(){ return rev()}, function(){ return cssnano()}],
            js: [function(){ return rev()}, function(){ return uglify()}],
        }))
        .pipe(gulp.dest('./app'));
});

gulp.task('build', ['resetAppFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);