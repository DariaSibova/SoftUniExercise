
    function proba(input) {
  let fruit = input[0];
  let day = input[1];
  let kol = Number(input[2]);

  let price;

  if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        price = kol * 2.7;
        break;
      case "apple":
        price = kol * 1.25;
        break;
      case "orange":
        price = kol * 0.9;
        break;
      case "grapefruit":
        price = kol * 1.6;
        break;
      case "kiwi":
        price = kol * 3.0;
        break;
      case "pineapple":
        price = kol * 5.6;
        break;
      case "grapes":
        price = kol * 4.2;
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    switch (fruit) {
      case "banana":
        price = kol * 2.5;
        break;
      case "apple":
        price = kol * 1.2;
        break;
      case "orange":
        price = kol * 0.85;
        break;
      case "grapefruit":
        price = kol * 1.45;
        break;
      case "kiwi":
        price = kol * 2.7;
        break;
      case "pineapple":
        price = kol * 5.5;
        break;
      case "grapes":
        price = kol * 3.85;
        break;
      default:
        console.log("error");
        break;
    }
  }

  if (price) {
    console.log(price.toFixed(2));
  }
}


fruitShop (["apple",

"Tuesday",


"2"])
