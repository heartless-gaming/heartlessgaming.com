var Promise    = require('bluebird');
var chalk      = require('chalk');
var dateFormat = require('dateformat');
var rimraf     = require('rimraf-promise');
var compressor = require('node-minify');
var Imagemin   = require('imagemin');

// http://bluebirdjs.com/docs/api/promisification.html
var fs = Promise.promisifyAll(require('fs'));
var mkdirp = Promise.promisifyAll(require('mkdirp'));
var ncp = Promise.promisifyAll(require('ncp'));

// console.log for 1337 h4X0r
var log = console.log.bind(console);

var nowFormat = dateFormat(new Date(), "HH:MM:ss");

// File & folder path used by this program
var buildFolderName    = 'dist';
var buildFolderNameCss = 'css';
var buildFolderNameJs  = 'js';
var buildFolderNameImg = 'img';
var fontFolderName     = 'font';
var cssFileName        = 'style.css';
var jsFileName         = 'main.js';

// Greeting Message
log( chalk.red('  #####   ') );
log( chalk.red(' #######  ') );
log( chalk.red('#  ###  # ') + chalk.grey(' The mighty Skull is building your project.' ) );
log( chalk.red('#   #   # ') );
log( chalk.red('######### ') + chalk.grey(' Please wait while I get your stuff ready for production.' ) );
log( chalk.red(' ### ###  ') );
log( chalk.red('  #####   ') );
log( chalk.red('  # # #   ') + chalk.grey(' Play more, care less, be an heartless' ));

var cleanDistFolder = function() {
  return rimraf( buildFolderName )
    .then( function(res){
      log( chalk.green('[' + dateFormat(new Date(), "HH:MM:ss") + '] ') + buildFolderName + ' folder cleaned' );
    })
    .catch( console.error );
};

var compressCss = function() {
  return new Promise( function(resolve, reject){
    new compressor.minify({
      type: 'clean-css',
      fileIn: buildFolderNameCss + '/' + cssFileName,
      fileOut: buildFolderName + '/' + buildFolderNameCss + '/' + cssFileName,
      callback: function(err, min){
        if (err) {
          reject(err);
        } else {
          resolve(min);
        }
      }
    });
  });
};

var compressJs = function(){
  return new Promise(function(resolve, reject){
    new compressor.minify({
      type: 'uglifyjs',
      fileIn: buildFolderNameJs + '/' + jsFileName,
      fileOut: buildFolderName + '/' + buildFolderNameJs + '/' + jsFileName,
      callback: function(err, min) {
        if (err) {
          reject(err);
        } else {
          resolve(min);
        }
      }
    });
  });
};

// TODO delete that stuff
var minifyCss = function() {
  return compressCss()
    .then(function(res){
      log( chalk.green('[' + dateFormat(new Date(), "HH:MM:ss") + '] ') + 'CSS Minified' );
    })
    .catch( console.err );
};

// TODO delete that stuff
var minifyJs = function() {
  return compressJs()
    .then(function(res){
      log( chalk.green('[' + dateFormat(new Date(), "HH:MM:ss") + '] ') + 'JS Minified' );
    })
    .catch( console.err );
};

var imgmin= function() {
  return new Promise(function(resolve, reject){
    return new Imagemin()
        .src('img/*.{gif,jpg,png,svg}')
        .dest( buildFolderName + '/' + buildFolderNameImg)
        .use(Imagemin.jpegtran({progressive: true}))
        .use(Imagemin.svgo())
        .use(Imagemin.optipng({optimizationLevel: 3}))
        .use(Imagemin.gifsicle({interlaced: true}))
        .run(function(err, files){
            if (err) {
              reject(err);
            } else {
              log( chalk.green('[' + dateFormat(new Date(), "HH:MM:ss") + '] ') + 'Images optimized' );
              resolve();
            }
        });

  });

};

// var copyFont = function(){
//   return log(ncp.ncpAsync);
// };
// function copyFont(){
//   return log(ncp.ncpAsync);
// }

/*
 * Clean task is always late to the party
 * I shall learn hos to chain promise corectly
 */
// cleanDistFolder()
//   .then( minifyCss() )
//   .then( minifyJs() )
//   .then( imgmin() );


/*
 * TODO
 * Put all these in a promise.all or something
 * http://bluebirdjs.com/docs/api-reference.html
 *
 * copy all the html file in the root on the dist directory
 *
 */
minifyCss()
  .then( minifyJs() )
  .then( imgmin() )
  .then( copyFont )
  .catch( console.err );
