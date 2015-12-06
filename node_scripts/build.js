var fs          = require('fs');
var Promise     = require('bluebird');
var chalk       = require('chalk');
var dateFormat  = require('dateformat');
var sass        = require('node-sass');
var rimraf      = require('rimraf-promise');
var compressor  = require('node-minify');

// http://bluebirdjs.com/docs/api/promisification.html
var mkdirp = Promise.promisifyAll(require("mkdirp"));

// console.log for 1337 h4X0r
var log = console.log.bind(console);

// ISO date format to use for debuging
var now = new Date();
var nowFormat = dateFormat(new Date(), "HH:MM:ss");

// File & folder path used by this program
var buildFolderName = 'dist';
var cssFile = 'css/style.css';

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
      return mkdirp.mkdirpAsync( buildFolderName );
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

var minifyCss = function() {
  return compressCss()
    .then( console.log )
    .catch( console.err );
};

cleanDistFolder()
  .then( minifyCss );
