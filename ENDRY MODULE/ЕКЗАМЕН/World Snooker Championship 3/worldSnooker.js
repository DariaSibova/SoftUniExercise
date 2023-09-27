function worldSnooker(input) {
  let stage = input[0];
  let type = input[1];
  let countTicket = Number(input[2]);
  let pic = input[3];

  let isNeedPic = true;

  let totalPrice = 0;

  switch (stage) {
    case "Quarter final":
      switch (type) {
        case "Standard":
          totalPrice = countTicket * 55.5;
          break;
        case "Premium":
          totalPrice = countTicket * 105.2;
          break;
        case "VIP":
          totalPrice = countTicket * 118.9;
          break;
      }
      break;
    case "Semi final":
      switch (type) {
        case "Standard":
          totalPrice = countTicket * 75.88;
          break;
        case "Premium":
          totalPrice = countTicket * 125.22;
          break;
        case "VIP":
          totalPrice = countTicket * 300.4;
          break;
      }
      break;
    case "Final":
      switch (type) {
        case "Standard":
          totalPrice = countTicket * 110.1;
          break;
        case "Premium":
          totalPrice = countTicket * 160.66;
          break;
        case "VIP":
          totalPrice = countTicket * 400;
          break;
      }
      break;
  }
  if (totalPrice > 4000) {
    totalPrice *= 0.75;
    isNeedPic = false;
  } else if (totalPrice > 2500) {
    totalPrice *= 0.9;
  }

  if (pic === "Y" && isNeedPic) {
    totalPrice += 40 * countTicket;
  }

  console.log(totalPrice.toFixed(2));
}

worldSnooker(["Final", "Premium", "25", "Y"]);
