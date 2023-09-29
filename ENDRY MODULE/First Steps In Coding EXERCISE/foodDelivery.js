function foodDelivery(input){

   let chickenMenuCount = Number(input[0]);
   let fishMenuCount = Number(input[1]);
   let veggieMenuCount = Number(input[2]);
   let deliveyPrice = 2.50;

   let chickenMenuPrice = chickenMenuCount * 10.35;
   let fishMenuPrice = fishMenuCount * 12.40 ;
   let veggieMenuPrice = veggieMenuCount * 8.15;

   let totalMenuPrice = chickenMenuPrice + fishMenuPrice +veggieMenuPrice;
   let dessertPrice =  totalMenuPrice * 0.20;
   
   let totalPrice = totalMenuPrice + dessertPrice + deliveyPrice;
   console.log (totalPrice);
}

foodDelivery (["2 ","4 ","3 "])