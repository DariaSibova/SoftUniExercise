function godzillaVsKong(input) {
 
    let budget = Number(input[0]);
    let membersCount = Number(input[1]);
    let membersCloths = Number(input[2]);
 
    let decor = budget * 0.1;
 
    let clothsCost = membersCount * membersCloths;
 
    if (membersCount > 150) {
        clothsCost *= 0.90;
    }
 
    let totalCost = clothsCost + decor;
 
    if (budget >= totalCost) {
 
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
 
    } else {
 
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong (["20000",

"120",

"55.5"])