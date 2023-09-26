function shopping(input) {
 
    let budget = Number(input[0]);
    let videoCardPieces = Number(input[1]);
    let processorPieces = Number(input[2]);
    let ramPieces = Number(input[3]);
 
    let videoCardCost = 250;
 
    let videoCardPrice = videoCardPieces * videoCardCost;
 
    let processorPrice = videoCardPrice * 0.35 * processorPieces;
 
    let ramPrice = videoCardPrice * 0.1 * ramPieces;
 
    let totalprice = videoCardPrice + processorPrice + ramPrice;
 
    if (videoCardPieces > processorPieces) {
        totalprice *= 0.85
    }
 
    if (budget >= totalprice) {
 
        console.log(`You have ${(budget - totalprice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalprice - budget).toFixed(2)} leva more!`);
    }
}

shopping (["900",

"2",

"1",

"3"])