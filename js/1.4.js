const readlineSync = require("readline-sync");

console.log("Please fill in the following information :");
let firstName = readlineSync.question("your first name? ");
let lastName = readlineSync.question("your last name? ");
let city = readlineSync.question("your city? ");
console.log("your name is " + firstName + " " + lastName + " and you live in " + city); 