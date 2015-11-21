var chalk = require('chalk');
var sass = require('node-sass');

console.log( chalk.red.bgBlack('  #####   ') );
console.log( chalk.red.bgBlack(' #######  ') );
console.log( chalk.red.bgBlack('#  ###  # ') + chalk.grey(' The mighty Skull is starting your project.' ) );
console.log( chalk.red.bgBlack('#   #   # ') );
console.log( chalk.red.bgBlack('######### ') + chalk.grey(' Happy coding !' ) );
console.log( chalk.red.bgBlack(' ### ###  ') );
console.log( chalk.red.bgBlack('  #####   ') );
console.log( chalk.red.bgBlack('  # # #   ') + chalk.grey(' Play more, care less, be an heartless' ));


console.log(sass.info);
