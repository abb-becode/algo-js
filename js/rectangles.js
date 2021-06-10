//const readlineSync = require("readline-sync");
const math = require("math");

/*using classes*/

// An individual rectagle. 
class Rectangle {
  constructor(topLeftXPos,topLeftYPos,width,height) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.height = height;
  } 
  get Dimensions() {
    console.log("topLeftXPos:"+this.topLeftXPos+" topLeftYPos:"+this.topLeftYPos+" width:"+this.width+this.height+" height:"+this.height);
  }
}

module.exports = class Rectangles {
    constructor() {
        this.rectangles = [];
    } 

    // create a new rectangle and save it in the collection
    newRectangle(topLeftXPos,topLeftYPos,width,height){
      let r = new Rectangle(topLeftXPos,topLeftYPos,width,height)
      this.rectangles.push(r)
      return r;
    }
    //get all rectangles
    get allRectangles() {
      return this.rectangles
    }
    //get nbre of rectangles
    get nbreOfRectangles() {
      return this.rectangles.length;
    }

    /*get Xpos() {
        return this.topLeftXPos;
    }*/

    //this function returns true if the current rectangle collides with otherRectangle
    collides() {
      var _rects = this.rectangles;
      var __rects = this.rectangles;
      for (let i=0; i<_rects.length; i++) {
        var r1 = _rects[i];
        for (let j=0; j<__rects.length; j++) {
            let r2 = __rects[j];
            var dx = ((r1.topLeftXPos + r1.width) / 2) - ((r2.topLeftXPos + r2.width) / 2);
            var dy = ((r1.topLeftYPos + r1.height) / 2) - ((r2.topLeftYPos + r2.height) / 2);
            var width = (r1.width + r2.width) / 2;
            var height = (r1.height + r2.height) / 2;
            var crossWidth = width * dy;
            var crossHeight = height * dx;
            var collision = 'none';
            if(math.abs(dx) <= width && math.abs(dy) <= height){
              if(crossWidth > crossHeight){
                collision = (crossWidth > (-crossHeight)) ? 'bottom' : 'left';
              }else{
                collision = (crossWidth > -(crossHeight)) ? 'right' : 'top';
              }
            }
            if (i != j) {
              if ( collision != "none") {
                console.log("Collision " +i+"-"+j+" :"+collision);
              }
            }
        }
      }
    }
}