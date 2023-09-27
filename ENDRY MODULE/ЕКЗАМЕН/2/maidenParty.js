function maidenParty(input){


    
    let priceMaidenParty = Number(input[0]);
    let loveMessages = Number(input[1]);
    let roses = Number(input[2]);
    let keyChains = Number(input[3]);
    let caricature = Number(input[4]);
    let strokeOfLuck = Number(input[5]);

    let sum = loveMessages * 0.60 + roses * 7.20 + keyChains * 3.60 + caricature * 18.20 + strokeOfLuck * 22;
    let NumberOfItems = loveMessages + roses + keyChains + caricature + strokeOfLuck;
   
    let totalCost = 0
    let discount = 0.65;
    let tax = 0.90;

    if ( NumberOfItems > 25){
        sum = sum * 0.65 ;  
    }
    sum = sum * 0.90;

    if (sum >= priceMaidenParty){
        console.log(`Yes! ${(sum - priceMaidenParty).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(priceMaidenParty - sum).toFixed(2)} lv needed.`)
    }
}


maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"])
