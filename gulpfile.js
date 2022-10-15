const nunjucksRender = require('gulp-nunjucks-render');
const gulp = require('gulp');

gulp.task('build', function(){
     return gulp.src('./app/pages/*.nunjucks')
     .pipe(nunjucksRender({
          path: ['./app/templates']
     }))
     .pipe(gulp.dest('./'));
});