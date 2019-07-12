var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('auto', () =>
    gulp.src('template/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('default', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./**/**/*.css").on('change', browserSync.reload);
    gulp.watch("./**/**/*.js").on('change', browserSync.reload);
});