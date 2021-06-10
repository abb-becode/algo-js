const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*using function*/

//This function take two parameters 
//width and length of rectange and return the surface of that rectange
let calcSurface = (width,length) => {
    return width * length;
}

//console.log("surface of rectangle with width:12 and length:14 is :" + calcSurface(12,14));

console.log("Calculate surface of rectange :");
let w = readlineSync.question('width of ractagle? ');
let l = readlineSync.question('length of ractagle? ');
console.log("surface of rectangle with width:12 and length:14 is : " + calcSurface(w,l));


