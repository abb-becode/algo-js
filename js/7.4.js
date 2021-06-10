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
            //list all items in the pizzas collection
        if (choice == 1) {
            if (pizs.PizzasList.length == 0) {
                console.log("Pizzas collection is empty");
            }
            else {
                var pList = pizs.PizzasList;
                console.log(JSON.stringify(pList));
                //DisplayPizzasList();
            }
        }
            //add new pizza to a pizzas collection
        else if (choice == 2) {
            var pizzaName = readlineSync.question("Enter your favore's pizza name: ");
            var pObj = pizs.newPizza(pizzaName);
            console.log("Pizza "+ pObj.FullName + " added successfully");
        }
            //remove a specific pizza from pizzas collection
        else if (choice == 3) {
            var pName = readlineSync.question("Enter pizza to remove from collection: ");
            var result = pizs.RemovePizza(pName);
            if (result == null) {
                console.log("Sorry '"+pName+"' doesn't exist or collection is empty");
            }
            else {
                pizs.PizzasList = [...result];
                console.log(pName + " removed successfully");
            }
            
        }
        else if (choice == 4) { exitProgram = true;  }
    }
        //if choice = 4 exit program
    if (exitProgram) {
        console.log("End program");
        break;
    }
}

