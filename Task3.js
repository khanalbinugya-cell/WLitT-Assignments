let cylinder={
    radius:5,
    height:10,
    area:function (){
    return PI *this.radius**2*this.height;
}
};
let PI=3.14;
console.log("ares is "+ cylinder.area());
