//call plugin
var gulp = require('gulp');
var imagemin = require("gulp-imagemin");
var imageResize = require('gulp-image-resize');

//Define level for optimizartion 圧縮レベルオプションを定義
var imageminOptions = {
 optimizationLevel: 7
 };

 //Define RIsize option リサイズのオプションを定義
var resizeOptions = {
 width : 360,
 height : 360,
 gravity : 'Center',
 crop : true,
 upscale : false,
 imageMagick : true
 };
 
//Folder フォルダ名を定義
var optimizedir = basedir + 'optimized_images/picture/';
var resizedir = basedir + 'resized_images/picture/';

//optimize task 圧縮タスク
gulp.task('image-optim', function(path){
　//image folder (compress_image以下の画像ファイルを見る)
 return gulp.src("compress_images/*/*/*.+(jpg|png)")
 .pipe(imagemin({
 　//options
 progressive: true,
 use: [pngquant({quality: '65-80', speed: 1})]
 }))
 　//output folder
 .pipe(gulp.dest( optimizedir ));
 });


//resize
gulp.task('image-resize',function() {
 return gulp.src("resize_images/*/*/*.+(jpg|png)")
 //options
 .pipe(imageResize( resizeOptions ))
 .pipe(gulp.dest( resizedir ));
 });
