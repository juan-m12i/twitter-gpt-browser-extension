const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const { exec } = require('child_process');

function bundleJsFiles() {
  return src(['source/content.js', 'source/modal.js', 'source/open-ai-api.js', 'source/secrets.js']) // Add your JS files in the order you want them to be concatenated.
    .pipe(concat('test-bundle.js'))
    .pipe(dest('dist/'));
}

function runJest(cb) {
  exec('npx jest', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}

exports.default = series(bundleJsFiles, runJest);
