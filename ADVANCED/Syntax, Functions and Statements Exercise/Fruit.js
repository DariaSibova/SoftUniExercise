function solve(arg1,arg2,arg3){
    let fruit = arg1;
    let weight = parseInt(arg2);
    let price = parseFloat(arg3);
    const weightInKg = parseFloat((weight / 1000).toFixed(2));

    const moneyNeeded = parseFloat((weightInKg * price).toFixed(2));

    console.log(`I need $${moneyNeeded} to buy ${weightInKg} kilograms ${fruit}.`)
}


solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);