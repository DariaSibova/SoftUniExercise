function proba(input){
  
    let ekskurzia = Number(input[0]);
    let pazzle = Number(input[1]);
    let doll =Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truk = Number(input[5]);

    let totalPrice = pazzle * 2.60 + doll * 3 + bear * 4.10 + minion * 8.20 + truk * 2;
    let toys = pazzle + doll + bear + minion + truk;


let totalCost = 0;

if (toys >= 50){
    totalPrice = totalPrice * 0.75
}
    
  totalPrice = totalPrice * 0.90;

  if (totalPrice >= ekskurzia)  {
    console.log(`Yes! ${(totalPrice - ekskurzia).toFixed(2)} lv left.`)
  }else {
    console.log(`Not enough money! ${(ekskurzia - totalPrice).toFixed(2)} lv needed.`)
  }

}
