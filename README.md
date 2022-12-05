# [Многостраничный сайт](https://adilzhexen0v.github.io/LanguageToGo/dist/) онлайн-школы иностранных языков
- Общие/повторяющиеся стили вынесены в [style.css](https://github.com/adilzhexen0v/LanguageToGo/blob/main/dist/css/style.css)
- Сайт адаптирован до ширины 320рх
- Все изображени расформированы по папкам
- Для сборки JavaScript файлов используется [Webpack](https://webpack.js.org/)
- Для сборки HTML файлов используется [gulp-nunjucks-render](https://www.npmjs.com/package/gulp-nunjucks-render). Для запуска используется команда `gulp build-pages`. Настройка **gulp** расположена в ***gulpfile.js:***
```javascript
     const gulp = require('gulp');
     const nunjucksRender = require('gulp-nunjucks-render');

     gulp.task('build-pages', function(){
          return gulp.src('./app/pages/*.nunjucks')
          .pipe(nunjucksRender({
               path: ['./app/templates']
          }))
          .pipe(gulp.dest('./dist/'));
     });
```
- Для компиляции CSS файлов используется [gulp-sass](https://www.npmjs.com/package/gulp-sass). Для запуска используется команда `gulp styles-compile`. 
```javascript
     const gulp = require('gulp');
     const gulpSass = require('gulp-sass')(require('sass'));
     const gulpSourcemaps = require('gulp-sourcemaps');

     gulp.task('styles-compile', () => {
          return gulp.src('./app/scss/*.scss')
          .pipe(gulpSourcemaps.init())
          .pipe(gulpSass().on('error', gulpSass.logError))
          .pipe(gulpSourcemaps.write('./'))
          .pipe(gulp.dest('./dist/css/'));
     });

     // Для отслеживание изменении используются наблиюдатель

     const gulpWatch = require('gulp-watch');
     gulp.task('watch', () => {
          gulp.watch('./app/scss/*.scss', gulp.series('styles-compile'));
     });
```
