function pastryShop(input) {
  let sweet = input[0];
  let cakesOrdered = Number(input[1]);
  let dayBeforeChristmas = Number(input[2]);
  let pricePerPiece = 0;
  let totalPrice = 0;

  switch (sweet) {
    case "Cake":
      if (dayBeforeChristmas <= 15) {
        pricePerPiece = 24;
      } else {
        pricePerPiece = 28.7;
      }
      break;
    case "Souffle":
      if (dayBeforeChristmas <= 15) {
        pricePerPiece = 6.66;
      } else {
        pricePerPiece = 9.8;
      }
      break;
    case "Baklava":
      if (dayBeforeChristmas <= 15) {
        pricePerPiece = 12.6;
      } else {
        pricePerPiece = 16.98;
      }
      break;
  }

  totalPrice = cakesOrdered * pricePerPiece;

  if (dayBeforeChristmas <= 22) {
    if (totalPrice > 100 && totalPrice < 200) {
      totalPrice = totalPrice - 0.15 * totalPrice;
    }
    if (totalPrice > 200) {
      totalPrice = totalPrice - 0.25 * totalPrice;
    }
  }
  if (dayBeforeChristmas <= 15) {
    totalPrice = totalPrice - 0.1 * totalPrice;
  }

  console.log(totalPrice.toFixed(2));
}

// pastryShop(["Cake", "10", "15"]);
pastryShop(["Souffle", "20", "24"]);
