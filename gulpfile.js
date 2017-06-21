const   gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        sourcemaps      = require('gulp-sourcemaps'),
        autoprefixer    = require('gulp-autoprefixer'),
        imagemin        = require('gulp-imagemin'),
        useref          = require('gulp-useref'),
        gulpif          = require('gulp-if'),
        uglify          = require('gulp-uglify'),
        babel           = require('gulp-babel'),
        uncss           = require('gulp-uncss'),
        pug             = require('gulp-pug'),
        browserSync     = require('browser-sync').create();

gulp.task('sass', function(){
return gulp.src('src/sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
});
gulp.task('compile-pug', function() {
        gulp.src('src/pug/**/*.pug')
                .pipe(pug({
                pretty: true
                }))
                .pipe(gulp.dest('dist'))
                .pipe(browserSync.stream())
});
gulp.task('images', function(){
        return gulp.src('src/images/*')
                .pipe(imagemin())
                .pipe(gulp.dest('dist/images/'))
});


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
                baseDir: 'dist'
        }
    });
});

gulp.task('watch',['browserSync', 'sass'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/pug/**/*.pug', ['compile-pug']);
});

