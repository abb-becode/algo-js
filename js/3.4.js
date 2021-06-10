const readlineSync = require("readline-sync");
const math = require("math");

/*using array*/
let arr = [1,2,3,4,5];
let min = math.min.apply(null, arr);
let max = math.max.apply(null, arr);

console.log("min of array is: " + min); 
console.log("max of array is: " + max); 



