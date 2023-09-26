function repainting (input){
    
    let nylonNeeded = Number(input[0]);
    let paintLittersNeeded = Number(input[1]);
    let thinnerLittersNeeded = Number(input[2]);
    let hoursForWork = Number(input[3]); 

    let bagPrice = 0.40;

    let nylonPrice = (nylonNeeded + 2) * 1.50 ;
    let paintPrice = (paintLittersNeeded * 1.1) * 14.50;
    let thinnerPrice = thinnerLittersNeeded * 5.00;

    let materialsPrice = nylonPrice + paintPrice + thinnerPrice + bagPrice ;
     
    let moneyForWork = (materialsPrice * 0.30) * hoursForWork ;
    
    let totalMoney = materialsPrice + moneyForWork;
    console.log(totalMoney);

}

repainting (["10 ","11 ","4 ","8 "])