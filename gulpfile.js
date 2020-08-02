// const babel = require('gulp-babel');
const concat = require('gulp-concat');
// const del = require('del');
const gulp = require('gulp');
// const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');

const server = browserSync.create();

const paths = {
  styles: {
    src: './src/styles/*.css',
    dest: './build/styles/'
  }
};

// const clean = () => del(['build']);

function styles() {
  // .pipe(uglify())
  return gulp.src('src/styles/main.css', { sourcemaps: true })
    .pipe(gulp.dest(paths.styles.dest));
} 

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './'
    }
  });
  done();
}

const watch = () => gulp.watch(paths.styles.src, gulp.series(styles, reload));

const dev = gulp.series( styles, serve, watch);
module.exports.default =  dev;