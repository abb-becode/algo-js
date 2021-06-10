const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*the favorite number*/
let favoriteNumber = 1;
while (favoriteNumber != 42) {
    favoriteNumber =  readlineSync.question("enter your favorite number :");
    if (favoriteNumber != 42) {
        console.log("wrong number :-(")
    }
}