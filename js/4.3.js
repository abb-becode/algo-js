const readlineSync = require("readline-sync");
const math = require("math");

/*using function*/

//This function return a random number from 1 to ten 
//does not need parameters
let rand10 = () => {
    return math.floor(Math.random() * 10);
}


//This function call n times rand10 function and return an array with the values 
//does take one parameter (to be number)
let multiRand = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i += 1) {
        let j = rand10();
        arr.push(j);
    }
    return arr;
}

let n = new Number(readlineSync.question('please enter a number? '));
console.log("array after multiRand : " + multiRand(n));