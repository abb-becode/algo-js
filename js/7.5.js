//const readlineSync = require("readline-sync");
const math = require("math");

/*
    Generate array with random numbers and
    sort it without using Array.sort()
*/
console.log("Sort an array without using Array.sort()");
console.log("=========================================");

console.log("Generating array please wait...");
/*generate an array with randomed numbers between 1 and 100*/
var arr = [];
var temp;
var intR100;
for (let i=0; i<=9; i++ ) {
    intR100 =  math.floor(Math.random() * 100);
    arr.push(intR100);
}

/*Sorting array*/
console.log("Sorting (assending method) please wait...");
for (var i=0; i<=arr.length; i++) {
    for (let j=i+1; j<= arr.length-1; j++) {
        if (arr[j] < arr[i]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log("Sorted array :");
console.log(arr);

