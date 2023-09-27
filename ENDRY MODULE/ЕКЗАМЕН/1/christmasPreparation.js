function christmasPreparation(input){

    let paper =Number(input[0]);
    let fabric = Number(input[1]);
    let glue = Number(input[2]);

    let discount =Number(input[3]);
    
    let discountInPercents = discount / 100;

    let pricePaper = paper * 5.80;
    let priceFabric = fabric * 7.20;
    let priceGlue = glue * 1.20;

    let allPrice = pricePaper + priceFabric + priceGlue;

    let priceWithDiscount = allPrice - (allPrice * discountInPercents)
   

    console.log((priceWithDiscount).toFixed(3));
}

christmasPreparation(["2",
"3",
"2.5",
"25"])


