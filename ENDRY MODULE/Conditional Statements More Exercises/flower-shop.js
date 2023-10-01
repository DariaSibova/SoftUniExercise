function solve(input){

//tax = 0.95; 5%

let countMagnolia = Number(input[0]);
let countZumbul = Number(input[1]);
let countRoses = Number(input[2]);
let countCactus = Number(input[3]);
let priceForPresent = Number(input[4]);

let allPrice = countMagnolia * 3.25 + countZumbul * 4 + countRoses * 3.50 + countCactus * 8 ;
let tax = allPrice * 0.05;
let taxPrice = allPrice - tax;

let present = priceForPresent - taxPrice;

if(taxPrice >= priceForPresent){
    console.log(`She is left with ${Math.floor(taxPrice - priceForPresent)} leva.`)
}else {
    console.log(`She will have to borrow ${Math.ceil(present)} leva.`)
}



}

solve(["2","3","5","1","50"])