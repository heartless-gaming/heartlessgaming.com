var Imagemin = require('imagemin');

new Imagemin()
    .src('img/*.{gif,jpg,png,svg}')
    .dest('imagemin-test')
    .use(Imagemin.jpegtran({progressive: true}))
    .use(Imagemin.svgo())
    .use(Imagemin.optipng({optimizationLevel: 3}))
    .use(Imagemin.gifsicle({interlaced: true}))
    .run(function(err, files){
        if (err) {
          console.log(err);
        } else {
          console.log(files);
        }

    });
