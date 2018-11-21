var gulp = require('gulp');
var watch = require('gulp-watch');
var browser = require('browser-sync').create();

gulp.task('watch', ['styles', 'scripts'], function(){

    browser.init({
        notify: false,
        server: {
            baseDir: 'dev'
        }
    });

    watch('./dev/index.html', function(){
        browser.reload();
    });

    watch('./dev/temp/styles/**/*.scss', function(){
        gulp.start('cssInject');
    });

    watch('./dev/temp/scripts/**/*.js', function(){
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./dev/assets/styles/styles.css')
        .pipe(browser.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
    browser.reload();
});