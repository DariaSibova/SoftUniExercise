function basketballEquipment(input){

    let annualFee = Number(input[0]);

    let shoes = annualFee * 0.60 ;
    let clothes = shoes * 0.80;
    let ball = clothes / 4;
    let accessories = ball / 5;

    let totalPrice = annualFee + shoes + clothes + ball + accessories;
    console.log(totalPrice);

}

basketballEquipment(["365 "])