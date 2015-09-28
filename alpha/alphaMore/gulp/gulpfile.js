$l=function(a){
	console.log(a)
}; 

$l('gulpfile running..')
var gulp = require('gulp'), nodemon = require('gulp-nodemon'), connect = require('gulp-connect')//, jade = require('gulp-jade'), uglify =require('gulp-uglify'), gulpif= require('gulp-if'), livereload = require('gulp-livereload'), outputDir = 'builds/development'

g = gulp
g.t = g.task
g.s = g.src
g.d = g.dest
g.w = g.watch

g.t('server', function () {
	connect.server({
		port: 80,
		livereload: true
	})
})
 
g.t('bw', function(){
 
	
	
	var spawn = require('child_process').spawn
	spawn('open', ['http://localhost/wap/tween'])

}) 
 
g.t('dev', function () {
	nodemon({script: 'a.js'})
		.on('restart', function () {
			console.log('restarteing!')
			var spawn = require('child_process').spawn
			spawn('open', ['http://localhost/wap/tween'])
			console.log('restarted!')
		})
})
