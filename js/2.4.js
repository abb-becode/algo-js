const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*even and odd number operation.*/
let i = 1;
for (;i <= 100; i++) {
    if ((i % 2) == 0) {
        console.log("0");
    } 
    else {
        console.log(i * 3);
    }
}