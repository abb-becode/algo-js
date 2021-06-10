const readlineSync = require("readline-sync");
//const math = require("math");

//include pizzas.js file that contains definition of the Pizzas collection class
const Pizzas = require('./pizzas.js');

/*
    Pizza flavors manager using class Pizza
*/

// return true if in range, otherwise false
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}
//Display list of pizzas in the collection
function DisplayPizzasList() {
    console.log(JSON.stringify(pizs.PizzasList));
}
// display a menu 
function DisplayMenu() {
    console.log("");
    console.log("Please choose your actions:");
    console.log("");
    console.log("1 - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Exit this program");
    console.log("");
}

var choice;
var exitProgram = false;
var pizs =  new Pizzas();
var p;

//display wecome message
console.log("Hello! Welcome to the Pizza Flavors Manager.");

//loop in the menu to execute choices of user
while (!exitProgram) {
    DisplayMenu();
    choice = readlineSync.question("Enter your action's number: ");
    if (!inRange(choice,1,4)) {
        console.log("Error, choice must be between 1 and 4");
    }
    else {
        if (choice == 1) {
            if (pizs.PizzasList.length == 0) {
                console.log("No pizza in the collection");
            }
            else {
                //console.log(JSON.stringify(pizs.PizzasList));
                DisplayPizzasList();
            }
        }
        else if (choice == 2) {
            p = readlineSync.question("Enter your favore's pizza name: ");
            var pObj = pizs.newPizza(p);
            console.log(pObj.FullName + " Pizza added successfully");
            //console.log(pizs.PizzasList);
            DisplayPizzasList();
        }
        else if (choice == 3) {
            p = readlineSync.question("Enter your favore's pizza name: ");
            var answer = pizs.RmovePizza(p);
            if (answer == "none") console.log("Sorry Pizza-name doesn't exist in the collection")
            else {
                console.log(p + " removed successfully");
                //console.log(pizs.PizzasList);
                DisplayPizzasList();
            }
            
        }
        else if (choice == 4) { exitProgram = true;  }
    }
    if (exitProgram) {
        console.log("End program");
        break;
    }
}

