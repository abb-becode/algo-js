//const readlineSync = require("readline-sync");
const math = require("math");

/*using classes*/

module.exports = class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,height) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.height = height;
    } 

    /*get Xpos() {
        return this.topLeftXPos;
    }*/

    //this function returns true if the current rectangle collides with otherRectangle
    collides(r1,r2) {
        var dx = ((r1.topLeftXPos + r1.width) / 2) - ((r2.topLeftXPos + r2.width) / 2);
        var dy = ((r1.topLeftYPos + r1.height) / 2) - ((r2.topLeftYPos + r2.height) / 2);
        var width = (r1.width + r2.width) / 2;
        var height = (r1.height + r2.height) / 2;
        var crossWidth = width * dy;
        var crossHeight = height * dx;
        var collision = 'none';
        //
        console.log("dx:"+dx+" dy:"+dy+" width:"+width+" height:"+height+" crossWidth:"+crossWidth+" crossHeight:"+crossHeight);
        //
        if(math.abs(dx) <= width && math.abs(dy) <= height){
          if(crossWidth > crossHeight){
            collision = (crossWidth > (-crossHeight)) ? 'bottom' : 'left';
          }else{
            collision = (crossWidth > -(crossHeight)) ? 'right' : 'top';
          }
        }
        return(collision);
    }
}

/*var r1 = new Rectangle(100,100,85,85);
var r2 = new Rectangle(100,105,20,200);
console.log("Collision: " + r1.collides(r2));*/