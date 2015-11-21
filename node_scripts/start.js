var fs = require('fs');
var chalk = require('chalk');
var sass = require('node-sass');
var bs = require("browser-sync").create();

// console.log for 1337 h4X0r
var log = console.log.bind(console);

// Greeting Message
log( chalk.red('  #####   ') );
log( chalk.red(' #######  ') );
log( chalk.red('#  ###  # ') + chalk.grey(' The mighty Skull is starting your project.' ) );
log( chalk.red('#   #   # ') );
log( chalk.red('######### ') + chalk.grey(' Happy coding !' ) );
log( chalk.red(' ### ###  ') );
log( chalk.red('  #####   ') );
log( chalk.red('  # # #   ') + chalk.grey(' Play more, care less, be an heartless' ));

// Reload all browser on html change
bs.watch("*.html").on("change", bs.reload);

// Specific compilation for sass file
bs.watch("sass/**.scss", function (event, file) {
    if (event === "change") {

        sass.render({
          file: 'sass/style.scss',
          outputStyle: 'expanded',
          outFile: 'styles/style.css',
          sourceMap: true
        }, function(error, result) {
          if (error) {
            // Pretty Debug Message on sass error
            log( chalk.red('[SASS ERROR] ' ) + error.file )
            log( chalk.red('[SASS ERROR] ' ) + 'On line ' + chalk.red(error.line) + ' at column ' + chalk.red(error.column) );
            log( chalk.red('[SASS ERROR] ' ) + error.message );

          } else {

            // Creating css files
            fs.writeFile('styles/style.css', result.css, function(err){
              if(!err){

                // Creating css map file
                fs.writeFile('styles/style.map.css', result.map, function(err) {
                  if(!err){

                  } else {
                    log( err );
                  }
                });
              } else {
                log( err );
              }
            });
            // Injecting the CSS change in BrowserSync
            bs.reload('styles/style.css');
          }
        });

    }
});

// Now init the Browsersync server
bs.init({
    server: "./"
});
