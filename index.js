var chalk = require("chalk");

var message = "Hello " + chalk.magentaBright.underline.bgBlack.bold("World");
console.log(message);