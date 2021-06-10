const readlineSync = require("readline-sync");
//const math = require("math");

/*Divisors of integer number*/
console.log("Divisors of integer number");
console.log("==========================");

/*
    Asks for an integer number and generates all the 
    divisors of that integer which are not 1 or itself.
*/

var n = new Number(readlineSync.question('Give integer number? : '));
var divisorsList = [];
var zero = 0;
var divisors = (n)=> {
    for (let i = 2; i < n; i++) {
        var divisor = ((n % i) == zero);
        if (divisor) divisorsList.push(i);
    }
    return divisorsList;   
}

divisors(n);
if (divisorsList.length > 0) {
    console.log('Divisors of ' + n + ' :', divisorsList);
}
else console.log("nothing (it's a prime number)");

