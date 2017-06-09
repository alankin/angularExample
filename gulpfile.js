(function () {

    'use strict';

    var gulp = require('gulp');
    var runSequence = require('run-sequence').use(gulp);
    var wiredep = require('wiredep').stream;
    var browserSync = require('browser-sync').create();
    var sass = require('gulp-sass');


    var concat = require('gulp-concat');
    var embed = require('gulp-angular-embed-templates');

    gulp.task('development', function () {
        runSequence('bower', 'serve');
    });


    gulp.task('styles', function () {
        gulp.src('./src/style/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('style/css/'))
    });

    gulp.task('scripts', function () {
        return gulp.src([
            './src/app/**/*.service.js',
            './src/app/**/*.controller.js',
            './src/app/**/*.component.js',
            './src/app/*.module.js',
            './src/app/*.route.js',
        ])
            .pipe(embed())
            .pipe(concat('all.js'))
            .pipe(gulp.dest('dist/'));
    });

    gulp.task('serve', function () {
        browserSync.init({
            server: {
                baseDir: './src',
                routes: {
                    '/bower_components': 'bower_components'
                }
            }
        });

        gulp.watch([
            './src/style/*.css',
            './src/app/**/*.*'
        ]).on('change', function () {
            browserSync.reload();
        });
    });

    gulp.task('bower', function () {
        gulp.src('./src/app/index.html')
            .pipe(wiredep({
                exclude: ['jquery', 'bootstrap.js']
            }))
            .pipe(gulp.dest('./src'));
    });


    gulp.task('default', ['development']);
})();