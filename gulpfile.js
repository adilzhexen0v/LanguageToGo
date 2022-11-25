const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('build', function(){
     return gulp.src('./app/pages/*.nunjucks')
     .pipe(nunjucksRender({
          path: ['./app/templates']
     }))
     .pipe(gulp.dest('./dist/'));
});