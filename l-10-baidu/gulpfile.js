var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js压缩
var concat = require('gulp-concat'); //合并
var minifyHtml = require("gulp-minify-html"); //html压缩
var minifyCss = require("gulp-minify-css"); //css压缩
var rename = require("gulp-rename");
var spriter = require('gulp-css-spriter'); //雪碧图


gulp.task('default', ['spriter'], function() {

    // html压缩
    gulp.src('baidu.html')
        .pipe(minifyHtml())
        .pipe(rename('baidu.min.html'))
        .pipe(gulp.dest('./'));
    gulp.watch('baidu.html', function() {
        gulp.src('baidu.html')
            .pipe(minifyHtml())
            .pipe(rename('baidu.min.html'))
            .pipe(gulp.dest('./'));
    });
    //js压缩
    gulp.src('scripts/baidu.js')
        .pipe(uglify())
        .pipe(concat('baidu.min.js'))
        .pipe(gulp.dest('build'));
    // js内容改变时重新压缩
    gulp.watch('scripts/baidu.js', function() {
        gulp.src('scripts/baidu.js')
            .pipe(uglify())
            .pipe(concat('baidu.min.js'))
            .pipe(gulp.dest('build'));
    });
    //css 
    gulp.watch('css/*.css', function() {
        gulp.src('css/*.css')
            .pipe(minifyCss())
            .pipe(rename('baidu.min.css'))
            .pipe(gulp.dest('build'));
    });
});
//合成雪碧图和压缩css
gulp.task('spriter', function() {
    return gulp.src('./css/*.css')
        .pipe(spriter({
            'spriteSheet': './build/images/spritesheet.png', //合成雪碧图存放位置        
            'pathToSpriteSheetFromCSS': './images/spritesheet.png' //为css添加雪碧图图片引用路径
        }))
        .pipe(minifyCss()) //压缩css
        .pipe(rename('baidu.min.css')) //重命名
        .pipe(gulp.dest('./build')); //最后生成出来
});
