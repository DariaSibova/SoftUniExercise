function oscarCeremony(input){

    let rent = Number(input[0]);
    
    let priceForStatuettes = rent * 0.70
    let priceFotCatering = priceForStatuettes * 0.85
    let priceForSounding = (1 /2 ) * priceFotCatering;
    
    
    let totalPrice =rent + priceForStatuettes + priceFotCatering + priceForSounding;
    console.log(totalPrice.toFixed(2))
    
    }