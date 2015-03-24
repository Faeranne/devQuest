gulp = require 'gulp'
mocha = require 'gulp-mocha'
istanbul = require 'gulp-coffee-istanbul'
coveralls = require 'gulp-coveralls'
coffeelint = require 'gulp-coffeelint'
coffee = require 'gulp-coffee'
nodemon = require 'gulp-nodemon'
livereload = require 'gulp-livereload'
cached = require 'gulp-cached'
coffeeify = require 'gulp-coffeeify'
bowerFiles = require 'main-bower-files'

gulp.task 'default', ['test', 'lint', 'build', 'watch', 'run']

gulp.task 'watch', ['build', 'test', 'lint'], ->
	livereload.listen()
	gulp.watch 'src/**/*.coffee', ['test', 'lint', 'build']

gulp.task 'run', ['watch'], ->
	nodemon
		script: 'build/server/app.js'
		watch: 'build/server'

gulp.task 'build', ['coffee', 'browserify', 'bower']

gulp.task 'browserify', ['coffee'], ->
	gulp.src 'src/client/**/*.coffee'
		.pipe coffeeify()
		.pipe gulp.dest './build/client/'
	
gulp.task 'bower', ->
	gulp.src bowerFiles()
		.pipe gulp.dest "./lib"

gulp.task 'coffee', ['bower'], ->
	gulp.src 'src/**/*.coffee'
		.pipe cached 'build'
		.pipe coffee()
		.pipe gulp.dest 'build'
		.pipe livereload()

gulp.task 'test', ['build'], (done) ->
	gulp.src 'src/**/*.coffee'
		.pipe cached 'test'
		.pipe istanbul
			includeUntested: true
		.pipe istanbul.hookRequire()
		.on 'finish', ->
			if process.env.CI
				reporter = 'spec'
			else
				reporter = 'nyan'
			gulp.src 'tests/**/*.coffee'
				.pipe mocha
					reporter:reporter
				.pipe istanbul.writeReports()
				.on 'end', () ->
					if process.env.CI
						gulp.src 'coverage/**/lcov.info'
							.pipe coveralls()
							.on 'finish', done
					else
						done()
	return null

gulp.task 'lint', ->
	gulp.src ['**/*.coffee','!node_modules/**/*']
		.pipe cached 'lint'
		.pipe coffeelint 'coffeelint.json'
		.pipe coffeelint.reporter()
		.pipe coffeelint.reporter 'fail'
