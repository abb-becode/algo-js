const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*the day of week*/
let n = readlineSync.question("enter a number : ");
let i = 1;
let result = 0;
while ( i <= n) {
    let j = new Number(readlineSync.question("give me a number : "));
    result += j;
    i++;
}
console.log("you entered " + n + " number(s)" + " and the sum of all this number is: " + result);