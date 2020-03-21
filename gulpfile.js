const gulp              = require('gulp');
const sass              = require('gulp-sass');
const sourcemaps        = require('gulp-sourcemaps');
const concat            = require('gulp-concat');
const autoprefixer      = require('gulp-autoprefixer');
const cleanCSS          = require('gulp-clean-css');
const uglify            = require('gulp-uglify');
const browserSync       = require('browser-sync').create();
const pug               = require('gulp-pug');

const sassFiles = [
    './src/sass/styles.sass'
]


const jsFiles = [
    './src/js/main.js'
] 

const imgFiles = [
    './src/img/**'
]

// Минификация стилей

function styles() {
    return gulp.src(sassFiles)
        .pipe(concat('style.sass'))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/css'))

        .pipe(browserSync.stream());
};

// Минификация JS

function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))

        .pipe(uglify())

        .pipe(gulp.dest('./build/js'))

        .pipe(browserSync.stream());
};

// Обновление страницы при изменении

function watch() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
    gulp.watch('./src/sass/**/*.sass', styles, browserSync.reload)
    gulp.watch('./src/js/**/*.js', scripts, browserSync.reload)
    gulp.watch('./build/index.html').on('change', browserSync.reload)
    gulp.watch('./src/pug/**/*.pug', pugCompile, browserSync.reload)

}

// Компиляция PUG

function pugCompile() {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('build'));
}

// Таски

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('pugCompile', pugCompile);
gulp.task('build', gulp.parallel(pugCompile, styles, scripts));
gulp.task('dev', gulp.series('build', 'watch'));