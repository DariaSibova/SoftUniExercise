function vacationBooksList(input) {
  let currentBookPages = Number(input[0]);
  let pagesPerHours = Number(input[1]);
  let daysNeeded = Number(input[2]);

  let totalTimeReading = currentBookPages / pagesPerHours
  let hoursPerDay = totalTimeReading / daysNeeded
   console.log(hoursPerDay)
}

vacationBooksList (["212 ","20 ","2 "])