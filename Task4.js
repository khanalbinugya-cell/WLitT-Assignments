 let rectangle ={
    length:5,
    breadth:4,
    area:calculateArea,
};
let square ={
    length:4,
    breadth:4,
    area:calculateArea
};
 function calculateArea(){
    return this.length * this.breadth;
 }
 console.log("rectangle area "+ rectangle.area());
 console.log("square area "+ square.area());