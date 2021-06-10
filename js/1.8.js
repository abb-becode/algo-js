const readlineSync = require("readline-sync");
/*const math = require("math");*/

console.log("Please enter this story informations :");
let numberOfQuestions = 3;
let city = readlineSync.question("your city? ");
console.log("remain : " + --numberOfQuestions + " questions");
let country = readlineSync.question("your country? ");
console.log("remain : " + --numberOfQuestions + " questions");
let favoriteJob = readlineSync.question("your favorite job? ");
console.log(city  + "It's a beautiful city");
console.log(country  + "It's a beautiful country");
console.log(favoriteJob  + "It's a great job");