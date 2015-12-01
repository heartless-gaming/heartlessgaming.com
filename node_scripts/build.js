var fs = require('fs');
var chalk = require('chalk');
var dateFormat = require('dateformat');
var sass = require('node-sass');
var bs = require("browser-sync").create();

// console.log for 1337 h4X0r
var log = console.log.bind(console);

// ISO date format to use for debuging
var now = new Date();

// Greeting Message
log( chalk.red('  #####   ') );
log( chalk.red(' #######  ') );
log( chalk.red('#  ###  # ') + chalk.grey(' The mighty Skull is building your project.' ) );
log( chalk.red('#   #   # ') );
log( chalk.red('######### ') + chalk.grey(' Please wait while I get your stuff ready for production.' ) );
log( chalk.red(' ### ###  ') );
log( chalk.red('  #####   ') );
log( chalk.red('  # # #   ') + chalk.grey(' Play more, care less, be an heartless' ));
