const readlineSync = require("readline-sync");
const math = require("math");

/*generate an integer between 1 and 100*/
var intR100 =  math.floor(Math.random() * 10);

/*Guess the number*/
console.log("Guess the number");
console.log("================");

var resp = true;
while (resp) {
    let gn = new Number(readlineSync.question('Guess the number? : '));
    if (gn < intR100) {
        console.log("Too low");
    }
    else if (gn > intR100){
        console.log("Too high");
    }
    else {
        console.log("Well guessed!");
        resp = false;
    }
}
