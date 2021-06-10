const readlineSync = require("readline-sync");
const math = require("math");

/*using function*/

/*
    this function take one argument (number and must be not negative) 
    calculate and return factorial of this number
*/
const factorial = (num) =>  {
    if (num < 0) {
        return -1;
    }
    return num <= 1 ? 1 : num * factorial(num - 1);
}

console.log("----------------------------------------------")
console.log("* This program calculate factorial of number *")
console.log("----------------------------------------------")
let num = new Number(readlineSync.question('please enter number? '));
if (factorial(num) == -1) {
    console.log("number must not be negative");
}
else {
    console.log("Factorial of number " + num + ": " + factorial(num));
}
