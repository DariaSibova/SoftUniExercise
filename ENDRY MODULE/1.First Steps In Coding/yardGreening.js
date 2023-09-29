function yardGreening (input){
  let sqareMetersTotal = Number(input[0]);
  let sqareMetersTotalPrice = sqareMetersTotal * 7.61;
  let discount = sqareMetersTotalPrice * 0.18;
  let totalPriceWithDiscount = sqareMetersTotalPrice - discount;
  console.log  (`The final price is: ${totalPriceWithDiscount} lv.`);
  console.log (`The discount is: ${discount} lv.`)
  
}

yardGreening (["550"])