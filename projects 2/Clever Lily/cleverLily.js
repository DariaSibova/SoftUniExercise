function demo(input) {
 
    let lillysAge = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
 
    let toyCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let savedMoneyCounter = 0;
 
    for (let currentBday = 1; currentBday <=lillysAge; currentBday++ ) {
        if(currentBday % 2 === 0) {
            savedMoney += 10 + savedMoneyCounter;
            stolenMoney++;
            savedMoneyCounter += 10;
        } else {
            toyCounter++;
        }
    }
    let totalMoneyFromToys = toyCounter * toyPrice;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;
 
    if (totalSavedMoney >= washingMashinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice - totalSavedMoney).toFixed(2)}`);
    }
 
 
}

cleverLily(["10",

"170.00",

"6"])