const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*using array*/
let arr1 = [1,2,3,4,5];
let arr2 = [];

//method push
for (let i = 0; i < arr1.length; i += 1) {
    arr2.push(arr1[i]);
}
console.log("Elements of arr2: " + arr2); 

//method ...
arr2 = [...arr1];
console.log("Elements of arr2: " + arr2); 

