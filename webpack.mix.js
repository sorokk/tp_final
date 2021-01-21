const mix = require('laravel-mix');

mix
  .options({processCssUrls: false})
  .js('src/js/app.js', 'public/js')
  .sass('src/sass/app.sass', 'public/css')