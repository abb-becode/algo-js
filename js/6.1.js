const readlineSync = require("readline-sync");
const math = require("math");

/*using classes*/

/*
     
*/

class Circle {
    constructor(xPos,yPos,radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
      } 

      // area method
      get surface() {
        return Math.PI * this.radius * this.radius;
      }

      // perimeter method
      get perimeter() {
        return 2*Math.PI*this.radius;
      };

      set circleXYR(val) {
        val = val.split(' ')
        this.xPos = val[0];
        this.yPos = val[1];
        this.radius = val[2];
      }

      move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
      }
};

var c = new Circle(3,3,3);
c.circleXYR = "4 4 4";
c.move(8,8);
console.log("xPos: "+c.xPos+" yPos: "+c.yPos);
console.log('Area =', c.surface.toFixed(2));
console.log('perimeter =', c.perimeter.toFixed(2));