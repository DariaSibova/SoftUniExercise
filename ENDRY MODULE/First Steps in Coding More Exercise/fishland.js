function solve(input){
let priceForMackerel = Number(input[0]); 
let priceForSprat = Number(input[1]);

let kiloBonito = Number(input[2]);
let kiloScad = Number(input[3]);
let kiloMussels = Number(input[4]);
// price for mussels = 7.50

let priceForBonito = priceForMackerel + priceForMackerel * 0.60; //11.04lv
let sumOfBonito = kiloBonito * priceForBonito; //16.56
let priceForScad = priceForSprat + priceForSprat * 0.80; //7.56lv
let sumForScad = kiloScad *priceForScad; //18.90
let sumForMussels =  kiloMussels * 7.50 ; // 7.50
let total = sumOfBonito + sumForScad + sumForMussels;

console.log(total.toFixed(2));

}

solve(["6.90","4.20","1.5","2.5","1"])