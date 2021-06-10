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

/*
    this function tacke an array like argument and return average of array's elements
*/
let average = (arr) => {
    let result =  arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;
    return result;
}

/*
    this function tacke an array like argument and return min of array's elements
*/
let min = (arr) => {
    return math.min.apply(null, arr);
}

/*
    this function tacke an array like argument and return max of array's elements
*/
let max = (arr) => {
    return math.max.apply(null, arr);
}

let n = new Number(readlineSync.question('please enter a number? '));
let arr = multiRand(n);
console.log("array after multiRand : " + arr);
console.log("average of aray : " + average(arr));
console.log("min of array : " + min(arr));
console.log("max of array : " + max(arr));