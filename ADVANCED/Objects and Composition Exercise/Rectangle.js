function solve(width,height,color){
    color = color[0].toUpperCase() + color.substring(1)
    let result = {
        width,
        height,
        color,
        calcArea:function(){
            return this.width * this.height
        }
    }
    return result
}
let rect = solve(4,5,'red');
console.log(rect.width);
rect.width = 5;
console.log(rect.width);
    console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());