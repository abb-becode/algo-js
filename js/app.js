const math = require("math");

//include module.js file that contains definition of of the Rectangle collection class
const Rectangles = require('./rectangles.js');

/*using classes*/
var rects =  new Rectangles();
var topLeftXPos,topLeftYPos,width,height;
for (let i=1; i<=3; i++ ) {
    topLeftXPos = math.floor(Math.random() * 100);
    topLeftYPos = math.floor(Math.random() * 50);
    width = math.floor(Math.random() * 100);
    height = math.floor(Math.random() * 50);
    rects.newRectangle(topLeftXPos,topLeftYPos,width,height);
}
rects.collides();
