var gulp = require('gulp');
var watch = require('gulp-watch');
var browser = require('browser-sync').create();

gulp.task('watch', gulp.series(gulp.parallel('styles', 'scripts'), function(){

    browser.init({
        notify: false,
        server: {
            baseDir: 'dev'
        }
    });

    watch('./dev/index.html', function(){
        browser.reload();
    });

    //watch('./dev/temp/styles/**/*.scss', function(){
      //  gulp.start('cssInject');
    //});

    //watch('./dev/temp/scripts/**/*.js', function(){
      //  gulp.start('scriptsRefresh');
    //});

    watch('./dev/temp/styles/**/*.scss', gulp.series('cssInject'));

    watch('./dev/temp/scripts/**/*.js', gulp.series('scriptsRefresh'));
}));

gulp.task('cssInject', gulp.series('styles', function(){
    return gulp.src('./dev/assets/styles/styles.css')
        .pipe(browser.stream());
}));

gulp.task('scriptsRefresh', gulp.series('scripts', function(){
    browser.reload();
}));