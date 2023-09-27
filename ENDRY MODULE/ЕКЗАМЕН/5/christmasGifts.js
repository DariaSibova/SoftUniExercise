function christmasGifts(input){
let age = 0;
let index = 0;
let kidsCount = 0;
let adultCount = 0;
let moneyForToys = 0;
let moneyForSweaters = 0;

let command = input[index];

while(command !== "Christmas"){
    
    let age = Number(command);
    index++;
    command = input[index];
    if(age <= 16){
        kidsCount++
    }else {
        adultCount++
    }
}

moneyForToys = 5 * kidsCount;
moneyForSweaters = 15 * adultCount;

console.log(`Number of adults: ${adultCount}`);
console.log(`Number of kids: ${kidsCount}`)
console.log(`Money for toys: ${moneyForToys}`);
console.log(`Money for sweaters: ${moneyForSweaters}`);
}



// christmasGifts (["16",
// "20",
// "46",
// "12",
// "8",
// "20",
// "49",
// "Christmas"])
christmasGifts(["16",
"16",
"16",
"16",
"16",
"Christmas"])

