function goldMine(input) {
  let locationCount = Number(input[0]);

  let indexInArray = 1;

  for (index = 0; index < locationCount; index++) {
    let expectetGoldForTheDay = input[indexInArray];

    indexInArray++;

    let days = Number(input[indexInArray]);
    indexInArray++;
    let goldMinedForTheDay = 0;

    for (let day = 0; day < days; day++) {
      goldMinedForTheDay =
        goldMinedForTheDay + Number(input[indexInArray
    ]);
      indexInArray++;
    }

    let averageGoldForTheDay = goldMinedForTheDay / days;

    if (averageGoldForTheDay >= expectetGoldForTheDay) {
      console.log(
        `Good job! Average gold per day: ${averageGoldForTheDay.toFixed(2)}.`
      );
    } else {
      console.log(
        `You need ${(expectetGoldForTheDay - averageGoldForTheDay).toFixed(2)} gold.`
      );
    }
  }
}

goldMine(["1",
"5",
"3",
"10",
"1",
"3"])
;
