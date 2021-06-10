const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*Display all even numbers between 1 and 100.*/
let i = 1;
while (i <= 100) {
    if ((i % 2) == 0) {
        console.log(i);
    }
    i++;
}

for (let i = 2;i <= 100; i += 2) {
    console.log(i);
}
