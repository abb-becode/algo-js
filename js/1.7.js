const readlineSync = require("readline-sync");
/*const math = require("math");*/

console.log("Please enter this informations :");
let a = readlineSync.question("shoe size a? ");
let y = readlineSync.question("birth year y? ");
let result = ((((a * 2) + 5) * 50) - y) + 1766;
console.log("the result of ((((a * 2) + 5) * 50) - y) + 1766 is :" + result); 
