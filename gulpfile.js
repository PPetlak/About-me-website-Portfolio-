const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'node_modules/font-awesome/scss/font-awesome.scss',
    'node_modules/owl.carousel/src/scss/owl.carousel.scss',
    'node_modules/owl.carousel/src/scss/owl.theme.default.scss',
    'node_modules/animate.css/animate.css',
    
    'src/scss/*.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('src/assets/css'))
  .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src([
	'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/typed.js/lib/typed.js',
    'node_modules/waypoints/lib/jquery.waypoints.js',
    'node_modules/particles.js/particles.js',
    'src/app.js',
    'node_modules/smooth-scroll/dist/smooth-scroll.js',
  
    
   
	'src/js/*.js'
  ])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('src/assets/js'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src'
  });

  gulp.watch([
    'node_modules/bootstrap/scss/bootstrap.min.scss',
    'src/scss/*.scss'
  ], ['sass']);

  gulp.watch('src/*.html').on('change', browserSync.reload);

});

gulp.task('fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/assets/fonts'));
});

gulp.task('default', ['js', 'serve', 'fonts'])
