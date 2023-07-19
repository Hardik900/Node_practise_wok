//const Chalk = require("chalk");
const { default: validator } = require("validator")
//const validator = require("validator")

//console.log(Chalk.blue.underline.inverse("hello Hardik"));
const validate = validator.isEmail("hardik@gmail.com")
console.log(validate)

console.log("hello")