function solve(input){
let priceForVegetables = Number(input[0]);
let priceForFruit = Number(input[1])
let allKiloForVegetables = Number(input[2]);
let allKiloForFruit = Number(input[3]);


let allPriceForVegetables = priceForVegetables * allKiloForVegetables;
let allPriceForFruit = priceForFruit * allKiloForFruit;
let all = allPriceForVegetables + allPriceForFruit;

let priceInEuro = all / 1.94
console.log(priceInEuro)



}

solve(["0.194","19.4","10","10"]);