const readlineSync = require("readline-sync");
/*const math = require("math");*/

/*the day of week*/
let dayNumber = readlineSync.question("enter a number betwwen 1 and 7: ");
if (dayNumber == 1) { console.log("Monday"); } 
else if (dayNumber == 2) { console.log("Tuesday"); }
else if (dayNumber == 3) { console.log("Wednesday"); }
else if (dayNumber == 4) { console.log("Thursday"); }
else if (dayNumber == 5) { console.log("Friday"); }
else if (dayNumber == 6) { console.log("Saturday"); }
else if (dayNumber == 7) { console.log("Sunday"); }
else { console.log("Wrong number"); }