const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*using array*/
let arr1 = [1,2,3,4,5];
let arr2 = [100,101,102];
let sumArr1 = 0;
let sumArr2 = 0;
for (let i = 0; i < arr1.length; i += 1) {
    sumArr1 += arr1[i];
}
for (let i = 0; i < arr2.length; i += 1) {
    sumArr2 += arr2[i];
}
console.log("sum of all element of arr1 is: " + sumArr1); 
console.log("sum of all element of arr2 is: " + sumArr2); 