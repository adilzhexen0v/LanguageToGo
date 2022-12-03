# [Многостраничный сайт](https://adilzhexen0v.github.io/LanguageToGo/dist/) онлайн-школы иностранных языков
- Для компиляции CSS файлов используется препроцессор [SCSS](https://sass-scss.ru/)
- Общие/повторяющиеся стили вынесены в [style.css](https://github.com/adilzhexen0v/LanguageToGo/blob/main/dist/css/style.css)
- Сайт адаптирован до ширины 320рх
- Все изображени расформированы по папкам
- Для сборки JavaScript файлов используется [Webpack](https://webpack.js.org/)
- Для сборки HTML файлов используется [gulp-nunjucks-render](https://www.npmjs.com/package/gulp-nunjucks-render). Для запуска используется команда `npm run build`. Настройка **gulp** расположена в ***gulpfile.js:***
```javascript
     const gulp = require('gulp');
     const nunjucksRender = require('gulp-nunjucks-render');

     gulp.task('build', function(){
          return gulp.src('./app/pages/*.nunjucks')
          .pipe(nunjucksRender({
               path: ['./app/templates']
          }))
          .pipe(gulp.dest('./dist/'));
     });
```
