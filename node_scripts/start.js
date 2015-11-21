var fs = require('fs');
var chalk = require('chalk');
var sass = require('node-sass');
var browserSync = require("browser-sync");

console.log( chalk.red('  #####   ') );
console.log( chalk.red(' #######  ') );
console.log( chalk.red('#  ###  # ') + chalk.grey(' The mighty Skull is starting your project.' ) );
console.log( chalk.red('#   #   # ') );
console.log( chalk.red('######### ') + chalk.grey(' Happy coding !' ) );
console.log( chalk.red(' ### ###  ') );
console.log( chalk.red('  #####   ') );
console.log( chalk.red('  # # #   ') + chalk.grey(' Play more, care less, be an heartless' ));

console.log( '' )
console.log( chalk.grey('Compiling sass files...' ) )
sass.render({
  file: 'sass/style.scss',
  outputStyle: 'expanded',
  outFile: 'styles/style.css',
  sourceMap: true
}, function(error, result) { // node-style callback from v3.0.0 onwards
  if (error) {
    console.log(error.status); // used to be "code" in v2x and below
    console.log(error.column);
    console.log(error.message);
    console.log(error.line);
  } else {
    fs.writeFile('styles/style.css', result.css, function(err){
      if(!err){
        console.log(chalk.grey('CSS file generated.'));
      } else {
        console.log( err );
      }
    });
    fs.writeFile('styles/style.map.css', result.map, function(err){
      if(!err){
        console.log(chalk.grey('CSS map file generated.'));
      } else {
        console.log( err );
      }
    });

  }
});
