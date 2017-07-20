var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browser = require('browser-sync').create();


gulp.task('watch', function(){
	browser.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});

	watch('./app/index.html', function(){
		browser.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function() {
	gulp.src('.app/temp/styles/styles.css')
	.pipe(browser.stream());
});