var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){
	gulp.run('build');
	gulp.run('watch');
});

gulp.task('test', function(){
	gulp.run('build');
	gulp.src('test/*.js')
		.pipe(mocha({reporter: 'nyan'}))

});

gulp.task('build', function(){
	gulp.run('scripts');

});

gulp.task('scripts', function(){
	gulp.src('app.coffee')
		.pipe(coffee({bare: false}).on('error',gutil.log))
		.pipe(gulp.dest('./'));
	gulp.src('./coffee/*.coffee')
		.pipe(coffee({bare: true}).on('error',gutil.log))
		.pipe(concat('engine.js'))
		.pipe(gulp.dest('./client/js/'))
})

gulp.task('watch', function(){
	nodemon({ script: 'app.js', options: '-e js -i client/engine.js' })
   	gulp.watch('coffee/*.coffee', function(){
		gulp.run('scripts');
	});
});
