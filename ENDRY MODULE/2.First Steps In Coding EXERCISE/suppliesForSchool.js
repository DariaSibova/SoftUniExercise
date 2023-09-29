function suppliesForSchool (input) {
     
    let pensPackageCount = Number(input[0]);
    let markersPackageCount = Number(input [1]);
    let detergentLitters =Number(input[2]);
    let discount =Number(input[3]);

    let pensTotalPrice = pensPackageCount * 5.80 ;
    let markersTotalPrice = markersPackageCount * 7.20 ;
    let detergentTotalPrice = detergentLitters * 1.20 ;

    let totalPrice = pensTotalPrice + markersTotalPrice + detergentTotalPrice ;

    let totalPriceAfterDiscount = totalPrice - ( totalPrice * 0.25);
    console.log ( totalPriceAfterDiscount)
}

suppliesForSchool (["2 ","3 ","4 ","25 "])