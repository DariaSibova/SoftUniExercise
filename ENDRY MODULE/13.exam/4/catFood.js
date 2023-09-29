function catFood(input) {
  let numberOfCats = Number(input[0]);

  let group1CatsCount = 0;
  let group2CatsCount = 0;
  let group3CatsCount = 0;
  let totalFoodNeeded = 0;

  for (index = 1; index <= numberOfCats; index++) {
    let eatFood = Number(input[index]);

    if (eatFood >= 100 && eatFood < 200) {
      group1CatsCount++;
    }
    if (eatFood >= 200 && eatFood < 300) {
      group2CatsCount++;
    }
    if (eatFood >= 300 && eatFood < 400) {
      group3CatsCount++;
    }
    totalFoodNeeded = totalFoodNeeded + eatFood;
  }

  let totalFoodNeededPerDay = (totalFoodNeeded / 1000) * 12.45;

  console.log(`Group 1: ${group1CatsCount} cats.`);
  console.log(`Group 2: ${group2CatsCount} cats.`);
  console.log(`Group 3: ${group3CatsCount} cats.`);
  console.log(`Price for food per day: ${totalFoodNeededPerDay.toFixed(2)} lv.`);
}

catFood(["6", "102", "236", "123", "399", "342", "222"]);

catFood(["10","256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])