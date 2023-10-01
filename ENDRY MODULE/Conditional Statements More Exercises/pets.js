function solve(input){
let days = Number(input[0]);
let food = Number(input[1]);
let foodPerDayForDog = Number(input[2]);
let foodPerDayForCat = Number(input[3]);
let foodPerDayForTurtleInGram = Number(input[4]);

let gramToKilo = foodPerDayForTurtleInGram / 1000;
let allFoodInKiloForDay = foodPerDayForCat + foodPerDayForDog + gramToKilo ;
let allFoodInDays = allFoodInKiloForDay * days;

if(food > allFoodInDays ){
console.log(`${Math.floor(food - allFoodInDays)} kilos of food left.`)
}else {
    console.log(`${Math.ceil(allFoodInDays - food)} more kilos of food are needed.`)
}
}

solve(["2","10","1","1","1200"])