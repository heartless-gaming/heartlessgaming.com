var Promise     = require('bluebird');
var chalk       = require('chalk');
var dateFormat  = require('dateformat');
var rimraf      = require('rimraf-promise');
var compressor  = require('node-minify');

// http://bluebirdjs.com/docs/api/promisification.html
var fs = Promise.promisifyAll(require('fs'));
var mkdirp = Promise.promisifyAll(require("mkdirp"));

// console.log for 1337 h4X0r
var log = console.log.bind(console);

// ISO date format to use for debuging
var nowFormat = dateFormat(new Date(), "HH:MM:ss");

// File & folder path used by this program
var buildFolderName = 'dist';
var cssFile = 'css/style.css';
var jsFile = 'js/main.js';

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
    .then( function(){
      return mkdirp.syncAsync( buildFolderName );
    })
    .then(function(res){
      log( chalk.green('[' + nowFormat + '] ') + buildFolderName + ' folder cleaned' );
      return buildFolderName + ' folder cleaned';
    })
    .catch( console.error );
};

var compressCss = function() {
  return new Promise( function(resolve, reject){
    new compressor.minify({
      type: 'clean-css',
      fileIn: cssFile,
      fileOut: buildFolderName + '/' + cssFile,
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
      fileIn: jsFile,
      fileOut: buildFolderName + '/' + jsFile,
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

var minifyCss = function() {
  return compressCss()
    .then(function(res){
      fs.writeFileAsync( buildFolderName + '/' + cssFile, res);
    })
    .then(function(res){
      log( chalk.green('[' + nowFormat + '] ') + 'CSS Minified' );
    })
    .catch( console.err );
};

var minifyJs = function() {
  return compressCss()
    .then( function(res){
      fs.writeFileAsync( buildFolderName + '/' + jsFile, res);
    })
    .then(function(res){
      log( chalk.green('[' + nowFormat + '] ') + 'JS Minified' );
    })
    .catch( console.err );
};

cleanDistFolder()
  .then( minifyCss() )
  .then( minifyJs() );
