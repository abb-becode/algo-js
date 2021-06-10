//const readlineSync = require("readline-sync");
//const math = require("math");

/*using classes*/

// An individual pizza. 
class Pizza {
    constructor(name) {
      this.name = name;
    } 
    get FullName() {
      return this.name;
    }
}

module.exports = class Pizzas {
    constructor() {
        this.pizzas = [];
    } 

    // create a new rectangle and save it in the collection
    newPizza(name){
      let p = new Pizza(name)
      this.pizzas.push(p)
      return p;
    }
    //get list off all pizzas
    get PizzasList() {
      return this.pizzas;
    }

    //set list to pizzas collection to refresh content of pizzas collection
    //when remove item for exemple
    set PizzasList(result) {
      this.pizzas = result;
    }
    //remove a specific pizza from pizzas collection
    RemovePizza(name) {
        var found = this.pizzas.find(obj => {
          return obj.name === name;
        });
        //console.log("found: " + found.name);
        if (found) {
            const result = this.pizzas.filter(objs => objs.name != name);
            return result;
        }
        else return null;
    }
}