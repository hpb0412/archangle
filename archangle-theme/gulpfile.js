const gulp = require('gulp');
const hash = require('gulp-hash-filename');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');
const pump = require('pump');

const handleError = (done) => {
  return function (err) {
    if (err) {
      console.error(err);
    }
    return done(err);
  };
};

function css(done) {
  pump(
    [
      gulp.src('assets/css/*.css', { sourcemaps: true }),
      // uglify(),
      // hash({ format: '{name}.{hash:8}{ext}' }),
      gulp.dest('assets/built/', { sourcemaps: '.' }),
    ],
    handleError(done)
  );
}
function js(done) {
  pump(
    [
      gulp.src('assets/js/*.js', { sourcemaps: true }),
      uglify(),
      // hash({ format: '{name}.{hash:8}{ext}' }),
      gulp.dest('assets/built/', { sourcemaps: '.' }),
    ],
    handleError(done)
  );
}

function hbs(done) {
  pump([gulp.src(['*.hbs', 'partials/**/*.hbs'])], handleError(done));
}

function zipper(done) {
  const filename = require('./package.json').name + '.zip';

  pump(
    [
      gulp.src([
        '**',
        '!node_modules',
        '!node_modules/**',
        '!dist',
        '!dist/**',
        '!yarn-error.log',
      ]),
      zip(filename),
      gulp.dest('dist/'),
    ],
    handleError(done)
  );
}

exports.build = gulp.series(css, js);
exports.pack = zipper;
