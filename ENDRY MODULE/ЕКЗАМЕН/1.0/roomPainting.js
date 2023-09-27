function roomPainting(input){

    let paintCans = Number(input[0]);
    let wallpaperRolls = Number(input[1]);
    let pricePairGloves = Number(input[2]);
    let priceForOneBrush  = Number(input[3]);

    let totalPriceForPaint = paintCans * 21.50;
    let totalPriceForWallpaperRoll = wallpaperRolls * 5.20
    let glovesNeeded = Math.ceil(wallpaperRolls * 0.35);
    let brushNeeded = Math.floor(paintCans * 0.48);
    let totalPriceForGloves = glovesNeeded * pricePairGloves;
    let totalPriceForBrush = brushNeeded * priceForOneBrush;

    let allPrice = totalPriceForPaint + totalPriceForWallpaperRoll + totalPriceForGloves + totalPriceForBrush;
    let delivery = (1 / 15) * allPrice;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)
  

    console.log(`Общата цена за боя: ${totalPriceForPaint}`);
    console.log(`Обща цена за тапети: ${totalPriceForWallpaperRoll}`);
    console.log(`Броят нужни ръкавици: ${glovesNeeded}`);
    console.log(`Броят нужни четки: ${brushNeeded}`);
    console.log(`Общата цена на ръкавиците: ${totalPriceForGloves}`);
    console.log(`Общата цена на четките: ${totalPriceForBrush}`);
    console.log(`Общата стойност на продуктите: ${allPrice}`)
    console.log(`Стойността на доставката:${delivery.toFixed(2)}`)

}

// roomPainting  ([ "10",
//     "8",
//     "2.2",
//     "5"]);
    
roomPainting  ([ "21",
"18",
"5",
"2.2"])