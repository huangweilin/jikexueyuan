var gulp = require('gulp');
var rename = require("gulp-rename");
var minifyHtml = require("gulp-minify-html"); //html压缩
var minifyCss = require("gulp-minify-css"); //css压缩
var concat = require('gulp-concat'); //合并
var gulpLess = require("gulp-less");
gulp.task('default', ['less'], function() {

    // 压缩html并监听
    gulp.src('./*.html')
        .pipe(minifyHtml())
        .pipe(rename('jikexueyuan.min.html'))
        .pipe(gulp.dest('./'));
    gulp.watch('jikexueyuan.html', function() {
        gulp.src('jikexueyuan.html')
            .pipe(minifyHtml())
            .pipe(rename('jikexueyuan.min.html'))
            .pipe(gulp.dest('./'));
    });
    //监听less
    gulp.watch('./jike.less', function() {
        gulp.src('./jike.less')
            .pipe(gulpLess())
            .pipe(gulp.dest("css"));
    });
    // 压缩css并监听
    gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(concat('jike.min.css'))
        .pipe(gulp.dest('./'));
    gulp.watch('./css/*.css', function() {
        gulp.src('./css/*.css')
            .pipe(minifyCss())
            .pipe(concat('jike.min.css'))
            .pipe(gulp.dest('./'));
    });
});
gulp.task('less', function() {
    return gulp.src("./jike.less")
        .pipe(gulpLess())
        .pipe(gulp.dest("css"));
});
