const readlineSync = require("readline-sync");
/*const math = require("math");*/

console.log("Please enter two integer numbers :");
let a = readlineSync.question("first number a? ");
let b = readlineSync.question("second number b? ");
console.log("the result of a % b is :" + a % b); 