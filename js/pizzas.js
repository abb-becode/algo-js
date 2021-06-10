//const readlineSync = require("readline-sync");
const math = require("math");

/*using classes*/

// An individual rectagle. 
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
    //remove a specific pizza from pizzas list array
    RmovePizza(name) {
        if (this.pizzas.includes(name)) {
            const result = this.pizzas.filter(pizza => pizza != name);
            return result;
        }
        else return "none";
    }
}