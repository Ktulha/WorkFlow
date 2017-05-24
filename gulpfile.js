var gulp=require('gulp'),//
    less=require('gulp-less'),//
    server = require('gulp-server-livereload'),//
    autoprefixer=require('gulp-autoprefixer')//
    ;

//
gulp.task('server', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true,
      port:4645
    }));
});
gulp.task('css',function(){
    gulp.src('app/_dev/less/**/*.less')
    .pipe(less()).on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    })
    .pipe(autoprefixer(['last 20 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
    }))
    .pipe(gulp.dest('app/css'))
    console.log('*******LESS*********')
});
gulp.task('watch',function(){
    gulp.watch('app/_dev/less/**/*.less',['css']);
    console.log(gulp.watch.values);
});

gulp.task('default', ['server','watch']);