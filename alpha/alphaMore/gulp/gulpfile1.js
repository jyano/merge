$l=function(a){
	console.log(a)
}; 

$l('gulpfile running..')
var gulp = require('gulp'), connect = require('gulp-connect')//, jade = require('gulp-jade'), uglify =require('gulp-uglify'), gulpif= require('gulp-if'), livereload = require('gulp-livereload'), outputDir = 'builds/development'

g = gulp
g.t = g.task
g.s = g.src
g.d = g.dest
g.w = g.watch

g.t('server', function () {
	connect.server({
		port: 80
	})
})
	

/*
g.t('uglify',function(){$l('uglify..')
	g.s('src/*.js')
		.pipe(uglify()).pipe(g.d('builds'))
	

})


g.t('jade',function(){$l('jade..')
	
	g.s('src/templates/**'+'/*.jade')
		.pipe(jade()).pipe(g.d('builds'))
		.pipe(livereload())

})


g.t('watched', function () {
	 $l('you changed..and i watched! .. high from \nwatched\n')
})


g.t('watch', function () {
	 
	var server = livereload()
	
	g.w('src/*.js', ['watched'])
	
	
})

g.t('default', ['uglify','jade','watch'])


g.t('connect',
	
	//connect.server({root: 'app', livereload: true});

	connect.server({
		
		root: 'app',
		livereload: true
	
	})
)



g.t('html', function () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});



gulp.task('sass', function () {
	return
})
gulp.task('default', ['connect'])


gulp.task('reload', function () {
})
gulp.task('js', function(){
	return gulp.src('src/js/main.js').pipe(uglify())
		.pipe(gulp.dest(outputDir + '/js'))
	return
})

 
function logger(){}
	
	connect = require('gulp-connect')

// nodeModule = runSequence
	


	structure = {
		src: {
			files: {
				fonts: {},
				images: {}
			},
			js: [{
				collections: {},
				controllers: {}
			},
				'main.js'],
			sass: [{
				modules: {}
			},
				'variables.scss',
				'main.scss'],
			templates: [{
				partials: {}
			},
				'index.jade']
		},
		builds: {
			development: [{
				fonts: {},
				images: {},
				css: {},
				js: {}
			},
				'index.html'],
			production: {}
		}
	}
	* /

	 
