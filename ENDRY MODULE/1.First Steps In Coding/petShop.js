function petShop(input){
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    let dogFoodTotalPrice = dogFoodCount * 2.50;
    let catFoodTotalPrice = catFoodCount * 4;
    let filnalPrice = dogFoodTotalPrice + catFoodTotalPrice;
    console.log(`${filnalPrice} lv.`);
}

petShop (["5 ","4 "])