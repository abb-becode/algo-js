const readlineSync = require("readline-sync");
//const math = require("math");

/*Fibonacci Numbers*/
console.log("Fibonacci number");
console.log("================");

/*
    Asks for an integer n and generates the n first Fibonacci numbers.
*/
var i;
var fib = [];
fib[0] = 0;
fib[1] = 1;

var n = new Number(readlineSync.question('Give a integer number? : '));
for (i = 2; i < n; i++) {
  // Next fibonacci number = previous + one before previous
  fib[i] = fib[i - 2] + fib[i - 1];
  if (fib[i] <= n) { 
    console.log(fib[i]);
  }
  else { break; }
}
