var gulp = require('gulp');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var exec = require('child_process').exec;

// src -> dist 화일 복사 
gulp.task('build', () => {
  return gulp.src(['./src/**/*'])
    .pipe(gulp.dest('./dist'));
});

// webpack 수행 
// 로컬 webpack 실행파일 위치
const webpack_exe_path = __dirname + '/node_modules/.bin/webpack';
gulp.task('webpack', gulp.series('build', (cb) => {
  exec(webpack_exe_path, function (err, stdout, stderr) {
    console.log(stdout);
    if (stderr) console.log(stderr);
    cb(err);
  });
}));

// 로컬 웹서버 구동 
gulp.task('serve', gulp.series('webpack', () => {
  return gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8888
    }));
}));

// dist 디렉토리 삭제 
gulp.task('clean-dist', function () {
  return gulp.src('./dist', { read: false })
    .pipe(clean());
});


gulp.task('clean', gulp.parallel('clean-dist'));