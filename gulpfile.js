var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var notify = require("gulp-notify");
var ext_replace = require('gulp-ext-replace');
var browserSync = require('browser-sync').create();

var env = process.env.NODE_ENV || 'dev';
var config = require('./gulp/' + env);


gulp.task('fileinclude', function() {
  return gulp.src('./assets/templates/src/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './assets/renderings/components'
    }))
    .pipe(gulp.dest('../../profile.tempotrip.com/www/'))
    .pipe(notify({ message: "fileInclude tasks done."}) );
});
gulp.task('change', function() {
  return gulp.src('../../profile.tempotrip.com/www/*.html')
      .pipe(ext_replace('.php'))
      .pipe(gulp.dest('../../profile.tempotrip.com/www/'))
});

gulp.task('images', function() {
   return gulp.src(['./assets/tempotrip/images/**/*']).pipe(gulp.dest('../../profile.tempotrip.com/www/images'));
});
gulp.task('vendors', function() {
   return gulp.src(['./assets/tempotrip/js/vendors/**/*']).pipe(gulp.dest('../../profile.tempotrip.com/www/js/vendors'));
});
gulp.task('vendorsCSS', function() {
   return gulp.src(['./assets/tempotrip/css/vendors/**/*']).pipe(gulp.dest('../../profile.tempotrip.com/www/css/vendors'));
});
gulp.task('fonts', function() {
   return gulp.src(['./assets/tempotrip/fonts/**/*']).pipe(gulp.dest('../../profile.tempotrip.com/www/fonts'));
});
gulp.task('data', function() {
   return gulp.src(['./assets/tempotrip/js/ajax/**/*']).pipe(gulp.dest('../../profile.tempotrip.com/www/js/ajax'));
});
gulp.task('sass-global', function () {
  return gulp.src('./assets/tempotrip/css/globals.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(concat('tempotrip.globals.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../../profile.tempotrip.com/www/css'))
    .pipe(notify({ message: "Global Sass compiled, Sourcemaps created."}) );
});
gulp.task('sass', function () {
  return gulp.src('./assets/tempotrip/css/modules.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(concat('profile.modules.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../../profile.tempotrip.com/www/css'))
    .pipe(notify({ message: "Sass compiled, Sourcemaps created."}) );
});

//Node Module JS creation//
gulp.task('js1', function () {
  browserify('./assets/tempotrip/js/modules.js')
    .bundle() 
    .on('error', function (e) { 
      gutil.log(e); 
    })
    .pipe(source('profile.modules.js')) 
    .pipe(gulp.dest('../../profile.tempotrip.com/www/js'))
    .pipe(notify({ message: "JS bundled."}) ); 
});

//global Page JS Creation//
gulp.task('js2', function () {
  browserify('./assets/tempotrip/js/globals.js')
    .bundle() 
    .on('error', function (e) { 
      gutil.log(e); 
    })
    .pipe(source('tempotrip.globals.js')) 
    .pipe(gulp.dest('../../profile.tempotrip.com/www/js'))
    .pipe(notify({ message: "Global JS bundled."}) ); 
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
          baseDir: "../../profile.tempotrip.com/www/"
        }
    });
});

gulp.task('watch', function() {
  // Watch .html files
  gulp.watch('./assets/**/*.html').on('change', browserSync.reload);
  gulp.watch('./assets/**/*.html', ['fileinclude', browserSync.reload]);
  
  // Watch .sass files
  gulp.watch('./assets/tempotrip/css/**/*.scss', ['sass', browserSync.reload]);
  // Watch .js files
  gulp.watch('./assets/tempotrip/js/src/*.js', ['js1']);
  gulp.watch('./assets/tempotrip/js/src/*.js', ['js2']);
  gulp.watch(config.js.dest + '/tempotrip.bundle.js').on('change', browserSync.reload);
});

gulp.task('serve', function() {
    gulp.start('images', 'fonts', 'vendors', 'vendorsCSS', 'data', 'sass-global', 'sass', 'js1', 'js2','fileinclude', 'change', 'browser-sync', 'watch');
});

