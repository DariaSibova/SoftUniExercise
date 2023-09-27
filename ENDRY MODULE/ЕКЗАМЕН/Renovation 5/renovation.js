function renovation(input){

let index = 0;
let h = Number(input[index]);
index++
let w = Number(input[index]);
index++;
let percentage = Number(input[index]);
index++


let quadraticMForOneWalls = h * w;
let quadraticMForAllWalls = quadraticMForOneWalls * 4;
let totalQuadraticM = Math.ceil(quadraticMForAllWalls * ( 1- (percentage / 100)));

let command = input[index];
index++

while(command !== "Tired!"){
let paint = Number(command);
totalQuadraticM -= paint;
if(totalQuadraticM <= 0){
    break;
}

command = input[index]
index++
}
if(totalQuadraticM > 0){
    console.log(`${totalQuadraticM} quadratic m left.`)
}else if(totalQuadraticM < 0){
    console.log(`All walls are painted and you have ${Math.abs(totalQuadraticM)} l paint left!`);
}else {
    console.log(`All walls are painted! Great job, Pesho!`)
}

}

renovation (["3", "5", "10", "2", "3", "4", "Tired!"])