// Requires

const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// Let's define tasks

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', () => {
    return gulp.src('src/js/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('dist/js/'));
});



gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });


});

gulp.task('default', ['browserSync'], () => {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/app.js', ['js']);
});
