const readlineSync = require("readline-sync");

//Testing installation of javascript
//console.log("It works !!!");

//Invite user to enter something from keyboard and display it on the console
/*let userName = readlineSync.question('Can you give me your name please? ');
console.log("Hello " + userName);*/

//Using variables
/*let age = 25; // I'm 25
age = 36; // I get older
age = 18; // Miraculously I'm getting younger
console.log("your age is: " + age);
*/

//Types of variables
//Numbers:
/*let age = 25;*/

//String:
/*let phrase = "Coding is fun!";*/

//Booleans:
/*let isItTrue = true;
let isItFalse = false;*/

//Using Numbers Variables
/*let age = 23;
let sisterAge = age + 11;
age += 12; // age = age + 12;
console.log(age);*/

//Strings
/*let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);
let userName = readlineSync.question("What's your name? ");
console.log("He's called " + userName);*/

//new Number() - converting string to number
/*let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have? '));
let cssBadges = new Number(readlineSync.question('How many CSS badges do you have? '));
let totalBadges = htmlBadges + cssBadges;
console.log('Woaw, you have ' + totalBadges + "!");*/

let arr = ["Apple", "Pear", "Banana"];
for (let elem of arr) {
  console.log("Do you want to eat a " + elem + "?");
}