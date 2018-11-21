var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
    return gulp.src(['./dev/temp/styles/**/*.scss', './dev/temp/scripts/**/*.js'])
        .pipe(modernizr({
            'options': ['setClasses']
        }))
        .pipe(gulp.dest('./dev/assets/scripts/'));
});