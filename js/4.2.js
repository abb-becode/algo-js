const readlineSync = require("readline-sync");
const math = require("math");

/*using function*/

//This function return a random number from 1 to ten 
//does not need parameters
let rand10 = () => {
     return math.floor(Math.random() * 10);
}

console.log("random number between 1 to 10 : " + rand10());