const readlineSync = require("readline-sync");
/*const math = require("math");*/

console.log("Please enter this informations:");
let min = readlineSync.question("min number? ");
let max = readlineSync.question("max number? ");
let current = readlineSync.question("current number? ");
if (min > max) {
    console.log("your min number must be less than max number.");
    return;
} 
if ((min <= current) && (current <= max)) {
    console.log("the number " + current + " is between min and max");
}
else {
    console.log("your current number is displayed only if it is between min and max")
}