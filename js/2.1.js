const readlineSync = require("readline-sync");
/*const math = require("math");*/

console.log("Please enter this informations:");
let age = readlineSync.question(" your age? ");
if (age >= 18) {
    console.log("You are an adult");
}
else
{
    console.log("You are not yet an adult");
}