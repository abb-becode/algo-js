const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What's your first name? ");
console.log("Hello " + firstName);