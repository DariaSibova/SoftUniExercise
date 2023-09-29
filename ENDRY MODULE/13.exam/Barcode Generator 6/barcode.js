function barcode(input) {
  let startInterval = String(input[0]);
  let endInterval = String(input[1]);

  let startA = Number(startInterval[0]);
  let endA = Number(endInterval[0]);
  let startB = Number(startInterval[1]);
  let endB = Number(endInterval[1]);
  let startC = Number(startInterval[2]);
  let endC = Number(endInterval[2]);
  let startD = Number(startInterval[3]);
  let endD = Number(endInterval[3]);

  let buff = ""
  for (let a = startA; a <= endA; a++) {
    for (let b = startB; b <= endB; b++) {
      for (let c = startC; c <= endC; c++) {
        for (let d = startD; c <= endD; d++) {
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            buff += `${a}${b}${c}${d}`
          }
        }
      }
    }
  }
  console.log(buff)
}

barcode(["2345", "6789"]);
