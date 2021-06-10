const readlineSync = require("readline-sync");
const math = require("math");

/*using function*/

//This function return a distance between two points 
//does need two parameters 
//will accept four integers (x1, x2, y1, and y2) as arguments
//when x1, y1 coordiantes of first point A
//and x2, y2 coordinates of second point B

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return math.sqrt(x * x + y * y).toFixed(2);
    //return math.hypot(x2-x1, y2-y1);
}

let x1 = new Number(readlineSync.question('please enter absis of first point? '));
let y1 = new Number(readlineSync.question('please enter a ordonnate of first point? '));
let x2 = new Number(readlineSync.question('please enter absis of second point? '));
let y2 = new Number(readlineSync.question('please enter ordonnate of second point? '));
console.log("the distance between A(" + x1 + "," + y1 + ") and " + "B(" + x2 + "," + y2 + ") : " + getDistance(x1,y1,x2,y2));

