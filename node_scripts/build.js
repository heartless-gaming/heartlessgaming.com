var fs          = require('fs');
var Promise     = require('bluebird');
var chalk       = require('chalk');
var dateFormat  = require('dateformat');
var sass        = require('node-sass');
var compressor  = require('node-minify');
var rimraf      = require('rimraf-promise');

// http://bluebirdjs.com/docs/api/promisification.html
var mkdirp = Promise.promisifyAll(require("mkdirp"));

// console.log for 1337 h4X0r
var log = console.log.bind(console);

// ISO date format to use for debuging
var now = new Date();

// Build Folder Name
var buildFolderName = 'dist';

// Greeting Message
log( chalk.red('  #####   ') );
log( chalk.red(' #######  ') );
log( chalk.red('#  ###  # ') + chalk.grey(' The mighty Skull is building your project.' ) );
log( chalk.red('#   #   # ') );
log( chalk.red('######### ') + chalk.grey(' Please wait while I get your stuff ready for production.' ) );
log( chalk.red(' ### ###  ') );
log( chalk.red('  #####   ') );
log( chalk.red('  # # #   ') + chalk.grey(' Play more, care less, be an heartless' ));

var cleanDistFolder = function( folderPath ) {
  return rimraf( folderPath )
    .then( function(){
      return mkdirp.mkdirpAsync( folderPath );
    })
    .then(function(res){
      return folderPath + ' folder cleaned';
    })
    .catch( console.error );
};



cleanDistFolder( buildFolderName )
  .then(function(res){
    log(res);
  });
